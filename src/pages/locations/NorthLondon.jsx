import React from 'react';
import LocationTemplate from '../../components/LocationTemplate';
import { getLocationBySlug } from '../../constants/locations';

export default function NorthLondonPage() {
  const location = getLocationBySlug('north-london');
  return <LocationTemplate location={location} />;
}
