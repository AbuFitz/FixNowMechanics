import React from 'react';
import LocationTemplate from '../../components/LocationTemplate';
import { getLocationBySlug } from '../../constants/locations';

export default function AylesburyPage() {
  const location = getLocationBySlug('aylesbury');
  return <LocationTemplate location={location} />;
}
