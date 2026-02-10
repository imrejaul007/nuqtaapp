'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Car, DollarSign, Globe, Shield, TrendingUp, Users, Target,
  Rocket, CheckCircle, AlertTriangle, Clock, Building, ArrowRight,
  Star, Zap, BarChart3, Award, Handshake, Store, CreditCard,
  FileText, Calculator, Gift, Crown, Wallet, ChevronRight,
  ChevronDown, ChevronUp, Building2, ShieldCheck, HeartHandshake,
  Coins, Network, MapPin, Smartphone, Banknote, Phone,
  BadgePercent, CircleDollarSign, PieChart, LineChart, ArrowUpRight,
  Timer, UserCheck, Lock, Eye, Search, Plane, Home, ShoppingBag,
  Package, Bike, Bus, Train, Navigation, Fuel, Wrench, Key,
  Calendar, RefreshCw, Layers, Sparkles, Send
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Executive Summary Stats
const keyStats = [
  { label: 'UAE Ride-hail Market', value: '$2B+', suffix: 'annually', color: 'text-green-400' },
  { label: 'Target Year 1', value: '100K', suffix: 'rides', color: 'text-blue-400' },
  { label: 'Avg Ride Value', value: '45', suffix: 'AED', color: 'text-purple-400' },
  { label: 'Coin Reward', value: '5%', suffix: 'cashback', color: 'text-[#c9a227]' },
];

// Services
const services = [
  {
    name: 'Rakab Ride',
    icon: Car,
    description: 'Standard ride-hailing with Nuqta rewards',
    pricing: 'Market competitive',
    eta: '3-5 min',
    features: ['Nuqta coins on every ride', 'Pay with Hawil Card', 'Rate lock for tourists'],
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
  },
  {
    name: 'Rakab Premium',
    icon: Star,
    description: 'Luxury vehicles for business & special occasions',
    pricing: '2x standard',
    eta: '5-8 min',
    features: ['Mercedes, BMW, Lexus', 'Professional drivers', 'Complimentary water'],
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-400',
  },
  {
    name: 'Rakab XL',
    icon: Users,
    description: '6-seater for groups and families',
    pricing: '1.5x standard',
    eta: '5-10 min',
    features: ['Up to 6 passengers', 'Extra luggage space', 'Family-friendly'],
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
  },
  {
    name: 'Rakab Bike',
    icon: Bike,
    description: 'Quick 2-wheeler for short trips',
    pricing: '0.5x standard',
    eta: '2-3 min',
    features: ['Fastest option', 'Beat traffic', 'Helmet provided'],
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-400',
  },
];

// Tourist-Specific Features
const touristFeatures = {
  headline: 'Designed for Tourists',
  description: 'First ride-hailing app with Google rate currency and no foreign transaction fees',
  features: [
    {
      feature: 'Pay with Hawil Card',
      description: 'Use your Hawil Card with Google rate - no 3-5% foreign transaction fee',
      savings: 'Save 5-10 AED per ride vs credit card',
      icon: CreditCard,
    },
    {
      feature: 'Rate Lock',
      description: 'Lock your ride price in home currency - no surprise conversion fees',
      savings: 'Know exact cost in USD/EUR/GBP before ride',
      icon: Lock,
    },
    {
      feature: 'Airport Packages',
      description: 'Fixed-price airport transfers with meet & greet',
      savings: 'DXB → Downtown: 85 AED fixed (vs 100-150 metered)',
      icon: Plane,
    },
    {
      feature: 'Tourist Mode',
      description: 'Drivers trained for tourists - landmarks, tips, photo stops',
      savings: 'Free city orientation included',
      icon: MapPin,
    },
    {
      feature: 'Multi-Language',
      description: 'App and driver support in 15+ languages',
      savings: 'No language barriers',
      icon: Globe,
    },
    {
      feature: 'Earn Coins',
      description: '5% back in Nuqta coins on every ride',
      savings: 'Use coins at 500+ merchants',
      icon: Coins,
    },
  ],
};

