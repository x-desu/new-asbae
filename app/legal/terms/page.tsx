"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
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
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
              <p className="text-foreground/80 mb-8">Last updated: September 2, 2025</p>
              
              <div className="prose prose-invert max-w-none">
                <h2>1. Introduction</h2>
                <p>
                  Welcome to asbae. These Terms of Service ("Terms") govern your access to and use of our website, products, and services (collectively, the "Services").
                </p>
                
                <h2>2. Account Registration</h2>
                <p>
                  You must be at least 18 years old to use our Services. By creating an account, you represent that you are at least 18 years old and that the information you provide is accurate and complete.
                </p>
                
                <h2>3. Use of Services</h2>
                <p>
                  You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to use our Services:
                </p>
                <ul>
                  <li>In any way that violates any applicable law or regulation</li>
                  <li>To exploit, harm, or attempt to exploit or harm minors</li>
                  <li>To transmit any advertising or promotional material without our prior written consent</li>
                </ul>
                
                <h2>4. Intellectual Property</h2>
                <p>
                  The Services and their entire contents, features, and functionality are owned by asbae, its licensors, or other providers of such material and are protected by intellectual property laws.
                </p>
                
                <h2>5. Limitation of Liability</h2>
                <p>
                  In no event will asbae, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind arising out of or in connection with your use of the Services.
                </p>
                
                <h2>6. Changes to Terms</h2>
                <p>
                  We may revise and update these Terms from time to time. All changes are effective immediately when we post them.
                </p>
                
                <h2>7. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at legal@asbae.com.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
