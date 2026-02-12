'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles, Home, Building, Shirt, Car, Bug, Clock, Star,
  CheckCircle, AlertTriangle, ArrowRight, DollarSign, Users, Target,
  Rocket, Zap, BarChart3, Award, Handshake, CreditCard, Shield,
  Calculator, Gift, Crown, Wallet, ChevronRight, ChevronDown, ChevronUp,
  Building2, ShieldCheck, HeartHandshake, Coins, Network, MapPin,
  Smartphone, Banknote, Phone, BadgePercent, CircleDollarSign, PieChart,
  LineChart, ArrowUpRight, Timer, UserCheck, Lock, Eye, Search,
  Calendar, RefreshCw, Layers, Globe, TrendingUp, Package,
  Percent, Store, FileText, Settings, Wrench, Droplets, Briefcase
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── HERO STATS ───
const heroStats = [
  { label: 'Vetted Cleaners', value: '2,000+', suffix: 'professionals', color: 'text-cyan-400' },
  { label: 'Booking Slots', value: '2-hour', suffix: 'windows', color: 'text-sky-400' },
  { label: 'Avg Booking Value', value: '150', suffix: 'AED', color: 'text-green-400' },
  { label: 'Nuqta Coins', value: '2X', suffix: 'earning', color: 'text-[#c9a227]' },
  { label: 'Service Categories', value: '6', suffix: 'verticals', color: 'text-violet-400' },
  { label: 'UAE Market', value: '$1.2B', suffix: 'home services', color: 'text-emerald-400' },
];

