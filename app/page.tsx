"use client"
import { useEffect, Suspense } from "react"
import dynamic from "next/dynamic"
import Header from "@/components/header"
import Hero from "@/components/hero"
import { gsapAnimations } from "@/lib/gsap-animations"
import { viewTransition } from "@/lib/view-transitions"

// Lazy load below-the-fold components (SSR enabled for crawlable HTML)
const IndustriesSection = dynamic(() => import("@/components/industries-section"))
const HomeMissionVision = dynamic(() => import("@/components/home-mission-vision"))
const ValuesSection = dynamic(() => import("@/components/values-section"))
const HomeOurApproach = dynamic(() => import("@/components/home-our-approach"))
const HomeServicesOverview = dynamic(() => import("@/components/home-services-overview"))
const Contact = dynamic(() => import("@/components/contact"))
const Footer = dynamic(() => import("@/components/footer"))
const ChatWidget = dynamic(() => import("@/components/chat-widget"))

export default function Home() {
  useEffect(() => {
    gsapAnimations.initAllAnimations()

    // Single consolidated refresh after most components have likely mounted
    const refreshTimer = window.setTimeout(() => {
      gsapAnimations.refreshAfterLazySections()
    }, 1500)

    const hash = window.location.hash
    if (hash) {
      const timer = window.setTimeout(() => {
        void viewTransition.transitionToSection(hash, { duration: 600 })
      }, 400)
      return () => {
        window.clearTimeout(refreshTimer)
        window.clearTimeout(timer)
        gsapAnimations.cleanup()
      }
    }

    return () => {
      window.clearTimeout(refreshTimer)
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
