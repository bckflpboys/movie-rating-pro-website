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

const Features = () => {
  return (
    <section id="features" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="group p-6 rounded-2xl border border-white/5 bg-[#111019] hover:bg-[#151520] hover:border-violet-500/20 hover:shadow-lg hover:shadow-violet-900/10 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#1D1C26] border border-white/5 flex items-center justify-center mb-4 text-violet-400 shadow-sm group-hover:scale-110 group-hover:text-fuchsia-400 transition-all">
              <iconify-icon icon="lucide:scan-line" width="20" stroke-width="1.5"></iconify-icon>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Auto-Detection</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Instantly captures movie titles from Netflix, Prime Video, Disney+, and 10+ other platforms. No manual typing required.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group p-6 rounded-2xl border border-white/5 bg-[#111019] hover:bg-[#151520] hover:border-violet-500/20 hover:shadow-lg hover:shadow-violet-900/10 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#1D1C26] border border-white/5 flex items-center justify-center mb-4 text-violet-400 shadow-sm group-hover:scale-110 group-hover:text-fuchsia-400 transition-all">
              <iconify-icon icon="lucide:settings-2" width="20" stroke-width="1.5"></iconify-icon>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Flexible Scoring</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Enable or disable up to 10 default categories like &apos;Sound Design&apos; or &apos;Acting&apos;. The total score adapts automatically.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group p-6 rounded-2xl border border-white/5 bg-[#111019] hover:bg-[#151520] hover:border-violet-500/20 hover:shadow-lg hover:shadow-violet-900/10 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#1D1C26] border border-white/5 flex items-center justify-center mb-4 text-violet-400 shadow-sm group-hover:scale-110 group-hover:text-fuchsia-400 transition-all">
              <iconify-icon icon="lucide:database" width="20" stroke-width="1.5"></iconify-icon>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Custom Fields</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Create unlimited custom fields: Dropdowns for genre, Text for reviews, or extra Rating Sliders for specific criteria.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
