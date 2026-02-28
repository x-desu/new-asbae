"use client"

import type React from "react"
import { useState } from "react"
import { Send, CheckCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [fallbackMailto, setFallbackMailto] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setFallbackMailto(null)

        if (!formData.email || !formData.message) {
            setError("Please fill your email and a short message.")
            return
        }

        setIsSubmitting(true)
        try {
            const res = await fetch("/api/email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    subject: `Project Inquiry from ${formData.name || "ASBAE website"}`,
                    message: formData.message,
                    source: "contact-page",
                    service: formData.service,
                }),
            })

            const data = await res.json().catch(() => ({}))
            if (!res.ok) {
                const subject = `Project Inquiry from ${formData.name || "ASBAE website"}`
                const body = [
                    `Name: ${formData.name}`,
                    `Email: ${formData.email}`,
                    `Company: ${formData.company || "-"}`,
                    `Service: ${formData.service || "-"}`,
                    "",
                    "Project Details:",
                    formData.message || "-",
                ].join("\n")
                setFallbackMailto(
                    `mailto:hello@asbaetech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
                )
            }

            setIsSubmitted(true)
            setFormData({ name: "", email: "", company: "", service: "", message: "" })
            setTimeout(() => setIsSubmitted(false), 5000)
        } catch (err: any) {
            setError("Something went wrong. Please try again.")
            console.log("[ASBAE] Unexpected client error:", err?.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    if (isSubmitted) {
        if (fallbackMailto) {
            return (
                <div className="text-center space-y-4 py-12 animate-in fade-in zoom-in duration-500">
                    <Mail className="h-16 w-16 text-blue-500 mx-auto" />
                    <h4 className="text-xl font-semibold text-white">Almost there!</h4>
                    <p className="text-muted-foreground">
                        We couldn’t send automatically. Click the button below to email us with your details.
                    </p>
                    <a
                        href={fallbackMailto}
                        className="inline-flex items-center justify-center rounded-full px-8 py-3 bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all"
                    >
                        Open email client
                    </a>
                </div>
            )
        }
        return (
            <div className="text-center space-y-4 py-12 animate-in fade-in zoom-in duration-500">
                <CheckCircle className="h-16 w-16 text-blue-500 mx-auto" />
                <h4 className="text-xl font-semibold text-white">Message Sent Successfully!</h4>
                <p className="text-muted-foreground">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Full Name *</label>
                    <Input
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 rounded-xl focus:ring-blue-500/20"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Email Address *</label>
                    <Input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 rounded-xl focus:ring-blue-500/20"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Company Name</label>
                <Input
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 rounded-xl focus:ring-blue-500/20"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Service Interested In</label>
                <Select onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:ring-blue-500/20">
                        <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0a0a0a] border-white/10 text-white">
                        <SelectItem value="daas">Documentation as a Service (DaaS)</SelectItem>
                        <SelectItem value="ugp">Unified Governance & Compliance (UGP)</SelectItem>
                        <SelectItem value="tender-documentation">Tender & RFP Documentation</SelectItem>
                        <SelectItem value="technical-writing">Technical Writing & Case Studies</SelectItem>
                        <SelectItem value="other">Other Inquiry</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Project Details *</label>
                <Textarea
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl focus:ring-blue-500/20 resize-none"
                />
            </div>

            {error ? <p className="text-sm text-red-400 font-medium">{error}</p> : null}

            <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white hover:bg-blue-500 h-14 rounded-xl text-lg font-semibold shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all group"
            >
                {isSubmitting ? (
                    <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Sending Inquiry…
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </Button>
        </form>
    )
}
