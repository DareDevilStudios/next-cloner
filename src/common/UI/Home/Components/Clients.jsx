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
      url: "/assets/images/clients/3.png",
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
    {
      url: "/assets/images/clients/10.png",
    },
    {
      url: "/assets/images/clients/11.png",
    },
    {
      url: "/assets/images/clients/12.png",
    },
    {
      url: "/assets/images/clients/13.png",
    },
    {
      url: "/assets/images/clients/14.png",
    },
    {
      url: "/assets/images/clients/15.png",
    },
  ];

  const client2 = [
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
        url: "/assets/images/clients/20.png",
      },
      {
        url: "/assets/images/clients/21.png",
      },
      {
        url: "/assets/images/clients/22.png",
      },
      {
        url: "/assets/images/clients/23.png",
      },
      {
        url: "/assets/images/clients/24.png",
      },
      {
        url: "/assets/images/clients/25.png",
      },
      {
        url: "/assets/images/clients/26.png",
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
    ];

  return (
    <div className="flex flex-col justify-center items-center py-7">
      <div className="w-full flex justify-center items-center py-7">
        <span className="text-4xl font-normal mr-4">OUR</span>
        <h1 className="text-4xl text-center font-bold text-black">CLIENTS</h1>
      </div>
      <div className="flex gap-6 w-5/6 px-3 overflow-x-scroll scroll scrollbar-none">
        {client1.concat(client1).map((item, index) => {
          return (
            <Image
              key={index}
              src={item.url}
              alt="client"
              width={200}
              height={200}
            />
          );
        })}
      </div>
      <div className="flex gap-6 w-5/6 px-3 overflow-x-scroll scroll scrollbar-none">
        {client2.concat(client2).map((item, index) => {
          return (
            <Image
              key={index}
              src={item.url}
              alt="client"
              width={200}
              height={200}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
