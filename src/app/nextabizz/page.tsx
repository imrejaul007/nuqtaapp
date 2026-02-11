'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Package, Factory, Truck, Building2, ShoppingBag, Users,
  ArrowRight, CheckCircle, ChevronDown, ChevronUp,
  Database, Activity, TrendingUp, DollarSign, Briefcase,
  Globe, Search, FileText, CreditCard, ArrowUpRight,
  Clock, Star, Shield, Target, PieChart, Zap,
  LayoutGrid, ChevronRight, Handshake, MessageSquare,
  UserPlus, Layers, Link2, BarChart3, Award,
  Store, Smartphone, Receipt, Wallet
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── Hero Stats ────────────────────────────────────────────────
const heroStats = [
  { label: 'B2B Orders/Mo', value: '8,500+', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
  { label: 'Active Suppliers', value: '1,200+', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  { label: 'Qist Credit Issued', value: '15M AED', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
  { label: 'Cross-border Markets', value: '12', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
  { label: 'Avg Order Value', value: '5K AED', color: 'text-teal-400', bg: 'bg-teal-500/10', border: 'border-teal-500/30' },
];

// ─── Core Features (8) ────────────────────────────────────────
const coreFeatures = [
  {
    id: 'marketplace',
    name: 'B2B Marketplace',
    icon: Store,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    description: 'The largest MENA-focused B2B marketplace connecting businesses with verified suppliers across 20+ verticals.',
    capabilities: [
      'Multi-category product catalog (20+ verticals)',
      'Verified supplier badges and ratings',
      'Business-grade product listings with specs',
      'Sample ordering before bulk purchase',
      'Favorite suppliers and saved catalogs',
      'Arabic and English bilingual platform',
    ],
    metric: '20+ verticals',
  },
  {
    id: 'bulk-ordering',
    name: 'Bulk Ordering',
    icon: Package,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    description: 'Streamlined bulk ordering with volume-based pricing, minimum order quantities, and tiered discounts.',
    capabilities: [
      'Volume-based dynamic pricing tiers',
      'Minimum order quantity management',
      'Recurring order scheduling',
      'Split shipment across locations',
      'Order templates for repeat purchases',
      'Bulk discount negotiations',
    ],
    metric: '20-40% savings',
  },
  {
    id: 'supplier-discovery',
    name: 'Supplier Discovery',
    icon: Search,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    description: 'AI-powered supplier matching based on product needs, location, pricing, and reliability scores.',
    capabilities: [
      'AI-matched supplier recommendations',
      'Supplier verification and trust scores',
      'Category-specific supplier directories',
      'Location-based supplier search',
      'Supplier capability matching',
      'Trade references and reviews',
    ],
    metric: '1,200+ suppliers',
  },
  {
    id: 'rfq-system',
    name: 'RFQ System',
    icon: FileText,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    description: 'Request for Quotation system allowing businesses to broadcast requirements and receive competitive bids.',
    capabilities: [
      'Multi-supplier RFQ broadcasting',
      'Bid comparison dashboard',
      'Automated follow-ups on pending RFQs',
      'Negotiation chat within platform',
      'RFQ templates for common needs',
      'Bid scoring and ranking algorithms',
    ],
    metric: 'Avg 5 bids per RFQ',
  },
  {
    id: 'business-credit',
    name: 'Business Credit (Qist)',
    icon: CreditCard,
    color: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/30',
    description: 'Qist-powered B2B credit lines allowing businesses to buy now and pay in installments up to 12 months.',
    capabilities: [
      'Business credit scoring and approval',
      'Net-30/60/90 payment terms',
      'Installment plans up to 12 months',
      'Credit limit management per business',
      'Automated payment reminders',
      'Integration with Qist consumer BNPL',
    ],
    metric: '15M AED issued',
  },
  {
    id: 'invoice-financing',
    name: 'Invoice Financing',
    icon: Receipt,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    description: 'Suppliers can finance their outstanding invoices to get immediate cash flow while buyers pay on terms.',
    capabilities: [
      'Invoice factoring at competitive rates',
      'Early payment discounts for buyers',
      'Automated invoice reconciliation',
      'Cash flow forecasting for suppliers',
      'Dynamic discounting based on payment speed',
      'Integration with Hawil for settlements',
    ],
    metric: '72hr cash advance',
  },
  {
    id: 'cross-border',
    name: 'Cross-border B2B (Hawil)',
    icon: Globe,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    description: 'International B2B trade powered by Hawil for cross-border payments, customs, and compliance.',
    capabilities: [
      'Multi-currency B2B transactions',
      'Customs documentation automation',
      'Cross-border payment via Hawil',
      'Import/export compliance checks',
      'International shipping coordination',
      'Trade finance for cross-border deals',
    ],
    metric: '12 markets',
  },
  {
    id: 'gigzy-freelancer',
    name: 'Gigzy Freelancer Platform',
    icon: UserPlus,
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/30',
    description: 'Integrated freelancer marketplace for businesses to hire skilled professionals for projects and services.',
    capabilities: [
      'Freelancer profiles with portfolios',
      'Project-based hiring and contracts',
      'Milestone-based payment release',
      'Skills verification and ratings',
      'Dispute resolution system',
      'Integration with Qist for freelancer payments',
    ],
    metric: '5K+ freelancers',
  },
];

// ─── How It Works Steps ────────────────────────────────────────
const howItWorksSteps = [
  {
    step: 1,
    title: 'Business Registers',
    description: 'Company creates a verified business account with trade license, VAT registration, and authorized contacts.',
    icon: Building2,
    color: 'text-emerald-400',
  },
  {
    step: 2,
    title: 'Browse Suppliers',
    description: 'Search and discover verified suppliers across 20+ categories. AI recommends best matches based on your needs.',
    icon: Search,
    color: 'text-blue-400',
  },
  {
    step: 3,
    title: 'Request Quotes',
    description: 'Send RFQs to multiple suppliers simultaneously. Compare bids, negotiate terms, and select the best offer.',
    icon: FileText,
    color: 'text-purple-400',
  },
  {
    step: 4,
    title: 'Place Order',
    description: 'Confirm order with agreed pricing and quantities. Set delivery schedule and shipping preferences.',
    icon: ShoppingBag,
    color: 'text-orange-400',
  },
  {
    step: 5,
    title: 'Pay with Qist BNPL',
    description: 'Choose payment terms: pay now, Net-30/60/90, or Qist installment plan. Business credit pre-approved.',
    icon: CreditCard,
    color: 'text-teal-400',
  },
  {
    step: 6,
    title: 'Track Delivery',
    description: 'Real-time tracking from supplier warehouse to your door. Wasil handles last-mile logistics across GCC.',
    icon: Truck,
    color: 'text-pink-400',
  },
];

// ─── Pricing ─────────────────────────────────────────────────
const pricingTiers = [
  {
    name: 'Free Marketplace',
    price: 'Free',
    period: 'forever',
    description: 'Full marketplace access for any registered business. Browse, discover, and connect with suppliers.',
    color: 'text-slate-400',
    bg: 'bg-slate-500/10',
    border: 'border-slate-500/30',
    highlight: false,
    features: [
      'Full marketplace browsing',
      'Supplier discovery and search',
      'Up to 10 RFQs per month',
      'Basic order management',
      'Standard delivery tracking',
      'Community support',
      'Basic analytics',
      '2-5% transaction fee on orders',
    ],
  },
  {
    name: 'Premium Tools',
    price: '299 AED',
    period: '/month',
    description: 'Advanced tools for growing businesses that need more power and lower fees.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    highlight: true,
    features: [
      'Everything in Free plan',
      'Unlimited RFQs',
      'Qist business credit access',
      'Invoice financing',
      'Bulk ordering tools',
      'Recurring order automation',
      'Advanced analytics & reports',
      'Priority support',
      'Reduced transaction fee (1.5%)',
      'Gigzy freelancer access',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'Tailored solutions for large businesses with high-volume procurement needs.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    highlight: false,
    features: [
      'Everything in Premium plan',
      'Dedicated account manager',
      'Custom credit terms',
      'Cross-border B2B via Hawil',
      'API integrations',
      'ERP/SAP connectors',
      'Custom reporting dashboards',
      'Negotiated transaction fees',
      'SLA guarantees',
      'Multi-branch management',
    ],
  },
];

// ─── Unit Economics ─────────────────────────────────────────────
const unitEconomics = [
  { metric: 'Avg B2B Order', value: '5K AED', description: 'Average order value across all categories and verticals', icon: ShoppingBag, color: 'text-emerald-400' },
  { metric: 'Commission Rate', value: '3-5%', description: 'Transaction commission per order, tiered by volume', icon: DollarSign, color: 'text-blue-400' },
  { metric: 'Net per Order', value: '150-250 AED', description: 'Net revenue after payment processing and platform costs', icon: TrendingUp, color: 'text-teal-400' },
  { metric: 'Qist Revenue/Loan', value: '8-12%', description: 'Interest and fees on B2B credit facilities provided', icon: CreditCard, color: 'text-purple-400' },
  { metric: 'Repeat Order Rate', value: '72%', description: 'Percentage of buyers placing repeat orders within 90 days', icon: Activity, color: 'text-orange-400' },
  { metric: 'Supplier Retention', value: '85%', description: 'Annual supplier retention rate on the platform', icon: Users, color: 'text-pink-400' },
];

// ─── Revenue Model ──────────────────────────────────────────────
const revenueStreams = [
  {
    stream: 'Transaction Commissions',
    description: 'Commission on every B2B order processed through the marketplace (2-5% based on category)',
    percentage: '45%',
    icon: Receipt,
    color: 'text-emerald-400',
    projected: '8M AED/yr at 2K orders/mo',
  },
  {
    stream: 'Premium Subscriptions',
    description: 'Monthly subscription fees for Premium Tools (299 AED/mo) and Enterprise plans',
    percentage: '20%',
    icon: Star,
    color: 'text-blue-400',
    projected: '3.6M AED/yr at 1K subscribers',
  },
  {
    stream: 'Qist Business Credit',
    description: 'Interest and fees from B2B BNPL facilities, invoice financing, and credit lines',
    percentage: '25%',
    icon: CreditCard,
    color: 'text-purple-400',
    projected: '4.5M AED/yr',
  },
  {
    stream: 'Gigzy Marketplace Fees',
    description: 'Service fees on freelancer projects booked through the Gigzy integration',
    percentage: '10%',
    icon: UserPlus,
    color: 'text-orange-400',
    projected: '1.8M AED/yr',
  },
];

// ─── Market Opportunity ─────────────────────────────────────────
const marketData = {
  tam: '$10B+',
  tamLabel: 'UAE B2B E-commerce Market',
  segments: [
    { name: 'Wholesale & Distribution', size: '$3.5B', share: '35%', color: 'bg-emerald-500' },
    { name: 'F&B Procurement', size: '$2.2B', share: '22%', color: 'bg-blue-500' },
    { name: 'Construction Materials', size: '$1.8B', share: '18%', color: 'bg-purple-500' },
    { name: 'Technology & Equipment', size: '$1.5B', share: '15%', color: 'bg-orange-500' },
    { name: 'Other Verticals', size: '$1.0B', share: '10%', color: 'bg-pink-500' },
  ],
  growth: '22% CAGR',
  drivers: [
    'UAE government encouraging B2B digital trade and e-invoicing',
    'SMEs shifting from cash/relationship buying to digital procurement',
    'Growing demand for trade finance and business credit',
    'Cross-border trade expansion within GCC and beyond',
  ],
};

// ─── Competitors ────────────────────────────────────────────────
const competitors = [
  {
    name: 'Amazon Business',
    strengths: 'Global brand, massive catalog, fast delivery',
    weaknesses: 'Limited MENA focus, no integrated financing, no RFQ system',
    pricing: 'Free listing, variable fees',
  },
  {
    name: 'TradeKey',
    strengths: 'Strong in Pakistan/MENA, trade lead generation',
    weaknesses: 'Outdated platform, no integrated payments or credit',
    pricing: '$499-2,499/yr for suppliers',
  },
  {
    name: 'Alibaba',
    strengths: 'Massive supplier network, global reach, trade assurance',
    weaknesses: 'China-centric, complex for SMEs, no local BNPL',
    pricing: 'Free + Gold Supplier $2,999/yr',
  },
];

const competitiveAdvantages = [
  'Local-first: built for UAE/GCC businesses with Arabic support and AED/SAR pricing',
  'Integrated finance: Qist B2B credit, BNPL, and invoice financing built-in',
  'Hawil cross-border: seamless international trade with multi-currency support',
  'Ecosystem synergy: direct integration with Inventora, Wasil, and BizOne',
  'RFQ + negotiation: purpose-built for MENA procurement culture',
  'Gigzy integration: one-stop shop for goods and freelancer services',
];

// ─── Ecosystem Integrations ─────────────────────────────────────
const ecosystemIntegrations = [
  {
    app: 'Qist B2B Credit',
    description: 'Buy now, pay later for businesses. Pre-approved credit lines with Net-30/60/90 terms and installments.',
    type: 'Finance',
    color: 'text-teal-400',
    icon: CreditCard,
  },
  {
    app: 'Hawil Cross-border',
    description: 'International B2B payments, customs documentation, and trade finance for cross-border transactions.',
    type: 'Payments',
    color: 'text-cyan-400',
    icon: Globe,
  },
  {
    app: 'Inventora Stock Sync',
    description: 'Auto-syncs procurement orders with warehouse inventory. Received goods update stock in real-time.',
    type: 'Inventory',
    color: 'text-blue-400',
    icon: Layers,
  },
  {
    app: 'Wasil Delivery',
    description: 'B2B logistics and delivery coordination. Bulk shipments and recurring delivery scheduling.',
    type: 'Logistics',
    color: 'text-orange-400',
    icon: Truck,
  },
];

// ─── B2B Verticals ──────────────────────────────────────────────
const b2bVerticals = [
  { name: 'FoodMart', category: 'F&B Supplies', color: 'text-orange-400', suppliers: 180 },
  { name: 'TechifyPro', category: 'Tech & Electronics', color: 'text-blue-400', suppliers: 120 },
  { name: 'Buildzy', category: 'Construction', color: 'text-slate-400', suppliers: 95 },
  { name: 'HealthPro', category: 'Healthcare', color: 'text-red-400', suppliers: 85 },
  { name: 'FashnPro', category: 'Fashion & Apparel', color: 'text-fuchsia-400', suppliers: 110 },
  { name: 'AgroMart', category: 'Agriculture', color: 'text-green-400', suppliers: 70 },
  { name: 'EduMart', category: 'Education', color: 'text-cyan-400', suppliers: 60 },
  { name: 'SalonPro', category: 'Salon & Spa', color: 'text-rose-400', suppliers: 55 },
  { name: 'RetailMart', category: 'Retail Store', color: 'text-emerald-400', suppliers: 90 },
  { name: 'AutoTrade', category: 'Automotive', color: 'text-blue-400', suppliers: 75 },
  { name: 'BrandStack', category: 'Merchandise', color: 'text-pink-400', suppliers: 65 },
  { name: 'PrintoPro', category: 'Printing & Packaging', color: 'text-gray-400', suppliers: 50 },
];

export default function NextaBizzPage() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>('marketplace');
  const [activeTab, setActiveTab] = useState<'features' | 'pricing' | 'market'>('features');

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <div className="bg-gradient-to-br from-[#0a1628] via-emerald-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-6 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-xl shadow-emerald-500/30">
              <Package className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                NextaBizz
              </h1>
              <p className="text-emerald-400 text-lg sm:text-xl font-semibold mt-1">
                B2B Marketplace & Business Tools
              </p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            The all-in-one B2B platform connecting MENA businesses with verified suppliers, integrated
            credit (Qist), cross-border trade (Hawil), and freelancer services (Gigzy). From bulk ordering
            to invoice financing, NextaBizz powers the business-to-business economy.
          </p>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {heroStats.map((stat, i) => (
              <div key={i} className={`${stat.bg} rounded-xl p-4 text-center border ${stat.border}`}>
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════ TAB NAVIGATION ═══════════════ */}
      <div className="border-b border-slate-700/50 bg-slate-900/30 sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto">
            {[
              { key: 'features' as const, label: 'Core Features', icon: LayoutGrid },
              { key: 'pricing' as const, label: 'Pricing & Economics', icon: DollarSign },
              { key: 'market' as const, label: 'Market & Competition', icon: Globe },
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* ═══════════════ FEATURES TAB ═══════════════ */}
        {activeTab === 'features' && (
          <>
            {/* 8 Core Features */}
            <h2 className="text-2xl font-bold text-white mb-2">8 Core Features</h2>
            <p className="text-slate-400 mb-8">Everything a business needs to source, order, and pay -- all in one platform.</p>

            <div className="space-y-4">
              {coreFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className={`${feature.bgColor} border ${feature.borderColor} rounded-xl overflow-hidden transition-all`}
                >
                  <button
                    onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center border ${feature.borderColor}`}>
                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className={`text-base sm:text-lg font-bold ${feature.color}`}>
                            {feature.name}
                          </h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${feature.bgColor} ${feature.color} border ${feature.borderColor}`}>
                            {feature.metric}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm mt-0.5 line-clamp-1">{feature.description}</p>
                      </div>
                    </div>
                    {expandedFeature === feature.id ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                    )}
                  </button>

                  {expandedFeature === feature.id && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5">
                      <p className="text-slate-300 text-sm mb-4">{feature.description}</p>
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                        <h4 className="text-white font-bold mb-3 text-sm">Capabilities</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {feature.capabilities.map((cap, i) => (
                            <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                              <CheckCircle className={`w-4 h-4 ${feature.color} flex-shrink-0`} />
                              {cap}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* How It Works */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">How It Works</h2>
              <p className="text-slate-400 mb-8">Six steps from registration to delivery.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {howItWorksSteps.map((step) => (
                  <div key={step.step} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-lg border border-emerald-500/30">
                        {step.step}
                      </div>
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <h4 className={`font-bold ${step.color} mb-2`}>{step.title}</h4>
                    <p className="text-slate-400 text-sm">{step.description}</p>
                    {step.step < 6 && (
                      <ChevronRight className="absolute top-5 right-4 w-4 h-4 text-slate-600 hidden lg:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* B2B Verticals */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">B2B Verticals</h2>
              <p className="text-slate-400 mb-6">Specialized marketplaces across 12+ industry verticals.</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {b2bVerticals.map((vertical, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                    <h4 className={`font-bold ${vertical.color} text-sm`}>{vertical.name}</h4>
                    <p className="text-slate-400 text-xs mt-1">{vertical.category}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <Users className="w-3 h-3 text-slate-500" />
                      <span className="text-slate-500 text-xs">{vertical.suppliers} suppliers</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ecosystem Integrations */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">Ecosystem Integrations</h2>
              <p className="text-slate-400 mb-6">Deeply connected to the RTMN ecosystem for seamless B2B operations.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ecosystemIntegrations.map((integration, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-900/50 flex items-center justify-center">
                        <integration.icon className={`w-5 h-5 ${integration.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className={`font-bold ${integration.color}`}>{integration.app}</h4>
                          <span className="text-xs px-2 py-0.5 rounded bg-slate-700/50 text-slate-400">
                            {integration.type}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm">{integration.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ═══════════════ PRICING & ECONOMICS TAB ═══════════════ */}
        {activeTab === 'pricing' && (
          <>
            {/* Pricing Tiers */}
            <h2 className="text-2xl font-bold text-white mb-2">Pricing Plans</h2>
            <p className="text-slate-400 mb-8">Free to start, premium tools for power users.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingTiers.map((tier, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-6 border-2 ${tier.highlight ? 'border-emerald-500 ring-2 ring-emerald-500/20' : `${tier.border} border`} ${tier.bg} relative`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      BEST VALUE
                    </div>
                  )}
                  <h3 className={`text-xl font-bold ${tier.color} mb-1`}>{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-black text-white">{tier.price}</span>
                    <span className="text-slate-400 text-sm">{tier.period}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-5">{tier.description}</p>
                  <ul className="space-y-2">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-300 text-sm">
                        <CheckCircle className={`w-4 h-4 ${tier.color} flex-shrink-0 mt-0.5`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Unit Economics */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">Unit Economics</h2>
              <p className="text-slate-400 mb-8">Key metrics that drive the NextaBizz business model.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {unitEconomics.map((item, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                    <item.icon className={`w-8 h-8 ${item.color} mb-3`} />
                    <div className={`text-2xl font-bold ${item.color} mb-1`}>{item.value}</div>
                    <h4 className="text-white font-bold text-sm mb-1">{item.metric}</h4>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Model */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">Revenue Model</h2>
              <p className="text-slate-400 mb-8">Four revenue streams powering the B2B ecosystem.</p>

              <div className="space-y-4">
                {revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-900/50 flex items-center justify-center flex-shrink-0">
                        <stream.icon className={`w-6 h-6 ${stream.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`font-bold ${stream.color}`}>{stream.stream}</h4>
                          <span className={`text-lg font-bold ${stream.color}`}>{stream.percentage}</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-2">{stream.description}</p>
                        <div className="flex items-center gap-2">
                          <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 text-xs font-medium">{stream.projected}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 h-2 bg-slate-900/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${stream.color.replace('text-', 'bg-').replace('-400', '-500')}`}
                        style={{ width: stream.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Projected Revenue */}
              <div className="mt-6 bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30 text-center">
                <div className="text-sm text-slate-400 mb-1">Total Projected Annual Revenue</div>
                <div className="text-3xl font-black text-emerald-400">17.9M AED/yr</div>
                <div className="text-xs text-slate-500 mt-1">at full marketplace velocity with 2K orders/month</div>
              </div>
            </div>
          </>
        )}

        {/* ═══════════════ MARKET & COMPETITION TAB ═══════════════ */}
        {activeTab === 'market' && (
          <>
            {/* Market Opportunity */}
            <h2 className="text-2xl font-bold text-white mb-2">Market Opportunity</h2>
            <p className="text-slate-400 mb-8">UAE B2B e-commerce is a massive, rapidly growing market.</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30 text-center lg:col-span-1">
                <div className="text-sm text-slate-400 mb-2">Total Addressable Market</div>
                <div className="text-4xl font-black text-emerald-400">{marketData.tam}</div>
                <div className="text-sm text-emerald-400/70 mt-1">{marketData.tamLabel}</div>
                <div className="mt-4 pt-4 border-t border-emerald-500/20">
                  <div className="text-sm text-slate-400">Annual Growth</div>
                  <div className="text-2xl font-bold text-emerald-400">{marketData.growth}</div>
                </div>
              </div>

              <div className="lg:col-span-2 bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h4 className="text-white font-bold mb-4">Market Segments</h4>
                <div className="space-y-3">
                  {marketData.segments.map((seg, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-slate-300 text-sm">{seg.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 text-sm">{seg.size}</span>
                          <span className="text-white font-bold text-sm w-10 text-right">{seg.share}</span>
                        </div>
                      </div>
                      <div className="h-2 bg-slate-900/50 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${seg.color}`} style={{ width: seg.share }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Market Drivers */}
            <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30 mb-12">
              <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" /> Key Market Drivers
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {marketData.drivers.map((driver, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <ArrowUpRight className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    {driver}
                  </div>
                ))}
              </div>
            </div>

            {/* Competitors */}
            <h2 className="text-2xl font-bold text-white mb-2">Competitive Landscape</h2>
            <p className="text-slate-400 mb-8">How NextaBizz differentiates from global B2B platforms.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {competitors.map((comp, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                  <h4 className="text-white font-bold mb-1">{comp.name}</h4>
                  <div className="text-xs text-slate-500 mb-3">{comp.pricing}</div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-emerald-400 mb-1">Strengths</div>
                      <p className="text-slate-400 text-sm">{comp.strengths}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-red-400 mb-1">Weaknesses</div>
                      <p className="text-slate-400 text-sm">{comp.weaknesses}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Our Advantages */}
            <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30">
              <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" /> NextaBizz Competitive Advantages
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {competitiveAdvantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    {adv}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>

      {/* ═══════════════ NAVIGATION ═══════════════ */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Database className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/inventora" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-xl font-bold hover:bg-teal-400 transition-colors">
              <Layers className="w-5 h-5" /> Inventora
            </Link>
            <Link href="/bizone" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-400 transition-colors">
              <Store className="w-5 h-5" /> BizOne POS
            </Link>
            <Link href="/wasil" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-400 transition-colors">
              <Truck className="w-5 h-5" /> Wasil
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
