'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Crown, Wallet, Home, Truck, ArrowLeftRight, Gamepad2, Network,
  Users, Store, Building2, Plane, Briefcase, TrendingUp, Target,
  Zap, CheckCircle, ArrowRight, Star, Gift, Shield, Globe,
  CreditCard, Coins, Send, ShoppingBag, ChevronRight, BarChart3,
  Heart, Clock, Smartphone, BadgePercent, MapPin, Rocket,
  LineChart, PieChart, Calculator, Award, Handshake, Eye,
  Lock, UserCheck, RefreshCw, Layers, CircleDollarSign,
  Banknote, Receipt, Timer, Phone, Mail, Car, Stethoscope,
  GraduationCap, Palmtree, Wifi, Package, Sparkles, Brain,
  AlertTriangle, Lightbulb, ChevronDown, ChevronUp
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';
import {
  NuqtaPlusLogo, QistLogo, SakinLogo, WasilLogo,
  HawilLogo, RakabLogo, GamificationLogo, NuqtaMainLogo, EcosystemLogo
} from '@/components/CompanyLogos';

// Core Products
const coreProducts = [
  {
    name: 'Nuqta+',
    arabic: 'نقطة+',
    tagline: 'Earn',
    description: 'Membership & rewards platform. Earn coins at 500+ merchants.',
    color: 'from-[#c9a227] to-amber-600',
    textColor: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]',
    icon: Crown,
    logo: NuqtaPlusLogo,
    href: '/nuqta-plus',
    stats: { merchants: '500+', members: '50K target', price: '99 AED/mo' },
    features: ['Earn coins on every purchase', 'Exclusive merchant deals', 'Priority support', 'Access to all products'],
    revenue: 'Subscription + merchant commission',
  },
  {
    name: 'Qist',
    arabic: 'قسط',
    tagline: 'Pay',
    description: 'Buy Now Pay Later. Split payments over 3-12 months with 0% fees.',
    color: 'from-violet-500 to-purple-600',
    textColor: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500',
    icon: Wallet,
    logo: QistLogo,
    href: '/qist',
    stats: { limit: '50K AED', terms: '3-12 months', approval: 'Instant' },
    features: ['0% fees for Nuqta+ members', 'Instant approval', 'Works at all partners', 'Build credit score'],
    revenue: '3-5% platform fee from merchants',
  },
  {
    name: 'Sakin',
    arabic: 'ساكن',
    tagline: 'Live',
    description: 'Rent financing. Cover security deposit + first rent over 12 months.',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500',
    icon: Home,
    logo: SakinLogo,
    href: '/sakin',
    stats: { amount: '68K AED', term: '12 months', fee: '3%' },
    features: ['Finance deposit + rent', 'Direct landlord payment', 'No credit history needed', 'Wasil welcome kit included'],
    revenue: '3% financing fee',
  },
  {
    name: 'Wasil',
    arabic: 'واصل',
    tagline: 'Get',
    description: 'Quick commerce. 60-minute delivery across 12 categories.',
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500',
    icon: Truck,
    logo: WasilLogo,
    href: '/wasil',
    stats: { delivery: '60 min', categories: '12', coverage: 'UAE-wide' },
    features: ['Groceries, pharmacy, F&B', 'Nuqta wallet integrated', 'Qist BNPL for big orders', 'Wasil+ in Nuqta+ membership'],
    revenue: 'Delivery fees + merchant commission',
  },
  {
    name: 'Hawil',
    arabic: 'حوّل',
    tagline: 'Send',
    description: 'Remittance & currency exchange at Google rate with 0% markup.',
    color: 'from-blue-500 to-cyan-500',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
    icon: ArrowLeftRight,
    logo: HawilLogo,
    href: '/hawil',
    stats: { rate: 'Google Rate', fee: '0.5%', corridors: '8+' },
    features: ['0% FX markup', 'Hawil Card for tourists', 'Instant transfers', 'Earn coins on every send'],
    revenue: '0.5% transfer fee',
  },
  {
    name: 'Gamification',
    arabic: 'ألعاب',
    tagline: 'Play',
    description: 'Earn coins, level up, compete on leaderboards across all products.',
    color: 'from-pink-500 to-rose-500',
    textColor: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500',
    icon: Gamepad2,
    logo: GamificationLogo,
    href: '/gamification',
    stats: { levels: '10', badges: '50+', rewards: 'Unlimited' },
    features: ['Cross-product achievements', 'Referral bonuses', 'Daily challenges', 'Exclusive rewards'],
    revenue: 'Drives engagement → higher LTV',
  },
];

