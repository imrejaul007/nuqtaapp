# Fraud Controls Updated - COMPLETE

**Date**: January 28, 2026

## Summary

Updated Fraud Controls slide (Slide 13) based on user clarifications about actual fraud prevention mechanisms. Removed incorrect user-level daily/monthly caps and added per-store limits. Clarified refundable vs non-refundable transaction timing.

---

## What Changed

### 1. ✅ Restructured 9-Layer to 8-Layer Defense System

**User Directive**: "plz remove daily and monlthy cap" and confirmed "yes no cap" when asked about removing user-level restrictions.

**Changes Made**:

#### Removed Layer 4 (Progressive Trust) Entirely
- **OLD**: "New users start with AED 20/day cashback cap. Limits unlock progressively based on verified transaction history."
- **RATIONALE**: User confirmed all users have same rules from day 1, no daily caps exist

#### Renumbered All Subsequent Layers
- Old Layer 5 → New Layer 4 (Merchant KYC)
- Old Layer 6 → New Layer 5 (Behavioral Detection)
- Old Layer 7 → New Layer 6 (Per-Store Limits)
- Old Layer 8 → New Layer 7 (Delayed Redemption)
- Old Layer 9 → New Layer 8 (Manual Review Queue)

**Result**: Now 8-layer defense system (was 9 layers)

---

### 2. ✅ Updated Layer 2: Tiered Reward Release (was "Locked Rewards")

**User Clarification**:
- "if treansaction is non refundable nature they get instanly cashback 5%"
- "for refundable tranacation, rewards stay lock untill refundable time doesn't pass, or user cancel refundable option"
- "24 hours after socail share after verfication"

**Changes Made**:

#### [src/components/PitchDeckKangNew.tsx](src/components/PitchDeckKangNew.tsx):2111-2121

**BEFORE**:
```tsx
<h4 className="text-lg font-bold text-slate-900">Locked Rewards</h4>
<p className="text-sm text-slate-600 leading-relaxed">
  All earned coins locked initially. Redemption requires account age, verified transactions, and identity checks.
</p>
```

**AFTER**:
```tsx
<h4 className="text-lg font-bold text-slate-900">Tiered Reward Release</h4>
<p className="text-sm text-slate-600 leading-relaxed">
  <span className="font-semibold text-emerald-700">Non-refundable transactions:</span> 5% base cashback instantly credited.
  <span className="font-semibold text-orange-700">Refundable transactions:</span> 5% locked until refund window expires OR user cancels refund option.
  <span className="font-semibold text-blue-700">Social bonus:</span> +5% released 24 hours after post verification.
</p>
```

**Key Differences**:
- Distinguishes between refundable and non-refundable transaction types
- Instant cashback for non-refundable (no lock)
- Conditional lock for refundable (only until refund window passes)
- Social bonus has 24-hour verification window

---

### 3. ✅ Updated Layer 3: Social Verification

**User Clarification**: "24 hours after socail share after verfication"

**Changes Made**:

#### [src/components/PitchDeckKangNew.tsx](src/components/PitchDeckKangNew.tsx):2123-2134

**BEFORE**:
```tsx
<p className="text-sm text-slate-600 leading-relaxed">
  +5% social bonus requires public Instagram/TikTok post with merchant tag. Auto-verified via API or manual review.
</p>
```

**AFTER**:
```tsx
<p className="text-sm text-slate-600 leading-relaxed">
  +5% social bonus requires public Instagram/TikTok post with merchant tag. Released 24 hours after verification. Manual review for first 6 months, then automated via API.
</p>
```

**Key Addition**: Explicit 24-hour release timing after verification

---

### 4. ✅ Completely Rewrote Layer 6: Per-Store Limits (was "Hard Limits")

**User Directive**: "per store limit of 10 times in a month" and "plz remove daily and monlthy cap"

**Changes Made**:

#### [src/components/PitchDeckKangNew.tsx](src/components/PitchDeckKangNew.tsx):2176-2186

**BEFORE (Old Layer 7)**:
```tsx
<h4 className="text-lg font-bold text-slate-900">Hard Limits</h4>
<p className="text-sm text-slate-600 leading-relaxed">
  Internal daily (AED 100) and monthly (AED 500) caps per user. Not advertised, but protects budget without affecting genuine users.
</p>
```

