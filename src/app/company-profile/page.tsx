'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Crown, Wallet, Home, Truck, ArrowLeftRight, Gamepad2,
  Car, Plane, Package, Building2, Users, Globe, Target,
  TrendingUp, BarChart3, Shield, Award, Rocket, CheckCircle,
  ArrowRight, ChevronRight, Star, DollarSign, Briefcase,
  MapPin, Calendar, Zap, Heart, LineChart, PieChart,
  Network, Layers, CircleDollarSign, Handshake, Eye,
  Lightbulb, Lock, UserCheck, Smartphone, BadgePercent,
  Store, Gift
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';
import {
  NuqtaPlusLogo, QistLogo, SakinLogo, WasilLogo,
  HawilLogo, RakabLogo, GamificationLogo, NuqtaMainLogo,
  SafarLogo, AjerLogo, EcosystemLogo
} from '@/components/CompanyLogos';

// Tabs
const tabs = [
  { id: 'overview', label: 'Executive Summary', icon: Building2 },
  { id: 'ecosystem', label: 'Product Ecosystem', icon: Network },
  { id: 'market', label: 'Market Opportunity', icon: Globe },
  { id: 'business', label: 'Business Model', icon: CircleDollarSign },
  { id: 'traction', label: 'Traction & Metrics', icon: TrendingUp },
  { id: 'team', label: 'Team & Leadership', icon: Users },
  { id: 'financials', label: 'Financial Projections', icon: LineChart },
  { id: 'investment', label: 'Investment Opportunity', icon: Briefcase },
];

// Core Products for Ecosystem
const products = [
  { name: 'Nuqta+', arabic: 'نقطة+', desc: 'Membership & Rewards', color: 'from-[#c9a227] to-amber-600', logo: NuqtaPlusLogo, icon: Crown, revenue: 'Subscription + Commission' },
  { name: 'Qist', arabic: 'قسط', desc: 'Buy Now Pay Later', color: 'from-violet-500 to-purple-600', logo: QistLogo, icon: Wallet, revenue: '3-5% Platform Fee' },
  { name: 'Sakin', arabic: 'ساكن', desc: 'Rent Financing', color: 'from-emerald-500 to-green-600', logo: SakinLogo, icon: Home, revenue: '3% Financing Fee' },
  { name: 'Wasil', arabic: 'واصل', desc: 'Quick Commerce', color: 'from-orange-500 to-red-500', logo: WasilLogo, icon: Truck, revenue: 'Delivery + Commission' },
  { name: 'Hawil', arabic: 'حوّل', desc: 'Remittance & Card', color: 'from-blue-500 to-cyan-500', logo: HawilLogo, icon: ArrowLeftRight, revenue: '0.5% Transfer Fee' },
  { name: 'Rakab', arabic: 'ركب', desc: 'Ride-Hailing', color: 'from-green-500 to-emerald-600', logo: RakabLogo, icon: Car, revenue: '15% Commission' },
  { name: 'Gamification', arabic: 'ألعاب', desc: 'Engagement Engine', color: 'from-pink-500 to-rose-500', logo: GamificationLogo, icon: Gamepad2, revenue: 'Drives LTV' },
  { name: 'Safar', arabic: 'سفر', desc: 'Travel Services', color: 'from-cyan-500 to-teal-600', logo: SafarLogo, icon: Plane, revenue: '8-15% Commission' },
  { name: 'Ajer', arabic: 'أجر', desc: 'Rental Marketplace', color: 'from-violet-500 to-purple-600', logo: AjerLogo, icon: Package, revenue: '15-25% Commission' },
];

// Key Metrics
const keyMetrics = [
  { label: 'Products', value: '9', sublabel: 'Integrated ecosystem' },
  { label: 'Target MAU', value: '100K', sublabel: 'Year 1' },
  { label: 'Merchant LOIs', value: '32+', sublabel: 'Signed' },
  { label: 'GCC Countries', value: '6', sublabel: 'Expansion plan' },
  { label: 'LTV:CAC', value: '16.8x', sublabel: 'Ratio' },
  { label: 'Valuation Cap', value: '$5M', sublabel: 'Pre-seed' },
];

// Revenue Streams
const revenueStreams = [
  { stream: 'Qist BNPL', percentage: 35, description: '3-5% platform fee on merchant transactions', icon: Wallet },
  { stream: 'Nuqta+ Subscriptions', percentage: 20, description: '99 AED/month membership fees', icon: Crown },
  { stream: 'Hawil Remittance', percentage: 15, description: '0.5% transfer fee on $50B+ corridor volume', icon: ArrowLeftRight },
  { stream: 'Safar Travel', percentage: 12, description: '8-15% commission on travel bookings', icon: Plane },
  { stream: 'Ajer Rentals', percentage: 10, description: '15-25% platform commission', icon: Package },
  { stream: 'Other (Rakab, Wasil, Sakin)', percentage: 8, description: 'Commission and financing fees', icon: Layers },
];

