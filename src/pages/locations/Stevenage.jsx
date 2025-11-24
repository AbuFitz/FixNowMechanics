import React from 'react';
import LocationTemplate from '../../components/LocationTemplate';
import { getLocationBySlug } from '../../constants/locations';

export default function StevenagePage() {
  const location = getLocationBySlug('stevenage');
  return <LocationTemplate location={location} />;
}
