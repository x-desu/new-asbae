"use client"

import DarkVeil from "@/lib/Backgrounds/DarkVeil/DarkVeil"

/** Single site-wide DarkVeil + readability overlay (React Bits). */
export function SiteBackground() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <DarkVeil
          hueShift={28}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.4}
          scanlineFrequency={0}
          warpAmount={1}
          resolutionScale={1}
        />
      </div>
      <div className="pointer-events-none fixed inset-0 z-[1] bg-black/40" aria-hidden />
    </>
  )
}
