'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Crown, Building2, Layers, Network, Globe, Target, Users, Shield,
  Wallet, Store, Truck, Plane, Brain, Megaphone, Package, Server,
  Calendar, TrendingUp, BarChart3, DollarSign, ArrowRight, ChevronDown,
  ChevronUp, Sparkles, Coins, CreditCard, Home, ArrowLeftRight, Gamepad2,
  Factory, ShoppingCart, Cpu, Ticket, MapPin, Car, Briefcase, Lock,
  FileText, Settings, Rocket, Eye, Zap, RefreshCw, CheckCircle, Clock,
  Database, Cloud, Code, MessageSquare, Mail, Bell, Activity
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// RTMN Group Structure - 10 Sister Companies
const sisterCompanies = [
  {
    id: 'nuqta-corp',
    name: 'Nuqta Corporation',
    arabic: 'نقطة كوربوريشن',
    tagline: 'Rewards & Loyalty Platform',
    description: 'Consumer-facing rewards, membership, and BNPL platform',
    color: 'from-[#c9a227] to-amber-600',
    textColor: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]',
    icon: Crown,
    href: '/nuqta-corp',
    dashboardHref: '/dashboard',
    phase: 1,
    apps: [
      { name: 'Nuqta+', href: '/nuqta-plus', icon: Crown, description: 'Membership & rewards' },
      { name: 'Qist', href: '/qist', icon: Wallet, description: 'Buy Now Pay Later' },
      { name: 'Gamification', href: '/gamification', icon: Gamepad2, description: 'Engagement engine' },
    ],
    revenue: 'AED 89-175M/yr',
    status: 'Active',
  },
  {
    id: 'wasil-apps',
    name: 'Wasil Apps',
    arabic: 'تطبيقات واصل',
    tagline: 'Delivery & Lifestyle Services',
    description: 'Quick commerce, rentals, and lifestyle delivery platform',
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500',
    icon: Truck,
    href: '/wasil-apps',
    dashboardHref: '/wasil-apps',
    phase: 1,
    apps: [
      { name: 'Wasil', href: '/wasil', icon: Truck, description: 'Quick commerce delivery' },
      { name: 'Sakin', href: '/sakin', icon: Home, description: 'Rent financing' },
      { name: 'Ajer', href: '/ajer', icon: Package, description: 'Rental marketplace' },
      { name: 'Wasil Fresh', href: '/wasil-apps', icon: ShoppingCart, description: 'Grocery delivery' },
      { name: 'Wasil Pharmacy', href: '/wasil-apps', icon: Package, description: 'Medicine delivery' },
      { name: 'Wasil Food', href: '/wasil-apps', icon: Package, description: 'Restaurant delivery' },
      { name: 'Wasil Mall', href: '/wasil-apps', icon: Store, description: 'Retail delivery' },
      { name: 'Wasil Express', href: '/wasil-apps', icon: Truck, description: 'Same-day courier' },
    ],
    revenue: 'AED 150-300M/yr',
    status: 'Active',
  },
  {
    id: 'rtmn-finance',
    name: 'RTMN Finance',
    arabic: 'آر تي إم إن فاينانس',
    tagline: 'Islamic Fintech Platform',
    description: 'Shariah-compliant payments, remittance, and credit solutions',
    color: 'from-blue-500 to-cyan-500',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
    icon: Wallet,
    href: '/rtmn-finance',
    dashboardHref: '/rtmn-finance',
    phase: 1,
    apps: [
      { name: 'Hawil', href: '/hawil', icon: ArrowLeftRight, description: 'Remittance at Google rate' },
      { name: 'NuqtaPay', href: '/rtmn-finance', icon: CreditCard, description: 'Payment processing' },
      { name: 'Hawil Card', href: '/rtmn-finance', icon: CreditCard, description: 'Prepaid tourist card' },
      { name: 'Merchant Credit', href: '/rtmn-finance', icon: Store, description: 'Working capital' },
      { name: 'Consumer Credit', href: '/rtmn-finance', icon: Users, description: 'Personal financing' },
      { name: 'Qist Engine', href: '/rtmn-finance', icon: Wallet, description: 'BNPL infrastructure' },
      { name: 'FX Platform', href: '/rtmn-finance', icon: Globe, description: 'Currency exchange' },
      { name: 'Compliance Suite', href: '/rtmn-finance', icon: Shield, description: 'AML/KYC system' },
      { name: 'Treasury', href: '/rtmn-finance', icon: Building2, description: 'Fund management' },
    ],
    revenue: 'AED 200-400M/yr',
    status: 'Active',
  },
  {
    id: 'travel-co',
    name: 'Travel Co',
    arabic: 'ترافل كو',
    tagline: 'Travel & Mobility Platform',
    description: 'End-to-end travel, mobility, and luxury experiences',
    color: 'from-cyan-500 to-teal-600',
    textColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500',
    icon: Plane,
    href: '/travel-co',
    dashboardHref: '/travel-co',
    phase: 2,
    apps: [
      { name: 'Safar', href: '/safar', icon: Plane, description: 'Travel booking' },
      { name: 'Rakab', href: '/rakab', icon: Car, description: 'Ride-hailing' },
      { name: 'Fakhir', href: '/fakhir', icon: Crown, description: 'Luxury concierge' },
      { name: 'Airzy', href: '/travel-co', icon: Plane, description: 'Airport services' },
      { name: 'Safar Visa', href: '/travel-co', icon: FileText, description: 'Visa processing' },
      { name: 'Safar Hotels', href: '/travel-co', icon: Building2, description: 'Hotel booking' },
      { name: 'Safar Experiences', href: '/travel-co', icon: Ticket, description: 'Activity booking' },
      { name: 'Rakab Business', href: '/travel-co', icon: Briefcase, description: 'Corporate mobility' },
      { name: 'Fakhir Jets', href: '/travel-co', icon: Plane, description: 'Private aviation' },
      { name: 'Fakhir Yachts', href: '/travel-co', icon: MapPin, description: 'Yacht charters' },
      { name: 'Fakhir Events', href: '/travel-co', icon: Ticket, description: 'VIP experiences' },
    ],
    revenue: 'AED 180-350M/yr',
    status: 'Phase 2',
  },
  {
    id: 'bizone',
    name: 'BizOne',
    arabic: 'بيز ون',
    tagline: 'Merchant SaaS Platform',
    description: 'All-in-one business management for SMEs',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500',
    icon: Store,
    href: '/bizone',
    dashboardHref: '/bizone',
    phase: 2,
    apps: [
      { name: 'BizOne POS', href: '/bizone', icon: CreditCard, description: 'Point of sale' },
      { name: 'BizOne CRM', href: '/bizone', icon: Users, description: 'Customer management' },
      { name: 'BizOne Inventory', href: '/bizone', icon: Package, description: 'Stock management' },
      { name: 'BizOne Analytics', href: '/bizone', icon: BarChart3, description: 'Business insights' },
      { name: 'BizOne Staff', href: '/bizone', icon: Users, description: 'HR & payroll' },
      { name: 'BizOne Menu', href: '/bizone', icon: FileText, description: 'Digital menus' },
    ],
    revenue: 'AED 50-100M/yr',
    status: 'Phase 2',
  },
  {
    id: 'inventora',
    name: 'Inventora',
    arabic: 'إنفنتورا',
    tagline: 'Supply Chain & Inventory',
    description: 'B2B supply chain and inventory financing platform',
    color: 'from-violet-500 to-purple-600',
    textColor: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500',
    icon: Package,
    href: '/inventora',
    dashboardHref: '/inventora',
    phase: 2,
    apps: [
      { name: 'Inventora Warehouse', href: '/inventora', icon: Factory, description: 'Warehouse management' },
      { name: 'Inventora Finance', href: '/inventora', icon: DollarSign, description: 'Inventory financing' },
      { name: 'Inventora Logistics', href: '/inventora', icon: Truck, description: 'B2B delivery' },
      { name: 'Inventora Forecast', href: '/inventora', icon: TrendingUp, description: 'Demand prediction' },
    ],
    revenue: 'AED 80-160M/yr',
    status: 'Phase 2',
  },
  {
    id: 'nextabizz',
    name: 'NextaBizz',
    arabic: 'نكستا بيز',
    tagline: 'B2B Marketplace',
    description: 'Wholesale and B2B commerce platform',
    color: 'from-indigo-500 to-blue-600',
    textColor: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500',
    icon: Building2,
    href: '/nextabizz',
    dashboardHref: '/nextabizz',
    phase: 3,
    apps: [
      { name: 'NextaBizz Market', href: '/nextabizz', icon: Store, description: 'B2B marketplace' },
      { name: 'NextaBizz Bulk', href: '/nextabizz', icon: Package, description: 'Bulk ordering' },
      { name: 'NextaBizz Credit', href: '/nextabizz', icon: Wallet, description: 'Trade financing' },
      { name: 'NextaBizz Import', href: '/nextabizz', icon: Globe, description: 'Import facilitation' },
    ],
    revenue: 'AED 120-240M/yr',
    status: 'Phase 3',
  },
  {
    id: 'adzy',
    name: 'Adzy',
    arabic: 'أدزي',
    tagline: 'Advertising & Media Network',
    description: 'Ecosystem-wide advertising and media platform',
    color: 'from-pink-500 to-rose-500',
    textColor: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500',
    icon: Megaphone,
    href: '/adzy',
    dashboardHref: '/adzy',
    phase: 2,
    apps: [
      { name: 'Adzy Network', href: '/adzy', icon: Network, description: 'Ad network' },
      { name: 'Adzy DSP', href: '/adzy', icon: Target, description: 'Demand-side platform' },
      { name: 'Adzy Analytics', href: '/adzy', icon: BarChart3, description: 'Ad performance' },
      { name: 'Adzy Creative', href: '/adzy', icon: Sparkles, description: 'Creative studio' },
      { name: 'Adzy Influencer', href: '/adzy', icon: Users, description: 'Influencer platform' },
    ],
    revenue: 'AED 50-150M/yr',
    status: 'Phase 2',
  },
  {
    id: 'rabtul',
    name: 'Rabtul',
    arabic: 'رابطول',
    tagline: 'Tech Infrastructure & AI',
    description: 'Cloud infrastructure, APIs, and AI/ML platform',
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500',
    icon: Brain,
    href: '/rabtul',
    dashboardHref: '/rabtul',
    phase: 1,
    apps: [
      { name: 'Rabtul Cloud', href: '/rabtul', icon: Cloud, description: 'Cloud infrastructure' },
      { name: 'Rabtul AI', href: '/rabtul', icon: Brain, description: 'AI/ML models' },
      { name: 'Rabtul APIs', href: '/rabtul', icon: Code, description: 'API gateway' },
      { name: 'Rabtul Data', href: '/rabtul', icon: Database, description: 'Data platform' },
      { name: 'Rabtul Security', href: '/rabtul', icon: Shield, description: 'Security services' },
    ],
    revenue: 'AED 30-60M/yr',
    status: 'Active',
  },
  {
    id: 'eventora',
    name: 'Eventora',
    arabic: 'إيفينتورا',
    tagline: 'Events & Experiences',
    description: 'Event management, ticketing, and experiences platform',
    color: 'from-amber-500 to-orange-600',
    textColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500',
    icon: Ticket,
    href: '/eventora',
    dashboardHref: '/eventora',
    phase: 3,
    apps: [
      { name: 'Eventora Tickets', href: '/eventora', icon: Ticket, description: 'Event ticketing' },
      { name: 'Eventora Host', href: '/eventora', icon: Users, description: 'Event management' },
      { name: 'Eventora Venues', href: '/eventora', icon: MapPin, description: 'Venue booking' },
      { name: 'Eventora Corporate', href: '/eventora', icon: Building2, description: 'Corporate events' },
    ],
    revenue: 'AED 40-80M/yr',
    status: 'Phase 3',
  },
];

