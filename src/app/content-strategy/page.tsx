'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import GlobalFooter from '@/components/GlobalFooter';
import {
  ArrowLeft,
  Target,
  TrendingUp,
  Users,
  Calendar,
  DollarSign,
  Heart,
  Repeat,
  Share2,
  MessageCircle,
  Video,
  Image,
  FileText,
  Mic,
  Star,
  Award,
  Zap,
  Clock,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  BarChart3,
  PieChart,
  Activity,
  Megaphone,
  UserPlus,
  Gift,
  Bell,
  Mail,
  Smartphone,
  Instagram,
  Youtube,
  Music2,
  Linkedin,
  Globe,
  Sparkles,
  Lightbulb,
  RefreshCw,
  TrendingDown,
  ArrowUpRight
} from 'lucide-react';

interface StrategyPhase {
  id: string;
  name: string;
  duration: string;
  focus: string;
  kpis: string[];
  channels: string[];
  content: string[];
  budget: string;
}

interface ContentPillar {
  id: string;
  name: string;
  percentage: number;
  description: string;
  examples: string[];
  frequency: string;
  cacImpact: 'high' | 'medium' | 'low';
  retentionImpact: 'high' | 'medium' | 'low';
}

interface RetentionLoop {
  name: string;
  description: string;
  trigger: string;
  action: string;
  reward: string;
  channels: string[];
  frequency: string;
}

const strategyPhases: StrategyPhase[] = [
  {
    id: 'phase-1',
    name: 'Foundation (Month 1-3)',
    duration: '3 months',
    focus: 'Brand Awareness + First 1,000 Users',
    kpis: ['1,000 active users', '50 merchants', '10% D7 retention', 'CAC < AED 50'],
    channels: ['Instagram', 'TikTok', 'WhatsApp', 'Referrals'],
    content: [
      'Launch announcement series',
      'How-to educational content',
      'Merchant spotlight stories',
      'User testimonial videos',
      'Behind-the-scenes content'
    ],
    budget: 'AED 15,000-25,000/month'
  },
  {
    id: 'phase-2',
    name: 'Growth (Month 4-9)',
    duration: '6 months',
    focus: 'Scale to 50,000 Users + Retention Optimization',
    kpis: ['50,000 active users', '1,500 merchants', '30% D30 retention', 'CAC < AED 30'],
    channels: ['Instagram', 'TikTok', 'YouTube', 'Influencers', 'Google Ads'],
    content: [
      'Weekly savings challenges',
      'Influencer collaborations',
      'User success stories',
      'Category deep dives',
      'Seasonal campaigns'
    ],
    budget: 'AED 40,000-60,000/month'
  },
  {
    id: 'phase-3',
    name: 'Maturity (Month 10-18)',
    duration: '9 months',
    focus: 'Market Leadership + 50,000 Users',
    kpis: ['50,000 active users', '1,500 merchants', '35% D90 retention', 'CAC ≤ AED 30 blended'],
    channels: ['All digital', 'TV/Radio', 'Outdoor', 'Events', 'PR'],
    content: [
      'Brand campaigns',
      'Community events',
      'Merchant partnerships',
      'CSR initiatives',
      'Industry thought leadership'
    ],
    budget: 'AED 100,000-150,000/month'
  }
];

