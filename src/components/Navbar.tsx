import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  PhoneCall, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { JbdLogo } from './JbdLogo.tsx';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ফিচারসমূহ', href: '#features' },
    { name: 'সমাধান স্তম্ভ', href: '#pillars' },
    { name: 'প্রধান সুবিধাসমূহ', href: '#highlights' },
    { name: 'মডিউলসমূহ', href: '#modules' },
    { name: 'প্রশ্নোত্তর', href: '#faq' },
    { name: 'যোগাযোগ', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner Ribbon with Red, Blue, Green Harmony */}
      <div className="bg-slate-900 text-white py-1.5 px-4 text-xs font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="flex gap-1 items-center">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-slate-200">
              <b className="text-rose-400">JBD</b> <b className="text-blue-400">IT</b> Education: বাংলাদেশের ৩০০+ শিক্ষাপ্রতিষ্ঠানের বিশ্বস্ত সফটওয়্যার
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs text-slate-300">
            <span className="font-mono">📞 হটলাইন: ০১৭১১-০০০০০০</span>
            <span className="text-slate-600">|</span>
            <button
              type="button"
              onClick={onOpenContact}
              className="text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer underline underline-offset-2"
            >
              বিনামূল্যে প্রতিষ্ঠান অডিট বুক করুন
            </button>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'glass-nav-blur shadow-md py-2.5' 
            : 'bg-white/80 backdrop-blur-md border-b border-slate-200/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            
            {/* Zone 1: Creative JBD Logo */}
            <a href="#" className="shrink-0 flex items-center">
              <JbdLogo size="md" />
            </a>

            {/* Zone 2: Clean, Single-Line Nav Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-blue-600 transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-600 after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: Direct Action Button */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenContact}
                className="btn-responsive inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-rose-600 via-blue-600 to-emerald-600 hover:from-rose-500 hover:via-blue-500 hover:to-emerald-500 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4" />
                <span>পরামর্শ ও ফ্রি ট্রায়াল</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-premium border-t border-slate-200 px-4 pt-3 pb-5 mt-2 space-y-3 animate-in slide-in-from-top-3 duration-200 shadow-xl">
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold rounded-xl text-white bg-gradient-to-r from-rose-600 via-blue-600 to-emerald-600 shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>পরামর্শ ও ফ্রি ট্রায়াল বুক করুন</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
