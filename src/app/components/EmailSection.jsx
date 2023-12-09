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
      className="relative grid gap-4 py-24 my-12 md:gap-6 md:grid-cols-2 md:my-12 sm:justify-items-center">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-[#512f6b] rounded-[25px] h-80 w-80 z-0 blur-[85px] scale-120 opacity-95 absolute top-50 -left-45 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="font-title my-2 text-xl font-bold text-[#e0cbe1]">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="flex flex-row gap-2 socials">
          <Link href="https://github.com/olexaevtush">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/оleks-yevtush-b2a082228/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <Image src="/images/connect.webp" alt="Connect Image" width={320} height={320} />
      </div>
    </section>
  );
};

export default EmailSection;
