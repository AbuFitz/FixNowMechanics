// === Brand Configuration ===
export const BRAND = {
  name: "FixNow Mechanics",
  tagline: "Reliable Repairs. Real Results.",
  phoneDisplay: "07930 991598",
  phoneIntl: "+447930991598",
  email: "info@fixnowmechanics.co.uk",
  whatsappPrefill: encodeURIComponent(
    "Hi FixNow, I need a mobile mechanic. Car model: ____. Location: ____. Issue: ____. Earliest time: ____."
  ),
  baseArea: "Maylands Business Area, Hemel Hempstead, HP2 7DE",
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
  hours: "8am – 10pm, 7 days a week",
};

export const CALLOUT_NOTE =
  "£28 callout for physical inspection (refunded if repair accepted). Phone quotes are free.";

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
