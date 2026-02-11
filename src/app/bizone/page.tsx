'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Store, Smartphone, Package, Megaphone, BarChart3, Users, TrendingUp,
  CheckCircle, Clock, Target, Globe, ArrowRight, CreditCard, Coins,
  Shield, Zap, Receipt, Calculator, LineChart, PieChart, Bell,
  Settings, FileText, Truck, Crown, Gift, Star, ChevronDown, ChevronUp,
  Building2, Phone, Mail, MessageSquare, QrCode, Wallet, BadgePercent,
  UserCheck, Lock, Database, Server
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// BizOne Suite Products
const bizOneSuite = [
  {
    id: 'bizone',
    name: 'BizOne',
    arabic: 'بيز ون',
    tagline: 'Unified Merchant Dashboard',
    description: 'Single dashboard to manage all Nuqta ecosystem products - payments, orders, analytics, customer insights.',
    icon: Store,
    status: 'Q2 2027',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    features: [
      { name: 'Unified Dashboard', description: 'All products in one view - Qist, Wasil, Nuqta+, Hawil', icon: BarChart3 },
      { name: 'Real-time Analytics', description: 'Sales, traffic, conversion, customer behavior', icon: LineChart },
      { name: 'Order Management', description: 'Process orders from all channels in one place', icon: Package },
      { name: 'Customer Insights', description: 'CRM, purchase history, loyalty status', icon: Users },
      { name: 'Financial Reports', description: 'Revenue, settlements, tax reports, forecasting', icon: Calculator },
      { name: 'Multi-location', description: 'Manage multiple branches from one account', icon: Globe },
    ],
    pricing: [
      { tier: 'Starter', price: 'Free', features: ['Up to 100 orders/mo', 'Basic analytics', '1 user'] },
      { tier: 'Growth', price: '199 AED/mo', features: ['Unlimited orders', 'Advanced analytics', '5 users', 'API access'] },
      { tier: 'Enterprise', price: 'Custom', features: ['All features', 'Unlimited users', 'Dedicated support', 'Custom integrations'] },
    ],
  },
  {
    id: 'nextabizz',
    name: 'NextaBizz',
    arabic: 'نكستا بيز',
    tagline: 'POS & Business Tools',
    description: 'Complete point-of-sale system with inventory, invoicing, payments, and staff management.',
    icon: Smartphone,
    status: 'Q3 2027',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    features: [
      { name: 'Cloud POS', description: 'Works on any device - tablet, phone, desktop', icon: Smartphone },
      { name: 'Accept All Payments', description: 'Cards, Qist BNPL, Nuqta coins, Hawil Card', icon: CreditCard },
      { name: 'Quick Invoicing', description: 'Create and send invoices in seconds', icon: FileText },
      { name: 'Staff Management', description: 'Shifts, permissions, performance tracking', icon: Users },
      { name: 'Offline Mode', description: 'Keep selling even without internet', icon: Zap },
      { name: 'Receipt Customization', description: 'Branded receipts, digital or print', icon: Receipt },
    ],
    pricing: [
      { tier: 'Solo', price: '99 AED/mo', features: ['1 register', 'Basic POS', 'Email support'] },
      { tier: 'Business', price: '299 AED/mo', features: ['3 registers', 'Full POS', 'Priority support', 'Hardware bundle'] },
      { tier: 'Chain', price: '499 AED/mo', features: ['Unlimited registers', 'Multi-location', 'Dedicated manager'] },
    ],
  },
  {
    id: 'inventora',
    name: 'Inventora',
    arabic: 'إنفنتورا',
    tagline: 'Smart Inventory Management',
    description: 'AI-powered inventory tracking with automatic reordering, waste reduction, and supplier management.',
    icon: Package,
    status: 'Q3 2027',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    features: [
      { name: 'Real-time Stock', description: 'Know exactly what you have, where it is', icon: Package },
      { name: 'Auto-reorder', description: 'AI predicts demand, auto-orders from suppliers', icon: Zap },
      { name: 'Barcode/QR Scanning', description: 'Quick stock counts with mobile scanning', icon: QrCode },
      { name: 'Supplier Portal', description: 'Connect with suppliers, compare prices', icon: Building2 },
      { name: 'Waste Tracking', description: 'Reduce losses, track expiry, optimize stock', icon: Calculator },
      { name: 'Multi-warehouse', description: 'Manage inventory across locations', icon: Globe },
    ],
    pricing: [
      { tier: 'Basic', price: '149 AED/mo', features: ['1,000 SKUs', 'Basic tracking', 'Manual reorder'] },
      { tier: 'Pro', price: '399 AED/mo', features: ['10,000 SKUs', 'Auto-reorder', 'Supplier integration'] },
      { tier: 'Enterprise', price: '799 AED/mo', features: ['Unlimited SKUs', 'AI forecasting', 'Multi-warehouse'] },
    ],
  },
  {
    id: 'adzy',
    name: 'Adzy',
    arabic: 'أدزي',
    tagline: 'Ecosystem Advertising Platform',
    description: 'Reach millions of Nuqta users with targeted ads across all ecosystem apps and touchpoints.',
    icon: Megaphone,
    status: 'Q4 2027',
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    features: [
      { name: 'Featured Listings', description: 'Top placement in search and categories', icon: Star },
      { name: 'Push Notifications', description: 'Reach users with targeted push messages', icon: Bell },
      { name: 'In-app Banners', description: 'Display ads across Nuqta ecosystem apps', icon: Megaphone },
      { name: 'Offer Campaigns', description: 'Create limited-time deals and flash sales', icon: Gift },
      { name: 'Audience Targeting', description: 'Target by location, behavior, demographics', icon: Target },
      { name: 'Performance Analytics', description: 'Track impressions, clicks, conversions, ROI', icon: BarChart3 },
    ],
    pricing: [
      { tier: 'Pay-per-click', price: 'From 0.10 AED', features: ['CPC model', 'Budget control', 'Basic targeting'] },
      { tier: 'Featured Merchant', price: '999 AED/mo', features: ['Top placement', 'Priority support', 'Campaign manager'] },
      { tier: 'Brand Partner', price: 'Custom', features: ['Exclusive placements', 'Co-branded campaigns', 'Strategic partnership'] },
    ],
  },
];

