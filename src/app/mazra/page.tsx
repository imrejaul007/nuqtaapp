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
  Code, Monitor, UserCheck, Heart, Leaf,
  Crown, Store, Package, Target, Rocket,
  Calculator, Wallet, HeartHandshake,
  Network, Sparkles, Thermometer, Droplets,
  Sun, Wheat, ShoppingCart, Truck
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

const keyStats = [
  { label: 'Modules', value: '6', suffix: 'supply chain', color: 'text-green-400' },
  { label: 'Products', value: '10K+', suffix: 'SKUs target', color: 'text-blue-400' },
  { label: 'GCC Markets', value: '6', suffix: 'countries', color: 'text-emerald-400' },
  { label: 'Food Import', value: '85%', suffix: 'of GCC food', color: 'text-amber-400' },
];

const supplyModules = [
  {
    id: 'b2b', name: 'B2B Food Sourcing', arabic: 'مصادر غذائية', icon: ShoppingCart,
    color: 'text-green-400', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/30',
    description: 'Marketplace connecting F&B businesses directly with suppliers, farmers, and distributors. Bulk ordering, quality grading, and price negotiation.',
    capabilities: ['Supplier marketplace (500+ verified)', 'Bulk ordering system', 'Price comparison across suppliers', 'Quality grading & certification', 'Contract farming partnerships', 'Recurring order automation', 'Multi-supplier order management', 'Qist BNPL for business purchases'],
  },
  {
    id: 'coldchain', name: 'Cold Chain Management', arabic: 'سلسلة تبريد', icon: Thermometer,
    color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30',
    description: 'IoT temperature monitoring from farm to fork. Compliance with HACCP and municipality food safety regulations.',
    capabilities: ['IoT sensor temperature tracking', 'Real-time cold chain dashboard', 'HACCP compliance automation', 'Temperature breach alerts (SMS/push)', 'Compliance report generation', 'Vehicle refrigeration monitoring', 'Warehouse zone temperature maps', 'Audit trail for regulators'],
  },
  {
    id: 'farm', name: 'Farm-to-Table', arabic: 'من المزرعة', icon: Wheat,
    color: 'text-amber-400', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/30',
    description: 'Direct sourcing from local and regional farms. Traceability from seed to plate. Support for UAE Food Security Strategy 2051.',
    capabilities: ['Local farm directory (GCC + region)', 'Traceability (farm → pack → ship → store)', 'Organic & sustainability certifications', 'Seasonal availability calendar', 'Farm visit & audit scheduling', 'Carbon footprint per product', 'UAE Food Security 2051 alignment', 'Consumer-facing origin stories'],
  },
  {
    id: 'quality', name: 'Quality & Compliance', arabic: 'جودة', icon: Shield,
    color: 'text-red-400', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30',
    description: 'Food safety compliance — municipality health permits, lab testing, halal certification, import permits, and recall management.',
    capabilities: ['Municipality health permit tracker', 'Lab testing coordination', 'Halal certification management', 'Import permit processing', 'Product recall management', 'Supplier audit scheduling', 'Certificate of origin verification', 'Amana food safety integration'],
  },
  {
    id: 'logistics', name: 'Logistics & Distribution', arabic: 'توزيع', icon: Truck,
    color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30',
    description: 'Last-mile and mid-mile food logistics. Route optimization, delivery scheduling, and integration with Wasil and Inventora.',
    capabilities: ['Route optimization for fresh goods', 'Delivery scheduling & tracking', 'Wasil fleet integration', 'Inventora warehouse integration', 'Cross-docking facility network', 'Return & waste management', 'Proof of delivery (photo/signature)', 'Driver temperature compliance'],
  },
  {
    id: 'analytics', name: 'Market Intelligence', arabic: 'ذكاء السوق', icon: Brain,
    color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30',
    description: 'Price trends, demand forecasting, seasonal patterns, and waste reduction analytics for the food supply chain.',
    capabilities: ['Commodity price tracking (50+ items)', 'Demand forecasting (AI-powered)', 'Seasonal demand patterns', 'Waste reduction analytics', 'Supplier performance scoring', 'Market size & opportunity maps', 'Import/export trend analysis', 'Competitor pricing intelligence'],
  },
];

