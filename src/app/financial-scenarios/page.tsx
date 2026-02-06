'use client';

import React, { useState } from 'react';
import {
  DollarSign,
  TrendingUp,
  Users,
  Building2,
  Rocket,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Target,
  Calendar,
  Zap,
  Shield,
  BarChart3,
  PieChart,
  ArrowRight,
  Clock,
  Coins,
  Wallet,
  LineChart,
  Calculator
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

/**
 * THREE FINANCIAL SCENARIOS
 *
 * 1. BOOTSTRAP: AED 50K personal capital only
 * 2. SAFE ONLY: $400K raise, no further funding, grow on revenue
 * 3. MULTI-ROUND: Continuous funding (SAFE → Seed → Series A)
 */

type Scenario = 'bootstrap' | 'safe-only' | 'multi-round';

export default function FinancialScenariosPage() {
  const [activeScenario, setActiveScenario] = useState<Scenario>('bootstrap');

  const scenarios = [
    {
      id: 'bootstrap' as Scenario,
      label: 'Bootstrap',
      subtitle: 'AED 50K Personal Capital',
      color: 'orange',
      icon: Wallet,
      risk: 'HIGH',
      timeline: '24+ months to profitability'
    },
    {
      id: 'safe-only' as Scenario,
      label: 'SAFE Only',
      subtitle: '$400K + Revenue Growth',
      color: 'blue',
      icon: Coins,
      risk: 'MEDIUM',
      timeline: '12-18 months to profitability'
    },
    {
      id: 'multi-round' as Scenario,
      label: 'Multi-Round',
      subtitle: 'SAFE → Seed → Series A',
      color: 'green',
      icon: Rocket,
      risk: 'LOW',
      timeline: '18-24 months to scale'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-[#c9a227]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center flex-shrink-0">
              <Calculator size={24} className="text-[#0a1628] sm:w-8 sm:h-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Financial Scenarios</h1>
              <p className="text-slate-400 text-sm sm:text-base">Three Paths to Building Nuqta</p>
            </div>
          </div>
          <p className="text-slate-300 max-w-3xl">
            Honest financial projections showing what it takes to build Nuqta under three different
            funding scenarios. Each path has trade-offs between speed, control, and risk.
          </p>
        </div>
      </div>

      {/* Scenario Selector */}
      <div className="border-b border-white/10 sticky top-0 bg-[#0a1628]/95 backdrop-blur-xl z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 py-4">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setActiveScenario(scenario.id)}
                className={`p-3 sm:p-4 rounded-xl transition-all text-left ${
                  activeScenario === scenario.id
                    ? scenario.color === 'orange' ? 'bg-orange-500/20 border-2 border-orange-500/50' :
                      scenario.color === 'blue' ? 'bg-blue-500/20 border-2 border-blue-500/50' :
                      'bg-green-500/20 border-2 border-green-500/50'
                    : 'bg-white/5 border-2 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <scenario.icon size={18} className={
                    scenario.color === 'orange' ? 'text-orange-400' :
                    scenario.color === 'blue' ? 'text-blue-400' :
                    'text-green-400'
                  } />
                  <span className="font-bold text-white text-sm sm:text-base">{scenario.label}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400">{scenario.subtitle}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    scenario.risk === 'HIGH' ? 'bg-red-500/20 text-red-400' :
                    scenario.risk === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {scenario.risk} Risk
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
        {activeScenario === 'bootstrap' && <BootstrapScenario />}
        {activeScenario === 'safe-only' && <SafeOnlyScenario />}
        {activeScenario === 'multi-round' && <MultiRoundScenario />}

        {/* Comparison Table */}
        <ComparisonTable activeScenario={activeScenario} />
      </div>

      <GlobalFooter />
    </div>
  );
}

// ============================================
// SCENARIO 1: BOOTSTRAP (AED 50K)
// ============================================
function BootstrapScenario() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500/20 to-orange-500/10 rounded-2xl p-6 sm:p-8 border border-orange-500/30">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
            <Wallet className="text-orange-400" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-orange-400 mb-2">Scenario 1: Bootstrap</h2>
            <p className="text-slate-300">
              Build Nuqta with AED 50,000 personal capital. No external funding.
              Extreme constraint forces focus but limits growth speed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="p-3 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-xs">Total Capital</p>
            <p className="text-xl sm:text-2xl font-bold text-orange-400">AED 50K</p>
            <p className="text-slate-500 text-xs">~$13,600 USD</p>
          </div>
          <div className="p-3 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-xs">Monthly Burn</p>
            <p className="text-xl sm:text-2xl font-bold text-white">AED 8-12K</p>
            <p className="text-slate-500 text-xs">Bare minimum</p>
          </div>
          <div className="p-3 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-xs">Runway</p>
            <p className="text-xl sm:text-2xl font-bold text-red-400">4-6 months</p>
            <p className="text-slate-500 text-xs">Critical constraint</p>
          </div>
          <div className="p-3 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-xs">Ownership</p>
            <p className="text-xl sm:text-2xl font-bold text-green-400">100%</p>
            <p className="text-slate-500 text-xs">Full control</p>
          </div>
        </div>
      </div>

      {/* Reality Check */}
      <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/30">
        <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
          <AlertTriangle size={20} />
          Bootstrap Reality Check
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-3">
            <p className="text-slate-300 font-medium">What You CAN&apos;T Do:</p>
            <ul className="space-y-2 text-sm">
              {[
                'Hire any full-time employees',
                'Run paid marketing campaigns',
                'Attend exhibitions or conferences',
                'Scale merchant acquisition quickly',
                'Build buffer for emergencies',
                'Offer competitive ESOP to team'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-red-300">
                  <XCircle size={14} className="mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-slate-300 font-medium">What You MUST Do:</p>
            <ul className="space-y-2 text-sm">
              {[
                'Work alone or with equity-only co-founder',
                'Use only free/cheap tools',
                'Organic marketing only (hustle hard)',
                'Revenue from Day 1 or die',
                'Personal relationships with every merchant',
                'Live extremely lean'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-orange-300">
                  <CheckCircle size={14} className="mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Monthly P&L with MoM Growth */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <BarChart3 className="text-orange-400" size={20} />
          Bootstrap P&L Projection (Month-on-Month Growth)
        </h3>

        <div className="mb-4 p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
          <p className="text-orange-300 text-sm">
            <strong>Budget Rule:</strong> Fixed costs (AED 7K) + 40% of previous month revenue reinvested into marketing/growth
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-2 text-slate-400">Month</th>
                <th className="text-right py-3 px-2 text-slate-400">Users</th>
                <th className="text-right py-3 px-2 text-slate-400">Merchants</th>
                <th className="text-right py-3 px-2 text-slate-400">GMV</th>
                <th className="text-right py-3 px-2 text-slate-400">Revenue</th>
                <th className="text-right py-3 px-2 text-slate-400">Fixed</th>
                <th className="text-right py-3 px-2 text-slate-400">Reinvest</th>
                <th className="text-right py-3 px-2 text-slate-400">Total Cost</th>
                <th className="text-right py-3 px-2 text-slate-400">Net</th>
                <th className="text-right py-3 px-2 text-slate-400">Cash</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                // Month | Users | Merchants | GMV | Revenue (15% take) | Fixed Costs | Reinvest (40% of prev rev) | Total Cost | Net | Cash
                { month: 'M1', users: 50, merchants: 3, gmv: 5000, revenue: 750, fixed: 7000, reinvest: 3000, total: 10000, net: -9250, cash: 40750, note: 'Launch spend' },
                { month: 'M2', users: 150, merchants: 5, gmv: 15000, revenue: 2250, fixed: 7000, reinvest: 300, total: 7300, net: -5050, cash: 35700, note: '40% of M1 rev' },
                { month: 'M3', users: 400, merchants: 8, gmv: 40000, revenue: 6000, fixed: 7000, reinvest: 900, total: 7900, net: -1900, cash: 33800, note: '40% of M2 rev' },
                { month: 'M4', users: 700, merchants: 10, gmv: 70000, revenue: 10500, fixed: 7000, reinvest: 2400, total: 9400, net: 1100, cash: 34900, note: 'Break-even!' },
                { month: 'M5', users: 1100, merchants: 14, gmv: 110000, revenue: 16500, fixed: 7000, reinvest: 4200, total: 11200, net: 5300, cash: 40200, note: 'Profitable' },
                { month: 'M6', users: 1700, merchants: 18, gmv: 170000, revenue: 25500, fixed: 8000, reinvest: 6600, total: 14600, net: 10900, cash: 51100, note: '+1 contractor' },
                { month: 'M7', users: 2400, merchants: 22, gmv: 240000, revenue: 36000, fixed: 8000, reinvest: 10200, total: 18200, net: 17800, cash: 68900, note: 'Scaling' },
                { month: 'M8', users: 3300, merchants: 27, gmv: 330000, revenue: 49500, fixed: 8000, reinvest: 14400, total: 22400, net: 27100, cash: 96000, note: 'Compounding' },
                { month: 'M9', users: 4500, merchants: 32, gmv: 450000, revenue: 67500, fixed: 10000, reinvest: 19800, total: 29800, net: 37700, cash: 133700, note: '+1 more hire' },
                { month: 'M12', users: 10000, merchants: 50, gmv: 1000000, revenue: 150000, fixed: 15000, reinvest: 50000, total: 65000, net: 85000, cash: 350000, note: '3-person team' },
              ].map((row) => (
                <tr key={row.month} className={row.net >= 0 ? 'bg-green-500/5' : ''}>
                  <td className="py-3 px-2 text-white font-medium">{row.month}</td>
                  <td className="py-3 px-2 text-right text-slate-300">{row.users.toLocaleString()}</td>
                  <td className="py-3 px-2 text-right text-slate-300">{row.merchants}</td>
                  <td className="py-3 px-2 text-right text-slate-300">AED {row.gmv.toLocaleString()}</td>
                  <td className="py-3 px-2 text-right text-green-400">AED {row.revenue.toLocaleString()}</td>
                  <td className="py-3 px-2 text-right text-slate-400">AED {row.fixed.toLocaleString()}</td>
                  <td className="py-3 px-2 text-right text-blue-400">AED {row.reinvest.toLocaleString()}</td>
                  <td className="py-3 px-2 text-right text-red-400">AED {row.total.toLocaleString()}</td>
                  <td className={`py-3 px-2 text-right font-bold ${row.net >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    AED {row.net.toLocaleString()}
                  </td>
                  <td className={`py-3 px-2 text-right ${row.cash < 20000 ? 'text-red-400' : 'text-white'}`}>
                    AED {row.cash.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <div className="p-4 bg-orange-500/10 rounded-xl border border-orange-500/30">
            <p className="text-orange-400 font-bold">Break-even: Month 4</p>
            <p className="text-slate-400 text-sm mt-1">
              First profit at Month 4. Revenue reinvestment compounds growth.
              <strong className="text-orange-300"> Zero margin for error.</strong>
            </p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-white font-bold">Growth Formula</p>
            <p className="text-slate-400 text-sm mt-1">
              40% of revenue → marketing → more users → more revenue → compound growth
            </p>
          </div>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Bootstrap Cost Structure</h3>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-slate-400 text-sm mb-3">Monthly Operating Costs (Months 1-3)</p>
            <div className="space-y-2">
              {[
                { item: 'Founder living expenses', amount: 5000 },
                { item: 'Server/hosting (minimal)', amount: 500 },
                { item: 'Domain/email/tools', amount: 300 },
                { item: 'Phone/internet', amount: 200 },
                { item: 'Transport (merchant visits)', amount: 500 },
                { item: 'Contingency', amount: 500 },
              ].map((cost, idx) => (
                <div key={idx} className="flex justify-between p-2 bg-white/5 rounded-lg">
                  <span className="text-slate-300 text-sm">{cost.item}</span>
                  <span className="text-white font-medium">AED {cost.amount.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex justify-between p-2 bg-orange-500/20 rounded-lg">
                <span className="text-orange-400 font-bold">Total Monthly</span>
                <span className="text-orange-400 font-bold">AED 7,000</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-3">What You Skip (Save AED 50K+/month)</p>
            <div className="space-y-2">
              {[
                { item: 'Team salaries (0 hires)', saved: 40000 },
                { item: 'Office space', saved: 5000 },
                { item: 'Paid marketing', saved: 10000 },
                { item: 'Premium tools/SaaS', saved: 2000 },
                { item: 'Events/networking', saved: 3000 },
              ].map((cost, idx) => (
                <div key={idx} className="flex justify-between p-2 bg-white/5 rounded-lg">
                  <span className="text-slate-300 text-sm">{cost.item}</span>
                  <span className="text-red-400 font-medium line-through">AED {cost.saved.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Survival Milestones */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Target className="text-orange-400" size={20} />
          Survival Milestones (Must Hit or Die)
        </h3>

        <div className="space-y-4">
          {[
            {
              week: 'Week 2',
              milestone: '3 merchants LIVE (not LOI, LIVE)',
              why: 'Need to prove model works before burning more cash',
              risk: 'If missed: No proof of concept, no path forward'
            },
            {
              week: 'Week 4',
              milestone: '50 users, 10 transactions',
              why: 'Validate that users actually use the app and transact',
              risk: 'If missed: Product-market fit not proven'
            },
            {
              week: 'Month 2',
              milestone: 'AED 2,000+ revenue',
              why: 'Revenue = validation. Even small revenue matters.',
              risk: 'If missed: Model fundamentally broken'
            },
            {
              week: 'Month 4',
              milestone: 'Break-even (Revenue ≥ Costs)',
              why: 'Survival point. After this, you can live forever.',
              risk: 'If missed: Out of cash, game over'
            },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl border-l-4 border-orange-500">
              <div className="flex items-center justify-between mb-2">
                <span className="text-orange-400 font-bold">{item.week}</span>
                <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded">CRITICAL</span>
              </div>
              <p className="text-white font-medium mb-1">{item.milestone}</p>
              <p className="text-slate-400 text-sm mb-2">{item.why}</p>
              <p className="text-red-400 text-xs">{item.risk}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Exit Valuation Projections */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <TrendingUp className="text-orange-400" size={20} />
          Exit Valuation Projections (Bootstrap Path)
        </h3>

        <div className="mb-4 p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
          <p className="text-orange-300 text-sm">
            <strong>Valuation Logic:</strong> High-growth fintech in GCC commands 10-20x ARR multiples.
            100% founder ownership means all value accrues to you.
          </p>
        </div>

        {/* Year 1 Projections */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-orange-400 mb-3">Year 1 (Month 12)</h4>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">Annual Revenue Run Rate</p>
              <p className="text-2xl font-bold text-white">AED 1.8M/year</p>
              <p className="text-slate-500 text-xs">~$490K ARR (AED 150K × 12)</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">Monthly Profit</p>
              <p className="text-2xl font-bold text-green-400">AED 85K</p>
              <p className="text-slate-500 text-xs">Cash position: AED 350K</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <p className="text-slate-400 text-xs">At 10x ARR</p>
              <p className="text-xl font-bold text-white">$4.9M</p>
              <p className="text-green-400 text-sm">Founder 100% = $4.9M</p>
            </div>
            <div className="p-3 bg-orange-500/10 rounded-xl border border-orange-500/30">
              <p className="text-orange-400 text-xs">At 15x ARR</p>
              <p className="text-xl font-bold text-orange-400">$7.4M</p>
              <p className="text-orange-400 text-sm">Founder 100% = $7.4M</p>
            </div>
            <div className="p-3 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30">
              <p className="text-[#c9a227] text-xs">At 20x ARR</p>
              <p className="text-xl font-bold text-[#c9a227]">$9.8M</p>
              <p className="text-[#c9a227] text-sm">Founder 100% = $9.8M</p>
            </div>
          </div>
        </div>

        {/* Year 2 Projections */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-orange-400 mb-3">Year 2 (Month 24)</h4>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">Annual Revenue Run Rate</p>
              <p className="text-2xl font-bold text-white">AED 6M/year</p>
              <p className="text-slate-500 text-xs">~$1.6M ARR (3x Y1 growth)</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">Monthly Profit</p>
              <p className="text-2xl font-bold text-green-400">AED 250K</p>
              <p className="text-slate-500 text-xs">Cash position: AED 2M+</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <p className="text-slate-400 text-xs">At 10x ARR</p>
              <p className="text-xl font-bold text-white">$16M</p>
              <p className="text-green-400 text-sm">Founder 100% = $16M</p>
            </div>
            <div className="p-3 bg-orange-500/10 rounded-xl border border-orange-500/30">
              <p className="text-orange-400 text-xs">At 15x ARR</p>
              <p className="text-xl font-bold text-orange-400">$24M</p>
              <p className="text-orange-400 text-sm">Founder 100% = $24M</p>
            </div>
            <div className="p-3 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30">
              <p className="text-[#c9a227] text-xs">At 20x ARR</p>
              <p className="text-xl font-bold text-[#c9a227]">$32M</p>
              <p className="text-[#c9a227] text-sm">Founder 100% = $32M</p>
            </div>
          </div>
        </div>

        {/* Year 3 Projections */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-orange-400 mb-3">Year 3 (Month 36)</h4>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">Annual Revenue Run Rate</p>
              <p className="text-2xl font-bold text-white">AED 15M/year</p>
              <p className="text-slate-500 text-xs">~$4.1M ARR (2.5x Y2 growth)</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">Monthly Profit</p>
              <p className="text-2xl font-bold text-green-400">AED 600K</p>
              <p className="text-slate-500 text-xs">Cash position: AED 8M+</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <p className="text-slate-400 text-xs">At 10x ARR</p>
              <p className="text-xl font-bold text-white">$41M</p>
              <p className="text-green-400 text-sm">Founder 100% = $41M</p>
            </div>
            <div className="p-3 bg-orange-500/10 rounded-xl border border-orange-500/30">
              <p className="text-orange-400 text-xs">At 15x ARR</p>
              <p className="text-xl font-bold text-orange-400">$62M</p>
              <p className="text-orange-400 text-sm">Founder 100% = $62M</p>
            </div>
            <div className="p-3 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30">
              <p className="text-[#c9a227] text-xs">At 20x ARR</p>
              <p className="text-xl font-bold text-[#c9a227]">$82M</p>
              <p className="text-[#c9a227] text-sm">Founder 100% = $82M</p>
            </div>
          </div>
        </div>

        {/* Growth Summary */}
        <div className="p-4 bg-orange-500/10 rounded-xl border border-orange-500/30">
          <p className="text-orange-400 font-bold mb-2">Bootstrap Exit Advantage</p>
          <p className="text-slate-300 text-sm">
            <strong>100% ownership</strong> means slower absolute growth but higher personal returns per dollar of revenue.
            A $41M valuation at Year 3 with 100% ownership = $41M for you.
            Compare: $490M Multi-Round valuation at 55% = $270M, but required $8.4M in fundraising.
          </p>
        </div>
      </div>

      {/* Verdict */}
      <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-6 border border-orange-500/30">
        <h3 className="text-xl font-bold text-white mb-4">Bootstrap Verdict</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-green-400 font-bold mb-2">Pros</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• 100% ownership retained</li>
              <li>• Full control, no investors</li>
              <li>• Forces extreme focus</li>
              <li>• Proves pure execution ability</li>
            </ul>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-red-400 font-bold mb-2">Cons</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• 4-6 month runway only</li>
              <li>• No team = slow execution</li>
              <li>• Competitors can outpace you</li>
              <li>• One setback = death</li>
            </ul>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-orange-400 font-bold mb-2">Success Probability</p>
            <p className="text-4xl font-black text-orange-400">15-20%</p>
            <p className="text-slate-400 text-sm mt-1">
              Possible but extremely risky. Requires perfect execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SCENARIO 2: SAFE ONLY ($400K, No Further Funding)
// ============================================
function SafeOnlyScenario() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/10 rounded-2xl p-6 sm:p-8 border border-blue-500/30">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
            <Coins className="text-blue-400" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-2">Scenario 2: SAFE Only</h2>
            <p className="text-slate-300">
              Raise $400K SAFE at $5M cap, then grow purely on revenue.
              No Series A. Build a sustainable, profitable business.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="p-3 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-xs">Total Capital</p>
            <p className="text-xl sm:text-2xl font-bold text-blue-400">$400K</p>
            <p className="text-slate-500 text-xs">AED 1.47M</p>
          </div>
          <div className="p-3 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-xs">Monthly Burn (Avg)</p>
            <p className="text-xl sm:text-2xl font-bold text-white">AED 80K</p>
            <p className="text-slate-500 text-xs">Scaling with growth</p>
          </div>
          <div className="p-3 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-xs">Runway</p>
            <p className="text-xl sm:text-2xl font-bold text-yellow-400">12-18 mo</p>
            <p className="text-slate-500 text-xs">Must hit profitability</p>
          </div>
          <div className="p-3 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-xs">Post-SAFE Ownership</p>
            <p className="text-xl sm:text-2xl font-bold text-green-400">92%</p>
            <p className="text-slate-500 text-xs">Founder + ESOP</p>
          </div>
        </div>
      </div>

      {/* Strategy */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Target className="text-blue-400" size={20} />
          SAFE-Only Strategy
        </h3>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="text-blue-400 font-bold">The Goal: Profitable by Month 15</p>
            <ul className="space-y-2 text-sm">
              {[
                'Use SAFE to prove model & hit product-market fit',
                'Scale to 25K users, 100 merchants',
                'Hit AED 500K+ GMV/month',
                'Reach break-even on revenue',
                'Never raise again - grow on profits'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-300">
                  <CheckCircle size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-yellow-400 font-bold">Trade-offs Accepted</p>
            <ul className="space-y-2 text-sm">
              {[
                'Slower growth than funded competitors',
                'Limited marketing budget after Month 12',
                'Can\'t expand to other GCC quickly',
                'Team stays small (15-20 people max)',
                'May miss market timing window'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-300">
                  <AlertTriangle size={14} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Monthly P&L with MoM Growth */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <BarChart3 className="text-blue-400" size={20} />
          SAFE-Only P&L (Month-on-Month Growth)
        </h3>

        <div className="mb-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
          <p className="text-blue-300 text-sm">
            <strong>Budget Rule:</strong> Fixed ops (AED 50K base, scaling with team) + 35% of revenue reinvested into marketing/growth
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-2 text-slate-400">Month</th>
                <th className="text-right py-3 px-2 text-slate-400">Users</th>
                <th className="text-right py-3 px-2 text-slate-400">Merch</th>
                <th className="text-right py-3 px-2 text-slate-400">GMV</th>
                <th className="text-right py-3 px-2 text-slate-400">Revenue</th>
                <th className="text-right py-3 px-2 text-slate-400">Team Cost</th>
                <th className="text-right py-3 px-2 text-slate-400">Marketing</th>
                <th className="text-right py-3 px-2 text-slate-400">Ops</th>
                <th className="text-right py-3 px-2 text-slate-400">Total</th>
                <th className="text-right py-3 px-2 text-slate-400">Net</th>
                <th className="text-right py-3 px-2 text-slate-400">Cash</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                // Budget allocation: Team (fixed) + Marketing (35% of rev or min 20K) + Ops (15K base)
                { month: 'M1', users: 500, merchants: 10, gmv: 50, revenue: 7.5, team: 45, mktg: 25, ops: 15, total: 85, net: -77.5, cash: 1392, note: '8-person team' },
                { month: 'M2', users: 1200, merchants: 15, gmv: 120, revenue: 18, team: 45, mktg: 20, ops: 15, total: 80, net: -62, cash: 1330, note: 'Growing' },
                { month: 'M3', users: 2500, merchants: 22, gmv: 250, revenue: 37.5, team: 50, mktg: 25, ops: 15, total: 90, net: -52.5, cash: 1278, note: '+1 hire' },
                { month: 'M4', users: 4500, merchants: 32, gmv: 450, revenue: 67.5, team: 50, mktg: 30, ops: 15, total: 95, net: -27.5, cash: 1250, note: 'Scaling' },
                { month: 'M5', users: 7000, merchants: 45, gmv: 700, revenue: 105, team: 55, mktg: 40, ops: 15, total: 110, net: -5, cash: 1245, note: '+1 hire' },
                { month: 'M6', users: 10000, merchants: 55, gmv: 1000, revenue: 150, team: 60, mktg: 55, ops: 18, total: 133, net: 17, cash: 1262, note: 'Break-even zone' },
                { month: 'M7', users: 13000, merchants: 65, gmv: 1300, revenue: 195, team: 65, mktg: 70, ops: 18, total: 153, net: 42, cash: 1304, note: '+1 hire' },
                { month: 'M8', users: 16500, merchants: 75, gmv: 1650, revenue: 248, team: 70, mktg: 85, ops: 20, total: 175, net: 73, cash: 1377, note: 'Profitable' },
                { month: 'M9', users: 20000, merchants: 85, gmv: 2000, revenue: 300, team: 75, mktg: 105, ops: 22, total: 202, net: 98, cash: 1475, note: 'Compounding' },
                { month: 'M12', users: 35000, merchants: 110, gmv: 3500, revenue: 525, team: 90, mktg: 180, ops: 28, total: 298, net: 227, cash: 2000, note: '15-person team' },
                { month: 'M18', users: 60000, merchants: 160, gmv: 6000, revenue: 900, team: 120, mktg: 315, ops: 40, total: 475, net: 425, cash: 3500, note: '20-person team' },
              ].map((row) => (
                <tr key={row.month} className={row.net >= 0 ? 'bg-green-500/5' : ''}>
                  <td className="py-3 px-2 text-white font-medium">{row.month}</td>
                  <td className="py-3 px-2 text-right text-slate-300">{row.users.toLocaleString()}</td>
                  <td className="py-3 px-2 text-right text-slate-300">{row.merchants}</td>
                  <td className="py-3 px-2 text-right text-slate-300">{row.gmv}K</td>
                  <td className="py-3 px-2 text-right text-green-400">{row.revenue}K</td>
                  <td className="py-3 px-2 text-right text-purple-400">{row.team}K</td>
                  <td className="py-3 px-2 text-right text-blue-400">{row.mktg}K</td>
                  <td className="py-3 px-2 text-right text-slate-400">{row.ops}K</td>
                  <td className="py-3 px-2 text-right text-red-400">{row.total}K</td>
                  <td className={`py-3 px-2 text-right font-bold ${row.net >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {row.net >= 0 ? '+' : ''}{row.net}K
                  </td>
                  <td className="py-3 px-2 text-right text-white">{(row.cash/1000).toFixed(1)}M</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 grid sm:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
            <p className="text-blue-400 font-bold">Break-even: Month 6</p>
            <p className="text-slate-400 text-sm mt-1">
              Revenue covers costs. Every month after = profit.
            </p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-white font-bold">Reinvestment Strategy</p>
            <p className="text-slate-400 text-sm mt-1">
              35% of revenue → marketing to fuel compound growth
            </p>
          </div>
          <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
            <p className="text-green-400 font-bold">Month 18 Profit</p>
            <p className="text-slate-400 text-sm mt-1">
              AED 425K/month net profit. Self-sustaining.
            </p>
          </div>
        </div>
      </div>

      {/* Use of Funds */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">$400K SAFE Allocation</h3>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-slate-400 text-sm mb-3">Capital Allocation</p>
            <div className="space-y-2">
              {[
                { item: 'Marketing & User Acquisition', amount: 140000, pct: 35, color: 'pink' },
                { item: 'Product & Technology', amount: 100000, pct: 25, color: 'blue' },
                { item: 'Team (12 months salaries)', amount: 80000, pct: 20, color: 'purple' },
                { item: 'Operations & Support', amount: 60000, pct: 15, color: 'orange' },
                { item: 'Reserve / Buffer', amount: 20000, pct: 5, color: 'slate' },
              ].map((item, idx) => (
                <div key={idx} className="p-3 bg-white/5 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 text-sm">{item.item}</span>
                    <span className="text-white font-medium">${item.amount.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className={`h-2 rounded-full bg-${item.color}-500`} style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-3">Team Growth (Lean)</p>
            <div className="space-y-2">
              {[
                { month: 'Launch', team: 8, roles: 'Founder, CTO, CMO, CHRO, 2 Devs, BDA, Designer' },
                { month: 'Month 3', team: 10, roles: '+1 Dev, +1 Support' },
                { month: 'Month 6', team: 12, roles: '+1 Marketing, +1 Sales' },
                { month: 'Month 12', team: 15, roles: '+2 Support, +1 Ops' },
                { month: 'Month 18', team: 18, roles: '+2 Sales, +1 Product' },
              ].map((item, idx) => (
                <div key={idx} className="p-3 bg-white/5 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="text-blue-400 font-medium">{item.month}</span>
                    <span className="text-white font-bold">{item.team} people</span>
                  </div>
                  <p className="text-slate-400 text-xs">{item.roles}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Milestones */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Revenue-Funded Growth Milestones</h3>

        <div className="space-y-4">
          {[
            {
              month: 'Month 6',
              milestone: 'Product-Market Fit Proven',
              metrics: '10K users, 60 merchants, 20% D30 retention, AED 120K revenue/month',
              action: 'Stop experimenting, double down on what works'
            },
            {
              month: 'Month 9',
              milestone: 'Break-even Achieved',
              metrics: 'Revenue ≥ Costs, positive cash flow',
              action: 'Reduce dependency on remaining SAFE funds'
            },
            {
              month: 'Month 12',
              milestone: 'Sustainable Growth',
              metrics: '25K users, 100 merchants, AED 375K revenue/month',
              action: 'Reinvest all profits into growth'
            },
            {
              month: 'Month 18',
              milestone: 'Market Leader in Dubai',
              metrics: '50K users, 150 merchants, AED 900K revenue/month',
              action: 'Consider organic GCC expansion (Abu Dhabi first)'
            },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-400 font-bold">{item.month}</span>
                <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">{item.milestone}</span>
              </div>
              <p className="text-slate-300 text-sm mb-2">{item.metrics}</p>
              <p className="text-white text-sm font-medium">→ {item.action}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Exit Valuation Projections */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <TrendingUp className="text-blue-400" size={20} />
          Exit Valuation Projections (SAFE-Only Path)
        </h3>

        <div className="mb-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
          <p className="text-blue-300 text-sm">
            <strong>Valuation Logic:</strong> 92% founder ownership post-SAFE. High-growth fintech = 10-20x ARR.
            Sustainable, profitable business commands premium valuation at exit.
          </p>
        </div>

        {/* Year 1 Projections */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-blue-400 mb-3">Year 1 (Month 12)</h4>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">Annual Revenue Run Rate</p>
              <p className="text-2xl font-bold text-white">AED 6.3M/year</p>
              <p className="text-slate-500 text-xs">~$1.7M ARR (AED 525K × 12)</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">Monthly Profit</p>
              <p className="text-2xl font-bold text-green-400">AED 227K</p>
              <p className="text-slate-500 text-xs">Cash position: AED 2M</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <p className="text-slate-400 text-xs">At 10x ARR</p>
              <p className="text-xl font-bold text-white">$17M</p>
              <p className="text-green-400 text-sm">Founder 92% = $15.6M</p>
            </div>
            <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/30">
              <p className="text-blue-400 text-xs">At 15x ARR</p>
              <p className="text-xl font-bold text-blue-400">$26M</p>
              <p className="text-blue-400 text-sm">Founder 92% = $23.9M</p>
            </div>
            <div className="p-3 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30">
              <p className="text-[#c9a227] text-xs">At 20x ARR</p>
              <p className="text-xl font-bold text-[#c9a227]">$34M</p>
              <p className="text-[#c9a227] text-sm">Founder 92% = $31.3M</p>
            </div>
          </div>
        </div>

        {/* Year 2 Projections (Month 18 + 6) */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-blue-400 mb-3">Year 2 (Month 24)</h4>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">Annual Revenue Run Rate</p>
              <p className="text-2xl font-bold text-white">AED 14.4M/year</p>
              <p className="text-slate-500 text-xs">~$3.9M ARR (2.3x Y1 growth)</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">Monthly Profit</p>
              <p className="text-2xl font-bold text-green-400">AED 550K</p>
              <p className="text-slate-500 text-xs">Cash position: AED 6M+</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <p className="text-slate-400 text-xs">At 10x ARR</p>
              <p className="text-xl font-bold text-white">$39M</p>
              <p className="text-green-400 text-sm">Founder 92% = $35.9M</p>
            </div>
            <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/30">
              <p className="text-blue-400 text-xs">At 15x ARR</p>
              <p className="text-xl font-bold text-blue-400">$59M</p>
              <p className="text-blue-400 text-sm">Founder 92% = $54.3M</p>
            </div>
            <div className="p-3 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30">
              <p className="text-[#c9a227] text-xs">At 20x ARR</p>
              <p className="text-xl font-bold text-[#c9a227]">$78M</p>
              <p className="text-[#c9a227] text-sm">Founder 92% = $71.8M</p>
            </div>
          </div>
        </div>

        {/* Year 3 Projections */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-blue-400 mb-3">Year 3 (Month 36)</h4>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">Annual Revenue Run Rate</p>
              <p className="text-2xl font-bold text-white">AED 28.8M/year</p>
              <p className="text-slate-500 text-xs">~$7.8M ARR (2x Y2 growth)</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl">
              <p className="text-slate-400 text-sm">Monthly Profit</p>
              <p className="text-2xl font-bold text-green-400">AED 1.1M</p>
              <p className="text-slate-500 text-xs">Cash position: AED 15M+</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <p className="text-slate-400 text-xs">At 10x ARR</p>
              <p className="text-xl font-bold text-white">$78M</p>
              <p className="text-green-400 text-sm">Founder 92% = $71.8M</p>
            </div>
            <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/30">
              <p className="text-blue-400 text-xs">At 15x ARR</p>
              <p className="text-xl font-bold text-blue-400">$117M</p>
              <p className="text-blue-400 text-sm">Founder 92% = $107.6M</p>
            </div>
            <div className="p-3 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30">
              <p className="text-[#c9a227] text-xs">At 20x ARR</p>
              <p className="text-xl font-bold text-[#c9a227]">$156M</p>
              <p className="text-[#c9a227] text-sm">Founder 92% = $143.5M</p>
            </div>
          </div>
        </div>

        {/* Growth Summary */}
        <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
          <p className="text-blue-400 font-bold mb-2">SAFE-Only Exit Advantage</p>
          <p className="text-slate-300 text-sm">
            <strong>92% ownership</strong> with profitable, sustainable growth = maximum control + strong returns.
            A $117M valuation at Year 3 (15x ARR) with 92% ownership = $107.6M for you.
            Lower risk, no VC pressure, and freedom to exit on your terms.
          </p>
        </div>
      </div>

      {/* Verdict */}
      <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/30">
        <h3 className="text-xl font-bold text-white mb-4">SAFE-Only Verdict</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-green-400 font-bold mb-2">Pros</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• 92% ownership retained</li>
              <li>• Sustainable, profitable business</li>
              <li>• No pressure from VCs</li>
              <li>• Build at your own pace</li>
            </ul>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-red-400 font-bold mb-2">Cons</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Slower than funded competitors</li>
              <li>• Limited expansion capital</li>
              <li>• May miss market timing</li>
              <li>• Harder to attract top talent</li>
            </ul>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-blue-400 font-bold mb-2">Success Probability</p>
            <p className="text-4xl font-black text-blue-400">45-55%</p>
            <p className="text-slate-400 text-sm mt-1">
              Reasonable path if execution is solid and market timing works.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SCENARIO 3: MULTI-ROUND FUNDING
// ============================================
function MultiRoundScenario() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500/20 to-green-500/10 rounded-2xl p-6 sm:p-8 border border-green-500/30">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <Rocket className="text-green-400" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-2">Scenario 3: Multi-Round Funding</h2>
            <p className="text-slate-300">
              Aggressive growth path: SAFE → Seed → Series A.
              Maximize speed and market capture. Standard VC-backed startup trajectory.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="p-3 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-xs">Total Raises (3 years)</p>
            <p className="text-xl sm:text-2xl font-bold text-green-400">$8.4M</p>
            <p className="text-slate-500 text-xs">SAFE + Seed + Series A</p>
          </div>
          <div className="p-3 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-xs">Peak Monthly Burn</p>
            <p className="text-xl sm:text-2xl font-bold text-white">AED 800K</p>
            <p className="text-slate-500 text-xs">At full scale</p>
          </div>
          <div className="p-3 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-xs">Target Exit (15x ARR)</p>
            <p className="text-xl sm:text-2xl font-bold text-purple-400">$500M+</p>
            <p className="text-slate-500 text-xs">5-7 year horizon</p>
          </div>
          <div className="p-3 bg-white/5 rounded-xl">
            <p className="text-slate-400 text-xs">Founder Ownership (Post-A)</p>
            <p className="text-xl sm:text-2xl font-bold text-yellow-400">55-60%</p>
            <p className="text-slate-500 text-xs">After dilution</p>
          </div>
        </div>
      </div>

      {/* Funding Roadmap */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <LineChart className="text-green-400" size={20} />
          Funding Roadmap
        </h3>

        <div className="space-y-4">
          {[
            {
              round: 'SAFE Round',
              timing: 'Q1 2026',
              amount: '$400K',
              valuation: '$5M cap',
              dilution: '8%',
              milestones: 'Product launch, 1K users, 10 merchants, first revenue',
              color: 'yellow'
            },
            {
              round: 'Seed Round',
              timing: 'Q4 2026',
              amount: '$2M',
              valuation: '$12M pre',
              dilution: '15%',
              milestones: '50K users, 150 merchants, AED 1M GMV/month, UAE expansion',
              color: 'blue'
            },
            {
              round: 'Series A',
              timing: 'Q4 2027',
              amount: '$6M',
              valuation: '$30M pre',
              dilution: '17%',
              milestones: '200K users, 500 merchants, GCC expansion, profitability path',
              color: 'green'
            },
          ].map((round, idx) => (
            <div key={idx} className={`p-4 rounded-xl border-2 bg-${round.color}-500/10 border-${round.color}-500/30`}>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <span className={`text-${round.color}-400 font-bold text-lg`}>{round.round}</span>
                  <span className="text-slate-400 ml-2">({round.timing})</span>
                </div>
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="text-white font-bold">{round.amount}</p>
                    <p className="text-slate-500 text-xs">Raise</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold">{round.valuation}</p>
                    <p className="text-slate-500 text-xs">Valuation</p>
                  </div>
                  <div className="text-center">
                    <p className="text-red-400 font-bold">{round.dilution}</p>
                    <p className="text-slate-500 text-xs">Dilution</p>
                  </div>
                </div>
              </div>
              <p className="text-slate-300 text-sm">
                <span className="text-slate-400">Required milestones:</span> {round.milestones}
              </p>
            </div>
          ))}
        </div>

        {/* Cap Table Evolution */}
        <div className="mt-6 p-4 bg-white/5 rounded-xl">
          <p className="text-slate-400 text-sm mb-3">Ownership Evolution</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-24 text-slate-400 text-sm">Pre-SAFE:</span>
              <div className="flex-1 flex rounded overflow-hidden h-6">
                <div className="bg-purple-500 flex items-center justify-center text-xs text-white" style={{ width: '85%' }}>Founder 85%</div>
                <div className="bg-green-500 flex items-center justify-center text-xs text-white" style={{ width: '15%' }}>ESOP</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-24 text-slate-400 text-sm">Post-SAFE:</span>
              <div className="flex-1 flex rounded overflow-hidden h-6">
                <div className="bg-purple-500 flex items-center justify-center text-xs text-white" style={{ width: '78%' }}>78%</div>
                <div className="bg-green-500 flex items-center justify-center text-xs text-white" style={{ width: '14%' }}>14%</div>
                <div className="bg-yellow-500 flex items-center justify-center text-xs text-white" style={{ width: '8%' }}>8%</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-24 text-slate-400 text-sm">Post-Seed:</span>
              <div className="flex-1 flex rounded overflow-hidden h-6">
                <div className="bg-purple-500 flex items-center justify-center text-xs text-white" style={{ width: '66%' }}>66%</div>
                <div className="bg-green-500 flex items-center justify-center text-xs text-white" style={{ width: '12%' }}>12%</div>
                <div className="bg-yellow-500 flex items-center justify-center text-xs text-white" style={{ width: '7%' }}>7%</div>
                <div className="bg-blue-500 flex items-center justify-center text-xs text-white" style={{ width: '15%' }}>15%</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-24 text-slate-400 text-sm">Post-Series A:</span>
              <div className="flex-1 flex rounded overflow-hidden h-6">
                <div className="bg-purple-500 flex items-center justify-center text-xs text-white" style={{ width: '55%' }}>55%</div>
                <div className="bg-green-500 flex items-center justify-center text-xs text-white" style={{ width: '10%' }}>10%</div>
                <div className="bg-yellow-500 flex items-center justify-center text-xs text-white" style={{ width: '6%' }}>6%</div>
                <div className="bg-blue-500 flex items-center justify-center text-xs text-white" style={{ width: '12%' }}>12%</div>
                <div className="bg-emerald-500 flex items-center justify-center text-xs text-white" style={{ width: '17%' }}>17%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Projections with MoM Growth */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <BarChart3 className="text-green-400" size={20} />
          Multi-Round P&L (Month-on-Month with Funding Tranches)
        </h3>

        <div className="mb-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
          <p className="text-green-300 text-sm">
            <strong>Budget Rule:</strong> Post each round, 40% to marketing, 35% to team scaling, 15% ops, 10% reserve.
            Marketing spend = 50% of revenue + base allocation from raise.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-2 text-slate-400">Period</th>
                <th className="text-right py-3 px-2 text-slate-400">Users</th>
                <th className="text-right py-3 px-2 text-slate-400">Merch</th>
                <th className="text-right py-3 px-2 text-slate-400">GMV/mo</th>
                <th className="text-right py-3 px-2 text-slate-400">Revenue</th>
                <th className="text-right py-3 px-2 text-slate-400">Team</th>
                <th className="text-right py-3 px-2 text-slate-400">Mktg</th>
                <th className="text-right py-3 px-2 text-slate-400">Ops</th>
                <th className="text-right py-3 px-2 text-slate-400">Total</th>
                <th className="text-right py-3 px-2 text-slate-400">Net</th>
                <th className="text-right py-3 px-2 text-slate-400">Cash</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                // SAFE Phase ($400K = AED 1.47M)
                { period: 'M1 (SAFE)', users: 1000, merchants: 15, gmv: 100, revenue: 15, team: 55, mktg: 40, ops: 18, total: 113, net: -98, cash: 1372, phase: 'safe' },
                { period: 'M3', users: 5000, merchants: 35, gmv: 500, revenue: 75, team: 65, mktg: 55, ops: 20, total: 140, net: -65, cash: 1180, phase: 'safe' },
                { period: 'M6', users: 15000, merchants: 70, gmv: 1500, revenue: 225, team: 80, mktg: 110, ops: 25, total: 215, net: 10, cash: 1000, phase: 'safe' },
                { period: 'M9 (Seed)', users: 35000, merchants: 120, gmv: 3500, revenue: 525, team: 150, mktg: 250, ops: 45, total: 445, net: 80, cash: 8350, phase: 'seed' },
                // Seed Phase ($2M = AED 7.35M) - Total: AED 8.35M in bank
                { period: 'M12', users: 70000, merchants: 180, gmv: 7000, revenue: 1050, team: 280, mktg: 480, ops: 70, total: 830, net: 220, cash: 8900, phase: 'seed' },
                { period: 'M15', users: 120000, merchants: 280, gmv: 12000, revenue: 1800, team: 400, mktg: 700, ops: 100, total: 1200, net: 600, cash: 10500, phase: 'seed' },
                { period: 'M18 (Ser A)', users: 200000, merchants: 400, gmv: 20000, revenue: 3000, team: 600, mktg: 1200, ops: 150, total: 1950, net: 1050, cash: 32000, phase: 'seriesA' },
                // Series A Phase ($6M = AED 22M) - Total: AED 32M+ in bank
                { period: 'M24', users: 400000, merchants: 700, gmv: 40000, revenue: 6000, team: 900, mktg: 2000, ops: 250, total: 3150, net: 2850, cash: 45000, phase: 'seriesA' },
                { period: 'M30', users: 650000, merchants: 1000, gmv: 65000, revenue: 9750, team: 1100, mktg: 2500, ops: 300, total: 3900, net: 5850, cash: 70000, phase: 'seriesA' },
                { period: 'M36', users: 1000000, merchants: 1500, gmv: 100000, revenue: 15000, team: 1300, mktg: 3000, ops: 400, total: 4700, net: 10300, cash: 120000, phase: 'seriesA' },
              ].map((row) => (
                <tr key={row.period} className={
                  row.phase === 'safe' ? 'bg-yellow-500/5' :
                  row.phase === 'seed' ? 'bg-blue-500/5' :
                  'bg-green-500/5'
                }>
                  <td className="py-3 px-2 text-white font-medium">{row.period}</td>
                  <td className="py-3 px-2 text-right text-slate-300">{row.users.toLocaleString()}</td>
                  <td className="py-3 px-2 text-right text-slate-300">{row.merchants}</td>
                  <td className="py-3 px-2 text-right text-slate-300">{row.gmv.toLocaleString()}K</td>
                  <td className="py-3 px-2 text-right text-green-400">{row.revenue.toLocaleString()}K</td>
                  <td className="py-3 px-2 text-right text-purple-400">{row.team}K</td>
                  <td className="py-3 px-2 text-right text-blue-400">{row.mktg}K</td>
                  <td className="py-3 px-2 text-right text-slate-400">{row.ops}K</td>
                  <td className="py-3 px-2 text-right text-red-400">{row.total.toLocaleString()}K</td>
                  <td className={`py-3 px-2 text-right font-bold ${row.net >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {row.net >= 0 ? '+' : ''}{row.net.toLocaleString()}K
                  </td>
                  <td className="py-3 px-2 text-right text-white">{(row.cash/1000).toFixed(0)}M</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">🟡 SAFE Phase</span>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded">🔵 Seed Phase</span>
          <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded">🟢 Series A Phase</span>
        </div>

        <div className="mt-6 space-y-4">
          <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
            <p className="text-green-400 font-bold mb-3">Valuation Logic</p>
            <p className="text-slate-300 text-sm">
              High-growth GCC fintech = 10-20x ARR multiples. Careem sold at 20x+. Tabby valued at 25x ARR.
              55% founder ownership post-Series A means significant returns at scale.
            </p>
          </div>
        </div>
      </div>

      {/* Year-by-Year Exit Valuation Projections */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <TrendingUp className="text-green-400" size={20} />
          Exit Valuation Projections (Multi-Round Path)
        </h3>

        {/* Year 1 Projections (Post-SAFE, Pre-Seed) */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-yellow-400 mb-3">Year 1 (Month 12) - Post-SAFE</h4>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-yellow-500/5 rounded-xl border border-yellow-500/20">
              <p className="text-slate-400 text-sm">Annual Revenue Run Rate</p>
              <p className="text-2xl font-bold text-white">AED 12.6M/year</p>
              <p className="text-slate-500 text-xs">~$3.4M ARR (AED 1.05M × 12)</p>
            </div>
            <div className="p-4 bg-yellow-500/5 rounded-xl border border-yellow-500/20">
              <p className="text-slate-400 text-sm">Founder Ownership</p>
              <p className="text-2xl font-bold text-yellow-400">78%</p>
              <p className="text-slate-500 text-xs">Post-SAFE conversion</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <p className="text-slate-400 text-xs">At 10x ARR</p>
              <p className="text-xl font-bold text-white">$34M</p>
              <p className="text-yellow-400 text-sm">Founder 78% = $26.5M</p>
            </div>
            <div className="p-3 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
              <p className="text-yellow-400 text-xs">At 15x ARR</p>
              <p className="text-xl font-bold text-yellow-400">$51M</p>
              <p className="text-yellow-400 text-sm">Founder 78% = $39.8M</p>
            </div>
            <div className="p-3 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30">
              <p className="text-[#c9a227] text-xs">At 20x ARR</p>
              <p className="text-xl font-bold text-[#c9a227]">$68M</p>
              <p className="text-[#c9a227] text-sm">Founder 78% = $53M</p>
            </div>
          </div>
        </div>

        {/* Year 2 Projections (Post-Seed) */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-blue-400 mb-3">Year 2 (Month 24) - Post-Seed</h4>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-blue-500/5 rounded-xl border border-blue-500/20">
              <p className="text-slate-400 text-sm">Annual Revenue Run Rate</p>
              <p className="text-2xl font-bold text-white">AED 72M/year</p>
              <p className="text-slate-500 text-xs">~$19.6M ARR (AED 6M × 12)</p>
            </div>
            <div className="p-4 bg-blue-500/5 rounded-xl border border-blue-500/20">
              <p className="text-slate-400 text-sm">Founder Ownership</p>
              <p className="text-2xl font-bold text-blue-400">66%</p>
              <p className="text-slate-500 text-xs">Post-Seed dilution</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <p className="text-slate-400 text-xs">At 10x ARR</p>
              <p className="text-xl font-bold text-white">$196M</p>
              <p className="text-blue-400 text-sm">Founder 66% = $129M</p>
            </div>
            <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/30">
              <p className="text-blue-400 text-xs">At 15x ARR</p>
              <p className="text-xl font-bold text-blue-400">$294M</p>
              <p className="text-blue-400 text-sm">Founder 66% = $194M</p>
            </div>
            <div className="p-3 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30">
              <p className="text-[#c9a227] text-xs">At 20x ARR</p>
              <p className="text-xl font-bold text-[#c9a227]">$392M</p>
              <p className="text-[#c9a227] text-sm">Founder 66% = $259M</p>
            </div>
          </div>
        </div>

        {/* Year 3 Projections (Post-Series A) */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-green-400 mb-3">Year 3 (Month 36) - Post-Series A</h4>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-green-500/5 rounded-xl border border-green-500/20">
              <p className="text-slate-400 text-sm">Annual Revenue Run Rate</p>
              <p className="text-2xl font-bold text-white">AED 180M/year</p>
              <p className="text-slate-500 text-xs">~$49M ARR (AED 15M × 12)</p>
            </div>
            <div className="p-4 bg-green-500/5 rounded-xl border border-green-500/20">
              <p className="text-slate-400 text-sm">Founder Ownership</p>
              <p className="text-2xl font-bold text-green-400">55%</p>
              <p className="text-slate-500 text-xs">Post-Series A dilution</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <p className="text-slate-400 text-xs">At 10x ARR (Conservative)</p>
              <p className="text-2xl font-bold text-white">$490M</p>
              <p className="text-green-400 text-sm">Founder 55% = $270M</p>
            </div>
            <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/30">
              <p className="text-green-400 text-xs">At 15x ARR (Realistic)</p>
              <p className="text-2xl font-bold text-green-400">$735M</p>
              <p className="text-green-400 text-sm">Founder 55% = $404M</p>
            </div>
            <div className="p-3 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30">
              <p className="text-[#c9a227] text-xs">At 20x ARR (Strategic Exit)</p>
              <p className="text-2xl font-bold text-[#c9a227]">$980M</p>
              <p className="text-[#c9a227] text-sm">Founder 55% = $539M</p>
            </div>
          </div>
        </div>

        {/* Growth Summary */}
        <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
          <p className="text-green-400 font-bold mb-2">Multi-Round Exit Advantage</p>
          <p className="text-slate-300 text-sm">
            <strong>Maximum growth = maximum absolute returns.</strong> Despite 45% dilution, a $735M exit at 15x ARR
            = $404M for founder (55%). This is 3.8x more than SAFE-Only ($107.6M) and 6.5x more than Bootstrap ($62M).
            Aggressive funding enables aggressive scaling and market dominance.
          </p>
        </div>
        <p className="text-slate-500 text-xs mt-4">
          * Comparable: Careem sold at 20x+ revenue. Tabby valued at 25x ARR. High-growth GCC fintechs command premium multiples.
        </p>
      </div>

      {/* Team Scaling */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Team Scaling Plan</h3>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              phase: 'Post-SAFE (10 people)',
              roles: ['CEO', 'CTO', 'CMO', 'CHRO', '3 Engineers', 'BDA', 'Designer', 'Support'],
              cost: 'AED 150K/month'
            },
            {
              phase: 'Post-Seed (45 people)',
              roles: ['+ Product Manager', '+ 8 Engineers', '+ 5 Sales', '+ 10 Support', '+ 5 Marketing', '+ Finance', '+ Legal', '+ 10 Ops'],
              cost: 'AED 600K/month'
            },
            {
              phase: 'Post-Series A (100+ people)',
              roles: ['+ Country Managers (3)', '+ 20 Engineers', '+ 15 Sales', '+ 15 Support', '+ Data Team (5)', '+ HR Team (3)'],
              cost: 'AED 1.5M/month'
            },
          ].map((phase, idx) => (
            <div key={idx} className="p-4 bg-white/5 rounded-xl">
              <p className="text-green-400 font-bold mb-2">{phase.phase}</p>
              <ul className="text-slate-300 text-xs space-y-1 mb-3">
                {phase.roles.map((role, i) => (
                  <li key={i}>• {role}</li>
                ))}
              </ul>
              <p className="text-white font-bold text-sm">{phase.cost}</p>
            </div>
          ))}
        </div>
      </div>

      {/* KPIs for Each Round */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Target className="text-green-400" size={20} />
          KPIs Required for Each Round
        </h3>

        <div className="space-y-4">
          {[
            {
              round: 'SAFE → Seed',
              kpis: [
                { metric: 'Users', target: '50,000 MAU', why: 'Proves product-market fit' },
                { metric: 'Merchants', target: '150 live', why: 'Supply side validated' },
                { metric: 'GMV', target: 'AED 5M/month', why: 'Transaction volume' },
                { metric: 'Revenue', target: 'AED 750K/month', why: 'Monetization working' },
                { metric: 'Retention', target: '25% D30', why: 'Users stick around' },
                { metric: 'LTV:CAC', target: '> 3x', why: 'Unit economics viable' },
              ],
              color: 'yellow'
            },
            {
              round: 'Seed → Series A',
              kpis: [
                { metric: 'Users', target: '250,000 MAU', why: '5x growth from Seed' },
                { metric: 'Merchants', target: '500 live', why: 'Strong network effects' },
                { metric: 'GMV', target: 'AED 25M/month', why: 'Significant scale' },
                { metric: 'Revenue', target: 'AED 3.75M/month', why: 'Revenue run rate' },
                { metric: 'Markets', target: '3+ GCC countries', why: 'Expansion proven' },
                { metric: 'Team', target: '70+ people', why: 'Can execute at scale' },
              ],
              color: 'green'
            },
          ].map((round, idx) => (
            <div key={idx} className={`p-4 rounded-xl border bg-${round.color}-500/10 border-${round.color}-500/30`}>
              <p className={`text-${round.color}-400 font-bold mb-4`}>{round.round}</p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {round.kpis.map((kpi, i) => (
                  <div key={i} className="p-3 bg-white/5 rounded-lg">
                    <p className="text-white font-medium text-sm">{kpi.metric}</p>
                    <p className={`text-${round.color}-400 font-bold`}>{kpi.target}</p>
                    <p className="text-slate-500 text-xs">{kpi.why}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verdict */}
      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30">
        <h3 className="text-xl font-bold text-white mb-4">Multi-Round Verdict</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-green-400 font-bold mb-2">Pros</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Maximum growth speed</li>
              <li>• Best chance to win market</li>
              <li>• Attract top talent with equity</li>
              <li>• Expand across GCC</li>
            </ul>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-red-400 font-bold mb-2">Cons</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• 45% dilution over 3 rounds</li>
              <li>• VC pressure for growth</li>
              <li>• Less control over decisions</li>
              <li>• Must hit aggressive KPIs</li>
            </ul>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-green-400 font-bold mb-2">Success Probability</p>
            <p className="text-4xl font-black text-green-400">65-75%</p>
            <p className="text-slate-400 text-sm mt-1">
              Best odds if execution is strong and market timing is right.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// COMPARISON TABLE
// ============================================
function ComparisonTable({ activeScenario }: { activeScenario: Scenario }) {
  return (
    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <PieChart className="text-[#c9a227]" size={20} />
        Scenario Comparison
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-slate-400">Metric</th>
              <th className={`text-center py-3 px-4 ${activeScenario === 'bootstrap' ? 'text-orange-400 bg-orange-500/10' : 'text-slate-400'}`}>Bootstrap</th>
              <th className={`text-center py-3 px-4 ${activeScenario === 'safe-only' ? 'text-blue-400 bg-blue-500/10' : 'text-slate-400'}`}>SAFE Only</th>
              <th className={`text-center py-3 px-4 ${activeScenario === 'multi-round' ? 'text-green-400 bg-green-500/10' : 'text-slate-400'}`}>Multi-Round</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {[
              { metric: 'Total Capital', bootstrap: 'AED 50K', safe: '$400K', multi: '$8.4M' },
              { metric: 'Runway', bootstrap: '4-6 months', safe: '12-18 months', multi: '36+ months' },
              { metric: 'Founder Ownership (Y3)', bootstrap: '100%', safe: '92%', multi: '55%' },
              { metric: 'Team Size (Y1)', bootstrap: '1-2', safe: '12-15', multi: '45+' },
              { metric: 'Users (Y1)', bootstrap: '2,500', safe: '25,000', multi: '120,000' },
              { metric: 'Merchants (Y1)', bootstrap: '25', safe: '100', multi: '300' },
              { metric: 'Revenue (Y1)', bootstrap: 'AED 450K', safe: 'AED 4.5M', multi: 'AED 18M' },
              { metric: 'Break-even', bootstrap: 'Month 4', safe: 'Month 9', multi: 'Month 24' },
              { metric: 'GCC Expansion', bootstrap: 'No', safe: 'Slow (Y2+)', multi: 'Yes (Y1)' },
              { metric: 'Risk Level', bootstrap: 'Very High', safe: 'Medium', multi: 'Low' },
              { metric: 'Success Probability', bootstrap: '15-20%', safe: '45-55%', multi: '65-75%' },
            ].map((row, idx) => (
              <tr key={idx}>
                <td className="py-3 px-4 text-white font-medium">{row.metric}</td>
                <td className={`py-3 px-4 text-center ${activeScenario === 'bootstrap' ? 'text-orange-400 bg-orange-500/5' : 'text-slate-300'}`}>{row.bootstrap}</td>
                <td className={`py-3 px-4 text-center ${activeScenario === 'safe-only' ? 'text-blue-400 bg-blue-500/5' : 'text-slate-300'}`}>{row.safe}</td>
                <td className={`py-3 px-4 text-center ${activeScenario === 'multi-round' ? 'text-green-400 bg-green-500/5' : 'text-slate-300'}`}>{row.multi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30">
        <p className="text-[#c9a227] font-bold mb-2">My Recommendation</p>
        <p className="text-slate-300 text-sm">
          <strong>Pursue SAFE round ($400K)</strong>, but build as if you&apos;re bootstrapping.
          This gives you runway to prove the model while maintaining discipline.
          Only raise Seed if you hit Product-Market Fit milestones.
          If revenue grows faster than expected, you might never need Series A.
        </p>
      </div>
    </div>
  );
}
