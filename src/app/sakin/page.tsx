'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Home, DollarSign, Calendar, Shield, TrendingUp, Users, Target,
  Rocket, CheckCircle, AlertTriangle, Clock, Building, Globe,
  Smartphone, ArrowRight, Star, Zap, BarChart3, PieChart, Award,
  Handshake, Store, RefreshCw, Lock, Percent, BadgeCheck, Briefcase,
  CreditCard, FileText, Calculator, MapPin, Phone, Mail, Gift,
  Crown, Wallet, Key, Car, ChevronRight, ChevronDown, ChevronUp,
  Building2, Banknote, Scale, UserCheck, Landmark, PiggyBank,
  LineChart, CircleDollarSign, ShieldCheck, HeartHandshake
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Executive Summary Stats
const keyStats = [
  { label: 'Target Market', value: '900K', suffix: 'households', color: 'text-blue-400' },
  { label: 'Year 1 Users', value: '8,000', suffix: 'tenants', color: 'text-green-400' },
  { label: 'Avg Rent', value: '60K', suffix: 'AED/year', color: 'text-purple-400' },
  { label: 'Net Profit/User', value: '3,100', suffix: 'AED/year', color: 'text-[#c9a227]' },
];

// Value Propositions
const tenantBenefits = [
  { icon: Calendar, title: 'Pay Monthly', description: 'No more annual lump sum. Split your rent into 12 easy payments.' },
  { icon: Gift, title: '100 AED Nuqta+ Discount', description: 'Nuqta+ members get 100 AED off rent every month.' },
  { icon: Wallet, title: 'Better Cash Flow', description: 'Keep more money in your pocket each month.' },
  { icon: Shield, title: 'No Hidden Fees', description: 'Transparent pricing. Know exactly what you pay.' },
  { icon: Smartphone, title: 'Easy App Experience', description: 'Apply, track, and pay all from your phone.' },
  { icon: Award, title: 'Build Credit History', description: 'Regular payments help build your UAE credit profile.' },
];

const landlordBenefits = [
  { icon: Banknote, title: 'Full Rent Upfront', description: 'Receive your entire annual rent on day one.' },
  { icon: ShieldCheck, title: 'Zero Payment Risk', description: 'Sakin guarantees payment. No tenant default worries.' },
  { icon: CircleDollarSign, title: 'No Platform Fees', description: 'You receive 100% of the agreed rent amount.' },
  { icon: FileText, title: 'Simple Paperwork', description: 'We handle all the financing complexity.' },
];

const bankBenefits = [
  { icon: TrendingUp, title: 'Large Volume', description: 'Access to billions in rent financing annually.' },
  { icon: UserCheck, title: 'Low-Risk Customers', description: 'Salaried professionals with verified income.' },
  { icon: RefreshCw, title: 'Automated Repayments', description: 'Salary-linked auto-debit ensures timely payments.' },
  { icon: PiggyBank, title: 'Predictable Returns', description: 'Fixed interest income on consumer loans.' },
];

// Pricing Tiers
const pricingTiers = [
  {
    tier: 'Standard',
    monthlyFee: '1%',
    annualFee: '12%',
    coinBack: '100 AED',
    effectiveCost: '~9%',
    color: 'border-slate-500',
    bgColor: 'bg-slate-800/30',
    requirements: ['UAE residence visa', 'Minimum 6 months employment', 'Salary 8,000+ AED'],
    popular: false
  },
  {
    tier: 'Nuqta+ Member',
    monthlyFee: '1%',
    annualFee: '12%',
    coinBack: '100 AED + Nuqta+',
    effectiveCost: '~7%',
    color: 'border-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    requirements: ['Nuqta+ membership (99 AED/mo)', 'UAE residence visa', 'Salary 8,000+ AED'],
    popular: true
  },
  {
    tier: 'Premium',
    monthlyFee: '0.85%',
    annualFee: '10.2%',
    coinBack: '100 AED + Nuqta+',
    effectiveCost: '~5.5%',
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
    requirements: ['12+ months Sakin history', 'Perfect payment record', 'Salary 15,000+ AED'],
    popular: false
  },
];

// Unit Economics
const unitEconomics = {
  avgRent: 60000,
  tenantFee: 7200, // 12%
  bankCost: 3600, // 6%
  coinCost: 500, // Real cost of 100 AED coin x 12
  operatingCost: 1000, // Customer support, tech, etc.
  netProfit: 3100,
  nuqtaPlusFee: 1188, // 99 x 12
  totalRevenue: 4288,
};

