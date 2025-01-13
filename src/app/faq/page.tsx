'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"

const faqs = [
  {
    question: "What is MailSync?",
    answer: "MailSync is an innovative platform that connects your email to WhatsApp, allowing you to receive and manage important emails directly through WhatsApp messages."
  },
  {
    question: "How does the email forwarding work?",
    answer: "Once you connect your email account, MailSync uses AI to identify important emails and automatically forwards them to your WhatsApp. You can customize the filtering rules to ensure you only receive the messages that matter most."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, absolutely. We use end-to-end encryption and follow strict security protocols. We never store your email content, and all data transmission is encrypted using industry-standard methods."
  },
  {
    question: "Which email providers do you support?",
    answer: "Currently, we support Gmail, with plans to add support for Outlook, Yahoo, and other major email providers in the near future."
  },
  {
    question: "How do I set up MailSync?",
    answer: "Setup is simple: just create an account, connect your email, link your WhatsApp, and customize your forwarding preferences. The whole process takes less than 5 minutes."
  },
  {
    question: "Can I customize which emails get forwarded?",
    answer: "Yes! You can set up custom filters based on sender, subject, content, and more. Our AI also learns from your preferences over time."
  },
  {
    question: "What happens if I receive too many emails?",
    answer: "You're in control. You can set daily limits, pause forwarding, or adjust your filters at any time to manage the flow of messages."
  },
  {
    question: "Is there a limit to how many emails can be forwarded?",
    answer: "Limits vary by plan. Free users can forward up to 100 emails per month, while premium users get up to 1,000 or unlimited forwards depending on their subscription."
  },
  {
    question: "Can I reply to emails through WhatsApp?",
    answer: "Yes! Premium users can reply to emails directly through WhatsApp, making it easy to stay responsive on the go."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial of our Premium features so you can experience the full potential of MailSync before committing."
  }
]

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Everything you need to know about MailSync</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  )
}

