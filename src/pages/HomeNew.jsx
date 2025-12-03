import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, MapPin, Clock, Check, Wrench } from 'lucide-react';
import { BRAND } from '../constants/brand';

const services = [
  { name: 'Diagnostics', price: '£15', time: '30 min' },
  { name: 'Brake Work', price: '£60', time: '2-3 hrs' },
  { name: 'Oil Service', price: '£50', time: '45 min' },
  { name: 'Battery', price: '£40', time: '30 min' },
  { name: 'Suspension', price: 'Quote', time: 'Custom' }
];

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-gray-50 to-white px-6 lg:px-16">
        <div className="max-w-[1600px] mx-auto w-full pt-20">
          <div className="max-w-4xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-yellow-500" />
              <span className="text-sm uppercase tracking-wider text-gray-500">Mobile Mechanic Service</span>
            </div>

            {/* Headline */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tight">
              We come
              <br />
              to <span className="font-light italic">you</span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
              Professional vehicle repairs at your home or office.
              Covering Hertfordshire, Bedfordshire, Bucks & North London.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full transition-all text-lg"
              >
                <Phone size={22} />
                {BRAND.phoneDisplay}
              </a>
              <Link to="/estimate">
                <button className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-semibold px-8 py-4 rounded-full transition-all text-lg">
                  Get Quote <ArrowRight size={20} />
                </button>
              </Link>
            </div>

            {/* Trust */}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check size={16} className="text-yellow-500" />
                Same-day available
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-yellow-500" />
                Transparent pricing
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-yellow-500" />
                45-mile radius
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Quick View */}
      <section className="py-24 px-6 lg:px-16 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">What we do</h2>
            <p className="text-xl text-gray-600">Professional repairs, transparent pricing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, i) => (
              <Link key={i} to="/estimate" className="group">
                <div className="border border-gray-200 hover:border-yellow-500 rounded-2xl p-6 h-full transition-all hover:shadow-lg">
                  <div className="text-xs text-gray-400 mb-2">0{i + 1}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">{service.name}</h3>
                  <div className="text-3xl font-bold text-yellow-500 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-500">{service.time}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-500 mb-4">Labour only. Parts priced separately or bring your own</p>
            <Link to="/services" className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center gap-2">
              View all services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">How it works</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '1', title: 'Book', desc: 'Call or get a quote online. We respond within 2 hours.' },
              { step: '2', title: 'We arrive', desc: 'Our mechanic comes to your location with all tools.' },
              { step: '3', title: 'Done', desc: 'Work completed on-site. Pay when finished.' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 text-black font-bold text-2xl mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-24 px-6 lg:px-16 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">45-mile service area</h2>
              <p className="text-xl text-gray-600 mb-8">
                Based in Hemel Hempstead, we cover Hertfordshire, Bedfordshire, Buckinghamshire and North London.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Hemel Hempstead', 'Watford', 'St Albans', 'Luton', 'Aylesbury', 'Berkhamsted', 'North London', 'Milton Keynes'].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} className="text-yellow-500" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              <Link to="/estimate">
                <button className="text-yellow-600 hover:text-yellow-700 font-semibold inline-flex items-center gap-2">
                  Check your postcode <ArrowRight size={20} />
                </button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border-2 border-gray-100">
                <iframe
                  title="Coverage Area"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=-0.8,51.5,-0.1,52.0&layer=mapnik&marker=${BRAND.baseCityCoords.lat},${BRAND.baseCityCoords.lng}`}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About FixNow</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Professional mobile mechanic service based in Hemel Hempstead.
              Part of ARF Automotive Group, we bring workshop-quality repairs to your location.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 text-left mb-8">
              {[
                'Transparent pricing, no hidden fees',
                'Same-day service available',
                'Professional equipment',
                'All major repairs covered'
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <Check size={20} className="text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Clock size={16} />
              <span>{BRAND.hoursDisplay}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 lg:px-16 bg-yellow-500">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">Need help today?</h2>
          <p className="text-xl mb-10 text-black/80">Call now or get a free quote in minutes</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-3 bg-black text-white font-semibold px-10 py-5 rounded-full text-lg hover:bg-gray-900 transition-all"
            >
              <Phone size={22} />
              Call Now
            </a>
            <Link to="/estimate">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-10 py-5 rounded-full text-lg hover:bg-gray-100 transition-all">
                Get Free Quote <ArrowRight size={22} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
