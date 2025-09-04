// Vercel Serverless Function: /api/compose.js
// Uses OPENAI_API_KEY (set in Vercel Project Settings → Environment Variables)
// Returns JSON: { message: "..." }

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { input } = req.body || {};
    if (!input || typeof input !== 'string') return res.status(400).json({ error: 'No input' });

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return res.status(503).json({ error: 'Missing OPENAI_API_KEY' });

    const prompt = [
      { role: 'system', content: `You are a service intake assistant for a mobile mechanic in Greater London & Hertfordshire. 
Return a concise WhatsApp-ready booking. Use new lines in this exact order:
"Booking — <service>"
"Make/Model: <...>"
"Reg: <...>"
"Postcode: <...>"
"When: <...>"
"Notes: <...>"
Use [reg?], [postcode?], [when?] if not provided.` },
      { role: 'user', content: input }
    ];

    const rsp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        temperature: 0.2,
        messages: prompt
      })
    });

    if (!rsp.ok) {
      const text = await rsp.text();
      return res.status(500).json({ error: 'Upstream error', detail: text });
    }
    const data = await rsp.json();
    const message = data?.choices?.[0]?.message?.content || input;
    res.status(200).json({ message });
  } catch (e) {
    res.status(500).json({ error: 'Server error', detail: String(e) });
  }
}
