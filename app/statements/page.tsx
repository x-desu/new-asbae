"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { FileText, Download, Eye, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
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
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-blue-500/10 backdrop-blur-sm text-blue-300 text-xs font-medium border border-blue-500/20">
                <span>Statements & Registrations</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Capability Statements
              </h1>

              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Access ASBAE&apos;s official organizational and technical capability statements. Download or review our comprehensive credentials.
              </p>
            </motion.div>
          </div>
        </section>

        {/* PDF Documents Grid */}
        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PDF_DOCUMENTS.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="flex flex-col h-full">
                    <CardHeader className="border-b pb-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 flex-shrink-0">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-base md:text-lg line-clamp-2">{doc.title}</CardTitle>
                          <CardDescription className="text-xs mt-1">{doc.pages} Pages</CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1 py-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {doc.description}
                      </p>
                    </CardContent>

                    <CardFooter className="flex flex-col sm:flex-row gap-2 border-t pt-4">
                      <Button
                        onClick={() => handleView(doc)}
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs md:text-sm"
                      >
                        <Eye className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5" />
                        View PDF
                      </Button>

                      <Button
                        onClick={() => handleDownload(doc)}
                        size="sm"
                        className="flex-1 text-xs md:text-sm"
                      >
                        <Download className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PDF Viewer Modal */}
        {selectedPDF && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-4xl bg-slate-950 rounded-xl overflow-hidden border border-white/10 my-4 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-900 flex-shrink-0">
                <h2 className="text-base md:text-lg font-semibold text-white truncate pr-4">
                  {PDF_DOCUMENTS.find((d) => d.id === selectedPDF)?.title}
                </h2>
                <button
                  onClick={() => setSelectedPDF(null)}
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                  aria-label="Close PDF viewer"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              {/* PDF Viewer - Properly Contained */}
              <div className="flex-1 overflow-auto bg-slate-950 min-h-0">
                <iframe
                  src={`${PDF_DOCUMENTS.find((d) => d.id === selectedPDF)?.filePath}#toolbar=1`}
                  title="PDF Viewer"
                  className="w-full h-full border-none"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 border-t border-white/10 bg-slate-900 flex-shrink-0">
                <p className="text-xs md:text-sm text-muted-foreground">
                  {PDF_DOCUMENTS.find((d) => d.id === selectedPDF)?.pages} pages
                </p>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Button
                    onClick={() => {
                      const doc = PDF_DOCUMENTS.find((d) => d.id === selectedPDF);
                      if (doc) handleDownload(doc);
                    }}
                    variant="outline"
                    size="sm"
                    className="flex-1 sm:flex-none text-xs md:text-sm"
                  >
                    <Download className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5" />
                    Download
                  </Button>
                  <Button
                    onClick={() => setSelectedPDF(null)}
                    variant="outline"
                    size="sm"
                    className="flex-1 sm:flex-none text-xs md:text-sm"
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
