import Image from "next/image";
import React, { useState } from "react";
import Opener from "../../../../../public/assets/images/icons/modelopen.svg";
import { Table } from "flowbite-react";

const Gallery = () => {
  const [Value, setValue] = useState("");
  const gallery = [
    {
      title: "D'LEAP",
      url: "/assets/images/projects/dleap.jpg",
      desc: "Enjoy your moments on the water",
      length: "5.5m",
      width: "2.5m",
      depth: "1.5m",
      approx_draft: "0.5m",
      station_spacing: "1.5m",
      passenger_capacity: "1m",
      engine: "1x 100hp",
      material: "Aluminium",
      speed: "10 knots",
      displacement1: "1.5 tons",
      displacement2: "5 tons",
    },
    {
      title: "22",
      url: "/assets/images/projects/22.jpg",
      desc: "Enjoy your moments on the water",
      length: "5.5m",
      width: "2.5m",
      depth: "1.5m",
      approx_draft: "0.5m",
      station_spacing: "1.5m",
      passenger_capacity: "1m",
      engine: "1x 100hp",
      material: "Aluminium",
      speed: "10 knots",
      displacement1: "1.5 tons",
      displacement2: "5 tons",
    },
    {
      title: "23",
      url: "/assets/images/projects/23.jpg",
      desc: "Enjoy your moments on the water",
      length: "5.5m",
      width: "2.5m",
      depth: "1.5m",
      approx_draft: "0.5m",
      station_spacing: "1.5m",
      passenger_capacity: "1m",
      engine: "1x 100hp",
      material: "Aluminium",
      speed: "10 knots",
      displacement1: "1.5 tons",
      displacement2: "5 tons",
    },
    {
      title: "24",
      url: "/assets/images/projects/24.jpg",
      desc: "Enjoy your moments on the water",
      length: "5.5m",
      width: "2.5m",
      depth: "1.5m",
      approx_draft: "0.5m",
      station_spacing: "1.5m",
      passenger_capacity: "1m",
      engine: "1x 100hp",
      material: "Aluminium",
      speed: "10 knots",
      displacement1: "1.5 tons",
      displacement2: "5 tons",
    },
    {
      title: "25",
      url: "/assets/images/projects/25.jpg",
      desc: "Enjoy your moments on the water",
      length: "5.5m",
      width: "2.5m",
      depth: "1.5m",
      approx_draft: "0.5m",
      station_spacing: "1.5m",
      passenger_capacity: "1m",
      engine: "1x 100hp",
      material: "Aluminium",
      speed: "10 knots",
      displacement1: "1.5 tons",
      displacement2: "5 tons",
    },
    {
      title: "27",
      url: "/assets/images/projects/27.jpg",
      desc: "Enjoy your moments on the water",
      length: "5.5m",
      width: "2.5m",
      depth: "1.5m",
      approx_draft: "0.5m",
      station_spacing: "1.5m",
      passenger_capacity: "1m",
      engine: "1x 100hp",
      material: "Aluminium",
      speed: "10 knots",
      displacement1: "1.5 tons",
      displacement2: "5 tons",
    },
    {
      title: "29",
      url: "/assets/images/projects/29.jpg",
      desc: "Enjoy your moments on the water",
      length: "5.5m",
      width: "2.5m",
      depth: "1.5m",
      approx_draft: "0.5m",
      station_spacing: "1.5m",
      passenger_capacity: "1m",
      engine: "1x 100hp",
      material: "Aluminium",
      speed: "10 knots",
      displacement1: "1.5 tons",
      displacement2: "5 tons",
    },
  ];

  const modelOpen = (index) => {
    const drawer = document.getElementById(`${index}`);
    const overlay = document.getElementById("overlay");
    const container = document.getElementById("container");
    setValue(index);
    drawer.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const modelClose = () => {
    const drawer = document.getElementById(`${Value}`);
    const overlay = document.getElementById("overlay");
    const container = document.getElementById("container");
    drawer.classList.add("hidden");
    overlay.classList.add("hidden");
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
              // id="defaultModal"
              id={`${index}`}
              tabindex="-1"
              aria-hidden="true"
              class="absolute bottom-[30%] left-0 md:left-[30%] z-[100] hidden w-full p-4 "
            >
              <div class="relative w-full h-full max-w-2xl md:h-auto font-body">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 px-7 py-4">
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
                    <a className="text-xl font-bold underline" href="http://">
                      Brochure
                    </a>
                    <p className="text-xl text-black my-5">{item.desc}</p>
                  </div>
                  <hr />
                  <div className="">
                    <Table>
                      <Table.Head>
                        <Table.HeadCell>Specification</Table.HeadCell>
                        <Table.HeadCell>Value</Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Length
                          </Table.Cell>
                          <Table.Cell>{item.length}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Width
                          </Table.Cell>
                          <Table.Cell>{item.width}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Depth
                          </Table.Cell>
                          <Table.Cell>{item.depth}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Approx Draft
                          </Table.Cell>
                          <Table.Cell>{item.approx_draft}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            station spacing
                          </Table.Cell>
                          <Table.Cell>{item.station_spacing}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            passenger capacity
                          </Table.Cell>
                          <Table.Cell>{item.passenger_capacity}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Engine
                          </Table.Cell>
                          <Table.Cell>{item.engine}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            material
                          </Table.Cell>
                          <Table.Cell>{item.material}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            speed
                          </Table.Cell>
                          <Table.Cell>{item.speed}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            displacement <br />
                            Lightship
                          </Table.Cell>
                          <Table.Cell>{item.displacement1}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            displacement <br />
                            Fully Laoded
                          </Table.Cell>
                          <Table.Cell>{item.displacement2}</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
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
        class="fixed hidden inset-0 bg-black z-[99] bg-opacity-80 transition-opacity"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Gallery;
