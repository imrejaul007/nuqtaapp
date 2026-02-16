'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2, Shield, Lock, Database, Layers, Network, Users, Store,
  Wallet, Coins, Brain, Zap, Target, Globe, ArrowRight, CheckCircle,
  AlertTriangle, Crown, Settings, BarChart3, Truck, Plane, Megaphone,
  CreditCard, Calendar, Package, Server, Eye, ArrowDown, ArrowUp,
  ChevronDown, ChevronUp, XCircle, Briefcase, TrendingUp, Activity, Rocket
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// RTMN Group Companies
const rtmnCompanies = [
  {
    id: 'hq',
    level: 0,
    name: 'RTMN Digital Holding (HQ)',
    arabic: 'القابضة الرقمية',
    role: 'Government of the Ecosystem',
    tagline: 'Rules, Permissions, Kill-Switches',
    description: 'The governing body that controls all rules, permissions, capital allocation, risk appetite, and final kill-switches. Think of HQ as RBI/SEBI - not a business operator.',
    icon: Building2,
    color: 'from-[#c9a227] to-amber-600',
    textColor: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]',
    controls: [
      'Rules & economy',
      'Permissions & access',
      'Capital allocation',
      'Risk appetite',
      'Final kill switches',
      'Compliance & risk',
      'Coin rules, commission slabs, caps',
      'App/merchant enable-disable',
      'Zone & city admins',
    ],
    doesNotDo: ['Transactions', 'Operations', 'Development', 'Consumer apps', 'Merchant apps'],
    apps: ['HQ Admin Panels', 'Rule Engine Console', 'Audit & Risk Dashboards'],
    produces: ['Rules → Rabtul'],
    consumes: ['Reports ← Rabtul'],
    href: '/rtmn-hq',
  },
  {
    id: 'rabtul',
    level: 1,
    name: 'Rabtul Technologies',
    arabic: 'ربطل',
    role: 'Core OS - Single Source of Truth',
    tagline: 'Brain, Memory, Law of Ecosystem',
    description: 'THE MOST IMPORTANT COMPANY. Single source of truth for identity, wallet, rules, events, and analytics. Every app depends on Rabtul. No sister company can create wallet logic, change rules, or store final balances.',
    icon: Database,
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500',
    controls: [
      'Identity & SSO',
      'Wallet ledger (all coins)',
      'Rule engine (coins, commission, caps)',
      'Event bus',
      'Fraud & audit',
      'Global analytics',
      'SDKs for all apps',
    ],
    doesNotDo: ['UI for merchants', 'UI for users', 'Marketing creatives', 'POS screens', 'Standalone apps'],
    apps: ['Rabtul Core', 'AI & Analytics Engine', 'SSO & Identity', 'Wallet Ledger', 'Rule Engine', 'Event Bus', 'Notifications Hub', 'API Gateway', 'RTMN Core SDK'],
    produces: ['Wallet balances', 'Rule decisions', 'Unified analytics'],
    consumes: ['Events from all apps'],
    href: '/rabtul',
  },
  {
    id: 'nuqta',
    level: 2,
    name: 'Nuqta Corporation',
    arabic: 'نقطة',
    role: 'User Entry, Discovery, Engagement, Loyalty',
    tagline: 'Consumer UX & Loyalty Experience',
    description: 'Controls consumer UX, loyalty experience, discovery logic, and engagement loops. Does NOT own wallet ledger, merchant data, or pricing logic.',
    icon: Crown,
    color: 'from-[#c9a227] to-amber-500',
    textColor: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]',
    controls: ['Consumer UX', 'Loyalty experience', 'Discovery logic', 'Engagement loops'],
    doesNotDo: ['Wallet ledger', 'Merchant data', 'Pricing logic'],
    apps: ['Nuqta (Super App)', 'AI-R', 'BuzzLoop', 'CoinHunt', 'LocalEdge', 'VibeOut', 'Circlezy', 'Hangoutzy', 'Campuszy', 'Fanzy+', 'Gigzy', 'Spinzy', 'Quizzy', 'Memezy', '+ 30 more'],
    produces: ['DAU', 'Referrals', 'Intent data'],
    consumes: ['Wallet ← Rabtul', 'Merchants ← BizOne', 'Campaigns ← Adzy'],
    href: '/nuqta-corp',
  },
  {
    id: 'wasil',
    level: 2,
    name: 'Wasil Apps Pvt Ltd',
    arabic: 'واصل',
    role: 'Quick Commerce & Vertical Apps',
    tagline: 'Category-Specific Demand Generation',
    description: 'Controls vertical-specific UX and category workflows (food, grocery, wellness). Does NOT own users, wallet, merchants, or settlements.',
    icon: Truck,
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500',
    controls: ['Vertical-specific UX', 'Category workflows', 'Order flow'],
    doesNotDo: ['Users', 'Wallet', 'Merchants', 'Settlements'],
    apps: ['Dinezy', 'Grocify', 'Glowzy', 'MediEarn', 'FitEarn', 'Shopazy', 'Funzy', 'Petzy', 'Kidzo', 'Washzy', 'Maidzy', 'Luxora', 'Royale+', '+ 10 more'],
    produces: ['Orders', 'GMV'],
    consumes: ['Wallet ← Rabtul', 'Inventory ← BizOne', 'Offers ← Adzy'],
    href: '/wasil-apps',
  },
  {
    id: 'travel',
    level: 2,
    name: 'Travel, Trek & Experience Co.',
    arabic: 'سفر ومغامرة',
    role: 'Regulated Travel & Tourism',
    tagline: 'High-Value Bookings & Tourism',
    description: 'Controls regulated partnerships and travel workflows. Extra compliance layer for tourism regulations.',
    icon: Plane,
    color: 'from-cyan-500 to-teal-600',
    textColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500',
    controls: ['Regulated partnerships', 'Airport/travel workflows', 'Compliance'],
    doesNotDo: ['Core wallet', 'Rules'],
    apps: ['Airzy', 'TravoPay', 'Weekendzy', 'Ridezy', 'Trekzy', 'Campzy', 'Cruisezy', 'AdventureMeet', 'TrailMaps', 'GreenTours', 'TrekRent'],
    produces: ['High-value bookings', 'Travel GMV'],
    consumes: ['Same as Wasil + compliance layer'],
    href: '/travel-co',
  },
  {
    id: 'bizone',
    level: 2,
    name: 'BizOne Technologies',
    arabic: 'بيز ون',
    role: 'ONLY Merchant OS',
    tagline: 'Merchants Live Here. Period.',
    description: 'THE ONLY MERCHANT APP. Controls POS, inventory, orders, staff, customer CRM, settlements (execution only). Does NOT control coin rules, commission rules, or campaign eligibility.',
    icon: Store,
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
    controls: ['POS', 'Inventory', 'Orders', 'Staff', 'Customer CRM', 'Settlements (execution)'],
    doesNotDo: ['Coin rules', 'Commission rules', 'Campaign eligibility'],
    apps: ['BizOne POS', 'BizOne Merchant App', 'BizOne Web Dashboard', 'BizOne Microsite Generator'],
    produces: ['Merchant data', 'Order execution', 'Sales events'],
    consumes: ['Rules ← Rabtul', 'Orders ← All Apps', 'Campaigns ← Adzy'],
    href: '/bizone',
  },
  {
    id: 'nextabizz',
    level: 3,
    name: 'NextaBizz Marketplaces',
    arabic: 'نكستا بيز',
    role: 'B2B Supply',
    tagline: 'Bulk Sourcing & Vendor Relations',
    description: 'Controls vendor relations, bulk pricing, manufacturing partnerships. Does NOT control retail pricing or user demand.',
    icon: Package,
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500',
    controls: ['Vendor relations', 'Bulk pricing', 'Manufacturing partnerships'],
    doesNotDo: ['Retail pricing', 'User demand'],
    apps: ['NextaBizz', 'FoodMart', 'Craftzy', 'TechifyPro', 'Buildzy', 'VendorLoop', 'BrandStack', 'HealthPro', 'EduMart', 'FashnPro', 'AgroMart', 'EventPro', 'TravelTrade', 'BizHire', 'PrintoPro', 'SalonPro', 'GymPro', 'RestroPro', 'RetailMart', 'AutoTrade'],
    produces: ['Bulk inventory', 'Vendor network'],
    consumes: ['Sales ← BizOne', 'Credit hooks ← Finance'],
    href: '/nextabizz',
  },
  {
    id: 'inventora',
    level: 3,
    name: 'Inventora',
    arabic: 'إنفنتورا',
    role: 'Supply Chain',
    tagline: 'Procurement, Warehousing, Replenishment',
    description: 'Controls warehousing, procurement, auto-replenishment. Does NOT control demand or marketing.',
    icon: Layers,
    color: 'from-teal-500 to-cyan-600',
    textColor: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500',
    controls: ['Warehousing', 'Procurement', 'Auto-replenishment'],
    doesNotDo: ['Demand', 'Marketing'],
    apps: ['Inventora Core', 'Warehouse Management System', 'Logistics Integrations'],
    produces: ['Inventory fulfillment', 'Stock data'],
    consumes: ['Inventory data ← BizOne', 'Payments ← Finance', 'Events → Rabtul'],
    href: '/inventora',
  },
  {
    id: 'adzy',
    level: 2,
    name: 'Adzy Media Network',
    arabic: 'أدزي',
    role: 'Closed-Loop Ads & Growth OS',
    tagline: 'Merchant Growth + Extra Revenue',
    description: 'Controls campaign tooling, ad inventory, attribution logic, influencer/offline ads. Does NOT control wallet credit, discounts, or merchant pricing.',
    icon: Megaphone,
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500',
    controls: ['Campaign tooling', 'Ad inventory', 'Attribution logic', 'Influencer/offline ads'],
    doesNotDo: ['Wallet credit', 'Discounts', 'Merchant pricing'],
    apps: ['Adzy Merchant Ads Manager', 'Adzy HQ Console', 'Influencer Marketplace', 'Physical + Digital Media Exchange'],
    produces: ['Campaign visibility', 'Attribution data'],
    consumes: ['Rules ← Rabtul', 'Opt-in ← BizOne', 'ROI ← BizOne'],
    href: '/adzy',
  },
  {
    id: 'finance',
    level: 2,
    name: 'RTMN Finance',
    arabic: 'مالية',
    role: 'Fintech & Credit',
    tagline: 'Payments, Settlements, Credit',
    description: 'Controls merchant credit, BNPL, settlements (money movement), insurance. Does NOT control identity, wallet logic, or user discovery.',
    icon: CreditCard,
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500',
    controls: ['Merchant credit', 'BNPL', 'Settlements (money movement)', 'Insurance'],
    doesNotDo: ['Identity', 'Wallet logic', 'User discovery'],
    apps: ['NuqtaPay', 'BizCredit', 'Loanzy', 'Remitz', 'Qist BNPL', 'Hawil Remittance'],
    produces: ['Settlements', 'Credit decisions'],
    consumes: ['Risk data ← Rabtul', 'Sales data ← BizOne'],
    href: '/rtmn-finance',
  },
  {
    id: 'eventora',
    level: 3,
    name: 'Eventora+',
    arabic: 'إيفنتورا',
    role: 'Offline Acquisition',
    tagline: 'Events, Campus, Society Programs',
    description: 'Controls events, campus activations, society programs. Does NOT control wallet logic or merchant truth.',
    icon: Calendar,
    color: 'from-violet-500 to-purple-600',
    textColor: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500',
    controls: ['Events', 'Campus activations', 'Society programs'],
    doesNotDo: ['Wallet logic', 'Merchant truth'],
    apps: ['Eventora+', 'Z-Events', 'Campus Ambassador Platform', 'Society Events Platform'],
    produces: ['User acquisition', 'Merchant onboarding'],
    consumes: ['Rewards → Rabtul', 'Merchants ← BizOne', 'Campaigns ← Adzy'],
    href: '/eventora',
  },
];

