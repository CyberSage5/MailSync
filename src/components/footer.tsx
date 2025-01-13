import Link from 'next/link'
import { Mail, X, Linkedin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-4">
              <Mail className="w-6 h-6" />
              MAILSYNC
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              Streamline your email management and enhance productivity with our innovative email-to-WhatsApp forwarding solution.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <X className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} MailSync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

