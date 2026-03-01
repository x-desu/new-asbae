"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket, Building2, Landmark, ArrowRight } from "lucide-react";

const industries = [
    {
        title: "Startups",
        description: "Scale faster with standardized documentation and compliance frameworks designed for rapid growth.",
        icon: Rocket,
        gradient: "from-blue-600/20 to-blue-500/10",
        borderColor: "border-blue-500/20",
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-400",
    },
    {
        title: "IT Companies",
        description: "Streamline project delivery with governance-grade technical documentation and process mapping.",
        icon: Building2,
        gradient: "from-indigo-600/20 to-indigo-500/10",
        borderColor: "border-indigo-500/20",
        iconBg: "bg-indigo-500/10",
        iconColor: "text-indigo-400",
    },
    {
        title: "Government Contractors",
        description: "Meet stringent compliance and tender requirements with audit-ready documentation and security protocols.",
        icon: Landmark,
        gradient: "from-sky-600/20 to-sky-500/10",
        borderColor: "border-sky-500/20",
        iconBg: "bg-sky-500/10",
        iconColor: "text-sky-400",
    },
];

export default function IndustriesSection() {
    return (
        <section id="industries" className="py-24 relative overflow-hidden bg-background">
            {/* Background glow */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[200px] rounded-full" />
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        Industries We <span className="text-blue-400">Empower</span>
                    </motion.h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6" />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-blue-100/60"
                    >
                        Tailored IT and documentation solutions for organizations that demand precision, compliance, and excellence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
                    {industries.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className={`group relative p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${item.gradient} ${item.borderColor} border backdrop-blur-sm overflow-hidden cursor-pointer`}
                        >
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl ${item.iconBg} ${item.borderColor} border flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 ${item.iconColor}`}
                            >
                                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                            </motion.div>

                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 text-white group-hover:text-blue-300 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-blue-200/50 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                                {item.description}
                            </p>

                            <button className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-400 group/btn">
                                Learn More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
