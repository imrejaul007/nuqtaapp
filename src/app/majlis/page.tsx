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
  Code, Monitor, UserCheck, Heart,
  Crown, Store, Package, Target, Rocket,
  Calculator, Wallet, HeartHandshake,
  Network, Sparkles, MessageCircle, ThumbsUp,
  Share2, ShoppingBag, Map, Megaphone
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

const keyStats = [
  { label: 'Community Modules', value: '6', suffix: 'features', color: 'text-pink-400' },
  { label: 'Target Users', value: '1M+', suffix: 'Year 2', color: 'text-blue-400' },
  { label: 'GCC Cities', value: '20+', suffix: 'hyperlocal', color: 'text-emerald-400' },
  { label: 'Ecosystem', value: '25+', suffix: 'apps connected', color: 'text-amber-400' },
];

const communityModules = [
  {
    id: 'reviews', name: 'Reviews & Ratings', arabic: 'تقييمات', icon: Star,
    color: 'text-amber-400', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/30',
    description: 'Verified reviews for BizOne merchants, Wasil restaurants, Rakab drivers, Aqar properties, and all ecosystem services.',
    capabilities: ['Verified purchase reviews only', 'Photo & video reviews', 'Merchant response system', 'AI review fraud detection', 'Rating aggregation across platforms', 'Review rewards (NuqtaCoin)', 'BizOne merchant reputation score', 'Category-specific rating criteria'],
  },
  {
    id: 'local', name: 'Local Community Boards', arabic: 'مجتمع محلي', icon: Map,
    color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30',
    description: 'Hyperlocal community boards by neighborhood, building, and area. Recommendations, events, lost & found, and local news.',
    capabilities: ['Neighborhood discussion boards', 'Building/community groups', 'Local recommendation engine', 'Lost & found section', 'Area event calendar', 'Community polls & surveys', 'Moderation tools', 'Location-based notifications'],
  },
  {
    id: 'social', name: 'Social Commerce', arabic: 'تجارة اجتماعية', icon: ShoppingBag,
    color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30',
    description: 'Buy and sell within your community. Second-hand marketplace, skill exchange, and local services. Powered by NuqtaPay.',
    capabilities: ['Peer-to-peer marketplace', 'Second-hand goods buying/selling', 'Skill & service exchange', 'NuqtaPay secure payments', 'Delivery via Wasil', 'Seller verification (Nuqta ID)', 'Offer/counter-offer system', 'Category filters & search'],
  },
  {
    id: 'groups', name: 'Interest Groups', arabic: 'مجموعات', icon: Users,
    color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30',
    description: 'Create or join groups by interest — fitness, food, tech, parenting, photography, gaming. Events and meetups built-in.',
    capabilities: ['Create public/private groups', 'Interest-based matching', 'Group events & meetups', 'Content sharing (photos, links)', 'Group challenges with NuqtaCoin', 'Admin moderation tools', 'Eventora integration for meetups', 'Member directory & profiles'],
  },
  {
    id: 'influencer', name: 'Creator & Influencer Hub', arabic: 'صناع المحتوى', icon: Megaphone,
    color: 'text-pink-400', bgColor: 'bg-pink-500/10', borderColor: 'border-pink-500/30',
    description: 'Local content creators and influencers. Review products, share recommendations, earn via Adzy campaigns and affiliate referrals.',
    capabilities: ['Creator profiles & portfolios', 'Adzy campaign marketplace', 'Affiliate referral tracking', 'Sponsored content tools', 'Audience analytics', 'NuqtaCoin creator rewards', 'Merchant collaboration portal', 'Content performance insights'],
  },
  {
    id: 'referral', name: 'Referral Network', arabic: 'إحالات', icon: Share2,
    color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10', borderColor: 'border-[#c9a227]/30',
    description: 'Word-of-mouth growth engine. Refer friends to any RTMN product and earn NuqtaCoin. Track your referral tree and earnings.',
    capabilities: ['Unified referral across 25+ apps', 'NuqtaCoin rewards per referral', 'Referral tree visualization', 'Tiered rewards (bronze → gold)', 'Share via WhatsApp, SMS, link', 'Referral leaderboards', 'Merchant referral program', 'Campaign-specific bonus rewards'],
  },
];

const pricingTiers = [
  { tier: 'Free', price: 'Free', period: '', target: 'All Users', color: 'border-slate-500', bgColor: 'bg-slate-800/30', features: ['Reviews & ratings', 'Local community boards', 'Interest groups', 'Referral network', 'Basic marketplace', 'NuqtaCoin earning'], popular: true },
  { tier: 'Majlis+', price: 'AED 9.99', period: '/month', target: 'Power Users', color: 'border-pink-500', bgColor: 'bg-pink-500/10', features: ['All Free features', 'Featured listings in marketplace', 'Advanced creator tools', 'Group creation (unlimited)', 'Boosted referral rewards', 'Early access to deals', 'Ad-free experience'], popular: false },
  { tier: 'Merchant', price: 'AED 199', period: '/month', target: 'BizOne Merchants', color: 'border-emerald-500', bgColor: 'bg-emerald-500/10', features: ['Business profile & dashboard', 'Review management & response', 'Local promotion tools', 'Influencer collaboration', 'Customer insights', 'Community event sponsorship', 'Featured in local boards'], popular: false },
  { tier: 'RTMN Internal', price: 'Included', period: '', target: 'RTMN Ecosystem', color: 'border-[#c9a227]', bgColor: 'bg-[#c9a227]/10', features: ['Social layer for all 25+ apps', 'Referral engine built-in', 'Review system for all products', 'Community data insights', 'NuqtaCoin reward integration', 'Growth marketing fuel'], popular: false },
];

const competitors = [
  { name: 'Majlis', local: '✅ GCC', reviews: '✅ Verified', commerce: '✅ NuqtaPay', groups: '✅', ecosystem: '✅ 25+ apps', arabic: '✅', price: 'Free' },
  { name: 'Nextdoor', local: '⚠️ US-focused', reviews: '⚠️', commerce: '⚠️', groups: '✅', ecosystem: '❌', arabic: '❌', price: 'Free' },
  { name: 'Dubizzle', local: '⚠️ UAE', reviews: '⚠️', commerce: '✅', groups: '❌', ecosystem: '❌', arabic: '✅', price: 'Free + fees' },
  { name: 'WhatsApp Groups', local: '✅', reviews: '❌', commerce: '❌', groups: '✅', ecosystem: '❌', arabic: '✅', price: 'Free' },
];

const financialProjections = [
  { year: 'Year 1', mau: '200K', transactions: '10K', revenue: 2, market: 'UAE (Dubai + Abu Dhabi)' },
  { year: 'Year 2', mau: '1M', transactions: '100K', revenue: 10, market: 'UAE + KSA' },
  { year: 'Year 3', mau: '3M+', transactions: '500K+', revenue: 30, market: 'Full GCC' },
];

const roadmapPhases = [
  { phase: 'Phase 1', title: 'Foundation', timeline: 'Q4 2026', color: 'border-pink-500', bgColor: 'bg-pink-500/10', milestones: ['Reviews & ratings system', 'Referral network (all RTMN apps)', 'Local community boards (Dubai, Abu Dhabi)', 'Basic social profiles', 'NuqtaCoin integration', 'Nuqta app integration'] },
  { phase: 'Phase 2', title: 'Social Commerce', timeline: 'Q1 2027', color: 'border-blue-500', bgColor: 'bg-blue-500/10', milestones: ['Peer-to-peer marketplace', 'Interest groups & meetups', 'Creator/influencer hub', 'NuqtaPay for marketplace', 'Wasil delivery for goods', 'Public standalone app'] },
  { phase: 'Phase 3', title: 'GCC Communities', timeline: 'Q2-Q3 2027', color: 'border-purple-500', bgColor: 'bg-purple-500/10', milestones: ['KSA communities (Riyadh, Jeddah)', 'Bahrain communities', 'Merchant community tools', 'Adzy creator campaigns', 'Eventora meetup integration', '1M monthly active users'] },
  { phase: 'Phase 4', title: 'Social Ecosystem', timeline: 'H2 2027-2028', color: 'border-[#c9a227]', bgColor: 'bg-[#c9a227]/10', milestones: ['Full GCC community coverage', 'AI recommendation engine', 'Live shopping events', 'Community-driven content', 'Social loyalty programs', '3M+ MAU, social commerce GMV AED 100M+'] },
];

const risks = [
  { risk: 'Content moderation at scale (hate speech, fraud)', severity: 'critical', mitigation: ['AI content moderation (Arabic + English)', 'Community reporting system', 'Human moderation team', 'Clear community guidelines & enforcement'] },
  { risk: 'Low engagement — hard to build community habit', severity: 'high', mitigation: ['NuqtaCoin rewards for activity', 'Integration with existing Nuqta user base', 'Hyperlocal relevance (neighborhood-level)', 'Real utility (marketplace, reviews, referrals)'] },
  { risk: 'Competition from WhatsApp groups and social media', severity: 'medium', mitigation: ['Structured data (reviews, listings, events) vs chat noise', 'NuqtaPay for transactions (WhatsApp can not)', 'Ecosystem integration (25+ apps)', 'Verified identities and reviews'] },
  { risk: 'Marketplace fraud and scams', severity: 'high', mitigation: ['Nuqta ID verification for sellers', 'NuqtaPay escrow for transactions', 'Buyer/seller ratings', 'Dispute resolution system'] },
];

const rtmnCompanies = [
  { name: 'Nuqta (Super App)', needs: 'Social layer, referral engine, community engagement', icon: Crown, color: 'text-[#c9a227]' },
  { name: 'BizOne Merchants', needs: 'Customer reviews, local promotion, community presence', icon: Store, color: 'text-blue-400' },
  { name: 'Adzy', needs: 'Influencer/creator marketplace, campaign distribution', icon: Eye, color: 'text-red-400' },
  { name: 'Eventora', needs: 'Community meetup integration, event promotion', icon: Star, color: 'text-violet-400' },
  { name: 'All Products', needs: 'Referral network, social proof, user-generated content', icon: Network, color: 'text-emerald-400' },
];

const corporateStructure = { parentCompany: 'Nuqta Corporation', entity: 'Majlis Community Platform', ownership: '100% owned by Nuqta Corporation (RTMN Group)', type: 'Social — Community & Social Commerce', regulator: 'TDRA content regulations' };

export default function MajlisPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: MessageCircle },
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
          <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 mb-4 text-sm"><ArrowRight className="w-4 h-4 rotate-180" /> RTMN Ecosystem</Link>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-lg shadow-pink-500/20"><MessageCircle className="w-7 h-7 sm:w-10 sm:h-10 text-white" /></div>
                <div><h1 className="text-3xl sm:text-5xl font-black text-white">Majlis <span className="text-pink-400">مجلس</span></h1><p className="text-pink-400 text-sm sm:text-lg font-medium">Community, Connected.</p></div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">The <span className="text-pink-400 font-medium">GCC community platform</span>. Reviews, local boards, social commerce, interest groups — the <span className="text-amber-400 font-medium">social glue</span> that connects <span className="text-[#c9a227] font-medium">25+ RTMN apps</span>.</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full"><HeartHandshake className="w-4 h-4 text-[#c9a227]" /><span className="text-[#c9a227] text-xs sm:text-sm font-medium">A Nuqta Corporation Product</span></div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">{keyStats.map((stat, i) => (<div key={i} className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center min-w-[120px]"><div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div><div className="text-[10px] sm:text-xs text-slate-400">{stat.suffix}</div><div className="text-[10px] sm:text-xs text-slate-500 mt-1">{stat.label}</div></div>))}</div>
          </div>
          <div className="mt-8 bg-gradient-to-r from-pink-500/20 to-rose-500/10 rounded-xl p-4 sm:p-6 border border-pink-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div><div className="flex items-center gap-2 mb-2"><Zap className="w-5 h-5 text-pink-400" /><span className="text-lg font-bold text-white">The Core Promise</span></div><p className="text-xl sm:text-2xl font-bold text-white"><span className="text-pink-400">Your neighborhood.</span> Your <span className="text-amber-400">community.</span> Your app.</p></div>
              <div className="flex gap-3"><div className="bg-slate-900/50 rounded-lg p-3 text-center"><div className="text-2xl font-bold text-pink-400">20+</div><div className="text-xs text-slate-400">Cities</div></div><div className="bg-slate-900/50 rounded-lg p-3 text-center"><div className="text-2xl font-bold text-[#c9a227]">25+</div><div className="text-xs text-slate-400">Apps</div></div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex overflow-x-auto py-2 gap-1 sm:gap-2 scrollbar-hide">{tabs.map((tab) => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab.id ? 'bg-pink-500 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}><tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />{tab.label}</button>))}</div></div></div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (<div className="space-y-8"><div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"><h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-pink-400" /> Executive Summary</h2><p className="text-slate-300"><strong className="text-white">Majlis</strong> (مجلس — &quot;gathering place&quot;) is the social and community layer of the RTMN ecosystem. It connects <strong className="text-pink-400">25+ apps</strong> with verified reviews, local community boards, social commerce, interest groups, and a powerful referral network. Majlis drives organic discovery, trust (via reviews), and growth (via referrals) for every product in the ecosystem. Monetized through <strong className="text-emerald-400">social commerce</strong>, <strong className="text-amber-400">merchant tools</strong>, and <strong className="text-purple-400">creator campaigns</strong>.</p></div><div className="bg-gradient-to-r from-pink-500/10 to-rose-500/5 rounded-xl p-6 border border-pink-500/30"><h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-pink-400" /> Corporate Structure</h2><div className="grid grid-cols-1 sm:grid-cols-2 gap-6"><div className="space-y-3">{[['Parent Company', corporateStructure.parentCompany], ['Entity Name', corporateStructure.entity], ['Ownership', corporateStructure.ownership]].map(([l, v]) => (<div key={l} className="flex justify-between py-2 border-b border-slate-700/50"><span className="text-slate-400">{l}</span><span className="text-white font-medium text-sm text-right">{v}</span></div>))}</div><div className="space-y-3">{[['Product Type', corporateStructure.type], ['Regulation', corporateStructure.regulator], ['Integration', 'All 25+ RTMN apps + NuqtaCoin']].map(([l, v]) => (<div key={l} className="flex justify-between py-2 border-b border-slate-700/50"><span className="text-slate-400">{l}</span><span className="text-white font-medium text-right text-sm">{v}</span></div>))}</div></div></div></div>)}

        {activeTab === 'modules' && (<div className="space-y-8"><div className="bg-gradient-to-r from-pink-500/10 to-rose-500/5 rounded-xl p-6 border border-pink-500/30"><h2 className="text-xl font-bold text-white mb-2">6 Community Modules</h2><p className="text-slate-400">The social infrastructure powering the RTMN ecosystem — reviews, community, commerce, and growth.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{communityModules.map((mod) => { const Icon = mod.icon; const isActive = activeModule === mod.id; return (<button key={mod.id} onClick={() => setActiveModule(isActive ? null : mod.id)} className={`text-left rounded-xl border p-5 transition-all ${isActive ? `${mod.bgColor} ${mod.borderColor} ring-1 ring-current` : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50'}`}><div className="flex items-center gap-3 mb-2"><div className={`w-10 h-10 rounded-xl ${mod.bgColor} ${mod.borderColor} border flex items-center justify-center`}><Icon className={`w-5 h-5 ${mod.color}`} /></div><div><h3 className="text-white font-bold text-sm">{mod.name}</h3><span className="text-xs text-slate-500">{mod.arabic}</span></div></div><p className="text-xs text-slate-400 line-clamp-2">{mod.description}</p></button>); })}</div>{activeModule && (() => { const mod = communityModules.find(m => m.id === activeModule); if (!mod) return null; const Icon = mod.icon; return (<div className={`rounded-xl border ${mod.borderColor} ${mod.bgColor} p-6`}><div className="flex items-center gap-3 mb-4"><Icon className={`w-6 h-6 ${mod.color}`} /><h3 className="text-xl font-bold text-white">{mod.name}</h3></div><p className="text-slate-300 mb-4">{mod.description}</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{mod.capabilities.map((cap, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className={`w-4 h-4 ${mod.color} shrink-0 mt-0.5`} /><span className="text-sm text-slate-300">{cap}</span></div>))}</div></div>); })()}</div>)}

        {activeTab === 'pricing' && (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{pricingTiers.map((tier) => (<div key={tier.tier} className={`rounded-xl border ${tier.color} ${tier.bgColor} p-6 relative ${tier.popular ? 'ring-2 ring-pink-500/50' : ''}`}>{tier.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 bg-pink-500 text-white rounded-full font-bold">Free for All</span>}<h3 className="text-lg font-bold text-white">{tier.tier}</h3><div className="flex items-baseline gap-1 my-2"><span className="text-3xl font-black text-white">{tier.price}</span><span className="text-sm text-slate-400">{tier.period}</span></div><p className="text-xs text-slate-400 mb-4">{tier.target}</p><ul className="space-y-2">{tier.features.map((f, i) => (<li key={i} className="text-xs text-slate-300 flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />{f}</li>))}</ul></div>))}</div>)}

        {activeTab === 'rtmn' && (<div className="space-y-8"><div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-6 border-2 border-[#c9a227]"><h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Network className="w-5 h-5 text-[#c9a227]" /> The Social Layer of RTMN</h2><p className="text-slate-300">Majlis is the connective tissue of the RTMN ecosystem. Every app benefits from reviews (trust), referrals (growth), and community (engagement). It&apos;s not a standalone product — it&apos;s the social infrastructure.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{rtmnCompanies.map((c) => { const Icon = c.icon; return (<div key={c.name} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 flex items-start gap-3"><Icon className={`w-5 h-5 ${c.color} shrink-0 mt-0.5`} /><div><h3 className="text-white font-bold text-sm">{c.name}</h3><p className="text-xs text-slate-400 mt-0.5">{c.needs}</p></div></div>); })}</div></div>)}

        {activeTab === 'financials' && (<div className="space-y-8"><div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"><h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-pink-400" /> Financial Projections</h2><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700/50">{['Year', 'MAU', 'Marketplace Transactions', 'Revenue (AED M)', 'Market'].map((h) => (<th key={h} className="text-left px-3 py-2 text-pink-400 font-semibold">{h}</th>))}</tr></thead><tbody>{financialProjections.map((fp) => (<tr key={fp.year} className="border-b border-slate-800/50"><td className="px-3 py-3 text-white font-medium">{fp.year}</td><td className="px-3 py-3 text-slate-300">{fp.mau}</td><td className="px-3 py-3 text-slate-300">{fp.transactions}</td><td className="px-3 py-3 text-emerald-400 font-bold">{fp.revenue}M</td><td className="px-3 py-3 text-slate-400">{fp.market}</td></tr>))}</tbody></table></div></div><div className="grid grid-cols-2 lg:grid-cols-4 gap-3">{[{ label: 'GCC Social Users', value: '25M+', sub: 'Active social media' }, { label: 'Social Commerce', value: '$5B', sub: 'GCC market by 2027' }, { label: 'Community Apps', value: '<3%', sub: 'Hyperlocal in GCC' }, { label: 'Referral Value', value: '5x', sub: 'vs paid acquisition' }].map((m) => (<div key={m.label} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50"><div className="text-2xl font-bold text-white">{m.value}</div><div className="text-xs text-slate-400 mt-1">{m.sub}</div><div className="text-xs text-slate-500 mt-1">{m.label}</div></div>))}</div></div>)}

        {activeTab === 'roadmap' && (<div className="space-y-6">{roadmapPhases.map((phase) => (<div key={phase.phase} className={`${phase.bgColor} rounded-xl p-6 border-2 ${phase.color}`}><div className="flex items-center justify-between mb-4"><div><span className="text-xs text-slate-400">{phase.phase}</span><h3 className="text-lg font-bold text-white">{phase.title}</h3></div><span className="text-sm text-slate-300 font-medium">{phase.timeline}</span></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{phase.milestones.map((m, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{m}</span></div>))}</div></div>))}</div>)}

        {activeTab === 'competition' && (<div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"><h2 className="text-xl font-bold text-white mb-4">Competitive Comparison</h2><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700/50">{['', 'Local', 'Reviews', 'Commerce', 'Groups', 'Ecosystem', 'Arabic', 'Price'].map((h) => (<th key={h} className="text-left px-2 py-2 text-pink-400 font-semibold whitespace-nowrap text-xs">{h}</th>))}</tr></thead><tbody>{competitors.map((c) => (<tr key={c.name} className={`border-b border-slate-800/50 ${c.name === 'Majlis' ? 'bg-pink-500/10' : ''}`}><td className="px-2 py-2 text-white font-bold whitespace-nowrap">{c.name}</td>{[c.local, c.reviews, c.commerce, c.groups, c.ecosystem, c.arabic, c.price].map((val, j) => (<td key={j} className={`px-2 py-2 whitespace-nowrap text-xs ${val.startsWith('✅') ? 'text-emerald-400' : val.startsWith('❌') ? 'text-red-400' : 'text-amber-400'}`}>{val}</td>))}</tr>))}</tbody></table></div></div>)}

        {activeTab === 'risks' && (<div className="space-y-4">{risks.map((r) => (<div key={r.risk} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden"><button onClick={() => setExpandedRisk(expandedRisk === r.risk ? null : r.risk)} className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-800/50 transition-colors"><div className="flex items-center gap-3"><span className={`px-2 py-0.5 rounded text-xs font-bold ${r.severity === 'critical' ? 'bg-red-500/20 text-red-400' : r.severity === 'high' ? 'bg-orange-500/20 text-orange-400' : 'bg-amber-500/20 text-amber-400'}`}>{r.severity.toUpperCase()}</span><span className="text-white font-medium text-sm">{r.risk}</span></div>{expandedRisk === r.risk ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}</button>{expandedRisk === r.risk && (<div className="px-5 pb-4"><div className="space-y-2">{r.mitigation.map((m, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{m}</span></div>))}</div></div>)}</div>))}</div>)}
      </main>

      <section className="py-12 px-4 border-t border-slate-800/50"><div className="max-w-4xl mx-auto text-center"><h2 className="text-2xl font-bold text-white mb-4">Community, Connected.</h2><p className="text-slate-400 mb-8">6 modules. Reviews. Social commerce. 25+ apps. Your community.</p><div className="flex flex-wrap justify-center gap-4"><Link href="/nuqta" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-black rounded-xl font-bold hover:bg-[#d4ad2e] transition-colors"><Crown className="w-5 h-5" /> Nuqta App</Link><Link href="/adzy" className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-500 transition-colors"><Eye className="w-5 h-5" /> Adzy Ads</Link><Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors"><Layers className="w-5 h-5" /> RTMN Ecosystem</Link></div></div></section>
      <GlobalFooter />
    </div>
  );
}
