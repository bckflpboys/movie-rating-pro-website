import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        icon: string;
        width?: string;
        'stroke-width'?: string;
        fill?: string;
      };
    }
  }
}

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-[#B2FFD6]/20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-lg bg-[#B2FFD6] flex items-center justify-center text-black font-semibold tracking-tighter text-base shadow-lg shadow-[#B2FFD6]/30">
            <iconify-icon icon="lucide:film" width="16"></iconify-icon>
          </div>
          <span className="font-bold text-[#C39EFF] tracking-tight text-lg">MOVIE RATING PRO</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#B2FFD6]">
          <a href="/#features" className="hover:text-[#C39EFF] transition-colors">Features</a>
          <a href="/how-it-works" className="hover:text-[#C39EFF] transition-colors">How it Works</a>
          <a href="#privacy" className="hover:text-[#C39EFF] transition-colors">Privacy</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="hidden sm:flex text-[#B2FFD6] hover:text-[#FFB2E6] transition-colors">
            <iconify-icon icon="lucide:github" width="22" stroke-width="1.5"></iconify-icon>
          </a>
          <button className="bg-[#C39EFF] hover:bg-[#9b7ecc] text-black text-sm font-bold px-5 py-2.5 rounded-full transition-all flex items-center gap-2">
            <iconify-icon icon="lucide:chrome" width="16" stroke-width="1.5"></iconify-icon>
            Add to Chrome
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
