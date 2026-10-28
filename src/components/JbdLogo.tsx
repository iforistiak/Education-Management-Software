import React from 'react';

interface JbdLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const JbdLogo: React.FC<JbdLogoProps> = ({ 
  size = 'md', 
  showSubtitle = true,
  className = '' 
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Creative Geometric RGB JBD Emblem */}
      <div className={`relative ${iconSizes[size]} shrink-0 transition-transform duration-300 hover:scale-105`}>
        <svg 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* Rounded Glass Shield with Red, Blue, Green Gradient */}
          <rect width="48" height="48" rx="14" fill="url(#jbd-rgb-grad)" />
          <rect x="0.5" y="0.5" width="47" height="47" rx="13.5" stroke="rgba(255,255,255,0.6)" />

          {/* Academic Cap / Mortarboard in White */}
          <path 
            d="M24 9.5L37 16.5L24 23.5L11 16.5L24 9.5Z" 
            fill="#FFFFFF" 
            fillOpacity="0.95"
          />
          <path 
            d="M37 16.5V23.5C37 24 36.5 24.5 36 24.5" 
            stroke="#FEF08A" 
            strokeWidth="1.8" 
            strokeLinecap="round"
          />

          {/* Letter 'J' in White / Red Glow Hook */}
          <path 
            d="M17 23V30.5C17 33.5 14.8 35 13 34" 
            stroke="#FFFFFF" 
            strokeWidth="3.2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />

          {/* Letter 'B' with Central Division */}
          <path 
            d="M22 23.5H27C28.8 23.5 30 24.6 30 26.2C30 27.8 28.8 28.7 27 28.7H22V23.5ZM22 28.7H28C29.8 28.7 31 29.8 31 31.8C31 33.8 29.8 35 28 35H22V28.7Z" 
            fill="#FFFFFF" 
            fillOpacity="0.95"
          />

          {/* Letter 'D' Tech Spark Dot in Gold */}
          <circle cx="35" cy="33.5" r="2.2" fill="#34D399" />

          {/* Gradients */}
          <defs>
            <linearGradient id="jbd-rgb-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E11D48" />    {/* Red */}
              <stop offset="0.5" stopColor="#2563EB" /> {/* Blue */}
              <stop offset="1" stopColor="#059669" />   {/* Green */}
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography Wordmark with Red, Blue, Green accents */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-extrabold tracking-tight font-sans ${textSizes[size]}`}>
            <span className="text-rose-600">J</span>
            <span className="text-blue-600">B</span>
            <span className="text-emerald-600">D</span>
          </span>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-900 text-white tracking-wider">
            IT
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[11px] font-medium text-slate-500 tracking-normal mt-0.5 whitespace-nowrap">
            এডুকেশন ম্যানেজমেন্ট সফটওয়্যার
          </span>
        )}
      </div>
    </div>
  );
};
