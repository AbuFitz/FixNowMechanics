import React from "react";
import { Wrench, Clock, MapPin, Shield, Phone, MessageCircle, Settings2, Gauge, BadgeCheck, Droplet, BatteryCharging, Truck } from "lucide-react";

// === Config ===
const BRAND = {
  name: "FixNow Mechanics",
  phoneDisplay: "07930 991598",
  phoneIntl: "+447930991598",
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
    "North London"
  ],
  colors: {
    primary: "#FFB800", // amber/yellow accent
    dark: "#0B0B0C",
    mid: "#151518",
    light: "#F5F7FA",
  },
};

const CALLOUT_NOTE = "Any callouts are £28 for a physical inspection. Rough quoting over the phone is free.";

// Imagery (royalty-free Unsplash)
const heroBg =
  "https://images.unsplash.com/photo-1542367597-8849eb950fd8?q=80&w=1920&auto=format&fit=crop";
const serviceImg =
  "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1600&auto=format&fit=crop";
const brakesImg =
  "https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?q=80&w=1600&auto=format&fit=crop";
const diagImg =
  "https://images.unsplash.com/photo-1621996346565-e3dbc646d9f4?q=80&w=1600&auto=format&fit=crop";
const batteryImg =
  "https://images.unsplash.com/photo-1612591214888-f8f2f9d8aa41?q=80&w=1600&auto=format&fit=crop";
const oilImg =
  "https://images.unsplash.com/photo-1603566234499-9b7961c6c69a?q=80&w=1600&auto=format&fit=crop";
const coiloverImg =
  "https://images.unsplash.com/photo-1580712516310-577037f7e4b9?q=80&w=1600&auto=format&fit=crop";
const vanImg =
  "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop";

function Section({ children, className = "" }) {
  return (
    <section className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
  );
}

function Pill({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/90 backdrop-blur">
      {Icon && <Icon size={16} className="opacity-80" />} {children}
    </div>
  );
}

function Stat({ kpi, label }) {
  return (
    <div className="rounded-2xl bg-white/5 p-4 border border-white/10 text-white">
      <div className="text-3xl font-bold">{kpi}</div>
      <div className="text-white/70 text-sm">{label}</div>
    </div>
  );
}

function scrollToBookNow(e) {
  e.preventDefault();
  const target = document.querySelector('#contact');
  if (!target) return;
  const y = target.getBoundingClientRect().top + window.pageYOffset - 100;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

function Header() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/40">
      <Section className="py-3 flex items-center justify-between">
        <a href="#top" className="text-white font-extrabold text-lg tracking-tight">
          Fix<span style={{ color: BRAND.colors.primary }}>Now</span> Mechanics
        </a>
        <div className="hidden sm:flex items-center gap-6 text-white/80">
          <a href="#about" onClick={scrollToBookNow} className="hover:text-white">About</a>
          <a
            href={`tel:${BRAND.phoneDisplay.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 font-semibold border"
            style={{ borderColor: BRAND.colors.primary }}
          >
            <Phone size={18} /> {BRAND.phoneDisplay}
          </a>
        </div>
      </Section>
    </div>
  );
}

// === Mobile CTA bar ===
function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden border-t border-white/10 bg-black/80 backdrop-blur p-3">
      <div className="flex gap-3">
        <a href={`tel:${BRAND.phoneDisplay.replace(/\s/g, "")}`} className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold border" style={{ borderColor: BRAND.colors.primary, color: "white" }}>
          <Phone size={18} /> Call
        </a>
        <a href={`https://wa.me/${BRAND.phoneIntl.replace("+", "")}?text=${BRAND.whatsappPrefill}`} className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold" style={{ background: BRAND.colors.primary, color: "#0B0B0C" }}>
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </div>
  );
}

const WhatsAppButton = ({ className = "" }) => (
  <a
    href={`https://wa.me/${BRAND.phoneIntl.replace("+", "")}?text=${BRAND.whatsappPrefill}`}
    className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 font-semibold shadow-lg transition hover:scale-[1.02] focus:outline-none focus:ring-4 ${className}`}
    style={{ background: BRAND.colors.primary, color: "#0B0B0C" }}
  >
    <MessageCircle size={20} /> Message us on WhatsApp
  </a>
);

const CallButton = ({ className = "" }) => (
  <a
    href={`tel:${BRAND.phoneDisplay.replace(/\s/g, "")}`}
    className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 font-semibold border transition hover:scale-[1.02] ${className}`}
    style={{ borderColor: BRAND.colors.primary, color: "white" }}
  >
    <Phone size={20} /> Call {BRAND.phoneDisplay}
  </a>
);

export default function FixNowSite() {
  return (
    <main id="top" className="min-h-screen w-full scroll-smooth" style={{ background: BRAND.colors.dark }}>
      <Header />
      {/* Announcement bar and rest of code unchanged... */}
    </main>
  );
}
