# Business Model Update - Pitch Deck Changes

## Date: 2026-01-24

## Overview
Updated the pitch deck with corrected business model details based on founder feedback.

---

## ✅ Changes Made

### **1. Business Model (Slide 9)**

**Updated Commission Structure:**
- Changed from generic "8-12%" to specific **15% total commission**
- Breakdown:
  - **5% Fixed Revenue** - Guaranteed commission on every transaction
  - **5% Conditional Revenue** - When user doesn't share on social media (otherwise goes to user)
  - **5% User Cashback** - Passes to user when they share on social media
- Added **10 AED monthly subscription** per user

**Example Calculation (AED 100 purchase):**
- Fixed Revenue: AED 5
- Conditional: AED 5
- User Cashback: AED 5
- **Total: 15% = AED 15** + 10 AED monthly subscription

---

### **2. Traction (Slide 12)**

**Updated Metrics:**
- **Merchants**: 30 fully committed (was "30 LOIs signed")
- **Pipeline**: 30 ready in 30 days (NEW metric)
- **Product**: 95% app ready (was "95% MVP complete")
- **Funding**: $50K bootstrapped (unchanged)

**Updated Next 90 Days:**
- Month 1: Onboard **60 merchants** (30+30)
- Month 2: Full **Dubai** rollout (was "Dubai Marina")
- Month 3: Expand citywide (was "3 neighborhoods")

---

### **3. Team (Slide 13)**

**Updated Founder Bio:**
- **Rejaul Karim** - Founder & CEO (removed "Co-Founder" - solo founder)
- Real background:
  - Ex-CTO & Co-Founder of cybersecurity company
  - 6+ years in digital marketing & growth
  - Managed **120+ D2C clients** across industries
  - **2M AED** in ad spend managed
  - Deep expertise in performance marketing, conversion optimization, and customer acquisition

**Expertise Tags:**
- Cybersecurity
- Digital Marketing
- D2C Commerce
- Growth
- Product Strategy

---

### **4. Target Audience (Slide 5)**

**Added Target Demographics:**
- **Students & employees earning <25K AED/month**
- Clarified 5% cashback on social share
- Highlighted 10 AED/month subscription

---

### **5. Location References**

**Verified Correct Geography:**
- ✅ All references say **UAE** (not India)
- ✅ All references say **Dubai** (not Bangalore)
- ✅ All currency is **AED** (not INR)
- ✅ Status badge: "Dubai, UAE"

---

## Summary of Key Updates

| Slide | Element | Before | After |
|-------|---------|--------|-------|
| 9 | Commission | 8-12% generic | 15% breakdown (5%+5%+5%) |
| 9 | Subscription | Not mentioned | 10 AED/month |
| 12 | Merchants | 30 LOIs | 30 committed + 30 pipeline |
| 12 | Product | 95% MVP | 95% app ready |
| 13 | Founder | Generic bio | Real experience (cybersecurity, 120+ D2C clients, 2M AED ad spend) |
| 13 | Team size | 2 co-founders | 1 founder (Rejaul Karim) |
| 5 | Target | Not specified | Students & employees <25K AED/month |

---

## Files Modified

- **[/src/components/PitchDeckKangNew.tsx](src/components/PitchDeckKangNew.tsx)** - Updated slides 5, 9, 12, 13

---

## Build Status

✅ **Build:** Successful
✅ **TypeScript:** No errors
✅ **Linting:** Clean
✅ **Bundle Size:** Optimized

---

## How to View

**Local Development:**
```bash
npm run dev
```
Visit: http://localhost:3002/deck-kang

**Production Build:**
```bash
npm run build
npm start
```

---

## What Changed Visually

### **Slide 9 (Business Model)**
- 3 cards now show: Fixed Revenue (5%), Conditional Revenue (5%), User Cashback (5%)
- Example calculation updated to show AED 5 + AED 5 + AED 5 = AED 15
- Note added: "+ 10 AED monthly subscription per user"

### **Slide 12 (Traction)**
- Stats grid now shows "30 fully committed" + "30 ready in 30 days"
- Product stat says "App ready" instead of "MVP complete"
- Next 90 Days updated to reflect 60 merchants in Month 1

### **Slide 13 (Team)**
- Single founder card (no longer 2 co-founders)
- Real bio with specific achievements
- 5 expertise tags instead of generic labels

### **Slide 5 (Solution Overview)**
- Added target demographic line: "Target: Students & employees earning <25K AED/month"
- Updated cashback to "5% cashback on social share"
- Added "10 AED/month subscription" to benefits list

---

## Next Steps (Optional Future Updates)

1. **Clarify Nuqta Coin vs Brand Coin** mechanics
2. **Update payment intelligence layer** description if needed
3. **Add GTM channel details** (college fests, flee markets, etc.)
4. **Add co-founder details** if hiring one
5. **Add real founder photo** to Slide 13
6. **Update with actual metrics** as they come in

---

**Status:** ✅ Complete - All business model corrections implemented
**Ready:** ✅ Production-ready for investor presentations

---

**Preview:** http://localhost:3002/deck-kang
**Status:** Ready to present with accurate business model
