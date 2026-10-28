import React, { useState } from 'react';
import { 
  PhoneCall, 
  Send, 
  CheckCircle, 
  School, 
  User, 
  Phone, 
  MapPin, 
  Users, 
  Sparkles,
  MessageCircle
} from 'lucide-react';

export const ContactConsultation: React.FC = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    contactPerson: '',
    designation: 'প্রধান শিক্ষক / অধ্যক্ষ',
    phone: '',
    district: '',
    studentCount: '৬৫০',
    institutionType: 'হাই স্কুল ও কলেজ',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.schoolName || !formData.phone) return;

    const ref = `JBD-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Information & Trust */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-premium text-xs font-bold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-slate-700">ফ্রি কনসালটেশন ও ডেমো রিকোয়েস্ট</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              আপনার প্রতিষ্ঠানের জন্য ডিজিটাল রূপান্তর শুরু করুন
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              ফর্মটি পূরণ করুন অথবা আমাদের হটলাইনে সরাসরি কথা বলুন। জেবিডি আইটির এডুকেশন টেকনোলজি এক্সপার্ট টিম আপনার প্রতিষ্ঠানের সাথে কথা বলে সম্পূর্ণ ফ্রি পরিকল্পনা ও ট্রায়াল প্রদান করবে।
            </p>

            {/* Direct Contact Cards in RGB */}
            <div className="space-y-3 pt-1">
              <a 
                href="tel:+8801711000000"
                className="btn-responsive flex items-center gap-3.5 p-3.5 rounded-2xl glass-premium hover:border-blue-400 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block font-medium">সরাসরি ২৪/৭ হটলাইন:</span>
                  <span className="font-mono font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                    +৮৮০১৭১১-০০০০০০ / ০১৯১১-০০০০০০
                  </span>
                </div>
              </a>

              <a 
                href="https://wa.me/8801711000000?text=Hello,%20I%20am%20interested%20in%20JBD%20Education%20Management%20Software"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-responsive flex items-center gap-3.5 p-3.5 rounded-2xl glass-premium hover:border-emerald-400 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block font-medium">হোয়াটসঅ্যাপ অফিসিয়াল চ্যাট:</span>
                  <span className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                    তাত্ক্ষণিক হোয়াটসঅ্যাপ মেসেজ পাঠান
                  </span>
                </div>
              </a>
            </div>

            <div className="p-4 rounded-2xl glass-premium text-xs text-slate-600 space-y-1">
              <div className="text-emerald-700 font-bold">✓ ১০০% ডেটা নিরাপত্তা ও গোপনীয়তা সংরক্ষিত</div>
              <div>✓ কোনো গোপন চার্জ নেই · বিনামূল্যে অনবোর্ডিং ট্রেইনিং সুবিধা</div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="glass-premium rounded-3xl p-6 sm:p-9 border border-white shadow-xl bg-white/90">
              
              {submitted ? (
                <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">ধন্যবাদ! আপনার অনুরোধটি গৃহীত হয়েছে</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    আপনার ট্র্যাকিং রেফারেন্স আইডি: <span className="font-mono font-bold text-emerald-700">{bookingRef}</span>। আমাদের সিনিয়র প্রতিনিধি দ্রুত আপনার সাথে যোগাযোগ করবেন।
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-responsive px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    নতুন অনুরোধ পাঠান
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">পরামর্শ ও ফ্রি ট্রায়াল বুকিং ফর্ম</h3>
                    <p className="text-xs text-slate-500">তথ্যগুলো পূরণ করে সাবমিট করুন</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="text-slate-700 block mb-1 font-bold">
                        শিক্ষা প্রতিষ্ঠানের নাম <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <School className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="উদাঃ মিরপুর ক্যাডেট স্কুল"
                          value={formData.schoolName}
                          onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-slate-700 block mb-1 font-bold">
                        আপনার নাম ও পদবী <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="উদাঃ মোঃ রফিকুল ইসলাম (অধ্যক্ষ)"
                          value={formData.contactPerson}
                          onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-slate-700 block mb-1 font-bold">
                        মোবাইল নম্বর <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          placeholder="০১৭XXXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-slate-700 block mb-1 font-bold">
                        জেলা ও উপজেলা
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="উদাঃ ঢাকা, সাভার"
                          value={formData.district}
                          onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-slate-700 block mb-1 font-bold">
                        মোট শিক্ষার্থী সংখ্যা
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="number"
                          placeholder="উদাঃ ৭৫০"
                          value={formData.studentCount}
                          onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-slate-700 block mb-1 font-bold">
                        প্রতিষ্ঠানের ধরন
                      </label>
                      <select
                        value={formData.institutionType}
                        onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-500"
                      >
                        <option value="হাই স্কুল ও কলেজ">হাই স্কুল ও কলেজ</option>
                        <option value="প্রাথমিক ও কিন্ডারগার্টেন">প্রাথমিক ও কিন্ডারগার্টেন</option>
                        <option value="মাদ্রাসা (কওমি/আলিয়া)">মাদ্রাসা (কওমি/আলিয়া)</option>
                        <option value="কারিগরি ও ভোকেশনাল ইনস্টিটিউট">কারিগরি ও ভোকেশনাল ইনস্টিটিউট</option>
                        <option value="কোচিং ও ট্রেনিং সেন্টার">কোচিং ও ট্রেনিং সেন্টার</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-700 block mb-1 text-xs font-bold">
                      কোনো বিশেষ রিকোয়ারমেন্টস বা বার্তা
                    </label>
                    <textarea
                      rows={3}
                      placeholder="আপনার প্রতিষ্ঠানের বিশেষ কোনো ফিচার বা মডিউল প্রয়োজন হলে এখানে লিখতে পারেন..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-responsive w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-blue-600 to-emerald-600 hover:from-rose-500 hover:via-blue-500 hover:to-emerald-500 text-white font-bold text-sm shadow-md shadow-blue-500/20 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>বিনামূল্যে পরামর্শ ও ফ্রি ট্রায়াল বুক করুন</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
