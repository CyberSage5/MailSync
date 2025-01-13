'use client'

import { CheckCircle, AlertTriangle, Clock, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  { name: 'Email Forwarding', status: 'operational' },
  { name: 'WhatsApp Integration', status: 'operational' },
  { name: 'User Dashboard', status: 'operational' },
  { name: 'API', status: 'partial_outage' },
  { name: 'Database', status: 'operational' },
]

const incidents = [
  { 
    date: '2023-05-15', 
    title: 'API Partial Outage', 
    description: 'We are currently experiencing issues with our API. Our team is working on resolving this as quickly as possible.',
    status: 'investigating'
  },
  { 
    date: '2023-05-10', 
    title: 'Scheduled Maintenance', 
    description: 'We will be performing scheduled maintenance on our servers. Expected downtime: 2 hours.',
    status: 'completed'
  },
]

export default function Status() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">System Status</h1>
          <p className="text-xl text-gray-600">Current status of all MailSync services</p>
        </motion.div>
        
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold">Current Status</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {services.map((service) => (
                <div key={service.name} className="flex items-center justify-between p-6">
                  <span className="font-medium">{service.name}</span>
                  <span className={`flex items-center gap-2 ${
                    service.status === 'operational' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {service.status === 'operational' ? (
                      <><CheckCircle className="h-5 w-5" /> Operational</>
                    ) : (
                      <><AlertTriangle className="h-5 w-5" /> Partial Outage</>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-6">Incident History</h2>
          <div className="space-y-4">
            {incidents.map((incident, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Clock className="h-4 w-4" />
                  <span>{incident.date}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    incident.status === 'investigating' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {incident.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  {incident.title}
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </h3>
                <p className="text-gray-600">{incident.description}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

