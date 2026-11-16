import type { Metadata } from "next"
import { SITE_URL, createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Enterprise Platforms, Documentation & Governance",
  description: "Explore ASBAE’s enterprise platforms, BRD/FRD/SRS documentation, API specifications, digital governance, integrations, and tender support.",
  path: "/services",
})

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  const catalog = {
    "@context": "https://schema.org", "@type": "OfferCatalog",
    "@id": `${SITE_URL}/services#catalog`, name: "ASBAE services", url: `${SITE_URL}/services`,
    itemListElement: [
      ["Enterprise platforms", "Custom web applications, SaaS platforms, and operational workflows."],
      ["Technical documentation", "Requirements, architecture, API specifications, SOPs, and training guides."],
      ["Digital governance and integration", "Roles, approval workflows, application interfaces, and connected systems."],
      ["Tender and RFP documentation", "Technical responses, compliance matrices, and supporting documentation."],
    ].map(([name, description]) => ({ "@type": "Offer", itemOffered: {
      "@type": "Service", name, description, provider: { "@id": `${SITE_URL}/#organization` },
      url: `${SITE_URL}/services`,
    }})),
  }
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(catalog).replace(/</g,"\\u003c")}}/>{children}</>
}
