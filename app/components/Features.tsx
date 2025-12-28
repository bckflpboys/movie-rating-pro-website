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
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white">Powerful Features, Built for Cinephiles</h2>
          <p className="text-slate-400 mt-3">From automatic detection to advanced analytics, everything you need is right here.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1: Auto-Detection */}
          <div className="group p-6 rounded-2xl border border-white/5 bg-[#111019] hover:bg-[#151520] hover:border-violet-500/20 transition-all duration-300 col-span-1 md:col-span-2">
            <div className="w-10 h-10 rounded-lg bg-[#1D1C26] border border-white/5 flex items-center justify-center mb-4 text-violet-400 shadow-sm">
              <iconify-icon icon="lucide:scan-line" width="20" stroke-width="1.5"></iconify-icon>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Automatic Title Detection</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Instantly captures movie titles from Netflix, Prime Video, Disney+, and 10+ other platforms. No manual typing required.
            </p>
          </div>

          {/* Feature 2: Trending Movies */}
          <div className="group p-6 rounded-2xl border border-white/5 bg-[#111019] hover:bg-[#151520] hover:border-violet-500/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#1D1C26] border border-white/5 flex items-center justify-center mb-4 text-violet-400 shadow-sm">
              <iconify-icon icon="lucide:flame" width="20" stroke-width="1.5"></iconify-icon>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Trending Movies</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Discover what&apos;s popular with a built-in carousel of trending movies, powered by the TMDB API.
            </p>
          </div>

          {/* Feature 3: Advanced Search */}
          <div className="group p-6 rounded-2xl border border-white/5 bg-[#111019] hover:bg-[#151520] hover:border-violet-500/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#1D1C26] border border-white/5 flex items-center justify-center mb-4 text-violet-400 shadow-sm">
              <iconify-icon icon="lucide:search" width="20" stroke-width="1.5"></iconify-icon>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Advanced Search & Filter</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Quickly find any movie in your collection with powerful search, filter, and sort capabilities.
            </p>
          </div>

          {/* Feature 4: Flexible Scoring */}
          <div className="group p-6 rounded-2xl border border-white/5 bg-[#111019] hover:bg-[#151520] hover:border-violet-500/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#1D1C26] border border-white/5 flex items-center justify-center mb-4 text-violet-400 shadow-sm">
              <iconify-icon icon="lucide:settings-2" width="20" stroke-width="1.5"></iconify-icon>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Flexible Rating System</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Enable or disable any of the 10 default categories. The total score adapts automatically to your preferences.
            </p>
          </div>

          {/* Feature 5: Custom Fields */}
          <div className="group p-6 rounded-2xl border border-white/5 bg-[#111019] hover:bg-[#151520] hover:border-violet-500/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#1D1C26] border border-white/5 flex items-center justify-center mb-4 text-violet-400 shadow-sm">
              <iconify-icon icon="lucide:database" width="20" stroke-width="1.5"></iconify-icon>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Unlimited Custom Fields</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Add your own rating criteria with 7 different field types, including text, date, dropdowns, and rating sliders.
            </p>
          </div>

          {/* Feature 6: CSV Export */}
          <div className="group p-6 rounded-2xl border border-white/5 bg-[#111019] hover:bg-[#151520] hover:border-violet-500/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#1D1C26] border border-white/5 flex items-center justify-center mb-4 text-violet-400 shadow-sm">
              <iconify-icon icon="lucide:file-spreadsheet" width="20" stroke-width="1.5"></iconify-icon>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Export to CSV</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Backup your entire collection to a CSV file with a single click. Perfect for analysis or peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
