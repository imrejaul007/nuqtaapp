'use client';

import React, { useState } from 'react';
import {
  Calendar,
  Store,
  Users,
  Target,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  TrendingUp,
  DollarSign,
  Gift,
  Zap,
  Award,
  AlertCircle,
  ChevronRight,
  Coffee,
  Scissors,
  ShoppingBag,
  Gem,
  Shirt,
  Smartphone,
  UtensilsCrossed,
  Sparkles,
  MessageSquare,
  Instagram,
  Share2,
  QrCode,
  Megaphone,
  FileText,
  Coins,
  Crown
} from 'lucide-react';

/**
 * EVENT EXECUTION PLAYBOOK
 * Comprehensive plan for onboarding 30-40 merchants + acquiring users at events
 */

interface MerchantTarget {
  id: string;
  name: string;
  category: string;
  location: string;
  contactPerson: string;
  phone: string;
  email: string;
  status: 'identified' | 'contacted' | 'meeting_scheduled' | 'pitched' | 'negotiating' | 'confirmed' | 'live';
  priority: 'P0' | 'P1' | 'P2';
  avgTransaction: number;
  notes: string;
  followUpDate?: string;
}

interface EventInfo {
  name: string;
  dates: string;
  location: string;
  expectedVisitors: string;
  boothNumber?: string;
  merchantTarget: number;
  userTarget: number;
}

// Upcoming Events
const upcomingEvents: EventInfo[] = [
  {
    name: 'Dubai Shopping Festival Pop-Up',
    dates: 'Jan 15-25, 2027',
    location: 'City Walk Dubai',
    expectedVisitors: '50,000+',
    merchantTarget: 15,
    userTarget: 500
  },
  {
    name: 'Taste of Dubai',
    dates: 'Mar 10-12, 2027',
    location: 'Dubai Media City Amphitheatre',
    expectedVisitors: '30,000+',
    merchantTarget: 20,
    userTarget: 800
  },
  {
    name: 'Big Bad Wolf Books',
    dates: 'Apr 5-15, 2027',
    location: 'Dubai World Trade Centre',
    expectedVisitors: '100,000+',
    merchantTarget: 10,
    userTarget: 1500
  },
];

// Target Merchant Categories for Events
const targetCategories = [
  { name: 'Food & Beverage', icon: UtensilsCrossed, count: 10, color: 'bg-orange-500', examples: ['Restaurants', 'Cafes', 'Food stalls', 'Dessert shops'] },
  { name: 'Fashion & Accessories', icon: Shirt, count: 8, color: 'bg-pink-500', examples: ['Clothing', 'Jewelry', 'Handbags', 'Watches'] },
  { name: 'Beauty & Wellness', icon: Sparkles, count: 6, color: 'bg-purple-500', examples: ['Skincare', 'Makeup', 'Perfumes', 'Salon services'] },
  { name: 'Home & Lifestyle', icon: ShoppingBag, count: 6, color: 'bg-blue-500', examples: ['Home decor', 'Furniture', 'Kitchenware'] },
  { name: 'Electronics & Gadgets', icon: Smartphone, count: 5, color: 'bg-cyan-500', examples: ['Phones', 'Accessories', 'Smart devices'] },
  { name: 'Gold & Jewelry', icon: Gem, count: 5, color: 'bg-amber-500', examples: ['Gold', 'Diamonds', 'Silver', 'Traditional'] },
];

