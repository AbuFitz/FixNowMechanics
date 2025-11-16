# Postcode System Test Plan

This document provides comprehensive testing procedures for the postcode lookup system, specifically focusing on **Hemel Hempstead detection** and **callout fee calculation**.

---

## Critical Requirement

**The system MUST correctly identify whether a postcode is inside or outside Hemel Hempstead to determine if the £25 callout fee applies.**

---

## How It Works

### Hemel Hempstead Detection Logic

**File:** `src/utils/api.js` and `src/pages/GetEstimate.jsx`

**Detection Method:**
```javascript
const district = postcodeResult.data.district || '';
const isOutside = !district.toLowerCase().includes('hemel hempstead');
```

The system uses the `admin_district` field from postcodes.io API to determine location.

### Callout Fee Rules
- **Inside Hemel Hempstead:** No callout fee (£0)
- **Outside Hemel Hempstead:** £25 callout fee
- **Fee is refunded** if customer accepts the repair quote

---

## Test Cases

### Test 1: Hemel Hempstead Postcodes (No Callout Fee)

These postcodes should **NOT** trigger the callout fee:

| Postcode | Area | Expected District | Callout Fee |
|----------|------|-------------------|-------------|
| HP1 1AA | Hemel Town Centre | Dacorum (Hemel Hempstead) | £0 |
| HP2 4UA | Hemel Industrial | Dacorum (Hemel Hempstead) | £0 |
| HP2 7DE | Base Location | Dacorum (Hemel Hempstead) | £0 |
| HP3 8BP | Bennetts End | Dacorum (Hemel Hempstead) | £0 |
| HP3 9AA | Boxmoor | Dacorum (Hemel Hempstead) | £0 |

**Testing Steps:**
1. Go to `/estimate`
2. Fill in Steps 1-2
3. Enter one of the above postcodes
4. Click "Lookup"
5. **Expected:** Green "✓ Postcode Verified" card appears
6. **Expected:** NO yellow "⚠️ Callout Fee Applies" warning
7. Complete the form and submit
8. **Expected:** Email shows "No callout fee (within Hemel Hempstead)"

### Test 2: Outside Hemel Hempstead (£25 Callout Fee)

These postcodes should trigger the £25 callout fee:

| Postcode | Location | Expected District | Callout Fee |
|----------|----------|-------------------|-------------|
| WD3 1RH | Watford | Three Rivers | £25 |
| AL2 1AB | St Albans | St Albans | £25 |
| LU1 1AA | Luton | Luton | £25 |
| HP4 1AA | Berkhamsted | Dacorum (NOT Hemel) | £25 |
| HP5 1AA | Chesham | Chiltern | £25 |

**Testing Steps:**
1. Go to `/estimate`
2. Fill in Steps 1-2
3. Enter one of the above postcodes
4. Click "Lookup"
5. **Expected:** Green "✓ Postcode Verified" card appears
6. **Expected:** Yellow "⚠️ Callout Fee Applies" warning appears
7. **Expected:** Warning says "£25 callout fee will be added"
8. **Expected:** Warning mentions refund policy
9. Complete the form and submit
10. **Expected:** Email shows "Includes £25 callout fee (outside Hemel Hempstead)"

### Test 3: Edge Cases - Dacorum District (Careful!)

**IMPORTANT:** Not all Dacorum postcodes are Hemel Hempstead!

| Postcode | Location | Is Hemel? | Callout Fee |
|----------|----------|-----------|-------------|
| HP1-HP3 | Hemel Hempstead | ✅ YES | £0 |
| HP4 | Berkhamsted (Dacorum) | ❌ NO | £25 |
| HP23 | Tring (Dacorum) | ❌ NO | £25 |

**Note:** The current system checks for "hemel hempstead" in the district name, not just "Dacorum". This correctly handles Berkhamsted and Tring.

### Test 4: Invalid Postcodes

| Test Input | Expected Result |
|------------|-----------------|
| INVALID1 | Error: "Unable to find postcode information" |
| ABC 123 | Error: "Unable to find postcode information" |
| (empty) | Error: "Please enter a postcode" |

### Test 5: Address Lookup Integration

**Test with OpenStreetMap Nominatim:**

1. Enter postcode: `HP2 7DE`
2. Click "Lookup"
3. **Expected:** Dropdown shows real addresses from OpenStreetMap
4. **Expected:** If OSM returns addresses, no orange warning about sample addresses
5. **Expected:** If OSM fails, fallback addresses appear with orange warning

**Test Fallback Addresses:**

The system has real street names for Hemel areas:
- HP1: High Street, London Road, Queensway, etc.
- HP2: Marlowes, Waterhouse Street, Bridge Street, etc.
- HP3: St Albans Road, Bennetts End Road, etc.

---

## Distance Calculation (Secondary Check)

**File:** `src/utils/api.js` - `calculateDistance()` function

