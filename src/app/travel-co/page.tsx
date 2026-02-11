'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Plane, MapPin, Mountain, Car, Ship, Tent, Compass, Camera,
  Sun, Umbrella, ArrowRight, CheckCircle, XCircle, ChevronDown,
  ChevronUp, Globe, Calendar, Users, Wallet, Database, Activity,
  Shield, Star, Hotel, Train, Bike, TreePine, Waves
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Travel & Experience Apps
const travelCategories = [
  {
    id: 'flights',
    name: 'Flights & Aviation',
    icon: Plane,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500',
    apps: [
      { name: 'Airzy', description: 'Flight booking with earn & burn', status: 'built' },
      { name: 'TravoPay', description: 'Travel payments & rewards', status: 'planned' },
      { name: 'Loungezy', description: 'Airport lounge access', status: 'planned' },
      { name: 'Milezy', description: 'Miles & points optimizer', status: 'planned' },
    ],
  },
  {
    id: 'hotels',
    name: 'Hotels & Stays',
    icon: Hotel,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500',
    apps: [
      { name: 'Stayzy', description: 'Hotel booking platform', status: 'planned' },
      { name: 'Resortzy', description: 'Premium resort stays', status: 'planned' },
      { name: 'Hostelzy', description: 'Budget accommodation', status: 'planned' },
      { name: 'Villazy', description: 'Villa & vacation rentals', status: 'planned' },
    ],
  },
  {
    id: 'ground',
    name: 'Ground Transport',
    icon: Car,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
    apps: [
      { name: 'Ridezy', description: 'Airport transfers & rides', status: 'built' },
      { name: 'Rentalzy', description: 'Car rentals with rewards', status: 'planned' },
      { name: 'Chaufzy', description: 'Chauffeur services', status: 'planned' },
      { name: 'Buszy', description: 'Bus & coach booking', status: 'planned' },
    ],
  },
  {
    id: 'weekend',
    name: 'Weekend & Local',
    icon: Sun,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500',
    apps: [
      { name: 'Weekendzy', description: 'Weekend getaway packages', status: 'built' },
      { name: 'Dayzy', description: 'Day trips & experiences', status: 'planned' },
      { name: 'Localzy', description: 'Local tour guides', status: 'planned' },
      { name: 'Picniczy', description: 'Outdoor spots & picnics', status: 'planned' },
    ],
  },
  {
    id: 'adventure',
    name: 'Adventure & Trek',
    icon: Mountain,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500',
    apps: [
      { name: 'Trekzy', description: 'Hiking & trekking trips', status: 'planned' },
      { name: 'Campzy', description: 'Camping experiences', status: 'planned' },
      { name: 'Climbzy', description: 'Rock climbing & mountaineering', status: 'planned' },
      { name: 'Safarizy', description: 'Wildlife & desert safaris', status: 'planned' },
      { name: 'Divzy', description: 'Scuba diving trips', status: 'planned' },
    ],
  },
  {
    id: 'water',
    name: 'Water & Cruise',
    icon: Ship,
    color: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500',
    apps: [
      { name: 'Cruisezy', description: 'Cruise bookings', status: 'planned' },
      { name: 'Yachtzy', description: 'Yacht & boat rentals', status: 'planned' },
      { name: 'Beachzy', description: 'Beach club bookings', status: 'planned' },
      { name: 'Kayakzy', description: 'Kayaking & water sports', status: 'planned' },
    ],
  },
  {
    id: 'eco',
    name: 'Eco & Sustainable',
    icon: TreePine,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500',
    apps: [
      { name: 'GreenTours', description: 'Eco-friendly travel', status: 'planned' },
      { name: 'EcoStay', description: 'Sustainable accommodations', status: 'planned' },
      { name: 'Farmzy', description: 'Farm stay experiences', status: 'planned' },
      { name: 'Wildzy', description: 'Wildlife conservation trips', status: 'planned' },
    ],
  },
  {
    id: 'social',
    name: 'Social & Community',
    icon: Users,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500',
    apps: [
      { name: 'AdventureMeet', description: 'Travel buddy matching', status: 'planned' },
      { name: 'TrailMaps', description: 'Community trail sharing', status: 'planned' },
      { name: 'TrekRent', description: 'Gear rental marketplace', status: 'planned' },
      { name: 'Tourizy', description: 'Local host experiences', status: 'planned' },
    ],
  },
];

