import { Link } from 'react-router-dom'

export default function CTASection({
  title = 'Ready for your dream vacation?',
  text = 'Get a personalized holiday plan with smart routing, premium stays, and responsive support.',
  primaryTo = '/contact',
  primaryLabel = 'Get free quote',
  secondaryTo = '/packages',
  secondaryLabel = 'View packages',
}) {
  return (
    <section className="bg-amber-300 px-5 py-16 text-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-slate-700">Auravel Holidays</p>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-800">{text}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link to={primaryTo} className="rounded-full bg-slate-950 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-white transition hover:-translate-y-1">
            {primaryLabel}
          </Link>
          <Link to={secondaryTo} className="rounded-full border border-slate-950/20 bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:-translate-y-1">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
