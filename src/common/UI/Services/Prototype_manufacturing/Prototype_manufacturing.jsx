import React from "react";
import Banner_services from "../../../components/Banner_services";
import Navbar from "../../../components/Navbar";
import Mtop from "../../../components/Mtop";
import Image from "next/image";
import Prototype2 from "../../../../../public/assets/images/resource/service/Prototype2.jpeg";

const Prototype_manufacturing = () => {
  const dleap = [
    "/assets/images/resource/service/dleap/0.jpg",
    "/assets/images/resource/service/dleap/1.jpeg",
    "/assets/images/resource/service/dleap/2.jpeg",
    "/assets/images/resource/service/dleap/3.jpeg",
    "/assets/images/resource/service/dleap/4.jpeg",
    "/assets/images/resource/service/dleap/5.jpeg",
    "/assets/images/resource/service/dleap/6.jpeg",
    "/assets/images/resource/service/dleap/7.jpeg",
  ];

  const ray = [
    "/assets/images/resource/service/ray/1.jpeg",
    "/assets/images/resource/service/ray/2.jpeg",
    "/assets/images/resource/service/ray/3.jpeg",
    "/assets/images/resource/service/ray/4.jpeg",
  ];

  const submarine = [
    "/assets/images/resource/service/submarine/1.jpeg",
    "/assets/images/resource/service/submarine/2.jpeg",
    "/assets/images/resource/service/submarine/3.jpeg",
    "/assets/images/resource/service/submarine/4.jpeg",
    "/assets/images/resource/service/submarine/5.jpeg",
    "/assets/images/resource/service/submarine/6.jpeg",
  ]
  
  const WaterModel = [
    "/assets/images/resource/service/water model/1.jpg",
    "/assets/images/resource/service/water model/2.jpg",
    "/assets/images/resource/service/water model/3.jpg",
    "/assets/images/resource/service/water model/4.jpg",
    "/assets/images/resource/service/water model/5.jpg",
    "/assets/images/resource/service/water model/6.jpg",
    "/assets/images/resource/service/water model/7.jpg",
    "/assets/images/resource/service/water model/8.jpeg",
  ]

  return (
    <div className="">
      <Navbar />
      <Mtop />
      <Banner_services title="Prototype Manufacturing" />
      <div class="flex md:flex-row flex-col items-center justify-center w-full h-full">
        <div class="w-full p-7 md:p-12 flex justify-center items-center gap-12">
          <p class="text-justify w-1/2 font-sm text-gray-500 ">
            We also specialise in Product design and prototyping Services with a
            core focus on Marine Scale Models. We use multiple technologies like
            3D printing (SLA & FDM), Laser Cutting, etc., to achieve desired
            results. With our expertise and collaborators, we are trying to
            bring the domain of Scale Model Making into the 21st Century by
            using cutting edge technologies. We aim to capture the glory and
            precision of the craft in the scaled model
          </p>
          <Image className="w-80" src={Prototype2} alt="About" />
        </div>
      </div>
      <div className="p-12">
        <h1 class="font-body w-11/12 mb-5 text-4xl font-bold tracking-wide leading-1 text-blue-700">
          Model Making Portfolio
        </h1>
        <div class="flex flex-col items-center justify-center w-full h-full">
          <h1 class="font-body w-full mb-5 text-2xl font-bold tracking-wide leading-1 text-blue-700">
            1. D'Leap
          </h1>
          <div className="flex flex-wrap justify-center gap-3">
            {dleap.map((item) => (
              <Image
                className="w-64"
                width={300}
                height={300}
                src={item}
                alt="About"
              />
            ))}
          </div>
        </div>
        <div className="px-8 border-2 border-gray-100 my-12"></div>
        <div class="flex flex-col items-center justify-center w-full h-full">
          <h1 class="font-body w-full mb-5 text-2xl font-bold tracking-wide leading-1 text-blue-700">
            2. RAY
          </h1>
          <div className="flex flex-wrap justify-center gap-3">
            {ray.map((item) => (
              <Image
                className="w-64"
                width={300}
                height={300}
                src={item}
                alt="About"
              />
            ))}
          </div>
        </div>
        <div className="px-8 border-2 border-gray-100 my-12"></div>
        <div class="flex flex-col items-center justify-center w-full h-full">
          <h1 class="font-body w-full mb-5 text-2xl font-bold tracking-wide leading-1 text-blue-700">
            3. Submarine
          </h1>
          <div className="flex flex-wrap justify-center gap-3">
            {submarine.map((item) => (
              <Image
                className="w-64"
                width={300}
                height={300}
                src={item}
                alt="About"
              />
            ))}
          </div>
        </div>
        <div className="px-8 border-2 border-gray-100 my-12"></div>
        <div class="flex flex-col items-center justify-center w-full h-full">
          <h1 class="font-body w-full mb-5 text-2xl font-bold tracking-wide leading-1 text-blue-700">
            4. Water Metro Model
          </h1>
          <div className="flex flex-wrap justify-center gap-3">
            {WaterModel.map((item) => (
              <Image
                className="w-64"
                width={300}
                height={300}
                src={item}
                alt="About"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prototype_manufacturing;
