'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Pill, Heart, ShieldCheck, Truck, Users, TrendingUp,
  Target, Rocket, CheckCircle, AlertTriangle, Building, ArrowRight,
  Star, BarChart3, Store, CreditCard,
  FileText, Calculator, ChevronDown, ChevronUp, HeartHandshake, Coins,
  Network, MapPin, DollarSign, LineChart,
  UserCheck, Globe, Calendar, RefreshCw, Layers, Shield,
  Thermometer, Stethoscope, Syringe, ScrollText, Briefcase, ArrowUpRight
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── HERO STATS ─────────────────────────────────────────────────
const heroStats = [
  { label: 'Partner Pharmacies', value: '500+', suffix: 'live', color: 'text-teal-400' },
  { label: 'Delivery SLA', value: '45', suffix: 'min', color: 'text-green-400' },
  { label: 'Avg Order Value', value: '85', suffix: 'AED', color: 'text-blue-400' },
  { label: 'Cold-Chain Fleet', value: '100%', suffix: 'monitored', color: 'text-cyan-400' },
  { label: 'UAE Pharmacy Market', value: '$1.8B', suffix: 'annually', color: 'text-emerald-400' },
  { label: 'Insurance Partners', value: '12+', suffix: 'active', color: 'text-[#c9a227]' },
];

// ─── CATEGORIES ─────────────────────────────────────────────────
const categories = [
  {
    id: 'prescription',
    name: 'Prescription Delivery',
    icon: ScrollText,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    description: 'Upload prescriptions digitally or via photo. Pharmacist-verified, delivered to your door.',
    features: ['Photo/PDF prescription upload', 'Licensed pharmacist verification', 'E-prescription from Tabib integration', 'Controlled substance compliance', 'Doctor callback if needed', 'Prescription history & refill reminders'],
    metrics: ['40% of orders', '30-min avg delivery', '99.8% accuracy'],
    avgOrder: '120 AED',
  },
  {
    id: 'otc',
    name: 'OTC Medicines',
    icon: Pill,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    description: 'Over-the-counter medicines: pain relief, cold & flu, vitamins, first aid, and more.',
    features: ['Smart symptom-based search', 'Dosage guidance & warnings', 'Drug interaction checker', 'Alternative suggestions', 'Bulk purchase discounts', 'Family medicine cabinet tracker'],
    metrics: ['30% of orders', '25-min avg delivery', '2,000+ SKUs'],
    avgOrder: '65 AED',
  },
  {
    id: 'wellness',
    name: 'Health & Wellness Products',
    icon: Heart,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    description: 'Vitamins, supplements, skincare, personal care, baby health, and wellness essentials.',
    features: ['Curated wellness bundles', 'Subscription boxes (monthly)', 'Expert health recommendations', 'Halal-certified options', 'Organic & natural products', 'Seasonal wellness packs'],
    metrics: ['15% of orders', '45-min avg delivery', '5,000+ products'],
    avgOrder: '95 AED',
  },
  {
    id: 'chronic',
    name: 'Chronic Medication Auto-Refill',
    icon: RefreshCw,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    description: 'Automated monthly delivery of chronic medications. Never miss a dose again.',
    features: ['Auto-refill scheduling', 'Doctor-verified recurring prescriptions', 'Dosage reminders & tracking', 'Insurance auto-billing', 'Price lock guarantee', 'Skip/pause anytime'],
    metrics: ['10% of orders', '95% retention rate', 'Avg 6-month subscription'],
    avgOrder: '180 AED',
  },
  {
    id: 'insurance',
    name: 'Insurance-Covered Orders',
    icon: ShieldCheck,
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/30',
    description: 'Seamless insurance claim processing. Pay only your copay, we handle the rest.',
    features: ['Real-time eligibility check', 'Instant copay calculation', 'Direct insurer billing', '12+ insurance partners', 'E-claim submission', 'Prior authorization support'],
    metrics: ['25% of eligible orders', 'Avg 70% coverage', '3-min approval'],
    avgOrder: '35 AED copay (210 AED total)',
  },
  {
    id: 'emergency',
    name: 'Emergency Pharmacy',
    icon: Syringe,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    description: 'Urgent medication delivery within 20 minutes. Available 24/7 for critical needs.',
    features: ['20-min guaranteed delivery', '24/7 availability', 'Priority fleet dispatch', 'Live pharmacist on call', 'Emergency first-aid kits', 'Hospital discharge prescriptions'],
    metrics: ['5% of orders', '18-min avg delivery', '24/7 coverage'],
    avgOrder: '150 AED',
  },
];

// ─── HOW IT WORKS ───────────────────────────────────────────────
const howItWorks = [
  { step: 1, title: 'Upload Prescription', description: 'Photo, PDF, or e-prescription from Tabib. OTC orders skip this step.', icon: FileText, color: 'bg-teal-500' },
  { step: 2, title: 'Pharmacist Verification', description: 'Licensed pharmacist reviews prescription within 5 minutes. Drug interactions checked.', icon: UserCheck, color: 'bg-blue-500' },
  { step: 3, title: 'Insurance Check', description: 'Automatic eligibility verification. Copay calculated in real-time via Daman integration.', icon: ShieldCheck, color: 'bg-violet-500' },
  { step: 4, title: 'Pharmacy Dispatch', description: 'Nearest partner pharmacy prepares your order with temperature monitoring.', icon: Store, color: 'bg-emerald-500' },
  { step: 5, title: 'Cold-Chain Delivery', description: 'Temperature-monitored Wasil rider delivers within 45 minutes (20 min for emergency).', icon: Thermometer, color: 'bg-cyan-500' },
  { step: 6, title: 'Pay & Earn Coins', description: 'Pay via NuqtaPay, insurance, or Hawil Card. Earn 3% Nuqta coins on every order.', icon: Coins, color: 'bg-[#c9a227]' },
];

