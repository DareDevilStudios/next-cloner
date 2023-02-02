import React from "react";
import Map from './Map.jsx'

const Form = () => {
  const dropopener = () => {
    const dropdownHover = document.getElementById("dropdownHover");
    dropdownHover.classList.toggle("hidden");
  };

  return (
    <div className="w-full flex md:flex-row flex-col items-center justify-around p-5 md:p-20">
      <div className="md:w-2/5 border-2  flex flex-col p-5 md:p-16">
        <h1 className="text-4xl font-body ">
          SEND <span className="font-bold"> YOUR MESSAGE</span>
        </h1>
        <h5 className="text-sm text-gray-400 pt-3 ">
          DON’T HESITATE TO CONTACT US
        </h5>
        <div className="flex pt-7 w-full">
          <div className="w-full mr-5">
            <h5 className="text-sm text-gray-400  ">NAME</h5>
            <input
              className="border-1 border-gray-300 w-full p-2 my-2 focus:border-shipy focus:ring-1 focus:ring-shipy"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="w-full">
            <h5 className="text-sm text-gray-400  ">EMAIL</h5>
            <input
              className="border-1 border-gray-300 w-full p-2 my-2 focus:border-shipy focus:ring-1 focus:ring-shipy"
              type="text"
              placeholder="EMAIL"
            />
          </div>
        </div>
        <div className="mt-2 ">
          <h5 className="text-sm text-gray-400  mb-2">SUBJECT</h5>

          <button
            onClick={dropopener}
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            class="font-display text-gray-400 w-full border-2 font-medium text-sm px-2  py-2.5  inline-flex justify-between focus:border-shipy focus:ring-1 focus:ring-shipy "
            type="button"
          >
            <i>Do you want to discuss about?</i>
            <svg
              class="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <div
            id="dropdownHover"
            class="w-[39rem] hidden z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown"
            >
              <li>
                <a
                  href="/services"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white bg-shipy"
                >
                  Do you want to discuss about?
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Naval Architectural Services
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Structural Engineering Services
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Hydrodynamics
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Product Designing
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Prototype Manufacturing
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Marine Services
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full mt-4">
          <h5 className="text-sm text-gray-400 ">MESSAGE</h5>
          <textarea
            className="border-2 border-gray-300 w-full h-[10rem] p-4 my-2 focus:border-shipy focus:ring-1 focus:ring-shipy"
            type="textarea"
            placeholder="Write your message..."
          />
        </div>
        <button className="border-1 border-white font-normal bg-shipy text-white py-3" >SEND YOUR MESSAGE</button>
      </div>
      <div className="w-1/2">
       <Map/>
      </div>
    </div>
  );
};

export default Form;
