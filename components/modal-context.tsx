"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModalData {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  details: string[];
  color: string;
}

interface ModalContextType {
  isOpen: boolean;
  modalData: ModalData | null;
  openModal: (data: ModalData) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  modalData: null,
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const openModal = useCallback((data: ModalData) => {
    setModalData(data);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setModalData(null), 300);
  }, []);

  const colorMap: Record<string, { gradient: string; border: string }> = {
    blue: { gradient: "from-blue-600 to-blue-500", border: "border-blue-400/30" },
    indigo: { gradient: "from-indigo-600 to-indigo-500", border: "border-indigo-400/30" },
    emerald: { gradient: "from-emerald-600 to-emerald-500", border: "border-emerald-400/30" },
    sky: { gradient: "from-sky-600 to-sky-500", border: "border-sky-400/30" },
  };

  const colors = modalData ? colorMap[modalData.color] || colorMap.blue : colorMap.blue;

  return (
    <ModalContext.Provider value={{ isOpen, modalData, openModal, closeModal }}>
      {children}
      
      <AnimatePresence>
        {isOpen && modalData && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999999] flex items-center justify-center p-4"
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(8px)',
            }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ 
                duration: 0.3, 
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="w-full max-w-md rounded-2xl overflow-hidden"
              style={{ 
                background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.98))',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px -5px rgba(59, 130, 246, 0.1)',
                maxHeight: '85vh',
                display: 'flex',
                flexDirection: 'column'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with gradient */}
              <div className={`relative p-5 sm:p-6 bg-gradient-to-br ${colors.gradient} flex-shrink-0`}>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent" />
                
                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                >
                  <X className="w-5 h-5 text-white" strokeWidth={2.5} />
                </motion.button>

                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/30"
                >
                  <div className="text-white w-8 h-8">
                    {modalData.icon}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-blue-200" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-100/70">
                      UGS Service
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 pr-12">
                    {modalData.title}
                  </h2>
                  <p className="text-sm sm:text-base text-blue-50/90 leading-relaxed">
                    {modalData.description}
                  </p>
                </motion.div>
              </div>

              {/* Scrollable Content */}
              <div className="p-5 sm:p-6 space-y-5 overflow-y-auto flex-1" style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)' }}>
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <h3 className="text-sm font-bold text-white uppercase mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    Key Features
                  </h3>
                  <ul className="space-y-2.5">
                    {modalData.features.slice(0, 4).map((feature, index) => (
                      <motion.li 
                        key={index} 
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.25 + index * 0.05, duration: 0.2 }}
                        className="flex items-start gap-3 text-sm text-blue-100/80"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {modalData.details.length > 0 && (
                  <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.35, duration: 0.3 }}
                  >
                    <h3 className="text-sm font-bold text-white uppercase mb-3">
                      Benefits
                    </h3>
                    <ul className="space-y-2.5">
                      {modalData.details.slice(0, 3).map((detail, index) => (
                        <motion.li 
                          key={index}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 + index * 0.05, duration: 0.2 }}
                          className="text-sm text-blue-100/60 pl-3 border-l-2 border-blue-500/40 font-medium"
                        >
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>

              {/* Fixed Buttons */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.3 }}
                className="p-5 sm:p-6 flex flex-col gap-3 flex-shrink-0"
                style={{ 
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 1), rgba(15, 23, 42, 0.95))',
                  borderTop: '1px solid rgba(59, 130, 246, 0.15)'
                }}
              >
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl py-4 text-base font-bold shadow-lg shadow-blue-500/25 transition-all duration-300"
                  onClick={() => {
                    closeModal();
                    window.location.href = '/contact';
                  }}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full text-blue-200 hover:text-white hover:bg-blue-500/10 rounded-xl py-4 text-base font-bold border-2 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
                  onClick={() => {
                    closeModal();
                    window.location.href = '/services';
                  }}
                >
                  View All Services
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
