import React, { useState } from 'react';
import { 
  Building2, 
  UserCheck, 
  Trophy, 
  GraduationCap, 
  FileCheck, 
  Download, 
  Image as ImageIcon, 
  RefreshCw,
  ChevronRight,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { systemModules } from '../data/emsData.ts';

const moduleIcons: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-5 h-5" />,
  UserCheck: <UserCheck className="w-5 h-5" />,
  Trophy: <Trophy className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  FileCheck: <FileCheck className="w-5 h-5" />,
  Download: <Download className="w-5 h-5" />,
  Image: <ImageIcon className="w-5 h-5" />,
  RefreshCw: <RefreshCw className="w-5 h-5" />,
};

export const WebsiteModulesSection: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState(systemModules[0]);

  return (
    <section id="modules" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-premium text-xs font-bold mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-slate-700">ওয়েবসাইট ও ম্যানেজমেন্ট ব্যাকএন্ড মডিউল</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            প্রতিষ্ঠানের ওয়েবসাইট ও ম্যানেজমেন্টের অভ্যন্তরীণ মডিউল
          </h2>
          <div className="h-1 w-20 gradient-rgb-bar mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            প্রতিটি মডিউল প্রতিষ্ঠানের প্রশাসনিক সুবিধার জন্য বিশেষভাবে সাজানো। যেকোনো তথ্য সংযোজন, পরিবর্তন কিংবা আপডেট করা যায় সহজেই।
          </p>
        </div>

        {/* 2-Column Responsive Module Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Module Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            {systemModules.map((mod, idx) => {
              const isSelected = selectedModule.id === mod.id;
              const isRed = idx % 3 === 0;
              const isBlue = idx % 3 === 1;

              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setSelectedModule(mod)}
                  className={`btn-responsive w-full p-3.5 rounded-2xl text-left transition-all cursor-pointer flex items-center justify-between border ${
                    isSelected
                      ? isRed 
                        ? 'bg-rose-50 border-rose-500 shadow-md ring-1 ring-rose-500/20' 
                        : isBlue 
                        ? 'bg-blue-50 border-blue-500 shadow-md ring-1 ring-blue-500/20' 
                        : 'bg-emerald-50 border-emerald-500 shadow-md ring-1 ring-emerald-500/20'
                      : 'glass-premium hover:bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? isRed ? 'bg-rose-600 text-white shadow-xs' : isBlue ? 'bg-blue-600 text-white shadow-xs' : 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {moduleIcons[mod.icon] || <Layers className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{mod.name}</h4>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{mod.summary}</p>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-blue-600 translate-x-1' : 'text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Insight Detail Glass Card */}
          <div className="lg:col-span-7 glass-premium rounded-3xl p-6 sm:p-8 border border-white shadow-xl bg-white/90 relative">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-600 text-white flex items-center justify-center shadow-md">
                {moduleIcons[selectedModule.icon] || <Layers className="w-6 h-6" />}
              </div>
              <div>
                <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                  মডিউল বিস্তারিত
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {selectedModule.name}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              {selectedModule.summary}
            </p>

            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
              এই মডিউলে অন্তর্ভুক্ত প্রধান সুবিধাসমূহ:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {selectedModule.subItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-slate-800 shadow-2xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-50 via-blue-50 to-emerald-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <span className="text-slate-700 font-medium">
                ডায়নামিক CMS এর মাধ্যমে অ্যাডমিন প্যানেল থেকেই সব পরিচালনাযোগ্য।
              </span>
              <span className="font-mono text-emerald-800 font-bold shrink-0">
                ✓ ১০০% রিয়েল-টাইম সিঙ্ক
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
