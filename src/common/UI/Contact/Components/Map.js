import React from "react";

const Map = () => {
  return (
    <div className="mapouter relative text-right h-100 w-100 pt-5">
      <div clasName=" bg-none h-100  w-[100px] md:w-[500px] m-0 p-0">
        <iframe
          width="100%"
          height="500"
          src="https://maps.google.com/maps?q=Ship Technology Industrial Consultancy, Center for Innovation Technology Transfer & Industrial Collaboration, CITTIC, CUSAT, Kochi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        {/* <a href="https://2yu.co">2yu</a> */}
        {/* <br> */}{" "}
      </div>
    </div>
  );
};

export default Map;
