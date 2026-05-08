import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="grid min-h-screen place-items-center px-5 pt-24 text-center">
        <div>
          <p className="eyebrow">404</p>
          <h1 className="mt-4 text-6xl font-black">Page not found</h1>
          <p className="mt-5 text-slate-300">The page you are looking for is not available.</p>
          <Link to="/" className="mt-8 inline-flex rounded-full bg-amber-300 px-7 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950">
            Go home
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}
