'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Gamepad2, Trophy, Coins, Zap, Star, Gift, Brain,
  Target, Eye, Puzzle, Map, BarChart3, TrendingUp,
  Users, Clock, Smartphone, DollarSign, Crown,
  CheckCircle, XCircle, ChevronDown, ChevronUp,
  ArrowRight, Shield, Rocket, Calendar, Store,
  Megaphone, Database, Layers, Award, Percent,
  Globe, Play, Heart, Sparkles, Timer, Dice1
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ============================================
// DATA: Hero Stats
// ============================================
const heroStats = [
  { label: 'App Size', value: '<5MB', icon: Smartphone, color: 'text-yellow-400', bgColor: 'bg-yellow-500/10', borderColor: 'border-yellow-500/30' },
  { label: 'Session Length', value: '30 sec', icon: Clock, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30' },
  { label: 'Game Types', value: '6', icon: Gamepad2, color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30' },
  { label: 'Target Users', value: '500K+', icon: Users, color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
  { label: 'Real Rewards', value: 'Nuqta Coins', icon: Coins, color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10', borderColor: 'border-[#c9a227]/30' },
];

// ============================================
// DATA: Controls & Does NOT Own
// ============================================
const controls = [
  'Game design & mechanics',
  'Reward distribution logic',
  'User engagement loops',
  'Ad placement within games',
  'Micro-game content library',
  'Leaderboard & ranking system',
  'Anti-cheat & fairness engine',
  'Session & retention analytics',
];

const doesNotOwn = [
  { item: 'Nuqta Coin ledger', reason: 'Managed by Nuqta Core' },
  { item: 'Ad inventory sourcing', reason: 'Supplied by Adzy' },
  { item: 'Merchant prize catalog', reason: 'Managed by BizOne merchants' },
  { item: 'Payment processing', reason: 'Handled by NuqtaPay / Rabtul' },
  { item: 'User identity & KYC', reason: 'Nuqta Core manages profiles' },
];

// ============================================
// DATA: 6 Game Categories
// ============================================
const gameCategories = [
  {
    id: 'daily-spin',
    name: 'Daily Spin Wheel',
    icon: Dice1,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    description: 'Classic spin-the-wheel mechanic. Guaranteed daily prize for every active user.',
    frequency: 'Once daily (free) + bonus spins via ads',
    rewardRange: '1-500 Nuqta Coins',
    mechanics: [
      '8-segment wheel with weighted probabilities',
      'Guaranteed minimum 1 coin per spin',
      'Streak bonuses: 7-day streak = 2x multiplier',
      'Watch ad for extra spin (max 3/day)',
      'Merchant-sponsored super segments (50-500 coins)',
      'Seasonal themed wheels with exclusive prizes',
    ],
  },
  {
    id: 'scratch-win',
    name: 'Scratch & Win',
    icon: Sparkles,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    description: 'Digital scratch cards with instant reveals. Merchant-branded cards with real product prizes.',
    frequency: '3 free cards/day + ad-unlocked extras',
    rewardRange: '5-1,000 Nuqta Coins or merchant vouchers',
    mechanics: [
      'Touch-to-scratch haptic feedback',
      'Match-3 symbols to win mechanic',
      'Merchant-branded card designs (BizOne partners)',
      'Tiered rarity: Common, Rare, Epic, Legendary',
      'Collect card sets for mega bonus rewards',
      'Social sharing for bonus scratch cards',
    ],
  },
  {
    id: 'trivia',
    name: 'Trivia Challenge',
    icon: Brain,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    description: 'Quick-fire knowledge quizzes. Local UAE culture, brands, and general knowledge.',
    frequency: 'Hourly tournaments + unlimited practice',
    rewardRange: '10-2,000 Nuqta Coins (tournament prizes)',
    mechanics: [
      '10 questions in 30 seconds each',
      'Speed bonus: faster answers = more coins',
      'Categories: UAE culture, food, sports, brands, geography',
      'Merchant-sponsored brand trivia rounds',
      'PvP live tournaments every hour',
      'Leaderboard with weekly champion rewards',
    ],
  },
  {
    id: 'memory-match',
    name: 'Memory Match',
    icon: Puzzle,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    description: 'Card-flip memory game. Match pairs to earn coins with difficulty scaling.',
    frequency: '5 free games/day + ad-unlocked rounds',
    rewardRange: '5-300 Nuqta Coins',
    mechanics: [
      '4x4 grid (easy) to 6x6 grid (hard)',
      'Time-based scoring: fewer moves = more coins',
      'Merchant logo pairs unlock bonus vouchers',
      'Progressive difficulty with coin multipliers',
      'Daily challenge mode with fixed rewards',
      'Compete against friends for bragging rights',
    ],
  },
  {
    id: 'treasure-hunt',
    name: 'Treasure Hunt',
    icon: Map,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    description: 'GPS-enabled treasure hunts near partner merchants. Drive real foot traffic.',
    frequency: 'Weekly hunts + merchant special events',
    rewardRange: '50-5,000 Nuqta Coins + merchant prizes',
    mechanics: [
      'GPS proximity triggers near BizOne merchants',
      'Scan QR codes at partner locations to collect',
      'Multi-step treasure maps with clue chains',
      'Merchant-funded prizes (free coffee, discounts)',
      'Team hunts with shared rewards',
      'Special Ramadan, Eid, and DSF event hunts',
    ],
  },
  {
    id: 'prediction',
    name: 'Prediction Games',
    icon: Target,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    description: 'Predict outcomes of sports, events, and trends. Social betting with coins only.',
    frequency: 'Event-driven + daily predictions',
    rewardRange: '10-10,000 Nuqta Coins',
    mechanics: [
      'Predict football match outcomes (UAE league + global)',
      'Stock-style predict: will gold price go up or down?',
      'Social predictions: which dish is most ordered today?',
      'Streak bonuses: 5 correct = jackpot entry',
      'Peer-vs-peer prediction challenges',
      'No real money; Nuqta Coins only (compliance safe)',
    ],
  },
];

// ============================================
// DATA: Coin Economy
// ============================================
const coinEconomy = [
  { action: 'Daily Spin', earn: '1-500', frequency: 'Daily', source: 'SpinZy', icon: Dice1 },
  { action: 'Scratch Card Win', earn: '5-1,000', frequency: '3x/day', source: 'SpinZy', icon: Sparkles },
  { action: 'Trivia Correct Answer', earn: '10-50', frequency: 'Per question', source: 'SpinZy', icon: Brain },
  { action: 'Memory Match Complete', earn: '5-300', frequency: '5x/day', source: 'SpinZy', icon: Puzzle },
  { action: 'Treasure Found', earn: '50-5,000', frequency: 'Weekly', source: 'SpinZy + Merchant', icon: Map },
  { action: 'Prediction Win', earn: '10-10,000', frequency: 'Per event', source: 'SpinZy', icon: Target },
  { action: 'Watch Ad Bonus', earn: '5-25', frequency: 'Up to 10x/day', source: 'Adzy', icon: Play },
  { action: 'Referral Bonus', earn: '100', frequency: 'Per friend', source: 'Nuqta Core', icon: Users },
];

// ============================================
// DATA: User Journey
// ============================================
const userJourney = [
  { step: '1', title: 'Download & Instant Play', desc: 'Ultra-lightweight <5MB download. No registration needed for first game. Guest mode with Nuqta login prompt after first win.', color: 'text-yellow-400', border: 'border-yellow-500/30' },
  { step: '2', title: 'First Spin & Win', desc: 'Guaranteed first-spin prize (minimum 10 coins). Immediate dopamine hit. Tutorial overlay explains coin value and redemption.', color: 'text-emerald-400', border: 'border-emerald-500/30' },
  { step: '3', title: 'Explore Game Modes', desc: 'Unlock all 6 game categories. Discover daily, hourly, and event-based games. Personalized recommendations based on play style.', color: 'text-purple-400', border: 'border-purple-500/30' },
  { step: '4', title: 'Earn & Accumulate', desc: 'Build coin balance through regular play. Track progress on leaderboards. Unlock achievement badges and streak rewards.', color: 'text-blue-400', border: 'border-blue-500/30' },
  { step: '5', title: 'Redeem Rewards', desc: 'Spend Nuqta Coins at BizOne merchants. Convert to Wasil delivery credits. Use for Safar travel discounts. Real value for real play.', color: 'text-[#c9a227]', border: 'border-[#c9a227]/30' },
  { step: '6', title: 'Invite & Compete', desc: 'Share referral codes for bonus coins. Challenge friends in PvP modes. Climb weekly leaderboards. Become a SpinZy Champion.', color: 'text-pink-400', border: 'border-pink-500/30' },
];

// ============================================
// DATA: Revenue Streams
// ============================================
const revenueStreams = [
  {
    id: 'ad-supported',
    name: 'Ad-Supported Play',
    share: '40%',
    icon: Eye,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    description: 'Rewarded video ads, interstitials between games, and banner ads during gameplay.',
    details: [
      'Rewarded video: watch 15-30s ad for extra spin/card/life',
      'Interstitial: full-screen ad between game sessions (every 3rd game)',
      'Banner ads: non-intrusive banners on leaderboard and menu screens',
      'Native ads: merchant promotions within game reward screens',
      'Avg eCPM: 18-35 AED (rewarded video highest)',
      'Fill rate target: 95%+ via Adzy network',
    ],
  },
  {
    id: 'merchant-sponsored',
    name: 'Merchant Sponsored Prizes',
    share: '30%',
    icon: Store,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    description: 'BizOne merchants fund prizes and branded game segments to drive foot traffic.',
    details: [
      'Branded scratch cards: merchant logo, products as prizes',
      'Sponsored spin wheel segments: "Win a free coffee from XYZ"',
      'Treasure hunt sponsorship: merchant funds QR prizes at their store',
      'Brand trivia: merchants pay for brand-awareness quiz rounds',
      'Cost per engagement: 2-8 AED (merchant pays per user interaction)',
      'Avg merchant spend: 3,000-15,000 AED/month',
    ],
  },
  {
    id: 'premium-tier',
    name: 'Premium Tier (SpinZy+)',
    share: '20%',
    icon: Crown,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    description: 'Monthly subscription removes ads, unlocks bonus features, and gives daily coin boosts.',
    details: [
      'Price: 19.99 AED/month or 149.99 AED/year',
      'Ad-free gameplay across all 6 game modes',
      '2x daily coin multiplier on all earnings',
      'Exclusive game modes: VIP Spin, Mega Scratch, Elite Trivia',
      'Early access to new games and seasonal events',
      'Target conversion: 5-8% of active users',
    ],
  },
  {
    id: 'data-insights',
    name: 'Data & Insights',
    share: '10%',
    icon: BarChart3,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    description: 'Anonymized engagement data sold to merchants and brands for consumer insights.',
    details: [
      'Engagement heatmaps: when and how users play',
      'Prize preference data: what rewards drive most engagement',
      'Demographic play patterns: age, location, game preferences',
      'Brand awareness lift reports for sponsored games',
      'A/B test results for merchant prize effectiveness',
      'Compliance: fully anonymized, GDPR/UAE PDPL compliant',
    ],
  },
];

// ============================================
// DATA: Unit Economics
// ============================================
const unitEconomics = [
  { metric: 'CAC', value: '2-5 AED', icon: Users, note: 'Viral loops drive organic growth' },
  { metric: 'ARPU (Ad)', value: '8 AED/mo', icon: Eye, note: 'Ad revenue per free user' },
  { metric: 'ARPU (Premium)', value: '20 AED/mo', icon: Crown, note: 'Premium subscriber value' },
  { metric: 'Blended ARPU', value: '9.5 AED/mo', icon: DollarSign, note: 'Across all users' },
  { metric: 'LTV', value: '85 AED', icon: TrendingUp, note: 'Avg 9-month retention' },
  { metric: 'LTV:CAC Ratio', value: '17-42x', icon: Percent, note: 'Extremely efficient' },
  { metric: 'D1 Retention', value: '65%', icon: Heart, note: 'Day 1 return rate' },
  { metric: 'D30 Retention', value: '28%', icon: Shield, note: 'Month 1 stickiness' },
];

// ============================================
// DATA: Ecosystem Integration
// ============================================
const ecosystemIntegrations = [
  {
    app: 'Nuqta Core',
    icon: Crown,
    color: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    impact: 'SpinZy coins are Nuqta Coins -- fully interoperable across the entire ecosystem',
    connections: ['Shared coin ledger', 'Unified user profile', 'Cross-app reward redemption', 'Single sign-on'],
  },
  {
    app: 'Adzy',
    icon: Megaphone,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    impact: 'Adzy fills all ad inventory within SpinZy -- rewarded video, interstitials, banners',
    connections: ['Rewarded video supply', 'Interstitial fill', 'Native ad placements', 'Merchant campaign targeting'],
  },
  {
    app: 'BizOne',
    icon: Store,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    impact: 'BizOne merchants sponsor prizes, fund branded games, and accept coin redemptions',
    connections: ['Sponsored prize catalog', 'Branded game content', 'QR treasure hunt locations', 'Coin redemption at POS'],
  },
  {
    app: 'Wasil',
    icon: Globe,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    impact: 'Coins earned in SpinZy can be spent on Wasil delivery orders as credits',
    connections: ['Delivery credit conversion', 'Restaurant-sponsored trivia', 'Order completion bonus games', 'Cross-promotion'],
  },
];

// ============================================
// DATA: Competitive Advantages
// ============================================
const competitiveAdvantages = [
  { title: 'Real Rewards, Not Points', desc: 'Unlike other gaming apps, SpinZy coins have real value -- redeemable at 500+ merchants across the Nuqta ecosystem.', icon: Coins, color: 'text-yellow-400' },
  { title: 'Ultra-Lightweight', desc: '<5MB app size means near-zero friction to download. Works on low-end devices and slow connections prevalent in emerging markets.', icon: Zap, color: 'text-emerald-400' },
  { title: '30-Second Sessions', desc: 'Designed for micro-moments: waiting in line, commuting, quick break. No time commitment needed.', icon: Timer, color: 'text-purple-400' },
  { title: 'Merchant-Funded Rewards', desc: 'BizOne merchants fund prizes to acquire customers, making SpinZy a self-sustaining reward engine.', icon: Store, color: 'text-blue-400' },
  { title: 'Closed-Loop Attribution', desc: 'Track the full journey: game played > ad seen > merchant visited > purchase made. Prove ROI to merchants.', icon: Target, color: 'text-pink-400' },
  { title: 'Viral by Design', desc: 'Referral bonuses, social sharing, PvP challenges, and leaderboards create organic viral loops.', icon: Users, color: 'text-[#c9a227]' },
];

// ============================================
// DATA: Technical Specs
// ============================================
const technicalSpecs = [
  { spec: 'App Size', value: '<5MB (APK/IPA)', icon: Smartphone },
  { spec: 'Framework', value: 'React Native + Expo', icon: Layers },
  { spec: 'Min OS', value: 'Android 8+ / iOS 14+', icon: Shield },
  { spec: 'Offline Mode', value: 'Daily Spin & Scratch (sync on reconnect)', icon: Globe },
  { spec: 'Load Time', value: '<2 seconds cold start', icon: Zap },
  { spec: 'Backend', value: 'Node.js + Redis (real-time leaderboards)', icon: Database },
  { spec: 'Anti-Cheat', value: 'Server-side validation + device fingerprinting', icon: Shield },
  { spec: 'Analytics', value: 'Mixpanel + custom event tracking', icon: BarChart3 },
];

// ============================================
// DATA: Product Roadmap
// ============================================
const roadmap = [
  { date: 'Q1 2026', event: 'SpinZy MVP: Daily Spin + Scratch & Win', status: 'done', color: 'bg-emerald-400' },
  { date: 'Q1 2026', event: 'Nuqta Coin integration live', status: 'done', color: 'bg-emerald-400' },
  { date: 'Q2 2026', event: 'Trivia Challenge + Memory Match launch', status: 'current', color: 'bg-blue-400' },
  { date: 'Q2 2026', event: 'Adzy ad network integration', status: 'current', color: 'bg-blue-400' },
  { date: 'Q3 2026', event: 'Treasure Hunt (GPS) + merchant QR codes', status: 'upcoming', color: 'bg-purple-400' },
  { date: 'Q3 2026', event: 'SpinZy+ premium tier launch', status: 'upcoming', color: 'bg-purple-400' },
  { date: 'Q4 2026', event: 'Prediction Games + PvP tournaments', status: 'upcoming', color: 'bg-amber-400' },
  { date: 'Q4 2026', event: '500K users milestone, GCC expansion prep', status: 'upcoming', color: 'bg-amber-400' },
];

// ============================================
// MAIN COMPONENT
// ============================================
export default function SpinZyPage() {
  const [expandedGame, setExpandedGame] = useState<string | null>(null);
  const [expandedRevenue, setExpandedRevenue] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <div className="bg-gradient-to-b from-[#0a1628] via-yellow-900/20 to-[#0a1628] border-b border-yellow-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-lg shadow-yellow-500/20">
              <Gamepad2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl font-black text-white">
                  SpinZy <span className="text-yellow-400">Games</span>
                </h1>
                <span className="bg-yellow-500/20 text-yellow-400 text-xs sm:text-sm px-3 py-1 rounded-full font-bold border border-yellow-500/50">
                  PLAY-TO-EARN
                </span>
              </div>
              <p className="text-yellow-400 text-lg mt-1">Viral Gaming App -- Earn Real Nuqta Coins</p>
              <p className="text-slate-500 text-sm">RTMN Group -- 100% Owned</p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-4xl mb-8">
            Ultra-lightweight (&lt;5MB) viral gaming app with 30-second micro-game sessions.
            Players earn real Nuqta Coins by playing 6 mini-game categories -- redeemable at 500+ merchants.
            Merchant-sponsored prizes, ad-supported play, and viral referral loops drive explosive growth.
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
      {/* CONTROLS & DOES NOT OWN */}
      {/* ============================================ */}
      <section className="bg-slate-800/30 border-b border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30">
              <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> SpinZy Controls
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
                {doesNotOwn.map((item, i) => (
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

      {/* ============================================ */}
      {/* 6 GAME CATEGORIES (Expandable) */}
      {/* ============================================ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <Gamepad2 className="w-7 h-7 text-yellow-400" /> 6 Micro-Game Categories
          </h2>
          <p className="text-slate-400">Each game is designed for 30-second sessions with real Nuqta Coin rewards</p>
        </div>

        <div className="space-y-4">
          {gameCategories.map((game) => (
            <div
              key={game.id}
              className={`${game.bgColor} border-2 ${game.borderColor} rounded-xl overflow-hidden`}
            >
              <button
                onClick={() => setExpandedGame(expandedGame === game.id ? null : game.id)}
                className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${game.bgColor} flex items-center justify-center border ${game.borderColor}`}>
                    <game.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${game.color}`} />
                  </div>
                  <div>
                    <h3 className={`text-base sm:text-xl font-bold ${game.color}`}>
                      {game.name}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-1">{game.description}</p>
                  </div>
                </div>
                {expandedGame === game.id ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {expandedGame === game.id && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <h4 className="text-white font-bold mb-2 text-sm flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400" /> Frequency
                      </h4>
                      <p className="text-slate-300 text-sm">{game.frequency}</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <h4 className="text-white font-bold mb-2 text-sm flex items-center gap-2">
                        <Coins className="w-4 h-4 text-yellow-400" /> Reward Range
                      </h4>
                      <p className="text-yellow-400 text-sm font-bold">{game.rewardRange}</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50 md:col-span-1">
                      <h4 className="text-white font-bold mb-2 text-sm flex items-center gap-2">
                        <Star className="w-4 h-4 text-amber-400" /> Game Type
                      </h4>
                      <p className="text-slate-300 text-sm">{game.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                    <h4 className="text-white font-bold mb-3 text-sm">Game Mechanics</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {game.mechanics.map((mechanic, i) => (
                        <div key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                          <CheckCircle className={`w-4 h-4 ${game.color} flex-shrink-0 mt-0.5`} />
                          {mechanic}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* ============================================ */}
      {/* COIN ECONOMY TABLE */}
      {/* ============================================ */}
      <section className="bg-slate-800/30 border-y border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <Coins className="w-7 h-7 text-[#c9a227]" /> Nuqta Coin Economy
          </h2>
          <p className="text-slate-400 mb-6">Every game action earns real Nuqta Coins -- redeemable across the ecosystem</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Action</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Coins Earned</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium hidden sm:table-cell">Frequency</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium hidden md:table-cell">Source</th>
                </tr>
              </thead>
              <tbody>
                {coinEconomy.map((row, i) => (
                  <tr key={i} className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <row.icon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-white font-medium">{row.action}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-yellow-400 font-bold">{row.earn}</td>
                    <td className="py-3 px-4 text-slate-300 hidden sm:table-cell">{row.frequency}</td>
                    <td className="py-3 px-4 text-slate-500 hidden md:table-cell">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* USER JOURNEY (6 Steps) */}
      {/* ============================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <ArrowRight className="w-7 h-7 text-yellow-400" /> User Journey
        </h2>
        <p className="text-slate-400 mb-6">From download to daily habit in 6 steps</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userJourney.map((step, i) => (
            <div key={i} className={`bg-slate-800/30 rounded-xl p-5 border ${step.border} hover:scale-[1.01] transition-transform`}>
              <div className={`text-3xl font-black ${step.color} mb-3`}>{step.step}</div>
              <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================ */}
      {/* REVENUE MODEL (Expandable) */}
      {/* ============================================ */}
      <section className="bg-slate-800/30 border-y border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <DollarSign className="w-7 h-7 text-emerald-400" /> Revenue Model
          </h2>
          <p className="text-slate-400 mb-6">Four diversified revenue streams with merchant-funded rewards at the core</p>

          <div className="space-y-4">
            {revenueStreams.map((stream) => (
              <div
                key={stream.id}
                className={`${stream.bgColor} border-2 ${stream.borderColor} rounded-xl overflow-hidden`}
              >
                <button
                  onClick={() => setExpandedRevenue(expandedRevenue === stream.id ? null : stream.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-12 h-12 rounded-xl ${stream.bgColor} flex items-center justify-center border ${stream.borderColor}`}>
                      <stream.icon className={`w-6 h-6 ${stream.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className={`text-base sm:text-lg font-bold ${stream.color}`}>{stream.name}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${stream.bgColor} ${stream.color} border ${stream.borderColor}`}>
                          {stream.share}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs sm:text-sm line-clamp-1">{stream.description}</p>
                    </div>
                  </div>
                  {expandedRevenue === stream.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {expandedRevenue === stream.id && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <h4 className="text-white font-bold mb-3 text-sm">Revenue Details</h4>
                      <div className="space-y-2">
                        {stream.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                            <CheckCircle className={`w-4 h-4 ${stream.color} flex-shrink-0 mt-0.5`} />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Revenue Split Visual */}
          <div className="mt-8 bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-white font-bold mb-4">Revenue Split at Scale (Year 2)</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-[4] bg-yellow-500/20 rounded-lg p-3 text-center border border-yellow-500/30">
                <div className="text-yellow-400 font-bold text-lg">40%</div>
                <div className="text-xs text-slate-400">Ad Revenue</div>
              </div>
              <div className="flex-[3] bg-emerald-500/20 rounded-lg p-3 text-center border border-emerald-500/30">
                <div className="text-emerald-400 font-bold text-lg">30%</div>
                <div className="text-xs text-slate-400">Merchant Sponsored</div>
              </div>
              <div className="flex-[2] bg-purple-500/20 rounded-lg p-3 text-center border border-purple-500/30">
                <div className="text-purple-400 font-bold text-lg">20%</div>
                <div className="text-xs text-slate-400">Premium (SpinZy+)</div>
              </div>
              <div className="flex-[1] bg-blue-500/20 rounded-lg p-3 text-center border border-blue-500/30">
                <div className="text-blue-400 font-bold text-lg">10%</div>
                <div className="text-xs text-slate-400">Data</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* UNIT ECONOMICS */}
      {/* ============================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <TrendingUp className="w-7 h-7 text-emerald-400" /> Unit Economics
        </h2>
        <p className="text-slate-400 mb-6">Viral acquisition + micro-session retention = exceptional economics</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {unitEconomics.map((item, i) => (
            <div key={i} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
              <item.icon className="w-5 h-5 text-emerald-400 mb-2" />
              <div className="text-xl font-bold text-white">{item.value}</div>
              <div className="text-sm text-emerald-400 font-medium">{item.metric}</div>
              <div className="text-xs text-slate-500 mt-1">{item.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================ */}
      {/* ECOSYSTEM INTEGRATION */}
      {/* ============================================ */}
      <section className="bg-slate-800/30 border-y border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <Layers className="w-7 h-7 text-[#c9a227]" /> Ecosystem Integration
          </h2>
          <p className="text-slate-400 mb-6">SpinZy connects deeply with 4 core Nuqta ecosystem products</p>

          {/* Integration Flow */}
          <div className="bg-gradient-to-br from-yellow-500/5 to-amber-500/5 rounded-xl p-6 border border-yellow-500/30 mb-8">
            <h3 className="text-lg font-bold text-yellow-400 mb-4 text-center">The SpinZy Flywheel</h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-lg border border-yellow-500/30 font-bold">
                User plays SpinZy
              </span>
              <ArrowRight className="w-5 h-5 text-slate-500" />
              <span className="bg-pink-500/20 text-pink-400 px-4 py-2 rounded-lg border border-pink-500/30 font-bold">
                Watches Adzy ad for bonus
              </span>
              <ArrowRight className="w-5 h-5 text-slate-500" />
              <span className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg border border-emerald-500/30 font-bold">
                Wins merchant prize
              </span>
              <ArrowRight className="w-5 h-5 text-slate-500" />
              <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg border border-blue-500/30 font-bold">
                Visits BizOne merchant
              </span>
              <ArrowRight className="w-5 h-5 text-slate-500" />
              <span className="bg-[#c9a227]/20 text-[#c9a227] px-4 py-2 rounded-lg border border-[#c9a227]/30 font-bold">
                Merchant reinvests in SpinZy
              </span>
            </div>
          </div>

          {/* Per-App Integrations */}
          <div className="space-y-4">
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
                  {integration.connections.map((conn, j) => (
                    <div key={j} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle className={`w-4 h-4 ${integration.color} flex-shrink-0`} />
                      {conn}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* COMPETITIVE ADVANTAGES */}
      {/* ============================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <Trophy className="w-7 h-7 text-yellow-400" /> Competitive Advantages
        </h2>
        <p className="text-slate-400 mb-6">Why SpinZy wins against standalone gaming and reward apps</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {competitiveAdvantages.map((adv, i) => (
            <div key={i} className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50 hover:border-yellow-500/30 transition-colors">
              <adv.icon className={`w-6 h-6 ${adv.color} mb-3`} />
              <h3 className="text-white font-bold mb-2">{adv.title}</h3>
              <p className="text-slate-400 text-sm">{adv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================ */}
      {/* TECHNICAL SPECS */}
      {/* ============================================ */}
      <section className="bg-slate-800/30 border-y border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <Smartphone className="w-7 h-7 text-blue-400" /> Technical Specifications
          </h2>
          <p className="text-slate-400 mb-6">Engineered for performance on any device</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {technicalSpecs.map((spec, i) => (
              <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                <spec.icon className="w-5 h-5 text-blue-400 mb-2" />
                <div className="text-white font-bold text-sm">{spec.spec}</div>
                <div className="text-slate-300 text-sm mt-1">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PRODUCT ROADMAP */}
      {/* ============================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <Rocket className="w-7 h-7 text-purple-400" /> Product Roadmap
        </h2>
        <p className="text-slate-400 mb-6">From MVP to 500K users in 4 quarters</p>

        <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700/50" />
            <div className="space-y-6">
              {roadmap.map((milestone, i) => (
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
      </section>

      {/* ============================================ */}
      {/* NAVIGATION FOOTER */}
      {/* ============================================ */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Database className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-[#0a1628] rounded-xl font-bold hover:bg-yellow-400 transition-colors">
              <Layers className="w-5 h-5" /> RTMN Ecosystem
            </Link>
            <Link href="/rtmn-dashboard" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227]/80 text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <BarChart3 className="w-5 h-5" /> RTMN Dashboard
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
