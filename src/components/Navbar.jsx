import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center group">
            <motion.span
              className="text-2xl font-bold"
              style={{ color: '#0F2A44' }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Somkart
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all relative ${
                isActive('/')
                  ? 'hover:bg-gray-50'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              style={isActive('/') ? { color: '#0F2A44', backgroundColor: '#E3F2FD' } : { color: '#4A5568' }}
              onMouseEnter={(e) => !isActive('/') && (e.target.style.color = '#1E88E5')}
              onMouseLeave={(e) => !isActive('/') && (e.target.style.color = '#4A5568')}
            >
              {isActive('/') && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-lg"
                  style={{ backgroundColor: '#E3F2FD' }}
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">Home</span>
            </Link>
            <Link
              to="/privacy-policy"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all relative ${
                isActive('/privacy-policy')
                  ? 'hover:bg-gray-50'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              style={isActive('/privacy-policy') ? { color: '#0F2A44', backgroundColor: '#E3F2FD' } : { color: '#4A5568' }}
              onMouseEnter={(e) => !isActive('/privacy-policy') && (e.target.style.color = '#1E88E5')}
              onMouseLeave={(e) => !isActive('/privacy-policy') && (e.target.style.color = '#4A5568')}
            >
              {isActive('/privacy-policy') && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-lg"
                  style={{ backgroundColor: '#E3F2FD' }}
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">Privacy Policy</span>
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all relative ${
                isActive('/contact')
                  ? 'hover:bg-gray-50'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              style={isActive('/contact') ? { color: '#0F2A44', backgroundColor: '#E3F2FD' } : { color: '#4A5568' }}
              onMouseEnter={(e) => !isActive('/contact') && (e.target.style.color = '#1E88E5')}
              onMouseLeave={(e) => !isActive('/contact') && (e.target.style.color = '#4A5568')}
            >
              {isActive('/contact') && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-lg"
                  style={{ backgroundColor: '#E3F2FD' }}
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">Contact</span>
            </Link>
            <Link
              to="/delete-account"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all relative ${
                isActive('/delete-account')
                  ? 'hover:bg-gray-50'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              style={isActive('/delete-account') ? { color: '#0F2A44', backgroundColor: '#E3F2FD' } : { color: '#4A5568' }}
              onMouseEnter={(e) => !isActive('/delete-account') && (e.target.style.color = '#1E88E5')}
              onMouseLeave={(e) => !isActive('/delete-account') && (e.target.style.color = '#4A5568')}
            >
              {isActive('/delete-account') && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-lg"
                  style={{ backgroundColor: '#E3F2FD' }}
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">Delete Account</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            style={{ color: '#4A5568' }}
            onMouseEnter={(e) => e.target.style.color = '#1E88E5'}
            onMouseLeave={(e) => e.target.style.color = '#4A5568'}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-all ${
                isActive('/')
                  ? 'hover:bg-gray-50'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              style={isActive('/') ? { color: '#0F2A44', backgroundColor: '#E3F2FD' } : { color: '#4A5568' }}
              onMouseEnter={(e) => !isActive('/') && (e.target.style.color = '#1E88E5')}
              onMouseLeave={(e) => !isActive('/') && (e.target.style.color = '#4A5568')}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/privacy-policy"
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-all ${
                isActive('/privacy-policy')
                  ? 'hover:bg-gray-50'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              style={isActive('/privacy-policy') ? { color: '#0F2A44', backgroundColor: '#E3F2FD' } : { color: '#4A5568' }}
              onMouseEnter={(e) => !isActive('/privacy-policy') && (e.target.style.color = '#1E88E5')}
              onMouseLeave={(e) => !isActive('/privacy-policy') && (e.target.style.color = '#4A5568')}
              onClick={() => setIsOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-all ${
                isActive('/contact')
                  ? 'hover:bg-gray-50'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              style={isActive('/contact') ? { color: '#0F2A44', backgroundColor: '#E3F2FD' } : { color: '#4A5568' }}
              onMouseEnter={(e) => !isActive('/contact') && (e.target.style.color = '#1E88E5')}
              onMouseLeave={(e) => !isActive('/contact') && (e.target.style.color = '#4A5568')}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/delete-account"
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-all ${
                isActive('/delete-account')
                  ? 'hover:bg-gray-50'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              style={isActive('/delete-account') ? { color: '#0F2A44', backgroundColor: '#E3F2FD' } : { color: '#4A5568' }}
              onMouseEnter={(e) => !isActive('/delete-account') && (e.target.style.color = '#1E88E5')}
              onMouseLeave={(e) => !isActive('/delete-account') && (e.target.style.color = '#4A5568')}
              onClick={() => setIsOpen(false)}
            >
              Delete Account
            </Link>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

