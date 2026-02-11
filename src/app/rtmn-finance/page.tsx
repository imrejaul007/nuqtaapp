'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CreditCard, Wallet, Banknote, Shield, TrendingUp, PiggyBank,
  Building2, ArrowLeftRight, Receipt, Calculator, Lock, Users,
  ArrowRight, CheckCircle, XCircle, ChevronDown, ChevronUp,
  Database, Activity, DollarSign, Percent, FileCheck, Clock,
  Store, Crown, Globe
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Finance Products
const financeProducts = [
  {
    id: 'nuqtapay',
    name: 'NuqtaPay',
    icon: Wallet,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500',
    description: 'Unified payment gateway for all RTMN ecosystem transactions',
    features: [
      'Multi-payment support',
      'Apple Pay / Google Pay',
      'Card tokenization',
      'Recurring payments',
      'Split payments',
      'Refund management',
    ],
    metrics: ['$100M+ processed', '99.99% uptime', '<2s checkout'],
    status: 'built',
  },
  {
    id: 'qist',
    name: 'Qist BNPL',
    icon: Receipt,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500',
    description: 'Buy Now Pay Later for consumers across all Nuqta apps',
    features: [
      '0% interest options',
      '3-12 month EMI',
      'Instant approval',
      'Credit scoring',
      'Auto-debit',
      'Early payoff',
    ],
    metrics: ['10K+ users', '$5M+ credit', '95% approval'],
    status: 'built',
  },
  {
    id: 'hawil',
    name: 'Hawil Remittance',
    icon: ArrowLeftRight,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
    description: 'Cross-border remittance for GCC workers',
    features: [
      'Low-cost transfers',
      'Real-time rates',
      '50+ countries',
      'Cash pickup',
      'Bank deposits',
      'Mobile wallet',
    ],
    metrics: ['$50M+ sent', '180+ corridors', '<24hr delivery'],
    status: 'built',
  },
  {
    id: 'bizcredit',
    name: 'BizCredit',
    icon: Building2,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500',
    description: 'Working capital loans for BizOne merchants',
    features: [
      'Data-driven underwriting',
      'Flexible repayment',
      'Revenue-based lending',
      'Quick disbursement',
      'No collateral needed',
      'Credit building',
    ],
    metrics: ['500+ merchants', '$10M+ disbursed', '5% default rate'],
    status: 'planned',
  },
  {
    id: 'loanzy',
    name: 'Loanzy',
    icon: Banknote,
    color: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500',
    description: 'Personal loans for Nuqta super users',
    features: [
      'Behavior-based scoring',
      'Nuqta coins collateral',
      'Instant approval',
      'Competitive rates',
      'Flexible terms',
      'Loyalty rewards',
    ],
    metrics: ['Coming soon', 'AI underwriting', 'Coins as collateral'],
    status: 'planned',
  },
  {
    id: 'remitz',
    name: 'Remitz',
    icon: Globe,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500',
    description: 'International money transfer for businesses',
    features: [
      'B2B transfers',
      'Trade finance',
      'FX hedging',
      'Bulk payments',
      'Invoice financing',
      'Supplier payments',
    ],
    metrics: ['Enterprise tier', 'Multi-currency', 'API integration'],
    status: 'planned',
  },
];

// Insurance Products
const insuranceProducts = [
  { name: 'Travel Insurance', description: 'For Airzy bookings', status: 'planned' },
  { name: 'Device Protection', description: 'For electronics purchases', status: 'planned' },
  { name: 'Delivery Insurance', description: 'For high-value orders', status: 'planned' },
  { name: 'Merchant Insurance', description: 'For BizOne businesses', status: 'planned' },
];

// Ownership details
const ownership = {
  rtmnShare: '51%',
  partnersShare: '49%',
  investment: '⭐⭐⭐⭐⭐',
  revenue: '⭐⭐⭐⭐⭐',
  risk: '⭐⭐⭐⭐',
  purpose: 'Payments, BNPL, settlements, credit, insurance',
};

// Controls & Does Not Do
const controls = [
  'Merchant credit',
  'BNPL products',
  'Settlements (money movement)',
  'Insurance products',
  'Payment processing',
  'Remittance services',
];

const doesNotDo = [
  { item: 'User identity', reason: 'Rabtul manages SSO' },
  { item: 'Wallet logic', reason: 'Rabtul owns wallet ledger' },
  { item: 'User discovery', reason: 'Nuqta Corp drives users' },
  { item: 'Merchant data', reason: 'BizOne is source of truth' },
];

// Compliance & Licensing
const compliance = [
  { item: 'UAE CBUAE License', status: 'in_progress' },
  { item: 'SAMA Registration (KSA)', status: 'planned' },
  { item: 'QCB Registration (Qatar)', status: 'planned' },
  { item: 'PCI-DSS Compliance', status: 'active' },
  { item: 'AML/KYC Framework', status: 'active' },
  { item: 'Data Protection', status: 'active' },
];

// Data Flow
const dataFlow = {
  consumes: ['Risk data ← Rabtul', 'Sales data ← BizOne', 'User behavior ← Nuqta', 'Rules ← HQ'],
  produces: ['Settlements', 'Credit decisions', 'Payment confirmations', 'Risk scores'],
};

