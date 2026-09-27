"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="mb-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#f0e2f1] leading-tight">
            <span className="text-transparent font-title bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
              Hello, I&apos;m{" "}
            </span>
            <br className="hidden sm:inline" />
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
              className="font-title text-pink-300" />
          </h1>
          <p className="text-[#e0cbe1] text-base sm:text-lg mb-6 max-w-xl font-title">
            Junior Frontend Developer transitioning into tech from healthcare, bringing a problem-solving mindset and a growing set of skills in React, JavaScript, and responsive design
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center lg:justify-start">
            <Link
              href="#certificate"
              className="z-10 inline-block px-1 py-1 text-white transition-all duration-300 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:shadow-lg hover:shadow-purple-500/25">
              <span className="font-title block bg-[#180f1f] hover:bg-transparent rounded-full px-6 py-2.5 transition-colors duration-300 text-center font-medium">
                Certificates
              </span>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1-LWTRxebrPa34FBlES8s-qQEZhNhIX4Q/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 inline-block px-1 py-1 text-[#e0cbe1] rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:shadow-lg hover:shadow-pink-500/25">
              <span className="font-title block bg-[#180f1f] hover:bg-transparent hover:text-white rounded-full px-6 py-2.5 transition-colors duration-300 text-center font-medium">
                View CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 lg:col-span-5 flex justify-center items-center">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-purple-600 via-pink-500 to-purple-400 shadow-2xl shadow-purple-900/40">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#180f1f] relative">
              <Image
                src="/images/hero-image.webp"
                alt="Oleksandra Yevtusenko - Frontend Developer"
                fill
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 384px"
                className="object-cover object-center rounded-full"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
