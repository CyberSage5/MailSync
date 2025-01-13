'use client'

import { useState } from 'react'
import { Dialog, DialogContent } from "/components/ui/dialog"
import { Button } from "/components/ui/button"
import { Input } from "/components/ui/input"
import { UserCircle } from 'lucide-react'

export function WaitlistModal({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="text-center py-4">
          {!isSubmitted ? (
            <>
              <h3 className="text-2xl font-bold mb-4">Join the Waitlist</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-center"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-gray-900 hover:bg-gray-800"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Joining...' : 'Join The Waitlist'}
                </Button>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <UserCircle 
                        key={i} 
                        className="w-8 h-8 text-gray-400 border-2 border-white rounded-full" 
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Join 2,146 others waiting for the best app ever!
                  </p>
                </div>
              </form>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold mb-4">You're on the list! 🎉</h3>
              <p className="text-gray-600">
                We'll notify you when MailSync is ready. Thank you for your interest!
              </p>
              <Button 
                onClick={onClose}
                className="mt-4"
                variant="outline"
              >
                Close
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

