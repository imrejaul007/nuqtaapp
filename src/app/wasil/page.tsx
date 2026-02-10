'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Truck, Clock, ShoppingBag, Package, MapPin, Zap, Timer, Store,
  Smartphone, DollarSign, Users, Target, Rocket, CheckCircle, AlertTriangle,
  Building, Globe, ArrowRight, Star, BarChart3, Award, Handshake,
  CreditCard, FileText, Calculator, Gift, Crown, Wallet, ChevronRight,
  ChevronDown, ChevronUp, Building2, ShieldCheck, HeartHandshake, Coins,
  Network, ArrowRightLeft, ShoppingCart, Sparkles, Receipt, Layers,
  Home, TrendingUp, Shield, Bike, Car, Box, Warehouse, Banknote,
  Coffee, Utensils, Pill, Apple, Baby, PawPrint, Shirt, Headphones,
  Gamepad2, Flower2, Wine, Cigarette, ClipboardList, Phone, Mail,
  Map, UserCheck, RefreshCw, Calendar, LayoutGrid, Play, Search,
  Filter, Heart, Percent, BadgePercent, CircleDollarSign, PieChart,
  LineChart, ArrowUpRight, Link2, Eye
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Executive Summary Stats
const keyStats = [
  { label: 'Delivery Time', value: '60', suffix: 'minutes', color: 'text-orange-400' },
  { label: 'Year 1 Orders', value: '500K', suffix: 'orders', color: 'text-green-400' },
  { label: 'Avg Order', value: '85', suffix: 'AED', color: 'text-blue-400' },
  { label: 'Net Revenue/Order', value: '12', suffix: 'AED', color: 'text-[#c9a227]' },
];

// Categories
const categories = [
  { name: 'Grocery', icon: Apple, items: 'Fresh produce, dairy, pantry', avgOrder: 120, delivery: '45 min' },
  { name: 'Restaurant', icon: Utensils, items: 'Hot meals, all cuisines', avgOrder: 75, delivery: '35 min' },
  { name: 'Pharmacy', icon: Pill, items: 'OTC, prescriptions, wellness', avgOrder: 95, delivery: '30 min' },
  { name: 'Cafe & Bakery', icon: Coffee, items: 'Coffee, pastries, snacks', avgOrder: 45, delivery: '25 min' },
  { name: 'Pet Supplies', icon: PawPrint, items: 'Food, toys, accessories', avgOrder: 110, delivery: '45 min' },
  { name: 'Baby & Kids', icon: Baby, items: 'Diapers, formula, toys', avgOrder: 130, delivery: '40 min' },
  { name: 'Electronics', icon: Headphones, items: 'Accessories, gadgets', avgOrder: 250, delivery: '50 min' },
  { name: 'Fashion', icon: Shirt, items: 'Quick fashion, accessories', avgOrder: 180, delivery: '55 min' },
  { name: 'Flowers', icon: Flower2, items: 'Bouquets, plants, gifts', avgOrder: 150, delivery: '45 min' },
  { name: 'Alcohol', icon: Wine, items: 'Beer, wine, spirits (licensed)', avgOrder: 200, delivery: '40 min' },
  { name: 'Convenience', icon: Store, items: 'Snacks, drinks, essentials', avgOrder: 35, delivery: '20 min' },
  { name: 'Gaming', icon: Gamepad2, items: 'Gift cards, accessories', avgOrder: 120, delivery: '30 min' },
];

// Value Propositions
const customerBenefits = [
  { icon: Clock, title: '60-Minute Delivery', description: 'Everything delivered within 1 hour, guaranteed.' },
  { icon: Wallet, title: 'Nuqta Wallet', description: 'Pay with Nuqta coins and earn rewards on every order.' },
  { icon: ShoppingBag, title: 'Qist BNPL', description: 'Split larger orders into 3 easy payments at 0%.' },
  { icon: MapPin, title: 'Live Tracking', description: 'Real-time GPS tracking from store to doorstep.' },
  { icon: Shield, title: 'Quality Guarantee', description: 'Freshness guaranteed or full refund.' },
  { icon: Gift, title: 'Daily Deals', description: 'Exclusive discounts for Nuqta+ members.' },
];

