'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Megaphone, Target, Users, TrendingUp, BarChart3, Eye,
  Tv, Newspaper, Smartphone, Globe, MapPin, Video,
  Image, ArrowRight, CheckCircle, XCircle, ChevronDown,
  ChevronUp, Database, Activity, DollarSign, Award, Zap,
  Store, Crown, Shield, AlertTriangle, Lock, Layers,
  Search, MousePointer, Play, Bell, Star, Percent,
  PieChart, LineChart, Settings, Briefcase, Rocket,
  Calendar, Filter, LayoutGrid, Monitor, UserCheck,
  ShoppingCart, Heart, FileText, Code,
  RefreshCw, Clock, Crosshair, Brain, TrendingDown,
  ArrowUpRight
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ============================================
// DATA: Adzy Products & Platforms
// ============================================
const adzyProducts = [
  {
    id: 'merchant-ads',
    name: 'Adzy Merchant Ads Manager',
    icon: Target,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500',
    description: 'Self-serve ad platform for merchants to promote to Nuqta users',
    features: [
      'Campaign creation wizard',
      'Audience targeting',
      'Budget management',
      'A/B testing',
      'Performance analytics',
      'ROI tracking',
    ],
    metrics: ['5K+ merchants', '10M+ impressions/day', '3x avg ROI'],
    status: 'built',
  },
  {
    id: 'hq-console',
    name: 'Adzy HQ Console',
    icon: BarChart3,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500',
    description: 'Central control for all advertising across the ecosystem',
    features: [
      'Revenue dashboards',
      'Fraud detection',
      'Rate card management',
      'Inventory allocation',
      'Publisher controls',
      'Compliance monitoring',
    ],
    metrics: ['Real-time analytics', 'Fraud <0.1%', 'Full audit'],
    status: 'built',
  },
  {
    id: 'influencer',
    name: 'Influencer Marketplace',
    icon: Users,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
    description: 'Connect merchants with verified influencers for campaigns',
    features: [
      'Influencer discovery',
      'Rate comparison',
      'Campaign matching',
      'Performance tracking',
      'Payment escrow',
      'Content approval',
    ],
    metrics: ['1K+ influencers', 'GCC coverage', 'Verified profiles'],
    status: 'planned',
  },
  {
    id: 'media-exchange',
    name: 'Physical + Digital Media Exchange',
    icon: Tv,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500',
    description: 'Buy/sell ad inventory across digital and physical spaces',
    features: [
      'Digital billboards',
      'In-app placements',
      'Mall screens',
      'Transit ads',
      'Event sponsorships',
      'Programmatic buying',
    ],
    metrics: ['500+ placements', 'Real-time bidding', 'Cross-channel'],
    status: 'planned',
  },
];

// ============================================
// DATA: Detailed Ad Formats (8 total)
// ============================================
const adFormatsDetailed = [
  {
    name: 'Banner Ads',
    icon: LayoutGrid,
    type: 'Digital',
    description: 'Standard 320x50 and 728x90 banners across all Nuqta apps',
    avgCPM: '8-12 AED',
    ctr: '0.8-1.5%',
    bestFor: 'Brand awareness, retargeting',
    placement: 'Wasil home feed, BizOne listings, Safar search results',
  },
  {
    name: 'Interstitial',
    icon: Monitor,
    type: 'Digital',
    description: 'Full-screen ads shown between natural content transitions',
    avgCPM: '18-30 AED',
    ctr: '2.5-5%',
    bestFor: 'App installs, high-impact launches',
    placement: 'Order confirmation, booking complete, level transitions',
  },
  {
    name: 'Native Feed',
    icon: Newspaper,
    type: 'Digital',
    description: 'Ads that match the look and feel of surrounding content',
    avgCPM: '15-25 AED',
    ctr: '1.5-3%',
    bestFor: 'Product discovery, merchant promotion',
    placement: 'Wasil restaurant feed, BizOne explore, Safar recommendations',
  },
  {
    name: 'Push Notification',
    icon: Bell,
    type: 'Digital',
    description: 'Targeted push messages to opted-in users with deep links',
    avgCPM: '20-35 AED',
    ctr: '3-8%',
    bestFor: 'Flash sales, time-sensitive offers, re-engagement',
    placement: 'Device notification tray, in-app notification center',
  },
  {
    name: 'Sponsored Listing',
    icon: Star,
    type: 'Digital',
    description: 'Boosted merchant/product listings at top of search results',
    avgCPM: '25-40 AED',
    ctr: '4-10%',
    bestFor: 'Direct conversions, competitive placement',
    placement: 'Wasil search top, BizOne category top, Safar featured',
  },
  {
    name: 'Video Pre-roll',
    icon: Play,
    type: 'Digital',
    description: '6-15 second skippable/non-skippable video ads before content',
    avgCPM: '30-50 AED',
    ctr: '1.5-4%',
    bestFor: 'Brand storytelling, product demos, launches',
    placement: 'Safar travel guides, BizOne merchant stories, in-app tutorials',
  },
  {
    name: 'In-App Overlay',
    icon: Layers,
    type: 'Digital',
    description: 'Semi-transparent overlay ads with call-to-action buttons',
    avgCPM: '12-20 AED',
    ctr: '2-4%',
    bestFor: 'Promotions, limited-time deals, upsells',
    placement: 'Cart page, checkout flow, post-purchase screen',
  },
  {
    name: 'Search Ads',
    icon: Search,
    type: 'Digital',
    description: 'Keyword-targeted ads appearing in app search results',
    avgCPM: '35-60 AED',
    ctr: '5-12%',
    bestFor: 'High-intent users, competitive keywords',
    placement: 'Wasil restaurant search, BizOne product search, Safar destination search',
  },
];

// ============================================
// DATA: Legacy Ad Formats (physical)
// ============================================
const physicalAdFormats = [
  { name: 'Billboards', icon: Image, type: 'Physical' },
  { name: 'Mall Screens', icon: Tv, type: 'Physical' },
  { name: 'Transit Ads', icon: MapPin, type: 'Physical' },
  { name: 'Event Sponsorships', icon: Award, type: 'Physical' },
];

// ============================================
// DATA: Targeting Capabilities
// ============================================
const targetingCapabilities = [
  {
    name: 'Behavioral Targeting',
    icon: Brain,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    description: 'Target based on purchase history, browsing behavior, and transaction patterns across the entire Nuqta ecosystem',
    examples: ['Frequent Wasil orderers', 'High-value BizOne shoppers', 'Repeat Safar bookers', 'Cart abandoners'],
  },
  {
    name: 'Location / Hyperlocal',
    icon: MapPin,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    description: 'Hyperlocal targeting powered by LocalEdge data -- geo-fence around stores, neighborhoods, or landmarks',
    examples: ['Within 500m of merchant', 'Dubai Marina residents', 'Mall visitors', 'Airport travelers'],
  },
  {
    name: 'Demographic',
    icon: Users,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    description: 'Age, gender, income bracket, nationality, language preference, and household composition',
    examples: ['25-34 professionals', 'Arabic speakers', 'Families with children', 'Expat communities'],
  },
  {
    name: 'Interest-Based (AI-R Data)',
    icon: Heart,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    description: 'Leverage AI-R intelligence data to target users by inferred interests, preferences, and lifestyle segments',
    examples: ['Foodies', 'Fitness enthusiasts', 'Luxury shoppers', 'Budget-conscious users'],
  },
  {
    name: 'Contextual',
    icon: FileText,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    description: 'Serve ads based on current content context -- what the user is browsing or searching right now',
    examples: ['Viewing Italian restaurants', 'Browsing electronics', 'Searching flights to London', 'Reading reviews'],
  },
  {
    name: 'Retargeting',
    icon: RefreshCw,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    description: 'Re-engage users who visited a merchant page, added to cart, or showed interest but did not convert',
    examples: ['Cart abandonment', 'Page viewers', 'Wishlist savers', 'Past purchasers'],
  },
  {
    name: 'Lookalike Audiences',
    icon: Crosshair,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    description: 'Find new users who behave similarly to a merchant\'s best existing customers using ML similarity models',
    examples: ['Top 10% spender lookalikes', 'Loyal customer clones', 'High-LTV prospects', 'Category enthusiasts'],
  },
];