// User Segments
const userSegments = [
  {
    segment: 'UAE Residents',
    icon: Home,
    population: '9M+',
    acquisition: 'Merchant partnerships, corporate deals',
    journey: ['Nuqta+ membership', 'Qist for purchases', 'Sakin for rent', 'Hawil to send money home'],
    ltv: '2,500 AED/year',
    color: 'text-emerald-400',
  },
  {
    segment: 'Tourists',
    icon: Plane,
    population: '21M/year',
    acquisition: 'Hawil Card at airport, Google rate marketing',
    journey: ['Hawil Card', 'Nuqta merchant deals', 'Wasil delivery', 'Qist for big purchases'],
    ltv: '500 AED/visit',
    color: 'text-blue-400',
  },
  {
    segment: 'Corporates',
    icon: Building2,
    population: '50K+ companies',
    acquisition: 'B2B sales, HR partnerships',
    journey: ['Bulk Nuqta+ for employees', 'Corporate Qist limits', 'Sakin for relocations', 'Hawil for payroll'],
    ltv: '50,000 AED/year',
    color: 'text-purple-400',
  },
  {
    segment: 'Merchants',
    icon: Store,
    population: '500+ partners',
    acquisition: 'Direct sales, referrals',
    journey: ['Accept Nuqta payments', 'Hawil recharge partner', 'Wasil delivery partner', 'Qist merchant'],
    ltv: '10,000 AED/year',
    color: 'text-[#c9a227]',
  },
];

// Cross-Product Synergies
const synergies = [
  {
    from: 'Nuqta+',
    to: 'Qist',
    synergy: '0% fees for members',
    icon: Wallet,
  },
  {
    from: 'Nuqta+',
    to: 'Wasil',
    synergy: 'Wasil+ included free',
    icon: Truck,
  },
  {
    from: 'Sakin',
    to: 'Wasil',
    synergy: 'Move-in essentials kit',
    icon: Package,
  },
  {
    from: 'Hawil',
    to: 'Merchants',
    synergy: 'Recharge point commission',
    icon: Store,
  },
  {
    from: 'Qist',
    to: 'Sakin',
    synergy: 'Credit score boost',
    icon: TrendingUp,
  },
  {
    from: 'Hawil Card',
    to: 'All Products',
    synergy: 'Tourist ecosystem entry',
    icon: CreditCard,
  },
];

// User Journeys
const userJourneys = [
  {
    persona: 'Raj - Expat from India',
    icon: Briefcase,
    color: 'border-emerald-500',
    bgColor: 'bg-emerald-500/10',
    steps: [
      { product: 'Nuqta+', action: 'Gets membership via employer', savings: '500 AED/year in deals' },
      { product: 'Sakin', action: 'Finances 68K apartment move-in', savings: 'Avoids 68K upfront' },
      { product: 'Wasil', action: 'Orders furniture & groceries', savings: 'Free delivery as Nuqta+' },
      { product: 'Qist', action: 'Buys electronics on BNPL', savings: '0% fees' },
      { product: 'Hawil', action: 'Sends 5K/month to family in Mumbai', savings: '3,600 AED/year vs banks' },
    ],
    totalSavings: '15,000+ AED/year',
  },
  {
    persona: 'Sarah - Tourist from UK',
    icon: Plane,
    color: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
    steps: [
      { product: 'Hawil Card', action: 'Gets card at DXB airport', savings: 'Google rate (0% markup)' },
      { product: 'Nuqta', action: 'Discovers 500+ partner deals', savings: '10-30% at merchants' },
      { product: 'Wasil', action: 'Orders room service alternatives', savings: '50% vs hotel prices' },
      { product: 'Qist', action: 'Buys gold jewelry on BNPL', savings: 'Pay after returning home' },
      { product: 'Hawil', action: 'Converts remaining AED at exit', savings: 'Google rate again' },
    ],
    totalSavings: '500+ AED on 5-day trip',
  },
  {
    persona: 'TechCorp - 200 Employees',
    icon: Building2,
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
    steps: [
      { product: 'Nuqta+', action: 'Bulk membership for all staff', savings: 'Negotiated rate' },
      { product: 'Sakin', action: 'Relocation package for new hires', savings: 'Talent attraction' },
      { product: 'Qist', action: 'Corporate credit limits', savings: 'Employee benefit' },
      { product: 'Hawil', action: 'Payroll for overseas contractors', savings: 'Best rates in market' },
      { product: 'Gamification', action: 'Team challenges & rewards', savings: 'Employee engagement' },
    ],
    totalSavings: 'Reduced churn + happier employees',
  },
];

