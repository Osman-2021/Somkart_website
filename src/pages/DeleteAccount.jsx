import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const DeleteAccount = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    reason: '',
    confirmDelete: false
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = 'Delete Account - Somkart'
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Validation
    if (!formData.phoneNumber.trim()) {
      setError('Phone number is required')
      return
    }

    if (!formData.confirmDelete) {
      setError('Please confirm that you understand the consequences of account deletion')
      return
    }

    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL || 'https://api.somkart.com'
      const response = await fetch(`${apiUrl}/account/delete-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: formData.phoneNumber,
          reason: formData.reason
        })
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        setError('Failed to submit deletion request. Please try again or contact support.')
      }
    } catch (err) {
      // Fallback to email if API fails
      const emailSubject = encodeURIComponent('Account Deletion Request')
      const emailBody = encodeURIComponent(
        `I would like to delete my Somkart account.\n\nPhone Number: ${formData.phoneNumber}\nReason: ${formData.reason || 'Not specified'}`
      )
      window.location.href = `mailto:support@somkart.com?subject=${emailSubject}&body=${emailBody}`
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-3xl font-bold mb-4 text-green-800">Deletion Request Submitted</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Your account deletion request has been received. We will process your request within 7-30 days as per our data retention policy.
            </p>
            <p className="text-gray-600">
              If you submitted via email, please check your inbox for a confirmation. For any questions, contact us at{' '}
              <a href="mailto:support@somkart.com" className="text-indigo-600 hover:underline font-semibold">support@somkart.com</a>
            </p>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Account & Data Deletion
          </h1>
        </ScrollReveal>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700 mb-12">
          <ScrollReveal delay={0.1}>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Request Account Deletion</h2>
              <p>
                If you wish to delete your Somkart account and associated data, please follow the steps below. This action is permanent and cannot be undone.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <section className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">What Will Be Deleted</h2>
              <p className="mb-3">When you delete your account, the following data will be permanently removed:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your phone number</li>
                <li>Your user profile and account information</li>
                <li>Your purchase history and transaction data</li>
                <li>Your payment methods and billing information</li>
                <li>Your personal preferences and settings</li>
                <li>Your app usage data</li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <section className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Data Retention</h2>
              <p className="mb-3">
                Please note that some information may be retained for a limited period as required by law or for legitimate business purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Financial transaction records may be retained for up to 7 years for tax and legal compliance</li>
                <li>Some anonymized usage data may be retained for analytics purposes</li>
                <li>Data required for fraud prevention or legal proceedings may be retained as necessary</li>
              </ul>
              <p className="mt-4 font-semibold">
                <strong>Data Retention Period:</strong> Most personal data will be deleted within 7-30 days of your deletion request. Some data may be retained longer if required by applicable laws.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">How to Request Account Deletion</h2>
              <p className="mb-4">To request account deletion, please provide the following information:</p>
            </section>
          </ScrollReveal>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 space-y-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
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

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Registered Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              placeholder="Enter your registered phone number"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            />
            <p className="mt-1 text-sm text-gray-500">
              This must match the phone number associated with your Somkart account.
            </p>
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
              Reason for Deletion (Optional)
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows="4"
              placeholder="Please let us know why you're deleting your account (optional)"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="confirmDelete"
              name="confirmDelete"
              checked={formData.confirmDelete}
              onChange={handleChange}
              required
              className="mt-1 h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="confirmDelete" className="ml-3 text-sm text-gray-700">
              <span className="text-red-500">*</span> I understand that deleting my account will permanently remove all my data from Somkart, and this action cannot be undone. I confirm that I want to proceed with account deletion.
            </label>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4">
            <p className="text-sm text-yellow-800">
              <strong>Important:</strong> After submitting this form, your account deletion request will be processed. You will receive a confirmation email at the address associated with your account (if provided). The deletion process typically takes 7-30 days to complete.
            </p>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit Deletion Request
          </motion.button>
        </motion.form>

        <ScrollReveal delay={0.6}>
          <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Alternative Contact Method</h3>
            <p className="text-gray-700 mb-2">
              You can also request account deletion by emailing us directly:
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@somkart.com?subject=Account Deletion Request" className="text-indigo-600 hover:underline font-semibold">
                support@somkart.com
              </a>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Please include your registered phone number in your email request.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.7}>
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Need Help?</h3>
            <p className="text-gray-700 mb-4">
              If you have questions about account deletion or need assistance, please{' '}
              <a href="/contact" className="text-indigo-600 hover:underline font-semibold">contact our support team</a>.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

export default DeleteAccount