const contentPillars: ContentPillar[] = [
  {
    id: 'educational',
    name: 'Educational Content',
    percentage: 30,
    description: 'Teach users how to maximize rewards, save money, and use the app effectively',
    examples: [
      '"5 Ways to Earn 500 Points This Week"',
      '"How to Stack Rewards with Your Credit Card"',
      '"The Ultimate Coffee Loyalty Hack"',
      '"Dubai Dining Guide: Best Value for Points"'
    ],
    frequency: '3-4 posts/week',
    cacImpact: 'high',
    retentionImpact: 'high'
  },
  {
    id: 'social-proof',
    name: 'Social Proof & UGC',
    percentage: 25,
    description: 'Showcase real user wins, testimonials, and community success',
    examples: [
      'User reward celebration posts',
      'Before/after savings journeys',
      'Screenshot shares of big wins',
      'Community member spotlights'
    ],
    frequency: '2-3 posts/week',
    cacImpact: 'high',
    retentionImpact: 'medium'
  },
  {
    id: 'merchant-spotlight',
    name: 'Merchant Spotlights',
    percentage: 20,
    description: 'Feature partner businesses to drive traffic and show value',
    examples: [
      '"Meet Our Merchant: [Coffee Shop]"',
      'New merchant launch announcements',
      'Exclusive deals at featured spots',
      'Behind-the-scenes at partner venues'
    ],
    frequency: '2 posts/week',
    cacImpact: 'medium',
    retentionImpact: 'high'
  },
  {
    id: 'promotional',
    name: 'Promotional & Urgency',
    percentage: 15,
    description: 'Drive immediate action with limited-time offers and flash campaigns',
    examples: [
      '"2X Points This Weekend Only!"',
      '"Flash Sale: 3X at All Cafes Today"',
      '"Last Chance: Summer Points Bonus"',
      '"Weekend Warrior: Visit 5 Spots, Win 500 Points"'
    ],
    frequency: '1-2 posts/week',
    cacImpact: 'high',
    retentionImpact: 'low'
  },
  {
    id: 'entertainment',
    name: 'Entertainment & Lifestyle',
    percentage: 10,
    description: 'Fun, shareable content that builds brand personality',
    examples: [
      'Dubai lifestyle memes',
      'Relatable rewards humor',
      'Trending audio/challenges',
      'Dubai foodie content'
    ],
    frequency: '1-2 posts/week',
    cacImpact: 'medium',
    retentionImpact: 'low'
  }
];

const retentionLoops: RetentionLoop[] = [
  {
    name: 'Welcome Flow (D0-D7)',
    description: 'Onboard new users and drive first transaction',
    trigger: 'User signup',
    action: '7-day drip sequence with tips + incentive',
    reward: '2X points on first purchase + 50 bonus points',
    channels: ['Push', 'Email', 'SMS', 'In-app'],
    frequency: 'Days 0, 1, 3, 5, 7'
  },
  {
    name: 'Weekly Engagement Loop',
    description: 'Drive habitual app usage',
    trigger: 'Every Monday',
    action: 'Weekly summary + personalized recommendations',
    reward: 'Progress toward weekly streak bonus',
    channels: ['Push', 'Email'],
    frequency: 'Weekly'
  },
  {
    name: 'Points Expiry Warning',
    description: 'Prevent point loss and drive redemption',
    trigger: '30, 14, 7, 3 days before expiry',
    action: 'Alert with redemption suggestions',
    reward: 'Bonus for redeeming before expiry',
    channels: ['Push', 'Email', 'SMS'],
    frequency: 'Triggered'
  },
  {
    name: 'Streak Rewards',
    description: 'Build daily/weekly habits',
    trigger: 'Consecutive day visits',
    action: 'Streak counter + milestone celebrations',
    reward: '3-day: 50pts, 7-day: 150pts, 30-day: 500pts',
    channels: ['In-app', 'Push'],
    frequency: 'On milestone'
  },
  {
    name: 'Win-Back Campaign',
    description: 'Re-engage dormant users',
    trigger: '14, 30, 60 days inactive',
    action: 'Personalized "we miss you" with incentive',
    reward: '50-100 bonus points to return',
    channels: ['Email', 'SMS', 'Push'],
    frequency: 'Triggered'
  },
  {
    name: 'Milestone Celebrations',
    description: 'Celebrate achievements and drive loyalty',
    trigger: 'First reward, 10th visit, birthday, anniversary',
    action: 'Celebratory notification with reward',
    reward: 'Bonus points + exclusive badge',
    channels: ['Push', 'Email', 'In-app'],
    frequency: 'On achievement'
  },
  {
    name: 'Referral Program',
    description: 'Turn users into advocates',
    trigger: 'After 3rd transaction',
    action: 'Prompt to share referral link',
    reward: '100 points for referrer + referee',
    channels: ['In-app', 'Email', 'SMS'],
    frequency: 'Ongoing'
  },
  {
    name: 'VIP Tier Upgrades',
    description: 'Reward loyalty with status',
    trigger: 'Points/visit thresholds',
    action: 'Tier upgrade notification + new perks',
    reward: 'Exclusive multipliers, early access, priority support',
    channels: ['Push', 'Email', 'In-app'],
    frequency: 'On upgrade'
  }
];

