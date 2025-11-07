import React from 'react';
import { Wrench } from 'lucide-react';
import { BRAND } from '../constants/brand';

export function Logo({ size = 'md', showIcon = true, className = '' }) {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
    xl: 'text-5xl',
  };

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 36,
    xl: 48,
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showIcon && (
        <div
          className="rounded-xl p-2 flex items-center justify-center"
          style={{ backgroundColor: BRAND.colors.primary }}
        >
          <Wrench
            size={iconSizes[size]}
            style={{ color: BRAND.colors.dark }}
            className="rotate-45"
          />
        </div>
      )}
      <div className={`font-extrabold ${sizes[size]} tracking-tight`}>
        <span className="text-white">Fix</span>
        <span style={{ color: BRAND.colors.primary }}>Now</span>
      </div>
    </div>
  );
}
