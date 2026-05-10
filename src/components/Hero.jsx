import { useEffect, useState } from 'react'

const heroSlides = [
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80',
    alt: 'Beach holiday shoreline',
  },
  {
    src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1800&q=80',
    alt: 'Bali tropical resort',
  },
  {
    src: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1800&q=80',
    alt: 'Thailand island water',
  },
  {
    src: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1800&q=80',
    alt: 'Singapore city skyline',
  },
  {
    src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=80',
    alt: 'Dubai skyline at sunset',
  },
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen min-h-[100svh] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            index === activeSlide ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-slate-950/10" />
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, index) => (
          <span
            key={slide.alt}
            className={`h-2 rounded-full transition-all ${
              index === activeSlide ? 'w-8 bg-white' : 'w-2 bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
