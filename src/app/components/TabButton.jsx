import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children, icon }) => {
  const buttonClasses = active ? "text-white" : "text-[#9d89a4] hover:text-[#d4c1da]";

  return (
    <button
      onClick={selectTab}
      className="flex flex-col items-center px-4 py-2 group focus:outline-none">
      <div className="flex items-center space-x-2">
        <span className={`text-lg sm:text-2xl lg:text-3xl font-semibold transition-colors duration-200 ${buttonClasses}`}>
          {children}
        </span>
        {icon && <Image src={icon} alt="Icon" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />}
      </div>
      <motion.div
        initial="default"
        animate={active ? "active" : "default"}
        variants={variants}
        transition={{ duration: 0.3 }}
        className="h-1 mt-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
      />
    </button>
  );
};

export default TabButton;
