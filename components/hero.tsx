"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight, Check, CheckCheck, FileText, Layers3, ShieldCheck } from "lucide-react"
import { useState } from "react"
import { Box, HStack } from "@/components/ui/stack"
import FadeContent from "@/components/ui/fade-content"

const workflows = [
  { name: "Documentation", title: "From requirements to clarity.", subtitle: "A connected documentation lifecycle", rows: ["Business requirements", "System architecture", "API documentation", "Release & handover"], tags: ["BRD / FRD / SRS", "Version control", "Traceability"] },
  { name: "Governance", title: "Every decision, accountable.", subtitle: "Control across your digital ecosystem", rows: ["Role-based access", "Approval workflows", "Compliance monitoring", "Audit trail & reporting"], tags: ["Access control", "Workflows", "Audit readiness"] },
  { name: "Delivery", title: "Built for the next milestone.", subtitle: "Structure from discovery to deployment", rows: ["Scope & discovery", "Solution configuration", "Integration & validation", "Training & support"], tags: ["Cloud / hybrid", "Integration", "Handover"] },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const workflow = workflows[active]
  return (
    <section id="home" className="corporate-hero relative overflow-hidden pt-[76px]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid items-center gap-12 pb-14 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-16 lg:pt-20">
          <div>
            <HStack className="mb-6 gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-300">
              <span className="h-px w-7 bg-blue-400" /> Enterprise IT & digital governance
            </HStack>
            <h1 className="!font-sans text-[42px] !font-semibold leading-[1.08] tracking-[-0.045em] sm:text-[56px] lg:text-[64px]">
              Complex IT.<br />Clear direction.<br /><span className="text-blue-400">Better outcomes.</span>
            </h1>
            <p className="mt-6 max-w-[470px] text-[15px] leading-[1.8] !text-[var(--site-muted)] sm:text-base">
              Bring structure to your digital transformation. ASBAE connects enterprise platforms, technical documentation, and governance — from first requirement to final delivery.
            </p>
            <HStack className="mt-8 flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-5 rounded-md bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500">Discuss your project <ArrowUpRight size={17} aria-hidden /></Link>
              <Link href="/services" className="inline-flex items-center gap-3 rounded-md border border-slate-600 px-5 py-3.5 text-sm font-medium text-slate-200 transition-colors hover:border-slate-400 hover:bg-[var(--site-surface-hover)]">Explore services <ArrowRight size={16} aria-hidden /></Link>
            </HStack>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[var(--site-muted)]">
              {["Enterprise & government", "Documentation to deployment"].map(text => <span key={text} className="inline-flex items-center gap-2"><Check size={13} className="text-blue-400" aria-hidden />{text}</span>)}
            </div>
          </div>
          <FadeContent duration={0.7} className="min-w-0">
            <Box className="workflow-preview overflow-hidden rounded-xl border border-white/15 bg-[var(--site-surface)] shadow-[0_24px_70px_-24px_rgba(0,0,0,0.6)]">
              <HStack className="justify-between gap-2 border-b border-[var(--site-border)] bg-[var(--site-surface)] px-5 py-4">
                <HStack className="gap-2.5 text-xs font-semibold text-[var(--site-text)]"><Layers3 size={17} className="text-blue-400" />Unified Governance</HStack>
                <span className="rounded border border-[var(--site-border)] px-2 py-1 text-[9px] font-medium uppercase tracking-wider text-[var(--site-muted)]">Illustrative workflow</span>
              </HStack>
              <div className="flex gap-1 border-b border-[var(--site-border)] bg-[var(--site-surface)] px-4" aria-label="Explore our capabilities">
                {workflows.map((item, i) => <button key={item.name} type="button" aria-pressed={active === i} onClick={() => setActive(i)}
                  className={`border-b-2 px-3 py-3.5 text-xs font-medium transition-colors ${active === i ? "border-blue-600 text-blue-300" : "border-transparent text-[var(--site-muted)] hover:text-[var(--site-text)]"}`}>{item.name}</button>)}
              </div>
              <div className="p-5 sm:p-7" aria-live="polite">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] !text-blue-400">The ASBAE approach</p>
                <h2 className="mt-2 !font-sans text-xl !font-semibold tracking-tight !text-[var(--site-text)] sm:text-[23px]">{workflow.title}</h2>
                <p className="mt-1 text-xs !text-[var(--site-muted)]">{workflow.subtitle}</p>
                <div className="mt-6 overflow-hidden rounded-lg border border-[var(--site-border)] bg-[var(--site-surface)]">
                  {workflow.rows.map((row, i) => <HStack key={row} className="justify-between gap-3 border-b border-[var(--site-border)] px-4 py-3.5 last:border-0">
                    <HStack className="gap-3"><span className="text-[10px] font-medium tabular-nums text-[var(--site-muted)]">0{i + 1}</span><span className="text-xs font-medium text-[var(--site-text)]">{row}</span></HStack>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-400/10 text-blue-400"><CheckCheck size={12} aria-hidden /></span>
                  </HStack>)}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">{workflow.tags.map(tag => <span key={tag} className="rounded bg-blue-400/10 px-2 py-1 text-[10px] font-medium text-[var(--site-muted)]">{tag}</span>)}</div>
              </div>
              <HStack className="gap-2 border-t border-[var(--site-border)] bg-[var(--site-surface)] px-5 py-3 text-[10px] text-[var(--site-muted)]"><ShieldCheck size={13} className="text-blue-400" aria-hidden /> Clarity at every stage. Control at every handoff.</HStack>
            </Box>
          </FadeContent>
        </div>
        <div className="grid gap-6 border-t border-white/10 py-7 sm:grid-cols-3 sm:gap-8">
          {[
            { icon: FileText, title: "Documentation", text: "Requirements, architecture & compliance" },
            { icon: Layers3, title: "Enterprise platforms", text: "Configurable, connected & scalable" },
            { icon: ShieldCheck, title: "Digital governance", text: "Structured workflows & accountability" },
          ].map(({ icon: Icon, title, text }) => <HStack key={title} className="items-start gap-3"><Icon size={20} className="mt-0.5 shrink-0 text-blue-400" aria-hidden /><div><p className="text-sm font-medium !text-slate-200">{title}</p><p className="mt-1 text-[11px] !text-[var(--site-muted)]">{text}</p></div></HStack>)}
        </div>
      </div>
    </section>
  )
}
