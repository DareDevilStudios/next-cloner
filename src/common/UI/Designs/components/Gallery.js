import Image from "next/image";
import React, { useState } from "react";
import Opener from "../../../../../public/assets/images/icons/modelopen.svg";
import { Table } from "flowbite-react";
import Link from "next/link";

const Gallery = () => {
  const [Value, setValue] = useState("");
  const gallery = [
    {
      title: "D'LEAP",
      url: "/assets/images/projects/dleap.jpg",
      brochure: "/assets/images/brochure/brochure.pdf",
      desc: "D'LEAP is a classic example of quality designs from ShipTech-ICON which exhibits best performance of speed, aesthetics and luxury. D'LEAP is an electric yatch whch contribute to sustainability as well. The interior is designed with maximum comfort and utmost luxury to the passesngers.",
      length: "24m",
      width: "9m",
      depth: "2.5m",
      approx_draft: "0.9m",
      station_spacing: "0.5m",
      passenger_capacity: "14",
      engine: "2x Inboard 110 HP",
      material: "FRP",
      speed: "18 knots",
      displacement1: "14.54 tons",
      displacement2: "21.47 tons",
    },
    {
      title: "MANTA",
      url: "/assets/images/projects/manta.png",
      brochure: "/assets/images/brochure/brochure.pdf",
      desc: "With a bold exterior conceiling a spacious interior. This addition is sure to delight the adventurous with its incredible performance and se-keeping, fantastic handing and ability to reach speeds upto 38 knots.",
      length: "19.17m",
      // width: "2.5m",
      // depth: "1.5m",
      // approx_draft: "0.5m",
      // station_spacing: "1.5m",
      passenger_capacity: "6 - 8 pax",
      // engine: "1x 100hp",
      // material: "Aluminium",
      speed: "36 - 38 knots",
      // displacement1: "1.5 tons",
      // displacement2: "5 tons",
    },
    {
      title: "OCEAN BLUE",
      url: "/assets/images/projects/oceanblue.jpg",
      brochure: "/assets/images/brochure/brochure.pdf",
      desc: "FRP hull with OBM. Ideal for sport fishing. Recreational purposes & Work in harsh offshore waterways.",
      length: "5.90m",
      width: "2.40m",
      // depth: "1.5m",
      // approx_draft: "0.5m",
      // station_spacing: "1.5m",
      passenger_capacity: "10 pax",
      // engine: "1x 100hp",
      // material: "Aluminium",
      // speed: "10 knots",
      // displacement1: "1.5 tons",
      // displacement2: "5 tons",
    },
    {
      title: "PATROL VESSEL",
      url: "/assets/images/projects/patrolvessel.jpg",
      brochure: "/assets/images/brochure/brochure.pdf",
      desc: "FRP hull with Stern drive. Speed of 55 knots can be acheived through the use of composite material & a smart design",
      length: "14.5m",
      width: "3.5m",
      // depth: "1.5m",
      // approx_draft: "0.5m",
      // station_spacing: "1.5m",
      passenger_capacity: "8 pax",
      // engine: "1x 100hp",
      // material: "Aluminium",
      // speed: "10 knots",
      // displacement1: "1.5 tons",
      // displacement2: "5 tons",
    },
    {
      title: "PRIME",
      url: "/assets/images/projects/prime.jpg",
      brochure: "/assets/images/brochure/brochure.pdf",
      desc: "Provocative, cutting edge, exhilarating - announcing the highly anticipated, all new prime class.",
      length: "10 - 12 m",
      // width: "2.5m",
      // depth: "1.5m",
      // approx_draft: "0.5m",
      // station_spacing: "1.5m",
      passenger_capacity: "3 - 5 pax",
      // engine: "1x 100hp",
      // material: "Aluminium",
      speed: "20 - 25 knots",
      // displacement1: "1.5 tons",
      // displacement2: "5 tons",
    },
    {
      title: "THE SHIFT",
      url: "/assets/images/projects/shift.png",
      brochure: "/assets/images/brochure/brochure.pdf",
      desc: "A combination of stunning design, quality and race-bred Technology. A revolutionary performance experience at All speeds",
      length: "10 -12 m",
      // width: "2.5m",
      // depth: "1.5m",
      // approx_draft: "0.5m",
      // station_spacing: "1.5m",
      passenger_capacity: "2 - 4 pax",
      // engine: "1x 100hp",
      // material: "Aluminium",
      speed: "40 - 50 knots",
      // displacement1: "1.5 tons",
      // displacement2: "5 tons",
    },
    {
      title: "WORK BOAT",
      url: "/assets/images/projects/workboat.jpg",
      brochure: "/assets/images/brochure/brochure.pdf",
      desc: "A composite construction and straight forward onboard systems ensure an easy to maintain vessel that is light and easily transportable anywhere in the world",
      length: "11.9m",
      width: "4.0m",
      // depth: "1.5m",
      // approx_draft: "0.5m",
      // station_spacing: "1.5m",
      passenger_capacity: "20 pax",
      // engine: "1x 100hp",
      // material: "Aluminium",
      // speed: "10 knots",
      // displacement1: "1.5 tons",
      // displacement2: "5 tons",
    },
  ];

  const modelOpen = (index) => {
    setValue(index);
    const drawer = document.getElementById(`${index}`);
    const overlay = document.getElementById("overlay");
    const container = document.getElementById("container");
    drawer.classList.remove("hidden");
    overlay.classList.remove("hidden");
    container.classList.add("overflow-hidden");
    mylinkfunction();
  };

  const modelClose = () => {
    const drawer = document.getElementById(`${Value}`);
    const overlay = document.getElementById("overlay");
    const container = document.getElementById("container");
    drawer.classList.add("hidden");
    overlay.classList.add("hidden");
    container.classList.remove("overflow-hidden");
  };

  const mylinkfunction = () => {
    window.location.href = "#container";
  };

  return (
    <div
      id="container"
      className="flex relative w-full justify-center items-center my-20"
    >
      <div className=" grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 px-5 md:px-0 md:gap-10 justify-center items-center">
        {gallery.map((item, index) => (
          <div className="flex flex-col">
            <div className="flex flex-col relative">
              <Image src={item.url} alt="projects" width={400} height={400} />
              <div
                onClick={() => modelOpen(index)}
                className="absolute h-10 w-10 flex items-center justify-center bottom-0 right-0 bg-white bg-opacity-70"
              >
                <Image
                  className="w-8 h-8"
                  src={Opener}
                  alt="projects"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            {/* title */}
            <h6 className="mx-auto text-center py-4 tracking-wider font-body font-bold text-xl text-gray-700">
              {item.title}
            </h6>

            {/* modal */}
            <div
              id={`${index}`}
              tabindex="-1"
              aria-hidden="true"
              class="absolute top-0 left-0 sm:left-[8%] md:left-[17%] xl:left-[25%] z-[100] hidden h-max w-full py-10"
            >
              <div
                id="modal_reach"
                class="relative w-full h-full max-w-2xl  font-body"
              >
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 px-7 h-max">
                  <div class="flex  items-start justify-between p-4 rounded-t">
                    <h3 class="text-2xl py-4 tracking-wider font-semibold text-shipy">
                      {item.title}
                    </h3>

                    <button
                      onClick={modelClose}
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="defaultModal"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div className="flex flex-col px-4 pb-6 text-black">
                    <Link
                      href={item.brochure}
                      className="text-xl font-bold underline"
                    >
                      Brochure
                    </Link>
                    <p className="text-xl text-black my-5">{item.desc}</p>
                  </div>
                  <hr />
                  <div class="relative overflow-x-auto ">
                    <table class="w-full text-xs md:text-lg text-left text-gray-500 dark:text-gray-400 ">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" class="px-3 md:px-6 py-3">
                            Specification
                          </th>
                          <th scope="col" class="px-3 md:px-6 py-3">
                            Value
                          </th>
                        </tr>
                      </thead>
                      <tbody className="">
                        {item.length && (
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              class="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              Length
                            </th>
                            <td class="px-3 md:px-6 py-4">{item.length}</td>
                          </tr>
                        )}
                        {item.width && (
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              class="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              width
                            </th>
                            <td class="px-3 md:px-6 py-4">{item.width}</td>
                          </tr>
                        )}
                        {item.depth && (
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              class="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              depth
                            </th>
                            <td class="px-3 md:px-6 py-4">{item.depth}</td>
                          </tr>
                        )}
                        {item.approx_draft && (
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              class="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              approximate draft
                            </th>
                            <td class="px-3 md:px-6 py-4">
                              {item.approx_draft}
                            </td>
                          </tr>
                        )}
                        {item.station_spacing && (
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              class="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              station spacing
                            </th>
                            <td class="px-3 md:px-6 py-4">
                              {item.station_spacing}
                            </td>
                          </tr>
                        )}
                        {item.passenger_capacity && (
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              class="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              passenger capacity
                            </th>
                            <td class="px-3 md:px-6 py-4">
                              {item.passenger_capacity}
                            </td>
                          </tr>
                        )}
                        {item.engine && (
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              class="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              engine
                            </th>
                            <td class="px-3 md:px-6 py-4">{item.engine}</td>
                          </tr>
                        )}
                        {item.material && (
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              class="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              material
                            </th>
                            <td class="px-3 md:px-6 py-4">{item.material}</td>
                          </tr>
                        )}
                        {item.speed && (
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              class="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              speed
                            </th>
                            <td class="px-3 md:px-6 py-4">{item.speed}</td>
                          </tr>
                        )}
                        {item.displacement1 && (
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              class="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              displacement <br />
                              Lightship
                            </th>
                            <td class="px-3 md:px-6 py-4">
                              {item.displacement1}
                            </td>
                          </tr>
                        )}
                        {item.displacement2 && (
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              class="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              displacement <br />
                              Fully Laoded
                            </th>
                            <td class="px-3 md:px-6 py-4">
                              {item.displacement2}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* overlay */}
      <div
        id="overlay"
        class="fixed hidden inset-0 bg-black z-[99] bg-opacity-80 transition-opacity h-screen w-screen overflow-hidden"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Gallery;
