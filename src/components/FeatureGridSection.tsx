import React, { useState } from 'react';
import { 
  CreditCard, 
  PieChart, 
  CalendarDays, 
  Users, 
  Wallet, 
  Award, 
  Search, 
  Video, 
  BookCheck, 
  Send, 
  Headphones, 
  ShieldCheck, 
  Sliders, 
  FileSpreadsheet, 
  Library, 
  TrendingUp,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { sixteenFeatures } from '../data/emsData.ts';

const iconMap: Record<string, React.ReactNode> = {
  CreditCard: <CreditCard className="w-5 h-5" />,
  PieChart: <PieChart className="w-5 h-5" />,
  CalendarDays: <CalendarDays className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Wallet: <Wallet className="w-5 h-5" />,
  Award: <Award className="w-5 h-5" />,
  Search: <Search className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />,
  BookCheck: <BookCheck className="w-5 h-5" />,
  Send: <Send className="w-5 h-5" />,
  Headphones: <Headphones className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Sliders: <Sliders className="w-5 h-5" />,
  FileSpreadsheet: <FileSpreadsheet className="w-5 h-5" />,
  Library: <Library className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
};

export const FeatureGridSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFeatures = sixteenFeatures.filter(feature => {
    const matchesFilter = filter === 'all' || feature.category === filter;
    const matchesSearch = feature.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          feature.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="features" className="py-16 md:py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Red Accent Bar matching user attachment image_c956ccd1.png */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-0.5 flex-1 max-w-[120px] bg-rose-500 rounded-full" />
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight px-2">
              ফিচারসমূহ
            </h2>
            <div className="h-0.5 flex-1 max-w-[120px] bg-rose-500 rounded-full" />
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            শিক্ষা প্রতিষ্ঠানের সার্বিক কার্যক্রমকে ডিজিটাল রূপ দিতে জেবিডি এডুকেশন সফটওয়্যারে রয়েছে এই ১৬টি বিশেষ ফিচার।
          </p>
        </div>

        {/* Filter and Search Bar with responsive styling */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 glass-premium rounded-2xl border border-slate-200 overflow-x-auto max-w-full">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`btn-responsive px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              সবগুলো (১৬)
            </button>
            <button
              type="button"
              onClick={() => setFilter('academic')}
              className={`btn-responsive px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                filter === 'academic'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              একাডেমিক (৫)
            </button>
            <button
              type="button"
              onClick={() => setFilter('finance')}
              className={`btn-responsive px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                filter === 'finance'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ফাইন্যান্স (৪)
            </button>
            <button
              type="button"
              onClick={() => setFilter('admin')}
              className={`btn-responsive px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                filter === 'admin'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              প্রশাসন ও রেকর্ড (৪)
            </button>
            <button
              type="button"
              onClick={() => setFilter('communication')}
              className={`btn-responsive px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                filter === 'communication'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              যোগাযোগ ও সাপোর্ট (৩)
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="ফিচার খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* 16 Features Grid with Red, Blue, Green accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredFeatures.map((feat, index) => {
            // Alternate subtle color accents: Green, Blue, Red
            const isRed = index % 3 === 0;
            const isBlue = index % 3 === 1;
            const isGreen = index % 3 === 2;

            return (
              <div
                key={feat.id}
                className="glass-card-interactive p-5 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all group-hover:scale-110 ${
                    isRed 
                      ? 'bg-rose-50 text-rose-600 border border-rose-200 group-hover:bg-rose-600 group-hover:text-white' 
                      : isBlue
                      ? 'bg-blue-50 text-blue-600 border border-blue-200 group-hover:bg-blue-600 group-hover:text-white'
                      : 'bg-emerald-50 text-emerald-600 border border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white'
                  }`}>
                    {iconMap[feat.iconName] || <Sparkles className="w-5 h-5" />}
                  </div>

                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      isRed ? 'bg-rose-500' : isBlue ? 'bg-blue-500' : 'bg-emerald-500'
                    }`} />
                    <h3 className={`font-bold text-slate-900 text-base transition-colors ${
                      isRed ? 'group-hover:text-rose-600' : isBlue ? 'group-hover:text-blue-600' : 'group-hover:text-emerald-600'
                    }`}>
                      {feat.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className={`font-semibold font-mono ${
                    isRed ? 'text-rose-600' : isBlue ? 'text-blue-600' : 'text-emerald-600'
                  }`}>
                    {feat.category === 'academic' && 'একাডেমিক'}
                    {feat.category === 'finance' && 'ফাইন্যান্স'}
                    {feat.category === 'admin' && 'প্রশাসন'}
                    {feat.category === 'communication' && 'কমিউনিকেশন'}
                  </span>
                  <span className="text-slate-400">অটোমেটেড মডিউল</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
