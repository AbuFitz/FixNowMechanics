import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Calculator, Instagram, Home, Menu, X } from 'lucide-react';
import { BRAND } from '../constants/brand';
import { LinkButton } from './Button';
import { WhatsAppWidget } from './WhatsAppWidget';
import { CookieConsent } from './CookieConsent';

export function Section({ children, className = '' }) {
  return (
    <section
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </section>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [showGetQuote, setShowGetQuote] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/estimate', label: 'Get Quote' },
  ];

  const mobileDropdownLinks = [
    { path: '/', label: 'Home', icon: 'Home' },
    { path: '/services', label: 'Services & Pricing', icon: 'Services' },
    { path: '/locations', label: 'Areas We Cover', icon: 'Location' },
    { path: '/estimate', label: 'Get Free Quote', icon: 'Quote', highlight: true },
  ];

  const isActive = (path) => location.pathname === path;

  // Show Get Quote button on scroll (mobile only)
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) {
        setShowGetQuote(window.scrollY > 100);
      } else {
        setShowGetQuote(true); // Always show on desktop
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/70">
      <Section className="py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-white font-extrabold text-xl lg:text-xl tracking-tight hover:opacity-80 transition-opacity"
          >
            Fix<span style={{ color: BRAND.colors.primary }}>Now</span> Mechanics
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
                style={isActive(link.path) ? { color: BRAND.colors.primary } : {}}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LinkButton
              variant="secondary"
              icon={Phone}
              href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
            >
              {BRAND.phoneDisplay}
            </LinkButton>
          </div>

          {/* Mobile Get Quote + Menu */}
          <div className="lg:hidden flex items-center gap-3">
            {showGetQuote && (
              <Link
                to="/estimate"
                className="text-sm font-bold px-4 py-2.5 rounded-lg transition-all shadow-lg flex items-center justify-center animate-in fade-in slide-in-from-right-5 duration-300"
                style={{
                  backgroundColor: BRAND.colors.primary,
                  color: BRAND.colors.dark
                }}
              >
                Get Quote
              </Link>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-5 pb-4 space-y-2 border-t border-white/10 pt-5 animate-in fade-in slide-in-from-top-2 duration-200">
            {mobileDropdownLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3.5 px-4 font-semibold rounded-xl transition-all text-center ${
                  link.highlight
                    ? 'text-black shadow-lg'
                    : isActive(link.path)
                    ? 'bg-white/10 text-white'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                }`}
                style={
                  link.highlight
                    ? { backgroundColor: BRAND.colors.primary }
                    : isActive(link.path)
                    ? { color: BRAND.colors.primary }
                    : {}
                }
              >
                {link.label}
              </Link>
            ))}
            
            {/* Quick Contact Links */}
            <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
              <a
                href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
              >
                <Phone size={16} />
                {BRAND.phoneDisplay}
              </a>
              <Link
                to="/privacy"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-2 text-white/50 hover:text-white/70 text-xs transition-all"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}

export function MobileBottomBar() {
  const location = useLocation();
  const isEstimatePage = location.pathname === '/estimate';

  // Hide bottom bar on estimate page
  if (isEstimatePage) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl shadow-2xl">
      <div className="px-4 py-4 pb-safe">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
            className="flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base transition-all active:scale-95 shadow-lg"
            style={{
              backgroundColor: BRAND.colors.primary,
              color: BRAND.colors.dark
            }}
          >
            <Phone size={20} />
            Call Us
          </a>
          <a
            href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${BRAND.whatsappPrefill}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base transition-all active:scale-95 shadow-lg"
            style={{
              backgroundColor: '#25D366',
              color: 'white'
            }}
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

// Mobile WhatsApp floating button for estimate page
export function MobileWhatsAppFloat() {
  const location = useLocation();
  const isEstimatePage = location.pathname === '/estimate';

  if (!isEstimatePage) {
    return null;
  }

  return (
    <a
      href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${BRAND.whatsappPrefill}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 lg:hidden w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all active:scale-95 hover:scale-110"
      style={{
        backgroundColor: '#25D366',
        boxShadow: '0 8px 32px rgba(37, 211, 102, 0.5)'
      }}
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} color="white" strokeWidth={2} />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-black/60 text-white border-t border-white/10 mt-8 lg:mt-20">
      <Section className="py-8 lg:py-12">
        {/* Mobile: Modern compact layout */}
        <div className="lg:hidden space-y-6">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">
              Fix<span style={{ color: BRAND.colors.primary }}>Now</span> Mechanics
            </h3>
            <p className="text-white/70 text-sm">
              Mobile mechanic service covering Hertfordshire
            </p>
          </div>
          
          <div className="flex justify-center gap-8 text-sm text-white/70">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/estimate" className="hover:text-white transition-colors">Quote</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
          
          <div className="text-center text-sm text-white/70 space-y-2">
            <p>
              <a href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`} className="hover:text-white font-medium" style={{ color: BRAND.colors.primary }}>
                {BRAND.phoneDisplay}
              </a>
            </p>
            <p>{BRAND.baseArea}</p>
          </div>
          
          <div className="text-center pt-4 border-t border-white/10 text-xs text-white/50">
            <p>© {new Date().getFullYear()} FixNow Mechanics | Part of ARF Automotive Group</p>
          </div>
        </div>

        {/* Desktop: Full layout */}
        <div className="hidden lg:grid md:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-3">
              Fix<span style={{ color: BRAND.colors.primary }}>Now</span> Mechanics
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {BRAND.tagline}
            </p>
            <p className="text-white/70 text-sm mt-2">
              Mobile mechanic service covering Hertfordshire and surrounding areas.
            </p>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold mb-3">Service Areas</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/locations/watford" className="hover:text-white transition-colors">
                  Watford
                </Link>
              </li>
              <li>
                <Link to="/locations/st-albans" className="hover:text-white transition-colors">
                  St Albans
                </Link>
              </li>
              <li>
                <Link to="/locations/luton" className="hover:text-white transition-colors">
                  Luton
                </Link>
              </li>
              <li>
                <Link to="/locations/milton-keynes" className="hover:text-white transition-colors">
                  Milton Keynes
                </Link>
              </li>
              <li>
                <Link to="/locations/aylesbury" className="hover:text-white transition-colors">
                  Aylesbury
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-white transition-colors font-medium" style={{ color: BRAND.colors.primary }}>
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/estimate" className="hover:text-white transition-colors">
                  Get Estimate
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                  className="hover:text-white transition-colors"
                  style={{ color: BRAND.colors.primary }}
                >
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-white transition-colors"
                >
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/fixnowmechanics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                  style={{ color: BRAND.colors.primary }}
                >
                  <Instagram size={20} className="lg:w-4 lg:h-4" />
                  <span className="hidden lg:inline">@fixnowmechanics</span>
                </a>
              </li>
              <li>{BRAND.baseArea}</li>
              <li>{BRAND.hoursDisplay}</li>
            </ul>
          </div>
        </div>

        <div className="hidden lg:block mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p className="mb-2">
            FixNow Mechanics is proudly operated under the{" "}
            <span className="font-semibold" style={{ color: BRAND.colors.primary }}>
              ARF Automotive Group
            </span>
          </p>
          <p className="mb-2">
            © {new Date().getFullYear()} FixNow Mechanics | Part of ARF Automotive Group. All rights reserved.
          </p>
          <p className="text-xs">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            {" | "}
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </p>
        </div>
      </Section>
    </footer>
  );
}

export function PageLayout({ children }) {
  const location = useLocation();
  const isEstimatePage = location.pathname === '/estimate';

  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{ background: BRAND.colors.dark }}
    >
      <Header />
      <main className={`flex-1 ${isEstimatePage ? 'pb-8' : 'pb-24 lg:pb-8'}`}>
        {children}
      </main>
      <Footer />
      <MobileBottomBar />
      <MobileWhatsAppFloat />
      <WhatsAppWidget />
      <CookieConsent />
    </div>
  );
}
