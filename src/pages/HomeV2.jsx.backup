import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, MessageCircle, MapPin, ArrowRight, CheckCircle2, Calendar
} from 'lucide-react';
import { BRAND, SERVICES } from '../constants/brand';
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
        className={`${sizeClasses[size]} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity ${invert ? 'invert brightness-0' : ''}`}
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
      {/* Hero Section - Minimal & Modern */}
      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: BRAND.colors.dark }}>
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,207,0,0.08),transparent_50%)]" />

        <Section className="relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-white/80 text-sm font-medium">Available Today</span>
            </div>

            {/* Main Headline - Clean & Bold */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tight leading-[1.1]">
              Mobile Mechanic
              <br />
              <span className="gradient-text">Hertfordshire</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-white/60 max-w-2xl mx-auto font-light">
              Professional diagnostics & repairs at your location.
              <span className="text-white/80 font-normal"> Same-day service available.</span>
            </p>

            {/* Single CTA */}
            <div className="pt-4">
              <a
                href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-2xl text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl"
                style={{
                  backgroundColor: BRAND.colors.primary,
                  color: BRAND.colors.dark,
                  boxShadow: `0 20px 60px ${BRAND.colors.primary}30`
                }}
              >
                <Phone size={24} />
                {BRAND.phoneDisplay}
              </a>
            </div>

            {/* Minimal Info Line */}
            <div className="flex items-center justify-center gap-6 text-white/50 text-sm pt-6">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} style={{ color: BRAND.colors.primary }} />
                Fully Mobile
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} style={{ color: BRAND.colors.primary }} />
                Fair Pricing
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <MapPin size={16} style={{ color: BRAND.colors.primary }} />
                Hemel Hempstead
              </span>
            </div>
          </div>
        </Section>
      </div>

      {/* Services Section - Clean Grid */}
      <Section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Our Services
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Transparent pricing. Professional service. No hidden fees.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link key={service.slug} to="/estimate">
                <Card className="group h-full p-8 hover:scale-105 hover:border-yellow-500/50 transition-all duration-500 cursor-pointer">
                  {/* Service Info */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-xl font-black gradient-text whitespace-nowrap ml-4">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                      {service.desc}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white/50 group-hover:text-yellow-400 transition-colors text-sm font-medium">
                    <span>Get Quote</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* BYO Note */}
          <div className="mt-12 text-center">
            <Card className="inline-block bg-white/5 border-white/10 px-8 py-4">
              <p className="text-white/70 text-sm">
                <CheckCircle2 size={16} className="inline mr-2" style={{ color: BRAND.colors.primary }} />
                <strong className="text-white">BYO Parts Welcome</strong> — Bring your own parts, we'll fit them
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Trusted Brands - Redesigned Minimal */}
      <Section className="py-20" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">
              Quality Parts, Trusted Brands
            </h2>
            <p className="text-white/50 text-sm max-w-xl mx-auto">
              We use premium parts from industry-leading manufacturers
            </p>
          </div>

          {/* Infinite Scrolling Brands */}
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

      {/* About Section - Redesigned Modern */}
      <Section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
                  About FixNow
                </h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Professional mobile mechanic service based in{' '}
                  <span className="text-white font-semibold">{BRAND.baseCityCoords.city}</span>.
                  We bring workshop-quality repairs directly to your location.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-4">
                {[
                  'Major mechanical repairs & diagnostics',
                  'Transparent pricing with no hidden fees',
                  'Same-day service available',
                  'Covering Hertfordshire & surrounding areas'
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" style={{ color: BRAND.colors.primary }} />
                    <span className="text-white/80">{point}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link to="/services">
                  <Button variant="secondary" className="group">
                    <span>View Coverage Areas</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Image Placeholder */}
            <div className="relative">
              <Card className="aspect-[4/3] bg-gradient-to-br from-yellow-500/10 to-transparent relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center" style={{ backgroundColor: `${BRAND.colors.primary}20` }}>
                      <MapPin size={40} style={{ color: BRAND.colors.primary }} />
                    </div>
                    <p className="text-white/50 text-sm">
                      Upload image:<br />
                      <code className="text-xs text-white/40">/public/images/about-image.jpg</code>
                    </p>
                  </div>
                </div>
              </Card>

              {/* Floating Card */}
              <Card className="absolute -bottom-6 -left-6 p-6 bg-white/10 backdrop-blur-xl border-white/20 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: BRAND.colors.primary }}>
                    <Calendar size={24} style={{ color: BRAND.colors.dark }} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">45 Miles</p>
                    <p className="text-white/60 text-sm">Service Radius</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Coverage Section - Visual & Clean */}
      <Section className="py-20" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            We Cover Hertfordshire
          </h2>
          <p className="text-white/60 mb-12 max-w-2xl mx-auto">
            Mobile service within 45 miles of Hemel Hempstead. Diagnostic visits from £15-£25 based on distance.
          </p>

          {/* Location Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {BRAND.serviceAreas.map((area) => (
              <Card key={area} className="p-4 text-center hover:scale-105 hover:border-yellow-500/40 transition-all duration-300">
                <MapPin size={24} className="mx-auto mb-2 opacity-50" style={{ color: BRAND.colors.primary }} />
                <p className="text-white text-sm font-medium">{area}</p>
              </Card>
            ))}
          </div>

          {/* Check Coverage CTA */}
          <div className="mt-12">
            <Link to="/estimate">
              <Button variant="primary" className="px-8">
                Check Your Postcode
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Final CTA - Clean & Powerful */}
      <Section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
              Need a mechanic today?
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Get your free quote in under 2 minutes or call us now for same-day service.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:scale-105 shadow-2xl"
                style={{
                  backgroundColor: BRAND.colors.primary,
                  color: BRAND.colors.dark
                }}
              >
                <Phone size={22} />
                Call Now
              </a>
              <Link to="/estimate">
                <Button variant="secondary" className="px-10 py-5 text-lg">
                  Get Free Quote
                  <ArrowRight size={22} />
                </Button>
              </Link>
            </div>

            {/* Hours */}
            <p className="text-white/40 text-sm pt-4">
              {BRAND.hoursDisplay}
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
