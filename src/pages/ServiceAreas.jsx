import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Phone, Calculator } from 'lucide-react';
import { BRAND } from '../constants/brand';
import { LOCATIONS } from '../constants/locations';
import { Section } from '../components/Layout';
import { Button, LinkButton } from '../components/Button';
import { Card } from '../components/Card';

export default function ServiceAreas() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Service Areas | Mobile Mechanic Hertfordshire & Surrounding Areas | FixNow Mechanics';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'FixNow Mechanics covers Hemel Hempstead, Watford, St Albans, Luton, Milton Keynes, Aylesbury, North London & more. Professional mobile mechanic service at your location.');
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div style={{ backgroundColor: BRAND.colors.dark }}>
        <Section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
              Our Service
              <span className="block" style={{ color: BRAND.colors.primary }}>Coverage Areas</span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Professional mobile mechanic services across Hertfordshire, Bedfordshire, Buckinghamshire, and North London. 
              We travel up to 45 miles from Hemel Hempstead to bring workshop-quality repairs directly to you.
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

      {/* Main Service Areas Grid */}
      <Section className="py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center">
            Areas We Serve
          </h2>
          <p className="text-white/70 text-center mb-12 max-w-3xl mx-auto">
            Click on any area below to see detailed information about our mobile mechanic services in that location
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((location) => (
              <Link key={location.slug} to={`/locations/${location.slug}`}>
                <Card className="p-6 hover:border-yellow-500/50 hover:scale-[1.02] transition-all group h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" 
                           style={{ backgroundColor: `${BRAND.colors.primary}20` }}>
                        <MapPin size={24} style={{ color: BRAND.colors.primary }} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{location.name}</h3>
                    </div>
                    <ArrowRight size={20} className="text-white/40 group-hover:text-white/70 transition-colors" />
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-white/60 text-sm mb-2">Popular areas:</p>
                      <div className="flex flex-wrap gap-2">
                        {location.localAreas.slice(0, 3).map((area, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded bg-white/5 text-white/70">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-white/60 text-sm mb-2">Postcodes:</p>
                      <p className="text-white/80 text-sm">{location.postcodes.join(', ')}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-sm font-medium group-hover:underline" 
                          style={{ color: BRAND.colors.primary }}>
                      View {location.name} Services →
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Coverage Map Section */}
      <Section className="py-12 lg:py-16" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
            Our Mobile Mechanic Coverage
          </h2>

          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Coverage Radius</h3>
                <p className="text-white/80 leading-relaxed">
                  Based in Hemel Hempstead, we provide mobile mechanic services within a 45-mile radius, 
                  covering major towns and cities across Hertfordshire, Bedfordshire, Buckinghamshire, 
                  and North London.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND.colors.primary }}></div>
                    <span className="text-white/90">Up to 45 miles from Hemel Hempstead</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND.colors.primary }}></div>
                    <span className="text-white/90">Same-day service often available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND.colors.primary }}></div>
                    <span className="text-white/90">Evening & weekend appointments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND.colors.primary }}></div>
                    <span className="text-white/90">Diagnostic visit from £15-£25</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Counties Covered</h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Hertfordshire</h4>
                    <p className="text-white/70 text-sm">
                      Hemel Hempstead, Watford, St Albans, Stevenage, Hatfield & more
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Bedfordshire</h4>
                    <p className="text-white/70 text-sm">
                      Luton, Dunstable & surrounding areas
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Buckinghamshire</h4>
                    <p className="text-white/70 text-sm">
                      Aylesbury, Milton Keynes & surrounding areas
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">North London</h4>
                    <p className="text-white/70 text-sm">
                      Harrow, Brent, Edgware, Kingsbury, Borehamwood & more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Not Sure If We Cover Your Area */}
      <Section className="py-12 lg:py-16">
        <Card className="p-8 lg:p-12 text-center bg-gradient-to-br from-white/10 to-white/5 border-2 max-w-4xl mx-auto" 
              style={{ borderColor: `${BRAND.colors.primary}40` }}>
          <MapPin size={48} style={{ color: BRAND.colors.primary }} className="mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Not Sure If We Cover Your Area?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Enter your postcode in our quote form and we'll let you know if we can reach you. 
            We cover up to 45 miles from Hemel Hempstead.
          </p>
          
          <Link to="/estimate">
            <Button variant="primary" icon={Calculator} className="text-lg py-4 px-8">
              Check Your Postcode & Get Quote
            </Button>
          </Link>
        </Card>
      </Section>
    </div>
  );
}
