'use client';
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const LocomotiveScrollContainer = ({ children }) => {
  const containerRef = useRef(null);

  //useEffect(() => {
    if (typeof window !== 'undefined') {
      const container = containerRef.current;

      if (container) {
        const scroll = new LocomotiveScroll({
          el: container,
          smooth: true,
        });

        return () => {
          scroll.destroy();
        };
      }
    }
  //}, []);

  return <div ref={containerRef} className="scroll-container">{children}</div>;
};

export default LocomotiveScrollContainer;
