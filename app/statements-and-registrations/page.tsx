import Link from "next/link"
import { DocumentTabs } from "@/components/document-tabs"
import InnerPage from "@/components/inner-page"
import { AI_SERVICE_DOCUMENTS } from "@/lib/ai-service-documents"
import { COMPANY } from "@/lib/company"

const CAPABILITY_DOCUMENTS = [
  {
    id: "organizational",
    tabLabel: "Organizational",
    title: "Organizational capability statements",
    description: "Company profile and organizational capability overview for registrations, pre-qualification, and partner due diligence.",
    src: "/documents/organizational-capability-statements.pdf",
    pageCount: 4,
  },
  {
    id: "technical",
    tabLabel: "Technical",
    title: "Technical Capability & Resource Mobilization Statement",
    description: "Detailed technical capability, resource mobilization plan, and supporting documentation for tender and compliance submissions.",
    src: "/documents/technical-capability-resource-mobilization.pdf",
    pageCount: 43,
  },
  {
    id: "past-experience",
    tabLabel: "Past Experience",
    title: "Past Experience and Delivery Capacity Statement",
    description: "Past experience, delivery capability, and execution readiness statement for partner, tender, and compliance reviews.",
    src: "/documents/past-experience-delivery-capacity-statement.pdf",
    pageCount: 8,
  },
] as const

export default function StatementsAndRegistrationsPage() {
  return (
    <InnerPage
      eyebrow="COMPANY DOCUMENTATION"
      title="Statements & registrations."
      description="Find company registration details, capability statements, and AI service guides for partner and project reviews."
    >
      <nav className="inner-container inner-section-nav" aria-label="Document sections">
        <a href="#capability-documents">Capability documents</a>
        <a href="#ai-service-documents">AI service documents</a>
      </nav>

      <section className="inner-container inner-section">
        <div className="inner-registration">
          <div>
            <span className="saas-eyebrow">COMPANY REGISTRATION</span>
            <h2>{COMPANY.legalName}</h2>
            <p>Incorporated under the Limited Liability Partnership Act, 2008. Certificate issued by the Ministry of Corporate Affairs, Government of India.</p>
          </div>
          <dl>
            <div><dt>LLP Identification Number</dt><dd>{COMPANY.llpin}</dd></div>
            <div><dt>Date of incorporation</dt><dd>{COMPANY.incorporationDateLabel}</dd></div>
            <div><dt>Registered address</dt><dd>{COMPANY.registeredAddress}</dd></div>
          </dl>
        </div>
      </section>

      <section id="capability-documents" className="inner-container inner-section inner-documents">
        <div className="inner-section-heading">
          <h2>Capability documents</h2>
        </div>
        <DocumentTabs documents={CAPABILITY_DOCUMENTS} label="Capability documents" />
      </section>

      <section id="ai-service-documents" className="inner-container inner-section inner-documents">
        <div className="inner-section-heading">
          <h2>AI service documents</h2>
          <p>Read the full portfolio and engagement guide, the services overview, and the individual service details.</p>
          <Link className="mt-3 inline-block underline underline-offset-4" href="/services#ai-services">Explore AI services</Link>
        </div>
        <DocumentTabs documents={AI_SERVICE_DOCUMENTS} label="AI service documents" />
      </section>
    </InnerPage>
  )
}
