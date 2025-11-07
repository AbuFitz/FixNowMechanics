import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BRAND } from '../constants/brand';

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${BRAND.whatsappPrefill}`;

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Popup Message */}
        {isOpen && (
          <div className="animate-in slide-in-from-bottom-5 fade-in duration-300">
            <div
              className="relative rounded-2xl shadow-2xl p-4 max-w-xs border-2"
              style={{
                backgroundColor: BRAND.colors.dark,
                borderColor: BRAND.colors.primary,
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Close"
              >
                <X size={14} />
              </button>

              {/* Content */}
              <div className="flex items-start gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: BRAND.colors.primary }}
                >
                  <MessageCircle size={24} style={{ color: BRAND.colors.dark }} />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold mb-1">Need help?</p>
                  <p className="text-white/70 text-sm mb-3">
                    Message us on WhatsApp for quick assistance!
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105"
                    style={{
                      backgroundColor: BRAND.colors.primary,
                      color: BRAND.colors.dark,
                    }}
                  >
                    <MessageCircle size={16} />
                    Start Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 relative"
          style={{ backgroundColor: '#25D366' }}
          aria-label="WhatsApp"
        >
          <MessageCircle
            size={32}
            className="text-white group-hover:rotate-12 transition-transform duration-300"
          />
        </button>
      </div>
    </>
  );
}
