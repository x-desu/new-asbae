"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Check, CheckCheck, Circle, Copy, FileCode2, FileText, FolderOpen, GitBranch, Layers3, PlugZap, RotateCcw, ShieldCheck, Workflow } from "lucide-react"
import { ProductFeatureHero } from "@/components/ui/product-feature-hero"

const capabilities = [
  { id:"platforms", icon:Layers3, label:"Enterprise platforms", title:"Built around the way your team works.", text:"Configurable systems connect people, decisions, and records without losing the context behind each request.", points:["Modular business workflows","Role-based access and ownership","Connected reporting and records"], visualTitle:"A connected workspace", steps:["Capture requirements","Configure the workflow","Connect your systems","Validate & hand over"], meta:"PLATFORM DELIVERY" },
  { id:"documentation", icon:FileText, label:"Documentation", title:"A shared understanding, written clearly.", text:"Give stakeholders and delivery teams the requirements, system detail, and handover material they need to stay aligned.", points:["Business requirements: BRD / FRD / SRS","Architecture, APIs, and database design","Training guides and release documentation"], visualTitle:"From requirements to handover", steps:["Business requirements","Architecture & specifications","Review & traceability","Release documentation"], meta:"DOCUMENTATION LIFECYCLE" },
  { id:"governance", icon:ShieldCheck, label:"Governance", title:"Clarity, control, and accountability.", text:"Bring structure to approvals, compliance documentation, and the evidence needed to make better decisions.", points:["SOPs and service-level agreements","Tender responses and compliance matrices","Audit-ready records and traceable decisions"], visualTitle:"Control at every stage", steps:["Define responsibilities","Document the controls","Review the evidence","Maintain the audit trail"], meta:"GOVERNANCE FRAMEWORK" },
  { id:"integration", icon:PlugZap, label:"Integration", title:"Make your systems work together.", text:"Connect enterprise platforms through defined interfaces and an architecture that supports the next stage of growth.", points:["API and system integration","Cloud, on-premise, and hybrid planning","Migration and transition documentation"], visualTitle:"Designed to connect", steps:["Map existing systems","Define the interfaces","Validate the data flow","Plan the transition"], meta:"SYSTEM INTEGRATION" },
]

export function CapabilityExplorer() {
  return <div id="services" className="product-feature-section scroll-mt-20">
    <div className="mx-auto max-w-5xl px-6 pb-6"><span className="saas-eyebrow">ONE CONNECTED CAPABILITY</span></div>
    <ProductFeatureHero
      title="The technology. The structure. The clarity to move forward."
      description="Enterprise platforms, clear documentation, and governance that work together."
      secondaryText={<p className="text-muted-foreground">We connect your requirements, systems, and delivery teams with defined scope, clear ownership, and a documented handover.</p>}
      ctaText="Explore our services"
      ctaHref="/services"
      features={capabilities.map(item=>({
        id:item.id,
        title:item.label,
        description:item.text,
        detailTitle:item.title,
        deliverables:item.points,
        steps:item.steps,
        eyebrow:item.meta,
      }))}
    />
  </div>
}

