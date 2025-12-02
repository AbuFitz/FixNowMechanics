import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, MapPin, Check } from 'lucide-react';
import { BRAND } from '../constants/brand';

// Completely new pricing strategy - starter friendly
const SERVICES = [
  {
    name: 'Diagnostic Visit',
    brief: 'Complete vehicle diagnostic scan',
    price: '£15',
    details: 'OBD scan, visual inspection, and fault identification. Distance-based pricing.'
  },
  {
    name: 'Brake Service',
    brief: 'Pads, discs, and fluid replacement',
    price: '£60',
    details: 'Professional brake work at your location. Parts priced separately.'
  },
  {
    name: 'Oil & Filter',
    brief: 'Full service oil change',
    price: '£50',
    details: 'Correct spec oil for your vehicle. Quick turnaround.'
  },
  {
    name: 'Battery',
    brief: 'Testing and replacement',
    price: '£40',
    details: 'Battery supply and fitting available. Same-day service.'
  },
  {
    name: 'Suspension Work',
    brief: 'Coilovers and suspension setup',
    price: 'Quote',
    details: 'Custom suspension work. Supply and fit available.'
  }
];

const COVERAGE = ['Hemel Hempstead', 'Watford', 'St Albans', 'Luton', 'Aylesbury', 'Berkhamsted', 'North London', 'Milton Keynes'];

