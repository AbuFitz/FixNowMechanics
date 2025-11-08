// === API Utilities ===

/**
 * Lookup UK vehicle information by registration number
 * Using UK Vehicle Data API (free alternative to DVLA VES)
 */
export async function lookupVehicleByReg(registration) {
  try {
    // Remove spaces and convert to uppercase
    const reg = registration.replace(/\s/g, '').toUpperCase();

    // Try UK Vehicle Data API (free API)
    // Alternative: https://ukvehicledata.co.uk/
    const API_KEY = '6I2RdjROti7BRZ9GcrvJ184FDrGraeqn3JBmhz3H';

    // Try with ukvehicledata.co.uk format
    const response = await fetch(`https://uk1.ukvehicledata.co.uk/api/datapackage/VehicleData?v=2&api_nullitems=1&auth_apikey=${API_KEY}&key_VRM=${reg}`, {
      method: 'GET',
    });

    if (!response.ok) {
      // If that fails, try with DVLA format
      const dvlaResponse = await fetch(`https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY
        },
        body: JSON.stringify({
          registrationNumber: reg
        })
      });

      if (!dvlaResponse.ok) {
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
    }

    const data = await response.json();

    if (data.Response && data.Response.StatusCode === 'Success') {
      const vehicleData = data.Response.DataItems.VehicleRegistration;
      return {
        success: true,
        data: {
          registration: vehicleData.Vrm || reg,
          make: vehicleData.Make || 'Unknown',
          model: vehicleData.Model || 'Unknown',
          color: vehicleData.Colour || 'Unknown',
          year: vehicleData.YearOfManufacture || 'Unknown',
          fuelType: vehicleData.FuelType || 'Unknown',
          engineSize: vehicleData.EngineCapacity || 'Unknown',
          transmission: vehicleData.Transmission || 'Unknown',
          mot: {
            status: vehicleData.MotStatus || 'Unknown',
            expiry: vehicleData.MotExpiryDate || 'Unknown'
          }
        }
      };
    }

    throw new Error('Vehicle not found');

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

    // Hemel Hempstead coordinates
    const hemelLat = 51.753;
    const hemelLon = -0.472;

    // Calculate distance from Hemel Hempstead
    const distance = calculateDistance(
      hemelLat,
      hemelLon,
      data.result.latitude,
      data.result.longitude
    );

    // Convert miles to km
    const distanceKm = distance * 1.60934;
    const withinRadius = distanceKm <= 10;

    console.log('📍 Postcode lookup:', cleanPostcode);
    console.log('📏 Distance from Hemel Hempstead:', distanceKm.toFixed(2), 'km');
    console.log('✅ Within 10km radius:', withinRadius);

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
        distance: distanceKm,
        withinRadius: withinRadius,
        calloutFee: withinRadius ? 0 : 25
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
