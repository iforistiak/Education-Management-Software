import React from 'react';
import { 
  Code2, 
  ChevronUp
} from 'lucide-react';
import { JbdLogo } from './JbdLogo.tsx';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 relative">
      {/* Top RGB Line */}
      <div className="h-1 w-full gradient-rgb-bar" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Simple & Clean Row (No extra text or clutter) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
          
          {/* Logo */}
          <div className="flex items-center">
            <JbdLogo size="md" />
          </div>

          {/* Essential Single-Line Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 font-medium text-slate-300">
            <a href="#features" className="hover:text-rose-400 transition-colors">ফিচারসমূহ</a>
            <a href="#pillars" className="hover:text-blue-400 transition-colors">সমাধান স্তম্ভ</a>
            <a href="#highlights" className="hover:text-emerald-400 transition-colors">সুবিধাসমূহ</a>
            <a href="#modules" className="hover:text-blue-400 transition-colors">মডিউলসমূহ</a>
            <a href="#faq" className="hover:text-rose-400 transition-colors">প্রশ্নোত্তর</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">যোগাযোগ</a>
          </nav>

          {/* Quick Contact & Scroll to Top */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-slate-400 hidden sm:inline">০১৭১১-০০০০০০</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="btn-responsive p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
              title="পৃষ্ঠার শীর্ষে যান"
              aria-label="Back to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Mandatory Developer Signature */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-400 text-center sm:text-left">
            © ২০২৬ JBD IT Education Management.
          </div>

          {/* Clean Developer Signature */}
          <div className="px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-rose-400" />
            <span className="text-xs font-bold text-slate-200 tracking-wide font-sans">
              Develop & Deployed By <span className="text-emerald-400">MD. ISTIAK ISLAM</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
