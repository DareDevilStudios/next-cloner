import react, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Logo from "../../../public/assets/images/sticky-logo.png";
import logo2 from "../../../public/assets/images/logo-two.png";
import "../../styles/Home.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

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
        <div
          class="hidden w-full md:block md:w-auto duration-500"
          id="navbar-default"
        >
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
            <li className="mt-4 md:mt-0 hidden md:block">
              <div class="text-shipblue text-md font-bold py-3 px-7">
                <button
                  onClick={showDrawer}
                  class=""
                  type="button"
                  data-drawer-target="drawer-contact"
                  data-drawer-show="drawer-contact"
                  aria-controls="drawer-contact"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </button>
              </div>
            </li>
            <li className="mt-4 md:mt-0 ">
              <Link
                href="/contact"
                class="text-white md:ml-20  bg-shipblue  hover:bg-shipy duration-500 text-md font-bold py-3 px-7"
              >
                ENQUIRY
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Drawer
        className="flex justify-between text-white md:px-5"
        placement="right"
        onClose={onClose}
        open={open}
        style={{
          width: 400,
          background: "#112",
          margin: 0,
          color: "#fff",
          "@media (max-width: 768px)": {
            width: 300,
          },
        }}

        // style = {{

        //   // Adding media query..
        //   '@media (max-width: 640px)': {
        //     width:200
        //   }}}
      >
        <Image src={logo2} className="w-5/6" />
        <h1 className="pt-5 text-white text-2xl font-bold font-body">
          Get In Touch
        </h1>
        <p className="text-white pt-5">
          Our aim is to innovate, and improve the product and client processes
          so as to have cost effective and better solutions..
        </p>
        <button className="px-5 border-2 py-2 mt-7 hover:bg-shipy hover:text-shipblue hover:border-0">
          CONTACT US
        </button>
        <h1 className="mt-14 text-2xl">Contact Info</h1>
        <div className="details my-4  text-md ">
          <div className="flex  gap-3 my-6">
            <svg
              className="w-8 h-8 text-shipy"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              ></path>
            </svg>
            <p className="w-5/6">
              Center for Innovation Technology Transfer & Industrial
              Collaboration, CITTIC, CUSAT, Kochi, Kerala 682022
            </p>
          </div>
          <div className="details my-4 text-md flex gap-4 md:items-start">
            <svg
              className="w-6 h-6 text-shipy"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              ></path>
            </svg>
            <p className="">87148 04425</p>
          </div>
          <div className="flex gap-3 my-6">
            <svg
              className="w-6 h-6 text-shipy"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
            </svg>
            <p className="">info@shiptech-icon.com</p>
          </div>
          <div className="flex gap-3 my-6">
            <svg
              className="w-6 h-6 text-shipy"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p className="">Week Days: 09.00 to 18.00 Sunday: Closed</p>
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
