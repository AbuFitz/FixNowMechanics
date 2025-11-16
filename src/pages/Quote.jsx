import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User, Phone, Mail, Car, MapPin, Calendar, Clock,
  Wrench, AlertCircle, CheckCircle2, Loader2
} from 'lucide-react';
import { BRAND, SERVICES, DIAGNOSTIC_PRICING } from '../constants/brand';
import { Section } from '../components/Layout';
import { Card, CardBody, CardHeader } from '../components/Card';
import { Input, TextArea, Select } from '../components/Input';
import { Button } from '../components/Button';
import { submitQuotation } from '../utils/api';

export default function Quote() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formData, setFormData] = useState({
    // Personal Info
    name: '',
    phone: '',
    email: '',
    // Vehicle Info
    vehicleReg: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    // Location
    address: '',
    postcode: '',
    // Service Details
    serviceType: '',
    description: '',
    // Scheduling
    preferredDate: '',
    preferredTime: '',
    urgency: 'normal',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.postcode.trim()) newErrors.postcode = 'Postcode is required';
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service';
    if (!formData.description.trim()) newErrors.description = 'Please describe the issue';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred date';
    if (!formData.preferredTime) newErrors.preferredTime = 'Please select a preferred time';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await submitQuotation(formData);

      if (result.success) {
        setSuccess(true);
        // Redirect to WhatsApp after a short delay
        setTimeout(() => {
          window.location.href = result.whatsappUrl;
        }, 2000);
      } else {
        setError(result.error || 'Failed to submit quotation');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Section className="py-16">
        <Card className="max-w-2xl mx-auto text-center p-12">
          <div
            className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ backgroundColor: `${BRAND.colors.primary}20` }}
          >
            <CheckCircle2 size={48} style={{ color: BRAND.colors.primary }} />
          </div>
          <h2 className="text-white text-3xl font-bold mb-4">
            Quotation Request Sent!
          </h2>
          <p className="text-white/80 text-lg mb-6">
            Thank you for your request. We'll redirect you to WhatsApp to complete the submission...
          </p>
          <div className="flex items-center justify-center gap-2 text-white/60">
            <Loader2 size={20} className="animate-spin" />
            <span>Redirecting...</span>
          </div>
        </Card>
      </Section>
    );
  }

  const today = new Date().toISOString().split('T')[0];

  return (
    <Section className="py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-white text-4xl font-bold mb-4">
            Request a Quote
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Fill in the details below and we'll get back to you with a personalized quote.
            The more information you provide, the more accurate your quote will be.
          </p>
          <div className="mt-4">
            <Card className="inline-block bg-blue-500/10 border-blue-500/30 p-3 max-w-xl">
              <p className="text-blue-300 text-sm">
                <strong>Diagnostic Visit:</strong> Typically £15–£25 depending on distance from Hemel Hempstead. 
                Final price confirmed based on your postcode.
              </p>
            </Card>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-2">
                <User size={24} style={{ color: BRAND.colors.primary }} />
                <h2 className="text-white text-xl font-bold">Personal Information</h2>
              </div>
            </CardHeader>
            <CardBody className="space-y-4">
              <Input
                label="Full Name *"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                icon={User}
                error={errors.name}
              />
              <div className="grid md:grid-cols-2 gap-4">
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
            </CardBody>
          </Card>

          {/* Vehicle Information */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Car size={24} style={{ color: BRAND.colors.primary }} />
                <h2 className="text-white text-xl font-bold">Vehicle Information</h2>
              </div>
              <p className="text-white/60 text-sm mt-1">
                Vehicle registration is optional but helps us prepare better
              </p>
            </CardHeader>
            <CardBody className="space-y-4">
              <Input
                label="Registration Number"
                name="vehicleReg"
                value={formData.vehicleReg}
                onChange={handleChange}
                placeholder="AB12 CDE"
                icon={Car}
                className="uppercase"
              />
              <div className="grid md:grid-cols-3 gap-4">
                <Input
                  label="Make"
                  name="vehicleMake"
                  value={formData.vehicleMake}
                  onChange={handleChange}
                  placeholder="e.g., Ford"
                />
                <Input
                  label="Model"
                  name="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={handleChange}
                  placeholder="e.g., Focus"
                />
                <Input
                  label="Year"
                  name="vehicleYear"
                  type="number"
                  value={formData.vehicleYear}
                  onChange={handleChange}
                  placeholder="e.g., 2019"
                  min="1980"
                  max={new Date().getFullYear() + 1}
                />
              </div>
            </CardBody>
          </Card>

          {/* Location */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-2">
                <MapPin size={24} style={{ color: BRAND.colors.primary }} />
                <h2 className="text-white text-xl font-bold">Service Location</h2>
              </div>
            </CardHeader>
            <CardBody className="space-y-4">
              <Input
                label="Address *"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street address"
                icon={MapPin}
                error={errors.address}
              />
              <Input
                label="Postcode *"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                placeholder="HP2 7DE"
                className="uppercase"
                error={errors.postcode}
              />
            </CardBody>
          </Card>

          {/* Service Details */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Wrench size={24} style={{ color: BRAND.colors.primary }} />
                <h2 className="text-white text-xl font-bold">Service Details</h2>
              </div>
            </CardHeader>
            <CardBody className="space-y-4">
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
                  <option key={service.slug} value={service.title}>
                    {service.title} - {service.price}
                  </option>
                ))}
                <option value="Other">Other / Multiple Services</option>
              </Select>

              <TextArea
                label="Describe the Issue or Service Needed *"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Please provide as much detail as possible about the issue, symptoms, or services you need..."
                rows={5}
                error={errors.description}
              />
            </CardBody>
          </Card>

          {/* Scheduling */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar size={24} style={{ color: BRAND.colors.primary }} />
                <h2 className="text-white text-xl font-bold">Preferred Schedule</h2>
              </div>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Preferred Date *"
                  name="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  min={today}
                  icon={Calendar}
                  error={errors.preferredDate}
                />
                <Input
                  label="Preferred Time *"
                  name="preferredTime"
                  type="time"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  icon={Clock}
                  error={errors.preferredTime}
                />
              </div>

              <Select
                label="Urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                icon={AlertCircle}
              >
                <option value="flexible">Flexible - No rush</option>
                <option value="normal">Normal - Within a week</option>
                <option value="urgent">Urgent - ASAP</option>
                <option value="emergency">Emergency - Vehicle not drivable</option>
              </Select>
            </CardBody>
          </Card>

          {/* Error Message */}
          {error && (
            <Card className="mb-6 bg-red-500/10 border-red-500/30">
              <CardBody className="flex items-center gap-3">
                <AlertCircle size={24} className="text-red-400 flex-shrink-0" />
                <p className="text-red-400">{error}</p>
              </CardBody>
            </Card>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              variant="primary"
              disabled={loading}
              className="w-full md:w-auto min-w-[300px]"
              icon={loading ? Loader2 : CheckCircle2}
            >
              {loading ? 'Submitting...' : 'Submit Quote Request'}
            </Button>
            <p className="text-white/60 text-sm mt-4">
              We'll review your request and get back to you shortly
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
}