**AFTER (New Layer 6)**:
```tsx
<h4 className="text-lg font-bold text-slate-900">Per-Store Limits</h4>
<p className="text-sm text-slate-600 leading-relaxed">
  10 rewarded transactions per store per month per user. Prevents single-merchant abuse while allowing unlimited rewards across different merchants. Users can visit 50 different stores and get rewarded at all 50.
</p>
```

**Critical Changes**:
- ❌ REMOVED: Daily AED 100 cap per user (never existed)
- ❌ REMOVED: Monthly AED 500 cap per user (never existed)
- ✅ ADDED: Per-store 10 transaction limit per month
- ✅ CLARIFIED: No total user-level limit exists

**Example**: User can earn rewards at:
- Store A: 10 times/month ✅
- Store B: 10 times/month ✅
- Store C: 10 times/month ✅
- ...50 different stores = 500 rewarded transactions/month ✅

---

### 5. ✅ Updated Layer 7: Delayed Redemption (was Layer 8)

**Changes Made**:

#### [src/components/PitchDeckKangNew.tsx](src/components/PitchDeckKangNew.tsx):2188-2199

**BEFORE**:
```tsx
<p className="text-sm text-slate-600 leading-relaxed">
  24-48 hour float window between earning and spending. Enough time to detect and block fraudulent patterns.
</p>
```

**AFTER**:
```tsx
<p className="text-sm text-slate-600 leading-relaxed">
  Non-refundable: Instant for base 5% cashback. Refundable: Locked until refund window expires. Social bonus: 24-hour verification window before release.
</p>
```

**Key Changes**:
- Removed generic "24-48 hour float" claim
- Clarified timing is transaction-type dependent
- Instant for non-refundable, locked for refundable, 24h for social

---

### 6. ✅ Updated Slide Header

**Changes Made**:

#### [src/components/PitchDeckKangNew.tsx](src/components/PitchDeckKangNew.tsx):2092-2094

**BEFORE**:
```tsx
<h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">9-Layer Defense System</h3>
```

**AFTER**:
```tsx
<h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">8-Layer Defense System</h3>
```

---

### 7. ✅ Updated Investor Q&A Section

**Changes Made**:

#### [src/components/PitchDeckKangNew.tsx](src/components/PitchDeckKangNew.tsx):2232-2237

**BEFORE**:
```tsx
We don't launch with open-ended rewards. Cashback and social incentives are locked, gated by verified transactions, progressive trust levels, and behavioral checks. Fraud thrives on instant liquidity — Nuqta removes that. Our early-stage target is <5% reward leakage, which we monitor weekly through merchant reconciliation and transaction pattern analysis.
```

**AFTER**:
```tsx
We don't launch with open-ended rewards. Cashback timing depends on transaction type (instant for non-refundable, locked for refundable). Social bonuses require 24-hour verification. We cap rewards at 10 transactions per store per month per user to prevent single-merchant abuse, while allowing unlimited rewards across different merchants. Behavioral ML flags suspicious patterns. Our early-stage target is <5% reward leakage, monitored weekly.
```

