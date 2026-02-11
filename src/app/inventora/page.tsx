'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Layers, Warehouse, Truck, Package, BarChart3, RefreshCw,
  MapPin, Timer, AlertTriangle, CheckCircle, XCircle, ChevronDown,
  ChevronUp, Database, Activity, ArrowRight, Boxes, ClipboardList,
  Scan, Settings, TrendingUp, DollarSign, Globe, ShoppingCart
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Inventora Core Systems
const inventoraSystems = [
  {
    id: 'warehouse',
    name: 'Warehouse Management',
    icon: Warehouse,
    color: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500',
    description: 'Multi-warehouse inventory management across GCC',
    features: [
      'Multi-location tracking',
      'Zone-based organization',
      'Bin/rack management',
      'Pick, pack, ship workflows',
      'Real-time stock visibility',
      'Cycle counting',
    ],
    metrics: ['10+ warehouses', '99.9% accuracy', 'Real-time sync'],
  },
  {
    id: 'procurement',
    name: 'Procurement Hub',
    icon: ClipboardList,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
    description: 'Automated procurement and vendor management',
    features: [
      'Purchase order automation',
      'Vendor scoring',
      'Price comparison',
      'Contract management',
      'Approval workflows',
      'Spend analytics',
    ],
    metrics: ['500+ vendors', '30% cost savings', 'Auto-PO'],
  },
  {
    id: 'replenishment',
    name: 'Auto-Replenishment',
    icon: RefreshCw,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500',
    description: 'AI-powered demand forecasting and auto-ordering',
    features: [
      'ML demand forecasting',
      'Safety stock optimization',
      'Auto reorder points',
      'Seasonal adjustments',
      'Lead time calculation',
      'Supplier lead time tracking',
    ],
    metrics: ['95% forecast accuracy', '40% less stockouts', 'AI-powered'],
  },
  {
    id: 'logistics',
    name: 'Logistics Integration',
    icon: Truck,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500',
    description: 'Multi-carrier logistics and last-mile delivery',
    features: [
      '20+ carrier integrations',
      'Route optimization',
      'Real-time tracking',
      'Delivery scheduling',
      'Returns management',
      'Cold chain support',
    ],
    metrics: ['20+ carriers', '98% on-time', 'Live tracking'],
  },
  {
    id: 'tracking',
    name: 'Inventory Tracking',
    icon: Scan,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500',
    description: 'Barcode, QR, and RFID tracking across all SKUs',
    features: [
      'Barcode scanning',
      'QR code generation',
      'RFID integration',
      'Batch/lot tracking',
      'Serial number tracking',
      'Expiry management',
    ],
    metrics: ['10M+ SKUs', 'Real-time', 'Multi-method'],
  },
  {
    id: 'analytics',
    name: 'Supply Chain Analytics',
    icon: BarChart3,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500',
    description: 'Deep insights into inventory performance',
    features: [
      'Inventory turnover',
      'Dead stock alerts',
      'Margin analysis',
      'Vendor performance',
      'Demand patterns',
      'Cost optimization',
    ],
    metrics: ['Real-time dashboards', 'Predictive alerts', 'Custom reports'],
  },
];

// Ownership details
const ownership = {
  rtmnShare: '100%',
  partnersShare: '0%',
  investment: '⭐⭐⭐',
  revenue: '⭐⭐⭐⭐',
  risk: '⭐⭐',
  purpose: 'Warehousing, procurement, auto-replenishment - core supply chain',
};

// Controls & Does Not Do
const controls = [
  'Warehousing operations',
  'Procurement & PO management',
  'Auto-replenishment logic',
  'Logistics integrations',
  'Inventory accuracy',
  'Supply chain visibility',
];

const doesNotDo = [
  { item: 'Demand generation', reason: 'Consumer apps drive demand' },
  { item: 'Marketing', reason: 'Adzy handles campaigns' },
  { item: 'Merchant data', reason: 'BizOne is source of truth' },
  { item: 'Pricing rules', reason: 'HQ sets via Rabtul' },
];

// Data Flow
const dataFlow = {
  consumes: ['Inventory data ← BizOne', 'Payments ← Finance', 'Rules ← Rabtul', 'Sales data ← All apps'],
  produces: ['Inventory fulfillment', 'Stock data', 'Reorder signals', 'Logistics updates'],
};

