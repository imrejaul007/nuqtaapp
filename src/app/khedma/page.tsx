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
  Code, Monitor, UserCheck,
  Crown, Store, Package, Target, Rocket,
  Calculator, Wallet, HeartHandshake,
  Network, Sparkles, Stamp, Landmark,
  Fingerprint, Plane, ClipboardList, Heart,
  ArrowUpRight
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

const keyStats = [
  { label: 'Service Categories', value: '7', suffix: 'domains', color: 'text-amber-400' },
  { label: 'Government Portals', value: '25+', suffix: 'integrated', color: 'text-blue-400' },
  { label: 'GCC Countries', value: '6', suffix: 'coverage', color: 'text-emerald-400' },
  { label: 'Processing Time', value: '60%', suffix: 'faster', color: 'text-purple-400' },
];

const serviceCategories = [
  {
    id: 'visa', name: 'Visa & Immigration', arabic: 'تأشيرات', icon: Plane,
    color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30',
    description: 'Complete visa lifecycle — tourist, employment, investor, golden visa, family, student. Status tracking and document checklist.',
    capabilities: ['Tourist visa application', 'Employment visa processing', 'Golden Visa eligibility checker', 'Family/dependent visa', 'Visa renewal & cancellation', 'Status change applications', 'Medical fitness booking', 'Emirates ID appointment'],
    portals: ['GDRFA', 'ICP', 'Jawazat (KSA)', 'NPRA (Bahrain)'],
    avgTime: '2-5 days (vs 10-15 manual)',
  },
  {
    id: 'licensing', name: 'Business Licensing', arabic: 'تراخيص', icon: Stamp,
    color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30',
    description: 'Trade license application, renewal, amendment, and activity addition. Free zone and mainland. All emirates and KSA.',
    capabilities: ['New trade license application', 'License renewal (auto-alert 60 days)', 'Activity addition/modification', 'Free zone vs mainland comparison', 'E-commerce license application', 'Professional license processing', 'Industrial license support', 'Branch/outlet license'],
    portals: ['DET', 'ADDED', 'MoE', 'DMCC', 'DIFC', 'ADGM', 'MCI (KSA)'],
    avgTime: '1-3 days (vs 7-14 manual)',
  },
  {
    id: 'labor', name: 'Labor & MOHRE', arabic: 'عمل', icon: Users,
    color: 'text-orange-400', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30',
    description: 'Labor card, work permit, contract registration, WPS setup, labor dispute filing, and MOHRE compliance.',
    capabilities: ['Work permit application', 'Labor card issuance/renewal', 'Contract registration (Arabic)', 'WPS bank registration', 'Establishment card renewal', 'Labor dispute filing', 'Salary dispute support', 'MOHRE inspection preparation'],
    portals: ['MOHRE', 'Tasheel', 'MoL (KSA)', 'LMRA (Bahrain)'],
    avgTime: '1-2 days (vs 5-7 manual)',
  },
  {
    id: 'attestation', name: 'Document Attestation', arabic: 'تصديق', icon: FileText,
    color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30',
    description: 'Document attestation, legalization, apostille, and translation. Educational certificates, commercial documents, personal documents.',
    capabilities: ['MOFA attestation processing', 'Embassy legalization', 'Apostille services', 'Educational certificate attestation', 'Commercial document legalization', 'Power of Attorney attestation', 'Marriage/birth certificate attestation', 'Certified Arabic translation'],
    portals: ['MOFA', 'Embassies', 'Notary Public', 'Courts'],
    avgTime: '3-5 days (vs 14-21 manual)',
  },
  {
    id: 'property', name: 'Property & Land', arabic: 'عقارات', icon: Building2,
    color: 'text-indigo-400', bgColor: 'bg-indigo-500/10', borderColor: 'border-indigo-500/30',
    description: 'Property registration, Ejari, Tawtheeq, title deed transfer, NOC processing, and municipality permits.',
    capabilities: ['Ejari registration (Dubai)', 'Tawtheeq registration (Abu Dhabi)', 'Title deed transfer', 'Developer NOC processing', 'Municipality building permits', 'Property valuation requests', 'Mortgage pre-approval docs', 'RERA agent registration'],
    portals: ['DLD', 'RERA', 'ADDA', 'Municipalities'],
    avgTime: '1-3 days (vs 5-10 manual)',
  },
  {
    id: 'vehicle', name: 'Vehicle & Transport', arabic: 'مركبات', icon: MapPin,
    color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30',
    description: 'Vehicle registration, transfer, export, fine payment, license renewal, and fleet management services.',
    capabilities: ['Vehicle registration/renewal', 'Ownership transfer', 'Vehicle export certificate', 'Driving license application/renewal', 'Fine payment & dispute', 'Vehicle testing appointment', 'Fleet registration', 'Salik tag management'],
    portals: ['RTA', 'Abu Dhabi Police', 'Sharjah Roads', 'Moroor (KSA)'],
    avgTime: 'Same day (vs 2-3 days manual)',
  },
  {
    id: 'compliance', name: 'Regulatory Filing', arabic: 'امتثال', icon: Shield,
    color: 'text-red-400', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30',
    description: 'VAT returns, ESR filings, UBO declarations, annual returns, and regulatory submissions across all government bodies.',
    capabilities: ['VAT return submission (FTA)', 'Economic Substance filing (ESR)', 'Ultimate Beneficial Owner (UBO)', 'Annual return filing', 'AML registration (goAML)', 'Environmental reporting', 'Health & safety filings', 'Customs declarations'],
    portals: ['FTA', 'MoE', 'CBUAE', 'ZATCA (KSA)', 'NBR (Bahrain)'],
    avgTime: '1-2 days (vs 5-7 manual)',
  },
];

