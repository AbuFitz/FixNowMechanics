# FixNow Mechanics — AI-powered WhatsApp intake (Vercel)

**What this does**
- Popup **AI assistant** turns a customer's free text into a clean WhatsApp message to 447444255968.
- If the AI API is not configured, it **falls back** to a simple local formatter.

**Deploy**
1) Upload to GitHub → Vercel auto-deploys.
2) In Vercel: Project → **Settings → Environment Variables**:
   - `OPENAI_API_KEY` = your key
   - (optional) `OPENAI_MODEL` = `gpt-4o-mini`
3) Redeploy. That’s it.

**Files**
- `index.html` — site + popup AI UI
- `api/compose.js` — Vercel serverless function calling OpenAI
- `assets/logo.svg`, `assets/favicon.svg`
- `robots.txt`, `sitemap.xml`
