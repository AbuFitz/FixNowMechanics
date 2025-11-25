import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench, Clock, MapPin, Shield, Phone, MessageCircle,
  Gauge, BadgeCheck, BatteryCharging, Droplet, Settings2,
  CheckCircle2, Calculator, ChevronDown, Activity, Cog,
  Disc, Zap, CircleDot, Settings, User
} from 'lucide-react';
import { BRAND, SERVICES, CALLOUT_NOTE, PRICING } from '../constants/brand';
import { SERVICE_CATEGORIES } from '../constants/services';
import { Section } from '../components/Layout';
import { LinkButton, Button } from '../components/Button';
import { Card, CardBody } from '../components/Card';
import { Logo } from '../components/Logo';
import { ServiceImage, HeroImage } from '../components/ServiceImage';
import CompanyVanImage from '../components/CompanyVan.png';

function ServiceCategoryCard({ category, isOpen, onToggle }) {
  const categoryIcons = {
    Diagnostics: Activity,
    Servicing: Cog,
    Brakes: Disc,
    Electrical: Zap,
    Suspension: CircleDot,
    General: Settings
  };

  const Icon = categoryIcons[category.name] || Wrench;

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:border-yellow-500/30">
      <button
        onClick={onToggle}
        className="w-full p-4 lg:p-6 flex items-center justify-between gap-4 text-left transition-colors hover:bg-white/5"
      >
        <div className="flex items-center gap-4 flex-1">
          <div
            className="rounded-xl p-3 flex-shrink-0"
            style={{ backgroundColor: `${BRAND.colors.primary}20` }}
          >
            <Icon size={24} style={{ color: BRAND.colors.primary }} />
          </div>
          <div className="flex-1">
            <h3 className="text-white text-lg lg:text-xl font-bold mb-1">{category.name}</h3>
            <p className="text-white/70 text-sm">{category.description}</p>
          </div>
        </div>
        <ChevronDown
          size={24}
          className={`text-white/50 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[2000px]' : 'max-h-0'
        }`}
      >
        <div className="px-4 lg:px-6 pb-4 lg:pb-6 pt-2 border-t border-white/10">
          <div className="grid sm:grid-cols-2 gap-2 lg:gap-3">
            {category.services.map((service, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <CheckCircle2
                  size={16}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: BRAND.colors.primary }}
                />
                <span className="text-white/90 text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

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
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (categoryName) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceIcons = [Gauge, Wrench, BatteryCharging, Droplet, Settings2];

  const features = [
    { icon: Shield, title: 'Fair Pricing', desc: '£45/hr labour - well below garages' },
    { icon: Clock, title: 'Available 7 Days', desc: BRAND.hoursDisplay },
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
            <span className="font-medium">Callout: {PRICING.calloutPerMile * 100}p per mile from Hemel</span>
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90" />
        </div>

        <Section className="py-12 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-white space-y-6 lg:space-y-6">
              {/* Pills - Desktop Only */}
              <div className="hidden lg:flex gap-2 flex-wrap">
                <Pill icon={Wrench}>Mobile Mechanic</Pill>
                <Pill icon={Clock}>Flexible Hours</Pill>
                <Pill icon={MapPin}>{BRAND.baseCityCoords.city}</Pill>
              </div>

              <div className="space-y-4 lg:space-y-4">
                <h1 className="text-3xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
                  <span className="block">We Fix It. </span>
                  <span className="block" style={{ color: BRAND.colors.primary }}>You Drive It.</span>
                </h1>
                
                {/* Mobile: Simple tagline */}
                <p className="lg:hidden text-base text-white/90 drop-shadow-md leading-relaxed">
                  Mobile mechanic at your location
                </p>
                
                {/* Desktop: Full tagline */}
                <p className="hidden lg:block text-xl lg:text-2xl font-medium text-white/70 drop-shadow">
                  {BRAND.tagline}
                </p>
                
                {/* Desktop: Extended description */}
                <p className="hidden lg:block text-white/80 text-base lg:text-lg max-w-2xl leading-relaxed drop-shadow">
                  On-site diagnostics and repairs. No workshop trips. Fair rates, clear quotes.
                </p>
                
                <p className="hidden lg:block text-white/90 text-sm lg:text-base max-w-2xl font-medium drop-shadow">
                  Covering 45 miles from {BRAND.baseCityCoords.city} – diagnostic visits from £15.
                </p>
              </div>

              {/* Mobile CTA Buttons - Simplified */}
              <div className="lg:hidden flex flex-col gap-3">
                <Link to="/estimate" className="w-full">
                  <Button variant="primary" className="w-full py-4 text-base font-bold shadow-xl" icon={Calculator}>
                    Get Free Quote
                  </Button>
                </Link>
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
        {/* Mobile: Hidden - info available in bottom bar and services */}
        <div className="hidden">
          {features.map((feature, i) => (
            <Card key={i} className="p-4 hover:bg-white/10 transition-all duration-300">
              <div className="text-center space-y-2">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto"
                  style={{ backgroundColor: `${BRAND.colors.primary}20` }}
                >
                  <feature.icon size={22} style={{ color: BRAND.colors.primary }} />
                </div>
                <h3 className="text-white font-bold text-sm leading-tight">{feature.title}</h3>
                <p className="text-white/70 text-xs leading-relaxed">{feature.desc}</p>
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
      <Section className="py-8 lg:py-12" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-white text-xl lg:text-2xl font-bold mb-2 lg:mb-2">
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
      <Section className="py-8 lg:py-16">
        <div className="text-center mb-6 lg:mb-12">
          <h2 className="text-white text-2xl lg:text-4xl font-bold mb-3">
            Core Services
          </h2>
          <p className="text-white/70 text-base lg:text-lg max-w-3xl mx-auto">
            From diagnostics to repairs — quality work at your location
          </p>
        </div>

        {/* Main Service Cards - Mobile friendly compact view */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={service}
              icon={serviceIcons[i]}
            />
          ))}
        </div>



        {/* Contact for Other Services */}
        <div className="mt-8 lg:mt-12">
          <Card className="p-6 bg-gradient-to-r from-white/5 to-white/10 border-white/20">
            <div className="text-center space-y-3">
              <h3 className="text-white text-xl font-bold">
                Don't See What You Need?
              </h3>
              <p className="text-white/70 text-sm max-w-2xl mx-auto leading-relaxed">
                We handle a wide range of mechanical repairs. If your repair isn't listed above, contact us to discuss your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <LinkButton
                  variant="ghost"
                  icon={MessageCircle}
                  href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${encodeURIComponent('Hi! I need help with a repair not listed on your website')}`}
                  className="min-w-[180px] text-sm py-3 border border-white/20"
                >
                  WhatsApp
                </LinkButton>
                <Link to="/estimate">
                  <Button variant="primary" icon={Calculator} className="w-full min-w-[180px] text-sm py-3">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* About Section with Map */}
      <Section className="py-8 lg:py-16">
        <Card className="p-6 lg:p-8 xl:p-12">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            <div className="text-white space-y-4 lg:space-y-6">
              <h2 className="text-xl lg:text-3xl font-bold">About Us</h2>
              
              {/* Mobile: Super simple version */}
              <p className="lg:hidden text-white/80 leading-relaxed text-sm">
                Mobile mechanic service covering Hertfordshire. Quality repairs at your location with transparent pricing.
              </p>
              
              {/* Desktop: Simplified description */}
              <div className="hidden lg:block space-y-4">
                <p className="text-white/80 leading-relaxed text-base">
                  Mobile mechanic service based in <strong>{BRAND.baseCityCoords.city}</strong>, covering Hertfordshire and surrounding areas. We bring quality repairs directly to your home or workplace.
                </p>

                <div className="space-y-2 text-white/85 text-base">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                    <div>Diagnostics, brakes, suspension & engine work</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                    <div>Bring your own parts — we'll fit them</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                    <div>Transparent pricing with breakdown upfront</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                    <div>{BRAND.hoursDisplay}</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3 text-sm lg:text-lg">Service Areas</h3>
                <p className="lg:hidden text-white/70 text-sm mb-3">
                  Mobile mechanic covering Hemel Hempstead and surrounding areas
                </p>
                <div className="hidden lg:block mb-3">
                  <p className="text-white/70 text-sm">
                    Professional mobile mechanic service across Hertfordshire, Bedfordshire, and Buckinghamshire:
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {BRAND.serviceAreas.map((area) => {
                    const areaSlugMap = {
                      'Watford': 'watford',
                      'St Albans': 'st-albans',
                      'Luton': 'luton',
                      'Dunstable': 'dunstable',
                      'Milton Keynes': 'milton-keynes',
                      'Aylesbury': 'aylesbury',
                      'Stevenage': 'stevenage',
                      'Hatfield': 'hatfield',
                      'North London': 'north-london'
                    };
                    const slug = areaSlugMap[area];
                    
                    if (slug) {
                      return (
                        <Link
                          key={area}
                          to={`/locations/${slug}`}
                          className="px-4 py-2 rounded-full border border-white/10 text-white/90 bg-white/5 text-sm hover:bg-white/10 hover:border-yellow-500/30 transition-all"
                        >
                          {area}
                        </Link>
                      );
                    }
                    
                    return (
                      <span
                        key={area}
                        className="px-4 py-2 rounded-full border border-white/10 text-white/90 bg-white/5 text-sm"
                      >
                        {area}
                      </span>
                    );
                  })}
                </div>
                <div className="mt-3">
                  <Link
                    to="/locations"
                    className="text-sm hover:underline inline-flex items-center gap-1"
                    style={{ color: BRAND.colors.primary }}
                  >
                    View all coverage areas →
                  </Link>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-4 lg:space-y-4">
              <h3 className="text-white font-semibold text-sm lg:text-lg">Our Location</h3>

              {/* Interactive Map */}
              <div className="rounded-xl lg:rounded-2xl overflow-hidden border border-white/10 h-48 lg:h-96">
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

              <div className="bg-white/5 rounded-lg p-4 lg:p-4 border border-white/10 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="lg:w-5 lg:h-5 mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                  <div>
                    <p className="text-white font-semibold text-sm lg:text-base">Base Location</p>
                    <p className="text-white/70 text-xs lg:text-sm">{BRAND.baseArea}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="lg:w-5 lg:h-5 mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                  <div>
                    <p className="text-white font-semibold text-sm lg:text-base">Contact</p>
                    <a
                      href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                      className="text-sm lg:text-sm hover:underline"
                      style={{ color: BRAND.colors.primary }}
                    >
                      {BRAND.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 lg:pt-4">
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

      {/* About Your Mechanic */}
      <Section className="py-8 lg:py-16" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardBody className="p-6 lg:p-8">
              <div className="flex items-start gap-6">
                <div className="hidden md:block">
                  <div 
                    className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${BRAND.colors.primary}20` }}
                  >
                    <User size={40} className="lg:w-12 lg:h-12" style={{ color: BRAND.colors.primary }} />
                  </div>
                </div>
                <div className="flex-1 space-y-3 lg:space-y-4">
                  <h2 className="text-xl lg:text-3xl font-bold text-white">
                    About FixNow Mechanics
                  </h2>
                  <div className="space-y-3 text-white/80 text-sm lg:text-base leading-relaxed">
                    <p>
                      Hi, I'm <strong className="text-white">Abukar Sharif</strong>, founder of FixNow Mechanics. 
                      I started this business to provide accessible, honest mobile mechanic services without the garage markup.
                    </p>
                    <p>
                      Our approach is simple: transparent quotes, quality work, and never recommending unnecessary repairs. If we can't handle a job on-site, we'll direct you to a trusted local workshop.
                    </p>
                    <p>
                      We specialize in diagnostics and repairs that can be done safely at your location — brakes, batteries, sensors, suspension, and electrical faults. For jobs requiring specialist equipment, we'll point you in the right direction.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-2 lg:pt-4">
                    <CheckCircle2 size={20} style={{ color: BRAND.colors.primary }} />
                    <span className="text-white/90 text-sm lg:text-base font-medium">Honest service, fair pricing, trusted advice</span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
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
                Our diagnostic visit is charged at {PRICING.calloutPerMile * 100}p per mile from Hemel Hempstead. This includes travel, OBD scan, and initial fault checks. The exact price is calculated based on your postcode.
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
      <Section className="py-8 lg:py-16">
        <Card className="p-6 lg:p-12 text-center bg-gradient-to-br from-white/10 to-white/5 border-2 mx-4 lg:mx-0" style={{ borderColor: `${BRAND.colors.primary}40` }}>
          <div className="max-w-2xl mx-auto space-y-5">
            <h2 className="text-white text-xl lg:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <Link to="/estimate" className="block">
              <Button variant="primary" icon={Calculator} className="w-full text-base lg:text-lg py-4 lg:py-6 font-bold shadow-xl">
                Get Free Quote
              </Button>
            </Link>
            <p className="hidden lg:block text-white/40 text-xs">
              Available {BRAND.hoursDisplay}
            </p>
          </div>
        </Card>
      </Section>
    </div>
  );
}
