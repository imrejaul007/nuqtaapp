'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Package, Factory, Truck, Building2, ShoppingBag, Utensils,
  Hammer, Cpu, Leaf, GraduationCap, Shirt, Calendar, Plane,
  Users, Printer, Scissors, Dumbbell, ChefHat, Store, Car,
  ArrowRight, CheckCircle, XCircle, ChevronDown, ChevronUp,
  Database, Activity, TrendingUp, DollarSign, Briefcase
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// NextaBizz B2B Verticals
const b2bVerticals = [
  {
    id: 'food',
    name: 'FoodMart',
    icon: Utensils,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500',
    description: 'F&B supplies wholesale marketplace',
    features: ['Bulk ingredients', 'Kitchen equipment', 'Packaging supplies', 'Cold chain logistics'],
    status: 'planned',
  },
  {
    id: 'craft',
    name: 'Craftzy',
    icon: Hammer,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500',
    description: 'Artisan & handmade goods B2B',
    features: ['Craft materials', 'Artisan marketplace', 'Custom orders', 'Export support'],
    status: 'planned',
  },
  {
    id: 'tech',
    name: 'TechifyPro',
    icon: Cpu,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
    description: 'Tech & electronics wholesale',
    features: ['IT hardware', 'Electronics parts', 'Tech accessories', 'Bulk devices'],
    status: 'planned',
  },
  {
    id: 'build',
    name: 'Buildzy',
    icon: Building2,
    color: 'text-slate-400',
    bgColor: 'bg-slate-500/10',
    borderColor: 'border-slate-500',
    description: 'Construction & building materials',
    features: ['Raw materials', 'Tools & equipment', 'Safety gear', 'Project supplies'],
    status: 'planned',
  },
  {
    id: 'vendor',
    name: 'VendorLoop',
    icon: Users,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500',
    description: 'Vendor management & sourcing',
    features: ['Vendor discovery', 'RFQ management', 'Contract handling', 'Payment terms'],
    status: 'planned',
  },
  {
    id: 'brand',
    name: 'BrandStack',
    icon: ShoppingBag,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500',
    description: 'Branded merchandise wholesale',
    features: ['Brand licensing', 'Merchandise sourcing', 'Custom branding', 'Distribution'],
    status: 'planned',
  },
  {
    id: 'health',
    name: 'HealthPro',
    icon: Scissors,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500',
    description: 'Healthcare supplies B2B',
    features: ['Medical equipment', 'Pharma wholesale', 'Lab supplies', 'Clinic essentials'],
    status: 'planned',
  },
  {
    id: 'edu',
    name: 'EduMart',
    icon: GraduationCap,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500',
    description: 'Educational supplies marketplace',
    features: ['School supplies', 'Lab equipment', 'Furniture', 'EdTech hardware'],
    status: 'planned',
  },
  {
    id: 'fashion',
    name: 'FashnPro',
    icon: Shirt,
    color: 'text-fuchsia-400',
    bgColor: 'bg-fuchsia-500/10',
    borderColor: 'border-fuchsia-500',
    description: 'Fashion & apparel wholesale',
    features: ['Fabric sourcing', 'Apparel manufacturing', 'Accessories bulk', 'Design services'],
    status: 'planned',
  },
  {
    id: 'agro',
    name: 'AgroMart',
    icon: Leaf,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500',
    description: 'Agriculture & farm supplies',
    features: ['Seeds & fertilizers', 'Farm equipment', 'Irrigation systems', 'Crop protection'],
    status: 'planned',
  },
  {
    id: 'event',
    name: 'EventPro',
    icon: Calendar,
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500',
    description: 'Event supplies & rentals B2B',
    features: ['Event equipment', 'Decor rentals', 'Catering supplies', 'AV equipment'],
    status: 'planned',
  },
  {
    id: 'travel',
    name: 'TravelTrade',
    icon: Plane,
    color: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500',
    description: 'Travel trade B2B platform',
    features: ['Hotel inventory', 'Tour packages', 'Transfer services', 'MICE solutions'],
    status: 'planned',
  },
  {
    id: 'hire',
    name: 'BizHire',
    icon: Briefcase,
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500',
    description: 'B2B staffing & HR services',
    features: ['Temp staffing', 'Contract hiring', 'HR solutions', 'Payroll services'],
    status: 'planned',
  },
  {
    id: 'print',
    name: 'PrintoPro',
    icon: Printer,
    color: 'text-gray-400',
    bgColor: 'bg-gray-500/10',
    borderColor: 'border-gray-500',
    description: 'Printing & packaging B2B',
    features: ['Commercial printing', 'Packaging solutions', 'Marketing materials', 'Labels'],
    status: 'planned',
  },
  {
    id: 'salon',
    name: 'SalonPro',
    icon: Scissors,
    color: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500',
    description: 'Salon & spa supplies',
    features: ['Beauty products', 'Salon equipment', 'Spa supplies', 'Training materials'],
    status: 'planned',
  },
  {
    id: 'gym',
    name: 'GymPro',
    icon: Dumbbell,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500',
    description: 'Fitness equipment B2B',
    features: ['Gym equipment', 'Supplements bulk', 'Sports gear', 'Fitness tech'],
    status: 'planned',
  },
  {
    id: 'restro',
    name: 'RestroPro',
    icon: ChefHat,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500',
    description: 'Restaurant setup & supplies',
    features: ['Kitchen design', 'Equipment setup', 'Menu consulting', 'Staff training'],
    status: 'planned',
  },
  {
    id: 'retail',
    name: 'RetailMart',
    icon: Store,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500',
    description: 'Retail store supplies B2B',
    features: ['Store fixtures', 'POS systems', 'Display solutions', 'Retail tech'],
    status: 'planned',
  },
  {
    id: 'auto',
    name: 'AutoTrade',
    icon: Car,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
    description: 'Automotive parts & services B2B',
    features: ['Auto parts', 'Workshop equipment', 'Lubricants bulk', 'Fleet services'],
    status: 'planned',
  },
  {
    id: 'nextabizz',
    name: 'NextaBizz Core',
    icon: Package,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500',
    description: 'Main B2B marketplace platform',
    features: ['Multi-category', 'Bulk ordering', 'Credit terms', 'Logistics integration'],
    status: 'built',
  },
];

