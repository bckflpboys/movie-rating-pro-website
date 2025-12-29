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

const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-44 pb-20 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-grid z-0 mask-image-gradient pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B2FFD6]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B2FFD6]/10 border border-[#B2FFD6]/20 text-[10px] font-medium text-[#B2FFD6] mb-6 uppercase tracking-wider">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B2FFD6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#B2FFD6]"></span>
            </span>
            v1.0 Now Available
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Rate movies with <br />
            <span className="text-[#C39EFF] drop-shadow-[0_0_8px_rgba(195,158,255,0.5)]">uncompromising precision.</span>
          </h1>

          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-xs text-slate-500">by</span>
            <a
              href="https://devaura.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#C39EFF] hover:text-[#B2FFD6] transition-colors flex items-center gap-1"
            >
              Devaura
              <iconify-icon icon="lucide:external-link" width="12"></iconify-icon>
            </a>
          </div>

          <p className="text-lg text-[#B2FFD6] max-w-xl mx-auto leading-relaxed mb-8">
            A powerful Chrome extension for cinephiles. Auto-detect titles, customize dark-themed rating criteria, and build your database locally.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="h-12 px-8 rounded-full bg-[#C39EFF] hover:bg-[#9b7ecc] text-black text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-[#C39EFF]/30">
              <span>Install Extension</span>
              <iconify-icon icon="lucide:arrow-right" width="16" stroke-width="2.5"></iconify-icon>
            </button>
            <button className="h-12 px-8 rounded-full bg-black border border-[#C39EFF]/30 text-[#B2FFD6] text-sm font-medium hover:bg-[#0a0a0a] hover:border-[#C39EFF]/50 transition-all">
              View Documentation
            </button>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 rounded-2xl blur opacity-30"></div>

          <div className="relative bg-[#0F0E17] rounded-xl border border-white/10 shadow-2xl overflow-hidden ring-1 ring-white/5">
            <div className="h-9 bg-[#0B0A13] border-b border-white/5 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10 hover:bg-red-500/50 transition-colors"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/10 hover:bg-yellow-500/50 transition-colors"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/10 hover:bg-green-500/50 transition-colors"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-[#151520] text-[#6b6a7c] px-3 py-1 rounded text-[10px] font-medium w-48 text-center flex items-center justify-center gap-1.5">
                  <iconify-icon icon="lucide:lock" width="8"></iconify-icon>
                  chrome://extensions
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row h-auto md:h-[420px]">
              {/* Sidebar */}
              <div className="w-full md:w-64 bg-[#111019] border-r border-white/5 p-5 flex flex-col gap-5">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-violet-900/30">
                    <iconify-icon icon="lucide:clapperboard" width="18"></iconify-icon>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Interstellar</div>
                    <div className="text-[10px] text-violet-400">Auto-detected</div>
                  </div>
                </div>

                {/* Rating Slider 1 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-medium text-slate-400">
                    <span>Cinematography</span>
                    <span className="text-violet-300">9.5</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#1D1C26] rounded-full relative overflow-hidden group cursor-pointer">
                    <div className="absolute top-0 left-0 h-full w-[95%] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                  </div>
                </div>

                {/* Rating Slider 2 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-medium text-slate-400">
                    <span>Score / Music</span>
                    <span className="text-violet-300">10.0</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#1D1C26] rounded-full relative overflow-hidden cursor-pointer">
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                  </div>
                </div>

                {/* Rating Slider 3 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-medium text-slate-400">
                    <span>Screenplay</span>
                    <span className="text-violet-300">8.2</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#1D1C26] rounded-full relative overflow-hidden cursor-pointer">
                    <div className="absolute top-0 left-0 h-full w-[82%] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                  </div>
                </div>

                <div className="mt-auto pt-5 border-t border-white/5">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] text-slate-500">Total Score</span>
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 tracking-tighter">9.2</span>
                  </div>
                  <div className="flex gap-1 mt-2 text-slate-600">
                    <iconify-icon icon="lucide:star" className="text-yellow-500" width="12" fill="currentColor"></iconify-icon>
                    <iconify-icon icon="lucide:star" className="text-yellow-500" width="12" fill="currentColor"></iconify-icon>
                    <iconify-icon icon="lucide:star" className="text-yellow-500" width="12" fill="currentColor"></iconify-icon>
                    <iconify-icon icon="lucide:star" className="text-yellow-500" width="12" fill="currentColor"></iconify-icon>
                    <iconify-icon icon="lucide:star-half" className="text-yellow-500" width="12" fill="currentColor"></iconify-icon>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-6 bg-[#0B0A13]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold text-white">Custom Fields</h3>
                  <button className="text-[10px] bg-[#1D1C26] hover:bg-[#252430] text-violet-300 px-3 py-1.5 rounded border border-white/5 transition-colors flex items-center gap-1">
                    <iconify-icon icon="lucide:plus" width="10"></iconify-icon> Add Field
                  </button>
                </div>

                <div className="space-y-3">
                  {/* Custom Field Item */}
                  <div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-[#111019] hover:border-violet-500/30 transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-[#1D1C26] flex items-center justify-center text-slate-400 group-hover:text-violet-400 transition-colors">
                        <iconify-icon icon="lucide:type" width="14"></iconify-icon>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-200">Director</span>
                        <span className="text-[10px] text-slate-500">Text Input</span>
                      </div>
                    </div>
                    {/* Custom Toggle Switch */}
                    <div className="w-9 h-5 bg-violet-600 rounded-full relative cursor-pointer shadow-inner shadow-black/20">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>

                  {/* Custom Field Item */}
                  <div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-[#111019] hover:border-violet-500/30 transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-[#1D1C26] flex items-center justify-center text-slate-400 group-hover:text-violet-400 transition-colors">
                        <iconify-icon icon="lucide:list" width="14"></iconify-icon>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-200">Platform</span>
                        <span className="text-[10px] text-slate-500">Dropdown Selection</span>
                      </div>
                    </div>
                    <div className="w-9 h-5 bg-violet-600 rounded-full relative cursor-pointer shadow-inner shadow-black/20">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>

                  {/* Custom Field Item */}
                  <div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-[#111019] hover:border-violet-500/30 transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-[#1D1C26] flex items-center justify-center text-slate-400 group-hover:text-violet-400 transition-colors">
                        <iconify-icon icon="lucide:sliders-horizontal" width="14"></iconify-icon>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-200">Rewatchability</span>
                        <span className="text-[10px] text-slate-500">Rating Slider (1-10)</span>
                      </div>
                    </div>
                    <div className="w-9 h-5 bg-[#1D1C26] rounded-full relative cursor-pointer">
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-[#6b6a7c] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
