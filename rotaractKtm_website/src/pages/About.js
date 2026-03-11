import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import AboutUsBanner from '../components/aboutUsComponents/heroComponent'
import StorySection from '../components/aboutUsComponents/StorySection'
import PillarsSection from '../components/aboutUsComponents/PillarSection'
import JourneySection from '../components/aboutUsComponents/JourneySection'
import Avenues from '../components/aboutUsComponents/Avenues'
import TwinClubs from '../components/aboutUsComponents/Twinclubs'



function About() {
    
       return (
    <>
      <Navbar />
      <AboutUsBanner />
      <StorySection />
      <PillarsSection />
      <Avenues />
      <JourneySection />   
      <TwinClubs/> 
      <Footer />

    </>  
  )
    
}

export default About
