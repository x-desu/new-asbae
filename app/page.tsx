"use client"
import { useEffect } from "react"
import dynamic from "next/dynamic"
import Header from "@/components/header"
import Hero from "@/components/hero"
import { gsapAnimations } from "@/lib/gsap-animations"
import { viewTransition } from "@/lib/view-transitions"

// Lazy load heavy below-the-fold components
const IndustriesSection = dynamic(() => import("@/components/industries-section"), { ssr: false })
const HomeMissionVision = dynamic(() => import("@/components/home-mission-vision"), { ssr: false })
const ValuesSection = dynamic(() => import("@/components/values-section"), { ssr: false })
const HomeOurApproach = dynamic(() => import("@/components/home-our-approach"), { ssr: false })
const HomeServicesOverview = dynamic(() => import("@/components/home-services-overview"), { ssr: false })
const Contact = dynamic(() => import("@/components/contact"), { ssr: false })
const Footer = dynamic(() => import("@/components/footer"), { ssr: false })
const ChatWidget = dynamic(() => import("@/components/chat-widget"), { ssr: false })

export default function Home() {
  useEffect(() => {
    gsapAnimations.initAllAnimations()

    const refreshTimers = [400, 1200, 2500].map((delay) =>
      window.setTimeout(() => gsapAnimations.refreshAfterLazySections(), delay),
    )

    const hash = window.location.hash
    if (hash) {
      const timer = window.setTimeout(() => {
        void viewTransition.transitionToSection(hash, { duration: 600 })
      }, 400)
      return () => {
        refreshTimers.forEach((id) => window.clearTimeout(id))
        window.clearTimeout(timer)
        gsapAnimations.cleanup()
      }
    }

    return () => {
      refreshTimers.forEach((id) => window.clearTimeout(id))
      gsapAnimations.cleanup()
    }
  }, [])

  return (
    <main className="relative z-[2] min-h-screen">
      <Header />
      <Hero />
      <HomeServicesOverview />
      <IndustriesSection />
      <div id="mission-vision">
        <HomeMissionVision />
      </div>
      <ValuesSection />
      <div id="approach">
        <HomeOurApproach />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <ChatWidget />
    </main>
  )
}
