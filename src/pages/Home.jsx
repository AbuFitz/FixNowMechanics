import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench, Clock, MapPin, Shield, Phone, MessageCircle,
  Gauge, BadgeCheck, BatteryCharging, Droplet, Settings2,
  CheckCircle2, Calculator
} from 'lucide-react';
import { BRAND, CALLOUT_NOTE, SERVICES } from '../constants/brand';
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

function ServiceCard({ service, icon: Icon }) {
  return (
    <Card className="group hover:scale-[1.02] transition-all duration-300 hover:border-yellow-500/30 overflow-hidden h-full">
      {/* Service Image */}
      <ServiceImage service={service.slug} className="h-48 w-full" />

      <CardBody className="space-y-4">
        <div className="flex items-start justify-between">
          <div
            className="rounded-xl p-3 inline-flex"
            style={{ backgroundColor: `${BRAND.colors.primary}20` }}
          >
            <Icon size={28} style={{ color: BRAND.colors.primary }} />
          </div>
          <span
            className="text-xl font-bold"
            style={{ color: BRAND.colors.primary }}
          >
            {service.price}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
          <p className="text-white/70 text-sm leading-relaxed">{service.desc}</p>
        </div>
        <Link to="/estimate" className="block mt-4">
          <Button
            variant="ghost"
            icon={MessageCircle}
            className="w-full"
          >
            Get Estimate
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
            <span className="font-medium">Callout fee applies outside 10km</span>
          </div>
        </Section>
      </div>

      {/* Hero Section */}
      <div
        className="relative overflow-hidden lg:bg-transparent"
        style={{ backgroundColor: BRAND.colors.dark }}
      >
        {/* Mobile: Background Image */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src={CompanyVanImage}
            alt="FixNow Mechanics"
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95" />
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

              <div className="space-y-3 lg:space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
                  Expert Vehicle{' '}
                  <span style={{ color: BRAND.colors.primary }}>Diagnostics & Repair</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white/80 lg:text-white/70">
                  {BRAND.tagline}
                </p>
                <p className="text-white/70 lg:text-white/80 text-base lg:text-lg max-w-2xl leading-relaxed">
                  Diagnostics, repairs, and servicing — done at your driveway or workplace.
                  No workshop visits. No hidden markup. Honest service at fair prices.
                </p>
              </div>

              <div className="hidden lg:flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/estimate" className="flex-1 sm:flex-initial">
                  <Button variant="primary" className="w-full" icon={Calculator}>
                    Get Estimate
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

              <div className="grid grid-cols-3 gap-3 lg:gap-4 pt-4 lg:pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold" style={{ color: BRAND.colors.primary }}>100%</div>
                  <div className="text-white/60 text-xs lg:text-sm">Mobile Service</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold" style={{ color: BRAND.colors.primary }}>Fair</div>
                  <div className="text-white/60 text-xs lg:text-sm">Pricing</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold" style={{ color: BRAND.colors.primary }}>6+</div>
                  <div className="text-white/60 text-xs lg:text-sm">Areas</div>
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
      <Section className="py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="p-6 text-center hover:scale-[1.02] transition-transform">
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${BRAND.colors.primary}20` }}
              >
                <feature.icon size={32} style={{ color: BRAND.colors.primary }} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-white/70 text-sm">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-3">
            Core Services
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Fixed-price services with transparent pricing. Know the cost before we start.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={service}
              icon={serviceIcons[i]}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6">
            <p className="text-white/80 mb-4">
              Need something else? We handle most mechanical repairs.
            </p>
            <Link to="/estimate">
              <Button variant="primary" icon={Calculator}>
                Request Estimate
              </Button>
            </Link>
          </Card>
        </div>
      </Section>

      {/* About Section with Map */}
      <Section className="py-16">
        <Card className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="text-white space-y-6">
              <h2 className="text-3xl font-bold">About FixNow Mechanics</h2>
              <p className="text-white/80 leading-relaxed">
                We're a mobile mechanic service based in <strong>{BRAND.baseCityCoords.city}</strong>,
                covering Hertfordshire and surrounding areas. Our mission is simple — bring
                workshop-quality repairs directly to your home or workplace with full
                transparency and reliability.
              </p>

              <div className="space-y-3 text-white/85">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} style={{ color: BRAND.colors.primary }} className="mt-1 flex-shrink-0" />
                  <div>
                    <strong>Professional diagnostics</strong> using industry-grade tools
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} style={{ color: BRAND.colors.primary }} className="mt-1 flex-shrink-0" />
                  <div>
                    <strong>Transparent pricing</strong> with detailed breakdown
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} style={{ color: BRAND.colors.primary }} className="mt-1 flex-shrink-0" />
                  <div>
                    <strong>Flexible hours:</strong> {BRAND.hoursDisplay}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} style={{ color: BRAND.colors.primary }} className="mt-1 flex-shrink-0" />
                  <div>
                    <strong>Wide coverage</strong> across Hertfordshire and beyond
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3 text-lg">Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {BRAND.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="px-4 py-2 rounded-full border border-white/10 text-white/90 bg-white/5 text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Our Location</h3>

              {/* Interactive Map */}
              <div className="rounded-2xl overflow-hidden border border-white/10 h-96">
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

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin size={20} style={{ color: BRAND.colors.primary }} className="mt-1" />
                  <div>
                    <p className="text-white font-semibold">Base Location</p>
                    <p className="text-white/70 text-sm">{BRAND.baseArea}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} style={{ color: BRAND.colors.primary }} className="mt-1" />
                  <div>
                    <p className="text-white font-semibold">Contact</p>
                    <a
                      href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                      className="text-sm hover:underline"
                      style={{ color: BRAND.colors.primary }}
                    >
                      {BRAND.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-white/70 text-sm">
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

      {/* CTA Section */}
      <Section className="py-16">
        <Card className="p-12 text-center bg-gradient-to-br from-white/10 to-white/5">
          <h2 className="text-white text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get an instant estimate or call us directly. We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/estimate">
              <Button variant="primary" icon={Calculator} className="w-full sm:w-auto min-w-[200px]">
                Get Estimate
              </Button>
            </Link>
            <LinkButton
              variant="secondary"
              icon={Phone}
              href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
              className="w-full sm:w-auto min-w-[200px]"
            >
              {BRAND.phoneDisplay}
            </LinkButton>
            <LinkButton
              variant="ghost"
              icon={MessageCircle}
              href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${BRAND.whatsappPrefill}`}
              className="w-full sm:w-auto min-w-[200px]"
            >
              WhatsApp
            </LinkButton>
          </div>
        </Card>
      </Section>
    </div>
  );
}
