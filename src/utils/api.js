// === API Utilities ===

/**
 * Lookup UK vehicle information by registration number
 * Using DVLA VES API
 */
export async function lookupVehicleByReg(registration) {
  try {
    // Remove spaces and convert to uppercase
    const reg = registration.replace(/\s/g, '').toUpperCase();

    // Get DVLA API key from environment variable
    const DVLA_API_KEY = import.meta.env.VITE_DVLA_API_KEY;
    
    if (!DVLA_API_KEY) {
      console.error('DVLA API key not configured');
      throw new Error('API configuration missing');
    }

    // Call DVLA VES API
    const dvlaResponse = await fetch(`https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': DVLA_API_KEY
      },
      body: JSON.stringify({
        registrationNumber: reg
      })
    });

    if (!dvlaResponse.ok) {
      const errorData = await dvlaResponse.json().catch(() => ({}));
      console.error('DVLA API error:', errorData);
      throw new Error('Vehicle not found');
    }

    const dvlaData = await dvlaResponse.json();
    
    return {
      success: true,
      data: {
        registration: dvlaData.registrationNumber || reg,
        make: dvlaData.make || 'Unknown',
        model: dvlaData.model || 'Unknown',
        color: dvlaData.colour || 'Unknown',
        year: dvlaData.yearOfManufacture || 'Unknown',
        fuelType: dvlaData.fuelType || 'Unknown',
        engineSize: dvlaData.engineCapacity ? `${dvlaData.engineCapacity}cc` : 'Unknown',
        transmission: 'Unknown',
        mot: {
          status: dvlaData.motStatus || 'Unknown',
          expiry: dvlaData.motExpiryDate || 'Unknown'
        }
      }
    };

  } catch (error) {
    console.error('Vehicle lookup error:', error);
    return {
      success: false,
      error: 'Unable to find vehicle information. Please enter details manually.'
    };
  }
}

/**
 * Lookup UK postcode information
 * Using free postcodes.io API - no API key needed
 */
export async function lookupPostcode(postcode) {
  try {
    const cleanPostcode = postcode.replace(/\s/g, '').toUpperCase();

    const response = await fetch(`https://api.postcodes.io/postcodes/${cleanPostcode}`);

    if (!response.ok) {
      throw new Error('Postcode not found');
    }

    const data = await response.json();

    // Hemel Hempstead coordinates (HP2 7DE - exact base location)
    const hemelLat = 51.762313;
    const hemelLon = -0.439382;

    // Calculate distance from Hemel Hempstead in miles
    const distanceMiles = calculateDistance(
      hemelLat,
      hemelLon,
      data.result.latitude,
      data.result.longitude
    );

    // Pricing bands based on distance
    let diagnosticVisitFee = 15; // Default: within 10 miles
    let priceRange = '£15';
    
    if (distanceMiles > 20) {
      diagnosticVisitFee = 25;
      priceRange = 'from £25';
    } else if (distanceMiles > 10) {
      diagnosticVisitFee = 20;
      priceRange = '£20';
    }

    // Check if outside service area (45 miles maximum)
    const MAX_SERVICE_RADIUS = 45;
    const withinServiceArea = distanceMiles <= MAX_SERVICE_RADIUS;

    console.log('📍 Postcode lookup:', cleanPostcode);
    console.log('📏 Distance from Hemel Hempstead:', distanceMiles.toFixed(1), 'miles');
    console.log('💰 Diagnostic visit fee:', `£${diagnosticVisitFee}`);
    console.log('✅ Within service area:', withinServiceArea);

    return {
      success: true,
      data: {
        postcode: data.result.postcode,
        region: data.result.region,
        district: data.result.admin_district,
        ward: data.result.admin_ward,
        country: data.result.country,
        latitude: data.result.latitude,
        longitude: data.result.longitude,
        distanceMiles: distanceMiles,
        diagnosticVisitFee: diagnosticVisitFee,
        priceRange: priceRange,
        withinServiceArea: withinServiceArea,
        // Legacy support
        distance: distanceMiles * 1.60934, // km for backwards compatibility
        withinRadius: distanceMiles <= 10,
        calloutFee: distanceMiles <= 10 ? 0 : 25
      }
    };
  } catch (error) {
    console.error('Postcode lookup error:', error);
    return {
      success: false,
      error: 'Unable to find postcode information'
    };
  }
}

// Address lookup removed - users will enter addresses manually after postcode validation

/**
 * Calculate distance between two postcodes
 */
export function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 3959; // Radius of Earth in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;
  return Math.round(distance * 10) / 10; // Round to 1 decimal
}

/**
 * Submit quotation request
 * This would typically send to a backend or email service
 */
export async function submitQuotation(data) {
  try {
    // In production, send to backend API or email service
    // For now, we'll format as a WhatsApp message
    const message = formatQuotationForWhatsApp(data);

    return {
      success: true,
      whatsappUrl: `https://wa.me/447930991598?text=${encodeURIComponent(message)}`
    };
  } catch (error) {
    console.error('Quotation submission error:', error);
    return {
      success: false,
      error: 'Unable to submit quotation request'
    };
  }
}

function formatQuotationForWhatsApp(data) {
  return `
📋 QUOTATION REQUEST

👤 Customer Details:
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}

🚗 Vehicle Information:
${data.vehicleReg ? `Registration: ${data.vehicleReg}` : ''}
Make: ${data.vehicleMake || 'Not specified'}
Model: ${data.vehicleModel || 'Not specified'}
Year: ${data.vehicleYear || 'Not specified'}

📍 Location:
Address: ${data.address}
Postcode: ${data.postcode}

🔧 Service Required:
${data.serviceType}

📝 Issue Description:
${data.description}

⏰ Preferred Time:
${data.preferredDate} at ${data.preferredTime}

🚨 Urgency: ${data.urgency}
  `.trim();
}
