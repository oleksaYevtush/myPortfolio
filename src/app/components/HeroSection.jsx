"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pb-[130px] md:pb-[60px] sm:pb-[30px]">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className=" bg-[#612c8bb2] rounded-[15px] md:-translate-x-1/4 h-80 w-80 blur-[125px] scale-120 opacity-130 absolute top-50 -left-45 transform -translate-x-1/2 -translate-1/2 animate-infinite animate-pulse animation-delay-3000"></div>
        <div className=" bg-[#aa31bdae] rounded-[15px] md:-translate-x-1/4 h-80 w-80 blur-[125px] scale-120 opacity-130 absolute top-30 -left-55 transform -translate-x-1/2 -translate-1/2 animate-infinite animate-pulse animation-delay-2000"></div>
        <div className=" bg-[#5c23c6af] rounded-[15px] md:-translate-x-1/4 h-80 w-80 blur-[125px] scale-120 opacity-130 absolute top-30 -left-65 transform -translate-x-1/2 -translate-1/2 animate-infinite animate-pulse animation-delay-4000"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="col-span-8 text-center place-self-center sm:text-left justify-self-start">
          <h1 className="mb-4 text-3xl font-bold text-[#f0e2f1] md:text-6xl sm:text-5xl lg:text-7xl lg:leading-normal">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-200">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                ">_Oleksandra",
                1000,
                ">_Frontend",
                1000,
                ">_Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-title" />
          </h1>
          <div>
            <Link
              href="/#certificate"
              className="z-0 inline-block w-full px-1 py-1 mr-4 text-white rounded-full sm:w-fit bg-[#121212] hover:bg-slate-800 bg-gradient-to-br from-primary-500 to-secondary-500">
              <span id="certificate" className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Certificate
              </span>
            </Link>
            <Link
              href="https://drive.google.com/file/d/15xX_DRnQhfeAwSk76ZhLsY6Nl4Opnvel/view?usp=sharing"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="z-1 inline-block w-full px-1 py-1 mt-3 text-[#e0cbe1] rounded-full sm:w-fit bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-4 sm:mt-8 place-self-center">
          <div className="relative lg:mt-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[300px] relative">
            <Image
              src="/images/hero-image.webp"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full sm:top-60 top-1/2 left-1/2"
              width={300}
              height={300}
              priority
              style={{ top: 'calc(50% + 30px)' }}
            />
          </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
