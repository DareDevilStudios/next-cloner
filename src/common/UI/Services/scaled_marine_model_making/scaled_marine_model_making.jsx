import React from "react";
import Banner_services from "../../../components/Banner_services";
import Navbar from "../../../components/Navbar";
import Mtop from "../../../components/Mtop";
import Image from "next/image";
import Prototype2 from "../../../../../public/assets/images/resource/service/Prototype2.jpeg";
import Water2 from "../../../../../public/assets/images/resource/service/water model/9.jpg";

const scaled_marine_model_making = () => {
  const dleap = [
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

  const ASDV = [
    "/assets/images/resource/service/submarine/2.jpeg",
    "/assets/images/resource/service/submarine/3.jpeg",
    "/assets/images/resource/service/submarine/4.jpeg",
    "/assets/images/resource/service/submarine/5.jpeg",
    "/assets/images/resource/service/submarine/6.jpeg",
  ];

  const WaterModel = [
    "/assets/images/resource/service/water model/1.jpg",
    "/assets/images/resource/service/water model/2.jpg",
    "/assets/images/resource/service/water model/3.jpg",
    "/assets/images/resource/service/water model/4.jpg",
    "/assets/images/resource/service/water model/5.jpg",
    "/assets/images/resource/service/water model/6.jpg",
    "/assets/images/resource/service/water model/7.jpg",
  ];

  return (
    <div className="">
      <Navbar />
      <Mtop />
      <Banner_services title="Marine Scaled Model Making" />
      {/* <div class="flex md:flex-row flex-col items-center justify-center w-full h-full">
        <div class="w-full p-7 md:p-12 flex md:flex-row flex-col justify-center items-center gap-12">
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
      </div> */}
      <div className="p-12">
        {/* <h1 class="font-body w-11/12 mb-5 text-4xl font-bold tracking-wide leading-1 text-blue-700">
          Model Making Portfolio
        </h1> */}
        <div class="w-full p-7 md:p-12 flex md:flex-row flex-col justify-between items-center gap-12">
          <p class="text-justify md:w-1/2 font-sm text-gray-500 ">
            Over past few years ShipTech-ICON has been servicing different areas
            of marine industry with its needs for sales-support and marketing
            models of new products. We specialize in marine models working hard
            to achieve perfection with every project. With our craftsmanship and
            knowledge combined with the latest technology, our aim is to exceed
            our client’s expectations, meaning we deliver world class models to
            our clients. Our portfolio includes merchant ships, supply vessels,
            passenger ships, navy vessels, submarines, research vessels, leisure
            boats and small watercrafts. These bespoke and high-quality models
            have proved very successful in assisting our clients with the
            conversion of prospective sales into that of confirmed sales. We
            guarantee absolute confidentiality during any project we undertake.
            A model or prototype must be the single most important tool to get
            your product message across to those where 2-dimensions does not
            compute. A cheap, badly executed model will do your cause no
            favours. A good model will help you sell your idea, but a
            professionally manufactured and highly detailed model, tactile in
            every way, will complete the message that you are trying to convey
            and take your product, whatever it may be, one step closer to the
            production line. At ShipTech-ICON we offer a full model making
            service. With an eye for detail, budget and turnaround, we can
            produce exceptional industrial, conceptual and scale models quickly
            and cost effectively utilising a combination of modern CAD design
            and manipulation, through all forms of modern CNC technology, rapid
            prototyping, 3D printing, vacuum casting, finishing and trimming
            techniques. One of our prestigious project was to make the scaled
            model of Kochi Water Metro Catamaran Ferry for Kochi Metro Rail Ltd,
            Kerala. This scaled model was presented to the honourable Prime
            Minister of India, Shri. Narendra Modi by the honourable Chief
            Minister of Kerala, Shri. Pinarayi Vijayan.
          </p>
          <Image className="md:w-1/2" src={Water2} alt="About" />
        </div>
        <div class="flex flex-col items-center justify-center w-full h-full">
          <h1 class="font-body w-full mb-5 text-2xl font-bold tracking-wide leading-1 text-blue-700">
            1. Water Metro Model
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
        <div className="px-8 border-2 border-gray-100 my-12"></div>
        <div class="flex flex-col items-center justify-center w-full h-full">
          <h1 class="font-body w-full mb-5 text-2xl font-bold tracking-wide leading-1 text-blue-700">
            2. D'Leap
          </h1>
          <p class="self-start text-justify font-sm text-gray-500 mb-6">
            D’Leap is a 24m luxury catamaran yatch designed for a prospect
            client in middle east. A scaled model of this yatch was made to
            present the design to the client. <br />
            <span className="italic">Model Scale 1:32</span>
          </p>
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
            3. PRIME
          </h1>
          <p class="self-start text-justify font-sm text-gray-500 mb-6">
            A 12m Electric Luxury Yatch
            <br />
            <span className="italic">Model Scale 1:40</span>
          </p>
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
            4. ASDV
          </h1>
          {/* 
          ;	Model Scale 1:30 */}
          <p class="self-start text-justify font-sm text-gray-500 mb-6">
            An Advanced Submersible capable of deploying seal commandos
            <br />
            <span className="italic">Model Scale 1:30</span>
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {ASDV.map((item) => (
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

export default scaled_marine_model_making;
