'use client'

import { CheckCircle } from 'lucide-react'
import { Button } from "/components/ui/button"
import Link from 'next/link'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Basic',
    price: '$9.99',
    period: 'month',
    description: 'Perfect for individuals and small teams',
    features: [
      '100 email forwards per month',
      'Gmail integration',
      'Basic filtering options',
      'Email notifications',
      '24/7 support',
    ],
  },
  {
    name: 'Premium',
    price: '$29.99',
    period: 'month',
    description: 'Ideal for growing businesses',
    features: [
      '1,000 email forwards per month',
      'Gmail and Outlook integration',
      'Advanced filtering with AI',
      'WhatsApp integration',
      'Priority support',
      'Custom rules and automation',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'Unlimited email forwards',
      'Custom email provider integrations',
      'Advanced AI-powered filtering',
      'Dedicated account manager',
      'Custom feature development',
      'SLA guarantees',
    ],
  },
]

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Simple, transparent pricing</h1>
          <p className="text-xl text-gray-600">Choose the plan that best fits your needs</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative p-8 rounded-2xl bg-white border border-gray-200
                ${plan.name === 'Premium' ? 'shadow-xl ring-2 ring-gray-900' : 'shadow-lg hover:shadow-xl transition-shadow'}
              `}
            >
              {plan.name === 'Premium' && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600">/{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild
                size="lg"
                className="w-full rounded-full"
                variant={plan.name === 'Premium' ? 'default' : 'outline'}
              >
                <Link href={plan.name === 'Enterprise' ? '/contact' : '/signup'}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

