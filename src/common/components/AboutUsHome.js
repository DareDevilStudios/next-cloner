import Image from "next/image";
import React from "react";
import About from "../../../public/assets/images/about-home2.jpg";
import Return from "../../../public/assets/icons/return.svg";
import { motion } from "framer-motion";

const AboutUsHome = () => {
  return (
    <div>
      <section id="about" class="bg-white w-full">
      <motion.div
        initial={{ y: 100 , opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}

        transition={{ type: "bounce", stiffness: 100 }} class="flex md:flex-row flex-col items-center justify-center w-full py-8 gap-9 lg:py-16">
          <div class="md:w-1/2 w-full px-7 md:p-20">
            <h3 className="font-semibold text-2xl text-gray-400 mb-4">
              About Us
            </h3>
            <h1 class="font-inter w-11/12 mb-5 text-2xl md:text-4xl font-bold tracking-wide leading-1 text-blue-700">
              We Take Pride in Serving Our Customers Safely.
            </h1>
            <p class="text-justify mb-6 font-normal  lg:mb-8 text-gray-900">
              Innovation with strong engineering background being the founding
              stone of ShipTech-ICON,{" "}{" "}
              <span className="font-bold italic">
                our aim is to innovate and improve the product and client
                processes so as to have cost effective and better solutions.
              </span>{" "}
              We provide technical assistance to the maritime and related
              industries/organizations by way of design, modifications,
              evaluation of projects etc. with active support from other experts
              in the field. ShipTech-ICON adopts scientific design procedures on
              a much cheaper rate thereby making it more accessible to the
              owners and thus ensuring the proper life cycle management of
              products including boats and vessels. We have experience doing a
              wide spectrum of projects including site supervision, project
              management, basic design, production design & support.
            </p>
            <div class="">
              <h3 className="font-inter tracking-wide font-normal text-xl text-black mb-7">
                We Provide Best Quality Services
              </h3>
              <div className="grid gap-2 md:gap-4 text-gray-500 text-md tracking-wider">
                <div className="grid md:grid-cols-2 md:gap-20 gap-2 lg:justify-center lg:items-center  ">
                  <div className="flex w-max">
                    <Image src={Return} alt="mockup" width={25} />
                    <p className="font-normal ml-2 lg:w-5/6 xl:w-full">
                      Naval Architectural Services
                    </p>
                  </div>
                  <div className="flex w-max">
                    <Image src={Return} alt="mockup" width={25} />
                    <p className="font-normal ml-2 lg:w-5/6 xl:w-full">
                      Product Designing
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-20 gap-2 lg:justify-center lg:items-center ">
                  <div className="flex w-max">
                    <Image src={Return} alt="mockup" width={25} />
                    <p className="font-normal ml-2 lg:w-5/6 xl:w-full">
                      Marine Services
                    </p>
                  </div>
                  <div className="flex w-max">
                    <Image src={Return} alt="mockup" width={25} />
                    <p className="font-normal ml-2 lg:w-5/6 xl:w-full">
                      Prototype Manufacturing
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-20 gap-2 lg:justify-center lg:items-center ">
                  <div className="flex w-max">
                    <Image src={Return} alt="mockup" width={25} />
                    <p className="font-normal ml-2 lg:w-5/6 xl:w-full">
                    Structural Engineering Services
                    </p>
                  </div>
                  <div className="flex w-max">
                    <Image src={Return} alt="mockup" width={25} />
                    <p className="font-normal ml-2 lg:w-5/6 xl:w-full">
                    Hydrodynamics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <Image className="h-full xl:w-[32rem] lg:w-[24rem]" src={About} alt="mockup" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUsHome;
