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
    medium: "h-10",     // 40px - Liqui Moly, Mann, Mobil
    large: "h-20",      // 80px - Castrol, Pagid, Textar, Valvoline
    xlarge: "h-24",     // 96px - Bilstein, Bosch, Eibach
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
    <Card className="group hover:scale-[1.02] transition-all duration-300 hover:border-yellow-500/30 overflow-hidden h-full">
      {/* Service Image */}
      <ServiceImage service={service.slug} className="h-40 lg:h-48 w-full" />

      <CardBody className="space-y-3 lg:space-y-4 p-5 lg:p-6">
        <div className="flex items-start justify-between">
          <div
            className="rounded-xl p-2.5 lg:p-3 inline-flex"
            style={{ backgroundColor: `${BRAND.colors.primary}20` }}
          >
            <Icon size={22} className="lg:w-7 lg:h-7" style={{ color: BRAND.colors.primary }} />
          </div>
          <span
            className="text-base lg:text-xl font-bold"
            style={{ color: BRAND.colors.primary }}
          >
            {service.price}
          </span>
        </div>
        <div>
          <h3 className="text-base lg:text-xl font-bold text-white mb-1.5 lg:mb-2">{service.title}</h3>
          <p className="text-white/70 text-sm lg:text-sm leading-relaxed">{service.desc}</p>
        </div>
        <Link to="/estimate" className="block mt-3 lg:mt-4">
          <Button
            variant="ghost"
            icon={MessageCircle}
            className="w-full text-sm"
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

      {/* Hero Section */}
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: BRAND.colors.dark }}
      >
        {/* Mobile: Background Image with improved overlay */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src={CompanyVanImage}
            alt="FixNow Mechanics"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <Section className="py-10 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-white space-y-5 lg:space-y-6">
              {/* Pills - Desktop Only */}
              <div className="hidden lg:flex gap-2 flex-wrap">
                <Pill icon={Wrench}>Mobile Mechanic</Pill>
                <Pill icon={Clock}>Flexible Hours</Pill>
                <Pill icon={MapPin}>{BRAND.baseCityCoords.city}</Pill>
              </div>

              {/* Mobile: Compact badge */}
              <div className="lg:hidden inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Wrench size={14} style={{ color: BRAND.colors.primary }} />
                <span className="text-xs font-semibold text-white/90">Mobile Mechanic Service</span>
              </div>

              <div className="space-y-3 lg:space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
                  <span className="block lg:inline">Expert Vehicle </span>
                  <span className="block" style={{ color: BRAND.colors.primary }}>Diagnostics & Repair</span>
                </h1>
                
                {/* Mobile: Simplified tagline */}
                <p className="lg:hidden text-base font-medium text-white/95 drop-shadow leading-relaxed">
                  Professional mobile mechanic bringing workshop-quality repairs to your location
                </p>
                
                {/* Desktop: Full tagline */}
                <p className="hidden lg:block text-xl lg:text-2xl font-medium text-white/70 drop-shadow">
                  {BRAND.tagline}
                </p>
                
                {/* Desktop: Extended description */}
                <p className="hidden lg:block text-white/80 text-base lg:text-lg max-w-2xl leading-relaxed drop-shadow">
                  Diagnostics, repairs, and servicing — done at your driveway or workplace.
                  No workshop visits. No hidden markup. Honest service at fair prices.
                </p>
                
                {/* Mobile: Key benefits */}
                <div className="lg:hidden grid grid-cols-3 gap-3 py-3">
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-1.5 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${BRAND.colors.primary}20` }}>
                      <Shield size={20} style={{ color: BRAND.colors.primary }} />
                    </div>
                    <p className="text-xs font-medium text-white/90">Fair Pricing</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-1.5 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${BRAND.colors.primary}20` }}>
                      <Clock size={20} style={{ color: BRAND.colors.primary }} />
                    </div>
                    <p className="text-xs font-medium text-white/90">Flexible</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-1.5 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${BRAND.colors.primary}20` }}>
                      <MapPin size={20} style={{ color: BRAND.colors.primary }} />
                    </div>
                    <p className="text-xs font-medium text-white/90">Mobile</p>
                  </div>
                </div>
                
                <p className="hidden lg:block text-white/90 text-sm lg:text-base max-w-2xl font-medium drop-shadow">
                  Mobile mechanic covering Hemel Hempstead and surrounding areas – diagnostic visits from £15, with final price confirmed from your postcode.
                </p>
              </div>

              {/* Mobile CTA Buttons - Redesigned */}
              <div className="lg:hidden flex flex-col gap-2.5 pt-3">
                <Link to="/estimate" className="w-full">
                  <Button variant="primary" className="w-full py-3.5 text-base font-semibold" icon={Calculator}>
                    Get Free Quote
                  </Button>
                </Link>
                <div className="grid grid-cols-2 gap-2.5">
                  <LinkButton
                    variant="secondary"
                    icon={Phone}
                    href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                    className="py-3 text-sm font-semibold"
                  >
                    Call
                  </LinkButton>
                  <LinkButton
                    variant="ghost"
                    icon={MessageCircle}
                    href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${BRAND.whatsappPrefill}`}
                    className="py-3 text-sm font-semibold"
                  >
                    WhatsApp
                  </LinkButton>
                </div>
              </div>

              {/* Desktop CTA Buttons */}
              <div className="hidden lg:flex gap-4">
                <Link to="/estimate" className="flex-1 sm:flex-initial">
                  <Button variant="primary" className="w-full" icon={Calculator}>
                    Get Quote
                  </Button>
                </Link>
                <LinkButton
                  variant="secondary"
                  icon={Phone}
                  href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                  className="flex-1 sm:flex-initial"
                >
                  Call Now
                </LinkButton>
              </div>

              {/* Mobile: Pricing from badge */}
              <div className="lg:hidden flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <Calculator size={16} style={{ color: BRAND.colors.primary }} />
                <span className="text-xs font-semibold text-white/95">Diagnostic visits from £15</span>
              </div>

              {/* Desktop: Stats */}
              <div className="hidden lg:grid grid-cols-3 gap-3 lg:gap-4 pt-4 lg:pt-6 border-t border-white/20 backdrop-blur-sm bg-white/5 rounded-lg p-3 lg:p-4 lg:bg-transparent lg:backdrop-blur-none lg:border-white/10">
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold drop-shadow" style={{ color: BRAND.colors.primary }}>100%</div>
                  <div className="text-white/70 text-xs lg:text-sm">Mobile Service</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold drop-shadow" style={{ color: BRAND.colors.primary }}>Fair</div>
                  <div className="text-white/70 text-xs lg:text-sm">Pricing</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold drop-shadow" style={{ color: BRAND.colors.primary }}>6+</div>
                  <div className="text-white/70 text-xs lg:text-sm">Areas</div>
                </div>
              </div>
            </div>

            {/* Right: Hero Visual - Desktop Only */}
            <div className="relative hidden lg:flex items-center justify-center">
              <HeroImage className="min-h-[400px] w-full" />
            </div>
          </div>
        </Section>
      </div>

      {/* Features */}
      <Section className="py-8 lg:py-16">
        {/* Mobile: Single column with visual cards */}
        <div className="lg:hidden space-y-4">
          {features.map((feature, i) => (
            <Card key={i} className="p-5 hover:scale-[1.01] transition-transform">
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${BRAND.colors.primary}20` }}
                >
                  <feature.icon size={28} style={{ color: BRAND.colors.primary }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base mb-1">{feature.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Desktop: Grid layout */}
        <div className="hidden lg:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="p-4 lg:p-6 text-center hover:scale-[1.02] transition-transform">
              <div
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl mx-auto mb-3 lg:mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${BRAND.colors.primary}20` }}
              >
                <feature.icon size={24} className="lg:w-8 lg:h-8" style={{ color: BRAND.colors.primary }} />
              </div>
              <h3 className="text-white font-bold text-base lg:text-lg mb-1 lg:mb-2">{feature.title}</h3>
              <p className="text-white/70 text-xs lg:text-sm">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Trusted Brands & Parts */}
      <Section className="py-6 lg:py-12" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="text-center mb-4 lg:mb-8">
          <h2 className="text-white text-2xl font-bold mb-2">
            Quality Parts & Trusted Brands
          </h2>
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            We work with premium and budget-friendly brands to suit your needs. From OEM quality to value options — you choose your budget, we recommend the best.
          </p>
        </div>
        
        {/* Infinite Scrolling Brands */}
        <div className="relative overflow-hidden py-3">
          <div className="flex animate-scroll-mobile sm:animate-scroll-slow">
            <div className="flex items-center gap-0 flex-shrink-0">
              <BrandLogo name="Brembo" logo="/logos/brembo.png" size="small" />
              <BrandLogo name="Castrol" logo="/logos/castrol.svg" size="large" />
              <BrandLogo name="Liqui Moly" logo="/logos/liquimoly.png" size="medium" />
              <BrandLogo name="Mann" logo="/logos/mann.svg" size="medium" invert={true} />
              <BrandLogo name="Mobil" logo="/logos/mobil.svg" size="medium" />
              <BrandLogo name="Pagid" logo="/logos/pagid.svg" size="large" invert={true} />
              <BrandLogo name="Textar" logo="/logos/textar.svg" size="large" />
              <BrandLogo name="Valvoline" logo="/logos/valvoline.svg" size="large" />
              <BrandLogo name="Bilstein" logo="/logos/bilstein.svg" size="xlarge" invert={true} />
              <BrandLogo name="Bosch" logo="/logos/bosch.svg" size="xlarge" invert={true} />
              <BrandLogo name="Eibach" logo="/logos/eibach.svg" size="xlarge" />
            </div>
            <div className="flex items-center gap-0 flex-shrink-0">
              <BrandLogo name="Brembo" logo="/logos/brembo.png" size="small" />
              <BrandLogo name="Castrol" logo="/logos/castrol.svg" size="large" />
              <BrandLogo name="Liqui Moly" logo="/logos/liquimoly.png" size="medium" />
              <BrandLogo name="Mann" logo="/logos/mann.svg" size="medium" invert={true} />
              <BrandLogo name="Mobil" logo="/logos/mobil.svg" size="medium" />
              <BrandLogo name="Pagid" logo="/logos/pagid.svg" size="large" invert={true} />
              <BrandLogo name="Textar" logo="/logos/textar.svg" size="large" />
              <BrandLogo name="Valvoline" logo="/logos/valvoline.svg" size="large" />
              <BrandLogo name="Bilstein" logo="/logos/bilstein.svg" size="xlarge" invert={true} />
              <BrandLogo name="Bosch" logo="/logos/bosch.svg" size="xlarge" invert={true} />
              <BrandLogo name="Eibach" logo="/logos/eibach.svg" size="xlarge" />
            </div>
            <div className="flex items-center gap-0 flex-shrink-0">
              <BrandLogo name="Brembo" logo="/logos/brembo.png" size="small" />
              <BrandLogo name="Castrol" logo="/logos/castrol.svg" size="large" />
              <BrandLogo name="Liqui Moly" logo="/logos/liquimoly.png" size="medium" />
              <BrandLogo name="Mann" logo="/logos/mann.svg" size="medium" invert={true} />
              <BrandLogo name="Mobil" logo="/logos/mobil.svg" size="medium" />
              <BrandLogo name="Pagid" logo="/logos/pagid.svg" size="large" invert={true} />
              <BrandLogo name="Textar" logo="/logos/textar.svg" size="large" />
              <BrandLogo name="Valvoline" logo="/logos/valvoline.svg" size="large" />
              <BrandLogo name="Bilstein" logo="/logos/bilstein.svg" size="xlarge" invert={true} />
              <BrandLogo name="Bosch" logo="/logos/bosch.svg" size="xlarge" invert={true} />
              <BrandLogo name="Eibach" logo="/logos/eibach.svg" size="xlarge" />
            </div>
            <div className="flex items-center gap-0 flex-shrink-0">
              <BrandLogo name="Brembo" logo="/logos/brembo.png" size="small" />
              <BrandLogo name="Castrol" logo="/logos/castrol.svg" size="large" />
              <BrandLogo name="Liqui Moly" logo="/logos/liquimoly.png" size="medium" />
              <BrandLogo name="Mann" logo="/logos/mann.svg" size="medium" invert={true} />
              <BrandLogo name="Mobil" logo="/logos/mobil.svg" size="medium" />
              <BrandLogo name="Pagid" logo="/logos/pagid.svg" size="large" invert={true} />
              <BrandLogo name="Textar" logo="/logos/textar.svg" size="large" />
              <BrandLogo name="Valvoline" logo="/logos/valvoline.svg" size="large" />
              <BrandLogo name="Bilstein" logo="/logos/bilstein.svg" size="xlarge" invert={true} />
              <BrandLogo name="Bosch" logo="/logos/bosch.svg" size="xlarge" invert={true} />
              <BrandLogo name="Eibach" logo="/logos/eibach.svg" size="xlarge" />
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-white/50 text-xs">
            We recommend oils and parts based on your vehicle type, usage, and budget. Premium performance or cost-effective quality — your choice.
          </p>
        </div>
      </Section>

      {/* Services */}
      <Section className="py-8 lg:py-16">
        <div className="text-center mb-6 lg:mb-12">
          <h2 className="text-white text-2xl lg:text-4xl font-bold mb-2 lg:mb-3">
            Our Core Services
          </h2>
          <p className="text-white/70 text-sm lg:text-lg max-w-3xl mx-auto mb-4 lg:mb-6 px-4 lg:px-0">
            Specializing in major mechanical repairs and diagnostics. Fixed-price services with transparent pricing.
          </p>

          {/* BYO Policy Callout */}
          <Card className="inline-block bg-white/5 border-white/20 p-3 lg:p-4 max-w-2xl mx-4 lg:mx-0">
            <div className="flex items-center justify-center gap-2 lg:gap-3 text-white/90">
              <CheckCircle2 size={16} className="lg:w-5 lg:h-5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
              <p className="text-xs lg:text-sm font-medium text-left">
                <span style={{ color: BRAND.colors.primary }}>BYO Parts:</span> Bring your own parts, we'll fit them
              </p>
            </div>
          </Card>
        </div>

        {/* Mobile: Improved single column layout */}
        <div className="lg:hidden space-y-4">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={service}
              icon={serviceIcons[i]}
            />
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

        {/* Pricing Disclaimer - Mobile optimized */}
        <div className="mt-6 lg:mt-8 text-center px-4 lg:px-0">
          <Card className="inline-block bg-white/5 border-white/10 p-3 lg:p-4 max-w-3xl">
            <p className="text-white/60 text-xs lg:text-sm">
              *All prices are "from" and depend on your vehicle and distance from Hemel Hempstead. Exact pricing is confirmed in the booking form after you enter your postcode.
            </p>
          </Card>
        </div>

        <div className="mt-8 lg:mt-12 space-y-4">
          {/* Contact for Other Services */}
          <Card className="p-5 lg:p-6 bg-gradient-to-r from-white/5 to-white/10 border-white/20 mx-4 lg:mx-0">
            <div className="text-center space-y-3">
              <h3 className="text-white text-lg lg:text-xl font-bold">
                Need a Different Repair?
              </h3>
              <p className="text-white/70 text-sm max-w-2xl mx-auto leading-relaxed">
                We focus on major mechanical work like diagnostics, braking systems, suspension, and engine servicing.
                For other repairs not listed above, please reach out via WhatsApp or phone to discuss your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <LinkButton
                  variant="ghost"
                  icon={MessageCircle}
                  href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${encodeURIComponent('Hi! I need help with a repair not listed on your website')}`}
                  className="min-w-[180px] text-sm"
                >
                  WhatsApp Us
                </LinkButton>
                <Link to="/estimate">
                  <Button variant="primary" icon={Calculator} className="w-full sm:w-auto min-w-[180px] text-sm">
                    Request Quote
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Trusted Brands & Parts */}
      <Section className="py-6 lg:py-12" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="text-center mb-4 lg:mb-8 px-4 lg:px-0">
          <h2 className="text-white text-xl lg:text-2xl font-bold mb-2">
            Quality Parts & Trusted Brands
          </h2>
          <p className="text-white/60 text-sm max-w-2xl mx-auto leading-relaxed">
            We work with premium and budget-friendly brands to suit your needs. From OEM quality to value options — you choose your budget, we recommend the best.
          </p>
        </div>
        
        {/* Infinite Scrolling Brands */}
        <div className="relative overflow-hidden py-3">
          <div className="flex animate-scroll-mobile sm:animate-scroll-slow">
            <div className="flex items-center gap-0 flex-shrink-0">
              <BrandLogo name="Brembo" logo="/logos/brembo.png" size="small" />
              <BrandLogo name="Castrol" logo="/logos/castrol.svg" size="medium" />
              <BrandLogo name="Liqui Moly" logo="/logos/liquimoly.png" size="small" />
              <BrandLogo name="Mann" logo="/logos/mann.svg" size="medium" />
              <BrandLogo name="Mobil" logo="/logos/mobil.svg" size="large" />
              <BrandLogo name="Pagid" logo="/logos/pagid.svg" size="medium" />
              <BrandLogo name="Textar" logo="/logos/textar.svg" size="medium" />
              <BrandLogo name="Valvoline" logo="/logos/valvoline.svg" size="large" />
              <BrandLogo name="Bilstein" logo="/logos/bilstein.svg" size="large" invert={true} />
              <BrandLogo name="Bosch" logo="/logos/bosch.svg" size="large" invert={true} />
              <BrandLogo name="Eibach" logo="/logos/eibach.svg" size="medium" />
            </div>
            <div className="flex items-center gap-0 flex-shrink-0">
              <BrandLogo name="Brembo" logo="/logos/brembo.png" size="small" />
              <BrandLogo name="Castrol" logo="/logos/castrol.svg" size="medium" />
              <BrandLogo name="Liqui Moly" logo="/logos/liquimoly.png" size="small" />
              <BrandLogo name="Mann" logo="/logos/mann.svg" size="medium" />
              <BrandLogo name="Mobil" logo="/logos/mobil.svg" size="large" />
              <BrandLogo name="Pagid" logo="/logos/pagid.svg" size="medium" />
              <BrandLogo name="Textar" logo="/logos/textar.svg" size="medium" />
              <BrandLogo name="Valvoline" logo="/logos/valvoline.svg" size="large" />
              <BrandLogo name="Bilstein" logo="/logos/bilstein.svg" size="large" invert={true} />
              <BrandLogo name="Bosch" logo="/logos/bosch.svg" size="large" invert={true} />
              <BrandLogo name="Eibach" logo="/logos/eibach.svg" size="medium" />
            </div>
            <div className="flex items-center gap-0 flex-shrink-0">
              <BrandLogo name="Brembo" logo="/logos/brembo.png" size="small" />
              <BrandLogo name="Castrol" logo="/logos/castrol.svg" size="medium" />
              <BrandLogo name="Liqui Moly" logo="/logos/liquimoly.png" size="small" />
              <BrandLogo name="Mann" logo="/logos/mann.svg" size="medium" />
              <BrandLogo name="Mobil" logo="/logos/mobil.svg" size="large" />
              <BrandLogo name="Pagid" logo="/logos/pagid.svg" size="medium" />
              <BrandLogo name="Textar" logo="/logos/textar.svg" size="medium" />
              <BrandLogo name="Valvoline" logo="/logos/valvoline.svg" size="large" />
              <BrandLogo name="Bilstein" logo="/logos/bilstein.svg" size="large" invert={true} />
              <BrandLogo name="Bosch" logo="/logos/bosch.svg" size="large" invert={true} />
              <BrandLogo name="Eibach" logo="/logos/eibach.svg" size="medium" />
            </div>
            <div className="flex items-center gap-0 flex-shrink-0">
              <BrandLogo name="Brembo" logo="/logos/brembo.png" size="small" />
              <BrandLogo name="Castrol" logo="/logos/castrol.svg" size="medium" />
              <BrandLogo name="Liqui Moly" logo="/logos/liquimoly.png" size="small" />
              <BrandLogo name="Mann" logo="/logos/mann.svg" size="medium" />
              <BrandLogo name="Mobil" logo="/logos/mobil.svg" size="large" />
              <BrandLogo name="Pagid" logo="/logos/pagid.svg" size="medium" />
              <BrandLogo name="Textar" logo="/logos/textar.svg" size="medium" />
              <BrandLogo name="Valvoline" logo="/logos/valvoline.svg" size="large" />
              <BrandLogo name="Bilstein" logo="/logos/bilstein.svg" size="large" invert={true} />
              <BrandLogo name="Bosch" logo="/logos/bosch.svg" size="large" invert={true} />
              <BrandLogo name="Eibach" logo="/logos/eibach.svg" size="medium" />
            </div>
          </div>
        </div>

        <div className="text-center mt-4 lg:mt-6">
          <p className="text-white/50 text-xs">
            We recommend oils and parts based on your vehicle type, usage, and budget. Premium performance or cost-effective quality — your choice.
          </p>
        </div>
      </Section>

      {/* About Section with Map */}
      <Section className="py-8 lg:py-16">
        <Card className="p-5 lg:p-8 xl:p-12">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            <div className="text-white space-y-4 lg:space-y-6">
              <h2 className="text-xl lg:text-3xl font-bold">About FixNow Mechanics</h2>
              <p className="text-white/80 leading-relaxed text-sm lg:text-base">
                We're a mobile mechanic service based in <strong>{BRAND.baseCityCoords.city}</strong>,
                covering Hertfordshire and surrounding areas. Our mission is simple — bring
                workshop-quality repairs directly to your home or workplace with full
                transparency and reliability.
              </p>

              <div className="space-y-2.5 lg:space-y-3 text-white/85 text-sm lg:text-base">
                <div className="flex items-start gap-2.5 lg:gap-3">
                  <CheckCircle2 size={18} className="lg:w-5 lg:h-5 mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                  <div>
                    <strong>Major mechanical repairs</strong> — diagnostics, brakes, suspension & engine work
                  </div>
                </div>
                <div className="flex items-start gap-2.5 lg:gap-3">
                  <CheckCircle2 size={18} className="lg:w-5 lg:h-5 mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                  <div>
                    <strong>BYO parts welcome</strong> — bring your own parts, we'll fit them
                  </div>
                </div>
                <div className="flex items-start gap-2.5 lg:gap-3">
                  <CheckCircle2 size={18} className="lg:w-5 lg:h-5 mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                  <div>
                    <strong>Transparent pricing</strong> with detailed breakdown before we start
                  </div>
                </div>
                <div className="flex items-start gap-2.5 lg:gap-3">
                  <CheckCircle2 size={18} className="lg:w-5 lg:h-5 mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                  <div>
                    <strong>Flexible hours:</strong> {BRAND.hoursDisplay}
                  </div>
                </div>
                <div className="flex items-start gap-2.5 lg:gap-3">
                  <CheckCircle2 size={18} className="lg:w-5 lg:h-5 mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                  <div>
                    <strong>Wide coverage</strong> across Hertfordshire and beyond
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2 lg:mb-3 text-sm lg:text-lg">Service Areas</h3>
                <div className="flex flex-wrap gap-1.5 lg:gap-2">
                  {BRAND.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2.5 lg:px-4 py-1 lg:py-2 rounded-full border border-white/10 text-white/90 bg-white/5 text-xs lg:text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-3 lg:space-y-4">
              <h3 className="text-white font-semibold text-sm lg:text-lg">Our Location</h3>

              {/* Interactive Map */}
              <div className="rounded-xl lg:rounded-2xl overflow-hidden border border-white/10 h-56 lg:h-96">
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

              <div className="bg-white/5 rounded-xl p-3 lg:p-4 border border-white/10 text-sm">
                <div className="flex items-start gap-2.5 lg:gap-3 mb-2 lg:mb-3">
                  <MapPin size={16} className="lg:w-5 lg:h-5 mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                  <div>
                    <p className="text-white font-semibold text-sm lg:text-base">Base Location</p>
                    <p className="text-white/70 text-xs lg:text-sm">{BRAND.baseArea}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 lg:gap-3">
                  <Phone size={16} className="lg:w-5 lg:h-5 mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                  <div>
                    <p className="text-white font-semibold text-sm lg:text-base">Contact</p>
                    <a
                      href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                      className="text-xs lg:text-sm hover:underline"
                      style={{ color: BRAND.colors.primary }}
                    >
                      {BRAND.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-3 lg:pt-4">
                <p className="text-white/70 text-xs lg:text-sm leading-relaxed">
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

      {/* FAQ Section */}
      <Section className="py-8 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 lg:px-0">
          <div className="text-center mb-6 lg:mb-12">
            <h2 className="text-white text-xl lg:text-4xl font-bold mb-2 lg:mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-white/70 text-sm lg:text-lg">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-3 lg:space-y-4">
            <Card className="p-4 lg:p-6">
              <h3 className="text-white font-bold mb-2 flex items-center gap-2 text-sm lg:text-base">
                <span style={{ color: BRAND.colors.primary }}>Q:</span>
                How much is your diagnostic visit?
              </h3>
              <p className="text-white/80 text-xs lg:text-sm pl-6">
                Our diagnostic visit costs £15–£25 depending on your distance from Hemel Hempstead. This includes travel, OBD scan, and initial fault checks. The exact price is confirmed when you enter your postcode.
              </p>
            </Card>

            <Card className="p-4 lg:p-6">
              <h3 className="text-white font-bold mb-2 flex items-center gap-2 text-sm lg:text-base">
                <span style={{ color: BRAND.colors.primary }}>Q:</span>
                Do you charge extra if you fix my car?
              </h3>
              <p className="text-white/80 text-xs lg:text-sm pl-6">
                No! If we carry out paid repair work during the same visit, £10 of your diagnostic fee is deducted from the labour, so you're not paying twice.
              </p>
            </Card>

            <Card className="p-4 lg:p-6">
              <h3 className="text-white font-bold mb-2 flex items-center gap-2 text-sm lg:text-base">
                <span style={{ color: BRAND.colors.primary }}>Q:</span>
                Can I supply my own parts?
              </h3>
              <p className="text-white/80 text-xs lg:text-sm pl-6">
                Absolutely! We're happy to fit parts you provide. Just mention it when you get your quote, and we'll confirm the labour cost.
              </p>
            </Card>

            <Card className="p-4 lg:p-6">
              <h3 className="text-white font-bold mb-2 flex items-center gap-2 text-sm lg:text-base">
                <span style={{ color: BRAND.colors.primary }}>Q:</span>
                What areas do you cover?
              </h3>
              <p className="text-white/80 text-xs lg:text-sm pl-6">
                We cover up to 45 miles from Hemel Hempstead, including St Albans, Watford, Luton, Aylesbury, and North London. Enter your postcode in the quote form to check if we cover your area.
              </p>
            </Card>

            <Card className="p-4 lg:p-6">
              <h3 className="text-white font-bold mb-2 flex items-center gap-2 text-sm lg:text-base">
                <span style={{ color: BRAND.colors.primary }}>Q:</span>
                How quickly can you come out?
              </h3>
              <p className="text-white/80 text-xs lg:text-sm pl-6">
                We typically respond within 2 hours and can often attend same day or next day depending on our schedule and your urgency.
              </p>
            </Card>

            <Card className="p-4 lg:p-6">
              <h3 className="text-white font-bold mb-2 flex items-center gap-2 text-sm lg:text-base">
                <span style={{ color: BRAND.colors.primary }}>Q:</span>
                What types of repairs can you do at my location?
              </h3>
              <p className="text-white/80 text-sm pl-6">
                We specialize in diagnostics, brakes, batteries, oil services, and suspension work. Some complex jobs requiring specialist equipment may need a workshop, but we'll let you know upfront.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16">
        <Card className="p-12 text-center bg-gradient-to-br from-white/10 to-white/5 border-2" style={{ borderColor: `${BRAND.colors.primary}40` }}>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
              Need a Mobile Mechanic Today?
            </h2>
            <p className="text-white/80 text-lg mb-2">
              Get your free quote in under 2 minutes
            </p>
            <p className="text-white/60 text-sm mb-8">
              ✅ No obligation • ✅ Instant confirmation • ✅ Professional service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/estimate">
                <Button variant="primary" icon={Calculator} className="w-full sm:w-auto min-w-[220px] text-lg py-6">
                  Get Free Quote Now
                </Button>
              </Link>
              <div className="flex gap-3">
                <LinkButton
                  variant="secondary"
                  icon={Phone}
                  href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                  className="flex-1 sm:flex-initial min-w-[140px]"
                >
                  {BRAND.phoneDisplay}
                </LinkButton>
                <LinkButton
                  variant="ghost"
                  icon={MessageCircle}
                  href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${BRAND.whatsappPrefill}`}
                  className="flex-1 sm:flex-initial min-w-[140px]"
                >
                  WhatsApp
                </LinkButton>
              </div>
            </div>
            <p className="text-white/40 text-xs mt-6">
              New service launching in Hemel Hempstead • Available {BRAND.hoursDisplay}
            </p>
          </div>
        </Card>
      </Section>
    </div>
  );
}
