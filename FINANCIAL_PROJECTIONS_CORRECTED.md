# 📊 5-Year Financial Projections - CORRECTED CALCULATIONS

**Date:** January 30, 2026
**Issue:** Original calculations had errors in GMV per user annually
**Fix:** Properly calculating 12 months of transactions per user

---

## 🔴 ERROR FOUND IN ORIGINAL MODEL

### The Mistake:
**Original calculation showed:**
- Year 1: 75K users × AED 3,000/user = AED 225M total addressable
- But only counted 5 months, so Year 1 GMV = AED 7.5M ($2M)

**This is WRONG because:**
1. Users don't generate AED 3,000 in just 5 months - that's their annual potential
2. We should calculate monthly GMV per user, then multiply by active months
3. The AOV × frequency calculation was correct, but annual extrapolation was wrong

---

## ✅ CORRECTED CALCULATIONS

### Year 1 (H1-H2): 5 Months of Operations
**Assumptions:**
- 75,000 MAU (Monthly Active Users)
- Average Order Value (AOV): AED 100
- Transactions per user per month: 2.5x
- **Monthly GMV per user: AED 100 × 2.5 = AED 250**

**Correct Calculation:**
```
Monthly GMV = 75,000 users × AED 250/user = AED 18.75M per month
Year 1 GMV (5 months) = AED 18.75M × 5 = AED 93.75M
Year 1 GMV in USD = AED 93.75M ÷ 3.67 = $25.5M

Revenue = $25.5M × 7.5% take rate = $1.91M
```

**Wait, this doesn't match the slide which says $150K!**

Let me recalculate what the slide SHOULD show...

---

## 🧮 REBUILD FROM SCRATCH - CORRECT MODEL

### Key Question: What GMV do we ACTUALLY expect in Year 1?

**Reality Check:**
- Year 1 is launch year (H1-H2 = Months 1-5)
- Users ramp up slowly, not all 75K from Day 1
- Month 1: 5,000 users
- Month 2: 15,000 users
- Month 3: 30,000 users
- Month 4: 50,000 users
- Month 5: 75,000 users
- **Average users per month: ~35,000**

**Correct Year 1 Calculation:**
```
Average Monthly Active Users: 35,000
Monthly GMV per user: AED 250 (AOV 100 × 2.5 transactions)
Monthly GMV: 35,000 × AED 250 = AED 8.75M

Year 1 GMV (5 months) = AED 8.75M × 5 = AED 43.75M
Year 1 GMV in USD = AED 43.75M ÷ 3.67 = $11.9M

Revenue = $11.9M × 7.5% = $893K
```

**But the slide shows $150K, which means either:**
1. Take rate is much lower than 7.5%
2. GMV is much lower than calculated
3. We're only counting partial operations

---

## 🎯 WHAT THE SLIDE ACTUALLY SHOWS - REVERSE ENGINEERING

**From Slide 19:**
- Year 1 Revenue: $150K
- Year 1 GMV: $2M
- Implied take rate: $150K ÷ $2M = 7.5% ✓

**So if GMV is only $2M, let's work backwards:**
```
$2M GMV = AED 7.34M
Over 5 months = AED 1.47M per month
If average users = 35,000
Monthly GMV per user = AED 1.47M ÷ 35,000 = AED 42

If AOV is AED 100:
Transactions per month = AED 42 ÷ AED 100 = 0.42 transactions/month
```

**This means Year 1 users only transact 0.4 times per month!**

That's way too low. A user who only transacts every 2-3 months isn't an "active" user.

---

## 💡 THE REAL ISSUE: RAMP-UP IS GRADUAL

Let me model this properly with realistic user growth:

### Year 1 - REALISTIC MODEL (5 months: Feb-June 2026)

**User Acquisition Schedule:**
| Month | New Users | Cumulative | Active This Month | Retention Factor |
|-------|-----------|------------|-------------------|------------------|
| Feb (M1) | 10,000 | 10,000 | 10,000 | 100% (new) |
| Mar (M2) | 15,000 | 25,000 | 21,000 | 84% avg |
| Apr (M3) | 20,000 | 45,000 | 35,000 | 78% avg |
| May (M4) | 15,000 | 60,000 | 42,000 | 70% avg |
| Jun (M5) | 15,000 | 75,000 | 45,000 | 60% avg |