const pricingTiers = [
  { tier: 'Starter', price: 'AED 299', period: '/month', target: 'Small F&B (1-3 outlets)', color: 'border-slate-500', bgColor: 'bg-slate-800/30', features: ['B2B marketplace access', 'Order management', 'Basic quality tracking', 'Supplier directory', 'Standard support'], popular: false },
  { tier: 'Business', price: 'AED 999', period: '/month', target: 'Restaurant Groups (3-20)', color: 'border-green-500', bgColor: 'bg-green-500/10', features: ['All Starter features', 'Cold chain monitoring', 'Farm-to-table traceability', 'Quality compliance suite', 'Demand forecasting', 'Priority delivery slots', 'Dedicated account manager'], popular: true },
  { tier: 'Enterprise', price: 'AED 4,999', period: '/month', target: 'Food Distributors & Chains', color: 'border-purple-500', bgColor: 'bg-purple-500/10', features: ['All Business features', 'Full logistics integration', 'API & ERP connectors', 'Custom analytics', 'White-label ordering', 'Unlimited users', 'SLA guarantee'], popular: false },
  { tier: 'RTMN Internal', price: 'Custom', period: '', target: 'Wasil, BizOne, Inventora', color: 'border-[#c9a227]', bgColor: 'bg-[#c9a227]/10', features: ['Full platform for Wasil Food', 'BizOne F&B merchant sourcing', 'Inventora warehouse integration', 'Cross-company procurement', 'Centralized supplier management'], popular: false },
];

const competitors = [
  { name: 'Mazra', b2b: '✅', coldchain: '✅ IoT', traceability: '✅', compliance: '✅ Amana', logistics: '✅ Wasil', arabic: '✅', price: 'AED 299/mo' },
  { name: 'Snoonu (B2B)', b2b: '✅', coldchain: '❌', traceability: '❌', compliance: '❌', logistics: '⚠️ Own', arabic: '✅', price: 'Commission' },
  { name: 'FreshToHome', b2b: '⚠️', coldchain: '⚠️', traceability: '⚠️', compliance: '❌', logistics: '✅ Own', arabic: '❌', price: 'Commission' },
  { name: 'Traditional Dist.', b2b: '✅', coldchain: '⚠️', traceability: '❌', compliance: '⚠️', logistics: '✅ Own', arabic: '✅', price: '15-30% markup' },
];

const financialProjections = [
  { year: 'Year 1', suppliers: '500', gmv: 50, revenue: 3, market: 'UAE — F&B B2B' },
  { year: 'Year 2', suppliers: '2K', gmv: 250, revenue: 15, market: 'UAE + KSA' },
  { year: 'Year 3', suppliers: '5K+', gmv: 800, revenue: 45, market: 'Full GCC' },
];

const roadmapPhases = [
  { phase: 'Phase 1', title: 'Foundation', timeline: 'Q4 2026', color: 'border-green-500', bgColor: 'bg-green-500/10', milestones: ['B2B food marketplace (UAE)', 'Supplier onboarding (500+)', 'BizOne F&B merchant integration', 'Basic quality & compliance', 'Wasil Food delivery integration', 'Inventora warehouse connection'] },
  { phase: 'Phase 2', title: 'Full Supply Chain', timeline: 'Q1-Q2 2027', color: 'border-blue-500', bgColor: 'bg-blue-500/10', milestones: ['Cold chain IoT monitoring', 'Farm-to-table traceability', 'Full compliance suite (Amana)', 'Demand forecasting AI', 'Consumer launch', '2,000+ suppliers'] },
  { phase: 'Phase 3', title: 'GCC Expansion', timeline: 'Q3-Q4 2027', color: 'border-purple-500', bgColor: 'bg-purple-500/10', milestones: ['KSA market (Riyadh, Jeddah)', 'Cross-border food sourcing', 'Halal supply chain certification', 'Enterprise distribution tools', 'GMV: AED 250M+'] },
  { phase: 'Phase 4', title: 'Food Security Platform', timeline: '2028', color: 'border-[#c9a227]', bgColor: 'bg-[#c9a227]/10', milestones: ['Full 6-country GCC', 'Government food security partnerships', 'Carbon footprint marketplace', 'Vertical farming partnerships', 'GMV: AED 800M+, 5K+ suppliers'] },
];

const risks = [
  { risk: 'Supplier onboarding and quality consistency', severity: 'high', mitigation: ['Strict verification and onboarding process', 'Quality scoring based on delivery history', 'Regular audit program', 'Escrow payment protection'] },
  { risk: 'Perishable goods logistics complexity', severity: 'high', mitigation: ['Cold chain IoT monitoring', 'Wasil fleet with refrigeration', 'Short delivery windows', 'Waste prediction algorithms'] },
  { risk: 'Low margins in food distribution (5-10%)', severity: 'medium', mitigation: ['SaaS fees (not just marketplace commission)', 'Value-added services (quality, compliance, analytics)', 'Volume-based pricing tiers', 'Vertical integration opportunities'] },
  { risk: 'Food safety incidents and liability', severity: 'critical', mitigation: ['Full traceability for rapid recall', 'Insurance coverage (Daman)', 'HACCP compliance enforcement', 'Supplier liability agreements'] },
];

