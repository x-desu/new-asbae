import InnerPage, { InnerCTA } from "@/components/inner-page"
import { Clock, CheckCircle2, Briefcase, Code2, FileSearch, Smartphone, Map, Zap, Workflow, BarChart3, FileText, Users, Shield } from "lucide-react"
const UGS_SERVICES = [
    {
        title: "Identity & Access Control",
        description: "Enterprise-grade security framework with Role-Based Access Control and Single Sign-On.",
        icon: <Shield className="w-8 h-8 text-blue-400" />,
        features: ["Role-Based Access Control", "Single Sign-On", "Multi-Factor Authentication", "Audit Logs"],
        gradient: "from-blue-500/20 to-transparent"
    },
    {
        title: "Workflow & Process Automation",
        description: "Digitize and control complex approval processes.",
        icon: <Workflow className="w-8 h-8 text-indigo-400" />,
        features: ["Multi-Level Workflows", "SLA Monitoring", "Conditional Routing"],
        gradient: "from-indigo-500/20 to-transparent"
    },
    {
        title: "Reporting & Executive Analytics",
        description: "Real-time performance intelligence and dashboards.",
        icon: <BarChart3 className="w-8 h-8 text-sky-400" />,
        features: ["KPI Monitoring", "Custom Report Builder", "Scheduled Delivery"],
        gradient: "from-sky-500/20 to-transparent"
    },
    {
        title: "Communication & Notification",
        description: "Integrated event-driven communication layer.",
        icon: <Zap className="w-8 h-8 text-blue-400" />,
        features: ["Email & SMS", "In-App Alerts", "Bulk Messaging"],
        gradient: "from-blue-600/20 to-transparent"
    },
    {
        title: "Document & Records Management System",
        description: "Governance-focused digital document repository.",
        icon: <FileText className="w-8 h-8 text-indigo-400" />,
        features: ["Version Control", "Metadata Tagging", "Role-Based Access"],
        gradient: "from-indigo-600/20 to-transparent"
    },
    {
        title: "Compliance & Audit Management",
        description: "Standardize and enforce regulatory requirements and audit trails.",
        icon: <Shield className="w-8 h-8 text-emerald-400" />,
        features: ["Compliance Checklists", "Audit Trails", "Regulatory Reporting"],
        gradient: "from-emerald-500/20 to-transparent"
    },
    {
        title: "Stakeholder & Grievance Management",
        description: "Centralized platform for managing stakeholder interactions and issues.",
        icon: <Users className="w-8 h-8 text-blue-400" />,
        features: ["Ticket Tracking", "Public Portal", "Automated Routing"],
        gradient: "from-blue-500/20 to-transparent"
    },
    {
        title: "Inspection & Certification Management",
        description: "Automated inspection workflows and digital certification delivery.",
        icon: <CheckCircle2 className="w-8 h-8 text-indigo-400" />,
        features: ["Field Inspections", "QR Certificates", "Validity Tracking"],
        gradient: "from-indigo-500/20 to-transparent"
    },
    {
        title: "Project & Assets Monitoring",
        description: "Real-time tracking of project health and asset utilization.",
        icon: <Briefcase className="w-8 h-8 text-sky-400" />,
        features: ["Milestone Tracking", "Resource Allocation", "Asset Registry"],
        gradient: "from-sky-500/20 to-transparent"
    },
    {
        title: "Field Data Collection",
        description: "Mobile-first application for offline/online field activities.",
        icon: <Smartphone className="w-8 h-8 text-blue-400" />,
        features: ["Geo-Tagging", "Offline Sync", "Custom Forms"],
        gradient: "from-blue-500/20 to-transparent"
    },
    {
        title: "Executive Dashboard & GIS Mapping",
        description: "Geospatial intelligence for decision-makers.",
        icon: <Map className="w-8 h-8 text-sky-400" />,
        features: ["Layered Mapping", "Spatial Analysis", "Live Data Feeds"],
        gradient: "from-sky-600/20 to-transparent"
    }
];
const ENGAGEMENT_MODELS = [
    {
        title: "Project-Based",
        description: "Fixed-scope documentation or platform implementation for specific project milestones.",
        icon: <CheckCircle2 className="w-8 h-8 text-blue-500" />
    },
    {
        title: "Retainer (Documentation Service)",
        description: "Ongoing documentation support to work as an extension of your delivery team.",
        icon: <Clock className="w-8 h-8 text-indigo-500" />
    },
    {
        title: "Tender Support",
        description: "Specialized assistance for high-stakes government and enterprise bidding cycles.",
        icon: <Zap className="w-8 h-8 text-blue-400" />
    }
];

