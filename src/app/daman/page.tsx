'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Shield, Heart, FileText, Globe, BarChart3, Users, Lock,
  ArrowRight, CheckCircle, ChevronDown, ChevronUp,
  Activity, DollarSign, Zap, AlertTriangle, Settings,
  Building2, Search, Eye, Brain, Bell,
  BookOpen, CreditCard, Star, Clock,
  TrendingUp, Layers, Award, MapPin, Briefcase,
  Code, Monitor, UserCheck, Car, Home,
  Crown, Store, Package, Target, Rocket,
  Calculator, Wallet, HeartHandshake,
  ChevronRight, Network, Sparkles, PieChart,
  Stethoscope, Plane, Umbrella, Scale,
  ArrowUpRight
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

const keyStats = [
  { label: 'Insurance Types', value: '8', suffix: 'categories', color: 'text-emerald-400' },
  { label: 'Insurance Partners', value: '40+', suffix: 'providers', color: 'text-blue-400' },
  { label: 'GCC Markets', value: '6', suffix: 'countries', color: 'text-amber-400' },
  { label: 'Claims Processing', value: '<24h', suffix: 'digital', color: 'text-purple-400' },
];

const insuranceTypes = [
  {
    id: 'health', name: 'Health Insurance', arabic: 'تأمين صحي', icon: Stethoscope,
    color: 'text-red-400', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30',
    description: 'Mandatory health insurance comparison, enrollment, and claims management. DHA/DOH/CCHI compliant.',
    capabilities: ['Compare 40+ health plans side-by-side', 'Mandatory DHA/DOH compliance check', 'Group & individual enrollment', 'Pre-existing condition coverage finder', 'Network hospital directory (5,000+)', 'Digital insurance card', 'Cashless claims at network hospitals', 'Annual renewal auto-comparison'],
    mandatory: 'Yes — UAE (DHA), KSA (CCHI)',
    fineRange: 'AED 500/day per uninsured person',
    providers: ['Daman Health', 'Oman Insurance', 'AXA Gulf', 'Bupa Arabia', 'Tawuniya'],
  },
  {
    id: 'motor', name: 'Motor & Vehicle', arabic: 'تأمين مركبات', icon: Car,
    color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30',
    description: 'Vehicle insurance comparison — comprehensive vs third-party, fleet insurance, ride-hail coverage, and claims automation.',
    capabilities: ['Instant quote from 20+ providers', 'Comprehensive vs third-party comparison', 'Fleet insurance (bulk discounts)', 'Ride-hailing driver coverage (Rakab)', 'Digital policy documents', 'Accident claims with photo upload', 'Roadside assistance add-on', 'Agency repair vs cash settlement options'],
    mandatory: 'Yes — all GCC countries',
    fineRange: 'AED 500-5K + vehicle impound',
    providers: ['RSA', 'Orient Insurance', 'AIG', 'Salama', 'Wataniya'],
  },
  {
    id: 'property', name: 'Property & Home', arabic: 'تأمين ممتلكات', icon: Home,
    color: 'text-indigo-400', bgColor: 'bg-indigo-500/10', borderColor: 'border-indigo-500/30',
    description: 'Home, contents, landlord, and commercial property insurance. Covers fire, flood, theft, and natural disasters.',
    capabilities: ['Homeowner & tenant insurance', 'Landlord liability coverage', 'Commercial property insurance', 'Fire & natural disaster coverage', 'Contents & valuables protection', 'Construction all-risk (CAR)', 'Business interruption insurance', 'Strata/building insurance'],
    mandatory: 'Required by landlords/banks',
    fineRange: 'Bank/mortgage requirement',
    providers: ['AXA', 'Zurich', 'Allianz', 'QIC', 'GIG'],
  },
  {
    id: 'business', name: 'Business & SME', arabic: 'تأمين أعمال', icon: Briefcase,
    color: 'text-orange-400', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30',
    description: 'Comprehensive business insurance — professional indemnity, public liability, cyber, D&O, and trade credit.',
    capabilities: ['Professional indemnity insurance', 'Public liability coverage', 'Cyber insurance & data breach', 'Directors & Officers (D&O)', 'Trade credit insurance', 'Product liability', 'Employee practices liability', 'Key person insurance'],
    mandatory: 'PI required for licensed professions',
    fineRange: 'License condition',
    providers: ['Chubb', 'AIG', 'Hiscox', 'QBE', 'Tokio Marine'],
  },
  {
    id: 'life', name: 'Life & Savings', arabic: 'تأمين حياة', icon: Heart,
    color: 'text-pink-400', bgColor: 'bg-pink-500/10', borderColor: 'border-pink-500/30',
    description: 'Term life, whole life, savings plans, education plans, and retirement products. Shariah-compliant (Takaful) options.',
    capabilities: ['Term life insurance comparison', 'Whole life & endowment plans', 'Education savings plans', 'Retirement planning products', 'Takaful (Islamic insurance) options', 'Critical illness riders', 'Accidental death coverage', 'Family protection plans'],
    mandatory: 'Optional (recommended)',
    fineRange: 'N/A — voluntary',
    providers: ['MetLife', 'Zurich', 'Salama Takaful', 'ADNIC', 'Noor Takaful'],
  },
  {
    id: 'travel', name: 'Travel Insurance', arabic: 'تأمين سفر', icon: Plane,
    color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30',
    description: 'Trip insurance for medical emergencies, cancellations, lost baggage, and flight delays. Integrated with Safar bookings.',
    capabilities: ['Single trip & annual multi-trip', 'Medical emergency coverage abroad', 'Trip cancellation protection', 'Lost baggage compensation', 'Flight delay coverage', 'Adventure sports add-on', 'COVID-19 coverage', 'Schengen visa compliance'],
    mandatory: 'Required for Schengen/some countries',
    fineRange: 'Visa requirement',
    providers: ['Allianz Travel', 'AXA', 'Tawuniya', 'RSA', 'Orient'],
  },
  {
    id: 'micro', name: 'Micro-Insurance', arabic: 'تأمين مصغر', icon: Umbrella,
    color: 'text-violet-400', bgColor: 'bg-violet-500/10', borderColor: 'border-violet-500/30',
    description: 'Affordable, on-demand insurance for gig workers, delivery riders, and freelancers. Pay-per-day/delivery coverage.',
    capabilities: ['Delivery rider accident coverage', 'Freelancer liability insurance', 'Pay-per-day/per-delivery pricing', 'Instant activation via NuqtaPay', 'Gig worker health plans', 'Device & tool protection', 'Income protection (short-term)', 'Group micro-plans for fleet'],
    mandatory: 'Emerging regulation',
    fineRange: 'Varies by platform TOS',
    providers: ['Daman', 'Custom underwriting', 'Partner pools'],
  },
  {
    id: 'takaful', name: 'Takaful (Islamic)', arabic: 'تكافل', icon: BookOpen,
    color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10', borderColor: 'border-[#c9a227]/30',
    description: 'Shariah-compliant insurance across all categories. Cooperative risk-sharing model with surplus distribution.',
    capabilities: ['Family Takaful (life equivalent)', 'General Takaful (motor, property)', 'Health Takaful plans', 'Investment-linked Takaful', 'Shariah board certified products', 'Surplus distribution tracking', 'Wakala & Mudaraba models', 'Annual Shariah audit reports'],
    mandatory: 'Alternative to conventional',
    fineRange: 'N/A — Shariah option',
    providers: ['Salama', 'Noor Takaful', 'Takaful Emarat', 'Abu Dhabi National Takaful', 'Tawuniya'],
  },
];

const pricingTiers = [
  { tier: 'Consumer', price: 'Free', period: '', target: 'Individuals', color: 'border-slate-500', bgColor: 'bg-slate-800/30', features: ['Compare all insurance types', 'Get instant quotes', 'Digital policy vault', 'Renewal reminders', 'Basic claims submission'], popular: false },
  { tier: 'Business', price: 'AED 99', period: '/month', target: 'SMEs (1-50 employees)', color: 'border-emerald-500', bgColor: 'bg-emerald-500/10', features: ['All Consumer features', 'Group health enrollment', 'Fleet motor insurance', 'Business insurance suite', 'Claims dashboard', 'Dedicated account manager'], popular: true },
  { tier: 'Enterprise', price: 'AED 499', period: '/month', target: 'Corporates (50+)', color: 'border-purple-500', bgColor: 'bg-purple-500/10', features: ['All Business features', 'Custom underwriting', 'Multi-entity management', 'API integration', 'Risk analytics', 'Broker portal access', 'SLA on claims resolution'], popular: false },
  { tier: 'RTMN Internal', price: 'Custom', period: '', target: '10 RTMN Companies', color: 'border-[#c9a227]', bgColor: 'bg-[#c9a227]/10', features: ['All insurance types covered', 'Cross-company group rates', 'Rabtul Core integration', 'Tawzeef HR auto-enrollment', 'Centralized claims', 'Group negotiating power'], popular: false },
];

const competitors = [
  { name: 'Daman', types: '✅ 8', gcc: '✅ 6', arabic: '✅', takaful: '✅', micro: '✅', claims: '✅ <24h', ecosystem: '✅ RTMN', price: 'Free-499' },
  { name: 'Bayzat', types: '⚠️ 2', gcc: '⚠️ UAE', arabic: '⚠️', takaful: '❌', micro: '❌', claims: '⚠️ 3-5d', ecosystem: '❌', price: 'AED 15/ee' },
  { name: 'Aman', types: '⚠️ 3', gcc: '⚠️ UAE', arabic: '✅', takaful: '⚠️', micro: '❌', claims: '⚠️ 48h', ecosystem: '❌', price: 'Free' },
  { name: 'Yallacompare', types: '⚠️ 3', gcc: '⚠️ 2', arabic: '✅', takaful: '❌', micro: '❌', claims: '❌', ecosystem: '❌', price: 'Free' },
  { name: 'Brokers', types: '✅ All', gcc: '⚠️', arabic: '⚠️', takaful: '✅', micro: '❌', claims: '⚠️ 5-14d', ecosystem: '❌', price: '10-20% comm' },
];

const financialProjections = [
  { year: 'Year 1', policies: '10K', gwp: 15, revenue: 2, market: 'UAE — health + motor' },
  { year: 'Year 2', policies: '50K', gwp: 80, revenue: 10, market: 'UAE + KSA + Bahrain' },
  { year: 'Year 3', policies: '200K+', gwp: 350, revenue: 35, market: 'Full GCC + all types' },
];

const roadmapPhases = [
  { phase: 'Phase 1', title: 'Foundation', timeline: 'Q3 2026', color: 'border-emerald-500', bgColor: 'bg-emerald-500/10',
    milestones: ['Health insurance comparison & enrollment', 'Motor insurance comparison', 'RTMN group insurance deployment', 'Digital policy vault', 'Tawzeef HR integration', 'Partner with 15+ insurers'] },
  { phase: 'Phase 2', title: 'Full Coverage', timeline: 'Q4 2026', color: 'border-blue-500', bgColor: 'bg-blue-500/10',
    milestones: ['Property, business, life insurance', 'Travel insurance (Safar integration)', 'Takaful products launch', 'Digital claims processing', 'Public consumer launch', 'API for BizOne merchants'] },
  { phase: 'Phase 3', title: 'Innovation', timeline: 'Q1-Q2 2027', color: 'border-purple-500', bgColor: 'bg-purple-500/10',
    milestones: ['Micro-insurance for gig workers', 'KSA + Bahrain market expansion', 'AI risk scoring & pricing', 'Embedded insurance in Wasil/Rakab', '40+ insurance partners', '50,000 active policies'] },
  { phase: 'Phase 4', title: 'Market Leadership', timeline: 'H2 2027-2028', color: 'border-[#c9a227]', bgColor: 'bg-[#c9a227]/10',
    milestones: ['Full 6-country GCC coverage', 'Custom underwriting capabilities', 'Insurance-as-a-Service API', 'White-label for banks/fintechs', 'AED 350M+ gross written premium', '200K+ active policies'] },
];

const risks = [
  { risk: 'Regulatory licensing requirements in each GCC country', severity: 'high', mitigation: ['Partner model — broker license holders', 'Apply for insurance aggregator license (IA)', 'Legal counsel in each jurisdiction', 'Sandbox programs where available'] },
  { risk: 'Insurance company partner onboarding takes time', severity: 'high', mitigation: ['Start with top 5 insurers per market', 'API-first integration approach', 'Manual quote fallback during onboarding', 'Broker partnerships for instant access'] },
  { risk: 'Claims disputes and customer dissatisfaction', severity: 'medium', mitigation: ['Transparent claims tracking dashboard', '<24h digital claims processing', 'Ombudsman escalation path', 'Customer satisfaction SLA with insurers'] },
  { risk: 'Low margins on insurance aggregation (5-15% commission)', severity: 'medium', mitigation: ['Volume-based commission tiers', 'Value-added services (Daman Business/Enterprise)', 'Cross-sell across 8 insurance types', 'Embedded insurance higher margins'] },
];

const rtmnCompanies = [
  { name: 'Nuqta Corporation', needs: 'Group health, D&O, cyber insurance', icon: Crown, color: 'text-[#c9a227]' },
  { name: 'RTMN Finance', needs: 'PI, fidelity bond, trade credit', icon: DollarSign, color: 'text-emerald-400' },
  { name: 'BizOne', needs: 'Group health, cyber, PI for SaaS', icon: Store, color: 'text-blue-400' },
  { name: 'Wasil Apps', needs: 'Rider accident, fleet motor, micro-insurance', icon: Package, color: 'text-orange-400' },
  { name: 'Travel Co', needs: 'Travel insurance for all bookings, tour operator liability', icon: Globe, color: 'text-cyan-400' },
  { name: 'Inventora', needs: 'Warehouse property, goods-in-transit, workers comp', icon: Building2, color: 'text-purple-400' },
  { name: 'Rakab', needs: 'Driver accident, vehicle insurance, passenger liability', icon: MapPin, color: 'text-pink-400' },
  { name: 'Adzy', needs: 'Media liability, E&O, cyber insurance', icon: Eye, color: 'text-red-400' },
  { name: 'Eventora', needs: 'Event cancellation, public liability, crowd insurance', icon: Star, color: 'text-violet-400' },
  { name: 'Rabtul', needs: 'Cyber insurance, tech E&O, D&O', icon: Settings, color: 'text-indigo-400' },
];

const corporateStructure = {
  parentCompany: 'RTMN Finance',
  entity: 'Daman Insurance Marketplace',
  ownership: '100% owned by RTMN Finance (RTMN Group)',
  type: 'InsurTech — Insurance Aggregator & Marketplace',
  regulator: 'IA (UAE), SAMA (KSA) — broker/aggregator license',
};

function Expandable({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-slate-700/50 rounded-xl overflow-hidden mb-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-slate-800/50 hover:bg-slate-800/80 transition-colors text-left">
        <span className="font-semibold text-white">{title}</span>
        {open ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      {open && <div className="px-5 py-4 bg-slate-900/30">{children}</div>}
    </div>
  );
}


const controls = [
  'Insurance product marketplace',
  'Policy management & issuance',
  'Claims submission & processing',
  'Insurance comparison engine',
  'Digital insurance cards',
  'Renewal automation & alerts',
  'Group/corporate insurance',
  'Insurance analytics dashboard',
];

const doesNotOwn = [
  { item: 'Payment processing', reason: 'Managed by NuqtaPay' },
  { item: 'Health provider network', reason: 'Managed by Tabib' },
  { item: 'HR employee data', reason: 'Managed by Tawzeef' },
  { item: 'Compliance monitoring', reason: 'Managed by Amana' },
  { item: 'Government insurance filings', reason: 'Managed by Khedma' },
  { item: 'Customer identity / KYC', reason: 'Managed by Rabtul Core' },
  { item: 'Vehicle insurance claims data', reason: 'Managed by Rakab' },
  { item: 'Property insurance data', reason: 'Managed by Aqar' },
];

export default function DamanPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeType, setActiveType] = useState<string | null>(null);
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Heart },
    { id: 'types', label: '8 Insurance Types', icon: Layers },
    { id: 'platform', label: 'Platform', icon: Monitor },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'rtmn', label: 'RTMN Internal', icon: Network },
    { id: 'financials', label: 'Financials', icon: BarChart3 },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket },
    { id: 'competition', label: 'Competition', icon: Target },
    { id: 'risks', label: 'Risks', icon: AlertTriangle },
    { id: 'deck', label: 'Pitch Deck', icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-4 text-sm"><ArrowRight className="w-4 h-4 rotate-180" /> RTMN Ecosystem</Link>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/20"><Heart className="w-7 h-7 sm:w-10 sm:h-10 text-white" /></div>
                <div><h1 className="text-3xl sm:text-5xl font-black text-white">Daman <span className="text-emerald-400">ضمان</span></h1><p className="text-emerald-400 text-sm sm:text-lg font-medium">Insurance, Simplified.</p></div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">The <span className="text-emerald-400 font-medium">GCC insurance marketplace</span>. Compare, buy, and manage <span className="text-amber-400 font-medium">8 types of insurance</span> from 40+ providers — including <span className="text-[#c9a227] font-medium">Takaful</span>.</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full"><HeartHandshake className="w-4 h-4 text-[#c9a227]" /><span className="text-[#c9a227] text-xs sm:text-sm font-medium">An RTMN Finance Product</span></div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">{keyStats.map((stat, i) => (<div key={i} className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center min-w-[120px]"><div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div><div className="text-[10px] sm:text-xs text-slate-400">{stat.suffix}</div><div className="text-[10px] sm:text-xs text-slate-500 mt-1">{stat.label}</div></div>))}</div>
          </div>
          <div className="mt-8 bg-gradient-to-r from-emerald-500/20 to-green-500/10 rounded-xl p-4 sm:p-6 border border-emerald-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2"><Zap className="w-5 h-5 text-emerald-400" /><span className="text-lg font-bold text-white">The Core Promise</span></div>
                <p className="text-xl sm:text-2xl font-bold text-white"><span className="text-emerald-400">Best price, guaranteed.</span> Claims in <span className="text-amber-400">&lt;24 hours.</span></p>
              </div>
              <div className="flex gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center"><div className="text-2xl font-bold text-emerald-400">40+</div><div className="text-xs text-slate-400">Providers</div></div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center"><div className="text-2xl font-bold text-[#c9a227]">8</div><div className="text-xs text-slate-400">Types</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Controls / Does NOT Own */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-emerald-500/5 rounded-xl p-6 border border-emerald-500/30">
            <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> What Daman Controls</h3>
            <div className="space-y-2">{controls.map((c, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{c}</span></div>))}</div>
          </div>
          <div className="bg-orange-500/5 rounded-xl p-6 border border-orange-500/30">
            <h3 className="text-lg font-bold text-orange-400 mb-4 flex items-center gap-2"><ArrowRight className="w-5 h-5" /> Does NOT Own</h3>
            <div className="space-y-2">{doesNotOwn.map((d, i) => (<div key={i} className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300"><span className="text-white font-medium">{d.item}</span> \u2192 {d.reason}</span></div>))}</div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-2 gap-1 sm:gap-2 scrollbar-hide">{tabs.map((tab) => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab.id ? 'bg-emerald-500 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}><tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />{tab.label}</button>))}</div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-emerald-400" /> Executive Summary</h2>
              <p className="text-slate-300"><strong className="text-white">Daman</strong> (ضمان — &quot;guarantee/protection&quot;) is the GCC&apos;s first full-spectrum insurance marketplace covering <strong className="text-emerald-400">8 insurance categories</strong> with 40+ provider partners. From mandatory health and motor insurance to innovative <strong className="text-violet-400">micro-insurance</strong> for gig workers and <strong className="text-[#c9a227]">Takaful</strong> products. Built to serve RTMN&apos;s 10 companies and available as a public marketplace for every GCC resident and business.</p>
            </div>
            <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/5 rounded-xl p-6 border border-emerald-500/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-emerald-400" /> Corporate Structure</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">{[['Parent Company', corporateStructure.parentCompany], ['Entity Name', corporateStructure.entity], ['Ownership', corporateStructure.ownership]].map(([l, v]) => (<div key={l} className="flex justify-between py-2 border-b border-slate-700/50"><span className="text-slate-400">{l}</span><span className="text-white font-medium">{v}</span></div>))}</div>
                <div className="space-y-3">{[['Product Type', corporateStructure.type], ['Regulation', corporateStructure.regulator], ['Integration', 'Rabtul Core + Tawzeef + NuqtaPay']].map(([l, v]) => (<div key={l} className="flex justify-between py-2 border-b border-slate-700/50"><span className="text-slate-400">{l}</span><span className="text-white font-medium text-right text-sm">{v}</span></div>))}</div>
              </div>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">How Daman Works</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[{ step: 1, icon: Search, title: 'Compare', desc: 'Tell us what you need — get quotes from 40+ providers instantly' }, { step: 2, icon: Scale, title: 'Choose', desc: 'Compare coverage, price, network — AI recommends the best fit' }, { step: 3, icon: CreditCard, title: 'Buy', desc: 'Pay via NuqtaPay. Split with Qist BNPL. Policy issued instantly.' }, { step: 4, icon: Shield, title: 'Claim', desc: 'Digital claims in <24 hours. Photo upload. Cashless where possible.' }].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 text-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-3"><item.icon className="w-5 h-5 text-emerald-400" /></div>
                    <div className="text-xs text-emerald-400 mb-1">Step {item.step}</div>
                    <div className="text-sm font-bold text-white">{item.title}</div>
                    <div className="text-xs text-slate-400 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'types' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/5 rounded-xl p-6 border border-emerald-500/30">
              <h2 className="text-xl font-bold text-white mb-2">8 Insurance Categories</h2>
              <p className="text-slate-400">Every type of insurance a GCC resident or business needs — conventional and Takaful options for each.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {insuranceTypes.map((type) => {
                const Icon = type.icon;
                const isActive = activeType === type.id;
                return (
                  <button key={type.id} onClick={() => setActiveType(isActive ? null : type.id)} className={`text-left rounded-xl border p-5 transition-all ${isActive ? `${type.bgColor} ${type.borderColor} ring-1 ring-current` : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-xl ${type.bgColor} ${type.borderColor} border flex items-center justify-center`}><Icon className={`w-5 h-5 ${type.color}`} /></div>
                      <div><h3 className="text-white font-bold text-sm">{type.name}</h3><span className="text-xs text-slate-500">{type.arabic}</span></div>
                    </div>
                    <p className="text-xs text-slate-400 mb-2 line-clamp-2">{type.description}</p>
                    <span className={`text-xs ${type.mandatory.startsWith('Yes') ? 'text-red-400' : 'text-slate-500'}`}>{type.mandatory.startsWith('Yes') ? 'Mandatory' : type.mandatory}</span>
                  </button>
                );
              })}
            </div>
            {activeType && (() => {
              const type = insuranceTypes.find(t => t.id === activeType);
              if (!type) return null;
              const Icon = type.icon;
              return (
                <div className={`rounded-xl border ${type.borderColor} ${type.bgColor} p-6`}>
                  <div className="flex items-center gap-3 mb-4"><Icon className={`w-6 h-6 ${type.color}`} /><h3 className="text-xl font-bold text-white">{type.name}</h3><span className="text-xs px-3 py-1 bg-red-500/20 text-red-400 rounded-full">{type.fineRange}</span></div>
                  <p className="text-slate-300 mb-4">{type.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">{type.capabilities.map((cap, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className={`w-4 h-4 ${type.color} shrink-0 mt-0.5`} /><span className="text-sm text-slate-300">{cap}</span></div>))}</div>
                  <div className="border-t border-slate-700/50 pt-3 flex flex-wrap gap-1"><span className="text-xs text-slate-400 font-semibold mr-1">Top Providers: </span>{type.providers.map((p) => (<span key={p} className="text-xs px-2 py-0.5 bg-slate-700/50 rounded-full text-slate-300">{p}</span>))}</div>
                </div>
              );
            })()}
          </div>
        )}

        {activeTab === 'platform' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6">Platform Capabilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: Brain, title: 'AI Recommendation Engine', desc: 'Analyze your profile, budget, and needs to recommend the best insurance plan.' },
                  { icon: Search, title: 'Instant Quote Comparison', desc: 'Get quotes from 40+ providers in seconds. Side-by-side comparison of coverage and price.' },
                  { icon: Lock, title: 'Digital Policy Vault', desc: 'All your insurance policies in one place. Auto-renewal reminders. Never lose a document.' },
                  { icon: Activity, title: 'Claims Dashboard', desc: 'Track every claim in real-time. Photo upload, document submission, status updates.' },
                  { icon: Wallet, title: 'NuqtaPay Integration', desc: 'Pay premiums instantly. Split with Qist BNPL. Earn NuqtaCoin on purchases.' },
                  { icon: Globe, title: 'Arabic + English', desc: 'Full bilingual support. Policy documents, claims forms, and support in both languages.' },
                ].map((f) => { const Icon = f.icon; return (<div key={f.title} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50"><Icon className="w-5 h-5 text-emerald-400 mb-2" /><h4 className="text-white font-bold text-sm mb-1">{f.title}</h4><p className="text-xs text-slate-400">{f.desc}</p></div>); })}
              </div>
            </div>
            <Expandable title="Ecosystem Integrations" defaultOpen>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[{ name: 'NuqtaPay', desc: 'Premium payments & BNPL' }, { name: 'Tawzeef', desc: 'Auto-enroll employees' }, { name: 'Rakab', desc: 'Embedded driver insurance' }, { name: 'Safar', desc: 'Travel insurance at booking' }, { name: 'Sakin', desc: 'Property insurance with rent' }, { name: 'Wasil', desc: 'Rider micro-insurance' }, { name: 'BizOne', desc: 'Merchant business insurance' }, { name: 'Amana', desc: 'Insurance compliance tracking' }].map((i) => (<div key={i.name} className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50"><div className="text-white font-bold text-xs">{i.name}</div><div className="text-xs text-slate-400 mt-0.5">{i.desc}</div></div>))}
              </div>
            </Expandable>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{pricingTiers.map((tier) => (<div key={tier.tier} className={`rounded-xl border ${tier.color} ${tier.bgColor} p-6 relative ${tier.popular ? 'ring-2 ring-emerald-500/50' : ''}`}>{tier.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 bg-emerald-500 text-black rounded-full font-bold">Most Popular</span>}<h3 className="text-lg font-bold text-white">{tier.tier}</h3><div className="flex items-baseline gap-1 my-2"><span className="text-3xl font-black text-white">{tier.price}</span><span className="text-sm text-slate-400">{tier.period}</span></div><p className="text-xs text-slate-400 mb-4">{tier.target}</p><ul className="space-y-2">{tier.features.map((f, i) => (<li key={i} className="text-xs text-slate-300 flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />{f}</li>))}</ul></div>))}</div>
        )}

        {activeTab === 'rtmn' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Network className="w-5 h-5 text-[#c9a227]" /> RTMN Group Insurance</h2>
              <p className="text-slate-300">Daman provides centralized insurance management for all 10 RTMN companies — leveraging group buying power for better rates and coverage.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{rtmnCompanies.map((c) => { const Icon = c.icon; return (<div key={c.name} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 flex items-start gap-3"><Icon className={`w-5 h-5 ${c.color} shrink-0 mt-0.5`} /><div><h3 className="text-white font-bold text-sm">{c.name}</h3><p className="text-xs text-slate-400 mt-0.5">{c.needs}</p></div></div>); })}</div>
          </div>
        )}

        {activeTab === 'financials' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-emerald-400" /> Financial Projections</h2>
              <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700/50">{['Year', 'Policies', 'GWP (AED M)', 'Revenue (AED M)', 'Market'].map((h) => (<th key={h} className="text-left px-3 py-2 text-emerald-400 font-semibold">{h}</th>))}</tr></thead><tbody>{financialProjections.map((fp) => (<tr key={fp.year} className="border-b border-slate-800/50"><td className="px-3 py-3 text-white font-medium">{fp.year}</td><td className="px-3 py-3 text-slate-300">{fp.policies}</td><td className="px-3 py-3 text-slate-300">{fp.gwp}M</td><td className="px-3 py-3 text-emerald-400 font-bold">{fp.revenue}M</td><td className="px-3 py-3 text-slate-400">{fp.market}</td></tr>))}</tbody></table></div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[{ label: 'GCC Insurance Market', value: '$30B', sub: 'Total market size' }, { label: 'Digital Penetration', value: '<10%', sub: 'Bought online in GCC' }, { label: 'Mandatory Insurance', value: '2', sub: 'Health + Motor required' }, { label: 'Growth Rate', value: '22%', sub: 'InsurTech CAGR in MENA' }].map((m) => (<div key={m.label} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50"><div className="text-2xl font-bold text-white">{m.value}</div><div className="text-xs text-slate-400 mt-1">{m.sub}</div><div className="text-xs text-slate-500 mt-1">{m.label}</div></div>))}
            </div>
          </div>
        )}

        {activeTab === 'roadmap' && (
          <div className="space-y-6">{roadmapPhases.map((phase) => (<div key={phase.phase} className={`${phase.bgColor} rounded-xl p-6 border-2 ${phase.color}`}><div className="flex items-center justify-between mb-4"><div><span className="text-xs text-slate-400">{phase.phase}</span><h3 className="text-lg font-bold text-white">{phase.title}</h3></div><span className="text-sm text-slate-300 font-medium">{phase.timeline}</span></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{phase.milestones.map((m, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{m}</span></div>))}</div></div>))}</div>
        )}

        {activeTab === 'competition' && (
          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
            <h2 className="text-xl font-bold text-white mb-4">Competitive Comparison</h2>
            <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700/50">{['', 'Types', 'GCC', 'Arabic', 'Takaful', 'Micro', 'Claims', 'Ecosystem', 'Price'].map((h) => (<th key={h} className="text-left px-2 py-2 text-emerald-400 font-semibold whitespace-nowrap text-xs">{h}</th>))}</tr></thead><tbody>{competitors.map((c) => (<tr key={c.name} className={`border-b border-slate-800/50 ${c.name === 'Daman' ? 'bg-emerald-500/10' : ''}`}><td className="px-2 py-2 text-white font-bold whitespace-nowrap">{c.name}</td>{[c.types, c.gcc, c.arabic, c.takaful, c.micro, c.claims, c.ecosystem, c.price].map((val, j) => (<td key={j} className={`px-2 py-2 whitespace-nowrap text-xs ${val.startsWith('✅') ? 'text-emerald-400' : val.startsWith('❌') ? 'text-red-400' : 'text-amber-400'}`}>{val}</td>))}</tr>))}</tbody></table></div>
          </div>
        )}

        {activeTab === 'risks' && (
          <div className="space-y-4">{risks.map((r) => (<div key={r.risk} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden"><button onClick={() => setExpandedRisk(expandedRisk === r.risk ? null : r.risk)} className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-800/50 transition-colors"><div className="flex items-center gap-3"><span className={`px-2 py-0.5 rounded text-xs font-bold ${r.severity === 'critical' ? 'bg-red-500/20 text-red-400' : r.severity === 'high' ? 'bg-orange-500/20 text-orange-400' : 'bg-amber-500/20 text-amber-400'}`}>{r.severity.toUpperCase()}</span><span className="text-white font-medium text-sm">{r.risk}</span></div>{expandedRisk === r.risk ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}</button>{expandedRisk === r.risk && (<div className="px-5 pb-4"><div className="space-y-2">{r.mitigation.map((m, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{m}</span></div>))}</div></div>)}</div>))}</div>
        )}

        {activeTab === 'deck' && (
          <div className="space-y-8">
            {/* Investment Thesis */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-500/5 rounded-2xl p-6 border border-emerald-500/30">
              <h2 className="text-2xl font-bold text-white mb-2">Investment Thesis</h2>
              <p className="text-slate-300 leading-relaxed">Daman is the insurance layer embedded into every transaction across the RTMN ecosystem. Property leases trigger home insurance, travel bookings trigger travel cover, delivery gigs trigger rider protection. This embedded model creates a captive distribution channel that no standalone InsurTech can replicate, targeting $200M GWP by Year 3.</p>
            </div>

            {/* Market Opportunity */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Market Opportunity</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'TAM', value: '$30B', detail: 'GCC Insurance Market (2026)' },
                  { label: 'SAM', value: '$8B', detail: 'Digital-Addressable Segment' },
                  { label: 'SOM', value: '$200M', detail: 'Year 3 GWP Target' },
                ].map(m => (
                  <div key={m.label} className="bg-slate-800/30 rounded-xl p-4 text-center border border-slate-700/50">
                    <div className="text-xs text-slate-400">{m.label}</div>
                    <div className="text-2xl font-black text-white mt-1">{m.value}</div>
                    <div className="text-xs text-slate-500 mt-1">{m.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Differentiators */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Key Differentiators</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: 'One-Tap Comparison', desc: 'Compare 40+ insurers side-by-side. AI recommends the best fit based on your profile.' },
                  { title: 'Ecosystem-Embedded', desc: 'Buy property on Aqar? Insurance auto-offered. Book on Safar? Travel cover bundled.' },
                  { title: 'Digital Claims in <24h', desc: 'Photo upload, AI damage assessment, digital payout. No paper, no waiting.' },
                  { title: 'Bilingual + Takaful', desc: 'Full Arabic/English. Shariah-compliant Takaful options for every product line.' },
                  { title: '6 Insurance Lines', desc: 'Health, auto, property, device, travel, life -- covering every need in one platform.' },
                  { title: 'Micro-Insurance for Gig Workers', desc: 'Pay-per-delivery coverage for Wasil/Rakab riders. Emerging market segment.' },
                ].map(d => (
                  <div key={d.title} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div><span className="text-white font-semibold text-sm">{d.title}</span><span className="text-slate-400 text-sm"> — {d.desc}</span></div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Year Financial Projections */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">3-Year Financial Projections</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-slate-700/50">
                    {['Year', 'Policies', 'GWP', 'Total Revenue', 'Net Profit'].map(h => (
                      <th key={h} className="text-left px-3 py-2 text-emerald-400 font-semibold">{h}</th>
                    ))}
                  </tr></thead>
                  <tbody>
                    {[
                      { year: 'Year 1', policies: '15K', gwp: '30M AED', rev: '8M AED', net: '2M AED' },
                      { year: 'Year 2', policies: '120K', gwp: '100M AED', rev: '32M AED', net: '16M AED' },
                      { year: 'Year 3', policies: '500K', gwp: '200M AED', rev: '70M AED', net: '42M AED' },
                    ].map(r => (
                      <tr key={r.year} className="border-b border-slate-800/50">
                        <td className="px-3 py-3 text-white font-medium">{r.year}</td>
                        <td className="px-3 py-3 text-blue-400">{r.policies}</td>
                        <td className="px-3 py-3 text-slate-300">{r.gwp}</td>
                        <td className="px-3 py-3 text-emerald-400 font-bold">{r.rev}</td>
                        <td className="px-3 py-3 text-[#c9a227] font-bold">{r.net}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Comparable Companies */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Comparable Companies</h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Lemonade', val: '$2B', model: 'AI-first home/renters insurance' },
                  { name: 'Oscar Health', val: '$6B', model: 'Digital health insurance' },
                  { name: 'Root Insurance', val: '$1B', model: 'Telematics-based auto insurance' },
                ].map(c => (
                  <div key={c.name} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 text-center">
                    <div className="text-white font-bold">{c.name}</div>
                    <div className="text-emerald-400 text-lg font-black mt-1">{c.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{c.model}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unicorn Path */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ArrowUpRight className="w-5 h-5 text-emerald-400" /> Unicorn Path
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { stage: 'Seed', metric: '50K policies', timeline: 'Q4 2027', val: '~$100M' },
                  { stage: 'Series A', metric: '200K policies', timeline: 'Q2 2028', val: '~$300M' },
                  { stage: 'Series B', metric: '500K policies', timeline: 'Q4 2028', val: '~$600M' },
                  { stage: '$1B+', metric: '2M policies (GCC)', timeline: '2029+', val: '~$1.5B+' },
                ].map(s => (
                  <div key={s.stage} className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/30 text-center">
                    <div className="text-xs text-emerald-400 font-bold">{s.stage}</div>
                    <div className="text-white font-bold text-sm mt-1">{s.metric}</div>
                    <div className="text-lg font-black text-emerald-400 mt-1">{s.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{s.timeline}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RTMN Ecosystem Multiplier */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-transparent rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-[#c9a227] mb-3">RTMN Ecosystem Multiplier</h3>
              <p className="text-slate-300 text-sm mb-4">Daman&apos;s embedded insurance model is powered by deep integrations across the RTMN ecosystem.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  'Captive distribution via ecosystem',
                  'Data advantage from ecosystem',
                  'Cross-sell multiplier (2.4x)',
                  'Claims cost advantage',
                ].map(s => (
                  <div key={s} className="bg-[#c9a227]/10 rounded-lg px-3 py-2 text-center">
                    <span className="text-[#c9a227] text-xs font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <section className="py-12 px-4 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Insurance, Simplified.</h2>
          <p className="text-slate-400 mb-8">8 types. 40+ providers. Takaful included. One platform.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/qist" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-500 transition-colors"><Wallet className="w-5 h-5" /> Qist BNPL</Link>
            <Link href="/tawzeef" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-colors"><Users className="w-5 h-5" /> Tawzeef HR</Link>
            <Link href="/amana" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-500 transition-colors"><Shield className="w-5 h-5" /> Amana Compliance</Link>
          </div>
        </div>
      </section>
      <GlobalFooter />
    </div>
  );
}
