import Image from "next/image";
import React from "react";
import { Carousel } from "flowbite-react";
// import anime from "animejs/lib/anime.es.js";

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
    <div className="w-full h-[1140px]">
      <Carousel leftControl="" rightControl="">
        <div className="flex bg-[url('/assets/images/main-slider/7.jpg')] bg-cover bg-no-repeat h-full items-center justify-center bg-gray-400  text-white">
          <div class="mover mr-auto place-self-center lg:col-span-7 pl-[12rem]">
            <h1 class="max-w-2xl mb-5 text-4xl font-bold tracking-tight leading-none md:text-3xl text-white ease-in duration-700">
              ICONIC PRODUCTS &
            </h1>
            <h1 class="max-w-2xl mb-4 font-body text-4xl font-extrabold tracking-wider leading-none md:text-8xl text-white ease-in duration-700">
              Innovative <br /> Solutions
            </h1>

            <a
              href="#"
              class="inline-flex items-center justify-center px-14 py-5 mt-6 text-xl font-medium text-center border-4 border-gray-300 hover:bg-gray-100 hover:text-black focus:ring-4 text-white duration-500"
            >
            
              Explore More
            </a>
          </div>
        </div>
        <div className="flex bg-[url('/assets/images/main-slider/8.jpg')] bg-cover bg-no-repeat h-full items-center justify-center bg-gray-400  text-white">
          <div class="mr-auto place-self-center lg:col-span-7 pl-[12rem]">
            <h1 class="max-w-2xl mb-5 text-4xl font-bold tracking-tight leading-none md:text-3xl text-white ease-in duration-700">
              ICONIC PRODUCTS &
            </h1>
            <h1 class="max-w-2xl font-body  mb-4 text-4xl font-extrabold tracking-wider leading-none md:text-8xl text-white ease-in duration-700">
              Innovative <br /> Solutions
            </h1>

            <a
              href="#"
              class="inline-flex items-center justify-center px-14 py-5 mt-6 text-xl font-medium text-center border-4 border-gray-300 hover:bg-gray-100 hover:text-black focus:ring-4 text-white duration-500"
            >
              Explore More
            </a>
          </div>
        </div>
        <div className="flex bg-[url('/assets/images/main-slider/78.jpg')] bg-cover bg-no-repeat h-full items-center justify-center bg-gray-400  text-white">
          <div class="mr-auto place-self-center lg:col-span-7 pl-[12rem]">
            <h1 class="max-w-2xl mb-5 text-4xl font-bold tracking-tight leading-none md:text-3xl text-white ease-in duration-700">
              ICONIC PRODUCTS &
            </h1>
            <h1 class="max-w-2xl mb-4 font-body text-4xl font-extrabold tracking-wider leading-none md:text-8xl text-white ease-in duration-700">
              Innovative <br /> Solutions
            </h1>

            <a
              href="#"
              class="inline-flex items-center justify-center px-14 py-5 mt-6 text-xl font-medium text-center border-4 border-gray-300 hover:bg-gray-100 hover:text-black focus:ring-4 text-white duration-500"
            >
              Explore More
            </a>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousal3;
