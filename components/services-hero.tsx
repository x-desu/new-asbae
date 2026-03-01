"use client";
import React, { useEffect, useRef } from "react";
import { ArrowRight, Shield, Zap, Workflow, FileText, BarChart3, Users, Network, Settings, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import GradientText from "@/lib/TextAnimations/GradientText/GradientText";

export default function ServicesHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const title1Ref = useRef<HTMLSpanElement>(null);
    const gradientTextRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const ctaContainerRef = useRef<HTMLDivElement>(null);
    const rightDecorRef = useRef<HTMLDivElement>(null);

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

    const scrollToContent = () => {
        document.getElementById("ugs-section")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[85svh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-24 lg:pt-28 pb-10"
        >
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full h-full flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">

                    {/* Left Column: Text & CTAs */}
                    <div className="text-center lg:text-left space-y-4 lg:space-y-6 max-w-2xl mx-auto lg:mx-0 z-20 relative">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                            <span ref={title1Ref} className="block text-foreground mb-1 lg:mb-2">
                                Comprehensive Solution
                            </span>
                            <div ref={gradientTextRef} className="block mt-1 lg:mt-2 pb-1 lg:pb-2">
                                <GradientText
                                    colors={["#3b82f6", "#6366f1", "#60a5fa", "#6366f1", "#3b82f6"]}
                                    animationSpeed={8}
                                    showBorder={false}
                                    className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold"
                                >
                                    Ecosystem
                                </GradientText>
                            </div>
                        </h1>

                        <p ref={descriptionRef} className="text-sm sm:text-base lg:text-lg text-muted-foreground/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            From high-stakes technical documentation to unified enterprise governance, we provide the infrastructure and expertise to scale your digital operations.
                        </p>

                        <div ref={ctaContainerRef} className="flex flex-col items-center lg:items-start gap-8 pt-2 lg:pt-4">
                            <Button
                                size="lg"
                                className="group w-full sm:w-auto font-semibold px-8 py-6 text-base lg:text-lg bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105"
                                onClick={scrollToContent}
                            >
                                Explore Solutions
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: 3D Animated Design */}
                    <div ref={rightDecorRef} className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] flex items-center justify-center perspective-1000 z-10 scale-[0.6] sm:scale-[0.75] md:scale-[0.85] lg:scale-[1.5] xl:scale-[1.8] mt-8 lg:mt-0 md:mt-12">

                        {/* Pulsing Background Glow */}
                        <motion.div
                            className="absolute w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-blue-600/20 blur-[100px] rounded-full"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Central Governance Core */}
                        <motion.div
                            className="absolute z-20 w-56 h-56 border border-blue-500/30 flex items-center justify-center bg-gradient-to-tr from-blue-900/10 to-indigo-900/10 backdrop-blur-xl"
                            style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
                            animate={{
                                rotate: -360,
                                borderRadius: [
                                    '40% 60% 70% 30% / 40% 50% 60% 50%',
                                    '60% 40% 30% 70% / 50% 60% 40% 50%',
                                    '30% 70% 70% 30% / 30% 30% 70% 70%',
                                    '40% 60% 70% 30% / 40% 50% 60% 50%'
                                ]
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="w-24 h-24 rounded-full border border-blue-400/40 flex items-center justify-center bg-blue-500/10 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                                    <Shield className="w-10 h-10 text-blue-400 mix-blend-screen" />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Orbiting Elements */}
                        <motion.div
                            className="absolute z-30 w-16 h-16 bg-blue-950/60 backdrop-blur-md border border-blue-400/30 rounded-2xl flex items-center justify-center shadow-2xl"
                            animate={{
                                y: [-120, -100, -120],
                                x: [80, 100, 80],
                                rotate: [0, 45, 0]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <Workflow className="w-6 h-6 text-blue-300" />
                        </motion.div>

                        <motion.div
                            className="absolute z-30 w-14 h-14 bg-indigo-950/60 backdrop-blur-md border border-indigo-400/30 rounded-full flex items-center justify-center shadow-2xl"
                            animate={{
                                y: [100, 120, 100],
                                x: [-80, -100, -80],
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
                        >
                            <BarChart3 className="w-6 h-6 text-indigo-300" />
                        </motion.div>

                        <motion.div
                            className="absolute z-20 w-12 h-12 bg-sky-950/60 backdrop-blur-md border border-sky-400/30 rounded-lg flex items-center justify-center"
                            animate={{
                                y: [0, 20, 0],
                                x: [140, 160, 140],
                            }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
                        >
                            <FileText className="w-5 h-5 text-sky-300" />
                        </motion.div>

                        {/* Abstract Tech Grid */}
                        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    </div>
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-0" />
        </section>
    );
}