// Warehouse Locations
const warehouseLocations = [
  { city: 'Dubai', country: 'UAE', type: 'Central Hub', size: '50,000 sqft' },
  { city: 'Abu Dhabi', country: 'UAE', type: 'Regional', size: '25,000 sqft' },
  { city: 'Riyadh', country: 'KSA', type: 'Central Hub', size: '40,000 sqft' },
  { city: 'Jeddah', country: 'KSA', type: 'Regional', size: '20,000 sqft' },
  { city: 'Doha', country: 'Qatar', type: 'Regional', size: '15,000 sqft' },
  { city: 'Manama', country: 'Bahrain', type: 'Local', size: '10,000 sqft' },
];

export default function InventoraPage() {
  const [expandedSystem, setExpandedSystem] = useState<string | null>('warehouse');

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-teal-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-xl shadow-teal-500/30">
              <Layers className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl font-black text-white">
                  Inventora <span className="text-teal-400">Supply Chain</span>
                </h1>
                <span className="bg-teal-500/20 text-teal-400 text-xs sm:text-sm px-3 py-1 rounded-full font-bold border border-teal-500/50">
                  100% RTMN
                </span>
              </div>
              <p className="text-teal-400 text-lg">إنفنتورا • Warehousing & Supply Chain</p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            Core supply chain infrastructure for the RTMN ecosystem. Warehousing, procurement,
            auto-replenishment, and logistics across GCC. 100% owned by RTMN Holding.
          </p>

          {/* Ownership Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            <div className="bg-teal-500/10 rounded-xl p-4 text-center border border-teal-500/30">
              <div className="text-2xl font-bold text-teal-400">{ownership.rtmnShare}</div>
              <div className="text-xs text-slate-400">RTMN Share</div>
            </div>
            <div className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/30">
              <div className="text-2xl font-bold text-blue-400">{inventoraSystems.length}</div>
              <div className="text-xs text-slate-400">Core Systems</div>
            </div>
            <div className="bg-purple-500/10 rounded-xl p-4 text-center border border-purple-500/30">
              <div className="text-2xl font-bold text-purple-400">{warehouseLocations.length}</div>
              <div className="text-xs text-slate-400">Warehouses</div>
            </div>
            <div className="bg-orange-500/10 rounded-xl p-4 text-center border border-orange-500/30">
              <div className="text-2xl font-bold text-orange-400">20+</div>
              <div className="text-xs text-slate-400">Carriers</div>
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
                <CheckCircle className="w-5 h-5" /> Inventora Controls
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

      {/* Main Content - Core Systems */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h2 className="text-xl font-bold text-white mb-6">{inventoraSystems.length} Core Supply Chain Systems</h2>

        <div className="space-y-4 sm:space-y-6">
          {inventoraSystems.map((system) => (
            <div
              key={system.id}
              className={`${system.bgColor} border-2 ${system.borderColor} rounded-xl overflow-hidden`}
            >
              <button
                onClick={() => setExpandedSystem(expandedSystem === system.id ? null : system.id)}
                className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${system.bgColor} flex items-center justify-center border ${system.borderColor}`}>
                    <system.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${system.color}`} />
                  </div>
                  <div>
                    <h3 className={`text-base sm:text-xl font-bold ${system.color}`}>
                      {system.name}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-1">{system.description}</p>
                  </div>
                </div>
                {expandedSystem === system.id ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {expandedSystem === system.id && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <h4 className="text-white font-bold mb-3">Features</h4>
                      <ul className="space-y-1">
                        {system.features.map((feature, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                            <CheckCircle className={`w-4 h-4 ${system.color} flex-shrink-0`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <h4 className="text-white font-bold mb-3">Metrics</h4>
                      <div className="flex flex-wrap gap-2">
                        {system.metrics.map((metric, i) => (
                          <span key={i} className={`text-sm px-3 py-1 rounded-lg ${system.bgColor} ${system.color} border border-current`}>
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Warehouse Locations */}
        <div className="mt-8 bg-teal-500/10 rounded-xl p-6 border border-teal-500/30">
          <h3 className="text-lg font-bold text-teal-400 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5" /> GCC Warehouse Network
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {warehouseLocations.map((location, i) => (
              <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-teal-500/30">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-bold">{location.city}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    location.type === 'Central Hub'
                      ? 'bg-teal-500/20 text-teal-400'
                      : location.type === 'Regional'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-slate-700/50 text-slate-400'
                  }`}>
                    {location.type}
                  </span>
                </div>
                <p className="text-slate-400 text-sm">{location.country}</p>
                <p className="text-teal-400 text-sm font-medium mt-1">{location.size}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Flow */}
        <div className="mt-8 bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-teal-400" /> Data Flow
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
            <Link href="/nextabizz" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-400 transition-colors">
              <Package className="w-5 h-5" /> NextaBizz
            </Link>
            <Link href="/bizone" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-400 transition-colors">
              <ShoppingCart className="w-5 h-5" /> BizOne
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
