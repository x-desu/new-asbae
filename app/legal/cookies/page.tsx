"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cookie } from "lucide-react";
import Link from "next/link";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
     

      {/* Content */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glassmorphic p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Cookie className="w-8 h-8 text-primary mr-3" />
                <h1 className="text-3xl md:text-4xl font-bold">Cookie Policy</h1>
              </div>
              <p className="text-foreground/80 mb-8">Last updated: September 2, 2025</p>
              
              <div className="prose prose-invert max-w-none">
                <h2>1. What Are Cookies</h2>
                <p>
                  Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                </p>
                
                <h2>2. How We Use Cookies</h2>
                <p>We use cookies for various purposes including:</p>
                <ul>
                  <li><strong>Essential Cookies:</strong> These are necessary for the website to function and cannot be switched off.</li>
                  <li><strong>Performance Cookies:</strong> These allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
                  <li><strong>Functional Cookies:</strong> These enable the website to provide enhanced functionality and personalization.</li>
                  <li><strong>Targeting Cookies:</strong> These may be set through our site by our advertising partners.</li>
                </ul>
                
                <h2>3. Third-Party Cookies</h2>
                <p>
                  We also use various third-party cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on. These cookies may be used when you share information using a social media sharing button on our website.
                </p>
                
                <h2>4. Your Choices Regarding Cookies</h2>
                <p>
                  You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
                </p>
                
                <h2>5. Changes to This Cookie Policy</h2>
                <p>
                  We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
                </p>
                
                <h2>6. Contact Us</h2>
                <p>
                  If you have any questions about this Cookie Policy, please contact us at privacy@asbae.com.
                </p>
                
                <div className="mt-8 p-4 bg-foreground/5 rounded-lg">
                  <h3 className="font-semibold mb-2">Cookie Preferences</h3>
                  <p className="text-sm text-foreground/70 mb-4">
                    You can manage your cookie preferences by clicking the button below:
                  </p>
                  <Button variant="outline" size="sm">
                    Manage Cookie Preferences
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
