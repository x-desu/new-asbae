"use client"

import { useState } from "react"
import { Play, Monitor, Smartphone, Tablet, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export default function DemoSection() {
  const [selectedDemo, setSelectedDemo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const demos = [
    {
      title: "Analytics Pro Demo",
      description: "See how our analytics platform transforms your business data into actionable insights",
      duration: "3 min",
      features: ["Real-time dashboards", "Custom reports", "Data visualization"],
      thumbnail: "/analytics-dashboard-demo.png",
    },
    {
      title: "Team Manager Demo",
      description: "Experience seamless team collaboration and project management",
      duration: "4 min",
      features: ["Project tracking", "Team collaboration", "Time management"],
      thumbnail: "/team-management-demo.png",
    },
    {
      title: "E-Commerce Suite Demo",
      description: "Discover how to build and manage your online store effortlessly",
      duration: "5 min",
      features: ["Store setup", "Payment processing", "Inventory management"],
      thumbnail: "/ecommerce-platform-demo.png",
    },
  ]

  const handlePlayDemo = () => {
    setIsPlaying(true)
    // In a real implementation, this would start the demo video/interactive tour
    setTimeout(() => setIsPlaying(false), 3000) // Simulate demo completion
  }

  const requestPersonalDemo = () => {
    const subject = encodeURIComponent(`Personal Demo Request - ${demos[selectedDemo].title}`)
    const body = encodeURIComponent(`Hi ASBAE Tech team,

I'm interested in scheduling a personal demo for ${demos[selectedDemo].title}.

Please let me know your available time slots for a 1:1 demonstration.

Best regards`)

    window.open(`mailto:hello@asbaetech.com?subject=${subject}&body=${body}`)
  }

  return (
    <section id="demo" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="neomorphic bg-primary/10 text-primary border-primary/20">Interactive Demos</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold">Experience Our Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Try our products with interactive demos or schedule a personalized 1:1 demonstration with our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Demo Selection */}
          <div className="lg:col-span-1 space-y-4">
            {demos.map((demo, index) => (
              <Card
                key={index}
                className={`neomorphic p-6 cursor-pointer transition-all duration-300 ${
                  selectedDemo === index ? "ring-2 ring-primary/50 scale-105" : "hover:scale-102"
                }`}
                onClick={() => setSelectedDemo(index)}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-semibold">{demo.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {demo.duration}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{demo.description}</p>
                  <div className="space-y-1">
                    {demo.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-primary" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Demo Player */}
          <div className="lg:col-span-2">
            <Card className="neomorphic p-8">
              <div className="space-y-6">
                <div className="aspect-video rounded-2xl overflow-hidden glassmorphic relative">
                  <img
                    src={demos[selectedDemo].thumbnail || "/placeholder.svg"}
                    alt={demos[selectedDemo].title}
                    className="w-full h-full object-cover"
                  />
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                      <Button
                        size="lg"
                        onClick={handlePlayDemo}
                        className="neomorphic-button bg-primary text-primary-foreground hover:bg-primary/90 rounded-full p-6"
                      >
                        <Play className="h-8 w-8 ml-1" />
                      </Button>
                    </div>
                  )}
                  {isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/10 backdrop-blur-sm">
                      <div className="text-center space-y-4">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                        <p className="text-primary font-medium">Loading Demo...</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold">{demos[selectedDemo].title}</h3>
                  <p className="text-muted-foreground">{demos[selectedDemo].description}</p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={handlePlayDemo}
                      className="neomorphic-button bg-primary text-primary-foreground hover:bg-primary/90 flex-1"
                      disabled={isPlaying}
                    >
                      <Play className="mr-2 h-4 w-4" />
                      {isPlaying ? "Playing Demo..." : "Start Interactive Demo"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={requestPersonalDemo}
                      className="neomorphic-button bg-transparent flex-1"
                    >
                      Schedule 1:1 Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Device Preview Options */}
        <div className="neomorphic rounded-3xl p-8 text-center">
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-bold">View on Different Devices</h3>
            <div className="flex justify-center space-x-6">
              <Button variant="outline" className="neomorphic-button bg-transparent">
                <Monitor className="mr-2 h-4 w-4" />
                Desktop
              </Button>
              <Button variant="outline" className="neomorphic-button bg-transparent">
                <Tablet className="mr-2 h-4 w-4" />
                Tablet
              </Button>
              <Button variant="outline" className="neomorphic-button bg-transparent">
                <Smartphone className="mr-2 h-4 w-4" />
                Mobile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
