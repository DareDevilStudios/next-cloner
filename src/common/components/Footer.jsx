import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/images/footer-logo.png";
import fb from "../../../public/assets/icons/fb.svg";
import linkedin from "../../../public/assets/icons/linkedin.svg";

const Footer = () => {
  const gallery = [
    {
      url: "/assets/images/gallery/gallery-thumb-1.jpg",
    },
    {
      url: "/assets/images/gallery/gallery-thumb-2.jpg",
    },
    {
      url: "/assets/images/gallery/gallery-thumb-3.jpg",
    },
    {
      url: "/assets/images/gallery/gallery-thumb-4.jpg",
    },
    {
      url: "/assets/images/gallery/gallery-thumb-5.jpg",
    },
    {
      url: "/assets/images/gallery/gallery-thumb-6.jpg",
    },
    {
      url: "/assets/images/gallery/gallery-thumb-7.jpg",
    },
    {
      url: "/assets/images/gallery/gallery-thumb-8.jpg",
    },
  ];

  return (
    <div className="w-full bg-shipblue text-white">
      <div className="top h-full md:h-[40rem] flex flex-col md:flex-row justify-around gap-3 lg:gap[5rem] xl:gap-[7rem] py-5">
        <div className="part1 w-full md:w-2/6 flex flex-col justify-center items-center md:items-start h-full">
          <Image className="w-56 my-4" src={Logo} alt="logo" />
          <div className="details my-4 text-md flex flex-col justify-center items-center md:items-start">
            <div className="flex md:justify-center items-center md:items-start gap-3 my-6">
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
            <div className="flex gap-3 my-6">
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
          <div className="flex gap-5">
            <div className="w-12 h-12 bg-black bg-opacity-50 hover:bg-shipy duration-500 rounded-full flex justify-center items-center p-3">
              <Image className="w-9 text-white" src={fb} alt="fb" />
            </div>
            <div className="w-12 h-12 bg-black bg-opacity-50 hover:bg-shipy duration-500 rounded-full flex justify-center items-center p-3">
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
              <p className="ml-2 hover:text-shipy duration-300">About Us</p>
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
              <p className="ml-2 hover:text-shipy duration-300">Services</p>
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
              <p className="ml-2 hover:text-shipy duration-300">Projects</p>
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
              <p className="ml-2 hover:text-shipy duration-300">Portfolio</p>
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
              <p className="ml-2 hover:text-shipy duration-300">Contact Us</p>
            </div>
          </div>
        </div>
        <div className="part3 my-6 md:my-0 flex flex-col justify-center items-center h-full text-lg">
          <h1 className="underline block underline-offset-[.7rem] mt-4 mb-7 text-2xl md:self-start font-body text-center md:text-left">
            Our Gallery
          </h1>
          <div className="gallery grid grid-cols-3 xl:grid-cols-4 justify-center items-center gap-6 md:gap-3">
            {gallery.map((item, index) => (
              <Image src={item.url} alt="gallery1" width={100} height={100} />
            ))}{" "}
          </div>
        </div>
      </div>
      <hr className="w-full h-[.01rem] bg-gray-900" />
      <div class="sm:flex sm:items-center sm:justify-around py-8">
        <span class="text-md text-gray-500 sm:text-center dark:text-gray-400">
          Copyright ©2023
          <span className="text-shipy">ShipTech-ICON</span>. All Rights
          Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <span class="text-md tracking-wider text-gray-500 sm:text-center dark:text-gray-400">
            Terms & Conditions   |   Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
