# 🎨 TYPOGRAPHY STANDARDIZATION PLAN

**Date:** January 30, 2026
**Issue:** Only 27.6% of slides have consistent text sizing
**Goal:** Standardize all 30 slides to use identical typography hierarchy

---

## 🔴 CURRENT STATE: INCONSISTENCY ANALYSIS

### Overall Statistics:
- **Consistency Rate:** 27.6% (Only 8 out of 29 slides follow standard patterns)
- **Fully Compliant Slides:** 8 (Slides 3, 4, 10, 12, 14, 15, 16, 24)
- **Slides Requiring Fixes:** 21 slides
- **Total Text Size Issues:** 52 inconsistencies

---

## ✅ PROPOSED TYPOGRAPHY SYSTEM

### Three-Tier Hierarchy (To Be Applied to ALL 30 Slides)

#### 1. SLIDE TITLES (Main Headers)
```typescript
// Desktop → Tablet → Mobile
text-5xl sm:text-6xl md:text-7xl
```
**Use Case:** Primary slide titles ("Market Opportunity", "Exit Strategy", etc.)
**Current Issues:** Some slides use 9xl/8xl (too big), others use 6xl/5xl only (too small)

---

#### 2. SECTION HEADERS (Sub-Headers)
```typescript
// Desktop → Tablet → Mobile
text-3xl sm:text-4xl md:text-5xl
```
**Use Case:** Section headers within slides, card titles
**Current Issues:** Inconsistent - some use 4xl, others use 2xl

---

#### 3. BODY TEXT (4 Levels)

**Level A: Large Metrics/Numbers**
```typescript
text-4xl sm:text-5xl md:text-6xl font-black
```
**Use Case:** Big numbers like "$400K", "67-133x", "10x LTV:CAC"

**Level B: Medium Metrics**
```typescript
text-2xl sm:text-3xl md:text-4xl font-bold
```
**Use Case:** Secondary metrics, key stats

**Level C: Regular Body Text**
```typescript
text-base sm:text-lg md:text-xl
```
**Use Case:** Paragraph text, descriptions, explanations

**Level D: Small Body Text**
```typescript
text-sm sm:text-base
```
**Use Case:** Card content, list items

---

#### 4. LABELS/CAPTIONS (3 Levels)

**Level A: Regular Labels**
```typescript
text-xs sm:text-sm uppercase tracking-wider
```
**Use Case:** Eyebrow labels like "5-Year Financial Outlook", "Path to Liquidity"

**Level B: Small Labels**
```typescript
text-xs sm:text-sm
```
**Use Case:** Chart labels, axis labels, data point labels

**Level C: Micro Labels**
```typescript
text-xs
```
**Use Case:** Sources, footnotes, disclaimers

---

## 🛠️ IMPLEMENTATION PLAN

### Phase 1: Create Design System Constants (30 minutes)

Create `/src/constants/typography.ts`:

```typescript
export const TYPOGRAPHY = {
  // Slide Titles (Main Headers)
  slideTitle: 'text-5xl sm:text-6xl md:text-7xl font-black',

  // Section Headers
  sectionHeader: 'text-3xl sm:text-4xl md:text-5xl font-bold',
  sectionSubheader: 'text-2xl sm:text-3xl md:text-4xl font-bold',

  // Body Text
  metricLarge: 'text-4xl sm:text-5xl md:text-6xl font-black',
  metricMedium: 'text-2xl sm:text-3xl md:text-4xl font-bold',
  bodyLarge: 'text-base sm:text-lg md:text-xl',
  bodyRegular: 'text-sm sm:text-base',
  bodySmall: 'text-xs sm:text-sm',

  // Labels/Captions
  labelEyebrow: 'text-xs sm:text-sm uppercase tracking-wider font-bold',
  labelRegular: 'text-xs sm:text-sm',
  labelMicro: 'text-xs',

  // Special Cases
  heroNumber: 'text-6xl sm:text-7xl md:text-8xl font-black', // For cover slide only
  cardTitle: 'text-lg sm:text-xl md:text-2xl font-bold',
} as const;
```

**Import in PitchDeckKangNew.tsx:**
```typescript
import { TYPOGRAPHY } from '@/constants/typography';
```

---

### Phase 2: Fix Critical Problem Slides (2 hours)

**Priority Order (Slides with 3+ issues):**

1. **Slide 0 (Cover)** - 3 issues
   - Reduce "Raising $400K" from text-8xl → text-6xl
   - Add text-lg to body sections
   - Add text-base to labels

2. **Slide 5 (Solution)** - 3 issues
   - Upgrade title from text-6xl → text-7xl
   - Add text-4xl for metrics
   - Add text-base for labels

3. **Slide 19 (Financial Projections)** - 3 issues
   - Upgrade "Financial Projections" from text-6xl → text-7xl
   - Add text-3xl tier for section headers
   - Add text-base for labels

