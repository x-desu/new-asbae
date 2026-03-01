"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface UGS_CardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    gradient?: string;
}

const springValues = {
    damping: 20,
    stiffness: 100,
    mass: 1.5,
};

export default function UGS_Card({ title, description, icon, features }: UGS_CardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // 3D Tilt Values
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);

    // Spotlight Positions
    const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate rotation
        const rotateXVal = ((e.clientY - centerY) / (rect.height / 2)) * -10;
        const rotateYVal = ((e.clientX - centerX) / (rect.width / 2)) * 10;

        rotateX.set(rotateXVal);
        rotateY.set(rotateYVal);

        // Update spotlight position
        setSpotlightPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        setOpacity(0.5);
        scale.set(1.02);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setOpacity(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                scale,
                transformStyle: "preserve-3d",
            }}
            className="group relative h-[450px] min-w-[320px] md:min-w-[400px] rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-blue-500/50 snap-center shrink-0"
        >
            {/* Spotlight Gradient */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300 pointer-events-none"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
                }}
            />

            {/* Content with Z-axis offset */}
            <div style={{ transform: "translateZ(30px)" }} className="relative z-10 flex h-full flex-col">
                <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-blue-500/10 p-4 text-blue-400">
                    {icon}
                </div>

                <h3 className="mb-3 text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-muted-foreground/80">
                    {description}
                </p>

                <div className="mt-auto">
                    <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-blue-500/60">
                        Key Features
                    </div>
                    <ul className="grid grid-cols-1 gap-2">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground/60">
                                <div className="h-1 w-1 rounded-full bg-blue-500/40" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Glassy Overlay for edge highlight */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-blue-500/20" />
        </motion.div>
    );
}
