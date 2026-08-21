import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#060911] text-slate-400 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <span className="font-heading font-bold text-white text-sm">Mukund Soni</span>
            <p className="text-[11px] font-code text-slate-500">Head of Technology • AI & Fullstack Systems</p>
          </div>
        </div>

        {/* Middle Meta */}
        <div className="text-center text-xs font-code text-slate-500">
          © {new Date().getFullYear()} Mukund Soni. Designed & Built with Next.js, TypeScript & Cyber Glassmorphism.
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-xs font-code text-slate-300 hover:text-emerald-400 transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
