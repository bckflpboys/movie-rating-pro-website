import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        icon: string;
        width?: string;
        'stroke-width'?: string;
      };
    }
  }
}

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#0B0A13]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-semibold tracking-tighter text-sm shadow-lg shadow-violet-500/20">
            <iconify-icon icon="lucide:star" width="14"></iconify-icon>
          </div>
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 tracking-tight text-sm">Movie Rating Pro</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:flex text-slate-400 hover:text-white transition-colors">
            <iconify-icon icon="lucide:github" width="20" stroke-width="1.5"></iconify-icon>
          </a>
          <button className="bg-white/10 hover:bg-white/15 border border-white/5 text-white text-xs font-medium px-4 py-2 rounded-full transition-all flex items-center gap-2">
            <iconify-icon icon="lucide:chrome" width="14" stroke-width="1.5"></iconify-icon>
            Add to Chrome
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