// Future Products
const futureProducts = [
  {
    name: "Jame'",
    arabic: 'جامع',
    tagline: 'Save & Invest',
    description: 'Savings accounts, gold investment, mutual funds',
    icon: PieChart,
    status: 'Planned 2027',
    color: 'text-amber-400',
  },
  {
    name: 'Safar',
    arabic: 'سفر',
    tagline: 'Travel',
    description: 'Flights, hotels, experiences booked with coins',
    icon: Palmtree,
    status: 'Planned 2027',
    color: 'text-cyan-400',
  },
  {
    name: "Ta'meen",
    arabic: 'تأمين',
    tagline: 'Insure',
    description: 'Health, car, travel insurance',
    icon: Shield,
    status: 'Planned 2028',
    color: 'text-red-400',
  },
  {
    name: 'Rakab',
    arabic: 'ركب',
    tagline: 'Ride',
    description: 'Ride-hailing with Nuqta coins',
    icon: Car,
    status: 'Planned 2028',
    color: 'text-green-400',
  },
  {
    name: 'Seha',
    arabic: 'صحة',
    tagline: 'Health',
    description: 'Telemedicine, pharmacy, wellness',
    icon: Stethoscope,
    status: 'Planned 2028',
    color: 'text-pink-400',
  },
  {
    name: "Ta'leem",
    arabic: 'تعليم',
    tagline: 'Learn',
    description: 'Education financing, school fees BNPL',
    icon: GraduationCap,
    status: 'Planned 2028',
    color: 'text-indigo-400',
  },
];

// Competitive Advantages
const competitiveAdvantages = [
  {
    advantage: 'Full Ecosystem',
    description: 'No competitor offers rewards + BNPL + rent + delivery + remittance + tourist card',
    competitors: 'Tabby, Tamara = BNPL only. Wise = remittance only.',
    icon: Layers,
  },
  {
    advantage: 'Google Rate',
    description: 'Only remittance with 0% FX markup in UAE',
    competitors: 'Banks = 3-5% markup. Exchange houses = 2-4%.',
    icon: BadgePercent,
  },
  {
    advantage: 'Single Wallet',
    description: 'Nuqta coins work across all products and 500+ merchants',
    competitors: 'Others have separate wallets, no interoperability.',
    icon: Wallet,
  },
  {
    advantage: 'Tourist Acquisition',
    description: 'Hawil Card creates instant ecosystem users from 21M tourists',
    competitors: 'No competitor targets tourists with prepaid + rewards.',
    icon: Plane,
  },
  {
    advantage: 'Corporate Channel',
    description: 'B2B acquisition lowers CAC to near-zero',
    competitors: 'Others rely on expensive consumer marketing.',
    icon: Building2,
  },
  {
    advantage: 'Merchant Network Effect',
    description: '500+ merchants as distribution + Hawil recharge points',
    competitors: 'Others treat merchants as just payment endpoints.',
    icon: Store,
  },
];

// Financial Overview
const financialOverview = {
  year3Targets: {
    revenue: '150M AED',
    users: '500K',
    merchants: '2,000+',
    transactions: '10M+',
  },
  revenueBreakdown: [
    { product: 'Nuqta+', percentage: 25, revenue: '37.5M', source: 'Subscriptions' },
    { product: 'Qist', percentage: 30, revenue: '45M', source: 'Platform fees' },
    { product: 'Sakin', percentage: 15, revenue: '22.5M', source: 'Financing fees' },
    { product: 'Wasil', percentage: 15, revenue: '22.5M', source: 'Delivery + commission' },
    { product: 'Hawil', percentage: 15, revenue: '22.5M', source: 'Transfer fees' },
  ],
  unitEconomics: {
    cac: '50 AED',
    ltv: '2,500 AED',
    ltvCacRatio: '50x',
    paybackPeriod: '2 months',
  },
};

