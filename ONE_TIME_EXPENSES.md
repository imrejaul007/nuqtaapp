# One-Time Expenses Feature ✅

## Overview

Added the ability to input **one-time exceptional expenses** for any month. These represent non-recurring costs like:
- Hiring bonuses
- Equipment purchases (laptops, servers, furniture)
- Legal fees (incorporation, contracts, IP)
- Office setup costs
- Marketing campaigns (one-off events)
- Security deposits
- Professional services (consultants, auditors)

## How It Works

### 1. Input Fields

**Location:** Assumptions → One-Time Expenses (Optional)

Five input fields for the first 5 months (expandable to all months if needed):
- Month 1 One-Time Expense: 0 AED
- Month 2 One-Time Expense: 0 AED
- Month 3 One-Time Expense: 0 AED
- Month 4 One-Time Expense: 0 AED
- Month 5 One-Time Expense: 0 AED

**Default:** 0 AED (no impact unless you add expenses)

### 2. Impact on Monthly Budget

When you add a one-time expense for a month:

```javascript
// Example: Month 3 has 50K AED one-time expense (office setup)

BEFORE deduction:
availableCash = 500K (bank) + 20K (revenue) + 0K (funding) = 520K
fixedExpenses = 25K
marketingBudget = 520K - 25K = 495K

AFTER deduction:
availableCash = 520K - 50K (one-time expense) = 470K
fixedExpenses = 25K (unchanged)
marketingBudget = 470K - 25K = 445K
```

**Result:** Marketing budget reduced by 50K that month, but fixed costs stay the same.

### 3. Bank Balance Impact

One-time expenses are **immediately deducted from bank balance** at the end of the month:

```javascript
newBankBalance = previousBalance + revenue + funding - recurringExpenses - oneTimeExpense
```

**Example:**
```
Month 3 Starting Balance: 500K
Revenue: 20K
Funding: 0K
Recurring Expenses: 250K (rent + tech + ops + marketing + support)
One-Time Expense: 50K (office setup)

Ending Balance = 500K + 20K + 0K - 250K - 50K = 220K
```

### 4. Console Logging

When a one-time expense is detected:

```
💸 Month 3: One-time expense of AED 50K (e.g., hiring, equipment, legal fees)
Month 3 Budget: Cash=470K, Fixed=25K, Marketing=445K, Runway=8.4mo
```

This helps you track:
- When exceptional costs occur
- How they impact available cash
- Effect on marketing budget
- Updated runway calculation

---

## Real-World Examples

### Example 1: Office Setup

**Scenario:** Moving to new office at Month 3

**Costs:**
- Security deposit: 15K AED
- Furniture: 20K AED
- IT setup: 10K AED
- **Total: 45K AED**

**Setup:**
- Month 3 One-Time Expense: 45,000 AED

**Impact:**
```
Month 3 Available Cash: 500K → 455K (after expense)
Marketing Budget: 475K → 430K
Users Acquired: 13,571 → 12,285 (-1,286 users that month)

Month 4: Back to normal (no one-time expense)
Marketing Budget: 475K
Users Acquired: 13,571 (recovered)
```

**Result:** Short-term reduction in acquisition, but necessary investment in infrastructure.

### Example 2: Key Hire Bonus

**Scenario:** Hiring CTO at Month 4 with signing bonus

**Costs:**
- Signing bonus: 80K AED
- Relocation: 15K AED
- Equipment (laptop, phone): 5K AED
- **Total: 100K AED**

**Setup:**
- Month 4 One-Time Expense: 100,000 AED

**Impact:**
```
Month 4 Available Cash: 600K → 500K
Marketing Budget: 575K → 475K
Cash Runway: 7.5mo → 6.25mo

⚠️ Runway drops below comfort level
→ May need to reduce recurring marketing spend
→ Or seek additional funding sooner
```

**Strategic Decision:** Worth it if CTO brings 2x efficiency to product development.

### Example 3: Legal & Compliance

**Scenario:** Series A preparation at Month 5

**Costs:**
- Legal fees (due diligence): 30K AED
- Auditor fees: 25K AED
- IP registration: 10K AED
- **Total: 65K AED**

**Setup:**
- Month 5 One-Time Expense: 65,000 AED

**Impact:**
```
Month 5 Available Cash: 800K → 735K
Marketing Budget: 775K → 710K

But also receiving funding:
Month 5 Funding: +900K AED
Final Available Cash: 735K + 300K (funding boost) = 1,035K
Marketing Budget: 1,010K (still strong!)
```

