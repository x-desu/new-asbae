"use client";
import React, { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Clock, CheckCircle2, ArrowRight, Briefcase, Code2, FileSearch, Layers, Shield, Users, Workflow, BarChart3, FileText, Settings, Zap, Database, Lock, MousePointer2 } from "lucide-react";
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

const UGS_SERVICES = [
    {
        title: "Identity & Access Control",
        subtitle: "Enterprise-grade security framework.",
        icon: <Shield className="w-6 h-6 text-blue-400" />,
        features: [
            "Role-Based Access Control (RBAC)",
            "Multi-Level User Hierarchy",
            "Single Sign-On (SSO)",
            "Multi-Factor Authentication",
            "Permission Matrix Management",
            "Complete Audit Logs"
        ],
        gradient: "from-blue-500/10 to-transparent"
    },
    {
        title: "Workflow & Process Automation",
        subtitle: "Digitize and control complex approval processes.",
        icon: <Workflow className="w-6 h-6 text-indigo-400" />,
        features: [
            "Configurable Multi-Level Workflows",
            "SLA & Escalation Matrix",
            "Conditional Logic Routing",
            "Task Assignment & Tracking",
            "BPMN-Based Flow Architecture",
            "File & Document Attachments"
        ],
        gradient: "from-indigo-500/10 to-transparent"
    },
    {
        title: "Reporting & Executive Analytics",
        subtitle: "Real-time performance intelligence.",
        icon: <BarChart3 className="w-6 h-6 text-sky-400" />,
        features: [
            "Executive Dashboards",
            "KPI Monitoring",
            "Drill-Down Reports",
            "Custom Report Builder",
            "Scheduled Report Delivery",
            "Data Export (Excel/PDF)"
        ],
        gradient: "from-sky-500/10 to-transparent"
    },
    {
        title: "Communication & Notification",
        subtitle: "Integrated event-driven communication layer.",
        icon: <Zap className="w-6 h-6 text-blue-400" />,
        features: [
            "Email Notifications",
            "SMS Alerts",
            "In-App Notifications",
            "Approval Alerts",
            "Bulk Messaging",
            "Reminder & Escalation Triggers"
        ],
        gradient: "from-blue-600/10 to-transparent"
    },
    {
        title: "Document & Records Management",
        subtitle: "Governance-focused digital document repository.",
        icon: <FileText className="w-6 h-6 text-indigo-400" />,
        features: [
            "Centralized Document Storage",
            "Version Control",
            "Metadata Tagging",
            "Role-Based Access",
            "Search & Indexing",
            "Document Approval Workflow"
        ],
        gradient: "from-indigo-600/10 to-transparent"
    },
    {
        title: "Compliance & Audit Management",
        subtitle: "Built-in governance protection layer.",
        icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
        features: [
            "Change Request (CR) Tracking",
            "Audit Logs",
            "Policy & SOP Repository",
            "Risk & Issue Register",
            "Approval History Tracking",
            "Compliance Checklist Framework"
        ],
        gradient: "from-emerald-500/10 to-transparent"
    },
    {
        title: "Project & Task Management",
        subtitle: "Structured execution management.",
        icon: <Briefcase className="w-6 h-6 text-blue-400" />,
        features: [
            "Project Lifecycle Tracking",
            "Milestone Monitoring",
            "Resource Allocation",
            "Time Tracking",
            "Gantt View",
            "Performance Monitoring"
        ],
        gradient: "from-blue-500/10 to-transparent"
    },
    {
        title: "Integration & API Gateway",
        subtitle: "Secure integration with external systems.",
        icon: <Settings className="w-6 h-6 text-indigo-400" />,
        features: [
            "REST API Integration",
            "ERP/CRM Integration",
            "Payment Gateway Integration",
            "Secure Data Exchange",
            "API Documentation Layer",
            "Encryption & Protection"
        ],
        gradient: "from-indigo-500/10 to-transparent"
    },
    {
        title: "Master Data & Metadata",
        subtitle: "Enterprise data governance module.",
        icon: <Database className="w-6 h-6 text-sky-400" />,
        features: [
            "Master Data Configuration",
            "Data Cataloging",
            "Dataset Indexing",
            "Data Validation Rules",
            "Controlled Update Mechanism",
            "Data Ownership Governance"
        ],
        gradient: "from-sky-500/10 to-transparent"
    }
];

const ENGAGEMENT_MODELS = [
    {
        title: "Project-Based",
        description: "Fixed-scope documentation or platform implementation for specific project milestones.",
        icon: <CheckCircle2 className="w-8 h-8 text-blue-500" />
    },
    {
        title: "Retainer (DaaS)",
        description: "Ongoing documentation support to work as an extension of your delivery team.",
        icon: <Clock className="w-8 h-8 text-indigo-500" />
    },
    {
        title: "Tender Support",
        description: "Specialized assistance for high-stakes government and enterprise bidding cycles.",
        icon: <Zap className="w-8 h-8 text-blue-400" />
    }
];

import ServicesHero from "@/components/services-hero";

