# Google Search Console Setup Guide
## FixNow Mechanics - Step-by-Step Instructions

---

## 🎯 **STEP 1: VERIFY YOUR WEBSITE**

### Go to: https://search.google.com/search-console

1. Click **"Add Property"**
2. Choose **"URL prefix"** (not Domain)
3. Enter: `https://fixnowmechanics.co.uk`
4. Click **Continue**

### Verification Method (Use DNS):
Since you're on Vercel, use DNS verification:

1. Click **"DNS record"** verification method
2. Copy the TXT record provided
3. Go to your domain registrar (where you bought fixnowmechanics.co.uk)
4. Add the TXT record to your DNS settings
5. Wait 5-10 minutes
6. Return to Search Console and click **"Verify"**

**Alternative:** HTML file upload (Vercel makes this easy)
1. Download the HTML verification file
2. Upload to `/workspaces/FixNowMechanics/public/`
3. Commit and push to deploy
4. Click "Verify" in Search Console

---

## 🎯 **STEP 2: SUBMIT YOUR SITEMAP**

**After verification is complete:**

1. In Google Search Console left menu, click **"Sitemaps"**
2. In the "Add a new sitemap" field, type: **`sitemap.xml`**
3. Click **"Submit"**

**❌ COMMON MISTAKES - Don't do these:**
- Don't enter the full URL: `https://fixnowmechanics.co.uk/sitemap.xml`
- Don't submit individual pages
- Don't submit `/locations/watford` etc.

**✅ CORRECT:**
- Just type: `sitemap.xml`
- Google will automatically add your domain

---

## 🎯 **STEP 3: REQUEST INDEXING FOR LOCATION PAGES**

To speed up indexing of your 9 location pages:

1. Click the **search bar at the top** of Search Console
2. Enter one URL at a time (copy these exactly):

```
https://fixnowmechanics.co.uk/locations/watford
https://fixnowmechanics.co.uk/locations/st-albans
https://fixnowmechanics.co.uk/locations/luton
https://fixnowmechanics.co.uk/locations/dunstable
https://fixnowmechanics.co.uk/locations/milton-keynes
https://fixnowmechanics.co.uk/locations/aylesbury
https://fixnowmechanics.co.uk/locations/stevenage
https://fixnowmechanics.co.uk/locations/hatfield
https://fixnowmechanics.co.uk/locations/north-london
```

3. Press **Enter** after each URL
4. If page is not indexed, click **"Request Indexing"**
5. Wait for confirmation (takes 1-5 minutes per page)
6. Repeat for all 9 pages

**Note:** You can only request indexing for ~10 pages per day, so do them over 1-2 days if needed.

---

## 🎯 **STEP 4: MONITOR PERFORMANCE**

After 1-2 weeks, check these reports:

### Performance Report
1. Go to **"Performance"** in left menu
2. Look for queries like:
   - "mobile mechanic watford"
   - "mobile mechanic luton"
   - "car mechanic st albans"
   - "mobile mechanic near me"

3. Check which pages are getting:
   - **Impressions** (people seeing your site in search)
   - **Clicks** (people clicking through)
   - **Average position** (where you rank)

### Coverage Report
1. Go to **"Coverage"** in left menu
2. Make sure all 9 location pages show as "Valid"
3. If any show errors, investigate and fix

### Sitemaps Report
1. Go to **"Sitemaps"**
2. Check that `sitemap.xml` shows:
   - Status: "Success"
   - Discovered URLs: ~15+ pages

---

## ⏱️ **TIMELINE & EXPECTATIONS**

### Week 1-2: Indexing Phase
- Google crawls and indexes your pages
- Check "Coverage" report to see indexed pages
- May not appear in searches yet

### Week 3-4: Discovery Phase  
- Start seeing "Impressions" in Performance report
- Your pages appear in search results (but may be on page 3-10)
- Low click-through rate initially

### Month 2-3: Ranking Phase
- Impressions increase
- Some keywords may reach page 1-2
- Better rankings in less competitive areas (Stevenage, Hatfield, Dunstable)

### Month 6+: Established Rankings
- Strong presence in local searches
- High impressions and clicks
- Ranking for multiple keyword variations

**⚠️ Important:** Search Console data alone won't make you rank!
You MUST also do:
- ✅ Google Business Profile setup
- ✅ Get customer reviews
- ✅ Post to GBP weekly
- ✅ Build local citations
- ✅ Create quality content

---

## 📊 **WHAT TO TRACK WEEKLY**

Create a simple spreadsheet to track:

| Week | Watford Impressions | Luton Impressions | St Albans Impressions | Total Clicks | Avg Position |
|------|---------------------|-------------------|----------------------|--------------|--------------|
| 1    | 0                   | 0                 | 0                    | 0            | -            |
| 2    | 15                  | 8                 | 12                   | 2            | 45           |
| 4    | 89                  | 56                | 67                   | 15           | 28           |
| 8    | 234                 | 189               | 198                  | 45           | 15           |

**Goal:** Consistent upward trend in all metrics

---

## 🚨 **TROUBLESHOOTING**

### "URL is not on Google"
**Fix:** Click "Request Indexing" and wait 3-7 days

### "Sitemap could not be read"
**Fix:** Make sure sitemap.xml is accessible at https://fixnowmechanics.co.uk/sitemap.xml

### "Coverage: Discovered - currently not indexed"
**Fix:** This is normal. Google knows about the page but hasn't indexed it yet. Be patient or request indexing.

### "Page with redirect"
**Fix:** Make sure your URLs don't redirect. Check that both http and https work properly.

### No impressions after 4 weeks
**Fix:** 
1. Check if pages are indexed (Coverage report)
2. Verify Google Business Profile is set up
3. Make sure you're targeting realistic keywords
4. Build more backlinks and citations

---

## 🎯 **QUICK WINS CHECKLIST**

**Do These Today:**
- [ ] Verify website in Search Console
- [ ] Submit sitemap.xml
- [ ] Request indexing for all 9 location pages
- [ ] Set up Google Business Profile
- [ ] Add all 9 service areas to GBP

**Do This Week:**
- [ ] Check Coverage report daily
- [ ] Request 3-5 customer reviews
- [ ] Post first Google Business Post
- [ ] Submit to Yell.com and FreeIndex

**Do This Month:**
- [ ] Monitor Performance report weekly
- [ ] Post to GBP 2x per week
- [ ] Get 10+ reviews
- [ ] Submit to 10+ directories
- [ ] Create location-specific content

---

## 📞 **SUPPORT RESOURCES**

- **Google Search Console Help:** https://support.google.com/webmasters
- **Verify ownership:** https://support.google.com/webmasters/answer/9008080
- **Submit sitemaps:** https://support.google.com/webmasters/answer/183668
- **Request indexing:** https://support.google.com/webmasters/answer/6065812

---

**Last Updated:** November 25, 2025
