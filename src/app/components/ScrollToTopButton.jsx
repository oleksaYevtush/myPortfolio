import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Image from 'next/image';
import GithubIcon from '../../../public/github-icon.svg';

const ScrollToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = currentScroll / scrollHeight;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuad',
    });
  };

  const buttonStyle = {
    bottom: `${scrollProgress * 20}px`,  
    background: `linear-gradient(to right, #180f1f ${scrollProgress * 100}%, #3b1f3d ${scrollProgress * 100}%)`,
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed p-3 bg-[#412555c7] transition duration-300 rounded-full shadow-lg bottom-10 right-12"
      style={buttonStyle}>
      <Image src={GithubIcon} alt="Linkedin Icon" width={40} height={40} />
      &#8593;
    </button>
  );
};

export default ScrollToTopButton;
