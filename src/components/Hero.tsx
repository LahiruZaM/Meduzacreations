
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-meduza-dark"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full grid grid-cols-12 grid-rows-12">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white/10"></div>
          ))}
        </div>
      </div>
      
      {/* Green accent gradients */}
      <div className="absolute top-[20%] left-[10%] w-[200px] h-[200px] bg-meduza-green/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[15%] w-[300px] h-[300px] bg-meduza-green/15 rounded-full blur-[120px] animate-pulse"></div>

      <div className="container mx-auto px-4 z-10 text-center py-24 md:py-0">
        <div className={`space-y-6 ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tighter">
            <span className="block">Design. Create.</span>
            <span className="text-meduza-green text-glow">Inspire.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Premium UI/UX & graphic design services that transform your brand's digital presence
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <a
              href="#services"
              className="px-8 py-3 bg-meduza-green text-meduza-dark font-medium rounded hover:bg-meduza-green-dark transition-colors duration-300 transform hover:scale-105"
            >
              Our Services
            </a>
            
            <a
              href="#portfolio"
              className="px-8 py-3 bg-transparent border border-meduza-green text-meduza-green font-medium rounded hover:bg-meduza-green/10 transition-all duration-300 transform hover:scale-105"
            >
              View Portfolio
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <a href="#services" className="flex flex-col items-center text-meduza-green">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
