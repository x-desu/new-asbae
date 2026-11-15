"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import { useReducedMotion, useInView } from "motion/react"
import { ArrowUpRight, Check, FileText, Search, Users, Layers3, ShieldCheck, GitBranch, Server, Plug, ChevronRight } from "lucide-react"

function Preview({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, { amount: .2 })
  return <div ref={ref} className={`cap-preview ${className}`} data-running={visible}>{children}</div>
}

function Workspace() {
  const [selected, setSelected] = useState(0)
  const [paused, setPaused] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, { amount: .3 })
  const reduce = useReducedMotion()
  useEffect(() => {
    if (!visible || paused || reduce) return
    const timer = setInterval(() => setSelected(i => (i + 1) % 3), 2800)
    return () => clearInterval(timer)
  }, [visible, paused, reduce])
  const items = [{ icon: Layers3, title: "Service requests", detail: "Records & status", result: "A shared view of every request.", label: "RECORDS" }, { icon: FileText, title: "Project documentation", detail: "Reviewed & organized", result: "The right context, close to the work.", label: "DOCUMENTS" }, { icon: Users, title: "Delivery team", detail: "Roles & ownership", result: "Clear responsibility at every step.", label: "PEOPLE" }]
  return <div ref={ref} className="workspace-demo" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false) }}>
    <div className="demo-search"><Search size={15}/><span>Find the context you need</span><kbd>⌘ K</kbd></div>
    <div className="workspace-list"><div className="demo-overline">ASBAE WORKSPACE</div>{items.map(({ icon: Icon, title, detail }, i) => <button type="button" key={title} aria-pressed={selected === i} onClick={() => setSelected(i)}><Icon size={17}/><span>{title}<small>{detail}</small></span>{selected === i ? <Check size={15}/> : <ChevronRight size={14}/>}</button>)}</div>
    <div className="workspace-result" aria-live="off"><span>{items[selected].label}</span><p key={selected}>{items[selected].result}</p><div className="demo-avatars"><i>PM</i><i>BA</i><i>IT</i><small>One connected team</small></div></div>
  </div>
}

const governance = [
  { title: "Defined roles", text: "Give teams clear responsibilities, access boundaries, and ownership across the workflow.", nodes: ["Team", "Owner", "Reviewer"], icon: Users },
  { title: "Considered approvals", text: "Connect requests to review and decisions, with a clear record of what happens next.", nodes: ["Request", "Review", "Decision"], icon: ShieldCheck },
  { title: "Connected systems", text: "Bring applications, documents, and reporting together through defined interfaces and integrations.", nodes: ["Platform", "API", "Reporting"], icon: Plug },
]

