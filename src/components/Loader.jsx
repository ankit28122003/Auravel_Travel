import { motion } from 'framer-motion'
import { FaPlane } from 'react-icons/fa'

export default function Loader({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-hidden bg-[#050816]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(245,158,11,0.18),transparent_32%),linear-gradient(135deg,#050816,#0f172a_48%,#111827)]" />
      <motion.div
        className="absolute left-0 top-1/2 text-5xl text-amber-300 drop-shadow-[0_0_22px_rgba(252,211,77,0.8)] sm:text-7xl"
        initial={{ x: '-20vw', y: 40, rotate: 8, scale: 0.9 }}
        animate={{ x: ['-20vw', '42vw', '118vw'], y: [40, -45, -190], rotate: [8, 18, -16], scale: [0.9, 1.15, 0.7] }}
        transition={{ duration: 2.7, ease: 'easeInOut' }}
      >
        <FaPlane />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center px-6 text-center"
        initial={{ opacity: 0, scale: 0.82, rotateX: 38 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ delay: 2.15, duration: 1.05, ease: 'easeOut' }}
        onAnimationComplete={onComplete}
      >
        <div className="loader-perspective">
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.45em] text-amber-200 sm:text-base"
            animate={{ opacity: [0.55, 1, 0.75] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            Welcome to
          </motion.p>
          <motion.h1
            className="mt-5 text-5xl font-black uppercase tracking-[0.08em] text-white sm:text-7xl lg:text-8xl"
            animate={{ rotateY: [0, -8, 8, 0], textShadow: ['0 0 18px rgba(251,191,36,.25)', '0 0 36px rgba(251,191,36,.55)', '0 0 18px rgba(251,191,36,.25)'] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
          >
            Auravel Holidays
          </motion.h1>
        </div>
      </motion.div>
    </motion.div>
  )
}
