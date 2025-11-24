import React from 'react';
import BlogPost from '../../components/BlogPost';
import { getBlogPostBySlug } from '../../constants/blogPosts';
import { CheckCircle2, X, DollarSign, Clock, Wrench } from 'lucide-react';

export default function MobileMechanicVsGaragePost() {
  const post = getBlogPostBySlug('mobile-mechanic-vs-garage');

  const content = (
    <div className="space-y-6">
      <p className="text-xl text-white/90 leading-relaxed">
        Mobile mechanics are growing in popularity, but are they actually cheaper than traditional garages? We break down the real costs including hidden fees most people forget about.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Real Cost Comparison</h2>

      <p>
        When comparing mobile mechanics to traditional garages, most people only look at the labour rate. But that's just part of the story. Here's what the full cost actually looks like:
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-yellow-500">
              <th className="p-4 text-white font-bold">Cost Factor</th>
              <th className="p-4 text-white font-bold">Traditional Garage</th>
              <th className="p-4 text-white font-bold">Mobile Mechanic</th>
            </tr>
          </thead>
          <tbody className="text-white/80">
            <tr className="border-b border-white/10">
              <td className="p-4 font-semibold">Labour Rate (per hour)</td>
              <td className="p-4">£50-£90</td>
              <td className="p-4">£40-£70</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-4 font-semibold">Callout/Diagnostic Fee</td>
              <td className="p-4">£40-£80</td>
              <td className="p-4">£15-£25</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-4 font-semibold">Recovery Costs</td>
              <td className="p-4 bg-red-500/10">£80-£150 (if needed)</td>
              <td className="p-4 bg-green-500/10">£0</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-4 font-semibold">Courtesy Car/Transport</td>
              <td className="p-4">£20-£40 or take day off work</td>
              <td className="p-4 bg-green-500/10">£0 (done at your location)</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-4 font-semibold">Parts Markup</td>
              <td className="p-4">30-50% typical</td>
              <td className="p-4">20-30% or supply your own</td>
            </tr>
            <tr className="border-b border-white/10 bg-yellow-500/10">
              <td className="p-4 font-bold">Average Total (£300 job)</td>
              <td className="p-4 font-bold">£380-£520</td>
              <td className="p-4 font-bold">£300-£380</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-white mb-3">Real Example: Brake Pads Replacement</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-white mb-3">Traditional Garage:</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Labour: £120 (1.5 hours @ £80/hr)</li>
              <li>Parts: £80 (£60 pads + 33% markup)</li>
              <li>Diagnostic fee: £60</li>
              <li>Recovery (car won't move): £120</li>
              <li>Day off work: £80 (opportunity cost)</li>
              <li className="pt-2 border-t border-white/20 font-bold text-lg">Total: £460</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">Mobile Mechanic:</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Labour: £100 (1.5 hours @ £65/hr)</li>
              <li>Parts: £70 (£60 pads + 15% markup)</li>
              <li>Callout fee: £20 (deducted from labour)</li>
              <li>Recovery: £0 (we come to you)</li>
              <li>Time off work: £0 (done at your driveway)</li>
              <li className="pt-2 border-t border-white/20 font-bold text-lg text-green-400">Total: £170</li>
            </ul>
          </div>
        </div>
        <p className="text-white/80 mt-4 text-center font-bold">
          💰 Savings: £290 (63% cheaper)
        </p>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-4">When a Mobile Mechanic Makes Sense</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-green-500/10 border-2 border-green-500/30 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-green-500" /> Perfect For Mobile:
          </h3>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span><strong>Diagnostics</strong> - can be done anywhere</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span><strong>Battery replacement</strong> - 20 minute job</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span><strong>Brake pads/discs</strong> - no special equipment needed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span><strong>Oil & filter service</strong> - straightforward</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span><strong>Spark plugs</strong> - basic tools only</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span><strong>Suspension components</strong> - springs, shocks, drop links</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span><strong>Sensor replacements</strong> - MAF, O2, ABS sensors</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span><strong>Alternator/starter motor</strong> - if accessible</span>
            </li>
          </ul>
        </div>

        <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <X className="text-red-500" /> Better at a Garage:
          </h3>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span><strong>Clutch replacement</strong> - needs lift and specialist tools</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span><strong>Gearbox removal</strong> - requires heavy equipment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span><strong>Head gasket</strong> - major engine work</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span><strong>Timing belt</strong> - often requires engine removal</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span><strong>Wheel alignment</strong> - needs 4-wheel laser alignment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span><strong>Bodywork/paint</strong> - needs booth and equipment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span><strong>MOT testing</strong> - only approved test centers</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-4">Quality & Equipment: What About the Garage Advantage?</h2>

      <p>
        The common concern: "Surely garages have better equipment?" Let's address this honestly:
      </p>

      <div className="space-y-6 my-8">
        <div className="bg-white/5 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-3">Diagnostic Equipment</h3>
          <p className="text-white/80">
            <strong>Myth:</strong> Garages have better scanners<br/>
            <strong>Reality:</strong> Professional mobile mechanics use the same OBD2 scanners as garages (Snap-On, Launch, etc.). 
            The £2,000+ scanners we use read exactly the same data as garage equipment.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-3">Lifting Equipment</h3>
          <p className="text-white/80">
            <strong>Myth:</strong> You need a lift for most jobs<br/>
            <strong>Reality:</strong> 80% of common repairs (brakes, suspension, batteries, sensors, services) can be done with jack stands and ramps. 
            Mobile mechanics bring proper equipment - not DIY tools from Halfords.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-3">Specialist Tools</h3>
          <p className="text-white/80">
            <strong>Myth:</strong> Garages have every specialist tool<br/>
            <strong>Reality:</strong> Most garages hire or borrow specialist tools for specific jobs anyway. 
            Mobile mechanics do the same - and pass savings to you because we don't have £3,000/month rent to cover.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Convenience Factor (Often Overlooked)</h2>

      <p>
        Beyond direct costs, there's massive value in the convenience of mobile mechanics that people underestimate:
      </p>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4">
          <Clock size={24} className="flex-shrink-0 text-yellow-400 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-white mb-2">No Time Wasted</h3>
            <p className="text-white/80">
              Dropping car off, arranging pickup, waiting around at garages - this easily adds 2-3 hours to any garage visit. 
              With mobile mechanics, you continue your day while work happens at your location.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <DollarSign size={24} className="flex-shrink-0 text-yellow-400 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-white mb-2">No Lost Income</h3>
            <p className="text-white/80">
              Taking half a day off work for a garage visit costs many people £50-£100 in lost income. 
              Mobile mechanics work around your schedule - evening and weekend appointments available.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Wrench size={24} className="flex-shrink-0 text-yellow-400 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Transparency</h3>
            <p className="text-white/80">
              You can watch the work being done if you want. No "while we had it in, we noticed..." surprise bills. 
              Everything is agreed upfront with you present.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-4">Potential Downsides of Mobile Mechanics</h2>

      <p>
        To be completely honest, there are some situations where a traditional garage might be better:
      </p>

      <div className="space-y-4 my-6 bg-white/5 rounded-xl p-6">
        <div>
          <h3 className="font-bold text-white mb-2">❌ Limited Weather Protection</h3>
          <p className="text-white/70">
            Heavy rain can make outdoor work difficult. Most mobile mechanics will reschedule if weather is too bad, 
            which can be inconvenient if you need urgent work.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-white mb-2">❌ Space Limitations</h3>
          <p className="text-white/70">
            Some driveways don't have enough space for safe working. If you live in a narrow street or have no parking, 
            a garage might be easier.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-white mb-2">❌ Multi-Day Jobs</h3>
          <p className="text-white/70">
            If a repair needs ordering parts and then a second visit, it might take longer overall than dropping at a garage for a few days. 
            Though mobile mechanics often collect parts while you use your car.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Verdict: Which Saves More Money?</h2>

      <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border-2 border-yellow-500/30 rounded-xl p-8 my-8">
        <h3 className="text-2xl font-bold text-white mb-4">For Common Repairs (80% of jobs)</h3>
        <p className="text-white/90 text-lg mb-4">
          <strong>Mobile mechanics typically save 30-60%</strong> when you factor in:
        </p>
        <ul className="space-y-2 text-white/80 mb-6">
          <li>• Lower labour rates (no premises costs to cover)</li>
          <li>• No recovery fees</li>
          <li>• No lost work time</li>
          <li>• Lower diagnostic fees</li>
          <li>• Option to supply your own parts</li>
        </ul>
        
        <h3 className="text-2xl font-bold text-white mb-4 mt-8">For Major Work (clutches, gearboxes, etc.)</h3>
        <p className="text-white/90 text-lg">
          <strong>Traditional garages may be similar or cheaper</strong> because they have the equipment already. 
          Mobile mechanics either can't do these jobs or would need to hire equipment, removing the cost advantage.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-4">How to Choose: Decision Framework</h2>

      <div className="bg-white/5 rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-white mb-4">Choose a Mobile Mechanic If:</h3>
        <ul className="space-y-2 text-white/80">
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="flex-shrink-0 text-green-500 mt-1" />
            <span>Your job is on the "perfect for mobile" list above</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="flex-shrink-0 text-green-500 mt-1" />
            <span>You value convenience and time savings</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="flex-shrink-0 text-green-500 mt-1" />
            <span>You want to watch the work being done</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="flex-shrink-0 text-green-500 mt-1" />
            <span>Your car can't move (breakdown, seized brakes, etc.)</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="flex-shrink-0 text-green-500 mt-1" />
            <span>You want competitive pricing with transparency</span>
          </li>
        </ul>
      </div>

      <div className="bg-white/5 rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-white mb-4">Choose a Traditional Garage If:</h3>
        <ul className="space-y-2 text-white/80">
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="flex-shrink-0 text-yellow-400 mt-1" />
            <span>You need major engine/gearbox work</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="flex-shrink-0 text-yellow-400 mt-1" />
            <span>You need wheel alignment or MOT</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="flex-shrink-0 text-yellow-400 mt-1" />
            <span>You have no suitable parking/workspace</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="flex-shrink-0 text-yellow-400 mt-1" />
            <span>You prefer dropping the car and collecting later</span>
          </li>
        </ul>
      </div>

      <p className="text-lg text-white/90 mt-8">
        The bottom line? For most common repairs, mobile mechanics offer significant savings and convenience. 
        For specialist or major work, traditional garages still have advantages. Choose based on your specific job and priorities.
      </p>
    </div>
  );

  return <BlogPost post={post} content={content} />;
}
