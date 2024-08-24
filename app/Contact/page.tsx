import React from 'react'
import SocialMediaSection from './SocialMediaSection'
import MapSection from './MapSection'
import FAQSection from './FAQSection'
import ContactInfoSection from './ContactInfoSection'
import ContactFormSection from './ContactFormSection'
import HeaderSection from './HeaderSection'

export default function page() {
  return (
    <div className="contact-page bg-gray-100 min-h-screen">
      <HeaderSection />
      <ContactInfoSection />
      <ContactFormSection />
      <FAQSection />
      <MapSection />
    </div>
  )
}
