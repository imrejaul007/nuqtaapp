'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Package, Globe, Shield, TrendingUp, Users, Target,
  Rocket, CheckCircle, AlertTriangle, Clock, Building, ArrowRight,
  Star, Zap, BarChart3, Award, Handshake, Store, CreditCard,
  Calculator, Gift, Crown, Wallet, ChevronRight,
  ChevronDown, ChevronUp, Building2, ShieldCheck, HeartHandshake,
  Coins, Network, MapPin, Smartphone, Banknote, Phone,
  BadgePercent, CircleDollarSign, PieChart, LineChart, ArrowUpRight,
  Timer, UserCheck, Lock, Eye, Search, Home, ShoppingBag,
  Calendar, RefreshCw, Layers, Sparkles, Send,
  Car, Camera, Bike, Wrench, Tent, Ship, Dumbbell,
  Music, Gamepad2, Baby, Briefcase, Laptop, Tv, Sofa,
  Shirt, Watch, Gem, PartyPopper, GraduationCap, Heart
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Executive Summary Stats
const keyStats = [
  { label: 'Rental Market UAE', value: '$5B+', suffix: 'annually', color: 'text-green-400' },
  { label: 'Target Year 1', value: '50K', suffix: 'rentals', color: 'text-blue-400' },
  { label: 'Avg Rental Value', value: '350', suffix: 'AED', color: 'text-purple-400' },
  { label: 'Commission', value: '15-25%', suffix: 'per rental', color: 'text-[#c9a227]' },
];