The system also calculates distance from base (HP2 7DE):
- Uses Haversine formula
- Calculates miles between two coordinates
- **Primary check:** District name matching
- **Secondary info:** Distance display in email

**Test:**
1. Check email after submission
2. Email should show: "Distance from base: X.X miles"
3. Hemel postcodes: typically 0-3 miles
4. Outside areas: 5+ miles

---

## Manual Testing Checklist

### Pre-Flight Checks
- [ ] Server is running (`npm run dev`)
- [ ] Navigate to `/estimate`
- [ ] Check browser console for errors

### Test Execution

**Hemel Hempstead (No Fee):**
- [ ] Test HP1 1AA
- [ ] Test HP2 7DE
- [ ] Test HP3 9AA
- [ ] Verify NO yellow warning appears
- [ ] Submit and check email says "No callout fee"

**Outside Hemel (£25 Fee):**
- [ ] Test WD3 1RH (Watford)
- [ ] Test AL2 1AB (St Albans)
- [ ] Test LU1 1AA (Luton)
- [ ] Verify yellow warning appears for each
- [ ] Submit and check email says "£25 callout fee"

**Edge Cases:**
- [ ] Test HP4 1AA (Berkhamsted - should charge fee)
- [ ] Test invalid postcode
- [ ] Test empty postcode field

**Address Lookup:**
- [ ] Verify addresses populate in dropdown
- [ ] Check if OSM or fallback is used (console logs)
- [ ] Verify addresses are relevant to the area

---

## Troubleshooting

### Issue: All postcodes show callout fee

**Possible Causes:**
1. postcodes.io API is down
2. District name format changed
3. Network connectivity issue

**Solution:**
- Check browser console for API errors
- Verify postcodes.io is accessible: https://api.postcodes.io/postcodes/HP27DE
- Check network tab for failed requests

### Issue: No addresses in dropdown

**Possible Causes:**
1. OpenStreetMap Nominatim is rate-limited (max 1 req/sec)
2. Network error
3. Fallback should still work

**Solution:**
- Check console for "Nominatim lookup failed" message
- Verify fallback addresses appear
- Orange warning should display if using fallback

### Issue: Wrong district detected

**Possible Causes:**
1. Postcode data has changed
2. API returning unexpected format

**Solution:**
- Test with postcodes.io directly: `https://api.postcodes.io/postcodes/[POSTCODE]`
- Check the `admin_district` field in response
- May need to update detection logic

---

## API Dependencies

### postcodes.io (Postcode Validation)
- **Status:** ✅ Free, no API key required
- **Endpoint:** `https://api.postcodes.io/postcodes/{postcode}`
- **Rate Limit:** No official limit
- **Returns:** District, region, latitude, longitude
- **Critical for:** Hemel Hempstead detection

### OpenStreetMap Nominatim (Address Lookup)
- **Status:** ✅ Free, no API key required
- **Endpoint:** `https://nominatim.openstreetmap.org/search`
- **Rate Limit:** 1 request per second
- **Returns:** Real addresses from OSM data
- **Fallback:** Area-specific street names if OSM fails

---

## Verification Commands

### Check postcodes.io is working:
```bash
curl "https://api.postcodes.io/postcodes/HP27DE"
```

**Expected Response:**
```json
{
  "status": 200,
  "result": {
    "postcode": "HP2 7DE",
    "admin_district": "Dacorum",
    "region": "East of England",
    "latitude": 51.747...,
    "longitude": -0.467...
  }
}
```

### Check Nominatim is working:
```bash
curl -H "User-Agent: FixNowMechanics/1.0" \
  "https://nominatim.openstreetmap.org/search?postalcode=HP27DE&country=GB&format=json&limit=5"
```

---

## Expected Behavior Summary

| Scenario | District Contains | Yellow Warning | Callout Fee | Email Text |
|----------|------------------|----------------|-------------|------------|
| HP1/HP2/HP3 | "hemel hempstead" | ❌ NO | £0 | "No callout fee (within Hemel Hempstead)" |
| Other HP postcodes | "dacorum" (not hemel) | ✅ YES | £25 | "Includes £25 callout fee (outside Hemel Hempstead)" |
| WD/AL/LU postcodes | Other districts | ✅ YES | £25 | "Includes £25 callout fee (outside Hemel Hempstead)" |

---

## Legal Compliance

The postcode system directly affects pricing and must be accurate for:
1. **Consumer Rights Act 2015** - Accurate pricing
2. **Business Transparency** - Clear fee communication
3. **Customer Trust** - Correct estimates

**All tests must pass before production deployment.**

---

## Next Steps After Testing

If any tests fail:
1. Document the failure in detail
2. Check API responses in browser console
3. Verify postcodes.io data for that postcode
4. Update detection logic if needed
5. Re-test all cases

If all tests pass:
- System is production-ready
- Callout fee logic is working correctly
- Customer communication is accurate