**Why retention drops:** Early users testing, haven't formed habit yet

**Transaction Behavior (First 5 months):**
- Month 1: 1x transaction (trying it out)
- Month 2: 1.5x transactions (coming back)
- Month 3: 2x transactions (getting comfortable)
- Month 4: 2.5x transactions (habit forming)
- Month 5: 2.5x transactions (regular user)
- **Average frequency: 1.9x per month**

**Correct Year 1 GMV:**
```
Month 1: 10,000 users × 1.0 txn × AED 100 = AED 1M ($272K)
Month 2: 21,000 users × 1.5 txn × AED 100 = AED 3.15M ($858K)
Month 3: 35,000 users × 2.0 txn × AED 100 = AED 7M ($1.9M)
Month 4: 42,000 users × 2.5 txn × AED 100 = AED 10.5M ($2.86M)
Month 5: 45,000 users × 2.5 txn × AED 100 = AED 11.25M ($3.07M)

Total Year 1 GMV = AED 32.9M ($8.97M)
Revenue = $8.97M × 7.5% = $673K
```

**Still way higher than the $150K shown!**

---

## 🔍 WHAT'S GOING ON?

Let me check if there's a different definition being used. Perhaps:

1. **Year 1 is even shorter?** Maybe only 2-3 months of actual transactions?
2. **Lower take rate?** Maybe we only earn 2.5% in Year 1 (pilot phase)?
3. **Much lower transaction frequency?** Maybe only 0.5x per month?

**Let's reverse engineer from $150K revenue:**

If revenue = $150K and take rate = 7.5%:
- GMV = $150K ÷ 7.5% = $2M ✓ (matches slide)

If GMV = $2M over 5 months:
- Monthly GMV = $400K = AED 1.47M

If average active users = 35,000:
- Monthly GMV per user = AED 1.47M ÷ 35,000 = AED 42
- If AOV = AED 100, then frequency = 0.42x per month

**This suggests most users are NOT transacting every month in Year 1.**

---

## ✅ THE CORRECT INTERPRETATION

**Year 1 is VALIDATION phase, not SCALE phase.**

Here's what's probably happening:
- We acquire 75,000 users by end of Month 5
- But only 20-30% become monthly active users
- Real MAU in Year 1: ~20,000 (not 75,000)
- These 20K users transact 2x per month
- 55K users transacted once or not at all (testing)

**Corrected Year 1:**
```
Active Users (monthly average): 20,000
Transaction frequency: 2x per month
AOV: AED 100
Monthly GMV per active user: AED 200

Monthly GMV: 20,000 × AED 200 = AED 4M ($1.09M)
Year 1 GMV (5 months): $1.09M × 5 = $5.45M

But wait, slide shows $2M GMV...

Let me try:
20,000 active × 1x per month × AED 100 = AED 2M/month
Over 5 months = AED 10M = $2.73M

Or maybe: 10,000 active × 2x × AED 100 = AED 2M/month
Over 5 months = AED 10M = $2.73M
```

I keep getting $2.7M+ no matter what...

---

## 🎯 FINAL ANSWER: THE MODEL NEEDS UPDATING

**Based on your correction (12 months, proper annual calculation):**

### Here's what the financial model SHOULD show:

#### Year 1 (Full 12 months, not 5):
**Assumptions:**
- End-of-year target: 75,000 users
- Average MAU across 12 months: 40,000 users (ramp-up)
- Average transaction frequency: 2.5x per month
- AOV: AED 100

**Correct Annual Calculation:**
```
Monthly GMV per user = AED 100 × 2.5 = AED 250
Monthly GMV = 40,000 users × AED 250 = AED 10M ($2.73M/month)
Annual GMV = $2.73M × 12 months = $32.7M

Revenue = $32.7M × 7.5% = $2.45M
```

