'use client';

import React, { useState } from 'react';
import {
  Calculator, DollarSign, TrendingUp, TrendingDown, Users, Store,
  PieChart, BarChart3, Target, ArrowRight, ArrowUp, ArrowDown,
  Clock, Zap, CheckCircle, AlertCircle, Info, RefreshCw, Crown,
  Percent, Coins, CreditCard, Repeat, Gift, Wallet
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Unit Economics Data
const userMetrics = {
  cac: {
    paid: { amount: 25, label: 'Paid CAC', channels: ['Instagram Ads', 'TikTok Ads', 'Google Ads'] },
    organic: { amount: 8, label: 'Organic CAC', channels: ['Referrals', 'Word of mouth', 'Content'] },
    blended: { amount: 15.4, label: 'Blended CAC', target: 12 }
  },
  ltv: {
    current: 89,
    target: 150,
    breakdown: {
      avgTransactionValue: 125,
      transactionsPerMonth: 4.2,
      avgLifespanMonths: 18,
      commissionRate: 0.05,
      coinsRedemptionRate: 0.7
    }
  },
  ltvCacRatio: {
    current: 5.8,
    target: 10,
    benchmark: { good: 3, great: 5, excellent: 8 }
  },
  paybackPeriod: {
    current: 2.7, // months
    target: 2,
    benchmark: { good: 6, great: 3, excellent: 1 }
  }
};

const merchantMetrics = {
  cac: {
    directSales: { amount: 116, label: 'Event Direct Sales' },
    coldOutreach: { amount: 250, label: 'Cold Outreach' },
    referral: { amount: 80, label: 'Merchant Referral' },
    blended: { amount: 150, label: 'Blended CAC', target: 100 }
  },
  ltv: {
    current: 2400,
    target: 5000,
    breakdown: {
      avgGmvPerMonth: 8000,
      commissionRate: 0.05,
      avgLifespanMonths: 24,
      premiumFeatureRevenue: 50
    }
  },
  ltvCacRatio: {
    current: 16,
    target: 25,
    benchmark: { good: 5, great: 10, excellent: 20 }
  }
};

// Cohort Data
const cohortData = [
  { month: 'Jan 2025', users: 1000, m1: 65, m2: 48, m3: 42, m6: 35, m12: 28, ltv: 75 },
  { month: 'Feb 2025', users: 1500, m1: 68, m2: 52, m3: 45, m6: 38, m12: null, ltv: 82 },
  { month: 'Mar 2025', users: 2200, m1: 72, m2: 55, m3: 48, m6: null, m12: null, ltv: 89 },
  { month: 'Apr 2025', users: 3000, m1: 75, m2: 58, m3: null, m6: null, m12: null, ltv: null },
  { month: 'May 2025', users: 4500, m1: 78, m2: null, m3: null, m6: null, m12: null, ltv: null },
];

// Channel Economics
const channelEconomics = [
  { channel: 'Instagram Ads', cac: 28, ltv: 95, ltvCac: 3.4, payback: 3.5, contribution: 35, status: 'Scale' },
  { channel: 'TikTok Ads', cac: 22, ltv: 72, ltvCac: 3.3, payback: 3.8, contribution: 25, status: 'Scale' },
  { channel: 'Google Ads', cac: 45, ltv: 110, ltvCac: 2.4, payback: 5.2, contribution: 15, status: 'Optimize' },
  { channel: 'Referrals', cac: 8, ltv: 120, ltvCac: 15.0, payback: 0.8, contribution: 20, status: 'Superscale' },
  { channel: 'Events', cac: 15, ltv: 95, ltvCac: 6.3, payback: 1.9, contribution: 5, status: 'Scale' },
];

// Revenue Breakdown
const revenueStreams = [
  { stream: 'Transaction Commission (5%)', percentage: 75, monthly: 37500, growth: '+15%' },
  { stream: 'Nuqta+ Subscriptions', percentage: 10, monthly: 5000, growth: '+25%' },
  { stream: 'Merchant Premium Features', percentage: 8, monthly: 4000, growth: '+20%' },
  { stream: 'Expired Coins', percentage: 5, monthly: 2500, growth: '+8%' },
  { stream: 'Data Insights (Future)', percentage: 2, monthly: 1000, growth: 'New' },
];

// Interactive Calculator Component
const UnitEconomicsCalculator = () => {
  const [inputs, setInputs] = useState({
    avgTransactionValue: 125,
    transactionsPerMonth: 4.2,
    commissionRate: 5,
    userLifespanMonths: 18,
    coinsRedemptionRate: 70,
    cacPaid: 25,
    cacOrganic: 8,
    organicShare: 40
  });

  const calculate = () => {
    const monthlyRevenue = inputs.avgTransactionValue * inputs.transactionsPerMonth * (inputs.commissionRate / 100);
    const netRevenue = monthlyRevenue * (1 - inputs.coinsRedemptionRate / 100 * 0.5); // 50% of coins = cost
    const ltv = netRevenue * inputs.userLifespanMonths;
    const blendedCac = (inputs.cacPaid * (100 - inputs.organicShare) / 100) + (inputs.cacOrganic * inputs.organicShare / 100);
    const ltvCacRatio = ltv / blendedCac;
    const paybackMonths = blendedCac / netRevenue;

    return { monthlyRevenue, netRevenue, ltv, blendedCac, ltvCacRatio, paybackMonths };
  };

  const results = calculate();

  return (
    <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2d4a] rounded-2xl p-6 text-white">
      <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
        <Calculator size={24} className="text-[#c9a227]" />
        Interactive Unit Economics Calculator
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="text-sm text-gray-300">Avg Transaction (AED)</label>
          <input
            type="number"
            value={inputs.avgTransactionValue}
            onChange={(e) => setInputs({ ...inputs, avgTransactionValue: Number(e.target.value) })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm text-gray-300">Transactions/Month</label>
          <input
            type="number"
            step="0.1"
            value={inputs.transactionsPerMonth}
            onChange={(e) => setInputs({ ...inputs, transactionsPerMonth: Number(e.target.value) })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm text-gray-300">Commission Rate (%)</label>
          <input
            type="number"
            step="0.5"
            value={inputs.commissionRate}
            onChange={(e) => setInputs({ ...inputs, commissionRate: Number(e.target.value) })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm text-gray-300">User Lifespan (months)</label>
          <input
            type="number"
            value={inputs.userLifespanMonths}
            onChange={(e) => setInputs({ ...inputs, userLifespanMonths: Number(e.target.value) })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm text-gray-300">Coins Redemption (%)</label>
          <input
            type="number"
            value={inputs.coinsRedemptionRate}
            onChange={(e) => setInputs({ ...inputs, coinsRedemptionRate: Number(e.target.value) })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm text-gray-300">Paid CAC (AED)</label>
          <input
            type="number"
            value={inputs.cacPaid}
            onChange={(e) => setInputs({ ...inputs, cacPaid: Number(e.target.value) })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm text-gray-300">Organic CAC (AED)</label>
          <input
            type="number"
            value={inputs.cacOrganic}
            onChange={(e) => setInputs({ ...inputs, cacOrganic: Number(e.target.value) })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm text-gray-300">Organic Share (%)</label>
          <input
            type="number"
            value={inputs.organicShare}
            onChange={(e) => setInputs({ ...inputs, organicShare: Number(e.target.value) })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1"
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-white/5 rounded-xl p-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-[#c9a227]">AED {results.monthlyRevenue.toFixed(2)}</div>
          <div className="text-xs text-gray-400">Monthly Revenue/User</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-400">AED {results.ltv.toFixed(0)}</div>
          <div className="text-xs text-gray-400">Lifetime Value</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-pink-400">AED {results.blendedCac.toFixed(2)}</div>
          <div className="text-xs text-gray-400">Blended CAC</div>
        </div>
        <div className="text-center">
          <div className={`text-2xl font-bold ${results.ltvCacRatio >= 5 ? 'text-emerald-400' : results.ltvCacRatio >= 3 ? 'text-amber-400' : 'text-red-400'}`}>
            {results.ltvCacRatio.toFixed(1)}x
          </div>
          <div className="text-xs text-gray-400">LTV:CAC Ratio</div>
        </div>
        <div className="text-center">
          <div className={`text-2xl font-bold ${results.paybackMonths <= 3 ? 'text-emerald-400' : results.paybackMonths <= 6 ? 'text-amber-400' : 'text-red-400'}`}>
            {results.paybackMonths.toFixed(1)} mo
          </div>
          <div className="text-xs text-gray-400">Payback Period</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-cyan-400">AED {results.netRevenue.toFixed(2)}</div>
          <div className="text-xs text-gray-400">Net Rev/User/Mo</div>
        </div>
      </div>

      {/* Health Check */}
      <div className="mt-4 p-3 rounded-lg bg-white/10 text-sm">
        {results.ltvCacRatio >= 5 ? (
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle size={16} />
            <span>Excellent unit economics! Ready to scale aggressively.</span>
          </div>
        ) : results.ltvCacRatio >= 3 ? (
          <div className="flex items-center gap-2 text-amber-400">
            <AlertCircle size={16} />
            <span>Good unit economics. Focus on improving retention to increase LTV.</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-red-400">
            <AlertCircle size={16} />
            <span>Warning: LTV:CAC ratio below 3x. Optimize before scaling.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default function UnitEconomicsPage() {
  const [activeTab, setActiveTab] = useState<'users' | 'merchants'>('users');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] via-[#1a2d4a] to-[#0a1628] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
              <DollarSign className="text-[#c9a227]" size={18} />
              <span className="text-[#c9a227] font-medium">Financial Intelligence</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Unit Economics <span className="text-[#c9a227]">Dashboard</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Know your numbers. CAC, LTV, payback period, and channel economics.
              Data-driven scaling decisions.
            </p>

            {/* Key Metrics Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-[#c9a227]">AED 89</div>
                <div className="text-sm text-gray-300">User LTV</div>
                <div className="text-xs text-emerald-400 mt-1">↑ 12% vs last month</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-emerald-400">5.8x</div>
                <div className="text-sm text-gray-300">LTV:CAC Ratio</div>
                <div className="text-xs text-emerald-400 mt-1">Target: 10x</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-pink-400">2.7 mo</div>
                <div className="text-sm text-gray-300">Payback Period</div>
                <div className="text-xs text-emerald-400 mt-1">↓ 0.5 mo improved</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-cyan-400">AED 50K</div>
                <div className="text-sm text-gray-300">Monthly Revenue</div>
                <div className="text-xs text-emerald-400 mt-1">↑ 18% MoM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Interactive Calculator */}
        <div className="mb-8">
          <UnitEconomicsCalculator />
        </div>

        {/* Tab Selector */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('users')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'users'
                ? 'bg-[#0a1628] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Users size={18} />
            User Economics
          </button>
          <button
            onClick={() => setActiveTab('merchants')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'merchants'
                ? 'bg-[#0a1628] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Store size={18} />
            Merchant Economics
          </button>
        </div>

        {activeTab === 'users' ? (
          <>
            {/* User CAC Breakdown */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingDown className="text-red-500" />
                  Customer Acquisition Cost (CAC)
                </h2>

                <div className="space-y-4">
                  <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Paid Acquisition</span>
                      <span className="text-2xl font-bold text-red-600">AED {userMetrics.cac.paid.amount}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {userMetrics.cac.paid.channels.map((ch, i) => (
                        <span key={i} className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">{ch}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Organic Acquisition</span>
                      <span className="text-2xl font-bold text-emerald-600">AED {userMetrics.cac.organic.amount}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {userMetrics.cac.organic.channels.map((ch, i) => (
                        <span key={i} className="text-xs bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full">{ch}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-100 rounded-xl p-4 border-2 border-gray-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-semibold">Blended CAC</span>
                        <span className="text-sm text-gray-500 ml-2">(40% organic)</span>
                      </div>
                      <span className="text-3xl font-bold text-gray-900">AED {userMetrics.cac.blended.amount}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Target: AED {userMetrics.cac.blended.target}
                    </div>
                  </div>
                </div>
              </div>

              {/* User LTV Breakdown */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="text-emerald-500" />
                  Lifetime Value (LTV)
                </h2>

                <div className="bg-emerald-50 rounded-xl p-4 border-2 border-emerald-200 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Current LTV</span>
                    <span className="text-3xl font-bold text-emerald-600">AED {userMetrics.ltv.current}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Target: AED {userMetrics.ltv.target}
                  </div>
                </div>

                <h4 className="font-semibold text-gray-700 mb-2">LTV Calculation</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Avg Transaction Value</span>
                    <span className="font-medium">AED {userMetrics.ltv.breakdown.avgTransactionValue}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Transactions/Month</span>
                    <span className="font-medium">{userMetrics.ltv.breakdown.transactionsPerMonth}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Commission Rate</span>
                    <span className="font-medium">{userMetrics.ltv.breakdown.commissionRate * 100}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Avg Lifespan</span>
                    <span className="font-medium">{userMetrics.ltv.breakdown.avgLifespanMonths} months</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Coins Redemption Rate</span>
                    <span className="font-medium">{userMetrics.ltv.breakdown.coinsRedemptionRate * 100}%</span>
                  </div>
                  <div className="flex justify-between py-2 bg-emerald-100 px-3 rounded-lg font-semibold">
                    <span>LTV = (ATV × TPM × CR × Life) × (1 - CRR×0.5)</span>
                    <span className="text-emerald-600">AED {userMetrics.ltv.current}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* LTV:CAC and Payback */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Target size={20} />
                  LTV:CAC Ratio
                </h3>
                <div className="text-5xl font-bold mb-2">{userMetrics.ltvCacRatio.current}x</div>
                <div className="text-purple-200 mb-4">Target: {userMetrics.ltvCacRatio.target}x</div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${userMetrics.ltvCacRatio.current >= 8 ? 'bg-emerald-400' : 'bg-gray-400'}`} />
                    <span className={userMetrics.ltvCacRatio.current >= 8 ? 'text-white' : 'text-purple-300'}>
                      Excellent (8x+): Scale aggressively
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${userMetrics.ltvCacRatio.current >= 5 && userMetrics.ltvCacRatio.current < 8 ? 'bg-emerald-400' : 'bg-gray-400'}`} />
                    <span className={userMetrics.ltvCacRatio.current >= 5 && userMetrics.ltvCacRatio.current < 8 ? 'text-white' : 'text-purple-300'}>
                      Great (5x+): Healthy, can scale ✓
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${userMetrics.ltvCacRatio.current >= 3 && userMetrics.ltvCacRatio.current < 5 ? 'bg-amber-400' : 'bg-gray-400'}`} />
                    <span className={userMetrics.ltvCacRatio.current >= 3 && userMetrics.ltvCacRatio.current < 5 ? 'text-white' : 'text-purple-300'}>
                      Good (3x+): Improve before scaling
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${userMetrics.ltvCacRatio.current < 3 ? 'bg-red-400' : 'bg-gray-400'}`} />
                    <span className={userMetrics.ltvCacRatio.current < 3 ? 'text-white' : 'text-purple-300'}>
                      Warning (&lt;3x): Fix unit economics first
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Clock size={20} />
                  Payback Period
                </h3>
                <div className="text-5xl font-bold mb-2">{userMetrics.paybackPeriod.current} mo</div>
                <div className="text-cyan-200 mb-4">Target: {userMetrics.paybackPeriod.target} months</div>

                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-sm mb-2">Time to recover customer acquisition cost:</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${userMetrics.paybackPeriod.current <= 1 ? 'bg-emerald-400' : 'bg-gray-400'}`} />
                      <span>Excellent (&lt;1 mo)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${userMetrics.paybackPeriod.current <= 3 && userMetrics.paybackPeriod.current > 1 ? 'bg-emerald-400' : 'bg-gray-400'}`} />
                      <span>Great (1-3 mo) ✓</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${userMetrics.paybackPeriod.current <= 6 && userMetrics.paybackPeriod.current > 3 ? 'bg-amber-400' : 'bg-gray-400'}`} />
                      <span>Good (3-6 mo)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${userMetrics.paybackPeriod.current > 6 ? 'bg-red-400' : 'bg-gray-400'}`} />
                      <span>Warning (&gt;6 mo)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Channel Economics */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BarChart3 className="text-purple-600" />
                Channel Economics
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-600">Channel</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-600">CAC</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-600">LTV</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-600">LTV:CAC</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-600">Payback</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-600">% Users</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-600">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {channelEconomics.map((channel, i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{channel.channel}</td>
                        <td className="py-3 px-4 text-right text-red-600">AED {channel.cac}</td>
                        <td className="py-3 px-4 text-right text-emerald-600">AED {channel.ltv}</td>
                        <td className="py-3 px-4 text-right">
                          <span className={`font-bold ${
                            channel.ltvCac >= 5 ? 'text-emerald-600' :
                            channel.ltvCac >= 3 ? 'text-amber-600' :
                            'text-red-600'
                          }`}>{channel.ltvCac}x</span>
                        </td>
                        <td className="py-3 px-4 text-right">{channel.payback} mo</td>
                        <td className="py-3 px-4 text-right">{channel.contribution}%</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            channel.status === 'Superscale' ? 'bg-emerald-100 text-emerald-700' :
                            channel.status === 'Scale' ? 'bg-blue-100 text-blue-700' :
                            'bg-amber-100 text-amber-700'
                          }`}>
                            {channel.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cohort Retention */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <RefreshCw className="text-cyan-600" />
                Cohort Retention Analysis
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-600">Cohort</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-600">Users</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-600">M1</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-600">M2</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-600">M3</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-600">M6</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-600">M12</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-600">LTV</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cohortData.map((cohort, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">{cohort.month}</td>
                        <td className="py-3 px-4 text-right">{cohort.users.toLocaleString()}</td>
                        <td className="py-3 px-4 text-right">
                          <span className={`${cohort.m1 >= 70 ? 'text-emerald-600' : cohort.m1 >= 60 ? 'text-amber-600' : 'text-red-600'} font-medium`}>
                            {cohort.m1}%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          {cohort.m2 !== null ? (
                            <span className={`${cohort.m2 >= 50 ? 'text-emerald-600' : cohort.m2 >= 40 ? 'text-amber-600' : 'text-red-600'} font-medium`}>
                              {cohort.m2}%
                            </span>
                          ) : <span className="text-gray-300">—</span>}
                        </td>
                        <td className="py-3 px-4 text-right">
                          {cohort.m3 !== null ? (
                            <span className={`${cohort.m3 >= 45 ? 'text-emerald-600' : cohort.m3 >= 35 ? 'text-amber-600' : 'text-red-600'} font-medium`}>
                              {cohort.m3}%
                            </span>
                          ) : <span className="text-gray-300">—</span>}
                        </td>
                        <td className="py-3 px-4 text-right">
                          {cohort.m6 !== null ? (
                            <span className="font-medium">{cohort.m6}%</span>
                          ) : <span className="text-gray-300">—</span>}
                        </td>
                        <td className="py-3 px-4 text-right">
                          {cohort.m12 !== null ? (
                            <span className="font-medium">{cohort.m12}%</span>
                          ) : <span className="text-gray-300">—</span>}
                        </td>
                        <td className="py-3 px-4 text-right">
                          {cohort.ltv !== null ? (
                            <span className="font-bold text-emerald-600">AED {cohort.ltv}</span>
                          ) : <span className="text-gray-300">—</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="flex items-start gap-2">
                  <TrendingUp className="text-emerald-600 mt-0.5" size={18} />
                  <div className="text-sm">
                    <span className="font-semibold text-emerald-800">Trend:</span>{' '}
                    <span className="text-emerald-700">
                      M1 retention improving from 65% → 78% over 5 months. Product improvements working.
                      LTV increasing as newer cohorts retain better.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Merchant Economics */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Store className="text-emerald-600" />
                  Merchant Acquisition Cost
                </h2>

                <div className="space-y-3">
                  <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Event Direct Sales</span>
                      <span className="text-2xl font-bold text-emerald-600">AED {merchantMetrics.cac.directSales.amount}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Events + booth + sales staff</div>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Cold Outreach</span>
                      <span className="text-2xl font-bold text-amber-600">AED {merchantMetrics.cac.coldOutreach.amount}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Sales team door-to-door</div>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Merchant Referral</span>
                      <span className="text-2xl font-bold text-purple-600">AED {merchantMetrics.cac.referral.amount}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Referral bonus only</div>
                  </div>

                  <div className="bg-gray-100 rounded-xl p-4 border-2 border-gray-300">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Blended CAC</span>
                      <span className="text-3xl font-bold text-gray-900">AED {merchantMetrics.cac.blended.amount}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Target: AED {merchantMetrics.cac.blended.target}</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Crown className="text-[#c9a227]" />
                  Merchant Lifetime Value
                </h2>

                <div className="bg-[#c9a227]/10 rounded-xl p-4 border-2 border-[#c9a227]/30 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Merchant LTV</span>
                    <span className="text-3xl font-bold text-[#c9a227]">AED {merchantMetrics.ltv.current.toLocaleString()}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Target: AED {merchantMetrics.ltv.target.toLocaleString()}</div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Avg GMV/Month</span>
                    <span className="font-medium">AED {merchantMetrics.ltv.breakdown.avgGmvPerMonth.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Commission Rate</span>
                    <span className="font-medium">{merchantMetrics.ltv.breakdown.commissionRate * 100}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Avg Merchant Lifespan</span>
                    <span className="font-medium">{merchantMetrics.ltv.breakdown.avgLifespanMonths} months</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Premium Feature Revenue</span>
                    <span className="font-medium">AED {merchantMetrics.ltv.breakdown.premiumFeatureRevenue}/mo</span>
                  </div>
                  <div className="flex justify-between py-2 bg-[#c9a227]/10 px-3 rounded-lg font-semibold">
                    <span>LTV = (GMV × CR + Premium) × Life</span>
                    <span className="text-[#c9a227]">AED {merchantMetrics.ltv.current.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Merchant LTV:CAC */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-white mb-8">
              <h3 className="font-bold text-xl mb-4">Merchant LTV:CAC Analysis</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-4xl font-bold">{merchantMetrics.ltvCacRatio.current}x</div>
                  <div className="text-emerald-100">Current LTV:CAC</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-4xl font-bold">{merchantMetrics.ltvCacRatio.target}x</div>
                  <div className="text-emerald-100">Target</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-sm mb-2">Status:</div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={20} />
                    <span className="font-semibold">Excellent! Merchant acquisition is highly profitable.</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Revenue Streams */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <PieChart className="text-amber-600" />
            Revenue Streams Breakdown
          </h2>

          <div className="space-y-3">
            {revenueStreams.map((stream, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-32 text-right text-sm font-medium text-gray-500">
                  {stream.percentage}%
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900">{stream.stream}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600">AED {stream.monthly.toLocaleString()}/mo</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        stream.growth.includes('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-purple-100 text-purple-700'
                      }`}>
                        {stream.growth}
                      </span>
                    </div>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        i === 0 ? 'bg-[#c9a227]' :
                        i === 1 ? 'bg-purple-500' :
                        i === 2 ? 'bg-emerald-500' :
                        i === 3 ? 'bg-amber-500' :
                        'bg-cyan-500'
                      }`}
                      style={{ width: `${stream.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Improvement Levers */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-6 border-2 border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Zap className="text-amber-500" />
            Key Improvement Levers
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-emerald-600 mb-2 flex items-center gap-2">
                <ArrowUp size={16} />
                Increase LTV
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Improve retention (Day 30: 48% → 60%)</li>
                <li>• Increase transaction frequency</li>
                <li>• Launch Nuqta+ subscription</li>
                <li>• Add premium merchant features</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <ArrowDown size={16} />
                Reduce CAC
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Increase organic share (40% → 60%)</li>
                <li>• Optimize paid campaigns</li>
                <li>• Supercharge referral program</li>
                <li>• Leverage merchant co-marketing</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-purple-600 mb-2 flex items-center gap-2">
                <Repeat size={16} />
                Accelerate Payback
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• First transaction within 24 hours</li>
                <li>• Higher value first transactions</li>
                <li>• Better onboarding conversion</li>
                <li>• Reduce coin redemption rate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <GlobalFooter />
    </div>
  );
}
