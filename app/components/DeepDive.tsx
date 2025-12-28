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

const DeepDive = () => {
  return (
    <section className="py-24 bg-[#0F0E17]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Engineered for details.</h2>
          <p className="text-slate-400 mt-2">Everything you need to catalogue your cinematic journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[500px]">
          
          {/* Large Card: Analytics */}
          <div className="col-span-1 md:col-span-2 row-span-2 bg-[#111019] rounded-2xl border border-white/5 p-8 flex flex-col justify-between overflow-hidden relative hover:border-white/10 transition-colors">
            <div className="relative z-10">
              <h3 className="font-semibold text-white mb-2">Detailed Analytics</h3>
              <p className="text-xs text-slate-400">Visualize your ratings breakdown.</p>
            </div>
            
            <div className="mt-8 space-y-4">
              {/* Chart Mockup */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] w-12 text-slate-500 font-medium">Action</span>
                <div className="h-1.5 w-full bg-[#1D1C26] rounded-full overflow-hidden">
                  <div className="h-full bg-violet-500 w-[75%] shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] w-12 text-slate-500 font-medium">Drama</span>
                <div className="h-1.5 w-full bg-[#1D1C26] rounded-full overflow-hidden">
                  <div className="h-full bg-fuchsia-500 w-[45%] shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] w-12 text-slate-500 font-medium">Sci-Fi</span>
                <div className="h-1.5 w-full bg-[#1D1C26] rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 w-[90%] shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 right-0 p-8 opacity-[0.03]">
              <iconify-icon icon="lucide:bar-chart-2" width="140"></iconify-icon>
            </div>
          </div>

          {/* Small Card: Privacy */}
          <div className="col-span-1 md:col-span-2 bg-[#111019] rounded-2xl border border-white/5 p-6 flex flex-col justify-center relative overflow-hidden group hover:bg-[#151520] transition-colors">
            <div className="flex items-start justify-between relative z-10">
              <div>
                <h3 className="font-semibold text-white mb-1">Local First</h3>
                <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                  No servers. No accounts. Your data lives securely in your browser&apos;s Local Storage.
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#1D1C26] flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:text-white group-hover:bg-violet-600 transition-all duration-300">
                <iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
              </div>
            </div>
          </div>

          {/* Small Card: Import/Export */}
          <div className="col-span-1 bg-[#111019] rounded-2xl border border-white/5 p-6 flex flex-col justify-end relative group hover:border-violet-500/20 transition-colors">
            <div className="absolute top-6 left-6 w-8 h-8 rounded border border-white/10 bg-[#1D1C26] flex items-center justify-center text-slate-400 group-hover:text-fuchsia-400 transition-colors">
              <iconify-icon icon="lucide:file-json" width="16"></iconify-icon>
            </div>
            <h3 className="font-semibold text-white text-sm mb-1">JSON Export</h3>
            <p className="text-[10px] text-slate-500">Backup your data instantly.</p>
          </div>

          {/* Small Card: Custom Fields */}
          <div className="col-span-1 bg-gradient-to-br from-violet-900 to-indigo-900 rounded-2xl border border-white/10 p-6 flex flex-col justify-end relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            <div className="absolute top-6 right-6 text-white/40">
              <iconify-icon icon="lucide:plus" width="20"></iconify-icon>
            </div>
            <h3 className="font-semibold text-white text-sm mb-1 relative z-10">7 Field Types</h3>
            <p className="text-[10px] text-white/60 relative z-10">Sliders, Date, Dropdowns &amp; more.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeepDive;
