import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Mtop from '../../components/Mtop.jsx'
import Header from './Components/Header.jsx'
import AboutUs from './Components/AboutUs.jsx'
import Banner from '../../components/Banner.jsx'
import Vision from './Components/Vision.jsx'
import Footer from '../../components/Footer.jsx'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Mtop/>
        <Banner title="About Us" />
        <AboutUs/>
        <Vision/>
        <Footer/>
    </div>
  )
}

export default About