import InnerPage, { InnerCTA } from "@/components/inner-page"
import { Users, Shield, Layers, BarChart } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { COMPANY } from "@/lib/company"
const approachItems = [
  {
    Icon: Users,
    title: "Client-Centric Design",
    description: "Tailored solutions for your workflows",
  },
  {
    Icon: Shield,
    title: "Secure & Compliant Systems",
    description: "Advanced encryption and audit-ready platforms",
  },
  {
    Icon: Layers,
    title: "Scalable Technology",
    description: "Solutions that grow with your organization",
  },
  {
    Icon: BarChart,
    title: "Insight & Intelligence",
    description: "Dashboards, analytics, and KPI tracking for data-driven decisions",
  },
]

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
    content: "Simply reach out through our contact page or click 'Get Started'. Our team will schedule a consultation to understand your needs and propose a tailored solution.",
  },
]

export default function AboutPage() {
 return <InnerPage eyebrow="THE COMPANY" title="Clear thinking. Lasting impact." description="We help organizations streamline operations, secure data, and deliver seamless digital services through enterprise IT, SaaS platforms, and cloud infrastructure.">
  <section className="inner-container inner-section inner-purpose"><div><span className="saas-eyebrow">ASBAE / LUCKNOW, INDIA</span><h2>Technology with a clear purpose.</h2><p>We combine technical expertise, considered documentation, and a practical understanding of how organizations work.</p><div className="inner-company-note"><strong>{COMPANY.legalName}</strong><span>LLPIN {COMPANY.llpin} · Incorporated {COMPANY.incorporationDateLabel}</span></div></div><div className="inner-purpose-copy"><article><span className="saas-eyebrow">OUR MISSION</span><h3>Make complex work simpler.</h3><p>To empower enterprises and organizations with intelligent, secure, and scalable IT solutions that streamline workflows, enhance decision-making, and deliver seamless digital experiences.</p></article><article><span className="saas-eyebrow">OUR VISION</span><h3>A connected, future-ready ecosystem.</h3><p>To become a leading provider of integrated IT, SaaS, and cloud solutions that transform the way organizations operate, enabling a data-driven and digitally secure ecosystem across sectors.</p></article></div></section>
  <section className="inner-container inner-section"><div className="inner-section-heading"><span className="saas-eyebrow">OUR APPROACH</span><h2>Built around people, systems, and trust.</h2></div><div className="inner-card-grid two-columns">{approachItems.map(({Icon,title,description})=><article className="inner-card" key={title}><div className="inner-card-icon"><Icon/></div><h3>{title}</h3><p>{description}</p></article>)}</div></section>
  <section className="inner-container inner-section inner-faq"><div><span className="saas-eyebrow">COMMON QUESTIONS</span><h2>A little more about working with us.</h2></div><Accordion type="single" collapsible>{faqItems.map((item,i)=><AccordionItem key={item.title} value={String(i)}><AccordionTrigger>{item.title}</AccordionTrigger><AccordionContent>{item.content}</AccordionContent></AccordionItem>)}</Accordion></section><InnerCTA/>
 </InnerPage>
}