// ─── SERVICE CATEGORIES ───
const serviceCategories = [
  {
    name: 'Regular Home Cleaning',
    arabic: 'تنظيف منزلي',
    icon: Home,
    description: 'Scheduled weekly or biweekly home cleaning with trusted professionals',
    services: ['Dusting & vacuuming', 'Mopping & floor care', 'Kitchen cleaning', 'Bathroom sanitization', 'Bed making & linen change', 'Trash removal'],
    pricing: 'From 99 AED / 2hrs',
    frequency: 'One-time or recurring',
    color: 'from-cyan-500 to-sky-600',
    textColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
  },
  {
    name: 'Deep Cleaning',
    arabic: 'تنظيف عميق',
    icon: Sparkles,
    description: 'Intensive top-to-bottom cleaning for move-in/out, post-renovation, or seasonal refresh',
    services: ['Wall & ceiling cleaning', 'Inside cabinet cleaning', 'Appliance deep clean', 'Grout & tile scrubbing', 'Window washing (interior)', 'Balcony & terrace cleaning'],
    pricing: 'From 349 AED / session',
    frequency: 'One-time or quarterly',
    color: 'from-violet-500 to-purple-600',
    textColor: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
  },
  {
    name: 'Office & Commercial',
    arabic: 'مكاتب وتجاري',
    icon: Building,
    description: 'Professional cleaning for offices, retail spaces, clinics, and commercial properties',
    services: ['Office floor cleaning', 'Desk & workstation sanitization', 'Restroom deep clean', 'Window & glass cleaning', 'Carpet shampooing', 'Reception & lobby care'],
    pricing: 'From 499 AED / session',
    frequency: 'Daily, weekly, or monthly',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    name: 'Laundry & Dry Cleaning',
    arabic: 'غسيل وتنظيف جاف',
    icon: Shirt,
    description: 'Pickup and delivery laundry, ironing, and premium dry cleaning services',
    services: ['Wash & fold', 'Ironing service', 'Dry cleaning', 'Curtain cleaning', 'Carpet & rug cleaning', 'Shoe cleaning & restoration'],
    pricing: 'From 49 AED / bag',
    frequency: 'On-demand or weekly',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
  },
  {
    name: 'Car Wash & Detailing',
    arabic: 'غسيل سيارات',
    icon: Car,
    description: 'Doorstep car wash and professional detailing with eco-friendly products',
    services: ['Exterior hand wash', 'Interior vacuuming', 'Dashboard & trim polish', 'Full detailing package', 'Ceramic coating', 'Engine bay cleaning'],
    pricing: 'From 59 AED / wash',
    frequency: 'On-demand or weekly',
    color: 'from-orange-500 to-amber-600',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
  {
    name: 'Pest Control',
    arabic: 'مكافحة حشرات',
    icon: Bug,
    description: 'Licensed pest control for cockroaches, bedbugs, termites, rodents, and more',
    services: ['General pest spray', 'Bedbug treatment', 'Termite control', 'Rodent management', 'Anti-mosquito treatment', 'Annual pest protection plan'],
    pricing: 'From 199 AED / visit',
    frequency: 'One-time or quarterly',
    color: 'from-red-500 to-rose-600',
    textColor: 'text-red-400',
    bgColor: 'bg-red-500/10',
  },
];

// ─── HOW IT WORKS ───
const howItWorks = [
  { step: 1, title: 'Choose Service', description: 'Select from 6 categories - home cleaning, deep cleaning, office, laundry, car wash, or pest control', icon: Search, color: 'bg-cyan-500' },
  { step: 2, title: 'Pick Date & Slot', description: 'Choose your preferred 2-hour time slot and date. Recurring options available.', icon: Calendar, color: 'bg-sky-500' },
  { step: 3, title: 'Get Matched', description: 'Our algorithm matches you with the highest-rated available cleaner in your area', icon: UserCheck, color: 'bg-blue-500' },
  { step: 4, title: 'Service Delivered', description: 'Professional arrives on time with all supplies. Track in real-time via the app.', icon: CheckCircle, color: 'bg-green-500' },
  { step: 5, title: 'Pay & Rate', description: 'Pay securely via NuqtaPay, card, or cash. Rate your cleaner and leave feedback.', icon: Star, color: 'bg-violet-500' },
  { step: 6, title: 'Earn Coins', description: 'Earn 2X Nuqta Coins on every booking. Redeem across the entire Nuqta ecosystem.', icon: Coins, color: 'bg-[#c9a227]' },
];

// ─── PLATFORM FEATURES ───
const platformFeatures = [
  {
    category: 'Recurring Scheduling',
    icon: RefreshCw,
    color: 'text-cyan-400',
    features: [
      'Weekly, biweekly, or monthly recurring bookings',
      'Auto-matching with same cleaner for consistency',
      'Smart rescheduling with 24hr free cancellation',
      'Calendar sync with Google/Apple Calendar',
    ],
  },
  {
    category: 'Quality Rating System',
    icon: Star,
    color: 'text-yellow-400',
    features: [
      '5-star rating + detailed checklist reviews',
      'Photo verification before & after cleaning',
      'Background-checked & trained professionals',
      'Quality guarantee - free re-clean if unsatisfied',
    ],
  },
  {
    category: 'Supply Management',
    icon: Package,
    color: 'text-green-400',
    features: [
      'Cleaners bring their own professional supplies',
      'Eco-friendly product options available',
      'In-app store for cleaning supply purchases',
      'Subscription boxes for regular cleaning supplies',
    ],
  },
  {
    category: 'Smart Home Integration',
    icon: Smartphone,
    color: 'text-violet-400',
    features: [
      'Keyless entry support for unattended cleaning',
      'Smart lock integration for building access',
      'Real-time GPS tracking of assigned cleaner',
      'In-app chat with your cleaner or support',
    ],
  },
];

// ─── ECOSYSTEM INTEGRATIONS ───
const ecosystemIntegrations = [
  { product: 'NuqtaPay', icon: Wallet, color: 'text-blue-400', integration: 'One-tap payment for all cleaning bookings', benefit: 'Zero fees, instant payment' },
  { product: 'Qist BNPL', icon: CreditCard, color: 'text-purple-400', integration: 'Split deep cleaning & pest control into 3-6 installments', benefit: 'Affordable deep cleaning via BNPL' },
  { product: 'Nuqta Coins', icon: Coins, color: 'text-[#c9a227]', integration: '2X coins on every booking, redeemable across ecosystem', benefit: 'Earn & spend across 10+ apps' },
  { product: 'Sakin', icon: Home, color: 'text-teal-400', integration: 'Auto-schedule move-in/out cleaning for Sakin tenants', benefit: 'Seamless tenant cleaning services' },
  { product: 'Aqar (Real Estate)', icon: Building2, color: 'text-emerald-400', integration: 'Property staging cleaning for Aqar listings', benefit: 'Higher property listing appeal' },
  { product: 'BizOne', icon: Store, color: 'text-indigo-400', integration: 'Office cleaning bookings via BizOne merchant dashboard', benefit: 'Unified business management' },
];

// ─── PRICING TIERS ───
const pricingTiers = [
  {
    name: 'Pay-per-Service',
    price: 'No commitment',
    period: 'per booking',
    description: 'Book as you go with transparent per-service pricing',
    features: ['All 6 service categories', 'Standard pricing', '1X Nuqta Coins', 'Pay with any method', '48hr cancellation policy', 'Basic support'],
    color: 'border-slate-600',
    bgColor: 'bg-slate-800/30',
    recommended: false,
    savings: 'No commitment required',
  },
  {
    name: 'CleanEZ+',
    price: 149,
    period: 'month',
    description: 'Monthly subscription for regular home cleaning with premium perks',
    features: ['4 home cleanings/month (2hrs each)', '10% off all other services', '2X Nuqta Coins on everything', 'Priority booking & same-day slots', '24hr free cancellation', 'Premium support + quality guarantee'],
    color: 'border-[#c9a227]',
    bgColor: 'bg-[#c9a227]/5',
    recommended: true,
    savings: 'Save 35% vs pay-per-service',
  },
  {
    name: 'Commercial',
    price: 'Custom',
    period: 'contract',
    description: 'Tailored cleaning packages for offices, retail, and commercial spaces',
    features: ['Daily/weekly/monthly schedules', 'Dedicated cleaning team', 'Custom SLA & reporting', 'Monthly invoicing via BizOne', '3X Nuqta Coins for businesses', 'Account manager + 24/7 support'],
    color: 'border-blue-500',
    bgColor: 'bg-blue-500/5',
    recommended: false,
    savings: 'Volume discounts up to 40%',
  },
];

// ─── UNIT ECONOMICS ───
const unitEconomics = {
  avgBooking: 150,
  commission: '20-25%',
  avgCommission: 33.75,
  cleanerPayout: 112.50,
  operatingCost: 7.50,
  coinsReward: 3.75,
  netMargin: 22.50,
  ltvUser: 3600,
  cac: 45,
  ltvCacRatio: '80:1',
  paybackDays: 14,
  monthlyBookings: 2.4,
};

// ─── REVENUE STREAMS ───
const revenueStreams = [
  { source: 'Service Commission', share: '50%', value: '20-25% per booking', description: 'Platform commission on every completed booking', icon: CircleDollarSign, volume: 'Primary', margin: 'High' },
  { source: 'Subscription Plans', share: '25%', value: '149 AED/mo (CleanEZ+)', description: 'Monthly subscriptions for recurring home cleaning', icon: RefreshCw, volume: 'Growing', margin: 'Very High' },
  { source: 'Supply Sales', share: '15%', value: 'Avg 85 AED/order', description: 'In-app cleaning supply store and subscription boxes', icon: Package, volume: 'Secondary', margin: 'Medium' },
  { source: 'Promoted Listings', share: '10%', value: '99-499 AED/mo', description: 'Cleaners pay for featured placement and visibility boosts', icon: Zap, volume: 'Secondary', margin: 'Very High' },
];

// ─── MARKET DATA ───
const marketData = {
  totalMarket: '$1.2B',
  growth: '15% YoY',
  penetration: '35% digital',
  avgHousehold: '2.1 cleanings/mo',
  keyDrivers: [
    'High expat population (85%) with dual-income households needing cleaning help',
    'Year-round dust and heat driving frequent deep cleaning demand',
    'Growing shift from informal maids to professional, app-booked services',
    'Post-COVID hygiene awareness accelerating demand for sanitization services',
    'UAE government push for regulated home services under DED licensing',
    'Rising demand for eco-friendly and chemical-free cleaning options',
  ],
  segments: [
    { segment: 'Regular Home', share: '45%', value: '$540M', growth: '12%' },
    { segment: 'Deep Cleaning', share: '20%', value: '$240M', growth: '18%' },
    { segment: 'Commercial', share: '20%', value: '$240M', growth: '14%' },
    { segment: 'Specialty (Pest/Car/Laundry)', share: '15%', value: '$180M', growth: '20%' },
  ],
};

// ─── COMPETITORS ───
const competitors = [
  {
    name: 'Justmop',
    marketShare: '30%',
    status: 'Market leader in UAE home cleaning with strong brand awareness',
    strengths: ['First mover advantage', 'Strong brand recall', 'Wide coverage across UAE'],
    weaknesses: ['No ecosystem integration', 'Limited loyalty program', 'Higher pricing for premium services'],
    color: 'text-orange-400',
    commission: '25-30%',
    avgBooking: '175 AED',
  },
  {
    name: 'Helpling UAE',
    marketShare: '15%',
    status: 'European brand with standardized cleaning processes and trained staff',
    strengths: ['Standardized training', 'Insurance coverage', 'Multi-country presence'],
    weaknesses: ['Limited to home cleaning only', 'No BNPL option', 'Slower expansion in UAE'],
    color: 'text-green-400',
    commission: '20-25%',
    avgBooking: '160 AED',
  },
  {
    name: 'Maid in UAE',
    marketShare: '10%',
    status: 'Local player focused on maid services and part-time helpers',
    strengths: ['Affordable pricing', 'Local market knowledge', 'Flexible scheduling'],
    weaknesses: ['No app platform', 'No payment integration', 'Limited service categories'],
    color: 'text-blue-400',
    commission: '15-20%',
    avgBooking: '120 AED',
  },
];

// ─── COMPETITIVE ADVANTAGES ───
const competitiveAdvantages = [
  'Nuqta ecosystem: NuqtaPay wallet + Qist BNPL for deep cleaning = zero-friction payments',
  '2X Nuqta Coins on every booking - redeemable across Wasil, Rakab, Safar, and 10+ apps',
  'Sakin integration: auto-schedule move-in/out cleaning for all Sakin tenants',
  'Aqar integration: property staging cleaning boosts listing appeal for sellers',
  'Commercial tier with BizOne dashboard - offices manage cleaning like any other business expense',
  'Qist BNPL makes deep cleaning & pest control accessible via 3-6 installment plans',
  'AI-powered matching: highest-rated cleaner matched to your area and preferences',
  'Photo verification before & after + quality guarantee with free re-clean policy',
];

// ─── COMPONENT ───
export default function CleanEZPage() {
  const [activeTab, setActiveTab] = useState<string>('services');
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedCompetitor, setExpandedCompetitor] = useState<string | null>(null);

  const tabs = [
    { id: 'services', label: 'Services & Features', icon: Sparkles },
    { id: 'pricing', label: 'Pricing & Economics', icon: DollarSign },
    { id: 'market', label: 'Market & Competition', icon: Globe },
    { id: 'deck', label: 'Pitch Deck', icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">

      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-cyan-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              <span className="text-cyan-400 font-bold text-xs sm:text-sm">Wasil Ecosystem &bull; Niche Home Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">CleanEZ</span>
              <span className="text-white"> | </span>
              <span className="text-[#c9a227]">كلين إي زد</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mb-2">
              UAE&apos;s smartest home cleaning platform - book vetted cleaners in 60 seconds
            </p>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
              Home cleaning, deep cleaning, office cleaning, laundry pickup, car wash &amp; pest control - all in one app with Nuqta ecosystem rewards.
            </p>
          </div>

          {/* Hero Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {heroStats.map((stat, i) => (
              <div key={i} className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center">
                <div className={`text-xl sm:text-2xl font-black ${stat.color}`}>{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-1">{stat.suffix}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TAB NAVIGATION ─── */}
      <nav className="sticky top-0 z-50 bg-[#0a1628]/95 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── MAIN CONTENT ─── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">

        {/* ═══════════════════════════════════════════ */}
        {/* TAB 1: SERVICES & FEATURES                 */}
        {/* ═══════════════════════════════════════════ */}
        {activeTab === 'services' && (
          <div className="space-y-6 sm:space-y-8">

            {/* Service Categories */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                6 Service Categories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {serviceCategories.map((cat, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl border border-slate-700/50 overflow-hidden">
                    <div className={`bg-gradient-to-r ${cat.color} p-4`}>
                      <div className="flex items-center gap-3">
                        <cat.icon className="w-8 h-8 text-white" />
                        <div>
                          <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                          <span className="text-white/70 text-xs">{cat.arabic}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-slate-300 text-sm mb-3">{cat.description}</p>
                      <div className="flex items-center gap-3 mb-3 text-xs">
                        <span className={`px-2 py-1 rounded-full ${cat.bgColor} ${cat.textColor} font-medium`}>{cat.pricing}</span>
                        <span className="text-slate-400">{cat.frequency}</span>
                      </div>
                      <button
                        onClick={() => setExpandedCategory(expandedCategory === cat.name ? null : cat.name)}
                        className={`${cat.textColor} text-xs flex items-center gap-1 mb-2`}
                      >
                        {expandedCategory === cat.name ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        {expandedCategory === cat.name ? 'Hide Services' : 'View Services'}
                      </button>
                      {expandedCategory === cat.name && (
                        <div className="space-y-1.5 mt-2 border-t border-slate-700/50 pt-3">
                          {cat.services.map((svc, j) => (
                            <div key={j} className="flex items-center gap-2 text-xs text-slate-300">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              {svc}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-cyan-400" />
                How CleanEZ Works
              </h2>
              <div className="space-y-4">
                {howItWorks.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${step.color} flex items-center justify-center flex-shrink-0`}>
                      <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-slate-500 text-xs font-bold">STEP {step.step}</span>
                        {i < howItWorks.length - 1 && <ArrowRight className="w-3 h-3 text-slate-600" />}
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base mb-1">{step.title}</h4>
                      <p className="text-slate-400 text-xs sm:text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Features (expandable) */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Settings className="w-5 h-5 text-cyan-400" />
                Platform Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {platformFeatures.map((feat, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl border border-slate-700/50 overflow-hidden">
                    <button
                      onClick={() => setExpandedFeature(expandedFeature === feat.category ? null : feat.category)}
                      className="w-full p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <feat.icon className={`w-6 h-6 ${feat.color}`} />
                        <h3 className="text-white font-bold text-sm sm:text-base">{feat.category}</h3>
                      </div>
                      {expandedFeature === feat.category ? (
                        <ChevronUp className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </button>
                    {expandedFeature === feat.category && (
                      <div className="px-4 pb-4 border-t border-slate-700/50 pt-3 space-y-2">
                        {feat.features.map((f, j) => (
                          <div key={j} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                            {f}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-amber-500/5 rounded-xl p-4 sm:p-6 border border-[#c9a227]/30">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">Payment Methods</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { method: 'NuqtaPay Wallet', desc: 'Instant, zero fees', icon: Wallet },
                  { method: 'Qist BNPL', desc: '3-6 installments', icon: CreditCard },
                  { method: 'Nuqta Coins', desc: 'Redeem earned coins', icon: Coins },
                  { method: 'Card / Cash', desc: 'Visa, MC, or cash', icon: Banknote },
                ].map((pm, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50 text-center">
                    <pm.icon className="w-6 h-6 text-[#c9a227] mx-auto mb-2" />
                    <div className="text-white font-medium text-xs sm:text-sm">{pm.method}</div>
                    <div className="text-slate-400 text-[10px]">{pm.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ecosystem Integrations */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/10 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Network className="w-5 h-5 text-[#c9a227]" />
                Ecosystem Integration
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {ecosystemIntegrations.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-3">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <h4 className={`font-bold text-sm ${item.color}`}>{item.product}</h4>
                    </div>
                    <p className="text-xs text-slate-300 mb-2">{item.integration}</p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-green-400">
                      <CheckCircle className="w-3 h-3 flex-shrink-0" />
                      {item.benefit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════ */}
        {/* TAB 2: PRICING & ECONOMICS                 */}
        {/* ═══════════════════════════════════════════ */}
        {activeTab === 'pricing' && (
          <div className="space-y-6 sm:space-y-8">

            {/* Pricing Tiers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {pricingTiers.map((plan, i) => (
                <div key={i} className={`rounded-xl p-4 sm:p-6 border-2 ${plan.color} ${plan.bgColor} relative`}>
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#c9a227] text-[#0a1628] text-[10px] sm:text-xs font-bold rounded-full whitespace-nowrap">
                      BEST VALUE
                    </div>
                  )}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 mt-1">{plan.name}</h3>
                  <p className="text-slate-400 text-xs mb-3">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl sm:text-3xl font-black text-green-400">
                      {typeof plan.price === 'number' ? `${plan.price} AED` : plan.price}
                    </span>
                    <span className="text-slate-400 text-xs sm:text-sm">/{plan.period}</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {plan.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-2 sm:p-3 border border-green-500/30">
                    <span className="text-green-400 text-xs sm:text-sm">{plan.savings}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Unit Economics */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-green-400" />
                Per-Booking Economics (Avg {unitEconomics.avgBooking} AED)
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <div className="bg-green-500/10 rounded-xl p-3 sm:p-4 text-center border border-green-500/30">
                  <div className="text-lg sm:text-2xl font-bold text-green-400">{unitEconomics.avgBooking} AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Avg Booking</div>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-3 sm:p-4 text-center border border-blue-500/30">
                  <div className="text-lg sm:text-2xl font-bold text-blue-400">{unitEconomics.commission}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Commission Rate</div>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-3 sm:p-4 text-center border border-purple-500/30">
                  <div className="text-lg sm:text-2xl font-bold text-purple-400">{unitEconomics.cleanerPayout} AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Cleaner Payout</div>
                </div>
                <div className="bg-[#c9a227]/10 rounded-xl p-3 sm:p-4 text-center border border-[#c9a227]/30">
                  <div className="text-lg sm:text-2xl font-bold text-[#c9a227]">{unitEconomics.netMargin} AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Net Margin/Booking</div>
                </div>
              </div>

              {/* Booking Waterfall */}
              <div className="bg-slate-900/50 rounded-xl p-4 mb-6">
                <h4 className="text-white font-bold text-sm mb-3">Booking Waterfall (150 AED avg)</h4>
                <div className="space-y-2">
                  {[
                    { label: 'Customer Pays', value: '150.00 AED', pct: '100%', color: 'bg-white', width: '100%' },
                    { label: 'Cleaner Receives (75%)', value: '112.50 AED', pct: '75%', color: 'bg-blue-500', width: '75%' },
                    { label: 'Platform Commission (22.5%)', value: '33.75 AED', pct: '22.5%', color: 'bg-green-500', width: '22%' },
                    { label: 'Operating Costs (5%)', value: '7.50 AED', pct: '5%', color: 'bg-orange-500', width: '5%' },
                    { label: 'Coin Rewards (2.5%)', value: '3.75 AED', pct: '2.5%', color: 'bg-[#c9a227]', width: '3%' },
                    { label: 'Net Platform Revenue', value: '22.50 AED', pct: '15%', color: 'bg-emerald-500', width: '15%' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-40 text-slate-400 text-xs">{item.label}</div>
                      <div className="flex-1 bg-slate-700/50 rounded-full h-4 relative">
                        <div className={`${item.color} h-4 rounded-full`} style={{ width: item.width }} />
                      </div>
                      <div className="w-28 text-right text-white text-xs font-medium">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* LTV Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-white">{unitEconomics.ltvCacRatio}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">LTV:CAC Ratio</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-white">{unitEconomics.ltvUser.toLocaleString()} AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">User LTV (12mo)</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-white">{unitEconomics.cac} AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">CAC</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-white">{unitEconomics.paybackDays} days</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">CAC Payback</div>
                </div>
              </div>
            </div>

            {/* Revenue Streams */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-400" />
                Revenue Streams
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {revenueStreams.map((rs, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                        <rs.icon className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{rs.source}</h4>
                        <span className="text-green-400 text-xs font-medium">{rs.value}</span>
                      </div>
                      <span className="ml-auto text-lg font-black text-cyan-400">{rs.share}</span>
                    </div>
                    <p className="text-slate-400 text-xs mb-2">{rs.description}</p>
                    <div className="flex gap-2">
                      <span className="text-[10px] px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full">{rs.volume}</span>
                      <span className="text-[10px] px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">{rs.margin} margin</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Revenue Mix Visual */}
              <div className="mt-6 bg-slate-900/50 rounded-xl p-4">
                <h4 className="text-white font-bold text-sm mb-4">Revenue Mix (Year 2 Target)</h4>
                <div className="flex items-center gap-1 h-8 rounded-lg overflow-hidden">
                  <div className="bg-green-500 h-full flex items-center justify-center text-[10px] font-bold text-white" style={{ width: '50%' }}>Commission 50%</div>
                  <div className="bg-blue-500 h-full flex items-center justify-center text-[10px] font-bold text-white" style={{ width: '25%' }}>Subs 25%</div>
                  <div className="bg-purple-500 h-full flex items-center justify-center text-[10px] font-bold text-white" style={{ width: '15%' }}>Supply 15%</div>
                  <div className="bg-orange-500 h-full flex items-center justify-center text-[10px] font-bold text-white" style={{ width: '10%' }}>Ads 10%</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════ */}
        {/* TAB 3: MARKET & COMPETITION                */}
        {/* ═══════════════════════════════════════════ */}
        {activeTab === 'market' && (
          <div className="space-y-6 sm:space-y-8">

            {/* Market Overview */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-green-400" />
                UAE Home Services Market: {marketData.totalMarket}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="bg-green-500/10 rounded-xl p-3 text-center border border-green-500/30">
                  <div className="text-2xl font-bold text-green-400">{marketData.totalMarket}</div>
                  <div className="text-xs text-slate-400">Total Market</div>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-3 text-center border border-blue-500/30">
                  <div className="text-2xl font-bold text-blue-400">{marketData.growth}</div>
                  <div className="text-xs text-slate-400">Annual Growth</div>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-3 text-center border border-purple-500/30">
                  <div className="text-2xl font-bold text-purple-400">{marketData.penetration}</div>
                  <div className="text-xs text-slate-400">Digital Penetration</div>
                </div>
                <div className="bg-cyan-500/10 rounded-xl p-3 text-center border border-cyan-500/30">
                  <div className="text-2xl font-bold text-cyan-400">{marketData.avgHousehold}</div>
                  <div className="text-xs text-slate-400">Avg Household/mo</div>
                </div>
              </div>

              <h3 className="text-white font-bold text-sm mb-3">Market Drivers</h3>
              <div className="space-y-2 mb-6">
                {marketData.keyDrivers.map((d, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {d}
                  </div>
                ))}
              </div>

              <h3 className="text-white font-bold text-sm mb-3">Market Segments</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {marketData.segments.map((seg, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50 text-center">
                    <div className="text-xl font-bold text-green-400">{seg.share}</div>
                    <div className="text-white font-medium text-xs">{seg.segment}</div>
                    <div className="text-slate-400 text-[10px]">{seg.value}</div>
                    <div className="text-[10px] text-cyan-400">{seg.growth} growth</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitors */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-red-400" />
                Competitive Landscape
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {competitors.map((comp, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 sm:p-5 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className={`text-lg font-bold ${comp.color}`}>{comp.name}</h3>
                      <span className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded-full">{comp.marketShare}</span>
                    </div>
                    <p className="text-slate-400 text-xs mb-3">{comp.status}</p>
                    <div className="flex gap-3 text-xs mb-3">
                      <span className="text-slate-400">Comm: <span className="text-white font-medium">{comp.commission}</span></span>
                      <span className="text-slate-400">Avg: <span className="text-white font-medium">{comp.avgBooking}</span></span>
                    </div>
                    <button
                      onClick={() => setExpandedCompetitor(expandedCompetitor === comp.name ? null : comp.name)}
                      className="text-cyan-400 text-xs flex items-center gap-1 mb-2"
                    >
                      {expandedCompetitor === comp.name ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      {expandedCompetitor === comp.name ? 'Hide Details' : 'View Details'}
                    </button>
                    {expandedCompetitor === comp.name && (
                      <div className="space-y-3 border-t border-slate-700/50 pt-3">
                        <div>
                          <span className="text-green-400 text-[10px] font-bold">STRENGTHS</span>
                          <div className="space-y-1 mt-1">
                            {comp.strengths.map((s, j) => (
                              <div key={j} className="text-slate-300 text-xs flex items-center gap-1">
                                <CheckCircle className="w-3 h-3 text-green-400" /> {s}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-red-400 text-[10px] font-bold">WEAKNESSES</span>
                          <div className="space-y-1 mt-1">
                            {comp.weaknesses.map((w, j) => (
                              <div key={j} className="text-slate-300 text-xs flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3 text-red-400" /> {w}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Competitive Advantages */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-sky-500/5 rounded-xl p-4 sm:p-6 border border-cyan-500/30">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                CleanEZ Competitive Advantage
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {competitiveAdvantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    {adv}
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">Feature Comparison</h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 text-sm">Feature</th>
                      <th className="text-center py-3 px-4 text-cyan-400 text-sm">CleanEZ</th>
                      <th className="text-center py-3 px-4 text-slate-400 text-sm">Justmop</th>
                      <th className="text-center py-3 px-4 text-slate-400 text-sm">Helpling</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Service Categories', cleanez: '6', justmop: '3', helpling: '1' },
                      { feature: 'BNPL for Deep Cleaning', cleanez: 'Yes (Qist)', justmop: 'No', helpling: 'No' },
                      { feature: 'Loyalty Rewards', cleanez: '2X Nuqta Coins', justmop: 'Basic', helpling: 'None' },
                      { feature: 'Ecosystem Integration', cleanez: '10+ apps', justmop: 'Standalone', helpling: 'Standalone' },
                      { feature: 'Photo Verification', cleanez: 'Before & After', justmop: 'No', helpling: 'After only' },
                      { feature: 'Quality Guarantee', cleanez: 'Free re-clean', justmop: 'Limited', helpling: 'Case-by-case' },
                      { feature: 'Smart Home Integration', cleanez: 'Keyless entry', justmop: 'No', helpling: 'No' },
                      { feature: 'Commercial Plans', cleanez: 'Full tier', justmop: 'Basic', helpling: 'No' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white text-sm">{row.feature}</td>
                        <td className="py-3 px-4 text-center">
                          <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded font-bold text-sm">{row.cleanez}</span>
                        </td>
                        <td className="py-3 px-4 text-center text-slate-400 text-sm">{row.justmop}</td>
                        <td className="py-3 px-4 text-center text-slate-400 text-sm">{row.helpling}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════ */}
        {/* PITCH DECK */}
        {/* ═══════════════════════════════════════════ */}
        {activeTab === 'deck' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
            {/* Investment Thesis */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/10 rounded-2xl p-6 sm:p-8 border border-cyan-500/30">
              <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2"><Briefcase className="w-6 h-6 text-cyan-400" /> Investment Thesis</h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                CleanEZ is the home services vertical of the RTMN super-ecosystem. UAE has $1.5B+ in home services demand driven by 85% expat population needing professional cleaning. With Khedma workforce compliance, Sakin auto-booking for tenant move-in/out, Qist BNPL for deep cleaning, and Nuqta Coins loyalty, CleanEZ creates an unbreakable cleaning habit with zero customer acquisition cost via ecosystem cross-sell.
              </p>
            </div>

            {/* Market Opportunity */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Market Opportunity</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'TAM — UAE Home Services', value: '$1.5B+', color: 'text-cyan-400', border: 'border-cyan-500/40' },
                  { label: 'SAM — Digital Addressable (35%)', value: '$540M', color: 'text-teal-400', border: 'border-teal-500/40' },
                  { label: 'SOM — Year 3 Target (10%)', value: '$54M', color: 'text-emerald-400', border: 'border-emerald-500/40' },
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
                  { title: '2X Nuqta Coins on Every Booking', desc: 'Real coins spendable at 500+ merchants across grocery, food, transport, and more.', icon: Coins, color: 'text-[#c9a227]' },
                  { title: 'Subscription Auto-Booking', desc: 'CleanEZ+ subscribers get automatic weekly scheduling with same-cleaner matching.', icon: RefreshCw, color: 'text-cyan-400' },
                  { title: 'Qist BNPL for Deep Cleaning', desc: 'Split deep cleaning, pest control, or full-home packages into 3-6 installments.', icon: CreditCard, color: 'text-purple-400' },
                  { title: '6 Verticals in One App', desc: 'Home, deep, office, laundry, car wash, pest control — no need for 6 separate apps.', icon: Layers, color: 'text-teal-400' },
                  { title: 'Quality-Assured Professionals', desc: 'Background-checked, trained, rated cleaners with photo verification before & after.', icon: ShieldCheck, color: 'text-green-400' },
                  { title: 'Sakin Auto-Scheduling', desc: 'Every Sakin move-in/out auto-triggers CleanEZ booking. Built-in recurring demand.', icon: Home, color: 'text-blue-400' },
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
                    <th className="px-4 py-3 text-left">Year</th><th className="px-4 py-3 text-right">Users</th><th className="px-4 py-3 text-right">Bookings</th><th className="px-4 py-3 text-right">Revenue</th><th className="px-4 py-3 text-right">Costs</th><th className="px-4 py-3 text-right">Net Profit</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { year: 'Year 1', users: '15K', bookings: '36K', revenue: '6M AED', costs: '4.5M', profit: '1.5M AED' },
                      { year: 'Year 2', users: '60K', bookings: '144K', revenue: '25M AED', costs: '16M', profit: '9M AED' },
                      { year: 'Year 3', users: '150K', bookings: '360K', revenue: '65M AED', costs: '40M', profit: '25M AED' },
                    ].map((r, i) => (
                      <tr key={i} className="border-t border-slate-700/50 text-slate-300">
                        <td className="px-4 py-3 font-bold text-cyan-400">{r.year}</td><td className="px-4 py-3 text-right">{r.users}</td><td className="px-4 py-3 text-right">{r.bookings}</td><td className="px-4 py-3 text-right font-semibold text-emerald-400">{r.revenue}</td><td className="px-4 py-3 text-right">{r.costs}</td><td className="px-4 py-3 text-right font-bold text-white">{r.profit}</td>
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
                  { name: 'Urban Company', val: '$2.8B', note: 'Home services marketplace (India)' },
                  { name: 'Justlife', val: '$100M+', note: 'UAE home cleaning leader' },
                  { name: 'Handy', val: '$500M', note: 'Acquired by Angi (US)' },
                  { name: 'Helpling', val: '$200M', note: 'European home cleaning' },
                ].map((c, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
                    <div className="text-lg font-bold text-white">{c.name}</div>
                    <div className="text-2xl font-black text-cyan-400">{c.val}</div>
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
                  { milestone: '15K users', timeline: 'Year 1', revenue: '~6M AED', valuation: '~$15M' },
                  { milestone: '60K users', timeline: 'Year 2', revenue: '~25M AED', valuation: '~$75M' },
                  { milestone: '150K users', timeline: 'Year 3', revenue: '~65M AED', valuation: '~$200M' },
                  { milestone: '500K+ users (GCC)', timeline: '2029+', revenue: '~200M AED', valuation: '~$600M+' },
                ].map((m, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
                    <div className="text-xs text-slate-400">{m.timeline}</div>
                    <div className="text-lg font-bold text-cyan-400 mt-1">{m.valuation}</div>
                    <div className="text-xs text-slate-500">{m.revenue}</div>
                    <div className="text-xs text-slate-400 mt-1">{m.milestone}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RTMN Ecosystem Multiplier */}
            <div className="bg-slate-800/40 rounded-2xl p-6 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><ArrowUpRight className="w-6 h-6 text-cyan-400" /> RTMN Ecosystem Multiplier</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { factor: 'Zero CAC via Nuqta Cross-Sell', detail: 'CleanEZ promoted to every ecosystem user — Wasil, Rakab, Safar, Grocify users all need cleaning.' },
                  { factor: 'Khedma Visa/Labor Pipeline', detail: 'Khedma handles visa sponsorship and labor compliance for all CleanEZ cleaners. No recruitment overhead.' },
                  { factor: 'BizOne Commercial Contracts', detail: 'BizOne merchants book commercial cleaning through their existing business dashboard. Enterprise revenue.' },
                  { factor: 'Qist BNPL = Higher AOV', detail: 'Deep cleaning and pest control packages financed via Qist. Increases average order value by 40%.' },
                  { factor: 'Wasil Supply Logistics', detail: 'Cleaning supply delivery and laundry pickup/drop powered by Wasil fleet. Zero logistics cost.' },
                  { factor: 'Sakin Tenant Auto-Booking', detail: 'Every Sakin move-in/out auto-triggers CleanEZ booking. Built-in recurring demand pipeline.' },
                ].map((f, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <h3 className="text-cyan-400 font-bold text-sm mb-1">{f.factor}</h3>
                    <p className="text-slate-400 text-xs">{f.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>

      {/* ─── NAVIGATION FOOTER ─── */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/wasil" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Package className="w-5 h-5" /> Wasil Super-App
            </Link>
            <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Globe className="w-5 h-5" /> RTMN Ecosystem
            </Link>
            <Link href="/sakin" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Home className="w-5 h-5" /> Sakin
            </Link>
            <Link href="/nuqtapay" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Wallet className="w-5 h-5" /> NuqtaPay
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
