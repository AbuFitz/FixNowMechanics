// Comprehensive service categories for FixNow Mechanics
export const SERVICE_CATEGORIES = [
  {
    name: 'Diagnostics',
    icon: '🔍',
    description: 'Professional diagnostic services to identify faults accurately',
    services: [
      'Full System Diagnostic Scan',
      'Engine Light Diagnosis',
      'ABS/DSC Fault Diagnosis',
      'Airbag/SRS Fault Diagnosis',
      'Electrical Fault Tracing',
      'ECU & Sensor Identification',
      'Live Data Analysis',
      'Fault Code Clearing'
    ]
  },
  {
    name: 'Servicing',
    icon: '🔧',
    description: 'Regular maintenance to keep your vehicle running smoothly',
    services: [
      'Full Service',
      'Interim Service',
      'Oil & Filter Change',
      'Air Filter Replacement',
      'Pollen Filter Replacement',
      'Fuel Filter Replacement',
      'Spark Plug Replacement',
      'Vehicle Health Check'
    ]
  },
  {
    name: 'Brakes',
    icon: '🛑',
    description: 'Complete brake system repairs and maintenance',
    services: [
      'Brake Pads Replacement',
      'Discs & Pads Replacement',
      'Brake Inspections',
      'ABS Sensor Replacement',
      'Brake Fluid Top-Up'
    ]
  },
  {
    name: 'Electrical',
    icon: '⚡',
    description: 'Electrical system diagnostics and repairs',
    services: [
      'Battery Testing & Replacement',
      'Alternator Testing & Replacement',
      'Starter Motor Replacement',
      'Fuse Replacement',
      'Wiring Repairs',
      'Coil Pack Replacement',
      'MAF Sensor Replacement',
      'MAP Sensor Replacement',
      'O2 Sensor Replacement',
      'Crank Sensor Replacement',
      'Cam Sensor Replacement'
    ]
  },
  {
    name: 'Suspension',
    icon: '🔩',
    description: 'Suspension repairs for a smooth, safe ride',
    services: [
      'Coil Springs Replacement',
      'Shock Absorbers Replacement',
      'Drop Links Replacement',
      'Control Arms Replacement',
      'Ball Joints Replacement',
      'Track Rod Ends Replacement'
    ]
  },
  {
    name: 'General',
    icon: '🛠️',
    description: 'Additional automotive services and repairs',
    services: [
      'Pre-Purchase Inspections',
      'Jump Starts',
      'Oil Drain Plug Checks',
      'Sump Plug Checks',
      'Leak Inspections',
      'Overheating Diagnosis',
      'Undertray Removal & Refitting',
      'Component Tightening',
      'Fluid Level Checks',
      'Warning Light Diagnosis'
    ]
  }
];

// Helper functions
export const getAllServices = () => {
  return SERVICE_CATEGORIES.flatMap(category => 
    category.services.map(service => ({
      category: category.name,
      service
    }))
  );
};

export const getServicesByCategory = (categoryName) => {
  const category = SERVICE_CATEGORIES.find(cat => cat.name === categoryName);
  return category ? category.services : [];
};
