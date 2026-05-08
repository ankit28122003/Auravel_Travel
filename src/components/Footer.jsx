import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { company, destinations } from '../data/destinations'
import logo from '../assets/auravel-logo.jpeg'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Auravel Holidays logo" className="h-14 w-20 rounded-2xl object-cover" />
              <div>
                <p className="text-xl font-black uppercase tracking-[0.18em]">Auravel</p>
                <p className="text-xs uppercase tracking-[0.35em] text-amber-200">Holidays</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              Premium domestic and international travel packages with thoughtful planning, responsive support, and flexible customization.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { label: 'Instagram', href: company.socialLinks.instagram, icon: FaInstagram },
                { label: 'Facebook', href: company.socialLinks.facebook, icon: FaFacebookF },
                { label: 'YouTube', href: company.socialLinks.youtube, icon: FaYoutube },
                { label: 'LinkedIn', href: company.socialLinks.linkedin, icon: FaLinkedinIn },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/10 text-slate-200 transition hover:-translate-y-0.5 hover:bg-amber-300 hover:text-slate-950"
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Explore</h4>
            {['Home', 'About', 'Packages', 'Gallery', 'Contact'].map((label) => (
              <Link
                key={label}
                to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                className="mb-3 block text-sm text-slate-400 transition hover:text-amber-200"
              >
                {label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Destinations</h4>
            {destinations.slice(0, 6).map((destination) => (
              <Link
                key={destination.slug}
                to={`/destination/${destination.slug}`}
                className="mb-3 block text-sm text-slate-400 transition hover:text-amber-200"
              >
                {destination.name}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Contact</h4>
            <div className="space-y-3 text-sm leading-6 text-slate-400">
              {company.phones.map((phone) => (
                <a key={phone} href={`tel:+91${phone}`} className="block hover:text-amber-200">
                  +91 {phone}
                </a>
              ))}
              <a href={`mailto:${company.email}`} className="block hover:text-amber-200">
                {company.email}
              </a>
              <p>{company.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Auravel Holidays. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-amber-200">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-amber-200">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
