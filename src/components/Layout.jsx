import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Calculator } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/estimate', label: 'Get Estimate' },
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
            Fix<span style={{ color: BRAND.colors.primary }}>Now</span>
            <span className="hidden sm:inline"> Mechanics</span>
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

          {/* Mobile Phone + Menu */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
              className="text-white/80 hover:text-white text-sm font-medium flex items-center gap-1"
            >
              <Phone size={16} />
              <span className="hidden xs:inline">{BRAND.phoneDisplay}</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 border-t border-white/10 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-white/70'
                }`}
                style={isActive(link.path) ? { color: BRAND.colors.primary } : {}}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}

export function MobileBottomBar() {
  const location = useLocation();
  const isEstimatePage = location.pathname === '/estimate';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl">
      <div className="px-4 py-3 pb-safe">
        {isEstimatePage ? (
          <a
            href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-base transition-all active:scale-95"
            style={{
              backgroundColor: BRAND.colors.primary,
              color: BRAND.colors.dark
            }}
          >
            <Phone size={20} />
            Call {BRAND.phoneDisplay}
          </a>
        ) : (
          <Link
            to="/estimate"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-base transition-all active:scale-95"
            style={{
              backgroundColor: BRAND.colors.primary,
              color: BRAND.colors.dark
            }}
          >
            <Calculator size={20} />
            Get Free Quote
          </Link>
        )}
      </div>
    </div>
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
  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{ background: BRAND.colors.dark }}
    >
      <Header />
      <main className="flex-1 pb-24 lg:pb-8">
        {children}
      </main>
      <Footer />
      <MobileBottomBar />
      <WhatsAppWidget />
    </div>
  );
}
