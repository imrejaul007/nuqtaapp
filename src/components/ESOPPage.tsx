'use client';

import React, { useState } from 'react';
import {
  Coins,
  TrendingUp,
  Calendar,
  Users,
  Calculator,
  FileText,
  CheckCircle,
  Clock,
  Target,
  DollarSign,
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  Gift,
  Briefcase,
  Award,
  Scale,
  Lock,
  Unlock,
  PieChart,
  BarChart3,
  ArrowRight,
  Star,
  Zap,
  HelpCircle,
  Building2,
  Rocket
} from 'lucide-react';

/**
 * NUQTA ESOP (Employee Stock Option Plan)
 * =======================================
 * Complete documentation of equity compensation
 */

// ============================================
// EQUITY POOL STRUCTURE
// ============================================
const equityStructure = {
  totalShares: 10000000, // 10M shares
  breakdown: [
    { holder: 'Founder (Rejaul Karim)', percentage: 70, shares: 7000000, type: 'founder', vested: true },
    { holder: 'ESOP Pool', percentage: 15, shares: 1500000, type: 'esop', vested: false },
    { holder: 'Reserved for Co-Founder', percentage: 10, shares: 1000000, type: 'cofounder', vested: false },
    { holder: 'Future Investors (Series A+)', percentage: 5, shares: 500000, type: 'investor', vested: false },
  ]
};

// ============================================
// ROLE-BASED EQUITY BANDS
// ============================================
const equityBands = [
  {
    level: 'Co-Founder / C-Suite',
    roles: ['COO', 'CTO', 'CFO', 'CMO'],
    equityRange: '1-5%',
    sharesRange: '100,000 - 500,000',
    vestingSchedule: '4 years, 1-year cliff',
    notes: 'Early co-founders get higher end. Later C-suite hires get lower end.',
    examples: [
      { role: 'Co-Founder/COO (Month 1)', equity: '5%', shares: '500,000' },
      { role: 'CTO (Month 3)', equity: '2-3%', shares: '200,000 - 300,000' },
      { role: 'CFO (Year 2)', equity: '1-1.5%', shares: '100,000 - 150,000' },
    ]
  },
  {
    level: 'Department Heads',
    roles: ['Head of Growth', 'Head of Merchants', 'Lead Engineer', 'Marketing Manager'],
    equityRange: '0.25-1%',
    sharesRange: '25,000 - 100,000',
    vestingSchedule: '4 years, 1-year cliff',
    notes: 'Early heads get higher end. Role criticality matters.',
    examples: [
      { role: 'Lead Engineer (Month 1)', equity: '1%', shares: '100,000' },
      { role: 'Head of Growth (Month 2)', equity: '0.75%', shares: '75,000' },
      { role: 'Head of Merchants (Month 2)', equity: '0.5%', shares: '50,000' },
      { role: 'Marketing Manager (Month 3)', equity: '0.25%', shares: '25,000' },
    ]
  },
  {
    level: 'Senior Individual Contributors',
    roles: ['Senior Mobile Engineer', 'UI/UX Designer', 'Content Manager', 'Merchant Success Manager'],
    equityRange: '0.1-0.25%',
    sharesRange: '10,000 - 25,000',
    vestingSchedule: '4 years, 1-year cliff',
    notes: 'Based on experience and market rate.',
    examples: [
      { role: 'Senior Mobile Engineer', equity: '0.2%', shares: '20,000' },
      { role: 'UI/UX Designer', equity: '0.15%', shares: '15,000' },
      { role: 'Merchant Success Manager', equity: '0.1%', shares: '10,000' },
    ]
  },
  {
    level: 'Individual Contributors',
    roles: ['Backend Engineer', 'Growth Analyst', 'Creative Designer', 'BD Rep', 'Support Lead'],
    equityRange: '0.05-0.1%',
    sharesRange: '5,000 - 10,000',
    vestingSchedule: '4 years, 1-year cliff',
    notes: 'Entry-level equity grants. Can be refreshed based on performance.',
    examples: [
      { role: 'Backend Engineer', equity: '0.1%', shares: '10,000' },
      { role: 'Growth Analyst', equity: '0.075%', shares: '7,500' },
      { role: 'BD Rep', equity: '0.05%', shares: '5,000' },
    ]
  },
  {
    level: 'Support & Admin',
    roles: ['Finance Coordinator', 'HR Manager', 'Office Coordinator'],
    equityRange: '0.025-0.05%',
    sharesRange: '2,500 - 5,000',
    vestingSchedule: '4 years, 1-year cliff',
    notes: 'Smaller grants but still meaningful participation.',
    examples: [
      { role: 'HR Manager', equity: '0.05%', shares: '5,000' },
      { role: 'Finance Coordinator', equity: '0.03%', shares: '3,000' },
      { role: 'Office Coordinator', equity: '0.025%', shares: '2,500' },
    ]
  },
];

// ============================================
// VESTING SCHEDULE
// ============================================
const vestingExamples = [
  { month: 0, vested: 0, cumulative: 0, note: 'Grant date' },
  { month: 6, vested: 0, cumulative: 0, note: 'Still in cliff period' },
  { month: 12, vested: 25, cumulative: 25, note: 'Cliff complete! 25% vests' },
  { month: 18, vested: 12.5, cumulative: 37.5, note: '6 months of monthly vesting' },
  { month: 24, vested: 12.5, cumulative: 50, note: 'Halfway there!' },
  { month: 36, vested: 25, cumulative: 75, note: '3 years complete' },
  { month: 48, vested: 25, cumulative: 100, note: 'Fully vested!' },
];

