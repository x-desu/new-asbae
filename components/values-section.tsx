"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Activity } from "lucide-react";

const values = [
    {
        title: "Compliance-Ready",
        description: "Tender-aligned and audit-proof documentation that meets internal and external governance standards.",
        icon: ShieldCheck,
    },
    {
        title: "Scale with Ease",
        description: "Deploy documentation experts on-demand. Scale your project throughput without increasing full-time headcount.",
        icon: Zap,
    },
    {
        title: "Governance Grade",
        description: "Structured, high-fidelity outputs that ensure project clarity, control, and long-term maintainability.",
        icon: Activity,
    },
];

export default function ValuesSection() {
    return (
        <section id="values" className="py-24 bg-background relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            Our <span className="text-blue-500">Core Values</span> Drive Your Success
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We bridge the gap between technical complexity and organizational clarity. Our model ensures that every deliverable is not just a document, but a strategic asset.
                        </p>
                        <ul className="space-y-4">
                            {["Structured Methodology", "Audit-Ready Outputs", "Expert-Led Delivery"].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-foreground font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                        <value.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
