import Link from "next/link"
import { ArrowUpRight, BriefcaseBusiness, Code2, FileCheck2, Layers3 } from "lucide-react"

const services = [
  { icon: BriefcaseBusiness, title: "Business documentation", text: "Turn business goals into requirements your team can act on.", items: "BRD / FRD / SRS · Process flows · User stories" },
  { icon: Code2, title: "Technical documentation", text: "Keep architecture, APIs, and implementation aligned.", items: "System architecture · API guides · Database schemas" },
  { icon: FileCheck2, title: "Tender & compliance", text: "Prepare clear, traceable responses for complex approvals.", items: "RFP responses · Compliance matrices · SOPs & SLAs" },
  { icon: Layers3, title: "Unified governance", text: "Connect people, systems, and decisions on a modular platform.", items: "Access control · Workflow automation · Integration" },
]

export default function HomeServicesOverview() {
  return (
    <section id="services" className="marketing-section">
      <div className="marketing-container">
        <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] !text-blue-400">What we do</p>
            <h2 className="marketing-title">The structure behind your digital ambitions.</h2>
          </div>
          <Link href="/services" className="inline-flex items-center gap-3 text-sm font-medium text-blue-300 hover:text-white">All services <ArrowUpRight size={17} aria-hidden /></Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text, items }, i) => (
            <Link key={title} href="/services" className="marketing-card group">
              <div className="mb-7 flex items-center justify-between"><Icon size={23} className="text-blue-400" aria-hidden /><span className="font-mono text-[10px] text-[var(--site-muted)]">0{i + 1}</span></div>
              <h3 className="!font-sans text-base !font-semibold">{title}</h3>
              <p className="mt-3 min-h-[66px] text-[13px] leading-relaxed !text-[var(--site-muted)]">{text}</p>
              <p className="mt-5 border-t border-white/10 pt-4 text-[10px] leading-relaxed !text-[var(--site-muted)]">{items}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs text-blue-300">Explore <ArrowUpRight size={14} aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