// Merchant Benefits
const merchantBenefits = [
  {
    benefit: 'Zero Setup Fee',
    description: 'Get started with no upfront costs - pay only when you earn',
    icon: Gift,
    color: 'text-emerald-400',
  },
  {
    benefit: 'Instant Settlements',
    description: 'Get paid within 24 hours, not weeks like traditional processors',
    icon: Zap,
    color: 'text-yellow-400',
  },
  {
    benefit: 'Ecosystem Traffic',
    description: 'Access 500K+ Nuqta users actively looking for merchants',
    icon: Users,
    color: 'text-blue-400',
  },
  {
    benefit: 'Lower Fees',
    description: 'Competitive rates starting at 1.5% - lower than traditional payment processors',
    icon: BadgePercent,
    color: 'text-purple-400',
  },
  {
    benefit: 'Qist Integration',
    description: 'Offer BNPL to customers, get paid upfront, increase basket size',
    icon: Wallet,
    color: 'text-violet-400',
  },
  {
    benefit: 'Customer Loyalty',
    description: 'Customers earn Nuqta coins - they keep coming back',
    icon: Crown,
    color: 'text-[#c9a227]',
  },
];

// Integration Partners
const integrations = [
  { name: 'Shopify', category: 'E-commerce', logo: '🛒' },
  { name: 'WooCommerce', category: 'E-commerce', logo: '🔌' },
  { name: 'Xero', category: 'Accounting', logo: '📊' },
  { name: 'QuickBooks', category: 'Accounting', logo: '💰' },
  { name: 'Odoo', category: 'ERP', logo: '🏢' },
  { name: 'Zoho', category: 'CRM', logo: '📈' },
  { name: 'Talabat', category: 'Delivery', logo: '🚴' },
  { name: 'Deliveroo', category: 'Delivery', logo: '🍔' },
];

