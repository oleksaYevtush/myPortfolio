"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 relative">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 col-span-12 sm:col-span-8 text-center sm:text-left justify-self-start place-self-center w-full">
          <h1 className="mb-4 text-3xl font-bold text-[#f0e2f1] sm:text-5xl md:text-6xl lg:text-7xl lg:leading-normal break-words">
            <span className="text-transparent font-title bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-200">
              Hello, I&apos;m{" "}
            </span>
            <br />
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
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 mt-6">
            <Link
              href="#certificate"
              className="z-10 inline-block w-full sm:w-fit px-1 py-1 text-white transition-colors duration-300 rounded-full pointer-events-auto bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-center">
              <span className="font-title block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 transition-colors duration-300">
                Certificate
              </span>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1-LWTRxebrPa34FBlES8s-qQEZhNhIX4Q/view?usp=drive_link"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 inline-block w-full sm:w-fit px-1 py-1 text-[#e0cbe1] rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 pointer-events-auto text-center">
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
          className="relative z-10 col-span-12 sm:col-span-4 place-self-center">
          <div className="w-[230px] h-[230px] sm:w-[260px] sm:h-[260px] lg:w-[350px] lg:h-[350px] relative rounded-full overflow-hidden shadow-2xl">
            <Image
              src="/images/hero-image.webp"
              alt="hero image"
              className="object-cover"
              fill
              priority
              sizes="(max-width: 640px) 230px, (max-width: 1024px) 260px, 350px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
