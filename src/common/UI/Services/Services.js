import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Mtop from '../../components/Mtop'
import Gallery from './components/Gallery'
import Footer from '../../components/Footer'

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
