import React from 'react'
import Navbar from '../components/navbar/Navbar'
import EventBanner from '../components/eventsComponents/Hero'
import EventSection from '../components/eventsComponents/EventSection'
import Footer from '../components/footer/Footer'


function Events() {
    return (
        <div>
      <Navbar />
      <EventBanner />
      <EventSection />
      <Footer />
    </div>
    )
}

export default Events
