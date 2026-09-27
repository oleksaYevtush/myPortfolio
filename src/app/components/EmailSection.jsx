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
      className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 sm:py-20 my-8 font-title overflow-hidden">
      {/* Background glow effects - properly constrained */}
      <div className="pointer-events-none absolute -top-10 -left-10 w-72 h-72 bg-purple-700/25 rounded-full blur-[100px] animate-pulse" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-72 h-72 bg-pink-700/20 rounded-full blur-[100px] animate-pulse animation-delay-2000" />

      <div className="z-10 text-center md:text-left flex flex-col items-center md:items-start">
        <h2 className="my-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-title text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200">
          Let&apos;s Connect
        </h2>
        <div className="text-[#cbb5cc] my-4 max-w-md text-sm sm:text-base leading-relaxed space-y-2">
          <p>👋 I will be glad to see you in my contacts.</p>
          <p>
            Email:{" "}
            <a
              href="mailto:olexaevtush@gmail.com"
              className="text-pink-300 hover:text-white underline transition-colors">
              olexaevtush@gmail.com
            </a>
          </p>
          <p>
            Telegram:{" "}
            <a
              href="https://t.me/OlexaEvtush"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-white underline transition-colors">
              @OlexaEvtush
            </a>
          </p>
          <p className="pt-2 text-xs sm:text-sm text-[#a893aa]">
            ✨ I&apos;m currently open to new opportunities, freelance or full-time roles. Let&apos;s build something great together!
          </p>
        </div>
        <div className="flex flex-row gap-4 mt-2">
          <Link
            href="https://github.com/oleksaYevtush"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 bg-purple-950/60 hover:bg-purple-900 border border-purple-800/40 rounded-full transition-all duration-300 hover:scale-110">
            <Image src={GithubIcon} alt="Github Icon" width={28} height={28} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/оleksa-yevtush/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 bg-purple-950/60 hover:bg-purple-900 border border-purple-800/40 rounded-full transition-all duration-300 hover:scale-110">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={28} height={28} />
          </Link>
        </div>
      </div>
      <div className="z-10 flex justify-center items-center">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
          <Image
            src="/images/connect.webp"
            alt="Connect with Oleksandra"
            fill
            sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
