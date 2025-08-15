"use client"
import { ArrowRight, Play } from "lucide-react"
import type React from "react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { gsapAnimations } from "@/lib/gsap-animations"
import { viewTransition } from "@/lib/view-transitions"
import Spline from "@splinetool/react-spline/next"

export default function Hero() {
  useEffect(() => {
    gsapAnimations.initAllAnimations()

    return () => {
      gsapAnimations.cleanup()
    }
  }, [])

  const handleGetStartedClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    await viewTransition.transitionToSection("#services", { duration: 800 })
  }

  const handleLearnMoreClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    await viewTransition.transitionToSection("#about", { duration: 800 })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl h-full flex items-center justify-center">
          <Spline
            scene="https://prod.spline.design/RxiSOrUnnyxrwUa7/scene.splinecode"
            width={800}
            height={800}
            className="w-full h-full opacity-60"
            style={{
              pointerEvents: "auto",
              touchAction: "none",
              background: "transparent",
            }}
            onWheel={(e) => e.preventDefault()}
            onLoad={(spline) => {
              console.log("[v0] Spline loaded successfully")
              if (spline && spline.setZoom) {
                spline.setZoom(false)
              }
            }}
            onError={(error) => {
              console.log("[v0] Spline loading error:", error)
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 hero-content max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              <span className="hero-title-line text-foreground block">Your</span>
              <span className="hero-title-line text-foreground block">All In One</span>
              <span className="hero-title-line bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent block">
                Software System
              </span>
            </h1>

            <p className="hero-description text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Empowering businesses with innovative software solutions and comprehensive IT services. From custom
              development to digital transformation, we turn your vision into reality.
            </p>
          </div>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group font-semibold px-8 py-4 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300 glassmorphic-glow"
              onClick={handleGetStartedClick}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group bg-background/20 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/60 text-foreground hover:text-primary px-8 py-4 text-lg font-semibold hover:bg-primary/10 transition-all duration-300"
              onClick={handleLearnMoreClick}
            >
              <Play className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          <div className="hero-stats flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>25+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>15+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Based in India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40 pointer-events-none" />
    </section>
  )
}
