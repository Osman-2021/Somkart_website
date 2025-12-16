import { motion } from 'framer-motion'

const AnimatedIllustration = ({ type = 'hero' }) => {
  if (type === 'hero') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative"
      >
        <motion.svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-w-md mx-auto"
        >
          {/* Background Circle */}
          <motion.circle
            cx="200"
            cy="200"
            r="180"
            fill="url(#gradient1)"
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.9, 1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Phone */}
          <motion.rect
            x="140"
            y="80"
            width="120"
            height="200"
            rx="15"
            fill="#fff"
            initial={{ y: 80 }}
            animate={{ y: [80, 70, 80] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Phone Screen */}
          <rect x="150" y="100" width="100" height="160" rx="5" fill="#0F2A44" />
          
          {/* Data Signal Bars */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <rect x="160" y="110" width="4" height="20" fill="#10B981" />
            <rect x="168" y="105" width="4" height="30" fill="#10B981" />
            <rect x="176" y="100" width="4" height="40" fill="#10B981" />
            <rect x="184" y="95" width="4" height="50" fill="#10B981" />
          </motion.g>
          
          {/* Data Packets */}
          <motion.circle
            cx="120"
            cy="150"
            r="8"
            fill="#F59E0B"
            initial={{ x: 0, y: 0 }}
            animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="280"
            cy="180"
            r="8"
            fill="#EF4444"
            initial={{ x: 0, y: 0 }}
            animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          />
          <motion.circle
            cx="100"
            cy="220"
            r="8"
            fill="#1E88E5"
            initial={{ x: 0, y: 0 }}
            animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          />
          
          {/* Connection Lines */}
          <motion.path
            d="M120 150 L150 150"
            stroke="#1E88E5"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M280 180 L250 180"
            stroke="#1E88E5"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F2A44" />
              <stop offset="100%" stopColor="#1E88E5" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
    )
  }

  return null
}

export default AnimatedIllustration

