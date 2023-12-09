import React from "react";
import Scaled_marine_model_making from "../../common/UI/Services/scaled_marine_model_making/scaled_marine_model_making.jsx";
import { useRouter } from "next/router";

const service = () => {
  const router = useRouter();

  console.log("slug is : " + router.query.service);

  return (
    <div>
      {/* shows the heading and details */}
      <Scaled_marine_model_making slugMatcher={router.query.service} />
    </div>
  );
};

export default service;
