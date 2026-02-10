'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Building2, Target, TrendingUp, Globe, Users,
  Layers, Crown, DollarSign, Rocket, Shield, Zap,
  CheckCircle2, ArrowRight, Star, Briefcase, Network,
  Gem, ChevronRight, BarChart3, PieChart, LineChart
} from 'lucide-react';
import {
  NuqtaLogo, NuqtaPlusLogo, QistLogo, SakinLogo, WasilLogo,
  HawilLogo, RakabLogo, SafarLogo, AjerLogo, FakhirLogo
} from '@/components/CompanyLogos';
import GlobalFooter from '@/components/GlobalFooter';

export default function GroupMasterPlanPage() {
  const [activeTab, setActiveTab] = useState('vision');

  const tabs = [
    { id: 'vision', label: 'Vision', icon: Target },
    { id: 'structure', label: 'Corporate Structure', icon: Building2 },
    { id: 'ecosystem', label: '10 Pillars', icon: Layers },
    { id: 'synergies', label: 'Synergies', icon: Network },
    { id: 'financials', label: 'Group Financials', icon: DollarSign },
    { id: 'valuation', label: 'Valuation Path', icon: TrendingUp },
    { id: 'markets', label: 'Market Expansion', icon: Globe },
    { id: 'milestones', label: 'Milestones', icon: Rocket },
  ];

  const ecosystemPillars = [
    {
      name: 'Nuqta',
      arabic: 'نقطة',
      logo: NuqtaLogo,
      role: 'Core Super App',
      description: 'Central financial & lifestyle hub connecting all services',
      revenue: '2.5B AED',
      users: '15M+',
      color: 'from-[#c9a227] to-[#e8c547]'
    },
    {
      name: 'Nuqta+',
      arabic: 'نقطة بلس',
      logo: NuqtaPlusLogo,
      role: 'Premium Membership',
      description: 'Exclusive benefits, cashback, and premium services',
      revenue: '800M AED',
      users: '3M+',
      color: 'from-purple-500 to-violet-600'
    },
    {
      name: 'Qist',
      arabic: 'قسط',
      logo: QistLogo,
      role: 'BNPL & Financing',
      description: 'Islamic-compliant installment and financing solutions',
      revenue: '1.8B AED',
      users: '8M+',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'Sakin',
      arabic: 'ساكن',
      logo: SakinLogo,
      role: 'Real Estate',
      description: 'Property marketplace, rentals, and housing finance',
      revenue: '1.2B AED',
      users: '2M+',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Wasil',
      arabic: 'واصل',
      logo: WasilLogo,
      role: 'Logistics',
      description: 'Last-mile delivery and smart logistics network',
      revenue: '600M AED',
      users: '5M+',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Hawil',
      arabic: 'حويل',
      logo: HawilLogo,
      role: 'Remittance',
      description: 'Cross-border payments and international transfers',
      revenue: '900M AED',
      users: '6M+',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Rakab',
      arabic: 'ركاب',
      logo: RakabLogo,
      role: 'Mobility',
      description: 'Ride-hailing, car subscriptions, and transport',
      revenue: '1.5B AED',
      users: '10M+',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Safar',
      arabic: 'سفر',
      logo: SafarLogo,
      role: 'Travel',
      description: 'Halal travel, bookings, and tourism experiences',
      revenue: '700M AED',
      users: '4M+',
      color: 'from-sky-500 to-indigo-600'
    },
    {
      name: 'Ajer',
      arabic: 'أجر',
      logo: AjerLogo,
      role: 'Gig Economy',
      description: 'Freelancer platform and service marketplace',
      revenue: '400M AED',
      users: '3M+',
      color: 'from-rose-500 to-pink-600'
    },
    {
      name: 'Fakhir',
      arabic: 'فاخر',
      logo: FakhirLogo,
      role: 'Luxury',
      description: 'High-net-worth concierge and luxury services',
      revenue: '500M AED',
      users: '50K',
      color: 'from-amber-500 to-yellow-600'
    },
  ];

  const corporateStructure = {
    holding: {
      name: 'Nuqta Group Holding',
      type: 'Ultimate Parent Company',
      jurisdiction: 'ADGM, Abu Dhabi',
      description: 'Strategic oversight, capital allocation, and group governance'
    },
    subsidiaries: [
      { name: 'Nuqta Financial Services', products: ['Nuqta', 'Qist', 'Hawil'], license: 'CBUAE Regulated' },
      { name: 'Nuqta Lifestyle Co.', products: ['Nuqta+', 'Fakhir'], license: 'Commercial License' },
      { name: 'Nuqta PropTech', products: ['Sakin'], license: 'RERA Licensed' },
      { name: 'Nuqta Mobility', products: ['Rakab', 'Wasil'], license: 'RTA Licensed' },
      { name: 'Nuqta Travel & Hospitality', products: ['Safar'], license: 'DTCM Licensed' },
      { name: 'Nuqta Marketplace', products: ['Ajer'], license: 'Commercial License' },
    ]
  };

  const synergies = [
    {
      title: 'Unified User Identity',
      description: 'Single KYC across all 10 products, reducing onboarding friction by 80%',
      impact: '15M unified profiles',
      icon: Users
    },
    {
      title: 'Cross-Product Rewards',
      description: 'Nuqta Points earned and redeemed across entire ecosystem',
      impact: '2B points/year',
      icon: Star
    },
    {
      title: 'Shared Data Intelligence',
      description: 'AI-driven insights powering personalization across products',
      impact: '40% higher engagement',
      icon: Zap
    },
    {
      title: 'Integrated Payments',
      description: 'Seamless payment rails connecting all financial products',
      impact: '50B AED processed',
      icon: DollarSign
    },
    {
      title: 'Cross-Sell Engine',
      description: 'Smart recommendations driving multi-product adoption',
      impact: '4.2 products/user',
      icon: Network
    },
    {
      title: 'Shared Infrastructure',
      description: 'Common tech stack reducing operational costs',
      impact: '60% cost savings',
      icon: Layers
    },
  ];

  const financialProjections = {
    year1: { revenue: '850M', users: '5M', valuation: '4B' },
    year3: { revenue: '4.5B', users: '20M', valuation: '22B' },
    year5: { revenue: '11B', users: '45M', valuation: '55B' },
    year7: { revenue: '25B', users: '80M', valuation: '125B' },
  };

  const valuationPath = [
    {
      stage: 'Seed',
      timeline: 'Q1 2025',
      valuation: '50M AED',
      funding: '10M AED',
      milestone: 'MVP launch, 100K users',
      investors: 'Angels, Family Offices'
    },
    {
      stage: 'Series A',
      timeline: 'Q4 2025',
      valuation: '400M AED',
      funding: '80M AED',
      milestone: '1M users, 5 products live',
      investors: 'Regional VCs, Strategic'
    },
    {
      stage: 'Series B',
      timeline: 'Q3 2026',
      valuation: '2B AED',
      funding: '400M AED',
      milestone: '5M users, GCC expansion',
      investors: 'Growth Equity, Sovereign'
    },
    {
      stage: 'Series C',
      timeline: 'Q2 2027',
      valuation: '8B AED',
      funding: '1.5B AED',
      milestone: '15M users, profitability',
      investors: 'Global PE, Sovereign Wealth'
    },
    {
      stage: 'Series D',
      timeline: 'Q1 2028',
      valuation: '25B AED',
      funding: '4B AED',
      milestone: '30M users, MENA expansion',
      investors: 'Late-stage, Pre-IPO'
    },
    {
      stage: 'IPO',
      timeline: 'Q4 2029',
      valuation: '55B+ AED',
      funding: 'Public Markets',
      milestone: '50M users, category leader',
      investors: 'ADX/Nasdaq Dual Listing'
    },
  ];

  const marketExpansion = [
    {
      phase: 1,
      markets: ['UAE'],
      timeline: '2025',
      population: '10M',
      focus: 'Home market dominance'
    },
    {
      phase: 2,
      markets: ['Saudi Arabia', 'Qatar'],
      timeline: '2026',
      population: '40M',
      focus: 'GCC core markets'
    },
    {
      phase: 3,
      markets: ['Kuwait', 'Bahrain', 'Oman'],
      timeline: '2027',
      population: '10M',
      focus: 'Full GCC coverage'
    },
    {
      phase: 4,
      markets: ['Egypt', 'Jordan', 'Morocco'],
      timeline: '2028',
      population: '130M',
      focus: 'MENA expansion'
    },
    {
      phase: 5,
      markets: ['Indonesia', 'Malaysia', 'Turkey'],
      timeline: '2029',
      population: '350M',
      focus: 'Global Muslim markets'
    },
  ];

  const keyMilestones = [
    { date: 'Q1 2025', milestone: 'Nuqta Super App launch in UAE', status: 'upcoming' },
    { date: 'Q2 2025', milestone: 'Qist BNPL goes live with 500 merchants', status: 'upcoming' },
    { date: 'Q3 2025', milestone: 'Hawil remittance licensed in UAE', status: 'upcoming' },
    { date: 'Q4 2025', milestone: '1 million active users milestone', status: 'upcoming' },
    { date: 'Q1 2026', milestone: 'Rakab ride-hailing launch in Dubai', status: 'upcoming' },
    { date: 'Q2 2026', milestone: 'Saudi Arabia market entry', status: 'upcoming' },
    { date: 'Q3 2026', milestone: '5 million users, Series B close', status: 'upcoming' },
    { date: 'Q4 2026', milestone: 'Fakhir luxury concierge launch', status: 'upcoming' },
    { date: 'Q1 2027', milestone: 'Full GCC coverage achieved', status: 'upcoming' },
    { date: 'Q2 2027', milestone: 'Group profitability achieved', status: 'upcoming' },
    { date: 'Q4 2028', milestone: '30 million users milestone', status: 'upcoming' },
    { date: 'Q4 2029', milestone: 'IPO on ADX and Nasdaq', status: 'upcoming' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/ecosystem" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to Ecosystem</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
                <Crown className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold">Nuqta Group</h1>
                <p className="text-xs text-white/60">Master Plan</p>
              </div>
            </div>
            <Link href="/group-org-structure" className="text-sm text-[#c9a227] hover:text-[#e8c547] transition-colors flex items-center gap-1">
              <span className="hidden sm:inline">Organization</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/20 via-transparent to-purple-900/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9a227]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a227]/20 border border-[#c9a227]/30 mb-6">
              <Gem className="w-4 h-4 text-[#c9a227]" />
              <span className="text-sm text-[#c9a227]">Building the Future of Islamic Fintech</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#c9a227] via-[#e8c547] to-[#c9a227] bg-clip-text text-transparent">
                The 55 Billion AED
              </span>
              <br />
              <span className="text-white">Super Ecosystem</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              One unified platform. Ten powerful products. 80 million users.
              Nuqta Group is building the definitive Islamic super-app ecosystem for the global Muslim economy.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { label: '10 Products', value: 'Integrated' },
                { label: '80M Users', value: 'By 2030' },
                { label: '25B AED', value: 'Revenue' },
                { label: '125B AED', value: 'Valuation' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-xl sm:text-2xl font-bold text-[#c9a227]">{stat.value}</p>
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
                      ? 'bg-[#c9a227] text-black'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* Vision Tab */}
        {activeTab === 'vision' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-white/70">To become the world's leading Islamic super-app ecosystem, empowering
              100 million Muslims with seamless financial and lifestyle services by 2030.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-transparent rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#c9a227]" />
                  Mission Statement
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Nuqta Group unifies the fragmented Islamic economy through a comprehensive
                  super-app ecosystem that delivers financial inclusion, lifestyle convenience,
                  and Shariah-compliant innovation to every Muslim household.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl p-6 sm:p-8 border border-purple-500/30">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Crown className="w-5 h-5 text-purple-400" />
                  Core Values
                </h3>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Shariah-First Innovation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Financial Inclusion for All</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Seamless User Experience</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Trust & Transparency</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6">Why Nuqta Group Will Win</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'First Mover', desc: 'First true Islamic super-app in GCC' },
                  { title: 'Full Stack', desc: '10 products covering entire lifestyle' },
                  { title: 'Network Effects', desc: 'Each product strengthens others' },
                  { title: 'Data Moat', desc: 'Unified profile across all services' },
                  { title: 'Trust Brand', desc: 'Shariah-certified everything' },
                  { title: 'GCC Focus', desc: 'Built for regional nuances' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#c9a227] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Corporate Structure Tab */}
        {activeTab === 'structure' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Corporate Structure</h2>
              <p className="text-white/70">A robust holding company structure enabling strategic flexibility,
              regulatory compliance, and optimized capital allocation.</p>
            </div>

            {/* Holding Company */}
            <div className="bg-gradient-to-br from-[#c9a227]/20 to-transparent rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30 text-center">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center mb-4">
                <Building2 className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{corporateStructure.holding.name}</h3>
              <p className="text-[#c9a227] font-medium mb-2">{corporateStructure.holding.type}</p>
              <p className="text-white/60 text-sm mb-4">{corporateStructure.holding.jurisdiction}</p>
              <p className="text-white/80 max-w-xl mx-auto">{corporateStructure.holding.description}</p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-0.5 h-12 bg-gradient-to-b from-[#c9a227] to-white/20" />
            </div>

            {/* Subsidiaries */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {corporateStructure.subsidiaries.map((sub, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-[#c9a227]/50 transition-all">
                  <h4 className="font-bold mb-2">{sub.name}</h4>
                  <p className="text-xs text-[#c9a227] mb-3">{sub.license}</p>
                  <div className="flex flex-wrap gap-2">
                    {sub.products.map((product, j) => (
                      <span key={j} className="px-2 py-1 bg-white/10 rounded-lg text-xs">{product}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold mb-4">Regulatory Licenses Required</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { body: 'CBUAE', license: 'Payment Service Provider' },
                  { body: 'CBUAE', license: 'Financing Company' },
                  { body: 'RTA', license: 'Transport Network Company' },
                  { body: 'RERA', license: 'Real Estate Broker' },
                  { body: 'DTCM', license: 'Travel Agency' },
                  { body: 'ADGM', license: 'Financial Services' },
                  { body: 'SAMA (KSA)', license: 'Payment Institution' },
                  { body: 'QCB', license: 'E-Money Institution' },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-white/5 rounded-lg">
                    <p className="text-sm font-bold text-[#c9a227]">{item.body}</p>
                    <p className="text-xs text-white/70">{item.license}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 10 Pillars Tab */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">The 10 Pillars</h2>
              <p className="text-white/70">Each product serves a critical role in the ecosystem,
              creating a comprehensive lifestyle platform for the Muslim consumer.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ecosystemPillars.map((pillar, i) => {
                const Logo = pillar.logo;
                return (
                  <div key={i} className="group bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-[#c9a227]/50 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <Logo size={48} />
                      <div>
                        <h4 className="font-bold">{pillar.name}</h4>
                        <p className="text-sm text-white/60">{pillar.arabic}</p>
                        <p className={`text-xs font-medium bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}>
                          {pillar.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-white/70 mb-4">{pillar.description}</p>
                    <div className="flex justify-between text-sm">
                      <div>
                        <p className="text-white/50">Revenue</p>
                        <p className="font-bold text-[#c9a227]">{pillar.revenue}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white/50">Users</p>
                        <p className="font-bold">{pillar.users}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-[#c9a227]/20 via-purple-500/20 to-[#c9a227]/20 rounded-2xl p-6 border border-[#c9a227]/30 text-center">
              <h3 className="text-xl font-bold mb-2">Combined Group Metrics (Year 7)</h3>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#c9a227]">25B AED</p>
                  <p className="text-sm text-white/60">Total Revenue</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-purple-400">80M</p>
                  <p className="text-sm text-white/60">Total Users</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-emerald-400">125B AED</p>
                  <p className="text-sm text-white/60">Group Valuation</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Synergies Tab */}
        {activeTab === 'synergies' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ecosystem Synergies</h2>
              <p className="text-white/70">The true power of Nuqta Group lies in the compounding
              effects of integrating all 10 products into one seamless ecosystem.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {synergies.map((synergy, i) => {
                const Icon = synergy.icon;
                return (
                  <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#c9a227]/50 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#c9a227]" />
                    </div>
                    <h4 className="font-bold mb-2">{synergy.title}</h4>
                    <p className="text-sm text-white/70 mb-4">{synergy.description}</p>
                    <div className="px-3 py-2 bg-[#c9a227]/10 rounded-lg inline-block">
                      <p className="text-sm font-bold text-[#c9a227]">{synergy.impact}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6">Cross-Product User Journeys</h3>
              <div className="space-y-4">
                {[
                  {
                    journey: 'New Resident Journey',
                    flow: 'Sakin (find apartment) → Qist (security deposit) → Hawil (send money home) → Wasil (furniture delivery) → Ajer (find helper)'
                  },
                  {
                    journey: 'Daily Commuter Journey',
                    flow: 'Rakab (morning ride) → Nuqta (coffee payment) → Qist (lunch BNPL) → Rakab (evening ride) → Nuqta+ (cashback)'
                  },
                  {
                    journey: 'Family Vacation Journey',
                    flow: 'Safar (book trip) → Qist (travel financing) → Fakhir (airport VIP) → Hawil (currency exchange) → Nuqta+ (travel insurance)'
                  },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-xl">
                    <p className="font-semibold text-[#c9a227] mb-2">{item.journey}</p>
                    <p className="text-sm text-white/70">{item.flow}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Group Financials Tab */}
        {activeTab === 'financials' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Group Financials</h2>
              <p className="text-white/70">Projected financial performance across all 10 products
              over the next 7 years.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(financialProjections).map(([year, data]) => (
                <div key={year} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p className="text-sm text-white/60 mb-4">
                    {year === 'year1' ? 'Year 1' : year === 'year3' ? 'Year 3' : year === 'year5' ? 'Year 5' : 'Year 7'}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-2xl font-bold text-[#c9a227]">{data.revenue}</p>
                      <p className="text-xs text-white/50">Revenue</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold">{data.users}</p>
                      <p className="text-xs text-white/50">Users</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-emerald-400">{data.valuation}</p>
                      <p className="text-xs text-white/50">Valuation</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-[#c9a227]" />
                  Revenue Mix (Year 7)
                </h3>
                <div className="space-y-3">
                  {[
                    { product: 'Nuqta Core', pct: '10%', amt: '2.5B' },
                    { product: 'Qist', pct: '7%', amt: '1.8B' },
                    { product: 'Rakab', pct: '6%', amt: '1.5B' },
                    { product: 'Sakin', pct: '5%', amt: '1.2B' },
                    { product: 'Hawil', pct: '4%', amt: '900M' },
                    { product: 'Others', pct: '10%', amt: '2.5B' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm">{item.product}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-white/60">{item.pct}</span>
                        <span className="text-sm font-bold text-[#c9a227]">{item.amt}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#c9a227]" />
                  Key Financial Metrics
                </h3>
                <div className="space-y-4">
                  {[
                    { metric: 'Gross Margin', value: '45%', trend: '+5% YoY' },
                    { metric: 'EBITDA Margin', value: '25%', trend: '+8% YoY' },
                    { metric: 'CAC', value: '85 AED', trend: '-20% YoY' },
                    { metric: 'LTV', value: '4,200 AED', trend: '+35% YoY' },
                    { metric: 'LTV/CAC Ratio', value: '49x', trend: 'Industry leading' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-sm">{item.metric}</span>
                      <div className="text-right">
                        <span className="font-bold text-[#c9a227]">{item.value}</span>
                        <span className="text-xs text-emerald-400 ml-2">{item.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Valuation Path Tab */}
        {activeTab === 'valuation' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Path to 55B+ Valuation</h2>
              <p className="text-white/70">Our fundraising roadmap from seed to IPO,
              building one of the largest Islamic fintech companies globally.</p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c9a227] via-purple-500 to-emerald-500" />

              <div className="space-y-8">
                {valuationPath.map((stage, i) => (
                  <div key={i} className={`relative flex flex-col sm:flex-row gap-4 ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-4 sm:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-[#c9a227] border-4 border-black z-10" />

                    {/* Content */}
                    <div className={`ml-10 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'}`}>
                      <div className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-[#c9a227]/50 transition-all">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-[#c9a227]/20 rounded-full text-sm font-bold text-[#c9a227]">
                            {stage.stage}
                          </span>
                          <span className="text-sm text-white/60">{stage.timeline}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-white/50">Valuation</p>
                            <p className="text-lg font-bold text-emerald-400">{stage.valuation}</p>
                          </div>
                          <div>
                            <p className="text-xs text-white/50">Funding</p>
                            <p className="text-lg font-bold text-[#c9a227]">{stage.funding}</p>
                          </div>
                        </div>
                        <p className="text-sm text-white/70 mb-2">{stage.milestone}</p>
                        <p className="text-xs text-white/50">{stage.investors}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#c9a227]/20 to-emerald-500/20 rounded-2xl p-6 border border-[#c9a227]/30 text-center">
              <h3 className="text-xl font-bold mb-4">Total Capital Raised by IPO</h3>
              <p className="text-4xl font-bold text-[#c9a227]">6B+ AED</p>
              <p className="text-white/60 mt-2">Across 6 funding rounds over 5 years</p>
            </div>
          </div>
        )}

        {/* Market Expansion Tab */}
        {activeTab === 'markets' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Global Expansion Roadmap</h2>
              <p className="text-white/70">From UAE to the world: capturing 500+ million
              potential users across 15 countries.</p>
            </div>

            <div className="space-y-4">
              {marketExpansion.map((phase, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-[#c9a227]/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-[#c9a227]">P{phase.phase}</span>
                      </div>
                      <div>
                        <p className="font-bold">{phase.timeline}</p>
                        <p className="text-sm text-white/60">{phase.focus}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:ml-auto">
                      {phase.markets.map((market, j) => (
                        <span key={j} className="px-3 py-1 bg-white/10 rounded-full text-sm">{market}</span>
                      ))}
                    </div>
                    <div className="sm:text-right">
                      <p className="text-lg font-bold text-[#c9a227]">{phase.population}</p>
                      <p className="text-xs text-white/50">Population</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { region: 'GCC', countries: 6, population: '60M', gdp: '$2T' },
                { region: 'MENA', countries: 15, population: '450M', gdp: '$3.5T' },
                { region: 'Global Muslim', countries: 57, population: '2B', gdp: '$8T' },
              ].map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-[#c9a227]/20 to-transparent rounded-2xl p-6 border border-[#c9a227]/30 text-center">
                  <Globe className="w-8 h-8 text-[#c9a227] mx-auto mb-3" />
                  <h4 className="font-bold mb-2">{item.region}</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-[#c9a227] font-bold">{item.countries}</p>
                      <p className="text-xs text-white/50">Countries</p>
                    </div>
                    <div>
                      <p className="text-[#c9a227] font-bold">{item.population}</p>
                      <p className="text-xs text-white/50">Population</p>
                    </div>
                    <div>
                      <p className="text-[#c9a227] font-bold">{item.gdp}</p>
                      <p className="text-xs text-white/50">GDP</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Milestones Tab */}
        {activeTab === 'milestones' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Key Milestones</h2>
              <p className="text-white/70">Critical achievements on our path to becoming
              the leading Islamic super-app ecosystem.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyMilestones.map((item, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-[#c9a227]/50 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-[#c9a227]/20 rounded-lg text-xs font-bold text-[#c9a227]">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-sm">{item.milestone}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-emerald-500/20 to-[#c9a227]/20 rounded-2xl p-6 sm:p-8 border border-emerald-500/30">
              <h3 className="text-xl font-bold mb-4 text-center">Ultimate Goal</h3>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-[#c9a227] bg-clip-text text-transparent mb-2">
                  100 Million Users
                </p>
                <p className="text-white/60">Across 15 countries by 2030</p>
                <p className="text-lg font-bold text-[#c9a227] mt-4">
                  The world's largest Islamic super-app ecosystem
                </p>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Navigation to Other Group Pages */}
      <section className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-xl font-bold mb-6 text-center">Explore Group Strategy</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Organization', href: '/group-org-structure', icon: Users, desc: 'Team & Leadership' },
              { name: 'Launch Strategy', href: '/group-launch-strategy', icon: Rocket, desc: 'Go-to-Market Plan' },
              { name: 'Governance', href: '/group-governance', icon: Shield, desc: 'Rules & Policies' },
              { name: 'Investors', href: '/investor-outreach', icon: Briefcase, desc: 'Funding & Partners' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Link key={i} href={item.href} className="group bg-white/5 rounded-xl p-5 border border-white/10 hover:border-[#c9a227]/50 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-[#c9a227]" />
                    <span className="font-semibold group-hover:text-[#c9a227] transition-colors">{item.name}</span>
                  </div>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