// Competitive Advantages
const advantages = [
  {
    title: 'Ecosystem Lock-in',
    description: '9 products that work together. Use one, get value from all. 3x higher retention than single-product apps.',
    icon: Network,
    metric: '3x retention'
  },
  {
    title: 'Google Rate FX',
    description: '0% markup on currency exchange. Competitors charge 2-4%. Tourists save $100+ per trip.',
    icon: DollarSign,
    metric: '0% markup'
  },
  {
    title: 'Unified Wallet',
    description: 'Nuqta coins earned everywhere, spent anywhere. One wallet across all 9 products.',
    icon: Wallet,
    metric: '9 products'
  },
  {
    title: 'Tourist + Resident Focus',
    description: 'Only platform serving both 21M tourists AND 9M residents with tailored products.',
    icon: Globe,
    metric: '30M users'
  },
];

// GCC Expansion
const gccCountries = [
  { country: 'UAE', flag: '🇦🇪', status: 'Active', timeline: 'Now', population: '9.3M', tourists: '21M/yr' },
  { country: 'Saudi Arabia', flag: '🇸🇦', status: 'Phase 2', timeline: '2028', population: '36M', tourists: '27M/yr' },
  { country: 'Qatar', flag: '🇶🇦', status: 'Phase 2', timeline: '2028', population: '2.7M', tourists: '4M/yr' },
  { country: 'Kuwait', flag: '🇰🇼', status: 'Phase 3', timeline: '2029', population: '4.3M', tourists: '1.5M/yr' },
  { country: 'Bahrain', flag: '🇧🇭', status: 'Phase 3', timeline: '2029', population: '1.5M', tourists: '5M/yr' },
  { country: 'Oman', flag: '🇴🇲', status: 'Phase 3', timeline: '2029', population: '5M', tourists: '3.5M/yr' },
];

// Financial Projections
const financialProjections = [
  { year: 'Y1 (2027)', revenue: '2.5M', users: '100K', merchants: '2,500', valuation: '$15M' },
  { year: 'Y2 (2028)', revenue: '15M', users: '350K', merchants: '8,000', valuation: '$75M' },
  { year: 'Y3 (2029)', revenue: '65M', users: '800K', merchants: '20,000', valuation: '$250M' },
  { year: 'Y4 (2030)', revenue: '180M', users: '1.5M', merchants: '40,000', valuation: '$600M' },
  { year: 'Y5 (2031)', revenue: '480M', users: '3M', merchants: '75,000', valuation: '$1.2B' },
];

// Investment Terms
const investmentTerms = [
  { term: 'Instrument', value: 'SAFE with 20% discount' },
  { term: 'Valuation Cap', value: '$5M' },
  { term: 'Target Raise', value: '$400K (AED 1.47M)' },
  { term: 'Tranche 1', value: '$200K (immediate)' },
  { term: 'Tranche 2', value: '$200K (on milestones)' },
  { term: 'Use of Funds', value: 'Marketing 55%, Salaries 25%, Tech 20%' },
];

// Milestones
const milestones = [
  { milestone: 'Pre-Launch (Now)', items: ['32 merchant LOIs signed', 'MVP development 80%', 'Team structure defined'] },
  { milestone: 'Q1 2026', items: ['MVP launch March 1', '50-100 merchants live', '10K user target'] },
  { milestone: 'Q2 2026', items: ['500 merchants', '25K MAU', 'CTO/Co-founder hired'] },
  { milestone: 'Q3-Q4 2026', items: ['1,500+ merchants', '50K+ MAU', 'Seed round prep'] },
  { milestone: '2027', items: ['100K MAU target', '2,500 merchants', '$2.5M revenue'] },
];

