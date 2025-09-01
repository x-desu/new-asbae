export default function AsbaeInquiryEmail({
  name,
  email,
  company,
  subject,
  message,
  source,
}: {
  name?: string
  email: string
  company?: string
  subject?: string
  message: string
  source?: string
}) {
  const label = { fontSize: 12, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }
  const row = { margin: "8px 0 16px" }

  return (
    <div style={{ background: "#0b1220", padding: 24, color: "white", fontFamily: "Inter, ui-sans-serif, system-ui" }}>
      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          background:
            "linear-gradient(0deg, rgba(255,255,255,0.06), rgba(255,255,255,0.06)) border-box, rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 16,
          padding: 24,
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
          backdropFilter: "blur(8px)",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>New Inquiry — ASBAE Tech</h1>
        <p style={{ marginTop: 8, color: "#cbd5e1" }}>You received a new message from your website contact form.</p>

        <div style={{ ...row }}>
          <div style={label}>From</div>
          <div>
            {name ? `${name} · ` : ""}
            {email}
          </div>
        </div>

        {company ? (
          <div style={{ ...row }}>
            <div style={label}>Company</div>
            <div>{company}</div>
          </div>
        ) : null}

        <div style={{ ...row }}>
          <div style={label}>Subject</div>
          <div>{subject || "Website Inquiry"}</div>
        </div>

        <div style={{ ...row }}>
          <div style={label}>Message</div>
          <div
            style={{
              whiteSpace: "pre-wrap",
              lineHeight: 1.6,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12,
              padding: 16,
            }}
          >
            {message}
          </div>
        </div>

        <div style={{ ...row, color: "#94a3b8", fontSize: 12 }}>
          Source: {source || "website"} · This email was sent via Resend
        </div>
      </div>
    </div>
  )
}
