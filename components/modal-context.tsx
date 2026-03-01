"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { X, ArrowRight, CheckCircle } from "lucide-react";
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
    setTimeout(() => setModalData(null), 200);
  }, []);

  const colorMap: Record<string, { bg: string }> = {
    blue: { bg: "bg-blue-600" },
    indigo: { bg: "bg-indigo-600" },
    emerald: { bg: "bg-emerald-600" },
    sky: { bg: "bg-sky-600" },
  };

  return (
    <ModalContext.Provider value={{ isOpen, modalData, openModal, closeModal }}>
      {children}
      
      {/* SINGLE GLOBAL MODAL - ONLY ONE CAN EVER BE OPEN */}
      {isOpen && modalData && (
        <div 
          className="fixed inset-0 z-[999999] flex items-center justify-center p-4"
          style={{ 
            backgroundColor: 'rgb(0, 0, 0)',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
          onClick={closeModal}
        >
          <div
            className="w-full max-w-sm rounded-xl"
            style={{ 
              backgroundColor: '#0f172a',
              border: '2px solid rgba(255,255,255,0.3)',
              maxHeight: '85vh',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`${colorMap[modalData.color]?.bg || 'bg-blue-600'} p-4 relative flex-shrink-0`}>
              {/* BIG CLOSE BUTTON */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 w-12 h-12 flex items-center justify-center rounded-full hover:bg-black/40 transition-colors"
                style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
              >
                <X className="w-7 h-7 text-white font-bold" strokeWidth={3} />
              </button>

              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
                <div className="text-white">
                  {modalData.icon}
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 pr-14">
                {modalData.title}
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                {modalData.description}
              </p>
            </div>

            {/* Scrollable Content */}
            <div className="p-4 space-y-4 overflow-y-auto flex-1" style={{ backgroundColor: '#0f172a' }}>
              <div>
                <h3 className="text-base font-bold text-white uppercase mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {modalData.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-base text-white/80">
                      <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {modalData.details.length > 0 && (
                <div>
                  <h3 className="text-base font-bold text-white uppercase mb-3">
                    Benefits
                  </h3>
                  <ul className="space-y-2">
                    {modalData.details.slice(0, 3).map((detail, index) => (
                      <li key={index} className="text-base text-white/70 pl-3 border-l-2 border-blue-500/50 font-medium">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Fixed Buttons */}
            <div className="p-4 flex flex-col gap-3 flex-shrink-0" style={{ backgroundColor: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg py-4 text-lg font-bold"
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
                className="w-full text-white hover:bg-white/5 rounded-lg py-4 text-lg font-bold border-2 border-white/30"
                onClick={() => {
                  closeModal();
                  window.location.href = '/services';
                }}
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
