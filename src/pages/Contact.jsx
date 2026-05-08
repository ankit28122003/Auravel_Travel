import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import EnquiryForm from '../components/EnquiryForm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { company, destinations } from '../data/destinations'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const defaultDestination = useMemo(() => {
    const slug = searchParams.get('destination') || ''
    return destinations.find((destination) => destination.slug === slug)?.name || slug
  }, [searchParams])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="relative overflow-hidden px-5 pb-16 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(251,191,36,.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,.18),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Contact us</p>
            <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl">Let Auravel Holidays plan the next one properly.</h1>
            <p className="mt-5 leading-8 text-slate-300">
              Share your travel requirements and our team will help with destination selection, hotels, transfers, sightseeing, and pricing.
            </p>

            <div className="mt-10 space-y-4">
              <div className="contact-row">
                <FaPhoneAlt />
                <div>
                  <p className="font-bold">Call us</p>
                  <p className="text-slate-300">+91 {company.phones.join(' / +91 ')}</p>
                </div>
              </div>
              <div className="contact-row">
                <FaEnvelope />
                <div>
                  <p className="font-bold">Email</p>
                  <a href={`mailto:${company.email}`} className="text-slate-300 hover:text-amber-200">{company.email}</a>
                </div>
              </div>
              <div className="contact-row">
                <FaMapMarkerAlt />
                <div>
                  <p className="font-bold">Office</p>
                  <p className="text-slate-300">{company.address}</p>
                </div>
              </div>
            </div>
          </div>

          <EnquiryForm
            title="Send Your Enquiry"
            subtitle="This form is connected through EmailJS placeholders. Add your credentials when you are ready to receive live submissions."
            defaultDestination={defaultDestination}
            source="Contact page enquiry form"
          />
        </div>
      </section>
      <Footer />
    </div>
  )
}