// ============================================
// EXERCISE SCENARIOS
// ============================================
const exerciseScenarios = [
  {
    scenario: 'Stay Until IPO/Exit',
    description: 'You stay with Nuqta through an IPO or acquisition',
    steps: [
      'Your options vest over 4 years',
      'At exit, you can exercise your vested options',
      'Pay strike price × shares exercised',
      'Receive proceeds minus strike price',
      'Pay applicable taxes',
    ],
    example: {
      shares: 50000,
      strikePrice: 0.10,
      exitPrice: 10.00,
      exerciseCost: 5000,
      grossValue: 500000,
      netValue: 495000,
      taxNote: 'Taxes vary based on residency'
    }
  },
  {
    scenario: 'Leave After Vesting (Good Leaver)',
    description: 'You leave voluntarily after some vesting',
    steps: [
      'You keep only vested options',
      'Exercise window: 90 days (standard) to 10 years (Nuqta policy)',
      'Can choose to exercise or let expire',
      'If you exercise, you become a shareholder',
      'Wait for exit event to realize value',
    ],
    example: {
      yearsWorked: 2,
      totalShares: 50000,
      vestedShares: 25000,
      unvestedShares: 25000,
      note: 'Unvested shares return to pool'
    }
  },
  {
    scenario: 'Termination for Cause (Bad Leaver)',
    description: 'Terminated for misconduct or serious breach',
    steps: [
      'May lose ALL options (vested and unvested)',
      'Company can repurchase vested shares at lower price',
      'Specific terms in stock option agreement',
      'Avoid this by being a good employee!',
    ],
    warning: true
  },
  {
    scenario: 'Company Gets Acquired',
    description: 'Nuqta is acquired by another company',
    steps: [
      'Acquisition can be cash, stock, or both',
      'Vested options typically convert or cash out',
      'Unvested may accelerate (single/double trigger)',
      'Nuqta policy: 25% acceleration on acquisition',
      'Additional 75% if terminated within 12 months',
    ],
    note: 'This is called "double trigger acceleration"'
  },
];

// ============================================
// PERFORMANCE-BASED EQUITY (INVESTOR-FRIENDLY MODEL)
// ============================================
// Key Concept: Performance equity creates NEW shares with STRICT CAPS and BOARD GOVERNANCE
// Balanced approach: rewards performers while protecting investor interests

const shareCreationModel = {
  initialTotalShares: 10000000, // Starting 10M shares
  lifetimeCap: 500000, // LIFETIME cap of 500K new shares (5% max dilution ever)
  annualCap: 150000, // Max 150K new shares per year (1.5% dilution cap)
  creationTriggers: ['Major Milestones Only', 'Board Approval Required'],
  founderCreationCap: '1% lifetime (100K shares max)',
  teamCreationCap: '4% lifetime (400K shares max)',
  governance: 'Requires unanimous board approval including investor director',
};

const investorProtections = {
  antiDilution: 'Broad-based weighted average anti-dilution for investors',
  proRataRights: 'Investors can participate in ESOP expansion to maintain %',
  boardApproval: 'All share creation requires board vote (includes investor seat)',
  annualCap: 'Max 1.5% dilution from performance grants per year',
  lifetimeCap: 'Max 5% total dilution from all performance share creation',
  transparentReporting: 'Quarterly cap table updates shared with all shareholders',
};

const quarterlyShareCreation = {
  frequency: 'Semi-Annual (every 6 months)',
  reviewProcess: 'Board-approved with investor consent required',
  vestingForNewShares: '2-year vesting, 6-month cliff',
  categories: [
    { category: 'Founder/CEO Performance', allocation: 20, maxShares: 100000, note: 'Lifetime cap' },
    { category: 'Leadership Team', allocation: 30, maxShares: 150000, note: 'Lifetime cap' },
    { category: 'All Employees', allocation: 50, maxShares: 250000, note: 'Lifetime cap' },
  ]
};

const performanceTiers = [
  {
    tier: 'Exceeds Expectations',
    threshold: '110-125%',
    multiplier: '1.25x',
    color: 'emerald',
    description: 'Consistently exceeds targets across all KPIs',
  },
  {
    tier: 'Outstanding',
    threshold: '125-150%',
    multiplier: '1.5x',
    color: 'cyan',
    description: 'Exceptional performance with significant business impact',
  },
  {
    tier: 'Exceptional',
    threshold: '150%+',
    multiplier: '2x',
    color: 'amber',
    description: 'Transformational performance, game-changing contributions',
  },
];

// Founder performance share creation (with investor-friendly caps)
const founderShareCreation = {
  baseOwnership: '70% (7M shares)',
  lifetimeCap: '100,000 NEW shares max (1% dilution cap)',
  annualMax: '50,000 new shares/year',
  triggers: [
    { milestone: 'Series A Closed', newShares: '25,000', condition: '$1M+ raised at $10M+ valuation', boardApproval: true },
    { milestone: 'MAU 100K Achieved', newShares: '25,000', condition: '100K monthly active users', boardApproval: true },
    { milestone: 'Profitability', newShares: '25,000', condition: '3 consecutive profitable months', boardApproval: true },
    { milestone: 'Series B / $10M ARR', newShares: '25,000', condition: '$5M+ raised OR $10M ARR', boardApproval: true },
  ],
  governance: 'All founder grants require board approval with investor consent',
};

