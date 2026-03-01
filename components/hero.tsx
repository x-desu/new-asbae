"use client";
import React, { useEffect, useRef } from "react";
import { ArrowRight, Play, Shield, Zap, Database, Cloud, Network, Server, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import GradientText from "@/lib/TextAnimations/GradientText/GradientText";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const gradientTextRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Right side GSAP ref
  const rightDecorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    gsap.set([title1Ref.current, gradientTextRef.current, descriptionRef.current, ctaContainerRef.current, statsRef.current], {
      y: 30,
      opacity: 0
    });

    tl.to(title1Ref.current, { y: 0, opacity: 1, duration: 0.6, delay: 0.2 })
      .to(gradientTextRef.current, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
      .to(descriptionRef.current, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
      .to(ctaContainerRef.current, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
      .to(statsRef.current, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4');

    gsap.to(rightDecorRef.current, {
      y: 100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleGetStartedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "/contact";
  };

  const handleLearnMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full bg-background pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-10 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        
        {/* Mobile-First Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          
          {/* Title Section - Mobile Optimized */}
          <div className="text-center lg:text-left space-y-3 sm:space-y-4 lg:space-y-6 max-w-2xl mx-auto lg:mx-0 z-20 relative order-1">
            <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
              <span ref={title1Ref} className="block text-foreground text-lg sm:text-xl md:text-2xl mb-1 lg:mb-2 text-white/80">
                Empowering Organizations with
              </span>
              <div ref={gradientTextRef} className="block mt-1 lg:mt-2">
                <GradientText
                  colors={["#3b82f6", "#6366f1", "#60a5fa", "#6366f1", "#3b82f6"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold"
                >
                  Intelligent IT Solutions
                </GradientText>
              </div>
            </h1>
          </div>

          {/* 3D Visual - Prominent on Mobile */}
          <div ref={rightDecorRef} className="relative w-full h-[240px] sm:h-[300px] md:h-[350px] lg:h-[600px] flex items-center justify-center perspective-1000 z-10 order-2 my-4 sm:my-6 lg:my-0">

            {/* Pulsing Background Glow */}
            <motion.div
              className="absolute w-[180px] sm:w-[220px] md:w-[280px] lg:w-[350px] xl:w-[400px] h-[180px] sm:h-[220px] md:h-[280px] lg:h-[350px] xl:h-[400px] bg-indigo-600/20 blur-[50px] sm:blur-[70px] lg:blur-[100px] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Central Morphing Core */}
            <motion.div
              className="absolute z-20 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-56 lg:h-56 xl:w-64 xl:h-64 border border-blue-500/30 flex items-center justify-center bg-gradient-to-tr from-blue-900/10 to-indigo-900/10 backdrop-blur-xl"
              style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
              animate={{
                rotate: 360,
                borderRadius: [
                  '40% 60% 70% 30% / 40% 50% 60% 50%',
                  '60% 40% 30% 70% / 50% 60% 40% 50%',
                  '30% 70% 70% 30% / 30% 30% 70% 70%',
                  '40% 60% 70% 30% / 40% 50% 60% 50%'
                ]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full border border-indigo-400/40 flex items-center justify-center bg-indigo-500/10 shadow-[0_0_40px_rgba(99,102,241,0.3)]">
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
                  <Network className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-blue-400 mix-blend-screen" />
                </motion.div>
              </div>
            </motion.div>

            {/* Orbiting Satellites - Simplified for mobile */}
            <motion.div
              className="absolute z-30 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 bg-blue-950/60 backdrop-blur-md border border-blue-400/30 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center gap-0.5 sm:gap-1 shadow-lg lg:shadow-2xl shadow-blue-900/20"
              animate={{
                y: [0, -10, 0],
                x: [40, 50, 40],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Server className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-300" />
              <div className="bg-blue-500/20 h-0.5 sm:h-1 w-4 sm:w-6 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-400"
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute z-30 w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-indigo-950/60 backdrop-blur-md border border-indigo-400/30 rounded-full flex items-center justify-center shadow-lg lg:shadow-2xl shadow-indigo-900/20"
              animate={{
                y: [25, 35, 25],
                x: [-50, -40, -50],
                rotate: [-5, 0, -5]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Database className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-indigo-300" />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-indigo-400/0 border-t-indigo-400/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            <motion.div
              className="absolute z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 bg-sky-950/60 backdrop-blur-md border border-sky-400/30 rounded-lg lg:rounded-xl flex items-center justify-center shadow-md lg:shadow-xl shadow-sky-900/10"
              animate={{
                y: [-40, -30, -40],
                x: [10, 15, 10],
                rotate: [10, 18, 10]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 text-sky-300" />
            </motion.div>

            {/* Abstract Tech Grid Background - Hidden on small mobile */}
            <div className="absolute inset-0 z-0 opacity-[0.02] sm:opacity-[0.03] pointer-events-none hidden sm:block" style={{ backgroundImage: 'linear-gradient(to right, #4f46e5 1px, transparent 1px), linear-gradient(to bottom, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          </div>

          {/* Description & CTAs - Bottom Section on Mobile */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 max-w-2xl mx-auto lg:mx-0 z-20 relative order-3">
            <p ref={descriptionRef} className="text-sm sm:text-base lg:text-lg text-muted-foreground/90 leading-relaxed max-w-lg mx-auto lg:mx-0 px-2 sm:px-0">
              Streamline operations, secure data, and deliver seamless digital services. We unify enterprise IT, SaaS, and cloud into a single, powerful ecosystem.
            </p>

            <div ref={ctaContainerRef} className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 pt-2 lg:pt-4">
              <Button
                size="lg"
                className="group w-full sm:w-auto font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base lg:text-lg bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105"
                onClick={handleGetStartedClick}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base border-white/20 text-white hover:bg-white/5 rounded-full transition-all duration-300 hover:scale-105"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </Button>
            </div>

            {/* Featured Cards - Horizontal Scroll on Mobile */}
            <div className="flex lg:grid lg:grid-cols-2 gap-3 sm:gap-4 w-full max-w-lg mx-auto lg:mx-0 mt-6 sm:mt-8 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 snap-x snap-mandatory scrollbar-hide">
              <motion.div
                whileHover={{ y: -3, borderColor: "rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 w-[160px] sm:w-auto p-4 rounded-2xl bg-blue-500/5 border border-white/5 backdrop-blur-sm hover:bg-blue-500/10 transition-colors cursor-pointer group flex flex-col items-start text-left snap-start"
                onClick={() => window.location.href = '/services'}
                style={{ willChange: "transform" }}
              >
                <div className="p-2 rounded-lg bg-blue-500/20 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors duration-300">Documentation</h3>
                <p className="text-[11px] text-muted-foreground leading-tight mt-1">Enterprise-grade IT documentation service.</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, borderColor: "rgba(99, 102, 241, 0.5)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 w-[160px] sm:w-auto p-4 rounded-2xl bg-indigo-500/5 border border-white/5 backdrop-blur-sm hover:bg-indigo-500/10 transition-colors cursor-pointer group flex flex-col items-start text-left snap-start"
                onClick={() => window.location.href = '/services'}
                style={{ willChange: "transform" }}
              >
                <div className="p-2 rounded-lg bg-indigo-500/20 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">Governance</h3>
                <p className="text-[11px] text-muted-foreground leading-tight mt-1">Unified Governance & Compliance Platform.</p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-0" />
    </section>
  );
}
