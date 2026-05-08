import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCalendarAlt, FaPaperPlane, FaUserFriends } from 'react-icons/fa'
import { destinations } from '../data/destinations'
import { sendEnquiryEmail } from '../services/emailService'

const initialState = {
  name: '',
  phone: '',
  email: '',
  destination: '',
  travelDate: '',
  travelers: '2',
  budget: '',
  message: '',
}

export default function EnquiryForm({
  title = 'Plan Your Trip',
  subtitle = 'Tell us the basics and our travel expert will call you back with a tailored package.',
  defaultDestination = '',
  source = 'Website enquiry form',
  compact = false,
}) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    ...initialState,
    destination: defaultDestination,
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')

    try {
      await sendEnquiryEmail({ ...formData, source })
      setStatus('sent')
      navigate('/thank-you')
    } catch (error) {
      console.error('EmailJS submission failed:', error)
      setStatus('error')
    }
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
      <div className={compact ? 'mb-5' : 'mb-8 text-center'}>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Free consultation</p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-field"
            placeholder="Your name"
            autoComplete="name"
            required
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-field"
            placeholder="Phone number"
            autoComplete="tel"
            required
          />
        </div>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-field"
          placeholder="Email address"
          autoComplete="email"
          required
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="form-field"
            required
          >
            <option value="">Select destination</option>
            {destinations.map((destination) => (
              <option key={destination.slug} value={destination.name}>
                {destination.name}
              </option>
            ))}
            <option value="Other">Other destination</option>
          </select>

          <label className="relative block">
            <FaCalendarAlt className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="date"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              className="form-field pl-11"
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="relative block">
            <FaUserFriends className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="number"
              min="1"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              className="form-field pl-11"
              placeholder="Travelers"
            />
          </label>
          <input
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="form-field"
            placeholder="Budget range"
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={compact ? 4 : 5}
          className="form-field resize-none"
          placeholder="Tell us your preferred dates, hotel category, occasion, or any special request."
          required
        />

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-amber-300 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-950 shadow-lg shadow-amber-300/20 transition hover:-translate-y-0.5 hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <FaPaperPlane />
          {status === 'submitting' ? 'Sending enquiry...' : 'Send enquiry'}
        </button>

        {status === 'error' && (
          <p className="rounded-2xl border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-100">
            EmailJS is using placeholder credentials. Add your Service ID, Template ID, and Public Key in
            src/services/emailService.js, then try again.
          </p>
        )}
      </form>
    </div>
  )
}
