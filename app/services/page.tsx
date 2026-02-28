"use client";
import React, { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Clock, CheckCircle2, ArrowRight, Briefcase, Code2, FileSearch, Layers, Shield, Users, Workflow, BarChart3, FileText, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import GradientText from "@/lib/TextAnimations/GradientText/GradientText";
import DarkVeil from "@/lib/Backgrounds/DarkVeil/DarkVeil";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const DaaS_CATEGORIES = [
    {
        title: "1. Business Documentation",
        icon: <Briefcase className="w-6 h-6 text-blue-400" />,
        items: [
            "Business Requirement Document (BRD)",
            "Functional Requirement Document (FRD)",
            "Software Requirement Specification (SRS)",
            "Scope of Work (SOW)",
            "Use Cases & User Stories",
            "Process Flow (BPMN)",
            "Change Request (CR) Documentation"
        ]
    },
    {
        title: "2. Technical Documentation",
        icon: <Code2 className="w-6 h-6 text-indigo-400" />,
        items: [
            "Technical Design Document (TDD)",
            "API Documentation (Swagger/Postman)",
            "Database Schema & ERD",
            "System Architecture Design",
            "Code Review & Logic Documentation",
            "User Manuals & SOPs"
        ]
    },
    {
        title: "3. Tender & Compliance Documentation",
        icon: <FileSearch className="w-6 h-6 text-emerald-400" />,
        items: [
            "RFP/RFQ Technical Responses",
            "Compliance Matrix Mapping",
            "Technical Eligibility Documents",
            "Security & Quality (ISO/GDPR/HIPAA align)",
            "SLA & Non-Disclosure (NDA)"
        ]
    },
    {
        title: "4. Specialized Project Assets",
        icon: <Layers className="w-6 h-6 text-blue-400" />,
        items: [
            "Release Notes & Version Control",
            "Data Migration Documentation",
            "Risk Mitigation & Contingency Plans",
            "Training Guides for End-Users"
        ]
    }
];

const UGP_MODULES = [
    {
        title: "RBAC & Identity",
        description: "Granular Role-Based Access Control and centralized identity management for enterprise security.",
        icon: <Users className="w-5 h-5" />
    },
    {
        title: "Workflow Engine",
        description: "Dynamic process automation with multi-level approvals and configurable business logic.",
        icon: <Workflow className="w-5 h-5" />
    },
    {
        title: "Real-time Analytics",
        description: "Comprehensive dashboards providing visibility into operations and compliance health.",
        icon: <BarChart3 className="w-5 h-5" />
    },
    {
        title: "Audit & Compliance",
        description: "Automated audit logs and compliance reporting to ensure regulatory adherence.",
        icon: <Shield className="w-5 h-5" />
    },
    {
        title: "Document Management",
        description: "Centralized repository for all project and enterprise documentation with version control.",
        icon: <FileText className="w-5 h-5" />
    },
    {
        title: "System Integration",
        description: "Seamlessly connect with existing enterprise systems through robust API frameworks.",
        icon: <Settings className="w-5 h-5" />
    }
];

const ENGAGEMENT_MODELS = [
    {
        title: "Project-Based",
        description: "Fixed-scope documentation or platform implementation for specific project milestones.",
        icon: <CheckCircle2 className="w-6 h-6 text-blue-400" />
    },
    {
        title: "Retainer (DaaS)",
        description: "Ongoing documentation support to work as an extension of your delivery team.",
        icon: <Clock className="w-6 h-6 text-indigo-400" />
    },
    {
        title: "Tender Support",
        description: "Specialized assistance for high-stakes government and enterprise bidding cycles.",
        icon: <Zap className="w-6 h-6 text-amber-400" />
    }
];

export default function ServicesPage() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Header animation
        gsap.fromTo(".services-hero-content",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );

        // Sections entrance
        const anims = [
            { selector: ".daas-card", y: 40 },
            { selector: ".ugp-card", scale: 0.95 },
            { selector: ".engagement-card", x: 30 }
        ];

        anims.forEach(anim => {
            gsap.utils.toArray(anim.selector).forEach((card: any, i: number) => {
                gsap.fromTo(card,
                    { opacity: 0, ...(anim.y ? { y: anim.y } : {}), ...(anim.scale ? { scale: anim.scale } : {}), ...(anim.x ? { x: i % 2 === 0 ? -anim.x : anim.x } : {}) },
                    {
                        opacity: 1, y: 0, scale: 1, x: 0,
                        duration: 0.8,
                        delay: i * 0.1,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <main className="relative min-h-screen bg-black text-foreground overflow-x-hidden">
            <Header />

            {/* Background Layer */}
            <div className="fixed inset-0 z-0">
                <DarkVeil
                    hueShift={28}
                    noiseIntensity={0}
                    scanlineIntensity={0}
                    speed={0.4}
                    scanlineFrequency={0}
                    warpAmount={1}
                    resolutionScale={1}
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10">

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-6 lg:pt-48 lg:pb-32 overflow-hidden">
                    <div className="container mx-auto text-center max-w-4xl relative z-10 services-hero-content">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                            <GradientText
                                colors={["#3b82f6", "#6366f1", "#60a5fa", "#6366f1", "#3b82f6"]}
                                animationSpeed={8}
                                showBorder={false}
                            >
                                Comprehensive Solution Ecosystem
                            </GradientText>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100/60 max-w-2xl mx-auto leading-relaxed">
                            From high-stakes technical documentation to unified enterprise governance, we provide the infrastructure and expertise to scale your digital operations.
                        </p>
                    </div>
                </section>

                {/* DaaS Section */}
                <section id="daas" className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                                    <Shield className="w-8 h-8 text-blue-500" />
                                    Documentation as a Service (DaaS)
                                </h2>
                                <p className="text-muted-foreground text-lg italic">
                                    Governance-Grade Documentation for IT & e-Governance Projects
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {DaaS_CATEGORIES.map((cat, idx) => (
                                <div
                                    key={idx}
                                    className="daas-card p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/5 hover:bg-white/[0.06] hover:border-blue-500/30 transition-all group"
                                >
                                    <div className="mb-4 group-hover:scale-110 transition-transform">{cat.icon}</div>
                                    <h3 className="text-xl font-bold mb-4 text-white">{cat.title}</h3>
                                    <ul className="space-y-3">
                                        {cat.items.map((item, i) => (
                                            <li key={i} className="text-[13px] text-blue-100/40 flex items-start gap-2">
                                                <div className="mt-1.5 w-1 h-1 rounded-full bg-blue-500/50 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* UGP Section */}
                <section id="ugp" className="py-20 px-6">
                    <div className="container mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Unified Governance Platform (UGP)
                            </h2>
                            <p className="text-lg text-muted-foreground italic mb-4">
                                "A Single Source of Truth for Enterprise Integrity"
                            </p>
                            <p className="text-muted-foreground">
                                Our UGP provides a standardized framework to manage compliance, workflows, and analytics across large-scale government and enterprise programs.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {UGP_MODULES.map((module, idx) => (
                                <div
                                    key={idx}
                                    className="ugp-card group relative p-8 rounded-[2rem] bg-gradient-to-br from-indigo-500/5 to-transparent backdrop-blur-xl border border-white/5 hover:border-indigo-500/40 hover:bg-white/[0.05] transition-all overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        {module.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors">
                                        {module.title}
                                    </h3>
                                    <p className="text-blue-100/50 leading-relaxed text-sm font-light">
                                        {module.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Engagement Models */}
                <section className="py-20 px-6 bg-indigo-500/5">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Engagement Models</h2>
                            <p className="text-muted-foreground">Flexible ways to collaborate based on your organizational goals.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {ENGAGEMENT_MODELS.map((model, idx) => (
                                <div
                                    key={idx}
                                    className="engagement-card text-center p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.06] transition-all duration-500"
                                >
                                    <div className="flex justify-center mb-6">{model.icon}</div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{model.title}</h3>
                                    <p className="text-blue-100/60 text-sm leading-relaxed font-light">{model.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="py-24 px-6 relative overflow-hidden">
                    <div className="container mx-auto max-w-4xl bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[2rem] p-12 text-center relative z-10 shadow-2xl overflow-hidden group">
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, 0]
                            }}
                            transition={{ duration: 10, repeat: Infinity }}
                            className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"
                        />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to scale your digital operations?</h2>
                        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
                            Partner with ASBAE TECHNOLOGIES to transform your technical documentation and governance framework.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button
                                size="lg"
                                variant="default"
                                className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 rounded-full h-14"
                                onClick={() => window.location.href = '/#contact'}
                            >
                                Get a Free Consultation
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/30 text-white hover:bg-white/10 font-bold px-8 rounded-full h-14"
                                onClick={() => window.location.href = '/about'}
                            >
                                Learn About Us
                            </Button>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
