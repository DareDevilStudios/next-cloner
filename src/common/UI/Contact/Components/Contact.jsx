import React from 'react'
import Image from 'next/image'
import {Card} from 'flowbite-react'

const Contact = ({image,title,subtitle, subtitle2, button}) => {
  return (
    <div className="w-max hover:shadow-md">
  <Card>
    
    <div className="flex flex-col items-center pb-10 md:w-[15rem]">
      <Image
        className="mb-3 h-24 w-24 "
        src={image}
        alt="Bonnie image"
      />
      <h5 className="mb-1 text-xl font-medium font-display text-gray-900 dark:text-white">
        {title}
      </h5>
      <span className="text-xs text-gray-500 dark:text-gray-400">
        {subtitle}
      </span>
      <span className="pt-5 text-md text-gray-500 dark:text-gray-400">
        {subtitle2}
      </span>
      <button className="text-sm font-display font-bold hover:text-shipy pt-5" >{button}</button>
      
    </div>
  </Card>
</div>
  )
}

export default Contact