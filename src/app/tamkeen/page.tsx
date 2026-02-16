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
  XCircle, Clock, Heart, LayoutGrid, Wheat
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── Hero Stats ───
const heroStats = [
  { label: 'Integrated Products', value: '14', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
  { label: 'Business Stages', value: '10', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  { label: 'API Endpoints', value: '200+', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
  { label: 'Setup Time', value: '<48h', color: 'text-[#c9a227]', bg: 'bg-[#c9a227]/10', border: 'border-[#c9a227]/30' },
];

// ─── Controls & Does NOT Own ───
const controls = [
  'Business onboarding wizard & lifecycle tracking',
  'Unified dashboard UX for all 14 products',
  'Subscription billing & tier management',
  'Cross-product data orchestration',
  'Customer success & onboarding support',
  'Branch replication & scaling logic',
  'Pricing plans & package bundling',
  'GCC expansion coordination',
];

const doesNotOwn = [
  { item: 'POS, CRM & inventory', reason: 'Managed by BizOne' },
  { item: 'Compliance & regulatory', reason: 'Managed by Amana' },
  { item: 'Government licensing & PRO', reason: 'Managed by Khedma' },
  { item: 'Payment processing & wallet', reason: 'Managed by NuqtaPay / Rabtul' },
  { item: 'User identity & KYC', reason: 'Managed by Rabtul Core' },
  { item: 'Advertising & marketing', reason: 'Managed by Adzy' },
  { item: 'Hiring & training', reason: 'Managed by Tawzeef + Tadreeb' },
  { item: 'Insurance products', reason: 'Managed by Daman' },
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

// ─── Market Competitors ───
const marketCompetitors = [
  {
    name: 'Tajer (DET)',
    category: 'Gov Portal',
    color: 'text-blue-400',
    strengths: ['Government-backed', 'License issuance', 'Free for DED licenses'],
    weaknesses: ['License only — no operations', 'No POS, CRM, or accounting', 'No compliance monitoring', 'No marketing or hiring'],
    tamkeenEdge: 'Tamkeen uses Khedma to do what Tajer does + 13 more products for everything after licensing',
  },
  {
    name: 'Zoho One',
    category: 'SaaS Suite',
    color: 'text-orange-400',
    strengths: ['45+ apps', 'Low price point', 'Global brand'],
    weaknesses: ['No UAE government integration', 'No compliance/regulatory', 'No local payment methods', 'No ecosystem (delivery, rewards, loyalty)'],
    tamkeenEdge: 'Zoho is generic SaaS. Tamkeen is UAE-native with government APIs, compliance, and consumer ecosystem',
  },
  {
    name: 'moCashier / Foodics',
    category: 'POS',
    color: 'text-emerald-400',
    strengths: ['Strong F&B POS', 'Kitchen display', 'Delivery integrations'],
    weaknesses: ['POS only — no compliance', 'No licensing or PRO services', 'No insurance, hiring, or training', 'No closed-loop marketing'],
    tamkeenEdge: 'BizOne POS matches their features, plus Tamkeen wraps 13 more products around it',
  },
  {
    name: 'Bayzat',
    category: 'HR/Payroll',
    color: 'text-purple-400',
    strengths: ['Strong HR/payroll', 'Insurance marketplace', 'WPS compliance'],
    weaknesses: ['HR only — no operations', 'No POS, inventory, or accounting', 'No government licensing', 'No marketing or delivery'],
    tamkeenEdge: 'Tawzeef + Tadreeb + Daman replicate Bayzat, plus 11 more products',
  },
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

// ─── Next-Gen Features Roadmap ───
const nextGenFeatures = [
  {
    id: 'ai-copilot',
    name: 'AI Business Copilot',
    arabic: 'مساعد الأعمال الذكي',
    icon: Zap,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    phase: 'Phase 1',
    impact: 'Very High',
    description: 'An AI assistant inside Tamkeen that proactively advises merchants — "hire 2 more staff before Ramadan," "reorder shampoo in 3 days," "your VAT is due in 5 days."',
    details: [
      'Proactive alerts: AI predicts staffing needs, stock shortages, compliance deadlines',
      'Natural language queries: "How much profit did I make this month?" answered instantly',
      'Benchmark insights: compare your performance against industry averages',
      'Cash flow forecasting: predict revenue and expenses 30/60/90 days ahead',
      'Recommendation engine: "Add brunch menu — similar restaurants see +22% weekend revenue"',
      'Voice interface: Arabic and English voice commands for hands-free management',
    ],
    metric: '+40% operational efficiency, -60% missed deadlines',
  },
  {
    id: 'industry-templates',
    name: 'Industry-Specific Templates',
    arabic: 'قوالب الصناعة',
    icon: LayoutGrid,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    phase: 'Phase 1',
    impact: 'High',
    description: 'Pre-configured Tamkeen setups for specific industries — restaurant, salon, clinic, retail, e-commerce, construction, real estate, consultancy, and more.',
    details: [
      'Restaurant template: POS with kitchen display, food safety training, municipality compliance',
      'Salon template: appointment scheduling, beautician management, hygiene certification',
      'Clinic template: patient management, DHA compliance, medical insurance integration',
      'E-commerce template: Shopify-like storefront, Wasil delivery, inventory + warehouse',
      'Construction template: contractor management, SIRA compliance, project tracking',
      'Each template pre-configures: BizOne screens, compliance rules, training modules, insurance types',
    ],
    metric: '-80% setup time, +25% feature adoption per merchant',
  },
  {
    id: 'marketplace-connect',
    name: 'Marketplace Auto-Connect',
    arabic: 'الاتصال التلقائي بالسوق',
    icon: Globe,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    phase: 'Phase 1',
    impact: 'High',
    description: 'One-click listing across all RTMN consumer apps — Wasil, Dinezy, Glowzy, Grocify — plus external marketplaces like Noon, Amazon.ae, and Deliveroo.',
    details: [
      'RTMN auto-listing: sign up on Tamkeen → appear on Wasil, Dinezy, Glowzy within minutes',
      'External marketplace sync: push products to Noon, Amazon.ae, Carrefour NOW',
      'Unified order management: all orders (RTMN + external) in one BizOne dashboard',
      'Inventory sync: stock levels update across all channels in real-time',
      'Pricing optimization: AI suggests optimal prices per channel based on competition',
      'Review aggregation: collect and respond to reviews from all platforms in one place',
    ],
    metric: '+3.2 sales channels per merchant, +45% order volume',
  },
  {
    id: 'business-credit',
    name: 'Tamkeen Business Credit Score',
    arabic: 'تصنيف ائتماني للأعمال',
    icon: BarChart3,
    color: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]/30',
    phase: 'Phase 2',
    impact: 'Very High',
    description: 'A proprietary credit score built from real business data — transactions, compliance, staff retention, inventory management — unlocking better financing terms.',
    details: [
      'Real-time scoring: 0-1000 score based on 50+ data points from all 14 products',
      'Transaction health: revenue consistency, growth trends, seasonal patterns',
      'Compliance score: Amana audit results, license status, regulatory filings',
      'Operational maturity: inventory accuracy, staff retention, customer satisfaction',
      'BizOne Capital integration: higher score = lower rates, higher limits, faster approval',
      'Bank partnerships: share score with UAE banks for traditional lending at better rates',
    ],
    metric: '+300% lending approval rate, -40% default rate',
  },
  {
    id: 'franchise-engine',
    name: 'Franchise-in-a-Box',
    arabic: 'امتياز في صندوق',
    icon: Building2,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    phase: 'Phase 2',
    impact: 'High',
    description: 'Turn any successful single-location business into a franchise — with standardized SOPs, quality monitoring, royalty collection, and franchisee onboarding.',
    details: [
      'SOP builder: document and standardize every process from the original location',
      'Franchisee portal: separate dashboard for each franchisee with controlled access',
      'Quality monitoring: mystery shopper integration, compliance audits, score tracking',
      'Royalty engine: automated percentage-based royalty collection from franchisee revenue',
      'Training pipeline: mandatory Tadreeb courses before any franchisee opens',
      'Legal templates: franchise agreement, territory rights, termination clauses via Khedma',
    ],
    metric: 'New revenue stream, 500+ franchise networks by Year 3',
  },
  {
    id: 'gcc-autopilot',
    name: 'GCC Expansion Autopilot',
    arabic: 'التوسع التلقائي للخليج',
    icon: Rocket,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    phase: 'Phase 2',
    impact: 'High',
    description: 'Expand to Saudi Arabia, Bahrain, Qatar, Oman, or Kuwait with one click. Tamkeen handles local licensing, labor law, VAT differences, and regulatory compliance automatically.',
    details: [
      'Country-specific compliance: auto-apply Saudi VAT (15%), Bahrain VAT (10%), Oman VAT (5%)',
      'Local licensing: Khedma handles CR registration in each country',
      'Labor law adaptation: WPS variations, gratuity rules, visa types per country',
      'Multi-currency support: AED, SAR, BHD, QAR, OMR, KWD — auto-reconciliation',
      'Localized templates: industry-specific setups adapted for each country',
      'Consolidated GCC reporting: single P&L across all countries with currency conversion',
    ],
    metric: '6 GCC countries from 1 dashboard, 10x addressable market',
  },
  {
    id: 'sustainability',
    name: 'ESG & Sustainability Dashboard',
    arabic: 'الاستدامة والحوكمة',
    icon: Wheat,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    phase: 'Phase 3',
    impact: 'Medium',
    description: 'Track and report on your carbon footprint, waste management, and social impact — increasingly required for government contracts and investor relations.',
    details: [
      'Carbon footprint calculator: track energy, delivery, and supply chain emissions',
      'Waste management tracking: monitor and reduce operational waste',
      'Social impact score: Emiratization %, local supplier %, community investment',
      'ESG report generator: automated reports for investors and government tenders',
      'Green certification pathway: guidance to achieve UAE Green Business certification',
      'Sustainability benchmarking: compare against industry averages and best practices',
    ],
    metric: 'Required for 60%+ of gov tenders by 2028',
  },
  {
    id: 'exit-readiness',
    name: 'Exit & IPO Readiness',
    arabic: 'الاستعداد للتخارج',
    icon: ArrowUpRight,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    phase: 'Phase 3',
    impact: 'High',
    description: 'When it is time to sell, merge, or IPO — Tamkeen packages your entire business into investor-ready documentation with audited financials and growth projections.',
    details: [
      'Valuation calculator: revenue multiples, DCF, and comparable analysis',
      'Data room: auto-generate investor data room with all financials, contracts, and compliance docs',
      'Audit preparation: Amana generates audit-ready books with full transaction trails',
      'Growth story: AI-generated business narrative from actual performance data',
      'Buyer matching: connect with PE firms, acquirers, and IPO advisors in the RTMN network',
      'Dual-track prep: run sale process and IPO prep simultaneously from one dashboard',
    ],
    metric: 'Reduce exit prep time from 6 months to 6 weeks',
  },
];

// ─── User Journey ───
const userJourney = [
  { step: '1', title: 'Sign Up & Choose Plan', desc: 'Create your Tamkeen account in 2 minutes. Select Starter, Growth, or Enterprise. Connected to Rabtul ID instantly.', color: 'text-emerald-400', border: 'border-emerald-500/30' },
  { step: '2', title: 'Industry Template Setup', desc: 'Pick your industry — restaurant, salon, retail, clinic, etc. Tamkeen pre-configures BizOne, compliance rules, and training modules.', color: 'text-blue-400', border: 'border-blue-500/30' },
  { step: '3', title: 'License & Register', desc: 'Khedma API handles your trade license, visa processing, and government approvals. You fill in the form — we handle the rest.', color: 'text-orange-400', border: 'border-orange-500/30' },
  { step: '4', title: 'Go Live in 48 Hours', desc: 'BizOne POS is ready. Auto-listed on Wasil. Compliance monitoring activated. Staff training assigned. You are open for business.', color: 'text-[#c9a227]', border: 'border-[#c9a227]/30' },
  { step: '5', title: 'Operate & Grow', desc: 'Run daily operations from one dashboard. Hire via Tawzeef, market via Adzy, track compliance via Amana, manage stock via Inventora.', color: 'text-purple-400', border: 'border-purple-500/30' },
  { step: '6', title: 'Scale to GCC', desc: 'Open new branches with one click. Expand to Saudi, Bahrain, Qatar. Same dashboard, localized compliance. From 1 location to 100.', color: 'text-pink-400', border: 'border-pink-500/30' },
];

export default function TamkeenPage() {
  const [expandedStage, setExpandedStage] = useState<string | null>('register');
  const [expandedLayer, setExpandedLayer] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'features' | 'pricing' | 'market' | 'roadmap' | 'deck'>('features');
  const [expandedRoadmap, setExpandedRoadmap] = useState<string | null>('ai-copilot');

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

      {/* ═══════════════ CONTROLS & DOES NOT OWN ═══════════════ */}
      <section className="bg-slate-800/30 border-b border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30">
              <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Tamkeen Controls
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {controls.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Does NOT Own
              </h3>
              <div className="space-y-2">
                {doesNotOwn.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium text-sm">{item.item}</span>
                      <span className="text-slate-500 text-xs ml-2">({item.reason})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TAB NAVIGATION ═══════════════ */}
      <div className="border-b border-slate-700/50 bg-slate-900/30 sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto">
            {[
              { key: 'features' as const, label: 'Lifecycle & Features', icon: LayoutGrid },
              { key: 'pricing' as const, label: 'Pricing & Economics', icon: DollarSign },
              { key: 'market' as const, label: 'Market & Competition', icon: Globe },
              { key: 'roadmap' as const, label: 'Next-Gen Roadmap', icon: Rocket },
              { key: 'deck' as const, label: 'Pitch Deck', icon: Briefcase },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'border-emerald-400 text-emerald-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════ FEATURES TAB ═══════════════ */}
      {activeTab === 'features' && (
        <>
          {/* The Problem */}
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

          {/* User Journey */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <ArrowRight className="w-7 h-7 text-emerald-400" /> Merchant Journey
            </h2>
            <p className="text-slate-400 mb-6">From signup to GCC expansion in 6 steps</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {userJourney.map((step, i) => (
                <div key={i} className={`bg-slate-800/30 rounded-xl p-5 border ${step.border} hover:scale-[1.01] transition-transform`}>
                  <div className={`text-3xl font-black ${step.color} mb-3`}>{step.step}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 10 Business Lifecycle Stages */}
          <section className="bg-slate-800/30 border-y border-slate-700/50 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            </div>
          </section>

          {/* API Architecture */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
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
          </section>
        </>
      )}

      {/* ═══════════════ PRICING TAB ═══════════════ */}
      {activeTab === 'pricing' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
          {/* Cost Comparison */}
          <section>
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

          {/* Pricing Plans */}
          <section>
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
          </section>

          {/* Unit Economics */}
          <section>
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
        </div>
      )}

      {/* ═══════════════ MARKET TAB ═══════════════ */}
      {activeTab === 'market' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
          {/* Market Size */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <Globe className="w-7 h-7 text-emerald-400" /> Market Opportunity
            </h2>
            <p className="text-slate-400 mb-6">UAE has 350,000+ registered SMEs, growing 15% YoY. Most still use fragmented tools.</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: 'TAM', value: '$4.2B', desc: 'GCC SME Software Market (2026)', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
                { label: 'SAM', value: '$1.8B', desc: 'UAE SME Business Management', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
                { label: 'SOM (Year 3)', value: '$200M', desc: '30K merchants × 1,500 AED/mo ARPU', color: 'text-[#c9a227]', bg: 'bg-[#c9a227]/10', border: 'border-[#c9a227]/30' },
              ].map((m, i) => (
                <div key={i} className={`${m.bg} rounded-xl p-6 text-center border ${m.border}`}>
                  <div className={`text-3xl font-black ${m.color}`}>{m.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{m.label}</div>
                  <div className="text-[10px] text-slate-500 mt-1">{m.desc}</div>
                </div>
              ))}
            </div>

            {/* Market Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'UAE SMEs', value: '350K+', color: 'text-emerald-400' },
                { label: 'New Licenses/Year', value: '45,000', color: 'text-blue-400' },
                { label: 'Avg Tools Per SME', value: '8-15', color: 'text-orange-400' },
                { label: 'Digital Adoption', value: '38%', color: 'text-purple-400' },
              ].map((s, i) => (
                <div key={i} className="bg-slate-800/30 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Competitor Analysis */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <Target className="w-7 h-7 text-red-400" /> Competitive Landscape
            </h2>
            <p className="text-slate-400 mb-6">No competitor covers more than 1-2 of Tamkeen&apos;s 10 lifecycle stages. They solve pieces — we solve everything.</p>

            <div className="space-y-4">
              {marketCompetitors.map((comp, i) => (
                <div key={i} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className={`text-lg font-bold ${comp.color}`}>{comp.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800/50 text-slate-300 border border-slate-600/50">{comp.category}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <h4 className="text-white font-bold text-sm mb-2">Strengths</h4>
                      <div className="space-y-1">
                        {comp.strengths.map((s, j) => (
                          <div key={j} className="flex items-center gap-2 text-slate-300 text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {s}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-red-500/20">
                      <h4 className="text-red-400 font-bold text-sm mb-2">Weaknesses</h4>
                      <div className="space-y-1">
                        {comp.weaknesses.map((w, j) => (
                          <div key={j} className="flex items-center gap-2 text-slate-300 text-xs">
                            <XCircle className="w-3 h-3 text-red-400 flex-shrink-0" /> {w}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-emerald-500/5 rounded-lg p-4 border border-emerald-500/20">
                      <h4 className="text-emerald-400 font-bold text-sm mb-2">Tamkeen Edge</h4>
                      <p className="text-slate-300 text-xs">{comp.tamkeenEdge}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* The Moat */}
          <section>
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
          </section>
        </div>
      )}

      {/* ═══════════════ ROADMAP TAB ═══════════════ */}
      {activeTab === 'roadmap' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Next-Gen Features Roadmap</h2>
            <p className="text-slate-400 mb-6">
              8 features that will make Tamkeen the operating system for every business in the GCC.
            </p>

            {/* Phase Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { phase: 'Phase 1', timeline: 'Q3-Q4 2026', count: 3, features: 'AI Business Copilot, Industry Templates, Marketplace Auto-Connect', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
                { phase: 'Phase 2', timeline: 'Q1-Q2 2027', count: 3, features: 'Business Credit Score, Franchise-in-a-Box, GCC Expansion Autopilot', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
                { phase: 'Phase 3', timeline: 'Q3-Q4 2027', count: 2, features: 'ESG & Sustainability, Exit & IPO Readiness', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
              ].map((p, i) => (
                <div key={i} className={`${p.bg} rounded-xl p-5 border ${p.border}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-lg font-bold ${p.color}`}>{p.phase}</span>
                    <span className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded">{p.timeline}</span>
                  </div>
                  <div className={`text-2xl font-black ${p.color} mb-1`}>{p.count} Features</div>
                  <p className="text-slate-400 text-xs">{p.features}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Orchestration Badge */}
          <div className="bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-xl p-5 border border-emerald-500/20 mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                <Rocket className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-bold">API Orchestration Platform</h3>
                <p className="text-slate-400 text-sm">Every feature below leverages data from all 14 integrated products via Rabtul Core.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {[
                { label: '14 Products', icon: Layers, color: 'text-emerald-400' },
                { label: '200+ APIs', icon: Cloud, color: 'text-blue-400' },
                { label: 'Unified Data', icon: Database, color: 'text-purple-400' },
                { label: 'Real-time Sync', icon: Zap, color: 'text-[#c9a227]' },
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/50 rounded-lg p-3 text-center border border-slate-700/50">
                  <item.icon className={`w-5 h-5 ${item.color} mx-auto mb-1`} />
                  <div className="text-xs text-slate-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 8 Feature Cards (Expandable) */}
          <div className="space-y-4">
            {nextGenFeatures.map((feature) => (
              <div
                key={feature.id}
                className={`${feature.bgColor} border ${feature.borderColor} rounded-xl overflow-hidden transition-all`}
              >
                <button
                  onClick={() => setExpandedRoadmap(expandedRoadmap === feature.id ? null : feature.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center border ${feature.borderColor} flex-shrink-0`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                        <h3 className={`text-base sm:text-lg font-bold ${feature.color}`}>
                          {feature.name}
                        </h3>
                        <span className="text-slate-500 text-sm">{feature.arabic}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800/50 text-slate-300 border border-slate-600/50">
                          {feature.phase}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${feature.bgColor} ${feature.color} border ${feature.borderColor}`}>
                          {feature.impact} Impact
                        </span>
                      </div>
                    </div>
                  </div>
                  {expandedRoadmap === feature.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                  )}
                </button>

                {expandedRoadmap === feature.id && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5">
                    <p className="text-slate-300 text-sm mb-4">{feature.description}</p>
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-bold text-sm">Feature Details</h4>
                        <span className={`text-xs ${feature.color}`}>{feature.metric}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {feature.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                            <CheckCircle className={`w-4 h-4 ${feature.color} flex-shrink-0 mt-0.5`} />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Combined Impact Summary */}
          <div className="mt-12 bg-gradient-to-r from-emerald-500/15 via-blue-500/10 to-purple-500/15 rounded-2xl p-6 sm:p-8 border border-emerald-500/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-emerald-400" /> Combined Impact — All 8 Features
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { label: 'Setup Time', value: '-80%', color: 'text-emerald-400' },
                { label: 'Merchant Retention', value: '97%+', color: 'text-blue-400' },
                { label: 'Revenue Per Merchant', value: '+60%', color: 'text-[#c9a227]' },
                { label: 'GCC Addressable Market', value: '10x', color: 'text-purple-400' },
                { label: 'Lending Approval Rate', value: '+300%', color: 'text-pink-400' },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════ PITCH DECK TAB ═══════════════ */}
      {activeTab === 'deck' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
          {/* Investment Thesis */}
          <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/10 rounded-2xl p-6 sm:p-8 border border-emerald-500/30">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-emerald-400" /> Investment Thesis
            </h2>
            <p className="text-slate-300 text-sm">
              Tamkeen is not a SaaS tool — it is the <strong className="text-emerald-400">operating system for businesses in the GCC</strong>.
              By orchestrating 14 products through Rabtul APIs, it creates switching costs so deep that merchants
              effectively become <strong className="text-[#c9a227]">permanent ecosystem members</strong>. No competitor can replicate this
              without first building 14 separate products. The result: 86x LTV:CAC, 82% gross margins, and a clear
              path to $1B+ revenue.
            </p>
          </div>

          {/* TAM/SAM/SOM */}
          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-bold text-white mb-4">Market Opportunity</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                <div className="text-2xl font-bold text-emerald-400">$4.2B</div>
                <div className="text-xs text-slate-400 mt-1">TAM</div>
                <div className="text-[10px] text-slate-500">GCC SME Software Market (2026)</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-emerald-500/30">
                <div className="text-2xl font-bold text-blue-400">$1.8B</div>
                <div className="text-xs text-slate-400 mt-1">SAM</div>
                <div className="text-[10px] text-slate-500">UAE SME Business Management</div>
              </div>
              <div className="bg-emerald-500/10 rounded-xl p-4 text-center border border-emerald-500/40">
                <div className="text-2xl font-bold text-[#c9a227]">$200M</div>
                <div className="text-xs text-slate-400 mt-1">SOM (Year 3)</div>
                <div className="text-[10px] text-slate-500">30K merchants at scale</div>
              </div>
            </div>
          </div>

          {/* Key Differentiators */}
          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-bold text-white mb-4">Key Differentiators</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                '14 products orchestrated via Rabtul — not a bundle, a unified system',
                'UAE-native with government API integrations (DED, MOHRE, FTA)',
                '48-hour business launch — from registration to fully operational',
                '90% cost savings vs traditional fragmented tools stack',
                'Consumer ecosystem: auto-listed on Wasil, Nuqta, Glowzy, Dinezy',
                'Infinite switching cost: replacing Tamkeen means replacing everything at once',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3-Year Financial Projections */}
          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-emerald-400" /> 3-Year Financial Projections (AED)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="text-left py-2 px-3 text-emerald-400 font-semibold">Metric</th>
                    <th className="text-center py-2 px-3 text-emerald-400 font-semibold">Year 1</th>
                    <th className="text-center py-2 px-3 text-emerald-400 font-semibold">Year 2</th>
                    <th className="text-center py-2 px-3 text-emerald-400 font-semibold">Year 3</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Active Merchants', y1: '2,000', y2: '10,000', y3: '30,000', highlight: false },
                    { label: 'Blended ARPU', y1: '800 AED/mo', y2: '1,200 AED/mo', y3: '1,500 AED/mo', highlight: false },
                    { label: 'Subscription Revenue', y1: '19.2M', y2: '144M', y3: '540M', highlight: false },
                    { label: 'Transaction Revenue', y1: '4.8M', y2: '36M', y3: '135M', highlight: false },
                    { label: 'Total Revenue', y1: '24M', y2: '180M', y3: '675M', highlight: true },
                    { label: 'Gross Margin', y1: '75%', y2: '80%', y3: '82%', highlight: false },
                    { label: 'Net Profit', y1: '-5M', y2: '45M', y3: '220M', highlight: true },
                  ].map((row) => (
                    <tr key={row.label} className={`border-b border-slate-800/50 ${row.highlight ? 'bg-emerald-500/5' : ''}`}>
                      <td className={`py-2 px-3 ${row.highlight ? 'text-emerald-400 font-bold' : 'text-slate-300'}`}>{row.label}</td>
                      <td className={`py-2 px-3 text-center ${row.highlight ? 'text-emerald-400 font-bold' : 'text-white'}`}>{row.y1}</td>
                      <td className={`py-2 px-3 text-center ${row.highlight ? 'text-emerald-400 font-bold' : 'text-white'}`}>{row.y2}</td>
                      <td className={`py-2 px-3 text-center ${row.highlight ? 'text-emerald-400 font-bold' : 'text-white'}`}>{row.y3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Comparable Companies */}
          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-bold text-white mb-4">Comparable Companies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { company: 'Toast (USA)', valuation: '$13B market cap', model: 'Restaurant POS + payments', edge: 'Tamkeen covers 24 verticals not just F&B, plus compliance + licensing' },
                { company: 'Zoho One (India)', valuation: '$10B+ valuation', model: '45+ SaaS apps bundle', edge: 'Tamkeen has government APIs, consumer ecosystem, and UAE-native compliance' },
                { company: 'Shopify (Global)', valuation: '$100B+ market cap', model: 'E-commerce + POS + payments', edge: 'Tamkeen is full lifecycle: before store (licensing) through scale (GCC)' },
              ].map((comp, i) => (
                <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                  <div className="text-white font-bold">{comp.company}</div>
                  <div className="text-emerald-400 font-bold text-sm mt-1">{comp.valuation}</div>
                  <div className="text-slate-400 text-xs mt-1">{comp.model}</div>
                  <div className="text-[#c9a227] text-xs mt-2">{comp.edge}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Unicorn Path */}
          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <ArrowUpRight className="w-5 h-5 text-emerald-400" /> Unicorn Path
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { milestone: '2K merchants', timeline: 'Q4 2026', revenue: '~24M AED', valuation: '~$50M' },
                { milestone: '10K merchants', timeline: 'Q4 2027', revenue: '~180M AED', valuation: '~$500M' },
                { milestone: '30K merchants', timeline: 'Q4 2028', revenue: '~675M AED', valuation: '~$2B' },
                { milestone: '100K (GCC)', timeline: '2029+', revenue: '~2B+ AED', valuation: '~$5B+' },
              ].map((ms, i) => (
                <div key={i} className={`rounded-xl p-4 text-center border ${i === 3 ? 'bg-emerald-500/10 border-emerald-500/40' : 'bg-slate-900/50 border-slate-700/50'}`}>
                  <div className={`text-xl font-bold ${i === 3 ? 'text-emerald-400' : 'text-white'}`}>{ms.valuation}</div>
                  <div className="text-xs text-slate-400 mt-1">{ms.milestone}</div>
                  <div className="text-xs text-slate-500">{ms.timeline}</div>
                  <div className="text-xs text-[#c9a227] mt-1">{ms.revenue} rev</div>
                </div>
              ))}
            </div>
          </div>

          {/* RTMN Ecosystem Multiplier */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-[#c9a227]/10 rounded-xl p-6 border border-emerald-500/30">
            <h3 className="text-lg font-bold text-[#c9a227] mb-4">RTMN Ecosystem Multiplier</h3>
            <p className="text-slate-400 text-sm mb-4">Why Tamkeen inside RTMN is 10x more valuable than a standalone business SaaS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { factor: '14 Products = 1 Platform', detail: 'No startup in the world has 14 integrated products. Tamkeen is built on years of infrastructure that competitors cannot replicate.' },
                { factor: 'Consumer Demand Built-In', detail: 'Every Tamkeen merchant is auto-listed on Wasil (delivery), Nuqta (payments), Glowzy (beauty), Dinezy (food) — instant customer channel.' },
                { factor: 'Data Flywheel', detail: 'BizOne transactions → improve Inventora forecasting → improve NextaBizz pricing → improve BizOne Capital lending. Each product makes the others better.' },
                { factor: 'Revenue Stack', detail: 'Tamkeen earns subscription + Adzy earns ads + BizOne earns POS fees + Qist earns BNPL + QuickDrop earns delivery. One merchant, 5+ revenue streams.' },
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                  <div className="text-[#c9a227] font-bold text-sm mb-1">{item.factor}</div>
                  <div className="text-slate-400 text-xs">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
