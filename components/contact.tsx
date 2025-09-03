"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Send, MessageSquare, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Contact() {
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
          source: "contact-section",
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
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (err: any) {
      setError("Something went wrong. Please try again.")
      console.log("[v0] Unexpected client error:", err?.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@asbaetech.com",
      description: "Fastest way to reach the ASBAE team",
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <Badge className="neomorphic bg-accent/10 text-accent border-accent/20">Get In Touch</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold">Contact ASBAE Tech</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We’re an AI-driven software services startup. Tell us about your use‑case—deployment, integrations, or
            custom builds—and we’ll respond quickly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="neomorphic rounded-3xl p-8 lg:p-12 bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-8">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-serif font-semibold">Send us a message</h3>
              </div>

              {isSubmitted ? (
                fallbackMailto ? (
                  <div className="text-center space-y-4 py-12">
                    <Mail className="h-16 w-16 text-primary mx-auto" />
                    <h4 className="text-xl font-semibold">Almost there!</h4>
                    <p className="text-muted-foreground">
                      We couldn’t send automatically. Click the button below to email us with your details.
                    </p>
                    <a
                      href={fallbackMailto}
                      className="inline-flex items-center justify-center rounded-lg px-4 py-2 bg-amber-500 text-black hover:bg-amber-400 shadow-[0_0_30px_rgba(255,193,7,0.25)] hover:shadow-[0_0_40px_rgba(255,193,7,0.4)]"
                    >
                      Open email client
                    </a>
                  </div>
                ) : (
                  <div className="text-center space-y-4 py-12">
                    <CheckCircle className="h-16 w-16 text-primary mx-auto" />
                    <h4 className="text-xl font-semibold">Message Sent Successfully!</h4>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="neomorphic border-0"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address *</label>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="neomorphic border-0"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company Name</label>
                    <Input
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="neomorphic border-0"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Service Interested In</label>
                    <Select onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="neomorphic border-0 bg-white/5 backdrop-blur-sm">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="glassmorphic">
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-apps">Mobile Applications</SelectItem>
                        <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
                        <SelectItem value="database-management">Database Management</SelectItem>
                        <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                        <SelectItem value="it-consulting">IT Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Details *</label>
                    <Textarea
                      placeholder="Tell us about your project requirements, timeline, and budget..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={4}
                      className="neomorphic border-0 resize-none"
                    />
                  </div>

                  {error ? <p className="text-sm text-red-400">{error}</p> : null}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="neomorphic-button w-full bg-amber-500 text-black hover:bg-amber-400 shadow-[0_0_30px_rgba(255,193,7,0.25)] hover:shadow-[0_0_40px_rgba(255,193,7,0.4)]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="neomorphic rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur text-primary">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-foreground font-medium">
                        <a
                          href="mailto:hello@asbaetech.com"
                          className="underline decoration-amber-400/50 hover:text-amber-300"
                        >
                          {info.details}
                        </a>
                      </p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="neomorphic rounded-2xl p-6 text-center bg-white/5 backdrop-blur-xl border border-white/10">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">We’ll get back to you fast</h4>
              <p className="text-sm text-muted-foreground">
                Most emails receive a reply within a few hours—always within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
