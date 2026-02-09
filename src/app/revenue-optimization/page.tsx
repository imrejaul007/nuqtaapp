'use client';

import React, { useState } from 'react';
import {
  DollarSign, TrendingUp, Target, Zap, Crown, Gift, ArrowUp,
  ArrowDown, BarChart3, PieChart, Repeat, Users, ShoppingBag,
  CreditCard, Star, Percent, Calculator, Lightbulb, ChevronRight,
  CheckCircle, AlertTriangle, Clock, Award, Sparkles, LineChart
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Revenue Mix Data
const revenueStreams = [
  {
    name: 'Transaction Fees',
    current: 125000,
    target: 180000,
    percentage: 42,
    growth: 18,
    description: '5% of GMV from merchant transactions',
    opportunities: ['Increase premium merchant tier adoption', 'Launch high-value category push'],
    color: 'bg-emerald-500'
  },
  {
    name: 'Nuqta+ Subscriptions',
    current: 78000,
    target: 150000,
    percentage: 26,
    growth: 45,
    description: 'Monthly subscriptions at AED 29/month',
    opportunities: ['Family plan launch', 'Annual subscription discount', 'Premium partner deals'],
    color: 'bg-purple-500'
  },
  {
    name: 'Merchant Packages',
    current: 52000,
    target: 85000,
    percentage: 17,
    growth: 28,
    description: 'Premium, Featured, and Spotlight packages',
    opportunities: ['Bundle discounts', 'Category domination packs', 'Event-based packages'],
    color: 'bg-blue-500'
  },
  {
    name: 'Coin Breakage',
    current: 28000,
    target: 35000,
    percentage: 9,
    growth: 8,
    description: 'Unredeemed coins after 12 months',
    opportunities: ['Natural breakage - maintain healthy redemption culture'],
    color: 'bg-amber-500'
  },
  {
    name: 'Data & Insights',
    current: 15000,
    target: 50000,
    percentage: 5,
    growth: 120,
    description: 'Merchant analytics and consumer insights reports',
    opportunities: ['Launch merchant dashboard pro', 'Industry benchmark reports'],
    color: 'bg-pink-500'
  },
];

// Pricing Tiers
const userPricingTiers = [
  {
    name: 'Free',
    price: 0,
    users: 12450,
    percentage: 80,
    features: ['Earn coins at 100+ merchants', 'Basic rewards catalog', 'Weekly streak bonus'],
    conversionRate: 0,
    ltv: 45
  },
  {
    name: 'Nuqta+',
    price: 29,
    users: 2480,
    percentage: 16,
    features: ['2x coin earning rate', 'Exclusive merchant deals', 'Priority support', 'No coin expiry'],
    conversionRate: 15,
    ltv: 520
  },
  {
    name: 'Nuqta+ Family',
    price: 49,
    users: 620,
    percentage: 4,
    features: ['Up to 5 family members', '3x coin earning rate', 'Family rewards pool', 'VIP events access'],
    conversionRate: 8,
    ltv: 1240
  },
];

const merchantPricingTiers = [
  {
    name: 'Starter',
    price: 0,
    merchants: 340,
    percentage: 68,
    features: ['Basic Nuqta integration', '5% transaction fee', 'Standard visibility'],
    mrr: 0,
    avgGmv: 8500
  },
  {
    name: 'Growth',
    price: 499,
    merchants: 120,
    percentage: 24,
    features: ['3.5% transaction fee', 'Featured in category', 'Analytics dashboard', 'Priority support'],
    mrr: 59880,
    avgGmv: 25000
  },
  {
    name: 'Premium',
    price: 1499,
    merchants: 40,
    percentage: 8,
    features: ['2.5% transaction fee', 'Homepage spotlight', 'Custom campaigns', 'Dedicated manager'],
    mrr: 59960,
    avgGmv: 85000
  },
];

// Upsell Matrix
const upsellOpportunities = [
  {
    segment: 'Free → Nuqta+',
    audience: 8540,
    conversionTarget: 12,
    potentialRevenue: 29784,
    trigger: 'After 5th transaction',
    offer: '50% off first 3 months',
    channels: ['In-app modal', 'Push notification', 'Email'],
    priority: 'HIGH'
  },
  {
    segment: 'Nuqta+ → Family',
    audience: 1420,
    conversionTarget: 8,
    potentialRevenue: 2272,
    trigger: 'Detected family member transactions',
    offer: 'Free month trial',
    channels: ['Personal notification', 'Email'],
    priority: 'MEDIUM'
  },
  {
    segment: 'Starter → Growth Merchant',
    audience: 280,
    conversionTarget: 15,
    potentialRevenue: 20965,
    trigger: 'GMV exceeds AED 15K/month',
    offer: 'First month free + ROI guarantee',
    channels: ['Sales call', 'WhatsApp', 'In-app'],
    priority: 'HIGH'
  },
  {
    segment: 'Growth → Premium Merchant',
    audience: 85,
    conversionTarget: 10,
    potentialRevenue: 12740,
    trigger: 'GMV exceeds AED 50K/month',
    offer: 'Homepage feature trial',
    channels: ['Account manager', 'Demo call'],
    priority: 'MEDIUM'
  },
];

// Pricing Experiments
const pricingExperiments = [
  {
    id: 'PE-001',
    name: 'Nuqta+ Annual Discount',
    hypothesis: 'Offering 25% discount on annual subscription increases LTV',
    status: 'running',
    startDate: '2024-05-15',
    variants: [
      { name: 'Control', price: 'AED 29/mo', conversion: 12.4 },
      { name: 'Annual 20% off', price: 'AED 279/yr', conversion: 18.2 },
      { name: 'Annual 25% off', price: 'AED 261/yr', conversion: 21.8 },
    ],
    winner: 'Annual 25% off',
    impact: '+76% LTV per converted user',
    sampleSize: 4500
  },
  {
    id: 'PE-002',
    name: 'Merchant Tier Restructure',
    hypothesis: 'Adding mid-tier at AED 299 captures more merchants',
    status: 'planned',
    startDate: '2024-06-01',
    variants: [
      { name: 'Control', price: 'Current 3 tiers', conversion: null },
      { name: 'New Basic', price: 'AED 299/mo tier', conversion: null },
    ],
    winner: null,
    impact: 'Expected +35% merchant upgrades',
    sampleSize: 200
  },
  {
    id: 'PE-003',
    name: 'Dynamic Transaction Fee',
    hypothesis: 'Category-based fees optimize revenue without losing merchants',
    status: 'completed',
    startDate: '2024-03-01',
    variants: [
      { name: 'Control', price: '5% flat', conversion: null },
      { name: 'Dynamic', price: '3-7% by category', conversion: null },
    ],
    winner: 'Dynamic',
    impact: '+12% revenue, 0% merchant churn',
    sampleSize: 150
  },
];

// Revenue Calculators State
const revenueScenarios = [
  { name: 'Conservative', userGrowth: 15, subscriptionConversion: 18, merchantUpgrade: 20, totalRevenue: 385000 },
  { name: 'Moderate', userGrowth: 25, subscriptionConversion: 22, merchantUpgrade: 30, totalRevenue: 520000 },
  { name: 'Aggressive', userGrowth: 40, subscriptionConversion: 28, merchantUpgrade: 45, totalRevenue: 780000 },
];

export default function RevenueOptimizationPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'pricing' | 'upsell' | 'experiments' | 'calculator'>('overview');
  const [selectedScenario, setSelectedScenario] = useState(1);

  const totalCurrentRevenue = revenueStreams.reduce((sum, s) => sum + s.current, 0);
  const totalTargetRevenue = revenueStreams.reduce((sum, s) => sum + s.target, 0);

  const tabs = [
    { id: 'overview', label: 'Revenue Mix', icon: PieChart },
    { id: 'pricing', label: 'Pricing Tiers', icon: CreditCard },
    { id: 'upsell', label: 'Upsell Matrix', icon: TrendingUp },
    { id: 'experiments', label: 'Price Experiments', icon: Lightbulb },
    { id: 'calculator', label: 'Revenue Calculator', icon: Calculator },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <DollarSign size={32} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-black">Revenue Optimization Lab</h1>
              <p className="text-emerald-200 mt-1">Pricing experiments, upsell automation & revenue mix optimization</p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-emerald-200 text-sm">Monthly Revenue</div>
              <div className="text-2xl sm:text-3xl font-bold">AED {(totalCurrentRevenue / 1000).toFixed(0)}K</div>
              <div className="text-emerald-300 text-sm flex items-center gap-1 mt-1">
                <ArrowUp size={14} /> +24% vs last month
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-emerald-200 text-sm">Target Revenue</div>
              <div className="text-2xl sm:text-3xl font-bold">AED {(totalTargetRevenue / 1000).toFixed(0)}K</div>
              <div className="text-amber-300 text-sm flex items-center gap-1 mt-1">
                <Target size={14} /> {Math.round((totalCurrentRevenue / totalTargetRevenue) * 100)}% achieved
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-emerald-200 text-sm">ARPU</div>
              <div className="text-2xl sm:text-3xl font-bold">AED 19.20</div>
              <div className="text-emerald-300 text-sm flex items-center gap-1 mt-1">
                <ArrowUp size={14} /> +8% this quarter
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-emerald-200 text-sm">Revenue/Employee</div>
              <div className="text-2xl sm:text-3xl font-bold">AED 24.8K</div>
              <div className="text-emerald-300 text-sm flex items-center gap-1 mt-1">
                <TrendingUp size={14} /> Healthy efficiency
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Revenue Mix Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Revenue Streams */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <PieChart className="text-emerald-600" size={24} />
                Revenue Streams Breakdown
              </h2>

              <div className="space-y-6">
                {revenueStreams.map((stream) => (
                  <div key={stream.name} className="border border-gray-100 rounded-xl p-4">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      {/* Stream Info */}
                      <div className="lg:w-48">
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded-full ${stream.color}`} />
                          <span className="font-bold text-gray-900">{stream.name}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{stream.description}</p>
                      </div>

                      {/* Progress */}
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">AED {stream.current.toLocaleString()}</span>
                          <span className="text-gray-400">Target: AED {stream.target.toLocaleString()}</span>
                        </div>
                        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${stream.color} rounded-full transition-all`}
                            style={{ width: `${Math.min((stream.current / stream.target) * 100, 100)}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-xs mt-1">
                          <span className="text-gray-500">{stream.percentage}% of total</span>
                          <span className={`font-medium ${stream.growth > 20 ? 'text-emerald-600' : 'text-blue-600'}`}>
                            +{stream.growth}% growth
                          </span>
                        </div>
                      </div>

                      {/* Opportunities */}
                      <div className="lg:w-64">
                        <div className="text-xs text-gray-500 mb-1">Growth Opportunities:</div>
                        <div className="flex flex-wrap gap-1">
                          {stream.opportunities.slice(0, 2).map((opp, i) => (
                            <span key={i} className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                              {opp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Revenue Distribution Visual */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-700 mb-4">Revenue Distribution</h3>
                <div className="flex h-12 rounded-xl overflow-hidden">
                  {revenueStreams.map((stream) => (
                    <div
                      key={stream.name}
                      className={`${stream.color} flex items-center justify-center text-white text-xs font-medium transition-all hover:opacity-90`}
                      style={{ width: `${stream.percentage}%` }}
                      title={`${stream.name}: ${stream.percentage}%`}
                    >
                      {stream.percentage > 10 && `${stream.percentage}%`}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  {revenueStreams.map((stream) => (
                    <div key={stream.name} className="flex items-center gap-2 text-sm">
                      <div className={`w-3 h-3 rounded-full ${stream.color}`} />
                      <span className="text-gray-600">{stream.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Revenue Optimization Levers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-6 text-white">
                <Zap size={32} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Quick Wins</h3>
                <ul className="space-y-2 text-sm text-emerald-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    Push annual subscription (AED 50K/mo potential)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    Merchant upgrade campaign (AED 30K/mo)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    Launch data insights tier (AED 20K/mo)
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-6 text-white">
                <Target size={32} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Medium-Term</h3>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li className="flex items-center gap-2">
                    <Clock size={16} />
                    Nuqta+ Family rollout (AED 80K/mo)
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock size={16} />
                    Premium merchant tier expansion
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock size={16} />
                    White-label partnerships
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
                <Sparkles size={32} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Future Bets</h3>
                <ul className="space-y-2 text-sm text-purple-100">
                  <li className="flex items-center gap-2">
                    <Star size={16} />
                    Nuqta Pay (embedded finance)
                  </li>
                  <li className="flex items-center gap-2">
                    <Star size={16} />
                    B2B corporate programs
                  </li>
                  <li className="flex items-center gap-2">
                    <Star size={16} />
                    Cross-border expansion
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Tiers Tab */}
        {activeTab === 'pricing' && (
          <div className="space-y-8">
            {/* User Pricing */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Users className="text-emerald-600" size={24} />
                User Subscription Tiers
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {userPricingTiers.map((tier, index) => (
                  <div
                    key={tier.name}
                    className={`rounded-xl border-2 p-6 ${
                      index === 1 ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
                    }`}
                  >
                    {index === 1 && (
                      <div className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                        MOST POPULAR
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                    <div className="mt-2">
                      <span className="text-4xl font-black text-gray-900">
                        {tier.price === 0 ? 'Free' : `AED ${tier.price}`}
                      </span>
                      {tier.price > 0 && <span className="text-gray-500">/month</span>}
                    </div>

                    <div className="mt-4 py-4 border-t border-b border-gray-200">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Users</span>
                        <span className="font-bold text-gray-900">{tier.users.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span className="text-gray-600">% of base</span>
                        <span className="font-bold text-gray-900">{tier.percentage}%</span>
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span className="text-gray-600">Avg LTV</span>
                        <span className="font-bold text-emerald-600">AED {tier.ltv}</span>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle size={16} className="text-emerald-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Merchant Pricing */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <ShoppingBag className="text-emerald-600" size={24} />
                Merchant Subscription Tiers
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {merchantPricingTiers.map((tier, index) => (
                  <div
                    key={tier.name}
                    className={`rounded-xl border-2 p-6 ${
                      index === 2 ? 'border-purple-500 bg-purple-50' : 'border-gray-200'
                    }`}
                  >
                    {index === 2 && (
                      <div className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                        HIGHEST VALUE
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                    <div className="mt-2">
                      <span className="text-4xl font-black text-gray-900">
                        {tier.price === 0 ? 'Free' : `AED ${tier.price}`}
                      </span>
                      {tier.price > 0 && <span className="text-gray-500">/month</span>}
                    </div>

                    <div className="mt-4 py-4 border-t border-b border-gray-200">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Merchants</span>
                        <span className="font-bold text-gray-900">{tier.merchants}</span>
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span className="text-gray-600">MRR from tier</span>
                        <span className="font-bold text-emerald-600">AED {tier.mrr.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span className="text-gray-600">Avg GMV</span>
                        <span className="font-bold text-gray-900">AED {tier.avgGmv.toLocaleString()}</span>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle size={16} className="text-purple-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Psychology */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Lightbulb size={24} />
                Pricing Psychology Tactics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { tactic: 'Anchoring', desc: 'Show Nuqta+ Family first to make Nuqta+ seem affordable', impact: '+18% conversion' },
                  { tactic: 'Decoy Effect', desc: 'Growth merchant tier makes Premium look better value', impact: '+25% Premium' },
                  { tactic: 'Loss Aversion', desc: '"You\'re missing AED 120 in rewards" messaging', impact: '+32% upgrades' },
                  { tactic: 'Social Proof', desc: '"2,480 users upgraded this month" banner', impact: '+15% FOMO' },
                ].map((item) => (
                  <div key={item.tactic} className="bg-white/20 rounded-xl p-4">
                    <h3 className="font-bold mb-2">{item.tactic}</h3>
                    <p className="text-amber-100 text-sm mb-3">{item.desc}</p>
                    <div className="text-white font-bold">{item.impact}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Upsell Matrix Tab */}
        {activeTab === 'upsell' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="text-emerald-600" size={24} />
                Upsell & Cross-Sell Opportunities
              </h2>

              <div className="space-y-6">
                {upsellOpportunities.map((opp) => (
                  <div key={opp.segment} className={`border-2 rounded-xl p-6 ${
                    opp.priority === 'HIGH' ? 'border-emerald-300 bg-emerald-50' : 'border-gray-200'
                  }`}>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      {/* Segment Info */}
                      <div className="lg:w-48">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                            opp.priority === 'HIGH' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                          }`}>
                            {opp.priority}
                          </span>
                        </div>
                        <h3 className="font-bold text-gray-900 mt-2">{opp.segment}</h3>
                        <p className="text-sm text-gray-500">{opp.audience.toLocaleString()} eligible</p>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4 lg:flex-1">
                        <div className="bg-white rounded-lg p-3 border border-gray-200">
                          <div className="text-xs text-gray-500">Conversion Target</div>
                          <div className="text-xl font-bold text-gray-900">{opp.conversionTarget}%</div>
                        </div>
                        <div className="bg-white rounded-lg p-3 border border-gray-200">
                          <div className="text-xs text-gray-500">Monthly Potential</div>
                          <div className="text-xl font-bold text-emerald-600">AED {opp.potentialRevenue.toLocaleString()}</div>
                        </div>
                      </div>

                      {/* Trigger & Offer */}
                      <div className="lg:w-64">
                        <div className="text-xs text-gray-500 mb-1">Trigger:</div>
                        <p className="text-sm text-gray-700 mb-2">{opp.trigger}</p>
                        <div className="text-xs text-gray-500 mb-1">Offer:</div>
                        <p className="text-sm font-medium text-emerald-600">{opp.offer}</p>
                      </div>

                      {/* Channels */}
                      <div className="lg:w-32">
                        <div className="text-xs text-gray-500 mb-1">Channels:</div>
                        <div className="flex flex-wrap gap-1">
                          {opp.channels.map((ch) => (
                            <span key={ch} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                              {ch}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Upsell Potential */}
              <div className="mt-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 text-white">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-emerald-200 text-sm">Total Audience</div>
                    <div className="text-3xl font-bold">{upsellOpportunities.reduce((s, o) => s + o.audience, 0).toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-emerald-200 text-sm">Monthly Potential</div>
                    <div className="text-3xl font-bold">AED {upsellOpportunities.reduce((s, o) => s + o.potentialRevenue, 0).toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-emerald-200 text-sm">Annual Impact</div>
                    <div className="text-3xl font-bold">AED {(upsellOpportunities.reduce((s, o) => s + o.potentialRevenue, 0) * 12 / 1000).toFixed(0)}K</div>
                  </div>
                  <div>
                    <div className="text-emerald-200 text-sm">Revenue Boost</div>
                    <div className="text-3xl font-bold">+22%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upsell Automation */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Repeat className="text-emerald-600" size={24} />
                Automated Upsell Sequences
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: 'Free → Nuqta+ Journey',
                    steps: [
                      'Day 1: Welcome + first transaction reward',
                      'Day 7: "You earned X coins" summary',
                      'Day 14: "Double your coins with Nuqta+"',
                      'Day 21: 50% off trial offer',
                      'Day 30: Last chance reminder'
                    ],
                    conversion: 15,
                    status: 'active'
                  },
                  {
                    name: 'Merchant Upgrade Path',
                    steps: [
                      'Month 1: GMV tracking starts',
                      'Month 2: "You hit AED 15K!" milestone',
                      'Month 3: ROI calculator shared',
                      'Month 4: Free trial of Growth tier',
                      'Month 5: Personal outreach call'
                    ],
                    conversion: 22,
                    status: 'active'
                  },
                ].map((seq) => (
                  <div key={seq.name} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-gray-900">{seq.name}</h3>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                        {seq.conversion}% conversion
                      </span>
                    </div>
                    <div className="space-y-3">
                      {seq.steps.map((step, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs font-bold">
                            {i + 1}
                          </div>
                          <span className="text-sm text-gray-600">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Experiments Tab */}
        {activeTab === 'experiments' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Lightbulb className="text-emerald-600" size={24} />
                Pricing Experiments
              </h2>

              <div className="space-y-6">
                {pricingExperiments.map((exp) => (
                  <div key={exp.id} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      {/* Experiment Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-mono text-gray-400">{exp.id}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                            exp.status === 'running' ? 'bg-blue-100 text-blue-700' :
                            exp.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {exp.status.toUpperCase()}
                          </span>
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">{exp.name}</h3>
                        <p className="text-gray-600 mt-1">{exp.hypothesis}</p>
                        <div className="text-sm text-gray-500 mt-2">
                          Started: {exp.startDate} • Sample: {exp.sampleSize.toLocaleString()} users
                        </div>
                      </div>

                      {/* Variants */}
                      <div className="lg:w-80">
                        <div className="text-sm font-medium text-gray-700 mb-2">Variants:</div>
                        <div className="space-y-2">
                          {exp.variants.map((variant) => (
                            <div
                              key={variant.name}
                              className={`p-3 rounded-lg border ${
                                exp.winner === variant.name ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
                              }`}
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-900">{variant.name}</span>
                                {exp.winner === variant.name && (
                                  <Award size={16} className="text-emerald-500" />
                                )}
                              </div>
                              <div className="text-sm text-gray-600">{variant.price}</div>
                              {variant.conversion && (
                                <div className="text-sm font-bold text-emerald-600">{variant.conversion}% conversion</div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Impact */}
                      <div className="lg:w-40 text-center">
                        <div className="text-sm text-gray-500 mb-1">Impact</div>
                        <div className="font-bold text-lg text-emerald-600">{exp.impact}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experiment Ideas */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-6 text-white">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Sparkles size={24} />
                Next Experiment Ideas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Pay-What-You-Want Week', hypothesis: 'Let users set their own Nuqta+ price for a week', potential: 'High PR value + conversion data' },
                  { name: 'Referral-Based Pricing', hypothesis: 'Discount increases with more referrals', potential: '+40% referral rate' },
                  { name: 'Merchant Revenue Share', hypothesis: 'Instead of flat fee, share transaction revenue', potential: 'Align incentives' },
                  { name: 'Category Bundles', hypothesis: 'Discounted rate for multi-category merchants', potential: '+25% merchant LTV' },
                  { name: 'Coin-for-Subscription', hypothesis: 'Pay for Nuqta+ with earned coins', potential: 'Reduce breakage, increase loyalty' },
                  { name: 'Time-Based Surge', hypothesis: 'Higher coin rates during off-peak hours', potential: 'Demand smoothing' },
                ].map((idea) => (
                  <div key={idea.name} className="bg-white/10 rounded-xl p-4">
                    <h3 className="font-bold mb-2">{idea.name}</h3>
                    <p className="text-purple-200 text-sm mb-3">{idea.hypothesis}</p>
                    <div className="text-white text-sm font-medium">{idea.potential}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Calculator Tab */}
        {activeTab === 'calculator' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calculator className="text-emerald-600" size={24} />
                Revenue Scenario Modeling
              </h2>

              {/* Scenario Selector */}
              <div className="flex gap-4 mb-8">
                {revenueScenarios.map((scenario, index) => (
                  <button
                    key={scenario.name}
                    onClick={() => setSelectedScenario(index)}
                    className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                      selectedScenario === index
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-bold text-gray-900">{scenario.name}</div>
                    <div className="text-2xl font-black text-emerald-600 mt-2">
                      AED {(scenario.totalRevenue / 1000).toFixed(0)}K
                    </div>
                    <div className="text-sm text-gray-500">Monthly Revenue</div>
                  </button>
                ))}
              </div>

              {/* Scenario Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Users size={20} />
                    <span className="font-medium">User Growth</span>
                  </div>
                  <div className="text-4xl font-black text-gray-900">
                    +{revenueScenarios[selectedScenario].userGrowth}%
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Monthly new user acquisition rate</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Crown size={20} />
                    <span className="font-medium">Subscription Conversion</span>
                  </div>
                  <div className="text-4xl font-black text-gray-900">
                    {revenueScenarios[selectedScenario].subscriptionConversion}%
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Free to paid conversion rate</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <ShoppingBag size={20} />
                    <span className="font-medium">Merchant Upgrade</span>
                  </div>
                  <div className="text-4xl font-black text-gray-900">
                    {revenueScenarios[selectedScenario].merchantUpgrade}%
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Starter to paid tier conversion</p>
                </div>
              </div>

              {/* Revenue Breakdown */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-700 mb-4">Revenue Breakdown</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Transaction Fees', base: 125000, multiplier: 1 + (revenueScenarios[selectedScenario].userGrowth / 100) },
                    { name: 'Subscriptions', base: 78000, multiplier: 1 + (revenueScenarios[selectedScenario].subscriptionConversion / 50) },
                    { name: 'Merchant Packages', base: 52000, multiplier: 1 + (revenueScenarios[selectedScenario].merchantUpgrade / 100) },
                    { name: 'Other', base: 43000, multiplier: 1.1 },
                  ].map((stream) => (
                    <div key={stream.name} className="flex items-center gap-4">
                      <div className="w-40 text-sm font-medium text-gray-700">{stream.name}</div>
                      <div className="flex-1">
                        <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded-full flex items-center justify-end px-3"
                            style={{ width: `${(stream.base * stream.multiplier) / revenueScenarios[selectedScenario].totalRevenue * 100}%` }}
                          >
                            <span className="text-white text-sm font-bold">
                              AED {Math.round(stream.base * stream.multiplier / 1000)}K
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Annual Projection */}
              <div className="mt-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-4">Annual Revenue Projection</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-emerald-200 text-sm">Monthly</div>
                    <div className="text-3xl font-bold">AED {(revenueScenarios[selectedScenario].totalRevenue / 1000).toFixed(0)}K</div>
                  </div>
                  <div>
                    <div className="text-emerald-200 text-sm">Quarterly</div>
                    <div className="text-3xl font-bold">AED {(revenueScenarios[selectedScenario].totalRevenue * 3 / 1000).toFixed(0)}K</div>
                  </div>
                  <div>
                    <div className="text-emerald-200 text-sm">Annual</div>
                    <div className="text-3xl font-bold">AED {(revenueScenarios[selectedScenario].totalRevenue * 12 / 1000000).toFixed(1)}M</div>
                  </div>
                  <div>
                    <div className="text-emerald-200 text-sm">vs Current</div>
                    <div className="text-3xl font-bold">+{Math.round((revenueScenarios[selectedScenario].totalRevenue / totalCurrentRevenue - 1) * 100)}%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <GlobalFooter />
    </div>
  );
}
