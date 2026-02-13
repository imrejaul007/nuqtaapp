'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Building2, Store, Shield, Briefcase, Users, Megaphone,
  Package, Layers, Database, DollarSign, GraduationCap,
  Calendar, Home, Stethoscope, Crown, Truck, Wallet,
  BarChart3, TrendingUp, CheckCircle, XCircle, ArrowRight,
  ArrowDown, ChevronDown, ChevronUp, Rocket, Globe,
  FileText, UserCheck, CreditCard, ShoppingCart, Wrench,
  Target, Clock, Zap, Award, Network, Star,
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ============================================
// DATA: Hero Stats
// ============================================
const heroStats = [
  { label: 'Business Functions', value: '13', icon: Layers, color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10', borderColor: 'border-[#c9a227]/30' },
  { label: 'B2B Products', value: '14', icon: Store, color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
  { label: 'GCC Countries', value: '6', icon: Globe, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30' },
  { label: 'Govt Portals', value: '25+', icon: Building2, color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30' },
  { label: 'One Identity', value: 'Rabtul', icon: Database, color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30' },
];

// ============================================
// DATA: Business Lifecycle Stages (13 Functions)
// ============================================
const lifecycleStages = [
  {
    id: 'registration',
    phase: 'Day 0',
    name: 'Registration & Entity Setup',
    icon: FileText,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    primaryProduct: 'Khedma',
    primaryHref: '/khedma',
    supportingProducts: ['Amana'],
    description: 'From idea to legal entity — trade license, e-commerce license, establishment card, board resolutions, entity formation.',
    capabilities: [
      'Trade license application & renewal across 6 GCC countries',
      'E-commerce license (instant setup for online businesses)',
      'Establishment card & chamber of commerce registration',
      'Board resolutions, MOA/AOA drafting & notarization',
      'Free zone vs mainland guidance with cost comparison',
      '25+ government portal integrations (DED, MOHRE, ICA, etc.)',
    ],
    withoutRTMN: 'Visit 5+ government offices, hire a PRO, wait 2-4 weeks, pay 15,000+ AED in setup fees',
    withRTMN: 'Submit online via Khedma, auto-filled forms, 3-5 business days, transparent flat-fee pricing',
  },
  {
    id: 'compliance',
    phase: 'Day 1+',
    name: 'Compliance & Legal',
    icon: Shield,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    primaryProduct: 'Amana',
    primaryHref: '/amana',
    supportingProducts: ['Khedma', 'Tawzeef'],
    description: 'Stay compliant across 12 regulatory pillars — AML/KYC, VAT, data privacy, labor law, Shariah, insurance, environmental.',
    capabilities: [
      'AML/CFT compliance — sanctions screening, PEP checks, transaction monitoring',
      'VAT registration, filing, & automatic return generation',
      'Data privacy (UAE PDPL / KSA PDPA) — consent management, breach reporting',
      'Labor law compliance — WPS, gratuity, leave entitlements, termination',
      'Shariah compliance framework for Islamic finance products',
      'Consumer protection, trade compliance, anti-corruption policies',
      'Auto-generated compliance calendar with deadline alerts',
      'Audit-ready documentation & evidence repository',
    ],
    withoutRTMN: 'Hire compliance officer (25K+ AED/month), external auditors, risk of fines up to 500K AED',
    withRTMN: 'Amana auto-monitors 12 pillars, files returns, screens transactions, alerts before deadlines',
  },
  {
    id: 'government',
    phase: 'Ongoing',
    name: 'Government & PRO Services',
    icon: Building2,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    primaryProduct: 'Khedma',
    primaryHref: '/khedma',
    supportingProducts: ['Amana'],
    description: 'End-to-end government services automation — visas, permits, attestation, labor compliance, regulatory filings.',
    capabilities: [
      'Employee visa processing — new, renewal, cancellation, status change',
      'Work permits & labor card management via MOHRE',
      'Document attestation, legalization & apostille services',
      'ESR (Economic Substance Regulations) filings',
      'UBO (Ultimate Beneficial Owner) declarations',
      'Annual license renewal with auto-reminder system',
      'Property & vehicle registration services',
    ],
    withoutRTMN: 'Hire PRO company (3K-8K AED/month), chase government portals, miss deadlines, pay fines',
    withRTMN: 'Khedma handles all PRO tasks digitally, real-time tracking, zero missed deadlines',
  },
  {
    id: 'hr',
    phase: 'Day 1+',
    name: 'Human Resources & Talent',
    icon: Users,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    primaryProduct: 'Tawzeef',
    primaryHref: '/tawzeef',
    supportingProducts: ['Tadreeb', 'Amana', 'Khedma'],
    description: 'Complete HR operations — recruitment, payroll/WPS, leave, visas, nationalization, performance, benefits.',
    capabilities: [
      'Recruitment & ATS — job posting to 10+ boards, candidate pipeline',
      'WPS-compliant payroll for UAE, KSA, Bahrain, Qatar, Oman, Kuwait',
      'Gratuity calculation (per country labor law)',
      'Leave management — annual, sick, maternity, Hajj, compassionate',
      'Emiratisation / Saudization / Bahrainisation tracking & reporting',
      'Performance reviews, KPIs, 360-degree feedback',
      'Employee self-service portal — payslips, leave requests, documents',
      'Biometric attendance & shift scheduling',
      'Visa & work permit processing (integrated with Khedma)',
      'Structured offboarding — gratuity settlement, visa cancellation',
    ],
    withoutRTMN: 'Separate ATS + payroll + HRMS + attendance = 4 tools, 5K+ AED/month, manual visa coordination',
    withRTMN: 'Tawzeef handles everything at AED 15-49/employee/month with auto visa/compliance integration',
  },
  {
    id: 'training',
    phase: 'Ongoing',
    name: 'Training & Development',
    icon: GraduationCap,
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
    primaryProduct: 'Tadreeb',
    primaryHref: '/tadreeb',
    supportingProducts: ['Tawzeef', 'Amana'],
    description: 'Corporate training, compliance courses, certification tracking, skill gap analysis — integrated with HR.',
    capabilities: [
      'Mandatory compliance training — AML, HSE, food safety, data privacy',
      'Online course library with video + quiz format',
      'Certification tracking with expiry alerts',
      'Skill gap analysis per employee with recommended courses',
      'Onboarding training programs for new hires',
      'Integration with Tawzeef — training records on employee profile',
      'Audit-ready training completion reports for compliance',
    ],
    withoutRTMN: 'Ad-hoc training, no tracking, compliance gaps, manual certification management',
    withRTMN: 'Tadreeb auto-assigns required training, tracks completion, alerts on certification expiry',
  },
  {
    id: 'operations',
    phase: 'Day 1+',
    name: 'Operations & Point of Sale',
    icon: Store,
    color: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]/30',
    primaryProduct: 'BizOne',
    primaryHref: '/bizone',
    supportingProducts: ['Inventora', 'NextaBizz'],
    description: 'THE merchant operating system — POS, CRM, order management, staff scheduling, multi-location, analytics.',
    capabilities: [
      'Cloud POS with offline mode — works even without internet',
      'Order management across dine-in, delivery, takeaway channels',
      'Customer CRM with purchase history, segmentation, loyalty',
      'Staff scheduling, time tracking, tip management',
      'Multi-location dashboard with consolidated reporting',
      'Real-time sales analytics & conversion metrics',
      'Auto-listed on Wasil delivery across 24 verticals',
      'Menu / catalog management with photo upload',
      'QR code ordering & digital receipts',
    ],
    withoutRTMN: 'Separate POS + CRM + ordering system + analytics = 4-6 tools, 3K-10K AED/month',
    withRTMN: 'BizOne is one dashboard for everything, AED 199-2,000/month, auto-integrated with ecosystem',
  },
  {
    id: 'supply-chain',
    phase: 'Day 1+',
    name: 'Supply Chain & Inventory',
    icon: Package,
    color: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/30',
    primaryProduct: 'Inventora',
    primaryHref: '/inventora',
    supportingProducts: ['NextaBizz', 'BizOne'],
    description: 'AI-powered inventory management — stock tracking, auto-reorder, warehouse management, waste reduction.',
    capabilities: [
      'Real-time stock tracking across multiple warehouses',
      'AI demand prediction with auto-reorder triggers',
      'Batch & expiry tracking (critical for F&B, pharmacy)',
      'Waste reduction analytics — identify slow-moving stock',
      'Supplier portal with price comparison & PO automation',
      'Multi-location inventory transfers & balancing',
      'Inventory valuation (FIFO, LIFO, weighted average)',
      'Integration with BizOne POS — auto-deduct on sale',
    ],
    withoutRTMN: 'Manual stock counts, Excel spreadsheets, over-ordering, waste, stockouts',
    withRTMN: 'Inventora predicts demand, auto-reorders, tracks expiry, reduces waste by 30-40%',
  },
  {
    id: 'procurement',
    phase: 'Day 1+',
    name: 'Procurement & B2B Supply',
    icon: ShoppingCart,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    primaryProduct: 'NextaBizz',
    primaryHref: '/nextabizz',
    supportingProducts: ['Inventora', 'BizOne'],
    description: 'B2B wholesale marketplace — vendor management, bulk pricing, manufacturing partnerships.',
    capabilities: [
      'Discover verified suppliers across GCC with rating system',
      'Bulk pricing negotiation & volume discount management',
      'Manufacturing partnerships for private-label products',
      'Purchase order automation with approval workflows',
      'Supplier performance tracking — delivery time, quality, pricing',
      'Invoice management & payment terms (net 30/60/90)',
      'Integration with Inventora — auto-PO when stock hits threshold',
    ],
    withoutRTMN: 'WhatsApp negotiations, no supplier comparison, manual POs, no performance tracking',
    withRTMN: 'NextaBizz connects you to verified suppliers, automates POs, tracks performance',
  },
  {
    id: 'finance',
    phase: 'Day 1+',
    name: 'Finance, Credit & Payments',
    icon: DollarSign,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    primaryProduct: 'RTMN Finance',
    primaryHref: '/rtmn-finance',
    supportingProducts: ['BizOne', 'Rabtul'],
    description: 'Merchant credit, BNPL at checkout, settlement management, payment processing, insurance.',
    capabilities: [
      'Merchant credit lines — pre-approved from transaction data',
      'Qist BNPL at checkout — 3-12 months, 40% higher AOV',
      'NuqtaPay payment processing — cards, Apple Pay, wallets',
      'Daily settlement with transparent fee breakdown',
      'Auto-accounting — every sale generates journal entries',
      'VAT calculation & filing (integrated with Amana)',
      'Cash flow forecasting & working capital alerts',
      'Daman insurance — health, auto, property for business & staff',
    ],
    withoutRTMN: 'Bank loans (8-15% APR, 2-month approval), separate payment gateway, manual accounting',
    withRTMN: 'Pre-approved credit in 24h, BNPL at checkout, auto-accounting, instant settlements',
  },
  {
    id: 'marketing',
    phase: 'Day 7+',
    name: 'Marketing & Advertising',
    icon: Megaphone,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    primaryProduct: 'Adzy',
    primaryHref: '/adzy',
    supportingProducts: ['Rabtul', 'BizOne'],
    description: 'Closed-loop advertising — campaign management, audience targeting, attribution, ROI tracking.',
    capabilities: [
      'Targeted campaigns to Nuqta ecosystem users (5M+ audience)',
      'Featured merchant listings on Wasil, Dinezy, Grocify',
      'Push notification campaigns to opted-in users',
      'Location-based targeting (radius, city, mall proximity)',
      'Behavioral targeting (purchase history, app usage, preferences)',
      'SpinZy sponsored games — branded scratch cards, trivia, treasure hunts',
      'Closed-loop attribution — see exactly which ad drove which purchase',
      'A/B testing for creative, targeting, and offer optimization',
      'ROI dashboard — cost per acquisition, ROAS, conversion rates',
    ],
    withoutRTMN: 'Google/Meta ads (no attribution to offline sales), 25-40 AED CAC, no ecosystem targeting',
    withRTMN: 'Adzy targets within ecosystem, 2-8 AED per engagement, full purchase attribution',
  },
  {
    id: 'loyalty',
    phase: 'Day 7+',
    name: 'Customer Loyalty & Retention',
    icon: Crown,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    primaryProduct: 'Nuqta',
    primaryHref: '/nuqta',
    supportingProducts: ['SpinZy', 'BizOne'],
    description: 'Nuqta Coin loyalty program — customers earn at every merchant, spend everywhere in the ecosystem.',
    capabilities: [
      'Nuqta Coin rewards on every purchase (configurable per merchant)',
      'Cross-merchant earning — customers earn at Restaurant A, spend at Salon B',
      'SpinZy gamification drives engagement between purchases',
      'Nuqta+ membership tiers (Plus/Gold/Prive) for premium customers',
      'Customer analytics — visit frequency, basket size, preferences',
      'Automated re-engagement campaigns for lapsed customers',
      'Referral program — customers bring friends for coin bonuses',
    ],
    withoutRTMN: 'Build your own loyalty app (50K+ AED), stamp cards, single-merchant rewards nobody uses',
    withRTMN: 'Plug into Nuqta ecosystem — your customers earn/spend across 500+ merchants automatically',
  },
  {
    id: 'events',
    phase: 'As Needed',
    name: 'Events & Community',
    icon: Calendar,
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/30',
    primaryProduct: 'Eventora',
    primaryHref: '/eventora',
    supportingProducts: ['Nuqta', 'Adzy'],
    description: 'Event ticketing, corporate events, campus activations, community programs, offline acquisition.',
    capabilities: [
      'Event creation & ticketing (concerts, sports, corporate, community)',
      'Campus ambassador & activation programs',
      'Corporate event management — team building, conferences',
      'Vendor booth management for expos & markets',
      'Sponsorship management & revenue tracking',
      'Attendee check-in via QR code (Nuqta app)',
      'Post-event analytics — attendance, engagement, conversions',
    ],
    withoutRTMN: 'Eventbrite fees (6-10%), no ecosystem integration, manual check-in, no cross-sell',
    withRTMN: 'Eventora with lower fees, auto-linked to Nuqta profile, post-event marketing via Adzy',
  },
  {
    id: 'infrastructure',
    phase: 'Always On',
    name: 'Core Infrastructure & AI',
    icon: Database,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    primaryProduct: 'Rabtul',
    primaryHref: '/rabtul',
    supportingProducts: ['All products'],
    description: 'The silent backbone — single identity, unified wallet, rules engine, event bus, fraud detection, analytics.',
    capabilities: [
      'Single Sign-On (SSO) — one login across all 31 apps',
      'Unified wallet — Nuqta Coins, merchant credits, all in one ledger',
      'Rules engine — configurable business logic without code changes',
      'Event bus — real-time event streaming across all products',
      'Fraud detection — ML-powered anomaly detection, device fingerprinting',
      'Analytics — cross-ecosystem insights, customer 360 view',
      'SDKs — integrate any third-party app into the ecosystem',
      'API gateway — rate limiting, auth, versioning, monitoring',
    ],
    withoutRTMN: 'Build everything from scratch, separate auth for each tool, no cross-app insights',
    withRTMN: 'Rabtul provides enterprise-grade infrastructure at 8.5M AED/year — 23x ROI across ecosystem',
  },
];

// ============================================
// DATA: Business Type Examples
// ============================================
const businessExamples = [
  {
    type: 'Restaurant',
    icon: Store,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    journey: [
      { stage: 'Register', product: 'Khedma', action: 'Trade license + food license + municipality permit' },
      { stage: 'Comply', product: 'Amana', action: 'Food safety, AML, VAT registration, labor compliance' },
      { stage: 'Hire Staff', product: 'Tawzeef', action: 'Recruit chefs, waiters — WPS payroll, visa processing' },
      { stage: 'Train', product: 'Tadreeb', action: 'Food safety certification, hygiene training' },
      { stage: 'Set Up POS', product: 'BizOne', action: 'Menu setup, table management, order routing' },
      { stage: 'Source Ingredients', product: 'NextaBizz + Inventora', action: 'Bulk supplier deals, auto-reorder for perishables' },
      { stage: 'Get Funding', product: 'RTMN Finance', action: 'Working capital for equipment, rent deposit via Sakin' },
      { stage: 'Go Live on Delivery', product: 'Wasil / Dinezy', action: 'Auto-listed on delivery apps from BizOne setup' },
      { stage: 'Advertise', product: 'Adzy', action: 'Target foodies in 5km radius, sponsor SpinZy trivia' },
      { stage: 'Build Loyalty', product: 'Nuqta', action: 'Customers earn coins, return for rewards' },
    ],
  },
  {
    type: 'Beauty Salon',
    icon: Star,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    journey: [
      { stage: 'Register', product: 'Khedma', action: 'DED license + DHA health license + municipality permit' },
      { stage: 'Comply', product: 'Amana', action: 'Health regulations, product safety, staff licensing' },
      { stage: 'Hire Staff', product: 'Tawzeef', action: 'Recruit stylists, therapists — visa sponsorship' },
      { stage: 'Train', product: 'Tadreeb', action: 'Product training, safety protocols, customer service' },
      { stage: 'Set Up Booking', product: 'BizOne', action: 'Service catalog, appointment scheduling, POS' },
      { stage: 'Source Products', product: 'NextaBizz', action: 'Wholesale beauty products, equipment supplies' },
      { stage: 'Get Funding', product: 'RTMN Finance', action: 'Equipment financing, shop fit-out capital' },
      { stage: 'Go Live on Glowzy', product: 'Glowzy', action: 'Listed for at-home beauty services + walk-in' },
      { stage: 'Advertise', product: 'Adzy', action: 'Target women 25-45, spa-day promotions, Qist BNPL' },
      { stage: 'Build Loyalty', product: 'Nuqta', action: 'Loyalty coins, birthday specials, referral rewards' },
    ],
  },
  {
    type: 'E-Commerce Store',
    icon: ShoppingCart,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    journey: [
      { stage: 'Register', product: 'Khedma', action: 'E-commerce license (instant), virtual office setup' },
      { stage: 'Comply', product: 'Amana', action: 'Consumer protection, data privacy, VAT, returns policy' },
      { stage: 'Hire Staff', product: 'Tawzeef', action: 'Customer support, warehouse staff, marketing team' },
      { stage: 'Set Up Store', product: 'BizOne', action: 'Online storefront, product catalog, checkout' },
      { stage: 'Source Products', product: 'NextaBizz + Inventora', action: 'Find suppliers, manage inventory, auto-reorder' },
      { stage: 'Enable Payments', product: 'RTMN Finance', action: 'NuqtaPay, Qist BNPL at checkout, COD' },
      { stage: 'Set Up Delivery', product: 'Wasil / QuickDrop', action: 'Same-day delivery, dark store fulfillment' },
      { stage: 'Advertise', product: 'Adzy', action: 'Product ads, featured listings, push notifications' },
      { stage: 'Build Loyalty', product: 'Nuqta + SpinZy', action: 'Coins on purchase, gamified engagement' },
      { stage: 'Scale', product: 'RTMN Finance', action: 'Working capital from sales data, expand inventory' },
    ],
  },
];

// ============================================
// DATA: Without vs With Comparison
// ============================================
const comparisonRows = [
  { function: 'Trade License', without: '2-4 weeks, 5+ office visits', with: '3-5 days, fully digital', icon: FileText },
  { function: 'Compliance', without: '25K+ AED/mo compliance officer', with: 'Auto-monitored by Amana', icon: Shield },
  { function: 'HR & Payroll', without: '4 separate tools, 5K+ AED/mo', with: 'Tawzeef: AED 15-49/employee', icon: Users },
  { function: 'POS & Operations', without: '3-6 tools, 3K-10K AED/mo', with: 'BizOne: AED 199-2K/mo', icon: Store },
  { function: 'Inventory', without: 'Excel + manual counts', with: 'AI auto-reorder, 30% less waste', icon: Package },
  { function: 'Procurement', without: 'WhatsApp + phone calls', with: 'NextaBizz marketplace + auto-PO', icon: ShoppingCart },
  { function: 'Business Loan', without: '2 months, 8-15% APR', with: '24h pre-approval from sales data', icon: CreditCard },
  { function: 'Marketing', without: 'Google/Meta: 25-40 AED CAC', with: 'Adzy: 2-8 AED per engagement', icon: Megaphone },
  { function: 'Loyalty Program', without: 'Build your own: 50K+ AED', with: 'Plug into Nuqta: 500+ merchants', icon: Crown },
  { function: 'Delivery', without: 'List on 3-4 apps separately', with: 'Auto-listed from BizOne setup', icon: Truck },
  { function: 'Government Services', without: 'PRO company: 3-8K AED/mo', with: 'Khedma: digital, tracked, automated', icon: Building2 },
  { function: 'Training', without: 'Ad-hoc, no tracking', with: 'Tadreeb: auto-assigned, cert tracking', icon: GraduationCap },
];

// ============================================
// DATA: The RTMN Stack (4 Layers)
// ============================================
const stackLayers = [
  {
    layer: 'LAYER 4',
    name: 'Customer Touchpoints',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    products: ['Nuqta', 'Wasil', 'Dinezy', 'Grocify', 'Glowzy', 'Safar', 'Rakab', 'SpinZy'],
    description: 'Where customers interact — ordering, paying, earning, playing',
  },
  {
    layer: 'LAYER 3',
    name: 'Business Operations',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    products: ['BizOne', 'Inventora', 'NextaBizz', 'Tawzeef', 'Tadreeb', 'Eventora'],
    description: 'Where businesses run — POS, inventory, HR, procurement, events',
  },
  {
    layer: 'LAYER 2',
    name: 'Financial & Compliance',
    color: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]/30',
    products: ['RTMN Finance', 'Amana', 'Khedma', 'Adzy', 'Daman', 'Aqar'],
    description: 'Where money flows & rules apply — payments, credit, compliance, insurance',
  },
  {
    layer: 'LAYER 1',
    name: 'Rabtul Core Infrastructure',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    products: ['Identity/SSO', 'Wallet Ledger', 'Rules Engine', 'Event Bus', 'Fraud Detection', 'Analytics/AI'],
    description: 'The silent backbone — identity, wallet, rules, events, fraud, AI',
  },
];

// ============================================
// DATA: Key Numbers
// ============================================
const keyNumbers = [
  { label: 'Total Monthly Cost', value: '~3K AED', subtext: 'vs 20K+ AED with separate tools', icon: DollarSign, color: 'text-emerald-400' },
  { label: 'Setup Time', value: '3-5 Days', subtext: 'vs 2-4 weeks traditional', icon: Clock, color: 'text-blue-400' },
  { label: 'Tools Replaced', value: '10-15', subtext: 'One ecosystem, one login', icon: Wrench, color: 'text-purple-400' },
  { label: 'Cost Savings', value: '60-80%', subtext: 'vs buying separate SaaS tools', icon: TrendingUp, color: 'text-[#c9a227]' },
  { label: 'Marketing CAC', value: '2-8 AED', subtext: 'vs 25-40 AED Google/Meta', icon: Target, color: 'text-pink-400' },
  { label: 'Cross-Sell LTV', value: '3.2x', subtext: 'Every user in 1 app uses 3.2 apps', icon: Award, color: 'text-amber-400' },
];

// ============================================
// MAIN COMPONENT
// ============================================
export default function BusinessSolutionsPage() {
  const [expandedStage, setExpandedStage] = useState<string | null>('registration');
  const [expandedExample, setExpandedExample] = useState<string | null>('Restaurant');

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <div className="bg-gradient-to-b from-[#0a1628] via-[#c9a227]/10 to-[#0a1628] border-b border-[#c9a227]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 bg-[#c9a227]/20 text-[#c9a227] text-sm px-4 py-1.5 rounded-full font-bold border border-[#c9a227]/50 mb-4">
              <Briefcase className="w-4 h-4" /> Complete Business Solutions
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white mt-4">
              From <span className="text-[#c9a227]">Zero</span> to Operating.
              <br />One Ecosystem.
            </h1>
            <p className="text-[#c9a227] text-lg mt-2 font-medium">من الصفر إلى التشغيل — نظام بيئي واحد</p>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto mt-4">
              RTMN provides a <strong className="text-white">complete end-to-end solution</strong> for any business —
              from registration and compliance to marketing, sales, HR, finance, and operations.
              <strong className="text-[#c9a227]"> 14 integrated products</strong> replace 10-15 separate tools,
              saving 60-80% in costs with one unified identity.
            </p>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {heroStats.map((stat, i) => (
              <div key={i} className={`${stat.bgColor} rounded-xl p-4 text-center border ${stat.borderColor} hover:scale-[1.02] transition-transform`}>
                <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* KEY NUMBERS */}
      {/* ============================================ */}
      <section className="bg-slate-800/30 border-b border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
            <Zap className="w-7 h-7 text-[#c9a227]" /> The RTMN Advantage
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {keyNumbers.map((item, i) => (
              <div key={i} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50 hover:border-[#c9a227]/30 transition-colors">
                <item.icon className={`w-5 h-5 ${item.color} mx-auto mb-2`} />
                <div className={`text-xl font-bold ${item.color}`}>{item.value}</div>
                <div className="text-xs text-white font-medium mt-1">{item.label}</div>
                <div className="text-[10px] text-slate-500 mt-1">{item.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 13 BUSINESS LIFECYCLE STAGES (Expandable) */}
      {/* ============================================ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <Layers className="w-7 h-7 text-[#c9a227]" /> 13 Business Functions — Fully Covered
          </h2>
          <p className="text-slate-400">Every stage of the business lifecycle mapped to an RTMN product. Click to expand.</p>
        </div>

        <div className="space-y-3">
          {lifecycleStages.map((stage) => (
            <div
              key={stage.id}
              className={`border-2 rounded-xl overflow-hidden transition-all ${
                expandedStage === stage.id
                  ? `${stage.bgColor} ${stage.borderColor}`
                  : 'bg-slate-800/20 border-slate-700/50 hover:border-slate-600/50'
              }`}
            >
              <button
                onClick={() => setExpandedStage(expandedStage === stage.id ? null : stage.id)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${stage.bgColor} flex items-center justify-center border ${stage.borderColor} flex-shrink-0`}>
                    <stage.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${stage.color}`} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`text-base sm:text-lg font-bold ${stage.color}`}>{stage.name}</h3>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${stage.bgColor} ${stage.color} border ${stage.borderColor}`}>
                        {stage.phase}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-1 mt-0.5">
                      <span className="text-white font-medium">{stage.primaryProduct}</span> — {stage.description}
                    </p>
                  </div>
                </div>
                {expandedStage === stage.id ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                )}
              </button>

              {expandedStage === stage.id && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                  {/* Product badges */}
                  <div className="flex items-center gap-2 flex-wrap mb-4">
                    <Link
                      href={stage.primaryHref}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-sm ${stage.bgColor} ${stage.color} border ${stage.borderColor} hover:opacity-80 transition-opacity`}
                    >
                      <stage.icon className="w-4 h-4" />
                      {stage.primaryProduct}
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    {stage.supportingProducts.map((sp, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-lg bg-slate-800/50 text-slate-400 border border-slate-700/50">
                        + {sp}
                      </span>
                    ))}
                  </div>

                  {/* Capabilities */}
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50 mb-4">
                    <h4 className="text-white font-bold mb-3 text-sm">Capabilities</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {stage.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                          <CheckCircle className={`w-4 h-4 ${stage.color} flex-shrink-0 mt-0.5`} />
                          {cap}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Without vs With */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
                      <h4 className="text-red-400 font-bold mb-2 text-sm flex items-center gap-2">
                        <XCircle className="w-4 h-4" /> Without RTMN
                      </h4>
                      <p className="text-slate-300 text-sm">{stage.withoutRTMN}</p>
                    </div>
                    <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/30">
                      <h4 className="text-emerald-400 font-bold mb-2 text-sm flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" /> With RTMN
                      </h4>
                      <p className="text-slate-300 text-sm">{stage.withRTMN}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* ============================================ */}
      {/* THE RTMN STACK (4 Layers) */}
      {/* ============================================ */}
      <section className="bg-slate-800/30 border-y border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <Database className="w-7 h-7 text-purple-400" /> The RTMN Stack
          </h2>
          <p className="text-slate-400 mb-8">Four integrated layers — every business function sits on a unified foundation</p>

          <div className="max-w-4xl mx-auto space-y-3">
            {stackLayers.map((layer, i) => (
              <div key={i}>
                <div className={`${layer.bgColor} rounded-xl p-5 border-2 ${layer.borderColor}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className={`text-xs font-bold ${layer.color} opacity-60`}>{layer.layer}</span>
                      <h3 className={`text-lg font-bold ${layer.color}`}>{layer.name}</h3>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">{layer.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {layer.products.map((product, j) => (
                      <span key={j} className={`text-xs px-3 py-1.5 rounded-lg font-medium ${layer.bgColor} ${layer.color} border ${layer.borderColor}`}>
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                {i < stackLayers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-5 h-5 text-slate-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Core Rule */}
          <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-[#c9a227]/10 rounded-xl p-6 border border-purple-500/30 max-w-4xl mx-auto text-center">
            <p className="text-white font-bold text-lg">
              &ldquo;No app owns wallet. No app owns merchants. No company bypasses Rabtul.&rdquo;
            </p>
            <p className="text-slate-400 text-sm mt-2">
              One identity, one wallet, one rules engine — every product shares the same foundation.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WITHOUT vs WITH RTMN (Table) */}
      {/* ============================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <ArrowRight className="w-7 h-7 text-[#c9a227]" /> Without RTMN vs With RTMN
        </h2>
        <p className="text-slate-400 mb-6">Side-by-side comparison across 12 business functions</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Function</th>
                <th className="text-left py-3 px-4 text-red-400 font-medium">Without RTMN</th>
                <th className="text-left py-3 px-4 text-emerald-400 font-medium">With RTMN</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={i} className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <row.icon className="w-4 h-4 text-[#c9a227] flex-shrink-0" />
                      <span className="text-white font-medium">{row.function}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-red-300/80">{row.without}</td>
                  <td className="py-3 px-4 text-emerald-300">{row.with}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Savings */}
        <div className="mt-6 bg-gradient-to-r from-emerald-500/10 to-[#c9a227]/10 rounded-xl p-6 border border-emerald-500/30">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-red-400 font-bold text-2xl">20,000+ AED/mo</div>
              <div className="text-xs text-slate-400">Traditional Setup (10-15 tools)</div>
            </div>
            <div>
              <ArrowRight className="w-8 h-8 text-[#c9a227] mx-auto hidden sm:block" />
              <ArrowDown className="w-8 h-8 text-[#c9a227] mx-auto sm:hidden" />
            </div>
            <div>
              <div className="text-emerald-400 font-bold text-2xl">~3,000 AED/mo</div>
              <div className="text-xs text-slate-400">RTMN Ecosystem (all-in-one)</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BUSINESS TYPE EXAMPLES */}
      {/* ============================================ */}
      <section className="bg-slate-800/30 border-y border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <Rocket className="w-7 h-7 text-[#c9a227]" /> Real-World Examples
          </h2>
          <p className="text-slate-400 mb-6">See how 3 different business types use RTMN from Day 0 to full operation</p>

          <div className="space-y-4">
            {businessExamples.map((example) => (
              <div
                key={example.type}
                className={`border-2 rounded-xl overflow-hidden transition-all ${
                  expandedExample === example.type
                    ? `${example.bgColor} ${example.borderColor}`
                    : 'bg-slate-800/20 border-slate-700/50 hover:border-slate-600/50'
                }`}
              >
                <button
                  onClick={() => setExpandedExample(expandedExample === example.type ? null : example.type)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl ${example.bgColor} flex items-center justify-center border ${example.borderColor}`}>
                      <example.icon className={`w-6 h-6 ${example.color}`} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${example.color}`}>{example.type}</h3>
                      <p className="text-slate-400 text-xs">{example.journey.length} steps from idea to operating</p>
                    </div>
                  </div>
                  {expandedExample === example.type ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {expandedExample === example.type && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <div className="relative">
                        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-slate-700/50" />
                        <div className="space-y-4">
                          {example.journey.map((step, i) => (
                            <div key={i} className="flex items-start gap-4 ml-0.5">
                              <div className={`w-6 h-6 rounded-full ${example.bgColor} border ${example.borderColor} flex items-center justify-center flex-shrink-0 z-10`}>
                                <span className={`text-[10px] font-bold ${example.color}`}>{i + 1}</span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-white font-bold text-sm">{step.stage}</span>
                                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${example.bgColor} ${example.color} border ${example.borderColor} font-bold`}>
                                    {step.product}
                                  </span>
                                </div>
                                <p className="text-slate-400 text-sm mt-0.5">{step.action}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* THE LOCKED ARCHITECTURE */}
      {/* ============================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <Network className="w-7 h-7 text-purple-400" /> Why It Works — The Locked Architecture
        </h2>
        <p className="text-slate-400 mb-6">Three non-negotiable rules make the ecosystem unbreakable</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              rule: 'No App Owns Wallet',
              description: 'All coin, credit, and payment logic lives ONLY in Rabtul. Every app shares the same financial backbone. One wallet, one ledger, one truth.',
              icon: Wallet,
              color: 'text-emerald-400',
              bgColor: 'bg-emerald-500/10',
              borderColor: 'border-emerald-500/30',
            },
            {
              rule: 'No App Owns Merchants',
              description: 'All merchant data lives ONLY in BizOne. When a merchant signs up, they are auto-listed across Wasil, Dinezy, Grocify, and every consumer app.',
              icon: Store,
              color: 'text-blue-400',
              bgColor: 'bg-blue-500/10',
              borderColor: 'border-blue-500/30',
            },
            {
              rule: 'No Company Bypasses Rabtul',
              description: 'Every transaction, every identity check, every event flows through Rabtul. This creates a single source of truth and prevents ecosystem fragmentation.',
              icon: Database,
              color: 'text-purple-400',
              bgColor: 'bg-purple-500/10',
              borderColor: 'border-purple-500/30',
            },
          ].map((item, i) => (
            <div key={i} className={`${item.bgColor} rounded-xl p-6 border-2 ${item.borderColor}`}>
              <item.icon className={`w-8 h-8 ${item.color} mb-3`} />
              <h3 className={`text-lg font-bold ${item.color} mb-2`}>{item.rule}</h3>
              <p className="text-slate-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Result */}
        <div className="mt-6 bg-gradient-to-r from-[#c9a227]/10 to-purple-500/10 rounded-xl p-6 border border-[#c9a227]/30 text-center">
          <p className="text-[#c9a227] font-bold text-lg mb-2">Result: 1 AED of GMV creates 7-10x value across 10 companies</p>
          <p className="text-slate-400 text-sm">
            A customer orders food via Dinezy → pays with NuqtaPay → earns Nuqta Coins → plays SpinZy →
            sees Adzy ad → books a ride via Rakab → sends money via Hawil. One customer, one identity, seven revenue streams.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* NAVIGATION FOOTER */}
      {/* ============================================ */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rtmn-story" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Network className="w-5 h-5" /> RTMN Story
            </Link>
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Building2 className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/inter-company-economics" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-500 transition-colors">
              <DollarSign className="w-5 h-5" /> Inter-Company Economics
            </Link>
            <Link href="/team-blueprint" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Users className="w-5 h-5" /> Team Blueprint
            </Link>
            <Link href="/rtmn" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Globe className="w-5 h-5" /> RTMN Hub
            </Link>
            <Link href="/bizone" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-colors">
              <Store className="w-5 h-5" /> BizOne
            </Link>
            <Link href="/amana" className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-500 transition-colors">
              <Shield className="w-5 h-5" /> Amana
            </Link>
            <Link href="/khedma" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-500 transition-colors">
              <Briefcase className="w-5 h-5" /> Khedma
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}