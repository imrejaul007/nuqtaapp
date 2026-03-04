'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import {
  TrendingUp, DollarSign, Users, Store, Calendar, Target, Zap,
  BarChart3, PieChart, ArrowUpRight, ArrowDownRight, Clock, Wallet,
  Coins, Calculator, ChevronRight, ChevronDown, LineChart, Activity,
  CheckCircle, AlertTriangle, Settings, Percent, CreditCard, Building2,
  Banknote, Package, ShoppingCart, RefreshCw, AlertCircle, Gauge,
  ArrowRight, MapPin, Globe, TrendingDown
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ============================================
// TYPES
// ============================================
type TabType = 'dashboard' | 'assumptions' | 'monthly' | 'income' | 'acquisition' | 'scenarios' | 'unit-economics';

interface Assumptions {
  // User Economics
  aov: number;
  ordersPerUser: number;
  activationRate: number;
  userChurn: number;
  // Revenue Streams (per active user/mo)
  commissionRate: number;
  promotedSalesRate: number;
  promotedOrdersPerUser: number;
  businessSubPrice: number;
  affiliatePerUser: number;
  userSubPrice: number;
  b2bBuyingPerMerchant: number;
  // Budget
  phase1Budget: number;
  phase1Months: number;
  phase2Budget: number;
  phase2Months: number;
  // Merchant
  merchantChurn: number;
  cam: number;
  // Acquisition
  blendedCac: number;
  // Growth
  startingCities: number;
  citiesMonth12: number;
  citiesYear2: number;
}

// ============================================
// DEFAULT ASSUMPTIONS (from ReZ 2026 Financial Model)
// ============================================
const defaultAssumptions: Assumptions = {
  aov: 650,
  ordersPerUser: 5,
  activationRate: 30,
  userChurn: 5,
  commissionRate: 5,
  promotedSalesRate: 5,
  promotedOrdersPerUser: 2,
  businessSubPrice: 1500,
  affiliatePerUser: 10,
  userSubPrice: 49,
  b2bBuyingPerMerchant: 500,
  phase1Budget: 5000000,
  phase1Months: 6,
  phase2Budget: 3300000,
  phase2Months: 3,
  merchantChurn: 10,
  cam: 1000,
  blendedCac: 76,
  startingCities: 1,
  citiesMonth12: 32,
  citiesYear2: 120,
};

// ============================================
// MONTHLY DATA (from ReZ 2026 PDF — 12 months)
// OpEx = team, marketing, BizDev, office, support (ramps ₹15L→₹32L as cities grow)
// COGS = cashback, payment processing, coin funding (~67-70% of revenue early)
// Sums verified: Revenue ₹10.04Cr, COGS ₹6.73Cr, OpEx ₹2.70Cr, Net ₹0.61Cr
// ============================================
const monthlyBreakdown = [
  { month: 'M1', newUsers: 4000, totalUsers: 4000, activeUsers: 1200, merchants: 50, cities: 1, revenue: 102000, opex: 1500000, cogs: 71000, totalExp: 1571000, netPL: -1469000 },
  { month: 'M2', newUsers: 6500, totalUsers: 10310, activeUsers: 3093, merchants: 100, cities: 2, revenue: 318000, opex: 1600000, cogs: 219000, totalExp: 1819000, netPL: -1501000 },
  { month: 'M3', newUsers: 9800, totalUsers: 19505, activeUsers: 5851, merchants: 180, cities: 3, revenue: 681000, opex: 1800000, cogs: 470000, totalExp: 2270000, netPL: -1589000 },
  { month: 'M4', newUsers: 14200, totalUsers: 32480, activeUsers: 9744, merchants: 300, cities: 5, revenue: 1290000, opex: 2000000, cogs: 877000, totalExp: 2877000, netPL: -1587000 },
  { month: 'M5', newUsers: 19000, totalUsers: 49856, activeUsers: 14957, merchants: 450, cities: 6, revenue: 2180000, opex: 2100000, cogs: 1482000, totalExp: 3582000, netPL: -1402000 },
  { month: 'M6', newUsers: 24500, totalUsers: 71863, activeUsers: 21559, merchants: 650, cities: 8, revenue: 3480000, opex: 2200000, cogs: 2366000, totalExp: 4566000, netPL: -1086000 },
  { month: 'M7', newUsers: 30000, totalUsers: 98270, activeUsers: 29481, merchants: 900, cities: 11, revenue: 5120000, opex: 2300000, cogs: 3430000, totalExp: 5730000, netPL: -610000 },
  { month: 'M8', newUsers: 35500, totalUsers: 128357, activeUsers: 38507, merchants: 1200, cities: 15, revenue: 7340000, opex: 2400000, cogs: 4918000, totalExp: 7318000, netPL: 22000 },
  { month: 'M9', newUsers: 40000, totalUsers: 161939, activeUsers: 48582, merchants: 1550, cities: 19, revenue: 10200000, opex: 2500000, cogs: 6834000, totalExp: 9334000, netPL: 866000 },
  { month: 'M10', newUsers: 45000, totalUsers: 198842, activeUsers: 59653, merchants: 1950, cities: 23, revenue: 15200000, opex: 2600000, cogs: 10032000, totalExp: 12632000, netPL: 2568000 },
  { month: 'M11', newUsers: 50000, totalUsers: 238900, activeUsers: 71670, merchants: 2400, cities: 27, revenue: 21600000, opex: 2800000, cogs: 14256000, totalExp: 17056000, netPL: 4544000 },
  { month: 'M12', newUsers: 56700, totalUsers: 268550, activeUsers: 80565, merchants: 3000, cities: 32, revenue: 32889000, opex: 3200000, cogs: 22345000, totalExp: 25545000, netPL: 7344000 },
];

// ============================================
// INCOME STATEMENT (3-year — corrected with COGS/OpEx split)
// ============================================
const incomeStatementData = [
  {
    year: 'Year 1',
    revenue: 100400000,
    cogs: 67300000,         // 67% — cashback 40%, payment processing 12%, coin funding 15%
    grossProfit: 33100000,
    grossMargin: 33,
    opex: 27000000,         // Team, marketing budget, tech ops (scales with city expansion)
    totalExpenses: 94300000,
    netProfit: 6100000,
    margin: 6.07,
    valuation: 23600000,
    users: 268550,
    merchants: 3000,
    cities: 32,
    arpu: 5814,
    downloads: 268550,
    mau: 80565,
    blendedCac: 76,
  },
  {
    year: 'Year 2',
    revenue: 1534000000,
    cogs: 844000000,        // 55% — cashback reduces to 30%, processing scales, breakage starts
    grossProfit: 690000000,
    grossMargin: 45,
    opex: 1419000000,       // Massive expansion: 120 cities, 500+ hires, metro marketing blitz
    totalExpenses: 2263000000,
    netProfit: -729000000,
    margin: -47.55,
    valuation: 180400000,
    users: 1500000,
    merchants: 12000,
    cities: 120,
    arpu: 12780,
    downloads: 1500000,
    mau: 450000,
    blendedCac: 150,
  },
  {
    year: 'Year 3',
    revenue: 6018000000,
    cogs: 2709000000,       // 45% — coin breakage 20%, lower cashback 25%, payment rates improve
    grossProfit: 3309000000,
    grossMargin: 55,
    opex: 1234000000,       // Ops efficient: cities mature, CAC improves with brand
    totalExpenses: 3943000000,
    netProfit: 2075000000,
    margin: 34.5,
    valuation: 701300000,
    users: 5000000,
    merchants: 40000,
    cities: 300,
    arpu: 15045,
    downloads: 5000000,
    mau: 1500000,
    blendedCac: 250,
  },
];

// ============================================
// COGS BREAKDOWN (Variable costs that scale with revenue/GMV)
// ============================================
const cogsBreakdown = [
  { name: 'Cashback Rewards', pctY1: 40, pctY3: 25, color: '#f59e0b', desc: 'ReZ Coins earned by users — funded from merchant commission. Drops as coin breakage increases.' },
  { name: 'Payment Processing', pctY1: 12, pctY3: 8, color: '#3b82f6', desc: 'UPI processing fees via Razorpay/Cashfree. Rates improve with volume.' },
  { name: 'Coin Funding & Promos', pctY1: 15, pctY3: 5, color: '#a855f7', desc: 'Promo coin minting for campaigns, branded coins. Reduces as organic engagement grows.' },
  { name: 'Platform/Infra Costs', pctY1: 0, pctY3: 7, color: '#06b6d4', desc: 'Cloud, CDN, APIs — near zero early, scales with millions of users.' },
];

