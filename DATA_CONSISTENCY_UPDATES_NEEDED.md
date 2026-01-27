# Data Consistency Updates Required

## ✅ COMPLETED - ALL MATERIALS UPDATED (January 27, 2026)

### Core Documents
1. **STANDARDIZED_DATA.md** - Created single source of truth with complete 5-tier category structure
2. **src/app/card/page.tsx** (Investor One-Pager) - Updated TAM/SAM/SOM, GTM phases, and traction (30+ LOIs)

### Pitch Decks
3. **src/components/PitchDeckKangNew.tsx** (Main Deck) - All market data updated, GTM phases corrected
4. **src/components/PitchDeckFinal.tsx** - Updated TAM/SAM/SOM values
5. **src/components/PitchDeck10.tsx** - Converted to USD and GCC scope

### Website & Landing Pages
6. **src/app/page.tsx** (Main Landing) - All market references updated
7. **src/app/memo/page.tsx** (Investor Memo) - Market sizing corrected
8. **src/app/data-room/page.tsx** (Data Room) - TAM/SAM/SOM updated
9. **src/app/terms/page.tsx** (Terms) - Market references fixed

### Verified
10. **src/app/merchant-card/page.tsx** - No market data (merchant-focused only)

## 🔄 SKIPPED (Backup Files)

### Backup Files (Intentionally Not Updated)
- `/src/components/PitchDeckKang_backup_20260124_032916.tsx` - Historical backup, kept for reference

---

## Standard Values Reference

### Market Sizing
| Metric | Value | Geography | Definition |
|--------|-------|-----------|------------|
| **TAM** | $150B | GCC (6 countries) | Total offline retail & services |
| **SAM** | $45B | GCC | D2C retail + services (F&B, Beauty, Fashion, Fitness, etc.) |
| **SOM** | $1.35B | Dubai only | 3% market share in Dubai within 3 years |

### GTM Phases
| Phase | Timeline | Geography | Focus |
|-------|----------|-----------|-------|
| **Phase 1** | Y1-3 | Dubai | Launch & scale in Dubai across 3 horizons |
| **Phase 2** | Y4-5 | Qatar + KSA | Expand to 2 largest GCC markets |
| **Phase 3** | Y6+ | Kuwait, Bahrain, Oman | Complete GCC coverage |

### Phase 1 Horizons (Dubai)
| Horizon | Timeline | Focus |
|---------|----------|-------|
| **H1** | M1-12 | F&B, Beauty, Fashion, Fitness (core 4) |
| **H2** | M13-24 | Add Entertainment, Home Services, Pet |
| **H3** | M25-36 | Expand to all UAE cities (Abu Dhabi, Sharjah, etc.) |

### Key Metrics
- **Customer CAC**: AED 50 (75-85% lower than Meta/Google)
- **Customer Cashback**: 10% on all offline purchases
- **Merchant Commission**: 15% per transaction
- **Merchant Take-Home**: 85%
- **Setup Fee**: FREE
- **Monthly Fee**: FREE

### Traction
- **Signed LOIs**: 30+ (merchants with signed agreements)
- **Pipeline**: 30+ (additional merchants in discussions)
- **Total Network**: 60+ merchants
- **Categories**: Tier 1 (F&B, Grocery & Essentials, Salons & Grooming, Fashion, Fitness & Wellness, Events)
- **MVP Progress**: 95% complete
- **Launch Date**: Q1 2025
- **Pre-Launch CAC**: $0 (organic)

### Fundraising
- **Current Round**: $500K pre-seed
- **Use of Funds**:
  - 40% Product & Tech
  - 30% Marketing & Growth
  - 20% Operations
  - 10% Reserve

---

## How to Update Files

### Step 1: Search for Inconsistencies
```bash
# Find all market size mentions
grep -r "TAM\|SAM\|SOM\|150B\|180B\|50B\|market" src/ --include="*.tsx" --include="*.ts"

# Find GTM mentions
grep -r "GTM\|go-to-market\|Dubai\|UAE\|GCC" src/ --include="*.tsx" --include="*.ts"
```

### Step 2: Update Each File
For each file found:
1. Read the current content
2. Identify incorrect values
3. Replace with standardized values from STANDARDIZED_DATA.md
4. Verify consistency with surrounding context

### Step 3: Verify Consistency
After all updates:
1. Check all investor-facing materials use same numbers
2. Check all merchant-facing materials use same numbers
3. Verify GTM phases are consistent across all docs
4. Test all pages to ensure data displays correctly

---

## Search Patterns to Find Issues

### Market Size Issues
- ❌ "AED 180B" (incorrect currency/value)
- ❌ "AED 50B SAM" (incorrect currency)
- ❌ "$60B UAE" (incorrect scope - should be GCC)
- ❌ "Year 1 Target: $30B" (way too high)
- ✅ "$150B GCC TAM"
- ✅ "$45B GCC SAM"
- ✅ "$1.35B Dubai SOM"

