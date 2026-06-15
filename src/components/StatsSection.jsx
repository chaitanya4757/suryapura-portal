import { useEffect, useRef, useState } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Set up the Intersection Observer to detect when the section is in the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once it has animated in
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-16 bg-emerald-800 text-white border-y border-emerald-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          {/* Stat Box 1 - No Delay */}
          <div 
            className={`p-6 rounded-xl bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/50 hover:bg-emerald-900/60 hover:border-amber-500/30 group cursor-default transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="text-4xl font-extrabold mb-2 text-amber-400 group-hover:scale-110 group-hover:text-amber-300 group-hover:drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] transition-all duration-500 ease-out">५,०००+</div>
            <div className="text-emerald-100 font-medium group-hover:text-white transition-colors duration-500">सशक्त नागरिक</div>
          </div>

          {/* Stat Box 2 - 150ms Delay */}
          <div 
            className={`p-6 rounded-xl bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/50 hover:bg-emerald-900/60 hover:border-amber-500/30 group cursor-default transition-all duration-700 ease-out transform delay-[150ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="text-4xl font-extrabold mb-2 text-amber-400 group-hover:scale-110 group-hover:text-amber-300 group-hover:drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] transition-all duration-500 ease-out">१००%</div>
            <div className="text-emerald-100 font-medium group-hover:text-white transition-colors duration-500">डिजिटल साक्षरता</div>
          </div>

          {/* Stat Box 3 - 300ms Delay */}
          <div 
            className={`p-6 rounded-xl bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/50 hover:bg-emerald-900/60 hover:border-amber-500/30 group cursor-default transition-all duration-700 ease-out transform delay-[300ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="text-4xl font-extrabold mb-2 text-amber-400 group-hover:scale-110 group-hover:text-amber-300 group-hover:drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] transition-all duration-500 ease-out">५०+</div>
            <div className="text-emerald-100 font-medium group-hover:text-white transition-colors duration-500">पक्की सड़कें</div>
          </div>

          {/* Stat Box 4 - 450ms Delay */}
          <div 
            className={`p-6 rounded-xl bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/50 hover:bg-emerald-900/60 hover:border-amber-500/30 group cursor-default transition-all duration-700 ease-out transform delay-[450ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="text-4xl font-extrabold mb-2 text-amber-400 group-hover:scale-110 group-hover:text-amber-300 group-hover:drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] transition-all duration-500 ease-out">२४/७</div>
            <div className="text-emerald-100 font-medium group-hover:text-white transition-colors duration-500">पंचायत सहायता</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;