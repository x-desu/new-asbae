import Link from "next/link"
import { Rocket, Building2, Landmark, ArrowUpRight } from "lucide-react"
import { MarketingSection } from "@/components/ui/marketing-section"

const industries = [
  { title: "Startups", description: "Scale with standardized documentation and compliance frameworks designed for growth.", icon: Rocket },
  { title: "IT companies", description: "Streamline project delivery with technical documentation and clear process mapping.", icon: Building2 },
  { title: "Government contractors", description: "Meet tender requirements with audit-ready documentation and security protocols.", icon: Landmark },
]
export default function IndustriesSection() {
  return (
    <MarketingSection id="industries" eyebrow="Who we work with" title="Built around your organization." description="Specialized IT and documentation support for teams that value precision, compliance, and clarity.">
      <div className="grid gap-4 md:grid-cols-3">
        {industries.map(({title,description,icon:Icon}) => <Link href="/services" className="marketing-card group" key={title}>
          <Icon className="marketing-icon" aria-hidden />
          <h3>{title}</h3><p>{description}</p>
          <span className="marketing-link">Explore solutions <ArrowUpRight size={15} aria-hidden /></span>
        </Link>)}
      </div>
    </MarketingSection>
  )
}
