'use client';

import React, { useState } from 'react';
import {
  Users,
  Star,
  Gift,
  TrendingUp,
  Target,
  Award,
  Crown,
  Zap,
  Heart,
  MessageSquare,
  Instagram,
  Linkedin,
  Video,
  Camera,
  CheckCircle,
  Clock,
  Calendar,
  DollarSign,
  Coins,
  Share2,
  Megaphone,
  Trophy,
  Sparkles,
  MapPin,
  Building2,
  GraduationCap,
  Briefcase,
  Coffee
} from 'lucide-react';

interface AmbassadorTier {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  minReferrals: number;
  maxReferrals: number | null;
  monthlyBonus: number;
  perReferralBonus: number;
  perks: string[];
  requirements: string[];
}

interface AmbassadorTask {
  id: string;
  category: string;
  task: string;
  frequency: string;
  points: number;
  description: string;
}

interface RecruitmentChannel {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  targetProfile: string;
  tactics: string[];
  expectedYield: string;
}

const ambassadorTiers: AmbassadorTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    icon: Star,
    color: 'text-slate-600',
    bgColor: 'bg-slate-100',
    minReferrals: 0,
    maxReferrals: 4,
    monthlyBonus: 0,
    perReferralBonus: 50,
    perks: [
      '50 points per successful referral',
      'Personal referral link',
      'Ambassador badge in app',
      'Early access to new features',
    ],
    requirements: [
      'Complete profile 100%',
      'Active Nuqta user (5+ transactions)',
      'Follow @nuqtaapp on social media',
    ]
  },
  {
    id: 'bronze',
    name: 'Bronze',
    icon: Award,
    color: 'text-amber-700',
    bgColor: 'bg-amber-100',
    minReferrals: 5,
    maxReferrals: 14,
    monthlyBonus: 100,
    perReferralBonus: 75,
    perks: [
      '75 points per successful referral',
      'Monthly 100 bonus points',
      'Exclusive WhatsApp group access',
      'Priority customer support',
      'Bronze Ambassador certificate',
    ],
    requirements: [
      '5+ successful referrals',
      'Maintain at least 2 referrals/month',
      'Positive community engagement',
    ]
  },
  {
    id: 'silver',
    name: 'Silver',
    icon: Trophy,
    color: 'text-slate-500',
    bgColor: 'bg-slate-200',
    minReferrals: 15,
    maxReferrals: 49,
    monthlyBonus: 300,
    perReferralBonus: 100,
    perks: [
      '100 points per successful referral',
      'Monthly 300 bonus points',
      'Free Nuqta+ subscription',
      'Exclusive merch kit',
      'Feature in Ambassador spotlight',
      'Direct line to marketing team',
    ],
    requirements: [
      '15+ successful referrals',
      'Maintain at least 5 referrals/month',
      '1 social post featuring Nuqta/month',
    ]
  },
  {
    id: 'gold',
    name: 'Gold',
    icon: Crown,
    color: 'text-[#c9a227]',
    bgColor: 'bg-amber-50',
    minReferrals: 50,
    maxReferrals: 99,
    monthlyBonus: 500,
    perReferralBonus: 125,
    perks: [
      '125 points per successful referral',
      'Monthly 500 bonus points',
      'AED 200 monthly cash stipend',
      'VIP event invitations',
      'Co-branded content opportunities',
      'Personal brand partnership manager',
    ],
    requirements: [
      '50+ successful referrals',
      'Maintain at least 10 referrals/month',
      '2 social posts featuring Nuqta/month',
      'Attend 1 Nuqta event per quarter',
    ]
  },
  {
    id: 'platinum',
    name: 'Platinum',
    icon: Sparkles,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    minReferrals: 100,
    maxReferrals: null,
    monthlyBonus: 1000,
    perReferralBonus: 150,
    perks: [
      '150 points per successful referral',
      'Monthly 1,000 bonus points',
      'AED 500 monthly cash stipend',
      'Equity consideration for top performers',
      'Exclusive platinum retreats',
      'Priority for paid campaigns',
      'Official "Nuqta Partner" title',
    ],
    requirements: [
      '100+ successful referrals',
      'Maintain at least 15 referrals/month',
      '4 social posts featuring Nuqta/month',
      'Lead community initiatives',
    ]
  },
];

