'use client';

import React, { useState } from 'react';
import {
  Brain, Users, TrendingUp, AlertTriangle, Heart, Target,
  BarChart3, Activity, Zap, Crown, Star, Clock, DollarSign,
  ArrowUp, ArrowDown, Minus, Eye, ShoppingBag, Calendar,
  MessageSquare, ThumbsUp, ThumbsDown, Smartphone, MapPin,
  Gift, Repeat, UserX, UserCheck, Filter, Search, Bell,
  Mail, Phone, ChevronDown, ChevronUp, Award, Sparkles
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Customer Health Score Components
interface Customer {
  id: string;
  name: string;
  avatar: string;
  segment: 'Champion' | 'Loyal' | 'Potential' | 'At-Risk' | 'Dormant' | 'Churned';
  healthScore: number;
  ltv: number;
  totalTransactions: number;
  avgTransactionValue: number;
  lastActive: string;
  daysInactive: number;
  referrals: number;
  nps: number | null;
  riskFactors: string[];
  opportunities: string[];
  preferredCategories: string[];
  preferredMerchants: string[];
  engagementTrend: 'up' | 'down' | 'stable';
  coins: number;
}

const sampleCustomers: Customer[] = [
  {
    id: 'C001',
    name: 'Fatima Al-Hassan',
    avatar: 'FA',
    segment: 'Champion',
    healthScore: 95,
    ltv: 4850,
    totalTransactions: 127,
    avgTransactionValue: 285,
    lastActive: '2 hours ago',
    daysInactive: 0,
    referrals: 8,
    nps: 10,
    riskFactors: [],
    opportunities: ['Upgrade to Nuqta+ Family', 'Ambassador program candidate'],
    preferredCategories: ['Dining', 'Fashion', 'Gold'],
    preferredMerchants: ['Al Fardan Jewellers', 'SALT', 'Namshi'],
    engagementTrend: 'up',
    coins: 12450
  },
  {
    id: 'C002',
    name: 'Ahmed Rahman',
    avatar: 'AR',
    segment: 'Loyal',
    healthScore: 78,
    ltv: 2340,
    totalTransactions: 54,
    avgTransactionValue: 195,
    lastActive: '1 day ago',
    daysInactive: 1,
    referrals: 3,
    nps: 8,
    riskFactors: ['Transaction frequency declining'],
    opportunities: ['Cross-sell Gold category', 'Streak bonus reminder'],
    preferredCategories: ['Grocery', 'Dining', 'Electronics'],
    preferredMerchants: ['Carrefour', 'Shawarma Time', 'Jumbo'],
    engagementTrend: 'stable',
    coins: 3420
  },
  {
    id: 'C003',
    name: 'Sarah Mitchell',
    avatar: 'SM',
    segment: 'At-Risk',
    healthScore: 42,
    ltv: 890,
    totalTransactions: 18,
    avgTransactionValue: 156,
    lastActive: '12 days ago',
    daysInactive: 12,
    referrals: 0,
    nps: 6,
    riskFactors: ['No activity in 12 days', 'Never referred anyone', 'Declining NPS'],
    opportunities: ['Win-back campaign', 'Personal outreach', 'Special offer'],
    preferredCategories: ['Salon', 'Cafe'],
    preferredMerchants: ['Tips & Toes', 'Costa Coffee'],
    engagementTrend: 'down',
    coins: 580
  },
  {
    id: 'C004',
    name: 'Mohammed Al-Qasimi',
    avatar: 'MQ',
    segment: 'Dormant',
    healthScore: 25,
    ltv: 450,
    totalTransactions: 8,
    avgTransactionValue: 210,
    lastActive: '45 days ago',
    daysInactive: 45,
    referrals: 1,
    nps: null,
    riskFactors: ['No activity in 45 days', 'Unresponsive to emails', 'Coins expiring soon'],
    opportunities: ['Aggressive win-back', 'Coin expiry notification', 'Phone outreach'],
    preferredCategories: ['Electronics', 'Gym'],
    preferredMerchants: ['Sharaf DG', 'Fitness First'],
    engagementTrend: 'down',
    coins: 890
  },
  {
    id: 'C005',
    name: 'Priya Sharma',
    avatar: 'PS',
    segment: 'Potential',
    healthScore: 65,
    ltv: 560,
    totalTransactions: 12,
    avgTransactionValue: 178,
    lastActive: '3 days ago',
    daysInactive: 3,
    referrals: 0,
    nps: 7,
    riskFactors: ['Low transaction frequency', 'Single category user'],
    opportunities: ['Category expansion', 'Referral incentive', 'Nuqta+ trial'],
    preferredCategories: ['Dining'],
    preferredMerchants: ['PF Changs', 'Shake Shack', 'Five Guys'],
    engagementTrend: 'up',
    coins: 1240
  },
];

// Segment definitions with actions
const segments = [
  {
    name: 'Champions',
    description: 'Best customers. High LTV, frequent transactions, promoters.',
    count: 1240,
    percentage: 8,
    healthRange: '90-100',
    color: 'bg-emerald-500',
    textColor: 'text-emerald-600',
    bgLight: 'bg-emerald-50',
    icon: Crown,
    avgLtv: 4500,
    churnRisk: 2,
    actions: ['Ambassador program', 'Early access to features', 'VIP events', 'Personal account manager']
  },
  {
    name: 'Loyal',
    description: 'Regular users with consistent engagement and good LTV.',
    count: 3450,
    percentage: 22,
    healthRange: '70-89',
    color: 'bg-blue-500',
    textColor: 'text-blue-600',
    bgLight: 'bg-blue-50',
    icon: Heart,
    avgLtv: 2200,
    churnRisk: 8,
    actions: ['Upgrade to Nuqta+', 'Referral incentives', 'Category expansion', 'Streak bonuses']
  },
  {
    name: 'Potential',
    description: 'New or growing users showing positive signals.',
    count: 4200,
    percentage: 27,
    healthRange: '50-69',
    color: 'bg-purple-500',
    textColor: 'text-purple-600',
    bgLight: 'bg-purple-50',
    icon: TrendingUp,
    avgLtv: 680,
    churnRisk: 15,
    actions: ['Onboarding optimization', 'First referral push', 'Category discovery', 'Gamification hooks']
  },
  {
    name: 'At-Risk',
    description: 'Previously active users showing decline in engagement.',
    count: 2890,
    percentage: 19,
    healthRange: '30-49',
    color: 'bg-amber-500',
    textColor: 'text-amber-600',
    bgLight: 'bg-amber-50',
    icon: AlertTriangle,
    avgLtv: 890,
    churnRisk: 45,
    actions: ['Win-back emails', 'Special offers', 'Personal outreach', 'Feedback survey']
  },
  {
    name: 'Dormant',
    description: 'No activity in 30+ days. High churn probability.',
    count: 2650,
    percentage: 17,
    healthRange: '10-29',
    color: 'bg-orange-500',
    textColor: 'text-orange-600',
    bgLight: 'bg-orange-50',
    icon: Clock,
    avgLtv: 420,
    churnRisk: 72,
    actions: ['Aggressive discounts', 'Coin expiry alerts', 'Phone outreach', '"We miss you" campaign']
  },
  {
    name: 'Churned',
    description: 'No activity in 90+ days. Needs reactivation.',
    count: 1120,
    percentage: 7,
    healthRange: '0-9',
    color: 'bg-red-500',
    textColor: 'text-red-600',
    bgLight: 'bg-red-50',
    icon: UserX,
    avgLtv: 180,
    churnRisk: 95,
    actions: ['Final attempt offer', 'Survey for feedback', 'Archive after 180 days', 'Retargeting ads']
  },
];

// Churn prediction model factors
const churnFactors = [
  { factor: 'Days since last transaction', weight: 25, description: 'Primary indicator of disengagement' },
  { factor: 'Transaction frequency trend', weight: 20, description: 'Declining frequency signals churn' },
  { factor: 'Coin redemption rate', weight: 15, description: 'Not redeeming coins = low engagement' },
  { factor: 'App open frequency', weight: 12, description: 'Declining app opens predict churn' },
  { factor: 'NPS/Feedback score', weight: 10, description: 'Low NPS correlates with churn' },
  { factor: 'Referral activity', weight: 8, description: 'Active referrers rarely churn' },
  { factor: 'Category diversity', weight: 5, description: 'Single-category users churn faster' },
  { factor: 'Support ticket sentiment', weight: 5, description: 'Negative tickets = higher risk' },
];

// NPS Distribution
const npsDistribution = {
  promoters: { count: 4890, percentage: 52, score: '9-10' },
  passives: { count: 2810, percentage: 30, score: '7-8' },
  detractors: { count: 1680, percentage: 18, score: '0-6' },
  npsScore: 34,
  trend: '+5 from last month'
};

// Behavioral cohorts
const behavioralCohorts = [
  {
    name: 'Weekend Warriors',
    count: 2340,
    behavior: 'Primarily transact on weekends',
    avgSpend: 245,
    bestChannel: 'Push notifications (Fri 4pm)',
    bestOffer: 'Double coins weekends'
  },
  {
    name: 'Lunch Crowd',
    count: 3120,
    behavior: 'Consistent lunch-time transactions',
    avgSpend: 85,
    bestChannel: 'In-app 11am reminder',
    bestOffer: 'Lunch combo deals'
  },
  {
    name: 'Gold Collectors',
    count: 890,
    behavior: 'High-value jewelry purchases',
    avgSpend: 1850,
    bestChannel: 'WhatsApp personal',
    bestOffer: 'Exclusive gold events'
  },
  {
    name: 'Deal Hunters',
    count: 4560,
    behavior: 'Only transact during promotions',
    avgSpend: 120,
    bestChannel: 'Email + Push combo',
    bestOffer: 'Flash sales, limited time'
  },
  {
    name: 'Streak Masters',
    count: 1240,
    behavior: 'Maintain daily transaction streaks',
    avgSpend: 65,
    bestChannel: 'Streak reminder 8pm',
    bestOffer: 'Streak protection coins'
  },
  {
    name: 'Referral Kings',
    count: 560,
    behavior: '3+ successful referrals',
    avgSpend: 180,
    bestChannel: 'Ambassador channel',
    bestOffer: 'Tiered referral bonuses'
  },
];

// Retention cohort data
const retentionCohorts = [
  { month: 'Jan 2024', acquired: 2500, m1: 68, m2: 52, m3: 45, m4: 41, m5: 38, m6: 35 },
  { month: 'Feb 2024', acquired: 3200, m1: 71, m2: 55, m3: 48, m4: 43, m5: 40, m6: null },
  { month: 'Mar 2024', acquired: 4100, m1: 74, m2: 58, m3: 51, m4: 46, m5: null, m6: null },
  { month: 'Apr 2024', acquired: 3800, m1: 72, m2: 56, m3: 49, m4: null, m5: null, m6: null },
  { month: 'May 2024', acquired: 4500, m1: 76, m2: 59, m3: null, m4: null, m5: null, m6: null },
  { month: 'Jun 2024', acquired: 5200, m1: 78, m2: null, m3: null, m4: null, m5: null, m6: null },
];

export default function CustomerIntelligencePage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'segments' | 'churn' | 'nps' | 'cohorts'>('overview');
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const getHealthColor = (score: number) => {
    if (score >= 90) return 'text-emerald-600 bg-emerald-100';
    if (score >= 70) return 'text-blue-600 bg-blue-100';
    if (score >= 50) return 'text-purple-600 bg-purple-100';
    if (score >= 30) return 'text-amber-600 bg-amber-100';
    if (score >= 10) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  const getSegmentColor = (segment: Customer['segment']) => {
    const colors = {
      'Champion': 'bg-emerald-100 text-emerald-700 border-emerald-300',
      'Loyal': 'bg-blue-100 text-blue-700 border-blue-300',
      'Potential': 'bg-purple-100 text-purple-700 border-purple-300',
      'At-Risk': 'bg-amber-100 text-amber-700 border-amber-300',
      'Dormant': 'bg-orange-100 text-orange-700 border-orange-300',
      'Churned': 'bg-red-100 text-red-700 border-red-300',
    };
    return colors[segment];
  };

  const tabs = [
    { id: 'overview', label: 'Health Overview', icon: Brain },
    { id: 'segments', label: 'Segments', icon: Users },
    { id: 'churn', label: 'Churn Prediction', icon: AlertTriangle },
    { id: 'nps', label: 'NPS & Feedback', icon: MessageSquare },
    { id: 'cohorts', label: 'Retention Cohorts', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Brain size={32} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-black">Customer Intelligence Hub</h1>
              <p className="text-purple-200 mt-1">Real-time health scoring, churn prediction & behavioral insights</p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-purple-200 text-sm">Total Users</div>
              <div className="text-2xl sm:text-3xl font-bold">15,550</div>
              <div className="text-emerald-300 text-sm flex items-center gap-1 mt-1">
                <ArrowUp size={14} /> +12% this month
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-purple-200 text-sm">Avg Health Score</div>
              <div className="text-2xl sm:text-3xl font-bold">68.4</div>
              <div className="text-emerald-300 text-sm flex items-center gap-1 mt-1">
                <ArrowUp size={14} /> +3.2 from last month
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-purple-200 text-sm">At-Risk Users</div>
              <div className="text-2xl sm:text-3xl font-bold text-amber-400">2,890</div>
              <div className="text-amber-300 text-sm flex items-center gap-1 mt-1">
                <AlertTriangle size={14} /> 19% of base
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-purple-200 text-sm">NPS Score</div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400">+34</div>
              <div className="text-emerald-300 text-sm flex items-center gap-1 mt-1">
                <ArrowUp size={14} /> +5 this month
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
                    ? 'bg-purple-600 text-white'
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
            {/* Segment Distribution */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Users className="text-purple-600" size={24} />
                Customer Segment Distribution
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {segments.map((seg) => (
                  <div
                    key={seg.name}
                    className={`${seg.bgLight} rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all border-2 border-transparent hover:border-current ${seg.textColor}`}
                    onClick={() => setSelectedSegment(seg.name)}
                  >
                    <seg.icon size={24} className="mb-2" />
                    <div className="font-bold text-lg">{seg.count.toLocaleString()}</div>
                    <div className="text-sm font-medium">{seg.name}</div>
                    <div className="text-xs opacity-70 mt-1">{seg.percentage}% of users</div>
                  </div>
                ))}
              </div>

              {/* Visual Bar */}
              <div className="mt-6">
                <div className="flex h-8 rounded-full overflow-hidden">
                  {segments.map((seg) => (
                    <div
                      key={seg.name}
                      className={`${seg.color} flex items-center justify-center text-white text-xs font-medium`}
                      style={{ width: `${seg.percentage}%` }}
                      title={`${seg.name}: ${seg.percentage}%`}
                    >
                      {seg.percentage > 10 && `${seg.percentage}%`}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Healthy</span>
                  <span>At Risk</span>
                </div>
              </div>
            </div>

            {/* Customer Health Table */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Activity className="text-purple-600" size={24} />
                  Customer Health Monitor
                </h2>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search customers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200">
                    <Filter size={16} />
                    Filter
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Customer</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Health</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Segment</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">LTV</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Last Active</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Trend</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleCustomers.map((customer) => (
                      <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                              {customer.avatar}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{customer.name}</div>
                              <div className="text-xs text-gray-500">{customer.id} • {customer.totalTransactions} txns</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-bold ${getHealthColor(customer.healthScore)}`}>
                            {customer.healthScore}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSegmentColor(customer.segment)}`}>
                            {customer.segment}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-medium text-gray-900">AED {customer.ltv.toLocaleString()}</div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="text-sm text-gray-600">{customer.lastActive}</div>
                          {customer.daysInactive > 7 && (
                            <div className="text-xs text-amber-600 flex items-center gap-1">
                              <AlertTriangle size={12} />
                              {customer.daysInactive} days inactive
                            </div>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          {customer.engagementTrend === 'up' && (
                            <div className="flex items-center gap-1 text-emerald-600">
                              <ArrowUp size={16} />
                              <span className="text-sm font-medium">Rising</span>
                            </div>
                          )}
                          {customer.engagementTrend === 'down' && (
                            <div className="flex items-center gap-1 text-red-600">
                              <ArrowDown size={16} />
                              <span className="text-sm font-medium">Declining</span>
                            </div>
                          )}
                          {customer.engagementTrend === 'stable' && (
                            <div className="flex items-center gap-1 text-gray-500">
                              <Minus size={16} />
                              <span className="text-sm font-medium">Stable</span>
                            </div>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <button className="p-2 hover:bg-purple-100 rounded-lg text-purple-600" title="Send notification">
                              <Bell size={16} />
                            </button>
                            <button className="p-2 hover:bg-blue-100 rounded-lg text-blue-600" title="Send email">
                              <Mail size={16} />
                            </button>
                            <button className="p-2 hover:bg-emerald-100 rounded-lg text-emerald-600" title="View details">
                              <Eye size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Behavioral Cohorts Quick View */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Target className="text-purple-600" size={24} />
                Behavioral Cohorts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {behavioralCohorts.map((cohort) => (
                  <div key={cohort.name} className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-gray-900">{cohort.name}</h3>
                        <p className="text-sm text-gray-500">{cohort.count.toLocaleString()} users</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-purple-600">AED {cohort.avgSpend}</div>
                        <div className="text-xs text-gray-500">avg spend</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{cohort.behavior}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Bell size={14} className="text-blue-500" />
                        <span className="text-gray-600">{cohort.bestChannel}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gift size={14} className="text-emerald-500" />
                        <span className="text-gray-600">{cohort.bestOffer}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Segments Tab */}
        {activeTab === 'segments' && (
          <div className="space-y-6">
            {segments.map((segment) => (
              <div key={segment.name} className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Segment Header */}
                  <div className={`${segment.bgLight} rounded-xl p-6 lg:w-64 flex-shrink-0`}>
                    <segment.icon size={40} className={segment.textColor} />
                    <h3 className={`text-2xl font-bold mt-3 ${segment.textColor}`}>{segment.name}</h3>
                    <div className="text-3xl font-black text-gray-900 mt-2">{segment.count.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">{segment.percentage}% of total</div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-600">Health Range</div>
                      <div className="font-bold text-gray-900">{segment.healthRange}</div>
                    </div>
                  </div>

                  {/* Segment Details */}
                  <div className="flex-1">
                    <p className="text-gray-600 mb-4">{segment.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-500">Avg LTV</div>
                        <div className="text-xl font-bold text-gray-900">AED {segment.avgLtv.toLocaleString()}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-500">Churn Risk</div>
                        <div className={`text-xl font-bold ${segment.churnRisk > 50 ? 'text-red-600' : segment.churnRisk > 20 ? 'text-amber-600' : 'text-emerald-600'}`}>
                          {segment.churnRisk}%
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-500">Revenue Share</div>
                        <div className="text-xl font-bold text-gray-900">
                          {Math.round((segment.count * segment.avgLtv) / 1000000 * 10) / 10}M AED
                        </div>
                      </div>
                    </div>

                    {/* Recommended Actions */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Recommended Actions</h4>
                      <div className="flex flex-wrap gap-2">
                        {segment.actions.map((action) => (
                          <button
                            key={action}
                            className={`px-4 py-2 rounded-lg text-sm font-medium ${segment.bgLight} ${segment.textColor} hover:shadow-md transition-all`}
                          >
                            {action}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Churn Prediction Tab */}
        {activeTab === 'churn' && (
          <div className="space-y-8">
            {/* Churn Model Overview */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Brain className="text-purple-600" size={24} />
                Churn Prediction Model
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Model Accuracy */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-4">Model Performance</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-50 rounded-xl p-4">
                      <div className="text-sm text-emerald-600">Accuracy</div>
                      <div className="text-3xl font-bold text-emerald-700">87.3%</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="text-sm text-blue-600">Precision</div>
                      <div className="text-3xl font-bold text-blue-700">82.1%</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4">
                      <div className="text-sm text-purple-600">Recall</div>
                      <div className="text-3xl font-bold text-purple-700">79.5%</div>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-4">
                      <div className="text-sm text-amber-600">F1 Score</div>
                      <div className="text-3xl font-bold text-amber-700">80.7%</div>
                    </div>
                  </div>
                </div>

                {/* Factor Weights */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-4">Prediction Factors</h3>
                  <div className="space-y-3">
                    {churnFactors.map((factor) => (
                      <div key={factor.factor}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">{factor.factor}</span>
                          <span className="font-medium text-purple-600">{factor.weight}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                            style={{ width: `${factor.weight * 4}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* High-Risk Users */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <AlertTriangle className="text-red-500" size={24} />
                  High-Risk Users (Churn Probability &gt; 70%)
                </h2>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-bold">847 users</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">User</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Churn Risk</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Days Inactive</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">LTV at Risk</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Top Risk Factor</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Intervention</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Khalid Mansour', risk: 92, inactive: 34, ltv: 1240, factor: 'No app opens in 30 days', intervention: 'Personal call' },
                      { name: 'Aisha Khan', risk: 88, inactive: 28, ltv: 890, factor: 'Support complaint unresolved', intervention: 'Priority support' },
                      { name: 'David Park', risk: 85, inactive: 21, ltv: 2100, factor: 'Coins expiring soon', intervention: 'Expiry reminder + bonus' },
                      { name: 'Maryam Hosseini', risk: 78, inactive: 18, ltv: 560, factor: 'Declining transaction frequency', intervention: 'Win-back offer' },
                      { name: 'James Wilson', risk: 74, inactive: 15, ltv: 1780, factor: 'NPS dropped to 4', intervention: 'Feedback follow-up' },
                    ].map((user, i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-red-50">
                        <td className="py-4 px-4 font-medium text-gray-900">{user.name}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-red-500 rounded-full" style={{ width: `${user.risk}%` }} />
                            </div>
                            <span className="font-bold text-red-600">{user.risk}%</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-amber-600 font-medium">{user.inactive} days</td>
                        <td className="py-4 px-4 font-bold text-gray-900">AED {user.ltv.toLocaleString()}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{user.factor}</td>
                        <td className="py-4 px-4">
                          <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200">
                            {user.intervention}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Churn Prevention ROI */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-6 text-white">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <DollarSign size={24} />
                Churn Prevention ROI
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-emerald-100 text-sm">LTV at Risk (847 users)</div>
                  <div className="text-3xl font-bold">AED 1.2M</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-emerald-100 text-sm">If 30% Saved</div>
                  <div className="text-3xl font-bold">AED 360K</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-emerald-100 text-sm">Prevention Cost</div>
                  <div className="text-3xl font-bold">AED 25K</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-emerald-100 text-sm">Net ROI</div>
                  <div className="text-3xl font-bold">14.4x</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* NPS Tab */}
        {activeTab === 'nps' && (
          <div className="space-y-8">
            {/* NPS Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-xl">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <MessageSquare className="text-purple-600" size={24} />
                  Net Promoter Score
                </h2>

                <div className="flex items-center gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-6xl font-black text-purple-600">+{npsDistribution.npsScore}</div>
                    <div className="text-gray-500 mt-2">NPS Score</div>
                    <div className="text-emerald-600 text-sm flex items-center justify-center gap-1 mt-1">
                      <ArrowUp size={14} />
                      {npsDistribution.trend}
                    </div>
                  </div>

                  <div className="flex-1">
                    {/* Promoters */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="flex items-center gap-2">
                          <ThumbsUp className="text-emerald-500" size={16} />
                          Promoters (9-10)
                        </span>
                        <span className="font-bold text-emerald-600">{npsDistribution.promoters.percentage}%</span>
                      </div>
                      <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${npsDistribution.promoters.percentage}%` }} />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{npsDistribution.promoters.count.toLocaleString()} users</div>
                    </div>

                    {/* Passives */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="flex items-center gap-2">
                          <Minus className="text-gray-500" size={16} />
                          Passives (7-8)
                        </span>
                        <span className="font-bold text-gray-600">{npsDistribution.passives.percentage}%</span>
                      </div>
                      <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-400 rounded-full" style={{ width: `${npsDistribution.passives.percentage}%` }} />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{npsDistribution.passives.count.toLocaleString()} users</div>
                    </div>

                    {/* Detractors */}
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="flex items-center gap-2">
                          <ThumbsDown className="text-red-500" size={16} />
                          Detractors (0-6)
                        </span>
                        <span className="font-bold text-red-600">{npsDistribution.detractors.percentage}%</span>
                      </div>
                      <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: `${npsDistribution.detractors.percentage}%` }} />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{npsDistribution.detractors.count.toLocaleString()} users</div>
                    </div>
                  </div>
                </div>

                {/* NPS Formula */}
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <div className="text-sm text-purple-600 mb-2">NPS = % Promoters - % Detractors</div>
                  <div className="text-lg font-bold text-purple-800">
                    {npsDistribution.promoters.percentage}% - {npsDistribution.detractors.percentage}% = +{npsDistribution.npsScore}
                  </div>
                </div>
              </div>

              {/* NPS Benchmark */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="font-bold text-gray-900 mb-4">Industry Benchmark</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Nuqta', score: 34, color: 'bg-purple-500', yours: true },
                    { name: 'Fintech Avg', score: 28, color: 'bg-gray-400' },
                    { name: 'Rewards Apps', score: 22, color: 'bg-gray-300' },
                    { name: 'UAE Apps Avg', score: 18, color: 'bg-gray-200' },
                  ].map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className={item.yours ? 'font-bold text-purple-600' : 'text-gray-600'}>
                          {item.name} {item.yours && '(You)'}
                        </span>
                        <span className="font-medium">+{item.score}</span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${(item.score + 100) / 2}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <div className="text-emerald-700 font-medium">You&apos;re in the top 15%</div>
                  <div className="text-sm text-emerald-600">of UAE consumer apps</div>
                </div>
              </div>
            </div>

            {/* Recent Feedback */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MessageSquare className="text-purple-600" size={24} />
                Recent Feedback
              </h2>
              <div className="space-y-4">
                {[
                  { user: 'Fatima A.', score: 10, feedback: 'Love earning coins at my favorite restaurants! The app is so easy to use.', date: '2 hours ago', category: 'Promoter' },
                  { user: 'Ahmed R.', score: 8, feedback: 'Good app, wish there were more electronics stores.', date: '5 hours ago', category: 'Passive' },
                  { user: 'Sarah M.', score: 5, feedback: 'Coins took too long to appear after my purchase.', date: '1 day ago', category: 'Detractor' },
                  { user: 'James W.', score: 9, feedback: 'The streak feature keeps me coming back every day!', date: '1 day ago', category: 'Promoter' },
                  { user: 'Maryam H.', score: 4, feedback: 'Customer support was slow to respond to my issue.', date: '2 days ago', category: 'Detractor' },
                ].map((feedback, i) => (
                  <div key={i} className={`p-4 rounded-xl border-2 ${
                    feedback.category === 'Promoter' ? 'border-emerald-200 bg-emerald-50' :
                    feedback.category === 'Passive' ? 'border-gray-200 bg-gray-50' :
                    'border-red-200 bg-red-50'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                          feedback.category === 'Promoter' ? 'bg-emerald-500' :
                          feedback.category === 'Passive' ? 'bg-gray-500' :
                          'bg-red-500'
                        }`}>
                          {feedback.score}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{feedback.user}</div>
                          <div className="text-xs text-gray-500">{feedback.date}</div>
                        </div>
                      </div>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        feedback.category === 'Promoter' ? 'bg-emerald-200 text-emerald-700' :
                        feedback.category === 'Passive' ? 'bg-gray-200 text-gray-700' :
                        'bg-red-200 text-red-700'
                      }`}>
                        {feedback.category}
                      </span>
                    </div>
                    <p className="text-gray-700">&quot;{feedback.feedback}&quot;</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Cohorts Tab */}
        {activeTab === 'cohorts' && (
          <div className="space-y-8">
            {/* Retention Cohort Table */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BarChart3 className="text-purple-600" size={24} />
                Monthly Retention Cohorts
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Cohort</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Acquired</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Month 1</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Month 2</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Month 3</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Month 4</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Month 5</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Month 6</th>
                    </tr>
                  </thead>
                  <tbody>
                    {retentionCohorts.map((cohort) => (
                      <tr key={cohort.month} className="border-b border-gray-100">
                        <td className="py-4 px-4 font-medium text-gray-900">{cohort.month}</td>
                        <td className="py-4 px-4 font-bold text-purple-600">{cohort.acquired.toLocaleString()}</td>
                        {[cohort.m1, cohort.m2, cohort.m3, cohort.m4, cohort.m5, cohort.m6].map((value, i) => (
                          <td key={i} className="py-4 px-4 text-center">
                            {value !== null ? (
                              <span className={`inline-block px-3 py-1 rounded-lg font-medium ${
                                value >= 60 ? 'bg-emerald-100 text-emerald-700' :
                                value >= 45 ? 'bg-blue-100 text-blue-700' :
                                value >= 35 ? 'bg-amber-100 text-amber-700' :
                                'bg-red-100 text-red-700'
                              }`}>
                                {value}%
                              </span>
                            ) : (
                              <span className="text-gray-300">—</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Retention Insights */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-emerald-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-emerald-700 mb-2">
                    <ArrowUp size={18} />
                    <span className="font-semibold">Improving Trend</span>
                  </div>
                  <p className="text-sm text-emerald-600">M1 retention improved from 68% to 78% over 6 months (+10 pp)</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-blue-700 mb-2">
                    <Target size={18} />
                    <span className="font-semibold">Target: 40% M6</span>
                  </div>
                  <p className="text-sm text-blue-600">Current M6 retention is 35%. Need +5pp improvement to hit target.</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-purple-700 mb-2">
                    <Zap size={18} />
                    <span className="font-semibold">Key Insight</span>
                  </div>
                  <p className="text-sm text-purple-600">Users who transact 3+ times in M1 have 2.4x better M6 retention.</p>
                </div>
              </div>
            </div>

            {/* Cohort Actions */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-6 text-white">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Sparkles size={24} />
                Cohort-Based Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { cohort: 'New Users (Week 1)', action: 'Onboarding push - Complete first 3 transactions', impact: '+15% M1 retention' },
                  { cohort: 'Month 1 Survivors', action: 'Referral incentive - Refer 1 friend for bonus', impact: '+8% M2 retention' },
                  { cohort: 'Month 2 Active', action: 'Category expansion - Try a new category', impact: '+12% M3 retention' },
                  { cohort: 'Month 3 Engaged', action: 'Nuqta+ trial - 30-day free premium', impact: '+20% M4 retention' },
                  { cohort: 'Month 4+ Loyal', action: 'Ambassador invitation - Earn referral bonuses', impact: '2x LTV increase' },
                  { cohort: 'Declining Activity', action: 'Win-back campaign - Special comeback offer', impact: '25% reactivation rate' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4">
                    <div className="font-semibold mb-2">{item.cohort}</div>
                    <p className="text-purple-200 text-sm mb-3">{item.action}</p>
                    <div className="flex items-center gap-2 text-emerald-300 text-sm">
                      <ArrowUp size={14} />
                      {item.impact}
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
