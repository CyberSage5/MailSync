'use client'

import { motion } from 'framer-motion'

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-8">Last updated: January 13, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using MailSync, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p className="text-gray-600">
                MailSync provides an email forwarding service that connects your email account to WhatsApp. We reserve the right to modify, suspend, or discontinue any part of the service at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">You agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate account information</li>
                <li>Maintain the security of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not misuse or abuse the service</li>
              </ul>
            </section>

            {/* Additional sections would continue here */}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

