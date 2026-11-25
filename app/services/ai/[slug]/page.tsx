import Link from "next/link"
import { notFound } from "next/navigation"
import InnerPage from "@/components/inner-page"
import { AI_DOCUMENTS_URL } from "@/lib/ai-service-documents"
import { AI_SERVICES } from "@/lib/ai-services"
import { createPageMetadata } from "@/lib/seo"

type PageProps = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return AI_SERVICES.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const service = AI_SERVICES.find((item) => item.slug === slug)
  if (!service) notFound()

  return createPageMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/ai/${service.slug}`,
  })
}

export default async function AIServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = AI_SERVICES.find((item) => item.slug === slug)
  if (!service) notFound()

  return (
    <InnerPage eyebrow="AI AS A SERVICE" title={service.title} description={service.summary}>
      <nav className="inner-container inner-section-nav" aria-label="AI service resources">
        <Link href="/services#ai-services">All AI services</Link>
        <Link href={AI_DOCUMENTS_URL}>AI service documents</Link>
      </nav>
      <section className="inner-container inner-section" aria-labelledby="ai-service-scope">
        <div className="inner-section-heading">
          <h2 id="ai-service-scope">What you can build</h2>
        </div>
        <ul className="inner-card-grid">
          {service.useCases.map((useCase) => (
            <li className="inner-card" key={useCase}><p>{useCase}</p></li>
          ))}
        </ul>
      </section>
      <section className="inner-container inner-section" aria-labelledby="ai-service-pilot">
        <div className="inner-section-heading">
          <h2 id="ai-service-pilot">How the pilot works</h2>
          <p>{service.pilot}</p>
        </div>
        <div className="inner-card-grid">
          <article className="inner-card"><h3>Typical deliverables</h3><p>{service.deliverables}</p></article>
          <article className="inner-card"><h3>How we measure success</h3><p>{service.evaluation}</p></article>
          <article className="inner-card"><h3>Operating controls</h3><p>{service.controls}</p></article>
        </div>
      </section>
      <section className="inner-container inner-cta">
        <h2>Scope an AI pilot.</h2>
        <Link href="/contact" className="saas-primary">Discuss your workflow</Link>
      </section>
    </InnerPage>
  )
}
