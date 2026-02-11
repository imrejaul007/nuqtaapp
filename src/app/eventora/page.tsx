'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar, Users, GraduationCap, Building2, Music, PartyPopper,
  Mic, Trophy, Camera, Ticket, MapPin, Megaphone, Gift, Star,
  ArrowRight, CheckCircle, XCircle, ChevronDown, ChevronUp,
  Database, Activity, Zap, UserPlus, Store, Crown, Heart
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Eventora Products & Programs
const eventoraProducts = [
  {
    id: 'eventora-plus',
    name: 'Eventora+ Platform',
    icon: Calendar,
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500',
    description: 'Main event discovery and ticketing platform integrated with Nuqta ecosystem',
    features: [
      'Event discovery feed',
      'Ticket booking & payment',
      'Earn coins on attendance',
      'Social event sharing',
      'Event reminders',
      'QR check-in',
    ],
    metrics: ['10K+ events', '100K+ attendees', '5x coin multiplier'],
    status: 'planned',
  },
  {
    id: 'z-events',
    name: 'Z-Events',
    icon: PartyPopper,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500',
    description: 'Youth-focused events, concerts, and entertainment experiences',
    features: [
      'Concert ticketing',
      'Festival passes',
      'VIP experiences',
      'Artist meet & greets',
      'After-parties',
      'Music festivals',
    ],
    metrics: ['Gen-Z focus', 'Premium events', 'Exclusive access'],
    status: 'planned',
  },
  {
    id: 'campus-ambassador',
    name: 'Campus Ambassador Program',
    icon: GraduationCap,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
    description: 'University-level acquisition and activation program',
    features: [
      'Student ambassadors',
      'Campus events',
      'Referral rewards',
      'University partnerships',
      'Student discounts',
      'Internship pipeline',
    ],
    metrics: ['50+ universities', '500+ ambassadors', '10K+ signups/month'],
    status: 'planned',
  },
  {
    id: 'society-events',
    name: 'Society Events Platform',
    icon: Building2,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500',
    description: 'Community and residential society event management',
    features: [
      'Society festivals',
      'Community gatherings',
      'Resident activities',
      'Local merchant tie-ups',
      'Neighborhood rewards',
      'Family events',
    ],
    metrics: ['100+ societies', 'Family-focused', 'Local merchants'],
    status: 'planned',
  },
];

// Offline Activation Types
const activationTypes = [
  { name: 'Mall Activations', icon: Store, description: 'Pop-up booths in malls', target: 'Shoppers' },
  { name: 'Campus Events', icon: GraduationCap, description: 'University fests & activities', target: 'Students' },
  { name: 'Society Events', icon: Building2, description: 'Residential community events', target: 'Families' },
  { name: 'Concerts & Festivals', icon: Music, description: 'Entertainment events', target: 'Gen-Z' },
  { name: 'Sports Events', icon: Trophy, description: 'Tournaments & matches', target: 'Sports fans' },
  { name: 'Corporate Events', icon: Mic, description: 'Business conferences', target: 'Professionals' },
];

// Ownership details
const ownership = {
  rtmnShare: '70%',
  partnersShare: '30%',
  investment: '⭐⭐⭐',
  revenue: '⭐⭐⭐⭐',
  risk: '⭐⭐',
  purpose: 'Offline user acquisition, merchant onboarding, community building',
};

// Controls & Does Not Do
const controls = [
  'Event organization',
  'Campus activations',
  'Society programs',
  'Offline acquisition',
  'Community building',
  'Experiential marketing',
];

const doesNotDo = [
  { item: 'Wallet logic', reason: 'Rabtul manages coins' },
  { item: 'Merchant truth', reason: 'BizOne is source of truth' },
  { item: 'User identity', reason: 'Rabtul SSO' },
  { item: 'Campaign rules', reason: 'Adzy manages campaigns' },
];