const ambassadorTasks: AmbassadorTask[] = [
  // Social Media Tasks
  {
    id: 'task-1',
    category: 'Social Media',
    task: 'Share Nuqta story on Instagram',
    frequency: 'Weekly',
    points: 25,
    description: 'Share your Nuqta experience or a merchant visit to your IG stories. Tag @nuqtaapp.'
  },
  {
    id: 'task-2',
    category: 'Social Media',
    task: 'Create a Reel featuring Nuqta',
    frequency: 'Monthly',
    points: 100,
    description: 'Create an engaging Reel showing how you use Nuqta. Include referral link in bio.'
  },
  {
    id: 'task-3',
    category: 'Social Media',
    task: 'Post on LinkedIn about Nuqta',
    frequency: 'Monthly',
    points: 75,
    description: 'Share your experience with Nuqta from a professional/business perspective.'
  },
  {
    id: 'task-4',
    category: 'Social Media',
    task: 'TikTok content creation',
    frequency: 'Weekly',
    points: 50,
    description: 'Create fun, engaging TikToks about earning rewards in Dubai. Use #NuqtaDubai.'
  },
  // Referral Tasks
  {
    id: 'task-5',
    category: 'Referrals',
    task: 'Refer a friend who signs up',
    frequency: 'Per action',
    points: 50,
    description: 'When your referred friend creates an account and completes profile.'
  },
  {
    id: 'task-6',
    category: 'Referrals',
    task: 'Refer a friend who transacts',
    frequency: 'Per action',
    points: 100,
    description: 'When your referred friend makes their first qualifying transaction.'
  },
  {
    id: 'task-7',
    category: 'Referrals',
    task: 'Refer a merchant',
    frequency: 'Per action',
    points: 500,
    description: 'Refer a business that signs up and goes live on Nuqta.'
  },
  // Community Tasks
  {
    id: 'task-8',
    category: 'Community',
    task: 'Welcome new members in WhatsApp',
    frequency: 'Ongoing',
    points: 10,
    description: 'Be an active, helpful presence in the ambassador WhatsApp group.'
  },
  {
    id: 'task-9',
    category: 'Community',
    task: 'Attend Nuqta event',
    frequency: 'Per event',
    points: 200,
    description: 'Participate in Nuqta-organized events, meetups, or activations.'
  },
  {
    id: 'task-10',
    category: 'Community',
    task: 'Represent at mall activation',
    frequency: 'Per event',
    points: 300,
    description: 'Help run a Nuqta booth at a mall or flea market activation.'
  },
  // Feedback Tasks
  {
    id: 'task-11',
    category: 'Feedback',
    task: 'Submit product feedback',
    frequency: 'Monthly',
    points: 25,
    description: 'Share thoughtful feedback on app features or merchant experience.'
  },
  {
    id: 'task-12',
    category: 'Feedback',
    task: 'Beta test new features',
    frequency: 'Per test',
    points: 50,
    description: 'Participate in beta testing and provide detailed bug reports.'
  },
];

const recruitmentChannels: RecruitmentChannel[] = [
  {
    id: 'university',
    name: 'University Students',
    icon: GraduationCap,
    description: 'High energy, social, price-conscious. Perfect for peer-to-peer referrals.',
    targetProfile: 'Ages 18-24, active social media, large friend groups',
    tactics: [
      'Partner with student unions',
      'Campus activation booths',
      'Student influencer recruitment',
      'Study group perks & challenges',
    ],
    expectedYield: '50-100 referrals/ambassador/year'
  },
  {
    id: 'corporate',
    name: 'Corporate Professionals',
    icon: Briefcase,
    description: 'High spending power, professional networks, LinkedIn presence.',
    targetProfile: 'Ages 25-40, office workers, networking events',
    tactics: [
      'LinkedIn outreach',
      'Office lunch & learn sessions',
      'Corporate wellness partnerships',
      'Business networking events',
    ],
    expectedYield: '20-40 high-value referrals/ambassador/year'
  },
  {
    id: 'fitness',
    name: 'Fitness Community',
    icon: Heart,
    description: 'Health-conscious, community-driven, active on social media.',
    targetProfile: 'Gym members, yoga practitioners, runners',
    tactics: [
      'Partner gym ambassador programs',
      'Fitness challenge sponsorships',
      'Health influencer collabs',
      'Sports event activations',
    ],
    expectedYield: '30-60 referrals/ambassador/year'
  },
  {
    id: 'foodie',
    name: 'Food & Lifestyle',
    icon: Coffee,
    description: 'Restaurant hoppers, food bloggers, experience seekers.',
    targetProfile: 'Frequent diners, food photography enthusiasts',
    tactics: [
      'Food blogger recruitment',
      'Restaurant week partnerships',
      'Brunch group activations',
      'Food festival presence',
    ],
    expectedYield: '40-80 referrals/ambassador/year'
  },
  {
    id: 'community',
    name: 'Community Leaders',
    icon: Users,
    description: 'WhatsApp group admins, community organizers, local influencers.',
    targetProfile: 'Active community members, local event organizers',
    tactics: [
      'WhatsApp group partnerships',
      'Community event sponsorships',
      'Neighborhood ambassador model',
      'Local business network leaders',
    ],
    expectedYield: '100-200 referrals/ambassador/year'
  },
  {
    id: 'expat',
    name: 'Expat Networks',
    icon: MapPin,
    description: 'New Dubai residents seeking deals and local knowledge.',
    targetProfile: 'Recently relocated, active in expat groups',
    tactics: [
      'Expat Facebook group outreach',
      'Relocation company partnerships',
      'Welcome package inclusions',
      'Expat meetup sponsorships',
    ],
    expectedYield: '30-50 referrals/ambassador/year'
  },
];