// Sample Merchant Pipeline (for demo)
const sampleMerchants: MerchantTarget[] = [
  {
    id: 'm1',
    name: 'Arabian Delights Cafe',
    category: 'Food & Beverage',
    location: 'City Walk',
    contactPerson: 'Ahmed Hassan',
    phone: '+971 50 123 4567',
    email: 'ahmed@arabiandelights.ae',
    status: 'confirmed',
    priority: 'P0',
    avgTransaction: 150,
    notes: 'Very interested, agreed to 5% commission'
  },
  {
    id: 'm2',
    name: 'Luxe Fashion House',
    category: 'Fashion & Accessories',
    location: 'Dubai Mall',
    contactPerson: 'Sara Ali',
    phone: '+971 55 234 5678',
    email: 'sara@luxefashion.ae',
    status: 'pitched',
    priority: 'P0',
    avgTransaction: 800,
    notes: 'Follow up on pricing questions',
    followUpDate: '2027-01-10'
  },
  {
    id: 'm3',
    name: 'Glow Beauty Lounge',
    category: 'Beauty & Wellness',
    location: 'JBR',
    contactPerson: 'Fatima Khan',
    phone: '+971 52 345 6789',
    email: 'fatima@glowbeauty.ae',
    status: 'meeting_scheduled',
    priority: 'P1',
    avgTransaction: 350,
    notes: 'Meeting scheduled for Jan 8',
    followUpDate: '2027-01-08'
  },
  {
    id: 'm4',
    name: 'Tech Zone Electronics',
    category: 'Electronics & Gadgets',
    location: 'Deira',
    contactPerson: 'Mohammed Rashid',
    phone: '+971 54 456 7890',
    email: 'mohammed@techzone.ae',
    status: 'contacted',
    priority: 'P1',
    avgTransaction: 1200,
    notes: 'Sent intro email, awaiting response'
  },
  {
    id: 'm5',
    name: 'Gold Souk Jewelers',
    category: 'Gold & Jewelry',
    location: 'Gold Souk',
    contactPerson: 'Raj Sharma',
    phone: '+971 56 567 8901',
    email: 'raj@goldsouk.ae',
    status: 'identified',
    priority: 'P2',
    avgTransaction: 2500,
    notes: 'High AOV potential, approach with premium package'
  },
];