// Financial Projections
const financialProjections = [
  { year: 'Year 1', users: 8000, rentVolume: 480, revenue: 24.8, netProfit: 20, capitalNeeded: 100 },
  { year: 'Year 2', users: 25000, rentVolume: 1500, revenue: 77.5, netProfit: 62, capitalNeeded: 250 },
  { year: 'Year 3', users: 60000, rentVolume: 3600, revenue: 186, netProfit: 150, capitalNeeded: 500 },
];

// Roadmap Phases
const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    timeline: 'Q2 2026',
    status: 'in_progress',
    milestones: [
      'Secure NBFC/bank partnership',
      'Legal entity setup (sister company)',
      'Regulatory approval (CBUAE)',
      'Build core platform MVP',
      'Risk scoring model development',
    ],
    color: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    phase: 'Phase 2',
    title: 'Beta Launch',
    timeline: 'Q3 2026',
    status: 'pending',
    milestones: [
      'Pilot with 500 users',
      'Partner with 3-5 real estate agencies',
      'Integrate with Nuqta+ for coin rewards',
      'Launch salary auto-debit',
      'Refine underwriting criteria',
    ],
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    phase: 'Phase 3',
    title: 'Scale',
    timeline: 'Q4 2026',
    status: 'pending',
    milestones: [
      'Full public launch',
      'Scale to 5,000+ users',
      'Expand broker partnerships',
      'Launch employer programs',
      'Add insurance products',
    ],
    color: 'border-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    phase: 'Phase 4',
    title: 'Expansion',
    timeline: '2027',
    status: 'pending',
    milestones: [
      'Reach 25,000+ users',
      'Launch car financing (Sakin Auto)',
      'Add home purchase financing',
      'Expand to Saudi Arabia',
      'IPO preparation',
    ],
    color: 'border-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
  },
];

// Risk Mitigation
const risks = [
  {
    risk: 'Tenant Defaults',
    severity: 'high',
    mitigation: [
      'Mandatory salary verification',
      'Auto-debit from salary account',
      'Credit bureau checks',
      'Security deposit (1-2 months)',
      'Employer verification',
    ],
  },
  {
    risk: 'High Bank Interest Rates',
    severity: 'medium',
    mitigation: [
      'Volume-based rate negotiation',
      'Multiple bank partnerships',
      'Co-lending structures',
      'Risk-sharing agreements',
    ],
  },
  {
    risk: 'Low User Adoption',
    severity: 'medium',
    mitigation: [
      'Nuqta+ coin incentives',
      'Broker commission programs',
      'In-app Nuqta promotion',
      'Employer partnership deals',
    ],
  },
  {
    risk: 'Regulatory Changes',
    severity: 'low',
    mitigation: [
      'Proactive CBUAE engagement',
      'Legal compliance team',
      'Flexible product structure',
      'Regular audits',
    ],
  },
];

// GTM Channels
const gtmChannels = [
  {
    channel: 'Nuqta App Users',
    icon: Smartphone,
    tactics: ['In-app banners', 'Push notifications', 'Rent reminder integration'],
    volume: '50,000+ existing users',
    priority: 'critical',
  },
  {
    channel: 'Real Estate Brokers',
    icon: Building,
    tactics: ['Commission per referral', 'Faster deal closure', 'Co-branded materials'],
    volume: '200+ agencies in UAE',
    priority: 'high',
  },
  {
    channel: 'Employers/Corporates',
    icon: Briefcase,
    tactics: ['HR benefit programs', 'Salary-linked plans', 'Corporate housing deals'],
    volume: 'Fortune 500 + SMEs',
    priority: 'high',
  },
  {
    channel: 'Property Developers',
    icon: Building2,
    tactics: ['Tenant financing option', 'Higher occupancy rates', 'Premium positioning'],
    volume: 'Emaar, Damac, etc.',
    priority: 'medium',
  },
];

// Competitive Comparison
const competitors = [
  { name: 'Sakin', monthlyRent: true, rewards: '100 AED/mo + Nuqta+', ecosystem: 'Full Nuqta ecosystem', crossSell: 'Very High', retention: 'Very High' },
  { name: 'Rentify', monthlyRent: true, rewards: 'Limited cashback', ecosystem: 'Standalone', crossSell: 'Low', retention: 'Medium' },
  { name: 'Keyper', monthlyRent: true, rewards: 'None', ecosystem: 'Property management', crossSell: 'Medium', retention: 'Medium' },
  { name: 'Traditional Bank', monthlyRent: false, rewards: 'None', ecosystem: 'Banking only', crossSell: 'Low', retention: 'Low' },
];

