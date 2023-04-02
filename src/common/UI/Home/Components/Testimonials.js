import Image from "next/image";
import React, { useState, useEffect } from "react";
import F1 from "../../../../../public/assets/images/about-home2.jpg";
import backg from "../../../../../public/assets/images/background/image-2.jpg";
import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";
import Stars from "./Stars";

const Testimonials = () => {
  const [index, setindex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setindex(index + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);
  const testimonials_data = [
    {
      id: 1,
      name: "Dr.J Latha",
      designation:
        "Former Vice Chancellor, Cochin University of Science & Technology",
      description: "Good work. Keep it up.",
    },
    {
      id: 2,
      name: "DIG N. Ravi",
      designation: "Commander, Coast Guards, Kerala & Mahe",

      description:
        "It is heartening to sea startups, the passion revealed in innovativeness and out of box thought of establishing the marine industry is well appreciated. Wishing a long way ahead in the unexplored oceans.",
    },
  ];

  return (
    <div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}

        transition={{ type: "bounce", stiffness: 100 }} className="flex flex-col h-[30rem] sm:h-[35rem] bg-shipblue bg-opacity-90 mx-20">
        <div className="flex justify-center items-center my-5 sm:my-[4rem]">
          <h1 className="sm:text-4xl text-3xl md:text-5xl font-bold tracking-wide font-inter text-white">TESTIMONIALS</h1>
        </div>
        <div class="sm:grid h-56 hidden sm:grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-72">
          <Carousel className="text-transparent" leftControl="1" rightControl="1">
            <div className="w-4/6 md:w-5/6 h-[25rem] sm:h-full flex flex-col justify-around items-center bg-white rounded  px-4 py-8 mx-auto text-center lg:py-6 lg:px-6">
              <figure class="max-w-screen-md h-1/6 mx-auto flex flex-col justify-around items-center">
                <svg
                  class="h-8 md:h-12 mx-auto mb-1 md:mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <Stars />
                <blockquote>
                  <p class="text-xs md:text-xl mx-auto w-5/6 h-30 flex justify-center items-center self-end font-medium text-gray-900 dark:text-white">
                    {testimonials_data[0].description}
                  </p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-3 space-x-3 self-end">
                  <div class="flex justify-center  items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div class="pr-3 w-1/2 text-sm md:text-lg font-bold text-gray-900 dark:text-white">
                      {testimonials_data[0].name}
                    </div>
                    <div class="pl-3 w-1/2 text-xs md:text-md font-semibold text-gray-500 dark:text-gray-400">
                      {testimonials_data[0].designation}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div class="w-4/6 md:w-5/6 h-[25rem] sm:h-full flex flex-col justify-around items-center bg-white rounded  px-4 py-8 mx-auto text-center lg:py-6 lg:px-6">
              <figure class="max-w-screen-md h-1/6 mx-auto flex flex-col justify-around items-center">
                <svg
                  class="h-8 md:h-12 mx-auto mb-1 md:mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <Stars />
                <blockquote>
                  <p class="text-xs md:text-xl mx-auto w-5/6 h-30 flex justify-center items-center self-end font-medium text-gray-900 dark:text-white">
                    {testimonials_data[1].description}
                  </p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-3 space-x-3 self-end">
                  <div class="flex justify-center  items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div class="pr-3 w-1/2 text-sm md:text-lg font-bold text-gray-900 dark:text-white">
                      {testimonials_data[1].name}
                    </div>
                    <div class="pl-3 w-1/2 text-xs md:text-md font-semibold text-gray-500 dark:text-gray-400">
                      {testimonials_data[1].designation}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </Carousel>
          <Carousel className="text-transparent" leftControl="1" rightControl="1">
            <div class="w-4/6 md:w-5/6 h-[25rem] md:h-full flex flex-col justify-around items-center bg-white rounded  px-4 py-8 mx-auto text-center lg:py-6 lg:px-6">
              <figure class="max-w-screen-md h-1/6 mx-auto flex flex-col justify-around items-center">
                <svg
                  class="h-8 md:h-12 mx-auto mb-1 md:mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <Stars />
                <blockquote>
                  <p class="text-xs md:text-xl mx-auto w-5/6 h-30 flex justify-center items-center self-end font-medium text-gray-900 dark:text-white">
                    {testimonials_data[1].description}
                  </p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-3 space-x-3 self-end">
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div class="pr-3 w-1/2 text-sm md:text-lg font-bold text-gray-900 dark:text-white">
                      {testimonials_data[1].name}
                    </div>
                    <div class="pl-3 w-1/2 text-xs md:text-md font-semibold text-gray-500 dark:text-gray-400">
                      {testimonials_data[1].designation}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div class="w-4/6 md:w-5/6 h-[25rem] md:h-full flex flex-col justify-around items-center bg-white rounded  px-4 py-8 mx-auto text-center lg:py-6 lg:px-6">
              <figure class="max-w-screen-md h-1/6 mx-auto flex flex-col justify-around items-center">
                <svg
                  class="h-8 md:h-12 mx-auto mb-1 md:mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <Stars />
                <blockquote>
                  <p class="text-xs md:text-xl mx-auto w-5/6 h-30 flex justify-center items-center self-end font-medium text-gray-900 dark:text-white">
                    {testimonials_data[0].description}
                  </p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-3 space-x-3 self-end">
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div class="pr-3 w-1/2 text-sm md:text-lg font-bold text-gray-900 dark:text-white">
                      {testimonials_data[0].name}
                    </div>
                    <div class="pl-3 w-1/2 text-xs md:text-md font-semibold text-gray-500 dark:text-gray-400">
                      {testimonials_data[0].designation}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </Carousel>
        </div>


        <div class=" sm:hidden sm:grid-cols-2 gap-4 sm:h-64 ">
          <Carousel leftControl="" rightControl="">
            <div class="w-4/6 md:w-5/6 h-[20rem] md:h-full flex flex-col justify-around items-center bg-white rounded  px-4 py-8 mx-auto text-center lg:py-6 lg:px-6">
              <figure class="max-w-screen-md h-1/6 mx-auto flex flex-col justify-around items-center">
                <svg
                  class="h-8 md:h-12 mx-auto mb-1 md:mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <Stars />
                <blockquote>
                  <p class="text-xs md:text-xs mx-auto w-5/6 h-30 flex justify-center items-center self-end font-medium text-gray-900 dark:text-white">
                    {testimonials_data[0].description}
                  </p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-3 space-x-3 self-end">
                  <div class="flex  items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div class="pr-3 w-1/2 text-sm md:text-lg font-bold text-gray-900 dark:text-white">
                      {testimonials_data[0].name}
                    </div>
                    <div class="pl-3 w-1/2 text-xs md:text-lg font-semibold text-gray-500 dark:text-gray-400">
                      {testimonials_data[0].designation}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div class="w-4/6 md:w-5/6 h-[20rem] md:h-full flex flex-col justify-around items-center bg-white rounded  px-4 py-8 mx-auto text-center lg:py-6 lg:px-6">
              <figure class="max-w-screen-md h-1/6 mx-auto flex flex-col justify-around items-center">
                <svg
                  class="h-8 md:h-12 mx-auto mb-1 md:mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <Stars />
                <blockquote>
                  <p class="text-xs md:text-normal mx-auto w-5/6 h-20 md:h-30 flex justify-center items-center self-end font-medium text-gray-900 dark:text-white">
                    {testimonials_data[1].description}
                  </p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-3 space-x-3 self-end">
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div class="pr-3 w-1/2 text-sm md:text-lg font-bold text-gray-900 dark:text-white">
                      {testimonials_data[1].name}
                    </div>
                    <div class="pl-3 w-1/2 text-xs md:text-lg font-semibold text-gray-500 dark:text-gray-400">
                      {testimonials_data[1].designation}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
