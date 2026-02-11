'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Megaphone, Target, Users, TrendingUp, BarChart3, Eye,
  Tv, Radio, Newspaper, Smartphone, Globe, MapPin, Video,
  Image, ArrowRight, CheckCircle, XCircle, ChevronDown,
  ChevronUp, Database, Activity, DollarSign, Award, Zap,
  Store, Crown
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Adzy Products & Platforms
const adzyProducts = [
  {
    id: 'merchant-ads',
    name: 'Adzy Merchant Ads Manager',
    icon: Target,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500',
    description: 'Self-serve ad platform for merchants to promote to Nuqta users',
    features: [
      'Campaign creation wizard',
      'Audience targeting',
      'Budget management',
      'A/B testing',
      'Performance analytics',
      'ROI tracking',
    ],
    metrics: ['5K+ merchants', '10M+ impressions/day', '3x avg ROI'],
    status: 'built',
  },
  {
    id: 'hq-console',
    name: 'Adzy HQ Console',
    icon: BarChart3,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500',
    description: 'Central control for all advertising across the ecosystem',
    features: [
      'Revenue dashboards',
      'Fraud detection',
      'Rate card management',
      'Inventory allocation',
      'Publisher controls',
      'Compliance monitoring',
    ],
    metrics: ['Real-time analytics', 'Fraud <0.1%', 'Full audit'],
    status: 'built',
  },
  {
    id: 'influencer',
    name: 'Influencer Marketplace',
    icon: Users,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
    description: 'Connect merchants with verified influencers for campaigns',
    features: [
      'Influencer discovery',
      'Rate comparison',
      'Campaign matching',
      'Performance tracking',
      'Payment escrow',
      'Content approval',
    ],
    metrics: ['1K+ influencers', 'GCC coverage', 'Verified profiles'],
    status: 'planned',
  },
  {
    id: 'media-exchange',
    name: 'Physical + Digital Media Exchange',
    icon: Tv,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500',
    description: 'Buy/sell ad inventory across digital and physical spaces',
    features: [
      'Digital billboards',
      'In-app placements',
      'Mall screens',
      'Transit ads',
      'Event sponsorships',
      'Programmatic buying',
    ],
    metrics: ['500+ placements', 'Real-time bidding', 'Cross-channel'],
    status: 'planned',
  },
];

// Ad Formats
const adFormats = [
  { name: 'In-App Banners', icon: Smartphone, type: 'Digital' },
  { name: 'Push Notifications', icon: Zap, type: 'Digital' },
  { name: 'Sponsored Listings', icon: Store, type: 'Digital' },
  { name: 'Video Ads', icon: Video, type: 'Digital' },
  { name: 'Billboards', icon: Image, type: 'Physical' },
  { name: 'Mall Screens', icon: Tv, type: 'Physical' },
  { name: 'Transit Ads', icon: MapPin, type: 'Physical' },
  { name: 'Event Sponsorships', icon: Award, type: 'Physical' },
];

// Ownership details
const ownership = {
  rtmnShare: '60%',
  partnersShare: '40%',
  investment: '⭐⭐⭐',
  revenue: '⭐⭐⭐⭐⭐',
  risk: '⭐⭐',
  purpose: 'Closed-loop ads, merchant growth, extra revenue stream',
};

// Controls & Does Not Do
const controls = [
  'Campaign tooling',
  'Ad inventory allocation',
  'Attribution logic',
  'Influencer/offline ads',
  'Creative management',
  'Fraud detection',
];

const doesNotDo = [
  { item: 'Wallet credit', reason: 'Rabtul manages wallet' },
  { item: 'Discounts', reason: 'HQ sets discount rules' },
  { item: 'Merchant pricing', reason: 'BizOne controls merchant data' },
  { item: 'User identity', reason: 'Rabtul SSO' },
];

// Data Flow
const dataFlow = {
  consumes: ['Rules ← Rabtul', 'Opt-in ← BizOne', 'ROI data ← BizOne', 'User segments ← Nuqta'],
  produces: ['Campaign visibility', 'Attribution data', 'Ad revenue', 'Performance reports'],
};