**Key Changes**:
- ❌ REMOVED: "progressive trust levels" (doesn't exist)
- ✅ ADDED: Transaction type distinction (refundable vs non-refundable)
- ✅ ADDED: Per-store 10x/month limit explanation
- ✅ CLARIFIED: Unlimited across different merchants

---

### 8. ✅ Updated Bottom Stats

**Changes Made**:

#### [src/components/PitchDeckKangNew.tsx](src/components/PitchDeckKangNew.tsx):2243-2256

**BEFORE**:
```tsx
<div className="bg-white rounded-xl p-5 border-2 border-blue-200 text-center shadow-sm">
  <p className="text-3xl font-black text-blue-600 mb-1">24-48h</p>
  <p className="text-sm text-slate-600 font-medium">Redemption float window</p>
</div>
<div className="bg-white rounded-xl p-5 border-2 border-purple-200 text-center shadow-sm">
  <p className="text-3xl font-black text-purple-600 mb-1">9 Layers</p>
  <p className="text-sm text-slate-600 font-medium">Defense mechanisms</p>
</div>
```

**AFTER**:
```tsx
<div className="bg-white rounded-xl p-5 border-2 border-blue-200 text-center shadow-sm">
  <p className="text-3xl font-black text-blue-600 mb-1">10x/mo</p>
  <p className="text-sm text-slate-600 font-medium">Per-store transaction limit</p>
</div>
<div className="bg-white rounded-xl p-5 border-2 border-purple-200 text-center shadow-sm">
  <p className="text-3xl font-black text-purple-600 mb-1">8 Layers</p>
  <p className="text-sm text-slate-600 font-medium">Defense mechanisms</p>
</div>
```

**Key Changes**:
- Replaced "24-48h float" with "10x/mo per-store limit" (more accurate)
- Changed "9 Layers" to "8 Layers"

---

## Files Modified

### Core Files
1. **[src/components/PitchDeckKangNew.tsx](src/components/PitchDeckKangNew.tsx)** - Slide 13 (Fraud Controls)
   - Removed Layer 4 (Progressive Trust) entirely
   - Updated Layer 2 (Tiered Reward Release) - refundable vs non-refundable
   - Updated Layer 3 (Social Verification) - 24-hour window
   - Rewrote Layer 6 (Per-Store Limits) - removed user caps, added store caps
   - Updated Layer 7 (Delayed Redemption) - transaction-type dependent timing
   - Renumbered all layers (5→4, 6→5, 7→6, 8→7, 9→8)
   - Updated header: "8-Layer Defense System"
   - Updated investor Q&A answer
   - Updated bottom stats: "10x/mo" and "8 Layers"

### Summary Documents Created
2. **[FRAUD_CONTROLS_UPDATED.md](FRAUD_CONTROLS_UPDATED.md)** (this file)

---

## Updated Fraud Control Framework

### Final 8-Layer Defense System

1. **Transaction-First Gating** - No transaction = no rewards. Cashback only after verified merchant confirmation.

2. **Tiered Reward Release** (UPDATED)
   - Non-refundable transactions: 5% instant
   - Refundable transactions: 5% locked until refund window expires OR user cancels refund option
   - Social bonus: +5% released 24 hours after verification

3. **Social Verification** (UPDATED)
   - Requires public Instagram/TikTok post with merchant tag
   - 24-hour verification window
   - Manual review first 6 months, then automated

4. **Merchant KYC** (was Layer 5)
   - UAE trade license verification
   - Employee self-dealing blocked

5. **Behavioral Detection** (was Layer 6)
   - ML flags suspicious patterns
   - Round-number transactions, velocity spikes, coordinated timing

6. **Per-Store Limits** (COMPLETELY REWRITTEN, was Layer 7)
   - 10 rewarded transactions per store per month per user
   - No user-level daily or monthly caps
   - Unlimited across different merchants

7. **Delayed Redemption** (UPDATED, was Layer 8)
   - Non-refundable: Instant 5% base cashback
   - Refundable: Locked until refund window expires
   - Social bonus: 24-hour verification window

8. **Manual Review Queue** (was Layer 9)
   - First 6 months: >AED 50 redemptions manually reviewed
   - Scales to automated ML post-PMF

---

## Verification

### Removed References ✅
```bash
grep -r "AED 100.*daily\|AED 500.*monthly\|AED 20.*day" src/components/PitchDeckKangNew.tsx
# Result: No matches ✅
```

```bash
grep -r "Progressive Trust" src/components/PitchDeckKangNew.tsx
# Result: No matches ✅
```

```bash
grep -r "9-layer\|9 layer" src/components/PitchDeckKangNew.tsx -i
# Result: No matches ✅
```

### Added References ✅
- ✅ "10 rewarded transactions per store per month per user" (Layer 6)
- ✅ "Non-refundable transactions: 5% base cashback instantly credited" (Layer 2)
- ✅ "Refundable transactions: 5% locked until refund window expires OR user cancels refund option" (Layer 2)
- ✅ "Released 24 hours after verification" (Layer 3)
- ✅ "8-Layer Defense System" (header)
- ✅ "10x/mo per-store transaction limit" (bottom stats)
- ✅ "8 Layers" (bottom stats)

---

## Before/After Comparison

### Before (Incorrect)
- ❌ 9-layer defense system
- ❌ Layer 4: Progressive Trust (AED 20/day new user cap)
- ❌ Layer 7: Hard Limits (AED 100 daily, AED 500 monthly per user)
- ❌ Layer 2: "All earned coins locked initially"
- ❌ Layer 8: "24-48 hour float window" (generic)
- ❌ Bottom stat: "24-48h Redemption float window"
- ❌ Investor answer mentioned "progressive trust levels"

### After (Correct)
- ✅ 8-layer defense system
- ✅ Layer 4: Merchant KYC (no progressive trust)
- ✅ Layer 6: Per-Store Limits (10 transactions per store per month, unlimited across stores)
- ✅ Layer 2: Tiered Reward Release (instant for non-refundable, locked for refundable)
- ✅ Layer 7: Delayed Redemption (transaction-type dependent timing)
- ✅ Bottom stat: "10x/mo Per-store transaction limit"
- ✅ Investor answer explains transaction types and per-store limits

---

## User Feedback Implemented

1. **"plz remove daily and monlthy cap"** ✅
   - Removed AED 100 daily cap
   - Removed AED 500 monthly cap
   - Removed entire Progressive Trust layer

2. **"per store limit of 10 times in a month"** ✅
   - Added Layer 6: Per-Store Limits
   - Clarified "10 rewarded transactions per store per month per user"

3. **"if treansaction is non refundable nature they get instanly cashback 5%"** ✅
   - Updated Layer 2: "Non-refundable transactions: 5% base cashback instantly credited"

4. **"for refundable tranacation, rewards stay lock untill refundable time doesn't pass"** ✅
   - Updated Layer 2: "Refundable transactions: 5% locked until refund window expires OR user cancels refund option"

5. **"24 hours after socail share after verfication"** ✅
   - Updated Layer 3: "Released 24 hours after verification"
   - Updated Layer 2: "Social bonus: +5% released 24 hours after post verification"

6. **"yes no cap"** (when asked about removing user-level caps) ✅
   - Confirmed: No daily caps, no monthly caps, no user-level restrictions
   - Only per-store limits exist

---

## Impact Assessment

### Positive Changes
1. **Accurate Fraud Controls**: Deck now reflects actual fraud prevention mechanisms, not hypothetical ones
2. **No Misleading Claims**: Removed caps that don't exist (AED 100/day, AED 500/month)
3. **Clear Transaction Logic**: Investors understand refundable vs non-refundable distinction
4. **Per-Store Limits Explained**: Shows anti-fraud measure without limiting genuine users
5. **Credibility Restored**: Fraud controls are now truthful and internally consistent

### What Investors See Now
- **Transaction Types Matter**: "We distinguish refundable from non-refundable transactions with different cashback timing"
- **No User Limits**: "We don't cap users daily or monthly. We cap per-store to prevent single-merchant abuse."
- **Scalable Approach**: "Users can earn unlimited rewards across many merchants, just not repeatedly at one store"
- **Smart Fraud Prevention**: "10x per store per month stops collusion without blocking genuine multi-store users"

---

## Related Documents

- [INVESTOR_FEEDBACK_FIXES_COMPLETE.md](INVESTOR_FEEDBACK_FIXES_COMPLETE.md) - Previous fraud controls addition
- [STANDARDIZED_DATA.md](STANDARDIZED_DATA.md) - Single source of truth (will need update)

---

**Update Completed**: January 28, 2026
**Files Modified**: 1 file (PitchDeckKangNew.tsx)
**Lines Changed**: ~150 lines in Slide 13
**Integrity Status**: ✅ 100% - Fraud controls now reflect actual mechanisms, no fabricated caps

---

## Next Steps (Optional)

1. **Update STANDARDIZED_DATA.md** with finalized fraud control documentation
2. **Test Slide 13** visually to ensure 8-layer grid displays correctly (2-2-2-2 or 3-3-2 layout)
3. **Review all other slides** to ensure no other references to "9 layers" or incorrect caps

---

## User Directives Summary

All user instructions successfully implemented:
1. ✅ "plz remove daily and monlthy cap" - Removed AED 100/day and AED 500/month caps
2. ✅ "per store limit of 10 times in a month" - Added per-store limit layer
3. ✅ "if treansaction is non refundable nature they get instanly cashback 5%" - Updated Layer 2
4. ✅ "for refundable tranacation, rewards stay lock untill refundable time doesn't pass" - Updated Layer 2
5. ✅ "24 hours after socail share after verfication" - Updated Layer 3 and Layer 2
6. ✅ "yes no cap" (removing user restrictions) - Removed Progressive Trust layer entirely