4. **Slide 20 (Exit Strategy)** - 3 issues
   - Upgrade "Exit Strategy & Investor Returns" from text-6xl → text-7xl
   - Complete body text hierarchy
   - Add text-base for labels

5. **Slide 25-29 (Closing Slides)** - 3 issues each
   - Reduce oversized text (9xl, 8xl) to standard 7xl
   - Complete body text hierarchy
   - Add missing label sizes

---

### Phase 3: Standardize Remaining Slides (3 hours)

**21 slides total to fix:**

**Titles Need Upgrading (7 slides):**
- Slide 9, 13, 21 (add text-7xl tier)

**Titles Need Reducing (6 slides):**
- Slide 18, 26, 27, 28, 29 (reduce from 9xl/8xl to 7xl)

**Body Text Incomplete (9 slides):**
- Slides 0, 5, 6, 7, 8, 11, 17, 18, 19, 25, 28, 29

**Labels Incomplete (13 slides):**
- Slides 0, 1, 2, 5, 6, 11, 20, 21, 25, 26, 27, 28, 29, 30

---

### Phase 4: Create Reusable Typography Components (1 hour)

Create `/src/components/pitch-deck/Typography.tsx`:

```typescript
import { TYPOGRAPHY } from '@/constants/typography';

export const SlideTitle = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`${TYPOGRAPHY.slideTitle} ${className}`}>
    {children}
  </h2>
);

export const SectionHeader = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`${TYPOGRAPHY.sectionHeader} ${className}`}>
    {children}
  </h3>
);

export const MetricLarge = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`${TYPOGRAPHY.metricLarge} ${className}`}>
    {children}
  </p>
);

export const BodyText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`${TYPOGRAPHY.bodyLarge} ${className}`}>
    {children}
  </p>
);

export const EyebrowLabel = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`${TYPOGRAPHY.labelEyebrow} ${className}`}>
    {children}
  </p>
);
```

---

## 📋 SLIDE-BY-SLIDE FIX CHECKLIST

### ✅ Fully Compliant (No Changes Needed - 8 slides)
- [x] Slide 3 - Merchant Pain
- [x] Slide 4 - Market Opportunity
- [x] Slide 10 - Business Model
- [x] Slide 12 - GTM
- [x] Slide 14 - Fraud
- [x] Slide 15 - GTM Strategy
- [x] Slide 16 - Competitive Landscape
- [x] Slide 24 - Roadmap

---

### 🔴 Critical Fixes (3+ issues - 7 slides)

**Slide 0 - Cover:**
- [ ] Reduce "Raising $400K" from `text-8xl` → `text-6xl sm:text-7xl`
- [ ] Reduce "Pre-Seed" from `text-9xl` → `text-7xl sm:text-8xl`
- [ ] Add `text-lg` to body paragraphs
- [ ] Add `text-base` to label sections

**Slide 5 - Solution:**
- [ ] Change title from `text-6xl` → `text-5xl sm:text-6xl md:text-7xl`
- [ ] Add `text-4xl` tier for key metrics
- [ ] Add `text-base` to labels

**Slide 19 - Financial Projections:**
- [ ] Upgrade "Financial Projections" to `text-5xl sm:text-6xl md:text-7xl`
- [ ] Add `text-3xl` for year card headers
- [ ] Standardize metric displays to `text-4xl sm:text-5xl`
- [ ] Add `text-base` to assumption labels

**Slide 20 - Exit Strategy:**
- [ ] Upgrade main title to `text-5xl sm:text-6xl md:text-7xl`
- [ ] Standardize tier headers to `text-2xl sm:text-3xl`
- [ ] Add `text-base` to rationale text
- [ ] Standardize return numbers to `text-4xl sm:text-5xl`

**Slide 25 - Thank You:**
- [ ] Reduce from oversized to `text-5xl sm:text-6xl md:text-7xl`
- [ ] Add complete body hierarchy
- [ ] Add label sizing

**Slide 26-29 - Closing Slides:**
- [ ] Reduce all 9xl/8xl titles to 7xl standard
- [ ] Complete body text hierarchy (4xl → 3xl → 2xl → lg)
- [ ] Add missing label classes (base, sm, xs)

---

### 🟡 Medium Priority Fixes (2 issues - 6 slides)

**Slide 1 - Problem:**
- [ ] Add `text-sm` to label sections
- [ ] Standardize body text to full hierarchy

**Slide 2 - User Pain:**
- [ ] Add `text-base` to labels
- [ ] Complete body text sizing

**Slide 6 - Timing:**
- [ ] Add `text-4xl` for metrics
- [ ] Add `text-base` to labels

**Slide 7 - Solution Journey:**
- [ ] Add `text-3xl` tier (currently skips from 4xl to 2xl)
- [ ] Standardize step numbers

**Slide 8 - Platform:**
- [ ] Add `text-lg` to body sections
- [ ] Standardize comparison panel text

**Slide 11 - Unit Economics:**
- [ ] Add `text-4xl` for metrics
- [ ] Add `text-base` to labels

