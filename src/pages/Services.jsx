import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, Disc, BatteryCharging, Thermometer, Wrench, 
  CheckCircle2, Calculator, Phone, MapPin, Clock, ChevronDown
} from 'lucide-react';
import { BRAND, PRICING } from '../constants/brand';
import { Section } from '../components/Layout';
import { Button, LinkButton } from '../components/Button';
import { Card, CardBody } from '../components/Card';

function ServiceCard({ icon: Icon, title, description, price, details, isOpen, onToggle }) {
  return (
    <Card className="overflow-hidden hover:border-yellow-500/30 transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-start gap-4 text-left transition-colors hover:bg-white/5"
      >
        <div
          className="rounded-xl p-3 flex-shrink-0"
          style={{ backgroundColor: `${BRAND.colors.primary}20` }}
        >
          <Icon size={28} style={{ color: BRAND.colors.primary }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-white text-xl font-bold">{title}</h3>
            <ChevronDown 
              size={20} 
              className={`text-white/50 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
          <p className="text-white/70 text-sm mb-3">{description}</p>
          <div className="inline-block">
            <span className="text-lg font-bold" style={{ color: BRAND.colors.primary }}>
              {price}
            </span>
          </div>
        </div>
      </button>

      {/* Expandable Details */}
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-6 pt-2 border-t border-white/10">
          <ul className="space-y-2">
            {details.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-white/80 text-sm">
                <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}

export default function Services() {
  const [openService, setOpenService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Services & Pricing | FixNow Mechanics';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Mobile mechanic services with transparent pricing. Diagnostics £15, brakes from £45, battery from £30. We come to you. Call 07354 915941.');
    }
  }, []);

  const services = [
    {
      id: 'diagnostics',
      icon: Activity,
      title: 'Vehicle Diagnostics',
      description: 'Professional fault finding with advanced diagnostic equipment',
      price: '£15 + mileage',
      details: [
        'Full system scan with professional OBD equipment',
        'Live data analysis to pinpoint exact issues',
        'Clear explanation of what\'s wrong',
        'Honest advice on next steps',
        '£10 deducted from labour if you proceed with repair'
      ]
    },
    {
      id: 'brakes',
      icon: Disc,
      title: 'Brake Services',
      description: 'Professional brake repairs at your location',
      price: 'from £45',
      details: [
        'Brake pad replacement (1-1.5 hours)',
        'Discs & pads replacement',
        'Brake system inspection',
        'ABS sensor replacement',
        'Labour: £45/hour | Parts supplied separately'
      ]
    },
    {
      id: 'battery',
      icon: BatteryCharging,
      title: 'Battery & Starting',
      description: 'Fast diagnosis and replacement for starting issues',
      price: 'from £20',
      details: [
        'Battery health test (free with diagnostics)',
        'Battery replacement & fitting (£30-£45)',
        'Alternator testing',
        'Jump-start service (£20 local)',
        'Quick turnaround to get you moving'
      ]
    },
    {
      id: 'cooling',
      icon: Thermometer,
      title: 'Cooling System',
      description: 'Prevent overheating with professional checks',
      price: 'from £45',
      details: [
        'Coolant level & condition check',
        'Radiator inspection',
        'Thermostat testing',
        'Leak detection',
        'Typically 30-60 minutes'
      ]
    },
    {
      id: 'repairs',
      icon: Wrench,
      title: 'General Repairs',
      description: 'Light to medium repairs done at your location',
      price: 'from £30',
      details: [
        'Sensor replacements (MAF, O2, crank, cam)',
        'Suspension links & control arms',
        'Minor leak fixes',
        'Wiring repairs',
        'Quick jobs: £30-£45 | Medium jobs: £45-£90'
      ]
    }
  ];

  const extras = [
    { name: 'Smoke Leak Test', price: '£30' },
    { name: 'Service Light Reset', price: '£10' },
    { name: 'Pre-Purchase Inspection', price: 'from £45' },
    { name: 'Noise Diagnosis', price: '£25' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div style={{ backgroundColor: BRAND.colors.dark }}>
        <Section className="py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Services & Pricing
            </h1>
            <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
              Honest pricing. Professional service. We come to you.
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
              onToggle={() => setOpenService(openService === service.id ? null : service.id)}
            />
          ))}
        </div>
      </Section>

      {/* How Pricing Works */}
      <Section className="py-12 lg:py-16" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              How Pricing Works
            </h2>
            <p className="text-white/60">Simple, transparent, no surprises</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardBody className="space-y-3">
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={24} style={{ color: BRAND.colors.primary }} />
                  <h3 className="text-white font-bold text-lg">Labour Rate</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Standard rate: <strong className="text-white">£45 per hour</strong>
                  <br />
                  <span className="text-white/60 text-xs">Much lower than garage rates (£60-£100/hour)</span>
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="space-y-3">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin size={24} style={{ color: BRAND.colors.primary }} />
                  <h3 className="text-white font-bold text-lg">Travel Cost</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong className="text-white">{PRICING.calloutPerMile * 100}p per mile</strong> round trip from HP2
                  <br />
                  <span className="text-white/60 text-xs">Example: 10 miles = £13 mileage</span>
                </p>
              </CardBody>
            </Card>
          </div>

          <Card className="mt-6 bg-white/5 border-white/20">
            <CardBody>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                <p className="text-white/90 text-sm">
                  <strong>No work starts without your approval.</strong> You'll get a clear breakdown of costs before anything begins.
                  If costs change during the job, we contact you first.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </Section>

      {/* Additional Services */}
      <Section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Quick Checks & Extras
            </h2>
          </div>

          <Card>
            <CardBody>
              <div className="grid sm:grid-cols-2 gap-4">
                {extras.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3 px-4 rounded-lg bg-white/5">
                    <span className="text-white/90">{item.name}</span>
                    <span className="font-bold" style={{ color: BRAND.colors.primary }}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-xs mt-4 text-center">
                Mileage applies: {PRICING.calloutPerMile * 100}p per mile from HP2
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      {/* Service Area */}
      <Section className="py-12 lg:py-16" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            Covering {PRICING.maxServiceRadius} Miles from Hemel Hempstead
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {BRAND.serviceAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full border border-white/10 text-white/90 bg-white/5 text-sm"
              >
                {area}
              </span>
            ))}
          </div>
          <Link to="/locations" className="inline-block">
            <Button variant="ghost" className="border border-white/20 mt-4">
              View All Areas
            </Button>
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-white/10 to-white/5 border-2" style={{ borderColor: `${BRAND.colors.primary}40` }}>
            <CardBody className="text-center space-y-6 py-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Get Your Free Quote
              </h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto">
                Professional mobile mechanic service with transparent pricing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/estimate">
                  <Button variant="primary" icon={Calculator} className="w-full sm:w-auto px-8 py-4 text-lg">
                    Get Quote
                  </Button>
                </Link>
                <LinkButton
                  variant="secondary"
                  icon={Phone}
                  href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                  className="w-full sm:w-auto px-8 py-4 text-lg"
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