const channelStrategy = [
  {
    channel: 'Instagram',
    icon: Instagram,
    followers: '0 → 25K (Y1)',
    frequency: '7-10 posts/week',
    formats: ['Reels (60%)', 'Stories (25%)', 'Carousels (15%)'],
    purpose: 'Brand awareness, social proof, lifestyle',
    cac: 'AED 15-25 per acquired user',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500'
  },
  {
    channel: 'TikTok',
    icon: Music2,
    followers: '0 → 50K (Y1)',
    frequency: '5-7 videos/week',
    formats: ['Trends/Challenges (50%)', 'Educational (30%)', 'UGC (20%)'],
    purpose: 'Viral reach, Gen Z acquisition, entertainment',
    cac: 'AED 8-15 per acquired user',
    color: 'bg-gradient-to-r from-slate-900 to-slate-700'
  },
  {
    channel: 'WhatsApp',
    icon: MessageCircle,
    followers: '0 → 10K subscribers (Y1)',
    frequency: '2-3 broadcasts/week',
    formats: ['Flash deals', 'New merchant alerts', 'Personalized tips'],
    purpose: 'High-intent engagement, conversion, retention',
    cac: 'AED 5-10 (organic)',
    color: 'bg-gradient-to-r from-green-500 to-green-600'
  },
  {
    channel: 'YouTube',
    icon: Youtube,
    followers: '0 → 5K (Y1)',
    frequency: '2-4 videos/month',
    formats: ['Explainers', 'Merchant features', 'User stories'],
    purpose: 'SEO, education, long-form trust building',
    cac: 'AED 20-40 (high intent)',
    color: 'bg-gradient-to-r from-red-500 to-red-600'
  },
  {
    channel: 'LinkedIn',
    icon: Linkedin,
    followers: '0 → 3K (Y1)',
    frequency: '3-4 posts/week',
    formats: ['Company updates', 'Industry insights', 'Hiring posts'],
    purpose: 'B2B merchant acquisition, investor relations, talent',
    cac: 'N/A (B2B focused)',
    color: 'bg-gradient-to-r from-blue-600 to-blue-700'
  },
  {
    channel: 'Email',
    icon: Mail,
    followers: '0 → 30K subscribers (Y1)',
    frequency: '2-3 emails/week',
    formats: ['Weekly digest', 'Promos', 'Personalized'],
    purpose: 'Retention, conversion, re-engagement',
    cac: 'AED 2-5 (nurture existing)',
    color: 'bg-gradient-to-r from-amber-500 to-amber-600'
  }
];

const cacStrategies = [
  {
    strategy: 'Referral Program',
    cac: 'AED 5-10',
    volume: 'High',
    quality: 'Very High',
    description: 'Users invite friends, both get 100 points',
    tactics: [
      'In-app referral prompts after 3rd transaction',
      'Gamified referral leaderboard',
      'Double referral bonus during campaigns',
      'WhatsApp share integration'
    ]
  },
  {
    strategy: 'Organic Social',
    cac: 'AED 0-5',
    volume: 'Medium',
    quality: 'High',
    description: 'Content-driven acquisition via social channels',
    tactics: [
      'Viral TikTok challenges',
      'User-generated content campaigns',
      'Trending audio + hashtags',
      'Community engagement'
    ]
  },
  {
    strategy: 'Influencer Marketing',
    cac: 'AED 15-30',
    volume: 'High',
    quality: 'Medium-High',
    description: 'Partner with UAE lifestyle/food influencers',
    tactics: [
      'Nano influencers (5K-20K): AED 500-1,500/post',
      'Micro influencers (20K-100K): AED 2,000-5,000/post',
      'Affiliate codes for tracking',
      'Long-term ambassador program'
    ]
  },
  {
    strategy: 'Merchant Cross-Promo',
    cac: 'AED 3-8',
    volume: 'Medium',
    quality: 'Very High',
    description: 'Merchants promote Nuqta to their customers',
    tactics: [
      'QR standees at checkout',
      'Staff incentives for signups',
      'Receipt/bag inserts',
      'Social media cross-posting'
    ]
  },
  {
    strategy: 'Paid Social (Meta)',
    cac: 'AED 20-40',
    volume: 'High',
    quality: 'Medium',
    description: 'Instagram/Facebook ads for awareness + conversions',
    tactics: [
      'Lookalike audiences from best users',
      'Retargeting website visitors',
      'Interest targeting: Dubai, shopping, dining',
      'Video-first creative strategy'
    ]
  },
  {
    strategy: 'Paid Social (TikTok)',
    cac: 'AED 12-25',
    volume: 'Medium-High',
    quality: 'Medium',
    description: 'TikTok ads for Gen Z/Millennial acquisition',
    tactics: [
      'Spark Ads (boosted UGC)',
      'In-feed video ads',
      'Branded hashtag challenges',
      'Creator marketplace partnerships'
    ]
  },
  {
    strategy: 'Google Ads (Search)',
    cac: 'AED 25-50',
    volume: 'Medium',
    quality: 'Very High',
    description: 'Capture high-intent searchers',
    tactics: [
      'Keywords: "Dubai rewards app", "cashback UAE"',
      'Competitor targeting',
      'App campaigns for installs',
      'Local service ads'
    ]
  },
  {
    strategy: 'PR & Media',
    cac: 'AED 5-15',
    volume: 'Medium',
    quality: 'High',
    description: 'Earned media coverage for credibility',
    tactics: [
      'Launch press release',
      'Founder interviews',
      'Industry thought leadership',
      'Milestone announcements'
    ]
  }
];

