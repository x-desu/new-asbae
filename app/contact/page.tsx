"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import DarkVeil from "@/lib/Backgrounds/DarkVeil/DarkVeil"
import ContactForm from "@/components/contact-form"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CheckCircle2, FileText, ShieldCheck, Zap } from "lucide-react"

export default function ContactPage() {
    const serviceHighlights = [
        {
            icon: FileText,
            title: "DaaS Model",
            description: "Documentation as a Service — enterprise-grade docs without the overhead.",
        },
        {
            icon: ShieldCheck,
            title: "Governance Ready",
            description: "Compliance-aligned technical documentation for e-Governance projects.",
        },
        {
            icon: Zap,
            title: "Tender Aligned",
            description: "RFP and tender documentation crafted for high-stakes government contracts.",
        },
    ]

    return (
        <main className="min-h-screen relative text-white selection:bg-blue-500/30">
            {/* DarkVeil Background - fixed full-screen */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                }}
            >
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

            {/* Content layer */}
            <div className="relative" style={{ zIndex: 2 }}>
                <Header />
                <div className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                            {/* Left side: Elaborated Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-8"
                            >
                                <div className="space-y-4">
                                    <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 backdrop-blur-md px-4 py-1">
                                        Connect With ASBAE
                                    </Badge>
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                                        Let&apos;s Build the Future of <span className="text-blue-500">IT Governance.</span>
                                    </h1>
                                    <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-xl">
                                        Whether you need a full Documentation as a Service (DaaS) integration or targeted support for a high-value tender, our team is ready to scale with you.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-1 gap-6">
                                    {serviceHighlights.map((item, index) => (
                                        <div key={index} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/[0.08] transition-all">
                                            <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors h-fit">
                                                <item.icon className="w-6 h-6 text-blue-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-8 rounded-3xl bg-blue-600/10 border border-blue-500/20 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <CheckCircle2 className="w-24 h-24" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-2">Why ASBAE?</h4>
                                    <ul className="space-y-3">
                                        {["Audit-ready technical documentation", "Process flow (BPMN) visualization", "UAT-led functional requirements", "Strict SLA-based delivery"].map((point, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-blue-200/80">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Right side: Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full z-0 opacity-50" />
                                <div className="relative z-10 neomorphic rounded-[2.5rem] p-8 lg:p-12 bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold mb-2">Project Inquiry</h2>
                                        <p className="text-muted-foreground">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                                    </div>
                                    <ContactForm />
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </main>
    )
}