// ============================================
// OpEx BREAKDOWN (Fixed/semi-fixed operating costs)
// ============================================
const expenseCategories = [
  { name: 'Marketing & Ads', pct: 36, color: '#a855f7', desc: 'Paid ads (Meta/Google), influencer campaigns, referral rewards' },
  { name: 'Technology & Infra', pct: 20, color: '#3b82f6', desc: 'AWS/cloud, payment processing, app stores, security' },
  { name: 'BizDev & Merchant Acq', pct: 19, color: '#22c55e', desc: 'Sales team, merchant onboarding, QR hardware, partnerships' },
  { name: 'Team & Salaries', pct: 8, color: '#f97316', desc: 'CXO salaries, engineering team, support staff' },
  { name: 'Customer Support', pct: 8, color: '#06b6d4', desc: 'Support team, tools, escalation management' },
  { name: 'Rent & Office', pct: 8, color: '#ec4899', desc: 'Bangalore HQ, co-working for satellite offices' },
  { name: 'Buffer', pct: 1, color: '#64748b', desc: 'Contingency and unexpected costs' },
];

// ============================================
// CAC ESCALATION CURVE (realistic at-scale projections)
// ============================================
const cacCurve = [
  { period: 'M1-M6', cac: 76, channels: 'Campus, WhatsApp, ASO, merchant referrals', note: 'Cheapest organic channels available' },
  { period: 'M7-M12', cac: 95, channels: 'Adding Meta/Google paid, influencers', note: 'Organic channels start saturating' },
  { period: 'Year 2', cac: 150, channels: 'Mostly paid at scale, brand campaigns', note: 'Cheap channels fully saturated, 120 cities' },
  { period: 'Year 3', cac: 250, channels: 'National brand, TV/OOH, heavy digital', note: 'Offset by higher LTV from more revenue streams' },
];

// ============================================
// CUSTOMER ACQUISITION CHANNELS
// ============================================
const acquisitionChannels = [
  { channel: 'Paid Ads (Meta)', budget: 600000, cac: 300, users: 2000, color: 'bg-blue-500' },
  { channel: 'Paid Ads (Google)', budget: 500000, cac: 300, users: 1667, color: 'bg-red-500' },
  { channel: 'Campus Ambassadors', budget: 300000, cac: 67, users: 4478, color: 'bg-purple-500' },
  { channel: 'Campus Events', budget: 200000, cac: 100, users: 2000, color: 'bg-indigo-500' },
  { channel: 'Merchant-Led Referrals', budget: 250000, cac: 50, users: 5000, color: 'bg-emerald-500' },
  { channel: 'User Referrals', budget: 400000, cac: 100, users: 4000, color: 'bg-green-500' },
  { channel: 'Influencer Marketing', budget: 350000, cac: 100, users: 3500, color: 'bg-pink-500' },
  { channel: 'Corporate Tie-ups', budget: 200000, cac: 200, users: 1000, color: 'bg-orange-500' },
  { channel: 'SEO / Content', budget: 150000, cac: 50, users: 3000, color: 'bg-cyan-500' },
  { channel: 'App Store Optimization', budget: 100000, cac: 40, users: 2500, color: 'bg-teal-500' },
  { channel: 'Community Events', budget: 150000, cac: 75, users: 2000, color: 'bg-amber-500' },
  { channel: 'WhatsApp Marketing', budget: 100000, cac: 25, users: 4000, color: 'bg-lime-500' },
];

// ============================================
// CALCULATION FUNCTIONS
// ============================================
function calculateMetrics(a: Assumptions) {
  const gmvPerUser = a.aov * a.ordersPerUser;
  const commissionRevenue = gmvPerUser * (a.commissionRate / 100);
  const promotedRevenue = a.aov * a.promotedOrdersPerUser * (a.promotedSalesRate / 100);
  const affiliateRevenue = a.affiliatePerUser;

  const arpu = commissionRevenue + promotedRevenue + affiliateRevenue;
  const retentionMonths = Math.ceil(100 / a.userChurn);
  const ltv = arpu * retentionMonths;
  const ltvCac = ltv / a.blendedCac;
  const cacPayback = a.blendedCac / arpu;

  const monthlyBudgetP1 = a.phase1Budget / a.phase1Months;
  const monthlyBudgetP2 = a.phase2Budget / a.phase2Months;

  const takeRate = a.commissionRate + (a.promotedSalesRate * a.promotedOrdersPerUser / a.ordersPerUser);

  return {
    gmvPerUser,
    commissionRevenue,
    promotedRevenue,
    affiliateRevenue,
    arpu,
    retentionMonths,
    ltv,
    ltvCac,
    cacPayback,
    monthlyBudgetP1,
    monthlyBudgetP2,
    takeRate,
  };
}

function generateProjectedMonthly(a: Assumptions) {
  const { arpu, gmvPerUser } = calculateMetrics(a);
  let users = 0;
  let merchants = a.startingCities * 50;
  const cityGrowthRate = Math.pow(a.citiesMonth12 / a.startingCities, 1 / 12);

  return Array.from({ length: 12 }, (_, idx) => {
    const month = idx + 1;
    const monthlyBudget = month <= a.phase1Months ? a.phase1Budget / a.phase1Months : a.phase2Budget / a.phase2Months;
    const newUsers = Math.floor(monthlyBudget * 0.36 / a.blendedCac) + Math.floor(month * 1500);
    const churnedUsers = Math.floor(users * (a.userChurn / 100));
    users = users + newUsers - churnedUsers;

    const newMerchants = Math.floor(monthlyBudget * 0.19 / a.cam) + Math.floor(month * 20);
    const churnedMerchants = Math.floor(merchants * (a.merchantChurn / 100));
    merchants = merchants + newMerchants - churnedMerchants;

    const activeUsers = Math.floor(users * (a.activationRate / 100));
    const cities = Math.round(a.startingCities * Math.pow(cityGrowthRate, month));
    const gmv = activeUsers * gmvPerUser;
    const revenue = activeUsers * arpu;

    return { month: `M${month}`, users, activeUsers, merchants, cities, gmv, revenue, expenses: monthlyBudget };
  });
}

// ============================================
// FORMATTING HELPERS
// ============================================
function formatINR(num: number): string {
  if (Math.abs(num) >= 10000000) return `₹${(num / 10000000).toFixed(1)} Cr`;
  if (Math.abs(num) >= 100000) return `₹${(num / 100000).toFixed(1)} L`;
  if (Math.abs(num) >= 1000) return `₹${(num / 1000).toFixed(0)}K`;
  return `₹${num.toLocaleString('en-IN')}`;
}

function formatUSD(num: number): string {
  if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `$${(num / 1000).toFixed(0)}K`;
  return `$${num}`;
}

function formatNum(num: number): string {
  if (num >= 10000000) return `${(num / 10000000).toFixed(1)} Cr`;
  if (num >= 100000) return `${(num / 100000).toFixed(1)}L`;
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
  return num.toLocaleString('en-IN');
}

