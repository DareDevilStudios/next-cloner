import React, { useEffect, useState } from "react";
import Banner_services from "../../../components/Banner_services";
import Navbar from "../../../components/Navbar";
import Mtop from "../../../components/Mtop";
import Image from "next/image";
// useRouter
import { useRouter } from "next/router";

// import json for data
import { services } from "../../../../../data.json";

const scaled_marine_model_making = ({slugMatcher}) => {
  const router = useRouter();
  const {service} = router.query;

  console.log("slug is : " + service);
  // set the data state variable to array of services having the slug same as the url parameter

  const [data, setData] = useState([]);

  useEffect(() => {
    // Filter data when the slugMatcher changes
    setData(services.filter((service) => service.slug === slugMatcher));
  }, [slugMatcher]);

  if (!data || data.length === 0) {
    // Handle the case when data is not available
    return <div>No data found</div>;
  }

  console.log("data: " + JSON.stringify(data[0]));
  console.log("data: " + JSON.stringify(data[0].main_title));
 
  return (
    <div className="">
      <Navbar />
      <Mtop />
      <Banner_services title={data[0].main_title} />
      <div className="p-12">
        <div class="w-full p-7 md:p-12 flex md:flex-row flex-col justify-between items-center gap-12">
          <p class="text-justify md:w-1/2 font-sm text-gray-500 ">
            {data[0].content}
          </p>
          <Image
            className="md:w-1/2"
            src={data[0].main_image_url}
            alt="About"
            width={300}
            height={500}
          />
        </div>
        {data[0]?.services_provided?.map((service) => (
          <div class="flex flex-col items-center justify-center w-full h-full">
            <h1 class="font-body w-full mb-5 text-2xl font-bold tracking-wide leading-1 text-blue-700">
              {service.title}
            </h1>
            <p class="self-start text-justify font-sm text-gray-500 mb-6">
              {service.description} <br />
              <span className="italic">{service.subdescription}</span>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {service.images.map((item) => (
                <Image
                  className="w-64"
                  width={300}
                  height={300}
                  src={item}
                  alt="About"
                />
              ))}
            </div>
            <div className="px-8 border-2 border-gray-100 my-12"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default scaled_marine_model_making;
