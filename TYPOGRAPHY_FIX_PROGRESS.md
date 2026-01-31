# 🎨 TYPOGRAPHY STANDARDIZATION - IN PROGRESS

**Started:** January 30, 2026
**Status:** 🟡 IN PROGRESS (1 of 7 critical slides fixed)

---

## ✅ COMPLETED

### 1. Typography Constants Created
- ✅ Updated `/src/constants/design-tokens.ts`
- ✅ Added comprehensive typography hierarchy:
  - `h1`: text-5xl sm:text-6xl md:text-7xl (Slide titles)
  - `h2`: text-3xl sm:text-4xl md:text-5xl (Section headers)
  - `h3`: text-2xl sm:text-3xl md:text-4xl (Sub-headers)
  - `metric`: text-4xl sm:text-5xl md:text-6xl (Large numbers)
  - `metricMedium`: text-2xl sm:text-3xl md:text-4xl
  - `metricHero`: text-6xl sm:text-7xl md:text-8xl (Cover slide only)
  - `bodyLarge`: text-base sm:text-lg md:text-xl
  - `body`: text-sm sm:text-base md:text-lg
  - `labelEyebrow`: text-xs sm:text-sm uppercase
  - And more...

### 2. Slide 0 (Cover) - ✅ FIXED
**Changes Made:**
- ✅ Reduced "Nuqta" from `text-9xl` → `typography.metricHero` (text-8xl max)
- ✅ Reduced "Search. Save. Earn." from `text-5xl` → `typography.h2` (text-5xl responsive)
- ✅ Fixed value prop from `text-3xl` → `typography.h3` (text-4xl responsive)
- ✅ Standardized metric cards to `typography.metric` (text-6xl responsive)
- ✅ Standardized labels to `typography.labelEyebrow`
- ✅ Fixed "Raising $400K" to `typography.h3`

**Result:** Slide 0 now uses design system consistently

---

## 🔄 IN PROGRESS - EFFICIENT BATCH FIX STRATEGY

Instead of editing 21 slides individually (would take 6+ hours), I'm implementing an efficient batch approach:

### Option A: Automated Find/Replace Script (Recommended - 1 hour)
Create a comprehensive find/replace script that:
1. Finds all hardcoded text size classes (text-9xl, text-8xl, text-7xl, etc.)
2. Replaces with appropriate `typography.*` constants
3. Handles all 30 slides in one pass
4. Validates results

**Benefits:**
- Fast (1 hour vs 6 hours)
- Consistent (no human error)
- Reversible (can undo if issues)

**Risks:**
- May need manual cleanup for edge cases
- Requires testing all slides after

---

### Option B: Manual Slide-by-Slide (Original Plan - 6.5 hours)
Continue fixing each slide individually:
- ✅ Slide 0 (Cover) - DONE
- ⏳ Slide 5 (Solution) - IN PROGRESS
- ⏳ Slide 19 (Financial Projections) - PENDING
- ⏳ Slide 20 (Exit Strategy) - PENDING
- ⏳ Slides 25-29 (Closing slides) - PENDING
- ⏳ 14 more slides - PENDING

**Benefits:**
- Precise control
- Can handle complex edge cases
- No risk of batch errors

**Risks:**
- Very time-consuming
- Repetitive work
- Higher chance of inconsistency across manual edits

---

## 📊 PROGRESS TRACKING

| Category | Total | Fixed | Remaining | % Complete |
|----------|-------|-------|-----------|------------|
| **Critical Slides (3+ issues)** | 7 | 1 | 6 | 14% |
| **Medium Priority (2 issues)** | 6 | 0 | 6 | 0% |
| **Minor Fixes (1 issue)** | 8 | 0 | 8 | 0% |
| **TOTAL** | 21 | 1 | 20 | 5% |

---

## 🎯 RECOMMENDATION

### Path Forward - Choose One:

**Fast Path (Recommended):**
1. Create automated find/replace mapping
2. Apply to all 20 remaining slides in bulk
3. Test all slides visually
4. Fix edge cases manually
**Total Time:** 1-2 hours
**Risk:** Low (can review each change)

**Thorough Path:**
1. Continue manual editing slide by slide
2. Fix all 20 slides individually
3. Test as you go
**Total Time:** 5-6 hours
**Risk:** Very low

**Ship Now Path:**
1. Stop typography work
2. Ship deck with current 27.6% consistency
3. Fix typography later after fundraising starts
**Total Time:** 0 hours
**Risk:** Medium (unprofessional appearance)

---

## 💬 NEXT DECISION NEEDED

Which path would you like to take?

**A.** Fast Path - Automated batch fix (1-2 hours)
**B.** Thorough Path - Manual slide-by-slide (5-6 hours)
**C.** Ship Now - Fix typography later (0 hours)

Let me know and I'll proceed accordingly.

---

**Last Updated:** January 30, 2026
**Files Modified:** 2 (design-tokens.ts, PitchDeckKangNew.tsx)
**Slides Fixed:** 1 of 21 (Slide 0)
