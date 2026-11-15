"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Blocks, FileText, Workflow, Building2 } from "lucide-react"
import BlurText from "@/components/BlurText"
import HeroMountainBackdrop from "@/components/hero-mountain-backdrop"
import PinnedProjectShowcase from "@/components/pinned-project-showcase"
import { CapabilityExplorer, DeliveryApproach, DocumentationExplorer, EngagementOptions, WorkflowCanvas } from "@/components/asbae-experience"



export default function SaaSHome() {
  return (
    <>
      <section id="home" className="saas-hero asbae-parallax-hero">
        <HeroMountainBackdrop/>
        <div className="hero-parallax-shade" aria-hidden/>
        <div className="saas-hero-copy"><span className="asbae-announcement"><span>ASBAE</span> Enterprise IT & digital governance <ArrowUpRight size={12}/></span><h1 className="hero-heading"><BlurText text="From complex ideas" delay={65} trigger="load" direction="bottom" blur={5} distance={14} stepDuration={0.3} className="hero-heading-line"/><BlurText text="to systems that work." delay={65} trigger="load" direction="bottom" blur={5} distance={14} stepDuration={0.3} className="hero-heading-line"/></h1><p>We build enterprise platforms, documentation, and digital governance that move your organization forward.</p><div className="saas-hero-actions"><Link href="/contact" className="saas-primary">Build with ASBAE <ArrowUpRight size={15} aria-hidden/></Link><Link href="#work" className="saas-secondary">Explore our work <ArrowRight size={15} aria-hidden/></Link></div></div>
        <div className="saas-capability-strip"><span>Built for real<br/><strong>organizational needs.</strong></span><div><Blocks size={19} aria-hidden/>Enterprise platforms</div><div><FileText size={19} aria-hidden/>Technical documentation</div><div><Workflow size={19} aria-hidden/>Digital governance</div></div>
      </section>
      <PinnedProjectShowcase/>
      <CapabilityExplorer/>
      <WorkflowCanvas/>
      <DocumentationExplorer/>
      <section id="industries" className="experience-section saas-industries"><div><span className="saas-eyebrow">BUILT AROUND YOUR ORGANIZATION</span><h2>Different challenges.<br/>The same care in delivery.</h2><p>Purposeful IT and documentation support for teams that value precision, accountability, and room to grow.</p><Link href="/about" className="saas-inline-link">Meet ASBAE <ArrowRight size={15} aria-hidden/></Link><div className="industry-principles"><span>Structured methodology</span><span>Governance-grade delivery</span><span>Expert-led collaboration</span></div></div><div className="saas-industry-list">{[["01","Startups","Structure your ideas, document your systems, and build a foundation for growth."],["02","IT companies","Keep requirements, implementation, and delivery aligned across teams."],["03","Government & enterprise","Navigate complex workflows, tender requirements, and governance needs."]].map(([number,title,text])=><article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><Building2 size={19} aria-hidden/></article>)}</div></section>
      <section id="mission-vision" className="experience-section saas-purpose"><span className="saas-eyebrow">OUR PURPOSE</span><div><h2>Clear thinking.<br/>Lasting impact.</h2><article><h3>Our mission</h3><p>Empower organizations with intelligent, secure, and scalable IT solutions that streamline workflows, strengthen decision-making, and deliver seamless digital experiences.</p><h3>Our vision</h3><p>A future-ready ecosystem where integrated IT, SaaS, and cloud solutions help organizations operate with greater clarity and confidence.</p><div className="saas-values"><span>Compliance-ready</span><span>Built to scale</span><span>Governance-grade</span></div></article></div></section>
      <DeliveryApproach/>
      <EngagementOptions/>
      <section id="contact" className="asbae-photo-cta"><Image src="/images/asbae-mountain-hero.webp" alt="" fill sizes="100vw"/><div className="photo-cta-overlay"/><div className="photo-cta-copy"><span className="saas-eyebrow">LET’S BUILD WHAT COMES NEXT</span><h2>Bring your next project<br/>into focus.</h2><p>Tell us what you’re working on. We’ll help you find the structure, technology, and expertise to move it forward.</p><div><Link href="/contact" className="saas-primary">Discuss your project <ArrowUpRight size={16} aria-hidden/></Link><Link href="/services" className="saas-secondary">Explore services <ArrowRight size={15}/></Link></div><small>Direct consultation · NDA-ready processes · Expert-led delivery</small></div></section>
    </>
  )
}