// Ownership details
const ownership = {
  rtmnShare: '80%',
  partnersShare: '20%',
  investment: '⭐⭐⭐⭐',
  revenue: '⭐⭐⭐⭐⭐',
  risk: '⭐⭐',
  purpose: 'B2B supply, vendor relations, bulk pricing, manufacturing partnerships',
};

// Controls & Does Not Do
const controls = [
  'Vendor relations',
  'Bulk pricing',
  'Manufacturing partnerships',
  'Wholesale distribution',
  'B2B credit facilitation',
  'Supply chain visibility',
];

const doesNotDo = [
  { item: 'Retail pricing', reason: 'Consumer apps handle retail' },
  { item: 'User demand', reason: 'Consumer apps drive demand' },
  { item: 'Final settlements', reason: 'RTMN Finance handles' },
  { item: 'Merchant truth', reason: 'BizOne is source of truth' },
];

// Data Flow
const dataFlow = {
  consumes: ['Sales data ← BizOne', 'Credit hooks ← Finance', 'Rules ← Rabtul'],
  produces: ['Bulk inventory', 'Vendor network', 'Manufacturing orders'],
};

export default function NextaBizzPage() {
  const [expandedVertical, setExpandedVertical] = useState<string | null>('nextabizz');

  const totalVerticals = b2bVerticals.length;
  const builtVerticals = b2bVerticals.filter(v => v.status === 'built').length;

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-emerald-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-xl shadow-emerald-500/30">
              <Package className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl font-black text-white">
                  NextaBizz <span className="text-emerald-400">Marketplaces</span>
                </h1>
                <span className="bg-emerald-500/20 text-emerald-400 text-xs sm:text-sm px-3 py-1 rounded-full font-bold border border-emerald-500/50">
                  B2B SUPPLY
                </span>
              </div>
              <p className="text-emerald-400 text-lg">نكستا بيز • B2B Wholesale & Manufacturing</p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            The B2B backbone of the RTMN ecosystem. Vendor relations, bulk pricing,
            manufacturing partnerships across 20 verticals. 80% RTMN / 20% Supply Chain Investors.
          </p>

          {/* Ownership Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            <div className="bg-emerald-500/10 rounded-xl p-4 text-center border border-emerald-500/30">
              <div className="text-2xl font-bold text-emerald-400">{ownership.rtmnShare}</div>
              <div className="text-xs text-slate-400">RTMN Share</div>
            </div>
            <div className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/30">
              <div className="text-2xl font-bold text-blue-400">{totalVerticals}</div>
              <div className="text-xs text-slate-400">B2B Verticals</div>
            </div>
            <div className="bg-purple-500/10 rounded-xl p-4 text-center border border-purple-500/30">
              <div className="text-2xl font-bold text-purple-400">{builtVerticals}</div>
              <div className="text-xs text-slate-400">Built</div>
            </div>
            <div className="bg-orange-500/10 rounded-xl p-4 text-center border border-orange-500/30">
              <div className="text-2xl font-bold text-orange-400">1000+</div>
              <div className="text-xs text-slate-400">Vendor Target</div>
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
                <CheckCircle className="w-5 h-5" /> NextaBizz Controls
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

      {/* Main Content - B2B Verticals */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h2 className="text-xl font-bold text-white mb-6">{totalVerticals} B2B Verticals</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {b2bVerticals.map((vertical) => (
            <div
              key={vertical.id}
              className={`${vertical.bgColor} border ${vertical.borderColor} rounded-xl p-4 cursor-pointer hover:border-opacity-100 transition-all ${
                expandedVertical === vertical.id ? 'ring-2 ring-offset-2 ring-offset-[#0a1628]' : ''
              }`}
              style={{ borderColor: expandedVertical === vertical.id ? 'currentColor' : undefined }}
              onClick={() => setExpandedVertical(expandedVertical === vertical.id ? null : vertical.id)}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg ${vertical.bgColor} flex items-center justify-center border ${vertical.borderColor} flex-shrink-0`}>
                  <vertical.icon className={`w-5 h-5 ${vertical.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`font-bold ${vertical.color}`}>{vertical.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      vertical.status === 'built'
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-slate-700/50 text-slate-400'
                    }`}>
                      {vertical.status}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mt-1">{vertical.description}</p>
                </div>
              </div>

              {expandedVertical === vertical.id && (
                <div className="mt-3 pt-3 border-t border-slate-700/50">
                  <h4 className="text-white text-sm font-medium mb-2">Features</h4>
                  <div className="flex flex-wrap gap-1">
                    {vertical.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-slate-900/50 px-2 py-1 rounded text-slate-300">
                        {feature}
                      </span>
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
            <Activity className="w-5 h-5 text-emerald-400" /> Data Flow
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

        {/* Value Proposition */}
        <div className="mt-8 bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30">
          <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" /> B2B Value Proposition
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-900/50 rounded-lg p-4">
              <DollarSign className="w-8 h-8 text-emerald-400 mb-2" />
              <h4 className="text-white font-bold mb-1">Bulk Discounts</h4>
              <p className="text-slate-400 text-sm">20-40% savings on wholesale orders</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <Truck className="w-8 h-8 text-emerald-400 mb-2" />
              <h4 className="text-white font-bold mb-1">Logistics Integration</h4>
              <p className="text-slate-400 text-sm">End-to-end supply chain visibility</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <Factory className="w-8 h-8 text-emerald-400 mb-2" />
              <h4 className="text-white font-bold mb-1">Manufacturing</h4>
              <p className="text-slate-400 text-sm">Direct factory partnerships</p>
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
            <Link href="/bizone" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-400 transition-colors">
              <Store className="w-5 h-5" /> BizOne
            </Link>
            <Link href="/inventora" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-xl font-bold hover:bg-teal-400 transition-colors">
              <Truck className="w-5 h-5" /> Inventora
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
