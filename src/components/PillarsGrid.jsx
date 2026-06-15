import { useEffect, useRef, useState } from 'react';

const pillars = [
  { id: 1, title: 'शिक्षा (Education)', desc: 'हर बच्चे के लिए आधुनिक और सुलभ शिक्षा व्यवस्था।', icon: '📚', color: 'bg-blue-50 text-blue-700' },
  { id: 2, title: 'किसान (Farmers)', desc: 'उन्नत कृषि तकनीक और मंडियों तक सीधी पहुंच।', icon: '🌾', color: 'bg-amber-50 text-amber-700' },
  { id: 3, title: 'सड़क (Roads)', desc: 'गांव के हर कोने को मुख्य शहर से जोड़ने वाले पक्के मार्ग।', icon: '🛣️', color: 'bg-stone-100 text-stone-700' },
  { id: 4, title: 'पंचायत (Panchayat)', desc: 'पारदर्शी प्रशासन और त्वरित जन-समस्या निवारण।', icon: '🏛️', color: 'bg-rose-50 text-rose-700' },
  { id: 5, title: 'डिजिटल पहचान (Digital Identity)', desc: 'हर नागरिक का सुरक्षित डिजिटल रिकॉर्ड और सुविधाएं।', icon: '📱', color: 'bg-emerald-50 text-emerald-700' },
];

const PillarsGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 } // Trigger slightly earlier for the grid
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="pillars" ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Section Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-800 mb-4">
            सूर्यपुरा के <span className="text-amber-600">5 विकास स्तंभ</span>
          </h2>
          <p className="text-lg text-stone-600">
            हमारा लक्ष्य इन प्रमुख क्षेत्रों में निरंतर सुधार कर गांव को एक स्मार्ट और आत्मनिर्भर इकाई बनाना है।
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {pillars.map((pillar, index) => (
            /* Outer Wrapper: Handles the scroll-reveal entrance animation with dynamic delays */
            <div 
              key={pillar.id} 
              className={`w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-90'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Inner Card: Handles the instant 3D Hover animation */}
              <div className="h-full p-8 rounded-2xl border border-stone-100 bg-stone-50 hover:bg-white hover:-translate-y-3 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 ease-out group cursor-pointer">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-md transition-all duration-500 ease-out ${pillar.color}`}>
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default PillarsGrid;