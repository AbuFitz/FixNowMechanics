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
 * Using free postcodes.io API
 */
export async function lookupPostcode(postcode) {
  try {
    const cleanPostcode = postcode.replace(/\s/g, '').toUpperCase();

    const response = await fetch(`https://api.postcodes.io/postcodes/${cleanPostcode}`);

    if (!response.ok) {
      throw new Error('Postcode not found');
    }

    const data = await response.json();

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

/**
 * Lookup addresses by postcode using OpenStreetMap Nominatim (Free & Open Source)
 * Completely free with no API key required
 * Fair use policy: Max 1 request per second
 */
export async function lookupAddresses(postcode) {
  try {
    const cleanPostcode = postcode.replace(/\s/g, '').toUpperCase();

    // First validate postcode using postcodes.io
    const postcodeResponse = await fetch(`https://api.postcodes.io/postcodes/${cleanPostcode}`);

    if (!postcodeResponse.ok) {
      throw new Error('Invalid postcode');
    }

    const postcodeData = await postcodeResponse.json();
    const result = postcodeData.result;
    const district = result.admin_district || 'Unknown';

    // Use OpenStreetMap Nominatim for address lookup (completely free)
    // This is more accurate than generating fake addresses
    try {
      const nominatimResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?postalcode=${cleanPostcode}&country=GB&format=json&limit=15&addressdetails=1`,
        {
          headers: {
            'User-Agent': 'FixNowMechanics/1.0' // Required by Nominatim
          }
        }
      );

      if (nominatimResponse.ok) {
        const nominatimData = await nominatimResponse.json();

        if (nominatimData && nominatimData.length > 0) {
          // Format addresses from Nominatim response
          const addresses = nominatimData
            .map(item => {
              const addr = item.address;
              // Build address from components
              const parts = [];

              if (addr.house_number) parts.push(addr.house_number);
              if (addr.road) parts.push(addr.road);
              if (addr.suburb || addr.neighbourhood) parts.push(addr.suburb || addr.neighbourhood);

              return parts.length > 0 ? parts.join(' ') : null;
            })
            .filter(addr => addr !== null)
            .slice(0, 15);

          if (addresses.length > 0) {
            return {
              success: true,
              addresses: addresses,
              postcode: cleanPostcode,
              source: 'openstreetmap'
            };
          }
        }
      }
    } catch (nominatimError) {
      console.warn('Nominatim lookup failed, using fallback:', nominatimError);
    }

    // Fallback: Generate sample addresses based on real street names for the area
    // This is better than nothing and uses real street names
    const postcodeArea = cleanPostcode.substring(0, 2).toUpperCase();
    const streetPatterns = {
      'HP2': ['Marlowes', 'Waterhouse Street', 'Bridge Street', 'Midland Road', 'St Johns Road', 'Alexandra Road'],
      'HP1': ['High Street', 'London Road', 'Queensway', 'Hillfield Road', 'Wood Lane End'],
      'HP3': ['St Albans Road', 'Bennetts End Road', 'Galley Hill', 'Chambersbury Lane'],
      'WD': ['High Street', 'Station Road', 'Church Street', 'Watford Road', 'Queens Road'],
      'AL': ['Victoria Street', 'Holywell Hill', 'St Peters Street', 'London Road', 'Hatfield Road'],
      'LU': ['George Street', 'Park Street', 'High Town Road', 'Chapel Street', 'Manchester Street'],
      'DEFAULT': ['High Street', 'Church Road', 'Station Road', 'Park Lane', 'Main Street', 'London Road']
    };

    const streets = streetPatterns[cleanPostcode.substring(0, 3)] || streetPatterns[postcodeArea] || streetPatterns['DEFAULT'];

    const addresses = [];
    streets.forEach((street, idx) => {
      for (let i = 1; i <= 2; i++) {
        const number = (idx * 8) + (i * 2);
        addresses.push(`${number} ${street}`);
      }
    });

    return {
      success: true,
      addresses: addresses.slice(0, 15),
      postcode: cleanPostcode,
      isExample: true,
      source: 'fallback'
    };

  } catch (error) {
    console.error('Address lookup error:', error);
    return {
      success: false,
      error: 'Unable to find addresses for this postcode. Please enter manually.',
      addresses: []
    };
  }
}

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
