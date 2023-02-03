import React from "react";
import Navbar from "../../components/Navbar";
import Mtop from "../../common/components/Mtop";
import Banner from "../../common/components/Banner";
import Gallery from "./components/Gallery";
import Footer from "../../components/Footer";

const Designs = () => {
  return (
    <div>
      <Navbar />
      <Mtop />
      <Banner title="OUR DESIGNS" />
      <Gallery/>
      <Footer />
    </div>
  );
};

export default Designs;
