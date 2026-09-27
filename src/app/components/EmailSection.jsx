"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {

  return (
    <section
      id="contact"
      className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 sm:py-16 md:py-24 my-8 font-title overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
        <div className="bg-[#512f6bb2] rounded-[15px] h-72 w-72 sm:h-80 sm:w-80 blur-[100px] opacity-80 absolute top-1/4 -left-20 animate-pulse animation-delay-3000"></div>
        <div className="bg-[#8f2b9eae] rounded-[15px] h-72 w-72 sm:h-80 sm:w-80 blur-[100px] opacity-80 absolute top-1/3 left-10 animate-pulse animation-delay-2000"></div>
      </div>
      <div className="z-10 text-center sm:text-left">
        <h5 className="font-title my-2 text-2xl sm:text-3xl font-bold text-[#e0cbe1]">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-6 max-w-md mx-auto sm:mx-0 text-sm sm:text-base leading-relaxed">
          👋🏼 I will be glad to see you in my contacts.<br />
          Email: <a href="mailto:olexaevtush@gmail.com" className="text-purple-300 hover:underline">olexaevtush@gmail.com</a><br />
          Telegram: <a href="https://t.me/OlexaEvtush" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">@OlexaEvtush</a><br /><br />
          ✨ I&apos;m currently looking for new opportunities, my inbox is always open.<br />
          🤝 I believe that I can become a valuable employee and help achieve the project&apos;s success.
        </p>
        <div className="flex flex-row gap-4 justify-center sm:justify-start socials">
          <Link href="https://github.com/oleksaYevtush" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Image src={GithubIcon} alt="Github Icon" width={36} height={36} />
          </Link>
          <Link href="https://www.linkedin.com/in/оleksa-yevtush/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={36} height={36} />
          </Link>
        </div>
      </div>
      <div className="z-10 flex justify-center">
        <Image 
          src="/images/connect.webp" 
          alt="Connect Image" 
          width={420} 
          height={420} 
          className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default EmailSection;
