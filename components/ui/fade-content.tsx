"use client"

// Adapted from React Bits FadeContent (TS/Tailwind), retrieved through its MCP registry.
// Retains the plain fade with scoped cleanup and reduced-motion support.
import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"

export default function FadeContent({ children, duration = 0.7, className = "" }: { children: ReactNode; duration?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration, ease: "power2.out", clearProps: "opacity" })
    }, ref)
    return () => ctx.revert()
  }, [duration])
  return <div ref={ref} className={className}>{children}</div>
}
