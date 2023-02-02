import React, { useState } from "react";
import Image from "next/image";

const Card = ({ title, desc, img , desc2 }) => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
    if (state) {
      document.getElementById("lower").classList.remove("hidden");
    }
  };

  return (
    <div className="flex-start   max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[30rem] max-h">
      <a href="/">
        <Image
          className=" rounded-t-lg"
          src={img}
          alt="rgh"
          width="100%"
          height="300"
        />
      </a>
      <div className="relative p-5">
        <a href="#">
          <h5 className="w-5/6 font-display md:px-7 py-5 px-2 md:pt-5 md:pb-10 text-center md:h-[5rem] md:w-[20rem] absolute -top-9 bg-gray-200 text-shipblue hover:text-shipy hover:bg-shipblue mb-2 text-md md:text-xl font-normal tracking-tight text-white">
            {title}
          </h5>
        </a>
        <p className=" mt-10 font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
        {state && (
          <p
            id="lower"
            className="font-normal text-gray-700 dark:text-gray-400"
          >
            {desc2}
          </p>
        )}

        <button
          onClick={() => setState(!state)}
          className="flex flex-end items-center px-3 py-2 text-sm font-medium text-center text-black "
        >
          {state ? "Close" : <span className=" text-shipblue font-display font-bold">Read More</span>}
        </button>
      </div>
    </div>
  );
};

export default Card;
