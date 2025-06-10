'use client';

import { motion } from 'framer-motion';
import { Code2, UserCheck, MessageCircle, TrendingUp, ClipboardList } from 'lucide-react';

const steps = [
  {
    icon: Code2,
    title: 'Sign Up',
    desc: 'Create your free account in seconds.'
  },
  {
    icon: ClipboardList,
    title: 'Choose Interview Type',
    desc: 'Select coding, system design, or behavioral.'
  },
  {
    icon: MessageCircle,
    title: 'Start Mock Interview',
    desc: 'Practice with AI or real users.'
  },
  {
    icon: UserCheck,
    title: 'Get Instant Feedback',
    desc: 'Receive actionable insights and scores.'
  },
  {
    icon: TrendingUp,
    title: 'Track Progress',
    desc: 'See your improvement over time.'
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 px-4 max-w-6xl mx-auto">
    <h2 className="heading-lg text-center mb-12">How It Works</h2>
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 relative">
      {steps.map((step, i) => (
        <motion.div
          key={step.title}
          className="flex flex-col items-center text-center flex-1 min-w-[160px] relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <div className="bg-primary-200 text-dark-100 rounded-full p-4 mb-4 shadow-lg">
            <step.icon size={32} />
          </div>
          <div className="font-bold text-lg mb-2 text-white">{step.title}</div>
          <div className="text-light-100 text-sm">{step.desc}</div>
        </motion.div>
      ))}
      {/* Stepper line */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200/30 via-primary-100/60 to-primary-200/30 z-0" style={{transform: 'translateY(-50%)'}} />
    </div>
  </section>
);

export default HowItWorks; 