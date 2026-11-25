"use client"

import { useId, useRef, useState, type KeyboardEvent } from "react"
import { PdfDocumentViewer, type PdfDocumentViewerProps } from "@/components/pdf-document-viewer"

type DocumentEntry = Pick<PdfDocumentViewerProps, "title" | "description" | "src" | "pageCount"> & {
  id: string
  tabLabel: string
}

export function DocumentTabs({
  documents,
  label,
}: {
  documents: readonly [DocumentEntry, ...DocumentEntry[]]
  label: string
}) {
  const groupId = useId()
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % documents.length
        break
      case "ArrowLeft":
        nextIndex = (index + documents.length - 1) % documents.length
        break
      case "Home":
        nextIndex = 0
        break
      case "End":
        nextIndex = documents.length - 1
        break
      default:
        return
    }

    event.preventDefault()
    setActiveIndex(nextIndex)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <>
      <div className="inner-document-tabs" role="tablist" aria-label={label}>
        {documents.map((document, index) => (
          <button
            key={document.id}
            ref={(element) => { tabRefs.current[index] = element }}
            type="button"
            role="tab"
            id={`${groupId}-tab-${document.id}`}
            aria-selected={activeIndex === index}
            aria-controls={`${groupId}-panel-${document.id}`}
            tabIndex={activeIndex === index ? 0 : -1}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onClick={() => setActiveIndex(index)}
          >
            <strong>{document.tabLabel}</strong>
            <span>{document.pageCount} pages</span>
          </button>
        ))}
      </div>
      {documents.map((document, index) => (
        <div
          key={document.id}
          role="tabpanel"
          id={`${groupId}-panel-${document.id}`}
          aria-labelledby={`${groupId}-tab-${document.id}`}
          className="inner-document-panel"
          hidden={activeIndex !== index}
        >
          {activeIndex === index && (
            <PdfDocumentViewer
              title={document.title}
              description={document.description}
              src={document.src}
              pageCount={document.pageCount}
              className="border-0 bg-transparent shadow-none"
            />
          )}
        </div>
      ))}
    </>
  )
}
