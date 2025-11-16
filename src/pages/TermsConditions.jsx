import React, { useEffect } from 'react';
import { BRAND } from '../constants/brand';
import { Section } from '../components/Layout';
import { Card, CardBody } from '../components/Card';

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section className="py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2" style={{ color: BRAND.colors.primary }}>
          Terms &amp; Conditions
        </h1>
        <p className="text-white/60 mb-8">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

        <Card>
          <CardBody className="p-8 space-y-6 text-white/80">
            <section>
              <h2 className="text-2xl font-bold text-white mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing our website or using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">2. Services Provided</h2>
              <p className="mb-3">FixNow Mechanics provides mobile mechanic services including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Vehicle diagnostics and fault code reading</li>
                <li>Brake repairs and replacements</li>
                <li>Battery replacement and fitting</li>
                <li>Oil and filter servicing</li>
                <li>Suspension and coilover installation</li>
                <li>Other vehicle repairs as agreed</li>
              </ul>
              <p className="mt-3">
                Services are performed at your location within our service area (primarily Hemel Hempstead and surrounding areas).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">3. Estimates and Quotes</h2>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-4">
                <p className="font-semibold text-yellow-400">IMPORTANT DISCLAIMER</p>
                <p className="mt-2">
                  All estimates provided through our website or initial contact are indicative only and subject to change upon physical inspection of the vehicle.
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Estimates are not final quotes:</strong> Final pricing may differ based on actual diagnosis</li>
                <li><strong>Diagnosis required:</strong> Some issues require hands-on inspection to accurately quote</li>
                <li><strong>Parts availability:</strong> Prices may vary based on parts sourcing and availability</li>
                <li><strong>Additional issues:</strong> Further problems discovered during work will be quoted separately</li>
                <li><strong>Quote validity:</strong> Quotes are valid for 7 days unless otherwise stated</li>
              </ul>
              <p className="mt-3">
                You will always receive a final quote before any chargeable work begins. No work will be performed without your explicit approval of the final price.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">4. Diagnostic Visit Fees</h2>
              <p className="mb-3">
                We operate a distance-based diagnostic visit pricing model:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Within 10 miles of Hemel Hempstead:</strong> £15 diagnostic visit fee</li>
                <li><strong>10–20 miles from Hemel Hempstead:</strong> £20 diagnostic visit fee</li>
                <li><strong>Over 20 miles from Hemel Hempstead:</strong> from £25 diagnostic visit fee</li>
                <li><strong>Maximum service radius:</strong> 45 miles from Hemel Hempstead</li>
              </ul>
              <p className="mt-3">
                <strong>Important notes about the diagnostic visit fee:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>The diagnostic visit fee covers travel, initial checks, OBD scan, and professional advice</li>
                <li>If we carry out paid repair work during the same visit, £10 of your diagnostic fee is deducted from the labour</li>
                <li>If no repair is carried out (customer declines quote, job not suitable for mobile work, etc.), the diagnostic visit fee still applies to cover time and travel</li>
                <li>The diagnostic visit fee is never refunded as cash</li>
                <li>Deeper electrical or multi-system diagnostics are quoted separately if needed (usually from £40)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">5. Payment Terms</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment is due upon completion of work unless otherwise agreed</li>
                <li>We accept cash, bank transfer, and other agreed payment methods</li>
                <li>Prices include VAT where applicable</li>
                <li>Parts supplied are charged at cost plus a reasonable markup</li>
                <li>You may supply your own parts, but we cannot guarantee their quality or performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">6. Cancellations and Rescheduling</h2>
              <h3 className="text-xl font-semibold text-white mt-4 mb-2">Customer Cancellations</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>24+ hours notice:</strong> Free cancellation or rescheduling</li>
                <li><strong>Less than 24 hours:</strong> Diagnostic visit fee may apply</li>
                <li><strong>No-show:</strong> Full diagnostic visit fee applies</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">Our Cancellations</h3>
              <p>
                We reserve the right to cancel or reschedule appointments due to unforeseen circumstances (weather, emergencies, etc.). You will be notified as soon as possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">7. Warranties and Guarantees</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Workmanship guarantee:</strong> We guarantee our workmanship for 30 days from completion</li>
                <li><strong>Parts warranty:</strong> Parts carry manufacturer warranties where applicable</li>
                <li><strong>Customer-supplied parts:</strong> No warranty on parts you supply</li>
                <li><strong>Diagnostic limitations:</strong> Diagnostics identify issues but cannot guarantee all problems will be found</li>
              </ul>
              <p className="mt-3">
                If issues arise from our work within the guarantee period, we will rectify them free of charge. This does not affect your statutory rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">8. Limitations of Liability</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="font-semibold text-white mb-2">We do not accept liability for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                  <li>Pre-existing faults not reported or discovered during initial inspection</li>
                  <li>Damage caused by customer-supplied parts or incorrect information</li>
                  <li>Consequential losses (e.g., loss of earnings, alternative transport costs)</li>
                  <li>Issues arising from normal wear and tear after our service</li>
                  <li>Failures of parts outside our control or warranty period</li>
                </ul>
              </div>
              <p>
                Nothing in these terms limits our liability for death or personal injury caused by our negligence, fraud, or other liabilities that cannot be limited by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">9. Vehicle Access and Safety</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You must provide safe, accessible parking for your vehicle during service</li>
                <li>Ensure the work area is clear and safe</li>
                <li>Provide accurate information about vehicle condition and history</li>
                <li>Remove valuable items from the vehicle</li>
                <li>Inform us of any known hazards or safety concerns</li>
              </ul>
              <p className="mt-3">
                We reserve the right to refuse service if conditions are unsafe or unsuitable for mobile repairs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">10. Data Protection</h2>
              <p>
                We collect and process personal data in accordance with UK GDPR and our <a href="/privacy" className="text-yellow-400 hover:underline">Privacy Policy</a>. By using our services, you consent to such processing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">11. Intellectual Property</h2>
              <p>
                All content on this website (text, images, logos, design) is owned by FixNow Mechanics and protected by copyright. You may not reproduce, distribute, or use any content without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">12. Service Area</h2>
              <p>
                Our primary service area is Hemel Hempstead and surrounding regions within a 45-mile radius. We may serve other areas at our discretion. Diagnostic visit fees are calculated based on distance from our Hemel Hempstead base (HP2 7DE).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">13. Disputes and Complaints</h2>
              <p className="mb-3">
                If you have a complaint:
              </p>
              <ul className="list-decimal list-inside space-y-2 ml-4">
                <li>Contact us directly at {BRAND.email} or {BRAND.phoneDisplay}</li>
                <li>We will acknowledge your complaint within 48 hours</li>
                <li>We aim to resolve all complaints within 14 days</li>
                <li>If unresolved, you may seek independent mediation or legal advice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">14. Force Majeure</h2>
              <p>
                We are not liable for delays or failures caused by events beyond our reasonable control, including but not limited to: severe weather, pandemics, government restrictions, supplier failures, or other acts of God.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">15. Governing Law</h2>
              <p>
                These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">16. Changes to Terms</h2>
              <p>
                We may update these Terms and Conditions at any time. Changes will be effective immediately upon posting to this page. Continued use of our services constitutes acceptance of revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">17. Contact Information</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="font-semibold text-white">FixNow Mechanics</p>
                <p>Email: <a href={`mailto:${BRAND.email}`} className="text-yellow-400 hover:underline">{BRAND.email}</a></p>
                <p>Phone: <a href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`} className="text-yellow-400 hover:underline">{BRAND.phoneDisplay}</a></p>
                <p>Operating Hours: {BRAND.hoursDisplay}</p>
                <p>Base Location: {BRAND.baseArea}</p>
              </div>
            </section>

            <section className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <p className="font-semibold text-yellow-400 mb-2">Your Statutory Rights</p>
              <p className="text-sm">
                Nothing in these terms affects your statutory rights as a consumer under UK law, including the Consumer Rights Act 2015. Services must be provided with reasonable care and skill, and be as described.
              </p>
            </section>
          </CardBody>
        </Card>

        <div className="mt-8 text-center">
          <a href="/" className="text-white/60 hover:text-white text-sm transition-colors">
            ← Return to homepage
          </a>
        </div>
      </div>
    </Section>
  );
}
