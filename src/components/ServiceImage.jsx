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

// Hero image with scenic car photo from Pexels (free to use)
export function HeroImage({ className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`}>
      {/* Car on scenic mountain road - Photo by Garvin St. Villier from Pexels */}
      <img
        src="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        alt="Car driving through scenic mountain landscape"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

      {/* Brand accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent" />
    </div>
  );
}
