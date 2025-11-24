import React from 'react';
import LocationTemplate from '../../components/LocationTemplate';
import { getLocationBySlug } from '../../constants/locations';

export default function WatfordPage() {
  const location = getLocationBySlug('watford');
  return <LocationTemplate location={location} />;
}
