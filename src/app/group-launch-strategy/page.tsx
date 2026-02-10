'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Rocket, Target, Calendar, Users, Globe,
  Zap, TrendingUp, ChevronRight, CheckCircle2, ArrowRight,
  Megaphone, Building2, Smartphone, DollarSign, BarChart3,
  Star, Gift, Briefcase, MapPin, Clock, Flag, Radio
} from 'lucide-react';
import {
  NuqtaLogo, NuqtaPlusLogo, QistLogo, SakinLogo, WasilLogo,
  HawilLogo, RakabLogo, SafarLogo, AjerLogo, FakhirLogo
} from '@/components/CompanyLogos';
import GlobalFooter from '@/components/GlobalFooter';

export default function GroupLaunchStrategyPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'phases', label: 'Launch Phases', icon: Rocket },
    { id: 'product', label: 'Product Sequence', icon: Smartphone },
    { id: 'marketing', label: 'Marketing', icon: Megaphone },
    { id: 'channels', label: 'Channels', icon: Radio },
    { id: 'metrics', label: 'KPIs', icon: BarChart3 },
    { id: 'budget', label: 'Budget', icon: DollarSign },
  ];

  const launchPhases = [
    {
      phase: 'Phase 1: Foundation',
      timeline: 'Q1-Q2 2025',
      focus: 'Core Platform Launch',
      products: ['Nuqta Core', 'Nuqta+'],
      targets: { users: '500K', merchants: '2,000', transactions: '5M AED' },
      activities: [
        'Super App MVP launch in UAE',
        'Payment infrastructure live',
        'First 2,000 merchant partnerships',
        'Nuqta+ premium membership launch',
        'Seed funding close',
      ],
      budget: '15M AED'
    },
    {
      phase: 'Phase 2: Financial Core',
      timeline: 'Q3-Q4 2025',
      focus: 'Fintech Products',
      products: ['Qist', 'Hawil'],
      targets: { users: '1.5M', merchants: '5,000', transactions: '50M AED' },
      activities: [
        'Qist BNPL launch with 500+ merchants',
        'Hawil remittance to 10 corridors',
        'CBUAE licensing complete',
        'Series A fundraising',
        'Credit scoring engine live',
      ],
      budget: '40M AED'
    },
    {
      phase: 'Phase 3: Lifestyle Expansion',
      timeline: 'Q1-Q2 2026',
      focus: 'Mobility & Real Estate',
      products: ['Rakab', 'Sakin'],
      targets: { users: '4M', merchants: '10,000', transactions: '200M AED' },
      activities: [
        'Rakab ride-hailing Dubai launch',
        'Sakin property listings live',
        'Fleet partnerships (1,000+ drivers)',
        'Real estate financing integration',
        'Series B fundraising',
      ],
      budget: '100M AED'
    },
    {
      phase: 'Phase 4: Commerce & Travel',
      timeline: 'Q3-Q4 2026',
      focus: 'E-commerce & Hospitality',
      products: ['Wasil', 'Safar', 'Ajer'],
      targets: { users: '8M', merchants: '25,000', transactions: '800M AED' },
      activities: [
        'Wasil last-mile delivery launch',
        'Safar travel booking platform',
        'Ajer gig economy marketplace',
        'Saudi Arabia market entry',
        'Full GCC logistics network',
      ],
      budget: '200M AED'
    },
    {
      phase: 'Phase 5: Premium & Scale',
      timeline: '2027',
      focus: 'Luxury & Full GCC',
      products: ['Fakhir', 'All Products'],
      targets: { users: '15M', merchants: '50,000', transactions: '2B AED' },
      activities: [
        'Fakhir luxury concierge launch',
        'Full GCC coverage (6 countries)',
        'Series C/D fundraising',
        'Group profitability',
        'IPO preparation begins',
      ],
      budget: '400M AED'
    },
  ];

  const productLaunchSequence = [
    { product: 'Nuqta', arabic: 'نقطة', logo: NuqtaLogo, quarter: 'Q1 2025', priority: 1, reason: 'Core platform foundation' },
    { product: 'Nuqta+', arabic: 'نقطة بلس', logo: NuqtaPlusLogo, quarter: 'Q2 2025', priority: 2, reason: 'Early monetization & loyalty' },
    { product: 'Qist', arabic: 'قسط', logo: QistLogo, quarter: 'Q3 2025', priority: 3, reason: 'High-margin fintech driver' },
    { product: 'Hawil', arabic: 'حويل', logo: HawilLogo, quarter: 'Q4 2025', priority: 4, reason: 'Expat user acquisition' },
    { product: 'Rakab', arabic: 'ركاب', logo: RakabLogo, quarter: 'Q1 2026', priority: 5, reason: 'Daily engagement & scale' },
    { product: 'Sakin', arabic: 'ساكن', logo: SakinLogo, quarter: 'Q2 2026', priority: 6, reason: 'High-value transactions' },
    { product: 'Wasil', arabic: 'واصل', logo: WasilLogo, quarter: 'Q3 2026', priority: 7, reason: 'Ecosystem connectivity' },
    { product: 'Safar', arabic: 'سفر', logo: SafarLogo, quarter: 'Q3 2026', priority: 8, reason: 'Travel season capture' },
    { product: 'Ajer', arabic: 'أجر', logo: AjerLogo, quarter: 'Q4 2026', priority: 9, reason: 'Supply-side growth' },
    { product: 'Fakhir', arabic: 'فاخر', logo: FakhirLogo, quarter: 'Q1 2027', priority: 10, reason: 'Premium segment capture' },
  ];

  const marketingStrategy = {
    positioning: 'The Super App for Muslim Life',
    tagline: 'One App. Everything Halal.',
    pillars: [
      {
        pillar: 'Trust',
        message: 'Shariah-certified, Central Bank regulated',
        tactics: ['Shariah board visibility', 'Security certifications', 'Transparent pricing']
      },
      {
        pillar: 'Convenience',
        message: 'Everything you need in one app',
        tactics: ['One-tap experiences', 'Unified wallet', 'Cross-product rewards']
      },
      {
        pillar: 'Value',
        message: 'Save more, earn more with Nuqta+',
        tactics: ['Cashback campaigns', 'Referral programs', 'Exclusive deals']
      },
      {
        pillar: 'Community',
        message: 'Built for Muslims, by Muslims',
        tactics: ['Islamic influencer partnerships', 'Community events', 'Ramadan campaigns']
      },
    ]
  };

  const acquisitionChannels = [
    {
      channel: 'Performance Marketing',
      budget: '40%',
      tactics: ['Google Ads', 'Meta Ads', 'TikTok', 'Snapchat'],
      cac: '25 AED',
      volume: 'High'
    },
    {
      channel: 'Referral Program',
      budget: '20%',
      tactics: ['Friend referrals', 'Family circles', 'Community leaders'],
      cac: '15 AED',
      volume: 'Medium-High'
    },
    {
      channel: 'Partnerships',
      budget: '15%',
      tactics: ['Corporate deals', 'University partnerships', 'Mosque networks'],
      cac: '10 AED',
      volume: 'Medium'
    },
    {
      channel: 'Organic & PR',
      budget: '10%',
      tactics: ['SEO', 'App Store optimization', 'Media coverage'],
      cac: '5 AED',
      volume: 'Low-Medium'
    },
    {
      channel: 'Influencer Marketing',
      budget: '10%',
      tactics: ['Islamic scholars', 'Lifestyle influencers', 'Fintech creators'],
      cac: '20 AED',
      volume: 'Medium'
    },
    {
      channel: 'Events & Activations',
      budget: '5%',
      tactics: ['Mall activations', 'Ramadan events', 'Tech conferences'],
      cac: '30 AED',
      volume: 'Low'
    },
  ];

  const launchKPIs = [
    { metric: 'Monthly Active Users (MAU)', year1: '1M', year2: '5M', year3: '15M' },
    { metric: 'Daily Active Users (DAU)', year1: '200K', year2: '1.5M', year3: '5M' },
    { metric: 'Gross Merchandise Value (GMV)', year1: '100M', year2: '1B', year3: '5B' },
    { metric: 'Take Rate', year1: '2%', year2: '2.5%', year3: '3%' },
    { metric: 'Customer Acquisition Cost (CAC)', year1: '50 AED', year2: '35 AED', year3: '25 AED' },
    { metric: 'Lifetime Value (LTV)', year1: '500 AED', year2: '1,200 AED', year3: '2,500 AED' },
    { metric: 'Products per User', year1: '1.5', year2: '2.8', year3: '4.2' },
    { metric: 'NPS Score', year1: '40', year2: '55', year3: '70' },
  ];

  const marketingBudget = [
    { category: 'Performance Marketing', year1: '20M', year2: '80M', year3: '200M' },
    { category: 'Brand Building', year1: '5M', year2: '25M', year3: '60M' },
    { category: 'Referral Incentives', year1: '10M', year2: '40M', year3: '100M' },
    { category: 'Partnerships & BD', year1: '8M', year2: '30M', year3: '75M' },
    { category: 'Events & Activations', year1: '3M', year2: '15M', year3: '40M' },
    { category: 'PR & Communications', year1: '2M', year2: '10M', year3: '25M' },
  ];

  const launchCampaigns = [
    {
      name: 'Launch Week',
      timing: 'Q1 2025',
      objective: '100K downloads in 7 days',
      tactics: ['PR blitz', 'Influencer unboxing', 'First user bonuses'],
      budget: '5M AED'
    },
    {
      name: 'Ramadan Special',
      timing: 'Q1 2025',
      objective: 'Capture festive spending',
      tactics: ['Zakat calculator', 'Iftar deals', 'Eid shopping'],
      budget: '10M AED'
    },
    {
      name: 'Summer Push',
      timing: 'Q3 2025',
      objective: 'Travel & remittance spike',
      tactics: ['Travel packages', 'Send money home', 'Summer cashback'],
      budget: '8M AED'
    },
    {
      name: 'Back to School',
      timing: 'Q3 2025',
      objective: 'Parent & student acquisition',
      tactics: ['School fee BNPL', 'Student accounts', 'University partnerships'],
      budget: '6M AED'
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/group-org-structure" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to Organization</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold">Launch Strategy</h1>
                <p className="text-xs text-white/60">Go-to-Market Plan</p>
              </div>
            </div>
            <Link href="/group-governance" className="text-sm text-[#c9a227] hover:text-[#e8c547] transition-colors flex items-center gap-1">
              <span className="hidden sm:inline">Governance</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-[#c9a227]/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-[#c9a227] bg-clip-text text-transparent">
                From Zero to 15M Users
              </span>
              <br />
              <span className="text-white">in 3 Years</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              A phased go-to-market strategy launching 10 products across 6 GCC countries,
              building the largest Islamic super-app ecosystem.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { label: '10 Products', value: '3 Years' },
                { label: '6 Countries', value: 'GCC' },
                { label: 'Marketing', value: '500M AED' },
                { label: 'Target Users', value: '15M' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-xl sm:text-2xl font-bold text-emerald-400">{stat.value}</p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-white/10 sticky top-[73px] bg-black/90 backdrop-blur-xl z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 sm:gap-2 overflow-x-auto py-2 scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-emerald-500 text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Launch Strategy Overview</h2>
              <p className="text-white/70">A comprehensive 5-phase approach to capturing
              the GCC Islamic economy market.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-emerald-500/20 to-transparent rounded-2xl p-6 sm:p-8 border border-emerald-500/30">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-400" />
                  Strategic Objectives
                </h3>
                <ul className="space-y-3">
                  {[
                    'Establish Nuqta as the #1 Islamic super-app in GCC',
                    'Achieve 15M monthly active users by end of Year 3',
                    'Launch all 10 products with strong product-market fit',
                    'Expand to all 6 GCC countries by 2027',
                    'Build sustainable unit economics by Series C',
                  ].map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#c9a227]/20 to-transparent rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#c9a227]" />
                  Key Success Factors
                </h3>
                <ul className="space-y-3">
                  {[
                    'Strong core app experience from Day 1',
                    'Rapid merchant acquisition and partnerships',
                    'Aggressive but efficient user acquisition',
                    'Cross-product synergies driving LTV',
                    'Regulatory compliance and trust building',
                  ].map((factor, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-[#c9a227] shrink-0 mt-0.5" />
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold mb-6">Launch Timeline Overview</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                {launchPhases.map((phase, i) => (
                  <div key={i} className="flex-1 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-all">
                    <p className="text-xs text-emerald-400 font-medium">{phase.timeline}</p>
                    <p className="font-semibold mt-1">{phase.phase.split(': ')[1]}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {phase.products.map((product, j) => (
                        <span key={j} className="px-2 py-0.5 bg-emerald-500/20 rounded text-xs text-emerald-300">{product}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Launch Phases Tab */}
        {activeTab === 'phases' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">5-Phase Launch Roadmap</h2>
              <p className="text-white/70">Progressive product launches aligned with
              funding rounds and market expansion.</p>
            </div>

            <div className="space-y-6">
              {launchPhases.map((phase, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-emerald-500/50 transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="lg:w-1/4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                          <span className="text-lg font-bold text-emerald-400">P{i + 1}</span>
                        </div>
                        <div>
                          <p className="font-bold">{phase.phase}</p>
                          <p className="text-sm text-emerald-400">{phase.timeline}</p>
                        </div>
                      </div>
                      <p className="text-sm text-white/70">{phase.focus}</p>
                    </div>

                    <div className="lg:w-2/4">
                      <p className="text-sm text-white/50 mb-2">Key Activities</p>
                      <ul className="space-y-1.5">
                        {phase.activities.map((activity, j) => (
                          <li key={j} className="text-sm text-white/80 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:w-1/4">
                      <div className="grid grid-cols-3 lg:grid-cols-1 gap-3">
                        <div className="p-3 bg-white/5 rounded-lg">
                          <p className="text-xs text-white/50">Users</p>
                          <p className="font-bold text-[#c9a227]">{phase.targets.users}</p>
                        </div>
                        <div className="p-3 bg-white/5 rounded-lg">
                          <p className="text-xs text-white/50">Merchants</p>
                          <p className="font-bold">{phase.targets.merchants}</p>
                        </div>
                        <div className="p-3 bg-white/5 rounded-lg">
                          <p className="text-xs text-white/50">Budget</p>
                          <p className="font-bold text-emerald-400">{phase.budget}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Product Sequence Tab */}
        {activeTab === 'product' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Product Launch Sequence</h2>
              <p className="text-white/70">Strategic ordering of 10 product launches
              to maximize synergies and growth.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {productLaunchSequence.map((product, i) => {
                const Logo = product.logo;
                return (
                  <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#c9a227]/50 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <Logo size={40} />
                      <div>
                        <p className="font-bold text-sm">{product.product}</p>
                        <p className="text-xs text-white/60">{product.arabic}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/50">Launch</span>
                        <span className="text-xs font-medium text-emerald-400">{product.quarter}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/50">Priority</span>
                        <span className="w-6 h-6 rounded-full bg-[#c9a227]/20 flex items-center justify-center text-xs font-bold text-[#c9a227]">
                          {product.priority}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-white/70 mt-3 pt-3 border-t border-white/10">
                      {product.reason}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-emerald-500/20 to-[#c9a227]/20 rounded-2xl p-6 border border-emerald-500/30">
              <h3 className="text-lg font-bold mb-4">Launch Sequencing Rationale</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { phase: 'Foundation First', products: 'Nuqta + Nuqta+', reason: 'Establish core app and early revenue' },
                  { phase: 'Fintech Core', products: 'Qist + Hawil', reason: 'High-margin products driving engagement' },
                  { phase: 'Lifestyle Scale', products: 'Rakab + Sakin', reason: 'Daily habits and big transactions' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-xl">
                    <p className="font-semibold text-emerald-400">{item.phase}</p>
                    <p className="text-sm text-white/80 my-1">{item.products}</p>
                    <p className="text-xs text-white/60">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Marketing Tab */}
        {activeTab === 'marketing' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Marketing Strategy</h2>
              <p className="text-white/70">Brand positioning, messaging, and campaign
              strategy for the Islamic super-app.</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/20 to-transparent rounded-2xl p-6 sm:p-8 border border-emerald-500/30 text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">"{marketingStrategy.tagline}"</h3>
              <p className="text-white/60">{marketingStrategy.positioning}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {marketingStrategy.pillars.map((pillar, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <h4 className="font-bold text-[#c9a227] mb-2">{pillar.pillar}</h4>
                  <p className="text-sm text-white/80 mb-4">{pillar.message}</p>
                  <div className="space-y-1.5">
                    {pillar.tactics.map((tactic, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-white/60">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        {tactic}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold mb-6">Key Launch Campaigns</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {launchCampaigns.map((campaign, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold">{campaign.name}</h4>
                      <span className="px-2 py-1 bg-emerald-500/20 rounded text-xs text-emerald-400">{campaign.timing}</span>
                    </div>
                    <p className="text-sm text-white/70 mb-3">{campaign.objective}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {campaign.tactics.map((tactic, j) => (
                        <span key={j} className="px-2 py-0.5 bg-white/10 rounded text-xs">{tactic}</span>
                      ))}
                    </div>
                    <p className="text-sm text-[#c9a227] font-medium">Budget: {campaign.budget}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Channels Tab */}
        {activeTab === 'channels' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Acquisition Channels</h2>
              <p className="text-white/70">Multi-channel approach optimized for
              CAC efficiency and scale.</p>
            </div>

            <div className="grid gap-4">
              {acquisitionChannels.map((channel, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-emerald-500/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="sm:w-1/4">
                      <h4 className="font-bold">{channel.channel}</h4>
                      <p className="text-sm text-emerald-400">{channel.budget} of budget</p>
                    </div>
                    <div className="sm:w-1/2">
                      <div className="flex flex-wrap gap-2">
                        {channel.tactics.map((tactic, j) => (
                          <span key={j} className="px-3 py-1 bg-white/10 rounded-full text-sm">{tactic}</span>
                        ))}
                      </div>
                    </div>
                    <div className="sm:w-1/4 flex gap-4 sm:justify-end">
                      <div className="text-center">
                        <p className="text-lg font-bold text-[#c9a227]">{channel.cac}</p>
                        <p className="text-xs text-white/50">Target CAC</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold">{channel.volume}</p>
                        <p className="text-xs text-white/50">Volume</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#c9a227]/20 to-emerald-500/20 rounded-2xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold mb-4">Channel Mix Evolution</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { year: 'Year 1', focus: 'Performance + Referrals', split: '60% paid, 40% organic' },
                  { year: 'Year 2', focus: 'Brand + Partnerships', split: '50% paid, 50% organic' },
                  { year: 'Year 3', focus: 'Organic + Word of Mouth', split: '35% paid, 65% organic' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-xl text-center">
                    <p className="text-lg font-bold text-[#c9a227]">{item.year}</p>
                    <p className="text-sm text-white/80 my-1">{item.focus}</p>
                    <p className="text-xs text-white/60">{item.split}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* KPIs Tab */}
        {activeTab === 'metrics' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Key Performance Indicators</h2>
              <p className="text-white/70">Critical metrics tracked across the
              3-year launch journey.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white/60 font-medium">Metric</th>
                    <th className="text-center py-3 px-4 text-white/60 font-medium">Year 1</th>
                    <th className="text-center py-3 px-4 text-white/60 font-medium">Year 2</th>
                    <th className="text-center py-3 px-4 text-white/60 font-medium">Year 3</th>
                  </tr>
                </thead>
                <tbody>
                  {launchKPIs.map((kpi, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-4 px-4 font-medium">{kpi.metric}</td>
                      <td className="py-4 px-4 text-center">{kpi.year1}</td>
                      <td className="py-4 px-4 text-center text-emerald-400">{kpi.year2}</td>
                      <td className="py-4 px-4 text-center text-[#c9a227] font-bold">{kpi.year3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'North Star', metric: 'Weekly Transactions', target: '10M/week by Y3' },
                { title: 'Engagement', metric: 'DAU/MAU Ratio', target: '35%+ by Y3' },
                { title: 'Monetization', metric: 'ARPU', target: '250 AED/year by Y3' },
                { title: 'Retention', metric: 'M12 Retention', target: '60%+ by Y3' },
              ].map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-emerald-500/20 to-transparent rounded-xl p-5 border border-emerald-500/30">
                  <p className="text-xs text-emerald-400 uppercase tracking-wider">{item.title}</p>
                  <p className="font-bold mt-1">{item.metric}</p>
                  <p className="text-sm text-white/60 mt-2">{item.target}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Budget Tab */}
        {activeTab === 'budget' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Marketing Investment</h2>
              <p className="text-white/70">500M AED total marketing spend over 3 years
              to acquire 15M users.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white/60 font-medium">Category</th>
                    <th className="text-center py-3 px-4 text-white/60 font-medium">Year 1</th>
                    <th className="text-center py-3 px-4 text-white/60 font-medium">Year 2</th>
                    <th className="text-center py-3 px-4 text-white/60 font-medium">Year 3</th>
                  </tr>
                </thead>
                <tbody>
                  {marketingBudget.map((item, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-4 px-4 font-medium">{item.category}</td>
                      <td className="py-4 px-4 text-center">{item.year1}</td>
                      <td className="py-4 px-4 text-center">{item.year2}</td>
                      <td className="py-4 px-4 text-center text-[#c9a227]">{item.year3}</td>
                    </tr>
                  ))}
                  <tr className="bg-white/5 font-bold">
                    <td className="py-4 px-4">Total</td>
                    <td className="py-4 px-4 text-center">48M</td>
                    <td className="py-4 px-4 text-center text-emerald-400">200M</td>
                    <td className="py-4 px-4 text-center text-[#c9a227]">500M</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { metric: 'Total 3-Year Spend', value: '748M AED', desc: 'Cumulative marketing investment' },
                { metric: 'Blended CAC', value: '50 AED', desc: 'Average cost per acquired user' },
                { metric: 'Target LTV/CAC', value: '50x', desc: 'Lifetime value to acquisition cost' },
              ].map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-[#c9a227]/20 to-transparent rounded-xl p-6 border border-[#c9a227]/30 text-center">
                  <p className="text-3xl font-bold text-[#c9a227]">{item.value}</p>
                  <p className="font-medium mt-1">{item.metric}</p>
                  <p className="text-sm text-white/60 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Navigation */}
      <section className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/group-org-structure" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Organization</span>
            </Link>
            <Link href="/group-governance" className="flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-black rounded-xl font-semibold hover:bg-[#e8c547] transition-colors">
              <span>Governance</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
