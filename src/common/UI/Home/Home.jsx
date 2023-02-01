import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Carousal from "./Components/Carousal.jsx";
import AboutUsHome from "../../components/AboutUsHome.jsx";
import Services from "../../components/Services.jsx";
import Achieve from "./Components/Achieve.jsx";
import Projects from "./Components/Projects.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Clients from "./Components/Clients.jsx";
import Footer from "../../components/Footer.jsx";
import Carousal3 from "./Components/Carousal3.jsx";
import Mtop from "../../components/Mtop.jsx";

const Home = () => {
  return (
    <div className="relative w-full">
      <Navbar />
      <Mtop/>
      {/* <Carousal/> */}
      <Carousal3/>
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
