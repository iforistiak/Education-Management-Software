import React from 'react';
import { 
  Calculator, 
  GraduationCap, 
  BellRing, 
  BookOpen, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const CoreHighlightCards: React.FC = () => {
  return (
    <section id="highlights" className="py-16 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Soft Background Glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/5 blur-[90px] pointer-events-none rounded-full animate-float-gentle" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-rose-500/5 blur-[90px] pointer-events-none rounded-full animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Kicker Section Heading with Glassmorphic Badge & Floating Animation */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-badge-neutral text-xs font-bold mb-3 shadow-2xs animate-float">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-slate-700">জেবিডি আইটি স্পেশাল সুবিধা</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            নিয়ে চলি, সাফল্যের উচ্চতায়
          </h2>
          <div className="h-1 w-24 gradient-rgb-bar mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            শিক্ষা প্রতিষ্ঠানের মূল চার স্তম্ভের নিখুঁত সমন্বয় যা প্রশাসনিক জটিলতা দূর করে সময় ও শ্রম সাশ্রয় করে।
          </p>
        </div>

        {/* 4 Highlight Cards in Red, Blue, Green harmony with Glass Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Blue - Accounts */}
          <div className="glass-card-interactive p-6 rounded-3xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200/80 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                হিসাব বিভাগ নিয়ন্ত্রণে
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                সহজ, নিরাপদ ও ঝুঁকিমুক্ত হিসাব ব্যবস্থাপনা। আয়-ব্যয়ের পুঙ্খানুপুঙ্খ অডিট লেজার।
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-blue-700 px-2.5 py-0.5 rounded-full glass-badge-blue">
                ১০০% নির্ভুল লেজার
              </span>
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
            </div>
          </div>

          {/* Card 2: Red - Results */}
          <div className="glass-card-interactive p-6 rounded-3xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 border border-rose-200/80 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all shadow-xs">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">
                দ্রুত ফলাফল প্রকাশ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                অতিরিক্ত ঝামেলা ছাড়াই নির্ভুল ও সময়মতো ফলাফল প্রকাশ এবং গ্রেডশিট প্রস্তুত।
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-rose-700 px-2.5 py-0.5 rounded-full glass-badge-red">
                সিট প্ল্যান ও এডমিট
              </span>
              <CheckCircle2 className="w-4 h-4 text-rose-600" />
            </div>
          </div>

          {/* Card 3: Green - Instant Receipt & Notifications */}
          <div className="glass-card-interactive p-6 rounded-3xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xs">
                <BellRing className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                দ্রুত রশিদ ও নোটিফিকেশন
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                মুহূর্তেই ডিজিটাল মানি রশিদ তৈরি করুন এবং অভিভাবকদের গুরুত্বপূর্ণ নোটিশ পাঠান।
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-700 px-2.5 py-0.5 rounded-full glass-badge-green">
                তাত্ক্ষণিক নোটিশ
              </span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          </div>

          {/* Card 4: Blue/Green - Library Management */}
          <div className="glass-card-interactive p-6 rounded-3xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 border border-teal-200/80 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-xs">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                লাইব্রেরি ম্যানেজমেন্ট
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                বই ইস্যু-রিটার্ন ও জরিমানা সহজে নিয়ন্ত্রণ এবং বারকোড ক্যাটালগিং সিস্টেম।
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-teal-700 px-2.5 py-0.5 rounded-full glass-badge-blue">
                বারকোড ট্র্যাকিং
              </span>
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
