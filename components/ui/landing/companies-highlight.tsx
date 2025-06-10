'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const companies = [
  { name: 'Google', src: '/covers/google.svg' },
  { name: 'Amazon', src: '/covers/amazon.svg' },
  { name: 'Meta', src: '/covers/meta-line-logo.svg' },
  { name: 'Bloomberg', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Bloomberg_logo.svg' },
  { name: 'Microsoft', src: '/covers/microsoft.svg' },
  { name: 'Uber', src: '/covers/uber.svg' },
  { name: 'Apple', src: '/covers/apple.svg' },
  { name: 'LinkedIn', src: '/covers/linkedin.svg' },
];

const CompaniesHighlight = () => (
  <section className="py-20 px-4 max-w-5xl mx-auto">
    <div className="glass-card p-10 flex flex-col items-center">
      <h2 className="heading-lg mb-8 text-center">Helps you interview with big companies like…</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full justify-items-center">
        {companies.map((company, i) => (
          <motion.div key={company.name} initial={{opacity:0, scale:0.8}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="flex flex-col items-center">
            <Image src={company.src} alt={company.name} width={64} height={64} className="mb-2" />
            <span className="text-light-100 text-xs">{company.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CompaniesHighlight; 