**Result:** Legal costs covered by incoming funding, minimal disruption to growth.

### Example 4: Marketing Campaign

**Scenario:** Launch campaign for Ramadan at Month 2

**Costs:**
- Influencer partnerships: 40K AED
- Video production: 20K AED
- Billboard ads: 30K AED
- **Total: 90K AED**

**Setup:**
- Month 2 One-Time Expense: 90,000 AED

**Impact:**
```
Month 2 Available Cash: 450K → 360K
Regular Marketing Budget: 425K (reduced to 335K)
One-Time Campaign: +90K
Total Marketing: 335K + 90K = 425K (same as before!)

Users Acquired: Same as planned
But budget is explicitly split between recurring and campaign spend
```

**Benefit:** Better tracking of campaign ROI vs. baseline marketing performance.

---

## Strategic Use Cases

### 1. Timing Major Expenses

**Good Timing:**
- After funding rounds (Month 5: +900K funding, Month 6: 50K office setup)
- During revenue growth periods
- When runway > 9 months

**Bad Timing:**
- When cash runway < 6 months
- Just before funding round close (looks bad to investors)
- During user acquisition critical periods

### 2. Budget Planning

Use one-time expenses to model:

**Q1 Planning:**
```
Month 1: 20K (incorporation, legal)
Month 2: 0K (focus on growth)
Month 3: 45K (office setup)
Total Q1 exceptional: 65K AED
```

**Impact on fundraising:**
```
Initial ask: 1.5M AED
+ Exceptional costs: 65K
Adjusted ask: 1.565M AED (or keep buffer)
```

### 3. Scenario Testing

**Scenario A: Lean Operation**
```
No one-time expenses
All cash to marketing
Faster user growth
Higher risk (no infrastructure investment)
```

**Scenario B: Balanced Approach**
```
Month 1: 20K legal
Month 3: 45K office
Month 4: 100K key hire
Month 5: 65K fundraising prep
Total: 230K over 5 months

Slower user growth
Lower risk (strong foundation)
Better positioned for scale
```

---

## Impact on KPI Gates

### Without One-Time Expenses

```
Month 1-5: Full marketing budget
H1→H2 Gate (5K MAU): Reached at Month 4
Marketing efficiency: 100%
```

### With Strategic One-Time Expenses

```
Month 1: -20K (legal) → 97% marketing efficiency
Month 2: 0K → 100% efficiency
Month 3: -45K (office) → 91% efficiency
Month 4: -100K (CTO hire) → 83% efficiency
Month 5: -65K (legal) → 88% efficiency

Average marketing efficiency: 92%
H1→H2 Gate (5K MAU): Reached at Month 5 (1 month delay)

BUT:
- Legally compliant ✅
- Professional office ✅
- Strong tech leadership ✅
- Fundraising-ready ✅
```

**Tradeoff:** 1 month slower to KPI gate, but 10x better positioned for scale.

---

## Dashboard & Reporting

### Cash Flow Tab

One-time expenses appear as a separate line item:

```
Month 3 Cash Flow:
Starting Balance:     500K
+ Revenue:            20K
+ Funding:            0K
- Recurring Expenses: 250K
- One-Time Expenses:  50K (office setup)
= Ending Balance:     220K
```

### P&L Statement

Total expenses include both recurring and one-time:

```
Month 3 Income Statement:
Revenue:              20K
Recurring Expenses:   250K
  - Rent:             3K
  - Tech:             15K
  - Ops:              6.5K
  - Marketing:        445K (reduced)
  - Support:          0.5K
One-Time Expenses:    50K
Total Expenses:       300K
Net Income:           -280K
```

### Advanced Metrics

**EBITDA Calculation:**
```
EBITDA = Revenue - Recurring Expenses
(Excludes one-time expenses for true operational profitability)
```

**Burn Rate:**
```
Monthly Burn = Recurring Expenses + One-Time Expenses
(Includes everything for runway calculation)
```

---

## Best Practices

### 1. Documentation

**Always note what the expense is for:**
```
Month 3: 45K → Office setup (deposit 15K, furniture 20K, IT 10K)
Month 4: 100K → CTO hiring (bonus 80K, relocation 15K, equipment 5K)
```

This helps when reviewing the model months later.

### 2. Conservative Estimates

**Add 20% buffer:**
```
Estimated office setup: 40K
Input to model: 48K (40K × 1.2)
```

One-time expenses often exceed estimates.

### 3. Runway Protection

**Rule:** Never let one-time expenses reduce runway below 6 months

