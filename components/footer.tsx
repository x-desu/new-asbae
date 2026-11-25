"use client"
import { WordmarkFooter } from "@/components/ui/wordmark-footer"
import FooterPro from "@/components/ui/footer-pro"
import { AsbaeLogoMark } from "@/components/asbae-logo"
import { COMPANY } from "@/lib/company"

function InstagramIcon({className}:{className?:string}) {
 return <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true"><path d="M7 0h10a7 7 0 0 1 7 7v10a7 7 0 0 1-7 7H7a7 7 0 0 1-7-7V7a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H7Zm5 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm6.5-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/></svg>
}
function LinkedinIcon({className}:{className?:string}) {
 return <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
}
export default function Footer() {
 return <div className="asbae-footer-pro">
  <FooterPro
   brandMark={<AsbaeLogoMark className="h-7 w-7" onLight={false}/>}
   brandName="ASBAE"
   description="Enterprise technology. Clear documentation. Better governance."
   brandDetails={<div className="asbae-footer-company"><p>GSTIN {COMPANY.gstin} · LLPIN {COMPANY.llpin}</p><details><summary>Lucknow office</summary><address>D-05, 1st Floor, 5/588 Vikas Khand, Gomti Nagar, Lucknow – 226010, Uttar Pradesh</address></details></div>}
   columns={[
    {title:"Services",links:[{label:"Enterprise platforms",href:"/services#governance"},{label:"Documentation",href:"/services#documentation"},{label:"AI as a Service",href:"/services#ai-services"}]},
    {title:"Company",links:[{label:"About ASBAE",href:"/about"},{label:"Statements & registrations",href:"/statements-and-registrations"}]},
    {title:"Contact",links:[{label:"info@asbaetech.in",href:"mailto:info@asbaetech.in"},{label:"+91 8922900541",href:"https://wa.me/918922900541"}]},
   ]}
   socials={[
    {icon:InstagramIcon,href:"https://www.instagram.com/asbaetech2025/",label:"ASBAE on Instagram"},
    {icon:LinkedinIcon,href:"https://www.linkedin.com/in/asbae-technologies-767209433/",label:"ASBAE LinkedIn profile",text:"Profile"},
    {icon:LinkedinIcon,href:"https://www.linkedin.com/company/asbae-technologies/",label:"ASBAE LinkedIn company page",text:"Company"},
   ]}
   bottomLinks={[{label:"Privacy",href:"/legal/privacy"},{label:"Terms",href:"/legal/terms"},{label:"Cookies",href:"/legal/cookies"},{label:"Sitemap",href:"/sitemap.xml"}]}
   statusText=""
   copyright={`© ${new Date().getFullYear()} ${COMPANY.legalName}. All rights reserved.`}
  />
  <div className="footer-blended-wordmark" aria-hidden="true"><WordmarkFooter brandName="ASBAE"/></div>
 </div>
}