const statusColors: Record<string, { bg: string; text: string; label: string }> = {
  identified: { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Identified' },
  contacted: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Contacted' },
  meeting_scheduled: { bg: 'bg-purple-100', text: 'text-purple-700', label: 'Meeting Set' },
  pitched: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Pitched' },
  negotiating: { bg: 'bg-orange-100', text: 'text-orange-700', label: 'Negotiating' },
  confirmed: { bg: 'bg-green-100', text: 'text-green-700', label: 'Confirmed' },
  live: { bg: 'bg-emerald-100', text: 'text-emerald-700', label: 'Live' },
};

const priorityColors: Record<string, string> = {
  P0: 'text-red-600 bg-red-50',
  P1: 'text-amber-600 bg-amber-50',
  P2: 'text-blue-600 bg-blue-50',
};

export default function EventExecutionPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'merchants' | 'users' | 'operations'>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'merchants', label: 'Merchant Pipeline', icon: Store },
    { id: 'users', label: 'User Acquisition', icon: Users },
    { id: 'operations', label: 'Operations', icon: Calendar },
  ] as const;

  // Calculate pipeline stats
  const pipelineStats = {
    total: sampleMerchants.length,
    confirmed: sampleMerchants.filter(m => m.status === 'confirmed' || m.status === 'live').length,
    inProgress: sampleMerchants.filter(m => ['contacted', 'meeting_scheduled', 'pitched', 'negotiating'].includes(m.status)).length,
    identified: sampleMerchants.filter(m => m.status === 'identified').length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <div className="p-2 sm:p-3 bg-white/20 rounded-xl">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold">Event Execution Playbook</h1>
          </div>
          <p className="text-base sm:text-xl text-indigo-100 max-w-2xl">
            Master plan for onboarding 30-40 merchants and acquiring 2,000+ users at upcoming events and exhibitions.
          </p>

          {/* Key Metrics */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white/20 backdrop-blur rounded-lg px-3 sm:px-4 py-3">
              <div className="text-2xl sm:text-3xl font-bold">40</div>
              <div className="text-indigo-100 text-xs sm:text-sm">Target Merchants</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-3 sm:px-4 py-3">
              <div className="text-2xl sm:text-3xl font-bold">2,800</div>
              <div className="text-indigo-100 text-xs sm:text-sm">Target Users</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-3 sm:px-4 py-3">
              <div className="text-2xl sm:text-3xl font-bold">3</div>
              <div className="text-indigo-100 text-xs sm:text-sm">Upcoming Events</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-3 sm:px-4 py-3">
              <div className="text-2xl sm:text-3xl font-bold">AED 5</div>
              <div className="text-indigo-100 text-xs sm:text-sm">Target CAC</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 sm:gap-2 overflow-x-auto py-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white'
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6 sm:space-y-8">

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                <Calendar className="text-indigo-600" size={20} />
                Upcoming Events
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {upcomingEvents.map((event, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{event.name}</h3>
                      {idx === 0 && (
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">Next Up</span>
                      )}
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={14} className="text-indigo-500" />
                        {event.dates}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={14} className="text-indigo-500" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users size={14} className="text-indigo-500" />
                        {event.expectedVisitors} visitors
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-indigo-600">{event.merchantTarget}</div>
                        <div className="text-xs text-gray-500">Merchants</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">{event.userTarget}</div>
                        <div className="text-xs text-gray-500">Users</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Categories */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                <Store className="text-indigo-600" size={20} />
                Target Merchant Categories (40 Total)
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {targetCategories.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <div key={idx} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${cat.color} text-white`}>
                          <Icon size={18} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm">{cat.name}</h3>
                          <p className="text-xs text-gray-500">{cat.count} merchants</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {cat.examples.map((ex, i) => (
                          <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                <TrendingUp size={20} />
                Event Success Metrics
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-bold">30-40</div>
                  <div className="text-indigo-100 text-sm">Merchants Onboarded</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-bold">2,000+</div>
                  <div className="text-indigo-100 text-sm">New App Downloads</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-bold">AED 500K</div>
                  <div className="text-indigo-100 text-sm">GMV Target</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-bold">25%</div>
                  <div className="text-indigo-100 text-sm">Conversion Rate</div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                <Clock className="text-indigo-600" size={20} />
                Execution Timeline
              </h2>
              <div className="space-y-4">
                {[
                  { phase: 'Week 1-2', title: 'Merchant Identification & Outreach', tasks: ['Research event vendors', 'Build contact list', 'Send intro emails', 'Schedule meetings'], status: 'in_progress' },
                  { phase: 'Week 3-4', title: 'Pitching & Closing', tasks: ['Conduct presentations', 'Negotiate terms', 'Sign agreements', 'Onboard merchants'], status: 'upcoming' },
                  { phase: 'Week 5', title: 'Pre-Event Preparation', tasks: ['Train merchant staff', 'Set up merchant accounts', 'Prepare marketing materials', 'Booth setup planning'], status: 'upcoming' },
                  { phase: 'Event Days', title: 'Execution & User Acquisition', tasks: ['Run Nuqta booth', 'Acquire users', 'Support merchants', 'Track transactions'], status: 'upcoming' },
                  { phase: 'Post-Event', title: 'Follow-up & Retention', tasks: ['Analyze results', 'Convert to permanent', 'Send thank you notes', 'Plan next event'], status: 'upcoming' },
                ].map((phase, idx) => (
                  <div key={idx} className={`flex gap-4 ${phase.status === 'in_progress' ? 'opacity-100' : 'opacity-70'}`}>
                    <div className="flex-shrink-0 w-20 sm:w-24">
                      <span className={`text-sm font-semibold ${phase.status === 'in_progress' ? 'text-indigo-600' : 'text-gray-500'}`}>
                        {phase.phase}
                      </span>
                    </div>
                    <div className={`flex-1 border-l-2 pl-4 pb-4 ${phase.status === 'in_progress' ? 'border-indigo-500' : 'border-gray-200'}`}>
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                        {phase.title}
                        {phase.status === 'in_progress' && (
                          <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">Current</span>
                        )}
                      </h4>
                      <ul className="mt-2 space-y-1">
                        {phase.tasks.map((task, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <ChevronRight size={12} className="text-indigo-400" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Merchants Tab */}
        {activeTab === 'merchants' && (
          <div className="space-y-6 sm:space-y-8">

            {/* Pipeline Summary */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="text-indigo-600" size={20} />
                Pipeline Summary
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-gray-900">{pipelineStats.total}</div>
                  <div className="text-sm text-gray-500">Total Pipeline</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-green-600">{pipelineStats.confirmed}</div>
                  <div className="text-sm text-gray-500">Confirmed</div>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-amber-600">{pipelineStats.inProgress}</div>
                  <div className="text-sm text-gray-500">In Progress</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600">{pipelineStats.identified}</div>
                  <div className="text-sm text-gray-500">Identified</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Progress to 40 Merchants</span>
                  <span className="text-sm font-semibold text-indigo-600">{pipelineStats.confirmed}/40</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    style={{ width: `${(pipelineStats.confirmed / 40) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Merchant Onboarding Playbook */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="text-indigo-600" size={20} />
                Merchant Pitch Playbook
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Value Props */}
                <div className="bg-indigo-50 rounded-xl p-4">
                  <h3 className="font-semibold text-indigo-900 mb-3">Key Value Props for Merchants</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>5x Higher AOV</strong> - AED 500+ minimum vs AED 50-100 typical</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Zero Upfront Cost</strong> - Pay only on Nuqta-driven sales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Guaranteed Intent</strong> - Every user is pre-motivated to spend</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Free Marketing</strong> - Social sharing brings more customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Year-Round Value</strong> - Event customers become permanent</span>
                    </li>
                  </ul>
                </div>

                {/* Pricing */}
                <div className="bg-purple-50 rounded-xl p-4">
                  <h3 className="font-semibold text-purple-900 mb-3">Commission Structure</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-white rounded-lg p-3">
                      <div>
                        <span className="font-medium text-gray-900">Standard</span>
                        <p className="text-xs text-gray-500">For most exhibitors</p>
                      </div>
                      <span className="text-xl font-bold text-purple-600">5%</span>
                    </div>
                    <div className="flex items-center justify-between bg-white rounded-lg p-3 border-2 border-purple-300">
                      <div>
                        <span className="font-medium text-gray-900">Premium</span>
                        <p className="text-xs text-gray-500">Featured + priority</p>
                      </div>
                      <span className="text-xl font-bold text-purple-600">6%</span>
                    </div>
                    <div className="flex items-center justify-between bg-white rounded-lg p-3">
                      <div>
                        <span className="font-medium text-gray-900">Enterprise</span>
                        <p className="text-xs text-gray-500">Multi-booth operators</p>
                      </div>
                      <span className="text-xl font-bold text-purple-600">Custom</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Math */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <DollarSign size={18} />
                  Quick ROI Math (Use in Pitch)
                </h4>
                <div className="grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-xl font-bold text-gray-900">AED 600</div>
                    <div className="text-xs text-gray-500">Customer Spend</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-xl font-bold text-red-500">-AED 30</div>
                    <div className="text-xs text-gray-500">Nuqta Fee (5%)</div>
                  </div>
                  <div className="bg-green-100 rounded-lg p-3 border border-green-300">
                    <div className="text-xl font-bold text-green-600">AED 570</div>
                    <div className="text-xs text-gray-500">You Keep</div>
                  </div>
                </div>
                <p className="text-xs text-green-700 mt-2 text-center">
                  vs. typical AED 50 impulse buy = <strong>11x more revenue</strong> per customer
                </p>
              </div>
            </div>

            {/* Merchant List */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Store className="text-indigo-600" size={20} />
                  Merchant Pipeline
                </h2>
                <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                  + Add Merchant
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Merchant</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Category</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Contact</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900">Priority</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900">Avg. Txn</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleMerchants.map((merchant) => (
                      <tr key={merchant.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-2">
                          <div className="font-medium text-gray-900">{merchant.name}</div>
                          <div className="text-xs text-gray-500">{merchant.location}</div>
                        </td>
                        <td className="py-3 px-2 text-gray-600">{merchant.category}</td>
                        <td className="py-3 px-2">
                          <div className="text-gray-900">{merchant.contactPerson}</div>
                          <div className="text-xs text-gray-500">{merchant.phone}</div>
                        </td>
                        <td className="py-3 px-2 text-center">
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${priorityColors[merchant.priority]}`}>
                            {merchant.priority}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-center text-gray-900 font-medium">
                          AED {merchant.avgTransaction}
                        </td>
                        <td className="py-3 px-2 text-center">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[merchant.status].bg} ${statusColors[merchant.status].text}`}>
                            {statusColors[merchant.status].label}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Showing {sampleMerchants.length} sample merchants. Add more to track full pipeline.
              </p>
            </div>

            {/* Outreach Templates */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MessageSquare className="text-indigo-600" size={20} />
                Outreach Templates
              </h2>

              <div className="space-y-4">
                {/* Cold Email */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Mail size={16} className="text-blue-600" />
                    Cold Email Template
                  </h4>
                  <div className="bg-white rounded-lg p-3 text-sm text-gray-700 border border-gray-200">
                    <p className="mb-2"><strong>Subject:</strong> Turn [Event Name] Browsers Into AED 500+ Buyers</p>
                    <p className="mb-2">Hi [Name],</p>
                    <p className="mb-2">I noticed [Business Name] is exhibiting at [Event]. What if every visitor to your booth was pre-motivated to spend AED 500+?</p>
                    <p className="mb-2">Nuqta is a rewards platform that drives high-value customers to event vendors. Our users earn AED 100 in coins that only unlock after spending AED 500+ at partner booths.</p>
                    <p className="mb-2"><strong>Results:</strong><br/>
                    • 5x higher average order value<br/>
                    • Zero upfront cost (pay only on success)<br/>
                    • Free marketing through social sharing</p>
                    <p className="mb-2">Can I share a 5-minute demo this week?</p>
                    <p>Best,<br/>[Your Name]</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <MessageSquare size={16} className="text-green-600" />
                    WhatsApp Message
                  </h4>
                  <div className="bg-white rounded-lg p-3 text-sm text-gray-700 border border-gray-200">
                    Hi [Name]! 👋<br/><br/>
                    I&apos;m reaching out from Nuqta - we help event exhibitors get guaranteed AED 500+ customers instead of window shoppers.<br/><br/>
                    We&apos;re partnering with [Event Name] and have spots for select vendors. Zero upfront cost - you only pay 5% on sales we drive.<br/><br/>
                    Would you be open to a quick call? 📞
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="space-y-6 sm:space-y-8">

            {/* User Acquisition Goals */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="text-indigo-600" size={20} />
                User Acquisition Goals
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-indigo-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-indigo-600">2,800</div>
                  <div className="text-sm text-gray-600">Total New Users</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-purple-600">25%</div>
                  <div className="text-sm text-gray-600">Conversion Rate</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-green-600">AED 5</div>
                  <div className="text-sm text-gray-600">Target CAC</div>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-amber-600">70%</div>
                  <div className="text-sm text-gray-600">Retention (30-day)</div>
                </div>
              </div>

              {/* Breakdown by Event */}
              <h3 className="font-semibold text-gray-900 mb-3">Breakdown by Event</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-900">{event.name}</span>
                      <p className="text-xs text-gray-500">{event.dates}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-indigo-600">{event.userTarget}</span>
                      <p className="text-xs text-gray-500">target users</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booth Strategy */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="text-indigo-600" size={20} />
                Nuqta Booth Strategy
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Booth Setup */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Booth Setup</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                      <QrCode className="text-indigo-600 flex-shrink-0" size={24} />
                      <div>
                        <span className="font-medium text-gray-900">Giant QR Code Display</span>
                        <p className="text-xs text-gray-600">6ft banner with download QR + &ldquo;Get AED 100 FREE&rdquo;</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                      <Smartphone className="text-purple-600 flex-shrink-0" size={24} />
                      <div>
                        <span className="font-medium text-gray-900">Demo Tablets</span>
                        <p className="text-xs text-gray-600">3 tablets for assisted signups</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg">
                      <Gift className="text-pink-600 flex-shrink-0" size={24} />
                      <div>
                        <span className="font-medium text-gray-900">Instant Rewards</span>
                        <p className="text-xs text-gray-600">AED 100 event coins loaded immediately on signup</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <Megaphone className="text-green-600 flex-shrink-0" size={24} />
                      <div>
                        <span className="font-medium text-gray-900">Staff Scripts</span>
                        <p className="text-xs text-gray-600">Trained staff with 30-second pitch</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* User Journey */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">User Journey at Event</h3>
                  <div className="space-y-2">
                    {[
                      { step: '1', action: 'Visitor sees booth', detail: 'Attracted by "AED 100 FREE" signage' },
                      { step: '2', action: 'Downloads app', detail: 'Scan QR or assisted signup (30 sec)' },
                      { step: '3', action: 'Gets coins', detail: 'AED 100 event coins loaded instantly' },
                      { step: '4', action: 'Visits merchants', detail: 'Directed to partner booths' },
                      { step: '5', action: 'Spends AED 500+', detail: 'Unlocks coins for redemption' },
                      { step: '6', action: 'Shares socially', detail: 'Instagram/WhatsApp = more users' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <span className="font-medium text-gray-900 text-sm">{item.action}</span>
                          <p className="text-xs text-gray-500">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Acquisition Channels */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Share2 className="text-indigo-600" size={20} />
                Acquisition Channels
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { channel: 'Nuqta Booth', users: 1200, pct: '43%', icon: MapPin, color: 'indigo' },
                  { channel: 'Merchant Referrals', users: 800, pct: '29%', icon: Store, color: 'purple' },
                  { channel: 'Social Sharing', users: 500, pct: '18%', icon: Instagram, color: 'pink' },
                  { channel: 'Flyer Distribution', users: 300, pct: '11%', icon: FileText, color: 'cyan' },
                ].map((ch, idx) => {
                  const Icon = ch.icon;
                  return (
                    <div key={idx} className={`bg-${ch.color}-50 rounded-xl p-4 border border-${ch.color}-200`}>
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className={`text-${ch.color}-600`} size={20} />
                        <span className="font-semibold text-gray-900">{ch.channel}</span>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{ch.users}</div>
                          <div className="text-xs text-gray-500">users</div>
                        </div>
                        <div className={`text-lg font-bold text-${ch.color}-600`}>{ch.pct}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Staff Pitch Script */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
              <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                <Megaphone size={20} />
                30-Second Staff Pitch Script
              </h2>
              <div className="bg-white/10 rounded-lg p-4 text-sm">
                <p className="mb-3">
                  <span className="text-indigo-200">[Smile and make eye contact]</span>
                </p>
                <p className="mb-3">
                  &ldquo;Hi! Want AED 100 to spend at any booth here today?&rdquo;
                </p>
                <p className="mb-3">
                  <span className="text-indigo-200">[Wait for response]</span>
                </p>
                <p className="mb-3">
                  &ldquo;Just download our app - takes 30 seconds - and you&apos;ll get AED 100 in coins. Spend AED 500 at any partner booth and the coins are yours to use!&rdquo;
                </p>
                <p className="mb-3">
                  <span className="text-indigo-200">[Point to QR code]</span>
                </p>
                <p>
                  &ldquo;Scan here or I can help you sign up right now.&rdquo;
                </p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                <div className="bg-white/20 rounded-lg p-2">
                  <div className="font-bold">Objection: &ldquo;What&apos;s the catch?&rdquo;</div>
                  <p className="text-xs text-indigo-100">&ldquo;No catch! Merchants pay us when you shop with them.&rdquo;</p>
                </div>
                <div className="bg-white/20 rounded-lg p-2">
                  <div className="font-bold">Objection: &ldquo;AED 500 is a lot&rdquo;</div>
                  <p className="text-xs text-indigo-100">&ldquo;Combine purchases at any booth - fashion, food, jewelry!&rdquo;</p>
                </div>
                <div className="bg-white/20 rounded-lg p-2">
                  <div className="font-bold">Objection: &ldquo;I&apos;ll do it later&rdquo;</div>
                  <p className="text-xs text-indigo-100">&ldquo;Event coins expire today! Only takes 30 seconds.&rdquo;</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Operations Tab */}
        {activeTab === 'operations' && (
          <div className="space-y-6 sm:space-y-8">

            {/* Pre-Event Checklist */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="text-indigo-600" size={20} />
                Pre-Event Checklist
              </h2>

              <div className="space-y-4">
                {[
                  { category: 'Merchant Onboarding', items: [
                    { task: 'All merchant agreements signed', done: false },
                    { task: 'Merchant accounts created in system', done: false },
                    { task: 'Staff trained on Nuqta process', done: false },
                    { task: 'QR codes printed for each booth', done: false },
                    { task: 'WhatsApp support group created', done: false },
                  ]},
                  { category: 'Booth Setup', items: [
                    { task: 'Banner/signage printed', done: false },
                    { task: 'Tablets charged and configured', done: false },
                    { task: 'Flyers printed (1000+)', done: false },
                    { task: 'Staff uniforms ready', done: false },
                    { task: 'Extension cords and power banks', done: false },
                  ]},
                  { category: 'Technical', items: [
                    { task: 'Event coins configured in system', done: false },
                    { task: 'AED 500 threshold set', done: false },
                    { task: 'Expiry date set for coins', done: false },
                    { task: 'Real-time dashboard tested', done: false },
                    { task: 'WiFi backup (mobile hotspot)', done: false },
                  ]},
                  { category: 'Team', items: [
                    { task: 'Staff schedule confirmed', done: false },
                    { task: 'Training session completed', done: false },
                    { task: 'Scripts memorized', done: false },
                    { task: 'Emergency contacts shared', done: false },
                    { task: 'Incentive structure communicated', done: false },
                  ]},
                ].map((section, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">{section.category}</h3>
                    <div className="space-y-2">
                      {section.items.map((item, i) => (
                        <label key={i} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg">
                          <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" defaultChecked={item.done} />
                          <span className="text-sm text-gray-700">{item.task}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Staff Schedule */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="text-indigo-600" size={20} />
                Staff Schedule Template
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Shift</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Time</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900">Staff Needed</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-2 font-medium text-gray-900">Morning</td>
                      <td className="py-3 px-2 text-gray-600">10:00 AM - 2:00 PM</td>
                      <td className="py-3 px-2 text-center">2</td>
                      <td className="py-3 px-2 text-gray-600">Setup, early birds</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-amber-50">
                      <td className="py-3 px-2 font-medium text-amber-700">Peak</td>
                      <td className="py-3 px-2 text-gray-600">2:00 PM - 8:00 PM</td>
                      <td className="py-3 px-2 text-center font-bold">4</td>
                      <td className="py-3 px-2 text-gray-600">Maximum signups</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-2 font-medium text-gray-900">Evening</td>
                      <td className="py-3 px-2 text-gray-600">8:00 PM - 11:00 PM</td>
                      <td className="py-3 px-2 text-center">2</td>
                      <td className="py-3 px-2 text-gray-600">Last-minute signups</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-sm text-amber-800">
                  <strong>Peak Hours (2-8 PM):</strong> Deploy full team. This is when 70% of signups happen.
                </p>
              </div>
            </div>

            {/* Daily Targets */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="text-indigo-600" size={20} />
                Daily Targets (7-Day Event)
              </h2>

              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'].map((day, idx) => (
                  <div key={idx} className={`text-center p-3 rounded-lg ${idx === 4 || idx === 5 ? 'bg-indigo-100 border-2 border-indigo-300' : 'bg-gray-50'}`}>
                    <div className="text-xs text-gray-500 mb-1">{day}</div>
                    <div className={`text-lg font-bold ${idx === 4 || idx === 5 ? 'text-indigo-600' : 'text-gray-700'}`}>
                      {idx === 4 || idx === 5 ? '120' : idx === 0 ? '60' : idx === 6 ? '80' : '100'}
                    </div>
                    <div className="text-xs text-gray-500">users</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg">
                <span className="font-medium text-indigo-900">7-Day Total Target</span>
                <span className="text-xl font-bold text-indigo-600">680 users</span>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="text-red-600" size={20} />
                Emergency Contacts
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { role: 'Event Lead', name: 'TBD', phone: '+971 50 XXX XXXX' },
                  { role: 'Tech Support', name: 'TBD', phone: '+971 50 XXX XXXX' },
                  { role: 'Merchant Support', name: 'TBD', phone: '+971 50 XXX XXXX' },
                  { role: 'Venue Contact', name: 'TBD', phone: '+971 50 XXX XXXX' },
                ].map((contact, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Phone className="text-indigo-600" size={18} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{contact.role}</div>
                      <div className="text-sm text-gray-500">{contact.name} • {contact.phone}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Post-Event Actions */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-green-200">
              <h2 className="text-lg sm:text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                <TrendingUp className="text-green-600" size={20} />
                Post-Event Actions
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">Within 24 Hours</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight size={14} className="text-green-600 mt-0.5" />
                      <span>Send thank-you messages to all merchants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={14} className="text-green-600 mt-0.5" />
                      <span>Generate preliminary results report</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={14} className="text-green-600 mt-0.5" />
                      <span>Collect merchant feedback via WhatsApp</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">Within 1 Week</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight size={14} className="text-green-600 mt-0.5" />
                      <span>Pitch permanent partnership to top performers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={14} className="text-green-600 mt-0.5" />
                      <span>Send user retention campaign (push + email)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={14} className="text-green-600 mt-0.5" />
                      <span>Complete full analytics report</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Execute?</h2>
          <p className="text-indigo-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Start reaching out to merchants today. The earlier you begin, the more confirmed partners you&apos;ll have by event day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="/exhibition-merchants" className="bg-white text-indigo-700 px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors text-sm sm:text-base">
              View Merchant Pitch Page
            </a>
            <a href="/offline-marketing" className="bg-white/20 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors text-sm sm:text-base">
              Offline Marketing Playbook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
