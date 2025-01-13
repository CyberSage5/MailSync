'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "/components/ui/button"
import { ArrowRight, Sparkles, Mail, Zap, Shield, Brain } from 'lucide-react'
import { motion } from 'framer-motion'
import { WaitlistModal } from '/components/waitlist-modal'

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        {/* Beta Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-16"
        >
          <button
            onClick={() => setIsWaitlistOpen(true)}
            className="group inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-violet-100 to-violet-50 hover:from-violet-200 hover:to-violet-100 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-violet-600" />
            <span className="text-sm text-violet-900">Sign up now and be among our first beta testers</span>
            <ArrowRight className="w-4 h-4 text-violet-600 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            A Software that works
            <br />
            specially for you
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Forward important emails to WhatsApp and stay organized on-the-go. MailSync bridges the gap between your email and instant messaging.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8"
            >
              <Link href="/signup" className="inline-flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8"
            >
              <Link href="/about">Learn more</Link>
            </Button>
          </div>
        </motion.section>

        {/* Features Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                icon: Mail, 
                title: 'Email Integration', 
                description: 'Connect multiple email accounts seamlessly' 
              },
              { 
                icon: Zap, 
                title: 'Instant Forwarding', 
                description: 'Get your important emails on WhatsApp instantly' 
              },
              { 
                icon: Shield, 
                title: 'Secure & Private', 
                description: 'End-to-end encryption for all your communications' 
              },
              { 
                icon: Brain, 
                title: 'AI-Powered Filtering', 
                description: 'Smart email prioritization using advanced ML' 
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
              >
                <feature.icon className="h-8 w-8 text-gray-900 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-24 py-16 px-8 rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to streamline your communication?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already using MailSync to stay on top of their email game.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8"
          >
            <Link href="/signup" className="inline-flex items-center">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.section>
        <WaitlistModal 
          isOpen={isWaitlistOpen} 
          onClose={() => setIsWaitlistOpen(false)} 
        />
      </main>
    </div>
  )
}

