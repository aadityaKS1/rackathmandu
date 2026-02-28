import React from 'react'
import Navbar from '../components/navbar/Navbar'
import AboutUsBanner from '../components/aboutUsComponents/heroComponent'
import Footer from '../components/footer/Footer'
import StorySection from '../components/aboutUsComponents/StorySection'
import PillarsSection from '../components/aboutUsComponents/PillarSection'
import JourneySection from '../components/aboutUsComponents/JourneySection' 

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutUsBanner />
      <StorySection />
      <PillarsSection />
      <JourneySection />
      <Footer />
    </div>
  )
}

export default About
