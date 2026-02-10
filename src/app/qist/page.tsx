'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShoppingBag, DollarSign, Calendar, Shield, TrendingUp, Users, Target,
  Rocket, CheckCircle, AlertTriangle, Clock, Building, Globe,
  Smartphone, ArrowRight, Star, Zap, BarChart3, PieChart, Award,
  Handshake, Store, RefreshCw, Lock, Percent, BadgeCheck, Briefcase,
  CreditCard, FileText, Calculator, MapPin, Phone, Mail, Gift,
  Crown, Wallet, Key, ChevronRight, ChevronDown, ChevronUp,
  Building2, Banknote, Scale, UserCheck, Landmark, PiggyBank,
  LineChart, CircleDollarSign, ShieldCheck, HeartHandshake,
  Coins, Network, ArrowRightLeft, CreditCard as CardIcon, Timer,
  ShoppingCart, Package, Gem, Sparkles, BadgePercent, Receipt, Layers
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Executive Summary Stats
const keyStats = [
  { label: 'Target Market', value: '500K', suffix: 'consumers', color: 'text-blue-400' },
  { label: 'Year 1 Users', value: '20K', suffix: 'active', color: 'text-green-400' },
  { label: 'Avg Order', value: '1,500', suffix: 'AED', color: 'text-purple-400' },
  { label: 'Net Revenue/Txn', value: '75', suffix: 'AED', color: 'text-[#c9a227]' },
];

// Value Propositions
const shopperBenefits = [
  { icon: Timer, title: 'Pay in Installments', description: 'Split purchases into 3-12 easy monthly payments.' },
  { icon: Gift, title: 'Nuqta+ 0% Interest', description: 'Nuqta+ members get 0% interest for 3 months.' },
  { icon: Coins, title: 'Earn Nuqta Coins', description: 'Get rewarded on every BNPL purchase you make.' },
  { icon: Shield, title: 'No Hidden Fees', description: 'Transparent pricing. No surprises at checkout.' },
  { icon: Smartphone, title: 'Instant Approval', description: 'Quick credit check. Know in seconds.' },
  { icon: Award, title: 'Build Credit', description: 'Regular payments help build your UAE credit score.' },
];

const merchantBenefits = [
  { icon: TrendingUp, title: 'Higher Conversion', description: 'BNPL increases cart conversion by 20-30%.' },
  { icon: ShoppingCart, title: 'Larger Orders', description: 'Average order value increases by 40-50%.' },
  { icon: CircleDollarSign, title: 'Same-Day Settlement', description: 'Get paid upfront. Qist handles collection.' },
  { icon: Users, title: 'New Customers', description: 'Access to Nuqta ecosystem of 50K+ users.' },
];

const nuqtaAdvantage = [
  { icon: Network, title: 'Instant Merchant Network', description: 'All existing Nuqta corporate partners become Qist merchants.' },
  { icon: Crown, title: 'Nuqta+ Cross-sell', description: 'BNPL users convert to premium membership.' },
  { icon: Coins, title: 'Coin Economy', description: 'Use Nuqta coins as down payment or earn on purchases.' },
  { icon: ArrowRightLeft, title: 'Ecosystem Synergy', description: 'Deep integration with Sakin, Nuqta+ and rewards.' },
];

// Pricing Tiers
const pricingTiers = [
  {
    tier: 'Standard',
    interestRate: '2.5%/month',
    installments: '3-6 months',
    coinBack: '50 AED',
    effectiveCost: '7.5-15%',
    color: 'border-slate-500',
    bgColor: 'bg-slate-800/30',
    requirements: ['UAE residence visa', 'Minimum 5,000 AED salary', 'Valid bank account'],
    popular: false
  },
  {
    tier: 'Nuqta+ Member',
    interestRate: '0%',
    installments: '3 months',
    coinBack: '100 AED',
    effectiveCost: '0%',
    color: 'border-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    requirements: ['Nuqta+ membership (99 AED/mo)', 'UAE residence visa', 'Salary 5,000+ AED'],
    popular: true
  },
  {
    tier: 'Premium',
    interestRate: '1.5%/month',
    installments: '3-12 months',
    coinBack: '150 AED',
    effectiveCost: '4.5-18%',
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
    requirements: ['12+ months Qist history', 'Perfect payment record', 'Credit limit 10K+ AED'],
    popular: false
  },
];

