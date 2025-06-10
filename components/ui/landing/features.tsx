'use client';

import { motion } from "framer-motion";
import { Code2, Brain, Users, LineChart, History, MessageSquare } from "lucide-react";

const features = [
  {
    name: "AI-Powered Interviews",
    description: "Practice with our advanced AI that generates questions based on real company interviews from Google, Meta, Amazon, and more.",
    icon: Brain,
  },
  {
    name: "Instant Feedback",
    description: "Get detailed performance insights and improvement suggestions immediately after each interview session.",
    icon: MessageSquare,
  },
  {
    name: "Peer Interviews",
    description: "Connect with other users for peer-to-peer mock interviews with our easy scheduling system.",
    icon: Users,
  },
  {
    name: "Progress Tracking",
    description: "Monitor your improvement over time with detailed analytics and performance metrics.",
    icon: LineChart,
  },
  {
    name: "Technical Challenges",
    description: "Practice coding problems, system design questions, and technical concepts with our comprehensive question bank.",
    icon: Code2,
  },
  {
    name: "Interview History",
    description: "Access your complete interview history and review past performances to identify areas for improvement.",
    icon: History,
  },
];

const Features = () => {
  return (
    <div className="py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2 
            className="text-base font-semibold leading-7 text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Level Up Your Interview Game
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to ace your next interview
          </motion.p>
          <motion.p 
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our platform combines AI technology with real-world interview experience to help you prepare effectively and build confidence.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name} 
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features; 