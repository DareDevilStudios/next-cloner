import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// import { generateSlides } from '../utils';

export const Carousal2 = () => {
  const options = {
    type: "fade",
    rewind: true,
    fixedHeight: "100vh",
    fixedWidth: "100%",
    pauseOnHover: false,
    resetProgress: false,
  };

  function generateSlides(length = 3, sig = 7) {
    return Array.from({ length }).map((value, index) => {
      index = sig || index;

      return [
        {
          src: `/assets/images/main-slider/${sig}.jpg`,
        },
      ];
      // return {
      //     src: `https://source.unsplash.com/random/800x450?sig=${index}`,
      //     alt: `Image ${index + 1}`,
      // };
    });
  }

  return (
    <div className="wrapper">
      {/* <h2 id="autoplay-example-heading">Autoplay</h2> */}
      <Splide
        options={options}
        aria-labelledby="autoplay-example-heading"
        hasTrack={false}
      >
        <div className="w-full">
          <SplideTrack>
            {" "}
            {generateSlides().map((slide) => (
              <SplideSlide key={slide.src}>
                <img className="w-full" src={slide.src} alt="ship" />
              </SplideSlide>
            ))}{" "}
          </SplideTrack>
        </div>
      </Splide>
    </div>
  );
};
