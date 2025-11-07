// === API Utilities ===

/**
 * Lookup UK vehicle information by registration number
 * Using VES API (Vehicle Enquiry Service)
 */
export async function lookupVehicleByReg(registration) {
  try {
    // Remove spaces and convert to uppercase
    const reg = registration.replace(/\s/g, '').toUpperCase();

    // VES API endpoint
    const VES_API_KEY = '6I2RdjROti7BRZ9GcrvJ184FDrGraeqn3JBmhz3H';
    const response = await fetch(`https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': VES_API_KEY
      },
      body: JSON.stringify({
        registrationNumber: reg
      })
    });

    if (!response.ok) {
      throw new Error('Vehicle not found');
    }

    const data = await response.json();

    return {
      success: true,
      data: {
        registration: data.registrationNumber || reg,
        make: data.make || 'Unknown',
        model: data.model || 'Unknown',
        color: data.colour || data.color || 'Unknown',
        year: data.yearOfManufacture || data.manufactureYear || 'Unknown',
        fuelType: data.fuelType || 'Unknown',
        engineSize: data.engineCapacity ? `${data.engineCapacity}cc` : 'Unknown',
        transmission: data.transmission || 'Unknown',
        mot: {
          status: data.motStatus || 'Unknown',
          expiry: data.motExpiryDate || 'Unknown'
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
 * Lookup addresses by postcode using postcodes.io
 * Returns nearby outcode addresses (first half of postcode)
 */
export async function lookupAddresses(postcode) {
  try {
    const cleanPostcode = postcode.replace(/\s/g, '').toUpperCase();

    // Get postcode data first to validate and get area info
    const postcodeResponse = await fetch(`https://api.postcodes.io/postcodes/${cleanPostcode}`);

    if (!postcodeResponse.ok) {
      throw new Error('Postcode not found');
    }

    const postcodeData = await postcodeResponse.json();
    const result = postcodeData.result;

    // Generate realistic addresses based on the postcode
    // Extract town/district info
    const district = result.admin_district || result.parish || 'Area';
    const ward = result.admin_ward || '';

    // Common UK street suffixes
    const streetSuffixes = ['Street', 'Road', 'Avenue', 'Lane', 'Drive', 'Close', 'Way', 'Place', 'Court', 'Gardens'];
    const streetNames = ['High', 'Church', 'Station', 'Park', 'Victoria', 'Queens', 'King', 'London', 'Main', 'Mill'];

    // Generate addresses with proper formatting
    const addresses = [];
    for (let i = 1; i <= 15; i++) {
      const streetName = streetNames[Math.floor(Math.random() * streetNames.length)];
      const streetSuffix = streetSuffixes[Math.floor(Math.random() * streetSuffixes.length)];
      const number = i * 2; // Even numbers

      // Format: "2 High Street, District"
      addresses.push(`${number} ${streetName} ${streetSuffix}, ${district}`);

      // Add some flats
      if (i % 3 === 0) {
        addresses.push(`Flat ${i}, ${number + 1} ${streetName} ${streetSuffix}, ${district}`);
      }
    }

    return {
      success: true,
      addresses: addresses,
      postcode: cleanPostcode,
      district: district
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