const DOCUMENTATION_CATEGORIES = [
    {
        title: "Business Documentation",
        icon: <Briefcase className="w-8 h-8 text-blue-400" />,
        items: ["Business Requirement Documents", "Functional Requirement Documents", "Software Requirement Specifications", "Use Cases & User Stories", "Process Flow (BPMN)", "Gap Analysis Documents"]
    },
    {
        title: "Technical Documentation",
        icon: <Code2 className="w-8 h-8 text-indigo-400" />,
        items: ["System Architecture", "API Specifications", "Database Design", "High & Low Level Design"]
    },
    {
        title: "Tender & Bid Support",
        icon: <FileSearch className="w-8 h-8 text-sky-400" />,
        items: ["RFP Response Prep", "Bill of Quantities", "Technical Presentations", "Compliance Matrix"]
    },
    {
        title: "Governance & SOPs",
        icon: <Shield className="w-8 h-8 text-emerald-400" />,
        items: ["Manual of Procedures", "User Training Guides", "Change Management", "Policy Frameworks"]
    }
];

export default function ServicesPage() {
  return <InnerPage eyebrow="OUR SERVICES" title="Connected systems. Clear documentation." description="Enterprise platforms, Documentation as a Service, and governance support built around your organization.">
    <nav className="inner-container inner-section-nav" aria-label="Service categories"><a href="#governance">Governance platforms</a><a href="#documentation">Documentation</a><a href="#engagement">Engagement models</a></nav>
    <section id="governance" className="inner-container inner-section"><div className="inner-section-heading"><span className="saas-eyebrow">01 / UNIFIED GOVERNANCE</span><h2>A clearer way to manage complex operations.</h2><p>Modular, configurable platforms connect secure access, workflows, records, and reporting. Deployment can be planned for cloud, on-premise, or hybrid environments.</p></div><div className="inner-card-grid">{UGS_SERVICES.map(service=><article className="inner-card" key={service.title}><div className="inner-card-icon">{service.icon}</div><h3>{service.title}</h3><p>{service.description}</p><ul>{service.features.map(feature=><li key={feature}>{feature}</li>)}</ul></article>)}</div></section>
    <section id="documentation" className="inner-container inner-section"><div className="inner-section-heading"><span className="saas-eyebrow">02 / DOCUMENTATION AS A SERVICE</span><h2>The structure behind successful delivery.</h2><p>From the first requirement to technical handover, keep business intent and implementation aligned.</p></div><div className="inner-card-grid two-columns">{DOCUMENTATION_CATEGORIES.map(category=><article className="inner-card" key={category.title}><div className="inner-card-icon">{category.icon}</div><h3>{category.title}</h3><ul>{category.items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>
    <section id="engagement" className="inner-container inner-section"><div className="inner-section-heading"><span className="saas-eyebrow">03 / WORKING TOGETHER</span><h2>An engagement that fits your team.</h2></div><div className="inner-card-grid">{ENGAGEMENT_MODELS.map(model=><article className="inner-card" key={model.title}><div className="inner-card-icon">{model.icon}</div><h3>{model.title}</h3><p>{model.description}</p></article>)}</div></section><InnerCTA/>
  </InnerPage>
}
