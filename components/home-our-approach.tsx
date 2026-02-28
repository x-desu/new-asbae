"use client";

import React, { useEffect, useRef } from "react";
import { Users, Shield, Layers, BarChart } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import GradientText from "@/lib/TextAnimations/GradientText/GradientText";

const approachItems = [
    {
        Icon: Users,
        title: "Client-Centric Design",
        description: "Tailored solutions for your workflows",
        color: "from-blue-400 to-cyan-300",
        bgClass: "bg-blue-500/10",
        iconColor: "text-cyan-400",
    },
    {
        Icon: Shield,
        title: "Secure & Compliant Systems",
        description: "Advanced encryption and audit-ready platforms",
        color: "from-indigo-400 to-purple-300",
        bgClass: "bg-indigo-500/10",
        iconColor: "text-indigo-400",
    },
    {
        Icon: Layers,
        title: "Scalable Technology",
        description: "Solutions that grow with your organization",
        color: "from-violet-400 to-fuchsia-300",
        bgClass: "bg-violet-500/10",
        iconColor: "text-violet-400",
    },
    {
        Icon: BarChart,
        title: "Insight & Intelligence",
        description:
            "Dashboards, analytics, and KPI tracking for data-driven decisions",
        color: "from-sky-400 to-blue-300",
        bgClass: "bg-sky-500/10",
        iconColor: "text-sky-400",
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
                    {approachItems.map((item, index) => {
                        const Icon = item.Icon;
                        return (
                            <div
                                key={index}
                                className="approach-card group relative p-[1px] rounded-3xl overflow-hidden w-full"
                            >
                                {/* Hover gradient background effect */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                />

                                <div className="relative h-full bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-[23px] p-6 sm:p-8 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-500 flex flex-col items-start text-left sm:items-center sm:text-center lg:items-start lg:text-left">
                                    <div
                                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${item.bgClass} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500`}
                                    >
                                        <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${item.iconColor}`} />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-blue-100/60 leading-relaxed font-light text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
