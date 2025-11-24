import React from 'react';
import LocationTemplate from '../../components/LocationTemplate';
import { getLocationBySlug } from '../../constants/locations';

export default function HatfieldPage() {
  const location = getLocationBySlug('hatfield');
  return <LocationTemplate location={location} />;
}
