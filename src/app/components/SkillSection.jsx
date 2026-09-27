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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 max-w-2xl mx-auto px-4">
        <div className="bg-[#241328]/60 p-6 rounded-2xl border border-purple-800/30 backdrop-blur-sm shadow-lg">
          <h3 className="text-lg font-semibold text-purple-200 mb-3 border-b border-purple-800/40 pb-2">Core & Styling</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm text-[#e0cbe1]">
            <li className="flex items-center space-x-1.5"><span className="text-purple-400">▹</span><span>HTML5 / CSS3</span></li>
            <li className="flex items-center space-x-1.5"><span className="text-purple-400">▹</span><span>JavaScript (ES6+)</span></li>
            <li className="flex items-center space-x-1.5"><span className="text-purple-400">▹</span><span>SASS / SCSS</span></li>
            <li className="flex items-center space-x-1.5"><span className="text-purple-400">▹</span><span>Tailwind CSS</span></li>
            <li className="flex items-center space-x-1.5"><span className="text-purple-400">▹</span><span>Bootstrap</span></li>
            <li className="flex items-center space-x-1.5"><span className="text-purple-400">▹</span><span>Emotion / Styled</span></li>
            <li className="flex items-center space-x-1.5"><span className="text-purple-400">▹</span><span>GSAP</span></li>
            <li className="flex items-center space-x-1.5"><span className="text-purple-400">▹</span><span>Framer Motion</span></li>
          </ul>
        </div>
        <div className="bg-[#241328]/60 p-6 rounded-2xl border border-purple-800/30 backdrop-blur-sm shadow-lg">
          <h3 className="text-lg font-semibold text-purple-200 mb-3 border-b border-purple-800/40 pb-2">Frameworks & Tools</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm text-[#e0cbe1]">
            <li className="flex items-center space-x-1.5"><span className="text-pink-400">▹</span><span>React / Next.js</span></li>
            <li className="flex items-center space-x-1.5"><span className="text-pink-400">▹</span><span>REST APIs</span></li>
            <li className="flex items-center space-x-1.5"><span className="text-pink-400">▹</span><span>Node.js</span></li>
            <li className="flex items-center space-x-1.5"><span className="text-pink-400">▹</span><span>Firebase</span></li>
            <li className="flex items-center space-x-1.5"><span className="text-pink-400">▹</span><span>Git / GitHub</span></li>
            <li className="flex items-center space-x-1.5"><span className="text-pink-400">▹</span><span>Vite / Webpack</span></li>
            <li className="flex items-center space-x-1.5"><span className="text-pink-400">▹</span><span>i18next</span></li>
            <li className="flex items-center space-x-1.5"><span className="text-pink-400">▹</span><span>Jira / Trello</span></li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "EXPERIENCE",
    id: "experience",
    icon: experienceIcon,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
        <div className="bg-[#241328]/70 p-5 rounded-2xl border border-purple-800/40 flex flex-col justify-between shadow-lg hover:border-purple-500/50 transition-all">
          <div>
            <span className="text-xs uppercase tracking-wider text-pink-400 font-semibold">since 2023</span>
            <h4 className="text-xl font-bold text-white mt-1">Frontend Developer</h4>
            <p className="text-purple-300 text-sm mb-1 font-medium">Baza Trainee Ukraine</p>
            <p className="text-xs text-[#b8a4be] mb-4">{`//`} Project: For Kyiv hospital</p>
          </div>
          <Link
            href="https://for-kyiv-hospital.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block group overflow-hidden rounded-xl border border-purple-800/50">
            <Image
              src="/images/hospital_site.webp"
              alt="Kyiv hospital project"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              width={400}
              height={225}
              loading="lazy"
            />
          </Link>
        </div>
        <div className="bg-[#241328]/70 p-5 rounded-2xl border border-purple-800/40 flex flex-col justify-between shadow-lg hover:border-purple-500/50 transition-all">
          <div>
            <span className="text-xs uppercase tracking-wider text-pink-400 font-semibold">since 2024</span>
            <h4 className="text-xl font-bold text-white mt-1">Frontend Developer</h4>
            <p className="text-purple-300 text-sm mb-1 font-medium">Baza Trainee Ukraine</p>
            <p className="text-xs text-[#b8a4be] mb-4">{`//`} Project: antiCorruption</p>
          </div>
          <Link
            href="https://anti-corruption.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block group overflow-hidden rounded-xl border border-purple-800/50">
            <Image
              src="/images/anti-corruption.webp"
              alt="Anti-corruption project"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              width={400}
              height={225}
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    ),
  },
];

const SkillSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-[#e0cbe1] py-8 sm:py-16" id="skill">
      <div className="flex flex-row justify-center gap-4 sm:gap-8 font-title mb-8">
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
      <div className="flex justify-center font-title flex-col">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}>
          {TAB_DATA.find((t) => t.id === tab).content}
        </motion.div>
      </div>
    </section>
  );
};


export default SkillSection;