// ─── ECOSYSTEM INTEGRATIONS ─────────────────────────────────────
const ecosystemIntegrations = [
  {
    id: 'tabib',
    product: 'Tabib',
    integration: 'E-prescription pipeline',
    description: 'Direct digital prescription transfer from Tabib telehealth consultations. Doctor prescribes, MediEarn delivers automatically.',
    benefits: ['Zero-friction prescription flow', 'Doctor-verified orders', 'Automatic refill triggers', 'Reduced prescription errors'],
    icon: Stethoscope,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
  },
  {
    id: 'nuqtapay',
    product: 'NuqtaPay',
    integration: 'Payment processing',
    description: 'Seamless checkout with NuqtaPay wallet, cards, and BNPL via Qist for expensive medications.',
    benefits: ['One-tap payment', 'Split payment with insurance', 'Qist installments for chronic meds', 'Auto-debit for subscriptions'],
    icon: CreditCard,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    id: 'daman',
    product: 'Daman Insurance',
    integration: 'Insurance verification & claims',
    description: 'Real-time insurance eligibility checks, copay calculation, and direct claims submission to 12+ UAE insurers.',
    benefits: ['Instant eligibility check', 'Auto copay calculation', 'Direct insurer billing', 'Prior authorization support'],
    icon: Shield,
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
  },
  {
    id: 'wasil',
    product: 'Wasil Cold-Chain',
    integration: 'Temperature-monitored delivery',
    description: 'Wasil riders equipped with insulated bags and temperature loggers for medication-safe delivery.',
    benefits: ['2-8°C cold chain maintained', 'GPS + temp tracking', 'Compliance documentation', 'Dedicated pharmacy fleet'],
    icon: Truck,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
  {
    id: 'coins',
    product: 'Nuqta Coins',
    integration: 'Loyalty rewards on health spend',
    description: 'Earn 3% Nuqta coins on every MediEarn purchase. Redeem across 500+ ecosystem merchants.',
    benefits: ['3% earn rate on pharmacy', '5% for Nuqta+ members', 'Redeem at any Nuqta merchant', 'Health spending rewards'],
    icon: Coins,
    color: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
  },
];

// ─── UNIT ECONOMICS ─────────────────────────────────────────────
const unitEconomics = {
  avgOrderValue: 85,
  deliveryFee: 10,
  commissionPercent: '10%',
  commissionAED: 8.5,
  insuranceFee: 3,
  subscriptionRevShare: 2,
  totalRevenue: 23.5,
  riderCost: 7,
  pharmacistVerification: 1.5,
  coldChainCost: 2,
  operatingCost: 3,
  netRevenue: 10,
  netMargin: '11.8%',
  ltv12Months: 2040,
  cac: 35,
  ltvCacRatio: '58x',
  paybackDays: 6,
  ordersPerUser: 2,
};

// ─── REVENUE MODEL ──────────────────────────────────────────────
const revenueStreams = [
  { source: 'Delivery Commission', description: 'Platform takes 10% of order value from pharmacy partner', value: '10%', share: '40%', margin: 'High', icon: DollarSign },
  { source: 'Pharmacy Subscription', description: 'Monthly subscription for pharmacy partners to access platform', value: '499-1999 AED/mo', share: '20%', margin: 'Very High', icon: Store },
  { source: 'Insurance Processing Fees', description: 'Fee per insurance claim processed through the platform', value: '5-15 AED/claim', share: '15%', margin: 'High', icon: ShieldCheck },
  { source: 'Promoted Listings', description: 'Pharmacies pay for priority placement in search results', value: '0.50-2 AED/click', share: '15%', margin: 'Very High', icon: Star },
  { source: 'Health Product Margins', description: 'Direct margin on curated wellness products and bundles', value: '15-30%', share: '10%', margin: 'Medium', icon: Heart },
];

// ─── MARKET OPPORTUNITY ─────────────────────────────────────────
const marketOpportunity = {
  totalMarket: '$1.8B',
  onlinePharmacy: '$320M',
  growth: '18% YoY',
  onlineGrowth: '35% YoY',
  keyDrivers: [
    'UAE mandates health insurance for all residents - driving pharmacy demand',
    'Post-COVID shift to online pharmacy and telemedicine adoption',
    'Chronic disease prevalence (diabetes 17%, hypertension 28%) creates recurring demand',
    'Government push for digital health via UAE Health 2031 strategy',
    'Expat population (88%) comfortable with app-based healthcare',
    'DHA telemedicine regulations enabling e-prescriptions',
  ],
  segments: [
    { segment: 'Chronic Patients', share: '35%', frequency: '2-4x/month', value: 'Highest LTV' },
    { segment: 'Families with Children', share: '25%', frequency: '3-5x/month', value: 'High Frequency' },
    { segment: 'Insurance-Covered Workers', share: '20%', frequency: '1-2x/month', value: 'Low Copay' },
    { segment: 'Wellness Enthusiasts', share: '15%', frequency: '1-2x/month', value: 'High AOV' },
    { segment: 'Emergency/Acute', share: '5%', frequency: 'As needed', value: 'Premium Pricing' },
  ],
};

// ─── COMPETITOR ANALYSIS ────────────────────────────────────────
const competitors = [
  {
    name: 'Life Pharmacy Online',
    status: 'Market Leader',
    marketShare: '~30%',
    strengths: ['200+ physical stores', 'Strong brand recognition', 'Wide product range', 'Same-day delivery in some areas'],
    weaknesses: ['No ecosystem integration', 'No loyalty coins', 'Limited insurance processing', 'Basic app experience'],
    color: 'text-green-400',
  },
  {
    name: 'Aster Online',
    status: 'Growing',
    marketShare: '~20%',
    strengths: ['Hospital network backing', 'Doctor referral pipeline', 'Aster DM Healthcare trust', 'Insurance partnerships'],
    weaknesses: ['Closed ecosystem', 'No delivery specialization', 'Limited cold-chain', 'No BNPL options'],
    color: 'text-blue-400',
  },
  {
    name: 'Bin Sina Pharmacy',
    status: 'Established',
    marketShare: '~15%',
    strengths: ['Government pharmacy contracts', 'Heritage brand since 1991', 'Widespread UAE coverage', 'Affordable pricing'],
    weaknesses: ['Poor digital experience', 'No app innovation', 'Slow delivery', 'No rewards program'],
    color: 'text-amber-400',
  },
];

const mediEarnAdvantage = [
  'Full ecosystem: Tabib e-prescriptions, NuqtaPay, Daman insurance, Nuqta coins',
  'Dedicated cold-chain delivery via Wasil - temperature-monitored every order',
  'Chronic medication auto-refill with insurance auto-billing',
  'Pharmacist verification on every prescription order within 5 minutes',
  '3% Nuqta coins on all purchases - redeemable across 500+ merchants',
  'Qist BNPL for expensive medications - 0% interest installments',
];

// ─── REGULATORY COMPLIANCE ──────────────────────────────────────
const regulatoryFramework = [
  {
    authority: 'Dubai Health Authority (DHA)',
    requirement: 'E-Pharmacy License',
    description: 'Required for operating an online pharmacy platform in Dubai',
    status: 'Required',
    items: ['DHA e-commerce pharmacy permit', 'Registered pharmacist on staff', 'Drug inventory tracking system', 'Patient data protection compliance'],
    icon: Building,
    color: 'text-blue-400',
  },
  {
    authority: 'Ministry of Health (MOH)',
    requirement: 'Federal Compliance',
    description: 'Federal-level pharmaceutical regulations for UAE-wide operations',
    status: 'Required',
    items: ['MOH drug registration verification', 'Controlled substance protocols', 'Adverse event reporting system', 'Import/distribution permits for health products'],
    icon: Shield,
    color: 'text-red-400',
  },
  {
    authority: 'Cold-Chain Standards',
    requirement: 'ISO 23412 Compliance',
    description: 'Temperature-controlled logistics for pharmaceutical delivery',
    status: 'Required',
    items: ['2-8°C maintained during transport', 'Continuous temperature logging', 'Calibrated monitoring equipment', 'Cold-chain breach protocol & documentation'],
    icon: Thermometer,
    color: 'text-cyan-400',
  },
  {
    authority: 'Pharmacist Verification',
    requirement: 'Licensed Pharmacist Review',
    description: 'Every prescription order verified by a licensed pharmacist',
    status: 'Required',
    items: ['Licensed pharmacist on every shift', 'Drug interaction screening', 'Dosage verification protocol', 'Patient counseling availability'],
    icon: UserCheck,
    color: 'text-emerald-400',
  },
];

// ─── GCC EXPANSION ──────────────────────────────────────────────
const gccExpansion = [
  { country: 'UAE', status: 'Launch', cities: 'Dubai, Abu Dhabi, Sharjah', timeline: 'Q3 2027', pharmacies: '500+', regulation: 'DHA + MOH License', color: 'text-green-400' },
  { country: 'Saudi Arabia', status: 'Phase 2', cities: 'Riyadh, Jeddah, Dammam', timeline: 'Q1 2028', pharmacies: '800+', regulation: 'SFDA License Required', color: 'text-blue-400' },
  { country: 'Qatar', status: 'Phase 2', cities: 'Doha, Al Wakrah', timeline: 'Q2 2028', pharmacies: '150+', regulation: 'MOPH Approval', color: 'text-purple-400' },
  { country: 'Kuwait', status: 'Phase 3', cities: 'Kuwait City', timeline: 'Q4 2028', pharmacies: '200+', regulation: 'MOH Kuwait License', color: 'text-orange-400' },
  { country: 'Bahrain', status: 'Phase 3', cities: 'Manama', timeline: 'Q1 2029', pharmacies: '100+', regulation: 'NHRA Approval', color: 'text-cyan-400' },
  { country: 'Oman', status: 'Phase 4', cities: 'Muscat, Salalah', timeline: 'Q3 2029', pharmacies: '120+', regulation: 'MOH Oman License', color: 'text-amber-400' },
];

// ─── RISK ANALYSIS ──────────────────────────────────────────────
const risks = [
  {
    risk: 'DHA E-Pharmacy License',
    severity: 'critical',
    impact: 'Cannot operate without valid DHA e-pharmacy license in Dubai',
    mitigation: [
      'Engage DHA regulatory consultants from day one',
      'Partner with licensed pharmacy chain as initial license holder',
      'Hire registered pharmacist as Head of Pharmacy Operations',
      'Build compliance-first platform with full audit trail',
    ],
  },
  {
    risk: 'Cold-Chain Compliance Failure',
    severity: 'high',
    impact: 'Temperature breach could cause medication spoilage and regulatory penalty',
    mitigation: [
      'IoT temperature sensors in every delivery bag',
      'Real-time monitoring dashboard with breach alerts',
      'Redundant insulated packaging for high-risk items',
      'Driver training program on cold-chain handling',
    ],
  },
  {
    risk: 'Insurance Integration Complexity',
    severity: 'high',
    impact: 'Each insurer has different APIs, formularies, and approval workflows',
    mitigation: [
      'Start with top 3 insurers (Daman, AXA, MetLife) covering 60% of market',
      'Build standardized claims abstraction layer',
      'Hire dedicated insurance operations team',
      'Phased rollout: manual claims first, then automated',
    ],
  },
  {
    risk: 'Prescription Error Liability',
    severity: 'high',
    impact: 'Wrong medication delivery could have serious health consequences',
    mitigation: [
      'Mandatory pharmacist verification on every prescription order',
      'AI-powered drug interaction checker',
      'Double-verification for high-risk medications',
      'Professional liability insurance (AED 10M+ coverage)',
    ],
  },
  {
    risk: 'Pharmacy Partner Acquisition',
    severity: 'medium',
    impact: 'Need 200+ pharmacy partners at launch for adequate coverage',
    mitigation: [
      'Zero setup fee and competitive 10% commission vs 15-20% food delivery',
      'Free POS integration via NextaBizz',
      'Insurance billing support as key value prop',
      'Guaranteed minimum order volume for early partners',
    ],
  },
];

// ─── PRICING TIERS ──────────────────────────────────────────────
const pharmacyPricing = [
  {
    tier: 'Starter',
    price: '499',
    period: 'AED/mo',
    features: ['Up to 200 orders/mo', 'Basic analytics', 'Standard listing', 'Email support', '10% commission'],
    color: 'border-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    tier: 'Growth',
    price: '999',
    period: 'AED/mo',
    features: ['Up to 1,000 orders/mo', 'Advanced analytics', 'Promoted listing', 'Priority support', '8% commission', 'Insurance integration'],
    color: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
    recommended: true,
  },
  {
    tier: 'Enterprise',
    price: '1,999',
    period: 'AED/mo',
    features: ['Unlimited orders', 'Custom analytics & API', 'Premium placement', 'Dedicated account manager', '6% commission', 'Full insurance suite', 'White-label options'],
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
  },
];

// ─── ROADMAP ────────────────────────────────────────────────────
const roadmap = [
  {
    phase: 'Phase 1',
    title: 'Core Pharmacy Delivery',
    timeline: 'Q3 2027',
    milestones: ['DHA license secured', 'Prescription upload + pharmacist verification', 'OTC medicines catalog (2,000+ SKUs)', '200+ pharmacy partners in Dubai', 'NuqtaPay + Nuqta coins integration', 'Cold-chain delivery via Wasil'],
    color: 'border-teal-500',
    bgColor: 'bg-teal-500/10',
  },
  {
    phase: 'Phase 2',
    title: 'Insurance + Chronic Care',
    timeline: 'Q1 2028',
    milestones: ['Insurance integration (top 3 insurers)', 'Chronic medication auto-refill', 'Tabib e-prescription pipeline', 'Abu Dhabi + Sharjah expansion', '500+ pharmacy partners', 'Drug interaction AI checker'],
    color: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    phase: 'Phase 3',
    title: 'Wellness + GCC',
    timeline: 'Q3 2028',
    milestones: ['Health & wellness product marketplace', 'Wellness subscription boxes', 'Saudi Arabia launch (Riyadh, Jeddah)', 'Qatar launch (Doha)', '12+ insurance partners', 'AI health recommendations'],
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    phase: 'Phase 4',
    title: 'Full GCC + Advanced Features',
    timeline: '2029',
    milestones: ['Kuwait, Bahrain, Oman expansion', 'Autonomous cold-chain delivery pilots', 'Personalized medicine recommendations', 'Genomics-based supplement suggestions', 'Hospital discharge integration', '2,000+ pharmacy partners across GCC'],
    color: 'border-amber-500',
    bgColor: 'bg-amber-500/10',
  },
];

// ─── FINANCIAL PROJECTIONS ──────────────────────────────────────
const financialProjections = [
  { year: 'Year 1', orders: 150000, revenue: 3.5, pharmacies: 500, users: 25000, cities: 3, avgOrder: 85 },
  { year: 'Year 2', orders: 600000, revenue: 14, pharmacies: 1200, users: 80000, cities: 8, avgOrder: 92 },
  { year: 'Year 3', orders: 2000000, revenue: 48, pharmacies: 2000, users: 250000, cities: 15, avgOrder: 98 },
];

// ─── COMPONENT ──────────────────────────────────────────────────

const controls = [
  'E-pharmacy marketplace',
  'Prescription verification engine',
  'Medication delivery scheduling',
  'Drug interaction checker',
  'Pharmacy partner network',
  'Medication reminder system',
  'Insurance claim submission',
  'Pharmacy analytics',
];

const doesNotOwn = [
  { item: 'Delivery fleet', reason: 'Managed by Wasil' },
  { item: 'Doctor prescriptions', reason: 'Managed by Tabib' },
  { item: 'Payment processing', reason: 'Managed by NuqtaPay' },
  { item: 'Health insurance claims', reason: 'Managed by Daman' },
  { item: 'Compliance & pharmacy license', reason: 'Managed by Amana' },
  { item: 'Customer identity', reason: 'Managed by Rabtul Core' },
  { item: 'Health records', reason: 'Managed by Tabib' },
  { item: 'Government pharmacy permits', reason: 'Managed by Khedma' },
];

export default function MediEarnPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedIntegration, setExpandedIntegration] = useState<string | null>(null);
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);
  const [expandedCompetitor, setExpandedCompetitor] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Pill },
    { id: 'categories', label: 'Categories', icon: Layers },
    { id: 'market', label: 'Market', icon: Globe },
    { id: 'revenue', label: 'Revenue', icon: BarChart3 },
    { id: 'integrations', label: 'Integrations', icon: Network },
    { id: 'risks', label: 'Risks', icon: AlertTriangle },
    { id: 'gcc', label: 'GCC Expansion', icon: MapPin },
    { id: 'deck', label: 'Pitch Deck', icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* ═══ HERO SECTION ═══ */}
      <div className="bg-gradient-to-br from-[#0a1628] via-teal-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/wasil" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Wasil
          </Link>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
                  <Pill className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white">
                    MediEarn <span className="text-teal-400">ميدي إرن</span>
                  </h1>
                  <p className="text-teal-400 text-sm sm:text-lg font-medium">Pharmacy & Medicine Delivery</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">
                Niche pharmacy delivery under the <span className="text-orange-400 font-medium">Wasil brand</span>.
                Dedicated to <span className="text-red-400 font-medium">prescription delivery</span>,
                <span className="text-blue-400 font-medium"> OTC medicines</span>,
                <span className="text-pink-400 font-medium"> health products</span>,
                <span className="text-emerald-400 font-medium"> chronic medication auto-refill</span>,
                and <span className="text-violet-400 font-medium">insurance-covered orders</span>.
                Every order <span className="text-cyan-400 font-medium">temperature-monitored</span> and
                <span className="text-[#c9a227] font-medium"> pharmacist-verified</span>.
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full">
                  <HeartHandshake className="w-4 h-4 text-[#c9a227]" />
                  <span className="text-[#c9a227] text-xs sm:text-sm font-medium">A Nuqta Group Company</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/20 border border-orange-500/50 rounded-full">
                  <Truck className="w-4 h-4 text-orange-400" />
                  <span className="text-orange-400 text-xs sm:text-sm font-medium">Powered by Wasil</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {heroStats.map((stat, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center min-w-[110px]">
                  <div className={`text-lg sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">{stat.suffix}</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Banner */}
          <div className="mt-8 bg-gradient-to-r from-teal-500/20 to-emerald-500/10 rounded-xl p-4 sm:p-6 border border-teal-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-teal-400" />
                  <span className="text-lg font-bold text-white">Why MediEarn Wins</span>
                </div>
                <p className="text-lg sm:text-2xl font-bold text-white">
                  <span className="text-red-400">Pharmacist-Verified</span> + <span className="text-cyan-400">Cold-Chain</span> + <span className="text-violet-400">Insurance</span> + <span className="text-[#c9a227]">3% Coins</span>
                </p>
              </div>
              <div className="flex gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-teal-400">500+</div>
                  <div className="text-xs text-slate-400">Pharmacies</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-cyan-400">45m</div>
                  <div className="text-xs text-slate-400">Delivery</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">3%</div>
                  <div className="text-xs text-slate-400">Coins</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ TAB NAVIGATION ═══ */}

      {/* Controls / Does NOT Own */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-emerald-500/5 rounded-xl p-6 border border-emerald-500/30">
            <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> What MediEarn Controls</h3>
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
          <div className="flex overflow-x-auto py-2 gap-1 sm:gap-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-teal-500 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ MAIN CONTENT ═══ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ─── OVERVIEW TAB ─── */}
        {activeTab === 'overview' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Executive Summary */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-teal-400" />
                Executive Summary
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-6">
                <strong className="text-white">MediEarn</strong> (ميدي إرن) is a dedicated pharmacy and medicine delivery app
                under the <strong className="text-orange-400">Wasil delivery brand</strong>. It handles
                <strong className="text-red-400"> prescription delivery</strong> with pharmacist verification,
                <strong className="text-blue-400"> OTC medicines</strong>,
                <strong className="text-pink-400"> health & wellness products</strong>,
                <strong className="text-emerald-400"> chronic medication auto-refill</strong>,
                <strong className="text-violet-400"> insurance-covered orders</strong>, and
                <strong className="text-orange-400"> emergency pharmacy</strong> (20-min delivery).
                Every delivery is <strong className="text-cyan-400">temperature-monitored</strong> via Wasil&apos;s cold-chain fleet.
                The <strong className="text-[#c9a227]">$1.8B UAE pharmacy market</strong> is growing at 18% YoY.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {categories.map((cat, i) => (
                  <div key={i} className={`${cat.bgColor} rounded-xl p-3 sm:p-4 text-center border ${cat.borderColor}`}>
                    <cat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${cat.color} mx-auto mb-2`} />
                    <div className="text-white font-bold text-xs sm:text-sm">{cat.name.split(' ')[0]}</div>
                    <div className="text-slate-400 text-[10px] sm:text-xs mt-1">{cat.avgOrder}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-gradient-to-r from-teal-500/10 to-emerald-500/5 rounded-xl p-4 sm:p-6 border border-teal-500/30">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">How MediEarn Works</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {howItWorks.map((step, i) => (
                  <div key={i} className="text-center">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${step.color} flex items-center justify-center mx-auto mb-2`}>
                      <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="text-white font-medium text-xs sm:text-sm">{step.title}</div>
                    <div className="text-slate-400 text-[10px] mt-1">{step.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/30">
                <UserCheck className="w-8 h-8 text-red-400 mb-3" />
                <h4 className="text-white font-bold mb-2">Pharmacist Verification</h4>
                <p className="text-slate-400 text-sm">Every prescription order verified by a licensed pharmacist within 5 minutes. Drug interactions checked, dosage confirmed.</p>
              </div>
              <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-500/30">
                <Thermometer className="w-8 h-8 text-cyan-400 mb-3" />
                <h4 className="text-white font-bold mb-2">Cold-Chain Delivery</h4>
                <p className="text-slate-400 text-sm">Temperature-monitored from pharmacy to doorstep. 2-8°C maintained with IoT sensors. Full compliance documentation.</p>
              </div>
              <div className="bg-[#c9a227]/10 rounded-xl p-4 border border-[#c9a227]/30">
                <Coins className="w-8 h-8 text-[#c9a227] mb-3" />
                <h4 className="text-white font-bold mb-2">Ecosystem Rewards</h4>
                <p className="text-slate-400 text-sm">3% Nuqta coins on every order. Insurance integration, Qist BNPL for expensive meds, NuqtaPay one-tap checkout.</p>
              </div>
            </div>

            {/* Quick Unit Economics */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-teal-400" />
                Unit Economics Snapshot
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-teal-400">{unitEconomics.avgOrderValue}</div>
                  <div className="text-[10px] text-slate-400">Avg Order (AED)</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-green-400">{unitEconomics.totalRevenue}</div>
                  <div className="text-[10px] text-slate-400">Revenue/Order</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-blue-400">{unitEconomics.netRevenue}</div>
                  <div className="text-[10px] text-slate-400">Net/Order (AED)</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-purple-400">{unitEconomics.netMargin}</div>
                  <div className="text-[10px] text-slate-400">Net Margin</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-emerald-400">{unitEconomics.ltv12Months}</div>
                  <div className="text-[10px] text-slate-400">12M LTV (AED)</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-orange-400">{unitEconomics.cac}</div>
                  <div className="text-[10px] text-slate-400">CAC (AED)</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-[#c9a227]">{unitEconomics.ltvCacRatio}</div>
                  <div className="text-[10px] text-slate-400">LTV:CAC</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-cyan-400">{unitEconomics.paybackDays}d</div>
                  <div className="text-[10px] text-slate-400">Payback</div>
                </div>
              </div>
            </div>

            {/* Roadmap Preview */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-teal-400" />
                Roadmap
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {roadmap.map((phase, i) => (
                  <div key={i} className={`${phase.bgColor} rounded-xl p-4 border-l-4 ${phase.color}`}>
                    <div className="text-white font-bold text-sm">{phase.phase}: {phase.title}</div>
                    <div className="text-slate-400 text-xs mt-1">{phase.timeline}</div>
                    <ul className="mt-3 space-y-1">
                      {phase.milestones.slice(0, 3).map((m, j) => (
                        <li key={j} className="text-slate-300 text-xs flex items-start gap-1.5">
                          <CheckCircle className="w-3 h-3 text-teal-400 mt-0.5 shrink-0" />
                          {m}
                        </li>
                      ))}
                      {phase.milestones.length > 3 && (
                        <li className="text-slate-500 text-xs">+{phase.milestones.length - 3} more</li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── CATEGORIES TAB ─── */}
        {activeTab === 'categories' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2">6 Service Categories</h2>
              <p className="text-slate-400 text-sm mb-6">From prescription medicines to emergency pharmacy - covering the full pharmacy delivery spectrum.</p>
            </div>

            {categories.map((cat) => (
              <div key={cat.id} className={`bg-slate-800/30 rounded-xl border ${cat.borderColor} overflow-hidden`}>
                <button
                  onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                  className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${cat.bgColor} flex items-center justify-center`}>
                      <cat.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${cat.color}`} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm sm:text-base">{cat.name}</h3>
                      <p className="text-slate-400 text-xs sm:text-sm">{cat.description}</p>
                      <div className="flex items-center gap-3 mt-2">
                        {cat.metrics.map((m, i) => (
                          <span key={i} className={`text-[10px] sm:text-xs ${cat.color} bg-slate-800/50 px-2 py-0.5 rounded`}>{m}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {expandedCategory === cat.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {expandedCategory === cat.id && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-slate-700/50 pt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {cat.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className={`w-4 h-4 ${cat.color} mt-0.5 shrink-0`} />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                      <div className={`${cat.bgColor} rounded-lg px-3 py-2`}>
                        <span className="text-slate-400 text-xs">Avg Order: </span>
                        <span className={`${cat.color} font-bold text-sm`}>{cat.avgOrder}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ─── MARKET TAB ─── */}
        {activeTab === 'market' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Market Size */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-teal-400" />
                UAE Pharmacy Market
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="bg-teal-500/10 rounded-xl p-4 text-center border border-teal-500/30">
                  <div className="text-2xl sm:text-3xl font-bold text-teal-400">{marketOpportunity.totalMarket}</div>
                  <div className="text-xs text-slate-400 mt-1">Total Pharmacy Market</div>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/30">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400">{marketOpportunity.onlinePharmacy}</div>
                  <div className="text-xs text-slate-400 mt-1">Online Pharmacy</div>
                </div>
                <div className="bg-green-500/10 rounded-xl p-4 text-center border border-green-500/30">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400">{marketOpportunity.growth}</div>
                  <div className="text-xs text-slate-400 mt-1">Total Growth</div>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-4 text-center border border-purple-500/30">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400">{marketOpportunity.onlineGrowth}</div>
                  <div className="text-xs text-slate-400 mt-1">Online Growth</div>
                </div>
              </div>

              {/* Key Drivers */}
              <h3 className="text-white font-bold text-sm mb-3">Market Drivers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {marketOpportunity.keyDrivers.map((driver, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                    <span className="text-slate-300 text-sm">{driver}</span>
                  </div>
                ))}
              </div>

              {/* Segments */}
              <h3 className="text-white font-bold text-sm mb-3">Customer Segments</h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 text-sm">Segment</th>
                      <th className="text-center py-3 px-4 text-slate-400 text-sm">Share</th>
                      <th className="text-center py-3 px-4 text-slate-400 text-sm">Frequency</th>
                      <th className="text-center py-3 px-4 text-slate-400 text-sm">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marketOpportunity.segments.map((seg, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white text-sm">{seg.segment}</td>
                        <td className="py-3 px-4 text-center">
                          <span className="bg-teal-500/20 text-teal-400 px-2 py-1 rounded font-bold text-sm">{seg.share}</span>
                        </td>
                        <td className="py-3 px-4 text-center text-slate-400 text-sm">{seg.frequency}</td>
                        <td className="py-3 px-4 text-center text-emerald-400 text-sm font-medium">{seg.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Competitors */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-teal-400" />
                Competitive Landscape
              </h3>
              <div className="space-y-3">
                {competitors.map((comp) => (
                  <div key={comp.name} className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden">
                    <button
                      onClick={() => setExpandedCompetitor(expandedCompetitor === comp.name ? null : comp.name)}
                      className="w-full p-4 flex items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`text-lg font-bold ${comp.color}`}>{comp.name}</div>
                        <span className="text-slate-500 text-xs">{comp.status}</span>
                        <span className="bg-slate-700/50 text-slate-300 text-xs px-2 py-0.5 rounded">{comp.marketShare}</span>
                      </div>
                      {expandedCompetitor === comp.name ? (
                        <ChevronUp className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </button>
                    {expandedCompetitor === comp.name && (
                      <div className="px-4 pb-4 border-t border-slate-700/50 pt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-green-400 text-sm font-bold mb-2">Strengths</h4>
                            {comp.strengths.map((s, i) => (
                              <div key={i} className="flex items-start gap-2 mb-1">
                                <CheckCircle className="w-3.5 h-3.5 text-green-400 mt-0.5 shrink-0" />
                                <span className="text-slate-300 text-sm">{s}</span>
                              </div>
                            ))}
                          </div>
                          <div>
                            <h4 className="text-red-400 text-sm font-bold mb-2">Weaknesses</h4>
                            {comp.weaknesses.map((w, i) => (
                              <div key={i} className="flex items-start gap-2 mb-1">
                                <AlertTriangle className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
                                <span className="text-slate-300 text-sm">{w}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* MediEarn Advantage */}
              <div className="mt-6 bg-teal-500/10 rounded-xl p-4 border border-teal-500/30">
                <h4 className="text-teal-400 font-bold text-sm mb-3">MediEarn Competitive Advantage</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {mediEarnAdvantage.map((adv, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-[#c9a227] mt-0.5 shrink-0" />
                      <span className="text-slate-300 text-sm">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── REVENUE TAB ─── */}
        {activeTab === 'revenue' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Revenue Streams */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-teal-400" />
                Revenue Model
              </h2>
              <div className="space-y-3">
                {revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0">
                      <stream.icon className="w-5 h-5 text-teal-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-white font-bold text-sm">{stream.source}</h4>
                        <span className="text-teal-400 font-bold text-sm">{stream.share}</span>
                      </div>
                      <p className="text-slate-400 text-xs mb-2">{stream.description}</p>
                      <div className="flex items-center gap-3">
                        <span className="bg-slate-700/50 text-slate-300 text-xs px-2 py-0.5 rounded">{stream.value}</span>
                        <span className="text-emerald-400 text-xs">Margin: {stream.margin}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unit Economics Detail */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-teal-400" />
                Unit Economics (Per Order)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Revenue Side */}
                <div>
                  <h4 className="text-green-400 text-sm font-bold mb-3">Revenue (AED)</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center bg-slate-800/50 rounded-lg p-3">
                      <span className="text-slate-300 text-sm">Avg Order Value</span>
                      <span className="text-white font-bold">{unitEconomics.avgOrderValue} AED</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-800/50 rounded-lg p-3">
                      <span className="text-slate-300 text-sm">Delivery Fee</span>
                      <span className="text-green-400 font-bold">+{unitEconomics.deliveryFee} AED</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-800/50 rounded-lg p-3">
                      <span className="text-slate-300 text-sm">Commission ({unitEconomics.commissionPercent})</span>
                      <span className="text-green-400 font-bold">+{unitEconomics.commissionAED} AED</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-800/50 rounded-lg p-3">
                      <span className="text-slate-300 text-sm">Insurance Processing Fee</span>
                      <span className="text-green-400 font-bold">+{unitEconomics.insuranceFee} AED</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-800/50 rounded-lg p-3">
                      <span className="text-slate-300 text-sm">Subscription Rev Share</span>
                      <span className="text-green-400 font-bold">+{unitEconomics.subscriptionRevShare} AED</span>
                    </div>
                    <div className="flex justify-between items-center bg-teal-500/20 rounded-lg p-3 border border-teal-500/30">
                      <span className="text-white font-bold text-sm">Total Revenue/Order</span>
                      <span className="text-teal-400 font-bold">{unitEconomics.totalRevenue} AED</span>
                    </div>
                  </div>
                </div>
                {/* Cost Side */}
                <div>
                  <h4 className="text-red-400 text-sm font-bold mb-3">Costs (AED)</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center bg-slate-800/50 rounded-lg p-3">
                      <span className="text-slate-300 text-sm">Rider Cost (Wasil)</span>
                      <span className="text-red-400 font-bold">-{unitEconomics.riderCost} AED</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-800/50 rounded-lg p-3">
                      <span className="text-slate-300 text-sm">Pharmacist Verification</span>
                      <span className="text-red-400 font-bold">-{unitEconomics.pharmacistVerification} AED</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-800/50 rounded-lg p-3">
                      <span className="text-slate-300 text-sm">Cold-Chain Logistics</span>
                      <span className="text-red-400 font-bold">-{unitEconomics.coldChainCost} AED</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-800/50 rounded-lg p-3">
                      <span className="text-slate-300 text-sm">Operating/Support</span>
                      <span className="text-red-400 font-bold">-{unitEconomics.operatingCost} AED</span>
                    </div>
                    <div className="flex justify-between items-center bg-emerald-500/20 rounded-lg p-3 border border-emerald-500/30 mt-4">
                      <span className="text-white font-bold text-sm">Net Revenue/Order</span>
                      <span className="text-emerald-400 font-bold">{unitEconomics.netRevenue} AED ({unitEconomics.netMargin})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pharmacy Pricing */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Store className="w-5 h-5 text-teal-400" />
                Pharmacy Partner Pricing
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pharmacyPricing.map((plan, i) => (
                  <div key={i} className={`${plan.bgColor} rounded-xl p-4 sm:p-6 border ${plan.color} relative ${plan.recommended ? 'ring-2 ring-blue-500' : ''}`}>
                    {plan.recommended && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        RECOMMENDED
                      </div>
                    )}
                    <div className="text-center mb-4">
                      <div className="text-white font-bold text-lg">{plan.tier}</div>
                      <div className="text-2xl sm:text-3xl font-black text-white mt-2">{plan.price}</div>
                      <div className="text-slate-400 text-xs">{plan.period}</div>
                    </div>
                    <ul className="space-y-2">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                          <span className="text-slate-300 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Projections */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <LineChart className="w-5 h-5 text-teal-400" />
                Financial Projections
              </h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 text-sm">Metric</th>
                      {financialProjections.map((fp, i) => (
                        <th key={i} className="text-center py-3 px-4 text-teal-400 text-sm">{fp.year}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white text-sm">Orders</td>
                      {financialProjections.map((fp, i) => (
                        <td key={i} className="py-3 px-4 text-center text-slate-300 text-sm">{fp.orders.toLocaleString()}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white text-sm">Revenue (AED M)</td>
                      {financialProjections.map((fp, i) => (
                        <td key={i} className="py-3 px-4 text-center text-emerald-400 font-bold text-sm">{fp.revenue}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white text-sm">Pharmacies</td>
                      {financialProjections.map((fp, i) => (
                        <td key={i} className="py-3 px-4 text-center text-slate-300 text-sm">{fp.pharmacies.toLocaleString()}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white text-sm">Active Users</td>
                      {financialProjections.map((fp, i) => (
                        <td key={i} className="py-3 px-4 text-center text-slate-300 text-sm">{fp.users.toLocaleString()}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white text-sm">Cities</td>
                      {financialProjections.map((fp, i) => (
                        <td key={i} className="py-3 px-4 text-center text-slate-300 text-sm">{fp.cities}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white text-sm">Avg Order (AED)</td>
                      {financialProjections.map((fp, i) => (
                        <td key={i} className="py-3 px-4 text-center text-[#c9a227] font-bold text-sm">{fp.avgOrder}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ─── INTEGRATIONS TAB ─── */}
        {activeTab === 'integrations' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Network className="w-5 h-5 text-teal-400" />
                Ecosystem Integrations
              </h2>
              <p className="text-slate-400 text-sm mb-6">MediEarn is deeply integrated into the Nuqta ecosystem - creating a seamless healthcare delivery experience.</p>
            </div>

            {ecosystemIntegrations.map((integ) => (
              <div key={integ.id} className={`bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden`}>
                <button
                  onClick={() => setExpandedIntegration(expandedIntegration === integ.id ? null : integ.id)}
                  className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${integ.bgColor} flex items-center justify-center`}>
                      <integ.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${integ.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className={`font-bold text-sm sm:text-base ${integ.color}`}>{integ.product}</h3>
                        <span className="text-slate-500 text-xs">|</span>
                        <span className="text-white text-sm">{integ.integration}</span>
                      </div>
                      <p className="text-slate-400 text-xs sm:text-sm mt-1">{integ.description}</p>
                    </div>
                  </div>
                  {expandedIntegration === integ.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {expandedIntegration === integ.id && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-slate-700/50 pt-4">
                    <h4 className="text-white text-sm font-bold mb-3">Key Benefits</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {integ.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className={`w-4 h-4 ${integ.color} mt-0.5 shrink-0`} />
                          <span className="text-slate-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Regulatory Compliance */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-teal-400" />
                Regulatory Compliance Framework
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {regulatoryFramework.map((reg, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <reg.icon className={`w-6 h-6 ${reg.color}`} />
                      <div>
                        <h4 className="text-white font-bold text-sm">{reg.authority}</h4>
                        <span className="text-slate-400 text-xs">{reg.requirement}</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-xs mb-3">{reg.description}</p>
                    <ul className="space-y-1.5">
                      {reg.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                          <span className="text-slate-300 text-xs">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2 py-1 bg-red-500/20 rounded text-red-400 text-xs font-medium">
                      <AlertTriangle className="w-3 h-3" />
                      {reg.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── RISKS TAB ─── */}
        {activeTab === 'risks' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-400" />
                Risk Analysis
              </h2>
              <p className="text-slate-400 text-sm">Key risks, severity assessment, and mitigation strategies for MediEarn operations.</p>
            </div>

            {risks.map((risk) => (
              <div key={risk.risk} className={`bg-slate-800/30 rounded-xl border ${
                risk.severity === 'critical' ? 'border-red-500/50' :
                risk.severity === 'high' ? 'border-orange-500/50' :
                'border-yellow-500/50'
              } overflow-hidden`}>
                <button
                  onClick={() => setExpandedRisk(expandedRisk === risk.risk ? null : risk.risk)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                      risk.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                      risk.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {risk.severity}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm sm:text-base">{risk.risk}</h3>
                      <p className="text-slate-400 text-xs mt-0.5">{risk.impact}</p>
                    </div>
                  </div>
                  {expandedRisk === risk.risk ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {expandedRisk === risk.risk && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-slate-700/50 pt-4">
                    <h4 className="text-emerald-400 text-sm font-bold mb-3">Mitigation Strategies</h4>
                    <div className="space-y-2">
                      {risk.mitigation.map((m, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span className="text-slate-300 text-sm">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ─── GCC EXPANSION TAB ─── */}
        {activeTab === 'gcc' && (
          <div className="space-y-6 sm:space-y-8">
            {/* GCC Map */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-teal-400" />
                GCC Expansion Plan
              </h2>
              <p className="text-slate-400 text-sm mb-6">Phased rollout across 6 GCC countries, adapted to local pharmaceutical regulations and insurance systems.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {gccExpansion.map((country, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className={`font-bold text-base ${country.color}`}>{country.country}</h3>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        country.status === 'Launch' ? 'bg-green-500/20 text-green-400' :
                        country.status === 'Phase 2' ? 'bg-blue-500/20 text-blue-400' :
                        country.status === 'Phase 3' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-amber-500/20 text-amber-400'
                      }`}>
                        {country.status}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-slate-300 text-sm">{country.cities}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-slate-300 text-sm">{country.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Store className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-slate-300 text-sm">{country.pharmacies} pharmacies</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-slate-300 text-sm">{country.regulation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Roadmap Detail */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-teal-400" />
                Development Roadmap
              </h3>
              <div className="space-y-4">
                {roadmap.map((phase, i) => (
                  <div key={i} className={`${phase.bgColor} rounded-xl p-4 sm:p-6 border-l-4 ${phase.color}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="text-white font-bold text-base">{phase.phase}: {phase.title}</h4>
                        <span className="text-slate-400 text-sm">{phase.timeline}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {phase.milestones.map((m, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                          <span className="text-slate-300 text-sm">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════ */}
        {/* PITCH DECK */}
        {/* ═══════════════════════════════════════════ */}
        {activeTab === 'deck' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
            {/* Investment Thesis */}
            <div className="bg-gradient-to-r from-teal-500/20 to-emerald-500/10 rounded-2xl p-6 sm:p-8 border border-teal-500/30">
              <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2"><Briefcase className="w-6 h-6 text-teal-400" /> Investment Thesis</h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                MediEarn is the pharmacy vertical of the RTMN super-ecosystem. With UAE mandatory health insurance, 17% diabetes prevalence driving chronic recurring demand, Tabib e-prescription integration, and Wasil cold-chain delivery, MediEarn captures the $4B+ GCC pharmacy market with unmatched unit economics and ecosystem lock-in.
              </p>
            </div>

            {/* Market Opportunity */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Market Opportunity</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'TAM — GCC Pharmacy Market', value: '$4B+', color: 'text-teal-400', border: 'border-teal-500/40' },
                  { label: 'SAM — UAE Online Pharmacy', value: '$640M', color: 'text-emerald-400', border: 'border-emerald-500/40' },
                  { label: 'SOM — Year 3 Target', value: '$64M', color: 'text-[#c9a227]', border: 'border-[#c9a227]/40' },
                ].map((m, i) => (
                  <div key={i} className={`bg-slate-800/60 rounded-xl p-5 border ${m.border} text-center`}>
                    <div className={`text-3xl font-black ${m.color}`}>{m.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Differentiators */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Key Differentiators</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'Tabib E-Prescription Pipeline', desc: 'Direct e-prescription flow from Tabib telemedicine to MediEarn delivery. Zero friction.', icon: Stethoscope, color: 'text-teal-400' },
                  { title: 'Insurance Auto-Billing', desc: '12+ insurance partners with auto-claim processing. Patients pay only copay.', icon: ShieldCheck, color: 'text-blue-400' },
                  { title: 'Cold-Chain Delivery (Wasil)', desc: '100% temperature-monitored delivery for medications requiring cold storage.', icon: Thermometer, color: 'text-cyan-400' },
                  { title: 'Chronic Auto-Refill', desc: 'Automatic medication refill for chronic patients with insurance auto-billing.', icon: RefreshCw, color: 'text-emerald-400' },
                  { title: '3% Nuqta Coins on Every Order', desc: 'Real coins spendable at 500+ merchants. 5% for Nuqta+ members.', icon: Coins, color: 'text-[#c9a227]' },
                  { title: 'Pharmacist Verification', desc: 'Every prescription verified by licensed pharmacist within 5 minutes.', icon: UserCheck, color: 'text-purple-400' },
                ].map((d, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <d.icon className={`w-6 h-6 ${d.color} mb-2`} />
                    <h3 className="text-white font-bold text-sm mb-1">{d.title}</h3>
                    <p className="text-slate-400 text-xs">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Year Financial Projections */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3-Year Financial Projections</h2>
              <div className="overflow-x-auto rounded-xl border border-slate-700/50">
                <table className="w-full text-sm">
                  <thead><tr className="bg-slate-800/80 text-slate-300">
                    <th className="px-4 py-3 text-left">Year</th><th className="px-4 py-3 text-right">Users</th><th className="px-4 py-3 text-right">Pharmacies</th><th className="px-4 py-3 text-right">Revenue</th><th className="px-4 py-3 text-right">Net Profit</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { year: 'Year 1', users: '25K', pharmacies: '500', revenue: '12M AED', profit: '3M AED' },
                      { year: 'Year 2', users: '100K', pharmacies: '1,200', revenue: '50M AED', profit: '18M AED' },
                      { year: 'Year 3', users: '300K', pharmacies: '2,000', revenue: '130M AED', profit: '50M AED' },
                    ].map((r, i) => (
                      <tr key={i} className="border-t border-slate-700/50 text-slate-300">
                        <td className="px-4 py-3 font-bold text-teal-400">{r.year}</td><td className="px-4 py-3 text-right">{r.users}</td><td className="px-4 py-3 text-right">{r.pharmacies}</td><td className="px-4 py-3 text-right font-semibold text-emerald-400">{r.revenue}</td><td className="px-4 py-3 text-right font-bold text-white">{r.profit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Comparable Companies */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Comparable Companies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'PharmEasy', val: '$5.6B', note: 'India — 60M+ users, IPO-bound' },
                  { name: 'Netmeds', val: '$550M', note: 'Acquired by Reliance' },
                  { name: 'Amazon Pharmacy', val: '$1B+', note: 'PillPack acquisition' },
                  { name: 'Capsule', val: '$1B', note: 'NYC dominance, Series D' },
                ].map((c, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
                    <div className="text-lg font-bold text-white">{c.name}</div>
                    <div className="text-2xl font-black text-teal-400">{c.val}</div>
                    <div className="text-xs text-slate-400 mt-1">{c.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unicorn Path */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Unicorn Path</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { milestone: '25K users, 500 pharmacies', timeline: 'Year 1', revenue: '~12M AED', valuation: '~$30M' },
                  { milestone: '100K users, 1.2K pharmacies', timeline: 'Year 2', revenue: '~50M AED', valuation: '~$125M' },
                  { milestone: '300K users, 2K pharmacies', timeline: 'Year 3', revenue: '~130M AED', valuation: '~$400M' },
                  { milestone: '1M+ users (GCC)', timeline: '2030+', revenue: '~500M AED', valuation: '~$1B+' },
                ].map((m, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
                    <div className="text-xs text-slate-400">{m.timeline}</div>
                    <div className="text-lg font-bold text-teal-400 mt-1">{m.valuation}</div>
                    <div className="text-xs text-slate-500">{m.revenue}</div>
                    <div className="text-xs text-slate-400 mt-1">{m.milestone}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RTMN Ecosystem Multiplier */}
            <div className="bg-slate-800/40 rounded-2xl p-6 border border-teal-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><ArrowUpRight className="w-6 h-6 text-teal-400" /> RTMN Ecosystem Multiplier</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { factor: 'Tabib E-Prescription Pipeline', detail: 'Every Tabib telemedicine consultation generates a prescription that flows directly to MediEarn. Zero-cost patient acquisition.' },
                  { factor: 'Daman Insurance Integration', detail: 'Daman processes insurance claims, MediEarn handles delivery. Patients pay only copay — highest conversion rate.' },
                  { factor: 'Wasil Cold-Chain Delivery', detail: 'Dedicated temperature-monitored delivery for medications. No fleet ownership cost — shared Wasil infrastructure.' },
                  { factor: 'Nuqta Coins Health Rewards', detail: '3-5% coin earning on pharmacy spend. Chronic patients earn significant coins monthly — ecosystem lock-in.' },
                ].map((f, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <h3 className="text-teal-400 font-bold text-sm mb-1">{f.factor}</h3>
                    <p className="text-slate-400 text-xs">{f.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>

      {/* ═══ NAVIGATION FOOTER ═══ */}
      <div className="border-t border-slate-700/50 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/wasil" className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span className="text-sm font-medium">Back to Wasil</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/nuqtapay" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                <CreditCard className="w-4 h-4" />
                <span className="text-sm font-medium">NuqtaPay</span>
              </Link>
              <Link href="/rakab" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
                <span className="text-sm font-medium">Rakab</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ GLOBAL FOOTER ═══ */}
      <GlobalFooter />
    </div>
  );
}