// Improvements Roadmap
const improvements = [
  {
    category: 'Hawil Card Enhancements',
    items: [
      'Virtual card instant issuance',
      'Apple Pay / Google Pay',
      'Multi-currency wallet (hold USD, EUR, GBP)',
      'Family cards under same visa',
    ],
    timeline: 'Q2 2027',
    priority: 'high',
  },
  {
    category: 'Cross-Product Integration',
    items: [
      'Auto Wasil kit for Sakin tenants',
      'Hawil senders get Qist credit boost',
      'Corporate Nuqta+ includes Hawil Card',
      'Unified notification center',
    ],
    timeline: 'Q3 2027',
    priority: 'high',
  },
  {
    category: 'New Monetization',
    items: [
      'Nuqta Pay - QR payments anywhere',
      'Merchant lending - working capital',
      'Data analytics for brands',
      'White-label for corporates',
    ],
    timeline: 'Q4 2027',
    priority: 'medium',
  },
  {
    category: 'Tourist Experience',
    items: [
      'Concierge service',
      'eSIM partnership',
      'Luggage storage integration',
      'Experience booking',
    ],
    timeline: '2028',
    priority: 'medium',
  },
];

// Hawil Card - Universal Payment Across Ecosystem
const hawilCardUniversalPayment = {
  headline: 'One Card. Entire Ecosystem.',
  description: 'Hawil Card works as the universal payment method across all Nuqta products - tourists and residents enjoy Google rate everywhere',
  products: [
    {
      product: 'Wasil Delivery',
      icon: Truck,
      benefit: 'Order groceries, pharmacy, food - pay at Google rate',
      savings: 'Save 3-5% vs foreign credit cards',
      coins: '2X coins on all deliveries',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
    },
    {
      product: 'Rakab Rides',
      icon: Car,
      benefit: 'Pay for rides with 0% FX markup',
      savings: 'Save 5-10 AED per ride',
      coins: '5% coins on every ride',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
    },
    {
      product: 'Qist BNPL',
      icon: Wallet,
      benefit: 'Pay installments in home currency',
      savings: 'No FX fees on monthly payments',
      coins: 'Coins on every installment',
      color: 'text-violet-400',
      bgColor: 'bg-violet-500/10',
    },
    {
      product: 'Sakin Stays',
      icon: Home,
      benefit: 'Book short-term rentals at best rate',
      savings: '3-5% savings on accommodation',
      coins: '2X coins on bookings',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
    },
    {
      product: '500+ Merchants',
      icon: Store,
      benefit: 'Spend at any Nuqta partner',
      savings: 'Google rate at partners, standard elsewhere',
      coins: 'Earn coins on every purchase',
      color: 'text-[#c9a227]',
      bgColor: 'bg-[#c9a227]/10',
    },
    {
      product: 'Send Money Home',
      icon: Send,
      benefit: 'Remittance at 0% FX markup',
      savings: 'Only 0.5% flat fee',
      coins: 'Coins on every transfer',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
    },
  ],
  touristSavingsExample: {
    title: 'Tourist Trip Savings (7 Days)',
    items: [
      { category: 'Accommodation (Sakin Stays)', spend: 2500, savings: 125, coins: 250 },
      { category: 'Rides (Rakab)', spend: 500, savings: 25, coins: 25 },
      { category: 'Food & Delivery (Wasil)', spend: 800, savings: 40, coins: 80 },
      { category: 'Shopping (Merchants)', spend: 2000, savings: 100, coins: 200 },
      { category: 'Remittance Home', spend: 1000, savings: 50, coins: 10 },
    ],
    totals: {
      totalSpend: 6800,
      totalSavings: 340,
      totalCoins: 565,
      coinsValue: '565 AED worth',
    },
  },
  keyBenefits: [
    { benefit: 'Single Wallet', description: 'One balance works everywhere in the ecosystem' },
    { benefit: 'Auto-Reload', description: 'Set up automatic top-up from bank or remittance' },
    { benefit: 'Multi-Currency', description: 'Hold AED, USD, EUR, GBP and more' },
    { benefit: 'Family Sharing', description: 'Add family members under same visa' },
    { benefit: 'Instant Virtual', description: 'Get virtual card in 60 seconds' },
    { benefit: 'Apple/Google Pay', description: 'Contactless payments everywhere' },
  ],
};

