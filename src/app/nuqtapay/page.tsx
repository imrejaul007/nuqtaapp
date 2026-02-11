'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, CreditCard, Shield, Zap, Globe, Smartphone, QrCode,
  Lock, TrendingUp, Users, DollarSign, BarChart3, CheckCircle2,
  ChevronRight, ChevronDown, ChevronUp, Wallet, Store, Building2,
  ArrowRight, Layers, Network, Coins, Timer, RefreshCw, Star,
  AlertTriangle, Target, Rocket, Code, FileText, Settings, Server,
  Database, Cpu, Eye, ShieldCheck, Fingerprint, Receipt, PieChart,
  Landmark, LineChart, CircleDollarSign, Package, Home, Car, Plane,
  Banknote, ArrowRightLeft, BadgeCheck, Crown, Award, Sparkles,
  Monitor, Repeat, Key, Phone, Mail, Clock, Heart, Scale, Brain,
  Boxes, Share2, Cog, HelpCircle, Calculator, Factory, Ticket
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── Key Statistics ────────────────────────────────────────────────
const heroStats = [
  { label: 'PCI-DSS', value: 'Level 1', suffix: 'Certified', color: 'text-green-400', icon: ShieldCheck },
  { label: 'Apps Powered', value: '100+', suffix: 'integrated', color: 'text-blue-400', icon: Layers },
  { label: 'Payment Methods', value: '6', suffix: 'types', color: 'text-purple-400', icon: CreditCard },
  { label: 'Settlement', value: 'T+1', suffix: 'standard', color: 'text-[#c9a227]', icon: Timer },
  { label: 'Uptime Target', value: '99.99%', suffix: 'SLA', color: 'text-cyan-400', icon: Zap },
  { label: 'Avg Transaction', value: '120', suffix: 'AED', color: 'text-emerald-400', icon: DollarSign },
];

// ─── Payment Methods ───────────────────────────────────────────────
const paymentMethods = [
  {
    name: 'Cards (Visa/MC/AMEX)',
    icon: CreditCard,
    description: 'Full card acceptance with tokenization, 3DS2, and recurring support.',
    features: ['Visa, Mastercard, AMEX', 'Card tokenization (PCI-DSS)', '3DS2 SCA authentication', 'Recurring & subscription billing'],
    mdr: '1.5 - 2.5%',
    color: 'from-blue-500 to-indigo-600',
    volume: '55% of transactions',
  },
  {
    name: 'Apple Pay',
    icon: Smartphone,
    description: 'Seamless one-tap payments on iOS devices via NFC and in-app.',
    features: ['NFC tap-to-pay', 'In-app payments', 'Web checkout via Safari', 'Biometric (Face ID / Touch ID)'],
    mdr: '1.8%',
    color: 'from-gray-600 to-gray-800',
    volume: '15% of transactions',
  },
  {
    name: 'Google Pay',
    icon: Smartphone,
    description: 'Fast Android payments with tokenized card credentials.',
    features: ['NFC tap-to-pay', 'In-app payments', 'Web checkout via Chrome', 'PIN / biometric auth'],
    mdr: '1.8%',
    color: 'from-green-500 to-emerald-600',
    volume: '10% of transactions',
  },
  {
    name: 'Bank Transfer',
    icon: Landmark,
    description: 'Direct bank-to-bank transfers via UAE IPP and UAESWITCH.',
    features: ['UAE Instant Payment Platform', 'IBAN validation', 'Real-time confirmation', 'No chargebacks'],
    mdr: '0.5%',
    color: 'from-teal-500 to-cyan-600',
    volume: '8% of transactions',
  },
  {
    name: 'Hawil Card',
    icon: Globe,
    description: 'Multi-currency prepaid card for tourists and cross-border payments.',
    features: ['Google mid-market FX rate', 'Multi-currency wallet', 'Cross-border acceptance', 'Zero FX markup'],
    mdr: '1.2%',
    color: 'from-[#c9a227] to-amber-600',
    volume: '7% of transactions',
  },
  {
    name: 'Nuqta Coins',
    icon: Coins,
    description: 'Ecosystem loyalty currency with debit priority engine.',
    features: ['Promo coins priority', 'Branded coin redemption', 'Standard Nuqta coins', 'Partial + full payment'],
    mdr: '0%',
    color: 'from-purple-500 to-violet-600',
    volume: '5% of transactions',
  },
];

// ─── Core Features ─────────────────────────────────────────────────
const coreFeatures = [
  {
    name: 'Card Tokenization',
    icon: Key,
    description: 'PCI-DSS compliant card-on-file storage. Tokens replace sensitive card data across all apps.',
    badge: 'PCI-DSS L1',
    color: 'text-blue-400',
    details: [
      'Network-level tokenization (Visa/MC)',
      'Merchant-specific token vaults',
      'Token lifecycle management',
      'Cross-app token sharing within ecosystem',
    ],
  },
  {
    name: '3DS2 Authentication',
    icon: ShieldCheck,
    description: 'Strong Customer Authentication with frictionless and challenge flows per PSD2/CBUAE.',
    badge: 'SCA Ready',
    color: 'text-green-400',
    details: [
      'Frictionless flow (risk-based)',
      'Challenge flow with OTP/biometric',
      'Exemption engine (low-value, TRA)',
      'Issuer risk scoring integration',
    ],
  },
  {
    name: 'Real-time Fraud Detection',
    icon: Brain,
    description: 'ML-based fraud scoring engine analyzing 200+ signals per transaction in <50ms.',
    badge: 'ML-Powered',
    color: 'text-red-400',
    details: [
      'Velocity checks & pattern matching',
      'Device fingerprinting',
      'Behavioral biometrics',
      'Custom merchant rule engine',
    ],
  },
  {
    name: 'Multi-currency Support',
    icon: Globe,
    description: 'Accept and settle in 25+ currencies with real-time FX conversion.',
    badge: '25+ Currencies',
    color: 'text-purple-400',
    details: [
      'Real-time FX rate engine',
      'DCC (Dynamic Currency Conversion)',
      'Multi-currency settlement',
      'Competitive FX margins',
    ],
  },
  {
    name: 'QR Code Payments',
    icon: QrCode,
    description: 'Static and dynamic QR codes for in-store and P2P payments.',
    badge: 'Instant',
    color: 'text-cyan-400',
    details: [
      'EMVCo QR standard',
      'Static merchant QR',
      'Dynamic amount QR',
      'P2P transfers via QR',
    ],
  },
  {
    name: 'Split Payments',
    icon: ArrowRightLeft,
    description: 'Multi-party payment splitting for BNPL (Qist), marketplace, and group payments.',
    badge: 'Qist BNPL',
    color: 'text-orange-400',
    details: [
      'BNPL installment splitting (3-12 months)',
      'Marketplace seller splits',
      'Tip & service charge splits',
      'Group payment splitting',
    ],
  },
  {
    name: 'Merchant Settlement Engine',
    icon: Banknote,
    description: 'Automated T+1 settlement with real-time reporting and reconciliation.',
    badge: 'T+1',
    color: 'text-emerald-400',
    details: [
      'T+1 standard (free)',
      'T+0 same-day (0.5% fee)',
      'Multi-bank settlement',
      'Automated reconciliation',
    ],
  },
  {
    name: 'Recurring Payments',
    icon: Repeat,
    description: 'Subscription billing, standing orders, and automated retry logic.',
    badge: 'Auto-retry',
    color: 'text-yellow-400',
    details: [
      'Fixed & variable recurring',
      'Smart retry on decline',
      'Dunning management',
      'Subscription analytics',
    ],
  },
];

