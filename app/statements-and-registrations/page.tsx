"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileStack, Sparkles } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GradientText from "@/lib/TextAnimations/GradientText/GradientText"
import { PdfDocumentViewer } from "@/components/pdf-document-viewer"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const DOCUMENTS = [
  {
    id: "organizational",
    tabLabel: "Organizational",
    title: "Organizational capability statements",
    description:
      "Company profile and organizational capability overview for registrations, pre-qualification, and partner due diligence.",
    src: "/documents/organizational-capability-statements.pdf",
    pageCount: 4,
  },
  {
    id: "technical",
    tabLabel: "Technical",
    title: "Technical Capability & Resource Mobilization Statement",
    description:
      "Detailed technical capability, resource mobilization plan, and supporting documentation for tender and compliance submissions.",
    src: "/documents/technical-capability-resource-mobilization.pdf",
    pageCount: 43,
  },
] as const

type DocumentId = (typeof DOCUMENTS)[number]["id"]

export default function StatementsAndRegistrationsPage() {
  const [activeId, setActiveId] = useState<DocumentId>("organizational")
  const activeDocument = DOCUMENTS.find((doc) => doc.id === activeId) ?? DOCUMENTS[0]

  return (
    <main className="relative z-[2] min-h-screen text-white selection:bg-blue-500/30">
        <Header />

        <div className="pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
            >
              <Badge className="mb-5 border-blue-500/20 bg-blue-500/10 px-4 py-1 text-blue-300 backdrop-blur-md">
                <Sparkles className="mr-2 h-4 w-4" />
                Official documentation
              </Badge>

              <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-foreground">Statements and </span>
                <GradientText
                  colors={["#3b82f6", "#6366f1", "#60a5fa", "#6366f1", "#3b82f6"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-4xl font-bold sm:text-5xl lg:text-6xl"
                >
                  Registrations
                </GradientText>
              </h1>

              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Access ASBAE capability statements and technical documentation. Select a document
                below to preview inline or open it in a new tab.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mx-auto max-w-5xl"
            >
              <div
                role="tablist"
                aria-label="Capability documents"
                className="mb-6 flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-2 px-2 py-1 text-sm text-muted-foreground">
                  <FileStack className="h-4 w-4 text-blue-400" aria-hidden />
                  <span>Select document</span>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-1">
                  {DOCUMENTS.map((doc) => {
                    const isActive = doc.id === activeId
                    return (
                      <button
                        key={doc.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`panel-${doc.id}`}
                        id={`tab-${doc.id}`}
                        onClick={() => setActiveId(doc.id)}
                        className={cn(
                          "rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-all duration-300 sm:text-center",
                          isActive
                            ? "bg-blue-500/20 text-blue-200 shadow-[0_0_24px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/30"
                            : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                        )}
                      >
                        <span className="block font-semibold">{doc.tabLabel}</span>
                        <span className="mt-0.5 block text-xs opacity-80">{doc.pageCount} pages</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div
                role="tabpanel"
                id={`panel-${activeDocument.id}`}
                aria-labelledby={`tab-${activeDocument.id}`}
              >
                <PdfDocumentViewer
                  key={activeDocument.src}
                  title={activeDocument.title}
                  description={activeDocument.description}
                  src={activeDocument.src}
                  pageCount={activeDocument.pageCount}
                />
              </div>

              <p className="mt-6 text-center text-xs text-muted-foreground/80">
                If the preview does not load in your browser, use Open in new tab or Download.
              </p>
            </motion.div>
          </div>
        </div>

        <Footer />
    </main>
  )
}
