import React from "react";
import Image from "next/image";
import Workplace from "../../../public/workplace.png";

const Footer = () => {
  return (
    <footer className="footer border-t border-purple-900/30 text-white bg-[#140c1a]">
      <div className="container flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 py-6 mx-auto max-w-7xl gap-4">
        <div className="flex items-center space-x-3">
          <Image src={Workplace} width={36} height={36} alt="workplace logo" />
          <span className="font-title text-sm text-[#cbb5cc]">Oleksandra Yevtush</span>
        </div>
        <p className="text-xs text-[#8a768c] font-title text-center sm:text-right">
          © {new Date().getFullYear()} All rights reserved. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
