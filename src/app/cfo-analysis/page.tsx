'use client';

import React, { useState } from 'react';
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Target,
  BarChart3,
  PieChart,
  LineChart,
  Calculator,
  Wallet,
  CreditCard,
  Building2,
  Users,
  Store,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  Shield,
  AlertCircle,
  FileText,
  Calendar,
  Zap,
  Scale,
  Briefcase,
  ChevronDown,
  ChevronRight,
  RefreshCw,
  Activity,
  Gauge,
  Flag
} from 'lucide-react';

// ========================================
// CFO COMPREHENSIVE FINANCIAL ANALYSIS
// ========================================

interface FinancialMetric {
  label: string;
  value: string;
  target?: string;
  status: 'good' | 'warning' | 'critical' | 'pending';
  trend?: 'up' | 'down' | 'stable';
  note?: string;
}

interface DataInconsistency {
  issue: string;
  location: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  resolution: string;
}

// Current Financial Snapshot
const financialSnapshot = {
  cashPosition: 'AED 180,000',
  monthlyBurn: 'AED 40,000',
  runway: '4-5 months',
  currentRevenue: 'AED 0 (Pre-launch)',
  fundingTarget: '$400K SAFE',
  valuationCap: '$5M',
  teamSize: 4,
  plannedHires: 16
};

// Unit Economics (Theoretical)
const unitEconomics: FinancialMetric[] = [
  {
    label: 'Customer Acquisition Cost (CAC)',
    value: 'AED 30',
    target: '< AED 35',
    status: 'pending',
    note: 'Target - Not yet validated with real data'
  },
  {
    label: 'Lifetime Value (LTV)',
    value: 'AED 504',
    target: '> AED 400',
    status: 'pending',
    note: 'Theoretical calculation based on 14-month retention'
  },
  {
    label: 'LTV:CAC Ratio',
    value: '16.8x',
    target: '> 3x',
    status: 'pending',
    note: 'Excellent if validated - industry benchmark is 3x'
  },
  {
    label: 'Payback Period',
    value: '~2 months',
    target: '< 12 months',
    status: 'pending',
    note: 'Calculated from projected CAC and monthly revenue/user'
  },
  {
    label: 'Monthly Revenue/User',
    value: 'AED 3',
    target: '> AED 2.5',
    status: 'pending',
    note: 'Based on 8% take rate on AED 100 monthly GMV'
  },
  {
    label: 'Average Order Value (AOV)',
    value: 'AED 75',
    target: '> AED 50',
    status: 'pending',
    note: 'Industry average for F&B and retail'
  }
];

// Revenue Model Breakdown
const revenueStreams = [
  { name: 'Merchant Commissions', percentage: 70, description: '5-12% of transaction value', color: 'emerald' },
  { name: 'Subscription Fees', percentage: 15, description: 'AED 199-999/month per merchant', color: 'blue' },
  { name: 'Premium Features', percentage: 10, description: 'User premium + merchant add-ons', color: 'purple' },
  { name: 'Data & Insights', percentage: 5, description: 'B2B data partnerships', color: 'amber' }
];

// 5-Year Financial Projections
const projections = [
  { year: 'Y1', users: '100K', merchants: '2,500', gmv: 'AED 120M', revenue: 'AED 9.6M', ebitda: 'AED 960K', margin: '10%' },
  { year: 'Y2', users: '500K', merchants: '10,000', gmv: 'AED 600M', revenue: 'AED 48M', ebitda: 'AED 14.4M', margin: '30%' },
  { year: 'Y3', users: '1.5M', merchants: '30,000', gmv: 'AED 1.8B', revenue: 'AED 144M', ebitda: 'AED 57.6M', margin: '40%' },
  { year: 'Y4', users: '3M', merchants: '60,000', gmv: 'AED 3.6B', revenue: 'AED 288M', ebitda: 'AED 144M', margin: '50%' },
  { year: 'Y5', users: '5M', merchants: '100K', gmv: 'AED 6B', revenue: 'AED 480M', ebitda: 'AED 288M', margin: '60%' }
];