export default function EcosystemPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedJourney, setExpandedJourney] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Network },
    { id: 'products', label: 'Products', icon: Sparkles },
    { id: 'hawil-card', label: 'Hawil Card', icon: CreditCard },
    { id: 'synergies', label: 'Synergies', icon: Layers },
    { id: 'journeys', label: 'User Journeys', icon: Users },
    { id: 'segments', label: 'Segments', icon: Target },
    { id: 'future', label: 'Future', icon: Rocket },
    { id: 'advantages', label: 'Advantages', icon: Award },
    { id: 'financials', label: 'Financials', icon: BarChart3 },
    { id: 'improvements', label: 'Improvements', icon: Lightbulb },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full mb-4">
              <Network className="w-5 h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-bold">Complete Financial Ecosystem</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              The <span className="text-[#c9a227]">Nuqta</span> Ecosystem
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Six integrated products serving residents, tourists, corporates, and merchants.
              One wallet. One membership. Infinite possibilities.
            </p>
          </div>

          {/* Ecosystem Visual */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center - Nuqta */}
            <div className="flex justify-center mb-8">
              <div className="shadow-2xl shadow-[#c9a227]/30">
                <NuqtaMainLogo size={96} />
              </div>
            </div>

            {/* Product Ring */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {coreProducts.map((product, i) => {
                const Logo = product.logo;
                return (
                  <Link
                    key={i}
                    href={product.href}
                    className={`${product.bgColor} border ${product.borderColor} rounded-xl p-4 text-center hover:scale-105 transition-transform`}
                  >
                    <div className="flex justify-center mb-2">
                      <Logo size={48} />
                    </div>
                    <div className={`text-sm font-bold ${product.textColor}`}>{product.name}</div>
                    <div className="text-xs text-slate-500">{product.arabic}</div>
                    <div className="text-xs text-slate-400 mt-1">{product.tagline}</div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-[#c9a227]">6</div>
              <div className="text-xs text-slate-400">Core Products</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-400">500+</div>
              <div className="text-xs text-slate-400">Merchant Partners</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-blue-400">4</div>
              <div className="text-xs text-slate-400">User Segments</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-purple-400">50x</div>
              <div className="text-xs text-slate-400">LTV:CAC Ratio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-2 gap-1 sm:gap-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-white'
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* The Vision */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#c9a227]" />
                The Vision
              </h2>
              <p className="text-slate-300 text-lg mb-6">
                Nuqta is building the <strong className="text-white">super app for UAE&apos;s diverse population</strong> -
                a single platform where residents earn rewards, tourists get the best rates,
                corporates manage employee benefits, and merchants grow their business.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-[#c9a227]/30">
                  <div className="text-[#c9a227] font-bold mb-2">One Wallet</div>
                  <p className="text-sm text-slate-400">Nuqta coins work across all products and 500+ merchants</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-[#c9a227]/30">
                  <div className="text-[#c9a227] font-bold mb-2">One Membership</div>
                  <p className="text-sm text-slate-400">Nuqta+ unlocks benefits across every product</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-[#c9a227]/30">
                  <div className="text-[#c9a227] font-bold mb-2">One Identity</div>
                  <p className="text-sm text-slate-400">Verify once, use everywhere (Hawil Card, Qist, Sakin)</p>
                </div>
              </div>
            </div>

            {/* Ecosystem Flow */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-blue-400" />
                The Ecosystem Flywheel
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { step: 1, title: 'Acquire', description: 'Tourists via Hawil Card, Corporates via B2B, Residents via merchants', icon: Users, color: 'text-blue-400' },
                  { step: 2, title: 'Activate', description: 'First transaction earns coins, unlocks ecosystem', icon: Zap, color: 'text-green-400' },
                  { step: 3, title: 'Engage', description: 'Use Qist, Sakin, Wasil, Hawil - earn more coins', icon: Layers, color: 'text-purple-400' },
                  { step: 4, title: 'Retain', description: 'Nuqta+ membership creates stickiness', icon: Crown, color: 'text-[#c9a227]' },
                  { step: 5, title: 'Refer', description: 'Gamification rewards referrals, grows network', icon: Gift, color: 'text-pink-400' },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 text-center h-full">
                      <div className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-3 ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="text-xs text-slate-500 mb-1">Step {item.step}</div>
                      <div className={`text-sm font-bold ${item.color}`}>{item.title}</div>
                      <div className="text-xs text-slate-400 mt-2">{item.description}</div>
                    </div>
                    {i < 4 && (
                      <ChevronRight className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreProducts.map((product, i) => (
                <Link
                  key={i}
                  href={product.href}
                  className={`${product.bgColor} border ${product.borderColor} rounded-xl p-5 hover:scale-[1.02] transition-transform group`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <ArrowRight className={`${product.textColor} opacity-0 group-hover:opacity-100 transition-opacity`} size={20} />
                  </div>
                  <h3 className={`text-lg font-bold ${product.textColor}`}>{product.name} <span className="text-slate-500 text-sm">{product.arabic}</span></h3>
                  <p className="text-slate-400 text-sm mt-1 mb-3">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(product.stats).map(([key, value], j) => (
                      <span key={j} className="text-xs bg-slate-900/50 px-2 py-1 rounded text-slate-300">
                        {value}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            {coreProducts.map((product, i) => (
              <div key={i} className={`${product.bgColor} border-2 ${product.borderColor} rounded-xl p-6`}>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${product.textColor}`}>
                        {product.name} <span className="text-slate-400">{product.arabic}</span>
                      </h3>
                      <p className="text-slate-400">{product.tagline} • {product.description}</p>
                    </div>
                  </div>
                  <Link
                    href={product.href}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${product.color} text-white font-medium hover:opacity-90 transition-opacity`}
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Key Stats */}
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <h4 className="text-white font-bold mb-3">Key Stats</h4>
                    <div className="space-y-2">
                      {Object.entries(product.stats).map(([key, value], j) => (
                        <div key={j} className="flex justify-between">
                          <span className="text-slate-400 text-sm capitalize">{key}</span>
                          <span className={`font-bold text-sm ${product.textColor}`}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <h4 className="text-white font-bold mb-3">Features</h4>
                    <div className="space-y-2">
                      {product.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle className={`w-4 h-4 ${product.textColor} flex-shrink-0`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Revenue */}
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <h4 className="text-white font-bold mb-3">Revenue Model</h4>
                    <div className={`text-lg font-bold ${product.textColor}`}>{product.revenue}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Synergies Tab */}
        {activeTab === 'synergies' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/10 rounded-xl p-6 border-2 border-purple-500">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-400" />
                Cross-Product Synergies
              </h2>
              <p className="text-slate-300 mb-6">
                Every product strengthens the others. This creates a <strong className="text-white">network effect</strong> where
                the ecosystem value grows exponentially as users adopt more products.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {synergies.map((synergy, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-3">
                      <synergy.icon className="w-5 h-5 text-purple-400" />
                      <span className="text-white font-bold text-sm">{synergy.from}</span>
                      <ArrowRight className="w-4 h-4 text-slate-500" />
                      <span className="text-white font-bold text-sm">{synergy.to}</span>
                    </div>
                    <p className="text-purple-400 font-medium">{synergy.synergy}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Synergy Matrix */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 overflow-x-auto">
              <h3 className="text-lg font-bold text-white mb-4">Product Synergy Matrix</h3>
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-slate-400">From / To</th>
                    {coreProducts.slice(0, 5).map((p, i) => (
                      <th key={i} className={`text-center py-3 px-4 ${p.textColor}`}>{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {coreProducts.slice(0, 5).map((fromProduct, i) => (
                    <tr key={i} className="border-b border-slate-700/50">
                      <td className={`py-3 px-4 font-bold ${fromProduct.textColor}`}>{fromProduct.name}</td>
                      {coreProducts.slice(0, 5).map((toProduct, j) => (
                        <td key={j} className="py-3 px-4 text-center">
                          {i === j ? (
                            <span className="text-slate-600">-</span>
                          ) : (
                            <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* User Journeys Tab */}
        {activeTab === 'journeys' && (
          <div className="space-y-6">
            {userJourneys.map((journey, i) => (
              <div key={i} className={`rounded-xl border-2 ${journey.color} ${journey.bgColor} overflow-hidden`}>
                <button
                  onClick={() => setExpandedJourney(expandedJourney === journey.persona ? null : journey.persona)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-900/50 flex items-center justify-center">
                      <journey.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{journey.persona}</h3>
                      <p className="text-slate-400 text-sm">Total Savings: <span className="text-green-400 font-bold">{journey.totalSavings}</span></p>
                    </div>
                  </div>
                  {expandedJourney === journey.persona ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                {expandedJourney === journey.persona && (
                  <div className="px-6 pb-6">
                    <div className="space-y-3">
                      {journey.steps.map((step, j) => (
                        <div key={j} className="flex items-center gap-4 bg-slate-900/50 rounded-lg p-4">
                          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-sm">
                            {j + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[#c9a227] font-bold text-sm">{step.product}</span>
                              <span className="text-slate-400 text-sm">→</span>
                              <span className="text-white text-sm">{step.action}</span>
                            </div>
                            <div className="text-green-400 text-xs mt-1">{step.savings}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Segments Tab */}
        {activeTab === 'segments' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userSegments.map((segment, i) => (
              <div key={i} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/50 flex items-center justify-center">
                    <segment.icon className={`w-6 h-6 ${segment.color}`} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${segment.color}`}>{segment.segment}</h3>
                    <p className="text-slate-400 text-sm">{segment.population}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Acquisition</div>
                    <p className="text-sm text-slate-300">{segment.acquisition}</p>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500 mb-2">Product Journey</div>
                    <div className="flex flex-wrap gap-2">
                      {segment.journey.map((step, j) => (
                        <span key={j} className="text-xs bg-slate-900/50 px-2 py-1 rounded text-slate-300">
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/30">
                    <div className="text-xs text-slate-500">Lifetime Value</div>
                    <div className="text-lg font-bold text-green-400">{segment.ltv}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Future Tab */}
        {activeTab === 'future' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/10 rounded-xl p-6 border-2 border-indigo-500">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-indigo-400" />
                Future Products (2027-2028)
              </h2>
              <p className="text-slate-300 mb-6">
                Expanding the ecosystem to cover every aspect of life in UAE - savings, travel, insurance, transport, health, education.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {futureProducts.map((product, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                        <product.icon className={`w-5 h-5 ${product.color}`} />
                      </div>
                      <div>
                        <h4 className={`font-bold ${product.color}`}>{product.name} <span className="text-slate-500">{product.arabic}</span></h4>
                        <p className="text-xs text-slate-500">{product.tagline}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 mb-3">{product.description}</p>
                    <span className="text-xs bg-indigo-500/20 px-2 py-1 rounded text-indigo-400">{product.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Advantages Tab */}
        {activeTab === 'advantages' && (
          <div className="space-y-4">
            {competitiveAdvantages.map((adv, i) => (
              <div key={i} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <adv.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{adv.advantage}</h3>
                    <p className="text-slate-300 mb-2">{adv.description}</p>
                    <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/30">
                      <div className="text-xs text-red-400 font-medium">Competitors:</div>
                      <p className="text-sm text-slate-400">{adv.competitors}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Financials Tab */}
        {activeTab === 'financials' && (
          <div className="space-y-8">
            {/* Year 3 Targets */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-6 border-2 border-green-500">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-green-400" />
                Year 3 Targets
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(financialOverview.year3Targets).map(([key, value], i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 text-center border border-green-500/30">
                    <div className="text-2xl font-bold text-green-400">{value}</div>
                    <div className="text-xs text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Breakdown */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Revenue Breakdown by Product</h3>
              <div className="space-y-4">
                {financialOverview.revenueBreakdown.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white font-medium">{item.product}</span>
                      <span className="text-[#c9a227] font-bold">{item.revenue} ({item.percentage}%)</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#c9a227] to-amber-500 h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{item.source}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Unit Economics */}
            <div className="bg-[#c9a227]/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#c9a227]" />
                Unit Economics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(financialOverview.unitEconomics).map(([key, value], i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-[#c9a227]">{value}</div>
                    <div className="text-xs text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Improvements Tab */}
        {activeTab === 'improvements' && (
          <div className="space-y-6">
            {improvements.map((improvement, i) => (
              <div key={i} className={`rounded-xl p-6 border-2 ${
                improvement.priority === 'high' ? 'border-red-500 bg-red-500/10' : 'border-blue-500 bg-blue-500/10'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">{improvement.category}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      improvement.priority === 'high' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {improvement.priority.toUpperCase()}
                    </span>
                    <span className="text-xs bg-slate-900/50 px-2 py-1 rounded text-slate-400">{improvement.timeline}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {improvement.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <Lightbulb className={`w-4 h-4 flex-shrink-0 ${
                        improvement.priority === 'high' ? 'text-red-400' : 'text-blue-400'
                      }`} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Hawil Card - Universal Payment Tab */}
        {activeTab === 'hawil-card' && (
          <div className="space-y-8">
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-2xl p-8 border-2 border-blue-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white">{hawilCardUniversalPayment.headline}</h2>
                  <p className="text-blue-400 text-lg">Hawil Card حوّل - Universal Ecosystem Payment</p>
                </div>
              </div>
              <p className="text-slate-300 text-lg max-w-3xl">
                {hawilCardUniversalPayment.description}
              </p>
            </div>

            {/* Products Grid */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                Works Across All Products
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hawilCardUniversalPayment.products.map((product, i) => {
                  const ProductIcon = product.icon;
                  return (
                    <div key={i} className={`${product.bgColor} rounded-xl p-5 border border-slate-700/50`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${product.bgColor}`}>
                          <ProductIcon className={`w-5 h-5 ${product.color}`} />
                        </div>
                        <span className={`font-bold ${product.color}`}>{product.product}</span>
                      </div>
                      <p className="text-white text-sm mb-2">{product.benefit}</p>
                      <div className="flex flex-col gap-1 text-xs">
                        <span className="text-emerald-400">✓ {product.savings}</span>
                        <span className="text-[#c9a227]">★ {product.coins}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tourist Savings Example */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Plane className="w-5 h-5 text-blue-400" />
                {hawilCardUniversalPayment.touristSavingsExample.title}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400">Category</th>
                      <th className="text-right py-3 px-4 text-slate-400">Spend (AED)</th>
                      <th className="text-right py-3 px-4 text-slate-400">Savings</th>
                      <th className="text-right py-3 px-4 text-slate-400">Coins Earned</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hawilCardUniversalPayment.touristSavingsExample.items.map((item, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white">{item.category}</td>
                        <td className="py-3 px-4 text-right text-slate-300">{item.spend.toLocaleString()}</td>
                        <td className="py-3 px-4 text-right text-emerald-400">{item.savings} AED</td>
                        <td className="py-3 px-4 text-right text-[#c9a227]">{item.coins}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-blue-500/10">
                      <td className="py-3 px-4 font-bold text-white">TOTAL</td>
                      <td className="py-3 px-4 text-right font-bold text-white">{hawilCardUniversalPayment.touristSavingsExample.totals.totalSpend.toLocaleString()} AED</td>
                      <td className="py-3 px-4 text-right font-bold text-emerald-400">{hawilCardUniversalPayment.touristSavingsExample.totals.totalSavings} AED saved</td>
                      <td className="py-3 px-4 text-right font-bold text-[#c9a227]">{hawilCardUniversalPayment.touristSavingsExample.totals.totalCoins} coins</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="mt-4 p-4 bg-[#c9a227]/20 rounded-lg border border-[#c9a227]/50">
                <p className="text-[#c9a227] text-center font-medium">
                  Total Value: <strong className="text-white">{hawilCardUniversalPayment.touristSavingsExample.totals.totalSavings + hawilCardUniversalPayment.touristSavingsExample.totals.totalCoins} AED</strong> in savings + coins on a 7-day trip
                </p>
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                Why Hawil Card?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hawilCardUniversalPayment.keyBenefits.map((benefit, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <span className="text-white font-medium">{benefit.benefit}</span>
                      <p className="text-slate-400 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-xl p-8 border border-blue-500/50">
              <h3 className="text-2xl font-bold text-white mb-2">Get Your Hawil Card Today</h3>
              <p className="text-slate-300 mb-6">Available at Dubai airports, 500+ Nuqta merchants, or instantly in the app</p>
              <Link
                href="/hawil"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
              >
                Learn More About Hawil Card <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

      </main>

      <GlobalFooter />
    </div>
  );
}
