import React from 'react'
import Navbar from '../../components/Navbar'
import Mtop from '../../components/Mtop'
import Header from './Components/Header'
import AboutUs from './Components/AboutUs'
import Banner from '../../components/Banner'
import Vision from './Components/Vision'
import Footer from '../../components/Footer'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Mtop/>
        <Banner title="ABOUT US" />
        <AboutUs/>
        <Vision/>
        <Footer/>
    </div>
  )
}

export default About