// Corporate Structure
const corporateStructure = {
  parentCompany: 'Nuqta Group',
  subsidiary: 'Sakin Fintech LLC',
  ownership: '100% owned by Nuqta Group',
  license: 'NBFC / Consumer Lending',
  regulator: 'Central Bank of UAE (CBUAE)',
};

export default function SakinPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
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
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
                  <Home className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white">
                    Sakin <span className="text-teal-400">سكن</span>
                  </h1>
                  <p className="text-teal-400 text-sm sm:text-lg font-medium">Pay Monthly. Live Easy.</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">
                UAE&apos;s first rent financing platform integrated with <span className="text-[#c9a227] font-medium">Nuqta rewards</span>.
                We pay your landlord upfront. You pay us monthly.
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
          <div className="mt-8 bg-gradient-to-r from-teal-500/20 to-cyan-500/10 rounded-xl p-4 sm:p-6 border border-teal-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-teal-400" />
                  <span className="text-lg font-bold text-white">The Core Promise</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white">
                  Pay <span className="text-teal-400">monthly rent</span> and get <span className="text-[#c9a227]">100 AED back</span> every month
                </p>
              </div>
              <div className="flex gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-teal-400">12%</div>
                  <div className="text-xs text-slate-400">Annual Fee</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">1,200</div>
                  <div className="text-xs text-slate-400">AED Back/Year</div>
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
                    ? 'bg-teal-500 text-white'
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
                <FileText className="w-5 h-5 text-teal-400" />
                Executive Summary
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300">
                  <strong className="text-white">Sakin</strong> is a monthly rent payment platform that transforms how
                  UAE residents pay rent. We pay landlords the full annual rent upfront, while tenants pay us monthly
                  with a small financing fee. As a <strong className="text-[#c9a227]">Nuqta+ partner</strong>,
                  members receive 100 AED back every month, making their effective financing cost one of the lowest in the market.
                </p>
              </div>

              {/* How It Works */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-white mb-4">How It Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {[
                    { step: 1, icon: FileText, title: 'Apply', desc: 'Upload tenancy contract' },
                    { step: 2, icon: UserCheck, title: 'Verify', desc: 'Salary & identity check' },
                    { step: 3, icon: CheckCircle, title: 'Approve', desc: 'Get instant approval' },
                    { step: 4, icon: Banknote, title: 'We Pay', desc: 'Landlord gets full rent' },
                    { step: 5, icon: Calendar, title: 'You Pay', desc: 'Monthly + earn rewards' },
                  ].map((item, i) => (
                    <div key={i} className="relative">
                      <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 text-center">
                        <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-3">
                          <item.icon className="w-5 h-5 text-teal-400" />
                        </div>
                        <div className="text-xs text-teal-400 mb-1">Step {item.step}</div>
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
            <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/5 rounded-xl p-6 border border-teal-500/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-teal-400" />
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
                <Globe className="w-5 h-5 text-teal-400" />
                UAE Market Opportunity
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className="text-3xl font-bold text-white">2M+</div>
                  <div className="text-xs text-slate-400 mt-1">Rent-paying households</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className="text-3xl font-bold text-white">900K</div>
                  <div className="text-xs text-slate-400 mt-1">Addressable market</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className="text-3xl font-bold text-white">60K</div>
                  <div className="text-xs text-slate-400 mt-1">Avg annual rent (AED)</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className="text-3xl font-bold text-white">54B</div>
                  <div className="text-xs text-slate-400 mt-1">Total market (AED)</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Value Proposition Tab */}
        {activeTab === 'value-prop' && (
          <div className="space-y-8">
            {/* For Tenants */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-teal-400" />
                For Tenants
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tenantBenefits.map((benefit, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-400">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* For Landlords */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-6 border border-green-500/30">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Key className="w-5 h-5 text-green-400" />
                For Landlords
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {landlordBenefits.map((benefit, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-green-500/20">
                    <benefit.icon className="w-8 h-8 text-green-400 mb-3" />
                    <h3 className="text-base font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-400">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* For Banks */}
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/5 rounded-xl p-6 border border-blue-500/30">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-blue-400" />
                For Banking Partners
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {bankBenefits.map((benefit, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-blue-500/20">
                    <benefit.icon className="w-8 h-8 text-blue-400 mb-3" />
                    <h3 className="text-base font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-400">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Nuqta+ Integration */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#c9a227] flex items-center justify-center">
                  <Crown className="w-6 h-6 text-[#0a1628]" />
                </div>
                <div>
                  <div className="text-[#c9a227] text-sm font-bold uppercase">Nuqta+ Integration</div>
                  <h3 className="text-xl font-bold text-white">The Ultimate Retention Engine</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-[#c9a227]/30">
                  <div className="text-3xl font-bold text-[#c9a227]">100</div>
                  <div className="text-xs text-slate-400">AED off rent/month</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-[#c9a227]/30">
                  <div className="text-3xl font-bold text-[#c9a227]">1,200</div>
                  <div className="text-xs text-slate-400">AED saved/year</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-[#c9a227]/30">
                  <div className="text-3xl font-bold text-[#c9a227]">12x</div>
                  <div className="text-xs text-slate-400">Monthly app opens</div>
                </div>
              </div>

              <p className="text-slate-300 mt-4">
                Sakin users must be <strong className="text-[#c9a227]">Nuqta+ members</strong> to receive the 100 AED monthly
                discount. This creates guaranteed monthly engagement and cross-ecosystem spending on all 18+ partner brands.
              </p>
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingTiers.map((tier, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl p-6 border-2 ${tier.color} ${tier.bgColor}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#c9a227] rounded-full text-xs font-bold text-[#0a1628]">
                      RECOMMENDED
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-white mb-2">{tier.tier}</h3>

                  <div className="mt-4 mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">{tier.monthlyFee}</span>
                      <span className="text-slate-400">/month</span>
                    </div>
                    <div className="text-sm text-slate-400 mt-1">{tier.annualFee} annually</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400">Coin Back</span>
                      <span className="text-[#c9a227] font-bold">{tier.coinBack}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400">Effective Cost</span>
                      <span className="text-green-400 font-bold">{tier.effectiveCost}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">Requirements</div>
                    {tier.requirements.map((req, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Example Calculation */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Example: 60,000 AED Annual Rent</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-sm text-slate-400 mb-1">Monthly Rent</div>
                  <div className="text-2xl font-bold text-white">5,000 AED</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-sm text-slate-400 mb-1">Monthly Fee (1%)</div>
                  <div className="text-2xl font-bold text-red-400">+600 AED</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-sm text-slate-400 mb-1">Nuqta+ Discount</div>
                  <div className="text-2xl font-bold text-green-400">-100 AED</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border-2 border-teal-500">
                  <div className="text-sm text-slate-400 mb-1">You Pay</div>
                  <div className="text-2xl font-bold text-teal-400">5,500 AED</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Unit Economics Tab */}
        {activeTab === 'economics' && (
          <div className="space-y-8">
            {/* Per Tenant Economics */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-teal-400" />
                Unit Economics (Per Tenant)
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Revenue Side */}
                <div>
                  <h3 className="text-lg font-bold text-green-400 mb-4">Revenue</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-300">Average Annual Rent</span>
                      <span className="text-white font-bold">{unitEconomics.avgRent.toLocaleString()} AED</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-300">Tenant Fee (12%)</span>
                      <span className="text-green-400 font-bold">+{unitEconomics.tenantFee.toLocaleString()} AED</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-300">Nuqta+ Membership</span>
                      <span className="text-green-400 font-bold">+{unitEconomics.nuqtaPlusFee.toLocaleString()} AED</span>
                    </div>
                    <div className="flex justify-between py-3 bg-green-500/10 rounded-lg px-3">
                      <span className="text-white font-bold">Total Revenue</span>
                      <span className="text-green-400 font-bold">{(unitEconomics.tenantFee + unitEconomics.nuqtaPlusFee).toLocaleString()} AED</span>
                    </div>
                  </div>
                </div>

                {/* Cost Side */}
                <div>
                  <h3 className="text-lg font-bold text-red-400 mb-4">Costs</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-300">Bank Interest (6%)</span>
                      <span className="text-red-400 font-bold">-{unitEconomics.bankCost.toLocaleString()} AED</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-300">Coin Cost (real)</span>
                      <span className="text-red-400 font-bold">-{unitEconomics.coinCost.toLocaleString()} AED</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-300">Operating Costs</span>
                      <span className="text-red-400 font-bold">-{unitEconomics.operatingCost.toLocaleString()} AED</span>
                    </div>
                    <div className="flex justify-between py-3 bg-red-500/10 rounded-lg px-3">
                      <span className="text-white font-bold">Total Costs</span>
                      <span className="text-red-400 font-bold">-{(unitEconomics.bankCost + unitEconomics.coinCost + unitEconomics.operatingCost).toLocaleString()} AED</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Net Profit */}
              <div className="mt-8 bg-gradient-to-r from-teal-500/20 to-cyan-500/10 rounded-xl p-6 border-2 border-teal-500">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-teal-400 text-sm font-bold uppercase">Net Profit Per Tenant</div>
                    <div className="text-4xl font-black text-white mt-1">{unitEconomics.totalRevenue.toLocaleString()} AED<span className="text-lg text-slate-400">/year</span></div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-slate-400">Profit Margin</div>
                    <div className="text-3xl font-bold text-green-400">~51%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coin Economics Breakdown */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Gift className="w-5 h-5 text-[#c9a227]" />
                Coin Economics Breakdown
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                  <div className="text-sm text-slate-400 mb-1">Face Value</div>
                  <div className="text-2xl font-bold text-[#c9a227]">1,200 AED</div>
                  <div className="text-xs text-slate-500">100 AED × 12 months</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                  <div className="text-sm text-slate-400 mb-1">Real Cost to Sakin</div>
                  <div className="text-2xl font-bold text-green-400">~500 AED</div>
                  <div className="text-xs text-slate-500">~40% redemption rate</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                  <div className="text-sm text-slate-400 mb-1">User Perceived Value</div>
                  <div className="text-2xl font-bold text-purple-400">1,200 AED</div>
                  <div className="text-xs text-slate-500">Full discount off rent</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Financials Tab */}
        {activeTab === 'financials' && (
          <div className="space-y-8">
            {/* 3-Year Projections */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-teal-400" />
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
                      <td className="py-3 px-4 text-slate-300">Users</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="text-right py-3 px-4 text-white font-medium">{proj.users.toLocaleString()}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Rent Volume (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="text-right py-3 px-4 text-white font-medium">{proj.rentVolume}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Revenue (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="text-right py-3 px-4 text-green-400 font-bold">{proj.revenue}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Net Profit (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="text-right py-3 px-4 text-teal-400 font-bold">{proj.netProfit}M</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-300">Capital Needed (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="text-right py-3 px-4 text-purple-400 font-medium">{proj.capitalNeeded}M</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Capital Requirements */}
            <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/5 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <PiggyBank className="w-5 h-5 text-purple-400" />
                Capital Requirements
              </h3>
              <p className="text-slate-300 mb-4">
                Since rent is paid upfront to landlords, Sakin requires a revolving credit facility.
                However, because tenants repay monthly, actual capital needs are much lower than total financing volume.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-xl p-4 border border-purple-500/20">
                  <div className="text-sm text-slate-400 mb-1">Year 1 Credit Line</div>
                  <div className="text-2xl font-bold text-purple-400">100M AED</div>
                  <div className="text-xs text-slate-500">Revolving facility</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 border border-purple-500/20">
                  <div className="text-sm text-slate-400 mb-1">Source</div>
                  <div className="text-lg font-bold text-white">Bank Partnership</div>
                  <div className="text-xs text-slate-500">NBFC co-lending</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 border border-purple-500/20">
                  <div className="text-sm text-slate-400 mb-1">Structure</div>
                  <div className="text-lg font-bold text-white">Risk Sharing</div>
                  <div className="text-xs text-slate-500">70/30 split typical</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <div className="space-y-6">
            {roadmapPhases.map((phase, i) => (
              <div key={i} className={`rounded-xl p-6 border-2 ${phase.color} ${phase.bgColor}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">{phase.phase}</div>
                    <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-300">{phase.timeline}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      phase.status === 'in_progress' ? 'bg-blue-500 text-white' :
                      phase.status === 'completed' ? 'bg-green-500 text-white' :
                      'bg-slate-600 text-slate-300'
                    }`}>
                      {phase.status === 'in_progress' ? 'In Progress' :
                       phase.status === 'completed' ? 'Completed' : 'Planned'}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {phase.milestones.map((milestone, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${
                        phase.status === 'completed' ? 'text-green-400' : 'text-slate-500'
                      }`} />
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
                <div key={i} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      channel.priority === 'critical' ? 'bg-red-500/20' :
                      channel.priority === 'high' ? 'bg-orange-500/20' : 'bg-blue-500/20'
                    }`}>
                      <channel.icon className={`w-6 h-6 ${
                        channel.priority === 'critical' ? 'text-red-400' :
                        channel.priority === 'high' ? 'text-orange-400' : 'text-blue-400'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{channel.channel}</h3>
                      <span className={`text-xs font-bold uppercase ${
                        channel.priority === 'critical' ? 'text-red-400' :
                        channel.priority === 'high' ? 'text-orange-400' : 'text-blue-400'
                      }`}>{channel.priority} priority</span>
                    </div>
                  </div>
                  <div className="text-sm text-slate-400 mb-3">{channel.volume}</div>
                  <div className="space-y-2">
                    {channel.tactics.map((tactic, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                        <ChevronRight className="w-4 h-4 text-slate-500" />
                        {tactic}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Risks Tab */}
        {activeTab === 'risks' && (
          <div className="space-y-4">
            {risks.map((risk, i) => (
              <div
                key={i}
                className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedRisk(expandedRisk === risk.risk ? null : risk.risk)}
                  className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      risk.severity === 'high' ? 'bg-red-500' :
                      risk.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`} />
                    <span className="text-lg font-bold text-white">{risk.risk}</span>
                    <span className={`text-xs px-2 py-0.5 rounded uppercase font-bold ${
                      risk.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                      risk.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>{risk.severity}</span>
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
                      <div className="text-sm text-slate-400 mb-3">Mitigation Strategies:</div>
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
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 overflow-x-auto">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-teal-400" />
                Competitive Analysis
              </h2>

              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-slate-400 font-medium">Feature</th>
                    {competitors.map((comp, i) => (
                      <th key={i} className={`text-center py-3 px-4 font-bold ${
                        comp.name === 'Sakin' ? 'text-teal-400' : 'text-white'
                      }`}>{comp.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-slate-300">Monthly Rent</td>
                    {competitors.map((comp, i) => (
                      <td key={i} className="text-center py-3 px-4">
                        {comp.monthlyRent ? (
                          <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <span className="text-slate-500">-</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-slate-300">Rewards</td>
                    {competitors.map((comp, i) => (
                      <td key={i} className={`text-center py-3 px-4 text-sm ${
                        comp.name === 'Sakin' ? 'text-[#c9a227] font-bold' : 'text-slate-400'
                      }`}>{comp.rewards}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-slate-300">Ecosystem</td>
                    {competitors.map((comp, i) => (
                      <td key={i} className={`text-center py-3 px-4 text-sm ${
                        comp.name === 'Sakin' ? 'text-teal-400 font-bold' : 'text-slate-400'
                      }`}>{comp.ecosystem}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-slate-300">Cross-sell Potential</td>
                    {competitors.map((comp, i) => (
                      <td key={i} className={`text-center py-3 px-4 text-sm ${
                        comp.crossSell === 'Very High' ? 'text-green-400 font-bold' :
                        comp.crossSell === 'High' ? 'text-green-400' :
                        comp.crossSell === 'Medium' ? 'text-yellow-400' : 'text-slate-400'
                      }`}>{comp.crossSell}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-300">User Retention</td>
                    {competitors.map((comp, i) => (
                      <td key={i} className={`text-center py-3 px-4 text-sm ${
                        comp.retention === 'Very High' ? 'text-green-400 font-bold' :
                        comp.retention === 'High' ? 'text-green-400' :
                        comp.retention === 'Medium' ? 'text-yellow-400' : 'text-slate-400'
                      }`}>{comp.retention}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Competitive Advantages */}
            <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/5 rounded-xl p-6 border border-teal-500/30">
              <h3 className="text-lg font-bold text-white mb-4">Our Competitive Advantages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Nuqta+ Integration', desc: '1,200 AED annual rewards via ecosystem' },
                  { title: '18+ Partner Brands', desc: 'Cross-sell to salons, restaurants, etc.' },
                  { title: 'Monthly Engagement', desc: 'Forced app opens for rent payment' },
                  { title: 'Data Advantage', desc: 'Rich spending data from Nuqta ecosystem' },
                ].map((adv, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-bold">{adv.title}</div>
                      <div className="text-sm text-slate-400">{adv.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-teal-500/20 to-cyan-500/10 rounded-2xl p-8 border border-teal-500/30 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Transform Rent Payments?
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Sakin is positioned to become the leading rent financing platform in the UAE,
            powered by the Nuqta ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/nuqta-plus"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] font-bold rounded-xl hover:bg-[#b8922a] transition-all"
            >
              <Crown className="w-5 h-5" />
              View Nuqta+ Integration
            </Link>
            <Link
              href="/data-room"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-all border border-slate-600"
            >
              <FileText className="w-5 h-5" />
              Data Room
            </Link>
          </div>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
