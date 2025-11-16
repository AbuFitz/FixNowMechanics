import React, { useState, useEffect, useRef } from 'react';
import {
  User, Phone, Mail, Car, MapPin, Wrench, CheckCircle2, AlertCircle,
  Loader2, ArrowRight, ArrowLeft, Search, Home, MessageCircle
} from 'lucide-react';
import { BRAND, SERVICES, CALLOUT_NOTE, DIAGNOSTIC_PRICING } from '../constants/brand';
import { Section } from '../components/Layout';
import { Card, CardBody } from '../components/Card';
import { Input, TextArea, Select } from '../components/Input';
import { Button } from '../components/Button';
import { lookupVehicleByReg, lookupPostcode } from '../utils/api';

const STEPS = [
  { id: 1, title: 'Your Details', icon: User },
  { id: 2, title: 'Vehicle Info', icon: Car },
  { id: 3, title: 'Location', icon: MapPin },
  { id: 4, title: 'Service Needed', icon: Wrench },
  { id: 5, title: 'Review & Submit', icon: CheckCircle2 },
];

const BASE_LAT = BRAND.baseCityCoords.lat;
const BASE_LON = BRAND.baseCityCoords.lng;

// Calculate distance between two coordinates using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function GetEstimate() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [turnstileToken, setTurnstileToken] = useState(null);

  // Form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleReg: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    postcode: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    serviceType: '',
    description: '',
  });

  // Lookup states
  const [vehicleData, setVehicleData] = useState(null);
  const [postcodeData, setPostcodeData] = useState(null);

  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA' && !submitting) {
        e.preventDefault();
        handleNext();
      }
    };

    document.addEventListener('keypress', handleKeyPress);
    return () => document.removeEventListener('keypress', handleKeyPress);
  }, [currentStep, formData, submitting]);

  // Cloudflare Turnstile setup
  useEffect(() => {
    if (currentStep === 5 && window.turnstile) {
      const container = document.getElementById('turnstile-container');
      if (container && !container.hasChildNodes()) {
        window.turnstile.render('#turnstile-container', {
          sitekey: '0x4AAAAAAB_5sfSOLoB_T_T4',
          theme: 'dark',
          callback: (token) => {
            setTurnstileToken(token);
            console.log('Turnstile verified');
          },
        });
      }
    }
  }, [currentStep]);

  // Scroll to top when success page is shown
  useEffect(() => {
    if (success) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [success]);

  const handleVehicleLookup = async () => {
    if (!formData.vehicleReg.trim()) return;

    setLoading(true);
    const result = await lookupVehicleByReg(formData.vehicleReg);

    if (result.success) {
      setVehicleData(result.data);
      setFormData(prev => ({
        ...prev,
        vehicleMake: result.data.make,
        vehicleModel: result.data.model,
        vehicleYear: result.data.year,
      }));
    }
    setLoading(false);
  };

  const handlePostcodeLookup = async () => {
    if (!formData.postcode.trim()) {
      setErrors(prev => ({ ...prev, postcode: 'Please enter a postcode' }));
      return;
    }

    setLoading(true);

    // Lookup postcode using free postcodes.io API
    const postcodeResult = await lookupPostcode(formData.postcode);

    if (postcodeResult.success) {
      setPostcodeData(postcodeResult.data);
      // Auto-fill city from postcode data
      setFormData(prev => ({
        ...prev,
        city: postcodeResult.data.district || postcodeResult.data.region,
      }));
    } else {
      setErrors(prev => ({ ...prev, postcode: postcodeResult.error }));
    }
    setLoading(false);
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email is invalid';
        }
        break;
      case 2:
        // Vehicle info is optional
        break;
      case 3:
        if (!formData.postcode.trim()) newErrors.postcode = 'Postcode is required';
        if (!formData.addressLine1.trim()) newErrors.addressLine1 = 'Address is required';
        break;
      case 4:
        if (!formData.serviceType) newErrors.serviceType = 'Please select a service';
        if (!formData.description.trim()) newErrors.description = 'Please describe the issue';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      // Check if postcode is outside service area before allowing to proceed from step 3
      if (currentStep === 3 && postcodeData && !postcodeData.withinServiceArea) {
        setErrors(prev => ({ 
          ...prev, 
          postcode: `This postcode is ${postcodeData.distanceMiles.toFixed(1)} miles away. We only cover up to ${DIAGNOSTIC_PRICING.maxServiceRadius} miles from Hemel Hempstead. Please contact us to discuss.` 
        }));
        return;
      }

      if (currentStep < STEPS.length) {
        setCurrentStep(currentStep + 1);
        // Delay scroll to prevent keyboard issues on mobile
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Delay scroll to prevent keyboard issues on mobile
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);

    try {
      // Calculate estimate
      let distance = 0;
      let diagnosticVisitFee = 0;
      let basePrice = 0;
      const service = SERVICES.find(s => s.slug === formData.serviceType);

      if (service && service.price.includes('£')) {
        const match = service.price.match(/£(\d+)/);
        if (match) basePrice = parseInt(match[1]);
      }

      if (postcodeData) {
        distance = postcodeData.distanceMiles;
        diagnosticVisitFee = postcodeData.diagnosticVisitFee;
      }

      const estimate = basePrice + diagnosticVisitFee;

      // Prepare email content
      const emailContent = `
NEW QUOTE REQUEST - FixNow Mechanics

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 CUSTOMER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚗 VEHICLE INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formData.vehicleReg ? `Registration: ${formData.vehicleReg}` : ''}
Make: ${formData.vehicleMake || 'Not provided'}
Model: ${formData.vehicleModel || 'Not provided'}
Year: ${formData.vehicleYear || 'Not provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 LOCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Address: ${formData.addressLine1}
${formData.addressLine2 ? formData.addressLine2 : ''}
City: ${formData.city}
Postcode: ${formData.postcode}
${distance > 0 ? `Distance from base: ${distance.toFixed(1)} miles` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔧 SERVICE REQUIRED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Service: ${service ? service.title : formData.serviceType}

Issue Description:
${formData.description}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 QUOTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Base Price: £${basePrice}
${diagnosticVisitFee > 0 ? `Diagnostic Visit Fee: £${diagnosticVisitFee} (${postcodeData.priceRange})` : 'Diagnostic Visit Fee: £0'}
${diagnosticVisitFee > 0 ? `Note: £${DIAGNOSTIC_PRICING.labourDeduction} of diagnostic fee deducted from labour if repair proceeds` : ''}
Quote Total: £${estimate}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted: ${new Date().toLocaleString('en-GB')}
      `.trim();

      // Send to business email via Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '2682cfaa-cf56-45ba-b0b8-f9317e983777',
          subject: `New Quote Request from ${formData.name}`,
          from_name: 'FixNow Mechanics Website',
          replyto: formData.email,
          email: BRAND.email,
          message: emailContent,
          botcheck: '',
        }),
      });

      // Send confirmation email to customer
      const confirmationContent = `
Hi ${formData.name},

Thank you for your quote request! We've received your information and will get back to you shortly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 YOUR REQUEST SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Service: ${service ? service.title : formData.serviceType}
${basePrice > 0 ? `Estimated Quote: £${estimate}` : 'Price: To be quoted'}
${diagnosticVisitFee > 0 ? `Includes £${diagnosticVisitFee} diagnostic visit fee (${postcodeData.priceRange})` : 'Diagnostic visit fee applies based on distance'}
${diagnosticVisitFee > 0 ? `Note: £${DIAGNOSTIC_PRICING.labourDeduction} deducted from labour if repair proceeds` : ''}

Location: ${formData.addressLine1}, ${formData.postcode}
${distance > 0 ? `Distance: ${distance.toFixed(1)} miles from our base` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We'll review your request and contact you at:
📞 ${formData.phone}
📧 ${formData.email}

Our availability:
Mon-Fri: 7pm-10pm
Saturday: 8am-10pm
Sunday: 8am-8pm

Questions? Call us: ${BRAND.phoneDisplay}

Best regards,
FixNow Mechanics Team
${BRAND.tagline}
      `.trim();

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '2682cfaa-cf56-45ba-b0b8-f9317e983777',
          subject: 'Your FixNow Mechanics Quote Request',
          from_name: 'FixNow Mechanics',
          replyto: BRAND.email,
          email: formData.email,
          message: confirmationContent,
          botcheck: '',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        // Also prepare WhatsApp link as backup
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'event': 'quote_submitted',
          'quote_value': estimate
        });
      } else {
        console.error('API returned error:', result);
        throw new Error(result.message || 'Failed to send email');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError(`Failed to submit: ${err.message}. Please try WhatsApp or call us directly.`);
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <Section className="py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2" style={{ borderColor: BRAND.colors.primary }}>
            <CardBody className="p-12">
              {/* Simple Success Icon */}
              <div className="flex justify-center mb-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: BRAND.colors.primary }}
                >
                  <CheckCircle2 size={48} style={{ color: BRAND.colors.dark }} strokeWidth={2.5} />
                </div>
              </div>

              {/* Success Message */}
              <div className="text-center space-y-6">
                <h2
                  className="text-3xl font-bold"
                  style={{ color: BRAND.colors.primary }}
                >
                  Thank You, {formData.name}
                </h2>

                <p className="text-white/90 text-lg">
                  Your quote request has been received successfully.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-left space-y-3">
                  <p className="text-white/80 text-sm">
                    <strong className="text-white">Confirmation sent to:</strong> {formData.email}
                  </p>
                  <p className="text-white/80 text-sm">
                    <strong className="text-white">We'll contact you at:</strong> {formData.phone}
                  </p>
                  <p className="text-white/80 text-sm">
                    <strong className="text-white">Response time:</strong> Within 2 hours
                  </p>
                </div>

                <p className="text-white/70 text-sm">
                  We'll review your request and provide a detailed quote via phone or WhatsApp.
                </p>

                {/* Quick Actions */}
                <div className="pt-4 space-y-3">
                  <p className="text-white/60 text-sm">Need immediate assistance?</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 text-white font-medium transition-all hover:bg-white/5"
                      style={{ borderColor: BRAND.colors.primary }}
                    >
                      <Phone size={18} />
                      Call {BRAND.phoneDisplay}
                    </a>
                    <a
                      href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${encodeURIComponent(`Hi FixNow! I just submitted a quote request (${formData.name})`)}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all hover:opacity-90"
                      style={{ backgroundColor: '#25D366', color: 'white' }}
                    >
                      <MessageCircle size={18} />
                      WhatsApp Us
                    </a>
                  </div>
                </div>

                {/* Return home */}
                <div className="pt-6 border-t border-white/10">
                  <a
                    href="/"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    ← Return to homepage
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </Section>
    );
  }

  const StepIcon = STEPS[currentStep - 1].icon;

  return (
    <Section className="py-6 lg:py-16">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-8">
          <h1 className="text-white text-2xl lg:text-4xl font-bold mb-2 lg:mb-3">
            Get Your Free Quote
          </h1>
          <p className="text-white/70 text-sm lg:text-lg">
            Complete the form below and we'll send you a detailed quote
          </p>
        </div>

        {/* Step Indicator */}
        <div className="mb-6 lg:mb-8">
          {/* Mobile: Simplified Step Indicator */}
          <div className="lg:hidden mb-4">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: BRAND.colors.primary,
                  color: BRAND.colors.dark
                }}
              >
                <StepIcon size={20} />
              </div>
            </div>
            <div className="text-center">
              <p className="text-white/60 text-xs mb-1">Step {currentStep} of {STEPS.length}</p>
              <p className="text-white font-semibold text-base">{STEPS[currentStep - 1].title}</p>
            </div>
            {/* Progress bar */}
            <div className="mt-3 w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(currentStep / STEPS.length) * 100}%`,
                  backgroundColor: BRAND.colors.primary
                }}
              />
            </div>
          </div>

          {/* Desktop: Full Step Indicator */}
          <div className="hidden lg:flex items-center justify-between mb-2">
            {STEPS.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentStep >= step.id
                        ? 'scale-110'
                        : 'scale-100 opacity-50'
                    }`}
                    style={{
                      backgroundColor: currentStep >= step.id ? BRAND.colors.primary : '#333',
                      color: currentStep >= step.id ? BRAND.colors.dark : '#666',
                    }}
                  >
                    <step.icon size={20} />
                  </div>
                  <span className={`text-xs mt-2 text-center ${currentStep >= step.id ? 'text-white font-semibold' : 'text-white/40'}`}>
                    {step.title}
                  </span>
                </div>
                {index < STEPS.length - 1 && (
                  <div className="flex-1 h-1 mx-2 rounded-full bg-white/10 relative overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
                      style={{
                        width: currentStep > step.id ? '100%' : '0%',
                        backgroundColor: BRAND.colors.primary,
                      }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <Card className="p-3 sm:p-6 lg:p-8">
          <div className="mb-4 lg:mb-6">
            <div className="flex items-center gap-2 lg:gap-3 mb-2">
              <div
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${BRAND.colors.primary}20` }}
              >
                <StepIcon size={18} style={{ color: BRAND.colors.primary }} className="lg:w-5 lg:h-5" />
              </div>
              <h2 className="text-white text-lg lg:text-2xl font-bold">
                {STEPS[currentStep - 1].title}
              </h2>
            </div>
          </div>

          <form ref={formRef} className="space-y-4 lg:space-y-6">
            {/* Step 1: Your Details */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-5 duration-300">
                <Input
                  label="Full Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  icon={User}
                  error={errors.name}
                />
                <Input
                  label="Phone Number *"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="07XXX XXXXXX"
                  icon={Phone}
                  error={errors.phone}
                />
                <Input
                  label="Email Address *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  icon={Mail}
                  error={errors.email}
                />
              </div>
            )}

            {/* Step 2: Vehicle Info */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-5 duration-300">
                <div className="flex gap-3">
                  <Input
                    label="Registration Number (Optional)"
                    name="vehicleReg"
                    value={formData.vehicleReg}
                    onChange={handleChange}
                    placeholder="AB12 CDE"
                    icon={Car}
                    className="uppercase"
                    containerClassName="flex-1"
                  />
                  <div className="flex items-end">
                    <Button
                      type="button"
                      onClick={handleVehicleLookup}
                      disabled={loading || !formData.vehicleReg.trim()}
                      icon={loading ? Loader2 : Search}
                    >
                      Lookup
                    </Button>
                  </div>
                </div>

                {vehicleData && (
                  <Card className="bg-white/10 border-white/20 p-4">
                    <p className="text-white/60 text-sm mb-2">Vehicle Found:</p>
                    <p className="text-white font-semibold">
                      {vehicleData.make} {vehicleData.model} ({vehicleData.year})
                    </p>
                  </Card>
                )}

                <div className="grid grid-cols-3 gap-4">
                  <Input
                    label="Make"
                    name="vehicleMake"
                    value={formData.vehicleMake}
                    onChange={handleChange}
                    placeholder="Ford"
                  />
                  <Input
                    label="Model"
                    name="vehicleModel"
                    value={formData.vehicleModel}
                    onChange={handleChange}
                    placeholder="Focus"
                  />
                  <Input
                    label="Year"
                    name="vehicleYear"
                    type="number"
                    value={formData.vehicleYear}
                    onChange={handleChange}
                    placeholder="2019"
                    min="1980"
                    max={new Date().getFullYear() + 1}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Location */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-5 duration-300">
                <div className="flex gap-3">
                  <Input
                    label="Postcode *"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    placeholder="HP2 7DE"
                    icon={MapPin}
                    className="uppercase"
                    containerClassName="flex-1"
                    error={errors.postcode}
                  />
                  <div className="flex items-end">
                    <Button
                      type="button"
                      onClick={handlePostcodeLookup}
                      disabled={loading || !formData.postcode.trim()}
                      icon={loading ? Loader2 : Search}
                    >
                      Lookup
                    </Button>
                  </div>
                </div>

                {postcodeData && (
                  <>
                    {postcodeData.withinServiceArea ? (
                      <>
                        <Card className="bg-green-500/10 border-green-500/30 p-4">
                          <p className="text-green-400 font-semibold mb-1">
                            ✓ Postcode Verified
                          </p>
                          <p className="text-white/80 text-sm">
                            {postcodeData.district}, {postcodeData.region}
                          </p>
                          <p className="text-white/60 text-xs mt-1">
                            Distance from Hemel Hempstead: {postcodeData.distanceMiles.toFixed(1)} miles
                          </p>
                        </Card>

                        <Card className="bg-blue-500/10 border-blue-500/30 p-4">
                          <p className="text-blue-300 text-sm mb-2">
                            <CheckCircle2 size={16} className="inline mr-2" />
                            <strong>Diagnostic Visit Fee: {postcodeData.priceRange}</strong>
                          </p>
                          <p className="text-white/70 text-xs">
                            {postcodeData.distanceMiles <= 10 ? (
                              "Within 10 miles of Hemel Hempstead"
                            ) : postcodeData.distanceMiles <= 20 ? (
                              "10–20 miles from Hemel Hempstead"
                            ) : (
                              "Over 20 miles from Hemel Hempstead"
                            )}
                          </p>
                          <p className="text-white/60 text-xs mt-2">
                            If we carry out paid repair work during the visit, £{DIAGNOSTIC_PRICING.labourDeduction} of your diagnostic fee is deducted from the labour.
                          </p>
                        </Card>
                      </>
                    ) : (
                      <Card className="bg-red-500/10 border-red-500/30 p-4">
                        <p className="text-red-400 font-semibold mb-2">
                          ⚠ Outside Service Area
                        </p>
                        <p className="text-white/80 text-sm mb-2">
                          {postcodeData.district}, {postcodeData.region}
                        </p>
                        <p className="text-white/70 text-xs mb-2">
                          Distance: {postcodeData.distanceMiles.toFixed(1)} miles (we cover up to {DIAGNOSTIC_PRICING.maxServiceRadius} miles from Hemel Hempstead)
                        </p>
                        <p className="text-red-300 text-sm font-medium">
                          Unfortunately, this location is outside our {DIAGNOSTIC_PRICING.maxServiceRadius}-mile service radius. Please contact us to discuss alternatives.
                        </p>
                      </Card>
                    )}
                  </>
                )}

                <Input
                  label="Address Line 1 *"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleChange}
                  placeholder="123 High Street"
                  icon={Home}
                  error={errors.addressLine1}
                />
                <Input
                  label="Address Line 2"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleChange}
                  placeholder="Apartment, suite, etc. (optional)"
                />
                <Input
                  label="City *"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Hemel Hempstead"
                  icon={MapPin}
                  error={errors.city}
                />
              </div>
            )}

            {/* Step 4: Service */}
            {currentStep === 4 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-5 duration-300">
                {/* Diagnostic Visit Info */}
                <Card className="bg-blue-500/10 border-blue-500/30 p-4">
                  <p className="text-blue-300 text-sm mb-2">
                    <strong>About Our Diagnostic Visit:</strong>
                  </p>
                  <p className="text-white/80 text-xs mb-2">
                    {postcodeData ? (
                      <>Your diagnostic visit fee is <strong>{postcodeData.priceRange}</strong> based on your location ({postcodeData.distanceMiles.toFixed(1)} miles from Hemel Hempstead).</>
                    ) : (
                      <>Diagnostic visit typically costs £15–£25 depending on your distance from Hemel Hempstead.</>
                    )}
                  </p>
                  <p className="text-white/70 text-xs">
                    This covers travel, initial checks, and professional advice. If we carry out paid repair work during the same visit, £{DIAGNOSTIC_PRICING.labourDeduction} of your diagnostic fee is deducted from the labour.
                  </p>
                </Card>

                {/* Service Scope Info */}
                <Card className="bg-white/5 border-white/10 p-4">
                  <p className="text-white/80 text-sm">
                    <strong>Our Specialization:</strong> We focus on major mechanical repairs including diagnostics, braking systems, suspension, battery, and engine servicing. For other repairs, please describe below or contact us via WhatsApp.
                  </p>
                </Card>

                <Select
                  label="Service Type *"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  icon={Wrench}
                  error={errors.serviceType}
                >
                  <option value="">Select a service...</option>
                  {SERVICES.map((service) => (
                    <option key={service.slug} value={service.slug}>
                      {service.title} - {service.price}
                    </option>
                  ))}
                  <option value="other">Other / Multiple Services</option>
                </Select>

                <TextArea
                  label="Describe the Issue *"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Please provide details about the issue, symptoms, or services needed. If bringing your own parts, please mention that here."
                  rows={6}
                  error={errors.description}
                />
              </div>
            )}

            {/* Step 5: Review */}
            {currentStep === 5 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-5 duration-300">
                <div className="space-y-4">
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="text-white font-semibold mb-2">Contact Details</h3>
                    <p className="text-white/80 text-sm">{formData.name}</p>
                    <p className="text-white/80 text-sm">{formData.phone}</p>
                    <p className="text-white/80 text-sm">{formData.email}</p>
                  </div>

                  {(formData.vehicleMake || formData.vehicleModel) && (
                    <div className="border-b border-white/10 pb-4">
                      <h3 className="text-white font-semibold mb-2">Vehicle</h3>
                      <p className="text-white/80 text-sm">
                        {formData.vehicleMake} {formData.vehicleModel} {formData.vehicleYear}
                        {formData.vehicleReg && ` (${formData.vehicleReg})`}
                      </p>
                    </div>
                  )}

                  <div className="border-b border-white/10 pb-4">
                    <h3 className="text-white font-semibold mb-2">Location</h3>
                    <p className="text-white/80 text-sm">{formData.addressLine1}</p>
                    {formData.addressLine2 && <p className="text-white/80 text-sm">{formData.addressLine2}</p>}
                    <p className="text-white/80 text-sm">{formData.city}, {formData.postcode}</p>
                  </div>

                  <div className="border-b border-white/10 pb-4">
                    <h3 className="text-white font-semibold mb-2">Service Required</h3>
                    <p className="text-white/80 text-sm">
                      {SERVICES.find(s => s.slug === formData.serviceType)?.title || formData.serviceType}
                    </p>
                    <p className="text-white/60 text-sm mt-2">{formData.description}</p>
                  </div>
                </div>

                {/* Cloudflare Turnstile - Invisible spam protection */}
                <div className="flex justify-center">
                  <div id="turnstile-container"></div>
                </div>

                {error && (
                  <Card className="bg-red-500/10 border-red-500/30 p-4">
                    <div className="flex items-center gap-3">
                      <AlertCircle size={20} className="text-red-400" />
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  </Card>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-3 pt-6 border-t border-white/10">
              {currentStep > 1 && (
                <Button
                  type="button"
                  onClick={handlePrevious}
                  variant="ghost"
                  icon={ArrowLeft}
                  disabled={submitting}
                  className="flex-1"
                >
                  Back
                </Button>
              )}
              <Button
                type="button"
                onClick={handleNext}
                variant="primary"
                icon={currentStep === STEPS.length ? (submitting ? Loader2 : CheckCircle2) : ArrowRight}
                disabled={submitting}
                className="flex-1"
              >
                {submitting ? 'Submitting...' : currentStep === STEPS.length ? 'Submit Request' : 'Continue'}
              </Button>
            </div>

            <p className="text-white/40 text-xs text-center mt-4">
              Press Enter to continue or use the buttons above
            </p>
          </form>
        </Card>
      </div>
    </Section>
  );
}
