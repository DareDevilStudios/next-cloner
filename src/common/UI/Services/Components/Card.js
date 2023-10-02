import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ title, desc, img , desc2 }) => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
    if (state) {
      document.getElementById("lower").classList.remove("hidden");
    }
  };

  const href = title === "Prototype Manufacturing" ? `/services/${title.toLowerCase().replace(/ /g, '-')}` : "/services";

  return (
    <div className="flex-start   max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[30rem] max-h">
      <Link href={href}>
        <Image
          className="rounded-t-lg h-64"
          src={img}
          alt="rgh"
          width="400"
          height="300"
        />
      </Link>
      <div className="relative p-5">
        <Link href="#">
          <h5 className="w-5/6 font-display py-5 px-2 md:pt-5 md:pb-10 text-center  md:h-[5rem] lg:w-[14rem] xl:w-[20rem] md:w-[16rem] absolute -top-9 bg-gray-200 text-shipblue hover:text-shipy hover:bg-shipblue mb-2 text-md md:text-xl tracking-tight duration-500">
            {title}
          </h5>
        </Link>
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
