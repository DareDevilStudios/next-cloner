import React, { useState, useEffect } from "react";
import Image from "next/image";

const Clients = () => {
  const client1 = [
    {
      url: "/assets/images/clients/1.png",
    },
    {
      url: "/assets/images/clients/2.png",
    },
    {
      url: "/assets/images/clients/3.jpeg",
    },
    {
      url: "/assets/images/clients/4.png",
    },
    {
      url: "/assets/images/clients/5.png",
    },
    {
      url: "/assets/images/clients/6.png",
    },
    {
      url: "/assets/images/clients/7.png",
    },
    {
      url: "/assets/images/clients/8.png",
    },
    {
      url: "/assets/images/clients/9.png",
    },
    // {
    //   url: "/assets/images/clients/10.png",
    // },
    {
      url: "/assets/images/clients/11.png",
    },
    {
      url: "/assets/images/clients/12.png",
    },
    // {
    //   url: "/assets/images/clients/13.png",
    // },
    {
      url: "/assets/images/clients/14.png",
    },
    {
      url: "/assets/images/clients/15.jpeg",
    },
    {
      url: "/assets/images/clients/16.png",
    },
    {
      url: "/assets/images/clients/17.png",
    },
    {
      url: "/assets/images/clients/18.png",
    },
    {
      url: "/assets/images/clients/19.png",
    },
    {
      url: "/assets/images/clients/20.jpg",
    },
    {
      url: "/assets/images/clients/21.jpg",
    },
    {
      url: "/assets/images/clients/22.png",
    },
    {
      url: "/assets/images/clients/23.jpeg",
    },
    {
      url: "/assets/images/clients/24.jpeg",
    },
    {
      url: "/assets/images/clients/25.webp",
    },
    {
      url: "/assets/images/clients/26.jpg",
    },
    {
      url: "/assets/images/clients/27.png",
    },
    {
      url: "/assets/images/clients/28.png",
    },
    {
      url: "/assets/images/clients/29.png",
    },
    {
      url: "/assets/images/clients/30.png",
    },
    {
      url: "/assets/images/clients/31.png",
    },
    {
      url: "/assets/images/clients/32.png",
    },
    {
      url: "/assets/images/clients/33.png",
    },
    {
      url: "/assets/images/clients/34.png",
    },
  ];150

  const cli1 = client1.slice(0, (client1.length / 2));
  const cli2 = client1.slice((client1.length / 2), client1.length);

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <a href="#">
        <h5 class="my-10 text-3xl md:text-5xl font-bold tracking-wide font-body text-gray-900 dark:text-white">
          <span className="font-medium">OUR</span> CLIENTS
        </h5>
      </a>
      <div className="flex sm:gap-16 w-5/6 px-3 overflow-x-scroll scroll scrollbar-none my-10">
        {cli1.concat(cli1).map((item, index) => {
          return (
            <Image
              className="object-contain"
              key={index}
              src={item.url}
              alt="client"
              width={150}
              height={100}
            />
          );
        })}
      </div>
      <div className="flex sm:gap-16 w-5/6 px-3 overflow-x-scroll scroll scrollbar-none my-10">
        {cli2.concat(cli2).map((item, index) => {
          return (
            <Image
            className="object-contain"
              key={index}
              src={item.url}
              alt="client"
              width={150}
              height={100}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
