import { ShieldCheck, Layers3, Activity } from "lucide-react"
import { MarketingSection } from "@/components/ui/marketing-section"

const values = [
  { title: "Compliance-ready", description: "Tender-aligned documentation built around internal and external governance standards.", icon: ShieldCheck },
  { title: "Room to scale", description: "Documentation expertise that grows with your delivery needs and project throughput.", icon: Layers3 },
  { title: "Governance-grade", description: "Structured outputs that support project clarity, control, and long-term maintainability.", icon: Activity },
]
export default function ValuesSection() {
  return (
    <MarketingSection id="values" eyebrow="What guides us" title="Clarity is a working principle." description="We bridge technical complexity and organizational understanding through a structured methodology, audit-ready outputs, and expert-led delivery.">
      <div className="grid gap-4 md:grid-cols-3">
        {values.map(({title,description,icon:Icon}) => <article className="marketing-card" key={title}><Icon className="marketing-icon" aria-hidden /><h3>{title}</h3><p>{description}</p></article>)}
      </div>
    </MarketingSection>
  )
}
