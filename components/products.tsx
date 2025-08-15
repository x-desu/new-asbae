"use client"

import React from "react"

import { useState } from "react"
import { Layers, BarChart3, Users, ShoppingCart, Calendar, ArrowRight, Star, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(0)

  const products = [
    {
      icon: BarChart3,
      name: "Analytics Pro",
      description: "Advanced business analytics and reporting platform",
      features: ["Real-time Dashboards", "Custom Reports", "Data Visualization", "API Integration"],
      rating: 4.9,
      downloads: "10K+",
      image: "/analytics-dashboard.png",
    },
    {
      icon: Users,
      name: "Team Manager",
      description: "Complete team collaboration and project management solution",
      features: ["Project Tracking", "Team Chat", "File Sharing", "Time Tracking"],
      rating: 4.8,
      downloads: "25K+",
      image: "/team-management-interface.png",
    },
    {
      icon: ShoppingCart,
      name: "E-Commerce Suite",
      description: "Full-featured e-commerce platform for modern businesses",
      features: ["Online Store", "Payment Processing", "Inventory Management", "Marketing Tools"],
      rating: 4.9,
      downloads: "5K+",
      image: "/ecommerce-platform-interface.png",
    },
    {
      icon: Calendar,
      name: "Schedule Master",
      description: "Smart scheduling and appointment management system",
      features: ["Online Booking", "Calendar Sync", "Automated Reminders", "Client Portal"],
      rating: 4.7,
      downloads: "15K+",
      image: "/scheduling-calendar-interface.png",
    },
  ]

  const scrollToDemo = () => {
    const demoSection = document.getElementById("demo")
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="products" className="products-section py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="neomorphic bg-accent/10 text-accent border-accent/20">Our Products</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold">Ready-to-Use Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Powerful software products designed to streamline your business operations and boost productivity from day
            one.
          </p>
        </div>

        {/* Products Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Product List */}
          <div className="space-y-6">
            {products.map((product, index) => (
              <div
                key={index}
                className={`product-card neomorphic rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  activeProduct === index ? "ring-2 ring-accent/50 scale-105" : "hover:scale-102"
                }`}
                onClick={() => setActiveProduct(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl glassmorphic text-accent">
                    <product.icon className="h-6 w-6" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-serif font-semibold">{product.name}</h3>
                    </div>

                    <p className="text-muted-foreground">{product.description}</p>

                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span>{product.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4 text-muted-foreground" />
                        <span>{product.downloads}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 2).map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {product.features.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{product.features.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Product Preview */}
          <div className="product-preview neomorphic rounded-3xl p-8">
            <div className="space-y-6">
              <div className="aspect-video rounded-2xl overflow-hidden glassmorphic">
                <img
                  src={products[activeProduct].image || "/placeholder.svg"}
                  alt={products[activeProduct].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  {React.createElement(products[activeProduct].icon, { className: "h-8 w-8 text-accent" })}
                  <h3 className="text-2xl font-serif font-bold">{products[activeProduct].name}</h3>
                </div>

                <p className="text-muted-foreground">{products[activeProduct].description}</p>

                <div className="grid grid-cols-2 gap-3">
                  {products[activeProduct].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button
                    onClick={scrollToDemo}
                    className="neomorphic-button bg-accent text-accent-foreground hover:bg-accent/90 flex-1"
                  >
                    Try Free Demo
                  </Button>
                  <Button variant="outline" onClick={scrollToContact} className="neomorphic-button bg-transparent">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="neomorphic rounded-3xl p-8 lg:p-12 text-center bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="space-y-6">
            <Layers className="h-16 w-16 text-primary mx-auto" />
            <h3 className="text-2xl lg:text-3xl font-serif font-bold">Need Custom Solutions?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our products can be customized and white-labeled for enterprise clients. Get dedicated support and custom
              features tailored to your business needs.
            </p>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="neomorphic-button bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contact Enterprise Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
