import Image from "next/image"
import { cn } from "@/lib/utils"

const LOGO_SRC = "/images/asbae-logo.png"

type AsbaeLogoProps = {
  showWordmark?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
  wordmarkClassName?: string
  /** Soft backlight behind the transparent mark on dark nav */
  markOnLight?: boolean
}

const markSizes = {
  sm: "h-9 w-9 lg:h-10 lg:w-10",
  md: "h-10 w-10 lg:h-11 lg:w-11",
  lg: "h-12 w-12",
}

const wordmarkSizes = {
  sm: "text-xl lg:text-2xl",
  md: "text-xl md:text-2xl",
  lg: "text-2xl md:text-3xl",
}

/** ASBAE mark + optional wordmark (header). */
export function AsbaeLogo({
  showWordmark = true,
  size = "md",
  className,
  wordmarkClassName,
  markOnLight = true,
}: AsbaeLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <AsbaeLogoMark className={markSizes[size]} onLight={markOnLight} />
      {showWordmark ? (
        <span
          className={cn(
            "font-serif font-bold tracking-[0.12em] bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(96,165,250,0.25)]",
            wordmarkSizes[size],
            wordmarkClassName
          )}
        >
          ASBAE
        </span>
      ) : null}
    </span>
  )
}

type AsbaeLogoMarkProps = {
  className?: string
  onLight?: boolean
  alt?: string
}

/** Transparent PNG mark from `public/images/asbae-logo.png`. */
export function AsbaeLogoMark({
  className,
  onLight = true,
  alt = "ASBAE",
}: AsbaeLogoMarkProps) {
  return (
    <span className={cn("relative inline-flex shrink-0 items-center justify-center", className)}>
      {onLight ? (
        <>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-[10%] rounded-full bg-cyan-400/20 blur-[10px]"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-[18%] rounded-full bg-blue-500/15 blur-[18px]"
          />
        </>
      ) : null}
      <span className="relative inline-flex h-full w-full items-center justify-center">
        <Image
          src={LOGO_SRC}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 40px, 44px"
          className="object-contain drop-shadow-[0_0_10px_rgba(56,189,248,0.28)]"
          priority
        />
      </span>
    </span>
  )
}
