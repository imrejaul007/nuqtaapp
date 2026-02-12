'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Apple, ShoppingCart, Leaf, Package, Sparkles, Pill,
  Truck, Clock, DollarSign, Coins, TrendingUp, Users, Target,
  Rocket, CheckCircle, AlertTriangle, ArrowRight, Star, Zap,
  BarChart3, Award, Store, CreditCard, Gift, Crown, Wallet,
  ChevronDown, ChevronUp, Building2, ShieldCheck, Globe,
  Network, Smartphone, Timer, Search, Heart, Percent,
  BadgePercent, CircleDollarSign, PieChart, LineChart, ArrowUpRight,
  RefreshCw, Layers, MapPin, Shield, Calculator, Receipt,
  ClipboardList, Box, Repeat, Filter, Bell, Eye,
  Wheat, Coffee, Grape, Beef, Milk, Carrot, Briefcase
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── HERO STATS ───
const heroStats = [
  { label: 'Products Listed', value: '15,000+', color: 'text-green-400' },
  { label: 'Delivery SLA', value: '60 min', color: 'text-emerald-400' },
  { label: 'Avg Basket Size', value: '120 AED', color: 'text-blue-400' },
  { label: 'Nuqta Coins', value: '2X', color: 'text-[#c9a227]' },
  { label: 'Partner Stores', value: '200+', color: 'text-purple-400' },
  { label: 'UAE Grocery Market', value: '$12B+', color: 'text-cyan-400' },
];

// ─── GROCERY CATEGORIES ───
const groceryCategories = [
  {
    id: 'supermarket',
    name: 'Supermarket Staples',
    arabic: 'مستلزمات السوبرماركت',
    icon: ShoppingCart,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/40',
    gradient: 'from-blue-500 to-indigo-600',
    description: 'Everyday essentials from top supermarkets delivered to your door',
    items: ['Rice & Grains', 'Cooking Oil', 'Canned Goods', 'Snacks & Biscuits', 'Beverages', 'Cleaning Supplies', 'Personal Care', 'Dairy & Eggs'],
    partners: ['Carrefour', 'Lulu', 'Spinneys', 'Choithrams'],
    avgBasket: '95 AED',
    deliveryTime: '45-60 min',
  },
  {
    id: 'fresh',
    name: 'Fresh Produce',
    arabic: 'المنتجات الطازجة',
    icon: Apple,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/40',
    gradient: 'from-green-500 to-emerald-600',
    description: 'Farm-fresh fruits, vegetables, and herbs sourced from local and imported suppliers',
    items: ['Seasonal Fruits', 'Leafy Greens', 'Root Vegetables', 'Fresh Herbs', 'Exotic Fruits', 'Organic Produce', 'Salad Mixes', 'Mushrooms'],
    partners: ['Barakat', 'Fresh Express', 'Al Ain Farms', 'Local Farms'],
    avgBasket: '80 AED',
    deliveryTime: '30-45 min',
  },
  {
    id: 'organic',
    name: 'Organic & Health',
    arabic: 'عضوي وصحي',
    icon: Leaf,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/40',
    gradient: 'from-emerald-500 to-teal-600',
    description: 'Certified organic, gluten-free, vegan, and health-conscious products',
    items: ['Organic Fruits & Veg', 'Gluten-Free Products', 'Plant-Based Proteins', 'Superfoods', 'Organic Dairy', 'Sugar-Free Options', 'Keto Products', 'Health Supplements'],
    partners: ['Kibsons', 'Ripe Organic', 'Green Organic', 'Nature&apos;s Basket'],
    avgBasket: '150 AED',
    deliveryTime: '45-60 min',
  },
  {
    id: 'bulk',
    name: 'Bulk & Wholesale',
    arabic: 'بالجملة والتجزئة',
    icon: Package,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/40',
    gradient: 'from-orange-500 to-red-500',
    description: 'Large quantity orders for families, offices, and small businesses at wholesale prices',
    items: ['Family Packs', 'Office Supplies', 'Catering Quantities', 'Bulk Rice & Flour', 'Wholesale Beverages', 'Restaurant Essentials', 'Event Supplies', 'Storage Containers'],
    partners: ['Metro', 'Baqala+', 'WholeSale Club', 'BulkMart'],
    avgBasket: '250 AED',
    deliveryTime: '60-90 min',
  },
  {
    id: 'specialty',
    name: 'Specialty & Gourmet',
    arabic: 'أطعمة فاخرة ومتخصصة',
    icon: Sparkles,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/40',
    gradient: 'from-purple-500 to-violet-600',
    description: 'Premium imported goods, artisan products, and gourmet ingredients',
    items: ['Imported Cheeses', 'Premium Olive Oil', 'Artisan Bread', 'Fine Chocolates', 'Specialty Coffee', 'Japanese Snacks', 'Italian Pasta', 'Truffle Products'],
    partners: ['Waitrose', 'Dean & Deluca', 'Galeries Lafayette', 'Eataly'],
    avgBasket: '200 AED',
    deliveryTime: '45-60 min',
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy Basics',
    arabic: 'مستلزمات الصيدلية',
    icon: Pill,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/40',
    gradient: 'from-red-500 to-pink-600',
    description: 'OTC medicines, vitamins, baby care, and everyday health essentials',
    items: ['Pain Relief', 'Cold & Flu', 'Vitamins & Supplements', 'First Aid', 'Baby Care', 'Skin Care Basics', 'Oral Hygiene', 'Feminine Care'],
    partners: ['Bin Sina', 'Aster Pharmacy', 'Life Pharmacy', 'Boots'],
    avgBasket: '85 AED',
    deliveryTime: '30-45 min',
  },
];

