import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sevices = () => {
  return (
    <section class="bg-white">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "bounce", stiffness: 100 }}
        class=" py-8 px-4 w-full lg:py-16 lg:px-6 text-center"
      >
        <div class="w-full text-center mb-8 lg:mb-16 flex flex-col justify-center items-center">
          <h2 class="mb-4 text-3xl md:text-5xl tracking-tight font-body font-semibold text-gray-900 dark:text-white">
            <span className="font-normal">OUR</span> SERVICES
          </h2>
          <p class="font-normal text-gray-900 text-md dark:text-gray-350 w-4/6">
            We offer designs for ships, boats and Offshore sector. This includes
            Basic design to CFD/FE Analysis. We provide 3D visualization as well
            as production engineering and supply boat building kits. Through our
            partners we have started doing fabrication also.
          </p>
        </div>
        <div class="flex md:flex-row flex-col gap-5 w-full lg:mb-16 justify-center items-center mx-auto">
          <Link
            href="/services/naval-architectural-services"
            className="w-[15rem] hover:w-[20rem] md:hover:w-[25rem] group justify-center items-center bg-[url('/assets/images/resource/service/naval.jpg')] bg-cover bg-no-repeat  h-[16rem] md:h-[21rem] bg-center relative hover: duration-500"
          >
            <div className="items-center justify-center w-full absolute bottom-10 ">
              <h5 className="text-2xl text-center lg:text-xl xl:text-2xl font-bold text-white">
                Naval <br /> Architectural <br /> Services
              </h5>
            </div>
            {/* overlay */}
            <div className="hidden group-hover:block rounded-2xl duration-700 absolute w-full z-10 bottom-0 left-0 right-0 h-full bg-black bg-opacity-30 "></div>
          </Link>

          <Link
            href="/services/structural-engineering-services"
            className="w-[15rem] hover:w-[20rem] md:hover:w-[25rem] group justify-center items-center bg-[url('/assets/images/resource/service/Structural.jpg')] bg-cover bg-no-repeat  h-[16rem] md:h-[21rem] bg-center relative hover: duration-500"
          >
            <div className="items-center justify-center w-full absolute bottom-10 ">
              <h5 className="text-2xl text-center lg:text-xl xl:text-2xl font-bold text-white">
                Structural <br /> Engineering <br /> Services
              </h5>
            </div>
            {/* overlay */}
            <div className="hidden group-hover:block rounded-2xl duration-700 absolute w-full z-10 bottom-0 left-0 right-0 h-full bg-black bg-opacity-30 "></div>
          </Link>
          <Link
            href="/services/hydrodynamics"
            className="w-[15rem] hover:w-[20rem] md:hover:w-[25rem] group justify-center items-center bg-[url('/assets/images/resource/service/Hydrodynamics.jpg')] bg-cover bg-no-repeat  h-[16rem] md:h-[21rem] bg-center relative hover: duration-500"
          >
            <div className="items-center justify-center w-full absolute bottom-10 ">
              <h5 className="text-2xl text-center lg:text-xl xl:text-2xl font-bold text-white">
                Hydrodynamics
              </h5>
            </div>
            {/* overlay */}
            <div className="hidden group-hover:block rounded-2xl duration-700 absolute w-full z-10 bottom-0 left-0 right-0 h-full bg-black bg-opacity-30 "></div>
          </Link>
          <Link
            href="/services/product-designing"
            className="w-[15rem] hover:w-[20rem] md:hover:w-[25rem] group justify-center items-center bg-[url('/assets/images/resource/service/Product.jpg')] bg-cover bg-no-repeat  h-[16rem] md:h-[21rem] bg-center relative hover: duration-500"
          >
            <div className="items-center justify-center w-full absolute bottom-10 ">
              <h5 className="text-2xl text-center lg:text-xl xl:text-2xl font-bold text-white">
                Product Designing
              </h5>
            </div>
            {/* overlay */}
            <div className="hidden group-hover:block rounded-2xl duration-700 absolute w-full z-10 bottom-0 left-0 right-0 h-full bg-black bg-opacity-30 "></div>
          </Link>
          <Link
            href="/services/marine-services"
            className="w-[15rem] hover:w-[20rem] md:hover:w-[25rem] group justify-center items-center bg-[url('/assets/images/resource/service/Marine.jpg')] bg-cover bg-no-repeat  h-[16rem] md:h-[21rem] bg-center relative hover: duration-500"
          >
            <div className="items-center justify-center w-full absolute bottom-10 ">
              <h5 className="text-2xl text-center lg:text-xl xl:text-2xl font-bold text-white">
                Marine Services
              </h5>
            </div>
            {/* overlay */}
            <div className="hidden group-hover:block rounded-2xl duration-700 absolute w-full z-10 bottom-0 left-0 right-0 h-full bg-black bg-opacity-30 "></div>
          </Link>

          {/* new modelling */}
          <Link
            href="/services/scaled-marine-model-making"
            className="w-[15rem] hover:w-[20rem] md:hover:w-[25rem] group justify-center items-center bg-[url('/assets/images/resource/service/Prototype2.jpeg')] bg-cover bg-no-repeat  h-[16rem] md:h-[21rem] bg-center relative hover: duration-500"
          >
            <div className="items-center justify-center w-full absolute bottom-10 ">
              <h5 className="text-2xl text-center lg:text-xl xl:text-2xl font-bold text-white">
                Marine Scaled Model Making
              </h5>
            </div>
            {/* overlay */}
            <div className="hidden group-hover:block rounded-2xl duration-700 absolute w-full z-10 bottom-0 left-0 right-0 h-full bg-black bg-opacity-30 "></div>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Sevices;
