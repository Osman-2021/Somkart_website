import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy - Somkart'
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
                PRIVACY POLICY
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
                  Introduction
                </h2>
                <p className="mb-4">
                  Your privacy is important to us. At Somkart, we respect your privacy and are committed to protecting any personal information you share with us. This Privacy Policy explains how we collect, use, and protect your information when you use our website, mobile application, or services related to internet data and connectivity.
                </p>
                <p>
                  This policy is effective from {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0}>
              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#0B1F33' }}>
                  Information We Collect
                </h2>
                <p className="mb-3">
                  We collect information in two ways:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Information you voluntarily provide when using our services</li>
                  <li>Information automatically collected when you access our platform</li>
                </ul>
                
                <h3 className="text-xl font-bold mb-3 mt-6" style={{ color: '#0B1F33' }}>
                  Personal Information
                </h3>
                <p className="mb-3">
                  We may collect the following personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Account or user details</li>
                  <li>Payment-related information (internet data purchases)</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0}>
              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#0B1F33' }}>
                  Use of Information
                </h2>
                <p className="mb-3">Somkart uses your information to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Provide and manage internet data services</li>
                  <li>Process payments and transactions</li>
                  <li>Communicate service updates and offers</li>
                  <li>Improve our services and user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p className="font-semibold" style={{ color: '#0F2A44' }}>
                  We do not sell or rent your personal information to third parties.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0}>
              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#0B1F33' }}>
                  Legitimate Use of Personal Information
                </h2>
                <p className="mb-3">
                  We only collect and use personal information when it is necessary to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Deliver our services</li>
                  <li>Fulfill contractual obligations</li>
                  <li>Meet legal and regulatory requirements</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0}>
              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#0B1F33' }}>
                  Security of Your Information
                </h2>
                <p>
                  We take reasonable technical and organizational measures to protect your personal information against loss, unauthorized access, misuse, or disclosure. However, no online system is completely secure, and we cannot guarantee absolute security.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0}>
              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#0B1F33' }}>
                  Data Retention
                </h2>
                <p>
                  We retain your personal information only for as long as necessary to provide our services or as required by law. When the information is no longer needed, it will be securely deleted or anonymized.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0}>
              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#0B1F33' }}>
                  Your Rights
                </h2>
                <p className="mb-3">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Access your personal information</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p>
                  Please note that limiting your information may affect service availability.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0}>
              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#0B1F33' }}>
                  Cookies
                </h2>
                <p>
                  Somkart may use cookies to improve website functionality and user experience. Cookies help us understand how users interact with our platform and allow us to personalize services.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0}>
              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#0B1F33' }}>
                  Third-Party Links
                </h2>
                <p>
                  Our services may contain links to third-party websites. Somkart is not responsible for the privacy practices or content of external sites.
                </p>
              </section>
            </ScrollReveal>
             <ScrollReveal delay={0}>
              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#0B1F33' }}>
                  Third-Party Links
                </h2>
                <p>
                  Our services may contain links to third-party websites. Somkart is not responsible for the privacy practices or content of external sites.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0}>
              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#0B1F33' }}>
                  Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page, and continued use of our services means acceptance of the updated policy.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0}>
              <section className="mt-12 pt-8 border-t-2" style={{ borderColor: '#0F2A44' }}>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#0B1F33' }}>
                  Contact Us
                </h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or your personal data, please contact us:
                </p>
                <p className="mb-2">
                  <strong>Email:</strong> <a href="mailto:support@somkart.com" className="font-semibold hover:underline" style={{ color: '#0F2A44' }} onMouseEnter={(e) => e.target.style.color = '#1E88E5'} onMouseLeave={(e) => e.target.style.color = '#0F2A44'}>support@somkart.com</a>
                </p>
                <p>
                  <a href="/contact" className="font-semibold hover:underline" style={{ color: '#0F2A44' }} onMouseEnter={(e) => e.target.style.color = '#1E88E5'} onMouseLeave={(e) => e.target.style.color = '#0F2A44'}>Contact Us Form</a>
                </p>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
