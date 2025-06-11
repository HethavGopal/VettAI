'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { BorderBeam } from '@/components/magicui/border-beam';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [timer, setTimer] = useState({ minutes: 12, seconds: 45 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const interval = setInterval(() => {
      setTimer(prev => {
        const newSeconds = prev.seconds + 1;
        if (newSeconds >= 60) {
          return { minutes: prev.minutes + 1, seconds: 0 };
        }
        return { ...prev, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (minutes: number, seconds: number) => {
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-200/20 via-black to-black" />
      
      {/* Animated Grid Pattern */}
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.15}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_50%_10%,white,transparent)] sm:[mask-image:radial-gradient(1000px_circle_at_50%_10%,white,transparent)] md:[mask-image:radial-gradient(1400px_circle_at_50%_10%,white,transparent)]",
          "inset-0 h-full w-full skew-y-12",
        )}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10 p-4 sm:p-6 md:p-8">
          {/* Small badge with shiny text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8 inline-block"
          >
            <div className="group rounded-full border border-white/20 bg-white/5 text-sm sm:text-base transition-all ease-in hover:cursor-pointer hover:bg-white/10">
              <AnimatedShinyText className="inline-flex items-center justify-center px-3 py-1 sm:px-4 sm:py-1 transition ease-out hover:text-neutral-300 hover:duration-300">
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight text-center"
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
            className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto text-center px-2"
          >
            Practice with our AI interviewer, get real-time feedback, and land your dream tech role. 
           
          </motion.p>
        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-3 sm:gap-4"
          >
            <BorderBeam
            duration={6}
            size={800}
            className="from-transparent via-primary-200/30 to-transparent"
          />
            <Link href="/sign-up">
              <button className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full text-dark-100 bg-primary-200 hover:bg-primary-100 transition shadow-lg shadow-primary-200/20 w-full sm:w-auto min-w-[200px] cursor-pointer">
                Get Started Free →
              </button>
            </Link>
            <span className="text-white/50 text-xs sm:text-sm">Instant access. No payment upfront.</span>
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
        <div className="relative w-full max-w-6xl mx-auto mt-8 sm:mt-12 md:mt-16 hidden md:block">
          {/* Main dashboard preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="rounded-xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden bg-gradient-to-b from-white/5 to-white/0"
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 space-y-6">
              {/* Interview Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Frontend Developer Interview</h3>
                    <p className="text-white/60 text-sm">Live Session • React, JavaScript</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-red-400 text-sm font-medium">REC</span>
                  </div>
                                     <span className="text-white/40 text-sm font-mono">
                     {isClient ? formatTime(timer.minutes, timer.seconds) : '12:45'}
                   </span>
                </div>
              </div>

              {/* Interview Cards */}
              <div className="flex gap-6 flex-1">
                {/* AI Interviewer Card */}
                <div className="flex-1 bg-white/5 rounded-xl border border-white/10 p-6 space-y-4">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-200 to-primary-100 rounded-full flex items-center justify-center relative">
                      <span className="text-black font-bold text-xl">V</span>
                      {/* Speaking animation */}
                      <div className="absolute -inset-2 border-2 border-primary-200/30 rounded-full animate-ping"></div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-white font-semibold">Vera</h4>
                      <p className="text-green-400 text-sm flex items-center justify-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Speaking
                      </p>
                    </div>
                  </div>
                  
                  {/* Current Question */}
                  <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <p className="text-white/80 text-sm leading-relaxed">
                      "Can you explain the difference between useMemo and useCallback hooks in React?"
                    </p>
                  </div>
                </div>

                {/* User Card */}
                <div className="flex-1 bg-white/5 rounded-xl border border-white/10 p-6 space-y-4">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="text-center">
                      <h4 className="text-white font-semibold">Alex</h4>
                      <p className="text-blue-400 text-sm flex items-center justify-center gap-1">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Listening
                      </p>
                    </div>
                  </div>
                  
                  {/* Performance Indicators */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-xs">Confidence</span>
                      <span className="text-green-400 text-xs">85%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-xs">Response Time</span>
                      <span className="text-yellow-400 text-xs">Good</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/60 text-sm">Interview Progress</span>
                  <span className="text-primary-200 text-sm font-medium">Question 3 of 8</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <div className="bg-gradient-to-r from-primary-200 to-primary-100 h-3 rounded-full transition-all duration-500" style={{width: '37.5%'}}></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating feature preview - Hidden on smaller screens */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute -right-12 xl:-right-16 top-1/2 transform -translate-y-1/2 w-56 xl:w-80 rounded-lg border border-white/10 shadow-xl shadow-black/50 overflow-hidden hidden lg:block"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-black p-3">
              <div className="w-full h-full bg-black/50 rounded-lg p-4 space-y-3">
                {/* AI Interview Feature */}
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary-200 rounded-full mx-auto flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Vera Interviewer</h4>
                </div>
                
                {/* Features List */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white/70 text-xs">Real-time voice interaction</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Dashboard Preview */}
        <div className="relative w-full mx-auto mt-8 sm:mt-12 block md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="rounded-lg border border-white/10 shadow-xl shadow-black/50 overflow-hidden bg-gradient-to-b from-white/5 to-white/0"
          >
            <div className="aspect-[16/10] sm:aspect-[16/9] bg-gradient-to-br from-gray-900 to-black rounded-lg p-3">
              <div className="w-full h-full bg-black/50 rounded-lg p-4 space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-primary-200 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-xs">V</span>
                    </div>
                    <h3 className="text-white font-semibold text-sm">VettAI Dashboard</h3>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs">Online</span>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                    <div className="text-primary-200 text-sm font-bold">12</div>
                    <div className="text-white/60 text-xs">Interviews</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                    <div className="text-green-400 text-sm font-bold">89%</div>
                    <div className="text-white/60 text-xs">Success</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                    <div className="text-blue-400 text-sm font-bold">4.8</div>
                    <div className="text-white/60 text-xs">Score</div>
                  </div>
                </div>
                
                {/* Recent Interview */}
                <div className="bg-white/5 rounded-lg p-2 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-xs font-medium">Recent Interview</span>
                    <span className="text-green-400 text-xs">Completed</span>
                  </div>
                  <div className="text-white/70 text-xs">Frontend Developer - React</div>
                  <div className="w-full bg-white/10 rounded-full h-1.5">
                    <div className="bg-primary-200 h-1.5 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 