export default function HomeCapabilities() {
  const [active, setActive] = useState(0)
  const [integration, setIntegration] = useState(0)
  const [stage, setStage] = useState(0)
  const Icon = governance[active].icon
  return <div className="home-capabilities">
    <section id="services" className="cap-row">
      <div className="cap-copy"><span className="cap-eyebrow">CONNECTED PLATFORMS</span><h2>Everything your team needs.<br/>Connected by design.</h2><p>Enterprise platforms that bring requests, documents, and people into a shared operational view. Less fragmentation. A clearer next step.</p><ul className="cap-notes"><li><Check size={14}/>Custom web applications & SaaS platforms</li><li><Check size={14}/>Workflows built around your organization</li></ul><Link href="/services">Explore our capabilities <ArrowUpRight size={15}/></Link></div>
      <Preview><Workspace/><span className="preview-caption">Illustrative workspace</span></Preview>
    </section>
    <section id="documentation" className="cap-row cap-reverse">
      <Preview className="delivery-preview"><div className="delivery-stack" aria-label="Requirements, review, and handover documents"><div className="delivery-sheet sheet-back"><FileText size={17}/><h3>Requirements</h3><p>Purpose & scope</p><div className="document-lines"/><p>Stakeholders & user roles</p><div className="document-lines"/></div><div className="delivery-sheet sheet-middle"><div className="demo-overline">IN REVIEW</div><h3>Delivery checklist</h3>{["Scope aligned", "Interfaces defined", "Controls reviewed"].map(t => <div className="delivery-check" key={t}><Check size={13}/>{t}</div>)}</div><div className="delivery-sheet sheet-front"><span className="delivery-status"><i/>Ready for handover</span><h3>Knowledge that stays.</h3><p>Operating procedures, training guides, and release notes.</p><div className="delivery-progress"><span/></div><span className="demo-overline">REVIEW → ALIGN → DELIVER</span></div></div><span className="preview-caption">Illustrative delivery sequence</span></Preview>
      <div className="cap-copy"><span className="cap-eyebrow">DOCUMENTATION & DELIVERY</span><h2>Clear thinking.<br/>A stronger handover.</h2><p>We connect intent to implementation with documentation your team can actually use—from business requirements to architecture and operational guides.</p><ul className="cap-notes"><li><Check size={14}/>BRD, FRD, SRS & technical specifications</li><li><Check size={14}/>Architecture, SOPs & training documentation</li><li><Check size={14}/>Tender responses & compliance matrices</li></ul><Link href="/services">Find the right support <ArrowUpRight size={15}/></Link></div>
    </section>
    <section id="approach" className="cap-row">
      <div className="cap-copy"><span className="cap-eyebrow">GOVERNANCE & INTEGRATION</span><h2>Structure that makes<br/>work move forward.</h2><p>Bring clarity to the people, decisions, and systems behind your operations.</p><div className="cap-accordion">{governance.map((item, i) => <div key={item.title}><button type="button" aria-expanded={active === i} aria-controls={`governance-answer-${i}`} onClick={() => setActive(i)}><span>0{i + 1}</span>{item.title}<span>{active === i ? "−" : "+"}</span></button><div id={`governance-answer-${i}`} className="cap-answer" aria-hidden={active !== i} data-open={active === i}><div><p>{item.text}</p></div></div></div>)}</div></div>
      <Preview className="governance-preview"><div className="connection-demo"><div className="connection-label"><span/>{governance[active].title}</div><div className="connection-trunk"/><div className="connection-hub"><Icon size={25}/></div><svg viewBox="0 0 360 100" aria-hidden><path d="M180 0 V25 Q180 55 70 55 Q50 55 50 80 V100 M180 0 V100 M180 0 V25 Q180 55 290 55 Q310 55 310 80 V100"/></svg><div className="connection-endpoints">{governance[active].nodes.map((node, i) => <div key={i}><span className={i === active ? "is-emphasized" : ""}>{i === 0 ? <Layers3 size={19}/> : i === 1 ? <GitBranch size={19}/> : <ShieldCheck size={19}/>}</span><small key={node}>{node}</small></div>)}</div></div><span className="preview-caption">Explore the principles on the left</span></Preview>
    </section>
    <section id="operations" className="cap-operations"><div className="cap-operations-heading"><span className="cap-eyebrow">BUILT FOR WHAT COMES NEXT</span><h2>A foundation for everyday operations.</h2><p>From deployment planning to connected interfaces, we help your systems work together and your teams move with confidence.</p></div><div className="cap-operation-grid"><article><h3>From planning to release.</h3><p>Defined environments, validation, and documented handover support a considered path to deployment.</p><Preview className="release-preview"><div className="release-path">{["Plan", "Validate", "Handover"].map((label, i) => <button key={label} type="button" aria-pressed={stage === i} onClick={() => setStage(i)}><span>{i < stage ? <Check size={18}/> : <Server size={18}/>}</span>{label}</button>)}</div><div className="release-detail" key={stage}>{["Agree scope, dependencies, and environments.", "Review requirements and confirm acceptance.", "Prepare release notes, guides, and team ownership."][stage]}</div></Preview></article><article><h3>The right connections for your work.</h3><p>Connect applications and information through API specifications, integration planning, and clear system boundaries.</p><Preview className="integration-preview"><div className="integration-menu"><div className="demo-search"><Plug size={14}/>Integration capabilities</div>{["Application interfaces", "Document workflows", "Operational reporting"].map((label, i) => <button key={label} type="button" aria-pressed={integration === i} onClick={() => setIntegration(i)}><span>{label}</span>{integration === i ? <Check size={15}/> : <ChevronRight size={14}/>}</button>)}</div></Preview></article></div><div className="cap-endnote"><p>Built for startups, IT teams, government, and enterprise.</p><Link href="/about">Meet ASBAE <ArrowUpRight size={14}/></Link></div></section>
  </div>
}
