"use client";

import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle, Shield, FileText, Zap, Database, Cloud, Server, Cpu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  details?: string[];
  color?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="w-6 h-6" />,
  fileText: <FileText className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  database: <Database className="w-6 h-6" />,
  cloud: <Cloud className="w-6 h-6" />,
  server: <Server className="w-6 h-6" />,
  cpu: <Cpu className="w-6 h-6" />,
  globe: <Globe className="w-6 h-6" />,
};

export default function ServiceModal({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  icon,
  features,
  details = [],
  color = "blue"
}: ServiceModalProps) {
  
  // Handle escape key
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscape]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const colorClasses = {
    blue: "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400",
    indigo: "from-indigo-500/20 to-indigo-600/10 border-indigo-500/30 text-indigo-400",
    emerald: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-400",
    sky: "from-sky-500/20 to-sky-600/10 border-sky-500/30 text-sky-400",
  };

  const selectedColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-lg sm:max-w-xl bg-slate-900/95 border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient */}
            <div className={`relative p-6 sm:p-8 bg-gradient-to-br ${selectedColor} border-b border-white/10`}>
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4">
                <div className={selectedColor.split(" ").pop()}>
                  {icon}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 pr-8">
                {title}
              </h2>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Key Features */}
              <div>
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {features.map((feature, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-2 text-sm text-white/70 p-2 rounded-lg bg-white/5"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Details */}
              {details.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">
                    What We Offer
                  </h3>
                  <ul className="space-y-2">
                    {details.map((detail, index) => (
                      <li 
                        key={index}
                        className="text-sm text-white/60 leading-relaxed pl-4 border-l-2 border-white/10"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                <Button
                  className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-5 sm:py-6 text-sm sm:text-base font-semibold transition-all duration-300 group"
                  onClick={() => {
                    onClose();
                    window.location.href = '/contact';
                  }}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full sm:flex-1 border-white/20 text-white hover:bg-white/5 rounded-xl py-5 sm:py-6 text-sm sm:text-base font-semibold transition-all duration-300"
                  onClick={() => {
                    onClose();
                    window.location.href = '/services';
                  }}
                >
                  View All Services
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
