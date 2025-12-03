import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, MapPin, Clock, Check, Wrench, Zap, Shield, Star, Settings } from 'lucide-react';
import { BRAND } from '../constants/brand';

const services = [
  {
    name: 'Diagnostics',
    price: '£15',
    time: '30 min',
    highlight: 'Most Popular',
    icon: Zap
  },
  {
    name: 'Brake Work',
    price: '£60',
    time: '2-3 hrs',
    icon: Shield
  },
  {
    name: 'Oil Service',
    price: '£50',
    time: '45 min',
    icon: Wrench
  },
  {
    name: 'Battery',
    price: '£40',
    time: '30 min',
    icon: Zap
  },
  {
    name: 'Suspension',
    price: 'Quote',
    time: 'Custom',
    icon: Settings
  }
];

const testimonials = [
  { name: 'Sarah M.', location: 'Watford', text: 'Came to my office car park. Fixed my brakes in 2 hours. Unbeatable service.' },
  { name: 'James R.', location: 'Hemel Hempstead', text: 'Transparent pricing, professional work. Saved me a day off work.' },
  { name: 'Lisa K.', location: 'St Albans', text: 'Quick diagnostic, fair quote. Will definitely use again.' }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero - Asymmetric Split */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-yellow-50/30" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-[1800px] mx-auto w-full px-6 lg:px-16 py-32">
          <div className="grid lg:grid-cols-[1.3fr,1fr] gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-white border border-yellow-500/20 rounded-full px-4 py-2 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Available today • 2hr response</span>
              </div>

              {/* Headline */}
              <div>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight mb-6">
                  We come
                  <br />
                  <span className="relative inline-block">
                    to <span className="font-light italic text-gray-600">you</span>
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500/30 rounded-full" />
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-xl">
                  Mobile mechanic service that brings the workshop to your driveway.
                  <span className="text-gray-900 font-medium"> No garage visits, no waiting rooms.</span>
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                  className="group relative inline-flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-5 rounded-full transition-all text-lg shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/30 hover:scale-105"
                >
                  <Phone size={22} />
                  <span>{BRAND.phoneDisplay}</span>
                </a>
                <Link to="/estimate">
                  <button className="group inline-flex items-center justify-center gap-2 border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-bold px-8 py-5 rounded-full transition-all text-lg">
                    <span>Get Quote</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 pt-4">
                {[
                  { icon: Check, text: 'Same-day service' },
                  { icon: Shield, text: 'Transparent pricing' },
                  { icon: MapPin, text: '45-mile coverage' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-600">
                    <item.icon size={18} className="text-yellow-600" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Floating Card */}
            <div className="relative">
              {/* Testimonial Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-gray-900/10 p-8 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-gray-500">{testimonials[currentTestimonial].location}</p>
                  </div>
                  <div className="flex gap-1">
                    {testimonials.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === currentTestimonial ? 'bg-yellow-500 w-6' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Price Tag */}
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black rounded-2xl px-6 py-4 shadow-xl rotate-3">
                <p className="text-sm font-medium">Diagnostics from</p>
                <p className="text-3xl font-bold">£15</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Staggered Grid */}
      <section className="py-32 px-6 lg:px-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl" />

        <div className="max-w-[1600px] mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-5xl md:text-7xl font-bold mb-4 relative inline-block">
                What we do
                <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-yellow-500 rounded-full" />
              </h2>
            </div>
            <p className="text-xl text-gray-600 mt-6">Transparent pricing • Professional work • Your location</p>
          </div>

          {/* Staggered Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <Link
                key={i}
                to="/estimate"
                className="group relative"
                style={{ transform: `translateY(${i % 2 === 0 ? '0' : '2rem'})` }}
              >
                <div className="relative bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-yellow-500 rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  {service.highlight && (
                    <div className="absolute -top-3 left-6 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      {service.highlight}
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                      {service.icon && <service.icon size={24} className="text-yellow-600 group-hover:text-black transition-colors" />}
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-yellow-600 group-hover:text-yellow-500 transition-colors">
                        {service.price}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{service.time}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-600 transition-colors">
                    {service.name}
                  </h3>

                  <div className="flex items-center text-sm text-gray-500 group-hover:text-yellow-600 transition-colors">
                    <span className="font-medium">Book now</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gray-50 rounded-2xl px-8 py-6 border border-gray-200">
              <div className="flex items-center gap-2">
                <Check size={20} className="text-yellow-600" />
                <span className="text-gray-700 font-medium">Labour only pricing</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-300" />
              <div className="flex items-center gap-2">
                <Check size={20} className="text-yellow-600" />
                <span className="text-gray-700 font-medium">BYO parts welcome</span>
              </div>
            </div>
            <Link to="/services" className="block mt-6 text-yellow-600 hover:text-yellow-700 font-bold inline-flex items-center gap-2">
              View complete service list <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works - Timeline */}
      <section className="py-32 px-6 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-20 text-center">
            Simple process
          </h2>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 opacity-20" />

            <div className="grid md:grid-cols-3 gap-12 relative">
              {[
                {
                  step: '01',
                  title: 'Book',
                  desc: 'Call us or fill out the quote form. We respond within 2 hours with pricing and availability.',
                  time: '2 min'
                },
                {
                  step: '02',
                  title: 'We arrive',
                  desc: 'Our mechanic comes to your chosen location with professional equipment and parts if needed.',
                  time: '30 min'
                },
                {
                  step: '03',
                  title: 'Done',
                  desc: 'Work completed on-site with quality guarantee. Pay only when you\'re satisfied.',
                  time: '1-3 hrs'
                }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-yellow-500 text-black rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-yellow-500/30">
                        {i + 1}
                      </div>
                      <div className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        ~{item.time}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>

                  {i < 2 && (
                    <div className="hidden md:block absolute top-8 -right-6 w-12 h-1 bg-yellow-500/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage - Visual Split */}
      <section className="py-32 px-6 lg:px-16 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16 items-center">
            <div className="lg:order-2">
              <div className="inline-flex items-center gap-2 mb-6 bg-yellow-500/10 rounded-full px-4 py-2">
                <MapPin size={16} className="text-yellow-600" />
                <span className="text-sm font-bold text-yellow-700">45-MILE RADIUS</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                We cover your area
              </h2>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Based in <span className="text-gray-900 font-semibold">Hemel Hempstead</span>,
                serving Hertfordshire, Bedfordshire, Bucks, and North London.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {['Hemel Hempstead', 'Watford', 'St Albans', 'Luton', 'Aylesbury', 'Berkhamsted', 'North London', 'Milton Keynes'].map((area, i) => (
                  <div
                    key={area}
                    className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 hover:bg-yellow-50 transition-colors group"
                  >
                    <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:scale-125 transition-transform" />
                    <span className="text-gray-700 font-medium">{area}</span>
                  </div>
                ))}
              </div>

              <Link to="/estimate">
                <button className="group inline-flex items-center gap-3 text-yellow-600 hover:text-yellow-700 font-bold text-lg">
                  <span>Check your postcode</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="lg:order-1 relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden border-4 border-gray-100 shadow-2xl">
                <iframe
                  title="Coverage Area"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=-0.8,51.5,-0.1,52.0&layer=mapnik&marker=${BRAND.baseCityCoords.lat},${BRAND.baseCityCoords.lng}`}
                  className="w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-6 py-4 shadow-xl border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Call-out from</p>
                <p className="text-3xl font-bold text-yellow-600">£15</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About - Minimal */}
      <section className="py-32 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">About FixNow</h2>

          <p className="text-2xl text-gray-600 leading-relaxed mb-12">
            Mobile mechanic service based in Hemel Hempstead.
            Part of <span className="text-gray-900 font-semibold">ARF Automotive Group</span>,
            bringing workshop-quality repairs directly to you.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            {[
              'Transparent pricing',
              'Same-day available',
              'Professional equipment',
              'All major repairs'
            ].map((point) => (
              <div key={point} className="flex items-center gap-3 text-left bg-white rounded-2xl px-6 py-4 shadow-sm">
                <Check size={24} className="text-yellow-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{point}</span>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
            <Clock size={18} className="text-gray-600" />
            <span className="text-gray-700 font-medium">{BRAND.hoursDisplay}</span>
          </div>
        </div>
      </section>

      {/* Final CTA - Bold */}
      <section className="relative py-32 px-6 lg:px-16 bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-500 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10" />

        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-black">
            Need a mechanic today?
          </h2>
          <p className="text-2xl mb-12 text-black/80 font-medium">
            Call now or get your free quote in under 2 minutes
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
              className="group inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-bold px-12 py-6 rounded-full text-xl shadow-2xl hover:scale-105 transition-all"
            >
              <Phone size={24} />
              <span>Call {BRAND.phoneDisplay}</span>
            </a>
            <Link to="/estimate">
              <button className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-black font-bold px-12 py-6 rounded-full text-xl shadow-2xl hover:scale-105 transition-all border-2 border-black/10">
                <span>Get Free Quote</span>
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
