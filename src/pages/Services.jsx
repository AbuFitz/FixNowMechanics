import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, Disc, BatteryCharging, Thermometer, Wrench, 
  CheckCircle2, Calculator, Phone, MapPin, Clock, Shield, ChevronDown
} from 'lucide-react';
import { BRAND, PRICING } from '../constants/brand';
import { Section } from '../components/Layout';
import { Button, LinkButton } from '../components/Button';
import { Card, CardBody } from '../components/Card';

function ServiceCard({ icon: Icon, title, description, pricing, isOpen, onToggle }) {
  return (
    <Card className="overflow-hidden hover:border-yellow-500/30 transition-all">
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between gap-4 text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-4 flex-1">
          <div
            className="rounded-xl p-3 flex-shrink-0"
            style={{ backgroundColor: `${BRAND.colors.primary}20` }}
          >
            <Icon size={24} style={{ color: BRAND.colors.primary }} />
          </div>
          <div className="flex-1">
            <h3 className="text-white text-lg font-bold mb-1">{title}</h3>
            <p className="text-white/60 text-sm">{description}</p>
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`text-white/50 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-6 border-t border-white/10 pt-4">
          <div className="space-y-2">
            {pricing.map((price, idx) => (
              <div key={idx} className="flex items-start justify-between gap-4">
                <span className="text-white/70 text-sm">{price.label}</span>
                <span className="text-white font-semibold text-sm" style={{ color: BRAND.colors.primary }}>
                  {price.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function Services() {
  const [openService, setOpenService] = useState('diagnostics');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Services & Pricing | FixNow Mechanics';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Mobile mechanic services with transparent pricing. Diagnostics £15, brakes from £45, battery replacement from £30. Call 07354 915941.');
    }
  }, []);

  const toggleService = (serviceId) => {
    setOpenService(openService === serviceId ? null : serviceId);
  };

  const services = [
    {
      id: 'diagnostics',
      icon: Activity,
      title: 'Vehicle Diagnostics',
      description: 'Professional fault finding with advanced diagnostic equipment',
      pricing: [
        { label: 'Diagnostic Fee', value: '£15' },
        { label: 'Mileage Charge', value: `${PRICING.calloutPerMile * 100}p per mile (round trip)` },
        { label: 'If You Proceed with Repair', value: '£10 deducted from labour' }
      ]
    },
    {
      id: 'brakes',
      icon: Disc,
      title: 'Brake Services',
      description: 'Brake pads, discs, and system repairs at your location',
      pricing: [
        { label: 'Labour Rate', value: '£45 per hour' },
        { label: 'Front or Rear Pads', value: '£45-£60 labour' },
        { label: 'Pads + Discs (per axle)', value: '£80-£110 labour' },
        { label: 'Parts', value: 'Quoted separately' }
      ]
    },
    {
      id: 'battery',
      icon: BatteryCharging,
      title: 'Battery & Starting',
      description: 'Battery testing, replacement, and jump-start service',
      pricing: [
        { label: 'Battery Test', value: 'Free with diagnostic' },
        { label: 'Battery Replacement', value: '£30-£45 labour' },
        { label: 'Jump-Start (Local)', value: '£20' },
        { label: 'Jump-Start (Distance)', value: `£20 + ${PRICING.calloutPerMile * 100}p/mile` }
      ]
    },
    {
      id: 'cooling',
      icon: Thermometer,
      title: 'Cooling System',
      description: 'Overheating diagnosis and coolant system checks',
      pricing: [
        { label: 'Basic Inspection', value: 'Included with diagnostic' },
        { label: 'Detailed Diagnosis', value: '£45/hour (typically 30-60 min)' }
      ]
    },
    {
      id: 'general',
      icon: Wrench,
      title: 'General Repairs',
      description: 'Sensors, suspension links, wiring, and mobile-friendly repairs',
      pricing: [
        { label: 'Labour Rate', value: '£45 per hour' },
        { label: 'Quick Fixes', value: '£30-£45 flat rate' },
        { label: 'Medium Jobs', value: '£45-£90 (1-2 hours)' }
      ]
    }
  ];

  const quickServices = [
    { service: 'Service Light Reset', price: '£10' },
    { service: 'Smoke Leak Test', price: '£30' },
    { service: 'Pre-Purchase Check', price: 'from £45' },
    { service: 'Noise Inspection', price: '£25' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div style={{ backgroundColor: BRAND.colors.dark }}>
        <Section className="py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Services & Pricing
            </h1>
            <p className="text-lg text-white/70 max-w-xl mx-auto">
              Professional mobile mechanic services with transparent, honest pricing
            </p>
          </div>
        </Section>
      </div>

      {/* Main Services */}
      <Section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto space-y-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              isOpen={openService === service.id}
              onToggle={() => toggleService(service.id)}
            />
          ))}
        </div>
      </Section>

      {/* Quick Services */}
      <Section className="py-12 lg:py-16" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Services</h2>
          <Card>
            <CardBody>
              <div className="grid sm:grid-cols-2 gap-4">
                {quickServices.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                    <span className="text-white text-sm font-medium">{item.service}</span>
                    <span className="font-bold" style={{ color: BRAND.colors.primary }}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-xs mt-4 text-center">
                Mileage: {PRICING.calloutPerMile * 100}p per mile (round trip from HP2)
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">
            How Our Pricing Works
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white/5">
              <CardBody className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={24} style={{ color: BRAND.colors.primary }} />
                  <h3 className="text-white font-bold text-lg">Mileage</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {PRICING.calloutPerMile * 100}p per mile for round trip from Hemel Hempstead (HP2).
                </p>
                <p className="text-white/50 text-xs italic">
                  Example: 10 miles away = 20 miles round trip = £13
                </p>
              </CardBody>
            </Card>

            <Card className="bg-white/5">
              <CardBody className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock size={24} style={{ color: BRAND.colors.primary }} />
                  <h3 className="text-white font-bold text-lg">Labour</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  £45 per hour, well below typical garage rates (£60-£100/hour).
                </p>
                <p className="text-white/50 text-xs italic">
                  Most jobs quoted as flat rates upfront
                </p>
              </CardBody>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/20">
            <CardBody>
              <div className="flex items-start gap-4">
                <Shield size={32} className="flex-shrink-0 mt-1" style={{ color: BRAND.colors.primary }} />
                <div className="space-y-3">
                  <h3 className="text-white font-bold text-lg">Our Promise</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-white/80 text-sm">
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                      <span>Clear breakdown before any work begins</span>
                    </li>
                    <li className="flex items-start gap-2 text-white/80 text-sm">
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                      <span>No work without your approval</span>
                    </li>
                    <li className="flex items-start gap-2 text-white/80 text-sm">
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                      <span>If costs change, we contact you first</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </Section>

      {/* Service Area */}
      <Section className="py-12 lg:py-16" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold text-white">Coverage Area</h2>
          <p className="text-white/60">
            Up to {PRICING.maxServiceRadius} miles from Hemel Hempstead
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {BRAND.serviceAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm border border-white/10"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-12 lg:py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-white/10 to-white/5 border-2" style={{ borderColor: `${BRAND.colors.primary}40` }}>
            <CardBody className="text-center space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Get Your Free Quote
              </h2>
              <p className="text-white/70">
                Clear pricing, professional service, we come to you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link to="/estimate" className="flex-1 sm:flex-initial">
                  <Button variant="primary" icon={Calculator} className="w-full">
                    Get Quote
                  </Button>
                </Link>
                <LinkButton
                  variant="secondary"
                  icon={Phone}
                  href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                  className="flex-1 sm:flex-initial"
                >
                  {BRAND.phoneDisplay}
                </LinkButton>
              </div>
            </CardBody>
          </Card>
        </div>
      </Section>
    </div>
  );
}
