import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    text: 'Our Bali trip felt effortless. The villa, transfers, activities, and restaurant suggestions were all thoughtfully planned.',
  },
  {
    name: 'Amit Singh',
    location: 'Delhi',
    text: 'Dubai was smooth from airport pickup to desert safari. The team stayed available and handled small changes quickly.',
  },
  {
    name: 'Neha Verma',
    location: 'Gurugram',
    text: 'Kashmir was magical. Hotels were well chosen, the driver was polite, and the itinerary never felt rushed.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-slate-900 px-5 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <p className="eyebrow">Guest notes</p>
          <h2>Travel should feel looked after.</h2>
          <p>Realistic sample testimonials for the launch version. Replace them with client reviews anytime.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6"
            >
              <div className="mb-5 flex gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <FaStar key={starIndex} />
                ))}
              </div>
              <p className="leading-7 text-slate-200">"{testimonial.text}"</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-black">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
