'use client'

import { useState, useEffect } from 'react'
import Footer from '../../components/footer'
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react'

type ServiceStatus = 'operational' | 'degraded' | 'outage'

type Service = {
  name: string;
  status: ServiceStatus;
  description: string;
}

const initialServices: Service[] = [
  { 
    name: 'Email Forwarding', 
    status: 'operational',
    description: 'Core email forwarding functionality'
  },
  { 
    name: 'WhatsApp Integration', 
    status: 'operational',
    description: 'Connection and message delivery to WhatsApp'
  },
  { 
    name: 'User Dashboard', 
    status: 'operational',
    description: 'Web interface for user account management'
  },
  { 
    name: 'API', 
    status: 'operational',
    description: 'Public API for integrations'
  },
  { 
    name: 'Email Filtering', 
    status: 'operational',
    description: 'AI-powered email importance detection'
  },
  { 
    name: 'Notification System', 
    status: 'operational',
    description: 'Real-time alerts and notifications'
  },
  { 
    name: 'Account Sync', 
    status: 'operational',
    description: 'Synchronization of user account data'
  },
  { 
    name: 'Analytics', 
    status: 'operational',
    description: 'User activity and performance metrics'
  }
]

export default function Status() {
  const [services, setServices] = useState(initialServices)

  useEffect(() => {
    // Here you would typically fetch the current status from your backend
    // For this example, we'll simulate some status changes after 3 seconds
    const timer = setTimeout(() => {
      setServices(prev => [
        ...prev.slice(0, 3),
        { ...prev[3], status: 'degraded' },
        ...prev.slice(4, 6),
        { ...prev[6], status: 'outage' },
        prev[7]
      ])
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const getStatusIcon = (status: ServiceStatus) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'degraded':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case 'outage':
        return <XCircle className="h-5 w-5 text-red-500" />
    }
  }

  const getStatusColor = (status: ServiceStatus) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-800'
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800'
      case 'outage':
        return 'bg-red-100 text-red-800'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">MailSync System Status</h1>
        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                {getStatusIcon(service.status)}
                <div>
                  <h2 className="font-semibold">{service.name}</h2>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(service.status)}`}>
                {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

