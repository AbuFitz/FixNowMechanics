import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench, Clock, MapPin, Shield, Phone, MessageCircle,
  Gauge, BadgeCheck, BatteryCharging, Droplet, Settings2,
  CheckCircle2, Calculator
} from 'lucide-react';
import { BRAND, SERVICES, CALLOUT_NOTE, DIAGNOSTIC_PRICING } from '../constants/brand';
import { Section } from '../components/Layout';
import { LinkButton, Button } from '../components/Button';
import { Card, CardBody } from '../components/Card';
import { Logo } from '../components/Logo';
import { ServiceImage, HeroImage } from '../components/ServiceImage';
import CompanyVanImage from '../components/CompanyVan.png';

function Pill({ icon: Icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/90 backdrop-blur text-sm">
      {Icon && <Icon size={16} className="opacity-80" />}
      {children}
    </div>
  );
}

function BrandLogo({ name, logo, size = "medium", invert = false }) {
  // Different sizes for different logos to account for design variations
  const sizeClasses = {
    small: "h-8",       // 32px - Brembo
    medium: "h-10",     // 40px - Liqui Moly, Mann
    large: "h-24",      // 96px - Mobil, Castrol, Pagid, Textar, Valvoline, Bosch
    xlarge: "h-24",     // 96px - Bilstein, Eibach
  };
  
  return (
    <div className="flex items-center justify-center px-8 sm:px-10">
      <img 
        src={logo} 
        alt={name}
        className={`${sizeClasses[size]} w-auto object-contain opacity-90 hover:opacity-100 transition-opacity ${invert ? 'invert brightness-0' : ''}`}
      />
    </div>
  );
}

