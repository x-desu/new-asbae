import InnerPage, { InnerCTA } from "@/components/inner-page"
import AutomatedTasksPanel from "@/components/ui/automated-tasks-panel"
import { FeatureHighlights } from "@/components/ui/feature-highlights"
import { COMPANY } from "@/lib/company"
const faqItems = [
  {
    title: "What industries do you serve?",
    content: "We serve organizations across multiple sectors including enterprise, government, healthcare, education, and logistics — anyone looking to streamline operations with intelligent IT solutions.",
  },
  {
    title: "How do you ensure data security?",
    content: "We implement enterprise-grade security measures including end-to-end encryption, regular security audits, role-based access controls, and compliance-ready platforms to protect your data.",
  },
  {
    title: "Can your solutions scale with our organization?",
    content: "Absolutely. Our cloud-native architecture and modular SaaS platforms are designed to scale seamlessly as your organization grows, from startups to large enterprises.",
  },
  {
    title: "How can we get started?",
    content: "Reach out through our contact page or the WhatsApp button. Our team will schedule a consultation to understand your needs and propose a tailored solution.",
  },
]

export default function AboutPage() {
 return <InnerPage eyebrow="THE COMPANY" title="Clear thinking. Lasting impact." description="We help organizations streamline operations, secure data, and deliver seamless digital services through enterprise IT, SaaS platforms, and cloud infrastructure.">
  <section className="inner-container inner-section inner-purpose"><div><span className="saas-eyebrow">ASBAE / LUCKNOW, INDIA</span><h2>Technology with a clear purpose.</h2><p>We combine technical expertise, considered documentation, and a practical understanding of how organizations work.</p><div className="inner-company-note"><strong>{COMPANY.legalName}</strong><span>LLPIN {COMPANY.llpin} · Incorporated {COMPANY.incorporationDateLabel}</span></div></div><div className="inner-purpose-copy"><article><span className="saas-eyebrow">OUR MISSION</span><h3>Make complex work simpler.</h3><p>To empower enterprises and organizations with intelligent, secure, and scalable IT solutions that streamline workflows, enhance decision-making, and deliver seamless digital experiences.</p></article><article><span className="saas-eyebrow">OUR VISION</span><h3>A connected, future-ready ecosystem.</h3><p>To become a leading provider of integrated IT, SaaS, and cloud solutions that transform the way organizations operate, enabling a data-driven and digitally secure ecosystem across sectors.</p></article></div></section>
  <section className="inner-container inner-section" aria-label="ASBAE delivery approach"><AutomatedTasksPanel/></section>
  <section id="faq" aria-labelledby="about-faq-title" className="inner-container inner-section about-feature-faq">
    <div className="inner-section-heading"><span className="saas-eyebrow">COMMON QUESTIONS</span><h2 id="about-faq-title">A little more about working with us.</h2></div>
    <FeatureHighlights title="" autoPlayInterval={0} showImages={false} className="py-0 md:py-0" features={faqItems.map(item=>({title:item.title,description:item.content}))}/>
  </section><InnerCTA/>
 </InnerPage>
}
