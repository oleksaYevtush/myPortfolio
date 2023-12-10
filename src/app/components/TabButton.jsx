import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children, icon, controls }) => {
  const buttonClasses = active ? "text-white" : "text-[#82768a]";

  return (
    <button onClick={selectTab} className="flex items-center">
      <p className={`lg:text-3xl md:font-19 sm:font-19 mr-2 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      {icon && <Image src={icon} alt="Icon" className="w-6 h-6" />}
      <motion.div
        initial="default"
        animate={controls}
        variants={variants}
        className="h-1 mt-2 mr-3 bg-primary-500"
      ></motion.div>
    </button>
  );
};

export default TabButton;
