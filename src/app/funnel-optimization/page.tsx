'use client';

import React, { useState } from 'react';
import {
  Target, TrendingUp, Users, Zap, BarChart3, Filter,
  ChevronDown, ChevronRight, ArrowDown, ArrowUp, AlertTriangle,
  CheckCircle, XCircle, Smartphone, CreditCard, Gift, Star,
  Clock, DollarSign, Repeat, Eye, MousePointer, ShoppingCart,
  Download, UserPlus, Award, Lightbulb, Activity, Sparkles
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Main Funnel Data
const mainFunnel = [
  {
    stage: 'App Store View',
    users: 125000,
    percentage: 100,
    conversion: null,
    icon: Eye,
    color: 'from-gray-500 to-gray-600',
    blockers: ['Low search ranking', 'Weak screenshots'],
    opportunities: ['ASO optimization', 'Video preview']
  },
  {
    stage: 'Download',
    users: 25000,
    percentage: 20,
    conversion: 20,
    icon: Download,
    color: 'from-blue-500 to-blue-600',
    blockers: ['Large app size', 'Low ratings visibility'],
    opportunities: ['Reduce app size', 'Improve store listing']
  },
  {
    stage: 'Registration',
    users: 18750,
    percentage: 15,
    conversion: 75,
    icon: UserPlus,
    color: 'from-indigo-500 to-indigo-600',
    blockers: ['Long registration flow', 'Too many permissions'],
    opportunities: ['Social login', 'Guest browsing']
  },
  {
    stage: 'Onboarding Complete',
    users: 15000,
    percentage: 12,
    conversion: 80,
    icon: CheckCircle,
    color: 'from-purple-500 to-purple-600',
    blockers: ['Too many steps', 'Unclear value proposition'],
    opportunities: ['Skip option', 'Personalized onboarding']
  },
  {
    stage: 'First Merchant View',
    users: 13500,
    percentage: 10.8,
    conversion: 90,
    icon: Eye,
    color: 'from-pink-500 to-pink-600',
    blockers: ['Poor merchant discovery', 'No nearby merchants'],
    opportunities: ['Location-based sorting', 'Popular merchants']
  },
  {
    stage: 'First Transaction',
    users: 10125,
    percentage: 8.1,
    conversion: 75,
    icon: CreditCard,
    color: 'from-rose-500 to-rose-600',
    blockers: ['No immediate incentive', 'Unclear process'],
    opportunities: ['First transaction bonus', 'Tutorial overlay']
  },
  {
    stage: 'Coins Earned',
    users: 9113,
    percentage: 7.3,
    conversion: 90,
    icon: Gift,
    color: 'from-orange-500 to-orange-600',
    blockers: ['Delayed coin posting', 'Low coin amount'],
    opportunities: ['Instant coins', 'Welcome bonus']
  },
  {
    stage: 'First Redemption',
    users: 5468,
    percentage: 4.4,
    conversion: 60,
    icon: Award,
    color: 'from-amber-500 to-amber-600',
    blockers: ['High redemption threshold', 'Limited options'],
    opportunities: ['Low-threshold rewards', 'Micro-redemptions']
  },
  {
    stage: 'Second Transaction',
    users: 4374,
    percentage: 3.5,
    conversion: 80,
    icon: Repeat,
    color: 'from-yellow-500 to-yellow-600',
    blockers: ['No re-engagement', 'Forgot about app'],
    opportunities: ['Push notifications', 'Streak mechanic']
  },
  {
    stage: 'Weekly Active',
    users: 2187,
    percentage: 1.75,
    conversion: 50,
    icon: Star,
    color: 'from-emerald-500 to-emerald-600',
    blockers: ['Low habit formation', 'Competing apps'],
    opportunities: ['Weekly challenges', 'Merchant variety']
  },
];

// Conversion Experiments
const experiments = [
  {
    id: 'EXP-001',
    name: 'Social Login',
    stage: 'Registration',
    status: 'running',
    hypothesis: 'Adding Google/Apple login will increase registration rate',
    control: { name: 'Email only', conversion: 75 },
    variant: { name: 'Social + Email', conversion: 82 },
    sampleSize: 5000,
    significance: 95,
    impact: '+7pp registration rate',
    winner: 'Variant'
  },
  {
    id: 'EXP-002',
    name: 'Welcome Bonus',
    stage: 'First Transaction',
    status: 'running',
    hypothesis: '100 coins welcome bonus increases first transaction rate',
    control: { name: 'No bonus', conversion: 75 },
    variant: { name: '100 coin bonus', conversion: 88 },
    sampleSize: 3000,
    significance: 99,
    impact: '+13pp first transaction rate',
    winner: 'Variant'
  },
  {
    id: 'EXP-003',
    name: 'Micro-Redemption',
    stage: 'First Redemption',
    status: 'completed',
    hypothesis: 'AED 5 minimum redemption increases redemption rate',
    control: { name: 'AED 25 minimum', conversion: 60 },
    variant: { name: 'AED 5 minimum', conversion: 78 },
    sampleSize: 4000,
    significance: 99,
    impact: '+18pp redemption rate',
    winner: 'Variant'
  },
  {
    id: 'EXP-004',
    name: 'Streak Nudge',
    stage: 'Weekly Active',
    status: 'planned',
    hypothesis: 'Daily streak reminder at 7pm increases weekly activity',
    control: { name: 'No reminder', conversion: null },
    variant: { name: 'Daily 7pm push', conversion: null },
    sampleSize: 2000,
    significance: null,
    impact: 'Expected +15pp weekly retention',
    winner: null
  },
];

// Funnel by Segment
const segmentFunnels = [
  {
    segment: 'Organic',
    downloadToRegister: 78,
    registerToFirstTxn: 62,
    firstTxnToWeekly: 28,
    overallConversion: 13.6,
    color: 'bg-emerald-500'
  },
  {
    segment: 'Paid Ads',
    downloadToRegister: 72,
    registerToFirstTxn: 48,
    firstTxnToWeekly: 18,
    overallConversion: 6.2,
    color: 'bg-blue-500'
  },
  {
    segment: 'Referral',
    downloadToRegister: 88,
    registerToFirstTxn: 72,
    firstTxnToWeekly: 35,
    overallConversion: 22.2,
    color: 'bg-purple-500'
  },
  {
    segment: 'Influencer',
    downloadToRegister: 68,
    registerToFirstTxn: 55,
    firstTxnToWeekly: 22,
    overallConversion: 8.2,
    color: 'bg-pink-500'
  },
];

// Drop-off Analysis
const dropOffAnalysis = [
  {
    transition: 'View → Download',
    dropOff: 80,
    lostUsers: 100000,
    reason: 'Low conversion from browse to install',
    fixes: ['Improve app store listing', 'Add video preview', 'Better screenshots']
  },
  {
    transition: 'Download → Register',
    dropOff: 25,
    lostUsers: 6250,
    reason: 'Friction in registration process',
    fixes: ['Add social login', 'Reduce form fields', 'Guest mode']
  },
  {
    transition: 'First Txn → Redemption',
    dropOff: 40,
    lostUsers: 3645,
    reason: 'High redemption threshold',
    fixes: ['Lower minimum to AED 5', 'Add micro-rewards', 'Remind about coins']
  },
  {
    transition: '2nd Txn → Weekly Active',
    dropOff: 50,
    lostUsers: 2187,
    reason: 'No habit formation',
    fixes: ['Streak bonuses', 'Weekly challenges', 'Push notifications']
  },
];

// CRO Playbook
const croPlaybook = [
  {
    category: 'Onboarding',
    tactics: [
      { name: 'Progress bar', impact: '+12% completion', effort: 'Low' },
      { name: 'Personalized welcome', impact: '+8% engagement', effort: 'Medium' },
      { name: 'Skip option', impact: '+15% registration', effort: 'Low' },
      { name: 'Value proposition video', impact: '+20% retention', effort: 'High' },
    ]
  },
  {
    category: 'First Transaction',
    tactics: [
      { name: 'Welcome bonus coins', impact: '+25% first txn', effort: 'Low' },
      { name: 'Nearby merchant push', impact: '+18% first txn', effort: 'Medium' },
      { name: 'Tutorial overlay', impact: '+10% first txn', effort: 'Low' },
      { name: 'Time-limited offer', impact: '+30% urgency', effort: 'Medium' },
    ]
  },
  {
    category: 'Retention',
    tactics: [
      { name: 'Streak mechanics', impact: '+40% daily active', effort: 'Medium' },
      { name: 'Push at optimal time', impact: '+22% opens', effort: 'Low' },
      { name: 'Personalized deals', impact: '+35% engagement', effort: 'High' },
      { name: 'Win-back campaigns', impact: '+15% reactivation', effort: 'Medium' },
    ]
  },
];

export default function FunnelOptimizationPage() {
  const [activeTab, setActiveTab] = useState<'funnel' | 'experiments' | 'segments' | 'playbook'>('funnel');
  const [selectedStage, setSelectedStage] = useState<number | null>(null);

  const tabs = [
    { id: 'funnel', label: 'Full Funnel', icon: Filter },
    { id: 'experiments', label: 'A/B Tests', icon: Zap },
    { id: 'segments', label: 'By Segment', icon: Users },
    { id: 'playbook', label: 'CRO Playbook', icon: Lightbulb },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Filter size={32} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-black">Funnel Optimization Engine</h1>
              <p className="text-orange-200 mt-1">Full-funnel analytics, A/B testing & conversion rate optimization</p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-orange-200 text-sm">Store → Download</div>
              <div className="text-2xl sm:text-3xl font-bold">20%</div>
              <div className="text-amber-300 text-sm flex items-center gap-1 mt-1">
                <AlertTriangle size={14} /> Below benchmark
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-orange-200 text-sm">Download → Register</div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400">75%</div>
              <div className="text-emerald-300 text-sm flex items-center gap-1 mt-1">
                <ArrowUp size={14} /> +5pp this month
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-orange-200 text-sm">Register → 1st Txn</div>
              <div className="text-2xl sm:text-3xl font-bold">54%</div>
              <div className="text-emerald-300 text-sm flex items-center gap-1 mt-1">
                <ArrowUp size={14} /> +8pp from bonus
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-orange-200 text-sm">Overall Conversion</div>
              <div className="text-2xl sm:text-3xl font-bold">1.75%</div>
              <div className="text-orange-300 text-sm flex items-center gap-1 mt-1">
                <Target size={14} /> To weekly active
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
                    ? 'bg-orange-600 text-white'
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

        {/* Full Funnel Tab */}
        {activeTab === 'funnel' && (
          <div className="space-y-8">
            {/* Visual Funnel */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Filter className="text-orange-600" size={24} />
                User Acquisition Funnel
              </h2>

              <div className="space-y-2">
                {mainFunnel.map((stage, index) => (
                  <div key={stage.stage}>
                    <div
                      className={`relative cursor-pointer transition-all ${
                        selectedStage === index ? 'ring-2 ring-orange-500' : ''
                      }`}
                      onClick={() => setSelectedStage(selectedStage === index ? null : index)}
                    >
                      <div
                        className={`bg-gradient-to-r ${stage.color} rounded-lg p-4 text-white flex items-center justify-between transition-all`}
                        style={{
                          width: `${Math.max(20, stage.percentage)}%`,
                          marginLeft: `${(100 - Math.max(20, stage.percentage)) / 2}%`
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <stage.icon size={20} />
                          <span className="font-medium">{stage.stage}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">{stage.users.toLocaleString()}</div>
                          {stage.conversion && (
                            <div className="text-xs opacity-80">{stage.conversion}% from prev</div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Conversion Arrow */}
                    {index < mainFunnel.length - 1 && (
                      <div className="flex justify-center py-1">
                        <div className="flex items-center gap-2 text-gray-400">
                          <ArrowDown size={16} />
                          <span className="text-xs">
                            {mainFunnel[index + 1].conversion}% convert
                          </span>
                          <span className="text-xs text-red-500">
                            ({(100 - (mainFunnel[index + 1].conversion || 0))}% drop)
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Expanded Stage Details */}
                    {selectedStage === index && (
                      <div className="mt-2 mb-4 ml-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm font-medium text-red-600 mb-2 flex items-center gap-1">
                              <XCircle size={14} />
                              Blockers
                            </div>
                            <ul className="space-y-1">
                              {stage.blockers.map((blocker) => (
                                <li key={blocker} className="text-sm text-gray-600 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                  {blocker}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-emerald-600 mb-2 flex items-center gap-1">
                              <Lightbulb size={14} />
                              Opportunities
                            </div>
                            <ul className="space-y-1">
                              {stage.opportunities.map((opp) => (
                                <li key={opp} className="text-sm text-gray-600 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                  {opp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Drop-off Analysis */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <AlertTriangle className="text-red-500" size={24} />
                Critical Drop-off Points
              </h2>

              <div className="space-y-4">
                {dropOffAnalysis.map((drop) => (
                  <div key={drop.transition} className="border-2 border-red-200 bg-red-50 rounded-xl p-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-48">
                        <div className="font-bold text-red-700">{drop.transition}</div>
                        <div className="text-sm text-red-600">{drop.dropOff}% drop-off</div>
                      </div>
                      <div className="md:w-32 text-center">
                        <div className="text-2xl font-black text-red-600">{drop.lostUsers.toLocaleString()}</div>
                        <div className="text-xs text-red-500">users lost</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-600 mb-2">{drop.reason}</div>
                        <div className="flex flex-wrap gap-2">
                          {drop.fixes.map((fix) => (
                            <span key={fix} className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                              {fix}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Impact Calculator */}
              <div className="mt-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-4">Impact of Fixing Top Drop-off</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-orange-200 text-sm">If +10% Download</div>
                    <div className="text-2xl font-bold">+12,500</div>
                    <div className="text-orange-200 text-sm">new downloads</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-orange-200 text-sm">If +5% Register</div>
                    <div className="text-2xl font-bold">+1,250</div>
                    <div className="text-orange-200 text-sm">new users</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-orange-200 text-sm">If +10% 1st Txn</div>
                    <div className="text-2xl font-bold">+1,500</div>
                    <div className="text-orange-200 text-sm">new customers</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-orange-200 text-sm">Revenue Impact</div>
                    <div className="text-2xl font-bold">+AED 45K</div>
                    <div className="text-orange-200 text-sm">monthly</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* A/B Tests Tab */}
        {activeTab === 'experiments' && (
          <div className="space-y-6">
            {experiments.map((exp) => (
              <div key={exp.id} className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Experiment Info */}
                  <div className="lg:w-64">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-mono text-gray-400">{exp.id}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        exp.status === 'running' ? 'bg-blue-100 text-blue-700' :
                        exp.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {exp.status.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{exp.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">Stage: {exp.stage}</p>
                    <p className="text-sm text-gray-600 mt-2">{exp.hypothesis}</p>
                  </div>

                  {/* Variants Comparison */}
                  <div className="flex-1">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Control */}
                      <div className={`p-4 rounded-xl border-2 ${
                        exp.winner === 'Control' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
                      }`}>
                        <div className="text-sm text-gray-500 mb-1">Control</div>
                        <div className="font-medium text-gray-900">{exp.control.name}</div>
                        {exp.control.conversion && (
                          <div className="text-3xl font-black text-gray-900 mt-2">
                            {exp.control.conversion}%
                          </div>
                        )}
                        {exp.winner === 'Control' && (
                          <div className="mt-2 flex items-center gap-1 text-emerald-600 text-sm">
                            <Award size={14} />
                            Winner
                          </div>
                        )}
                      </div>

                      {/* Variant */}
                      <div className={`p-4 rounded-xl border-2 ${
                        exp.winner === 'Variant' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'
                      }`}>
                        <div className="text-sm text-gray-500 mb-1">Variant</div>
                        <div className="font-medium text-gray-900">{exp.variant.name}</div>
                        {exp.variant.conversion && (
                          <div className="text-3xl font-black text-emerald-600 mt-2">
                            {exp.variant.conversion}%
                          </div>
                        )}
                        {exp.winner === 'Variant' && (
                          <div className="mt-2 flex items-center gap-1 text-emerald-600 text-sm">
                            <Award size={14} />
                            Winner
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-4 mt-4 text-sm">
                      <div className="bg-gray-100 px-3 py-1 rounded-full">
                        Sample: {exp.sampleSize.toLocaleString()}
                      </div>
                      {exp.significance && (
                        <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                          {exp.significance}% confidence
                        </div>
                      )}
                      <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">
                        {exp.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Experiment Ideas */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 text-white">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Lightbulb size={24} />
                Experiment Backlog
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Gamified Onboarding', stage: 'Onboarding', potential: '+20% completion' },
                  { name: 'Location Permission Delay', stage: 'Registration', potential: '+15% register' },
                  { name: 'Merchant Category Preference', stage: 'Onboarding', potential: '+25% engagement' },
                  { name: 'Weekly Summary Email', stage: 'Retention', potential: '+12% reactivation' },
                  { name: 'Coin Expiry Countdown', stage: 'Redemption', potential: '+35% redemption' },
                  { name: 'Social Proof Badges', stage: 'Transaction', potential: '+18% conversion' },
                ].map((idea) => (
                  <div key={idea.name} className="bg-white/10 rounded-xl p-4">
                    <div className="font-bold">{idea.name}</div>
                    <div className="text-orange-200 text-sm mt-1">Stage: {idea.stage}</div>
                    <div className="text-emerald-300 font-medium mt-2">{idea.potential}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* By Segment Tab */}
        {activeTab === 'segments' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Users className="text-orange-600" size={24} />
                Funnel by Acquisition Source
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Source</th>
                      <th className="text-center py-4 px-4 text-sm font-semibold text-gray-600">Download → Register</th>
                      <th className="text-center py-4 px-4 text-sm font-semibold text-gray-600">Register → 1st Txn</th>
                      <th className="text-center py-4 px-4 text-sm font-semibold text-gray-600">1st Txn → Weekly</th>
                      <th className="text-center py-4 px-4 text-sm font-semibold text-gray-600">Overall</th>
                      <th className="text-center py-4 px-4 text-sm font-semibold text-gray-600">Quality</th>
                    </tr>
                  </thead>
                  <tbody>
                    {segmentFunnels.map((seg) => (
                      <tr key={seg.segment} className="border-b border-gray-100">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${seg.color}`} />
                            <span className="font-medium text-gray-900">{seg.segment}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className={`font-bold ${seg.downloadToRegister >= 75 ? 'text-emerald-600' : 'text-amber-600'}`}>
                            {seg.downloadToRegister}%
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className={`font-bold ${seg.registerToFirstTxn >= 60 ? 'text-emerald-600' : 'text-amber-600'}`}>
                            {seg.registerToFirstTxn}%
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className={`font-bold ${seg.firstTxnToWeekly >= 25 ? 'text-emerald-600' : 'text-amber-600'}`}>
                            {seg.firstTxnToWeekly}%
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className="font-black text-lg text-gray-900">{seg.overallConversion}%</span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          {seg.overallConversion >= 15 ? (
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">HIGH</span>
                          ) : seg.overallConversion >= 8 ? (
                            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">MEDIUM</span>
                          ) : (
                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">LOW</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Segment Insights */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-xl p-4 border-2 border-emerald-200">
                  <div className="font-bold text-emerald-800 flex items-center gap-2">
                    <Star size={18} />
                    Best Performing: Referral
                  </div>
                  <div className="text-sm text-emerald-600 mt-2">
                    22.2% overall conversion - 3.6x better than paid ads. Double down on referral program.
                  </div>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-200">
                  <div className="font-bold text-amber-800 flex items-center gap-2">
                    <AlertTriangle size={18} />
                    Needs Work: Paid Ads
                  </div>
                  <div className="text-sm text-amber-600 mt-2">
                    6.2% overall conversion - improve ad targeting or redirect budget to referrals.
                  </div>
                </div>
              </div>
            </div>

            {/* Budget Reallocation Recommendation */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 text-white">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <DollarSign size={24} />
                Budget Optimization Recommendation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-purple-200 text-sm">Current Split</div>
                  <div className="space-y-2 mt-3">
                    <div className="flex justify-between">
                      <span>Paid Ads</span>
                      <span className="font-bold">60%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Referral Bonus</span>
                      <span className="font-bold">20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Influencer</span>
                      <span className="font-bold">20%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-purple-200 text-sm">Recommended Split</div>
                  <div className="space-y-2 mt-3">
                    <div className="flex justify-between">
                      <span>Paid Ads</span>
                      <span className="font-bold text-red-300">35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Referral Bonus</span>
                      <span className="font-bold text-emerald-300">45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Influencer</span>
                      <span className="font-bold">20%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-purple-200 text-sm">Expected Impact</div>
                  <div className="text-3xl font-bold mt-3">+42%</div>
                  <div className="text-purple-200 text-sm">More weekly active users</div>
                  <div className="text-emerald-300 font-medium mt-2">Same budget, better ROI</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CRO Playbook Tab */}
        {activeTab === 'playbook' && (
          <div className="space-y-6">
            {croPlaybook.map((category) => (
              <div key={category.category} className="bg-white rounded-2xl p-6 shadow-xl">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Lightbulb className="text-orange-600" size={24} />
                  {category.category} Tactics
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.tactics.map((tactic) => (
                    <div
                      key={tactic.name}
                      className={`p-4 rounded-xl border-2 ${
                        tactic.effort === 'Low' ? 'border-emerald-200 bg-emerald-50' :
                        tactic.effort === 'Medium' ? 'border-blue-200 bg-blue-50' :
                        'border-purple-200 bg-purple-50'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="font-bold text-gray-900">{tactic.name}</div>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          tactic.effort === 'Low' ? 'bg-emerald-200 text-emerald-700' :
                          tactic.effort === 'Medium' ? 'bg-blue-200 text-blue-700' :
                          'bg-purple-200 text-purple-700'
                        }`}>
                          {tactic.effort} effort
                        </span>
                      </div>
                      <div className="mt-2 text-lg font-bold text-orange-600">{tactic.impact}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick Wins */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-white">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Zap size={24} />
                Top 5 Quick Wins (Low Effort, High Impact)
              </h2>
              <div className="space-y-4">
                {[
                  { rank: 1, name: 'Welcome bonus coins', impact: '+25% first transaction', effort: '2 hours dev' },
                  { rank: 2, name: 'Social login', impact: '+7% registration', effort: '1 day dev' },
                  { rank: 3, name: 'Push at optimal time', impact: '+22% app opens', effort: '4 hours dev' },
                  { rank: 4, name: 'Progress bar onboarding', impact: '+12% completion', effort: '3 hours dev' },
                  { rank: 5, name: 'Tutorial overlay', impact: '+10% first transaction', effort: '4 hours dev' },
                ].map((win) => (
                  <div key={win.rank} className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-black text-xl">
                      {win.rank}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold">{win.name}</div>
                      <div className="text-emerald-200 text-sm">{win.effort}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{win.impact}</div>
                    </div>
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
