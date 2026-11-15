"use client"

import Link from "next/link"
import { ArrowUpRight, ArrowRight, Check, Plus } from "lucide-react"
import { ScriptWord, BrandSticker } from "@/components/ui/brand-lettering"

const services = [
  { number: "01", title: "Business documentation", text: "Align stakeholders with clear requirements and process flows.", items: "BRD / FRD / SRS · Scope of work · User stories · BPMN" },
  { number: "02", title: "Technical documentation", text: "Connect solution design and implementation with precise technical documents.", items: "System architecture · API documentation · Database schemas" },
  { number: "03", title: "Tender & compliance", text: "Prepare traceable, governance-aligned response kits for bids and approvals.", items: "RFP responses · Compliance matrices · SOPs · SLAs" },
  { number: "04", title: "Documentation as a service", text: "Keep documentation current through migration, releases, and handover.", items: "Migration plans · Training guides · Risk mitigation · Release notes" },
]

function SectionTag({ children }: { children: React.ReactNode }) {
  return <span className="studio-tag">{children}</span>
}

export default function FooterStyleHome() {
  return (
    <div className="studio-content">
      <section id="home" className="studio-hero studio-panel">
        <div className="studio-hero-top"><SectionTag>Enterprise IT & digital governance</SectionTag><span className="studio-small">ASBAE Technologies / Lucknow, India</span></div>
        <div className="studio-hero-title">
          <h1><span>Intelligent IT.<br />Made clear.</span><span className="sr-only">Clear direction.</span></h1>
          <div aria-hidden><ScriptWord text="clear direction" className="studio-hero-script" /></div>
          <BrandSticker kind="burst" className="studio-hero-sticker" />
        </div>
        <div className="studio-hero-bottom">
          <p>We bring structure to digital transformation. Enterprise platforms, precise documentation, and connected governance — from first requirement to final delivery.</p>
          <div className="studio-hero-actions"><Link href="/contact" className="studio-button">Discuss your project <ArrowUpRight size={19} aria-hidden /></Link><Link href="#services" className="studio-text-link">Explore what we do <ArrowRight size={16} aria-hidden /></Link></div>
        </div>
        <div className="studio-capabilities"><span><Check size={14} aria-hidden /> Enterprise & government</span><span><Check size={14} aria-hidden /> Documentation to deployment</span><span><Check size={14} aria-hidden /> Clarity at every handoff</span></div>
      </section>

      <section id="services" className="studio-section studio-services">
        <div className="studio-section-heading"><div><SectionTag>01 / What we do</SectionTag><h2>Complex projects.<br /><span className="studio-accent">Considered solutions.</span></h2></div><p>Documentation and enterprise technology that give your teams clarity, control, and a dependable foundation for delivery.</p></div>
        <div className="studio-service-list">
          {services.map(service => <Link href="/services" className="studio-service-row" key={service.number}><span className="studio-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p><span className="studio-service-items">{service.items}</span></div><ArrowUpRight aria-hidden className="studio-service-arrow" /></Link>)}
        </div>
        <div className="studio-governance studio-panel"><div><SectionTag>Unified Governance Solutions</SectionTag><h3>One connected<br />digital backbone.</h3><p>A configurable, modular enterprise platform for secure access, automated workflows, compliance monitoring, and system integration.</p><Link href="/services" className="studio-text-link">Explore the platform <ArrowUpRight size={17} aria-hidden /></Link></div><div className="studio-governance-words"><ScriptWord text="connected" /><div className="studio-pills">{["Role-based access", "Workflow automation", "Compliance", "Cloud / hybrid", "Secure integration"].map(text=><span key={text}>{text}</span>)}</div><BrandSticker className="studio-platform-seal" /></div></div>
      </section>

      <section id="industries" className="studio-section studio-panel">
        <div className="studio-section-heading"><div><SectionTag>02 / Who we work with</SectionTag><h2>Built around<br /><span className="studio-accent">your organization.</span></h2></div><p>Tailored IT and documentation support for organizations that demand precision, compliance, and excellence.</p></div>
        <div className="studio-columns">
          {[
            ["Startups", "Scale with standardized documentation and compliance frameworks designed for rapid growth."],
            ["IT companies", "Streamline project delivery with technical documentation and clear process mapping."],
            ["Government contractors", "Meet tender requirements with audit-ready documentation and security protocols."],
          ].map(([title,text])=><article key={title}><Plus size={22} className="studio-column-symbol" aria-hidden /><h3>{title}</h3><p>{text}</p><Link href="/services" className="studio-text-link">Find your solution <ArrowUpRight size={16} aria-hidden /></Link></article>)}
        </div>
      </section>

      <section id="mission-vision" className="studio-section studio-purpose">
        <div className="studio-section-heading"><div><SectionTag>03 / Our purpose</SectionTag><h2>Technology with<br /><span className="studio-accent">a clear purpose.</span></h2></div><ScriptWord text="on purpose" className="studio-purpose-script" /></div>
        <div className="studio-purpose-columns"><article><SectionTag>Our mission</SectionTag><p>To empower enterprises and organizations with intelligent, secure, and scalable IT solutions that streamline workflows, enhance decision-making, and deliver seamless digital experiences.</p></article><article><SectionTag>Our vision</SectionTag><p>To become a leading provider of integrated IT, SaaS, and cloud solutions, enabling a future-ready, data-driven, and digitally secure ecosystem across sectors.</p></article></div>
      </section>

      <section id="values" className="studio-section studio-panel">
        <div className="studio-section-heading"><div><SectionTag>04 / What guides us</SectionTag><h2>Good work starts<br /><span className="studio-accent">with good principles.</span></h2></div><p>We bridge technical complexity and organizational understanding through a structured methodology and expert-led delivery.</p></div>
        <div className="studio-columns">
          {[
            ["Compliance-ready", "Tender-aligned documentation built around internal and external governance standards."],
            ["Room to scale", "Documentation expertise that grows with your delivery needs and project throughput."],
            ["Governance-grade", "Structured outputs that support clarity, control, and long-term maintainability."],
          ].map(([title,text],i)=><article key={title}><span className="studio-number">0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section id="approach" className="studio-section">
        <div className="studio-section-heading"><div><SectionTag>05 / How we work</SectionTag><h2>From the first question<br /><span className="studio-accent">to what comes next.</span></h2></div><p>A consistent approach, shaped around your workflows and the next stage of your organization’s growth.</p></div>
        <ol className="studio-steps">{[
          ["Understand", "Start with your people, requirements, and operational context."],
          ["Govern", "Build access, compliance, and accountability into the solution."],
          ["Connect", "Bring together modular technology that evolves with your organization."],
          ["Measure", "Use reporting, analytics, and KPIs to make progress visible."],
        ].map(([title,text],i)=><li key={title}><span className="studio-step-number">0{i+1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      </section>

      <section id="contact" className="studio-section studio-panel studio-contact">
        <div className="studio-contact-top"><SectionTag>06 / Start a conversation</SectionTag><BrandSticker className="studio-contact-seal" /></div>
        <h2>Give your next project<br />a clear direction.</h2>
        <ScriptWord text="lets build" className="studio-contact-script" />
        <div className="studio-contact-bottom"><p>Talk to our technical team about enterprise IT, documentation, and digital governance. Direct consultation. Connected delivery. NDA-ready processes.</p><Link href="/contact" className="studio-button">Let’s talk about your project <ArrowUpRight size={19} aria-hidden /></Link></div>
      </section>
    </div>
  )
}
