"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function HomeMissionVision() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = gsap.utils.toArray(".mission-vision-card") as HTMLElement[];

        gsap.fromTo(
            cards,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section ref={containerRef} className="py-16 md:py-24 relative z-10 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto">
                    {/* Mission Card */}
                    <div className="mission-vision-card w-full relative group rounded-3xl overflow-hidden p-[1px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-[23px] p-6 sm:p-8 md:p-12 hover:bg-white/10 transition-colors duration-500 flex flex-col items-center text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white tracking-tight">
                                Our Mission
                            </h2>
                            <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed font-light">
                                To empower enterprises and organizations with intelligent,
                                secure, and scalable IT solutions that streamline workflows,
                                enhance decision-making, and deliver seamless digital
                                experiences.
                            </p>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="mission-vision-card w-full relative group rounded-3xl overflow-hidden p-[1px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-[23px] p-6 sm:p-8 md:p-12 hover:bg-white/10 transition-colors duration-500 flex flex-col items-center text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white tracking-tight">
                                Our Vision
                            </h2>
                            <p className="text-base sm:text-lg text-indigo-100/80 leading-relaxed font-light">
                                To become the leading provider of integrated IT, SaaS, and cloud
                                solutions that transform the way organizations operate, enabling
                                a future-ready, data-driven, and digitally secure ecosystem
                                across all sectors.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
