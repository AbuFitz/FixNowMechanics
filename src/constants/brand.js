// === Brand Configuration ===
export const BRAND = {
  name: "FixNow Mechanics",
  tagline: "Mobile Diagnostic & Repair Service",
  phoneDisplay: "07354 915941",
  phoneIntl: "+447354915941",
  email: "fixnowmechanics@outlook.com",
  whatsappPrefill: encodeURIComponent(
    "Hi FixNow, I need a mobile mechanic for my vehicle."
  ),
  baseArea: "Hemel Hempstead, HP2 7DE",
  baseCityCoords: {
    lat: 51.762313,
    lng: -0.439382,
    city: "Hemel Hempstead"
  },
  serviceAreas: [
    "Hemel Hempstead",
    "Watford",
    "St Albans",
    "Luton",
    "Aylesbury",
    "North London",
  ],
  colors: {
    primary: "#FECF00",    // Signature yellow
    dark: "#0B0B0C",       // Almost black
    mid: "#151518",        // Slightly lighter dark
    light: "#F5F7FA",      // Light gray
    accent: "#FFB800",     // Amber variant
  },
  hours: {
    weekdays: "7pm – 10pm",
    saturday: "8am – 10pm",
    sunday: "8am – 8pm",
  },
  hoursDisplay: "Mon-Fri: 7pm-10pm | Sat: 8am-10pm | Sun: 8am-8pm",
};

export const CALLOUT_NOTE =
  "Diagnostic visit: £15 + 65p per mile from Hemel Hempstead (£10 deducted from labour if repair proceeds)";

// Pricing Constants
export const PRICING = {
  calloutPerMile: 0.65, // 65p per mile
  labourDeduction: 10, // Amount deducted from labour if repair goes ahead
  maxServiceRadius: 45, // Maximum service radius in miles
};

export const SERVICES = [
  {
    title: "Diagnostic Visit & Fault Scan",
    desc: "Comprehensive OBD scan and fault diagnosis. £15 diagnostic fee + 65p per mile from Hemel Hempstead. £10 deducted from labour if you proceed with the repair.",
    price: "£15 + mileage",
    slug: "diagnostics",
  },
  {
    title: "Brake Pads/Discs",
    desc: "Front or rear pads/discs – professional mobile fitting. Labour from £80, parts priced separately. Final quote confirmed from your registration and postcode.",
    price: "from £80",
    slug: "brakes",
  },
  {
    title: "Battery Replacement",
    desc: "Mobile battery testing and replacement. Labour from £60 – battery cost varies by vehicle. We can supply & fit, or fit a battery you provide.",
    price: "from £60",
    slug: "battery",
  },
  {
    title: "Oil & Filter Service",
    desc: "Mobile oil & filter change using the correct spec oil for your car. Final price depends on oil type and engine size – confirmed in your quote.",
    price: "from £70",
    slug: "oil-service",
  },
  {
    title: "Suspension Repairs",
    desc: "Springs, shocks, drop links, control arms, ball joints and track rod ends. Mobile-friendly suspension work at your location.",
    price: "from £80",
    slug: "suspension",
  },
];
