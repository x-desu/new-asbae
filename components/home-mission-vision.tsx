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
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[200px] rounded-full pointer-events-none" />
            
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Our <span className="text-blue-400">Purpose</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{ y: -4 }}
                        className="mission-vision-card group relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/30 via-blue-950/50 to-slate-950 border border-blue-500/20 p-[1px] h-full cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-full bg-slate-950/80 backdrop-blur-md rounded-[23px] p-8 sm:p-10 flex flex-col items-center text-center">
                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mb-6"
                            >
                                <Target className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
                            </motion.div>
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white tracking-tight">
                                Our Mission
                            </h3>
                            <p className="text-base sm:text-lg text-blue-100/60 leading-relaxed">
                                To empower enterprises and organizations with intelligent,
                                secure, and scalable IT solutions that streamline workflows,
                                enhance decision-making, and deliver seamless digital
                                experiences.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -4 }}
                        className="mission-vision-card group relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900/30 via-indigo-950/50 to-slate-950 border border-indigo-500/20 p-[1px] h-full cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-full bg-slate-950/80 backdrop-blur-md rounded-[23px] p-8 sm:p-10 flex flex-col items-center text-center">
                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center mb-6"
                            >
                                <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-400" />
                            </motion.div>
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white tracking-tight">
                                Our Vision
                            </h3>
                            <p className="text-base sm:text-lg text-indigo-100/60 leading-relaxed">
                                To become the leading provider of integrated IT, SaaS, and cloud
                                solutions that transform the way organizations operate, enabling
                                a future-ready, data-driven, and digitally secure ecosystem
                                across all sectors.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