// Ecosystem Integration
const ecosystemIntegration = [
  {
    product: 'Nuqta+',
    integration: 'Priority booking & 10% extra coins',
    benefit: 'Members get premium perks',
    icon: Crown,
    color: 'text-[#c9a227]',
  },
  {
    product: 'Hawil Card',
    integration: 'Pay at Google rate - no FX fees',
    benefit: 'Tourists save 3-5% per ride',
    icon: CreditCard,
    color: 'text-blue-400',
  },
  {
    product: 'Qist',
    integration: 'BNPL for monthly ride packages',
    benefit: 'Finance 1,000 AED+ ride credits',
    icon: Wallet,
    color: 'text-violet-400',
  },
  {
    product: 'Wasil',
    integration: 'Same driver delivers your order',
    benefit: 'Ride + delivery in one trip',
    icon: Package,
    color: 'text-orange-400',
  },
  {
    product: 'Sakin',
    integration: 'Free airport transfer for move-in',
    benefit: 'Sakin tenants get welcome ride',
    icon: Home,
    color: 'text-emerald-400',
  },
];

// Pricing Comparison
const pricingComparison = [
  { route: 'DXB Airport → Downtown Dubai', rakab: 75, uber: 95, careem: 90, taxi: 120 },
  { route: 'Dubai Mall → Marina Walk', rakab: 35, uber: 45, careem: 42, taxi: 55 },
  { route: 'JBR → Burj Khalifa', rakab: 25, uber: 32, careem: 30, taxi: 40 },
  { route: 'Business Bay → Palm Jumeirah', rakab: 45, uber: 58, careem: 55, taxi: 70 },
];

// Driver Program
const driverProgram = {
  title: 'Drive with Rakab',
  tagline: 'Earn more, keep more',
  benefits: [
    { benefit: 'Higher Commission', description: '85% of fare (vs 75-80% at competitors)' },
    { benefit: 'Instant Payouts', description: 'Cash out earnings anytime to Nuqta Wallet' },
    { benefit: 'Fuel Rewards', description: 'Nuqta coins for fuel at partner stations' },
    { benefit: 'Maintenance Deals', description: 'Discounts at partner garages' },
    { benefit: 'Insurance', description: 'Comprehensive coverage included' },
    { benefit: 'Flexible Hours', description: 'Drive when you want' },
  ],
  requirements: [
    'UAE driving license (minimum 1 year)',
    'Car less than 5 years old',
    'Clean driving record',
    'RTA permit (we help obtain)',
    'Background check',
  ],
  earnings: {
    avgHourly: '60-100 AED',
    avgDaily: '500-800 AED',
    topDrivers: '15,000+ AED/month',
  },
};

// Subscription Plans
const subscriptionPlans = [
  {
    name: 'Rakab Pass',
    price: 99,
    period: 'month',
    features: [
      '10% off all rides',
      'No surge pricing',
      'Priority pickup',
      'Double coins (10%)',
      'Free cancellations',
    ],
    savings: 'Save 200+ AED/month on 20 rides',
    color: 'border-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    name: 'Nuqta+ Rakab',
    price: 0,
    period: 'included',
    features: [
      'All Rakab Pass benefits',
      'Included with Nuqta+ (99 AED)',
      'Plus Wasil+, Qist 0%, Sakin priority',
      'Triple coins (15%)',
      'VIP driver network',
    ],
    savings: 'Best value - bundled with full ecosystem',
    color: 'border-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    recommended: true,
  },
  {
    name: 'Corporate',
    price: 'Custom',
    period: 'volume',
    features: [
      'Bulk ride credits',
      'Employee ride limits',
      'Centralized billing',
      'Expense reports',
      'Dedicated support',
    ],
    savings: 'Up to 30% off for 100+ rides/month',
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
  },
];

// Airport Packages
const airportPackages = [
  { from: 'DXB T1', to: 'Downtown Dubai', price: 85, savings: 35, time: '25 min' },
  { from: 'DXB T3', to: 'Dubai Marina', price: 95, savings: 40, time: '30 min' },
  { from: 'DXB T1', to: 'Palm Jumeirah', price: 110, savings: 50, time: '35 min' },
  { from: 'AUH Airport', to: 'Abu Dhabi Downtown', price: 65, savings: 25, time: '20 min' },
  { from: 'DXB T1', to: 'Abu Dhabi', price: 250, savings: 100, time: '75 min' },
  { from: 'SHJ Airport', to: 'Sharjah City', price: 45, savings: 20, time: '15 min' },
];

