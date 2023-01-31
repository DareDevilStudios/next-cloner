import Image from "next/image";
import React from "react";

const Sevices = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 w-full lg:py-16 lg:px-6 text-center">
        <div class="w-full text-center mb-8 lg:mb-16 flex flex-col justify-center items-center">
          <h2 class="mb-4 text-6xl tracking-tight font-body font-bold text-gray-900 dark:text-white">
            <span className="font-medium">OUR</span> SERVICES
          </h2>
          <p class="font-normal text-gray-900 sm:text-xl dark:text-gray-350 w-4/6">
            We offer designs for ships, boats and Offshore sector. This includes
            Basic design to CFD/FE Analysis. We provide 3D visualisation as well
            as production engineering and supply boat building kits. Through our
            partners we have started doing fabrication also.
          </p>
        </div>
        <div class="flex gap-5 flex-wrap w-full lg:mb-16 justify-center items-center mx-auto">
          <div className="w-max group rounded-3xl relative tracking-[.4rem] hover:tracking-normal duration-500">
            <Image
              className="rounded-3xl "
              src="/assets/images/resource/service/naval.jpg"
              width={400}
              height={400}
              alt=""
            />
            <div className="absolute w-max z-30 bottom-8 left-0 right-0 ml-3">
              <h5 className="text-2xl inline-block text-center font-bold text-white">
                Naval <br /> Architectural <br /> Services
              </h5>
            </div>
            {/* overlay */}
            <div className="hidden group-hover:block rounded-2xl duration-700 absolute w-full z-10 bottom-0 left-0 right-0 h-full bg-black bg-opacity-30 "></div>
          </div>

          <div className="w-max group rounded-3xl relative tracking-[.4rem] hover:tracking-normal duration-500">
            <Image
              className="rounded-3xl "
              src="/assets/images/resource/service/Structural.jpg"
              width={400}
              height={400}
              alt=""
            />
            <div className="absolute w-max z-30 bottom-8 left-0 right-0 ml-3 flex flex-col justify-center items-center">
              <h5 className="text-2xl text-center font-bold text-white mb-3">
                Structural <br /> Engineering <br /> Services
              </h5>
            </div>
            {/* overlay */}
            <div className="hidden group-hover:block rounded-2xl duration-700 absolute w-full z-10 bottom-0 left-0 right-0 h-full bg-black bg-opacity-30 "></div>
          </div>
          <div className="w-max group rounded-3xl relative tracking-[.4rem] hover:tracking-normal duration-500">
            <Image
              className="rounded-3xl "
              src="/assets/images/resource/service/Hydrodynamics.jpg"
              width={400}
              height={400}
              alt=""
            />
            <div className="absolute w-max z-30 bottom-8 left-0 right-0 ml-3">
              <h5 className="text-2xl text-center font-bold text-white">
                Hydrodynamics
              </h5>
            </div>
            {/* overlay */}
            <div className="hidden group-hover:block rounded-2xl duration-700 absolute w-full z-10 bottom-0 left-0 right-0 h-full bg-black bg-opacity-30 "></div>
          </div>
          <div className="w-max group rounded-3xl relative tracking-[.4rem] hover:tracking-normal duration-500">
            <Image
              className="rounded-3xl "
              src="/assets/images/resource/service/naval.jpg"
              width={400}
              height={400}
              alt=""
            />
            <div className="absolute w-max z-30 bottom-8 left-0 right-0 ml-3">
              <h5 className="text-2xl text-center font-bold text-white">
                Product Design & <br /> Prototype <br /> Manufacturing
              </h5>
            </div>
            {/* overlay */}
            <div className="hidden group-hover:block rounded-2xl duration-700 absolute w-full z-10 bottom-0 left-0 right-0 h-full bg-black bg-opacity-30 "></div>
          </div>
          <div className="w-max group rounded-3xl relative tracking-[.4rem] hover:tracking-normal duration-500">
            <Image
              className="rounded-3xl "
              src="/assets/images/resource/service/Marine.jpg"
              width={400}
              height={400}
              alt=""
            />
            <div className="absolute w-max z-30 bottom-8 left-0 right-0 ml-3">
              <h5 className="text-2xl text-center font-bold text-white">
                Marine Services
              </h5>
            </div>
            {/* overlay */}
            <div className="hidden group-hover:block rounded-2xl duration-700 absolute w-full z-10 bottom-0 left-0 right-0 h-full bg-black bg-opacity-30 "></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sevices;
