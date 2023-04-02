import React from "react";
import Navbar from "../../components/Navbar";
import Mtop from "../../components/Mtop";
import Banner from "../../components/Banner";
import Gallery from "./components/Gallery";
import Footer from "../../components/Footer";

const Designs = () => {
  return (
    <div id="top" className="relative">
      <Navbar />
      <Mtop />
      <Banner title="OUR DESIGNS" />
      <Gallery/>
      <Footer />
    </div>
  );
};

export default Designs;
