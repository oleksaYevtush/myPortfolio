import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    let isVisible = false;

    const onMouseMove = (e) => {
      if (!isVisible) {
        gsap.set(cursor, { opacity: 1 });
        isVisible = true;
      }
      gsap.to(cursor, {
        x: e.clientX - 18,
        y: e.clientY - 18,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const onMouseOver = (e) => {
      if (e.target.closest('a, button, input, textarea, [role="button"]')) {
        gsap.to(cursor, {
          scale: 1.6,
          backgroundColor: "rgba(168, 85, 247, 0.25)",
          borderColor: "#d8b4fe",
          duration: 0.2,
        });
      }
    };

    const onMouseOut = (e) => {
      if (e.target.closest('a, button, input, textarea, [role="button"]')) {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "#b074cb",
          duration: 0.2,
        });
      }
    };

    // Hide initially until mouse moves
    gsap.set(cursor, { opacity: 0 });

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return <div ref={cursorRef} className="cursor hidden md:block" />;
};

export default Cursor;