const merchantBenefits = [
  { icon: TrendingUp, title: 'Instant Reach', description: 'Access 50,000+ Nuqta users from day one.' },
  { icon: Bike, title: 'Fleet Delivery', description: 'No need to hire drivers - we handle logistics.' },
  { icon: CircleDollarSign, title: 'Weekly Payouts', description: 'Fast settlement with transparent reporting.' },
  { icon: BarChart3, title: 'Analytics Dashboard', description: 'Real-time sales data and customer insights.' },
];

// Business Model
const revenueStreams = [
  { source: 'Delivery Fee', description: 'Per-order delivery charge to customer', value: '8-15 AED', volume: 'Primary', margin: 'Medium' },
  { source: 'Commission', description: 'Percentage of order value from merchants', value: '15-25%', volume: 'Primary', margin: 'High' },
  { source: 'Surge Pricing', description: 'Peak hour premium on delivery', value: '+3-5 AED', volume: 'Variable', margin: 'High' },
  { source: 'Wasil+ Subscription', description: 'Free delivery membership', value: '29 AED/month', volume: 'Growing', margin: 'Very High' },
  { source: 'Advertising', description: 'Featured placement for merchants', value: '500-2000/mo', volume: 'Secondary', margin: 'Very High' },
  { source: 'Dark Store Margin', description: 'Own inventory markup', value: '25-35%', volume: 'Future', margin: 'High' },
];

// Unit Economics
const unitEconomics = {
  avgOrderValue: 85,
  deliveryFee: 10,
  commission: 15, // ~18%
  surgeAvg: 2,
  totalRevenue: 27,
  riderCost: 12,
  operatingCost: 3,
  netRevenue: 12,
  wasilPlusRevenue: 29,
  nuqtaPlusBundle: 15, // Nuqta+ users get Wasil+ discount
};

// Financial Projections
const financialProjections = [
  { year: 'Year 1', orders: 500000, gmv: 42.5, revenue: 6, netProfit: 1.5, merchants: 500, riders: 200 },
  { year: 'Year 2', orders: 2000000, gmv: 170, revenue: 25, netProfit: 8, merchants: 1500, riders: 600 },
  { year: 'Year 3', orders: 6000000, gmv: 510, revenue: 75, netProfit: 28, merchants: 4000, riders: 1500 },
];

// Roadmap Phases
const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    timeline: 'Q3 2026',
    status: 'planned',
    milestones: [
      'Legal entity setup (Wasil Technologies LLC)',
      'Rider fleet partnerships',
      'Merchant onboarding platform',
      'Build core delivery app MVP',
      'Integrate Nuqta wallet & Qist',
      'Launch rider app',
    ],
    color: 'border-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    phase: 'Phase 2',
    title: 'Pilot Launch',
    timeline: 'Q4 2026',
    status: 'pending',
    milestones: [
      'Launch in Dubai Marina, JLT, Downtown',
      '100 pilot merchants',
      '50 riders on platform',
      'Integrate with Nuqta app orders',
      'Launch Wasil+ subscription',
      'Test dark store model',
    ],
    color: 'border-yellow-500',
    bgColor: 'bg-yellow-500/10',
  },
  {
    phase: 'Phase 3',
    title: 'Scale',
    timeline: 'Q1 2027',
    status: 'pending',
    milestones: [
      'Expand to all Dubai areas',
      '500+ merchants',
      '200+ riders',
      'Launch first dark store',
      'Cross-sell Nuqta+ aggressively',
      'B2B corporate deliveries',
    ],
    color: 'border-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    phase: 'Phase 4',
    title: 'Expansion',
    timeline: '2027-2028',
    status: 'pending',
    milestones: [
      'Expand to Abu Dhabi, Sharjah',
      '4,000+ merchants',
      '1,500+ riders',
      '10+ dark stores',
      'Launch Wasil for Business (B2B)',
      'Regional expansion planning',
    ],
    color: 'border-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
  },
];

