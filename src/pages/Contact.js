import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ContactBanner from '../components/ContactUs/contactBanner'
import ContactForm from '../components/ContactUs/ContactForm'
import ContactCTA from '../components/ContactUs/ContactCTA'
import Footer from '../components/footer/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactBanner />
      <ContactForm />
      <ContactCTA />
      <Footer />
    </div>
  )
}

export default Contact
