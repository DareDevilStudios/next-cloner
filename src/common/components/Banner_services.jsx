import React from 'react'

const Banner_services = ({title}) => {
  return (
    <div className="w-full h-24 md:h-56 bg-[url('/assets/images/background/banner-6.jpg')] bg-no-repeat bg-cover bg-center  flex justify-center items-center font-bold text-3xl md:text-5xl font-body text-white tracking-wider">
      {title}
    </div>
  )
}

export default Banner_services
