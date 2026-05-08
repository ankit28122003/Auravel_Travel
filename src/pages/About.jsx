import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="relative overflow-hidden px-5 pb-16 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_10%,rgba(251,191,36,.18),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">About Auravel Holidays</p>
            <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl">Premium holidays with practical planning behind the polish.</h1>
            <p className="mt-6 leading-8 text-slate-300">
              Auravel Holidays helps travelers choose, customize, and book domestic and international packages with clear communication and dependable support.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80"
            alt="Travel planning desk"
            className="h-[28rem] w-full rounded-[2rem] object-cover"
          />
        </div>
      </section>

      <section className="bg-white py-16 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-3">
          {[
            ['Tailored packages', 'Itineraries are shaped around travel dates, budget, occasion, pace, and hotel preference.'],
            ['Destination clarity', 'We help compare destinations and choose routes that actually fit the trip you want.'],
            ['Responsive support', 'The team remains reachable for practical assistance before and during travel.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-slate-200 p-7">
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">How we work</p>
          <h2 className="text-4xl font-black sm:text-5xl">Simple, transparent, and human.</h2>
          <p className="mt-6 leading-8 text-slate-300">
            You share the rough plan. We recommend destinations, package options, hotel categories, transfer plans, sightseeing, and upgrades. Once the package is finalized, the team coordinates the booking details and travel support.
          </p>
        </div>
      </section>
      <CTASection />
      <Footer />
    </div>
  )
}
