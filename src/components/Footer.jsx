import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Quick Links - Left */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/delete-account" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Somkart - Center */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Somkart</h3>
            <p className="text-gray-300 text-sm max-w-xs mx-auto">
              Buy internet data easily and securely. Recharge your mobile data plans instantly with Somkart.
            </p>
          </div>

          {/* Support - Right */}
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@somkart.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm inline-block"
                >
                  support@somkart.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Somkart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

