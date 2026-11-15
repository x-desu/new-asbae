import type { ReactNode } from "react"

export function MarketingSection({ id, eyebrow, title, description, children }: { id?: string; eyebrow: string; title: string; description?: string; children: ReactNode }) {
  return (
    <section id={id} className="marketing-section">
      <div className="marketing-container">
        <div className="marketing-heading">
          <p className="marketing-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {description && <p className="marketing-description">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
