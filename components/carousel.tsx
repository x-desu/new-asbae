"use client"

import type { ReactNode } from "react"
import { useEffect, useMemo, useRef, useState } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import styles from "./carousel.module.css"

export type CarouselItem = {
  id: string | number
  title: string
  description: string
  icon?: ReactNode
  content?: ReactNode
}

type CarouselProps = {
  items: CarouselItem[]
  baseWidth?: number
  autoplay?: boolean
  autoplayDelay?: number
  pauseOnHover?: boolean
  loop?: boolean
  round?: boolean
  className?: string
}

const DRAG_BUFFER = 8
const VELOCITY_THRESHOLD = 500
const GAP = 16
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 } as const

function CarouselCard({
  item,
  index,
  itemWidth,
  round,
  trackItemOffset,
  x,
  suppressClick,
}: {
  item: CarouselItem
  index: number
  itemWidth: number
  round: boolean
  trackItemOffset: number
  x: ReturnType<typeof useMotionValue<number>>
  suppressClick: () => boolean
}) {
  const range = [
    -(index + 1) * trackItemOffset,
    -index * trackItemOffset,
    -(index - 1) * trackItemOffset,
  ]
  const rotateY = useTransform(x, range, [22, 0, -22], { clamp: false })

  return (
    <motion.div
      className={cn(styles.item, round && styles.roundItem)}
      style={{
        width: itemWidth,
        height: round ? itemWidth : "100%",
        rotateY,
        ...(round && { borderRadius: "50%" }),
      }}
      onClickCapture={(event) => {
        if (!suppressClick()) return
        event.preventDefault()
        event.stopPropagation()
      }}
    >
      {item.content ?? (
        <>
          <div className={cn(styles.itemHeader, round && styles.roundItemHeader)}>
            <span className={styles.iconContainer}>{item.icon}</span>
          </div>
          <div className={styles.itemContent}>
            <div className={styles.itemTitle}>{item.title}</div>
            <p className={styles.itemDescription}>{item.description}</p>
          </div>
        </>
      )}
    </motion.div>
  )
}

export default function Carousel({
  items,
  baseWidth = 320,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
  className,
}: CarouselProps) {
  const containerPadding = 16
  const itemWidth = baseWidth - containerPadding * 2
  const trackItemOffset = itemWidth + GAP
  const containerRef = useRef<HTMLDivElement>(null)
  const dragStartedRef = useRef(false)
  const suppressNextClickRef = useRef(false)
  const [position, setPosition] = useState(loop ? 1 : 0)
  const [isHovered, setIsHovered] = useState(false)
  const [isJumping, setIsJumping] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const x = useMotionValue(-position * trackItemOffset)

  const itemsForRender = useMemo(() => {
    if (!loop) return items
    if (items.length === 0) return []
    return [items[items.length - 1], ...items, items[0]]
  }, [items, loop])

  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) return

    const container = containerRef.current
    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)
    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [pauseOnHover])

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return
    if (pauseOnHover && isHovered) return

    const timer = window.setInterval(() => {
      setPosition((prev) => Math.min(prev + 1, itemsForRender.length - 1))
    }, autoplayDelay)

    return () => window.clearInterval(timer)
  }, [autoplay, autoplayDelay, isHovered, itemsForRender.length, pauseOnHover])

  useEffect(() => {
    const startingPosition = loop ? 1 : 0
    setPosition(startingPosition)
    x.set(-startingPosition * trackItemOffset)
  }, [items.length, loop, trackItemOffset, x])

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1))
    }
  }, [itemsForRender.length, loop, position])

  const activeIndex =
    items.length === 0
      ? 0
      : loop
        ? (position - 1 + items.length) % items.length
        : Math.min(position, items.length - 1)

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false)
      return
    }

    const lastCloneIndex = itemsForRender.length - 1
    if (position === lastCloneIndex) {
      setIsJumping(true)
      setPosition(1)
      x.set(-trackItemOffset)
      requestAnimationFrame(() => {
        setIsJumping(false)
        setIsAnimating(false)
      })
      return
    }

    if (position === 0) {
      setIsJumping(true)
      const target = items.length
      setPosition(target)
      x.set(-target * trackItemOffset)
      requestAnimationFrame(() => {
        setIsJumping(false)
        setIsAnimating(false)
      })
      return
    }

    setIsAnimating(false)
  }

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0,
        },
      }

  return (
    <div
      ref={containerRef}
      data-service-carousel
      className={cn(styles.container, round && styles.roundContainer, className)}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px`, borderRadius: "50%" }),
      }}
    >
      <motion.div
        className={styles.track}
        drag={isAnimating ? false : "x"}
        dragElastic={0.08}
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragStart={() => {
          dragStartedRef.current = true
          suppressNextClickRef.current = true
        }}
        onDragEnd={(_, info) => {
          const { offset, velocity } = info
          const direction =
            offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
              ? 1
              : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
                ? -1
                : 0

          if (direction !== 0) {
            setPosition((prev) => {
              const next = prev + direction
              const max = itemsForRender.length - 1
              return Math.max(0, Math.min(next, max))
            })
          }

          window.setTimeout(() => {
            dragStartedRef.current = false
            suppressNextClickRef.current = false
          }, 80)
        }}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={() => setIsAnimating(true)}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselCard
            key={`${item.id}-${index}`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            suppressClick={() => suppressNextClickRef.current || dragStartedRef.current}
          />
        ))}
      </motion.div>

      <div className={cn(styles.indicatorsContainer, round && styles.roundIndicatorsContainer)}>
        <div className={styles.indicators}>
          {items.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              aria-label={`Show ${item.title}`}
              aria-current={activeIndex === index}
              className={cn(styles.indicator, activeIndex === index ? styles.active : styles.inactive)}
              animate={{ scale: activeIndex === index ? 1.2 : 1 }}
              onClick={() => setPosition(loop ? index + 1 : index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
