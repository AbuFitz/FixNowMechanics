// Location page data and configurations
export const LOCATIONS = [
  {
    slug: 'watford',
    name: 'Watford',
    title: 'Mobile Mechanic Watford',
    metaDescription: 'Professional mobile mechanic service in Watford. Diagnostics, brakes, servicing & repairs at your location. Call 07354 915941 for same-day service.',
    postcodes: ['WD17', 'WD18', 'WD19', 'WD24', 'WD25'],
    localAreas: [
      'Watford Town Centre',
      'North Watford',
      'West Watford',
      'Oxhey',
      'Garston',
      'Holywell',
      'Bushey',
      'Carpenders Park',
      'Croxley Green'
    ]
  },
  {
    slug: 'st-albans',
    name: 'St Albans',
    title: 'Mobile Mechanic St Albans',
    metaDescription: 'Professional mobile mechanic service in St Albans. Diagnostics, brakes, servicing & repairs at your location. Call 07354 915941 for same-day service.',
    postcodes: ['AL1', 'AL2', 'AL3', 'AL4'],
    localAreas: [
      'St Albans City Centre',
      'Fleetville',
      'Marshalswick',
      'The Camp',
      'Jersey Farm',
      'London Colney',
      'Sopwell',
      'Park Street',
      'Bricket Wood',
      'Chiswell Green',
      'Sandridge',
      'Wheathampstead'
    ]
  },
  {
    slug: 'luton',
    name: 'Luton',
    title: 'Mobile Mechanic Luton',
    metaDescription: 'Professional mobile mechanic service in Luton. Diagnostics, brakes, servicing & repairs at your location. Call 07354 915941 for same-day service.',
    postcodes: ['LU1', 'LU2', 'LU3', 'LU4', 'LU5'],
    localAreas: [
      'Luton Town Centre',
      'Bury Park',
      'High Town',
      'Leagrave',
      'Stopsley',
      'Round Green',
      'Farley Hill',
      'Limbury',
      'Sundon Park',
      'Bramingham',
      'Lewsey',
      'Wigmore'
    ]
  },
  {
    slug: 'dunstable',
    name: 'Dunstable',
    title: 'Mobile Mechanic Dunstable',
    metaDescription: 'Professional mobile mechanic service in Dunstable. Diagnostics, brakes, servicing & repairs at your location. Call 07354 915941 for same-day service.',
    postcodes: ['LU5', 'LU6', 'LU7'],
    localAreas: [
      'Dunstable Town Centre',
      'Beecroft',
      'Downs',
      'Northfields',
      'Manshead',
      'Watling',
      'Icknield',
      'Houghton Regis',
      'Thorn',
      'Tithe Farm'
    ]
  },
  {
    slug: 'milton-keynes',
    name: 'Milton Keynes',
    title: 'Mobile Mechanic Milton Keynes',
    metaDescription: 'Professional mobile mechanic service in Milton Keynes. Diagnostics, brakes, servicing & repairs at your location. Call 07354 915941 for same-day service.',
    postcodes: ['MK1', 'MK2', 'MK3', 'MK4', 'MK5', 'MK6', 'MK7', 'MK8', 'MK9', 'MK10', 'MK11', 'MK12', 'MK13', 'MK14', 'MK15'],
    localAreas: [
      'Central Milton Keynes',
      'Bletchley',
      'Wolverton',
      'Stony Stratford',
      'Newport Pagnell',
      'Olney',
      'Woburn Sands',
      'Broughton',
      'Shenley Brook End',
      'Walton Hall',
      'Emerson Valley',
      'Furzton'
    ]
  },
  {
    slug: 'aylesbury',
    name: 'Aylesbury',
    title: 'Mobile Mechanic Aylesbury',
    metaDescription: 'Professional mobile mechanic service in Aylesbury. Diagnostics, brakes, servicing & repairs at your location. Call 07354 915941 for same-day service.',
    postcodes: ['HP18', 'HP19', 'HP20', 'HP21', 'HP22'],
    localAreas: [
      'Aylesbury Town Centre',
      'Quarrendon',
      'Walton',
      'Mandeville',
      'Bedgrove',
      'Southcourt',
      'Elmhurst',
      'Haydon Hill',
      'Fairford Leys',
      'Watermead',
      'Berryfields',
      'Weston Turville'
    ]
  },
  {
    slug: 'stevenage',
    name: 'Stevenage',
    title: 'Mobile Mechanic Stevenage',
    metaDescription: 'Professional mobile mechanic service in Stevenage. Diagnostics, brakes, servicing & repairs at your location. Call 07354 915941 for same-day service.',
    postcodes: ['SG1', 'SG2'],
    localAreas: [
      'Stevenage Old Town',
      'Stevenage Town Centre',
      'Bedwell',
      'Broadwater',
      'Chells',
      'Pin Green',
      'Shephall',
      'St Nicholas',
      'Symonds Green',
      'Longmeadow',
      'Martins Wood'
    ]
  },
  {
    slug: 'hatfield',
    name: 'Hatfield',
    title: 'Mobile Mechanic Hatfield',
    metaDescription: 'Professional mobile mechanic service in Hatfield. Diagnostics, brakes, servicing & repairs at your location. Call 07354 915941 for same-day service.',
    postcodes: ['AL9', 'AL10'],
    localAreas: [
      'Hatfield Town Centre',
      'Old Hatfield',
      'Roe Green',
      'The Ryde',
      'Mill Green',
      'Birch Green',
      'Welham Green',
      'South Hatfield',
      'Marshmoor',
      'Brookmans Park'
    ]
  },
  {
    slug: 'north-london',
    name: 'North London',
    title: 'Mobile Mechanic North London',
    metaDescription: 'Professional mobile mechanic service in North London including Harrow, Brent, Edgware, Kingsbury & Borehamwood. Call 07354 915941 for same-day service.',
    postcodes: ['NW4', 'NW7', 'NW9', 'HA3', 'HA8', 'WD6', 'EN5'],
    localAreas: [
      'Harrow',
      'Brent',
      'Edgware',
      'Kingsbury',
      'Borehamwood',
      'Stanmore',
      'Wembley',
      'Mill Hill',
      'Hendon',
      'Colindale',
      'Burnt Oak',
      'Elstree'
    ]
  }
];

// Helper to get location by slug
export const getLocationBySlug = (slug) => {
  return LOCATIONS.find(loc => loc.slug === slug);
};

// Helper to generate location breadcrumbs
export const getLocationBreadcrumbs = (locationName) => {
  return [
    { label: 'Home', path: '/' },
    { label: 'Service Areas', path: '/locations' },
    { label: locationName, path: null }
  ];
};
