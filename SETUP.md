# FixNow Mechanics - Setup Guide

This guide will help you set up the website with all necessary integrations.

## 📋 Prerequisites

- Node.js 16+ installed
- Git installed
- A code editor (VS Code recommended)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd FixNowMechanics
npm install
```

### 2. Set Up Form Submission (Web3Forms)

The estimate form uses Web3Forms - a free email service for static websites.

**Steps:**

1. Go to [web3forms.com](https://web3forms.com)
2. Click "Create Access Key"
3. Enter your email: `Abukars@outlook.com`
4. Verify your email
5. Copy the access key
6. Open `src/pages/GetEstimate.jsx`
7. Find line ~317 (in `handleSubmit` function):
   ```javascript
   access_key: '28e1bd82-b9c7-4e49-9c8b-2ee63b9c8e95', // Replace this!
   ```
8. Replace with your new access key

**Why Web3Forms?**
- ✅ FREE (up to 250 submissions/month)
- ✅ No backend required
- ✅ Email notifications
- ✅ GDPR compliant
- ✅ Spam protection included

### 3. Vehicle Registration API (Optional)

The vehicle lookup currently uses mock data. For production:

**Option 1: DVLA API (Official, Paid)**

1. Register at: https://developer-portal.driver-vehicle-licensing.api.gov.uk/
2. Subscribe to Vehicle Enquiry API (£2.50 per lookup)
3. Get your API key
4. Create `.env` file:
   ```
   VITE_DVLA_API_KEY=your_api_key_here
   ```
5. Update `src/utils/api.js` line ~13 to uncomment the real API code

**Option 2: Use Mock Data (Free)**

The site currently shows mock vehicle data which demonstrates the feature.
Users can still manually enter vehicle details.

### 4. Postcode Lookup (Already Working!)

The postcode API uses **postcodes.io** - completely FREE and requires no setup!

- ✅ Already integrated
- ✅ No API key needed
- ✅ Unlimited requests
- ✅ UK postcodes only

### 5. Update Contact Information

All contact details are in `src/constants/brand.js`:

```javascript
export const BRAND = {
  phoneDisplay: "07354 915941",  // Your number
  phoneIntl: "+447354915941",     // International format
  email: "Abukars@outlook.com",   // Your email
  // ...
};
```

### 6. Upload Hero Image (Optional)

To replace the placeholder hero image:

1. Prepare your image (recommended: 1200x800px, WebP format)
2. Save as `public/images/hero.webp`
3. The image will automatically display instead of the placeholder

For service images, save as:
- `public/images/diagnostics.webp`
- `public/images/brakes.webp`
- `public/images/battery.webp`
- `public/images/oil-service.webp`
- `public/images/suspension.webp`

## 🧪 Testing

### Run Development Server

```bash
npm run dev
```

Visit: `http://localhost:5173`

### Test the Estimate Form

1. Go to "Get Estimate"
2. Fill in all steps
3. Submit
4. Check your email (configured in Web3Forms)

### Test WhatsApp Integration

1. Click the floating WhatsApp button (bottom right)
2. Or click "WhatsApp" buttons throughout the site
3. Should open WhatsApp with pre-filled message

## 📦 Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

## 🚀 Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Vite
6. Click "Deploy"

### Method 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Environment Variables on Vercel

If using DVLA API, add environment variable:

1. Go to Project Settings
2. Environment Variables
3. Add: `VITE_DVLA_API_KEY` = your_key
4. Redeploy

## ⚙️ Configuration

### Business Hours

Update in `src/constants/brand.js`:

```javascript
hours: {
  weekdays: "7pm – 10pm",
  saturday: "8am – 10pm",
  sunday: "8am – 8pm",
}
```

### Service Areas

```javascript
serviceAreas: [
  "Hemel Hempstead",
  "Watford",
  // Add more areas...
],
```

### Callout Fee

```javascript
export const CALLOUT_NOTE =
  "£15 callout fee applies to areas outside Hemel Hempstead (refunded if repair is accepted)";
```

### Services & Pricing

```javascript
export const SERVICES = [
  {
    title: "Full Diagnostics",
    desc: "OBD scan + fault codes + detailed action plan",
    price: "from £40",
    slug: "diagnostics",
  },
  // Add/edit services...
];
```

## 🔧 Troubleshooting

### Form submissions not working?

- Check Web3Forms access key is correct
- Check email address is verified
- Check browser console for errors
- Test at https://web3forms.com/platforms/html

### Postcode lookup failing?

- Check internet connection
- Verify postcode format (e.g., "HP2 7DE")
- Check postcodes.io status

### Images not showing?

- Ensure files are in `public/images/`
- Use WebP format for best performance
- Check file names match exactly

### WhatsApp not opening?

- Check phone number format: `+447354915941`
- Ensure number includes country code
- Test on mobile device

## 📞 Support

If you need help:

- Check the main README.md
- Review code comments in files
- Contact: Abukars@outlook.com

## ✅ Pre-Launch Checklist

Before going live:

- [ ] Set up Web3Forms with your email
- [ ] Test estimate form submission
- [ ] Test WhatsApp integration
- [ ] Upload hero image (or keep placeholder)
- [ ] Update service images (or keep placeholders)
- [ ] Test on mobile devices
- [ ] Test all links and navigation
- [ ] Verify contact information is correct
- [ ] Test postcode lookup with real UK postcodes
- [ ] Check responsive design on different screen sizes
- [ ] Deploy to Vercel
- [ ] Test production site
- [ ] Set up custom domain (if applicable)

---

🎉 **You're all set!** Your professional mechanic website is ready to go.
