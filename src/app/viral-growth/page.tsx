'use client';

import React, { useState } from 'react';
import {
  Rocket, Share2, Users, TrendingUp, Zap, Target, Gift,
  MessageCircle, Trophy, Star, ArrowRight, Sparkles, Network,
  Repeat, ChevronDown, ChevronUp, Calculator, DollarSign,
  Megaphone, Heart, Clock, CheckCircle, AlertCircle, Crown,
  Smartphone, Mail, Bell, Copy, Link, QrCode, Camera
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Viral Loop Mechanics
const viralLoops = [
  {
    id: 'payment-share',
    name: 'Payment Moment Share',
    trigger: 'After successful payment',
    hook: 'Share your Golden Coin win!',
    viralCoefficient: 0.8,
    description: 'When users get Golden Coins after payment, they want to show off. Instagram story-ready screen.',
    mechanics: [
      'Beautiful shareable card with coin animation',
      'Pre-filled caption: "Just earned 500 coins at [Merchant]! 🪙"',
      'Deep link brings friend to same merchant',
      'Friend gets bonus coins for first transaction there'
    ],
    channels: ['Instagram Story', 'WhatsApp Status', 'Snapchat'],
    expectedReach: '3-5 friends per share',
    conversionRate: '15-20%',
    color: 'from-amber-500 to-orange-500',
    icon: Sparkles,
    priority: 'HIGHEST'
  },
  {
    id: 'split-bill',
    name: 'Split Bill Viral',
    trigger: 'Group dining/shopping',
    hook: 'Split the bill, share the rewards',
    viralCoefficient: 1.2,
    description: 'UAE has strong group culture. Split bill feature brings in entire friend groups.',
    mechanics: [
      'One person initiates split, others download to participate',
      'Everyone gets coins proportional to their share',
      'Group leaderboard shows who collects most coins',
      'Bonus for first-time group members'
    ],
    channels: ['WhatsApp Group', 'iMessage', 'In-person'],
    expectedReach: '4-6 friends per split',
    conversionRate: '60-80% (they need app to pay)',
    color: 'from-emerald-500 to-teal-500',
    icon: Users,
    priority: 'HIGHEST'
  },
  {
    id: 'merchant-pride',
    name: 'Merchant Pride Loop',
    trigger: 'Merchant sees customer using Nuqta',
    hook: 'Every transaction is merchant marketing',
    viralCoefficient: 0.5,
    description: 'Merchants see Nuqta customers spending more. They tell other merchants.',
    mechanics: [
      'Merchant dashboard shows "Nuqta customers spend 35% more"',
      'Shareable merchant success cards',
      'Referral bonus: AED 500 for each merchant referred',
      'Featured on "Top Merchants" leaderboard'
    ],
    channels: ['WhatsApp Business Groups', 'LinkedIn', 'Word of mouth'],
    expectedReach: '2-3 merchant friends',
    conversionRate: '25-35% (merchants trust merchants)',
    color: 'from-purple-500 to-indigo-500',
    icon: Crown,
    priority: 'HIGH'
  },
  {
    id: 'milestone-celebration',
    name: 'Milestone Celebrations',
    trigger: 'User hits coin milestones',
    hook: 'Celebrate achievements publicly',
    viralCoefficient: 0.6,
    description: 'Gamification milestones create natural share moments.',
    mechanics: [
      '1,000 coins = Bronze badge (first share)',
      '5,000 coins = Silver badge (share progress)',
      '10,000 coins = Gold badge (flex on social)',
      '25,000 coins = Platinum (exclusive club invite)'
    ],
    channels: ['Instagram', 'Facebook', 'Twitter/X'],
    expectedReach: '50-200 followers see post',
    conversionRate: '5-10% (awareness focused)',
    color: 'from-cyan-500 to-blue-500',
    icon: Trophy,
    priority: 'MEDIUM'
  },
  {
    id: 'gift-coins',
    name: 'Gift Coins Feature',
    trigger: 'Birthdays, holidays, thanks',
    hook: 'Gift coins instead of gift cards',
    viralCoefficient: 1.0,
    description: 'Position Nuqta coins as the new gift card. UAE has strong gifting culture.',
    mechanics: [
      'Buy coin packages as gifts (AED 50, 100, 200)',
      'Personalized gift card with message',
      'Recipient must download app to redeem',
      'Bonus coins for gifter and recipient'
    ],
    channels: ['WhatsApp', 'iMessage', 'Email'],
    expectedReach: '1 new user per gift',
    conversionRate: '90%+ (they want their gift)',
    color: 'from-pink-500 to-rose-500',
    icon: Gift,
    priority: 'HIGH'
  },
  {
    id: 'challenge-friends',
    name: 'Challenge Friends',
    trigger: 'Weekly challenges',
    hook: 'Compete with friends for bonus coins',
    viralCoefficient: 0.7,
    description: 'Turn spending into friendly competition.',
    mechanics: [
      'Create private challenge: "Most coffee shops visited this week"',
      'Invite friends to compete',
      'Winner gets bonus coins',
      'Losers still get participation coins'
    ],
    channels: ['In-app invites', 'WhatsApp'],
    expectedReach: '3-5 friends per challenge',
    conversionRate: '40-50%',
    color: 'from-red-500 to-orange-500',
    icon: Target,
    priority: 'MEDIUM'
  }
];

// Referral Program Structure
const referralTiers = [
  {
    tier: 'Standard',
    referrerReward: '500 coins',
    refereeReward: '500 coins',
    requirement: 'Friend makes first transaction',
    unlockAt: 0,
    color: 'bg-gray-100 border-gray-300'
  },
  {
    tier: 'Bronze Ambassador',
    referrerReward: '750 coins',
    refereeReward: '500 coins',
    requirement: '5+ successful referrals',
    unlockAt: 5,
    color: 'bg-amber-50 border-amber-300'
  },
  {
    tier: 'Silver Ambassador',
    referrerReward: '1,000 coins',
    refereeReward: '750 coins',
    requirement: '15+ successful referrals',
    unlockAt: 15,
    color: 'bg-gray-50 border-gray-400'
  },
  {
    tier: 'Gold Ambassador',
    referrerReward: '1,500 coins',
    refereeReward: '1,000 coins',
    requirement: '30+ successful referrals',
    unlockAt: 30,
    color: 'bg-yellow-50 border-yellow-400'
  },
  {
    tier: 'Platinum Ambassador',
    referrerReward: '2,500 coins + VIP perks',
    refereeReward: '1,500 coins',
    requirement: '50+ successful referrals',
    unlockAt: 50,
    color: 'bg-gradient-to-r from-gray-100 to-gray-200 border-gray-500'
  }
];

// Viral Content Templates
const shareableContent = [
  {
    type: 'Payment Success',
    visual: '🪙 Animated coin shower',
    caption: 'Just earned [X] coins at [Merchant]! 🎉',
    cta: 'Download Nuqta & get your free coins',
    bestFor: 'Instagram Story',
    timing: 'Immediately after payment'
  },
  {
    type: 'Milestone Badge',
    visual: '🏆 Badge achievement card',
    caption: 'Level up! Just hit [TIER] on Nuqta! 💪',
    cta: 'Join me and start collecting',
    bestFor: 'Instagram Post',
    timing: 'When tier unlocked'
  },
  {
    type: 'Cashback Redemption',
    visual: '💰 Money animation',
    caption: 'Turned my coins into AED [X]! Free money is real 🤑',
    cta: 'Stop leaving money on the table',
    bestFor: 'Twitter/X',
    timing: 'After redemption'
  },
  {
    type: 'Friend Challenge',
    visual: '🎯 Challenge scoreboard',
    caption: 'Challenge accepted! Who can visit more cafes this week?',
    cta: 'Join my challenge',
    bestFor: 'WhatsApp',
    timing: 'Challenge creation'
  },
  {
    type: 'Gift Coins',
    visual: '🎁 Gift card design',
    caption: 'Gifted you [X] Nuqta coins! Download to claim',
    cta: 'Claim your gift',
    bestFor: 'WhatsApp/iMessage',
    timing: 'Gift sent'
  }
];

// Viral Metrics Calculator
const ViralCalculator = () => {
  const [users, setUsers] = useState(1000);
  const [viralCoeff, setViralCoeff] = useState(0.8);
  const [cycleDays, setCycleDays] = useState(7);
  const [months, setMonths] = useState(6);

  const calculateGrowth = () => {
    const cycles = (months * 30) / cycleDays;
    let totalUsers = users;
    const growth = [];

    for (let i = 0; i <= cycles; i++) {
      growth.push({
        cycle: i,
        users: Math.round(totalUsers),
        day: i * cycleDays
      });
      totalUsers = totalUsers * (1 + viralCoeff);
    }

    return growth;
  };

  const growth = calculateGrowth();
  const finalUsers = growth[growth.length - 1]?.users || users;

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-6 text-white">
      <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
        <Calculator size={24} />
        Viral Growth Calculator
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="text-sm text-indigo-200">Starting Users</label>
          <input
            type="number"
            value={users}
            onChange={(e) => setUsers(Number(e.target.value))}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1 text-white"
          />
        </div>
        <div>
          <label className="text-sm text-indigo-200">Viral Coefficient (K)</label>
          <input
            type="number"
            step="0.1"
            value={viralCoeff}
            onChange={(e) => setViralCoeff(Number(e.target.value))}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1 text-white"
          />
        </div>
        <div>
          <label className="text-sm text-indigo-200">Cycle Length (days)</label>
          <input
            type="number"
            value={cycleDays}
            onChange={(e) => setCycleDays(Number(e.target.value))}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1 text-white"
          />
        </div>
        <div>
          <label className="text-sm text-indigo-200">Time Period (months)</label>
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1 text-white"
          />
        </div>
      </div>

      <div className="bg-white/10 rounded-xl p-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-amber-400">{users.toLocaleString()}</div>
            <div className="text-sm text-indigo-200">Starting Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400">{finalUsers.toLocaleString()}</div>
            <div className="text-sm text-indigo-200">Final Users ({months} months)</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-400">{((finalUsers / users - 1) * 100).toFixed(0)}%</div>
            <div className="text-sm text-indigo-200">Total Growth</div>
          </div>
        </div>

        <div className="mt-4 text-sm text-indigo-200">
          <p>
            {viralCoeff >= 1 ? (
              <span className="text-emerald-400 font-semibold">
                ✅ K ≥ 1: Sustainable viral growth! Each user brings in {viralCoeff} new users.
              </span>
            ) : viralCoeff >= 0.5 ? (
              <span className="text-amber-400 font-semibold">
                ⚠️ K = {viralCoeff}: Amplified growth. Still need paid acquisition but viral helps significantly.
              </span>
            ) : (
              <span className="text-red-400 font-semibold">
                ❌ K = {viralCoeff}: Low virality. Focus on improving share mechanics before scaling.
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

// Network Effect Triggers
const networkEffects = [
  {
    name: 'Merchant Density',
    trigger: '100+ merchants in a neighborhood',
    effect: 'Users can use Nuqta at every store → daily habit',
    status: 'building',
    progress: 45
  },
  {
    name: 'Friend Cluster',
    trigger: '5+ friends using Nuqta',
    effect: 'Social proof + group challenges → 3x engagement',
    status: 'building',
    progress: 30
  },
  {
    name: 'Merchant Competition',
    trigger: 'Competing merchants both on Nuqta',
    effect: 'Each offers better deals to win customers',
    status: 'emerging',
    progress: 20
  },
  {
    name: 'Data Flywheel',
    trigger: '10K+ transactions',
    effect: 'Better recommendations → higher engagement',
    status: 'building',
    progress: 55
  }
];

// Growth Hacks
const growthHacks = [
  {
    category: 'Acquisition',
    hacks: [
      {
        name: 'Receipt Scanner Viral',
        description: 'Users scan any receipt. If merchant not on Nuqta, we reach out. User gets bonus when merchant joins.',
        effort: 'Medium',
        impact: 'High',
        status: 'Proposed'
      },
      {
        name: 'QR Code Table Tents',
        description: 'Free branded table tents for restaurants. Diners scan to collect coins. Each scan = new user attempt.',
        effort: 'Low',
        impact: 'High',
        status: 'Testing'
      },
      {
        name: 'WhatsApp Catalog Integration',
        description: 'Help merchants add Nuqta payment link to their WhatsApp catalogs. Free exposure.',
        effort: 'Medium',
        impact: 'Medium',
        status: 'Proposed'
      }
    ]
  },
  {
    category: 'Activation',
    hacks: [
      {
        name: 'First Transaction Guarantee',
        description: '2x coins on first transaction. Creates immediate dopamine hit and habit formation.',
        effort: 'Low',
        impact: 'High',
        status: 'Live'
      },
      {
        name: 'Merchant Welcome Bonus',
        description: 'Specific merchants offer special bonus for first-time Nuqta users. Creates merchant loyalty.',
        effort: 'Medium',
        impact: 'High',
        status: 'Testing'
      },
      {
        name: 'Quick Start Checklist',
        description: 'Gamified onboarding: Add payment method (+100), First transaction (+500), First share (+200)',
        effort: 'Low',
        impact: 'Medium',
        status: 'Live'
      }
    ]
  },
  {
    category: 'Retention',
    hacks: [
      {
        name: 'Streak Rewards',
        description: 'Use Nuqta 7 days in a row = bonus multiplier. Miss a day = streak resets.',
        effort: 'Low',
        impact: 'High',
        status: 'Proposed'
      },
      {
        name: 'Coin Expiration Warning',
        description: 'Coins expire after 90 days. Push notification 7 days before: "Use it or lose it!"',
        effort: 'Low',
        impact: 'Medium',
        status: 'Proposed'
      },
      {
        name: 'Personal Spending Insights',
        description: 'Monthly "Wrapped" style report: "You saved AED 450 this month!" Shareable.',
        effort: 'Medium',
        impact: 'High',
        status: 'Proposed'
      }
    ]
  },
  {
    category: 'Revenue',
    hacks: [
      {
        name: 'Premium Merchant Boost',
        description: 'Merchants pay to appear higher in "Nearby" list. Performance-based pricing.',
        effort: 'Medium',
        impact: 'High',
        status: 'Proposed'
      },
      {
        name: 'Coin Bundle Sales',
        description: 'Buy AED 100 in coins, get AED 120 value. Upfront revenue + guaranteed transactions.',
        effort: 'Low',
        impact: 'Medium',
        status: 'Testing'
      },
      {
        name: 'Flash Deal Promotion Fee',
        description: 'Merchants pay for featured "Flash Deal" placement. Limited slots = urgency.',
        effort: 'Low',
        impact: 'Medium',
        status: 'Proposed'
      }
    ]
  },
  {
    category: 'Referral',
    hacks: [
      {
        name: 'Referral Leaderboard',
        description: 'Monthly competition: Top referrer gets AED 5,000 in coins. Creates referral culture.',
        effort: 'Low',
        impact: 'High',
        status: 'Proposed'
      },
      {
        name: 'Referral Chain Bonus',
        description: 'When your referral refers someone, you get 10% of their bonus too. MLM-lite.',
        effort: 'Medium',
        impact: 'High',
        status: 'Proposed'
      },
      {
        name: 'Group Referral',
        description: 'Refer 5 friends who all transact = 5x bonus (not 1x per person). Encourages batched invites.',
        effort: 'Medium',
        impact: 'High',
        status: 'Proposed'
      }
    ]
  }
];

// Viral Moments in User Journey
const viralMoments = [
  { stage: 'Onboarding', moment: 'First 500 coins credited', shareOpportunity: 'Share excitement of getting free money', viralScore: 6 },
  { stage: 'First Transaction', moment: 'Coin rain animation', shareOpportunity: 'Show off first win', viralScore: 8 },
  { stage: 'First Redemption', moment: 'Cash back received', shareOpportunity: 'Proof that it works', viralScore: 9 },
  { stage: 'Badge Unlock', moment: 'Achievement earned', shareOpportunity: 'Status flex', viralScore: 7 },
  { stage: 'Group Payment', moment: 'Split bill success', shareOpportunity: 'Friends see value firsthand', viralScore: 10 },
  { stage: 'Big Win', moment: 'Jackpot or bonus', shareOpportunity: 'Luck/celebration moment', viralScore: 9 },
  { stage: 'Milestone', moment: '10K coins reached', shareOpportunity: 'Commitment showcase', viralScore: 7 },
  { stage: 'Gift Given', moment: 'Gift coins sent', shareOpportunity: 'Generous gesture + new user', viralScore: 10 },
];

export default function ViralGrowthPage() {
  const [expandedLoop, setExpandedLoop] = useState<string | null>('payment-share');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] via-purple-900 to-[#0a1628] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
              <Rocket className="text-amber-400" size={18} />
              <span className="text-amber-400 font-medium">Growth Engine</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Viral Growth <span className="text-amber-400">Playbook</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Turn every user into 2+ users. Build viral loops that compound.
              K-factor targeting: 1.2+ for sustainable organic growth.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-amber-400">K = 0.8</div>
                <div className="text-sm text-gray-300">Current Viral Coeff</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-emerald-400">K = 1.2</div>
                <div className="text-sm text-gray-300">Target (6 months)</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-pink-400">6</div>
                <div className="text-sm text-gray-300">Active Viral Loops</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-cyan-400">35%</div>
                <div className="text-sm text-gray-300">Organic Acquisition</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Viral Calculator */}
        <div className="mb-8">
          <ViralCalculator />
        </div>

        {/* Viral Loops */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Repeat className="text-purple-600" />
            Viral Loop Mechanics
          </h2>

          <div className="space-y-4">
            {viralLoops.map((loop) => (
              <div
                key={loop.id}
                className={`border-2 rounded-xl overflow-hidden transition-all ${
                  expandedLoop === loop.id ? 'border-purple-300' : 'border-gray-100'
                }`}
              >
                <button
                  onClick={() => setExpandedLoop(expandedLoop === loop.id ? null : loop.id)}
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${loop.color} flex items-center justify-center`}>
                      <loop.icon className="text-white" size={24} />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-gray-900">{loop.name}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          loop.priority === 'HIGHEST' ? 'bg-red-100 text-red-700' :
                          loop.priority === 'HIGH' ? 'bg-amber-100 text-amber-700' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {loop.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{loop.hook}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <div className="text-lg font-bold text-purple-600">K = {loop.viralCoefficient}</div>
                      <div className="text-xs text-gray-500">Viral Coefficient</div>
                    </div>
                    {expandedLoop === loop.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {expandedLoop === loop.id && (
                  <div className="p-4 bg-gray-50 border-t border-gray-100">
                    <p className="text-gray-600 mb-4">{loop.description}</p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Mechanics</h4>
                        <ul className="space-y-1">
                          {loop.mechanics.map((m, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Trigger:</span>
                          <span className="font-medium">{loop.trigger}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Expected Reach:</span>
                          <span className="font-medium">{loop.expectedReach}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Conversion:</span>
                          <span className="font-medium text-emerald-600">{loop.conversionRate}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {loop.channels.map((ch, i) => (
                            <span key={i} className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                              {ch}
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
        </div>

        {/* Referral Tiers */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Users className="text-emerald-600" />
            Referral Ambassador Program
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Tier</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Requirement</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">You Get</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Friend Gets</th>
                </tr>
              </thead>
              <tbody>
                {referralTiers.map((tier, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${tier.color}`}>
                    <td className="py-3 px-4 font-bold">{tier.tier}</td>
                    <td className="py-3 px-4 text-sm">{tier.requirement}</td>
                    <td className="py-3 px-4 text-emerald-600 font-semibold">{tier.referrerReward}</td>
                    <td className="py-3 px-4 text-purple-600 font-semibold">{tier.refereeReward}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Viral Moments in Journey */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Zap className="text-amber-500" />
            Viral Moments in User Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {viralMoments.map((moment, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                    {moment.stage}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-500">Viral Score:</span>
                    <span className={`font-bold ${
                      moment.viralScore >= 9 ? 'text-emerald-600' :
                      moment.viralScore >= 7 ? 'text-amber-600' :
                      'text-gray-600'
                    }`}>{moment.viralScore}/10</span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{moment.moment}</h4>
                <p className="text-sm text-gray-500">{moment.shareOpportunity}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Hacks */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Rocket className="text-pink-600" />
            Growth Hacks Library
          </h2>

          <div className="space-y-6">
            {growthHacks.map((category) => (
              <div key={category.category}>
                <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${
                    category.category === 'Acquisition' ? 'bg-blue-500' :
                    category.category === 'Activation' ? 'bg-emerald-500' :
                    category.category === 'Retention' ? 'bg-purple-500' :
                    category.category === 'Revenue' ? 'bg-amber-500' :
                    'bg-pink-500'
                  }`} />
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {category.hacks.map((hack, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{hack.name}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          hack.status === 'Live' ? 'bg-emerald-100 text-emerald-700' :
                          hack.status === 'Testing' ? 'bg-amber-100 text-amber-700' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {hack.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{hack.description}</p>
                      <div className="flex gap-2 text-xs">
                        <span className={`px-2 py-0.5 rounded ${
                          hack.effort === 'Low' ? 'bg-emerald-100 text-emerald-700' :
                          hack.effort === 'Medium' ? 'bg-amber-100 text-amber-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {hack.effort} Effort
                        </span>
                        <span className={`px-2 py-0.5 rounded ${
                          hack.impact === 'High' ? 'bg-emerald-100 text-emerald-700' :
                          'bg-amber-100 text-amber-700'
                        }`}>
                          {hack.impact} Impact
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Network Effects */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Network className="text-cyan-600" />
            Network Effect Triggers
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {networkEffects.map((effect, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-gray-900">{effect.name}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    effect.status === 'building' ? 'bg-amber-100 text-amber-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {effect.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-2">
                  <span className="font-medium">Trigger:</span> {effect.trigger}
                </p>
                <p className="text-sm text-emerald-600">
                  <span className="font-medium">Effect:</span> {effect.effect}
                </p>
                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-medium">{effect.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      style={{ width: `${effect.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shareable Content Templates */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Share2 className="text-pink-600" />
            Shareable Content Templates
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Visual</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Caption</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Best For</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Timing</th>
                </tr>
              </thead>
              <tbody>
                {shareableContent.map((content, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{content.type}</td>
                    <td className="py-3 px-4 text-2xl">{content.visual}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{content.caption}</td>
                    <td className="py-3 px-4">
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                        {content.bestFor}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500">{content.timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Implementation Priority */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Target className="text-purple-600" />
            Implementation Priority (Next 90 Days)
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-red-600 mb-3">Week 1-2: Quick Wins</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                  Payment share screen redesign
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                  Referral leaderboard launch
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                  First transaction 2x coins
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-amber-600 mb-3">Month 1: Core Loops</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={14} />
                  Split bill feature launch
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={14} />
                  Gift coins MVP
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={14} />
                  Milestone celebration cards
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-purple-600 mb-3">Month 2-3: Scale</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Clock className="text-gray-400 shrink-0 mt-0.5" size={14} />
                  Challenge friends feature
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="text-gray-400 shrink-0 mt-0.5" size={14} />
                  Merchant pride program
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="text-gray-400 shrink-0 mt-0.5" size={14} />
                  Referral chain bonus
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <GlobalFooter />
    </div>
  );
}
