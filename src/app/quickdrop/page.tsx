'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Zap, Rocket, Clock, Package, ShoppingBag, Warehouse, MapPin,
  Smartphone, DollarSign, Users, Target, CheckCircle, TrendingUp,
  Building, ArrowRight, Star, BarChart3, Award, CreditCard,
  Calculator, Gift, Crown, Wallet, ChevronRight, ChevronDown,
  ChevronUp, Building2, ShieldCheck, HeartHandshake, Coins,
  Network, Timer, Box, Banknote, Coffee, Headphones, Baby,
  Home, Shield, Layers, Sparkles, Percent, BadgePercent,
  CircleDollarSign, PieChart, LineChart, ArrowUpRight, Cpu,
  Database, Activity, Globe, Bike, Store, RefreshCw, Search,
  Bell, Lock, Truck, AlertTriangle, Briefcase
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── HERO STATS ───
const heroStats = [
  { label: 'SKUs Available', value: '3,000+', suffix: 'products', color: 'text-violet-400' },
  { label: 'Delivery Time', value: '15', suffix: 'minutes', color: 'text-green-400' },
  { label: 'Avg Order Value', value: '45', suffix: 'AED', color: 'text-cyan-400' },
  { label: 'Operation Hours', value: '24/7', suffix: 'always on', color: 'text-orange-400' },
  { label: 'Dark Stores', value: '12', suffix: 'planned', color: 'text-blue-400' },
  { label: 'Nuqta Coins', value: '2X', suffix: 'earn rate', color: 'text-[#c9a227]' },
];

// ─── PRODUCT CATEGORIES ───
const productCategories = [
  {
    name: 'Snacks & Beverages', icon: Coffee, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30',
    skuCount: 800, items: ['Chips & Crisps', 'Chocolates & Candy', 'Energy Drinks', 'Soft Drinks', 'Juices & Water', 'Nuts & Dried Fruits', 'Instant Noodles', 'Ice Cream & Frozen Treats'],
  },
  {
    name: 'Personal Care', icon: Sparkles, color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/30',
    skuCount: 600, items: ['Shampoo & Conditioner', 'Body Wash & Soap', 'Deodorants', 'Skincare Essentials', 'Oral Care', 'Razors & Shaving', 'Feminine Hygiene', 'Hand Sanitizers'],
  },
  {
    name: 'Baby & Kids', icon: Baby, color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/30',
    skuCount: 400, items: ['Diapers & Wipes', 'Baby Formula', 'Baby Food', 'Baby Care Products', 'Kids Snacks', 'Sippy Cups & Bottles', 'Baby Medicine', 'Teething Products'],
  },
  {
    name: 'Electronics & Accessories', icon: Headphones, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30',
    skuCount: 500, items: ['Phone Chargers & Cables', 'Power Banks', 'Earbuds & Headphones', 'Phone Cases', 'USB Drives', 'Batteries', 'Smart Accessories', 'Adapters & Converters'],
  },
  {
    name: 'Home Essentials', icon: Home, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30',
    skuCount: 450, items: ['Cleaning Supplies', 'Trash Bags', 'Light Bulbs', 'Paper Towels & Tissues', 'Air Fresheners', 'Laundry Detergent', 'Dish Soap', 'Kitchen Essentials'],
  },
  {
    name: 'Office Supplies', icon: Layers, color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/30',
    skuCount: 250, items: ['Notebooks & Pens', 'Printer Paper', 'Sticky Notes', 'Desk Organizers', 'Tape & Glue', 'Envelopes', 'Markers & Highlighters', 'Binder Clips'],
  },
];

// ─── HOW IT WORKS ───
const howItWorks = [
  { step: 1, title: 'Browse & Order', description: 'Pick from 3,000+ essentials in the QuickDrop app', icon: Search, color: 'bg-violet-500', time: '1 min' },
  { step: 2, title: 'Instant Picking', description: 'Dark store picker assembles your order in real-time', icon: Box, color: 'bg-blue-500', time: '3 min' },
  { step: 3, title: 'NuqtaPay Checkout', description: 'One-tap pay with NuqtaPay, Hawil Card, or cash', icon: CreditCard, color: 'bg-emerald-500', time: '30 sec' },
  { step: 4, title: 'Wasil Rider Dispatch', description: 'Nearest Wasil rider picks up from dark store', icon: Bike, color: 'bg-orange-500', time: '2 min' },
  { step: 5, title: 'Doorstep in 15 Min', description: 'Delivered to your door in guaranteed 15 minutes', icon: Zap, color: 'bg-[#c9a227]', time: '9 min' },
];

// ─── DARK STORE OPERATIONS ───
const darkStoreSpecs = {
  size: '2,000-3,500 sqft',
  skus: '3,000-5,000',
  radius: '3 km',
  avgPick: '90 seconds',
  staff: '8-12 per store',
  investment: '300K-500K AED',
  breakeven: '8-12 months',
};

