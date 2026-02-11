'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Wallet, CreditCard, Receipt, PiggyBank, LineChart, Shield,
  FileText, TrendingUp, Calculator, Coins, ArrowLeftRight, Percent,
  CheckCircle, Clock, Target, Globe, ArrowRight, Users, Store,
  Zap, ChevronDown, ChevronUp, Crown, Gift, Star, Smartphone,
  Lock, Building2, BadgePercent, QrCode, Send, Banknote
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Finance Apps
const financeApps = [
  {
    id: 'qist',
    name: 'Qist',
    arabic: 'قسط',
    tagline: 'Buy Now, Pay Later',
    description: 'Split any purchase into 3-12 monthly payments with 0% fees for Nuqta+ members.',
    icon: Wallet,
    status: 'built',
    href: '/qist',
    color: 'from-violet-500 to-purple-600',
    textColor: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    features: ['0% fees for Nuqta+ members', 'Up to 50K AED limit', 'Instant approval', 'Works at 500+ merchants'],
    stats: { limit: '50K AED', terms: '3-12 months', merchants: '500+' },
  },
  {
    id: 'hawil',
    name: 'Hawil',
    arabic: 'حوّل',
    tagline: 'Remittance at Google Rate',
    description: 'Send money home with 0% FX markup - only 0.5% flat fee. 8+ corridors.',
    icon: ArrowLeftRight,
    status: 'built',
    href: '/hawil',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    features: ['0% FX markup', '0.5% flat fee', 'Instant transfers', 'Hawil Card for tourists'],
    stats: { rate: 'Google Rate', fee: '0.5%', corridors: '8+' },
  },
  {
    id: 'rezpay',
    name: 'ReZPay',
    arabic: 'ريز باي',
    tagline: 'Digital Wallet & QR Payments',
    description: 'Pay anywhere with QR codes, send money to friends, manage all payments in one place.',
    icon: QrCode,
    status: 'planned',
    timeline: 'Q2 2027',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    features: ['QR code payments', 'P2P transfers', 'Bill payments', 'Multi-currency wallet'],
    stats: { limit: 'Unlimited', fee: '0%', coverage: 'GCC-wide' },
  },
  {
    id: 'splitzy',
    name: 'Splitzy',
    arabic: 'سبليت زي',
    tagline: 'Bill Splitting Made Easy',
    description: 'Split bills with friends, roommates, or groups. Track who owes what, settle in one tap.',
    icon: Receipt,
    status: 'planned',
    timeline: 'Q3 2027',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    features: ['Group expenses', 'Recurring splits', 'Payment reminders', 'Nuqta wallet integration'],
    stats: { groups: 'Unlimited', split: 'Any ratio', settle: 'Instant' },
  },
  {
    id: 'savezy',
    name: 'Savezy+',
    arabic: 'سيف زي+',
    tagline: 'Smart Savings Goals',
    description: 'Set savings goals, auto-save with round-ups, lock funds in vaults for better discipline.',
    icon: PiggyBank,
    status: 'planned',
    timeline: 'Q4 2027',
    color: 'from-amber-500 to-yellow-600',
    textColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    features: ['Savings goals', 'Auto round-ups', 'Locked vaults', 'Progress tracking'],
    stats: { goals: 'Unlimited', roundUp: 'Auto', interest: 'Shariah-compliant' },
  },
  {
    id: 'investzy',
    name: 'Investzy',
    arabic: 'إنفست زي',
    tagline: 'Micro-Investing for Everyone',
    description: 'Start investing with as little as 10 AED. Gold, stocks, sukuk - all Shariah-compliant.',
    icon: LineChart,
    status: 'planned',
    timeline: 'Q1 2028',
    color: 'from-cyan-500 to-teal-600',
    textColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    features: ['From 10 AED', 'Shariah-compliant', 'Gold investment', 'Fractional shares'],
    stats: { minimum: '10 AED', assets: 'Stocks, Gold, Sukuk', compliance: 'Shariah' },
  },
  {
    id: 'insurzy',
    name: 'Insurzy',
    arabic: 'إنشور زي',
    tagline: 'Insurance Marketplace',
    description: 'Compare and buy insurance instantly - health, car, travel, home. Best rates, instant quotes.',
    icon: Shield,
    status: 'planned',
    timeline: 'Q2 2028',
    color: 'from-indigo-500 to-blue-600',
    textColor: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    features: ['Compare quotes', 'Instant purchase', 'Claims tracking', 'Policy management'],
    stats: { types: 'Health, Car, Travel, Home', partners: '10+', claims: 'Digital' },
  },
  {
    id: 'creditboost',
    name: 'CreditBoost',
    arabic: 'كريديت بوست',
    tagline: 'Build Your Credit Score',
    description: 'Track your credit score, get improvement tips, and build credit through Qist payments.',
    icon: TrendingUp,
    status: 'planned',
    timeline: 'Q3 2027',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
    features: ['Score tracking', 'Improvement tips', 'Build credit via Qist', 'Score simulator'],
    stats: { updates: 'Monthly', tips: 'Personalized', impact: '+50-150 points' },
  },
  {
    id: 'budgetpro',
    name: 'BudgetPro',
    arabic: 'بدجت برو',
    tagline: 'Smart Budgeting',
    description: 'Track expenses automatically, set budgets by category, get insights on spending patterns.',
    icon: Calculator,
    status: 'planned',
    timeline: 'Q3 2027',
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    features: ['Auto-categorization', 'Budget alerts', 'Spending insights', 'Bill reminders'],
    stats: { categories: '20+', alerts: 'Real-time', insights: 'AI-powered' },
  },
  {
    id: 'wealthzy',
    name: 'Wealthzy',
    arabic: 'ويلث زي',
    tagline: 'Wealth Management',
    description: 'Portfolio tracking, advisor access, and comprehensive wealth management for HNWIs.',
    icon: LineChart,
    status: 'planned',
    timeline: 'Q2 2028',
    color: 'from-[#c9a227] to-amber-600',
    textColor: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    features: ['Portfolio tracking', 'Advisor access', 'Tax planning', 'Estate planning'],
    stats: { minimum: '100K AED', advisors: 'Licensed', assets: 'Multi-class' },
  },
  {
    id: 'taxzy',
    name: 'Taxzy',
    arabic: 'تاكس زي',
    tagline: 'Tax Filing Made Simple',
    description: 'VAT filing, corporate taxes, and personal tax management for GCC businesses.',
    icon: FileText,
    status: 'planned',
    timeline: 'Q1 2029',
    color: 'from-slate-500 to-gray-600',
    textColor: 'text-slate-400',
    bgColor: 'bg-slate-500/10',
    features: ['VAT filing', 'Corporate tax', 'Auto-calculations', 'Compliance alerts'],
    stats: { filings: 'Auto', compliance: '100%', support: 'Expert' },
  },
  {
    id: 'cryptolite',
    name: 'CryptoLite',
    arabic: 'كريبتو لايت',
    tagline: 'Crypto Exposure',
    description: 'Learn about crypto and get small exposure without the complexity of wallets and exchanges.',
    icon: Coins,
    status: 'planned',
    timeline: 'Q4 2028',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    features: ['Education first', 'Small investments', 'No wallets needed', 'Risk warnings'],
    stats: { minimum: '50 AED', education: 'Required', custody: 'Insured' },
  },
];

