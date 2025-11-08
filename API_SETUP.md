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

## 🏠 Address Lookup API (Optional - For Real Addresses)

### Location
**File:** `src/utils/api.js`
**Line:** 140

### Current Code
```javascript
const GETADDRESS_API_KEY = 'YOUR_GETADDRESS_API_KEY_HERE'; // Replace with your API key
```

### Current Status
- **Currently showing:** Sample addresses based on postcode area
- **To get real addresses:** Configure getaddress.io API key (free tier available)

### How to Update
1. Open `src/utils/api.js`
2. Find line 140 (search for `GETADDRESS_API_KEY`)
3. Replace `'YOUR_GETADDRESS_API_KEY_HERE'` with your actual API key

### Example
```javascript
// Replace this:
const GETADDRESS_API_KEY = 'YOUR_GETADDRESS_API_KEY_HERE';

// With your key:
const GETADDRESS_API_KEY = 'ak_abc123xyz456';
```

**To get a getaddress.io API key:**
1. Visit: https://getaddress.io/
2. Sign up for a FREE account
3. Free tier includes: **20 address lookups per day**
4. Copy your API key from the dashboard
5. Paste it at line 140 in `src/utils/api.js`

**Alternative Address APIs:**
If you prefer a different provider:
- **ideal-postcodes.co.uk** - 100 requests/month free
- **postcodes.io** - Free but limited address data (currently used for validation)

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

**Current Form Email:** Abukars@outlook.com
**Form submissions working:** ✅ Yes