// Data Inconsistencies Found
const dataInconsistencies: DataInconsistency[] = [
  {
    issue: 'Unit Economics Presented as Validated',
    location: 'financial-models vs cfo-report',
    severity: 'critical',
    resolution: 'Clearly label all metrics as "Targets" until validated with real cohort data post-launch'
  },
  {
    issue: 'Financial Model Marked as Missing',
    location: 'cfo-report fundraising checklist',
    severity: 'high',
    resolution: 'The financial-models page exists but needs to be exported as investor-ready spreadsheet'
  },
  {
    issue: 'H1 Team Size Inconsistency',
    location: 'Various HR documents',
    severity: 'medium',
    resolution: 'FIXED - Standardized to 20 people across all documents'
  },
  {
    issue: 'COO Compensation Range Mismatch',
    location: 'ExecutiveTeam.tsx vs TeamPage.tsx',
    severity: 'medium',
    resolution: 'FIXED - Aligned to AED 30-45K/month + 5-10% equity'
  },
  {
    issue: 'C-Suite Status Inconsistency',
    location: 'ExecutiveTeam.tsx',
    severity: 'high',
    resolution: 'FIXED - CMO and CHRO now marked as FILLED to match TeamPage.tsx'
  }
];

// Financial Health Scorecard
const healthScorecard = [
  { category: 'Cash Position', score: 40, maxScore: 100, status: 'critical', note: '4-5 months runway, no revenue' },
  { category: 'Unit Economics', score: 70, maxScore: 100, status: 'warning', note: 'Strong targets but unvalidated' },
  { category: 'Revenue Model', score: 85, maxScore: 100, status: 'good', note: 'Clear model with tiered pricing' },
  { category: 'Financial Controls', score: 30, maxScore: 100, status: 'critical', note: 'No proper accounting system' },
  { category: 'Fundraising Readiness', score: 65, maxScore: 100, status: 'warning', note: 'SAFE docs ready, data room incomplete' },
  { category: 'Merchant Pipeline', score: 80, maxScore: 100, status: 'good', note: '32 LOIs signed, AED 850K potential GMV' }
];

// Critical Risks
const criticalRisks = [
  {
    risk: 'Runway Crisis',
    severity: 'critical',
    impact: 'Company runs out of cash in 4-5 months',
    probability: 'High if SAFE doesn\'t close',
    mitigation: 'Close SAFE round immediately, reduce burn rate, explore bridge options'
  },
  {
    risk: 'Unit Economics Unvalidated',
    severity: 'high',
    impact: 'Investors may not believe LTV:CAC claims without data',
    probability: 'Medium',
    mitigation: 'Build cohort tracking from Day 1, present as "targets" not "proven"'
  },
  {
    risk: 'Zero Revenue Pre-Launch',
    severity: 'high',
    impact: 'No proof of revenue model until merchants go live',
    probability: 'Certain until launch',
    mitigation: 'Accelerate launch, convert LOIs to signed agreements'
  },
  {
    risk: 'Financial Controls Missing',
    severity: 'high',
    impact: 'Due diligence will expose accounting gaps',
    probability: 'Certain',
    mitigation: 'Set up Xero/QuickBooks immediately, hire bookkeeper'
  },
  {
    risk: 'Merchant Conversion Risk',
    severity: 'medium',
    impact: '32 LOIs doesn\'t guarantee live merchants',
    probability: 'Medium',
    mitigation: 'Convert LOIs to binding agreements, offer launch incentives'
  }
];

