import React from 'react';

export function MobileMechanicVsGarage() {
  return (
    <>
      <p className="text-white/90 text-xl mb-6 font-medium">
        Choosing between a mobile mechanic and a traditional garage can save you hundreds of pounds and hours of time. 
        Let's break down the real costs, convenience factors, and quality differences to help you make the right choice.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">Cost Comparison: The Real Numbers</h2>
      
      <h3 className="text-2xl font-bold text-white mt-8 mb-4">Labour Rates</h3>
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
        <p className="text-white mb-4"><strong>Traditional Garage:</strong></p>
        <ul className="list-disc list-inside text-white/80 space-y-2 mb-6">
          <li>Main dealer: £80-£150 per hour</li>
          <li>Independent garage: £50-£80 per hour</li>
          <li>Fast-fit chain: £40-£70 per hour</li>
        </ul>

        <p className="text-white mb-4"><strong>Mobile Mechanic:</strong></p>
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>Typical rate: £40-£60 per hour</li>
          <li>FixNow Mechanics: From £60-£80 per job (not hourly)</li>
          <li>No waiting room, reception staff, or building overheads to pay for</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-white mt-8 mb-4">Real-World Example: Brake Pads & Discs</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
          <p className="text-white font-bold mb-4 text-lg">🏢 Traditional Garage</p>
          <ul className="text-white/80 space-y-2 text-sm">
            <li>Parts: £120</li>
            <li>Labour: £90-£150 (2 hours)</li>
            <li>Workshop fee: £10-£20</li>
            <li>Collection/delivery: £0-£30</li>
            <li className="pt-2 border-t border-red-500/30 font-bold text-white">Total: £220-£320</li>
          </ul>
        </div>

        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
          <p className="text-white font-bold mb-4 text-lg">🔧 Mobile Mechanic</p>
          <ul className="text-white/80 space-y-2 text-sm">
            <li>Parts: £120 (same quality)</li>
            <li>Labour: £80-£100</li>
            <li>Call-out: Included</li>
            <li>Travel: You pay £0</li>
            <li className="pt-2 border-t border-green-500/30 font-bold text-white">Total: £200-£220</li>
          </ul>
          <p className="text-green-400 font-bold mt-4">Savings: £20-£100</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white mt-8 mb-4">Hidden Costs of Garages</h3>
      <p className="text-white/80 mb-4">
        What many people don't realize is that garage visits come with hidden time and money costs:
      </p>
      <ul className="list-disc list-inside text-white/80 space-y-3 mb-8">
        <li><strong className="text-white">Time off work:</strong> Average 2-4 hours for drop-off and collection = £50-£150 in lost earnings</li>
        <li><strong className="text-white">Transport costs:</strong> Taxi/Uber while car is in garage = £15-£40</li>
        <li><strong className="text-white">Courtesy car insurance:</strong> Often excess of £500-£1000 if you have an accident</li>
        <li><strong className="text-white">Waiting time:</strong> Even "while you wait" services take 1-2 hours minimum</li>
      </ul>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">Convenience Factor</h2>

      <h3 className="text-2xl font-bold text-white mt-8 mb-4">Mobile Mechanic Advantages</h3>
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
        <ul className="space-y-4 text-white/80">
          <li className="flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong className="text-white">Work from home:</strong> No need to take time off. Mechanic works while you're 
              in Zoom meetings or looking after kids.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong className="text-white">Evening & weekend service:</strong> Most mobile mechanics work when garages are closed. 
              Perfect for busy professionals.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong className="text-white">Roadside repairs:</strong> Broken down? We come to you. No tow truck needed (saves £100-£200).
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong className="text-white">Transparent service:</strong> You can watch the work being done. No "mysterious" repairs 
              you can't verify.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <strong className="text-white">Same-day service:</strong> Often available. Garages typically book 3-7 days ahead.
            </div>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-white mt-8 mb-4">When Garages Have the Edge</h3>
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
        <p className="text-white/80 mb-4">Fair is fair - there are some situations where a traditional garage is the better choice:</p>
        <ul className="space-y-3 text-white/80">
          <li className="flex items-start gap-3">
            <span className="text-xl">⚙️</span>
            <div>
              <strong className="text-white">Major engine work:</strong> Engine removal, head gasket replacement, or gearbox rebuilds 
              need a fully equipped workshop with lifts and engine cranes.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🔧</span>
            <div>
              <strong className="text-white">Specialist diagnostics:</strong> Some complex electrical faults need dealer-level 
              diagnostic equipment not available in mobile setups.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🚗</span>
            <div>
              <strong className="text-white">Welding/bodywork:</strong> Structural repairs, exhaust welding, or rust repair needs 
              workshop facilities.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">❄️</span>
            <div>
              <strong className="text-white">Weather-dependent jobs:</strong> In heavy rain or snow, some jobs are better done 
              indoors (though most mobile mechs work in all weathers).
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">Quality of Work: Myth vs Reality</h2>
      
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-6">
        <p className="text-white font-bold mb-3 text-lg">❌ Common Myth:</p>
        <p className="text-white/80 italic mb-4">
          "Mobile mechanics can't be as good as garages because they don't have proper equipment."
        </p>
        <p className="text-white font-bold mb-3 text-lg">✅ Reality:</p>
        <p className="text-white/80">
          Professional mobile mechanics invest heavily in portable diagnostic equipment, quality tools, and ongoing training. 
          For 80% of common repairs (brakes, batteries, servicing, diagnostics, suspension), a mobile mechanic has everything 
          needed to do the job to the same standard as a garage.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-white mt-8 mb-4">What Mobile Mechanics CAN Do Expertly</h3>
      <ul className="list-disc list-inside text-white/80 space-y-2 mb-8">
        <li>Full diagnostic scans (we use professional OBD scanners, often the same as garages)</li>
        <li>Brake pads, discs, calipers replacement</li>
        <li>Battery testing and replacement</li>
        <li>Oil & filter services, full services, interim services</li>
        <li>Alternator and starter motor replacement</li>
        <li>Suspension work: springs, shocks, drop links, ball joints</li>
        <li>Sensor replacements (MAF, O2, crank, cam sensors)</li>
        <li>Spark plug changes</li>
        <li>Air filter, pollen filter, fuel filter changes</li>
        <li>Minor electrical repairs and fault finding</li>
        <li>Pre-purchase inspections</li>
        <li>Jump starts and battery drain diagnosis</li>
      </ul>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">Parts Quality: Are You Getting Ripped Off?</h2>
      
      <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Garage Parts Markup</h3>
      <p className="text-white/80 mb-4">
        Here's an industry secret: Most garages mark up parts by 30-100%. They buy from the same trade suppliers as mobile 
        mechanics, then add a hefty profit margin.
      </p>
      
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
        <p className="text-white mb-4"><strong>Example: Brake Pads for Ford Focus</strong></p>
        <ul className="text-white/80 space-y-2">
          <li>Trade price (what garage pays): £35</li>
          <li>Garage charges you: £50-£70 (43-100% markup)</li>
          <li>Mobile mechanic charges you: £40-£50 (14-43% markup)</li>
          <li>If you supply parts yourself: £35 (you pay labour only)</li>
        </ul>
      </div>

      <p className="text-white/80 mb-8">
        <strong className="text-white">Pro tip:</strong> Many mobile mechanics (including FixNow Mechanics) are happy to fit parts 
        you supply yourself if you're confident about quality. This gives you maximum control over costs.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">Time Savings: The Real Winner</h2>
      
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
        <p className="text-white font-bold mb-4">Typical Garage Experience:</p>
        <ul className="text-white/80 space-y-2 mb-6">
          <li>1. Call for appointment: 5-10 minutes</li>
          <li>2. Wait 3-7 days for availability</li>
          <li>3. Drive to garage (15-30 minutes)</li>
          <li>4. Drop off car, arrange return transport (30-60 minutes)</li>
          <li>5. Wait for work to be done (2-8 hours)</li>
          <li>6. Travel back to garage (15-30 minutes)</li>
          <li>7. Collect car, pay, discuss work (20-30 minutes)</li>
          <li className="pt-2 border-t border-white/10 font-bold text-white">Total disruption: 4-10 hours + 3-7 days wait</li>
        </ul>

        <p className="text-white font-bold mb-4">Mobile Mechanic Experience:</p>
        <ul className="text-white/80 space-y-2">
          <li>1. Call or WhatsApp for quote: 5 minutes</li>
          <li>2. Book same-day or next-day appointment: 2 minutes</li>
          <li>3. Mechanic arrives at your location: 0 minutes (you're already there)</li>
          <li>4. Work done while you work from home/watch TV: 1-3 hours</li>
          <li>5. Pay and drive away: 5 minutes</li>
          <li className="pt-2 border-t border-white/10 font-bold text-white">Total disruption: 12 minutes + often same-day service</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Verdict: Which Should You Choose?</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
          <p className="text-white font-bold mb-4 text-lg">✅ Choose a Mobile Mechanic For:</p>
          <ul className="text-white/80 space-y-2 text-sm">
            <li>• Diagnostics & fault finding</li>
            <li>• Brake repairs (pads, discs)</li>
            <li>• Battery replacement</li>
            <li>• Servicing & oil changes</li>
            <li>• Suspension repairs</li>
            <li>• Sensor replacements</li>
            <li>• Alternator/starter repairs</li>
            <li>• Roadside breakdowns</li>
            <li>• When you can't take time off work</li>
            <li>• When you need same-day service</li>
            <li>• To save 20-40% on costs</li>
          </ul>
        </div>

        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
          <p className="text-white font-bold mb-4 text-lg">🏢 Choose a Garage For:</p>
          <ul className="text-white/80 space-y-2 text-sm">
            <li>• Major engine work</li>
            <li>• Gearbox removal/rebuild</li>
            <li>• Clutch replacement (some mobiles do this)</li>
            <li>• Exhaust welding</li>
            <li>• Bodywork & rust repair</li>
            <li>• Air conditioning servicing</li>
            <li>• Complex electrical diagnostics</li>
            <li>• When weather is extreme</li>
            <li>• Warranty work (dealer required)</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">Real Customer Savings Examples</h2>
      
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
        <p className="text-white font-bold mb-4">Case Study 1: Battery Replacement</p>
        <p className="text-white/80 mb-2">Customer: Sarah from Watford, VW Golf 2018</p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-white/70 text-sm">Kwik Fit Quote:</p>
            <p className="text-white">£189 (battery + fitting)</p>
          </div>
          <div>
            <p className="text-white/70 text-sm">FixNow Mechanics:</p>
            <p className="text-white">£140 (battery + fitting at her home)</p>
          </div>
        </div>
        <p className="text-green-400 font-bold">Saved: £49 + 2 hours of time</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
        <p className="text-white font-bold mb-4">Case Study 2: Brake Pads & Discs (Front)</p>
        <p className="text-white/80 mb-2">Customer: James from St Albans, Ford Focus 2016</p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-white/70 text-sm">Main Dealer Quote:</p>
            <p className="text-white">£385 (parts + labour)</p>
          </div>
          <div>
            <p className="text-white/70 text-sm">FixNow Mechanics:</p>
            <p className="text-white">£220 (same quality parts, fitted at his workplace)</p>
          </div>
        </div>
        <p className="text-green-400 font-bold">Saved: £165 + no time off work</p>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
      <p className="text-white/80 mb-4">
        For most common repairs and servicing, a mobile mechanic offers better value, more convenience, and equally professional 
        work compared to a traditional garage. You'll typically save 20-40% on costs and avoid the hassle of garage visits.
      </p>
      <p className="text-white/80 mb-4">
        However, for major work requiring specialist equipment or workshop facilities, a traditional garage is still the better 
        choice. The smart approach is to use mobile mechanics for routine maintenance and repairs, saving garages for when you 
        genuinely need workshop facilities.
      </p>
      <p className="text-white/80 mb-8">
        At FixNow Mechanics, we're transparent about what we can and can't do. If your job needs a garage, we'll tell you honestly. 
        But for 80% of repairs, we can save you time and money while delivering the same professional service.
      </p>
    </>
  );
}
