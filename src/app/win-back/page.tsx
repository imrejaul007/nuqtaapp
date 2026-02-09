'use client';

import React, { useState } from 'react';
import {
  UserX, Heart, Mail, MessageSquare, Bell, Gift, Clock,
  TrendingUp, AlertCircle, CheckCircle, Target, Zap,
  Calendar, DollarSign, Users, ArrowRight, RefreshCw,
  Sparkles, Trophy, Percent, Phone, Send, Timer
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Churn Segments
const churnSegments = [
  {
    segment: 'At-Risk',
    definition: 'No transaction in 14-30 days',
    size: '15%',
    users: 1500,
    winBackRate: '45%',
    strategy: 'Light touch - reminder + small incentive',
    urgency: 'Medium',
    color: 'bg-amber-500'
  },
  {
    segment: 'Dormant',
    definition: 'No transaction in 31-60 days',
    size: '8%',
    users: 800,
    winBackRate: '25%',
    strategy: 'Aggressive - strong offer + new features',
    urgency: 'High',
    color: 'bg-orange-500'
  },
  {
    segment: 'Churned',
    definition: 'No transaction in 61-90 days',
    size: '5%',
    users: 500,
    winBackRate: '12%',
    strategy: 'Hail Mary - best offer + survey',
    urgency: 'Critical',
    color: 'bg-red-500'
  },
  {
    segment: 'Lost',
    definition: 'No transaction in 90+ days',
    size: '3%',
    users: 300,
    winBackRate: '5%',
    strategy: 'Re-acquisition - treat as new user',
    urgency: 'Low priority',
    color: 'bg-gray-500'
  }
];

// Win-Back Campaigns
const winBackCampaigns = [
  {
    id: 'wb-001',
    name: 'We Miss You',
    segment: 'At-Risk',
    trigger: 'Day 14 no activity',
    channels: ['Push', 'Email'],
    offer: '100 bonus coins on next purchase',
    message: {
      subject: 'Your coins are waiting! 🪙',
      body: 'Hey [Name], we noticed you haven\'t visited in a while. Your Golden Coins are lonely! Come back and earn 100 bonus coins on your next purchase.',
      cta: 'Earn Bonus Coins'
    },
    expectedLift: '+25% return rate',
    cost: 'AED 0.50/user',
    roi: '8x'
  },
  {
    id: 'wb-002',
    name: 'Expiring Coins Alert',
    segment: 'At-Risk',
    trigger: 'Day 21 + coins expiring in 7 days',
    channels: ['Push', 'SMS', 'Email'],
    offer: 'None (loss aversion)',
    message: {
      subject: '⚠️ 500 coins expiring in 7 days!',
      body: '[Name], you have 500 Golden Coins worth AED 25 that will expire on [Date]. Don\'t let them go to waste!',
      cta: 'Use My Coins Now'
    },
    expectedLift: '+40% return rate',
    cost: 'AED 0.30/user',
    roi: '15x'
  },
  {
    id: 'wb-003',
    name: 'New Merchant Alert',
    segment: 'Dormant',
    trigger: 'Day 35 + new merchant in their area',
    channels: ['Push', 'Email'],
    offer: '2x coins at new merchant',
    message: {
      subject: '🆕 New spot just opened near you!',
      body: '[Merchant Name] just joined Nuqta! Be one of the first to try them and earn DOUBLE coins for the next 7 days.',
      cta: 'Check It Out'
    },
    expectedLift: '+30% return rate',
    cost: 'AED 1.00/user',
    roi: '5x'
  },
  {
    id: 'wb-004',
    name: 'Personal Best Challenge',
    segment: 'Dormant',
    trigger: 'Day 45',
    channels: ['Push', 'Email', 'In-app'],
    offer: '500 bonus coins for beating last month',
    message: {
      subject: 'Can you beat your record? 🏆',
      body: 'Last month you earned [X] coins. This month, if you beat that, we\'ll give you 500 BONUS coins on top!',
      cta: 'Accept Challenge'
    },
    expectedLift: '+35% return rate',
    cost: 'AED 2.50/user',
    roi: '4x'
  },
  {
    id: 'wb-005',
    name: 'VIP Rescue',
    segment: 'Dormant',
    trigger: 'Day 50 + was high-value user',
    channels: ['Personal call', 'WhatsApp', 'Email'],
    offer: 'Free Nuqta+ for 1 month',
    message: {
      subject: 'A special gift for you, [Name] ✨',
      body: 'We miss having you as one of our top members! Here\'s 1 month of Nuqta+ FREE - enjoy 2x coins and exclusive deals.',
      cta: 'Claim My Gift'
    },
    expectedLift: '+50% return rate',
    cost: 'AED 39/user',
    roi: '3x'
  },
  {
    id: 'wb-006',
    name: 'Honest Feedback',
    segment: 'Churned',
    trigger: 'Day 65',
    channels: ['Email', 'SMS'],
    offer: 'AED 25 credit for survey',
    message: {
      subject: 'We want to improve - can you help?',
      body: 'Hi [Name], we noticed you stopped using Nuqta. We\'d love to know why. Complete this 2-min survey and get AED 25 credit.',
      cta: 'Share Feedback'
    },
    expectedLift: '+15% return rate + insights',
    cost: 'AED 25/user',
    roi: '2x'
  },
  {
    id: 'wb-007',
    name: 'Fresh Start',
    segment: 'Churned',
    trigger: 'Day 75',
    channels: ['Email'],
    offer: '1000 welcome-back coins',
    message: {
      subject: 'A lot has changed! Come see 👀',
      body: 'Hi [Name], we\'ve added [X] new merchants, [Y] new features, and improved [Z]. Here\'s 1000 coins to welcome you back!',
      cta: 'Explore What\'s New'
    },
    expectedLift: '+10% return rate',
    cost: 'AED 5/user',
    roi: '3x'
  },
  {
    id: 'wb-008',
    name: 'Final Offer',
    segment: 'Lost',
    trigger: 'Day 90',
    channels: ['Email'],
    offer: 'Best offer we can give',
    message: {
      subject: 'One last thing before we say goodbye...',
      body: 'Hi [Name], it looks like Nuqta isn\'t for you anymore. Before we archive your account, here\'s our BEST offer: 2000 coins + 3 months Nuqta+ FREE.',
      cta: 'Give It One More Try'
    },
    expectedLift: '+5% return rate',
    cost: 'AED 100/user',
    roi: '1.5x'
  }
];

// Win-Back Sequences
const winBackSequences = [
  {
    name: 'Standard Win-Back',
    duration: '21 days',
    steps: [
      { day: 1, action: 'Push: Soft reminder', channel: 'Push' },
      { day: 3, action: 'Email: We miss you + 100 coins', channel: 'Email' },
      { day: 7, action: 'Push: New merchant nearby', channel: 'Push' },
      { day: 10, action: 'SMS: Coins expiring warning', channel: 'SMS' },
      { day: 14, action: 'Email: Personal challenge', channel: 'Email' },
      { day: 21, action: 'Final push: Best offer', channel: 'Push + Email' }
    ],
    conversionRate: '28%'
  },
  {
    name: 'VIP Win-Back',
    duration: '14 days',
    steps: [
      { day: 1, action: 'WhatsApp: Personal message', channel: 'WhatsApp' },
      { day: 3, action: 'Call: Check-in from team', channel: 'Phone' },
      { day: 5, action: 'Email: Exclusive VIP offer', channel: 'Email' },
      { day: 7, action: 'Gift: Free Nuqta+ activation', channel: 'In-app' },
      { day: 14, action: 'Final: Handwritten note offer', channel: 'Email' }
    ],
    conversionRate: '45%'
  }
];

// Churn Reasons & Solutions
const churnReasons = [
  {
    reason: 'Not enough merchants nearby',
    percentage: 35,
    solution: 'Geo-targeted win-back when new merchant opens',
    status: 'implemented'
  },
  {
    reason: 'Forgot about the app',
    percentage: 25,
    solution: 'Streak rewards + weekly digest email',
    status: 'implementing'
  },
  {
    reason: 'Rewards too slow',
    percentage: 20,
    solution: 'Nuqta+ 2x coins + accelerator campaigns',
    status: 'implemented'
  },
  {
    reason: 'Technical issues',
    percentage: 10,
    solution: 'Proactive outreach when errors detected',
    status: 'proposed'
  },
  {
    reason: 'Switched to competitor',
    percentage: 7,
    solution: 'Competitive offer + feature comparison',
    status: 'proposed'
  },
  {
    reason: 'Left UAE',
    percentage: 3,
    solution: 'Account pause option + return offer',
    status: 'proposed'
  }
];

// Prediction Model
const predictionSignals = [
  { signal: 'Decreased transaction frequency', weight: 35, description: '50%+ drop vs previous month' },
  { signal: 'Stopped opening push notifications', weight: 25, description: '<10% open rate last 2 weeks' },
  { signal: 'No app opens in 7 days', weight: 20, description: 'Previously opened 3+ times/week' },
  { signal: 'Unsubscribed from emails', weight: 10, description: 'Recent opt-out' },
  { signal: 'Negative review/feedback', weight: 10, description: 'In-app rating <3 stars' }
];

export default function WinBackPage() {
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);

  const filteredCampaigns = selectedSegment
    ? winBackCampaigns.filter(c => c.segment === selectedSegment)
    : winBackCampaigns;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] via-red-900 to-[#0a1628] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
              <Heart className="text-red-400" size={18} />
              <span className="text-red-400 font-medium">Retention Engine</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Win-Back <span className="text-red-400">Playbook</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Re-engage dormant users before they&apos;re gone forever.
              Automated sequences that bring users back at 5-10x the cost of acquiring new ones.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-red-400">3,100</div>
                <div className="text-sm text-gray-300">At-Risk Users</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-amber-400">28%</div>
                <div className="text-sm text-gray-300">Avg Win-Back Rate</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-emerald-400">AED 8</div>
                <div className="text-sm text-gray-300">Cost to Win-Back</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-purple-400">5x</div>
                <div className="text-sm text-gray-300">ROI vs New Acquisition</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Churn Segments */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <UserX className="text-red-500" />
            Churn Segmentation
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            {churnSegments.map((segment, i) => (
              <button
                key={i}
                onClick={() => setSelectedSegment(selectedSegment === segment.segment ? null : segment.segment)}
                className={`text-left p-4 rounded-xl border-2 transition-all ${
                  selectedSegment === segment.segment
                    ? 'border-[#0a1628] bg-[#0a1628]/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-3 h-3 rounded-full ${segment.color}`} />
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    segment.urgency === 'Critical' ? 'bg-red-100 text-red-700' :
                    segment.urgency === 'High' ? 'bg-orange-100 text-orange-700' :
                    segment.urgency === 'Medium' ? 'bg-amber-100 text-amber-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {segment.urgency}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900">{segment.segment}</h3>
                <p className="text-xs text-gray-500 mb-2">{segment.definition}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">{segment.users.toLocaleString()} users</span>
                  <span className="text-emerald-600 font-medium">{segment.winBackRate} win-back</span>
                </div>
                <div className="mt-2 text-xs text-gray-400">{segment.strategy}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Churn Prediction */}
        <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-6 text-white mb-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <AlertCircle size={24} />
            Churn Prediction Model
          </h2>

          <p className="text-purple-200 mb-4">
            Our model identifies at-risk users BEFORE they churn, allowing proactive intervention.
            Users with a churn score above 60 enter the win-back sequence automatically.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {predictionSignals.map((signal, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-amber-400">{signal.weight}%</span>
                </div>
                <h4 className="font-semibold text-sm mb-1">{signal.signal}</h4>
                <p className="text-xs text-purple-200">{signal.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-white/10 rounded-xl">
            <div className="flex items-center gap-2 text-sm">
              <Zap className="text-amber-400" size={16} />
              <span className="font-semibold">Model accuracy:</span>
              <span className="text-emerald-400">78% precision</span>
              <span className="text-gray-400 mx-2">|</span>
              <span className="font-semibold">False positive rate:</span>
              <span className="text-amber-400">12%</span>
            </div>
          </div>
        </div>

        {/* Win-Back Campaigns */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <RefreshCw className="text-emerald-500" />
              Win-Back Campaigns
            </h2>
            {selectedSegment && (
              <button
                onClick={() => setSelectedSegment(null)}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Show all
              </button>
            )}
          </div>

          <div className="space-y-4">
            {filteredCampaigns.map((campaign) => (
              <div key={campaign.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900">{campaign.name}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        campaign.segment === 'At-Risk' ? 'bg-amber-100 text-amber-700' :
                        campaign.segment === 'Dormant' ? 'bg-orange-100 text-orange-700' :
                        campaign.segment === 'Churned' ? 'bg-red-100 text-red-700' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {campaign.segment}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Trigger:</span> {campaign.trigger}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-emerald-600">{campaign.roi} ROI</div>
                    <div className="text-xs text-gray-500">{campaign.cost}</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 mb-3">
                  <div className="text-xs text-gray-500 uppercase mb-1">Message Preview</div>
                  <div className="font-medium text-gray-900 mb-1">{campaign.message.subject}</div>
                  <p className="text-sm text-gray-600">{campaign.message.body}</p>
                  <button className="mt-2 text-sm text-[#c9a227] font-semibold">
                    {campaign.message.cta} →
                  </button>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex gap-2">
                    {campaign.channels.map((ch, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 rounded text-gray-600 text-xs">
                        {ch}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500">
                      <span className="font-medium">Offer:</span> {campaign.offer}
                    </span>
                    <span className="text-emerald-600 font-medium">{campaign.expectedLift}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Win-Back Sequences */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Timer className="text-purple-500" />
            Automated Win-Back Sequences
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {winBackSequences.map((sequence, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900">{sequence.name}</h3>
                    <span className="text-sm text-gray-500">{sequence.duration}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-emerald-600">{sequence.conversionRate}</div>
                    <div className="text-xs text-gray-500">Conversion Rate</div>
                  </div>
                </div>

                <div className="space-y-2">
                  {sequence.steps.map((step, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-12 text-right">
                        <span className="text-xs text-gray-500">Day {step.day}</span>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${
                        step.channel === 'Push' ? 'bg-blue-500' :
                        step.channel === 'Email' ? 'bg-purple-500' :
                        step.channel === 'SMS' ? 'bg-emerald-500' :
                        step.channel === 'WhatsApp' ? 'bg-green-500' :
                        step.channel === 'Phone' ? 'bg-red-500' :
                        'bg-amber-500'
                      }`} />
                      <div className="flex-1 text-sm text-gray-600">{step.action}</div>
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">
                        {step.channel}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Churn Reasons */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Target className="text-amber-500" />
            Churn Reasons & Solutions
          </h2>

          <div className="space-y-4">
            {churnReasons.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-16 text-right">
                  <span className="text-lg font-bold text-gray-900">{item.percentage}%</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900">{item.reason}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      item.status === 'implemented' ? 'bg-emerald-100 text-emerald-700' :
                      item.status === 'implementing' ? 'bg-amber-100 text-amber-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-500 rounded-full"
                      style={{ width: `${item.percentage * 2}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Solution: {item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Templates */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <MessageSquare className="text-amber-600" />
            Win-Back Message Templates
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 border border-amber-100">
              <div className="flex items-center gap-2 mb-2">
                <Bell className="text-blue-500" size={16} />
                <span className="font-semibold text-gray-900">Push Notification</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-gray-50 rounded">
                  "🪙 Your 500 coins miss you! Use them before [Date]"
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  "🆕 [Merchant] just joined! 2x coins for you →"
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  "🎁 We have a surprise for you inside!"
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-amber-100">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="text-green-500" size={16} />
                <span className="font-semibold text-gray-900">SMS</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-gray-50 rounded">
                  "Nuqta: Your coins expire in 7 days! Don't lose AED 25. Use now: nuqta.app/u/[code]"
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  "Nuqta: 500 bonus coins waiting for you! Valid 48hrs: nuqta.app/u/[code]"
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-amber-100">
              <div className="flex items-center gap-2 mb-2">
                <Send className="text-green-600" size={16} />
                <span className="font-semibold text-gray-900">WhatsApp (VIP)</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-gray-50 rounded">
                  "Hi [Name]! This is [Rep] from Nuqta. We noticed you haven't visited in a while. Is everything okay? We'd love to help if there's anything we can do! 💛"
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <CheckCircle className="text-emerald-500" />
            Win-Back Best Practices
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
              <h3 className="font-bold text-emerald-800 mb-2">✓ DO</h3>
              <ul className="space-y-1 text-sm text-emerald-700">
                <li>• Personalize with user's name & history</li>
                <li>• Create urgency (expiring coins)</li>
                <li>• Start with soft touch, escalate offers</li>
                <li>• Include clear value proposition</li>
                <li>• Make returning effortless (deep links)</li>
                <li>• A/B test every campaign</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <h3 className="font-bold text-red-800 mb-2">✗ DON&apos;T</h3>
              <ul className="space-y-1 text-sm text-red-700">
                <li>• Send too many messages (max 2/week)</li>
                <li>• Be desperate or aggressive</li>
                <li>• Give best offer first</li>
                <li>• Ignore channel preferences</li>
                <li>• Forget to measure attribution</li>
                <li>• Send at bad times (late night)</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <h3 className="font-bold text-blue-800 mb-2">📊 Key Metrics</h3>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• Win-back rate by segment</li>
                <li>• Cost per reactivated user</li>
                <li>• LTV of won-back users</li>
                <li>• Channel effectiveness</li>
                <li>• Offer redemption rate</li>
                <li>• Time to reactivation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <GlobalFooter />
    </div>
  );
}
