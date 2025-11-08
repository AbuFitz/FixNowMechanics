import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Calculator, Instagram, Home } from 'lucide-react';
import { BRAND } from '../constants/brand';
import { LinkButton } from './Button';
import { WhatsAppWidget } from './WhatsAppWidget';

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
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/estimate', label: 'Get Estimate' },
  ];

  const mobileMenuLinks = [
    { path: '/', label: 'Home' },
    { path: '/estimate', label: 'Get Estimate' },
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms & Conditions' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/60">
      <Section className="py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-white font-extrabold text-xl tracking-tight hover:opacity-80 transition-opacity"
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

          {/* Mobile Get Estimate */}
          <div className="lg:hidden">
            <Link
              to="/estimate"
              className="text-sm font-semibold px-3 py-1.5 rounded-lg transition-all"
              style={{
                backgroundColor: BRAND.colors.primary,
                color: BRAND.colors.dark
              }}
            >
              Get Estimate
            </Link>
          </div>
        </div>

        {/* Mobile Menu - Always visible */}
        <div className="lg:hidden mt-4 pb-2 space-y-1.5 border-t border-white/10 pt-3">
          {mobileMenuLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-1.5 px-2 text-sm font-medium transition-colors rounded ${
                isActive(link.path)
                  ? 'bg-white/5'
                  : ''
              }`}
              style={isActive(link.path) ? { color: BRAND.colors.primary } : { color: 'rgba(255,255,255,0.6)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
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
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl">
      <div className="px-3 py-2.5 pb-safe">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
            className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all active:scale-95"
            style={{
              backgroundColor: BRAND.colors.primary,
              color: BRAND.colors.dark
            }}
          >
            <Phone size={18} />
            Call Us
          </a>
          <a
            href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${BRAND.whatsappPrefill}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all active:scale-95"
            style={{
              backgroundColor: '#25D366',
              color: 'white'
            }}
          >
            <MessageCircle size={18} />
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
      className="fixed bottom-6 right-6 z-50 lg:hidden w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all active:scale-95 hover:scale-110"
      style={{
        backgroundColor: '#25D366',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)'
      }}
      aria-label="WhatsApp"
    >
      <MessageCircle size={24} color="white" />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-black/60 text-white border-t border-white/10 mt-20">
      <Section className="py-12">
        <div className="grid md:grid-cols-4 gap-8">
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
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms &amp; Conditions
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

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
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
    </div>
  );
}
