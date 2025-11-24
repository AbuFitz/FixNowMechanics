import React from 'react';
import LocationTemplate from '../../components/LocationTemplate';
import { getLocationBySlug } from '../../constants/locations';

export default function StAlbansPage() {
  const location = getLocationBySlug('st-albans');
  return <LocationTemplate location={location} />;
}
