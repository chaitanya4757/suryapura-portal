import leaderImg from '../assets/leader.png';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[85vh] bg-stone-50 flex items-center justify-center overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 w-full py-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-800 tracking-tight mb-4">
            <span className="block text-amber-600 mb-3 text-sm sm:text-base font-bold tracking-widest uppercase">
              सूर्यपुरा ग्राम विकास पोर्टल
            </span>
            विकास की नई <br className="hidden lg:block"/>
            <span className="text-emerald-700">उड़ान, हमारे साथ।</span>
          </h1>
          
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-stone-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            शिक्षा, सड़क, और सशक्त पंचायत — सूर्यपुरा के हर नागरिक की <strong className="text-stone-800 font-semibold">डिजिटल पहचान</strong> और उज्जवल भविष्य का संकल्प।
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* Updated Primary Button */}
            <button className="px-8 py-3.5 bg-emerald-700 text-white rounded-lg shadow-md hover:bg-emerald-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(4,120,87,0.4)] active:scale-95 transition-all duration-300 font-semibold text-lg border border-emerald-600 focus:outline-none">
              हमारी योजनाएं
            </button>
            {/* Updated Secondary Button */}
            <button className="px-8 py-3.5 bg-white text-emerald-800 rounded-lg shadow-sm hover:bg-stone-50 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] active:scale-95 transition-all duration-300 font-semibold text-lg border border-stone-200 backdrop-blur-sm bg-white/80 focus:outline-none">
              डिजिटल पहचान
            </button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md lg:max-w-none relative">
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/60 bg-stone-200 group">
            <img
              src={leaderImg}
              alt="Visionary Rural Leader of Suryapura"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent">
              <div className="backdrop-blur-md bg-white/10 p-4 rounded-xl border border-white/20 shadow-sm transition-all duration-500 group-hover:bg-white/20">
                <p className="text-white font-medium text-sm sm:text-base leading-snug">
                  "सशक्त किसान, सुरक्षित पंचायत — यही है हमारे नए सूर्यपुरा का आधार।"
                </p>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 font-medium tracking-wide">
                  — विकास दूत
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;