import React from "react";
import Image from "next/image";
import Workplace from "../../../public/workplace.png";

const Footer = () => {
  return (
    <footer className="footer border z-2 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container flex justify-between p-12">
        <Image src={Workplace} width={40}
            height={40} alt="workplace" />
      </div>
    </footer>
  );
};

export default Footer;
