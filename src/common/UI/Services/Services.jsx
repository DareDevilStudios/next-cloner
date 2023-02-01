import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Mtop from '../../components/Mtop.jsx'
import Banner from '../../components/Banner.jsx'
import Gallery from './Components/Gallery.jsx'
import Footer from '../../components/Footer.jsx'

const Services = () => {
  return (
    <div>
      <Navbar/>
      <Mtop/>
      <Banner title="OUR SERVICES" />
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default Services
