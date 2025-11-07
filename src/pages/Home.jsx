import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench, Clock, MapPin, Shield, Phone, MessageCircle,
  Gauge, BadgeCheck, BatteryCharging, Droplet, Settings2, ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { BRAND, CALLOUT_NOTE, SERVICES } from '../constants/brand';
import { Section } from '../components/Layout';
import { LinkButton, Button } from '../components/Button';
import { Card, CardBody } from '../components/Card';
import { Logo } from '../components/Logo';

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
      <div
        className="h-2 w-full"
        style={{ backgroundColor: BRAND.colors.primary }}
      />
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
        <LinkButton
          variant="ghost"
          icon={MessageCircle}
          href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${encodeURIComponent(`Hi FixNow, I'm interested in: ${service.title}`)}`}
          className="w-full mt-4"
        >
          Get Quote
        </LinkButton>
      </CardBody>
    </Card>
  );
}

export default function Home() {
  const serviceIcons = [Gauge, Wrench, BatteryCharging, Droplet, Settings2];

  const features = [
    { icon: Shield, title: 'Transparent Pricing', desc: 'No hidden fees or markups' },
    { icon: Clock, title: 'Flexible Hours', desc: '8am-10pm, 7 days a week' },
    { icon: MapPin, title: 'We Come To You', desc: 'Service at your location' },
    { icon: BadgeCheck, title: 'Quality Work', desc: 'Professional service guaranteed' },
  ];

  return (
    <div>
      {/* Announcement Bar */}
      <div className="w-full" style={{ background: BRAND.colors.mid }}>
        <Section className="py-3">
          <div className="flex items-center justify-center gap-3 text-white/90 text-sm text-center">
            <Shield size={16} style={{ color: BRAND.colors.primary }} />
            <span className="font-medium">{CALLOUT_NOTE}</span>
          </div>
        </Section>
      </div>

      {/* Hero Section */}
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: BRAND.colors.dark }}
      >
        <Section className="py-16 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-white space-y-6">
              <div className="flex gap-2 flex-wrap">
                <Pill icon={Wrench}>Mobile Mechanic</Pill>
                <Pill icon={Clock}>8am – 10pm</Pill>
                <Pill icon={MapPin}>Hemel Hempstead</Pill>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Professional Mobile{' '}
                  <span style={{ color: BRAND.colors.primary }}>Mechanic</span>
                </h1>
                <p className="text-xl sm:text-2xl font-medium text-white/70">
                  {BRAND.tagline}
                </p>
                <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
                  Diagnostics, repairs, and servicing — done at your driveway or workplace.
                  No workshop visits. No hidden markup. Professional service you can trust.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/quick-estimate" className="flex-1 sm:flex-initial">
                  <Button variant="primary" className="w-full" icon={Gauge}>
                    Quick Estimate
                  </Button>
                </Link>
                <Link to="/quote" className="flex-1 sm:flex-initial">
                  <Button variant="secondary" className="w-full" icon={Wrench}>
                    Get Full Quote
                  </Button>
                </Link>
              </div>

              <div className="flex gap-4 pt-6 border-t border-white/10">
                <LinkButton
                  variant="ghost"
                  icon={Phone}
                  href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                  className="flex-1"
                >
                  {BRAND.phoneDisplay}
                </LinkButton>
                <LinkButton
                  variant="ghost"
                  icon={MessageCircle}
                  href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${BRAND.whatsappPrefill}`}
                  className="flex-1"
                >
                  WhatsApp
                </LinkButton>
              </div>
            </div>

            {/* Right: Logo/Visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative">
                {/* Glowing background effect */}
                <div
                  className="absolute inset-0 blur-3xl opacity-20"
                  style={{ backgroundColor: BRAND.colors.primary }}
                />
                {/* Logo */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-12 border border-white/10 backdrop-blur">
                  <Logo size="xl" showIcon={true} />
                  <p className="text-white/70 text-center mt-6 text-lg">
                    {BRAND.tagline}
                  </p>
                </div>
              </div>
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
            <Link to="/quote">
              <Button variant="primary" icon={ArrowRight}>
                Request Custom Quote
              </Button>
            </Link>
          </Card>
        </div>
      </Section>

      {/* About Section */}
      <Section className="py-16">
        <Card className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="text-white space-y-6">
              <h2 className="text-3xl font-bold">About FixNow Mechanics</h2>
              <p className="text-white/80 leading-relaxed">
                We're a mobile mechanic service based in <strong>Hemel Hempstead</strong>,
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
                    <strong>Flexible hours</strong> — {BRAND.hours}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} style={{ color: BRAND.colors.primary }} className="mt-1 flex-shrink-0" />
                  <div>
                    <strong>Wide coverage</strong> across Hertfordshire and beyond
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
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

              <div className="border-t border-white/10 pt-6">
                <p className="text-white/70 text-sm mb-4">
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
        <Card className="p-12 text-center">
          <h2 className="text-white text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a quick estimate or request a detailed quote. We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quick-estimate">
              <Button variant="primary" icon={Gauge} className="w-full sm:w-auto">
                Quick Estimate
              </Button>
            </Link>
            <Link to="/quote">
              <Button variant="secondary" icon={Wrench} className="w-full sm:w-auto">
                Get Full Quote
              </Button>
            </Link>
            <LinkButton
              variant="ghost"
              icon={Phone}
              href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
              className="w-full sm:w-auto"
            >
              Call Now
            </LinkButton>
          </div>
        </Card>
      </Section>
    </div>
  );
}
