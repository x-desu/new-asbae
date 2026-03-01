"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Activity } from "lucide-react";

const values = [
    {
        title: "Compliance-Ready",
        description: "Tender-aligned and audit-proof documentation that meets internal and external governance standards.",
        icon: ShieldCheck,
        gradient: "from-blue-600/20 to-blue-500/10",
        borderColor: "border-blue-500/20",
    },
    {
        title: "Scale with Ease",
        description: "Deploy documentation experts on-demand. Scale your project throughput without increasing full-time headcount.",
        icon: Zap,
        gradient: "from-indigo-600/20 to-indigo-500/10",
        borderColor: "border-indigo-500/20",
    },
    {
        title: "Governance Grade",
        description: "Structured, high-fidelity outputs that ensure project clarity, control, and long-term maintainability.",
        icon: Activity,
        gradient: "from-sky-600/20 to-sky-500/10",
        borderColor: "border-sky-500/20",
    },
];

export default function ValuesSection() {
    return (
        <section id="values" className="py-24 bg-background relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                                Our <span className="text-blue-400">Core Values</span> Drive Your Success
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                        </motion.div>
                        
                        <p className="text-lg text-blue-100/60 leading-relaxed">
                            We bridge the gap between technical complexity and organizational clarity. Our model ensures that every deliverable is not just a document, but a strategic asset.
                        </p>
                        
                        <div className="space-y-3">
                            {["Structured Methodology", "Audit-Ready Outputs", "Expert-Led Delivery"].map((item, idx) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                                    whileHover={{ x: 4 }}
                                    className="flex items-center gap-3 text-blue-100/80 font-medium cursor-default"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                                    </div>
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-4">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${value.gradient} border ${value.borderColor} backdrop-blur-sm overflow-hidden cursor-pointer`}
                            >
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                <div className="relative z-10 flex items-start gap-4">
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className="p-3 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-400"
                                    >
                                        <value.icon className="w-6 h-6" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">{value.title}</h3>
                                        <p className="text-blue-200/50 text-sm leading-relaxed">
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
