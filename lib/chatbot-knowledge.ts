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
    id: "documentation",
    label: "Documentation Service",
    message: "Tell me about your Documentation Service",
  },
  {
    id: "governance",
    label: "Governance Solutions",
    message: "What are your Unified Governance Solutions?",
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
      "Hello! I'm ASBAE Tech's AI assistant, integrated right here on our website. I can help you with information about our Documentation Service, Unified Governance Solutions, IT solutions, or connect you with our team. What would you like to know?",
    category: "greeting",
  },
  {
    keywords: ["contact info", "contact details", "how to contact", "email", "phone"],
    response:
      "You can contact ASBAE Tech:\n📧 Email: hello@asbaetech.com\n📞 Phone: +91 97534 98392 or +91 80751 98043\n🌍 Based in India\n\nWould you like me to help you schedule a consultation or have specific questions about our Documentation or Governance services?",
    category: "contact",
  },
  {
    keywords: ["documentation", "documentation service", "enterprise documentation"],
    response:
      "Our Documentation Service is our flagship offering that provides:\n\n📋 **Enterprise-grade IT Documentation**\n• Comprehensive system documentation\n• Process documentation\n• Technical manuals\n• API documentation\n• User guides\n\n🎯 **Benefits**\n• Streamlined operations\n• Improved knowledge sharing\n• Reduced onboarding time\n• Better compliance management\n\nPerfect for growing businesses that need professional documentation without the overhead of maintaining an in-house team. Would you like to discuss your documentation needs?",
    category: "services",
  },
  {
    keywords: ["services", "what do you do", "offerings", "solutions"],
    response:
      "ASBAE Tech provides comprehensive IT and documentation solutions:\n\n🔹 **Documentation Service**\nEnterprise-grade IT documentation services for streamlined operations.\n\n🔹 **Unified Governance Solutions**\nUnified governance and compliance solutions for businesses.\n\n🔹 **Additional Services**\n• Tender & RFP Documentation\n• Technical Writing & Case Studies\n• IT Consulting\n• Web Development\n• Mobile Applications\n• Cloud Solutions\n• Database Management\n• Cybersecurity\n\nWhich service interests you most?",
    category: "services",
  },
  {
    keywords: ["governance", "unified governance", "governance solutions", "compliance", "governance"],
    response:
      "Our Unified Governance Solutions help businesses with:\n\n🔐 **Unified Governance & Compliance**\n• Centralized policy management\n• Compliance tracking\n• Risk assessment\n• Audit trail management\n• Regulatory compliance\n\n📊 **Key Features**\n• Real-time monitoring\n• Automated reporting\n• Custom workflows\n• Integration with existing systems\n\nIdeal for organizations needing to maintain compliance across multiple regulations and standards. Want to learn how our Governance Solutions can help your business?",
    category: "services",
  },
  {
    keywords: ["consultation", "meeting", "schedule", "appointment", "demo"],
    response:
      "Yes! We offer free consultations to discuss your Documentation, Governance, or other IT needs. You can:\n• Fill out our contact form on this website\n• Call us at +91 97534 98392 or +91 80751 98043\n• Email hello@asbaetech.com\n\nOur team will get back to you within 24 hours to schedule a convenient time for a 1:1 consultation about your specific requirements.",
    category: "consultation",
  },
  {
    keywords: ["about", "company", "team", "who are you", "asbae"],
    response:
      "ASBAE Tech is an innovative IT solutions company specializing in:\n\n🎯 **Core Focus Areas**\n• Documentation Service\n• Unified Governance Solutions\n• Enterprise IT Solutions\n\n🌍 **Based in India**, we help businesses streamline operations, ensure compliance, and improve documentation quality. Our team combines technical expertise with business understanding to deliver solutions that drive real results.\n\nLearn more about our services or schedule a consultation to see how we can help your business.",
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
