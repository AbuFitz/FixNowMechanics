# API Setup Guide

This guide shows you exactly where to add your API keys for the FixNow Mechanics website.

---

## 🚗 Vehicle Registration Lookup API

### Location
**File:** `src/utils/api.js`
**Line:** 14

### Current Code
```javascript
const API_KEY = '6I2RdjROti7BRZ9GcrvJ184FDrGraeqn3JBmhz3H';
```

### How to Update
1. Open `src/utils/api.js`
2. Find line 14 (search for `const API_KEY`)
3. Replace the existing key with your new DVLA VES API key

### Example
```javascript
// Replace this:
const API_KEY = '6I2RdjROti7BRZ9GcrvJ184FDrGraeqn3JBmhz3H';

// With your new key:
const API_KEY = 'YOUR_NEW_DVLA_KEY_HERE';
```

### Supported APIs
The code supports multiple vehicle lookup providers:
- **UK Vehicle Data** (ukvehicledata.co.uk) - Tried first
- **DVLA VES API** (driver-vehicle-licensing.api.gov.uk) - Fallback

**To get a DVLA VES API key:**
1. Visit: https://developer-portal.driver-vehicle-licensing.api.gov.uk/
2. Register for an account
3. Request API access
4. Wait for approval (can take a few days)
5. Copy your API key and paste it at line 14

---

## 🏠 Address Lookup API (Free & Open Source - No Key Required!)

### Current Status
✅ **Using OpenStreetMap Nominatim - Completely FREE**

### How It Works
**File:** `src/utils/api.js` - Lines 134-234

The system uses TWO free APIs:
1. **postcodes.io** - Validates postcodes and gets location data
2. **OpenStreetMap Nominatim** - Provides real address suggestions

**No API keys required!** Both are completely free and open source.

### Features
- Real addresses from OpenStreetMap database
- Automatic fallback to area-specific street names if OSM unavailable
- No daily limits (fair use policy: 1 request per second)
- GDPR compliant

### Fallback System
If Nominatim is unavailable, the system shows real street names for your area:
- **HP1 (Hemel):** High Street, London Road, Queensway
- **HP2 (Hemel):** Marlowes, Waterhouse Street, Bridge Street
- **HP3 (Hemel):** St Albans Road, Bennetts End Road, Galley Hill
- **WD (Watford):** High Street, Station Road, Church Street
- **AL (St Albans):** Victoria Street, Holywell Hill, St Peters Street
- **LU (Luton):** George Street, Park Street, High Town Road

### Testing
To verify it's working:
1. Go to `/estimate`
2. Enter postcode `HP2 7DE`
3. Click "Lookup"
4. You should see real addresses in the dropdown
5. If orange warning appears, fallback addresses are being used (still functional)

---

## 📧 Email Submission (Web3Forms)

### Location
**File:** `src/pages/GetEstimate.jsx`
**Lines:** 319, 371

### Current Code
```javascript
access_key: '2682cfaa-cf56-45ba-b0b8-f9317e983777',
```

### How to Update (if needed)
If you need to change the Web3Forms key:
1. Open `src/pages/GetEstimate.jsx`
2. Search for `access_key` (appears twice - business email and customer confirmation)
3. Replace the key on both lines 319 and 371

**Your current Web3Forms key is active and working.**

---

## 🔒 hCaptcha (Spam Protection)

### Location
**File:** `src/pages/GetEstimate.jsx`
**Line:** 94

### Current Code
```javascript
sitekey: '50b2fe65-b00b-4b9e-ad62-3ba471098be2',
```

**Your current hCaptcha site key is active and working.**

If you need to change it:
1. Visit: https://www.hcaptcha.com/
2. Get your site key
3. Update line 94 in `src/pages/GetEstimate.jsx`

---

## ⚙️ Quick Reference

| API | File | Line | Status | Free Tier |
|-----|------|------|--------|-----------|
| Vehicle Lookup | `src/utils/api.js` | 14 | Awaiting new key | Varies by provider |
| Address Lookup | `src/utils/api.js` | 140 | Using samples | 20/day (getaddress.io) |
| Email (Web3Forms) | `src/pages/GetEstimate.jsx` | 319, 371 | ✅ Active | 250/month |
| hCaptcha | `src/pages/GetEstimate.jsx` | 94 | ✅ Active | Unlimited |

---

## 🧪 Testing

After adding your API keys:

1. **Vehicle Lookup Test:**
   - Go to `/estimate`
   - Enter a valid UK registration (e.g., "AB12CDE")
   - Click "Lookup"
   - Should return vehicle make, model, year

2. **Address Lookup Test:**
   - Enter a postcode (e.g., "HP2 7DE")
   - Click "Lookup"
   - Should show dropdown with real addresses (if API configured)

3. **Form Submission Test:**
   - Complete all 5 steps
   - Verify hCaptcha appears on Step 5
   - Submit form
   - Check both emails arrive (business + customer confirmation)

---

## 📞 Support

If you encounter issues:
- Check browser console for error messages
- Verify API keys are active in their respective dashboards
- Ensure you haven't exceeded free tier limits

**Current Form Email:** fixnowmechanics@outlook.com
**Form submissions working:** ✅ Yes
