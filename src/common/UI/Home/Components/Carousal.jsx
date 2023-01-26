import Image from "next/image";
import React, { useEffect, useState } from "react";
import S1 from "../../../../../public/assets/images/main-slider/7.jpg";
import S2 from "../../../../../public/assets/images/main-slider/8.jpg";
import S3 from "../../../../../public/assets/images/main-slider/78.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

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
      url: "https://imgs.search.brave.com/kPJdIx4klBYZ-vM8YpLcAQs01rZrB1lF6wlqBCZgYD8/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5z/aHV0dGVyc3RvY2su/Y29tL2Jsb2cvd3At/Y29udGVudC91cGxv/YWRzL3NpdGVzLzUv/MjAxNi8wMy9mYWxs/LXRyZWVzLXJvYWQt/MS5qcGc",
    },
    {
      url: "https://imgs.search.brave.com/StdazPSRZQdmsDiUMK5LxSfWzNt-EMDNc67W5e7rSXk/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy50/aGV3b3dzdHlsZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTUvMDEvbmF0dXJl/LWltYWdlLmpwZw",
    },
    {
      url: "https://imgs.search.brave.com/3YX7KqOXLAFq-aT-syBGd6h7Skv3OuydTuCg0YFQM5U/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/SHZUT1NGNzkyNEFo/NjNXN21venhRSGFF/byZwaWQ9QXBp",
    },
  ];

  return (
    <div className="w-full h-[780px] m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
    </div>
  );
}

export default Carousal;
