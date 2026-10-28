import React, { useState } from 'react';
import { 
  BookOpenCheck, 
  Landmark, 
  Globe2, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { threePillars } from '../data/emsData.ts';

export const ThreePillarsSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<'academic' | 'finance' | 'website'>('academic');

  const current = threePillars[activePillar];

  return (
    <section id="pillars" className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-200 relative overflow-hidden">
      {/* Floating Animated Ambient Glows */}
      <div className="absolute top-1/3 left-4 w-72 h-72 bg-emerald-500/5 blur-[90px] pointer-events-none rounded-full animate-float-gentle" />
      <div className="absolute bottom-10 right-4 w-72 h-72 bg-blue-500/5 blur-[90px] pointer-events-none rounded-full animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Glass Badge and Animation */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-badge-neutral text-xs font-bold mb-3 shadow-2xs animate-float">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span className="text-slate-700">প্রতিষ্ঠানের ৩টি প্রধান ব্যবস্থাপনা স্তম্ভ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            একটি প্ল্যাটফর্মেই প্রতিষ্ঠানের ৩ স্তরের পূর্ণ নিয়ন্ত্রণ
          </h2>
          <div className="h-1 w-20 gradient-rgb-bar mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            একাডেমিক জটিল কার্যক্রম, প্রশাসনিক ও আর্থিক লেনদেন এবং স্কুলের নিজস্ব আকর্ষণীয় ওয়েবসাইট — সবই জেবিডি সফটওয়্যার থেকে সহজে ও নির্ভুলভাবে পরিচালিত হয়।
          </p>
        </div>

        {/* 3 Pillar Selector Tabs with Glassmorphic Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          
          {/* Tab 1: Green - Academic */}
          <button
            type="button"
            onClick={() => setActivePillar('academic')}
            className={`btn-responsive p-5 rounded-3xl text-left transition-all cursor-pointer border ${
              activePillar === 'academic'
                ? 'bg-emerald-50/90 border-emerald-500 shadow-md ring-1 ring-emerald-500/30'
                : 'glass-premium hover:bg-white border-slate-200 shadow-2xs'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                activePillar === 'academic' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600'
              }`}>
                <BookOpenCheck className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full glass-badge-green">
                ১০টি ফিচার
              </span>
            </div>
            <h3 className="font-bold text-slate-900 text-base">১. একাডেমিক ব্যবস্থাপনা</h3>
            <p className="text-xs text-slate-600 mt-1 line-clamp-2">
              ভর্তি থেকে প্রমোশন, সিট প্ল্যান, এডমিট কার্ড ও রেজাল্ট প্রসেসিং।
            </p>
          </button>

          {/* Tab 2: Blue - Admin & Finance */}
          <button
            type="button"
            onClick={() => setActivePillar('finance')}
            className={`btn-responsive p-5 rounded-3xl text-left transition-all cursor-pointer border ${
              activePillar === 'finance'
                ? 'bg-blue-50/90 border-blue-500 shadow-md ring-1 ring-blue-500/30'
                : 'glass-premium hover:bg-white border-slate-200 shadow-2xs'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                activePillar === 'finance' ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600'
              }`}>
                <Landmark className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full glass-badge-blue">
                ৮টি ফিচার
              </span>
            </div>
            <h3 className="font-bold text-slate-900 text-base">২. অ্যাডমিন ও ফাইন্যান্স</h3>
            <p className="text-xs text-slate-600 mt-1 line-clamp-2">
              ফি কালেকশন, আয়-ব্যয় রিপোর্ট, নোটিফিকেশন ও ডকুমেন্ট জেনারেশন।
            </p>
          </button>

          {/* Tab 3: Red - School Website */}
          <button
            type="button"
            onClick={() => setActivePillar('website')}
            className={`btn-responsive p-5 rounded-3xl text-left transition-all cursor-pointer border ${
              activePillar === 'website'
                ? 'bg-rose-50/90 border-rose-500 shadow-md ring-1 ring-rose-500/30'
                : 'glass-premium hover:bg-white border-slate-200 shadow-2xs'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                activePillar === 'website' ? 'bg-rose-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600'
              }`}>
                <Globe2 className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full glass-badge-red">
                ৯টি ফিচার
              </span>
            </div>
            <h3 className="font-bold text-slate-900 text-base">৩. ওয়েবসাইট ও ফ্রন্টএন্ড</h3>
            <p className="text-xs text-slate-600 mt-1 line-clamp-2">
              আধুনিক রেসপনসিভ ওয়েব পোর্টাল, নোটিশ, গ্যালারি ও অনলাইন তথ্য প্রকাশ।
            </p>
          </button>

        </div>

        {/* Selected Pillar Detailed Checklist Card with Glassy Styling */}
        <div className="glass-premium rounded-3xl p-6 sm:p-8 border border-white/90 shadow-xl bg-white/85">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200 mb-6">
            <div>
              <span className={`text-xs font-bold uppercase tracking-wider ${
                activePillar === 'academic' ? 'text-emerald-700' : activePillar === 'finance' ? 'text-blue-700' : 'text-rose-700'
              }`}>
                {current.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {current.subtitle}
              </p>
            </div>
            <div className="shrink-0">
              <span className="px-3 py-1 rounded-full glass-badge-neutral text-xs font-bold text-slate-700 shadow-2xs">
                ✓ ভেরিফাইড প্রাতিষ্ঠানিক স্ট্যান্ডার্ড
              </span>
            </div>
          </div>

          {/* Points Grid with Colored Checked Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {current.points.map((point, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs hover:shadow-xs transition-all"
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                  activePillar === 'academic'
                    ? 'bg-emerald-100 text-emerald-700'
                    : activePillar === 'finance'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-rose-100 text-rose-700'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {point}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
