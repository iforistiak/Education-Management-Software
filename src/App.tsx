/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSlider } from './components/HeroSlider.tsx';
import { CoreHighlightCards } from './components/CoreHighlightCards.tsx';
import { FeatureGridSection } from './components/FeatureGridSection.tsx';
import { ThreePillarsSection } from './components/ThreePillarsSection.tsx';
import { WebsiteModulesSection } from './components/WebsiteModulesSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactConsultation } from './components/ContactConsultation.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const handleScrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans selection:bg-rose-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenContact={handleScrollToContact} />

      {/* Main Content */}
      <main className="flex-1">
        {/* ১. সরল ও দৃষ্টিনন্দন হিরো স্লাইডার (Hero Slider) */}
        <HeroSlider onOpenContact={handleScrollToContact} />

        {/* ২. ৪টি প্রধান প্রাতিষ্ঠানিক সুবিধা (Highlights: Accounts, Results, Receipts, Library) */}
        <CoreHighlightCards />

        {/* ৩. ১৬টি বিশেষ ফিচার গ্রিড (Features Grid from image_c956ccd1.png) */}
        <FeatureGridSection />

        {/* ৪. ৩টি প্রধান ব্যবস্থাপনা স্তম্ভ (Academic, Finance, Website Pillars) */}
        <ThreePillarsSection />

        {/* ৫. ওয়েবসাইট ও ম্যানেজমেন্টের অভ্যন্তরীণ মডিউলসমূহ (Modules from image_cd6c4904.png) */}
        <WebsiteModulesSection />

        {/* ৬. সাধারণ প্রশ্নোত্তর (10 FAQs from image_be50b48d.png) */}
        <FaqSection />

        {/* ৭. পরামর্শ ও ফ্রি ট্রায়াল বুকিং ফর্ম (Consultation Booking) */}
        <ContactConsultation />
      </main>

      {/* সরল ও পেশাদার ফুটার (Simplified Footer) */}
      <Footer />
    </div>
  );
}
