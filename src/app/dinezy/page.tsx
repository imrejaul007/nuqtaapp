'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Utensils, Coffee, ChefHat, PartyPopper, Apple, Moon,
  Clock, Truck, Star, Zap, Shield, Target, Users, TrendingUp,
  CheckCircle, ArrowRight, ChevronDown, ChevronUp, ChevronRight,
  Building2, Globe, DollarSign, CreditCard, Coins, Crown,
  Wallet, Award, Store, Smartphone, BarChart3, PieChart,
  LineChart, Calculator, Percent, BadgePercent, CircleDollarSign,
  ArrowUpRight, ShoppingCart, Heart, Gift, Bell, Search,
  MapPin, Timer, Package, Layers, Sparkles, Filter,
  UserCheck, Lock, Eye, Bike, AlertTriangle, Rocket,
  Database, Network, Receipt, Phone, Calendar, RefreshCw,
  Settings, MessageSquare, Home, Play, Banknote, Briefcase
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── HERO STATS ───
const heroStats = [
  { label: 'Restaurant Partners', value: '5,000+', icon: Store, color: 'text-orange-400' },
  { label: 'Delivery SLA', value: '45', suffix: 'min', icon: Timer, color: 'text-green-400' },
  { label: 'Avg Order Value', value: '65', suffix: 'AED', icon: Receipt, color: 'text-cyan-400' },
  { label: 'Nuqta Coins', value: '3X', suffix: 'earning', icon: Coins, color: 'text-[#c9a227]' },
  { label: 'Food Categories', value: '6', suffix: 'verticals', icon: Utensils, color: 'text-pink-400' },
  { label: 'Delivery Cities', value: '7', suffix: 'UAE', icon: MapPin, color: 'text-violet-400' },
];

// ─── FOOD CATEGORIES ───
const foodCategories = [
  {
    id: 'restaurant',
    name: 'Restaurant Delivery',
    arabic: 'توصيل مطاعم',
    icon: Utensils,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/40',
    description: 'Fine dining, casual restaurants, and local eateries delivered to your door',
    features: ['Cuisine filters (Arabic, Asian, Western, Indian)', 'Meal customization & special requests', 'Group ordering for offices', 'Scheduled delivery slots', 'Live kitchen prep tracking', 'Dietary preference tags'],
    avgOrder: '75 AED',
    partners: '2,500+',
    sla: '35 min',
  },
  {
    id: 'cafe',
    name: 'Cafe & Coffee',
    arabic: 'كافيه وقهوة',
    icon: Coffee,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/40',
    description: 'Specialty coffee, pastries, breakfast items, and cafe favorites',
    features: ['Barista-quality coffee delivery', 'Temperature-controlled bags', 'Morning rush priority', 'Subscription coffee plans', 'Pastry & dessert bundles', 'Loyalty stamp cards'],
    avgOrder: '40 AED',
    partners: '800+',
    sla: '25 min',
  },
  {
    id: 'cloud',
    name: 'Cloud Kitchens',
    arabic: 'مطابخ سحابية',
    icon: ChefHat,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/40',
    description: 'Virtual restaurant brands optimized for delivery-first experience',
    features: ['Delivery-optimized packaging', 'Exclusive Dinezy brands', 'Multi-brand ordering', 'Faster prep times', 'Lower prices (no rent overhead)', 'Quality-controlled kitchens'],
    avgOrder: '55 AED',
    partners: '600+',
    sla: '30 min',
  },
  {
    id: 'catering',
    name: 'Catering & Events',
    arabic: 'تموين وفعاليات',
    icon: PartyPopper,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/40',
    description: 'Large-scale catering for corporate events, weddings, and private gatherings',
    features: ['Bulk order management', 'Menu tasting sessions', 'Event coordination support', 'Setup & service crew', 'Qist BNPL for large orders', 'Custom menu creation'],
    avgOrder: '2,500 AED',
    partners: '350+',
    sla: 'Scheduled',
  },
  {
    id: 'healthy',
    name: 'Healthy Meals',
    arabic: 'وجبات صحية',
    icon: Apple,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/40',
    description: 'Calorie-counted, macro-tracked meals from certified nutritionists',
    features: ['Macro & calorie tracking', 'Keto, vegan, paleo options', 'Weekly meal plan subscriptions', 'Nutritionist-approved menus', 'Fitness app integration', 'Post-workout meals'],
    avgOrder: '60 AED',
    partners: '400+',
    sla: '40 min',
  },
  {
    id: 'latenight',
    name: 'Late Night',
    arabic: 'وجبات ليلية',
    icon: Moon,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/40',
    description: 'Satisfy midnight cravings with 24/7 delivery from night-owl kitchens',
    features: ['24/7 availability', 'Late-night comfort food', 'Express 20-min delivery', 'Snack bundles & combos', 'Student discounts after 11PM', 'Night shift worker specials'],
    avgOrder: '45 AED',
    partners: '350+',
    sla: '20 min',
  },
];

