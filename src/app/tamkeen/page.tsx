'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Rocket, Building2, Shield, Store, Users, DollarSign,
  CheckCircle, ChevronDown, ChevronUp, ArrowRight, ArrowDown,
  Globe, Briefcase, Crown, Megaphone, Package, Layers,
  GraduationCap, Home, Stethoscope, Calendar, Database,
  FileText, CreditCard, TrendingUp, Zap, Lock, Star,
  BarChart3, Target, Settings, Smartphone, Cloud, ArrowUpRight,
  XCircle, Clock, Heart
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── Hero Stats ───
const heroStats = [
  { label: 'Integrated Products', value: '14', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
  { label: 'Business Stages', value: '10', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  { label: 'API Endpoints', value: '200+', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
  { label: 'Setup Time', value: '<48h', color: 'text-[#c9a227]', bg: 'bg-[#c9a227]/10', border: 'border-[#c9a227]/30' },
];

// ─── The Problem ───
const problems = [
  { problem: 'Register a business: visit 5 government offices', tools: 'DED, MOHRE, Immigration, Tasheel, Notary', time: '2-6 weeks', cost: '15,000-50,000 AED in fees + PRO' },
  { problem: 'Set up operations: buy 8 separate software tools', tools: 'POS, CRM, Accounting, Inventory, Payroll, E-commerce, Scheduling, Analytics', time: '1-3 months', cost: '5,000-15,000 AED/month' },
  { problem: 'Stay compliant: hire consultants for each regulation', tools: 'AML officer, VAT consultant, ESR advisor, Data protection, Labor law', time: 'Ongoing', cost: '30,000-100,000 AED/year' },
  { problem: 'Grow the business: manage 6 marketing platforms', tools: 'Google Ads, Meta Ads, SEO, Email, SMS, Loyalty program', time: 'Ongoing', cost: '10,000-50,000 AED/month' },
];

// ─── 10 Business Lifecycle Stages ───
const lifecycleStages = [
  {
    id: 'register',
    step: 1,
    name: 'Register & License',
    arabic: 'التسجيل والترخيص',
    icon: FileText,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    poweredBy: 'Khedma',
    poweredByHref: '/khedma',
    poweredByColor: 'text-orange-400',
    description: 'Company formation, trade license, visa processing, Emirates ID, labor cards, and all government approvals — handled end-to-end via Khedma APIs.',
    features: [
      'Trade license application & renewal (mainland, free zone, offshore)',
      'Visa processing: employment, investor, partner, family',
      'Emirates ID registration & biometric scheduling',
      'Establishment card & labor card issuance',
      'Document attestation & notarization',
      'PRO services: all government relations handled digitally',
    ],
    before: '2-6 weeks, 5+ office visits',
    after: '48 hours, zero office visits',
  },
  {
    id: 'workspace',
    step: 2,
    name: 'Find Workspace',
    arabic: 'المساحة التجارية',
    icon: Home,
    color: 'text-green-300',
    bgColor: 'bg-green-400/10',
    borderColor: 'border-green-400/30',
    poweredBy: 'Aqar + Sakin',
    poweredByHref: '/aqar',
    poweredByColor: 'text-green-300',
    description: 'Find and lease office space, retail shops, or warehouses. Pay rent in installments via Sakin BNPL — no massive upfront deposits.',
    features: [
      'Browse 10,000+ commercial properties across UAE',
      'Virtual office options for free zone companies',
      'Ejari registration handled automatically',
      'Rent BNPL via Sakin: split deposit + rent over 12 months',
      'Warehouse & storage for e-commerce businesses',
      'Co-working space partnerships for startups',
    ],
    before: '1 month searching, 3-6 months deposit',
    after: '3 days, rent starts from Day 1 via BNPL',
  },
  {
    id: 'hire',
    step: 3,
    name: 'Hire & Train Team',
    arabic: 'التوظيف والتدريب',
    icon: Users,
    color: 'text-blue-300',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/30',
    poweredBy: 'Tawzeef + Tadreeb',
    poweredByHref: '/tawzeef',
    poweredByColor: 'text-blue-300',
    description: 'Post jobs, screen candidates, onboard employees, and train them — all from the Tamkeen dashboard via Tawzeef (hiring) and Tadreeb (training) APIs.',
    features: [
      'Post jobs across UAE job boards with one click',
      'AI candidate matching based on role requirements',
      'Digital onboarding: contracts, visa processing, bank account',
      'Mandatory training modules: food safety, hygiene, compliance',
      'Industry-specific certifications via Tadreeb Academy',
      'Performance tracking & skill development paths',
    ],
    before: '2-4 weeks per hire, manual onboarding',
    after: '3-5 days per hire, fully digital onboarding',
  },
  {
    id: 'operations',
    step: 4,
    name: 'Run Operations',
    arabic: 'إدارة العمليات',
    icon: Store,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    poweredBy: 'BizOne',
    poweredByHref: '/bizone',
    poweredByColor: 'text-blue-400',
    description: 'Your entire operations in one dashboard — POS, CRM, inventory, scheduling, e-commerce storefront, and customer management powered by BizOne.',
    features: [
      'Cloud POS: tablet, phone, or desktop — works offline too',
      'CRM: customer profiles, purchase history, preferences, notes',
      'Inventory management: real-time stock, low-stock alerts, barcode scanning',
      'E-commerce storefront: online ordering & delivery (auto-listed on Wasil)',
      'Appointment scheduling: for salons, clinics, consultants',
      'Multi-branch management: centralized control across locations',
    ],
    before: '8 separate tools, 5,000-15,000 AED/month',
    after: '1 dashboard, included in Tamkeen subscription',
  },
  {
    id: 'supply',
    step: 5,
    name: 'Source & Stock',
    arabic: 'التوريد والمخزون',
    icon: Package,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    poweredBy: 'Inventora + NextaBizz',
    poweredByHref: '/inventora',
    poweredByColor: 'text-emerald-400',
    description: 'AI-powered inventory management with auto-reorder from the NextaBizz B2B marketplace. Never run out of stock, never over-order.',
    features: [
      'AI demand forecasting: predict what you need before you need it',
      'Auto-reorder: inventory drops below threshold → automatic PO to NextaBizz',
      'B2B marketplace: 5,000+ wholesale suppliers, competitive bidding',
      'Multi-warehouse tracking: real-time stock across all locations',
      'Expiry & batch tracking: critical for F&B and pharma',
      'Supplier performance scoring & payment terms management',
    ],
    before: 'Manual stock counts, WhatsApp ordering',
    after: 'AI auto-reorder, 24h delivery from NextaBizz',
  },
  {
    id: 'finance',
    step: 6,
    name: 'Accounting & Tax',
    arabic: 'المحاسبة والضرائب',
    icon: DollarSign,
    color: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]/30',
    poweredBy: 'BizOne Finance',
    poweredByHref: '/bizone',
    poweredByColor: 'text-[#c9a227]',
    description: 'Every transaction auto-generates accounting entries. VAT calculated in real-time. FTA-ready returns with one click. Payroll with WPS compliance.',
    features: [
      'Auto-accounting: every sale/expense creates journal entries automatically',
      'VAT engine: real-time calculation, input/output tracking, FTA-ready returns',
      'Corporate tax (9%): profit calculation, threshold monitoring, filing prep',
      'WPS-compliant payroll: salary processing, SIF file generation, gratuity calc',
      'Financial reports: P&L, balance sheet, cash flow — generated in seconds',
      'BizOne Capital: working capital loans pre-approved from transaction data',
    ],
    before: 'Hire accountant (8,000 AED/mo), QuickBooks (500 AED/mo)',
    after: 'Fully automated, included in Tamkeen',
  },
  {
    id: 'compliance',
    step: 7,
    name: 'Stay Compliant',
    arabic: 'الامتثال التنظيمي',
    icon: Shield,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    poweredBy: 'Amana',
    poweredByHref: '/amana',
    poweredByColor: 'text-red-400',
    description: '12 regulatory pillars monitored 24/7. Real-time compliance scoring. Auto-alerts before deadlines. No more consultants, no more fines.',
    features: [
      'AML/KYC: customer screening, transaction monitoring, SAR filing',
      'VAT compliance: automated returns, audit-ready documentation',
      'ESR (Economic Substance): activity monitoring & reporting',
      'UBO registry: beneficial ownership declarations & updates',
      'Data protection: UAE PDPL compliance monitoring',
      'License renewals: auto-track & remind 90/60/30 days before expiry',
    ],
    before: 'Multiple consultants, 30,000-100,000 AED/year',
    after: 'Automated monitoring, alerts, and filing',
  },
  {
    id: 'insure',
    step: 8,
    name: 'Insure & Protect',
    arabic: 'التأمين والحماية',
    icon: Heart,
    color: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/30',
    poweredBy: 'Daman',
    poweredByHref: '/daman',
    poweredByColor: 'text-sky-400',
    description: 'Mandatory and optional insurance — health insurance for employees, property insurance, liability coverage, and vehicle fleet insurance via Daman.',
    features: [
      'Group health insurance: mandatory for all UAE employees',
      'Property & asset insurance: shop, warehouse, equipment coverage',
      'Professional liability: errors & omissions for service businesses',
      'Vehicle fleet insurance: for delivery and transport businesses',
      'Workers compensation: workplace injury coverage',
      'Cyber insurance: data breach and IT liability protection',
    ],
    before: 'Visit 5 insurance brokers, compare manually',
    after: 'AI-compared quotes, instant coverage, one dashboard',
  },
  {
    id: 'marketing',
    step: 9,
    name: 'Market & Grow',
    arabic: 'التسويق والنمو',
    icon: Megaphone,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    poweredBy: 'Adzy',
    poweredByHref: '/adzy',
    poweredByColor: 'text-pink-400',
    description: 'Closed-loop marketing powered by Adzy. Target Nuqta ecosystem users with proven purchase intent. Track from ad impression to in-store purchase.',
    features: [
      'Targeted campaigns: reach 500K+ Nuqta users by demographics & behavior',
      'Closed-loop attribution: ad seen → app visited → purchase made — full proof',
      'SpinZy sponsored games: branded scratch cards, trivia, treasure hunts',
      'Loyalty programs: Nuqta Coin rewards for repeat customers',
      'Social proof: verified reviews from real customers on Wasil/Glowzy/Dinezy',
      'Auto-listing: instantly appear on Wasil (24 verticals) upon BizOne signup',
    ],
    before: '6 platforms, 10,000-50,000 AED/month, no attribution',
    after: 'One platform, closed-loop ROI, pay-per-result',
  },
  {
    id: 'scale',
    step: 10,
    name: 'Scale & Expand',
    arabic: 'التوسع والنمو',
    icon: Rocket,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    poweredBy: 'Tamkeen Platform',
    poweredByHref: '/tamkeen',
    poweredByColor: 'text-purple-400',
    description: 'Open new branches, expand to new Emirates, or go GCC-wide. Tamkeen scales everything — licenses, staff, operations, compliance — automatically.',
    features: [
      'Multi-branch rollout: replicate entire setup to new locations in days',
      'GCC expansion: Khedma handles licensing in Saudi, Bahrain, Qatar, Oman, Kuwait',
      'Franchise mode: standardized operations, training, and compliance for franchisees',
      'BizOne Capital: growth loans pre-approved from your transaction history',
      'Consolidated reporting: single P&L across all branches and countries',
      'Exit planning: valuation tools, financial packaging for investors or acquirers',
    ],
    before: 'Rebuild everything from scratch per location',
    after: 'One-click branch replication, GCC-ready',
  },
];

// ─── API Architecture Layers ───
const apiLayers = [
  {
    layer: 'Presentation Layer',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    description: 'Tamkeen Dashboard — single unified UI for the business owner',
    components: ['Web Dashboard', 'Mobile App (iOS/Android)', 'Tablet POS Mode', 'API Console for developers'],
  },
  {
    layer: 'Orchestration Layer',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    description: 'Rabtul Core — identity, rules engine, event bus, and wallet',
    components: ['Unified Identity (Rabtul ID)', 'Business Rules Engine', 'Event Bus (real-time sync)', 'Wallet & Ledger'],
  },
  {
    layer: 'Service Layer',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    description: '14 product APIs — each specialized, all orchestrated by Rabtul',
    components: ['Khedma API', 'BizOne API', 'Amana API', 'Adzy API', 'Inventora API', 'NextaBizz API', 'Tawzeef API', 'Tadreeb API', 'Daman API', 'Aqar API', 'Sakin API', 'Qist API', 'Wasil API', 'NuqtaPay API'],
  },
  {
    layer: 'Data Layer',
    color: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]/30',
    description: 'Unified business data graph — every product enriches the same data',
    components: ['Transaction Ledger', 'Customer Graph', 'Compliance Vault', 'Analytics Engine'],
  },
];

// ─── Pricing Tiers ───
const pricingTiers = [
  {
    name: 'Starter',
    arabic: 'المبتدئ',
    price: '499',
    period: '/month',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    target: 'Freelancers & micro-businesses',
    includes: [
      'Khedma: license renewal reminders',
      'BizOne: POS + basic accounting',
      'Amana: basic compliance monitoring',
      'Auto-listing on Wasil',
      '1 user, 1 branch',
    ],
    highlight: false,
  },
  {
    name: 'Growth',
    arabic: 'النمو',
    price: '1,499',
    period: '/month',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    target: 'SMEs with 5-50 employees',
    includes: [
      'Everything in Starter +',
      'Khedma: full PRO services & visa processing',
      'BizOne: full suite + payroll + VAT filing',
      'Amana: 12-pillar compliance suite',
      'Tawzeef: recruitment & onboarding',
      'Tadreeb: staff training modules',
      'Inventora: inventory management',
      'Adzy: 5,000 AED ad credits/month',
      'Up to 10 users, 3 branches',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    arabic: 'المؤسسة',
    price: 'Custom',
    period: '',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    target: 'Large businesses & franchises',
    includes: [
      'Everything in Growth +',
      'All 14 product APIs — unlimited access',
      'Multi-country GCC expansion support',
      'Franchise management module',
      'Dedicated account manager',
      'Custom API integrations',
      'BizOne Capital: priority lending',
      'White-label options available',
      'Unlimited users & branches',
    ],
    highlight: false,
  },
];

// ─── Competitive Comparison ───
const competitors = [
  { task: 'Company Registration', traditional: 'PRO firm + 2-6 weeks', tamkeen: 'Khedma API, 48 hours', savings: '-90% time' },
  { task: 'POS + Accounting', traditional: 'Lightspeed + QuickBooks (2,000 AED/mo)', tamkeen: 'BizOne (included)', savings: '-100% cost' },
  { task: 'Payroll + WPS', traditional: 'Bayzat or manual (1,500 AED/mo)', tamkeen: 'BizOne Payroll (included)', savings: '-100% cost' },
  { task: 'VAT Filing', traditional: 'Tax consultant (3,000 AED/quarter)', tamkeen: 'Amana auto-filing', savings: '-100% cost' },
  { task: 'Compliance (AML/KYC)', traditional: 'MLRO + consultant (50,000 AED/yr)', tamkeen: 'Amana 24/7 monitoring', savings: '-95% cost' },
  { task: 'Hiring', traditional: 'Indeed + LinkedIn (5,000 AED/mo)', tamkeen: 'Tawzeef (included)', savings: '-100% cost' },
  { task: 'Marketing', traditional: 'Google + Meta (15,000 AED/mo)', tamkeen: 'Adzy closed-loop (pay-per-result)', savings: '-60% cost' },
  { task: 'Insurance', traditional: 'Insurance broker (manual)', tamkeen: 'Daman instant compare', savings: '-30% premiums' },
  { task: 'Inventory', traditional: 'Zoho Inventory (800 AED/mo)', tamkeen: 'Inventora AI (included)', savings: '-100% cost' },
  { task: 'Total Monthly Cost', traditional: '15,000-40,000 AED/mo', tamkeen: '1,499 AED/mo (Growth)', savings: '-90% total' },
];

// ─── Unit Economics ───
const unitEconomics = [
  { metric: 'Target Merchants', value: '50,000', icon: Store, note: 'UAE SMEs addressable' },
  { metric: 'Blended ARPU', value: '1,200 AED/mo', icon: DollarSign, note: 'Across all tiers' },
  { metric: 'CAC', value: '500 AED', icon: Users, note: 'Organic via BizOne + Khedma' },
  { metric: 'LTV', value: '43,200 AED', icon: TrendingUp, note: '36-month avg retention' },
  { metric: 'LTV:CAC', value: '86x', icon: Target, note: 'Exceptional unit economics' },
  { metric: 'Gross Margin', value: '82%', icon: BarChart3, note: 'Software + API margins' },
  { metric: 'Churn Rate', value: '2.5%/mo', icon: Heart, note: 'Deep integration = high lock-in' },
  { metric: 'Payback Period', value: '<1 month', icon: Clock, note: 'Instant positive unit economics' },
];

export default function TamkeenPage() {
  const [expandedStage, setExpandedStage] = useState<string | null>('register');
  const [expandedLayer, setExpandedLayer] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <div className="bg-gradient-to-br from-[#0a1628] via-emerald-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <Link href="/rtmn" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-6 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Hub
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl font-black text-white">
                  Tamkeen <span className="text-emerald-400">تمكين</span>
                </h1>
                <span className="bg-emerald-500/20 text-emerald-400 text-xs sm:text-sm px-3 py-1 rounded-full font-bold border border-emerald-500/50">
                  BUSINESS-IN-A-BOX
                </span>
              </div>
              <p className="text-emerald-400 text-lg mt-1">From Idea to Empire — One Platform</p>
              <p className="text-slate-500 text-sm">RTMN Group — Powered by 14 Integrated Products</p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-4xl mb-8">
            The complete business lifecycle platform for the UAE. Register your company, hire staff, run operations,
            stay compliant, market your brand, and scale to GCC — all from one dashboard. Powered by 14 RTMN products
            working together via Rabtul APIs.
          </p>

          {/* Hero Key Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {heroStats.map((stat, i) => (
              <div key={i} className={`${stat.bg} rounded-xl p-4 text-center border ${stat.border}`}>
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════ THE PROBLEM ═══════════════ */}
      <section className="bg-slate-800/30 border-b border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <XCircle className="w-7 h-7 text-red-400" /> The Problem: Starting a Business in UAE is Painful
          </h2>
          <p className="text-slate-400 mb-6">Without Tamkeen, you need 15+ separate tools, 10+ service providers, and months of setup time.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problems.map((p, i) => (
              <div key={i} className="bg-red-500/5 rounded-xl p-5 border border-red-500/20">
                <h3 className="text-red-400 font-bold text-sm mb-3">{p.problem}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500 text-xs w-16 flex-shrink-0">Tools:</span>
                    <span className="text-slate-300">{p.tools}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500 text-xs w-16 flex-shrink-0">Time:</span>
                    <span className="text-red-400 font-medium">{p.time}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500 text-xs w-16 flex-shrink-0">Cost:</span>
                    <span className="text-red-400 font-medium">{p.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Before vs After */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="text-red-400 font-bold text-lg mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Without Tamkeen
              </h3>
              <div className="space-y-2">
                {['15+ separate platforms and tools', '10+ service providers to manage', '3-6 months to become fully operational', '40,000+ AED/month in software & services', 'No data integration between tools', 'Compliance gaps = risk of fines'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30">
              <h3 className="text-emerald-400 font-bold text-lg mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> With Tamkeen
              </h3>
              <div className="space-y-2">
                {['1 platform, 14 integrated products', '1 dashboard, 1 subscription', 'Fully operational in 48 hours', '1,499 AED/month (Growth plan)', 'Unified data across everything', '24/7 automated compliance monitoring'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 10 BUSINESS LIFECYCLE STAGES ═══════════════ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <Rocket className="w-7 h-7 text-emerald-400" /> 10-Stage Business Lifecycle
        </h2>
        <p className="text-slate-400 mb-8">Every stage of running a business — from Day 0 to GCC expansion — in one platform.</p>

        <div className="space-y-4">
          {lifecycleStages.map((stage) => (
            <div
              key={stage.id}
              className={`${stage.bgColor} border ${stage.borderColor} rounded-xl overflow-hidden transition-all`}
            >
              <button
                onClick={() => setExpandedStage(expandedStage === stage.id ? null : stage.id)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className={`w-12 h-12 rounded-xl ${stage.bgColor} flex items-center justify-center border ${stage.borderColor} flex-shrink-0`}>
                    <span className={`text-lg font-black ${stage.color}`}>{stage.step}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                      <h3 className={`text-base sm:text-lg font-bold ${stage.color}`}>{stage.name}</h3>
                      <span className="text-slate-500 text-sm">{stage.arabic}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <Link href={stage.poweredByHref} className={`text-xs px-2 py-0.5 rounded-full ${stage.bgColor} ${stage.poweredByColor} border ${stage.borderColor} hover:underline`}>
                        Powered by {stage.poweredBy}
                      </Link>
                    </div>
                  </div>
                </div>
                {expandedStage === stage.id ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                )}
              </button>

              {expandedStage === stage.id && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-5">
                  <p className="text-slate-300 text-sm mb-4">{stage.description}</p>

                  {/* Features Grid */}
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50 mb-4">
                    <h4 className="text-white font-bold text-sm mb-3">What Tamkeen Does</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {stage.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                          <CheckCircle className={`w-4 h-4 ${stage.color} flex-shrink-0 mt-0.5`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Before vs After */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-red-500/5 rounded-lg p-3 border border-red-500/20">
                      <div className="text-red-400 text-xs font-bold mb-1">Before Tamkeen</div>
                      <div className="text-slate-400 text-xs">{stage.before}</div>
                    </div>
                    <div className="bg-emerald-500/5 rounded-lg p-3 border border-emerald-500/20">
                      <div className="text-emerald-400 text-xs font-bold mb-1">With Tamkeen</div>
                      <div className="text-slate-300 text-xs">{stage.after}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* ═══════════════ API ARCHITECTURE ═══════════════ */}
      <section className="bg-slate-800/30 border-y border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <Cloud className="w-7 h-7 text-blue-400" /> Technical Architecture
          </h2>
          <p className="text-slate-400 mb-6">4-layer API architecture — every product connected through Rabtul Core</p>

          <div className="space-y-4">
            {apiLayers.map((layer, i) => (
              <div
                key={i}
                className={`${layer.bgColor} rounded-xl overflow-hidden border ${layer.borderColor}`}
              >
                <button
                  onClick={() => setExpandedLayer(expandedLayer === i ? null : i)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-10 h-10 rounded-xl ${layer.bgColor} flex items-center justify-center border ${layer.borderColor}`}>
                      <span className={`text-sm font-black ${layer.color}`}>L{i + 1}</span>
                    </div>
                    <div>
                      <h3 className={`text-base sm:text-lg font-bold ${layer.color}`}>{layer.layer}</h3>
                      <p className="text-slate-400 text-xs sm:text-sm">{layer.description}</p>
                    </div>
                  </div>
                  {expandedLayer === i ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {expandedLayer === i && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                      {layer.components.map((comp, j) => (
                        <div key={j} className="bg-slate-900/50 rounded-lg p-3 text-center border border-slate-700/50">
                          <span className={`text-xs font-medium ${layer.color}`}>{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* API Flow Visual */}
          <div className="mt-8 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl p-6 border border-emerald-500/20">
            <h3 className="text-white font-bold mb-4 text-center">How It Works: One Action, Multiple APIs</h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <span className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg border border-emerald-500/30 font-bold">
                Merchant signs up
              </span>
              <ArrowRight className="w-5 h-5 text-slate-500" />
              <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg border border-purple-500/30 font-bold">
                Rabtul creates ID
              </span>
              <ArrowRight className="w-5 h-5 text-slate-500" />
              <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-lg border border-orange-500/30 font-bold">
                Khedma checks license
              </span>
              <ArrowRight className="w-5 h-5 text-slate-500" />
              <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg border border-blue-500/30 font-bold">
                BizOne provisions POS
              </span>
              <ArrowRight className="w-5 h-5 text-slate-500" />
              <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg border border-red-500/30 font-bold">
                Amana activates compliance
              </span>
              <ArrowRight className="w-5 h-5 text-slate-500" />
              <span className="bg-[#c9a227]/20 text-[#c9a227] px-4 py-2 rounded-lg border border-[#c9a227]/30 font-bold">
                Live in 48 hours
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ COST COMPARISON ═══════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <DollarSign className="w-7 h-7 text-[#c9a227]" /> Cost Comparison: Traditional vs Tamkeen
        </h2>
        <p className="text-slate-400 mb-6">Average UAE SME spends 40,000+ AED/month on fragmented tools. Tamkeen replaces everything.</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Business Need</th>
                <th className="text-left py-3 px-4 text-red-400 font-medium">Traditional Approach</th>
                <th className="text-left py-3 px-4 text-emerald-400 font-medium">Tamkeen</th>
                <th className="text-left py-3 px-4 text-[#c9a227] font-medium hidden sm:table-cell">Savings</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((row, i) => (
                <tr key={i} className={`border-b border-slate-700/30 ${i === competitors.length - 1 ? 'bg-[#c9a227]/5' : 'hover:bg-slate-800/50'} transition-colors`}>
                  <td className={`py-3 px-4 text-white font-medium ${i === competitors.length - 1 ? 'font-bold text-[#c9a227]' : ''}`}>{row.task}</td>
                  <td className="py-3 px-4 text-red-400">{row.traditional}</td>
                  <td className="py-3 px-4 text-emerald-400 font-medium">{row.tamkeen}</td>
                  <td className="py-3 px-4 text-[#c9a227] font-bold hidden sm:table-cell">{row.savings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ═══════════════ PRICING ═══════════════ */}
      <section className="bg-slate-800/30 border-y border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <CreditCard className="w-7 h-7 text-emerald-400" /> Pricing Plans
          </h2>
          <p className="text-slate-400 mb-8">One subscription replaces 15+ separate tools. Pay via Nuqta or Qist BNPL.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`${tier.bgColor} rounded-2xl p-6 border-2 ${tier.borderColor} ${tier.highlight ? 'ring-2 ring-blue-400/50 scale-[1.02]' : ''} transition-all`}
              >
                {tier.highlight && (
                  <div className="text-center mb-4">
                    <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-bold">MOST POPULAR</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold ${tier.color}`}>{tier.name}</h3>
                  <span className="text-slate-500 text-sm">{tier.arabic}</span>
                  <div className="mt-3">
                    <span className={`text-4xl font-black ${tier.color}`}>{tier.price}</span>
                    <span className="text-slate-400 text-sm"> AED{tier.period}</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-2">{tier.target}</p>
                </div>
                <div className="space-y-2">
                  {tier.includes.map((feature, j) => (
                    <div key={j} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle className={`w-4 h-4 ${tier.color} flex-shrink-0 mt-0.5`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ UNIT ECONOMICS ═══════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <TrendingUp className="w-7 h-7 text-emerald-400" /> Unit Economics
        </h2>
        <p className="text-slate-400 mb-6">Deep integration = massive lock-in = exceptional economics</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {unitEconomics.map((item, i) => (
            <div key={i} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
              <item.icon className="w-5 h-5 text-emerald-400 mb-2" />
              <div className="text-xl font-bold text-white">{item.value}</div>
              <div className="text-sm text-emerald-400 font-medium">{item.metric}</div>
              <div className="text-xs text-slate-500 mt-1">{item.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ THE MOAT ═══════════════ */}
      <section className="bg-slate-800/30 border-y border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <Lock className="w-7 h-7 text-[#c9a227]" /> Why It&apos;s Unstoppable
          </h2>
          <p className="text-slate-400 mb-6">No competitor can replicate this because it requires building 14 products first.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: '14-Product Integration', desc: 'Competitors would need to build or acquire 14 separate products and then integrate them. Years of work before even starting.', icon: Layers, color: 'text-emerald-400' },
              { title: 'Data Network Effect', desc: 'Every transaction enriches every product. BizOne sales improve Inventora forecasting, which improves NextaBizz pricing, which improves BizOne Capital lending.', icon: Database, color: 'text-blue-400' },
              { title: 'Regulatory Moat', desc: 'Khedma + Amana have deep government integrations that take 12-18 months to establish. First-mover advantage in regulatory tech.', icon: Shield, color: 'text-red-400' },
              { title: 'Switching Cost = Infinite', desc: 'A merchant on Tamkeen would need to replace their POS, accounting, payroll, compliance, marketing, hiring, and insurance — simultaneously. Nobody switches.', icon: Lock, color: 'text-[#c9a227]' },
              { title: 'Consumer Ecosystem Flywheel', desc: 'Tamkeen merchants are auto-listed on Wasil (delivery), Nuqta (payments), Glowzy (beauty), Dinezy (food). Leaving Tamkeen = losing all these customer channels.', icon: Globe, color: 'text-purple-400' },
              { title: 'GCC Portability', desc: 'Expand from UAE to Saudi/Bahrain/Qatar without rebuilding anything. Same dashboard, same compliance engine, localized regulations.', icon: Rocket, color: 'text-pink-400' },
            ].map((moat, i) => (
              <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                <moat.icon className={`w-6 h-6 ${moat.color} mb-3`} />
                <h3 className="text-white font-bold mb-2">{moat.title}</h3>
                <p className="text-slate-400 text-sm">{moat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 3-YEAR PROJECTIONS ═══════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <BarChart3 className="w-7 h-7 text-[#c9a227]" /> 3-Year Financial Projections (AED)
        </h2>
        <p className="text-slate-400 mb-6">Conservative targets based on UAE SME market of 350,000+ registered businesses</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="text-left py-2 px-3 text-[#c9a227] font-semibold">Metric</th>
                <th className="text-center py-2 px-3 text-[#c9a227] font-semibold">Year 1</th>
                <th className="text-center py-2 px-3 text-[#c9a227] font-semibold">Year 2</th>
                <th className="text-center py-2 px-3 text-[#c9a227] font-semibold">Year 3</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Active Merchants', y1: '2,000', y2: '10,000', y3: '30,000', highlight: false },
                { label: 'Blended ARPU', y1: '800 AED/mo', y2: '1,200 AED/mo', y3: '1,500 AED/mo', highlight: false },
                { label: 'Subscription Revenue', y1: '19.2M', y2: '144M', y3: '540M', highlight: true },
                { label: 'Transaction Revenue', y1: '4.8M', y2: '36M', y3: '135M', highlight: false },
                { label: 'Total Revenue', y1: '24M', y2: '180M', y3: '675M', highlight: true },
                { label: 'Gross Margin', y1: '75%', y2: '80%', y3: '82%', highlight: false },
                { label: 'Net Profit', y1: '-5M', y2: '45M', y3: '220M', highlight: true },
              ].map((row) => (
                <tr key={row.label} className={`border-b border-slate-800/50 ${row.highlight ? 'bg-[#c9a227]/5' : ''}`}>
                  <td className={`py-2 px-3 ${row.highlight ? 'text-[#c9a227] font-bold' : 'text-slate-300'}`}>{row.label}</td>
                  <td className={`py-2 px-3 text-center ${row.highlight ? 'text-[#c9a227] font-bold' : 'text-white'}`}>{row.y1}</td>
                  <td className={`py-2 px-3 text-center ${row.highlight ? 'text-[#c9a227] font-bold' : 'text-white'}`}>{row.y2}</td>
                  <td className={`py-2 px-3 text-center ${row.highlight ? 'text-[#c9a227] font-bold' : 'text-white'}`}>{row.y3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ═══════════════ NAVIGATION ═══════════════ */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/bizone" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-colors">
              <Store className="w-5 h-5" /> BizOne
            </Link>
            <Link href="/khedma" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-500 transition-colors">
              <Briefcase className="w-5 h-5" /> Khedma
            </Link>
            <Link href="/amana" className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-500 transition-colors">
              <Shield className="w-5 h-5" /> Amana
            </Link>
            <Link href="/rtmn-story" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Star className="w-5 h-5" /> RTMN Story
            </Link>
            <Link href="/rtmn" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Globe className="w-5 h-5" /> RTMN Hub
            </Link>
            <Link href="/business-solutions" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Building2 className="w-5 h-5" /> Business Solutions
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
