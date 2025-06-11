'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AuroraText } from "@/components/magicui/aurora-text";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ThreeDTechMarquee } from "@/components/ui/3d-tech-marquee";

const SuperhumanHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Top Section - Headline over large background text */}
      <div className="relative min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Large Background Stats */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <div 
            className="font-bold text-white/5 select-none leading-none"
            style={{ 
              fontSize: 'clamp(4rem, 15vw, 16rem)',
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)'
            }}
          >
            2,000+
          </div>
        </motion.div>

        {/* Main Headline Only */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white">Used by over </span>
            <span className="bg-gradient-to-r from-primary-200 to-primary-100 text-transparent bg-clip-text">
              <NumberTicker 
                value={2000} 
                className="!text-transparent !bg-gradient-to-r !from-primary-200 !to-primary-100 !bg-clip-text"
              />+ aspiring engineers
            </span>
            <br />
            <span className="text-white">to prepare for their interviews.</span>
          </motion.h1>
        </div>
      </div>

      {/* Decorative Line Separator */}
      <div className="relative flex justify-center py-2 sm:py-3 md:py-4">
        <div className="w-12 sm:w-14 md:w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      {/* Bottom Section - Rest of the content */}
      <div className="relative py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-5 md:space-y-6">
          {/* Subheadline */}
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Interview Prep Is <AuroraText colors={["#cac5fe", "#dddfff", "#b8b3ff", "#e8e6ff"]}>Broken</AuroraText>
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed px-4 sm:px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Mock interviews powered by AI help you practice out loud, get feedback instantly, and build confidence.
          </motion.p>

          {/* Problem Statement */}
          <motion.p 
            className="text-xs sm:text-sm md:text-base text-white/60 max-w-2xl mx-auto leading-relaxed px-6 sm:px-8 md:px-9"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Traditional prep is passive. Watching videos, reading solutions — it doesn&apos;t prepare you for the pressure of real interviews. We change that.
          </motion.p>

          {/* CTA Text */}
          <motion.p 
            className="text-xs sm:text-sm text-white/50 pt-1 sm:pt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Start practicing for free.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-3 sm:pt-4 pb-6 sm:pb-8 flex justify-center"
          >
            <Link href="/get-started">
              <ShimmerButton 
                className="shadow-2xl px-3 sm:px-4 py-2 sm:py-2.5"
                background="rgb(100, 88, 200)"
                shimmerColor="#ffffff"
                shimmerSize="0.15em"
                shimmerDuration="2s"
              >
                <span className="text-xs sm:text-sm font-medium text-white">
                  Start Your AI Interview →
                </span>
              </ShimmerButton>
            </Link>
          </motion.div>
        </div>
      </div>

      

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
    </section>
  );
};

export default SuperhumanHero; 