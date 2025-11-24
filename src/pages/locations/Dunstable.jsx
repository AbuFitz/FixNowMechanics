import React from 'react';
import LocationTemplate from '../../components/LocationTemplate';
import { getLocationBySlug } from '../../constants/locations';

export default function DunstablePage() {
  const location = getLocationBySlug('dunstable');
  return <LocationTemplate location={location} />;
}
