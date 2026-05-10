import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { destinations } from '../data/destinations'

export default function GalleryPage() {
  const images = destinations.flatMap((destination) => [
    { src: destination.image, alt: destination.name, label: destination.name },
    ...destination.gallery.slice(0, 1).map((src) => ({ src, alt: destination.name, label: destination.region })),
  ])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
      <section className="px-5 pb-10 pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Gallery</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight sm:text-6xl">
            Destination moodboard for the Auravel experience.
          </h1>
          <p className="mt-5 max-w-2xl leading-8 text-slate-600">
            Dummy image set for launch. You can replace these with original package and client images later.
          </p>
        </div>
      </section>

      <section className="section-shell pt-6">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <figure key={`${image.src}-${index}`} className="mb-5 break-inside-avoid overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
              <img src={image.src} alt={image.alt} className="h-auto w-full object-cover transition duration-700 hover:scale-105" />
              <figcaption className="px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-600">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
