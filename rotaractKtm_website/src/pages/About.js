import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import AboutUsBanner from '../components/aboutUsComponents/heroComponent'
import StorySection from '../components/aboutUsComponents/StorySection'
import PillarsSection from '../components/aboutUsComponents/PillarSection'
import JourneySection from '../components/aboutUsComponents/JourneySection'
import Avenues from '../components/aboutUsComponents/Avenues'



function About() {
    
       return (
    <>
      <Navbar />
      <AboutUsBanner />
      <StorySection />
      <Avenues />
      <PillarsSection />
      <JourneySection />    
      <Footer />

    </>  
  )
    
}

export default About