// 90-Day Action Plan
const actionPlan = [
  {
    month: 'Month 1 (Feb 2026)',
    priority: 'Foundation',
    actions: [
      { task: 'Set up Xero/QuickBooks accounting', status: 'pending', owner: 'CFO' },
      { task: 'Create formal expense categorization', status: 'pending', owner: 'CFO' },
      { task: 'Build 3-year financial model in Excel', status: 'in_progress', owner: 'CFO' },
      { task: 'Implement unit economics tracking', status: 'pending', owner: 'CFO + CTO' },
      { task: 'Organize investor data room', status: 'pending', owner: 'CFO + CEO' }
    ]
  },
  {
    month: 'Month 2 (Mar 2026)',
    priority: 'Launch & Revenue',
    actions: [
      { task: 'Launch with 25+ merchants', status: 'pending', owner: 'CEO + Merchant Team' },
      { task: 'Activate merchant billing Day 1', status: 'pending', owner: 'CFO + CTO' },
      { task: 'Track first cohort LTV/CAC', status: 'pending', owner: 'CFO' },
      { task: 'Close SAFE round ($400K)', status: 'in_progress', owner: 'CEO' },
      { task: 'First revenue target: AED 5K', status: 'pending', owner: 'All' }
    ]
  },
  {
    month: 'Month 3 (Apr 2026)',
    priority: 'Scale & Optimize',
    actions: [
      { task: 'Scale to 75+ merchants', status: 'pending', owner: 'Merchant Team' },
      { task: 'Revenue target: AED 25K', status: 'pending', owner: 'All' },
      { task: 'Publish first cohort analysis', status: 'pending', owner: 'CFO' },
      { task: 'Complete data room for Series A prep', status: 'pending', owner: 'CFO' },
      { task: 'First monthly P&L close', status: 'pending', owner: 'CFO' }
    ]
  }
];

// Use of Funds Breakdown
const useOfFunds = [
  { category: 'Marketing & User Acquisition', amount: '$140K', percentage: 35, color: 'pink' },
  { category: 'Product & Technology', amount: '$100K', percentage: 25, color: 'blue' },
  { category: 'Team Expansion', amount: '$80K', percentage: 20, color: 'emerald' },
  { category: 'Operations & Support', amount: '$60K', percentage: 15, color: 'orange' },
  { category: 'Reserve / Buffer', amount: '$20K', percentage: 5, color: 'slate' }
];

