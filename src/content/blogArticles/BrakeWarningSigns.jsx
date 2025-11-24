import React from 'react';

export function BrakeWarningSigns() {
  return (
    <>
      <p className="text-white/90 text-xl mb-6 font-medium">
        Your brakes are your car's most critical safety system. Recognizing warning signs early can prevent dangerous brake 
        failure and save you from expensive repairs. Here are 5 signs that mean you need immediate brake attention.
      </p>

      <div className="bg-red-500/10 border-2 border-red-500/50 rounded-lg p-6 mb-8">
        <p className="text-white font-bold text-lg mb-2">⚠️ SAFETY WARNING</p>
        <p className="text-white/90">
          If you experience ANY of these symptoms, get your brakes checked immediately. Brake failure can happen suddenly 
          and without warning. We offer same-day mobile brake inspections at your location.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">1. Squealing, Squeaking, or Grinding Noises 🔊</h2>
      
      <h3 className="text-2xl font-bold text-white mt-8 mb-4">What It Sounds Like</h3>
      <ul className="list-disc list-inside text-white/80 space-y-2 mb-6">
        <li><strong className="text-white">High-pitched squeal:</strong> Sounds like metal scraping when you apply brakes</li>
        <li><strong className="text-white">Grinding noise:</strong> Deep, rough metal-on-metal sound</li>
        <li><strong className="text-white">Intermittent squeaking:</strong> Comes and goes, especially when braking gently</li>
      </ul>

      <h3 className="text-2xl font-bold text-white mt-8 mb-4">What's Happening</h3>
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
        <p className="text-white mb-4"><strong>Squealing = Wear indicator</strong></p>
        <p className="text-white/80 mb-4">
          Modern brake pads have a small metal tab designed to squeal when your pads are worn to about 2-3mm. This is your 
          car telling you: "Book brake service soon, but not an emergency yet."
        </p>

        <p className="text-white mb-4"><strong>Grinding = URGENT</strong></p>
        <p className="text-white/80 mb-4">
          Grinding means your brake pads are completely worn out and the metal backing plate is now grinding directly on 
          your brake disc. This damages the disc rapidly (£££) and severely reduces braking power. Get this fixed immediately.
        </p>

        <p className="text-white mb-4"><strong>Squeaking (especially when wet) = Often normal</strong></p>
        <p className="text-white/80">
          Light squeaking in wet weather or first thing in the morning is usually surface rust burning off. If it goes away 
          after a few brake applications, it's probably harmless. If it persists, get it checked.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Cost of Ignoring It</h3>
      <p className="text-white/80 mb-8">
        Worn brake pads only: £80-£120 fitted<br/>
        Worn pads + damaged discs (from grinding): £200-£350 fitted<br/>
        Worn pads + damaged discs + damaged calipers: £400-£600+ fitted
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">2. Soft or Spongy Brake Pedal 🦶</h2>
      
      <h3 className="text-2xl font-bold text-white mt-8 mb-4">What It Feels Like</h3>
      <p className="text-white/80 mb-6">
        When you press the brake pedal, it feels mushy, spongy, or sinks toward the floor more than usual. You need to 
        press harder or further than normal to get the same braking force.
      </p>

      <h3 className="text-2xl font-bold text-white mt-8 mb-4">What's Causing It</h3>
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
        <p className="text-white mb-3"><strong>1. Air in brake lines (most common)</strong></p>
        <p className="text-white/80 mb-4">
          Brake fluid is incompressible, but air is compressible. Air in your brake lines means less braking pressure reaches 
          the wheels. Usually happens after brake repairs or if there's a small leak.
        </p>

        <p className="text-white mb-3"><strong>2. Brake fluid leak</strong></p>
        <p className="text-white/80 mb-4">
          Check under your car for wet spots. Brake fluid is clear or slightly amber colored. Leaks can come from brake 
          lines, calipers, or the master cylinder. This is a CRITICAL safety issue.
        </p>

        <p className="text-white mb-3"><strong>3. Worn brake pads (indirect cause)</strong></p>
        <p className="text-white/80 mb-4">
          As pads wear down, the brake caliper pistons extend further to compensate. This can sometimes make the pedal feel 
          softer or travel further.
        </p>

        <p className="text-white mb-3"><strong>4. Master cylinder failure</strong></p>
        <p className="text-white/80">
          The master cylinder creates hydraulic pressure. If internal seals fail, you lose pressure and the pedal becomes 
          soft. This is serious and needs immediate attention.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-white mt-8 mb-4">What To Do</h3>
      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8">
        <p className="text-white font-bold mb-2">⛔ DO NOT DRIVE if:</p>
        <ul className="text-white/80 space-y-2">
          <li>• Pedal goes all the way to the floor</li>
          <li>• You see brake fluid leaking</li>
          <li>• Brake warning light is on</li>
          <li>• Braking distance has dramatically increased</li>
        </ul>
        <p className="text-white mt-4">
          Call for mobile mechanic inspection or recovery. Driving with brake system failure is extremely dangerous.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">3. Car Pulls to One Side When Braking ↔️</h2>
      
      <h3 className="text-2xl font-bold text-white mt-8 mb-4">What Happens</h3>
      <p className="text-white/80 mb-6">
        When you apply brakes, the steering wheel pulls left or right. You need to actively fight the steering to keep the 
        car going straight. This gets worse with harder braking.
      </p>

      <h3 className="text-2xl font-bold text-white mt-8 mb-4">Common Causes</h3>
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
        <p className="text-white mb-3"><strong>1. Seized brake caliper (most common)</strong></p>
        <p className="text-white/80 mb-4">
          One caliper isn't releasing properly, causing uneven braking force. The side that pulls is usually the side with 
          the problem. Car may also pull slightly while driving (not just braking) if severely seized.
        </p>

        <p className="text-white mb-3"><strong>2. Uneven brake pad wear</strong></p>
        <p className="text-white/80 mb-4">
          One side has much more pad material left than the other. This creates unequal braking force. Usually caused by a 
          sticking caliper slider pin.
        </p>

        <p className="text-white mb-3"><strong>3. Contaminated brake disc</strong></p>
        <p className="text-white/80 mb-4">
          Oil, brake fluid, or grease on one disc reduces friction on that side. Less common but easy to fix.
        </p>

        <p className="text-white mb-3"><strong>4. Collapsed brake hose</strong></p>
        <p className="text-white/80">
          The rubber brake hose has deteriorated internally, restricting fluid flow to one wheel. More common on older 
          cars (10+ years).
        </p>
      </div>

      <h3 className="text-2xl font-bold text-white mt-8 mb-4">Why It's Dangerous</h3>
      <p className="text-white/80 mb-8">
        Uneven braking can cause loss of control, especially in emergency braking or wet conditions. If a front wheel locks 
        up while the other doesn't, the car can spin. Get this diagnosed within 24-48 hours maximum.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">4. Vibration or Pulsing in Brake Pedal or Steering Wheel 📳</h2>
      
      <h3 className="text-2xl font-bold text-white mt-8 mb-4">What It Feels Like</h3>
      <p className="text-white/80 mb-6">
        When braking (especially at highway speeds), you feel a pulsing or vibration through the brake pedal or steering 
        wheel. It feels like the brakes are "juddering" or "stuttering" rather than applying smoothly.
      </p>

      <h3 className="text-2xl font-bold text-white mt-8 mb-4">What Causes It</h3>
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
        <p className="text-white mb-3"><strong>Warped brake discs (95% of cases)</strong></p>
        <p className="text-white/80 mb-4">
          Brake discs should be perfectly flat. When they warp (become slightly wavy), the brake pads hit high and low 
          spots as the disc rotates, causing pulsing. Common causes:
        </p>
        <ul className="list-disc list-inside text-white/80 space-y-2 mb-4 ml-4">
          <li>Excessive heat from heavy braking (mountain driving, towing)</li>
          <li>Over-tightening wheel nuts (damages disc)</li>
          <li>Driving through deep water when brakes are very hot</li>
          <li>Natural wear on older discs (8-10 years)</li>
        </ul>

        <p className="text-white mb-3"><strong>Less common causes:</strong></p>
        <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
          <li>Loose wheel bearing</li>
          <li>Brake pad material transfer (glazed spots on disc)</li>
          <li>Improperly installed brake pads</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-white mt-8 mb-4">Can You Keep Driving?</h3>
      <p className="text-white/80 mb-4">
        <strong className="text-white">Short answer: Yes, but get it fixed soon.</strong>
      </p>
      <p className="text-white/80 mb-8">
        Warped discs won't cause immediate brake failure, but they do reduce braking efficiency and will get progressively 
        worse. The vibration also accelerates wear on other brake components. Budget 1-2 weeks to get it sorted, or sooner 
        if it's getting noticeably worse.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">5. Brake Warning Light or ABS Light On 🚨</h2>
      
      <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Brake Warning Light (Red)</h3>
      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-6">
        <p className="text-white font-bold mb-3">What it looks like: Red circle with "BRAKE" or (!) symbol</p>
        <p className="text-white mb-4"><strong>Immediate checks:</strong></p>
        <ol className="list-decimal list-inside text-white/80 space-y-2 mb-4">
          <li>Is your handbrake fully released? (Common false alarm)</li>
          <li>Check brake fluid level (under bonnet, usually near back on driver's side)</li>
          <li>Do brakes feel normal when you press the pedal?</li>
        </ol>
        
        <p className="text-white font-bold mb-2">⛔ If light stays on after checking above:</p>
        <p className="text-white/80">
          Stop driving. You may have a brake fluid leak, failed master cylinder, or serious brake system fault. Call for 
          mobile mechanic diagnosis or recovery. This is NOT a "drive it to the garage tomorrow" situation.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-white mt-8 mb-4">The ABS Warning Light (Amber)</h3>
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-6">
        <p className="text-white font-bold mb-3">What it looks like: Amber "ABS" letters in a circle</p>
        <p className="text-white/80 mb-4">
          <strong className="text-white">What it means:</strong> Your Anti-lock Braking System has a fault. Your normal 
          brakes still work, but the ABS function is disabled.
        </p>
        <p className="text-white/80 mb-4">
          <strong className="text-white">Can you drive?</strong> Yes, carefully. You still have braking, but in emergency 
          braking situations, your wheels may lock up (especially on wet roads). Avoid heavy braking and get it diagnosed 
          within a few days.
        </p>
        <p className="text-white/80">
          <strong className="text-white">Common causes:</strong> Faulty wheel speed sensor (£60-£120 to replace), damaged 
          wiring, or ABS pump fault (expensive, £400+).
        </p>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">How Much Do Brake Repairs Cost?</h2>
      
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
        <p className="text-white font-bold mb-4">Typical Mobile Mechanic Prices (FixNow Mechanics):</p>
        <ul className="text-white/80 space-y-3">
          <li><strong className="text-white">Brake pads (front or rear):</strong> £80-£130 fitted</li>
          <li><strong className="text-white">Brake discs (pair) + pads:</strong> £150-£250 fitted</li>
          <li><strong className="text-white">Full brake service (all 4 wheels):</strong> £300-£500 fitted</li>
          <li><strong className="text-white">Brake fluid change:</strong> £60-£80</li>
          <li><strong className="text-white">Brake caliper replacement:</strong> £120-£200 per side fitted</li>
          <li><strong className="text-white">ABS sensor replacement:</strong> £80-£150 fitted</li>
          <li><strong className="text-white">Brake inspection (diagnostic):</strong> £15-£25 (deducted from repair cost)</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">When To Get Professional Help</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
          <p className="text-white font-bold mb-4 text-lg">🚨 URGENT - Stop Driving:</p>
          <ul className="text-white/80 space-y-2 text-sm">
            <li>• Brake pedal goes to floor</li>
            <li>• Brake warning light on (red)</li>
            <li>• Visible brake fluid leak</li>
            <li>• Metal grinding sound when braking</li>
            <li>• Brake pedal feels completely soft/spongy</li>
            <li>• Smoking from wheels</li>
          </ul>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
          <p className="text-white font-bold mb-4 text-lg">⚠️ Get Checked This Week:</p>
          <ul className="text-white/80 space-y-2 text-sm">
            <li>• Squealing noise when braking</li>
            <li>• Car pulls to one side</li>
            <li>• Vibrating/pulsing brake pedal</li>
            <li>• ABS light on (amber)</li>
            <li>• Brakes feel less responsive</li>
            <li>• Brake pedal slightly softer than normal</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">How FixNow Mechanics Can Help</h2>
      <p className="text-white/80 mb-4">
        We provide mobile brake inspections and repairs at your home, workplace, or roadside location throughout Hertfordshire 
        and surrounding areas. Our diagnostic visits cost just £15-£25 depending on distance, and we'll give you a clear 
        explanation of what's wrong and a transparent quote.
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">Same-day service often available for urgent brake issues.</strong> We carry common 
        brake pads and parts in stock, so many repairs can be completed immediately.
      </p>
      <p className="text-white/80 mb-8">
        Don't gamble with your brakes. If you're experiencing any of these warning signs, call us today on 07354 915941 
        or get a free quote online. We come to you - no garage visit needed.
      </p>
    </>
  );
}
