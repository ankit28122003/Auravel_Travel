import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaConciergeBell, FaGlobeAsia, FaHeadset, FaRoute, FaShieldAlt, FaStar } from 'react-icons/fa'
import CTASection from '../components/CTASection'
import DestinationCard from '../components/DestinationCard'
import EnquiryForm from '../components/EnquiryForm'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import { destinations } from '../data/destinations'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
      <Hero />

      <section className="bg-white px-5 py-14 text-slate-950 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="eyebrow">Premium travel agency from New Delhi</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              Curated holidays across the globe, planned with calm precision.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Bali, Thailand, Singapore, Malaysia, Vietnam, Dubai, Andaman, Goa, Kashmir, Kerala and custom destinations crafted for couples, families, groups, and pilgrimages.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/packages" className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 shadow-lg shadow-amber-300/25 transition hover:-translate-y-1 hover:bg-amber-300">
                Explore packages <FaArrowRight />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-950 shadow-sm shadow-slate-200/70 transition hover:-translate-y-1 hover:border-amber-300">
                Get free quote
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.7, ease: 'easeOut' }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              { icon: FaStar, label: 'Popular packages', value: '11+' },
              { icon: FaShieldAlt, label: 'Travel support', value: '24/7' },
              { icon: FaStar, label: 'Customer rating', value: '4.9/5' },
              { icon: FaShieldAlt, label: 'Custom planning', value: '100%' },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/70">
                <item.icon className="mb-5 text-2xl text-amber-500" />
                <p className="text-4xl font-black">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Major destinations</p>
          <h2>Choose your next beautifully planned escape.</h2>
          <p>
            Every destination has its own dedicated package page with details, highlights, itinerary, and enquiry flow.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((item, index) => (
            <DestinationCard key={item.slug} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-4">
          {[
            { icon: FaGlobeAsia, title: 'Global Packages', text: 'International and domestic holidays for every travel style.' },
            { icon: FaRoute, title: 'Custom Routes', text: 'Flexible itineraries based on dates, budget, and preferences.' },
            { icon: FaConciergeBell, title: 'Premium Stays', text: 'Carefully selected hotels, villas, resorts, and houseboats.' },
            { icon: FaHeadset, title: 'Human Support', text: 'Fast assistance before, during, and after your journey.' },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 p-6"
            >
              <item.icon className="mb-5 text-3xl text-amber-500" />
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="home-enquiry" className="section-shell grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div>
          <p className="eyebrow">Quick enquiry</p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">Ready when your travel idea is still a little blurry.</h2>
          <p className="mt-5 leading-8 text-slate-600">
            Share a destination, travel month, and rough budget. Auravel Holidays will shape it into a practical, premium package with flights, stays, transfers, sightseeing, and add-ons.
          </p>
        </div>
        <EnquiryForm compact source="Home page enquiry form" />
      </section>

      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  )
}
