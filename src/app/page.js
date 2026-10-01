'use client';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useScroll, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { projects } from '../data';
import Card from '../app/components/Card';
import ScrollToTopButton from './components/ScrollToTopButton';
import Cursor from "./components/Cursor";

export default function Home({ pageProps }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  }) || { scrollYProgress: 0 };

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let locomotiveInstance = null;
    let cancelled = false;

    (async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        if (cancelled) return;
        locomotiveInstance = new LocomotiveScroll();
      } catch (error) {
        if (!cancelled) {
          console.error('Failed to initialize locomotive-scroll:', error);
        }
      }
    })();

    const timer = setTimeout(() => {
      setLoaded(true);
      document.body.style.cursor = 'default';
    }, 1200);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      if (locomotiveInstance && typeof locomotiveInstance.destroy === 'function') {
        locomotiveInstance.destroy();
      }
    };
  }, []);

  return (
    <main
      ref={container}
      data-scroll-container
      className="relative flex flex-col min-h-screen bg-gradient-to-br from-[#180f1f] via-[#231227] to-[#3b1f3d] overflow-x-hidden">
      <AnimatePresence>
        {!loaded && <Loader key="loader2" />}
      </AnimatePresence>
      {loaded && (
        <>
          <Navbar />
          <div className="container px-4 sm:px-8 md:px-12 lg:px-16 mx-auto mt-2 max-w-7xl">
            <HeroSection />
            <AboutSection />
            <SkillSection />
            <ProjectsSection />
            <div className="pt-4 pb-8 sm:pb-12" id="certificate">
              {projects.map((project, i) => {
                const targetScale = 1 - ((projects.length - i) * 0.05);
                return (
                  <Card
                    key={`p_${i}`}
                    i={i}
                    {...project}
                    progress={scrollYProgress}
                    range={[i * 0.2, 1]}
                    targetScale={targetScale}
                  />
                );
              })}
            </div>
            <EmailSection />
          </div>
          <Footer />
          <ScrollToTopButton />
          <Cursor />
        </>
      )}
    </main>
  );
}