// Unit Economics
const unitEconomics = {
  avgTransaction: 1500,
  merchantFee: 75, // 5%
  interestIncome: 45, // avg 3% on non-Nuqta+
  lateFees: 15, // Expected avg per user
  defaultCost: 30, // 2% default rate
  operatingCost: 15,
  netRevenue: 90,
  nuqtaPlusConversion: 1188, // 99 x 12
};

// Financial Projections
const financialProjections = [
  { year: 'Year 1', users: 20000, transactions: 50000, gmv: 50, revenue: 2.5, netProfit: 1.5, merchants: 100 },
  { year: 'Year 2', users: 80000, transactions: 300000, gmv: 250, revenue: 12.5, netProfit: 8, merchants: 500 },
  { year: 'Year 3', users: 200000, transactions: 1000000, gmv: 800, revenue: 40, netProfit: 28, merchants: 1500 },
];

// Roadmap Phases
const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    timeline: 'Q3 2026',
    status: 'planned',
    milestones: [
      'Secure NBFC/bank partnership for credit',
      'Legal entity setup (Qist Fintech LLC)',
      'Regulatory approval (CBUAE)',
      'Build core BNPL platform MVP',
      'Risk scoring & credit model development',
      'Integrate with Nuqta app',
    ],
    color: 'border-violet-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    phase: 'Phase 2',
    title: 'Pilot Launch',
    timeline: 'Q4 2026',
    status: 'pending',
    milestones: [
      'Onboard 50 pilot merchants',
      'Launch with 5,000 beta users',
      'Integrate Nuqta coin payments',
      'Implement auto-debit repayments',
      'Launch merchant dashboard',
      'A/B test checkout flows',
    ],
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    phase: 'Phase 3',
    title: 'Scale',
    timeline: 'Q1 2027',
    status: 'pending',
    milestones: [
      'Full public launch',
      'Scale to 500+ merchants',
      'Reach 20,000 active users',
      'Launch Qist card (virtual)',
      'Add in-store POS integration',
      'Cross-sell Nuqta+ aggressively',
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
      'Reach 200,000+ users',
      'Launch physical Qist card',
      'Add travel BNPL (flights, hotels)',
      'Expand to Saudi Arabia',
      'Launch merchant financing',
      'IPO preparation',
    ],
    color: 'border-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
  },
];

// Risk Mitigation
const risks = [
  {
    risk: 'Customer Defaults',
    severity: 'high',
    mitigation: [
      'Real-time credit scoring',
      'Salary verification required',
      'Auto-debit from bank account',
      'Progressive credit limits',
      'Collection agency partnership',
    ],
  },
  {
    risk: 'Merchant Fraud',
    severity: 'medium',
    mitigation: [
      'Merchant vetting process',
      'Transaction monitoring',
      'Chargeback protection',
      'Security deposits',
    ],
  },
  {
    risk: 'Competition (Tabby, Tamara)',
    severity: 'high',
    mitigation: [
      'Nuqta ecosystem advantage',
      'Coin rewards differentiation',
      'Corporate partnership network',
      'Nuqta+ 0% interest exclusive',
    ],
  },
  {
    risk: 'Regulatory Changes',
    severity: 'medium',
    mitigation: [
      'Proactive CBUAE engagement',
      'Sharia-compliant options',
      'Flexible product structure',
      'Legal compliance team',
    ],
  },
];

