import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children, icon }) => {
  const buttonClasses = active ? "text-white" : "text-[#82768a]";

  return (
    <button onClick={selectTab} className="flex flex-col items-center px-4 py-2">
      <div className="flex items-center gap-2">
        <p className={`text-base sm:text-xl lg:text-2xl font-semibold hover:text-white transition-colors ${buttonClasses}`}>
          {children}
        </p>
        {icon && <Image src={icon} alt="Icon" className="w-5 h-5 sm:w-6 sm:h-6" />}
      </div>
      <motion.div
        initial="default"
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 mt-1 bg-primary-500 rounded-full"
      ></motion.div>
    </button>
  );
};

export default TabButton;
