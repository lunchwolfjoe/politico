'use client'

import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function CampaignLogo({ className = '', size = 40, showText = false }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 60 70" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Shield Outline */}
        <path 
          d="M30 2C20 6 10 8 2 8V32C2 48 15 58 30 68C45 58 58 48 58 32V8C50 8 40 6 30 2Z" 
          fill="#B91C1C" // Red-700 
        />
        
        {/* Inner Shield */}
        <path 
          d="M30 7C22 10 14 12 7 12V32C7 45 18 53 30 61C42 53 53 45 53 32V12C46 12 38 10 30 7Z" 
          fill="#FFFFFF" 
        />
        
        {/* Star (Military Service) */}
        <path 
          d="M30 16L33.1 25.5H43.3L35.1 31.5L38.2 41L30 35L21.8 41L24.9 31.5L16.7 25.5H26.9L30 16Z" 
          fill="#1E3A8A" // Blue-900
        />

        {/* Circuit Lines (Tech Innovation) */}
        <path 
          d="M18 45H42M18 50H42M25 45V55M35 45V55M18 55H42" 
          stroke="#1E3A8A" 
          strokeWidth="2"
          strokeLinecap="round" 
        />
      </svg>
      
      {showText && (
        <div className="ml-3">
          <div className="text-lg font-bold leading-tight text-gray-900">Leadership Forged in Service</div>
          <div className="text-xs leading-tight text-gray-600">Innovation Built on Experience</div>
        </div>
      )}
    </div>
  );
} 