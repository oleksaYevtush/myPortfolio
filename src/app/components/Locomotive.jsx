"use client";
import { useEffect } from 'react';
 
const Locomotive = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smoothMobile: false,  
        multiplier: 0.8,  
      });
    })();
  }, []);

  return null;
};

export default Locomotive;

