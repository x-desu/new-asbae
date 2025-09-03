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

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const Services = () => {
  const [activeService, setActiveService] = useState<number>(-1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state after initial render
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Enhanced hover animation function - only on non-touch devices
  const handleCardHover = (index: number, isEntering: boolean) => {
    if ('ontouchstart' in window) return;
    
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, {
      scale: isEntering ? 1.03 : 1,
      y: isEntering ? -8 : 0,
      rotationY: isEntering ? 2 : 0,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  // Services data
  const services: Service[] = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern web applications built with React, Next.js, and cutting-edge technologies for Indian businesses.",
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
  ];

  // GSAP animations setup
  useEffect(() => {
    if (!isMounted || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Get all elements
      const sectionEl = sectionRef.current!;
      const serviceCards = Array.from(sectionEl.querySelectorAll<HTMLDivElement>(".service-card"));
      const badge = headerRef.current?.querySelector(".neomorphic") as Element | null;
      const title = headerRef.current?.querySelector(".services-title") as Element | null;
      const description = headerRef.current?.querySelector("p") as Element | null;
      const ctaSection = ctaRef.current as Element | null;

      // Set initial states
      gsap.set([badge, title, description, ctaSection].filter(Boolean), { 
        opacity: 0, 
        y: 20,
        visibility: "visible"
      });
      
      if (serviceCards.length) {
        gsap.set(serviceCards, { 
          opacity: 0, 
          y: 30,
          visibility: "visible" 
        });
      }

      // Header animation timeline
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Animate header elements
      if (badge) {
        headerTl.fromTo(
          badge,
          { opacity: 0, y: -50, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
        );
      }

      if (title) {
        headerTl.fromTo(
          title,
          { opacity: 0, x: -100, rotationY: -15 },
          { opacity: 1, x: 0, rotationY: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        );
      }

      if (description) {
        headerTl.fromTo(
          description,
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
          "-=0.4"
        );
      }

      // Animate service cards
      if (serviceCards.length) {
        gsap.to(serviceCards, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 70%",
            toggleActions: "play none none none",
            once: true,
          }
        });
      }

      // Animate CTA section
      if (ctaSection) {
        gsap.fromTo(
          ctaSection,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: ctaSection,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMounted]);

  return (
    <div ref={sectionRef} id="services" className="services-section py-12 sm:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center space-y-4 mb-12 sm:mb-16 px-2">
          <div className="neomorphic inline-block px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-semibold bg-gradient-to-r from-yellow-500/80 via-amber-500/80 to-orange-500/80 backdrop-blur-xl border border-yellow-400/30 hover:border-yellow-400/50 text-white shadow-xl hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105 rounded-full drop-shadow-[0_0_15px_rgba(255,193,7,0.4)]">
            Our Services
          </div>
          <h2 className="services-title text-2xl sm:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent px-2">
            Comprehensive IT Solutions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
            From web development to cloud infrastructure, we provide end-to-end technology solutions that drive business
            growth and digital transformation for Indian companies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-2 sm:px-0">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <div
                key={index}
                ref={el => {
                  if (el) cardsRef.current[index] = el;
                }}
                className={`service-card bg-black/80 backdrop-blur-xl border border-yellow-500/30 hover:border-yellow-400/60 rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/20 hover:drop-shadow-[0_4px_15px_rgba(255,193,7,0.2)] ${
                  activeService === index ? "ring-1 ring-yellow-400/50 shadow-yellow-400/20" : ""
                }`}
                onMouseEnter={() => {
                  setActiveService(index);
                  handleCardHover(index, true);
                }}
                onMouseLeave={() => handleCardHover(index, false)}
                onClick={() => setActiveService(index === activeService ? -1 : index)}
              >
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div
                      className={`service-icon p-3 sm:p-4 rounded-xl bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-200 ${service.color}`}
                    >
                      <ServiceIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 sm:space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="service-feature flex items-start sm:items-center space-x-2">
                        <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                        <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="group w-full sm:w-auto px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-transparent hover:bg-yellow-500/10 border border-yellow-500/30 hover:border-yellow-400/50 rounded-lg transition-all duration-200 active:scale-95 sm:hover:scale-105 sm:hover:shadow-md hover:shadow-yellow-400/10 text-white hover:text-yellow-300"
                  >
                    Learn More
                    <ArrowRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-0.5 group-hover:rotate-12 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 lg:mt-24 px-2 sm:px-0">
          <div
            ref={ctaRef}
            className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-400/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 text-center shadow-xl hover:shadow-orange-400/10 transition-all duration-300 mx-2 sm:mx-0 transform-gpu will-change-transform"
          >
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold">
                <span className="inline-block">Ready to Transform Your Business?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your technology goals and accelerate your startup's
                growth in the Indian market.
              </p>
              <Button
                size="lg"
                className="mt-2 sm:mt-4 group bg-gradient-to-r from-orange-500/80 via-amber-500/80 to-yellow-500/80 hover:from-orange-600/90 hover:via-amber-600/90 hover:to-yellow-600/90 border border-orange-400/30 hover:border-orange-400/50 text-white hover:text-orange-100 shadow-lg hover:shadow-orange-400/30 transition-all duration-300 transform hover:scale-105 rounded-2xl px-8 py-6 text-base sm:text-lg font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
