'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Truck, UtensilsCrossed, ShoppingCart, Stethoscope, Sparkles, Home,
  Shirt, Baby, Dog, Gift, Coffee, Wine, ArrowRight, CheckCircle,
  XCircle, ChevronDown, ChevronUp, Package, Zap, Users, Store,
  Crown, Wallet, Database, Activity, Clock, MapPin, Heart, Dumbbell,
  Pill, Scissors, Car, Plane, Flower2, Cake, Pizza, Salad
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Wasil Apps Categories
const wasilCategories = [
  {
    id: 'food',
    name: 'Food & Dining',
    icon: UtensilsCrossed,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500',
    apps: [
      { name: 'Dinezy', description: 'Restaurant discovery & reservations', status: 'built' },
      { name: 'Orderzy', description: 'Food delivery marketplace', status: 'planned' },
      { name: 'Biryanizy', description: 'Biryani & specialty cuisine', status: 'planned' },
      { name: 'Cafezy', description: 'Café & coffee shops', status: 'planned' },
      { name: 'Bakery+', description: 'Bakery & desserts', status: 'planned' },
      { name: 'Mealzy', description: 'Subscription meal boxes', status: 'planned' },
    ],
  },
  {
    id: 'grocery',
    name: 'Grocery & Essentials',
    icon: ShoppingCart,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500',
    apps: [
      { name: 'Grocify', description: 'Full grocery delivery', status: 'built' },
      { name: 'Quickzy', description: '10-min essentials delivery', status: 'planned' },
      { name: 'Farmzy', description: 'Farm-fresh produce direct', status: 'planned' },
      { name: 'Organiczy', description: 'Organic & health foods', status: 'planned' },
      { name: 'Meatzy', description: 'Fresh meat & seafood', status: 'planned' },
    ],
  },
  {
    id: 'beverages',
    name: 'Beverages & Refreshments',
    icon: Coffee,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500',
    apps: [
      { name: 'Sipzy', description: 'Beverage delivery', status: 'planned' },
      { name: 'Juicezy', description: 'Fresh juices & smoothies', status: 'planned' },
      { name: 'Teazy', description: 'Premium tea & karak', status: 'planned' },
      { name: 'Brewzy', description: 'Specialty coffee', status: 'planned' },
    ],
  },
  {
    id: 'health',
    name: 'Health & Wellness',
    icon: Heart,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500',
    apps: [
      { name: 'MediEarn', description: 'Pharmacy & medicine delivery', status: 'built' },
      { name: 'FitEarn', description: 'Fitness & gym rewards', status: 'planned' },
      { name: 'Doctozy', description: 'Doctor consultations', status: 'planned' },
      { name: 'Labzy', description: 'Lab test booking', status: 'planned' },
      { name: 'Vitazy', description: 'Vitamins & supplements', status: 'planned' },
    ],
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    icon: Sparkles,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500',
    apps: [
      { name: 'Glowzy', description: 'Beauty services at home', status: 'built' },
      { name: 'Salonzy', description: 'Salon booking & rewards', status: 'planned' },
      { name: 'Beautyzy', description: 'Beauty products delivery', status: 'planned' },
      { name: 'Nailzy', description: 'Nail care specialists', status: 'planned' },
      { name: 'Barberzy', description: 'Men\'s grooming', status: 'planned' },
    ],
  },
  {
    id: 'home',
    name: 'Home & Services',
    icon: Home,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
    apps: [
      { name: 'Washzy', description: 'Laundry & dry cleaning', status: 'built' },
      { name: 'Maidzy', description: 'Home cleaning services', status: 'planned' },
      { name: 'Fixzy', description: 'Home repairs & maintenance', status: 'planned' },
      { name: 'Movzy', description: 'Movers & packers', status: 'planned' },
      { name: 'Gardenzy', description: 'Gardening & landscaping', status: 'planned' },
    ],
  },
  {
    id: 'shopping',
    name: 'Shopping & Retail',
    icon: Shirt,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500',
    apps: [
      { name: 'Shopazy', description: 'Quick commerce shopping', status: 'built' },
      { name: 'Luxora', description: 'Luxury brands delivery', status: 'planned' },
      { name: 'Royale+', description: 'Premium lifestyle', status: 'planned' },
      { name: 'Giftzy', description: 'Gift delivery & surprises', status: 'planned' },
      { name: 'Flowerzy', description: 'Flower delivery', status: 'planned' },
    ],
  },
  {
    id: 'kids',
    name: 'Kids & Family',
    icon: Baby,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500',
    apps: [
      { name: 'Kidzo', description: 'Kids products & toys', status: 'planned' },
      { name: 'Babyzy', description: 'Baby care essentials', status: 'planned' },
      { name: 'Toyz', description: 'Toy delivery', status: 'planned' },
      { name: 'Parentzy', description: 'Parenting services', status: 'planned' },
    ],
  },
  {
    id: 'pets',
    name: 'Pets & Animals',
    icon: Dog,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500',
    apps: [
      { name: 'Petzy', description: 'Pet supplies delivery', status: 'planned' },
      { name: 'Vetzy', description: 'Vet consultations', status: 'planned' },
      { name: 'Groomzy', description: 'Pet grooming services', status: 'planned' },
      { name: 'Walkzy', description: 'Dog walking & sitting', status: 'planned' },
    ],
  },
];

// Ownership details
const ownership = {
  rtmnShare: '70%',
  partnersShare: '30%',
  investment: '⭐⭐⭐⭐',
  revenue: '⭐⭐⭐⭐⭐',
  risk: '⭐⭐⭐',
  purpose: 'Category-specific demand generation for quick commerce',
};

