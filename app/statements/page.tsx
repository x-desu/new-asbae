"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { FileText, Download, Eye, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import DarkVeil from "@/lib/Backgrounds/DarkVeil/DarkVeil";

interface PDFDocument {
  id: string;
  title: string;
  description: string;
  pages: number;
  filePath: string;
  filename: string;
}

const PDF_DOCUMENTS: PDFDocument[] = [
  {
    id: "company-profile",
    title: "Organizational Capability Statement",
    description: "Professional company profile and organizational capabilities document showcasing ASBAE's expertise, services, and business credentials.",
    pages: 4,
    filePath: "/pdfs/ASBAE_Company_Profile.pdf",
    filename: "ASBAE_Professional_Company_Profile.pdf",
  },
  {
    id: "technical-capability",
    title: "Technical Capability & Resource Mobilization Statement",
    description: "Comprehensive technical capability statement detailing software development, web portal development, GIS applications, MIS, functional analysis, PMO support, and IT project execution capabilities with resource mobilization details.",
    pages: 43,
    filePath: "/pdfs/ASBAE_Technical_Capability.pdf",
    filename: "ASBAE_Technical_Capability_With_Seal_Signature.pdf",
  },
];

export default function StatementsPage() {
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null);

  const handleDownload = (doc: PDFDocument) => {
    const link = document.createElement("a");
    link.href = doc.filePath;
    link.download = doc.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (doc: PDFDocument) => {
    setSelectedPDF(doc.id);
  };

  return (
    <main className="relative min-h-screen bg-transparent text-foreground overflow-x-hidden">
      <Header />

      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DarkVeil
          hueShift={28}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.4}
          scanlineFrequency={0}
          warpAmount={1}
          resolutionScale={1}
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="fixed inset-0 bg-black/40" style={{ zIndex: 1 }}></div>

      {/* Content Layer */}
      <div className="relative z-10 w-full">
        {/* Hero Section */}
        <section className="py-20 px-6 border-b border-white/10">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="text-sm font-medium text-blue-400">Statements & Registrations</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Our <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Capability Statements</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Access ASBAE&apos;s official organizational and technical capability statements. Download or review our comprehensive credentials and resource capabilities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* PDF Documents Grid */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PDF_DOCUMENTS.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
                >
                  {/* Card Header with Icon */}
                  <div className="p-6 border-b border-white/5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-1">{doc.title}</h3>
                          <p className="text-sm text-blue-400/80">{doc.pages} Pages</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {doc.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={() => handleView(doc)}
                        variant="outline"
                        className="flex-1 group/btn border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10"
                      >
                        <Eye className="w-4 h-4 mr-2 group-hover/btn:text-blue-400" />
                        View PDF
                      </Button>

                      <Button
                        onClick={() => handleDownload(doc)}
                        className="flex-1 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 hover:from-blue-700/90 hover:to-indigo-700/90 text-white group/btn"
                      >
                        <Download className="w-4 h-4 mr-2 group-hover/btn:-translate-y-1 transition-transform" />
                        Download
                      </Button>
                    </div>

                    {/* File Info */}
                    <div className="pt-4 border-t border-white/5 text-xs text-muted-foreground space-y-1">
                      <p>Filename: {doc.filename}</p>
                      <p>Format: PDF Document</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PDF Viewer Modal */}
        {selectedPDF && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-4xl max-h-[90vh] rounded-xl overflow-hidden border border-white/10 bg-slate-950 flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-900">
                <h2 className="text-lg font-semibold text-white">
                  {PDF_DOCUMENTS.find((d) => d.id === selectedPDF)?.title}
                </h2>
                <button
                  onClick={() => setSelectedPDF(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close PDF viewer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-auto bg-slate-950">
                <iframe
                  src={`${PDF_DOCUMENTS.find((d) => d.id === selectedPDF)?.filePath}#toolbar=1`}
                  title="PDF Viewer"
                  className="w-full h-full border-none"
                  style={{ minHeight: "500px" }}
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between p-4 border-t border-white/10 bg-slate-900">
                <p className="text-sm text-muted-foreground">
                  {PDF_DOCUMENTS.find((d) => d.id === selectedPDF)?.pages} pages
                </p>
                <div className="flex gap-3">
                  <Button
                    onClick={() => {
                      const doc = PDF_DOCUMENTS.find((d) => d.id === selectedPDF);
                      if (doc) handleDownload(doc);
                    }}
                    variant="outline"
                    className="border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    onClick={() => setSelectedPDF(null)}
                    variant="outline"
                    className="border-white/20 hover:border-white/40"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
