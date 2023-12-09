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

export default function Home({ pageProps }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  }) || { scrollYProgress: 0 };

  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
  
        setTimeout(() => {
          setLoaded(false); 
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  
    function raf(time) {
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);
  
  
  return (
    <main
      ref={container}
      data-scroll-container
      className="relative flex flex-col bg-gradient-to-r bg-[#180f1f] to-bg-[#3b1f3d] animate-gradient"
    >
      <AnimatePresence>
        {Loaded ? null : <Loader key="loader2" />}
      </AnimatePresence>
      {Loaded && (
        <>
          <Navbar />
            <div className="container px-12 py-4 mx-auto mt-20">
              <HeroSection />
              <AboutSection />
              <SkillSection />
              <ProjectsSection />
              <div style={{ paddingBottom: "200px" }}>
                {projects.map((project, i) => {
                  const targetScale = 1 - ((projects.length - i) * 0.05);
                  return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />;
                })}
              </div>
              <EmailSection />
            </div>
            <Footer />
          </>
        )}
        {Loaded && <ScrollToTopButton scrollProgress={scrollYProgress} />}
      </main>  
  );
}