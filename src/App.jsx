import React from "react";
import {
  Wrench,
  Clock,
  MapPin,
  Shield,
  Phone,
  MessageCircle,
  Settings2,
  Gauge,
  BadgeCheck,
  Droplet,
  BatteryCharging,
  Truck,
} from "lucide-react";

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
    "North London",
  ],
  colors: {
    primary: "#FFB800",
    dark: "#0B0B0C",
    mid: "#151518",
    light: "#F5F7FA",
  },
};

const CALLOUT_NOTE =
  "Any callouts are £28 for a physical inspection (refunded if repair is accepted). Rough quoting over the phone is free.";

// === Imagery (served from /public/images) ===
const heroBg     = "/images/hero.webp";
const serviceImg = "/images/service.webp";
const brakesImg  = "/images/brakes.webp";
const diagImg    = "/images/diagnostics.webp";
const batteryImg = "/images/battery.webp";
const oilImg     = "/images/oilchange.webp";
const vanImg     = "/images/van.webp";
const coiloverImg= "/images/coilover.webp"; // <-- added (fixes blank screen)


function Section({ children, className = "" }) {
  return (
    <section
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </section>
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

// Scroll all the way to bottom
function scrollToBottom(e) {
  e.preventDefault();
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}

// === Header ===
function Header() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/40">
      <Section className="py-3 flex items-center justify-between">
        <a
          href="#top"
          className="text-white font-extrabold text-lg tracking-tight"
        >
          Fix<span style={{ color: BRAND.colors.primary }}>Now</span> Mechanics
        </a>
        <div className="hidden sm:flex items-center gap-6 text-white/80">
          <a href="#" onClick={scrollToBottom} className="hover:text-white">
            About
          </a>
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

function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden border-t border-white/10 bg-black/80 backdrop-blur p-3">
      <div className="flex gap-3">
        <a
          href={`tel:${BRAND.phoneDisplay.replace(/\s/g, "")}`}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold border"
          style={{ borderColor: BRAND.colors.primary, color: "white" }}
        >
          <Phone size={18} /> Call
        </a>
        <a
          href={`https://wa.me/${BRAND.phoneIntl.replace(
            "+",
            ""
          )}?text=${BRAND.whatsappPrefill}`}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold"
          style={{ background: BRAND.colors.primary, color: "#0B0B0C" }}
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </div>
  );
}

