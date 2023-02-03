import Image from "next/image";
import React, { useEffect, useState } from "react";

function Carousal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reps, setReps] = useState(false);

  useEffect(() => {
    if (!reps) {
      setReps(true);
      const interval = setInterval(() => {
        setCurrentIndex(currentIndex + 1);
      }, 5000);
    }
  }, []);

  useEffect(() => {
    setInterval(() => {
      if (currentIndex < slides.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (currentIndex === slides.length - 1) {
        setCurrentIndex(0);
      }
    }, 5000);
  }, [currentIndex]);

  const slides = [
    {
      url: "/assets/images/main-slider/7.jpg",
    },
    {
      url: "/assets/images/main-slider/8.jpg",
    },
    {
      url: "/assets/images/main-slider/78.jpg",
    },
  ];

  return (
    <div className="w-full h-[780px] m-auto relative z-40 group overflow-hidden">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})`}}
        className="w-full h-full bg-center bg-cover animate-[grow_4s_linear_forwards]"
      ></div>
    </div>
  );
}

export default Carousal;