// Future Services
const futureServices = [
  {
    service: 'Rakab Rent',
    description: 'Hourly/daily car rentals',
    icon: Key,
    timeline: 'Q3 2027',
  },
  {
    service: 'Rakab Bus',
    description: 'Shared rides on fixed routes',
    icon: Bus,
    timeline: 'Q4 2027',
  },
  {
    service: 'Rakab Metro',
    description: 'Metro card integration',
    icon: Train,
    timeline: '2028',
  },
  {
    service: 'Rakab EV',
    description: 'Electric vehicle fleet',
    icon: Fuel,
    timeline: '2028',
  },
];

// Unit Economics
const unitEconomics = {
  avgFare: 45,
  platformCommission: 6.75, // 15%
  driverPayout: 38.25, // 85%
  coinReward: 2.25, // 5% back
  netRevenue: 4.50,
  ridesPerUser: 8, // per month for active user
  monthlyRevenuePerUser: 36,
  ltv: 432, // 12 months
  cac: 15,
  ltvCacRatio: 29,
};

// Financial Projections
const financialProjections = [
  { year: 'Year 1', rides: 100000, revenue: 0.45, drivers: 200, users: 15000, cities: 3 },
  { year: 'Year 2', rides: 500000, revenue: 2.25, drivers: 800, users: 60000, cities: 7 },
  { year: 'Year 3', rides: 2000000, revenue: 9, drivers: 2500, users: 200000, cities: 7 },
];

// Competitive Advantages
const competitiveAdvantages = [
  {
    advantage: 'Google Rate Payments',
    description: 'Only ride-hailing app accepting Hawil Card at 0% FX markup',
    vsCompetitors: 'Uber/Careem charge 3-5% on foreign cards',
    icon: CreditCard,
  },
  {
    advantage: '5% Coin Rewards',
    description: 'Highest cashback in market - use at 500+ merchants',
    vsCompetitors: 'Uber: 0% | Careem: 1-2% in closed-loop credits',
    icon: Coins,
  },
  {
    advantage: 'Ecosystem Bundle',
    description: 'Included in Nuqta+ with Wasil, Qist, Sakin benefits',
    vsCompetitors: 'No competitor has multi-product ecosystem',
    icon: Layers,
  },
  {
    advantage: 'Tourist-First Design',
    description: 'Rate lock, multi-language, tourist mode drivers',
    vsCompetitors: 'Others treat tourists same as locals',
    icon: Plane,
  },
  {
    advantage: '85% Driver Commission',
    description: 'Highest payout attracts best drivers',
    vsCompetitors: 'Uber: 75% | Careem: 80%',
    icon: Users,
  },
];

// Risks & Mitigation
const risks = [
  {
    risk: 'Uber/Careem Dominance',
    severity: 'high',
    mitigation: [
      'Focus on tourist niche first',
      'Ecosystem cross-sell advantage',
      'Higher driver commission',
      'Unique Hawil Card integration',
    ],
  },
  {
    risk: 'RTA Regulations',
    severity: 'medium',
    mitigation: [
      'Partner with licensed operators',
      'Full RTA compliance from day 1',
      'Proactive regulator engagement',
    ],
  },
  {
    risk: 'Driver Acquisition',
    severity: 'medium',
    mitigation: [
      '85% commission attracts drivers',
      'Poach from competitors with better terms',
      'Referral bonuses',
    ],
  },
];

// Roadmap
const roadmap = [
  {
    phase: 'Phase 1',
    title: 'Launch',
    timeline: 'Q2 2027',
    milestones: [
      'RTA partnership/license',
      'Launch in Dubai (Downtown, Marina, JBR)',
      '200 drivers onboarded',
      'Hawil Card integration live',
      'Airport packages available',
    ],
    color: 'border-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    phase: 'Phase 2',
    title: 'Expansion',
    timeline: 'Q4 2027',
    milestones: [
      'Full Dubai coverage',
      'Launch Abu Dhabi & Sharjah',
      'Rakab Premium & XL',
      '800 drivers',
      'Rakab Pass subscription',
    ],
    color: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    phase: 'Phase 3',
    title: 'Scale',
    timeline: '2028',
    milestones: [
      'All 7 emirates covered',
      'Rakab Rent (car rental)',
      'Electric vehicle fleet',
      'Metro integration',
      '2,500 drivers',
    ],
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
  },
];

