"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <section className="text-white" id="about">
      <div ref={ref} className={`md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ${inView ? "visible" : "invisible"}`}>
        <motion.div className="relative" 
        variants={containerVariants} 
        initial="hidden"
        animate={inView ? "visible" : "hidden"}>
          <div className="hidden md:block sm:block">
            <Image
              className="rounded-t-xl lg:w-[420px] lg:h-[320px] md:w-[320px] md:h-[220px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/about-image.webp"
              width={420}
              height={320}
              alt="About"
              loading="lazy"
            />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col h-full mt-4 text-left md:mt-0 lg:pl-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}>
          <h2 className="mb-4 text-4xl font-bold font-title ext-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-200">About Me</h2>
          <p className="text-[#e0cbe1] lg:text-lg font-title">
            I am an ambitious front-end developer transitioning from a successful career in medicine to IT.
            <br />
            I utilize skills learned in medicine such as attention to detail and problem solving on my own. I believe that I can become a valuable employee and help achieve the projects success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