// ─── HOW IT WORKS ───
const howItWorksSteps = [
  { step: 1, title: 'Browse & Add', description: 'Search 15,000+ products across 6 categories. Use smart lists, past orders, or browse by store.', icon: Search, color: 'bg-green-500' },
  { step: 2, title: 'Choose Delivery Slot', description: 'Select express (30 min), standard (60 min), or scheduled delivery at your preferred time.', icon: Clock, color: 'bg-blue-500' },
  { step: 3, title: 'Pay Your Way', description: 'NuqtaPay, Hawil Card, Qist BNPL for bulk orders, credit/debit cards, or cash on delivery.', icon: Wallet, color: 'bg-purple-500' },
  { step: 4, title: 'Track in Real-Time', description: 'Live GPS tracking from store pickup to your doorstep via Wasil delivery network.', icon: MapPin, color: 'bg-orange-500' },
  { step: 5, title: 'Receive & Rate', description: 'Inspect your order, rate the experience, and earn 2X Nuqta Coins on every purchase.', icon: Star, color: 'bg-[#c9a227]' },
];

// ─── PLATFORM FEATURES ───
const platformFeatures = [
  {
    id: 'smart-lists',
    name: 'Smart Lists',
    icon: ClipboardList,
    description: 'AI-powered shopping lists that learn your preferences. Auto-suggest based on purchase history, season, and household size.',
    details: ['Auto-populate weekly essentials', 'Share lists with family members', 'Voice-add items via Nuqta assistant', 'Recipe-to-cart integration'],
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    id: 'auto-reorder',
    name: 'Auto-Reorder',
    icon: Repeat,
    description: 'Set recurring orders for staples. Never run out of essentials with smart frequency detection.',
    details: ['Weekly, bi-weekly, or monthly cycles', 'Pause or skip anytime', 'Automatic price-match before ordering', 'Dynamic quantity adjustment'],
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    id: 'price-match',
    name: 'Price Match Guarantee',
    icon: BadgePercent,
    description: 'Grocify matches any lower price found on competing platforms within 24 hours of purchase.',
    details: ['Automatic price scanning across competitors', 'Instant refund of difference to NuqtaPay', 'Works on all Supermarket Staples', 'Price history graph per product'],
    color: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
  },
  {
    id: 'freshness',
    name: 'Freshness Guarantee',
    icon: ShieldCheck,
    description: '100% freshness guarantee on all produce. Full refund if quality does not meet standards.',
    details: ['Photo verification at pickup', 'Expiry date compliance check', 'Cold-chain maintained for perishables', 'Instant refund - no questions asked'],
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
  },
  {
    id: 'bundle-deals',
    name: 'Bundle & Save',
    icon: Gift,
    description: 'Curated product bundles at discounted prices. Weekly meal kits, party packs, and family boxes.',
    details: ['Ramadan special bundles', 'Weekly meal prep kits', 'Office snack boxes', 'Baby essentials bundles'],
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  {
    id: 'substitution',
    name: 'Smart Substitution',
    icon: RefreshCw,
    description: 'When items are out of stock, AI suggests best alternatives based on your preferences and dietary needs.',
    details: ['Respect dietary restrictions', 'Price-equivalent substitutions', 'One-tap approve or reject', 'Learn from past choices'],
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
  },
];

// ─── ECOSYSTEM INTEGRATIONS ───
const ecosystemIntegrations = [
  { product: 'NuqtaPay', icon: Wallet, color: 'text-green-400', integration: 'Primary payment method with instant checkout. Zero transaction fees for Grocify+ members.', benefit: 'Fastest checkout in UAE grocery' },
  { product: 'Qist BNPL', icon: CreditCard, color: 'text-violet-400', integration: 'Split bulk orders (250+ AED) into 3-6 monthly installments. Perfect for wholesale purchases.', benefit: 'Bulk orders now affordable' },
  { product: 'Nuqta Coins', icon: Coins, color: 'text-[#c9a227]', integration: '2X coin earning on every order. Use coins as partial payment. Weekly bonus coins on 3+ orders.', benefit: '2X rewards vs other platforms' },
  { product: 'Wasil Delivery', icon: Truck, color: 'text-orange-400', integration: 'Shared Wasil fleet handles all Grocify deliveries. Temperature-controlled vehicles for fresh produce.', benefit: 'Zero incremental fleet cost' },
  { product: 'Adzy Promotions', icon: Award, color: 'text-pink-400', integration: 'Brands promote products via Adzy. Sponsored placements, flash deals, and exclusive coupons.', benefit: 'Brands subsidize user discounts' },
  { product: 'Nuqta+', icon: Crown, color: 'text-purple-400', integration: 'Nuqta+ members get free delivery, priority slots, and exclusive Grocify+ benefits at no extra cost.', benefit: 'Premium experience included' },
  { product: 'Inventora', icon: Box, color: 'text-teal-400', integration: 'Partner stores use Inventora for real-time stock visibility. Reduces out-of-stock rate to <2%.', benefit: '98% item availability' },
  { product: 'BizOne Dashboard', icon: Store, color: 'text-blue-400', integration: 'Store partners manage Grocify orders alongside all Nuqta channels from a single dashboard.', benefit: 'Unified merchant experience' },
];

// ─── PRICING TIERS ───
const pricingTiers = [
  {
    name: 'Standard',
    price: 'Free',
    period: 'to join',
    deliveryFee: '10-15 AED',
    minOrder: '30 AED',
    features: ['Access to all 6 categories', 'Standard delivery (60 min)', '1X Nuqta Coins', 'Basic smart lists', 'Price match guarantee'],
    color: 'border-slate-500',
    bgColor: 'bg-slate-800/30',
    popular: false,
  },
  {
    name: 'Grocify+',
    price: '29',
    period: 'AED/month',
    deliveryFee: 'Free (orders 50+ AED)',
    minOrder: '0 AED',
    features: ['Free delivery on 50+ AED orders', 'Express delivery (30 min)', '2X Nuqta Coins', 'Priority time slots', 'Exclusive weekly deals', 'Auto-reorder with 5% extra discount', 'Smart substitution preferences'],
    color: 'border-green-500',
    bgColor: 'bg-green-500/10',
    popular: true,
  },
  {
    name: 'Nuqta+ (includes Grocify+)',
    price: '99',
    period: 'AED/month',
    deliveryFee: 'Free on all orders',
    minOrder: '0 AED',
    features: ['Everything in Grocify+', 'Free delivery on ALL orders', '3X Nuqta Coins', 'VIP customer support', 'Early access to new stores', 'Cross-ecosystem benefits', 'Qist 0% fees for 3 months'],
    color: 'border-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    popular: false,
  },
];

// ─── UNIT ECONOMICS ───
const unitEconomics = {
  avgBasket: 120,
  deliveryFee: 12,
  storeCommission: '12-18%',
  commissionAvg: 18,
  adRevenue: 3,
  subscriptionAlloc: 4,
  totalRevenue: 37,
  riderCost: 10,
  operatingCost: 5,
  promoSubsidy: 4,
  netMargin: 18,
  ltvCacRatio: '4.2:1',
  ltv12: 1440,
  cac: 35,
  paybackDays: 45,
};

// ─── REVENUE STREAMS ───
const revenueStreams = [
  { source: 'Delivery Fees', percentage: '35%', value: '10-15 AED/order', description: 'Per-order delivery charges. Free for Grocify+ on 50+ AED orders (offset by subscription).', icon: Truck },
  { source: 'Store Commission', percentage: '30%', value: '12-18%', description: 'Commission on order value from partner stores. Higher for specialty and organic categories.', icon: Store },
  { source: 'Grocify+ Subscription', percentage: '20%', value: '29 AED/month', description: 'Monthly subscription for premium delivery and exclusive discounts. High-margin recurring revenue.', icon: Crown },
  { source: 'Promoted Listings', percentage: '15%', value: 'CPM + CPC', description: 'Brands pay for featured placements, banner ads, and sponsored search results via Adzy integration.', icon: Eye },
];

// ─── MARKET DATA ───
const marketData = {
  totalMarket: '$12B+',
  onlineGrocery: '$1.8B',
  onlineGrowth: '28% YoY',
  penetration: '15%',
  avgOrdersPerUser: '3.2/week',
  segments: [
    { segment: 'Supermarket', share: '45%', value: '$5.4B', growth: '8%' },
    { segment: 'Fresh Produce', share: '25%', value: '$3B', growth: '12%' },
    { segment: 'Organic/Health', share: '12%', value: '$1.4B', growth: '22%' },
    { segment: 'Specialty', share: '10%', value: '$1.2B', growth: '15%' },
    { segment: 'Pharmacy OTC', share: '8%', value: '$960M', growth: '18%' },
  ],
};

// ─── COMPETITORS ───
const competitors = [
  {
    name: 'InstaShop (Delivery Hero)',
    marketShare: '35%',
    color: 'text-red-400',
    strengths: ['Market leader in UAE', 'Wide store network', 'Strong brand awareness', 'Fast delivery in urban areas'],
    weaknesses: ['High delivery fees', 'No loyalty/rewards ecosystem', 'No BNPL integration', 'Limited bulk ordering'],
    deliveryFee: '10-20 AED',
    commission: '15-20%',
  },
  {
    name: 'Carrefour NOW',
    marketShare: '25%',
    color: 'text-blue-400',
    strengths: ['Own inventory = consistent stock', 'Competitive pricing', 'Strong private label', 'Established supply chain'],
    weaknesses: ['Single-store model', 'Limited specialty/organic', 'No cross-platform rewards', 'Rigid delivery windows'],
    deliveryFee: '15-25 AED',
    commission: 'N/A (own stores)',
  },
  {
    name: 'Noon Minutes',
    marketShare: '15%',
    color: 'text-yellow-400',
    strengths: ['Ultra-fast delivery (15 min)', 'Dark store model', 'Strong tech platform', 'Noon ecosystem integration'],
    weaknesses: ['Limited SKU range (~3K)', 'Higher prices', 'No fresh produce quality', 'Small delivery radius'],
    deliveryFee: '5-10 AED',
    commission: 'N/A (own inventory)',
  },
];

// ─── COMPETITIVE ADVANTAGES ───
const competitiveAdvantages = [
  'Nuqta ecosystem: NuqtaPay, Coins, Qist BNPL, Nuqta+ all integrated',
  '2X Nuqta Coins earning vs 0 rewards on competitor platforms',
  'Qist BNPL for bulk orders - split 250+ AED into installments',
  'Wasil shared fleet: zero incremental delivery fleet cost',
  'Adzy brand promotions subsidize customer discounts',
  'Price match guarantee: lowest price or instant refund',
  'Smart lists + auto-reorder: highest retention and convenience',
  'Multi-store aggregation: one cart across 200+ stores',
  'Inventora integration: 98% item availability vs 85% industry avg',
  'Freshness guarantee with cold-chain verification',
];

// ─── TABS ───
const tabs = [
  { id: 'categories', label: 'Categories & Features', icon: Layers },
  { id: 'pricing', label: 'Pricing & Economics', icon: DollarSign },
  { id: 'market', label: 'Market & Competition', icon: TrendingUp },
  { id: 'deck', label: 'Pitch Deck', icon: Briefcase },
];

// ─── COMPONENT ───
export default function GrocifyPage() {
  const [activeTab, setActiveTab] = useState('categories');
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedCompetitor, setExpandedCompetitor] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">

      {/* ─── HERO SECTION ─── */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/10 to-[#0a1628]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-6">
            <Link href="/wasil" className="hover:text-green-400 transition-colors">Wasil</Link>
            <ArrowRight className="w-3 h-3" />
            <span className="text-green-400 font-medium">Grocify</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left: Brand Info */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20">
                  <Apple className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white">
                    Grocify <span className="text-green-400">غروسيفاي</span>
                  </h1>
                  <p className="text-green-400 text-sm sm:text-lg font-medium">Fresh. Fast. Rewarding.</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">
                UAE&apos;s niche <span className="text-green-400 font-medium">grocery delivery platform</span> under the <span className="text-orange-400 font-medium">Wasil</span> brand.
                Dedicated to supermarkets, fresh produce, organic, bulk/wholesale, specialty foods, and pharmacy essentials &mdash;
                powered by the <span className="text-[#c9a227] font-medium">Nuqta ecosystem</span>.
              </p>

              {/* Wasil Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/20 border border-orange-500/50 rounded-full">
                <Truck className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 text-xs sm:text-sm font-medium">A Wasil Delivery Vertical</span>
              </div>
            </div>

            {/* Right: Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {heroStats.map((stat, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center min-w-[110px]">
                  <div className={`text-lg sm:text-xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Banner */}
          <div className="mt-8 bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-4 sm:p-6 border border-green-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-green-400" />
                  <span className="text-lg font-bold text-white">The Grocify Promise</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white">
                  <span className="text-green-400">15,000+ products</span> delivered in <span className="text-emerald-400">60 minutes</span> with <span className="text-[#c9a227]">2X Nuqta Coins</span>
                </p>
              </div>
              <div className="flex gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">6</div>
                  <div className="text-xs text-slate-400">Categories</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">200+</div>
                  <div className="text-xs text-slate-400">Stores</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── TAB NAVIGATION ─── */}
      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-2 gap-1 sm:gap-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-green-500 text-white'
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

      {/* ─── MAIN CONTENT ─── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ═══ TAB: CATEGORIES & FEATURES ═══ */}
        {activeTab === 'categories' && (
          <div className="space-y-8">

            {/* Grocery Categories */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                6 Grocery Categories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {groceryCategories.map((cat) => (
                  <div key={cat.id} className={`bg-slate-800/30 rounded-xl border ${cat.borderColor} overflow-hidden`}>
                    <button
                      onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                      className="w-full p-4 sm:p-5 flex items-start gap-3 text-left"
                    >
                      <div className={`w-12 h-12 rounded-xl ${cat.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <cat.icon className={`w-6 h-6 ${cat.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-white font-bold text-sm sm:text-base">{cat.name}</h3>
                            <span className={`text-xs ${cat.color}`}>{cat.arabic}</span>
                          </div>
                          {expandedCategory === cat.id ? (
                            <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-slate-400 text-xs sm:text-sm mt-1">{cat.description}</p>
                      </div>
                    </button>
                    {expandedCategory === cat.id && (
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-slate-700/50 pt-3">
                        <div className="grid grid-cols-2 gap-1.5 mb-4">
                          {cat.items.map((item, j) => (
                            <div key={j} className="flex items-center gap-1.5 text-xs text-slate-300">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              {item}
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs">
                          <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded-full">Avg: {cat.avgBasket}</span>
                          <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full">{cat.deliveryTime}</span>
                        </div>
                        <div className="mt-3">
                          <span className="text-[10px] text-slate-500 font-bold">PARTNER STORES:</span>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {cat.partners.map((p, j) => (
                              <span key={j} className="text-[10px] px-2 py-0.5 bg-slate-700/50 text-slate-300 rounded-full">{p}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-green-400" />
                How Grocify Works
              </h2>
              <div className="space-y-4">
                {howItWorksSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${step.color} flex items-center justify-center flex-shrink-0`}>
                      <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-slate-500 text-xs font-bold">STEP {step.step}</span>
                        {i < howItWorksSteps.length - 1 && <ArrowRight className="w-3 h-3 text-slate-600" />}
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base mb-1">{step.title}</h4>
                      <p className="text-slate-400 text-xs sm:text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Features */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                Platform Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {platformFeatures.map((feat) => (
                  <div key={feat.id} className={`bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden`}>
                    <button
                      onClick={() => setExpandedFeature(expandedFeature === feat.id ? null : feat.id)}
                      className="w-full p-4 text-left"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-lg ${feat.bgColor} flex items-center justify-center`}>
                          <feat.icon className={`w-5 h-5 ${feat.color}`} />
                        </div>
                        <div className="flex-1 flex items-center justify-between">
                          <h4 className="text-white font-bold text-sm">{feat.name}</h4>
                          {expandedFeature === feat.id ? (
                            <ChevronUp className="w-4 h-4 text-slate-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                          )}
                        </div>
                      </div>
                      <p className="text-slate-400 text-xs">{feat.description}</p>
                    </button>
                    {expandedFeature === feat.id && (
                      <div className="px-4 pb-4 border-t border-slate-700/50 pt-3">
                        <div className="space-y-1.5">
                          {feat.details.map((d, j) => (
                            <div key={j} className="flex items-center gap-1.5 text-xs text-slate-300">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              {d}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Ecosystem Integrations */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-amber-500/5 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Network className="w-5 h-5 text-[#c9a227]" />
                Nuqta Ecosystem Integration
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {ecosystemIntegrations.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-3">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <h4 className={`font-bold text-sm ${item.color}`}>{item.product}</h4>
                    </div>
                    <p className="text-xs text-slate-300 mb-2">{item.integration}</p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-green-400">
                      <CheckCircle className="w-3 h-3 flex-shrink-0" />
                      {item.benefit}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">Payment Methods</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { method: 'NuqtaPay Wallet', desc: 'Instant, zero fees', icon: Wallet },
                  { method: 'Hawil Card', desc: 'Google rate for tourists', icon: CreditCard },
                  { method: 'Qist BNPL', desc: 'Split bulk orders', icon: Receipt },
                  { method: 'Cash on Delivery', desc: 'Pay at doorstep', icon: DollarSign },
                ].map((pm, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50 text-center">
                    <pm.icon className="w-6 h-6 text-[#c9a227] mx-auto mb-2" />
                    <div className="text-white font-medium text-xs sm:text-sm">{pm.method}</div>
                    <div className="text-slate-400 text-[10px]">{pm.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══ TAB: PRICING & ECONOMICS ═══ */}
        {activeTab === 'pricing' && (
          <div className="space-y-8">

            {/* Subscription Tiers */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                Pricing Tiers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {pricingTiers.map((tier, i) => (
                  <div key={i} className={`rounded-xl p-4 sm:p-6 border-2 ${tier.color} ${tier.bgColor} relative`}>
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-500 text-white text-[10px] sm:text-xs font-bold rounded-full whitespace-nowrap">
                        BEST VALUE
                      </div>
                    )}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 mt-1">{tier.name}</h3>
                    <div className="mb-2">
                      <span className="text-2xl sm:text-3xl font-black text-green-400">
                        {tier.price === 'Free' ? 'Free' : `${tier.price}`}
                      </span>
                      <span className="text-slate-400 text-xs sm:text-sm ml-1">{tier.period}</span>
                    </div>
                    <div className="mb-4 space-y-1">
                      <div className="text-xs text-slate-400">Delivery: <span className="text-green-400 font-medium">{tier.deliveryFee}</span></div>
                      <div className="text-xs text-slate-400">Min Order: <span className="text-white font-medium">{tier.minOrder}</span></div>
                    </div>
                    <div className="space-y-2">
                      {tier.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unit Economics */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-green-400" />
                Unit Economics (Per Order: {unitEconomics.avgBasket} AED avg basket)
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <div className="bg-green-500/10 rounded-xl p-3 sm:p-4 text-center border border-green-500/30">
                  <div className="text-lg sm:text-2xl font-bold text-green-400">{unitEconomics.avgBasket} AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Avg Basket</div>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-3 sm:p-4 text-center border border-blue-500/30">
                  <div className="text-lg sm:text-2xl font-bold text-blue-400">{unitEconomics.totalRevenue} AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Gross Revenue/Order</div>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-3 sm:p-4 text-center border border-purple-500/30">
                  <div className="text-lg sm:text-2xl font-bold text-purple-400">{unitEconomics.riderCost + unitEconomics.operatingCost + unitEconomics.promoSubsidy} AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Total Costs/Order</div>
                </div>
                <div className="bg-[#c9a227]/10 rounded-xl p-3 sm:p-4 text-center border border-[#c9a227]/30">
                  <div className="text-lg sm:text-2xl font-bold text-[#c9a227]">{unitEconomics.netMargin} AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Net Margin/Order</div>
                </div>
              </div>

              {/* Revenue Waterfall */}
              <div className="bg-slate-900/50 rounded-xl p-4 mb-6">
                <h4 className="text-white font-bold text-sm mb-3">Revenue Waterfall (120 AED basket)</h4>
                <div className="space-y-2">
                  {[
                    { label: 'Store Commission (15%)', value: '18.00 AED', color: 'bg-green-500', width: '49%' },
                    { label: 'Delivery Fee', value: '12.00 AED', color: 'bg-blue-500', width: '32%' },
                    { label: 'Ad Revenue (Adzy)', value: '3.00 AED', color: 'bg-purple-500', width: '8%' },
                    { label: 'Subscription Allocation', value: '4.00 AED', color: 'bg-[#c9a227]', width: '11%' },
                    { label: 'Rider Cost', value: '-10.00 AED', color: 'bg-red-500', width: '27%' },
                    { label: 'Operating Cost', value: '-5.00 AED', color: 'bg-orange-500', width: '14%' },
                    { label: 'Promo Subsidy', value: '-4.00 AED', color: 'bg-pink-500', width: '11%' },
                    { label: 'Net Margin', value: '18.00 AED', color: 'bg-emerald-500', width: '49%' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-40 text-slate-400 text-xs">{item.label}</div>
                      <div className="flex-1 bg-slate-700/50 rounded-full h-4 relative">
                        <div className={`${item.color} h-4 rounded-full`} style={{ width: item.width }} />
                      </div>
                      <div className="w-24 text-right text-white text-xs font-medium">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* LTV Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-white">{unitEconomics.ltvCacRatio}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">LTV:CAC Ratio</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-white">{unitEconomics.ltv12} AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">User LTV (12mo)</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-white">{unitEconomics.cac} AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">CAC</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-white">{unitEconomics.paybackDays} days</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">CAC Payback</div>
                </div>
              </div>
            </div>

            {/* Revenue Streams */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-400" />
                Revenue Streams
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {revenueStreams.map((rs, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                        <rs.icon className="w-5 h-5 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-white font-bold text-sm">{rs.source}</h4>
                          <span className="text-green-400 text-xs font-bold">{rs.percentage}</span>
                        </div>
                        <span className="text-[#c9a227] text-xs font-medium">{rs.value}</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-xs">{rs.description}</p>
                  </div>
                ))}
              </div>

              {/* Revenue Split Visual */}
              <div className="mt-6 bg-slate-900/50 rounded-xl p-4">
                <h4 className="text-white font-bold text-sm mb-3">Revenue Mix</h4>
                <div className="flex rounded-lg overflow-hidden h-8">
                  <div className="bg-blue-500 flex items-center justify-center" style={{ width: '35%' }}>
                    <span className="text-white text-[10px] font-bold">Delivery 35%</span>
                  </div>
                  <div className="bg-green-500 flex items-center justify-center" style={{ width: '30%' }}>
                    <span className="text-white text-[10px] font-bold">Commission 30%</span>
                  </div>
                  <div className="bg-purple-500 flex items-center justify-center" style={{ width: '20%' }}>
                    <span className="text-white text-[10px] font-bold">Subs 20%</span>
                  </div>
                  <div className="bg-[#c9a227] flex items-center justify-center" style={{ width: '15%' }}>
                    <span className="text-[#0a1628] text-[10px] font-bold">Ads 15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══ TAB: MARKET & COMPETITION ═══ */}
        {activeTab === 'market' && (
          <div className="space-y-8">

            {/* Market Overview */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-green-400" />
                UAE Grocery Market: {marketData.totalMarket}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="bg-green-500/10 rounded-xl p-3 text-center border border-green-500/30">
                  <div className="text-xl sm:text-2xl font-bold text-green-400">{marketData.totalMarket}</div>
                  <div className="text-xs text-slate-400">Total Market</div>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-3 text-center border border-blue-500/30">
                  <div className="text-xl sm:text-2xl font-bold text-blue-400">{marketData.onlineGrocery}</div>
                  <div className="text-xs text-slate-400">Online Grocery</div>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-3 text-center border border-purple-500/30">
                  <div className="text-xl sm:text-2xl font-bold text-purple-400">{marketData.onlineGrowth}</div>
                  <div className="text-xs text-slate-400">Online Growth</div>
                </div>
                <div className="bg-[#c9a227]/10 rounded-xl p-3 text-center border border-[#c9a227]/30">
                  <div className="text-xl sm:text-2xl font-bold text-[#c9a227]">{marketData.penetration}</div>
                  <div className="text-xs text-slate-400">Online Penetration</div>
                </div>
              </div>

              {/* Market Segments */}
              <h3 className="text-white font-bold text-sm mb-3">Market Segments</h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[400px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-3 text-slate-400 text-xs">Segment</th>
                      <th className="text-center py-2 px-3 text-slate-400 text-xs">Market Share</th>
                      <th className="text-center py-2 px-3 text-slate-400 text-xs">Value</th>
                      <th className="text-center py-2 px-3 text-slate-400 text-xs">Growth</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marketData.segments.map((seg, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-2 px-3 text-white text-sm font-medium">{seg.segment}</td>
                        <td className="py-2 px-3 text-center text-green-400 font-bold text-sm">{seg.share}</td>
                        <td className="py-2 px-3 text-center text-blue-400 text-sm">{seg.value}</td>
                        <td className="py-2 px-3 text-center">
                          <span className="text-emerald-400 text-sm font-medium flex items-center justify-center gap-1">
                            <ArrowUpRight className="w-3 h-3" />
                            {seg.growth}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Market Drivers */}
              <div className="mt-6 space-y-2">
                <h3 className="text-white font-bold text-sm mb-3">Key Market Drivers</h3>
                {[
                  'UAE population growth: 10M+ residents, 85% expatriates with diverse grocery needs',
                  'Post-COVID behavior shift: online grocery adoption permanently increased',
                  'High smartphone penetration (98%) and digital payment adoption',
                  'Urbanization: 85% of population in dense metro areas ideal for delivery',
                  'Premium consumer market: high disposable income drives organic and specialty demand',
                ].map((driver, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {driver}
                  </div>
                ))}
              </div>
            </div>

            {/* Competitors */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                Competitive Landscape
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {competitors.map((comp, i) => (
                  <div key={i} className="bg-slate-800/30 rounded-xl p-4 sm:p-5 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className={`text-base font-bold ${comp.color}`}>{comp.name}</h3>
                      <span className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded-full">{comp.marketShare}</span>
                    </div>
                    <div className="flex gap-3 text-xs mb-3">
                      <span className="text-slate-400">Delivery: <span className="text-white font-medium">{comp.deliveryFee}</span></span>
                      <span className="text-slate-400">Commission: <span className="text-white font-medium">{comp.commission}</span></span>
                    </div>
                    <button
                      onClick={() => setExpandedCompetitor(expandedCompetitor === comp.name ? null : comp.name)}
                      className="text-green-400 text-xs flex items-center gap-1 mb-3"
                    >
                      {expandedCompetitor === comp.name ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      Details
                    </button>
                    {expandedCompetitor === comp.name && (
                      <div className="space-y-3">
                        <div>
                          <span className="text-green-400 text-[10px] font-bold">STRENGTHS</span>
                          <div className="space-y-1 mt-1">
                            {comp.strengths.map((s, j) => (
                              <div key={j} className="text-slate-300 text-xs flex items-center gap-1">
                                <CheckCircle className="w-3 h-3 text-green-400" /> {s}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-red-400 text-[10px] font-bold">WEAKNESSES</span>
                          <div className="space-y-1 mt-1">
                            {comp.weaknesses.map((w, j) => (
                              <div key={j} className="text-slate-300 text-xs flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3 text-red-400" /> {w}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Competitive Advantages */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-4 sm:p-6 border border-green-500/30">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-green-400" />
                Grocify&apos;s Competitive Advantage
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {competitiveAdvantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {adv}
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">Feature Comparison</h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 text-sm">Feature</th>
                      <th className="text-center py-3 px-4 text-green-400 text-sm">Grocify</th>
                      <th className="text-center py-3 px-4 text-slate-400 text-sm">InstaShop</th>
                      <th className="text-center py-3 px-4 text-slate-400 text-sm">Carrefour NOW</th>
                      <th className="text-center py-3 px-4 text-slate-400 text-sm">Noon Min</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Products', grocify: '15,000+', instashop: '10,000+', carrefour: '8,000+', noon: '3,000' },
                      { feature: 'Delivery Time', grocify: '30-60 min', instashop: '45-90 min', carrefour: '60-120 min', noon: '15-30 min' },
                      { feature: 'Loyalty Rewards', grocify: '2X Coins', instashop: 'None', carrefour: 'Basic Points', noon: 'Noon Credits' },
                      { feature: 'BNPL (Bulk)', grocify: 'Qist BNPL', instashop: 'No', carrefour: 'No', noon: 'No' },
                      { feature: 'Price Match', grocify: 'Yes', instashop: 'No', carrefour: 'Limited', noon: 'No' },
                      { feature: 'Multi-Store Cart', grocify: 'Yes', instashop: 'Yes', carrefour: 'No', noon: 'No' },
                      { feature: 'Auto-Reorder', grocify: 'Smart AI', instashop: 'Basic', carrefour: 'No', noon: 'No' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white text-sm">{row.feature}</td>
                        <td className="py-3 px-4 text-center">
                          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded font-bold text-xs">{row.grocify}</span>
                        </td>
                        <td className="py-3 px-4 text-center text-slate-400 text-xs">{row.instashop}</td>
                        <td className="py-3 px-4 text-center text-slate-400 text-xs">{row.carrefour}</td>
                        <td className="py-3 px-4 text-center text-slate-400 text-xs">{row.noon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-2xl p-6 sm:p-8 border border-green-500/30">
              <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2"><Briefcase className="w-6 h-6 text-green-400" /> Investment Thesis</h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Families order groceries 3-4x/week — each order earning Nuqta Coins, building Qist credit history, and feeding Inventora supply chain data. With Wasil fleet and $12B TAM, Grocify alone is a unicorn candidate. The highest-frequency consumer spend category with full ecosystem integration.
              </p>
            </div>

            {/* Market Opportunity */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Market Opportunity</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'TAM — GCC Grocery Market', value: '$12B+', color: 'text-green-400', border: 'border-green-500/40' },
                  { label: 'SAM — UAE Online Grocery', value: '$1.8B', color: 'text-emerald-400', border: 'border-emerald-500/40' },
                  { label: 'Growth Rate YoY', value: '28%', color: 'text-[#c9a227]', border: 'border-[#c9a227]/40' },
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
                  { title: 'Price Match Guarantee', desc: 'Auto-scans competitors and refunds the difference. Trust built into every transaction.', icon: BadgePercent, color: 'text-[#c9a227]' },
                  { title: '100% Freshness Guarantee', desc: 'Photo verification at pickup, cold-chain compliance, instant refund if quality fails.', icon: ShieldCheck, color: 'text-emerald-400' },
                  { title: 'AI Smart Lists & Auto-Reorder', desc: 'AI learns your preferences and auto-suggests weekly essentials.', icon: ClipboardList, color: 'text-green-400' },
                  { title: 'Qist BNPL for Bulk Orders', desc: 'Split 250+ AED orders into 3-6 monthly installments. No competitor offers this.', icon: CreditCard, color: 'text-violet-400' },
                  { title: 'Wasil Shared Fleet', desc: 'Zero fleet ownership cost. Temperature-controlled vehicles for fresh produce.', icon: Truck, color: 'text-orange-400' },
                  { title: '2X Nuqta Coins on Every Order', desc: 'Real currency spendable at 500+ merchants, not siloed grocery points.', icon: Coins, color: 'text-[#c9a227]' },
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
                    <th className="px-4 py-3 text-left">Year</th><th className="px-4 py-3 text-right">Users</th><th className="px-4 py-3 text-right">Orders/mo</th><th className="px-4 py-3 text-right">Revenue</th><th className="px-4 py-3 text-right">Net Profit</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { year: 'Year 1', users: '30K', orders: '150K/mo', revenue: '20M AED', profit: '5M AED' },
                      { year: 'Year 2', users: '120K', orders: '600K/mo', revenue: '80M AED', profit: '28M AED' },
                      { year: 'Year 3', users: '350K', orders: '1.8M/mo', revenue: '200M AED', profit: '80M AED' },
                    ].map((r, i) => (
                      <tr key={i} className="border-t border-slate-700/50 text-slate-300">
                        <td className="px-4 py-3 font-bold text-green-400">{r.year}</td><td className="px-4 py-3 text-right">{r.users}</td><td className="px-4 py-3 text-right">{r.orders}</td><td className="px-4 py-3 text-right font-semibold text-emerald-400">{r.revenue}</td><td className="px-4 py-3 text-right font-bold text-white">{r.profit}</td>
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
                  { name: 'InstaShop', val: '$360M', note: 'Acquired by Delivery Hero (2020)' },
                  { name: 'Instacart', val: '$39B', note: 'IPO valuation (2023)' },
                  { name: 'Getir', val: '$11.8B', note: 'Peak valuation (2022)' },
                  { name: 'Gorillas', val: '$3B', note: 'Acquired valuation (2022)' },
                ].map((c, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
                    <div className="text-lg font-bold text-white">{c.name}</div>
                    <div className="text-2xl font-black text-green-400">{c.val}</div>
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
                  { milestone: '30K users', timeline: 'Year 1', revenue: '~20M AED', valuation: '~$50M' },
                  { milestone: '120K users', timeline: 'Year 2', revenue: '~80M AED', valuation: '~$200M' },
                  { milestone: '350K users', timeline: 'Year 3', revenue: '~200M AED', valuation: '~$600M' },
                  { milestone: '1M+ users (GCC)', timeline: '2029+', revenue: '~500M AED', valuation: '~$1B+' },
                ].map((m, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
                    <div className="text-xs text-slate-400">{m.timeline}</div>
                    <div className="text-lg font-bold text-green-400 mt-1">{m.valuation}</div>
                    <div className="text-xs text-slate-500">{m.revenue}</div>
                    <div className="text-xs text-slate-400 mt-1">{m.milestone}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RTMN Ecosystem Multiplier */}
            <div className="bg-slate-800/40 rounded-2xl p-6 border border-green-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><ArrowUpRight className="w-6 h-6 text-green-400" /> RTMN Ecosystem Multiplier</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { factor: 'Zero Fleet Cost (Wasil)', detail: 'Wasil shared delivery fleet — no need to build or own a delivery network.' },
                  { factor: 'Auto-Restock via Inventora', detail: 'Partner stores get AI-driven inventory alerts — Grocify demand data feeds restock predictions.' },
                  { factor: 'Built-in Payments (NuqtaPay)', detail: 'Instant checkout with zero fees for premium members. No third-party payment dependency.' },
                  { factor: 'Bulk BNPL (Qist)', detail: 'Families and businesses split large grocery bills into installments — unique to RTMN.' },
                  { factor: 'Supplier Marketplace (NextaBizz)', detail: 'Grocery suppliers list and sell on NextaBizz B2B, feeding Grocify inventory at wholesale rates.' },
                ].map((f, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <h3 className="text-green-400 font-bold text-sm mb-1">{f.factor}</h3>
                    <p className="text-slate-400 text-xs">{f.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>

      {/* ─── NAVIGATION FOOTER ─── */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/wasil" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-colors">
              <Truck className="w-5 h-5" /> Wasil Platform
            </Link>
            <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Globe className="w-5 h-5" /> Nuqta Ecosystem
            </Link>
            <Link href="/nuqta" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Coins className="w-5 h-5" /> Nuqta Super App
            </Link>
            <Link href="/nuqtapay" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Wallet className="w-5 h-5" /> NuqtaPay
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
