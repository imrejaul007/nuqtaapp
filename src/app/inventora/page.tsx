'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Layers, Warehouse, Truck, Package, BarChart3, RefreshCw,
  MapPin, Timer, AlertTriangle, CheckCircle, ChevronDown,
  ChevronUp, Database, Activity, ArrowRight, Boxes, ClipboardList,
  Scan, Settings, TrendingUp, DollarSign, Globe, ShoppingCart,
  Cpu, Zap, Shield, Users, Target, PieChart, CreditCard,
  ArrowUpRight, Clock, Star, Brain, Bell, Smartphone,
  Link2, LayoutGrid, GitBranch, ChevronRight, Briefcase
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── Hero Stats ────────────────────────────────────────────────
const heroStats = [
  { label: 'Real-time SKUs', value: '50K+', color: 'text-teal-400', bg: 'bg-teal-500/10', border: 'border-teal-500/30' },
  { label: 'Auto-Reorders/Mo', value: '2,400+', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  { label: 'Warehouses', value: '6', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
  { label: 'BizOne Syncs/Day', value: '10K+', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
  { label: 'Waste Reduced', value: '25%', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
];

// ─── Core Features (8) ────────────────────────────────────────
const coreFeatures = [
  {
    id: 'stock-tracking',
    name: 'Real-time Stock Tracking',
    icon: Activity,
    color: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/30',
    description: 'Live inventory counts across all warehouses and retail locations with instant sync to BizOne POS.',
    capabilities: [
      'Live stock levels per SKU per location',
      'Threshold alerts for low stock',
      'Stock movement history and audit trail',
      'Multi-unit tracking (pieces, kg, liters)',
      'Real-time dashboard with heatmaps',
      'Mobile app for floor staff scanning',
    ],
    metric: '99.9% accuracy',
  },
  {
    id: 'ai-forecasting',
    name: 'AI Demand Forecasting',
    icon: Brain,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    description: 'Machine learning models predict demand by SKU, location, and season with 95% accuracy.',
    capabilities: [
      'ML-based demand prediction per SKU',
      'Seasonal & holiday adjustment models',
      'Promotion impact forecasting',
      'New product launch demand estimation',
      'Weather-correlated demand patterns',
      'Trend detection and early signals',
    ],
    metric: '95% forecast accuracy',
  },
  {
    id: 'auto-reorder',
    name: 'Auto-Reorder Engine',
    icon: RefreshCw,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    description: 'Automatically generates purchase orders when stock hits reorder points, factoring in lead times.',
    capabilities: [
      'Dynamic reorder point calculation',
      'Safety stock optimization',
      'Lead time auto-adjustment',
      'Supplier rotation for best pricing',
      'Bulk discount optimization',
      'Approval workflow integration',
    ],
    metric: '40% fewer stockouts',
  },
  {
    id: 'multi-warehouse',
    name: 'Multi-warehouse Management',
    icon: Warehouse,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    description: 'Manage inventory across multiple warehouses with zone-based organization and inter-warehouse transfers.',
    capabilities: [
      'Zone and bin management per warehouse',
      'Inter-warehouse transfer optimization',
      'Warehouse-level P&L tracking',
      'Pick, pack, ship workflows',
      'Cold chain and hazmat compliance',
      'Capacity planning and forecasting',
    ],
    metric: '6 GCC warehouses',
  },
  {
    id: 'batch-expiry',
    name: 'Batch & Expiry Tracking',
    icon: Timer,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    description: 'Track batches, lots, and expiry dates with FEFO/FIFO enforcement and automated expiry alerts.',
    capabilities: [
      'Batch and lot number tracking',
      'FEFO/FIFO enforcement at pick level',
      'Expiry alerts at 30/60/90 days',
      'Automated markdown for near-expiry',
      'Recall management by batch',
      'Compliance reporting for food safety',
    ],
    metric: '20% less waste',
  },
  {
    id: 'barcode-rfid',
    name: 'Barcode/RFID Scanning',
    icon: Scan,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    description: 'Multi-method scanning with barcode, QR code, and RFID for fast, accurate inventory operations.',
    capabilities: [
      'Barcode (1D/2D) scanning via mobile',
      'QR code generation and reading',
      'RFID bulk scanning for counts',
      'Bluetooth scanner integration',
      'Label printing integration',
      'Scan-to-receive and scan-to-ship',
    ],
    metric: '10x faster counts',
  },
  {
    id: 'supplier-mgmt',
    name: 'Supplier Management',
    icon: Users,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    description: 'Complete supplier lifecycle management with performance scoring, price comparison, and contract management.',
    capabilities: [
      'Supplier onboarding and verification',
      'Performance scoring (delivery, quality)',
      'Price comparison across suppliers',
      'Contract and terms management',
      'Spend analytics and optimization',
      'Automated PO dispatch to suppliers',
    ],
    metric: '500+ suppliers',
  },
  {
    id: 'bizone-sync',
    name: 'BizOne POS Sync',
    icon: Link2,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    description: 'Two-way real-time sync with BizOne POS for automatic stock deductions on sales and restocking triggers.',
    capabilities: [
      'Real-time stock deduction on POS sale',
      'Menu/catalog sync for availability',
      'Multi-location inventory visibility',
      'Return and exchange stock updates',
      'Stockout prevention at POS level',
      'Sales velocity data for forecasting',
    ],
    metric: '10K+ syncs/day',
  },
];

// ─── How It Works Steps ────────────────────────────────────────
const howItWorksSteps = [
  {
    step: 1,
    title: 'Receive Stock',
    description: 'Goods arrive at warehouse. Staff scan items using barcode or RFID to log incoming shipments against purchase orders.',
    icon: Package,
    color: 'text-teal-400',
  },
  {
    step: 2,
    title: 'Scan & Shelve',
    description: 'Each item is scanned and assigned to a zone, rack, and bin. System records batch, expiry, and serial numbers automatically.',
    icon: Scan,
    color: 'text-blue-400',
  },
  {
    step: 3,
    title: 'Track in Real-time',
    description: 'Live dashboards show stock levels across all locations. BizOne POS deducts stock on every sale automatically.',
    icon: Activity,
    color: 'text-purple-400',
  },
  {
    step: 4,
    title: 'AI Predicts Demand',
    description: 'Machine learning analyzes sales velocity, seasonality, promotions, and trends to forecast demand per SKU.',
    icon: Brain,
    color: 'text-orange-400',
  },
  {
    step: 5,
    title: 'Auto-Reorder',
    description: 'When stock hits dynamic reorder points, system auto-generates POs to optimal suppliers with best pricing.',
    icon: RefreshCw,
    color: 'text-emerald-400',
  },
  {
    step: 6,
    title: 'Fulfill Orders',
    description: 'Pick, pack, and ship workflows ensure accurate fulfillment. Wasil handles last-mile delivery integration.',
    icon: Truck,
    color: 'text-pink-400',
  },
];

// ─── Pricing Tiers ─────────────────────────────────────────────
const pricingTiers = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for small shops and new businesses getting started with inventory management.',
    color: 'text-slate-400',
    bg: 'bg-slate-500/10',
    border: 'border-slate-500/30',
    highlight: false,
    features: [
      'Up to 100 SKUs',
      '1 warehouse location',
      'Basic stock tracking',
      'Barcode scanning (mobile)',
      'Low stock alerts',
      'BizOne POS sync (basic)',
      'Email support',
      'Monthly reports',
    ],
  },
  {
    name: 'Business',
    price: '199 AED',
    period: '/month',
    description: 'For growing businesses that need AI forecasting and multi-location management.',
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/30',
    highlight: true,
    features: [
      'Up to 5,000 SKUs',
      'Up to 3 warehouse locations',
      'AI demand forecasting',
      'Auto-reorder engine',
      'Batch & expiry tracking',
      'Barcode + QR scanning',
      'Supplier management (50)',
      'BizOne POS sync (real-time)',
      'Priority support',
      'Weekly analytics reports',
    ],
  },
  {
    name: 'Enterprise',
    price: '499 AED',
    period: '/month',
    description: 'Unlimited scale for large retailers and distributors with advanced needs.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    highlight: false,
    features: [
      'Unlimited SKUs',
      'Unlimited warehouse locations',
      'Advanced AI forecasting + trends',
      'Auto-reorder with supplier rotation',
      'RFID integration',
      'Full batch, lot, serial tracking',
      'Unlimited supplier management',
      'Full ecosystem sync (BizOne, Wasil, NextaBizz)',
      'Dedicated account manager',
      'Custom integrations & API access',
      'Real-time analytics dashboard',
      'SLA guarantee (99.9% uptime)',
    ],
  },
];

// ─── Unit Economics ─────────────────────────────────────────────
const unitEconomics = [
  { metric: 'Waste Reduction', value: '20-30%', description: 'Less spoilage and dead stock through AI forecasting and FEFO enforcement', icon: TrendingUp, color: 'text-emerald-400' },
  { metric: 'Time Saved', value: '15 hrs/week', description: 'Eliminated manual counting, spreadsheet tracking, and phone-based reordering', icon: Clock, color: 'text-blue-400' },
  { metric: 'Avg Merchant Savings', value: '5K AED/mo', description: 'Through reduced waste, optimized ordering, and better supplier pricing', icon: DollarSign, color: 'text-teal-400' },
  { metric: 'Stockout Reduction', value: '40%', description: 'AI-predicted reorder points prevent lost sales from empty shelves', icon: AlertTriangle, color: 'text-orange-400' },
  { metric: 'Inventory Accuracy', value: '99.9%', description: 'Barcode/RFID scanning eliminates manual entry errors', icon: Target, color: 'text-purple-400' },
  { metric: 'Order Fulfillment', value: '98%', description: 'Pick, pack, ship workflows ensure accurate order delivery', icon: CheckCircle, color: 'text-pink-400' },
];

// ─── Revenue Model ──────────────────────────────────────────────
const revenueStreams = [
  {
    stream: 'SaaS Subscriptions',
    description: 'Monthly subscription fees from Business (199 AED) and Enterprise (499 AED) tiers',
    percentage: '55%',
    icon: CreditCard,
    color: 'text-teal-400',
    projected: '2.5M AED/yr at 1,000 merchants',
  },
  {
    stream: 'Hardware Sales',
    description: 'Barcode scanners, RFID readers, label printers, and warehouse equipment',
    percentage: '20%',
    icon: Smartphone,
    color: 'text-blue-400',
    projected: '900K AED/yr',
  },
  {
    stream: 'Premium Features',
    description: 'Advanced analytics, custom integrations, API access, and dedicated support',
    percentage: '15%',
    icon: Star,
    color: 'text-purple-400',
    projected: '700K AED/yr',
  },
  {
    stream: 'Data Insights',
    description: 'Aggregated market insights, demand trends, and supplier intelligence reports',
    percentage: '10%',
    icon: PieChart,
    color: 'text-orange-400',
    projected: '400K AED/yr',
  },
];

// ─── Market Opportunity ─────────────────────────────────────────
const marketData = {
  tam: '$500M+',
  tamLabel: 'UAE SME Inventory Management',
  segments: [
    { name: 'Retail & Grocery', size: '$180M', share: '36%', color: 'bg-teal-500' },
    { name: 'F&B / Restaurants', size: '$120M', share: '24%', color: 'bg-blue-500' },
    { name: 'E-commerce Warehousing', size: '$95M', share: '19%', color: 'bg-purple-500' },
    { name: 'Wholesale & Distribution', size: '$65M', share: '13%', color: 'bg-orange-500' },
    { name: 'Specialty & Niche', size: '$40M', share: '8%', color: 'bg-pink-500' },
  ],
  growth: '18% CAGR',
  drivers: [
    'UAE government push for digital transformation in SMEs',
    'Growing e-commerce requiring warehouse operations',
    'Food safety regulations mandating batch tracking',
    'Rising labor costs driving automation demand',
  ],
};

// ─── Competitors ────────────────────────────────────────────────
const competitors = [
  {
    name: 'Zoho Inventory',
    strengths: 'Established brand, broad feature set, affordable',
    weaknesses: 'Generic, no local ecosystem, no POS integration depth',
    pricing: '$79-249/mo',
  },
  {
    name: 'TradeGecko (QuickBooks)',
    strengths: 'Strong B2B features, multi-channel selling',
    weaknesses: 'Discontinued standalone, merged into QuickBooks Commerce',
    pricing: '$39-599/mo',
  },
  {
    name: 'inFlow Inventory',
    strengths: 'Easy to use, good for small businesses',
    weaknesses: 'Limited scalability, no MENA focus, basic AI',
    pricing: '$89-439/mo',
  },
];

const competitiveAdvantages = [
  'Deep BizOne POS integration for real-time stock sync on every sale',
  'Wasil last-mile delivery integration for seamless fulfillment',
  'NextaBizz B2B ordering for supplier procurement within ecosystem',
  'AI forecasting trained on MENA market patterns and seasonality',
  'Arabic-first interface with AED/SAR currency support',
  'Nuqta Coins rewards for merchants using the platform',
];

// ─── Ecosystem Integrations ─────────────────────────────────────
const ecosystemIntegrations = [
  {
    app: 'BizOne POS',
    description: 'Two-way real-time sync: every POS sale deducts stock, every restock updates POS availability',
    type: 'Core Integration',
    color: 'text-blue-400',
    icon: ShoppingCart,
  },
  {
    app: 'Wasil Delivery',
    description: 'Fulfillment hand-off: pick-pack-ship triggers Wasil dispatch for last-mile delivery',
    type: 'Fulfillment',
    color: 'text-orange-400',
    icon: Truck,
  },
  {
    app: 'NextaBizz B2B',
    description: 'Auto-reorder POs route through NextaBizz marketplace for competitive supplier pricing',
    type: 'Procurement',
    color: 'text-emerald-400',
    icon: Package,
  },
  {
    app: 'NuqtaPay',
    description: 'Supplier payments processed through NuqtaPay for unified financial tracking',
    type: 'Payments',
    color: 'text-purple-400',
    icon: CreditCard,
  },
];

// ─── Warehouse Locations ────────────────────────────────────────
const warehouseLocations = [
  { city: 'Dubai', country: 'UAE', type: 'Central Hub', size: '50,000 sqft', skus: '25K+' },
  { city: 'Abu Dhabi', country: 'UAE', type: 'Regional', size: '25,000 sqft', skus: '12K+' },
  { city: 'Riyadh', country: 'KSA', type: 'Central Hub', size: '40,000 sqft', skus: '20K+' },
  { city: 'Jeddah', country: 'KSA', type: 'Regional', size: '20,000 sqft', skus: '10K+' },
  { city: 'Doha', country: 'Qatar', type: 'Regional', size: '15,000 sqft', skus: '8K+' },
  { city: 'Manama', country: 'Bahrain', type: 'Local', size: '10,000 sqft', skus: '5K+' },
];

export default function InventoraPage() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>('stock-tracking');
  const [activeTab, setActiveTab] = useState<'features' | 'pricing' | 'market' | 'deck'>('features');

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <div className="bg-gradient-to-br from-[#0a1628] via-teal-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 mb-6 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-xl shadow-teal-500/30">
              <Layers className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Inventora
              </h1>
              <p className="text-teal-400 text-lg sm:text-xl font-semibold mt-1">
                AI-Powered Warehouse & Inventory Management
              </p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            End-to-end inventory intelligence for MENA businesses. From receiving stock to AI-driven
            reordering, Inventora replaces spreadsheets with real-time visibility, reducing waste by
            20-30% and saving merchants 15+ hours per week.
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
              { key: 'deck' as const, label: 'Pitch Deck', icon: Briefcase },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'border-teal-400 text-teal-400'
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
            <p className="text-slate-400 mb-8">Everything you need to run a world-class inventory operation.</p>

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
              <p className="text-slate-400 mb-8">Six steps from receiving stock to fulfilled orders.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {howItWorksSteps.map((step) => (
                  <div key={step.step} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-lg border border-teal-500/30">
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

            {/* Warehouse Locations */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">GCC Warehouse Network</h2>
              <p className="text-slate-400 mb-6">Strategic locations covering the full Gulf region.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {warehouseLocations.map((loc, i) => (
                  <div key={i} className="bg-teal-500/10 rounded-xl p-5 border border-teal-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-teal-400" />
                        <h4 className="text-white font-bold">{loc.city}</h4>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        loc.type === 'Central Hub'
                          ? 'bg-teal-500/20 text-teal-400'
                          : loc.type === 'Regional'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-slate-700/50 text-slate-400'
                      }`}>
                        {loc.type}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">{loc.country}</p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-teal-500/20">
                      <span className="text-teal-400 text-sm font-medium">{loc.size}</span>
                      <span className="text-slate-300 text-sm">{loc.skus} SKUs</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ecosystem Integrations */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">Ecosystem Integrations</h2>
              <p className="text-slate-400 mb-6">Deeply connected to the RTMN ecosystem for end-to-end operations.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ecosystemIntegrations.map((integration, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-slate-900/50 flex items-center justify-center`}>
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
            <p className="text-slate-400 mb-8">Simple, transparent pricing that scales with your business.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingTiers.map((tier, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-6 border-2 ${tier.highlight ? 'border-teal-500 ring-2 ring-teal-500/20' : `${tier.border} border`} ${tier.bg} relative`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
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
              <p className="text-slate-400 mb-8">The measurable impact Inventora delivers to every merchant.</p>

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
              <p className="text-slate-400 mb-8">Four diversified revenue streams for sustainable growth.</p>

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
                    {/* Revenue bar */}
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
              <div className="mt-6 bg-teal-500/10 rounded-xl p-6 border border-teal-500/30 text-center">
                <div className="text-sm text-slate-400 mb-1">Total Projected Annual Revenue</div>
                <div className="text-3xl font-black text-teal-400">4.5M AED/yr</div>
                <div className="text-xs text-slate-500 mt-1">at 1,000 active merchant subscriptions</div>
              </div>
            </div>
          </>
        )}

        {/* ═══════════════ MARKET & COMPETITION TAB ═══════════════ */}
        {activeTab === 'market' && (
          <>
            {/* Market Opportunity */}
            <h2 className="text-2xl font-bold text-white mb-2">Market Opportunity</h2>
            <p className="text-slate-400 mb-8">UAE SME inventory management is a massive, underserved market.</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-500/30 text-center lg:col-span-1">
                <div className="text-sm text-slate-400 mb-2">Total Addressable Market</div>
                <div className="text-4xl font-black text-teal-400">{marketData.tam}</div>
                <div className="text-sm text-teal-400/70 mt-1">{marketData.tamLabel}</div>
                <div className="mt-4 pt-4 border-t border-teal-500/20">
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
            <p className="text-slate-400 mb-8">How Inventora stacks up against established players.</p>

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
            <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-500/30">
              <h4 className="text-teal-400 font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" /> Inventora Competitive Advantages
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {competitiveAdvantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    {adv}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ═══════════════ PITCH DECK TAB ═══════════════ */}
        {activeTab === 'deck' && (
          <div className="space-y-8">
            {/* Investment Thesis */}
            <div className="bg-gradient-to-r from-teal-500/20 to-teal-500/5 rounded-2xl p-6 border border-teal-500/30">
              <h2 className="text-2xl font-bold text-white mb-2">Investment Thesis</h2>
              <p className="text-slate-300 leading-relaxed">
                Inventora is the supply chain operating system for MENA commerce. By connecting BizOne POS data to AI demand forecasting
                to automated procurement via NextaBizz to last-mile delivery via Wasil, Inventora creates a closed-loop supply chain that
                no standalone inventory tool can replicate. Every SME joining the RTMN ecosystem becomes an Inventora customer by default.
              </p>
            </div>

            {/* Market Opportunity */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Market Opportunity</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'TAM', value: '$2B+', detail: 'UAE Supply Chain Software Market' },
                  { label: 'SAM', value: '$500M', detail: 'SME Inventory Management Segment' },
                  { label: 'SOM', value: '$50M', detail: 'Year 3 Inventora Revenue Target' },
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
                  { title: 'AI Demand Forecasting', desc: '95% accuracy ML models predict demand per SKU, location, and season' },
                  { title: 'Auto-Reorder from NextaBizz', desc: 'POs auto-route through marketplace for best wholesale pricing' },
                  { title: 'Real-time BizOne POS Sync', desc: 'Every sale deducts stock, every restock updates POS — zero manual work' },
                  { title: 'Multi-warehouse Visibility', desc: '6+ GCC warehouses with zone-based org and inter-warehouse transfers' },
                  { title: 'Batch & Expiry Intelligence', desc: 'FEFO/FIFO enforcement, automated alerts at 30/60/90 days' },
                  { title: 'Arabic-First, AED-Native', desc: 'Built for MENA — Arabic interface, local compliance, GCC seasonality' },
                ].map(d => (
                  <div key={d.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <div><div className="text-white font-medium text-sm">{d.title}</div>
                    <div className="text-xs text-slate-400">{d.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Year Financials */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Financial Projections</h3>
              <table className="w-full text-sm">
                <thead><tr className="border-b border-slate-700">
                  <th className="text-left py-2 text-slate-400">Metric</th>
                  <th className="text-right py-2 text-slate-400">Year 1</th>
                  <th className="text-right py-2 text-slate-400">Year 2</th>
                  <th className="text-right py-2 text-slate-400">Year 3</th>
                </tr></thead>
                <tbody>
                  <tr className="border-b border-slate-700/50"><td className="py-2 text-slate-300">Businesses</td><td className="text-right text-white">500</td><td className="text-right text-white">2,000</td><td className="text-right text-white">8,000</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-2 text-slate-300">Revenue (AED M)</td><td className="text-right text-teal-400 font-bold">3M</td><td className="text-right text-teal-400 font-bold">15M</td><td className="text-right text-teal-400 font-bold">50M</td></tr>
                  <tr><td className="py-2 text-slate-300">Net Profit (AED M)</td><td className="text-right text-emerald-400">0.9M</td><td className="text-right text-emerald-400">7.5M</td><td className="text-right text-emerald-400">32.5M</td></tr>
                </tbody>
              </table>
            </div>

            {/* Comparable Companies */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Comparable Companies</h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Cin7', val: '$1B+', metric: 'Multi-channel inventory mgmt' },
                  { name: 'Fishbowl', val: '$300M+', metric: 'Manufacturing inventory + QuickBooks' },
                  { name: 'ShipBob', val: '$3B', metric: 'Fulfillment + inventory for e-commerce' },
                ].map(c => (
                  <div key={c.name} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
                    <div className="text-sm font-bold text-white">{c.name}</div>
                    <div className="text-lg font-black text-teal-400 mt-1">{c.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{c.metric}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unicorn Path */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ArrowUpRight className="w-5 h-5" /> Unicorn Path
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { ms: '500 businesses', val: '~3M AED', detail: 'Q4 2026 — ~$15M valuation' },
                  { ms: '2,000 businesses', val: '~15M AED', detail: 'Q4 2027 — ~$75M valuation' },
                  { ms: '8,000 businesses', val: '~50M AED', detail: 'Q4 2028 — ~$250M valuation' },
                  { ms: '25,000 businesses', val: '~200M AED', detail: '2029+ — ~$1B+ valuation' },
                ].map(m => (
                  <div key={m.ms} className="bg-slate-900/50 rounded-lg p-3 border border-teal-500/20">
                    <div className="text-xs text-teal-400 font-bold">{m.ms}</div>
                    <div className="text-sm font-bold text-white mt-1">{m.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{m.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RTMN Multiplier */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-transparent rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-[#c9a227] mb-3">RTMN Ecosystem Multiplier</h3>
              <p className="text-slate-300 text-sm mb-4">Every BizOne merchant is a pre-qualified lead. The POS-to-inventory-to-procurement loop creates unbreakable switching costs.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { product: 'BizOne Cross-sell', role: '10K+ merchants = massive built-in TAM' },
                  { product: 'NextaBizz Auto-order', role: 'No competitor can auto-order wholesale' },
                  { product: 'Data Flywheel', role: 'More merchants = better AI = less waste' },
                  { product: 'Supply Chain Lock-in', role: 'POS + Inventory + Procurement + Delivery' },
                  { product: 'Wasil Fulfillment', role: 'Pick-pack-ship to last-mile hand-off' },
                  { product: 'NuqtaPay', role: 'Unified supplier payments and reconciliation' },
                ].map(s => (
                  <div key={s.product} className="bg-slate-800/50 rounded-lg px-3 py-2 border border-[#c9a227]/20">
                    <div className="text-xs font-bold text-[#c9a227]">{s.product}</div>
                    <div className="text-xs text-slate-400">{s.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ═══════════════ NAVIGATION ═══════════════ */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Database className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/bizone" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-400 transition-colors">
              <ShoppingCart className="w-5 h-5" /> BizOne POS
            </Link>
            <Link href="/nextabizz" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-400 transition-colors">
              <Package className="w-5 h-5" /> NextaBizz
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
