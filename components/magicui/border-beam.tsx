'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BorderBeamProps {
  className?: string;
  duration?: number;
  size?: number;
  delay?: number;
}

export const BorderBeam = ({
  className,
  duration = 2,
  size = 150,
  delay = 0,
}: BorderBeamProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: 0 }}
      animate={{ opacity: [0, 1, 0], rotate: 360 }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
      }}
      style={{ width: size, height: size }}
      className={cn(
        "absolute z-0 opacity-0 bg-gradient-to-r blur-xl pointer-events-none",
        className
      )}
    />
  );
}; 