import Image from "next/image"
import { cn } from "@/lib/utils"

const LOGO_SRC = "/images/asbae-logo.png"

type AsbaeLogoProps = {
  showWordmark?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
  wordmarkClassName?: string
  /** Frosted glass plate + blue backlight behind mark on dark nav */
  markOnLight?: boolean
}

const markSizes = {
  sm: "h-8 w-8",
  md: "h-9 w-9 lg:h-10 lg:w-10",
  lg: "h-11 w-11",
}

const wordmarkSizes = {
  sm: "text-lg",
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

/** PNG mark from `public/images/asbae-logo.png` — optional glass plate for dark backgrounds. */
export function AsbaeLogoMark({
  className,
  onLight = true,
  alt = "ASBAE",
}: AsbaeLogoMarkProps) {
  return (
    <span className={cn("relative inline-flex shrink-0", className)}>
      {onLight ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 scale-[1.4] rounded-[0.65rem] bg-[radial-gradient(circle_at_50%_60%,rgba(96,165,250,0.55),rgba(59,130,246,0.2)_50%,transparent_72%)] blur-[7px]"
        />
      ) : null}
      <span
        className={cn(
          "relative inline-flex h-full w-full items-center justify-center overflow-hidden rounded-[0.65rem]",
          onLight &&
            "border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_0_22px_rgba(59,130,246,0.28),0_4px_14px_rgba(0,0,0,0.35)]"
        )}
      >
        <Image
          src={LOGO_SRC}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 36px, 40px"
          className="object-contain p-[14%]"
          priority
        />
      </span>
    </span>
  )
}
