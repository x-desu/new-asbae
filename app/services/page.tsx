"use client";
import React, { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import {
    Clock,
    CheckCircle2,
    ArrowRight,
    Briefcase,
    Code2,
    FileSearch,
    Smartphone,
    Globe,
    Map,
    Zap,
    Workflow,
    BarChart3,
    FileText,
    Users,
    Shield,
    Lock,
    Database,
    Settings,
    MousePointer2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import GradientText from "@/lib/TextAnimations/GradientText/GradientText";
import DarkVeil from "@/lib/Backgrounds/DarkVeil/DarkVeil";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import UGS_Card from "@/components/ugs-card";

const UGS_SERVICES = [
    {
        title: "Identity & Access Control",
        description: "Enterprise-grade security framework with Role-Based Access Control and Single Sign-On.",
        icon: <Shield className="w-8 h-8 text-blue-400" />,
        features: ["Role-Based Access Control", "Single Sign-On", "Multi-Factor Authentication", "Audit Logs"],
        gradient: "from-blue-500/20 to-transparent"
    },
    {
        title: "Workflow & Process Automation",
        description: "Digitize and control complex approval processes.",
        icon: <Workflow className="w-8 h-8 text-indigo-400" />,
        features: ["Multi-Level Workflows", "SLA Monitoring", "Conditional Routing"],
        gradient: "from-indigo-500/20 to-transparent"
    },
    {
        title: "Reporting & Executive Analytics",
        description: "Real-time performance intelligence and dashboards.",
        icon: <BarChart3 className="w-8 h-8 text-sky-400" />,
        features: ["KPI Monitoring", "Custom Report Builder", "Scheduled Delivery"],
        gradient: "from-sky-500/20 to-transparent"
    },
    {
        title: "Communication & Notification",
        description: "Integrated event-driven communication layer.",
        icon: <Zap className="w-8 h-8 text-blue-400" />,
        features: ["Email & SMS", "In-App Alerts", "Bulk Messaging"],
        gradient: "from-blue-600/20 to-transparent"
    },
    {
        title: "Document & Records Management System",
        description: "Governance-focused digital document repository.",
        icon: <FileText className="w-8 h-8 text-indigo-400" />,
        features: ["Version Control", "Metadata Tagging", "Role-Based Access"],
        gradient: "from-indigo-600/20 to-transparent"
    },
    {
        title: "Compliance & Audit Management",
        description: "Standardize and enforce regulatory requirements and audit trails.",
        icon: <Shield className="w-8 h-8 text-emerald-400" />,
        features: ["Compliance Checklists", "Audit Trails", "Regulatory Reporting"],
        gradient: "from-emerald-500/20 to-transparent"
    },
    {
        title: "Stakeholder & Grievance Management",
        description: "Centralized platform for managing stakeholder interactions and issues.",
        icon: <Users className="w-8 h-8 text-blue-400" />,
        features: ["Ticket Tracking", "Public Portal", "Automated Routing"],
        gradient: "from-blue-500/20 to-transparent"
    },
    {
        title: "Inspection & Certification Management",
        description: "Automated inspection workflows and digital certification delivery.",
        icon: <CheckCircle2 className="w-8 h-8 text-indigo-400" />,
        features: ["Field Inspections", "QR Certificates", "Validity Tracking"],
        gradient: "from-indigo-500/20 to-transparent"
    },
    {
        title: "Project & Assets Monitoring",
        description: "Real-time tracking of project health and asset utilization.",
        icon: <Briefcase className="w-8 h-8 text-sky-400" />,
        features: ["Milestone Tracking", "Resource Allocation", "Asset Registry"],
        gradient: "from-sky-500/20 to-transparent"
    },
    {
        title: "Field Data Collection",
        description: "Mobile-first application for offline/online field activities.",
        icon: <Smartphone className="w-8 h-8 text-blue-400" />,
        features: ["Geo-Tagging", "Offline Sync", "Custom Forms"],
        gradient: "from-blue-500/20 to-transparent"
    },
    {
        title: "Executive Dashboard & GIS Mapping",
        description: "Geospatial intelligence for decision-makers.",
        icon: <Map className="w-8 h-8 text-sky-400" />,
        features: ["Layered Mapping", "Spatial Analysis", "Live Data Feeds"],
        gradient: "from-sky-600/20 to-transparent"
    }
];
const ENGAGEMENT_MODELS = [
    {
        title: "Project-Based",
        description: "Fixed-scope documentation or platform implementation for specific project milestones.",
        icon: <CheckCircle2 className="w-8 h-8 text-blue-500" />
    },
    {
        title: "Retainer (Documentation Service)",
        description: "Ongoing documentation support to work as an extension of your delivery team.",
        icon: <Clock className="w-8 h-8 text-indigo-500" />
    },
    {
        title: "Tender Support",
        description: "Specialized assistance for high-stakes government and enterprise bidding cycles.",
        icon: <Zap className="w-8 h-8 text-blue-400" />
    }
];

const DOCUMENTATION_CATEGORIES = [
    {
        title: "Business Documentation",
        icon: <Briefcase className="w-8 h-8 text-blue-400" />,
        items: ["Business Requirement Documents", "Functional Requirement Documents", "Software Requirement Specifications", "Use Cases & User Stories", "Process Flow (BPMN)", "Gap Analysis Documents"]
    },
    {
        title: "Technical Documentation",
        icon: <Code2 className="w-8 h-8 text-indigo-400" />,
        items: ["System Architecture", "API Specifications", "Database Design", "High & Low Level Design"]
    },
    {
        title: "Tender & Bid Support",
        icon: <FileSearch className="w-8 h-8 text-sky-400" />,
        items: ["RFP Response Prep", "Bill of Quantities", "Technical Presentations", "Compliance Matrix"]
    },
    {
        title: "Governance & SOPs",
        icon: <Shield className="w-8 h-8 text-emerald-400" />,
        items: ["Manual of Procedures", "User Training Guides", "Change Management", "Policy Frameworks"]
    }
];

import ServicesHero from "@/components/services-hero";

export default function ServicesPage() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Sections entrance
        const anims = [
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
        <main className="relative min-h-screen bg-transparent text-foreground overflow-x-hidden">
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
            {/* Dark overlay for text readability */}
            <div className="fixed inset-0 bg-black/40" style={{ zIndex: 1 }}></div>

            {/* Content Layer */}
            <div className="relative z-10 w-full">

                <ServicesHero />

                {/* UGS Section with Modern Grid */}
                <section id="ugs-section" className="py-24 px-6 relative bg-gradient-to-br from-slate-900/50 via-blue-900/20 to-slate-900/50 overflow-hidden">
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute top-20 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
                        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-sky-500/10 rounded-full blur-2xl animate-pulse delay-2000" />
                    </div>
                    
                    <div className="container mx-auto">
                        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in px-4">
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tighter">
                                Unified Governance{" "}
                                <GradientText
                                    colors={["#3b82f6", "#6366f1", "#60a5fa", "#6366f1", "#3b82f6"]}
                                    animationSpeed={8}
                                    showBorder={false}
                                    className="inline-block"
                                >
                                    Solutions
                                </GradientText>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-2xl mx-auto">
                                Our Unified Governance Solutions provide enterprise-grade compliance, workflow automation, and real-time analytics for modern organizations.
                            </p>
                        </div>
                        
                        {/* UGS Services Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                            {UGS_SERVICES.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.4, 
                                        delay: index * 0.05,
                                        ease: [0.25, 0.1, 0.25, 1]
                                    }}
                                    viewport={{ once: true, amount: 0.3, margin: "-50px" }}
                                    style={{ willChange: "opacity, transform" }}
                                >
                                    <UGS_Card
                                        title={service.title}
                                        description={service.description}
                                        icon={service.icon}
                                        features={service.features}
                                        gradient={service.gradient}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Documentation Service Section */}
                <section id="documentation-service" className="py-24 px-6 relative overflow-hidden bg-white/[0.01] border-y border-white/5">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-10">
                            <div className="max-w-2xl text-center lg:text-left">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                                    Documentation{" "}
                                    <span className="text-blue-500">Service</span>
                                </h2>
                                <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed italic">
                                    Governance-Grade Documentation for specialized IT & e-Governance entities.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {DOCUMENTATION_CATEGORIES.map((cat, idx) => (
                                <div
                                    key={idx}
                                    className="documentation-card p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 group hover:-translate-y-1"
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
                </section >

                {/* Engagement Models */}
                < section className="py-24 px-6" >
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
                </section >

                {/* Contact CTA */}
                < section className="py-32 px-6 relative overflow-hidden" >
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
                </section >

            </div >
            <Footer />
        </main >
    );
}
