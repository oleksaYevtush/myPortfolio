import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

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
      duration: 800,
      smooth: 'easeInOutQuad',
    });
  };

  const isVisible = scrollProgress > 0.05;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed z-40 p-2.5 sm:p-3 bg-[#412555c7] hover:bg-[#5b3279] transition-all duration-300 rounded-full shadow-xl bottom-5 right-5 sm:bottom-8 sm:right-8 flex items-center justify-center text-white ${
        isVisible ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-75 pointer-events-none"
      }`}
      style={{
        background: `linear-gradient(to right, #180f1f ${scrollProgress * 100}%, #512f6b ${scrollProgress * 100}%)`,
      }}>
      <span className="text-xl sm:text-2xl font-bold leading-none px-1">&#8593;</span>
    </button>
  );
};

export default ScrollToTopButton;