// ─── HOW IT WORKS ───
const howItWorks = [
  { step: 1, title: 'Browse & Discover', description: 'Explore restaurants by cuisine, rating, distance, or mood', icon: Search },
  { step: 2, title: 'Customize Order', description: 'Add items, customize meals, apply dietary filters', icon: Filter },
  { step: 3, title: 'Pay with NuqtaPay', description: 'Checkout via NuqtaPay, Hawil Card, Qist BNPL, or cash', icon: CreditCard },
  { step: 4, title: 'Track in Real-Time', description: 'Watch your order from kitchen prep to doorstep delivery', icon: MapPin },
  { step: 5, title: 'Earn Nuqta Coins', description: 'Get 3X coins on every order, redeem across ecosystem', icon: Coins },
];

// ─── PLATFORM FEATURES ───
const platformFeatures = [
  { name: 'Smart Search & Discovery', description: 'AI-powered restaurant recommendations based on taste, budget, and past orders', icon: Search, color: 'text-blue-400' },
  { name: 'Real-Time GPS Tracking', description: 'Live tracking from kitchen to doorstep with accurate ETA updates', icon: MapPin, color: 'text-green-400' },
  { name: 'Group Ordering', description: 'Split bills, individual customization, single delivery for office or family', icon: Users, color: 'text-purple-400' },
  { name: 'Scheduled Delivery', description: 'Pre-order meals for specific time slots - breakfast, lunch, or dinner', icon: Calendar, color: 'text-cyan-400' },
  { name: 'Dietary Filters', description: 'Halal, vegan, gluten-free, keto, nut-free - find what fits your diet', icon: Filter, color: 'text-pink-400' },
  { name: 'Dinezy+ Subscription', description: 'Free delivery, priority dispatch, exclusive deals for 29 AED/month', icon: Crown, color: 'text-[#c9a227]' },
  { name: 'Re-Order in One Tap', description: 'Quickly reorder your favorites from order history with a single tap', icon: RefreshCw, color: 'text-orange-400' },
  { name: 'Live Kitchen Status', description: 'See when your order is being prepared, packed, and picked up', icon: Eye, color: 'text-emerald-400' },
  { name: 'Rating & Reviews', description: 'Community-driven reviews with photo uploads and detailed ratings', icon: Star, color: 'text-yellow-400' },
];

