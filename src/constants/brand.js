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
    lat: 51.7519,
    lng: -0.4723,
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
  "£25 callout fee applies to areas outside Hemel Hempstead (refunded if repair is accepted)";

export const SERVICES = [
  {
    title: "Full Diagnostics",
    desc: "OBD scan + fault codes + detailed action plan",
    price: "from £40",
    slug: "diagnostics",
  },
  {
    title: "Brake Pads/Discs",
    desc: "Front/rear pads or discs & pads — professionally fitted",
    price: "from £80",
    slug: "brakes",
  },
  {
    title: "Battery Replacement",
    desc: "Supply & fit or fit your own battery",
    price: "from £60",
    slug: "battery",
  },
  {
    title: "Oil & Filter Service",
    desc: "Full service at your location with correct spec oil",
    price: "from £70",
    slug: "oil-service",
  },
  {
    title: "Suspension / Coilovers",
    desc: "Professional installation & setup (pre-quoted)",
    price: "POA",
    slug: "suspension",
  },
];
