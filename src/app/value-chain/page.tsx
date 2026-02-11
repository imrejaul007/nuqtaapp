'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Network, ArrowRight, ArrowDown, ArrowUp, Wallet, Database,
  Users, Store, Package, Megaphone, CreditCard, Server, Calendar,
  Plane, Layers, TrendingUp, DollarSign, Coins, BarChart3, Zap,
  Crown, Building2, Truck, ShoppingCart, Target, Brain, Globe,
  CheckCircle, ChevronDown, ChevronUp, RefreshCw, CircleDot,
  ArrowRightLeft, Activity, Lock, Shield
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Sister Companies
const sisterCompanies = [
  { id: 'nuqta', name: 'Nuqta Corp', role: 'User Attention & Loyalty', icon: Crown, color: 'bg-[#c9a227]', textColor: 'text-[#c9a227]', power: 'Kingmaker', href: '/nuqta-corp' },
  { id: 'wasil', name: 'Wasil Group', role: 'GMV + Frequency', icon: Truck, color: 'bg-orange-500', textColor: 'text-orange-400', power: 'Revenue Core', href: '/wasil-apps' },
  { id: 'bizone', name: 'BizOne Tech', role: 'Merchant Control', icon: Store, color: 'bg-blue-500', textColor: 'text-blue-400', power: 'Merchant Lock-in', href: '/bizone' },
  { id: 'inventora', name: 'Inventora', role: 'Inventory Margin', icon: Layers, color: 'bg-teal-500', textColor: 'text-teal-400', power: 'Profit Engine', href: '/inventora' },
  { id: 'nextabizz', name: 'NextaBizz', role: 'B2B Commerce', icon: Package, color: 'bg-emerald-500', textColor: 'text-emerald-400', power: 'Scale Engine', href: '/nextabizz' },
  { id: 'adzy', name: 'Adzy Media', role: 'Ads Revenue', icon: Megaphone, color: 'bg-pink-500', textColor: 'text-pink-400', power: 'Growth Engine', href: '/adzy' },
  { id: 'finance', name: 'RTMN Finance', role: 'Fintech Margins', icon: CreditCard, color: 'bg-green-500', textColor: 'text-green-400', power: 'High Profit', href: '/rtmn-finance' },
  { id: 'rabtul', name: 'Rabtul Tech', role: 'Infra & AI', icon: Server, color: 'bg-purple-500', textColor: 'text-purple-400', power: 'Backbone', href: '/rabtul' },
  { id: 'eventora', name: 'Eventora+', role: 'Entertainment Funnel', icon: Calendar, color: 'bg-violet-500', textColor: 'text-violet-400', power: 'High Traffic', href: '/eventora' },
  { id: 'airzy', name: 'Airzy', role: 'Airports & Travel', icon: Plane, color: 'bg-cyan-500', textColor: 'text-cyan-400', power: 'Premium Funnel', href: '/travel-co' },
];

// Value Chain Steps
const valueChainSteps = [
  { step: 1, name: 'USER ACQUISITION', company: 'Nuqta Apps', description: '35+ free apps bring users in', color: 'bg-[#c9a227]' },
  { step: 2, name: 'DISCOVERY', company: 'Nuqta + Growth Stack', description: 'Rewards-based discovery beats Google', color: 'bg-[#c9a227]' },
  { step: 3, name: 'TRANSACTION', company: 'Wasil Apps', description: '24 vertical commerce apps', color: 'bg-orange-500' },
  { step: 4, name: 'MERCHANT BACKEND', company: 'BizOne', description: 'POS, CRM, inventory management', color: 'bg-blue-500' },
  { step: 5, name: 'INVENTORY PROCURED', company: 'Inventora', description: 'Auto-replenishment from data', color: 'bg-teal-500' },
  { step: 6, name: 'B2B SUPPLY', company: 'NextaBizz', description: 'Wholesale & raw materials', color: 'bg-emerald-500' },
  { step: 7, name: 'MARKETING ENGINE', company: 'Adzy', description: 'Internal Google Ads network', color: 'bg-pink-500' },
  { step: 8, name: 'FINANCIAL SYSTEMS', company: 'RTMN Finance', description: 'Payments, credit, BNPL', color: 'bg-green-500' },
  { step: 9, name: 'TECH + AI INFRA', company: 'Rabtul', description: 'Cloud, APIs, AI models', color: 'bg-purple-500' },
  { step: 10, name: 'EVENTS + TRAVEL', company: 'Eventora+ / Airzy', description: 'High-value user funnels', color: 'bg-cyan-500' },
];

