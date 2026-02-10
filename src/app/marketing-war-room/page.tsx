'use client';

import React, { useState } from 'react';
import {
  Rocket, Target, Zap, Users, Store, TrendingUp, DollarSign,
  CheckCircle, AlertCircle, Clock, Calendar, Megaphone, Gift,
  Shield, BarChart3, Mail, MessageSquare, Phone, Camera,
  QrCode, Map, Trophy, Star, Share2, Sparkles, Play, Pause,
  ChevronDown, ChevronUp, Copy, ExternalLink, FileText, Video,
  Send, UserPlus, Briefcase, CreditCard, Lock, Crown, Flame,
  Eye, Bell, RefreshCw, Heart, Coffee, Smartphone, Globe,
  Award, Layers, PieChart, Activity, Lightbulb, Brain, Gem,
  Network, Repeat, Timer, Hash, Link as LinkIcon, Image, Film, Mic,
  Radio, Tv, Newspaper, Package, ShoppingCart, Percent,
  ArrowRight, ArrowUp, ArrowDown, Minus, Plus, X, Check
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';
import MarketingNav from '@/components/MarketingNav';

// =============================================================================
// ELITE MARKETING TEAM - Virtual Experts
// =============================================================================
const marketingTeam = [
  {
    name: 'Sarah Chen',
    role: 'Chief Growth Strategist',
    expertise: 'Viral loops, referral systems, product-led growth',
    background: 'Ex-Dropbox, scaled from 100K to 500M users',
    avatar: '👩‍💼',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    name: 'Marcus Williams',
    role: 'Performance Marketing Lead',
    expertise: 'Paid acquisition, CAC optimization, attribution',
    background: 'Ex-Uber, managed $50M+ ad spend',
    avatar: '👨‍💻',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Priya Sharma',
    role: 'Brand & Content Director',
    expertise: 'UGC, influencer marketing, brand virality',
    background: 'Ex-Gymshark, built $500M brand through creators',
    avatar: '👩‍🎨',
    color: 'from-pink-500 to-rose-500'
  },
  {
    name: 'Ahmed Al-Rashid',
    role: 'MENA Market Specialist',
    expertise: 'UAE/GCC consumer behavior, local partnerships',
    background: 'Ex-Careem, launched in 15 MENA cities',
    avatar: '👨‍💼',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    name: 'Lisa Park',
    role: 'Retention & Lifecycle Expert',
    expertise: 'Cohort analysis, win-back, LTV optimization',
    background: 'Ex-Spotify, 40% retention improvement',
    avatar: '👩‍🔬',
    color: 'from-amber-500 to-orange-500'
  },
  {
    name: 'David Okonkwo',
    role: 'Merchant Acquisition Lead',
    expertise: 'B2B sales, partnership development, merchant success',
    background: 'Ex-Square, onboarded 100K+ SMBs',
    avatar: '👨‍🏫',
    color: 'from-green-500 to-lime-500'
  }
];

// =============================================================================
// FORENSIC CAMPAIGN ANALYSIS - 20 Iconic Campaigns
// =============================================================================
const viralCampaigns = [
  // REFERRAL & VIRAL LOOPS
  {
    id: 1,
    category: 'Referral Systems',
    name: 'Dropbox Space Race',
    company: 'Dropbox',
    year: '2008-2010',
    thesis: 'Two-sided referral with visible progress meter creates compounding viral growth',
    icon: '📦',

    // DEEP METRICS
    metrics: {
      growth: '3900% in 15 months',
      cac: '$0 (organic viral)',
      viralCoefficient: '1.2-1.4',
      conversionRate: '35% of invites converted',
      ltv: '$120 average'
    },

    // EXACT MECHANICS
    mechanics: {
      trigger: 'User runs out of free storage',
      action: 'Invite friends via email/social',
      reward: 'Both get 500MB per successful invite',
      feedback: 'Progress bar shows space earned vs goal',
      cap: 'Up to 16GB free through referrals'
    },

    // WHY IT WORKED
    whyItWorked: [
      'Scarcity: Limited storage created urgency',
      'Mutual benefit: Both parties rewarded equally',
      'Visible progress: Meter showed tangible gains',
      'Zero friction: One-click invite process',
      'Product utility: Reward was core product value'
    ],

    // CREATIVE HOOKS
    creativeHooks: [
      '"Get 500MB free — share with a friend"',
      '"You\'re 80% to your next GB!"',
      '"John just joined — you both got 500MB!"'
    ],

    // FAILURE MODES
    failureModes: [
      'Reward ceiling hit (16GB max)',
      'Power users gamed with fake emails',
      'Diminishing returns after network saturated'
    ],

    // NUQTA APPLICATION
    nuqtaApplication: {
      userCampaign: 'Tiered coin referral: 500 → 750 → 1000 coins for streaks',
      merchantCampaign: 'Merchant refers merchant: AED 500 credit when referral hits GMV target',
      keyAdaptation: 'Add visible "Coins earned from friends" counter in app',
      expectedImpact: 'K-factor 0.8 → 1.2 (viral growth threshold)'
    }
  },
  {
    id: 2,
    category: 'Referral Systems',
    name: 'PayPal Sign-up Bonus',
    company: 'PayPal',
    year: '1999-2000',
    thesis: 'Direct cash incentive for sign-ups creates exponential network effect',
    icon: '💳',

    metrics: {
      growth: '7-10% daily user growth',
      cac: '$20 per user (paid out)',
      viralCoefficient: '1.1',
      conversionRate: '50%+ of invites',
      ltv: '$40+ transaction fees over time'
    },

    mechanics: {
      trigger: 'User signs up',
      action: 'Refer friends via email',
      reward: '$10 for referrer, $10 for referee',
      feedback: 'Instant credit to PayPal balance',
      cap: 'Initially uncapped, later limited'
    },

    whyItWorked: [
      'Cash is universal motivator',
      'Instant gratification (immediate credit)',
      'Network effect: More users = more useful',
      'Low barrier: Just email address needed',
      'Aligned incentives: Users wanted friends on platform'
    ],

    creativeHooks: [
      '"Get $10 when you sign up"',
      '"Send $10 to a friend — they get $10 too"',
      '"The more friends, the more money"'
    ],

    failureModes: [
      'Massive fraud (fake accounts)',
      'Cost $60-70M before product-market fit',
      'Had to reduce then eliminate bonus'
    ],

    nuqtaApplication: {
      userCampaign: 'AED 25 instant coins (worth AED 2.50) on signup + first transaction',
      merchantCampaign: 'AED 100 marketing credit for first 10 transactions',
      keyAdaptation: 'Require transaction to unlock bonus (fraud prevention)',
      expectedImpact: '3x signup rate, 60% activation within 7 days'
    }
  },
  {
    id: 3,
    category: 'Referral Systems',
    name: 'Uber Ride Credits',
    company: 'Uber',
    year: '2012-2016',
    thesis: 'City-by-city referral with localized incentives creates density before expansion',
    icon: '🚗',

    metrics: {
      growth: '10x year-over-year in early years',
      cac: '$20-50 depending on city',
      viralCoefficient: '0.6-0.9 per city',
      conversionRate: '25% of shares converted',
      ltv: '$200+ per active rider'
    },

    mechanics: {
      trigger: 'After completing a ride',
      action: 'Share referral code',
      reward: '$20 credit for both parties (varied by city)',
      feedback: '"Your friend took their first ride!"',
      cap: 'Varied by promotion period'
    },

    whyItWorked: [
      'Geo-targeting: Different rewards per city',
      'Timing: Post-ride is peak satisfaction moment',
      'Tangible value: Free ride is clear benefit',
      'Social proof: "Everyone is using Uber"',
      'Low commitment: Try once, no subscription'
    ],

    creativeHooks: [
      '"Give $20, Get $20"',
      '"Your next ride is on [Friend Name]"',
      '"Share the ride, share the savings"'
    ],

    failureModes: [
      'Referral fatigue in saturated markets',
      'Driver supply constraints limited growth',
      'Competitors copied exact mechanics'
    ],

    nuqtaApplication: {
      userCampaign: 'Area-specific bonuses: 2x coins in new merchant zones',
      merchantCampaign: 'First-mover advantage: Extra visibility for early adopters per area',
      keyAdaptation: 'Focus on merchant density before user acquisition per neighborhood',
      expectedImpact: '40% higher retention in dense merchant areas'
    }
  },

  // GAMIFICATION & REWARDS
  {
    id: 4,
    category: 'Gamification',
    name: 'Starbucks Rewards',
    company: 'Starbucks',
    year: '2009-present',
    thesis: 'Tiered loyalty with visible progress and status creates habitual purchasing',
    icon: '☕',

    metrics: {
      growth: '31M active members (US)',
      cac: 'Near $0 (organic sign-ups)',
      viralCoefficient: '0.3 (low but consistent)',
      conversionRate: '50% of transactions via rewards',
      ltv: '3x higher than non-members'
    },

    mechanics: {
      trigger: 'Any purchase',
      action: 'Earn stars per dollar spent',
      reward: 'Free drinks/food at thresholds',
      feedback: 'Star counter, tier status, personalized offers',
      cap: 'Gold status unlocks best rewards'
    },

    whyItWorked: [
      'Psychological ownership: "My stars"',
      'Status tiers: Green → Gold creates aspiration',
      'Personalization: Birthday rewards, favorites',
      'Mobile-first: App makes it frictionless',
      'Gamified progress: Always X stars away from reward'
    ],

    creativeHooks: [
      '"You\'re 15 stars away from a free drink"',
      '"Congratulations! You\'ve reached Gold status"',
      '"Double star day — today only"'
    ],

    failureModes: [
      'Devaluation complaints when program changed',
      'Complexity confusion with multiple earn rates',
      'Heavy users felt entitled, light users disengaged'
    ],

    nuqtaApplication: {
      userCampaign: 'Nuqta tiers: Bronze (0) → Silver (5K) → Gold (15K) → Platinum (50K) coins',
      merchantCampaign: 'Merchant tiers with increasing visibility and lower commission',
      keyAdaptation: 'Weekly "Double Coin Days" at select merchants',
      expectedImpact: '2.5x transaction frequency for Gold+ members'
    }
  },
  {
    id: 5,
    category: 'Gamification',
    name: 'Duolingo Streaks',
    company: 'Duolingo',
    year: '2012-present',
    thesis: 'Loss aversion through streaks creates daily habit stronger than rewards',
    icon: '🦉',

    metrics: {
      growth: '500M+ downloads',
      cac: '$0.50-2.00 for active learner',
      viralCoefficient: '0.4',
      conversionRate: '6.6% to paid',
      ltv: '$100+ for premium subscribers'
    },

    mechanics: {
      trigger: 'Daily login',
      action: 'Complete one lesson',
      reward: 'Streak maintained + XP',
      feedback: 'Streak count, fire icon, friends leaderboard',
      cap: 'Unlimited streak potential'
    },

    whyItWorked: [
      'Loss aversion: Losing streak hurts more than gaining',
      'Social pressure: Friends can see your streak',
      'Micro-commitment: Just 5 minutes per day',
      'Mascot notifications: Duo guilts you back',
      'Streak freeze: Pay to protect (monetization)'
    ],

    creativeHooks: [
      '"Don\'t break your 47-day streak!"',
      '"Duo is sad you haven\'t practiced today"',
      '"You\'re on fire! 🔥 Keep it going!"'
    ],

    failureModes: [
      'Anxiety around streaks (some users quit entirely)',
      'Gaming with minimal effort lessons',
      'Streak freeze reduces urgency'
    ],

    nuqtaApplication: {
      userCampaign: 'Transaction streaks: Use Nuqta 7 days in a row = 2x multiplier week 2',
      merchantCampaign: 'N/A for merchants',
      keyAdaptation: '"Coin Freeze" purchasable with coins to protect streak',
      expectedImpact: 'DAU/MAU ratio 25% → 40%'
    }
  },
  {
    id: 6,
    category: 'Gamification',
    name: 'Nike Run Club Challenges',
    company: 'Nike',
    year: '2016-present',
    thesis: 'Social challenges with achievable goals create community and brand loyalty',
    icon: '👟',

    metrics: {
      growth: '100M+ downloads',
      cac: '$0 (brand marketing funded)',
      viralCoefficient: '0.5',
      conversionRate: 'N/A (brand awareness goal)',
      ltv: 'Increased Nike purchase frequency'
    },

    mechanics: {
      trigger: 'Monthly challenge announcement',
      action: 'Complete running goal',
      reward: 'Badge, leaderboard position, exclusive content',
      feedback: 'Progress tracker, friend comparisons',
      cap: 'One challenge per period'
    },

    whyItWorked: [
      'Community: Running together virtually',
      'Achievable goals: 5K, 10K, monthly miles',
      'Social sharing: Badge flexing on social',
      'Celebrity coaches: Motivation from athletes',
      'No purchase required: Pure value exchange'
    ],

    creativeHooks: [
      '"Join 500K runners in this month\'s challenge"',
      '"You\'re in the top 10% of your city!"',
      '"Unlock your exclusive finisher badge"'
    ],

    failureModes: [
      'Challenge fatigue after repeated participation',
      'GPS inaccuracies frustrated users',
      'Limited monetization directly from app'
    ],

    nuqtaApplication: {
      userCampaign: 'Monthly "Merchant Explorer" challenge: Visit 10 unique merchants',
      merchantCampaign: 'Merchant leaderboard: Top transacting merchants get featured',
      keyAdaptation: 'Neighborhood challenges with local prizes',
      expectedImpact: 'Unique merchants per user 3.2 → 5.5'
    }
  },

  // UGC & CREATOR ECONOMY
  {
    id: 7,
    category: 'UGC & Creators',
    name: 'GoPro Creator Program',
    company: 'GoPro',
    year: '2014-present',
    thesis: 'Turn customers into marketers by featuring their content as aspirational social proof',
    icon: '📹',

    metrics: {
      growth: '6000+ submissions/day at peak',
      cac: '$0 for UGC (prize pool only)',
      viralCoefficient: '0.8 (high share rate)',
      conversionRate: '15% of viewers research GoPro',
      ltv: 'Brand value > direct sales'
    },

    mechanics: {
      trigger: 'Post-purchase excitement',
      action: 'Submit video to GoPro Awards',
      reward: '$500-$5000 for featured content',
      feedback: 'Featured on GoPro channels (millions of views)',
      cap: 'Limited winners per category'
    },

    whyItWorked: [
      'Aspirational content: "That could be me"',
      'Social currency: Getting featured = status',
      'Authentic: Real people, not actors',
      'Product demo: Shows capability in action',
      'Community: Created culture around brand'
    ],

    creativeHooks: [
      '"Be a GoPro — submit your best shot"',
      '"This week\'s $5000 winner could be you"',
      '"Featured on GoPro: [Username]\'s epic moment"'
    ],

    failureModes: [
      'Quality control with volume',
      'Copyright and music licensing issues',
      'Professional creators gaming system'
    ],

    nuqtaApplication: {
      userCampaign: '"Nuqta Finds" — Submit 15s video of purchase for weekly AED 1000 pool',
      merchantCampaign: 'Best merchant content featured on Nuqta social (free marketing)',
      keyAdaptation: 'In-app video editor with Nuqta branding/stickers',
      expectedImpact: '500+ UGC pieces/month, 2M organic impressions'
    }
  },
  {
    id: 8,
    category: 'UGC & Creators',
    name: 'Gymshark Athlete Program',
    company: 'Gymshark',
    year: '2013-present',
    thesis: 'Micro-influencer army creates authentic, relatable content at scale',
    icon: '💪',

    metrics: {
      growth: '$500M revenue from community-driven brand',
      cac: '$5-15 via influencers (vs $30+ traditional)',
      viralCoefficient: '0.6',
      conversionRate: '8-12% from influencer content',
      ltv: '$150 average customer value'
    },

    mechanics: {
      trigger: 'Fitness transformation or achievement',
      action: 'Post wearing Gymshark, tag brand',
      reward: 'Free product, potential athlete sponsorship',
      feedback: 'Repost on main account, athlete status',
      cap: 'Tiered from gifting to paid sponsorship'
    },

    whyItWorked: [
      'Aspirational but achievable: Real transformations',
      'Identity: "I\'m a Gymshark athlete"',
      'Community: Expos, meetups, belonging',
      'Micro-influencers: More authentic than celebrities',
      'Lifestyle brand: Fitness + fashion crossover'
    ],

    creativeHooks: [
      '"Tag @gymshark for a chance to be featured"',
      '"Welcome to the Gymshark family, [Name]"',
      '"Transformation Tuesday with our athletes"'
    ],

    failureModes: [
      'Athlete scandals reflected on brand',
      'Oversaturation of sponsored content',
      'Authenticity questions as brand grew'
    ],

    nuqtaApplication: {
      userCampaign: 'Nuqta Ambassadors: 50 micro-influencers with AED 500/month + affiliate',
      merchantCampaign: 'Merchant spotlight series featuring owner stories',
      keyAdaptation: 'Local UAE fitness/lifestyle influencers with authentic follows',
      expectedImpact: '10K installs/month from ambassador content'
    }
  },
  {
    id: 9,
    category: 'UGC & Creators',
    name: 'TikTok Creator Fund',
    company: 'TikTok',
    year: '2020-present',
    thesis: 'Pay creators directly to keep them on platform and producing content',
    icon: '🎵',

    metrics: {
      growth: '1B+ monthly active users',
      cac: 'Subsidized by creator payments',
      viralCoefficient: '2.0+ (highly viral format)',
      conversionRate: 'N/A (attention economy)',
      ltv: 'Ad revenue per user'
    },

    mechanics: {
      trigger: 'Reach 10K followers + 100K views/30 days',
      action: 'Apply to Creator Fund',
      reward: '$0.02-0.04 per 1000 views',
      feedback: 'Creator dashboard with earnings',
      cap: 'Fund-limited, varies by region'
    },

    whyItWorked: [
      'Direct monetization: Creators can earn living',
      'Meritocracy: Views = money (theoretically)',
      'Retention: Creators stay on platform',
      'Content flywheel: More creators = more content = more users',
      'Competitive moat: Harder to leave'
    ],

    creativeHooks: [
      '"Turn your creativity into cash"',
      '"Join the Creator Fund — you\'ve earned it"',
      '"Your videos earned AED X this month"'
    ],

    failureModes: [
      'Low payouts frustrated creators',
      'Algorithm changes killed earnings unpredictably',
      'Creators moved to better-paying platforms'
    ],

    nuqtaApplication: {
      userCampaign: 'Top 100 content creators get bonus coins monthly based on engagement',
      merchantCampaign: 'Merchant-funded creator campaigns with commission',
      keyAdaptation: 'Nuqta creator fund: AED 10K/month pool for top UGC',
      expectedImpact: 'Dedicated creator community producing 1000+ pieces/month'
    }
  },

  // FLASH SALES & URGENCY
  {
    id: 10,
    category: 'Flash Sales & Urgency',
    name: 'Groupon Daily Deals',
    company: 'Groupon',
    year: '2008-2012 peak',
    thesis: 'Time-limited group buying creates FOMO and viral sharing',
    icon: '⚡',

    metrics: {
      growth: 'Fastest company to $1B revenue (16 months)',
      cac: '$10-20 (email-driven)',
      viralCoefficient: '0.7',
      conversionRate: '2-5% of email opens',
      ltv: '$35 average purchase'
    },

    mechanics: {
      trigger: 'Daily email with local deals',
      action: 'Purchase within 24 hours',
      reward: '50-90% off local services',
      feedback: '"X people bought this deal"',
      cap: 'One deal per day per city'
    },

    whyItWorked: [
      'Scarcity: Limited time (24 hours)',
      'Social proof: "500 people already bought"',
      'Discovery: New local businesses',
      'Deep discounts: Irresistible value',
      'Email habit: Daily engagement'
    ],

    creativeHooks: [
      '"Today only: 70% off [Business]"',
      '"234 people bought this in the last hour"',
      '"Deal ends in 3:42:18"'
    ],

    failureModes: [
      'Merchant quality issues (overwhelmed by demand)',
      'Deal fatigue (too many emails)',
      'Race to bottom on pricing',
      'Groupon-only customers never returned full price'
    ],

    nuqtaApplication: {
      userCampaign: 'Flash Friday: 5x coins at rotating merchant, 2-hour window',
      merchantCampaign: 'Merchant-funded flash deals with guaranteed exposure',
      keyAdaptation: 'Push notification with countdown timer',
      expectedImpact: '400% transaction spike during flash windows'
    }
  },
  {
    id: 11,
    category: 'Flash Sales & Urgency',
    name: 'Amazon Prime Day',
    company: 'Amazon',
    year: '2015-present',
    thesis: 'Manufactured shopping holiday creates anticipation and membership lock-in',
    icon: '📦',

    metrics: {
      growth: '$12.7B sales (2023)',
      cac: 'Prime membership is the moat',
      viralCoefficient: '0.5',
      conversionRate: '65% of Prime members shop',
      ltv: 'Prime members spend 4x more'
    },

    mechanics: {
      trigger: 'Annual event announcement',
      action: 'Shop exclusive deals (Prime members only)',
      reward: 'Significant discounts on millions of items',
      feedback: 'Lightning deals, countdown timers',
      cap: '48-hour event'
    },

    whyItWorked: [
      'Exclusivity: Prime members only',
      'Manufactured scarcity: Once per year',
      'Media amplification: News covers it',
      'Variety: Something for everyone',
      'Membership value: Justifies annual fee'
    ],

    creativeHooks: [
      '"Prime Day is HERE — 48 hours of epic deals"',
      '"Lightning Deal: 80% claimed"',
      '"Prime members save an average of $XYZ"'
    ],

    failureModes: [
      'Inflated pre-Prime Day prices',
      'Server crashes from traffic',
      'Inventory shortages on popular items'
    ],

    nuqtaApplication: {
      userCampaign: '"Nuqta Day" — Annual event with 10x coins at all merchants',
      merchantCampaign: 'Merchants opt-in to Nuqta Day for guaranteed traffic',
      keyAdaptation: 'Build up with "X days until Nuqta Day" countdown',
      expectedImpact: '10x normal transaction volume, massive PR'
    }
  },

  // PAYMENT & FINTECH
  {
    id: 12,
    category: 'Payment & Fintech',
    name: 'Venmo Social Feed',
    company: 'Venmo',
    year: '2012-present',
    thesis: 'Making payments social normalizes app usage and creates organic discovery',
    icon: '💸',

    metrics: {
      growth: '90M+ users',
      cac: '$2-5 (viral + word of mouth)',
      viralCoefficient: '0.9',
      conversionRate: '40% of invites',
      ltv: 'Debit card + crypto monetization'
    },

    mechanics: {
      trigger: 'Send/receive payment',
      action: 'Transaction appears in public feed (opt-out)',
      reward: 'Social connection, emoji storytelling',
      feedback: 'Friends\' transactions visible',
      cap: 'Unlimited feed'
    },

    whyItWorked: [
      'Social proof: "Everyone uses Venmo"',
      'FOMO: See friends at restaurants, events',
      'Fun factor: Emoji payments are shareable',
      'Network effect: Need friends on platform',
      'Cultural moment: "Venmo me" became verb'
    ],

    creativeHooks: [
      '"🍕🍺 — Friday night"',
      '"Split the bill in seconds"',
      '"See what your friends are up to"'
    ],

    failureModes: [
      'Privacy concerns (stalking potential)',
      'Embarrassing transactions visible',
      'Regulators scrutinized social features'
    ],

    nuqtaApplication: {
      userCampaign: 'Activity feed showing friends\' coin earnings (opt-in)',
      merchantCampaign: 'Popular purchases feed drives discovery',
      keyAdaptation: 'Privacy-first: Show merchant, not amount',
      expectedImpact: '30% increase in merchant discovery via friends'
    }
  },
  {
    id: 13,
    category: 'Payment & Fintech',
    name: 'Cash App Boosts',
    company: 'Cash App',
    year: '2018-present',
    thesis: 'Instant cashback at specific merchants creates habitual usage and preference',
    icon: '💵',

    metrics: {
      growth: '51M monthly actives',
      cac: '$5-10 (referral + boosts)',
      viralCoefficient: '0.7',
      conversionRate: '60% activate Cash Card',
      ltv: '$50+ in transaction fees'
    },

    mechanics: {
      trigger: 'Have Cash Card',
      action: 'Select boost before purchase',
      reward: 'Instant 10-20% off at selected merchants',
      feedback: '"You saved $X with Boost"',
      cap: 'One boost at a time, rotating selection'
    },

    whyItWorked: [
      'Instant gratification: Savings shown immediately',
      'Choice: Pick your boost',
      'Discovery: New merchants to try',
      'Habit: Check boosts before shopping',
      'Card lock-in: Need Cash Card to use'
    ],

    creativeHooks: [
      '"Save 15% at Chipotle — activate now"',
      '"New Boosts available!"',
      '"You\'ve saved $124 with Boosts this year"'
    ],

    failureModes: [
      'Limited merchant selection',
      'Boost availability inconsistent',
      'Cannibalized some margin'
    ],

    nuqtaApplication: {
      userCampaign: 'Nuqta Boosts: Activate for 2x-5x coins at specific merchants',
      merchantCampaign: 'Merchants can sponsor boosts for guaranteed traffic',
      keyAdaptation: 'Rotating daily boosts with push notifications',
      expectedImpact: '45% increase in transactions at boosted merchants'
    }
  },
  {
    id: 14,
    category: 'Payment & Fintech',
    name: 'WeChat Red Packets',
    company: 'WeChat Pay',
    year: '2014-present',
    thesis: 'Digitize cultural tradition to drive peer-to-peer payment adoption',
    icon: '🧧',

    metrics: {
      growth: '800M+ WeChat Pay users',
      cac: 'Near $0 (cultural adoption)',
      viralCoefficient: '2.0+ during holidays',
      conversionRate: '95%+ open rate',
      ltv: 'Ecosystem revenue'
    },

    mechanics: {
      trigger: 'Chinese New Year + special occasions',
      action: 'Send digital red packet to friends/groups',
      reward: 'Random amount distribution (gamified)',
      feedback: 'Who opened, how much they got',
      cap: 'Sender sets total amount'
    },

    whyItWorked: [
      'Cultural fit: Digitized ancient tradition',
      'Gamification: Random amounts = excitement',
      'Social: Group packets create competition',
      'Timing: Holiday spike drives adoption',
      'Frictionless: Already in messaging app'
    ],

    creativeHooks: [
      '"Grab the red packet!"',
      '"You got ¥88 — lucky!"',
      '"[Name] sent a red packet to the group"'
    ],

    failureModes: [
      'Gambling concerns',
      'Server strain during CNY',
      'Less relevant outside Chinese culture'
    ],

    nuqtaApplication: {
      userCampaign: '"Golden Gift" — Send coin gifts to friends (Eid, birthdays)',
      merchantCampaign: 'Merchant-sponsored coin drops for customer groups',
      keyAdaptation: 'Gamified: Random coin amounts in gift packets',
      expectedImpact: '5000+ gift packets during Eid, 2000 new users'
    }
  },

  // LOCAL & HYPERLOCAL
  {
    id: 15,
    category: 'Local & Hyperlocal',
    name: 'Zomato Gold Rush',
    company: 'Zomato',
    year: '2018-2020',
    thesis: 'Subscription + FOMO creates committed, high-frequency diners',
    icon: '🍽️',

    metrics: {
      growth: '1M+ Gold subscribers in months',
      cac: '$0 (paid subscription)',
      viralCoefficient: '0.4',
      conversionRate: '15% of users to Gold',
      ltv: '$120/year subscription + orders'
    },

    mechanics: {
      trigger: 'Dining out regularly',
      action: 'Subscribe to Gold',
      reward: '1+1 on food/drinks at partner restaurants',
      feedback: 'Savings tracker, restaurant unlocks',
      cap: 'X uses per month'
    },

    whyItWorked: [
      'Clear value: 1+1 is easy math',
      'Exclusivity: Gold members feel special',
      'Discovery: Try new restaurants risk-free',
      'Social: Dining with Gold is flex',
      'Commitment: Subscription = frequent use'
    ],

    creativeHooks: [
      '"Get 1+1 at 2000+ restaurants"',
      '"Gold members save AED 500/month on average"',
      '"Unlock Gold — dine like royalty"'
    ],

    failureModes: [
      'Restaurant pushback on margins',
      'Overuse by heavy users',
      'COVID killed dine-in model'
    ],

    nuqtaApplication: {
      userCampaign: 'Nuqta+ subscription: 2x coins, no expiration, exclusive deals',
      merchantCampaign: 'Nuqta+ exclusive merchants get guaranteed premium traffic',
      keyAdaptation: 'AED 39/month positions as premium but accessible',
      expectedImpact: '8% of users convert to Nuqta+ within 60 days'
    }
  },
  {
    id: 16,
    category: 'Local & Hyperlocal',
    name: 'Nextdoor Neighborhood Marketing',
    company: 'Nextdoor',
    year: '2017-present',
    thesis: 'Hyperlocal targeting reaches customers within walking distance',
    icon: '🏘️',

    metrics: {
      growth: '1 in 3 US households',
      cac: 'Varies by local business',
      viralCoefficient: '0.6 (neighbor invites)',
      conversionRate: '12% CTR on local ads',
      ltv: 'SMB ad revenue'
    },

    mechanics: {
      trigger: 'Local business wants customers',
      action: 'Post or advertise on Nextdoor',
      reward: 'Reach verified neighbors',
      feedback: 'Views, recommendations, messages',
      cap: 'Geographic boundary'
    },

    whyItWorked: [
      'Trust: Verified neighbors = social proof',
      'Relevance: Truly local businesses',
      'Intent: Users looking for recommendations',
      'Community: Word-of-mouth at scale',
      'Low competition: Not many local platforms'
    ],

    creativeHooks: [
      '"Your neighbors recommend [Business]"',
      '"New in your neighborhood: [Business]"',
      '"23 neighbors love this place"'
    ],

    failureModes: [
      'Neighbor disputes on platform',
      'Privacy concerns',
      'Limited engagement outside recommendations'
    ],

    nuqtaApplication: {
      userCampaign: 'Neighborhood leaderboards: Top earners in your area',
      merchantCampaign: 'Geo-targeted push: "3 new merchants within 500m"',
      keyAdaptation: 'Focus on merchant density per neighborhood before expanding',
      expectedImpact: '60% of transactions within 1km of home/work'
    }
  },

  // EVENT & EXPERIENTIAL
  {
    id: 17,
    category: 'Event & Experiential',
    name: 'Red Bull Stratos',
    company: 'Red Bull',
    year: '2012',
    thesis: 'Create an unmissable cultural moment that transcends advertising',
    icon: '🪂',

    metrics: {
      growth: '8M+ live viewers (YouTube record at time)',
      cac: 'Brand awareness (unmeasurable)',
      viralCoefficient: '10+ (massive sharing)',
      conversionRate: 'N/A (awareness)',
      ltv: 'Brand value increase'
    },

    mechanics: {
      trigger: 'World record attempt',
      action: 'Livestream globally',
      reward: 'Entertainment, awe, shared experience',
      feedback: 'Real-time reactions, social sharing',
      cap: 'One-time event'
    },

    whyItWorked: [
      'Unprecedented: First supersonic freefall',
      'Drama: Real danger = real engagement',
      'Shareability: "Did you see that?"',
      'Brand alignment: "Red Bull gives you wings"',
      'Earned media: News covered for free'
    ],

    creativeHooks: [
      '"Live: Felix jumps from space"',
      '"Watch history being made"',
      '"The world is watching"'
    ],

    failureModes: [
      'Potential tragedy if failed',
      'Expensive ($30M+)',
      'Difficult to replicate'
    ],

    nuqtaApplication: {
      userCampaign: '"Nuqta Million Coin Drop" — First user to reach 1M coins gets AED 50K',
      merchantCampaign: 'Public merchant GMV race with live leaderboard',
      keyAdaptation: 'Partner with UAE events (shopping festivals) for branded moments',
      expectedImpact: '50K+ social mentions, 10K app installs from single event'
    }
  },
  {
    id: 18,
    category: 'Event & Experiential',
    name: 'Coachella Influencer Strategy',
    company: 'Revolve/Brands',
    year: '2015-present',
    thesis: 'Concentrate influencers at one event to create content explosion',
    icon: '🎪',

    metrics: {
      growth: '4.4M #Coachella posts on Instagram',
      cac: '$5K-500K per influencer',
      viralCoefficient: '3.0+ during event',
      conversionRate: '5-15% from tagged content',
      ltv: 'Fashion brand sales spike'
    },

    mechanics: {
      trigger: 'Annual festival',
      action: 'Outfit influencers, host parties',
      reward: 'Free travel, clothes, VIP access',
      feedback: 'Mass content creation',
      cap: 'Festival duration'
    },

    whyItWorked: [
      'Content density: Everyone posting at once',
      'FOMO: Non-attendees live vicariously',
      'Aspirational: Festival lifestyle',
      'Product showcase: Fashion in action',
      'Hashtag concentration: #Coachella trends'
    ],

    creativeHooks: [
      '"Coachella ready in @Revolve"',
      '"Desert vibes ✨"',
      '"Festival fit check"'
    ],

    failureModes: [
      'Influencer oversaturation',
      'Authenticity questions',
      'Event-dependent (COVID canceled)'
    ],

    nuqtaApplication: {
      userCampaign: 'Global Village Nuqta Week: All influencers use Nuqta publicly',
      merchantCampaign: 'Event merchant exclusive: Only Nuqta payments accepted at booth',
      keyAdaptation: 'DSF, Eid events = UAE\'s "Coachella moments"',
      expectedImpact: '500+ influencer posts, 1M impressions per major event'
    }
  },

  // BNPL & FINANCING
  {
    id: 19,
    category: 'BNPL & Financing',
    name: 'Klarna Smooth Checkout',
    company: 'Klarna',
    year: '2015-present',
    thesis: 'Frictionless financing at checkout increases conversion and basket size',
    icon: '🛒',

    metrics: {
      growth: '150M+ users globally',
      cac: '$15-25 per active user',
      viralCoefficient: '0.4',
      conversionRate: '20% increase in merchant conversion',
      ltv: '$80+ in interest/fees'
    },

    mechanics: {
      trigger: 'Checkout at partner merchant',
      action: 'Choose "Pay in 4" option',
      reward: 'Split payment over 4 installments',
      feedback: 'Payment schedule, reminders',
      cap: 'Credit limit based on behavior'
    },

    whyItWorked: [
      'Instant gratification: Buy now',
      'Affordability illusion: Smaller payments',
      'No interest (if paid on time)',
      'Checkout integration: One click',
      'Merchant benefit: Higher conversion'
    ],

    creativeHooks: [
      '"Pay in 4 — 0% interest"',
      '"Get it now, pay later"',
      '"AED 100 becomes 4 easy payments of AED 25"'
    ],

    failureModes: [
      'Regulatory scrutiny',
      'Debt concerns for young users',
      'Merchant fee pressure'
    ],

    nuqtaApplication: {
      userCampaign: 'N/A (Nuqta is not BNPL)',
      merchantCampaign: 'Partner with Tabby/Postpay: Nuqta coins on BNPL purchases',
      keyAdaptation: 'Complementary positioning: Earn coins even when paying later',
      expectedImpact: '15% of transactions via BNPL partners'
    }
  },
  {
    id: 20,
    category: 'BNPL & Financing',
    name: 'Tabby UAE Launch',
    company: 'Tabby',
    year: '2020-present',
    thesis: 'Localized BNPL with influencer marketing captures UAE market',
    icon: '📱',

    metrics: {
      growth: '5M+ users in UAE/KSA',
      cac: '$8-15 (influencer-driven)',
      viralCoefficient: '0.5',
      conversionRate: '30% repeat usage',
      ltv: '$60+ per user'
    },

    mechanics: {
      trigger: 'Influencer shows checkout',
      action: 'User downloads and registers',
      reward: 'Pay in 4, sometimes 0% interest',
      feedback: 'Spending insights, payment reminders',
      cap: 'Dynamic credit limits'
    },

    whyItWorked: [
      'Local-first: Arabic UI, UAE focus',
      'Influencer authenticity: Real purchases',
      'Merchant network: Major UAE retailers',
      'Trust: Shariah-compliant option',
      'Timing: E-commerce boom + COVID'
    ],

    creativeHooks: [
      '"Shop now, pay later with Tabby"',
      '"I got this [item] and paid in 4!"',
      '"Tabby approved — time to shop"'
    ],

    failureModes: [
      'Competitive market (Postpay, Tamara)',
      'Credit risk in uncertain economy',
      'Merchant fee negotiations'
    ],

    nuqtaApplication: {
      userCampaign: 'Learn from Tabby: Influencer-first launch strategy',
      merchantCampaign: 'Target Tabby merchants for Nuqta: "Add coins to BNPL"',
      keyAdaptation: 'Position as complementary, not competitive to BNPL',
      expectedImpact: 'Partner with 50 overlapping merchants'
    }
  }
];

// =============================================================================
// NUQTA CAMPAIGN DESIGNS - Based on Analysis
// =============================================================================
const nuqtaUserCampaigns = [
  {
    id: 'NU1',
    name: 'Golden Chain Referral',
    inspiredBy: ['Dropbox Space Race', 'PayPal Bonus', 'Uber Credits'],
    category: 'Referral & Viral',
    thesis: 'Multi-tier referral with chain bonuses creates network effect multiplier',
    priority: 'CRITICAL',

    mechanics: {
      overview: 'Users earn escalating rewards for referral chains up to 3 levels deep',
      steps: [
        'User A shares unique referral code',
        'Friend B signs up and transacts → A gets 500 coins, B gets 500 coins',
        'B refers C → A gets 100 bonus coins (chain bonus)',
        'C refers D → A gets 50 bonus coins (deep chain)',
        'Visible "Referral Tree" shows network growth'
      ],
      rewards: {
        directReferral: '500 coins for both parties',
        level2Chain: '100 bonus coins',
        level3Chain: '50 bonus coins',
        streakBonus: '5+ referrals in 7 days = 2x all bonuses'
      }
    },

    creativeAssets: {
      headline: '"Your friends earn. You earn. Their friends earn. You still earn."',
      subhead: '"Build your Golden Chain — every link pays"',
      visualConcept: 'Animated chain with coins at each link, growing tree visualization',
      cta: 'Start My Chain'
    },

    channels: [
      { channel: 'WhatsApp', tactic: 'Pre-filled share message with code', budget: 'AED 0' },
      { channel: 'Instagram Story', tactic: 'Shareable referral card template', budget: 'AED 5K' },
      { channel: 'In-app', tactic: 'Referral tree gamification', budget: 'AED 0' },
      { channel: 'Push', tactic: '"Your chain grew!" notifications', budget: 'AED 0' }
    ],

    kpis: {
      primary: 'Viral coefficient (K-factor)',
      target: '0.8 → 1.2',
      secondary: [
        'Referrals per user: 0.3 → 1.5',
        'Referral conversion rate: 25% → 40%',
        'Chain depth average: 1.2 → 2.0'
      ]
    },

    fraudPrevention: [
      'Require transaction within 7 days to unlock referral bonus',
      'Device fingerprinting to prevent fake accounts',
      'IP clustering detection',
      'Max 20 direct referrals per 30 days',
      'Manual review for chains > 50 users'
    ],

    timeline: {
      week1: 'Build referral tree UI and tracking',
      week2: 'Launch to 1000 beta users',
      week3: 'Iterate based on fraud signals',
      week4: 'Full launch with PR'
    },

    budget: 'AED 25,000 (primarily coin cost)',
    expectedROI: '10x (each referral costs ~AED 5, LTV ~AED 50)'
  },
  {
    id: 'NU2',
    name: 'Streak Masters',
    inspiredBy: ['Duolingo Streaks', 'Snapchat Streaks', 'Nike Run Club'],
    category: 'Gamification & Habit',
    thesis: 'Loss aversion through streaks creates daily transaction habit',
    priority: 'HIGH',

    mechanics: {
      overview: 'Daily transaction streaks unlock multipliers and exclusive rewards',
      steps: [
        'Any Nuqta transaction counts as daily activity',
        'Streak counter visible on home screen',
        'Multipliers increase: 3 days = 1.5x, 7 days = 2x, 30 days = 3x',
        'Missing a day resets streak (unless Streak Shield used)',
        'Streak Shield purchasable with coins (creates monetization)'
      ],
      rewards: {
        day3: '1.5x coins on all transactions',
        day7: '2x coins + "Week Warrior" badge',
        day14: '2.5x coins + exclusive merchant deals',
        day30: '3x coins + "Streak Master" status + prize entry'
      }
    },

    creativeAssets: {
      headline: '"Don\'t break the chain"',
      subhead: '"Every day you shop, your rewards grow"',
      visualConcept: 'Fire/flame icon that grows larger with streak, calendar with X marks',
      cta: 'Keep My Streak Alive'
    },

    channels: [
      { channel: 'Push (6PM)', tactic: '"You\'re on a 5-day streak! Keep it going 🔥"', budget: 'AED 0' },
      { channel: 'Push (10PM)', tactic: '"Your streak expires at midnight! Make a quick purchase"', budget: 'AED 0' },
      { channel: 'Email', tactic: 'Weekly streak summary with leaderboard', budget: 'AED 2K' },
      { channel: 'In-app', tactic: 'Prominent streak counter with animation', budget: 'AED 0' }
    ],

    kpis: {
      primary: 'DAU/MAU ratio',
      target: '25% → 45%',
      secondary: [
        'Average streak length: 2 → 8 days',
        'Transactions per user/month: 4.2 → 12',
        '% users with 7+ day streak: 5% → 25%'
      ]
    },

    fraudPrevention: [
      'Minimum transaction value AED 10 to count',
      'Max 1 streak credit per 12 hours',
      'Same merchant max 2x per week for streak',
      'Streak Shield costs 500 coins (self-limiting)'
    ],

    timeline: {
      week1: 'Build streak tracking and UI',
      week2: 'Soft launch to power users',
      week3: 'Add Streak Shield monetization',
      week4: 'Full rollout with leaderboards'
    },

    budget: 'AED 15,000 (coin multiplier cost)',
    expectedROI: '15x (3x transaction increase at 1.5x cost)'
  },
  {
    id: 'NU3',
    name: 'Nuqta Finds (UGC Machine)',
    inspiredBy: ['GoPro Awards', 'Gymshark Athletes', 'TikTok Creator Fund'],
    category: 'UGC & Community',
    thesis: 'Turn every purchase into shareable content that drives organic discovery',
    priority: 'HIGH',

    mechanics: {
      overview: 'Users create short videos of purchases for rewards and fame',
      steps: [
        'Post-transaction prompt: "Share your find for bonus coins!"',
        'Record 15-60s video via in-app camera',
        'Auto-tagged with merchant, location, coins earned',
        'Posted to Nuqta feed + optional social share',
        'Weekly winners featured on Nuqta channels'
      ],
      rewards: {
        submission: '50 bonus coins per approved video',
        weeklyTop10: '500 coins + featured post',
        monthlyWinner: 'AED 1,000 cash + "Creator" badge',
        viralBonus: '1 coin per 100 views on content'
      }
    },

    creativeAssets: {
      headline: '"Show us your Nuqta finds"',
      subhead: '"Your haul could win AED 1,000"',
      visualConcept: 'TikTok-style vertical video feed, creator spotlights',
      cta: 'Share My Find'
    },

    channels: [
      { channel: 'In-app prompt', tactic: 'Post-transaction camera trigger', budget: 'AED 0' },
      { channel: 'TikTok', tactic: 'Repost best content with tags', budget: 'AED 10K' },
      { channel: 'Instagram Reels', tactic: 'Weekly compilation, creator features', budget: 'AED 8K' },
      { channel: 'WhatsApp Status', tactic: 'One-tap share with Nuqta branding', budget: 'AED 0' }
    ],

    kpis: {
      primary: 'UGC pieces per week',
      target: '0 → 500+',
      secondary: [
        'Organic social impressions: 100K/month',
        'Installs from UGC: 2000/month',
        'Creator retention: 60% post 2+ videos'
      ]
    },

    fraudPrevention: [
      'Manual moderation queue for first 1000',
      'AI content check for duplicates/spam',
      'One submission per transaction',
      'Merchant confirmation of purchase'
    ],

    timeline: {
      week1: 'Build in-app video recorder',
      week2: 'Launch content feed',
      week3: 'First weekly contest',
      week4: 'Scale with creator outreach'
    },

    budget: 'AED 40,000 (prizes + content team)',
    expectedROI: '8x (organic reach worth 10x prize cost)'
  },
  {
    id: 'NU4',
    name: 'Flash Coin Frenzy',
    inspiredBy: ['Groupon Daily Deals', 'Amazon Prime Day', 'Cash App Boosts'],
    category: 'Flash Sales & Urgency',
    thesis: 'Time-limited mega rewards create urgency spikes and social buzz',
    priority: 'MEDIUM',

    mechanics: {
      overview: 'Random 2-hour windows with 5-10x coins at select merchants',
      steps: [
        'Push notification 30 min before: "Coin Frenzy starting at [merchant] in 30 min!"',
        '2-hour window opens with 5-10x coin multiplier',
        'Real-time counter shows coins earned by all users',
        'Top 10 earners during window get bonus prize',
        'Post-frenzy summary shared socially'
      ],
      rewards: {
        multiplier: '5-10x normal coin rate',
        topEarner: 'AED 500 bonus',
        top10: '1000 bonus coins each',
        participation: 'Badge for attending frenzy'
      }
    },

    creativeAssets: {
      headline: '"⚡ COIN FRENZY: 10x coins for 2 hours only"',
      subhead: '"[Merchant] is giving away coins like crazy"',
      visualConcept: 'Lightning bolt theme, countdown timer, live leaderboard',
      cta: 'Join the Frenzy'
    },

    channels: [
      { channel: 'Push (urgent)', tactic: '30-min, 10-min, LIVE notifications', budget: 'AED 0' },
      { channel: 'Instagram Story', tactic: 'Countdown + live updates', budget: 'AED 3K' },
      { channel: 'WhatsApp Groups', tactic: 'Ambassador alerts to their networks', budget: 'AED 2K' },
      { channel: 'SMS', tactic: 'High-value users get SMS backup', budget: 'AED 5K' }
    ],

    kpis: {
      primary: 'Transactions during frenzy window',
      target: '10x normal rate',
      secondary: [
        'Push notification open rate: 40%+',
        'First-time users during frenzy: 20% of transactions',
        'Social mentions during frenzy: 500+'
      ]
    },

    fraudPrevention: [
      'Pre-registration required (know attendees)',
      'Max 5 transactions per user during frenzy',
      'Merchant capacity limits',
      'Post-frenzy verification for prizes'
    ],

    timeline: {
      week1: 'Build frenzy infrastructure',
      week2: 'Test with 1 merchant (internal)',
      week3: 'First public frenzy',
      week4: 'Weekly frenzy schedule'
    },

    budget: 'AED 20,000/month (coin cost + prizes)',
    expectedROI: '6x (300% traffic spike for 2 hours)'
  },
  {
    id: 'NU5',
    name: 'Neighborhood Champions',
    inspiredBy: ['Nextdoor Local', 'Strava Segments', 'Pokemon Go Gyms'],
    category: 'Local & Community',
    thesis: 'Hyperlocal competition creates community identity and merchant loyalty',
    priority: 'MEDIUM',

    mechanics: {
      overview: 'Users compete for "Champion" status in their neighborhood',
      steps: [
        'Dubai divided into ~50 neighborhoods',
        'Monthly leaderboard per neighborhood',
        'Top earner becomes "Neighborhood Champion"',
        'Champions get special badge + merchant perks',
        'Neighborhoods compete for collective title'
      ],
      rewards: {
        champion: '3x coins for month + special badge + AED 200 merchant credit',
        top10: '2x coins for month',
        neighborhoodWin: 'All residents get bonus 500 coins'
      }
    },

    creativeAssets: {
      headline: '"Become the Coin King of [Neighborhood]"',
      subhead: '"Marina vs JBR vs Downtown — who earns more?"',
      visualConcept: 'Map with colored neighborhoods, crown icons for champions',
      cta: 'View My Neighborhood'
    },

    channels: [
      { channel: 'In-app', tactic: 'Neighborhood tab with leaderboard', budget: 'AED 0' },
      { channel: 'Local Instagram', tactic: 'Neighborhood-specific content', budget: 'AED 10K' },
      { channel: 'WhatsApp groups', tactic: 'Area-specific ambassador groups', budget: 'AED 5K' },
      { channel: 'Physical', tactic: 'Merchant window stickers showing area rank', budget: 'AED 8K' }
    ],

    kpis: {
      primary: 'Transactions within home neighborhood',
      target: '60% of all transactions',
      secondary: [
        'Users checking leaderboard: 40%/week',
        'Neighborhood vs neighborhood engagement: 5K views/month',
        'Local merchant discovery: +30%'
      ]
    },

    fraudPrevention: [
      'Home neighborhood locked (change 1x per month)',
      'Must transact at 3+ unique merchants to qualify',
      'Champion verification call',
      'Anti-smurf account detection'
    ],

    timeline: {
      week1: 'Define neighborhood boundaries',
      week2: 'Build leaderboard infrastructure',
      week3: 'Soft launch in 5 pilot areas',
      week4: 'Full Dubai rollout'
    },

    budget: 'AED 30,000/month (prizes + local marketing)',
    expectedROI: '5x (increased local density drives retention)'
  },
  {
    id: 'NU6',
    name: 'Golden Gift Packets',
    inspiredBy: ['WeChat Red Packets', 'Venmo Social', 'Cash App Gifting'],
    category: 'Social & Gifting',
    thesis: 'Peer-to-peer coin gifting creates viral adoption during cultural moments',
    priority: 'MEDIUM',

    mechanics: {
      overview: 'Users can gift coins to friends with gamified random amounts',
      steps: [
        'User creates "Golden Gift" with total coin amount',
        'Shares via WhatsApp/SMS to friends',
        'Recipients open to reveal random coin amount',
        'Non-users must download app to claim',
        'Group gifts: First to open gets biggest share'
      ],
      rewards: {
        senderBonus: '10% extra coins added by Nuqta',
        receiverBonus: 'First gift = 100 bonus coins',
        groupExcitement: 'Random distribution creates gamification'
      }
    },

    creativeAssets: {
      headline: '"Send a Golden Gift 🎁"',
      subhead: '"Surprise your friends with Nuqta coins"',
      visualConcept: 'Animated gift box opening, golden coins spilling out',
      cta: 'Send a Gift'
    },

    channels: [
      { channel: 'WhatsApp', tactic: 'Primary sharing channel', budget: 'AED 0' },
      { channel: 'Eid campaign', tactic: '"Eid Mubarak" themed gifts', budget: 'AED 15K' },
      { channel: 'Birthday', tactic: 'Auto-suggest on friends\' birthdays', budget: 'AED 0' },
      { channel: 'In-app', tactic: 'Gift history and received gifts', budget: 'AED 0' }
    ],

    kpis: {
      primary: 'New users from gifts',
      target: '2000/month during Eid',
      secondary: [
        'Gifts sent per month: 5000+',
        'Gift recipient activation: 80%+',
        'Sender retention: +25% vs non-senders'
      ]
    },

    fraudPrevention: [
      'Min gift size 100 coins',
      'Max 10 gifts per day per user',
      'Recipient must verify phone',
      'Cooling period before withdrawal'
    ],

    timeline: {
      week1: 'Build gifting infrastructure',
      week2: 'Internal testing',
      week3: 'Launch before Eid',
      week4: 'Measure and iterate'
    },

    budget: 'AED 20,000 (10% sender bonus cost)',
    expectedROI: '12x (gift recipients have 90% activation)'
  }
];

// =============================================================================
// UAE CULTURAL CALENDAR CAMPAIGNS
// =============================================================================
const uaeCulturalCampaigns = [
  {
    id: 'UAE1',
    name: 'Ramadan Rewards Rush',
    period: 'Ramadan (30 days)',
    timing: '~March 2026',
    category: 'Religious Holiday',
    thesis: 'Capture the massive Iftar and Suhoor dining surge with special coin multipliers',
    priority: 'CRITICAL',

    culturalContext: {
      insight: 'Ramadan sees 40% increase in restaurant spending, especially 6-9 PM (Iftar) and 3-5 AM (Suhoor)',
      opportunity: 'Position Nuqta as THE Ramadan savings companion',
      sensitivity: 'Respectful messaging, no intrusive notifications during fasting hours'
    },

    mechanics: {
      overview: 'Special Ramadan coin boosts at F&B partners during Iftar and Suhoor windows',
      steps: [
        'Iftar Hour Boost: 3x coins on F&B purchases 6-9 PM daily',
        'Suhoor Specials: 5x coins at 24-hour cafes 2-5 AM',
        'Charity Coins: Users can donate coins to verified UAE charities',
        'Family Bundle: 2x coins when spending AED 200+ (family Iftar)',
        'Last 10 Nights: 10x coins at participating merchants for final push'
      ],
      rewards: {
        iftarBoost: '3x coins (worth AED 0.30 per AED 10 spent)',
        suhoorBoost: '5x coins (worth AED 0.50 per AED 10 spent)',
        familyBundle: '2x coins on AED 200+ transactions',
        last10Nights: '10x coins = AED 1 per AED 10 spent',
        charityDonation: 'Convert coins to Zakat donations (1 coin = AED 0.10)'
      }
    },

    creativeAssets: {
      headline: '"إفطار مع توفير" (Iftar with Savings)',
      subhead: '"Earn 3x Nuqta Coins this Ramadan"',
      visualConcept: 'Crescent moon with gold coins, lantern motifs, family dining',
      cta: 'Start Saving This Ramadan',
      arabicCopy: 'رمضان كريم - وفر أكثر مع نقطة',
      colors: 'Deep purple, gold, moonlight blue'
    },

    channels: [
      { channel: 'Push (6 PM)', tactic: '"Iftar boost is LIVE! 3x coins for next 3 hours"', budget: 'AED 0' },
      { channel: 'WhatsApp', tactic: 'Ramadan greeting + daily deals', budget: 'AED 5K' },
      { channel: 'Instagram', tactic: 'Iftar spot recommendations with coin info', budget: 'AED 15K' },
      { channel: 'Radio', tactic: 'Dubai Eye/Virgin Radio Iftar hour sponsorship', budget: 'AED 20K' },
      { channel: 'Influencers', tactic: 'Food bloggers showing Ramadan savings', budget: 'AED 25K' }
    ],

    merchantCategories: [
      { category: 'Restaurants', boost: '3x', merchants: 'All F&B partners' },
      { category: 'Cafés', boost: '5x (Suhoor)', merchants: '24-hour cafés only' },
      { category: 'Supermarkets', boost: '2x', merchants: 'Grocery partners' },
      { category: 'Bakeries', boost: '3x', merchants: 'Sweet shops, bakeries' }
    ],

    kpis: {
      primary: 'F&B transactions during Ramadan',
      target: '500% increase vs normal month',
      secondary: [
        'New users during Ramadan: 10,000+',
        'Charity coins donated: 50,000+',
        'Merchant revenue boost: +40%',
        'Daily active users: 60%+ DAU/MAU'
      ]
    },

    budget: 'AED 100,000 (ads + coin multipliers + charity match)',
    expectedROI: '8x (Ramadan spending + new user acquisition)'
  },
  {
    id: 'UAE2',
    name: 'Eid Double Celebration',
    period: 'Eid Al-Fitr & Eid Al-Adha (4 days each)',
    timing: '~April 2026 & ~June 2026',
    category: 'Religious Holiday',
    thesis: 'Maximize gift-giving and celebration spending with Golden Gift feature',
    priority: 'CRITICAL',

    culturalContext: {
      insight: 'Eid is biggest shopping period - clothing, gifts, dining, family gatherings',
      opportunity: 'Position Nuqta coins as modern Eidi (cash gifts)',
      sensitivity: 'Family-focused messaging, celebration themes'
    },

    mechanics: {
      overview: 'Golden Gift Packets for Eidi + massive multipliers across all categories',
      steps: [
        'Eid Eve: 5x coins on all purchases (build excitement)',
        'Eid Day 1-3: Golden Gift Packets enabled (send Eidi via Nuqta)',
        'Group Gifts: Send to family WhatsApp groups, random amounts',
        'Eid Shopping Spree: 3x coins on fashion, beauty, gifts',
        'Eid Feast: 4x coins at restaurants for family gatherings'
      ],
      rewards: {
        eidEve: '5x coins on everything',
        goldenGift: 'Send coins as Eidi (Nuqta adds 20% bonus)',
        shopping: '3x coins on fashion/beauty/gifts',
        dining: '4x coins at restaurants',
        firstEidi: 'First-time gift receivers get 200 bonus coins (AED 20 value)'
      }
    },

    creativeAssets: {
      headline: '"عيدكم مبارك" (Eid Mubarak)',
      subhead: '"Send Golden Eidi, Earn Golden Coins"',
      visualConcept: 'Golden gift boxes, coins with crescent, family celebration',
      cta: 'Send Eid Gift',
      arabicCopy: 'عيد سعيد مع هدايا ذهبية من نقطة',
      colors: 'Gold, emerald green, white'
    },

    channels: [
      { channel: 'WhatsApp', tactic: 'Eid greeting cards with gift CTA', budget: 'AED 8K' },
      { channel: 'SMS', tactic: '"Send Eidi with Nuqta" to all users', budget: 'AED 10K' },
      { channel: 'Instagram/TikTok', tactic: 'Eid outfit hauls with coin earnings', budget: 'AED 20K' },
      { channel: 'Mall activations', tactic: 'Booth at Dubai Mall, MOE during Eid', budget: 'AED 30K' },
      { channel: 'Influencers', tactic: 'Lifestyle influencers showing Eid shopping', budget: 'AED 15K' }
    ],

    merchantCategories: [
      { category: 'Fashion & Retail', boost: '3x', merchants: 'Clothing, accessories' },
      { category: 'Salons & Beauty', boost: '3x', merchants: 'Eid grooming' },
      { category: 'Restaurants', boost: '4x', merchants: 'Family dining' },
      { category: 'Gifts & Sweets', boost: '5x', merchants: 'Gift shops, chocolatiers' }
    ],

    kpis: {
      primary: 'Golden Gifts sent during Eid',
      target: '10,000+ gifts sent',
      secondary: [
        'New users from gifts: 3,000+',
        'Gift recipient activation: 85%+',
        'Overall transactions: 400% vs normal',
        'Average gift value: AED 50+'
      ]
    },

    budget: 'AED 120,000 (per Eid event)',
    expectedROI: '10x (viral gift acquisition + high-value purchases)'
  },
  {
    id: 'UAE3',
    name: 'UAE National Day Gold Rush',
    period: 'December 2-3 (UAE National Day)',
    timing: 'December 2026',
    category: 'National Holiday',
    thesis: 'Patriotic celebration with UAE-themed rewards and local merchant spotlight',
    priority: 'HIGH',

    culturalContext: {
      insight: 'National pride peaks, strong preference for local/UAE brands',
      opportunity: 'Position Nuqta as UAE-born, supporting local businesses',
      sensitivity: 'Patriotic but not commercial, celebrate UAE identity'
    },

    mechanics: {
      overview: 'Support local UAE businesses with special "UAE-born" merchant category',
      steps: [
        '52x coins at UAE-owned businesses (52 years since founding)',
        '"Discover UAE" challenge: Visit 5 local merchants, win AED 100',
        'UAE Flag Colors Quest: Collect red, green, white, black badges',
        'Local Heroes Spotlight: Featured UAE entrepreneurs',
        'Community Give-back: Coins donated to UAE charities'
      ],
      rewards: {
        localBoost: '52x coins at UAE-owned merchants (1 day only)',
        discoverUAE: 'Visit 5 local merchants = 500 coins (AED 50)',
        flagQuest: 'Collect all 4 color badges = 200 coins',
        heroSpotlight: 'Extra visibility for UAE merchants'
      }
    },

    creativeAssets: {
      headline: '"روح الاتحاد" (Spirit of the Union)',
      subhead: '"Celebrate UAE, Support Local, Save More"',
      visualConcept: 'UAE flag colors, Burj Khalifa, falcon, local pride',
      cta: 'Support Local',
      arabicCopy: 'فخورين بالإمارات - ندعم المحلي مع نقطة',
      colors: 'Red, green, white, black (UAE flag)'
    },

    channels: [
      { channel: 'Instagram', tactic: 'UAE pride content, local merchant stories', budget: 'AED 15K' },
      { channel: 'TikTok', tactic: 'National Day celebrations with Nuqta', budget: 'AED 10K' },
      { channel: 'Outdoor', tactic: 'Dubai Marina/JBR walkway activations', budget: 'AED 25K' },
      { channel: 'Radio', tactic: 'Arabic stations during celebrations', budget: 'AED 15K' }
    ],

    merchantCategories: [
      { category: 'UAE-owned Cafés', boost: '52x', merchants: 'Local coffee shops' },
      { category: 'UAE Restaurants', boost: '52x', merchants: 'Emirati cuisine' },
      { category: 'Local Retail', boost: '52x', merchants: 'UAE entrepreneurs' },
      { category: 'All Partners', boost: '5x', merchants: 'Everyone else' }
    ],

    kpis: {
      primary: 'Transactions at UAE-owned businesses',
      target: '1000% increase vs normal day',
      secondary: [
        'UAE merchants signed: 50+ new',
        'Discover UAE completions: 2000+',
        'Social mentions: 5000+',
        'App downloads: 5000+'
      ]
    },

    budget: 'AED 80,000',
    expectedROI: '6x (PR value + local merchant relationships)'
  },
  {
    id: 'UAE4',
    name: 'Dubai Shopping Festival Frenzy',
    period: 'DSF (December-January, ~5 weeks)',
    timing: 'December 2026 - January 2027',
    category: 'Shopping Festival',
    thesis: 'Ride the DSF wave with daily flash deals and mega raffles',
    priority: 'HIGH',

    culturalContext: {
      insight: 'DSF is biggest retail event, millions of visitors, massive deals',
      opportunity: 'Be the companion app for DSF shopping',
      sensitivity: 'Complement DSF, don\'t compete with official promotions'
    },

    mechanics: {
      overview: 'Daily rotating deals + DSF Mega Raffle entries from Nuqta transactions',
      steps: [
        'Daily Flash Deal: Different merchant category each day (10x coins)',
        'DSF Mega Entry: Every AED 100 spent = 1 raffle entry',
        'Gold Souk Special: 5x coins on jewelry purchases',
        'Fashion Week: 4x coins on clothing all week',
        'Grand Finale: 20x coins on last day'
      ],
      rewards: {
        dailyFlash: '10x coins on featured category (rotates daily)',
        megaRaffle: 'Entries for AED 50,000 grand prize (funded by Nuqta)',
        goldSouk: '5x coins on jewelry (worth AED 0.50 per AED 10)',
        fashionWeek: '4x coins on fashion all week',
        grandFinale: '20x coins = AED 2 per AED 10 spent'
      }
    },

    creativeAssets: {
      headline: '"Shop Dubai, Save with Nuqta"',
      subhead: '"Every Purchase = Raffle Entry + Coins"',
      visualConcept: 'DSF branding compatibility, shopping bags, gold coins',
      cta: 'Join DSF Savings',
      colors: 'DSF blue + Nuqta gold'
    },

    channels: [
      { channel: 'Mall Activations', tactic: 'Booths at major malls during DSF', budget: 'AED 50K' },
      { channel: 'Digital Ads', tactic: 'Geo-targeted to mall visitors', budget: 'AED 30K' },
      { channel: 'Influencers', tactic: 'Shopping haul content with Nuqta', budget: 'AED 25K' },
      { channel: 'Radio', tactic: 'DSF shopping tips with Nuqta plug', budget: 'AED 15K' }
    ],

    merchantCategories: [
      { category: 'Fashion', boost: '4x (Fashion Week)', merchants: 'Clothing, shoes' },
      { category: 'Jewelry', boost: '5x', merchants: 'Gold Souk, jewelry stores' },
      { category: 'Electronics', boost: '3x', merchants: 'Tech partners' },
      { category: 'Home & Living', boost: '3x', merchants: 'Furniture, decor' },
      { category: 'All', boost: '2x base', merchants: 'Everyone' }
    ],

    kpis: {
      primary: 'DSF period transactions',
      target: '10x normal volume',
      secondary: [
        'New user signups: 15,000+',
        'Raffle entries: 100,000+',
        'Merchant GMV during DSF: AED 500K+',
        'App ranking in UAE: Top 10 Shopping'
      ]
    },

    budget: 'AED 150,000 (activation + raffle + ads)',
    expectedROI: '12x (massive user acquisition during peak shopping)'
  },
  {
    id: 'UAE5',
    name: 'Summer Escape Savings',
    period: 'July-August (Summer months)',
    timing: 'July-August 2026',
    category: 'Seasonal',
    thesis: 'Combat summer slowdown with indoor activity focus and staycation deals',
    priority: 'MEDIUM',

    culturalContext: {
      insight: 'Many residents travel, those staying seek AC activities',
      opportunity: 'Capture staycation and indoor entertainment spending',
      sensitivity: 'Acknowledge heat, offer relief solutions'
    },

    mechanics: {
      overview: 'Indoor entertainment, mall dining, and staycation rewards',
      steps: [
        'Mall Monday: 3x coins at mall F&B every Monday',
        'Cinema Rewards: 5x coins on movie snacks',
        'Gym Motivation: 4x coins at fitness centers',
        'Staycation Bonus: 10x coins at hotel restaurants',
        'Cool Down: 3x coins at ice cream/dessert shops'
      ],
      rewards: {
        mallMonday: '3x coins at mall restaurants',
        cinema: '5x coins on cinema concessions',
        gym: '4x coins at gyms/fitness',
        staycation: '10x coins at hotel dining',
        dessert: '3x coins at ice cream/desserts'
      }
    },

    creativeAssets: {
      headline: '"Beat the Heat, Stack the Coins"',
      subhead: '"Summer savings at cool spots"',
      visualConcept: 'Sun + AC symbols, ice cream, indoor activities',
      cta: 'Find Cool Spots',
      colors: 'Cool blues, refreshing whites'
    },

    channels: [
      { channel: 'Push', tactic: 'Hot weather triggers cool spot suggestions', budget: 'AED 0' },
      { channel: 'Instagram', tactic: 'Indoor activity recommendations', budget: 'AED 10K' },
      { channel: 'Email', tactic: 'Weekly "Beat the Heat" guide', budget: 'AED 3K' }
    ],

    merchantCategories: [
      { category: 'Mall F&B', boost: '3x', merchants: 'Mall restaurants' },
      { category: 'Entertainment', boost: '5x', merchants: 'Cinema, gaming' },
      { category: 'Gyms', boost: '4x', merchants: 'Fitness centers' },
      { category: 'Hotels', boost: '10x', merchants: 'Hotel restaurants' }
    ],

    kpis: {
      primary: 'Maintain transaction volume during summer',
      target: 'Only 20% drop vs peak months (vs industry 40%)',
      secondary: [
        'Indoor category transactions: +50%',
        'Gym partner sign-ups: +30%',
        'User retention: 80%+'
      ]
    },

    budget: 'AED 40,000',
    expectedROI: '4x (retention during slow period)'
  },
  {
    id: 'UAE6',
    name: 'Back to School Boost',
    period: 'Late August - Early September',
    timing: 'August-September 2026',
    category: 'Seasonal',
    thesis: 'Capture family back-to-school spending on supplies, clothes, and treats',
    priority: 'MEDIUM',

    culturalContext: {
      insight: 'Families spend heavily on school prep, uniforms, supplies',
      opportunity: 'Position Nuqta for family shopping occasions',
      sensitivity: 'Family-friendly, practical savings focus'
    },

    mechanics: {
      overview: 'Family-focused savings on school prep categories',
      steps: [
        'Uniform Rush: 5x coins on school uniform purchases',
        'Stationery Stack: 4x coins on school supplies',
        'First Day Treat: 3x coins on celebratory meals',
        'Parent Reward: 2x coins on coffee (parents need it!)',
        'Study Buddy: 3x coins at tutoring/education centers'
      ],
      rewards: {
        uniforms: '5x coins on school uniforms',
        stationery: '4x coins on school supplies',
        firstDay: '3x coins on family meals',
        parentCoffee: '2x coins at cafés',
        tutoring: '3x coins at education centers'
      }
    },

    creativeAssets: {
      headline: '"Smart Kids, Smarter Parents"',
      subhead: '"Save on back-to-school with Nuqta"',
      visualConcept: 'School supplies, happy families, gold stars',
      cta: 'Start School Savings',
      colors: 'Primary colors, cheerful palette'
    },

    channels: [
      { channel: 'Instagram', tactic: 'Parent tips + savings content', budget: 'AED 10K' },
      { channel: 'WhatsApp', tactic: 'School prep shopping lists with deals', budget: 'AED 5K' },
      { channel: 'School partnerships', tactic: 'Flyers in school welcome packs', budget: 'AED 15K' }
    ],

    merchantCategories: [
      { category: 'Fashion/Uniforms', boost: '5x', merchants: 'School uniform shops' },
      { category: 'Stationery', boost: '4x', merchants: 'Office/school supplies' },
      { category: 'F&B', boost: '3x', merchants: 'Family restaurants' },
      { category: 'Education', boost: '3x', merchants: 'Tutoring centers' }
    ],

    kpis: {
      primary: 'Family segment transactions',
      target: '300% increase in family category',
      secondary: [
        'New family user segment: 2000+ families',
        'Multi-child household retention: 85%',
        'Average family spend: AED 500+/month'
      ]
    },

    budget: 'AED 50,000',
    expectedROI: '5x (high-value family segment acquisition)'
  }
];

// =============================================================================
// MULTICULTURAL COMMUNITY CAMPAIGNS - UAE's Diverse Population
// =============================================================================
const multiculturalCampaigns = [
  {
    id: 'MC1',
    name: 'Diwali Dhamaka (Indian Community)',
    community: 'Indian',
    population: '3.5M+ Indians in UAE (largest expat group)',
    period: 'Diwali (5 days, Oct-Nov)',
    timing: 'October-November 2026',
    category: 'Cultural Festival',
    thesis: 'Capture the massive Diwali spending surge on jewelry, sweets, fashion, and family dining',
    priority: 'CRITICAL',

    culturalContext: {
      insight: 'Diwali = biggest shopping period for Indians. Gold/jewelry, new clothes, sweets, family gatherings',
      opportunity: 'Indians are UAE\'s largest expat group - massive spending power during Diwali',
      sensitivity: 'Authentic celebration, avoid stereotypes, partner with Indian community leaders',
      keyMoments: ['Dhanteras (Gold buying)', 'Diwali Day', 'Bhai Dooj (Sibling gifts)']
    },

    mechanics: {
      overview: 'Festival of Lights = Festival of Savings with special Indian merchant partnerships',
      steps: [
        'Dhanteras Gold Rush: 10x coins on jewelry (Indians buy gold on this day)',
        'Diwali Feast: 5x coins at Indian restaurants',
        'Sweet Savings: 4x coins at Indian sweet shops',
        'Fashion Forward: 3x coins on ethnic wear (sarees, kurtas)',
        'Gift of Light: Send Diwali coin gifts via WhatsApp'
      ],
      rewards: {
        goldRush: '10x coins on jewelry (worth AED 1 per AED 10)',
        diwaliDining: '5x coins at Indian restaurants',
        sweetShops: '4x coins on sweets and mithai',
        ethnicWear: '3x coins on Indian fashion',
        diwalGift: 'Send coin gifts + 25% bonus from Nuqta'
      }
    },

    creativeAssets: {
      headline: '"दिवाली की शुभकामनाएं" (Happy Diwali)',
      subhead: '"Light up your savings this Diwali"',
      hindiCopy: 'दिवाली पर बचत का त्योहार - नुक़ता के साथ',
      visualConcept: 'Diyas (oil lamps), rangoli patterns, gold coins, festive lights',
      cta: 'Celebrate & Save',
      colors: 'Gold, orange, red, purple (festive colors)'
    },

    channels: [
      { channel: 'WhatsApp', tactic: 'Diwali greeting + deals to Indian user segment', budget: 'AED 8K' },
      { channel: 'Instagram', tactic: 'Indian influencers, Diwali shopping hauls', budget: 'AED 20K' },
      { channel: 'Radio Mirchi UAE', tactic: 'Hindi radio spots during Diwali week', budget: 'AED 15K' },
      { channel: 'Little India (Meena Bazaar)', tactic: 'On-ground activation, QR stands', budget: 'AED 25K' },
      { channel: 'Indian Associations', tactic: 'Partner with IBA, Indian clubs', budget: 'AED 10K' }
    ],

    merchantCategories: [
      { category: 'Jewelry & Gold', boost: '10x (Dhanteras)', merchants: 'Gold Souk, Malabar, Joyalukkas' },
      { category: 'Indian Restaurants', boost: '5x', merchants: 'Indian fine dining, family restaurants' },
      { category: 'Sweet Shops', boost: '4x', merchants: 'Bikanervala, Haldiram\'s, local mithai' },
      { category: 'Ethnic Fashion', boost: '3x', merchants: 'Saree shops, ethnic wear' },
      { category: 'Groceries', boost: '2x', merchants: 'Indian supermarkets, Lulu' }
    ],

    kpis: {
      primary: 'Indian community transactions during Diwali',
      target: '800% increase vs normal week',
      secondary: [
        'Indian segment new users: 5,000+',
        'Jewelry partner GMV: AED 200K+',
        'Diwali gift packets sent: 3,000+',
        'Indian merchant sign-ups: 30+'
      ]
    },

    budget: 'AED 120,000',
    expectedROI: '10x (massive Indian community spending power)'
  },
  {
    id: 'MC2',
    name: 'Filipino Fiesta (Pinoy Community)',
    community: 'Filipino',
    population: '700K+ Filipinos in UAE',
    period: 'Year-round + Christmas/Simbang Gabi',
    timing: 'December 2026 (peak) + monthly activations',
    category: 'Community Building',
    thesis: 'Build loyalty with tight-knit Filipino community through remittance-style savings and Balikbayan box partnerships',
    priority: 'HIGH',

    culturalContext: {
      insight: 'Filipinos are highly networked (barkada culture), love deals, strong WhatsApp groups',
      opportunity: 'Close-knit community = viral potential. One Filipino tells 10 friends.',
      sensitivity: 'Respect for OFW sacrifices, family-first messaging, tagalog content',
      keyMoments: ['Christmas/Simbang Gabi', 'Flores de Mayo', 'Philippine Independence Day (June 12)']
    },

    mechanics: {
      overview: 'Barkada Rewards - group savings for the Filipino community',
      steps: [
        'Barkada Bonus: Groups of 5+ friends who all use Nuqta get 2x coins',
        'Padala Points: Extra coins when saving for remittance amounts',
        'Simbang Gabi Special: 5x coins during 9-day novena period',
        'Balikbayan Partner: Coins on cargo/shipping services',
        'Pinoy Merchant Spotlight: Feature Filipino-owned businesses'
      ],
      rewards: {
        barkadaBonus: 'All 5 barkada members transact = everyone gets 2x',
        padalaPoints: 'Save AED 500 milestone = 200 bonus coins',
        simbangGabi: '5x coins Dec 16-24 (Simbang Gabi period)',
        balikbayan: '3x coins on cargo/shipping services',
        paskoBigay: 'Christmas gift packets with 50% Nuqta bonus'
      }
    },

    creativeAssets: {
      headline: '"Merry Christmas, Ka-Nuqta!"',
      subhead: '"Mag-ipon, Mag-enjoy, Mag-Nuqta"',
      tagalogCopy: 'Tipid tips para sa barkada - libre ang pag-sign up!',
      visualConcept: 'Parol (Christmas lantern), barkada photos, family remittance themes',
      cta: 'Join the Barkada',
      colors: 'Blue, red, yellow (Philippine flag colors)'
    },

    channels: [
      { channel: 'Facebook Groups', tactic: 'Filipino UAE groups, OFW communities', budget: 'AED 10K' },
      { channel: 'TikTok', tactic: 'Pinoy influencers, comedy skits about saving', budget: 'AED 15K' },
      { channel: 'Filipino stores', tactic: 'QR stands at Pinoy supermarkets, remittance centers', budget: 'AED 20K' },
      { channel: 'Church partnerships', tactic: 'Flyers at Filipino masses, Simbang Gabi', budget: 'AED 5K' },
      { channel: 'Radio Tag 91.1', tactic: 'Filipino radio station spots', budget: 'AED 12K' }
    ],

    merchantCategories: [
      { category: 'Filipino Restaurants', boost: '5x', merchants: 'Jollibee, Max\'s, local carinderias' },
      { category: 'Cargo/Shipping', boost: '3x', merchants: 'LBC, JRS, Balikbayan services' },
      { category: 'Remittance', boost: '2x', merchants: 'Exchange houses' },
      { category: 'Filipino Groceries', boost: '3x', merchants: 'Filipino supermarkets' },
      { category: 'Salons', boost: '4x', merchants: 'Filipino-owned salons (big category)' }
    ],

    kpis: {
      primary: 'Filipino community user base',
      target: '10,000 active Filipino users',
      secondary: [
        'Barkada groups formed: 500+',
        'Christmas period transactions: 600% increase',
        'Filipino merchant partnerships: 50+',
        'Viral coefficient in community: 1.5+'
      ]
    },

    budget: 'AED 80,000',
    expectedROI: '8x (high virality in tight-knit community)'
  },
  {
    id: 'MC3',
    name: 'Pakistani Pride (Pakistani Community)',
    community: 'Pakistani',
    population: '1.5M+ Pakistanis in UAE',
    period: 'Eid + Pakistan Day (March 23) + Independence Day (Aug 14)',
    timing: 'Year-round with peak moments',
    category: 'Community Building',
    thesis: 'Engage Pakistan\'s large UAE diaspora through cricket, Eid celebrations, and Pakistani merchant network',
    priority: 'HIGH',

    culturalContext: {
      insight: 'Cricket-crazy nation, strong family values, love for biryani and chai',
      opportunity: 'Second-largest South Asian community, underserved by marketing',
      sensitivity: 'Respect for religious values, family-oriented messaging, Urdu content',
      keyMoments: ['Eid ul-Fitr/Adha', 'Pakistan Day (March 23)', 'Independence Day (Aug 14)', 'PSL/Cricket World Cup']
    },

    mechanics: {
      overview: 'Cricket & Chai - rewards that resonate with Pakistani culture',
      steps: [
        'Match Day Mania: 5x coins during Pakistan cricket matches',
        'Chai Time Rewards: 3x coins at Pakistani chai spots',
        'Biryani Bonanza: 4x coins at Pakistani restaurants',
        'Pakistan Day Special: 23x coins on March 23rd',
        'Independence Savings: AED 14 bonus on Aug 14th'
      ],
      rewards: {
        matchDay: '5x coins during live Pakistan matches',
        chaiTime: '3x coins at chai cafés 4-7 PM',
        biryani: '4x coins at Pakistani restaurants',
        pakistanDay: '23x coins (March 23 only)',
        independenceDay: 'AED 14 bonus + 14x coins (Aug 14)'
      }
    },

    creativeAssets: {
      headline: '"پاکستان زندہ باد" (Long Live Pakistan)',
      subhead: '"Save like a champion with Nuqta"',
      urduCopy: 'نقطہ کے ساتھ بچت کریں - پاکستانی انداز میں',
      visualConcept: 'Cricket bat + coins, green/white colors, chai cups, biryani',
      cta: 'Join Team Nuqta',
      colors: 'Green, white (Pakistan flag)'
    },

    channels: [
      { channel: 'Cricket venues', tactic: 'Activation at Dubai Stadium during matches', budget: 'AED 25K' },
      { channel: 'WhatsApp', tactic: 'Cricket groups, Pakistani community groups', budget: 'AED 8K' },
      { channel: 'Pakistani restaurants', tactic: 'Table tents, QR codes at popular spots', budget: 'AED 15K' },
      { channel: 'FM 100.3', tactic: 'Urdu radio spots', budget: 'AED 12K' },
      { channel: 'Instagram/TikTok', tactic: 'Pakistani influencers, cricket content', budget: 'AED 18K' }
    ],

    merchantCategories: [
      { category: 'Pakistani Restaurants', boost: '4x', merchants: 'Biryani houses, BBQ spots' },
      { category: 'Chai Cafés', boost: '3x', merchants: 'Pakistani chai spots, dhabas' },
      { category: 'Grocery', boost: '2x', merchants: 'Pakistani supermarkets' },
      { category: 'Fashion', boost: '3x', merchants: 'Pakistani clothing stores' },
      { category: 'Salons', boost: '3x', merchants: 'Pakistani barber shops, salons' }
    ],

    kpis: {
      primary: 'Pakistani community engagement',
      target: '8,000 active Pakistani users',
      secondary: [
        'Match day transactions: 500% spike',
        'Pakistan Day participation: 2,000+',
        'Pakistani merchant sign-ups: 40+',
        'Community referral rate: 30%+'
      ]
    },

    budget: 'AED 90,000',
    expectedROI: '7x (large underserved community)'
  },
  {
    id: 'MC4',
    name: 'Arab Expat Excellence',
    community: 'Arab Expats',
    population: '1M+ Arab expats (Egyptian, Jordanian, Lebanese, Syrian)',
    period: 'Year-round + Ramadan/Eid',
    timing: 'Continuous with Ramadan peak',
    category: 'Community Building',
    thesis: 'Engage Arab expats through Arabic-first experience, Arab cuisine, and shisha café culture',
    priority: 'HIGH',

    culturalContext: {
      insight: 'Arabic-speaking, appreciate Arab hospitality, strong café culture',
      opportunity: 'Native Arabic speakers appreciate Arabic-first UX and content',
      sensitivity: 'Diverse Arab nationalities, avoid generalizations, respect dialects',
      keyMoments: ['Ramadan/Eid', 'Egyptian Revolution Day', 'Lebanese Independence', 'National days']
    },

    mechanics: {
      overview: 'Ahlan wa Sahlan - Arabic-first rewards experience',
      steps: [
        'Arabic App Experience: Full Arabic UI with dialect options',
        'Majlis Rewards: 3x coins at shisha cafés and Arabic coffee shops',
        'Levantine Feast: 4x coins at Lebanese, Syrian, Jordanian restaurants',
        'Egyptian Night: 5x coins on Thursdays at Egyptian spots',
        'Arabic Content Creators: Arab influencer ambassador program'
      ],
      rewards: {
        majlisRewards: '3x coins at shisha/Arabic cafés',
        levantineDining: '4x coins at Levantine restaurants',
        egyptianThursday: '5x coins at Egyptian restaurants (Thursdays)',
        arabicCreator: 'Top Arab content creators get monthly bonuses',
        ramadanBoost: 'Special multipliers during Ramadan (see cultural campaigns)'
      }
    },

    creativeAssets: {
      headline: '"أهلاً وسهلاً" (Welcome)',
      subhead: '"وفّر أكثر مع نقطة"',
      arabicCopy: 'تطبيق عربي بالكامل - لأنك تستحق الأفضل',
      visualConcept: 'Arabic calligraphy, traditional patterns, coffee cups, majlis setting',
      cta: 'ابدأ التوفير',
      colors: 'Deep maroon, gold, black (elegant Arab aesthetic)'
    },

    channels: [
      { channel: 'Arabic Instagram', tactic: 'Arab lifestyle influencers', budget: 'AED 20K' },
      { channel: 'Shisha cafés', tactic: 'Table QR codes, menu integration', budget: 'AED 15K' },
      { channel: 'Arabic radio', tactic: 'Mix FM Arabic, Emarat FM', budget: 'AED 15K' },
      { channel: 'Arab community events', tactic: 'Egyptian/Lebanese/Jordanian clubs', budget: 'AED 12K' },
      { channel: 'WhatsApp', tactic: 'Arabic community groups', budget: 'AED 5K' }
    ],

    merchantCategories: [
      { category: 'Shisha Cafés', boost: '3x', merchants: 'Arabic cafés, majlis spots' },
      { category: 'Lebanese Restaurants', boost: '4x', merchants: 'Lebanese fine dining, casual' },
      { category: 'Egyptian Restaurants', boost: '4x', merchants: 'Koshary, Egyptian cuisine' },
      { category: 'Syrian/Jordanian', boost: '4x', merchants: 'Shawarma, Arabic sweets' },
      { category: 'Arabic Sweets', boost: '3x', merchants: 'Kunafa, baklava shops' }
    ],

    kpis: {
      primary: 'Arab expat user satisfaction (NPS)',
      target: 'NPS 60+ in Arab segment',
      secondary: [
        'Arabic app usage: 40% of Arab users',
        'Arab community users: 6,000+',
        'Arab merchant partnerships: 60+',
        'Arabic content engagement: 5%+ rate'
      ]
    },

    budget: 'AED 85,000',
    expectedROI: '6x (Arabic-first differentiation)'
  },
  {
    id: 'MC5',
    name: 'Western Expat Weekend Club',
    community: 'Western Expats',
    population: '500K+ Western expats (British, American, European, Australian)',
    period: 'Year-round + Christmas, Brunch culture',
    timing: 'Weekends focus, holiday peaks',
    category: 'Lifestyle',
    thesis: 'Target high-spending Western expats through brunch culture, fitness, and premium experiences',
    priority: 'MEDIUM',

    culturalContext: {
      insight: 'Friday brunch culture, fitness-focused, higher disposable income',
      opportunity: 'Highest per-transaction spending, premium merchant affinity',
      sensitivity: 'Quality over deals, experience-focused, not price-sensitive',
      keyMoments: ['Friday Brunches', 'Christmas/New Year', 'Yoga/Fitness events', 'Rugby Sevens']
    },

    mechanics: {
      overview: 'Premium Rewards for premium lifestyle',
      steps: [
        'Brunch Club: 4x coins on Friday/Saturday brunches',
        'Fitness First: 5x coins at gyms, yoga studios, fitness centers',
        'Rugby Sevens: 10x coins during Dubai Rugby Sevens week',
        'Christmas Feast: 5x coins at Western restaurants Dec 20-26',
        'Quality Quest: Bonus coins at Michelin/premium venues'
      ],
      rewards: {
        brunchClub: '4x coins on brunch transactions (Fri-Sat)',
        fitnessFirst: '5x coins at gyms and fitness studios',
        rugbySevens: '10x coins during Rugby Sevens weekend',
        christmasFeast: '5x coins at Western restaurants (Dec 20-26)',
        premiumBonus: '3x base at premium/fine dining venues'
      }
    },

    creativeAssets: {
      headline: '"Save Smart, Live Well"',
      subhead: '"Rewards that match your lifestyle"',
      visualConcept: 'Brunch scenes, gym equipment, premium aesthetics, Dubai skyline',
      cta: 'Join the Club',
      colors: 'Navy, white, gold (sophisticated palette)'
    },

    channels: [
      { channel: 'Instagram', tactic: 'Brunch bloggers, fitness influencers', budget: 'AED 20K' },
      { channel: 'Dubai Marina/JBR', tactic: 'Gym partnerships, brunch spots', budget: 'AED 15K' },
      { channel: 'LinkedIn', tactic: 'Professional networking events', budget: 'AED 8K' },
      { channel: 'Sports events', tactic: 'Rugby Sevens, golf tournaments', budget: 'AED 20K' },
      { channel: 'Premium venues', tactic: 'Five-star hotel partnerships', budget: 'AED 12K' }
    ],

    merchantCategories: [
      { category: 'Brunch Venues', boost: '4x', merchants: 'Friday brunch spots' },
      { category: 'Gyms & Fitness', boost: '5x', merchants: 'Premium gyms, yoga, CrossFit' },
      { category: 'Fine Dining', boost: '3x', merchants: 'Premium restaurants' },
      { category: 'Sports Bars', boost: '3x', merchants: 'Pubs, sports venues' },
      { category: 'Wellness', boost: '4x', merchants: 'Spas, wellness centers' }
    ],

    kpis: {
      primary: 'Average transaction value in Western segment',
      target: 'AED 150+ average (vs AED 80 overall)',
      secondary: [
        'Western expat users: 3,000+',
        'Premium merchant GMV: AED 100K+/month',
        'Brunch venue partnerships: 30+',
        'Fitness center sign-ups: 20+'
      ]
    },

    budget: 'AED 75,000',
    expectedROI: '5x (high-value transactions)'
  },
  {
    id: 'MC6',
    name: 'Chinese New Year Golden Festival',
    community: 'Chinese',
    population: '200K+ Chinese in UAE',
    period: 'Chinese New Year (2 weeks)',
    timing: 'January-February 2027',
    category: 'Cultural Festival',
    thesis: 'Capture Chinese New Year spending on dining, gifts, and celebrations',
    priority: 'MEDIUM',

    culturalContext: {
      insight: 'CNY is biggest spending period, red envelopes (hongbao) tradition',
      opportunity: 'Growing Chinese population, WeChat-style features resonate',
      sensitivity: 'Lucky numbers (8), avoid unlucky (4), red color mandatory',
      keyMoments: ['CNY Eve Dinner', 'Day 1-7 celebrations', 'Lantern Festival (Day 15)']
    },

    mechanics: {
      overview: 'Golden Hongbao - digital red envelopes with Nuqta coins',
      steps: [
        '8x8 Lucky Boost: 8x coins on transactions of AED 88, 888, etc.',
        'Digital Hongbao: Send red envelope coin gifts',
        'Dragon Dance: 5x coins at Chinese restaurants',
        'Lunar New Year Quest: Visit 8 merchants, win AED 88',
        'WeChat-style Groups: Hongbao drops in group chats'
      ],
      rewards: {
        luckyBoost: '8x coins on lucky number transactions',
        hongbao: 'Red envelope gifts with 28% Nuqta bonus',
        dragonDining: '5x coins at Chinese restaurants',
        lunarQuest: 'Visit 8 merchants = 888 coins (AED 88.80)',
        lanternFestival: '15x coins on Day 15 (Lantern Festival)'
      }
    },

    creativeAssets: {
      headline: '"恭喜发财" (Gong Xi Fa Cai)',
      subhead: '"Prosperity starts with savings"',
      chineseCopy: '新年快乐 - 用Nuqta红包送祝福',
      visualConcept: 'Red envelopes, dragons, gold coins, lanterns, prosperity symbols',
      cta: 'Send a Hongbao',
      colors: 'Red, gold (mandatory CNY colors)'
    },

    channels: [
      { channel: 'WeChat', tactic: 'WeChat groups, mini-program integration', budget: 'AED 15K' },
      { channel: 'Dragon Mart', tactic: 'On-ground activation, merchant partnerships', budget: 'AED 20K' },
      { channel: 'Chinese restaurants', tactic: 'Table tents, QR codes', budget: 'AED 10K' },
      { channel: 'Chinese associations', tactic: 'Community event partnerships', budget: 'AED 8K' },
      { channel: 'Chinese influencers', tactic: 'Xiaohongshu, Weibo content', budget: 'AED 12K' }
    ],

    merchantCategories: [
      { category: 'Chinese Restaurants', boost: '5x', merchants: 'Chinese fine dining, dim sum' },
      { category: 'Dragon Mart', boost: '4x', merchants: 'Dragon Mart stores' },
      { category: 'Gold & Jewelry', boost: '8x (CNY only)', merchants: 'Jewelry stores' },
      { category: 'Gifts & Souvenirs', boost: '3x', merchants: 'Gift shops' },
      { category: 'Supermarkets', boost: '2x', merchants: 'Asian supermarkets' }
    ],

    kpis: {
      primary: 'Chinese community CNY transactions',
      target: '500% increase during CNY period',
      secondary: [
        'Hongbao sent: 2,000+',
        'Chinese user sign-ups: 1,500+',
        'Dragon Mart partners: 30+',
        'Lucky number transactions: 1,000+'
      ]
    },

    budget: 'AED 65,000',
    expectedROI: '6x (high cultural engagement)'
  }
];

const nuqtaMerchantCampaigns = [
  {
    id: 'NM1',
    name: 'Event Blitz Domination',
    inspiredBy: ['Square SMB Blitz', 'WeWork Local', 'Coachella Influencer'],
    category: 'High-Volume Acquisition',
    thesis: 'Concentrate resources at high-density events to sign 50-100 merchants in 48 hours',
    priority: 'CRITICAL',

    mechanics: {
      overview: 'Dedicated team + booth at major events for rapid merchant signup',
      steps: [
        'Book presence at Global Village, DSF markets, exhibitions',
        'BD team approaches each stall/merchant systematically',
        '10-minute pitch: Demo → Sign → QR → Train',
        'Instant onboarding: QR printed on-site',
        '7-day "Event Exclusive" boost for signing during event'
      ],
      offer: {
        trialPeriod: '30 days at 0% commission',
        instantSetup: 'QR code printed in 5 minutes',
        training: '15-minute staff walkthrough',
        boost: 'Featured in "New Merchants" for 7 days'
      }
    },

    creativeAssets: {
      pitchDeck: '3-slide visual: Problem → Solution → ROI proof',
      leaveBehinds: 'Branded folder with QR, quick-start guide, support contact',
      boothDesign: 'Eye-catching gold booth with "Get More Customers" headline',
      staffScript: 'See messaging section below'
    },

    channels: [
      { channel: 'Event booth', tactic: 'High-visibility location', budget: 'AED 30K' },
      { channel: 'BD team', tactic: '4-6 reps working stalls', budget: 'AED 20K' },
      { channel: 'Organizer partnership', tactic: 'Email to all vendors pre-event', budget: 'AED 5K' },
      { channel: 'On-site printing', tactic: 'Instant QR generation', budget: 'AED 3K' }
    ],

    kpis: {
      primary: 'Merchants signed per event',
      target: '50-100 per major event',
      secondary: [
        'Pitch-to-signup rate: 40%+',
        '7-day activation: 60%+',
        'Cost per merchant: < AED 150'
      ]
    },

    salesScript: {
      opener: '"Hi! I noticed you have a lot of customers. Quick question: how do you get them to come back?"',
      problem: '"Most merchants lose 80% of customers after one visit. No way to reach them again."',
      solution: '"Nuqta lets customers earn rewards with you. They come back to earn more, you get repeat business."',
      proof: '"Cafés using Nuqta see 35% more repeat visits in the first month."',
      cta: '"Can I show you a 2-minute demo? We can have you live in 10 minutes."',
      objectionHandlers: {
        'Too busy': '"I get it — that\'s why setup takes literally 10 minutes. Let me come back in an hour?"',
        'Already have loyalty': '"Great! Nuqta works alongside it. Double the reasons for customers to return."',
        'What\'s the cost': '"Zero upfront. You only pay 5% when customers actually transact. No customers, no cost."',
        'Need to think': '"Totally fair. Here\'s my card. The 30-day free trial is only available during the event though."'
      }
    },

    timeline: {
      week1: 'Secure event spots for next 3 months',
      week2: 'Train BD team, prepare materials',
      week3: 'First event execution',
      week4: 'Debrief, iterate, scale'
    },

    budget: 'AED 100,000 (for 3 major events)',
    expectedROI: '5x (300 merchants at AED 333 each, LTV AED 2000)'
  },
  {
    id: 'NM2',
    name: 'Merchant Referral Army',
    inspiredBy: ['Dropbox B2B Referral', 'Uber Merchant Referral', 'HubSpot Partners'],
    category: 'Viral Merchant Growth',
    thesis: 'Merchants trust other merchants — incentivize network-driven acquisition',
    priority: 'HIGH',

    mechanics: {
      overview: 'Existing merchants earn rewards for referring new merchants',
      steps: [
        'Merchant A refers Merchant B via dashboard link',
        'Merchant B signs up and mentions referral',
        'Merchant B achieves AED 5,000 GMV in 30 days',
        'Merchant A receives AED 500 marketing credit',
        'Both get featured in "Merchant Network" section'
      ],
      offer: {
        referrerReward: 'AED 500 marketing credit (can use for push campaigns)',
        refereeReward: 'Extended 60-day trial + priority support',
        bonusTier: '5+ referrals = VIP merchant status',
        recognition: 'Top Referrer leaderboard'
      }
    },

    creativeAssets: {
      dashboardWidget: '"Know another business owner? Refer them for AED 500 credit"',
      email: 'Monthly "Refer and Earn" reminder',
      certificate: '"Thank you for growing the Nuqta family"',
      leaderboard: 'Top Referrer merchants highlighted in merchant portal'
    },

    channels: [
      { channel: 'Merchant dashboard', tactic: 'Prominent referral CTA', budget: 'AED 0' },
      { channel: 'Email', tactic: 'Monthly referral reminder', budget: 'AED 2K' },
      { channel: 'WhatsApp', tactic: 'Personal message from success manager', budget: 'AED 0' },
      { channel: 'In-person', tactic: 'BD asks for referrals during check-ins', budget: 'AED 0' }
    ],

    kpis: {
      primary: 'Merchants acquired via referral',
      target: '30% of new merchants',
      secondary: [
        'Referrals per active merchant: 0.5/month',
        'Referral conversion rate: 50%+',
        'Referred merchant activation: 70%+'
      ]
    },

    salesScript: {
      askForReferral: '"You\'ve been seeing great results! Do you know any other business owners who\'d benefit from Nuqta?"',
      incentiveReminder: '"Every merchant you refer who hits AED 5K GMV gets you AED 500 marketing credit."',
      makeItEasy: '"You can share your referral link, or just give me their name and I\'ll reach out personally."'
    },

    timeline: {
      week1: 'Build referral tracking in dashboard',
      week2: 'Train success team on referral asks',
      week3: 'Launch referral program to active merchants',
      week4: 'First payout and testimonial collection'
    },

    budget: 'AED 25,000/month (referral credits)',
    expectedROI: '8x (AED 500 per merchant vs AED 150 direct BD)'
  },
  {
    id: 'NM3',
    name: 'Content Co-Creation Studio',
    inspiredBy: ['Yelp for Business', 'Instagram for Business', 'Shopify Success Stories'],
    category: 'Value-Add Services',
    thesis: 'Provide professional content as acquisition and retention tool',
    priority: 'HIGH',

    mechanics: {
      overview: 'Nuqta produces merchant content in exchange for commitment',
      steps: [
        'Offer content package: 15 posts/month (photos, videos, captions)',
        'Merchant commits to 6-month Nuqta partnership',
        'Content team visits merchant for photo/video shoot',
        'Content delivered for merchant\'s social + Nuqta channels',
        'Merchant featured in Nuqta discovery with premium placement'
      ],
      offer: {
        package: '15 pieces of content per month',
        cost: 'AED 2,000/month (50% subsidized by Nuqta)',
        commitment: '6-month partnership agreement',
        bonus: 'Premium placement in app + 500 targeted push notifications'
      }
    },

    creativeAssets: {
      salesDeck: 'Before/After content examples from pilot merchants',
      sampleContent: 'High-quality food photos, storefront videos',
      testimonial: '"Our Instagram engagement went up 300%" — [Merchant]',
      packageBreakdown: 'Visual showing 15 posts, types, distribution'
    },

    channels: [
      { channel: 'BD outreach', tactic: 'Pitch to high-potential merchants', budget: 'AED 0' },
      { channel: 'LinkedIn', tactic: 'Target restaurant/retail owners', budget: 'AED 5K' },
      { channel: 'Email', tactic: 'Offer to existing merchants as upgrade', budget: 'AED 2K' },
      { channel: 'Case studies', tactic: 'Show ROI to prospects', budget: 'AED 3K' }
    ],

    kpis: {
      primary: 'Content package signups',
      target: '30 merchants in 3 months',
      secondary: [
        'Merchant GMV increase: +40%',
        'Merchant retention: 95% at 6 months',
        'Content engagement: 5%+ on merchant posts'
      ]
    },

    salesScript: {
      opener: '"I noticed your Instagram could use some professional content. What if I told you we could handle it for you?"',
      value: '"We\'ll send a photographer, create 15 posts monthly, and feature you to 10,000+ Nuqta users."',
      cost: '"It\'s AED 2,000/month — less than hiring a freelancer, and you get distribution built in."',
      objection: '"The commitment? 6 months. If you don\'t see results in 60 days, we\'ll pause and discuss."'
    },

    timeline: {
      week1: 'Hire content team (1 photographer, 1 editor)',
      week2: 'Create sample content with 3 pilot merchants',
      week3: 'Build sales deck with before/after',
      week4: 'Launch to merchant prospects'
    },

    budget: 'AED 60,000 (team + equipment + subsidy)',
    expectedROI: '4x (high-retention merchants, premium revenue tier)'
  },
  {
    id: 'NM4',
    name: 'Category Conquest',
    inspiredBy: ['Uber Market Launch', 'DoorDash Neighborhood Strategy', 'Zomato Vertical'],
    category: 'Strategic Expansion',
    thesis: 'Dominate one category before expanding to create credibility and network effects',
    priority: 'MEDIUM',

    mechanics: {
      overview: 'Focus 80% of resources on one category until 50%+ market share',
      steps: [
        'Select focus category (recommend: Cafés in Downtown/Marina)',
        'Map all cafés in target areas (aim for 50)',
        'Dedicated BD rep for café vertical only',
        'Café-specific marketing materials and case studies',
        'Launch "Best Coffee in Dubai" leaderboard on Nuqta'
      ],
      offer: {
        categoryBonus: 'First 20 cafés get 90-day 0% commission',
        exclusivity: 'Café-specific features (Coffee Rewards boost)',
        community: 'Café owner WhatsApp group for support',
        marketing: '"Nuqta Café Week" event with heavy user promotion'
      }
    },

    creativeAssets: {
      verticalPitch: '"Nuqta is THE coffee app for Dubai"',
      caseStudy: '"How [Café] increased repeat visits by 45%"',
      leaderboard: 'Real-time "Best Cafés" ranking',
      eventBranding: '"Nuqta Café Week" promotional materials'
    },

    channels: [
      { channel: 'Targeted BD', tactic: 'Door-to-door in target areas', budget: 'AED 20K' },
      { channel: 'LinkedIn', tactic: 'Message café owners directly', budget: 'AED 3K' },
      { channel: 'Industry events', tactic: 'Attend café expos, barista competitions', budget: 'AED 10K' },
      { channel: 'Partnerships', tactic: 'Coffee bean suppliers as referral partners', budget: 'AED 5K' }
    ],

    kpis: {
      primary: 'Café market share in target areas',
      target: '50% of cafés in Downtown + Marina',
      secondary: [
        'Café signups: 50 in 90 days',
        'Average café GMV: AED 8,000/month',
        'Café retention: 85% at 6 months'
      ]
    },

    timeline: {
      week1_4: 'Map target cafés, hire café BD specialist',
      week5_8: 'Sign 25 cafés with trial offer',
      week9_12: 'Launch Café Week event, sign remaining 25',
      ongoing: 'Expand to second category (salons)'
    },

    budget: 'AED 40,000 (BD + marketing + event)',
    expectedROI: '6x (category dominance creates referral flywheel)'
  },
  {
    id: 'NM5',
    name: 'Merchant Success Academy',
    inspiredBy: ['HubSpot Academy', 'Shopify Learn', 'Google Digital Garage'],
    category: 'Education & Retention',
    thesis: 'Educated merchants use the platform better and stay longer',
    priority: 'MEDIUM',

    mechanics: {
      overview: 'Free training program that teaches merchants to maximize Nuqta',
      steps: [
        'Weekly 30-min webinars on marketing topics',
        'On-demand video library (10 modules)',
        'Certification: "Nuqta Marketing Pro"',
        'Certified merchants get featured + badge',
        'Graduate merchants become referral ambassadors'
      ],
      curriculum: {
        module1: 'Setting up your Nuqta profile for success',
        module2: 'Creating promotions that drive traffic',
        module3: 'Using customer data insights',
        module4: 'Social media integration best practices',
        module5: 'Maximizing holiday seasons'
      }
    },

    creativeAssets: {
      webinarTemplate: 'Branded slides with interactive elements',
      certification: 'Digital badge + physical certificate',
      casestudies: 'Student success stories',
      communityBranding: '"Nuqta Pro Merchants" exclusive group'
    },

    channels: [
      { channel: 'Email', tactic: 'Weekly webinar invites', budget: 'AED 2K' },
      { channel: 'Merchant dashboard', tactic: 'Academy tab with progress tracker', budget: 'AED 0' },
      { channel: 'WhatsApp', tactic: 'Reminder messages before webinars', budget: 'AED 0' },
      { channel: 'In-person', tactic: 'Quarterly graduation events', budget: 'AED 10K' }
    ],

    kpis: {
      primary: 'Certified merchants',
      target: '100 in 6 months',
      secondary: [
        'Webinar attendance: 50+ per session',
        'Certification completion: 40% of starters',
        'Certified merchant retention: 95%'
      ]
    },

    timeline: {
      week1_2: 'Develop curriculum and record first 5 modules',
      week3: 'Launch Academy to existing merchants',
      week4_8: 'Weekly webinars + first cohort',
      week9_12: 'First graduation event + case studies'
    },

    budget: 'AED 25,000 (content production + events)',
    expectedROI: '10x (certified merchants churn 50% less)'
  }
];

// =============================================================================
// UI COMPONENTS
// =============================================================================

// Campaign Analysis Card
const CampaignAnalysisCard = ({ campaign }: { campaign: typeof viralCampaigns[0] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`bg-white rounded-xl border-2 overflow-hidden transition-all ${expanded ? 'border-[#c9a227]' : 'border-gray-200'}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-start justify-between hover:bg-gray-50 transition-colors text-left"
      >
        <div className="flex items-start gap-4">
          <div className="text-3xl">{campaign.icon}</div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{campaign.category}</span>
              <span className="text-xs text-gray-400">{campaign.year}</span>
            </div>
            <h3 className="font-bold text-gray-900">{campaign.name}</h3>
            <p className="text-sm text-gray-500">{campaign.company}</p>
            <p className="text-sm text-gray-600 mt-1">{campaign.thesis}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-bold text-emerald-600">{campaign.metrics.growth}</div>
            <div className="text-xs text-gray-400">Growth</div>
          </div>
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {expanded && (
        <div className="px-4 pb-4 border-t border-gray-100 pt-4 space-y-6">
          {/* Metrics */}
          <div>
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <BarChart3 size={16} className="text-emerald-600" />
              Key Metrics
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {Object.entries(campaign.metrics).map(([key, value]) => (
                <div key={key} className="bg-emerald-50 rounded-lg p-3 text-center">
                  <div className="text-sm font-bold text-emerald-700">{value}</div>
                  <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mechanics */}
          <div>
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Target size={16} className="text-purple-600" />
              Exact Mechanics
            </h4>
            <div className="grid md:grid-cols-5 gap-3">
              {Object.entries(campaign.mechanics).map(([key, value]) => (
                <div key={key} className="bg-purple-50 rounded-lg p-3">
                  <div className="text-xs font-bold text-purple-700 uppercase mb-1">{key}</div>
                  <div className="text-sm text-gray-700">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Why It Worked */}
          <div>
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Lightbulb size={16} className="text-amber-600" />
              Why It Worked
            </h4>
            <div className="grid md:grid-cols-2 gap-2">
              {campaign.whyItWorked.map((reason, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <Check className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Hooks */}
          <div>
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Sparkles size={16} className="text-pink-600" />
              Creative Hooks
            </h4>
            <div className="space-y-2">
              {campaign.creativeHooks.map((hook, i) => (
                <div key={i} className="bg-pink-50 rounded-lg p-3 text-sm font-medium text-pink-800 flex items-center gap-2">
                  <span className="text-pink-400">"</span>
                  {hook}
                  <span className="text-pink-400">"</span>
                </div>
              ))}
            </div>
          </div>

          {/* Failure Modes */}
          <div>
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <AlertCircle size={16} className="text-red-600" />
              Failure Modes
            </h4>
            <div className="space-y-1">
              {campaign.failureModes.map((mode, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-red-700">
                  <X className="shrink-0 mt-0.5" size={14} />
                  <span>{mode}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nuqta Application */}
          <div className="bg-[#c9a227]/10 rounded-xl p-4 border-2 border-[#c9a227]/30">
            <h4 className="font-bold text-[#c9a227] mb-3 flex items-center gap-2">
              <Rocket size={16} />
              NUQTA APPLICATION
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-bold text-gray-600 uppercase mb-1">User Campaign</div>
                <div className="text-sm text-gray-800">{campaign.nuqtaApplication.userCampaign}</div>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-600 uppercase mb-1">Merchant Campaign</div>
                <div className="text-sm text-gray-800">{campaign.nuqtaApplication.merchantCampaign}</div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-[#c9a227]/30">
              <div className="text-xs font-bold text-gray-600 uppercase mb-1">Key Adaptation</div>
              <div className="text-sm text-gray-800">{campaign.nuqtaApplication.keyAdaptation}</div>
            </div>
            <div className="mt-2 text-sm font-bold text-emerald-700">
              Expected Impact: {campaign.nuqtaApplication.expectedImpact}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Multicultural Community Campaign Card
const MulticulturalCampaignCard = ({ campaign }: { campaign: typeof multiculturalCampaigns[0] }) => {
  const [expanded, setExpanded] = useState(false);

  const communityColors: Record<string, string> = {
    'Indian': 'from-orange-600 to-green-600',
    'Filipino': 'from-blue-600 to-red-600',
    'Pakistani': 'from-green-700 to-green-500',
    'Arab Expats': 'from-maroon-600 to-amber-600',
    'Western Expats': 'from-blue-800 to-blue-500',
    'Chinese': 'from-red-600 to-yellow-500'
  };

  const gradientColor = communityColors[campaign.community] || 'from-purple-600 to-indigo-600';

  return (
    <div className={`rounded-2xl overflow-hidden border-2 ${expanded ? 'border-[#c9a227]' : 'border-gray-200'}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full p-6 bg-gradient-to-r ${gradientColor} text-white text-left`}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded">{campaign.id}</span>
              <span className={`text-xs px-2 py-0.5 rounded ${
                campaign.priority === 'CRITICAL' ? 'bg-red-500' :
                campaign.priority === 'HIGH' ? 'bg-amber-500' : 'bg-blue-500'
              }`}>
                {campaign.priority}
              </span>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded">{campaign.community}</span>
              <span className="text-xs opacity-80">{campaign.population}</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{campaign.name}</h3>
            <p className="text-white/80 text-sm mb-2">{campaign.thesis}</p>
            <div className="flex items-center gap-4 text-xs flex-wrap">
              <span className="bg-white/10 px-2 py-1 rounded">{campaign.period}</span>
              <span className="bg-white/10 px-2 py-1 rounded">{campaign.timing}</span>
            </div>
          </div>
          {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>

      {expanded && (
        <div className="p-6 bg-white space-y-6">
          {/* Cultural Context */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Globe size={18} className="text-emerald-600" />
              Cultural Context
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-emerald-50 rounded-lg p-3">
                <div className="text-xs font-bold text-emerald-700 uppercase mb-1">Cultural Insight</div>
                <div className="text-sm text-gray-800">{campaign.culturalContext.insight}</div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-3">
                <div className="text-xs font-bold text-emerald-700 uppercase mb-1">Opportunity</div>
                <div className="text-sm text-gray-800">{campaign.culturalContext.opportunity}</div>
              </div>
              <div className="bg-amber-50 rounded-lg p-3">
                <div className="text-xs font-bold text-amber-700 uppercase mb-1">Sensitivity Notes</div>
                <div className="text-sm text-gray-800">{campaign.culturalContext.sensitivity}</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3">
                <div className="text-xs font-bold text-purple-700 uppercase mb-1">Key Moments</div>
                <div className="text-sm text-gray-800">{campaign.culturalContext.keyMoments.join(', ')}</div>
              </div>
            </div>
          </div>

          {/* Mechanics */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Target size={18} className="text-purple-600" />
              Campaign Mechanics
            </h4>
            <p className="text-gray-600 mb-3">{campaign.mechanics.overview}</p>
            <div className="space-y-2">
              {campaign.mechanics.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rewards with AED Values */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Gift size={18} className="text-amber-600" />
              Reward Structure
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {Object.entries(campaign.mechanics.rewards).map(([key, value]) => (
                <div key={key} className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                  <div className="text-xs font-bold text-amber-700 uppercase mb-1">{key.replace(/([A-Z])/g, ' $1')}</div>
                  <div className="text-sm text-gray-800 font-medium">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Merchant Categories */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Store size={18} className="text-blue-600" />
              Merchant Categories & Boosts
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {campaign.merchantCategories.map((cat, i) => (
                <div key={i} className="bg-blue-50 rounded-lg p-3 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-blue-800">{cat.category}</div>
                    <div className="text-xs text-gray-600">{cat.merchants}</div>
                  </div>
                  <div className="text-lg font-bold text-blue-600">{cat.boost}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Assets */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Image size={18} className="text-pink-600" />
              Creative Assets
            </h4>
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200">
              <div className="text-xl font-bold text-gray-900 mb-1">{campaign.creativeAssets.headline}</div>
              <div className="text-gray-600 mb-3">{campaign.creativeAssets.subhead}</div>
              {'hindiCopy' in campaign.creativeAssets && (
                <div className="text-lg font-medium text-orange-700 mb-2">{campaign.creativeAssets.hindiCopy}</div>
              )}
              {'tagalogCopy' in campaign.creativeAssets && (
                <div className="text-lg font-medium text-blue-700 mb-2">{campaign.creativeAssets.tagalogCopy}</div>
              )}
              {'urduCopy' in campaign.creativeAssets && (
                <div className="text-lg font-medium text-green-700 mb-2 text-right" dir="rtl">{campaign.creativeAssets.urduCopy}</div>
              )}
              {'arabicCopy' in campaign.creativeAssets && (
                <div className="text-lg font-medium text-maroon-700 mb-2 text-right" dir="rtl">{campaign.creativeAssets.arabicCopy}</div>
              )}
              {'chineseCopy' in campaign.creativeAssets && (
                <div className="text-lg font-medium text-red-700 mb-2">{campaign.creativeAssets.chineseCopy}</div>
              )}
              <div className="grid md:grid-cols-3 gap-3 mt-3">
                <div>
                  <div className="text-xs text-gray-500 uppercase mb-1">Visual Concept</div>
                  <div className="text-sm text-gray-700">{campaign.creativeAssets.visualConcept}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase mb-1">Color Palette</div>
                  <div className="text-sm text-gray-700">{campaign.creativeAssets.colors}</div>
                </div>
                <div>
                  <button className="bg-[#c9a227] text-white px-4 py-2 rounded-lg font-bold text-sm w-full">
                    {campaign.creativeAssets.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Channels */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Radio size={18} className="text-cyan-600" />
              Channel Strategy
            </h4>
            <div className="space-y-2">
              {campaign.channels.map((ch, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-cyan-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="font-medium text-cyan-800 w-36">{ch.channel}</div>
                    <div className="text-sm text-gray-600">{ch.tactic}</div>
                  </div>
                  <div className="text-sm font-bold text-cyan-600">{ch.budget}</div>
                </div>
              ))}
            </div>
          </div>

          {/* KPIs */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <BarChart3 size={18} className="text-emerald-600" />
              Success Metrics
            </h4>
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-xs text-gray-500 uppercase">Primary KPI</div>
                  <div className="font-bold text-gray-900">{campaign.kpis.primary}</div>
                </div>
                <div className="text-2xl font-bold text-emerald-600">{campaign.kpis.target}</div>
              </div>
              <div className="space-y-1">
                {campaign.kpis.secondary.map((kpi, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Check className="text-emerald-500" size={14} />
                    <span>{kpi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Budget & ROI */}
          <div className="bg-[#0a1628] rounded-xl p-4 text-white flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-400 uppercase">Budget</div>
              <div className="text-xl font-bold">{campaign.budget}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400 uppercase">Expected ROI</div>
              <div className="text-xl font-bold text-[#c9a227]">{campaign.expectedROI}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// UAE Cultural Campaign Card
const CulturalCampaignCard = ({ campaign }: { campaign: typeof uaeCulturalCampaigns[0] }) => {
  const [expanded, setExpanded] = useState(false);

  const priorityColor = campaign.priority === 'CRITICAL' ? 'from-red-600 to-rose-600' :
                        campaign.priority === 'HIGH' ? 'from-amber-600 to-orange-600' :
                        'from-blue-600 to-indigo-600';

  return (
    <div className={`rounded-2xl overflow-hidden border-2 ${expanded ? 'border-[#c9a227]' : 'border-gray-200'}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full p-6 bg-gradient-to-r ${priorityColor} text-white text-left`}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded">{campaign.id}</span>
              <span className={`text-xs px-2 py-0.5 rounded ${
                campaign.priority === 'CRITICAL' ? 'bg-red-500' :
                campaign.priority === 'HIGH' ? 'bg-amber-500' : 'bg-blue-500'
              }`}>
                {campaign.priority}
              </span>
              <span className="text-xs opacity-80">{campaign.category}</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{campaign.name}</h3>
            <p className="text-white/80 text-sm mb-2">{campaign.thesis}</p>
            <div className="flex items-center gap-4 text-xs">
              <span className="bg-white/10 px-2 py-1 rounded">{campaign.period}</span>
              <span className="bg-white/10 px-2 py-1 rounded">{campaign.timing}</span>
            </div>
          </div>
          {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>

      {expanded && (
        <div className="p-6 bg-white space-y-6">
          {/* Cultural Context */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Globe size={18} className="text-emerald-600" />
              Cultural Context
            </h4>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-emerald-50 rounded-lg p-3">
                <div className="text-xs font-bold text-emerald-700 uppercase mb-1">Insight</div>
                <div className="text-sm text-gray-800">{campaign.culturalContext.insight}</div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-3">
                <div className="text-xs font-bold text-emerald-700 uppercase mb-1">Opportunity</div>
                <div className="text-sm text-gray-800">{campaign.culturalContext.opportunity}</div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-3">
                <div className="text-xs font-bold text-emerald-700 uppercase mb-1">Sensitivity</div>
                <div className="text-sm text-gray-800">{campaign.culturalContext.sensitivity}</div>
              </div>
            </div>
          </div>

          {/* Mechanics */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Target size={18} className="text-purple-600" />
              Campaign Mechanics
            </h4>
            <p className="text-gray-600 mb-3">{campaign.mechanics.overview}</p>
            <div className="space-y-2">
              {campaign.mechanics.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rewards with AED Values */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Gift size={18} className="text-amber-600" />
              Reward Structure (with AED Values)
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {Object.entries(campaign.mechanics.rewards).map(([key, value]) => (
                <div key={key} className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                  <div className="text-xs font-bold text-amber-700 uppercase mb-1">{key.replace(/([A-Z])/g, ' $1')}</div>
                  <div className="text-sm text-gray-800 font-medium">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Merchant Categories */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Store size={18} className="text-blue-600" />
              Merchant Categories & Boosts
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {campaign.merchantCategories.map((cat, i) => (
                <div key={i} className="bg-blue-50 rounded-lg p-3 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-blue-800">{cat.category}</div>
                    <div className="text-xs text-gray-600">{cat.merchants}</div>
                  </div>
                  <div className="text-lg font-bold text-blue-600">{cat.boost}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Assets */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Image size={18} className="text-pink-600" />
              Creative Assets
            </h4>
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200">
              <div className="text-xl font-bold text-gray-900 mb-1">{campaign.creativeAssets.headline}</div>
              <div className="text-gray-600 mb-3">{campaign.creativeAssets.subhead}</div>
              {'arabicCopy' in campaign.creativeAssets && (
                <div className="text-right text-lg font-medium text-gray-700 mb-3" dir="rtl">
                  {campaign.creativeAssets.arabicCopy}
                </div>
              )}
              <div className="grid md:grid-cols-3 gap-3 mt-3">
                <div>
                  <div className="text-xs text-gray-500 uppercase mb-1">Visual Concept</div>
                  <div className="text-sm text-gray-700">{campaign.creativeAssets.visualConcept}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase mb-1">Color Palette</div>
                  <div className="text-sm text-gray-700">{campaign.creativeAssets.colors}</div>
                </div>
                <div>
                  <button className="bg-[#c9a227] text-white px-4 py-2 rounded-lg font-bold text-sm w-full">
                    {campaign.creativeAssets.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Channels */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Radio size={18} className="text-cyan-600" />
              Channel Strategy
            </h4>
            <div className="space-y-2">
              {campaign.channels.map((ch, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-cyan-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="font-medium text-cyan-800 w-28">{ch.channel}</div>
                    <div className="text-sm text-gray-600">{ch.tactic}</div>
                  </div>
                  <div className="text-sm font-bold text-cyan-600">{ch.budget}</div>
                </div>
              ))}
            </div>
          </div>

          {/* KPIs */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <BarChart3 size={18} className="text-emerald-600" />
              Success Metrics
            </h4>
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-xs text-gray-500 uppercase">Primary KPI</div>
                  <div className="font-bold text-gray-900">{campaign.kpis.primary}</div>
                </div>
                <div className="text-2xl font-bold text-emerald-600">{campaign.kpis.target}</div>
              </div>
              <div className="space-y-1">
                {campaign.kpis.secondary.map((kpi, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Check className="text-emerald-500" size={14} />
                    <span>{kpi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Budget & ROI */}
          <div className="bg-[#0a1628] rounded-xl p-4 text-white flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-400 uppercase">Budget</div>
              <div className="text-xl font-bold">{campaign.budget}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400 uppercase">Expected ROI</div>
              <div className="text-xl font-bold text-[#c9a227]">{campaign.expectedROI}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Nuqta Campaign Card
const NuqtaCampaignCard = ({ campaign, type }: { campaign: typeof nuqtaUserCampaigns[0] | typeof nuqtaMerchantCampaigns[0]; type: 'user' | 'merchant' }) => {
  const [expanded, setExpanded] = useState(false);
  const gradientColors = type === 'user' ? 'from-purple-600 to-indigo-600' : 'from-emerald-600 to-teal-600';

  return (
    <div className={`rounded-2xl overflow-hidden border-2 ${expanded ? 'border-[#c9a227]' : 'border-gray-200'}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full p-6 bg-gradient-to-r ${gradientColors} text-white text-left`}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded">{campaign.id}</span>
              <span className={`text-xs px-2 py-0.5 rounded ${
                campaign.priority === 'CRITICAL' ? 'bg-red-500' :
                campaign.priority === 'HIGH' ? 'bg-amber-500' : 'bg-blue-500'
              }`}>
                {campaign.priority}
              </span>
              <span className="text-xs opacity-80">{campaign.category}</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{campaign.name}</h3>
            <p className="text-white/80 text-sm">{campaign.thesis}</p>
            {'inspiredBy' in campaign && (
              <div className="flex flex-wrap gap-1 mt-3">
                {campaign.inspiredBy.map((source, i) => (
                  <span key={i} className="text-xs bg-white/10 px-2 py-0.5 rounded">Inspired by: {source}</span>
                ))}
              </div>
            )}
          </div>
          {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>

      {expanded && (
        <div className="p-6 bg-white space-y-6">
          {/* Mechanics */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Target size={18} className="text-purple-600" />
              Campaign Mechanics
            </h4>
            <p className="text-gray-600 mb-3">{campaign.mechanics.overview}</p>
            <div className="space-y-2">
              {campaign.mechanics.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rewards */}
          {'rewards' in campaign.mechanics && (
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Gift size={18} className="text-amber-600" />
                Reward Structure
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {Object.entries(campaign.mechanics.rewards || (campaign.mechanics as Record<string, unknown>).offer || {}).map(([key, value]) => (
                  <div key={key} className="bg-amber-50 rounded-lg p-3">
                    <div className="text-xs font-bold text-amber-700 uppercase mb-1">{key.replace(/([A-Z])/g, ' $1')}</div>
                    <div className="text-sm text-gray-800">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Creative Assets */}
          {'headline' in campaign.creativeAssets && (
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Image size={18} className="text-pink-600" />
              Creative Assets
            </h4>
            <div className="bg-pink-50 rounded-xl p-4 border border-pink-200">
              <div className="text-xl font-bold text-gray-900 mb-1">{campaign.creativeAssets.headline}</div>
              <div className="text-gray-600 mb-3">{campaign.creativeAssets.subhead}</div>
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-xs text-gray-500 uppercase mb-1">Visual Concept</div>
                  <div className="text-sm text-gray-700">{campaign.creativeAssets.visualConcept}</div>
                </div>
                <button className="bg-[#c9a227] text-white px-4 py-2 rounded-lg font-bold text-sm shrink-0">
                  {campaign.creativeAssets.cta}
                </button>
              </div>
            </div>
          </div>
          )}

          {/* Channels */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Radio size={18} className="text-blue-600" />
              Channel Strategy
            </h4>
            <div className="space-y-2">
              {campaign.channels.map((ch, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="font-medium text-blue-800">{ch.channel}</div>
                    <div className="text-sm text-gray-600">{ch.tactic}</div>
                  </div>
                  <div className="text-sm font-bold text-blue-600">{ch.budget}</div>
                </div>
              ))}
            </div>
          </div>

          {/* KPIs */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <BarChart3 size={18} className="text-emerald-600" />
              Success Metrics
            </h4>
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-xs text-gray-500 uppercase">Primary KPI</div>
                  <div className="font-bold text-gray-900">{campaign.kpis.primary}</div>
                </div>
                <div className="text-2xl font-bold text-emerald-600">{campaign.kpis.target}</div>
              </div>
              <div className="space-y-1">
                {campaign.kpis.secondary.map((kpi, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Check className="text-emerald-500" size={14} />
                    <span>{kpi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fraud Prevention */}
          {'fraudPrevention' in campaign && (
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Shield size={18} className="text-red-600" />
              Fraud Prevention
            </h4>
            <div className="grid md:grid-cols-2 gap-2">
              {campaign.fraudPrevention.map((control, i) => (
                <div key={i} className="flex items-start gap-2 text-sm bg-red-50 rounded-lg p-2">
                  <Lock className="text-red-500 shrink-0 mt-0.5" size={14} />
                  <span>{control}</span>
                </div>
              ))}
            </div>
          </div>
          )}

          {/* Sales Script (for merchant campaigns) */}
          {'salesScript' in campaign && campaign.salesScript && (
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <MessageSquare size={18} className="text-cyan-600" />
                Sales Script
              </h4>
              <div className="space-y-3">
                {Object.entries(campaign.salesScript as Record<string, unknown>).filter(([key]) => key !== 'objectionHandlers').map(([key, value]) => (
                  <div key={key} className="bg-cyan-50 rounded-lg p-3">
                    <div className="text-xs font-bold text-cyan-700 uppercase mb-1">{key}</div>
                    <div className="text-sm text-gray-800 italic">"{String(value)}"</div>
                  </div>
                ))}
                {'objectionHandlers' in (campaign.salesScript as Record<string, unknown>) && (
                  <div className="bg-amber-50 rounded-lg p-3">
                    <div className="text-xs font-bold text-amber-700 uppercase mb-2">Objection Handlers</div>
                    <div className="space-y-2">
                      {Object.entries((campaign.salesScript as { objectionHandlers: Record<string, string> }).objectionHandlers || {}).map(([objection, response]) => (
                        <div key={objection} className="text-sm">
                          <span className="font-bold text-red-600">"{objection}"</span>
                          <span className="text-gray-400 mx-2">→</span>
                          <span className="text-gray-700">"{response}"</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Timeline */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Calendar size={18} className="text-indigo-600" />
              Execution Timeline
            </h4>
            <div className="space-y-2">
              {Object.entries(campaign.timeline).map(([week, task]) => (
                <div key={week} className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                  <div className="font-bold text-indigo-700 w-24">{week}</div>
                  <div className="text-sm text-gray-700">{task}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget & ROI */}
          <div className="bg-[#0a1628] rounded-xl p-4 text-white flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-400 uppercase">Budget</div>
              <div className="text-xl font-bold">{campaign.budget}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400 uppercase">Expected ROI</div>
              <div className="text-xl font-bold text-[#c9a227]">{campaign.expectedROI}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// =============================================================================
// MAIN PAGE
// =============================================================================
export default function MarketingWarRoomPage() {
  const [activeTab, setActiveTab] = useState<'team' | 'analysis' | 'user-campaigns' | 'merchant-campaigns' | 'cultural-campaigns' | 'multicultural-campaigns'>('team');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(viralCampaigns.map(c => c.category)))];

  const filteredCampaigns = categoryFilter === 'all'
    ? viralCampaigns
    : viralCampaigns.filter(c => c.category === categoryFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Unified Marketing Navigation */}
      <MarketingNav currentPage="war-room" />

      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] via-purple-900 to-[#0a1628] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
              <Brain className="text-[#c9a227]" size={18} />
              <span className="text-[#c9a227] font-medium">Elite Strategy Unit</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Marketing <span className="text-[#c9a227]">War Room</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              World-class marketing team analyzing 20 iconic viral campaigns,
              then designing Nuqta-specific strategies based on proven patterns.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 mt-8 max-w-6xl mx-auto">
              <div className="bg-white/10 rounded-xl p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">20</div>
                <div className="text-xs sm:text-sm text-gray-300">Iconic Campaigns</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400">6</div>
                <div className="text-xs sm:text-sm text-gray-300">User Campaigns</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400">5</div>
                <div className="text-xs sm:text-sm text-gray-300">Merchant Campaigns</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-red-400">6</div>
                <div className="text-xs sm:text-sm text-gray-300">UAE Cultural</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-pink-400">6</div>
                <div className="text-xs sm:text-sm text-gray-300">Multicultural</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-[#c9a227]">43</div>
                <div className="text-xs sm:text-sm text-gray-300">Total Campaigns</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {[
              { id: 'team', label: 'Expert Team', icon: Users },
              { id: 'analysis', label: '20 Campaign Analysis', icon: Eye },
              { id: 'user-campaigns', label: 'User Campaigns', icon: Users },
              { id: 'merchant-campaigns', label: 'Merchant Campaigns', icon: Store },
              { id: 'cultural-campaigns', label: 'UAE Cultural', icon: Calendar },
              { id: 'multicultural-campaigns', label: 'Multicultural', icon: Globe }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#0a1628] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Team Tab */}
        {activeTab === 'team' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Elite Marketing Team</h2>
              <p className="text-gray-600">World-class experts assembled to design Nuqta&apos;s growth strategy</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketingTeam.map((member, i) => (
                <div key={i} className={`bg-gradient-to-br ${member.color} rounded-2xl p-6 text-white`}>
                  <div className="text-4xl mb-3">{member.avatar}</div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-white/80 text-sm mb-3">{member.role}</p>
                  <div className="bg-white/10 rounded-lg p-3 mb-3">
                    <div className="text-xs text-white/60 uppercase mb-1">Expertise</div>
                    <div className="text-sm">{member.expertise}</div>
                  </div>
                  <div className="text-xs text-white/60">
                    <span className="font-medium">Background:</span> {member.background}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#c9a227]/10 rounded-2xl p-6 border-2 border-[#c9a227]/30">
              <h3 className="font-bold text-[#c9a227] text-xl mb-4">Team Analysis Approach</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4">
                  <div className="font-bold text-gray-900 mb-2">1. Forensic Analysis</div>
                  <p className="text-sm text-gray-600">Deep-dive into 20 iconic campaigns extracting exact mechanics, metrics, and patterns</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="font-bold text-gray-900 mb-2">2. Pattern Recognition</div>
                  <p className="text-sm text-gray-600">Identify repeatable playbooks that apply to Nuqta&apos;s two-sided marketplace</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="font-bold text-gray-900 mb-2">3. Nuqta Adaptation</div>
                  <p className="text-sm text-gray-600">Design 11 battle-tested campaigns specifically for UAE market and Nuqta&apos;s model</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analysis Tab */}
        {activeTab === 'analysis' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Viral Campaign Analysis</h2>
                <p className="text-gray-600">20 iconic campaigns dissected with Nuqta applications</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      categoryFilter === cat
                        ? 'bg-[#0a1628] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat === 'all' ? 'All Categories' : cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredCampaigns.map((campaign) => (
                <CampaignAnalysisCard key={campaign.id} campaign={campaign} />
              ))}
            </div>
          </div>
        )}

        {/* User Campaigns Tab */}
        {activeTab === 'user-campaigns' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Nuqta User Campaigns</h2>
              <p className="text-gray-600">6 battle-tested campaigns to acquire, activate, and retain users</p>
            </div>

            <div className="space-y-6">
              {nuqtaUserCampaigns.map((campaign) => (
                <NuqtaCampaignCard key={campaign.id} campaign={campaign} type="user" />
              ))}
            </div>
          </div>
        )}

        {/* Merchant Campaigns Tab */}
        {activeTab === 'merchant-campaigns' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Nuqta Merchant Campaigns</h2>
              <p className="text-gray-600">5 battle-tested campaigns to acquire, activate, and retain merchants</p>
            </div>

            <div className="space-y-6">
              {nuqtaMerchantCampaigns.map((campaign) => (
                <NuqtaCampaignCard key={campaign.id} campaign={campaign} type="merchant" />
              ))}
            </div>
          </div>
        )}

        {/* UAE Cultural Campaigns Tab */}
        {activeTab === 'cultural-campaigns' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">UAE Cultural Calendar Campaigns</h2>
              <p className="text-gray-600">6 culturally-optimized campaigns for UAE holidays, festivals, and seasonal moments</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">🌙 Ramadan</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">🎁 Eid</span>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">🇦🇪 National Day</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">🛍️ DSF</span>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">☀️ Summer</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">📚 Back to School</span>
              </div>
            </div>

            {/* Annual Calendar View */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-purple-500/10 rounded-2xl p-6 border border-[#c9a227]/30 mb-8">
              <h3 className="font-bold text-gray-900 text-xl mb-4">2026 Campaign Calendar</h3>
              <div className="grid grid-cols-4 md:grid-cols-12 gap-2">
                {[
                  { month: 'Jan', campaign: 'DSF', color: 'bg-blue-500' },
                  { month: 'Feb', campaign: '-', color: 'bg-gray-200' },
                  { month: 'Mar', campaign: 'Ramadan', color: 'bg-purple-500' },
                  { month: 'Apr', campaign: 'Eid', color: 'bg-green-500' },
                  { month: 'May', campaign: '-', color: 'bg-gray-200' },
                  { month: 'Jun', campaign: 'Eid', color: 'bg-green-500' },
                  { month: 'Jul', campaign: 'Summer', color: 'bg-yellow-500' },
                  { month: 'Aug', campaign: 'School', color: 'bg-orange-500' },
                  { month: 'Sep', campaign: 'School', color: 'bg-orange-500' },
                  { month: 'Oct', campaign: '-', color: 'bg-gray-200' },
                  { month: 'Nov', campaign: '-', color: 'bg-gray-200' },
                  { month: 'Dec', campaign: 'UAE Day', color: 'bg-red-500' },
                ].map((m, i) => (
                  <div key={i} className="text-center">
                    <div className={`${m.color} text-white text-xs font-bold py-2 rounded-lg mb-1`}>
                      {m.month}
                    </div>
                    <div className="text-xs text-gray-600">{m.campaign}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {uaeCulturalCampaigns.map((campaign) => (
                <CulturalCampaignCard key={campaign.id} campaign={campaign} />
              ))}
            </div>

            {/* Total Investment Summary */}
            <div className="bg-[#0a1628] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-xl mb-4 text-[#c9a227]">Annual Cultural Campaign Investment</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-[#c9a227]">AED 640K</div>
                  <div className="text-sm text-gray-400">Total Budget</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-emerald-400">6</div>
                  <div className="text-sm text-gray-400">Major Campaigns</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-purple-400">50K+</div>
                  <div className="text-sm text-gray-400">Est. New Users</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-amber-400">8x</div>
                  <div className="text-sm text-gray-400">Avg. ROI</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Multicultural Community Campaigns Tab */}
        {activeTab === 'multicultural-campaigns' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Multicultural Community Campaigns</h2>
              <p className="text-gray-600">6 world-class campaigns targeting UAE&apos;s diverse expat communities</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">🪔 Indian (3.5M+)</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">🇵🇭 Filipino (700K+)</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">🇵🇰 Pakistani (1.5M+)</span>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">🌍 Arab Expat (1M+)</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">🌎 Western (500K+)</span>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">🧧 Chinese (200K+)</span>
              </div>
            </div>

            {/* Community Population Overview */}
            <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl p-6 border border-purple-500/30 mb-8">
              <h3 className="font-bold text-gray-900 text-xl mb-4">UAE Expat Population Overview</h3>
              <p className="text-gray-600 mb-4">UAE hosts 9M+ expatriates from 200+ nationalities. These campaigns target the largest communities with culturally-relevant messaging.</p>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                {[
                  { community: 'Indian', population: '3.5M+', flag: '🇮🇳', color: 'bg-orange-500' },
                  { community: 'Pakistani', population: '1.5M+', flag: '🇵🇰', color: 'bg-green-500' },
                  { community: 'Arab Expat', population: '1M+', flag: '🌍', color: 'bg-emerald-500' },
                  { community: 'Filipino', population: '700K+', flag: '🇵🇭', color: 'bg-blue-500' },
                  { community: 'Western', population: '500K+', flag: '🌎', color: 'bg-purple-500' },
                  { community: 'Chinese', population: '200K+', flag: '🇨🇳', color: 'bg-red-500' },
                ].map((c, i) => (
                  <div key={i} className="text-center">
                    <div className={`${c.color} text-white text-2xl py-3 rounded-lg mb-2`}>
                      {c.flag}
                    </div>
                    <div className="font-bold text-gray-900">{c.population}</div>
                    <div className="text-xs text-gray-600">{c.community}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {multiculturalCampaigns.map((campaign) => (
                <MulticulturalCampaignCard key={campaign.id} campaign={campaign} />
              ))}
            </div>

            {/* Total Investment Summary */}
            <div className="bg-[#0a1628] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-xl mb-4 text-[#c9a227]">Annual Multicultural Campaign Investment</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-[#c9a227]">AED 470K</div>
                  <div className="text-sm text-gray-400">Total Budget</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-pink-400">6</div>
                  <div className="text-sm text-gray-400">Community Campaigns</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-purple-400">8M+</div>
                  <div className="text-sm text-gray-400">Target Population</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-emerald-400">9x</div>
                  <div className="text-sm text-gray-400">Avg. Expected ROI</div>
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
