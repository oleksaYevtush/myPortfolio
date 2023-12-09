import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Image from 'next/image';
import GithubIcon from "../../../public/github-icon.svg";

const ScrollToTopButton = ({ scrollProgress }) => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuad',
    });
  };

  const buttonStyle = {
    background: `linear-gradient(to right, #180f1f ${scrollProgress * 100}%, #3b1f3d ${scrollProgress * 100}%)`,
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed p-3 bg-[#412555c7] transition duration-300 rounded-full shadow-lg bottom-10 right-10"
      style={buttonStyle}
    >
      <Image src={GithubIcon} alt="Linkedin Icon" size={24} />
      &#8593;
    </button>
  );
};

export default ScrollToTopButton;
