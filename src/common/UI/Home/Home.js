import React from "react";
import Navbar from "../../components/Navbar";
import Carousal from "./components/Carousal";
import AboutUsHome from "../../components/AboutUsHome";
import Services from "../../components/Services";
import Achieve from "./components/Achieve";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import Footer from "../../components/Footer";
import Carousal3 from "./components/Carousal3";
import Mtop from "../../components/Mtop";

const Home = () => {
  return (
    <div className="relative w-full">
      <Navbar />
      <Mtop/>
      {/* <Carousal/> */}
      <Carousal3/>
      {/* <Carou4/> */}
      <div className="flex-col md:flex md:flex-row bg-shipblue text-shipy italic">
        <div className="w-full text-center py-7 font-display italic">
          <h1 className="text-3xl mb-6">Create |   Enhance |   Sustain</h1>
          <h1 className="text-xl">Established In 2016</h1>
        </div>
        
      </div>
      <AboutUsHome/>
      <Services/>
      <Achieve/>
      <Projects/>
      <Testimonials/>
      <Clients/>
      <Footer/>
    </div>
  );
};

export default Home;
