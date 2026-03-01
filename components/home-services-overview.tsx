"use client";

import React, { useRef, useEffect } from "react";
import {
    Briefcase,
    Code2,
    FileSearch,
    Layers,
    ArrowRight,
    CheckCircle2,
    FileText,
    Shield,
    Globe
} from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Button } from "@/components/ui/button";
import GradientText from "@/lib/TextAnimations/GradientText/GradientText";

const services = [
    {
        title: "Business Documentation",
        description: "Aligning stakeholders with clear, actionable requirements and process flows.",
        icon: <Briefcase className="w-8 h-8 text-blue-400" />,
        items: ["BRD/FRD/SRS", "Scope of Work (SOW)", "Use Cases & User Stories", "BPMN Process Flows"],
        color: "from-blue-500/20 to-cyan-500/20",
        borderColor: "group-hover:border-blue-500/50"
    },
    {
        title: "Technical Documentation",
        description: "Bridging the gap between design and implementation with logic-driven docs.",
        icon: <Code2 className="w-8 h-8 text-indigo-400" />,
        items: ["API Documentation", "System Architecture", "DB Schema & ERD", "Code Review Docs"],
        color: "from-indigo-500/20 to-purple-500/20",
        borderColor: "group-hover:border-indigo-500/50"
    },
    {
        title: "Tender & Compliance",
        description: "Securing approvals and bids with audit-ready, compliance-aligned response kits.",
        icon: <FileSearch className="w-8 h-8 text-emerald-400" />,
        items: ["RFP Technical Response", "Compliance Matrix", "ISO/GDPR Alignment", "SLA & SOPs"],
        color: "from-emerald-500/20 to-teal-500/20",
        borderColor: "group-hover:border-emerald-500/50"
    },
    {
        title: "Documentation as a Service (DaaS)",
        description: "Ensuring long-term project stability with robust migration and training plans.",
        icon: <Layers className="w-8 h-8 text-blue-400" />,
        items: ["Data Migration Plans", "Risk Mitigation Docs", "Training Guides", "Version Control/Release Notes"],
        color: "from-blue-500/20 to-indigo-500/20",
        borderColor: "group-hover:border-blue-500/50"
    }
];

