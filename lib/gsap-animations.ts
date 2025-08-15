"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
}

export class GSAPAnimations {
  private static instance: GSAPAnimations
  private initialized = false
  private contexts: gsap.Context[] = []

  static getInstance(): GSAPAnimations {
    if (!GSAPAnimations.instance) {
      GSAPAnimations.instance = new GSAPAnimations()
    }
    return GSAPAnimations.instance
  }

  init() {
    if (this.initialized || typeof window === "undefined") return
    this.initialized = true

    gsap.defaults({
      duration: 0.6,
      ease: "power2.out",
    })

    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
    })

    ScrollTrigger.addEventListener("refreshInit", () => {
      gsap.set("*", { clearProps: "transform" })
    })
  }

  initHeroAnimations() {
    const ctx = gsap.context(() => {
      gsap.set([".hero-title-line", ".hero-description", ".hero-buttons", ".stat-card"], {
        opacity: 1,
        visibility: "visible",
      })

      const tl = gsap.timeline()

      tl.fromTo(
        ".hero-title-line",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
      )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .fromTo(
          ".hero-buttons",
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3",
        )

      gsap.to(".hero-title-line", {
        y: "+=3",
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      })

      this.animateCounters()
    })

    this.contexts.push(ctx)
  }

  initServicesAnimations() {
    const ctx = gsap.context(() => {
      const serviceCards = document.querySelectorAll(".service-card")

      gsap.set(serviceCards, { opacity: 1, visibility: "visible" })

      serviceCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0.3, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            delay: index * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 98%",
              end: "bottom 20%",
              toggleActions: "play none none none",
              once: true,
              fastScrollEnd: true,
            },
          },
        )

        const hoverTl = gsap.timeline({ paused: true })
        hoverTl.to(card, {
          scale: 1.05,
          y: -8,
          duration: 0.3,
          ease: "power2.out",
        })

        card.addEventListener("mouseenter", () => hoverTl.play())
        card.addEventListener("mouseleave", () => hoverTl.reverse())
      })
    })

    this.contexts.push(ctx)
  }

  initProductsAnimations() {
    const ctx = gsap.context(() => {
      const productCards = document.querySelectorAll(".product-card")

      gsap.set(productCards, { opacity: 1, visibility: "visible" })

      gsap.fromTo(
        productCards,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".products-section",
            start: "top 98%",
            toggleActions: "play none none none",
            once: true,
          },
        },
      )
    })

    this.contexts.push(ctx)
  }

  initReviewsAnimations() {
    const ctx = gsap.context(() => {
      const reviewCards = document.querySelectorAll(".review-card")

      gsap.set(reviewCards, { opacity: 1, visibility: "visible" })

      reviewCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, rotationY: 15 },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.4,
            delay: index * 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".reviews-section",
              start: "top 98%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        )
      })
    })

    this.contexts.push(ctx)
  }

  initContactAnimations() {
    const ctx = gsap.context(() => {
      const contactElements = document.querySelectorAll(".contact-field, .contact-info-item")

      gsap.set(contactElements, { opacity: 1, visibility: "visible" })

      contactElements.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 30, x: index % 2 === 0 ? -20 : 20 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.3,
            delay: index * 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".contact-section",
              start: "top 98%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        )
      })
    })

    this.contexts.push(ctx)
  }

  animateCounters() {
    const counters = document.querySelectorAll(".counter-number")

    counters.forEach((counter) => {
      const target = Number.parseInt(counter.textContent || "0")
      const obj = { value: 0 }

      gsap.set(counter, { opacity: 1 })

      gsap.to(obj, {
        duration: 1.2,
        value: target,
        ease: "power2.out",
        onUpdate: () => {
          counter.textContent = Math.round(obj.value).toString()
        },
        scrollTrigger: {
          trigger: counter,
          start: "top 98%",
          toggleActions: "play none none none",
          once: true,
        },
      })
    })
  }

  initParallaxEffects() {
    const ctx = gsap.context(() => {
      const parallaxElements = document.querySelectorAll(".parallax-element, .parallax-bg")

      parallaxElements.forEach((element) => {
        gsap.to(element, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        })
      })
    })

    this.contexts.push(ctx)
  }

  initPageTransitions() {
    const ctx = gsap.context(() => {
      const sections = document.querySelectorAll("section")

      sections.forEach((section) => {
        gsap.set(section, { opacity: 1, visibility: "visible" })

        gsap.fromTo(
          section,
          { opacity: 0.5, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 99%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        )
      })
    })

    this.contexts.push(ctx)
  }

  // Initialize all animations
  initAllAnimations() {
    this.init()

    gsap.set("*", { visibility: "visible" })

    requestAnimationFrame(() => {
      this.setupAnimations()
    })
  }

  private setupAnimations() {
    this.initHeroAnimations()
    this.initServicesAnimations()
    this.initProductsAnimations()
    this.initReviewsAnimations()
    this.initContactAnimations()
    this.initPageTransitions()
    this.initParallaxEffects()

    ScrollTrigger.refresh()
  }

  cleanup() {
    this.contexts.forEach((ctx) => ctx.revert())
    this.contexts = []
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    gsap.killTweensOf("*")
    this.initialized = false
  }
}

// Export singleton instance for backward compatibility
export const gsapAnimations = GSAPAnimations.getInstance()