// Money Flow
const moneyFlow = [
  { source: 'Users', target: 'NuqtaPay', description: 'Payment processing fee', amount: '0.3-1.2%' },
  { source: 'Wasil', target: 'Merchants', description: 'Commission on orders', amount: '8-25%' },
  { source: 'BizOne', target: 'RTMN', description: 'SaaS subscription', amount: 'AED 199-2K/mo' },
  { source: 'Inventora', target: 'RTMN', description: 'Inventory margin', amount: '8-20%' },
  { source: 'NextaBizz', target: 'RTMN', description: 'B2B commission', amount: '5-12%' },
  { source: 'Adzy', target: 'RTMN', description: 'Ad spend revenue', amount: 'AED 50-150M/yr' },
  { source: 'Finance', target: 'RTMN', description: 'Credit interest + fees', amount: '18-36% APR' },
  { source: 'Airzy', target: 'RTMN', description: 'Airport retail + FX', amount: '10-25%' },
];

// Data Flow
const dataFlow = [
  { source: 'Nuqta', data: 'User behavior', target: 'Rabtul' },
  { source: 'Wasil', data: 'Purchase patterns', target: 'Rabtul' },
  { source: 'BizOne', data: 'Merchant sales', target: 'Rabtul' },
  { source: 'Inventora', data: 'Inventory usage', target: 'Rabtul' },
  { source: 'NextaBizz', data: 'Supply chain', target: 'Rabtul' },
  { source: 'Airzy', data: 'Travel behavior', target: 'Rabtul' },
  { source: 'Eventora+', data: 'Event preferences', target: 'Rabtul' },
];

// Coin Flow
const coinFlow = [
  { action: 'User earns coins', apps: 'Nuqta → Wasil → Merchants' },
  { action: 'Merchant earns coins', apps: 'NuqtaPay → Adzy' },
  { action: 'User redeems coins', apps: 'More transactions' },
  { action: 'Merchant gives coin-back', apps: 'More footfall' },
  { action: 'Coins expire', apps: 'User returns before expiry' },
];

// Money Loops
const moneyLoops = [
  {
    name: 'Merchant Loop',
    steps: ['Merchant', 'Adzy', 'Wasil', 'BizOne', 'Inventora', 'NextaBizz', 'Merchant'],
    description: 'Merchant spends AED 1 on ads → gets customers → more sales → needs inventory → buys B2B → back to merchant',
  },
  {
    name: 'User Loop',
    steps: ['User', 'Nuqta', 'Wasil', 'Coins', 'Eventora+', 'Airzy', 'Nuqta'],
    description: 'User earns coins → spends → attends event → travels → comes back into Nuqta',
  },
  {
    name: 'Data Loop',
    steps: ['BizOne', 'Rabtul', 'Adzy', 'Wasil', 'Nuqta', 'Finance', 'BizOne'],
    description: 'Data creates infinite monetization through AI-powered insights',
  },
];