const categoryColors: Record<string, string> = {
  'Social Media': 'bg-pink-100 text-pink-700 border-pink-200',
  'Referrals': 'bg-green-100 text-green-700 border-green-200',
  'Community': 'bg-blue-100 text-blue-700 border-blue-200',
  'Feedback': 'bg-amber-100 text-amber-700 border-amber-200',
};

export default function AmbassadorProgramPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'tiers' | 'tasks' | 'recruitment'>('overview');

  const tabs = [
    { id: 'overview', label: 'Program Overview', icon: Star },
    { id: 'tiers', label: 'Ambassador Tiers', icon: Crown },
    { id: 'tasks', label: 'Tasks & Rewards', icon: Gift },
    { id: 'recruitment', label: 'Recruitment', icon: Users },
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <div className="p-2 sm:p-3 bg-white/20 rounded-xl">
              <Users className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold">Ambassador Program</h1>
          </div>
          <p className="text-base sm:text-xl text-purple-100 max-w-2xl">
            Turn loyal users into brand champions. Structured rewards, clear progression,
            and community-driven growth.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
            <div className="bg-white/20 backdrop-blur rounded-lg px-3 sm:px-4 py-2">
              <span className="text-xl sm:text-2xl font-bold">5</span>
              <span className="text-purple-100 ml-2 text-sm sm:text-base">Tiers</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-3 sm:px-4 py-2">
              <span className="text-xl sm:text-2xl font-bold">12</span>
              <span className="text-purple-100 ml-2 text-sm sm:text-base">Task Types</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-3 sm:px-4 py-2">
              <span className="text-xl sm:text-2xl font-bold">6</span>
              <span className="text-purple-100 ml-2 text-sm sm:text-base">Recruitment Channels</span>
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
                    ? 'bg-purple-600 text-white'
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
            {/* Program Goals */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                <Target className="text-purple-600" size={20} />
                Program Goals
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-purple-50 rounded-xl p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">1,000</div>
                  <div className="text-sm text-gray-600">Active Ambassadors by Q4 2026</div>
                </div>
                <div className="bg-pink-50 rounded-xl p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-600 mb-1">25%</div>
                  <div className="text-sm text-gray-600">User Acquisition via Referrals</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">50</div>
                  <div className="text-sm text-gray-600">Gold+ Ambassadors</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">AED 5</div>
                  <div className="text-sm text-gray-600">Target CAC via Ambassadors</div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                <Zap className="text-purple-600" size={20} />
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Users className="text-purple-600 w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Sign Up</h3>
                  <p className="text-sm text-gray-600">
                    Any active Nuqta user with 5+ transactions can apply to become an ambassador.
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Share2 className="text-pink-600 w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. Share & Engage</h3>
                  <p className="text-sm text-gray-600">
                    Complete tasks, refer friends, create content, and participate in community events.
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Gift className="text-green-600 w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. Earn & Level Up</h3>
                  <p className="text-sm text-gray-600">
                    Earn points, unlock perks, and progress through tiers to access bigger rewards.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Gift size={20} />
                  For Ambassadors
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0" />
                    <span>Earn 50-150 points per successful referral</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0" />
                    <span>Monthly bonus points up to 1,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0" />
                    <span>Cash stipend for top performers (up to AED 500/month)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0" />
                    <span>Exclusive merch, events, and recognition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0" />
                    <span>Equity consideration for Platinum ambassadors</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#0a1628] to-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <TrendingUp size={20} />
                  For Nuqta
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#c9a227] mt-0.5 flex-shrink-0" />
                    <span>Low-cost user acquisition (AED 5-10 CAC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#c9a227] mt-0.5 flex-shrink-0" />
                    <span>Authentic word-of-mouth marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#c9a227] mt-0.5 flex-shrink-0" />
                    <span>Higher quality users (referred users have 40% higher LTV)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#c9a227] mt-0.5 flex-shrink-0" />
                    <span>Organic content creation & UGC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#c9a227] mt-0.5 flex-shrink-0" />
                    <span>Real-time product feedback loop</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Program Timeline */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                <Calendar className="text-purple-600" size={20} />
                Launch Timeline
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-20 sm:w-24 flex-shrink-0">
                    <span className="text-sm font-semibold text-purple-600">Q2 2026</span>
                  </div>
                  <div className="flex-1 pb-4 border-l-2 border-purple-200 pl-4 sm:pl-6">
                    <h4 className="font-medium text-gray-900">Beta Launch</h4>
                    <p className="text-sm text-gray-600">Invite 50 power users as founding ambassadors. Test reward mechanics.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-20 sm:w-24 flex-shrink-0">
                    <span className="text-sm font-semibold text-purple-600">Q3 2026</span>
                  </div>
                  <div className="flex-1 pb-4 border-l-2 border-purple-200 pl-4 sm:pl-6">
                    <h4 className="font-medium text-gray-900">Public Launch</h4>
                    <p className="text-sm text-gray-600">Open applications. Target 250 ambassadors. Launch tier system.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-20 sm:w-24 flex-shrink-0">
                    <span className="text-sm font-semibold text-purple-600">Q4 2026</span>
                  </div>
                  <div className="flex-1 border-l-2 border-purple-200 pl-4 sm:pl-6">
                    <h4 className="font-medium text-gray-900">Scale & Optimize</h4>
                    <p className="text-sm text-gray-600">Reach 1,000 ambassadors. Launch leaderboards. Host ambassador summit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tiers Tab */}
        {activeTab === 'tiers' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Ambassador Tier Structure</h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Progress through tiers by accumulating successful referrals. Higher tiers unlock better rewards and exclusive perks.
              </p>

              {/* Tier Cards */}
              <div className="space-y-4 sm:space-y-6">
                {ambassadorTiers.map((tier, index) => {
                  const Icon = tier.icon;
                  return (
                    <div
                      key={tier.id}
                      className={`rounded-xl border-2 overflow-hidden ${
                        index === ambassadorTiers.length - 1 ? 'border-purple-300 bg-purple-50/50' : 'border-gray-200'
                      }`}
                    >
                      {/* Tier Header */}
                      <div className={`p-4 sm:p-6 ${tier.bgColor}`}>
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 sm:p-3 rounded-xl bg-white/80 ${tier.color}`}>
                              <Icon size={20} className="sm:w-6 sm:h-6" />
                            </div>
                            <div>
                              <h3 className="text-lg sm:text-xl font-bold text-gray-900">{tier.name}</h3>
                              <p className="text-sm text-gray-600">
                                {tier.maxReferrals
                                  ? `${tier.minReferrals}-${tier.maxReferrals} referrals`
                                  : `${tier.minReferrals}+ referrals`}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-3 sm:gap-4">
                            <div className="text-center">
                              <div className={`text-xl sm:text-2xl font-bold ${tier.color}`}>
                                {tier.perReferralBonus}
                              </div>
                              <div className="text-xs text-gray-500">pts/referral</div>
                            </div>
                            {tier.monthlyBonus > 0 && (
                              <div className="text-center">
                                <div className={`text-xl sm:text-2xl font-bold ${tier.color}`}>
                                  +{tier.monthlyBonus}
                                </div>
                                <div className="text-xs text-gray-500">monthly bonus</div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Tier Details */}
                      <div className="p-4 sm:p-6 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                              <Gift size={16} className="text-green-600" />
                              Perks & Rewards
                            </h4>
                            <ul className="space-y-1.5 sm:space-y-2">
                              {tier.perks.map((perk, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                                  <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                                  {perk}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                              <Target size={16} className="text-purple-600" />
                              Requirements
                            </h4>
                            <ul className="space-y-1.5 sm:space-y-2">
                              {tier.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                                  <Clock size={14} className="text-purple-500 mt-0.5 flex-shrink-0" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tier Comparison Table */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 overflow-x-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Comparison</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 font-semibold text-gray-900">Tier</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-900">Referrals</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-900">Per Referral</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-900">Monthly Bonus</th>
                    <th className="text-center py-3 px-2 font-semibold text-gray-900">Cash Stipend</th>
                  </tr>
                </thead>
                <tbody>
                  {ambassadorTiers.map((tier) => (
                    <tr key={tier.id} className="border-b border-gray-100">
                      <td className={`py-3 px-2 font-medium ${tier.color}`}>{tier.name}</td>
                      <td className="text-center py-3 px-2 text-gray-600">
                        {tier.maxReferrals ? `${tier.minReferrals}-${tier.maxReferrals}` : `${tier.minReferrals}+`}
                      </td>
                      <td className="text-center py-3 px-2 text-gray-900 font-medium">{tier.perReferralBonus} pts</td>
                      <td className="text-center py-3 px-2 text-gray-900">{tier.monthlyBonus > 0 ? `${tier.monthlyBonus} pts` : '-'}</td>
                      <td className="text-center py-3 px-2 text-gray-900">
                        {tier.id === 'gold' ? 'AED 200' : tier.id === 'platinum' ? 'AED 500' : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tasks Tab */}
        {activeTab === 'tasks' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Tasks & Point System</h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Ambassadors earn points by completing various tasks. Points contribute to rewards and tier progression.
              </p>

              {/* Task Categories */}
              {['Social Media', 'Referrals', 'Community', 'Feedback'].map((category) => {
                const categoryTasks = ambassadorTasks.filter(t => t.category === category);
                return (
                  <div key={category} className="mb-6 sm:mb-8 last:mb-0">
                    <h3 className={`font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2`}>
                      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border ${categoryColors[category]}`}>
                        {category}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500">({categoryTasks.length} tasks)</span>
                    </h3>
                    <div className="space-y-3">
                      {categoryTasks.map((task) => (
                        <div
                          key={task.id}
                          className="flex items-start justify-between gap-4 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 text-sm sm:text-base">{task.task}</h4>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">{task.description}</p>
                            <span className="text-xs text-gray-500 mt-1 inline-block">{task.frequency}</span>
                          </div>
                          <div className="flex-shrink-0 text-right">
                            <div className="text-lg sm:text-xl font-bold text-purple-600">+{task.points}</div>
                            <div className="text-xs text-gray-500">points</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Point Earning Tips */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Sparkles size={20} />
                Pro Tips for Earning Points
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                <div className="bg-white/10 rounded-lg p-3 sm:p-4">
                  <h4 className="font-semibold mb-2">Quality Over Quantity</h4>
                  <p className="text-purple-100">Referrals who transact are worth 2x signups. Focus on engaged friends.</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 sm:p-4">
                  <h4 className="font-semibold mb-2">Consistent Content</h4>
                  <p className="text-purple-100">Weekly stories + monthly Reels = steady point flow without burnout.</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 sm:p-4">
                  <h4 className="font-semibold mb-2">Event Attendance</h4>
                  <p className="text-purple-100">Mall activations pay 300 pts + networking with other ambassadors.</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 sm:p-4">
                  <h4 className="font-semibold mb-2">Merchant Referrals</h4>
                  <p className="text-purple-100">Highest value task at 500 pts. Know a business owner? Huge opportunity.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recruitment Tab */}
        {activeTab === 'recruitment' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Ambassador Recruitment Strategy</h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Target specific communities and profiles to build a diverse, high-performing ambassador network.
              </p>

              {/* Recruitment Channels */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {recruitmentChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <div
                      key={channel.id}
                      className="border border-gray-200 rounded-xl p-4 sm:p-5 hover:border-purple-300 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-3 mb-3 sm:mb-4">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Icon className="text-purple-600" size={18} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{channel.name}</h3>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1">{channel.description}</p>
                        </div>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="text-xs font-semibold text-gray-500 uppercase">Target Profile</span>
                          <p className="text-gray-700 mt-1">{channel.targetProfile}</p>
                        </div>

                        <div>
                          <span className="text-xs font-semibold text-gray-500 uppercase">Tactics</span>
                          <ul className="mt-1 space-y-1">
                            {channel.tactics.map((tactic, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-700">
                                <CheckCircle size={12} className="text-green-500 mt-1 flex-shrink-0" />
                                {tactic}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-2 border-t border-gray-100">
                          <span className="text-xs font-semibold text-gray-500">Expected Yield: </span>
                          <span className="text-purple-600 font-medium">{channel.expectedYield}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Outreach Templates */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MessageSquare size={20} className="text-purple-600" />
                Outreach Templates
              </h3>

              <div className="space-y-4">
                {/* DM Template */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Instagram size={16} className="text-pink-600" />
                    Instagram DM (Active User)
                  </h4>
                  <div className="bg-white rounded-lg p-3 text-sm text-gray-700 border border-gray-200">
                    Hey [Name]! 👋<br/><br/>
                    I noticed you&apos;re active on Nuqta - thanks for being part of the community! 🙌<br/><br/>
                    We&apos;re launching an Ambassador Program and I think you&apos;d be perfect for it. You&apos;d get:<br/>
                    • 50-150 pts per friend you refer<br/>
                    • Exclusive merch & events<br/>
                    • Cash rewards for top performers<br/><br/>
                    Interested? Reply &quot;YES&quot; and I&apos;ll send the details! 🚀
                  </div>
                </div>

                {/* WhatsApp Template */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <MessageSquare size={16} className="text-green-600" />
                    WhatsApp (Community Leader)
                  </h4>
                  <div className="bg-white rounded-lg p-3 text-sm text-gray-700 border border-gray-200">
                    Hi [Name],<br/><br/>
                    I&apos;m reaching out from Nuqta, Dubai&apos;s rewards app. We&apos;re building an ambassador program and looking for community leaders like yourself.<br/><br/>
                    As a [community] admin, your members would love earning rewards at 500+ Dubai spots. We&apos;d love to partner with you:<br/><br/>
                    ✅ 100 pts for every member who joins via your link<br/>
                    ✅ Exclusive perks for your community<br/>
                    ✅ Monthly bonus for top ambassadors<br/><br/>
                    Would you be open to a quick call this week?
                  </div>
                </div>

                {/* LinkedIn Template */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Linkedin size={16} className="text-blue-600" />
                    LinkedIn (Professional)
                  </h4>
                  <div className="bg-white rounded-lg p-3 text-sm text-gray-700 border border-gray-200">
                    Hi [Name],<br/><br/>
                    I came across your profile and thought you&apos;d be a great fit for Nuqta&apos;s new Ambassador Program.<br/><br/>
                    We&apos;re looking for professionals who can help spread the word about earning rewards across Dubai. Benefits include:<br/><br/>
                    • Points redeemable at 500+ merchants<br/>
                    • Cash stipends for top performers<br/>
                    • Networking opportunities with other ambassadors<br/><br/>
                    Happy to share more details if you&apos;re interested. Would love to connect!
                  </div>
                </div>
              </div>
            </div>

            {/* Recruitment Goals */}
            <div className="bg-gradient-to-r from-[#0a1628] to-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Target size={20} className="text-[#c9a227]" />
                Quarterly Recruitment Goals
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">50</div>
                  <div className="text-sm text-slate-300">Q2 2026</div>
                  <div className="text-xs text-slate-400">Beta Launch</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">250</div>
                  <div className="text-sm text-slate-300">Q3 2026</div>
                  <div className="text-xs text-slate-400">Public Launch</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">500</div>
                  <div className="text-sm text-slate-300">Q4 2026</div>
                  <div className="text-xs text-slate-400">Scale Phase</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">1,000</div>
                  <div className="text-sm text-slate-300">Q1 2027</div>
                  <div className="text-xs text-slate-400">Target</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Launch the Program?</h2>
          <p className="text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Start with 50 founding ambassadors, test the mechanics, and scale to 1,000+ by year-end.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <div className="bg-white text-purple-700 px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors cursor-pointer text-sm sm:text-base">
              Create Ambassador Portal
            </div>
            <div className="bg-white/20 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors cursor-pointer text-sm sm:text-base">
              Draft Beta Invites
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
