const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-emerald-700 rounded-md flex items-center justify-center">
               <span className="text-white font-bold text-xl leading-none">सू</span>
            </div>
            <span className="font-extrabold text-xl text-white tracking-tight">
              सूर्यपुरा <span className="text-emerald-500">पोर्टल</span>
            </span>
          </div>
          <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
            सूर्यपुरा ग्राम पंचायत का आधिकारिक डिजिटल पोर्टल। गांव के विकास और नागरिकों की सुविधा के लिए समर्पित एक पारदर्शी पहल।
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4 text-lg">महत्वपूर्ण लिंक</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">मुख्य पृष्ठ</a></li>
            <li><a href="#pillars" className="hover:text-emerald-400 transition-colors">विकास स्तंभ</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">पंचायत सेवाएं</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">संपर्क करें</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-4 text-lg">संपर्क सूत्र</h4>
          <ul className="space-y-3 text-sm text-stone-400">
            <li className="flex items-center gap-2"><span>📍</span> ग्राम पंचायत भवन, सूर्यपुरा, जयपुर</li>
            <li className="flex items-center gap-2"><span>📞</span> +91 80000 00000</li>
            <li className="flex items-center gap-2"><span>✉️</span> info@suryapura.gov.in</li>
          </ul>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center text-stone-500">
        <p>© 2026 सूर्यपुरा ग्राम पंचायत. सर्वाधिकार सुरक्षित।</p>
        <p className="mt-2 md:mt-0 font-medium text-stone-400">Design Demo for Channel009</p>
      </div>
    </footer>
  );
};

export default Footer;