// Competitive Landscape
const competitors = [
  { name: 'Wasil', delivery: '60 min', rewards: 'Nuqta Coins', bnpl: 'Qist 0%', subscription: '29 AED (Wasil+)', ecosystem: 'Full Nuqta', advantage: 'Ecosystem + BNPL' },
  { name: 'Talabat', delivery: '30-45 min', rewards: 'Limited', bnpl: 'None', subscription: 'Talabat Pro', ecosystem: 'Standalone', advantage: 'Market leader' },
  { name: 'Noon Minutes', delivery: '15-30 min', rewards: 'None', bnpl: 'None', subscription: 'None', ecosystem: 'Noon', advantage: 'Speed' },
  { name: 'Carrefour Now', delivery: '60 min', rewards: 'Share points', bnpl: 'None', subscription: 'None', ecosystem: 'MAF', advantage: 'Grocery focus' },
  { name: 'InstaShop', delivery: '45 min', rewards: 'None', bnpl: 'None', subscription: 'None', ecosystem: 'DeliveryHero', advantage: 'Multi-store' },
];

// Risk Mitigation
const risks = [
  {
    risk: 'Rider Availability',
    severity: 'high',
    mitigation: [
      'Competitive rider incentives',
      'Multiple fleet partnerships',
      'Dynamic surge pricing',
      'Rider loyalty program',
    ],
  },
  {
    risk: 'Competition (Talabat, Noon)',
    severity: 'high',
    mitigation: [
      'Nuqta ecosystem advantage',
      'Qist BNPL differentiation',
      'Nuqta+ member exclusives',
      'Corporate partnership network',
    ],
  },
  {
    risk: 'Delivery Delays',
    severity: 'medium',
    mitigation: [
      'AI-powered route optimization',
      'Real-time traffic integration',
      'Multiple rider backup system',
      'Proactive customer communication',
    ],
  },
  {
    risk: 'Merchant Quality',
    severity: 'medium',
    mitigation: [
      'Strict onboarding criteria',
      'Regular quality audits',
      'Customer rating system',
      'Merchant training program',
    ],
  },
];

// Corporate Structure
const corporateStructure = {
  parentCompany: 'Nuqta Group',
  subsidiary: 'Wasil Technologies LLC',
  ownership: '100% owned by Nuqta Group',
  license: 'E-commerce / Delivery Services',
  regulator: 'Dubai DED / RTA',
};

// Ecosystem Integration
const ecosystemIntegration = [
  {
    product: 'Nuqta',
    integration: 'All Nuqta app orders fulfilled by Wasil',
    benefit: 'Earn Nuqta coins on every delivery',
    icon: Crown,
    color: 'text-[#c9a227]',
  },
  {
    product: 'Qist',
    integration: 'BNPL for orders above 200 AED',
    benefit: '0% fees for Nuqta+ members',
    icon: ShoppingBag,
    color: 'text-violet-400',
  },
  {
    product: 'Sakin',
    integration: 'Move-in essentials package delivery',
    benefit: 'New Sakin tenants get Wasil welcome kit',
    icon: Home,
    color: 'text-emerald-400',
  },
];

// Dark Store Model
const darkStoreModel = {
  concept: 'Micro-fulfillment centers for ultra-fast delivery',
  size: '2,000-5,000 sqft',
  skus: '3,000-5,000 products',
  radius: '3-5 km coverage',
  deliveryTime: '15-20 minutes',
  investment: '200K-400K AED per store',
  breakeven: '12-18 months',
  locations: [
    { area: 'Dubai Marina', status: 'planned', launch: 'Q1 2027' },
    { area: 'Downtown Dubai', status: 'planned', launch: 'Q2 2027' },
    { area: 'JLT', status: 'planned', launch: 'Q2 2027' },
    { area: 'Business Bay', status: 'planned', launch: 'Q3 2027' },
  ],
};

// Wasil+ Subscription
const wasilPlusSubscription = {
  price: 29,
  benefits: [
    'Unlimited free delivery',
    'No surge pricing ever',
    'Priority rider assignment',
    'Exclusive member deals',
    '10% extra Nuqta coins',
  ],
  nuqtaPlusBundle: {
    price: 99,
    includes: ['Nuqta+ membership', 'Wasil+ included', 'Qist 0% fees', 'Sakin priority'],
  },
};

