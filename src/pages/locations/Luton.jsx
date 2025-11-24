import React from 'react';
import LocationTemplate from '../../components/LocationTemplate';
import { getLocationBySlug } from '../../constants/locations';

export default function LutonPage() {
  const location = getLocationBySlug('luton');
  return <LocationTemplate location={location} />;
}
