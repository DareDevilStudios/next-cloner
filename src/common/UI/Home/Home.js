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
import ClientsAuto from "./Components/ClientsAuto";
import Test2 from "./Components/Test2";
import { motion } from "framer-motion";

const Home = () => {

  const cardVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }

  return (
    <div className="relative w-full">
      <Navbar />
      <Mtop />
      {/* <Carousal/> */}
      <Carousal3 />
      {/* <Carou4/> */}
      <div className="flex-col md:flex md:flex-row bg-shipblue text-shipy italic">

        <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ type: "tween", stiffness: 100 }}
        className="w-full text-center py-7 font-display italic">
          <h1 className="text-3xl mb-6">Create  |   Enhance |   Sustain</h1>
          <h1 className="text-xl">Established In 2016</h1>
        </motion.div>

      </div>
      <AboutUsHome />
      <Services />
      <Achieve />
      <Projects />
      <Testimonials />
      <Test2 />
      {/* <ClientsAuto/> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
