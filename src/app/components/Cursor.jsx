import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    document.addEventListener("mousemove", (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.2 });
    });

    const links = document.querySelectorAll("a, button");

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 2, backgroundColor: "#784da8" });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1, backgroundColor: "transparent" });
      });
    });
  }, []);

  return <div ref={cursorRef} className="cursor" />;
};

export default Cursor;
