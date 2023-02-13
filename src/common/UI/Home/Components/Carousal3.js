import Image from "next/image";
import React from "react";
import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";

const Carousal3 = () => {
  // const slides = [
  //     {
  //       content: "We are a team of passionate designers and developers1.",
  //       url: "/assets/images/main-slider/7.jpg",
  //     },
  //     {
  //       content: "We are a team of passionate designers and developers2.",
  //       url: "/assets/images/main-slider/8.jpg",
  //     },
  //     {
  //       content: "We are a team of passionate designers and developers3.",
  //       url: "/assets/images/main-slider/78.jpg",
  //     },
  // ];

  //   anime({
  //     targets: ".mover",
  //     translateX: 250,
  //     duration: 3000,
  //   });

  return (
    <motion.nav animate={{ scale: [2, 1] }}
    transition={{duration: 1, times: [0, 0.1, 0.4,0.7, 0.9, 1] }}
     className="w-full h-[500px]  lg:h-[750px]"
     >
      <Carousel className="text-transparent" leftControl="1" rightControl="1">
        <motion.div  className="flex bg-[url('/assets/images/main-slider/7.jpg')] bg-cover bg-no-repeat bg-center h-full items-center justify-center bg-gray-400  text-white">
          <div class="mover mr-auto place-self-center pl-10 sm:pl-20 md:pl-[12rem]">
            <h1 class=" mb-5 font-bold tracking-wide leading-none text-xl md:text-2xl text-white ease-in duration-700">
              ICONIC PRODUCTS
            </h1>
            <h1 class=" mb-4 font-body font-extrabold tracking-wider leading-none text-4xl md:text-5xl lg:text-7xl text-white ease-in duration-700">
              Innovative <br /> Solutions
            </h1>

            <a
              href="#about"
              class="inline-flex items-center justify-center px-10 py-3 mt-6 text-lg font-medium text-center border-2 border-gray-300 hover:bg-shipy hover:text-white hover:border-shipy focus:ring-4 text-white duration-500"
            >

              Explore More
            </a>
          </div>
        </motion.div>
        <motion.div  className="flex bg-[url('/assets/images/main-slider/8.jpg')] bg-cover bg-no-repeat bg-center h-full items-center justify-center bg-gray-400  text-white">
          <div class="mr-auto place-self-center pl-10 sm:pl-20 md:pl-[12rem]">
            <h1 class=" mb-5 font-bold tracking-wide leading-none text-xl md:text-2xl text-white ease-in duration-700">
              ICONIC PRODUCTS &
            </h1>
            <h1 class=" font-body  mb-4  font-extrabold tracking-wider leading-none text-4xl md:text-5xl lg:text-7xl text-white ease-in duration-700">
              Innovative <br /> Solutions
            </h1>

            <a
              href="#about"
              class="inline-flex items-center justify-center px-10 py-3 mt-6 text-lg font-medium text-center border-2 border-gray-300 hover:bg-shipy hover:text-white hover:border-shipy focus:ring-4 text-white duration-500"
            >
              Explore More
            </a>
          </div>
        </motion.div>
        <motion.div  className="flex bg-[url('/assets/images/main-slider/78.jpg')] bg-cover bg-no-repeat bg-center h-full items-center justify-center bg-gray-400  text-white">
          <div class="mr-auto place-self-center pl-10 sm:pl-20 md:pl-[12rem]">
            <h1 class=" mb-5 font-bold tracking-wide leading-none text-xl md:text-2xl text-white ease-in duration-700">
              ICONIC PRODUCTS &
            </h1>
            <h1 class=" mb-4 font-body  font-extrabold tracking-wider leading-none text-4xl md:text-5xl lg:text-7xl text-white ease-in duration-700">
              Innovative <br /> Solutions
            </h1>

            <a
              href="#about"
              class="inline-flex items-center justify-center px-10 py-3 mt-6 text-lg font-medium text-center border-2 border-gray-300 hover:bg-shipy hover:text-white hover:border-shipy focus:ring-4 text-white duration-500"
            >
              Explore More
            </a>
          </div>
        </motion.div>
      </Carousel>
    </motion.nav>
  );
};

export default Carousal3;
