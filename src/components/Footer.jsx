import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { company, destinations } from '../data/destinations'

const logoSrc = '/auravel-logo.jpeg'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-12 text-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoSrc} alt="Auravel Holidays logo" className="h-14 w-24 rounded-2xl bg-white object-contain p-1 shadow-sm shadow-slate-200" />
              <div>
                <p className="text-xl font-black uppercase tracking-[0.18em]">Auravel</p>
                <p className="text-xs uppercase tracking-[0.35em] text-amber-600">Holidays</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm leading-7 text-slate-600">
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
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition hover:-translate-y-0.5 hover:bg-amber-400 hover:text-slate-950"
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-slate-950">Explore</h4>
            {['Home', 'About', 'Packages', 'Gallery', 'Contact'].map((label) => (
              <Link
                key={label}
                to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                className="mb-3 block text-sm text-slate-600 transition hover:text-amber-600"
              >
                {label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="mb-4 font-bold text-slate-950">Destinations</h4>
            {destinations.slice(0, 6).map((destination) => (
              <Link
                key={destination.slug}
                to={`/destination/${destination.slug}`}
                className="mb-3 block text-sm text-slate-600 transition hover:text-amber-600"
              >
                {destination.name}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="mb-4 font-bold text-slate-950">Contact</h4>
            <div className="space-y-3 text-sm leading-6 text-slate-600">
              {company.phones.map((phone) => (
                <a key={phone} href={`tel:+91${phone}`} className="block hover:text-amber-600">
                  +91 {phone}
                </a>
              ))}
              <a href={`mailto:${company.email}`} className="block hover:text-amber-600">
                {company.email}
              </a>
              <p>{company.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Auravel Holidays. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-amber-600">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-amber-600">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
