import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench, MapPin, Phone, MessageCircle, CheckCircle2, Clock,
  Gauge, BatteryCharging, Droplet, Settings2, BadgeCheck,
  Navigation, Calculator, Shield
} from 'lucide-react';
import { BRAND, SERVICES, DIAGNOSTIC_PRICING } from '../constants/brand';
import { Section } from '../components/Layout';
import { Card, CardBody } from '../components/Card';
import { Button, LinkButton } from '../components/Button';

export default function ServicesLocations() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceIcons = [Gauge, Wrench, BatteryCharging, Droplet, Settings2];

  // Detailed location coverage areas
  const coverageAreas = [
    {
      area: "Hemel Hempstead",
      postcode: "HP1-HP3",
      distance: "0-5 miles",
      diagnosticFee: "£15",
      isBase: true
    },
    {
      area: "Watford",
      postcode: "WD17-WD25",
      distance: "8-12 miles",
      diagnosticFee: "£15-20"
    },
    {
      area: "St Albans",
      postcode: "AL1-AL4",
      distance: "10-14 miles",
      diagnosticFee: "£15-20"
    },
    {
      area: "Luton",
      postcode: "LU1-LU7",
      distance: "12-18 miles",
      diagnosticFee: "£20-25"
    },
    {
      area: "Aylesbury",
      postcode: "HP18-HP22",
      distance: "15-20 miles",
      diagnosticFee: "£20-25"
    },
    {
      area: "North London",
      postcode: "N1-N20, NW1-NW11",
      distance: "18-25 miles",
      diagnosticFee: "£20-25"
    },
    {
      area: "Hertford",
      postcode: "SG13-SG14",
      distance: "15-22 miles",
      diagnosticFee: "£20-25"
    },
    {
      area: "Berkhamsted",
      postcode: "HP4",
      distance: "5-8 miles",
      diagnosticFee: "£15"
    },
    {
      area: "Dunstable",
      postcode: "LU5-LU6",
      distance: "10-15 miles",
      diagnosticFee: "£15-20"
    },
    {
      area: "Tring",
      postcode: "HP23",
      distance: "8-12 miles",
      diagnosticFee: "£15-20"
    }
  ];

  const whyChooseUs = [
    {
      icon: MapPin,
      title: "Fully Mobile Service",
      desc: "We come to your home, workplace, or anywhere convenient for you. No need to find a garage or wait in a waiting room."
    },
    {
      icon: Shield,
      title: "Transparent Pricing",
      desc: "No hidden fees, no surprise charges. You'll know exactly what you're paying before we start any work."
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      desc: "Mon-Fri: 7pm-10pm | Sat: 8am-10pm | Sun: 8am-8pm. We work around your schedule, including evenings and weekends."
    },
    {
      icon: BadgeCheck,
      title: "Quality Assured",
      desc: "Professional service using quality parts from trusted brands. We stand behind our work with careful attention to every repair."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section className="py-12 lg:py-20" style={{ backgroundColor: BRAND.colors.dark }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-4 lg:mb-6">
            Our Services & <span className="gradient-text">Coverage Areas</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/80 mb-6 lg:mb-8 leading-relaxed">
            Professional mobile mechanic services across Hertfordshire and surrounding areas.
            Same-day service available for most repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 shadow-xl"
              style={{
                backgroundColor: BRAND.colors.primary,
                color: BRAND.colors.dark
              }}
            >
              <Phone size={22} />
              Call {BRAND.phoneDisplay}
            </a>
            <Link to="/estimate">
              <Button variant="secondary" icon={Calculator} className="text-lg py-4 px-8">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Core Services */}
      <Section className="py-12 lg:py-20">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
            Our Core Services
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Specializing in major mechanical repairs and diagnostics. All work carried out at your location with professional equipment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <Card key={service.slug} className="group hover:scale-105 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500">
              <CardBody className="p-6 lg:p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div
                    className="rounded-2xl p-3.5 lg:p-4 transform group-hover:rotate-6 transition-transform duration-300"
                    style={{ backgroundColor: `${BRAND.colors.primary}30` }}
                  >
                    {React.createElement(serviceIcons[i], {
                      size: 32,
                      style: { color: BRAND.colors.primary }
                    })}
                  </div>
                  <span className="text-xl lg:text-2xl font-black gradient-text">
                    {service.price}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <Link to="/estimate" className="block">
                  <Button
                    variant="ghost"
                    icon={MessageCircle}
                    className="w-full group-hover:bg-yellow-500/10"
                  >
                    Request Quote
                  </Button>
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-10 lg:mt-14 space-y-6">
          <Card className="bg-blue-500/10 border-blue-500/30 p-6 lg:p-8">
            <div className="flex items-start gap-4">
              <CheckCircle2 size={28} className="text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white text-xl font-bold mb-2">BYO Parts Welcome</h3>
                <p className="text-white/80 leading-relaxed">
                  Bring your own parts and we'll fit them for you. Just mention it when you get your quote, and we'll confirm the labour cost.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-white/5 border-white/10 p-6 lg:p-8">
            <div className="flex items-start gap-4">
              <Wrench size={28} style={{ color: BRAND.colors.primary }} className="flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white text-xl font-bold mb-2">Need Something Else?</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  We focus on major mechanical work like diagnostics, braking systems, suspension, and engine servicing. For other repairs not listed, please reach out via WhatsApp or phone to discuss your specific needs.
                </p>
                <div className="flex flex-wrap gap-3">
                  <LinkButton
                    variant="ghost"
                    icon={MessageCircle}
                    href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${encodeURIComponent('Hi! I need help with a repair not listed on your website')}`}
                    className="text-sm"
                  >
                    WhatsApp Us
                  </LinkButton>
                  <Link to="/estimate">
                    <Button variant="primary" icon={Calculator} className="text-sm">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Coverage Areas */}
      <Section className="py-12 lg:py-20" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
            Coverage Areas
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto mb-6">
            We cover up to {DIAGNOSTIC_PRICING.maxServiceRadius} miles from Hemel Hempstead.
            Diagnostic visit fees vary based on distance.
          </p>

          <Card className="inline-block bg-yellow-500/10 border-yellow-500/30 p-4 lg:p-6 max-w-2xl">
            <p className="text-yellow-300 text-sm lg:text-base">
              <strong>Diagnostic Visit Pricing:</strong> £{DIAGNOSTIC_PRICING.within10Miles} (0-10 miles) •
              £{DIAGNOSTIC_PRICING.within20Miles} (10-20 miles) •
              £{DIAGNOSTIC_PRICING.over20Miles} (20+ miles)
            </p>
            <p className="text-white/70 text-xs lg:text-sm mt-2">
              £{DIAGNOSTIC_PRICING.labourDeduction} deducted from labour if repair proceeds
            </p>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
          {coverageAreas.map((location) => (
            <Card
              key={location.area}
              className={`p-5 lg:p-6 hover:scale-105 transition-all duration-300 ${
                location.isBase
                  ? 'bg-yellow-500/10 border-yellow-500/40 ring-2 ring-yellow-500/20'
                  : 'hover:border-yellow-500/30'
              }`}
            >
              <div className="text-center space-y-3">
                {location.isBase && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-2" style={{ backgroundColor: BRAND.colors.primary, color: BRAND.colors.dark }}>
                    <Navigation size={14} />
                    Base Location
                  </div>
                )}
                <div>
                  <h3 className="text-white text-lg font-bold mb-1">{location.area}</h3>
                  <p className="text-white/60 text-sm">{location.postcode}</p>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-white/70 text-xs mb-1">Distance from base</p>
                  <p className="text-white font-semibold text-sm">{location.distance}</p>
                </div>
                <div className="pt-2">
                  <p className="text-white/70 text-xs mb-1">Diagnostic visit</p>
                  <p className="font-bold" style={{ color: BRAND.colors.primary }}>{location.diagnosticFee}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Check Your Area */}
        <div className="mt-10 lg:mt-14 text-center">
          <Card className="inline-block bg-white/5 border-white/10 p-6 lg:p-8 max-w-2xl">
            <h3 className="text-white text-xl lg:text-2xl font-bold mb-3">
              Not sure if we cover your area?
            </h3>
            <p className="text-white/70 mb-6">
              Enter your postcode in our quote form to check if we cover your location and get your exact diagnostic visit fee.
            </p>
            <Link to="/estimate">
              <Button variant="primary" icon={Calculator} className="text-lg px-8 py-4">
                Check Your Postcode
              </Button>
            </Link>
          </Card>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="py-12 lg:py-20">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
            Why Choose FixNow Mechanics?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {whyChooseUs.map((item, i) => (
            <Card key={i} className="p-6 lg:p-8 hover:scale-105 hover:border-yellow-500/40 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-500 group">
              <div className="flex items-start gap-5">
                <div
                  className="rounded-2xl p-4 flex-shrink-0 transform group-hover:rotate-6 transition-transform duration-300"
                  style={{ backgroundColor: `${BRAND.colors.primary}30` }}
                >
                  <item.icon size={32} style={{ color: BRAND.colors.primary }} />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-12 lg:py-20" style={{ backgroundColor: BRAND.colors.mid }}>
        <Card className="p-8 lg:p-12 text-center bg-gradient-to-br from-white/10 via-white/5 to-transparent border-2 hover:border-yellow-500/60 transition-all duration-500 shadow-2xl relative overflow-hidden max-w-4xl mx-auto" style={{ borderColor: `${BRAND.colors.primary}40` }}>
          <div className="hidden lg:block absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="hidden lg:block absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Same-day service available for most repairs. Get your free quote in under 2 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-xl font-black transition-all hover:scale-105 shadow-2xl"
                style={{
                  backgroundColor: BRAND.colors.primary,
                  color: BRAND.colors.dark,
                  boxShadow: `0 20px 60px ${BRAND.colors.primary}40`
                }}
              >
                <Phone size={24} />
                CALL NOW
              </a>
              <Link to="/estimate">
                <Button variant="secondary" icon={Calculator} className="text-xl py-5 px-10 border-2">
                  Get Free Quote
                </Button>
              </Link>
            </div>

            <p className="text-white/50 text-sm mt-6">
              Available {BRAND.hoursDisplay}
            </p>
          </div>
        </Card>
      </Section>
    </div>
  );
}
