"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pb-[130px] md:pb-[30px] sm:pb-[30px] xs:pb-[30px] relative">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 col-span-8 text-center place-self-center sm:text-left justify-self-start">
          <h1 className="mb-4 text-3xl font-bold text-[#f0e2f1] md:text-6xl sm:text-5xl lg:text-7xl lg:leading-normal">
            <span className="text-transparent font-title bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-200">
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
            href="#certificate"
            className="z-10 inline-block w-full px-1 py-1 mr-4 text-white transition-colors duration-300 rounded-full pointer-events-auto sm:w-fit bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800">
            <span className="font-title block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 transition-colors duration-300">
              Certificate
            </span>
          </Link>
            <Link
              href="https://drive.google.com/file/d/1Z7epyulYDE2Bk12VisO9Cl6xPLP_Vy4y/view?usp=sharing"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="z-1 inline-block w-full px-1 py-1 mt-3 text-[#e0cbe1] rounded-full sm:w-fit bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 pointer-events-auto">
              <span className="font-title block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 col-span-4 sm:mt-8 place-self-center">
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
              width={500}
              height={500}
              priority
              style={{ top: 'calc(40% + 30px)' }}
            />
          </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
