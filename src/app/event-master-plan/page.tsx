'use client';

import React, { useState } from 'react';
import {
  Calendar,
  Store,
  Users,
  Target,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Zap,
  Award,
  ChevronRight,
  MapPin,
  Clock,
  BarChart3,
  Coins,
  Crown,
  Rocket,
  Star,
  Gift,
  Building2,
  ShoppingBag,
  UtensilsCrossed,
  Shirt,
  Sparkles,
  Gem,
  Smartphone,
  Coffee,
  Dumbbell,
  Car,
  Briefcase,
  GraduationCap,
  Heart,
  Music,
  Palette,
  Book,
  Calculator,
  PieChart,
  LineChart,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

/**
 * 60 EVENTS IN 6 MONTHS - MASTER PLAN
 * Comprehensive execution plan with result predictions
 */

interface MonthlyPlan {
  month: string;
  monthNumber: number;
  events: number;
  eventTypes: EventType[];
  merchantTarget: number;
  userTarget: number;
  gmvTarget: number;
  revenueTarget: number;
  staffNeeded: number;
  budget: number;
}

interface EventType {
  name: string;
  count: number;
  avgMerchants: number;
  avgUsers: number;
  avgDuration: string;
}

interface ResultPrediction {
  metric: string;
  conservative: number | string;
  moderate: number | string;
  aggressive: number | string;
  unit: string;
}

// 6-Month Event Calendar
const monthlyPlans: MonthlyPlan[] = [
  {
    month: 'Month 1',
    monthNumber: 1,
    events: 6,
    eventTypes: [
      { name: 'Flea Markets', count: 3, avgMerchants: 8, avgUsers: 80, avgDuration: '2 days' },
      { name: 'Mall Activations', count: 2, avgMerchants: 5, avgUsers: 60, avgDuration: '3 days' },
      { name: 'Community Events', count: 1, avgMerchants: 6, avgUsers: 50, avgDuration: '1 day' },
    ],
    merchantTarget: 45,
    userTarget: 450,
    gmvTarget: 225000,
    revenueTarget: 11250,
    staffNeeded: 4,
    budget: 15000
  },
  {
    month: 'Month 2',
    monthNumber: 2,
    events: 8,
    eventTypes: [
      { name: 'Flea Markets', count: 3, avgMerchants: 10, avgUsers: 100, avgDuration: '2 days' },
      { name: 'Mall Activations', count: 3, avgMerchants: 6, avgUsers: 80, avgDuration: '3 days' },
      { name: 'University Events', count: 2, avgMerchants: 4, avgUsers: 120, avgDuration: '1 day' },
    ],
    merchantTarget: 62,
    userTarget: 680,
    gmvTarget: 340000,
    revenueTarget: 17000,
    staffNeeded: 5,
    budget: 20000
  },
  {
    month: 'Month 3',
    monthNumber: 3,
    events: 10,
    eventTypes: [
      { name: 'Flea Markets', count: 4, avgMerchants: 12, avgUsers: 120, avgDuration: '2 days' },
      { name: 'Mall Activations', count: 3, avgMerchants: 8, avgUsers: 100, avgDuration: '3 days' },
      { name: 'Food Festivals', count: 2, avgMerchants: 15, avgUsers: 200, avgDuration: '3 days' },
      { name: 'Corporate Events', count: 1, avgMerchants: 3, avgUsers: 80, avgDuration: '1 day' },
    ],
    merchantTarget: 95,
    userTarget: 1200,
    gmvTarget: 600000,
    revenueTarget: 30000,
    staffNeeded: 6,
    budget: 30000
  },
  {
    month: 'Month 4',
    monthNumber: 4,
    events: 12,
    eventTypes: [
      { name: 'Flea Markets', count: 4, avgMerchants: 15, avgUsers: 150, avgDuration: '2 days' },
      { name: 'Mall Activations', count: 4, avgMerchants: 10, avgUsers: 120, avgDuration: '3 days' },
      { name: 'Exhibition/Trade Shows', count: 2, avgMerchants: 25, avgUsers: 300, avgDuration: '5 days' },
      { name: 'Sports Events', count: 2, avgMerchants: 8, avgUsers: 150, avgDuration: '1 day' },
    ],
    merchantTarget: 140,
    userTarget: 1800,
    gmvTarget: 900000,
    revenueTarget: 45000,
    staffNeeded: 8,
    budget: 40000
  },
  {
    month: 'Month 5',
    monthNumber: 5,
    events: 12,
    eventTypes: [
      { name: 'Flea Markets', count: 4, avgMerchants: 18, avgUsers: 180, avgDuration: '2 days' },
      { name: 'Mall Activations', count: 4, avgMerchants: 12, avgUsers: 150, avgDuration: '3 days' },
      { name: 'Major Exhibitions', count: 2, avgMerchants: 30, avgUsers: 400, avgDuration: '7 days' },
      { name: 'Night Markets', count: 2, avgMerchants: 12, avgUsers: 200, avgDuration: '1 day' },
    ],
    merchantTarget: 170,
    userTarget: 2400,
    gmvTarget: 1200000,
    revenueTarget: 60000,
    staffNeeded: 10,
    budget: 50000
  },
  {
    month: 'Month 6',
    monthNumber: 6,
    events: 12,
    eventTypes: [
      { name: 'Flea Markets', count: 4, avgMerchants: 20, avgUsers: 200, avgDuration: '2 days' },
      { name: 'Mall Activations', count: 3, avgMerchants: 15, avgUsers: 180, avgDuration: '3 days' },
      { name: 'Major Events (DSF/etc)', count: 3, avgMerchants: 40, avgUsers: 500, avgDuration: '10 days' },
      { name: 'Community Events', count: 2, avgMerchants: 10, avgUsers: 150, avgDuration: '1 day' },
    ],
    merchantTarget: 215,
    userTarget: 3200,
    gmvTarget: 1600000,
    revenueTarget: 80000,
    staffNeeded: 12,
    budget: 65000
  },
];

// Event Types Database
const eventTypesDatabase = [
  { type: 'Flea Markets', icon: ShoppingBag, color: 'bg-orange-500', avgMerchants: '8-20', avgUsers: '80-200', frequency: 'Weekly', locations: ['Ripe Market', 'Last Exit', 'JLT Friday Market', 'Boxpark'] },
  { type: 'Mall Activations', icon: Building2, color: 'bg-blue-500', avgMerchants: '5-15', avgUsers: '60-180', frequency: 'Bi-weekly', locations: ['Dubai Mall', 'MOE', 'City Centre', 'Ibn Battuta'] },
  { type: 'Food Festivals', icon: UtensilsCrossed, color: 'bg-red-500', avgMerchants: '15-30', avgUsers: '200-500', frequency: 'Monthly', locations: ['Taste of Dubai', 'Dubai Food Festival', 'Beach Canteen'] },
  { type: 'Exhibitions/Trade Shows', icon: Briefcase, color: 'bg-purple-500', avgMerchants: '25-50', avgUsers: '300-800', frequency: 'Monthly', locations: ['DWTC', 'Expo City', 'ADNEC'] },
  { type: 'University Events', icon: GraduationCap, color: 'bg-green-500', avgMerchants: '4-8', avgUsers: '100-200', frequency: 'Monthly', locations: ['AUS', 'UAEU', 'Zayed Uni', 'Heriot-Watt'] },
  { type: 'Sports Events', icon: Dumbbell, color: 'bg-cyan-500', avgMerchants: '8-15', avgUsers: '150-300', frequency: 'Bi-weekly', locations: ['Dubai Sports City', 'Kite Beach', 'Al Qudra'] },
  { type: 'Night Markets', icon: Star, color: 'bg-indigo-500', avgMerchants: '12-25', avgUsers: '200-400', frequency: 'Weekly', locations: ['JBR', 'La Mer', 'Bluewaters'] },
  { type: 'Corporate Events', icon: Crown, color: 'bg-amber-500', avgMerchants: '3-8', avgUsers: '50-150', frequency: 'On-demand', locations: ['Corporate offices', 'Hotels', 'Co-working spaces'] },
];

// Result Predictions
const resultPredictions: ResultPrediction[] = [
  { metric: 'Total Events', conservative: 50, moderate: 60, aggressive: 70, unit: 'events' },
  { metric: 'Total Merchants Onboarded', conservative: 500, moderate: 727, aggressive: 900, unit: 'merchants' },
  { metric: 'Unique Merchants (after overlap)', conservative: 350, moderate: 500, aggressive: 650, unit: 'merchants' },
  { metric: 'Permanent Conversions (30%)', conservative: 105, moderate: 150, aggressive: 195, unit: 'merchants' },
  { metric: 'Total New Users', conservative: 7500, moderate: 9730, aggressive: 12000, unit: 'users' },
  { metric: 'Active Users (60% retention)', conservative: 4500, moderate: 5840, aggressive: 7200, unit: 'users' },
  { metric: 'Total GMV', conservative: '3.5M', moderate: '4.87M', aggressive: '6.5M', unit: 'AED' },
  { metric: 'Nuqta Revenue (5%)', conservative: '175K', moderate: '243K', aggressive: '325K', unit: 'AED' },
  { metric: 'Total Investment', conservative: '180K', moderate: '220K', aggressive: '280K', unit: 'AED' },
  { metric: 'ROI', conservative: '-3%', moderate: '10%', aggressive: '16%', unit: '' },
  { metric: 'Cost Per User (user budget only)', conservative: 18, moderate: 15.4, aggressive: 17.5, unit: 'AED' },
  { metric: 'Cost Per Merchant (merchant budget only)', conservative: 166, moderate: 116, aggressive: 108, unit: 'AED' },
  { metric: 'Cost Per Permanent Merchant', conservative: 552, moderate: 387, aggressive: 359, unit: 'AED' },
];

// Budget Allocation (for accurate cost calculations)
const budgetAllocation = {
  merchantAcquisition: {
    salesStaff: 48000, // 2 people × 8K × 6 months
    materials: 10000,  // Info packs, stickers, etc.
    total: 58000,
  },
  userAcquisition: {
    boothStaff: 72000,    // 2-4 people × 6K × 6 months (scaled)
    boothSetup: 30000,    // Equipment, signage
    incentives: 40000,    // User giveaways, coins funding
    flyers: 8000,         // Print materials
    total: 150000,
  },
  shared: {
    operations: 12000,    // Transport, storage, misc
    total: 12000,
  },
  grandTotal: 220000,
};

// Merchant Category Targets
const merchantCategoryTargets = [
  { category: 'Food & Beverage', target: 200, percentage: 27, icon: UtensilsCrossed, color: 'bg-orange-500' },
  { category: 'Fashion & Accessories', target: 150, percentage: 21, icon: Shirt, color: 'bg-pink-500' },
  { category: 'Beauty & Wellness', target: 100, percentage: 14, icon: Sparkles, color: 'bg-purple-500' },
  { category: 'Home & Lifestyle', target: 80, percentage: 11, icon: ShoppingBag, color: 'bg-blue-500' },
  { category: 'Gold & Jewelry', target: 70, percentage: 10, icon: Gem, color: 'bg-amber-500' },
  { category: 'Electronics', target: 50, percentage: 7, icon: Smartphone, color: 'bg-cyan-500' },
  { category: 'Art & Crafts', target: 40, percentage: 5, icon: Palette, color: 'bg-rose-500' },
  { category: 'Others', target: 37, percentage: 5, icon: Gift, color: 'bg-gray-500' },
];

export default function EventMasterPlanPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'calendar' | 'predictions' | 'resources'>('overview');

  const tabs = [
    { id: 'overview', label: '6-Month Overview', icon: Target },
    { id: 'calendar', label: 'Event Calendar', icon: Calendar },
    { id: 'predictions', label: 'Result Predictions', icon: LineChart },
    { id: 'resources', label: 'Resources & Budget', icon: Calculator },
  ] as const;

  // Calculate totals
  const totals = monthlyPlans.reduce((acc, month) => ({
    events: acc.events + month.events,
    merchants: acc.merchants + month.merchantTarget,
    users: acc.users + month.userTarget,
    gmv: acc.gmv + month.gmvTarget,
    revenue: acc.revenue + month.revenueTarget,
    budget: acc.budget + month.budget,
  }), { events: 0, merchants: 0, users: 0, gmv: 0, revenue: 0, budget: 0 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <div className="p-2 sm:p-3 bg-white/20 rounded-xl">
              <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold">60 Events in 6 Months</h1>
              <p className="text-emerald-100 text-sm sm:text-base">Master Execution Plan & Result Predictions</p>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <div className="bg-white/20 backdrop-blur rounded-xl px-3 sm:px-4 py-3 text-center">
              <div className="text-2xl sm:text-3xl font-bold">{totals.events}</div>
              <div className="text-emerald-100 text-xs sm:text-sm">Total Events</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl px-3 sm:px-4 py-3 text-center">
              <div className="text-2xl sm:text-3xl font-bold">{totals.merchants}</div>
              <div className="text-emerald-100 text-xs sm:text-sm">Merchant Touches</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl px-3 sm:px-4 py-3 text-center">
              <div className="text-2xl sm:text-3xl font-bold">500</div>
              <div className="text-emerald-100 text-xs sm:text-sm">Unique Merchants</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl px-3 sm:px-4 py-3 text-center">
              <div className="text-2xl sm:text-3xl font-bold">{(totals.users / 1000).toFixed(1)}K</div>
              <div className="text-emerald-100 text-xs sm:text-sm">New Users</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl px-3 sm:px-4 py-3 text-center">
              <div className="text-2xl sm:text-3xl font-bold">{(totals.gmv / 1000000).toFixed(1)}M</div>
              <div className="text-emerald-100 text-xs sm:text-sm">GMV (AED)</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl px-3 sm:px-4 py-3 text-center">
              <div className="text-2xl sm:text-3xl font-bold">{(totals.revenue / 1000).toFixed(0)}K</div>
              <div className="text-emerald-100 text-xs sm:text-sm">Revenue (AED)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 sm:gap-2 overflow-x-auto py-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <tab.icon size={14} className="sm:w-4 sm:h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6 sm:space-y-8">

            {/* Monthly Progression Chart */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                <TrendingUp className="text-emerald-600" size={20} />
                6-Month Growth Trajectory
              </h2>

              {/* Visual Chart */}
              <div className="mb-6">
                <div className="flex items-end justify-between gap-2 h-48 sm:h-64">
                  {monthlyPlans.map((month, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      {/* Bars */}
                      <div className="w-full flex gap-1 items-end h-40 sm:h-52">
                        <div
                          className="flex-1 bg-emerald-500 rounded-t-lg transition-all hover:bg-emerald-600"
                          style={{ height: `${(month.merchantTarget / 215) * 100}%` }}
                          title={`${month.merchantTarget} merchants`}
                        />
                        <div
                          className="flex-1 bg-teal-400 rounded-t-lg transition-all hover:bg-teal-500"
                          style={{ height: `${(month.userTarget / 3200) * 100}%` }}
                          title={`${month.userTarget} users`}
                        />
                        <div
                          className="flex-1 bg-amber-400 rounded-t-lg transition-all hover:bg-amber-500"
                          style={{ height: `${(month.events / 12) * 100}%` }}
                          title={`${month.events} events`}
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-600">M{month.monthNumber}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-6 mt-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded" />
                    <span className="text-gray-600">Merchants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-teal-400 rounded" />
                    <span className="text-gray-600">Users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-amber-400 rounded" />
                    <span className="text-gray-600">Events</span>
                  </div>
                </div>
              </div>

              {/* Monthly Breakdown Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-3 font-semibold text-gray-900">Month</th>
                      <th className="text-center py-3 px-3 font-semibold text-gray-900">Events</th>
                      <th className="text-center py-3 px-3 font-semibold text-gray-900">Merchants</th>
                      <th className="text-center py-3 px-3 font-semibold text-gray-900">Users</th>
                      <th className="text-right py-3 px-3 font-semibold text-gray-900">GMV</th>
                      <th className="text-right py-3 px-3 font-semibold text-gray-900">Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyPlans.map((month, idx) => (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-3 font-medium text-gray-900">{month.month}</td>
                        <td className="py-3 px-3 text-center">
                          <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                            {month.events}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-center">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                            {month.merchantTarget}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-center">
                          <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                            {month.userTarget.toLocaleString()}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right font-medium text-gray-900">
                          AED {(month.gmvTarget / 1000).toFixed(0)}K
                        </td>
                        <td className="py-3 px-3 text-right font-medium text-emerald-600">
                          AED {(month.revenueTarget / 1000).toFixed(0)}K
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-emerald-50 font-bold">
                      <td className="py-3 px-3 text-emerald-900">TOTAL</td>
                      <td className="py-3 px-3 text-center text-emerald-900">{totals.events}</td>
                      <td className="py-3 px-3 text-center text-emerald-900">{totals.merchants}</td>
                      <td className="py-3 px-3 text-center text-emerald-900">{totals.users.toLocaleString()}</td>
                      <td className="py-3 px-3 text-right text-emerald-900">AED {(totals.gmv / 1000000).toFixed(2)}M</td>
                      <td className="py-3 px-3 text-right text-emerald-900">AED {(totals.revenue / 1000).toFixed(0)}K</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Assumptions */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calculator className="text-emerald-600" size={20} />
                Key Assumptions
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                  <div className="text-2xl font-bold text-emerald-600">AED 500</div>
                  <div className="text-sm text-gray-600">Minimum spend threshold</div>
                  <div className="text-xs text-gray-500 mt-1">Users must spend AED 500+ to unlock coins</div>
                </div>
                <div className="bg-teal-50 rounded-xl p-4 border border-teal-200">
                  <div className="text-2xl font-bold text-teal-600">5%</div>
                  <div className="text-sm text-gray-600">Commission rate</div>
                  <div className="text-xs text-gray-500 mt-1">Standard merchant commission</div>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <div className="text-2xl font-bold text-amber-600">30%</div>
                  <div className="text-sm text-gray-600">Merchant overlap</div>
                  <div className="text-xs text-gray-500 mt-1">Same merchants at multiple events</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600">30%</div>
                  <div className="text-sm text-gray-600">Permanent conversion</div>
                  <div className="text-xs text-gray-500 mt-1">Event merchants → permanent partners</div>
                </div>
              </div>
            </div>

            {/* Event Types */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="text-emerald-600" size={20} />
                Event Types & Targets
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {eventTypesDatabase.map((event, idx) => {
                  const Icon = event.icon;
                  return (
                    <div key={idx} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${event.color} text-white`}>
                          <Icon size={18} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm">{event.type}</h3>
                          <p className="text-xs text-gray-500">{event.frequency}</p>
                        </div>
                      </div>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Merchants:</span>
                          <span className="font-medium text-gray-700">{event.avgMerchants}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Users:</span>
                          <span className="font-medium text-gray-700">{event.avgUsers}</span>
                        </div>
                      </div>
                      <div className="mt-3 pt-2 border-t border-gray-100">
                        <p className="text-xs text-gray-500 line-clamp-2">{event.locations.join(', ')}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Calendar Tab */}
        {activeTab === 'calendar' && (
          <div className="space-y-6 sm:space-y-8">

            {/* Monthly Event Details */}
            {monthlyPlans.map((month, idx) => (
              <div key={idx} className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Calendar className="text-emerald-600" size={20} />
                    {month.month}
                  </h2>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      {month.events} Events
                    </span>
                  </div>
                </div>

                {/* Event Type Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                  {month.eventTypes.map((eventType, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900 text-sm">{eventType.name}</span>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">
                          x{eventType.count}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-gray-500">Merchants:</span>
                          <span className="ml-1 font-medium">{eventType.avgMerchants}/event</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Users:</span>
                          <span className="ml-1 font-medium">{eventType.avgUsers}/event</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Month Targets */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-emerald-600">{month.merchantTarget}</div>
                    <div className="text-xs text-gray-500">Merchants</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-teal-600">{month.userTarget.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-amber-600">AED {(month.gmvTarget / 1000).toFixed(0)}K</div>
                    <div className="text-xs text-gray-500">GMV</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-purple-600">AED {(month.revenueTarget / 1000).toFixed(0)}K</div>
                    <div className="text-xs text-gray-500">Revenue</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Predictions Tab */}
        {activeTab === 'predictions' && (
          <div className="space-y-6 sm:space-y-8">

            {/* Scenario Analysis */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <LineChart className="text-emerald-600" size={20} />
                6-Month Result Predictions
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-3 font-semibold text-gray-900">Metric</th>
                      <th className="text-center py-3 px-3 font-semibold text-amber-600 bg-amber-50 rounded-tl-lg">
                        Conservative
                      </th>
                      <th className="text-center py-3 px-3 font-semibold text-emerald-600 bg-emerald-50">
                        Moderate (Target)
                      </th>
                      <th className="text-center py-3 px-3 font-semibold text-purple-600 bg-purple-50 rounded-tr-lg">
                        Aggressive
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultPredictions.map((pred, idx) => (
                      <tr key={idx} className={`border-b border-gray-100 ${pred.metric === 'ROI' ? 'bg-gray-50 font-semibold' : ''}`}>
                        <td className="py-3 px-3 text-gray-900">{pred.metric}</td>
                        <td className="py-3 px-3 text-center bg-amber-50/50">
                          <span className={pred.metric === 'ROI' && String(pred.conservative).includes('-') ? 'text-red-600' : ''}>
                            {pred.conservative} {pred.unit}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-center bg-emerald-50/50 font-medium">
                          {pred.moderate} {pred.unit}
                        </td>
                        <td className="py-3 px-3 text-center bg-purple-50/50">
                          {pred.aggressive} {pred.unit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Merchant Category Distribution */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <PieChart className="text-emerald-600" size={20} />
                Merchant Category Distribution (500 Unique)
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {merchantCategoryTargets.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`p-1.5 rounded-lg ${cat.color} text-white`}>
                          <Icon size={14} />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{cat.category}</span>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{cat.target}</div>
                          <div className="text-xs text-gray-500">merchants</div>
                        </div>
                        <div className="text-lg font-semibold text-emerald-600">{cat.percentage}%</div>
                      </div>
                      {/* Progress bar */}
                      <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className={`h-full ${cat.color}`} style={{ width: `${cat.percentage}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Key Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Merchant Outcomes */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Store size={20} />
                  Merchant Outcomes
                </h3>
                <div className="space-y-3">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span>Total Merchant Touches</span>
                      <span className="font-bold">727</span>
                    </div>
                    <div className="text-xs text-emerald-100 mt-1">Cumulative across all events</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span>Unique Merchants</span>
                      <span className="font-bold">500</span>
                    </div>
                    <div className="text-xs text-emerald-100 mt-1">After 30% overlap adjustment</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span>Permanent Partners</span>
                      <span className="font-bold">150</span>
                    </div>
                    <div className="text-xs text-emerald-100 mt-1">30% conversion to year-round</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span>Merchant Budget</span>
                      <span className="font-bold">AED 58K</span>
                    </div>
                    <div className="text-xs text-emerald-100 mt-1">Sales staff + materials only</div>
                  </div>
                  <div className="bg-white/30 rounded-lg p-3 border border-white/50">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Cost Per Unique Merchant</span>
                      <span className="font-bold text-xl">AED 116</span>
                    </div>
                    <div className="text-xs text-emerald-100 mt-1">AED 58K ÷ 500 merchants</div>
                  </div>
                  <div className="bg-amber-400/30 rounded-lg p-3 border border-amber-300/50">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Cost Per Permanent</span>
                      <span className="font-bold text-xl">AED 387</span>
                    </div>
                    <div className="text-xs text-emerald-100 mt-1">AED 58K ÷ 150 permanent</div>
                  </div>
                </div>
              </div>

              {/* User Outcomes */}
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Users size={20} />
                  User Outcomes
                </h3>
                <div className="space-y-3">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span>Total Downloads</span>
                      <span className="font-bold">9,730</span>
                    </div>
                    <div className="text-xs text-purple-100 mt-1">New app installs</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span>Active Users (30-day)</span>
                      <span className="font-bold">5,840</span>
                    </div>
                    <div className="text-xs text-purple-100 mt-1">60% retention rate</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span>User Budget</span>
                      <span className="font-bold">AED 150K</span>
                    </div>
                    <div className="text-xs text-purple-100 mt-1">Booth staff, setup, incentives</div>
                  </div>
                  <div className="bg-white/30 rounded-lg p-3 border border-white/50">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Cost Per User</span>
                      <span className="font-bold text-xl">AED 15.40</span>
                    </div>
                    <div className="text-xs text-purple-100 mt-1">AED 150K ÷ 9,730 users</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Budget Allocation Breakdown */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <PieChart className="text-emerald-600" size={20} />
                Budget Allocation (AED 220K Total)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Merchant Acquisition */}
                <div className="bg-emerald-50 rounded-xl p-4 border-2 border-emerald-200">
                  <h4 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2">
                    <Store size={16} />
                    Merchant Acquisition
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sales Staff (2×AED 8K×6mo)</span>
                      <span className="font-medium">AED 48K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Materials & Info Packs</span>
                      <span className="font-medium">AED 10K</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-emerald-200 font-semibold text-emerald-700">
                      <span>Subtotal</span>
                      <span>AED 58K</span>
                    </div>
                  </div>
                </div>

                {/* User Acquisition */}
                <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                    <Users size={16} />
                    User Acquisition
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Booth Staff (2-4 people)</span>
                      <span className="font-medium">AED 72K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Booth Setup & Signage</span>
                      <span className="font-medium">AED 30K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">User Incentives</span>
                      <span className="font-medium">AED 40K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Flyers & Print</span>
                      <span className="font-medium">AED 8K</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-purple-200 font-semibold text-purple-700">
                      <span>Subtotal</span>
                      <span>AED 150K</span>
                    </div>
                  </div>
                </div>

                {/* Shared/Operations */}
                <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Briefcase size={16} />
                    Shared Operations
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transport & Logistics</span>
                      <span className="font-medium">AED 6K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Storage & Misc</span>
                      <span className="font-medium">AED 6K</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-200 font-semibold text-gray-700">
                      <span>Subtotal</span>
                      <span>AED 12K</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-4 p-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl border-2 border-emerald-300">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-sm text-gray-600">Merchant Budget</div>
                    <div className="text-xl font-bold text-emerald-700">AED 58K</div>
                    <div className="text-xs text-gray-500">26%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">User Budget</div>
                    <div className="text-xl font-bold text-purple-700">AED 150K</div>
                    <div className="text-xs text-gray-500">68%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Shared Ops</div>
                    <div className="text-xl font-bold text-gray-700">AED 12K</div>
                    <div className="text-xs text-gray-500">6%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Grand Total</div>
                    <div className="text-xl font-bold text-gray-900">AED 220K</div>
                    <div className="text-xs text-gray-500">100%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <DollarSign className="text-emerald-600" size={20} />
                Financial Summary (Moderate Scenario)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                  <div className="text-sm text-gray-600 mb-1">Total GMV</div>
                  <div className="text-3xl font-bold text-emerald-600">AED 4.87M</div>
                  <div className="flex items-center gap-1 mt-2 text-sm text-emerald-700">
                    <ArrowUpRight size={14} />
                    <span>Based on AED 500 avg spend × transactions</span>
                  </div>
                </div>
                <div className="bg-teal-50 rounded-xl p-4 border border-teal-200">
                  <div className="text-sm text-gray-600 mb-1">Nuqta Revenue (5%)</div>
                  <div className="text-3xl font-bold text-teal-600">AED 243K</div>
                  <div className="flex items-center gap-1 mt-2 text-sm text-teal-700">
                    <ArrowUpRight size={14} />
                    <span>Commission from transactions</span>
                  </div>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <div className="text-sm text-gray-600 mb-1">Total Investment</div>
                  <div className="text-3xl font-bold text-amber-600">AED 220K</div>
                  <div className="flex items-center gap-1 mt-2 text-sm text-amber-700">
                    <span>Staff, booths, materials, incentives</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-4 border-2 border-emerald-300">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">Net ROI</div>
                    <div className="text-3xl font-bold text-emerald-700">+10%</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Net Profit</div>
                    <div className="text-3xl font-bold text-emerald-700">AED 23K</div>
                  </div>
                </div>
                <p className="text-sm text-emerald-700 mt-3">
                  <strong>Strategic Value:</strong> Beyond direct ROI, events deliver 500 merchants + 9,730 users as foundation for year-round business.
                </p>
              </div>
            </div>

            {/* Risks & Mitigations */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="text-amber-500" size={20} />
                Risks & Mitigations
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { risk: 'Low merchant conversion at events', mitigation: 'Pre-qualify merchants, focus on high-traffic booths, train sales team on objection handling', impact: 'High' },
                  { risk: 'User downloads but low AED 500 spend', mitigation: 'Partner with high-AOV merchants (jewelry, electronics), create bundle offers, extend coin validity', impact: 'High' },
                  { risk: 'Event cancellations/low turnout', mitigation: 'Diversify event types, have backup events, focus on proven venues', impact: 'Medium' },
                  { risk: 'Staff burnout with 60 events', mitigation: 'Hire dedicated event team, use part-time staff, automate where possible', impact: 'Medium' },
                  { risk: 'Merchants don\'t convert to permanent', mitigation: 'Dedicated follow-up team, show clear ROI data, offer loyalty program benefits', impact: 'High' },
                  { risk: 'Budget overruns', mitigation: 'Fixed booth costs, performance-based staff bonuses, track spend weekly', impact: 'Low' },
                ].map((item, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-medium text-gray-900 text-sm">{item.risk}</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        item.impact === 'High' ? 'bg-red-100 text-red-700' :
                        item.impact === 'Medium' ? 'bg-amber-100 text-amber-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {item.impact}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">{item.mitigation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="space-y-6 sm:space-y-8">

            {/* Budget Breakdown */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calculator className="text-emerald-600" size={20} />
                6-Month Budget Breakdown
              </h2>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-3 font-semibold text-gray-900">Month</th>
                      <th className="text-center py-3 px-3 font-semibold text-gray-900">Events</th>
                      <th className="text-center py-3 px-3 font-semibold text-gray-900">Staff</th>
                      <th className="text-right py-3 px-3 font-semibold text-gray-900">Budget</th>
                      <th className="text-right py-3 px-3 font-semibold text-gray-900">Expected Revenue</th>
                      <th className="text-right py-3 px-3 font-semibold text-gray-900">Net</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyPlans.map((month, idx) => (
                      <tr key={idx} className="border-b border-gray-100">
                        <td className="py-3 px-3 font-medium text-gray-900">{month.month}</td>
                        <td className="py-3 px-3 text-center">{month.events}</td>
                        <td className="py-3 px-3 text-center">{month.staffNeeded}</td>
                        <td className="py-3 px-3 text-right text-red-600">-AED {(month.budget / 1000).toFixed(0)}K</td>
                        <td className="py-3 px-3 text-right text-green-600">+AED {(month.revenueTarget / 1000).toFixed(0)}K</td>
                        <td className={`py-3 px-3 text-right font-medium ${month.revenueTarget - month.budget >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          AED {((month.revenueTarget - month.budget) / 1000).toFixed(0)}K
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-emerald-50 font-bold">
                      <td className="py-3 px-3 text-emerald-900">TOTAL</td>
                      <td className="py-3 px-3 text-center text-emerald-900">{totals.events}</td>
                      <td className="py-3 px-3 text-center text-emerald-900">-</td>
                      <td className="py-3 px-3 text-right text-red-700">-AED {(totals.budget / 1000).toFixed(0)}K</td>
                      <td className="py-3 px-3 text-right text-green-700">+AED {(totals.revenue / 1000).toFixed(0)}K</td>
                      <td className="py-3 px-3 text-right text-emerald-900">
                        AED {((totals.revenue - totals.budget) / 1000).toFixed(0)}K
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Budget Categories */}
              <h3 className="font-semibold text-gray-900 mb-3">Budget Categories (AED 220K Total)</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { category: 'Staff & Salaries', amount: 90000, percentage: 41, color: 'bg-blue-500' },
                  { category: 'Booth & Materials', amount: 50000, percentage: 23, color: 'bg-purple-500' },
                  { category: 'User Incentives', amount: 40000, percentage: 18, color: 'bg-amber-500' },
                  { category: 'Operations & Misc', amount: 40000, percentage: 18, color: 'bg-gray-500' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="text-sm font-medium text-gray-900">{item.category}</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">AED {(item.amount / 1000).toFixed(0)}K</div>
                    <div className="text-xs text-gray-500">{item.percentage}% of budget</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Structure */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="text-emerald-600" size={20} />
                Team Structure
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { role: 'Event Lead', count: 1, type: 'Full-time', salary: 'AED 12K/mo', responsibilities: ['Strategy', 'Partnerships', 'Team management'] },
                  { role: 'Merchant Sales', count: 2, type: 'Full-time', salary: 'AED 8K/mo + commission', responsibilities: ['Pitch merchants', 'Close deals', 'Onboarding'] },
                  { role: 'User Acquisition', count: 2, type: 'Full-time', salary: 'AED 6K/mo + bonus', responsibilities: ['Run booths', 'Sign up users', 'Support'] },
                  { role: 'Field Staff', count: '4-8', type: 'Part-time', salary: 'AED 200/day', responsibilities: ['Event support', 'Flyer distribution', 'Setup/teardown'] },
                ].map((staff, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{staff.role}</h3>
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">
                        {staff.count}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">{staff.type} • {staff.salary}</p>
                    <ul className="space-y-1">
                      {staff.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-center gap-1 text-xs text-gray-600">
                          <ChevronRight size={10} className="text-emerald-500" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <p className="text-sm text-emerald-800">
                  <strong>Scaling:</strong> Start with 4 staff in Month 1, scale to 12 by Month 6. Use part-time field staff for parallel events.
                </p>
              </div>
            </div>

            {/* Materials Checklist */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="text-emerald-600" size={20} />
                Materials & Equipment
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { category: 'Booth Equipment', items: ['Pop-up banner stands (4)', 'Portable table (1)', 'Tablet stands (3)', 'Power banks (5)', 'WiFi hotspots (2)'], oneTime: 8000 },
                  { category: 'Signage', items: ['Main banner (6ft)', 'QR code standees (3)', 'Direction signs (10)', 'Merchant window stickers (100)'], oneTime: 5000 },
                  { category: 'Print Materials', items: ['Flyers (10,000)', 'Business cards (2,000)', 'Merchant info packs (200)', 'Staff uniforms (10)'], monthly: 3000 },
                  { category: 'Digital', items: ['Tablets for signup (3)', 'Smartphones for staff (4)', 'Event app licenses', 'CRM software'], oneTime: 15000 },
                  { category: 'Giveaways', items: ['Branded tote bags', 'Stickers', 'Keychains', 'Discount vouchers'], monthly: 2000 },
                  { category: 'Operations', items: ['Transport/logistics', 'Storage unit', 'Insurance', 'Misc supplies'], monthly: 4000 },
                ].map((cat, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{cat.category}</h3>
                    <ul className="space-y-1 mb-3">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle size={12} className="text-emerald-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2 border-t border-gray-100 text-sm">
                      {cat.oneTime && <span className="text-gray-700">One-time: <strong>AED {cat.oneTime.toLocaleString()}</strong></span>}
                      {cat.monthly && <span className="text-gray-700">Monthly: <strong>AED {cat.monthly.toLocaleString()}</strong></span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Execute 60 Events?</h2>
          <p className="text-emerald-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            This plan will deliver 500 merchants and 9,730 users in 6 months. Start with Month 1 and scale progressively.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="/event-execution" className="bg-white text-emerald-700 px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors text-sm sm:text-base">
              Event Execution Playbook
            </a>
            <a href="/exhibition-merchants" className="bg-white/20 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors text-sm sm:text-base">
              Merchant Pitch Page
            </a>
          </div>
        </div>
      </div>
    <GlobalFooter />
    </div>
  );
}
