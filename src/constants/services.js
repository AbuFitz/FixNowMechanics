// Comprehensive service categories for FixNow Mechanics
export const SERVICE_CATEGORIES = [
  {
    id: 'diagnostics',
    title: 'Diagnostics',
    icon: '🔍',
    description: 'Professional diagnostic services to identify faults accurately',
    services: [
      {
        name: 'Full System Diagnostic Scan',
        description: 'Comprehensive scan of all vehicle systems',
        included: true
      },
      {
        name: 'Engine Light Diagnosis',
        description: 'Identify why your check engine light is on',
        included: true
      },
      {
        name: 'ABS/DSC Faults',
        description: 'Anti-lock brake system diagnostics',
        included: true
      },
      {
        name: 'Airbag/SRS Faults',
        description: 'Safety system fault identification',
        included: true
      },
      {
        name: 'Electrical Fault Tracing',
        description: 'Track down electrical gremlins',
        included: true
      },
      {
        name: 'ECU/Sensor Fault Identification',
        description: 'Pinpoint faulty sensors and control units',
        included: true
      },
      {
        name: 'Live Data Analysis',
        description: 'Real-time monitoring if needed',
        included: true
      },
      {
        name: 'Fault Code Clearing',
        description: 'Clear codes when appropriate after repairs',
        included: true
      }
    ]
  },
  {
    id: 'servicing',
    title: 'Servicing',
    icon: '🛠️',
    description: 'Regular maintenance to keep your car running smoothly',
    services: [
      {
        name: 'Full Service',
        description: 'Comprehensive service including all filters and fluids',
        included: true
      },
      {
        name: 'Interim Service',
        description: 'Mid-interval service for high mileage drivers',
        included: true
      },
      {
        name: 'Oil & Filter Change',
        description: 'Fresh oil and new filter using correct spec',
        included: true
      },
      {
        name: 'Air/Pollen/Fuel Filter Changes',
        description: 'Replace clogged filters',
        included: true
      },
      {
        name: 'Spark Plugs',
        description: 'Replacement when worn or misfiring',
        included: true
      },
      {
        name: 'Vehicle Health Check',
        description: 'Comprehensive inspection of key components',
        included: true
      }
    ]
  },
  {
    id: 'brakes',
    title: 'Brakes',
    icon: '🛑',
    description: 'Brake repairs and maintenance for safe stopping',
    services: [
      {
        name: 'Brake Pads',
        description: 'Front or rear pad replacement',
        included: true
      },
      {
        name: 'Discs & Pads',
        description: 'Complete disc and pad replacement',
        included: true
      },
      {
        name: 'Brake Inspections',
        description: 'Check condition and remaining life',
        included: true
      },
      {
        name: 'ABS Sensor Replacements',
        description: 'Replace faulty wheel speed sensors',
        included: true
      },
      {
        name: 'Brake Fluid Top-Up',
        description: 'Top up fluid levels when low',
        included: true
      }
    ]
  },
  {
    id: 'electrical',
    title: 'Electrical & Starting System',
    icon: '⚡',
    description: 'Electrical repairs and starting system fixes',
    services: [
      {
        name: 'Battery Test',
        description: 'Check battery health and charging system',
        included: true
      },
      {
        name: 'Battery Replacement',
        description: 'Supply and fit new battery',
        included: true
      },
      {
        name: 'Alternator Replacement',
        description: 'Replace faulty charging system',
        included: true
      },
      {
        name: 'Starter Motor Replacement',
        description: 'Fix starting issues',
        included: true
      },
      {
        name: 'Fuse Repairs',
        description: 'Diagnose and replace blown fuses',
        included: true
      },
      {
        name: 'Wiring Inspections',
        description: 'Check for damaged or corroded wiring',
        included: true
      },
      {
        name: 'Coil Packs',
        description: 'Replace faulty ignition coils',
        included: true
      },
      {
        name: 'Sensor Replacements',
        description: 'MAF, MAP, O2, crank, cam sensors and more',
        included: true
      }
    ]
  },
  {
    id: 'suspension',
    title: 'Suspension & Steering',
    icon: '🔧',
    description: 'Mobile-friendly suspension and steering repairs',
    services: [
      {
        name: 'Springs',
        description: 'Replace broken or sagging springs',
        included: true
      },
      {
        name: 'Shock Absorbers',
        description: 'Replace worn dampers',
        included: true
      },
      {
        name: 'Drop Links',
        description: 'Replace worn anti-roll bar links',
        included: true
      },
      {
        name: 'Control Arms',
        description: 'Replace worn wishbones',
        included: true
      },
      {
        name: 'Ball Joints',
        description: 'Replace worn steering joints',
        included: true
      },
      {
        name: 'Track Rod Ends',
        description: 'Replace worn steering components',
        included: true
      }
    ]
  },
  {
    id: 'general',
    title: 'General & Miscellaneous',
    icon: '🚗',
    description: 'Other mobile mechanic services',
    services: [
      {
        name: 'Pre-Purchase Inspections',
        description: 'Check a used car before you buy',
        included: true
      },
      {
        name: 'Jump Starts',
        description: 'Get you going when battery is flat',
        included: true
      },
      {
        name: 'Battery Drain Checks',
        description: 'Find parasitic drains',
        included: true
      },
      {
        name: 'Leak Inspections',
        description: 'Identify source of fluid leaks',
        included: true
      },
      {
        name: 'Overheating Diagnosis',
        description: 'Basic cooling system checks (not engine tear-down)',
        included: true
      },
      {
        name: 'Undertray Refitting',
        description: 'Secure loose engine covers',
        included: true
      },
      {
        name: 'Loose Components Tightening',
        description: 'Heat shields, trim, brackets etc',
        included: true
      },
      {
        name: 'Fluid Checks',
        description: 'Check and top up all fluids',
        included: true
      },
      {
        name: 'Warning Lights Investigation',
        description: 'Diagnose dashboard warning lights',
        included: true
      }
    ]
  }
];

// Get all services as flat list
export const getAllServices = () => {
  return SERVICE_CATEGORIES.flatMap(category => 
    category.services.map(service => ({
      ...service,
      category: category.title,
      categoryId: category.id
    }))
  );
};

// Get services by category
export const getServicesByCategory = (categoryId) => {
  const category = SERVICE_CATEGORIES.find(cat => cat.id === categoryId);
  return category ? category.services : [];
};