export default function HomeServicesOverview() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (headerRef.current) {
            gsap.fromTo(headerRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 85%",
                    }
                }
            );
        }

        const cards = gsap.utils.toArray(".service-card") as HTMLElement[];
        cards.forEach((card, i) => {
            gsap.fromTo(card,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section id="services-overview" ref={sectionRef} className="py-24 md:py-32 relative bg-transparent">
            <div className="container mx-auto px-6 relative z-10">
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Unified Governance{" "}
                        <GradientText
                            colors={["#3b82f6", "#6366f1", "#60a5fa", "#6366f1", "#3b82f6"]}
                            animationSpeed={8}
                            showBorder={false}
                            className="inline-block"
                        >
                            Solutions (UGS)
                        </GradientText>
                    </h2>
                    <p className="text-lg md:text-xl text-blue-100/60 font-light leading-relaxed">
                        Governance-grade documentation and platforms for IT & e-Governance projects. We deliver clarity, control, and audit readiness.
                    </p>
                </div>

                {/* Why UGS Section - Blue Theme Modern */}
                <div className="mb-20 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
                            Why <span className="text-blue-400">Unified Governance</span>?
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 mx-auto rounded-full" />
                    </motion.div>

                    {/* Bento Grid - 2x2 on mobile/tablet, 3x3 on desktop */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        
                        {/* What is UGS - Large Card (spans 2 cols on mobile, 2 on desktop) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.01 }}
                            className="col-span-2 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-900/40 via-blue-950/60 to-slate-950 border border-blue-500/20 backdrop-blur-sm group"
                        >
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors"
                                >
                                    <Layers className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400" />
                                </motion.div>
                                <div>
                                    <h4 className="text-lg sm:text-2xl font-bold text-white">Unified Governance Platform</h4>
                                    <p className="text-blue-400/60 text-xs sm:text-sm hidden sm:block">Enterprise-grade solution</p>
                                </div>
                            </div>
                            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-blue-100/70 leading-relaxed">
                                <p>A configurable, modular enterprise platform for large-scale digital transformation.</p>
                                <p className="text-blue-100/50 text-xs sm:text-sm">Secure access control, workflow automation, compliance monitoring, and system integration.</p>
                            </div>
                            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                                {["Configuration-driven", "Fast deployment"].map((tag, i) => (
                                    <span key={i} className="px-2 sm:px-3 py-1 rounded-full text-xs bg-blue-500/10 border border-blue-400/20 text-blue-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Feature Cards - Fill remaining slots */}
                        {[
                            { title: "Modular", icon: <Code2 className="w-4 h-4 sm:w-6 sm:h-6" />, desc: "Flexible architecture" },
                            { title: "Governance", icon: <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6" />, desc: "Built-in compliance" },
                            { title: "Tender", icon: <FileText className="w-4 h-4 sm:w-6 sm:h-6" />, desc: "Docs ready" },
                            { title: "Security", icon: <Shield className="w-4 h-4 sm:w-6 sm:h-6" />, desc: "Data protection" },
                            { title: "Scale", icon: <Globe className="w-4 h-4 sm:w-6 sm:h-6" />, desc: "Large ecosystems" },
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-950/50 to-slate-950 border border-blue-500/15 backdrop-blur-sm group hover:border-blue-400/30 transition-all cursor-pointer"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-2 sm:mb-4 text-blue-400 group-hover:bg-blue-500/20 transition-colors"
                                >
                                    {feature.icon}
                                </motion.div>
                                <h5 className="text-white font-semibold mb-1 text-sm sm:text-base">{feature.title}</h5>
                                <p className="text-blue-300/50 text-xs">{feature.desc}</p>
                            </motion.div>
                        ))}

                        {/* Technical Architecture - Full width bottom */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="col-span-2 lg:col-span-3 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-950 via-blue-950/30 to-slate-950 border border-blue-500/20"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center"
                                    >
                                        <Globe className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400" />
                                    </motion.div>
                                    <div>
                                        <h4 className="text-base sm:text-xl font-bold text-white">Technical Architecture</h4>
                                        <p className="text-blue-400/60 text-xs sm:text-sm hidden sm:block">Scalable & modular</p>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-wrap gap-2 sm:gap-3 justify-start sm:justify-end">
                                    {[
                                        "Cloud / Hybrid",
                                        "API", 
                                        "RBAC",
                                        "Encryption",
                                        "HA"
                                    ].map((tech, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.6 + i * 0.05 }}
                                            viewport={{ once: true }}
                                            whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                                            className="px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm bg-blue-500/10 border border-blue-400/20 text-blue-200 cursor-default transition-colors"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card group relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/5 hover:bg-white/[0.06] transition-all duration-500 overflow-hidden flex flex-col h-full"
                        >
                            {/* Accent Glow */}
                            <div className={`absolute -top-16 -right-16 sm:-top-20 sm:-right-20 lg:-top-24 lg:-right-24 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-gradient-to-br ${service.color} blur-[60px] sm:blur-[70px] lg:blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            <div className="relative z-10">
                                <div className="mb-4 sm:mb-5 lg:mb-6 p-3 sm:p-3 lg:p-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-xl sm:rounded-xl lg:rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-blue-100/60 text-xs sm:text-sm mb-4 sm:mb-6 lg:mb-8 leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                                    {service.description}
                                </p>

                                <ul className="space-y-2 sm:space-y-2 lg:space-y-3 mb-4 sm:mb-6 lg:mb-8 flex-grow">
                                    {service.items.slice(0, 3).map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-[11px] sm:text-[12px] lg:text-[13px] text-blue-100/40">
                                            <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-500/50" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Button
                                variant="ghost"
                                className="relative z-10 mt-auto w-fit p-0 h-auto text-blue-400 hover:text-blue-300 hover:bg-transparent group/btn flex items-center gap-2 text-xs sm:text-sm"
                                onClick={() => window.location.href = '/services'}
                            >
                                <span className="font-semibold">Explore</span>
                                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Button
                        size="lg"
                        className="rounded-full px-10 py-7 text-lg bg-blue-600 hover:bg-blue-500 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-all hover:scale-105"
                        onClick={() => window.location.href = '/services'}
                    >
                        View Full Service Suite
                    </Button>
                </div>
            </div>
        </section>
    );
}