const rolePerformanceGrants = [
  {
    role: 'Founder/CEO',
    baseGrant: '70% (7M shares)',
    performancePool: '100K NEW shares LIFETIME cap',
    triggers: [
      { milestone: 'Series A Closed ($1M+)', grant: 'NEW', shares: '25,000' },
      { milestone: 'MAU 100K Achieved', grant: 'NEW', shares: '25,000' },
      { milestone: 'Profitability (3 months)', grant: 'NEW', shares: '25,000' },
      { milestone: 'Series B / $10M ARR', grant: 'NEW', shares: '25,000' },
    ],
    notes: 'Lifetime cap of 100K NEW shares (1% max dilution). All grants require board approval with investor consent.',
  },
  {
    role: 'Co-Founder/C-Suite',
    baseGrant: '1-5%',
    performancePool: '50K NEW shares LIFETIME cap each',
    triggers: [
      { milestone: 'Annual OKRs 120%+', grant: 'NEW', shares: '15,000/year' },
      { milestone: 'Revenue Target 125%+', grant: 'NEW', shares: '10,000 bonus' },
      { milestone: 'Key Milestone Achievement', grant: 'NEW', shares: '10,000' },
    ],
    notes: 'Lifetime cap per executive. Board approval required. 2-year vesting on all new grants.',
  },
  {
    role: 'Department Heads',
    baseGrant: '0.25-1%',
    performancePool: '25K NEW shares LIFETIME cap each',
    triggers: [
      { milestone: 'Annual OKRs 120%+', grant: 'NEW', shares: '8,000/year' },
      { milestone: 'Cross-functional Impact', grant: 'NEW', shares: '5,000 bonus' },
      { milestone: 'Exceptional Rating (annual)', grant: 'NEW', shares: '5,000' },
    ],
    notes: 'Lifetime cap per head. Board approval required. 2-year vesting, 6-month cliff.',
  },
  {
    role: 'Individual Contributors',
    baseGrant: '0.05-0.25%',
    performancePool: '10K NEW shares LIFETIME cap each',
    triggers: [
      { milestone: 'Annual KPIs 125%+', grant: 'NEW', shares: '3,000/year' },
      { milestone: 'High-Impact Project', grant: 'NEW', shares: '2,000 bonus' },
      { milestone: 'Exceptional Rating (annual)', grant: 'NEW', shares: '2,000' },
    ],
    notes: 'Lifetime cap per IC. Top 20% performers eligible. 2-year vesting, 6-month cliff.',
  },
];

const companyMilestones = [
  {
    milestone: 'Series A Raise',
    targets: ['$1M+ raised', 'Valuation $10M+'],
    poolUnlock: '100,000 NEW shares (Board Approved)',
    distribution: 'Founder: 25K, Leadership: 25K, All employees: 50K',
    isNewShares: true,
    governance: 'Requires board approval',
  },
  {
    milestone: 'MAU 100K',
    targets: ['100,000 monthly active users'],
    poolUnlock: '100,000 NEW shares (Board Approved)',
    distribution: 'Founder: 25K, Growth team: 40K, All others: 35K',
    isNewShares: true,
    governance: 'Requires board approval',
  },
  {
    milestone: 'Profitability',
    targets: ['3 consecutive months of profitability'],
    poolUnlock: '150,000 NEW shares (Board Approved)',
    distribution: 'Founder: 25K, All employees: 125K (tenure-weighted)',
    isNewShares: true,
    governance: 'Requires board approval',
  },
  {
    milestone: 'Series B / $10M ARR',
    targets: ['$5M+ raised OR $10M ARR'],
    poolUnlock: '150,000 NEW shares (Board Approved)',
    distribution: 'Founder: 25K, Leadership: 50K, All team: 75K',
    isNewShares: true,
    governance: 'Requires board approval',
  },
];

