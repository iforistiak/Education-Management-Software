import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles,
  BookOpenCheck,
  Calculator,
  GraduationCap,
  BellRing,
  Award,
  ShieldCheck
} from 'lucide-react';

interface HeroSliderProps {
  onOpenContact: () => void;
}

interface SimpleSlide {
  id: string;
  badge: string;
  badgeColor: 'red' | 'blue' | 'green';
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  statNumber: string;
  statLabel: string;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenContact }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Equalized slides content for identical height
  const slides: SimpleSlide[] = [
    {
      id: 'slide-1',
      badge: 'স্মার্ট একাডেমি ও ভর্তি',
      badgeColor: 'green',
      title: 'ভর্তি থেকে প্রমোশন পর্যন্ত',
      subtitle: 'সম্পূর্ণ অটোমেটেড ডিজিটাল সমাধান',
      description: 'শিক্ষার্থী ডাটাবেজ, অনলাইন আবেদন ফরম, সেকশন বণ্টন এবং শিক্ষাবর্ষ পরিবর্তনের এক ক্লিকে ক্লাস প্রমোশনের আধুনিক ক্লাউড সিস্টেম।',
      features: ['অনলাইন এডমিশন ফরম', 'ডিজিটাল স্টুডেন্ট প্রোফাইল', 'স্বয়ংক্রিয় ক্লাস প্রমোশন'],
      statNumber: '১০০%',
      statLabel: 'পেপারলেস অটোমেশন'
    },
    {
      id: 'slide-2',
      badge: 'হিসাব ও ফি কালেকশন',
      badgeColor: 'blue',
      title: 'সহজ, নিরাপদ ও ঝুঁকিমুক্ত',
      subtitle: 'প্রাতিষ্ঠানিক ডিজিটাল হিসাব ব্যবস্থা',
      description: 'টিউশন ফি, ভর্তি ফি ও অন্যান্য বকেয়া ফি সহজে সংগ্রহ করুন। প্রতি লেনদেনের সাথে সাথে স্বয়ংক্রিয় ডিজিটাল মানি রিসিট ও অডিট লেজার তৈরি হয়।',
      features: ['অনলাইন ও ক্যাশ ফি কালেকশন', 'দৈনিক আয়-ব্যয় হিসাব', 'স্বয়ংক্রিয় মানি রিসিট'],
      statNumber: '৩০০+',
      statLabel: 'শিক্ষা প্রতিষ্ঠানের আস্থা'
    },
    {
      id: 'slide-3',
      badge: 'ফলাফল ও মূল্যায়ন',
      badgeColor: 'red',
      title: 'ঝামেলাহীন নির্ভুল ফলাফল প্রকাশ',
      subtitle: 'স্বয়ংক্রিয় মার্কশিট ও গ্রেডিং সিস্টেম',
      description: 'নম্বর এন্ট্রি করলেই স্বয়ংক্রিয়ভাবে মেধা তালিকা, সিট প্ল্যান, এডমিট কার্ড, টেবুলেশন শিট এবং গ্রেড পয়েন্ট সহ রেজাল্ট কার্ড প্রস্তুত।',
      features: ['সিট প্ল্যান ও এডমিট কার্ড', 'জিপিএ ৫.০০ গ্রেডিং শিট', 'এক ক্লিকে রেজাল্ট পাবলিশ'],
      statNumber: '০%',
      statLabel: 'ভুলের কোনো সুযোগ নেই'
    },
    {
      id: 'slide-4',
      badge: 'স্মার্ট হাজিরা ও নোটিশ',
      badgeColor: 'green',
      title: 'ডিজিটাল স্মার্ট হাজিরা ব্যবস্থা',
      subtitle: 'স্কুল ও অভিভাবকদের সার্বক্ষণিক সংযোগ',
      description: 'স্মার্ট আইডি কার্ড বা বায়োমেট্রিক ডিভাইসের মাধ্যমে শিক্ষার্থী ও শিক্ষকদের দৈনিক উপস্থিতি রেকর্ড এবং দ্রুত নোটিশ প্রেরণের সুবিধা।',
      features: ['দৈনিক স্মার্ট হাজিরা', 'জরুরি ছুটির নোটিশ', 'শিক্ষক-কর্মচারী উপস্থিতি'],
      statNumber: '২৪/৭',
      statLabel: 'নিবেদিত সাপোর্ট সুবিধা'
    }
  ];

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const active = slides[currentSlide];

  return (
    <section 
      className="relative pt-8 pb-14 md:pt-12 md:pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Floating Animated Red, Blue, Green Luminous Spheres */}
      <div className="absolute -top-12 left-12 w-80 h-80 bg-rose-500/10 blur-[110px] pointer-events-none rounded-full animate-float-gentle" />
      <div className="absolute top-16 right-12 w-80 h-80 bg-blue-500/10 blur-[110px] pointer-events-none rounded-full animate-float-delayed" />
      <div className="absolute -bottom-8 left-1/3 w-80 h-80 bg-emerald-500/10 blur-[110px] pointer-events-none rounded-full animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating Glassmorphic Top Kicker Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-badge-neutral text-xs font-semibold shadow-xs animate-float">
            <span className="w-2 h-2 rounded-full bg-rose-500 shadow-sm" />
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-sm" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm" />
            <span className="text-slate-700">স্মার্ট স্কুলের পূর্ণাঙ্গ সমাধান এখন আপনার হাতের মুঠোয়</span>
          </div>
        </div>

        {/* Fixed Uniform-Height 2-Column Hero Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Fixed Identical Minimum Height for Zero Shift */}
          <div className="lg:col-span-7 flex flex-col justify-between min-h-[440px] sm:min-h-[400px]">
            
            {/* Slide Category Glassmorphic Badge */}
            <div>
              <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold transition-all ${
                active.badgeColor === 'red'
                  ? 'glass-badge-red'
                  : active.badgeColor === 'blue'
                  ? 'glass-badge-blue'
                  : 'glass-badge-green'
              }`}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>{active.badge}</span>
              </span>
            </div>

            {/* Slide Headline with Fixed Visual Height */}
            <div className="my-auto py-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] min-h-[76px] sm:min-h-[105px]">
                {active.title}
                <span className={`block mt-1 font-bold ${
                  active.badgeColor === 'red'
                    ? 'text-rose-600'
                    : active.badgeColor === 'blue'
                    ? 'text-blue-600'
                    : 'text-emerald-600'
                }`}>
                  {active.subtitle}
                </span>
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl min-h-[48px] sm:min-h-[48px]">
                {active.description}
              </p>
            </div>

            {/* 3 Key Feature Checkmarks (Equal Heights) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3">
              {active.features.map((feat, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl glass-badge-neutral text-xs font-semibold text-slate-800"
                >
                  <CheckCircle2 className={`w-4 h-4 shrink-0 ${
                    active.badgeColor === 'red'
                      ? 'text-rose-600'
                      : active.badgeColor === 'blue'
                      ? 'text-blue-600'
                      : 'text-emerald-600'
                  }`} />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>

            {/* Responsive Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenContact}
                className="btn-responsive inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 via-blue-600 to-emerald-600 hover:from-rose-500 hover:via-blue-500 hover:to-emerald-500 text-white font-bold text-sm shadow-md shadow-blue-500/20 cursor-pointer"
              >
                <span>পরামর্শ ও ফ্রি ট্রায়াল নিন</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#features"
                className="btn-responsive inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-badge-neutral hover:bg-white text-slate-700 hover:text-slate-900 font-semibold text-sm shadow-2xs"
              >
                <span>ফিচারসমূহ দেখুন</span>
              </a>
            </div>

            {/* Slider Controls (Simple & Uniform) */}
            <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-200">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      currentSlide === idx 
                        ? idx === 0 ? 'w-8 bg-emerald-600' : idx === 1 ? 'w-8 bg-blue-600' : idx === 2 ? 'w-8 bg-rose-600' : 'w-8 bg-emerald-600'
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    title={`Slide ${idx + 1}`}
                  />
                ))}
                <span className="ml-2 text-xs font-mono text-slate-500">
                  ০{currentSlide + 1} / ০{slides.length}
                </span>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                  className="btn-responsive p-2 rounded-xl glass-badge-neutral text-slate-700 hover:text-slate-900 cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  className="btn-responsive p-2 rounded-xl glass-badge-neutral text-slate-700 hover:text-slate-900 cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Fixed Height Glassmorphic Showcase with Floating Badges */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="glass-premium rounded-3xl p-6 sm:p-7 border border-white/90 shadow-xl relative overflow-hidden flex flex-col justify-between h-full min-h-[440px] sm:min-h-[400px]">
              
              {/* Top RGB Accent Ribbon */}
              <div className="h-1.5 w-full gradient-rgb-bar rounded-full mb-4" />

              {/* Central Card Stat Showcase */}
              <div className="p-5 rounded-2xl bg-white/95 border border-slate-100 shadow-sm text-center mb-4">
                <div className="text-4xl sm:text-5xl font-extrabold font-mono tracking-tight text-slate-900">
                  <span className={active.badgeColor === 'red' ? 'text-rose-600' : active.badgeColor === 'blue' ? 'text-blue-600' : 'text-emerald-600'}>
                    {active.statNumber}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-600 mt-1 uppercase tracking-wider">
                  {active.statLabel}
                </div>
                <div className="text-xs text-emerald-700 font-semibold mt-1">
                  ✓ জেবিডি আইটি এডুকেশন ম্যানেজমেন্ট
                </div>
              </div>

              {/* Floating RGB Glassmorphic Badges */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 p-3 rounded-2xl glass-badge-red animate-float">
                  <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-rose-950">শতভাগ নির্ভুল রেজাল্ট শিট</h4>
                    <p className="text-[11px] text-rose-800">স্বয়ংক্রিয় জিপিএ ৫.০০ ও মেধা তালিকা</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl glass-badge-blue animate-float-delayed">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-blue-950">স্বচ্ছ ডিজিটাল একাউন্টিং</h4>
                    <p className="text-[11px] text-blue-800">ফি কালেকশন ও আয়-ব্যয় অডিট লেজার</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl glass-badge-green animate-float-gentle">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <BookOpenCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-emerald-950">৩০০+ শিক্ষা প্রতিষ্ঠানের আস্থা</h4>
                    <p className="text-[11px] text-emerald-800">সারাদেশে স্বনামধন্য স্কুল ও কলেজ</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
