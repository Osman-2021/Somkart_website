import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const DeleteAccount = () => {
  useEffect(() => {
    document.title = 'Delete Account - Somkart'
  }, [])

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: '#F5F7FA' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Paper-style container */}
        <div className="bg-white shadow-lg" style={{ 
          padding: '60px 80px',
          minHeight: '29.7cm', // A4 height
          boxShadow: '0 0 20px rgba(0,0,0,0.1)'
        }}>
          <ScrollReveal>
            {/* Header */}
            <div className="text-center mb-12 border-b-2 pb-6" style={{ borderColor: '#0F2A44' }}>
              <h1 className="text-4xl font-bold mb-2" style={{ color: '#0B1F33' }}>
                ACCOUNT & DATA DELETION
              </h1>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </ScrollReveal>

          {/* Content - Paper Style */}
          <div className="space-y-8" style={{ color: '#4A5568', lineHeight: '1.8' }}>
            <ScrollReveal delay={0}>
              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#0B1F33' }}>
                  How to Delete Your Account
                </h2>
                <p className="mb-4">
                  To delete your account, please follow one of the methods below:
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-6" style={{ border: '2px solid #E3F2FD' }}>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#0B1F33' }}>
                    Method 1: Delete Account from the App
                  </h3>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>Log in to the app.</li>
                    <li>Go to <strong>Profile</strong> → <strong>Logout Account</strong>.</li>
                  </ol>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6" style={{ border: '2px solid #C8E6C9' }}>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#0B1F33' }}>
                    Method 2: Email Request
                  </h3>
                  <p className="mb-3">
                    Or email us at{' '}
                    <a 
                      href="mailto:support@somkart.com?subject=Account Deletion Request" 
                      className="font-semibold hover:underline" 
                      style={{ color: '#0F2A44' }}
                      onMouseEnter={(e) => e.target.style.color = '#1E88E5'}
                      onMouseLeave={(e) => e.target.style.color = '#0F2A44'}
                    >
                      support@somkart.com
                    </a>{' '}
                    and we will delete your account within 48 hours.
                  </p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    Please include your registered phone number in your email request for faster processing.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0}>
              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#0B1F33' }}>
                  What Will Be Deleted
                </h2>
                <p className="mb-3">
                  When you delete your account, the following data will be permanently removed:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Your phone number</li>
                  <li>Your user profile and account information</li>
                  <li>Your purchase history and transaction data</li>
                  <li>Your payment methods and billing information</li>
                  <li>Your personal preferences and settings</li>
                  <li>Your app usage data</li>
                </ul>
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mt-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> Account deletion is permanent and cannot be undone. Please ensure you have backed up any important information before proceeding.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0}>
              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#0B1F33' }}>
                  Data Retention
                </h2>
                <p className="mb-3">
                  Please note that some information may be retained for a limited period as required by law or for legitimate business purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Financial transaction records may be retained for up to 7 years for tax and legal compliance</li>
                  <li>Some anonymized usage data may be retained for analytics purposes</li>
                  <li>Data required for fraud prevention or legal proceedings may be retained as necessary</li>
                </ul>
                <p className="font-semibold" style={{ color: '#0F2A44' }}>
                  <strong>Data Deletion Period:</strong> Most personal data will be deleted within 48 hours of your request. Some data may be retained longer if required by applicable laws.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0}>
              <section className="mt-12 pt-8 border-t-2" style={{ borderColor: '#0F2A44' }}>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#0B1F33' }}>
                  Contact Us
                </h2>
                <p className="mb-4">
                  If you have any questions about account deletion or need assistance, please contact us:
                </p>
                <p className="mb-2">
                  <strong>Email:</strong>{' '}
                  <a 
                    href="mailto:support@somkart.com" 
                    className="font-semibold hover:underline" 
                    style={{ color: '#0F2A44' }}
                    onMouseEnter={(e) => e.target.style.color = '#1E88E5'}
                    onMouseLeave={(e) => e.target.style.color = '#0F2A44'}
                  >
                    support@somkart.com
                  </a>
                </p>
                <p>
                  <a 
                    href="/contact" 
                    className="font-semibold hover:underline" 
                    style={{ color: '#0F2A44' }}
                    onMouseEnter={(e) => e.target.style.color = '#1E88E5'}
                    onMouseLeave={(e) => e.target.style.color = '#0F2A44'}
                  >
                    Contact Us Form
                  </a>
                </p>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteAccount
