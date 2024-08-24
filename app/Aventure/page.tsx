import React from 'react'
import HeroSection from './HeroSection'
import PopularDestinations from './PopularDestinations'
import AdventureTypes from './AdventureTypes'
import Testimonials from './Testimonials'
import PlanningTools from './PlanningTools'

export default function page() {
  return (
    <div className="aventure-page">
      <HeroSection />
      <PopularDestinations />
      <AdventureTypes />
      <Testimonials />
      <PlanningTools />
    </div>
  )
}
