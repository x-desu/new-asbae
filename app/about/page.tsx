"use client"

import { motion } from "framer-motion"
import { Sparkles, Users, Target, BarChart, Zap, Shield } from "lucide-react"
import { Accordion } from "@/components/about/accordion"
import Header from "@/components/header"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "/team/alex-johnson.jpg",
    bio: "10+ years in AI and machine learning. Former AI researcher at Google Brain.",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "/team/sarah-chen.jpg",
    bio: "Expert in cloud infrastructure and distributed systems. Built scalable platforms at AWS.",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Product",
    image: "/team/michael-rodriguez.jpg",
    bio: "Product leader with experience at multiple successful AI startups.",
  },
  {
    name: "Emily Park",
    role: "Lead ML Engineer",
    image: "/team/emily-park.jpg",
    bio: "Specializes in natural language processing and neural networks.",
  },
]

const values = [
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Innovation",
    description: "We push boundaries and challenge the status quo to create breakthrough AI solutions.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Collaboration",
    description: "We believe the best results come from working together and sharing knowledge.",
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Integrity",
    description: "We're committed to ethical AI practices and transparent operations.",
  },
  {
    icon: <BarChart className="w-6 h-6 text-primary" />,
    title: "Excellence",
    description: "We strive for the highest quality in everything we build and deliver.",
  },
]

const faqItems = [
  {
    title: "What makes your AI different from others?",
    content:
      "Our AI is built on proprietary algorithms that prioritize both performance and ethical considerations. We focus on explainable AI that delivers transparent and auditable results.",
  },
  {
    title: "How do you ensure data privacy?",
    content:
      "We implement enterprise-grade security measures including end-to-end encryption, regular security audits, and strict access controls to protect your data.",
  },
  {
    title: "What industries do you serve?",
    content:
      "Our solutions are versatile and can be applied across various industries including healthcare, finance, e-commerce, and more.",
  },
  {
    title: "How can I get started?",
    content:
      "Getting started is easy! Simply sign up for a free trial and our team will guide you through the onboarding process.",
  },
]

export default function AboutPage() {
  return (
    <div>
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-10 bottom-0 h-56 w-56 rounded-full bg-foreground/10 blur-3xl" />
          </div>
          {/* end glow */}
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                <span>About Our Journey</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground mb-6"
              >
                Building the Future of AI Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10"
              >
                We're on a mission to democratize AI technology and make it accessible to businesses of all sizes. Our
                team of experts is dedicated to creating innovative solutions that drive real results.
              </motion.p>

              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="glassmorphic backdrop-blur-xl border border-white/10 ring-1 ring-primary/20 p-8 rounded-3xl">
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { number: "10K+", label: "Active Users" },
                      { number: "50+", label: "Countries Served" },
                      { number: "99.9%", label: "Uptime" },
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                        <div className="text-foreground/70">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 bg-gradient-to-b from-background to-foreground/5 relative">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-6 top-10 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          </div>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                A diverse group of passionate individuals dedicated to pushing the boundaries of AI technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="glassmorphic backdrop-blur-xl border border-white/10 ring-1 ring-primary/15 hover:ring-primary/30 transition-shadow p-6 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full bg-foreground/10 mb-4 mx-auto"
                  />
                  <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                  <p className="text-primary text-center mb-3">{member.role}</p>
                  <p className="text-foreground/70 text-center">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section id="mission" className="py-16 relative">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-0 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
                <p className="text-foreground/70">
                  We're on a mission to make AI accessible and beneficial for everyone, guided by our core values.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  className="glassmorphic backdrop-blur-xl border border-white/10 ring-1 ring-primary/20 p-8 rounded-2xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-foreground/80 mb-6">
                    To democratize AI technology and empower businesses of all sizes to leverage cutting-edge artificial
                    intelligence to solve complex problems and drive innovation.
                  </p>
                  <div className="h-px bg-foreground/10 my-6"></div>
                  <h4 className="text-lg font-semibold mb-3">Our Vision</h4>
                  <p className="text-foreground/70">
                    We envision a future where AI is an accessible and trusted partner in every organization's journey
                    towards digital transformation and success.
                  </p>
                </motion.div>

                <div className="space-y-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      className="glassmorphic backdrop-blur-xl border border-white/10 ring-1 ring-primary/15 p-6 rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">{value.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{value.title}</h3>
                          <p className="text-foreground/70">{value.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-gradient-to-b from-foreground/5 to-background relative">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute right-1/4 bottom-0 h-60 w-60 rounded-full bg-primary/15 blur-3xl" />
          </div>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Find answers to common questions about our platform and services.
              </p>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto glassmorphic backdrop-blur-xl border border-white/10 ring-1 ring-primary/20 p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Accordion items={faqItems} />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