const darkStoreLocations = [
  { area: 'Dubai Marina', status: 'Phase 1', timeline: 'Q1 2027', density: 'Ultra-High' },
  { area: 'Downtown Dubai', status: 'Phase 1', timeline: 'Q1 2027', density: 'Ultra-High' },
  { area: 'JLT', status: 'Phase 1', timeline: 'Q2 2027', density: 'High' },
  { area: 'Business Bay', status: 'Phase 1', timeline: 'Q2 2027', density: 'High' },
  { area: 'JBR & Bluewaters', status: 'Phase 2', timeline: 'Q3 2027', density: 'Ultra-High' },
  { area: 'DIFC', status: 'Phase 2', timeline: 'Q3 2027', density: 'High' },
  { area: 'Al Barsha', status: 'Phase 2', timeline: 'Q4 2027', density: 'Medium-High' },
  { area: 'Silicon Oasis', status: 'Phase 2', timeline: 'Q4 2027', density: 'Medium-High' },
  { area: 'Deira', status: 'Phase 3', timeline: 'Q1 2028', density: 'High' },
  { area: 'Jumeirah', status: 'Phase 3', timeline: 'Q1 2028', density: 'High' },
  { area: 'Abu Dhabi CBD', status: 'Phase 3', timeline: 'Q2 2028', density: 'High' },
  { area: 'Sharjah Central', status: 'Phase 3', timeline: 'Q2 2028', density: 'Medium' },
];

// ─── PLATFORM FEATURES ───
const platformFeatures = [
  { feature: 'Smart Inventory Management', description: 'AI-powered stock tracking with auto-reorder triggers based on velocity and seasonal demand', icon: Database, color: 'text-cyan-400' },
  { feature: 'Demand Prediction Engine', description: 'Machine learning forecasts demand by zone, time, and weather to pre-stock dark stores', icon: Cpu, color: 'text-violet-400' },
  { feature: 'Real-Time Rider Matching', description: 'Assigns nearest Wasil rider before order is packed -- rider arrives as picking completes', icon: Activity, color: 'text-green-400' },
  { feature: '15-Minute SLA Monitor', description: 'Live dashboard tracking every order against 15-min guarantee with escalation alerts', icon: Timer, color: 'text-orange-400' },
  { feature: 'Dynamic Pricing Engine', description: 'Adjusts delivery fees and surge pricing based on demand, weather, and rider availability', icon: TrendingUp, color: 'text-blue-400' },
  { feature: 'Quality Assurance Scanner', description: 'Barcode verification at pick, pack, and dispatch ensures zero wrong-item deliveries', icon: ShieldCheck, color: 'text-emerald-400' },
];

// ─── ECOSYSTEM INTEGRATIONS ───
const ecosystemLinks = [
  { product: 'NuqtaPay', desc: 'One-tap instant checkout with saved payment methods for sub-60-second ordering', icon: Wallet, color: 'text-[#c9a227]' },
  { product: 'Nuqta Coins (2X)', desc: 'Earn double Nuqta coins on every QuickDrop order -- highest dark store earn rate', icon: Coins, color: 'text-yellow-400' },
  { product: 'Hawil Card', desc: 'Pay at Google exchange rate with Hawil Card for zero markup on checkout', icon: CreditCard, color: 'text-cyan-400' },
  { product: 'Wasil Riders', desc: 'Shared Wasil rider fleet powers last-mile delivery from dark store to doorstep', icon: Bike, color: 'text-orange-400' },
  { product: 'Qist BNPL', desc: 'Split larger electronics or bulk orders into 3 installments with Qist 0% interest', icon: ShoppingBag, color: 'text-violet-400' },
  { product: 'Adzy Sponsored', desc: 'Brands pay for featured placement and promoted products inside QuickDrop catalog', icon: Target, color: 'text-pink-400' },
];

// ─── PRICING MODEL ───
const pricingTiers = [
  {
    tier: 'Standard Delivery', price: '5 AED', description: 'Per-order delivery fee for all customers',
    features: ['15-minute delivery guarantee', 'Real-time GPS tracking', 'Contactless delivery option', 'In-app chat with rider'],
    color: 'border-blue-500', bg: 'bg-blue-500/10', textColor: 'text-blue-400',
  },
  {
    tier: 'QuickDrop+ Subscription', price: '19 AED/mo', description: 'Unlimited free deliveries for subscribers',
    features: ['Unlimited free deliveries', 'Priority picking & dispatch', 'Exclusive member-only deals', '3X Nuqta coins (vs 2X)', 'No minimum order required', 'Early access to new products'],
    color: 'border-violet-500', bg: 'bg-violet-500/10', textColor: 'text-violet-400', highlighted: true,
  },
  {
    tier: 'QuickDrop Business', price: '49 AED/mo', description: 'For offices and small businesses',
    features: ['Unlimited office deliveries', 'Bulk order discounts (10%)', 'Scheduled recurring orders', 'Dedicated account manager', 'Invoice billing & receipts', 'Multi-user team access'],
    color: 'border-emerald-500', bg: 'bg-emerald-500/10', textColor: 'text-emerald-400',
  },
];

