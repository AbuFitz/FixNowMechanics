import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Car, MapPin, Search, Loader2, CheckCircle2, AlertCircle,
  Phone, MessageCircle, ArrowRight, Info
} from 'lucide-react';
import { BRAND, SERVICES } from '../constants/brand';
import { Section } from '../components/Layout';
import { Card, CardBody, CardHeader } from '../components/Card';
import { Input, Select } from '../components/Input';
import { Button, LinkButton } from '../components/Button';
import { lookupVehicleByReg, lookupPostcode, calculateDistance } from '../utils/api';

// Hemel Hempstead base coordinates
const BASE_LAT = 51.7519;
const BASE_LON = -0.4723;

export default function QuickEstimate() {
  // Form state
  const [vehicleReg, setVehicleReg] = useState('');
  const [postcode, setPostcode] = useState('');
  const [selectedService, setSelectedService] = useState('');

  // Lookup state
  const [vehicleData, setVehicleData] = useState(null);
  const [postcodeData, setPostcodeData] = useState(null);
  const [vehicleLoading, setVehicleLoading] = useState(false);
  const [postcodeLoading, setPostcodeLoading] = useState(false);
  const [vehicleError, setVehicleError] = useState(null);
  const [postcodeError, setPostcodeError] = useState(null);

  // Estimate state
  const [estimate, setEstimate] = useState(null);

  const handleVehicleLookup = async () => {
    if (!vehicleReg.trim()) {
      setVehicleError('Please enter a registration number');
      return;
    }

    setVehicleLoading(true);
    setVehicleError(null);
    setVehicleData(null);

    const result = await lookupVehicleByReg(vehicleReg);

    if (result.success) {
      setVehicleData(result.data);
    } else {
      setVehicleError(result.error);
    }

    setVehicleLoading(false);
  };

  const handlePostcodeLookup = async () => {
    if (!postcode.trim()) {
      setPostcodeError('Please enter a postcode');
      return;
    }

    setPostcodeLoading(true);
    setPostcodeError(null);
    setPostcodeData(null);

    const result = await lookupPostcode(postcode);

    if (result.success) {
      setPostcodeData(result.data);
    } else {
      setPostcodeError(result.error);
    }

    setPostcodeLoading(false);
  };

  const calculateEstimate = () => {
    if (!selectedService) {
      alert('Please select a service');
      return;
    }

    const service = SERVICES.find(s => s.slug === selectedService);
    let basePrice = 0;
    let priceNote = '';

    // Parse price from service
    if (service.price.includes('£')) {
      const match = service.price.match(/£(\d+)/);
      if (match) {
        basePrice = parseInt(match[1]);
      }
    }

    // Calculate travel cost if postcode is available
    let travelCost = 0;
    let distance = 0;
    if (postcodeData) {
      distance = calculateDistance(
        BASE_LAT,
        BASE_LON,
        postcodeData.latitude,
        postcodeData.longitude
      );

      if (distance > 15) {
        travelCost = Math.round((distance - 15) * 2); // £2 per mile over 15 miles
      }
    }

    // Callout fee
    const calloutFee = 28;

    // Total
    let total = basePrice + travelCost;
    const totalWithCallout = total + calloutFee;

    if (service.price === 'POA') {
      priceNote = 'Price on application - contact us for a quote';
      total = null;
    }

    setEstimate({
      service: service.title,
      basePrice,
      travelCost,
      distance: Math.round(distance * 10) / 10,
      calloutFee,
      total,
      totalWithCallout,
      priceNote,
      vehicleInfo: vehicleData,
      location: postcodeData,
    });
  };

  return (
    <Section className="py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-white text-4xl font-bold mb-4">
            Quick Estimate
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Get an instant estimate by entering your vehicle registration and postcode.
            For a detailed quote, use our{' '}
            <Link
              to="/quote"
              className="font-semibold hover:underline"
              style={{ color: BRAND.colors.primary }}
            >
              full quotation form
            </Link>
            .
          </p>
        </div>

        {/* Vehicle Lookup */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Car size={24} style={{ color: BRAND.colors.primary }} />
                <h2 className="text-white text-xl font-bold">Vehicle Information</h2>
              </div>
              {vehicleData && (
                <CheckCircle2 size={20} style={{ color: BRAND.colors.primary }} />
              )}
            </div>
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="flex gap-3">
              <Input
                placeholder="Enter registration (e.g., AB12 CDE)"
                value={vehicleReg}
                onChange={(e) => {
                  setVehicleReg(e.target.value.toUpperCase());
                  setVehicleError(null);
                }}
                icon={Car}
                error={vehicleError}
                className="uppercase"
                containerClassName="flex-1"
              />
              <Button
                onClick={handleVehicleLookup}
                disabled={vehicleLoading || !vehicleReg.trim()}
                icon={vehicleLoading ? Loader2 : Search}
                className="whitespace-nowrap"
              >
                {vehicleLoading ? 'Looking up...' : 'Lookup'}
              </Button>
            </div>

            {vehicleData && (
              <Card className="bg-white/10 border-white/20">
                <CardBody className="space-y-2">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-white/60">Registration:</span>
                      <p className="text-white font-semibold">{vehicleData.registration}</p>
                    </div>
                    <div>
                      <span className="text-white/60">Make:</span>
                      <p className="text-white font-semibold">{vehicleData.make}</p>
                    </div>
                    <div>
                      <span className="text-white/60">Model:</span>
                      <p className="text-white font-semibold">{vehicleData.model}</p>
                    </div>
                    <div>
                      <span className="text-white/60">Year:</span>
                      <p className="text-white font-semibold">{vehicleData.year}</p>
                    </div>
                    <div>
                      <span className="text-white/60">Fuel Type:</span>
                      <p className="text-white font-semibold">{vehicleData.fuelType}</p>
                    </div>
                    <div>
                      <span className="text-white/60">Color:</span>
                      <p className="text-white font-semibold">{vehicleData.color}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            )}

            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardBody className="flex items-start gap-3">
                <Info size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-blue-300 text-sm">
                  <strong>Note:</strong> Vehicle lookup uses the DVLA database. The data shown here
                  is for reference only. Please verify vehicle details when booking.
                </p>
              </CardBody>
            </Card>
          </CardBody>
        </Card>

        {/* Postcode Lookup */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin size={24} style={{ color: BRAND.colors.primary }} />
                <h2 className="text-white text-xl font-bold">Service Location</h2>
              </div>
              {postcodeData && (
                <CheckCircle2 size={20} style={{ color: BRAND.colors.primary }} />
              )}
            </div>
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="flex gap-3">
              <Input
                placeholder="Enter postcode (e.g., HP2 7DE)"
                value={postcode}
                onChange={(e) => {
                  setPostcode(e.target.value.toUpperCase());
                  setPostcodeError(null);
                }}
                icon={MapPin}
                error={postcodeError}
                className="uppercase"
                containerClassName="flex-1"
              />
              <Button
                onClick={handlePostcodeLookup}
                disabled={postcodeLoading || !postcode.trim()}
                icon={postcodeLoading ? Loader2 : Search}
                className="whitespace-nowrap"
              >
                {postcodeLoading ? 'Looking up...' : 'Lookup'}
              </Button>
            </div>

            {postcodeData && (
              <Card className="bg-white/10 border-white/20">
                <CardBody className="space-y-2">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-white/60">Postcode:</span>
                      <p className="text-white font-semibold">{postcodeData.postcode}</p>
                    </div>
                    <div>
                      <span className="text-white/60">District:</span>
                      <p className="text-white font-semibold">{postcodeData.district}</p>
                    </div>
                    <div>
                      <span className="text-white/60">Region:</span>
                      <p className="text-white font-semibold">{postcodeData.region}</p>
                    </div>
                    <div>
                      <span className="text-white/60">Country:</span>
                      <p className="text-white font-semibold">{postcodeData.country}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            )}
          </CardBody>
        </Card>

        {/* Service Selection */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Search size={24} style={{ color: BRAND.colors.primary }} />
              <h2 className="text-white text-xl font-bold">Select Service</h2>
            </div>
          </CardHeader>
          <CardBody>
            <Select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              <option value="">Choose a service...</option>
              {SERVICES.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.title} - {service.price}
                </option>
              ))}
            </Select>
          </CardBody>
        </Card>

        {/* Calculate Button */}
        <div className="text-center mb-8">
          <Button
            onClick={calculateEstimate}
            variant="primary"
            disabled={!selectedService}
            icon={ArrowRight}
            className="min-w-[250px]"
          >
            Calculate Estimate
          </Button>
        </div>

        {/* Estimate Result */}
        {estimate && (
          <Card className="bg-gradient-to-br from-white/10 to-white/5 border-2" style={{ borderColor: BRAND.colors.primary }}>
            <CardHeader>
              <h2 className="text-white text-2xl font-bold text-center">
                Your Estimate
              </h2>
            </CardHeader>
            <CardBody className="space-y-6">
              {estimate.priceNote ? (
                <div className="text-center py-8">
                  <p className="text-white/80 text-lg mb-6">{estimate.priceNote}</p>
                  <LinkButton
                    variant="primary"
                    icon={MessageCircle}
                    href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${encodeURIComponent(`Hi FixNow, I need a quote for: ${estimate.service}`)}`}
                  >
                    Contact for Quote
                  </LinkButton>
                </div>
              ) : (
                <>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-white/80">Service:</span>
                      <span className="text-white font-semibold">{estimate.service}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-white/80">Base Price:</span>
                      <span className="text-white font-semibold">£{estimate.basePrice}</span>
                    </div>
                    {estimate.distance > 0 && (
                      <>
                        <div className="flex justify-between items-center py-2 border-b border-white/10">
                          <span className="text-white/80">Distance from base:</span>
                          <span className="text-white font-semibold">{estimate.distance} miles</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/10">
                          <span className="text-white/80">Travel Cost:</span>
                          <span className="text-white font-semibold">
                            {estimate.travelCost > 0 ? `£${estimate.travelCost}` : 'Free (within 15 miles)'}
                          </span>
                        </div>
                      </>
                    )}
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-white/80">Callout Fee (refundable):</span>
                      <span className="text-white font-semibold">£{estimate.calloutFee}</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-t-2 border-white/20">
                      <span className="text-white font-bold text-lg">Estimated Total:</span>
                      <span className="font-bold text-2xl" style={{ color: BRAND.colors.primary }}>
                        £{estimate.total}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 text-sm">
                      <span className="text-white/60">Total with callout fee:</span>
                      <span className="text-white/80">£{estimate.totalWithCallout}</span>
                    </div>
                  </div>

                  <Card className="bg-yellow-500/10 border-yellow-500/30">
                    <CardBody className="flex items-start gap-3">
                      <Info size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div className="text-yellow-300 text-sm space-y-1">
                        <p><strong>Please Note:</strong></p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>This is an estimate only. Final price may vary based on actual work required.</li>
                          <li>£28 callout fee is refunded if repair is accepted.</li>
                          <li>Parts not included in price (we can source or you can supply).</li>
                        </ul>
                      </div>
                    </CardBody>
                  </Card>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <LinkButton
                      variant="primary"
                      icon={MessageCircle}
                      href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${encodeURIComponent(`Hi FixNow, I'd like to book: ${estimate.service}. Estimated cost: £${estimate.total}`)}`}
                      className="flex-1"
                    >
                      Book via WhatsApp
                    </LinkButton>
                    <LinkButton
                      variant="secondary"
                      icon={Phone}
                      href={`tel:${BRAND.phoneDisplay.replace(/\s/g, '')}`}
                      className="flex-1"
                    >
                      Call to Confirm
                    </LinkButton>
                  </div>
                </>
              )}
            </CardBody>
          </Card>
        )}

        {/* Need More Detailed Quote */}
        <Card className="mt-8 bg-white/5">
          <CardBody className="text-center">
            <p className="text-white/80 mb-4">
              Need a more detailed quote or have multiple services?
            </p>
            <Link to="/quote">
              <Button variant="secondary" icon={ArrowRight}>
                Request Full Quotation
              </Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    </Section>
  );
}