export default function ContentStrategyPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['phases', 'pillars']);
  const [activePhase, setActivePhase] = useState('phase-1');

  const toggleSection = (id: string) => {
    setExpandedSections(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const isExpanded = (id: string) => expandedSections.includes(id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
                <span className="text-black font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold text-white">Nuqta</span>
            </Link>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Long-Term Content Strategy</span>
          </div>
          <Link
            href="/marketing-bible"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Marketing Hub</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-full border border-[#c9a227]/30 mb-4">
            <TrendingUp className="text-[#c9a227]" size={16} />
            <span className="text-[#c9a227] text-sm font-medium">18-Month Growth Framework</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Content & Social Media Strategy
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A comprehensive long-term plan to reduce CAC, maximize retention, and build Nuqta into Dubai's leading rewards platform.
          </p>
        </div>

        {/* Key Metrics Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl p-5 border border-green-500/30">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="text-green-400" size={24} />
              <span className="text-slate-400 text-sm">Target CAC</span>
            </div>
            <div className="text-3xl font-bold text-green-400">AED 15</div>
            <div className="text-slate-500 text-xs mt-1">by Month 18</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl p-5 border border-blue-500/30">
            <div className="flex items-center gap-3 mb-2">
              <Users className="text-blue-400" size={24} />
              <span className="text-slate-400 text-sm">Target Users</span>
            </div>
            <div className="text-3xl font-bold text-blue-400">50K</div>
            <div className="text-slate-500 text-xs mt-1">by Month 18</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-5 border border-purple-500/30">
            <div className="flex items-center gap-3 mb-2">
              <Heart className="text-purple-400" size={24} />
              <span className="text-slate-400 text-sm">D90 Retention</span>
            </div>
            <div className="text-3xl font-bold text-purple-400">35%</div>
            <div className="text-slate-500 text-xs mt-1">by Month 18</div>
          </div>
          <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl p-5 border border-amber-500/30">
            <div className="flex items-center gap-3 mb-2">
              <Repeat className="text-amber-400" size={24} />
              <span className="text-slate-400 text-sm">Monthly Active</span>
            </div>
            <div className="text-3xl font-bold text-amber-400">70%</div>
            <div className="text-slate-500 text-xs mt-1">MAU/Total Users</div>
          </div>
        </div>

        {/* Strategic Phases */}
        <div className="mb-12">
          <button
            onClick={() => toggleSection('phases')}
            className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-[#c9a227]/20 to-purple-500/10 rounded-xl border border-[#c9a227]/30 hover:bg-[#c9a227]/30 transition-all mb-4"
          >
            <div className="flex items-center gap-3">
              <Calendar className="text-[#c9a227]" size={24} />
              <h2 className="text-xl font-bold text-white">Strategic Phases (18-Month Roadmap)</h2>
            </div>
            {isExpanded('phases') ? <ChevronDown className="text-[#c9a227]" size={20} /> : <ChevronRight className="text-[#c9a227]" size={20} />}
          </button>

          {isExpanded('phases') && (
            <div className="space-y-4">
              {/* Phase Tabs */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {strategyPhases.map(phase => (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhase(phase.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                      activePhase === phase.id
                        ? 'bg-[#c9a227] text-black'
                        : 'bg-white/5 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    {phase.name}
                  </button>
                ))}
              </div>

              {/* Active Phase Details */}
              {strategyPhases.filter(p => p.id === activePhase).map(phase => (
                <div key={phase.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{phase.name}</h3>
                      <p className="text-[#c9a227] font-medium mb-4">{phase.focus}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Duration</h4>
                        <p className="text-white">{phase.duration}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Budget Range</h4>
                        <p className="text-white">{phase.budget}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Primary Channels</h4>
                        <div className="flex flex-wrap gap-2">
                          {phase.channels.map((ch, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/10 text-slate-300 rounded-full text-sm">
                              {ch}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Key KPIs</h4>
                        <ul className="space-y-2">
                          {phase.kpis.map((kpi, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-white">
                              <Target className="text-[#c9a227]" size={14} />
                              {kpi}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Content Focus</h4>
                        <ul className="space-y-2">
                          {phase.content.map((c, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-slate-300">
                              <CheckCircle className="text-green-400" size={14} />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content Pillars */}
        <div className="mb-12">
          <button
            onClick={() => toggleSection('pillars')}
            className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/10 rounded-xl border border-purple-500/30 hover:bg-purple-500/30 transition-all mb-4"
          >
            <div className="flex items-center gap-3">
              <PieChart className="text-purple-400" size={24} />
              <h2 className="text-xl font-bold text-white">Content Pillars (What We Post)</h2>
            </div>
            {isExpanded('pillars') ? <ChevronDown className="text-purple-400" size={20} /> : <ChevronRight className="text-purple-400" size={20} />}
          </button>

          {isExpanded('pillars') && (
            <div className="space-y-4">
              {contentPillars.map(pillar => (
                <div key={pillar.id} className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-purple-500/30 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Percentage Badge */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-purple-500/20 border border-purple-500/30 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-purple-400">{pillar.percentage}%</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{pillar.name}</h3>
                        <span className="px-2 py-0.5 text-xs bg-white/10 text-slate-400 rounded">{pillar.frequency}</span>
                      </div>
                      <p className="text-slate-400 mb-3">{pillar.description}</p>

                      <div className="mb-3">
                        <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Examples</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {pillar.examples.map((ex, idx) => (
                            <li key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                              <Sparkles className="text-purple-400 flex-shrink-0" size={12} />
                              {ex}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                          <DollarSign size={14} className={pillar.cacImpact === 'high' ? 'text-green-400' : pillar.cacImpact === 'medium' ? 'text-amber-400' : 'text-slate-400'} />
                          <span className="text-xs text-slate-400">CAC Impact: <span className={pillar.cacImpact === 'high' ? 'text-green-400' : pillar.cacImpact === 'medium' ? 'text-amber-400' : 'text-slate-400'}>{pillar.cacImpact}</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart size={14} className={pillar.retentionImpact === 'high' ? 'text-green-400' : pillar.retentionImpact === 'medium' ? 'text-amber-400' : 'text-slate-400'} />
                          <span className="text-xs text-slate-400">Retention: <span className={pillar.retentionImpact === 'high' ? 'text-green-400' : pillar.retentionImpact === 'medium' ? 'text-amber-400' : 'text-slate-400'}>{pillar.retentionImpact}</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Pillar Distribution Visual */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="text-sm font-bold text-slate-400 uppercase mb-4">Content Mix Distribution</h4>
                <div className="h-8 rounded-full overflow-hidden flex">
                  <div className="bg-blue-500 h-full flex items-center justify-center text-xs text-white font-medium" style={{width: '30%'}}>30%</div>
                  <div className="bg-green-500 h-full flex items-center justify-center text-xs text-white font-medium" style={{width: '25%'}}>25%</div>
                  <div className="bg-amber-500 h-full flex items-center justify-center text-xs text-white font-medium" style={{width: '20%'}}>20%</div>
                  <div className="bg-red-500 h-full flex items-center justify-center text-xs text-white font-medium" style={{width: '15%'}}>15%</div>
                  <div className="bg-purple-500 h-full flex items-center justify-center text-xs text-white font-medium" style={{width: '10%'}}>10%</div>
                </div>
                <div className="flex flex-wrap gap-4 mt-3 text-xs">
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-blue-500" /> Educational</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-500" /> Social Proof</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-amber-500" /> Merchant</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-red-500" /> Promo</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-purple-500" /> Entertainment</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Retention Loops */}
        <div className="mb-12">
          <button
            onClick={() => toggleSection('retention')}
            className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-green-500/20 to-teal-500/10 rounded-xl border border-green-500/30 hover:bg-green-500/30 transition-all mb-4"
          >
            <div className="flex items-center gap-3">
              <RefreshCw className="text-green-400" size={24} />
              <h2 className="text-xl font-bold text-white">Retention Loops (How We Keep Users)</h2>
            </div>
            {isExpanded('retention') ? <ChevronDown className="text-green-400" size={20} /> : <ChevronRight className="text-green-400" size={20} />}
          </button>

          {isExpanded('retention') && (
            <div className="grid md:grid-cols-2 gap-4">
              {retentionLoops.map((loop, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-green-500/30 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{loop.name}</h3>
                    <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded">{loop.frequency}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">{loop.description}</p>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Bell className="text-amber-400 flex-shrink-0 mt-1" size={14} />
                      <div>
                        <span className="text-slate-500">Trigger: </span>
                        <span className="text-slate-300">{loop.trigger}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="text-blue-400 flex-shrink-0 mt-1" size={14} />
                      <div>
                        <span className="text-slate-500">Action: </span>
                        <span className="text-slate-300">{loop.action}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Gift className="text-green-400 flex-shrink-0 mt-1" size={14} />
                      <div>
                        <span className="text-slate-500">Reward: </span>
                        <span className="text-slate-300">{loop.reward}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                    {loop.channels.map((ch, chIdx) => (
                      <span key={chIdx} className="px-2 py-0.5 text-xs bg-white/10 text-slate-400 rounded">
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Channel Strategy */}
        <div className="mb-12">
          <button
            onClick={() => toggleSection('channels')}
            className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-xl border border-blue-500/30 hover:bg-blue-500/30 transition-all mb-4"
          >
            <div className="flex items-center gap-3">
              <Globe className="text-blue-400" size={24} />
              <h2 className="text-xl font-bold text-white">Channel Strategy (Where We Post)</h2>
            </div>
            {isExpanded('channels') ? <ChevronDown className="text-blue-400" size={20} /> : <ChevronRight className="text-blue-400" size={20} />}
          </button>

          {isExpanded('channels') && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {channelStrategy.map((channel, idx) => {
                const Icon = channel.icon;
                return (
                  <div key={idx} className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all">
                    <div className={`${channel.color} p-4`}>
                      <div className="flex items-center gap-3">
                        <Icon className="text-white" size={24} />
                        <h3 className="text-lg font-bold text-white">{channel.channel}</h3>
                      </div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Target Y1</span>
                        <span className="text-white font-medium">{channel.followers}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Frequency</span>
                        <span className="text-slate-300">{channel.frequency}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Est. CAC</span>
                        <span className="text-green-400">{channel.cac}</span>
                      </div>
                      <div className="pt-3 border-t border-white/10">
                        <p className="text-xs text-slate-500 mb-2">Formats</p>
                        <div className="flex flex-wrap gap-1">
                          {channel.formats.map((f, fIdx) => (
                            <span key={fIdx} className="px-2 py-0.5 text-xs bg-white/10 text-slate-400 rounded">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 pt-2">{channel.purpose}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* CAC Optimization Strategies */}
        <div className="mb-12">
          <button
            onClick={() => toggleSection('cac')}
            className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-amber-500/20 to-orange-500/10 rounded-xl border border-amber-500/30 hover:bg-amber-500/30 transition-all mb-4"
          >
            <div className="flex items-center gap-3">
              <TrendingDown className="text-amber-400" size={24} />
              <h2 className="text-xl font-bold text-white">CAC Optimization Strategies</h2>
            </div>
            {isExpanded('cac') ? <ChevronDown className="text-amber-400" size={20} /> : <ChevronRight className="text-amber-400" size={20} />}
          </button>

          {isExpanded('cac') && (
            <div className="space-y-4">
              {cacStrategies.map((strat, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-amber-500/30 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{strat.strategy}</h3>
                        <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded font-medium">
                          CAC: {strat.cac}
                        </span>
                      </div>
                      <p className="text-slate-400 mb-3">{strat.description}</p>

                      <div className="grid md:grid-cols-2 gap-2">
                        {strat.tactics.map((t, tIdx) => (
                          <div key={tIdx} className="flex items-center gap-2 text-sm text-slate-300">
                            <CheckCircle className="text-amber-400 flex-shrink-0" size={14} />
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 md:flex-col md:items-end md:text-right">
                      <div>
                        <span className="text-xs text-slate-500">Volume</span>
                        <p className={`text-sm font-medium ${strat.volume === 'High' ? 'text-green-400' : strat.volume === 'Medium-High' ? 'text-blue-400' : 'text-amber-400'}`}>
                          {strat.volume}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs text-slate-500">Quality</span>
                        <p className={`text-sm font-medium ${strat.quality.includes('Very High') ? 'text-green-400' : strat.quality === 'High' ? 'text-blue-400' : 'text-amber-400'}`}>
                          {strat.quality}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* CAC Roadmap */}
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-amber-500/30">
                <h4 className="text-lg font-bold text-white mb-4">CAC Reduction Roadmap</h4>
                <div className="flex items-center justify-between overflow-x-auto pb-2">
                  <div className="text-center px-4">
                    <div className="text-2xl font-bold text-red-400">AED 50</div>
                    <div className="text-xs text-slate-400">Month 1-3</div>
                    <div className="text-xs text-slate-500">Discovery phase</div>
                  </div>
                  <ArrowUpRight className="text-slate-500 flex-shrink-0" size={24} />
                  <div className="text-center px-4">
                    <div className="text-2xl font-bold text-amber-400">AED 30</div>
                    <div className="text-xs text-slate-400">Month 4-9</div>
                    <div className="text-xs text-slate-500">Optimization</div>
                  </div>
                  <ArrowUpRight className="text-slate-500 flex-shrink-0" size={24} />
                  <div className="text-center px-4">
                    <div className="text-2xl font-bold text-green-400">AED 15</div>
                    <div className="text-xs text-slate-400">Month 10-18</div>
                    <div className="text-xs text-slate-500">Viral growth</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Monthly Content Calendar Overview */}
        <div className="mb-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/30">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Calendar className="text-purple-400" size={24} />
            Monthly Content Rhythm
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2">Week 1</h4>
              <p className="text-slate-400 text-sm">New month theme launch, merchant spotlights, educational series start</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2">Week 2</h4>
              <p className="text-slate-400 text-sm">User success stories, mid-month flash promo, UGC campaign</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2">Week 3</h4>
              <p className="text-slate-400 text-sm">Deep-dive content, influencer collabs, community engagement</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2">Week 4</h4>
              <p className="text-slate-400 text-sm">Month recap, end-of-month promo, next month teaser</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4">Related Resources</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Content Calendar', href: '/content-calendar', icon: Calendar },
              { name: 'Email Templates', href: '/email-templates', icon: Mail },
              { name: 'SMS Templates', href: '/sms-templates', icon: Smartphone },
              { name: 'Influencer List', href: '/influencer-list', icon: Users },
              { name: 'PR Launch Plan', href: '/pr-launch', icon: Megaphone },
              { name: 'Marketing Bible', href: '/marketing-bible', icon: FileText },
              { name: 'Merchant Campaigns', href: '/merchant-campaigns', icon: Target },
              { name: 'Launch Readiness', href: '/launch-readiness', icon: CheckCircle }
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-[#c9a227]/30 transition-all"
              >
                <link.icon className="text-[#c9a227]" size={18} />
                <span className="text-white text-sm">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
