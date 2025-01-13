/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { UserCircle } from 'lucide-react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-8 text-center">About MailSync</h1>
      
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">At MailSync, we aim to simplify email management and enhance productivity for individuals and businesses. We believe that by bridging the gap between email and instant messaging, we can help people stay more organized and responsive in their digital communications.</p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">The Problem We Solve</h2>
        <p className="text-lg mb-4">In today&apos;s digital age, managing multiple communication channels can be overwhelming. Email and WhatsApp are two of the most widely used communication platforms, yet they often exist in isolation. MailSync bridges this gap by forwarding important emails to WhatsApp, ensuring users stay organized and up-to-date without constantly switching between applications.</p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Our Solution</h2>
        <p className="text-lg mb-4">MailSync provides a user-friendly platform for connecting email accounts to WhatsApp. We use advanced natural language processing (NLP) and machine learning algorithms to filter and forward important emails. Users can customize their filtering preferences and receive real-time notifications on their WhatsApp, ensuring they never miss critical information.</p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Company History</h2>
        <p className="text-lg mb-4">Founded in 2023, MailSync was created to address the growing need for efficient email management solutions. Our team of experienced developers and data scientists came together with a shared vision of simplifying digital communication and enhancing productivity for individuals and businesses alike.</p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "John Doe", role: "CEO & Co-founder" },
            { name: "Jane Smith", role: "CTO & Co-founder" },
            { name: "Mike Johnson", role: "Head of Product" },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <UserCircle className="w-24 h-24 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="italic text-lg border-l-4 border-blue-500 pl-4 py-2">
            &quot;MailSync has revolutionized the way I manage my emails. I never miss an important message now, and my productivity has skyrocketed!&quot;
            <footer className="text-right mt-2">- Sarah K., Marketing Manager</footer>
          </blockquote>
          <blockquote className="italic text-lg border-l-4 border-blue-500 pl-4 py-2">
            &quot;As a busy entrepreneur, MailSync has been a game-changer. It&apos;s like having a personal assistant managing my inbox 24/7.&quot;
            <footer className="text-right mt-2">- Alex M., Startup Founder</footer>
          </blockquote>
        </div>
      </section>
    </div>
  )
}

