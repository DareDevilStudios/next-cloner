import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Carousal from "./Components/Carousal.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousal/>
      <div className="flex bg-shipblue text-shipy italic">
        <div className="w-1/2 text-center">
          <h1 className="text-4xl py-7">Create | Enhance | Sustain</h1>
        </div>
        <div className="w-1/2 text-center text-shipblue">
          <h1 className="text-4xl py-7 bg-shipy">Established In 2016</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
