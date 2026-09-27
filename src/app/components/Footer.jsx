import React from "react";
import Image from "next/image";
import Workplace from "../../../public/workplace.png";

const Footer = () => {
  return (
    <footer className="footer border-t border-[#33353F]/50 text-white z-10">
      <div className="container flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-12 py-6 mx-auto gap-4">
        <Image src={Workplace} width={36} height={36} alt="workplace" className="w-8 h-8 sm:w-9 sm:h-9" />
        <p className="text-slate-400 text-xs sm:text-sm font-title text-center">
          © {new Date().getFullYear()} Oleksandra Yevtush. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
