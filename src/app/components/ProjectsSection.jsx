"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "🕯️Aroma Haven",
    description: "React | Tailwind CSS | Firebase | React-Hooks | framer-motion | Chatbot | google-authentication | express",
    image: "/images/projects/00.webp",
    tag: ["All", "Tailwind", "React.js"],
    gitUrl: "https://github.com/oleksaYevtush/AromaHaven",
    previewUrl: "https://aroma-haven.vercel.app/",
  },
  {
    id: 2,
    title: "🧘🏼‍♀️Health Mantra",
    description: "TypeScript | Tailwind CSS | react-spring | React-Hooks | framer-motion | Lenis",
    image: "/images/projects/01.webp",
    tag: ["All", "Tailwind", "React.js"],
    gitUrl: "https://github.com/oleksaYevtush/healthMantra",
    previewUrl: "https://health-mantra.vercel.app/",
  },
  {
    id: 3,
    title: "☕️Coffee World",
    description: "i18next | Formik | react-spring | React-Hooks | framer-motion | yup",
    image: "/images/projects/1.webp",
    tag: ["All", "Next.js"],
    gitUrl: "https://github.com/oleksaYevtush/Coffee_World",
    previewUrl: "https://coffee-world-olexaevtush.vercel.app/",
  },
  {
    id: 4,
    title: "🍝Dish Delight",
    description: "ReactHooks | API | SCSS | Bootstrap | adaptive",
    image: "/images/projects/2.webp",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/olexaevtush/DishDelight",
    previewUrl: "https://dishdelight.vercel.app",
  },
  {
    id: 5,
    title: "📖Booklib",
    description: "React-Hooks | API | SCSS",
    image: "/images/projects/3.webp",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/olexaevtush/Booklib",
    previewUrl: "https://booklib-react.vercel.app",
  },
  {
    id: 6,
    title: "🥐Fresh Bakery",
    description: "Bootstrap | JS | adaptive",
    image: "/images/projects/4.webp",
    tag: ["All", "CSS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "🧖🏼‍♀️Skincare",
    description: "Bootstrap | JS | animation",
    image: "/images/projects/5.webp",
    tag: ["All", "CSS"],
    gitUrl: "https://github.com/olexaevtush/Skincare",
    previewUrl: "https://olexaevtush.github.io/Skincare/",
  },
  {
    id: 8,
    title: "📲Namelist",
    description: "JS | React-Hooks | fetch",
    image: "/images/projects/6.webp",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/olexaevtush/react-namelist",
    previewUrl: "https://react-namelist-olexaevtush.vercel.app",
  },
  {
    id: 9,
    title: "🌃FavoriteTour",
    description: "JS | adaptive | animation",
    image: "/images/projects/7.webp",
    tag: ["All", "CSS"],
    gitUrl: "https://github.com/olexaevtush/FavoriteTour",
    previewUrl: "https://olexaevtush.github.io/FavoriteTour/",
  },
  {
    id: 10,
    title: "👩🏻‍💻My Portfolio",
    description: "Next.js | Tailwind CSS | framer-motion | react-scroll",
    image: "/images/projects/8.webp",
    tag: ["All","Next.js", "Tailwind"],
    gitUrl: "https://github.com/oleksaYevtush/myPortfolio",
    previewUrl: "https://portfolio-oleksa-yevtush.vercel.app/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-8 sm:py-16">
      <h2 className="mb-6 sm:mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white font-title">
        My Projects
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-2 py-4 sm:py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next.js"
          isSelected={tag === "Next.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React.js"
          isSelected={tag === "React.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="CSS"
          isSelected={tag === "CSS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Tailwind"
          isSelected={tag === "Tailwind"}
        />
      </div>
      <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.35, delay: (index % 6) * 0.08 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