### Geography Issues
- ❌ "UAE market: $150B" (should be GCC)
- ❌ "Starting in UAE" (should be "Starting in Dubai")
- ❌ "UAE addressable market" (should be "GCC addressable market")
- ✅ "GCC TAM: $150B"
- ✅ "Starting in Dubai, expanding to GCC"

### GTM Issues
- ❌ Missing phase structure
- ❌ Missing horizon breakdown
- ❌ No KPI-based progression mentioned
- ✅ "Phase 1: Dubai (3 horizons)"
- ✅ "Phase 2: Qatar + KSA"
- ✅ "Phase 3: Full GCC"
- ✅ "KPI-driven expansion"

---

## Summary of Changes

### Market Sizing Updates
**BEFORE**:
- TAM: $78B or AED 180B (inconsistent)
- SAM: $34B or AED 50B (inconsistent)
- SOM: $340M or AED 500M (inconsistent)
- Geography: UAE-focused with unclear GCC expansion

**AFTER**:
- **TAM**: $150B USD (GCC total offline retail & services)
- **SAM**: $45B USD (GCC D2C + local services)
- **SOM**: $1.35B USD (Dubai 3-year target, 3% penetration)
- **Geography**: Clear 3-phase expansion (Dubai → Qatar+KSA → Full GCC)

### GTM Strategy Standardization
**Phase 1 (Years 1-3)**: Dubai Launch
- **Horizon 1** (M1-12): F&B, Beauty, Fashion, Fitness
- **Horizon 2** (M13-24): Entertainment, Home Services, Pet
- **Horizon 3** (M25-36): All UAE cities (Abu Dhabi, Sharjah, etc.)

**Phase 2 (Years 4-5)**: Qatar + Saudi Arabia
**Phase 3 (Year 6+)**: Full GCC (Kuwait, Bahrain, Oman)

### Files Updated (10 total)
1. Investor One-Pager ([src/app/card/page.tsx](src/app/card/page.tsx))
2. Main Pitch Deck ([src/components/PitchDeckKangNew.tsx](src/components/PitchDeckKangNew.tsx))
3. Alternative Deck ([src/components/PitchDeckFinal.tsx](src/components/PitchDeckFinal.tsx))
4. Backup Deck ([src/components/PitchDeck10.tsx](src/components/PitchDeck10.tsx))
5. Main Landing Page ([src/app/page.tsx](src/app/page.tsx))
6. Investor Memo ([src/app/memo/page.tsx](src/app/memo/page.tsx))
7. Data Room ([src/app/data-room/page.tsx](src/app/data-room/page.tsx))
8. Terms Page ([src/app/terms/page.tsx](src/app/terms/page.tsx))
9. Merchant Card ([src/app/merchant-card/page.tsx](src/app/merchant-card/page.tsx)) - Verified (no changes needed)
10. Standardized Data Reference ([STANDARDIZED_DATA.md](STANDARDIZED_DATA.md)) - Created

---

## ✅ CONSISTENCY ACHIEVED

All investor-facing, merchant-facing, and public materials now reference:
- ✅ Same TAM ($150B GCC)
- ✅ Same SAM ($45B GCC)
- ✅ Same SOM ($1.35B Dubai 3yr)
- ✅ Same GTM phases (3 phases, 3 horizons in Phase 1)
- ✅ Same KPI-driven progression framework
- ✅ Same traction metrics (30+ signed LOIs, 30+ in pipeline, 60+ merchant network)
- ✅ Complete 5-tier category structure (Tier 1-5 from habit-forming to brand activations)

### Traction Updates (January 27, 2026)
**Changed From:**
- 15+ merchants with LOIs
- 3 categories (F&B, Beauty, Fitness)

**Changed To:**
- 30+ signed LOIs (merchants with signed agreements)
- 30+ in pipeline (additional merchants in discussions)
- 60+ merchant network (total pre-launch base)
- Tier 1 Categories: F&B, Grocery & Essentials, Salons & Grooming, Fashion, Fitness & Wellness, Events (selective)

### Category Structure Enhancement (January 27, 2026)
Added complete 5-tier category expansion framework to STANDARDIZED_DATA.md:
- **Tier 1**: High-Frequency, Habit-Forming (Horizon 1 - M1-12)
- **Tier 2**: Medium-Frequency, High-Value (Horizon 2 - M13-24)
- **Tier 3**: Experience & Lifestyle (Horizon 2-3 - M13-36)
- **Tier 4**: Community & Long-Tail (Horizon 3+ - M25+)
- **Tier 5**: Brand Activations & Pop-Ups (Ongoing)

**Last Updated**: January 27, 2026
