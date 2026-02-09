'use client';

import React, { useState } from 'react';
import {
  Rocket, Target, Zap, Users, Store, TrendingUp, DollarSign,
  CheckCircle, AlertCircle, Clock, Calendar, Megaphone, Gift,
  Shield, BarChart3, Mail, MessageSquare, Phone, Camera,
  QrCode, Map, Trophy, Star, Share2, Sparkles, Play, Pause,
  ChevronDown, ChevronUp, Copy, ExternalLink, FileText, Video,
  Instagram, Send, UserPlus, Briefcase, CreditCard, Lock,
  Eye, Bell, RefreshCw, Flame, Crown, Heart, Coffee, Smartphone
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Campaign Analysis Data
const competitorCampaigns = [
  {
    name: 'Honey Browser Extension',
    thesis: 'Frictionless value at checkout moment creates habit + word-of-mouth',
    mechanics: 'Browser extension auto-applies coupons → instant savings displayed → share prompt',
    viralityLever: 'Utility + Social proof ("I saved $42!")',
    incentiveStructure: 'Platform-funded, merchant commission on conversions',
    channels: ['YouTube influencers', 'Word of mouth', 'Browser store'],
    cpa: '$2-5 per install',
    successMetrics: '17M+ users, acquired by PayPal for $4B',
    failureModes: 'Merchant pushback on margin erosion',
    nuqtaReplication: 'Build "savings counter" that users screenshot/share'
  },
  {
    name: 'Rakuten Cashback',
    thesis: 'Delayed gratification with quarterly "Big Fat Check" creates anticipation and loyalty',
    mechanics: 'Shop via app → earn % back → receive quarterly check',
    viralityLever: 'Status (posting check photos) + Reward anticipation',
    incentiveStructure: 'Commission split with merchants (avg 5-15%)',
    channels: ['Referral ($30 bonus)', 'TV ads', 'Email remarketing'],
    cpa: '$15-25 per activated user',
    successMetrics: '$1B+ cashback paid annually',
    failureModes: 'Users forget to use portal; merchant churn',
    nuqtaReplication: 'Monthly "Coin Statement" with shareable summary'
  },
  {
    name: 'Dropbox Early Referral',
    thesis: 'Scarcity + Two-sided reward drives exponential sharing',
    mechanics: 'Invite friend → both get 500MB → visible storage meter',
    viralityLever: 'Scarcity (limited storage) + Mutual benefit',
    incentiveStructure: 'Product-funded (storage costs near zero)',
    channels: ['Email invites', 'Social sharing', 'Onboarding flow'],
    cpa: 'Near $0 (organic viral)',
    successMetrics: '3900% growth in 15 months',
    failureModes: 'Reward ceiling hit; diminishing returns',
    nuqtaReplication: 'Tiered referral: 500 coins → 750 → 1000 for streaks'
  },
  {
    name: 'WeChat Pay QR Virality',
    thesis: 'Ubiquitous QR makes payment social and visible',
    mechanics: 'Scan QR → Pay → Lucky money sharing feature',
    viralityLever: 'Social utility + Cultural fit (red envelope tradition)',
    incentiveStructure: 'Platform subsidized merchant fees initially',
    channels: ['Merchant QR displays', 'P2P sharing', 'Mini-programs'],
    cpa: 'Subsidized onboarding',
    successMetrics: '900M+ users, dominant payment method',
    failureModes: 'Required massive merchant network first',
    nuqtaReplication: 'Gift coins feature + prominent merchant QR'
  },
  {
    name: 'Gymshark UGC',
    thesis: 'Turn customers into content creators with aspirational identity',
    mechanics: 'Buy product → Post transformation → Get featured',
    viralityLever: 'Status/Identity + Community belonging',
    incentiveStructure: 'Social currency (features, reposts)',
    channels: ['Instagram', 'TikTok', 'YouTube'],
    cpa: '$0 for UGC; paid for seeding',
    successMetrics: '$500M+ revenue from community-driven brand',
    failureModes: 'Quality control; brand dilution',
    nuqtaReplication: '"Nuqta Finds" UGC campaign with weekly features'
  },
  {
    name: 'Tabby BNPL Influencers',
    thesis: 'Normalize behavior through trusted voices showing real purchases',
    mechanics: 'Influencer uses Tabby → Shows checkout → Followers convert',
    viralityLever: 'Social proof + Trust transfer',
    incentiveStructure: 'Paid influencer fees + affiliate commission',
    channels: ['Instagram', 'TikTok', 'YouTube'],
    cpa: '$8-15 per install (UAE market)',
    successMetrics: 'Market leader in UAE BNPL',
    failureModes: 'Influencer fatigue; authenticity questions',
    nuqtaReplication: 'Micro-influencer program with performance bonuses'
  },
  {
    name: 'Zomato Hyperlocal',
    thesis: 'Geo-targeted offers create urgency and local network effects',
    mechanics: 'Push notification → "50% off at [nearby restaurant]" → Limited time',
    viralityLever: 'Urgency + Local relevance',
    incentiveStructure: 'Merchant-funded promos',
    channels: ['Push notifications', 'Geo-ads', 'SMS'],
    cpa: '$3-8 per order',
    successMetrics: 'Dominant food delivery in India/UAE',
    failureModes: 'Discount dependency; margin pressure',
    nuqtaReplication: 'Hyper-local "Lunch Lock" around merchant clusters'
  },
  {
    name: 'Credit Karma Weekly Check',
    thesis: 'Create habit through valuable free service with engagement hooks',
    mechanics: 'Free credit score → Weekly email updates → Product recommendations',
    viralityLever: 'Utility (free valuable service) + Anxiety reduction',
    incentiveStructure: 'Affiliate revenue from financial products',
    channels: ['Email', 'Push', 'Social proof'],
    cpa: '$15-30 per engaged user',
    successMetrics: '100M+ users, acquired by Intuit for $7.1B',
    failureModes: 'User anxiety fatigue; product matching quality',
    nuqtaReplication: 'Weekly "Savings Report" with merchant recommendations'
  }
];

// 6 Battle-Tested Campaigns
const userCampaigns = [
  {
    id: 'U1',
    name: 'Lunch Lock',
    category: 'Habit + Local Density',
    thesis: 'Force daily habit at lunch by giving frictionless instant savings & social sharing prompts at checkout.',
    color: 'from-orange-500 to-amber-500',
    icon: Coffee,
    funnel: [
      'Merchant QR prominently displayed at counter',
      'User scans → app opens to merchant page',
      'Shows best pay option + instant 5% cashback',
      'After payment: "Share this lunch and earn +5% Nuqta coin"',
      'One-tap share to Instagram/WhatsApp with prefilled caption',
      'Reward credited after share confirmation',
      'Shared link gives friend AED 5 on first transaction'
    ],
    creativeHook: 'Save AED 12 on lunch — and pick up free dessert if you share.',
    channels: ['Merchant QR', 'Geo-targeted IG ads', 'Student ambassadors', 'WhatsApp groups'],
    kpis: [
      { metric: 'Activation Rate', target: '≥40%' },
      { metric: 'D7 Retention', target: '≥30%' },
      { metric: 'CAC via QR', target: '≤AED 15' }
    ],
    fraudControls: [
      'Limit share rewards: max 3/day/user',
      'Require subsequent transaction to unlock full bonus',
      'Behavioral analysis on high-frequency shares'
    ],
    budget: 'AED 15-25K',
    abTests: [
      '5% vs 10% share reward',
      'Prefilled caption vs blank',
      'Instant coin vs delayed coin'
    ]
  },
  {
    id: 'U2',
    name: '3-Store Streak',
    category: 'Local Discovery + Gamification',
    thesis: 'Encourage habit by rewarding multi-merchant visits with escalating rewards.',
    color: 'from-purple-500 to-indigo-500',
    icon: Map,
    funnel: [
      'User receives challenge notification',
      'Challenge: visit 3 partnered merchants in 7 days',
      'Merchant app shows "Challenge accepted" badge',
      'Each visit logged with geofence + receipt',
      'Social feed shows streak updates for friends',
      'Complete = 100 Nuqta coins + 10% off next visit'
    ],
    creativeHook: 'Complete the 3-Store Streak and unlock 100 coins. Your friends are watching.',
    channels: ['Campus ambassadors', 'Mall events', 'Push notifications', 'SMS'],
    kpis: [
      { metric: 'Repeat visits/user', target: '+40%' },
      { metric: 'Social shares/completion', target: '>1' },
      { metric: 'Challenge completion rate', target: '≥35%' }
    ],
    fraudControls: [
      'Geofencing verification',
      'Receipt photo upload',
      'Merchant confirmation tap'
    ],
    budget: 'AED 20K',
    abTests: [
      '3 stores vs 5 stores',
      '7-day window vs 14-day',
      'Coins reward vs discount reward'
    ]
  },
  {
    id: 'U3',
    name: 'Nuqta Cash Hunter',
    category: 'UGC + Video Virality',
    thesis: 'Create high-velocity UGC loop — users post receipts/videos to claim retroactive cashback and win prizes.',
    color: 'from-pink-500 to-rose-500',
    icon: Camera,
    funnel: [
      'User makes purchase at partner merchant',
      'Prompted: "Upload 15s video to earn extra 5%"',
      'Video shows purchase + tags @NuqtaUAE #NuqtaFinds',
      'Earns 5% base + entry into weekly AED 1,000 pool',
      'Best UGC promoted by Nuqta social channels',
      'Creators tagged and given branded badges'
    ],
    creativeHook: 'Show us your Nuqta haul! Post a 15s clip to win AED 500 this week.',
    channels: ['TikTok', 'Instagram Reels', 'WhatsApp viral seeding', 'Student ambassadors'],
    kpis: [
      { metric: 'UGC submissions/week', target: '≥50' },
      { metric: 'Organic installs from UGC', target: '≥200/week' },
      { metric: 'CAC drop over time', target: '-20% MoM' }
    ],
    fraudControls: [
      'Sample-based manual moderation',
      'ML false positive detection',
      'Cap on eligibility per user (3/week)'
    ],
    budget: 'AED 30K',
    abTests: [
      'Video vs photo only',
      'Reward vs no reward for UGC',
      'Weekly pool vs monthly mega prize'
    ]
  }
];

const merchantCampaigns = [
  {
    id: 'M1',
    name: 'Event Blitz',
    category: 'High-touch, High-conversion',
    thesis: 'Acquire 30-100 merchants in a weekend by capturing event vendors at one location.',
    color: 'from-emerald-500 to-teal-500',
    icon: Flame,
    funnel: [
      'Book space at Global Village / Expo weekend',
      'On-site pitch: 10-minute sign-up demo',
      'Instant QR generation + staff training',
      '7-day boosted placement in app',
      'Reduced commission for 30-day trial',
      'Marketing boost to users in area'
    ],
    creativeHook: 'Join 500+ merchants already growing with Nuqta. 10-minute setup, zero upfront cost.',
    channels: ['Door-to-door at events', 'Shared organizer portal', 'Event social media'],
    kpis: [
      { metric: 'Sign rate', target: '≥60% of approached' },
      { metric: 'First 7-day transactions', target: '≥10/merchant' },
      { metric: 'Permanent conversion', target: '≥30%' }
    ],
    fraudControls: [
      'KYC verification',
      'Business registration check',
      'Staff training verification'
    ],
    budget: 'AED 50-100K',
    abTests: [
      'Trial 0% for 7 days vs 10% for 30 days',
      'Instant QR vs mail QR kit',
      'Training video vs in-person'
    ]
  },
  {
    id: 'M2',
    name: 'Marketing Co-Create',
    category: 'Shared-cost Content',
    thesis: 'Convert merchants by offering professional content at split cost, featured in Nuqta discovery.',
    color: 'from-blue-500 to-cyan-500',
    icon: Video,
    funnel: [
      'Offer content package at AED 2,000/month',
      'Merchant pays AED 2,000, Nuqta covers remaining',
      'Bundle: 15 posts (photos + videos + captions)',
      'Content appears on merchant page + Nuqta feed',
      'Featured in in-app discovery + push campaigns',
      'Monthly performance report delivered'
    ],
    creativeHook: 'Get professional content for half the price — and get discovered by 10,000+ users.',
    channels: ['Merchant BD calls', 'LinkedIn for brand pitch', 'WhatsApp onboarding'],
    kpis: [
      { metric: 'Conversion to Growth package', target: '≥30% after 60 days' },
      { metric: 'Monthly GMV uplift', target: '+25%' },
      { metric: 'Content engagement', target: '≥5% CTR' }
    ],
    fraudControls: [
      'Deliverables checklist',
      'Tie content to merchant account',
      'Quality approval process'
    ],
    budget: 'AED 60K (subsidize 20 merchants)',
    abTests: [
      'Full sponsorship vs cost-share',
      '15 posts vs 10 posts',
      'Video-heavy vs photo-heavy'
    ]
  },
  {
    id: 'M3',
    name: 'Merchant Referral Network',
    category: 'Merchant-driven Virality',
    thesis: 'Leverage merchant networks: rewards for referring merchants who achieve GMV targets.',
    color: 'from-amber-500 to-yellow-500',
    icon: Users,
    funnel: [
      'Merchant A refers Merchant B via dashboard',
      'Merchant B onboards and activates',
      'Merchant B achieves AED X GMV in 30 days',
      'Merchant A gets AED Y marketing credit',
      'Plus: Brand Coin allotment for promotions',
      'Referral forms embedded in merchant dashboard'
    ],
    creativeHook: 'Know a business owner? Refer them and earn AED 500 marketing credit when they hit targets.',
    channels: ['Merchant newsletters', 'Dashboard CTA', 'BD outreach'],
    kpis: [
      { metric: 'Referrals/month', target: '≥20' },
      { metric: 'Conversion to active', target: '≥40%' },
      { metric: 'Cost per merchant', target: '≤AED 80' }
    ],
    fraudControls: [
      'KYC + GMV verification',
      'Anti-self-referral rules',
      'Waiting period for payout'
    ],
    budget: 'Variable (% of revenue uplift)',
    abTests: [
      'Credit amount vs coin reward',
      'Flat bonus vs tiered bonus',
      'Immediate vs 30-day delayed'
    ]
  }
];

// Message Templates
const messageTemplates = {
  userOnboarding: [
    {
      day: 'Day 0',
      channel: 'Push',
      message: 'Welcome to Nuqta — you\'ve got AED 10 waiting. Find a coffee nearby and save now. ☕'
    },
    {
      day: 'Day 0',
      channel: 'Email',
      subject: 'Your Nuqta journey starts here',
      message: 'Here\'s your 3-step guide to start saving: 1) Add payment method 2) Find nearby merchant 3) Scan & save. Your first AED 10 is ready!'
    },
    {
      day: 'Day 2',
      channel: 'Push',
      message: 'Your first transaction is 1 tap away — scan this QR at [merchant nearby] to earn 5%. 🪙'
    },
    {
      day: 'Post-transaction',
      channel: 'Push',
      message: 'Nice save! Share to earn an extra 5% — tap once to post. 📱'
    },
    {
      day: 'Day 7',
      channel: 'Email',
      subject: 'You saved AED X last week!',
      message: 'Here\'s your weekly savings report. Plus: [Merchant] near you has a special offer waiting...'
    }
  ],
  merchantInvite: {
    subject: 'Make customers come back — 10-minute setup, zero upfront cost',
    body: 'Hi [Name], we help cafés & salons increase repeat visits by 20–40% without paying ads up front. Sign up on-site in 10 minutes, we give you QR + staff training, you only pay after transactions. Can I book 10 minutes this week?',
    pitch30sec: 'We get you repeat customers with zero upfront cost. Sign up in 10 minutes, show QR at checkout, get paid after sales. Try a 30-day trial and we\'ll run a boosted promotion on the Nuqta app.'
  },
  ambassador: {
    brief: 'Get paid AED 500 + AED 10 per activated friend',
    taskSheet: '10 installs + 3 first transactions required per week',
    script: 'Hi! I\'m [Name], Nuqta campus ambassador. Download Nuqta and use code AMB25 to get AED 10 when you make your first purchase at [Merchant]. I\'ll be at [location] today — come get your bonus!'
  },
  ugcPrompt: 'Show us your Nuqta haul! Post a 15s clip of your purchase and tag @NuqtaUAE with #NuqtaFinds to win AED 500 this week. 🎬'
};

// Budget Allocation
const budgetAllocation = [
  { category: 'Events & Merchant BD', amount: 60000, percentage: 28, description: 'On-site operations, booth fees' },
  { category: 'Creative Production & UGC', amount: 40000, percentage: 19, description: 'Video, graphics, prize pool' },
  { category: 'Initial Ads (Gated)', amount: 30000, percentage: 14, description: 'IG/TikTok seeding near clusters' },
  { category: 'Ambassador Payouts', amount: 20000, percentage: 9, description: 'Student hires + incentives' },
  { category: 'Merchant Content Subsidy', amount: 60000, percentage: 28, description: 'Co-create program (reimbursable)' },
  { category: 'Materials & Printing', amount: 5000, percentage: 2, description: 'Stickers, QR, posters' }
];

// Team Structure
const teamStructure = [
  { role: 'Head of Growth', count: 1, responsibilities: 'Strategy owner, metrics, reporting' },
  { role: 'Performance Lead', count: 1, responsibilities: 'Ads, analytics, A/B tests' },
  { role: 'Creative Director', count: 1, responsibilities: 'Video, UGC ops, brand' },
  { role: 'BD Reps', count: 3, responsibilities: 'Field merchant acquisition' },
  { role: 'Ambassadors', count: 5, responsibilities: 'Campus user acquisition' },
  { role: 'Merchant Success', count: 1, responsibilities: 'Onboarding, retention, support' }
];

// Dashboard Metrics
const dashboardMetrics = {
  daily: [
    { metric: 'Installs/day', threshold: 'Track trend' },
    { metric: 'Activation rate', threshold: 'First transaction ≤7 days' },
    { metric: 'D1/D7/D30 retention', threshold: 'Cohort columns' },
    { metric: 'CAC by channel', threshold: 'QR, ambassador, ads' },
    { metric: 'GMV daily + AOV', threshold: 'By category' },
    { metric: 'Merchants onboarded/active/churned', threshold: 'Daily delta' },
    { metric: 'Fraud flags', threshold: 'Suspicious share rates' }
  ],
  weekly: [
    { metric: 'MAU/DAU ratio', threshold: 'Stickiness indicator' },
    { metric: 'Payback days', threshold: 'CAC → contribution margin' },
    { metric: '% merchants >10 trans/month', threshold: 'Health indicator' },
    { metric: 'Social referral %', threshold: 'Via share links' }
  ],
  alerts: [
    { trigger: 'CAC > AED 45', action: 'Pause ad spends' },
    { trigger: 'D7 < 25%', action: 'Freeze ambassador promos & iterate onboarding' },
    { trigger: 'Fraud rate > 3%', action: 'Manual review + tighten limits' }
  ]
};

// Fraud Controls
const fraudControls = [
  { control: 'KYC-lite for merchants', description: 'Registered company or trading license required' },
  { control: 'Device fingerprinting', description: 'IP heuristics for high-reward users' },
  { control: 'Rate limits', description: 'Max N share-rewards/day/user' },
  { control: 'Share verification', description: 'Manual review for first 1K users; later automated' },
  { control: 'Merchant staff ID', description: 'First 30 days verification' },
  { control: 'Escrow rules', description: 'Merchant payouts held until trust established' }
];

// Launch Checklist
const launchChecklist = [
  { item: 'Merchant onboarding flow tested', status: 'pending', detail: '10 merchants live, first transactions verified' },
  { item: 'Wallet & coin issuance tested', status: 'pending', detail: 'End-to-end reconciliation (2 test transactions)' },
  { item: 'Push & deep link flows tested', status: 'pending', detail: 'iOS/Android verified' },
  { item: 'Creative assets pre-approved', status: 'pending', detail: 'Sized for all channels' },
  { item: 'Manual share verification team ready', status: 'pending', detail: 'First 1-2 weeks coverage' },
  { item: 'Dashboard & alerting set up', status: 'pending', detail: 'All metrics live' },
  { item: 'Ambassador contracts & payment', status: 'pending', detail: 'Logic live in system' },
  { item: 'Legal + fraud playbook accessible', status: 'pending', detail: 'All ops trained' }
];

// Creative Assets Library
const creativeAssets = [
  { type: 'Hero Video', formats: ['6s', '15s', '30s'], description: 'Local lunch scene: scan → save → share' },
  { type: 'UGC Kit', formats: ['Stickers', 'Captions', 'Hashtags'], description: 'Challenge templates, overlay pack' },
  { type: 'Merchant In-Store', formats: ['QR poster', 'Counter tent', 'Staff cheat-sheet'], description: 'Physical materials' },
  { type: 'Landing Pages', formats: ['Merchant offers', 'Event signup', 'Ambassador'], description: 'Web templates' },
  { type: 'Ad Creatives', formats: ['Static', 'Loop', 'Vertical UGC'], description: 'Social ad formats' },
  { type: 'Email & Push', formats: ['Onboarding', 'Activation', 'Re-engagement'], description: 'Sequence templates' }
];

// Campaign Card Component
const CampaignCard = ({ campaign, type }: { campaign: typeof userCampaigns[0]; type: 'user' | 'merchant' }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`rounded-2xl overflow-hidden border-2 ${expanded ? 'border-[#c9a227]' : 'border-gray-200'}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full p-6 bg-gradient-to-r ${campaign.color} text-white text-left`}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <campaign.icon size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded">{campaign.id}</span>
                <span className="text-xs opacity-80">{campaign.category}</span>
              </div>
              <h3 className="text-xl font-bold mt-1">{campaign.name}</h3>
            </div>
          </div>
          {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
        <p className="mt-3 text-white/90 text-sm">{campaign.thesis}</p>
      </button>

      {expanded && (
        <div className="p-6 bg-white space-y-6">
          {/* Funnel Steps */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Target size={16} className="text-purple-600" />
              Funnel Mechanics
            </h4>
            <div className="space-y-2">
              {campaign.funnel.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm text-gray-600">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Hook */}
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
              <Sparkles size={16} />
              Creative Hook
            </h4>
            <p className="text-amber-900 font-medium">"{campaign.creativeHook}"</p>
          </div>

          {/* KPIs */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <BarChart3 size={16} className="text-emerald-600" />
              Target KPIs
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {campaign.kpis.map((kpi, i) => (
                <div key={i} className="bg-emerald-50 rounded-lg p-3 text-center border border-emerald-100">
                  <div className="text-lg font-bold text-emerald-600">{kpi.target}</div>
                  <div className="text-xs text-gray-600">{kpi.metric}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Channels */}
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Channels</h4>
            <div className="flex flex-wrap gap-2">
              {campaign.channels.map((ch, i) => (
                <span key={i} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{ch}</span>
              ))}
            </div>
          </div>

          {/* Fraud Controls */}
          <div>
            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Shield size={16} className="text-red-500" />
              Fraud Controls
            </h4>
            <ul className="space-y-1">
              {campaign.fraudControls.map((fc, i) => (
                <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                  <Lock size={12} className="text-red-400" />
                  {fc}
                </li>
              ))}
            </ul>
          </div>

          {/* A/B Tests */}
          <div>
            <h4 className="font-bold text-gray-900 mb-2">A/B Tests to Run</h4>
            <div className="flex flex-wrap gap-2">
              {campaign.abTests.map((test, i) => (
                <span key={i} className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">{test}</span>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <span className="font-medium text-gray-700">Budget</span>
            <span className="text-xl font-bold text-gray-900">{campaign.budget}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default function GrowthWarfarePage() {
  const [activePhase, setActivePhase] = useState('campaigns');
  const [expandedAudit, setExpandedAudit] = useState<number | null>(0);

  const phases = [
    { id: 'audit', label: 'A: Competitive Audit', icon: Eye },
    { id: 'campaigns', label: 'B: 6 Campaigns', icon: Rocket },
    { id: 'creative', label: 'C: Creative Library', icon: Camera },
    { id: 'messaging', label: 'D: Messaging', icon: MessageSquare },
    { id: 'budget', label: 'E: Budget & Team', icon: DollarSign },
    { id: 'metrics', label: 'F: Metrics', icon: BarChart3 },
    { id: 'fraud', label: 'G: Fraud & Legal', icon: Shield },
    { id: 'experiments', label: 'H: A/B Plan', icon: Zap },
    { id: 'launch', label: 'I: Launch Checklist', icon: CheckCircle },
    { id: 'optimize', label: 'J: 30-Day Sprint', icon: RefreshCw }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] via-red-900 to-[#0a1628] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
              <Flame className="text-orange-400" size={18} />
              <span className="text-orange-400 font-medium">Battle-Tested Playbook</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Growth <span className="text-orange-400">Warfare Manual</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              10 phases. 6 campaigns. 45-day execution. Everything you need to scale
              from 0 to 10,000 users and 500 merchants.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-orange-400">AED 215K</div>
                <div className="text-sm text-gray-300">45-Day Budget</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-emerald-400">6</div>
                <div className="text-sm text-gray-300">Battle Campaigns</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-purple-400">12</div>
                <div className="text-sm text-gray-300">Team Members</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-cyan-400">10</div>
                <div className="text-sm text-gray-300">Execution Phases</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phase Navigation */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  activePhase === phase.id
                    ? 'bg-[#0a1628] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <phase.icon size={14} />
                {phase.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Phase A: Competitive Audit */}
        {activePhase === 'audit' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Eye className="text-purple-600" />
                Phase A: Competitive Campaign Audit
              </h2>
              <p className="text-gray-600 mb-6">
                Forensic study of 8 iconic viral campaigns with mechanical patterns extracted for Nuqta replication.
              </p>

              <div className="space-y-4">
                {competitorCampaigns.map((campaign, i) => (
                  <div
                    key={i}
                    className={`border rounded-xl overflow-hidden ${expandedAudit === i ? 'border-purple-300' : 'border-gray-200'}`}
                  >
                    <button
                      onClick={() => setExpandedAudit(expandedAudit === i ? null : i)}
                      className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="text-left">
                        <h3 className="font-bold text-gray-900">{campaign.name}</h3>
                        <p className="text-sm text-gray-500">{campaign.thesis}</p>
                      </div>
                      {expandedAudit === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>

                    {expandedAudit === i && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase mb-1">Mechanics</h4>
                            <p className="text-sm text-gray-700">{campaign.mechanics}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase mb-1">Virality Lever</h4>
                            <p className="text-sm text-gray-700">{campaign.viralityLever}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase mb-1">Incentive Structure</h4>
                            <p className="text-sm text-gray-700">{campaign.incentiveStructure}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase mb-1">CPA Benchmark</h4>
                            <p className="text-sm text-gray-700">{campaign.cpa}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {campaign.channels.map((ch, j) => (
                            <span key={j} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">{ch}</span>
                          ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                          <div>
                            <h4 className="text-xs font-bold text-emerald-600 uppercase mb-1">Success Metrics</h4>
                            <p className="text-sm text-gray-700">{campaign.successMetrics}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-red-600 uppercase mb-1">Failure Modes</h4>
                            <p className="text-sm text-gray-700">{campaign.failureModes}</p>
                          </div>
                        </div>

                        <div className="bg-[#c9a227]/10 rounded-lg p-3 border border-[#c9a227]/30">
                          <h4 className="text-xs font-bold text-[#c9a227] uppercase mb-1">Nuqta Replication</h4>
                          <p className="text-sm text-gray-800">{campaign.nuqtaReplication}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Phase B: 6 Campaigns */}
        {activePhase === 'campaigns' && (
          <div className="space-y-8">
            {/* User Campaigns */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Users className="text-purple-600" />
                User Campaigns (Product-led + Viral)
              </h2>
              <p className="text-gray-600 mb-6">3 campaigns designed to acquire and activate users through virality and habit formation.</p>

              <div className="space-y-4">
                {userCampaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} type="user" />
                ))}
              </div>
            </div>

            {/* Merchant Campaigns */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Store className="text-emerald-600" />
                Merchant Campaigns (Acquisition + Activation)
              </h2>
              <p className="text-gray-600 mb-6">3 campaigns designed to onboard and activate merchants at scale.</p>

              <div className="space-y-4">
                {merchantCampaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} type="merchant" />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Phase C: Creative Library */}
        {activePhase === 'creative' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Camera className="text-pink-600" />
                Phase C: Creative & Message Library
              </h2>
              <p className="text-gray-600 mb-6">30-piece creative library for fast execution. Modular assets for all channels.</p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {creativeAssets.map((asset, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-2">{asset.type}</h3>
                    <p className="text-sm text-gray-600 mb-3">{asset.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {asset.formats.map((format, j) => (
                        <span key={j} className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded">{format}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Phase D: Messaging */}
        {activePhase === 'messaging' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MessageSquare className="text-blue-600" />
                Phase D: Messaging & Sequences
              </h2>

              {/* User Onboarding */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-800 mb-4">User Onboarding Sequence</h3>
                <div className="space-y-3">
                  {messageTemplates.userOnboarding.map((msg, i) => (
                    <div key={i} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold bg-blue-200 text-blue-800 px-2 py-0.5 rounded">{msg.day}</span>
                        <span className="text-xs text-blue-600">{msg.channel}</span>
                        {msg.subject && <span className="text-xs text-gray-500">Subject: {msg.subject}</span>}
                      </div>
                      <p className="text-gray-800 text-sm">{msg.message}</p>
                      <button className="mt-2 text-xs text-blue-600 flex items-center gap-1 hover:underline">
                        <Copy size={12} /> Copy
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Merchant Invite */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-800 mb-4">Merchant Invite Scripts</h3>
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 mb-3">
                  <div className="text-xs font-bold text-emerald-600 mb-1">Email Subject</div>
                  <p className="text-gray-800 font-medium">{messageTemplates.merchantInvite.subject}</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 mb-3">
                  <div className="text-xs font-bold text-emerald-600 mb-1">Email Body</div>
                  <p className="text-gray-800 text-sm">{messageTemplates.merchantInvite.body}</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                  <div className="text-xs font-bold text-emerald-600 mb-1">30-Second Pitch (BD)</div>
                  <p className="text-gray-800 text-sm">{messageTemplates.merchantInvite.pitch30sec}</p>
                </div>
              </div>

              {/* Ambassador */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-800 mb-4">Ambassador Brief</h3>
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-xs font-bold text-purple-600 mb-1">Headline</div>
                      <p className="text-gray-800 font-bold">{messageTemplates.ambassador.brief}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-purple-600 mb-1">Weekly Task</div>
                      <p className="text-gray-800">{messageTemplates.ambassador.taskSheet}</p>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-purple-600 mb-1">WhatsApp Script</div>
                  <p className="text-gray-800 text-sm bg-white p-3 rounded-lg">{messageTemplates.ambassador.script}</p>
                </div>
              </div>

              {/* UGC Prompt */}
              <div>
                <h3 className="font-bold text-gray-800 mb-4">UGC Caption Prompt</h3>
                <div className="bg-pink-50 rounded-xl p-4 border border-pink-100">
                  <p className="text-gray-800">{messageTemplates.ugcPrompt}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Phase E: Budget & Team */}
        {activePhase === 'budget' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <DollarSign className="text-emerald-600" />
                Phase E: 45-Day Budget Allocation
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="space-y-3">
                    {budgetAllocation.map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-20 text-right">
                          <span className="text-sm font-bold text-gray-900">AED {(item.amount / 1000).toFixed(0)}K</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">{item.category}</span>
                            <span className="text-xs text-gray-500">{item.percentage}%</span>
                          </div>
                          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-emerald-100 rounded-xl border-2 border-emerald-300">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-emerald-800">Total 45-Day Budget</span>
                      <span className="text-2xl font-bold text-emerald-700">AED 215,000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-4">Team Structure</h3>
                  <div className="space-y-3">
                    {teamStructure.map((member, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                          {member.count}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{member.role}</div>
                          <div className="text-xs text-gray-500">{member.responsibilities}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 bg-purple-100 rounded-xl border-2 border-purple-300">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-purple-800">Total Team Size</span>
                      <span className="text-2xl font-bold text-purple-700">12 people</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Phase F: Metrics */}
        {activePhase === 'metrics' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BarChart3 className="text-cyan-600" />
                Phase F: Dashboard & Reporting
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-4">Daily Dashboard (Live)</h3>
                  <div className="space-y-2">
                    {dashboardMetrics.daily.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-cyan-50 rounded-lg border border-cyan-100">
                        <span className="font-medium text-gray-800">{item.metric}</span>
                        <span className="text-xs text-cyan-600">{item.threshold}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-4">Weekly Board Metrics</h3>
                  <div className="space-y-2 mb-6">
                    {dashboardMetrics.weekly.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-100">
                        <span className="font-medium text-gray-800">{item.metric}</span>
                        <span className="text-xs text-purple-600">{item.threshold}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-bold text-gray-800 mb-4">Auto Alerts</h3>
                  <div className="space-y-2">
                    {dashboardMetrics.alerts.map((alert, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                        <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={16} />
                        <div>
                          <div className="font-medium text-red-700">{alert.trigger}</div>
                          <div className="text-xs text-gray-600">→ {alert.action}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Phase G: Fraud & Legal */}
        {activePhase === 'fraud' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Shield className="text-red-600" />
                Phase G: Fraud & Legal Controls
              </h2>

              <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200 mb-6">
                <p className="text-red-800 font-medium">⚠️ Non-negotiable: Implement these controls BEFORE campaign launch.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {fraudControls.map((control, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="text-red-500" size={16} />
                      <h4 className="font-bold text-gray-900">{control.control}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{control.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Phase H: A/B Plan */}
        {activePhase === 'experiments' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Zap className="text-amber-600" />
                Phase H: First 30-Day A/B Plan
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { test: 'Share bonus size', variants: '5% vs 10%', measure: 'Share rate, fraud rate' },
                  { test: 'First-transaction incentive', variants: 'AED 5 vs AED 10 coin', measure: 'Activation rate' },
                  { test: 'Ambassador compensation', variants: 'Flat fee vs per-activation', measure: 'Quality of installs' },
                  { test: 'Merchant trial commission', variants: '0% 7 days vs 10% 30 days', measure: 'Signup & retention' },
                  { test: 'UGC prize structure', variants: 'Weekly pool vs monthly mega', measure: 'Submission rate' },
                  { test: 'Push notification timing', variants: '6PM vs 12PM', measure: 'Open rate, conversion' }
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <h4 className="font-bold text-gray-900 mb-2">{item.test}</h4>
                    <div className="text-sm text-amber-700 mb-2">{item.variants}</div>
                    <div className="text-xs text-gray-500">Measure: {item.measure}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Phase I: Launch Checklist */}
        {activePhase === 'launch' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CheckCircle className="text-emerald-600" />
                Phase I: Launch Week Checklist
              </h2>

              <div className="space-y-3">
                {launchChecklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                      item.status === 'complete' ? 'bg-emerald-500' : 'bg-gray-300'
                    }`}>
                      {item.status === 'complete' ? (
                        <CheckCircle className="text-white" size={14} />
                      ) : (
                        <Clock className="text-white" size={14} />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.item}</h4>
                      <p className="text-sm text-gray-500">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Phase J: 30-Day Sprint */}
        {activePhase === 'optimize' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <RefreshCw className="text-blue-600" />
                Phase J: Post-Launch 30-Day Sprint
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-3">Every 3 Days</h3>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li>• Review primary cohort metrics</li>
                    <li>• Analyze conversion funnels</li>
                    <li>• Identify top creative performers</li>
                    <li>• Flag anomalies and fraud</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-3">Weekly</h3>
                  <ul className="space-y-2 text-sm text-purple-700">
                    <li>• Pivot or double down on best mechanics</li>
                    <li>• Adjust channel mix based on CAC</li>
                    <li>• Review A/B test results</li>
                    <li>• Ambassador performance review</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 rounded-xl p-4 border-2 border-emerald-200">
                  <h3 className="font-bold text-emerald-800 mb-3">Day 30</h3>
                  <ul className="space-y-2 text-sm text-emerald-700">
                    <li>• Prepare IC update memo</li>
                    <li>• Real data: 500+ users, 10+ merchants</li>
                    <li>• D7 retention & CAC breakdown</li>
                    <li>• Next 90-day budget ask</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <GlobalFooter />
    </div>
  );
}
