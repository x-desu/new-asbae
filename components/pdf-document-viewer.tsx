"use client"

import { useCallback, useEffect, useState } from "react"
import { Download, ExternalLink, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type PdfDocumentViewerProps = {
  title: string
  description: string
  src: string
  pageCount: number
  className?: string
  viewerHeightClassName?: string
}

function PdfViewerSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6",
        className
      )}
      aria-hidden
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 shrink-0 animate-pulse rounded-lg bg-white/10" />
        <div className="flex flex-1 flex-col gap-2">
          <div className="h-4 w-2/5 animate-pulse rounded-md bg-white/10" />
          <div className="h-3 w-3/5 animate-pulse rounded-md bg-white/5" />
        </div>
      </div>
      <div className="flex-1 animate-pulse rounded-lg bg-gradient-to-b from-white/10 via-white/5 to-white/[0.02]" />
      <div className="flex gap-2">
        <div className="h-2 w-full animate-pulse rounded-full bg-white/10" />
        <div className="h-2 w-1/4 animate-pulse rounded-full bg-white/5" />
      </div>
    </div>
  )
}

export function PdfDocumentViewer({
  title,
  description,
  src,
  pageCount,
  className,
  viewerHeightClassName = "h-[72svh] min-h-[520px] md:h-[min(70vh,600px)] md:min-h-[400px]",
}: PdfDocumentViewerProps) {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoad = useCallback(() => {
    setIsLoading(false)
  }, [])

  useEffect(() => {
    setIsLoading(true)
    const fallback = window.setTimeout(() => setIsLoading(false), 8000)
    return () => window.clearTimeout(fallback)
  }, [src])

  return (
    <article
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.35)]",
        className
      )}
    >
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
            <FileText className="h-6 w-6 text-blue-400" aria-hidden />
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">{title}</h2>
              <Badge
                variant="outline"
                className="border-blue-500/30 bg-blue-500/10 text-blue-300"
              >
                {pageCount} pages
              </Badge>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 sm:shrink-0">
          <Button variant="outline" size="sm" asChild className="border-white/15 bg-white/5">
            <a href={src} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Open in new tab
            </a>
          </Button>
          <Button variant="secondary" size="sm" asChild>
            <a href={src} download>
              <Download className="h-4 w-4" />
              Download
            </a>
          </Button>
        </div>
      </div>

      <div className="mb-4 flex flex-col gap-2 rounded-xl border border-blue-500/20 bg-blue-500/10 p-3 text-sm text-blue-100/80 sm:hidden">
        <p>Mobile browsers can be picky with inline PDF previews. Use these controls if the preview does not render.</p>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm" asChild className="border-blue-400/30 bg-blue-500/10">
            <a href={src} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Open
            </a>
          </Button>
          <Button variant="secondary" size="sm" asChild>
            <a href={src} download>
              <Download className="h-4 w-4" />
              Download
            </a>
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-white/10 bg-neutral-950/80 shadow-inner",
          viewerHeightClassName
        )}
      >
        {isLoading && <PdfViewerSkeleton />}
        <object
          key={src}
          title={title}
          data={`${src}#toolbar=1&navpanes=0`}
          type="application/pdf"
          className={cn(
            "h-full w-full transition-opacity duration-500",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          onLoad={handleLoad}
        >
          <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
            <FileText className="h-10 w-10 text-blue-400" aria-hidden />
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-foreground">PDF preview unavailable</h3>
              <p className="max-w-sm text-sm text-muted-foreground">
                Your browser could not display this PDF inline. Open it in a new tab or download it instead.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Button variant="outline" size="sm" asChild className="border-white/15 bg-white/5">
                <a href={src} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Open in new tab
                </a>
              </Button>
              <Button variant="secondary" size="sm" asChild>
                <a href={src} download>
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </Button>
            </div>
          </div>
        </object>
      </div>
    </article>
  )
}