// ─── UNIT ECONOMICS ───
const unitEconomics = [
  { metric: 'Avg Order Value', value: '45 AED', detail: 'Blended across all 6 categories' },
  { metric: 'Product Markup', value: '25-35%', detail: 'Own inventory pricing vs wholesale cost' },
  { metric: 'Gross Margin per Order', value: '12 AED', detail: '~27% average gross margin' },
  { metric: 'Delivery Fee Revenue', value: '5 AED', detail: 'Standard delivery (0 for QuickDrop+)' },
  { metric: 'Picking & Packing Cost', value: '3 AED', detail: 'Labor cost per order in dark store' },
  { metric: 'Rider Cost', value: '6 AED', detail: 'Wasil rider payout per delivery' },
  { metric: 'Rent & Overhead', value: '2 AED', detail: 'Dark store rent allocated per order' },
  { metric: 'Net Margin per Order', value: '6 AED', detail: '~13% net margin at scale' },
  { metric: 'QuickDrop+ LTV', value: '1,200 AED', detail: '12 months avg retention, 5 orders/week' },
  { metric: 'CAC', value: '35 AED', detail: 'Ecosystem referral + digital ads blended' },
  { metric: 'LTV:CAC Ratio', value: '34:1', detail: 'Excellent for quick commerce vertical' },
  { metric: 'Break-even Orders/Day', value: '120', detail: 'Per dark store break-even point' },
];

// ─── REVENUE MODEL ───
const revenueStreams = [
  { source: 'Product Markup', desc: 'Margin on own inventory (wholesale to retail)', share: '60%', value: '25-35%', icon: Package, color: 'text-violet-400' },
  { source: 'Delivery Fees', desc: 'Per-order delivery charge for non-subscribers', share: '15%', value: '5 AED/order', icon: Truck, color: 'text-blue-400' },
  { source: 'QuickDrop+ Subscription', desc: 'Monthly subscription for unlimited deliveries', share: '15%', value: '19-49 AED/mo', icon: Crown, color: 'text-emerald-400' },
  { source: 'Brand Placement Fees', desc: 'Sponsored products, featured listings via Adzy', share: '10%', value: '500-3K/mo', icon: Target, color: 'text-pink-400' },
];

// ─── MARKET DATA ───
const marketData = [
  { market: 'UAE Quick Commerce', value: '$500M', growth: '40% YoY', detail: 'Fastest growing segment of UAE e-commerce market' },
  { market: 'GCC Quick Commerce', value: '$1.8B', growth: '35% YoY', detail: 'Total addressable market across 6 GCC countries' },
  { market: 'UAE Convenience Retail', value: '$3.2B', growth: '8% YoY', detail: 'Traditional convenience stores being disrupted' },
  { market: 'Dark Store Penetration', value: '12%', growth: '+5% YoY', detail: 'Share of convenience retail moving to dark stores' },
  { market: 'Avg Orders/Day (UAE)', value: '250K+', growth: '45% YoY', detail: 'Daily quick commerce orders across UAE platforms' },
  { market: 'Subscriber Penetration', value: '22%', growth: '+8% YoY', detail: 'Quick commerce users with active subscriptions' },
];

// ─── COMPETITORS ───
const competitors = [
  { name: 'QuickDrop', delivery: '15 min', skus: '3,000+', ownInventory: 'Yes', subscription: '19 AED/mo', coins: '2X Nuqta', ecosystem: 'Full Nuqta', highlight: true },
  { name: 'Noon Minutes', delivery: '15-30 min', skus: '2,500+', ownInventory: 'Yes', subscription: 'None', coins: 'None', ecosystem: 'Noon', highlight: false },
  { name: 'Talabat Mart', delivery: '20-30 min', skus: '2,000+', ownInventory: 'Yes', subscription: 'Pro', coins: 'None', ecosystem: 'Talabat', highlight: false },
  { name: 'JIFFY', delivery: '15-20 min', skus: '1,500+', ownInventory: 'Yes', subscription: 'None', coins: 'None', ecosystem: 'Standalone', highlight: false },
];

