"use client"

import { motion } from "framer-motion"
import { Sparkles, Users, Target, BarChart, Zap, Shield } from "lucide-react"
import { Accordion } from "@/components/about/accordion"
import Header from "@/components/header"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "10+ years in AI and machine learning. Former AI researcher at Google Brain.",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Expert in cloud infrastructure and distributed systems. Built scalable platforms at AWS.",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Product",
    bio: "Product leader with experience at multiple successful AI startups.",
  },
  {
    name: "Emily Park",
    role: "Lead ML Engineer",
    bio: "Specializes in natural language processing and neural networks.",
  },
]

const values = [
  {
    icon: <Zap className="w-6 h-6 text-amber-600" />,
    title: "Innovation",
    description: "We push boundaries and challenge the status quo to create breakthrough AI solutions.",
  },
  {
    icon: <Users className="w-6 h-6 text-amber-600" />,
    title: "Collaboration",
    description: "We believe the best results come from working together and sharing knowledge.",
  },
  {
    icon: <Shield className="w-6 h-6 text-amber-600" />,
    title: "Integrity",
    description: "We're committed to ethical AI practices and transparent operations.",
  },
  {
    icon: <BarChart className="w-6 h-6 text-amber-600" />,
    title: "Excellence",
    description: "We strive for the highest quality in everything we build and deliver.",
  },
]

const faqItems = [
  {
    title: "What makes your AI different from others?",
    content: "Our AI is built on proprietary algorithms that prioritize both performance and ethical considerations. We focus on explainable AI that delivers transparent and auditable results.",
  },
  {
    title: "How do you ensure data privacy?",
    content: "We implement enterprise-grade security measures including end-to-end encryption, regular security audits, and strict access controls to protect your data.",
  },
  {
    title: "What industries do you serve?",
    content: "Our solutions are versatile and can be applied across various industries including healthcare, finance, e-commerce, and more.",
  },
  {
    title: "How can I get started?",
    content: "Getting started is easy! Simply sign up for a free trial and our team will guide you through the onboarding process.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100">
      <Header />
      <div className="pt-20">
        {/* Animated Background Elements */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-80 w-80 rounded-full bg-yellow-300/30 blur-3xl animate-float"></div>
          <div className="absolute right-10 bottom-0 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl animate-float animation-delay-2000"></div>
          <div className="absolute left-20 top-1/4 h-64 w-64 rounded-full bg-orange-300/20 blur-3xl animate-float animation-delay-4000"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d97706' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")] opacity-30"></div>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-amber-100/50 backdrop-blur-sm text-amber-700 text-sm font-medium mb-6 border border-amber-200/50 shadow-sm"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                <span>About Our Journey</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800 mb-6"
              >
                Building the Future of AI Solutions
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-amber-900/80 max-w-2xl mx-auto mb-10"
              >
                We're on a mission to democratize AI technology and make it accessible to businesses of all sizes.
              </motion.p>
              
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white/40 backdrop-blur-lg border border-amber-200/50 p-8 rounded-3xl shadow-lg shadow-amber-100/50">
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { number: '10K+', label: 'Active Users' },
                      { number: '50+', label: 'Countries Served' },
                      { number: '99.9%', label: 'Uptime' },
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-4xl font-bold text-amber-700 mb-2">{stat.number}</div>
                        <div className="text-amber-800/70">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gradient-to-b from-amber-50/70 to-amber-50/30">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">Meet Our Team</h2>
              <p className="text-amber-800/80 max-w-2xl mx-auto">
                A diverse group of passionate individuals dedicated to pushing the boundaries of AI technology.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="bg-white/40 backdrop-blur-lg border border-amber-200/50 p-6 rounded-2xl shadow-lg shadow-amber-100/30 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 mb-4 mx-auto flex items-center justify-center shadow-inner">
                    <span className="text-3xl font-bold text-amber-800">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-center text-amber-900">{member.name}</h3>
                  <p className="text-amber-700 text-center mb-3">{member.role}</p>
                  <p className="text-amber-800/80 text-center text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">Our Mission & Values</h2>
                <p className="text-amber-800/80">
                  We're on a mission to make AI accessible and beneficial for everyone, guided by our core values.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-white/40 backdrop-blur-lg border border-amber-200/50 p-8 rounded-2xl shadow-lg shadow-amber-100/30"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-amber-100/70 flex items-center justify-center mb-6 shadow-inner">
                    <Target className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-amber-900">Our Mission</h3>
                  <p className="text-amber-800/80 mb-6">
                    To democratize AI technology and empower businesses of all sizes to leverage cutting-edge artificial intelligence to solve complex problems and drive innovation.
                  </p>
                  <div className="h-px bg-amber-200/50 my-6"></div>
                  <h4 className="text-lg font-semibold mb-3 text-amber-900">Our Vision</h4>
                  <p className="text-amber-800/70">
                    We envision a future where AI is an accessible and trusted partner in every organization's journey towards digital transformation and success.
                  </p>
                </motion.div>

                <div className="space-y-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      className="bg-white/40 backdrop-blur-lg border border-amber-200/50 p-6 rounded-xl shadow-lg shadow-amber-100/30 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ x: 5 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 p-2 bg-amber-100/50 rounded-lg">
                          {value.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1 text-amber-900">{value.title}</h3>
                          <p className="text-amber-800/70">{value.description}</p>
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
        <section className="py-16 bg-gradient-to-b from-amber-50/50 to-amber-50/10">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">Frequently Asked Questions</h2>
              <p className="text-amber-800/80 max-w-2xl mx-auto">
                Find answers to common questions about our platform and services.
              </p>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto bg-white/40 backdrop-blur-lg border border-amber-200/50 p-8 rounded-2xl shadow-lg shadow-amber-100/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Accordion items={faqItems} />
            </motion.div>
          </div>
        </section>

        {/* Global Styles for Animations */}
        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          .animate-float {
            animation: float 12s ease-in-out infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </div>
    </div>
  )
}
