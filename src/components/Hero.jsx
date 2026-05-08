import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaShieldAlt, FaStar } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 text-white">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80"
        alt="Luxury beach travel"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,.92),rgba(15,23,42,.65),rgba(2,6,23,.35))]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-amber-100 backdrop-blur">
            Premium travel agency from New Delhi
          </p>
          <h1 className="text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
            Curated holidays across the globe, planned with calm precision.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Bali, Thailand, Singapore, Malaysia, Vietnam, Dubai, Andaman, Goa, Kashmir, Kerala and custom destinations crafted for couples, families, groups, and pilgrimages.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link to="/packages" className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-300 px-7 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 shadow-xl shadow-amber-300/20 transition hover:-translate-y-1 hover:bg-amber-200">
              Explore packages <FaArrowRight />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20">
              Get free quote
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
        >
          {[
            { icon: FaStar, label: 'Popular packages', value: '11+' },
            { icon: FaShieldAlt, label: 'Travel support', value: '24/7' },
            { icon: FaStar, label: 'Customer rating', value: '4.9/5' },
            { icon: FaShieldAlt, label: 'Custom planning', value: '100%' },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <item.icon className="mb-6 text-2xl text-amber-200" />
              <p className="text-4xl font-black">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-300">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
