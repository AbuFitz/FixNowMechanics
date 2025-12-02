import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, MessageCircle, MapPin, ArrowRight, CheckCircle2,
  Wrench, Clock, Shield, Star
} from 'lucide-react';
import { BRAND, SERVICES, DIAGNOSTIC_PRICING } from '../constants/brand';
import { Section } from '../components/Layout';
import { Card } from '../components/Card';
import { Button, LinkButton } from '../components/Button';

function BrandLogo({ name, logo, size = "medium", invert = false }) {
  const sizeClasses = {
    small: "h-8",
    medium: "h-10",
    large: "h-24",
    xlarge: "h-24",
  };

  return (
    <div className="flex items-center justify-center px-8 sm:px-10">
      <img
        src={logo}
        alt={name}
        className={`${sizeClasses[size]} w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 ${invert ? 'invert brightness-0' : ''}`}
      />
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero - Absolute Minimal */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: BRAND.colors.dark }}>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/3 via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-yellow-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Minimal status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-white/70 text-sm">Same-Day Service Available</span>
          </div>

          {/* Hero headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[1.05]">
            Mobile Mechanic<br/>
            <span className="gradient-text">Across Hertfordshire</span>
          </h1>

          {/* Value proposition */}
          <p className="text-lg lg:text-2xl text-white/50 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Professional diagnostics & repairs brought to your location.<br className="hidden sm:block" />
            Covering <span className="text-white/80 font-medium">Hertfordshire, Bedfordshire, Buckinghamshire & North London.</span>
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl w-full sm:w-auto"
              style={{
                backgroundColor: BRAND.colors.primary,
                color: BRAND.colors.dark,
                boxShadow: `0 20px 60px ${BRAND.colors.primary}25`
              }}
            >
              <Phone size={24} className="group-hover:rotate-12 transition-transform" />
              {BRAND.phoneDisplay}
            </a>
            <Link to="/estimate" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full py-5 px-10 text-lg group">
                <span>Free Quote</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/40 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} style={{ color: BRAND.colors.primary }} />
              <span>Fully Mobile</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} style={{ color: BRAND.colors.primary }} />
              <span>Transparent Pricing</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} style={{ color: BRAND.colors.primary }} />
              <span>No Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Clean Showcase */}
      <Section className="py-20 lg:py-32" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
              What We Do
            </h2>
            <p className="text-white/50 text-lg">
              Specializing in diagnostics, repairs & servicing
            </p>
          </div>

          {/* Service grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <Link key={service.slug} to="/estimate" className="group">
                <Card className="h-full p-8 hover:scale-[1.02] hover:border-yellow-500/40 transition-all duration-500">
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-white/40 text-sm font-bold mb-6 group-hover:bg-yellow-500/10 group-hover:border-yellow-500/30 group-hover:text-yellow-400 transition-all">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>

                  {/* Service info */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {service.desc.split('.')[0]}.
                    </p>
                    <div className="text-2xl font-black gradient-text">
                      {service.price}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white/40 group-hover:text-yellow-400 transition-colors text-sm font-medium">
                    <span>Request Quote</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Additional note */}
          <div className="mt-12 text-center">
            <p className="text-white/50 text-sm mb-4">
              Need something else? <Link to="/estimate" className="text-yellow-400 hover:underline">Get in touch</Link>
            </p>
            <Card className="inline-block bg-white/5 border-white/10 px-6 py-3">
              <p className="text-white/70 text-sm flex items-center gap-2">
                <CheckCircle2 size={16} style={{ color: BRAND.colors.primary }} />
                <span><strong className="text-white">BYO Parts:</strong> Bring your own, we'll fit them</span>
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why Choose - Integrated Trust */}
      <Section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Transparent Pricing',
                desc: 'No hidden fees. You know the cost before we start.'
              },
              {
                icon: Clock,
                title: 'Same-Day Service',
                desc: 'Fast response times. Often available within hours.'
              },
              {
                icon: Wrench,
                title: 'Quality Work',
                desc: 'Professional repairs using trusted parts and tools.'
              },
              {
                icon: Star,
                title: 'Customer First',
                desc: 'Building our reputation one satisfied customer at a time.'
              }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: `${BRAND.colors.primary}15` }}>
                  <item.icon size={32} style={{ color: BRAND.colors.primary }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Coverage - Geographic Focus */}
      <Section className="py-20 lg:py-32" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
              We Cover More Than Just Hertfordshire
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              Mobile service up to 45 miles from Hemel Hempstead.
              Covering <strong className="text-white">Hertfordshire, Bedfordshire, Buckinghamshire & North London.</strong>
            </p>
          </div>

          {/* Coverage grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {[
              { name: 'Hemel Hempstead', tag: 'Base' },
              { name: 'Watford' },
              { name: 'St Albans' },
              { name: 'Luton' },
              { name: 'Aylesbury' },
              { name: 'Berkhamsted' },
              { name: 'Tring' },
              { name: 'Dunstable' },
              { name: 'Hertford' },
              { name: 'North London' },
              { name: 'Milton Keynes' },
              { name: 'Stevenage' }
            ].map((area, i) => (
              <Card key={i} className="p-4 text-center hover:scale-105 hover:border-yellow-500/40 transition-all duration-300 group">
                {area.tag && (
                  <div className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold mb-2" style={{ backgroundColor: BRAND.colors.primary, color: BRAND.colors.dark }}>
                    {area.tag}
                  </div>
                )}
                <MapPin size={20} className="mx-auto mb-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: BRAND.colors.primary }} />
                <p className="text-white text-sm font-medium">{area.name}</p>
              </Card>
            ))}
          </div>

          {/* Pricing info */}
          <Card className="p-8 max-w-3xl mx-auto bg-white/5">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold text-white">
                Diagnostic Visit Pricing
              </h3>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div>
                  <p className="text-white/50 mb-1">0-10 miles</p>
                  <p className="text-2xl font-black text-yellow-400">£{DIAGNOSTIC_PRICING.within10Miles}</p>
                </div>
                <div className="w-px bg-white/10" />
                <div>
                  <p className="text-white/50 mb-1">10-20 miles</p>
                  <p className="text-2xl font-black text-yellow-400">£{DIAGNOSTIC_PRICING.within20Miles}</p>
                </div>
                <div className="w-px bg-white/10" />
                <div>
                  <p className="text-white/50 mb-1">20+ miles</p>
                  <p className="text-2xl font-black text-yellow-400">£{DIAGNOSTIC_PRICING.over20Miles}</p>
                </div>
              </div>
              <p className="text-white/60 text-xs pt-4">
                £{DIAGNOSTIC_PRICING.labourDeduction} deducted from labour if repair goes ahead
              </p>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link to="/estimate">
              <Button variant="primary" className="px-8 py-4">
                Check Your Postcode
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Trusted Brands */}
      <Section className="py-16 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Quality Parts, Trusted Brands
            </h3>
            <p className="text-white/40 text-sm">
              Working with industry-leading manufacturers
            </p>
          </div>

          {/* Infinite scroll */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-slow">
              <div className="flex items-center gap-0 flex-shrink-0">
                <BrandLogo name="Brembo" logo="/logos/brembo.png" size="small" />
                <BrandLogo name="Castrol" logo="/logos/castrol.svg" size="large" />
                <BrandLogo name="Liqui Moly" logo="/logos/liquimoly.png" size="medium" />
                <BrandLogo name="Mann" logo="/logos/mann.svg" size="medium" invert={true} />
                <BrandLogo name="Mobil" logo="/logos/mobil.svg" size="large" />
                <BrandLogo name="Pagid" logo="/logos/pagid.svg" size="large" invert={true} />
                <BrandLogo name="Textar" logo="/logos/textar.svg" size="large" />
                <BrandLogo name="Valvoline" logo="/logos/valvoline.svg" size="large" />
                <BrandLogo name="Bosch" logo="/logos/bosch.svg" size="large" invert={true} />
              </div>
              <div className="flex items-center gap-0 flex-shrink-0">
                <BrandLogo name="Brembo" logo="/logos/brembo.png" size="small" />
                <BrandLogo name="Castrol" logo="/logos/castrol.svg" size="large" />
                <BrandLogo name="Liqui Moly" logo="/logos/liquimoly.png" size="medium" />
                <BrandLogo name="Mann" logo="/logos/mann.svg" size="medium" invert={true} />
                <BrandLogo name="Mobil" logo="/logos/mobil.svg" size="large" />
                <BrandLogo name="Pagid" logo="/logos/pagid.svg" size="large" invert={true} />
                <BrandLogo name="Textar" logo="/logos/textar.svg" size="large" />
                <BrandLogo name="Valvoline" logo="/logos/valvoline.svg" size="large" />
                <BrandLogo name="Bosch" logo="/logos/bosch.svg" size="large" invert={true} />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* About with Map */}
      <Section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                    About FixNow Mechanics
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Professional mobile mechanic service based in{' '}
                    <strong className="text-white">{BRAND.baseCityCoords.city}</strong>.
                    We bring workshop-quality repairs directly to your home or workplace.
                  </p>
                </div>

                {/* Key points */}
                <div className="space-y-3">
                  {[
                    'Specializing in diagnostics, brakes, suspension & engine work',
                    'Transparent pricing — no hidden fees or markups',
                    'Mobile service covering Hertfordshire & surrounding counties',
                    'Same-day appointments available'
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" style={{ color: BRAND.colors.primary }} />
                      <span className="text-white/80 text-sm">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Operating hours */}
                <Card className="bg-white/5 border-white/10 p-4">
                  <div className="flex items-center gap-3">
                    <Clock size={20} style={{ color: BRAND.colors.primary }} />
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">Operating Hours</p>
                      <p className="text-white/60 text-xs">{BRAND.hoursDisplay}</p>
                    </div>
                  </div>
                </Card>

                {/* ARF Group note */}
                <p className="text-white/50 text-sm pt-4 border-t border-white/10">
                  Proudly operated under the{' '}
                  <strong style={{ color: BRAND.colors.primary }}>ARF Automotive Group</strong>
                  {' '}— specialists in diagnostics & vehicle enhancement.
                </p>
              </div>

              {/* Right: Map */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-white/10 h-[400px]">
                  <iframe
                    title="FixNow Mechanics Location"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=-0.5023,51.7319,-0.4423,51.7719&layer=mapnik&marker=${BRAND.baseCityCoords.lat},${BRAND.baseCityCoords.lng}`}
                    allowFullScreen
                  />
                </div>

                <Card className="bg-white/5 border-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="flex-shrink-0 mt-0.5" style={{ color: BRAND.colors.primary }} />
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">Base Location</p>
                      <p className="text-white/70 text-sm">{BRAND.baseArea}</p>
                      <p className="text-white/50 text-xs mt-2">Serving up to 45 miles radius</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="py-20 lg:py-32" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to get started?
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Get your free quote in minutes or call us now for same-day service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-3 px-12 py-6 rounded-2xl text-xl font-bold transition-all hover:scale-105 shadow-2xl"
              style={{
                backgroundColor: BRAND.colors.primary,
                color: BRAND.colors.dark
              }}
            >
              <Phone size={24} />
              Call Now
            </a>
            <Link to="/estimate">
              <Button variant="secondary" className="px-12 py-6 text-xl">
                <span>Get Free Quote</span>
                <ArrowRight size={24} />
              </Button>
            </Link>
          </div>

          <p className="text-white/40 text-sm mt-8">
            {BRAND.hoursDisplay}
          </p>
        </div>
      </Section>
    </div>
  );
}
