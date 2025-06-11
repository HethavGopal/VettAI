"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  SiJavascript,
  SiPython,
  SiGithub,
  SiDocker,
  SiNodedotjs,
  SiTypescript,
  SiReact,
  SiFirebase,
  SiLinux,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiGooglecloud,
  SiKubernetes,
  SiRedis,
  SiGraphql,
  SiVercel,
  SiFigma,
  SiGit,
  SiAmazon,
  SiGoogle,
  SiApple,
  SiNetflix,
  SiTesla,
  SiMeta,
  SiNvidia,
  SiAdobe,
  SiSpotify,
  SiUber,
  SiAirbnb,
  SiSlack,
  SiDiscord,
  SiNotion,
  SiStripe,
  SiShopify,
} from "react-icons/si";
import { IconType } from "react-icons";
import { useState } from "react";

interface TechIcon {
  icon: IconType;
  name: string;
  color: string;
}

const techIcons: TechIcon[] = [
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiGithub, name: "GitHub", color: "#181717" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiRedis, name: "Redis", color: "#DC382D" },
  { icon: SiGooglecloud, name: "Google Cloud", color: "#4285F4" },
  { icon: SiLinux, name: "Linux", color: "#FCC624" },
  { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
  { icon: SiVercel, name: "Vercel", color: "#000000" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { icon: SiAmazon, name: "AWS", color: "#FF9900" },
  { icon: SiGoogle, name: "Google", color: "#4285F4" },
  { icon: SiApple, name: "Apple", color: "#000000" },
  { icon: SiNetflix, name: "Netflix", color: "#E50914" },
  { icon: SiTesla, name: "Tesla", color: "#CC0000" },
  { icon: SiMeta, name: "Meta", color: "#1877F2" },
  { icon: SiNvidia, name: "NVIDIA", color: "#76B900" },
  { icon: SiAdobe, name: "Adobe", color: "#FF0000" },
  { icon: SiSpotify, name: "Spotify", color: "#1DB954" },
  { icon: SiUber, name: "Uber", color: "#000000" },
  { icon: SiAirbnb, name: "Airbnb", color: "#FF5A5F" },
  { icon: SiSlack, name: "Slack", color: "#4A154B" },
  { icon: SiDiscord, name: "Discord", color: "#5865F2" },
  { icon: SiNotion, name: "Notion", color: "#000000" },
  { icon: SiStripe, name: "Stripe", color: "#008CDD" },
  { icon: SiShopify, name: "Shopify", color: "#7AB55C" },
];

interface ThreeDTechMarqueeProps {
  className?: string;
  speed?: number;
  iconSize?: number;
  icons?: TechIcon[];
}

export const ThreeDTechMarquee = ({
  className,
  speed = 1,
  iconSize = 64,
  icons = techIcons,
}: ThreeDTechMarqueeProps) => {
  // Split the icons array into 2 equal parts instead of 4
  const chunkSize = Math.ceil(icons.length / 2);
  const chunks = Array.from({ length: 2 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return icons.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        "mx-auto block h-[300px] overflow-hidden rounded-2xl max-sm:h-[250px]",
        className,
      )}
    >
      <div className="flex size-full items-center justify-center">
        <div className="size-[600px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
          <div
            className="relative top-48 right-[50%] flex justify-center size-full origin-top-left transform-3d"
            style={{
              transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
              gap: "2rem"
            }}
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: (colIndex % 2 === 0 ? 10 : 15) / speed,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                key={colIndex + "tech-marquee"}
                className="flex flex-col items-start gap-6"
              >
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((techIcon, iconIndex) => (
                  <TechIconCard
                    key={iconIndex + techIcon.name}
                    techIcon={techIcon}
                    iconSize={iconSize}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface TechIconCardProps {
  techIcon: TechIcon;
  iconSize: number;
}

const TechIconCard = ({ techIcon, iconSize }: TechIconCardProps) => {
  const [hasError, setHasError] = useState(false);
  const IconComponent = techIcon.icon;

  return (
    <div className="relative">
      <GridLineHorizontal className="-top-4" offset="20px" />
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.05,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="group relative flex aspect-square w-32 flex-col items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl hover:bg-white/20 dark:bg-black/20 dark:border-white/10 dark:hover:bg-black/30"
      >
        {/* Icon */}
        <div className="flex items-center justify-center mb-2">
          {!hasError ? (
            <IconComponent
              size={iconSize}
              style={{ color: techIcon.color }}
              className="transition-all duration-300 group-hover:scale-110 dark:brightness-110"
              onError={() => setHasError(true)}
            />
          ) : (
            <div
              className="flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700"
              style={{ width: iconSize, height: iconSize }}
            >
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                {techIcon.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Tech name */}
        <span className="text-xs font-medium text-gray-800 dark:text-gray-200 text-center px-2 opacity-80 group-hover:opacity-100">
          {techIcon.name}
        </span>

        {/* Hover glow effect */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
          style={{ backgroundColor: techIcon.color }}
        />
      </motion.div>
    </div>
  );
};

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px",
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px",
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
}; 