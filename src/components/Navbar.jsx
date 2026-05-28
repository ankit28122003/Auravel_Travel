import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const logoSrc = '/auravel-logo.jpeg'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Destinations', to: '/packages' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200/80 bg-white/90 px-4 py-2 text-slate-950 shadow-xl shadow-slate-200/60 backdrop-blur-2xl sm:px-6">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={logoSrc}
            alt="Travel company logo"
            className="h-14 w-24 rounded-2xl bg-white object-fit  shadow-sm shadow-slate-200 sm:h-16 sm:w-28"
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-[0.18em] transition ${
                  isActive ? 'text-amber-600' : 'text-slate-700 hover:text-amber-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden rounded-full bg-amber-400 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300 lg:inline-flex"
        >
          Book Now
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-slate-50 text-slate-950 lg:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-2xl shadow-slate-200/70 backdrop-blur-2xl lg:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 hover:bg-amber-50 hover:text-amber-600"
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex justify-center rounded-full bg-amber-400 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-950"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  )
}
