'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Shield, FileText, Globe, BarChart3, Users, Lock,
  ArrowRight, CheckCircle, ChevronDown, ChevronUp,
  Activity, DollarSign, Zap, AlertTriangle, Settings,
  Building2, Search, Eye, Brain, Bell,
  BookOpen, CreditCard, Star, Clock,
  TrendingUp, Layers, Award, MapPin, Briefcase,
  Code, Monitor, UserCheck, Heart, Home,
  Crown, Store, Package, Target, Rocket,
  Calculator, Wallet, HeartHandshake,
  Network, Sparkles, Key, Hammer,
  Camera, Wrench, PieChart, Scale
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

const keyStats = [
  { label: 'Property Modules', value: '7', suffix: 'services', color: 'text-indigo-400' },
  { label: 'Listed Properties', value: '50K+', suffix: 'target Y1', color: 'text-blue-400' },
  { label: 'GCC Cities', value: '15+', suffix: 'coverage', color: 'text-emerald-400' },
  { label: 'Financing', value: 'Qist', suffix: 'BNPL built-in', color: 'text-amber-400' },
];

const propertyModules = [
  {
    id: 'buysell', name: 'Buy & Sell', arabic: 'بيع وشراء', icon: Key,
    color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30',
    description: 'Property listings for buying and selling — apartments, villas, townhouses, commercial, and off-plan. Verified listings only.',
    capabilities: ['Verified property listings', 'Virtual tours (360° & video)', 'Price history & market trends', 'Mortgage calculator + Qist financing', 'Legal document checklist', 'DLD fee calculator', 'Agent & developer profiles', 'Offer management system'],
  },
  {
    id: 'rent', name: 'Rent & Lease', arabic: 'إيجار', icon: Home,
    color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30',
    description: 'Rental marketplace with Ejari/Tawtheeq integration, Sakin deposit financing, and tenant screening.',
    capabilities: ['Rental listings (furnished/unfurnished)', 'Ejari/Tawtheeq auto-registration', 'Sakin deposit financing (12 months)', 'Tenant screening & background checks', 'Rent payment via NuqtaPay', 'Lease renewal management', 'RERA rent index integration', 'Dispute documentation'],
  },
  {
    id: 'management', name: 'Property Management', arabic: 'إدارة عقارات', icon: Settings,
    color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30',
    description: 'For landlords and property managers — tenant management, rent collection, maintenance, and financial reporting.',
    capabilities: ['Multi-property dashboard', 'Automated rent collection', 'Tenant communication portal', 'Vacancy tracking & marketing', 'Financial reporting (P&L per unit)', 'Document management', 'Inspection scheduling', 'Rent increase calculator (RERA index)'],
  },
  {
    id: 'maintenance', name: 'Maintenance & Services', arabic: 'صيانة', icon: Wrench,
    color: 'text-orange-400', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30',
    description: 'Maintenance request system connected to Wasil home services. AC, plumbing, electrical, cleaning, painting.',
    capabilities: ['Maintenance request portal', 'Wasil home services integration', 'Vendor management & ratings', 'Emergency repair requests', 'Preventive maintenance calendar', 'Cost tracking per property', 'Photo/video documentation', 'Tenant satisfaction tracking'],
  },
  {
    id: 'mortgage', name: 'Mortgage & Financing', arabic: 'تمويل عقاري', icon: Calculator,
    color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10', borderColor: 'border-[#c9a227]/30',
    description: 'Mortgage comparison from 15+ banks. Pre-approval in minutes. Sakin rent-to-own. Qist deposit BNPL.',
    capabilities: ['Mortgage comparison (15+ banks)', 'Pre-approval in 48 hours', 'Affordability calculator', 'Sakin rent-to-own program', 'Qist deposit BNPL (12 months)', 'Refinancing comparison', 'Islamic mortgage (Ijarah/Murabaha)', 'Down payment planning'],
  },
  {
    id: 'commercial', name: 'Commercial Real Estate', arabic: 'تجاري', icon: Building2,
    color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30',
    description: 'Office, retail, warehouse, and co-working spaces. Lease management, fit-out coordination, and BizOne merchant integration.',
    capabilities: ['Office space listings', 'Retail unit marketplace', 'Warehouse & industrial spaces', 'Co-working space booking', 'Lease negotiation tools', 'Fit-out coordination', 'BizOne merchant location scouting', 'Commercial mortgage comparison'],
  },
  {
    id: 'offplan', name: 'Off-Plan & New Developments', arabic: 'على الخريطة', icon: Hammer,
    color: 'text-pink-400', bgColor: 'bg-pink-500/10', borderColor: 'border-pink-500/30',
    description: 'Off-plan property from developers. Payment plan comparison, construction progress tracking, and escrow monitoring.',
    capabilities: ['Developer project listings', 'Payment plan comparison', 'Construction progress updates', 'Escrow account verification', 'Floor plan & specification viewer', 'Developer track record analysis', 'Handover checklist', 'Post-handover snagging tool'],
  },
];

const pricingTiers = [
  { tier: 'Free', price: 'Free', period: '', target: 'Buyers & Tenants', color: 'border-slate-500', bgColor: 'bg-slate-800/30', features: ['Property search & browse', 'Save favorites & alerts', 'Mortgage calculator', 'Agent contact', 'Market trends'], popular: false },
  { tier: 'Landlord', price: 'AED 49', period: '/property/mo', target: 'Individual Landlords', color: 'border-indigo-500', bgColor: 'bg-indigo-500/10', features: ['All Free features', 'List properties', 'Tenant screening', 'Rent collection', 'Maintenance requests', 'Financial reports'], popular: true },
  { tier: 'Agency', price: 'AED 999', period: '/month', target: 'Real Estate Agencies', color: 'border-purple-500', bgColor: 'bg-purple-500/10', features: ['All Landlord features', 'Unlimited listings', 'CRM & lead management', 'Team management', 'Featured listings', 'Analytics dashboard', 'API access'], popular: false },
  { tier: 'RTMN Internal', price: 'Custom', period: '', target: 'RTMN Companies', color: 'border-[#c9a227]', bgColor: 'bg-[#c9a227]/10', features: ['Office scouting for all companies', 'Sakin rent financing integration', 'BizOne merchant location data', 'Employee housing portal', 'Group lease negotiation'], popular: false },
];

const competitors = [
  { name: 'Aqar', financing: '✅ Qist+Sakin', mgmt: '✅', maint: '✅ Wasil', mortgage: '✅ 15 banks', arabic: '✅', ecosystem: '✅ RTMN', price: 'Free-999' },
  { name: 'Property Finder', financing: '❌', mgmt: '❌', maint: '❌', mortgage: '⚠️ Basic', arabic: '✅', ecosystem: '❌', price: 'AED 3K/agent' },
  { name: 'Bayut/Dubizzle', financing: '❌', mgmt: '❌', maint: '❌', mortgage: '⚠️', arabic: '✅', ecosystem: '❌', price: 'AED 2K/agent' },
  { name: 'Realiste', financing: '❌', mgmt: '❌', maint: '❌', mortgage: '❌', arabic: '❌', ecosystem: '❌', price: 'Free' },
];

const financialProjections = [
  { year: 'Year 1', listings: '50K', transactions: '2K', revenue: 5, market: 'UAE (Dubai + Abu Dhabi)' },
  { year: 'Year 2', listings: '150K', transactions: '8K', revenue: 20, market: 'UAE + KSA' },
  { year: 'Year 3', listings: '400K+', transactions: '25K+', revenue: 60, market: 'Full GCC' },
];

const roadmapPhases = [
  { phase: 'Phase 1', title: 'Foundation', timeline: 'Q4 2026', color: 'border-indigo-500', bgColor: 'bg-indigo-500/10', milestones: ['Buy/sell & rental marketplace (UAE)', 'Sakin deposit financing integration', 'Mortgage comparison engine', 'Ejari/Tawtheeq automation', 'RTMN office space scouting', 'Verified listing pipeline'] },
  { phase: 'Phase 2', title: 'Full Platform', timeline: 'Q1 2027', color: 'border-blue-500', bgColor: 'bg-blue-500/10', milestones: ['Property management for landlords', 'Maintenance via Wasil services', 'Commercial real estate section', 'Off-plan project tracking', 'Agency management tools', 'Consumer public launch'] },
  { phase: 'Phase 3', title: 'GCC Expansion', timeline: 'Q2-Q3 2027', color: 'border-purple-500', bgColor: 'bg-purple-500/10', milestones: ['KSA market (Riyadh, Jeddah)', 'Bahrain market', 'Virtual tour technology', 'AI property valuation', 'BizOne merchant location analytics', '150K+ listings'] },
  { phase: 'Phase 4', title: 'PropTech Leader', timeline: 'H2 2027-2028', color: 'border-[#c9a227]', bgColor: 'bg-[#c9a227]/10', milestones: ['Full 6-country GCC', 'Rent-to-own (Sakin program)', 'Blockchain title deed verification', 'AI interior design staging', 'Smart home integration', '400K+ listings, 25K+ annual transactions'] },
];

const risks = [
  { risk: 'Established competitors (Property Finder, Bayut)', severity: 'high', mitigation: ['Differentiate with financing (Qist + Sakin)', 'Property management + maintenance (unique)', 'BizOne merchant distribution channel', 'Lower commission structure'] },
  { risk: 'Real estate market cyclicality', severity: 'medium', mitigation: ['Revenue from management fees (recurring)', 'Maintenance services (counter-cyclical)', 'Diversified across buy/sell/rent/commercial', 'GCC diversification across markets'] },
  { risk: 'RERA compliance for digital property platforms', severity: 'medium', mitigation: ['RERA broker registration', 'Partnership with licensed agencies', 'Verified listing compliance', 'Legal team for each jurisdiction'] },
  { risk: 'Listing quality and fraud', severity: 'high', mitigation: ['Verified listings only policy', 'AI duplicate/fraud detection', 'Agent verification via RERA database', 'User reviews and reporting system'] },
];

const rtmnCompanies = [
  { name: 'All RTMN Companies', needs: 'Office space scouting, lease negotiation, workspace management', icon: Crown, color: 'text-[#c9a227]' },
  { name: 'Sakin (Rent Finance)', needs: 'Rent deposit BNPL integration, tenant financing', icon: Home, color: 'text-indigo-400' },
  { name: 'Ajer (Rentals)', needs: 'Asset rental marketplace expansion, vehicle/equipment rental', icon: Layers, color: 'text-blue-400' },
  { name: 'BizOne', needs: 'Merchant location analytics, retail unit scouting', icon: Store, color: 'text-emerald-400' },
  { name: 'Wasil Apps', needs: 'Dark store locations, warehouse scouting, rider hubs', icon: Package, color: 'text-orange-400' },
  { name: 'Inventora', needs: 'Warehouse listings, industrial space management', icon: Building2, color: 'text-purple-400' },
];

const corporateStructure = { parentCompany: 'Nuqta Corporation', entity: 'Aqar Property Platform', ownership: '100% owned by Nuqta Corporation (RTMN Group)', type: 'PropTech — Full-Stack Property Platform', regulator: 'RERA (Dubai/Abu Dhabi) — broker license' };

export default function AqarPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'modules', label: '7 Modules', icon: Layers },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'rtmn', label: 'RTMN Internal', icon: Network },
    { id: 'financials', label: 'Financials', icon: BarChart3 },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket },
    { id: 'competition', label: 'Competition', icon: Target },
    { id: 'risks', label: 'Risks', icon: AlertTriangle },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-4 text-sm"><ArrowRight className="w-4 h-4 rotate-180" /> RTMN Ecosystem</Link>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20"><Home className="w-7 h-7 sm:w-10 sm:h-10 text-white" /></div>
                <div><h1 className="text-3xl sm:text-5xl font-black text-white">Aqar <span className="text-indigo-400">عقار</span></h1><p className="text-indigo-400 text-sm sm:text-lg font-medium">Property, Full-Stack.</p></div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">The <span className="text-indigo-400 font-medium">complete GCC property platform</span>. Buy, sell, rent, manage, maintain — with <span className="text-amber-400 font-medium">Qist financing</span> and <span className="text-[#c9a227] font-medium">Sakin deposit BNPL</span> built-in.</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full"><HeartHandshake className="w-4 h-4 text-[#c9a227]" /><span className="text-[#c9a227] text-xs sm:text-sm font-medium">A Nuqta Corporation Product</span></div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">{keyStats.map((stat, i) => (<div key={i} className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center min-w-[120px]"><div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div><div className="text-[10px] sm:text-xs text-slate-400">{stat.suffix}</div><div className="text-[10px] sm:text-xs text-slate-500 mt-1">{stat.label}</div></div>))}</div>
          </div>
          <div className="mt-8 bg-gradient-to-r from-indigo-500/20 to-violet-500/10 rounded-xl p-4 sm:p-6 border border-indigo-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div><div className="flex items-center gap-2 mb-2"><Zap className="w-5 h-5 text-indigo-400" /><span className="text-lg font-bold text-white">The Core Promise</span></div><p className="text-xl sm:text-2xl font-bold text-white"><span className="text-indigo-400">Find it. Finance it.</span> <span className="text-emerald-400">Manage it.</span> One platform.</p></div>
              <div className="flex gap-3"><div className="bg-slate-900/50 rounded-lg p-3 text-center"><div className="text-2xl font-bold text-indigo-400">50K+</div><div className="text-xs text-slate-400">Listings</div></div><div className="bg-slate-900/50 rounded-lg p-3 text-center"><div className="text-2xl font-bold text-[#c9a227]">7</div><div className="text-xs text-slate-400">Modules</div></div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex overflow-x-auto py-2 gap-1 sm:gap-2 scrollbar-hide">{tabs.map((tab) => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab.id ? 'bg-indigo-500 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}><tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />{tab.label}</button>))}</div></div></div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-indigo-400" /> Executive Summary</h2>
              <p className="text-slate-300"><strong className="text-white">Aqar</strong> (عقار — &quot;property&quot;) is the GCC&apos;s first full-stack property platform. Unlike listing-only portals (Property Finder, Bayut), Aqar covers the <strong className="text-indigo-400">entire property lifecycle</strong> — search, finance, transact, manage, and maintain. Deep integration with <strong className="text-amber-400">Sakin</strong> (deposit BNPL), <strong className="text-emerald-400">Qist</strong> (mortgage BNPL), <strong className="text-orange-400">Wasil</strong> (home services), and <strong className="text-blue-400">Daman</strong> (property insurance).</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/10 to-violet-500/5 rounded-xl p-6 border border-indigo-500/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-indigo-400" /> Corporate Structure</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">{[['Parent Company', corporateStructure.parentCompany], ['Entity Name', corporateStructure.entity], ['Ownership', corporateStructure.ownership]].map(([l, v]) => (<div key={l} className="flex justify-between py-2 border-b border-slate-700/50"><span className="text-slate-400">{l}</span><span className="text-white font-medium text-sm text-right">{v}</span></div>))}</div>
                <div className="space-y-3">{[['Product Type', corporateStructure.type], ['Regulation', corporateStructure.regulator], ['Integration', 'Sakin + Qist + Wasil + Daman + Khedma']].map(([l, v]) => (<div key={l} className="flex justify-between py-2 border-b border-slate-700/50"><span className="text-slate-400">{l}</span><span className="text-white font-medium text-right text-sm">{v}</span></div>))}</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'modules' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-indigo-500/10 to-violet-500/5 rounded-xl p-6 border border-indigo-500/30"><h2 className="text-xl font-bold text-white mb-2">7 Property Modules</h2><p className="text-slate-400">The entire property lifecycle — from search to management — in one platform.</p></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {propertyModules.map((mod) => {
                const Icon = mod.icon; const isActive = activeModule === mod.id;
                return (<button key={mod.id} onClick={() => setActiveModule(isActive ? null : mod.id)} className={`text-left rounded-xl border p-5 transition-all ${isActive ? `${mod.bgColor} ${mod.borderColor} ring-1 ring-current` : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50'}`}><div className="flex items-center gap-3 mb-2"><div className={`w-10 h-10 rounded-xl ${mod.bgColor} ${mod.borderColor} border flex items-center justify-center`}><Icon className={`w-5 h-5 ${mod.color}`} /></div><div><h3 className="text-white font-bold text-sm">{mod.name}</h3><span className="text-xs text-slate-500">{mod.arabic}</span></div></div><p className="text-xs text-slate-400 line-clamp-2">{mod.description}</p></button>);
              })}
            </div>
            {activeModule && (() => { const mod = propertyModules.find(m => m.id === activeModule); if (!mod) return null; const Icon = mod.icon; return (<div className={`rounded-xl border ${mod.borderColor} ${mod.bgColor} p-6`}><div className="flex items-center gap-3 mb-4"><Icon className={`w-6 h-6 ${mod.color}`} /><h3 className="text-xl font-bold text-white">{mod.name}</h3></div><p className="text-slate-300 mb-4">{mod.description}</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{mod.capabilities.map((cap, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className={`w-4 h-4 ${mod.color} shrink-0 mt-0.5`} /><span className="text-sm text-slate-300">{cap}</span></div>))}</div></div>); })()}
          </div>
        )}

        {activeTab === 'pricing' && (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{pricingTiers.map((tier) => (<div key={tier.tier} className={`rounded-xl border ${tier.color} ${tier.bgColor} p-6 relative ${tier.popular ? 'ring-2 ring-indigo-500/50' : ''}`}>{tier.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 bg-indigo-500 text-white rounded-full font-bold">Most Popular</span>}<h3 className="text-lg font-bold text-white">{tier.tier}</h3><div className="flex items-baseline gap-1 my-2"><span className="text-3xl font-black text-white">{tier.price}</span><span className="text-sm text-slate-400">{tier.period}</span></div><p className="text-xs text-slate-400 mb-4">{tier.target}</p><ul className="space-y-2">{tier.features.map((f, i) => (<li key={i} className="text-xs text-slate-300 flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />{f}</li>))}</ul></div>))}</div>)}

        {activeTab === 'rtmn' && (<div className="space-y-8"><div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-6 border-2 border-[#c9a227]"><h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Network className="w-5 h-5 text-[#c9a227]" /> RTMN Group Real Estate</h2><p className="text-slate-300">Aqar helps all RTMN companies find, lease, and manage their physical spaces — offices, warehouses, dark stores, and retail locations.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{rtmnCompanies.map((c) => { const Icon = c.icon; return (<div key={c.name} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 flex items-start gap-3"><Icon className={`w-5 h-5 ${c.color} shrink-0 mt-0.5`} /><div><h3 className="text-white font-bold text-sm">{c.name}</h3><p className="text-xs text-slate-400 mt-0.5">{c.needs}</p></div></div>); })}</div></div>)}

        {activeTab === 'financials' && (<div className="space-y-8"><div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"><h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-indigo-400" /> Financial Projections</h2><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700/50">{['Year', 'Listings', 'Transactions', 'Revenue (AED M)', 'Market'].map((h) => (<th key={h} className="text-left px-3 py-2 text-indigo-400 font-semibold">{h}</th>))}</tr></thead><tbody>{financialProjections.map((fp) => (<tr key={fp.year} className="border-b border-slate-800/50"><td className="px-3 py-3 text-white font-medium">{fp.year}</td><td className="px-3 py-3 text-slate-300">{fp.listings}</td><td className="px-3 py-3 text-slate-300">{fp.transactions}</td><td className="px-3 py-3 text-emerald-400 font-bold">{fp.revenue}M</td><td className="px-3 py-3 text-slate-400">{fp.market}</td></tr>))}</tbody></table></div></div><div className="grid grid-cols-2 lg:grid-cols-4 gap-3">{[{ label: 'GCC Real Estate', value: '$100B+', sub: 'Annual market' }, { label: 'UAE Transactions', value: '120K+', sub: 'Annual (Dubai alone)' }, { label: 'PropTech', value: '$800M', sub: 'GCC market by 2027' }, { label: 'Digital Shift', value: '65%', sub: 'Searches start online' }].map((m) => (<div key={m.label} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50"><div className="text-2xl font-bold text-white">{m.value}</div><div className="text-xs text-slate-400 mt-1">{m.sub}</div><div className="text-xs text-slate-500 mt-1">{m.label}</div></div>))}</div></div>)}

        {activeTab === 'roadmap' && (<div className="space-y-6">{roadmapPhases.map((phase) => (<div key={phase.phase} className={`${phase.bgColor} rounded-xl p-6 border-2 ${phase.color}`}><div className="flex items-center justify-between mb-4"><div><span className="text-xs text-slate-400">{phase.phase}</span><h3 className="text-lg font-bold text-white">{phase.title}</h3></div><span className="text-sm text-slate-300 font-medium">{phase.timeline}</span></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{phase.milestones.map((m, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{m}</span></div>))}</div></div>))}</div>)}

        {activeTab === 'competition' && (<div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"><h2 className="text-xl font-bold text-white mb-4">Competitive Comparison</h2><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700/50">{['', 'Financing', 'Management', 'Maintenance', 'Mortgage', 'Arabic', 'Ecosystem', 'Price'].map((h) => (<th key={h} className="text-left px-2 py-2 text-indigo-400 font-semibold whitespace-nowrap text-xs">{h}</th>))}</tr></thead><tbody>{competitors.map((c) => (<tr key={c.name} className={`border-b border-slate-800/50 ${c.name === 'Aqar' ? 'bg-indigo-500/10' : ''}`}><td className="px-2 py-2 text-white font-bold whitespace-nowrap">{c.name}</td>{[c.financing, c.mgmt, c.maint, c.mortgage, c.arabic, c.ecosystem, c.price].map((val, j) => (<td key={j} className={`px-2 py-2 whitespace-nowrap text-xs ${val.startsWith('✅') ? 'text-emerald-400' : val.startsWith('❌') ? 'text-red-400' : 'text-amber-400'}`}>{val}</td>))}</tr>))}</tbody></table></div></div>)}

        {activeTab === 'risks' && (<div className="space-y-4">{risks.map((r) => (<div key={r.risk} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden"><button onClick={() => setExpandedRisk(expandedRisk === r.risk ? null : r.risk)} className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-800/50 transition-colors"><div className="flex items-center gap-3"><span className={`px-2 py-0.5 rounded text-xs font-bold ${r.severity === 'critical' ? 'bg-red-500/20 text-red-400' : r.severity === 'high' ? 'bg-orange-500/20 text-orange-400' : 'bg-amber-500/20 text-amber-400'}`}>{r.severity.toUpperCase()}</span><span className="text-white font-medium text-sm">{r.risk}</span></div>{expandedRisk === r.risk ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}</button>{expandedRisk === r.risk && (<div className="px-5 pb-4"><div className="space-y-2">{r.mitigation.map((m, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{m}</span></div>))}</div></div>)}</div>))}</div>)}
      </main>

      <section className="py-12 px-4 border-t border-slate-800/50"><div className="max-w-4xl mx-auto text-center"><h2 className="text-2xl font-bold text-white mb-4">Property, Full-Stack.</h2><p className="text-slate-400 mb-8">7 modules. Buy, sell, rent, manage. Financing built-in.</p><div className="flex flex-wrap justify-center gap-4"><Link href="/sakin" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition-colors"><Home className="w-5 h-5" /> Sakin Financing</Link><Link href="/qist" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-500 transition-colors"><Wallet className="w-5 h-5" /> Qist BNPL</Link><Link href="/daman" className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-500 transition-colors"><Heart className="w-5 h-5" /> Daman Insurance</Link></div></div></section>
      <GlobalFooter />
    </div>
  );
}
