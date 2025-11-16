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
  "Diagnostic visit fee: £15–£25 depending on distance (£10 deducted from labour if repair proceeds)";

// Diagnostic Visit Pricing Constants
export const DIAGNOSTIC_PRICING = {
  within10Miles: 15,
  within20Miles: 20,
  over20Miles: 25,
  labourDeduction: 10, // Amount deducted from labour if repair goes ahead
  maxServiceRadius: 45, // Maximum service radius in miles
};

export const SERVICES = [
  {
    title: "Diagnostic Visit & Fault Scan",
    desc: "Local call-out, OBD scan and initial fault checks. Final price depends on distance and is confirmed after you enter your postcode. Deeper electrical or multi-system diagnostics are quoted separately if needed (usually from £40).",
    price: "£15–£25*",
    slug: "diagnostics",
  },
  {
    title: "Brake Pads/Discs",
    desc: "Front or rear pads/discs – professional mobile fitting. Labour from £80, parts priced separately. Final quote is confirmed from your registration and postcode.",
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
    title: "Suspension / Coilovers",
    desc: "Coilover and suspension setup supplied and fitted. Fully quoted in advance based on your vehicle, parts and location.",
    price: "POA",
    slug: "suspension",
  },
];
