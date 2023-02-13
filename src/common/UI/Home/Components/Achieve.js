import React from "react";
import bg from "../../../../../public/assets/images/background/banner-6.jpg";
import { motion } from "framer-motion";

const Achieve = () => {
  return (
    <motion.div
        initial={{ y: 100 , opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}

        transition={{ type: "bounce", stiffness: 100 }}
      className="py-10 md:py-0 w-full md:h-[30rem] bg-no-repeat bg-cover flex justify-center items-center"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div class="text-center">
        <dl class="grid max-w-screen-md gap-3 md:gap-[10rem] mx-auto text-white sm:grid-cols-3 dark:text-white">
          <div class="flex flex-col items-center justify-center border md:py-20 py-3 md:px-32 px-7">
            <dt class="mb-2 md:mb-6 text-3xl md:text-5xl font-bold font-display">12+</dt>
            <dd class="font-semibold md:text-2xl tracking-wider text-white">Clients Nations</dd>
          </div>
          <div class="flex flex-col items-center justify-center border md:py-20 py-3 md:px-32 px-7">
            <dt class="mb-2 md:mb-6 text-3xl md:text-5xl font-bold font-display">350+</dt>
            <dd class="font-semibold md:text-2xl tracking-wider text-white">Completed Projects</dd>
          </div>
          <div class="flex flex-col items-center justify-center border md:py-20 py-3 md:px-32 px-7">
            <dt class="mb-2 md:mb-6 text-3xl md:text-5xl font-bold font-display">75+</dt>
            <dd class="font-semibold md:text-2xl tracking-wider text-white">Satisfied Customers</dd>
          </div>
        </dl>
      </div>
    </motion.div>
  );
};

export default Achieve;
