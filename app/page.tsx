"use client"
import { useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Products from "@/components/products"
import DemoSection from "@/components/demo-section"
import Reviews from "@/components/reviews"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ChatWidget from "@/components/chat-widget"
import { gsapAnimations } from "@/lib/gsap-animations"

export default function Home() {
  useEffect(() => {
    // Wait for GSAP to be loaded from CDN
    const initAnimations = () => {
      if (typeof window !== "undefined" && window.gsap) {
        gsapAnimations.initAllAnimations()
      } else {
        // Retry after a short delay if GSAP isn't loaded yet
        setTimeout(initAnimations, 100)
      }
    }

    initAnimations()

    // Cleanup animations on unmount
    return () => {
      gsapAnimations.cleanup()
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="demo">
        <DemoSection />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <ChatWidget />
    </main>
  )
}
