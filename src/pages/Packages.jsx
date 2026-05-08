import DestinationCard from '../components/DestinationCard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { destinations } from '../data/destinations'

export default function Packages() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="px-5 pb-10 pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Travel packages</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight sm:text-6xl">
            All major Auravel destinations in one place.
          </h1>
          <p className="mt-5 max-w-2xl leading-8 text-slate-300">
            Click Book Now on any package to open its dedicated destination page with highlights, itinerary, images, and enquiry form.
          </p>
        </div>
      </section>
      <section className="section-shell pt-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((item, index) => (
            <DestinationCard key={item.slug} item={item} index={index} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