// Ownership details
const ownership = {
  rtmnShare: '60%',
  partnersShare: '40%',
  investment: '⭐⭐⭐⭐',
  revenue: '⭐⭐⭐⭐⭐',
  risk: '⭐⭐',
  purpose: 'Regulated travel & tourism with high-value bookings',
};

// Controls & Does Not Do
const controls = [
  'Regulated partnerships',
  'Airport/travel workflows',
  'Tourism compliance',
  'High-value bookings',
  'Travel-specific UX',
  'Aviation partnerships',
];

const doesNotDo = [
  { item: 'Core wallet', reason: 'Managed by Rabtul' },
  { item: 'User identity', reason: 'SSO from Rabtul' },
  { item: 'Commission rules', reason: 'Set by HQ' },
  { item: 'Merchant data', reason: 'Lives in BizOne' },
];

// Compliance Requirements
const compliance = [
  'ATOL/IATA regulations',
  'Tourism authority licenses',
  'Aviation safety standards',
  'Cross-border data handling',
  'Travel insurance integration',
  'GCC tourism compliance',
];

export default function TravelCoPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('flights');

  const totalApps = travelCategories.reduce((acc, cat) => acc + cat.apps.length, 0);
  const builtApps = travelCategories.reduce((acc, cat) => acc + cat.apps.filter(app => app.status === 'built').length, 0);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-cyan-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-xl shadow-cyan-500/30">
              <Plane className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl font-black text-white">
                  Travel, Trek & <span className="text-cyan-400">Experience</span>
                </h1>
                <span className="bg-cyan-500/20 text-cyan-400 text-xs sm:text-sm px-3 py-1 rounded-full font-bold border border-cyan-500/50">
                  REGULATED TRAVEL
                </span>
              </div>
              <p className="text-cyan-400 text-lg">سفر ومغامرة • Airzy Aviation Tech</p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            Regulated travel & tourism company with extra compliance layer. High-value bookings
            for flights, hotels, adventures, and experiences. 60% RTMN / 40% Aviation Partners.
          </p>

          {/* Ownership Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            <div className="bg-cyan-500/10 rounded-xl p-4 text-center border border-cyan-500/30">
              <div className="text-2xl font-bold text-cyan-400">{ownership.rtmnShare}</div>
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
              <div className="text-2xl font-bold text-purple-400">{travelCategories.length}</div>
              <div className="text-xs text-slate-400">Categories</div>
            </div>
            <div className="bg-[#c9a227]/10 rounded-xl p-4 text-center border border-[#c9a227]/30">
              <div className="text-2xl font-bold text-[#c9a227]">{ownership.revenue}</div>
              <div className="text-xs text-slate-400">Revenue Potential</div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls & Compliance */}
      <section className="bg-slate-800/30 border-b border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Controls */}
            <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30">
              <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Controls
              </h3>
              <ul className="space-y-2">
                {controls.map((item, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance */}
            <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30">
              <h3 className="text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" /> Compliance Layer
              </h3>
              <ul className="space-y-2">
                {compliance.map((item, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                    <Shield className="w-3 h-3 text-yellow-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Does NOT Do */}
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Does NOT Own
              </h3>
              <ul className="space-y-2">
                {doesNotDo.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium text-sm">{item.item}</span>
                      <span className="text-slate-500 text-xs block">{item.reason}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Travel Apps */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h2 className="text-xl font-bold text-white mb-6">{travelCategories.length} Categories • {totalApps} Travel Apps</h2>

        <div className="space-y-4 sm:space-y-6">
          {travelCategories.map((category) => (
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

        {/* GCC Market Focus */}
        <div className="mt-8 bg-[#c9a227]/10 rounded-xl p-6 border border-[#c9a227]/30">
          <h3 className="text-lg font-bold text-[#c9a227] mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5" /> GCC Market Focus
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {['UAE', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Kuwait', 'Oman'].map((country, i) => (
              <div key={i} className="bg-slate-900/50 rounded-lg p-3 text-center border border-[#c9a227]/30">
                <span className="text-white font-medium text-sm">{country}</span>
              </div>
            ))}
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
            <Link href="/wasil-apps" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-400 transition-colors">
              <Activity className="w-5 h-5" /> Wasil Apps
            </Link>
            <Link href="/rtmn-finance" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-400 transition-colors">
              <Wallet className="w-5 h-5" /> RTMN Finance
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
