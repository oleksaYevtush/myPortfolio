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
    <section className="text-white py-8 sm:py-16" id="about">
      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center ${
          inView ? "opacity-100" : "opacity-0"
        } transition-opacity duration-700`}>
        <motion.div
          className="flex justify-center items-center order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}>
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-[22rem] lg:h-[22rem] rounded-2xl overflow-hidden border border-purple-500/30 shadow-xl shadow-purple-950/50">
            <Image
              className="object-cover"
              src="/images/about-image.webp"
              alt="About Oleksandra"
              fill
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 350px"
              loading="lazy"
            />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col text-center md:text-left order-1 md:order-2"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}>
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-title text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
            About Me
          </h2>
          <p className="text-[#e0cbe1] text-base sm:text-lg leading-relaxed font-title">
            I’m an ambitious frontend developer transitioning from medicine to IT, applying key skills like meticulous attention to detail, strong problem-solving capabilities, and rapid learning.
          </p>
          <p className="text-[#cbb5cc] text-sm sm:text-base mt-4 leading-relaxed font-title">
            I create clean, maintainable code with modern technologies like React, Next.js, and Tailwind CSS. I am enthusiastic about continuous growth and confident in becoming a valuable, proactive asset to your team and project&apos;s success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