export default function WasilPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Truck },
    { id: 'ecosystem', label: 'Ecosystem', icon: Network },
    { id: 'categories', label: 'Categories', icon: LayoutGrid },
    { id: 'value-prop', label: 'Value Proposition', icon: Gift },
    { id: 'economics', label: 'Unit Economics', icon: Calculator },
    { id: 'financials', label: 'Financials', icon: BarChart3 },
    { id: 'dark-stores', label: 'Dark Stores', icon: Warehouse },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket },
    { id: 'risks', label: 'Risks', icon: Shield },
    { id: 'competition', label: 'Competition', icon: Users },
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
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <Truck className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white">
                    Wasil <span className="text-orange-400">واصل</span>
                  </h1>
                  <p className="text-orange-400 text-sm sm:text-lg font-medium">Souq to Your Door. Fast.</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">
                UAE&apos;s first <span className="text-orange-400 font-medium">quick commerce</span> with <span className="text-[#c9a227] font-medium">Nuqta rewards</span> and <span className="text-violet-400 font-medium">Qist BNPL</span>.
                Everything delivered within 60 minutes. Pay with Nuqta wallet or split with Qist.
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
          <div className="mt-8 bg-gradient-to-r from-orange-500/20 to-red-500/10 rounded-xl p-4 sm:p-6 border border-orange-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-orange-400" />
                  <span className="text-lg font-bold text-white">The Core Promise</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white">
                  <span className="text-orange-400">Everything in 60 minutes</span> • Pay with <span className="text-[#c9a227]">Nuqta</span> • Split with <span className="text-violet-400">Qist</span>
                </p>
              </div>
              <div className="flex gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-orange-400">60</div>
                  <div className="text-xs text-slate-400">Minutes</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">2x</div>
                  <div className="text-xs text-slate-400">Coins</div>
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
                    ? 'bg-orange-500 text-white'
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
                <FileText className="w-5 h-5 text-orange-400" />
                Executive Summary
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300">
                  <strong className="text-white">Wasil</strong> (واصل - &quot;delivering&quot; in Arabic) is a quick commerce platform that
                  delivers everything within 60 minutes. As a <strong className="text-[#c9a227]">Nuqta Group sister company</strong>,
                  Wasil handles all delivery logistics for Nuqta app orders while also operating its own direct-to-consumer
                  marketplace. Users can pay with <strong className="text-[#c9a227]">Nuqta wallet</strong> and use
                  <strong className="text-violet-400"> Qist BNPL</strong> for larger orders.
                </p>
              </div>

              {/* How It Works */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-white mb-4">How It Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {[
                    { step: 1, icon: Search, title: 'Browse', desc: 'Shop from 500+ stores' },
                    { step: 2, icon: ShoppingCart, title: 'Order', desc: 'Add to cart, checkout' },
                    { step: 3, icon: Wallet, title: 'Pay', desc: 'Nuqta, Qist, or card' },
                    { step: 4, icon: Bike, title: 'Dispatch', desc: 'Rider picks up order' },
                    { step: 5, icon: Package, title: 'Deliver', desc: 'At your door in 60 min' },
                  ].map((item, i) => (
                    <div key={i} className="relative">
                      <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 text-center">
                        <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-3">
                          <item.icon className="w-5 h-5 text-orange-400" />
                        </div>
                        <div className="text-xs text-orange-400 mb-1">Step {item.step}</div>
                        <div className="text-sm font-bold text-white">{item.title}</div>
                        <div className="text-xs text-slate-400 mt-1">{item.desc}</div>
                      </div>
                      {i < 4 && (
                        <ChevronRight className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Corporate Structure */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/5 rounded-xl p-6 border border-orange-500/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-orange-400" />
                Corporate Structure
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Parent Company</span>
                    <span className="text-white font-medium">{corporateStructure.parentCompany}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Entity Name</span>
                    <span className="text-white font-medium">{corporateStructure.subsidiary}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Ownership</span>
                    <span className="text-white font-medium">{corporateStructure.ownership}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">License Type</span>
                    <span className="text-white font-medium">{corporateStructure.license}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Regulator</span>
                    <span className="text-white font-medium">{corporateStructure.regulator}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Integration</span>
                    <span className="text-[#c9a227] font-medium">Nuqta+ Partner</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Model */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-400" />
                Revenue Model
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Revenue Stream</th>
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Description</th>
                      <th className="text-right py-3 px-4 text-slate-400 font-medium">Rate</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Volume</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Margin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {revenueStreams.map((item, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white font-medium">{item.source}</td>
                        <td className="py-3 px-4 text-slate-300 text-sm">{item.description}</td>
                        <td className="py-3 px-4 text-green-400 font-bold text-right">{item.value}</td>
                        <td className="py-3 px-4 text-center text-slate-300">{item.volume}</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${
                            item.margin === 'Very High' ? 'bg-green-500/20 text-green-400' :
                            item.margin === 'High' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>{item.margin}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Wasil+ Subscription */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Crown className="w-5 h-5 text-[#c9a227]" />
                Wasil+ Subscription
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-xl p-5 border border-orange-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-bold">Wasil+ Standalone</h4>
                    <span className="text-2xl font-black text-orange-400">{wasilPlusSubscription.price} AED<span className="text-sm font-normal text-slate-400">/mo</span></span>
                  </div>
                  <ul className="space-y-2">
                    {wasilPlusSubscription.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#c9a227]/10 rounded-xl p-5 border-2 border-[#c9a227]">
                  <div className="absolute -top-3 left-4 px-3 py-1 bg-[#c9a227] text-[#0a1628] text-xs font-bold rounded-full">
                    BEST VALUE
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-bold">Nuqta+ Bundle</h4>
                    <span className="text-2xl font-black text-[#c9a227]">{wasilPlusSubscription.nuqtaPlusBundle.price} AED<span className="text-sm font-normal text-slate-400">/mo</span></span>
                  </div>
                  <ul className="space-y-2">
                    {wasilPlusSubscription.nuqtaPlusBundle.includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-[#c9a227] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Ecosystem Tab */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-8">
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-orange-500/20 via-[#c9a227]/20 to-violet-500/20 rounded-2xl p-8 border-2 border-orange-500/50">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 rounded-full mb-4">
                  <Network className="w-5 h-5 text-orange-400" />
                  <span className="text-orange-400 font-bold">Wasil Powers the Ecosystem</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                  The <span className="text-orange-400">Delivery Layer</span> for Everything
                </h2>
                <p className="text-slate-300 max-w-3xl mx-auto text-lg">
                  Wasil isn&apos;t just another delivery app. It&apos;s the logistics backbone that connects
                  Nuqta, Qist, and Sakin - making the entire ecosystem seamlessly accessible.
                </p>
              </div>

              {/* Four Products Visual */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Nuqta', arabic: 'نقطة', tagline: 'Earn & Save', color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10', borderColor: 'border-[#c9a227]', icon: Crown },
                  { name: 'Qist', arabic: 'قسط', tagline: 'Pay Easy', color: 'text-violet-400', bgColor: 'bg-violet-500/10', borderColor: 'border-violet-500', icon: ShoppingBag },
                  { name: 'Sakin', arabic: 'ساكن', tagline: 'Live Better', color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500', icon: Home },
                  { name: 'Wasil', arabic: 'واصل', tagline: 'Get Fast', color: 'text-orange-400', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500', icon: Truck },
                ].map((product, i) => (
                  <div key={i} className={`${product.bgColor} rounded-xl p-4 border-2 ${product.borderColor} text-center`}>
                    <div className={`w-12 h-12 rounded-xl ${product.bgColor} flex items-center justify-center mx-auto mb-3 border ${product.borderColor}`}>
                      <product.icon className={`w-6 h-6 ${product.color}`} />
                    </div>
                    <h3 className={`text-lg font-black ${product.color}`}>{product.name}</h3>
                    <span className="text-slate-400 text-xs">{product.arabic}</span>
                    <p className="text-slate-300 text-sm mt-1">{product.tagline}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration Points */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Link2 className="w-5 h-5 text-orange-400" />
                Deep Ecosystem Integration
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ecosystemIntegration.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        item.product === 'Nuqta' ? 'bg-[#c9a227]/20' :
                        item.product === 'Qist' ? 'bg-violet-500/20' :
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

            {/* Order Flow */}
            <div className="bg-orange-500/10 rounded-xl p-6 border-2 border-orange-500">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5 text-orange-400" />
                How Wasil Powers Every Order
              </h3>
              <p className="text-slate-300 mb-6">
                Whether a customer orders through Nuqta app or Wasil directly, the same infrastructure handles fulfillment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-xl p-5 border border-[#c9a227]/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Crown className="w-6 h-6 text-[#c9a227]" />
                    <h4 className="text-white font-bold">Order via Nuqta App</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      'Browse Nuqta merchant catalog',
                      'Pay with Nuqta coins or Qist',
                      'Order routed to Wasil backend',
                      'Wasil rider picks up & delivers',
                      'Earn 2x Nuqta coins on delivery',
                    ].map((step, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-[#c9a227]/20 flex items-center justify-center text-xs text-[#c9a227] font-bold">{j+1}</div>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-5 border border-orange-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Truck className="w-6 h-6 text-orange-400" />
                    <h4 className="text-white font-bold">Order via Wasil App</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      'Browse full Wasil marketplace',
                      'Connect Nuqta wallet for payment',
                      'Use Qist for orders 200+ AED',
                      'Same Wasil rider fleet delivers',
                      'Earn Nuqta coins automatically',
                    ].map((step, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-xs text-orange-400 font-bold">{j+1}</div>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sakin Integration */}
            <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Home className="w-5 h-5 text-emerald-400" />
                Wasil + Sakin: Move-In Package
              </h3>
              <p className="text-slate-300 mb-4">
                Every new Sakin tenant gets a <strong className="text-white">Wasil Welcome Kit</strong> - essentials delivered
                on move-in day at a bundled discount.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { item: 'Cleaning supplies', price: 'FREE' },
                  { item: 'Grocery starter pack', price: '50% off' },
                  { item: 'Toiletries bundle', price: '30% off' },
                  { item: 'Kitchen essentials', price: '25% off' },
                ].map((pkg, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 text-center border border-emerald-500/30">
                    <div className="text-sm text-white font-medium">{pkg.item}</div>
                    <div className="text-lg font-bold text-emerald-400">{pkg.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unified Data */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#c9a227]" />
                The Complete Consumer Picture
              </h3>
              <p className="text-slate-300 mb-6">
                With Wasil, Nuqta Group sees the full consumer journey - what they buy, where they live, how they pay.
                This creates the most comprehensive customer profile in UAE fintech.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-[#c9a227]/30">
                  <Crown className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                  <div className="text-white font-bold">Nuqta</div>
                  <div className="text-xs text-slate-400">Where they spend</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-violet-500/30">
                  <ShoppingBag className="w-8 h-8 text-violet-400 mx-auto mb-2" />
                  <div className="text-white font-bold">Qist</div>
                  <div className="text-xs text-slate-400">How they pay</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-emerald-500/30">
                  <Home className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <div className="text-white font-bold">Sakin</div>
                  <div className="text-xs text-slate-400">Where they live</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-orange-500/30">
                  <Truck className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <div className="text-white font-bold">Wasil</div>
                  <div className="text-xs text-slate-400">What they need</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Categories Tab */}
        {activeTab === 'categories' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-orange-400" />
                Delivery Categories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((cat, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50 hover:border-orange-500/50 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                        <cat.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold">{cat.name}</h3>
                        <p className="text-xs text-slate-400">{cat.items}</p>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>
                        <span className="text-slate-400">Avg Order: </span>
                        <span className="text-green-400 font-medium">{cat.avgOrder} AED</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Delivery: </span>
                        <span className="text-orange-400 font-medium">{cat.delivery}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Value Proposition Tab */}
        {activeTab === 'value-prop' && (
          <div className="space-y-8">
            {/* For Customers */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/5 rounded-xl p-6 border border-orange-500/30">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-400" />
                For Customers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {customerBenefits.map((benefit, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-white font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-400">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* For Merchants */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-6 border border-green-500/30">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Store className="w-5 h-5 text-green-400" />
                For Merchants
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {merchantBenefits.map((benefit, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-white font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-400">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Unit Economics Tab */}
        {activeTab === 'economics' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-orange-400" />
                Per Order Economics (Avg 85 AED Order)
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-green-500/10 rounded-xl p-4 text-center border border-green-500/30">
                  <div className="text-2xl font-bold text-green-400">{unitEconomics.deliveryFee} AED</div>
                  <div className="text-xs text-slate-400">Delivery Fee</div>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/30">
                  <div className="text-2xl font-bold text-blue-400">{unitEconomics.commission} AED</div>
                  <div className="text-xs text-slate-400">Commission (18%)</div>
                </div>
                <div className="bg-orange-500/10 rounded-xl p-4 text-center border border-orange-500/30">
                  <div className="text-2xl font-bold text-orange-400">{unitEconomics.totalRevenue} AED</div>
                  <div className="text-xs text-slate-400">Total Revenue</div>
                </div>
                <div className="bg-[#c9a227]/10 rounded-xl p-4 text-center border border-[#c9a227]/30">
                  <div className="text-2xl font-bold text-[#c9a227]">{unitEconomics.netRevenue} AED</div>
                  <div className="text-xs text-slate-400">Net per Order</div>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                <h3 className="text-white font-bold mb-4">Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Average Order Value</span>
                    <span className="text-white font-bold">{unitEconomics.avgOrderValue} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-green-400">+ Delivery Fee</span>
                    <span className="text-green-400 font-bold">+{unitEconomics.deliveryFee} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-green-400">+ Merchant Commission (18%)</span>
                    <span className="text-green-400 font-bold">+{unitEconomics.commission} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-green-400">+ Surge (avg)</span>
                    <span className="text-green-400 font-bold">+{unitEconomics.surgeAvg} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-red-400">- Rider Payout</span>
                    <span className="text-red-400 font-bold">-{unitEconomics.riderCost} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-red-400">- Operating Cost</span>
                    <span className="text-red-400 font-bold">-{unitEconomics.operatingCost} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-orange-500/10 rounded-lg px-3">
                    <span className="text-white font-bold">Net Revenue per Order</span>
                    <span className="text-orange-400 font-bold text-xl">{unitEconomics.netRevenue} AED</span>
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
                <BarChart3 className="w-5 h-5 text-orange-400" />
                3-Year Financial Projections
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Metric</th>
                      {financialProjections.map((proj, i) => (
                        <th key={i} className="text-right py-3 px-4 text-white font-bold">{proj.year}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Orders</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{(proj.orders/1000000).toFixed(1)}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">GMV (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-orange-400 font-bold">{proj.gmv}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Revenue (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-green-400 font-bold">{proj.revenue}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Net Profit (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-[#c9a227] font-bold">{proj.netProfit}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Merchants</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{proj.merchants.toLocaleString()}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-300">Riders</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{proj.riders.toLocaleString()}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/10 rounded-xl p-6 border border-orange-500/30 text-center">
                <div className="text-3xl font-bold text-orange-400">510M</div>
                <div className="text-slate-400 text-sm mt-1">Year 3 GMV (AED)</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-6 border border-green-500/30 text-center">
                <div className="text-3xl font-bold text-green-400">75M</div>
                <div className="text-slate-400 text-sm mt-1">Year 3 Revenue (AED)</div>
              </div>
              <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-6 border border-[#c9a227]/30 text-center">
                <div className="text-3xl font-bold text-[#c9a227]">37%</div>
                <div className="text-slate-400 text-sm mt-1">Net Margin</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-xl p-6 border border-blue-500/30 text-center">
                <div className="text-3xl font-bold text-blue-400">6M</div>
                <div className="text-slate-400 text-sm mt-1">Year 3 Orders</div>
              </div>
            </div>
          </div>
        )}

        {/* Dark Stores Tab */}
        {activeTab === 'dark-stores' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Warehouse className="w-5 h-5 text-orange-400" />
                Dark Store Model
              </h2>
              <p className="text-slate-300 mb-6">{darkStoreModel.concept}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className="text-2xl font-bold text-orange-400">{darkStoreModel.deliveryTime}</div>
                  <div className="text-xs text-slate-400">Delivery Time</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className="text-2xl font-bold text-white">{darkStoreModel.skus}</div>
                  <div className="text-xs text-slate-400">SKUs</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className="text-2xl font-bold text-white">{darkStoreModel.radius}</div>
                  <div className="text-xs text-slate-400">Coverage Radius</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className="text-2xl font-bold text-green-400">{darkStoreModel.breakeven}</div>
                  <div className="text-xs text-slate-400">Breakeven</div>
                </div>
              </div>

              <h3 className="text-white font-bold mb-4">Planned Locations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {darkStoreModel.locations.map((loc, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-orange-400" />
                      <span className="text-white font-medium">{loc.area}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Launch</span>
                      <span className="text-orange-400">{loc.launch}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <div className="space-y-6">
            {roadmapPhases.map((phase, i) => (
              <div key={i} className={`rounded-xl p-6 border-2 ${phase.color} ${phase.bgColor}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-400">{phase.phase}</span>
                      <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-400 text-sm">{phase.timeline}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    phase.status === 'planned' ? 'bg-blue-500/20 text-blue-400' :
                    phase.status === 'in_progress' ? 'bg-green-500/20 text-green-400' :
                    'bg-slate-500/20 text-slate-400'
                  }`}>
                    {phase.status === 'in_progress' ? 'In Progress' : phase.status === 'planned' ? 'Planned' : 'Pending'}
                  </span>
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

        {/* Risks Tab */}
        {activeTab === 'risks' && (
          <div className="space-y-4">
            {risks.map((risk, i) => (
              <div key={i} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden">
                <button
                  onClick={() => setExpandedRisk(expandedRisk === risk.risk ? null : risk.risk)}
                  className="w-full p-4 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      risk.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                      risk.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {risk.severity.toUpperCase()}
                    </span>
                    <span className="text-white font-bold">{risk.risk}</span>
                  </div>
                  {expandedRisk === risk.risk ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                {expandedRisk === risk.risk && (
                  <div className="px-4 pb-4">
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <div className="text-sm font-bold text-white mb-3">Mitigation Strategies:</div>
                      <div className="space-y-2">
                        {risk.mitigation.map((item, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                            <Shield className="w-4 h-4 text-green-400 flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Competition Tab */}
        {activeTab === 'competition' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-400" />
                UAE Quick Commerce Landscape
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Provider</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Delivery</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Rewards</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">BNPL</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Subscription</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Ecosystem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((comp, i) => (
                      <tr key={i} className={`border-b border-slate-700/50 ${comp.name === 'Wasil' ? 'bg-orange-500/10' : ''}`}>
                        <td className={`py-3 px-4 font-bold ${comp.name === 'Wasil' ? 'text-orange-400' : 'text-white'}`}>{comp.name}</td>
                        <td className="py-3 px-4 text-center text-slate-300">{comp.delivery}</td>
                        <td className="py-3 px-4 text-center">
                          {comp.rewards !== 'None' && comp.rewards !== 'Limited' ? (
                            <span className="text-[#c9a227] font-bold">{comp.rewards}</span>
                          ) : (
                            <span className="text-slate-500">{comp.rewards}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {comp.bnpl !== 'None' ? (
                            <span className="text-violet-400 font-bold">{comp.bnpl}</span>
                          ) : (
                            <span className="text-slate-500">None</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center text-slate-300">{comp.subscription}</td>
                        <td className="py-3 px-4 text-center">
                          {comp.ecosystem === 'Full Nuqta' ? (
                            <span className="text-orange-400 font-bold">{comp.ecosystem}</span>
                          ) : (
                            <span className="text-slate-400">{comp.ecosystem}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Competitive Advantage */}
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/10 rounded-xl p-6 border-2 border-orange-500">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-orange-400" />
                Wasil Competitive Moat
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-bold mb-3">What Competitors Lack</h4>
                  <div className="space-y-2">
                    {['No rewards or coin economy', 'No BNPL integration', 'No ecosystem cross-sell', 'No corporate partnership network'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-3">Wasil Unique Value</h4>
                  <div className="space-y-2">
                    {['Nuqta coins on every order', 'Qist BNPL for orders 200+ AED', 'Powers all Nuqta app deliveries', 'Sakin move-in package integration'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      <GlobalFooter />
    </div>
  );
}
