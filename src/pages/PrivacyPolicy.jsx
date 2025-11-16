import React, { useEffect } from 'react';
import { BRAND } from '../constants/brand';
import { Section } from '../components/Layout';
import { Card, CardBody } from '../components/Card';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section className="py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2" style={{ color: BRAND.colors.primary }}>
          Privacy Policy
        </h1>
        <p className="text-white/60 mb-8">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

        <Card>
          <CardBody className="p-8 space-y-6 text-white/80">
            <section>
              <h2 className="text-2xl font-bold text-white mb-3">1. Introduction</h2>
              <p>
                FixNow Mechanics ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">Personal Information</h3>
              <p className="mb-3">When you request an estimate or contact us, we may collect:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact details (phone number, email address)</li>
                <li>Address and postcode</li>
                <li>Vehicle registration number and details</li>
                <li>Service requirements and issue descriptions</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-4 mb-2">Technical Information</h3>
              <p className="mb-3">We automatically collect certain information when you visit our website:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on site</li>
                <li>Device and operating system information</li>
                <li>Referral source (how you found us)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide estimates and quotes for vehicle repairs</li>
                <li>Communicate with you about our services</li>
                <li>Schedule appointments and provide mobile mechanic services</li>
                <li>Send confirmation emails and service updates</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">4. Legal Basis for Processing (UK GDPR)</h2>
              <p className="mb-3">We process your personal data under the following legal bases:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Contract Performance:</strong> To provide you with the services you requested</li>
                <li><strong>Legitimate Interests:</strong> To improve our services and communicate with you</li>
                <li><strong>Legal Obligation:</strong> To comply with tax, accounting, and legal requirements</li>
                <li><strong>Consent:</strong> Where you have given explicit consent (e.g., marketing emails)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">5. Information Sharing</h2>
              <p className="mb-3">We do not sell, trade, or rent your personal information. We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Providers:</strong> Web3Forms (email delivery), hCaptcha (spam protection)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In the event of a merger or acquisition</li>
              </ul>
              <p className="mt-3">
                All third-party providers are GDPR-compliant and process data securely.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">6. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong>Quote/Estimate Requests:</strong> 12 months unless you become a customer</li>
                <li><strong>Customer Records:</strong> 7 years (UK tax and accounting requirements)</li>
                <li><strong>Email Communications:</strong> Until you unsubscribe or request deletion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">7. Your Rights (UK GDPR)</h2>
              <p className="mb-3">Under UK data protection law, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                <li><strong>Restriction:</strong> Limit how we use your data</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at <a href={`mailto:${BRAND.email}`} className="text-yellow-400 hover:underline">{BRAND.email}</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">8. Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>SSL/TLS encryption for data transmission</li>
                <li>hCaptcha spam protection to prevent unauthorized submissions</li>
                <li>Secure email delivery via Web3Forms</li>
                <li>Regular security updates and monitoring</li>
              </ul>
              <p className="mt-3">
                However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">9. Cookies</h2>
              <p>
                Our website uses minimal cookies for essential functionality only. We do not use tracking or advertising cookies. Essential cookies include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Session cookies for form functionality</li>
                <li>hCaptcha cookies for spam protection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">10. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites (e.g., WhatsApp). We are not responsible for the privacy practices of these websites. Please review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">11. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the "Last updated" date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">13. Contact Us</h2>
              <p className="mb-3">
                If you have questions about this Privacy Policy or wish to exercise your rights:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="font-semibold text-white">FixNow Mechanics</p>
                <p>Email: <a href={`mailto:${BRAND.email}`} className="text-yellow-400 hover:underline">{BRAND.email}</a></p>
                <p>Phone: <a href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`} className="text-yellow-400 hover:underline">{BRAND.phoneDisplay}</a></p>
                <p>Location: {BRAND.baseArea}</p>
              </div>
              <p className="mt-3 text-sm">
                You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">ico.org.uk</a>
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
