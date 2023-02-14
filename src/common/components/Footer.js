import Image from "next/image";
import React, { useState } from "react";
import { Link } from "next/link";
import Logo from "../../../public/assets/images/footer-logo.png";
import fb from "../../../public/assets/icons/fb.svg";
import linkedin from "../../../public/assets/icons/linkedin.svg";
import { useRouter } from 'next/router'

// image imports
import gallery1 from "../../../public/assets/images/gallery/gallery-thumb-1.jpg";
import gallery2 from "../../../public/assets/images/gallery/gallery-thumb-2.jpg";
import gallery3 from "../../../public/assets/images/gallery/gallery-thumb-3.png";
import gallery4 from "../../../public/assets/images/gallery/gallery-thumb-4.png";
import gallery5 from "../../../public/assets/images/gallery/gallery-thumb-5.png";
import gallery6 from "../../../public/assets/images/gallery/gallery-thumb-6.jpg";
import gallery7 from "../../../public/assets/images/gallery/gallery-thumb-7.jpg";
import gallery8 from "../../../public/assets/images/gallery/gallery-thumb-8.jpg";
import gallery9 from "../../../public/assets/images/gallery/gallery-thumb-9.png";
import gallery10 from "../../../public/assets/images/gallery/gallery-thumb-10.png";
import { motion } from "framer-motion";

