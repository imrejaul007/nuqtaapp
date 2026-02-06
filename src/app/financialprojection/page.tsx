'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  DollarSign,
  Users,
  Store,
  Calendar,
  Target,
  Zap,
  BarChart3,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Wallet,
  Coins,
  Calculator,
  ChevronRight,
  LineChart,
  Activity,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

type TimeHorizon = 'h1' | 'h2' | 'year1' | 'year2' | 'year3';

export default function FinancialProjectionPage() {
  const [activeHorizon, setActiveHorizon] = useState<TimeHorizon>('h1');

  const horizons = [
    { id: 'h1' as TimeHorizon, label: 'H1 2026', subtitle: 'Launch Phase', months: 'Mar-Jun' },
    { id: 'h2' as TimeHorizon, label: 'H2 2026', subtitle: 'Growth Phase', months: 'Jul-Dec' },
    { id: 'year1' as TimeHorizon, label: 'Year 1', subtitle: 'Full Year 2026', months: 'Mar-Dec' },
    { id: 'year2' as TimeHorizon, label: 'Year 2', subtitle: 'Scale Phase', months: '2027' },
    { id: 'year3' as TimeHorizon, label: 'Year 3', subtitle: 'Expansion', months: '2028' },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-[#c9a227]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center flex-shrink-0">
              <LineChart size={24} className="text-[#0a1628] sm:w-8 sm:h-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Financial Projections</h1>
              <p className="text-slate-400 text-sm sm:text-base">KPI-Gated Growth Model • AED Currency</p>
            </div>
          </div>
          <p className="text-slate-300 max-w-3xl">
            Data-driven projections showing Nuqta&apos;s path from launch to scale.
            Conservative estimates with phase-based milestones and realistic unit economics.
          </p>
        </div>
      </div>

      {/* Time Horizon Selector */}
      <div className="border-b border-white/10 sticky top-0 bg-[#0a1628]/95 backdrop-blur-xl z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 sm:gap-4 py-4 overflow-x-auto scrollbar-hide">
            {horizons.map((horizon) => (
              <button
                key={horizon.id}
                onClick={() => setActiveHorizon(horizon.id)}
                className={`px-4 sm:px-6 py-3 rounded-xl transition-all text-left flex-shrink-0 ${
                  activeHorizon === horizon.id
                    ? 'bg-[#c9a227] text-[#0a1628]'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'
                }`}
              >
                <p className="font-bold text-sm sm:text-base">{horizon.label}</p>
                <p className={`text-xs ${activeHorizon === horizon.id ? 'text-[#0a1628]/70' : 'text-slate-500'}`}>
                  {horizon.subtitle}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
        {/* Key Assumptions Banner */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/30">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Calculator className="text-blue-400" size={20} />
            Core Assumptions
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
            <div className="p-3 bg-white/5 rounded-lg">
              <p className="text-slate-400 text-xs">Take Rate</p>
              <p className="text-white font-bold">15%</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg">
              <p className="text-slate-400 text-xs">Avg Transaction</p>
              <p className="text-white font-bold">AED 150</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg">
              <p className="text-slate-400 text-xs">Txns/User/Month</p>
              <p className="text-white font-bold">6x</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg">
              <p className="text-slate-400 text-xs">D30 Retention</p>
              <p className="text-white font-bold">25%</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg">
              <p className="text-slate-400 text-xs">CAC</p>
              <p className="text-white font-bold">AED 15</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg">
              <p className="text-slate-400 text-xs">LTV:CAC</p>
              <p className="text-green-400 font-bold">16.8x</p>
            </div>
          </div>
        </div>

        {/* Dynamic Content Based on Horizon */}
        {activeHorizon === 'h1' && <H1Projections />}
        {activeHorizon === 'h2' && <H2Projections />}
        {activeHorizon === 'year1' && <Year1Projections />}
        {activeHorizon === 'year2' && <Year2Projections />}
        {activeHorizon === 'year3' && <Year3Projections />}

        {/* Unit Economics Deep Dive */}
        <UnitEconomics />

        {/* Sensitivity Analysis */}
        <SensitivityAnalysis />
      </div>

      <GlobalFooter />
    </div>
  );
}

// ============================================
// H1 2026 PROJECTIONS (Mar-Jun)
// ============================================
function H1Projections() {
  const monthlyData = [
    { month: 'Mar', users: 500, merchants: 10, gmv: 75000, revenue: 11250, costs: 85000, net: -73750, cash: 1396250 },
    { month: 'Apr', users: 1500, merchants: 18, gmv: 225000, revenue: 33750, costs: 90000, net: -56250, cash: 1340000 },
    { month: 'May', users: 3500, merchants: 28, gmv: 525000, revenue: 78750, costs: 95000, net: -16250, cash: 1323750 },
    { month: 'Jun', users: 6500, merchants: 40, gmv: 975000, revenue: 146250, costs: 105000, net: 41250, cash: 1365000 },
  ];

  return (
    <div className="space-y-8">
      {/* H1 Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard
          label="H1 Revenue"
          value="AED 270K"
          subtext="15% of GMV"
          trend="+∞%"
          trendUp={true}
          color="gold"
        />
        <MetricCard
          label="H1 Users"
          value="6,500"
          subtext="End of June"
          trend="13x growth"
          trendUp={true}
          color="blue"
        />
        <MetricCard
          label="H1 Merchants"
          value="40"
          subtext="Live & transacting"
          trend="4x growth"
          trendUp={true}
          color="purple"
        />
        <MetricCard
          label="Break-even"
          value="June"
          subtext="Month 4"
          trend="On track"
          trendUp={true}
          color="green"
        />
      </div>

      {/* Monthly Breakdown Table */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Calendar className="text-[#c9a227]" size={20} />
          H1 2026 Monthly Projections
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-3 text-slate-400">Month</th>
                <th className="text-right py-3 px-3 text-slate-400">Users</th>
                <th className="text-right py-3 px-3 text-slate-400">Merchants</th>
                <th className="text-right py-3 px-3 text-slate-400">GMV</th>
                <th className="text-right py-3 px-3 text-slate-400">Revenue (15%)</th>
                <th className="text-right py-3 px-3 text-slate-400">Costs</th>
                <th className="text-right py-3 px-3 text-slate-400">Net P&L</th>
                <th className="text-right py-3 px-3 text-slate-400">Cash</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {monthlyData.map((row) => (
                <tr key={row.month} className={row.net >= 0 ? 'bg-green-500/5' : ''}>
                  <td className="py-3 px-3 text-white font-medium">{row.month} 2026</td>
                  <td className="py-3 px-3 text-right text-slate-300">{row.users.toLocaleString()}</td>
                  <td className="py-3 px-3 text-right text-slate-300">{row.merchants}</td>
                  <td className="py-3 px-3 text-right text-slate-300">AED {row.gmv.toLocaleString()}</td>
                  <td className="py-3 px-3 text-right text-green-400">AED {row.revenue.toLocaleString()}</td>
                  <td className="py-3 px-3 text-right text-red-400">AED {row.costs.toLocaleString()}</td>
                  <td className={`py-3 px-3 text-right font-bold ${row.net >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    AED {row.net.toLocaleString()}
                  </td>
                  <td className="py-3 px-3 text-right text-white">AED {(row.cash / 1000).toFixed(0)}K</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
            <p className="text-yellow-400 font-bold">Launch Target</p>
            <p className="text-slate-400 text-sm mt-1">
              1,000 users + 10 merchants by end of March
            </p>
          </div>
          <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
            <p className="text-green-400 font-bold">Break-even: June</p>
            <p className="text-slate-400 text-sm mt-1">
              Revenue exceeds costs for the first time
            </p>
          </div>
          <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
            <p className="text-blue-400 font-bold">H1 GMV</p>
            <p className="text-slate-400 text-sm mt-1">
              AED 1.8M total transaction volume
            </p>
          </div>
        </div>
      </div>

      {/* Growth Drivers */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">H1 Growth Drivers</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-[#c9a227] font-bold flex items-center gap-2">
              <Users size={18} />
              User Acquisition
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <ChevronRight size={14} className="text-[#c9a227] mt-1 flex-shrink-0" />
                Founders Circle (100 beta users) - Week 1-2
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight size={14} className="text-[#c9a227] mt-1 flex-shrink-0" />
                Referral program (5 AED bonus per referral)
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight size={14} className="text-[#c9a227] mt-1 flex-shrink-0" />
                Marina/JBR influencer campaign
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight size={14} className="text-[#c9a227] mt-1 flex-shrink-0" />
                Merchant cross-promotion (QR codes)
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[#c9a227] font-bold flex items-center gap-2">
              <Store size={18} />
              Merchant Growth
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <ChevronRight size={14} className="text-[#c9a227] mt-1 flex-shrink-0" />
                32 LOIs → 10+ live by March 1
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight size={14} className="text-[#c9a227] mt-1 flex-shrink-0" />
                BDA acquiring 3-5 new merchants/week
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight size={14} className="text-[#c9a227] mt-1 flex-shrink-0" />
                Focus on Marina → JBR → Downtown
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight size={14} className="text-[#c9a227] mt-1 flex-shrink-0" />
                Category expansion: F&B → Retail → Services
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// H2 2026 PROJECTIONS (Jul-Dec)
// ============================================
function H2Projections() {
  const monthlyData = [
    { month: 'Jul', users: 10000, merchants: 55, gmv: 1500000, revenue: 225000, costs: 120000, net: 105000, cash: 1470000 },
    { month: 'Aug', users: 15000, merchants: 70, gmv: 2250000, revenue: 337500, costs: 140000, net: 197500, cash: 1667500 },
    { month: 'Sep', users: 22000, merchants: 90, gmv: 3300000, revenue: 495000, costs: 165000, net: 330000, cash: 1997500 },
    { month: 'Oct', users: 30000, merchants: 110, gmv: 4500000, revenue: 675000, costs: 200000, net: 475000, cash: 2472500 },
    { month: 'Nov', users: 40000, merchants: 130, gmv: 6000000, revenue: 900000, costs: 250000, net: 650000, cash: 3122500 },
    { month: 'Dec', users: 50000, merchants: 150, gmv: 7500000, revenue: 1125000, costs: 300000, net: 825000, cash: 3947500 },
  ];

  return (
    <div className="space-y-8">
      {/* H2 Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard
          label="H2 Revenue"
          value="AED 3.76M"
          subtext="14x vs H1"
          trend="+1,293%"
          trendUp={true}
          color="gold"
        />
        <MetricCard
          label="H2 Users"
          value="50,000"
          subtext="End of December"
          trend="7.7x vs H1"
          trendUp={true}
          color="blue"
        />
        <MetricCard
          label="H2 Merchants"
          value="150"
          subtext="Across Dubai"
          trend="3.75x vs H1"
          trendUp={true}
          color="purple"
        />
        <MetricCard
          label="H2 Net Profit"
          value="AED 2.58M"
          subtext="68% margin"
          trend="Profitable"
          trendUp={true}
          color="green"
        />
      </div>

      {/* Monthly Breakdown Table */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Calendar className="text-[#c9a227]" size={20} />
          H2 2026 Monthly Projections
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-3 text-slate-400">Month</th>
                <th className="text-right py-3 px-3 text-slate-400">Users</th>
                <th className="text-right py-3 px-3 text-slate-400">Merchants</th>
                <th className="text-right py-3 px-3 text-slate-400">GMV</th>
                <th className="text-right py-3 px-3 text-slate-400">Revenue</th>
                <th className="text-right py-3 px-3 text-slate-400">Costs</th>
                <th className="text-right py-3 px-3 text-slate-400">Net P&L</th>
                <th className="text-right py-3 px-3 text-slate-400">Cash</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {monthlyData.map((row) => (
                <tr key={row.month} className="bg-green-500/5">
                  <td className="py-3 px-3 text-white font-medium">{row.month} 2026</td>
                  <td className="py-3 px-3 text-right text-slate-300">{row.users.toLocaleString()}</td>
                  <td className="py-3 px-3 text-right text-slate-300">{row.merchants}</td>
                  <td className="py-3 px-3 text-right text-slate-300">AED {(row.gmv / 1000000).toFixed(1)}M</td>
                  <td className="py-3 px-3 text-right text-green-400">AED {(row.revenue / 1000).toFixed(0)}K</td>
                  <td className="py-3 px-3 text-right text-red-400">AED {(row.costs / 1000).toFixed(0)}K</td>
                  <td className="py-3 px-3 text-right font-bold text-green-400">
                    AED {(row.net / 1000).toFixed(0)}K
                  </td>
                  <td className="py-3 px-3 text-right text-white">AED {(row.cash / 1000000).toFixed(1)}M</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-green-500/10 rounded-xl border border-green-500/30">
          <p className="text-green-400 font-bold">H2 Highlight: Sustainable Profitability</p>
          <p className="text-slate-400 text-sm mt-1">
            Every month profitable with growing margins. December net profit: AED 825K (73% margin).
            Cash position: AED 3.95M without additional funding.
          </p>
        </div>
      </div>

      {/* H2 Milestones */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">H2 Milestones</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { month: 'July', milestone: '10K Users', detail: 'Product-market fit confirmed', status: 'target' },
            { month: 'September', milestone: 'AED 3M GMV/mo', detail: 'Significant transaction volume', status: 'target' },
            { month: 'October', milestone: '100 Merchants', detail: 'Strong supply-side network', status: 'target' },
            { month: 'November', milestone: 'Abu Dhabi Pilot', detail: 'First expansion city', status: 'target' },
            { month: 'December', milestone: 'Series A Ready', detail: '$49M ARR run rate', status: 'target' },
            { month: 'Q4', milestone: 'GCC Expansion Plan', detail: 'Prepare for 2027 growth', status: 'target' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-[#c9a227] text-sm font-bold">{item.month}</p>
              <p className="text-white font-bold mt-1">{item.milestone}</p>
              <p className="text-slate-400 text-xs mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// YEAR 1 PROJECTIONS (Full 2026)
// ============================================
function Year1Projections() {
  return (
    <div className="space-y-8">
      {/* Year 1 Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard
          label="Year 1 Revenue"
          value="AED 4.03M"
          subtext="~$1.1M USD"
          trend="From $0"
          trendUp={true}
          color="gold"
        />
        <MetricCard
          label="Year 1 GMV"
          value="AED 26.9M"
          subtext="~$7.3M USD"
          trend="Transaction volume"
          trendUp={true}
          color="blue"
        />
        <MetricCard
          label="End Users"
          value="50,000"
          subtext="MAU"
          trend="100x launch"
          trendUp={true}
          color="purple"
        />
        <MetricCard
          label="Net Profit"
          value="AED 2.48M"
          subtext="62% margin"
          trend="Cash positive"
          trendUp={true}
          color="green"
        />
      </div>

      {/* Quarterly Summary */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <BarChart3 className="text-[#c9a227]" size={20} />
          Year 1 Quarterly Summary
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-slate-400">Quarter</th>
                <th className="text-right py-3 px-4 text-slate-400">Users (End)</th>
                <th className="text-right py-3 px-4 text-slate-400">Merchants</th>
                <th className="text-right py-3 px-4 text-slate-400">GMV</th>
                <th className="text-right py-3 px-4 text-slate-400">Revenue</th>
                <th className="text-right py-3 px-4 text-slate-400">Net P&L</th>
                <th className="text-right py-3 px-4 text-slate-400">Margin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-3 px-4 text-white font-medium">Q1 (Mar only)</td>
                <td className="py-3 px-4 text-right text-slate-300">500</td>
                <td className="py-3 px-4 text-right text-slate-300">10</td>
                <td className="py-3 px-4 text-right text-slate-300">AED 75K</td>
                <td className="py-3 px-4 text-right text-green-400">AED 11K</td>
                <td className="py-3 px-4 text-right text-red-400">-AED 74K</td>
                <td className="py-3 px-4 text-right text-red-400">-87%</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-white font-medium">Q2 (Apr-Jun)</td>
                <td className="py-3 px-4 text-right text-slate-300">6,500</td>
                <td className="py-3 px-4 text-right text-slate-300">40</td>
                <td className="py-3 px-4 text-right text-slate-300">AED 1.73M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 259K</td>
                <td className="py-3 px-4 text-right text-red-400">-AED 31K</td>
                <td className="py-3 px-4 text-right text-red-400">-12%</td>
              </tr>
              <tr className="bg-green-500/5">
                <td className="py-3 px-4 text-white font-medium">Q3 (Jul-Sep)</td>
                <td className="py-3 px-4 text-right text-slate-300">22,000</td>
                <td className="py-3 px-4 text-right text-slate-300">90</td>
                <td className="py-3 px-4 text-right text-slate-300">AED 7.05M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 1.06M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 633K</td>
                <td className="py-3 px-4 text-right text-green-400">60%</td>
              </tr>
              <tr className="bg-green-500/5">
                <td className="py-3 px-4 text-white font-medium">Q4 (Oct-Dec)</td>
                <td className="py-3 px-4 text-right text-slate-300">50,000</td>
                <td className="py-3 px-4 text-right text-slate-300">150</td>
                <td className="py-3 px-4 text-right text-slate-300">AED 18M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 2.7M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 1.95M</td>
                <td className="py-3 px-4 text-right text-green-400">72%</td>
              </tr>
              <tr className="bg-[#c9a227]/10">
                <td className="py-3 px-4 text-[#c9a227] font-bold">YEAR 1 TOTAL</td>
                <td className="py-3 px-4 text-right text-white font-bold">50,000</td>
                <td className="py-3 px-4 text-right text-white font-bold">150</td>
                <td className="py-3 px-4 text-right text-white font-bold">AED 26.9M</td>
                <td className="py-3 px-4 text-right text-green-400 font-bold">AED 4.03M</td>
                <td className="py-3 px-4 text-right text-green-400 font-bold">AED 2.48M</td>
                <td className="py-3 px-4 text-right text-green-400 font-bold">62%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Year 1 Valuation */}
      <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 rounded-2xl p-6 border border-[#c9a227]/30">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <TrendingUp className="text-[#c9a227]" size={20} />
          Year 1 Exit Valuation Scenarios
        </h3>

        <div className="mb-4">
          <p className="text-slate-300 text-sm">
            <strong>ARR at Year 1 End:</strong> AED 13.5M/year (~$3.7M) based on December run rate × 12
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-slate-400 text-xs">At 10x ARR (Conservative)</p>
            <p className="text-2xl font-bold text-white">$37M</p>
            <p className="text-green-400 text-sm">Founder 92% = $34M</p>
          </div>
          <div className="p-4 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30">
            <p className="text-[#c9a227] text-xs">At 15x ARR (Realistic)</p>
            <p className="text-2xl font-bold text-[#c9a227]">$55M</p>
            <p className="text-[#c9a227] text-sm">Founder 92% = $51M</p>
          </div>
          <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
            <p className="text-green-400 text-xs">At 20x ARR (Strategic)</p>
            <p className="text-2xl font-bold text-green-400">$74M</p>
            <p className="text-green-400 text-sm">Founder 92% = $68M</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// YEAR 2 PROJECTIONS (2027)
// ============================================
function Year2Projections() {
  return (
    <div className="space-y-8">
      {/* Year 2 Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard
          label="Year 2 Revenue"
          value="AED 24M"
          subtext="~$6.5M USD"
          trend="+495% YoY"
          trendUp={true}
          color="gold"
        />
        <MetricCard
          label="Year 2 GMV"
          value="AED 160M"
          subtext="~$44M USD"
          trend="6x Year 1"
          trendUp={true}
          color="blue"
        />
        <MetricCard
          label="End Users"
          value="200,000"
          subtext="MAU"
          trend="4x Year 1"
          trendUp={true}
          color="purple"
        />
        <MetricCard
          label="Markets"
          value="3"
          subtext="UAE + 2 GCC"
          trend="GCC expansion"
          trendUp={true}
          color="green"
        />
      </div>

      {/* Year 2 Growth Plan */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Year 2 Growth Strategy</h3>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-[#c9a227] font-bold">UAE Deepening</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-1 flex-shrink-0" />
                Dubai: 100,000 users, 300 merchants
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-1 flex-shrink-0" />
                Abu Dhabi: 50,000 users, 100 merchants
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-1 flex-shrink-0" />
                Other Emirates: 50,000 users, 100 merchants
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[#c9a227] font-bold">GCC Expansion</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <Target size={14} className="text-yellow-400 mt-1 flex-shrink-0" />
                Saudi Arabia (Riyadh pilot Q2)
              </li>
              <li className="flex items-start gap-2">
                <Target size={14} className="text-yellow-400 mt-1 flex-shrink-0" />
                Bahrain or Kuwait (Q4)
              </li>
              <li className="flex items-start gap-2">
                <Target size={14} className="text-yellow-400 mt-1 flex-shrink-0" />
                Team: 45 people across 3 markets
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Year 2 Financials */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Year 2 Financial Projections</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-slate-400">Quarter</th>
                <th className="text-right py-3 px-4 text-slate-400">Users</th>
                <th className="text-right py-3 px-4 text-slate-400">Merchants</th>
                <th className="text-right py-3 px-4 text-slate-400">GMV</th>
                <th className="text-right py-3 px-4 text-slate-400">Revenue</th>
                <th className="text-right py-3 px-4 text-slate-400">Net P&L</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="bg-green-500/5">
                <td className="py-3 px-4 text-white font-medium">Q1 2027</td>
                <td className="py-3 px-4 text-right text-slate-300">80,000</td>
                <td className="py-3 px-4 text-right text-slate-300">200</td>
                <td className="py-3 px-4 text-right text-slate-300">AED 24M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 3.6M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 1.8M</td>
              </tr>
              <tr className="bg-green-500/5">
                <td className="py-3 px-4 text-white font-medium">Q2 2027</td>
                <td className="py-3 px-4 text-right text-slate-300">120,000</td>
                <td className="py-3 px-4 text-right text-slate-300">300</td>
                <td className="py-3 px-4 text-right text-slate-300">AED 36M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 5.4M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 2.7M</td>
              </tr>
              <tr className="bg-green-500/5">
                <td className="py-3 px-4 text-white font-medium">Q3 2027</td>
                <td className="py-3 px-4 text-right text-slate-300">160,000</td>
                <td className="py-3 px-4 text-right text-slate-300">400</td>
                <td className="py-3 px-4 text-right text-slate-300">AED 48M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 7.2M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 3.6M</td>
              </tr>
              <tr className="bg-green-500/5">
                <td className="py-3 px-4 text-white font-medium">Q4 2027</td>
                <td className="py-3 px-4 text-right text-slate-300">200,000</td>
                <td className="py-3 px-4 text-right text-slate-300">500</td>
                <td className="py-3 px-4 text-right text-slate-300">AED 52M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 7.8M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 3.9M</td>
              </tr>
              <tr className="bg-[#c9a227]/10">
                <td className="py-3 px-4 text-[#c9a227] font-bold">YEAR 2 TOTAL</td>
                <td className="py-3 px-4 text-right text-white font-bold">200,000</td>
                <td className="py-3 px-4 text-right text-white font-bold">500</td>
                <td className="py-3 px-4 text-right text-white font-bold">AED 160M</td>
                <td className="py-3 px-4 text-right text-green-400 font-bold">AED 24M</td>
                <td className="py-3 px-4 text-right text-green-400 font-bold">AED 12M</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Year 2 Valuation */}
      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-2xl p-6 border border-green-500/30">
        <h3 className="text-xl font-bold text-white mb-4">Year 2 Valuation (Series A Ready)</h3>
        <p className="text-slate-300 text-sm mb-6">
          <strong>ARR at Year 2 End:</strong> AED 93.6M/year (~$25.5M) based on Q4 run rate × 12
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-slate-400 text-xs">At 10x ARR</p>
            <p className="text-2xl font-bold text-white">$255M</p>
            <p className="text-green-400 text-sm">Founder 78% = $199M</p>
          </div>
          <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
            <p className="text-green-400 text-xs">At 15x ARR</p>
            <p className="text-2xl font-bold text-green-400">$383M</p>
            <p className="text-green-400 text-sm">Founder 78% = $299M</p>
          </div>
          <div className="p-4 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30">
            <p className="text-[#c9a227] text-xs">At 20x ARR</p>
            <p className="text-2xl font-bold text-[#c9a227]">$510M</p>
            <p className="text-[#c9a227] text-sm">Founder 78% = $398M</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// YEAR 3 PROJECTIONS (2028)
// ============================================
function Year3Projections() {
  return (
    <div className="space-y-8">
      {/* Year 3 Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard
          label="Year 3 Revenue"
          value="AED 72M"
          subtext="~$19.6M USD"
          trend="+200% YoY"
          trendUp={true}
          color="gold"
        />
        <MetricCard
          label="Year 3 GMV"
          value="AED 480M"
          subtext="~$131M USD"
          trend="3x Year 2"
          trendUp={true}
          color="blue"
        />
        <MetricCard
          label="End Users"
          value="500,000"
          subtext="MAU"
          trend="2.5x Year 2"
          trendUp={true}
          color="purple"
        />
        <MetricCard
          label="Markets"
          value="6"
          subtext="Full GCC"
          trend="Regional leader"
          trendUp={true}
          color="green"
        />
      </div>

      {/* Year 3 Vision */}
      <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/10 rounded-2xl p-6 border border-purple-500/30">
        <h3 className="text-xl font-bold text-white mb-6">Year 3: GCC Market Leader</h3>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="p-4 bg-white/5 rounded-xl">
            <h4 className="text-purple-400 font-bold mb-3">Market Coverage</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>🇦🇪 UAE: 250K users, 600 merchants</li>
              <li>🇸🇦 Saudi: 150K users, 400 merchants</li>
              <li>🇧🇭 Bahrain: 30K users, 80 merchants</li>
              <li>🇰🇼 Kuwait: 40K users, 100 merchants</li>
              <li>🇶🇦 Qatar: 20K users, 50 merchants</li>
              <li>🇴🇲 Oman: 10K users, 30 merchants</li>
            </ul>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <h4 className="text-blue-400 font-bold mb-3">Team & Operations</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• 100+ employees across GCC</li>
              <li>• Country managers in each market</li>
              <li>• 24/7 multi-language support</li>
              <li>• Regional HQ in Dubai</li>
              <li>• Data center in UAE + KSA</li>
            </ul>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <h4 className="text-green-400 font-bold mb-3">Product Evolution</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• AI-powered recommendations</li>
              <li>• Merchant analytics dashboard</li>
              <li>• Premium subscription tier</li>
              <li>• B2B enterprise offering</li>
              <li>• API for partners</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Year 3 Financials */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Year 3 Financial Projections</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-slate-400">Quarter</th>
                <th className="text-right py-3 px-4 text-slate-400">Users</th>
                <th className="text-right py-3 px-4 text-slate-400">Merchants</th>
                <th className="text-right py-3 px-4 text-slate-400">GMV</th>
                <th className="text-right py-3 px-4 text-slate-400">Revenue</th>
                <th className="text-right py-3 px-4 text-slate-400">Net P&L</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="bg-green-500/5">
                <td className="py-3 px-4 text-white font-medium">Q1 2028</td>
                <td className="py-3 px-4 text-right text-slate-300">280,000</td>
                <td className="py-3 px-4 text-right text-slate-300">700</td>
                <td className="py-3 px-4 text-right text-slate-300">AED 84M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 12.6M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 5M</td>
              </tr>
              <tr className="bg-green-500/5">
                <td className="py-3 px-4 text-white font-medium">Q2 2028</td>
                <td className="py-3 px-4 text-right text-slate-300">360,000</td>
                <td className="py-3 px-4 text-right text-slate-300">900</td>
                <td className="py-3 px-4 text-right text-slate-300">AED 108M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 16.2M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 6.5M</td>
              </tr>
              <tr className="bg-green-500/5">
                <td className="py-3 px-4 text-white font-medium">Q3 2028</td>
                <td className="py-3 px-4 text-right text-slate-300">430,000</td>
                <td className="py-3 px-4 text-right text-slate-300">1,100</td>
                <td className="py-3 px-4 text-right text-slate-300">AED 129M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 19.4M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 7.8M</td>
              </tr>
              <tr className="bg-green-500/5">
                <td className="py-3 px-4 text-white font-medium">Q4 2028</td>
                <td className="py-3 px-4 text-right text-slate-300">500,000</td>
                <td className="py-3 px-4 text-right text-slate-300">1,260</td>
                <td className="py-3 px-4 text-right text-slate-300">AED 159M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 23.9M</td>
                <td className="py-3 px-4 text-right text-green-400">AED 9.5M</td>
              </tr>
              <tr className="bg-[#c9a227]/10">
                <td className="py-3 px-4 text-[#c9a227] font-bold">YEAR 3 TOTAL</td>
                <td className="py-3 px-4 text-right text-white font-bold">500,000</td>
                <td className="py-3 px-4 text-right text-white font-bold">1,260</td>
                <td className="py-3 px-4 text-right text-white font-bold">AED 480M</td>
                <td className="py-3 px-4 text-right text-green-400 font-bold">AED 72M</td>
                <td className="py-3 px-4 text-right text-green-400 font-bold">AED 28.8M</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Year 3 Exit Valuation */}
      <div className="bg-gradient-to-r from-[#c9a227]/20 to-emerald-500/10 rounded-2xl p-6 border border-[#c9a227]/30">
        <h3 className="text-xl font-bold text-white mb-4">Year 3 Exit Scenarios</h3>
        <p className="text-slate-300 text-sm mb-6">
          <strong>ARR at Year 3 End:</strong> AED 286M/year (~$78M) based on Q4 run rate × 12
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-slate-400 text-xs">At 10x ARR (Conservative)</p>
            <p className="text-2xl font-bold text-white">$780M</p>
            <p className="text-green-400 text-sm">Founder 55% = $429M</p>
          </div>
          <div className="p-4 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30">
            <p className="text-[#c9a227] text-xs">At 15x ARR (Realistic)</p>
            <p className="text-2xl font-bold text-[#c9a227]">$1.17B</p>
            <p className="text-[#c9a227] text-sm">Founder 55% = $644M</p>
          </div>
          <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
            <p className="text-green-400 text-xs">At 20x ARR (Strategic Exit)</p>
            <p className="text-2xl font-bold text-green-400">$1.56B</p>
            <p className="text-green-400 text-sm">Founder 55% = $858M</p>
          </div>
        </div>
        <p className="text-slate-500 text-xs mt-4">
          * Post-Series A ownership assumed at 55%. Comparable: Careem sold at 20x+ ARR, Tabby valued at 25x ARR.
        </p>
      </div>
    </div>
  );
}

// ============================================
// UNIT ECONOMICS
// ============================================
function UnitEconomics() {
  return (
    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <Activity className="text-[#c9a227]" size={20} />
        Unit Economics Deep Dive
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Per User Economics */}
        <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-xl border border-blue-500/30">
          <h4 className="text-blue-400 font-bold mb-4">Per User (Monthly)</h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Transactions</span>
              <span className="text-white">6x</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Avg Transaction</span>
              <span className="text-white">AED 150</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Monthly GMV</span>
              <span className="text-white">AED 900</span>
            </div>
            <div className="flex justify-between border-t border-white/10 pt-2">
              <span className="text-slate-400">Revenue (15%)</span>
              <span className="text-green-400 font-bold">AED 135</span>
            </div>
          </div>
        </div>

        {/* LTV Calculation */}
        <div className="p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl border border-green-500/30">
          <h4 className="text-green-400 font-bold mb-4">Lifetime Value (LTV)</h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Monthly Revenue</span>
              <span className="text-white">AED 135</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Gross Margin</span>
              <span className="text-white">70%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Avg Lifespan</span>
              <span className="text-white">24 months</span>
            </div>
            <div className="flex justify-between border-t border-white/10 pt-2">
              <span className="text-slate-400">LTV</span>
              <span className="text-green-400 font-bold">AED 2,268</span>
            </div>
          </div>
        </div>

        {/* CAC Calculation */}
        <div className="p-4 bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-xl border border-orange-500/30">
          <h4 className="text-orange-400 font-bold mb-4">Customer Acquisition Cost</h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Paid (40%)</span>
              <span className="text-white">AED 25</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Referral (30%)</span>
              <span className="text-white">AED 10</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Organic (30%)</span>
              <span className="text-white">AED 0</span>
            </div>
            <div className="flex justify-between border-t border-white/10 pt-2">
              <span className="text-slate-400">Blended CAC</span>
              <span className="text-orange-400 font-bold">AED 13</span>
            </div>
          </div>
        </div>

        {/* Key Ratios */}
        <div className="p-4 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-xl border border-purple-500/30">
          <h4 className="text-purple-400 font-bold mb-4">Key Ratios</h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">LTV:CAC</span>
              <span className="text-green-400 font-bold">174:1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Payback Period</span>
              <span className="text-white">&lt;1 month</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Gross Margin</span>
              <span className="text-white">70%</span>
            </div>
            <div className="flex justify-between border-t border-white/10 pt-2">
              <span className="text-slate-400">Target Net Margin</span>
              <span className="text-green-400 font-bold">50%+</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-green-500/10 rounded-xl border border-green-500/30">
        <p className="text-green-400 font-bold">Industry-Leading Unit Economics</p>
        <p className="text-slate-400 text-sm mt-1">
          LTV:CAC of 174:1 is exceptional (SaaS benchmark is 3:1). This means every AED 1 spent on acquisition
          generates AED 174 in lifetime value. Combined with &lt;1 month payback, Nuqta can scale profitably without VC subsidies.
        </p>
      </div>
    </div>
  );
}

// ============================================
// SENSITIVITY ANALYSIS
// ============================================
function SensitivityAnalysis() {
  return (
    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <BarChart3 className="text-[#c9a227]" size={20} />
        Sensitivity Analysis
      </h3>

      <p className="text-slate-400 text-sm mb-6">
        How key assumptions impact Year 1 revenue. Base case: AED 4.03M
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-slate-400">Variable</th>
              <th className="text-center py-3 px-4 text-red-400">-20%</th>
              <th className="text-center py-3 px-4 text-yellow-400">-10%</th>
              <th className="text-center py-3 px-4 text-green-400">Base</th>
              <th className="text-center py-3 px-4 text-blue-400">+10%</th>
              <th className="text-center py-3 px-4 text-purple-400">+20%</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            <tr>
              <td className="py-3 px-4 text-white">Take Rate (15%)</td>
              <td className="py-3 px-4 text-center text-red-400">AED 3.22M</td>
              <td className="py-3 px-4 text-center text-yellow-400">AED 3.63M</td>
              <td className="py-3 px-4 text-center text-green-400 font-bold">AED 4.03M</td>
              <td className="py-3 px-4 text-center text-blue-400">AED 4.43M</td>
              <td className="py-3 px-4 text-center text-purple-400">AED 4.84M</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-white">User Growth Rate</td>
              <td className="py-3 px-4 text-center text-red-400">AED 2.90M</td>
              <td className="py-3 px-4 text-center text-yellow-400">AED 3.46M</td>
              <td className="py-3 px-4 text-center text-green-400 font-bold">AED 4.03M</td>
              <td className="py-3 px-4 text-center text-blue-400">AED 4.60M</td>
              <td className="py-3 px-4 text-center text-purple-400">AED 5.16M</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-white">Avg Transaction (AED 150)</td>
              <td className="py-3 px-4 text-center text-red-400">AED 3.22M</td>
              <td className="py-3 px-4 text-center text-yellow-400">AED 3.63M</td>
              <td className="py-3 px-4 text-center text-green-400 font-bold">AED 4.03M</td>
              <td className="py-3 px-4 text-center text-blue-400">AED 4.43M</td>
              <td className="py-3 px-4 text-center text-purple-400">AED 4.84M</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-white">Txns/User (6x/month)</td>
              <td className="py-3 px-4 text-center text-red-400">AED 3.22M</td>
              <td className="py-3 px-4 text-center text-yellow-400">AED 3.63M</td>
              <td className="py-3 px-4 text-center text-green-400 font-bold">AED 4.03M</td>
              <td className="py-3 px-4 text-center text-blue-400">AED 4.43M</td>
              <td className="py-3 px-4 text-center text-purple-400">AED 4.84M</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/30">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="text-red-400" size={18} />
            <p className="text-red-400 font-bold">Worst Case (-20% all)</p>
          </div>
          <p className="text-white text-xl font-bold">AED 2.07M</p>
          <p className="text-slate-400 text-sm mt-1">Still break-even possible with cost discipline</p>
        </div>
        <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-green-400" size={18} />
            <p className="text-green-400 font-bold">Best Case (+20% all)</p>
          </div>
          <p className="text-white text-xl font-bold">AED 6.98M</p>
          <p className="text-slate-400 text-sm mt-1">73% above base case with execution</p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// METRIC CARD COMPONENT
// ============================================
function MetricCard({
  label,
  value,
  subtext,
  trend,
  trendUp,
  color = 'gold'
}: {
  label: string;
  value: string;
  subtext: string;
  trend: string;
  trendUp: boolean;
  color?: 'gold' | 'blue' | 'green' | 'purple';
}) {
  const colorClasses = {
    gold: 'from-[#c9a227]/20 to-[#c9a227]/5 border-[#c9a227]/30',
    blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/30',
    green: 'from-green-500/20 to-green-500/5 border-green-500/30',
    purple: 'from-purple-500/20 to-purple-500/5 border-purple-500/30',
  };

  const valueColors = {
    gold: 'text-[#c9a227]',
    blue: 'text-blue-400',
    green: 'text-green-400',
    purple: 'text-purple-400',
  };

  return (
    <div className={`p-4 rounded-xl bg-gradient-to-br ${colorClasses[color]} border`}>
      <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">{label}</p>
      <p className={`text-2xl sm:text-3xl font-bold ${valueColors[color]} mb-1`}>{value}</p>
      <p className="text-slate-500 text-xs mb-2">{subtext}</p>
      <div className={`flex items-center gap-1 text-xs ${trendUp ? 'text-green-400' : 'text-red-400'}`}>
        {trendUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
        {trend}
      </div>
    </div>
  );
}