export default function RTMNFinancePage() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>('nuqtapay');

  const builtProducts = financeProducts.filter(p => p.status === 'built').length;

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-green-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-xl shadow-green-500/30">
              <CreditCard className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl font-black text-white">
                  RTMN <span className="text-green-400">Finance</span>
                </h1>
                <span className="bg-green-500/20 text-green-400 text-xs sm:text-sm px-3 py-1 rounded-full font-bold border border-green-500/50">
                  FINTECH
                </span>
              </div>
              <p className="text-green-400 text-lg">مالية • Payments, Credit & Insurance</p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            The financial backbone of RTMN ecosystem. Payments, BNPL, remittance, merchant credit,
            and insurance products. 51% RTMN / 49% NBFC/Bank Partner for regulatory compliance.
          </p>

          {/* Ownership Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            <div className="bg-green-500/10 rounded-xl p-4 text-center border border-green-500/30">
              <div className="text-2xl font-bold text-green-400">{ownership.rtmnShare}</div>
              <div className="text-xs text-slate-400">RTMN Share</div>
            </div>
            <div className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/30">
              <div className="text-2xl font-bold text-blue-400">{financeProducts.length}</div>
              <div className="text-xs text-slate-400">Products</div>
            </div>
            <div className="bg-purple-500/10 rounded-xl p-4 text-center border border-purple-500/30">
              <div className="text-2xl font-bold text-purple-400">{builtProducts}</div>
              <div className="text-xs text-slate-400">Built</div>
            </div>
            <div className="bg-orange-500/10 rounded-xl p-4 text-center border border-orange-500/30">
              <div className="text-2xl font-bold text-orange-400">{insuranceProducts.length}</div>
              <div className="text-xs text-slate-400">Insurance</div>
            </div>
            <div className="bg-[#c9a227]/10 rounded-xl p-4 text-center border border-[#c9a227]/30">
              <div className="text-2xl font-bold text-[#c9a227]">{ownership.revenue}</div>
              <div className="text-xs text-slate-400">Revenue Potential</div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls & Compliance */}
      <section className="bg-slate-800/30 border-b border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Controls */}
            <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30">
              <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Controls
              </h3>
              <ul className="space-y-2">
                {controls.map((item, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance */}
            <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30">
              <h3 className="text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" /> Licensing & Compliance
              </h3>
              <ul className="space-y-2">
                {compliance.map((item, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <span className="text-slate-300 text-sm">{item.item}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      item.status === 'active'
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : item.status === 'in_progress'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-slate-700/50 text-slate-400'
                    }`}>
                      {item.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Does NOT Do */}
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Does NOT Own
              </h3>
              <ul className="space-y-2">
                {doesNotDo.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium text-sm">{item.item}</span>
                      <span className="text-slate-500 text-xs block">{item.reason}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Products */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h2 className="text-xl font-bold text-white mb-6">{financeProducts.length} Finance Products</h2>

        <div className="space-y-4 sm:space-y-6">
          {financeProducts.map((product) => (
            <div
              key={product.id}
              className={`${product.bgColor} border-2 ${product.borderColor} rounded-xl overflow-hidden`}
            >
              <button
                onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${product.bgColor} flex items-center justify-center border ${product.borderColor}`}>
                    <product.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${product.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`text-base sm:text-xl font-bold ${product.color}`}>
                        {product.name}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        product.status === 'built'
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-slate-700/50 text-slate-400'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-1">{product.description}</p>
                  </div>
                </div>
                {expandedProduct === product.id ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {expandedProduct === product.id && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <h4 className="text-white font-bold mb-3">Features</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                            <CheckCircle className={`w-4 h-4 ${product.color} flex-shrink-0`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <h4 className="text-white font-bold mb-3">Metrics</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.metrics.map((metric, i) => (
                          <span key={i} className={`text-sm px-3 py-1 rounded-lg ${product.bgColor} ${product.color} border border-current`}>
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Insurance Products */}
        <div className="mt-8 bg-green-500/10 rounded-xl p-6 border border-green-500/30">
          <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" /> Insurance Products (Planned)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {insuranceProducts.map((product, i) => (
              <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-green-500/30">
                <h4 className="text-white font-bold text-sm">{product.name}</h4>
                <p className="text-slate-400 text-xs mt-1">{product.description}</p>
                <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded bg-slate-700/50 text-slate-400">
                  {product.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Data Flow */}
        <div className="mt-8 bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-green-400" /> Data Flow
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
              <h4 className="text-blue-400 font-bold mb-3">Consumes From</h4>
              <ul className="space-y-1">
                {dataFlow.consumes.map((item, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-blue-400 rotate-180" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/30">
              <h4 className="text-emerald-400 font-bold mb-3">Produces</h4>
              <ul className="space-y-1">
                {dataFlow.produces.map((item, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Navigation */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Database className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/bizone" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-400 transition-colors">
              <Store className="w-5 h-5" /> BizOne
            </Link>
            <Link href="/rabtul" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-xl font-bold hover:bg-purple-400 transition-colors">
              <Database className="w-5 h-5" /> Rabtul
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
