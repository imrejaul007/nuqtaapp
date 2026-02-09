'use client';

import React, { useState } from 'react';
import {
  Target, Eye, TrendingUp, AlertTriangle, Shield, Zap,
  BarChart3, Users, DollarSign, Star, Award, Clock,
  ArrowUp, ArrowDown, Minus, CheckCircle, XCircle,
  Globe, Smartphone, Crown, Gift, ChevronDown, ChevronUp,
  Sword, Flag, MapPin, Activity, Lightbulb, Megaphone
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Competitor Data
const competitors = [
  {
    id: 'entertainer',
    name: 'The Entertainer',
    logo: 'TE',
    color: 'bg-orange-500',
    tagline: '2-for-1 Offers App',
    founded: 2001,
    headquarters: 'Dubai, UAE',
    funding: '$50M+ (acquired by Alshaya)',
    users: '1.5M+',
    merchants: '3,500+',
    model: 'Subscription (AED 495/year)',
    strengths: ['Strong brand recognition', 'Deep merchant relationships', 'Premium positioning', 'Corporate sales'],
    weaknesses: ['Expensive subscription', 'Limited to 2-for-1', 'No loyalty points', 'Aging app experience'],
    pricing: 'AED 495/year subscription',
    recentMoves: ['Launched Cheers app spin-off', 'Expanded to Saudi', 'Added hotel deals'],
    threatLevel: 'HIGH',
    marketShare: 35,
    userOverlap: 28
  },
  {
    id: 'smiles',
    name: 'Smiles UAE',
    logo: 'SM',
    color: 'bg-pink-500',
    tagline: 'Etisalat Rewards Program',
    founded: 2015,
    headquarters: 'Abu Dhabi, UAE',
    funding: 'Etisalat backed',
    users: '2M+',
    merchants: '2,000+',
    model: 'Free + Premium tiers',
    strengths: ['Telco distribution', 'Large user base', 'Points economy', 'Strong F&B deals'],
    weaknesses: ['Etisalat-centric', 'Complex redemption', 'Low engagement', 'Generic experience'],
    pricing: 'Free base, Premium AED 19/mo',
    recentMoves: ['Launched Smiles Pay', 'Added grocery delivery', 'New celebrity partnerships'],
    threatLevel: 'MEDIUM',
    marketShare: 25,
    userOverlap: 18
  },
  {
    id: 'careem',
    name: 'Careem Rewards',
    logo: 'CR',
    color: 'bg-emerald-500',
    tagline: 'Super App Loyalty',
    founded: 2021,
    headquarters: 'Dubai, UAE',
    funding: 'Uber backed',
    users: '3M+',
    merchants: '500+',
    model: 'Transaction-based rewards',
    strengths: ['Super app ecosystem', 'Daily use case', 'Strong tech', 'Brand love'],
    weaknesses: ['Limited merchant variety', 'Ride-focused', 'No standalone loyalty', 'Subscription fatigue'],
    pricing: 'Careem Plus AED 29/mo',
    recentMoves: ['Launched Careem Pay', 'Grocery expansion', 'Food delivery push'],
    threatLevel: 'MEDIUM',
    marketShare: 15,
    userOverlap: 42
  },
  {
    id: 'fazaa',
    name: 'Fazaa',
    logo: 'FZ',
    color: 'bg-red-600',
    tagline: 'Government Employee Benefits',
    founded: 2012,
    headquarters: 'Dubai, UAE',
    funding: 'Government backed',
    users: '400K+',
    merchants: '4,000+',
    model: 'Employer-subsidized',
    strengths: ['Guaranteed user base', 'Deep discounts', 'Wide merchant network', 'Trust'],
    weaknesses: ['Limited to gov employees', 'Dated UX', 'No gamification', 'Passive usage'],
    pricing: 'Free for government employees',
    recentMoves: ['App redesign', 'Added family benefits', 'Healthcare partnerships'],
    threatLevel: 'LOW',
    marketShare: 10,
    userOverlap: 8
  },
  {
    id: 'amber',
    name: 'Amber',
    logo: 'AM',
    color: 'bg-amber-500',
    tagline: 'Restaurant Loyalty',
    founded: 2019,
    headquarters: 'Dubai, UAE',
    funding: '$3M Series A',
    users: '100K+',
    merchants: '200+',
    model: 'Free for users, merchant SaaS',
    strengths: ['Restaurant focus', 'Good UX', 'Strong merchant tools', 'Growing fast'],
    weaknesses: ['Limited categories', 'Small scale', 'Low brand awareness', 'Funding constraints'],
    pricing: 'Free users, AED 299-999/mo merchants',
    recentMoves: ['Raised Series A', 'Added table booking', 'Launched corporate program'],
    threatLevel: 'LOW',
    marketShare: 5,
    userOverlap: 12
  },
];

// Feature Comparison Matrix
const featureComparison = [
  { feature: 'Coin/Points System', nuqta: true, entertainer: false, smiles: true, careem: true, fazaa: false, amber: true },
  { feature: 'Multi-category Rewards', nuqta: true, entertainer: true, smiles: true, careem: false, fazaa: true, amber: false },
  { feature: 'Referral Program', nuqta: true, entertainer: false, smiles: false, careem: true, fazaa: false, amber: true },
  { feature: 'Streak/Gamification', nuqta: true, entertainer: false, smiles: false, careem: false, fazaa: false, amber: false },
  { feature: 'Family Sharing', nuqta: true, entertainer: true, smiles: false, careem: true, fazaa: true, amber: false },
  { feature: 'Merchant Dashboard', nuqta: true, entertainer: true, smiles: true, careem: true, fazaa: false, amber: true },
  { feature: 'Free Tier', nuqta: true, entertainer: false, smiles: true, careem: true, fazaa: true, amber: true },
  { feature: 'Instant Coin Redemption', nuqta: true, entertainer: false, smiles: false, careem: false, fazaa: false, amber: true },
  { feature: 'Split Bill Feature', nuqta: true, entertainer: false, smiles: false, careem: false, fazaa: false, amber: false },
  { feature: 'Gold/Jewelry Category', nuqta: true, entertainer: false, smiles: false, careem: false, fazaa: true, amber: false },
];

// Win/Loss Analysis
const winLossData = {
  wins: [
    { competitor: 'The Entertainer', reason: 'Free tier + no expiry coins', count: 45, avgDealSize: 180 },
    { competitor: 'Smiles', reason: 'Better UX + instant redemption', count: 32, avgDealSize: 120 },
    { competitor: 'Careem Rewards', reason: 'Multi-category vs ride-only', count: 28, avgDealSize: 95 },
    { competitor: 'None (new user)', reason: 'Referral bonus', count: 156, avgDealSize: 45 },
  ],
  losses: [
    { competitor: 'The Entertainer', reason: 'Brand trust + established', count: 23, issue: 'Need more premium positioning' },
    { competitor: 'Smiles', reason: 'Telco bundle included', count: 18, issue: 'Can\'t compete with free' },
    { competitor: 'Careem Rewards', reason: 'Already using Careem daily', count: 15, issue: 'Super app stickiness' },
  ],
  winRate: 72,
  avgDealValue: 112,
};

// Market Intelligence Alerts
const marketAlerts = [
  { date: '2024-05-28', competitor: 'The Entertainer', type: 'Product', alert: 'Launched "Entertainer Solo" at AED 195/year - direct threat to our pricing', severity: 'HIGH' },
  { date: '2024-05-25', competitor: 'Smiles', type: 'Partnership', alert: 'Signed exclusive deal with Alshaya Group (Starbucks, P.F. Chang\'s)', severity: 'MEDIUM' },
  { date: '2024-05-22', competitor: 'Careem', type: 'Feature', alert: 'Added "Careem Coins" cashback on all food orders', severity: 'MEDIUM' },
  { date: '2024-05-18', competitor: 'Amber', type: 'Funding', alert: 'Raised $3M Series A, planning expansion to 500 restaurants', severity: 'LOW' },
  { date: '2024-05-15', competitor: 'Fazaa', type: 'Expansion', alert: 'Opening to private sector employees in select companies', severity: 'MEDIUM' },
];

// Battle Cards
const battleCards = [
  {
    competitor: 'The Entertainer',
    positioning: 'Premium 2-for-1 deals for restaurants and entertainment',
    keyDifferentiators: [
      'Nuqta: Earn rewards on EVERY purchase, not just 2-for-1',
      'Nuqta: Free tier available vs AED 495/year mandatory',
      'Nuqta: Coins never expire with Nuqta+',
      'Nuqta: Includes Gold & Jewelry category (high-value)'
    ],
    commonObjections: [
      { objection: '"Entertainer has better restaurants"', response: 'We have 80% overlap with their top restaurants, plus exclusive Gold merchants' },
      { objection: '"Entertainer is more established"', response: 'We\'re backed by investors and growing 40% month-over-month' },
      { objection: '"I already paid for Entertainer"', response: 'Use both! Our free tier costs nothing, and you\'ll earn on purchases Entertainer doesn\'t cover' },
    ],
    targetAudience: 'Price-sensitive users frustrated with annual commitment'
  },
  {
    competitor: 'Smiles UAE',
    positioning: 'Etisalat-bundled rewards program',
    keyDifferentiators: [
      'Nuqta: Works for ALL carriers (Du users welcome!)',
      'Nuqta: Instant redemption vs complex points conversion',
      'Nuqta: Gamification makes earning fun',
      'Nuqta: Better merchant variety outside F&B'
    ],
    commonObjections: [
      { objection: '"Smiles is free with my Etisalat plan"', response: 'Nuqta is also free! Plus you earn 2x more per AED spent' },
      { objection: '"Smiles has more merchants"', response: 'Quality over quantity - our merchants are hand-picked for best value' },
    ],
    targetAudience: 'Du users, Etisalat users with low Smiles engagement'
  },
];

export default function CompetitiveIntelPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'comparison' | 'winloss' | 'alerts' | 'battlecards'>('overview');
  const [selectedCompetitor, setSelectedCompetitor] = useState<string | null>(null);
  const [expandedBattleCard, setExpandedBattleCard] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Competitor Overview', icon: Eye },
    { id: 'comparison', label: 'Feature Matrix', icon: BarChart3 },
    { id: 'winloss', label: 'Win/Loss Analysis', icon: Target },
    { id: 'alerts', label: 'Market Alerts', icon: AlertTriangle },
    { id: 'battlecards', label: 'Battle Cards', icon: Sword },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Target size={32} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-black">Competitive War Room</h1>
              <p className="text-red-200 mt-1">Real-time competitor monitoring, win/loss analysis & battle cards</p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-red-200 text-sm">Market Share</div>
              <div className="text-2xl sm:text-3xl font-bold">10%</div>
              <div className="text-emerald-300 text-sm flex items-center gap-1 mt-1">
                <ArrowUp size={14} /> +3% this quarter
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-red-200 text-sm">Win Rate</div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400">{winLossData.winRate}%</div>
              <div className="text-emerald-300 text-sm flex items-center gap-1 mt-1">
                <ArrowUp size={14} /> vs competitors
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-red-200 text-sm">Active Threats</div>
              <div className="text-2xl sm:text-3xl font-bold text-amber-400">3</div>
              <div className="text-amber-300 text-sm flex items-center gap-1 mt-1">
                <AlertTriangle size={14} /> Requires attention
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-red-200 text-sm">Competitors Tracked</div>
              <div className="text-2xl sm:text-3xl font-bold">{competitors.length}</div>
              <div className="text-red-300 text-sm flex items-center gap-1 mt-1">
                <Eye size={14} /> Live monitoring
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-red-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Competitor Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Market Share Visual */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BarChart3 className="text-red-600" size={24} />
                UAE Loyalty App Market Share
              </h2>
              <div className="flex h-12 rounded-xl overflow-hidden mb-4">
                {[
                  { name: 'The Entertainer', share: 35, color: 'bg-orange-500' },
                  { name: 'Smiles', share: 25, color: 'bg-pink-500' },
                  { name: 'Careem', share: 15, color: 'bg-emerald-500' },
                  { name: 'Nuqta', share: 10, color: 'bg-[#c9a227]' },
                  { name: 'Fazaa', share: 10, color: 'bg-red-600' },
                  { name: 'Others', share: 5, color: 'bg-gray-400' },
                ].map((item) => (
                  <div
                    key={item.name}
                    className={`${item.color} flex items-center justify-center text-white text-xs font-bold`}
                    style={{ width: `${item.share}%` }}
                  >
                    {item.share >= 10 && `${item.share}%`}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: 'The Entertainer', color: 'bg-orange-500' },
                  { name: 'Smiles', color: 'bg-pink-500' },
                  { name: 'Careem', color: 'bg-emerald-500' },
                  { name: 'Nuqta', color: 'bg-[#c9a227]' },
                  { name: 'Fazaa', color: 'bg-red-600' },
                  { name: 'Others', color: 'bg-gray-400' },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-2 text-sm">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitor Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitors.map((comp) => (
                <div
                  key={comp.id}
                  className={`bg-white rounded-2xl p-6 shadow-xl border-2 cursor-pointer transition-all ${
                    selectedCompetitor === comp.id ? 'border-red-500' : 'border-transparent hover:border-gray-200'
                  }`}
                  onClick={() => setSelectedCompetitor(selectedCompetitor === comp.id ? null : comp.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${comp.color} rounded-xl flex items-center justify-center text-white font-bold text-lg`}>
                        {comp.logo}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{comp.name}</h3>
                        <p className="text-sm text-gray-500">{comp.tagline}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      comp.threatLevel === 'HIGH' ? 'bg-red-100 text-red-700' :
                      comp.threatLevel === 'MEDIUM' ? 'bg-amber-100 text-amber-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {comp.threatLevel}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-xs text-gray-500">Users</div>
                      <div className="font-bold text-gray-900">{comp.users}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Merchants</div>
                      <div className="font-bold text-gray-900">{comp.merchants}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Market Share</div>
                      <div className="font-bold text-gray-900">{comp.marketShare}%</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">User Overlap</div>
                      <div className="font-bold text-red-600">{comp.userOverlap}%</div>
                    </div>
                  </div>

                  {selectedCompetitor === comp.id && (
                    <div className="border-t border-gray-100 pt-4 mt-4 space-y-4">
                      <div>
                        <div className="text-xs text-gray-500 mb-2">Strengths</div>
                        <div className="flex flex-wrap gap-1">
                          {comp.strengths.map((s) => (
                            <span key={s} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-2">Weaknesses</div>
                        <div className="flex flex-wrap gap-1">
                          {comp.weaknesses.map((w) => (
                            <span key={w} className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">{w}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-2">Recent Moves</div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {comp.recentMoves.map((m) => (
                            <li key={m} className="flex items-center gap-2">
                              <Activity size={12} className="text-amber-500" />
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Feature Comparison Tab */}
        {activeTab === 'comparison' && (
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BarChart3 className="text-red-600" size={24} />
              Feature Comparison Matrix
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Feature</th>
                    <th className="text-center py-4 px-4">
                      <div className="w-12 h-12 bg-[#c9a227] rounded-xl flex items-center justify-center text-white font-bold mx-auto">N</div>
                      <div className="text-sm font-bold text-gray-900 mt-2">Nuqta</div>
                    </th>
                    {competitors.slice(0, 5).map((comp) => (
                      <th key={comp.id} className="text-center py-4 px-4">
                        <div className={`w-12 h-12 ${comp.color} rounded-xl flex items-center justify-center text-white font-bold mx-auto`}>
                          {comp.logo}
                        </div>
                        <div className="text-sm font-bold text-gray-900 mt-2">{comp.name.split(' ')[0]}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((row, index) => (
                    <tr key={row.feature} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="py-4 px-4 text-sm font-medium text-gray-700">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        {row.nuqta ? (
                          <CheckCircle className="text-emerald-500 mx-auto" size={24} />
                        ) : (
                          <XCircle className="text-gray-300 mx-auto" size={24} />
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.entertainer ? (
                          <CheckCircle className="text-emerald-500 mx-auto" size={24} />
                        ) : (
                          <XCircle className="text-gray-300 mx-auto" size={24} />
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.smiles ? (
                          <CheckCircle className="text-emerald-500 mx-auto" size={24} />
                        ) : (
                          <XCircle className="text-gray-300 mx-auto" size={24} />
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.careem ? (
                          <CheckCircle className="text-emerald-500 mx-auto" size={24} />
                        ) : (
                          <XCircle className="text-gray-300 mx-auto" size={24} />
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.fazaa ? (
                          <CheckCircle className="text-emerald-500 mx-auto" size={24} />
                        ) : (
                          <XCircle className="text-gray-300 mx-auto" size={24} />
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.amber ? (
                          <CheckCircle className="text-emerald-500 mx-auto" size={24} />
                        ) : (
                          <XCircle className="text-gray-300 mx-auto" size={24} />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-gray-200 bg-gray-100">
                    <td className="py-4 px-4 text-sm font-bold text-gray-900">Total Features</td>
                    <td className="py-4 px-4 text-center font-bold text-2xl text-emerald-600">10</td>
                    <td className="py-4 px-4 text-center font-bold text-xl text-gray-600">3</td>
                    <td className="py-4 px-4 text-center font-bold text-xl text-gray-600">4</td>
                    <td className="py-4 px-4 text-center font-bold text-xl text-gray-600">4</td>
                    <td className="py-4 px-4 text-center font-bold text-xl text-gray-600">3</td>
                    <td className="py-4 px-4 text-center font-bold text-xl text-gray-600">4</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Unique Differentiators */}
            <div className="mt-8 bg-gradient-to-r from-[#c9a227] to-amber-500 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Crown size={20} />
                Nuqta&apos;s Unique Differentiators
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { feature: 'Split Bill Feature', desc: 'Only app that lets friends split and all earn coins' },
                  { feature: 'Gold & Jewelry Category', desc: 'High-value purchases competitors ignore' },
                  { feature: 'Instant Coin Redemption', desc: 'No waiting, no complex conversions' },
                ].map((item) => (
                  <div key={item.feature} className="bg-white/20 rounded-lg p-4">
                    <div className="font-bold">{item.feature}</div>
                    <div className="text-sm text-amber-100 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Win/Loss Analysis Tab */}
        {activeTab === 'winloss' && (
          <div className="space-y-8">
            {/* Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-emerald-600 rounded-2xl p-6 text-white">
                <div className="text-emerald-200 text-sm">Total Wins</div>
                <div className="text-4xl font-black">{winLossData.wins.reduce((s, w) => s + w.count, 0)}</div>
                <div className="text-emerald-200 text-sm mt-2">Last 90 days</div>
              </div>
              <div className="bg-red-600 rounded-2xl p-6 text-white">
                <div className="text-red-200 text-sm">Total Losses</div>
                <div className="text-4xl font-black">{winLossData.losses.reduce((s, l) => s + l.count, 0)}</div>
                <div className="text-red-200 text-sm mt-2">Last 90 days</div>
              </div>
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <div className="text-blue-200 text-sm">Win Rate</div>
                <div className="text-4xl font-black">{winLossData.winRate}%</div>
                <div className="text-blue-200 text-sm mt-2">Above industry avg</div>
              </div>
              <div className="bg-purple-600 rounded-2xl p-6 text-white">
                <div className="text-purple-200 text-sm">Avg Deal Value</div>
                <div className="text-4xl font-black">AED {winLossData.avgDealValue}</div>
                <div className="text-purple-200 text-sm mt-2">Annual LTV</div>
              </div>
            </div>

            {/* Wins */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CheckCircle className="text-emerald-500" size={24} />
                Why We Win
              </h2>
              <div className="space-y-4">
                {winLossData.wins.map((win) => (
                  <div key={win.competitor} className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                    <div className="w-16 text-center">
                      <div className="text-2xl font-black text-emerald-600">{win.count}</div>
                      <div className="text-xs text-emerald-600">wins</div>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900">vs {win.competitor}</div>
                      <div className="text-sm text-gray-600">{win.reason}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-emerald-600">AED {win.avgDealSize}</div>
                      <div className="text-xs text-gray-500">avg LTV</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Losses */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <XCircle className="text-red-500" size={24} />
                Why We Lose (& How to Fix)
              </h2>
              <div className="space-y-4">
                {winLossData.losses.map((loss) => (
                  <div key={loss.competitor} className="flex items-center gap-4 p-4 bg-red-50 rounded-xl border border-red-200">
                    <div className="w-16 text-center">
                      <div className="text-2xl font-black text-red-600">{loss.count}</div>
                      <div className="text-xs text-red-600">losses</div>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900">vs {loss.competitor}</div>
                      <div className="text-sm text-gray-600">{loss.reason}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-amber-600 font-medium flex items-center gap-1">
                        <Lightbulb size={14} />
                        {loss.issue}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Market Alerts Tab */}
        {activeTab === 'alerts' && (
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <AlertTriangle className="text-red-600" size={24} />
              Market Intelligence Alerts
            </h2>

            <div className="space-y-4">
              {marketAlerts.map((alert, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 ${
                    alert.severity === 'HIGH' ? 'border-red-300 bg-red-50' :
                    alert.severity === 'MEDIUM' ? 'border-amber-300 bg-amber-50' :
                    'border-green-300 bg-green-50'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        alert.severity === 'HIGH' ? 'bg-red-200 text-red-700' :
                        alert.severity === 'MEDIUM' ? 'bg-amber-200 text-amber-700' :
                        'bg-green-200 text-green-700'
                      }`}>
                        {alert.severity}
                      </span>
                      <span className="text-sm text-gray-500">{alert.date}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">{alert.competitor}</span>
                        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{alert.type}</span>
                      </div>
                      <p className="text-gray-700 mt-1">{alert.alert}</p>
                    </div>
                    <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800">
                      Respond
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Alert Summary */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-red-600 rounded-xl p-4 text-white">
                <div className="text-red-200 text-sm">High Priority</div>
                <div className="text-3xl font-bold">{marketAlerts.filter(a => a.severity === 'HIGH').length}</div>
                <div className="text-red-200 text-sm mt-1">Needs immediate action</div>
              </div>
              <div className="bg-amber-500 rounded-xl p-4 text-white">
                <div className="text-amber-200 text-sm">Medium Priority</div>
                <div className="text-3xl font-bold">{marketAlerts.filter(a => a.severity === 'MEDIUM').length}</div>
                <div className="text-amber-200 text-sm mt-1">Monitor closely</div>
              </div>
              <div className="bg-green-600 rounded-xl p-4 text-white">
                <div className="text-green-200 text-sm">Low Priority</div>
                <div className="text-3xl font-bold">{marketAlerts.filter(a => a.severity === 'LOW').length}</div>
                <div className="text-green-200 text-sm mt-1">For awareness</div>
              </div>
            </div>
          </div>
        )}

        {/* Battle Cards Tab */}
        {activeTab === 'battlecards' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-6 text-white">
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Sword size={24} />
                Sales Battle Cards
              </h2>
              <p className="text-red-200">Quick reference guides for competitive selling</p>
            </div>

            {battleCards.map((card) => (
              <div key={card.competitor} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div
                  className="p-6 cursor-pointer flex items-center justify-between bg-gray-50"
                  onClick={() => setExpandedBattleCard(expandedBattleCard === card.competitor ? null : card.competitor)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold ${
                      competitors.find(c => c.name === card.competitor)?.color || 'bg-gray-500'
                    }`}>
                      {competitors.find(c => c.name === card.competitor)?.logo || '?'}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">vs {card.competitor}</h3>
                      <p className="text-sm text-gray-500">{card.positioning}</p>
                    </div>
                  </div>
                  {expandedBattleCard === card.competitor ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>

                {expandedBattleCard === card.competitor && (
                  <div className="p-6 space-y-6 border-t border-gray-100">
                    {/* Key Differentiators */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Shield className="text-emerald-500" size={18} />
                        Key Differentiators
                      </h4>
                      <div className="space-y-2">
                        {card.keyDifferentiators.map((diff) => (
                          <div key={diff} className="flex items-start gap-2 p-3 bg-emerald-50 rounded-lg">
                            <CheckCircle size={18} className="text-emerald-500 mt-0.5" />
                            <span className="text-gray-700">{diff}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Common Objections */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Megaphone className="text-blue-500" size={18} />
                        Objection Handling
                      </h4>
                      <div className="space-y-4">
                        {card.commonObjections.map((obj) => (
                          <div key={obj.objection} className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="p-3 bg-red-50">
                              <span className="text-sm font-medium text-red-700">Objection: </span>
                              <span className="text-gray-700">{obj.objection}</span>
                            </div>
                            <div className="p-3 bg-emerald-50">
                              <span className="text-sm font-medium text-emerald-700">Response: </span>
                              <span className="text-gray-700">{obj.response}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-bold text-purple-700 mb-2 flex items-center gap-2">
                        <Target size={18} />
                        Target Audience
                      </h4>
                      <p className="text-gray-700">{card.targetAudience}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <GlobalFooter />
    </div>
  );
}
