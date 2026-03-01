"use client";
import React, { useEffect, useRef } from "react";
import { ArrowRight, Shield, Zap, Database, Network, Server, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import GradientText from "@/lib/TextAnimations/GradientText/GradientText";
import { useModal } from "@/components/modal-context";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const gradientTextRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const rightDecorRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    gsap.set([title1Ref.current, gradientTextRef.current, descriptionRef.current, ctaContainerRef.current], {
      y: 30,
      opacity: 0
    });

    tl.to(title1Ref.current, { y: 0, opacity: 1, duration: 0.6, delay: 0.2 })
      .to(gradientTextRef.current, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
      .to(descriptionRef.current, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
      .to(ctaContainerRef.current, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4');

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
    window.location.href = '/about';
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full bg-background min-h-screen pt-20 sm:pt-24 lg:pt-20 pb-8 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        
        {/* Mobile Layout */}
        <div className="flex flex-col lg:hidden">
          
          {/* Title - Mobile */}
          <div className="text-center space-y-4 mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
              <span ref={title1Ref} className="block text-foreground text-lg sm:text-xl mb-1 text-white/80">
                Empowering Organizations with
              </span>
              <div ref={gradientTextRef} className="block mt-1">
                <GradientText
                  colors={["#3b82f6", "#6366f1", "#60a5fa", "#6366f1", "#3b82f6"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-3xl sm:text-4xl font-extrabold"
                >
                  Intelligent IT Solutions
                </GradientText>
              </div>
            </h1>
          </div>

          {/* 3D Visual - Mobile (Centered, Smaller) */}
          <div ref={rightDecorRef} className="relative w-full h-[280px] sm:h-[320px] flex items-center justify-center perspective-1000 my-4">
            
            {/* Background Glow - Smaller for mobile */}
            <motion.div
              className="absolute w-[220px] sm:w-[260px] h-[220px] sm:h-[260px] bg-indigo-600/30 blur-[60px] sm:blur-[80px] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Single Orbit Ring */}
            <div className="absolute w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] border border-blue-500/20 rounded-full" />

            {/* Central Core - Smaller for mobile */}
            <motion.div
              className="absolute z-20 w-32 h-32 sm:w-40 sm:h-40 border border-blue-500/30 flex items-center justify-center bg-gradient-to-tr from-blue-900/20 to-indigo-900/20 backdrop-blur-xl"
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
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-indigo-400/40 flex items-center justify-center bg-indigo-500/10 shadow-[0_0_40px_rgba(99,102,241,0.4)]">
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
                  <Network className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 mix-blend-screen" />
                </motion.div>
              </div>
            </motion.div>

            {/* Satellite - Database */}
            <motion.div
              className="absolute z-30 w-10 h-10 sm:w-12 sm:h-12 bg-blue-950/80 backdrop-blur-md border border-blue-400/40 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/30"
              style={{ left: '15%', bottom: '25%' }}
              animate={{ y: [0, -6, 0], x: [0, 3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Database className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
            </motion.div>

            {/* Satellite - Server */}
            <motion.div
              className="absolute z-30 w-10 h-10 sm:w-12 sm:h-12 bg-indigo-950/80 backdrop-blur-md border border-indigo-400/40 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-900/30"
              style={{ right: '15%', top: '50%', transform: 'translateY(-50%)' }}
              animate={{ y: [0, 6, 0], x: [0, -3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Server className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-300" />
            </motion.div>

            {/* Satellite - CPU */}
            <motion.div
              className="absolute z-20 w-9 h-9 sm:w-11 sm:h-11 bg-sky-950/80 backdrop-blur-md border border-sky-400/40 rounded-lg flex items-center justify-center shadow-lg shadow-sky-900/20"
              style={{ right: '22%', top: '18%' }}
              animate={{ y: [0, 5, 0], x: [0, -3, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-sky-300" />
            </motion.div>
          </div>

          {/* Description - Mobile */}
          <p ref={descriptionRef} className="text-base text-white/80 text-center leading-relaxed px-2 mb-4">
            Streamline operations, secure data, and deliver seamless digital services. We unify enterprise IT, SaaS, and cloud into a single, powerful ecosystem.
          </p>

          {/* CTA Buttons - Mobile (Stacked) */}
          <div ref={ctaContainerRef} className="flex flex-col gap-3 mb-6">
            <Button
              size="lg"
              className="group w-full font-semibold px-6 py-4 text-base bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105"
              onClick={handleGetStartedClick}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full px-6 py-4 text-base border-white/20 text-white hover:bg-white/5 rounded-full transition-all duration-300 hover:scale-105"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </Button>
          </div>

          {/* Cards - Mobile (Horizontal Scroll) */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 w-[160px] p-4 rounded-2xl bg-blue-500/5 border border-white/10 backdrop-blur-sm flex flex-col items-start text-left"
              onClick={() => openModal({
                title: "Documentation Service",
                description: "Comprehensive enterprise-grade IT documentation solutions.",
                icon: <Shield className="w-6 h-6" />,
                features: ["Technical Writing", "Process Documentation", "API Documentation"],
                details: ["Create comprehensive documentation"],
                color: "blue"
              })}
            >
              <div className="p-2 rounded-lg bg-blue-500/20 mb-3">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-sm font-bold text-white">Documentation</h3>
              <p className="text-[11px] text-white/60 leading-tight mt-1">Enterprise-grade IT documentation service.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 w-[160px] p-4 rounded-2xl bg-indigo-500/5 border border-white/10 backdrop-blur-sm flex flex-col items-start text-left"
              onClick={() => openModal({
                title: "Unified Governance Solutions",
                description: "Configurable, modular enterprise platform.",
                icon: <Zap className="w-6 h-6" />,
                features: ["Modular & Scalable", "Governance-Ready", "Enterprise Security"],
                details: ["UGP provides governance-ready digital backbone"],
                color: "indigo"
              })}
            >
              <div className="p-2 rounded-lg bg-indigo-500/20 mb-3">
                <Zap className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-sm font-bold text-white">Governance</h3>
              <p className="text-[11px] text-white/60 leading-tight mt-1">Unified Governance & Compliance Platform.</p>
            </motion.div>
          </div>
        </div>

        {/* Desktop Layout - Hidden on Mobile */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          
          {/* Left Column */}
          <div className="text-center lg:text-left space-y-4 lg:space-y-6 max-w-xl mx-auto lg:mx-0 z-20">
            <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
              <span ref={title1Ref} className="block text-foreground text-lg sm:text-xl md:text-2xl mb-1 text-white/80">
                Empowering Organizations with
              </span>
              <div ref={gradientTextRef} className="block mt-1">
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

            <p ref={descriptionRef} className="text-sm sm:text-base lg:text-lg text-muted-foreground/90 leading-relaxed">
              Streamline operations, secure data, and deliver seamless digital services. We unify enterprise IT, SaaS, and cloud into a single, powerful ecosystem.
            </p>

            <div ref={ctaContainerRef} className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4">
              <Button
                size="lg"
                className="group w-full sm:w-auto font-semibold px-6 sm:px-8 py-4 text-base bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105"
                onClick={handleGetStartedClick}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-6 sm:px-8 py-4 text-base border-white/20 text-white hover:bg-white/5 rounded-full transition-all duration-300 hover:scale-105"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </Button>
            </div>

            {/* Cards */}
            <div className="flex gap-3 mt-6 lg:mt-8 overflow-x-auto pb-2 scrollbar-hide">
              <motion.div
                whileHover={{ y: -3, borderColor: "rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 w-[140px] sm:w-[160px] p-4 rounded-2xl bg-blue-500/5 border border-white/10 backdrop-blur-sm hover:bg-blue-500/10 transition-colors cursor-pointer group flex flex-col items-start text-left"
                onClick={() => openModal({
                  title: "Documentation Service",
                  description: "Comprehensive enterprise-grade IT documentation solutions.",
                  icon: <Shield className="w-6 h-6" />,
                  features: ["Technical Writing", "Process Documentation", "API Documentation"],
                  details: ["Create comprehensive documentation for all your IT systems"],
                  color: "blue"
                })}
              >
                <div className="p-2 rounded-lg bg-blue-500/20 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors duration-300">DaaS</h3>
                <p className="text-[11px] text-white/60 leading-tight mt-1">Enterprise-grade IT documentation.</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, borderColor: "rgba(99, 102, 241, 0.5)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 w-[140px] sm:w-[160px] p-4 rounded-2xl bg-indigo-500/5 border border-white/10 backdrop-blur-sm hover:bg-indigo-500/10 transition-colors cursor-pointer group flex flex-col items-start text-left"
                onClick={() => openModal({
                  title: "Unified Governance Solutions",
                  description: "Configurable, modular enterprise platform for digital transformation.",
                  icon: <Zap className="w-6 h-6" />,
                  features: ["Modular & Scalable", "Governance-Ready", "Enterprise Security"],
                  details: ["UGP provides governance-ready digital backbone"],
                  color: "indigo"
                })}
              >
                <div className="p-2 rounded-lg bg-indigo-500/20 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">UGS</h3>
                <p className="text-[11px] text-white/60 leading-tight mt-1">Unified Governance Solutions.</p>
              </motion.div>
            </div>
          </div>

          {/* Right Column - 3D Visual with Single Ring */}
          <div ref={rightDecorRef} className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] flex items-center justify-center perspective-1000">
            
            {/* Background Glow */}
            <motion.div
              className="absolute w-[320px] sm:w-[380px] md:w-[440px] lg:w-[500px] h-[320px] sm:h-[380px] md:h-[440px] lg:h-[500px] bg-indigo-600/30 blur-[80px] sm:blur-[100px] lg:blur-[120px] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Single Orbit Ring */}
            <div className="absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] border border-blue-500/20 rounded-full" />

            {/* Central Core - Large */}
            <motion.div
              className="absolute z-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 border border-blue-500/30 flex items-center justify-center bg-gradient-to-tr from-blue-900/20 to-indigo-900/20 backdrop-blur-xl"
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
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full border border-indigo-400/40 flex items-center justify-center bg-indigo-500/10 shadow-[0_0_60px_rgba(99,102,241,0.4)]">
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
                  <Network className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 text-blue-400 mix-blend-screen" />
                </motion.div>
              </div>
            </motion.div>

            {/* Satellite - Database - Bottom Left */}
            <motion.div
              className="absolute z-30 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-blue-950/80 backdrop-blur-md border border-blue-400/40 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-xl shadow-blue-900/30"
              style={{ left: '15%', bottom: '25%' }}
              animate={{
                y: [0, -8, 0],
                x: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Database className="w-7 h-7 sm:w-8 sm:h-8 text-blue-300" />
            </motion.div>

            {/* Satellite - Server - Right */}
            <motion.div
              className="absolute z-30 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-indigo-950/80 backdrop-blur-md border border-indigo-400/40 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-900/30"
              style={{ right: '15%', top: '50%', transform: 'translateY(-50%)' }}
              animate={{
                y: [0, 8, 0],
                x: [0, -5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Server className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-300" />
              <div className="absolute bottom-2 bg-indigo-500/40 h-0.5 w-6 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-indigo-400"
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

            {/* Satellite - CPU - Top Right */}
            <motion.div
              className="absolute z-20 w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-sky-950/80 backdrop-blur-md border border-sky-400/40 rounded-xl flex items-center justify-center shadow-lg shadow-sky-900/20"
              style={{ right: '25%', top: '15%' }}
              animate={{
                y: [0, 6, 0],
                x: [0, -5, 0],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-sky-300" />
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-0" />
    </section>
  );
}
