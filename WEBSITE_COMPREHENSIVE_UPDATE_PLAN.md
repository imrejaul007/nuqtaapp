# Nuqta Website - Comprehensive Update Plan
## Date: January 25, 2026
## Goal: Align all pages with new positioning, 30 LOIs, and 7-day launch

---

## Current State vs. Target State

### **What's Outdated:**
- ❌ Generic "cashback app" positioning (should be "Rewards-Led Commerce Intelligence")
- ❌ "5 pilot merchants" (should be **30 signed LOIs**)
- ❌ Vague "pre-launch" status (should be **"Launching Jan 28, 2026"**)
- ❌ No unit economics shown (missing LTV AED 504, CAC AED 30, 16.8x ratio)
- ❌ No float dynamics mentioned (missing key revenue driver)
- ❌ No addressable GMV shown (missing **AED 4.1M** from 30 LOIs)

### **What Stays the Same:**
- ✅ $500K raise size
- ✅ $5M cap + 20% discount
- ✅ CCD structure
- ✅ 18-24 month runway
- ✅ <$40K/month burn

---

## Priority 1: Core Business Changes (TODAY)

### **1. Landing Page (/) - Main Entry Point**

#### **Updates Needed:**

**A. Hero Section:**
```tsx
// BEFORE:
"Get paid to shop. Every purchase. Every time."

// AFTER:
"Rewards-Led Commerce Intelligence"
"Save 5-10% on everyday offline spending — cafes, salons, gyms — with instant cashback"
```

**B. Add New Stats Row (After existing stats):**
```tsx
<div className="grid md:grid-cols-4 gap-6">
  <StatCard
    value="30"
    label="Signed Merchant LOIs"
    icon={Store}
    tooltip="Merchants with signed agreements ready for launch"
  />
  <StatCard
    value="AED 4.1M"
    label="Addressable GMV"
    icon={TrendingUp}
    tooltip="Total monthly GMV from 30 signed merchants"
  />
  <StatCard
    value="16.8x"
    label="LTV:CAC Ratio"
    icon={Target}
    tooltip="AED 504 LTV ÷ AED 30 CAC"
  />
  <StatCard
    value="7 Days"
    label="To Launch"
    icon={Calendar}
    tooltip="Launching January 28, 2026"
  />
</div>
```

**C. Add Unit Economics Section (Before Investment section):**
```tsx
<section className="py-16 bg-white">
  <h2>Profitable Unit Economics from Day One</h2>
  <div className="grid md:grid-cols-3 gap-8">
    <MetricCard>
      <h3>CAC</h3>
      <p className="text-5xl font-black">AED 30</p>
      <ul>
        <li>Merchant QR: AED 10-15</li>
        <li>Student Ambassadors: AED 25-30</li>
        <li>Blended: AED 30</li>
      </ul>
    </MetricCard>
    <MetricCard>
      <h3>Annual LTV</h3>
      <p className="text-5xl font-black">AED 504</p>
      <ul>
        <li>Monthly RPU: AED 42</li>
        <li>12-month retention</li>
        <li>85% gross margin</li>
      </ul>
    </MetricCard>
    <MetricCard>
      <h3>LTV:CAC</h3>
      <p className="text-6xl font-black text-emerald-600">16.8x</p>
      <p>Payback period: &lt;1 month</p>
      <p className="text-sm">Benchmark: 5x+ is excellent</p>
    </MetricCard>
  </div>
</section>
```

**D. Update Investment Snapshot (visible on 2XL+ screens):**
```tsx
// Add these metrics:
- 30 Signed Merchant LOIs
- AED 4.1M Addressable GMV
- 16.8x LTV:CAC Ratio
- Launch Date: Jan 28, 2026
```

---

### **2. Data Room Page (/data-room) - Investor Documentation**

#### **Updates Needed:**

