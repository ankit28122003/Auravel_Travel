import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/auravel-logo.jpeg'

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
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-white shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Auravel Holidays logo"
            className="h-12 w-16 rounded-2xl object-cover shadow-lg shadow-black/20 sm:w-20"
          />
          <span>
            <span className="block text-base font-black uppercase tracking-[0.18em] sm:text-lg">Auravel</span>
            <span className="block text-xs uppercase tracking-[0.32em] text-amber-200">Holidays</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-[0.18em] transition ${
                  isActive ? 'text-amber-200' : 'text-slate-200 hover:text-amber-200'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-200 lg:inline-flex"
        >
          Book Now
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/10 text-white lg:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200 hover:bg-white/10 hover:text-amber-200"
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex justify-center rounded-full bg-amber-300 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-950"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  )
}