// ============================================
// FAQs
// ============================================
const faqs = [
  {
    q: 'What is a stock option?',
    a: 'A stock option gives you the right (not obligation) to buy company shares at a fixed price (strike price) in the future. If the company value increases, your options become more valuable.',
  },
  {
    q: 'What is the strike price?',
    a: 'The strike price is the price you pay to exercise (buy) your shares. It\'s set at the fair market value when your options are granted. For early employees, this is usually very low (e.g., AED 0.10/share).',
  },
  {
    q: 'What does "vesting" mean?',
    a: 'Vesting is the process by which you earn your equity over time. Standard is 4 years with 1-year cliff. You must stay 1 year to vest anything, then vest monthly after that.',
  },
  {
    q: 'What happens to unvested options if I leave?',
    a: 'Unvested options are forfeited and return to the ESOP pool. Only vested options are yours to keep (subject to exercise window).',
  },
  {
    q: 'Do I have to pay to exercise?',
    a: 'Yes, you pay strike price × number of shares. For example, 10,000 shares at AED 0.10 = AED 1,000 to exercise. This is usually much less than the shares are worth.',
  },
  {
    q: 'When should I exercise?',
    a: 'This depends on tax implications and your financial situation. Generally: 1) Early exercise can have tax benefits in some jurisdictions, 2) Wait until exit if you want to avoid paying money upfront. Consult a tax advisor.',
  },
  {
    q: 'What is the exercise window?',
    a: 'The time you have to exercise after leaving. Industry standard is 90 days. Nuqta offers 10 years, which is very employee-friendly. This gives you time to decide without pressure.',
  },
  {
    q: 'What if Nuqta never IPOs or gets acquired?',
    a: 'Your options may expire worthless if there\'s no liquidity event. However, some late-stage companies offer tender offers (secondary sales) where you can sell shares before an exit.',
  },
  {
    q: 'Are refresher grants given?',
    a: 'Yes! Top performers receive additional grants annually. This is separate from your initial grant and has its own 4-year vesting schedule.',
  },
  {
    q: 'How does performance-based share CREATION work?',
    a: 'We CREATE NEW SHARES when major milestones are hit, but with strict caps: 5% lifetime cap (500K shares max), 1.5% annual cap (150K/year). All share creation requires board approval with investor consent. This rewards performance while protecting all shareholders from excessive dilution.',
  },
  {
    q: 'Can I earn more equity than my initial grant?',
    a: 'Yes, but with reasonable limits. Each role has a lifetime cap: ICs can earn up to 10K NEW shares, Department Heads up to 25K, C-Suite up to 50K. A Senior Engineer with 20K initial shares could have ~46K shares after 4 years - a 130% increase while respecting investor-friendly caps.',
  },
  {
    q: 'When are NEW shares created and issued?',
    a: 'Performance shares are reviewed semi-annually (every 6 months) and require board approval with investor consent before issuance. Company milestone shares are created when milestones are achieved and verified by the board. All performance shares vest over 2 years with a 6-month cliff.',
  },
  {
    q: 'Does the founder also get performance shares?',
    a: 'Yes, but capped at 100K NEW shares lifetime (1% dilution max). The founder earns 25K shares for each major milestone: Series A, MAU 100K, Profitability, and Series B/$10M ARR. All founder grants require board approval with investor consent.',
  },
  {
    q: 'How are investor interests protected?',
    a: 'Multiple protections: (1) 5% lifetime cap on all new share creation, (2) 1.5% annual cap, (3) Board approval required with investor director consent, (4) Anti-dilution provisions for investors, (5) Pro-rata rights to maintain ownership %, (6) Quarterly cap table reporting.',
  },
  {
    q: 'How are options taxed in UAE?',
    a: 'UAE has no personal income tax, which is very favorable for equity. However, if you relocate, consult a tax advisor as other countries may tax equity differently.',
  },
];

