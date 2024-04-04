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
      className="relative grid gap-4 py-24 my-12 sm:pt-0 md:gap-6 sm:gap-8 md:grid-cols-2 md:my-12 sm:justify-items-center">
      <div className=" bg-[#512f6bb2] rounded-[15px] md:-translate-x-1/4 h-80 w-80 blur-[125px] scale-120 opacity-130 absolute top-50 -left-45 transform -translate-x-1/2 -translate-1/2 animate-infinite animate-pulse animation-delay-3000"></div>
      <div className=" bg-[#8f2b9eae] rounded-[15px] md:-translate-x-1/4 h-80 w-80 blur-[125px] scale-120 opacity-130 absolute top-30 -left-55 transform -translate-x-1/2 -translate-1/2 animate-infinite animate-pulse animation-delay-2000"></div>
      <div className=" bg-[#4f2898af] rounded-[15px] md:-translate-x-1/4 h-80 w-80 blur-[125px] scale-120 opacity-130 absolute top-30 -left-65 transform -translate-x-1/2 -translate-1/2 animate-infinite animate-pulse animation-delay-4000"></div>
      <div className="z-10">
        <h5 className="font-title my-2 text-xl font-bold text-[#e0cbe1]">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          👋🏼I will be glad to see you in my contacts.<br></br>
          You can contact me here: olexaevtush@gmail.com<br></br>
          Telegram: https://t.me/OlexaEvtush<br></br>
          ✨I&apos;m currently looking for new opportunities, my inbox is always open.<br></br>
          🤝I believe that I can become a valuable employee and help achieve the project&apos;s success.
        </p>
        <div className="flex flex-row gap-2 socials sm:justify-items-center">
          <Link href="https://github.com/olexaevtush">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/оleks-yevtush-b2a082228/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <Image src="/images/connect.webp" alt="Connect Image" width={420} height={420} />
      </div>
    </section>
  );
};

export default EmailSection;
