import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import Image1 from "../../../../../public/assets/images/clients/1.png";
import Image2 from "../../../../../public/assets/images/clients/2.png";
import Image3 from "../../../../../public/assets/images/clients/3.jpeg";
import Image4 from "../../../../../public/assets/images/clients/4.png";
import Image5 from "../../../../../public/assets/images/clients/5.png";
import Image6 from "../../../../../public/assets/images/clients/6.png";
import Image7 from "../../../../../public/assets/images/clients/7.png";
import Image8 from "../../../../../public/assets/images/clients/8.png";
import Image9 from "../../../../../public/assets/images/clients/9.png";
// import Image10 from "../../../../../public/assets/images/clients/10.png";
import Image11 from "../../../../../public/assets/images/clients/11.png";
import Image12 from "../../../../../public/assets/images/clients/12.png";
import Image13 from "../../../../../public/assets/images/clients/13.png";
import Image14 from "../../../../../public/assets/images/clients/14.png";
import Image15 from "../../../../../public/assets/images/clients/15.jpeg";
import Image16 from "../../../../../public/assets/images/clients/16.png";
import Image17 from "../../../../../public/assets/images/clients/17.png";
import Image18 from "../../../../../public/assets/images/clients/18.png";
import Image19 from "../../../../../public/assets/images/clients/19.png";
import Image20 from "../../../../../public/assets/images/clients/20.jpg";
import Image21 from "../../../../../public/assets/images/clients/21.jpg";
import Image22 from "../../../../../public/assets/images/clients/22.png";
import Image23 from "../../../../../public/assets/images/clients/23.jpeg";
import Image24 from "../../../../../public/assets/images/clients/24.jpeg";
import Image25 from "../../../../../public/assets/images/clients/25.webp";
import Image26 from "../../../../../public/assets/images/clients/26.jpg";
import Image27 from "../../../../../public/assets/images/clients/27.png";
import Image28 from "../../../../../public/assets/images/clients/28.png";
import Image29 from "../../../../../public/assets/images/clients/29.png";
import Image30 from "../../../../../public/assets/images/clients/30.png";
import Image31 from "../../../../../public/assets/images/clients/31.png";
import Image32 from "../../../../../public/assets/images/clients/32.png";
import Image33 from "../../../../../public/assets/images/clients/33.png";
import Image34 from "../../../../../public/assets/images/clients/34.png";

const Test = () => {
  return (
    <div className="h-[30rem] md:h-[25rem] md:p-20 sm:mb-72 mb-32 justify-center ">
      <h5 class="my-10 text-3xl md:text-5xl font-bold tracking-wide font-body text-gray-900 dark:text-white text-center">
        <span className="font-medium">OUR</span> CLIENTS
      </h5>
      <Carousel className="overflow-hidden">
        <div className="flex flex-col md:flex-row gap-7 sm:gap-16 justify-around px-20 overscroll-hidden items-center justify-center">
          <Image className="object-contain w-52" src={Image1} alt="..." />
          <Image className="object-contain w-52" src={Image2} alt="..." />
          <Image className="object-contain w-52" src={Image3} alt="..." />
          <Image className="object-contain w-52" src={Image4} alt="..." />
          <Image className="object-contain w-52 " src={Image5} alt="..." />
        </div>
        <div className="flex flex-col md:flex-row gap-7 sm:gap-14 justify-around px-20 overflow-hidden items-center justify-center">
          <Image className="object-contain w-24 sm:w-40" src={Image6} alt="..." />
          <Image className="object-contain w-24 sm:w-40" src={Image7} alt="..." />
          <Image className="object-contain w-24 sm:w-40" src={Image8} alt="..." />
          <Image className="object-contain w-24 sm:w-40" src={Image9} alt="..." />
          <Image className="object-contain w-24 sm:w-40" src={Image11} alt="..." />
        </div>
        <div className="flex flex-col md:flex-row gap-7 sm:gap-16 justify-around px-20 overflow-hidden items-center justify-center">
          <Image className="object-contain w-52" src={Image12} alt="..." />
          <Image className="object-contain w-52" src={Image32} alt="..." />
          <Image className="object-contain w-52" src={Image14} alt="..." />
          <Image className="object-contain w-52" src={Image15} alt="..." />
          <Image className="object-contain w-52 " src={Image16} alt="..." />
        </div>
      </Carousel>
      <Carousel className="hidden sm:block">
        <div className="flex flex-col md:flex-row gap-14 justify-around px-20">
          <Image className="object-contain w-40" src={Image17} alt="..." />
          <Image className="object-contain w-40" src={Image18} alt="..." />
          <Image className="object-contain w-52" src={Image19} alt="..." />
          <Image className="object-contain w-40" src={Image20} alt="..." />
          <Image className="object-contain w-20" src={Image21} alt="..." />
        </div>
        <div className="flex flex-col md:flex-row gap-14 justify-around px-20">
          <Image className="object-contain w-40" src={Image22} alt="..." />
          <Image className="object-contain w-40" src={Image23} alt="..." />
          <Image className="object-contain w-72" src={Image24} alt="..." />
          <Image className="object-contain w-40" src={Image25} alt="..." />
          <Image className="object-contain w-[21rem]" src={Image26} alt="..." />
        </div>
        <div className="flex flex-col md:flex-row gap-14 justify-around px-20">
          <Image className="object-contain w-40" src={Image27} alt="..." />
          <Image className="object-contain w-40" src={Image28} alt="..." />
          <Image className="object-contain w-40" src={Image29} alt="..." />
          <Image className="object-contain w-40" src={Image30} alt="..." />
          <Image className="object-contain w-40" src={Image31} alt="..." />
        </div>
        <div className="flex flex-col md:flex-row gap-14 justify-around px-20">
          <Image className="object-contain w-40" src={Image33} alt="..." />
          <Image className="object-contain w-40" src={Image34} alt="..." />
          <Image className="object-contain w-72" src={Image24} alt="..." />
          <Image className="object-contain w-40" src={Image25} alt="..." />
          <Image className="object-contain w-[21rem]" src={Image26} alt="..." />
        </div>
      </Carousel>
    </div>
  );
};

export default Test;