// ─── COMPETITIVE ADVANTAGES ───
const competitiveAdvantages = [
  { advantage: '15-Minute Guarantee', description: 'Guaranteed delivery in 15 minutes or free delivery on next order -- competitors only promise, we guarantee', icon: Timer, color: 'text-orange-400' },
  { advantage: 'Nuqta Ecosystem Lock-in', description: 'NuqtaPay, Nuqta Coins 2X, Hawil Card, Qist BNPL -- no competitor has this depth of financial ecosystem', icon: Network, color: 'text-[#c9a227]' },
  { advantage: '24/7 Always-On Operations', description: 'Dark stores operate around the clock -- late night cravings, early morning essentials, always covered', icon: Clock, color: 'text-blue-400' },
  { advantage: 'AI-Powered Demand Prediction', description: 'ML models predict demand by zone, time, weather ensuring 98% in-stock rate across all dark stores', icon: Cpu, color: 'text-violet-400' },
  { advantage: 'Wasil Shared Rider Fleet', description: 'Leverages existing Wasil rider network for lower cost per delivery vs dedicated fleet competitors', icon: Bike, color: 'text-green-400' },
  { advantage: 'QuickDrop+ Value Proposition', description: '19 AED/mo for unlimited deliveries -- pays for itself after 4 orders vs 5 AED per delivery standard', icon: Crown, color: 'text-emerald-400' },
];