const WhatsAppButton = ({ className = "" }) => (
  <a
    href={`https://wa.me/${BRAND.phoneIntl.replace(
      "+",
      ""
    )}?text=${BRAND.whatsappPrefill}`}
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
    <main
      id="top"
      className="min-h-screen w-full scroll-smooth"
      style={{ background: BRAND.colors.dark }}
    >
      <Header />

      {/* Announcement bar */}
      <div className="w-full" style={{ background: BRAND.colors.mid }}>
        <Section className="py-2">
          <div className="flex items-center justify-center gap-3 text-white/90 text-sm">
            <Shield size={16} style={{ color: BRAND.colors.primary }} />
            <span className="font-medium">{CALLOUT_NOTE}</span>
          </div>
        </Section>
      </div>

      {/* Hero */}
<div
  className="relative"
  style={{
    backgroundColor: BRAND.colors.dark, // solid black background
  }}
>
  <Section className="py-14 sm:py-20 lg:py-28">
    <div className="flex flex-col lg:flex-row items-start gap-10">
      {/* Left side: text */}
      <div className="flex-1 text-white">
        <div className="flex gap-2 flex-wrap mb-4">
          <Pill icon={Wrench}>Mobile Mechanic</Pill>
          <Pill icon={Clock}>8am – 10pm</Pill>
          <Pill icon={MapPin}>Based in Hemel Hempstead</Pill>
          <Pill icon={Shield}>Transparent Pricing</Pill>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          FixNow — We come to you.
        </h1>
        <p className="mt-4 text-white/80 text-base sm:text-lg max-w-2xl">
          Diagnostics, brakes, battery, oil service and more — done on your
          driveway or workplace. No workshop visits. No hidden markup. You can
          supply your own parts or we can source them.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
          <WhatsAppButton className="w-full sm:w-auto" />
          <CallButton className="w-full sm:w-auto" />
        </div>
      </div>

      {/* Right side: van image */}
      <div className="flex-1 w-full">
        <img
          src={vanImg}
          alt="Mobile mechanic van"
          className="w-full rounded-3xl border border-white/10 shadow-2xl object-cover"
        />
      </div>
    </div>
  </Section>
</div>


      {/* Services */}
      <Section className="py-12 sm:py-16">
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-2">
          Core services
        </h2>
        <p className="text-white/70 mb-8">
          High-volume, fixed-price jobs so you always know the cost up front.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            title: "Full Diagnostics",
            desc: "OBD scan + fault codes + action plan.",
            price: "from £40",
            icon: Gauge,
            img: diagImg,
          }, {
            title: "Brake Pads/Discs",
            desc: "Front/rear pads or discs & pads — fitted.",
            price: "from £80",
            icon: Wrench,
            img: brakesImg,
          }, {
            title: "Battery Replace",
            desc: "Supply & fit or you provide the battery.",
            price: "from £60",
            icon: BatteryCharging,
            img: batteryImg,
          }, {
            title: "Oil & Filter",
            desc: "Service at your location. Correct spec oil.",
            price: "from £70",
            icon: Droplet,
            img: oilImg,
          }, {
            title: "Suspension / Coilovers",
            desc: "Install & setup. (Pre-quoted)",
            price: "POA",
            icon: Settings2,
            img: coiloverImg,
          }].map((s, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img src={s.img} alt={s.title} className="h-40 w-full object-cover" />
              <div className="p-5 text-white">
                <div className="flex items-center gap-2 text-xl font-semibold">
                  <s.icon size={20} style={{ color: BRAND.colors.primary }} />
                  {s.title}
                </div>
                <p className="text-white/75 mt-2 text-sm">{s.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold" style={{ color: BRAND.colors.primary }}>
                    {s.price}
                  </span>
                  <WhatsAppButton className="w-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Book now / About section (clean + structured) */}
<Section className="py-16">
  <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 text-white">
    <div className="grid md:grid-cols-2 gap-10 items-center">
      
      {/* Left: Info */}
      <div>
        <h2 className="text-3xl font-bold mb-3">About FixNow</h2>
        <p className="text-white/80 mb-6 max-w-prose leading-relaxed">
          We’re a mobile mechanic service based in <strong>Hemel Hempstead</strong>,
          covering Hertfordshire and surrounding areas. Our mission is simple —
          bring workshop-quality repairs directly to your home or workplace with
          full transparency and reliability.
        </p>

        <div className="space-y-3 text-white/85 text-sm">
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-white/60" /> 
            <span><strong>Hours:</strong> 8am – 10pm (7 days)</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-white/60" /> 
            <span><strong>Base:</strong> Maylands Business Area, Hemel Hempstead (mobile service only)</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={18} className="text-white/60" /> 
            <span><strong>Callout Fee:</strong> Any callouts are £28 for a physical inspection (refunded if repair is accepted). Rough quoting over the phone is free.</span>
            

          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-white/60" /> 
            <span><strong>Contact:</strong> {BRAND.phoneDisplay}</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <WhatsAppButton className="w-full sm:w-auto" />
          <CallButton className="w-full sm:w-auto" />
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Areas we cover</h3>
          <div className="flex flex-wrap gap-2">
            {BRAND.serviceAreas.map((a) => (
              <span
                key={a}
                className="px-3 py-1 rounded-full border border-white/10 text-white/90 bg-white/5 text-sm"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full">
        <img
          src={serviceImg}
          alt="Mechanic at work"
          className="w-full rounded-2xl border border-white/10 shadow-lg"
        />
      </div>

    </div>
  </div>
</Section>




      {/* Footer */}

      
  <footer className="w-full bg-black/60 text-white text-center py-6 border-t border-white/10">
  <div className="max-w-4xl mx-auto space-y-1 text-sm leading-relaxed">
    <p className="font-semibold text-lg">FixNow Mechanics</p>
    <p>Mobile mechanic — Diagnostics, brakes, servicing, oil changes & more.</p>
    <p>Maylands Business Area, Hemel Hempstead, HP2 7DE</p>
    <p>Open: 8am – 10pm, 7 days a week</p>
    <p>
      Phone:{" "}
      <a href="tel:07930991598" className="text-amber-400 hover:underline">
        07930 991598
      </a>
    </p>
    <p className="pt-2 text-white/60 text-xs">
      FixNow Mechanics is proudly operated under the{" "}
      <span className="font-semibold text-amber-400">ARF Automotive Group</span> — specialists in diagnostics, retrofits & vehicle enhancement.
    </p>
  </div>
  <p className="text-xs text-white/40 mt-4">
    © {new Date().getFullYear()} FixNow Mechanics | Part of ARF Automotive Group. All rights reserved.
  </p>
</footer>



      <MobileBottomBar />
    </main>
  );
}
