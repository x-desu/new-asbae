"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export class GSAPAnimations {
  private static instance: GSAPAnimations;
  private initialized = false;
  private contexts: gsap.Context[] = [];

  static getInstance(): GSAPAnimations {
    if (!GSAPAnimations.instance) {
      GSAPAnimations.instance = new GSAPAnimations();
    }
    return GSAPAnimations.instance;
  }

  init() {
    if (this.initialized || typeof window === "undefined") return;
    this.initialized = true;

    gsap.defaults({
      duration: 0.6,
      ease: "power2.out",
    });

    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
    });

    ScrollTrigger.addEventListener("refreshInit", () => {
      gsap.set("*", { clearProps: "transform" });
    });
  }

  initHeroAnimations() {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          ".hero-title-line",
          ".hero-description",
          ".hero-buttons",
          ".stat-card",
        ],
        {
          opacity: 1,
          visibility: "visible",
        }
      );

      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-title-line",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
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
          "-=0.4"
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
          "-=0.3"
        );

      gsap.to(".hero-title-line", {
        y: "+=3",
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });

      this.animateCounters();
    });

    this.contexts.push(ctx);
  }

  initServicesAnimations() {
    const ctx = gsap.context(() => {
      const serviceCards = document.querySelectorAll(".service-card");
      const servicesTitle = document.querySelector(".services-title");
      const servicesBadge = document.querySelector(
        ".services-section .neomorphic"
      );
      const servicesDescription = document.querySelector(".services-section p");
      const ctaSection = document.querySelector(
        ".services-section .neomorphic.rounded-3xl"
      );

      // Ensure elements are visible by default
      gsap.set(
        [
          serviceCards,
          servicesTitle,
          servicesBadge,
          servicesDescription,
          ctaSection,
        ],
        {
          opacity: 1,
          visibility: "visible",
        }
      );

      // Animate header elements first
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Badge slides in from top
      headerTl
        .fromTo(
          servicesBadge,
          { opacity: 0, y: -50, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
        )
        // Title slides in from left
        .fromTo(
          servicesTitle,
          { opacity: 0, x: -100, rotationY: -15 },
          { opacity: 1, x: 0, rotationY: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        )
        // Description slides in from right
        .fromTo(
          servicesDescription,
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
          "-=0.4"
        );

      // Animate service cards with dynamic directions
      serviceCards.forEach((card, index) => {
        // Determine slide direction based on grid position
        const row = Math.floor(index / 3);
        const col = index % 3;

        let startX = 0,
          startY = 0,
          rotation = 0;

        // Dynamic entry directions
        if (col === 0) {
          // Left column - slide from left
          startX = -200;
          rotation = -10;
        } else if (col === 2) {
          // Right column - slide from right
          startX = 200;
          rotation = 10;
        } else {
          // Middle column - slide from top/bottom alternating
          startY = row % 2 === 0 ? -150 : 150;
          rotation = row % 2 === 0 ? -5 : 5;
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
          }
        );

        // Enhanced hover animations
        const hoverTl = gsap.timeline({ paused: true });
        hoverTl.to(card, {
          scale: 1.08,
          y: -12,
          rotationY: 5,
          duration: 0.4,
          ease: "power2.out",
        });

        card.addEventListener("mouseenter", () => hoverTl.play());
        card.addEventListener("mouseleave", () => hoverTl.reverse());
      });

      // Animate CTA section from bottom
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
        }
      );
    });

    this.contexts.push(ctx);
  }

  initProductsAnimations() {
    const ctx = gsap.context(() => {
      const productCards = document.querySelectorAll(".product-card");

      // Ensure elements are visible by default
      gsap.set(productCards, {
        opacity: 1,
        visibility: "visible",
        y: 0,
        scale: 1,
      });

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
            start: "top 80%", // Start much earlier
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    this.contexts.push(ctx);
  }

  initReviewsAnimations() {
    const ctx = gsap.context(() => {
      const reviewCards = document.querySelectorAll(".review-card");

      // Ensure elements are visible by default
      gsap.set(reviewCards, {
        opacity: 1,
        visibility: "visible",
        y: 0,
        rotationY: 0,
      });

      reviewCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30, rotationY: 10 },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%", // Start earlier and use individual triggers
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });
    });

    this.contexts.push(ctx);
  }

  initContactAnimations() {
    const ctx = gsap.context(() => {
      const contactElements = document.querySelectorAll(
        ".contact-field, .contact-info-item"
      );

      // Ensure elements are visible by default
      gsap.set(contactElements, {
        opacity: 1,
        visibility: "visible",
        y: 0,
        x: 0,
      });

      contactElements.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 20, x: index % 2 === 0 ? -15 : 15 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.5,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%", // Start earlier and use individual triggers
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });
    });

    this.contexts.push(ctx);
  }

  animateCounters() {
    const counters = document.querySelectorAll(".counter-number");

    counters.forEach((counter) => {
      const target = Number.parseInt(counter.textContent || "0");
      const obj = { value: 0 };

      gsap.set(counter, { opacity: 1 });

      gsap.to(obj, {
        duration: 1.2,
        value: target,
        ease: "power2.out",
        onUpdate: () => {
          counter.textContent = Math.round(obj.value).toString();
        },
        scrollTrigger: {
          trigger: counter,
          start: "top 98%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    });
  }

  initParallaxEffects() {
    const ctx = gsap.context(() => {
      const parallaxElements = document.querySelectorAll(
        ".parallax-element, .parallax-bg"
      );

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
        });
      });
    });

    this.contexts.push(ctx);
  }

  initPageTransitions() {
    const ctx = gsap.context(() => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        // Ensure sections are fully visible by default
        gsap.set(section, {
          opacity: 1,
          visibility: "visible",
          y: 0,
        });

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
              start: "top 90%", // Start much earlier
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });
    });

    this.contexts.push(ctx);
  }

  // Initialize all animations
  initAllAnimations() {
    this.init();

    // Ensure all elements are visible by default
    gsap.set("*", { visibility: "visible" });

    // Fallback: ensure no elements are stuck with low opacity
    gsap.set(
      [
        ".service-card",
        ".product-card",
        ".review-card",
        ".contact-field",
        ".contact-info-item",
        "section",
      ],
      {
        opacity: 1,
        clearProps: "transform",
      }
    );

    requestAnimationFrame(() => {
      this.setupAnimations();

      // Additional fallback after a delay
      setTimeout(() => {
        this.ensureVisibility();
      }, 1000);
    });
  }

  private setupAnimations() {
    this.initHeroAnimations();
    // Services animations moved to component
    this.initProductsAnimations();
    this.initReviewsAnimations();
    this.initContactAnimations();
    this.initPageTransitions();
    this.initParallaxEffects();

    ScrollTrigger.refresh();
  }

  // Fallback function to ensure no elements are stuck invisible
  private ensureVisibility() {
    const elementsToCheck = [
      ".service-card",
      ".product-card",
      ".review-card",
      ".contact-field",
      ".contact-info-item",
    ];

    elementsToCheck.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        const computedStyle = window.getComputedStyle(element);
        if (parseFloat(computedStyle.opacity) < 0.5) {
          gsap.set(element, { opacity: 1, y: 0, x: 0, scale: 1 });
        }
      });
    });
  }

  cleanup() {
    this.contexts.forEach((ctx) => ctx.revert());
    this.contexts = [];
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.killTweensOf("*");
    this.initialized = false;
  }
}

// Export singleton instance for backward compatibility
export const gsapAnimations = GSAPAnimations.getInstance();
