import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, Disc, BatteryCharging, Thermometer, Wrench, 
  CheckCircle2, Calculator, Phone, MapPin, Clock, User, Shield
} from 'lucide-react';
import { BRAND, PRICING } from '../constants/brand';
import { Section } from '../components/Layout';
import { Button, LinkButton } from '../components/Button';
import { Card, CardBody } from '../components/Card';

function ServiceCard({ icon: Icon, title, description, pricing, details }) {
  return (
    <Card className="h-full">
      <CardBody className="space-y-4">
        <div className="flex items-start gap-4">
          <div
            className="rounded-xl p-3 flex-shrink-0"
            style={{ backgroundColor: `${BRAND.colors.primary}20` }}
          >
            <Icon size={28} style={{ color: BRAND.colors.primary }} />
          </div>
          <div className="flex-1">
            <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{description}</p>
          </div>
        </div>

        {details && details.length > 0 && (
          <div className="space-y-2">
            <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">What's Included:</p>
            <ul className="space-y-1.5">
              {details.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-white/80 text-sm">
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="pt-3 border-t border-white/10">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-wide mb-2">Pricing:</p>
          <div className="space-y-1">
            {pricing.map((price, idx) => (
              <p key={idx} className="text-white text-sm">
                <span className="font-semibold" style={{ color: BRAND.colors.primary }}>{price.label}:</span>{' '}
                <span className="text-white/90">{price.value}</span>
              </p>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Services & Pricing | FixNow Mechanics';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Transparent pricing for mobile mechanic services. Diagnostics, brakes, battery, cooling system checks & more. £45/hour labour, 65p per mile. Call 07354 915941.');
    }
  }, []);

  const services = [
    {
      icon: Activity,
      title: 'Vehicle Diagnostics',
      description: 'Professional diagnostics using advanced scanners and software to identify faults accurately.',
      details: [
        'Full fault code scan across all vehicle systems',
        'Live data analysis to pinpoint issues',
        'Clear explanation of problems found',
        'Reset warning lights (where appropriate)',
        'Honest repair guidance & cost estimate'
      ],
      pricing: [
        { label: 'Diagnostic Fee', value: '£15 flat rate' },
        { label: 'Mileage', value: `${PRICING.calloutPerMile * 100}p per mile (round trip from HP2)` },
        { label: 'Time Included', value: '20-45 minutes diagnostic work' },
        { label: 'If Repair Proceeds', value: '£10 deducted from labour cost' }
      ]
    },
    {
      icon: Disc,
      title: 'Brake Services',
      description: 'On-site brake replacements using quality parts. Most jobs completed in 1-1.5 hours per axle.',
      details: [
        'Brake pad replacement (front or rear)',
        'Brake discs & pads replacement',
        'Brake system inspections',
        'ABS sensor replacement',
        'Brake fluid top-up'
      ],
      pricing: [
        { label: 'Labour Rate', value: '£45 per hour' },
        { label: 'Front or Rear Pads', value: '£45-£60 labour' },
        { label: 'Pads + Discs (per axle)', value: '£80-£110 labour' },
        { label: 'Parts', value: 'Supplied separately (varies by vehicle)' }
      ]
    },
    {
      icon: BatteryCharging,
      title: 'Battery & Starting System',
      description: 'Quick diagnosis and replacement for battery and starting issues. Get back on the road fast.',
      details: [
        'Battery health testing',
        'Battery replacement & fitting',
        'Alternator testing',
        'Starter motor diagnostics',
        'Jump-start service'
      ],
      pricing: [
        { label: 'Battery Test', value: 'Included with diagnostics' },
        { label: 'Battery Replacement', value: '£30-£45 labour (under 1 hour)' },
        { label: 'Jump-Start (Local)', value: '£20 flat rate' },
        { label: 'Jump-Start (Outside Area)', value: `£20 + ${PRICING.calloutPerMile * 100}p per mile` }
      ]
    },
    {
      icon: Thermometer,
      title: 'Cooling System Checks',
      description: 'Identify overheating and coolant issues before they cause serious damage.',
      details: [
        'Coolant level & condition check',
        'Radiator inspection',
        'Thermostat testing',
        'Water pump assessment',
        'Leak detection'
      ],
      pricing: [
        { label: 'Basic Check', value: 'Included with diagnostics (if fault-related)' },
        { label: 'Cooling System Diagnosis', value: '£45/hour (typically 30-60 minutes)' }
      ]
    },
    {
      icon: Wrench,
      title: 'General Mobile Repairs',
      description: 'Light to medium repairs completed safely at your location without workshop equipment.',
      details: [
        'Sensor replacements (MAF, MAP, O2, crank, cam)',
        'Suspension links & control arms',
        'Boost hose & intake pipe repairs',
        'Minor oil leak fixes',
        'Exhaust bracket repairs',
        'Wiring checks & repairs',
        'Wheel nut & hub issues'
      ],
      pricing: [
        { label: 'Labour Rate', value: '£45 per hour' },
        { label: 'Minor Jobs', value: '£30-£45 flat rate (quick fixes)' },
        { label: 'Medium Repairs', value: '£45-£90 (1-2 hours)' }
      ]
    }
  ];

  const additionalServices = [
    { service: 'Smoke Leak Test', price: '£30' },
    { service: 'Service Light Reset', price: '£10' },
    { service: 'Pre-Purchase Inspection', price: 'from £45' },
    { service: 'Odd Noise Inspection', price: '£25' },
    { service: 'Visual Underbody Check', price: '£20' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div style={{ backgroundColor: BRAND.colors.dark }}>
        <Section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight">
              Our Services & Pricing
            </h1>
            <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Transparent, honest pricing for mobile mechanic services across Hertfordshire and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/estimate">
                <Button variant="primary" icon={Calculator} className="w-full sm:w-auto">
                  Get Free Quote
                </Button>
              </Link>
              <LinkButton
                variant="secondary"
                icon={Phone}
                href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                className="w-full sm:w-auto"
              >
                Call {BRAND.phoneDisplay}
              </LinkButton>
            </div>
          </div>
        </Section>
      </div>

      {/* Main Services Grid */}
      <Section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Professional Mobile Mechanic Services
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              All services performed at your location with professional equipment and transparent pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </Section>

      {/* Additional Services */}
      <Section className="py-12 lg:py-16" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Additional Support Services
            </h2>
            <p className="text-white/70">
              Quick checks and specialized inspections
            </p>
          </div>

          <Card>
            <CardBody>
              <div className="divide-y divide-white/10">
                {additionalServices.map((item, idx) => (
                  <div key={idx} className="py-4 flex items-center justify-between">
                    <span className="text-white font-medium">{item.service}</span>
                    <span className="text-white/90 font-bold" style={{ color: BRAND.colors.primary }}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/60 text-sm">
                  <span className="font-semibold">Mileage applies:</span> {PRICING.calloutPerMile * 100}p per mile (round trip from HP2)
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </Section>

      {/* Pricing Transparency Section */}
      <Section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-white/10 to-white/5 border-2" style={{ borderColor: `${BRAND.colors.primary}40` }}>
            <CardBody className="space-y-6">
              <div className="text-center">
                <Shield size={48} className="mx-auto mb-4" style={{ color: BRAND.colors.primary }} />
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  How Our Pricing Works
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto">
                  No hidden fees. No surprises. Just honest, transparent pricing.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-white font-bold flex items-center gap-2">
                    <MapPin size={20} style={{ color: BRAND.colors.primary }} />
                    Mileage Charges
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    We charge <strong>{PRICING.calloutPerMile * 100}p per mile</strong> for the round trip from Hemel Hempstead (HP2) to your location and back. 
                    This covers fuel, vehicle maintenance, and travel time. Calculated transparently when you book.
                  </p>
                  <p className="text-white/60 text-xs italic">
                    Example: 10 miles from HP2 = 20 miles round trip = £13 mileage charge
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-white font-bold flex items-center gap-2">
                    <Clock size={20} style={{ color: BRAND.colors.primary }} />
                    Labour Rates
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Our standard labour rate is <strong>£45 per hour</strong>, significantly below typical garage rates (£60-£100/hour). 
                    Most jobs are quoted as flat rates based on expected time, so you know the exact cost upfront.
                  </p>
                  <p className="text-white/60 text-xs italic">
                    If a repair proceeds after diagnostics, £10 of the diagnostic fee is deducted from labour
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/20">
                <h3 className="text-white font-bold mb-3">Before Any Work Begins:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-white/80 text-sm">
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                    <span>You'll receive a clear breakdown of labour, parts, and mileage costs</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/80 text-sm">
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                    <span>No work starts without your approval on the price</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/80 text-sm">
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.primary }} />
                    <span>If costs change during the job, we'll contact you first</span>
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </div>
      </Section>

      {/* About Abukar Section */}
      <Section className="py-12 lg:py-16" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardBody className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="hidden md:block">
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${BRAND.colors.primary}20` }}
                  >
                    <User size={48} style={{ color: BRAND.colors.primary }} />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white">
                    About Your Mechanic
                  </h2>
                  <div className="space-y-3 text-white/80 leading-relaxed">
                    <p>
                      Hi, I'm <strong className="text-white">Abukar Sharif</strong>, the mobile mechanic behind FixNow Mechanics. 
                      My goal is simple: provide a smooth, stress-free repair experience with honest pricing and clear communication every step of the way.
                    </p>
                    <p>
                      I believe in doing right by my customers. That means transparent quotes, quality work, and never recommending 
                      repairs you don't actually need. If I can't fix something on-site with the equipment I have, I'll tell you straight 
                      and refer you to a trusted local workshop that can help.
                    </p>
                    <p>
                      I focus on diagnostics and the repairs I can do safely and professionally at your location — things like brake 
                      replacements, battery issues, sensors, minor suspension work, and electrical faults. For jobs requiring specialist 
                      equipment or a lift (like gearbox work or major engine repairs), I'll point you in the right direction.
                    </p>
                    <p className="text-white font-medium">
                      One day, I plan to open a full workshop. Until then, I'm committed to bringing reliable, affordable mobile 
                      mechanic service directly to you.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-4">
                    <CheckCircle2 size={20} style={{ color: BRAND.colors.primary }} />
                    <span className="text-white/90 font-medium">Honest advice, transparent pricing, quality work</span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </Section>

      {/* Service Area */}
      <Section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <MapPin size={32} style={{ color: BRAND.colors.primary }} />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            Service Coverage Area
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We cover up to {PRICING.maxServiceRadius} miles from Hemel Hempstead, including:
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {BRAND.serviceAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full border border-white/10 text-white/90 bg-white/5 text-sm"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="pt-8">
            <Link to="/locations">
              <Button variant="ghost" className="border border-white/20">
                View All Location Pages
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-12 lg:py-16" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-white/10 to-white/5 border-2" style={{ borderColor: `${BRAND.colors.primary}40` }}>
            <CardBody className="text-center space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Ready to Get Your Vehicle Sorted?
              </h2>
              <p className="text-white/80 max-w-xl mx-auto">
                Get a free, no-obligation quote for your repair. Clear pricing, professional service, and we come to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/estimate" className="flex-1 sm:flex-initial">
                  <Button variant="primary" icon={Calculator} className="w-full">
                    Get Free Quote
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
              <p className="text-white/40 text-xs">
                Available {BRAND.hoursDisplay}
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </div>
  );
}