// Launch Phases
const launchPhases = [
  {
    phase: 1,
    name: 'Foundation',
    timeline: '2026-2027',
    status: 'Active',
    color: 'border-emerald-500',
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-400',
    companies: ['nuqta-corp', 'wasil-apps', 'rtmn-finance', 'rabtul'],
    goals: [
      'Launch core consumer apps (Nuqta+, Wasil, Hawil)',
      'Build tech infrastructure (Rabtul)',
      '500K users, 500+ merchants',
      'UAE market dominance',
    ],
  },
  {
    phase: 2,
    name: 'Expansion',
    timeline: '2027-2028',
    status: 'Planned',
    color: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-400',
    companies: ['travel-co', 'bizone', 'inventora', 'adzy'],
    goals: [
      'Launch B2B platforms (BizOne, Inventora)',
      'Travel & mobility (Safar, Rakab, Fakhir)',
      'Ad network activation (Adzy)',
      'GCC expansion begins',
    ],
  },
  {
    phase: 3,
    name: 'Scale',
    timeline: '2028-2029',
    status: 'Vision',
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-400',
    companies: ['nextabizz', 'eventora'],
    goals: [
      'B2B marketplace (NextaBizz)',
      'Events platform (Eventora)',
      'Full GCC coverage',
      '5M+ users',
    ],
  },
];

