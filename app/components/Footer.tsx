import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#08070e] border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#1D1C26] rounded flex items-center justify-center text-slate-400 font-bold text-[10px]">
            MR
          </div>
          <span className="text-xs font-medium text-slate-500">© 2025 Movie Rating Pro</span>
        </div>
        
        <div className="flex gap-6 text-[11px] text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Documentation</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">License (MIT)</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
