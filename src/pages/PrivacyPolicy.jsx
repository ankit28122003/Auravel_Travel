import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 pb-16 pt-36">
        <p className="eyebrow">Policy</p>
        <h1 className="mt-4 text-5xl font-black">Privacy Policy</h1>
        <div className="mt-8 space-y-6 leading-8 text-slate-300">
          <p>Auravel Holidays collects enquiry details such as your name, phone, email, destination preference, travel dates, and message so our team can respond to your travel request.</p>
          <h2 className="text-2xl font-black text-white">How we use information</h2>
          <p>We use submitted details to prepare quotes, coordinate bookings, provide customer support, and improve our travel services.</p>
          <h2 className="text-2xl font-black text-white">Sharing</h2>
          <p>Information may be shared with hotels, transport partners, visa support providers, or travel vendors only when needed to process your request or confirmed booking.</p>
          <h2 className="text-2xl font-black text-white">Contact</h2>
          <p>For privacy questions, write to hello@auravelholidays.com.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