// GTM Channels
const gtmChannels = [
  {
    channel: 'Nuqta App Users',
    icon: Smartphone,
    tactics: ['In-app BNPL option', 'Push notifications', 'Checkout integration'],
    volume: '50,000+ existing users',
    priority: 'critical',
  },
  {
    channel: 'Corporate Partners',
    icon: Building,
    tactics: ['Existing Nuqta merchants', 'Employee benefits program', 'Bulk onboarding'],
    volume: '100+ corporates',
    priority: 'critical',
  },
  {
    channel: 'E-commerce Platforms',
    icon: ShoppingCart,
    tactics: ['Checkout plugin', 'Marketing co-investment', 'Featured placement'],
    volume: 'Top 100 UAE e-commerce',
    priority: 'high',
  },
  {
    channel: 'Retail Chains',
    icon: Store,
    tactics: ['POS integration', 'Staff training', 'In-store signage'],
    volume: 'Major retail brands',
    priority: 'medium',
  },
];

// Competitive Comparison
const competitors = [
  { name: 'Qist', installments: '3-12 months', rewards: '100 AED/mo Nuqta+', merchants: 'Nuqta Partners', interestFree: '3 months (Nuqta+)', ecosystem: 'Full Nuqta', advantage: 'Rewards + Ecosystem' },
  { name: 'Tabby', installments: '4 payments', rewards: 'None', merchants: '10,000+', interestFree: '4 weeks', ecosystem: 'Standalone', advantage: 'Market leader' },
  { name: 'Tamara', installments: '3-6 payments', rewards: 'Limited', merchants: '8,000+', interestFree: '30 days', ecosystem: 'Limited', advantage: 'Saudi expansion' },
  { name: 'Postpay', installments: '3 payments', rewards: 'None', merchants: '5,000+', interestFree: '14 days', ecosystem: 'None', advantage: 'Quick checkout' },
  { name: 'Spotii', installments: '4 payments', rewards: 'None', merchants: '3,000+', interestFree: '14 days', ecosystem: 'None', advantage: 'Fashion focus' },
];

// Corporate Structure
const corporateStructure = {
  parentCompany: 'Nuqta Group',
  subsidiary: 'Qist Fintech LLC',
  ownership: '100% owned by Nuqta Group',
  license: 'Consumer Lending / BNPL',
  regulator: 'Central Bank of UAE (CBUAE)',
};

// Product Features
const productFeatures = [
  { icon: CardIcon, title: 'Checkout BNPL', description: 'Seamless split payment at online and in-store checkout' },
  { icon: Wallet, title: 'Qist Wallet', description: 'Pre-approved credit line for instant purchases' },
  { icon: Coins, title: 'Coin Integration', description: 'Use Nuqta coins as down payment or earn on purchases' },
  { icon: Timer, title: 'Flexible Terms', description: '3-12 month payment plans based on credit score' },
  { icon: ShieldCheck, title: 'Buyer Protection', description: 'Full refund protection for eligible purchases' },
  { icon: Receipt, title: 'Smart Reminders', description: 'Automated payment reminders and easy autopay' },
  { icon: BarChart3, title: 'Credit Building', description: 'Report to credit bureau to help build score' },
  { icon: CreditCard, title: 'Qist Card', description: 'Virtual and physical card for anywhere acceptance' },
];

// Revenue Model
const revenueStreams = [
  { source: 'Merchant Fee', description: 'Fee charged to merchants per transaction', value: '3-6%', volume: 'Primary', margin: 'High' },
  { source: 'Interest Income', description: 'Interest on installments (non-Nuqta+ users)', value: '2.5%/month', volume: 'Secondary', margin: 'High' },
  { source: 'Late Fees', description: 'Penalty for missed payments', value: '25 AED + 1.5%', volume: 'Variable', margin: 'Very High' },
  { source: 'Nuqta+ Upsell', description: 'Premium membership conversion', value: '99 AED/month', volume: 'Growing', margin: 'Very High' },
  { source: 'Qist Card Fee', description: 'Annual card fee for physical card', value: '99 AED/year', volume: 'Future', margin: 'High' },
];

