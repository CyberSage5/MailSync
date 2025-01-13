'use client'

import { motion } from 'framer-motion'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-8">Last updated: January 13, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                At MailSync, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Email address and account credentials</li>
                <li>WhatsApp contact information</li>
                <li>Communication preferences</li>
                <li>Usage data and interaction with our service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide and maintain our service</li>
                <li>Process your email forwarding requests</li>
                <li>Send you important notifications</li>
                <li>Improve and optimize our service</li>
                <li>Protect against fraud and unauthorized access</li>
              </ul>
            </section>

            {/* Additional sections would continue here */}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