const rtmnCompanies = [
  { name: 'Wasil Food', needs: 'Restaurant supply sourcing, delivery fleet, cold chain', icon: Package, color: 'text-orange-400' },
  { name: 'BizOne F&B Merchants', needs: 'Ingredient sourcing, bulk ordering, supplier management', icon: Store, color: 'text-blue-400' },
  { name: 'Inventora', needs: 'Warehouse management, inventory sync, distribution', icon: Building2, color: 'text-purple-400' },
  { name: 'Eventora', needs: 'Catering supply, bulk event food procurement', icon: Star, color: 'text-violet-400' },
  { name: 'Amana', needs: 'Food safety compliance, HACCP audits, halal certification', icon: Shield, color: 'text-teal-400' },
];

const corporateStructure = { parentCompany: 'Inventora', entity: 'Mazra AgriTech', ownership: '100% owned by Inventora (RTMN Group)', type: 'AgriTech — Food Supply Chain Platform', regulator: 'Municipality, SFDA, Customs' };

export default function MazraPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Wheat },
    { id: 'modules', label: '6 Modules', icon: Layers },
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
          <Link href="/inventora" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-4 text-sm"><ArrowRight className="w-4 h-4 rotate-180" /> Back to Inventora</Link>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20"><Wheat className="w-7 h-7 sm:w-10 sm:h-10 text-white" /></div>
                <div><h1 className="text-3xl sm:text-5xl font-black text-white">Mazra <span className="text-green-400">مزرعة</span></h1><p className="text-green-400 text-sm sm:text-lg font-medium">Farm to Fork, Digitized.</p></div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">The <span className="text-green-400 font-medium">GCC food supply chain platform</span>. B2B sourcing, cold chain, farm-to-table traceability — <span className="text-amber-400 font-medium">supporting GCC food security</span>.</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full"><HeartHandshake className="w-4 h-4 text-[#c9a227]" /><span className="text-[#c9a227] text-xs sm:text-sm font-medium">An Inventora Product</span></div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">{keyStats.map((stat, i) => (<div key={i} className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center min-w-[120px]"><div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div><div className="text-[10px] sm:text-xs text-slate-400">{stat.suffix}</div><div className="text-[10px] sm:text-xs text-slate-500 mt-1">{stat.label}</div></div>))}</div>
          </div>
          <div className="mt-8 bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-4 sm:p-6 border border-green-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div><div className="flex items-center gap-2 mb-2"><Zap className="w-5 h-5 text-green-400" /><span className="text-lg font-bold text-white">The Core Promise</span></div><p className="text-xl sm:text-2xl font-bold text-white"><span className="text-green-400">Know your food.</span> From <span className="text-amber-400">farm to fork.</span></p></div>
              <div className="flex gap-3"><div className="bg-slate-900/50 rounded-lg p-3 text-center"><div className="text-2xl font-bold text-green-400">85%</div><div className="text-xs text-slate-400">Imported</div></div><div className="bg-slate-900/50 rounded-lg p-3 text-center"><div className="text-2xl font-bold text-[#c9a227]">$30B</div><div className="text-xs text-slate-400">Food Market</div></div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex overflow-x-auto py-2 gap-1 sm:gap-2 scrollbar-hide">{tabs.map((tab) => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab.id ? 'bg-green-500 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}><tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />{tab.label}</button>))}</div></div></div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-green-400" /> Executive Summary</h2>
              <p className="text-slate-300"><strong className="text-white">Mazra</strong> (مزرعة — &quot;farm&quot;) is the GCC&apos;s food supply chain platform. The GCC imports <strong className="text-red-400">85% of its food</strong> — a $30B+ market with massive inefficiency. Mazra connects <strong className="text-green-400">farmers, suppliers, and F&B businesses</strong> with B2B sourcing, cold chain monitoring, farm-to-table traceability, and AI demand forecasting. Aligned with <strong className="text-amber-400">UAE Food Security Strategy 2051</strong>.</p>
            </div>
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-6 border border-green-500/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-green-400" /> Corporate Structure</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">{[['Parent Company', corporateStructure.parentCompany], ['Entity Name', corporateStructure.entity], ['Ownership', corporateStructure.ownership]].map(([l, v]) => (<div key={l} className="flex justify-between py-2 border-b border-slate-700/50"><span className="text-slate-400">{l}</span><span className="text-white font-medium text-sm text-right">{v}</span></div>))}</div>
                <div className="space-y-3">{[['Product Type', corporateStructure.type], ['Regulation', corporateStructure.regulator], ['Integration', 'Inventora + Wasil + BizOne + Amana']].map(([l, v]) => (<div key={l} className="flex justify-between py-2 border-b border-slate-700/50"><span className="text-slate-400">{l}</span><span className="text-white font-medium text-right text-sm">{v}</span></div>))}</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'modules' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-6 border border-green-500/30"><h2 className="text-xl font-bold text-white mb-2">6 Supply Chain Modules</h2><p className="text-slate-400">End-to-end food supply chain — from farm sourcing to restaurant delivery.</p></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {supplyModules.map((mod) => {
                const Icon = mod.icon; const isActive = activeModule === mod.id;
                return (<button key={mod.id} onClick={() => setActiveModule(isActive ? null : mod.id)} className={`text-left rounded-xl border p-5 transition-all ${isActive ? `${mod.bgColor} ${mod.borderColor} ring-1 ring-current` : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50'}`}><div className="flex items-center gap-3 mb-2"><div className={`w-10 h-10 rounded-xl ${mod.bgColor} ${mod.borderColor} border flex items-center justify-center`}><Icon className={`w-5 h-5 ${mod.color}`} /></div><div><h3 className="text-white font-bold text-sm">{mod.name}</h3><span className="text-xs text-slate-500">{mod.arabic}</span></div></div><p className="text-xs text-slate-400 line-clamp-2">{mod.description}</p></button>);
              })}
            </div>
            {activeModule && (() => { const mod = supplyModules.find(m => m.id === activeModule); if (!mod) return null; const Icon = mod.icon; return (<div className={`rounded-xl border ${mod.borderColor} ${mod.bgColor} p-6`}><div className="flex items-center gap-3 mb-4"><Icon className={`w-6 h-6 ${mod.color}`} /><h3 className="text-xl font-bold text-white">{mod.name}</h3></div><p className="text-slate-300 mb-4">{mod.description}</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{mod.capabilities.map((cap, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className={`w-4 h-4 ${mod.color} shrink-0 mt-0.5`} /><span className="text-sm text-slate-300">{cap}</span></div>))}</div></div>); })()}
          </div>
        )}

        {activeTab === 'pricing' && (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{pricingTiers.map((tier) => (<div key={tier.tier} className={`rounded-xl border ${tier.color} ${tier.bgColor} p-6 relative ${tier.popular ? 'ring-2 ring-green-500/50' : ''}`}>{tier.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 bg-green-500 text-black rounded-full font-bold">Most Popular</span>}<h3 className="text-lg font-bold text-white">{tier.tier}</h3><div className="flex items-baseline gap-1 my-2"><span className="text-3xl font-black text-white">{tier.price}</span><span className="text-sm text-slate-400">{tier.period}</span></div><p className="text-xs text-slate-400 mb-4">{tier.target}</p><ul className="space-y-2">{tier.features.map((f, i) => (<li key={i} className="text-xs text-slate-300 flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />{f}</li>))}</ul></div>))}</div>)}

        {activeTab === 'rtmn' && (<div className="space-y-8"><div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-6 border-2 border-[#c9a227]"><h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Network className="w-5 h-5 text-[#c9a227]" /> RTMN Food Supply Chain</h2><p className="text-slate-300">Mazra connects the food supply chain across RTMN — from Wasil delivery to BizOne F&B merchants to Inventora warehousing.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{rtmnCompanies.map((c) => { const Icon = c.icon; return (<div key={c.name} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 flex items-start gap-3"><Icon className={`w-5 h-5 ${c.color} shrink-0 mt-0.5`} /><div><h3 className="text-white font-bold text-sm">{c.name}</h3><p className="text-xs text-slate-400 mt-0.5">{c.needs}</p></div></div>); })}</div></div>)}

        {activeTab === 'financials' && (<div className="space-y-8"><div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"><h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-green-400" /> Financial Projections</h2><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700/50">{['Year', 'Suppliers', 'GMV (AED M)', 'Revenue (AED M)', 'Market'].map((h) => (<th key={h} className="text-left px-3 py-2 text-green-400 font-semibold">{h}</th>))}</tr></thead><tbody>{financialProjections.map((fp) => (<tr key={fp.year} className="border-b border-slate-800/50"><td className="px-3 py-3 text-white font-medium">{fp.year}</td><td className="px-3 py-3 text-slate-300">{fp.suppliers}</td><td className="px-3 py-3 text-slate-300">{fp.gmv}M</td><td className="px-3 py-3 text-emerald-400 font-bold">{fp.revenue}M</td><td className="px-3 py-3 text-slate-400">{fp.market}</td></tr>))}</tbody></table></div></div><div className="grid grid-cols-2 lg:grid-cols-4 gap-3">{[{ label: 'GCC Food Market', value: '$30B+', sub: 'Annual imports' }, { label: 'Food Waste', value: '33%', sub: 'Lost in supply chain' }, { label: 'F&B Businesses', value: '200K+', sub: 'In GCC' }, { label: 'Food Security', value: '#1', sub: 'GCC national priority' }].map((m) => (<div key={m.label} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50"><div className="text-2xl font-bold text-white">{m.value}</div><div className="text-xs text-slate-400 mt-1">{m.sub}</div><div className="text-xs text-slate-500 mt-1">{m.label}</div></div>))}</div></div>)}

        {activeTab === 'roadmap' && (<div className="space-y-6">{roadmapPhases.map((phase) => (<div key={phase.phase} className={`${phase.bgColor} rounded-xl p-6 border-2 ${phase.color}`}><div className="flex items-center justify-between mb-4"><div><span className="text-xs text-slate-400">{phase.phase}</span><h3 className="text-lg font-bold text-white">{phase.title}</h3></div><span className="text-sm text-slate-300 font-medium">{phase.timeline}</span></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{phase.milestones.map((m, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{m}</span></div>))}</div></div>))}</div>)}

        {activeTab === 'competition' && (<div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"><h2 className="text-xl font-bold text-white mb-4">Competitive Comparison</h2><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700/50">{['', 'B2B', 'Cold Chain', 'Traceability', 'Compliance', 'Logistics', 'Arabic', 'Price'].map((h) => (<th key={h} className="text-left px-2 py-2 text-green-400 font-semibold whitespace-nowrap text-xs">{h}</th>))}</tr></thead><tbody>{competitors.map((c) => (<tr key={c.name} className={`border-b border-slate-800/50 ${c.name === 'Mazra' ? 'bg-green-500/10' : ''}`}><td className="px-2 py-2 text-white font-bold whitespace-nowrap">{c.name}</td>{[c.b2b, c.coldchain, c.traceability, c.compliance, c.logistics, c.arabic, c.price].map((val, j) => (<td key={j} className={`px-2 py-2 whitespace-nowrap text-xs ${val.startsWith('✅') ? 'text-emerald-400' : val.startsWith('❌') ? 'text-red-400' : 'text-amber-400'}`}>{val}</td>))}</tr>))}</tbody></table></div></div>)}

        {activeTab === 'risks' && (<div className="space-y-4">{risks.map((r) => (<div key={r.risk} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden"><button onClick={() => setExpandedRisk(expandedRisk === r.risk ? null : r.risk)} className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-800/50 transition-colors"><div className="flex items-center gap-3"><span className={`px-2 py-0.5 rounded text-xs font-bold ${r.severity === 'critical' ? 'bg-red-500/20 text-red-400' : r.severity === 'high' ? 'bg-orange-500/20 text-orange-400' : 'bg-amber-500/20 text-amber-400'}`}>{r.severity.toUpperCase()}</span><span className="text-white font-medium text-sm">{r.risk}</span></div>{expandedRisk === r.risk ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}</button>{expandedRisk === r.risk && (<div className="px-5 pb-4"><div className="space-y-2">{r.mitigation.map((m, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{m}</span></div>))}</div></div>)}</div>))}</div>)}
      </main>

      <section className="py-12 px-4 border-t border-slate-800/50"><div className="max-w-4xl mx-auto text-center"><h2 className="text-2xl font-bold text-white mb-4">Farm to Fork, Digitized.</h2><p className="text-slate-400 mb-8">6 modules. B2B sourcing. Cold chain. Food security. One platform.</p><div className="flex flex-wrap justify-center gap-4"><Link href="/inventora" className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-500 transition-colors"><Package className="w-5 h-5" /> Inventora</Link><Link href="/wasil" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-500 transition-colors"><Truck className="w-5 h-5" /> Wasil Delivery</Link><Link href="/amana" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-500 transition-colors"><Shield className="w-5 h-5" /> Amana Compliance</Link></div></div></section>
      <GlobalFooter />
    </div>
  );
}