---

### 🟢 Minor Fixes (1 issue - 8 slides)

**Slide 9, 13, 21:** Add `text-7xl` tier to titles
**Slide 17, 18:** Add `text-lg` to body text
**Slide 30:** Complete title hierarchy

---

## 🎯 EXPECTED OUTCOMES

### Before Standardization:
- ❌ 21 slides with inconsistent sizing
- ❌ 52 text size issues across 3 categories
- ❌ 27.6% consistency rate
- ❌ Hard to read on different screen sizes
- ❌ Unprofessional appearance

### After Standardization:
- ✅ All 30 slides use identical hierarchy
- ✅ 100% consistency rate
- ✅ Perfect responsive scaling (mobile → tablet → desktop)
- ✅ Professional, polished appearance
- ✅ Easy to maintain (use TYPOGRAPHY constants)

---

## ⏱️ TIME ESTIMATE

| Phase | Duration | Complexity |
|-------|----------|------------|
| Phase 1: Create constants | 30 minutes | Easy |
| Phase 2: Fix 7 critical slides | 2 hours | Medium |
| Phase 3: Fix 14 remaining slides | 3 hours | Medium |
| Phase 4: Create components | 1 hour | Easy |
| **TOTAL** | **6.5 hours** | **Medium** |

---

## 🚀 QUICK START OPTION

If you want to start fundraising NOW and standardize later, you can:

1. **Phase 2 Only (2 hours):** Fix the 7 critical problem slides (0, 5, 19, 20, 25-29)
   - This brings consistency to the most important slides
   - Gets you to ~60% consistency (good enough for pitching)

2. **Full Standardization Later:** Complete Phases 1, 3, 4 after you secure first few meetings
   - Perfect for post-initial pitch polish
   - Shows evolution/attention to detail

---

## 📝 IMPLEMENTATION APPROACH

### Option 1: Manual Find/Replace (Quick & Simple)
- Use global search/replace in VSCode
- Find: `text-8xl` → Replace with: `text-6xl sm:text-7xl`
- Pros: Fast, no new files
- Cons: Error-prone, hard to maintain

### Option 2: Create Constants + Components (Recommended)
- Create typography.ts with all standard classes
- Create Typography.tsx components
- Refactor slides to use components
- Pros: Maintainable, scalable, reusable
- Cons: Takes more time initially

### Option 3: Hybrid Approach (Best for Now)
1. Create typography.ts constants file (30 min)
2. Manually fix critical slides using constants (2 hours)
3. Gradually refactor to components over time
- **Pros:** Gets you consistent quickly, sets up for future
- **Cons:** None - best of both worlds

---

## 🎨 VISUAL REFERENCE

### Standard Typography Hierarchy (After Standardization)

```
┌─────────────────────────────────────────────┐
│  SLIDE TITLE (7xl → 6xl → 5xl)             │
│  text-5xl sm:text-6xl md:text-7xl          │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                             │
│  Section Header (5xl → 4xl → 3xl)          │
│  text-3xl sm:text-4xl md:text-5xl          │
│  ─────────────────────────────────────────  │
│                                             │
│  Large Metric: 67-133x                      │
│  text-4xl sm:text-5xl md:text-6xl          │
│                                             │
│  Medium Metric: 10x LTV:CAC                 │
│  text-2xl sm:text-3xl md:text-4xl          │
│                                             │
│  Body Text: Regular paragraph content      │
│  text-base sm:text-lg md:text-xl           │
│                                             │
│  EYEBROW LABEL                              │
│  text-xs sm:text-sm uppercase              │
└─────────────────────────────────────────────┘
```

---

## ✅ NEXT STEPS

**Recommended Path:**

1. **TODAY (30 min):** Create typography.ts constants file
2. **THIS WEEK (2 hours):** Fix 7 critical slides (0, 5, 19, 20, 25-29)
3. **NEXT WEEK (3 hours):** Standardize remaining 14 slides
4. **FUTURE (1 hour):** Create Typography components for maintainability

**Alternative Path (If Fundraising Urgently):**

1. **SKIP FOR NOW:** Typography inconsistency won't kill your fundraise
2. **FOCUS ON:** Getting merchant testimonials, product screenshots
3. **STANDARDIZE AFTER:** You secure first investor meeting
4. **POLISH BEFORE:** Final investor presentations

---

## 🎯 BOTTOM LINE

**Issue Confirmed:** Your typography is only 27.6% consistent across 30 slides.

**Impact:** Looks unprofessional, harder to read, hurts credibility.

**Solution:** 6.5 hours to achieve 100% consistency using standardized hierarchy.

**Recommendation:**
- If fundraising urgently → Fix 7 critical slides (2 hours) then pitch
- If you have time → Full standardization (6.5 hours) for perfect deck

**Your call:** When do you need this deck investor-ready?

---

**Created:** January 30, 2026
**Agent ID:** a7a06d8 (Typography audit)
**Status:** Ready to implement
