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
      fastScrollEnd: true,
    })

    ScrollTrigger.addEventListener("refreshInit", () => {
      const targets =
        ".service-card, .product-card, .review-card, .contact-field, .contact-info-item, section, .hero-title-line, .hero-description, .hero-buttons, .stat-card"
      gsap.set(targets, { clearProps: "transform" })
    })
  }

  initHeroAnimations() {
    const ctx = gsap.context(() => {
      gsap.set([".hero-title-line", ".hero-description", ".hero-buttons", ".stat-card"], {
        opacity: 1,
        visibility: "visible",
        willChange: "transform, opacity",
        force3D: true,
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

      const bob = gsap.to(".hero-title-line", {
        y: "+=3",
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
        paused: true,
      })
      ScrollTrigger.create({
        trigger: ".hero-content",
        start: "top bottom",
        end: "bottom top",
        onEnter: () => bob.play(),
        onEnterBack: () => bob.play(),
        onLeave: () => bob.pause(),
        onLeaveBack: () => bob.pause(),
      })

      this.animateCounters()
    })

    this.contexts.push(ctx)
  }

  initServicesAnimations() {
    const ctx = gsap.context(() => {
      const serviceCards = document.querySelectorAll(".service-card")
      const servicesTitle = document.querySelector(".services-title")
      const servicesBadge = document.querySelector(".services-section .neomorphic")
      const servicesDescription = document.querySelector(".services-section p")
      const ctaSection = document.querySelector(".services-section .neomorphic.rounded-3xl")

      gsap.set([serviceCards, servicesTitle, servicesBadge, servicesDescription, ctaSection], {
        opacity: 1,
        visibility: "visible",
      })

      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      })

      headerTl
        .fromTo(
          servicesBadge,
          { opacity: 0, y: -50, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
        )
        .fromTo(
          servicesTitle,
          { opacity: 0, x: -100, rotationY: -15 },
          { opacity: 1, x: 0, rotationY: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3",
        )
        .fromTo(
          servicesDescription,
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
          "-=0.4",
        )

      serviceCards.forEach((card, index) => {
        const row = Math.floor(index / 3)
        const col = index % 3

        let startX = 0,
          startY = 0,
          rotation = 0

        if (col === 0) {
          startX = -200
          rotation = -10
        } else if (col === 2) {
          startX = 200
          rotation = 10
        } else {
          startY = row % 2 === 0 ? -150 : 150
          rotation = row % 2 === 0 ? -5 : 5
        }

        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: startX,
            y: startY,
            scale: 0.7,
            rotation: rotation,
            transformOrigin: "center center",
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        )

        const hoverTl = gsap.timeline({ paused: true })
        hoverTl.to(card, {
          scale: 1.08,
          y: -12,
          rotationY: 5,
          duration: 0.4,
          ease: "power2.out",
        })

        card.addEventListener("mouseenter", () => hoverTl.play())
        card.addEventListener("mouseleave", () => hoverTl.reverse())
      })

      gsap.fromTo(
        ctaSection,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
          rotationX: 15,
        },
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
    })

    this.contexts.push(ctx)
  }

  initProductsAnimations() {
    const ctx = gsap.context(() => {
      const productCards = document.querySelectorAll(".product-card")

      gsap.set(productCards, {
        opacity: 1,
        visibility: "visible",
        y: 0,
        scale: 1,
        willChange: "transform, opacity",
        force3D: true,
      })

      gsap.fromTo(
        productCards,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".products-section",
            start: "top 80%",
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
      const selector = ".review-card"
      gsap.set(selector, {
        opacity: 1,
        visibility: "visible",
        y: 0,
        rotationY: 0,
        willChange: "transform, opacity",
        force3D: true,
      })
      ScrollTrigger.batch(selector, {
        start: "top 85%",
        once: true,
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 30, rotationY: 10 },
            {
              opacity: 1,
              y: 0,
              rotationY: 0,
              duration: 0.6,
              ease: "power2.out",
              stagger: 0.1,
            },
          ),
      })
    })

    this.contexts.push(ctx)
  }

  initContactAnimations() {
    const ctx = gsap.context(() => {
      const selector = ".contact-field, .contact-info-item"
      gsap.set(selector, {
        opacity: 1,
        visibility: "visible",
        y: 0,
        x: 0,
        willChange: "transform, opacity",
        force3D: true,
      })
      ScrollTrigger.batch(selector, {
        start: "top 85%",
        once: true,
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 20, x: (i: number) => (i % 2 === 0 ? -15 : 15) },
            {
              opacity: 1,
              y: 0,
              x: 0,
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.1,
            },
          ),
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
        gsap.set(section, {
          opacity: 1,
          visibility: "visible",
          y: 0,
          willChange: "transform, opacity",
          force3D: true,
        })

        gsap.fromTo(
          section,
          { opacity: 0.8, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        )
      })
    })

    this.contexts.push(ctx)
  }

  initAllAnimations() {
    this.init()

    gsap.set(
      ".service-card, .product-card, .review-card, .contact-field, .contact-info-item, section, .hero-title-line, .hero-description, .hero-buttons, .stat-card",
      { visibility: "visible" },
    )

    gsap.set([".service-card", ".product-card", ".review-card", ".contact-field", ".contact-info-item", "section"], {
      opacity: 1,
      clearProps: "transform",
      willChange: "transform, opacity",
      force3D: true,
    })

    requestAnimationFrame(() => {
      this.setupAnimations()

      const runFallback = () => this.ensureVisibility()
      if (typeof (window as any).requestIdleCallback === "function") {
        ;(window as any).requestIdleCallback(runFallback, { timeout: 1500 })
      } else {
        setTimeout(runFallback, 1200)
      }
    })
  }

  private setupAnimations() {
    this.initHeroAnimations()
    this.initProductsAnimations()
    this.initReviewsAnimations()
    this.initContactAnimations()
    this.initPageTransitions()
    this.initParallaxEffects()

    ScrollTrigger.refresh()
  }

  private ensureVisibility() {
    const elementsToCheck = [".service-card", ".product-card", ".review-card", ".contact-field", ".contact-info-item"]

    elementsToCheck.forEach((selector) => {
      const elements = document.querySelectorAll(selector)
      elements.forEach((element) => {
        const computedStyle = window.getComputedStyle(element)
        if (Number.parseFloat(computedStyle.opacity) < 0.5) {
          gsap.set(element, { opacity: 1, y: 0, x: 0, scale: 1 })
        }
      })
    })
  }

  cleanup() {
    this.contexts.forEach((ctx) => ctx.revert())
    this.contexts = []
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    gsap.killTweensOf("*")
    this.initialized = false
  }
}

export const gsapAnimations = GSAPAnimations.getInstance()