// Rental Categories
const rentalCategories = [
  {
    name: 'Vehicles',
    arabic: 'مركبات',
    icon: Car,
    description: 'Cars, bikes, scooters, boats & more',
    items: ['Luxury cars', 'Economy cars', 'Motorcycles', 'Electric scooters', 'Yachts & boats', 'Jet skis'],
    priceRange: '99-5,000 AED/day',
    popular: 'Weekend sports car rental',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    name: 'Electronics',
    arabic: 'إلكترونيات',
    icon: Laptop,
    description: 'Laptops, cameras, gaming & tech gear',
    items: ['MacBooks & laptops', 'Cameras & lenses', 'Drones', 'Gaming consoles', 'Projectors', 'Audio equipment'],
    priceRange: '25-500 AED/day',
    popular: 'Camera kit for vacation',
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  {
    name: 'Fashion & Luxury',
    arabic: 'أزياء فاخرة',
    icon: Gem,
    description: 'Designer bags, watches, jewelry',
    items: ['Designer handbags', 'Luxury watches', 'Fine jewelry', 'Designer dresses', 'Wedding attire', 'Accessories'],
    priceRange: '100-2,000 AED/day',
    popular: 'Designer bag for special event',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
  },
  {
    name: 'Events & Party',
    arabic: 'فعاليات',
    icon: PartyPopper,
    description: 'Party supplies, decor, furniture',
    items: ['Party tents', 'Tables & chairs', 'Decorations', 'Sound systems', 'Lighting', 'Bounce houses'],
    priceRange: '50-1,000 AED/day',
    popular: 'Complete birthday party setup',
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
  {
    name: 'Sports & Outdoor',
    arabic: 'رياضة',
    icon: Dumbbell,
    description: 'Fitness, camping, water sports gear',
    items: ['Camping gear', 'Kayaks & paddleboards', 'Ski equipment', 'Golf clubs', 'Fitness equipment', 'Hiking gear'],
    priceRange: '25-300 AED/day',
    popular: 'Camping trip complete kit',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    name: 'Baby & Kids',
    arabic: 'أطفال',
    icon: Baby,
    description: 'Strollers, car seats, toys & more',
    items: ['Strollers', 'Car seats', 'Cribs & cots', 'High chairs', 'Baby monitors', 'Toys & games'],
    priceRange: '15-150 AED/day',
    popular: 'Tourist family baby kit',
    color: 'from-cyan-500 to-teal-600',
    textColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
  },
  {
    name: 'Home & Living',
    arabic: 'منزل',
    icon: Sofa,
    description: 'Furniture, appliances, home items',
    items: ['Furniture sets', 'Appliances', 'Air conditioners', 'Heaters', 'Vacuum cleaners', 'Kitchen equipment'],
    priceRange: '20-500 AED/day',
    popular: 'Temporary apartment furnishing',
    color: 'from-amber-500 to-yellow-600',
    textColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
  },
  {
    name: 'Professional',
    arabic: 'مهني',
    icon: Briefcase,
    description: 'Tools, equipment, office gear',
    items: ['Power tools', 'Construction equipment', 'Office furniture', 'Printers & copiers', 'Medical equipment', 'AV equipment'],
    priceRange: '50-1,000 AED/day',
    popular: 'Contractor tool kit',
    color: 'from-slate-500 to-gray-600',
    textColor: 'text-slate-400',
    bgColor: 'bg-slate-500/10',
  },
];

// How It Works - Renters
const renterProcess = [
  { step: 1, title: 'Browse & Select', description: 'Find what you need from thousands of items', icon: Search },
  { step: 2, title: 'Book & Pay', description: 'Secure booking with Hawil Card or Qist BNPL', icon: CreditCard },
  { step: 3, title: 'Pickup or Delivery', description: 'Get items delivered via Wasil or self-pickup', icon: Package },
  { step: 4, title: 'Use & Enjoy', description: 'Use the item for your rental period', icon: Star },
  { step: 5, title: 'Return & Earn', description: 'Return item and earn Nuqta coins', icon: Coins },
];

// How It Works - Owners
const ownerProcess = [
  { step: 1, title: 'List Your Items', description: 'Upload photos, set price, availability', icon: Camera },
  { step: 2, title: 'Get Bookings', description: 'Receive rental requests, accept/decline', icon: Calendar },
  { step: 3, title: 'Hand Over', description: 'Deliver via Wasil or arrange pickup', icon: Package },
  { step: 4, title: 'Get Paid', description: 'Receive payment after rental completes', icon: Banknote },
  { step: 5, title: 'Earn More', description: 'Build reviews, get more bookings', icon: TrendingUp },
];

// Trust & Safety Features
const trustFeatures = [
  {
    feature: 'ID Verification',
    description: 'All renters verified with Emirates ID/passport',
    icon: UserCheck,
  },
  {
    feature: 'Security Deposit',
    description: 'Deposits held securely, released after return',
    icon: Shield,
  },
  {
    feature: 'Insurance Coverage',
    description: 'Optional insurance for high-value items',
    icon: ShieldCheck,
  },
  {
    feature: 'Damage Protection',
    description: 'Clear policies for damage assessment',
    icon: Lock,
  },
  {
    feature: 'Reviews & Ratings',
    description: 'Both renters and owners are rated',
    icon: Star,
  },
  {
    feature: '24/7 Support',
    description: 'Dedicated support for any issues',
    icon: HeartHandshake,
  },
];

// Ecosystem Integration
const ecosystemIntegration = [
  {
    product: 'Hawil Card',
    integration: 'Pay for rentals at Google rate',
    benefit: 'Tourists save 3-5% vs credit cards',
    icon: CreditCard,
    color: 'text-blue-400',
  },
  {
    product: 'Qist',
    integration: 'BNPL for expensive rentals',
    benefit: 'Rent luxury items, pay over time',
    icon: Wallet,
    color: 'text-violet-400',
  },
  {
    product: 'Wasil',
    integration: 'Delivery & pickup service',
    benefit: 'Items delivered to your door',
    icon: Package,
    color: 'text-orange-400',
  },
  {
    product: 'Nuqta+',
    integration: 'Member discounts & priority',
    benefit: '15% off rentals, priority booking',
    icon: Crown,
    color: 'text-[#c9a227]',
  },
  {
    product: 'Nuqta Coins',
    integration: 'Earn & spend on rentals',
    benefit: '3% coins earned, use coins to pay',
    icon: Coins,
    color: 'text-amber-400',
  },
  {
    product: 'Sakin',
    integration: 'Furniture for new tenants',
    benefit: 'Rent furniture while furnishing',
    icon: Home,
    color: 'text-emerald-400',
  },
];

// Use Cases
const useCases = [
  {
    persona: 'Tourist Family',
    icon: Users,
    scenario: 'Visiting Dubai for 2 weeks with kids',
    rentals: ['Car seat', 'Stroller', 'Baby crib', 'Beach toys'],
    savings: '70% cheaper than buying',
    totalRent: '450 AED',
    buyPrice: '1,500+ AED',
  },
  {
    persona: 'Event Planner',
    icon: PartyPopper,
    scenario: 'Organizing a birthday party',
    rentals: ['Party tent', 'Tables & chairs', 'Sound system', 'Decorations'],
    savings: '80% cheaper than buying',
    totalRent: '800 AED',
    buyPrice: '4,000+ AED',
  },
  {
    persona: 'Photography Enthusiast',
    icon: Camera,
    scenario: 'Weekend photoshoot trip',
    rentals: ['DSLR camera', 'Telephoto lens', 'Tripod', 'Drone'],
    savings: '95% cheaper than buying',
    totalRent: '350 AED',
    buyPrice: '15,000+ AED',
  },
  {
    persona: 'New Expat',
    icon: Home,
    scenario: 'Just moved, waiting for furniture delivery',
    rentals: ['Sofa set', 'Dining table', 'Bed frame', 'Basic appliances'],
    savings: 'Use while waiting for purchase',
    totalRent: '1,200 AED/month',
    buyPrice: 'Bridge gap affordably',
  },
];

// Owner Benefits
const ownerBenefits = [
  {
    benefit: 'Passive Income',
    description: 'Earn money from items sitting idle',
    example: 'Camera earning 500 AED/month',
    icon: Banknote,
  },
  {
    benefit: 'Zero Marketing',
    description: 'We bring renters to your items',
    example: 'Access to 500K+ Nuqta users',
    icon: Users,
  },
  {
    benefit: 'Protection',
    description: 'Deposits, insurance, verification',
    example: 'Peace of mind for your valuables',
    icon: Shield,
  },
  {
    benefit: 'Flexible Control',
    description: 'Set your prices, availability, rules',
    example: 'Rent when you want, how you want',
    icon: Sparkles,
  },
];

// GCC Expansion
const gccExpansion = {
  headline: 'Rent Anything Across the Gulf',
  description: 'Ajer expands to all GCC countries - one platform for all your rental needs',
  countries: [
    { country: 'UAE', flag: '🇦🇪', status: 'Active', categories: 'All 8 categories', timeline: '2027' },
    { country: 'Saudi Arabia', flag: '🇸🇦', status: 'Phase 2', categories: '6 categories', timeline: '2028' },
    { country: 'Qatar', flag: '🇶🇦', status: 'Phase 2', categories: '5 categories', timeline: '2028' },
    { country: 'Kuwait', flag: '🇰🇼', status: 'Phase 3', categories: '4 categories', timeline: '2029' },
    { country: 'Bahrain', flag: '🇧🇭', status: 'Phase 3', categories: '4 categories', timeline: '2029' },
    { country: 'Oman', flag: '🇴🇲', status: 'Phase 3', categories: '4 categories', timeline: '2029' },
  ],
};

// Financial Projections
const financialProjections = [
  { year: 'Year 1', rentals: 50000, gmv: 17.5, revenue: 3.5, netProfit: 0.7, owners: 5000, renters: 25000 },
  { year: 'Year 2', rentals: 200000, gmv: 70, revenue: 14, netProfit: 3.5, owners: 15000, renters: 80000 },
  { year: 'Year 3', rentals: 600000, gmv: 210, revenue: 42, netProfit: 12.6, owners: 40000, renters: 200000 },
];

// Roadmap
const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'MVP Launch',
    timeline: 'Q3 2027',
    status: 'planned',
    milestones: [
      'Launch with vehicles & electronics',
      'Basic listing & booking flow',
      'Wasil delivery integration',
      'Hawil Card payments',
    ],
    color: 'border-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    phase: 'Phase 2',
    title: 'Category Expansion',
    timeline: 'Q1 2028',
    status: 'pending',
    milestones: [
      'Add fashion, events, sports categories',
      'Owner verification & onboarding',
      'Insurance partnerships',
      'Qist BNPL for rentals',
    ],
    color: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    phase: 'Phase 3',
    title: 'Scale & GCC',
    timeline: 'Q3 2028',
    status: 'pending',
    milestones: [
      'All 8 categories live',
      'Expand to Saudi & Qatar',
      'B2B corporate rentals',
      'AI-powered recommendations',
    ],
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
  },
];