**A. Add New Section: "Unit Economics" (Between Market & Financials):**
```tsx
{
  title: "4. Unit Economics",
  icon: Calculator,
  items: [
    {
      title: "LTV & CAC Breakdown",
      description: "Customer acquisition cost (AED 30) vs lifetime value (AED 504) across channels. Includes payback period calculation and cohort retention assumptions.",
      available: true
    },
    {
      title: "Channel-Specific Economics",
      description: "CAC by channel: Merchant QR (AED 10-15), Student Ambassadors (AED 25-30), Digital (AED 60-80). 16.8x blended LTV:CAC ratio.",
      available: true
    },
    {
      title: "Float Dynamics Model",
      description: "Operational float projections based on 30-45 day redemption lag. Cash flow benefits and future interest revenue opportunity post-SVF license.",
      available: true
    },
    {
      title: "Merchant ROI Calculator",
      description: "AED 4.1M addressable GMV from 30 signed LOIs. Average merchant GMV: AED 136K/month. Commission rate: 15%.",
      available: true
    }
  ]
}
```

**B. Update Section 3 (Market & Strategy):**
```tsx
{
  title: "Merchant Strategy & LOIs",
  description: "30 signed merchant LOIs across Dubai Marina, Downtown, and JBR. AED 4.1M total addressable GMV. Merchant categories: cafes, salons, gyms, retail. Average merchant GMV: AED 136K/month.",
  available: true // CHANGE FROM false
}
```

**C. Update Section 2 (Product):**
```tsx
{
  title: "Product Roadmap & Milestones",
  description: "Phase 1 (MVP) launching January 28, 2026. 90-day validation plan: 500 users, AED 30K GMV, D30 retention ≥20%. Weekly metrics dashboard and investor updates.",
  available: true
}
```

---

### **3. Memo Page (/memo) - Investor Memo**

#### **Updates Needed:**

**A. Update Section 5 (Current Stage):**
```tsx
// BEFORE:
<h3 className="text-2xl font-bold mb-4">5. Current Stage</h3>
<p className="mb-4"><strong>Pre-Launch Development</strong></p>

// AFTER:
<h3 className="text-2xl font-bold mb-4">5. Current Stage</h3>
<p className="mb-4"><strong>7-Day Launch (January 28, 2026)</strong></p>

<ul className="space-y-2 mb-6">
  <li className="flex items-start gap-2">
    <CheckCircle className="text-emerald-600 mt-1" size={20} />
    <span><strong>30 Signed Merchant LOIs</strong> — Merchants with signed agreements across Dubai Marina, Downtown, and JBR</span>
  </li>
  <li className="flex items-start gap-2">
    <CheckCircle className="text-emerald-600 mt-1" size={20} />
    <span><strong>AED 4.1M Addressable GMV</strong> — Total monthly GMV from committed merchant base</span>
  </li>
  <li className="flex items-start gap-2">
    <CheckCircle className="text-emerald-600 mt-1" size={20} />
    <span><strong>16.8x LTV:CAC Ratio</strong> — Profitable unit economics from Day 1 (AED 504 LTV ÷ AED 30 CAC)</span>
  </li>
  <li className="flex items-start gap-2">
    <CheckCircle className="text-emerald-600 mt-1" size={20} />
    <span><strong>Launch Timeline:</strong> January 28, 2026 (5 merchants live Week 1, scale to 30 by Month 2)</span>
  </li>
</ul>
```

