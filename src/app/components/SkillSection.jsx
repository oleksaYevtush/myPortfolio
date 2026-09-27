"use client";
import React, { useState } from "react";
import TabButton from "./TabButton";
import skillsIcon from "../../../public/skills-icon.png";
import experienceIcon  from "../../../public/experience-icon.png";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "SKILLS",
    id: "skills",
    icon: skillsIcon,
    content: (
      <div className="grid grid-cols-2 gap-x-6 sm:gap-x-12 md:gap-x-16 justify-items-start sm:justify-items-center w-full max-w-2xl px-2">
        <ul className="text-sm sm:text-base list-disc pl-4 space-y-1">
          <li>HTML5/CSS3</li>
          <li>JavaScript</li>
          <li>SASS/SCSS</li>
          <li>Tailwind CSS</li>
          <li>GSAP</li>
          <li>REST API</li>
          <li>Node.js</li>
          <li>Trello/Jira</li>
          <li>React/Next.js</li>
          <li>Locomotive Scroll</li>
        </ul>
        <ul className="text-sm sm:text-base list-disc pl-4 space-y-1">
          <li>i18next</li>
          <li>react-spring/framer-motion</li>
          <li>Bootstrap</li>
          <li>Firebase</li>
          <li>Git/GitHub</li>
          <li>VS Code/DevTools</li>
          <li>Gulp/Webpack/Vite</li>
          <li>Opencart/WordPress</li>
          <li>Emotion/styled</li>
          <li>MaterialUI</li>
        </ul>
      </div>
    ),
  },
  {
    title: "EXPERIENCE",
    id: "experience",
    icon: experienceIcon,
    content: (
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-11 pl-4 mb-5 list-disc w-full max-w-4xl">
        <li>Frontend Developer
          <p className="mb-1 mt-1 text-purple-300 font-semibold">_Baza Trainee Ukraine</p>
          <p className="text-sm text-slate-300">since 2023</p>
          <p className="mb-4 text-sm text-slate-300"><span>&apos;//</span>For Kyiv hospital</p>
          <Link href="https://for-kyiv-hospital.vercel.app" target="_blank" rel="noopener noreferrer">
            <Image
                src="/images/hospital_site.webp"
                alt="hospital"
                className="w-full max-w-[400px] h-auto rounded-lg object-cover shadow-lg transition-transform hover:scale-105 duration-300" 
                width={400}
                height={225} 
                loading="lazy" />
          </Link>
        </li>
        <li>Frontend Developer
          <p className="mb-1 mt-1 text-purple-300 font-semibold">_Baza Trainee Ukraine</p>
          <p className="text-sm text-slate-300">since 2024</p>
          <p className="mb-4 text-sm text-slate-300"><span>&apos;//</span>antiCorruption</p>
          <Link href="https://anti-corruption.vercel.app" target="_blank" rel="noopener noreferrer">
            <Image
                src="/images/anti-corruption.webp"
                alt="antiCorruption"
                className="w-full max-w-[400px] h-auto rounded-lg object-cover shadow-lg transition-transform hover:scale-105 duration-300" 
                width={400}
                height={225} 
                loading="lazy" />
          </Link>
        </li>
      </ul>
    ),
  },
];

const SkillSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-[#e0cbe1] py-8 sm:py-12 md:py-16" id="skill">
      <div className="flex flex-row justify-center mt-4 font-title flex-wrap gap-2">
        {TAB_DATA.map((t) => (
          <TabButton
            key={t.id}
            selectTab={() => handleTabChange(t.id)}
            active={tab === t.id}
            icon={t.icon}>
            {t.title}
          </TabButton>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-8 font-title w-full">
        <motion.div
          key={tab}  
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.75 }}
          className="w-full flex justify-center">
          {TAB_DATA.find((t) => t.id === tab).content}
        </motion.div>
      </div>
    </section>
  );
};


export default SkillSection;
