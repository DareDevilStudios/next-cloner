import React from 'react'
import Navbar from '../../components/Navbar'
import Mtop from '../../common/components/Mtop'
import Header from './Components/Header'
import AboutUs from './Components/AboutUs'
import Banner from '../../common/components/Banner'
import Vision from './Components/Vision'
import Footer from '../../components/Footer'

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