import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants/brand';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-sm">
      <div className="bg-black/95 border border-white/20 rounded-lg p-4 backdrop-blur-xl shadow-2xl">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl">🍪</span>
          <div className="flex-1">
            <h3 className="text-white font-bold text-sm mb-1">Cookie Notice</h3>
            <p className="text-white/70 text-xs leading-relaxed">
              We use cookies to improve your experience and analyze site traffic. By clicking "Accept", you consent to our use of cookies.
            </p>
          </div>
          <button
            onClick={handleDecline}
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={handleAccept}
            className="w-full py-2 px-4 rounded-lg font-semibold text-sm transition-all hover:opacity-90"
            style={{
              backgroundColor: BRAND.colors.primary,
              color: BRAND.colors.dark
            }}
          >
            Accept
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleDecline}
              className="flex-1 py-2 px-4 rounded-lg font-semibold text-sm transition-all border border-white/20 text-white/80 hover:bg-white/5"
            >
              Decline
            </button>
            <Link
              to="/privacy"
              className="flex-1 py-2 px-4 rounded-lg font-semibold text-sm transition-all border border-white/20 text-white/80 hover:bg-white/5 text-center"
              onClick={() => setShowBanner(false)}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