**B. Add Unit Economics Subsection (After "Our Solution"):**
```tsx
<h3 className="text-2xl font-bold mb-4">4. Unit Economics (Profitable from Day One)</h3>

<div className="grid md:grid-cols-3 gap-6 mb-6">
  <div className="bg-slate-50 p-6 rounded-xl">
    <p className="text-sm font-semibold text-slate-600 uppercase mb-2">Customer Acquisition Cost</p>
    <p className="text-4xl font-black text-slate-900 mb-2">AED 30</p>
    <ul className="text-sm text-slate-600 space-y-1">
      <li>• Merchant QR: AED 10-15</li>
      <li>• Student Ambassadors: AED 25-30</li>
      <li>• Blended across channels</li>
    </ul>
  </div>

  <div className="bg-slate-50 p-6 rounded-xl">
    <p className="text-sm font-semibold text-slate-600 uppercase mb-2">Annual Lifetime Value</p>
    <p className="text-4xl font-black text-slate-900 mb-2">AED 504</p>
    <ul className="text-sm text-slate-600 space-y-1">
      <li>• Monthly RPU: AED 42</li>
      <li>• 12-month retention</li>
      <li>• 6 transactions/month</li>
    </ul>
  </div>

  <div className="bg-emerald-50 p-6 rounded-xl border-2 border-emerald-200">
    <p className="text-sm font-semibold text-emerald-700 uppercase mb-2">LTV:CAC Ratio</p>
    <p className="text-5xl font-black text-emerald-600 mb-2">16.8x</p>
    <p className="text-sm text-slate-700">
      <strong>Payback:</strong> &lt;1 month<br/>
      <strong>Benchmark:</strong> 5x+ is excellent
    </p>
  </div>
</div>

<p className="mb-4">
  <strong>Why These Economics Are Defensible:</strong>
</p>
<ul className="list-disc pl-6 space-y-2 mb-6">
  <li>Cashback is merchant-funded (no VC subsidy burns)</li>
  <li>Merchant QR distribution = AED 10-15 CAC (10x cheaper than Google Ads at AED 200+)</li>
  <li>Habit loops drive 6 transactions/month (vs 2-3 for competitors)</li>
  <li>Operational float improves cash flow (30-45 day redemption lag)</li>
  <li>No inventory risk, pure platform play</li>
</ul>
```

**C. Update Waitlist Count:**
```tsx
// BEFORE:
<li>200+ waitlist signups</li>

// AFTER:
<li>30 signed merchant LOIs (AED 4.1M addressable GMV)</li>
<li>200+ consumer waitlist signups</li>
```

---

### **4. Terms Page (/terms) - Investment Terms**

#### **Updates Needed:**

**A. Update Term 1 ($5M Cap Rationale):**
```tsx
// ADD these bullet points:
<ul>
  <li><strong>30 Signed Merchant LOIs</strong> — Not verbal interest, signed agreements with AED 4.1M addressable GMV</li>
  <li><strong>16.8x LTV:CAC Ratio</strong> — Profitable unit economics validated (AED 504 LTV ÷ AED 30 CAC)</li>
  <li><strong>7-Day Launch</strong> — MVP goes live January 28, 2026 (execution signal, not just planning)</li>
  <li><strong>Capital-Efficient GTM</strong> — Merchant QR at AED 10-15 CAC (10x cheaper than Google Ads)</li>
</ul>
```

**B. Add New Term Card: "Merchant Momentum Signal":**
```tsx
<div className="bg-white border-2 border-emerald-200 rounded-2xl p-8">
  <div className="flex items-center gap-3 mb-4">
    <Store className="text-emerald-600" size={32} />
    <h3 className="text-2xl font-bold text-slate-900">Merchant Momentum Signal</h3>
  </div>

  <p className="text-slate-700 mb-6">
    30 signed merchant LOIs isn't just traction — it's market validation. Each LOI represents:
  </p>

  <ul className="space-y-3 mb-6">
    <li className="flex items-start gap-2">
      <CheckCircle className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
      <span><strong>Merchant believes in ROI:</strong> Signed commitment to list deals and pay 15% commission</span>
    </li>
    <li className="flex items-start gap-2">
      <CheckCircle className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
      <span><strong>Addressable GMV:</strong> Avg AED 136K/month per merchant = AED 4.1M total</span>
    </li>
    <li className="flex items-start gap-2">
      <CheckCircle className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
      <span><strong>De-risked supply side:</strong> We have merchant supply, now we validate user demand</span>
    </li>
  </ul>

  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
    <p className="text-sm text-slate-700">
      <strong>Investor Implication:</strong> Most pre-seed startups have 0 signed commitments.
      30 LOIs de-risks the biggest unknown: "Will merchants participate?" Answer: Yes, they already committed.
    </p>
  </div>
</div>
```

---

### **5. Commitment Page (/commitment) - Founder Commitments**

