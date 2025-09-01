"use client"

import { useState, useEffect, useRef } from "react"
import { Code, Smartphone, Cloud, Settings, Database, Shield, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Services() {
  const [activeService, setActiveService] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const headerRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Get all elements
      const sectionEl = sectionRef.current!
      const serviceCards = Array.from(sectionEl.querySelectorAll<HTMLDivElement>(".service-card"))
      const badge = headerRef.current?.querySelector(".neomorphic") as Element | null
      const title = headerRef.current?.querySelector(".services-title") as Element | null
      const description = headerRef.current?.querySelector("p") as Element | null
      const ctaSection = ctaRef.current as Element | null

      const headerTargets = [badge, title, description, ctaSection].filter((el): el is Element => !!el)

      // Ensure initial visibility only on existing elements
      if (headerTargets.length) {
        gsap.set(headerTargets, { opacity: 1, visibility: "visible" })
      }
      if (serviceCards.length) {
        gsap.set(serviceCards, { opacity: 0, visibility: "visible", y: 10 })
      }

      // Header animation timeline
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      })

      // Animate header elements (guard each step)
      if (badge) {
        headerTl.fromTo(
          badge,
          { opacity: 0, y: -50, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
        )
      }
      if (title) {
        headerTl.fromTo(
          title,
          { opacity: 0, x: -100, rotationY: -15 },
          { opacity: 1, x: 0, rotationY: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3",
        )
      }
      if (description) {
        headerTl.fromTo(
          description,
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
          "-=0.4",
        )
      }

      // Group fade-in for all service cards
      if (serviceCards.length) {
        gsap.fromTo(
          serviceCards,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionEl,
              start: "top 90%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        )
      }

      // Animate CTA section
      if (ctaSection) {
        gsap.fromTo(
          ctaSection,
          { opacity: 0, y: 100, scale: 0.9, rotationX: 15 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaSection,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Enhanced hover animation function
  const handleCardHover = (index: number, isEntering: boolean) => {
    const card = cardsRef.current[index]
    if (!card) return

    gsap.to(card, {
      scale: isEntering ? 1.12 : 1,
      y: isEntering ? -15 : 0,
      rotationY: isEntering ? 8 : 0,
      duration: 0.15,
      ease: "power1.out",
    })
  }

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Modern web applications built with React, Next.js, and cutting-edge technologies for Indian businesses.",
      features: ["React/Next.js", "TypeScript", "Responsive Design", "SEO Optimized"],
      color: "text-primary",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps designed for the Indian market and global reach.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
      color: "text-accent",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services optimized for Indian businesses.",
      features: ["AWS/Azure/GCP", "DevOps", "Microservices", "Auto-scaling"],
      color: "text-primary",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Efficient database design and management solutions for growing Indian startups.",
      features: ["PostgreSQL", "MongoDB", "Redis", "Data Migration"],
      color: "text-accent",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business in the digital landscape.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "24/7 Monitoring"],
      color: "text-primary",
    },
    {
      icon: Settings,
      title: "IT Consulting",
      description: "Strategic IT consulting to help Indian businesses embrace digital transformation.",
      features: ["Digital Strategy", "Tech Stack Selection", "Process Optimization", "Team Training"],
      color: "text-accent",
    },
  ]

  return (
    <section ref={sectionRef} id="services" className="services-section py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5 parallax-bg" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center space-y-4 mb-16">
          <div className="inline-block px-8 py-3 text-lg font-semibold bg-gradient-to-r from-yellow-500/80 via-amber-500/80 to-orange-500/80 backdrop-blur-xl border border-yellow-400/30 hover:border-yellow-400/50 text-white shadow-xl hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105 rounded-full drop-shadow-[0_0_15px_rgba(255,193,7,0.4)]">
            Our Services
          </div>
          <h2 className="services-title text-3xl sm:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From web development to cloud infrastructure, we provide end-to-end technology solutions that drive business
            growth and digital transformation for Indian companies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`service-card bg-black/80 backdrop-blur-xl border border-yellow-500/30 hover:border-yellow-400/60 rounded-2xl p-8 cursor-pointer transition-all duration-200 hover:shadow-xl hover:shadow-yellow-400/30 hover:scale-105 hover:drop-shadow-[0_8px_30px_rgba(255,193,7,0.3)] ${
                activeService === index ? "ring-1 ring-yellow-400/50 shadow-yellow-400/20" : ""
              }`}
              onMouseEnter={() => {
                setActiveService(index)
                handleCardHover(index, true)
              }}
              onMouseLeave={() => handleCardHover(index, false)}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`service-icon p-4 rounded-xl bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-200 ${service.color}`}
                  >
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-white">{service.title}</h3>
                </div>

                <p className="text-gray-300">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="service-feature flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="group px-4 py-2 bg-transparent hover:bg-yellow-500/10 border border-yellow-500/30 hover:border-yellow-400/50 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md hover:shadow-yellow-400/20 text-white hover:text-yellow-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 group-hover:rotate-12 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          ref={ctaRef}
          className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-400/30 rounded-3xl p-8 lg:p-12 text-center shadow-2xl hover:shadow-orange-400/10 transition-all duration-500"
        >
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold">Ready to Transform Your Business?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your technology goals and accelerate your startup's
              growth in the Indian market.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="font-medium px-12 py-4 text-lg bg-gradient-to-r from-orange-500/80 via-amber-500/80 to-yellow-500/80 backdrop-blur-xl border border-orange-400/30 hover:border-orange-400/50 text-white hover:text-orange-100 shadow-2xl hover:shadow-orange-400/40 transition-all duration-500 transform hover:scale-110 rounded-2xl hover:from-orange-600/90 hover:via-amber-600/90 hover:to-yellow-600/90 drop-shadow-[0_0_20px_rgba(255,165,0,0.3)]"
                asChild
              >
                <a href="#contact">Get Free Consultation</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-normal px-10 py-4 text-lg bg-white/5 backdrop-blur-xl border-2 border-yellow-400/40 hover:border-yellow-400/60 text-foreground/70 hover:text-foreground/90 transition-all duration-500 transform hover:scale-105 rounded-2xl hover:bg-white/10 shadow-lg hover:shadow-yellow-400/20"
                asChild
              >
                <a href="#contact">View Our Work</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
