"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket, Building2, Landmark, ArrowRight } from "lucide-react";

const industries = [
    {
        title: "Startups",
        description: "Scale faster with standardized documentation and compliance frameworks designed for rapid growth.",
        icon: Rocket,
        color: "from-blue-500/20 to-cyan-500/20",
        borderColor: "border-blue-500/30",
        iconColor: "text-blue-400",
    },
    {
        title: "IT Companies",
        description: "Streamline project delivery with governance-grade technical documentation and process mapping.",
        icon: Building2,
        color: "from-indigo-500/20 to-purple-500/20",
        borderColor: "border-indigo-500/30",
        iconColor: "text-indigo-400",
    },
    {
        title: "Government Contractors",
        description: "Meet stringent compliance and tender requirements with audit-ready documentation and security protocols.",
        icon: Landmark,
        color: "from-emerald-500/20 to-teal-500/20",
        borderColor: "border-emerald-500/30",
        iconColor: "text-emerald-400",
    },
];

export default function IndustriesSection() {
    return (
        <section id="industries" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        Industries We <span className="text-blue-500">Empower</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        Tailored IT and documentation solutions for organizations that demand precision, compliance, and excellence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {industries.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`relative group p-8 rounded-3xl border ${item.borderColor} bg-gradient-to-br ${item.color} backdrop-blur-xl transition-all duration-500 overflow-hidden`}
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                <item.icon size={120} />
                            </div>

                            <div className={`p-4 rounded-2xl bg-background/50 border ${item.borderColor} inline-flex mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-blue-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {item.description}
                            </p>

                            <button className="flex items-center gap-2 text-sm font-semibold text-blue-400 group/btn">
                                Learn More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
