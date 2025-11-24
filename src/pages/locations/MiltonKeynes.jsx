import React from 'react';
import LocationTemplate from '../../components/LocationTemplate';
import { getLocationBySlug } from '../../constants/locations';

export default function MiltonKeynesPage() {
  const location = getLocationBySlug('milton-keynes');
  return <LocationTemplate location={location} />;
}