// Data Flow
const dataFlow = {
  consumes: ['Rewards → Rabtul', 'Merchants ← BizOne', 'Campaigns ← Adzy', 'Rules ← HQ'],
  produces: ['User acquisition', 'Merchant onboarding', 'Event data', 'Engagement metrics'],
};

// Acquisition Metrics
const acquisitionMetrics = [
  { metric: 'Cost per User', value: '50% lower', description: 'vs digital acquisition' },
  { metric: 'User Quality', value: '3x higher', description: 'engagement rate' },
  { metric: 'Retention', value: '60%', description: '30-day retention' },
  { metric: 'Referral Rate', value: '2.5x', description: 'vs app-only users' },
];

export default function EventoraPage() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>('eventora-plus');

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-violet-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-xl shadow-violet-500/30">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl font-black text-white">
                  Eventora+ <span className="text-violet-400">Entertainment</span>
                </h1>
                <span className="bg-violet-500/20 text-violet-400 text-xs sm:text-sm px-3 py-1 rounded-full font-bold border border-violet-500/50">
                  OFFLINE ACQUISITION
                </span>
              </div>
              <p className="text-violet-400 text-lg">إيفنتورا • Events, Campus & Community</p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            Offline acquisition powerhouse for the RTMN ecosystem. Events, campus programs,
            society activations, and experiential marketing. 70% RTMN / 30% Event Partners.
          </p>

          {/* Ownership Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            <div className="bg-violet-500/10 rounded-xl p-4 text-center border border-violet-500/30">
              <div className="text-2xl font-bold text-violet-400">{ownership.rtmnShare}</div>
              <div className="text-xs text-slate-400">RTMN Share</div>
            </div>
            <div className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/30">
              <div className="text-2xl font-bold text-blue-400">{eventoraProducts.length}</div>
              <div className="text-xs text-slate-400">Platforms</div>
            </div>
            <div className="bg-pink-500/10 rounded-xl p-4 text-center border border-pink-500/30">
              <div className="text-2xl font-bold text-pink-400">{activationTypes.length}</div>
              <div className="text-xs text-slate-400">Activation Types</div>
            </div>
            <div className="bg-orange-500/10 rounded-xl p-4 text-center border border-orange-500/30">
              <div className="text-2xl font-bold text-orange-400">50%</div>
              <div className="text-xs text-slate-400">Lower CAC</div>
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
                <CheckCircle className="w-5 h-5" /> Eventora Controls
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
        <h2 className="text-xl font-bold text-white mb-6">{eventoraProducts.length} Event Platforms</h2>

        <div className="space-y-4 sm:space-y-6">
          {eventoraProducts.map((product) => (
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

        {/* Activation Types */}
        <div className="mt-8 bg-violet-500/10 rounded-xl p-6 border border-violet-500/30">
          <h3 className="text-lg font-bold text-violet-400 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5" /> Offline Activation Types
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activationTypes.map((type, i) => (
              <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-violet-500/30">
                <div className="flex items-start gap-3">
                  <type.icon className="w-8 h-8 text-violet-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">{type.name}</h4>
                    <p className="text-slate-400 text-sm">{type.description}</p>
                    <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded bg-violet-500/20 text-violet-400">
                      Target: {type.target}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Acquisition Metrics */}
        <div className="mt-8 bg-[#c9a227]/10 rounded-xl p-6 border border-[#c9a227]/30">
          <h3 className="text-lg font-bold text-[#c9a227] mb-4 flex items-center gap-2">
            <UserPlus className="w-5 h-5" /> Offline vs Digital Acquisition
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {acquisitionMetrics.map((item, i) => (
              <div key={i} className="bg-slate-900/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-[#c9a227]">{item.value}</div>
                <div className="text-white font-medium text-sm">{item.metric}</div>
                <div className="text-slate-400 text-xs mt-1">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Flow */}
        <div className="mt-8 bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-violet-400" /> Data Flow
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
            <Link href="/adzy" className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-xl font-bold hover:bg-pink-400 transition-colors">
              <Megaphone className="w-5 h-5" /> Adzy Media
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