const ESOPPage = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [selectedBand, setSelectedBand] = useState<number>(0);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Hero */}
      <section className="relative py-16 px-4 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-full px-4 py-2 mb-6">
            <Coins className="w-4 h-4 text-[#c9a227]" />
            <span className="text-[#c9a227] font-medium text-sm">Equity Compensation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="text-[#c9a227]">ESOP</span> Guide
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Own a piece of what you're building. This guide explains how equity works at Nuqta, who gets what, and how to exercise your options.
          </p>
        </div>
      </section>

      {/* Equity Pool Overview */}
      <section className="py-12 px-4 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              <PieChart className="w-7 h-7 text-[#c9a227] inline mr-2" />
              Equity Pool Structure
            </h2>
            <p className="text-slate-400">How Nuqta's equity is allocated</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pie Chart Visual */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">Total: {(equityStructure.totalShares / 1000000).toFixed(0)}M Shares</h3>
              <div className="space-y-3">
                {equityStructure.breakdown.map((item, i) => {
                  const colors = {
                    founder: 'bg-[#c9a227]',
                    esop: 'bg-emerald-500',
                    cofounder: 'bg-cyan-500',
                    investor: 'bg-purple-500',
                  };
                  return (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-300">{item.holder}</span>
                        <span className="font-bold text-white">{item.percentage}%</span>
                      </div>
                      <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${colors[item.type as keyof typeof colors]} rounded-full`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{item.shares.toLocaleString()} shares</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-[#c9a227]" />
                  <h4 className="font-bold text-white">15% ESOP Pool</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  1.5 million shares reserved for employees. This is generous for an early-stage startup - industry standard is 10-15%.
                </p>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <h4 className="font-bold text-white">Co-Founder Pool</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  10% reserved for a co-founder/COO. This will vest over 4 years with 1-year cliff, same as other employees.
                </p>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <h4 className="font-bold text-white">Dilution Protection</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  ESOP pool may be topped up in future funding rounds. Your % ownership may be diluted but your number of shares stays the same.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equity Bands by Role */}
      <section className="py-12 px-4 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              <Briefcase className="w-7 h-7 text-emerald-400 inline mr-2" />
              Equity by Role
            </h2>
            <p className="text-slate-400">What each level can expect</p>
          </div>

          {/* Band Selector */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {equityBands.map((band, i) => (
              <button
                key={i}
                onClick={() => setSelectedBand(i)}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  selectedBand === i
                    ? 'bg-[#c9a227] text-[#0a1628]'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {band.level}
              </button>
            ))}
          </div>

          {/* Selected Band Details */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <p className="text-slate-400 text-sm">Equity Range</p>
                <p className="text-3xl font-black text-[#c9a227]">{equityBands[selectedBand].equityRange}</p>
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-sm">Shares Range</p>
                <p className="text-3xl font-black text-emerald-400">{equityBands[selectedBand].sharesRange}</p>
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-sm">Vesting</p>
                <p className="text-xl font-bold text-white">{equityBands[selectedBand].vestingSchedule}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-white mb-2">Applicable Roles</h4>
              <div className="flex flex-wrap gap-2">
                {equityBands[selectedBand].roles.map((role, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">{role}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4 mb-4">
              <p className="text-slate-400 text-sm">
                <AlertTriangle className="w-4 h-4 text-amber-400 inline mr-1" />
                {equityBands[selectedBand].notes}
              </p>
            </div>

            <h4 className="font-bold text-white mb-3">Example Grants</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {equityBands[selectedBand].examples.map((ex, i) => (
                <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                  <p className="text-white font-medium text-sm mb-2">{ex.role}</p>
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-xs">Equity</span>
                    <span className="text-[#c9a227] font-bold">{ex.equity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-xs">Shares</span>
                    <span className="text-emerald-400 font-bold">{ex.shares}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vesting Schedule */}
      <section className="py-12 px-4 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              <Clock className="w-7 h-7 text-cyan-400 inline mr-2" />
              Vesting Schedule
            </h2>
            <p className="text-slate-400">4 years with 1-year cliff</p>
          </div>

          {/* Visual Timeline */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 mb-6">
            <div className="relative">
              {/* Progress bar */}
              <div className="h-4 bg-slate-700 rounded-full mb-4">
                <div className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 rounded-full" style={{ width: '100%' }} />
              </div>

              {/* Milestones */}
              <div className="flex justify-between text-xs text-slate-400">
                <div className="text-center">
                  <div className="w-3 h-3 bg-slate-500 rounded-full mx-auto mb-1" />
                  <p>Month 0</p>
                  <p className="text-white font-medium">0%</p>
                </div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mb-1" />
                  <p>Month 12</p>
                  <p className="text-amber-400 font-medium">25%</p>
                  <p className="text-amber-400">Cliff!</p>
                </div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mx-auto mb-1" />
                  <p>Month 24</p>
                  <p className="text-white font-medium">50%</p>
                </div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-lime-500 rounded-full mx-auto mb-1" />
                  <p>Month 36</p>
                  <p className="text-white font-medium">75%</p>
                </div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mx-auto mb-1" />
                  <p>Month 48</p>
                  <p className="text-emerald-400 font-medium">100%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-800">
                <tr>
                  <th className="px-4 py-3 text-left text-sm text-slate-400">Month</th>
                  <th className="px-4 py-3 text-left text-sm text-slate-400">Vests This Period</th>
                  <th className="px-4 py-3 text-left text-sm text-slate-400">Total Vested</th>
                  <th className="px-4 py-3 text-left text-sm text-slate-400">Notes</th>
                </tr>
              </thead>
              <tbody>
                {vestingExamples.map((row, i) => (
                  <tr key={i} className={`border-t border-slate-700 ${row.month === 12 ? 'bg-amber-500/10' : row.month === 48 ? 'bg-emerald-500/10' : ''}`}>
                    <td className="px-4 py-3 font-medium text-white">{row.month}</td>
                    <td className="px-4 py-3 text-slate-300">{row.vested}%</td>
                    <td className="px-4 py-3 font-bold text-[#c9a227]">{row.cumulative}%</td>
                    <td className="px-4 py-3 text-slate-400 text-sm">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <h4 className="font-bold text-red-400 mb-2">
                <Lock className="w-4 h-4 inline mr-1" />
                The Cliff
              </h4>
              <p className="text-slate-300 text-sm">
                If you leave before 12 months, you get nothing. This protects the company from short-term hires. Stay at least 1 year!
              </p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
              <h4 className="font-bold text-emerald-400 mb-2">
                <Unlock className="w-4 h-4 inline mr-1" />
                Monthly Vesting
              </h4>
              <p className="text-slate-300 text-sm">
                After the cliff, you vest ~2.08% per month (1/48th of your grant). This means every month you stay, you earn more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance-Based Equity - INVESTOR-FRIENDLY MODEL */}
      <section className="py-12 px-4 border-b border-slate-800 bg-gradient-to-b from-amber-500/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-4">
              <Target className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 font-medium text-sm">Performance Share Creation (Capped & Governed)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              <Award className="w-7 h-7 text-amber-400 inline mr-2" />
              Performance-Based Share Creation
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Hit major milestones → NEW shares created with strict caps and board governance.
            </p>
          </div>

          {/* Investor Protection Callout */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-2 border-emerald-500/30 rounded-2xl p-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-400 mb-2">Investor-Friendly Governance</h3>
                <p className="text-slate-300 mb-3">
                  Our performance equity model includes <strong className="text-white">strict caps and board oversight</strong> to protect all shareholders:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span><strong className="text-white">5% lifetime cap</strong> on all new share creation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span><strong className="text-white">1.5% annual cap</strong> on dilution from grants</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span><strong className="text-white">Board approval</strong> required for all issuances</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span><strong className="text-white">Anti-dilution</strong> protection for investors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span><strong className="text-white">Pro-rata rights</strong> to maintain ownership %</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span><strong className="text-white">Quarterly reporting</strong> on cap table changes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Share Creation Overview - Updated with caps */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Coins className="w-6 h-6 text-amber-400" />
              </div>
              <p className="text-3xl font-black text-amber-400">{shareCreationModel.lifetimeCap.toLocaleString()}</p>
              <p className="text-slate-400 text-sm">LIFETIME Cap on NEW Shares</p>
              <p className="text-emerald-400 text-xs mt-1">Max 5% dilution ever</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-3xl font-black text-emerald-400">{shareCreationModel.annualCap.toLocaleString()}</p>
              <p className="text-slate-400 text-sm">Annual Cap on NEW Shares</p>
              <p className="text-emerald-400 text-xs mt-1">Max 1.5% dilution/year</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Scale className="w-6 h-6 text-cyan-400" />
              </div>
              <p className="text-3xl font-black text-cyan-400">Board</p>
              <p className="text-slate-400 text-sm">Approval Required</p>
              <p className="text-cyan-400 text-xs mt-1">Including investor director</p>
            </div>
          </div>

          {/* How Share Creation Works - Updated */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 mb-10">
            <h3 className="text-xl font-bold text-white mb-4">How Performance Share Creation Works</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: '1', title: 'Major Milestone', desc: 'Company achieves Series A, MAU 100K, Profitability, etc.', icon: Target },
                { step: '2', title: 'Board Review', desc: 'Board reviews milestone achievement and cap availability', icon: Scale },
                { step: '3', title: 'Investor Consent', desc: 'Investor director approves share creation', icon: BarChart3 },
                { step: '4', title: 'Capped Issuance', desc: 'NEW shares created within lifetime/annual caps', icon: Award },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-10 h-10 bg-[#c9a227]/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-[#c9a227] font-bold">{item.step}</span>
                  </div>
                  <item.icon className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                  <h4 className="font-bold text-white text-sm">{item.title}</h4>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Tiers */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Performance Tiers & Share Multipliers</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {performanceTiers.map((tier, i) => {
                const colorClasses = {
                  emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
                  cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
                  amber: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
                };
                return (
                  <div key={i} className={`border rounded-2xl p-5 ${colorClasses[tier.color as keyof typeof colorClasses]}`}>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-white">{tier.tier}</h4>
                      <span className="text-2xl font-black">{tier.multiplier}</span>
                    </div>
                    <p className="text-slate-400 text-sm mb-2">Target Achievement: {tier.threshold}</p>
                    <p className="text-slate-300 text-sm">{tier.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quarterly Share Creation Allocation */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 mb-10">
            <h3 className="text-xl font-bold text-white mb-4">Quarterly Share Creation Allocation</h3>
            <div className="space-y-4">
              {quarterlyShareCreation.categories.map((cat, i) => {
                const colors = ['bg-[#c9a227]', 'bg-cyan-500', 'bg-emerald-500'];
                return (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{cat.category}</span>
                      <span className="font-bold text-white">{cat.allocation}% (up to {cat.maxShares.toLocaleString()} NEW shares/year)</span>
                    </div>
                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className={`h-full ${colors[i]} rounded-full`} style={{ width: `${cat.allocation}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Performance Share Creation - Capped */}
      <section className="py-12 px-4 border-b border-slate-800 bg-[#c9a227]/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              <Star className="w-7 h-7 text-[#c9a227] inline mr-2" />
              Founder Performance Equity
            </h2>
            <p className="text-slate-400">NEW shares created for founder at major milestones (capped at 100K lifetime)</p>
          </div>

          {/* Founder Cap Highlight */}
          <div className="bg-slate-800/50 border-2 border-[#c9a227]/50 rounded-2xl p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-slate-400 text-sm">Lifetime Cap</p>
                <p className="text-3xl font-black text-[#c9a227]">100,000</p>
                <p className="text-slate-500 text-xs">NEW shares max</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Max Dilution</p>
                <p className="text-3xl font-black text-emerald-400">1%</p>
                <p className="text-slate-500 text-xs">of total shares</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Governance</p>
                <p className="text-3xl font-black text-cyan-400">Board</p>
                <p className="text-slate-500 text-xs">approval required</p>
              </div>
            </div>
          </div>

          {/* Milestone-based Grants */}
          <div className="bg-slate-800/50 border border-[#c9a227]/30 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-[#c9a227] mb-4 flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              Milestone-Based Founder Grants (Board Approved)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {founderShareCreation.triggers.map((trigger, i) => (
                <div key={i} className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{trigger.milestone}</span>
                    <span className="text-emerald-400 font-bold">+{trigger.newShares} NEW</span>
                  </div>
                  <p className="text-slate-400 text-xs mb-2">{trigger.condition}</p>
                  <div className="flex items-center gap-2">
                    <Scale className="w-3 h-3 text-cyan-400" />
                    <span className="text-cyan-400 text-xs">Board approval required</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-[#c9a227]/10 rounded-xl flex justify-between items-center">
              <p className="text-[#c9a227] text-sm font-medium">Lifetime Cap: {founderShareCreation.lifetimeCap}</p>
              <p className="text-slate-400 text-xs">All 4 milestones = 100K shares max</p>
            </div>
          </div>

          {/* Founder Example - Updated with caps */}
          <div className="bg-gradient-to-r from-[#c9a227]/10 to-amber-500/5 border border-[#c9a227]/30 rounded-2xl p-6">
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#c9a227]" />
              Example: Founder Equity Over 4 Years (All Milestones Achieved)
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Initial Ownership</span>
                  <span className="text-white font-bold">7,000,000 shares (70%)</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Year 1: Series A Closed</span>
                  <span className="text-emerald-400 font-bold">+25,000 NEW</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Year 2: MAU 500K Achieved</span>
                  <span className="text-emerald-400 font-bold">+25,000 NEW</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Year 3: Profitability</span>
                  <span className="text-emerald-400 font-bold">+25,000 NEW</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Year 4: Series B / $10M ARR</span>
                  <span className="text-emerald-400 font-bold">+25,000 NEW</span>
                </div>
                <div className="flex justify-between border-b border-amber-500/50 pb-2 bg-amber-500/10 px-2 rounded">
                  <span className="text-amber-400 font-medium">LIFETIME CAP REACHED</span>
                  <span className="text-amber-400 font-bold">100,000 total</span>
                </div>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                <h5 className="font-bold text-[#c9a227] mb-3">Founder Total (Capped)</h5>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Initial Shares</span>
                    <span className="text-white font-bold">7,000,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">NEW Shares (Capped)</span>
                    <span className="text-emerald-400 font-bold">+100,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Total Shares</span>
                    <span className="text-2xl font-black text-white">7,100,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Dilution to Others</span>
                    <span className="text-cyan-400 font-bold">~1%</span>
                  </div>
                  <hr className="border-slate-700" />
                  <p className="text-xs text-emerald-400">
                    ✓ Investor-friendly: capped dilution, board-approved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Grants by Role */}
      <section className="py-12 px-4 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              <Users className="w-7 h-7 text-cyan-400 inline mr-2" />
              Performance Grants by Role
            </h2>
            <p className="text-slate-400">How each role can earn additional equity</p>
          </div>

          <div className="space-y-6">
            {rolePerformanceGrants.map((role, i) => (
              <div key={i} className={`bg-slate-800/50 border rounded-2xl p-6 ${i === 0 ? 'border-[#c9a227]/50 bg-[#c9a227]/5' : 'border-slate-700'}`}>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className={`text-xl font-bold ${i === 0 ? 'text-[#c9a227]' : 'text-white'}`}>{role.role}</h3>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">Base: {role.baseGrant}</span>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">Performance: {role.performancePool}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  {role.triggers.map((trigger, j) => (
                    <div key={j} className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                      <div className="flex items-start gap-2 mb-2">
                        <Target className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-300 text-sm font-medium">{trigger.milestone}</p>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Grant</span>
                        <span className="text-[#c9a227] font-bold">{trigger.grant}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Shares</span>
                        <span className="text-emerald-400 font-bold">{trigger.shares}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-slate-500 text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-400 inline mr-1" />
                  {role.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestone - NEW Share Creation */}
      <section className="py-12 px-4 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4 text-pink-400" />
              <span className="text-pink-400 font-medium text-sm">NEW Shares Created at Each Milestone</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              <Rocket className="w-7 h-7 text-pink-400 inline mr-2" />
              Company Milestone Share Creation
            </h2>
            <p className="text-slate-400">Hit major milestones → NEW shares created for founder AND entire team</p>
          </div>

          <div className="space-y-4">
            {companyMilestones.map((ms, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-5">
                <div className="flex flex-wrap items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{ms.milestone}</h3>
                  <span className="px-4 py-1 bg-gradient-to-r from-emerald-500/20 to-[#c9a227]/20 border border-emerald-500/30 text-emerald-400 rounded-full font-bold">
                    {ms.poolUnlock}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-slate-400 text-sm mb-2">Targets:</p>
                    <div className="flex flex-wrap gap-2">
                      {ms.targets.map((target, j) => (
                        <span key={j} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">
                          {target}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-2">NEW Share Distribution:</p>
                    <p className="text-slate-300 text-sm">{ms.distribution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Milestone Shares - Capped */}
          <div className="mt-6 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-5 text-center">
            <h4 className="text-lg font-bold text-white mb-2">Total NEW Shares from All Milestones</h4>
            <p className="text-4xl font-black text-pink-400 mb-2">500,000</p>
            <p className="text-slate-400 text-sm">5% max dilution (lifetime cap) for achieving all milestones</p>
            <div className="mt-3 flex justify-center gap-4 text-xs">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">✓ Board Approved</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">✓ Investor Consent</span>
              <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full">✓ Capped Dilution</span>
            </div>
          </div>

          {/* Example Calculation - Team Member (Capped) */}
          <div className="mt-8 bg-gradient-to-r from-amber-500/10 to-emerald-500/10 border border-amber-500/30 rounded-2xl p-6">
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-amber-400" />
              Example: Senior Engineer - Performance Journey (with Caps)
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Initial Grant (Day 1)</span>
                  <span className="text-white font-bold">20,000 shares (0.2%)</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Year 1: Annual KPIs 125%+</span>
                  <span className="text-emerald-400 font-bold">+3,000 NEW</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Year 2: Outstanding + Milestone</span>
                  <span className="text-emerald-400 font-bold">+5,000 NEW</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Year 2: Promoted to Lead</span>
                  <span className="text-cyan-400 font-bold">+8,000 NEW (promotion)</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Year 3-4: As Lead (annual grants)</span>
                  <span className="text-emerald-400 font-bold">+10,000 NEW</span>
                </div>
                <div className="flex justify-between border-b border-amber-500/50 pb-2 bg-amber-500/10 px-2 rounded">
                  <span className="text-amber-400 font-medium">LIFETIME CAP (IC→Lead)</span>
                  <span className="text-amber-400 font-bold">26,000 max</span>
                </div>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                <h5 className="font-bold text-[#c9a227] mb-3">Total After 4 Years</h5>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Initial Shares</span>
                    <span className="text-white font-bold">20,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">NEW Shares (Capped)</span>
                    <span className="text-emerald-400 font-bold">+26,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Total Shares</span>
                    <span className="text-2xl font-black text-white">46,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Growth from Initial</span>
                    <span className="text-[#c9a227] font-bold">+130%</span>
                  </div>
                  <hr className="border-slate-700" />
                  <p className="text-xs text-slate-500">
                    At $10 exit = AED 460,000 value (vs. AED 200,000 initial)
                  </p>
                  <p className="text-xs text-emerald-400">
                    ✓ Investor-friendly caps respected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exercise Scenarios */}
      <section className="py-12 px-4 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              <Calculator className="w-7 h-7 text-pink-400 inline mr-2" />
              Exercise Scenarios
            </h2>
            <p className="text-slate-400">What happens in different situations</p>
          </div>

          <div className="space-y-6">
            {exerciseScenarios.map((scenario, i) => (
              <div
                key={i}
                className={`border rounded-2xl p-6 ${
                  scenario.warning
                    ? 'bg-red-500/10 border-red-500/30'
                    : 'bg-slate-800/50 border-slate-700'
                }`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{scenario.scenario}</h3>
                <p className="text-slate-400 mb-4">{scenario.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-white mb-2">How it works:</h4>
                    <ul className="space-y-2">
                      {scenario.steps.map((step, j) => (
                        <li key={j} className="flex items-start gap-2 text-slate-300 text-sm">
                          <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${scenario.warning ? 'text-red-400' : 'text-emerald-400'}`} />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {scenario.example && 'shares' in scenario.example && 'strikePrice' in scenario.example && (
                    <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                      <h4 className="font-bold text-[#c9a227] mb-3">Example Calculation</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Shares exercised</span>
                          <span className="text-white">{(scenario.example as { shares: number }).shares.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Strike price</span>
                          <span className="text-white">AED {(scenario.example as { strikePrice: number }).strikePrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Exit price</span>
                          <span className="text-white">AED {(scenario.example as { exitPrice: number }).exitPrice}</span>
                        </div>
                        <hr className="border-slate-700" />
                        <div className="flex justify-between">
                          <span className="text-slate-400">You pay</span>
                          <span className="text-red-400">-AED {(scenario.example as { exerciseCost: number }).exerciseCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Gross value</span>
                          <span className="text-white">AED {(scenario.example as { grossValue: number }).grossValue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between font-bold">
                          <span className="text-emerald-400">Net value</span>
                          <span className="text-emerald-400">AED {(scenario.example as { netValue: number }).netValue.toLocaleString()}</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">{(scenario.example as { taxNote: string }).taxNote}</p>
                      </div>
                    </div>
                  )}

                  {scenario.example && 'yearsWorked' in scenario.example && (
                    <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                      <h4 className="font-bold text-cyan-400 mb-3">Example: 2 Years Worked</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Total grant</span>
                          <span className="text-white">{(scenario.example as { totalShares: number }).totalShares.toLocaleString()} shares</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Vested (50%)</span>
                          <span className="text-emerald-400">{(scenario.example as { vestedShares: number }).vestedShares.toLocaleString()} shares ✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Unvested (forfeited)</span>
                          <span className="text-red-400">{(scenario.example as { unvestedShares: number }).unvestedShares.toLocaleString()} shares</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">{(scenario.example as { note: string }).note}</p>
                      </div>
                    </div>
                  )}

                  {scenario.note && (
                    <div className="md:col-span-2 bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-3">
                      <p className="text-cyan-400 text-sm">
                        <Zap className="w-4 h-4 inline mr-1" />
                        {scenario.note}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuqta-Specific Benefits */}
      <section className="py-12 px-4 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              <Gift className="w-7 h-7 text-[#c9a227] inline mr-2" />
              Nuqta Employee-Friendly Terms
            </h2>
            <p className="text-slate-400">Better than industry standard</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: '10-Year Exercise Window',
                standard: '90 days',
                nuqta: '10 years',
                benefit: 'If you leave, you have 10 years to decide whether to exercise. No pressure.',
                icon: Clock,
              },
              {
                title: 'Double Trigger Acceleration',
                standard: 'None',
                nuqta: '25% + 75%',
                benefit: '25% accelerates on acquisition. Additional 75% if you\'re let go within 12 months.',
                icon: Zap,
              },
              {
                title: 'Refresher Grants',
                standard: 'Rare',
                nuqta: 'Annual for top performers',
                benefit: 'Top performers get additional grants annually, keeping you motivated.',
                icon: TrendingUp,
              },
              {
                title: 'Early Exercise Option',
                standard: 'Not allowed',
                nuqta: 'Available',
                benefit: 'You can exercise unvested options early (subject to repurchase). Tax benefits in some cases.',
                icon: Rocket,
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#c9a227]/20 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#c9a227]" />
                  </div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                </div>
                <div className="flex gap-4 mb-3">
                  <div className="flex-1 bg-slate-900/50 rounded-lg p-2 text-center">
                    <p className="text-xs text-slate-500">Industry Standard</p>
                    <p className="text-slate-400 font-medium">{item.standard}</p>
                  </div>
                  <div className="flex-1 bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-2 text-center">
                    <p className="text-xs text-emerald-400">Nuqta</p>
                    <p className="text-emerald-400 font-bold">{item.nuqta}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm">{item.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-4 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              <HelpCircle className="w-7 h-7 text-cyan-400 inline mr-2" />
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-slate-800/80 transition-colors"
                >
                  <span className="font-medium text-white">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === i && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-700">
                    <p className="text-slate-300">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-[#c9a227]/10 to-amber-500/5 border-2 border-[#c9a227]/30 rounded-2xl p-6 text-center">
            <Coins className="w-10 h-10 text-[#c9a227] mx-auto mb-4" />
            <h2 className="text-2xl font-black mb-2">Questions About Your Equity?</h2>
            <p className="text-slate-400 mb-4">
              If you have questions about your specific grant, vesting, or exercise options, reach out to leadership.
            </p>
            <div className="text-sm text-slate-500">
              <p>• Equity grants: CEO</p>
              <p>• Vesting status: HR</p>
              <p>• Tax questions: Consult a tax advisor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 px-4 border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 text-sm">
            Last updated: February 2026 • Version 1.0
          </p>
          <p className="text-slate-600 text-xs mt-1">
            This is for informational purposes. Actual grants are governed by your Stock Option Agreement.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ESOPPage;