// Controls & Does Not Do
const controls = [
  'Vertical-specific UX',
  'Category workflows',
  'Order flow optimization',
  'Category-specific features',
  'Localized experience',
  'Category partnerships',
];

const doesNotDo = [
  { item: 'User identity', reason: 'Comes from Rabtul SSO' },
  { item: 'Wallet & coins', reason: 'Managed by Rabtul' },
  { item: 'Merchant data', reason: 'Lives in BizOne only' },
  { item: 'Settlements', reason: 'Handled by RTMN Finance' },
  { item: 'Pricing rules', reason: 'Set by HQ via Rabtul' },
];

// Data Flow
const dataFlow = {
  consumes: ['Wallet ← Rabtul', 'Inventory ← BizOne', 'Offers ← Adzy', 'Rules ← HQ'],
  produces: ['Orders', 'GMV', 'Category insights', 'Demand signals'],
};

export default function WasilAppsPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('food');

  const totalApps = wasilCategories.reduce((acc, cat) => acc + cat.apps.length, 0);
  const builtApps = wasilCategories.reduce((acc, cat) => acc + cat.apps.filter(app => app.status === 'built').length, 0);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-orange-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-xl shadow-orange-500/30">
              <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl font-black text-white">
                  Wasil <span className="text-orange-400">Apps</span>
                </h1>
                <span className="bg-orange-500/20 text-orange-400 text-xs sm:text-sm px-3 py-1 rounded-full font-bold border border-orange-500/50">
                  QUICK COMMERCE
                </span>
              </div>
              <p className="text-orange-400 text-lg">واصل • Quick Commerce & Vertical Delivery</p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            Category-specific demand generation apps for quick commerce. Each vertical optimized
            for its unique workflow - food, grocery, health, beauty, home services, and more.
            70% RTMN / 30% Partners ownership.
          </p>

          {/* Ownership Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            <div className="bg-orange-500/10 rounded-xl p-4 text-center border border-orange-500/30">
              <div className="text-2xl font-bold text-orange-400">{ownership.rtmnShare}</div>
              <div className="text-xs text-slate-400">RTMN Share</div>
            </div>
            <div className="bg-emerald-500/10 rounded-xl p-4 text-center border border-emerald-500/30">
              <div className="text-2xl font-bold text-emerald-400">{totalApps}</div>
              <div className="text-xs text-slate-400">Total Apps</div>
            </div>
            <div className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/30">
              <div className="text-2xl font-bold text-blue-400">{builtApps}</div>
              <div className="text-xs text-slate-400">Built</div>
            </div>
            <div className="bg-purple-500/10 rounded-xl p-4 text-center border border-purple-500/30">
              <div className="text-2xl font-bold text-purple-400">{wasilCategories.length}</div>
              <div className="text-xs text-slate-400">Categories</div>
            </div>
            <div className="bg-[#c9a227]/10 rounded-xl p-4 text-center border border-[#c9a227]/30">
              <div className="text-2xl font-bold text-[#c9a227]">{ownership.revenue}</div>
              <div className="text-xs text-slate-400">Revenue Potential</div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls & Does Not Do */}
      <section className="bg-slate-800/30 border-b border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Controls */}
            <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30">
              <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Wasil Controls
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {controls.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Does NOT Do */}
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Does NOT Own
              </h3>
              <div className="space-y-2">
                {doesNotDo.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium text-sm">{item.item}</span>
                      <span className="text-slate-500 text-xs ml-2">({item.reason})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Category Apps */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h2 className="text-xl font-bold text-white mb-6">{wasilCategories.length} Vertical Categories • {totalApps} Apps</h2>

        <div className="space-y-4 sm:space-y-6">
          {wasilCategories.map((category) => (
            <div
              key={category.id}
              className={`${category.bgColor} border-2 ${category.borderColor} rounded-xl overflow-hidden`}
            >
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${category.bgColor} flex items-center justify-center border ${category.borderColor}`}>
                    <category.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${category.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`text-base sm:text-xl font-bold ${category.color}`}>
                        {category.name}
                      </h3>
                      <span className="bg-slate-900/50 text-slate-400 text-xs px-2 py-0.5 rounded">
                        {category.apps.length} apps
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      {category.apps.filter(a => a.status === 'built').length} built • {category.apps.filter(a => a.status === 'planned').length} planned
                    </p>
                  </div>
                </div>
                {expandedCategory === category.id ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {expandedCategory === category.id && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.apps.map((app, i) => (
                      <div
                        key={i}
                        className={`bg-slate-900/50 rounded-lg p-4 border ${
                          app.status === 'built' ? 'border-emerald-500/50' : 'border-slate-700/50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-bold">{app.name}</h4>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            app.status === 'built'
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : 'bg-slate-700/50 text-slate-400'
                          }`}>
                            {app.status}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm">{app.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Data Flow */}
        <div className="mt-8 bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-orange-400" /> Data Flow
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
              <h4 className="text-blue-400 font-bold mb-3">Consumes From</h4>
              <ul className="space-y-1">
                {dataFlow.consumes.map((item, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-blue-400 rotate-180" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/30">
              <h4 className="text-emerald-400 font-bold mb-3">Produces</h4>
              <ul className="space-y-1">
                {dataFlow.produces.map((item, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Navigation */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Database className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/nuqta-corp" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227]/80 text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Crown className="w-5 h-5" /> Nuqta Corp
            </Link>
            <Link href="/bizone" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-400 transition-colors">
              <Store className="w-5 h-5" /> BizOne
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
