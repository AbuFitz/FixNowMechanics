import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Instagram } from 'lucide-react';
import { BRAND } from '../constants/brand';

export function Section({ children, className = '' }) {
  return (
    <section className={`w-full ${className}`}>
      {children}
    </section>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/estimate', label: 'Get Quote' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Fix<span className="text-yellow-500">Now</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-yellow-600'
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition-all"
            >
              <Phone size={18} />
              <span>{BRAND.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200">
            <nav className="flex flex-col gap-4 mb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium py-2 ${
                    isActive(link.path)
                      ? 'text-yellow-600'
                      : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full w-full"
            >
              <Phone size={18} />
              {BRAND.phoneDisplay}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 lg:px-16">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Fix<span className="text-yellow-500">Now</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mobile mechanic service covering Hertfordshire and surrounding areas
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/estimate" className="hover:text-white transition-colors">Get Quote</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/fixnowmechanics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Instagram size={16} />
                  @fixnowmechanics
                </a>
              </li>
              <li className="pt-2 text-xs">{BRAND.hoursDisplay}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} FixNow Mechanics | Part of ARF Automotive Group</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            {' • '}
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