// ─── Consumer Features ─────────────────────────────────────────────
const consumerFeatures = [
  {
    title: 'QR Scan & Pay',
    icon: QrCode,
    description: 'Scan any NuqtaPay merchant QR code to pay instantly from the Nuqta app.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Save Cards Securely',
    icon: CreditCard,
    description: 'Tokenized card-on-file. Add once, pay everywhere across 100+ ecosystem apps.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Biometric Auth',
    icon: Fingerprint,
    description: 'Face ID, Touch ID, and fingerprint authentication for every transaction.',
    color: 'from-purple-500 to-violet-500',
  },
  {
    title: 'Transaction History',
    icon: Receipt,
    description: 'Full transaction history with receipts, categories, and spending analytics.',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Coin Debit Priority',
    icon: Coins,
    description: 'Smart debit order: Promo Coins > Branded Coins > Nuqta Coins > Cash balance.',
    color: 'from-[#c9a227] to-amber-500',
  },
  {
    title: 'Instant Notifications',
    icon: Zap,
    description: 'Real-time push notifications for every payment, refund, and coin reward.',
    color: 'from-yellow-500 to-orange-500',
  },
];

// ─── Merchant Features ─────────────────────────────────────────────
const merchantFeatures = [
  {
    title: 'Accept All Payment Types',
    icon: Wallet,
    description: 'Cards, Apple Pay, Google Pay, bank transfers, Hawil Card, and Nuqta Coins from a single integration.',
    metrics: '6 payment methods',
  },
  {
    title: 'Real-time Dashboard',
    icon: BarChart3,
    description: 'Live transaction monitoring, sales analytics, and performance metrics accessible 24/7.',
    metrics: 'Sub-second updates',
  },
  {
    title: 'Settlement Reports',
    icon: FileText,
    description: 'Detailed daily settlement reports with transaction-level breakdown and bank reconciliation.',
    metrics: 'T+1 standard',
  },
  {
    title: 'Refund Management',
    icon: RefreshCw,
    description: 'Full and partial refunds with automated customer notifications and ledger updates.',
    metrics: '<24hr processing',
  },
  {
    title: 'Chargeback Handling',
    icon: Shield,
    description: 'Automated chargeback alerts, evidence submission, and dispute management workflow.',
    metrics: '< 0.1% target',
  },
  {
    title: 'Multi-location Support',
    icon: Store,
    description: 'Manage multiple store locations with consolidated reporting and per-location analytics.',
    metrics: 'Unlimited locations',
  },
];

// ─── Merchant Pricing ──────────────────────────────────────────────
const merchantPricing = [
  { method: 'Card Payments (Visa/MC)', mdr: '2.5%', settlement: 'T+1', notes: 'Debit cards at 1.5%' },
  { method: 'Card Payments (AMEX)', mdr: '2.8%', settlement: 'T+1', notes: 'Premium card surcharge' },
  { method: 'Apple Pay / Google Pay', mdr: '1.8%', settlement: 'T+1', notes: 'Same as underlying card' },
  { method: 'QR Code Payments', mdr: '1.0%', settlement: 'T+1', notes: 'Lowest cost acceptance' },
  { method: 'Bank Transfer', mdr: '0.5%', settlement: 'T+1', notes: 'Fixed AED 1 min fee' },
  { method: 'Nuqta Coins', mdr: '0%', settlement: 'Instant', notes: 'Free ecosystem currency' },
  { method: 'Hawil Card', mdr: '1.2%', settlement: 'T+1', notes: 'FX at Google rate' },
];

const settlementOptions = [
  { type: 'T+1 Settlement', fee: 'Free', description: 'Standard next-day settlement to merchant bank account.' },
  { type: 'T+0 Same-Day', fee: '0.5%', description: 'Same-day settlement for merchants needing immediate cash flow.' },
  { type: 'Weekly Batch', fee: 'Free', description: 'Consolidated weekly settlement with reduced reconciliation.' },
];

// ─── Unit Economics ────────────────────────────────────────────────
const unitEconomics = [
  { metric: 'Average Transaction Value', value: '120 AED', icon: DollarSign },
  { metric: 'Average MDR Rate', value: '2.0%', icon: CircleDollarSign },
  { metric: 'MDR Revenue / Transaction', value: '2.40 AED', icon: TrendingUp },
  { metric: 'Scheme Fees (Visa/MC)', value: '0.45 AED', icon: CreditCard },
  { metric: 'Processing Cost', value: '0.35 AED', icon: Server },
  { metric: 'Fraud & Chargeback Reserve', value: '0.10 AED', icon: Shield },
  { metric: 'Total Cost / Transaction', value: '0.80 AED', icon: Calculator },
  { metric: 'Net Margin / Transaction', value: '1.60 AED', icon: Banknote },
  { metric: 'Net Margin %', value: '66.7%', icon: PieChart },
  { metric: 'Monthly Volume Target (Y1)', value: '50K txns', icon: Target },
  { metric: 'Monthly Net Revenue (Y1)', value: '80K AED', icon: LineChart },
  { metric: 'Annual Net Revenue (Y1)', value: '960K AED', icon: BarChart3 },
];

// ─── Security & Compliance ─────────────────────────────────────────
const securityFeatures = [
  {
    name: 'PCI-DSS Level 1',
    icon: ShieldCheck,
    description: 'Highest level of payment card industry compliance. Annual on-site audit by QSA.',
    status: 'Certified',
    color: 'text-green-400',
  },
  {
    name: '3DS2 Protocol',
    icon: Lock,
    description: 'EMVCo 3D Secure 2.0 for strong customer authentication on all card transactions.',
    status: 'Active',
    color: 'text-blue-400',
  },
  {
    name: 'Card Tokenization',
    icon: Key,
    description: 'Network-level tokenization replaces card PANs with non-reversible tokens.',
    status: 'Active',
    color: 'text-purple-400',
  },
  {
    name: 'Fraud ML Model',
    icon: Brain,
    description: 'Real-time machine learning model scoring 200+ signals per transaction in under 50ms.',
    status: 'Active',
    color: 'text-red-400',
  },
  {
    name: 'Encryption (AES-256)',
    icon: Lock,
    description: 'All data encrypted at rest (AES-256) and in transit (TLS 1.3). HSM for key management.',
    status: 'Active',
    color: 'text-cyan-400',
  },
  {
    name: 'SOC 2 Type II',
    icon: BadgeCheck,
    description: 'Service Organization Control report for security, availability, and confidentiality.',
    status: 'In Progress',
    color: 'text-yellow-400',
  },
];

// ─── How It Works ──────────────────────────────────────────────────
const howItWorks = [
  {
    step: 1,
    title: 'Merchant Integrates SDK',
    description: 'Integrate NuqtaPay via REST API, React Native SDK, iOS/Android native SDK, web checkout widget, or POS SDK for BizOne terminals.',
    icon: Code,
    color: 'from-blue-500 to-indigo-600',
    duration: '< 1 day',
  },
  {
    step: 2,
    title: 'Customer Initiates Payment',
    description: 'Customer selects payment method at checkout — card, Apple Pay, Google Pay, QR, bank transfer, Hawil Card, or Nuqta Coins.',
    icon: Smartphone,
    color: 'from-purple-500 to-violet-600',
    duration: '< 5 seconds',
  },
  {
    step: 3,
    title: 'NuqtaPay Processes',
    description: 'Real-time fraud check (ML model), 3DS2 authentication if required, payment authorization via acquiring bank, and transaction logging.',
    icon: Cpu,
    color: 'from-cyan-500 to-teal-600',
    duration: '< 2 seconds',
  },
  {
    step: 4,
    title: 'Merchant Gets Settled',
    description: 'Funds settled to merchant bank account. T+1 standard (free) or T+0 same-day (0.5% fee). Full reconciliation report delivered.',
    icon: Banknote,
    color: 'from-emerald-500 to-green-600',
    duration: 'T+1 / T+0',
  },
];

