import React from 'react'

const banner = ({title}) => {
  return (
    <div className="w-full h-36 md:h-80 bg-[url('/assets/images/background/banner.jpeg')] bg-no-repeat bg-cover bg-center  flex justify-center items-center font-bold text-3xl md:text-5xl font-body text-white tracking-wider">
      {title}
    </div>
  )
}

export default banner
