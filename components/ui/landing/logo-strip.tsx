'use client';

import Marquee from 'react-fast-marquee';

// Company logos as SVG components for better performance and customization
const LogoComponents = {
  Google: () => (
    <svg className="h-6 sm:h-7 md:h-8 w-auto" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  ),
  Apple: () => (
    <svg className="h-6 sm:h-7 md:h-8 w-auto" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  ),
  Microsoft: () => (
    <svg className="h-6 sm:h-7 md:h-8 w-auto" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
    </svg>
  ),
  Amazon: () => (
    <div className="flex flex-col items-center">
      <div className="font-normal text-lg sm:text-xl md:text-xl tracking-wide -mb-1" style={{color: 'currentColor'}}>amazon</div>
      <svg className="w-16 sm:w-18 md:w-20 h-2 sm:h-2.5 md:h-3" viewBox="-5 0 100 20" fill="none">
        <path d="M-3 12c22 6 50 6 75 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M70 10l5 2-5 2z" fill="currentColor"/>
      </svg>
    </div>
  ),
  Meta: () => (
    <svg className="h-6 sm:h-7 md:h-8 w-auto" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  Netflix: () => (
    <svg className="h-6 sm:h-7 md:h-8 w-auto" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.71.002-22.95zM5.398 1.05V24c2.873-.12 4.557-.298 4.857-.4V9.384z"/>
    </svg>
  ),
  Tesla: () => (
    <svg className="h-6 sm:h-7 md:h-8 w-auto" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 5.362L2.636 8.108v8.484h18.728V8.108L12 5.362zM5.09 14.72V9.816l6.91-1.955 6.91 1.955V14.72H5.09z"/>
    </svg>
  ),
  Nvidia: () => (
    <div className="font-bold text-lg sm:text-xl md:text-xl tracking-wide" style={{color: 'currentColor'}}>NVIDIA</div>
  ),
  Adobe: () => (
    <div className="font-bold text-lg sm:text-xl md:text-xl tracking-wider" style={{color: 'currentColor'}}>Adobe</div>
  )
};

const companies = [
  { name: 'Google', component: LogoComponents.Google },
  { name: 'Apple', component: LogoComponents.Apple },
  { name: 'Microsoft', component: LogoComponents.Microsoft },
  { name: 'Amazon', component: LogoComponents.Amazon },
  { name: 'Meta', component: LogoComponents.Meta },
  { name: 'Netflix', component: LogoComponents.Netflix },
  { name: 'Tesla', component: LogoComponents.Tesla },
  { name: 'NVIDIA', component: LogoComponents.Nvidia },
  { name: 'Adobe', component: LogoComponents.Adobe },
];

const LogoStrip = () => {
  return (
    <section className="relative py-6 sm:py-8 md:py-10 bg-black overflow-hidden border-t border-white/5">
      {/* Section header */}
      <div className="text-center mb-3 sm:mb-4 md:mb-5 px-4">
        <p className="text-white/50 text-xs sm:text-sm font-medium tracking-wider uppercase mb-2">Prepares for interviews at</p>
      </div>

      {/* Logo marquee with fade gradients */}
      <div className="relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 sm:w-32 md:w-40 bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none" />
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 z-10 h-full w-20 sm:w-32 md:w-40 bg-gradient-to-l from-black via-black/90 to-transparent pointer-events-none" />
        
        {/* Marquee */}
        <Marquee
          speed={25}
          gradient={false}
          pauseOnHover={true}
          className="py-4 sm:py-5 md:py-6"
        >
          {companies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex items-center justify-center mx-8 sm:mx-12 md:mx-16 text-white/40 hover:text-white/80 transition-all duration-500 filter grayscale hover:grayscale-0 cursor-pointer"
            >
              <company.component />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Bottom section text */}
      <div className="text-center mt-4 sm:mt-6 md:mt-8 mb-0 px-4">
        <p className="text-white/30 text-xs sm:text-sm">
          Join thousands of engineers
        </p>
      </div>
    </section>
  );
};

export default LogoStrip; 