#### **Updates Needed:**

**A. Add New Commitment: "Execution Velocity":**
```tsx
<div className="bg-white border-2 border-purple-200 rounded-2xl p-8">
  <div className="flex items-center gap-3 mb-4">
    <Zap className="text-purple-600" size={32} />
    <h3 className="text-2xl font-bold text-slate-900">6. Execution Velocity</h3>
  </div>

  <p className="text-slate-700 mb-6">
    <strong>Commitment:</strong> Speed is the only moat in Year 1. I commit to aggressive execution milestones:
  </p>

  <ul className="space-y-3 mb-6">
    <li className="flex items-start gap-2">
      <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={20} />
      <span><strong>7-Day Launch:</strong> MVP live January 28, 2026 (not "coming soon")</span>
    </li>
    <li className="flex items-start gap-2">
      <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={20} />
      <span><strong>Week 1 Target:</strong> 5 merchants live, 100 users, AED 5-10K GMV</span>
    </li>
    <li className="flex items-start gap-2">
      <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={20} />
      <span><strong>90-Day Validation:</strong> 500 users, 10 merchants, AED 30K GMV, D30 ≥20%</span>
    </li>
    <li className="flex items-start gap-2">
      <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={20} />
      <span><strong>Weekly Investor Updates:</strong> Every Friday, metrics + learnings + next steps</span>
    </li>
  </ul>

  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
    <p className="text-sm text-slate-700">
      <strong>Accountability:</strong> If we miss 90-day milestones by >30%, I commit to pivoting or returning unspent capital.
    </p>
  </div>
</div>
```

---

## Priority 2: Supporting Enhancements (THIS WEEK)

### **6. Add Float Dynamics Explanation (Landing Page + Data Room)**

**Landing Page - Add Section:**
```tsx
<section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
  <h2>Wallet Float Dynamics (Cash Flow Advantage)</h2>
  <p>Users earn Nuqta Coins but redeem gradually over 30-45 days. This creates operational float that:</p>
  <ul>
    <li>Smooths merchant payouts</li>
    <li>Reduces burn volatility</li>
    <li>Future upside: Post-SVF license, we can invest float in UAE treasuries (4-5% yield)</li>
  </ul>
  <div className="grid md:grid-cols-3 gap-6">
    <div>10K users → AED 250K float</div>
    <div>100K users → AED 2.5M float</div>
    <div>Post-SVF: +AED 100-125K/year interest revenue</div>
  </div>
</section>
```

---

## Implementation Priority

### **Today (5 hours):**
1. ✅ Landing page hero + stats (1 hour)
2. ✅ Data Room Unit Economics section (1 hour)
3. ✅ Memo Current Stage + Unit Economics (1 hour)
4. ✅ Terms page cap justification (1 hour)
5. ✅ Commitment page execution velocity (1 hour)

### **This Week (optional polish):**
1. Landing page float dynamics section
2. Data Room float model
3. FAQs update

---

## Files to Modify (in order)

1. `/src/app/page.tsx` (Landing page)
2. `/src/app/data-room/page.tsx` (Data room)
3. `/src/app/memo/page.tsx` (Investor memo)
4. `/src/app/terms/page.tsx` (Investment terms)
5. `/src/app/commitment/page.tsx` (Founder commitments)

---

## Success Metrics

**Before Updates:**
- Generic cashback positioning
- 5 pilot merchants mentioned
- No unit economics shown
- Vague "pre-launch" status

**After Updates:**
- "Rewards-Led Commerce Intelligence" positioning
- **30 signed LOIs** (AED 4.1M addressable GMV)
- **16.8x LTV:CAC** unit economics front and center
- **"Launching Jan 28, 2026"** (7-day urgency)

**Impact:** Website transforms from "interesting idea" to "investor-ready, execution-mode startup"

---

## Next Steps

1. Review this plan
2. Approve updates
3. I'll implement all 5 pages systematically
4. Build + deploy
5. Test all pages
6. Ship updated site

**Ready to start? Let me know and I'll begin with the landing page.**