const workflowInputs=[
  {title:"Requests",detail:"Counter, message, email, voice",icon:FolderOpen},
  {title:"Documents",detail:"Capture, OCR, and structured review",icon:FileText},
  {title:"Departments",detail:"Ownership and follow-up",icon:GitBranch},
  {title:"Governance",detail:"Roles, policies, and approvals",icon:ShieldCheck},
]
export function WorkflowCanvas() {
  const [connected,setConnected]=useState<boolean[]>([true,false,false,false])
  const total=connected.filter(Boolean).length
  const ready=total===4
  return <section id="workflows" className="experience-section"><div className="experience-heading"><span className="saas-eyebrow">SEE HOW IT CONNECTS</span><h2>Separate inputs.<br/>One clear workflow.</h2><p>See how ASBAE connects requests, documents, departments, and approvals into a shared workflow. Select the inputs to explore our capabilities.</p></div><div className="workflow-shell"><div className="workflow-toolbar"><span><Workflow size={14}/> Workflow explorer</span><div><button type="button" disabled={total===0} onClick={()=>setConnected([false,false,false,false])}><RotateCcw size={12}/> Reset</button><button type="button" disabled={ready} onClick={()=>setConnected([true,true,true,true])}>Connect all <ArrowRight size={12}/></button></div></div><div className={`workflow-canvas ${ready?"is-ready":""}`}><svg className="workflow-lines" viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden>{[77,161,245,329].map((y,i)=><path key={i} className={connected[i]?"connected":""} d={`M280 ${y} C325 ${y}, 320 210, 360 210`}/>)}{[110,210,310].map((y,i)=><path key={i} className={ready?"connected":""} d={`M640 210 C680 210, 680 ${y}, 720 ${y}`}/>)}</svg><div className="workflow-inputs">{workflowInputs.map(({title,detail,icon:Icon},i)=><button type="button" key={title} className={`workflow-node ${connected[i]?"is-connected":""}`} aria-pressed={connected[i]} onClick={()=>setConnected(current=>current.map((value,index)=>index===i?!value:value))}><span className="workflow-node-icon"><Icon size={17}/></span><span><strong>{title}</strong><small>{detail}</small></span><span className="workflow-port">{connected[i]?<Check size={11}/>:<Circle size={10}/>}</span></button>)}</div><div className="workflow-engine"><div className="engine-mark"><Layers3 size={24}/></div><span>ASBAE CAPABILITIES</span><h3>Connected operations</h3><p>Capture. Coordinate. Deliver.</p><div className="engine-inputs">{workflowInputs.map((input,i)=><span key={input.title} className={connected[i]?"active":""}><i/>{input.title}</span>)}</div><span className={`engine-status ${ready?"ready":""}`}>{ready?"Workflow connected":`${total} of 4 inputs connected`}</span></div><div className="workflow-outputs">{[["Review & approvals","Defined roles and decisions"],["Task tracking","Ownership and follow-ups"],["Reporting","A shared operational view"]].map(([title,text])=><div key={title} className={`workflow-output ${ready?"active":""}`}><span>{ready?<CheckCheck size={15}/>:<Circle size={13}/>}</span><div><strong>{title}</strong><small>{text}</small></div></div>)}</div></div><div className="workflow-status" role="status"><span className={ready?"status-ready":""}/>{ready?"All inputs connected. The workflow and its outputs are ready to explore.":"Select an input to connect it, or choose Connect all."}<small>Illustrative flow · no data is submitted</small></div></div></section>
}

