'use client';

import React, { useState } from 'react';
import {
  MapPin, Globe, TrendingUp, Users, Store, Target,
  BarChart3, DollarSign, Calendar, CheckCircle, Clock,
  AlertTriangle, ArrowUp, ArrowDown, Building2, Car,
  Plane, Flag, Crown, Star, Zap, ChevronRight, Map
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// UAE Cities Data
const uaeCities = [
  {
    name: 'Dubai',
    status: 'active',
    population: 3500000,
    merchants: 500,
    users: 15550,
    penetration: 0.44,
    gmv: 2850000,
    targetMerchants: 1000,
    targetUsers: 50000,
    priority: 'MAINTAIN',
    color: 'bg-emerald-500',
    areas: ['Downtown', 'Marina', 'JBR', 'Business Bay', 'DIFC', 'JLT', 'Al Barsha', 'Deira', 'Jumeirah'],
    keyCategories: ['F&B', 'Gold', 'Fashion', 'Salon', 'Gym'],
    challenges: ['High competition', 'Saturated market'],
    opportunities: ['Event partnerships', 'Corporate programs', 'Premium merchants']
  },
  {
    name: 'Abu Dhabi',
    status: 'launching',
    population: 1500000,
    merchants: 25,
    users: 450,
    penetration: 0.03,
    gmv: 45000,
    targetMerchants: 200,
    targetUsers: 15000,
    priority: 'HIGH',
    color: 'bg-blue-500',
    areas: ['Corniche', 'Al Reem Island', 'Yas Island', 'Saadiyat', 'Al Maryah', 'Khalifa City'],
    keyCategories: ['F&B', 'Gold', 'Government employees', 'Families'],
    challenges: ['Different culture', 'New market entry', 'Brand awareness'],
    opportunities: ['Less competition', 'Government partnerships', 'Family-focused']
  },
  {
    name: 'Sharjah',
    status: 'planned',
    population: 1800000,
    merchants: 0,
    users: 120,
    penetration: 0.01,
    gmv: 0,
    targetMerchants: 150,
    targetUsers: 10000,
    priority: 'MEDIUM',
    color: 'bg-purple-500',
    areas: ['Al Majaz', 'Al Qasba', 'Muweilah', 'Al Nahda', 'Sharjah City Centre'],
    keyCategories: ['F&B', 'Family entertainment', 'Retail', 'Supermarkets'],
    challenges: ['Price sensitive market', 'Family focus', 'Different demographics'],
    opportunities: ['Lower CAC', 'Family programs', 'University partnerships']
  },
  {
    name: 'Ajman',
    status: 'future',
    population: 540000,
    merchants: 0,
    users: 45,
    penetration: 0.01,
    gmv: 0,
    targetMerchants: 75,
    targetUsers: 5000,
    priority: 'LOW',
    color: 'bg-amber-500',
    areas: ['Ajman Downtown', 'Al Jurf', 'Al Rashidiya'],
    keyCategories: ['F&B', 'Retail', 'Supermarkets'],
    challenges: ['Small market', 'Limited premium merchants'],
    opportunities: ['First mover advantage', 'Low competition']
  },
  {
    name: 'Al Ain',
    status: 'future',
    population: 650000,
    merchants: 0,
    users: 85,
    penetration: 0.01,
    gmv: 0,
    targetMerchants: 100,
    targetUsers: 8000,
    priority: 'MEDIUM',
    color: 'bg-pink-500',
    areas: ['Al Ain Mall Area', 'Al Jimi', 'Al Muwaiji', 'Hili'],
    keyCategories: ['F&B', 'Family', 'University students', 'Retail'],
    challenges: ['Geographic distance', 'Different lifestyle'],
    opportunities: ['University market', 'Family-focused', 'Tourist destination']
  },
];

// Expansion Timeline
const expansionTimeline = [
  {
    phase: 'Phase 1: Dubai Dominance',
    period: 'Q1-Q2 2024',
    status: 'completed',
    goals: ['1000 merchants', '50K users', 'AED 5M GMV'],
    achieved: ['500 merchants', '15K users', 'AED 2.8M GMV'],
    progress: 60
  },
  {
    phase: 'Phase 2: Abu Dhabi Launch',
    period: 'Q3 2024',
    status: 'active',
    goals: ['200 merchants', '15K users', 'AED 1.5M GMV'],
    achieved: ['25 merchants', '450 users', 'AED 45K GMV'],
    progress: 15
  },
  {
    phase: 'Phase 3: Northern Emirates',
    period: 'Q4 2024',
    status: 'planned',
    goals: ['Sharjah: 150 merchants', 'Ajman: 75 merchants', '15K combined users'],
    achieved: [],
    progress: 0
  },
  {
    phase: 'Phase 4: Full UAE Coverage',
    period: 'Q1-Q2 2025',
    status: 'future',
    goals: ['Al Ain: 100 merchants', 'RAK: 50 merchants', 'Fujairah: 25 merchants'],
    achieved: [],
    progress: 0
  },
];

// City Launch Playbook
const launchPlaybook = {
  prelaunch: {
    duration: '4 weeks',
    activities: [
      { task: 'Market research & sizing', owner: 'Strategy', week: 1 },
      { task: 'Identify 50 anchor merchants', owner: 'Sales', week: 1 },
      { task: 'Local partnership outreach', owner: 'BD', week: 2 },
      { task: 'Hire local sales reps (2)', owner: 'HR', week: 2 },
      { task: 'Localize marketing materials', owner: 'Marketing', week: 3 },
      { task: 'Sign 25 launch merchants', owner: 'Sales', week: 3 },
      { task: 'Press & influencer prep', owner: 'PR', week: 4 },
      { task: 'Beta test with 100 users', owner: 'Product', week: 4 },
    ]
  },
  launch: {
    duration: '2 weeks',
    activities: [
      { task: 'Launch event with merchants', owner: 'Events', week: 1 },
      { task: 'Influencer campaign kickoff', owner: 'Marketing', week: 1 },
      { task: 'User acquisition blitz', owner: 'Growth', week: 1 },
      { task: 'PR coverage push', owner: 'PR', week: 1 },
      { task: 'Daily merchant support', owner: 'Operations', week: 'ongoing' },
      { task: 'User feedback collection', owner: 'Product', week: 2 },
    ]
  },
  postlaunch: {
    duration: '8 weeks',
    activities: [
      { task: 'Scale to 100 merchants', owner: 'Sales', week: '1-4' },
      { task: 'Referral program activation', owner: 'Growth', week: 2 },
      { task: 'Local event partnerships', owner: 'BD', week: '3-6' },
      { task: 'Performance review', owner: 'Strategy', week: 4 },
      { task: 'Optimize based on data', owner: 'Product', week: '5-8' },
      { task: 'Scale to target users', owner: 'Growth', week: '5-8' },
    ]
  }
};

// Market Entry Strategies
const entryStrategies = [
  {
    strategy: 'Anchor Merchant First',
    description: 'Partner with 3-5 major brands to create buzz before consumer launch',
    bestFor: 'Premium markets like Abu Dhabi',
    examples: ['Sign Yas Mall merchants', 'Partner with Rotana Hotels', 'Al Futtaim retail brands'],
    risk: 'Low',
    speed: 'Medium'
  },
  {
    strategy: 'Consumer Blitz',
    description: 'Heavy user acquisition with generous welcome bonuses',
    bestFor: 'Price-sensitive markets like Sharjah',
    examples: ['200 coins welcome bonus', 'University campus activation', 'Mall booth campaign'],
    risk: 'Medium',
    speed: 'Fast'
  },
  {
    strategy: 'Partnership Entry',
    description: 'Enter through strategic partnership with local player',
    bestFor: 'New or unfamiliar markets',
    examples: ['Co-brand with local bank', 'Government employee program', 'Corporate wellness tie-up'],
    risk: 'Low',
    speed: 'Slow'
  },
  {
    strategy: 'Event-Based Launch',
    description: 'Launch around major local event for maximum visibility',
    bestFor: 'Any market with upcoming events',
    examples: ['Abu Dhabi F1', 'Al Ain Festival', 'Sharjah Book Fair'],
    risk: 'Medium',
    speed: 'Fast'
  },
];

// Resource Requirements per City
const resourceRequirements = [
  { city: 'Abu Dhabi', salesReps: 2, fieldOps: 1, budget: 150000, timeline: '3 months' },
  { city: 'Sharjah', salesReps: 2, fieldOps: 1, budget: 100000, timeline: '3 months' },
  { city: 'Al Ain', salesReps: 1, fieldOps: 0.5, budget: 75000, timeline: '2 months' },
  { city: 'Ajman', salesReps: 1, fieldOps: 0.5, budget: 50000, timeline: '2 months' },
  { city: 'RAK', salesReps: 1, fieldOps: 0.5, budget: 50000, timeline: '2 months' },
];

export default function GeographicExpansionPage() {
  const [activeTab, setActiveTab] = useState<'map' | 'timeline' | 'playbook' | 'strategies'>('map');
  const [selectedCity, setSelectedCity] = useState<string | null>('Dubai');

  const tabs = [
    { id: 'map', label: 'City Overview', icon: MapPin },
    { id: 'timeline', label: 'Expansion Timeline', icon: Calendar },
    { id: 'playbook', label: 'Launch Playbook', icon: Target },
    { id: 'strategies', label: 'Entry Strategies', icon: Flag },
  ];

  const selectedCityData = uaeCities.find(c => c.name === selectedCity);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Globe size={32} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-black">Geographic Expansion Playbook</h1>
              <p className="text-teal-200 mt-1">City-by-city UAE rollout strategy & market entry plans</p>
            </div>
          </div>

          {/* UAE Coverage Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-teal-200 text-sm">Cities Active</div>
              <div className="text-2xl sm:text-3xl font-bold">1 / 7</div>
              <div className="text-teal-300 text-sm flex items-center gap-1 mt-1">
                <MapPin size={14} /> Dubai fully operational
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-teal-200 text-sm">Population Covered</div>
              <div className="text-2xl sm:text-3xl font-bold">3.5M</div>
              <div className="text-teal-300 text-sm flex items-center gap-1 mt-1">
                <Users size={14} /> 35% of UAE
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-teal-200 text-sm">Total Merchants</div>
              <div className="text-2xl sm:text-3xl font-bold">525</div>
              <div className="text-emerald-300 text-sm flex items-center gap-1 mt-1">
                <ArrowUp size={14} /> +25 this month
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-teal-200 text-sm">UAE GMV</div>
              <div className="text-2xl sm:text-3xl font-bold">AED 2.9M</div>
              <div className="text-emerald-300 text-sm flex items-center gap-1 mt-1">
                <TrendingUp size={14} /> +18% MoM
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
                    ? 'bg-teal-600 text-white'
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

        {/* City Overview Tab */}
        {activeTab === 'map' && (
          <div className="space-y-8">
            {/* City Selector */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="text-teal-600" size={24} />
                UAE Cities Overview
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                {uaeCities.map((city) => (
                  <button
                    key={city.name}
                    onClick={() => setSelectedCity(city.name)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedCity === city.name
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-10 h-10 ${city.color} rounded-lg flex items-center justify-center text-white font-bold mb-2`}>
                      {city.name.charAt(0)}
                    </div>
                    <div className="font-bold text-gray-900">{city.name}</div>
                    <div className={`text-xs font-medium px-2 py-0.5 rounded-full inline-block mt-1 ${
                      city.status === 'active' ? 'bg-emerald-100 text-emerald-700' :
                      city.status === 'launching' ? 'bg-blue-100 text-blue-700' :
                      city.status === 'planned' ? 'bg-amber-100 text-amber-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {city.status.toUpperCase()}
                    </div>
                    <div className="text-sm text-gray-500 mt-2">{city.merchants} merchants</div>
                  </button>
                ))}
              </div>

              {/* Selected City Details */}
              {selectedCityData && (
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* City Stats */}
                    <div className="lg:w-1/3">
                      <div className={`${selectedCityData.color} rounded-xl p-6 text-white`}>
                        <h3 className="text-2xl font-bold">{selectedCityData.name}</h3>
                        <p className="text-white/80">Population: {(selectedCityData.population / 1000000).toFixed(1)}M</p>

                        <div className="grid grid-cols-2 gap-4 mt-6">
                          <div>
                            <div className="text-white/60 text-sm">Merchants</div>
                            <div className="text-2xl font-bold">{selectedCityData.merchants}</div>
                            <div className="text-xs text-white/60">Target: {selectedCityData.targetMerchants}</div>
                          </div>
                          <div>
                            <div className="text-white/60 text-sm">Users</div>
                            <div className="text-2xl font-bold">{selectedCityData.users.toLocaleString()}</div>
                            <div className="text-xs text-white/60">Target: {selectedCityData.targetUsers.toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="text-white/60 text-sm">Penetration</div>
                            <div className="text-2xl font-bold">{selectedCityData.penetration}%</div>
                          </div>
                          <div>
                            <div className="text-white/60 text-sm">GMV</div>
                            <div className="text-2xl font-bold">AED {(selectedCityData.gmv / 1000).toFixed(0)}K</div>
                          </div>
                        </div>

                        <div className="mt-6">
                          <div className="text-white/60 text-sm mb-2">Progress to Target</div>
                          <div className="h-4 bg-white/20 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-white rounded-full"
                              style={{ width: `${Math.min((selectedCityData.merchants / selectedCityData.targetMerchants) * 100, 100)}%` }}
                            />
                          </div>
                          <div className="text-xs text-white/60 mt-1">
                            {Math.round((selectedCityData.merchants / selectedCityData.targetMerchants) * 100)}% of merchant target
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* City Details */}
                    <div className="lg:w-2/3 space-y-4">
                      {/* Priority & Areas */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-xl p-4">
                          <div className="text-sm font-medium text-gray-500 mb-2">Priority Level</div>
                          <span className={`text-lg font-bold ${
                            selectedCityData.priority === 'HIGH' ? 'text-red-600' :
                            selectedCityData.priority === 'MEDIUM' ? 'text-amber-600' :
                            selectedCityData.priority === 'MAINTAIN' ? 'text-emerald-600' :
                            'text-gray-600'
                          }`}>
                            {selectedCityData.priority}
                          </span>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4">
                          <div className="text-sm font-medium text-gray-500 mb-2">Key Categories</div>
                          <div className="flex flex-wrap gap-1">
                            {selectedCityData.keyCategories.map((cat) => (
                              <span key={cat} className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Target Areas */}
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-sm font-medium text-gray-500 mb-2">Target Areas</div>
                        <div className="flex flex-wrap gap-2">
                          {selectedCityData.areas.map((area) => (
                            <span key={area} className="text-sm bg-white text-gray-700 px-3 py-1 rounded-lg border border-gray-200">
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Challenges & Opportunities */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-red-50 rounded-xl p-4">
                          <div className="text-sm font-medium text-red-600 mb-2 flex items-center gap-1">
                            <AlertTriangle size={14} />
                            Challenges
                          </div>
                          <ul className="space-y-1">
                            {selectedCityData.challenges.map((ch) => (
                              <li key={ch} className="text-sm text-red-700 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                {ch}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-emerald-50 rounded-xl p-4">
                          <div className="text-sm font-medium text-emerald-600 mb-2 flex items-center gap-1">
                            <Star size={14} />
                            Opportunities
                          </div>
                          <ul className="space-y-1">
                            {selectedCityData.opportunities.map((opp) => (
                              <li key={opp} className="text-sm text-emerald-700 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                {opp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resource Requirements */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <DollarSign className="text-teal-600" size={24} />
                Resource Requirements by City
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">City</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Sales Reps</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Field Ops</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Budget (AED)</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resourceRequirements.map((req) => (
                      <tr key={req.city} className="border-b border-gray-100">
                        <td className="py-4 px-4 font-medium text-gray-900">{req.city}</td>
                        <td className="py-4 px-4 text-center">{req.salesReps}</td>
                        <td className="py-4 px-4 text-center">{req.fieldOps}</td>
                        <td className="py-4 px-4 text-center font-bold text-teal-600">
                          {req.budget.toLocaleString()}
                        </td>
                        <td className="py-4 px-4 text-center text-gray-600">{req.timeline}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-teal-50">
                      <td className="py-4 px-4 font-bold text-gray-900">Total</td>
                      <td className="py-4 px-4 text-center font-bold">7</td>
                      <td className="py-4 px-4 text-center font-bold">3</td>
                      <td className="py-4 px-4 text-center font-bold text-teal-600">
                        {resourceRequirements.reduce((s, r) => s + r.budget, 0).toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-center font-bold">12 months</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Timeline Tab */}
        {activeTab === 'timeline' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="text-teal-600" size={24} />
                UAE Expansion Timeline
              </h2>

              <div className="space-y-6">
                {expansionTimeline.map((phase, index) => (
                  <div key={phase.phase} className={`relative pl-8 ${
                    index !== expansionTimeline.length - 1 ? 'pb-8' : ''
                  }`}>
                    {/* Timeline line */}
                    {index !== expansionTimeline.length - 1 && (
                      <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-200" />
                    )}

                    {/* Status dot */}
                    <div className={`absolute left-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      phase.status === 'completed' ? 'bg-emerald-500' :
                      phase.status === 'active' ? 'bg-blue-500' :
                      phase.status === 'planned' ? 'bg-amber-500' :
                      'bg-gray-300'
                    }`}>
                      {phase.status === 'completed' ? (
                        <CheckCircle size={14} className="text-white" />
                      ) : phase.status === 'active' ? (
                        <Zap size={14} className="text-white" />
                      ) : (
                        <Clock size={14} className="text-white" />
                      )}
                    </div>

                    {/* Phase content */}
                    <div className={`p-4 rounded-xl border-2 ${
                      phase.status === 'completed' ? 'border-emerald-200 bg-emerald-50' :
                      phase.status === 'active' ? 'border-blue-200 bg-blue-50' :
                      phase.status === 'planned' ? 'border-amber-200 bg-amber-50' :
                      'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-gray-900">{phase.phase}</h3>
                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                              phase.status === 'completed' ? 'bg-emerald-200 text-emerald-700' :
                              phase.status === 'active' ? 'bg-blue-200 text-blue-700' :
                              phase.status === 'planned' ? 'bg-amber-200 text-amber-700' :
                              'bg-gray-200 text-gray-700'
                            }`}>
                              {phase.status.toUpperCase()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{phase.period}</p>
                        </div>

                        {/* Progress */}
                        <div className="md:w-32">
                          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                phase.status === 'completed' ? 'bg-emerald-500' :
                                phase.status === 'active' ? 'bg-blue-500' :
                                'bg-amber-500'
                              }`}
                              style={{ width: `${phase.progress}%` }}
                            />
                          </div>
                          <div className="text-xs text-gray-500 text-center mt-1">{phase.progress}%</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <div className="text-sm font-medium text-gray-600 mb-2">Goals</div>
                          <ul className="space-y-1">
                            {phase.goals.map((goal) => (
                              <li key={goal} className="text-sm text-gray-700 flex items-center gap-2">
                                <Target size={12} className="text-teal-500" />
                                {goal}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {phase.achieved.length > 0 && (
                          <div>
                            <div className="text-sm font-medium text-gray-600 mb-2">Achieved</div>
                            <ul className="space-y-1">
                              {phase.achieved.map((ach) => (
                                <li key={ach} className="text-sm text-emerald-700 flex items-center gap-2">
                                  <CheckCircle size={12} />
                                  {ach}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Launch Playbook Tab */}
        {activeTab === 'playbook' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-6 text-white">
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Target size={24} />
                City Launch Playbook
              </h2>
              <p className="text-teal-100">14-week framework for launching in a new UAE city</p>
            </div>

            {/* Pre-launch */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="text-amber-600" size={24} />
                Pre-Launch Phase ({launchPlaybook.prelaunch.duration})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {launchPlaybook.prelaunch.activities.map((activity) => (
                  <div key={activity.task} className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                    <div className="text-xs text-amber-600 font-medium">Week {activity.week}</div>
                    <div className="font-medium text-gray-900 mt-1">{activity.task}</div>
                    <div className="text-sm text-gray-500 mt-2">{activity.owner}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Launch */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Zap className="text-blue-600" size={24} />
                Launch Phase ({launchPlaybook.launch.duration})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {launchPlaybook.launch.activities.map((activity) => (
                  <div key={activity.task} className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <div className="text-xs text-blue-600 font-medium">
                      {activity.week === 'ongoing' ? 'Ongoing' : `Week ${activity.week}`}
                    </div>
                    <div className="font-medium text-gray-900 mt-1">{activity.task}</div>
                    <div className="text-sm text-gray-500 mt-2">{activity.owner}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Post-launch */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="text-emerald-600" size={24} />
                Post-Launch Phase ({launchPlaybook.postlaunch.duration})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {launchPlaybook.postlaunch.activities.map((activity) => (
                  <div key={activity.task} className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                    <div className="text-xs text-emerald-600 font-medium">Week {activity.week}</div>
                    <div className="font-medium text-gray-900 mt-1">{activity.task}</div>
                    <div className="text-sm text-gray-500 mt-2">{activity.owner}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Entry Strategies Tab */}
        {activeTab === 'strategies' && (
          <div className="space-y-6">
            {entryStrategies.map((strategy) => (
              <div key={strategy.strategy} className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/3">
                    <h3 className="text-xl font-bold text-gray-900">{strategy.strategy}</h3>
                    <p className="text-gray-600 mt-2">{strategy.description}</p>
                    <div className="mt-4 flex gap-2">
                      <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                        strategy.risk === 'Low' ? 'bg-emerald-100 text-emerald-700' :
                        strategy.risk === 'Medium' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {strategy.risk} Risk
                      </span>
                      <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                        strategy.speed === 'Fast' ? 'bg-blue-100 text-blue-700' :
                        strategy.speed === 'Medium' ? 'bg-purple-100 text-purple-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {strategy.speed} Speed
                      </span>
                    </div>
                  </div>

                  <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-teal-50 rounded-xl p-4">
                      <div className="text-sm font-medium text-teal-700 mb-2">Best For</div>
                      <p className="text-gray-700">{strategy.bestFor}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm font-medium text-gray-700 mb-2">Examples</div>
                      <ul className="space-y-1">
                        {strategy.examples.map((ex) => (
                          <li key={ex} className="text-sm text-gray-600 flex items-center gap-2">
                            <ChevronRight size={12} className="text-teal-500" />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Strategy Recommendation */}
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-6 text-white">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Crown size={24} />
                Recommended Strategy by City
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { city: 'Abu Dhabi', strategy: 'Anchor Merchant First', reason: 'Premium market, needs brand credibility' },
                  { city: 'Sharjah', strategy: 'Consumer Blitz', reason: 'Price-sensitive, volume play' },
                  { city: 'Al Ain', strategy: 'Partnership Entry', reason: 'University partnerships key' },
                  { city: 'Ajman', strategy: 'Event-Based Launch', reason: 'Small market, need splash' },
                ].map((rec) => (
                  <div key={rec.city} className="bg-white/10 rounded-xl p-4">
                    <div className="font-bold text-lg">{rec.city}</div>
                    <div className="text-teal-200 text-sm mt-1">{rec.strategy}</div>
                    <div className="text-white/80 text-sm mt-2">{rec.reason}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <GlobalFooter />
    </div>
  );
}