const pricingTiers = [
  { tier: 'Pay-per-Service', price: 'AED 49', period: '/service', target: 'Individuals', color: 'border-slate-500', bgColor: 'bg-slate-800/30', features: ['Single service processing', 'Document checklist', 'Status tracking', 'SMS/email updates', 'Standard processing'], popular: false },
  { tier: 'Business', price: 'AED 499', period: '/month', target: 'SMEs', color: 'border-amber-500', bgColor: 'bg-amber-500/10', features: ['Unlimited standard services', 'Visa processing (up to 20)', 'License renewals', 'Priority processing', 'Dedicated PRO agent', 'Document vault'], popular: true },
  { tier: 'Enterprise', price: 'AED 1,999', period: '/month', target: 'Corporates', color: 'border-purple-500', bgColor: 'bg-purple-500/10', features: ['All Business features', 'Unlimited visa/labor services', 'Multi-entity support', 'Express processing', 'Account manager', 'API integration', 'SLA guarantee'], popular: false },
  { tier: 'RTMN Internal', price: 'Custom', period: '', target: '10 RTMN Companies', color: 'border-[#c9a227]', bgColor: 'bg-[#c9a227]/10', features: ['All services for all companies', 'Centralized PRO operations', 'Cross-company dashboards', 'Tawzeef HR integration', 'Amana compliance feed', 'Bulk processing discounts'], popular: false },
];

const competitors = [
  { name: 'Khedma', digital: '✅', gcc: '✅ 6', arabic: '✅', track: '✅ Real-time', portals: '✅ 25+', api: '✅', price: 'AED 49/svc' },
  { name: 'PRO Companies', digital: '❌', gcc: '⚠️ 1-2', arabic: '✅', track: '⚠️ Manual', portals: '❌', api: '❌', price: 'AED 200-500/svc' },
  { name: 'Tas-heel', digital: '⚠️', gcc: '⚠️ UAE', arabic: '✅', track: '⚠️', portals: '⚠️ MOHRE', api: '❌', price: 'AED 100/svc' },
  { name: 'Tadbeer', digital: '⚠️', gcc: '⚠️ UAE', arabic: '✅', track: '⚠️', portals: '⚠️', api: '❌', price: 'AED 150/svc' },
];

const financialProjections = [
  { year: 'Year 1', transactions: '50K', revenue: 4, market: 'UAE — visa + licensing' },
  { year: 'Year 2', transactions: '200K', revenue: 15, market: 'UAE + KSA + Bahrain' },
  { year: 'Year 3', transactions: '500K+', revenue: 40, market: 'Full GCC' },
];

