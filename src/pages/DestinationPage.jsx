import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCheck, FaClock, FaHotel, FaInfoCircle, FaRupeeSign, FaTimesCircle } from 'react-icons/fa'
import CTASection from '../components/CTASection'
import EnquiryForm from '../components/EnquiryForm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { defaultItinerary, destinations } from '../data/destinations'

export default function DestinationPage() {
  const { slug } = useParams()
  const destination = destinations.find((dest) => dest.slug === slug)

  if (!destination) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-950">
        <Navbar />
        <section className="grid min-h-screen place-items-center px-5 text-center">
          <div>
            <h1 className="text-5xl font-black">Destination not found</h1>
            <Link to="/packages" className="mt-8 inline-flex rounded-full bg-amber-300 px-7 py-4 font-bold text-slate-950">
              View packages
            </Link>
          </div>
        </section>
      </div>
    )
  }

  const itinerary = destination.itinerary || defaultItinerary
  const priceLabel = destination.price === 'Custom quote' ? 'Custom quote' : `Starting from ${destination.price.replace('INR ', '')}`

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />

      <section className="relative min-h-[82vh] overflow-hidden pt-28 text-white">
        <img src={destination.image} alt={destination.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,.92),rgba(2,6,23,.62),rgba(2,6,23,.25))]" />
        <div className="relative mx-auto grid min-h-[calc(82vh-7rem)] max-w-7xl items-center gap-10 px-5 py-16">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow">{destination.region}</p>
            <h1 className="mt-4 text-5xl font-black leading-none sm:text-6xl lg:text-7xl">{destination.packageTitle || destination.name}</h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-200">{destination.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="pill"><FaClock /> {destination.duration}</span>
              <span className="pill"><FaRupeeSign /> {priceLabel}</span>
              <span className="pill"><FaHotel /> Hotels + transfers</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Package highlights</p>
          <h2 className="text-4xl font-black sm:text-5xl">What makes this trip worth taking.</h2>
          <p className="mt-5 leading-8 text-slate-600">{destination.tagline}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {destination.highlights.map((highlight) => (
            <div key={highlight} className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
              <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-amber-400 text-xs text-slate-950">
                <FaCheck />
              </span>
              <p className="font-semibold text-slate-700">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      {(destination.facts || destination.stays) && (
        <section className="bg-white py-16 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-2">
            {destination.facts && (
              <div className="rounded-[1.75rem] border border-slate-200 p-6">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-600">Package facts</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {destination.facts.map((fact) => (
                    <div key={fact} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                      <FaInfoCircle className="mt-1 shrink-0 text-amber-500" />
                      <p className="font-semibold text-slate-700">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {destination.stays && (
              <div className="rounded-[1.75rem] border border-slate-200 p-6">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-600">Stay plan</p>
                <div className="mt-5 space-y-3">
                  {destination.stays.map((stay) => (
                    <div key={stay} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                      <FaHotel className="mt-1 shrink-0 text-amber-500" />
                      <p className="font-semibold text-slate-700">{stay}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {(destination.inclusions || destination.exclusions) && (
        <section className="section-shell grid gap-6 lg:grid-cols-2">
          {destination.inclusions && (
            <div className="rounded-[1.75rem] border border-emerald-200 bg-emerald-50 p-6">
              <p className="eyebrow">Inclusions</p>
              <div className="mt-5 space-y-3">
                {destination.inclusions.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-slate-700">
                    <FaCheck className="mt-1 shrink-0 text-emerald-600" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {destination.exclusions && (
            <div className="rounded-[1.75rem] border border-red-200 bg-red-50 p-6">
              <p className="eyebrow">Exclusions</p>
              <div className="mt-5 space-y-3">
                {destination.exclusions.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-slate-700">
                    <FaTimesCircle className="mt-1 shrink-0 text-red-500" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      <section className="bg-white py-16 text-slate-950">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-amber-600">Suggested itinerary</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">A smooth day-by-day plan.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {itinerary.map((day) => (
              <div key={`${day.day}-${day.title}`} className="rounded-3xl border border-slate-200 p-5">
                <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-amber-600">Day {day.day}</p>
                <h3 className="text-xl font-black">{day.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{day.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {destination.terms && (
        <section className="section-shell">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
            <p className="eyebrow">Important notes</p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {destination.terms.map((term) => (
                <p key={term} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                  {term}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-shell">
        <div className="grid gap-5 md:grid-cols-3">
          {destination.gallery.map((image, index) => (
            <motion.img
              key={image}
              src={image}
              alt={`${destination.name} gallery ${index + 1}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-72 w-full rounded-[1.75rem] object-cover"
            />
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="mx-auto max-w-4xl">
          <EnquiryForm
            title={`Enquire for ${destination.name}`}
            subtitle="Get a customized quote with hotels, transfers, sightseeing, and travel add-ons."
            defaultDestination={destination.name}
            source={`${destination.name} destination page`}
          />
        </div>
      </section>

      <CTASection
        title={`Want to customize ${destination.name}?`}
        text="Tell us your dates, preferred hotel category, and occasion. We will shape the package around you."
        primaryTo="/contact"
        primaryLabel="Talk to an expert"
        secondaryTo="/packages"
        secondaryLabel="See more destinations"
      />
      <Footer />
    </div>
  )
}
