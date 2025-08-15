"use client"

import { useState } from "react"
import { Code, Smartphone, Cloud, Settings, Database, Shield, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Modern web applications built with React, Next.js, and cutting-edge technologies for Indian businesses.",
      features: ["React/Next.js", "TypeScript", "Responsive Design", "SEO Optimized"],
      color: "text-primary",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps designed for the Indian market and global reach.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
      color: "text-accent",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services optimized for Indian businesses.",
      features: ["AWS/Azure/GCP", "DevOps", "Microservices", "Auto-scaling"],
      color: "text-primary",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Efficient database design and management solutions for growing Indian startups.",
      features: ["PostgreSQL", "MongoDB", "Redis", "Data Migration"],
      color: "text-accent",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business in the digital landscape.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "24/7 Monitoring"],
      color: "text-primary",
    },
    {
      icon: Settings,
      title: "IT Consulting",
      description: "Strategic IT consulting to help Indian businesses embrace digital transformation.",
      features: ["Digital Strategy", "Tech Stack Selection", "Process Optimization", "Team Training"],
      color: "text-accent",
    },
  ]

  return (
    <section id="services" className="services-section py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5 parallax-bg" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="neomorphic bg-primary/10 text-primary border-primary/20">Our Services</Badge>
          <h2 className="services-title text-3xl sm:text-4xl lg:text-5xl font-serif font-bold">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From web development to cloud infrastructure, we provide end-to-end technology solutions that drive business
            growth and digital transformation for Indian companies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card neomorphic rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:scale-105 ${
                activeService === index ? "ring-2 ring-primary/50" : ""
              }`}
              onMouseEnter={() => setActiveService(index)}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`service-icon p-3 rounded-xl glassmorphic ${service.color}`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold">{service.title}</h3>
                </div>

                <p className="text-muted-foreground">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="service-feature flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="group p-0 h-auto">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="neomorphic rounded-3xl p-8 lg:p-12 text-center">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold">Ready to Transform Your Business?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your technology goals and accelerate your startup's
              growth in the Indian market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="neomorphic-button bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="#contact">Get Free Consultation</a>
              </Button>
              <Button size="lg" variant="outline" className="neomorphic-button bg-transparent" asChild>
                <a href="#contact">View Our Work</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
