export interface QuickOption {
  id: string
  label: string
  message: string
}

export interface KnowledgeItem {
  keywords: string[]
  response: string
  category: string
}

export const quickOptions: QuickOption[] = [
  {
    id: "services",
    label: "Our Services",
    message: "What services does ASBAE Tech offer?",
  },
  {
    id: "pricing",
    label: "Pricing Info",
    message: "How much do your services cost?",
  },
  {
    id: "contact",
    label: "Contact Us",
    message: "How can I contact ASBAE Tech?",
  },
  {
    id: "consultation",
    label: "Free Consultation",
    message: "Can I schedule a free consultation?",
  },
]

export const knowledgeBase: KnowledgeItem[] = [
  {
    keywords: ["hello", "hi", "hey"],
    response:
      "Hello! I'm ASBAE Tech's AI assistant, integrated right here on our website. I can help you with information about our software development services, IT solutions, pricing, or connect you with our team in India. What would you like to know?",
    category: "greeting",
  },
  {
    keywords: ["contact info", "contact details", "how to contact", "email", "phone"],
    response:
      "You can contact ASBAE Tech:\n📧 Email: hello@asbaetech.com\n📞 Phone: +91 97534 98392 or +91 80751 98043\n🌍 Based in India\n\nWould you like me to help you schedule a consultation or have specific questions about our services?",
    category: "contact",
  },
  {
    keywords: ["basic pricing", "general pricing", "cost", "price"],
    response:
      "As a growing startup, we offer competitive pricing with free consultations and custom quotes based on your specific needs. Our India-based team provides cost-effective solutions without compromising quality. Would you like to schedule a consultation to discuss your project?",
    category: "pricing",
  },
  {
    keywords: ["services", "what do you do", "offerings", "solutions"],
    response:
      "ASBAE Tech provides comprehensive software and IT solutions:\n• Custom Software Development (Web & Mobile)\n• IT Infrastructure & Cloud Solutions\n• Database Design & Management\n• API Development & Integration\n• DevOps & Automation\n• Cybersecurity Solutions\n• Technical Consulting\n\nAs a startup, we focus on delivering innovative solutions tailored to your business needs. Which service interests you most?",
    category: "services",
  },
  {
    keywords: ["consultation", "meeting", "schedule", "appointment", "demo"],
    response:
      "Yes! We offer free consultations to discuss your project needs. You can:\n• Fill out our contact form on this website\n• Call us at +91 97534 98392 or +91 80751 98043\n• Email hello@asbaetech.com\n\nOur India-based team will get back to you within 24 hours to schedule a convenient time for a 1:1 consultation.",
    category: "consultation",
  },
  {
    keywords: ["about", "company", "team", "who are you", "asbae", "startup"],
    response:
      "ASBAE Tech is an innovative software and IT solutions startup based in India. We specialize in helping businesses transform through technology with custom software development, cloud solutions, and technical consulting. As a growing company, we're passionate about delivering cutting-edge solutions with personalized service and competitive pricing.",
    category: "about",
  },
]

export function getSiteContext(): string {
  if (typeof window === "undefined") return ""

  const currentSection = window.location.hash || "#home"
  const scrollPosition = window.scrollY

  let context = "User is currently on the ASBAE Tech website"

  // Detect current section based on scroll position or hash
  if (currentSection.includes("#services") || (scrollPosition > 800 && scrollPosition < 1600)) {
    context +=
      " viewing our Services section (Custom Software Development, IT Infrastructure, Database Management, etc.)"
  } else if (currentSection.includes("#products") || (scrollPosition > 1600 && scrollPosition < 2400)) {
    context += " viewing our Products section (Analytics Dashboard, Team Management Platform, E-commerce Solutions)"
  } else if (currentSection.includes("#reviews") || (scrollPosition > 2400 && scrollPosition < 3200)) {
    context += " viewing our Client Reviews and testimonials section"
  } else if (currentSection.includes("#contact") || scrollPosition > 3200) {
    context += " viewing our Contact section with consultation booking options"
  } else if (currentSection.includes("#demo")) {
    context += " viewing our Demo section with interactive product demonstrations"
  } else {
    context += " on our homepage with hero section showcasing our 'All In One Software System'"
  }

  return context + ". "
}

export function findKnowledgeResponse(message: string): string | null {
  const lowerMessage = message.toLowerCase().trim()

  for (const item of knowledgeBase) {
    // Only match if the message is very simple and matches exactly
    if (item.keywords.some((keyword) => lowerMessage === keyword || lowerMessage.startsWith(keyword + " "))) {
      return item.response
    }
  }

  if (lowerMessage === "hi" || lowerMessage === "hello" || lowerMessage === "hey") {
    return "Hello! I'm ASBAE Tech's AI assistant, integrated right here on our website. I can help you with information about our software development services, IT solutions, pricing, or connect you with our team in India. What would you like to know?"
  }

  return null
}

export function isGreeting(message: string): boolean {
  const greetingKeywords = ["hello", "hi", "hey"]
  const lowerMessage = message.toLowerCase()
  return greetingKeywords.some((keyword) => lowerMessage.includes(keyword))
}
