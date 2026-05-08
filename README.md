
# Auravel Holidays

Premium Travel Agency Website built with:
- React + Vite
- Tailwind CSS
- Framer Motion
- EmailJS

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up EmailJS:
   - Create an account at https://www.emailjs.com/
   - Create an email service and template
   - Update the configuration in `src/services/emailService.js`:
     ```javascript
     const SERVICE_ID = 'your_service_id'
     const TEMPLATE_ID = 'your_template_id'
     const USER_ID = 'your_user_id'
     ```
4. Run development server: `npm run dev`
5. Build for production: `npm run build`

## Features

- Responsive design with Tailwind CSS
- Multiple destination packages
- Detailed Char Dham Yatra itinerary
- Contact form with EmailJS integration
- Gallery and testimonials sections
- Modern UI with smooth animations

## Destinations

- Bali
- Thailand
- Singapore
- Malaysia
- Vietnam
- Dubai
- Andaman
- Goa
- Kashmir
- Kerala
- Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath)
