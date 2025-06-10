'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const languages = [
  { name: 'React', src: '/react.svg' },
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C++', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Tailwind', src: '/tailwind.svg' },
];

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

const LanguagesCompanies = () => (
  <section className="py-20 px-4 max-w-6xl mx-auto">
    <h2 className="heading-lg text-center mb-10">Practice for Top Companies & Languages</h2>
    <div className="glass-card p-8 mb-12">
      <div className="flex flex-wrap justify-center gap-8">
        {languages.map(lang => (
          <motion.div key={lang.name} className="flex flex-col items-center" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}>
            <Image src={lang.src} alt={lang.name} width={48} height={48} className="mb-2" />
            <span className="text-light-100 text-xs">{lang.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
    <div className="glass-card p-8">
      <div className="flex flex-wrap justify-center gap-10 items-center">
        {companies.map(company => (
          <motion.div key={company.name} className="flex flex-col items-center" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}>
            <Image src={company.src} alt={company.name} width={64} height={64} className="mb-2" />
            <span className="text-light-100 text-xs">{company.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LanguagesCompanies; 