// Market Opportunity
const marketOpportunity = {
  totalEcommerce: '25B AED',
  bnplPenetration: '15%',
  targetableMarket: '3.75B AED',
  currentPlayers: ['Tabby', 'Tamara', 'Postpay', 'Spotii'],
  growthRate: '30% YoY',
  nuqtaAdvantage: 'Only BNPL with rewards ecosystem and corporate network',
};

export default function QistPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: ShoppingBag },
    { id: 'value-prop', label: 'Value Proposition', icon: Gift },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'economics', label: 'Unit Economics', icon: Calculator },
    { id: 'financials', label: 'Financials', icon: BarChart3 },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket },
    { id: 'gtm', label: 'Go-to-Market', icon: Target },
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
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                  <ShoppingBag className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white">
                    Qist <span className="text-violet-400">قسط</span>
                  </h1>
                  <p className="text-violet-400 text-sm sm:text-lg font-medium">Shop Now. Pay Easy.</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">
                UAE&apos;s first <span className="text-violet-400 font-medium">Buy Now Pay Later</span> integrated with <span className="text-[#c9a227] font-medium">Nuqta rewards</span>.
                Split purchases into easy installments. Nuqta+ members get 0% interest for 3 months.
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
          <div className="mt-8 bg-gradient-to-r from-violet-500/20 to-purple-500/10 rounded-xl p-4 sm:p-6 border border-violet-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-violet-400" />
                  <span className="text-lg font-bold text-white">The Core Promise</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white">
                  <span className="text-violet-400">Split any purchase</span> and get <span className="text-[#c9a227]">0% interest</span> with Nuqta+
                </p>
              </div>
              <div className="flex gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-violet-400">3-12</div>
                  <div className="text-xs text-slate-400">Months</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">0%</div>
                  <div className="text-xs text-slate-400">Interest*</div>
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Executive Summary */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-violet-400" />
                Executive Summary
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300">
                  <strong className="text-white">Qist</strong> (قسط - &quot;installment&quot; in Arabic) is a Buy Now Pay Later service that allows
                  consumers to split purchases into 3-12 monthly payments. As a <strong className="text-[#c9a227]">Nuqta Group sister company</strong>,
                  Qist leverages existing corporate partnerships to instantly access merchant networks. <strong className="text-violet-400">Nuqta+ members</strong> get
                  0% interest for 3 months, creating a powerful conversion funnel into the premium loyalty ecosystem.
                </p>
              </div>

              {/* How It Works */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-white mb-4">How It Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {[
                    { step: 1, icon: ShoppingCart, title: 'Shop', desc: 'Choose Qist at checkout' },
                    { step: 2, icon: UserCheck, title: 'Verify', desc: 'Instant credit check' },
                    { step: 3, icon: CheckCircle, title: 'Approve', desc: 'Get instant approval' },
                    { step: 4, icon: Package, title: 'Receive', desc: 'Get your purchase' },
                    { step: 5, icon: Calendar, title: 'Pay', desc: 'Monthly + earn coins' },
                  ].map((item, i) => (
                    <div key={i} className="relative">
                      <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 text-center">
                        <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center mx-auto mb-3">
                          <item.icon className="w-5 h-5 text-violet-400" />
                        </div>
                        <div className="text-xs text-violet-400 mb-1">Step {item.step}</div>
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
            <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/5 rounded-xl p-6 border border-violet-500/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-violet-400" />
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

            {/* Market Opportunity */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-violet-400" />
                UAE BNPL Market Opportunity
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className="text-3xl font-bold text-white">25B</div>
                  <div className="text-xs text-slate-400 mt-1">E-commerce (AED)</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className="text-3xl font-bold text-white">15%</div>
                  <div className="text-xs text-slate-400 mt-1">BNPL Penetration</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className="text-3xl font-bold text-white">3.75B</div>
                  <div className="text-xs text-slate-400 mt-1">Targetable Market</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className="text-3xl font-bold text-green-400">30%</div>
                  <div className="text-xs text-slate-400 mt-1">YoY Growth</div>
                </div>
              </div>
            </div>

            {/* Product Features */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-violet-400" />
                Product Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {productFeatures.map((feature, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <feature.icon className="w-6 h-6 text-violet-400 mb-2" />
                    <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-slate-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Nuqta Ecosystem Advantage */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Network className="w-5 h-5 text-[#c9a227]" />
                The Nuqta Ecosystem Advantage
              </h3>
              <p className="text-slate-300 mb-4">
                Unlike standalone BNPL players, Qist is deeply integrated into the <strong className="text-white">Nuqta ecosystem</strong>,
                providing unique advantages that competitors cannot replicate.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {nuqtaAdvantage.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-[#c9a227]/30">
                    <item.icon className="w-6 h-6 text-[#c9a227] mb-2" />
                    <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Value Proposition Tab */}
        {activeTab === 'value-prop' && (
          <div className="space-y-8">
            {/* For Shoppers */}
            <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/5 rounded-xl p-6 border border-violet-500/30">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-violet-400" />
                For Shoppers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {shopperBenefits.map((benefit, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-violet-400" />
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

            {/* Comparison Box */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Scale className="w-5 h-5 text-violet-400" />
                Qist vs Traditional Credit
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-violet-500/10 rounded-xl p-5 border border-violet-500/30">
                  <h3 className="text-violet-400 font-bold mb-4 flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Qist BNPL
                  </h3>
                  <ul className="space-y-2">
                    {['Instant approval in seconds', '0% interest for Nuqta+ members', 'No credit card required', 'Earn rewards on purchases', 'Build credit history', 'No annual fees'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-5 border border-slate-600/30">
                  <h3 className="text-slate-400 font-bold mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Credit Cards
                  </h3>
                  <ul className="space-y-2">
                    {['Days/weeks for approval', '24-48% APR typical', 'Complex application process', 'Limited or no rewards', 'Already established credit needed', 'Annual fees common'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                        <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="space-y-8">
            {/* Pricing Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingTiers.map((tier, i) => (
                <div key={i} className={`rounded-xl p-6 border-2 ${tier.color} ${tier.bgColor} relative`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#c9a227] text-[#0a1628] text-xs font-bold rounded-full">
                      RECOMMENDED
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2">{tier.tier}</h3>
                  <div className="text-3xl font-black text-white mb-1">{tier.interestRate}</div>
                  <div className="text-sm text-slate-400 mb-4">{tier.installments}</div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400">Coin Reward</span>
                      <span className="text-[#c9a227] font-medium">{tier.coinBack}/month</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400">Effective Cost</span>
                      <span className="text-white font-medium">{tier.effectiveCost}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-bold text-white">Requirements:</div>
                    {tier.requirements.map((req, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Revenue Streams */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-6 border border-green-500/30">
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
          </div>
        )}

        {/* Unit Economics Tab */}
        {activeTab === 'economics' && (
          <div className="space-y-8">
            {/* Per Transaction */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-violet-400" />
                Per Transaction Economics (Avg 1,500 AED)
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-green-500/10 rounded-xl p-4 text-center border border-green-500/30">
                  <div className="text-2xl font-bold text-green-400">{unitEconomics.merchantFee} AED</div>
                  <div className="text-xs text-slate-400">Merchant Fee (5%)</div>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/30">
                  <div className="text-2xl font-bold text-blue-400">{unitEconomics.interestIncome} AED</div>
                  <div className="text-xs text-slate-400">Avg Interest Income</div>
                </div>
                <div className="bg-orange-500/10 rounded-xl p-4 text-center border border-orange-500/30">
                  <div className="text-2xl font-bold text-orange-400">{unitEconomics.lateFees} AED</div>
                  <div className="text-xs text-slate-400">Expected Late Fees</div>
                </div>
                <div className="bg-violet-500/10 rounded-xl p-4 text-center border border-violet-500/30">
                  <div className="text-2xl font-bold text-violet-400">{unitEconomics.netRevenue} AED</div>
                  <div className="text-xs text-slate-400">Net Revenue/Txn</div>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                <h3 className="text-white font-bold mb-4">Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Average Transaction</span>
                    <span className="text-white font-bold">{unitEconomics.avgTransaction.toLocaleString()} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-green-400">+ Merchant Fee (5%)</span>
                    <span className="text-green-400 font-bold">+{unitEconomics.merchantFee} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-green-400">+ Interest Income (avg)</span>
                    <span className="text-green-400 font-bold">+{unitEconomics.interestIncome} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-green-400">+ Late Fees (expected)</span>
                    <span className="text-green-400 font-bold">+{unitEconomics.lateFees} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-red-400">- Default Cost (2%)</span>
                    <span className="text-red-400 font-bold">-{unitEconomics.defaultCost} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-red-400">- Operating Cost</span>
                    <span className="text-red-400 font-bold">-{unitEconomics.operatingCost} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-violet-500/10 rounded-lg px-3">
                    <span className="text-white font-bold">Net Revenue per Transaction</span>
                    <span className="text-violet-400 font-bold text-xl">{unitEconomics.netRevenue} AED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Nuqta+ Conversion Value */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-6 border border-[#c9a227]/50">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Crown className="w-5 h-5 text-[#c9a227]" />
                Nuqta+ Conversion Bonus
              </h3>
              <p className="text-slate-300 mb-4">
                Every Qist user who converts to Nuqta+ (for 0% interest) generates additional revenue:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-[#c9a227]/30">
                  <div className="text-2xl font-bold text-[#c9a227]">99 AED</div>
                  <div className="text-xs text-slate-400">Monthly Subscription</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-[#c9a227]/30">
                  <div className="text-2xl font-bold text-[#c9a227]">1,188 AED</div>
                  <div className="text-xs text-slate-400">Annual Value</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-[#c9a227]/30">
                  <div className="text-2xl font-bold text-green-400">40%</div>
                  <div className="text-xs text-slate-400">Expected Conversion</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Financials Tab */}
        {activeTab === 'financials' && (
          <div className="space-y-8">
            {/* Projections Table */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-violet-400" />
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
                      <td className="py-3 px-4 text-slate-300">Active Users</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{proj.users.toLocaleString()}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Transactions</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{proj.transactions.toLocaleString()}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">GMV (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-violet-400 font-bold">{proj.gmv}M</td>
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
                    <tr>
                      <td className="py-3 px-4 text-slate-300">Merchants</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{proj.merchants.toLocaleString()}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-r from-violet-500/20 to-purple-500/10 rounded-xl p-6 border border-violet-500/30 text-center">
                <div className="text-3xl font-bold text-violet-400">800M</div>
                <div className="text-slate-400 text-sm mt-1">Year 3 GMV (AED)</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-6 border border-green-500/30 text-center">
                <div className="text-3xl font-bold text-green-400">40M</div>
                <div className="text-slate-400 text-sm mt-1">Year 3 Revenue (AED)</div>
              </div>
              <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-6 border border-[#c9a227]/30 text-center">
                <div className="text-3xl font-bold text-[#c9a227]">70%</div>
                <div className="text-slate-400 text-sm mt-1">Gross Margin</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-xl p-6 border border-blue-500/30 text-center">
                <div className="text-3xl font-bold text-blue-400">1,500</div>
                <div className="text-slate-400 text-sm mt-1">Year 3 Merchants</div>
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

        {/* GTM Tab */}
        {activeTab === 'gtm' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gtmChannels.map((channel, i) => (
                <div key={i} className={`rounded-xl p-6 border ${
                  channel.priority === 'critical' ? 'border-red-500/50 bg-red-500/5' :
                  channel.priority === 'high' ? 'border-orange-500/50 bg-orange-500/5' :
                  'border-slate-700/50 bg-slate-800/30'
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      channel.priority === 'critical' ? 'bg-red-500/20' :
                      channel.priority === 'high' ? 'bg-orange-500/20' :
                      'bg-slate-700/50'
                    }`}>
                      <channel.icon className={`w-6 h-6 ${
                        channel.priority === 'critical' ? 'text-red-400' :
                        channel.priority === 'high' ? 'text-orange-400' :
                        'text-slate-400'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{channel.channel}</h3>
                      <span className={`text-xs font-bold ${
                        channel.priority === 'critical' ? 'text-red-400' :
                        channel.priority === 'high' ? 'text-orange-400' :
                        'text-slate-400'
                      }`}>{channel.priority.toUpperCase()}</span>
                    </div>
                  </div>
                  <div className="text-sm text-slate-400 mb-3">{channel.volume}</div>
                  <div className="space-y-2">
                    {channel.tactics.map((tactic, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                        <ArrowRight className="w-3 h-3 text-violet-400" />
                        {tactic}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Corporate Advantage */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Handshake className="w-5 h-5 text-[#c9a227]" />
                Corporate Partnership Advantage
              </h3>
              <p className="text-slate-300 mb-4">
                Existing Nuqta corporate partnerships provide an <strong className="text-white">instant merchant network</strong> without
                cold outreach. Every corporate partner becomes a potential Qist merchant.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-[#c9a227]/30">
                  <div className="text-2xl font-bold text-[#c9a227]">100+</div>
                  <div className="text-xs text-slate-400">Corporate Partners</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-[#c9a227]/30">
                  <div className="text-2xl font-bold text-[#c9a227]">50K+</div>
                  <div className="text-xs text-slate-400">Nuqta Users</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-[#c9a227]/30">
                  <div className="text-2xl font-bold text-green-400">0</div>
                  <div className="text-xs text-slate-400">CAC for Partners</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-[#c9a227]/30">
                  <div className="text-2xl font-bold text-green-400">Day 1</div>
                  <div className="text-xs text-slate-400">Merchant Launch</div>
                </div>
              </div>
            </div>
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
                <Users className="w-5 h-5 text-violet-400" />
                UAE BNPL Competitive Landscape
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Provider</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Installments</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Interest-Free</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Rewards</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Merchants</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Ecosystem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((comp, i) => (
                      <tr key={i} className={`border-b border-slate-700/50 ${comp.name === 'Qist' ? 'bg-violet-500/10' : ''}`}>
                        <td className={`py-3 px-4 font-bold ${comp.name === 'Qist' ? 'text-violet-400' : 'text-white'}`}>{comp.name}</td>
                        <td className="py-3 px-4 text-center text-slate-300">{comp.installments}</td>
                        <td className="py-3 px-4 text-center">
                          {comp.interestFree.includes('3 months') ? (
                            <span className="text-green-400 font-bold">{comp.interestFree}</span>
                          ) : (
                            <span className="text-slate-400">{comp.interestFree}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {comp.rewards !== 'None' ? (
                            <span className="text-[#c9a227] font-bold">{comp.rewards}</span>
                          ) : (
                            <span className="text-slate-500">None</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center text-slate-300">{comp.merchants}</td>
                        <td className="py-3 px-4 text-center">
                          {comp.ecosystem === 'Full Nuqta' ? (
                            <span className="text-violet-400 font-bold">{comp.ecosystem}</span>
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
            <div className="bg-gradient-to-r from-violet-500/20 to-purple-500/10 rounded-xl p-6 border-2 border-violet-500">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-violet-400" />
                Qist Competitive Moat
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-bold mb-3">What Competitors Lack</h4>
                  <div className="space-y-2">
                    {['No rewards or loyalty program', 'No ecosystem cross-sell', 'No instant merchant network', 'Limited subscription upsell'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-3">Qist Unique Value</h4>
                  <div className="space-y-2">
                    {['100 AED/month Nuqta+ rewards', 'Full ecosystem (Sakin, Nuqta+, Coins)', 'Instant 100+ corporate merchants', '0% interest drives Nuqta+ conversion'].map((item, i) => (
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
