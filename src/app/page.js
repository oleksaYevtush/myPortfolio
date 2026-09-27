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
    offset: ['start start', 'end end']
  }) || { scrollYProgress: 0 };

  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const timer = setTimeout(() => {
      setLoaded(true);
      document.body.style.cursor = 'default';
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.cursor = 'default';
    };
  }, []);
  
  
  return (
    <main
      ref={container}
      data-scroll-container
      className="relative flex flex-col bg-gradient-to-r bg-[#180f1f] to-bg-[#3b1f3d] animate-gradient overflow-x-hidden min-h-screen w-full">
      <AnimatePresence>
        {Loaded ? null : <Loader key="loader2" />}
      </AnimatePresence>
      {Loaded && (
        <>
          <Navbar />
            <div className="container px-4 sm:px-8 md:px-12 lg:px-16 mx-auto mt-2">
              <HeroSection />
              <AboutSection />
              <SkillSection />
              <ProjectsSection />
              <div id="certificate" className="pt-12 sm:pt-16 pb-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-white font-title mb-6 md:mb-10">
                  Certificates
                </h2>
              </div>
            </div>
            <div className="pb-12 sm:pb-16">
              {projects.map((project, i) => {
                const targetScale = 1 - ((projects.length - i) * 0.05);
                return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />;
              })}
            </div>
            <div className="container px-4 sm:px-8 md:px-12 lg:px-16 mx-auto">
              <EmailSection />
            </div>
            <Footer />
          </>
        )}
        {Loaded && <ScrollToTopButton scrollProgress={scrollYProgress} />}
        {Loaded && <Cursor />}
      </main>  
  );
}