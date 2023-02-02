import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Logo from "../../../public/assets/images/sticky-logo.png";

const Navbar = () => {
  const opener = () => {
    const navbar = document.getElementById("navbar-default");
    navbar.classList.toggle("hidden");
  };

  const router = useRouter();
  return (
    <nav class="border-gray-200 w-full sm:px-4 py-8 bg-white fixed top-0 z-[99]">
      <div class="flex flex-wrap items-center justify-around w-full">
        <Link href="/" class="flex items-center">
          <Image
            src={Logo}
            class="w-[15rem] h-[5rem] mr-3"
            alt="Flowbite Logo"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:text-shipy focus:outline-none focus:ring-2 focus:ring-gray-200  "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={opener}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto duration-500" id="navbar-default">
          <ul class="flex flex-col items-center justify-between p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            <li>
              <Link
                href="/"
                class="block py-2 pl-3 pr-4 text-black  rounded hover:text-shipy md:border-0 md:p-0 text-md font-bold"
                aria-current="page"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                class="block py-2 pl-3 pr-4 text-black  rounded hover:text-shipy md:border-0 md:p-0 text-md font-bold"
                aria-current="page"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                class="block py-2 pl-3 pr-4 text-black  rounded hover:text-shipy md:border-0 md:p-0 text-md font-bold"
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                href="/designs"
                class="block py-2 pl-3 pr-4 text-black  rounded hover:text-shipy md:border-0 md:p-0 text-md font-bold"
              >
                DESIGNS
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                class="block py-2 pl-3 pr-4 text-black  rounded hover:text-shipy md:border-0 md:p-0 text-md font-bold"
              >
                CONTACT
              </Link>
            </li>
            <li className="mt-4 md:mt-0 ">
              <Link
                href="#"
                class="text-white md:ml-20  bg-shipblue  hover:bg-shipy duration-500 text-md font-bold py-3 px-7"
              >
                ENQUIRY
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