export default function QuickDropPage() {
  const [activeTab, setActiveTab] = useState('features');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const tabs = [
    { id: 'features', label: 'Features & Categories', icon: Layers },
    { id: 'pricing', label: 'Pricing & Economics', icon: Calculator },
    { id: 'market', label: 'Market & Competition', icon: BarChart3 },
    { id: 'deck', label: 'Pitch Deck', icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* ═══ HERO SECTION ═══ */}
      <div className="bg-gradient-to-br from-[#0a1628] via-violet-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/wasil" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Wasil
          </Link>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                  <Zap className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white">
                    QuickDrop <span className="text-violet-400">كويك دروب</span>
                  </h1>
                  <p className="text-violet-400 text-sm sm:text-lg font-medium">15-Minute Dark Store Instant Delivery</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">
                Get anything delivered in <span className="text-green-400 font-bold">15 minutes</span> from our
                own <span className="text-violet-400 font-bold">micro-warehouses</span>.
                {' '}<span className="text-orange-400 font-bold">3,000+ essentials</span> available
                {' '}<span className="text-blue-400 font-bold">24/7</span>. Pay with
                {' '}<span className="text-[#c9a227] font-bold">NuqtaPay</span>, earn
                {' '}<span className="text-yellow-400 font-bold">2X Nuqta Coins</span> on every order.
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-500/20 border border-violet-500/50 rounded-full">
                  <Truck className="w-4 h-4 text-violet-400" />
                  <span className="text-violet-400 text-xs sm:text-sm font-medium">A Wasil Brand</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full">
                  <HeartHandshake className="w-4 h-4 text-[#c9a227]" />
                  <span className="text-[#c9a227] text-xs sm:text-sm font-medium">A Nuqta Group Company</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {heroStats.map((stat, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50 text-center min-w-[100px]">
                  <div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">{stat.suffix}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Promise Banner */}
          <div className="mt-8 bg-gradient-to-r from-violet-500/20 to-indigo-500/10 rounded-xl p-4 sm:p-6 border border-violet-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="w-5 h-5 text-violet-400" />
                  <span className="text-lg font-bold text-white">The QuickDrop Promise</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white">
                  <span className="text-green-400">15 minutes</span> or it&apos;s free
                  {' '}&bull; <span className="text-violet-400">3,000+ SKUs</span>
                  {' '}&bull; <span className="text-[#c9a227]">2X Nuqta Coins</span>
                  {' '}&bull; <span className="text-blue-400">24/7</span>
                </p>
              </div>
              <div className="flex gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">15</div>
                  <div className="text-xs text-slate-400">Minutes</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-violet-400">3K+</div>
                  <div className="text-xs text-slate-400">SKUs</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">24/7</div>
                  <div className="text-xs text-slate-400">Always On</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ TAB NAVIGATION ═══ */}
      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-2 gap-1 sm:gap-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-violet-500 text-white'
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

      {/* ═══ MAIN CONTENT ═══ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">

        {/* ─── FEATURES & CATEGORIES TAB ─── */}
        {activeTab === 'features' && (
          <div className="space-y-8">

            {/* Product Categories */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-violet-400" />
                Product Categories (3,000+ SKUs)
              </h2>
              <p className="text-slate-400 text-sm mb-6">
                Six curated categories stocked in every dark store. Tap to expand and see what&apos;s available.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {productCategories.map((cat) => (
                  <div key={cat.name} className={`${cat.bg} rounded-xl border ${cat.border} overflow-hidden`}>
                    <button
                      onClick={() => setExpandedCategory(expandedCategory === cat.name ? null : cat.name)}
                      className="w-full flex items-center justify-between p-4"
                    >
                      <div className="flex items-center gap-3">
                        <cat.icon className={`w-6 h-6 ${cat.color}`} />
                        <div className="text-left">
                          <span className="text-white font-bold">{cat.name}</span>
                          <span className={`ml-2 text-xs ${cat.color}`}>{cat.skuCount} SKUs</span>
                        </div>
                      </div>
                      {expandedCategory === cat.name
                        ? <ChevronUp className={`w-5 h-5 ${cat.color}`} />
                        : <ChevronDown className={`w-5 h-5 ${cat.color}`} />
                      }
                    </button>
                    {expandedCategory === cat.name && (
                      <div className="px-4 pb-4">
                        <div className="grid grid-cols-2 gap-2">
                          {cat.items.map((item, j) => (
                            <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                              <CheckCircle className={`w-3.5 h-3.5 ${cat.color} flex-shrink-0`} />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-green-400" />
                Order to Doorstep in 15 Minutes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                {howItWorks.map((step, i) => (
                  <div key={i} className="relative">
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 text-center h-full">
                      <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center mx-auto mb-3`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs text-slate-500 mb-1">Step {step.step}</div>
                      <h3 className="text-white font-bold text-sm mb-1">{step.title}</h3>
                      <p className="text-slate-400 text-xs">{step.description}</p>
                      <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 bg-green-500/20 rounded-full">
                        <Clock className="w-3 h-3 text-green-400" />
                        <span className="text-green-400 text-[10px] font-bold">{step.time}</span>
                      </div>
                    </div>
                    {i < howItWorks.length - 1 && (
                      <div className="hidden sm:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                        <ChevronRight className="w-4 h-4 text-slate-600" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Dark Store Operations */}
            <div className="bg-gradient-to-r from-violet-500/10 to-indigo-500/5 rounded-xl p-4 sm:p-6 border border-violet-500/30">
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Warehouse className="w-5 h-5 text-violet-400" />
                Dark Store Operations
              </h2>
              <p className="text-slate-400 text-sm mb-6">
                QuickDrop operates its own micro-warehouses in high-density residential and commercial areas.
                Own inventory, own picking, own quality control -- delivered by Wasil riders.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { label: 'Store Size', value: darkStoreSpecs.size, color: 'text-violet-400' },
                  { label: 'SKUs per Store', value: darkStoreSpecs.skus, color: 'text-blue-400' },
                  { label: 'Coverage Radius', value: darkStoreSpecs.radius, color: 'text-green-400' },
                  { label: 'Avg Pick Time', value: darkStoreSpecs.avgPick, color: 'text-orange-400' },
                  { label: 'Staff per Store', value: darkStoreSpecs.staff, color: 'text-cyan-400' },
                  { label: 'Investment/Store', value: darkStoreSpecs.investment, color: 'text-pink-400' },
                  { label: 'Break-even', value: darkStoreSpecs.breakeven, color: 'text-emerald-400' },
                  { label: 'Delivery Radius', value: '3 km max', color: 'text-[#c9a227]' },
                ].map((spec, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                    <div className={`text-lg font-bold ${spec.color}`}>{spec.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{spec.label}</div>
                  </div>
                ))}
              </div>

              {/* Dark Store Locations */}
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-violet-400" />
                Planned Dark Store Locations (12 Stores)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {darkStoreLocations.map((loc, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-3 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-violet-400" />
                      <span className="text-white font-medium text-sm">{loc.area}</span>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-violet-400">{loc.status}</span>
                      <span className="text-[10px] text-slate-500">{loc.timeline}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Density: {loc.density}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Features */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                Platform Technology
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {platformFeatures.map((feat, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <feat.icon className={`w-6 h-6 ${feat.color}`} />
                      <h3 className="text-white font-bold text-sm">{feat.feature}</h3>
                    </div>
                    <p className="text-slate-400 text-xs">{feat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ecosystem Integrations */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Network className="w-5 h-5 text-[#c9a227]" />
                Nuqta Ecosystem Integrations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ecosystemLinks.map((link, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <link.icon className={`w-6 h-6 ${link.color}`} />
                      <h3 className="text-white font-bold text-sm">{link.product}</h3>
                    </div>
                    <p className="text-slate-400 text-xs">{link.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── PRICING & ECONOMICS TAB ─── */}
        {activeTab === 'pricing' && (
          <div className="space-y-8">

            {/* Pricing Tiers */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-violet-400" />
                Pricing Plans
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pricingTiers.map((tier, i) => (
                  <div key={i} className={`${tier.bg} rounded-xl p-6 border-2 ${tier.color} relative ${tier.highlighted ? 'ring-2 ring-violet-400/50' : ''}`}>
                    {tier.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Most Popular
                      </div>
                    )}
                    <h3 className={`text-lg font-bold ${tier.textColor} mb-1`}>{tier.tier}</h3>
                    <div className="text-2xl font-black text-white mb-2">{tier.price}</div>
                    <p className="text-slate-400 text-sm mb-4">{tier.description}</p>
                    <div className="space-y-2">
                      {tier.features.map((feat, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle className={`w-4 h-4 ${tier.textColor} flex-shrink-0`} />
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unit Economics */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-orange-400" />
                Unit Economics (Per Order at Scale)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {unitEconomics.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-medium text-sm">{item.metric}</span>
                      <span className="text-violet-400 font-bold text-sm">{item.value}</span>
                    </div>
                    <p className="text-slate-500 text-xs">{item.detail}</p>
                  </div>
                ))}
              </div>
              {/* Margin Waterfall */}
              <div className="mt-6 bg-gradient-to-r from-violet-500/10 to-blue-500/10 rounded-xl p-4 sm:p-6 border border-violet-500/30">
                <h3 className="text-white font-bold mb-4">Order Margin Waterfall (45 AED Avg Order)</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Product Revenue', value: '45 AED', bar: '100%', color: 'bg-violet-500' },
                    { label: 'COGS (Wholesale)', value: '-33 AED', bar: '73%', color: 'bg-red-500' },
                    { label: 'Gross Margin', value: '12 AED', bar: '27%', color: 'bg-emerald-500' },
                    { label: 'Delivery Fee Income', value: '+5 AED', bar: '11%', color: 'bg-blue-500' },
                    { label: 'Rider Cost', value: '-6 AED', bar: '13%', color: 'bg-orange-500' },
                    { label: 'Pick/Pack + Overhead', value: '-5 AED', bar: '11%', color: 'bg-slate-500' },
                    { label: 'Net Margin', value: '6 AED (13%)', bar: '13%', color: 'bg-green-500' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-slate-300 text-sm w-40 flex-shrink-0">{row.label}</span>
                      <div className="flex-1 bg-slate-800 rounded-full h-4 overflow-hidden">
                        <div className={`h-full ${row.color} rounded-full`} style={{ width: row.bar }}></div>
                      </div>
                      <span className="text-white font-bold text-sm w-28 text-right">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Revenue Model */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-green-400" />
                Revenue Model
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <stream.icon className={`w-6 h-6 ${stream.color}`} />
                        <h3 className="text-white font-bold">{stream.source}</h3>
                      </div>
                      <span className={`text-lg font-black ${stream.color}`}>{stream.share}</span>
                    </div>
                    <p className="text-slate-400 text-sm mb-2">{stream.desc}</p>
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-slate-800 rounded-lg">
                      <span className="text-slate-300 text-xs font-medium">{stream.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Revenue Projection */}
              <div className="mt-6 bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-4 sm:p-6 border border-green-500/30">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <LineChart className="w-5 h-5 text-green-400" />
                  Revenue Projections
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-3 px-4 text-slate-400">Metric</th>
                        <th className="text-right py-3 px-4 text-slate-400">Year 1</th>
                        <th className="text-right py-3 px-4 text-slate-400">Year 2</th>
                        <th className="text-right py-3 px-4 text-slate-400">Year 3</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: 'Dark Stores', y1: '4', y2: '8', y3: '12' },
                        { metric: 'Orders/Day', y1: '2,000', y2: '8,000', y3: '20,000' },
                        { metric: 'GMV (AED M)', y1: '33', y2: '131', y3: '328' },
                        { metric: 'Revenue (AED M)', y1: '8', y2: '35', y3: '85' },
                        { metric: 'QuickDrop+ Subs', y1: '5K', y2: '25K', y3: '80K' },
                        { metric: 'Net Profit (AED M)', y1: '-2', y2: '5', y3: '22' },
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-slate-700/50">
                          <td className="py-3 px-4 text-slate-300">{row.metric}</td>
                          <td className="py-3 px-4 text-right text-white">{row.y1}</td>
                          <td className="py-3 px-4 text-right text-white">{row.y2}</td>
                          <td className={`py-3 px-4 text-right font-bold ${row.metric === 'Net Profit (AED M)' && row.y3.startsWith('-') ? 'text-red-400' : row.metric === 'Net Profit (AED M)' ? 'text-emerald-400' : 'text-white'}`}>{row.y3}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── MARKET & COMPETITION TAB ─── */}
        {activeTab === 'market' && (
          <div className="space-y-8">

            {/* Market Data */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                Market Opportunity
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {marketData.map((data, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                    <h3 className="text-white font-bold text-sm mb-2">{data.market}</h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-black text-green-400">{data.value}</span>
                      <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">{data.growth}</span>
                    </div>
                    <p className="text-slate-500 text-xs">{data.detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-4 text-center border border-green-500/30">
                <div className="text-2xl font-black text-green-400">$500M+ UAE Quick Commerce Market</div>
                <div className="text-sm text-slate-400 mt-1">Growing at 40% YoY -- QuickDrop targeting 5-8% share by Year 3</div>
              </div>
            </div>

            {/* Competitor Comparison */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-violet-400" />
                Competitive Landscape
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400">Platform</th>
                      <th className="text-center py-3 px-4 text-slate-400">Delivery</th>
                      <th className="text-center py-3 px-4 text-slate-400">SKUs</th>
                      <th className="text-center py-3 px-4 text-slate-400">Own Stock</th>
                      <th className="text-center py-3 px-4 text-slate-400">Subscription</th>
                      <th className="text-center py-3 px-4 text-slate-400">Rewards</th>
                      <th className="text-center py-3 px-4 text-slate-400">Ecosystem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((comp, i) => (
                      <tr key={i} className={`border-b border-slate-700/50 ${comp.highlight ? 'bg-violet-500/10' : ''}`}>
                        <td className={`py-3 px-4 font-bold ${comp.highlight ? 'text-violet-400' : 'text-white'}`}>{comp.name}</td>
                        <td className={`py-3 px-4 text-center ${comp.highlight ? 'text-green-400 font-bold' : 'text-slate-300'}`}>{comp.delivery}</td>
                        <td className="py-3 px-4 text-center text-slate-300">{comp.skus}</td>
                        <td className="py-3 px-4 text-center text-slate-300">{comp.ownInventory}</td>
                        <td className="py-3 px-4 text-center text-slate-300">{comp.subscription}</td>
                        <td className={`py-3 px-4 text-center ${comp.highlight ? 'text-[#c9a227] font-bold' : 'text-slate-300'}`}>{comp.coins}</td>
                        <td className={`py-3 px-4 text-center ${comp.highlight ? 'text-violet-400 font-bold' : 'text-slate-300'}`}>{comp.ecosystem}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Competitive Advantages */}
            <div className="bg-gradient-to-r from-violet-500/10 to-indigo-500/5 rounded-xl p-4 sm:p-6 border border-violet-500/30">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-violet-400" />
                QuickDrop Competitive Advantages
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {competitiveAdvantages.map((adv, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <adv.icon className={`w-6 h-6 ${adv.color}`} />
                      <h3 className="text-white font-bold text-sm">{adv.advantage}</h3>
                    </div>
                    <p className="text-slate-400 text-xs">{adv.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why QuickDrop Wins */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-pink-400" />
                Why QuickDrop Wins
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-400" />
                    Competitor Weaknesses
                  </h3>
                  <div className="space-y-2">
                    {[
                      'Noon Minutes: No loyalty program, no BNPL, limited to Noon ecosystem',
                      'Talabat Mart: Slower 20-30 min delivery, no financial ecosystem',
                      'JIFFY: Smaller SKU catalog, no subscription model, standalone app',
                      'All competitors: No integrated payment wallet, no coin earning system',
                    ].map((weakness, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <ChevronRight className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                        {weakness}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    QuickDrop Moat
                  </h3>
                  <div className="space-y-2">
                    {[
                      'Full Nuqta ecosystem: NuqtaPay + Coins + Hawil Card + Qist BNPL',
                      '15-minute guaranteed SLA -- or next delivery is free',
                      '24/7 always-on operations covering late night and early morning',
                      'QuickDrop+ at 19 AED/mo makes unlimited deliveries a no-brainer',
                      'Wasil shared rider fleet = lower cost structure than dedicated fleets',
                      'AI-powered demand prediction ensures 98% in-stock rate',
                    ].map((moat, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        {moat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── PITCH DECK TAB ─── */}
        {activeTab === 'deck' && (
          <div className="space-y-8">
            {/* Investment Thesis */}
            <div className="bg-gradient-to-r from-violet-500/20 to-violet-500/5 rounded-2xl p-6 border border-violet-500/30">
              <h2 className="text-2xl font-bold text-white mb-2">Investment Thesis</h2>
              <p className="text-slate-300 leading-relaxed">Quick-commerce is the fastest-growing retail segment globally. QuickDrop captures impulse purchases with 15-min guaranteed delivery from strategically placed dark stores. High margins (25-35%), high frequency (3-4x/week), and Nuqta Coins create unbreakable habit loops. Shared Wasil fleet makes unit economics profitable from Day 1.</p>
            </div>

            {/* Market Opportunity */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Market Opportunity</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'TAM', value: '$3.2B', detail: 'UAE Convenience Retail Market' },
                  { label: 'SAM', value: '$500M+', detail: 'UAE Quick-Commerce (40% YoY)' },
                  { label: 'SOM', value: '$40M', detail: 'Year 3 Target (8% share)' },
                ].map(m => (
                  <div key={m.label} className="bg-slate-800/30 rounded-xl p-4 text-center border border-slate-700/50">
                    <div className="text-xs text-slate-400">{m.label}</div>
                    <div className="text-2xl font-black text-white mt-1">{m.value}</div>
                    <div className="text-xs text-slate-500 mt-1">{m.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Differentiators */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Key Differentiators</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: '15-Minute Guarantee', desc: 'Delivered in 15 min or next delivery free -- SLA backed' },
                  { title: 'Own Dark Store Inventory', desc: 'Full quality control from shelf to doorstep' },
                  { title: '2X Nuqta Coins', desc: 'Highest coin earn rate in quick-commerce, 3X for subscribers' },
                  { title: 'Wasil Shared Fleet', desc: 'Zero incremental fleet cost -- rider arrives as picking completes' },
                  { title: 'Qist BNPL', desc: 'Split electronics and bulk orders into 3 installments at 0%' },
                  { title: '24/7 Always-On', desc: 'Dark stores operate around the clock for any-time delivery' },
                ].map((d, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-bold text-sm">{d.title}</div>
                      <div className="text-slate-400 text-xs">{d.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Projections */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Financial Projections (3-Year)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-slate-700/50">
                    {['Year', 'Dark Stores', 'Revenue (AED)', 'Net Profit (AED)'].map(h => (
                      <th key={h} className="text-left px-3 py-2 text-[#c9a227] font-semibold">{h}</th>
                    ))}
                  </tr></thead>
                  <tbody>
                    {[
                      { y: 'Year 1', s: '4', r: '8M', p: '1.5M' },
                      { y: 'Year 2', s: '8', r: '35M', p: '12M' },
                      { y: 'Year 3', s: '12', r: '95M', p: '38M' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-700/30">
                        <td className="px-3 py-2 text-white font-medium">{row.y}</td>
                        <td className="px-3 py-2 text-slate-300">{row.s}</td>
                        <td className="px-3 py-2 text-violet-400 font-bold">{row.r}</td>
                        <td className="px-3 py-2 text-emerald-400 font-bold">{row.p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Comparable Companies */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Comparable Companies</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Getir', val: '$11.8B', market: 'Turkey/Global' },
                  { name: 'Gopuff', val: '$15B', market: 'USA' },
                  { name: 'Flink', val: '$5B', market: 'Europe' },
                  { name: 'Zepto', val: '$3.6B', market: 'India' },
                ].map((c, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
                    <div className="text-white font-bold text-sm">{c.name}</div>
                    <div className="text-violet-400 text-xl font-black mt-1">{c.val}</div>
                    <div className="text-slate-500 text-xs mt-1">{c.market}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unicorn Path */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ArrowUpRight className="w-5 h-5" /> Unicorn Path
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { stage: 'Seed', val: '$20M', time: '2027 H1', color: 'text-emerald-400' },
                  { stage: '100K Users', val: '$80M', time: '2027 H2', color: 'text-blue-400' },
                  { stage: 'GCC Expansion', val: '$300M', time: '2028', color: 'text-purple-400' },
                  { stage: 'Multi-Country', val: '$1B+', time: '2029', color: 'text-[#c9a227]' },
                ].map((m, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/30">
                    <div className={`text-xs font-bold ${m.color} uppercase`}>{m.stage}</div>
                    <div className={`text-xl font-bold ${m.color} mt-1`}>{m.val}</div>
                    <div className="text-slate-500 text-xs mt-1">{m.time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RTMN Multiplier */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-transparent rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-[#c9a227] mb-3">RTMN Ecosystem Multiplier</h3>
              <p className="text-slate-300 text-sm mb-4">QuickDrop inside RTMN is 10x more valuable than a standalone quick-commerce app. Six ecosystem products create compounding network effects.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  'Wasil Fleet: Zero incremental delivery cost',
                  'NuqtaPay: One-tap checkout, 30%+ higher conversion',
                  'Nuqta Coins: 2-3X loyalty creates switching cost',
                  'Adzy: Brand placement revenue stream',
                  'Qist BNPL: 40%+ higher AOV on electronics',
                  'Inventora: In-house inventory management',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-[#c9a227] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Navigation Footer */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/wasil" className="inline-flex items-center gap-2 px-6 py-3 bg-violet-500 text-white rounded-xl font-bold hover:bg-violet-400 transition-colors">
              <Truck className="w-5 h-5" /> Wasil Super-App
            </Link>
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Building2 className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Globe className="w-5 h-5" /> RTMN Ecosystem
            </Link>
            <Link href="/rtmn-dashboard" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <BarChart3 className="w-5 h-5" /> RTMN Dashboard
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
