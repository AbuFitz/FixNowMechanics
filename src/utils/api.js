// === API Utilities ===

/**
 * Lookup UK vehicle information by registration number
 * Using free DVLA API alternative or Gov.uk API
 */
export async function lookupVehicleByReg(registration) {
  try {
    // Remove spaces and convert to uppercase
    const reg = registration.replace(/\s/g, '').toUpperCase();

    // Using RapidAPI or similar service - you'll need to add your API key
    // For now, this is a placeholder that returns mock data
    // Replace with actual API endpoint

    // Example with Gov.UK API (requires API key)
    // const response = await fetch('https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'x-api-key': process.env.REACT_APP_DVLA_API_KEY
    //   },
    //   body: JSON.stringify({ registrationNumber: reg })
    // });

    // Mock response for development
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      success: true,
      data: {
        registration: reg,
        make: "Sample Make",
        model: "Sample Model",
        color: "Blue",
        year: "2019",
        fuelType: "Petrol",
        engineSize: "1.6L",
        transmission: "Manual",
        mot: {
          status: "Valid",
          expiry: "2025-12-31"
        }
      }
    };
  } catch (error) {
    console.error('Vehicle lookup error:', error);
    return {
      success: false,
      error: 'Unable to find vehicle information'
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
