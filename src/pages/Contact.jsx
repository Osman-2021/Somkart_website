import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    document.title = 'Contact Us - Somkart'
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitted(false)
    setIsSubmitting(true)

    // Validation
    if (!formData.name.trim()) {
      setError('Name is required')
      setIsSubmitting(false)
      return
    }

    if (!formData.email.trim()) {
      setError('Email is required')
      setIsSubmitting(false)
      return
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address')
      setIsSubmitting(false)
      return
    }

    if (!formData.message.trim()) {
      setError('Message is required')
      setIsSubmitting(false)
      return
    }

    if (formData.message.trim().length < 10) {
      setError('Message must be at least 10 characters long')
      setIsSubmitting(false)
      return
    }

    // Get backend API URL from environment variables; fall back to public API
    const apiUrl = import.meta.env.VITE_API_URL || 'https://api.somkart.so'

    // If env var is not set, log a warning for developers but continue using the fallback
    if (!import.meta.env.VITE_API_URL) {
      // eslint-disable-next-line no-console
      console.warn('VITE_API_URL is not set — using fallback API URL:', apiUrl)
    }
    
    try {
      const response = await fetch(`${apiUrl}/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        // Handle validation errors from backend
        const errorMessages = data.errors 
          ? Object.values(data.errors).flat().join(', ')
          : data.message || 'Failed to send message. Please try again.'
        setError(errorMessages)
      }
    } catch (error) {
      console.error('API Error:', error)
      setError('Failed to send message. Please check your connection and try again, or email us directly at support@somkart.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white min-h-screen py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-12 text-center shadow-lg"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
              className="text-6xl mb-6"
            >
              ✓
            </motion.div>
            <h2 className="text-3xl font-bold mb-4 text-green-800">Message Sent Successfully!</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Thank you for contacting us. We have received your message and will get back to you as soon as possible.
            </p>
            <motion.button
              onClick={() => setSubmitted(false)}
              className="text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            style={{ backgroundColor: '#FF8F00' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF9800'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF8F00'}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Another Message
            </motion.button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: '#0B1F33' }}
            >
              Contact Us
            </h1>
            <p className="text-lg max-w-2xl mx-auto"
              style={{ color: '#4A5568' }}
            >
              Have a question or need help? We're here to assist you. Fill out the form or reach out to us directly.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-2xl p-8 shadow-lg"
                style={{ backgroundColor: '#E3F2FD' }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#0F2A44' }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2" style={{ color: '#0B1F33' }}>Email Support</h2>
                    <p className="mb-3 text-sm"
                      style={{ color: '#4A5568' }}
                    >
                      Send us an email and we'll get back to you as soon as possible.
                    </p>
                    <a
                      href="mailto:support@somkart.com"
                      className="text-lg font-semibold inline-flex items-center gap-2 transition-colors"
                      style={{ color: '#0F2A44' }}
                      onMouseEnter={(e) => e.target.style.color = '#1E88E5'}
                      onMouseLeave={(e) => e.target.style.color = '#0F2A44'}
                    >
                      support@somkart.com
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-8 shadow-lg"
                style={{ backgroundColor: '#E3F2FD' }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#1E88E5' }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#0B1F33' }}>Response Time</h3>
                    <p className="text-sm"
                      style={{ color: '#4A5568' }}
                    >
                      We typically respond to all inquiries within <strong>24-48 hours</strong> during business days.
                    </p>
                    <p className="text-sm mt-2"
                      style={{ color: '#6B7280' }}
                    >
                      For urgent matters, please mention <strong>"URGENT"</strong> in your message subject.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#0B1F33' }}>24/7 Support</h3>
                    <p className="text-sm"
                      style={{ color: '#4A5568' }}
                    >
                      Our support team is available around the clock to assist you with any questions or issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 space-y-6 shadow-lg"
            style={{ backgroundColor: '#FFFFFF' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
          {error && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl"
            >
              {error}
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl transition-all bg-white"
                onFocus={(e) => {
                  e.target.style.borderColor = '#1E88E5'
                  e.target.style.boxShadow = '0 0 0 2px rgba(30, 136, 229, 0.2)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#D1D5DB'
                  e.target.style.boxShadow = 'none'
                }}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl transition-all bg-white"
                onFocus={(e) => {
                  e.target.style.borderColor = '#1E88E5'
                  e.target.style.boxShadow = '0 0 0 2px rgba(30, 136, 229, 0.2)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#D1D5DB'
                  e.target.style.boxShadow = 'none'
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Please describe your question or issue..."
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl transition-all bg-white"
              onFocus={(e) => {
                e.target.style.borderColor = '#1E88E5'
                e.target.style.boxShadow = '0 0 0 2px rgba(30, 136, 229, 0.2)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#D1D5DB'
                e.target.style.boxShadow = 'none'
              }}
            />
            <p className="mt-1 text-sm text-gray-500">
              Minimum 10 characters required
            </p>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#FF8F00' }}
            onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#FF9800')}
            onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#FF8F00')}
            onFocus={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 2px rgba(255, 143, 0, 0.2)'
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
            whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact
