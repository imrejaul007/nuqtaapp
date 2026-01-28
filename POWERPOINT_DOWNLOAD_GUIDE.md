# PowerPoint Download Guide

**Date**: January 28, 2026
**Status**: ✅ Multiple Download Options Available

---

## 📥 How Investors Can Download Your PowerPoint Files

You now have **5 different ways** for investors to access and download your PowerPoint presentations.

---

## Method 1: Direct Download from Website (NEW ✅)

### For Investors
Visit your website and click the download links in the footer:

**Landing Page**: http://localhost:3000/
- Scroll to footer → Resources section
- Click "Pitch Deck (PPT)" to download the full 27-slide deck
- Click "One-Pager (PPT)" to download the 6-slide one-pager

### Direct Links
- **Full Deck**: http://localhost:3000/Nuqta-Pitch-Deck-2026.pptx
- **One-Pager**: http://localhost:3000/Nuqta-Investor-One-Pager-2026.pptx

### Files Location
Both files are now in the `public/` directory, making them accessible via your website:
- `/public/Nuqta-Pitch-Deck-2026.pptx` (241KB)
- `/public/Nuqta-Investor-One-Pager-2026.pptx` (104KB)

---

## Method 2: Email Attachment

### For You
Attach the files directly to investor emails:

```bash
# Files are in the root directory
Nuqta-Pitch-Deck-2026.pptx (241KB)
Nuqta-Investor-One-Pager-2026.pptx (104KB)
```

### Email Template with Attachments
```
Subject: Nuqta - $500K Pre-Seed | Pitch Deck & One-Pager

Hi [Investor Name],

Attached are two PowerPoint presentations for Nuqta:

1. Full Pitch Deck (27 slides, 241KB) - Complete presentation
2. Investor One-Pager (6 slides, 104KB) - Quick reference

Key Highlights:
• $150B GCC offline commerce opportunity
• 10% cashback for users | 3x better margins for merchants
• 30+ signed LOIs | 95% MVP | Q1 2026 launch
• Raising $500K pre-seed @ $6M cap, 20% discount

Would love 15 minutes to discuss.

Best regards,
Rejaul Karim
rejaul@nuqtaapp.com
```

**Pros**:
- ✅ Immediate access
- ✅ Works with all email clients
- ✅ No internet required to view
- ✅ Professional and direct

**Cons**:
- ❌ File size limits (both under 250KB ✓)
- ❌ Can't track opens/views

---

## Method 3: Cloud Storage Links

### Option A: Google Drive

1. **Upload Files**:
   ```bash
   # Upload both PowerPoint files to Google Drive
   # Organize in: Drive > Nuqta > Investor Materials > PowerPoint
   ```

2. **Share Settings**:
   - Right-click → Get link
   - Change to "Anyone with the link can view"
   - Copy link

3. **Share with Investors**:
   ```
   Full Pitch Deck:
   https://drive.google.com/file/d/YOUR_FILE_ID/view

   Investor One-Pager:
   https://drive.google.com/file/d/YOUR_FILE_ID/view
   ```

**Pros**:
- ✅ No file size limits
- ✅ Easy to update files
- ✅ Basic view tracking (who accessed)
- ✅ Familiar platform

### Option B: Dropbox

1. **Upload Files**:
   ```bash
   # Upload to Dropbox > Nuqta > Investor Materials
   ```

2. **Create Shareable Links**:
   - Right-click → Share
   - Create link
   - Copy to clipboard

3. **Direct Download Links**:
   ```
   Full Pitch Deck:
   https://www.dropbox.com/s/YOUR_LINK_ID/Nuqta-Pitch-Deck-2026.pptx?dl=1

   Investor One-Pager:
   https://www.dropbox.com/s/YOUR_LINK_ID/Nuqta-Investor-One-Pager-2026.pptx?dl=1
   ```

**Note**: Add `?dl=1` at the end to force download instead of preview.

**Pros**:
- ✅ Automatic syncing
- ✅ Simple sharing
- ✅ Download tracking available

### Option C: OneDrive (Microsoft)

Similar to Google Drive, upload and share with investors.

---

## Method 4: DocSend (Recommended for Tracking)

### Why DocSend?
DocSend is the **gold standard** for investor pitch deck distribution with powerful analytics.

### Setup Steps:

1. **Sign Up**: https://www.docsend.com/ (Free trial available)

2. **Upload Your Files**:
   - Upload `Nuqta-Pitch-Deck-2026.pptx`
   - Upload `Nuqta-Investor-One-Pager-2026.pptx`

3. **Configure Settings**:
   - Enable email gate (collect investor emails)
   - Require NDA (optional)
   - Set expiration dates (optional)
   - Enable download (or view-only)

4. **Get Shareable Links**:
   ```
   Full Deck: https://docsend.com/view/YOUR_UNIQUE_ID
   One-Pager: https://docsend.com/view/YOUR_UNIQUE_ID
   ```

### Analytics You'll See:
- 📊 **Page-by-Page Views**: Which slides investors spend time on
- ⏱️ **Time Spent**: How long they viewed each slide
- 📍 **Geographic Location**: Where they're viewing from
- 📧 **Email Tracking**: Who opened, when, and how many times
- 📤 **Forward Tracking**: If they share with other investors
- 📱 **Device Tracking**: Desktop vs mobile views

### Example DocSend Stats:
```
Investor: john@vc-firm.com
First Opened: Jan 28, 2026, 2:15 PM
Total Views: 3
Time Spent: 14 minutes
Completion: 92% (stopped at slide 25/27)
Shared With: 2 other people
Location: San Francisco, CA
Device: Desktop (Chrome)
```

**Pros**:
- ✅ Detailed analytics
- ✅ Professional appearance
- ✅ Email collection
- ✅ NDA support
- ✅ Industry standard for VCs

**Cons**:
- ❌ Paid service ($10-50/month depending on plan)
- ❌ Investors need internet to view

---

## Method 5: GitHub Releases (For Tech-Savvy Investors)

Since your project is already on GitHub, you can create a release:

### Steps:

1. **Create a Release on GitHub**:
   ```bash
   git tag -a v1.0-pitch-deck -m "Nuqta Pitch Deck & One-Pager PowerPoint Export"
   git push origin v1.0-pitch-deck
   ```

2. **Upload Files to Release**:
   - Go to GitHub → Releases → Create new release
   - Upload both `.pptx` files
   - Write release notes

3. **Share Download Link**:
   ```
   https://github.com/imrejaul007/nuqtaapp/releases/download/v1.0-pitch-deck/Nuqta-Pitch-Deck-2026.pptx
   ```

**Pros**:
- ✅ Version control
- ✅ Free hosting
- ✅ Download tracking

**Cons**:
- ❌ Public repository (anyone can access)
- ❌ Less professional for traditional investors

---

## Method 6: Your Own Website (Already Implemented ✅)

### Current Setup:
Download links are now available in the footer of your landing page at:
- http://localhost:3000/

### How It Works:
1. PowerPoint files are in `/public/` directory
2. Next.js serves them as static assets
3. Investors click "Pitch Deck (PPT)" or "One-Pager (PPT)"
4. Browser downloads the file automatically

### When Deployed (Production):
Once you deploy to production (Vercel, Netlify, etc.), the links will be:
- `https://nuqtaapp.com/Nuqta-Pitch-Deck-2026.pptx`
- `https://nuqtaapp.com/Nuqta-Investor-One-Pager-2026.pptx`

**Pros**:
- ✅ Professional (your own domain)
- ✅ Easy to update files
- ✅ Fast CDN delivery
- ✅ No third-party dependency

**Cons**:
- ❌ No analytics (unless you add tracking)
- ❌ Public access (anyone can download)

---

## 🎯 Recommended Strategy

### For Different Investor Types:

#### 1. Cold Outreach (First Contact)
**Use**: Email attachment (One-Pager only)
**Why**: Low barrier, immediate access
**File**: Nuqta-Investor-One-Pager-2026.pptx (104KB)

#### 2. Warm Introduction (Referred by Friend)
**Use**: DocSend link (Full Deck)
**Why**: Professional, shows traction, trackable
**File**: Full 27-slide deck via DocSend

#### 3. After Initial Call (Follow-Up)
**Use**: Both files via email + DocSend link
**Why**: Give them options, track engagement
**Files**: Both deck and one-pager

#### 4. Website Visitors (Organic Interest)
**Use**: Direct download from footer
**Why**: Convenient, builds credibility
**Location**: http://localhost:3000/ (footer)

#### 5. Pitch Competition Submission
**Use**: Cloud storage link (Google Drive/Dropbox)
**Why**: Reliable, won't hit email size limits
**File**: Usually full deck required

---

## 📊 Tracking & Analytics Comparison

| Method | View Tracking | Download Tracking | Email Collection | Page-Level Data | Cost |
|--------|--------------|-------------------|------------------|-----------------|------|
| **Email Attachment** | ❌ No | ❌ No | ✓ Have it | ❌ No | Free |
| **Google Drive** | ✓ Basic | ✓ Yes | ❌ No | ❌ No | Free |
| **Dropbox** | ✓ Basic | ✓ Yes | ❌ No | ❌ No | Free |
| **DocSend** | ✓✓✓ Advanced | ✓ Yes | ✓ Yes | ✓✓✓ Yes | Paid |
| **GitHub Releases** | ✓ Basic | ✓ Yes | ❌ No | ❌ No | Free |
| **Your Website** | ❌ No* | ❌ No* | ❌ No | ❌ No | Free |

*Can add Google Analytics or similar tracking

---

## 🔧 Updating Files

When you need to update the PowerPoint files:

### Step 1: Regenerate Files
```bash
npm run generate-ppt        # Updates Nuqta-Pitch-Deck-2026.pptx
npm run generate-card-ppt   # Updates Nuqta-Investor-One-Pager-2026.pptx
```

### Step 2: Update Public Directory
```bash
cp Nuqta-*.pptx public/
```

### Step 3: Update All Distribution Channels
- Re-upload to DocSend
- Replace files on Google Drive/Dropbox
- Update GitHub Release (create new version)
- Redeploy website (if using Vercel/Netlify)

### Step 4: Notify Investors (Optional)
```
Subject: Updated Pitch Deck - New Traction Data

Hi [Investor Name],

Quick update - I've revised our pitch deck with:
• Updated traction: 40+ LOIs (was 30+)
• Latest revenue projections
• New advisory board members

Updated files:
[Include links to new versions]

Best regards,
Rejaul
```

---

## 📧 Email Templates with Different Methods

### Template 1: DocSend Link
```
Subject: Nuqta - $500K Pre-Seed | Pitch Deck

Hi [Investor Name],

I'm Rejaul, founder of Nuqta - transforming offline shopping in the GCC with 10% instant cashback.

Pitch Deck (27 slides):
https://docsend.com/view/YOUR_LINK

One-Pager (6 slides):
https://docsend.com/view/YOUR_LINK

Key highlights: $150B TAM, 30+ LOIs, Q1 2026 launch, raising $500K pre-seed.

Would love 15 minutes to discuss.

Best,
Rejaul Karim
rejaul@nuqtaapp.com
```

### Template 2: Website Download
```
Subject: Nuqta Investment Opportunity - Download Materials

Hi [Investor Name],

Download our investor materials:

Full Pitch Deck:
https://nuqtaapp.com/Nuqta-Pitch-Deck-2026.pptx

One-Pager:
https://nuqtaapp.com/Nuqta-Investor-One-Pager-2026.pptx

Or view online: https://nuqtaapp.com/deck-kang

Raising $500K pre-seed for $150B GCC commerce opportunity.

Best,
Rejaul
```

### Template 3: Email Attachment (Cold Outreach)
```
Subject: Quick Intro - Nuqta One-Pager

Hi [Investor Name],

Attached is a 6-slide overview of Nuqta.

TL;DR:
• 10% cashback on offline purchases (no credit card needed)
• $150B GCC TAM
• 30+ merchant LOIs
• Raising $500K pre-seed

Full deck available upon request.

Best,
Rejaul Karim
rejaul@nuqtaapp.com

[Attach: Nuqta-Investor-One-Pager-2026.pptx]
```

---

## 🚀 Next Steps

### Immediate (Today):
1. ✅ **Test Website Downloads**: Visit http://localhost:3000/ and test both download links
2. ✅ **Upload to Cloud Storage**: Choose Google Drive or Dropbox and upload both files
3. ✅ **Send Test Email**: Email yourself both PowerPoint files to ensure they open correctly

### This Week:
1. **Set Up DocSend**: Create account and upload files for professional tracking
2. **Deploy Website**: Deploy to production (Vercel/Netlify) so investors can access via your domain
3. **Create Email Templates**: Customize the templates above with your personal style
4. **Test All Methods**: Verify each download method works correctly

### Before First Investor Outreach:
1. **Choose Primary Method**: Pick your main distribution channel (I recommend DocSend + email attachment combo)
2. **Set Up Analytics**: If using website, add Google Analytics tracking
3. **Create Data Room**: Organize all investor materials in one place (pitch deck, one-pager, financials, LOIs)
4. **Prepare Follow-Up Process**: Know what to send after initial contact

---

## 💡 Pro Tips

### 1. Use Different Methods for Different Stages
- **First touch**: One-pager via email attachment
- **Second touch**: Full deck via DocSend link
- **Third touch**: Website link + offer to present live

### 2. Track What Works
- Note which method gets the most responses
- Monitor DocSend analytics to see which slides investors focus on
- Iterate based on data

### 3. Always Have a Backup
- If DocSend is down, have Google Drive links ready
- If email bounces, have website link as backup
- Keep files in multiple locations

### 4. Update Regularly
- Refresh traction numbers monthly
- Add new LOIs/customers as they come
- Keep metrics current (avoid stale data)

### 5. Test Everything
- Open PowerPoint files on both Mac and Windows
- Test downloads on mobile devices
- Verify links work before sending to investors

---

## 📊 Success Metrics to Track

### Week 1:
- Emails sent: _____
- Downloads: _____
- Responses: _____
- Meetings scheduled: _____

### Week 2:
- Follow-ups sent: _____
- Full deck views: _____
- Average time spent: _____
- Investor interest level: _____

### Month 1:
- Total investors reached: _____
- Meetings completed: _____
- Term sheets received: _____
- Funding closed: $________

---

## ✅ Summary

You now have **6 ways** for investors to download your PowerPoint files:

1. ✅ **Website Download** (footer links) - Live now at http://localhost:3000/
2. ✅ **Email Attachment** - Files in root directory, ready to attach
3. ✅ **Google Drive/Dropbox** - Upload and share links
4. ✅ **DocSend** - Professional tracking (recommended)
5. ✅ **GitHub Releases** - For tech investors
6. ✅ **Direct URLs** - Once deployed to production

**Files Ready**:
- `Nuqta-Pitch-Deck-2026.pptx` (241KB, 27 slides)
- `Nuqta-Investor-One-Pager-2026.pptx` (104KB, 6 slides)

**Locations**:
- Root directory: For email attachments
- `/public/` directory: For website downloads
- Ready to upload: Cloud storage, DocSend, etc.

---

**Generated**: January 28, 2026
**Status**: ✅ All Download Methods Ready
**Next Step**: Test website downloads at http://localhost:3000/
