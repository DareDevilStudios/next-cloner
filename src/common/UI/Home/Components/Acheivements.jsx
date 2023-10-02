import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Img1 from "../../../../../public/assets/images/achievements_modi.jpg"
import Img2 from "../../../../../public/assets/images/news_modi.jpg"

const Acheivements = () => {
  return (
    <div>
      <section className="bg-white">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "bounce", stiffness: 100 }}
          class=" py-8 px-4 w-full lg:py-16 lg:px-6 text-center"
        >
          <div className="w-full text-center mb-8 lg:mb-16 flex flex-col justify-center items-center">
            <h2 className="mb-4 text-3xl md:text-5xl tracking-tight font-body font-semibold text-gray-900 dark:text-white">
              <span className="font-normal">OUR RECENT</span> ACHIEVEMENTS
            </h2>
            <div className={"flex gap-8 mt-7 w-full justify-center"}>
              <Image className={"w-2/4"} src={Img1} width={300} height={300} alt={"modi prize win"}/>
              <Image className={"w-1/4"} src={Img2} width={300} height={300} alt={"modi prize win"}/>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Acheivements;
