import { useState } from 'react'
import { Button } from '../shared'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="section-padding bg-primary-600">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-4">
            Get 15% Off Your First Box
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Subscribe for exclusive offers, feeding tips, and new product announcements. Welcome to the Tiny Tummies family!
          </p>

          {isSubmitted ? (
            <div className="bg-white/10 rounded-2xl p-6">
              <span className="text-4xl mb-4 block">🎉</span>
              <p className="text-white font-medium">
                You're in! Check your inbox for your 15% off code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <Button type="submit" variant="white">
                Subscribe
              </Button>
            </form>
          )}

          <p className="text-primary-200 text-sm mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
