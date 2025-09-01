import type * as React from "react"

type Props = {
  name: string
  email: string
  subject: string
  message: string
}

export default function SupportEmail({ name, email, subject, message }: Props) {
  const container: React.CSSProperties = {
    backgroundColor: "#0b0f1a",
    color: "#e6ebf5",
    padding: "24px",
    fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
  }
  const card: React.CSSProperties = {
    background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 12,
    padding: 20,
  }
  const label: React.CSSProperties = {
    fontSize: 12,
    color: "rgba(230,235,245,0.75)",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  }
  const value: React.CSSProperties = {
    fontSize: 14,
    color: "#ffffff",
    margin: 0,
    wordBreak: "break-word",
    whiteSpace: "pre-wrap",
  }
  const hr: React.CSSProperties = {
    border: "none",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    margin: "16px 0",
  }

  return (
    <div style={container}>
      <h2 style={{ margin: "0 0 12px", fontSize: 20, color: "#ffffff" }}>New Support Inquiry — ASBAE</h2>
      <div style={card}>
        <div style={{ marginBottom: 12 }}>
          <div style={label}>From</div>
          <p style={value}>
            {name || "Anonymous"} {"<"}
            {email || "no-email-provided@example.com"}
            {">"}
          </p>
        </div>

        <hr style={hr} />

        <div style={{ marginBottom: 12 }}>
          <div style={label}>Subject</div>
          <p style={value}>{subject || "New website inquiry"}</p>
        </div>

        <hr style={hr} />

        <div>
          <div style={label}>Message</div>
          <p style={value}>{message || "(No message provided.)"}</p>
        </div>
      </div>

      <p
        style={{
          marginTop: 16,
          fontSize: 12,
          color: "rgba(230,235,245,0.65)",
        }}
      >
        Tip: You can reply directly to this email to reach the sender. Reply-To has been set to{" "}
        {email || "the submitter"}.
      </p>
    </div>
  )
}
