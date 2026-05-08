import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

export default function DestinationCard({ item, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.24) }}
      className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/10 backdrop-blur-xl"
    >
      <Link to={`/destination/${item.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              <FaMapMarkerAlt className="text-amber-200" /> {item.region}
            </p>
            <h3 className="text-3xl font-black text-white">{item.name}</h3>
          </div>
        </div>
      </Link>

      <div className="p-5">
        <p className="min-h-12 text-sm leading-6 text-slate-300">{item.tagline}</p>
        <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
          <span className="inline-flex items-center gap-2 text-sm text-slate-300">
            <FaClock className="text-amber-200" /> {item.duration}
          </span>
          <span className="text-right text-lg font-black text-amber-200">{item.price}</span>
        </div>
        <Link
          to={`/destination/${item.slug}`}
          className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-amber-300 px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-200"
        >
          Book Now <FaArrowRight />
        </Link>
      </div>
    </motion.article>
  )
}
