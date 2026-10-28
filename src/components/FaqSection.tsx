import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ChevronDown } from 'lucide-react';
import { faqList } from '../data/emsData.ts';

export const FaqSection: React.FC = () => {
  // All FAQ questions closed by default as requested: "faq pre open question answer not to be needed open, click to open"
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleFaq = (id: string) => {
    setOpenIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-badge-neutral text-xs font-bold mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span className="text-slate-700">সচরাচর জিজ্ঞাসিত প্রশ্ন ও উত্তর (FAQ)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            আপনার মনের সাধারণ প্রশ্নগুলোর সহজ উত্তর
          </h2>
          <div className="h-1 w-20 gradient-rgb-bar mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            জেবিডি এডুকেশন সফটওয়্যার নির্বাচন, ব্যবহার ও বাস্তবায়ন সম্পর্কিত সকল প্রয়োজনীয় তথ্যের স্পষ্ট বিবরণ। ক্লিক করে বিস্তারিত উত্তর দেখুন।
          </p>
        </div>

        {/* 2-Column Accordion Layout (All Closed by Default) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqList.map((item, idx) => {
            const isOpen = !!openIds[item.id];
            const isRed = idx % 3 === 0;
            const isBlue = idx % 3 === 1;

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all border overflow-hidden bg-white/95 ${
                  isOpen 
                    ? isRed 
                      ? 'border-rose-400 shadow-md ring-1 ring-rose-400/20' 
                      : isBlue
                      ? 'border-blue-400 shadow-md ring-1 ring-blue-400/20'
                      : 'border-emerald-400 shadow-md ring-1 ring-emerald-400/20'
                    : 'border-slate-200/90 shadow-2xs hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="btn-responsive w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                      isOpen 
                        ? isRed ? 'bg-rose-600 text-white font-bold' : isBlue ? 'bg-blue-600 text-white font-bold' : 'bg-emerald-600 text-white font-bold'
                        : isRed ? 'bg-rose-50 text-rose-700 group-hover:bg-rose-100' : isBlue ? 'bg-blue-50 text-blue-700 group-hover:bg-blue-100' : 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                    <span className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.question}
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-in slide-in-from-top-1 duration-150">
                    <p className="pl-10 text-slate-700">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Callout */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 text-xs">
            আপনার প্রতিষ্ঠান সংক্রান্ত কোনো বিশেষ প্রশ্ন আছে?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-1.5 mt-1.5 text-blue-600 hover:text-blue-700 text-xs font-bold underline underline-offset-4"
          >
            <span>পরামর্শ ও কোটেশন ফর্ম পূরণ করুন</span> →
          </a>
        </div>

      </div>
    </section>
  );
};
