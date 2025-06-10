'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BorderBeam } from '@/components/magicui/border-beam';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-200/20 via-black to-black" />
      
      {/* Animated Grid Pattern */}
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.15}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1400px_circle_at_50%_10%,white,transparent)]",
          "inset-0 h-full w-full skew-y-12",
        )}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="relative overflow-hidden rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10 p-8">
          {/* Small badge with shiny text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <div className="group rounded-full border border-white/20 bg-white/5 text-base transition-all ease-in hover:cursor-pointer hover:bg-white/10">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-300 hover:duration-300">
                <span className="text-primary-200 font-medium mr-2">New</span>
                <span className="text-white/70">AI-Powered Mock Interviews</span>
              </AnimatedShinyText>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Master Your Tech Interviews
            <br />
            <span className="bg-gradient-to-r from-primary-200 to-primary-100 text-transparent bg-clip-text">
              With AI Precision
            </span>
          </motion.h1>
          

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/70 mb-12 max-w-3xl mx-auto"
          >
            Practice with our AI interviewer, get real-time feedback, and land your dream tech role. 
            Used by engineers at Google, Meta, and Amazon.
          </motion.p>
        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <BorderBeam
            duration={6}
            size={800}
            className="from-transparent via-primary-200/30 to-transparent"
          />
            <Link href="/get-started">
              <button className="px-8 py-4 text-lg font-semibold rounded-full text-dark-100 bg-primary-200 hover:bg-primary-100 transition shadow-lg shadow-primary-200/20">
                Get Started Free →
              </button>
            </Link>
            <span className="text-white/50 text-sm">No credit card required</span>
          </motion.div>

          {/* Border Beam Effects */}
          
          <BorderBeam
            duration={6}
            delay={3}
            size={800}
            className="from-transparent via-blue-500/30 to-transparent"
          />
        </div>

        {/* Floating Images */}
        <div className="relative w-full max-w-6xl mx-auto mt-16">
          {/* Main dashboard preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="rounded-xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden bg-gradient-to-b from-white/5 to-white/0"
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-gray-900 to-black rounded-lg p-2">
              <div className="w-full h-full bg-black/50 rounded-lg flex items-center justify-center text-white/30">
                Dashboard Preview
              </div>
            </div>
          </motion.div>

          {/* Floating feature preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-72 rounded-lg border border-white/10 shadow-xl shadow-black/50 overflow-hidden"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-black p-2">
              <div className="w-full h-full bg-black/50 rounded-lg flex items-center justify-center text-white/30">
                Feature Preview
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 