import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import SupportEmail from "@/components/SupportEmail"

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY environment variable" },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const { name, email, subject, message, company, service, source } = await req.json()
   
    const composedMessage = [
      message,
      "",
      company ? `Company: ${company}` : null,
      service ? `Service: ${service}` : null,
      source ? `Source: ${source}` : null,
    ]
      .filter(Boolean)
      .join("\n")

    const fromAddress = process.env.RESEND_FROM || "Asbae <hello@asbaetech.com>"

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: ["hello@asbaetech.com"],
      // Using the property name you requested
      replyTo: email,
      subject: subject || "New website inquiry",
      react: SupportEmail({ name, email, message: composedMessage, subject: subject || "New website inquiry" }),
    })

    if (error) {
      console.error("Resend send error:", error)
      return NextResponse.json({ error: error.message || error }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error: any) {
    console.error("/api/email unexpected error:", error)
    return NextResponse.json({ error: error?.message || "Failed to send email" }, { status: 500 })
  }
}