// ─── ECOSYSTEM INTEGRATIONS ───
const ecosystemIntegrations = [
  { name: 'NuqtaPay', description: 'Seamless checkout with stored cards, Hawil Card, or digital wallet', icon: Wallet, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { name: 'Qist BNPL', description: 'Buy now pay later for large catering orders - split into 3-12 installments', icon: Calculator, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { name: 'Nuqta Coins', description: '3X coin earning on every order. Redeem for free meals or cross-ecosystem', icon: Coins, color: 'text-[#c9a227]', bg: 'bg-[#c9a227]/10' },
  { name: 'Wasil Fleet', description: 'Shared delivery fleet across all Wasil verticals for maximum efficiency', icon: Bike, color: 'text-orange-400', bg: 'bg-orange-500/10' },
  { name: 'Adzy Promotions', description: 'Restaurant sponsored listings, banner ads, and push notification campaigns', icon: Target, color: 'text-pink-400', bg: 'bg-pink-500/10' },
  { name: 'BizOne Dashboard', description: 'Restaurant partners manage menus, orders, and analytics in one place', icon: BarChart3, color: 'text-violet-400', bg: 'bg-violet-500/10' },
];

// ─── PRICING TIERS ───
const pricingTiers = [
  {
    name: 'Dinezy Free',
    price: '0',
    period: 'per order',
    description: 'Standard delivery for everyone',
    features: ['Standard delivery (45 min)', 'Full restaurant catalog', '1X Nuqta Coins earning', 'Basic order tracking', 'Community ratings access'],
    color: 'border-slate-500/50',
    badge: '',
  },
  {
    name: 'Dinezy+',
    price: '29',
    period: 'AED/month',
    description: 'Unlimited free delivery & perks',
    features: ['Free delivery on all orders', 'Priority dispatch (30 min)', '3X Nuqta Coins earning', 'Exclusive restaurant deals', 'Early access to new brands', 'No surge pricing', 'Monthly surprise reward'],
    color: 'border-orange-500',
    badge: 'Most Popular',
  },
  {
    name: 'Dinezy Business',
    price: '149',
    period: 'AED/month',
    description: 'For offices & corporate teams',
    features: ['Everything in Dinezy+', 'Up to 25 team members', 'Centralized billing', 'Expense reporting', 'Dedicated account manager', 'Catering discounts (15%)', 'Qist BNPL for all orders'],
    color: 'border-[#c9a227]',
    badge: 'Enterprise',
  },
];

// ─── UNIT ECONOMICS ───
const unitEconomics = {
  avgOrderValue: 65,
  deliveryFee: 8,
  commissionPercent: '18-25%',
  commissionAvg: 14,
  surgeAvg: 2,
  totalRevenue: 24,
  riderCost: 7,
  operatingCost: 3,
  netRevenue: 14,
  cogsPerOrder: 10,
  marginPerOrder: '4-6 AED',
};

// ─── REVENUE MODEL ───
const revenueStreams = [
  { source: 'Delivery Commission', desc: 'Percentage of order value from restaurant partners', value: '18-25%', share: '40%', color: 'text-orange-400', bg: 'bg-orange-500/10' },
  { source: 'Restaurant Fees', desc: 'Onboarding, listing fees, premium placement charges', value: '99-499 AED/mo', share: '25%', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { source: 'Subscription Dinezy+', desc: 'Monthly subscription for free delivery and perks', value: '29 AED/mo', share: '20%', color: 'text-purple-400', bg: 'bg-purple-500/10' },
  { source: 'Adzy Promotions', desc: 'Sponsored listings, banners, push campaigns for restaurants', value: 'CPC/CPM', share: '15%', color: 'text-pink-400', bg: 'bg-pink-500/10' },
];

// ─── COMPETITORS ───
const competitors = [
  {
    name: 'Talabat',
    description: 'Market leader in GCC food delivery, owned by Delivery Hero',
    strengths: ['Largest restaurant network', 'Strong brand recognition', 'Grocery + food combined'],
    weaknesses: ['High commission (30%+)', 'No loyalty ecosystem', 'Generic experience'],
    marketShare: '45%',
    color: 'text-orange-400',
  },
  {
    name: 'Deliveroo',
    description: 'UK-based premium food delivery with strong UAE presence',
    strengths: ['Premium restaurant focus', 'Deliveroo Plus subscription', 'Editions (cloud kitchens)'],
    weaknesses: ['Higher prices', 'Limited to urban areas', 'No payment ecosystem'],
    marketShare: '25%',
    color: 'text-cyan-400',
  },
  {
    name: 'Careem Food',
    description: 'Super-app food delivery backed by Uber, strong ride-hailing base',
    strengths: ['Existing user base from rides', 'Super-app synergies', 'Careem Pay integration'],
    weaknesses: ['Food is secondary focus', 'Smaller restaurant network', 'Less food-specific features'],
    marketShare: '15%',
    color: 'text-green-400',
  },
];

// ─── COMPETITIVE ADVANTAGES ───
const competitiveAdvantages = [
  { advantage: 'Nuqta Ecosystem Lock-in', description: 'Users earn Nuqta Coins, pay with NuqtaPay, use Qist BNPL - creating deep retention', icon: Network },
  { advantage: 'Lower Merchant Commission', description: '18-25% vs industry 30%+ - attracting more restaurants and passing savings to users', icon: Percent },
  { advantage: 'Wasil Shared Fleet', description: 'Riders deliver across all 24 Wasil verticals, lowering per-delivery cost significantly', icon: Bike },
  { advantage: 'Niche Category Depth', description: '6 dedicated food verticals vs competitors\' single-category approach', icon: Layers },
  { advantage: 'BizOne Integration', description: 'Restaurants manage Dinezy alongside POS, inventory, and analytics in one dashboard', icon: Store },
  { advantage: 'Adzy-Powered Growth', description: 'Built-in advertising platform helps restaurants grow without third-party ad spend', icon: Target },
];

// ─── MARKET DATA ───
const marketData = {
  totalMarket: '$4.5B',
  uaeMarket: '$1.8B',
  growth: '15% YoY',
  penetration: '38%',
  avgOrdersPerUser: '4.2/month',
  projectedUsers: '500K by 2028',
};

// ─── TABS ───
const tabs = [
  { id: 'features', label: 'Features', icon: Zap },
  { id: 'pricing', label: 'Pricing & Economics', icon: DollarSign },
  { id: 'market', label: 'Market & Competition', icon: TrendingUp },
  { id: 'deck', label: 'Pitch Deck', icon: Briefcase },
];

export default function DinezyPage() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('features');

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">

      {/* ═══════════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-red-900/20 via-orange-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/wasil" className="text-slate-400 hover:text-white text-sm flex items-center gap-1 transition-colors">
              <Truck className="w-4 h-4" /> Wasil
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-600" />
            <span className="text-orange-400 text-sm font-medium">Dinezy</span>
          </div>

          <div className="flex items-start gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/20">
              <Utensils className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                Dinezy <span className="text-orange-400 text-xl sm:text-2xl font-arabic">داينزي</span>
              </h1>
              <p className="text-slate-400 text-base sm:text-lg mt-1">
                Niche Food Delivery Under the Wasil Brand
              </p>
              <p className="text-slate-500 text-sm mt-2 max-w-2xl">
                Dedicated to restaurants, cafes, cloud kitchens, catering, healthy meals, and late-night cravings.
                Part of the Wasil delivery ecosystem with 24 verticals powered by NuqtaPay, Nuqta Coins, and Qist BNPL.
              </p>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {heroStats.map((stat, i) => (
              <div key={i} className="bg-slate-800/40 rounded-xl p-3 border border-slate-700/50 text-center">
                <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-1`} />
                <div className={`text-lg sm:text-xl font-black ${stat.color}`}>
                  {stat.value}{stat.suffix && <span className="text-xs font-normal text-slate-400 ml-1">{stat.suffix}</span>}
                </div>
                <div className="text-slate-500 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* TAB NAVIGATION */}
      {/* ═══════════════════════════════════════════ */}
      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/50'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* FEATURES TAB */}
      {/* ═══════════════════════════════════════════ */}
      {activeTab === 'features' && (
        <>
          {/* ──── Food Categories ──── */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">6 Food Categories</h2>
            <p className="text-slate-400 text-sm mb-6">Each vertical is purpose-built for its food type with specialized features and delivery handling.</p>

            <div className="space-y-4">
              {foodCategories.map((cat) => (
                <div key={cat.id} className={`${cat.bg} border ${cat.border} rounded-xl overflow-hidden`}>
                  <button
                    onClick={() => setExpandedFeature(expandedFeature === cat.id ? null : cat.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${cat.bg} flex items-center justify-center border ${cat.border}`}>
                        <cat.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${cat.color}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className={`text-base sm:text-lg font-bold ${cat.color}`}>{cat.name}</h3>
                          <span className="text-slate-500 text-xs">{cat.arabic}</span>
                        </div>
                        <p className="text-slate-400 text-xs sm:text-sm line-clamp-1">{cat.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="hidden sm:flex gap-3 text-xs">
                        <span className="text-slate-400">Avg: <span className="text-white font-bold">{cat.avgOrder}</span></span>
                        <span className="text-slate-400">SLA: <span className="text-white font-bold">{cat.sla}</span></span>
                      </div>
                      {expandedFeature === cat.id ? (
                        <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      )}
                    </div>
                  </button>

                  {expandedFeature === cat.id && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                          <h4 className="text-white font-bold mb-3">Features</h4>
                          <ul className="space-y-1.5">
                            {cat.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                          <h4 className="text-white font-bold mb-3">Key Metrics</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-slate-400 text-sm">Avg Order Value</span>
                              <span className={`font-bold ${cat.color}`}>{cat.avgOrder}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-slate-400 text-sm">Partner Count</span>
                              <span className="font-bold text-white">{cat.partners}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-slate-400 text-sm">Delivery SLA</span>
                              <span className="font-bold text-emerald-400">{cat.sla}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ──── How It Works ──── */}
          <section className="bg-slate-800/20 border-y border-slate-700/50 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">How Dinezy Works</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {howItWorks.map((step, i) => (
                  <div key={i} className="relative">
                    <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                      <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-3">
                        <step.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <div className="text-xs text-orange-400 font-bold mb-1">Step {step.step}</div>
                      <div className="text-white font-bold text-sm mb-1">{step.title}</div>
                      <p className="text-xs text-slate-400">{step.description}</p>
                    </div>
                    {i < 4 && <ChevronRight className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600" size={20} />}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ──── Platform Features ──── */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Platform Features</h2>
            <p className="text-slate-400 text-sm mb-6">Everything you need for a seamless food delivery experience.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {platformFeatures.map((feature, i) => (
                <div key={i} className="bg-slate-800/40 rounded-xl p-5 border border-slate-700/50 hover:border-orange-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    <h3 className="text-white font-bold text-sm">{feature.name}</h3>
                  </div>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ──── Ecosystem Integrations ──── */}
          <section className="bg-slate-800/20 border-y border-slate-700/50 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Ecosystem Integrations</h2>
              <p className="text-slate-400 text-sm mb-6">Dinezy plugs into every Nuqta product for a unified experience.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ecosystemIntegrations.map((item, i) => (
                  <div key={i} className={`${item.bg} rounded-xl p-5 border border-slate-700/50`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center border border-slate-700/50`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <h3 className={`font-bold ${item.color}`}>{item.name}</h3>
                    </div>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ═══════════════════════════════════════════ */}
      {/* PRICING & ECONOMICS TAB */}
      {/* ═══════════════════════════════════════════ */}
      {activeTab === 'pricing' && (
        <>
          {/* ──── Pricing Tiers ──── */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Pricing Plans</h2>
            <p className="text-slate-400 text-sm mb-6">For customers: free, subscription, and business tiers.</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {pricingTiers.map((tier, i) => (
                <div key={i} className={`bg-slate-800/50 rounded-xl p-6 border-2 ${tier.color} relative`}>
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">{tier.badge}</span>
                    </div>
                  )}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-black text-orange-400">{tier.price}</span>
                      <span className="text-slate-400 text-sm ml-1">{tier.period}</span>
                    </div>
                    <p className="text-slate-500 text-xs mt-2">{tier.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ──── Unit Economics ──── */}
          <section className="bg-slate-800/20 border-y border-slate-700/50 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Unit Economics Per Order</h2>

              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6 border border-slate-700/50">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-3 px-4 text-slate-400">Metric</th>
                        <th className="text-right py-3 px-4 text-slate-400">Value</th>
                        <th className="text-right py-3 px-4 text-slate-400">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white font-medium">Avg Order Value</td>
                        <td className="py-3 px-4 text-right text-orange-400 font-bold">{unitEconomics.avgOrderValue} AED</td>
                        <td className="py-3 px-4 text-right text-slate-500 text-xs">Across all 6 categories</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white font-medium">Delivery Fee</td>
                        <td className="py-3 px-4 text-right text-cyan-400 font-bold">{unitEconomics.deliveryFee} AED</td>
                        <td className="py-3 px-4 text-right text-slate-500 text-xs">Free for Dinezy+ members</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white font-medium">Commission Rate</td>
                        <td className="py-3 px-4 text-right text-purple-400 font-bold">{unitEconomics.commissionPercent}</td>
                        <td className="py-3 px-4 text-right text-slate-500 text-xs">Lower than industry 30%</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white font-medium">Avg Commission</td>
                        <td className="py-3 px-4 text-right text-green-400 font-bold">{unitEconomics.commissionAvg} AED</td>
                        <td className="py-3 px-4 text-right text-slate-500 text-xs">~21% of AOV</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white font-medium">Surge/Peak Avg</td>
                        <td className="py-3 px-4 text-right text-amber-400 font-bold">{unitEconomics.surgeAvg} AED</td>
                        <td className="py-3 px-4 text-right text-slate-500 text-xs">Peak hours only</td>
                      </tr>
                      <tr className="border-b border-slate-700/50 bg-emerald-500/5">
                        <td className="py-3 px-4 text-emerald-400 font-bold">Total Revenue/Order</td>
                        <td className="py-3 px-4 text-right text-emerald-400 font-bold">{unitEconomics.totalRevenue} AED</td>
                        <td className="py-3 px-4 text-right text-slate-500 text-xs">Commission + fee + surge</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white font-medium">Rider Cost</td>
                        <td className="py-3 px-4 text-right text-red-400 font-bold">-{unitEconomics.riderCost} AED</td>
                        <td className="py-3 px-4 text-right text-slate-500 text-xs">Shared Wasil fleet</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white font-medium">Operating Cost</td>
                        <td className="py-3 px-4 text-right text-red-400 font-bold">-{unitEconomics.operatingCost} AED</td>
                        <td className="py-3 px-4 text-right text-slate-500 text-xs">Tech, support, ops</td>
                      </tr>
                      <tr className="bg-[#c9a227]/10">
                        <td className="py-3 px-4 text-[#c9a227] font-bold">Net Margin/Order</td>
                        <td className="py-3 px-4 text-right text-[#c9a227] font-bold">{unitEconomics.marginPerOrder}</td>
                        <td className="py-3 px-4 text-right text-slate-500 text-xs">Before Adzy revenue</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* ──── Revenue Model ──── */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Revenue Model Breakdown</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {revenueStreams.map((stream, i) => (
                <div key={i} className={`${stream.bg} rounded-xl p-5 border border-slate-700/50`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`font-bold ${stream.color}`}>{stream.source}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${stream.bg} ${stream.color} font-bold border border-slate-700/50`}>
                      {stream.share} of revenue
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">{stream.desc}</p>
                  <div className="flex items-center gap-2">
                    <DollarSign className={`w-4 h-4 ${stream.color}`} />
                    <span className="text-white font-bold text-sm">{stream.value}</span>
                  </div>
                  {/* Revenue bar */}
                  <div className="mt-3 bg-slate-900/50 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        i === 0 ? 'bg-orange-500 w-[40%]' :
                        i === 1 ? 'bg-blue-500 w-[25%]' :
                        i === 2 ? 'bg-purple-500 w-[20%]' :
                        'bg-pink-500 w-[15%]'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Revenue summary */}
            <div className="mt-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-5 border border-orange-500/30">
              <div className="flex items-center gap-3 mb-3">
                <PieChart className="w-6 h-6 text-orange-400" />
                <h3 className="text-white font-bold">Revenue Mix Summary</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="text-center">
                  <div className="text-2xl font-black text-orange-400">40%</div>
                  <div className="text-xs text-slate-400">Delivery Commission</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-blue-400">25%</div>
                  <div className="text-xs text-slate-400">Restaurant Fees</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-purple-400">20%</div>
                  <div className="text-xs text-slate-400">Dinezy+ Subs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-pink-400">15%</div>
                  <div className="text-xs text-slate-400">Adzy Promotions</div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ═══════════════════════════════════════════ */}
      {/* MARKET & COMPETITION TAB */}
      {/* ═══════════════════════════════════════════ */}
      {activeTab === 'market' && (
        <>
          {/* ──── Market Data ──── */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">UAE Food Delivery Market</h2>
            <p className="text-slate-400 text-sm mb-6">Key market statistics and growth indicators.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { label: 'GCC Market Size', value: marketData.totalMarket, color: 'text-green-400', icon: Globe },
                { label: 'UAE Market', value: marketData.uaeMarket, color: 'text-blue-400', icon: Building2 },
                { label: 'Annual Growth', value: marketData.growth, color: 'text-cyan-400', icon: TrendingUp },
                { label: 'Market Penetration', value: marketData.penetration, color: 'text-purple-400', icon: Target },
                { label: 'Orders/User/Month', value: marketData.avgOrdersPerUser, color: 'text-orange-400', icon: ShoppingCart },
                { label: 'Projected Users', value: marketData.projectedUsers, color: 'text-[#c9a227]', icon: Users },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50 text-center">
                  <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-lg font-black ${stat.color}`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ──── Competitors ──── */}
          <section className="bg-slate-800/20 border-y border-slate-700/50 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Competitive Landscape</h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {competitors.map((comp, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className={`text-lg font-bold ${comp.color}`}>{comp.name}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-slate-700/50 text-slate-300">
                        {comp.marketShare} share
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs mb-4">{comp.description}</p>

                    <div className="space-y-3">
                      <div>
                        <div className="text-emerald-400 text-xs font-bold mb-1.5">Strengths</div>
                        <ul className="space-y-1">
                          {comp.strengths.map((s, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs">
                              <CheckCircle className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300">{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-red-400 text-xs font-bold mb-1.5">Weaknesses</div>
                        <ul className="space-y-1">
                          {comp.weaknesses.map((w, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs">
                              <AlertTriangle className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300">{w}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ──── Competitive Advantages ──── */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Dinezy Competitive Advantages</h2>
            <p className="text-slate-400 text-sm mb-6">Why Dinezy wins against established players.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {competitiveAdvantages.map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-orange-500/10 to-red-500/5 rounded-xl p-5 border border-orange-500/20 hover:border-orange-500/40 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="text-white font-bold text-sm">{item.advantage}</h3>
                  </div>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ──── Dinezy vs Competitors Table ──── */}
          <section className="bg-slate-800/20 border-y border-slate-700/50 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Feature Comparison</h2>

              <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400">Feature</th>
                      <th className="text-center py-3 px-4 text-orange-400 font-bold">Dinezy</th>
                      <th className="text-center py-3 px-4 text-slate-400">Talabat</th>
                      <th className="text-center py-3 px-4 text-slate-400">Deliveroo</th>
                      <th className="text-center py-3 px-4 text-slate-400">Careem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Merchant Commission', dinezy: '18-25%', talabat: '30%+', deliveroo: '30%+', careem: '25-30%' },
                      { feature: 'BNPL for Catering', dinezy: true, talabat: false, deliveroo: false, careem: false },
                      { feature: 'Loyalty Ecosystem', dinezy: 'Nuqta Coins 3X', talabat: 'Basic points', deliveroo: 'Plus only', careem: 'Careem Coins' },
                      { feature: 'Niche Food Verticals', dinezy: '6 categories', talabat: '1 combined', deliveroo: '1 combined', careem: '1 combined' },
                      { feature: 'Shared Delivery Fleet', dinezy: true, talabat: false, deliveroo: false, careem: true },
                      { feature: 'Merchant Dashboard', dinezy: 'BizOne', talabat: 'Basic', deliveroo: 'Basic', careem: 'Basic' },
                      { feature: 'In-App Advertising', dinezy: 'Adzy Platform', talabat: 'Sponsored', deliveroo: 'Sponsored', careem: 'Limited' },
                      { feature: 'Subscription Price', dinezy: '29 AED/mo', talabat: '29 AED/mo', deliveroo: '36 AED/mo', careem: '25 AED/mo' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white font-medium">{row.feature}</td>
                        <td className="py-3 px-4 text-center">
                          {typeof row.dinezy === 'boolean' ? (
                            row.dinezy ? <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" /> : <span className="text-red-400">-</span>
                          ) : (
                            <span className="text-orange-400 font-bold">{row.dinezy}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {typeof row.talabat === 'boolean' ? (
                            row.talabat ? <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" /> : <span className="text-red-400">-</span>
                          ) : (
                            <span className="text-slate-400">{row.talabat}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {typeof row.deliveroo === 'boolean' ? (
                            row.deliveroo ? <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" /> : <span className="text-red-400">-</span>
                          ) : (
                            <span className="text-slate-400">{row.deliveroo}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {typeof row.careem === 'boolean' ? (
                            row.careem ? <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" /> : <span className="text-red-400">-</span>
                          ) : (
                            <span className="text-slate-400">{row.careem}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ═══════════════════════════════════════════ */}
      {/* PITCH DECK */}
      {/* ═══════════════════════════════════════════ */}
      {activeTab === 'deck' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
          {/* Investment Thesis */}
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/10 rounded-2xl p-6 sm:p-8 border border-orange-500/30">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2"><Briefcase className="w-6 h-6 text-orange-400" /> Investment Thesis</h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Dinezy is not just food delivery — it is the food vertical of a super-ecosystem. With Wasil fleet sharing, Nuqta rewards, Qist BNPL for catering, and BizOne merchant lock-in, Dinezy achieves unit economics that standalone food apps cannot. Every order strengthens the flywheel across payments, rewards, logistics, and merchant services.
            </p>
          </div>

          {/* Market Opportunity */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Market Opportunity</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'TAM — GCC Food Delivery', value: '$4.5B', color: 'text-orange-400', border: 'border-orange-500/40' },
                { label: 'SAM — UAE Food Delivery', value: '$1.8B', color: 'text-amber-400', border: 'border-amber-500/40' },
                { label: 'SOM — Year 3 Target', value: '$150M', color: 'text-emerald-400', border: 'border-emerald-500/40' },
              ].map((m, i) => (
                <div key={i} className={`bg-slate-800/60 rounded-xl p-5 border ${m.border} text-center`}>
                  <div className={`text-3xl font-black ${m.color}`}>{m.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Differentiators */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Key Differentiators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Real Nuqta Coin Rewards', desc: 'Every order earns 3X Nuqta Coins — real currency spendable at 500+ merchants.', icon: Coins, color: 'text-[#c9a227]' },
                { title: '30-40% Lower Delivery Cost', desc: 'Shared Wasil fleet across 24 verticals means lower per-delivery cost.', icon: Bike, color: 'text-orange-400' },
                { title: 'Lowest Merchant Commission', desc: '18-25% vs industry 30%+. More restaurants join, better selection.', icon: Percent, color: 'text-emerald-400' },
                { title: '6 Dedicated Food Verticals', desc: 'Restaurants, cafes, cloud kitchens, catering, healthy meals, late night.', icon: Layers, color: 'text-purple-400' },
                { title: 'Qist BNPL for Catering', desc: 'Split large catering bills into 3-12 installments. No competitor offers this.', icon: Calculator, color: 'text-blue-400' },
                { title: 'BizOne Merchant Lock-in', desc: 'Restaurants manage Dinezy alongside POS, inventory, and analytics.', icon: Store, color: 'text-pink-400' },
              ].map((d, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <d.icon className={`w-6 h-6 ${d.color} mb-2`} />
                  <h3 className="text-white font-bold text-sm mb-1">{d.title}</h3>
                  <p className="text-slate-400 text-xs">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3-Year Financial Projections */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3-Year Financial Projections</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-700/50">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-800/80 text-slate-300">
                  <th className="px-4 py-3 text-left">Year</th><th className="px-4 py-3 text-right">Users</th><th className="px-4 py-3 text-right">Orders</th><th className="px-4 py-3 text-right">Revenue</th><th className="px-4 py-3 text-right">Costs</th><th className="px-4 py-3 text-right">Net Profit</th>
                </tr></thead>
                <tbody>
                  {[
                    { year: 'Year 1', users: '50K', orders: '500K', revenue: '15M AED', costs: '11M', profit: '4M AED' },
                    { year: 'Year 2', users: '200K', orders: '2.4M', revenue: '60M AED', costs: '38M', profit: '22M AED' },
                    { year: 'Year 3', users: '500K', orders: '7.2M', revenue: '150M AED', costs: '85M', profit: '65M AED' },
                  ].map((r, i) => (
                    <tr key={i} className="border-t border-slate-700/50 text-slate-300">
                      <td className="px-4 py-3 font-bold text-orange-400">{r.year}</td><td className="px-4 py-3 text-right">{r.users}</td><td className="px-4 py-3 text-right">{r.orders}</td><td className="px-4 py-3 text-right font-semibold text-emerald-400">{r.revenue}</td><td className="px-4 py-3 text-right">{r.costs}</td><td className="px-4 py-3 text-right font-bold text-white">{r.profit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Comparable Companies */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Comparable Companies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Talabat', val: '$1B+', note: 'GCC food delivery leader' },
                { name: 'Deliveroo', val: '$7B', note: 'Premium food delivery + Editions' },
                { name: 'Swiggy', val: '$10B', note: 'Indian multi-vertical delivery' },
                { name: 'DoorDash', val: '$50B', note: 'US delivery + merchant services' },
              ].map((c, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
                  <div className="text-lg font-bold text-white">{c.name}</div>
                  <div className="text-2xl font-black text-orange-400">{c.val}</div>
                  <div className="text-xs text-slate-400 mt-1">{c.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Unicorn Path */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Unicorn Path</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { milestone: '50K users', timeline: 'Q4 2026', revenue: '~15M AED', valuation: '~$30M' },
                { milestone: '200K users', timeline: 'Q4 2027', revenue: '~60M AED', valuation: '~$150M' },
                { milestone: '500K users', timeline: 'Q4 2028', revenue: '~150M AED', valuation: '~$500M' },
                { milestone: '2M users (GCC)', timeline: '2029+', revenue: '~500M AED', valuation: '~$1B+' },
              ].map((m, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
                  <div className="text-xs text-slate-400">{m.timeline}</div>
                  <div className="text-lg font-bold text-orange-400 mt-1">{m.valuation}</div>
                  <div className="text-xs text-slate-500">{m.revenue}</div>
                  <div className="text-xs text-slate-400 mt-1">{m.milestone}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RTMN Ecosystem Multiplier */}
          <div className="bg-slate-800/40 rounded-2xl p-6 border border-orange-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><ArrowUpRight className="w-6 h-6 text-orange-400" /> RTMN Ecosystem Multiplier</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { factor: 'Zero fleet cost (Wasil)', detail: 'Wasil shared riders deliver for Dinezy alongside 23 other verticals. No fleet acquisition cost.' },
                { factor: 'Zero merchant acquisition (BizOne)', detail: 'BizOne merchants are pre-onboarded with POS, inventory, and analytics. Adding Dinezy is a toggle.' },
                { factor: 'Zero payment cost (NuqtaPay)', detail: 'NuqtaPay processes all transactions with Hawil Card and wallet integration. No third-party fees.' },
                { factor: 'Built-in rewards (Nuqta Coins)', detail: 'Every order earns Nuqta Coins spendable at 500+ merchants. No need for a separate loyalty program.' },
              ].map((f, i) => (
                <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                  <h3 className="text-orange-400 font-bold text-sm mb-1">{f.factor}</h3>
                  <p className="text-slate-400 text-xs">{f.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════ */}
      {/* NAVIGATION FOOTER */}
      {/* ═══════════════════════════════════════════ */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/wasil" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-400 transition-colors">
              <Truck className="w-5 h-5" /> Wasil Hub
            </Link>
            <Link href="/bizone" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-400 transition-colors">
              <Store className="w-5 h-5" /> BizOne
            </Link>
            <Link href="/nuqta-corp" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Crown className="w-5 h-5" /> Nuqta Corp
            </Link>
            <Link href="/adzy" className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-xl font-bold hover:bg-pink-400 transition-colors">
              <Target className="w-5 h-5" /> Adzy
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
