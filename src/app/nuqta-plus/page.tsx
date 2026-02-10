'use client';

import React, { useState } from 'react';
import {
  Crown, Sparkles, Gift, Wallet, Calendar, Shield, TrendingUp,
  Users, Target, Rocket, CheckCircle, AlertTriangle, Clock,
  Coffee, Scissors, ShoppingBag, Gem, Shirt, Leaf, Home,
  Cookie, Droplets, Briefcase, ArrowRight, Star, Zap,
  DollarSign, BarChart3, PieChart, Activity, Award, Heart,
  Building, Globe, Smartphone, Play, ChevronRight, Package,
  MapPin, Megaphone, Video, Instagram, Handshake, Store,
  RefreshCw, Lock, Percent, BadgeCheck, Plane, Brush, Cake, User,
  Car, PawPrint, Flower
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Exclusive Partner Brands (NOT owned by Nuqta) - 16 Categories
const partnerBrands = [
  { id: 'salon', name: 'Salon & Spa', icon: Scissors, coin: 100, color: 'pink', description: 'Premium beauty services (227 services)', partnerType: 'Exclusive Partner', partnerName: 'Nilim (YB Lounge)', minOrder: 200, status: 'confirmed' },
  { id: 'perfume', name: 'Perfume & Oud', icon: Droplets, coin: 100, color: 'purple', description: 'Luxury fragrances', partnerType: 'Exclusive Partner', partnerName: 'Al Mutlaib', minOrder: 200, status: 'confirmed' },
  { id: 'haircare', name: 'Haircare & Cosmetics', icon: Sparkles, coin: 100, color: 'rose', description: 'Beauty essentials', partnerType: 'Exclusive Partner', partnerName: null, minOrder: 200, status: 'pending' },
  { id: 'coffee', name: 'Coffee & Beverages', icon: Coffee, coin: 100, color: 'amber', description: 'Specialty drinks', partnerType: 'Exclusive Partner', partnerName: null, minOrder: 150, status: 'pending' },
  { id: 'laundry', name: 'Laundry', icon: ShoppingBag, coin: 100, color: 'blue', description: 'Premium laundry services', partnerType: 'Exclusive Partner', partnerName: 'Laundristan', minOrder: 200, status: 'confirmed' },
  { id: 'abaya', name: 'Abaya', icon: Shirt, coin: 100, color: 'slate', description: 'Designer modest fashion', partnerType: 'Exclusive Partner', partnerName: 'W Line', minOrder: 400, status: 'confirmed' },
  { id: 'jewellery', name: 'Jewellery', icon: Gem, coin: 100, color: 'yellow', description: 'Elegant accessories', partnerType: 'Exclusive Partner', partnerName: '10 Stone', minOrder: 200, status: 'confirmed' },
  { id: 'home-fragrance', name: 'Home Fragrance', icon: Home, coin: 100, color: 'indigo', description: 'Premium home fragrances', partnerType: 'Exclusive Partner', partnerName: 'Whiff Theory', minOrder: 200, status: 'confirmed' },
  { id: 'mens-grooming', name: "Men's Grooming", icon: User, coin: 100, color: 'cyan', description: 'Premium grooming services', partnerType: 'Exclusive Partner', partnerName: null, minOrder: 150, status: 'pending' },
  { id: 'tours-travel', name: 'Tours & Travel', icon: Plane, coin: 100, color: 'sky', description: 'Local experiences & trips', partnerType: 'Exclusive Partner', partnerName: null, minOrder: 300, status: 'pending' },
  { id: 'handbags', name: 'Handbags', icon: ShoppingBag, coin: 100, color: 'fuchsia', description: 'Designer bags & accessories', partnerType: 'Exclusive Partner', partnerName: null, minOrder: 300, status: 'pending' },
  { id: 'desserts', name: 'Desserts', icon: Cake, coin: 100, color: 'orange', description: 'Sweet treats & cakes', partnerType: 'Exclusive Partner', partnerName: null, minOrder: 150, status: 'pending' },
  { id: 'home-cleaning', name: 'Home Cleaning', icon: Brush, coin: 100, color: 'teal', description: 'Professional cleaning services', partnerType: 'Exclusive Partner', partnerName: null, minOrder: 200, status: 'pending' },
  { id: 'car-wash', name: 'Premium Car Wash', icon: Car, coin: 100, color: 'red', description: 'Auto detailing & wash', partnerType: 'Exclusive Partner', partnerName: 'Z Wash', minOrder: 200, status: 'confirmed' },
  { id: 'pet-services', name: 'Pet Grooming & Care', icon: PawPrint, coin: 100, color: 'lime', description: 'Pet grooming & supplies', partnerType: 'Exclusive Partner', partnerName: null, minOrder: 200, status: 'pending' },
  { id: 'florist', name: 'Florist & Gifts', icon: Flower, coin: 100, color: 'emerald', description: 'Flowers & gift arrangements', partnerType: 'Exclusive Partner', partnerName: null, minOrder: 200, status: 'pending' },
];

// Confirmed Partners Summary with SKU Details
const confirmedPartners = [
  {
    category: 'Perfume & Oud',
    partner: 'Al Mutlaib',
    minOrder: 200,
    maxOrder: 40000,
    products: 'Oud, Dehnal Oud, Perfumes',
    skus: [
      { name: 'Oud (Tola)', qty: 5, price: 300 },
      { name: 'Perfume', qty: 2, price: 200 },
      { name: 'Perfume (Premium)', qty: 2, price: 500 },
      { name: 'Dehnal Oud (3ml)', qty: 5, price: 400 },
    ],
    totalSKUs: 14
  },
  {
    category: 'Home Fragrance',
    partner: 'Whiff Theory',
    minOrder: 200,
    maxOrder: null,
    products: 'Premium home fragrances',
    skus: [
      { name: 'Home Fragrance', qty: 2, price: 200 },
    ],
    totalSKUs: 2
  },
  {
    category: 'Abaya',
    partner: 'W Line',
    minOrder: 400,
    maxOrder: 700,
    products: 'Designer abayas',
    skus: [
      { name: 'Abaya (Standard)', qty: 1, price: 400 },
      { name: 'Abaya (Premium)', qty: 3, price: 500 },
      { name: 'Abaya (Luxury)', qty: 1, price: 700 },
    ],
    totalSKUs: 5
  },
  {
    category: 'Salon & Spa',
    partner: 'Nilim (YB Lounge)',
    minOrder: 200,
    maxOrder: 2000,
    products: 'Full-service salon & spa (Hair, Nails, Makeup, Massage, Moroccan Bath)',
    skus: [
      // Threading & Waxing
      { name: 'Upper Lips Threading', qty: 1, price: 35 },
      { name: 'Eyebrows Threading/Wax', qty: 1, price: 50 },
      { name: 'Full Face Threading', qty: 1, price: 120 },
      { name: 'Under Arm Waxing', qty: 1, price: 50 },
      { name: 'Full Arms Waxing', qty: 1, price: 90 },
      { name: 'Full Legs Waxing', qty: 1, price: 110 },
      { name: 'Full Bikini Waxing', qty: 1, price: 150 },
      // Hair Services
      { name: 'Straight Blowdry', qty: 1, price: 130 },
      { name: 'Blowdry with Curls/Wavy', qty: 1, price: 150 },
      { name: 'Haircut + Blowdry', qty: 1, price: 350 },
      { name: 'Hair Trimming + Wash', qty: 1, price: 180 },
      { name: 'Full Hair Color (Ammonia Free)', qty: 1, price: 450 },
      { name: 'Balayage Full Highlight', qty: 1, price: 900 },
      { name: 'Brazilian Blowout', qty: 1, price: 1000 },
      { name: 'K18 Repair Treatment', qty: 1, price: 250 },
      // Nail Services
      { name: 'Classic Polish Manicure', qty: 1, price: 120 },
      { name: 'Classic Polish Pedicure', qty: 1, price: 150 },
      { name: 'Russian Gel Manicure', qty: 1, price: 220 },
      { name: 'Russian Gel Pedicure', qty: 1, price: 230 },
      { name: 'Nail Extensions', qty: 1, price: 380 },
      // Massage & Spa
      { name: 'Full Body Relaxing Massage', qty: 1, price: 260 },
      { name: 'Full Body Deep Tissue Massage', qty: 1, price: 280 },
      { name: 'Back & Shoulders Massage', qty: 1, price: 180 },
      { name: 'Moroccan Bath Traditional', qty: 1, price: 200 },
      { name: 'Special Moroccan Bath', qty: 1, price: 280 },
      { name: 'Moroccan Bath - Thalgo', qty: 1, price: 400 },
      // Makeup
      { name: 'Simple Makeup (with Lashes)', qty: 1, price: 450 },
      { name: 'Party Event Makeup', qty: 1, price: 500 },
      { name: 'Lip Blush', qty: 1, price: 2000 },
    ],
    totalSKUs: 227
  },
  {
    category: 'Jewellery',
    partner: '10 Stone',
    minOrder: 200,
    maxOrder: null,
    products: 'Premium jewellery',
    skus: [],
    totalSKUs: null
  },
  {
    category: 'Laundry',
    partner: 'Laundristan',
    minOrder: 200,
    maxOrder: null,
    products: 'Weekly/monthly laundry subscription',
    skus: [],
    totalSKUs: null
  },
  {
    category: 'Premium Car Wash',
    partner: 'Z Wash',
    minOrder: 200,
    maxOrder: null,
    products: 'Doorstep vehicle cleaning subscription',
    skus: [],
    totalSKUs: null
  },
];

// Coin Rules
const coinRules = [
  { rule: 'Coin Value', details: '100 AED per brand' },
  { rule: 'Validity', details: '30 days from issue' },
  { rule: 'Renewal', details: 'Every billing cycle automatically' },
  { rule: 'Stacking', details: 'Not allowed' },
  { rule: 'Cross-brand Usage', details: 'Not allowed' },
  { rule: 'Cash Withdrawal', details: 'Not allowed' },
  { rule: 'Transfer', details: 'Not allowed' },
];

// Partner Value Proposition
const partnerBenefits = [
  { benefit: 'Guaranteed Monthly Customers', description: 'Every Nuqta+ member is incentivized to visit monthly', icon: Users },
  { benefit: 'Premium Customer Base', description: 'Members paying 99 AED/month are high-intent buyers', icon: Crown },
  { benefit: 'Higher Average Order Value', description: 'Coin discount + cash payment = 200+ AED transactions', icon: TrendingUp },
  { benefit: 'Zero Marketing Cost', description: 'Nuqta brings customers to you - no ad spend needed', icon: Megaphone },
  { benefit: 'Exclusive Category Position', description: 'Only ONE partner per category in Nuqta+', icon: Lock },
  { benefit: 'Recurring Revenue Stream', description: 'Same customers return every month', icon: RefreshCw },
];

// User Types (with 16 brands = 1,600 AED total value)
const userTypes = [
  { type: 'Light User', brands: '2-4 brands', coins: '200-400 AED', aov: '400-800 AED', percentage: 30 },
  { type: 'Average User', brands: '5-8 brands', coins: '500-800 AED', aov: '1,000-1,600 AED', percentage: 50 },
  { type: 'Heavy User', brands: '10-16 brands', coins: '1,000-1,600 AED', aov: '2,000-3,200 AED', percentage: 20 },
];

// Growth Targets (H2 2026 Launch)
const growthTargets = [
  { month: 'Q4 2026', members: '5,000', totalAOV: '5M+ AED', memberGrowth: 5000 },
  { month: 'H1 2027', members: '25,000', totalAOV: '25M+ AED', memberGrowth: 25000 },
  { month: 'H2 2027', members: '50,000', totalAOV: '50M+ AED', memberGrowth: 50000 },
];

// Launch Phases
const phase1Brands = ['salon', 'perfume', 'coffee', 'laundry', 'abaya', 'jewellery', 'haircare'];
const phase2Brands = ['home-fragrance', 'mens-grooming', 'tours-travel', 'handbags', 'desserts', 'home-cleaning'];
const phase3Brands = ['car-wash', 'pet-services', 'florist'];

// Nuqta Revenue Model
const nuqtaRevenue = [
  { source: 'Membership Fee', amount: '99 AED/user/month', type: 'recurring' },
  { source: 'Partner Commission', amount: 'Fixed % per transaction', type: 'transaction' },
];

// H2 Launch Roadmap (Nuqta+ launches in H2 2026)
const roadmap = [
  {
    month: 'Q2 2026',
    title: 'Partner Acquisition',
    tasks: [
      'Sign remaining 10 exclusive partners',
      'Negotiate commission rates',
      'Partner onboarding & training',
      'Build coin redemption system'
    ],
    status: 'in_progress'
  },
  {
    month: 'Q3 2026',
    title: 'Integration & Beta',
    tasks: [
      'Partner POS integration',
      'App integration for redemption',
      'Beta test with 500 users',
      'Partner feedback loop'
    ],
    status: 'pending'
  },
  {
    month: 'Q4 2026',
    title: 'Full Launch',
    tasks: [
      'Launch free trial campaign',
      'Start paid conversions',
      'Monitor partner satisfaction',
      'Scale to 10K members'
    ],
    status: 'pending'
  },
];

// Marketing Channels
const marketingChannels = [
  {
    channel: 'Influencer Marketing',
    icon: Instagram,
    types: ['Beauty influencers', 'Lifestyle creators', 'Family vloggers'],
    priority: 'high'
  },
  {
    channel: 'Street Interview Content',
    icon: Video,
    types: ['"How much could you save with Nuqta?"', 'Real people, real reactions', 'Viral potential'],
    priority: 'high'
  },
  {
    channel: 'Free Trial Campaigns',
    icon: Gift,
    types: ['30-day free membership', 'Limited-time offers', 'Referral bonuses'],
    priority: 'critical'
  },
];

export default function NuqtaPlusPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Crown },
    { id: 'strategy', label: 'Strategic Goals', icon: Target },
    { id: 'partners', label: 'Partner Model', icon: Handshake },
    { id: 'brands', label: 'Brands & Coins', icon: Gift },
    { id: 'revenue', label: 'Revenue Model', icon: BarChart3 },
    { id: 'launch', label: 'Launch Plan', icon: Rocket },
    { id: 'marketing', label: 'Marketing', icon: Megaphone },
    { id: 'growth', label: 'Growth Targets', icon: TrendingUp },
  ];

  const totalCoinValue = partnerBrands.reduce((sum, b) => sum + b.coin, 0);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
                  <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-[#0a1628]" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-4xl font-bold text-white">Nuqta+ Membership</h1>
                  <p className="text-[#c9a227] text-sm sm:text-base">Exclusive Partner Network</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                Premium lifestyle membership with <span className="text-[#c9a227] font-medium">16 exclusive partner brands</span>.
                Guarantees monthly active users with 1,600+ AED total AOV across partner network.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-[#c9a227]/30 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#c9a227]">99</div>
                <div className="text-xs text-slate-400">AED/month</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-green-500/30 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">1,600</div>
                <div className="text-xs text-slate-400">AED value</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-purple-500/30 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">16</div>
                <div className="text-xs text-slate-400">Partners</div>
              </div>
            </div>
          </div>

          {/* Strategic Value Banner */}
          <div className="mt-8 bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-xl p-4 sm:p-6 border border-[#c9a227]/30">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-6 h-6 text-[#c9a227]" />
              <span className="text-lg sm:text-xl font-bold text-white">Strategic Purpose</span>
            </div>
            <p className="text-lg sm:text-xl text-white font-medium mb-4">
              Guarantee <span className="text-green-400">Monthly Active Users</span> with <span className="text-[#c9a227]">1,600+ AED AOV</span> through 16 exclusive partner brands
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                <Handshake className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                <div className="text-xs text-white">Exclusive Partners</div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                <Percent className="w-5 h-5 text-green-400 mx-auto mb-1" />
                <div className="text-xs text-white">Fixed Commission</div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                <Users className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                <div className="text-xs text-white">Guaranteed MAU</div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                <TrendingUp className="w-5 h-5 text-[#c9a227] mx-auto mb-1" />
                <div className="text-xs text-white">High AOV</div>
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
                    ? 'bg-[#c9a227] text-[#0a1628]'
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
            {/* Core Concept - Partner Model */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Handshake className="w-5 h-5 text-[#c9a227]" />
                Core Concept: Exclusive Partner Network
              </h2>
              <p className="text-slate-300 mb-4">
                Nuqta+ partners with <span className="text-[#c9a227] font-medium">exclusive brands</span> (not owned by Nuqta)
                to offer members lifestyle benefits. Partners get guaranteed monthly customers, Nuqta earns fixed commission.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-blue-500/30">
                  <div className="text-blue-400 font-bold mb-2">Partner Brands</div>
                  <p className="text-sm text-slate-400">NOT owned by Nuqta - exclusive partnerships with quality brands</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-green-500/30">
                  <div className="text-green-400 font-bold mb-2">Fixed Commission</div>
                  <p className="text-sm text-slate-400">Nuqta earns only fixed commission per transaction</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-purple-500/30">
                  <div className="text-purple-400 font-bold mb-2">Guaranteed Traffic</div>
                  <p className="text-sm text-slate-400">Partners receive guaranteed monthly customers from Nuqta+</p>
                </div>
              </div>
            </div>

            {/* Confirmed Partners */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-6 border-2 border-green-500/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-green-400 text-sm font-bold uppercase tracking-wider">Phase 1 Ready</div>
                  <h3 className="text-xl font-bold text-white">6 Partners Confirmed</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {confirmedPartners.map((partner, i) => (
                  <div key={i} className="bg-slate-900/70 rounded-xl p-5 border border-green-500/30">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-xs text-green-400 uppercase tracking-wider">{partner.category}</div>
                        <div className="text-xl font-bold text-white">{partner.partner}</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Min Order</span>
                        <span className="text-[#c9a227] font-bold">{partner.minOrder} AED</span>
                      </div>
                      {partner.maxOrder && (
                        <div className="flex justify-between">
                          <span className="text-slate-400">Max Order</span>
                          <span className="text-white font-medium">{partner.maxOrder.toLocaleString()} AED</span>
                        </div>
                      )}
                      <div className="pt-2 border-t border-slate-700/50">
                        <span className="text-slate-400 text-xs">{partner.products}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-white font-bold">Partner Economics</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">6/16</div>
                    <div className="text-xs text-slate-400">Confirmed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#c9a227]">200+</div>
                    <div className="text-xs text-slate-400">Min AOV</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">40K</div>
                    <div className="text-xs text-slate-400">Max AOV</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">100%</div>
                    <div className="text-xs text-slate-400">Premium</div>
                  </div>
                </div>
              </div>
            </div>

            {/* THE GOLD - Forced Spending Mechanism */}
            <div className="bg-gradient-to-r from-[#c9a227]/30 to-yellow-500/20 rounded-xl p-6 sm:p-8 border-2 border-[#c9a227]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#c9a227] flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#0a1628]" />
                </div>
                <div>
                  <div className="text-[#c9a227] text-sm font-bold uppercase tracking-wider">The Gold</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Forced Additional Spending</h3>
                </div>
              </div>

              <div className="bg-slate-900/70 rounded-xl p-6 mb-6">
                <div className="text-center mb-6">
                  <p className="text-lg sm:text-xl text-white mb-2">To use <span className="text-[#c9a227] font-bold">100 AED</span> coin, user MUST spend</p>
                  <div className="text-4xl sm:text-5xl font-bold text-green-400">200-300 AED</div>
                  <p className="text-slate-400 mt-2">minimum at each partner</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-4 text-center border border-[#c9a227]/30">
                    <div className="text-[#c9a227] font-bold text-2xl">100 AED</div>
                    <div className="text-xs text-slate-400">Coin value (discount)</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 text-center border border-green-500/30">
                    <div className="text-green-400 font-bold text-2xl">+200 AED</div>
                    <div className="text-xs text-slate-400">Cash payment (min)</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 text-center border border-purple-500/30">
                    <div className="text-purple-400 font-bold text-2xl">=300 AED</div>
                    <div className="text-xs text-slate-400">Total transaction</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-[#c9a227]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-[#c9a227]" />
                    <span className="text-white font-bold">Per Brand Math</span>
                  </div>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• User gets 100 AED coin</li>
                    <li>• Partner requires 200+ AED min spend</li>
                    <li>• User pays 100-200 AED cash</li>
                    <li>• Partner gets 200-300 AED revenue</li>
                  </ul>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-white font-bold">Total User Spending</span>
                  </div>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• Light user (3 brands): 600-900 AED</li>
                    <li>• Average user (6 brands): 1,200-1,800 AED</li>
                    <li>• Heavy user (10+ brands): 2,000-3,000 AED</li>
                    <li>• <span className="text-green-400 font-medium">All guaranteed monthly!</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Win-Win Model */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* For Users */}
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl p-6 border border-green-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-6 h-6 text-green-400" />
                  <h3 className="text-lg font-bold text-white">For Users</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                    <div>
                      <div className="text-white font-medium">Pay 99 AED, Get 1,600 AED value</div>
                      <div className="text-sm text-slate-400">16x ROI on membership fee</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                    <div>
                      <div className="text-white font-medium">100 AED coin = 33-50% discount</div>
                      <div className="text-sm text-slate-400">On 200-300 AED purchase at each brand</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                    <div>
                      <div className="text-white font-medium">Premium partner brands</div>
                      <div className="text-sm text-slate-400">Quality assured through exclusivity</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Partners */}
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-6 border border-blue-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <Store className="w-6 h-6 text-blue-400" />
                  <h3 className="text-lg font-bold text-white">For Partners</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <div className="text-white font-medium">200-300 AED guaranteed per visit</div>
                      <div className="text-sm text-slate-400">Minimum spend requirement ensures high AOV</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <div className="text-white font-medium">High-intent premium customers</div>
                      <div className="text-sm text-slate-400">Members paying 99 AED/month are serious buyers</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <div className="text-white font-medium">Zero customer acquisition cost</div>
                      <div className="text-sm text-slate-400">Nuqta brings customers, partner provides service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* For Nuqta */}
            <div className="bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 rounded-xl p-6 border border-[#c9a227]/30">
              <div className="flex items-center gap-2 mb-4">
                <Crown className="w-6 h-6 text-[#c9a227]" />
                <h3 className="text-lg font-bold text-white">For Nuqta</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-[#c9a227] font-bold mb-2">Guaranteed MAU</div>
                  <p className="text-sm text-slate-400">Members use coins monthly = guaranteed active users</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-[#c9a227] font-bold mb-2">1,600+ AED AOV</div>
                  <p className="text-sm text-slate-400">Users spend across multiple partner brands monthly</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-[#c9a227] font-bold mb-2">Fixed Commission</div>
                  <p className="text-sm text-slate-400">Predictable revenue from every partner transaction</p>
                </div>
              </div>
            </div>

            {/* Merchant Loyalty Mechanics */}
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/10 rounded-xl p-6 border border-orange-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-orange-400 text-sm font-bold uppercase tracking-wider">Beyond Cashback</div>
                  <h3 className="text-xl font-bold text-white">Merchant Loyalty Mechanics</h3>
                </div>
              </div>

              <p className="text-slate-300 mb-6">
                We build <span className="text-orange-400 font-medium">habit, not just one-time visits</span>. These mechanics drive repeat behavior and deeper merchant engagement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Streak Rewards */}
                <div className="bg-slate-900/70 rounded-xl p-5 border border-orange-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-orange-400" />
                    <span className="text-white font-bold">Streak Rewards</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-slate-800/50 rounded-lg p-3">
                      <span className="text-slate-300 text-sm">&ldquo;Visit 4 times this month&rdquo;</span>
                      <span className="text-green-400 font-medium text-sm">+5% extra</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-800/50 rounded-lg p-3">
                      <span className="text-slate-300 text-sm">&ldquo;3-day streak at any merchant&rdquo;</span>
                      <span className="text-green-400 font-medium text-sm">+50 coins</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-800/50 rounded-lg p-3">
                      <span className="text-slate-300 text-sm">&ldquo;30-day streak&rdquo;</span>
                      <span className="text-[#c9a227] font-medium text-sm">+1,000 coins</span>
                    </div>
                  </div>
                </div>

                {/* Category Challenges */}
                <div className="bg-slate-900/70 rounded-xl p-5 border border-purple-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-bold">Category Challenges</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-slate-800/50 rounded-lg p-3">
                      <span className="text-slate-300 text-sm">&ldquo;Try 3 new cafes this month&rdquo;</span>
                      <span className="text-green-400 font-medium text-sm">Unlock bonus</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-800/50 rounded-lg p-3">
                      <span className="text-slate-300 text-sm">&ldquo;Visit 5 salons in category&rdquo;</span>
                      <span className="text-green-400 font-medium text-sm">+150 coins</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-800/50 rounded-lg p-3">
                      <span className="text-slate-300 text-sm">&ldquo;Explore 10 new merchants&rdquo;</span>
                      <span className="text-[#c9a227] font-medium text-sm">Explorer badge</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="text-white font-medium">Why This Works</div>
                    <div className="text-sm text-slate-400">Builds habit loops, not just discounts. Users return for the challenge, not just the reward.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Membership Structure */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Crown className="w-5 h-5 text-[#c9a227]" />
                Membership Structure
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl p-6 border border-[#c9a227]/30">
                  <div className="text-2xl font-bold text-[#c9a227] mb-2">Nuqta+ Plan</div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Free trial</span>
                      <span className="text-green-400 font-medium">30 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">After trial</span>
                      <span className="text-white font-bold text-xl">99 AED/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Total coin value</span>
                      <span className="text-green-400 font-bold text-xl">1,600 AED</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Partner brands</span>
                      <span className="text-purple-400 font-bold">16 exclusive</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/30">
                  <div className="text-lg font-bold text-white mb-4">Monthly Coins (per brand)</div>
                  <div className="grid grid-cols-2 gap-2">
                    {partnerBrands.slice(0, 6).map((brand) => (
                      <div key={brand.id} className="flex items-center justify-between bg-slate-800/50 rounded-lg px-3 py-2">
                        <span className="text-slate-300 text-sm">{brand.name}</span>
                        <span className="text-[#c9a227] font-medium text-sm">{brand.coin} AED</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-center text-slate-400 text-sm">+ 4 more partner brands</div>
                </div>
              </div>
            </div>

            {/* App Experience Flow */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#c9a227]" />
                App Experience Flow
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-600/30">
                  <div className="w-10 h-10 rounded-full bg-[#c9a227]/20 flex items-center justify-center mb-3">
                    <span className="text-[#c9a227] font-bold">1</span>
                  </div>
                  <div className="text-white font-bold mb-2">User Signs Up</div>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• Sees &ldquo;1,600 AED monthly benefits&rdquo;</li>
                    <li>• Activates free 30-day trial</li>
                    <li>• Coins issued for all 16 partners</li>
                  </ul>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-600/30">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mb-3">
                    <span className="text-green-400 font-bold">2</span>
                  </div>
                  <div className="text-white font-bold mb-2">Coins in Wallet</div>
                  <div className="text-sm text-slate-400 space-y-1">
                    <div className="bg-slate-800/50 rounded px-2 py-1">Salon Partner: 100 AED</div>
                    <div className="bg-slate-800/50 rounded px-2 py-1">Perfume Partner: 100 AED</div>
                    <div className="bg-slate-800/50 rounded px-2 py-1">Coffee Partner: 100 AED</div>
                    <div className="text-xs text-yellow-400 mt-1">Expires in 30 days</div>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-600/30">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                    <span className="text-purple-400 font-bold">3</span>
                  </div>
                  <div className="text-white font-bold mb-2">User Visits Partner</div>
                  <div className="text-sm text-slate-400 space-y-2">
                    <div className="flex justify-between">
                      <span>Service total:</span>
                      <span className="text-white">280 AED</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Coin applied:</span>
                      <span className="text-green-400">-100 AED</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-600 pt-2">
                      <span className="font-medium">User pays:</span>
                      <span className="text-[#c9a227] font-bold">180 AED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Strategic Goals Tab */}
        {activeTab === 'strategy' && (
          <div className="space-y-8">
            {/* Primary Goal */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-green-500/20 rounded-xl p-6 border border-[#c9a227]/30">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-[#c9a227]" />
                Primary Strategic Goal
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-xl p-6 border border-green-500/30">
                  <div className="text-4xl font-bold text-green-400 mb-2">Guarantee MAU</div>
                  <p className="text-slate-300">Every Nuqta+ member is a guaranteed Monthly Active User. Coins expire in 30 days, forcing usage.</p>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-6 border border-[#c9a227]/30">
                  <div className="text-4xl font-bold text-[#c9a227] mb-2">1,600+ AED AOV</div>
                  <p className="text-slate-300">Members spend across multiple partner brands monthly, ensuring high average order value.</p>
                </div>
              </div>
            </div>

            {/* Why This Works */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#c9a227]" />
                Why This Guarantees MAU + AOV
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600/30">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="text-white font-medium mb-1">30-Day Expiry</div>
                  <p className="text-xs text-slate-400">Coins expire monthly, creating urgency to use</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600/30">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
                    <DollarSign className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-white font-medium mb-1">Sunk Cost</div>
                  <p className="text-xs text-slate-400">Users paid 99 AED, want to maximize value</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600/30">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                    <Gift className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="text-white font-medium mb-1">High Perceived Value</div>
                  <p className="text-xs text-slate-400">1,600 AED feels too valuable to waste</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600/30">
                  <div className="w-10 h-10 rounded-full bg-[#c9a227]/20 flex items-center justify-center mb-3">
                    <Heart className="w-5 h-5 text-[#c9a227]" />
                  </div>
                  <div className="text-white font-medium mb-1">Lifestyle Integration</div>
                  <p className="text-xs text-slate-400">Salon, coffee, meals = regular needs</p>
                </div>
              </div>
            </div>

            {/* User Behavior Breakdown */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#c9a227]" />
                Expected User Behavior & AOV
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {userTypes.map((user, index) => (
                  <div key={index} className="bg-slate-900/50 rounded-xl p-5 border border-slate-600/30">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-bold text-lg">{user.type}</span>
                      <span className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-300">{user.percentage}% of users</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Brands used:</span>
                        <span className="text-white">{user.brands}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Coins redeemed:</span>
                        <span className="text-green-400">{user.coins}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-slate-700">
                        <span className="text-slate-300 font-medium">Total AOV:</span>
                        <span className="text-[#c9a227] font-bold">{user.aov}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-[#c9a227]/10 rounded-lg p-4 border border-[#c9a227]/30">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="w-6 h-6 text-[#c9a227]" />
                  <div>
                    <div className="text-white font-medium">Weighted Average AOV: ~800 AED/user/month</div>
                    <div className="text-sm text-slate-400">Even light users generate 400+ AED monthly across partner network</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nuqta&apos;s Position */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#c9a227]" />
                Nuqta&apos;s Role (What We DON&apos;T Do)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/30">
                  <div className="text-red-400 font-bold mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    NOT Our Responsibility
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">✗</span>
                      Owning or operating brands
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">✗</span>
                      Managing partner operations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">✗</span>
                      Product/service quality control
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">✗</span>
                      Inventory or logistics
                    </li>
                  </ul>
                </div>
                <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/30">
                  <div className="text-green-400 font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Our Focus
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      Acquiring & retaining members
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      Partnering with quality brands
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      Coin/redemption technology
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      Collecting fixed commission
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Partner Model Tab */}
        {activeTab === 'partners' && (
          <div className="space-y-8">
            {/* Partner Value Proposition */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Store className="w-5 h-5 text-[#c9a227]" />
                Why Partners Join Nuqta+
              </h2>
              <p className="text-slate-400 mb-6">Compelling value proposition for exclusive partner brands</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {partnerBenefits.map((item, index) => (
                  <div key={index} className="bg-slate-900/50 rounded-xl p-5 border border-slate-600/30">
                    <div className="w-10 h-10 rounded-lg bg-[#c9a227]/20 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-[#c9a227]" />
                    </div>
                    <div className="text-white font-medium mb-1">{item.benefit}</div>
                    <p className="text-sm text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner Economics */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#c9a227]" />
                Partner Economics Example
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-600/30">
                  <div className="text-blue-400 font-bold mb-4">Salon Partner - Monthly</div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Nuqta+ members visiting:</span>
                      <span className="text-white">500 customers</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Avg service price:</span>
                      <span className="text-white">300 AED</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Coin discount applied:</span>
                      <span className="text-green-400">-100 AED</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Customer pays:</span>
                      <span className="text-white">200 AED</span>
                    </div>
                    <div className="border-t border-slate-700 pt-3">
                      <div className="flex justify-between">
                        <span className="text-white font-medium">Total revenue from Nuqta+:</span>
                        <span className="text-[#c9a227] font-bold">100,000 AED</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-1">(500 customers × 200 AED)</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-5 border border-green-500/30">
                  <div className="text-green-400 font-bold mb-4">Partner Benefits</div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">Zero CAC</div>
                        <div className="text-sm text-slate-400">No marketing spend to acquire these 500 customers</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">Recurring monthly</div>
                        <div className="text-sm text-slate-400">Same customers return every month</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">Upsell opportunity</div>
                        <div className="text-sm text-slate-400">Add services beyond coin value</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Commission Structure */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-xl p-6 border border-[#c9a227]/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Percent className="w-5 h-5 text-[#c9a227]" />
                Nuqta Commission Structure
              </h2>
              <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-600/30 mb-4">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-[#c9a227]">Fixed Commission Only</div>
                  <p className="text-slate-400">Nuqta earns predictable revenue per transaction</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">% per transaction</div>
                    <div className="text-sm text-slate-400">Negotiated with each partner</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">No hidden fees</div>
                    <div className="text-sm text-slate-400">Transparent partnership</div>
                  </div>
                </div>
              </div>
              <div className="text-center text-slate-300">
                <span className="text-[#c9a227] font-medium">Partner keeps majority of revenue</span> — Nuqta&apos;s value is in bringing guaranteed customers
              </div>
            </div>

            {/* Exclusivity */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#c9a227]" />
                Exclusive Category Position
              </h2>
              <div className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/30 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">Only ONE Partner Per Category</div>
                  <p className="text-slate-300">Salon category = 1 exclusive salon partner. No competition within Nuqta+.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {partnerBrands.slice(0, 5).map((brand) => (
                  <div key={brand.id} className="bg-slate-900/50 rounded-lg p-3 text-center border border-slate-600/30">
                    <brand.icon className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                    <div className="text-xs text-white">{brand.name}</div>
                    <div className="text-[10px] text-purple-400 mt-1">1 Partner Only</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner Responsibility */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-[#c9a227]" />
                Partner Requirements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-blue-500/30">
                  <div className="text-blue-400 font-medium mb-2">Service Quality</div>
                  <p className="text-sm text-slate-400">Partners must maintain premium service standards to stay in program</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-green-500/30">
                  <div className="text-green-400 font-medium mb-2">Honor Coin Value</div>
                  <p className="text-sm text-slate-400">Full 100 AED discount applied to every Nuqta+ redemption</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-purple-500/30">
                  <div className="text-purple-400 font-medium mb-2">Customer Experience</div>
                  <p className="text-sm text-slate-400">Treat Nuqta+ members as VIP customers</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-[#c9a227]/30">
                  <div className="text-[#c9a227] font-medium mb-2">Reporting</div>
                  <p className="text-sm text-slate-400">Share redemption data for Nuqta analytics</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Brands & Coins Tab */}
        {activeTab === 'brands' && (
          <div className="space-y-8">
            {/* All Partner Brands */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Gift className="w-5 h-5 text-[#c9a227]" />
                10 Exclusive Partner Brands
              </h2>
              <p className="text-slate-400 mb-6">Each partner provides 100 AED monthly coin value to Nuqta+ members</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {partnerBrands.map((brand) => {
                  const isPhase1 = phase1Brands.includes(brand.id);
                  return (
                    <div
                      key={brand.id}
                      className={`bg-slate-900/50 rounded-xl p-4 border ${isPhase1 ? 'border-green-500/30' : 'border-slate-600/30'}`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg bg-${brand.color}-500/20 flex items-center justify-center`}>
                          <brand.icon className={`w-5 h-5 text-${brand.color}-400`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium">{brand.name}</div>
                          <div className="text-xs text-blue-400">{brand.partnerType}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-[#c9a227] font-bold">{brand.coin} AED/month</div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${isPhase1 ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                          {isPhase1 ? 'Phase 1' : 'Phase 2'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-lg p-4 border border-[#c9a227]/30">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">Total Monthly Coin Value</span>
                  <span className="text-2xl font-bold text-[#c9a227]">{totalCoinValue} AED</span>
                </div>
              </div>
            </div>

            {/* Coin Rules */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#c9a227]" />
                Coin Rules (Final Structure)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Rule</th>
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coinRules.map((rule, index) => (
                      <tr key={index} className="border-b border-slate-800">
                        <td className="py-3 px-4 text-white font-medium">{rule.rule}</td>
                        <td className="py-3 px-4 text-slate-300">{rule.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Category Split */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                  Service Partners
                </h3>
                <div className="space-y-3">
                  {['Salon & Spa', 'Laundry', 'Coffee', "Men's Grooming", 'Tours & Travel', 'Home Cleaning', 'Premium Car Wash', 'Pet Grooming & Care'].map((brand, i) => (
                    <div key={i} className="bg-slate-900/50 rounded-lg px-4 py-3 flex items-center justify-between">
                      <span className="text-white font-medium">{brand}</span>
                      <span className="text-xs text-blue-400">Service Partner</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-sm text-slate-400">
                  Users visit partner locations for services. Partner handles all operations.
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-purple-400" />
                  Product Partners
                </h3>
                <div className="space-y-3">
                  {['Perfume & Oud', 'Abaya', 'Jewellery', 'Haircare & Cosmetics', 'Home Fragrance', 'Handbags', 'Desserts', 'Florist & Gifts'].map((brand, i) => (
                    <div key={i} className="bg-slate-900/50 rounded-lg px-4 py-3 flex items-center justify-between">
                      <span className="text-white font-medium">{brand}</span>
                      <span className="text-xs text-purple-400">Product Partner</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-sm text-slate-400">
                  Users redeem online or in-store. Partner handles fulfillment.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Revenue Model Tab */}
        {activeTab === 'revenue' && (
          <div className="space-y-8">
            {/* Nuqta Revenue Streams */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#c9a227]" />
                Nuqta Revenue Streams
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#c9a227]/20 to-transparent rounded-xl p-6 border border-[#c9a227]/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Wallet className="w-8 h-8 text-[#c9a227]" />
                    <div>
                      <div className="text-[#c9a227] font-bold text-lg">Membership Fee</div>
                      <div className="text-slate-400 text-sm">Recurring revenue</div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">99 AED</div>
                  <div className="text-slate-400">per user per month</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-transparent rounded-xl p-6 border border-green-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Percent className="w-8 h-8 text-green-400" />
                    <div>
                      <div className="text-green-400 font-bold text-lg">Partner Commission</div>
                      <div className="text-slate-400 text-sm">Transaction revenue</div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Fixed %</div>
                  <div className="text-slate-400">per partner transaction</div>
                </div>
              </div>
            </div>

            {/* Revenue Projection */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#c9a227]" />
                Monthly Revenue Projection
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Timeline</th>
                      <th className="text-right py-3 px-4 text-slate-400 font-medium">Members</th>
                      <th className="text-right py-3 px-4 text-slate-400 font-medium">Membership Rev</th>
                      <th className="text-right py-3 px-4 text-slate-400 font-medium">Partner AOV</th>
                      <th className="text-right py-3 px-4 text-slate-400 font-medium">Commission (est 5%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-white">Month 3</td>
                      <td className="py-3 px-4 text-right text-slate-300">5,000</td>
                      <td className="py-3 px-4 text-right text-[#c9a227]">495K AED</td>
                      <td className="py-3 px-4 text-right text-slate-300">4M AED</td>
                      <td className="py-3 px-4 text-right text-green-400">200K AED</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-white">Month 6</td>
                      <td className="py-3 px-4 text-right text-slate-300">15,000</td>
                      <td className="py-3 px-4 text-right text-[#c9a227]">1.49M AED</td>
                      <td className="py-3 px-4 text-right text-slate-300">12M AED</td>
                      <td className="py-3 px-4 text-right text-green-400">600K AED</td>
                    </tr>
                    <tr className="border-b border-slate-800 bg-slate-900/30">
                      <td className="py-3 px-4 text-white font-bold">Month 12</td>
                      <td className="py-3 px-4 text-right text-white font-bold">50,000</td>
                      <td className="py-3 px-4 text-right text-[#c9a227] font-bold">4.95M AED</td>
                      <td className="py-3 px-4 text-right text-white font-bold">40M AED</td>
                      <td className="py-3 px-4 text-right text-green-400 font-bold">2M AED</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-sm text-slate-400">
                * Commission rate negotiated per partner. Estimated 5% average for projection.
              </div>
            </div>

            {/* What Nuqta DOESN&apos;T Earn */}
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                What Nuqta Does NOT Earn From
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-red-400 font-medium mb-1">Product Sales</div>
                  <p className="text-sm text-slate-400">Partners keep all product revenue minus commission</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-red-400 font-medium mb-1">Service Delivery</div>
                  <p className="text-sm text-slate-400">Partners handle & keep service revenue minus commission</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-red-400 font-medium mb-1">Inventory</div>
                  <p className="text-sm text-slate-400">Zero inventory risk - partners manage their own stock</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-red-400 font-medium mb-1">Operations</div>
                  <p className="text-sm text-slate-400">Zero operational cost - partners run their businesses</p>
                </div>
              </div>
            </div>

            {/* Value for Investors */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-xl p-6 border border-[#c9a227]/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-[#c9a227]" />
                Investor Value Proposition
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">Guaranteed MAU</div>
                  <div className="text-sm text-slate-400">Coin expiry = forced engagement</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">Asset-Light</div>
                  <div className="text-sm text-slate-400">No inventory, no operations</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">Recurring + Commission</div>
                  <div className="text-sm text-slate-400">Dual revenue streams</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Launch Plan Tab */}
        {activeTab === 'launch' && (
          <div className="space-y-8">
            {/* Launch Phases */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-slate-800/30 rounded-xl p-6 border border-green-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 font-bold text-sm">P1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Phase 1: Launch</h3>
                    <p className="text-sm text-green-400">First 90 Days</p>
                  </div>
                </div>
                <p className="text-slate-400 mb-4">Sign 6 exclusive partners:</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {partnerBrands.filter(b => phase1Brands.includes(b.id)).map((brand) => (
                    <div key={brand.id} className="bg-slate-900/50 rounded-lg px-3 py-2 flex items-center gap-2">
                      <brand.icon className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-white">{brand.name}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-600/30">
                  <div className="text-sm text-slate-400 font-medium mb-2">Why these partners first?</div>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li>• High-frequency usage (salon, coffee, laundry)</li>
                    <li>• Strong partner interest categories</li>
                    <li>• Proven customer demand</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-sm">P2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Phase 2: Expansion</h3>
                    <p className="text-sm text-blue-400">Month 4-8</p>
                  </div>
                </div>
                <p className="text-slate-400 mb-4">Add 4 more partners:</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {partnerBrands.filter(b => phase2Brands.includes(b.id)).map((brand) => (
                    <div key={brand.id} className="bg-slate-900/50 rounded-lg px-3 py-2 flex items-center gap-2">
                      <brand.icon className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-white">{brand.name}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-600/30">
                  <div className="text-sm text-slate-400 font-medium mb-2">Expansion criteria:</div>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li>• Phase 1 partners successful</li>
                    <li>• Member feedback positive</li>
                    <li>• Redemption rates healthy</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 90-Day Roadmap */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#c9a227]" />
                90-Day Execution Roadmap
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {roadmap.map((phase, index) => (
                  <div
                    key={index}
                    className={`bg-slate-900/50 rounded-xl p-5 border ${
                      phase.status === 'in_progress' ? 'border-[#c9a227]/50' : 'border-slate-600/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-[#c9a227] font-bold">{phase.month}</div>
                        <div className="text-white font-medium">{phase.title}</div>
                      </div>
                      {phase.status === 'in_progress' ? (
                        <span className="bg-[#c9a227]/20 text-[#c9a227] text-xs px-2 py-1 rounded-full">Active</span>
                      ) : (
                        <span className="bg-slate-700 text-slate-400 text-xs px-2 py-1 rounded-full">Pending</span>
                      )}
                    </div>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${
                            phase.status === 'in_progress' ? 'bg-[#c9a227]' : 'bg-slate-600'
                          }`} />
                          <span className="text-slate-300">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Marketing Tab */}
        {activeTab === 'marketing' && (
          <div className="space-y-8">
            {/* Core Message */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-xl p-6 border border-[#c9a227]/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-[#c9a227]" />
                Marketing Positioning
              </h2>
              <div className="bg-slate-900/50 rounded-xl p-6 text-center">
                <div className="text-sm text-slate-400 mb-2">Core Message</div>
                <p className="text-2xl sm:text-3xl text-white font-bold">
                  &ldquo;Pay <span className="text-[#c9a227]">99 AED</span>. Get up to <span className="text-green-400">1,600 AED</span> in lifestyle benefits every month.&rdquo;
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <Gift className="w-5 h-5 text-green-400 mx-auto mb-1" />
                  <div className="text-sm text-white">First month free</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <Shield className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <div className="text-sm text-white">Cancel anytime</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <Zap className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                  <div className="text-sm text-white">No caps</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <CheckCircle className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                  <div className="text-sm text-white">No hidden fees</div>
                </div>
              </div>
            </div>

            {/* Marketing Channels */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#c9a227]" />
                Customer Acquisition Strategy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {marketingChannels.map((channel, index) => (
                  <div key={index} className="bg-slate-900/50 rounded-xl p-5 border border-slate-600/30">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#c9a227]/20 flex items-center justify-center">
                        <channel.icon className="w-5 h-5 text-[#c9a227]" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{channel.channel}</div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          channel.priority === 'critical'
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {channel.priority.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {channel.types.map((type, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                          <ChevronRight className="w-3 h-3 text-slate-500" />
                          {type}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Street Interview Series */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-6 border border-red-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <Play className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Street Interview Series</h3>
                  <p className="text-sm text-slate-400">Viral content strategy</p>
                </div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                <div className="text-[#c9a227] font-medium mb-2">Series Concept:</div>
                <p className="text-xl text-white">&ldquo;How much could you save with Nuqta?&rdquo;</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">Real</div>
                  <div className="text-xs text-slate-400">people</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">Real</div>
                  <div className="text-xs text-slate-400">reactions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">Viral</div>
                  <div className="text-xs text-slate-400">potential</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Growth Targets Tab */}
        {activeTab === 'growth' && (
          <div className="space-y-8">
            {/* Growth Timeline */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#c9a227]" />
                Growth Targets
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {growthTargets.map((target, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-xl p-6 border border-slate-600/30"
                  >
                    <div className="text-slate-400 text-sm mb-2">{target.month}</div>
                    <div className="flex items-end gap-2 mb-4">
                      <span className="text-4xl font-bold text-white">{target.members}</span>
                      <span className="text-slate-400 text-sm mb-1">members</span>
                    </div>
                    <div className="bg-[#c9a227]/10 rounded-lg p-3 border border-[#c9a227]/30">
                      <div className="text-sm text-slate-400">Total Partner AOV</div>
                      <div className="text-xl font-bold text-[#c9a227]">{target.totalAOV}</div>
                    </div>
                    {/* Visual bar */}
                    <div className="mt-4 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#c9a227] to-green-400 rounded-full"
                        style={{ width: `${(target.memberGrowth / 50000) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 text-center">
                <Activity className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-slate-400">MAU guarantee</div>
              </div>
              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 text-center">
                <DollarSign className="w-6 h-6 text-[#c9a227] mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">1,600+</div>
                <div className="text-xs text-slate-400">AED AOV/user</div>
              </div>
              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 text-center">
                <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">3-4</div>
                <div className="text-xs text-slate-400">brands/user</div>
              </div>
              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 text-center">
                <RefreshCw className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">Monthly</div>
                <div className="text-xs text-slate-400">recurring visits</div>
              </div>
            </div>

            {/* Scale Impact */}
            <div className="bg-gradient-to-r from-purple-500/20 to-[#c9a227]/20 rounded-xl p-6 border border-purple-500/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-400" />
                Scale Impact at 50K Members
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-green-400">50K</div>
                  <div className="text-sm text-slate-400">Guaranteed monthly active users</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-[#c9a227]">40M+</div>
                  <div className="text-sm text-slate-400">AED monthly partner revenue</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-purple-400">150K+</div>
                  <div className="text-sm text-slate-400">Monthly partner visits</div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="text-slate-300">Each partner receives ~<span className="text-[#c9a227] font-bold">5,000 customers/month</span> guaranteed</div>
              </div>
            </div>
          </div>
        )}

      </main>

      <GlobalFooter />
    </div>
  );
}