export default function Home() {
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero - Asymmetric, Bold, Minimal */}
      <section className="min-h-screen flex items-center relative overflow-hidden px-6 lg:px-12">
        {/* Subtle accent */}
        <div className="absolute top-20 right-0 w-px h-96 bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent" />

        <div className="max-w-[1800px] mx-auto w-full grid lg:grid-cols-[1.5fr,1fr] gap-16 lg:gap-32 items-center">
          {/* Left: Typography */}
          <div className="space-y-8 lg:space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-yellow-500" />
                <span className="text-sm tracking-[0.2em] text-gray-400 uppercase">Mobile Mechanic</span>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight">
                We come
                <br />
                to <span className="italic font-light">you</span>
              </h1>
            </div>

            <p className="text-xl lg:text-2xl text-gray-400 max-w-xl leading-relaxed font-light">
              Professional vehicle diagnostics and repairs.
              <span className="text-white"> At your location.</span>
            </p>

            {/* Coverage inline */}
            <div className="flex flex-wrap gap-2 text-sm text-gray-500">
              {COVERAGE.slice(0, 4).map((area, i) => (
                <React.Fragment key={area}>
                  <span>{area}</span>
                  {i < 3 && <span className="text-gray-700">•</span>}
                </React.Fragment>
              ))}
              <span>+ more</span>
            </div>
          </div>

          {/* Right: Floating contact card */}
          <div className="lg:justify-self-end w-full lg:max-w-md">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 space-y-6">
              <div>
                <p className="text-sm text-gray-400 mb-2">Call now for same-day service</p>
                <a
                  href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                  className="text-4xl lg:text-5xl font-bold hover:text-yellow-500 transition-colors inline-block"
                >
                  {BRAND.phoneDisplay}
                </a>
              </div>

              <div className="h-px bg-white/10" />

              <Link to="/estimate">
                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                  <span>Get Free Quote</span>
                  <ArrowRight size={20} />
                </button>
              </Link>

              <p className="text-xs text-gray-500 text-center">
                Response within 2 hours • Transparent pricing
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      {/* Manifesto - Typography Driven */}
      <section className="px-6 lg:px-12 py-32 lg:py-48">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {[
              { label: '01', title: 'No workshop', desc: 'We bring the workshop to your driveway or workplace' },
              { label: '02', title: 'No waiting', desc: 'Same-day service available. Book around your schedule' },
              { label: '03', title: 'No markup', desc: 'Transparent pricing on parts and labor. BYO parts welcome' }
            ].map((item) => (
              <div key={item.label} className="space-y-4">
                <span className="text-sm text-gray-600 font-mono">{item.label}</span>
                <h3 className="text-3xl lg:text-4xl font-bold">{item.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Horizontal Scroll Mobile */}
      <section className="py-24 lg:py-32 border-y border-white/5">
        <div className="px-6 lg:px-12 mb-12">
          <div className="max-w-[1800px] mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">Services</h2>
            <p className="text-gray-400 text-lg">Simple pricing. Professional work.</p>
          </div>
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="lg:hidden">
          <div className="flex gap-4 px-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {SERVICES.map((service, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[280px] bg-white/5 border border-white/10 rounded-2xl p-6 snap-start"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <span className="text-xs text-gray-600 font-mono">0{i + 1}</span>
                    <span className="text-2xl font-bold text-yellow-500">{service.price}</span>
                  </div>
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <p className="text-sm text-gray-400">{service.brief}</p>
                  <Link to="/estimate" className="text-sm text-yellow-500 hover:text-yellow-400 inline-flex items-center gap-1">
                    Book now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden lg:block px-12">
          <div className="max-w-[1800px] mx-auto grid grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <Link key={i} to="/estimate" className="group">
                <div className="bg-white/5 border border-white/10 hover:border-yellow-500/50 rounded-2xl p-8 transition-all hover:bg-white/[0.07] h-full">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <span className="text-xs text-gray-600 font-mono">0{i + 1}</span>
                      <span className="text-3xl font-bold text-yellow-500">{service.price}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-500 transition-colors">{service.name}</h3>
                      <p className="text-gray-400 leading-relaxed">{service.brief}</p>
                    </div>
                    <div className="text-sm text-yellow-500 group-hover:text-yellow-400 inline-flex items-center gap-2">
                      <span>Book now</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="px-6 lg:px-12 mt-12">
          <div className="max-w-[1800px] mx-auto">
            <p className="text-sm text-gray-500">
              <Check size={16} className="inline text-yellow-500" /> Parts priced separately • <Check size={16} className="inline text-yellow-500" /> Bring your own parts, we'll fit them
            </p>
          </div>
        </div>
      </section>

      {/* Coverage - Visual Map */}
      <section className="px-6 lg:px-12 py-32 lg:py-48">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16 items-center">
            {/* Left: Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-6xl font-bold mb-6">45-mile radius</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  From Hemel Hempstead, covering Hertfordshire, Bedfordshire, Buckinghamshire and North London.
                </p>
              </div>

              <div className="space-y-3">
                {COVERAGE.map((area, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-400">
                    <div className="w-1 h-1 rounded-full bg-yellow-500" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              <Link to="/estimate">
                <button className="text-yellow-500 hover:text-yellow-400 font-semibold inline-flex items-center gap-2">
                  Check your postcode <ArrowRight size={20} />
                </button>
              </Link>
            </div>

            {/* Right: Map */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
                <iframe
                  title="Coverage Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=-0.8,51.5,-0.1,52.0&layer=mapnik&marker=${BRAND.baseCityCoords.lat},${BRAND.baseCityCoords.lng}`}
                  className="grayscale invert opacity-60"
                />
              </div>
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3">
                <p className="text-sm">
                  <MapPin size={14} className="inline text-yellow-500" /> Base: {BRAND.baseCityCoords.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust - Minimal */}
      <section className="px-6 lg:px-12 py-24 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto text-center space-y-8">
          <p className="text-sm text-gray-600 uppercase tracking-[0.2em]">Trusted Parts</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16 opacity-40">
            {['Castrol', 'Bosch', 'Brembo', 'Mann', 'Mobil'].map((brand) => (
              <span key={brand} className="text-xl lg:text-2xl font-bold text-gray-400">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About - Split */}
      <section className="px-6 lg:px-12 py-32 lg:py-48">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">About FixNow</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Mobile mechanic service based in {BRAND.baseCityCoords.city}.
                We're part of ARF Automotive Group, specialists in diagnostics and vehicle enhancement.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Transparent pricing with no hidden fees',
                'Same-day service available',
                'Professional diagnostics equipment',
                'Covering Hertfordshire & surrounding areas'
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={20} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 space-y-2 text-sm text-gray-500">
              <p>{BRAND.hoursDisplay}</p>
              <p>{BRAND.baseArea}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center">
              <p className="text-gray-600 text-sm">Image placeholder</p>
            </div>
            <p className="text-xs text-gray-600 italic">Upload: /public/images/about.jpg</p>
          </div>
        </div>
      </section>

      {/* Final CTA - Minimal */}
      <section className="px-6 lg:px-12 py-32 lg:py-48 border-t border-white/5">
        <div className="max-w-[1000px] mx-auto text-center space-y-12">
          <h2 className="text-5xl lg:text-7xl font-bold">
            Need a mechanic?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
              className="bg-yellow-500 hover:bg-yellow-400 text-black text-lg font-bold py-5 px-12 rounded-xl transition-all hover:scale-[1.02] inline-flex items-center justify-center gap-3"
            >
              <Phone size={24} />
              <span>Call Now</span>
            </a>
            <Link to="/estimate">
              <button className="border border-white/20 hover:border-yellow-500/50 text-white text-lg font-semibold py-5 px-12 rounded-xl transition-all hover:bg-white/5 inline-flex items-center gap-3">
                <span>Get Quote</span>
                <ArrowRight size={24} />
              </button>
            </Link>
          </div>

          <p className="text-sm text-gray-600">{BRAND.hoursDisplay}</p>
        </div>
      </section>
    </div>
  );
}
