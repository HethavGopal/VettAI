'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "VettAI's feedback is incredibly precise. It helped me identify and fix gaps in my system design explanations that I didn't even notice.",
    author: "Michael Chen",
    role: "Senior Software Engineer",
    company: "Microsoft",
    initials: "MC"
  },
  {
    quote: "The behavioral interview practice was a game-changer. The AI caught subtle improvements in my STAR responses that made a huge difference.",
    author: "Jessica Patel",
    role: "Product Manager",
    company: "Meta",
    initials: "JP"
  },
  {
    quote: "I practiced daily with VettAI for two weeks before my Amazon interview. The structured feedback helped me level up my coding interview skills fast.",
    author: "David Kim",
    role: "Software Developer",
    company: "Amazon",
    initials: "DK"
  },
  {
    quote: "The platform's ability to simulate real interview pressure while providing constructive feedback is unmatched. Worth every penny.",
    author: "Rachel Thompson",
    role: "Frontend Engineer",
    company: "Stripe",
    initials: "RT"
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4"
          >
            Trusted by Top Tech Professionals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-white/70 px-4"
          >
            See how VettAI has helped engineers land their dream roles
          </motion.p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/10 transition"
            >
              <p className="text-sm sm:text-base md:text-lg text-white/90 italic mb-6 sm:mb-8">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-200/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-200 font-semibold text-sm sm:text-base">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">{testimonial.author}</div>
                  <div className="text-white/50 text-xs sm:text-sm">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof numbers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center"
        >
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">10,000+</div>
            <div className="text-white/50 text-xs sm:text-sm">Active Users</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">95%</div>
            <div className="text-white/50 text-xs sm:text-sm">Success Rate</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">50+</div>
            <div className="text-white/50 text-xs sm:text-sm">Company Questions</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">4.9/5</div>
            <div className="text-white/50 text-xs sm:text-sm">User Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 