// Revenue Multiplier
const revenueMultiplier = {
  description: 'Every AED 1 spent in ecosystem creates AED 7-10 of value across different companies',
  breakdown: [
    { company: 'Wasil', multiplier: '1x', type: 'Direct GMV' },
    { company: 'BizOne', multiplier: '0.5x', type: 'SaaS + Data' },
    { company: 'Inventora', multiplier: '1.5x', type: 'Supply margin' },
    { company: 'NextaBizz', multiplier: '2x', type: 'B2B volume' },
    { company: 'Adzy', multiplier: '1x', type: 'Ad revenue' },
    { company: 'Finance', multiplier: '1.5x', type: 'Credit + Payments' },
    { company: 'Rabtul', multiplier: '0.5x', type: 'Infra usage' },
  ],
};

export default function ValueChainPage() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [expandedLoop, setExpandedLoop] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#c9a227]/10 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full mb-6">
            <Network className="w-5 h-5 text-[#c9a227]" />
            <span className="text-[#c9a227] font-bold">Master Value Chain</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            RTMN Ecosystem <span className="text-[#c9a227]">Value Chain</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            The complete economic engine of RTMN. Money, data, users, merchants, and inventory
            flow across 10 sister companies in a closed-loop economy where value never leaves.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-[#c9a227]/10 rounded-xl p-4 text-center border border-[#c9a227]/30">
              <div className="text-2xl sm:text-3xl font-bold text-[#c9a227]">10</div>
              <div className="text-xs sm:text-sm text-slate-400">Sister Companies</div>
            </div>
            <div className="bg-purple-500/10 rounded-xl p-4 text-center border border-purple-500/30">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400">115+</div>
              <div className="text-xs sm:text-sm text-slate-400">Apps</div>
            </div>
            <div className="bg-green-500/10 rounded-xl p-4 text-center border border-green-500/30">
              <div className="text-2xl sm:text-3xl font-bold text-green-400">7-10x</div>
              <div className="text-xs sm:text-sm text-slate-400">Value Multiplier</div>
            </div>
            <div className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/30">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400">∞</div>
              <div className="text-xs sm:text-sm text-slate-400">Closed Loop</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-20 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-hide">
            {[
              { id: 'overview', label: 'Value Chain', icon: Network },
              { id: 'money', label: 'Money Flow', icon: DollarSign },
              { id: 'data', label: 'Data Flow', icon: Database },
              { id: 'coins', label: 'Coin Flow', icon: Coins },
              { id: 'architecture', label: 'Architecture', icon: Layers },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                  activeSection === tab.id
                    ? 'bg-[#c9a227] text-[#0a1628]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

        {/* LEVEL 1: High-Level Value Chain */}
        {activeSection === 'overview' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">High-Level Value Chain</h2>
              <p className="text-slate-400">The complete circular economy of RTMN</p>
            </div>

            {/* Value Chain Flow */}
            <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
              <div className="space-y-3">
                {valueChainSteps.map((step, index) => (
                  <div key={step.step} className="relative">
                    <div className={`${step.color} rounded-xl p-4 flex items-center justify-between`}>
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                          {step.step}
                        </div>
                        <div>
                          <div className="text-white font-bold">{step.name}</div>
                          <div className="text-white/70 text-sm">{step.company}</div>
                        </div>
                      </div>
                      <div className="text-white/80 text-sm hidden sm:block">{step.description}</div>
                    </div>
                    {index < valueChainSteps.length - 1 && (
                      <div className="flex justify-center py-1">
                        <ArrowDown className="w-5 h-5 text-slate-500" />
                      </div>
                    )}
                  </div>
                ))}
                {/* Loop back arrow */}
                <div className="flex items-center justify-center gap-2 pt-4">
                  <RefreshCw className="w-6 h-6 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-bold">BACK TO USERS (More offers, coins)</span>
                </div>
              </div>
            </div>

            {/* Company Cards */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">10 Sister Companies & Their Powers</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {sisterCompanies.map((company) => (
                <Link
                  key={company.id}
                  href={company.href}
                  className={`${company.color}/10 border border-current/30 rounded-xl p-4 hover:scale-105 transition-transform`}
                  style={{ borderColor: `var(--tw-${company.color.replace('bg-', '')})` }}
                >
                  <company.icon className={`w-8 h-8 ${company.textColor} mb-2`} />
                  <h4 className={`font-bold ${company.textColor} text-sm`}>{company.name}</h4>
                  <p className="text-slate-400 text-xs mt-1">{company.role}</p>
                  <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded ${company.color}/20 ${company.textColor}`}>
                    {company.power}
                  </span>
                </Link>
              ))}
            </div>

            {/* Circular Loops */}
            <h3 className="text-xl font-bold text-white mt-8 mb-4">Circular Value Loops</h3>
            <div className="space-y-4">
              {moneyLoops.map((loop, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedLoop(expandedLoop === index ? null : index)}
                    className="w-full p-4 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      <RefreshCw className="w-6 h-6 text-[#c9a227]" />
                      <div>
                        <h4 className="text-white font-bold">{loop.name}</h4>
                        <p className="text-slate-400 text-sm hidden sm:block">{loop.description}</p>
                      </div>
                    </div>
                    {expandedLoop === index ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </button>
                  {expandedLoop === index && (
                    <div className="px-4 pb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        {loop.steps.map((step, i) => (
                          <React.Fragment key={i}>
                            <span className="bg-[#c9a227]/20 text-[#c9a227] px-3 py-1 rounded-full text-sm font-medium">
                              {step}
                            </span>
                            {i < loop.steps.length - 1 && (
                              <ArrowRight className="w-4 h-4 text-slate-500" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                      <p className="text-slate-400 text-sm mt-3 sm:hidden">{loop.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LEVEL 2: Money Flow */}
        {activeSection === 'money' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">💰 Money Flow (Revenue Engine)</h2>
              <p className="text-slate-400">How every rupee generates 7-10x value across the ecosystem</p>
            </div>

            {/* Revenue Multiplier */}
            <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/30">
              <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Revenue Multiplier Effect
              </h3>
              <p className="text-slate-300 mb-4">{revenueMultiplier.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {revenueMultiplier.breakdown.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-green-400">{item.multiplier}</div>
                    <div className="text-white font-medium text-sm">{item.company}</div>
                    <div className="text-slate-500 text-xs">{item.type}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Money Flow Table */}
            <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 overflow-x-auto">
              <h3 className="text-lg font-bold text-white mb-4">Revenue Streams</h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left text-slate-400 py-2 px-3">Source</th>
                    <th className="text-left text-slate-400 py-2 px-3">Flow</th>
                    <th className="text-left text-slate-400 py-2 px-3">Description</th>
                    <th className="text-right text-slate-400 py-2 px-3">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {moneyFlow.map((flow, i) => (
                    <tr key={i} className="border-b border-slate-700/50">
                      <td className="py-3 px-3 text-white font-medium">{flow.source}</td>
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-green-400" />
                          <span className="text-slate-300">{flow.target}</span>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-slate-400">{flow.description}</td>
                      <td className="py-3 px-3 text-right text-green-400 font-bold">{flow.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Revenue by Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Nuqta Corp', streams: ['Cashback fees 5-15%', 'Coin breakage 20-35%', 'Sponsored deals', 'Ad revenue'], color: 'border-[#c9a227]' },
                { name: 'Wasil Group', streams: ['Commission 8-25%', 'Delivery fees', 'Subscription plans', 'Cross-sell upsells'], color: 'border-orange-500' },
                { name: 'BizOne Tech', streams: ['SaaS ₹499-5K/mo', 'Payment gateway 0.25-1.2%', 'CRM tools', 'Analytics premium'], color: 'border-blue-500' },
                { name: 'Inventora', streams: ['Inventory margin 8-20%', 'Delivery fees', 'Credit interest', 'Subscription'], color: 'border-teal-500' },
                { name: 'NextaBizz', streams: ['B2B commission 5-12%', 'SaaS ₹999-5K/mo', 'Logistics margin 8-15%', 'Lead gen fees'], color: 'border-emerald-500' },
                { name: 'Adzy Media', streams: ['CPC/CPM ads', 'Influencer 20-35%', 'Meme ads', 'Sponsored challenges'], color: 'border-pink-500' },
                { name: 'RTMN Finance', streams: ['Gateway 0.3-1.2%', 'Credit 18-36% APR', 'BNPL MDR 5-30%', 'FX fees 0.2-0.7%'], color: 'border-green-500' },
                { name: 'Eventora+', streams: ['Ticketing 5-15%', 'Vendor 10-25%', 'QR SaaS', 'Event insurance'], color: 'border-violet-500' },
                { name: 'Airzy', streams: ['Retail commission', 'Lounge booking', 'Taxi 10-20%', 'FX conversion'], color: 'border-cyan-500' },
              ].map((company, i) => (
                <div key={i} className={`bg-slate-800/30 rounded-xl p-4 border ${company.color}`}>
                  <h4 className="text-white font-bold mb-3">{company.name}</h4>
                  <ul className="space-y-1">
                    {company.streams.map((stream, j) => (
                      <li key={j} className="text-slate-400 text-sm flex items-center gap-2">
                        <DollarSign className="w-3 h-3 text-green-400" />
                        {stream}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LEVEL 3: Data Flow */}
        {activeSection === 'data' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">📊 Data Flow (Intelligence Engine)</h2>
              <p className="text-slate-400">All data flows to Rabtul, which powers AI-driven decisions</p>
            </div>

            {/* Data Flow Diagram */}
            <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-500/30">
              <div className="text-center mb-6">
                <Server className="w-16 h-16 text-purple-400 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-purple-400">Rabtul AI Engine</h3>
                <p className="text-slate-400 text-sm">Central intelligence hub</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
                {dataFlow.map((flow, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 text-center relative">
                    <ArrowUp className="w-4 h-4 text-purple-400 absolute -top-2 left-1/2 -translate-x-1/2" />
                    <div className="text-white font-medium text-sm">{flow.source}</div>
                    <div className="text-purple-400 text-xs mt-1">{flow.data}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-purple-500/30 pt-6">
                <h4 className="text-purple-400 font-bold mb-4 text-center">Rabtul Produces</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {['Recommendations', 'Credit Scoring', 'Demand Forecasts', 'Smart Ads', 'Fraud Detection', 'Personalized Journeys'].map((output, i) => (
                    <div key={i} className="bg-purple-500/20 rounded-lg p-3 text-center">
                      <Brain className="w-6 h-6 text-purple-400 mx-auto mb-1" />
                      <span className="text-white text-sm">{output}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Sources Detail */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-400" /> Data Sources
                </h4>
                <ul className="space-y-3">
                  {[
                    { source: 'Nuqta', type: 'User behavior, preferences, social' },
                    { source: 'Wasil', type: 'Purchase patterns, frequency' },
                    { source: 'BizOne', type: 'Merchant sales, inventory levels' },
                    { source: 'Inventora', type: 'Supply chain, stock velocity' },
                    { source: 'NextaBizz', type: 'B2B trade patterns' },
                    { source: 'Airzy', type: 'Travel behavior, spending' },
                    { source: 'Eventora+', type: 'Event preferences, attendance' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CircleDot className="w-4 h-4 text-blue-400 mt-0.5" />
                      <div>
                        <span className="text-white font-medium">{item.source}:</span>
                        <span className="text-slate-400 text-sm ml-2">{item.type}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-400" /> AI Outputs
                </h4>
                <ul className="space-y-3">
                  {[
                    { output: 'User Recommendations', impact: 'Personalized discovery feeds' },
                    { output: 'Credit Scoring', impact: 'Risk-based lending decisions' },
                    { output: 'Demand Forecasting', impact: 'Inventory auto-replenishment' },
                    { output: 'Smart Ad Targeting', impact: 'ROI-optimized campaigns' },
                    { output: 'Fraud Detection', impact: '<0.1% fraud rate' },
                    { output: 'Churn Prediction', impact: 'Proactive retention' },
                    { output: 'Price Optimization', impact: 'Dynamic merchant pricing' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Zap className="w-4 h-4 text-purple-400 mt-0.5" />
                      <div>
                        <span className="text-white font-medium">{item.output}:</span>
                        <span className="text-slate-400 text-sm ml-2">{item.impact}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* LEVEL 4: Coin Flow */}
        {activeSection === 'coins' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">💎 Coin Flow (Retention Engine)</h2>
              <p className="text-slate-400">How coins create stickiness and repeat behavior</p>
            </div>

            {/* Coin Flow Diagram */}
            <div className="bg-[#c9a227]/10 rounded-2xl p-6 border border-[#c9a227]/30">
              <div className="space-y-4">
                {coinFlow.map((flow, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-900/50 rounded-xl p-4">
                    <div className="w-10 h-10 rounded-full bg-[#c9a227]/20 flex items-center justify-center">
                      <Coins className="w-5 h-5 text-[#c9a227]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold">{flow.action}</div>
                      <div className="text-[#c9a227] text-sm">{flow.apps}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#c9a227]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Coin Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { metric: 'Coin Breakage', value: '20-35%', description: 'Unredeemed = pure profit' },
                { metric: 'Retention Boost', value: '+60%', description: '30-day retention rate' },
                { metric: 'Repeat Rate', value: '2.5x', description: 'Coin users vs non-coin' },
                { metric: 'LTV Increase', value: '+150%', description: 'Customer lifetime value' },
              ].map((item, i) => (
                <div key={i} className="bg-[#c9a227]/10 rounded-xl p-4 text-center border border-[#c9a227]/30">
                  <div className="text-2xl font-bold text-[#c9a227]">{item.value}</div>
                  <div className="text-white font-medium text-sm">{item.metric}</div>
                  <div className="text-slate-400 text-xs mt-1">{item.description}</div>
                </div>
              ))}
            </div>

            {/* Coin Types */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h4 className="text-white font-bold mb-4">Coin Types in Ecosystem</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { type: 'Nuqta Coins', description: 'Universal currency across all apps', color: 'bg-[#c9a227]' },
                  { type: 'Branded Coins', description: 'Merchant-specific loyalty (e.g., Café Points)', color: 'bg-blue-500' },
                  { type: 'Promo Coins', description: 'Campaign-specific, time-limited', color: 'bg-pink-500' },
                ].map((coin, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4">
                    <div className={`w-10 h-10 ${coin.color} rounded-full flex items-center justify-center mb-3`}>
                      <Coins className="w-5 h-5 text-white" />
                    </div>
                    <h5 className="text-white font-bold">{coin.type}</h5>
                    <p className="text-slate-400 text-sm mt-1">{coin.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* LEVEL 5: Architecture */}
        {activeSection === 'architecture' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">🏗️ Product Architecture</h2>
              <p className="text-slate-400">How all 115 apps and 10 companies connect</p>
            </div>

            {/* Global Architecture */}
            <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-6 text-center">Global Architecture Overview</h3>

              {/* HQ */}
              <div className="max-w-md mx-auto mb-6">
                <div className="bg-[#c9a227] rounded-xl p-4 text-center">
                  <Building2 className="w-8 h-8 text-[#0a1628] mx-auto mb-2" />
                  <div className="text-[#0a1628] font-black">RTMN DIGITAL HOLDING CO.</div>
                  <div className="text-[#0a1628]/70 text-sm">Rules, Permissions, Kill-Switches</div>
                </div>
              </div>

              {/* Connection Lines */}
              <div className="flex justify-center mb-6">
                <div className="w-px h-8 bg-slate-600" />
              </div>

              {/* Main Companies Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                {[
                  { name: 'Nuqta', color: 'bg-[#c9a227]', role: 'User' },
                  { name: 'Wasil', color: 'bg-orange-500', role: 'Commerce' },
                  { name: 'BizOne', color: 'bg-blue-500', role: 'Merchant' },
                  { name: 'Inventora', color: 'bg-teal-500', role: 'Supply' },
                  { name: 'NextaBizz', color: 'bg-emerald-500', role: 'B2B' },
                  { name: 'Adzy', color: 'bg-pink-500', role: 'Ads' },
                ].map((company, i) => (
                  <div key={i} className={`${company.color} rounded-lg p-3 text-center`}>
                    <div className="text-white font-bold text-sm">{company.name}</div>
                    <div className="text-white/70 text-xs">{company.role}</div>
                  </div>
                ))}
              </div>

              {/* Arrow down */}
              <div className="flex justify-center mb-6">
                <div className="w-px h-8 bg-slate-600" />
              </div>

              {/* RTMN Finance & Rabtul */}
              <div className="flex justify-center gap-4 mb-6">
                <div className="bg-green-500 rounded-lg p-4 text-center">
                  <div className="text-white font-bold">RTMN Finance</div>
                  <div className="text-white/70 text-xs">Payments & Credit</div>
                </div>
                <div className="flex items-center">
                  <ArrowRightLeft className="w-6 h-6 text-slate-500" />
                </div>
                <div className="bg-purple-500 rounded-lg p-4 text-center">
                  <div className="text-white font-bold">Rabtul Tech</div>
                  <div className="text-white/70 text-xs">Cloud + AI</div>
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center mb-6">
                <div className="w-px h-8 bg-slate-600" />
              </div>

              {/* Bottom row */}
              <div className="flex justify-center gap-4">
                <div className="bg-violet-500 rounded-lg p-4 text-center">
                  <div className="text-white font-bold">Eventora+</div>
                  <div className="text-white/70 text-xs">Events</div>
                </div>
                <div className="bg-cyan-500 rounded-lg p-4 text-center">
                  <div className="text-white font-bold">Airzy</div>
                  <div className="text-white/70 text-xs">Travel</div>
                </div>
              </div>

              {/* Loop back */}
              <div className="flex justify-center mt-6">
                <div className="flex items-center gap-2 text-[#c9a227]">
                  <RefreshCw className="w-5 h-5" />
                  <span className="font-bold text-sm">Back into Nuqta</span>
                </div>
              </div>
            </div>

            {/* Locked Rules */}
            <div className="bg-red-500/10 rounded-xl p-6 border-2 border-red-500">
              <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5" /> LOCKED ARCHITECTURE RULES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { rule: 'No app owns wallet', reason: 'Only Rabtul manages wallet ledger' },
                  { rule: 'No app owns merchants', reason: 'Only BizOne stores merchant data' },
                  { rule: 'No company bypasses Rabtul', reason: 'All transactions flow through Rabtul' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-red-500/30">
                    <Shield className="w-6 h-6 text-red-400 mb-2" />
                    <div className="text-white font-bold text-sm">{item.rule}</div>
                    <div className="text-slate-400 text-xs mt-1">{item.reason}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-[#c9a227]/10 rounded-xl p-6 border border-[#c9a227]/30">
              <h4 className="text-[#c9a227] font-bold mb-4">Architecture Comparison</h4>
              <p className="text-slate-300 mb-4">This architecture is:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  'Better than Paytm + Swiggy + Meituan combined',
                  'Stronger than Reliance Digital ecosystem',
                  'Smarter than Tata Neu super-app',
                  'More unified than Adani Airports + Flipkart',
                  'More defensible than any Indian startup',
                  'Like Alphabet (Google parent) for commerce',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-900/50 rounded-lg p-3">
                    <CheckCircle className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Navigation */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Building2 className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-xl font-bold hover:bg-purple-400 transition-colors">
              <Network className="w-5 h-5" /> App Ecosystem
            </Link>
            <Link href="/rabtul" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500 transition-colors">
              <Server className="w-5 h-5" /> Rabtul Core
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