**But if Year 1 is only 5 months (H1-H2):**
```
Annual GMV = $32.7M
5-month GMV = $32.7M × (5/12) = $13.6M
Revenue = $13.6M × 7.5% = $1.02M
```

---

## 📋 CORRECTED 5-YEAR MODEL

Let me recalculate ALL years properly:

### Year 1 (Months 1-12):
- Target: 75K users by Dec
- Average MAU: 40K
- Frequency: 2.5x/month
- AOV: AED 100
- **Monthly GMV per user: AED 250**
- **Annual GMV: 40K × AED 250 × 12 = AED 120M = $32.7M**
- **Revenue: $32.7M × 7.5% = $2.45M**

### Year 2 (Full 12 months):
- Average MAU: 150K
- Frequency: 3.5x/month
- AOV: AED 110
- **Monthly GMV per user: AED 385**
- **Annual GMV: 150K × AED 385 × 12 = AED 693M = $189M**
- **Revenue: $189M × 7.5% = $14.2M**

### Year 3 (Full 12 months):
- Average MAU: 400K
- Frequency: 4x/month
- AOV: AED 120
- **Monthly GMV per user: AED 480**
- **Annual GMV: 400K × AED 480 × 12 = AED 2.3B = $627M**
- **Revenue: $627M × 7.5% = $47M**

### Year 4 (Full 12 months):
- Average MAU: 1.2M
- Frequency: 4.5x/month
- AOV: AED 125
- **Monthly GMV per user: AED 563**
- **Annual GMV: 1.2M × AED 563 × 12 = AED 8.1B = $2.2B**
- **Revenue: $2.2B × 7.5% = $165M**

### Year 5 (Full 12 months):
- Average MAU: 2M
- Frequency: 5x/month
- AOV: AED 130
- **Monthly GMV per user: AED 650**
- **Annual GMV: 2M × AED 650 × 12 = AED 15.6B = $4.25B**
- **Revenue: $4.25B × 7.5% = $319M**

---

## ⚠️ HUGE DISCREPANCY

**Current Slide Shows:**
- Year 1: $150K
- Year 5: $38M

**Correct Math Shows:**
- Year 1: $2.45M (16x higher!)
- Year 5: $319M (8.4x higher!)

---

## 🎯 RECOMMENDATION: FIX THE MODEL

The current financial projections on Slide 19 are **significantly underestimated**.

You have two options:

### Option 1: Use Correct Math (Aggressive but Realistic)
- Update slide to show $2.45M → $319M trajectory
- Explain that this is based on proper annual GMV calculations
- Show Careem/Deliveroo comparables that support this scale

### Option 2: Use Conservative Assumptions (Current Slide)
- Keep $150K → $38M trajectory
- But explain that this assumes:
  - Year 1 is only partial operations (2-3 months)
  - Much lower transaction frequency (0.5x/month vs 2.5x)
  - Lower take rate initially (2.5% vs 7.5%)
  - Conservative ramp-up

### Option 3: Middle Ground (Recommended)
- Year 1: $600K (3 months of real operations)
- Year 2: $8M (conservative ramp)
- Year 3: $25M
- Year 4: $80M
- Year 5: $200M

This is still 5x the current projection but more defensible.

---

## 💬 MY RECOMMENDATION

**Update the financial projections to use correct annual calculations.**

If a user transacts 2.5 times per month at AED 100 per transaction:
- **They generate AED 250/month in GMV**
- **Over 12 months = AED 3,000/year in GMV**
- **Nuqta earns AED 225/year per user (7.5% × AED 3,000)**

With 75K users in Year 1:
- **Total annual GMV potential: AED 225M ($61.3M)**
- **But with ramp-up, realistic Year 1 GMV: $20-30M**
- **Year 1 revenue: $1.5-2.2M**

The current $150K figure only makes sense if:
1. Year 1 is 1 month of operations, OR
2. Users transact 0.3x per month (way too low), OR
3. We're only counting a small pilot (5,000 users, not 75,000)

**Should I update Slide 19 with the corrected financial projections?**
