import React from 'react';
import {  Gauge, Wrench, BatteryCharging, Droplet, Settings2 } from 'lucide-react';
import { BRAND } from '../constants/brand';

// Service placeholder images as SVG components
export function ServiceImage({ service, className = '' }) {
  const getServiceIcon = () => {
    switch (service) {
      case 'diagnostics':
        return Gauge;
      case 'brakes':
        return Wrench;
      case 'battery':
        return BatteryCharging;
      case 'oil-service':
        return Droplet;
      case 'suspension':
        return Settings2;
      default:
        return Wrench;
    }
  };

  const Icon = getServiceIcon();

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 ${className}`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-${service}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${service})`} />
        </svg>
      </div>

      {/* Icon */}
      <div className="relative h-full w-full flex items-center justify-center">
        <Icon
          size={80}
          strokeWidth={1.5}
          style={{ color: BRAND.colors.primary }}
          className="opacity-80"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
      />
    </div>
  );
}

// Hero placeholder image
export function HeroImage({ className = '' }) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl ${className}`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill={BRAND.colors.primary}/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Center content */}
      <div className="relative h-full flex flex-col items-center justify-center p-12 text-center">
        <div
          className="mb-6 w-32 h-32 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${BRAND.colors.primary}20` }}
        >
          <Wrench
            size={64}
            style={{ color: BRAND.colors.primary }}
            className="rotate-45"
          />
        </div>
        <h3 className="text-white/40 text-xl font-semibold mb-2">Professional Mobile Mechanic</h3>
        <p className="text-white/30 text-sm">Upload your hero image here</p>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
    </div>
  );
}
