import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AppRoutes from './routes/AppRoutes'
import FloatingButtons from './components/FloatingButtons'
import Loader from './components/Loader'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [showIntro, setShowIntro] = useState(() => sessionStorage.getItem('auravelIntroSeen') !== 'true')

  useEffect(() => {
    if (!showIntro) {
      sessionStorage.setItem('auravelIntroSeen', 'true')
      return
    }

    const timer = window.setTimeout(() => {
      sessionStorage.setItem('auravelIntroSeen', 'true')
      setShowIntro(false)
    }, 3800)

    return () => window.clearTimeout(timer)
  }, [showIntro])

  return (
    <>
      <AnimatePresence>{showIntro && <Loader onComplete={() => {}} />}</AnimatePresence>
      <motion.div
        initial={showIntro ? { opacity: 0, y: 18 } : false}
        animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 18 : 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <ScrollToTop />
        <AppRoutes />
      </motion.div>
      <FloatingButtons />
    </>
  )
}