function ServiceCard({ service, icon: Icon }) {
  return (
    <Card className="group hover:scale-[1.02] transition-all duration-500 hover:border-yellow-500/40 hover:shadow-xl hover:shadow-yellow-500/10 overflow-hidden h-full relative">
      {/* Service Image with overlay gradient */}
      <div className="relative overflow-hidden">
        <ServiceImage service={service.slug} className="h-40 lg:h-48 w-full transform group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <CardBody className="space-y-3 lg:space-y-4 p-5 lg:p-6">
        <div className="flex items-start justify-between">
          <div
            className="rounded-xl p-2.5 lg:p-3 inline-flex transform group-hover:rotate-3 transition-transform duration-300"
            style={{ backgroundColor: `${BRAND.colors.primary}20` }}
          >
            <Icon size={22} className="lg:w-7 lg:h-7" style={{ color: BRAND.colors.primary }} />
          </div>
          <span
            className="text-base lg:text-xl font-bold gradient-text"
          >
            {service.price}
          </span>
        </div>
        <div>
          <h3 className="text-base lg:text-xl font-bold text-white mb-1.5 lg:mb-2 group-hover:text-yellow-500 transition-colors duration-300">{service.title}</h3>
          <p className="text-white/70 text-sm lg:text-sm leading-relaxed">{service.desc}</p>
        </div>
        <Link to="/estimate" className="block mt-3 lg:mt-4">
          <Button
            variant="ghost"
            icon={MessageCircle}
            className="w-full text-sm group-hover:bg-yellow-500/10 border border-yellow-500/0 group-hover:border-yellow-500/30 transition-all duration-300"
          >
            Request Quote
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}

export default function Home() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceIcons = [Gauge, Wrench, BatteryCharging, Droplet, Settings2];

  const features = [
    { icon: Shield, title: 'Transparent Pricing', desc: 'No hidden fees or markups' },
    { icon: Clock, title: 'Flexible Hours', desc: BRAND.hoursDisplay },
    { icon: MapPin, title: 'We Come To You', desc: 'Service at your location' },
    { icon: BadgeCheck, title: 'Quality Work', desc: 'Careful attention to every repair' },
  ];

  return (
    <div>
      {/* Announcement Bar */}
      <div className="w-full" style={{ background: BRAND.colors.mid }}>
        <Section className="py-3">
          {/* Desktop */}
          <div className="hidden lg:flex items-center justify-center gap-3 text-white/90 text-sm text-center px-4">
            <Shield size={16} style={{ color: BRAND.colors.primary }} className="flex-shrink-0" />
            <span className="font-medium">{CALLOUT_NOTE}</span>
          </div>
          {/* Mobile - Compact */}
          <div className="lg:hidden flex items-center justify-center gap-2 text-white/90 text-xs px-3">
            <Shield size={14} style={{ color: BRAND.colors.primary }} className="flex-shrink-0" />
            <span className="font-medium">Diagnostic visit £15-£25 based on distance</span>
          </div>
        </Section>
      </div>

      {/* Hero Section - Redesigned */}
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: BRAND.colors.dark }}
      >
        {/* Background Image - Full Coverage */}
        <div className="absolute inset-0">
          <img
            src={CompanyVanImage}
            alt="FixNow Mechanics Mobile Service"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/80" />
        </div>

        <Section className="py-12 lg:py-24 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Headline */}
            <div className="space-y-4 lg:space-y-6 mb-8 lg:mb-10">
              <h1 className="text-4xl lg:text-7xl font-black leading-tight text-white drop-shadow-2xl">
                Mobile Mechanic Across<br/>
                <span className="gradient-text">Hertfordshire</span>
              </h1>

              <p className="text-xl lg:text-3xl font-bold text-white/90 drop-shadow-lg">
                Same-Day Service Available
              </p>

              {/* Sub-text with key info */}
              <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 text-white/80 text-sm lg:text-base">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={18} style={{ color: BRAND.colors.primary }} />
                  <strong>Fully Mobile</strong>
                </span>
                <span className="text-white/40">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={18} style={{ color: BRAND.colors.primary }} />
                  <strong>Fair Pricing</strong>
                </span>
                <span className="text-white/40">•</span>
                <a
                  href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors font-bold"
                  style={{ color: BRAND.colors.primary }}
                >
                  <Phone size={18} />
                  {BRAND.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="mb-10 lg:mb-12">
              <a
                href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 lg:px-14 lg:py-6 rounded-2xl text-xl lg:text-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-2xl"
                style={{
                  backgroundColor: BRAND.colors.primary,
                  color: BRAND.colors.dark,
                  boxShadow: `0 20px 60px ${BRAND.colors.primary}40`
                }}
              >
                <Phone size={28} />
                CALL NOW
              </a>
            </div>

            {/* Service Icons Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
              <Card className="p-4 lg:p-6 text-center hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-md border-white/20">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: `${BRAND.colors.primary}30` }}>
                  <Clock size={28} className="lg:w-8 lg:h-8" style={{ color: BRAND.colors.primary }} />
                </div>
                <h3 className="text-white font-bold text-sm lg:text-base">Same-Day<br/>Service</h3>
              </Card>

              <Card className="p-4 lg:p-6 text-center hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-md border-white/20">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: `${BRAND.colors.primary}30` }}>
                  <Gauge size={28} className="lg:w-8 lg:h-8" style={{ color: BRAND.colors.primary }} />
                </div>
                <h3 className="text-white font-bold text-sm lg:text-base">OBD<br/>Diagnostics</h3>
              </Card>

              <Card className="p-4 lg:p-6 text-center hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-md border-white/20">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: `${BRAND.colors.primary}30` }}>
                  <Settings2 size={28} className="lg:w-8 lg:h-8" style={{ color: BRAND.colors.primary }} />
                </div>
                <h3 className="text-white font-bold text-sm lg:text-base">Brakes &<br/>Servicing</h3>
              </Card>

              <Card className="p-4 lg:p-6 text-center hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-md border-white/20">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: `${BRAND.colors.primary}30` }}>
                  <MapPin size={28} className="lg:w-8 lg:h-8" style={{ color: BRAND.colors.primary }} />
                </div>
                <h3 className="text-white font-bold text-sm lg:text-base">Fully<br/>Mobile</h3>
              </Card>
            </div>

            {/* Secondary CTAs */}
            <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center max-w-2xl mx-auto">
              <Link to="/estimate" className="flex-1 sm:flex-initial">
                <Button variant="secondary" icon={Calculator} className="w-full text-base lg:text-lg py-4 px-8 border-2">
                  Get Free Quote
                </Button>
              </Link>
              <LinkButton
                variant="ghost"
                icon={MessageCircle}
                href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${BRAND.whatsappPrefill}`}
                className="flex-1 sm:flex-initial text-base lg:text-lg py-4 px-8 border border-white/30 hover:border-white/50"
              >
                WhatsApp Us
              </LinkButton>
            </div>
          </div>
        </Section>
      </div>

      {/* Features */}
      <Section className="py-6 lg:py-16">
        {/* Mobile: Compact 2-column grid with better design */}
        <div className="lg:hidden grid grid-cols-2 gap-3">
          {features.map((feature, i) => (
            <Card key={i} className="p-3.5 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/5">
              <div className="text-center">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-md"
                  style={{ backgroundColor: `${BRAND.colors.primary}20` }}
                >
                  <feature.icon size={22} style={{ color: BRAND.colors.primary }} />
                </div>
                <h3 className="text-white font-bold text-xs mb-1 leading-tight">{feature.title}</h3>
                <p className="text-white/70 text-[10px] leading-snug">{feature.desc}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Desktop: Grid layout with enhanced hover effects */}
        <div className="hidden lg:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="p-4 lg:p-6 text-center hover:scale-105 hover:border-yellow-500/40 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-500 group">
              <div
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl mx-auto mb-3 lg:mb-4 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300"
                style={{ backgroundColor: `${BRAND.colors.primary}20` }}
              >
                <feature.icon size={24} className="lg:w-8 lg:h-8" style={{ color: BRAND.colors.primary }} />
              </div>
              <h3 className="text-white font-bold text-base lg:text-lg mb-1 lg:mb-2 group-hover:text-yellow-400 transition-colors">{feature.title}</h3>
              <p className="text-white/70 text-xs lg:text-sm group-hover:text-white/80 transition-colors">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Trusted Brands & Parts */}
      <Section className="py-3 lg:py-12" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="text-center mb-2 lg:mb-8">
          <h2 className="text-white text-base lg:text-2xl font-bold mb-1 lg:mb-2">
            Quality Parts & Trusted Brands
          </h2>
          <p className="hidden lg:block text-white/60 text-sm max-w-2xl mx-auto">
            We work with premium and budget-friendly brands to suit your needs. From OEM quality to value options — you choose your budget, we recommend the best.
          </p>
        </div>
        
        {/* Infinite Scrolling Brands */}
        <div className="relative overflow-hidden py-2 lg:py-3">
          <div className="flex animate-scroll-mobile sm:animate-scroll-slow">
            <div className="flex items-center gap-0 flex-shrink-0">
              <BrandLogo name="Brembo" logo="/logos/brembo.png" size="small" />
              <BrandLogo name="Castrol" logo="/logos/castrol.svg" size="large" />
              <BrandLogo name="Liqui Moly" logo="/logos/liquimoly.png" size="medium" />
              <BrandLogo name="Mann" logo="/logos/mann.svg" size="medium" invert={true} />
              <BrandLogo name="Mobil" logo="/logos/mobil.svg" size="large" />
              <BrandLogo name="Pagid" logo="/logos/pagid.svg" size="large" invert={true} />
              <BrandLogo name="Textar" logo="/logos/textar.svg" size="large" />
              <BrandLogo name="Valvoline" logo="/logos/valvoline.svg" size="large" />
              <BrandLogo name="Bilstein" logo="/logos/bilstein.svg" size="xlarge" invert={true} />
              <BrandLogo name="Bosch" logo="/logos/bosch.svg" size="large" invert={true} />
              <BrandLogo name="Eibach" logo="/logos/eibach.svg" size="xlarge" />
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
              <BrandLogo name="Bilstein" logo="/logos/bilstein.svg" size="xlarge" invert={true} />
              <BrandLogo name="Bosch" logo="/logos/bosch.svg" size="large" invert={true} />
              <BrandLogo name="Eibach" logo="/logos/eibach.svg" size="xlarge" />
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
              <BrandLogo name="Bilstein" logo="/logos/bilstein.svg" size="xlarge" invert={true} />
              <BrandLogo name="Bosch" logo="/logos/bosch.svg" size="large" invert={true} />
              <BrandLogo name="Eibach" logo="/logos/eibach.svg" size="xlarge" />
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
              <BrandLogo name="Bilstein" logo="/logos/bilstein.svg" size="xlarge" invert={true} />
              <BrandLogo name="Bosch" logo="/logos/bosch.svg" size="large" invert={true} />
              <BrandLogo name="Eibach" logo="/logos/eibach.svg" size="xlarge" />
            </div>
          </div>
        </div>

        <div className="hidden lg:block text-center mt-6">
          <p className="text-white/50 text-xs">
            We recommend oils and parts based on your vehicle type, usage, and budget. Premium performance or cost-effective quality — your choice.
          </p>
        </div>
      </Section>

      {/* Services */}
      <Section className="py-4 lg:py-16">
        <div className="text-center mb-3 lg:mb-12">
          <h2 className="text-white text-lg lg:text-4xl font-bold mb-1 lg:mb-3">
            Our Core Services
          </h2>
          <p className="hidden lg:block text-white/70 text-sm lg:text-lg max-w-3xl mx-auto mb-4 lg:mb-6">
            Specializing in major mechanical repairs and diagnostics. Fixed-price services with transparent pricing.
          </p>

          {/* BYO Policy Callout - Desktop Only */}
          <Card className="hidden lg:inline-block bg-white/5 border-white/20 p-2 lg:p-4 max-w-2xl">
            <div className="flex items-center justify-center gap-2 text-white/90">
              <CheckCircle2 size={14} className="lg:w-5 lg:h-5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
              <p className="text-[10px] lg:text-sm font-medium">
                <span style={{ color: BRAND.colors.primary }}>BYO Parts:</span> Bring your own parts, we'll fit them
              </p>
            </div>
          </Card>
        </div>

        {/* Mobile: Modern single-column cards with enhanced design */}
        <div className="lg:hidden space-y-3 px-2">
          {SERVICES.map((service, i) => (
            <Card
              key={service.slug}
              className="overflow-hidden hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 active:scale-98"
            >
              <div className="flex items-start gap-3 p-3.5">
                {/* Icon */}
                <div
                  className="rounded-xl p-2.5 flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: `${BRAND.colors.primary}20` }}
                >
                  {React.createElement(serviceIcons[i], { size: 22, style: { color: BRAND.colors.primary } })}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-white font-bold text-sm leading-tight">
                      {service.title}
                    </h3>
                    <span
                      className="text-sm font-bold flex-shrink-0 gradient-text"
                    >
                      {service.price}
                    </span>
                  </div>
                  <p className="text-white/75 text-xs leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={service}
              icon={serviceIcons[i]}
            />
          ))}
        </div>

        {/* Pricing Disclaimer - Hidden on mobile, desktop only */}
        <div className="hidden lg:block mt-3 lg:mt-8 text-center px-4 lg:px-0">
          <Card className="inline-block bg-white/5 border-white/10 p-2 lg:p-4 max-w-3xl">
            <p className="text-white/60 text-[10px] lg:text-sm">
              *All prices are "from" and depend on your vehicle and distance from Hemel Hempstead. Exact pricing is confirmed in the booking form after you enter your postcode.
            </p>
          </Card>
        </div>

        {/* Contact for Other Services - More compact on mobile */}
        <div className="mt-4 lg:mt-12 px-4 lg:px-0">
          <Card className="p-3 lg:p-6 bg-gradient-to-r from-white/5 to-white/10 border-white/20">
            <div className="text-center space-y-2 lg:space-y-3">
              <h3 className="text-white text-sm lg:text-xl font-bold">
                Need a Different Repair?
              </h3>
              <p className="hidden lg:block text-white/70 text-xs lg:text-sm max-w-2xl mx-auto leading-relaxed">
                We focus on major mechanical work like diagnostics, braking systems, suspension, and engine servicing.
                For other repairs not listed above, please reach out via WhatsApp or phone to discuss your specific needs.
              </p>
              <div className="flex gap-2 lg:gap-3 justify-center pt-1 lg:pt-2">
                <LinkButton
                  variant="ghost"
                  icon={MessageCircle}
                  href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${encodeURIComponent('Hi! I need help with a repair not listed on your website')}`}
                  className="flex-1 lg:flex-initial lg:min-w-[180px] text-xs lg:text-sm py-2 lg:py-3"
                >
                  WhatsApp
                </LinkButton>
                <Link to="/estimate" className="flex-1 lg:flex-initial">
                  <Button variant="primary" icon={Calculator} className="w-full lg:min-w-[180px] text-xs lg:text-sm py-2 lg:py-3">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Work Showcase Section */}
      <Section className="py-8 lg:py-16">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-3">
            Recent Work & Happy Customers
          </h2>
          <p className="text-white/70 text-base lg:text-lg max-w-2xl mx-auto">
            See the quality of our work and read what our customers have to say
          </p>
        </div>

        {/* Placeholder for work photos - You can add your photos here */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-10">
          <Card className="group overflow-hidden hover:scale-105 transition-all duration-500">
            <div className="aspect-[4/3] bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,184,0,0.1),transparent_50%)]" />
              <div className="relative z-10 text-center p-6">
                <Wrench size={48} className="mx-auto mb-3 opacity-50" style={{ color: BRAND.colors.primary }} />
                <p className="text-white/60 text-sm">Upload your work photos to<br/><code className="text-xs">/public/work-photos/</code></p>
              </div>
            </div>
          </Card>

          <Card className="group overflow-hidden hover:scale-105 transition-all duration-500">
            <div className="aspect-[4/3] bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,184,0,0.1),transparent_50%)]" />
              <div className="relative z-10 text-center p-6">
                <Gauge size={48} className="mx-auto mb-3 opacity-50" style={{ color: BRAND.colors.primary }} />
                <p className="text-white/60 text-sm">Diagnostics &<br/>Engine Work</p>
              </div>
            </div>
          </Card>

          <Card className="group overflow-hidden hover:scale-105 transition-all duration-500">
            <div className="aspect-[4/3] bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,184,0,0.1),transparent_50%)]" />
              <div className="relative z-10 text-center p-6">
                <Settings2 size={48} className="mx-auto mb-3 opacity-50" style={{ color: BRAND.colors.primary }} />
                <p className="text-white/60 text-sm">Brake & Suspension<br/>Repairs</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Trust Signals */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 text-center hover:scale-105 transition-all duration-300 bg-white/5">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: `${BRAND.colors.primary}30` }}>
              <BadgeCheck size={32} style={{ color: BRAND.colors.primary }} />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Professional Service</h3>
            <p className="text-white/70 text-sm">Quality work with attention to every detail</p>
          </Card>

          <Card className="p-6 text-center hover:scale-105 transition-all duration-300 bg-white/5">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: `${BRAND.colors.primary}30` }}>
              <Clock size={32} style={{ color: BRAND.colors.primary }} />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Same-Day Available</h3>
            <p className="text-white/70 text-sm">Fast response and flexible scheduling</p>
          </Card>

          <Card className="p-6 text-center hover:scale-105 transition-all duration-300 bg-white/5">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: `${BRAND.colors.primary}30` }}>
              <Shield size={32} style={{ color: BRAND.colors.primary }} />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Fair & Transparent</h3>
            <p className="text-white/70 text-sm">No hidden fees, honest pricing</p>
          </Card>
        </div>

        {/* Customer Testimonial Placeholder */}
        <div className="mt-10 lg:mt-12 max-w-3xl mx-auto">
          <Card className="p-8 lg:p-10 bg-gradient-to-br from-white/10 to-white/5 border-white/20 text-center">
            <div className="mb-6">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6" style={{ fill: BRAND.colors.primary }} viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white/60 text-sm italic mb-4">
                "Customer reviews coming soon! Be one of our first customers and share your experience."
              </p>
              <p className="text-white/80 text-base font-medium">
                Recently launched - building our reputation one satisfied customer at a time
              </p>
            </div>
            <div className="pt-6 border-t border-white/10">
              <p className="text-white/70 text-sm">
                Had a great experience? We'd love to hear from you!<br/>
                <a href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${encodeURIComponent('Hi! I had a great experience and would like to leave a review')}`} className="font-semibold hover:underline" style={{ color: BRAND.colors.primary }}>
                  Share your feedback →
                </a>
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* About Section with Map */}
      <Section className="py-4 lg:py-16">
        <Card className="p-3 lg:p-8 xl:p-12">
          <div className="grid md:grid-cols-2 gap-4 lg:gap-10">
            <div className="text-white space-y-2 lg:space-y-6">
              <h2 className="text-base lg:text-3xl font-bold">About FixNow Mechanics</h2>
              <p className="text-white/80 leading-relaxed text-xs lg:text-base">
                We're a mobile mechanic service based in <strong>{BRAND.baseCityCoords.city}</strong>,
                covering Hertfordshire and surrounding areas. Our mission is simple — bring
                workshop-quality repairs directly to your home or workplace with full
                transparency and reliability.
              </p>

              <div className="space-y-1.5 lg:space-y-3 text-white/85 text-xs lg:text-base">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="lg:w-5 lg:h-5 mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                  <div>
                    <strong>Major mechanical repairs</strong> — diagnostics, brakes, suspension & engine work
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="lg:w-5 lg:h-5 mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                  <div>
                    <strong>BYO parts welcome</strong> — bring your own parts, we'll fit them
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="lg:w-5 lg:h-5 mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                  <div>
                    <strong>Transparent pricing</strong> with detailed breakdown before we start
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="lg:w-5 lg:h-5 mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                  <div>
                    <strong>Flexible hours:</strong> {BRAND.hoursDisplay}
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="lg:w-5 lg:h-5 mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                  <div>
                    <strong>Wide coverage</strong> across Hertfordshire and beyond
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-1.5 lg:mb-3 text-xs lg:text-lg">Service Areas</h3>
                <div className="flex flex-wrap gap-1 lg:gap-2">
                  {BRAND.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2 lg:px-4 py-0.5 lg:py-2 rounded-full border border-white/10 text-white/90 bg-white/5 text-[10px] lg:text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-2 lg:space-y-4">
              <h3 className="text-white font-semibold text-xs lg:text-lg">Our Location</h3>

              {/* Interactive Map */}
              <div className="rounded-lg lg:rounded-2xl overflow-hidden border border-white/10 h-48 lg:h-96">
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

              <div className="bg-white/5 rounded-lg p-2 lg:p-4 border border-white/10 text-xs lg:text-sm">
                <div className="flex items-start gap-2 mb-1.5 lg:mb-3">
                  <MapPin size={14} className="lg:w-5 lg:h-5 mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                  <div>
                    <p className="text-white font-semibold text-xs lg:text-base">Base Location</p>
                    <p className="text-white/70 text-[10px] lg:text-sm">{BRAND.baseArea}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone size={14} className="lg:w-5 lg:h-5 mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                  <div>
                    <p className="text-white font-semibold text-xs lg:text-base">Contact</p>
                    <a
                      href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                      className="text-[10px] lg:text-sm hover:underline"
                      style={{ color: BRAND.colors.primary }}
                    >
                      {BRAND.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-2 lg:pt-4">
                <p className="text-white/70 text-[10px] lg:text-sm leading-relaxed">
                  FixNow Mechanics is proudly operated under the{' '}
                  <span className="font-semibold" style={{ color: BRAND.colors.primary }}>
                    ARF Automotive Group
                  </span>{' '}
                  — specialists in diagnostics, retrofits & vehicle enhancement.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* FAQ Section - Desktop Only */}
      <Section className="hidden lg:block py-4 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 lg:px-0">
          <div className="text-center mb-3 lg:mb-12">
            <h2 className="text-white text-base lg:text-4xl font-bold mb-1 lg:mb-3">
              Frequently Asked Questions
            </h2>
            <p className="hidden lg:block text-white/70 text-sm lg:text-lg">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-2 lg:space-y-4">
            <Card className="p-2.5 lg:p-6">
              <h3 className="text-white font-bold mb-1 lg:mb-2 flex items-center gap-1.5 lg:gap-2 text-xs lg:text-base">
                <span style={{ color: BRAND.colors.primary }}>Q:</span>
                How much is your diagnostic visit?
              </h3>
              <p className="text-white/80 text-[10px] lg:text-sm pl-4 lg:pl-6">
                Our diagnostic visit costs £15–£25 depending on your distance from Hemel Hempstead. This includes travel, OBD scan, and initial fault checks. The exact price is confirmed when you enter your postcode.
              </p>
            </Card>

            <Card className="p-2.5 lg:p-6">
              <h3 className="text-white font-bold mb-1 lg:mb-2 flex items-center gap-1.5 lg:gap-2 text-xs lg:text-base">
                <span style={{ color: BRAND.colors.primary }}>Q:</span>
                Do you charge extra if you fix my car?
              </h3>
              <p className="text-white/80 text-[10px] lg:text-sm pl-4 lg:pl-6">
                No! If we carry out paid repair work during the same visit, £10 of your diagnostic fee is deducted from the labour, so you're not paying twice.
              </p>
            </Card>

            <Card className="p-2.5 lg:p-6">
              <h3 className="text-white font-bold mb-1 lg:mb-2 flex items-center gap-1.5 lg:gap-2 text-xs lg:text-base">
                <span style={{ color: BRAND.colors.primary }}>Q:</span>
                Can I supply my own parts?
              </h3>
              <p className="text-white/80 text-[10px] lg:text-sm pl-4 lg:pl-6">
                Absolutely! We're happy to fit parts you provide. Just mention it when you get your quote, and we'll confirm the labour cost.
              </p>
            </Card>

            <Card className="p-2.5 lg:p-6">
              <h3 className="text-white font-bold mb-1 lg:mb-2 flex items-center gap-1.5 lg:gap-2 text-xs lg:text-base">
                <span style={{ color: BRAND.colors.primary }}>Q:</span>
                What areas do you cover?
              </h3>
              <p className="text-white/80 text-[10px] lg:text-sm pl-4 lg:pl-6">
                We cover up to 45 miles from Hemel Hempstead, including St Albans, Watford, Luton, Aylesbury, and North London. Enter your postcode in the quote form to check if we cover your area.
              </p>
            </Card>

            <Card className="p-2.5 lg:p-6">
              <h3 className="text-white font-bold mb-1 lg:mb-2 flex items-center gap-1.5 lg:gap-2 text-xs lg:text-base">
                <span style={{ color: BRAND.colors.primary }}>Q:</span>
                How quickly can you come out?
              </h3>
              <p className="text-white/80 text-[10px] lg:text-sm pl-4 lg:pl-6">
                We typically respond within 2 hours and can often attend same day or next day depending on our schedule and your urgency.
              </p>
            </Card>

            <Card className="p-2.5 lg:p-6">
              <h3 className="text-white font-bold mb-1 lg:mb-2 flex items-center gap-1.5 lg:gap-2 text-xs lg:text-base">
                <span style={{ color: BRAND.colors.primary }}>Q:</span>
                What types of repairs can you do at my location?
              </h3>
              <p className="text-white/80 text-[10px] lg:text-sm pl-4 lg:pl-6">
                We specialize in diagnostics, brakes, batteries, oil services, and suspension work. Some complex jobs requiring specialist equipment may need a workshop, but we'll let you know upfront.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-4 lg:py-16">
        <Card className="p-5 lg:p-12 text-center bg-gradient-to-br from-white/10 via-white/5 to-transparent border-2 hover:border-yellow-500/60 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 relative overflow-hidden" style={{ borderColor: `${BRAND.colors.primary}40` }}>
          {/* Decorative gradient orb - Desktop only */}
          <div className="hidden lg:block absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="hidden lg:block absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl" />

          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-white text-lg lg:text-4xl font-bold mb-2 lg:mb-4">
              Need a Mobile Mechanic Today?
            </h2>
            <p className="hidden lg:block text-white/80 text-sm lg:text-lg mb-1 lg:mb-2">
              Get your free quote in under 2 minutes
            </p>
            <p className="text-white/70 text-xs lg:text-sm mb-3 lg:mb-8 flex items-center justify-center gap-2 flex-wrap">
              <span className="flex items-center gap-1">
                <CheckCircle2 size={14} className="text-yellow-400" />
                <span>No obligation</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 size={14} className="text-yellow-400" />
                <span>Instant confirmation</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 size={14} className="text-yellow-400" />
                <span>Professional service</span>
              </span>
            </p>
            <div className="flex flex-col gap-2.5 lg:gap-4 justify-center">
              <Link to="/estimate">
                <Button variant="primary" icon={Calculator} className="w-full text-sm lg:text-lg py-3 lg:py-6 shadow-xl shadow-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/40 transition-all">
                  Get Free Quote Now
                </Button>
              </Link>
              <div className="flex gap-2.5 lg:gap-3">
                <LinkButton
                  variant="secondary"
                  icon={Phone}
                  href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                  className="flex-1 text-xs lg:text-base py-2.5 lg:py-3 hover:bg-yellow-500/5"
                >
                  Call
                </LinkButton>
                <LinkButton
                  variant="ghost"
                  icon={MessageCircle}
                  href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${BRAND.whatsappPrefill}`}
                  className="flex-1 text-xs lg:text-base py-2.5 lg:py-3 hover:bg-white/5"
                >
                  WhatsApp
                </LinkButton>
              </div>
            </div>
            <p className="hidden lg:block text-white/40 text-[10px] lg:text-xs mt-4 lg:mt-6">
              New service launching in Hemel Hempstead • Available {BRAND.hoursDisplay}
            </p>
          </div>
        </Card>
      </Section>
    </div>
  );
}
