import React from 'react'
import CalendarSection from './CalendarSection'
import UpcomingEventsSection from './UpcomingEventsSection'
import TravelTipsSection from './TravelTipsSection'
import WeatherForecastSection from './WeatherForecastSection'
import HeaderSection from './HeaderSection'

export default function page() {
  return (
    <div className="agenda-page bg-gray-100 min-h-screen">
      <HeaderSection/>
      <CalendarSection />
      <UpcomingEventsSection />
      <TravelTipsSection />
      <WeatherForecastSection />
    </div>
  )
}