// ============================================
// KPI CARD COMPONENT
// ============================================
function KPICard({ label, value, subtext, status, icon }: {
  label: string;
  value: string;
  subtext: string;
  status: 'success' | 'warning' | 'danger' | 'neutral';
  icon?: React.ReactNode;
}) {
  const colors = {
    success: 'border-green-500/30 bg-green-500/5',
    warning: 'border-yellow-500/30 bg-yellow-500/5',
    danger: 'border-red-500/30 bg-red-500/5',
    neutral: 'border-white/10 bg-white/5',
  };
  const textColors = {
    success: 'text-green-400',
    warning: 'text-yellow-400',
    danger: 'text-red-400',
    neutral: 'text-orange-400',
  };

  return (
    <div className={`rounded-xl p-4 border ${colors[status]}`}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-slate-400 text-xs">{label}</span>
        {icon}
      </div>
      <p className={`text-2xl font-bold ${textColors[status]}`}>{value}</p>
      <p className="text-[10px] text-slate-500 mt-1">{subtext}</p>
    </div>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function RezFinancialsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [assumptions, setAssumptions] = useState<Assumptions>(defaultAssumptions);
  const [scenario, setScenario] = useState<'conservative' | 'base' | 'optimistic'>('base');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    userEconomics: true,
    revenueStreams: true,
    budget: true,
    merchant: true,
    growth: true,
  });

  const metrics = calculateMetrics(assumptions);
  const scenarioMult = scenario === 'conservative' ? 0.7 : scenario === 'optimistic' ? 1.4 : 1.0;

  const updateAssumption = useCallback((key: keyof Assumptions, value: number) => {
    setAssumptions(prev => ({ ...prev, [key]: value }));
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const tabs = [
    { id: 'dashboard' as TabType, label: 'Dashboard', icon: BarChart3 },
    { id: 'assumptions' as TabType, label: 'Assumptions', icon: Settings },
    { id: 'monthly' as TabType, label: 'Monthly', icon: Calendar },
    { id: 'income' as TabType, label: 'P&L', icon: DollarSign },
    { id: 'unit-economics' as TabType, label: 'Unit Economics', icon: Calculator },
    { id: 'acquisition' as TabType, label: 'Acquisition', icon: Target },
    { id: 'scenarios' as TabType, label: 'Scenarios', icon: RefreshCw },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] via-orange-900/20 to-[#0a1628] border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
              <LineChart size={24} className="text-white sm:w-8 sm:h-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">ReZ Financial Model</h1>
              <p className="text-slate-400 text-sm sm:text-base">3-Year Projections • Interactive Assumptions • INR Currency</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/rez" className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30 hover:bg-orange-500/30 transition-colors flex items-center gap-1">
              <ArrowRight size={14} className="rotate-180" /> Pitch Deck
            </Link>
            <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30 flex items-center gap-1">
              <Zap size={14} /> Interactive Model
            </div>
            <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
              Source: ReZ 2026 Financial Sheet
            </div>
          </div>

          {/* Scenario Selector */}
          <div className="flex items-center gap-4 mt-6">
            <span className="text-slate-400 text-sm">Scenario:</span>
            <div className="flex gap-2">
              {(['conservative', 'base', 'optimistic'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setScenario(s)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    scenario === s
                      ? s === 'conservative' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' :
                        s === 'base' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/50' :
                        'bg-green-500/20 text-green-400 border border-green-500/50'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {s === 'conservative' ? 'Conservative (0.7x)' : s === 'base' ? 'Base Case (1.0x)' : 'Optimistic (1.4x)'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-white/10 sticky top-0 bg-[#0a1628]/95 backdrop-blur-xl z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 sm:gap-2 py-3 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-4 py-2 rounded-lg transition-all flex items-center gap-2 text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-orange-500 text-white font-bold'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        {/* ═══════ DASHBOARD TAB ═══════ */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Alert Banners */}
            <div className="space-y-3">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
                <p className="text-orange-400 font-bold flex items-center gap-2">
                  <Target size={18} /> ReZ — India&apos;s Closed-Loop Cashback Ecosystem
                </p>
                <p className="text-slate-300 text-sm mt-1">
                  $500K SAFE at $5M cap • Year 1: ₹10 Cr revenue • Year 3: ₹600 Cr, $701M valuation
                </p>
              </div>
            </div>

            {/* Top-Level KPIs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KPICard
                label="Year 1 Revenue"
                value={formatINR(Math.round(100400000 * scenarioMult))}
                subtext="4.24% net margin"
                status="success"
              />
              <KPICard
                label="Year 3 Revenue"
                value={formatINR(Math.round(6018000000 * scenarioMult))}
                subtext="23.9% net margin"
                status="success"
              />
              <KPICard
                label="Year 3 Valuation"
                value={formatUSD(Math.round(701300000 * scenarioMult))}
                subtext="140x SAFE return"
                status="success"
              />
              <KPICard
                label="LTV:CAC Ratio"
                value={`${metrics.ltvCac.toFixed(1)}x`}
                subtext={`₹${metrics.ltv.toFixed(0)} / ₹${assumptions.blendedCac}`}
                status={metrics.ltvCac >= 8 ? 'success' : 'warning'}
              />
            </div>

            {/* 3-Year Summary Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {incomeStatementData.map((yr) => (
                <div key={yr.year} className={`rounded-xl p-6 border ${yr.netProfit >= 0 ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-red-500/30 bg-red-500/5'}`}>
                  <h3 className="text-lg font-bold text-white mb-4">{yr.year}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-sm">Revenue</span>
                      <span className="text-emerald-400 font-bold">{formatINR(Math.round(yr.revenue * scenarioMult))}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-sm">Expenses</span>
                      <span className="text-red-400 font-bold">{formatINR(Math.round(yr.totalExpenses * scenarioMult))}</span>
                    </div>
                    <div className="border-t border-white/10 pt-2 flex justify-between">
                      <span className="text-slate-400 text-sm">Net Profit</span>
                      <span className={`font-bold ${yr.netProfit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {formatINR(Math.round(yr.netProfit * scenarioMult))}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-sm">Margin</span>
                      <span className={`font-bold ${yr.margin >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {yr.margin.toFixed(1)}%
                      </span>
                    </div>
                    <div className="border-t border-white/10 pt-2 flex justify-between">
                      <span className="text-slate-400 text-sm">Valuation</span>
                      <span className="text-amber-400 font-bold">{formatUSD(Math.round(yr.valuation * scenarioMult))}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-3">
                      <div className="text-center bg-white/5 rounded-lg p-2">
                        <p className="text-xs text-slate-400">Users</p>
                        <p className="text-sm font-bold text-white">{formatNum(yr.users)}</p>
                      </div>
                      <div className="text-center bg-white/5 rounded-lg p-2">
                        <p className="text-xs text-slate-400">Merchants</p>
                        <p className="text-sm font-bold text-white">{formatNum(yr.merchants)}</p>
                      </div>
                      <div className="text-center bg-white/5 rounded-lg p-2">
                        <p className="text-xs text-slate-400">Cities</p>
                        <p className="text-sm font-bold text-white">{yr.cities}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Revenue Streams */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <PieChart className="text-orange-400" size={22} />
                Revenue Streams (6 Active)
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Commission on Sales', rate: `${assumptions.commissionRate}%`, value: `₹${(assumptions.aov * assumptions.ordersPerUser * assumptions.commissionRate / 100).toFixed(0)}/user/mo`, icon: ShoppingCart, active: true },
                  { name: 'Promoted Sales', rate: `${assumptions.promotedSalesRate}%`, value: `₹${(assumptions.aov * assumptions.promotedOrdersPerUser * assumptions.promotedSalesRate / 100).toFixed(0)}/user/mo`, icon: Zap, active: true },
                  { name: 'Business Subscription', rate: `₹${assumptions.businessSubPrice}/mo`, value: 'Per merchant', icon: Building2, active: true },
                  { name: 'Affiliate Revenue', rate: `₹${assumptions.affiliatePerUser}/user`, value: 'Per active user/mo', icon: Package, active: true },
                  { name: 'User Sub (ReZ+)', rate: `₹${assumptions.userSubPrice}/mo`, value: 'Premium membership', icon: Users, active: true },
                  { name: 'B2B Buying Commission', rate: `₹${assumptions.b2bBuyingPerMerchant}`, value: 'Per merchant/mo', icon: CreditCard, active: true },
                ].map((s) => (
                  <div key={s.name} className={`rounded-xl p-4 border ${s.active ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-white/10 bg-white/5 opacity-60'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <s.icon size={18} className="text-orange-400" />
                      <span className="text-white font-semibold text-sm">{s.name}</span>
                    </div>
                    <p className="text-xl font-bold text-orange-400">{s.rate}</p>
                    <p className="text-xs text-slate-400 mt-1">{s.value}</p>
                    {s.active && <span className="text-[10px] px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full mt-2 inline-block">Active</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Expense Breakdown */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <PieChart className="text-red-400" size={22} />
                Expense Allocation
              </h3>
              <div className="space-y-3">
                {expenseCategories.map((cat) => (
                  <div key={cat.name} className="flex items-center gap-4">
                    <div className="w-24 sm:w-32 text-sm text-slate-300 shrink-0">{cat.name}</div>
                    <div className="flex-1 bg-white/10 rounded-full h-6 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${cat.pct}%`, backgroundColor: cat.color }}
                      />
                    </div>
                    <span className="text-white font-bold text-sm w-10 text-right">{cat.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Gauge className="text-orange-400" size={22} />
                Key Performance Indicators
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <KPICard label="ARPU (Monthly)" value={`₹${metrics.arpu.toFixed(0)}`} subtext="Revenue per MAU" status="neutral" />
                <KPICard label="LTV" value={`₹${metrics.ltv.toFixed(0)}`} subtext={`${metrics.retentionMonths} months retention`} status="neutral" />
                <KPICard label="CAC (Blended)" value={`₹${assumptions.blendedCac}`} subtext="24 acquisition channels" status="neutral" />
                <KPICard label="CAC Payback" value={`${metrics.cacPayback.toFixed(1)} mo`} subtext="Time to recover CAC" status={metrics.cacPayback <= 6 ? 'success' : 'warning'} />
                <KPICard label="AOV" value={`₹${assumptions.aov}`} subtext="Average order value" status="neutral" />
                <KPICard label="Take Rate" value={`${metrics.takeRate.toFixed(1)}%`} subtext="Blended commission" status="neutral" />
                <KPICard label="Activation Rate" value={`${assumptions.activationRate}%`} subtext="Downloads → MAU" status="neutral" />
                <KPICard label="User Churn" value={`${assumptions.userChurn}%/mo`} subtext="Monthly user churn" status={assumptions.userChurn <= 5 ? 'success' : 'warning'} />
              </div>
            </div>
          </div>
        )}

        {/* ═══════ ASSUMPTIONS TAB ═══════ */}
        {activeTab === 'assumptions' && (
          <div className="space-y-6">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 mb-6">
              <p className="text-orange-400 font-bold flex items-center gap-2">
                <Settings size={18} /> Editable Assumptions
              </p>
              <p className="text-slate-300 text-sm mt-1">
                Adjust any parameter below — all calculations update in real-time. Source: ReZ 2026 Financial Sheet.
              </p>
            </div>

            {/* User Economics */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <button onClick={() => toggleSection('userEconomics')} className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
                <span className="text-white font-bold flex items-center gap-2"><Users size={18} className="text-orange-400" /> User Economics</span>
                {expandedSections.userEconomics ? <ChevronDown size={18} className="text-slate-400" /> : <ChevronRight size={18} className="text-slate-400" />}
              </button>
              {expandedSections.userEconomics && (
                <div className="p-4 pt-0 grid sm:grid-cols-2 gap-4">
                  {[
                    { key: 'aov' as const, label: 'Average Order Value (₹)', min: 100, max: 2000, step: 50 },
                    { key: 'ordersPerUser' as const, label: 'Orders per User/Month', min: 1, max: 20, step: 1 },
                    { key: 'activationRate' as const, label: 'Activation Rate (%)', min: 10, max: 80, step: 5 },
                    { key: 'userChurn' as const, label: 'Monthly User Churn (%)', min: 1, max: 20, step: 1 },
                    { key: 'blendedCac' as const, label: 'Blended CAC (₹)', min: 20, max: 500, step: 10 },
                  ].map((param) => (
                    <div key={param.key} className="bg-white/5 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm text-slate-400">{param.label}</label>
                        <span className="text-orange-400 font-bold">{assumptions[param.key]}</span>
                      </div>
                      <input
                        type="range"
                        min={param.min}
                        max={param.max}
                        step={param.step}
                        value={assumptions[param.key]}
                        onChange={(e) => updateAssumption(param.key, Number(e.target.value))}
                        className="w-full accent-orange-500"
                      />
                      <div className="flex justify-between text-[10px] text-slate-500">
                        <span>{param.min}</span>
                        <span>{param.max}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Revenue Streams */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <button onClick={() => toggleSection('revenueStreams')} className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
                <span className="text-white font-bold flex items-center gap-2"><DollarSign size={18} className="text-emerald-400" /> Revenue Streams</span>
                {expandedSections.revenueStreams ? <ChevronDown size={18} className="text-slate-400" /> : <ChevronRight size={18} className="text-slate-400" />}
              </button>
              {expandedSections.revenueStreams && (
                <div className="p-4 pt-0 grid sm:grid-cols-2 gap-4">
                  {[
                    { key: 'commissionRate' as const, label: 'Commission Rate (%)', min: 1, max: 15, step: 0.5 },
                    { key: 'promotedSalesRate' as const, label: 'Promoted Sales Rate (%)', min: 1, max: 15, step: 0.5 },
                    { key: 'promotedOrdersPerUser' as const, label: 'Promoted Orders/User/Mo', min: 0, max: 10, step: 1 },
                    { key: 'businessSubPrice' as const, label: 'Business Sub Price (₹/mo)', min: 500, max: 5000, step: 100 },
                    { key: 'affiliatePerUser' as const, label: 'Affiliate Revenue (₹/user)', min: 0, max: 50, step: 5 },
                    { key: 'userSubPrice' as const, label: 'User Sub Price (₹/mo)', min: 0, max: 199, step: 10 },
                    { key: 'b2bBuyingPerMerchant' as const, label: 'B2B Buying (₹/merchant)', min: 0, max: 2000, step: 50 },
                  ].map((param) => (
                    <div key={param.key} className="bg-white/5 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm text-slate-400">{param.label}</label>
                        <span className="text-emerald-400 font-bold">{assumptions[param.key]}</span>
                      </div>
                      <input
                        type="range"
                        min={param.min}
                        max={param.max}
                        step={param.step}
                        value={assumptions[param.key]}
                        onChange={(e) => updateAssumption(param.key, Number(e.target.value))}
                        className="w-full accent-emerald-500"
                      />
                      <div className="flex justify-between text-[10px] text-slate-500">
                        <span>{param.min}</span>
                        <span>{param.max}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Budget */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <button onClick={() => toggleSection('budget')} className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
                <span className="text-white font-bold flex items-center gap-2"><Banknote size={18} className="text-blue-400" /> Budget & Funding</span>
                {expandedSections.budget ? <ChevronDown size={18} className="text-slate-400" /> : <ChevronRight size={18} className="text-slate-400" />}
              </button>
              {expandedSections.budget && (
                <div className="p-4 pt-0 grid sm:grid-cols-2 gap-4">
                  {[
                    { key: 'phase1Budget' as const, label: 'Phase 1 Budget (₹)', min: 1000000, max: 15000000, step: 500000 },
                    { key: 'phase1Months' as const, label: 'Phase 1 Duration (months)', min: 3, max: 12, step: 1 },
                    { key: 'phase2Budget' as const, label: 'Phase 2 Budget (₹)', min: 1000000, max: 10000000, step: 500000 },
                    { key: 'phase2Months' as const, label: 'Phase 2 Duration (months)', min: 2, max: 6, step: 1 },
                  ].map((param) => (
                    <div key={param.key} className="bg-white/5 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm text-slate-400">{param.label}</label>
                        <span className="text-blue-400 font-bold">{param.key.includes('Budget') ? formatINR(assumptions[param.key]) : assumptions[param.key]}</span>
                      </div>
                      <input
                        type="range"
                        min={param.min}
                        max={param.max}
                        step={param.step}
                        value={assumptions[param.key]}
                        onChange={(e) => updateAssumption(param.key, Number(e.target.value))}
                        className="w-full accent-blue-500"
                      />
                      <div className="flex justify-between text-[10px] text-slate-500">
                        <span>{param.key.includes('Budget') ? formatINR(param.min) : param.min}</span>
                        <span>{param.key.includes('Budget') ? formatINR(param.max) : param.max}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Merchant */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <button onClick={() => toggleSection('merchant')} className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
                <span className="text-white font-bold flex items-center gap-2"><Store size={18} className="text-purple-400" /> Merchant Economics</span>
                {expandedSections.merchant ? <ChevronDown size={18} className="text-slate-400" /> : <ChevronRight size={18} className="text-slate-400" />}
              </button>
              {expandedSections.merchant && (
                <div className="p-4 pt-0 grid sm:grid-cols-2 gap-4">
                  {[
                    { key: 'cam' as const, label: 'Cost to Acquire Merchant (₹)', min: 200, max: 5000, step: 100 },
                    { key: 'merchantChurn' as const, label: 'Monthly Merchant Churn (%)', min: 1, max: 20, step: 1 },
                  ].map((param) => (
                    <div key={param.key} className="bg-white/5 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm text-slate-400">{param.label}</label>
                        <span className="text-purple-400 font-bold">{param.key === 'cam' ? `₹${assumptions[param.key]}` : `${assumptions[param.key]}%`}</span>
                      </div>
                      <input
                        type="range"
                        min={param.min}
                        max={param.max}
                        step={param.step}
                        value={assumptions[param.key]}
                        onChange={(e) => updateAssumption(param.key, Number(e.target.value))}
                        className="w-full accent-purple-500"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Live Calculated Metrics */}
            <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-500/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Calculator size={18} className="text-orange-400" /> Live Calculated Metrics
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-xs text-slate-400">ARPU/mo</p>
                  <p className="text-xl font-bold text-orange-400">₹{metrics.arpu.toFixed(0)}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-400">LTV</p>
                  <p className="text-xl font-bold text-emerald-400">₹{metrics.ltv.toFixed(0)}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-400">LTV:CAC</p>
                  <p className="text-xl font-bold text-blue-400">{metrics.ltvCac.toFixed(1)}x</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-400">CAC Payback</p>
                  <p className="text-xl font-bold text-purple-400">{metrics.cacPayback.toFixed(1)} mo</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════ MONTHLY TAB ═══════ */}
        {activeTab === 'monthly' && (
          <div className="space-y-6">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
              <p className="text-blue-400 font-bold flex items-center gap-2">
                <Calendar size={18} /> 12-Month Detailed Breakdown
              </p>
              <p className="text-slate-300 text-sm mt-1">
                Revenue, COGS (cashback + processing), and OpEx (team + marketing) shown separately. Net P&L = Revenue - COGS - OpEx.
              </p>
            </div>

            {/* Monthly Table */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      {['Month', 'New Users', 'Total', 'MAU', 'Cities', 'Revenue', 'COGS', 'OpEx', 'Total Exp', 'Net P&L'].map(h => (
                        <th key={h} className="text-left px-2 py-3 text-orange-400 font-semibold whitespace-nowrap text-xs">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyBreakdown.map((m) => (
                      <tr key={m.month} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                        <td className="px-2 py-2.5 text-white font-bold">{m.month}</td>
                        <td className="px-2 py-2.5 text-slate-300 text-xs">{formatNum(Math.round(m.newUsers * scenarioMult))}</td>
                        <td className="px-2 py-2.5 text-blue-400 font-bold text-xs">{formatNum(Math.round(m.totalUsers * scenarioMult))}</td>
                        <td className="px-2 py-2.5 text-slate-300 text-xs">{formatNum(Math.round(m.activeUsers * scenarioMult))}</td>
                        <td className="px-2 py-2.5 text-cyan-400 text-xs">{m.cities}</td>
                        <td className="px-2 py-2.5 text-emerald-400 font-bold text-xs">{formatINR(Math.round(m.revenue * scenarioMult))}</td>
                        <td className="px-2 py-2.5 text-amber-400 text-xs">{formatINR(Math.round(m.cogs * scenarioMult))}</td>
                        <td className="px-2 py-2.5 text-slate-400 text-xs">{formatINR(Math.round(m.opex * scenarioMult))}</td>
                        <td className="px-2 py-2.5 text-red-400 text-xs">{formatINR(Math.round(m.totalExp * scenarioMult))}</td>
                        <td className={`px-2 py-2.5 font-bold text-xs ${m.netPL >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                          {formatINR(Math.round(m.netPL * scenarioMult))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-white/5 border-t border-white/10">
                    <tr>
                      <td className="px-2 py-3 text-white font-bold">Year 1</td>
                      <td className="px-2 py-3 text-slate-300 font-bold text-xs">{formatNum(Math.round(monthlyBreakdown.reduce((s, m) => s + m.newUsers, 0) * scenarioMult))}</td>
                      <td className="px-2 py-3 text-blue-400 font-bold text-xs">{formatNum(Math.round(monthlyBreakdown[11].totalUsers * scenarioMult))}</td>
                      <td className="px-2 py-3 text-slate-300 font-bold text-xs">{formatNum(Math.round(monthlyBreakdown[11].activeUsers * scenarioMult))}</td>
                      <td className="px-2 py-3 text-cyan-400 font-bold text-xs">{monthlyBreakdown[11].cities}</td>
                      <td className="px-2 py-3 text-emerald-400 font-bold text-xs">{formatINR(Math.round(monthlyBreakdown.reduce((s, m) => s + m.revenue, 0) * scenarioMult))}</td>
                      <td className="px-2 py-3 text-amber-400 font-bold text-xs">{formatINR(Math.round(monthlyBreakdown.reduce((s, m) => s + m.cogs, 0) * scenarioMult))}</td>
                      <td className="px-2 py-3 text-slate-400 font-bold text-xs">{formatINR(Math.round(monthlyBreakdown.reduce((s, m) => s + m.opex, 0) * scenarioMult))}</td>
                      <td className="px-2 py-3 text-red-400 font-bold text-xs">{formatINR(Math.round(monthlyBreakdown.reduce((s, m) => s + m.totalExp, 0) * scenarioMult))}</td>
                      <td className="px-2 py-3 text-emerald-400 font-bold text-xs">{formatINR(Math.round(monthlyBreakdown.reduce((s, m) => s + m.netPL, 0) * scenarioMult))}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* COGS Explanation */}
            <div className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/30">
              <h4 className="text-sm font-bold text-amber-400 mb-3">COGS Breakdown (Variable Costs)</h4>
              <p className="text-xs text-slate-400 mb-3">These costs scale with revenue/GMV. Early months have high COGS % due to cashback subsidies; it drops as coin breakage increases and payment rates improve.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {cogsBreakdown.map(c => (
                  <div key={c.name} className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                      <span className="text-white text-xs font-bold">{c.name}</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                      <span>Year 1: {c.pctY1}%</span>
                      <span>Year 3: {c.pctY3}%</span>
                    </div>
                    <p className="text-[10px] text-slate-500">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CAC Escalation */}
            <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/30">
              <h4 className="text-sm font-bold text-red-400 mb-3">CAC Escalation Curve (Realistic at Scale)</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-white/10">
                      {['Period', 'Blended CAC', 'Primary Channels', 'Note'].map(h => (
                        <th key={h} className="text-left px-3 py-2 text-red-400 font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cacCurve.map(c => (
                      <tr key={c.period} className="border-t border-white/5">
                        <td className="px-3 py-2 text-white font-bold">{c.period}</td>
                        <td className="px-3 py-2 text-orange-400 font-bold">₹{c.cac}</td>
                        <td className="px-3 py-2 text-slate-300">{c.channels}</td>
                        <td className="px-3 py-2 text-slate-500">{c.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Monthly OpEx Category Breakdown */}
            <div className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/30">
              <h4 className="text-sm font-bold text-purple-400 mb-3">Monthly OpEx Category Breakdown</h4>
              <p className="text-xs text-slate-400 mb-3">Fixed/semi-fixed operating costs split by department. Ramps from ₹15L/mo (M1) to ₹32L/mo (M12) as team and cities grow.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-[10px]">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="text-left px-2 py-2 text-purple-400 font-semibold">Month</th>
                      {expenseCategories.filter(c => c.pct >= 8).map(cat => (
                        <th key={cat.name} className="text-right px-2 py-2 font-semibold whitespace-nowrap" style={{ color: cat.color }}>{cat.name.split(' ')[0]}</th>
                      ))}
                      <th className="text-right px-2 py-2 text-slate-400 font-semibold">Other</th>
                      <th className="text-right px-2 py-2 text-white font-semibold">Total OpEx</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyBreakdown.map((m) => {
                      const otherPct = expenseCategories.filter(c => c.pct < 8).reduce((s, c) => s + c.pct, 0);
                      return (
                        <tr key={m.month} className="border-t border-white/5 hover:bg-white/5">
                          <td className="px-2 py-1.5 text-white font-bold">{m.month}</td>
                          {expenseCategories.filter(c => c.pct >= 8).map(cat => (
                            <td key={cat.name} className="px-2 py-1.5 text-right text-slate-300">{formatINR(Math.round(m.opex * (cat.pct / 100) * scenarioMult))}</td>
                          ))}
                          <td className="px-2 py-1.5 text-right text-slate-500">{formatINR(Math.round(m.opex * (otherPct / 100) * scenarioMult))}</td>
                          <td className="px-2 py-1.5 text-right text-white font-bold">{formatINR(Math.round(m.opex * scenarioMult))}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot className="bg-white/5 border-t border-white/10">
                    <tr>
                      <td className="px-2 py-2 text-white font-bold">Year 1</td>
                      {expenseCategories.filter(c => c.pct >= 8).map(cat => (
                        <td key={cat.name} className="px-2 py-2 text-right font-bold" style={{ color: cat.color }}>
                          {formatINR(Math.round(monthlyBreakdown.reduce((s, m) => s + m.opex, 0) * (cat.pct / 100) * scenarioMult))}
                        </td>
                      ))}
                      <td className="px-2 py-2 text-right text-slate-500 font-bold">
                        {formatINR(Math.round(monthlyBreakdown.reduce((s, m) => s + m.opex, 0) * (expenseCategories.filter(c => c.pct < 8).reduce((s, c) => s + c.pct, 0) / 100) * scenarioMult))}
                      </td>
                      <td className="px-2 py-2 text-right text-white font-bold">
                        {formatINR(Math.round(monthlyBreakdown.reduce((s, m) => s + m.opex, 0) * scenarioMult))}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Monthly COGS Category Breakdown */}
            <div className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/30">
              <h4 className="text-sm font-bold text-amber-400 mb-3">Monthly COGS Category Breakdown</h4>
              <p className="text-xs text-slate-400 mb-3">Variable costs that scale with revenue. Cashback is the largest component early on; drops as coin breakage increases.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-[10px]">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="text-left px-2 py-2 text-amber-400 font-semibold">Month</th>
                      <th className="text-right px-2 py-2 text-emerald-400 font-semibold">Revenue</th>
                      {cogsBreakdown.map(cat => (
                        <th key={cat.name} className="text-right px-2 py-2 font-semibold whitespace-nowrap" style={{ color: cat.color }}>{cat.name.split(' ')[0]}</th>
                      ))}
                      <th className="text-right px-2 py-2 text-red-400 font-semibold">COGS Total</th>
                      <th className="text-right px-2 py-2 text-slate-400 font-semibold">COGS %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(() => {
                      const cogsTotalPct = cogsBreakdown.reduce((s, c) => s + c.pctY1, 0) || 1;
                      return monthlyBreakdown.map((m) => (
                        <tr key={m.month} className="border-t border-white/5 hover:bg-white/5">
                          <td className="px-2 py-1.5 text-white font-bold">{m.month}</td>
                          <td className="px-2 py-1.5 text-right text-emerald-400">{formatINR(Math.round(m.revenue * scenarioMult))}</td>
                          {cogsBreakdown.map(cat => (
                            <td key={cat.name} className="px-2 py-1.5 text-right text-slate-300">
                              {formatINR(Math.round(m.cogs * (cat.pctY1 / cogsTotalPct) * scenarioMult))}
                            </td>
                          ))}
                          <td className="px-2 py-1.5 text-right text-red-400 font-bold">{formatINR(Math.round(m.cogs * scenarioMult))}</td>
                          <td className="px-2 py-1.5 text-right text-slate-500">{m.revenue > 0 ? `${((m.cogs / m.revenue) * 100).toFixed(0)}%` : '—'}</td>
                        </tr>
                      ));
                    })()}
                  </tbody>
                  <tfoot className="bg-white/5 border-t border-white/10">
                    {(() => {
                      const cogsTotalPct = cogsBreakdown.reduce((s, c) => s + c.pctY1, 0) || 1;
                      const totalRev = monthlyBreakdown.reduce((s, m) => s + m.revenue, 0);
                      const totalCogs = monthlyBreakdown.reduce((s, m) => s + m.cogs, 0);
                      return (
                        <tr>
                          <td className="px-2 py-2 text-white font-bold">Year 1</td>
                          <td className="px-2 py-2 text-right text-emerald-400 font-bold">{formatINR(Math.round(totalRev * scenarioMult))}</td>
                          {cogsBreakdown.map(cat => (
                            <td key={cat.name} className="px-2 py-2 text-right font-bold" style={{ color: cat.color }}>
                              {formatINR(Math.round(totalCogs * (cat.pctY1 / cogsTotalPct) * scenarioMult))}
                            </td>
                          ))}
                          <td className="px-2 py-2 text-right text-red-400 font-bold">{formatINR(Math.round(totalCogs * scenarioMult))}</td>
                          <td className="px-2 py-2 text-right text-slate-400 font-bold">{totalRev > 0 ? `${((totalCogs / totalRev) * 100).toFixed(0)}%` : '—'}</td>
                        </tr>
                      );
                    })()}
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Key Month-over-Month Metrics */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="text-sm font-bold text-white mb-3">User Growth</h4>
                <div className="space-y-2">
                  {[
                    { label: 'M1 Downloads', value: '4,000' },
                    { label: 'M6 Total', value: '71,863' },
                    { label: 'M12 Total', value: '268,550' },
                    { label: 'M12 MAU', value: '80,565' },
                    { label: 'MoM Growth', value: '~40%' },
                  ].map(r => (
                    <div key={r.label} className="flex justify-between">
                      <span className="text-xs text-slate-400">{r.label}</span>
                      <span className="text-xs text-blue-400 font-bold">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="text-sm font-bold text-white mb-3">Revenue Trajectory</h4>
                <div className="space-y-2">
                  {[
                    { label: 'M1 Revenue', value: '₹1.02L' },
                    { label: 'M6 Revenue', value: '₹34.8L' },
                    { label: 'M12 Revenue', value: '₹3.2 Cr' },
                    { label: 'Year 1 Total', value: '₹10.04 Cr' },
                    { label: 'Revenue Growth', value: '910%' },
                  ].map(r => (
                    <div key={r.label} className="flex justify-between">
                      <span className="text-xs text-slate-400">{r.label}</span>
                      <span className="text-xs text-emerald-400 font-bold">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="text-sm font-bold text-white mb-3">City Expansion</h4>
                <div className="space-y-2">
                  {[
                    { label: 'Launch City', value: 'Bangalore' },
                    { label: 'M3 Cities', value: '3' },
                    { label: 'M6 Cities', value: '8' },
                    { label: 'M12 Cities', value: '32' },
                    { label: 'Year 2 Target', value: '120' },
                  ].map(r => (
                    <div key={r.label} className="flex justify-between">
                      <span className="text-xs text-slate-400">{r.label}</span>
                      <span className="text-xs text-cyan-400 font-bold">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════ INCOME STATEMENT TAB ═══════ */}
        {activeTab === 'income' && (
          <div className="space-y-6">
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
              <p className="text-emerald-400 font-bold flex items-center gap-2">
                <DollarSign size={18} /> 3-Year P&L with COGS / OpEx Split
              </p>
              <p className="text-slate-300 text-sm mt-1">
                COGS = cashback + payment processing + coin funding. OpEx = team + marketing + city expansion. Year 2 loss funded by $20-30M Series A.
              </p>
            </div>

            {/* P&L Table */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="text-left px-4 py-3 text-slate-400 font-medium">Metric</th>
                      {incomeStatementData.map(yr => (
                        <th key={yr.year} className="text-right px-4 py-3 text-orange-400 font-medium">{yr.year}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-white/5">
                      <td className="px-4 py-3 text-slate-300">Total Revenue</td>
                      {incomeStatementData.map(yr => (
                        <td key={yr.year} className="px-4 py-3 text-right text-emerald-400 font-bold">{formatINR(Math.round(yr.revenue * scenarioMult))}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-white/5">
                      <td className="px-4 py-3 text-amber-400">(-) COGS (Variable)</td>
                      {incomeStatementData.map(yr => (
                        <td key={yr.year} className="px-4 py-3 text-right text-amber-400">{formatINR(Math.round(yr.cogs * scenarioMult))}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-white/10 bg-emerald-500/5">
                      <td className="px-4 py-3 text-white font-bold">Gross Profit</td>
                      {incomeStatementData.map(yr => (
                        <td key={yr.year} className="px-4 py-3 text-right text-emerald-400 font-bold">{formatINR(Math.round(yr.grossProfit * scenarioMult))} <span className="text-[10px] text-slate-500">({yr.grossMargin}%)</span></td>
                      ))}
                    </tr>
                    <tr className="border-t border-white/5">
                      <td className="px-4 py-3 text-slate-300">(-) OpEx (Fixed/Semi-Fixed)</td>
                      {incomeStatementData.map(yr => (
                        <td key={yr.year} className="px-4 py-3 text-right text-red-400">{formatINR(Math.round(yr.opex * scenarioMult))}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-white/10 bg-white/5">
                      <td className="px-4 py-3 text-white font-bold">Net Profit / (Loss)</td>
                      {incomeStatementData.map(yr => (
                        <td key={yr.year} className={`px-4 py-3 text-right font-bold ${yr.netProfit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                          {formatINR(Math.round(yr.netProfit * scenarioMult))}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-t border-white/5">
                      <td className="px-4 py-3 text-slate-300">Net Margin</td>
                      {incomeStatementData.map(yr => (
                        <td key={yr.year} className={`px-4 py-3 text-right font-bold ${yr.margin >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                          {yr.margin.toFixed(1)}%
                        </td>
                      ))}
                    </tr>
                    <tr className="border-t border-white/5">
                      <td className="px-4 py-3 text-slate-300">Blended CAC</td>
                      {incomeStatementData.map(yr => (
                        <td key={yr.year} className="px-4 py-3 text-right text-orange-400 font-bold">₹{yr.blendedCac}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-white/10 bg-white/5">
                      <td className="px-4 py-3 text-white font-bold">Implied Valuation</td>
                      {incomeStatementData.map(yr => (
                        <td key={yr.year} className="px-4 py-3 text-right text-amber-400 font-bold">{formatUSD(Math.round(yr.valuation * scenarioMult))}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-white/5">
                      <td className="px-4 py-3 text-slate-300">MAU</td>
                      {incomeStatementData.map(yr => (
                        <td key={yr.year} className="px-4 py-3 text-right text-blue-400">{formatNum(Math.round(yr.mau * scenarioMult))}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-white/5">
                      <td className="px-4 py-3 text-slate-300">Merchants</td>
                      {incomeStatementData.map(yr => (
                        <td key={yr.year} className="px-4 py-3 text-right text-purple-400">{formatNum(Math.round(yr.merchants * scenarioMult))}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-white/5">
                      <td className="px-4 py-3 text-slate-300">Cities</td>
                      {incomeStatementData.map(yr => (
                        <td key={yr.year} className="px-4 py-3 text-right text-cyan-400">{yr.cities}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-white/5">
                      <td className="px-4 py-3 text-slate-300">ARPU (Annual)</td>
                      {incomeStatementData.map(yr => (
                        <td key={yr.year} className="px-4 py-3 text-right text-orange-400">₹{yr.arpu.toLocaleString('en-IN')}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Expense Category Breakdown */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Expense Category Analysis</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {expenseCategories.filter(c => c.pct >= 8).map(cat => (
                  <div key={cat.name} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                      <span className="text-white font-semibold text-sm">{cat.name}</span>
                    </div>
                    <p className="text-2xl font-bold" style={{ color: cat.color }}>{cat.pct}%</p>
                    <p className="text-xs text-slate-400 mt-1">{cat.desc}</p>
                    <div className="mt-3 space-y-1">
                      {incomeStatementData.map(yr => (
                        <div key={yr.year} className="flex justify-between text-xs">
                          <span className="text-slate-500">{yr.year}</span>
                          <span className="text-slate-300">{formatINR(Math.round(yr.opex * (cat.pct / 100) * scenarioMult))}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Investor Return */}
            <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-500/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp size={18} className="text-amber-400" /> Investor Return at $5M SAFE Cap
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Entry', value: '$5M cap', sub: '$500K → 10%', mult: '' },
                  { label: 'Year 1', value: formatUSD(Math.round(23600000 * scenarioMult)), sub: `${(23600000 * scenarioMult / 5000000).toFixed(1)}x return`, mult: 'text-emerald-400' },
                  { label: 'Year 2', value: formatUSD(Math.round(180400000 * scenarioMult)), sub: `${(180400000 * scenarioMult / 5000000).toFixed(0)}x return`, mult: 'text-emerald-400' },
                  { label: 'Year 3', value: formatUSD(Math.round(701300000 * scenarioMult)), sub: `${(701300000 * scenarioMult / 5000000).toFixed(0)}x return`, mult: 'text-emerald-400' },
                ].map(r => (
                  <div key={r.label} className="text-center bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-xs text-amber-400 font-bold">{r.label}</p>
                    <p className="text-lg font-black text-white mt-1">{r.value}</p>
                    <p className={`text-[10px] mt-1 ${r.mult || 'text-slate-500'}`}>{r.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════ UNIT ECONOMICS TAB ═══════ */}
        {activeTab === 'unit-economics' && (
          <div className="space-y-8">
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
              <p className="text-green-400 font-bold flex items-center gap-2">
                <Calculator size={18} /> Unit Economics — Live Calculation
              </p>
              <p className="text-slate-300 text-sm mt-1">
                All values computed from your Assumptions tab. Change any input to see real-time impact.
              </p>
            </div>

            {/* User Unit Economics */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Users size={20} className="text-orange-400" /> User Unit Economics
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-orange-400">Transaction Metrics</h4>
                  <div className="space-y-3">
                    {[
                      { label: 'Average Order Value', value: `₹${assumptions.aov}` },
                      { label: 'Orders per User/Month', value: `${assumptions.ordersPerUser}` },
                      { label: 'GMV per User/Month', value: `₹${metrics.gmvPerUser.toLocaleString('en-IN')}` },
                      { label: 'Commission Revenue', value: `₹${metrics.commissionRevenue.toFixed(0)}/user/mo` },
                      { label: 'Promoted Revenue', value: `₹${metrics.promotedRevenue.toFixed(0)}/user/mo` },
                      { label: 'Affiliate Revenue', value: `₹${metrics.affiliateRevenue}/user/mo` },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <span className="text-slate-400">{item.label}</span>
                        <span className="text-white font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-orange-400">LTV Calculation</h4>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">ARPU (Monthly)</span>
                        <span className="text-white">₹{metrics.arpu.toFixed(0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Retention Months</span>
                        <span className="text-white">{metrics.retentionMonths} months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Churn Rate</span>
                        <span className="text-white">{assumptions.userChurn}%/month</span>
                      </div>
                      <div className="border-t border-white/10 pt-3 flex justify-between">
                        <span className="text-orange-400 font-semibold">LTV = ARPU × Retention</span>
                        <span className="text-orange-400 font-bold">₹{metrics.ltv.toFixed(0)}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-4">
                      LTV = Monthly ARPU × (100 / Churn%) = ₹{metrics.arpu.toFixed(0)} × {metrics.retentionMonths} = ₹{metrics.ltv.toFixed(0)}
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg border ${metrics.ltvCac >= 8 ? 'bg-green-500/10 border-green-500/30' : 'bg-yellow-500/10 border-yellow-500/30'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {metrics.ltvCac >= 8 ? <CheckCircle size={18} className="text-green-400" /> : <AlertTriangle size={18} className="text-yellow-400" />}
                      <span className={`font-semibold ${metrics.ltvCac >= 8 ? 'text-green-400' : 'text-yellow-400'}`}>
                        {metrics.ltvCac >= 8 ? 'Excellent Economics' : 'Monitor Closely'}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300">
                      LTV:CAC of {metrics.ltvCac.toFixed(1)}x {metrics.ltvCac >= 8 ? 'far exceeds the 3x minimum. Strong capital efficiency.' : 'needs improvement toward 8x+ target.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <KPICard label="LTV:CAC Ratio" value={`${metrics.ltvCac.toFixed(1)}x`} subtext="Target: >8x" status={metrics.ltvCac >= 8 ? 'success' : 'warning'} />
              <KPICard label="CAC Payback" value={`${metrics.cacPayback.toFixed(1)} mo`} subtext="Time to recover" status={metrics.cacPayback <= 6 ? 'success' : 'warning'} />
              <KPICard label="Take Rate" value={`${metrics.takeRate.toFixed(1)}%`} subtext="Blended commission" status="neutral" />
              <KPICard label="GMV/User/Mo" value={`₹${metrics.gmvPerUser.toLocaleString('en-IN')}`} subtext={`AOV × ${assumptions.ordersPerUser} orders`} status="neutral" />
            </div>

            {/* Merchant Unit Economics */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Store size={20} className="text-purple-400" /> Merchant Unit Economics
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  {[
                    { label: 'Cost to Acquire (CAM)', value: `₹${assumptions.cam}` },
                    { label: 'Monthly Subscription', value: `₹${assumptions.businessSubPrice}` },
                    { label: 'B2B Buying Commission', value: `₹${assumptions.b2bBuyingPerMerchant}/mo` },
                    { label: 'Merchant Churn', value: `${assumptions.merchantChurn}%/mo` },
                    { label: 'Retention', value: `${Math.ceil(100 / assumptions.merchantChurn)} months` },
                    { label: 'Merchant LTV', value: `₹${((assumptions.businessSubPrice + assumptions.b2bBuyingPerMerchant) * Math.ceil(100 / assumptions.merchantChurn)).toLocaleString('en-IN')}` },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <span className="text-slate-400">{item.label}</span>
                      <span className="text-white font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/30 text-center">
                    <p className="text-2xl font-bold text-purple-400">{((assumptions.businessSubPrice + assumptions.b2bBuyingPerMerchant) * Math.ceil(100 / assumptions.merchantChurn) / assumptions.cam).toFixed(0)}x</p>
                    <p className="text-xs text-slate-400">LTV:CAM Ratio</p>
                  </div>
                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 text-center">
                    <p className="text-2xl font-bold text-blue-400">{(assumptions.cam / (assumptions.businessSubPrice + assumptions.b2bBuyingPerMerchant)).toFixed(1)} mo</p>
                    <p className="text-xs text-slate-400">CAM Payback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════ ACQUISITION TAB ═══════ */}
        {activeTab === 'acquisition' && (
          <div className="space-y-6">
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
              <p className="text-purple-400 font-bold flex items-center gap-2">
                <Target size={18} /> Customer Acquisition Channels
              </p>
              <p className="text-slate-300 text-sm mt-1">
                12 acquisition channels with blended CAC of ₹{assumptions.blendedCac}. Source: ReZ 2026 Financial Model.
              </p>
            </div>

            {/* Channel Table */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      {['Channel', 'Monthly Budget', 'CAC', 'Users/Month', '% of Total'].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-purple-400 font-semibold whitespace-nowrap text-xs">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {acquisitionChannels.map((ch) => {
                      const totalUsers = acquisitionChannels.reduce((s, c) => s + c.users, 0);
                      return (
                        <tr key={ch.channel} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                          <td className="px-4 py-2.5 text-white font-medium flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${ch.color}`} />
                            {ch.channel}
                          </td>
                          <td className="px-4 py-2.5 text-slate-300">{formatINR(ch.budget)}</td>
                          <td className="px-4 py-2.5 text-orange-400 font-bold">₹{ch.cac}</td>
                          <td className="px-4 py-2.5 text-blue-400">{formatNum(ch.users)}</td>
                          <td className="px-4 py-2.5 text-slate-300">{((ch.users / totalUsers) * 100).toFixed(1)}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot className="bg-white/5 border-t border-white/10">
                    <tr>
                      <td className="px-4 py-3 text-white font-bold">Total</td>
                      <td className="px-4 py-3 text-slate-300 font-bold">{formatINR(acquisitionChannels.reduce((s, c) => s + c.budget, 0))}</td>
                      <td className="px-4 py-3 text-orange-400 font-bold">₹{Math.round(acquisitionChannels.reduce((s, c) => s + c.budget, 0) / acquisitionChannels.reduce((s, c) => s + c.users, 0))} avg</td>
                      <td className="px-4 py-3 text-blue-400 font-bold">{formatNum(acquisitionChannels.reduce((s, c) => s + c.users, 0))}</td>
                      <td className="px-4 py-3 text-slate-300 font-bold">100%</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* CAC Distribution */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/30">
                <h4 className="text-sm font-bold text-emerald-400 mb-3">Cheapest Channels</h4>
                <div className="space-y-2">
                  {acquisitionChannels.filter(c => c.cac <= 75).sort((a, b) => a.cac - b.cac).map(ch => (
                    <div key={ch.channel} className="flex justify-between text-xs">
                      <span className="text-slate-300">{ch.channel}</span>
                      <span className="text-emerald-400 font-bold">₹{ch.cac}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-yellow-500/10 rounded-xl p-5 border border-yellow-500/30">
                <h4 className="text-sm font-bold text-yellow-400 mb-3">Mid-Range Channels</h4>
                <div className="space-y-2">
                  {acquisitionChannels.filter(c => c.cac > 75 && c.cac <= 150).sort((a, b) => a.cac - b.cac).map(ch => (
                    <div key={ch.channel} className="flex justify-between text-xs">
                      <span className="text-slate-300">{ch.channel}</span>
                      <span className="text-yellow-400 font-bold">₹{ch.cac}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/30">
                <h4 className="text-sm font-bold text-red-400 mb-3">Premium Channels</h4>
                <div className="space-y-2">
                  {acquisitionChannels.filter(c => c.cac > 150).sort((a, b) => a.cac - b.cac).map(ch => (
                    <div key={ch.channel} className="flex justify-between text-xs">
                      <span className="text-slate-300">{ch.channel}</span>
                      <span className="text-red-400 font-bold">₹{ch.cac}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════ SCENARIOS TAB ═══════ */}
        {activeTab === 'scenarios' && (
          <div className="space-y-6">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
              <p className="text-blue-400 font-bold flex items-center gap-2">
                <RefreshCw size={18} /> Scenario Analysis
              </p>
              <p className="text-slate-300 text-sm mt-1">
                Three scenarios: Conservative (0.7x), Base (1.0x), Optimistic (1.4x). All numbers from the financial model.
              </p>
            </div>

            {/* 3-Scenario Comparison */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="text-left px-4 py-3 text-slate-400 font-medium">Metric</th>
                      <th className="text-right px-4 py-3 text-yellow-400 font-medium">Conservative (0.7x)</th>
                      <th className="text-right px-4 py-3 text-orange-400 font-medium">Base Case (1.0x)</th>
                      <th className="text-right px-4 py-3 text-green-400 font-medium">Optimistic (1.4x)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: 'Year 1 Revenue', base: 100400000 },
                      { metric: 'Year 2 Revenue', base: 1534000000 },
                      { metric: 'Year 3 Revenue', base: 6018000000 },
                      { metric: 'Year 1 Net Profit', base: 4300000 },
                      { metric: 'Year 2 Net Profit', base: -729000000 },
                      { metric: 'Year 3 Net Profit', base: 1432000000 },
                      { metric: 'Year 1 Users', base: 268550 },
                      { metric: 'Year 2 Users', base: 1500000 },
                      { metric: 'Year 3 Users', base: 5000000 },
                      { metric: 'Year 3 Valuation', base: 701300000 },
                    ].map((row) => (
                      <tr key={row.metric} className="border-t border-white/5">
                        <td className="px-4 py-2.5 text-slate-300">{row.metric}</td>
                        <td className="px-4 py-2.5 text-right text-yellow-400">
                          {row.metric.includes('Users') ? formatNum(Math.round(row.base * 0.7)) :
                           row.metric.includes('Valuation') ? formatUSD(Math.round(row.base * 0.7)) :
                           formatINR(Math.round(row.base * 0.7))}
                        </td>
                        <td className="px-4 py-2.5 text-right text-orange-400 font-bold">
                          {row.metric.includes('Users') ? formatNum(row.base) :
                           row.metric.includes('Valuation') ? formatUSD(row.base) :
                           formatINR(row.base)}
                        </td>
                        <td className="px-4 py-2.5 text-right text-green-400">
                          {row.metric.includes('Users') ? formatNum(Math.round(row.base * 1.4)) :
                           row.metric.includes('Valuation') ? formatUSD(Math.round(row.base * 1.4)) :
                           formatINR(Math.round(row.base * 1.4))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sensitivity Analysis */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Sensitivity: Year 3 Revenue by CAC & AOV</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr>
                      <th className="px-3 py-2 text-slate-400">CAC ↓ / AOV →</th>
                      {[400, 500, 650, 800, 1000].map(aov => (
                        <th key={aov} className="px-3 py-2 text-orange-400">₹{aov}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[40, 60, 76, 100, 150].map(cac => (
                      <tr key={cac} className="border-t border-white/5">
                        <td className="px-3 py-2 text-blue-400 font-bold">₹{cac}</td>
                        {[400, 500, 650, 800, 1000].map(aov => {
                          const factor = (aov / 650) * (76 / cac);
                          const rev = 6018000000 * factor;
                          return (
                            <td key={aov} className={`px-3 py-2 text-right ${cac === 76 && aov === 650 ? 'text-orange-400 font-bold bg-orange-500/10' : 'text-slate-300'}`}>
                              {formatINR(Math.round(rev))}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-slate-500 mt-3">Highlighted cell = base case (CAC ₹76, AOV ₹650). Year 3 revenue scales linearly with AOV and inversely with CAC.</p>
            </div>

            {/* Break-even Analysis */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp size={18} className="text-emerald-400" /> Break-Even Scenarios
                </h3>
                <div className="space-y-3">
                  {[
                    { scenario: 'Conservative', month: 'Month 5', note: 'At 0.7x growth rate' },
                    { scenario: 'Base Case', month: 'Month 4', note: 'Per financial model' },
                    { scenario: 'Optimistic', month: 'Month 3', note: 'At 1.4x growth rate' },
                  ].map(s => (
                    <div key={s.scenario} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <div>
                        <span className="text-white font-medium">{s.scenario}</span>
                        <p className="text-[10px] text-slate-500">{s.note}</p>
                      </div>
                      <span className="text-emerald-400 font-bold">{s.month}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <AlertTriangle size={18} className="text-yellow-400" /> Key Risk Levers
                </h3>
                <div className="space-y-3">
                  {[
                    { risk: 'CAC rises to ₹150+', impact: 'LTV:CAC drops below 5x', severity: 'high' },
                    { risk: 'Churn rises to 10%+', impact: 'LTV halves, payback doubles', severity: 'high' },
                    { risk: 'AOV drops below ₹400', impact: 'Revenue targets delayed 6mo', severity: 'medium' },
                    { risk: 'City expansion delayed', impact: 'Year 2 revenue -40%', severity: 'medium' },
                  ].map(r => (
                    <div key={r.risk} className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                      <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${r.severity === 'high' ? 'bg-red-500' : 'bg-yellow-500'}`} />
                      <div>
                        <p className="text-white text-sm font-medium">{r.risk}</p>
                        <p className="text-[10px] text-slate-500">{r.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Footer */}
      <GlobalFooter />
    </div>
  );
}
