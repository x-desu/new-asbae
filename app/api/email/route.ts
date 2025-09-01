import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import SupportEmail from "@/components/SupportEmail"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    const { data, error } = await resend.emails.send({
      // NOTE: keep this "from" aligned with a verified sender on Resend for deliverability
      from: "Asbae<hello@asbaetech.com>",
      to: ["hello@asbaetech.com"],
      // Using the property name you requested
      replyTo: email,
      subject: subject || "New website inquiry",
      react: SupportEmail({ name, email, message, subject: subject || "New website inquiry" }),
    })

    if (error) {
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || "Failed to send email" }, { status: 500 })
  }
}
