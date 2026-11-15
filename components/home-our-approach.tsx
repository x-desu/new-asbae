import { Users, ShieldCheck, Layers3, ChartNoAxesCombined } from "lucide-react"
import { MarketingSection } from "@/components/ui/marketing-section"

const approach = [
  { icon: Users, title: "Understand your workflows", description: "Start with your people, requirements, and operational context." },
  { icon: ShieldCheck, title: "Build in governance", description: "Define access, compliance, and accountability from the outset." },
  { icon: Layers3, title: "Design for growth", description: "Connect modular solutions that can evolve with your organization." },
  { icon: ChartNoAxesCombined, title: "Make progress visible", description: "Use reporting, analytics, and KPIs to support better decisions." },
]
export default function HomeOurApproach() {
  return (
    <MarketingSection eyebrow="How we work" title="Considered at every step." description="A consistent approach from understanding your requirements to supporting your next stage of growth.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {approach.map(({icon:Icon,title,description},i) => <article key={title} className="marketing-card"><div className="mb-6 flex items-center justify-between"><Icon className="marketing-icon !mb-0" aria-hidden /><span className="text-xs tabular-nums text-[var(--site-muted)]">0{i+1}</span></div><h3>{title}</h3><p>{description}</p></article>)}
      </div>
    </MarketingSection>
  )
}