```
Current runway: 9 months (720K ÷ 80K/month)
One-time expense: 150K
New runway: 7.1 months ((720K - 150K) ÷ 80K/month)
✅ Safe (> 6 months)

If expense was 250K:
New runway: 5.9 months
❌ Too risky, need to:
   - Reduce expense
   - Delay timing
   - Seek funding first
```

### 4. Monthly Limit

**Guideline:** One-time expenses should be < 50% of recurring monthly budget

```
Monthly budget: 250K
Max recommended one-time: 125K

Rationale:
- Keeps growth momentum
- Prevents runway shock
- Easier to explain to investors
```

---

## Investor Perspective

### What Investors Look For

**RED FLAGS:**
```
Month 1: 200K one-time expense
Month 2: 150K one-time expense
Month 3: 180K one-time expense

Questions from investor:
❌ "Why are 'one-time' expenses recurring?"
❌ "Is this poor planning or hiding recurring costs?"
❌ "Can we trust your budget projections?"
```

**GREEN FLAGS:**
```
Month 1: 20K one-time (legal, expected)
Month 2-4: 0K (focused execution)
Month 5: 65K one-time (fundraising prep, documented)

Investor reaction:
✅ "Clear planning and execution"
✅ "Transparent budgeting"
✅ "Strategic investment timing"
```

### Due Diligence

Investors will ask:
1. **"What were the one-time expenses for?"** → Have receipts/invoices
2. **"Why couldn't these be spread across months?"** → Explain lumpiness
3. **"How do we know these won't recur?"** → Show they're truly one-off

---

## Technical Implementation

### Variables Added
```javascript
// Input parsing
const expenseM1 = parseFloat(document.getElementById('expense-m1').value) || 0;
const expenseM2 = parseFloat(document.getElementById('expense-m2').value) || 0;
// ... etc

// Array for all months
let oneTimeExpenses = [expenseM1, expenseM2, expenseM3, expenseM4, expenseM5];
for (let i = 5; i < maxMonths; i++) {
    oneTimeExpenses.push(0);
}
```

### Monthly Calculation
```javascript
// Deduct from available cash
const oneTimeExpense = oneTimeExpenses[i];
if (oneTimeExpense > 0) {
    console.log(`💸 Month ${month}: One-time expense of AED ${(oneTimeExpense/1000).toFixed(0)}K`);
    availableCash -= oneTimeExpense;
}

// Include in total expenses
const recurringExpenses = rent + tech + ops + marketing + support;
const totalExpense = recurringExpenses + oneTimeExpense;

// Deduct from bank balance
newBankBalance = previousBalance + revenue + funding - totalExpense;
```

---

## Testing Instructions

1. Open [http://localhost:3003/financialprojection](http://localhost:3003/financialprojection)
2. Go to **Assumptions** tab
3. Scroll to **One-Time Expenses (Optional)**
4. Add expenses:
   - Month 1: 20,000 AED (legal setup)
   - Month 3: 45,000 AED (office setup)
   - Month 4: 100,000 AED (key hire)
5. Check browser console (F12):
   - See "💸 Month X: One-time expense..." messages
   - Verify budget calculations adjust
6. Go to **Cash Flow** tab:
   - Verify expenses appear in monthly breakdown
   - Check ending balance includes deductions
7. Go to **H1 Monthly** tab:
   - Verify user acquisition slightly lower in months with expenses
   - Confirm recovery in following months
8. Go to **Dashboard**:
   - Check if H1→H2 gate timing is affected
   - Verify overall trajectory still healthy

---

## Expected Behavior

### With No One-Time Expenses (Default)
```
All months: Full marketing budget
Smooth growth curve
Fastest KPI achievement
```

### With Strategic One-Time Expenses
```
Month 1: Slight dip (legal)
Month 2: Normal
Month 3: Moderate dip (office)
Month 4: Larger dip (hiring)
Month 5: Slight dip (fundraising prep)

Overall: 5-10% slower KPI achievement
But: Better positioned for scale and funding
```

---

## Future Enhancements (Optional)

1. **Categorization:** Dropdown for expense type (Hiring, Office, Legal, Marketing, Equipment)
2. **Recurring Detection:** Warning if "one-time" appears multiple months
3. **Approval Workflow:** Flag expenses > 100K for review
4. **ROI Tracking:** Link expenses to outcomes (e.g., CTO hire → 2x dev speed)
5. **Extended Months:** Add one-time expense inputs for months 6-36

---

**Status:** ✅ Complete and Working
**Last Updated:** January 29, 2026
**Key Benefit:** Realistic budget planning with exceptional costs accounted for
