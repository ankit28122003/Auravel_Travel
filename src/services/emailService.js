import emailjs from 'emailjs-com'

export const EMAILJS_CONFIG = {
  serviceId: 'YOUR_EMAILJS_SERVICE_ID',
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
  recipientEmail: 'hello@auravelholidays.com',
}

export const sendEnquiryEmail = (formData) => {
  const templateParams = {
    to_email: EMAILJS_CONFIG.recipientEmail,
    to_name: 'Auravel Holidays',
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    destination: formData.destination || 'Not specified',
    travel_date: formData.travelDate || 'Flexible',
    travelers: formData.travelers || 'Not specified',
    budget: formData.budget || 'Not specified',
    message: formData.message,
    source: formData.source || 'Website enquiry form',
  }

  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    templateParams,
    EMAILJS_CONFIG.publicKey,
  )
}

export default sendEnquiryEmail