const roadmapPhases = [
  { phase: 'Phase 1', title: 'Foundation', timeline: 'Q3 2026', color: 'border-amber-500', bgColor: 'bg-amber-500/10', milestones: ['Visa & immigration services (UAE)', 'Business licensing (mainland + free zones)', 'RTMN internal PRO deployment', 'Status tracking dashboard', 'Arabic + English interface', 'Document checklist engine'] },
  { phase: 'Phase 2', title: 'Full Services', timeline: 'Q4 2026', color: 'border-blue-500', bgColor: 'bg-blue-500/10', milestones: ['Labor & MOHRE services', 'Document attestation', 'Property & vehicle services', 'Regulatory filing automation', 'Public launch (consumer + business)', 'Partner with 50+ PRO agents'] },
  { phase: 'Phase 3', title: 'GCC Expansion', timeline: 'Q1-Q2 2027', color: 'border-purple-500', bgColor: 'bg-purple-500/10', milestones: ['KSA government portals', 'Bahrain government portals', 'Enterprise API platform', 'Tawzeef deep integration', 'Amana compliance automation', '200K transactions/month'] },
  { phase: 'Phase 4', title: 'Digital Government Hub', timeline: 'H2 2027-2028', color: 'border-[#c9a227]', bgColor: 'bg-[#c9a227]/10', milestones: ['Full 6-country GCC coverage', 'AI document preparation', 'Government API partnerships', 'White-label for corporates', 'Blockchain document verification', '500K+ transactions/month'] },
];

const risks = [
  { risk: 'Government portal changes & API instability', severity: 'high', mitigation: ['Automated portal change detection', 'Manual fallback for all services', 'Partnership with government entities', 'Redundant processing pathways'] },
  { risk: 'Regulatory changes to PRO/typing requirements', severity: 'medium', mitigation: ['Legal team monitors all jurisdictions', 'Flexible service model', 'PRO agent network as fallback', 'Compliance with new typing center rules'] },
  { risk: 'Competition from government direct digital services', severity: 'medium', mitigation: ['Value-add: cross-service bundling', 'Enterprise features not in govt portals', 'Multi-jurisdiction (governments are single)', 'Aggregation + tracking + automation layer'] },
  { risk: 'Data privacy — handling personal documents', severity: 'critical', mitigation: ['SOC2 certified platform', 'Documents encrypted at rest + transit', 'Auto-deletion after processing', 'GCC data residency'] },
];

const rtmnCompanies = [
  { name: 'Nuqta Corporation', needs: 'Group visa processing, license renewals, MOFA attestation', icon: Crown, color: 'text-[#c9a227]' },
  { name: 'RTMN Finance', needs: 'CBUAE filings, RPSP license, regulatory submissions', icon: DollarSign, color: 'text-emerald-400' },
  { name: 'BizOne', needs: 'Trade licenses, activity amendments, establishment cards', icon: Store, color: 'text-blue-400' },
  { name: 'Wasil Apps', needs: 'Driver permits, vehicle registration, fleet licensing', icon: Package, color: 'text-orange-400' },
  { name: 'Travel Co', needs: 'DTCM license, tour operator permits, IATA registration', icon: Globe, color: 'text-cyan-400' },
  { name: 'Inventora', needs: 'Warehouse permits, customs bonding, import/export licenses', icon: Building2, color: 'text-purple-400' },
  { name: 'NextaBizz', needs: 'Marketplace licenses, cross-border trade permits', icon: Briefcase, color: 'text-pink-400' },
  { name: 'Adzy', needs: 'Media license, TDRA approvals, ad content clearance', icon: Eye, color: 'text-red-400' },
  { name: 'Eventora', needs: 'Event permits, civil defense NOC, temporary licenses', icon: Star, color: 'text-violet-400' },
  { name: 'Rabtul', needs: 'Tech license, data center approvals, NESA compliance', icon: Settings, color: 'text-indigo-400' },
];

const corporateStructure = { parentCompany: 'Nuqta Corporation', entity: 'Khedma Government Services', ownership: '100% owned by Nuqta Corporation (RTMN Group)', type: 'GovTech — Government Services Marketplace', regulator: 'Typing center / PRO service provider license' };

