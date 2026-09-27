
import { motion } from 'framer-motion';
import React from 'react';

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Loader = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 2 }}
      style={{ position: 'fixed', inset: 0, zIndex: 9999 }}
      className="flex flex-col items-center justify-center w-full h-full bg-black"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="w-[15vw] min-w-[60px] max-w-[120px] h-auto overflow-visible"
        style={{ strokeLinejoin: 'round', strokeLinecap: 'round' }}
      >
        <g>
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            stroke="#fbcfe8"
            strokeWidth="1.5"
            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
          />
        </g>
      </svg>
      <motion.span
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="font-title mt-4 text-base sm:text-xl md:text-2xl text-[#fbcfe8] text-center px-4"
      >
        Вітаю | Hello | Cześć | Guten tag
      </motion.span>
    </motion.div>
  );
};

export default Loader;