// Stats
const financeStats = [
  { label: 'Built', value: '2', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
  { label: 'Planned', value: '10', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  { label: 'Total', value: '12', color: 'text-[#c9a227]', bg: 'bg-[#c9a227]/10', border: 'border-[#c9a227]/30' },
  { label: 'GCC Markets', value: '6', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
];

// Shariah Compliance
const shariahCompliance = [
  { aspect: 'No Riba (Interest)', description: 'All products are interest-free or use Shariah-compliant structures' },
  { aspect: 'Halal Investments', description: 'Screened stocks, sukuk, and ethical investment options only' },
  { aspect: 'Transparent Fees', description: 'Clear, upfront fees with no hidden charges' },
  { aspect: 'Shariah Board', description: 'Oversight by certified Islamic finance scholars' },
];

export default function FinanceAppsPage() {
  const [filter, setFilter] = useState<'all' | 'built' | 'planned'>('all');

  const filteredApps = financeApps.filter(app =>
    filter === 'all' ? true : app.status === filter
  );

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-emerald-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full mb-6">
            <Wallet className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-bold">Islamic Fintech Stack</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            <span className="text-emerald-400">12 Finance Apps</span> for GCC
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            Complete Shariah-compliant fintech ecosystem - from BNPL and remittance to
            savings, investments, insurance, and wealth management. All designed for
            the unique needs of GCC residents and businesses.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {financeStats.map((stat, i) => (
              <div key={i} className={`${stat.bg} rounded-xl p-4 text-center border ${stat.border}`}>
                <div className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shariah Compliance Banner */}
      <section className="bg-gradient-to-r from-[#c9a227]/10 to-emerald-500/10 border-b border-[#c9a227]/30 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl font-bold text-white text-center mb-4 flex items-center justify-center gap-2">
            <Crown className="w-5 h-5 text-[#c9a227]" />
            100% Shariah Compliant
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {shariahCompliance.map((item, i) => (
              <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-[#c9a227]/30">
                <CheckCircle className="w-5 h-5 text-[#c9a227] mb-2" />
                <h4 className="text-white font-bold text-sm mb-1">{item.aspect}</h4>
                <p className="text-slate-400 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex gap-2">
            {[
              { id: 'all', label: 'All Apps', count: financeApps.length },
              { id: 'built', label: 'Built', count: financeApps.filter(a => a.status === 'built').length },
              { id: 'planned', label: 'Planned', count: financeApps.filter(a => a.status === 'planned').length },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as 'all' | 'built' | 'planned')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === f.id
                    ? f.id === 'built' ? 'bg-emerald-500 text-white' :
                      f.id === 'planned' ? 'bg-blue-500 text-white' :
                      'bg-[#c9a227] text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {f.label}
                <span className="bg-white/20 px-1.5 py-0.5 rounded text-xs">{f.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className={`${app.bgColor} border-2 rounded-xl p-4 sm:p-5 hover:scale-[1.02] transition-transform`}
              style={{ borderColor: app.status === 'built' ? '#10b981' : app.textColor.includes('violet') ? '#8b5cf6' : app.textColor.includes('blue') ? '#3b82f6' : app.textColor.includes('emerald') ? '#10b981' : app.textColor.includes('pink') ? '#ec4899' : app.textColor.includes('amber') ? '#f59e0b' : app.textColor.includes('cyan') ? '#06b6d4' : app.textColor.includes('indigo') ? '#6366f1' : app.textColor.includes('green') ? '#22c55e' : app.textColor.includes('orange') ? '#f97316' : app.textColor.includes('c9a227') ? '#c9a227' : app.textColor.includes('slate') ? '#64748b' : '#a855f7' }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center flex-shrink-0`}>
                  <app.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className={`font-bold ${app.textColor}`}>{app.name}</h3>
                    <span className="text-slate-500 text-xs">{app.arabic}</span>
                  </div>
                  <p className="text-slate-400 text-xs">{app.tagline}</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm mb-3">{app.description}</p>

              <div className="flex flex-wrap gap-1 mb-3">
                {app.features.map((feature, i) => (
                  <span key={i} className={`text-xs px-2 py-0.5 rounded ${app.bgColor} ${app.textColor} border ${app.status === 'built' ? 'border-emerald-500/30' : 'border-slate-700/50'}`}>
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-700/50">
                {app.status === 'built' ? (
                  <>
                    <span className="inline-flex items-center gap-1 text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">
                      <CheckCircle size={12} /> Live
                    </span>
                    {app.href && (
                      <Link href={app.href} className={`text-sm font-medium ${app.textColor} hover:underline`}>
                        View Details →
                      </Link>
                    )}
                  </>
                ) : (
                  <>
                    <span className="inline-flex items-center gap-1 text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                      <Clock size={12} /> {app.timeline}
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Navigation */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/qist" className="inline-flex items-center gap-2 px-6 py-3 bg-violet-500 text-white rounded-xl font-bold hover:bg-violet-400 transition-colors">
              <Wallet className="w-5 h-5" /> Qist BNPL
            </Link>
            <Link href="/hawil" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-400 transition-colors">
              <ArrowLeftRight className="w-5 h-5" /> Hawil Remittance
            </Link>
            <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-700 transition-colors">
              <Coins className="w-5 h-5" /> Full Ecosystem
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
