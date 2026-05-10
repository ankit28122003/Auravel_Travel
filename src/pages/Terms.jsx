import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const sections = [
  {
    title: 'General Booking Conditions',
    points: [
      'Quotes are for Indian nationals unless stated otherwise and are subject to availability.',
      'International travellers must hold passports valid for at least 6 months beyond return travel date.',
      'Hotel room preferences, early check-in, late checkout, and adjoining rooms are subject to hotel availability.',
      'If a selected hotel or service is unavailable, a similar alternative of equal category may be provided.',
    ],
  },
  {
    title: 'Taxes and Direct Charges',
    points: [
      'Malaysia tourism tax, Dubai tourism fee, Thailand national park fee, resort fee, city tax, or any government levy may be payable directly by the traveller.',
      'Cruise gratuities are not included unless specifically mentioned in the package.',
      'Courier, photograph, visa documentation, or destination-specific charges are payable additionally if applicable.',
    ],
  },
  {
    title: 'Payment Policy',
    points: [
      'The package-specific payment schedule is shared in the booking confirmation.',
      'Flight payment must be made within 24 hours of booking; fare increases after this window are borne by the traveller.',
      'Card and card-linked UPI payments may attract a 2.84% surcharge. UPI, IMPS, NEFT, bank transfer, and cheque carry no additional charge.',
      'Payments must be made only to official Auravel Holidays bank accounts.',
    ],
  },
  {
    title: 'Cancellation and Refunds',
    points: [
      'Cancellation requests must be sent in writing to hello@auravelholidays.com.',
      'At booking: INR 5,000 per person processing fee plus actual flight, hotel, and visa cancellation charges if applicable.',
      '60-45 days before departure: 25% of land cost plus INR 5,000 per person and actual cancellation charges.',
      '45-30 days before departure: 50% of land cost plus INR 5,000 per person and actual cancellation charges.',
      '30-10 days before departure: 75% of land cost plus INR 5,000 per person and actual cancellation charges.',
      'Less than 10 days or no-show: 100% of total tour cost is forfeited.',
      'Refunds, where applicable, are processed after recovery from respective service providers and may take 30 to 60 working days.',
    ],
  },
  {
    title: 'Visa, Documents, and Traveller Responsibility',
    points: [
      'Auravel Holidays is not responsible for visa rejection, denied boarding, or denied entry due to incomplete documents.',
      'Visa fees, TCS, taxes, and remittance charges are strictly non-refundable.',
      'Travellers must verify tickets, vouchers, visa letters, and travel documents immediately after issue.',
      'Valid PAN details are mandatory for overseas tour packages under applicable RBI, LRS, and TCS rules.',
    ],
  },
  {
    title: 'Health, Conduct, and Force Majeure',
    points: [
      'Travellers must disclose medical conditions before booking, especially for hiking, rafting, biking, or adventure activities.',
      "Adventure activities are voluntary and undertaken at the traveller's own risk.",
      'Auravel Holidays is not liable for delays, cancellation, or additional expenses caused by weather, natural disasters, epidemics, strikes, war, airline disruption, government restrictions, or other force majeure events.',
      'Disruptive or unlawful behaviour may result in removal from the tour without refund.',
    ],
  },
]

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 pb-16 pt-36">
        <p className="eyebrow">Auravel Holidays</p>
        <h1 className="mt-4 text-5xl font-black">Terms and Conditions</h1>
        <p className="mt-5 max-w-3xl leading-8 text-slate-600">
          Effective May 2025. This page summarizes the Auravel Holidays final terms document for website use. The final booking confirmation may include package-specific payment, cancellation, visa, hotel, airline, or vendor rules.
        </p>

        <div className="mt-10 space-y-5">
          {sections.map((section) => (
            <section key={section.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
              <h2 className="text-2xl font-black">{section.title}</h2>
              <div className="mt-5 space-y-3">
                {section.points.map((point) => (
                  <p key={point} className="leading-7 text-slate-600">
                    {point}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-black">Grievance Redressal</h2>
          <p className="mt-4 leading-7 text-slate-600">
            For any grievance, write to hello@auravelholidays.com within 15 days of tour completion. Auravel Holidays will endeavour to respond within 48 business hours. Disputes are governed by the laws of India.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
