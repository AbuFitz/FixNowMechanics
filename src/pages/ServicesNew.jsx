import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, MapPin, Check, Clock } from 'lucide-react';
import { BRAND } from '../constants/brand';

const allServices = [
  {
    category: 'Diagnostics',
    items: [
      { name: 'OBD Diagnostic Scan', price: '£15', desc: 'Complete system scan with fault code reading' },
      { name: 'Engine Diagnostic', price: '£25', desc: 'In-depth engine performance analysis' },
      { name: 'Electrical Diagnostic', price: '£30', desc: 'Complex electrical system diagnosis' }
    ]
  },
  {
    category: 'Brakes',
    items: [
      { name: 'Brake Pads (Front)', price: '£60', desc: 'Pads replacement, includes labour only' },
      { name: 'Brake Pads (Rear)', price: '£60', desc: 'Rear pads replacement, labour only' },
      { name: 'Brake Discs & Pads', price: '£90', desc: 'Full brake service, labour only' },
      { name: 'Brake Fluid Change', price: '£40', desc: 'Complete fluid replacement' }
    ]
  },
  {
    category: 'Service & Maintenance',
    items: [
      { name: 'Oil & Filter Change', price: '£50', desc: 'Full service with correct spec oil' },
      { name: 'Air Filter Replacement', price: '£20', desc: 'Quick filter change' },
      { name: 'Spark Plugs', price: '£40', desc: 'Plug replacement, labour only' }
    ]
  },
  {
    category: 'Battery & Electrical',
    items: [
      { name: 'Battery Replacement', price: '£40', desc: 'Testing and installation' },
      { name: 'Alternator Check', price: '£30', desc: 'Testing and diagnosis' },
      { name: 'Starter Motor', price: 'Quote', desc: 'Replacement service' }
    ]
  },
  {
    category: 'Suspension',
    items: [
      { name: 'Shock Absorbers', price: 'Quote', desc: 'Replacement service' },
      { name: 'Coilover Installation', price: 'Quote', desc: 'Custom suspension setup' },
      { name: 'Spring Replacement', price: 'Quote', desc: 'Coil spring service' }
    ]
  }
];

const coverage = [
  { area: 'Hemel Hempstead', distance: '0-5 miles', price: '£15' },
  { area: 'Watford', distance: '8-12 miles', price: '£15-20' },
  { area: 'St Albans', distance: '10-14 miles', price: '£15-20' },
  { area: 'Luton', distance: '12-18 miles', price: '£20-25' },
  { area: 'Aylesbury', distance: '15-20 miles', price: '£20-25' },
  { area: 'North London', distance: '18-25 miles', price: '£20-25' },
  { area: 'Berkhamsted', distance: '5-8 miles', price: '£15' },
  { area: 'Milton Keynes', distance: '20-30 miles', price: '£25' }
];

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1600px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-yellow-500" />
            <span className="text-sm uppercase tracking-wider text-gray-500">All Services</span>
            <div className="h-px w-8 bg-yellow-500" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">Services & Coverage</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Professional mobile mechanic services across Hertfordshire and surrounding areas
          </p>

          <Link to="/estimate">
            <button className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full transition-all">
              Get Free Quote <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      {/* All Services */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Complete Service List</h2>
            <p className="text-xl text-gray-600">All prices are labour only unless stated. Parts priced separately or bring your own.</p>
          </div>

          <div className="space-y-16">
            {allServices.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-yellow-500" />
                  {category.category}
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((service, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl p-6 hover:border-yellow-500 hover:shadow-lg transition-all group">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-lg group-hover:text-yellow-600 transition-colors">{service.name}</h4>
                        <span className="text-xl font-bold text-yellow-600">{service.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
            <div className="flex items-start gap-3 mb-4">
              <Check size={24} className="text-yellow-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-2">Bring Your Own Parts</h4>
                <p className="text-gray-600">Already have parts? No problem. We'll fit them for you at labour-only rates.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check size={24} className="text-yellow-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-2">Custom Work</h4>
                <p className="text-gray-600">Need something not listed? Contact us for a custom quote on any repair or modification.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-24 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Coverage Area</h2>
            <p className="text-xl text-gray-600">Mobile service up to 45 miles from Hemel Hempstead</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {coverage.map((location, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-yellow-500 transition-all">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin size={20} className="text-yellow-500 flex-shrink-0 mt-1" />
                  <h3 className="font-bold text-lg">{location.area}</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Distance:</span>
                    <span className="font-medium">{location.distance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Call-out:</span>
                    <span className="font-bold text-yellow-600">{location.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Info */}
          <div className="max-w-3xl mx-auto bg-white border-2 border-yellow-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Diagnostic Visit Pricing</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">£15</div>
                <div className="text-sm text-gray-600">0-10 miles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">£20</div>
                <div className="text-sm text-gray-600">10-20 miles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">£25</div>
                <div className="text-sm text-gray-600">20+ miles</div>
              </div>
            </div>

            <p className="text-center text-sm text-gray-600">
              £10 deducted from labour if repair proceeds same day
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to book?</h2>
          <p className="text-xl text-gray-600 mb-10">Get a free quote or call us now</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-10 py-5 rounded-full text-lg transition-all"
            >
              <Phone size={22} />
              {BRAND.phoneDisplay}
            </a>
            <Link to="/estimate">
              <button className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-semibold px-10 py-5 rounded-full text-lg transition-all">
                Get Quote <ArrowRight size={22} />
              </button>
            </Link>
          </div>

          <p className="text-sm text-gray-500 mt-6 flex items-center justify-center gap-2">
            <Clock size={16} />
            {BRAND.hoursDisplay}
          </p>
        </div>
      </section>
    </div>
  );
}
