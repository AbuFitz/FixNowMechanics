# FixNow Mechanics Website

Modern, responsive website for FixNow Mechanics - a professional mobile mechanic service based in Hemel Hempstead, UK.

## 🚀 Features

- **Modern UI/UX**: Clean, dark theme with signature yellow (#FECF00) accent
- **Multi-page Application**: Built with React Router for seamless navigation
- **Quick Estimate Tool**: Instant pricing with vehicle registration and postcode lookup
- **Full Quotation System**: Detailed quote request form with comprehensive information collection
- **API Integrations**:
  - UK Vehicle Registration lookup (DVLA)
  - UK Postcode lookup (postcodes.io)
  - Distance calculation for travel costs
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **WhatsApp Integration**: Direct booking and communication via WhatsApp
- **Professional Branding**: Updated logo with wrench icon and FixNow brand identity

## 🎨 Design

### Color Palette
- **Primary Yellow**: `#FECF00` - Signature brand color
- **Dark Background**: `#0B0B0C` - Deep black
- **Mid Dark**: `#151518` - Slightly lighter dark for contrast
- **Accent Amber**: `#FFB800` - Alternative yellow shade

### Brand Identity
- **Tagline**: "Reliable Repairs. Real Results."
- **Logo**: Modern wrench icon with FixNow typography
- **Design Philosophy**: Clean, professional, and trustworthy

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Button.jsx     # Primary, secondary, and ghost button variants
│   ├── Card.jsx       # Card components with header, body, footer
│   ├── Input.jsx      # Form inputs, textareas, and selects
│   ├── Layout.jsx     # Header, footer, navigation, page layout
│   └── Logo.jsx       # Brand logo component
├── pages/             # Page components
│   ├── Home.jsx       # Homepage with services and hero
│   ├── Quote.jsx      # Full quotation request form
│   └── QuickEstimate.jsx  # Quick estimate calculator
├── constants/         # Configuration and constants
│   └── brand.js       # Brand colors, contact info, services
├── utils/             # Utility functions
│   └── api.js         # API integration functions
├── App.jsx            # Main app with routing
├── main.jsx           # Entry point
└── index.css          # Global styles and Tailwind directives
```

## 🔧 Setup

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd FixNowMechanics
```

2. Install dependencies:
```bash
npm install
```

3. Configure API keys (see API Setup below)

4. Start development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## 🔌 API Setup

### UK Vehicle Registration Lookup

The site uses vehicle registration lookup to auto-populate vehicle details. Currently using mock data for development.

#### Production Setup:

**Option 1: DVLA Vehicle Enquiry API (Official)**
1. Register at: https://developer-portal.driver-vehicle-licensing.api.gov.uk/
2. Subscribe to Vehicle Enquiry API
3. Get your API key
4. Create a `.env` file:
```env
VITE_DVLA_API_KEY=your_api_key_here
```

5. Update `src/utils/api.js` to use the API:
```javascript
const response = await fetch('https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': import.meta.env.VITE_DVLA_API_KEY
  },
  body: JSON.stringify({ registrationNumber: reg })
});
```

**Option 2: RapidAPI Vehicle Data**
- Alternative APIs available on RapidAPI marketplace
- Search for "UK vehicle lookup" or "DVLA vehicle data"
- Some offer free tiers for testing

### UK Postcode Lookup

Already integrated with **postcodes.io** - a free, open-source API that requires no API key!

- **API**: https://api.postcodes.io
- **Documentation**: https://postcodes.io/
- **Features**:
  - Postcode validation
  - Geographic data (latitude, longitude)
  - Administrative regions
  - No rate limits for reasonable use
  - No authentication required

### Distance Calculation

Built-in Haversine formula calculates distance between:
- **Base Location**: Hemel Hempstead (51.7519, -0.4723)
- **Customer Location**: From postcode lookup

**Travel Cost Logic**:
- First 15 miles: FREE
- Additional miles: £2 per mile

## 📱 Pages

### Home (`/`)
- Hero section with brand messaging
- Core services showcase
- Feature highlights
- About section with service areas
- Call-to-action buttons

### Quick Estimate (`/quick-estimate`)
- Vehicle registration lookup
- Postcode lookup with distance calculation
- Service selection
- Instant price estimation
- Travel cost calculation
- WhatsApp booking integration

### Get Quote (`/quote`)
- Comprehensive quotation form
- Personal information collection
- Vehicle details
- Service location
- Service requirements
- Preferred scheduling
- Urgency selection
- WhatsApp submission

## 🎯 Key Features Explained

### Quick Estimate Tool
1. **Vehicle Lookup**: Enter reg number to auto-populate vehicle details
2. **Location Lookup**: Enter postcode to validate address and calculate distance
3. **Service Selection**: Choose from core services with fixed pricing
4. **Instant Calculation**:
   - Base service price
   - Travel cost (if > 15 miles)
   - Callout fee (£28, refundable)
   - Total estimate

### Quotation System
- Collects detailed customer and vehicle information
- Validates all required fields
- Formats data for WhatsApp submission
- Allows scheduling preferences
- Captures urgency level
- Professional data collection for accurate quotes

### Mobile-First Design
- Responsive grid layouts
- Mobile bottom action bar (Call/WhatsApp)
- Touch-friendly buttons and inputs
- Optimized for all screen sizes
- Desktop navigation menu

## 🚢 Deployment

### Vercel (Recommended)
Already configured with `vercel.json`:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Deployment
1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` folder to your hosting provider

### Environment Variables
If using DVLA API, add to Vercel/hosting:
```
VITE_DVLA_API_KEY=your_api_key
```

## 📞 Contact Integration

### WhatsApp
- **Business Number**: +447930991598
- **Auto-populated messages** for different contexts:
  - General inquiry
  - Service-specific quotes
  - Booking with estimates

### Phone
- **Display**: 07930 991598
- **International**: +447930991598
- Click-to-call functionality

## 🛠️ Technologies

- **React 18.3.1** - UI framework
- **React Router DOM 6.26** - Client-side routing
- **Vite 5.4.10** - Build tool and dev server
- **Tailwind CSS 3.4.14** - Utility-first CSS
- **Lucide React 0.454** - Icon library
- **PostCSS & Autoprefixer** - CSS processing

## 📝 Customization

### Update Brand Information
Edit `src/constants/brand.js`:
```javascript
export const BRAND = {
  name: "FixNow Mechanics",
  phoneDisplay: "07930 991598",
  phoneIntl: "+447930991598",
  // ... other settings
};
```

### Add New Services
Edit `SERVICES` array in `src/constants/brand.js`:
```javascript
{
  title: "New Service",
  desc: "Description",
  price: "from £XX",
  slug: "service-slug",
}
```

### Change Colors
Edit `colors` object in `src/constants/brand.js` or Tailwind config.

## 🐛 Troubleshooting

### npm install fails
- Clear cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`
- Try: `npm install --legacy-peer-deps`

### Vehicle lookup not working
- Check API key is set correctly
- Verify API endpoint is accessible
- Check browser console for errors
- Ensure API key has proper permissions

### Postcode lookup fails
- Verify internet connection
- Check postcodes.io API status
- Ensure postcode format is correct (e.g., "HP2 7DE")

## 📄 License

© 2025 FixNow Mechanics | Part of ARF Automotive Group. All rights reserved.

## 🤝 Support

For technical support or questions:
- **Phone**: 07930 991598
- **Location**: Maylands Business Area, Hemel Hempstead, HP2 7DE

---

Built with ❤️ by the FixNow team
