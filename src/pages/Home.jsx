import React from 'react'
import Slider from '../components/Slider'
import HomeProducts from '../components/HomeProducts'
import HomeHero from '../components/HomeHero'
import TestimonialsSection from '../components/Testimonial'


const Home = () => {
  return (
    <>
      <Slider/>
      <HomeHero/>
      <HomeProducts/>
      <TestimonialsSection/>
    
    </>
  )
}

export default Home