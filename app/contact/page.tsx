import InnerPage from "@/components/inner-page"
import ContactForm from "@/components/contact-form"
import { COMPANY } from "@/lib/company"
export default function ContactPage() {
 return <InnerPage eyebrow="LET’S TALK" title="Tell us what comes next." description="A new platform, clearer documentation, or support for a complex tender. Start with a conversation about your requirements.">
 <section className="inner-container inner-section inner-contact"><div><span className="saas-eyebrow">A DIRECT CONVERSATION</span><h2>Find the right structure for your project.</h2><p>Share your goals, scope, and timeline. Our team will help identify the next step.</p><div className="inner-contact-details"><div><span>Email</span><a href="mailto:info@asbaetech.in">info@asbaetech.in</a></div><div><span>Our office</span><strong>{COMPANY.legalName}</strong><p>D-05, 1st Floor, 5/588 Vikas Khand,<br/>Gomti Nagar, Lucknow – 226010, Uttar Pradesh</p></div></div><ul className="inner-assurances"><li>Documentation as a Service</li><li>Governance platform planning</li><li>RFP and tender support</li><li>Requirements, architecture, and handover</li></ul></div><div className="inner-form-panel"><h2>Project inquiry</h2><p>Tell us a little about your organization and what you need.</p><ContactForm/></div></section>
 </InnerPage>
}
