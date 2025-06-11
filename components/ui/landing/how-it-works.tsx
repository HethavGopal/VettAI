'use client';

import { motion } from 'framer-motion';
import { UserPlus, Settings, Play, Award, TrendingUp } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { AnimatedBeam } from '@/components/magicui/animated-beam';

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up',
    desc: 'Create your free account in seconds.',
    position: { top: '3%', left: '20%' }
  },
  {
    icon: Settings,
    title: 'Choose Interview Type',
    desc: 'Select coding, system design, or behavioral.',
    position: { top: '28%', left: '80%' }
  },
  {
    icon: Play,
    title: 'Start Mock Interview',
    desc: 'Practice with AI.',
    position: { top: '53%', left: '20%' }
  },
  {
    icon: Award,
    title: 'Get Instant Feedback',
    desc: 'Receive actionable insights and scores.',
    position: { top: '78%', left: '80%' }
  },
  {
    icon: TrendingUp,
    title: 'Track Progress',
    desc: 'See your improvement over time.',
    position: { top: '97%', left: '20%' }
  },
];

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [beamsReady, setBeamsReady] = useState(false);
  
  // Delay beam rendering to ensure step refs are set
  useEffect(() => {
    const timer = setTimeout(() => {
      setBeamsReady(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          How It Works
        </motion.h2>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-white/70 text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get started in minutes and master interviews with our AI-powered platform
        </motion.p>

        {/* Hover Hint */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 text-white/50 text-sm">
            <div className="w-2 h-2 bg-primary-200 rounded-full animate-pulse"></div>
            Hover over the steps to learn more
            <div className="w-2 h-2 bg-primary-200 rounded-full animate-pulse"></div>
          </div>
        </motion.div>

        {/* Desktop Diagonal Layout */}
        <div className="hidden md:block relative h-[900px] lg:h-[1200px] xl:h-[1500px]" ref={containerRef}>
          {steps.map((step, i) => {
            const IconComponent = step.icon;
            
            return (
              <motion.div
                  key={step.title}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  className="absolute group cursor-pointer z-20"
                style={{
                  top: step.position.top,
                  left: step.position.left,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.2, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.1 }}
              >
                {/* Main Circle */}
                <div className="relative">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-r from-primary-200/20 to-primary-100/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
                  
                  {/* Main circle */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-primary-200 to-primary-100 flex items-center justify-center shadow-2xl group-hover:shadow-primary-200/50 transition-all duration-300">
                    <IconComponent size={24} className="md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-white text-black rounded-full flex items-center justify-center text-xs md:text-sm font-bold shadow-lg border-2 border-primary-200">
                    {i + 1}
                  </div>
                  
                  {/* Pulse animation */}
                  <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-primary-200/30 animate-ping group-hover:animate-none" />
                  
                  {/* Hover indicator */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-primary-200 rounded-full animate-bounce"></div>
                  </div>
                </div>
                
                {/* Info Card */}
                <div className="absolute top-20 md:top-24 lg:top-28 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg p-2 md:p-3 min-w-[160px] md:min-w-[180px] lg:min-w-[200px] max-w-[220px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-20">
                  <h3 className="font-bold text-white mb-1.5 text-center text-xs md:text-sm">{step.title}</h3>
                  <p className="text-white/70 text-xs md:text-xs text-center leading-snug">{step.desc}</p>
                  
                  {/* Arrow pointing to circle */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/20"></div>
                </div>
              </motion.div>
            );
          })}

          {/* Animated Beams - Behind icons */}
          {beamsReady && (
            <div className="absolute inset-0 z-10 pointer-events-none">
              {steps.slice(0, -1).map((_, i) => {
                // Only render beams if both refs exist
                if (!stepRefs.current[i] || !stepRefs.current[i + 1]) {
                  return null;
                }
                
                // Determine reverse based on the spatial relationship
                // For left-to-right movement, use reverse=false
                // For right-to-left movement, use reverse=true
                const currentStep = steps[i];
                const nextStep = steps[i + 1];
                const isLeftToRight = parseFloat(currentStep.position.left) < parseFloat(nextStep.position.left);
                
                return (
                  <AnimatedBeam
                    key={`beam-${i}`}
                    containerRef={containerRef}
                    fromRef={{ current: stepRefs.current[i] }}
                    toRef={{ current: stepRefs.current[i + 1] }}
                    curvature={80}
                    duration={4}
                    delay={i * 1}
                    reverse={!isLeftToRight}
                    className="opacity-70"
                    pathColor="#cac5fe"
                    pathWidth={3}
                    gradientStartColor="#cac5fe"
                    gradientStopColor="#b8b3ff"
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* Mobile & Small Tablet Layout */}
        <div className="md:hidden space-y-6 sm:space-y-8">
          {/* Mobile Hover Hint */}
          <div className="text-center mb-6 sm:hidden">
            <div className="inline-flex items-center gap-2 text-white/50 text-xs">
              <div className="w-1.5 h-1.5 bg-primary-200 rounded-full animate-pulse"></div>
              Tap to expand details
              <div className="w-1.5 h-1.5 bg-primary-200 rounded-full animate-pulse"></div>
            </div>
          </div>

          {steps.map((step, i) => {
            const IconComponent = step.icon;
            
            return (
        <motion.div
          key={step.title}
                className="flex items-start gap-4 sm:gap-6 relative group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                {/* Icon Container */}
                <div className="relative flex-shrink-0">
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-primary-200/20 to-primary-100/20 blur-lg group-hover:blur-xl transition-all duration-500" />
                  
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary-200 to-primary-100 flex items-center justify-center shadow-xl">
                    <IconComponent size={20} className="sm:w-6 sm:h-6 text-white" />
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold shadow-lg border border-primary-200">
                    {i + 1}
                  </div>
                  
                  {/* Connecting line */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-14 sm:top-16 left-1/2 transform -translate-x-1/2 w-px h-6 sm:h-8 bg-gradient-to-b from-primary-200/50 to-transparent" />
                  )}
                </div>
                
                <div className="space-y-2 flex-1 pt-1">
                  <h3 className="font-bold text-base sm:text-lg text-white">{step.title}</h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
          
          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-200/20 rounded-full"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16 sm:mt-20 md:mt-32 lg:mt-40"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-white/60 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 px-4">
            Join thousands of engineers who've mastered their interviews
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-white/50 px-4">
            <span className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-200 rounded-full animate-pulse"></div>
              Free to start
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-200 rounded-full animate-pulse"></div>
              Instant feedback
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-200 rounded-full animate-pulse"></div>
              Track improvement
            </span>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-12 sm:mt-16 md:mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-primary-200/10 to-primary-100/10 border border-primary-200/20 rounded-2xl p-6 sm:p-8 md:p-10 max-w-2xl mx-auto backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
              Ready to Master Your Interviews?
            </h3>
            <p className="text-white/70 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
              Start practicing with AI-powered mock interviews and get instant feedback to improve your skills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-200 to-primary-100 text-white font-semibold rounded-xl hover:from-primary-100 hover:to-primary-200 transition-all duration-300 shadow-lg hover:shadow-primary-200/30 transform hover:scale-105">
                Start Free Interview
              </button>
              
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <span>or</span>
              </div>
              
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Create Account
              </button>
            </div>
            
            <p className="text-white/40 text-xs sm:text-sm mt-4 sm:mt-6">
               Get started in under 30 seconds
            </p>
          </div>
        </motion.div>
    </div>
  </section>
);
};

export default HowItWorks; 