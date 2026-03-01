"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Users, Shield, Layers, BarChart } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import GradientText from "@/lib/TextAnimations/GradientText/GradientText";

const approachItems = [
    {
        Icon: Users,
        title: "Client-Centric Design",
        description: "Tailored solutions for your workflows",
        gradient: "from-blue-600/20 to-blue-500/10",
        borderColor: "border-blue-500/20",
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-400",
    },
    {
        Icon: Shield,
        title: "Secure & Compliant",
        description: "Advanced encryption and audit-ready platforms",
        gradient: "from-indigo-600/20 to-indigo-500/10",
        borderColor: "border-indigo-500/20",
        iconBg: "bg-indigo-500/10",
        iconColor: "text-indigo-400",
    },
    {
        Icon: Layers,
        title: "Scalable Technology",
        description: "Solutions that grow with your organization",
        gradient: "from-sky-600/20 to-sky-500/10",
        borderColor: "border-sky-500/20",
        iconBg: "bg-sky-500/10",
        iconColor: "text-sky-400",
    },
    {
        Icon: BarChart,
        title: "Insight & Intelligence",
        description: "Dashboards, analytics, and KPI tracking",
        gradient: "from-cyan-600/20 to-cyan-500/10",
        borderColor: "border-cyan-500/20",
        iconBg: "bg-cyan-500/10",
        iconColor: "text-cyan-400",
    },
];

export default function HomeOurApproach() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            },
        });

        tl.fromTo(
            headerRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
        );

        const cards = gsap.utils.toArray(".approach-card") as HTMLElement[];
        tl.fromTo(
            cards,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.15,
                ease: "back.out(1.2)",
            },
            "-=0.2"
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section ref={containerRef} className="py-16 md:py-24 relative z-10 bg-transparent overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div
                    ref={headerRef}
                    className="text-center max-w-3xl mx-auto mb-10 md:mb-24"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
                        Our{" "}
                        <GradientText
                            colors={["#3b82f6", "#6366f1", "#60a5fa", "#6366f1", "#3b82f6"]}
                            animationSpeed={8}
                            showBorder={false}
                            className="inline-block"
                        >
                            Approach
                        </GradientText>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-blue-100/60 font-light">
                        How we deliver excellence and drive transformation.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
                    {approachItems.map((item, index) => {
                        const Icon = item.Icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className={`approach-card group relative p-6 rounded-2xl bg-gradient-to-br ${item.gradient} ${item.borderColor} border backdrop-blur-sm overflow-hidden cursor-pointer`}
                            >
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                <div className="relative z-10">
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className={`w-12 h-12 rounded-xl ${item.iconBg} border ${item.borderColor} flex items-center justify-center mb-4 ${item.iconColor}`}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </motion.div>
                                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-blue-200/50 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