// ─── Integration SDKs ──────────────────────────────────────────────
const integrationSDKs = [
  {
    name: 'REST API',
    icon: Code,
    description: 'Full-featured RESTful API with comprehensive documentation, webhooks, and sandbox environment.',
    languages: ['cURL', 'Node.js', 'Python', 'PHP', 'Java', 'Go'],
    useCases: ['Custom integrations', 'Backend services', 'Microservices'],
  },
  {
    name: 'React Native SDK',
    icon: Smartphone,
    description: 'Pre-built payment components for React Native apps with native performance.',
    languages: ['TypeScript', 'JavaScript'],
    useCases: ['Cross-platform mobile apps', 'Nuqta ecosystem apps'],
  },
  {
    name: 'iOS Native SDK',
    icon: Smartphone,
    description: 'Swift SDK with Apple Pay integration and native UI components.',
    languages: ['Swift', 'Objective-C'],
    useCases: ['iOS apps', 'Apple Pay', 'In-app purchases'],
  },
  {
    name: 'Android Native SDK',
    icon: Smartphone,
    description: 'Kotlin SDK with Google Pay integration and Material Design components.',
    languages: ['Kotlin', 'Java'],
    useCases: ['Android apps', 'Google Pay', 'In-app purchases'],
  },
  {
    name: 'Web Checkout Widget',
    icon: Monitor,
    description: 'Drop-in checkout widget for web applications. Hosted payment page option available.',
    languages: ['JavaScript', 'TypeScript', 'HTML'],
    useCases: ['E-commerce websites', 'SaaS platforms', 'Subscription sites'],
  },
  {
    name: 'POS SDK (BizOne)',
    icon: Store,
    description: 'Point-of-sale SDK for BizOne terminals with NFC, chip, and QR support.',
    languages: ['Android (Kotlin)', 'Embedded C'],
    useCases: ['Retail POS', 'Restaurant POS', 'Event ticketing'],
  },
];

// ─── Revenue Model ─────────────────────────────────────────────────
const revenueStreams = [
  {
    stream: 'MDR Fees',
    description: 'Merchant Discount Rate charged per transaction. Primary revenue source.',
    percentage: '65%',
    yearOneRevenue: '3.9M AED',
    icon: CreditCard,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    stream: 'Premium Subscriptions',
    description: 'Monthly fee for advanced merchant tools: analytics, fraud rules, priority support.',
    percentage: '15%',
    yearOneRevenue: '900K AED',
    icon: Crown,
    color: 'from-purple-500 to-violet-600',
  },
  {
    stream: 'FX Conversion',
    description: 'Foreign exchange margin on cross-border transactions via Hawil Card.',
    percentage: '10%',
    yearOneRevenue: '600K AED',
    icon: Globe,
    color: 'from-[#c9a227] to-amber-600',
  },
  {
    stream: 'Value-Added Services',
    description: 'Fraud protection premium, chargeback insurance, advanced reporting, and API access tiers.',
    percentage: '10%',
    yearOneRevenue: '600K AED',
    icon: Sparkles,
    color: 'from-cyan-500 to-teal-600',
  },
];

// ─── Market Opportunity ────────────────────────────────────────────
const marketData = [
  { metric: 'UAE Payments Market', value: '$50B+', growth: 'Total addressable', icon: Globe },
  { metric: 'Digital Payments Growth', value: '25%', growth: 'YoY increase', icon: TrendingUp },
  { metric: 'Card Penetration', value: '78%', growth: 'of UAE adults', icon: CreditCard },
  { metric: 'Mobile Payments', value: '42%', growth: 'adoption rate', icon: Smartphone },
  { metric: 'E-commerce Volume', value: '$8B', growth: 'growing 30% YoY', icon: Package },
  { metric: 'QR Payment Adoption', value: '18%', growth: 'fastest growing', icon: QrCode },
];

// ─── Competitor Analysis ───────────────────────────────────────────
const competitors = [
  {
    name: 'Network International',
    type: 'Incumbent',
    strengths: ['Largest UAE acquirer', 'Bank relationships', 'POS network'],
    weaknesses: ['Legacy tech', 'Slow integration', 'High fees'],
    mdr: '2.5-3.5%',
    nuqtaEdge: 'Modern API, ecosystem integration, lower MDR',
  },
  {
    name: 'Telr',
    type: 'Regional Gateway',
    strengths: ['Easy setup', 'Multi-currency', 'Plugin ecosystem'],
    weaknesses: ['Limited POS', 'No loyalty integration', 'No BNPL'],
    mdr: '2.5-3.0%',
    nuqtaEdge: 'Full stack (online + POS + BNPL + coins)',
  },
  {
    name: 'PayTabs',
    type: 'Regional Gateway',
    strengths: ['MENA focus', 'Good docs', 'Fast onboarding'],
    weaknesses: ['No in-store', 'No ecosystem', 'Limited analytics'],
    mdr: '2.5-2.9%',
    nuqtaEdge: 'Omnichannel + ecosystem of 100+ apps',
  },
  {
    name: 'Stripe',
    type: 'Global Giant',
    strengths: ['Best developer UX', 'Global coverage', 'Advanced features'],
    weaknesses: ['Limited UAE support', 'No AED settlement', 'No local methods'],
    mdr: '2.9% + 1 AED',
    nuqtaEdge: 'UAE-first, AED settlement, local payment methods',
  },
  {
    name: 'Checkout.com',
    type: 'Global Challenger',
    strengths: ['Modern API', 'Good uptime', 'Enterprise focus'],
    weaknesses: ['Enterprise pricing', 'No SMB focus', 'No ecosystem'],
    mdr: '2.5-3.0%',
    nuqtaEdge: 'SMB-friendly pricing, loyalty integration, coins',
  },
];

