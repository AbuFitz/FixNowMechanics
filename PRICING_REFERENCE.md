# 🎯 PRICING QUICK REFERENCE

## Diagnostic Visit Fees (Distance-Based)

| Distance from Hemel Hempstead | Diagnostic Visit Fee | Price Display |
|-------------------------------|---------------------|---------------|
| **0-10 miles**                | £15                 | £15           |
| **10-20 miles**               | £20                 | £20           |
| **20-45 miles**               | £25                 | from £25      |
| **Over 45 miles**             | ❌ Not covered      | Outside area  |

---

## Key Policies

### Labour Deduction
- **£10** of diagnostic fee deducted from labour if repair proceeds
- Fee never refunded as cash
- Applies even if customer declines repair

### Service Radius
- **Maximum:** 45 miles from Hemel Hempstead (HP2 7DE)
- **Base coordinates:** 51.762313, -0.439382 (Exact HP2 7DE location)
- Automatically validated via postcode lookup

### Advanced Diagnostics
- Deeper/multi-system diagnostics quoted separately
- Usually **from £40** depending on complexity
- Not included in basic diagnostic visit

---

## Where to Update Pricing

### Main Configuration
📁 `src/constants/brand.js`
```javascript
export const DIAGNOSTIC_PRICING = {
  within10Miles: 15,        // 0-10 mile fee
  within20Miles: 20,        // 10-20 mile fee
  over20Miles: 25,          // 20+ mile fee
  labourDeduction: 10,      // Labour deduction
  maxServiceRadius: 45,     // Max service area
};
```

### Distance Logic
📁 `src/utils/api.js` - Function: `lookupPostcode()`
```javascript
if (distanceMiles > 20) {
  diagnosticVisitFee = 25;
} else if (distanceMiles > 10) {
  diagnosticVisitFee = 20;
} else {
  diagnosticVisitFee = 15;
}
```

---

## Service Prices

| Service | Labour Price | Notes |
|---------|--------------|-------|
| Diagnostic Visit | £15-£25 | Distance-based |
| Brake Pads/Discs | from £80 | Parts extra |
| Battery Replacement | from £60 | Battery extra |
| Oil & Filter Service | from £70 | Oil type varies |
| Suspension/Coilovers | POA | Pre-quoted |

---

## Customer Communication Templates

### Diagnostic Visit Explanation
> "Our diagnostic visit typically costs between £15 and £25 depending on your distance from Hemel Hempstead. This includes travel to you, a fault scan and initial checks. The exact price is confirmed after you enter your postcode in the booking form."

### Labour Deduction Explanation
> "If we carry out paid repair work during the same visit, £10 of your diagnostic fee is deducted from the labour, so you're not paying twice for our time."

### No Repair Explanation
> "The diagnostic visit fee still applies to cover our time, travel and professional checks, even if no repair is carried out."

### Outside Service Area
> "Unfortunately, this location is outside our 45-mile service radius. Please contact us to discuss alternatives."

---

## Example Pricing Scenarios

### Scenario 1: Local HP2 Customer
- **Postcode:** HP2 5UZ
- **Distance:** 1.2 miles
- **Diagnostic Fee:** £15
- **Brake pads needed:** Labour £80 + parts
- **Customer pays:** £15 diagnostic + £70 labour (£80 - £10) + parts

### Scenario 2: St Albans Customer
- **Postcode:** AL1 1RJ
- **Distance:** 12.8 miles
- **Diagnostic Fee:** £20
- **No repair (declined quote)**
- **Customer pays:** £20 diagnostic only

### Scenario 3: Luton Customer
- **Postcode:** LU1 5AL
- **Distance:** 23.4 miles
- **Diagnostic Fee:** £25
- **Oil service needed:** Labour £70 + oil
- **Customer pays:** £25 diagnostic + £60 labour (£70 - £10) + oil

### Scenario 4: Outside Area
- **Postcode:** MK40 1AA (Milton Keynes)
- **Distance:** 47.2 miles
- **Status:** ❌ Outside 45-mile service area
- **Action:** Form blocks submission, suggests contact

---

## Testing Postcodes

### Within 10 miles (£15)
- HP1 1AA - Hemel Hempstead Town Centre (~2 miles)
- HP2 4TF - Leverstock Green (~3 miles)
- HP3 9RX - Boxmoor (~2 miles)
- AL2 3TA - St Albans (~4.6 miles)
- LU1 3JG - Luton (~8.1 miles)

### 10-20 miles (£20)
- WD5 0HZ - Abbots Langley (~11 miles)
- AL10 9AB - Hatfield (~14 miles)
- UB9 6LX - Denham (~17 miles)

### 20-45 miles (£25)
- WD6 1JY - Borehamwood (~21 miles)
- NW1 (Camden, London) (~20.5 miles)
- MK1 1AA - Milton Keynes (~23.6 miles)
- UB1 1AA - Southall (~24 miles)

### Outside Area (Blocked)
- OX1 1AA - Oxford (~51 miles)
- SG1 1XX - Stevenage (~28 miles, but check actual)
- RG1 1AA - Reading (~52 miles)

---

## DVLA API Configuration

### Environment Variable
```bash
VITE_DVLA_API_KEY=EcSpuACCcm7R9KwUfQ63dIFlR5VqIk4ntK4eVC90
```

### API Endpoint
```
POST https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles
```

### Headers
```javascript
{
  'Content-Type': 'application/json',
  'x-api-key': import.meta.env.VITE_DVLA_API_KEY
}
```

---

**Last Updated:** November 16, 2025  
**Version:** 1.0