// Success Metrics
const successMetrics = [
  { metric: 'Avg. Revenue Increase', value: '35%', description: 'After joining Nuqta ecosystem' },
  { metric: 'New Customer Acquisition', value: '500+', description: 'Monthly new customers via ecosystem' },
  { metric: 'Repeat Purchase Rate', value: '68%', description: 'Nuqta coin holders return rate' },
  { metric: 'Basket Size Increase', value: '45%', description: 'When Qist BNPL is enabled' },
];

// GCC Availability
const gccAvailability = [
  { country: 'UAE', flag: '🇦🇪', status: 'Active', merchants: '500+' },
  { country: 'Saudi Arabia', flag: '🇸🇦', status: 'Q3 2027', merchants: 'Coming Soon' },
  { country: 'Qatar', flag: '🇶🇦', status: 'Q4 2027', merchants: 'Coming Soon' },
  { country: 'Kuwait', flag: '🇰🇼', status: '2028', merchants: 'Coming Soon' },
  { country: 'Bahrain', flag: '🇧🇭', status: '2028', merchants: 'Coming Soon' },
  { country: 'Oman', flag: '🇴🇲', status: '2028', merchants: 'Coming Soon' },
];

export default function BizOnePage() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>('bizone');
  const [activeTab, setActiveTab] = useState('products');

  const tabs = [
    { id: 'products', label: 'Suite Products', icon: Store },
    { id: 'benefits', label: 'Why Join', icon: Gift },
    { id: 'integrations', label: 'Integrations', icon: Zap },
    { id: 'gcc', label: 'GCC Coverage', icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-blue-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full mb-6">
            <Store className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-bold">Merchant B2B Suite</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            <span className="text-blue-400">BizOne</span> Merchant Suite
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            Everything merchants need to thrive in the Nuqta ecosystem - unified dashboard,
            POS systems, inventory management, and advertising platform. All integrated,
            all designed for GCC businesses.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {successMetrics.map((item, i) => (
              <div key={i} className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/30">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">{item.value}</div>
                <div className="text-xs sm:text-sm text-slate-400">{item.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-2 gap-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="space-y-4 sm:space-y-6">
            {bizOneSuite.map((product) => (
              <div
                key={product.id}
                className={`${product.bgColor} border-2 rounded-xl overflow-hidden`}
                style={{ borderColor: product.textColor.includes('blue') ? '#3b82f6' : product.textColor.includes('purple') ? '#a855f7' : product.textColor.includes('emerald') ? '#10b981' : '#f97316' }}
              >
                <button
                  onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                  className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                      <product.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className={`text-lg sm:text-xl font-bold ${product.textColor}`}>
                          {product.name}
                        </h3>
                        <span className="text-slate-500 text-sm">{product.arabic}</span>
                        <span className="bg-slate-900/50 px-2 py-0.5 rounded text-xs text-slate-300">
                          {product.status}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm">{product.tagline}</p>
                    </div>
                  </div>
                  {expandedProduct === product.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                {expandedProduct === product.id && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                    <p className="text-slate-300 mb-6">{product.description}</p>

                    {/* Features */}
                    <h4 className="text-white font-bold mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                      {product.features.map((feature, i) => (
                        <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                          <feature.icon className={`w-6 h-6 ${product.textColor} mb-2`} />
                          <h5 className="text-white font-bold text-sm mb-1">{feature.name}</h5>
                          <p className="text-slate-400 text-xs">{feature.description}</p>
                        </div>
                      ))}
                    </div>

                    {/* Pricing */}
                    <h4 className="text-white font-bold mb-4">Pricing</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {product.pricing.map((tier, i) => (
                        <div key={i} className={`bg-slate-900/50 rounded-xl p-4 border ${i === 1 ? `border-2 ${product.textColor.replace('text-', 'border-')}` : 'border-slate-700/50'}`}>
                          <h5 className={`font-bold text-lg ${i === 1 ? product.textColor : 'text-white'}`}>{tier.tier}</h5>
                          <div className="text-2xl font-bold text-white my-2">{tier.price}</div>
                          <ul className="space-y-1">
                            {tier.features.map((f, j) => (
                              <li key={j} className="text-slate-400 text-sm flex items-center gap-2">
                                <CheckCircle className={`w-3 h-3 ${product.textColor}`} />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/10 rounded-xl p-6 sm:p-8 border-2 border-blue-500">
              <h2 className="text-2xl font-bold text-white mb-6">Why Join the Nuqta Merchant Network?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {merchantBenefits.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                    <item.icon className={`w-8 h-8 ${item.color} mb-3`} />
                    <h4 className="text-white font-bold mb-2">{item.benefit}</h4>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6">How to Get Started</h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {[
                  { step: 1, title: 'Apply Online', description: 'Fill out the merchant application form', icon: FileText },
                  { step: 2, title: 'Get Verified', description: 'Quick KYB verification (24-48 hours)', icon: UserCheck },
                  { step: 3, title: 'Setup & Train', description: 'Free onboarding and staff training', icon: Settings },
                  { step: 4, title: 'Go Live', description: 'Start accepting Nuqta payments!', icon: Zap },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                        <item.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="text-xs text-blue-400 mb-1">Step {item.step}</div>
                      <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-xs">{item.description}</p>
                    </div>
                    {i < 3 && <ArrowRight className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600" size={16} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Integrations Tab */}
        {activeTab === 'integrations' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/10 rounded-xl p-6 sm:p-8 border-2 border-purple-500">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-purple-400" />
                Seamless Integrations
              </h2>
              <p className="text-slate-300 mb-6">
                BizOne connects with the tools you already use - e-commerce platforms, accounting software,
                ERPs, and delivery partners.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {integrations.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50 hover:border-purple-500/50 transition-colors">
                    <div className="text-3xl mb-2">{item.logo}</div>
                    <h4 className="text-white font-bold text-sm">{item.name}</h4>
                    <span className="text-purple-400 text-xs">{item.category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* API & Developer */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-emerald-400" />
                Developer API
              </h3>
              <p className="text-slate-300 mb-4">
                Build custom integrations with our RESTful API. Full documentation, SDKs for popular languages,
                and sandbox environment for testing.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['REST API', 'Webhooks', 'SDKs', 'Sandbox'].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 text-center border border-emerald-500/30">
                    <span className="text-emerald-400 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* GCC Tab */}
        {activeTab === 'gcc' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/20 via-blue-500/10 to-emerald-500/10 rounded-xl p-6 sm:p-8 border-2 border-[#c9a227]">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-[#c9a227]" />
                GCC Merchant Network
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {gccAvailability.map((country, i) => (
                  <div key={i} className={`bg-slate-900/50 rounded-xl p-5 border-2 ${
                    country.status === 'Active' ? 'border-emerald-500' : 'border-slate-700'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{country.flag}</span>
                        <h4 className="font-bold text-white">{country.country}</h4>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        country.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {country.status}
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="text-slate-400">Merchants: </span>
                      <span className="text-white font-medium">{country.merchants}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500/20 to-indigo-500/10 border-t border-blue-500/30 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Grow Your Business?</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Join 500+ merchants already thriving in the Nuqta ecosystem. Get started today with zero setup fees.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ecosystem"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-400 transition-colors"
            >
              <Store className="w-5 h-5" /> Apply Now
            </Link>
            <Link
              href="/rtmn-ecosystem"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-700 transition-colors"
            >
              <Package className="w-5 h-5" /> Full Ecosystem
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
