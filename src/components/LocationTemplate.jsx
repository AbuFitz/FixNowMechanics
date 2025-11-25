import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Clock, CheckCircle2, Calculator, Wrench } from 'lucide-react';
import { BRAND } from '../constants/brand';
import { Section } from '../components/Layout';
import { Button, LinkButton } from '../components/Button';
import { Card } from '../components/Card';

export default function LocationTemplate({ location }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${location.title} | FixNow Mechanics`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', location.metaDescription);
    }

    // Add structured data for SEO
    const schema = {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      "name": `FixNow Mechanics - Mobile Mechanic ${location.name}`,
      "description": location.metaDescription,
      "url": `https://fixnowmechanics.co.uk/locations/${location.slug}`,
      "telephone": BRAND.phoneDisplay.replace(/\s/g, ''),
      "priceRange": "££",
      "image": "https://fixnowmechanics.co.uk/images/company-van.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location.name,
        "addressRegion": "Hertfordshire",
        "addressCountry": "GB"
      },
      "geo": location.coords ? {
        "@type": "GeoCoordinates",
        "latitude": location.coords.lat,
        "longitude": location.coords.lng
      } : undefined,
      "areaServed": {
        "@type": "City",
        "name": location.name
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "20:00"
        }
      ],
      "serviceType": [
        "Mobile Mechanic",
        "Car Diagnostics",
        "Brake Repair",
        "Oil Change",
        "Battery Replacement",
        "Suspension Repair",
        "Electrical Repair"
      ]
    };

    // Add schema script to head
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schema);

    // Cleanup
    return () => {
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [location]);

  const services = [
    {
      category: 'Diagnostics',
      items: ['Full system diagnostic scan', 'Engine light diagnosis', 'ABS/DSC faults', 'Airbag/SRS faults', 'Electrical fault tracing', 'Live data analysis']
    },
    {
      category: 'Servicing',
      items: ['Full service', 'Interim service', 'Oil & filter change', 'Air/pollen/fuel filter changes', 'Spark plugs', 'Vehicle health check']
    },
    {
      category: 'Brakes',
      items: ['Brake pads', 'Discs & pads', 'Brake inspections', 'ABS sensor replacement', 'Brake fluid top-up']
    },
    {
      category: 'Electrical & Starting',
      items: ['Battery test & replacement', 'Alternator replacement', 'Starter motor replacement', 'Sensor replacements (MAF, MAP, O2, crank, cam)']
    },
    {
      category: 'Suspension & Steering',
      items: ['Springs', 'Shock absorbers', 'Drop links', 'Control arms', 'Ball joints', 'Track rod ends']
    },
    {
      category: 'General Services',
      items: ['Pre-purchase inspections', 'Jump starts', 'Battery drain checks', 'Leak inspections', 'Warning lights investigation']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div style={{ backgroundColor: BRAND.colors.dark }}>
        <Section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/90 mb-4">
              <MapPin size={18} style={{ color: BRAND.colors.primary }} />
              <span className="text-sm font-medium">We Travel to {location.name}</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Mobile Mechanic Service
              <span className="block mt-2" style={{ color: BRAND.colors.primary }}>Available in {location.name}</span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Based in Hemel Hempstead, we bring professional mobile mechanic services to {location.name}. We come to your home, workplace, or roadside location.
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

      {/* Coverage Info */}
      <Section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-white/10 to-white/5">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <MapPin size={28} style={{ color: BRAND.colors.primary }} />
              Serving {location.name} from Hemel Hempstead
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              FixNow Mechanics is based in Hemel Hempstead and provides mobile mechanic services throughout {location.name}. 
              Whether you're in {location.localAreas.slice(0, 3).join(', ')}, or anywhere else in {location.name}, 
              we'll travel to your location with our fully equipped mobile workshop.
            </p>
            <p className="text-white/80 leading-relaxed">
              No need to arrange recovery or visit a garage – we handle diagnostics, repairs, and servicing at your driveway, 
              workplace, or roadside. Same-day appointments often available.
            </p>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/70 text-sm">
                <strong>Postcodes we cover in {location.name}:</strong> {location.postcodes.join(', ')}
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Services We Offer */}
      <Section className="py-12 lg:py-16" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center">
            Mobile Mechanic Services We Provide in {location.name}
          </h2>
          <p className="text-white/70 text-center mb-12 max-w-3xl mx-auto">
            Professional repairs and servicing at your {location.name} location
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Wrench size={24} style={{ color: BRAND.colors.primary }} className="flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-white">{service.category}</h3>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-white/70 text-sm flex items-start gap-2">
                      <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: BRAND.colors.primary }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/estimate">
              <Button variant="primary" icon={Calculator}>
                Get Quote for Your Repair
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
            Why Choose FixNow for Mobile Mechanic Services in {location.name}?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 size={24} className="flex-shrink-0 mt-1" style={{ color: BRAND.colors.primary }} />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">We Come to You</h3>
                  <p className="text-white/70">No need to visit a garage. We travel to {location.name} with our fully equipped mobile workshop.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 size={24} className="flex-shrink-0 mt-1" style={{ color: BRAND.colors.primary }} />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Transparent Pricing</h3>
                  <p className="text-white/70">Clear quotes before work starts. No hidden fees or surprise charges.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 size={24} className="flex-shrink-0 mt-1" style={{ color: BRAND.colors.primary }} />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Flexible Appointments</h3>
                  <p className="text-white/70">Evening and weekend appointments available to fit your schedule.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 size={24} className="flex-shrink-0 mt-1" style={{ color: BRAND.colors.primary }} />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Same-Day Service</h3>
                  <p className="text-white/70">Fast response times. Same-day service often available in {location.name}.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Areas Covered */}
      <Section className="py-12 lg:py-16" style={{ backgroundColor: BRAND.colors.mid }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
            {location.name} Areas We Serve
          </h2>
          
          <Card className="p-8">
            <p className="text-white/80 mb-6 text-center">
              We provide mobile mechanic services throughout {location.name}, including:
            </p>
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
                Postcodes: {location.postcodes.join(', ')}
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
            How Our {location.name} Mobile Mechanic Service Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold" 
                   style={{ backgroundColor: BRAND.colors.primary, color: BRAND.colors.dark }}>
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Get a Quote</h3>
              <p className="text-white/70">
                Tell us what's wrong with your vehicle and your {location.name} location. We'll provide a transparent quote.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold" 
                   style={{ backgroundColor: BRAND.colors.primary, color: BRAND.colors.dark }}>
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Book Your Appointment</h3>
              <p className="text-white/70">
                Choose a time that suits you. We offer flexible scheduling including evenings and weekends.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold" 
                   style={{ backgroundColor: BRAND.colors.primary, color: BRAND.colors.dark }}>
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3">We Come to You</h3>
              <p className="text-white/70">
                Our mechanic arrives at your {location.name} location with all necessary tools and completes the work.
              </p>
            </div>
          </div>
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
            Get a free quote for mobile mechanic services at your {location.name} location. 
            Fast response, professional service, honest pricing.
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
              href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${encodeURIComponent(`Hi! I need a mobile mechanic in ${location.name}`)}`}
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
