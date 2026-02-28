"use client"
import { useEffect } from "react"
import dynamic from "next/dynamic"
import Header from "@/components/header"
import Hero from "@/components/hero"
import { gsapAnimations } from "@/lib/gsap-animations"
import DarkVeil from "@/lib/Backgrounds/DarkVeil/DarkVeil"

// Lazy load heavy below-the-fold components
const HomeMissionVision = dynamic(() => import("@/components/home-mission-vision"), { ssr: false })
const HomeOurApproach = dynamic(() => import("@/components/home-our-approach"), { ssr: false })
const Contact = dynamic(() => import("@/components/contact"), { ssr: false })
const Footer = dynamic(() => import("@/components/footer"), { ssr: false })
const ChatWidget = dynamic(() => import("@/components/chat-widget"), { ssr: false })

export default function Home() {
  useEffect(() => {
    gsapAnimations.initAllAnimations()

    return () => {
      gsapAnimations.cleanup()
    }
  }, [])

  return (
    <main className="min-h-screen relative">
      {/* DarkVeil Background - fixed full-screen */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
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
      {/* Dark overlay for text readability */}
      <div className="fixed inset-0 bg-black/40" style={{ zIndex: 1 }}></div>

      {/* Content layer */}
      <div className="relative" style={{ zIndex: 2 }}>
        <Header />
        <Hero />
        <div id="mission-vision">
          <HomeMissionVision />
        </div>
        <div id="approach">
          <HomeOurApproach />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
        <ChatWidget />
      </div>
    </main>
  )
}

