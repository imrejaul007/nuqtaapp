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
                          <span className="text-white">{scenario.example.shares.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Strike price</span>
                          <span className="text-white">AED {scenario.example.strikePrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Exit price</span>
                          <span className="text-white">AED {scenario.example.exitPrice}</span>
                        </div>
                        <hr className="border-slate-700" />
                        <div className="flex justify-between">
                          <span className="text-slate-400">You pay</span>
                          <span className="text-red-400">-AED {scenario.example.exerciseCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Gross value</span>
                          <span className="text-white">AED {scenario.example.grossValue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between font-bold">
                          <span className="text-emerald-400">Net value</span>
                          <span className="text-emerald-400">AED {scenario.example.netValue.toLocaleString()}</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">{scenario.example.taxNote}</p>
                      </div>
                    </div>
                  )}

                  {scenario.example && 'yearsWorked' in scenario.example && (
                    <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                      <h4 className="font-bold text-cyan-400 mb-3">Example: 2 Years Worked</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Total grant</span>
                          <span className="text-white">{scenario.example.totalShares.toLocaleString()} shares</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Vested (50%)</span>
                          <span className="text-emerald-400">{scenario.example.vestedShares.toLocaleString()} shares ✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Unvested (forfeited)</span>
                          <span className="text-red-400">{scenario.example.unvestedShares.toLocaleString()} shares</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">{scenario.example.note}</p>
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