const documents=[
  {id:"requirements",label:"Requirements",file:"business-requirements.md",title:"Start with a shared definition.",description:"Business and technical teams need the same view of scope, expectations, and acceptance.",lines:["# Business requirements","","01  Purpose and project context","02  Stakeholders and user roles","03  In-scope business workflows","04  Functional requirements","05  Acceptance and traceability","","Review → Align → Approve"],outputs:["BRD / FRD / SRS","Scope of work","User stories & process flows"]},
  {id:"architecture",label:"Architecture",file:"system-architecture.md",title:"Connect decisions to implementation.",description:"Define system boundaries, interfaces, and dependencies before they become delivery surprises.",lines:["# System architecture","","Client applications","        ↓","Access & workflow services","        ↓","API and integration layer","        ↓","Data, documents, and audit records"],outputs:["System architecture","API specifications","Database schemas & ERDs"]},
  {id:"handover",label:"Handover",file:"delivery-handover.md",title:"Make the next team ready.",description:"Keep the knowledge behind a platform accessible through release, training, and ongoing support.",lines:["# Delivery handover","","[✓] Configuration & release notes","[✓] Operating procedures","[✓] User and training guides","[✓] Known risks & dependencies","[✓] Transition responsibilities","","A documented next step."],outputs:["Training guides","SOPs & SLAs","Release & migration plans"]},
]
export function DocumentationExplorer() {
  const [active,setActive]=useState("requirements")
  const [copied,setCopied]=useState(false)
  const document=documents.find(item=>item.id===active)??documents[0]
  async function copy(){try{await navigator.clipboard.writeText(document.lines.join("\n"));setCopied(true)}catch{setCopied(false)}}
  return <section id="documentation" className="experience-section documentation-explorer"><div className="documentation-intro"><span className="saas-eyebrow">CLARITY IS A DELIVERABLE</span><h2>The thinking behind<br/>the technology.</h2><p>Our documentation connects intent, implementation, and the people who take the work forward.</p><div className="documentation-options">{documents.map(item=><button type="button" key={item.id} aria-pressed={active===item.id} onClick={()=>{setActive(item.id);setCopied(false)}}><FileCode2 size={16}/><span><strong>{item.label}</strong><small>{item.title}</small></span><ArrowUpRight size={13}/></button>)}</div><Link href="/services" className="saas-inline-link">Explore documentation services <ArrowRight size={14}/></Link></div><div className="document-editor"><div className="document-editor-bar"><span><FileText size={13}/>{document.file}</span><button type="button" onClick={copy} aria-label={copied?"Copied document example":"Copy document example"}>{copied?<Check size={13}/>:<Copy size={13}/>}<span>{copied?"Copied":"Copy"}</span></button></div><div className="document-editor-body"><span className="visual-eyebrow">ILLUSTRATIVE DOCUMENT OUTLINE</span><div className="document-code">{document.lines.map((line,i)=><div key={i}><span>{String(i+1).padStart(2,"0")}</span><code className={i===0?"code-title":""}>{line||" "}</code></div>)}</div><div className="document-summary"><h3>{document.title}</h3><p>{document.description}</p><div>{document.outputs.map(text=><span key={text}>{text}</span>)}</div></div></div><div className="document-editor-footer"><span>Structured. Reviewed. Ready for delivery.</span><span>ASBAE / DOCUMENTATION</span></div><span className="sr-only" role="status">{copied?"Document example copied":""}</span></div></section>
}

export function DeliveryApproach() {
  return <section id="approach" className="experience-section"><div className="experience-heading"><span className="saas-eyebrow">HOW WE WORK</span><h2>Thought through.<br/>From start to finish.</h2><p>A consistent approach from understanding your requirements to supporting your next stage of growth.</p></div><ol className="saas-approach">{[["Understand","Start with your people, workflows, and operational requirements."],["Design","Define the architecture, documentation, and controls that fit."],["Deliver","Connect systems, validate the work, and prepare your teams."],["Support","Keep documentation current and make the next step clearer."]].map(([title,text],i)=><li key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
}

export function EngagementOptions(){
  return <section id="engagement" className="experience-section"><div className="experience-heading"><span className="saas-eyebrow">A MODEL THAT FITS YOUR TEAM</span><h2>Flexible engagement.<br/>Considered delivery.</h2><p>Choose a defined project, ongoing support, or focused tender assistance. Scope and pricing are agreed around your requirements.</p></div><div className="engagement-grid">{[
    {name:"Project delivery",tag:"DEFINED SCOPE",text:"A focused engagement with a clear set of deliverables and milestones.",items:["Requirements & solution planning","Documentation or platform delivery","Validation, training & handover"],cta:"Discuss a project"},
    {name:"Ongoing support",tag:"CONTINUITY",text:"Documentation expertise that works alongside your delivery team.",items:["Documentation as a service","Release and change documentation","Flexible support for evolving needs"],cta:"Plan ongoing support"},
    {name:"Tender assistance",tag:"FOCUSED EXPERTISE",text:"Structured support for complex government and enterprise bidding cycles.",items:["Technical response preparation","Compliance matrices and review","Supporting presentations & documents"],cta:"Discuss a tender"},
  ].map((item,i)=><article key={item.name} className={i===1?"featured":""}><span className="visual-eyebrow">{item.tag}</span><h3>{item.name}</h3><p>{item.text}</p><span className="engagement-scope">Scoped to your requirements</span><ul>{item.items.map(text=><li key={text}><Check size={13}/>{text}</li>)}</ul><Link href="/contact">{item.cta}<ArrowUpRight size={14}/></Link></article>)}</div></section>
}
