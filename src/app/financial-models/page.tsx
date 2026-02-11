'use client';

import React, { useState } from 'react';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Users,
  Store,
  PieChart,
  BarChart3,
  LineChart,
  Target,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Percent,
  Calendar,
  Coins,
  CreditCard,
  Building2,
  Zap,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

/**
 * NUQTA FINANCIAL MODELS
 * ======================
 * Comprehensive financial projections and unit economics
 */

export default function FinancialModelsPage() {
  const [activeTab, setActiveTab] = useState('unit-economics');
  const [scenario, setScenario] = useState<'conservative' | 'base' | 'optimistic'>('base');

  const tabs = [
    { id: 'unit-economics', label: 'Unit Economics', icon: Calculator },
    { id: 'pnl', label: 'P&L Projections', icon: LineChart },
    { id: 'revenue', label: 'Revenue Model', icon: DollarSign },
    { id: 'costs', label: 'Cost Structure', icon: PieChart },
    { id: 'scenarios', label: 'Scenario Analysis', icon: BarChart3 },
  ];

  // Scenario multipliers
  const scenarioData = {
    conservative: { label: 'Conservative', multiplier: 0.7, color: 'yellow' },
    base: { label: 'Base Case', multiplier: 1.0, color: 'blue' },
    optimistic: { label: 'Optimistic', multiplier: 1.4, color: 'green' },
  };

  const mult = scenarioData[scenario].multiplier;

  // Unit Economics Data
  const unitEconomics = {
    user: {
      cac: 5,
      ltv: 120,
      ltvCacRatio: 24,
      paybackMonths: 2,
      avgTransactionsPerMonth: 8,
      avgTransactionValue: 75,
      avgCashbackRate: 0.05,
      avgCashbackPerTransaction: 3.75,
      monthlyGMV: 600,
      annualGMV: 7200,
    },
    merchant: {
      cacPerMerchant: 200,
      ltvPerMerchant: 4800,
      avgCommissionRate: 0.08,
      avgMonthlyGMV: 50000,
      avgMonthlyRevenue: 400,
      churnRate: 0.05,
      lifetimeMonths: 12,
    },
  };

  // P&L Projections by Year - AGGRESSIVE DOMINATION TARGETS
  // Aligned with 3-Year Domination Master Plan
  const pnlData = [
    {
      year: 'Year 1',
      users: Math.round(100000 * mult),        // 100K users - UAE Blitzscale
      merchants: Math.round(2500 * mult),       // 2,500 merchants
      gmv: Math.round(120000000 * mult),        // AED 120M GMV
      revenue: Math.round(9600000 * mult),      // AED 9.6M revenue (8% take rate)
      cogs: Math.round(3840000 * mult),         // 40% COGS
      grossProfit: Math.round(5760000 * mult),  // 60% gross margin
      opex: Math.round(4800000 * mult),         // 50% opex ratio
      ebitda: Math.round(960000 * mult),        // AED 960K EBITDA
      grossMargin: 60,
      ebitdaMargin: 10,
    },
    {
      year: 'Year 2',
      users: Math.round(500000 * mult),         // 500K users - GCC Expansion
      merchants: Math.round(10000 * mult),      // 10,000 merchants
      gmv: Math.round(600000000 * mult),        // AED 600M GMV
      revenue: Math.round(48000000 * mult),     // AED 48M revenue
      cogs: Math.round(14400000 * mult),        // 30% COGS
      grossProfit: Math.round(33600000 * mult), // 70% gross margin
      opex: Math.round(19200000 * mult),        // 40% opex ratio
      ebitda: Math.round(14400000 * mult),      // AED 14.4M EBITDA
      grossMargin: 70,
      ebitdaMargin: 30,
    },
    {
      year: 'Year 3',
      users: Math.round(1500000 * mult),        // 1.5M users - Regional Leader
      merchants: Math.round(30000 * mult),      // 30,000 merchants
      gmv: Math.round(1800000000 * mult),       // AED 1.8B GMV
      revenue: Math.round(144000000 * mult),    // AED 144M revenue
      cogs: Math.round(36000000 * mult),        // 25% COGS
      grossProfit: Math.round(108000000 * mult),// 75% gross margin
      opex: Math.round(50400000 * mult),        // 35% opex ratio
      ebitda: Math.round(57600000 * mult),      // AED 57.6M EBITDA
      grossMargin: 75,
      ebitdaMargin: 40,
    },
    {
      year: 'Year 4',
      users: Math.round(3000000 * mult),        // 3M users - Market Dominance
      merchants: Math.round(60000 * mult),      // 60,000 merchants
      gmv: Math.round(3600000000 * mult),       // AED 3.6B GMV
      revenue: Math.round(288000000 * mult),    // AED 288M revenue
      cogs: Math.round(57600000 * mult),        // 20% COGS
      grossProfit: Math.round(230400000 * mult),// 80% gross margin
      opex: Math.round(86400000 * mult),        // 30% opex ratio
      ebitda: Math.round(144000000 * mult),     // AED 144M EBITDA
      grossMargin: 80,
      ebitdaMargin: 50,
    },
    {
      year: 'Year 5',
      users: Math.round(5000000 * mult),        // 5M users - Complete Domination
      merchants: Math.round(100000 * mult),     // 100,000 merchants
      gmv: Math.round(6000000000 * mult),       // AED 6B GMV
      revenue: Math.round(480000000 * mult),    // AED 480M revenue
      cogs: Math.round(72000000 * mult),        // 15% COGS
      grossProfit: Math.round(408000000 * mult),// 85% gross margin
      opex: Math.round(120000000 * mult),       // 25% opex ratio
      ebitda: Math.round(288000000 * mult),     // AED 288M EBITDA
      grossMargin: 85,
      ebitdaMargin: 60,
    },
  ];

  // Revenue Streams - Updated for Aggressive Domination Targets
  const revenueStreams = [
    {
      name: 'Merchant Commissions',
      description: 'Transaction-based commission on GMV processed through Nuqta',
      percentage: 70,
      year1: Math.round(6720000 * mult),        // 70% of 9.6M
      year3: Math.round(100800000 * mult),      // 70% of 144M
      year5: Math.round(336000000 * mult),      // 70% of 480M
      model: '5-12% of transaction value',
      color: 'emerald',
    },
    {
      name: 'Subscription Fees',
      description: 'Monthly/annual subscription packages for merchants',
      percentage: 15,
      year1: Math.round(1440000 * mult),        // 15% of 9.6M
      year3: Math.round(21600000 * mult),       // 15% of 144M
      year5: Math.round(72000000 * mult),       // 15% of 480M
      model: 'AED 199-999/month per merchant',
      color: 'blue',
    },
    {
      name: 'Premium Features',
      description: 'User premium subscriptions and advanced merchant tools',
      percentage: 10,
      year1: Math.round(960000 * mult),         // 10% of 9.6M
      year3: Math.round(14400000 * mult),       // 10% of 144M
      year5: Math.round(48000000 * mult),       // 10% of 480M
      model: 'AED 29/month user premium + merchant add-ons',
      color: 'purple',
    },
    {
      name: 'Data & Insights',
      description: 'Anonymized spending analytics sold to brands/research firms',
      percentage: 5,
      year1: Math.round(480000 * mult),         // 5% of 9.6M
      year3: Math.round(7200000 * mult),        // 5% of 144M
      year5: Math.round(24000000 * mult),       // 5% of 480M
      model: 'B2B data partnerships',
      color: 'orange',
    },
  ];

  // Cost Structure
  const costStructure = {
    cogs: [
      { name: 'Payment Processing', percentage: 25, description: '1.5-2.5% of GMV to payment processors' },
      { name: 'Cashback Rewards', percentage: 40, description: 'User rewards funded by merchant commissions' },
      { name: 'Customer Support', percentage: 20, description: 'Support team and tools' },
      { name: 'Infrastructure', percentage: 15, description: 'Cloud hosting, APIs, security' },
    ],
    opex: [
      { name: 'Salaries & Benefits', percentage: 55, description: 'Team compensation' },
      { name: 'Marketing', percentage: 20, description: 'User and merchant acquisition' },
      { name: 'Technology', percentage: 10, description: 'Software, tools, R&D' },
      { name: 'G&A', percentage: 10, description: 'Office, legal, admin' },
      { name: 'Other', percentage: 5, description: 'Miscellaneous' },
    ],
  };

  const formatCurrency = (num: number) => {
    if (num >= 1000000) return `AED ${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `AED ${(num / 1000).toFixed(0)}K`;
    return `AED ${num}`;
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-[#c9a227]/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#c9a227]/20 rounded-xl">
              <Calculator className="w-8 h-8 text-[#c9a227]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Financial Models</h1>
              <p className="text-gray-400">Unit Economics, P&L Projections & Scenario Analysis</p>
            </div>
          </div>

          {/* Scenario Selector */}
          <div className="flex items-center gap-4 mt-6">
            <span className="text-gray-400 text-sm">Scenario:</span>
            <div className="flex gap-2">
              {(['conservative', 'base', 'optimistic'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setScenario(s)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    scenario === s
                      ? s === 'conservative' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' :
                        s === 'base' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50' :
                        'bg-green-500/20 text-green-400 border border-green-500/50'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {scenarioData[s].label}
                </button>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-[#0a1628] font-bold'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Unit Economics Tab */}
        {activeTab === 'unit-economics' && (
          <div className="space-y-8">
            {/* Overview Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl p-6 border border-green-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-400 text-sm">LTV:CAC Ratio</span>
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-3xl font-bold text-white">{unitEconomics.user.ltvCacRatio}x</p>
                <p className="text-xs text-gray-400 mt-1">Target: &gt;10x (Excellent)</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl p-6 border border-blue-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400 text-sm">User LTV</span>
                  <Wallet className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-3xl font-bold text-white">AED {unitEconomics.user.ltv}</p>
                <p className="text-xs text-gray-400 mt-1">24-month lifetime value</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl p-6 border border-purple-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-400 text-sm">User CAC</span>
                  <Target className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-3xl font-bold text-white">AED {unitEconomics.user.cac}</p>
                <p className="text-xs text-gray-400 mt-1">Blended acquisition cost</p>
              </div>
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl p-6 border border-[#c9a227]/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#c9a227] text-sm">Payback Period</span>
                  <Calendar className="w-5 h-5 text-[#c9a227]" />
                </div>
                <p className="text-3xl font-bold text-white">{unitEconomics.user.paybackMonths} months</p>
                <p className="text-xs text-gray-400 mt-1">Time to recover CAC</p>
              </div>
            </div>

            {/* User Unit Economics */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-[#c9a227]" />
                <h3 className="text-xl font-bold">User Unit Economics</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#c9a227]">Transaction Metrics</h4>
                  <div className="space-y-3">
                    {[
                      { label: 'Avg Transactions/Month', value: unitEconomics.user.avgTransactionsPerMonth, suffix: 'txns' },
                      { label: 'Avg Transaction Value', value: `AED ${unitEconomics.user.avgTransactionValue}`, suffix: '' },
                      { label: 'Avg Cashback Rate', value: `${(unitEconomics.user.avgCashbackRate * 100).toFixed(0)}%`, suffix: '' },
                      { label: 'Avg Cashback/Transaction', value: `AED ${unitEconomics.user.avgCashbackPerTransaction}`, suffix: '' },
                      { label: 'Monthly GMV/User', value: `AED ${unitEconomics.user.monthlyGMV}`, suffix: '' },
                      { label: 'Annual GMV/User', value: `AED ${unitEconomics.user.annualGMV.toLocaleString()}`, suffix: '' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30">
                        <span className="text-gray-400">{item.label}</span>
                        <span className="text-white font-medium">{item.value} {item.suffix}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#c9a227]">LTV Calculation</h4>
                  <div className="bg-gray-800/30 rounded-xl p-4">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Monthly Revenue/User</span>
                        <span className="text-white">AED 5 (commission share)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Average Lifetime</span>
                        <span className="text-white">24 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Gross Margin</span>
                        <span className="text-white">50%</span>
                      </div>
                      <div className="border-t border-gray-700 pt-3 flex justify-between">
                        <span className="text-[#c9a227] font-semibold">LTV</span>
                        <span className="text-[#c9a227] font-bold">AED 120</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                      LTV = Monthly Revenue × Lifetime × Gross Margin
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-semibold">Healthy Economics</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      LTV:CAC of 24x far exceeds the 3x minimum threshold, indicating strong unit economics and capital efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Merchant Unit Economics */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <div className="flex items-center gap-3 mb-6">
                <Store className="w-6 h-6 text-[#c9a227]" />
                <h3 className="text-xl font-bold">Merchant Unit Economics</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#c9a227]">Revenue Metrics</h4>
                  <div className="space-y-3">
                    {[
                      { label: 'Merchant CAC', value: `AED ${unitEconomics.merchant.cacPerMerchant}` },
                      { label: 'Avg Commission Rate', value: `${(unitEconomics.merchant.avgCommissionRate * 100).toFixed(0)}%` },
                      { label: 'Avg Monthly GMV', value: `AED ${unitEconomics.merchant.avgMonthlyGMV.toLocaleString()}` },
                      { label: 'Avg Monthly Revenue', value: `AED ${unitEconomics.merchant.avgMonthlyRevenue}` },
                      { label: 'Merchant Churn Rate', value: `${(unitEconomics.merchant.churnRate * 100).toFixed(0)}%/month` },
                      { label: 'Avg Lifetime', value: `${unitEconomics.merchant.lifetimeMonths} months` },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30">
                        <span className="text-gray-400">{item.label}</span>
                        <span className="text-white font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#c9a227]">Merchant LTV Calculation</h4>
                  <div className="bg-gray-800/30 rounded-xl p-4">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Monthly Revenue</span>
                        <span className="text-white">AED 400</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Average Lifetime</span>
                        <span className="text-white">12 months</span>
                      </div>
                      <div className="border-t border-gray-700 pt-3 flex justify-between">
                        <span className="text-[#c9a227] font-semibold">Merchant LTV</span>
                        <span className="text-[#c9a227] font-bold">AED 4,800</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 text-center">
                      <p className="text-2xl font-bold text-blue-400">24x</p>
                      <p className="text-xs text-gray-400">LTV:CAC Ratio</p>
                    </div>
                    <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/30 text-center">
                      <p className="text-2xl font-bold text-purple-400">&lt;1 mo</p>
                      <p className="text-xs text-gray-400">Payback Period</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* P&L Tab */}
        {activeTab === 'pnl' && (
          <div className="space-y-8">
            {/* Summary Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-xl p-6 border border-emerald-500/30">
                <p className="text-emerald-400 text-sm mb-1">Year 5 Revenue</p>
                <p className="text-2xl font-bold">{formatCurrency(pnlData[4].revenue)}</p>
                <p className="text-xs text-gray-400 mt-1">+120x from Year 1</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl p-6 border border-blue-500/30">
                <p className="text-blue-400 text-sm mb-1">Year 5 EBITDA</p>
                <p className="text-2xl font-bold">{formatCurrency(pnlData[4].ebitda)}</p>
                <p className="text-xs text-gray-400 mt-1">{pnlData[4].ebitdaMargin}% margin</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl p-6 border border-purple-500/30">
                <p className="text-purple-400 text-sm mb-1">Year 5 Users</p>
                <p className="text-2xl font-bold">{formatNumber(pnlData[4].users)}</p>
                <p className="text-xs text-gray-400 mt-1">+100x from Year 1</p>
              </div>
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl p-6 border border-[#c9a227]/30">
                <p className="text-[#c9a227] text-sm mb-1">Year 5 GMV</p>
                <p className="text-2xl font-bold">{formatCurrency(pnlData[4].gmv)}</p>
                <p className="text-xs text-gray-400 mt-1">+120x from Year 1</p>
              </div>
            </div>

            {/* P&L Table */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 overflow-hidden">
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <LineChart className="w-5 h-5 text-[#c9a227]" />
                  5-Year P&L Projections ({scenarioData[scenario].label})
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-800/50">
                    <tr>
                      <th className="text-left p-4 text-gray-400 font-medium">Metric</th>
                      {pnlData.map((year) => (
                        <th key={year.year} className="text-right p-4 text-gray-400 font-medium">{year.year}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-800">
                      <td className="p-4 text-gray-300">Users (MAU)</td>
                      {pnlData.map((year) => (
                        <td key={year.year} className="p-4 text-right text-white">{formatNumber(year.users)}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-gray-800">
                      <td className="p-4 text-gray-300">Merchants</td>
                      {pnlData.map((year) => (
                        <td key={year.year} className="p-4 text-right text-white">{formatNumber(year.merchants)}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-gray-800 bg-gray-800/30">
                      <td className="p-4 text-gray-300 font-medium">GMV</td>
                      {pnlData.map((year) => (
                        <td key={year.year} className="p-4 text-right text-white font-medium">{formatCurrency(year.gmv)}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-gray-800">
                      <td className="p-4 text-emerald-400 font-semibold">Revenue</td>
                      {pnlData.map((year) => (
                        <td key={year.year} className="p-4 text-right text-emerald-400 font-semibold">{formatCurrency(year.revenue)}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-gray-800">
                      <td className="p-4 text-gray-300">COGS</td>
                      {pnlData.map((year) => (
                        <td key={year.year} className="p-4 text-right text-red-400">({formatCurrency(year.cogs)})</td>
                      ))}
                    </tr>
                    <tr className="border-t border-gray-800 bg-gray-800/30">
                      <td className="p-4 text-blue-400 font-semibold">Gross Profit</td>
                      {pnlData.map((year) => (
                        <td key={year.year} className="p-4 text-right text-blue-400 font-semibold">{formatCurrency(year.grossProfit)}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-gray-800">
                      <td className="p-4 text-gray-300">Gross Margin</td>
                      {pnlData.map((year) => (
                        <td key={year.year} className="p-4 text-right text-white">{year.grossMargin}%</td>
                      ))}
                    </tr>
                    <tr className="border-t border-gray-800">
                      <td className="p-4 text-gray-300">Operating Expenses</td>
                      {pnlData.map((year) => (
                        <td key={year.year} className="p-4 text-right text-red-400">({formatCurrency(year.opex)})</td>
                      ))}
                    </tr>
                    <tr className="border-t border-gray-800 bg-[#c9a227]/10">
                      <td className="p-4 text-[#c9a227] font-bold">EBITDA</td>
                      {pnlData.map((year) => (
                        <td key={year.year} className={`p-4 text-right font-bold ${year.ebitda >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {year.ebitda >= 0 ? formatCurrency(year.ebitda) : `(${formatCurrency(Math.abs(year.ebitda))})`}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-t border-gray-800">
                      <td className="p-4 text-gray-300">EBITDA Margin</td>
                      {pnlData.map((year) => (
                        <td key={year.year} className={`p-4 text-right ${year.ebitdaMargin >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {year.ebitdaMargin}%
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Assumptions - Aggressive Domination Strategy */}
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-blue-400" />
                <h4 className="text-lg font-semibold">Key Assumptions - Domination Targets</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-[#c9a227] font-medium mb-2">Aggressive Growth</p>
                  <ul className="space-y-1 text-gray-400">
                    <li>• 5x user growth Y1→Y2 (100K→500K)</li>
                    <li>• 3x user growth Y2→Y3 (500K→1.5M)</li>
                    <li>• 2x user growth Y3→Y4 (1.5M→3M)</li>
                    <li>• 1.67x user growth Y4→Y5 (3M→5M)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-[#c9a227] font-medium mb-2">Revenue Model</p>
                  <ul className="space-y-1 text-gray-400">
                    <li>• 8% blended take rate on GMV</li>
                    <li>• AED 100/user/month GMV avg</li>
                    <li>• AED 60K/merchant/month GMV</li>
                    <li>• 70/15/10/5 revenue mix</li>
                  </ul>
                </div>
                <div>
                  <p className="text-[#c9a227] font-medium mb-2">Margin Expansion</p>
                  <ul className="space-y-1 text-gray-400">
                    <li>• Gross margin: 60%→85%</li>
                    <li>• Strong operating leverage</li>
                    <li>• EBITDA positive by Year 1</li>
                    <li>• 60% EBITDA margin by Year 5</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Revenue Model Tab */}
        {activeTab === 'revenue' && (
          <div className="space-y-8">
            {/* Revenue Mix */}
            <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2d4a] rounded-2xl p-8 border border-[#c9a227]/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-[#c9a227]" />
                Revenue Mix
              </h3>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {revenueStreams.map((stream) => (
                  <div key={stream.name} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full bg-${stream.color}-500`}></div>
                    <span className="text-sm text-gray-300">{stream.name}: {stream.percentage}%</span>
                  </div>
                ))}
              </div>
              <div className="h-8 rounded-full overflow-hidden flex">
                <div className="bg-emerald-500" style={{ width: '70%' }}></div>
                <div className="bg-blue-500" style={{ width: '15%' }}></div>
                <div className="bg-purple-500" style={{ width: '10%' }}></div>
                <div className="bg-orange-500" style={{ width: '5%' }}></div>
              </div>
            </div>

            {/* Revenue Streams Detail */}
            <div className="grid md:grid-cols-2 gap-6">
              {revenueStreams.map((stream) => (
                <div key={stream.name} className={`bg-${stream.color}-500/10 rounded-xl p-6 border border-${stream.color}-500/30`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className={`text-lg font-bold text-${stream.color}-400`}>{stream.name}</h4>
                    <span className={`px-3 py-1 rounded-full bg-${stream.color}-500/20 text-${stream.color}-400 text-sm font-medium`}>
                      {stream.percentage}%
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{stream.description}</p>
                  <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
                    <p className="text-xs text-gray-500 mb-1">Model</p>
                    <p className="text-white font-medium">{stream.model}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-xs text-gray-500">Year 1</p>
                      <p className="text-white font-semibold">{formatCurrency(stream.year1)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Year 3</p>
                      <p className="text-white font-semibold">{formatCurrency(stream.year3)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Year 5</p>
                      <p className="text-white font-semibold">{formatCurrency(stream.year5)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Commission Structure */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Percent className="w-5 h-5 text-[#c9a227]" />
                Merchant Commission Structure
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-800/50">
                    <tr>
                      <th className="text-left p-4 text-gray-400">Industry</th>
                      <th className="text-center p-4 text-gray-400">Commission Rate</th>
                      <th className="text-center p-4 text-gray-400">User Cashback</th>
                      <th className="text-center p-4 text-gray-400">Nuqta Take</th>
                      <th className="text-right p-4 text-gray-400">Typical GMV/Month</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { industry: 'Cafes & Restaurants', commission: '10-15%', cashback: '5-8%', take: '5-7%', gmv: 'AED 80K' },
                      { industry: 'Salons & Spas', commission: '12-18%', cashback: '6-10%', take: '6-8%', gmv: 'AED 60K' },
                      { industry: 'Retail & Fashion', commission: '8-12%', cashback: '4-6%', take: '4-6%', gmv: 'AED 100K' },
                      { industry: 'Supermarkets', commission: '3-5%', cashback: '1-3%', take: '2%', gmv: 'AED 500K' },
                      { industry: 'Electronics', commission: '4-6%', cashback: '2-3%', take: '2-3%', gmv: 'AED 200K' },
                      { industry: 'Gold & Jewelry', commission: '2-4%', cashback: '1-2%', take: '1-2%', gmv: 'AED 300K' },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-t border-gray-800">
                        <td className="p-4 text-white font-medium">{row.industry}</td>
                        <td className="p-4 text-center text-[#c9a227]">{row.commission}</td>
                        <td className="p-4 text-center text-green-400">{row.cashback}</td>
                        <td className="p-4 text-center text-blue-400">{row.take}</td>
                        <td className="p-4 text-right text-gray-300">{row.gmv}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Cost Structure Tab */}
        {activeTab === 'costs' && (
          <div className="space-y-8">
            {/* COGS Breakdown */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-red-400" />
                Cost of Goods Sold (COGS)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {costStructure.cogs.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-gray-800/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">{item.name}</span>
                        <span className="text-red-400 font-semibold">{item.percentage}%</span>
                      </div>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                      <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500/70 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-br from-red-500/10 to-transparent rounded-xl p-6 border border-red-500/20">
                  <h4 className="text-lg font-semibold text-red-400 mb-4">COGS Analysis</h4>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Year 1 COGS</span>
                      <span className="text-white">{formatCurrency(pnlData[0].cogs)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Year 1 COGS as % Revenue</span>
                      <span className="text-white">50%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Year 5 COGS as % Revenue</span>
                      <span className="text-green-400">20%</span>
                    </div>
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-gray-400">
                        <strong className="text-white">Economies of Scale:</strong> COGS as a percentage of revenue decreases from 50% to 20% as we gain leverage on fixed costs and negotiate better rates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* OpEx Breakdown */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-400" />
                Operating Expenses (OpEx)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {costStructure.opex.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-gray-800/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">{item.name}</span>
                        <span className="text-blue-400 font-semibold">{item.percentage}%</span>
                      </div>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                      <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500/70 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl p-6 border border-blue-500/20 mb-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-4">OpEx Analysis</h4>
                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Year 1 OpEx</span>
                        <span className="text-white">{formatCurrency(pnlData[0].opex)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Year 1 OpEx as % Revenue</span>
                        <span className="text-red-400">75%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Year 5 OpEx as % Revenue</span>
                        <span className="text-green-400">30%</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-semibold">Operating Leverage</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      Revenue grows 120x while OpEx grows only 48x from Year 1 to Year 5, demonstrating strong operating leverage and path to profitability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Cost Projection */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                Team Cost Projection
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-800/50">
                    <tr>
                      <th className="text-left p-4 text-gray-400">Department</th>
                      <th className="text-center p-4 text-gray-400">Year 1</th>
                      <th className="text-center p-4 text-gray-400">Year 3</th>
                      <th className="text-center p-4 text-gray-400">Year 5</th>
                      <th className="text-right p-4 text-gray-400">Avg Cost/Person</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { dept: 'Executive (C-Suite)', y1: 5, y3: 10, y5: 15, cost: 'AED 60K' },
                      { dept: 'Engineering', y1: 15, y3: 50, y5: 120, cost: 'AED 40K' },
                      { dept: 'Product & Design', y1: 6, y3: 20, y5: 45, cost: 'AED 35K' },
                      { dept: 'Growth & Marketing', y1: 10, y3: 35, y5: 80, cost: 'AED 28K' },
                      { dept: 'Merchant Success', y1: 15, y3: 60, y5: 150, cost: 'AED 22K' },
                      { dept: 'Customer Support', y1: 8, y3: 40, y5: 100, cost: 'AED 15K' },
                      { dept: 'Finance & Admin', y1: 4, y3: 15, y5: 40, cost: 'AED 28K' },
                      { dept: 'Data & Analytics', y1: 3, y3: 15, y5: 40, cost: 'AED 35K' },
                      { dept: 'Operations', y1: 4, y3: 25, y5: 60, cost: 'AED 20K' },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-t border-gray-800">
                        <td className="p-4 text-white font-medium">{row.dept}</td>
                        <td className="p-4 text-center text-gray-300">{row.y1}</td>
                        <td className="p-4 text-center text-gray-300">{row.y3}</td>
                        <td className="p-4 text-center text-gray-300">{row.y5}</td>
                        <td className="p-4 text-right text-[#c9a227]">{row.cost}/mo</td>
                      </tr>
                    ))}
                    <tr className="border-t border-gray-800 bg-[#c9a227]/10">
                      <td className="p-4 text-[#c9a227] font-bold">Total Headcount</td>
                      <td className="p-4 text-center text-[#c9a227] font-bold">70</td>
                      <td className="p-4 text-center text-[#c9a227] font-bold">270</td>
                      <td className="p-4 text-center text-[#c9a227] font-bold">650</td>
                      <td className="p-4 text-right text-[#c9a227] font-bold">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Scenarios Tab */}
        {activeTab === 'scenarios' && (
          <div className="space-y-8">
            {/* Scenario Comparison - Aligned with Domination Targets */}
            <div className="grid md:grid-cols-3 gap-6">
              {(['conservative', 'base', 'optimistic'] as const).map((s) => {
                const data = scenarioData[s];
                const year5 = {
                  users: Math.round(5000000 * data.multiplier),      // 5M base target
                  revenue: Math.round(480000000 * data.multiplier),   // AED 480M base
                  ebitda: Math.round(288000000 * data.multiplier),    // AED 288M base (60% margin)
                };
                return (
                  <div
                    key={s}
                    className={`rounded-xl p-6 border ${
                      s === 'conservative' ? 'bg-yellow-500/10 border-yellow-500/30' :
                      s === 'base' ? 'bg-blue-500/10 border-blue-500/30' :
                      'bg-green-500/10 border-green-500/30'
                    } ${scenario === s ? 'ring-2 ring-white/30' : ''}`}
                  >
                    <h4 className={`text-xl font-bold mb-4 ${
                      s === 'conservative' ? 'text-yellow-400' :
                      s === 'base' ? 'text-blue-400' :
                      'text-green-400'
                    }`}>
                      {data.label}
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-400 text-sm">Year 5 Users</p>
                        <p className="text-2xl font-bold text-white">{formatNumber(year5.users)}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Year 5 Revenue</p>
                        <p className="text-2xl font-bold text-white">{formatCurrency(year5.revenue)}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Year 5 EBITDA</p>
                        <p className="text-2xl font-bold text-white">{formatCurrency(year5.ebitda)}</p>
                      </div>
                      <button
                        onClick={() => setScenario(s)}
                        className={`w-full py-2 rounded-lg text-sm font-medium transition-all ${
                          scenario === s
                            ? 'bg-white text-[#0a1628]'
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                        }`}
                      >
                        {scenario === s ? 'Selected' : 'View Scenario'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key Drivers */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <h3 className="text-xl font-bold mb-6">Scenario Key Drivers</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-800/50">
                    <tr>
                      <th className="text-left p-4 text-gray-400">Driver</th>
                      <th className="text-center p-4 text-yellow-400">Conservative</th>
                      <th className="text-center p-4 text-blue-400">Base Case</th>
                      <th className="text-center p-4 text-green-400">Optimistic</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { driver: 'User Growth Rate', cons: '2x YoY', base: '3x YoY', opt: '5x YoY' },
                      { driver: 'Merchant Growth Rate', cons: '2x YoY', base: '3x YoY', opt: '4x YoY' },
                      { driver: 'User Retention (D30)', cons: '20%', base: '25%', opt: '30%' },
                      { driver: 'Merchant Churn', cons: '7%/mo', base: '5%/mo', opt: '3%/mo' },
                      { driver: 'Take Rate', cons: '6%', base: '8%', opt: '10%' },
                      { driver: 'CAC', cons: 'AED 40', base: 'AED 30', opt: 'AED 20' },
                      { driver: 'Avg Transaction Value', cons: 'AED 60', base: 'AED 75', opt: 'AED 90' },
                      { driver: 'Monthly GMV/User', cons: 'AED 80', base: 'AED 100', opt: 'AED 120' },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-t border-gray-800">
                        <td className="p-4 text-white font-medium">{row.driver}</td>
                        <td className="p-4 text-center text-yellow-400">{row.cons}</td>
                        <td className="p-4 text-center text-blue-400">{row.base}</td>
                        <td className="p-4 text-center text-green-400">{row.opt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Risks and Mitigations */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <h4 className="text-lg font-bold text-red-400">Key Risks</h4>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowDownRight className="w-4 h-4 text-red-400 mt-0.5" />
                    <span className="text-gray-300">Slower merchant acquisition than projected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowDownRight className="w-4 h-4 text-red-400 mt-0.5" />
                    <span className="text-gray-300">Higher CAC due to competitive market</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowDownRight className="w-4 h-4 text-red-400 mt-0.5" />
                    <span className="text-gray-300">Lower transaction frequency than expected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowDownRight className="w-4 h-4 text-red-400 mt-0.5" />
                    <span className="text-gray-300">Merchant churn higher than 5%/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowDownRight className="w-4 h-4 text-red-400 mt-0.5" />
                    <span className="text-gray-300">Regulatory changes affecting cashback models</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <h4 className="text-lg font-bold text-green-400">Mitigations</h4>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 text-green-400 mt-0.5" />
                    <span className="text-gray-300">Diversified merchant acquisition channels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 text-green-400 mt-0.5" />
                    <span className="text-gray-300">Zero-CAC viral loops reduce acquisition costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 text-green-400 mt-0.5" />
                    <span className="text-gray-300">Gamification and streak mechanics drive engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 text-green-400 mt-0.5" />
                    <span className="text-gray-300">Strong merchant success team ensures retention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 text-green-400 mt-0.5" />
                    <span className="text-gray-300">Flexible business model adaptable to regulations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>
    <GlobalFooter />
    </div>
  );
}