export default function AjerPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Package },
    { id: 'categories', label: 'Categories', icon: Layers },
    { id: 'how-it-works', label: 'How It Works', icon: Zap },
    { id: 'for-owners', label: 'For Owners', icon: Banknote },
    { id: 'ecosystem', label: 'Ecosystem', icon: Network },
    { id: 'gcc', label: 'GCC Expansion', icon: Globe },
    { id: 'financials', label: 'Financials', icon: BarChart3 },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-violet-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/20 border border-violet-500/50 rounded-full mb-4">
              <Package className="w-5 h-5 text-violet-400" />
              <span className="text-violet-400 font-bold">Ajer أجر - Rent Everything</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Rent <span className="text-violet-400">Anything</span>, Anytime
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              From luxury cars to baby strollers, cameras to party supplies - rent what you need,
              list what you own. The sharing economy meets Nuqta ecosystem.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {keyStats.map((stat, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.suffix}</div>
              </div>
            ))}
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
                    ? 'bg-violet-500 text-white'
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
            {/* Value Proposition */}
            <div className="bg-gradient-to-r from-violet-500/20 to-purple-500/10 rounded-xl p-6 border-2 border-violet-500">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-violet-400" />
                Why Ajer?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-violet-500/30">
                  <div className="text-violet-400 font-bold mb-2">Save Money</div>
                  <p className="text-sm text-slate-400">Rent instead of buy - save 70-95% on items you only need temporarily</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-violet-500/30">
                  <div className="text-violet-400 font-bold mb-2">Earn Money</div>
                  <p className="text-sm text-slate-400">List your idle items and earn passive income from things collecting dust</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-violet-500/30">
                  <div className="text-violet-400 font-bold mb-2">Sustainability</div>
                  <p className="text-sm text-slate-400">Reduce waste by sharing resources - good for wallet and planet</p>
                </div>
              </div>
            </div>

            {/* Categories Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {rentalCategories.slice(0, 8).map((cat, i) => (
                <div key={i} className={`${cat.bgColor} border border-slate-700/50 rounded-xl p-4 hover:scale-[1.02] transition-transform cursor-pointer`}
                  onClick={() => { setActiveTab('categories'); setExpandedCategory(cat.name); }}>
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center mb-3`}>
                    <cat.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className={`font-bold ${cat.textColor} text-sm`}>{cat.name}</h3>
                  <span className="text-slate-500 text-xs">{cat.arabic}</span>
                </div>
              ))}
            </div>

            {/* Use Cases */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Real Use Cases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {useCases.map((useCase, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                        <useCase.icon className="w-5 h-5 text-violet-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold">{useCase.persona}</h4>
                        <p className="text-slate-500 text-xs">{useCase.scenario}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {useCase.rentals.map((item, j) => (
                        <span key={j} className="text-xs bg-violet-500/10 px-2 py-1 rounded text-violet-400">{item}</span>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>
                        <div className="text-slate-400 text-xs">Rent Cost</div>
                        <div className="text-violet-400 font-bold">{useCase.totalRent}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-slate-400 text-xs">Buy Price</div>
                        <div className="text-slate-500 line-through">{useCase.buyPrice}</div>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-emerald-400">{useCase.savings}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust & Safety */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {trustFeatures.map((feature, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <feature.icon className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <div className="text-white font-medium text-sm">{feature.feature}</div>
                  <p className="text-xs text-slate-400 mt-1">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categories Tab */}
        {activeTab === 'categories' && (
          <div className="space-y-6">
            {rentalCategories.map((category, i) => (
              <div key={i} className={`${category.bgColor} border-2 rounded-xl overflow-hidden`} style={{ borderColor: category.textColor.replace('text-', '').replace('-400', '') }}>
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.name ? null : category.name)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${category.textColor}`}>
                        {category.name} <span className="text-slate-400">{category.arabic}</span>
                      </h3>
                      <p className="text-slate-400">{category.description}</p>
                    </div>
                  </div>
                  {expandedCategory === category.name ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                {expandedCategory === category.name && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-slate-900/50 rounded-lg p-4">
                        <h4 className="text-white font-bold mb-3">Items Available</h4>
                        <div className="space-y-2">
                          {category.items.map((item, j) => (
                            <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                              <CheckCircle className={`w-4 h-4 ${category.textColor}`} />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-4">
                        <h4 className="text-white font-bold mb-3">Pricing</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="text-slate-400 text-sm">Price Range</div>
                            <div className={`text-lg font-bold ${category.textColor}`}>{category.priceRange}</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-4">
                        <h4 className="text-white font-bold mb-3">Most Popular</h4>
                        <div className="text-slate-300">{category.popular}</div>
                        <div className="mt-3">
                          <span className={`text-xs px-2 py-1 rounded ${category.bgColor} ${category.textColor}`}>
                            Trending
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* How It Works Tab */}
        {activeTab === 'how-it-works' && (
          <div className="space-y-8">
            {/* For Renters */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-violet-400" />
                For Renters
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {renterProcess.map((step, i) => (
                  <div key={i} className="relative">
                    <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                      <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center mx-auto mb-3">
                        <step.icon className="w-5 h-5 text-violet-400" />
                      </div>
                      <div className="text-xs text-violet-400 mb-1">Step {step.step}</div>
                      <div className="text-white font-medium text-sm mb-1">{step.title}</div>
                      <p className="text-xs text-slate-400">{step.description}</p>
                    </div>
                    {i < 4 && (
                      <ChevronRight className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* For Owners */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Banknote className="w-5 h-5 text-emerald-400" />
                For Item Owners
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {ownerProcess.map((step, i) => (
                  <div key={i} className="relative">
                    <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-3">
                        <step.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="text-xs text-emerald-400 mb-1">Step {step.step}</div>
                      <div className="text-white font-medium text-sm mb-1">{step.title}</div>
                      <p className="text-xs text-slate-400">{step.description}</p>
                    </div>
                    {i < 4 && (
                      <ChevronRight className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* For Owners Tab */}
        {activeTab === 'for-owners' && (
          <div className="space-y-8">
            {/* Owner Hero */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/10 rounded-xl p-6 border-2 border-emerald-500">
              <h2 className="text-2xl font-bold text-white mb-2">Turn Your Idle Items Into Income</h2>
              <p className="text-emerald-400 text-lg mb-6">List anything. Earn money. Keep control.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {ownerBenefits.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4">
                    <item.icon className="w-8 h-8 text-emerald-400 mb-3" />
                    <h4 className="text-white font-bold mb-1">{item.benefit}</h4>
                    <p className="text-slate-400 text-sm mb-2">{item.description}</p>
                    <span className="text-emerald-400 text-xs">{item.example}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Earnings Calculator Example */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Potential Earnings Examples</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-emerald-500/30">
                  <Camera className="w-8 h-8 text-emerald-400 mb-3" />
                  <h4 className="text-white font-bold">Camera Kit</h4>
                  <div className="text-slate-400 text-sm mb-2">DSLR + lenses worth 15,000 AED</div>
                  <div className="text-emerald-400 font-bold text-lg">150 AED/day</div>
                  <div className="text-slate-500 text-sm">≈ 2,000 AED/month (if rented 50%)</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-emerald-500/30">
                  <Car className="w-8 h-8 text-emerald-400 mb-3" />
                  <h4 className="text-white font-bold">Sports Car</h4>
                  <div className="text-slate-400 text-sm mb-2">Weekend car worth 300,000 AED</div>
                  <div className="text-emerald-400 font-bold text-lg">1,500 AED/day</div>
                  <div className="text-slate-500 text-sm">≈ 12,000 AED/month (weekends only)</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-emerald-500/30">
                  <Gem className="w-8 h-8 text-emerald-400 mb-3" />
                  <h4 className="text-white font-bold">Designer Bag</h4>
                  <div className="text-slate-400 text-sm mb-2">Luxury bag worth 8,000 AED</div>
                  <div className="text-emerald-400 font-bold text-lg">200 AED/day</div>
                  <div className="text-slate-500 text-sm">≈ 1,600 AED/month (if rented 40%)</div>
                </div>
              </div>
            </div>

            {/* Commission Structure */}
            <div className="bg-violet-500/10 rounded-xl p-6 border-2 border-violet-500">
              <h3 className="text-lg font-bold text-white mb-4">Commission Structure</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-violet-400 text-lg font-bold">Standard</div>
                  <div className="text-3xl font-bold text-white my-2">20%</div>
                  <div className="text-slate-400 text-sm">Platform fee on each rental</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center border-2 border-[#c9a227]">
                  <div className="text-[#c9a227] text-lg font-bold">Nuqta+ Owner</div>
                  <div className="text-3xl font-bold text-white my-2">15%</div>
                  <div className="text-slate-400 text-sm">Reduced fee for members</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-emerald-400 text-lg font-bold">Top Owner</div>
                  <div className="text-3xl font-bold text-white my-2">12%</div>
                  <div className="text-slate-400 text-sm">50+ rentals/month</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Ecosystem Tab */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Network className="w-5 h-5 text-[#c9a227]" />
                Nuqta Ecosystem Integration
              </h2>
              <p className="text-slate-300 mb-6">
                Ajer connects seamlessly with all Nuqta products for the ultimate rental experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ecosystemIntegration.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                      <span className={`font-bold ${item.color}`}>{item.product}</span>
                    </div>
                    <p className="text-white text-sm mb-1">{item.integration}</p>
                    <p className="text-emerald-400 text-xs">{item.benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* GCC Tab */}
        {activeTab === 'gcc' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/20 via-blue-500/10 to-emerald-500/10 rounded-2xl p-8 border-2 border-[#c9a227]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c9a227] to-amber-500 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white">{gccExpansion.headline}</h2>
                  <p className="text-[#c9a227] text-lg">{gccExpansion.description}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gccExpansion.countries.map((country, i) => (
                <div key={i} className={`bg-slate-800/50 rounded-xl p-5 border-2 ${
                  country.status === 'Active' ? 'border-emerald-500' :
                  country.status === 'Phase 2' ? 'border-blue-500' :
                  'border-purple-500'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{country.flag}</span>
                      <h4 className="text-white font-bold">{country.country}</h4>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      country.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' :
                      country.status === 'Phase 2' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {country.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <div className="text-slate-400 text-xs">Categories</div>
                      <div className="text-violet-400 font-medium">{country.categories}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-400 text-xs">Launch</div>
                      <div className="text-white font-medium">{country.timeline}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Financials Tab */}
        {activeTab === 'financials' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-6 border-2 border-green-500">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-green-400" />
                Financial Projections
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400">Metric</th>
                      {financialProjections.map((proj, i) => (
                        <th key={i} className="text-right py-3 px-4 text-white font-bold">{proj.year}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Rentals</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-bold">{(proj.rentals/1000).toFixed(0)}K</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">GMV (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-violet-400 font-bold">{proj.gmv}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Revenue (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-green-400 font-bold">{proj.revenue}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Net Profit (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-emerald-400 font-bold">{proj.netProfit}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Owners</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{(proj.owners/1000).toFixed(0)}K</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-300">Renters</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{(proj.renters/1000).toFixed(0)}K</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <div className="space-y-6">
            {roadmapPhases.map((phase, i) => (
              <div key={i} className={`${phase.bgColor} rounded-xl p-6 border-2 ${phase.color}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                      phase.status === 'planned' ? 'bg-green-500' : 'bg-blue-500'
                    }`}>
                      {phase.phase.replace('Phase ', '')}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{phase.phase}: {phase.title}</h3>
                      <span className="text-slate-400 text-sm">{phase.timeline}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    phase.status === 'planned' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {phase.milestones.map((milestone, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className={`w-4 h-4 ${phase.status === 'planned' ? 'text-green-400' : 'text-blue-400'}`} />
                      {milestone}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </main>

      <GlobalFooter />
    </div>
  );
}