export default function CFOAnalysisPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('snapshot');

  const overallScore = Math.round(healthScorecard.reduce((acc, item) => acc + item.score, 0) / healthScorecard.length);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              <span className="text-emerald-400 font-medium text-sm sm:text-base">CFO Analysis</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Comprehensive Financial<br />Analysis Report
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
              Complete audit of Nuqta&apos;s financial health, data consistency, and strategic recommendations
            </p>
          </div>

          {/* Overall Health Score */}
          <div className="max-w-md mx-auto bg-white/5 rounded-2xl border border-white/10 p-6 text-center">
            <div className="text-5xl sm:text-6xl font-bold mb-2">
              <span className={overallScore >= 70 ? 'text-emerald-400' : overallScore >= 50 ? 'text-amber-400' : 'text-red-400'}>
                {overallScore}
              </span>
              <span className="text-white/40 text-2xl">/100</span>
            </div>
            <div className="text-white/60 mb-4">Financial Health Score</div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
              overallScore >= 70 ? 'bg-emerald-500/20 text-emerald-400' :
              overallScore >= 50 ? 'bg-amber-500/20 text-amber-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {overallScore >= 70 ? <CheckCircle className="w-4 h-4" /> :
               overallScore >= 50 ? <AlertTriangle className="w-4 h-4" /> :
               <XCircle className="w-4 h-4" />}
              {overallScore >= 70 ? 'Launch Ready' : overallScore >= 50 ? 'Needs Attention' : 'Critical Issues'}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Snapshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Activity className="w-6 h-6 text-emerald-400" />
          Current Financial Snapshot
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-red-500/10 rounded-xl border border-red-500/20 p-4">
            <div className="text-red-400 text-sm mb-1">Cash Position</div>
            <div className="text-2xl font-bold text-white">{financialSnapshot.cashPosition}</div>
            <div className="text-red-400/60 text-xs mt-1">Low - Runway risk</div>
          </div>
          <div className="bg-amber-500/10 rounded-xl border border-amber-500/20 p-4">
            <div className="text-amber-400 text-sm mb-1">Monthly Burn</div>
            <div className="text-2xl font-bold text-white">{financialSnapshot.monthlyBurn}</div>
            <div className="text-amber-400/60 text-xs mt-1">Will increase with hires</div>
          </div>
          <div className="bg-red-500/10 rounded-xl border border-red-500/20 p-4">
            <div className="text-red-400 text-sm mb-1">Runway</div>
            <div className="text-2xl font-bold text-white">{financialSnapshot.runway}</div>
            <div className="text-red-400/60 text-xs mt-1">CRITICAL - Need funding</div>
          </div>
          <div className="bg-slate-500/10 rounded-xl border border-slate-500/20 p-4">
            <div className="text-slate-400 text-sm mb-1">Current Revenue</div>
            <div className="text-2xl font-bold text-white">AED 0</div>
            <div className="text-slate-400/60 text-xs mt-1">Pre-launch stage</div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-emerald-500/10 rounded-xl border border-emerald-500/20 p-4">
            <div className="text-emerald-400 text-sm mb-1">Funding Target</div>
            <div className="text-2xl font-bold text-white">{financialSnapshot.fundingTarget}</div>
            <div className="text-emerald-400/60 text-xs mt-1">Post-money SAFE</div>
          </div>
          <div className="bg-blue-500/10 rounded-xl border border-blue-500/20 p-4">
            <div className="text-blue-400 text-sm mb-1">Valuation Cap</div>
            <div className="text-2xl font-bold text-white">{financialSnapshot.valuationCap}</div>
            <div className="text-blue-400/60 text-xs mt-1">Pre-launch valuation</div>
          </div>
          <div className="bg-purple-500/10 rounded-xl border border-purple-500/20 p-4">
            <div className="text-purple-400 text-sm mb-1">Team Size</div>
            <div className="text-2xl font-bold text-white">{financialSnapshot.teamSize} filled</div>
            <div className="text-purple-400/60 text-xs mt-1">+{financialSnapshot.plannedHires} planned</div>
          </div>
          <div className="bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/20 p-4">
            <div className="text-[#c9a227] text-sm mb-1">LOI Merchants</div>
            <div className="text-2xl font-bold text-white">32</div>
            <div className="text-[#c9a227]/60 text-xs mt-1">AED 850K potential GMV</div>
          </div>
        </div>
      </section>

      {/* Health Scorecard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Gauge className="w-6 h-6 text-[#c9a227]" />
          Financial Health Scorecard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {healthScorecard.map((item) => (
            <div
              key={item.category}
              className={`rounded-xl border p-4 ${
                item.status === 'good' ? 'bg-emerald-500/10 border-emerald-500/20' :
                item.status === 'warning' ? 'bg-amber-500/10 border-amber-500/20' :
                'bg-red-500/10 border-red-500/20'
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{item.category}</span>
                <span className={`text-lg font-bold ${
                  item.status === 'good' ? 'text-emerald-400' :
                  item.status === 'warning' ? 'text-amber-400' :
                  'text-red-400'
                }`}>
                  {item.score}%
                </span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                <div
                  className={`h-full rounded-full ${
                    item.status === 'good' ? 'bg-emerald-500' :
                    item.status === 'warning' ? 'bg-amber-500' :
                    'bg-red-500'
                  }`}
                  style={{ width: `${item.score}%` }}
                />
              </div>
              <p className="text-white/50 text-xs">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Unit Economics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-blue-400" />
          Unit Economics (Theoretical Targets)
        </h2>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium text-amber-400 mb-1">Important: These are TARGETS, not validated metrics</div>
              <p className="text-amber-400/70 text-sm">
                All unit economics below are theoretical projections based on market research and assumptions.
                They will only be validated after launch with real cohort data. Present to investors as targets, not proven metrics.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {unitEconomics.map((metric) => (
            <div key={metric.label} className="bg-white/5 rounded-xl border border-white/10 p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-white/60 text-sm">{metric.label}</span>
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                  metric.status === 'good' ? 'bg-emerald-500/20 text-emerald-400' :
                  metric.status === 'warning' ? 'bg-amber-500/20 text-amber-400' :
                  metric.status === 'pending' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {metric.status === 'pending' ? 'Target' : metric.status}
                </span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              {metric.target && (
                <div className="text-white/40 text-sm">Target: {metric.target}</div>
              )}
              {metric.note && (
                <p className="text-white/30 text-xs mt-2">{metric.note}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Revenue Model */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <PieChart className="w-6 h-6 text-purple-400" />
          Revenue Model Breakdown
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-xl border border-white/10 p-6">
            <h3 className="font-semibold text-white mb-4">Revenue Mix (Target)</h3>
            <div className="space-y-4">
              {revenueStreams.map((stream) => (
                <div key={stream.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white">{stream.name}</span>
                    <span className={`text-${stream.color}-400`}>{stream.percentage}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-${stream.color}-500 rounded-full`}
                      style={{ width: `${stream.percentage}%` }}
                    />
                  </div>
                  <p className="text-white/40 text-xs mt-1">{stream.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-xl border border-white/10 p-6">
            <h3 className="font-semibold text-white mb-4">Use of Funds ($400K SAFE)</h3>
            <div className="space-y-4">
              {useOfFunds.map((item) => (
                <div key={item.category}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white">{item.category}</span>
                    <span className="text-white/60">{item.amount} ({item.percentage}%)</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-${item.color}-500 rounded-full`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5-Year Projections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <LineChart className="w-6 h-6 text-cyan-400" />
          5-Year Financial Projections
        </h2>

        <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left text-white/60 text-sm font-medium px-4 py-3">Metric</th>
                  {projections.map((p) => (
                    <th key={p.year} className="text-center text-white/60 text-sm font-medium px-4 py-3">{p.year}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="px-4 py-3 text-white/80">Users (MAU)</td>
                  {projections.map((p) => (
                    <td key={p.year} className="px-4 py-3 text-center text-white font-medium">{p.users}</td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white/80">Merchants</td>
                  {projections.map((p) => (
                    <td key={p.year} className="px-4 py-3 text-center text-white font-medium">{p.merchants}</td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white/80">GMV</td>
                  {projections.map((p) => (
                    <td key={p.year} className="px-4 py-3 text-center text-emerald-400 font-medium">{p.gmv}</td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white/80">Revenue (8% take rate)</td>
                  {projections.map((p) => (
                    <td key={p.year} className="px-4 py-3 text-center text-[#c9a227] font-medium">{p.revenue}</td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white/80">EBITDA</td>
                  {projections.map((p) => (
                    <td key={p.year} className="px-4 py-3 text-center text-blue-400 font-medium">{p.ebitda}</td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white/80">EBITDA Margin</td>
                  {projections.map((p) => (
                    <td key={p.year} className="px-4 py-3 text-center text-purple-400 font-medium">{p.margin}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Flag className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium text-blue-400 mb-1">Projection Note</div>
              <p className="text-blue-400/70 text-sm">
                These are &quot;domination scenario&quot; projections assuming strong execution. Year 5 projects 50x user growth
                and 100x EBITDA growth. Conservative scenarios show 30-50% of these numbers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Inconsistencies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <AlertCircle className="w-6 h-6 text-amber-400" />
          Data Inconsistencies Audit
        </h2>

        <div className="space-y-4">
          {dataInconsistencies.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl border p-4 ${
                item.severity === 'critical' ? 'bg-red-500/10 border-red-500/20' :
                item.severity === 'high' ? 'bg-amber-500/10 border-amber-500/20' :
                'bg-blue-500/10 border-blue-500/20'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-2">
                  {item.resolution.includes('FIXED') ? (
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <AlertTriangle className={`w-5 h-5 ${
                      item.severity === 'critical' ? 'text-red-400' :
                      item.severity === 'high' ? 'text-amber-400' : 'text-blue-400'
                    }`} />
                  )}
                  <span className="font-medium text-white">{item.issue}</span>
                </div>
                <span className={`px-2 py-0.5 rounded text-xs font-medium uppercase ${
                  item.resolution.includes('FIXED') ? 'bg-emerald-500/20 text-emerald-400' :
                  item.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                  item.severity === 'high' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {item.resolution.includes('FIXED') ? 'Fixed' : item.severity}
                </span>
              </div>
              <div className="text-white/60 text-sm mb-2">Location: {item.location}</div>
              <div className="text-white/40 text-sm">Resolution: {item.resolution}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Critical Risks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Shield className="w-6 h-6 text-red-400" />
          Critical Financial Risks
        </h2>

        <div className="space-y-4">
          {criticalRisks.map((risk, index) => (
            <div
              key={index}
              className={`rounded-xl border p-6 ${
                risk.severity === 'critical' ? 'bg-red-500/10 border-red-500/20' :
                risk.severity === 'high' ? 'bg-amber-500/10 border-amber-500/20' :
                'bg-blue-500/10 border-blue-500/20'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-lg font-semibold text-white">{risk.risk}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase ${
                  risk.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                  risk.severity === 'high' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {risk.severity}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="text-white/40 text-xs uppercase mb-1">Impact</div>
                  <p className="text-white/70 text-sm">{risk.impact}</p>
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase mb-1">Probability</div>
                  <p className="text-white/70 text-sm">{risk.probability}</p>
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase mb-1">Mitigation</div>
                  <p className="text-emerald-400/80 text-sm">{risk.mitigation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 90-Day Action Plan */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Calendar className="w-6 h-6 text-[#c9a227]" />
          90-Day CFO Action Plan
        </h2>

        <div className="space-y-6">
          {actionPlan.map((month) => (
            <div key={month.month} className="bg-white/5 rounded-xl border border-white/10 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{month.month}</h3>
                <span className="px-3 py-1 bg-[#c9a227]/20 text-[#c9a227] rounded-full text-sm font-medium">
                  {month.priority}
                </span>
              </div>
              <div className="space-y-3">
                {month.actions.map((action, index) => (
                  <div key={index} className="flex items-center justify-between gap-4 py-2 border-b border-white/5 last:border-0">
                    <div className="flex items-center gap-3">
                      {action.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      ) : action.status === 'in_progress' ? (
                        <RefreshCw className="w-5 h-5 text-blue-400 animate-spin" />
                      ) : (
                        <Clock className="w-5 h-5 text-white/40" />
                      )}
                      <span className="text-white/80">{action.task}</span>
                    </div>
                    <span className="text-white/40 text-sm">{action.owner}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CFO Recommendations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-emerald-500/10 to-[#c9a227]/10 rounded-2xl border border-emerald-500/20 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-emerald-400" />
            CFO Strategic Recommendations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-emerald-400 mb-3">Immediate Actions (This Week)</h3>
              <ul className="space-y-2">
                {[
                  'Set up Xero/QuickBooks accounting system',
                  'Create chart of accounts and expense categories',
                  'Accelerate SAFE round close - runway critical',
                  'Build monthly P&L template for tracking'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-[#c9a227] mb-3">Pre-Launch Priorities</h3>
              <ul className="space-y-2">
                {[
                  'Implement unit economics tracking from Day 1',
                  'Activate merchant billing on launch day',
                  'Convert LOIs to signed merchant agreements',
                  'Complete investor data room organization'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                    <Target className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-blue-400 mb-3">Investor Presentation Tips</h3>
              <ul className="space-y-2">
                {[
                  'Present unit economics as "targets" not "proven"',
                  'Lead with 32 LOIs and merchant traction',
                  'Show clear path to first revenue',
                  'Highlight 90-day execution playbook'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                    <Zap className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-3">Key Success Metrics to Track</h3>
              <ul className="space-y-2">
                {[
                  'Month 3: AED 25K revenue, 75 merchants, 5K users',
                  'Month 6: AED 75K revenue, 150 merchants, 15K users',
                  'Month 12: AED 375K revenue, 300 merchants, 75K users',
                  'Break-even target: Month 24'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                    <BarChart3 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
