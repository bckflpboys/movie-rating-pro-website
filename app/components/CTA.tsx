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

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-fuchsia-900/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl font-semibold tracking-tight text-white mb-6">
          Start your collection today.
        </h2>
        <p className="text-slate-400 mb-10 max-w-md mx-auto">
          Join thousands of users rating movies with precision. Open source, private, and free.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="h-11 px-8 rounded-full bg-white text-[#0B0A13] text-sm font-semibold hover:bg-slate-200 transition-all flex items-center gap-2">
            <iconify-icon icon="lucide:download" width="16" stroke-width="1.5"></iconify-icon>
            Download for Chrome
          </button>
          <button className="h-11 px-8 rounded-full bg-transparent border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-all flex items-center gap-2">
            <iconify-icon icon="lucide:github" width="16" stroke-width="1.5"></iconify-icon>
            Star on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