export default function ServicesPage() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Sections entrance
        const anims = [
            { selector: ".ugs-card", y: 40 },
            { selector: ".daas-card", scale: 0.95 },
            { selector: ".engagement-card", y: 30 }
        ];

        anims.forEach(anim => {
            gsap.utils.toArray(anim.selector).forEach((card: any, i: number) => {
                gsap.fromTo(card,
                    {
                        opacity: 0,
                        ...(anim.y ? { y: anim.y } : {}),
                        ...(anim.scale ? { scale: anim.scale } : {})
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        delay: i * 0.1,
                        ease: "power3.out",
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
            <div className="fixed inset-0 z-0 pointer-events-none">
                <DarkVeil
                    hueShift={28}
                    noiseIntensity={0}
                    scanlineIntensity={0}
                    speed={0.4}
                    scanlineFrequency={0}
                    warpAmount={1}
                    resolutionScale={1}
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full">

                <ServicesHero />

                {/* UGS Section */}
                <section id="ugs-section" className="py-24 px-6 relative">
                    <div className="container mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
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
                            <p className="text-lg md:text-xl text-muted-foreground/80 font-light leading-relaxed">
                                Our Unified Governance Solutions provide a standardized framework to manage compliance, workflows, and analytics across large-scale programs.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {UGS_SERVICES.map((service, idx) => (
                                <div
                                    key={idx}
                                    className="ugs-card group relative p-8 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-xl border border-white/5 hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-500 flex flex-col h-full overflow-hidden"
                                >
                                    {/* Accent Glow */}
                                    <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${service.gradient} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="mb-6 p-4 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-blue-200/50 text-sm mb-8 italic">
                                            {service.subtitle}
                                        </p>

                                        <ul className="space-y-3 mb-8 flex-grow">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2 text-[13px] text-muted-foreground/60 transition-colors group-hover:text-muted-foreground/90">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <Button
                                            variant="ghost"
                                            className="w-fit p-0 h-auto text-blue-400/80 hover:text-blue-300 hover:bg-transparent flex items-center gap-2 group/btn"
                                        >
                                            <span className="text-xs font-semibold uppercase tracking-wider">Explore Capabilities</span>
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* DaaS Section */}
                <section id="daas" className="py-24 px-6 relative overflow-hidden bg-white/[0.01] border-y border-white/5">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-10">
                            <div className="max-w-2xl text-center lg:text-left">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                                    Documentation as a{" "}
                                    <span className="text-blue-500">Service (DaaS)</span>
                                </h2>
                                <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed italic">
                                    Governance-Grade Documentation for specialized IT & e-Governance entities.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {DaaS_CATEGORIES.map((cat, idx) => (
                                <div
                                    key={idx}
                                    className="daas-card p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 group hover:-translate-y-1"
                                >
                                    <div className="mb-6 group-hover:scale-110 transition-transform">{cat.icon}</div>
                                    <h3 className="text-xl font-bold mb-6 text-white">{cat.title}</h3>
                                    <ul className="space-y-4">
                                        {cat.items.map((item, i) => (
                                            <li key={i} className="text-sm text-muted-foreground/50 flex items-start gap-3">
                                                <div className="mt-1.5 w-1 h-1 rounded-full bg-blue-500/30 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Engagement Models */}
                <section className="py-24 px-6">
                    <div className="container mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-bold mb-4">Flexible Engagement</h2>
                            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
                            <p className="text-muted-foreground text-lg">Scalable collaboration models tailored to your delivery needs.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {ENGAGEMENT_MODELS.map((model, idx) => (
                                <div
                                    key={idx}
                                    className="engagement-card text-center p-10 rounded-[3rem] border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-xl hover:from-white/[0.1] transition-all duration-500 flex flex-col items-center"
                                >
                                    <div className="p-6 rounded-3xl bg-blue-900/10 border border-blue-500/20 mb-8">
                                        {model.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-white">{model.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed font-light">{model.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="py-32 px-6 relative overflow-hidden">
                    <div className="container mx-auto max-w-5xl">
                        <div className="relative p-12 md:p-20 rounded-[3rem] overflow-hidden text-center backdrop-blur-3xl border border-white/10">
                            <div className="absolute inset-0 bg-blue-600/5 z-0" />
                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
                                    Ready to Build with <span className="text-blue-500">Precision?</span>
                                </h2>
                                <p className="text-blue-100/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                                    Join the ranks of governance-grade institutions leveraging our Unified Governance Solutions.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <Button
                                        size="lg"
                                        className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 rounded-full h-16 text-lg shadow-[0_0_30px_-5px_rgba(59,130,246,0.6)] transition-all hover:scale-105 active:scale-95"
                                        onClick={() => window.location.href = '/contact'}
                                    >
                                        Start Your Project
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-white/20 text-white hover:bg-white/5 font-bold px-10 rounded-full h-16 text-lg backdrop-blur-sm transition-all hover:scale-105"
                                        onClick={() => window.location.href = '/about'}
                                    >
                                        How We Work
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
