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

// Header (sticky)
function Header() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/40">
      <Section className="py-3 flex items-center justify-between">
        <a href="#top" className="text-white font-extrabold text-lg tracking-tight">
          Fix<span style={{ color: BRAND.colors.primary }}>Now</span> Mechanics
        </a>
        <div className="hidden sm:flex items-center gap-6 text-white/80">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#areas" className="hover:text-white">Areas</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href={`tel:${BRAND.phoneDisplay.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-lg px-3 py-2 font-semibold border" style={{ borderColor: BRAND.colors.primary }}>
            <Phone size={18} /> {BRAND.phoneDisplay}
          </a>
        </div>
      </Section>
    </div>
  );
}

// Mobile bottom bar (CTA)
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

export default function App() {
  return (
    <main id="top" className="min-h-screen w-full" style={{ background: BRAND.colors.dark }}>
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
          backgroundImage: `linear-gradient(180deg, rgba(11,11,12,0.65), rgba(11,11,12,0.85)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Section className="py-14 sm:py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="flex-1 text-white">
              <div className="flex gap-2 flex-wrap mb-4">
                <Pill icon={Wrench}>Mobile Mechanic</Pill>
                <Pill icon={Clock}>8am – 10pm</Pill>
                <Pill icon={MapPin}>Based in Maylands</Pill>
                <Pill icon={Shield}>Transparent Pricing</Pill>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                FixNow — We come to you.
              </h1>
              <p className="mt-4 text-white/80 text-base sm:text-lg max-w-2xl">
                Diagnostics, brakes, battery, oil service and more — done on your driveway or workplace. No workshop visits. No hidden markup. You can supply your own parts or we can source them.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
                <WhatsAppButton className="w-full sm:w-auto" />
                <CallButton className="w-full sm:w-auto" />
              </div>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Stat kpi="< 60min" label="Typical response" />
                <Stat kpi="£0" label="Phone quote fee" />
                <Stat kpi="6+" label="Service areas" />
                <Stat kpi="5" label="Core services" />
              </div>
            </div>
            <div className="flex-1 w-full">
              <img src={vanImg} alt="Mobile mechanic van" className="w-full rounded-3xl border border-white/10 shadow-2xl" />
            </div>
          </div>
        </Section>
      </div>

      {/* Services */}
      <Section id="services" className="py-12 sm:py-16">
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-2">Core services</h2>
        <p className="text-white/70 mb-8">High‑volume, fixed-price jobs so you always know the cost up front.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Full Diagnostics",
              desc: "OBD scan + fault codes + action plan.",
              price: "from £40",
              icon: Gauge,
              img: diagImg,
            },
            {
              title: "Brake Pads/Discs",
              desc: "Front/rear pads or discs & pads — fitted.",
              price: "from £80",
              icon: Wrench,
              img: brakesImg,
            },
            {
              title: "Battery Replace",
              desc: "Supply & fit or you provide the battery.",
              price: "from £60",
              icon: BatteryCharging,
              img: batteryImg,
            },
            {
              title: "Oil & Filter",
              desc: "Service at your location. Correct spec oil.",
              price: "from £70",
              icon: Droplet,
              img: oilImg,
            },
            {
              title: "Suspension / Coilovers",
              desc: "Install & setup. (Pre‑quoted)",
              price: "POA",
              icon: Settings2,
              img: coiloverImg,
            },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img src={s.img} alt={s.title} className="h-40 w-full object-cover" />
              <div className="p-5 text-white">
                <div className="flex items-center gap-2 text-xl font-semibold">
                  <s.icon size={20} style={{ color: BRAND.colors.primary }} />
                  {s.title}
                </div>
                <p className="text-white/75 mt-2 text-sm">{s.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold" style={{ color: BRAND.colors.primary }}>{s.price}</span>
                  <WhatsAppButton className="w-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why choose us */}
      <div className="relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(21,21,24,0.96), rgba(21,21,24,0.96)), url(${serviceImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Section className="py-12 sm:py-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[{
              title: "We come to you",
              text: "Home, roadside or workplace — zero towing.",
              icon: Truck,
            }, {
              title: "Fair & transparent",
              text: "Clear prices. No surprise markups. BYO parts welcome.",
              icon: Shield,
            }, {
              title: "Fast response",
              text: "Typical reply within an hour during open hours.",
              icon: Clock,
            }].map((f, i) => (
              <div key={i} className="rounded-2xl p-6 border border-white/10 bg-white/5 text-white">
                <f.icon size={28} style={{ color: BRAND.colors.primary }} />
                <h3 className="text-xl font-bold mt-4">{f.title}</h3>
                <p className="text-white/75 mt-2">{f.text}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Service areas */}
      <Section id="areas" className="py-12 sm:py-16">
        <h2 className="text-white text-3xl font-bold mb-2">Service areas</h2>
        <p className="text-white/70 mb-6">We cover {BRAND.serviceAreas.join(", ")} and nearby.</p>
        <div className="flex flex-wrap gap-3">
          {BRAND.serviceAreas.map((a) => (
            <span key={a} className="px-4 py-2 rounded-full border border-white/10 text-white/90 bg-white/5">{a}</span>
          ))}
        </div>
      </Section>

      {/* Reviews */}
      <Section className="py-12 sm:py-16">
        <h2 className="text-white text-3xl font-bold mb-2">What customers say</h2>
        <p className="text-white/70 mb-8">Short real-world feedback style. Add Google review widgets later.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            author: "Adam K.",
            text: "Arrived the same afternoon, scanned the car and fixed my brake issue on my driveway. Honest pricing.",
          },{
            author: "Sofia R.",
            text: "Loved that I could supply my own parts. No pressure, very clear on labour cost.",
          },{
            author: "Bilal H.",
            text: "Booked over WhatsApp, super easy. Will use again for servicing.",
          }].map((r, i) => (
            <div key={i} className="rounded-2xl p-6 border border-white/10 bg-white/5 text-white">
              <BadgeCheck size={20} style={{ color: BRAND.colors.primary }} />
              <p className="mt-3 text-white/90">“{r.text}”</p>
              <div className="mt-3 text-white/60 text-sm">— {r.author}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-12 sm:py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold">Book now</h2>
              <p className="text-white/75 mt-2">Send us a WhatsApp with your car model, location and issue. We’ll reply with an exact quote.</p>

              <div className="mt-6 flex flex-wrap gap-4">
                <WhatsAppButton className="w-full sm:w-auto" />
                <CallButton className="w-full sm:w-auto" />
              </div>

              <div className="mt-6 space-y-2 text-white/80">
                <div className="flex items-center gap-2"><Phone size={18} /> {BRAND.phoneDisplay}</div>
                <div className="flex items-center gap-2"><MapPin size={18} /> Service base: {BRAND.baseArea} <span className="text-white/60">(no public workshop)</span></div>
                <div className="flex items-center gap-2"><Clock size={18} /> Open 8am – 10pm, 7 days</div>
              </div>

              <div className="mt-6 text-white/70 text-sm">
                <strong>Callout policy:</strong> {CALLOUT_NOTE}
              </div>
            </div>
            <div>
              <img src={serviceImg} alt="Mechanic at work" className="w-full rounded-2xl border border-white/10" />
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <Section className="py-10 text-white/70">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="text-white text-lg font-bold">{BRAND.name}</div>
              <div className="text-sm mt-1">A division of ARF — Mobile diagnostics & repairs.</div>
            </div>
            <div className="text-sm">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          </div>
        </Section>
      </footer>

      <MobileBottomBar />
    </main>
  );
}