// Group Strategy Links
const groupStrategyLinks = [
  { name: 'Value Chain', href: '/value-chain', icon: Layers, description: 'Money, Data, Coin flows', color: 'text-emerald-400' },
  { name: 'Monetization', href: '/monetization', icon: DollarSign, description: 'Revenue models & projections', color: 'text-green-400' },
  { name: 'Master Plan', href: '/group-master-plan', icon: Target, description: '55B AED ecosystem vision', color: 'text-[#c9a227]' },
  { name: 'Organization', href: '/group-org-structure', icon: Users, description: 'C-Suite & departments', color: 'text-purple-400' },
  { name: 'Launch Strategy', href: '/group-launch-strategy', icon: Rocket, description: '5-phase go-to-market', color: 'text-blue-400' },
  { name: 'Governance', href: '/group-governance', icon: Shield, description: 'Shariah & compliance', color: 'text-rose-400' },
];

// Total Revenue
const totalRevenue = {
  minimum: 1000,
  maximum: 2020,
  currency: 'AED',
  unit: 'M',
  timeframe: 'per year at scale',
};

export default function RTMNDashboardPage() {
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null);
  const [activePhase, setActivePhase] = useState<number | null>(null);

  const toggleCompany = (id: string) => {
    setExpandedCompany(expandedCompany === id ? null : id);
  };

  const getPhaseCompanies = (phaseNum: number) => {
    return sisterCompanies.filter(c => c.phase === phaseNum);
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full mb-4">
              <Building2 className="w-5 h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-bold">RTMN Digital Holding</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              <span className="text-[#c9a227]">RTMN</span> Group Dashboard
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              10 Sister Companies | 50+ Apps | AED {totalRevenue.minimum}-{totalRevenue.maximum}M Revenue Potential
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-[#c9a227]">10</div>
              <div className="text-xs text-slate-400">Sister Companies</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-400">50+</div>
              <div className="text-xs text-slate-400">Apps & Platforms</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-blue-400">3</div>
              <div className="text-xs text-slate-400">Launch Phases</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-purple-400">6</div>
              <div className="text-xs text-slate-400">GCC Countries</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-green-400">2B+</div>
              <div className="text-xs text-slate-400">AED Revenue Target</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links to Strategy */}
      <div className="bg-slate-900/50 border-b border-slate-700/50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {groupStrategyLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-[#c9a227]/50 transition-all group"
              >
                <link.icon className={`w-6 h-6 ${link.color} mb-2`} />
                <div className="text-sm font-bold text-white group-hover:text-[#c9a227] transition-colors">{link.name}</div>
                <div className="text-xs text-slate-400">{link.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Launch Phases */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#c9a227]" />
            Launch Phases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {launchPhases.map((phase) => (
              <div
                key={phase.phase}
                className={`${phase.bgColor} rounded-xl p-6 border-2 ${phase.color} cursor-pointer transition-all hover:scale-[1.02]`}
                onClick={() => setActivePhase(activePhase === phase.phase ? null : phase.phase)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className={`text-xs font-bold ${phase.textColor} uppercase`}>Phase {phase.phase}</div>
                    <div className="text-xl font-bold text-white">{phase.name}</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${phase.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : phase.status === 'Planned' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}`}>
                    {phase.status}
                  </div>
                </div>
                <div className="text-sm text-slate-400 mb-4">{phase.timeline}</div>

                {/* Companies in this phase */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {getPhaseCompanies(phase.phase).map((company) => (
                    <Link
                      key={company.id}
                      href={company.href}
                      className={`${company.bgColor} ${company.borderColor} border rounded-lg px-3 py-1.5 text-xs font-medium ${company.textColor} hover:opacity-80 transition-opacity`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {company.name}
                    </Link>
                  ))}
                </div>

                {/* Goals */}
                {activePhase === phase.phase && (
                  <div className="mt-4 pt-4 border-t border-slate-700/50">
                    <div className="text-sm font-bold text-white mb-2">Goals:</div>
                    <ul className="space-y-1">
                      {phase.goals.map((goal, i) => (
                        <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Sister Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-[#c9a227]" />
            10 Sister Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sisterCompanies.map((company) => {
              const isExpanded = expandedCompany === company.id;
              return (
                <div
                  key={company.id}
                  className={`${company.bgColor} rounded-xl border ${company.borderColor} overflow-hidden transition-all`}
                >
                  {/* Company Header */}
                  <div
                    className="p-5 cursor-pointer"
                    onClick={() => toggleCompany(company.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${company.color} flex items-center justify-center`}>
                          <company.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className={`font-bold ${company.textColor}`}>{company.name}</div>
                          <div className="text-xs text-slate-500">{company.arabic}</div>
                          <div className="text-xs text-slate-400 mt-1">{company.tagline}</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className={`px-2 py-0.5 rounded text-xs font-bold ${company.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : company.status === 'Phase 2' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}`}>
                          {company.status}
                        </div>
                        <div className="text-xs text-slate-400">{company.apps.length} apps</div>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 mt-3">{company.description}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="text-xs text-slate-500">Revenue Potential: <span className={company.textColor}>{company.revenue}</span></div>
                      <Link
                        href={company.dashboardHref}
                        className={`text-xs ${company.textColor} hover:underline flex items-center gap-1`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Dashboard <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>

                  {/* Expanded Apps */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-0 border-t border-slate-700/30">
                      <div className="text-xs font-bold text-white mb-3 mt-4">Apps & Platforms:</div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {company.apps.map((app, i) => (
                          <Link
                            key={i}
                            href={app.href}
                            className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50 hover:border-slate-600 transition-all group"
                          >
                            <app.icon className={`w-4 h-4 ${company.textColor} mb-1`} />
                            <div className="text-xs font-medium text-white group-hover:text-[#c9a227] transition-colors">{app.name}</div>
                            <div className="text-[10px] text-slate-500">{app.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Revenue Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-green-400" />
            Revenue Overview
          </h2>
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Total Revenue */}
              <div>
                <div className="text-sm text-slate-400 mb-2">Total Group Revenue Potential</div>
                <div className="text-4xl font-black text-green-400">
                  AED {totalRevenue.minimum}M - {totalRevenue.maximum}M
                </div>
                <div className="text-sm text-slate-500 mt-1">{totalRevenue.timeframe}</div>
              </div>

              {/* By Company */}
              <div className="space-y-2">
                {sisterCompanies.slice(0, 5).map((company) => (
                  <div key={company.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${company.color}`}></div>
                      <span className="text-xs text-slate-400">{company.name}</span>
                    </div>
                    <span className={`text-xs font-medium ${company.textColor}`}>{company.revenue}</span>
                  </div>
                ))}
                <Link href="/monetization" className="text-xs text-[#c9a227] hover:underline flex items-center gap-1 mt-2">
                  View Full Breakdown <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Network className="w-6 h-6 text-blue-400" />
            Company Dashboards
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {sisterCompanies.map((company) => (
              <Link
                key={company.id}
                href={company.dashboardHref}
                className={`${company.bgColor} rounded-xl p-4 border ${company.borderColor} hover:scale-105 transition-all text-center group`}
              >
                <company.icon className={`w-8 h-8 ${company.textColor} mx-auto mb-2`} />
                <div className="text-sm font-bold text-white group-hover:text-[#c9a227] transition-colors">{company.name}</div>
                <div className="text-xs text-slate-500">{company.apps.length} apps</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Back to Nuqta Dashboard */}
        <section className="text-center py-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227]/20 border border-[#c9a227] rounded-xl text-[#c9a227] font-bold hover:bg-[#c9a227]/30 transition-all"
          >
            <Crown className="w-5 h-5" />
            Back to Nuqta Corporation Dashboard
          </Link>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
}
