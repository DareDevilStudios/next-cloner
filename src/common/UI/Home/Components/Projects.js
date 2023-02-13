import Image from "next/image";
import React from "react";
import F1 from "../../../../../public/assets/images/resource/featured-image-23.jpg";
import F2 from "../../../../../public/assets/images/resource/featured-image-24.jpg";
import F3 from "../../../../../public/assets/images/resource/featured-image-25.jpg";
import F4 from "../../../../../public/assets/images/resource/featured-image-26.jpg";
import F5 from "../../../../../public/assets/images/resource/featured-image-27.jpg";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
        initial={{ y: 100 , opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}

        transition={{ type: "bounce", stiffness: 100 }} className="w-100 my-14 flex-col md:flex md:flex-row justify-center items-center">
      <div className="w-100 flex justify-center items-center">
        <div class="w-5/6 md:w-4/6 md:h-[45rem] self-baseline  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <Image className="w-full h-1/4 md:h-1/2" src={F1} alt="" />
          </a>
          <div class="py-5 px-4 md:px-8">
            <a href="#">
              <h5 class="my-4 text-2xl md:text-4xl font-medium tracking-wide font-inter text-gray-900 dark:text-white">
                <span className="font-normal">OUR</span> PROJECTS
              </h5>
            </a>
            <p class="mb-3 text-md leading-7 md:leading-9 md:tracking-widest font-normal text-gray-700 dark:text-gray-400">
              With our hardship, effort and the reliability that we offered to
              our customers, we built a numerous number of floating palaces
              around the globe.
            </p>
            <a
              href="#"
              class="inline-flex items-center text-lg font-semibold text-center text-shipblue border-2 border-shipblue hover:text-white hover:bg-shipblue duration-300  mt-3 px-4 md:px-8 py-1 md:py-2"
            >
              Explore more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="w-100 mt-20 md:mt-0 flex justify-center items-center">
        <div className="grid gap-7 px-6 md:grid-cols-2 justify-center items-center">
          <div className="bg-black group mb-16 relative flex flex-col justify-center items-center">
            <Image className="group-hover:opacity-30" src={F2} alt="" />
            <div className=" w-4/5 h-20 flex justify-center items-center xl:text-lg text-lg lg:text-sm absolute -bottom-6 bg-yellow-300 text-shipblue font-bold tracking-wide text-center group-hover:-translate-y-9 duration-500">
              <h2 className="w-11/12 sm:p-3">FLOATING DOCK ANALYSIS</h2>
            </div>
          </div>
          <div className="bg-black group mb-16 relative flex flex-col justify-center items-center">
            <Image className="group-hover:opacity-30" src={F3} alt="" />
            <div className=" w-4/5 h-20 flex justify-center items-center xl:text-lg text-lg lg:text-sm absolute -bottom-6 bg-yellow-300 text-shipblue font-bold tracking-wide text-center group-hover:-translate-y-9 duration-500">
              <h2 className="w-11/12 sm:p-3">CONCEPT DESIGN OF JACKUP BARGE</h2>
            </div>
          </div>
          <div className="bg-black group mb-16 relative flex flex-col justify-center items-center">
            <Image className="group-hover:opacity-30" src={F4} alt="" />
            <div className=" w-4/5 h-20 flex justify-center items-center xl:text-lg text-lg lg:text-sm absolute -bottom-6 bg-yellow-300 text-shipblue font-bold tracking-wide text-center group-hover:-translate-y-9 duration-500">
              <h2 className="w-11/12 sm:p-3">CFD ANALYSIS OF PROPELLER</h2>
            </div>
          </div>
          <div className="bg-black group mb-16 relative flex flex-col justify-center items-center">
            <Image className="group-hover:opacity-30" src={F5} alt="" />
            <div className=" w-4/5 h-20 flex justify-center items-center xl:text-lg text-lg lg:text-sm absolute -bottom-6 bg-yellow-300 text-shipblue font-bold tracking-wide text-center group-hover:-translate-y-9 duration-500">
              <h2 className="w-11/12 sm:p-3">YACHT DESIGNING</h2>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
