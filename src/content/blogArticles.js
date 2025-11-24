import React from 'react';

// Export all blog article components
export { WarningLightsGuide } from './blogArticles/WarningLightsGuide';
export { MobileMechanicVsGarage } from './blogArticles/MobileMechanicVsGarage';
export { BrakeWarningSigns } from './blogArticles/BrakeWarningSigns';

// Map slug to component
const ArticlePlaceholder = () => <p className="text-white/80">Article coming soon...</p>;

export const slugToComponentMap = {
  'warning-lights-guide': 'WarningLightsGuide',
  'mobile-mechanic-vs-garage': 'MobileMechanicVsGarage',
  'brake-warning-signs': 'BrakeWarningSigns',
  'car-battery-lifespan': ArticlePlaceholder,
  'service-intervals-explained': ArticlePlaceholder,
  'winter-car-preparation': ArticlePlaceholder,
  'engine-light-diagnosis': ArticlePlaceholder,
  'suspension-noise-guide': ArticlePlaceholder,
  'pre-purchase-inspection': ArticlePlaceholder,
};
