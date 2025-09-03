"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
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
                <Shield className="w-8 h-8 text-primary mr-3" />
                <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
              </div>
              <p className="text-foreground/80 mb-8">Last updated: September 2, 2025</p>
              
              <div className="prose prose-invert max-w-none">
                <h2>1. Information We Collect</h2>
                <p>
                  We collect several types of information from and about users of our Services, including:
                </p>
                <ul>
                  <li>Personal identification information (name, email address, etc.)</li>
                  <li>Usage data and analytics</li>
                  <li>Cookies and tracking technologies</li>
                </ul>
                
                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect for various purposes, including:</p>
                <ul>
                  <li>To provide and maintain our Services</li>
                  <li>To notify you about changes to our Services</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information to improve our Services</li>
                  <li>To monitor the usage of our Services</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
                
                <h2>3. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect the security of your personal information. However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
                </p>
                
                <h2>4. Your Data Protection Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access, update, or delete your personal information</li>
                  <li>Rectify any inaccurate or incomplete data</li>
                  <li>Object to our processing of your personal data</li>
                  <li>Request the restriction of processing your personal information</li>
                  <li>Request data portability</li>
                  <li>Withdraw your consent at any time</li>
                </ul>
                
                <h2>5. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>
                
                <h2>6. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at privacy@asbae.com.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
