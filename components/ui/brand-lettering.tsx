"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { layoutScript, starPath } from "@/components/ui/sticker-slap-footer"

/** Uses the same single-stroke alphabet as the supplied footer. */
export function ScriptWord({ text, className = "" }: { text: string; className?: string }) {
  const word = useMemo(() => layoutScript(text), [text])
  const ref = useRef<SVGSVGElement>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { setSeen(true); observer.disconnect() }
    }, { threshold: 0.15 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  const pad = 3
  return (
    <svg ref={ref} className={`brand-script ${seen ? "is-written" : ""} ${className}`} viewBox={`${-pad} ${word.top-pad} ${word.width+pad*2-word.top*.1584} ${word.bottom-word.top+pad*2}`} role="img" aria-label={text}>
      <g transform="skewX(-9)">
        <path pathLength={1} d={word.main} />
        {word.extra.map((path,i) => <path pathLength={1} className="brand-script-extra" d={path} key={i} />)}
      </g>
    </svg>
  )
}

export function BrandSticker({ kind = "seal", className = "" }: { kind?: "seal" | "burst"; className?: string }) {
  return kind === "burst" ? (
    <svg className={`brand-sticker ${className}`} viewBox="0 0 120 120" aria-hidden>
      <path d={starPath(12,53,43,60,60,.12,3)} fill="#86afff" stroke="#e1ecff" strokeWidth="4" />
      <path d="M65 26 42 64h19l-5 29 25-42H62Z" fill="#102445" stroke="#102445" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ) : (
    <svg className={`brand-sticker ${className}`} viewBox="0 0 120 120" aria-hidden>
      <circle cx="60" cy="60" r="54" fill="#b6d0ff" stroke="#e1ecff" strokeWidth="4" />
      <circle cx="60" cy="60" r="45" fill="none" stroke="#173460" strokeWidth="1" strokeDasharray="2 4" />
      <path d="m39 53 14 14 28-29" fill="none" stroke="#173460" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="60" y="88" textAnchor="middle" fill="#173460" fontSize="10" fontFamily="sans-serif" fontWeight="700">GOVERNANCE</text>
    </svg>
  )
}
