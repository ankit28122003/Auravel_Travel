import emailjs from 'emailjs-com'

export const EMAILJS_CONFIG = {
  serviceId: 'service_8d6qdvx',
  templateId: 'template_xt5weui',
  publicKey: 'xym6g-Y2ovDSMVgcv',
  recipientEmail: 'infoauravelholidays@gmail.com',
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