// ============================================
// DATA: Pricing Models
// ============================================
const pricingModels = [
  {
    model: 'CPM',
    fullName: 'Cost Per Mille',
    icon: Eye,
    description: 'Pay per 1,000 ad impressions served',
    range: '8-60 AED',
    bestFor: 'Brand awareness campaigns',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    model: 'CPC',
    fullName: 'Cost Per Click',
    icon: MousePointer,
    description: 'Pay only when a user clicks on your ad',
    range: '2-5 AED',
    bestFor: 'Traffic & consideration campaigns',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
  },
  {
    model: 'CPA',
    fullName: 'Cost Per Acquisition',
    icon: ShoppingCart,
    description: 'Pay only when a user completes a purchase or desired action',
    range: '15-50 AED',
    bestFor: 'Performance & conversion campaigns',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  {
    model: 'Fixed',
    fullName: 'Fixed Placement',
    icon: Crown,
    description: 'Premium guaranteed placements at fixed rates (homepage takeover, featured spots)',
    range: '5K-50K AED/week',
    bestFor: 'Product launches, major promotions',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
  },
  {
    model: 'Rev Share',
    fullName: 'Revenue Share (Influencer)',
    icon: Users,
    description: 'Influencers earn commission on sales they drive, merchant pays % of revenue',
    range: '10-25% of sales',
    bestFor: 'Influencer marketing campaigns',
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
  },
];

// ============================================
// DATA: Unit Economics
// ============================================
const unitEconomics = [
  { metric: 'Avg CPM', value: '15-25 AED', icon: Eye, note: 'Across all digital formats' },
  { metric: 'Avg CPC', value: '2-5 AED', icon: MousePointer, note: 'Ecosystem-wide average' },
  { metric: 'Merchant Avg Spend', value: '2K AED/mo', icon: Store, note: 'Monthly ad budget' },
  { metric: 'Platform Take Rate', value: '30%', icon: Percent, note: 'Of total ad spend' },
  { metric: 'Avg Campaign ROAS', value: '3.2x', icon: TrendingUp, note: 'Return on ad spend' },
  { metric: 'Fill Rate', value: '85%', icon: BarChart3, note: 'Inventory utilization' },
  { metric: 'Click-to-Purchase', value: '12%', icon: ShoppingCart, note: 'Closed-loop conversion' },
  { metric: 'Avg Order Value Lift', value: '+18%', icon: DollarSign, note: 'For ad-exposed users' },
];

// ============================================
// DATA: Revenue Streams
// ============================================
const revenueStreams = [
  {
    name: 'Merchant Ad Spend',
    share: '55%',
    value: 'Primary',
    icon: Store,
    description: 'Self-serve campaigns by 5K+ merchants across all Nuqta apps. CPM, CPC, and CPA billing.',
    color: 'text-pink-400',
  },
  {
    name: 'Premium Placements',
    share: '20%',
    value: 'Growing',
    icon: Crown,
    description: 'Homepage takeovers, featured spots, category sponsorships at fixed premium rates.',
    color: 'text-amber-400',
  },
  {
    name: 'Influencer Marketplace Commission',
    share: '12%',
    value: 'Phase 3',
    icon: Users,
    description: 'Platform fee (15-20%) on influencer campaigns. Connects 1K+ influencers with merchants.',
    color: 'text-blue-400',
  },
  {
    name: 'Data Insights Packages',
    share: '8%',
    value: 'Emerging',
    icon: PieChart,
    description: 'Anonymized audience insights, market reports, competitive intelligence sold to brands and agencies.',
    color: 'text-purple-400',
  },
  {
    name: 'Agency & Enterprise Tools',
    share: '5%',
    value: 'Planned',
    icon: Briefcase,
    description: 'SaaS fees for agency dashboards, bulk campaign tools, API access, and white-label solutions.',
    color: 'text-emerald-400',
  },
];

// ============================================
// DATA: Market Opportunity
// ============================================
const marketData = {
  totalMarket: '$1.5B',
  growth: '20% YoY',
  fastestSegment: 'In-app advertising',
  uaeDigitalPenetration: '99%',
  mobileAdShare: '72%',
  programmaticGrowth: '35% YoY',
};

// ============================================
// DATA: Competitor Analysis
// ============================================
const competitors = [
  {
    name: 'Google Ads',
    strength: 'Massive reach, advanced ML',
    weakness: 'No closed-loop, no purchase data',
    marketShare: '40%',
    adzyAdvantage: 'We see the actual purchase, Google only sees the click',
  },
  {
    name: 'Meta Ads',
    strength: 'Social targeting, Instagram/Facebook',
    weakness: 'iOS privacy changes, no transaction data',
    marketShare: '25%',
    adzyAdvantage: 'Cross-ecosystem first-party data, no reliance on third-party cookies',
  },
  {
    name: 'Snap Ads',
    strength: 'Young demographic, AR formats',
    weakness: 'Limited commerce integration',
    marketShare: '8%',
    adzyAdvantage: 'Full purchase funnel: see ad in Wasil, order food, measure actual ROI',
  },
  {
    name: 'TikTok Ads',
    strength: 'Viral content, high engagement',
    weakness: 'Regulatory risk, no commerce loop',
    marketShare: '12%',
    adzyAdvantage: 'Closed-loop attribution across 60+ apps: ad exposure to verified purchase',
  },
];

// ============================================
// DATA: Roadmap Phases
// ============================================
const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Self-Serve + Basic Targeting',
    timeline: 'Q1-Q2 2025',
    status: 'completed',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500',
    bgColor: 'bg-emerald-500/10',
    items: [
      'Merchant Ads Manager launch',
      'Campaign creation wizard',
      'Basic demographic targeting',
      'CPM and CPC billing',
      'Performance dashboard',
      'Budget management tools',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'ML Targeting + RTB',
    timeline: 'Q3-Q4 2025',
    status: 'in-progress',
    color: 'text-blue-400',
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
    items: [
      'Machine learning audience segmentation',
      'Real-time bidding engine',
      'Behavioral + interest targeting',
      'Retargeting pixel integration',
      'Lookalike audience builder',
      'A/B testing framework',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Influencer Marketplace',
    timeline: 'Q1-Q2 2026',
    status: 'planned',
    color: 'text-purple-400',
    borderColor: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
    items: [
      'Influencer discovery & matching',
      'Campaign collaboration tools',
      'Payment escrow system',
      'Content approval workflow',
      'Performance attribution for influencers',
      'Revenue share automation',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Programmatic + Cross-Platform',
    timeline: 'Q3-Q4 2026',
    status: 'planned',
    color: 'text-amber-400',
    borderColor: 'border-amber-500',
    bgColor: 'bg-amber-500/10',
    items: [
      'Programmatic ad exchange',
      'Physical + digital media buying',
      'Cross-platform campaign management',
      'Agency white-label solution',
      'External publisher network',
      'Advanced attribution modeling',
    ],
  },
];

// ============================================
// DATA: Risk Analysis
// ============================================
const risks = [
  {
    risk: 'Ad Fraud',
    severity: 'High',
    icon: AlertTriangle,
    color: 'text-red-400',
    description: 'Click fraud, impression fraud, bot traffic inflating metrics',
    mitigation: 'ML-based fraud detection, device fingerprinting, click pattern analysis, invalid traffic filtering. Adzy HQ Console monitors fraud rate (<0.1% target).',
  },
  {
    risk: 'Brand Safety',
    severity: 'Medium',
    icon: Shield,
    color: 'text-amber-400',
    description: 'Ads appearing next to inappropriate content, merchant-brand misalignment',
    mitigation: 'Content categorization, merchant verification, brand safety controls, blocklist/allowlist management, pre-approval workflows.',
  },
  {
    risk: 'User Ad Fatigue',
    severity: 'Medium',
    icon: TrendingDown,
    color: 'text-amber-400',
    description: 'Too many ads degrading user experience, causing app uninstalls',
    mitigation: 'Frequency capping per user (max 3 ads/session), ad density limits, user preference controls, quality score system for ad relevance.',
  },
  {
    risk: 'Privacy Regulations',
    severity: 'High',
    icon: Lock,
    color: 'text-red-400',
    description: 'UAE PDPL compliance, cross-border data transfer rules, consent management',
    mitigation: 'Privacy-by-design architecture, explicit opt-in for targeting, data anonymization, consent management platform, regular compliance audits.',
  },
  {
    risk: 'Platform Dependency',
    severity: 'Low',
    icon: Layers,
    color: 'text-blue-400',
    description: 'Reliance on ecosystem apps for ad inventory; if app traffic drops, ad revenue drops',
    mitigation: 'Diversify across 60+ app surfaces, external publisher partnerships (Phase 4), physical media exchange for non-digital inventory.',
  },
];

// ============================================
// DATA: Ecosystem Integration
// ============================================
const ecosystemIntegrations = [
  {
    app: 'Wasil',
    icon: ShoppingCart,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    surfaces: ['Restaurant feed native ads', 'Search result sponsored listings', 'Order confirmation interstitials', 'Push notifications for nearby deals'],
    impact: 'Merchants promote restaurants on Adzy, users see ads in Wasil, orders attributed back to campaign',
  },
  {
    app: 'BizOne',
    icon: Store,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    surfaces: ['Product listing boosts', 'Category sponsorship banners', 'Store page featured spots', 'In-app overlay promotions'],
    impact: 'Retail merchants drive foot traffic + online orders via targeted Adzy campaigns across BizOne',
  },
  {
    app: 'Safar',
    icon: Globe,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    surfaces: ['Destination search ads', 'Hotel/flight sponsored results', 'Travel guide video pre-rolls', 'Booking confirmation upsells'],
    impact: 'Travel partners promote via Adzy, bookings tracked end-to-end with Safar conversion data',
  },
  {
    app: 'LocalEdge',
    icon: MapPin,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    surfaces: ['Nearby merchant push alerts', 'Geo-fenced interstitials', 'Location-based banners', 'Hyperlocal deal notifications'],
    impact: 'LocalEdge provides hyperlocal signals; Adzy delivers geo-targeted ads that drive real-world visits',
  },
  {
    app: 'AI-R Intelligence',
    icon: Brain,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    surfaces: ['Interest segment data feed', 'Predictive audience scoring', 'Churn risk targeting', 'Spend propensity models'],
    impact: 'AI-R powers Adzy smart targeting: predict who will buy, when, and what -- before they search',
  },
  {
    app: 'Rabtul',
    icon: Database,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    surfaces: ['SSO user identity', 'Consent & opt-in management', 'Wallet-funded ad credits', 'Cross-app user graph'],
    impact: 'Rabtul provides identity, consent, and payment rails -- Adzy never touches raw user data directly',
  },
];

// ============================================
// DATA: For Merchants - Self-Serve Tools
// ============================================
const merchantTools = [
  { name: 'Self-Serve Dashboard', icon: BarChart3, description: 'Real-time campaign performance, spend tracking, and ROI metrics in one view' },
  { name: 'Campaign Builder', icon: Rocket, description: 'Step-by-step wizard: set goal, choose format, pick audience, set budget, launch' },
  { name: 'Audience Builder', icon: Users, description: 'Build custom audiences from 7 targeting dimensions; save and reuse segments' },
  { name: 'A/B Testing', icon: Filter, description: 'Test creatives, headlines, audiences, and bidding strategies with statistical rigor' },
  { name: 'Attribution Reports', icon: LineChart, description: 'Closed-loop: see which ad impression led to which purchase, with full funnel view' },
  { name: 'Creative Studio', icon: Image, description: 'Drag-and-drop ad builder with templates optimized for each format and placement' },
  { name: 'Budget Optimizer', icon: DollarSign, description: 'AI-powered budget allocation across campaigns to maximize ROAS automatically' },
  { name: 'Competitor Insights', icon: Eye, description: 'See how your category peers are advertising (anonymized) and benchmark performance' },
];

// ============================================
// DATA: For Advertisers / Agencies
// ============================================
const agencyTools = [
  { name: 'Multi-Client Dashboard', icon: Briefcase, description: 'Manage campaigns for multiple merchants from a single agency view' },
  { name: 'Bulk Campaign Management', icon: LayoutGrid, description: 'Create, edit, pause, and clone campaigns in bulk with CSV import/export' },
  { name: 'API Access', icon: Code, description: 'RESTful API for programmatic campaign creation, reporting, and audience management' },
  { name: 'White-Label Reports', icon: FileText, description: 'Branded performance reports with custom logos and metrics for client presentations' },
  { name: 'Team Permissions', icon: UserCheck, description: 'Role-based access: admin, manager, analyst, creative -- per client per team member' },
  { name: 'Automated Rules', icon: Settings, description: 'Set rules: pause if CPA > threshold, increase budget if ROAS > target, alert on anomalies' },
];

// ============================================
// DATA: Ownership & Controls
// ============================================
const ownership = {
  rtmnShare: '60%',
  partnersShare: '40%',
  investment: '3/5',
  revenue: '5/5',
  risk: '2/5',
  purpose: 'Closed-loop ads, merchant growth, extra revenue stream',
};

const controls = [
  'Campaign tooling',
  'Ad inventory allocation',
  'Attribution logic',
  'Influencer/offline ads',
  'Creative management',
  'Fraud detection',
];

const doesNotDo = [
  { item: 'Wallet credit', reason: 'Rabtul manages wallet' },
  { item: 'Discounts', reason: 'HQ sets discount rules' },
  { item: 'Merchant pricing', reason: 'BizOne controls merchant data' },
  { item: 'User identity', reason: 'Rabtul SSO' },
];

const dataFlow = {
  consumes: ['Rules from Rabtul', 'Opt-in from BizOne', 'ROI data from BizOne', 'User segments from Nuqta'],
  produces: ['Campaign visibility', 'Attribution data', 'Ad revenue', 'Performance reports'],
};

// ============================================
// HERO STATS
// ============================================
const heroStats = [
  { label: 'App Surfaces', value: '60+', icon: Smartphone, color: 'text-pink-400', bgColor: 'bg-pink-500/10', borderColor: 'border-pink-500/30' },
  { label: 'Users Targeted', value: '5M+', icon: Users, color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
  { label: 'Ad Formats', value: '8', icon: Layers, color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30' },
  { label: 'Avg ROAS', value: '3x', icon: TrendingUp, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30' },
  { label: 'Self-Serve Platform', value: 'Live', icon: Rocket, color: 'text-amber-400', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/30' },
];

// ============================================
// COMPONENT
// ============================================
export default function AdzyPage() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>('merchant-ads');
  const [activeTab, setActiveTab] = useState<'overview' | 'formats' | 'targeting' | 'pricing' | 'market' | 'ecosystem' | 'tools' | 'roadmap' | 'deck'>('overview');
  const [expandedRisk, setExpandedRisk] = useState<number | null>(null);
  const [expandedCompetitor, setExpandedCompetitor] = useState<number | null>(null);

  const builtProducts = adzyProducts.filter(p => p.status === 'built').length;

  const tabs = [
    { id: 'overview' as const, label: 'Overview', icon: BarChart3 },
    { id: 'formats' as const, label: 'Ad Formats', icon: Layers },
    { id: 'targeting' as const, label: 'Targeting', icon: Crosshair },
    { id: 'pricing' as const, label: 'Pricing', icon: DollarSign },
    { id: 'market' as const, label: 'Market', icon: Globe },
    { id: 'ecosystem' as const, label: 'Ecosystem', icon: Activity },
    { id: 'tools' as const, label: 'Tools', icon: Settings },
    { id: 'roadmap' as const, label: 'Roadmap', icon: Rocket },
    { id: 'deck' as const, label: 'Pitch Deck', icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <div className="bg-gradient-to-br from-[#0a1628] via-pink-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-xl shadow-pink-500/30">
              <Megaphone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl font-black text-white">
                  Adzy <span className="text-pink-400">Media Network</span>
                </h1>
                <span className="bg-pink-500/20 text-pink-400 text-xs sm:text-sm px-3 py-1 rounded-full font-bold border border-pink-500/50">
                  CLOSED-LOOP ADS
                </span>
              </div>
              <p className="text-pink-400 text-lg mt-1">Cross-Ecosystem Advertising Network</p>
              <p className="text-slate-500 text-sm">60% RTMN / 40% Media Investors</p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-4xl mb-8">
            The only advertising platform in the UAE with closed-loop attribution across 60+ app surfaces.
            See the ad, click, purchase, measure actual ROI -- all within the Nuqta ecosystem.
            Self-serve merchant campaigns, influencer marketplace, and physical/digital media exchange.
          </p>

          {/* Hero Key Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {heroStats.map((stat, i) => (
              <div key={i} className={`${stat.bgColor} rounded-xl p-4 text-center border ${stat.borderColor} hover:scale-[1.02] transition-transform`}>
                <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* TAB NAVIGATION */}
      {/* ============================================ */}
      <div className="bg-slate-900/50 border-b border-slate-700/50 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-pink-500/20 text-pink-400 border border-pink-500/50'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* OVERVIEW TAB */}
      {/* ============================================ */}
      {activeTab === 'overview' && (
        <>
          {/* Controls & Does Not Do */}
          <section className="bg-slate-800/30 border-b border-slate-700/50 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30">
                  <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Adzy Controls
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {controls.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                  <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> Does NOT Own
                  </h3>
                  <div className="space-y-2">
                    {doesNotDo.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-white font-medium text-sm">{item.item}</span>
                          <span className="text-slate-500 text-xs ml-2">({item.reason})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Products */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <h2 className="text-xl font-bold text-white mb-6">{adzyProducts.length} Ad Products & Platforms</h2>

            <div className="space-y-4 sm:space-y-6">
              {adzyProducts.map((product) => (
                <div
                  key={product.id}
                  className={`${product.bgColor} border-2 ${product.borderColor} rounded-xl overflow-hidden`}
                >
                  <button
                    onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                    className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${product.bgColor} flex items-center justify-center border ${product.borderColor}`}>
                        <product.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${product.color}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className={`text-base sm:text-xl font-bold ${product.color}`}>
                            {product.name}
                          </h3>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            product.status === 'built'
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : 'bg-slate-700/50 text-slate-400'
                          }`}>
                            {product.status}
                          </span>
                        </div>
                        <p className="text-slate-400 text-xs sm:text-sm line-clamp-1">{product.description}</p>
                      </div>
                    </div>
                    {expandedProduct === product.id ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {expandedProduct === product.id && (
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                          <h4 className="text-white font-bold mb-3">Features</h4>
                          <ul className="space-y-1">
                            {product.features.map((feature, i) => (
                              <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                                <CheckCircle className={`w-4 h-4 ${product.color} flex-shrink-0`} />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                          <h4 className="text-white font-bold mb-3">Metrics</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.metrics.map((metric, i) => (
                              <span key={i} className={`text-sm px-3 py-1 rounded-lg ${product.bgColor} ${product.color} border border-current`}>
                                {metric}
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

            {/* Data Flow */}
            <div className="mt-8 bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-pink-400" /> Data Flow
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="text-blue-400 font-bold mb-3">Consumes From</h4>
                  <ul className="space-y-1">
                    {dataFlow.consumes.map((item, i) => (
                      <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                        <ArrowRight className="w-3 h-3 text-blue-400 rotate-180" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/30">
                  <h4 className="text-emerald-400 font-bold mb-3">Produces</h4>
                  <ul className="space-y-1">
                    {dataFlow.produces.map((item, i) => (
                      <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                        <ArrowRight className="w-3 h-3 text-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Revenue Model */}
            <div className="mt-8 bg-[#c9a227]/10 rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-[#c9a227] mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5" /> Revenue Model Summary
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <TrendingUp className="w-8 h-8 text-[#c9a227] mb-2" />
                  <h4 className="text-white font-bold mb-1">CPM/CPC Ads</h4>
                  <p className="text-slate-400 text-sm">Per impression & click billing</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <Store className="w-8 h-8 text-[#c9a227] mb-2" />
                  <h4 className="text-white font-bold mb-1">Merchant Subscriptions</h4>
                  <p className="text-slate-400 text-sm">Premium ad features & analytics</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <Award className="w-8 h-8 text-[#c9a227] mb-2" />
                  <h4 className="text-white font-bold mb-1">Influencer Commission</h4>
                  <p className="text-slate-400 text-sm">Platform fee on campaigns</p>
                </div>
              </div>
            </div>
          </main>
        </>
      )}

      {/* ============================================ */}
      {/* AD FORMATS TAB */}
      {/* ============================================ */}
      {activeTab === 'formats' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">8 Digital Ad Formats</h2>
            <p className="text-slate-400">Every format optimized for the Nuqta ecosystem with closed-loop attribution</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {adFormatsDetailed.map((format, i) => (
              <div key={i} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 hover:border-pink-500/30 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center border border-pink-500/30 flex-shrink-0">
                    <format.icon className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{format.name}</h3>
                    <p className="text-slate-400 text-sm mt-1">{format.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-slate-900/50 rounded-lg p-3">
                    <div className="text-xs text-slate-500 mb-1">Avg CPM</div>
                    <div className="text-sm font-bold text-emerald-400">{format.avgCPM}</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3">
                    <div className="text-xs text-slate-500 mb-1">CTR Range</div>
                    <div className="text-sm font-bold text-blue-400">{format.ctr}</div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="text-xs text-slate-500 mb-1">Best For</div>
                  <div className="text-sm text-amber-400">{format.bestFor}</div>
                </div>

                <div>
                  <div className="text-xs text-slate-500 mb-1">Placements</div>
                  <div className="text-sm text-slate-300">{format.placement}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Physical Ad Formats */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-white mb-2">Physical Media Formats</h2>
            <p className="text-slate-400 mb-6">Planned for Phase 4 -- bridging digital campaigns with real-world media</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {physicalAdFormats.map((format, i) => (
                <div key={i} className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/30 text-center">
                  <format.icon className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                  <h4 className="text-white font-bold text-sm">{format.name}</h4>
                  <span className="text-xs text-orange-400">{format.type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Format Comparison Table */}
          <div className="mt-10 bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 overflow-x-auto">
            <h3 className="text-lg font-bold text-white mb-4">Format Performance Comparison</h3>
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left text-slate-400 text-sm py-3 pr-4">Format</th>
                  <th className="text-left text-slate-400 text-sm py-3 pr-4">Avg CPM</th>
                  <th className="text-left text-slate-400 text-sm py-3 pr-4">CTR</th>
                  <th className="text-left text-slate-400 text-sm py-3">Best For</th>
                </tr>
              </thead>
              <tbody>
                {adFormatsDetailed.map((format, i) => (
                  <tr key={i} className="border-b border-slate-700/30">
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <format.icon className="w-4 h-4 text-pink-400" />
                        <span className="text-white text-sm font-medium">{format.name}</span>
                      </div>
                    </td>
                    <td className="text-emerald-400 text-sm py-3 pr-4">{format.avgCPM}</td>
                    <td className="text-blue-400 text-sm py-3 pr-4">{format.ctr}</td>
                    <td className="text-slate-300 text-sm py-3">{format.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      )}

      {/* ============================================ */}
      {/* TARGETING TAB */}
      {/* ============================================ */}
      {activeTab === 'targeting' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">7 Targeting Dimensions</h2>
            <p className="text-slate-400">Powered by first-party ecosystem data -- no third-party cookies needed</p>
          </div>

          <div className="space-y-6">
            {targetingCapabilities.map((cap, i) => (
              <div key={i} className={`${cap.bgColor} rounded-xl p-6 border border-slate-700/50`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${cap.bgColor} flex items-center justify-center border border-slate-700/50 flex-shrink-0`}>
                    <cap.icon className={`w-6 h-6 ${cap.color}`} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${cap.color}`}>{cap.name}</h3>
                    <p className="text-slate-300 text-sm mt-1">{cap.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 ml-16">
                  {cap.examples.map((ex, j) => (
                    <span key={j} className="text-xs px-3 py-1.5 rounded-lg bg-slate-900/50 text-slate-300 border border-slate-700/50">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Targeting Advantage */}
          <div className="mt-10 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl p-6 border border-pink-500/30">
            <h3 className="text-lg font-bold text-pink-400 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" /> Adzy Targeting Advantage
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900/50 rounded-lg p-4">
                <h4 className="text-white font-bold mb-2">First-Party Data</h4>
                <p className="text-slate-400 text-sm">All targeting powered by consented first-party data from 60+ Nuqta apps. No reliance on third-party cookies or external tracking pixels.</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <h4 className="text-white font-bold mb-2">Cross-App Signals</h4>
                <p className="text-slate-400 text-sm">Combine signals from Wasil (food), BizOne (retail), Safar (travel) to build rich user profiles. A user who orders sushi and books flights to Tokyo gets Japanese restaurant ads.</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <h4 className="text-white font-bold mb-2">Closed-Loop Proof</h4>
                <p className="text-slate-400 text-sm">Unlike Google/Meta, we prove the ad worked. User sees ad in App A, purchases in App B, and the full journey is attributed to the campaign.</p>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ============================================ */}
      {/* PRICING TAB */}
      {/* ============================================ */}
      {activeTab === 'pricing' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Pricing Models */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">Pricing Models</h2>
            <p className="text-slate-400 mb-6">Flexible pricing to match every campaign goal -- from awareness to conversion</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricingModels.map((model, i) => (
                <div key={i} className={`${model.bgColor} rounded-xl p-6 border border-slate-700/50`}>
                  <div className="flex items-center gap-3 mb-3">
                    <model.icon className={`w-8 h-8 ${model.color}`} />
                    <div>
                      <h3 className={`text-lg font-bold ${model.color}`}>{model.model}</h3>
                      <p className="text-slate-500 text-xs">{model.fullName}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mb-4">{model.description}</p>
                  <div className="flex items-center justify-between bg-slate-900/50 rounded-lg p-3">
                    <div>
                      <div className="text-xs text-slate-500">Price Range</div>
                      <div className={`text-sm font-bold ${model.color}`}>{model.range}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500">Best For</div>
                      <div className="text-xs text-slate-300">{model.bestFor}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Unit Economics */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">Unit Economics</h2>
            <p className="text-slate-400 mb-6">Key performance metrics that define Adzy profitability</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {unitEconomics.map((item, i) => (
                <div key={i} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 text-center">
                  <item.icon className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">{item.value}</div>
                  <div className="text-sm text-pink-400 font-medium">{item.metric}</div>
                  <div className="text-xs text-slate-500 mt-1">{item.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Streams */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Revenue Streams</h2>
            <p className="text-slate-400 mb-6">Five diversified revenue sources with merchant ad spend as the core</p>

            <div className="space-y-4">
              {revenueStreams.map((stream, i) => (
                <div key={i} className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center border border-pink-500/30 flex-shrink-0">
                      <stream.icon className={`w-6 h-6 ${stream.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className={`text-lg font-bold ${stream.color}`}>{stream.name}</h3>
                        <span className="text-xs px-2 py-0.5 rounded bg-slate-700/50 text-slate-300">{stream.value}</span>
                      </div>
                      <p className="text-slate-400 text-sm">{stream.description}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-2xl font-bold text-white">{stream.share}</div>
                      <div className="text-xs text-slate-500">of revenue</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Revenue Projection */}
            <div className="mt-6 bg-gradient-to-r from-[#c9a227]/10 to-pink-500/10 rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-[#c9a227] mb-4">Revenue Projections</h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-xs text-slate-500 mb-1">Year 1</div>
                  <div className="text-xl font-bold text-white">8M AED</div>
                  <div className="text-xs text-emerald-400">Self-serve launch</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-xs text-slate-500 mb-1">Year 2</div>
                  <div className="text-xl font-bold text-white">25M AED</div>
                  <div className="text-xs text-emerald-400">ML targeting + RTB</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-xs text-slate-500 mb-1">Year 3</div>
                  <div className="text-xl font-bold text-white">60M AED</div>
                  <div className="text-xs text-emerald-400">+ Influencer marketplace</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-xs text-slate-500 mb-1">Year 5</div>
                  <div className="text-xl font-bold text-white">150M AED</div>
                  <div className="text-xs text-emerald-400">Full programmatic</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ============================================ */}
      {/* MARKET TAB */}
      {/* ============================================ */}
      {activeTab === 'market' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Market Opportunity */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">Market Opportunity</h2>
            <p className="text-slate-400 mb-6">UAE digital advertising is a $1.5B market growing at 20% YoY -- in-app is the fastest segment</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { label: 'UAE Digital Ad Market', value: marketData.totalMarket, color: 'text-pink-400' },
                { label: 'YoY Growth', value: marketData.growth, color: 'text-emerald-400' },
                { label: 'Fastest Segment', value: marketData.fastestSegment, color: 'text-blue-400' },
                { label: 'Digital Penetration', value: marketData.uaeDigitalPenetration, color: 'text-purple-400' },
                { label: 'Mobile Ad Share', value: marketData.mobileAdShare, color: 'text-amber-400' },
                { label: 'Programmatic Growth', value: marketData.programmaticGrowth, color: 'text-cyan-400' },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 text-center">
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Market Dynamics */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">UAE Market Dynamics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-emerald-400 font-bold mb-3">Tailwinds</h4>
                  <ul className="space-y-2">
                    {[
                      'UAE smartphone penetration >98%, highest globally',
                      'Young, affluent, tech-savvy population',
                      'E-commerce growing 25% annually post-COVID',
                      'Government push for digital economy (Dubai Digital Strategy)',
                      'Cookie deprecation increases value of first-party data',
                      'SME sector expanding with government support programs',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                        <TrendingUp className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-amber-400 font-bold mb-3">Challenges</h4>
                  <ul className="space-y-2">
                    {[
                      'Dominant global players (Google, Meta) with deep pockets',
                      'Small market size vs. global platforms',
                      'Privacy regulation evolution (UAE PDPL)',
                      'High customer acquisition costs for advertisers',
                      'Need critical mass of users for targeting to work',
                      'Agency inertia -- most media budgets go through agencies tied to incumbents',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                        <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Competitor Analysis */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">Competitor Analysis</h2>
            <p className="text-slate-400 mb-6">Adzy&apos;s unfair advantage: closed-loop attribution that proves real ROI</p>

            <div className="space-y-4">
              {competitors.map((comp, i) => (
                <div key={i} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden">
                  <button
                    onClick={() => setExpandedCompetitor(expandedCompetitor === i ? null : i)}
                    className="w-full p-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/30">
                        <Globe className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold">{comp.name}</h3>
                        <p className="text-slate-500 text-xs">~{comp.marketShare} UAE digital ad share</p>
                      </div>
                    </div>
                    {expandedCompetitor === i ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </button>
                  {expandedCompetitor === i && (
                    <div className="px-5 pb-5">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                          <h4 className="text-blue-400 font-bold text-sm mb-2">Their Strength</h4>
                          <p className="text-slate-300 text-sm">{comp.strength}</p>
                        </div>
                        <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
                          <h4 className="text-red-400 font-bold text-sm mb-2">Their Weakness</h4>
                          <p className="text-slate-300 text-sm">{comp.weakness}</p>
                        </div>
                        <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/30">
                          <h4 className="text-emerald-400 font-bold text-sm mb-2">Adzy Advantage</h4>
                          <p className="text-slate-300 text-sm">{comp.adzyAdvantage}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Adzy Moat */}
            <div className="mt-6 bg-gradient-to-r from-pink-500/10 to-emerald-500/10 rounded-xl p-6 border border-pink-500/30">
              <h3 className="text-lg font-bold text-pink-400 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" /> Adzy Competitive Moat
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { title: 'Closed-Loop Attribution', desc: 'See ad, click, purchase, measure -- all within our ecosystem. No one else in UAE can do this.' },
                  { title: 'First-Party Data Scale', desc: '5M+ users across 60+ apps. No cookie dependency, no iOS tracking issues.' },
                  { title: 'Ecosystem Lock-In', desc: 'Merchants already on BizOne/Wasil -- Adzy is the natural next step, zero friction to start advertising.' },
                  { title: 'Local Market Expertise', desc: 'Built for UAE/GCC: Arabic-first, local payment, understands the market that global players treat as an afterthought.' },
                ].map((moat, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4">
                    <h4 className="text-white font-bold text-sm mb-2">{moat.title}</h4>
                    <p className="text-slate-400 text-xs">{moat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Risk Analysis */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Risk Analysis</h2>
            <p className="text-slate-400 mb-6">Identified risks with active mitigation strategies</p>

            <div className="space-y-4">
              {risks.map((risk, i) => (
                <div key={i} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden">
                  <button
                    onClick={() => setExpandedRisk(expandedRisk === i ? null : i)}
                    className="w-full p-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg ${
                        risk.severity === 'High' ? 'bg-red-500/10 border-red-500/30' :
                        risk.severity === 'Medium' ? 'bg-amber-500/10 border-amber-500/30' :
                        'bg-blue-500/10 border-blue-500/30'
                      } flex items-center justify-center border`}>
                        <risk.icon className={`w-5 h-5 ${risk.color}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-white font-bold">{risk.risk}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            risk.severity === 'High' ? 'bg-red-500/20 text-red-400' :
                            risk.severity === 'Medium' ? 'bg-amber-500/20 text-amber-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {risk.severity}
                          </span>
                        </div>
                        <p className="text-slate-500 text-xs mt-0.5">{risk.description}</p>
                      </div>
                    </div>
                    {expandedRisk === i ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </button>
                  {expandedRisk === i && (
                    <div className="px-5 pb-5">
                      <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/30">
                        <h4 className="text-emerald-400 font-bold text-sm mb-2 flex items-center gap-2">
                          <Shield className="w-4 h-4" /> Mitigation Strategy
                        </h4>
                        <p className="text-slate-300 text-sm">{risk.mitigation}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* ============================================ */}
      {/* ECOSYSTEM TAB */}
      {/* ============================================ */}
      {activeTab === 'ecosystem' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Ecosystem Integration</h2>
            <p className="text-slate-400">Adzy ads appear across ALL Nuqta apps -- a single campaign reaches every surface</p>
          </div>

          {/* Integration Flow Diagram */}
          <div className="bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-xl p-6 border border-pink-500/30 mb-8">
            <h3 className="text-lg font-bold text-pink-400 mb-4 text-center">The Adzy Flywheel</h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <span className="bg-pink-500/20 text-pink-400 px-4 py-2 rounded-lg border border-pink-500/30 font-bold">
                Merchant creates campaign on Adzy
              </span>
              <ArrowRight className="w-5 h-5 text-slate-500" />
              <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg border border-blue-500/30 font-bold">
                Ads served across 60+ Nuqta apps
              </span>
              <ArrowRight className="w-5 h-5 text-slate-500" />
              <span className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg border border-emerald-500/30 font-bold">
                User sees ad, clicks, purchases
              </span>
              <ArrowRight className="w-5 h-5 text-slate-500" />
              <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg border border-purple-500/30 font-bold">
                Attribution verified, ROI measured
              </span>
              <ArrowRight className="w-5 h-5 text-slate-500" />
              <span className="bg-amber-500/20 text-amber-400 px-4 py-2 rounded-lg border border-amber-500/30 font-bold">
                Merchant sees results, increases spend
              </span>
            </div>
          </div>

          {/* Per-App Integrations */}
          <div className="space-y-6">
            {ecosystemIntegrations.map((integration, i) => (
              <div key={i} className={`${integration.bgColor} rounded-xl p-6 border border-slate-700/50`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${integration.bgColor} flex items-center justify-center border border-slate-700/50 flex-shrink-0`}>
                    <integration.icon className={`w-6 h-6 ${integration.color}`} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${integration.color}`}>{integration.app}</h3>
                    <p className="text-slate-400 text-sm mt-1">{integration.impact}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-16">
                  {integration.surfaces.map((surface, j) => (
                    <div key={j} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle className={`w-4 h-4 ${integration.color} flex-shrink-0`} />
                      {surface}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Cross-Ecosystem Example */}
          <div className="mt-8 bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" /> Real-World Example: Pizza Merchant Campaign
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '1', title: 'Create Campaign', desc: 'Pizza merchant uses Adzy self-serve to create a "30% off large pizza" campaign targeting users within 3km who ordered food last week.', color: 'text-pink-400', border: 'border-pink-500/30' },
                { step: '2', title: 'Multi-Surface Delivery', desc: 'Ad appears as sponsored listing in Wasil, push notification via LocalEdge when user is nearby, banner in BizOne, and native feed ad.', color: 'text-blue-400', border: 'border-blue-500/30' },
                { step: '3', title: 'Conversion', desc: 'User sees ad in Wasil, taps sponsored listing, orders a large pizza with 30% discount. Payment processed through Rabtul wallet.', color: 'text-emerald-400', border: 'border-emerald-500/30' },
                { step: '4', title: 'Attribution & Reporting', desc: 'Adzy attributes the sale to the campaign. Merchant sees: 500 impressions, 45 clicks, 12 orders, 8.2x ROAS -- all in real-time dashboard.', color: 'text-amber-400', border: 'border-amber-500/30' },
              ].map((step, i) => (
                <div key={i} className={`bg-slate-900/50 rounded-lg p-4 border ${step.border}`}>
                  <div className={`text-2xl font-black ${step.color} mb-2`}>{step.step}</div>
                  <h4 className="text-white font-bold text-sm mb-2">{step.title}</h4>
                  <p className="text-slate-400 text-xs">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* ============================================ */}
      {/* TOOLS TAB (For Merchants + For Advertisers) */}
      {/* ============================================ */}
      {activeTab === 'tools' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* For Merchants */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <Store className="w-7 h-7 text-pink-400" />
              <h2 className="text-2xl font-bold text-white">For Merchants</h2>
            </div>
            <p className="text-slate-400 mb-6">Self-serve tools that let any merchant launch, manage, and optimize ad campaigns in minutes</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {merchantTools.map((tool, i) => (
                <div key={i} className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50 hover:border-pink-500/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center border border-pink-500/30 flex-shrink-0">
                      <tool.icon className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{tool.name}</h3>
                      <p className="text-slate-400 text-sm mt-1">{tool.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Merchant Dashboard Preview */}
            <div className="mt-6 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-xl p-6 border border-pink-500/30">
              <h3 className="text-lg font-bold text-pink-400 mb-4">Merchant Dashboard Preview</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Active Campaigns', value: '3', change: '+1 this week' },
                  { label: 'Total Impressions', value: '125K', change: '+18% vs last month' },
                  { label: 'Clicks', value: '4.2K', change: 'CTR 3.4%' },
                  { label: 'ROAS', value: '4.1x', change: 'Target: 3x' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 text-center">
                    <div className="text-xl font-bold text-white">{item.value}</div>
                    <div className="text-sm text-pink-400">{item.label}</div>
                    <div className="text-xs text-emerald-400 mt-1">{item.change}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* For Advertisers / Agencies */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="w-7 h-7 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">For Advertisers & Agencies</h2>
            </div>
            <p className="text-slate-400 mb-6">Enterprise-grade tools for agencies managing multiple merchant accounts at scale</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {agencyTools.map((tool, i) => (
                <div key={i} className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/30 flex-shrink-0">
                      <tool.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{tool.name}</h3>
                      <p className="text-slate-400 text-sm mt-1">{tool.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* API Documentation Preview */}
            <div className="mt-6 bg-slate-800/30 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                <Code className="w-5 h-5" /> API Endpoints (Preview)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { method: 'POST', endpoint: '/v1/campaigns', desc: 'Create new campaign' },
                  { method: 'GET', endpoint: '/v1/campaigns/:id/stats', desc: 'Get campaign performance' },
                  { method: 'PUT', endpoint: '/v1/campaigns/:id/budget', desc: 'Update budget' },
                  { method: 'POST', endpoint: '/v1/audiences', desc: 'Create audience segment' },
                  { method: 'GET', endpoint: '/v1/reports/attribution', desc: 'Attribution report' },
                  { method: 'POST', endpoint: '/v1/creatives/upload', desc: 'Upload ad creative' },
                ].map((api, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                      api.method === 'POST' ? 'bg-emerald-500/20 text-emerald-400' :
                      api.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-amber-500/20 text-amber-400'
                    }`}>
                      {api.method}
                    </span>
                    <code className="text-pink-400 text-xs font-mono flex-1">{api.endpoint}</code>
                    <span className="text-slate-500 text-xs">{api.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ============================================ */}
      {/* ROADMAP TAB */}
      {/* ============================================ */}
      {activeTab === 'roadmap' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Product Roadmap</h2>
            <p className="text-slate-400">Four phases from self-serve basics to full programmatic exchange</p>
          </div>

          <div className="space-y-6">
            {roadmapPhases.map((phase, i) => (
              <div key={i} className={`${phase.bgColor} rounded-xl p-6 border-2 ${phase.borderColor}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl ${phase.bgColor} flex items-center justify-center border ${phase.borderColor}`}>
                    <span className={`text-xl font-black ${phase.color}`}>{i + 1}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className={`text-xl font-bold ${phase.color}`}>{phase.phase}: {phase.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        phase.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400' :
                        phase.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-slate-700/50 text-slate-400'
                      }`}>
                        {phase.status === 'in-progress' ? 'In Progress' : phase.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className={`w-4 h-4 ${phase.color}`} />
                      <span className="text-slate-400 text-sm">{phase.timeline}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ml-[4.5rem]">
                  {phase.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-slate-300 text-sm">
                      {phase.status === 'completed' ? (
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      ) : (
                        <div className={`w-1.5 h-1.5 rounded-full ${phase.color.replace('text-', 'bg-')}`} />
                      )}
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Summary */}
          <div className="mt-8 bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-bold text-white mb-4">Key Milestones</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700/50" />
              <div className="space-y-6">
                {[
                  { date: 'Q1 2025', event: 'Merchant Ads Manager MVP launch', status: 'done', color: 'bg-emerald-400' },
                  { date: 'Q2 2025', event: '1,000th merchant onboarded', status: 'done', color: 'bg-emerald-400' },
                  { date: 'Q3 2025', event: 'ML-powered targeting engine live', status: 'current', color: 'bg-blue-400' },
                  { date: 'Q4 2025', event: 'Real-time bidding (RTB) engine', status: 'current', color: 'bg-blue-400' },
                  { date: 'Q1 2026', event: 'Influencer marketplace beta', status: 'upcoming', color: 'bg-purple-400' },
                  { date: 'Q2 2026', event: '5,000th merchant, 50M impressions/day', status: 'upcoming', color: 'bg-purple-400' },
                  { date: 'Q3 2026', event: 'Programmatic exchange launch', status: 'upcoming', color: 'bg-amber-400' },
                  { date: 'Q4 2026', event: 'Physical media integration, agency tools', status: 'upcoming', color: 'bg-amber-400' },
                ].map((milestone, i) => (
                  <div key={i} className="flex items-start gap-4 ml-1">
                    <div className={`w-6 h-6 rounded-full ${milestone.color} flex items-center justify-center flex-shrink-0 z-10 ${
                      milestone.status === 'done' ? '' :
                      milestone.status === 'current' ? 'ring-4 ring-blue-400/20' : 'opacity-50'
                    }`}>
                      {milestone.status === 'done' ? (
                        <CheckCircle className="w-4 h-4 text-white" />
                      ) : milestone.status === 'current' ? (
                        <Clock className="w-3 h-3 text-white" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{milestone.event}</div>
                      <div className="text-xs text-slate-500">{milestone.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ============================================ */}
      {/* PITCH DECK TAB */}
      {/* ============================================ */}
      {activeTab === 'deck' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-8">
            {/* Investment Thesis */}
            <div className="bg-gradient-to-r from-pink-500/20 to-pink-500/5 rounded-2xl p-6 border border-pink-500/30">
              <h2 className="text-2xl font-bold text-white mb-2">Investment Thesis</h2>
              <p className="text-slate-300 leading-relaxed">
                Adzy is the only closed-loop advertising platform in the MENA region — tracking from ad impression to verified purchase
                across 60+ app surfaces and 5,000+ merchants. With first-party data from the entire Nuqta ecosystem (no cookie dependency),
                Adzy is building the &quot;Amazon Ads&quot; of the Middle East with 70% gross margins at scale.
              </p>
            </div>

            {/* Market Opportunity */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Market Opportunity</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'TAM', value: '$2B+', detail: 'UAE Digital Ad Market' },
                  { label: 'SAM', value: '$500M', detail: 'In-App & Retail Media Segment' },
                  { label: 'SOM', value: '$100M', detail: 'Year 3 Adzy Revenue Target' },
                ].map(m => (
                  <div key={m.label} className="bg-slate-800/30 rounded-xl p-4 text-center border border-slate-700/50">
                    <div className="text-xs text-slate-400">{m.label}</div>
                    <div className="text-2xl font-black text-white mt-1">{m.value}</div>
                    <div className="text-xs text-slate-500 mt-1">{m.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Differentiators */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Key Differentiators</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: 'Closed-Loop Attribution', desc: 'Track from impression to verified purchase — real ROI, not estimates' },
                  { title: 'First-Party Data Only', desc: 'All targeting from 60+ Nuqta apps. No third-party cookies, no iOS issues' },
                  { title: 'Cross-Ecosystem Reach', desc: 'Single campaign across Wasil, BizOne, Safar — one budget, 60+ surfaces' },
                  { title: 'Pay Per Result', desc: 'CPM, CPC, or CPA — merchants choose. Only pay for real results' },
                  { title: 'Self-Serve in Minutes', desc: 'Any merchant launches a campaign in under 5 minutes with AI optimization' },
                  { title: 'AI-Powered Targeting', desc: '7 targeting dimensions: behavioral, location, demographic, interest, contextual, retargeting, lookalike' },
                ].map(d => (
                  <div key={d.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                    <div><div className="text-white font-medium text-sm">{d.title}</div>
                    <div className="text-xs text-slate-400">{d.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Year Financials */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Financial Projections</h3>
              <table className="w-full text-sm">
                <thead><tr className="border-b border-slate-700">
                  <th className="text-left py-2 text-slate-400">Metric</th>
                  <th className="text-right py-2 text-slate-400">Year 1</th>
                  <th className="text-right py-2 text-slate-400">Year 2</th>
                  <th className="text-right py-2 text-slate-400">Year 3</th>
                </tr></thead>
                <tbody>
                  <tr className="border-b border-slate-700/50"><td className="py-2 text-slate-300">Merchants</td><td className="text-right text-white">500</td><td className="text-right text-white">2,000</td><td className="text-right text-white">5,000</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-2 text-slate-300">Revenue (AED M)</td><td className="text-right text-pink-400 font-bold">8M</td><td className="text-right text-pink-400 font-bold">35M</td><td className="text-right text-pink-400 font-bold">100M</td></tr>
                  <tr><td className="py-2 text-slate-300">Net Profit (AED M)</td><td className="text-right text-emerald-400">3M</td><td className="text-right text-emerald-400">21M</td><td className="text-right text-emerald-400">70M</td></tr>
                </tbody>
              </table>
            </div>

            {/* Comparable Companies */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Comparable Companies</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'The Trade Desk', val: '$40B', metric: 'Programmatic DSP, open web' },
                  { name: 'Criteo', val: '$2B', metric: 'Retail media + retargeting' },
                  { name: 'Amazon Ads', val: '$50B+ rev', metric: 'Retail media on Amazon' },
                  { name: 'Instacart Ads', val: '$10B+', metric: 'Grocery retail media' },
                ].map(c => (
                  <div key={c.name} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
                    <div className="text-sm font-bold text-white">{c.name}</div>
                    <div className="text-lg font-black text-pink-400 mt-1">{c.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{c.metric}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unicorn Path */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ArrowUpRight className="w-5 h-5" /> Unicorn Path
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { ms: '500 merchants', val: '~8M AED', detail: 'Q4 2025 — ~$25M valuation' },
                  { ms: '2,000 merchants', val: '~35M AED', detail: 'Q4 2026 — ~$120M valuation' },
                  { ms: '5,000 merchants', val: '~100M AED', detail: 'Q4 2027 — ~$400M valuation' },
                  { ms: '15,000 merchants', val: '~300M AED', detail: '2029+ — ~$1B+ valuation' },
                ].map(m => (
                  <div key={m.ms} className="bg-slate-900/50 rounded-lg p-3 border border-pink-500/20">
                    <div className="text-xs text-pink-400 font-bold">{m.ms}</div>
                    <div className="text-sm font-bold text-white mt-1">{m.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{m.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RTMN Multiplier */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-transparent rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-[#c9a227] mb-3">RTMN Ecosystem Multiplier</h3>
              <p className="text-slate-300 text-sm mb-4">Every RTMN app is an ad surface. Every transaction is attribution data. Adzy sits at the center of the ecosystem&apos;s monetization engine.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { product: 'Captive Merchants', role: 'BizOne + Wasil merchants = zero cold outreach' },
                  { product: 'Purchase Data Moat', role: 'More transactions = better targeting = higher ROAS' },
                  { product: 'Cross-App Signals', role: 'Sushi order + Tokyo flight = Japanese restaurant ads' },
                  { product: 'Near-Zero Marginal Cost', role: 'Ad infra exists across all apps already' },
                  { product: 'AI-R Intelligence', role: 'Predict who buys, when, and what' },
                  { product: 'Rabtul Identity', role: 'SSO user graph + consent management' },
                ].map(s => (
                  <div key={s.product} className="bg-slate-800/50 rounded-lg px-3 py-2 border border-[#c9a227]/20">
                    <div className="text-xs font-bold text-[#c9a227]">{s.product}</div>
                    <div className="text-xs text-slate-400">{s.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ============================================ */}
      {/* NAVIGATION FOOTER */}
      {/* ============================================ */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Database className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/bizone" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-400 transition-colors">
              <Store className="w-5 h-5" /> BizOne
            </Link>
            <Link href="/nuqta-corp" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227]/80 text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Crown className="w-5 h-5" /> Nuqta Corp
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