function Expandable({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (<div className="border border-slate-700/50 rounded-xl overflow-hidden mb-4"><button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-slate-800/50 hover:bg-slate-800/80 transition-colors text-left"><span className="font-semibold text-white">{title}</span>{open ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}</button>{open && <div className="px-5 py-4 bg-slate-900/30">{children}</div>}</div>);
}


const controls = [
  'Government service request orchestration',
  'PRO agent network management',
  'Document checklist & form engine',
  'Status tracking & notifications',
  'Bilingual forms (Arabic + English)',
  'Pricing & service packaging',
  'RTMN internal PRO operations',
  'GCC portal integration layer',
];

const doesNotOwn = [
  { item: 'User identity & KYC', reason: 'Managed by Rabtul Core' },
  { item: 'Payment processing', reason: 'Managed by NuqtaPay' },
  { item: 'Compliance monitoring', reason: 'Managed by Amana' },
  { item: 'HR & employee records', reason: 'Managed by Tawzeef' },
  { item: 'Insurance products', reason: 'Managed by Daman' },
  { item: 'Business operations tools', reason: 'Managed by BizOne' },
  { item: 'Document storage vault', reason: 'Managed by Rabtul Core' },
  { item: 'Tax & VAT filings', reason: 'Managed by Amana' },
];

export default function KhedmaPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Landmark },
    { id: 'services', label: '7 Service Areas', icon: Layers },
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
          <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-4 text-sm"><ArrowRight className="w-4 h-4 rotate-180" /> RTMN Ecosystem</Link>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20"><Landmark className="w-7 h-7 sm:w-10 sm:h-10 text-white" /></div>
                <div><h1 className="text-3xl sm:text-5xl font-black text-white">Khedma <span className="text-amber-400">خدمة</span></h1><p className="text-amber-400 text-sm sm:text-lg font-medium">Government Services, Digitized.</p></div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">Your <span className="text-amber-400 font-medium">digital PRO</span>. Visa, licensing, attestation, labor, property — <span className="text-emerald-400 font-medium">25+ government portals</span> in one platform. <span className="text-[#c9a227] font-medium">60% faster</span> processing.</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full"><HeartHandshake className="w-4 h-4 text-[#c9a227]" /><span className="text-[#c9a227] text-xs sm:text-sm font-medium">A Nuqta Corporation Product</span></div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">{keyStats.map((stat, i) => (<div key={i} className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center min-w-[120px]"><div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div><div className="text-[10px] sm:text-xs text-slate-400">{stat.suffix}</div><div className="text-[10px] sm:text-xs text-slate-500 mt-1">{stat.label}</div></div>))}</div>
          </div>
          <div className="mt-8 bg-gradient-to-r from-amber-500/20 to-orange-500/10 rounded-xl p-4 sm:p-6 border border-amber-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div><div className="flex items-center gap-2 mb-2"><Zap className="w-5 h-5 text-amber-400" /><span className="text-lg font-bold text-white">The Core Promise</span></div><p className="text-xl sm:text-2xl font-bold text-white"><span className="text-amber-400">No more PRO queues.</span> Government services <span className="text-emerald-400">from your phone.</span></p></div>
              <div className="flex gap-3"><div className="bg-slate-900/50 rounded-lg p-3 text-center"><div className="text-2xl font-bold text-amber-400">25+</div><div className="text-xs text-slate-400">Portals</div></div><div className="bg-slate-900/50 rounded-lg p-3 text-center"><div className="text-2xl font-bold text-[#c9a227]">60%</div><div className="text-xs text-slate-400">Faster</div></div></div>
            </div>
          </div>
        </div>
      </div>


      {/* Controls / Does NOT Own */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-emerald-500/5 rounded-xl p-6 border border-emerald-500/30">
            <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> What Khedma Controls</h3>
            <div className="space-y-2">{controls.map((c, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{c}</span></div>))}</div>
          </div>
          <div className="bg-orange-500/5 rounded-xl p-6 border border-orange-500/30">
            <h3 className="text-lg font-bold text-orange-400 mb-4 flex items-center gap-2"><ArrowRight className="w-5 h-5" /> Does NOT Own</h3>
            <div className="space-y-2">{doesNotOwn.map((d, i) => (<div key={i} className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300"><span className="text-white font-medium">{d.item}</span> \u2192 {d.reason}</span></div>))}</div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex overflow-x-auto py-2 gap-1 sm:gap-2 scrollbar-hide">{tabs.map((tab) => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab.id ? 'bg-amber-500 text-black' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}><tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />{tab.label}</button>))}</div></div></div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-amber-400" /> Executive Summary</h2>
              <p className="text-slate-300"><strong className="text-white">Khedma</strong> (خدمة — &quot;service&quot;) is the GCC&apos;s digital government services platform. It aggregates <strong className="text-amber-400">25+ government portals</strong> into one interface — visa, licensing, attestation, labor, property, vehicle, and regulatory filings. Every expat and business in the GCC needs PRO services. Khedma makes them <strong className="text-emerald-400">60% faster</strong> and <strong className="text-blue-400">75% cheaper</strong> than traditional PRO companies.</p>
            </div>
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/5 rounded-xl p-6 border border-amber-500/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-amber-400" /> Corporate Structure</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">{[['Parent Company', corporateStructure.parentCompany], ['Entity Name', corporateStructure.entity], ['Ownership', corporateStructure.ownership]].map(([l, v]) => (<div key={l} className="flex justify-between py-2 border-b border-slate-700/50"><span className="text-slate-400">{l}</span><span className="text-white font-medium text-sm text-right">{v}</span></div>))}</div>
                <div className="space-y-3">{[['Product Type', corporateStructure.type], ['License', corporateStructure.regulator], ['Integration', 'Rabtul Core + Tawzeef + Amana']].map(([l, v]) => (<div key={l} className="flex justify-between py-2 border-b border-slate-700/50"><span className="text-slate-400">{l}</span><span className="text-white font-medium text-right text-sm">{v}</span></div>))}</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6"><div className="flex items-center gap-2 mb-4"><AlertTriangle className="w-5 h-5 text-red-400" /><h3 className="text-lg font-bold text-white">Before Khedma</h3></div><ul className="space-y-2">{['Visit 5-10 government offices per task', 'Pay PRO agents AED 200-500 per service', 'Wait 2-3 weeks for attestation', 'No tracking — chase PRO via WhatsApp', 'Lost documents, expired visas, fines', 'Language barrier with Arabic-only forms'].map((item, i) => (<li key={i} className="text-sm text-slate-300 flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />{item}</li>))}</ul></div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6"><div className="flex items-center gap-2 mb-4"><CheckCircle className="w-5 h-5 text-emerald-400" /><h3 className="text-lg font-bold text-white">With Khedma</h3></div><ul className="space-y-2">{['One platform for all government services', 'AED 49 per service (75% cheaper)', 'Real-time tracking with notifications', 'Document checklist — never miss anything', 'Auto-alerts before expiry dates', 'Bilingual (Arabic + English) interface'].map((item, i) => (<li key={i} className="text-sm text-slate-300 flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />{item}</li>))}</ul></div>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/5 rounded-xl p-6 border border-amber-500/30">
              <h2 className="text-xl font-bold text-white mb-2">7 Government Service Areas</h2>
              <p className="text-slate-400">Every government service a GCC resident or business needs — from visa to vehicle registration.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceCategories.map((cat) => {
                const Icon = cat.icon; const isActive = activeCategory === cat.id;
                return (
                  <button key={cat.id} onClick={() => setActiveCategory(isActive ? null : cat.id)} className={`text-left rounded-xl border p-5 transition-all ${isActive ? `${cat.bgColor} ${cat.borderColor} ring-1 ring-current` : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50'}`}>
                    <div className="flex items-center gap-3 mb-2"><div className={`w-10 h-10 rounded-xl ${cat.bgColor} ${cat.borderColor} border flex items-center justify-center`}><Icon className={`w-5 h-5 ${cat.color}`} /></div><div><h3 className="text-white font-bold text-sm">{cat.name}</h3><span className="text-xs text-slate-500">{cat.arabic}</span></div></div>
                    <p className="text-xs text-slate-400 mb-3 line-clamp-2">{cat.description}</p>
                    <div className="flex items-center justify-between"><span className="text-xs text-emerald-400">{cat.avgTime}</span><span className="text-xs text-slate-500">{cat.portals.length} portals</span></div>
                  </button>
                );
              })}
            </div>
            {activeCategory && (() => {
              const cat = serviceCategories.find(c => c.id === activeCategory);
              if (!cat) return null; const Icon = cat.icon;
              return (
                <div className={`rounded-xl border ${cat.borderColor} ${cat.bgColor} p-6`}>
                  <div className="flex items-center gap-3 mb-4"><Icon className={`w-6 h-6 ${cat.color}`} /><h3 className="text-xl font-bold text-white">{cat.name}</h3><span className="text-xs px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">{cat.avgTime}</span></div>
                  <p className="text-slate-300 mb-4">{cat.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">{cat.capabilities.map((cap, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className={`w-4 h-4 ${cat.color} shrink-0 mt-0.5`} /><span className="text-sm text-slate-300">{cap}</span></div>))}</div>
                  <div className="border-t border-slate-700/50 pt-3"><span className="text-xs text-slate-400 font-semibold">Government Portals: </span>{cat.portals.map((p) => (<span key={p} className="text-xs px-2 py-0.5 bg-slate-700/50 rounded-full text-slate-300 mr-1">{p}</span>))}</div>
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
                {[{ icon: Brain, title: 'AI Document Prep', desc: 'AI reads your documents, fills forms, and checks completeness before submission.' }, { icon: Activity, title: 'Real-time Tracking', desc: 'Track every application from submission to approval. SMS + push notifications.' }, { icon: Lock, title: 'Secure Document Vault', desc: 'Encrypted storage for passports, visas, licenses. Auto-delete after processing option.' }, { icon: Globe, title: 'Arabic + English', desc: 'Bilingual forms, documents, and support. Auto-translation for government submissions.' }, { icon: Bell, title: 'Expiry Alerts', desc: 'Auto-alerts 90/60/30 days before visa, license, insurance, and document expiry.' }, { icon: Zap, title: 'Bulk Processing', desc: 'Process 100+ visas or licenses in one batch. Perfect for enterprise and RTMN.' }].map((f) => { const Icon = f.icon; return (<div key={f.title} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50"><Icon className="w-5 h-5 text-amber-400 mb-2" /><h4 className="text-white font-bold text-sm mb-1">{f.title}</h4><p className="text-xs text-slate-400">{f.desc}</p></div>); })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{pricingTiers.map((tier) => (<div key={tier.tier} className={`rounded-xl border ${tier.color} ${tier.bgColor} p-6 relative ${tier.popular ? 'ring-2 ring-amber-500/50' : ''}`}>{tier.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 bg-amber-500 text-black rounded-full font-bold">Most Popular</span>}<h3 className="text-lg font-bold text-white">{tier.tier}</h3><div className="flex items-baseline gap-1 my-2"><span className="text-3xl font-black text-white">{tier.price}</span><span className="text-sm text-slate-400">{tier.period}</span></div><p className="text-xs text-slate-400 mb-4">{tier.target}</p><ul className="space-y-2">{tier.features.map((f, i) => (<li key={i} className="text-xs text-slate-300 flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />{f}</li>))}</ul></div>))}</div>)}

        {activeTab === 'rtmn' && (<div className="space-y-8"><div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-6 border-2 border-[#c9a227]"><h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Network className="w-5 h-5 text-[#c9a227]" /> Centralized PRO for RTMN Group</h2><p className="text-slate-300">One PRO team handling all government services for 10 RTMN companies. Centralized visa processing, license management, and regulatory filings.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{rtmnCompanies.map((c) => { const Icon = c.icon; return (<div key={c.name} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 flex items-start gap-3"><Icon className={`w-5 h-5 ${c.color} shrink-0 mt-0.5`} /><div><h3 className="text-white font-bold text-sm">{c.name}</h3><p className="text-xs text-slate-400 mt-0.5">{c.needs}</p></div></div>); })}</div></div>)}

        {activeTab === 'financials' && (<div className="space-y-8"><div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"><h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-amber-400" /> Financial Projections</h2><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700/50">{['Year', 'Transactions', 'Revenue (AED M)', 'Market'].map((h) => (<th key={h} className="text-left px-3 py-2 text-amber-400 font-semibold">{h}</th>))}</tr></thead><tbody>{financialProjections.map((fp) => (<tr key={fp.year} className="border-b border-slate-800/50"><td className="px-3 py-3 text-white font-medium">{fp.year}</td><td className="px-3 py-3 text-slate-300">{fp.transactions}</td><td className="px-3 py-3 text-emerald-400 font-bold">{fp.revenue}M</td><td className="px-3 py-3 text-slate-400">{fp.market}</td></tr>))}</tbody></table></div></div><div className="grid grid-cols-2 lg:grid-cols-4 gap-3">{[{ label: 'GCC Expats', value: '25M+', sub: 'Need government services' }, { label: 'PRO Market', value: '$3B+', sub: 'Annual spend in GCC' }, { label: 'Digital Adoption', value: '<5%', sub: 'Currently digital' }, { label: 'Growth', value: '40%', sub: 'GovTech CAGR MENA' }].map((m) => (<div key={m.label} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50"><div className="text-2xl font-bold text-white">{m.value}</div><div className="text-xs text-slate-400 mt-1">{m.sub}</div><div className="text-xs text-slate-500 mt-1">{m.label}</div></div>))}</div></div>)}

        {activeTab === 'roadmap' && (<div className="space-y-6">{roadmapPhases.map((phase) => (<div key={phase.phase} className={`${phase.bgColor} rounded-xl p-6 border-2 ${phase.color}`}><div className="flex items-center justify-between mb-4"><div><span className="text-xs text-slate-400">{phase.phase}</span><h3 className="text-lg font-bold text-white">{phase.title}</h3></div><span className="text-sm text-slate-300 font-medium">{phase.timeline}</span></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{phase.milestones.map((m, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{m}</span></div>))}</div></div>))}</div>)}

        {activeTab === 'competition' && (<div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"><h2 className="text-xl font-bold text-white mb-4">Competitive Comparison</h2><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700/50">{['', 'Digital', 'GCC', 'Arabic', 'Tracking', 'Portals', 'API', 'Price'].map((h) => (<th key={h} className="text-left px-2 py-2 text-amber-400 font-semibold whitespace-nowrap text-xs">{h}</th>))}</tr></thead><tbody>{competitors.map((c) => (<tr key={c.name} className={`border-b border-slate-800/50 ${c.name === 'Khedma' ? 'bg-amber-500/10' : ''}`}><td className="px-2 py-2 text-white font-bold whitespace-nowrap">{c.name}</td>{[c.digital, c.gcc, c.arabic, c.track, c.portals, c.api, c.price].map((val, j) => (<td key={j} className={`px-2 py-2 whitespace-nowrap text-xs ${val.startsWith('✅') ? 'text-emerald-400' : val.startsWith('❌') ? 'text-red-400' : 'text-amber-400'}`}>{val}</td>))}</tr>))}</tbody></table></div></div>)}

        {activeTab === 'risks' && (<div className="space-y-4">{risks.map((r) => (<div key={r.risk} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden"><button onClick={() => setExpandedRisk(expandedRisk === r.risk ? null : r.risk)} className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-800/50 transition-colors"><div className="flex items-center gap-3"><span className={`px-2 py-0.5 rounded text-xs font-bold ${r.severity === 'critical' ? 'bg-red-500/20 text-red-400' : r.severity === 'high' ? 'bg-orange-500/20 text-orange-400' : 'bg-amber-500/20 text-amber-400'}`}>{r.severity.toUpperCase()}</span><span className="text-white font-medium text-sm">{r.risk}</span></div>{expandedRisk === r.risk ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}</button>{expandedRisk === r.risk && (<div className="px-5 pb-4"><div className="space-y-2">{r.mitigation.map((m, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{m}</span></div>))}</div></div>)}</div>))}</div>)}

        {activeTab === 'deck' && (
          <div className="space-y-8">
            {/* Investment Thesis */}
            <div className="bg-gradient-to-r from-amber-500/20 to-amber-500/5 rounded-2xl p-6 border border-amber-500/30">
              <h2 className="text-2xl font-bold text-white mb-2">Investment Thesis</h2>
              <p className="text-slate-300 leading-relaxed">Khedma is the operating system for government services in the GCC. Every expat (25M+) and every business (350K+) needs PRO services. Khedma digitizes the entire chain at 75% lower cost with 60% faster processing, auto-filled from Rabtul identity. The $3B+ market is still dominated by manual PRO agents.</p>
            </div>

            {/* Market Opportunity */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Market Opportunity</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'TAM', value: '$3B+', detail: 'UAE Government Services Market' },
                  { label: 'SAM', value: '$800M', detail: 'PRO & Digital Processing Segment' },
                  { label: 'SOM', value: '$50M', detail: 'Year 3 Khedma Revenue Target' },
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
                  { title: 'Digital PRO Replacement', desc: 'Submit visa, licensing, attestation requests from your phone — no office visits.' },
                  { title: 'Rabtul Identity Auto-Fill', desc: 'Documents and forms pre-filled from Rabtul Core identity layer. Zero re-entry.' },
                  { title: '25+ Portal Aggregation', desc: 'GDRFA, MOHRE, DET, MOFA, FTA, DLD unified into one interface.' },
                  { title: 'Real-Time Tracking', desc: 'Track every application from submission to approval with push notifications.' },
                  { title: '75% Cost Reduction', desc: 'AED 49/service vs AED 200-500 at traditional PRO companies.' },
                  { title: 'Bilingual & GCC-Wide', desc: 'Arabic + English. Expanding from UAE to all 6 GCC countries.' },
                ].map(d => (
                  <div key={d.title} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
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
                    {['Year', 'Revenue', 'Costs', 'Net Profit'].map(h => (
                      <th key={h} className="text-left px-3 py-2 text-amber-400 font-semibold">{h}</th>
                    ))}
                  </tr></thead>
                  <tbody>
                    {[
                      { year: 'Year 1', rev: '3M AED', costs: '2.1M AED', net: '0.9M AED' },
                      { year: 'Year 2', rev: '15M AED', costs: '7.5M AED', net: '7.5M AED' },
                      { year: 'Year 3', rev: '50M AED', costs: '17.5M AED', net: '32.5M AED' },
                    ].map(r => (
                      <tr key={r.year} className="border-b border-slate-800/50">
                        <td className="px-3 py-3 text-white font-medium">{r.year}</td>
                        <td className="px-3 py-3 text-emerald-400 font-bold">{r.rev}</td>
                        <td className="px-3 py-3 text-red-400">{r.costs}</td>
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
                  { name: 'DocuSign', val: '$8B', model: 'Digital document processing' },
                  { name: 'ID.me', val: '$1.5B', model: 'Digital identity for government' },
                  { name: 'Deel', val: '$12B', model: 'Global employment compliance' },
                ].map(c => (
                  <div key={c.name} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 text-center">
                    <div className="text-white font-bold">{c.name}</div>
                    <div className="text-amber-400 text-lg font-black mt-1">{c.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{c.model}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unicorn Path */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ArrowUpRight className="w-5 h-5 text-amber-400" /> Unicorn Path
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { stage: 'Seed', metric: '5K txns', timeline: 'Q4 2026', val: '~$15M' },
                  { stage: 'Series A', metric: '25K txns', timeline: 'Q4 2027', val: '~$75M' },
                  { stage: 'Series B', metric: '80K txns', timeline: 'Q4 2028', val: '~$250M' },
                  { stage: '$1B+', metric: '300K+ txns', timeline: '2029+', val: '~$1B+' },
                ].map(s => (
                  <div key={s.stage} className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/30 text-center">
                    <div className="text-xs text-amber-400 font-bold">{s.stage}</div>
                    <div className="text-white font-bold text-sm mt-1">{s.metric}</div>
                    <div className="text-lg font-black text-amber-400 mt-1">{s.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{s.timeline}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RTMN Ecosystem Multiplier */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-transparent rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-[#c9a227] mb-3">RTMN Ecosystem Multiplier</h3>
              <p className="text-slate-300 text-sm mb-4">Khedma benefits from deep ecosystem integration that no standalone GovTech company can replicate.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  'Built-in 10-company customer base',
                  'Rabtul identity auto-fill',
                  'Tawzeef HR pipeline',
                  'Amana compliance automation',
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

      <section className="py-12 px-4 border-t border-slate-800/50"><div className="max-w-4xl mx-auto text-center"><h2 className="text-2xl font-bold text-white mb-4">Government Services, Digitized.</h2><p className="text-slate-400 mb-8">7 service areas. 25+ portals. 60% faster. One platform.</p><div className="flex flex-wrap justify-center gap-4"><Link href="/tawzeef" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-colors"><Users className="w-5 h-5" /> Tawzeef HR</Link><Link href="/amana" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-500 transition-colors"><Shield className="w-5 h-5" /> Amana Compliance</Link></div></div></section>
      <GlobalFooter />
    </div>
  );
}