const Footer = () => {

  const router = useRouter()

  const [Value, setValue] = useState(0);
  const gallery = [
    {
      url: gallery1,
    },
    {
      url: gallery2,
    },
    {
      url: gallery3,
    },
    {
      url: gallery4,
    },
    {
      url: gallery5,
    },
    {
      url: gallery6,
    },
    {
      url: gallery7,
    },
    {
      url: gallery8,
    },
    {
      url: gallery9,
    },
    {
      url: gallery10,
    }
  ];

  function disableScroll() {
    // Get the current page scroll position
    let scrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.onscroll = function () { };
  }

  const modelOpen = (index) => {
    const drawer = document.getElementById(`${index}`);
    const overlay = document.getElementById("overlay");
    // const container = document.getElementById("footer");
    drawer.classList.remove("hidden");
    overlay.classList.remove("hidden");
    router.push("#footer")
    // container.classList.add("overflow-hidden");
    disableScroll();
  };

  const modelClose = () => {
    const drawer = document.getElementById(`${Value}`);
    const overlay = document.getElementById("overlay");
    // const container = document.getElementById("container");
    drawer.classList.add("hidden");
    overlay.classList.add("hidden");
    // container.classList.remove("overflow-hidden");
    enableScroll();
  };

  // const slideNext = (index) => {
  //   if (Value === gallery.length - 1) {
  //     setValue(0);
  //   } else {
  //     setValue(Value + 1);
  //   }
  // };

  // const slidePrev = (index) => {
  //   if (Value === 0) {
  //     setValue(gallery.length - 1);
  //   } else {
  //     setValue(Value - 1);
  //   }
  // };

  return (
    <motion.div
      id="footer"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ type: "tween", stiffness: 100 }} className="relative w-full bg-shipblue text-white">
      <div className="top h-full md:h-[40rem] flex flex-col md:flex-row justify-around gap-3 lg:gap[5rem] xl:gap-[7rem] py-5">
        <div className="part1 w-full md:w-2/6 flex flex-col justify-center items-center md:items-start h-full">
          <Image className="w-56 my-4" src={Logo} alt="logo" />
          <div className="details my-4 mx-5 sm:ml-7 text-md flex flex-col md:items-start">
            <div className="flex  md:items-start gap-3 my-6">
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
          </div>
          <div className="flex gap-5 sm:ml-7">
            <div className="w-7 h-7  sm:w-12  sm:h-12 bg-transparent border-2 border-shipy bg-opacity-50 hover:bg-shipy duration-500 rounded-full flex justify-center items-center p-2 sm:p-3">
              <Image className="w-9 text-white" src={fb} alt="fb" />
            </div>
            <div className="w-7 h-7  sm:w-12  sm:h-12 bg-transparent border-2 border-shipy bg-opacity-50 hover:bg-shipy duration-500 rounded-full flex justify-center items-center p-2 sm:p-3">
              <Image className="w-9 text-white" src={linkedin} alt="fb" />
            </div>
          </div>
        </div>
        <div className="part2 flex flex-col justify-center items-center h-full text-xl">
          <h1 className="underline underline-offset-[.7rem] mt-4 mb-7 md:xl lg:text-2xl font-body">
            Who We Are
          </h1>
          <div className="links mt-5 grid grid-cols-2 md:flex md:flex-col gap-3 text-gray-400">
            <div className="link flex ">
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
                  d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                ></path>
              </svg>
              <a href="/about" className="ml-2 hover:text-shipy duration-300">About Us</a>
            </div>
            <div className="link flex">
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
                  d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                ></path>
              </svg>
              <a href="/services" className="ml-2 hover:text-shipy duration-300">Services</a>
            </div>
            <div className="link flex">
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
                  d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                ></path>
              </svg>
              <a href="/designs" className="ml-2 hover:text-shipy duration-300">Projects</a>
            </div>
            <div className="link flex">
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
                  d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                ></path>
              </svg>
              <a href="/" className="ml-2 hover:text-shipy duration-300">Portfolio</a>
            </div>
            <div className="link flex">
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
                  d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                ></path>
              </svg>
              <a href="/contact" className="ml-2 hover:text-shipy duration-300">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="part3 my-6 md:my-0 flex flex-col justify-center items-center h-full text-lg">
          <h1 className="underline block underline-offset-[.7rem] mt-4 mb-7 text-2xl  font-body text-center md:text-left">
            Our Gallery
          </h1>
          <div className="gallery grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 md:gap-3 px-3 sm:p-0">
            {gallery.map((item, index) => (
              <div className="">
                <Image onClick={() => {
                  setValue(index)
                  modelOpen(index)
                }
                } src={item.url} alt="gallery1" width={125} height={125} />



                {/* modal */}
                <div
                  id={`${index}`}
                  tabindex="-1"
                  aria-hidden="true"
                  class="absolute bottom-0 left-0 sm:left-[8%] md:left-[17%] xl:left-[30%] z-[100] hidden  h-max w-full py-10"
                >
                  <div
                    id="modal_reach"
                    class="relative w-full h-full max-w-2xl  font-body"
                  >
                    <div class="relative rounded-lg shadow bg-transparent px-7 h-[35rem]">
                      <div class="flex  items-start justify-between p-4 rounded-t">

                        <button
                          onClick={modelClose}
                          type="button"
                          class="text-gray-400 bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                      <div className="flex relative flex-col px-4 pb-6 text-black">
                        <Image src={item.url} alt="gallery1" className="w-[100rem]" />
                        {/* <button onClick={() => slideNext(index)} type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span class="sr-only">Previous</span>
                          </span>
                        </button>
                        <button onClick={() => slidePrev(index)} type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            <span class="sr-only">Next</span>
                          </span>
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
      <hr className="w-full h-[.01rem] bg-gray-900" />
      <div class="sm:flex sm:items-center md:text-start text-center sm:justify-around py-2 md:py-8">
        <span class="text-xs md:text-md text-gray-500 sm:text-center dark:text-gray-400">
          Copyright ©2023
          <span className="text-shipy">ShipTech-ICON</span>. All Rights
          Reserved.
        </span>
        <div class="flex text-center mt-1 md:mt-4 space-x-6 justify-center sm:mt-0">
          <span class="text-xs  md:text-md tracking-wider text-gray-500 sm:text-center dark:text-gray-400">
            Terms & Conditions   |   Privacy Policy
          </span>
        </div>
      </div>

      {/* overlay */}
      <div
        id="overlay"
        class="fixed hidden inset-0 bg-black z-[99] bg-opacity-80 transition-opacity w-screen overflow-hidden"
        aria-hidden="true"
      ></div>
    </motion.div>
  );
};

export default Footer;
