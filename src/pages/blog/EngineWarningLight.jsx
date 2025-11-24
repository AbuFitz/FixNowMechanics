import React from 'react';
import BlogPost from '../../components/BlogPost';
import { getBlogPostBySlug } from '../../constants/blogPosts';
import { CheckCircle2, AlertTriangle, Wrench, DollarSign } from 'lucide-react';

export default function EngineWarningLightPost() {
  const post = getBlogPostBySlug('engine-warning-light-guide');

  const content = (
    <div className="space-y-6">
      <p className="text-xl text-white/90 leading-relaxed">
        That glowing engine warning light on your dashboard isn't something to ignore - but it doesn't always mean disaster either. Understanding what it means can save you from unnecessary panic or expensive mistakes.
      </p>

      <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-xl p-6 my-8">
        <div className="flex items-start gap-4">
          <AlertTriangle size={28} className="flex-shrink-0 text-yellow-500 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Quick Action Guide</h3>
            <p className="text-white/80">
              <strong>Solid amber light:</strong> Get it checked soon (within a few days)<br/>
              <strong>Flashing amber light:</strong> Stop driving when safe and get immediate help<br/>
              <strong>Red warning light:</strong> Stop immediately - serious engine damage risk
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-4">What Does the Engine Warning Light Actually Mean?</h2>
      
      <p>
        The engine warning light (also called the check engine light or malfunction indicator lamp) is connected to your car's engine management system. When sensors detect something outside normal parameters, the light comes on.
      </p>

      <p>
        Here's the important part: <strong>it doesn't tell you what's wrong</strong> - only that something has been detected. The actual fault code is stored in your car's ECU (Engine Control Unit) and requires a diagnostic scan to read.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-4">Common Causes (From Most to Least Likely)</h2>

      <div className="space-y-6 my-8">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
            <span className="text-yellow-400">1.</span> Oxygen Sensor Fault
          </h3>
          <p className="text-white/80 mb-3">
            <strong>What it is:</strong> Sensors that monitor exhaust gases to optimize fuel mixture
          </p>
          <p className="text-white/70">
            <strong>Symptoms:</strong> Poor fuel economy, rough idle<br/>
            <strong>Urgency:</strong> Low - won't leave you stranded but should be fixed<br/>
            <strong>Typical cost:</strong> £80-£200 (sensor + fitting)
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
            <span className="text-yellow-400">2.</span> MAF Sensor (Mass Airflow Sensor)
          </h3>
          <p className="text-white/80 mb-3">
            <strong>What it is:</strong> Measures air entering the engine to calculate correct fuel amount
          </p>
          <p className="text-white/70">
            <strong>Symptoms:</strong> Hesitation, poor acceleration, rough running<br/>
            <strong>Urgency:</strong> Medium - car will run but poorly<br/>
            <strong>Typical cost:</strong> £100-£300 depending on vehicle
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
            <span className="text-yellow-400">3.</span> Loose or Faulty Fuel Cap
          </h3>
          <p className="text-white/80 mb-3">
            <strong>What it is:</strong> Fuel cap not sealing properly causes EVAP system fault
          </p>
          <p className="text-white/70">
            <strong>Symptoms:</strong> Often none - just the light<br/>
            <strong>Urgency:</strong> Very low - try tightening cap first<br/>
            <strong>Typical cost:</strong> £0 (tighten) to £15 (new cap)
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
            <span className="text-yellow-400">4.</span> Catalytic Converter Issues
          </h3>
          <p className="text-white/80 mb-3">
            <strong>What it is:</strong> Exhaust component that reduces emissions failing
          </p>
          <p className="text-white/70">
            <strong>Symptoms:</strong> Reduced power, poor fuel economy, rotten egg smell<br/>
            <strong>Urgency:</strong> Medium - MOT fail, can cause further damage<br/>
            <strong>Typical cost:</strong> £300-£1000+ (expensive part)
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
            <span className="text-yellow-400">5.</span> Spark Plugs / Ignition Coils
          </h3>
          <p className="text-white/80 mb-3">
            <strong>What it is:</strong> Components that create the spark to ignite fuel
          </p>
          <p className="text-white/70">
            <strong>Symptoms:</strong> Misfiring, rough idle, power loss<br/>
            <strong>Urgency:</strong> Medium - can damage catalytic converter if ignored<br/>
            <strong>Typical cost:</strong> £80-£250 depending on number of cylinders
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-4">What Should You Do When the Light Comes On?</h2>

      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <CheckCircle2 size={24} className="flex-shrink-0 text-green-500 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Step 1: Check if it's flashing</h3>
            <p className="text-white/80">
              A <strong>flashing</strong> light means serious misfiring - stop when safe and get help. 
              A <strong>solid</strong> light means you can continue driving but need it checked.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <CheckCircle2 size={24} className="flex-shrink-0 text-green-500 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Step 2: Check your fuel cap</h3>
            <p className="text-white/80">
              Remove and tighten your fuel cap until it clicks. Drive for a day or two - if it was just a loose cap, the light will turn off.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <CheckCircle2 size={24} className="flex-shrink-0 text-green-500 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Step 3: Get a diagnostic scan</h3>
            <p className="text-white/80">
              Don't guess. A proper diagnostic scan reads the fault codes and tells you exactly what's wrong. 
              This prevents unnecessary repairs and saves money in the long run.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <CheckCircle2 size={24} className="flex-shrink-0 text-green-500 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Step 4: Make an informed decision</h3>
            <p className="text-white/80">
              Once you know the fault code, you can research the issue, get quotes, and decide whether to DIY or use a professional. 
              Some fixes are simple, others need specialist tools.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-500/10 border-2 border-blue-500/30 rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-white mb-3">Why a Diagnostic Check Saves Money</h3>
        <p className="text-white/80 mb-4">
          Many people skip the diagnostic and just start replacing parts. This is expensive guesswork. A diagnostic check costs £15-£25 but can save hundreds by identifying the exact problem first time.
        </p>
        <p className="text-white/80">
          <strong>Example:</strong> "Rough running" could be spark plugs (£80), coil packs (£150), MAF sensor (£200), or fuel injectors (£400+). 
          Guessing wrong wastes money. A diagnostic tells you exactly which one.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-4">Can You Drive With the Engine Light On?</h2>

      <p>
        It depends. Here's when you <strong>can</strong> and <strong>can't</strong> continue driving:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <span className="text-red-500">⛔</span> Stop Driving If:
          </h3>
          <ul className="space-y-2 text-white/80">
            <li>• Light is <strong>flashing</strong></li>
            <li>• Engine is overheating</li>
            <li>• You hear loud knocking/rattling</li>
            <li>• Severe loss of power</li>
            <li>• Oil pressure warning also on</li>
            <li>• Smoke from exhaust</li>
          </ul>
        </div>

        <div className="bg-green-500/10 border-2 border-green-500/30 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <span className="text-green-500">✓</span> Safe to Continue If:
          </h3>
          <ul className="space-y-2 text-white/80">
            <li>• Light is <strong>solid amber</strong></li>
            <li>• Car drives normally</li>
            <li>• No unusual noises</li>
            <li>• Normal power and performance</li>
            <li>• No other warning lights</li>
            <li>• (But get checked within a week)</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-4">Will It Pass an MOT?</h2>

      <p>
        <strong>No.</strong> Any engine warning light on during MOT is an automatic fail, even if the car is driving fine. 
        The fault must be diagnosed and cleared before the test.
      </p>

      <p>
        Some people try to clear the codes just before MOT, but this often doesn't work - the testing station can see if codes were recently cleared, and the fault may return during the test drive anyway.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-4">How We Can Help</h2>

      <p>
        At FixNow Mechanics, our diagnostic service includes:
      </p>

      <div className="space-y-3 my-6">
        <div className="flex items-start gap-3">
          <Wrench size={20} className="flex-shrink-0 text-yellow-400 mt-1" />
          <span className="text-white/80"><strong>Full system scan</strong> - not just engine codes but ABS, airbag, transmission if applicable</span>
        </div>
        <div className="flex items-start gap-3">
          <Wrench size={20} className="flex-shrink-0 text-yellow-400 mt-1" />
          <span className="text-white/80"><strong>Live data analysis</strong> - we can see what sensors are reporting in real-time</span>
        </div>
        <div className="flex items-start gap-3">
          <Wrench size={20} className="flex-shrink-0 text-yellow-400 mt-1" />
          <span className="text-white/80"><strong>Clear explanation</strong> - we explain what's wrong in plain English</span>
        </div>
        <div className="flex items-start gap-3">
          <Wrench size={20} className="flex-shrink-0 text-yellow-400 mt-1" />
          <span className="text-white/80"><strong>Transparent quote</strong> - exact repair costs before any work starts</span>
        </div>
        <div className="flex items-start gap-3">
          <Wrench size={20} className="flex-shrink-0 text-yellow-400 mt-1" />
          <span className="text-white/80"><strong>At your location</strong> - we come to your driveway, workplace, or roadside</span>
        </div>
      </div>

      <p>
        Our diagnostic visit costs £15-£25 depending on distance, and £10 is deducted from labour if you proceed with the repair.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-4">Key Takeaways</h2>

      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="flex-shrink-0 text-yellow-400 mt-1" />
            <span className="text-white/80">A solid amber light means get it checked soon - flashing means stop now</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="flex-shrink-0 text-yellow-400 mt-1" />
            <span className="text-white/80">Try tightening your fuel cap first - it's free and fixes ~5% of cases</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="flex-shrink-0 text-yellow-400 mt-1" />
            <span className="text-white/80">Always get a diagnostic scan before replacing parts - saves money</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="flex-shrink-0 text-yellow-400 mt-1" />
            <span className="text-white/80">Most common causes are oxygen sensors, MAF sensors, and spark plugs</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="flex-shrink-0 text-yellow-400 mt-1" />
            <span className="text-white/80">An engine light on is an automatic MOT fail</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 size={20} className="flex-shrink-0 text-yellow-400 mt-1" />
            <span className="text-white/80">Mobile diagnostics mean no recovery fees or time wasted at garages</span>
          </li>
        </ul>
      </div>

      <p className="text-lg text-white/90 mt-8">
        Don't ignore your engine warning light, but don't panic either. Get it diagnosed properly, understand what needs fixing, and make an informed decision. We're here to help with honest advice and transparent pricing.
      </p>
    </div>
  );

  return <BlogPost post={post} content={content} />;
}
