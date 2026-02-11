'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Truck, ShoppingCart, Utensils, Pill, Dog, Sparkle, Wrench, Shirt,
  Tv, Flower2, Cake, UtensilsCrossed, Droplets, Coffee, Moon, Baby,
  Heart, Building2, PartyPopper, Gift, Zap, CheckCircle, Clock,
  Target, TrendingUp, Users, Store, Globe, ArrowRight, Star,
  ChevronDown, ChevronUp, Rocket, Package, MapPin, Timer, Coins,
  Crown, Shield, Phone
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';
import { WasilLogo } from '@/components/CompanyLogos';

// Wasil Vertical Apps
const wasilVerticals = [
  {
    id: 'food',
    name: 'Food & Dining',
    apps: [
      { name: 'Dinezy', arabic: 'داينزي', icon: Utensils, description: 'Restaurant food delivery - local favorites to fine dining', status: 'Q2 2027', features: ['500+ restaurants', 'Real-time tracking', 'Group orders', 'Schedule ahead'] },
      { name: 'Cakezy', arabic: 'كيكزي', icon: Cake, description: 'Bakery & desserts - custom cakes, pastries, sweets', status: 'Q3 2027', features: ['Custom orders', '2-hour delivery', 'Dietary options', 'Party packages'] },
      { name: 'Feastly', arabic: 'فيستلي', icon: UtensilsCrossed, description: 'Premium catering - events, weddings, corporate', status: 'Q1 2028', features: ['Full-service catering', 'Chef consultations', 'Equipment rental', 'Event planning'] },
      { name: 'Savorly', arabic: 'سافورلي', icon: UtensilsCrossed, description: 'Meal kits - recipes with pre-portioned ingredients', status: 'Q2 2028', features: ['Weekly boxes', 'Diet-specific', 'Recipe videos', 'Fresh ingredients'] },
    ],
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
  {
    id: 'grocery',
    name: 'Grocery & Essentials',
    apps: [
      { name: 'Grocify', arabic: 'غروسيفاي', icon: ShoppingCart, description: 'Full grocery delivery - supermarkets to specialty stores', status: 'Q2 2027', features: ['Partner stores', '60-min delivery', 'Fresh guarantee', 'Subscription saves'] },
      { name: 'QuickDrop', arabic: 'كويك دروب', icon: Zap, description: 'Instant 15-30 min delivery for urgent essentials', status: 'Q2 2027', features: ['15-30 minutes', '24/7 available', 'Convenience items', 'Emergency needs'] },
      { name: 'NightOwl', arabic: 'نايت أول', icon: Moon, description: 'Late-night delivery - cravings & essentials after midnight', status: 'Q4 2027', features: ['12am-6am service', 'Night cravings', 'Party supplies', 'Emergency items'] },
      { name: 'AquaFresh', arabic: 'أكوا فريش', icon: Droplets, description: 'Water delivery - bottles, dispensers, subscriptions', status: 'Q3 2027', features: ['5-gallon jugs', 'Dispenser rental', 'Auto-refill', 'Same-day delivery'] },
    ],
    color: 'from-green-500 to-emerald-500',
    textColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    id: 'beverages',
    name: 'Beverages',
    apps: [
      { name: 'Brewzy', arabic: 'بروزي', icon: Coffee, description: 'Specialty coffee & tea - beans, brewing gear, subscriptions', status: 'Q3 2027', features: ['Local roasters', 'Equipment delivery', 'Coffee subscriptions', 'Brewing guides'] },
      { name: 'IceColdz', arabic: 'آيس كولدز', icon: Droplets, description: 'Cold beverages - fresh juices, smoothies, ice cream', status: 'Q4 2027', features: ['Fresh pressed', 'Custom blends', 'Frozen treats', 'Party packs'] },
    ],
    color: 'from-amber-500 to-orange-500',
    textColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
  },
  {
    id: 'health',
    name: 'Health & Pharmacy',
    apps: [
      { name: 'MediEarn', arabic: 'ميدي إيرن', icon: Pill, description: 'Pharmacy delivery - prescriptions, OTC, health products', status: 'Q2 2027', features: ['Licensed pharmacies', 'Prescription upload', 'Chronic refills', 'Health products'] },
      { name: 'Seniorly', arabic: 'سينيورلي', icon: Heart, description: 'Senior care delivery - medical supplies, mobility aids', status: 'Q2 2028', features: ['Medical equipment', 'Companion visits', 'Medication reminders', 'Wellness checks'] },
    ],
    color: 'from-red-500 to-pink-500',
    textColor: 'text-red-400',
    bgColor: 'bg-red-500/10',
  },
  {
    id: 'beauty',
    name: 'Beauty & Wellness',
    apps: [
      { name: 'Glowzy', arabic: 'غلوزي', icon: Sparkle, description: 'Beauty services at home - salon, spa, grooming', status: 'Q3 2027', features: ['At-home services', 'Product delivery', 'Subscription boxes', 'Pro stylists'] },
    ],
    color: 'from-pink-500 to-rose-500',
    textColor: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
  },
  {
    id: 'home',
    name: 'Home Services',
    apps: [
      { name: 'CleanEZ', arabic: 'كلين إي زد', icon: Sparkle, description: 'Home cleaning - regular, deep clean, move-in/out', status: 'Q3 2027', features: ['Verified cleaners', 'Same-day booking', 'Supplies included', 'Recurring plans'] },
      { name: 'Handyzy', arabic: 'هاندي زي', icon: Wrench, description: 'Home repairs - plumbing, electrical, AC, handyman', status: 'Q4 2027', features: ['Certified pros', 'Transparent pricing', 'Warranty included', 'Emergency service'] },
      { name: 'Sparklean', arabic: 'سباركلين', icon: Shirt, description: 'Laundry & dry cleaning - pickup, wash, fold, deliver', status: 'Q3 2027', features: ['Free pickup', 'Express service', 'Eco-friendly', 'Garment tracking'] },
    ],
    color: 'from-blue-500 to-cyan-500',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    id: 'shopping',
    name: 'Shopping & Retail',
    apps: [
      { name: 'Stylezy', arabic: 'ستايلزي', icon: Shirt, description: 'Fashion delivery - clothing, shoes, accessories from malls', status: 'Q4 2027', features: ['Mall partners', 'Try before buy', 'Free returns', 'Style boxes'] },
      { name: 'TechDrop', arabic: 'تك دروب', icon: Tv, description: 'Electronics delivery - gadgets, accessories, repairs', status: 'Q1 2028', features: ['Official retailers', 'Setup service', 'Warranty tracked', 'Trade-ins'] },
      { name: 'Bloominz', arabic: 'بلومينز', icon: Flower2, description: 'Flowers & plants - bouquets, arrangements, indoor plants', status: 'Q4 2027', features: ['Same-day delivery', 'Custom arrangements', 'Plant subscriptions', 'Care guides'] },
      { name: 'GiftWrap', arabic: 'غيفت راب', icon: Gift, description: 'Gift delivery - curated gifts, wrapping, personal messages', status: 'Q4 2027', features: ['Curated collections', 'Gift wrapping', 'Personalization', 'Scheduled delivery'] },
    ],
    color: 'from-violet-500 to-purple-500',
    textColor: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
  },
  {
    id: 'kids-pets',
    name: 'Kids & Pets',
    apps: [
      { name: 'Kidszone', arabic: 'كيدز زون', icon: Baby, description: 'Kids products - toys, clothes, school supplies, baby items', status: 'Q1 2028', features: ['Age-appropriate', 'School supplies', 'Baby essentials', 'Party supplies'] },
      { name: 'PetPals', arabic: 'بت بالز', icon: Dog, description: 'Pet supplies & services - food, toys, vet booking, grooming', status: 'Q4 2027', features: ['Pet food delivery', 'Vet appointments', 'Grooming at home', 'Pet sitting'] },
    ],
    color: 'from-yellow-500 to-amber-500',
    textColor: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
  },
  {
    id: 'corporate',
    name: 'Corporate & Events',
    apps: [
      { name: 'OfficeEats', arabic: 'أوفيس إيتس', icon: Building2, description: 'Corporate catering - office lunches, meetings, team events', status: 'Q1 2028', features: ['Bulk orders', 'Scheduled delivery', 'Corporate billing', 'Menu variety'] },
      { name: 'PartyPack', arabic: 'بارتي باك', icon: PartyPopper, description: 'Event supplies - decorations, disposables, equipment rental', status: 'Q4 2027', features: ['Party themes', 'Equipment rental', 'Setup service', 'Same-day available'] },
    ],
    color: 'from-indigo-500 to-blue-500',
    textColor: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
  },
];

// Revenue model
const revenueModel = [
  { source: 'Delivery Fees', percentage: 35, description: 'Distance-based delivery charges' },
  { source: 'Merchant Commission', percentage: 40, description: '15-25% commission on orders' },
  { source: 'Wasil+ Subscriptions', percentage: 15, description: 'Premium delivery membership' },
  { source: 'Advertising', percentage: 10, description: 'Featured placements, promotions' },
];

// Wasil+ Benefits
const wasilPlusBenefits = [
  { benefit: 'Free Delivery', description: 'Unlimited free delivery on orders over 50 AED', icon: Truck },
  { benefit: 'Priority Dispatch', description: 'First in queue for faster delivery', icon: Zap },
  { benefit: 'Exclusive Deals', description: 'Member-only discounts and offers', icon: Star },
  { benefit: '24/7 Support', description: 'Dedicated support line for members', icon: Phone },
  { benefit: '2X Coins', description: 'Double Nuqta coins on all orders', icon: Coins },
  { benefit: 'No Surge', description: 'Protected from peak hour pricing', icon: Shield },
];

// GCC Expansion
const gccLaunch = [
  { country: 'UAE', flag: '🇦🇪', status: 'Active', timeline: 'Now', cities: 'Dubai, Abu Dhabi, Sharjah' },
  { country: 'Saudi Arabia', flag: '🇸🇦', status: 'Phase 2', timeline: 'Q3 2027', cities: 'Riyadh, Jeddah, Dammam' },
  { country: 'Qatar', flag: '🇶🇦', status: 'Phase 2', timeline: 'Q4 2027', cities: 'Doha' },
  { country: 'Kuwait', flag: '🇰🇼', status: 'Phase 3', timeline: 'Q2 2028', cities: 'Kuwait City' },
  { country: 'Bahrain', flag: '🇧🇭', status: 'Phase 3', timeline: 'Q2 2028', cities: 'Manama' },
  { country: 'Oman', flag: '🇴🇲', status: 'Phase 3', timeline: 'Q3 2028', cities: 'Muscat' },
];

// Financial projections
const projections = [
  { year: 'Y1', orders: '500K', gmv: '50M AED', revenue: '10M AED', drivers: '2,000' },
  { year: 'Y2', orders: '2M', gmv: '200M AED', revenue: '40M AED', drivers: '8,000' },
  { year: 'Y3', orders: '5M', gmv: '500M AED', revenue: '100M AED', drivers: '20,000' },
  { year: 'Y5', orders: '15M', gmv: '1.5B AED', revenue: '300M AED', drivers: '50,000' },
];

export default function WasilVerticalsPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('food');
  const [activeTab, setActiveTab] = useState('verticals');

  const tabs = [
    { id: 'verticals', label: '24 Verticals', icon: Package },
    { id: 'membership', label: 'Wasil+', icon: Crown },
    { id: 'gcc', label: 'GCC Expansion', icon: Globe },
    { id: 'financials', label: 'Financials', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-orange-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/wasil" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Wasil Hub
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-xl shadow-orange-500/30">
              <WasilLogo size={48} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">
                Wasil <span className="text-orange-400">Lifestyle</span>
              </h1>
              <p className="text-orange-400 text-lg">24 Vertical Apps • One Delivery Ecosystem</p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            From food and groceries to beauty, home services, and corporate catering -
            Wasil Lifestyle covers every delivery need with specialized vertical apps,
            all powered by a unified delivery network.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-orange-500/10 rounded-xl p-4 text-center border border-orange-500/30">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400">24</div>
              <div className="text-xs sm:text-sm text-slate-400">Vertical Apps</div>
            </div>
            <div className="bg-green-500/10 rounded-xl p-4 text-center border border-green-500/30">
              <div className="text-2xl sm:text-3xl font-bold text-green-400">60 min</div>
              <div className="text-xs sm:text-sm text-slate-400">Avg Delivery</div>
            </div>
            <div className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/30">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400">6</div>
              <div className="text-xs sm:text-sm text-slate-400">GCC Countries</div>
            </div>
            <div className="bg-[#c9a227]/10 rounded-xl p-4 text-center border border-[#c9a227]/30">
              <div className="text-2xl sm:text-3xl font-bold text-[#c9a227]">2X</div>
              <div className="text-xs sm:text-sm text-slate-400">Coins for Nuqta+</div>
            </div>
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
                    ? 'bg-orange-500 text-white'
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

        {/* Verticals Tab */}
        {activeTab === 'verticals' && (
          <div className="space-y-4 sm:space-y-6">
            {wasilVerticals.map((category) => (
              <div
                key={category.id}
                className={`${category.bgColor} border-2 rounded-xl overflow-hidden`}
                style={{ borderColor: category.textColor.includes('orange') ? '#f97316' : category.textColor.includes('green') ? '#22c55e' : category.textColor.includes('amber') ? '#f59e0b' : category.textColor.includes('red') ? '#ef4444' : category.textColor.includes('pink') ? '#ec4899' : category.textColor.includes('blue') ? '#3b82f6' : category.textColor.includes('violet') ? '#8b5cf6' : category.textColor.includes('yellow') ? '#eab308' : '#6366f1' }}
              >
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <Package className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-base sm:text-lg font-bold ${category.textColor}`}>
                        {category.name}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm">{category.apps.length} apps in this category</p>
                    </div>
                  </div>
                  {expandedCategory === category.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                {expandedCategory === category.id && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.apps.map((app, i) => (
                        <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                          <div className="flex items-start gap-3 mb-3">
                            <div className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                              <app.icon className={`w-5 h-5 ${category.textColor}`} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="text-white font-bold">{app.name}</h4>
                                <span className="text-slate-500 text-xs">{app.arabic}</span>
                              </div>
                              <p className="text-slate-400 text-sm mt-1">{app.description}</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {app.features.map((feature, j) => (
                              <span key={j} className={`text-xs px-2 py-1 rounded ${category.bgColor} ${category.textColor}`}>
                                {feature}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="inline-flex items-center gap-1 text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                              <Clock size={12} /> {app.status}
                            </span>
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

        {/* Membership Tab */}
        {activeTab === 'membership' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/10 rounded-xl p-6 sm:p-8 border-2 border-orange-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <Crown className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Wasil+ Membership</h2>
                  <p className="text-orange-400">Included free with Nuqta+ or 29 AED/month standalone</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {wasilPlusBenefits.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-orange-500/30">
                    <item.icon className="w-8 h-8 text-orange-400 mb-3" />
                    <h4 className="text-white font-bold mb-1">{item.benefit}</h4>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Model */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                Revenue Model
              </h3>
              <div className="space-y-4">
                {revenueModel.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white font-medium">{item.source}</span>
                      <span className="text-orange-400 font-bold">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{item.description}</p>
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
                GCC Expansion Roadmap
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {gccLaunch.map((country, i) => (
                  <div key={i} className={`bg-slate-900/50 rounded-xl p-5 border-2 ${
                    country.status === 'Active' ? 'border-emerald-500' :
                    country.status === 'Phase 2' ? 'border-blue-500' : 'border-purple-500'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{country.flag}</span>
                        <h4 className="font-bold text-white">{country.country}</h4>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        country.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' :
                        country.status === 'Phase 2' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {country.status}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Timeline</span>
                        <span className="text-white font-medium">{country.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Cities</span>
                        <span className="text-white font-medium">{country.cities}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Financials Tab */}
        {activeTab === 'financials' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-6 border-2 border-green-500">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-green-400" />
                Financial Projections
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400">Year</th>
                      <th className="text-right py-3 px-4 text-slate-400">Orders</th>
                      <th className="text-right py-3 px-4 text-slate-400">GMV</th>
                      <th className="text-right py-3 px-4 text-slate-400">Revenue</th>
                      <th className="text-right py-3 px-4 text-slate-400">Drivers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projections.map((row, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white font-bold">{row.year}</td>
                        <td className="py-3 px-4 text-right text-slate-300">{row.orders}</td>
                        <td className="py-3 px-4 text-right text-orange-400">{row.gmv}</td>
                        <td className="py-3 px-4 text-right text-green-400">{row.revenue}</td>
                        <td className="py-3 px-4 text-right text-blue-400">{row.drivers}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Navigation */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/wasil" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-400 transition-colors">
              <Truck className="w-5 h-5" /> Wasil Hub
            </Link>
            <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-700 transition-colors">
              <Package className="w-5 h-5" /> Full Ecosystem
            </Link>
            <Link href="/ecosystem" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-700 transition-colors">
              <ArrowRight className="w-5 h-5" /> Ecosystem Overview
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
