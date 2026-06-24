import { useEffect, useState } from 'react'

const heroSlides = [
  {
    src: '/images/cruise2.jpeg',
    alt: 'Beach holiday shoreline',
  },
  {
    src: '/images/Cruise.jpeg',
    alt: 'Bali tropical resort',
  },
  {
    src: '/images/home1.jpeg',
    alt: 'Thailand island water',
  },
  {
    src: '/images/home2.jpeg',
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
    }, 2500)

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
