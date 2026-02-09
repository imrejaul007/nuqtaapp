'use client';

import React, { useState } from 'react';
import {
  Target, TrendingUp, Users, Heart, Zap, BarChart3,
  CheckCircle, XCircle, AlertTriangle, ArrowUp, ArrowDown,
  Star, ThumbsUp, Repeat, Clock, DollarSign, Activity,
  Award, Lightbulb, MessageSquare, Gift, Crown, Sparkles,
  ChevronRight, Info, HelpCircle
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Sean Ellis Score Data
const seanEllisData = {
  currentScore: 42,
  target: 40,
  responses: 1250,
  breakdown: {
    veryDisappointed: 42,
    somewhatDisappointed: 38,
    notDisappointed: 20,
  },
  trend: [
    { month: 'Jan', score: 28 },
    { month: 'Feb', score: 32 },
    { month: 'Mar', score: 35 },
    { month: 'Apr', score: 38 },
    { month: 'May', score: 42 },
  ],
  bySegment: [
    { segment: 'Power Users (10+ txns/mo)', score: 68, count: 890 },
    { segment: 'Regular Users (5-9 txns/mo)', score: 45, count: 2340 },
    { segment: 'Casual Users (1-4 txns/mo)', score: 28, count: 5670 },
    { segment: 'Dormant Users', score: 12, count: 2100 },
  ]
};

// Core PMF Metrics
const pmfMetrics = [
  {
    name: 'Sean Ellis Score',
    value: 42,
    target: 40,
    unit: '%',
    status: 'good',
    description: '"Very disappointed" if Nuqta disappeared',
    importance: 'Primary PMF indicator',
    icon: Heart
  },
  {
    name: 'D7 Retention',
    value: 58,
    target: 50,
    unit: '%',
    status: 'good',
    description: 'Users active after 7 days',
    importance: 'Early engagement signal',
    icon: Repeat
  },
  {
    name: 'D30 Retention',
    value: 35,
    target: 40,
    unit: '%',
    status: 'warning',
    description: 'Users active after 30 days',
    importance: 'Core retention metric',
    icon: Repeat
  },
  {
    name: 'Weekly Active Users',
    value: 8420,
    target: 10000,
    unit: '',
    status: 'warning',
    description: 'Unique users with 1+ transaction/week',
    importance: 'Engagement depth',
    icon: Users
  },
  {
    name: 'Organic Growth Rate',
    value: 32,
    target: 30,
    unit: '%',
    status: 'good',
    description: 'New users from referrals/organic',
    importance: 'Word-of-mouth indicator',
    icon: TrendingUp
  },
  {
    name: 'NPS Score',
    value: 34,
    target: 30,
    unit: '',
    status: 'good',
    description: 'Net Promoter Score',
    importance: 'Customer satisfaction',
    icon: Star
  },
  {
    name: 'Feature Adoption',
    value: 45,
    target: 60,
    unit: '%',
    status: 'warning',
    description: 'Users using 3+ core features',
    importance: 'Product stickiness',
    icon: Zap
  },
  {
    name: 'Time to Value',
    value: 2.3,
    target: 3,
    unit: ' days',
    status: 'good',
    description: 'Days to first coin redemption',
    importance: 'Onboarding effectiveness',
    icon: Clock
  },
];

// Engagement Depth Analysis
const engagementDepth = [
  { level: 'Level 1: Downloaded', users: 25000, percentage: 100, description: 'Downloaded the app' },
  { level: 'Level 2: Registered', users: 18750, percentage: 75, description: 'Completed registration' },
  { level: 'Level 3: First Transaction', users: 12500, percentage: 50, description: 'Made first purchase' },
  { level: 'Level 4: Earned Coins', users: 11250, percentage: 45, description: 'Earned first coins' },
  { level: 'Level 5: Redeemed Coins', users: 7500, percentage: 30, description: 'Redeemed coins' },
  { level: 'Level 6: Weekly Active', users: 4375, percentage: 17.5, description: '1+ transaction/week' },
  { level: 'Level 7: Referred Friend', users: 1875, percentage: 7.5, description: 'Successful referral' },
  { level: 'Level 8: Power User', users: 625, percentage: 2.5, description: '10+ transactions/month' },
];

// Must-Have vs Nice-to-Have Features
const featureAnalysis = [
  {
    feature: 'Earn Coins on Purchase',
    mustHave: 92,
    niceToHave: 6,
    notNeeded: 2,
    category: 'Core'
  },
  {
    feature: 'Redeem at Checkout',
    mustHave: 88,
    niceToHave: 9,
    notNeeded: 3,
    category: 'Core'
  },
  {
    feature: 'Merchant Discovery',
    mustHave: 72,
    niceToHave: 22,
    notNeeded: 6,
    category: 'Discovery'
  },
  {
    feature: 'Daily Streak Bonus',
    mustHave: 45,
    niceToHave: 42,
    notNeeded: 13,
    category: 'Gamification'
  },
  {
    feature: 'Referral Rewards',
    mustHave: 38,
    niceToHave: 48,
    notNeeded: 14,
    category: 'Growth'
  },
  {
    feature: 'Split Bill Feature',
    mustHave: 28,
    niceToHave: 52,
    notNeeded: 20,
    category: 'Social'
  },
  {
    feature: 'Nuqta+ Subscription',
    mustHave: 22,
    niceToHave: 45,
    notNeeded: 33,
    category: 'Premium'
  },
  {
    feature: 'Family Sharing',
    mustHave: 18,
    niceToHave: 48,
    notNeeded: 34,
    category: 'Premium'
  },
];

// Retention Cohort Curves
const retentionCurves = {
  nuqta: [100, 68, 52, 42, 38, 35, 33, 31, 30, 29, 28, 27],
  benchmark: [100, 55, 40, 32, 28, 25, 23, 21, 20, 19, 18, 17],
  topApps: [100, 75, 60, 52, 48, 45, 43, 41, 40, 39, 38, 37],
};

// Qualitative Feedback Themes
const feedbackThemes = [
  {
    theme: 'Easy to use',
    mentions: 342,
    sentiment: 'positive',
    quotes: ['"Love how simple earning coins is"', '"Finally an app that just works"']
  },
  {
    theme: 'Great merchant selection',
    mentions: 287,
    sentiment: 'positive',
    quotes: ['"All my favorite restaurants"', '"Gold shops is a game changer"']
  },
  {
    theme: 'Slow coin posting',
    mentions: 156,
    sentiment: 'negative',
    quotes: ['"Takes too long to see my coins"', '"Why does it take 24 hours?"']
  },
  {
    theme: 'Want more merchants',
    mentions: 134,
    sentiment: 'neutral',
    quotes: ['"Add more electronics stores"', '"Need more in Al Ain"']
  },
  {
    theme: 'Streak keeps me coming back',
    mentions: 98,
    sentiment: 'positive',
    quotes: ['"Addicted to my streak"', '"Don\'t want to break it!"']
  },
];

// PMF Status Assessment
const pmfStatus = {
  overall: 'APPROACHING',
  confidence: 72,
  blockers: [
    'D30 retention below 40% target',
    'Feature adoption needs improvement',
    'Casual user segment showing low PMF'
  ],
  accelerators: [
    'Sean Ellis score above threshold',
    'Strong NPS and organic growth',
    'Power users show excellent PMF'
  ]
};

export default function PMFScoreboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'seanellis' | 'retention' | 'features' | 'feedback'>('overview');

  const tabs = [
    { id: 'overview', label: 'PMF Overview', icon: Target },
    { id: 'seanellis', label: 'Sean Ellis Score', icon: Heart },
    { id: 'retention', label: 'Retention Analysis', icon: Repeat },
    { id: 'features', label: 'Feature Validation', icon: Zap },
    { id: 'feedback', label: 'User Feedback', icon: MessageSquare },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-emerald-600 bg-emerald-100';
      case 'warning': return 'text-amber-600 bg-amber-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Target size={32} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-black">Product-Market Fit Scoreboard</h1>
              <p className="text-blue-200 mt-1">Sean Ellis score, retention curves & feature validation</p>
            </div>
          </div>

          {/* PMF Status Banner */}
          <div className="mt-8 bg-white/10 backdrop-blur rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex items-center gap-4">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black ${
                  pmfStatus.overall === 'ACHIEVED' ? 'bg-emerald-500' :
                  pmfStatus.overall === 'APPROACHING' ? 'bg-amber-500' :
                  'bg-red-500'
                }`}>
                  {pmfStatus.confidence}%
                </div>
                <div>
                  <div className="text-sm text-blue-200">PMF Status</div>
                  <div className="text-2xl font-bold">{pmfStatus.overall}</div>
                  <div className="text-sm text-blue-200">Confidence Level</div>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-blue-200 mb-2">Accelerators</div>
                  {pmfStatus.accelerators.slice(0, 2).map((acc, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-emerald-300">
                      <CheckCircle size={14} />
                      {acc}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm text-blue-200 mb-2">Blockers</div>
                  {pmfStatus.blockers.slice(0, 2).map((block, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-amber-300">
                      <AlertTriangle size={14} />
                      {block}
                    </div>
                  ))}
                </div>
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
                    ? 'bg-blue-600 text-white'
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

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* PMF Metrics Grid */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BarChart3 className="text-blue-600" size={24} />
                Core PMF Metrics
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {pmfMetrics.map((metric) => (
                  <div
                    key={metric.name}
                    className={`rounded-xl p-4 border-2 ${
                      metric.status === 'good' ? 'border-emerald-200 bg-emerald-50' :
                      metric.status === 'warning' ? 'border-amber-200 bg-amber-50' :
                      'border-red-200 bg-red-50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <metric.icon size={24} className={
                        metric.status === 'good' ? 'text-emerald-600' :
                        metric.status === 'warning' ? 'text-amber-600' :
                        'text-red-600'
                      } />
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${getStatusColor(metric.status)}`}>
                        {metric.status === 'good' ? 'ON TRACK' : metric.status === 'warning' ? 'NEEDS WORK' : 'CRITICAL'}
                      </span>
                    </div>
                    <div className="text-3xl font-black text-gray-900">
                      {typeof metric.value === 'number' && metric.value > 1000
                        ? metric.value.toLocaleString()
                        : metric.value}{metric.unit}
                    </div>
                    <div className="text-sm font-medium text-gray-700 mt-1">{metric.name}</div>
                    <div className="text-xs text-gray-500 mt-1">Target: {metric.target}{metric.unit}</div>
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <div className="text-xs text-gray-600">{metric.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement Funnel */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Activity className="text-blue-600" size={24} />
                Engagement Depth Funnel
              </h2>

              <div className="space-y-3">
                {engagementDepth.map((level, index) => (
                  <div key={level.level} className="flex items-center gap-4">
                    <div className="w-32 text-sm font-medium text-gray-600 text-right">
                      {level.level.split(':')[0]}
                    </div>
                    <div className="flex-1">
                      <div
                        className="h-10 rounded-lg flex items-center justify-between px-4 text-white font-medium transition-all"
                        style={{
                          width: `${level.percentage}%`,
                          background: `linear-gradient(90deg, ${
                            index < 3 ? '#3b82f6' : index < 6 ? '#8b5cf6' : '#ec4899'
                          }, ${
                            index < 3 ? '#6366f1' : index < 6 ? '#a855f7' : '#f43f5e'
                          })`
                        }}
                      >
                        <span className="text-sm">{level.description}</span>
                        <span className="text-sm font-bold">{level.users.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="w-16 text-right font-bold text-gray-900">
                      {level.percentage}%
                    </div>
                  </div>
                ))}
              </div>

              {/* Funnel Insights */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <div className="text-emerald-700 font-semibold">Strong Conversion</div>
                  <div className="text-sm text-emerald-600 mt-1">75% complete registration - above industry avg (60%)</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <div className="text-amber-700 font-semibold">Drop-off Point</div>
                  <div className="text-sm text-amber-600 mt-1">Only 30% redeem coins - need better prompts</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-blue-700 font-semibold">Focus Area</div>
                  <div className="text-sm text-blue-600 mt-1">Increase referrals from 7.5% → 15%</div>
                </div>
              </div>
            </div>

            {/* PMF Journey */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award size={24} />
                PMF Achievement Roadmap
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { phase: 'Early Signals', status: 'completed', metrics: 'First 1K users, 20% D7 retention' },
                  { phase: 'Growing Demand', status: 'completed', metrics: 'Organic growth >20%, NPS >20' },
                  { phase: 'Approaching PMF', status: 'current', metrics: 'Sean Ellis >40%, D30 >35%' },
                  { phase: 'PMF Achieved', status: 'upcoming', metrics: 'D30 >40%, Feature adoption >60%' },
                ].map((phase, i) => (
                  <div
                    key={phase.phase}
                    className={`p-4 rounded-xl ${
                      phase.status === 'completed' ? 'bg-white/20' :
                      phase.status === 'current' ? 'bg-white/30 border-2 border-white' :
                      'bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {phase.status === 'completed' && <CheckCircle size={18} className="text-emerald-300" />}
                      {phase.status === 'current' && <Activity size={18} className="text-amber-300" />}
                      {phase.status === 'upcoming' && <Target size={18} className="text-blue-300" />}
                      <span className="text-xs font-bold uppercase">
                        {phase.status === 'current' ? 'YOU ARE HERE' : phase.status}
                      </span>
                    </div>
                    <div className="font-bold">{phase.phase}</div>
                    <div className="text-sm text-blue-200 mt-1">{phase.metrics}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Sean Ellis Score Tab */}
        {activeTab === 'seanellis' && (
          <div className="space-y-8">
            {/* Main Score */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Score Display */}
                <div className="md:w-64 text-center">
                  <div className="relative inline-block">
                    <svg className="w-48 h-48" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                      <circle
                        cx="50" cy="50" r="45" fill="none"
                        stroke={seanEllisData.currentScore >= 40 ? '#10b981' : '#f59e0b'}
                        strokeWidth="10"
                        strokeDasharray={`${(seanEllisData.currentScore / 100) * 283} 283`}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-5xl font-black text-gray-900">{seanEllisData.currentScore}%</div>
                      <div className="text-sm text-gray-500">Sean Ellis Score</div>
                    </div>
                  </div>
                  <div className={`mt-4 px-4 py-2 rounded-full font-bold ${
                    seanEllisData.currentScore >= 40 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {seanEllisData.currentScore >= 40 ? 'PMF THRESHOLD MET' : 'APPROACHING PMF'}
                  </div>
                </div>

                {/* Breakdown */}
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Response Breakdown</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-emerald-700">Very Disappointed</span>
                        <span className="font-bold">{seanEllisData.breakdown.veryDisappointed}%</span>
                      </div>
                      <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: `${seanEllisData.breakdown.veryDisappointed}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-amber-700">Somewhat Disappointed</span>
                        <span className="font-bold">{seanEllisData.breakdown.somewhatDisappointed}%</span>
                      </div>
                      <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-500 rounded-full"
                          style={{ width: `${seanEllisData.breakdown.somewhatDisappointed}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-600">Not Disappointed</span>
                        <span className="font-bold">{seanEllisData.breakdown.notDisappointed}%</span>
                      </div>
                      <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gray-400 rounded-full"
                          style={{ width: `${seanEllisData.breakdown.notDisappointed}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Info size={18} className="text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-blue-800">About the Sean Ellis Score</div>
                        <div className="text-sm text-blue-600 mt-1">
                          If 40%+ users would be &quot;very disappointed&quot; without your product, you&apos;ve achieved PMF.
                          Based on {seanEllisData.responses.toLocaleString()} survey responses.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Score by Segment */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Users className="text-blue-600" size={24} />
                Score by User Segment
              </h2>

              <div className="space-y-4">
                {seanEllisData.bySegment.map((seg) => (
                  <div key={seg.segment} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{seg.segment}</div>
                      <div className="text-sm text-gray-500">{seg.count.toLocaleString()} respondents</div>
                    </div>
                    <div className="w-48">
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${seg.score >= 40 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                          style={{ width: `${seg.score}%` }}
                        />
                      </div>
                    </div>
                    <div className={`w-16 text-right font-bold ${seg.score >= 40 ? 'text-emerald-600' : 'text-amber-600'}`}>
                      {seg.score}%
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <div className="font-semibold text-emerald-700 flex items-center gap-2">
                    <CheckCircle size={18} />
                    Strong PMF with Power Users
                  </div>
                  <div className="text-sm text-emerald-600 mt-1">
                    68% score indicates strong product-market fit with most engaged segment
                  </div>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <div className="font-semibold text-amber-700 flex items-center gap-2">
                    <AlertTriangle size={18} />
                    Opportunity: Casual Users
                  </div>
                  <div className="text-sm text-amber-600 mt-1">
                    28% score suggests need to improve value proposition for light users
                  </div>
                </div>
              </div>
            </div>

            {/* Trend Over Time */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="text-blue-600" size={24} />
                Score Trend
              </h2>

              <div className="h-64 flex items-end justify-between gap-4">
                {seanEllisData.trend.map((point, index) => (
                  <div key={point.month} className="flex-1 flex flex-col items-center">
                    <div className="text-sm font-bold text-gray-900 mb-2">{point.score}%</div>
                    <div
                      className={`w-full rounded-t-lg ${point.score >= 40 ? 'bg-emerald-500' : 'bg-blue-500'}`}
                      style={{ height: `${(point.score / 70) * 100}%` }}
                    />
                    <div className="text-sm text-gray-500 mt-2">{point.month}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-emerald-600">
                <ArrowUp size={18} />
                <span className="font-medium">+14 points over 5 months</span>
              </div>
            </div>
          </div>
        )}

        {/* Retention Analysis Tab */}
        {activeTab === 'retention' && (
          <div className="space-y-8">
            {/* Retention Curves */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Repeat className="text-blue-600" size={24} />
                Retention Curves Comparison
              </h2>

              <div className="h-80 relative">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-right text-sm text-gray-500">
                  <span>100%</span>
                  <span>75%</span>
                  <span>50%</span>
                  <span>25%</span>
                  <span>0%</span>
                </div>

                {/* Chart area */}
                <div className="ml-14 h-full border-l border-b border-gray-200 relative">
                  {/* Grid lines */}
                  {[25, 50, 75].map((line) => (
                    <div
                      key={line}
                      className="absolute w-full border-t border-gray-100"
                      style={{ bottom: `${line}%` }}
                    />
                  ))}

                  {/* 40% PMF threshold line */}
                  <div
                    className="absolute w-full border-t-2 border-dashed border-red-400"
                    style={{ bottom: '40%' }}
                  >
                    <span className="absolute right-0 -top-3 text-xs text-red-500 font-medium">40% PMF Threshold</span>
                  </div>

                  {/* Curves visualization (simplified) */}
                  <div className="absolute inset-0 flex items-end justify-between px-4 pb-8">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((month) => (
                      <div key={month} className="flex flex-col items-center gap-1" style={{ width: '7%' }}>
                        {/* Nuqta dot */}
                        <div
                          className="w-3 h-3 rounded-full bg-blue-600"
                          style={{ marginBottom: `${(retentionCurves.nuqta[month] / 100) * 200}px` }}
                          title={`Nuqta: ${retentionCurves.nuqta[month]}%`}
                        />
                        <span className="text-xs text-gray-500 mt-auto">M{month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex justify-center gap-8 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-600" />
                  <span className="text-sm text-gray-600">Nuqta</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gray-400" />
                  <span className="text-sm text-gray-600">Industry Avg</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500" />
                  <span className="text-sm text-gray-600">Top 10% Apps</span>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="text-blue-600 text-sm font-medium">D7 Retention</div>
                  <div className="text-3xl font-black text-gray-900 mt-1">58%</div>
                  <div className="text-emerald-600 text-sm flex items-center gap-1 mt-1">
                    <ArrowUp size={14} /> +8% vs industry
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="text-blue-600 text-sm font-medium">D30 Retention</div>
                  <div className="text-3xl font-black text-gray-900 mt-1">35%</div>
                  <div className="text-amber-600 text-sm flex items-center gap-1 mt-1">
                    <AlertTriangle size={14} /> Target: 40%
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="text-blue-600 text-sm font-medium">D90 Retention</div>
                  <div className="text-3xl font-black text-gray-900 mt-1">28%</div>
                  <div className="text-emerald-600 text-sm flex items-center gap-1 mt-1">
                    <ArrowUp size={14} /> +10% vs industry
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="text-blue-600 text-sm font-medium">Plateau Point</div>
                  <div className="text-3xl font-black text-gray-900 mt-1">~27%</div>
                  <div className="text-gray-500 text-sm mt-1">Month 8 onwards</div>
                </div>
              </div>
            </div>

            {/* Retention by Cohort */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BarChart3 className="text-blue-600" size={24} />
                Retention Improvement Over Time
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Cohort</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Users</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">D7</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">D30</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">D90</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { cohort: 'Jan 2024', users: 2500, d7: 52, d30: 28, d90: 18 },
                      { cohort: 'Feb 2024', users: 3200, d7: 55, d30: 31, d90: 22 },
                      { cohort: 'Mar 2024', users: 4100, d7: 58, d30: 33, d90: 25 },
                      { cohort: 'Apr 2024', users: 3800, d7: 56, d30: 34, d90: null },
                      { cohort: 'May 2024', users: 4500, d7: 58, d30: 35, d90: null },
                    ].map((row) => (
                      <tr key={row.cohort} className="border-b border-gray-100">
                        <td className="py-4 px-4 font-medium text-gray-900">{row.cohort}</td>
                        <td className="py-4 px-4 text-center text-gray-600">{row.users.toLocaleString()}</td>
                        <td className="py-4 px-4 text-center">
                          <span className={`font-medium ${row.d7 >= 55 ? 'text-emerald-600' : 'text-gray-600'}`}>
                            {row.d7}%
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className={`font-medium ${row.d30 >= 35 ? 'text-emerald-600' : row.d30 >= 30 ? 'text-amber-600' : 'text-red-600'}`}>
                            {row.d30}%
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          {row.d90 ? (
                            <span className={`font-medium ${row.d90 >= 25 ? 'text-emerald-600' : 'text-amber-600'}`}>
                              {row.d90}%
                            </span>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <ArrowUp size={16} className="text-emerald-500 inline" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Feature Validation Tab */}
        {activeTab === 'features' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Zap className="text-blue-600" size={24} />
                Feature: Must-Have vs Nice-to-Have Analysis
              </h2>

              <div className="space-y-6">
                {featureAnalysis.map((feature) => (
                  <div key={feature.feature} className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="font-bold text-gray-900">{feature.feature}</div>
                        <div className="text-sm text-gray-500">{feature.category}</div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        feature.mustHave >= 60 ? 'bg-emerald-100 text-emerald-700' :
                        feature.mustHave >= 40 ? 'bg-blue-100 text-blue-700' :
                        feature.mustHave >= 25 ? 'bg-amber-100 text-amber-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {feature.mustHave >= 60 ? 'MUST-HAVE' :
                         feature.mustHave >= 40 ? 'IMPORTANT' :
                         feature.mustHave >= 25 ? 'NICE-TO-HAVE' : 'OPTIONAL'}
                      </span>
                    </div>

                    <div className="flex h-8 rounded-lg overflow-hidden">
                      <div
                        className="bg-emerald-500 flex items-center justify-center text-white text-xs font-medium"
                        style={{ width: `${feature.mustHave}%` }}
                      >
                        {feature.mustHave}%
                      </div>
                      <div
                        className="bg-blue-400 flex items-center justify-center text-white text-xs font-medium"
                        style={{ width: `${feature.niceToHave}%` }}
                      >
                        {feature.niceToHave}%
                      </div>
                      <div
                        className="bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-medium"
                        style={{ width: `${feature.notNeeded}%` }}
                      >
                        {feature.notNeeded}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex justify-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-emerald-500" />
                  <span className="text-sm text-gray-600">Must-Have</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-blue-400" />
                  <span className="text-sm text-gray-600">Nice-to-Have</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-gray-300" />
                  <span className="text-sm text-gray-600">Not Needed</span>
                </div>
              </div>
            </div>

            {/* Feature Insights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-200">
                <h3 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
                  <Crown size={20} />
                  Core Value Proposition
                </h3>
                <div className="space-y-3">
                  {featureAnalysis.filter(f => f.mustHave >= 60).map((f) => (
                    <div key={f.feature} className="flex items-center gap-2 text-emerald-700">
                      <CheckCircle size={16} />
                      <span>{f.feature}</span>
                      <span className="ml-auto font-bold">{f.mustHave}%</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-sm text-emerald-600">
                  These features ARE your product. Protect and improve them relentlessly.
                </div>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 border-2 border-amber-200">
                <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
                  <Lightbulb size={20} />
                  Expansion Opportunities
                </h3>
                <div className="space-y-3">
                  {featureAnalysis.filter(f => f.mustHave >= 25 && f.mustHave < 60).map((f) => (
                    <div key={f.feature} className="flex items-center gap-2 text-amber-700">
                      <Star size={16} />
                      <span>{f.feature}</span>
                      <span className="ml-auto font-bold">{f.mustHave}%</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-sm text-amber-600">
                  Improve these to convert more casual users into power users.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* User Feedback Tab */}
        {activeTab === 'feedback' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MessageSquare className="text-blue-600" size={24} />
                Qualitative Feedback Themes
              </h2>

              <div className="space-y-4">
                {feedbackThemes.map((theme) => (
                  <div
                    key={theme.theme}
                    className={`p-4 rounded-xl border-2 ${
                      theme.sentiment === 'positive' ? 'border-emerald-200 bg-emerald-50' :
                      theme.sentiment === 'negative' ? 'border-red-200 bg-red-50' :
                      'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {theme.sentiment === 'positive' && <ThumbsUp size={18} className="text-emerald-600" />}
                        {theme.sentiment === 'negative' && <AlertTriangle size={18} className="text-red-600" />}
                        {theme.sentiment === 'neutral' && <HelpCircle size={18} className="text-gray-600" />}
                        <span className="font-bold text-gray-900">{theme.theme}</span>
                      </div>
                      <span className="font-bold text-gray-600">{theme.mentions} mentions</span>
                    </div>
                    <div className="space-y-2">
                      {theme.quotes.map((quote) => (
                        <div key={quote} className="text-sm text-gray-600 italic">
                          {quote}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Items from Feedback */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Lightbulb size={24} />
                Action Items from Feedback
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { priority: 'HIGH', action: 'Reduce coin posting time from 24h to 1h', feedback: 'Slow coin posting', impact: 'Fix top complaint' },
                  { priority: 'MEDIUM', action: 'Add 20 more electronics merchants', feedback: 'Want more merchants', impact: 'Expand category appeal' },
                  { priority: 'MEDIUM', action: 'Launch Al Ain merchant campaign', feedback: 'Need more in Al Ain', impact: 'Geographic expansion' },
                  { priority: 'LOW', action: 'Add streak leaderboard', feedback: 'Streak keeps me coming back', impact: 'Enhance positive feature' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-4">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                      item.priority === 'HIGH' ? 'bg-red-500/50' :
                      item.priority === 'MEDIUM' ? 'bg-amber-500/50' :
                      'bg-green-500/50'
                    }`}>
                      {item.priority}
                    </span>
                    <div className="font-bold mt-2">{item.action}</div>
                    <div className="text-blue-200 text-sm mt-1">From: &quot;{item.feedback}&quot;</div>
                    <div className="text-emerald-300 text-sm mt-1">{item.impact}</div>
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
