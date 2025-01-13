'use client'

import Link from 'next/link'
import { Button } from "../components/ui/button"
import { motion } from 'framer-motion'
import { Mail, X, Linkedin, Instagram, Facebook } from 'lucide-react'

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="py-6 bg-white/80 backdrop-blur-sm sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <Mail className="w-6 h-6" />
            MAILSYNC
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link href="/faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              FAQ
            </Link>
            <Link href="/status" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Status
            </Link>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4">
              <Link href="https://x.com" target="_blank" rel="noopener noreferrer">
                <X className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors" />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors" />
              </Link>
            </div>
            <Button size="sm" className="rounded-full bg-gray-900 hover:bg-gray-800" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

