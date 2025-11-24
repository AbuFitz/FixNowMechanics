import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Clock, CheckCircle2, Calculator } from 'lucide-react';
import { BRAND, SERVICES } from '../constants/brand';
import { Section } from '../components/Layout';
import { Button, LinkButton } from '../components/Button';
import { Card } from '../components/Card';

export default function LocationTemplate({ location }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${location.title} | FixNow Mechanics - Same Day Service`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', location.metaDescription);
    }
  }, [location]);

  const benefits = [
    `Same-day mobile mechanic service across ${location.name}`,
    'We come to your home, workplace or roadside',
    'Transparent pricing - no hidden costs',
    'Evening & weekend appointments available'
  ];

  return (
    <div>
      {/* Hero Section */}
      <div style={{ backgroundColor: BRAND.colors.dark }}>
        <Section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/90 mb-4">
              <MapPin size={18} style={{ color: BRAND.colors.primary }} />
              <span className="text-sm font-medium">Serving {location.name} & Surrounding Areas</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
              Mobile Mechanic
              <span className="block" style={{ color: BRAND.colors.primary }}>{location.name}</span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Professional mobile mechanic service covering all areas of {location.name}. We bring workshop-quality repairs directly to your location.
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

      {/* Why Choose Us */}
      <Section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
            Why Choose FixNow for {location.name} Mobile Mechanic Services?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="flex-shrink-0 mt-1" style={{ color: BRAND.colors.primary }} />
                  <p className="text-white/90 text-lg">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-white/10 to-white/5">
            <h3 className="text-2xl font-bold text-white mb-4">
              {location.name}'s Trusted Mobile Mechanic
            </h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Serving {location.name} and the surrounding areas, FixNow Mechanics brings professional vehicle repairs 
              directly to your driveway, workplace, or roadside location. Based nearby in Hemel Hempstead, 
              we're perfectly positioned to provide fast, reliable mobile mechanic services throughout {location.name}.
            </p>
            <p className="text-white/80 leading-relaxed">
              Whether you're in {location.localAreas.slice(0, 3).join(', ')}, or any other part of {location.name}, 
              our fully equipped mobile workshop comes to you. No need to arrange recovery or waste time at a garage 
              – we handle diagnostics, repairs, and servicing at a time and place that suits you.
            </p>
          </Card>
        </div>
      </Section>

      {/* Services */}
      <Section className="py-12 lg:py-16" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center">
            Mobile Mechanic Services in {location.name}
          </h2>
          <p className="text-white/70 text-center mb-12 max-w-3xl mx-auto">
            From diagnostics to major repairs, we handle it all at your location in {location.name}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <Card key={index} className="p-6 hover:border-yellow-500/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <span className="text-xl font-bold" style={{ color: BRAND.colors.primary }}>
                    {service.price}
                  </span>
                </div>
                <p className="text-white/70 text-sm mb-4">{service.desc}</p>
                <Link to="/estimate">
                  <Button variant="ghost" icon={MessageCircle} className="w-full">
                    Get Quote
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Areas Covered */}
      <Section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
            {location.name} Areas We Cover
          </h2>
          
          <Card className="p-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {location.localAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-3">
                  <MapPin size={18} style={{ color: BRAND.colors.primary }} />
                  <span className="text-white/90">{area}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white/70 text-center">
                Plus all surrounding {location.name} postcodes: {location.postcodes.join(', ')}
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* SEO Content Section */}
      <Section className="py-12 lg:py-16" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-center">
            About Our {location.name} Mobile Mechanic Service
          </h2>
          
          <Card className="p-8">
            <div className="prose prose-invert max-w-none space-y-4 text-white/80">
              <p>
                <strong>Looking for a reliable mobile mechanic in {location.name}?</strong> FixNow Mechanics provides 
                professional mobile vehicle repair services throughout {location.name} and the surrounding areas. 
                Based in nearby Hemel Hempstead, we're ideally positioned to serve customers across all 
                {location.name} postcodes including {location.postcodes.join(', ')}.
              </p>
              
              <p>
                Our mobile mechanic service means you don't need to take time off work, arrange vehicle recovery, 
                or sit in a waiting room. We bring our fully equipped mobile workshop directly to your home, 
                workplace, or even roadside location anywhere in {location.name}. From diagnostic checks to major 
                repairs, we handle everything on-site.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                {location.name} Mobile Mechanic – Fast, Professional Service
              </h3>
              
              <p>
                Whether you're in {location.localAreas[0]} dealing with a breakdown, in {location.localAreas[1]} needing brake repairs, 
                or in {location.localAreas[2]} requiring a service, FixNow Mechanics responds quickly. We typically provide 
                quotes within 2 hours and can often attend the same day or next day depending on your urgency 
                and our schedule.
              </p>

              <p>
                Our transparent pricing means no hidden fees or surprise charges. You'll receive a detailed 
                quote before any work begins, covering labour and parts. We're also happy to fit parts you 
                supply yourself – just mention this when requesting your quote for {location.name} mobile mechanic services.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                Why {location.name} Drivers Choose FixNow Mechanics
              </h3>
              
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-1" style={{ color: BRAND.colors.primary }} />
                  <span><strong>Convenient:</strong> We come to your {location.name} location – home, work, or roadside</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-1" style={{ color: BRAND.colors.primary }} />
                  <span><strong>Transparent:</strong> Clear pricing with no hidden fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-1" style={{ color: BRAND.colors.primary }} />
                  <span><strong>Flexible:</strong> Evening and weekend appointments available</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-1" style={{ color: BRAND.colors.primary }} />
                  <span><strong>Professional:</strong> Quality repairs using proper tools and parts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-1" style={{ color: BRAND.colors.primary }} />
                  <span><strong>Local:</strong> Based nearby, serving all {location.name} areas quickly</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="py-12 lg:py-20">
        <Card className="p-8 lg:p-12 text-center bg-gradient-to-br from-white/10 to-white/5 border-2 max-w-4xl mx-auto" 
              style={{ borderColor: `${BRAND.colors.primary}40` }}>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Need a Mobile Mechanic in {location.name}?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for mobile mechanic services anywhere in {location.name}. 
            Fast response, professional service, transparent pricing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/estimate" className="flex-1 sm:flex-initial">
              <Button variant="primary" icon={Calculator} className="w-full">
                Get Free Quote
              </Button>
            </Link>
            <LinkButton
              variant="secondary"
              icon={MessageCircle}
              href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${encodeURIComponent(`Hi! I need a mobile mechanic in ${location.name} for my vehicle`)}`}
              className="flex-1 sm:flex-initial"
            >
              WhatsApp Us
            </LinkButton>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center gap-2 text-white/70">
              <Clock size={18} style={{ color: BRAND.colors.primary }} />
              <span>Available {BRAND.hoursDisplay}</span>
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
}
