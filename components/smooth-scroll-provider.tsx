"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"

declare global {
  interface Window {
    __ASBAE_LENIS__?: Lenis
  }
}

export function SmoothScrollProvider() {
  const pathname = usePathname()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      return
    }

    window.__ASBAE_LENIS__?.destroy()

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
    })

    window.__ASBAE_LENIS__ = lenis

    void import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      lenis.on("scroll", ScrollTrigger.update)
      ScrollTrigger.refresh()
    })

    let frameId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }

    frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      if (window.__ASBAE_LENIS__ === lenis) {
        lenis.destroy()
        delete window.__ASBAE_LENIS__
      }
    }
  }, [])

  useEffect(() => {
    window.__ASBAE_LENIS__?.resize()
  }, [pathname])

  return null
}