export default function CompanyProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-[#0d1c30] border-b border-[#2a3a52] py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 sm:w-8 sm:h-8 relative">
            <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain" />
          </div>
          <span className="font-bold text-[#c9a227] text-sm sm:text-base">NUQTA</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/data-room" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
            Data Room
          </Link>
          <Link href="/ecosystem" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
            Ecosystem
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#0d1c30] to-[#0a1628] py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#c9a227]/20 border border-[#c9a227]/40 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4 text-[#c9a227]" />
              <span className="text-[#c9a227] text-sm font-medium">INVESTOR-GRADE COMPANY PROFILE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              <span className="text-[#c9a227]">Nuqta</span> نقطة
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-6">
              The Integrated Financial Ecosystem for UAE & GCC
            </p>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Nine interconnected products serving 30M+ potential users across tourists and residents.
              One wallet, one membership, endless value.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 mb-8">
            {keyMetrics.map((metric) => (
              <div key={metric.label} className="bg-[#1a2a42] rounded-xl p-4 border border-[#2a3a52] text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#c9a227]">{metric.value}</div>
                <div className="text-sm text-white font-medium">{metric.label}</div>
                <div className="text-xs text-gray-500">{metric.sublabel}</div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/data-room" className="flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-[#0a1628] rounded-lg font-bold hover:bg-[#f4d35e] transition-colors">
              <Briefcase className="w-4 h-4" />
              Data Room
            </Link>
            <Link href="/ecosystem" className="flex items-center gap-2 px-4 py-2 bg-[#1a2a42] border border-[#c9a227]/50 text-[#c9a227] rounded-lg font-medium hover:bg-[#c9a227]/10 transition-colors">
              <Network className="w-4 h-4" />
              Full Ecosystem
            </Link>
            <Link href="/memo" className="flex items-center gap-2 px-4 py-2 bg-[#1a2a42] border border-[#2a3a52] text-white rounded-lg font-medium hover:border-[#c9a227]/50 transition-colors">
              <Eye className="w-4 h-4" />
              Investment Memo
            </Link>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-[52px] sm:top-[60px] z-40 bg-[#0d1c30] border-b border-[#2a3a52]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-[#0a1628]'
                    : 'text-gray-400 hover:text-white hover:bg-[#1a2a42]'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* Executive Summary */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Vision */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">The Vision</h2>
              <p className="text-lg text-gray-300 mb-6">
                Nuqta is building the <span className="text-[#c9a227] font-semibold">integrated financial ecosystem</span> for the UAE and GCC region.
                Unlike fragmented fintech solutions, Nuqta creates a unified experience where every financial need — from payments
                to housing to travel — is connected through one membership, one wallet, and one rewards system.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-[#0a1628]/50 rounded-xl p-4 border border-[#2a3a52]">
                  <Target className="w-8 h-8 text-[#c9a227] mb-2" />
                  <h3 className="font-bold mb-1">Mission</h3>
                  <p className="text-sm text-gray-400">Make every dirham work harder through intelligent payments and rewards</p>
                </div>
                <div className="bg-[#0a1628]/50 rounded-xl p-4 border border-[#2a3a52]">
                  <Lightbulb className="w-8 h-8 text-[#c9a227] mb-2" />
                  <h3 className="font-bold mb-1">Insight</h3>
                  <p className="text-sm text-gray-400">9M residents and 21M tourists need one platform, not 20 apps</p>
                </div>
                <div className="bg-[#0a1628]/50 rounded-xl p-4 border border-[#2a3a52]">
                  <Rocket className="w-8 h-8 text-[#c9a227] mb-2" />
                  <h3 className="font-bold mb-1">Ambition</h3>
                  <p className="text-sm text-gray-400">$1.2B valuation by 2031, GCC-wide expansion</p>
                </div>
              </div>
            </div>

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/30">
                <h3 className="text-xl font-bold text-red-400 mb-4">The Problem</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-sm">✗</span>
                    </div>
                    <p className="text-gray-300">Tourists pay 2-4% FX markup on every transaction</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-sm">✗</span>
                    </div>
                    <p className="text-gray-300">Residents need 10+ apps for daily financial life</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-sm">✗</span>
                    </div>
                    <p className="text-gray-300">Reward points fragmented, hard to use, low value</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-sm">✗</span>
                    </div>
                    <p className="text-gray-300">No single platform serves both tourists and residents</p>
                  </li>
                </ul>
              </div>
              <div className="bg-emerald-500/10 rounded-2xl p-6 border border-emerald-500/30">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">The Nuqta Solution</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-gray-300">Google rate FX with 0% markup via Hawil Card</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-gray-300">9 integrated products in one super-app</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-gray-300">Universal Nuqta coins: earn everywhere, spend everywhere</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-gray-300">Tailored features for both tourists and residents</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Why Now */}
            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52]">
              <h3 className="text-xl font-bold mb-4">Why Now?</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">🌍</div>
                  <h4 className="font-bold text-[#c9a227] mb-1">Tourism Boom</h4>
                  <p className="text-sm text-gray-400">UAE targeting 40M tourists by 2031 (up from 21M)</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">💳</div>
                  <h4 className="font-bold text-[#c9a227] mb-1">Digital Payments</h4>
                  <p className="text-sm text-gray-400">80%+ card penetration, cashless society push</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">🏦</div>
                  <h4 className="font-bold text-[#c9a227] mb-1">BNPL Growth</h4>
                  <p className="text-sm text-gray-400">MENA BNPL market to hit $10B by 2028</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">🔗</div>
                  <h4 className="font-bold text-[#c9a227] mb-1">Super-App Gap</h4>
                  <p className="text-sm text-gray-400">No dominant super-app in GCC yet</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Ecosystem */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">9 Products, One Ecosystem</h2>
              <p className="text-gray-400">Each product adds value independently but creates magic together</p>
            </div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => {
                const Logo = product.logo;
                return (
                  <div key={product.name} className="bg-[#1a2a42] rounded-xl p-5 border border-[#2a3a52] hover:border-[#c9a227]/50 transition-all group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 flex-shrink-0">
                        <Logo size={48} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{product.name} <span className="text-[#c9a227]">{product.arabic}</span></h3>
                        <p className="text-sm text-gray-400">{product.desc}</p>
                      </div>
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${product.color} text-white`}>
                      {product.revenue}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Ecosystem Synergies */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold mb-4">Cross-Product Synergies</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#c9a227] mb-2">For Tourists</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Land → Get Hawil Card at airport → Rakab ride → Sakin Stays short-term → Wasil delivery → Safar book tours → Ajer rent camera → Earn coins everywhere → Redeem before leaving
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Save $100+ on FX</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">5% back on rides</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">Rent vs buy</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#c9a227] mb-2">For Residents</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Nuqta+ membership → Qist for big purchases → Sakin for rent financing → Wasil for daily needs → Hawil to send money home → Rakab for commute → Safar for travel → Ajer passive income
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-amber-500/20 text-amber-400 rounded text-xs">2,500 AED/yr savings</span>
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs">0% BNPL fees</span>
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs">One app for all</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Ecosystem Wins */}
            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52]">
              <h3 className="text-xl font-bold mb-4">Why Ecosystems Win</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-[#c9a227]/20 rounded-2xl flex items-center justify-center mb-3">
                    <TrendingUp className="w-8 h-8 text-[#c9a227]" />
                  </div>
                  <h4 className="font-bold mb-1">3x Higher Retention</h4>
                  <p className="text-sm text-gray-400">Multi-product users stick longer than single-product users</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-[#c9a227]/20 rounded-2xl flex items-center justify-center mb-3">
                    <DollarSign className="w-8 h-8 text-[#c9a227]" />
                  </div>
                  <h4 className="font-bold mb-1">Lower CAC</h4>
                  <p className="text-sm text-gray-400">Acquire for one product, monetize across nine</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-[#c9a227]/20 rounded-2xl flex items-center justify-center mb-3">
                    <Lock className="w-8 h-8 text-[#c9a227]" />
                  </div>
                  <h4 className="font-bold mb-1">Switching Cost</h4>
                  <p className="text-sm text-gray-400">Coins, history, and integrations create lock-in</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Market Opportunity */}
        {activeTab === 'market' && (
          <div className="space-y-8">
            {/* TAM/SAM/SOM */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-[#1a2a42] rounded-xl p-6 border border-[#2a3a52] text-center">
                <div className="text-4xl font-bold text-[#c9a227] mb-2">$600B</div>
                <div className="font-bold">TAM</div>
                <div className="text-sm text-gray-400">GCC Consumer Spending</div>
              </div>
              <div className="bg-[#1a2a42] rounded-xl p-6 border border-[#2a3a52] text-center">
                <div className="text-4xl font-bold text-[#c9a227] mb-2">$45B</div>
                <div className="font-bold">SAM</div>
                <div className="text-sm text-gray-400">UAE Digital Transactions</div>
              </div>
              <div className="bg-[#1a2a42] rounded-xl p-6 border border-[#2a3a52] text-center">
                <div className="text-4xl font-bold text-[#c9a227] mb-2">$1.35B</div>
                <div className="font-bold">SOM</div>
                <div className="text-sm text-gray-400">3-Year Dubai Target</div>
              </div>
            </div>

            {/* Target Segments */}
            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52]">
              <h3 className="text-xl font-bold mb-6">Target Market Segments</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-500/10 rounded-xl p-5 border border-blue-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Plane className="w-8 h-8 text-blue-400" />
                    <div>
                      <h4 className="font-bold text-lg">Tourists</h4>
                      <p className="text-blue-400">21M visitors/year</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Average spend: $2,400 per trip</li>
                    <li>• Pain point: 2-4% FX loss on every transaction</li>
                    <li>• Products: Hawil Card, Rakab, Wasil, Safar, Ajer</li>
                    <li>• LTV: 500 AED per visit (many return)</li>
                  </ul>
                </div>
                <div className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Home className="w-8 h-8 text-emerald-400" />
                    <div>
                      <h4 className="font-bold text-lg">UAE Residents</h4>
                      <p className="text-emerald-400">9.3M population</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• 85% expat population (send money home)</li>
                    <li>• Pain point: Rent deposits, payment fragmentation</li>
                    <li>• Products: All 9 products relevant</li>
                    <li>• LTV: 2,500 AED/year</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* GCC Expansion */}
            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52]">
              <h3 className="text-xl font-bold mb-6">GCC Expansion Roadmap</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#2a3a52]">
                      <th className="text-left py-3 px-4">Country</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Timeline</th>
                      <th className="text-left py-3 px-4">Population</th>
                      <th className="text-left py-3 px-4">Tourists</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gccCountries.map((country) => (
                      <tr key={country.country} className="border-b border-[#2a3a52]/50">
                        <td className="py-3 px-4 font-medium">
                          <span className="mr-2">{country.flag}</span>{country.country}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded text-xs ${
                            country.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                            country.status === 'Phase 2' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {country.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-400">{country.timeline}</td>
                        <td className="py-3 px-4 text-[#c9a227]">{country.population}</td>
                        <td className="py-3 px-4 text-gray-400">{country.tourists}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30">
                <p className="text-sm text-gray-300">
                  <strong className="text-[#c9a227]">Total Addressable:</strong> 58M+ residents + 60M+ tourists across GCC.
                  Same infrastructure, same wallet, localized features for each market.
                </p>
              </div>
            </div>

            {/* Competitive Landscape */}
            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52]">
              <h3 className="text-xl font-bold mb-6">Competitive Landscape</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#2a3a52]">
                      <th className="text-left py-3 px-4">Feature</th>
                      <th className="text-center py-3 px-4 text-[#c9a227]">Nuqta</th>
                      <th className="text-center py-3 px-4">Tabby</th>
                      <th className="text-center py-3 px-4">Careem</th>
                      <th className="text-center py-3 px-4">Wise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#2a3a52]/50">
                      <td className="py-3 px-4">BNPL</td>
                      <td className="py-3 px-4 text-center text-green-400">✓ Qist</td>
                      <td className="py-3 px-4 text-center text-green-400">✓</td>
                      <td className="py-3 px-4 text-center text-gray-500">✗</td>
                      <td className="py-3 px-4 text-center text-gray-500">✗</td>
                    </tr>
                    <tr className="border-b border-[#2a3a52]/50">
                      <td className="py-3 px-4">FX at Google Rate</td>
                      <td className="py-3 px-4 text-center text-green-400">✓ 0% markup</td>
                      <td className="py-3 px-4 text-center text-gray-500">✗</td>
                      <td className="py-3 px-4 text-center text-gray-500">✗</td>
                      <td className="py-3 px-4 text-center text-yellow-400">~ Low fee</td>
                    </tr>
                    <tr className="border-b border-[#2a3a52]/50">
                      <td className="py-3 px-4">Ride-Hailing</td>
                      <td className="py-3 px-4 text-center text-green-400">✓ Rakab</td>
                      <td className="py-3 px-4 text-center text-gray-500">✗</td>
                      <td className="py-3 px-4 text-center text-green-400">✓</td>
                      <td className="py-3 px-4 text-center text-gray-500">✗</td>
                    </tr>
                    <tr className="border-b border-[#2a3a52]/50">
                      <td className="py-3 px-4">Rent Financing</td>
                      <td className="py-3 px-4 text-center text-green-400">✓ Sakin</td>
                      <td className="py-3 px-4 text-center text-gray-500">✗</td>
                      <td className="py-3 px-4 text-center text-gray-500">✗</td>
                      <td className="py-3 px-4 text-center text-gray-500">✗</td>
                    </tr>
                    <tr className="border-b border-[#2a3a52]/50">
                      <td className="py-3 px-4">Unified Rewards</td>
                      <td className="py-3 px-4 text-center text-green-400">✓ 9 products</td>
                      <td className="py-3 px-4 text-center text-gray-500">✗</td>
                      <td className="py-3 px-4 text-center text-yellow-400">~ Limited</td>
                      <td className="py-3 px-4 text-center text-gray-500">✗</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Tourist Focus</td>
                      <td className="py-3 px-4 text-center text-green-400">✓ Hawil Card</td>
                      <td className="py-3 px-4 text-center text-gray-500">✗</td>
                      <td className="py-3 px-4 text-center text-yellow-400">~ Basic</td>
                      <td className="py-3 px-4 text-center text-green-400">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Business Model */}
        {activeTab === 'business' && (
          <div className="space-y-8">
            {/* Revenue Streams */}
            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52]">
              <h3 className="text-xl font-bold mb-6">Revenue Streams (Year 5 Mix)</h3>
              <div className="space-y-4">
                {revenueStreams.map((stream) => (
                  <div key={stream.stream} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#c9a227]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <stream.icon className="w-6 h-6 text-[#c9a227]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">{stream.stream}</span>
                        <span className="text-[#c9a227] font-bold">{stream.percentage}%</span>
                      </div>
                      <div className="h-2 bg-[#0a1628] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#c9a227] to-amber-500 rounded-full"
                          style={{ width: `${stream.percentage}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-400 mt-1">{stream.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unit Economics */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#1a2a42] rounded-xl p-5 border border-[#2a3a52] text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">AED 30</div>
                <div className="font-medium">Blended CAC</div>
                <div className="text-xs text-gray-400">Per acquired user</div>
              </div>
              <div className="bg-[#1a2a42] rounded-xl p-5 border border-[#2a3a52] text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">AED 504</div>
                <div className="font-medium">LTV</div>
                <div className="text-xs text-gray-400">24-month lifetime value</div>
              </div>
              <div className="bg-[#1a2a42] rounded-xl p-5 border border-[#2a3a52] text-center">
                <div className="text-3xl font-bold text-[#c9a227] mb-1">16.8x</div>
                <div className="font-medium">LTV:CAC</div>
                <div className="text-xs text-gray-400">Top-tier ratio</div>
              </div>
              <div className="bg-[#1a2a42] rounded-xl p-5 border border-[#2a3a52] text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">&lt;1 mo</div>
                <div className="font-medium">Payback</div>
                <div className="text-xs text-gray-400">CAC recovery period</div>
              </div>
            </div>

            {/* Competitive Advantages */}
            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52]">
              <h3 className="text-xl font-bold mb-6">Competitive Moat</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {advantages.map((adv) => (
                  <div key={adv.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#c9a227]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <adv.icon className="w-6 h-6 text-[#c9a227]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold">{adv.title}</h4>
                        <span className="px-2 py-0.5 bg-[#c9a227]/20 text-[#c9a227] rounded text-xs">{adv.metric}</span>
                      </div>
                      <p className="text-sm text-gray-400">{adv.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flywheel */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold mb-4">The Nuqta Flywheel</h3>
              <div className="flex flex-wrap justify-center gap-4 items-center">
                <div className="bg-[#0a1628] rounded-xl p-4 text-center">
                  <Users className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                  <p className="text-sm font-medium">More Users</p>
                </div>
                <ArrowRight className="w-6 h-6 text-[#c9a227]" />
                <div className="bg-[#0a1628] rounded-xl p-4 text-center">
                  <Store className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                  <p className="text-sm font-medium">More Merchants</p>
                </div>
                <ArrowRight className="w-6 h-6 text-[#c9a227]" />
                <div className="bg-[#0a1628] rounded-xl p-4 text-center">
                  <Gift className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                  <p className="text-sm font-medium">Better Rewards</p>
                </div>
                <ArrowRight className="w-6 h-6 text-[#c9a227]" />
                <div className="bg-[#0a1628] rounded-xl p-4 text-center">
                  <Heart className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                  <p className="text-sm font-medium">Higher Retention</p>
                </div>
                <ArrowRight className="w-6 h-6 text-[#c9a227] rotate-90 sm:rotate-0" />
                <div className="text-[#c9a227] text-2xl">↺</div>
              </div>
            </div>
          </div>
        )}

        {/* Traction & Metrics */}
        {activeTab === 'traction' && (
          <div className="space-y-8">
            {/* Current Status */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/30 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">32+</div>
                <div className="font-medium">Merchant LOIs</div>
                <div className="text-xs text-gray-400">Signed agreements</div>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-5 border border-blue-500/30 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">80%</div>
                <div className="font-medium">MVP Complete</div>
                <div className="text-xs text-gray-400">Launch: March 1, 2026</div>
              </div>
              <div className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/30 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">6</div>
                <div className="font-medium">C-Suite Team</div>
                <div className="text-xs text-gray-400">Structure defined</div>
              </div>
              <div className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/30 text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">$5M</div>
                <div className="font-medium">Valuation Cap</div>
                <div className="text-xs text-gray-400">Pre-seed SAFE</div>
              </div>
            </div>

            {/* Milestones Timeline */}
            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52]">
              <h3 className="text-xl font-bold mb-6">Milestone Timeline</h3>
              <div className="space-y-6">
                {milestones.map((m, index) => (
                  <div key={m.milestone} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-4 h-4 rounded-full ${index === 0 ? 'bg-[#c9a227]' : 'bg-[#2a3a52]'}`} />
                      {index < milestones.length - 1 && <div className="w-0.5 h-full bg-[#2a3a52] mt-2" />}
                    </div>
                    <div className="flex-1 pb-6">
                      <h4 className={`font-bold ${index === 0 ? 'text-[#c9a227]' : ''}`}>{m.milestone}</h4>
                      <ul className="mt-2 space-y-1">
                        {m.items.map((item, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                            <CheckCircle className={`w-4 h-4 ${index === 0 ? 'text-green-400' : 'text-gray-500'}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Year 1 Targets */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold mb-6">Year 1 (2027) Targets</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#0a1628]/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">100K</div>
                  <div className="text-sm font-medium">MAU</div>
                </div>
                <div className="bg-[#0a1628]/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">2,500</div>
                  <div className="text-sm font-medium">Merchants</div>
                </div>
                <div className="bg-[#0a1628]/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">30%</div>
                  <div className="text-sm font-medium">D30 Retention</div>
                </div>
                <div className="bg-[#0a1628]/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">$2.5M</div>
                  <div className="text-sm font-medium">Revenue</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team & Leadership */}
        {activeTab === 'team' && (
          <div className="space-y-8">
            {/* Founder */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold mb-6">Founding Team</h3>
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-32 h-32 rounded-2xl bg-[#1a2a42] flex items-center justify-center text-5xl">
                  👤
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-bold">Rejaul Karim</h4>
                  <p className="text-[#c9a227] font-medium mb-3">Founder & CEO</p>
                  <p className="text-gray-300 mb-4">
                    Serial entrepreneur with deep understanding of UAE market dynamics,
                    expat financial needs, and tourist spending patterns. Building Nuqta
                    to solve problems experienced firsthand.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="px-3 py-1 bg-[#1a2a42] rounded-full text-sm">Product Vision</span>
                    <span className="px-3 py-1 bg-[#1a2a42] rounded-full text-sm">Market Strategy</span>
                    <span className="px-3 py-1 bg-[#1a2a42] rounded-full text-sm">Fundraising</span>
                  </div>
                </div>
              </div>
            </div>

            {/* C-Suite Structure */}
            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52]">
              <h3 className="text-xl font-bold mb-6">C-Suite Structure (Defined)</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { role: 'CEO', focus: 'Strategy & Vision', teams: 'Executive Office', status: 'Active' },
                  { role: 'CTO', focus: 'Product & Engineering', teams: 'Product, Engineering, Design, Data', status: 'Hiring' },
                  { role: 'COO', focus: 'Operations', teams: 'Merchant Success, Support, Legal', status: 'Planned' },
                  { role: 'CMO', focus: 'Growth & Marketing', teams: 'Growth, Content, Creative, PR', status: 'Planned' },
                  { role: 'CFO', focus: 'Finance & Treasury', teams: 'Finance, FP&A, Treasury', status: 'Planned' },
                  { role: 'CHRO', focus: 'People & Culture', teams: 'Talent, People Ops, L&D', status: 'Planned' },
                ].map((exec) => (
                  <div key={exec.role} className="bg-[#0a1628] rounded-xl p-4 border border-[#2a3a52]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-lg">{exec.role}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        exec.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                        exec.status === 'Hiring' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {exec.status}
                      </span>
                    </div>
                    <p className="text-sm text-[#c9a227] mb-1">{exec.focus}</p>
                    <p className="text-xs text-gray-400">{exec.teams}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Co-Founder Plan */}
            <div className="bg-blue-500/10 rounded-2xl p-6 sm:p-8 border border-blue-500/30">
              <h3 className="text-xl font-bold mb-4">Co-Founder Commitment</h3>
              <p className="text-gray-300 mb-4">
                Acknowledging solo founder risk (65% higher failure rate), we commit to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>CTO/Co-founder hire within 90 days of funding</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>15-25% equity allocation reserved</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Profile: Technical with fintech/payments experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Part of Tranche 2 milestone conditions</span>
                </li>
              </ul>
            </div>

            {/* Organization Scale */}
            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52]">
              <h3 className="text-xl font-bold mb-4">Hiring Plan</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#c9a227]">6</div>
                  <div className="text-sm">C-Suite Roles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#c9a227]">20+</div>
                  <div className="text-sm">Sub-Teams</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#c9a227]">80+</div>
                  <div className="text-sm">Total Roles (H3)</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Financial Projections */}
        {activeTab === 'financials' && (
          <div className="space-y-8">
            {/* 5-Year Projections */}
            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52]">
              <h3 className="text-xl font-bold mb-6">5-Year Financial Projections</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#2a3a52]">
                      <th className="text-left py-3 px-4">Year</th>
                      <th className="text-right py-3 px-4">Revenue (AED)</th>
                      <th className="text-right py-3 px-4">Users</th>
                      <th className="text-right py-3 px-4">Merchants</th>
                      <th className="text-right py-3 px-4">Valuation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financialProjections.map((row) => (
                      <tr key={row.year} className="border-b border-[#2a3a52]/50">
                        <td className="py-3 px-4 font-medium">{row.year}</td>
                        <td className="py-3 px-4 text-right text-[#c9a227]">{row.revenue}</td>
                        <td className="py-3 px-4 text-right">{row.users}</td>
                        <td className="py-3 px-4 text-right">{row.merchants}</td>
                        <td className="py-3 px-4 text-right text-emerald-400">{row.valuation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Return Scenarios */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30">
                <h4 className="font-bold text-emerald-400 mb-3">Base Case (35% probability)</h4>
                <div className="text-4xl font-bold text-emerald-400 mb-2">120x</div>
                <p className="text-gray-300 text-sm">
                  $1.2B exit → $48M return on $400K investment
                </p>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
                <h4 className="font-bold text-blue-400 mb-3">Conservative (15% probability)</h4>
                <div className="text-4xl font-bold text-blue-400 mb-2">95x</div>
                <p className="text-gray-300 text-sm">
                  $950M exit → $38M return on $400K investment
                </p>
              </div>
            </div>

            {/* Even at 50% Miss */}
            <div className="bg-[#c9a227]/10 rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold mb-4">Stress Test: 50% Miss Scenario</h3>
              <p className="text-gray-300 mb-4">
                Even if we achieve only 50% of projections:
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-[#0a1628] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">AED 240M</div>
                  <div className="text-sm text-gray-400">Y5 Revenue (50%)</div>
                </div>
                <div className="bg-[#0a1628] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">$400-600M</div>
                  <div className="text-sm text-gray-400">Exit Valuation</div>
                </div>
                <div className="bg-[#0a1628] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-400">40-60x</div>
                  <div className="text-sm text-gray-400">Investor Return</div>
                </div>
              </div>
              <p className="text-[#c9a227] text-sm mt-4 text-center">
                Still top-decile venture returns even with 50% execution miss.
              </p>
            </div>

            {/* Burn & Runway */}
            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52]">
              <h3 className="text-xl font-bold mb-4">Burn Rate & Runway</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-[#c9a227] mb-2">&lt;$40K/mo</div>
                  <p className="text-gray-400">Target early-stage monthly burn</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#c9a227] mb-2">18-24 mo</div>
                  <p className="text-gray-400">Runway on $400K raise</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Investment Opportunity */}
        {activeTab === 'investment' && (
          <div className="space-y-8">
            {/* Investment Terms */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold mb-6">Investment Terms</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {investmentTerms.map((item) => (
                  <div key={item.term} className="flex justify-between items-center py-3 border-b border-[#2a3a52]/50">
                    <span className="text-gray-400">{item.term}</span>
                    <span className="font-bold text-[#c9a227]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tranche Structure */}
            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52]">
              <h3 className="text-xl font-bold mb-6">Tranched SAFE Structure</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/30">
                  <h4 className="font-bold text-emerald-400 mb-3">Tranche 1: $200K</h4>
                  <p className="text-gray-300 text-sm mb-3">Immediately upon closing</p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• MVP completion</li>
                    <li>• Initial merchant onboarding</li>
                    <li>• Core team hiring</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 rounded-xl p-5 border border-yellow-500/30">
                  <h4 className="font-bold text-yellow-400 mb-3">Tranche 2: $200K</h4>
                  <p className="text-gray-300 text-sm mb-3">Upon milestones achieved</p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• 500 live merchants</li>
                    <li>• 25,000 MAU</li>
                    <li>• CTO/Co-founder hired</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Use of Funds */}
            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52]">
              <h3 className="text-xl font-bold mb-6">Use of Funds</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-[#c9a227]/20 flex items-center justify-center">
                    <TrendingUp className="w-10 h-10 text-[#c9a227]" />
                  </div>
                  <div className="text-3xl font-bold text-[#c9a227]">55%</div>
                  <div className="font-medium">Marketing</div>
                  <p className="text-xs text-gray-400 mt-1">User & merchant acquisition</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-[#c9a227]/20 flex items-center justify-center">
                    <Users className="w-10 h-10 text-[#c9a227]" />
                  </div>
                  <div className="text-3xl font-bold text-[#c9a227]">25%</div>
                  <div className="font-medium">Salaries</div>
                  <p className="text-xs text-gray-400 mt-1">Founder, co-founder, key hires</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-[#c9a227]/20 flex items-center justify-center">
                    <Smartphone className="w-10 h-10 text-[#c9a227]" />
                  </div>
                  <div className="text-3xl font-bold text-[#c9a227]">20%</div>
                  <div className="font-medium">Tech & Ops</div>
                  <p className="text-xs text-gray-400 mt-1">Infrastructure, operations</p>
                </div>
              </div>
            </div>

            {/* Why Invest */}
            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52]">
              <h3 className="text-xl font-bold mb-6">Why Invest in Nuqta?</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#c9a227]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#c9a227] font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Massive Market</h4>
                      <p className="text-sm text-gray-400">$600B GCC consumer spending, 30M+ addressable users</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#c9a227]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#c9a227] font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Unique Position</h4>
                      <p className="text-sm text-gray-400">Only platform serving both tourists AND residents</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#c9a227]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#c9a227] font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Ecosystem Moat</h4>
                      <p className="text-sm text-gray-400">9 integrated products with 3x retention advantage</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#c9a227]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#c9a227] font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Strong Unit Economics</h4>
                      <p className="text-sm text-gray-400">16.8x LTV:CAC, &lt;1 month payback</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#c9a227]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#c9a227] font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Proven Traction</h4>
                      <p className="text-sm text-gray-400">32+ LOIs signed, MVP 80% complete</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#c9a227]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#c9a227] font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Asymmetric Returns</h4>
                      <p className="text-sm text-gray-400">40-120x potential, top-decile even at 50% miss</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Invest?</h3>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                Join us in building the financial ecosystem for 30M+ users across the GCC.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/data-room" className="flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
                  <Briefcase className="w-5 h-5" />
                  Access Data Room
                </Link>
                <a
                  href="mailto:rejaul@nuqtapp.com?subject=Investment%20Interest%20-%20Nuqta"
                  className="flex items-center gap-2 px-6 py-3 bg-[#1a2a42] border border-[#c9a227]/50 text-[#c9a227] rounded-xl font-bold hover:bg-[#c9a227]/10 transition-colors"
                >
                  Contact Founder
                </a>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Navigation Footer */}
      <div className="bg-[#0d1c30] border-t border-[#2a3a52] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/data-room" className="text-[#c9a227] hover:text-[#f4d35e] transition-colors">
              Data Room
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/ecosystem" className="text-[#c9a227] hover:text-[#f4d35e] transition-colors">
              Ecosystem
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/memo" className="text-[#c9a227] hover:text-[#f4d35e] transition-colors">
              Investment Memo
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/commitment" className="text-[#c9a227] hover:text-[#f4d35e] transition-colors">
              Founder Commitment
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/terms" className="text-[#c9a227] hover:text-[#f4d35e] transition-colors">
              CCD Terms
            </Link>
          </div>
          <p className="text-center text-gray-500 text-sm">
            © 2026 Nuqta. Building the financial ecosystem for UAE & GCC.
          </p>
        </div>
      </div>

      <GlobalFooter />
    </div>
  );
}
