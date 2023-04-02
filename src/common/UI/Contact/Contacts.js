import React from "react";
import Navbar from "../../components/Navbar";
import Mtop from "../../components/Mtop";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Contact from "./Components/Contact";
import Form from "./Components/Form";
import map from "../../../../public/assets/images/contact_icons/google_map.png";
import phone from "../../../../public/assets/images/contact_icons/phone.png";
import email from "../../../../public/assets/images/contact_icons/mail.png";
import clock from "../../../../public/assets/images/contact_icons/clock.png";

const Contacts = () => {
  return (
    <div className=" ">
      <Navbar />
      <Mtop />
      <Banner title="GET IN TOUCH" />
      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-7 my-24">
      <Contact
        image={map}
        title="Address"
        subtitle="FOR VISIT OUR OFFICE"
        subtitle2="CUSAT, Kochi, Kerala 682022"
        button="FIND ON MAP"
        data="https://www.google.com/maps?ll=10.040998,76.32826&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=993836460274367568"
      />
      <Contact
        image={phone}
        title="PHONE"
        subtitle="FOR MOBILE FANS"
        subtitle2="Call Us On: +91 87148 04425"
        button="GET CALL BACK"
        data="tel:+918714804425"
      />
      <Contact
        image={email}
        title="EMAIL"
        subtitle="FOR ASK ANYTHING"
        subtitle2="info@shiptech-icon.com"
        button="LIVE CHAT"
        data="mailto:smallbird309@gmail.com"
      />
      <Contact
        image={clock}
        title="OP. HRS"
        subtitle="FOR COMFORTABLE VISIT"
        subtitle2="Mon - Sat: 9.00am to 6.00pm"
        button="APPOINTMENT"
        data="https://calendly.com/shiptechicon"
      />
      </div>
      <Form/>
      <Footer />
    </div>
  );
};

export default Contacts;
