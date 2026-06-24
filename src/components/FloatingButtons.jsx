import { FaPhone, FaSuitcaseRolling, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-4 z-[60] flex flex-col gap-3 sm:right-5">
      <a
        href="https://wa.me/919717467288?text=Hi%20Auravel%20Holidays%2C%20I%20want%20to%20plan%20a%20trip."
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/25 transition hover:-translate-y-1 sm:h-14 sm:w-14"
      >
        <FaWhatsapp className="text-xl sm:text-2xl" />
      </a>
      <a
        href="tel:+918882006506"
        aria-label="Call Auravel Holidays"
        title="Call"
        className="grid h-12 w-12 place-items-center rounded-full bg-sky-500 text-white shadow-2xl shadow-black/25 transition hover:-translate-y-1 sm:h-14 sm:w-14"
      >
        <FaPhone className="text-lg sm:text-xl" />
      </a>
      <Link
        to="/contact"
        aria-label="Book now"
        title="Book now"
        className="grid h-12 w-12 place-items-center rounded-full bg-amber-300 text-slate-950 shadow-2xl shadow-black/25 transition hover:-translate-y-1 sm:h-14 sm:w-14"
      >
        <FaSuitcaseRolling className="text-xl sm:text-2xl" />
      </Link>
    </div>
  )
}
