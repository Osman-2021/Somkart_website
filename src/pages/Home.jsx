import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedIllustration from '../components/AnimatedIllustration'
import ScrollReveal from '../components/ScrollReveal'

const Home = () => {
  useEffect(() => {
    document.title = 'Somkart - Buy Internet Data Easily & Securely'
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="absolute inset-0 opacity-10" style={{ backgroundColor: '#ffffff' }}></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ color: '#0B1F33' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Buy Internet Data Easily & Securely
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 leading-relaxed"
              style={{ color: '#4A5568' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Somkart is your trusted platform for purchasing mobile internet data bundles. 
              Recharge your data plans instantly, pay securely, and stay connected.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.somkart.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
                style={{ backgroundColor: '#FF8F00' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF9800'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF8F00'}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Get the App
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-white border-2 px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                  style={{ borderColor: '#1E88E5', color: '#1E88E5' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#E3F2FD'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF'
                  }}
                >
                  Contact Support
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <AnimatedIllustration type="hero" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4"
              style={{ color: '#0B1F33' }}
            >
              Why Choose Somkart?
            </h2>
            <p className="text-center text-lg mb-16 max-w-2xl mx-auto"
              style={{ color: '#4A5568' }}
            >
              Experience seamless data purchasing with our secure and user-friendly platform
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: '#0F2A44' }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3" style={{ color: '#0B1F33' }}>Instant Purchase</h3>
                <p style={{ color: '#4A5568' }}>
                  Buy and activate your data bundles instantly. No waiting, no delays - get connected immediately.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: '#1E88E5' }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3" style={{ color: '#0B1F33' }}>Secure Payments</h3>
                <p style={{ color: '#4A5568' }}>
                  Your transactions are protected with industry-standard encryption. Pay safely with multiple payment options.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: '#0F2A44' }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3" style={{ color: '#0B1F33' }}>Reliable Service</h3>
                <p style={{ color: '#4A5568' }}>
                  Trusted by thousands of users. 24/7 customer support and guaranteed data activation.
                </p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #1E88E5 0%, #1565C0 50%, #0F2A44 100%)'
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full" style={{ backgroundColor: '#FFFFFF', transform: 'translate(-50%, -50%)' }}></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full" style={{ backgroundColor: '#FFFFFF', transform: 'translate(50%, 50%)' }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="text-xl mb-8"
              style={{ color: '#E3F2FD' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Download Somkart today and start buying internet data with ease and security.
            </motion.p>
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.somkart.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
              style={{ 
                backgroundColor: '#FF8F00',
                color: '#FFFFFF'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FF9800'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FF8F00'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Get it on Google Play
            </motion.a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default Home
