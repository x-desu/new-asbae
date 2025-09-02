"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, Award, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      name: "Rajesh Kumar",
      role: "CTO, TechnoVision Solutions",
      company: "TechnoVision Solutions",
      rating: 5,
      text: "ASBAE Tech transformed our e-commerce platform completely. Their understanding of the Indian market and technical expertise helped us scale from 1000 to 50,000 daily users seamlessly.",
      image: "/indian-professional-man.png",
    },
    {
      name: "Priya Sharma",
      role: "Founder, EduTech India",
      company: "EduTech India",
      rating: 5,
      text: "Working with ASBAE was a game-changer for our EdTech startup. They delivered a robust learning management system that now serves over 10,000 students across India.",
      image: "/indian-professional-woman.png",
    },
    {
      name: "Amit Patel",
      role: "Operations Head, FinServ Mumbai",
      company: "FinServ Mumbai",
      rating: 5,
      text: "Their fintech expertise is exceptional. ASBAE helped us build a secure payment gateway that processes thousands of transactions daily with zero downtime.",
      image: "/indian-business-executive.png",
    },
    {
      name: "Sneha Reddy",
      role: "CEO, HealthCare Plus",
      company: "HealthCare Plus",
      rating: 5,
      text: "ASBAE's team understood our healthcare requirements perfectly. They delivered a HIPAA-compliant telemedicine platform that's now used by 500+ doctors across South India.",
      image: "/indian-healthcare-professional.png",
    },
  ]

  const certifications = [
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "STPI Registered", description: "Software Technology Parks of India" },
    { name: "AWS Partner", description: "Amazon Web Services Partner" },
    { name: "Google Cloud", description: "Google Cloud Partner" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section id="reviews" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="neomorphic bg-primary/10 text-primary border-primary/20">Client Reviews</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold">Trusted by Growing Businesses</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See what our clients say about working with ASBAE Tech and how we've helped Indian startups and businesses
            achieve their digital goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Reviews Carousel */}
          <div className="space-y-8">
            <div className="neomorphic rounded-3xl p-8 lg:p-12 relative">
              <Quote className="h-12 w-12 text-primary/20 absolute top-6 right-6" />

              <div className="space-y-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < reviews[currentReview].rating ? "text-yellow-500 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-lg text-foreground leading-relaxed">"{reviews[currentReview].text}"</p>

                <div className="flex items-center space-x-4">
                  <img
                    src={reviews[currentReview].image || "/placeholder.svg"}
                    alt={reviews[currentReview].name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{reviews[currentReview].name}</div>
                    <div className="text-sm text-muted-foreground">{reviews[currentReview].role}</div>
                    <div className="text-sm text-primary font-medium">{reviews[currentReview].company}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-8 rounded-full transition-all ${
                      index === currentReview ? "bg-primary" : "bg-border"
                    }`}
                    onClick={() => setCurrentReview(index)}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="icon" className="neomorphic-button bg-transparent" onClick={prevReview}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="neomorphic-button bg-transparent" onClick={nextReview}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="neomorphic rounded-2xl p-8">
              <h3 className="text-xl font-serif font-semibold mb-6">Our Track Record</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1+ Years</div>
                  <div className="text-sm text-muted-foreground">In Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="neomorphic rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-serif font-semibold">Certifications & Compliance</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium">{cert.name}</div>
                      <div className="text-sm text-muted-foreground">{cert.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="neomorphic rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-serif font-semibold">Industry Recognition</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Rising Startup Award 2024</span>
                  <Badge variant="secondary">StartupIndia</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Best Tech Innovation 2023</span>
                  <Badge variant="secondary">TechCircle</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Young Entrepreneur Recognition</span>
                  <Badge variant="secondary">NASSCOM</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
