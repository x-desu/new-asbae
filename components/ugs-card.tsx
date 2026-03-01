"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useModal } from "@/components/modal-context";

interface UGS_CardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    gradient?: string;
}

// Service details mapping for modals
const serviceDetails: Record<string, {
    details: string[];
    color: string;
}> = {
    "Identity & Access Control": {
        details: [
            "Implement enterprise-grade security with role-based access control",
            "Enable single sign-on (SSO) for seamless user authentication",
            "Set up multi-factor authentication (MFA) for enhanced security",
            "Maintain comprehensive audit logs for compliance tracking"
        ],
        color: "blue"
    },
    "Workflow & Process Automation": {
        details: [
            "Digitize complex approval processes with customizable workflows",
            "Monitor SLA compliance with automated tracking and alerts",
            "Implement conditional routing based on business rules",
            "Integrate with existing enterprise systems seamlessly"
        ],
        color: "indigo"
    },
    "Reporting & Executive Analytics": {
        details: [
            "Access real-time performance intelligence dashboards",
            "Build custom reports tailored to your business needs",
            "Schedule automated report delivery to stakeholders",
            "Monitor KPIs with visual analytics and trend analysis"
        ],
        color: "sky"
    },
    "Communication & Notification": {
        details: [
            "Send automated email and SMS notifications",
            "Deploy in-app alerts for immediate user attention",
            "Manage bulk messaging campaigns efficiently",
            "Create event-driven communication workflows"
        ],
        color: "blue"
    },
    "Document & Records Management System": {
        details: [
            "Maintain version control for all documents",
            "Use metadata tagging for efficient organization",
            "Implement role-based access for document security",
            "Enable full-text search across document repository"
        ],
        color: "indigo"
    },
    "Compliance & Audit Management": {
        details: [
            "Create and manage compliance checklists",
            "Maintain comprehensive audit trails",
            "Generate regulatory reports automatically",
            "Track compliance status across departments"
        ],
        color: "emerald"
    },
    "Stakeholder & Grievance Management": {
        details: [
            "Track tickets with automated status updates",
            "Provide public portal for stakeholder access",
            "Implement automated routing based on issue type",
            "Monitor resolution times and satisfaction metrics"
        ],
        color: "blue"
    },
    "Inspection & Certification Management": {
        details: [
            "Conduct field inspections with mobile support",
            "Generate QR-based certificates instantly",
            "Track certificate validity periods automatically",
            "Manage certification renewals and alerts"
        ],
        color: "indigo"
    },
    "Project & Assets Monitoring": {
        details: [
            "Track project milestones and deliverables",
            "Optimize resource allocation across teams",
            "Maintain comprehensive asset registry",
            "Monitor asset utilization and maintenance schedules"
        ],
        color: "sky"
    },
    "Field Data Collection": {
        details: [
            "Capture geo-tagged data in real-time",
            "Work offline with automatic synchronization",
            "Create and deploy custom data collection forms",
            "Integrate with mapping and GIS systems"
        ],
        color: "blue"
    },
    "Executive Dashboard & GIS Mapping": {
        details: [
            "Create layered maps for comprehensive analysis",
            "Perform spatial analysis for informed decisions",
            "View live data feeds on interactive dashboards",
            "Customize dashboards for different executive roles"
        ],
        color: "sky"
    }
};

export default function UGS_Card({ title, description, icon, features }: UGS_CardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const { openModal } = useModal();

    const handleOpenModal = (e: React.MouseEvent) => {
        e.stopPropagation();
        const serviceInfo = serviceDetails[title] || { details: [], color: "blue" };
        openModal({
            title,
            description,
            icon,
            features,
            details: serviceInfo.details,
            color: serviceInfo.color
        });
    };

    const serviceInfo = serviceDetails[title] || { details: [], color: "blue" };

    return (
        <>
            <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleOpenModal}
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
        </>
    );
}
