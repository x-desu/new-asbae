"use client"
import { useState } from "react"
import InnerPage from "@/components/inner-page"
import { PdfDocumentViewer } from "@/components/pdf-document-viewer"
import { COMPANY } from "@/lib/company"
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
  {
    id: "past-experience",
    tabLabel: "Past Experience",
    title: "Past Experience and Delivery Capacity Statement",
    description:
      "Past experience, delivery capability, and execution readiness statement for partner, tender, and compliance reviews.",
    src: "/documents/past-experience-delivery-capacity-statement.pdf",
    pageCount: 8,
  },
] as const

type DocumentId = (typeof DOCUMENTS)[number]["id"]

export default function StatementsAndRegistrationsPage() {
 const [activeId,setActiveId]=useState<DocumentId>("organizational")
 const activeDocument=DOCUMENTS.find(doc=>doc.id===activeId)??DOCUMENTS[0]
 return <InnerPage eyebrow="OFFICIAL DOCUMENTATION" title="Statements & registrations." description="Company registration details, organizational capability, and technical documentation for partner and project reviews.">
 <section className="inner-container inner-section"><div className="inner-registration"><div><span className="saas-eyebrow">COMPANY REGISTRATION</span><h2>{COMPANY.legalName}</h2><p>Incorporated under the Limited Liability Partnership Act, 2008. Certificate issued by the Ministry of Corporate Affairs, Government of India.</p></div><dl><div><dt>LLP Identification Number</dt><dd>{COMPANY.llpin}</dd></div><div><dt>Date of incorporation</dt><dd>{COMPANY.incorporationDateLabel}</dd></div><div><dt>Registered address</dt><dd>{COMPANY.registeredAddress}</dd></div></dl></div></section>
 <section className="inner-container inner-section inner-documents"><div className="inner-section-heading"><span className="saas-eyebrow">CAPABILITY DOCUMENTS</span><h2>The detail behind our delivery.</h2></div><div className="inner-document-tabs" role="tablist" aria-label="Capability documents">{DOCUMENTS.map(doc=><button key={doc.id} role="tab" id={`tab-${doc.id}`} aria-selected={activeId===doc.id} tabIndex={activeId===doc.id?0:-1} onKeyDown={event=>{
 const index=DOCUMENTS.findIndex(item=>item.id===doc.id)
 const next=event.key==="ArrowRight"?(index+1)%DOCUMENTS.length:event.key==="ArrowLeft"?(index+DOCUMENTS.length-1)%DOCUMENTS.length:event.key==="Home"?0:event.key==="End"?DOCUMENTS.length-1:-1
 if(next<0)return
 event.preventDefault()
 setActiveId(DOCUMENTS[next].id)
 document.getElementById(`tab-${DOCUMENTS[next].id}`)?.focus()
 }} aria-controls={`panel-${doc.id}`} onClick={()=>setActiveId(doc.id)}><strong>{doc.tabLabel}</strong><span>{doc.pageCount} pages</span></button>)}</div><div role="tabpanel" id={`panel-${activeDocument.id}`} aria-labelledby={`tab-${activeDocument.id}`} className="inner-document-panel"><PdfDocumentViewer title={activeDocument.title} description={activeDocument.description} src={activeDocument.src} pageCount={activeDocument.pageCount} className="border-0 bg-transparent shadow-none"/></div></section>
 </InnerPage>
}
