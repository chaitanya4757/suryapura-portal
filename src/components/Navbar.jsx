import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 backdrop-blur-md bg-stone-50/80 border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-emerald-700 rounded-md flex items-center justify-center">
               <span className="text-white font-bold text-xl leading-none">सू</span>
            </div>
            <span className="font-extrabold text-xl text-stone-800 tracking-tight">
              सूर्यपुरा <span className="text-emerald-700">पोर्टल</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-stone-600 hover:text-emerald-700 font-medium transition-colors">मुख्य पृष्ठ</a>
            <a href="#pillars" className="text-stone-600 hover:text-emerald-700 font-medium transition-colors">विकास स्तंभ</a>
            <a href="#" className="text-stone-600 hover:text-emerald-700 font-medium transition-colors">पंचायत</a>
            <button className="px-5 py-2 bg-stone-800 text-white rounded-lg font-medium hover:bg-stone-700 transition-colors shadow-sm">
              लॉग इन
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-emerald-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-stone-600 font-medium hover:bg-stone-100 hover:text-emerald-700 rounded-md">मुख्य पृष्ठ</a>
            <a href="#pillars" className="block px-3 py-2 text-stone-600 font-medium hover:bg-stone-100 hover:text-emerald-700 rounded-md">विकास स्तंभ</a>
            <a href="#" className="block px-3 py-2 text-stone-600 font-medium hover:bg-stone-100 hover:text-emerald-700 rounded-md">पंचायत</a>
            <button className="w-full text-left px-3 py-2 mt-2 bg-stone-800 text-white font-medium rounded-md">
              लॉग इन
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;