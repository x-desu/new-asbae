import { Target, Eye } from "lucide-react"
import { MarketingSection } from "@/components/ui/marketing-section"

export default function HomeMissionVision() {
  return (
    <MarketingSection eyebrow="Our purpose" title="A clear vision. A practical mission.">
      <div className="grid gap-4 md:grid-cols-2">
        <article className="marketing-card"><Target className="marketing-icon" aria-hidden /><h3>Our mission</h3><p>To empower enterprises and organizations with intelligent, secure, and scalable IT solutions that streamline workflows, enhance decision-making, and deliver seamless digital experiences.</p></article>
        <article className="marketing-card"><Eye className="marketing-icon" aria-hidden /><h3>Our vision</h3><p>To become a leading provider of integrated IT, SaaS, and cloud solutions, enabling a future-ready, data-driven, and digitally secure ecosystem across sectors.</p></article>
      </div>
    </MarketingSection>
  )
}