export default function RakabPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Car },
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'tourists', label: 'For Tourists', icon: Plane },
    { id: 'ecosystem', label: 'Ecosystem', icon: Network },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'drivers', label: 'Drivers', icon: Users },
    { id: 'economics', label: 'Unit Economics', icon: Calculator },
    { id: 'financials', label: 'Financials', icon: BarChart3 },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket },
    { id: 'competition', label: 'Competition', icon: Target },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              {/* Logo & Brand */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20">
                  <Car className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white">
                    Rakab <span className="text-green-400">ركب</span>
                  </h1>
                  <p className="text-green-400 text-sm sm:text-lg font-medium">Ride. Earn. Save.</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">
                UAE&apos;s first ride-hailing with <span className="text-green-400 font-medium">Google rate payments</span>,
                <span className="text-[#c9a227] font-medium"> 5% Nuqta coins</span> on every ride, and <span className="text-blue-400 font-medium">tourist-first design</span>.
              </p>

              {/* Partner Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full">
                <HeartHandshake className="w-4 h-4 text-[#c9a227]" />
                <span className="text-[#c9a227] text-xs sm:text-sm font-medium">A Nuqta Group Company</span>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {keyStats.map((stat, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center min-w-[120px]">
                  <div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">{stat.suffix}</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Banner */}
          <div className="mt-8 bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-4 sm:p-6 border border-green-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-green-400" />
                  <span className="text-lg font-bold text-white">Why Rakab?</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white">
                  <span className="text-green-400">Google Rate</span> + <span className="text-[#c9a227]">5% Coins</span> + <span className="text-blue-400">Tourist Mode</span>
                </p>
              </div>
              <div className="flex gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">0%</div>
                  <div className="text-xs text-slate-400">FX Fees</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">5%</div>
                  <div className="text-xs text-slate-400">Coins Back</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-2 gap-1 sm:gap-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-green-500 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Executive Summary */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-400" />
                Executive Summary
              </h2>
              <p className="text-slate-300 mb-6">
                <strong className="text-white">Rakab</strong> (ركب - &quot;ride&quot; in Arabic) is a ride-hailing service built for the Nuqta ecosystem.
                The unique value: <strong className="text-green-400">pay with Hawil Card at Google rate</strong> (no FX fees),
                earn <strong className="text-[#c9a227]">5% Nuqta coins</strong> on every ride, and enjoy <strong className="text-blue-400">tourist-first features</strong>
                like rate lock and multi-language support.
              </p>

              {/* Service Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {services.map((service, i) => (
                  <div key={i} className={`bg-gradient-to-br ${service.color} rounded-xl p-4 text-center`}>
                    <service.icon className="w-8 h-8 text-white mx-auto mb-2" />
                    <div className="text-white font-bold">{service.name}</div>
                    <div className="text-white/70 text-xs mt-1">{service.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tourist Value Prop */}
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-xl p-6 border-2 border-blue-500">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Plane className="w-5 h-5 text-blue-400" />
                {touristFeatures.headline}
              </h2>
              <p className="text-slate-300 mb-6">{touristFeatures.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {touristFeatures.features.slice(0, 3).map((feature, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-blue-500/30">
                    <feature.icon className="w-8 h-8 text-blue-400 mb-3" />
                    <h4 className="text-white font-bold mb-1">{feature.feature}</h4>
                    <p className="text-xs text-slate-400 mb-2">{feature.description}</p>
                    <div className="text-xs text-green-400 font-medium">{feature.savings}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Comparison */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-400" />
                Price Comparison (AED)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400">Route</th>
                      <th className="text-center py-3 px-4 text-green-400">Rakab</th>
                      <th className="text-center py-3 px-4 text-slate-400">Uber</th>
                      <th className="text-center py-3 px-4 text-slate-400">Careem</th>
                      <th className="text-center py-3 px-4 text-slate-400">Taxi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingComparison.map((route, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white text-sm">{route.route}</td>
                        <td className="py-3 px-4 text-center">
                          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded font-bold">{route.rakab}</span>
                        </td>
                        <td className="py-3 px-4 text-center text-slate-400">{route.uber}</td>
                        <td className="py-3 px-4 text-center text-slate-400">{route.careem}</td>
                        <td className="py-3 px-4 text-center text-slate-400">{route.taxi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <div key={i} className={`bg-gradient-to-br ${service.color} rounded-xl p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <service.icon className="w-12 h-12 text-white mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-white/80 mb-4">{service.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white/20 rounded-lg p-3 text-center">
                        <div className="text-white font-bold">{service.pricing}</div>
                        <div className="text-white/60 text-xs">Pricing</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3 text-center">
                        <div className="text-white font-bold">{service.eta}</div>
                        <div className="text-white/60 text-xs">Avg ETA</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {service.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-white/90">
                          <CheckCircle className="w-4 h-4 text-white" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Future Services */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Coming Soon</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {futureServices.map((service, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 text-center border border-slate-700/50">
                    <service.icon className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                    <div className="text-white font-medium text-sm">{service.service}</div>
                    <div className="text-xs text-slate-500">{service.description}</div>
                    <div className="text-xs text-green-400 mt-2">{service.timeline}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tourists Tab */}
        {activeTab === 'tourists' && (
          <div className="space-y-8">
            {/* Hero */}
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-2xl p-8 border-2 border-blue-500">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 rounded-full mb-4">
                  <Plane className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-bold">Tourist-First Design</span>
                </div>
                <h2 className="text-3xl font-black text-white mb-4">
                  Save 3-5% on Every Ride
                </h2>
                <p className="text-slate-300 text-lg">Pay with Hawil Card at Google rate - no foreign transaction fees</p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {touristFeatures.features.map((feature, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-blue-500/30">
                    <feature.icon className="w-10 h-10 text-blue-400 mb-3" />
                    <h4 className="text-white font-bold mb-2">{feature.feature}</h4>
                    <p className="text-sm text-slate-400 mb-3">{feature.description}</p>
                    <div className="bg-green-500/10 rounded-lg p-2 border border-green-500/30">
                      <span className="text-green-400 text-sm font-medium">{feature.savings}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Airport Packages */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Plane className="w-5 h-5 text-blue-400" />
                Fixed-Price Airport Transfers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {airportPackages.map((pkg, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-white font-medium text-sm">{pkg.from}</div>
                        <div className="text-slate-500 text-xs">→ {pkg.to}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold text-xl">{pkg.price} AED</div>
                        <div className="text-xs text-slate-500">Fixed price</div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">{pkg.time}</span>
                      <span className="text-green-400">Save {pkg.savings} AED</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Ecosystem Tab */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Network className="w-5 h-5 text-[#c9a227]" />
                Ecosystem Integration
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ecosystemIntegration.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        item.product === 'Nuqta+' ? 'bg-[#c9a227]/20' :
                        item.product === 'Hawil Card' ? 'bg-blue-500/20' :
                        item.product === 'Qist' ? 'bg-violet-500/20' :
                        item.product === 'Wasil' ? 'bg-orange-500/20' :
                        'bg-emerald-500/20'
                      }`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <h4 className={`font-bold ${item.color}`}>{item.product}</h4>
                    </div>
                    <p className="text-sm text-slate-300 mb-2">{item.integration}</p>
                    <div className="flex items-center gap-2 text-xs text-green-400">
                      <CheckCircle className="w-3 h-3" />
                      {item.benefit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subscriptionPlans.map((plan, i) => (
                <div key={i} className={`rounded-xl p-6 border-2 ${plan.color} ${plan.bgColor} relative`}>
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#c9a227] text-[#0a1628] text-xs font-bold rounded-full">
                      BEST VALUE
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-black text-green-400">
                      {typeof plan.price === 'number' ? `${plan.price} AED` : plan.price}
                    </span>
                    <span className="text-slate-400 text-sm">/{plan.period}</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/30">
                    <span className="text-green-400 text-sm">{plan.savings}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Drivers Tab */}
        {activeTab === 'drivers' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-6 border-2 border-green-500">
              <h2 className="text-xl font-bold text-white mb-2">{driverProgram.title}</h2>
              <p className="text-green-400 text-lg mb-6">{driverProgram.tagline}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {driverProgram.benefits.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-green-500/30">
                    <h4 className="text-white font-bold mb-1">{item.benefit}</h4>
                    <p className="text-sm text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-green-500/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{driverProgram.earnings.avgHourly}</div>
                  <div className="text-xs text-slate-400">Per Hour</div>
                </div>
                <div className="bg-green-500/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{driverProgram.earnings.avgDaily}</div>
                  <div className="text-xs text-slate-400">Per Day</div>
                </div>
                <div className="bg-green-500/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{driverProgram.earnings.topDrivers}</div>
                  <div className="text-xs text-slate-400">Top Drivers/Month</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Unit Economics Tab */}
        {activeTab === 'economics' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-green-400" />
                Per Ride Economics (Avg 45 AED fare)
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-green-500/10 rounded-xl p-4 text-center border border-green-500/30">
                  <div className="text-2xl font-bold text-green-400">{unitEconomics.platformCommission} AED</div>
                  <div className="text-xs text-slate-400">Platform Fee (15%)</div>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/30">
                  <div className="text-2xl font-bold text-blue-400">{unitEconomics.driverPayout} AED</div>
                  <div className="text-xs text-slate-400">Driver (85%)</div>
                </div>
                <div className="bg-[#c9a227]/10 rounded-xl p-4 text-center border border-[#c9a227]/30">
                  <div className="text-2xl font-bold text-[#c9a227]">{unitEconomics.coinReward} AED</div>
                  <div className="text-xs text-slate-400">Coin Reward (5%)</div>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-4 text-center border border-purple-500/30">
                  <div className="text-2xl font-bold text-purple-400">{unitEconomics.netRevenue} AED</div>
                  <div className="text-xs text-slate-400">Net Revenue</div>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{unitEconomics.ltvCacRatio}x</div>
                    <div className="text-xs text-slate-400">LTV:CAC Ratio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{unitEconomics.ltv} AED</div>
                    <div className="text-xs text-slate-400">User LTV (12mo)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{unitEconomics.cac} AED</div>
                    <div className="text-xs text-slate-400">CAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{unitEconomics.ridesPerUser}</div>
                    <div className="text-xs text-slate-400">Rides/User/Month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Financials Tab */}
        {activeTab === 'financials' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-400" />
                3-Year Financial Projections
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400">Metric</th>
                      {financialProjections.map((proj, i) => (
                        <th key={i} className="text-right py-3 px-4 text-white font-bold">{proj.year}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Rides</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-bold">{(proj.rides/1000).toFixed(0)}K</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Revenue (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-green-400 font-bold">{proj.revenue}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Drivers</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{proj.drivers.toLocaleString()}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Users</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{(proj.users/1000).toFixed(0)}K</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-300">Emirates Covered</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{proj.cities}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <div className="space-y-6">
            {roadmap.map((phase, i) => (
              <div key={i} className={`rounded-xl p-6 border-2 ${phase.color} ${phase.bgColor}`}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold text-slate-400">{phase.phase}</span>
                    <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                  </div>
                  <span className="px-3 py-1 bg-slate-900/50 rounded-full text-sm text-slate-300">{phase.timeline}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {phase.milestones.map((milestone, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-slate-500 flex-shrink-0" />
                      {milestone}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Competition Tab */}
        {activeTab === 'competition' && (
          <div className="space-y-6">
            {competitiveAdvantages.map((adv, i) => (
              <div key={i} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <adv.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{adv.advantage}</h3>
                    <p className="text-slate-300 mb-2">{adv.description}</p>
                    <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/30">
                      <span className="text-red-400 text-sm">{adv.vsCompetitors}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </main>

      <GlobalFooter />
    </div>
  );
}
