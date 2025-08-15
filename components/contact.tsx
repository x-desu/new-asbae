"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, Calendar, MessageSquare, CheckCircle } from "lucide-react"
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", company: "", service: "", message: "" })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@asbaetech.com",
      description: "Get in touch via email",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 97534 98392 / +91 80751 98043",
      description: "Mon-Sat 10AM-7PM IST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Bangalore, Karnataka, India",
      description: "Silicon Valley of India",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Sat: 10AM-7PM IST",
      description: "24/7 emergency support available",
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="neomorphic bg-accent/10 text-accent border-accent/20">Get In Touch</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold">Let's Start Your Project</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? Contact us today for a free consultation and
            discover how we can help your Indian business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="neomorphic rounded-3xl p-8 lg:p-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-8">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-serif font-semibold">Send us a message</h3>
              </div>

              {isSubmitted ? (
                <div className="text-center space-y-4 py-12">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto" />
                  <h4 className="text-xl font-semibold">Message Sent Successfully!</h4>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
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
                      <SelectTrigger className="neomorphic border-0">
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

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="neomorphic-button bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
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

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="neomorphic rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl glassmorphic text-primary">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-foreground font-medium">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Schedule Call CTA */}
            <div className="neomorphic rounded-2xl p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-serif font-semibold">Schedule a Call</h3>
                </div>
                <p className="text-muted-foreground">
                  Prefer to talk? We'll send you a personalized consultation proposal via email to discuss your project
                  requirements and schedule a call.
                </p>
                <Button
                  className="neomorphic-button bg-accent text-accent-foreground hover:bg-accent/90 w-full"
                  asChild
                >
                  <a href="mailto:hello@asbaetech.com?subject=Free Consultation Request&body=Hi ASBAE Team,%0D%0A%0D%0AI'm interested in discussing my project requirements. Please send me information about your services and let's schedule a consultation call.%0D%0A%0D%0AThank you!">
                    Request Consultation
                  </a>
                </Button>
              </div>
            </div>

            {/* Response Time */}
            <div className="neomorphic rounded-2xl p-6 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
              <p className="text-sm text-muted-foreground">
                We respond to all inquiries within 4 hours during business hours (10AM-7PM IST), and within 24 hours on
                weekends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
