"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

interface UGS_CardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    gradient?: string;
}

export default function UGS_Card({ title, description, icon, features }: UGS_CardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
                relative 
                w-full 
                h-full 
                min-h-[340px] 
                sm:min-h-[360px] 
                md:min-h-[320px]
                rounded-xl 
                border 
                ${isHovered ? 'border-blue-500/40' : 'border-white/10'} 
                bg-white/[0.03] 
                backdrop-blur-sm
                p-5 
                sm:p-6
                transition-all 
                duration-300 
                ${isHovered ? 'shadow-lg shadow-blue-500/10' : ''}
                cursor-pointer
                group
            `}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
        >
            {/* Subtle gradient overlay */}
            <div className={`
                absolute 
                inset-0 
                rounded-xl 
                bg-gradient-to-br 
                from-blue-500/5 
                via-transparent 
                to-indigo-500/5 
                opacity-0 
                group-hover:opacity-100 
                transition-opacity 
                duration-300 
                pointer-events-none
            `} />

            {/* Content container */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Icon section */}
                <div className="flex items-start justify-between mb-4">
                    <div className={`
                        w-10 
                        h-10 
                        sm:w-12 
                        sm:h-12 
                        rounded-lg 
                        bg-blue-500/10 
                        border 
                        ${isHovered ? 'border-blue-500/30' : 'border-white/10'} 
                        flex 
                        items-center 
                        justify-center 
                        transition-colors 
                        duration-300
                    `}>
                        <div className="text-blue-400">
                            {icon}
                        </div>
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                        animate={{ x: isHovered ? 4 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ArrowRight className={`
                            w-5 
                            h-5 
                            ${isHovered ? 'text-blue-400' : 'text-white/30'} 
                            transition-colors 
                            duration-300
                        `} />
                    </motion.div>
                </div>

                {/* Title */}
                <h3 className={`
                    text-lg 
                    sm:text-xl 
                    font-semibold 
                    text-white 
                    mb-2 
                    ${isHovered ? 'text-blue-300' : ''} 
                    transition-colors 
                    duration-300
                    line-clamp-2
                `}>
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/60 mb-4 line-clamp-2 flex-grow">
                    {description}
                </p>

                {/* Features section */}
                <div className="space-y-2">
                    <p className="text-xs font-medium text-white/40 uppercase tracking-wider">
                        Features
                    </p>
                    <ul className="space-y-1.5">
                        {features.slice(0, 3).map((feature, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2 text-sm text-white/70"
                            >
                                <CheckCircle className="w-3.5 h-3.5 text-blue-500/60 flex-shrink-0" />
                                <span className="truncate">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Action button */}
                <div className="mt-4 pt-4 border-t border-white/10">
                    <button
                        className={`
                            w-full 
                            py-2.5 
                            px-4 
                            rounded-lg 
                            text-sm 
                            font-medium 
                            transition-all 
                            duration-300 
                            ${isHovered 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-white/5 text-white/70 hover:bg-white/10'
                            }
                        `}
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
