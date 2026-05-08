
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import DestinationPage from '../pages/DestinationPage'
import Packages from '../pages/Packages'
import GalleryPage from '../pages/GalleryPage'
import Contact from '../pages/Contact'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Terms from '../pages/Terms'
import ThankYou from '../pages/ThankYou'
import NotFound from '../pages/NotFound'

export default function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/destination/:slug" element={<DestinationPage />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