// ─── Roadmap ───────────────────────────────────────────────────────
const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Core Gateway + Cards',
    timeline: 'Q1-Q2 2025',
    status: 'In Progress',
    color: 'from-blue-500 to-indigo-600',
    items: [
      'Card processing (Visa/MC/AMEX)',
      'PCI-DSS Level 1 certification',
      '3DS2 authentication',
      'Merchant onboarding portal',
      'Settlement engine (T+1)',
      'Basic fraud rules engine',
      'REST API + Web checkout widget',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'QR + Coins + Qist Split',
    timeline: 'Q3-Q4 2025',
    status: 'Planned',
    color: 'from-purple-500 to-violet-600',
    items: [
      'QR code payments (static + dynamic)',
      'Nuqta Coins payment integration',
      'Coin debit priority engine',
      'Split payments for Qist BNPL',
      'Apple Pay + Google Pay',
      'ML fraud detection model v1',
      'React Native + native SDKs',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Cross-border + Hawil',
    timeline: 'Q1-Q2 2026',
    status: 'Planned',
    color: 'from-[#c9a227] to-amber-600',
    items: [
      'Hawil Card payment acceptance',
      'Multi-currency settlement',
      'FX conversion engine',
      'Cross-border payments',
      'POS SDK for BizOne',
      'Advanced merchant analytics',
      'Chargeback automation',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Open Banking + Crypto',
    timeline: 'Q3-Q4 2026',
    status: 'Future',
    color: 'from-cyan-500 to-teal-600',
    items: [
      'UAE Open Banking integration',
      'Account-to-account payments',
      'Crypto payment acceptance (regulated)',
      'Stablecoin settlement option',
      'AI-powered fraud model v2',
      'White-label payment solution',
      'Regional expansion (GCC)',
    ],
  },
];

// ─── Risk Analysis ─────────────────────────────────────────────────
const risks = [
  {
    risk: 'PCI Compliance Costs',
    severity: 'High',
    probability: 'Certain',
    impact: 'AED 500K-1M annual audit + infrastructure costs',
    mitigation: 'Cloud-hosted PCI environment, shared infrastructure across ecosystem apps',
    icon: Shield,
    color: 'text-red-400',
  },
  {
    risk: 'Fraud Losses',
    severity: 'High',
    probability: 'Medium',
    impact: 'Direct financial loss + merchant trust erosion',
    mitigation: 'ML fraud model, 3DS2 mandate, velocity checks, merchant liability shift',
    icon: AlertTriangle,
    color: 'text-orange-400',
  },
  {
    risk: 'Scheme Fee Increases',
    severity: 'Medium',
    probability: 'Medium',
    impact: 'Visa/MC fee hikes compress margins by 10-20%',
    mitigation: 'Promote QR + coins (lower cost), negotiate volume discounts',
    icon: TrendingUp,
    color: 'text-yellow-400',
  },
  {
    risk: 'Regulatory Changes',
    severity: 'Medium',
    probability: 'Medium',
    impact: 'CBUAE new requirements could delay features or increase costs',
    mitigation: 'Proactive compliance team, regulatory monitoring, industry association membership',
    icon: Scale,
    color: 'text-blue-400',
  },
  {
    risk: 'Technology Downtime',
    severity: 'High',
    probability: 'Low',
    impact: 'Transaction failures, merchant revenue loss, reputation damage',
    mitigation: 'Multi-AZ deployment, auto-failover, 99.99% SLA, incident response playbook',
    icon: Server,
    color: 'text-purple-400',
  },
  {
    risk: 'Acquiring Bank Dependency',
    severity: 'Medium',
    probability: 'Low',
    impact: 'Single bank failure stops all processing',
    mitigation: 'Multi-acquirer strategy, backup processing routes, bank diversification',
    icon: Landmark,
    color: 'text-cyan-400',
  },
];

// ─── Ecosystem Integration ─────────────────────────────────────────
const ecosystemApps = [
  {
    app: 'BizOne POS',
    icon: Store,
    description: 'In-store payment processing via NuqtaPay POS SDK. Card, NFC, QR acceptance.',
    integration: 'POS SDK',
    volume: '35% of txns',
    color: 'from-blue-500 to-indigo-600',
    link: '/bizone',
  },
  {
    app: 'Nuqta App',
    icon: Smartphone,
    description: 'Consumer payment hub. QR scan & pay, card management, coin payments.',
    integration: 'Native SDK',
    volume: '20% of txns',
    color: 'from-purple-500 to-violet-600',
    link: '/nuqta-corp',
  },
  {
    app: 'Qist BNPL',
    icon: Calculator,
    description: 'Buy Now Pay Later split payments. Installment collection via NuqtaPay.',
    integration: 'Split API',
    volume: '15% of txns',
    color: 'from-orange-500 to-red-500',
    link: '/qist',
  },
  {
    app: 'Hawil Remittance',
    icon: Globe,
    description: 'Cross-border payment rails. Multi-currency processing and FX conversion.',
    integration: 'FX API',
    volume: '10% of txns',
    color: 'from-[#c9a227] to-amber-600',
    link: '/hawil',
  },
  {
    app: 'Wasil Delivery',
    icon: Package,
    description: 'Cash-on-delivery collection, driver payouts, and merchant settlement.',
    integration: 'Settlement API',
    volume: '8% of txns',
    color: 'from-green-500 to-emerald-600',
    link: '/wasil',
  },
  {
    app: 'Safar Bookings',
    icon: Plane,
    description: 'Travel booking payments. Multi-currency, partial payments, and refund handling.',
    integration: 'Checkout Widget',
    volume: '5% of txns',
    color: 'from-cyan-500 to-teal-600',
    link: '/safar',
  },
  {
    app: 'Sakin Rent',
    icon: Home,
    description: 'Recurring rent payments, security deposits, and landlord settlement.',
    integration: 'Recurring API',
    volume: '4% of txns',
    color: 'from-indigo-500 to-blue-600',
    link: '/sakin',
  },
  {
    app: 'Ajer Leasing',
    icon: Car,
    description: 'Lease payment collection, auto-debit, and delinquency management.',
    integration: 'Recurring API',
    volume: '3% of txns',
    color: 'from-rose-500 to-pink-600',
    link: '/ajer',
  },
];

// ─── Coin Debit Priority ───────────────────────────────────────────
const coinDebitPriority = [
  {
    priority: 1,
    type: 'Promo Coins',
    description: 'Campaign-specific coins with expiry dates. Used first to maximize merchant value.',
    color: 'from-red-500 to-orange-500',
    icon: Sparkles,
  },
  {
    priority: 2,
    type: 'Branded Coins',
    description: 'Merchant-branded coins earned from specific brands. Used at issuing merchant.',
    color: 'from-purple-500 to-violet-500',
    icon: Award,
  },
  {
    priority: 3,
    type: 'Nuqta Coins',
    description: 'Standard ecosystem coins earned from any transaction. Universal acceptance.',
    color: 'from-[#c9a227] to-amber-500',
    icon: Coins,
  },
  {
    priority: 4,
    type: 'Cash Balance',
    description: 'Remaining amount charged to linked card, Apple Pay, or bank account.',
    color: 'from-green-500 to-emerald-500',
    icon: Wallet,
  },
];

// ─── Navigation Tabs ───────────────────────────────────────────────
const tabs = [
  { id: 'overview', label: 'Overview', icon: Eye },
  { id: 'payments', label: 'Payment Methods', icon: CreditCard },
  { id: 'features', label: 'Core Features', icon: Zap },
  { id: 'merchants', label: 'For Merchants', icon: Store },
  { id: 'consumers', label: 'For Consumers', icon: Users },
  { id: 'pricing', label: 'Pricing & Economics', icon: DollarSign },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'integration', label: 'Integration', icon: Code },
  { id: 'market', label: 'Market & Competition', icon: Target },
  { id: 'roadmap', label: 'Roadmap', icon: Rocket },
  { id: 'ecosystem', label: 'Ecosystem', icon: Network },
];

