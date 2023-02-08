import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import AboutUsHome from "../../components/AboutUsHome";
import Footer from "../../components/Footer";
import Services from "../../components/Services";
import Mtop from "../../components/Mtop";
// import Carousal from "./components/Carousal";
import Achieve from "./Components/Achieve";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Clients from "./Components/Clients";
import Carousal3 from "./Components/Carousal3";
import Test from "./Components/Test";

const Home = () => {
    
  return (
    <div className="relative w-full">
      <Navbar />
      <Mtop /> {/* <Carousal/> */}
      <Carousal3 /> {/* <Carou4/> */}
      <div className="flex-col md:flex md:flex-row bg-shipblue text-shipy italic">
        <div className="w-full text-center py-7 font-display italic">
          <h1 className="text-3xl mb-6">Create | Enhance | Sustain</h1>
          <h1 className="text-xl">Established In 2016</h1>
        </div>
      </div>
      <AboutUsHome />
      <Services />
      <Achieve />
      <Projects />
      <Testimonials />
      {/* <div className="flex h-full w-100 overflow-hidden ">
        <a href="#">
          <h5 class="text-center my-10 text-3xl md:text-5xl font-bold tracking-wide font-body text-gray-900 dark:text-white">
            <span className="font-medium">OUR</span> CLIENTS
          </h5>
        </a>
        <div
          className="h-100 w-3/4 transition ease-in-out delay-0 "
          style={{
            transform: `translateX(-${activeSlide * 100}%)`,
          }}
        >
          <Clienttest1 />
          <Clienttest2 />
        </div>
        <div
          className="h-100 w-100 transition ease-in-out delay-0 "
          style={{
            transform: `translateX(-${activeSlide * 100}%)`,
          }}
        >
          <Clienttest2 />
        </div>
      </div> */}
      {/* <Clients/> */}
      <Test/>
      <Footer />
    </div>
  );
};

export default Home;
