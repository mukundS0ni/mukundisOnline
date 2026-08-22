import React from 'react';

export const BrandLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 36 }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer sharp container */}
        <rect width="40" height="40" rx="8" fill="#121212" stroke="#27272a" strokeWidth="1.5" />
        
        {/* Monogram M (Blue Accent) */}
        <path
          d="M9 29V11L16.5 21.5L24 11V29"
          stroke="#2563eb"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Monogram S (Red Accent) */}
        <path
          d="M26 28.5C28.5 28.5 30.5 27 30.5 25C30.5 23 28.5 22 26 21.5C23.5 21 22.5 19.5 22.5 18C22.5 16.5 24.5 15 27 15C28.8 15 30.5 16 30.5 16"
          stroke="#dc2626"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Green Status Dot */}
        <circle cx="33" cy="8" r="2.5" fill="#16a34a" />
      </svg>
    </div>
  );
};