// Core Rules
const coreRules = [
  { rule: 'No app owns wallet', icon: Wallet, description: 'All wallet logic lives in Rabtul only' },
  { rule: 'No app owns merchants', icon: Store, description: 'All merchant data lives in BizOne only' },
  { rule: 'No company bypasses Rabtul', icon: Shield, description: 'Every transaction flows through Rabtul' },
];

// Flow Hierarchy
const flowHierarchy = [
  { level: 'HQ (Rules)', color: 'bg-[#c9a227]' },
  { level: 'Rabtul (Identity, Wallet, Rules)', color: 'bg-purple-500' },
  { level: 'BizOne (Merchants & Ops)', color: 'bg-blue-500' },
  { level: 'Adzy / Finance / Supply', color: 'bg-pink-500' },
  { level: 'ALL USER APPS', color: 'bg-emerald-500' },
];

export default function RTMNGroupPage() {
  const [expandedCompany, setExpandedCompany] = useState<string | null>('hq');
  const [viewMode, setViewMode] = useState<'list' | 'hierarchy'>('list');

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#c9a227]/10 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full mb-6">
            <Building2 className="w-5 h-5 text-[#c9a227]" />
            <span className="text-[#c9a227] font-bold">RTMN Digital Holding</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Global Control & <span className="text-[#c9a227]">Connectivity</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            The complete organizational structure of the RTMN ecosystem. 11 companies,
            clear ownership boundaries, and locked governance rules. No app owns wallet.
            No app owns merchants. No company bypasses Rabtul.
          </p>

          {/* Core Rules Banner */}
          <div className="bg-red-500/10 border-2 border-red-500 rounded-xl p-4 sm:p-6 mb-8">
            <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5" /> LOCKED RULES - CANNOT BE CHANGED
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {coreRules.map((rule, i) => (
                <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-red-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span className="text-white font-bold text-sm">{rule.rule}</span>
                  </div>
                  <p className="text-slate-400 text-xs">{rule.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-[#c9a227]/10 rounded-xl p-4 text-center border border-[#c9a227]/30">
              <div className="text-2xl sm:text-3xl font-bold text-[#c9a227]">11</div>
              <div className="text-xs sm:text-sm text-slate-400">Companies</div>
            </div>
            <div className="bg-purple-500/10 rounded-xl p-4 text-center border border-purple-500/30">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400">100+</div>
              <div className="text-xs sm:text-sm text-slate-400">Apps</div>
            </div>
            <div className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/30">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400">1</div>
              <div className="text-xs sm:text-sm text-slate-400">Wallet System</div>
            </div>
            <div className="bg-emerald-500/10 rounded-xl p-4 text-center border border-emerald-500/30">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400">1</div>
              <div className="text-xs sm:text-sm text-slate-400">Merchant System</div>
            </div>
          </div>
        </div>
      </div>

      {/* Flow Hierarchy */}
      <section className="bg-slate-800/30 border-b border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8 flex items-center justify-center gap-2">
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#c9a227]" />
            End-to-End Flow
          </h2>
          <div className="max-w-md mx-auto space-y-2">
            {flowHierarchy.map((item, i) => (
              <div key={i} className="relative">
                <div className={`${item.color} rounded-lg p-3 sm:p-4 text-center text-white font-bold text-sm sm:text-base`}>
                  {item.level}
                </div>
                {i < flowHierarchy.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-5 h-5 text-slate-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="space-y-4 sm:space-y-6">
          {rtmnCompanies.map((company) => (
            <div
              key={company.id}
              className={`${company.bgColor} border-2 ${company.borderColor} rounded-xl overflow-hidden`}
            >
              <button
                onClick={() => setExpandedCompany(expandedCompany === company.id ? null : company.id)}
                className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${company.color} flex items-center justify-center flex-shrink-0`}>
                    <company.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`text-base sm:text-xl font-bold ${company.textColor}`}>
                        {company.name}
                      </h3>
                      <span className="text-slate-500 text-xs sm:text-sm">{company.arabic}</span>
                      {company.id === 'rabtul' && (
                        <span className="bg-red-500/20 text-red-400 text-xs px-2 py-0.5 rounded font-bold">MOST IMPORTANT</span>
                      )}
                      {company.id === 'bizone' && (
                        <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-0.5 rounded font-bold">ONLY MERCHANT APP</span>
                      )}
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm">{company.role}</p>
                  </div>
                </div>
                {expandedCompany === company.id ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {expandedCompany === company.id && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <p className="text-slate-300 mb-6">{company.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* Controls */}
                    <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/30">
                      <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" /> Controls
                      </h4>
                      <ul className="space-y-1">
                        {company.controls.map((item, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Does NOT Do */}
                    <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/30">
                      <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                        <XCircle className="w-4 h-4" /> Does NOT Do
                      </h4>
                      <ul className="space-y-1">
                        {company.doesNotDo.map((item, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Apps */}
                  <div className="mb-6">
                    <h4 className="text-white font-bold mb-3">Apps / Platforms</h4>
                    <div className="flex flex-wrap gap-2">
                      {company.apps.map((app, i) => (
                        <span key={i} className={`text-xs px-2 py-1 rounded ${company.bgColor} ${company.textColor} border ${company.borderColor}`}>
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Data Flow */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                        <ArrowDown className="w-4 h-4" /> Consumes
                      </h4>
                      <ul className="space-y-1">
                        {company.consumes.map((item, i) => (
                          <li key={i} className="text-slate-400 text-sm">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <h4 className="text-emerald-400 font-bold mb-2 flex items-center gap-2">
                        <ArrowUp className="w-4 h-4" /> Produces
                      </h4>
                      <ul className="space-y-1">
                        {company.produces.map((item, i) => (
                          <li key={i} className="text-slate-400 text-sm">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* ═══════════════ FULL NAVIGATION ═══════════════ */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
            <Network className="w-5 h-5 text-[#c9a227]" /> Navigate the Ecosystem
          </h2>

          {/* Key Pages */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Link href="/complete-roadmap" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors text-sm">
              <Target className="w-4 h-4" /> Complete Roadmap
            </Link>
            <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors text-sm">
              <Network className="w-4 h-4" /> Full Ecosystem (100+ Apps)
            </Link>
            <Link href="/rtmn-dashboard" className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors text-sm">
              <BarChart3 className="w-4 h-4" /> RTMN Dashboard
            </Link>
            <Link href="/rabtul" className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500 text-white rounded-xl font-bold hover:bg-purple-400 transition-colors text-sm">
              <Database className="w-4 h-4" /> Rabtul Core OS
            </Link>
          </div>

          {/* All Product Pages Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { name: 'Nuqta', href: '/nuqta', color: 'text-[#c9a227]', bg: 'bg-[#c9a227]/10', border: 'border-[#c9a227]/30', icon: Coins },
              { name: 'NuqtaPay', href: '/nuqtapay', color: 'text-teal-400', bg: 'bg-teal-500/10', border: 'border-teal-500/30', icon: CreditCard },
              { name: 'Qist', href: '/qist', color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', icon: Wallet },
              { name: 'Hawil', href: '/hawil', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', icon: Globe },
              { name: 'Wasil', href: '/wasil', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30', icon: Truck },
              { name: 'Rakab', href: '/rakab', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30', icon: Calendar },
              { name: 'Safar', href: '/safar', color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/30', icon: Plane },
              { name: 'Ajer', href: '/ajer', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30', icon: Package },
              { name: 'Sakin', href: '/sakin', color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/30', icon: Building2 },
              { name: 'Fakhir', href: '/fakhir', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', icon: Crown },
              { name: 'BizOne', href: '/bizone', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30', icon: Store },
              { name: 'Inventora', href: '/inventora', color: 'text-teal-400', bg: 'bg-teal-500/10', border: 'border-teal-500/30', icon: Layers },
              { name: 'NextaBizz', href: '/nextabizz', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', icon: Package },
              { name: 'Eventora', href: '/eventora', color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/30', icon: Calendar },
              { name: 'Adzy', href: '/adzy', color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/30', icon: Megaphone },
              { name: 'Rabtul', href: '/rabtul', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30', icon: Database },
              { name: 'Tamkeen', href: '/tamkeen', color: 'text-lime-400', bg: 'bg-lime-500/10', border: 'border-lime-500/30', icon: Rocket },
              { name: 'Nuqta Corp', href: '/nuqta-corp', color: 'text-[#c9a227]', bg: 'bg-[#c9a227]/10', border: 'border-[#c9a227]/30', icon: Crown },
              { name: 'RTMN Finance', href: '/rtmn-finance', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30', icon: Wallet },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`${item.bg} border ${item.border} rounded-xl p-3 text-center hover:scale-105 transition-all group`}
              >
                <item.icon className={`w-5 h-5 ${item.color} mx-auto mb-1.5`} />
                <div className={`text-sm font-bold ${item.color} group-hover:text-white transition-colors`}>{item.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
