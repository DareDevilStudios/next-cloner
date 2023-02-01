import React from "react";

const Form = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-1/2 border-2  flex flex-col p-16">
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
              className="border-1 border-gray-300 w-full p-2 my-2"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="w-full">
            <h5 className="text-sm text-gray-400  ">EMAIL</h5>
            <input
              className="border-1 border-gray-300 w-full p-2 my-2"
              type="text"
              placeholder="EMAIL"
            />
          </div>
        </div>
        <div className="mt-2 ">
          <h5 className="text-sm text-gray-400  mb-2">SUBJECT</h5>

          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            class="text-gray-400 w-full border-2 font-medium text-sm px-2  py-2.5  inline-flex justify-between "
            type="button"
          >
            Dropdown hover{" "}
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
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default Form;
