import { motion } from 'framer-motion'
import { FaConciergeBell, FaGlobeAsia, FaHeadset, FaRoute } from 'react-icons/fa'
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
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />

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
          <p className="mt-5 leading-8 text-slate-300">
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
