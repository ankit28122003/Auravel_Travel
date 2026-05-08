import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="grid min-h-screen place-items-center px-5 pt-24 text-center">
        <div className="max-w-2xl">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-400 text-4xl font-black text-slate-950">
            OK
          </div>
          <h1 className="mt-8 text-5xl font-black sm:text-6xl">Thank you.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Your enquiry has been submitted. The Auravel Holidays team will get back to you shortly.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/" className="rounded-full bg-amber-300 px-7 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950">
              Back home
            </Link>
            <Link to="/packages" className="rounded-full border border-white/10 bg-white/10 px-7 py-4 text-sm font-black uppercase tracking-[0.2em] text-white">
              View packages
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
