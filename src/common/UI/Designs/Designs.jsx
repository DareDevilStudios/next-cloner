import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Mtop from "../../components/Mtop.jsx";
import Banner from "../../components/Banner.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "../../components/Footer.jsx";

const Designs = () => {
  return (
    <div>
      <Navbar />
      <Mtop />
      <Banner title="OUR DESIGNS" />
      <Gallery/>
      {/* <Footer /> */}
    </div>
  );
};

export default Designs;
