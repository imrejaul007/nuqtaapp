'use client';

import React, { useState } from 'react';
import {
  DollarSign, TrendingUp, Users, Store, Calculator, Target,
  CheckCircle, AlertCircle, Crown, Zap, Gift, Star, ArrowRight,
  Percent, Coins, ChevronDown, ChevronUp, BarChart3, PieChart,
  Lock, Unlock, Sparkles, Clock, Shield, Heart, Rocket
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Pricing Models
const pricingModels = {
  currentModel: {
    name: 'Transaction Commission',
    rate: '5%',
    description: 'Simple percentage of GMV',
    pros: ['Easy to understand', 'Aligned with merchant success', 'No upfront cost for merchants'],
    cons: ['Revenue tied to transaction volume', 'Merchants may minimize usage', 'No predictable recurring revenue']
  },
  alternatives: [
    {
      name: 'Tiered Commission',
      rates: ['5% (0-50K)', '4% (50K-200K)', '3% (200K+)'],
      fit: 'Rewards high-volume merchants',
      risk: 'Lower revenue from top merchants'
    },
    {
      name: 'Fixed + Commission',
      rates: ['AED 199/mo + 3%'],
      fit: 'Predictable base revenue',
      risk: 'Higher barrier for small merchants'
    },
    {
      name: 'Freemium',
      rates: ['Free (basic) / AED 499/mo (premium)'],
      fit: 'Maximum merchant acquisition',
      risk: 'Most stay free forever'
    }
  ]
};

// Revenue Streams
const revenueStreams = [
  {
    name: 'Transaction Commission',
    current: 75,
    target: 60,
    description: 'Core 5% on all GMV',
    monthlyRevenue: 37500,
    color: 'bg-[#c9a227]'
  },
  {
    name: 'Nuqta+ Subscription',
    current: 10,
    target: 20,
    description: 'AED 39/mo premium user tier',
    monthlyRevenue: 5000,
    color: 'bg-purple-500'
  },
  {
    name: 'Merchant Premium',
    current: 8,
    target: 12,
    description: 'Featured listings, analytics',
    monthlyRevenue: 4000,
    color: 'bg-emerald-500'
  },
  {
    name: 'Expired Coins',
    current: 5,
    target: 5,
    description: 'Unredeemed value after 90 days',
    monthlyRevenue: 2500,
    color: 'bg-amber-500'
  },
  {
    name: 'Data & Insights',
    current: 2,
    target: 3,
    description: 'Market research packages',
    monthlyRevenue: 1000,
    color: 'bg-cyan-500'
  }
];

// Nuqta+ Pricing Tiers
const userSubscriptionTiers = [
  {
    name: 'Free',
    price: 'AED 0',
    features: [
      'Earn 1 coin per AED 1 spent',
      'Basic merchant discovery',
      'Standard cashback (5%)',
      'Coins expire in 90 days'
    ],
    limitations: [
      'No coin multipliers',
      'No exclusive deals',
      'Ads displayed'
    ],
    targetUsers: 'Casual users testing the platform',
    conversionPath: 'After 3rd transaction, show upgrade prompt'
  },
  {
    name: 'Nuqta+',
    price: 'AED 39/mo',
    yearlyPrice: 'AED 349/year (25% off)',
    features: [
      'Earn 2x coins on all purchases',
      'Priority access to flash deals',
      'Exclusive merchant offers',
      'No coin expiration',
      'Ad-free experience',
      'Premium support'
    ],
    limitations: [],
    targetUsers: 'Regular users (4+ transactions/month)',
    valueProposition: 'Pays for itself after AED 780 monthly spend'
  },
  {
    name: 'Nuqta+ Family',
    price: 'AED 79/mo',
    yearlyPrice: 'AED 699/year (26% off)',
    features: [
      'All Nuqta+ benefits',
      'Up to 5 family members',
      'Shared coin pool',
      'Family leaderboard',
      'Group challenges'
    ],
    limitations: [],
    targetUsers: 'Families who shop together',
    valueProposition: 'Best value for households'
  }
];

// Merchant Premium Features
const merchantPremiumFeatures = [
  {
    tier: 'Basic',
    price: 'Free',
    features: [
      'Listed in Nuqta app',
      'Accept Nuqta payments',
      'Basic transaction reports',
      '5% commission rate'
    ],
    bestFor: 'New merchants testing platform'
  },
  {
    tier: 'Growth',
    price: 'AED 199/mo',
    features: [
      'All Basic features',
      'Featured in "Nearby" (priority)',
      'Customer analytics dashboard',
      'Push notification credits (500/mo)',
      'Weekly performance reports',
      '4.5% commission rate'
    ],
    bestFor: 'Growing merchants wanting visibility'
  },
  {
    tier: 'Pro',
    price: 'AED 499/mo',
    features: [
      'All Growth features',
      'Homepage carousel placement',
      'Custom branded campaigns',
      'Unlimited push notifications',
      'API access for POS integration',
      'Dedicated account manager',
      '4% commission rate'
    ],
    bestFor: 'Established merchants maximizing Nuqta'
  }
];

// Pricing Psychology
const pricingPsychology = [
  {
    principle: 'Anchoring',
    application: 'Show AED 39/mo next to calculated savings of AED 100+/mo',
    impact: '+35% conversion'
  },
  {
    principle: 'Loss Aversion',
    application: 'Coins expire in 90 days for free users, never for Nuqta+',
    impact: '+28% upgrade rate'
  },
  {
    principle: 'Decoy Effect',
    application: 'Family plan makes individual plan look like great value',
    impact: '+22% choose Nuqta+'
  },
  {
    principle: 'Free Trial',
    application: '7-day Nuqta+ trial for new signups',
    impact: '+45% trial-to-paid'
  },
  {
    principle: 'Social Proof',
    application: '"23,456 users upgraded this month"',
    impact: '+18% conversion'
  },
  {
    principle: 'Scarcity',
    application: 'Early bird pricing ends soon',
    impact: '+40% urgency'
  }
];

// Revenue Calculator Component
const RevenueCalculator = () => {
  const [inputs, setInputs] = useState({
    activeUsers: 10000,
    avgTransactionValue: 125,
    transactionsPerMonth: 4.2,
    commissionRate: 5,
    nuqtaPlusRate: 8,
    nuqtaPlusPrice: 39,
    merchantCount: 200,
    merchantPremiumRate: 15,
    avgMerchantPremiumFee: 299,
    coinExpirationRate: 5
  });

  const calculate = () => {
    const monthlyGMV = inputs.activeUsers * inputs.avgTransactionValue * inputs.transactionsPerMonth;
    const commissionRevenue = monthlyGMV * (inputs.commissionRate / 100);
    const nuqtaPlusRevenue = inputs.activeUsers * (inputs.nuqtaPlusRate / 100) * inputs.nuqtaPlusPrice;
    const merchantPremiumRevenue = inputs.merchantCount * (inputs.merchantPremiumRate / 100) * inputs.avgMerchantPremiumFee;
    const coinsIssued = monthlyGMV * 0.01; // 1 coin per AED
    const expiredCoinsRevenue = coinsIssued * (inputs.coinExpirationRate / 100) * 0.05; // 5% value

    const totalRevenue = commissionRevenue + nuqtaPlusRevenue + merchantPremiumRevenue + expiredCoinsRevenue;

    return {
      monthlyGMV,
      commissionRevenue,
      nuqtaPlusRevenue,
      merchantPremiumRevenue,
      expiredCoinsRevenue,
      totalRevenue
    };
  };

  const results = calculate();

  return (
    <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2d4a] rounded-2xl p-6 text-white">
      <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
        <Calculator size={24} className="text-[#c9a227]" />
        Revenue Model Calculator
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div>
          <label className="text-sm text-gray-300">Active Users</label>
          <input
            type="number"
            value={inputs.activeUsers}
            onChange={(e) => setInputs({ ...inputs, activeUsers: Number(e.target.value) })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm text-gray-300">Avg Transaction (AED)</label>
          <input
            type="number"
            value={inputs.avgTransactionValue}
            onChange={(e) => setInputs({ ...inputs, avgTransactionValue: Number(e.target.value) })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm text-gray-300">Transactions/Mo</label>
          <input
            type="number"
            step="0.1"
            value={inputs.transactionsPerMonth}
            onChange={(e) => setInputs({ ...inputs, transactionsPerMonth: Number(e.target.value) })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm text-gray-300">Nuqta+ Rate (%)</label>
          <input
            type="number"
            value={inputs.nuqtaPlusRate}
            onChange={(e) => setInputs({ ...inputs, nuqtaPlusRate: Number(e.target.value) })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm text-gray-300">Merchants</label>
          <input
            type="number"
            value={inputs.merchantCount}
            onChange={(e) => setInputs({ ...inputs, merchantCount: Number(e.target.value) })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-white/5 rounded-xl p-4">
        <div className="text-center">
          <div className="text-xl font-bold text-gray-300">AED {(results.monthlyGMV / 1000000).toFixed(2)}M</div>
          <div className="text-xs text-gray-400">Monthly GMV</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-[#c9a227]">AED {results.commissionRevenue.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Commission (5%)</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-purple-400">AED {results.nuqtaPlusRevenue.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Nuqta+ Subs</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-emerald-400">AED {results.merchantPremiumRevenue.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Merchant Premium</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-amber-400">AED {results.expiredCoinsRevenue.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Expired Coins</div>
        </div>
        <div className="text-center bg-white/10 rounded-lg p-2">
          <div className="text-2xl font-bold text-white">AED {results.totalRevenue.toLocaleString()}</div>
          <div className="text-xs text-gray-300">Total Revenue/Mo</div>
        </div>
      </div>
    </div>
  );
};

// Pricing Comparison Table
const PricingComparison = () => {
  const competitors = [
    { name: 'Nuqta', commission: '5%', subscription: 'AED 39/mo', merchantFee: 'Free-499/mo', unique: 'Golden Coins gamification' },
    { name: 'Careem Pay', commission: '2-3%', subscription: 'None', merchantFee: 'Integration fee', unique: 'Ride ecosystem' },
    { name: 'Tabby', commission: '4-6%', subscription: 'None', merchantFee: 'None', unique: 'BNPL focus' },
    { name: 'Entertainer', commission: 'N/A', subscription: 'AED 495/yr', merchantFee: 'Pay for inclusion', unique: '2-for-1 deals' },
    { name: 'Fazaa', commission: 'N/A', subscription: 'Employer-paid', merchantFee: 'Revenue share', unique: 'Corporate perks' }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="text-left py-3 px-4 font-semibold text-gray-600">Platform</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-600">Commission</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-600">User Subscription</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-600">Merchant Fee</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-600">Unique Value</th>
          </tr>
        </thead>
        <tbody>
          {competitors.map((comp, i) => (
            <tr key={i} className={`border-b border-gray-100 ${comp.name === 'Nuqta' ? 'bg-[#c9a227]/10' : 'hover:bg-gray-50'}`}>
              <td className="py-3 px-4 font-medium">{comp.name}</td>
              <td className="py-3 px-4">{comp.commission}</td>
              <td className="py-3 px-4">{comp.subscription}</td>
              <td className="py-3 px-4">{comp.merchantFee}</td>
              <td className="py-3 px-4 text-sm text-gray-600">{comp.unique}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function PricingStrategyPage() {
  const [expandedTier, setExpandedTier] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] via-[#1a2d4a] to-[#0a1628] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
              <DollarSign className="text-[#c9a227]" size={18} />
              <span className="text-[#c9a227] font-medium">Revenue Strategy</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Pricing <span className="text-[#c9a227]">Strategy</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Optimize revenue without sacrificing growth. Multi-stream monetization
              for sustainable unit economics.
            </p>

            {/* Revenue Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-[#c9a227]">5%</div>
                <div className="text-sm text-gray-300">Commission Rate</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-purple-400">AED 39</div>
                <div className="text-sm text-gray-300">Nuqta+ Monthly</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-emerald-400">5</div>
                <div className="text-sm text-gray-300">Revenue Streams</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-pink-400">AED 50K</div>
                <div className="text-sm text-gray-300">Monthly Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Revenue Calculator */}
        <div className="mb-8">
          <RevenueCalculator />
        </div>

        {/* Revenue Streams */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <PieChart className="text-[#c9a227]" />
            Revenue Stream Mix
          </h2>

          <div className="space-y-4">
            {revenueStreams.map((stream, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-24 text-right">
                  <span className="text-sm font-medium text-gray-500">{stream.current}%</span>
                  <ArrowRight className="inline mx-1 text-gray-300" size={12} />
                  <span className="text-sm font-semibold text-emerald-600">{stream.target}%</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900">{stream.name}</span>
                    <span className="text-gray-600">AED {stream.monthlyRevenue.toLocaleString()}/mo</span>
                  </div>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden relative">
                    <div
                      className={`h-full ${stream.color} rounded-full transition-all`}
                      style={{ width: `${stream.current}%` }}
                    />
                    <div
                      className="absolute top-0 h-full border-r-2 border-dashed border-gray-400"
                      style={{ left: `${stream.target}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stream.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
            <div className="flex items-start gap-2">
              <Target className="text-emerald-600 mt-0.5" size={18} />
              <div className="text-sm">
                <span className="font-semibold text-emerald-800">Goal:</span>{' '}
                <span className="text-emerald-700">
                  Shift from 75% transaction-dependent to 60% by growing subscription and premium revenue.
                  More predictable, higher margin revenue mix.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* User Subscription Tiers */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Crown className="text-purple-600" />
            User Subscription Tiers (Nuqta+)
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {userSubscriptionTiers.map((tier, i) => (
              <div
                key={i}
                className={`rounded-xl border-2 p-6 ${
                  tier.name === 'Nuqta+'
                    ? 'border-[#c9a227] bg-[#c9a227]/5 relative'
                    : 'border-gray-200'
                }`}
              >
                {tier.name === 'Nuqta+' && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c9a227] text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <div className="text-center mb-4">
                  <h3 className="font-bold text-xl text-gray-900">{tier.name}</h3>
                  <div className="text-3xl font-bold text-[#c9a227] mt-2">{tier.price}</div>
                  {tier.yearlyPrice && (
                    <div className="text-sm text-gray-500">{tier.yearlyPrice}</div>
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  {tier.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {tier.limitations.length > 0 && (
                  <div className="space-y-2 mb-4 pt-4 border-t border-gray-100">
                    {tier.limitations.map((limit, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <Lock className="shrink-0 mt-0.5" size={14} />
                        <span>{limit}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500">
                    <span className="font-semibold">Target:</span> {tier.targetUsers}
                  </div>
                  {tier.valueProposition && (
                    <div className="text-xs text-emerald-600 mt-1">
                      💡 {tier.valueProposition}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Merchant Premium Features */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Store className="text-emerald-600" />
            Merchant Premium Tiers
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {merchantPremiumFeatures.map((tier, i) => (
              <div
                key={i}
                className={`rounded-xl border-2 p-6 ${
                  tier.tier === 'Growth'
                    ? 'border-emerald-400 bg-emerald-50'
                    : 'border-gray-200'
                }`}
              >
                <div className="text-center mb-4">
                  <h3 className="font-bold text-xl text-gray-900">{tier.tier}</h3>
                  <div className="text-2xl font-bold text-emerald-600 mt-2">{tier.price}</div>
                </div>

                <div className="space-y-2 mb-4">
                  {tier.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100 text-xs text-gray-500">
                  <span className="font-semibold">Best for:</span> {tier.bestFor}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Psychology */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Sparkles className="text-purple-600" />
            Pricing Psychology Tactics
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pricingPsychology.map((tactic, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-purple-100">
                <h4 className="font-bold text-purple-800 mb-2">{tactic.principle}</h4>
                <p className="text-sm text-gray-600 mb-2">{tactic.application}</p>
                <div className="text-xs text-emerald-600 font-semibold">{tactic.impact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Comparison */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BarChart3 className="text-cyan-600" />
            Competitive Pricing Landscape
          </h2>
          <PricingComparison />
        </div>

        {/* Pricing Experiments to Run */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Zap className="text-amber-600" />
            Pricing Experiments Queue
          </h2>

          <div className="space-y-4">
            {[
              {
                name: 'Annual Discount Test',
                hypothesis: '30% annual discount will increase yearly commitments by 40%',
                status: 'proposed',
                priority: 'high'
              },
              {
                name: 'Family Plan Introduction',
                hypothesis: 'AED 79/mo family plan will capture 15% of premium users',
                status: 'proposed',
                priority: 'high'
              },
              {
                name: 'Merchant Tier Pricing',
                hypothesis: 'Tiered commission (5%→4%→3%) will retain high-GMV merchants',
                status: 'proposed',
                priority: 'medium'
              },
              {
                name: 'Free Trial Length',
                hypothesis: '14-day trial converts better than 7-day',
                status: 'running',
                priority: 'high'
              },
              {
                name: 'Price Anchoring in Upgrade Flow',
                hypothesis: 'Showing savings vs. coins lost will increase conversions 25%',
                status: 'proposed',
                priority: 'medium'
              }
            ].map((exp, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-gray-900">{exp.name}</h4>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      exp.status === 'running' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {exp.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{exp.hypothesis}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded font-medium ${
                  exp.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {exp.priority} priority
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Optimization Roadmap */}
        <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2d4a] rounded-2xl p-6 text-white">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Rocket size={24} />
            Pricing Optimization Roadmap
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-4">
              <h3 className="font-bold text-emerald-400 mb-3">Phase 1: Foundation (Now)</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={14} />
                  Lock in 5% commission rate
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={14} />
                  Launch Nuqta+ at AED 39/mo
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={14} />
                  Implement coin expiration (90 days)
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="text-amber-400 shrink-0 mt-0.5" size={14} />
                  Test 7-day vs 14-day trial
                </li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <h3 className="font-bold text-amber-400 mb-3">Phase 2: Expand (Q2)</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Clock className="text-gray-400 shrink-0 mt-0.5" size={14} />
                  Launch merchant premium tiers
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="text-gray-400 shrink-0 mt-0.5" size={14} />
                  Introduce annual pricing
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="text-gray-400 shrink-0 mt-0.5" size={14} />
                  Family plan rollout
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="text-gray-400 shrink-0 mt-0.5" size={14} />
                  Dynamic pricing for premium placements
                </li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <h3 className="font-bold text-purple-400 mb-3">Phase 3: Optimize (Q3+)</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Clock className="text-gray-400 shrink-0 mt-0.5" size={14} />
                  Tiered commission for high GMV
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="text-gray-400 shrink-0 mt-0.5" size={14} />
                  Enterprise/corporate plans
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="text-gray-400 shrink-0 mt-0.5" size={14} />
                  Data monetization products
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="text-gray-400 shrink-0 mt-0.5" size={14} />
                  White-label solutions
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
