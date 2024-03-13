"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "🧘🏼‍♀️Health Mantra",
    description: "TypeScript | Tailwind CSS | react-spring | React-Hooks | framer-motion | Lenis",
    image: "/images/projects/01.webp",
    tag: ["All", "Tailwind", "React.js"],
    gitUrl: "https://github.com/oleksaYevtush/healthMantra",
    previewUrl: "https://health-mantra.vercel.app/",
  },
  {
    id: 2,
    title: "☕️Coffee World",
    description: "i18next | Formik | react-spring | React-Hooks | framer-motion | yup",
    image: "/images/projects/1.png",
    tag: ["All", "Next.js"],
    gitUrl: "https://github.com/oleksaYevtush/Coffee_World",
    previewUrl: "https://coffee-world-olexaevtush.vercel.app/",
  },
  {
    id: 3,
    title: "🍝Dish Delight",
    description: "ReactHooks | API | SCSS | Bootstrap | adaptive",
    image: "/images/projects/2.png",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/olexaevtush/DishDelight",
    previewUrl: "https://dishdelight.vercel.app",
  },
  {
    id: 4,
    title: "📖Booklib",
    description: "React-Hooks | API | SCSS",
    image: "/images/projects/3.png",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/olexaevtush/Booklib",
    previewUrl: "https://booklib-react.vercel.app",
  },
  {
    id: 5,
    title: "🥐Fresh Bakery",
    description: "Bootstrap | JS | adaptive",
    image: "/images/projects/4.png",
    tag: ["All", "CSS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "🧖🏼‍♀️Skincare",
    description: "Bootstrap | JS | animation",
    image: "/images/projects/5.png",
    tag: ["All", "CSS"],
    gitUrl: "https://github.com/olexaevtush/Skincare",
    previewUrl: "https://olexaevtush.github.io/Skincare/",
  },
  {
    id: 7,
    title: "📲Namelist",
    description: "JS | React-Hooks | fetch",
    image: "/images/projects/6.png",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/olexaevtush/react-namelist",
    previewUrl: "https://react-namelist-olexaevtush.vercel.app",
  },
  {
    id: 8,
    title: "🌃FavoriteTour",
    description: "JS | adaptive | animation",
    image: "/images/projects/7.png",
    tag: ["All", "CSS"],
    gitUrl: "https://github.com/olexaevtush/FavoriteTour",
    previewUrl: "https://olexaevtush.github.io/FavoriteTour/",
  },
  {
    id: 9,
    title: "👩🏻‍💻My Portfolio",
    description: "Next.js | Tailwind CSS | framer-motion | react-scroll",
    image: "/images/projects/8.png",
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
    <section id="projects">
      <h2 className="font-title mt-12 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-2 py-6 text-white md:flex">
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
      <ul ref={ref} className="grid lg:gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
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
