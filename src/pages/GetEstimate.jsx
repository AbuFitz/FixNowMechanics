import React, { useState, useEffect, useRef } from 'react';
import {
  User, Phone, Mail, Car, MapPin, Wrench, CheckCircle2, AlertCircle,
  Loader2, ArrowRight, ArrowLeft, Search, Home
} from 'lucide-react';
import { BRAND, SERVICES, CALLOUT_NOTE } from '../constants/brand';
import { Section } from '../components/Layout';
import { Card, CardBody } from '../components/Card';
import { Input, TextArea, Select } from '../components/Input';
import { Button } from '../components/Button';
import { lookupVehicleByReg, lookupPostcode, lookupAddresses, calculateDistance } from '../utils/api';

const STEPS = [
  { id: 1, title: 'Your Details', icon: User },
  { id: 2, title: 'Vehicle Info', icon: Car },
  { id: 3, title: 'Location', icon: MapPin },
  { id: 4, title: 'Service Needed', icon: Wrench },
  { id: 5, title: 'Review & Submit', icon: CheckCircle2 },
];

const BASE_LAT = BRAND.baseCityCoords.lat;
const BASE_LON = BRAND.baseCityCoords.lng;

export default function GetEstimate() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

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
    urgency: 'normal',
  });

  // Lookup states
  const [vehicleData, setVehicleData] = useState(null);
  const [postcodeData, setPostcodeData] = useState(null);
  const [addressSuggestions, setAddressSuggestions] = useState([]);

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

    // Lookup postcode for validation and location data
    const postcodeResult = await lookupPostcode(formData.postcode);

    if (postcodeResult.success) {
      setPostcodeData(postcodeResult.data);
      setFormData(prev => ({
        ...prev,
        city: postcodeResult.data.district || postcodeResult.data.region,
      }));

      // Fetch address suggestions
      const addressResult = await lookupAddresses(formData.postcode);
      if (addressResult.success) {
        setAddressSuggestions(addressResult.addresses);
      }
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
      if (currentStep < STEPS.length) {
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);

    try {
      // Calculate estimate
      let distance = 0;
      let travelCost = 0;
      let basePrice = 0;
      const service = SERVICES.find(s => s.slug === formData.serviceType);

      if (service && service.price.includes('£')) {
        const match = service.price.match(/£(\d+)/);
        if (match) basePrice = parseInt(match[1]);
      }

      if (postcodeData) {
        distance = calculateDistance(BASE_LAT, BASE_LON, postcodeData.latitude, postcodeData.longitude);
        // Calculate if outside Hemel Hempstead
        const isOutsideHemel = distance > 5; // 5 mile radius
        if (isOutsideHemel) {
          travelCost = 15; // £15 callout fee
        }
      }

      const estimate = basePrice + travelCost;

      // Prepare email content
      const emailContent = `
NEW ESTIMATE REQUEST - FixNow Mechanics

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
Urgency: ${formData.urgency}

Issue Description:
${formData.description}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 ESTIMATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Base Price: £${basePrice}
${travelCost > 0 ? `Callout Fee (outside Hemel): £${travelCost}` : 'Callout Fee: £0 (within Hemel Hempstead)'}
Estimated Total: £${estimate}

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
          subject: `New Estimate Request from ${formData.name}`,
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

Thank you for your estimate request! We've received your information and will get back to you shortly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 YOUR REQUEST SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Service: ${service ? service.title : formData.serviceType}
${basePrice > 0 ? `Estimated Cost: £${estimate}` : 'Price: To be quoted'}
${travelCost > 0 ? `Includes £${travelCost} callout fee (outside Hemel Hempstead)` : 'No callout fee (within Hemel Hempstead)'}

Location: ${formData.addressLine1}, ${formData.postcode}
Urgency: ${formData.urgency}

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
          subject: 'Your FixNow Mechanics Estimate Request',
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
          'event': 'estimate_submitted',
          'estimate_value': estimate
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to submit. Please try WhatsApp or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <Section className="py-16">
        <div className="max-w-3xl mx-auto">
          {/* Artistic Success Card */}
          <div className="relative">
            {/* Animated background glow */}
            <div
              className="absolute inset-0 blur-3xl opacity-30 animate-pulse"
              style={{ backgroundColor: BRAND.colors.primary }}
            />

            <Card className="relative overflow-hidden border-2" style={{ borderColor: BRAND.colors.primary }}>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-full blur-3xl" />

              <CardBody className="p-12 relative z-10">
                {/* Success Icon with animation */}
                <div className="relative w-32 h-32 mx-auto mb-8">
                  {/* Pulsing rings */}
                  <div
                    className="absolute inset-0 rounded-full animate-ping opacity-20"
                    style={{ backgroundColor: BRAND.colors.primary }}
                  />
                  <div
                    className="absolute inset-4 rounded-full animate-pulse opacity-30"
                    style={{ backgroundColor: BRAND.colors.primary }}
                  />
                  {/* Main icon */}
                  <div
                    className="absolute inset-0 rounded-full flex items-center justify-center transform transition-all duration-500 hover:scale-110"
                    style={{
                      backgroundColor: BRAND.colors.primary,
                      boxShadow: `0 0 60px ${BRAND.colors.primary}80`
                    }}
                  >
                    <CheckCircle2 size={64} style={{ color: BRAND.colors.dark }} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Success Message */}
                <div className="text-center space-y-6 mb-8">
                  <div className="space-y-2">
                    <h2
                      className="text-4xl md:text-5xl font-extrabold tracking-tight"
                      style={{ color: BRAND.colors.primary }}
                    >
                      All Set! 🎉
                    </h2>
                    <p className="text-white text-2xl font-semibold">
                      Your estimate is on its way
                    </p>
                  </div>

                  <div className="max-w-xl mx-auto space-y-4">
                    <p className="text-white/90 text-lg leading-relaxed">
                      Thanks <strong>{formData.name}</strong>! We've received your request and sent a confirmation to <strong className="text-yellow-400">{formData.email}</strong>
                    </p>

                    {/* What happens next */}
                    <Card className="bg-white/5 border-white/10 p-6 text-left">
                      <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <Wrench size={20} style={{ color: BRAND.colors.primary }} />
                        What happens next?
                      </h3>
                      <ul className="space-y-2 text-white/80 text-sm">
                        <li className="flex items-start gap-2">
                          <span style={{ color: BRAND.colors.primary }}>1.</span>
                          <span>We'll review your request within 2 hours</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span style={{ color: BRAND.colors.primary }}>2.</span>
                          <span>Get a detailed quote via phone or WhatsApp</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span style={{ color: BRAND.colors.primary }}>3.</span>
                          <span>Schedule a convenient time for service</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span style={{ color: BRAND.colors.primary }}>4.</span>
                          <span>We come to you and fix it right!</span>
                        </li>
                      </ul>
                    </Card>

                    {/* Contact info */}
                    <div className="text-white/70 text-sm">
                      We'll contact you at: <strong className="text-white">{formData.phone}</strong>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <p className="text-white/60 text-sm text-center">
                    Need to speak with us right now?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                      className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 text-white font-semibold transition-all hover:scale-105"
                      style={{ borderColor: BRAND.colors.primary }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/10 to-yellow-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      <Phone size={20} />
                      Call {BRAND.phoneDisplay}
                    </a>
                    <a
                      href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${encodeURIComponent(`Hi FixNow! I just submitted an estimate request (${formData.name})`)}`}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg"
                      style={{ backgroundColor: '#25D366', color: 'white' }}
                    >
                      <MessageCircle size={20} />
                      Message on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Return home link */}
                <div className="mt-8 text-center">
                  <a
                    href="/"
                    className="text-white/60 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
                  >
                    ← Return to homepage
                  </a>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </Section>
    );
  }

  const StepIcon = STEPS[currentStep - 1].icon;

  return (
    <Section className="py-16">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-white text-4xl font-bold mb-3">
            Get Your Estimate
          </h1>
          <p className="text-white/70 text-lg">
            Complete the form below and we'll send you a detailed estimate
          </p>
        </div>

        {/* Step Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
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
        <Card className="p-8">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${BRAND.colors.primary}20` }}
              >
                <StepIcon size={20} style={{ color: BRAND.colors.primary }} />
              </div>
              <h2 className="text-white text-2xl font-bold">
                {STEPS[currentStep - 1].title}
              </h2>
            </div>
          </div>

          <form ref={formRef} className="space-y-6">
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
                  autoFocus
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
                  <Card className="bg-green-500/10 border-green-500/30 p-4">
                    <p className="text-green-400 font-semibold mb-1">
                      ✓ Postcode Verified
                    </p>
                    <p className="text-white/80 text-sm">
                      {postcodeData.district}, {postcodeData.region}
                    </p>
                  </Card>
                )}

                {/* Address Selection Dropdown */}
                {addressSuggestions.length > 0 && (
                  <Select
                    label="Select Your Address *"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                    icon={Home}
                    error={errors.addressLine1}
                  >
                    <option value="">Choose your address...</option>
                    {addressSuggestions.map((address, index) => (
                      <option key={index} value={address}>
                        {address}
                      </option>
                    ))}
                    <option value="__manual__">Enter address manually</option>
                  </Select>
                )}

                {/* Manual Address Input (shown if no suggestions or manual selected) */}
                {(addressSuggestions.length === 0 || formData.addressLine1 === '__manual__') && (
                  <Input
                    label="Address Line 1 *"
                    name="addressLine1"
                    value={formData.addressLine1 === '__manual__' ? '' : formData.addressLine1}
                    onChange={handleChange}
                    placeholder="123 High Street"
                    icon={Home}
                    error={errors.addressLine1}
                  />
                )}
                <Input
                  label="Address Line 2"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleChange}
                  placeholder="Apartment, suite, etc. (optional)"
                />
                <Input
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Hemel Hempstead"
                />

                <Card className="bg-blue-500/10 border-blue-500/30 p-4">
                  <p className="text-blue-300 text-sm">
                    <strong>Note:</strong> {CALLOUT_NOTE}
                  </p>
                </Card>
              </div>
            )}

            {/* Step 4: Service */}
            {currentStep === 4 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-5 duration-300">
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
                  placeholder="Please provide details about the issue, symptoms, or services needed..."
                  rows={6}
                  error={errors.description}
                />

                <Select
                  label="Urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                >
                  <option value="flexible">Flexible - No rush</option>
                  <option value="normal">Normal - Within a week</option>
                  <option value="urgent">Urgent - ASAP</option>
                  <option value="emergency">Emergency - Vehicle not drivable</option>
                </Select>
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
