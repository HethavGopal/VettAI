"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  SiJavascript,
  SiPython,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiGithub,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiNuxtdotjs,
  SiExpress,
  SiNestjs,
  SiMysql,
  SiSqlite,
  SiElasticsearch,
  SiAmazon,
  SiGooglecloud,
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiWebpack,
  SiVite,
  SiJest,
  SiCypress,
} from "react-icons/si";
import { IconType } from "react-icons";

interface TechIcon {
  icon: IconType;
  name: string;
  color: string;
  id: string;
}

const practiceTechnologies: TechIcon[] = [
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E", id: "js" },
  { icon: SiPython, name: "Python", color: "#3776AB", id: "python" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6", id: "ts" },
  { icon: SiReact, name: "React", color: "#61DAFB", id: "react" },
  { icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D", id: "vue" },
  { icon: SiAngular, name: "Angular", color: "#DD0031", id: "angular" },
  { icon: SiSvelte, name: "Svelte", color: "#FF3E00", id: "svelte" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933", id: "node" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000", id: "next" },
  { icon: SiNuxtdotjs, name: "Nuxt.js", color: "#00DC82", id: "nuxt" },
  { icon: SiExpress, name: "Express", color: "#000000", id: "express" },
  { icon: SiNestjs, name: "NestJS", color: "#E0234E", id: "nestjs" },
  { icon: SiGit, name: "Git", color: "#F05032", id: "git" },
  { icon: SiGithub, name: "GitHub", color: "#181717", id: "github" },
  { icon: SiDocker, name: "Docker", color: "#2496ED", id: "docker" },
  { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5", id: "k8s" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1", id: "postgres" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248", id: "mongo" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1", id: "mysql" },
  { icon: SiSqlite, name: "SQLite", color: "#003B57", id: "sqlite" },
  { icon: SiRedis, name: "Redis", color: "#DC382D", id: "redis" },
  { icon: SiElasticsearch, name: "Elasticsearch", color: "#005571", id: "elasticsearch" },
  { icon: SiGraphql, name: "GraphQL", color: "#E10098", id: "graphql" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4", id: "tailwind" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28", id: "firebase" },
  { icon: SiAmazon, name: "AWS", color: "#FF9900", id: "aws" },
  { icon: SiGooglecloud, name: "Google Cloud", color: "#4285F4", id: "gcp" },
  { icon: SiHeroku, name: "Heroku", color: "#430098", id: "heroku" },
  { icon: SiVercel, name: "Vercel", color: "#000000", id: "vercel" },
  { icon: SiNetlify, name: "Netlify", color: "#00C7B7", id: "netlify" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E", id: "figma" },
  { icon: SiWebpack, name: "Webpack", color: "#8DD6F9", id: "webpack" },
  { icon: SiVite, name: "Vite", color: "#646CFF", id: "vite" },
  { icon: SiJest, name: "Jest", color: "#C21325", id: "jest" },
  { icon: SiCypress, name: "Cypress", color: "#17202C", id: "cypress" },
];

const PracticeTechnologies = () => {
  const [displayedIcons, setDisplayedIcons] = useState<TechIcon[]>([]);
  const gridSize = 6; // 2x3 grid (2 rows, 3 columns)

  const getRandomIcons = (count: number) => {
    const shuffled = [...practiceTechnologies].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    // Initialize with random icons (no duplicates)
    const initialIcons = getRandomIcons(gridSize);
    setDisplayedIcons(initialIcons);

    // Set up single interval to change all icons at the same time
    const interval = setInterval(() => {
      setDisplayedIcons(getRandomIcons(gridSize));
    }, 5000); // Change all icons every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Practice with{" "}
            <span className="bg-gradient-to-r from-primary-200 to-primary-100 text-transparent bg-clip-text">
              Real Technologies
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Master the technologies that matter. Our AI interviewer adapts to test your knowledge 
            across the most in-demand programming languages, frameworks, and tools.
          </p>
        </motion.div>

        {/* Grid of Tech Icons - 2 rows x 3 columns */}
        <div className="grid grid-cols-3 grid-rows-2 gap-8 max-w-3xl mx-auto mb-16">
          {displayedIcons.map((tech, index) => {
            const IconComponent = tech.icon;
            
            return (
              <div key={index} className="flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tech.id}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0, rotate: 180 }}
                    transition={{ 
                      duration: 0.4,
                      ease: "backOut"
                    }}
                  >
                    <div className="group relative">
                      {/* Icon Container */}
                      <div className="relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300">
                        <IconComponent
                          size={40}
                          style={{ color: tech.color }}
                          className="transition-all duration-300 group-hover:scale-110"
                        />
                        
                        {/* Glow effect */}
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                          style={{ backgroundColor: tech.color }}
                        />
                      </div>
                      
                      {/* Tech name */}
                      <div className="mt-3">
                        <span className="text-sm font-medium text-white/60 group-hover:text-white/80 transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-white/60 text-lg mb-6">
            From frontend frameworks to backend databases, practice it all
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/50">
            <span>• Live Coding Sessions</span>
            <span>• System Design Questions</span>
            <span>• Best Practices Review</span>
            <span>• Real-world Scenarios</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeTechnologies; 