export default function NuqtaPayDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const [expandedRisk, setExpandedRisk] = useState<number | null>(null);
  const [expandedCompetitor, setExpandedCompetitor] = useState<number | null>(null);
  const [expandedSDK, setExpandedSDK] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-[#0a1628]/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-sm font-bold">NuqtaPay</h1>
              <p className="text-[10px] text-slate-400">Payment Rails for 100+ Apps</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-[10px] font-medium border border-green-500/30">
              PCI-DSS L1
            </span>
            <span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-medium border border-blue-500/30">
              99.99% Uptime
            </span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-[#0a1628]/90 backdrop-blur border-b border-slate-800 sticky top-[57px] z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* OVERVIEW TAB */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-purple-600/20 border border-blue-500/20 p-8">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%234F46E5%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                    <CreditCard className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      NuqtaPay
                    </h1>
                    <p className="text-slate-400 text-sm">نقطة باي</p>
                  </div>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                  One Payment Engine, Infinite Possibilities
                </h2>
                <p className="text-slate-300 text-sm md:text-base max-w-3xl leading-relaxed mb-6">
                  NuqtaPay is the unified payment infrastructure powering 100+ apps across the RTMN ecosystem.
                  From card tokenization to QR payments, from Nuqta Coins to cross-border Hawil Card transactions,
                  NuqtaPay provides a single, PCI-DSS Level 1 certified gateway for every transaction in the ecosystem.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium">
                    Payment Gateway
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium">
                    Merchant Acquiring
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium">
                    Fraud Prevention
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-[#c9a227]/20 border border-[#c9a227]/30 text-[#c9a227] text-sm font-medium">
                    Coin Economy
                  </div>
                </div>
              </div>
            </div>

            {/* Key Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {heroStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="bg-slate-900/50 rounded-xl border border-slate-800 p-4 text-center hover:border-slate-700 transition-colors">
                    <Icon className={`w-5 h-5 ${stat.color} mx-auto mb-2`} />
                    <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-[10px] text-slate-500 mt-1">{stat.suffix}</div>
                    <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Quick Overview Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white">6 Payment Methods</h3>
                </div>
                <p className="text-xs text-slate-400 mb-3">Accept every way customers want to pay.</p>
                <div className="space-y-1.5">
                  {paymentMethods.map((pm, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">{pm.name}</span>
                      <span className="text-slate-500">{pm.mdr} MDR</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white">Security Stack</h3>
                </div>
                <p className="text-xs text-slate-400 mb-3">Enterprise-grade payment security.</p>
                <div className="space-y-1.5">
                  {securityFeatures.map((sf, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">{sf.name}</span>
                      <span className={`${sf.color} text-[10px]`}>{sf.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Network className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white">Ecosystem Integration</h3>
                </div>
                <p className="text-xs text-slate-400 mb-3">Powers ALL transactional apps.</p>
                <div className="space-y-1.5">
                  {ecosystemApps.slice(0, 6).map((app, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">{app.app}</span>
                      <span className="text-slate-500">{app.volume}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* How It Works Preview */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-400" />
                How NuqtaPay Works
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {howItWorks.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={i} className="relative">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono">STEP {step.step}</div>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                      <div className="mt-2 text-[10px] text-blue-400 font-mono">{step.duration}</div>
                      {i < 3 && (
                        <div className="hidden md:block absolute top-5 -right-2">
                          <ChevronRight className="w-4 h-4 text-slate-600" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Revenue & Economics Preview */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-5">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-400" />
                  Revenue Streams
                </h3>
                <div className="space-y-3">
                  {revenueStreams.map((rs, i) => {
                    const Icon = rs.icon;
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${rs.color} flex items-center justify-center`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-white">{rs.stream}</span>
                            <span className="text-xs text-blue-400">{rs.percentage}</span>
                          </div>
                          <div className="w-full bg-slate-800 rounded-full h-1.5 mt-1">
                            <div
                              className={`h-1.5 rounded-full bg-gradient-to-r ${rs.color}`}
                              style={{ width: rs.percentage }}
                            />
                          </div>
                        </div>
                        <span className="text-[10px] text-slate-500">{rs.yearOneRevenue}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-5">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <Coins className="w-4 h-4 text-[#c9a227]" />
                  Coin Debit Priority Engine
                </h3>
                <div className="space-y-3">
                  {coinDebitPriority.map((coin, i) => {
                    const Icon = coin.icon;
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-white">
                          {coin.priority}
                        </div>
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${coin.color} flex items-center justify-center`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-white">{coin.type}</div>
                          <div className="text-[10px] text-slate-400">{coin.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* PAYMENT METHODS TAB */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        {activeTab === 'payments' && (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Payment Methods</h2>
              <p className="text-sm text-slate-400">Six payment methods covering every customer preference in the UAE market.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {paymentMethods.map((method, i) => {
                const Icon = method.icon;
                return (
                  <div key={i} className="bg-slate-900/50 rounded-xl border border-slate-800 p-5 hover:border-slate-700 transition-all group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white">{method.name}</h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[10px] text-blue-400 font-mono">MDR: {method.mdr}</span>
                          <span className="text-[10px] text-slate-600">|</span>
                          <span className="text-[10px] text-slate-500">{method.volume}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 mb-3 leading-relaxed">{method.description}</p>
                    <div className="space-y-1.5">
                      {method.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Payment Volume Distribution */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-sm font-bold text-white mb-4">Transaction Volume Distribution (Projected)</h3>
              <div className="space-y-3">
                {paymentMethods.map((method, i) => {
                  const percentage = parseInt(method.volume);
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xs text-slate-400 w-36 truncate">{method.name}</span>
                      <div className="flex-1 bg-slate-800 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full bg-gradient-to-r ${method.color} transition-all duration-1000`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-400 w-16 text-right">{method.volume}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* CORE FEATURES TAB */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        {activeTab === 'features' && (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Core Features</h2>
              <p className="text-sm text-slate-400">Eight enterprise-grade payment features built for scale and security.</p>
            </div>

            <div className="space-y-3">
              {coreFeatures.map((feature, i) => {
                const Icon = feature.icon;
                const isExpanded = expandedFeature === i;
                return (
                  <div
                    key={i}
                    className="bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all"
                  >
                    <button
                      onClick={() => setExpandedFeature(isExpanded ? null : i)}
                      className="w-full p-5 flex items-center gap-4 text-left"
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                        <Icon className={`w-5 h-5 ${feature.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-bold text-white">{feature.name}</h3>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${feature.color} bg-slate-800`}>
                            {feature.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{feature.description}</p>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    {isExpanded && (
                      <div className="px-5 pb-5 border-t border-slate-800 pt-4">
                        <div className="grid md:grid-cols-2 gap-2">
                          {feature.details.map((detail, j) => (
                            <div key={j} className="flex items-center gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* FOR MERCHANTS TAB */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        {activeTab === 'merchants' && (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-2">For Merchants</h2>
              <p className="text-sm text-slate-400">Everything merchants need to accept payments and grow revenue.</p>
            </div>

            {/* Merchant Feature Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {merchantFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="bg-slate-900/50 rounded-xl border border-slate-800 p-5 hover:border-blue-500/30 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white">{feature.title}</h3>
                        <span className="text-[10px] text-blue-400 font-mono">{feature.metrics}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Merchant Dashboard Preview */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Monitor className="w-4 h-4 text-blue-400" />
                Merchant Dashboard Features
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Today\'s Revenue', value: '12,450 AED', change: '+18%', icon: DollarSign },
                  { label: 'Transactions', value: '342', change: '+12%', icon: BarChart3 },
                  { label: 'Avg Ticket Size', value: '36.4 AED', change: '+5%', icon: Receipt },
                  { label: 'Success Rate', value: '98.7%', change: '+0.3%', icon: CheckCircle2 },
                ].map((kpi, i) => {
                  const Icon = kpi.icon;
                  return (
                    <div key={i} className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Icon className="w-4 h-4 text-slate-400" />
                        <span className="text-[10px] text-green-400">{kpi.change}</span>
                      </div>
                      <div className="text-lg font-bold text-white">{kpi.value}</div>
                      <div className="text-[10px] text-slate-500">{kpi.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Merchant Onboarding Flow */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Rocket className="w-4 h-4 text-purple-400" />
                Merchant Onboarding (Same Day)
              </h3>
              <div className="grid md:grid-cols-5 gap-3">
                {[
                  { step: '1', title: 'Apply Online', desc: 'Trade license + Emirates ID upload', time: '5 min' },
                  { step: '2', title: 'KYB Verification', desc: 'Automated business verification', time: '< 2 hours' },
                  { step: '3', title: 'Agreement Sign', desc: 'Digital contract signing', time: '10 min' },
                  { step: '4', title: 'Integration', desc: 'SDK setup + sandbox testing', time: '< 1 day' },
                  { step: '5', title: 'Go Live', desc: 'Production switch + first payment', time: 'Instant' },
                ].map((step, i) => (
                  <div key={i} className="text-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-2 text-xs font-bold">
                      {step.step}
                    </div>
                    <h4 className="text-xs font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-[10px] text-slate-400 mb-1">{step.desc}</p>
                    <span className="text-[10px] text-blue-400 font-mono">{step.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* FOR CONSUMERS TAB */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        {activeTab === 'consumers' && (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-2">For Consumers</h2>
              <p className="text-sm text-slate-400">Seamless payment experience across the entire Nuqta ecosystem.</p>
            </div>

            {/* Consumer Feature Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {consumerFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="bg-slate-900/50 rounded-xl border border-slate-800 p-5 hover:border-slate-700 transition-all group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Coin Debit Priority */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Coins className="w-4 h-4 text-[#c9a227]" />
                Coin Debit Priority Engine
              </h3>
              <p className="text-xs text-slate-400 mb-5">When a customer pays with Nuqta Coins, the system automatically debits in this priority order to maximize value.</p>
              <div className="grid md:grid-cols-4 gap-4">
                {coinDebitPriority.map((coin, i) => {
                  const Icon = coin.icon;
                  return (
                    <div key={i} className="relative">
                      <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                            {coin.priority}
                          </div>
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${coin.color} flex items-center justify-center`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <h4 className="text-xs font-bold text-white mb-1">{coin.type}</h4>
                        <p className="text-[10px] text-slate-400 leading-relaxed">{coin.description}</p>
                      </div>
                      {i < 3 && (
                        <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                          <ArrowRight className="w-4 h-4 text-slate-600" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Payment Experience */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-purple-400" />
                Payment Experience Flow
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-xs font-bold text-blue-400 mb-3 uppercase tracking-wider">In-Store</h4>
                  <div className="space-y-2">
                    {['Open Nuqta app', 'Tap "Scan & Pay"', 'Scan merchant QR', 'Confirm amount', 'Biometric auth', 'Payment confirmed'].map((step, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-400 font-bold">
                          {i + 1}
                        </div>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-purple-400 mb-3 uppercase tracking-wider">Online Checkout</h4>
                  <div className="space-y-2">
                    {['Add items to cart', 'Select NuqtaPay', 'Choose payment method', 'Saved card or new', '3DS2 if required', 'Order confirmed'].map((step, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px] text-purple-400 font-bold">
                          {i + 1}
                        </div>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-green-400 mb-3 uppercase tracking-wider">P2P Transfer</h4>
                  <div className="space-y-2">
                    {['Open Nuqta app', 'Tap "Send Money"', 'Select contact / QR', 'Enter amount', 'Choose coin or cash', 'Instant transfer'].map((step, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-[10px] text-green-400 font-bold">
                          {i + 1}
                        </div>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* PRICING & ECONOMICS TAB */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        {activeTab === 'pricing' && (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Pricing & Unit Economics</h2>
              <p className="text-sm text-slate-400">Transparent merchant pricing with strong unit economics.</p>
            </div>

            {/* Merchant Pricing Table */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden">
              <div className="p-4 border-b border-slate-800">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-400" />
                  Merchant Pricing Schedule
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-slate-800">
                      <th className="text-left p-3 text-slate-400 font-medium">Payment Method</th>
                      <th className="text-center p-3 text-slate-400 font-medium">MDR</th>
                      <th className="text-center p-3 text-slate-400 font-medium">Settlement</th>
                      <th className="text-left p-3 text-slate-400 font-medium">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {merchantPricing.map((row, i) => (
                      <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                        <td className="p-3 text-white font-medium">{row.method}</td>
                        <td className="p-3 text-center text-blue-400 font-mono">{row.mdr}</td>
                        <td className="p-3 text-center text-green-400">{row.settlement}</td>
                        <td className="p-3 text-slate-400">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Settlement Options */}
            <div className="grid md:grid-cols-3 gap-4">
              {settlementOptions.map((option, i) => (
                <div key={i} className="bg-slate-900/50 rounded-xl border border-slate-800 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold text-white">{option.type}</h4>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      option.fee === 'Free' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {option.fee}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{option.description}</p>
                </div>
              ))}
            </div>

            {/* Unit Economics */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-purple-400" />
                Unit Economics (Per Transaction)
              </h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                {unitEconomics.map((item, i) => {
                  const Icon = item.icon;
                  const isHighlight = item.metric.includes('Net Margin') || item.metric.includes('Annual');
                  return (
                    <div key={i} className={`rounded-lg p-4 ${
                      isHighlight ? 'bg-green-500/10 border border-green-500/20' : 'bg-slate-800/50 border border-slate-700/50'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className={`w-4 h-4 ${isHighlight ? 'text-green-400' : 'text-slate-400'}`} />
                        <span className="text-[10px] text-slate-400">{item.metric}</span>
                      </div>
                      <div className={`text-lg font-bold ${isHighlight ? 'text-green-400' : 'text-white'}`}>
                        {item.value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Revenue Model */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <PieChart className="w-4 h-4 text-blue-400" />
                Revenue Model Breakdown
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {revenueStreams.map((rs, i) => {
                  const Icon = rs.icon;
                  return (
                    <div key={i} className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${rs.color} flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">{rs.stream}</h4>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-blue-400">{rs.percentage} of revenue</span>
                            <span className="text-[10px] text-slate-600">|</span>
                            <span className="text-[10px] text-green-400">Y1: {rs.yearOneRevenue}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400">{rs.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">Total Year 1 Revenue Target</span>
                  <span className="text-lg font-bold text-blue-400">6.0M AED</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* SECURITY TAB */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Security & Compliance</h2>
              <p className="text-sm text-slate-400">Enterprise-grade security infrastructure protecting every transaction.</p>
            </div>

            {/* Security Feature Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {securityFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="bg-slate-900/50 rounded-xl border border-slate-800 p-5 hover:border-green-500/20 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                          <Icon className={`w-5 h-5 ${feature.color}`} />
                        </div>
                        <h3 className="text-sm font-bold text-white">{feature.name}</h3>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                        feature.status === 'Certified' ? 'bg-green-500/20 text-green-400' :
                        feature.status === 'Active' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {feature.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Security Architecture */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Server className="w-4 h-4 text-cyan-400" />
                Security Architecture Layers
              </h3>
              <div className="space-y-3">
                {[
                  { layer: 'Layer 1 — Network', items: ['WAF (Web Application Firewall)', 'DDoS protection (Cloudflare)', 'IP whitelisting', 'Rate limiting'], color: 'border-red-500/30 bg-red-500/5' },
                  { layer: 'Layer 2 — Transport', items: ['TLS 1.3 encryption', 'Certificate pinning', 'HSTS enforcement', 'mTLS for API-to-API'], color: 'border-orange-500/30 bg-orange-500/5' },
                  { layer: 'Layer 3 — Application', items: ['3DS2 authentication', 'JWT token validation', 'Input sanitization', 'OWASP Top 10 protection'], color: 'border-yellow-500/30 bg-yellow-500/5' },
                  { layer: 'Layer 4 — Data', items: ['AES-256 encryption at rest', 'HSM key management', 'PCI-DSS token vault', 'Data masking/anonymization'], color: 'border-green-500/30 bg-green-500/5' },
                  { layer: 'Layer 5 — Monitoring', items: ['Real-time fraud ML model', 'SIEM integration', '24/7 SOC monitoring', 'Automated incident response'], color: 'border-blue-500/30 bg-blue-500/5' },
                ].map((layer, i) => (
                  <div key={i} className={`rounded-lg p-4 border ${layer.color}`}>
                    <h4 className="text-xs font-bold text-white mb-2">{layer.layer}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {layer.items.map((item, j) => (
                        <div key={j} className="flex items-center gap-1.5 text-[10px] text-slate-300">
                          <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Certifications */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-green-400" />
                Compliance & Certifications
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { cert: 'PCI-DSS Level 1', body: 'PCI SSC', status: 'Certified', desc: 'Highest payment card security standard' },
                  { cert: 'SOC 2 Type II', body: 'AICPA', status: 'In Progress', desc: 'Security, availability, confidentiality controls' },
                  { cert: 'CBUAE Payment License', body: 'Central Bank UAE', status: 'Applied', desc: 'Licensed payment service provider' },
                  { cert: 'EMVCo 3DS2', body: 'EMVCo', status: 'Certified', desc: '3D Secure 2.0 protocol compliance' },
                  { cert: 'ISO 27001', body: 'ISO', status: 'Planned', desc: 'Information security management system' },
                  { cert: 'GDPR Compliance', body: 'EU', status: 'Active', desc: 'Data protection for EU cardholder data' },
                ].map((cert, i) => (
                  <div key={i} className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xs font-bold text-white">{cert.cert}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                        cert.status === 'Certified' || cert.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                        cert.status === 'In Progress' || cert.status === 'Applied' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-slate-500/20 text-slate-400'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500 mb-1">{cert.body}</p>
                    <p className="text-[10px] text-slate-400">{cert.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Analysis */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-400" />
                Risk Analysis
              </h3>
              <div className="space-y-3">
                {risks.map((risk, i) => {
                  const Icon = risk.icon;
                  const isExpanded = expandedRisk === i;
                  return (
                    <div key={i} className="bg-slate-800/30 rounded-lg border border-slate-700/50 overflow-hidden">
                      <button
                        onClick={() => setExpandedRisk(isExpanded ? null : i)}
                        className="w-full p-4 flex items-center gap-3 text-left"
                      >
                        <Icon className={`w-5 h-5 ${risk.color} flex-shrink-0`} />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white">{risk.risk}</span>
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                              risk.severity === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {risk.severity}
                            </span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-700 text-slate-300">
                              P: {risk.probability}
                            </span>
                          </div>
                        </div>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </button>
                      {isExpanded && (
                        <div className="px-4 pb-4 border-t border-slate-700/50 pt-3 space-y-2">
                          <div>
                            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Impact</span>
                            <p className="text-xs text-slate-300">{risk.impact}</p>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Mitigation</span>
                            <p className="text-xs text-green-400">{risk.mitigation}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* INTEGRATION TAB */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        {activeTab === 'integration' && (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Integration SDKs & APIs</h2>
              <p className="text-sm text-slate-400">Integrate NuqtaPay in under a day with our comprehensive SDK suite.</p>
            </div>

            {/* SDK Cards */}
            <div className="space-y-3">
              {integrationSDKs.map((sdk, i) => {
                const Icon = sdk.icon;
                const isExpanded = expandedSDK === i;
                return (
                  <div key={i} className="bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all">
                    <button
                      onClick={() => setExpandedSDK(isExpanded ? null : i)}
                      className="w-full p-5 flex items-center gap-4 text-left"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-white">{sdk.name}</h3>
                        <p className="text-xs text-slate-400 mt-0.5">{sdk.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="hidden md:flex gap-1.5">
                          {sdk.languages.slice(0, 3).map((lang, j) => (
                            <span key={j} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">
                              {lang}
                            </span>
                          ))}
                          {sdk.languages.length > 3 && (
                            <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400">
                              +{sdk.languages.length - 3}
                            </span>
                          )}
                        </div>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </div>
                    </button>
                    {isExpanded && (
                      <div className="px-5 pb-5 border-t border-slate-800 pt-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Supported Languages</h4>
                            <div className="flex flex-wrap gap-1.5">
                              {sdk.languages.map((lang, j) => (
                                <span key={j} className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400">
                                  {lang}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Use Cases</h4>
                            <div className="space-y-1.5">
                              {sdk.useCases.map((uc, j) => (
                                <div key={j} className="flex items-center gap-2 text-xs text-slate-300">
                                  <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0" />
                                  {uc}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* API Code Sample */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Code className="w-4 h-4 text-green-400" />
                Quick Integration Example
              </h3>
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800 overflow-x-auto">
                <pre className="text-xs text-slate-300 font-mono leading-relaxed">
{`// Create a payment intent
const response = await fetch('https://api.nuqtapay.com/v1/payments', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer sk_live_YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    amount: 12000,        // Amount in fils (120.00 AED)
    currency: 'AED',
    payment_methods: ['card', 'apple_pay', 'qr', 'nuqta_coins'],
    merchant_id: 'merch_abc123',
    metadata: {
      order_id: 'ORD-2025-001',
      customer_id: 'cust_xyz789',
    },
    coin_debit_priority: ['promo', 'branded', 'nuqta', 'cash'],
    split_payment: {       // Optional: for Qist BNPL
      type: 'installment',
      count: 4,
      interval: 'monthly',
    },
  }),
});

const payment = await response.json();
// Returns: { id: 'pay_...', status: 'requires_action', checkout_url: '...' }`}
                </pre>
              </div>
            </div>

            {/* Webhook Events */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                Webhook Events
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {[
                  'payment.created', 'payment.succeeded', 'payment.failed',
                  'payment.refunded', 'payment.disputed', 'settlement.completed',
                  'merchant.onboarded', 'token.created', 'token.expired',
                  'fraud.flagged', 'subscription.renewed', 'subscription.cancelled',
                ].map((event, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded bg-slate-800/30 text-xs">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <code className="text-slate-300 font-mono text-[11px]">{event}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* MARKET & COMPETITION TAB */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        {activeTab === 'market' && (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Market Opportunity & Competition</h2>
              <p className="text-sm text-slate-400">UAE payments market analysis and competitive positioning.</p>
            </div>

            {/* Market Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {marketData.map((data, i) => {
                const Icon = data.icon;
                return (
                  <div key={i} className="bg-slate-900/50 rounded-xl border border-slate-800 p-4 text-center">
                    <Icon className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">{data.value}</div>
                    <div className="text-[10px] text-slate-500">{data.growth}</div>
                    <div className="text-xs text-slate-400 mt-1">{data.metric}</div>
                  </div>
                );
              })}
            </div>

            {/* Competitor Analysis */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-red-400" />
                Competitive Landscape
              </h3>
              <div className="space-y-3">
                {competitors.map((comp, i) => {
                  const isExpanded = expandedCompetitor === i;
                  return (
                    <div key={i} className="bg-slate-800/30 rounded-lg border border-slate-700/50 overflow-hidden">
                      <button
                        onClick={() => setExpandedCompetitor(isExpanded ? null : i)}
                        className="w-full p-4 flex items-center gap-3 text-left"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center">
                          <Building2 className="w-4 h-4 text-slate-300" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white">{comp.name}</span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-700 text-slate-300">{comp.type}</span>
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">MDR: {comp.mdr}</div>
                        </div>
                        <div className="hidden md:block px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20">
                          <span className="text-[10px] text-blue-400">NuqtaPay Edge: {comp.nuqtaEdge}</span>
                        </div>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </button>
                      {isExpanded && (
                        <div className="px-4 pb-4 border-t border-slate-700/50 pt-3">
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <h4 className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Strengths</h4>
                              <div className="space-y-1">
                                {comp.strengths.map((s, j) => (
                                  <div key={j} className="flex items-center gap-1.5 text-xs text-slate-300">
                                    <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0" />
                                    {s}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Weaknesses</h4>
                              <div className="space-y-1">
                                {comp.weaknesses.map((w, j) => (
                                  <div key={j} className="flex items-center gap-1.5 text-xs text-slate-300">
                                    <AlertTriangle className="w-3 h-3 text-orange-400 flex-shrink-0" />
                                    {w}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-[10px] text-blue-400 uppercase tracking-wider mb-2">NuqtaPay Advantage</h4>
                              <p className="text-xs text-blue-300">{comp.nuqtaEdge}</p>
                              <div className="mt-2 text-[10px] text-slate-400">
                                Their MDR: <span className="text-red-400">{comp.mdr}</span> vs NuqtaPay: <span className="text-green-400">1.0-2.5%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Market Positioning */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-[#c9a227]" />
                NuqtaPay Differentiation
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { title: 'Ecosystem Lock-in', desc: '100+ apps drive merchant adoption. No competitor has this.', icon: Network },
                  { title: 'Coin Economy', desc: '0% MDR for coin payments. No competitor offers free payment rails.', icon: Coins },
                  { title: 'UAE-First Design', desc: 'AED settlement, local methods, Arabic-first UX. Built for UAE.', icon: Globe },
                  { title: 'Full Stack', desc: 'Online + POS + BNPL + QR + Coins. Single integration for everything.', icon: Layers },
                ].map((diff, i) => {
                  const Icon = diff.icon;
                  return (
                    <div key={i} className="bg-slate-800/30 rounded-lg p-4 border border-[#c9a227]/20">
                      <Icon className="w-6 h-6 text-[#c9a227] mb-3" />
                      <h4 className="text-xs font-bold text-white mb-1">{diff.title}</h4>
                      <p className="text-[10px] text-slate-400 leading-relaxed">{diff.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* ROADMAP TAB */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        {activeTab === 'roadmap' && (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Product Roadmap</h2>
              <p className="text-sm text-slate-400">Four-phase roadmap from core gateway to open banking and crypto.</p>
            </div>

            {/* Roadmap Phases */}
            <div className="space-y-4">
              {roadmapPhases.map((phase, i) => (
                <div key={i} className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-slate-700 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-sm">{phase.phase.replace('Phase ', 'P')}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-white">{phase.phase}: {phase.title}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                          phase.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                          phase.status === 'Planned' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-slate-500/20 text-slate-400'
                        }`}>
                          {phase.status}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500">{phase.timeline}</span>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {phase.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className={`w-3 h-3 flex-shrink-0 ${
                          phase.status === 'In Progress' && j < 3 ? 'text-green-400' : 'text-slate-600'
                        }`} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Roadmap Timeline Visual */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                Timeline Summary
              </h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700" />
                <div className="space-y-6">
                  {roadmapPhases.map((phase, i) => (
                    <div key={i} className="flex items-start gap-4 relative">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center z-10 shadow-lg`}>
                        <span className="text-white text-xs font-bold">{i + 1}</span>
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-xs font-bold text-white">{phase.title}</h4>
                          <span className="text-[10px] text-slate-500 font-mono">{phase.timeline}</span>
                        </div>
                        <p className="text-[10px] text-slate-400">
                          {phase.items.slice(0, 3).join(' + ')} + {phase.items.length - 3} more
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* ECOSYSTEM TAB */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Ecosystem Integration</h2>
              <p className="text-sm text-slate-400">NuqtaPay powers ALL transactional apps across the RTMN ecosystem.</p>
            </div>

            {/* Ecosystem App Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {ecosystemApps.map((app, i) => {
                const Icon = app.icon;
                return (
                  <Link key={i} href={app.link} className="block group">
                    <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-5 hover:border-blue-500/30 transition-all h-full">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-sm font-bold text-white mb-1">{app.app}</h3>
                      <p className="text-xs text-slate-400 mb-3 leading-relaxed">{app.description}</p>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400">{app.integration}</span>
                        <span className="text-slate-500">{app.volume}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Integration Architecture */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Network className="w-4 h-4 text-purple-400" />
                Integration Architecture
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-xs font-bold text-blue-400 mb-3 uppercase tracking-wider">Consumer Layer</h4>
                  <div className="space-y-2">
                    {[
                      { app: 'Nuqta App', flow: 'QR Pay + Coin Payments' },
                      { app: 'Safar', flow: 'Travel Booking Payments' },
                      { app: 'Sakin', flow: 'Recurring Rent Payments' },
                      { app: 'Ajer', flow: 'Lease Auto-debit' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded bg-slate-800/30 text-xs">
                        <span className="text-slate-300">{item.app}</span>
                        <span className="text-[10px] text-slate-500">{item.flow}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-green-400 mb-3 uppercase tracking-wider">Merchant Layer</h4>
                  <div className="space-y-2">
                    {[
                      { app: 'BizOne POS', flow: 'In-store Card + NFC + QR' },
                      { app: 'Wasil', flow: 'COD Collection + Payouts' },
                      { app: 'Qist', flow: 'BNPL Split Payments' },
                      { app: 'Eventora', flow: 'Ticket Sales + Refunds' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded bg-slate-800/30 text-xs">
                        <span className="text-slate-300">{item.app}</span>
                        <span className="text-[10px] text-slate-500">{item.flow}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#c9a227] mb-3 uppercase tracking-wider">Financial Layer</h4>
                  <div className="space-y-2">
                    {[
                      { app: 'Hawil', flow: 'Cross-border FX + Card' },
                      { app: 'NuqtaPay Core', flow: 'Gateway + Processing' },
                      { app: 'Settlement Engine', flow: 'T+1 / T+0 Payouts' },
                      { app: 'Fraud Engine', flow: 'ML Scoring + Rules' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded bg-slate-800/30 text-xs">
                        <span className="text-slate-300">{item.app}</span>
                        <span className="text-[10px] text-slate-500">{item.flow}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction Flow */}
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4 text-cyan-400" />
                Cross-App Transaction Flow
              </h3>
              <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50">
                <div className="text-xs text-slate-300 leading-relaxed space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[10px] text-blue-400 font-bold">1</span>
                    </div>
                    <div>
                      <span className="font-bold text-white">Customer orders food on Wasil app.</span>
                      <span className="text-slate-400"> Total: 85 AED. Customer has 20 Nuqta Coins + saved Visa card.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[10px] text-purple-400 font-bold">2</span>
                    </div>
                    <div>
                      <span className="font-bold text-white">NuqtaPay Coin Debit Priority Engine activates.</span>
                      <span className="text-slate-400"> Deducts 5 Promo Coins + 15 Nuqta Coins = 20 AED. Remaining: 65 AED charged to saved Visa.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[10px] text-green-400 font-bold">3</span>
                    </div>
                    <div>
                      <span className="font-bold text-white">Visa payment processed.</span>
                      <span className="text-slate-400"> 3DS2 frictionless (low risk). Authorized in 1.2 seconds. Customer earns 4 Nuqta Coins on the 65 AED card payment.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#c9a227]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[10px] text-[#c9a227] font-bold">4</span>
                    </div>
                    <div>
                      <span className="font-bold text-white">Settlement.</span>
                      <span className="text-slate-400"> Restaurant receives 65 AED (card) + 20 AED (coin redemption) = 85 AED minus 1.30 AED MDR (2% on card, 0% on coins) = 83.70 AED settled T+1.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* RELATED PAGES / NAVIGATION */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <h3 className="text-sm font-bold text-white mb-4">Related Pages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { label: 'BizOne POS', href: '/bizone', icon: Store },
              { label: 'Qist BNPL', href: '/qist', icon: Calculator },
              { label: 'Hawil Remittance', href: '/hawil', icon: Globe },
              { label: 'Wasil Delivery', href: '/wasil', icon: Package },
              { label: 'Safar Travel', href: '/safar', icon: Plane },
              { label: 'Sakin Rent', href: '/sakin', icon: Home },
              { label: 'Ajer Leasing', href: '/ajer', icon: Car },
              { label: 'RTMN Dashboard', href: '/rtmn-dashboard', icon: BarChart3 },
              { label: 'Ecosystem', href: '/ecosystem', icon: Network },
              { label: 'Value Chain', href: '/value-chain', icon: Layers },
              { label: 'Monetization', href: '/monetization', icon: DollarSign },
              { label: 'RTMN Finance', href: '/rtmn-finance', icon: Banknote },
            ].map((link, i) => {
              const Icon = link.icon;
              return (
                <Link key={i} href={link.href} className="flex items-center gap-2 p-3 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 hover:bg-slate-800/50 transition-all text-xs text-slate-300 hover:text-white group">
                  <Icon className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  {link.label}
                  <ChevronRight className="w-3 h-3 ml-auto text-slate-600 group-hover:text-blue-400" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <GlobalFooter />
    </div>
  );
}
