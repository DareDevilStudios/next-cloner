import React, { useState, useEffect } from "react";
import Image from "next/image";
import Image1 from "../../../../../public/assets/images/clients/1.png";
import Image2 from "../../../../../public/assets/images/clients/2.png";
import Image3 from "../../../../../public/assets/images/clients/3.jpeg";
import Image4 from "../../../../../public/assets/images/clients/4.png";
import Image5 from "../../../../../public/assets/images/clients/5.png";
import Image6 from "../../../../../public/assets/images/clients/6.png";
import Image7 from "../../../../../public/assets/images/clients/7.png";
import Image8 from "../../../../../public/assets/images/clients/8.png";
import Image9 from "../../../../../public/assets/images/clients/9.png";
// import Image10 from "../../../../../public/assets/images/clients/10.png";
import Image11 from "../../../../../public/assets/images/clients/11.png";
import Image12 from "../../../../../public/assets/images/clients/12.png";
import Image13 from "../../../../../public/assets/images/clients/13.png";
import Image14 from "../../../../../public/assets/images/clients/14.png";
import Image15 from "../../../../../public/assets/images/clients/15.jpeg";
import Image16 from "../../../../../public/assets/images/clients/16.png";
import Image17 from "../../../../../public/assets/images/clients/17.png";
import Image18 from "../../../../../public/assets/images/clients/18.png";
import Image19 from "../../../../../public/assets/images/clients/19.png";
import Image20 from "../../../../../public/assets/images/clients/20.jpg";
import Image21 from "../../../../../public/assets/images/clients/21.jpg";
import Image22 from "../../../../../public/assets/images/clients/22.png";
import Image23 from "../../../../../public/assets/images/clients/23.jpeg";
import Image24 from "../../../../../public/assets/images/clients/24.jpeg";
import Image25 from "../../../../../public/assets/images/clients/25.webp";
import Image26 from "../../../../../public/assets/images/clients/26.jpg";
import Image27 from "../../../../../public/assets/images/clients/27.png";
import Image28 from "../../../../../public/assets/images/clients/28.png";
import Image29 from "../../../../../public/assets/images/clients/29.png";
import Image30 from "../../../../../public/assets/images/clients/30.png";
import Image31 from "../../../../../public/assets/images/clients/31.png";
import Image32 from "../../../../../public/assets/images/clients/32.png";
import Image33 from "../../../../../public/assets/images/clients/33.png";
import Image34 from "../../../../../public/assets/images/clients/34.png";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: Image1, alt: "Event" },
    { src: Image2, alt: "Event" },
    { src: Image3, alt: "Event" },
    { src: Image4, alt: "Event" },
    { src: Image6, alt: "Event" },
    { src: Image7, alt: "Event" },
    { src: Image8, alt: "Event" },
    { src: Image9, alt: "Event" },
    { src: Image11, alt: "Event" },
    { src: Image12, alt: "Event" },
    { src: Image13, alt: "Event" },
    { src: Image14, alt: "Event" },
    { src: Image15, alt: "Event" },
    { src: Image16, alt: "Event" },
    { src: Image17, alt: "Event" },
    { src: Image18, alt: "Event" },
    


  ];
  const images2 = [
    { src: Image19, alt: "Event" },
    { src: Image20, alt: "Event" },
    { src: Image21, alt: "Event" },
    { src: Image22, alt: "Event" },
    { src: Image23, alt: "Event" },
    { src: Image24, alt: "Event" },
    { src: Image25, alt: "Event" },
    { src: Image26, alt: "Event" },
    { src: Image27, alt: "Event" },
    { src: Image28, alt: "Event" },
    { src: Image29, alt: "Event" },
    { src: Image30, alt: "Event" },
    { src: Image31, alt: "Event" },
    { src: Image32, alt: "Event" },
    { src: Image33, alt: "Event" },
    { src: Image34, alt: "Event" },
  ]

  const nextImage = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 5);
    }
  };
  const nextImage = () => {
    if (currentIndex === images2.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 5);
    }
  };

  const prevImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const prevImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images2.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-100 h-96 p-4 relative ">
      <div className="flex">
        {[...Array(5)].map((_, index) => {
          const imageIndex = (currentIndex + index) % images.length;
          return (
            <Image
              key={imageIndex}
              src={images[imageIndex].src}
              alt={images[imageIndex].alt}
              className="h-20 w-64 px-3"
            />
          );
        })}
      </div>
      <div className="flex">
        {[...Array(5)].map((_, index) => {
          const imageIndex = (currentIndex + index) % (images2.length + 5);
          return (
            <Image
              key={imageIndex}
              src={images[imageIndex].src}
              alt={images[imageIndex].alt}
              className="h-20 w-64 px-3"
            />
          );
        })}
      </div>
      {/* <button
        onClick={prevImage}
        className="absolute left-5 bottom-20 m-4 p-4 rounded-full bg-white hover:bg-gray-200"
      >
        Pre
      </button>
      <button
        onClick={nextImage}
        className="absolute right-5 bottom-20 m-4 p-4 rounded-full bg-white hover:bg-gray-200"
      >
        Next
      </button> */}
    </div>
  );
}
    