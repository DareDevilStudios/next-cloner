import Image from "next/image";
import React from "react";
import About from "../../../../../public/assets/images/about-home2.jpg";
import Return from "../../../../../public/assets/icons/return.svg";

const AboutUs = () => {
  return (
    <div>
        <div class="flex items-center justify-center w-full h-full py-8 gap-9 lg:py-16">
          <div class="w-1/2 p-20">
            <h1 class="font-body w-11/12 mb-5 text-4xl font-bold tracking-wide leading-1 text-blue-700">
              About Shiptech-ICON
            </h1>
            <p class="text-justify mb-6 font-sm lg:mb-8 text-gray-500 ">
              Ship Technology Industrial Consultancy (ShipTech-ICON) is a
              promising Marine and Ship design start-up based in Kochi, India.
              ShipTech-ICON provides functional and ergonomically sound ship
              designs and commercially viable and technologically sound
              solutions to the marine ship/boat building industry and Oil & Gas
              industry. <br /><br /> ShipTech-ICON is a small company specializing in design
              and analysis of fixed and floating structures and for marine
              operations in the offshore industry. ShipTech-ICON’s size
              indicates that it does not have large company overheads and is
              flexible enough to set up project teams to meet the requirements
              of its clients. ShipTech-ICON’s in-house expertise includes a set
              of Naval Architects, Marine and Mechanical Engineers, who are
              known in the Marine and Oil & Gas industry for their technical
              know-how, sound engineering practices and creative design flair. <br /><br />
              ShipTech-ICON is incubated under and operating from Cochin
              University of Science and Technology (CUSAT) premises.
            </p>
           
          </div>
          <div className="h-full">
            <Image className="h-[30rem] w-full" src={About} alt="mockup" />
          </div>
        </div>
    </div>
  );
};

export default AboutUs;
