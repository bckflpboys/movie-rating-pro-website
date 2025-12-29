import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#B2FFD6]/10 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#B2FFD6] rounded-lg flex items-center justify-center text-black font-bold text-sm">
            MRP
          </div>
          <span className="text-sm font-medium text-[#B2FFD6]/80">© 2025 MOVIE RATING PRO</span>
        </div>
        
        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="text-[#C39EFF] hover:text-[#B2FFD6] transition-colors">DOCUMENTATION</a>
          <a href="#" className="text-[#C39EFF] hover:text-[#B2FFD6] transition-colors">PRIVACY POLICY</a>
          <a href="#" className="text-[#C39EFF] hover:text-[#B2FFD6] transition-colors">LICENSE (MIT)</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
