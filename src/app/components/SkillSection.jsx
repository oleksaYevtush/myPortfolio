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
      <div className="grid grid-cols-2 sm:gap-x-4 md:gap-x-6 gap-x-8 md:justify-items-center sm:justify-items-center">
        <ul className="text-sm list-disc lg:pl-2">
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
        <ul className="pl-2 text-sm list-disc">
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
      <ul className="grid grid-cols-2 pl-2 mb-5 list-disc gap-x-11">
        <li>Frontend Developer
          <p class="mb-1 mt-1 from-primary-700">_Baza Trainee Ukraine</p>
          <p>since 2023</p>
          <p class="mb-6"><span>&apos;//</span>For Kyiv hospital</p>
          <Link href="https://for-kyiv-hospital.vercel.app">
            <Image
                src="/images/hospital_site.webp"
                alt="hospital"
                className="" 
                width={400}
                height={225} 
                loading="lazy" />
          </Link>
        </li>
        <li>Frontend Developer
          <p class="mb-1 mt-1 from-primary-700">_Baza Trainee Ukraine</p>
          <p>since 2024</p>
          <p class="mb-6"><span>&apos;//</span>antiCorruption</p>
          <Link href="https://anti-corruption.vercel.app">
            <Image
                src="/images/anti-corruption.webp"
                alt="hospital"
                className="" 
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
    <section className="text-[#e0cbe1]" id="skill">
      <div className="flex flex-row justify-center mt-8 font-title">
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
      <div className="flex justify-center mt-8 sm:font-14 font-title text-45 flex-column">
        <motion.div
          key={tab}  
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.75 }}  >
          {TAB_DATA.find((t) => t.id === tab).content}
        </motion.div>
      </div>
    </section>
  );
};


export default SkillSection;