export default function AdzyPage() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>('merchant-ads');

  const builtProducts = adzyProducts.filter(p => p.status === 'built').length;

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-pink-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-xl shadow-pink-500/30">
              <Megaphone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl font-black text-white">
                  Adzy <span className="text-pink-400">Media Network</span>
                </h1>
                <span className="bg-pink-500/20 text-pink-400 text-xs sm:text-sm px-3 py-1 rounded-full font-bold border border-pink-500/50">
                  CLOSED-LOOP ADS
                </span>
              </div>
              <p className="text-pink-400 text-lg">أدزي • Merchant Growth & Ad Platform</p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            Closed-loop advertising platform connecting merchants with consumers across the RTMN ecosystem.
            Campaign tooling, influencer marketplace, and physical/digital media exchange.
            60% RTMN / 40% Media Investors.
          </p>

          {/* Ownership Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            <div className="bg-pink-500/10 rounded-xl p-4 text-center border border-pink-500/30">
              <div className="text-2xl font-bold text-pink-400">{ownership.rtmnShare}</div>
              <div className="text-xs text-slate-400">RTMN Share</div>
            </div>
            <div className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/30">
              <div className="text-2xl font-bold text-blue-400">{adzyProducts.length}</div>
              <div className="text-xs text-slate-400">Products</div>
            </div>
            <div className="bg-purple-500/10 rounded-xl p-4 text-center border border-purple-500/30">
              <div className="text-2xl font-bold text-purple-400">{builtProducts}</div>
              <div className="text-xs text-slate-400">Built</div>
            </div>
            <div className="bg-orange-500/10 rounded-xl p-4 text-center border border-orange-500/30">
              <div className="text-2xl font-bold text-orange-400">{adFormats.length}</div>
              <div className="text-xs text-slate-400">Ad Formats</div>
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
                <CheckCircle className="w-5 h-5" /> Adzy Controls
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

      {/* Main Content - Products */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h2 className="text-xl font-bold text-white mb-6">{adzyProducts.length} Ad Products & Platforms</h2>

        <div className="space-y-4 sm:space-y-6">
          {adzyProducts.map((product) => (
            <div
              key={product.id}
              className={`${product.bgColor} border-2 ${product.borderColor} rounded-xl overflow-hidden`}
            >
              <button
                onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${product.bgColor} flex items-center justify-center border ${product.borderColor}`}>
                    <product.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${product.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`text-base sm:text-xl font-bold ${product.color}`}>
                        {product.name}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        product.status === 'built'
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-slate-700/50 text-slate-400'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-1">{product.description}</p>
                  </div>
                </div>
                {expandedProduct === product.id ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {expandedProduct === product.id && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <h4 className="text-white font-bold mb-3">Features</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                            <CheckCircle className={`w-4 h-4 ${product.color} flex-shrink-0`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <h4 className="text-white font-bold mb-3">Metrics</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.metrics.map((metric, i) => (
                          <span key={i} className={`text-sm px-3 py-1 rounded-lg ${product.bgColor} ${product.color} border border-current`}>
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

        {/* Ad Formats */}
        <div className="mt-8 bg-pink-500/10 rounded-xl p-6 border border-pink-500/30">
          <h3 className="text-lg font-bold text-pink-400 mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5" /> Supported Ad Formats
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {adFormats.map((format, i) => (
              <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-pink-500/30 text-center">
                <format.icon className={`w-8 h-8 mx-auto mb-2 ${format.type === 'Digital' ? 'text-blue-400' : 'text-orange-400'}`} />
                <h4 className="text-white font-bold text-sm">{format.name}</h4>
                <span className={`text-xs ${format.type === 'Digital' ? 'text-blue-400' : 'text-orange-400'}`}>
                  {format.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Data Flow */}
        <div className="mt-8 bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-pink-400" /> Data Flow
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

        {/* Revenue Model */}
        <div className="mt-8 bg-[#c9a227]/10 rounded-xl p-6 border border-[#c9a227]/30">
          <h3 className="text-lg font-bold text-[#c9a227] mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5" /> Revenue Model
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-900/50 rounded-lg p-4">
              <TrendingUp className="w-8 h-8 text-[#c9a227] mb-2" />
              <h4 className="text-white font-bold mb-1">CPM/CPC Ads</h4>
              <p className="text-slate-400 text-sm">Per impression & click billing</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <Store className="w-8 h-8 text-[#c9a227] mb-2" />
              <h4 className="text-white font-bold mb-1">Merchant Subscriptions</h4>
              <p className="text-slate-400 text-sm">Premium ad features & analytics</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <Award className="w-8 h-8 text-[#c9a227] mb-2" />
              <h4 className="text-white font-bold mb-1">Influencer Commission</h4>
              <p className="text-slate-400 text-sm">Platform fee on campaigns</p>
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
            <Link href="/nuqta-corp" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227]/80 text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Crown className="w-5 h-5" /> Nuqta Corp
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
