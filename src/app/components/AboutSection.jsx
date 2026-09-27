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
    <section className="text-white py-8 sm:py-12 md:py-16" id="about">
      <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${inView ? "visible" : "invisible"}`}>
        <motion.div className="flex justify-center" 
          variants={containerVariants} 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}>
          <div className="relative w-[230px] h-[230px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              className="object-cover"
              src="/images/about-image.webp"
              fill
              alt="About"
              loading="lazy"
              sizes="(max-width: 640px) 230px, (max-width: 1024px) 280px, 360px"
            />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col h-full mt-4 text-center sm:text-left md:mt-0 md:pl-6 lg:pl-10 justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}>
          <h2 className="mb-4 text-3xl sm:text-4xl font-bold font-title text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-200">About Me</h2>
          <p className="text-[#e0cbe1] text-base lg:text-lg font-title leading-relaxed">
            I’m an ambitious front-end developer transitioning from medicine to IT, applying skills like attention to detail and problem-solving. I’m confident in becoming a valuable asset to project’s success.
            <br />
            <br />
            I utilize skills learned in medicine such as attention to detail and problem solving on my own. I believe that I can become a valuable employee and help achieve the projects success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
