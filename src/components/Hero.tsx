import React from 'react';
import { 
  Play, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  CheckCircle2,
  Calculator,
  GraduationCap,
  MessageSquareText,
  BookOpen
} from 'lucide-react';
import { demoCredentials } from '../data/emsData.ts';

interface HeroProps {
  onOpenDemoModal: () => void;
  onOpenVideoModal: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenDemoModal, 
  onOpenVideoModal, 
  onOpenContact 
}) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Background glowing glossy blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-20 w-[450px] h-[300px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 -right-20 w-[450px] h-[300px] bg-teal-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Trust Pill / Top Subtitle */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium shadow-inner shadow-emerald-500/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>স্মার্ট স্কুলের পূর্ণাঙ্গ সমাধান এখন আপনার হাতের মুঠোয়</span>
          </div>
        </div>

        {/* Hero Title with Balanced Wrap */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.25] sm:leading-[1.2]">
            এডুকেশন ম্যানেজমেন্ট সফটওয়্যার
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              এর মাধ্যমে সাজান আপনার স্বপ্নের শিক্ষাপ্রতিষ্ঠান
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            জেবিডি আইটি’র এডুকেশন ম্যানেজমেন্ট সফটওয়্যার এর মাধ্যমে শিক্ষা প্রতিষ্ঠানের সকল কাজ হয় খুব সহজে এবং দ্রুত সময়ে। ইতিমধ্যে <span className="text-emerald-400 font-semibold">{demoCredentials.clientCount} শিক্ষাপ্রতিষ্ঠান</span> আমাদের সফটওয়্যারটি ব্যবহার করছেন।
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={onOpenDemoModal}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-sm sm:text-base"
          >
            <span>সরাসরি ডেমো এক্সপ্লোর করুন</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenVideoModal}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-200 glass-panel hover:bg-slate-800/80 hover:border-emerald-500/40 hover:text-white transition-all cursor-pointer text-sm sm:text-base"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            <span>ভিডিও টিউটোরিয়াল দেখুন</span>
          </button>

          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-400 hover:text-emerald-300 hover:bg-white/5 transition-colors text-sm"
          >
            <span>পরামর্শ ও কোটেশন</span>
          </button>
        </div>

        {/* Micro-Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-16 text-center">
          <div className="glass-panel p-3.5 rounded-xl">
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">৩০০+</div>
            <div className="text-xs text-slate-400 mt-0.5">সফল শিক্ষা প্রতিষ্ঠান</div>
          </div>
          <div className="glass-panel p-3.5 rounded-xl">
            <div className="text-xl sm:text-2xl font-bold text-teal-400 font-mono">১০০%</div>
            <div className="text-xs text-slate-400 mt-0.5">অটোমেটেড রেজাল্ট শিট</div>
          </div>
          <div className="glass-panel p-3.5 rounded-xl">
            <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono">৩ সেকেন্ড</div>
            <div className="text-xs text-slate-400 mt-0.5">অভিভাবক SMS নোটিফিকেশন</div>
          </div>
          <div className="glass-panel p-3.5 rounded-xl">
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">২৪/৭</div>
            <div className="text-xs text-slate-400 mt-0.5">লাইভ কাস্টমার সাপোর্ট</div>
          </div>
        </div>

        {/* Section Divider Kicker from image_fdb9d23d.png */}
        <div className="text-center mb-8">
          <div className="inline-block relative">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              নিয়ে চলি, সাফল্যের উচ্চতায়
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto mt-2 rounded-full" />
          </div>
        </div>

        {/* The 4 Highlight Cards from image_fdb9d23d.png */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="glass-panel glass-card-hover p-6 rounded-2xl flex flex-col justify-between border border-white/10 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">হিসাব বিভাগ নিয়ন্ত্রণে</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                সহজ, নিরাপদ ও ঝুঁকিমুক্ত হিসাব ব্যবস্থাপনা। আয়-ব্যয়ের পুঙ্খানুপুঙ্খ অডিট লেজার।
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-emerald-400 font-medium">
              <span>বিকাশ/নগদ অটো পেমেন্ট</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel glass-card-hover p-6 rounded-2xl flex flex-col justify-between border border-white/10 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">দ্রুত ফলাফল প্রকাশ</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                অতিরিক্ত ঝামেলা ছাড়াই নির্ভুল ও সময়মতো ফলাফল প্রকাশ এবং গ্রেডশিট প্রস্তুত।
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-teal-400 font-medium">
              <span>সিট প্ল্যান ও এডমিট কার্ড</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel glass-card-hover p-6 rounded-2xl flex flex-col justify-between border border-white/10 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <MessageSquareText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">দ্রুত রশীদ ও এসএমএস</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                মুহূর্তেই ডিজিটাল মানি রশিদ তৈরি করুন এবং অভিভাবকদের পেমেন্ট এসএমএস পাঠান।
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-cyan-400 font-medium">
              <span>বাংলা বাল্ক এসএমএস</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="glass-panel glass-card-hover p-6 rounded-2xl flex flex-col justify-between border border-white/10 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">লাইব্রেরি ম্যানেজমেন্ট</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                বই ইস্যু-রিটার্ন ও জরিমানা সহজে নিয়ন্ত্রণ এবং বারকোড ক্যাটালগিং সিস্টেম।
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-emerald-400 font-medium">
              <span>বারকোড বুক ট্র্যাকিং</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
