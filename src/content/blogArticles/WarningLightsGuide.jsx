import React from 'react';

export function WarningLightsGuide() {
  return (
    <>
      <p className="text-white/90 text-xl mb-6 font-medium">
        Modern cars have dozens of warning lights that can illuminate on your dashboard. Some indicate minor issues, 
        while others signal serious problems that need immediate attention. Here's what you need to know.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">1. Engine Management Light (Check Engine Light) ⚠️</h2>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it looks like:</strong> Usually amber/yellow engine symbol
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it means:</strong> The engine control unit has detected a fault. This could be anything 
        from a loose fuel cap to a serious engine problem. The light can be steady or flashing.
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">Urgency:</strong> If steady - get it checked within a few days. If flashing - stop driving 
        immediately as this indicates a serious problem like misfiring that could damage your catalytic converter.
      </p>
      <p className="text-white/80 mb-6">
        <strong className="text-white">What to do:</strong> Book a diagnostic visit. We'll scan your car's computer to read the fault 
        codes and explain exactly what's wrong. Diagnostic visits from £15-£25 depending on your location.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">2. Brake Warning Light 🛑</h2>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it looks like:</strong> Red circle with "BRAKE" or exclamation mark in circle
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it means:</strong> Either your brake fluid is low, there's a fault in the braking system, 
        or you've left your handbrake on (easy mistake!).
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">Urgency:</strong> HIGH - Do not ignore this. Check your handbrake first. If it's not that, 
        check brake fluid level. If low, you may have a leak. Do not drive with this light on.
      </p>
      <p className="text-white/80 mb-6">
        <strong className="text-white">What to do:</strong> If you've checked the handbrake and fluid level and the light stays on, 
        call us immediately. We can come to your location to inspect the brakes safely.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">3. ABS Warning Light</h2>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it looks like:</strong> Letters "ABS" inside a circle, usually amber
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it means:</strong> Your Anti-lock Braking System has a fault. Your brakes will still work, 
        but the ABS function (which prevents wheel lock-up during emergency braking) won't operate.
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">Urgency:</strong> MEDIUM - You can drive carefully, but get it checked soon. Often caused by 
        faulty wheel speed sensors.
      </p>
      <p className="text-white/80 mb-6">
        <strong className="text-white">What to do:</strong> Book a diagnostic check. Common fixes include cleaning or replacing ABS 
        sensors (usually £60-£120 for sensor replacement).
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">4. Battery/Charging System Light 🔋</h2>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it looks like:</strong> Battery symbol, usually red
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it means:</strong> Your battery isn't being charged properly. Could be a faulty alternator, 
        broken drive belt, or battery connection issue.
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">Urgency:</strong> HIGH - Your car is running on battery power only. You may have 30 minutes 
        to an hour before it dies completely.
      </p>
      <p className="text-white/80 mb-6">
        <strong className="text-white">What to do:</strong> Turn off all non-essential electrics (radio, AC, heated seats). Drive 
        straight home or to a safe location. Call us - we can test your battery and alternator at your location.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">5. Oil Pressure Warning Light 🛢️</h2>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it looks like:</strong> Old-fashioned oil can, usually red
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it means:</strong> Your engine oil pressure is dangerously low. This is one of the most 
        serious warning lights as driving without oil pressure will destroy your engine in minutes.
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">Urgency:</strong> CRITICAL - Stop the engine immediately. Do not drive.
      </p>
      <p className="text-white/80 mb-6">
        <strong className="text-white">What to do:</strong> Stop safely, turn off the engine. Check oil level when engine is cool. 
        If low, top up. If full, do not start the engine - you may have an oil pump failure or serious leak. Call for recovery or 
        mobile mechanic assistance.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">6. Coolant Temperature Warning Light 🌡️</h2>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it looks like:</strong> Thermometer in liquid or "TEMP", usually red
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it means:</strong> Your engine is overheating. Could be low coolant, failed thermostat, 
        broken water pump, or blocked radiator.
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">Urgency:</strong> CRITICAL - Stop driving immediately. Overheating can warp your cylinder head 
        and cause thousands in damage.
      </p>
      <p className="text-white/80 mb-6">
        <strong className="text-white">What to do:</strong> Pull over safely, turn off engine. Do NOT open coolant cap when hot. 
        Wait 30+ minutes to cool. Check coolant level when safe. If empty, you have a leak. Call for assistance.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">7. Tyre Pressure Monitoring System (TPMS) Light</h2>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it looks like:</strong> Cross-section of a tyre with exclamation mark, usually amber
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it means:</strong> One or more of your tyres is significantly under-inflated, or the 
        TPMS sensor has failed.
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">Urgency:</strong> MEDIUM - Check tyre pressures as soon as possible. Driving on under-inflated 
        tyres reduces fuel economy and can cause tyre failure.
      </p>
      <p className="text-white/80 mb-6">
        <strong className="text-white">What to do:</strong> Check all tyre pressures (including spare). Inflate to recommended 
        pressure (found in door jamb or manual). If light stays on, sensor may need replacement.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">8. Airbag Warning Light</h2>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it looks like:</strong> Person with circle in front (airbag deploying), usually red
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it means:</strong> Fault in the airbag system. Your airbags may not deploy in a crash, 
        or could deploy unexpectedly.
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">Urgency:</strong> MEDIUM-HIGH - You can drive, but your safety system is compromised. Get it 
        checked within a few days.
      </p>
      <p className="text-white/80 mb-6">
        <strong className="text-white">What to do:</strong> Book a diagnostic check. Common causes include faulty seat belt 
        pretensioners, airbag sensors, or wiring issues.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">9. Diesel Particulate Filter (DPF) Light</h2>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it looks like:</strong> Box with dots inside, usually amber
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it means:</strong> Your DPF is getting blocked with soot and needs regeneration. Common 
        on diesel cars used mainly for short trips.
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">Urgency:</strong> MEDIUM - Act within a day or two before it becomes more serious.
      </p>
      <p className="text-white/80 mb-6">
        <strong className="text-white">What to do:</strong> Take the car for a 20-30 minute drive at 40mph+ on a dual carriageway 
        to force regeneration. If light stays on, you may need professional DPF cleaning or replacement.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">10. Power Steering Warning Light</h2>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it looks like:</strong> Steering wheel with exclamation mark, usually red or amber
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">What it means:</strong> Fault in the power steering system. Steering will become heavy and 
        require much more force to turn.
      </p>
      <p className="text-white/80 mb-4">
        <strong className="text-white">Urgency:</strong> MEDIUM-HIGH - You can still steer, but it will be very difficult at low 
        speeds. Avoid driving if possible.
      </p>
      <p className="text-white/80 mb-6">
        <strong className="text-white">What to do:</strong> Check power steering fluid level if your car has hydraulic steering. 
        For electric power steering, book a diagnostic check. Common causes include pump failure or sensor faults.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">Quick Reference Guide</h2>
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
        <p className="text-white font-bold mb-4">🔴 STOP IMMEDIATELY:</p>
        <ul className="list-disc list-inside text-white/80 space-y-2 mb-6">
          <li>Oil pressure warning light</li>
          <li>Coolant temperature warning (red)</li>
          <li>Brake warning light (when handbrake is off)</li>
          <li>Flashing engine management light</li>
        </ul>

        <p className="text-white font-bold mb-4">🟡 GET CHECKED WITHIN A FEW DAYS:</p>
        <ul className="list-disc list-inside text-white/80 space-y-2 mb-6">
          <li>Steady engine management light</li>
          <li>ABS warning light</li>
          <li>Airbag warning light</li>
          <li>TPMS light (after checking pressures)</li>
          <li>DPF warning light</li>
        </ul>

        <p className="text-white font-bold mb-4">🟠 ADDRESS SOON BUT NOT URGENT:</p>
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>Service reminder</li>
          <li>Washer fluid low</li>
          <li>Minor electrical faults</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">How We Can Help</h2>
      <p className="text-white/80 mb-4">
        At FixNow Mechanics, we come to your location with professional diagnostic equipment to identify exactly what's causing 
        your warning lights. Our diagnostic visits cost £15-£25 depending on distance, and we'll provide a clear explanation 
        of the problem and a transparent quote for repairs.
      </p>
      <p className="text-white/80 mb-4">
        We cover Hemel Hempstead, Watford, St Albans, Luton, Milton Keynes, Aylesbury, and surrounding areas. Same-day service 
        often available for urgent issues.
      </p>
      <p className="text-white/80 mb-8">
        <strong className="text-white">Don't ignore warning lights.</strong> What starts as a small issue can become an expensive 
        repair if left too long. Call us today for professional diagnostic service at your location.
      </p>
    </>
  );
}
