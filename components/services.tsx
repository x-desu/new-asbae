"use client";

import { useState, useEffect, useRef } from "react";
import {
  Code,
  Smartphone,
  Cloud,
  Settings,
  Database,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Get all elements
      const serviceCards = cardsRef.current.filter(Boolean);
      const badge = headerRef.current?.querySelector(".neomorphic");
      const title = headerRef.current?.querySelector(".services-title");
      const description = headerRef.current?.querySelector("p");
      const ctaSection = ctaRef.current;

      // Set initial states
      gsap.set([serviceCards, badge, title, description, ctaSection], {
        opacity: 1,
        visibility: "visible",
      });

      // Header animation timeline
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Animate header elements
      headerTl
        .fromTo(
          badge,
          { opacity: 0, y: -50, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
        )
        .fromTo(
          title,
          { opacity: 0, x: -100, rotationY: -15 },
          { opacity: 1, x: 0, rotationY: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          description,
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
          "-=0.4"
        );

      // Animate service cards with dynamic directions
      serviceCards.forEach((card, index) => {
        if (!card) return;

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
      });

      // Animate CTA section
      if (ctaSection) {
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
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Enhanced hover animation function
  const handleCardHover = (index: number, isEntering: boolean) => {
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, {
      scale: isEntering ? 1.08 : 1,
      y: isEntering ? -12 : 0,
      rotationY: isEntering ? 5 : 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Modern web applications built with React, Next.js, and cutting-edge technologies for Indian businesses.",
      features: [
        "React/Next.js",
        "TypeScript",
        "Responsive Design",
        "SEO Optimized",
      ],
      color: "text-primary",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile apps designed for the Indian market and global reach.",
      features: [
        "React Native",
        "Flutter",
        "Native iOS/Android",
        "App Store Deployment",
      ],
      color: "text-accent",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services optimized for Indian businesses.",
      features: ["AWS/Azure/GCP", "DevOps", "Microservices", "Auto-scaling"],
      color: "text-primary",
    },
    {
      icon: Database,
      title: "Database Management",
      description:
        "Efficient database design and management solutions for growing Indian startups.",
      features: ["PostgreSQL", "MongoDB", "Redis", "Data Migration"],
      color: "text-accent",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your business in the digital landscape.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance",
        "24/7 Monitoring",
      ],
      color: "text-primary",
    },
    {
      icon: Settings,
      title: "IT Consulting",
      description:
        "Strategic IT consulting to help Indian businesses embrace digital transformation.",
      features: [
        "Digital Strategy",
        "Tech Stack Selection",
        "Process Optimization",
        "Team Training",
      ],
      color: "text-accent",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="services-section py-20 lg:py-32 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5 parallax-bg" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center space-y-4 mb-16">
          <Badge className="neomorphic bg-primary/10 text-primary border-primary/20">
            Our Services
          </Badge>
          <h2 className="services-title text-3xl sm:text-4xl lg:text-5xl font-serif font-bold">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From web development to cloud infrastructure, we provide end-to-end
            technology solutions that drive business growth and digital
            transformation for Indian companies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`service-card neomorphic rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
                activeService === index ? "ring-2 ring-primary/50" : ""
              }`}
              onMouseEnter={() => {
                setActiveService(index);
                handleCardHover(index, true);
              }}
              onMouseLeave={() => handleCardHover(index, false)}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`service-icon p-3 rounded-xl glassmorphic ${service.color}`}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="service-feature flex items-center space-x-2"
                    >
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="group p-0 h-auto">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          ref={ctaRef}
          className="neomorphic rounded-3xl p-8 lg:p-12 text-center"
        >
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your
              technology goals and accelerate your startup's growth in the
              Indian market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="neomorphic-button bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="#contact">Get Free Consultation</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="neomorphic-button bg-transparent"
                asChild
              >
                <a href="#contact">View Our Work</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
