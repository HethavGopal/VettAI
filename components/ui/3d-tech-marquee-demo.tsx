import { ThreeDTechMarquee } from "./3d-tech-marquee";

export const ThreeDTechMarqueeDemo = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Technologies We Use
        </h2>
        <p className="text-white/70 text-lg">
          Cutting-edge tools and frameworks powering our platform
        </p>
      </div>
      
      {/* Default configuration */}
      <ThreeDTechMarquee />
      
      {/* Custom configuration examples */}
      {/* 
      <ThreeDTechMarquee 
        speed={1.5} 
        iconSize={48} 
        className="mt-8"
      />
      */}
    </div>
  );
}; 