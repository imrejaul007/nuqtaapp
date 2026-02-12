'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, ArrowRight, Crown, Wallet, Store, QrCode, Gamepad2,
  Bot, Globe, Gift, Star, Shield, Zap, TrendingUp, Users, Target,
  ChevronDown, ChevronUp, ChevronRight, DollarSign, CreditCard,
  Smartphone, MapPin, BarChart3, Lock, Rocket, AlertTriangle,
  Building2, Layers, CheckCircle2, Award, Coins, Timer, Heart,
  ShoppingBag, Plane, Car, Home, Truck, Scale, Network, Eye,
  Calculator, Gem, Briefcase, Map, Coffee, Scissors, Utensils,
  Search, Bell, Share2, Package, Brain, Database, BadgePercent, PiggyBank,
  ArrowUpRight
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── Type Definitions ───────────────────────────────────────────────

interface CoreFeature {
  id: string;
  title: string;
  arabic: string;
  icon: React.ElementType;
  color: string;
  description: string;
  details: string[];
  metrics: string;
}

interface MembershipTier {
  name: string;
  arabic: string;
  price: string;
  icon: React.ElementType;
  color: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
  earnRate: string;
  benefits: string[];
  exclusive: string[];
}

interface CoinType {
  name: string;
  icon: React.ElementType;
  color: string;
  textColor: string;
  earnMethod: string;
  debitPriority: number;
  expiry: string;
  description: string;
  examples: string[];
}

interface EcosystemApp {
  name: string;
  arabic: string;
  icon: React.ElementType;
  color: string;
  textColor: string;
  category: string;
  description: string;
  link: string;
  integration: string;
}

interface RoadmapPhase {
  phase: string;
  title: string;
  timeline: string;
  color: string;
  items: string[];
  kpis: string[];
}

interface Competitor {
  name: string;
  focus: string;
  strengths: string[];
  weaknesses: string[];
  nuqtaAdvantage: string;
}

interface RiskItem {
  category: string;
  level: 'high' | 'medium' | 'low';
  description: string;
  mitigation: string;
}

interface GCCMarket {
  country: string;
  population: string;
  timeline: string;
  targetUsers: string;
  status: string;
}

// ─── Data ───────────────────────────────────────────────────────────

const coreFeatures: CoreFeature[] = [
  {
    id: 'wallet',
    title: 'Unified Wallet',
    arabic: 'المحفظة الموحدة',
    icon: Wallet,
    color: 'from-[#c9a227] to-amber-600',
    description: '4 coin types with smart debit priority: Promo → Branded → Nuqta → Cash. One balance view for all value.',
    details: [
      'Promo Coins: Merchant-funded, expire in 30 days, used first',
      'Branded Coins: Campaign-specific, 90-day expiry, merchant-locked',
      'Nuqta Coins: Earned from purchases, 1 year expiry, universal',
      'Cash Balance: Topped up by user, no expiry, full flexibility',
    ],
    metrics: '4 coin types | Smart debit ordering | Real-time balance',
  },
  {
    id: 'merchants',
    title: 'Merchant Discovery',
    arabic: 'اكتشاف التجار',
    icon: Store,
    color: 'from-blue-500 to-indigo-600',
    description: 'Browse, search, and discover merchants on an interactive map. Filter by category, distance, offers, and earn rates.',
    details: [
      'Category browsing: Food, Fashion, Electronics, Health & more',
      'Map view with real-time offers and distance sorting',
      'Search with filters: rating, earn rate, open now, Nuqta+ deals',
      'Merchant profiles with menus, reviews, and coin earn rates',
    ],
    metrics: '500+ merchants at launch | 15 categories | Map + List view',
  },
  {
    id: 'qr',
    title: 'QR Scan & Pay',
    arabic: 'امسح وادفع',
    icon: QrCode,
    color: 'from-emerald-500 to-green-600',
    description: 'Scan merchant QR to pay, earn coins, and redeem rewards in a single tap. Sub-2-second transaction time.',
    details: [
      'Static and dynamic QR codes supported',
      'Auto-apply best available coupon or offer',
      'Instant coin earning credited to wallet',
      'Transaction receipt with earn breakdown',
    ],
    metrics: '<2s transaction | Auto-offer apply | Instant earn',
  },
  {
    id: 'membership',
    title: 'Nuqta+ Membership',
    arabic: 'عضوية نقطة+',
    icon: Crown,
    color: 'from-purple-500 to-violet-600',
    description: '4-tier membership: Basic → Silver → Gold → Prive. Higher tiers unlock multiplied earnings, exclusive access, and concierge.',
    details: [
      'Basic: Free, 1x earn rate, standard access',
      'Silver: 49 AED/mo, 1.5x earn, priority support',
      'Gold: 99 AED/mo, 2x earn, exclusive deals, early access',
      'Prive: 199 AED/mo, 3x earn, dedicated concierge, VIP events',
    ],
    metrics: '4 tiers | Up to 3x earning | 141 Prive-exclusive screens',
  },
  {
    id: 'gamification',
    title: 'Gamification Hub',
    arabic: 'مركز الألعاب',
    icon: Gamepad2,
    color: 'from-orange-500 to-red-500',
    description: 'Badges, levels, challenges, and leaderboards that make spending and saving fun. Compete with friends and earn bonus coins.',
    details: [
      '50+ collectible badges across spending categories',
      '20 progressive levels from Newcomer to Legend',
      'Daily, weekly, and monthly challenges with bonus rewards',
      'Leaderboards: friends, city, national rankings',
    ],
    metrics: '50+ badges | 20 levels | Daily challenges | Leaderboards',
  },
  {
    id: 'air',
    title: 'AI-R Assistant',
    arabic: 'مساعد الذكاء',
    icon: Bot,
    color: 'from-cyan-500 to-teal-500',
    description: 'AI-powered personal assistant that recommends merchants, optimizes spending, and manages your rewards strategy.',
    details: [
      'Personalized merchant recommendations based on habits',
      'Spending insights and budget optimization',
      'Smart coupon and offer suggestions',
      'Natural language queries: "Where can I earn the most coins for coffee?"',
    ],
    metrics: 'ML-powered | Real-time suggestions | NLP queries',
  },
  {
    id: 'bills',
    title: 'Bill Payments',
    arabic: 'دفع الفواتير',
    icon: CreditCard,
    color: 'from-teal-500 to-cyan-500',
    description: 'Pay all monthly bills from one place — utilities, telecom, transport, government fees, and education. Earn coins on every payment.',
    details: [
      'Utilities: DEWA, SEWA, FEWA, ADDC — auto-fetch balance by account number',
      'Telecom: Etisalat, du, Virgin — prepaid recharge + postpaid bill pay',
      'Transport: Salik top-up, RTA fines, parking payments',
      'Government: GDRFA visa fees, ICP, MOI services via Khedma integration',
      'Education: School fees, university tuition — Qist BNPL for large amounts',
      'Auto-pay: Set recurring payments with 3-day advance reminders',
    ],
    metrics: '50+ billers | Auto-pay | Earn coins on every bill',
  },
  {
    id: 'savings',
    title: 'Savings Pots',
    arabic: 'أوعية الادخار',
    icon: PiggyBank,
    color: 'from-emerald-500 to-green-500',
    description: 'Smart savings inside your wallet — named goals, round-ups, auto-save, and Shariah-compliant profit sharing.',
    details: [
      'Named pots: Rent, Travel, Emergency, Wedding — set goals with target amounts',
      'Round-Up: Every transaction rounded to nearest 5 AED, difference auto-saved',
      'Auto-Save: Set weekly or monthly auto-transfer into any pot',
      'Profit Sharing: Shariah-compliant returns on savings balance (via banking partner)',
      'Lock pots: Optional time-lock to prevent impulsive withdrawals',
      'Visual progress: Track savings goals with milestone celebrations',
    ],
    metrics: 'Named goals | Round-up savings | Shariah-compliant profit',
  },
  {
    id: 'ecosystem',
    title: 'Cross-Ecosystem Access',
    arabic: 'وصول متكامل',
    icon: Globe,
    color: 'from-pink-500 to-rose-500',
    description: 'One account connects to BizOne, Qist, Hawil, Wasil, Sakin, Ajer, Safar, and Rakab. Earn and spend across all services.',
    details: [
      'Single sign-on across all RTMN ecosystem apps',
      'Unified coin balance usable in any ecosystem service',
      'Cross-app referral bonuses and shared loyalty tiers',
      'Seamless deep-linking between services',
    ],
    metrics: '8 sister apps | Single SSO | Universal coins',
  },
  {
    id: 'rewards',
    title: 'Rewards Engine',
    arabic: 'محرك المكافآت',
    icon: Gift,
    color: 'from-yellow-500 to-amber-500',
    description: 'Dynamic rewards engine that powers personalized offers, cashback, coupons, and surprise rewards based on user behavior.',
    details: [
      'Personalized offer feed based on purchase history',
      'Flash deals with limited-time bonus multipliers',
      'Surprise & delight: random bonus drops for active users',
      'Referral rewards: earn when friends sign up and spend',
    ],
    metrics: 'ML-personalized | Flash deals | Referral engine',
  },
];

const membershipTiers: MembershipTier[] = [
  {
    name: 'Basic',
    arabic: 'أساسي',
    price: 'Free',
    icon: Shield,
    color: 'from-slate-500 to-slate-700',
    textColor: 'text-slate-300',
    bgColor: 'bg-slate-500/10',
    borderColor: 'border-slate-500/50',
    earnRate: '1x',
    benefits: [
      '1 Nuqta Coin per 1 AED spent',
      'Access to all merchants',
      'Basic QR Scan & Pay',
      'Standard support',
      'Monthly deals newsletter',
    ],
    exclusive: [],
  },
  {
    name: 'Silver',
    arabic: 'فضي',
    price: '49 AED/mo',
    icon: Star,
    color: 'from-slate-400 to-blue-400',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/50',
    earnRate: '1.5x',
    benefits: [
      '1.5 Nuqta Coins per 1 AED spent',
      'Priority customer support',
      'Early access to flash sales',
      'Birthday bonus: 200 coins',
      'Silver-exclusive merchant deals',
      'Monthly surprise reward',
    ],
    exclusive: ['Silver Lounge deals', 'Priority queue in support'],
  },
  {
    name: 'Gold',
    arabic: 'ذهبي',
    price: '99 AED/mo',
    icon: Award,
    color: 'from-[#c9a227] to-amber-600',
    textColor: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]/50',
    earnRate: '2x',
    benefits: [
      '2 Nuqta Coins per 1 AED spent',
      'Dedicated account manager',
      'Exclusive Gold-only events',
      'Birthday bonus: 500 coins',
      'Free delivery on Wasil orders',
      'Priority booking on Safar',
      'Double referral bonuses',
    ],
    exclusive: ['Gold events', 'Premium merchant access', 'Qist priority approval'],
  },
  {
    name: 'Prive',
    arabic: 'بريفيه',
    price: '199 AED/mo',
    icon: Crown,
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/50',
    earnRate: '3x',
    benefits: [
      '3 Nuqta Coins per 1 AED spent',
      '24/7 dedicated concierge',
      'VIP airport lounge access',
      'Birthday bonus: 1,000 coins',
      'Complimentary Wasil+ membership',
      'Luxury brand exclusive access',
      'Private Prive events & dinners',
      'Priority everything across ecosystem',
    ],
    exclusive: ['Concierge service', '141 Prive-exclusive screens', 'Luxury brand previews', 'VIP lounge network'],
  },
];

const coinTypes: CoinType[] = [
  {
    name: 'Promo Coins',
    icon: BadgePercent,
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    earnMethod: 'Merchant-funded promotions & sign-up bonuses',
    debitPriority: 1,
    expiry: '30 days',
    description: 'Short-lived promotional coins funded by merchants. Used first in the debit priority order to minimize breakage for users.',
    examples: ['Welcome bonus: 100 promo coins', 'Merchant flash deal: 2x promo coins', 'Referral bonus: 50 promo coins'],
  },
  {
    name: 'Branded Coins',
    icon: Store,
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    earnMethod: 'Brand-specific campaigns & co-marketing',
    debitPriority: 2,
    expiry: '90 days',
    description: 'Campaign-specific coins locked to participating merchants. Funded by brand marketing budgets for targeted customer acquisition.',
    examples: ['Adidas campaign: 3x branded coins on sportswear', 'Carrefour weekend: 50 branded coins', 'Mall of Emirates partnership'],
  },
  {
    name: 'Nuqta Coins',
    icon: Coins,
    color: 'from-[#c9a227] to-amber-600',
    textColor: 'text-[#c9a227]',
    earnMethod: 'Regular purchases at any Nuqta merchant',
    debitPriority: 3,
    expiry: '12 months',
    description: 'The core loyalty coin. Earned on every purchase across the ecosystem. Universal redemption at any merchant. Tier multipliers apply.',
    examples: ['Coffee purchase: 15 Nuqta coins', 'Grocery run: 120 Nuqta coins', 'Safar booking: 500 Nuqta coins'],
  },
  {
    name: 'Cash Balance',
    icon: Wallet,
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-400',
    earnMethod: 'User top-up via bank, card, or Apple Pay',
    debitPriority: 4,
    expiry: 'No expiry',
    description: 'Real money balance stored in the Nuqta wallet. Used last in debit priority to preserve user funds. Fully withdrawable.',
    examples: ['Top-up 500 AED via bank transfer', 'Apple Pay instant load', 'Salary advance from Hawil'],
  },
];

const ecosystemApps: EcosystemApp[] = [
  {
    name: 'BizOne',
    arabic: 'بيز ون',
    icon: Store,
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-400',
    category: 'Merchant Solutions',
    description: 'Merchant POS, inventory management, and analytics. Powers the merchant side of every Nuqta transaction.',
    link: '/bizone',
    integration: 'Transaction processing, merchant onboarding, offer management',
  },
  {
    name: 'Qist',
    arabic: 'قسط',
    icon: CreditCard,
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    category: 'Buy Now Pay Later',
    description: 'BNPL service integrated at checkout. Split payments into 4 installments with zero interest for eligible users.',
    link: '/qist',
    integration: 'Checkout BNPL option, credit scoring from Nuqta data, coin earning on installments',
  },
  {
    name: 'Hawil',
    arabic: 'حويل',
    icon: DollarSign,
    color: 'from-cyan-500 to-teal-500',
    textColor: 'text-cyan-400',
    category: 'Remittance & Payments',
    description: 'International money transfer and digital payments. Send money to 50+ countries with competitive FX rates.',
    link: '/hawil',
    integration: 'Wallet top-up, international transfers, salary advance, bill payments',
  },
  {
    name: 'Wasil',
    arabic: 'واصل',
    icon: Truck,
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-400',
    category: 'Quick Commerce & Delivery',
    description: 'Food delivery, grocery, pharmacy, and mall shopping delivered in 30 minutes. Earn Nuqta coins on every order.',
    link: '/wasil',
    integration: 'In-app ordering, coin earning, Nuqta+ free delivery benefit',
  },
  {
    name: 'Sakin',
    arabic: 'ساكن',
    icon: Home,
    color: 'from-violet-500 to-purple-600',
    textColor: 'text-violet-400',
    category: 'Rent & Property',
    description: 'Pay rent, find apartments, and manage property. Rent-to-own schemes powered by Qist integration.',
    link: '/rtmn-ecosystem',
    integration: 'Rent payments via wallet, coin earning on rent, Qist rent installments',
  },
  {
    name: 'Ajer',
    arabic: 'أجر',
    icon: Scale,
    color: 'from-teal-500 to-emerald-600',
    textColor: 'text-teal-400',
    category: 'Leasing & Subscriptions',
    description: 'Lease electronics, furniture, and vehicles. Shariah-compliant leasing with coin rewards on payments.',
    link: '/rtmn-ecosystem',
    integration: 'Lease payments via wallet, coin earning on lease payments, Qist integration',
  },
  {
    name: 'Safar',
    arabic: 'سفر',
    icon: Plane,
    color: 'from-sky-500 to-blue-600',
    textColor: 'text-sky-400',
    category: 'Travel & Booking',
    description: 'Book flights, hotels, and experiences. Earn massive coin bonuses on travel. Prive members get VIP perks.',
    link: '/rtmn-ecosystem',
    integration: 'Travel booking, 5x coin earning on travel, Prive lounge access, Hawil FX rates',
  },
  {
    name: 'Rakab',
    arabic: 'ركاب',
    icon: Car,
    color: 'from-rose-500 to-pink-600',
    textColor: 'text-rose-400',
    category: 'Rides & Mobility',
    description: 'Ride-hailing and car rental. Pay with Nuqta coins or wallet. Earn coins on every ride.',
    link: '/rtmn-ecosystem',
    integration: 'Ride payments, coin earning, Prive priority pickup, Safar airport transfers',
  },
];

const roadmapPhases: RoadmapPhase[] = [
  {
    phase: 'Phase 1',
    title: 'Core App + Wallet + Merchants',
    timeline: 'Months 1-6',
    color: 'from-blue-500 to-indigo-600',
    items: [
      'Core Nuqta app with onboarding flow',
      'Unified wallet with 4 coin types',
      'Merchant discovery with map and search',
      'QR Scan & Pay integration',
      'Basic membership tiers (Basic + Silver)',
      'BizOne merchant POS integration',
      '500 merchant onboarding target',
      'Payment gateway and KYC integration',
    ],
    kpis: ['100K downloads', '500 merchants', '50K active users', '2M AED monthly GMV'],
  },
  {
    phase: 'Phase 2',
    title: 'Gamification + Prive + BNPL',
    timeline: 'Months 7-12',
    color: 'from-[#c9a227] to-amber-600',
    items: [
      'Full gamification engine: badges, levels, challenges',
      'Gold and Prive membership tiers',
      'Qist BNPL integration at checkout',
      'Leaderboards and social features',
      'Rewards engine with ML personalization',
      'Prive concierge service launch',
      'Advanced analytics dashboard for merchants',
      'Referral program with viral mechanics',
    ],
    kpis: ['500K downloads', '2,000 merchants', '200K active users', '15M AED monthly GMV'],
  },
  {
    phase: 'Phase 3',
    title: 'AI-R + Full Ecosystem Integration',
    timeline: 'Months 13-24',
    color: 'from-purple-500 to-violet-600',
    items: [
      'AI-R personal assistant launch',
      'Hawil remittance integration',
      'Wasil delivery integration',
      'Safar travel booking integration',
      'Rakab ride-hailing integration',
      'Cross-ecosystem coin earning',
      'Advanced data insights for merchants',
      'Premium API marketplace for partners',
    ],
    kpis: ['2M downloads', '5,000 merchants', '800K active users', '80M AED monthly GMV'],
  },
  {
    phase: 'Phase 4',
    title: 'GCC Expansion',
    timeline: 'Months 25-36',
    color: 'from-emerald-500 to-green-600',
    items: [
      'Saudi Arabia market launch',
      'Bahrain and Kuwait expansion',
      'Oman and Qatar rollout',
      'Multi-currency wallet support',
      'Regional merchant network',
      'GCC-wide leaderboards and challenges',
      'Localized AI-R for each market',
      'Cross-border coin transfers',
    ],
    kpis: ['5M downloads', '15,000 merchants', '3M active users', '500M AED monthly GMV'],
  },
];

const competitors: Competitor[] = [
  {
    name: 'Careem',
    focus: 'Rides + Delivery + Payments',
    strengths: ['Strong brand recognition', 'Uber backing and resources', 'Large driver network', 'Careem Pay wallet'],
    weaknesses: ['No loyalty/gamification depth', 'Limited merchant ecosystem', 'No BNPL offering', 'No membership tiers'],
    nuqtaAdvantage: 'Nuqta offers 10x broader ecosystem with gamified loyalty, BNPL, and cross-service rewards that Careem cannot match.',
  },
  {
    name: 'Noon',
    focus: 'E-commerce + Payments',
    strengths: ['Large product catalog', 'NoonPay wallet', 'Regional warehouse network', 'Strong Arabic-first approach'],
    weaknesses: ['Product-only, no services', 'Basic loyalty program', 'No offline merchant network', 'No financial services'],
    nuqtaAdvantage: 'Nuqta bridges online and offline commerce with a unified coin economy that works everywhere, not just e-commerce.',
  },
  {
    name: 'Tabby',
    focus: 'BNPL',
    strengths: ['Market leader in BNPL', 'Strong merchant integration', 'Clean UX', 'Good credit models'],
    weaknesses: ['Single product (BNPL only)', 'No loyalty or rewards', 'No ecosystem play', 'Limited user engagement beyond checkout'],
    nuqtaAdvantage: 'Qist BNPL is one feature within a full super-app. Users stay engaged daily, not just at checkout.',
  },
  {
    name: 'Talabat',
    focus: 'Food & Grocery Delivery',
    strengths: ['Dominant food delivery brand', 'Large restaurant network', 'Talabat Mart', 'DHL-backed logistics'],
    weaknesses: ['Food-only focus', 'No financial services', 'Basic rewards', 'No cross-category play'],
    nuqtaAdvantage: 'Wasil delivery is one module. Nuqta users earn coins on food AND 7 other service categories.',
  },
];

const risks: RiskItem[] = [
  {
    category: 'Execution Complexity',
    level: 'high',
    description: 'Building 8+ integrated services simultaneously requires exceptional coordination across engineering, product, and operations teams.',
    mitigation: 'Phased rollout with clear milestones. Core app first, then layered integrations. Shared Rabtul tech platform reduces duplication.',
  },
  {
    category: 'User Adoption',
    level: 'high',
    description: 'Convincing users to switch from established apps (Careem, Talabat, Tabby) requires compelling value proposition and strong marketing.',
    mitigation: 'Generous launch incentives (1,000 welcome coins), merchant-funded promotions, influencer partnerships, and referral viral loops.',
  },
  {
    category: 'Merchant Onboarding',
    level: 'medium',
    description: 'Reaching 500+ merchants in Phase 1 requires dedicated sales team and compelling merchant economics.',
    mitigation: 'Zero setup fees for first year, BizOne POS provided free, 15-20% commission model competitive with alternatives.',
  },
  {
    category: 'Regulatory Compliance',
    level: 'medium',
    description: 'Payment services, BNPL, and remittance require CBUAE and SCA licenses across multiple categories.',
    mitigation: 'Dedicated compliance team, phased license applications, partnership with licensed entities for initial launch.',
  },
  {
    category: 'Coin Economy Balance',
    level: 'medium',
    description: 'Managing 4 coin types with different expiry rules and earn rates creates complexity for users and financial modeling.',
    mitigation: 'Simplified UI with single balance view. Smart debit priority handles complexity. Extensive user testing of wallet UX.',
  },
  {
    category: 'Cash Burn Rate',
    level: 'high',
    description: 'Subsidizing merchant commissions and user incentives during growth phase requires significant capital.',
    mitigation: 'AED 50M Series A target. Unit economics positive by Month 18. Coin breakage (15-20%) offsets incentive costs.',
  },
];

const gccMarkets: GCCMarket[] = [
  { country: 'UAE', population: '10M', timeline: 'Phase 1-3 (Months 1-24)', targetUsers: '2M', status: 'Launch Market' },
  { country: 'Saudi Arabia', population: '36M', timeline: 'Phase 4 (Month 25)', targetUsers: '1.5M', status: 'Expansion Priority' },
  { country: 'Bahrain', population: '1.5M', timeline: 'Phase 4 (Month 28)', targetUsers: '200K', status: 'Planned' },
  { country: 'Kuwait', population: '4.3M', timeline: 'Phase 4 (Month 30)', targetUsers: '400K', status: 'Planned' },
  { country: 'Oman', population: '5.1M', timeline: 'Phase 4 (Month 33)', targetUsers: '300K', status: 'Planned' },
  { country: 'Qatar', population: '2.9M', timeline: 'Phase 4 (Month 36)', targetUsers: '250K', status: 'Planned' },
];

const revenueStreams = [
  { name: 'Membership Subscriptions', percentage: '20%', amount: 'AED 18M/yr at scale', description: 'Monthly fees from Silver, Gold, and Prive tiers. High-margin recurring revenue.' },
  { name: 'Merchant Commissions', percentage: '35%', amount: 'AED 31.5M/yr at scale', description: '15-20% commission on transactions processed through Nuqta QR payments.' },
  { name: 'Coin Breakage', percentage: '15%', amount: 'AED 13.5M/yr at scale', description: '15-20% of issued coins expire unused. Pure margin revenue from Promo and Branded coins.' },
  { name: 'Data & Insights', percentage: '10%', amount: 'AED 9M/yr at scale', description: 'Anonymized consumer analytics sold to merchants and brands for targeting and strategy.' },
  { name: 'Prive Premium Services', percentage: '10%', amount: 'AED 9M/yr at scale', description: 'Concierge bookings, VIP event fees, luxury brand referral commissions.' },
  { name: 'Ecosystem Referrals', percentage: '10%', amount: 'AED 9M/yr at scale', description: 'Revenue share from cross-referrals to Qist, Hawil, Wasil, Safar, and Rakab.' },
];

// ─── Tabs ───────────────────────────────────────────────────────────

const tabs = [
  { id: 'overview', label: 'Overview', icon: Eye },
  { id: 'features', label: 'Core Features', icon: Layers },
  { id: 'membership', label: 'Membership', icon: Crown },
  { id: 'coins', label: 'Coin Economy', icon: Coins },
  { id: 'ecosystem', label: 'Ecosystem', icon: Globe },
  { id: 'business', label: 'Business Model', icon: DollarSign },
  { id: 'roadmap', label: 'Roadmap', icon: Rocket },
  { id: 'competition', label: 'Competition', icon: Target },
  { id: 'risks', label: 'Risks & Expansion', icon: AlertTriangle },
  { id: 'deck', label: 'Pitch Deck', icon: Briefcase },
];

// ─── Component ──────────────────────────────────────────────────────

export default function NuqtaDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const [expandedCompetitor, setExpandedCompetitor] = useState<string | null>(null);
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);
  const [expandedPhase, setExpandedPhase] = useState<string | null>('Phase 1');

  const howItWorks = [
    { step: 1, title: 'Download', description: 'Get Nuqta from App Store or Google Play', icon: Smartphone },
    { step: 2, title: 'Sign Up', description: 'Quick registration with Emirates ID or phone number', icon: Users },
    { step: 3, title: 'Discover Merchants', description: 'Browse the map, search categories, find deals', icon: MapPin },
    { step: 4, title: 'Scan & Pay', description: 'Scan merchant QR code and pay with wallet or card', icon: QrCode },
    { step: 5, title: 'Earn Coins', description: 'Coins credited instantly. Level up, unlock badges, climb leaderboards', icon: Gift },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-[#0a1628]/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link href="/rtmn-group" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back to RTMN Group</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c9a227] to-amber-600 flex items-center justify-center">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-white">Nuqta Super-App</span>
          </div>
          <Link
            href="/nuqta-plus"
            className="text-sm text-[#c9a227] hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            Nuqta+ <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/20 via-transparent to-purple-500/10" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#c9a227]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-full mb-6">
              <Crown className="w-4 h-4 text-[#c9a227]" />
              <span className="text-sm text-[#c9a227] font-medium">The GCC Super-App</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Nuqta</span>
              <span className="text-[#c9a227]"> — </span>
              <span className="bg-gradient-to-r from-[#c9a227] to-amber-500 bg-clip-text text-transparent">
                One App, Everything You Need
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              A unified loyalty, payments, and lifestyle super-app connecting consumers with
              merchants across the GCC. Earn coins, unlock rewards, and access an entire ecosystem
              of services — all from one app.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { label: 'Services', value: '100+' },
                { label: 'Coin Types', value: '4' },
                { label: 'Membership Tiers', value: '4' },
                { label: 'Sister Companies', value: '10' },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#c9a227]">{stat.value}</div>
                  <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Platform Stats */}
      <section className="border-y border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: 'Screens Designed', value: '360+', icon: Smartphone, color: 'text-blue-400' },
              { label: 'Root Pages', value: '107', icon: Layers, color: 'text-emerald-400' },
              { label: 'Vertical Pages', value: '154', icon: BarChart3, color: 'text-purple-400' },
              { label: 'Prive Screens', value: '141', icon: Crown, color: 'text-[#c9a227]' },
              { label: 'API Endpoints', value: '530+', icon: Database, color: 'text-cyan-400' },
            ].map((stat, i) => (
              <div key={i} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 text-center">
                <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <nav className="border-b border-slate-800 bg-[#0a1628]/90 backdrop-blur-md sticky top-[57px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227]/20 text-[#c9a227] border border-[#c9a227]/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* ═══════════════════ OVERVIEW TAB ═══════════════════ */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* What is Nuqta */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c9a227] to-amber-600 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                What is Nuqta?
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Nuqta is the GCC&apos;s first comprehensive super-app that unifies loyalty rewards, digital payments,
                merchant discovery, and lifestyle services into a single platform. Unlike fragmented point solutions,
                Nuqta creates a self-reinforcing ecosystem where every transaction, every interaction, and every
                service builds upon a unified coin economy — making spending smarter, saving easier, and earning
                more rewarding.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <Wallet className="w-8 h-8 text-[#c9a227] mb-3" />
                  <h4 className="font-bold text-white mb-1">Earn Everywhere</h4>
                  <p className="text-sm text-slate-400">Every purchase earns coins. Every service adds value. One wallet for everything.</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <Globe className="w-8 h-8 text-purple-400 mb-3" />
                  <h4 className="font-bold text-white mb-1">Connected Ecosystem</h4>
                  <p className="text-sm text-slate-400">8 sister apps seamlessly integrated. Ride, eat, shop, travel — all earning coins.</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <Gamepad2 className="w-8 h-8 text-orange-400 mb-3" />
                  <h4 className="font-bold text-white mb-1">Gamified Loyalty</h4>
                  <p className="text-sm text-slate-400">Badges, levels, challenges, and leaderboards make saving and spending fun.</p>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#c9a227]" />
                How It Works — 5 Simple Steps
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                {howItWorks.map((step) => (
                  <div key={step.step} className="relative">
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30 text-center h-full">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a227] to-amber-600 flex items-center justify-center mx-auto mb-3">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs text-[#c9a227] font-bold mb-1">Step {step.step}</div>
                      <h4 className="font-bold text-white text-sm mb-1">{step.title}</h4>
                      <p className="text-xs text-slate-400">{step.description}</p>
                    </div>
                    {step.step < 5 && (
                      <div className="hidden sm:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                        <ChevronRight className="w-4 h-4 text-[#c9a227]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Feature Overview */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-400" />
                8 Core Feature Modules
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {coreFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30 hover:border-[#c9a227]/30 transition-colors cursor-pointer"
                    onClick={() => setActiveTab('features')}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-slate-500">{feature.arabic}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Unit Economics Overview */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-emerald-400" />
                Unit Economics at a Glance
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'CAC', value: '~25 AED', desc: 'Customer Acquisition Cost', color: 'text-blue-400' },
                  { label: 'LTV', value: '~500 AED', desc: 'Lifetime Value (3yr)', color: 'text-emerald-400' },
                  { label: 'Avg Transactions', value: '8/month', desc: 'Per active user', color: 'text-[#c9a227]' },
                  { label: 'Avg Order Value', value: '120 AED', desc: 'Across all categories', color: 'text-purple-400' },
                ].map((metric, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30 text-center">
                    <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                    <div className="text-sm font-medium text-white mt-1">{metric.label}</div>
                    <div className="text-xs text-slate-500 mt-1">{metric.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <span className="font-bold text-emerald-400">LTV:CAC Ratio = 20:1</span>
                </div>
                <p className="text-sm text-slate-300">
                  Industry benchmark for healthy SaaS/marketplace is 3:1. Nuqta&apos;s 20:1 ratio reflects the power
                  of a multi-service ecosystem where users engage across many verticals, driving high retention and
                  repeat transactions.
                </p>
              </div>
            </div>

            {/* Market Opportunity */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400" />
                Market Opportunity
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'GCC Population', value: '60M', icon: Users, color: 'text-blue-400' },
                  { label: 'UAE Population', value: '10M', icon: MapPin, color: 'text-emerald-400' },
                  { label: 'Target Users (3yr)', value: '5M', icon: Target, color: 'text-[#c9a227]' },
                  { label: 'UAE E-Commerce Market', value: '$8B', icon: ShoppingBag, color: 'text-purple-400' },
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                    <stat.icon className={`w-8 h-8 ${stat.color} mb-3`} />
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Nuqta+ Membership', href: '/nuqta-plus', icon: Crown, color: 'from-[#c9a227] to-amber-600' },
                { label: 'Gamification Hub', href: '/gamification', icon: Gamepad2, color: 'from-orange-500 to-red-500' },
                { label: 'RTMN Ecosystem', href: '/rtmn-ecosystem', icon: Network, color: 'from-purple-500 to-violet-600' },
                { label: 'BizOne Merchants', href: '/bizone', icon: Store, color: 'from-emerald-500 to-green-600' },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50 hover:border-[#c9a227]/50 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-3`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white group-hover:text-[#c9a227] transition-colors flex items-center gap-2">
                    {link.label}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ═══════════════════ CORE FEATURES TAB ═══════════════════ */}
        {activeTab === 'features' && (
          <div className="space-y-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">8 Core Feature Modules</h2>
              <p className="text-slate-400">Each module is a complete vertical within the Nuqta super-app, designed to work independently and synergistically.</p>
            </div>
            {coreFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                      <p className="text-sm text-slate-400">{feature.arabic}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline text-xs text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full">
                      {feature.metrics}
                    </span>
                    {expandedFeature === feature.id ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {expandedFeature === feature.id && (
                  <div className="px-5 pb-5 border-t border-slate-700/50">
                    <p className="text-slate-300 mt-4 mb-4">{feature.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {feature.details.map((detail, j) => (
                        <div key={j} className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-3">
                          <CheckCircle2 className="w-5 h-5 text-[#c9a227] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 bg-[#c9a227]/10 rounded-lg p-3 border border-[#c9a227]/30">
                      <span className="text-xs text-slate-400">Key Metrics: </span>
                      <span className="text-sm text-[#c9a227] font-medium">{feature.metrics}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ═══════════════════ MEMBERSHIP TAB ═══════════════════ */}
        {activeTab === 'membership' && (
          <div className="space-y-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Nuqta+ Membership Tiers</h2>
              <p className="text-slate-400">
                Four tiers designed to reward loyalty at every level. From free Basic access to the exclusive
                Prive experience with dedicated concierge and VIP events.
              </p>
            </div>

            {/* Tier Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {membershipTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`${tier.bgColor} rounded-xl border-2 ${tier.borderColor} overflow-hidden relative`}
                >
                  {tier.name === 'Prive' && (
                    <div className="absolute top-3 right-3">
                      <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full font-bold">PREMIUM</span>
                    </div>
                  )}
                  <div className="p-5">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4`}>
                      <tier.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold ${tier.textColor}`}>{tier.name}</h3>
                    <p className="text-xs text-slate-500 mb-2">{tier.arabic}</p>
                    <div className={`text-2xl font-bold ${tier.textColor} mb-1`}>{tier.price}</div>
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className={`w-4 h-4 ${tier.textColor}`} />
                      <span className={`text-sm font-bold ${tier.textColor}`}>{tier.earnRate} earn rate</span>
                    </div>

                    <div className="space-y-2 mb-4">
                      {tier.benefits.map((benefit, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {tier.exclusive.length > 0 && (
                      <div className="border-t border-slate-700/50 pt-3">
                        <p className="text-xs text-slate-500 mb-2 flex items-center gap-1">
                          <Lock className="w-3 h-3" /> Exclusive
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {tier.exclusive.map((item, j) => (
                            <span key={j} className={`text-xs px-2 py-1 rounded-full ${tier.bgColor} border ${tier.borderColor} ${tier.textColor}`}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Tier Comparison Table */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 overflow-x-auto">
              <h3 className="text-lg font-bold text-white mb-4">Tier Comparison</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="text-left py-3 px-4 text-slate-400 font-medium">Feature</th>
                    <th className="text-center py-3 px-4 text-slate-300 font-bold">Basic</th>
                    <th className="text-center py-3 px-4 text-blue-400 font-bold">Silver</th>
                    <th className="text-center py-3 px-4 text-[#c9a227] font-bold">Gold</th>
                    <th className="text-center py-3 px-4 text-purple-400 font-bold">Prive</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/30">
                  {[
                    { feature: 'Monthly Price', basic: 'Free', silver: '49 AED', gold: '99 AED', prive: '199 AED' },
                    { feature: 'Earn Rate', basic: '1x', silver: '1.5x', gold: '2x', prive: '3x' },
                    { feature: 'Birthday Bonus', basic: '50 coins', silver: '200 coins', gold: '500 coins', prive: '1,000 coins' },
                    { feature: 'Priority Support', basic: '-', silver: 'Yes', gold: 'Yes', prive: '24/7 Concierge' },
                    { feature: 'Free Delivery', basic: '-', silver: '-', gold: 'Yes', prive: 'Yes' },
                    { feature: 'VIP Events', basic: '-', silver: '-', gold: 'Select', prive: 'All + Private' },
                    { feature: 'Lounge Access', basic: '-', silver: '-', gold: '-', prive: 'Yes' },
                    { feature: 'Referral Bonus', basic: '1x', silver: '1.5x', gold: '2x', prive: '3x' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-3 px-4 text-slate-300 font-medium">{row.feature}</td>
                      <td className="py-3 px-4 text-center text-slate-400">{row.basic}</td>
                      <td className="py-3 px-4 text-center text-blue-400">{row.silver}</td>
                      <td className="py-3 px-4 text-center text-[#c9a227]">{row.gold}</td>
                      <td className="py-3 px-4 text-center text-purple-400">{row.prive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Revenue from Memberships */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-emerald-400" />
                Membership Revenue Projections
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { period: 'Year 1', subscribers: '50K paid', revenue: 'AED 3.6M', breakdown: '35K Silver + 12K Gold + 3K Prive' },
                  { period: 'Year 2', subscribers: '200K paid', revenue: 'AED 16.8M', breakdown: '130K Silver + 50K Gold + 20K Prive' },
                  { period: 'Year 3', subscribers: '500K paid', revenue: 'AED 48M', breakdown: '300K Silver + 140K Gold + 60K Prive' },
                ].map((proj, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                    <div className="text-sm text-slate-400 mb-1">{proj.period}</div>
                    <div className="text-2xl font-bold text-emerald-400 mb-1">{proj.revenue}</div>
                    <div className="text-sm text-white font-medium mb-2">{proj.subscribers}</div>
                    <div className="text-xs text-slate-500">{proj.breakdown}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/nuqta-plus"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c9a227] to-amber-600 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-opacity"
              >
                <Crown className="w-6 h-6" />
                Explore Nuqta+ Details
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        )}

        {/* ═══════════════════ COIN ECONOMY TAB ═══════════════════ */}
        {activeTab === 'coins' && (
          <div className="space-y-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">The Nuqta Coin Economy</h2>
              <p className="text-slate-400">
                Four distinct coin types power the Nuqta economy. Each has different earn methods, expiry rules,
                and debit priority — creating a balanced system that benefits users, merchants, and the platform.
              </p>
            </div>

            {/* Coin Type Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coinTypes.map((coin) => (
                <div key={coin.name} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${coin.color} flex items-center justify-center`}>
                      <coin.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${coin.textColor}`}>{coin.name}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs bg-slate-900/50 px-2 py-1 rounded text-slate-400">
                          Priority: #{coin.debitPriority}
                        </span>
                        <span className="text-xs bg-slate-900/50 px-2 py-1 rounded text-slate-400 flex items-center gap-1">
                          <Timer className="w-3 h-3" /> {coin.expiry}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 mb-4">{coin.description}</p>
                  <div className="mb-3">
                    <p className="text-xs text-slate-500 mb-2">How to Earn</p>
                    <p className="text-sm text-white bg-slate-900/50 rounded-lg p-3">{coin.earnMethod}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-2">Examples</p>
                    <div className="space-y-1">
                      {coin.examples.map((ex, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-slate-400">
                          <ChevronRight className="w-3 h-3 text-[#c9a227]" />
                          {ex}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Debit Priority Order */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#c9a227]" />
                Smart Debit Priority Order
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                When a user makes a payment, the system automatically debits coins in priority order.
                This maximizes value for users (short-expiry coins used first) while optimizing breakage
                economics for the platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {coinTypes.map((coin, i) => (
                  <div key={coin.name} className="flex-1 relative">
                    <div className={`bg-slate-900/50 rounded-xl p-4 border border-slate-700/30 text-center`}>
                      <div className={`text-2xl font-bold ${coin.textColor} mb-1`}>#{coin.debitPriority}</div>
                      <div className={`font-bold ${coin.textColor} text-sm`}>{coin.name}</div>
                      <div className="text-xs text-slate-500 mt-1">Expiry: {coin.expiry}</div>
                    </div>
                    {i < coinTypes.length - 1 && (
                      <div className="hidden sm:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-4 h-4 text-[#c9a227]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Coin Economics */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-emerald-400" />
                Coin Economy Financial Impact
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <div className="text-sm text-slate-400 mb-1">Breakage Rate</div>
                  <div className="text-2xl font-bold text-emerald-400">15-20%</div>
                  <p className="text-xs text-slate-500 mt-2">
                    Percentage of issued coins that expire unused. Higher on Promo (30%) and Branded (20%),
                    lower on Nuqta (10%) and Cash (0%).
                  </p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <div className="text-sm text-slate-400 mb-1">Coin Issuance (Year 1)</div>
                  <div className="text-2xl font-bold text-[#c9a227]">AED 45M</div>
                  <p className="text-xs text-slate-500 mt-2">
                    Total estimated coin value issued across all types. Funded by merchants (40%),
                    platform (35%), and brands (25%).
                  </p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <div className="text-sm text-slate-400 mb-1">Net Breakage Revenue</div>
                  <div className="text-2xl font-bold text-purple-400">AED 7-9M</div>
                  <p className="text-xs text-slate-500 mt-2">
                    Pure margin from expired coins. Scales linearly with user growth
                    and serves as a significant revenue contributor.
                  </p>
                </div>
              </div>
            </div>

            {/* Earn Rate by Tier */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#c9a227]" />
                Earn Rates by Membership Tier
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {membershipTiers.map((tier) => (
                  <div key={tier.name} className={`${tier.bgColor} rounded-lg p-4 border ${tier.borderColor} text-center`}>
                    <tier.icon className={`w-8 h-8 ${tier.textColor} mx-auto mb-2`} />
                    <div className={`text-xl font-bold ${tier.textColor}`}>{tier.earnRate}</div>
                    <div className="text-sm text-white font-medium">{tier.name}</div>
                    <div className="text-xs text-slate-400 mt-2">
                      {tier.earnRate === '1x' ? '1 coin per 1 AED' :
                       tier.earnRate === '1.5x' ? '1.5 coins per 1 AED' :
                       tier.earnRate === '2x' ? '2 coins per 1 AED' :
                       '3 coins per 1 AED'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════ ECOSYSTEM TAB ═══════════════════ */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Ecosystem Integration</h2>
              <p className="text-slate-400">
                Nuqta is the central hub that connects 8 sister apps. Every service in the RTMN ecosystem
                feeds into and benefits from the Nuqta coin economy, creating a self-reinforcing flywheel.
              </p>
            </div>

            {/* Ecosystem Hub Visual */}
            <div className="bg-slate-800/30 rounded-xl p-8 border border-slate-700/50">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#c9a227] to-amber-600 flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#c9a227]">Nuqta</h3>
                <p className="text-sm text-slate-400">Central Super-App Hub</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {ecosystemApps.map((app) => (
                  <Link
                    key={app.name}
                    href={app.link}
                    className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30 hover:border-[#c9a227]/30 transition-all text-center group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center mx-auto mb-3`}>
                      <app.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className={`font-bold ${app.textColor} text-sm group-hover:text-[#c9a227] transition-colors`}>{app.name}</h4>
                    <p className="text-xs text-slate-500">{app.arabic}</p>
                    <p className="text-xs text-slate-600 mt-1">{app.category}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Ecosystem App Details */}
            <div className="space-y-4">
              {ecosystemApps.map((app) => (
                <div key={app.name} className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center flex-shrink-0`}>
                      <app.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className={`font-bold ${app.textColor} text-lg`}>{app.name}</h4>
                        <span className="text-xs text-slate-500">{app.arabic}</span>
                        <span className="text-xs bg-slate-900/50 px-2 py-1 rounded text-slate-400">{app.category}</span>
                      </div>
                      <p className="text-sm text-slate-300 mb-3">{app.description}</p>
                      <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/30">
                        <span className="text-xs text-slate-500">Nuqta Integration: </span>
                        <span className="text-sm text-[#c9a227]">{app.integration}</span>
                      </div>
                    </div>
                    <Link
                      href={app.link}
                      className="hidden sm:flex items-center gap-1 px-3 py-2 bg-slate-900/50 rounded-lg text-sm text-slate-400 hover:text-[#c9a227] transition-colors"
                    >
                      View <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Cross-Ecosystem Benefits */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-purple-500/10 rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Network className="w-5 h-5 text-[#c9a227]" />
                Cross-Ecosystem Flywheel Effect
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Single Sign-On', desc: 'One account across all 8+ apps', icon: Lock },
                  { label: 'Universal Coins', desc: 'Earn and spend anywhere in ecosystem', icon: Coins },
                  { label: 'Shared Tier Benefits', desc: 'Prive status unlocks perks everywhere', icon: Crown },
                  { label: 'Cross Referrals', desc: 'Refer friends to any app, earn in Nuqta', icon: Share2 },
                ].map((benefit, i) => (
                  <div key={i} className="bg-slate-900/30 rounded-lg p-4 border border-slate-700/30">
                    <benefit.icon className="w-6 h-6 text-[#c9a227] mb-2" />
                    <h4 className="font-bold text-white text-sm mb-1">{benefit.label}</h4>
                    <p className="text-xs text-slate-400">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════ BUSINESS MODEL TAB ═══════════════════ */}
        {activeTab === 'business' && (
          <div className="space-y-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Revenue Model & Business Economics</h2>
              <p className="text-slate-400">
                Nuqta generates revenue from 6 diversified streams, creating a resilient business model
                that scales with user growth across the ecosystem.
              </p>
            </div>

            {/* Revenue Streams */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-emerald-400" />
                6 Revenue Streams (AED 90M/yr at scale)
              </h3>
              <div className="space-y-3">
                {revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-white">{stream.name}</h4>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-emerald-400 font-bold">{stream.amount}</span>
                        <span className="text-xs bg-[#c9a227]/20 text-[#c9a227] px-2 py-1 rounded-full font-bold">{stream.percentage}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400">{stream.description}</p>
                    <div className="mt-2 bg-slate-800/50 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#c9a227] to-amber-600 rounded-full"
                        style={{ width: stream.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unit Economics Deep Dive */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-400" />
                Unit Economics Deep Dive
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-blue-400">Customer Acquisition</h4>
                  {[
                    { label: 'CAC (blended)', value: '~25 AED', detail: 'Digital marketing + referral costs' },
                    { label: 'Referral CAC', value: '~15 AED', detail: 'Coin cost for referrer + referred' },
                    { label: 'Paid CAC', value: '~35 AED', detail: 'Social media + influencer + SEM' },
                    { label: 'Organic CAC', value: '~5 AED', detail: 'App store optimization + PR' },
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/30 flex justify-between items-center">
                      <div>
                        <span className="text-sm text-white font-medium">{item.label}</span>
                        <p className="text-xs text-slate-500">{item.detail}</p>
                      </div>
                      <span className="text-sm font-bold text-blue-400">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-emerald-400">Customer Value</h4>
                  {[
                    { label: 'LTV (3-year)', value: '~500 AED', detail: 'Revenue per user over 36 months' },
                    { label: 'Avg Monthly Revenue', value: '~14 AED', detail: 'Commission + membership + breakage' },
                    { label: 'Avg Transactions/Mo', value: '8', detail: 'Across all merchant categories' },
                    { label: 'Avg Order Value', value: '120 AED', detail: 'Weighted across food, retail, services' },
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/30 flex justify-between items-center">
                      <div>
                        <span className="text-sm text-white font-medium">{item.label}</span>
                        <p className="text-xs text-slate-500">{item.detail}</p>
                      </div>
                      <span className="text-sm font-bold text-emerald-400">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Merchant Economics */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Store className="w-5 h-5 text-orange-400" />
                Merchant Commission Structure
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { tier: 'Standard', commission: '20%', features: ['QR payment processing', 'Basic analytics', 'Nuqta listing', 'Standard support'] },
                  { tier: 'Premium', commission: '17%', features: ['All Standard features', 'Featured placement', 'Campaign tools', 'Priority support', 'Advanced analytics'] },
                  { tier: 'Enterprise', commission: '15%', features: ['All Premium features', 'Dedicated account manager', 'Custom campaigns', 'API access', 'White-label options'] },
                ].map((plan, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-5 border border-slate-700/30">
                    <h4 className="font-bold text-white text-lg mb-1">{plan.tier}</h4>
                    <div className="text-2xl font-bold text-[#c9a227] mb-3">{plan.commission}</div>
                    <div className="space-y-2">
                      {plan.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Year Financial Projection */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#c9a227]" />
                3-Year Financial Projection
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700/50">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Metric</th>
                      <th className="text-center py-3 px-4 text-blue-400 font-bold">Year 1</th>
                      <th className="text-center py-3 px-4 text-[#c9a227] font-bold">Year 2</th>
                      <th className="text-center py-3 px-4 text-emerald-400 font-bold">Year 3</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/30">
                    {[
                      { metric: 'Total Users', y1: '500K', y2: '2M', y3: '5M' },
                      { metric: 'Active Users', y1: '200K', y2: '800K', y3: '3M' },
                      { metric: 'Merchants', y1: '2,000', y2: '5,000', y3: '15,000' },
                      { metric: 'Monthly GMV', y1: 'AED 15M', y2: 'AED 80M', y3: 'AED 500M' },
                      { metric: 'Annual Revenue', y1: 'AED 12M', y2: 'AED 45M', y3: 'AED 90M' },
                      { metric: 'EBITDA', y1: '-AED 20M', y2: '-AED 5M', y3: 'AED 25M' },
                      { metric: 'Take Rate', y1: '15%', y2: '17%', y3: '18%' },
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="py-3 px-4 text-slate-300 font-medium">{row.metric}</td>
                        <td className="py-3 px-4 text-center text-blue-400">{row.y1}</td>
                        <td className="py-3 px-4 text-center text-[#c9a227]">{row.y2}</td>
                        <td className="py-3 px-4 text-center text-emerald-400">{row.y3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════ ROADMAP TAB ═══════════════════ */}
        {activeTab === 'roadmap' && (
          <div className="space-y-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Product Roadmap</h2>
              <p className="text-slate-400">
                A phased 36-month plan from core app launch to full GCC expansion.
                Each phase builds on the previous, ensuring stable foundations before scaling.
              </p>
            </div>

            {/* Phase Cards */}
            <div className="space-y-4">
              {roadmapPhases.map((phase) => (
                <div key={phase.phase} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden">
                  <button
                    onClick={() => setExpandedPhase(expandedPhase === phase.phase ? null : phase.phase)}
                    className="w-full p-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center`}>
                        <span className="text-white font-bold text-sm">{phase.phase.replace('Phase ', 'P')}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{phase.phase}: {phase.title}</h3>
                        <p className="text-sm text-slate-400">{phase.timeline}</p>
                      </div>
                    </div>
                    {expandedPhase === phase.phase ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </button>

                  {expandedPhase === phase.phase && (
                    <div className="px-5 pb-5 border-t border-slate-700/50">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 mb-4">
                        {phase.items.map((item, j) => (
                          <div key={j} className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-300">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-[#c9a227]/10 rounded-lg p-4 border border-[#c9a227]/30">
                        <p className="text-xs text-slate-400 mb-2">Target KPIs</p>
                        <div className="flex flex-wrap gap-2">
                          {phase.kpis.map((kpi, j) => (
                            <span key={j} className="text-sm bg-[#c9a227]/20 text-[#c9a227] px-3 py-1 rounded-full font-medium">
                              {kpi}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Timeline Visual */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-purple-400" />
                36-Month Timeline Overview
              </h3>
              <div className="space-y-4">
                {roadmapPhases.map((phase, i) => (
                  <div key={phase.phase} className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${phase.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white text-xs font-bold">{phase.phase.replace('Phase ', 'P')}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-white">{phase.title}</span>
                        <span className="text-xs text-slate-400">{phase.timeline}</span>
                      </div>
                      <div className="bg-slate-900/50 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${phase.color} rounded-full`}
                          style={{ width: `${((i + 1) / roadmapPhases.length) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════ COMPETITION TAB ═══════════════════ */}
        {activeTab === 'competition' && (
          <div className="space-y-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Competitive Landscape</h2>
              <p className="text-slate-400">
                The GCC digital market is fragmented across point solutions. Nuqta&apos;s unified ecosystem
                approach creates a moat that single-category competitors cannot replicate.
              </p>
            </div>

            {/* Competitor Cards */}
            <div className="space-y-4">
              {competitors.map((comp) => (
                <div key={comp.name} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden">
                  <button
                    onClick={() => setExpandedCompetitor(expandedCompetitor === comp.name ? null : comp.name)}
                    className="w-full p-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-900/50 border border-slate-700/50 flex items-center justify-center">
                        <Target className="w-6 h-6 text-slate-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{comp.name}</h3>
                        <p className="text-sm text-slate-400">{comp.focus}</p>
                      </div>
                    </div>
                    {expandedCompetitor === comp.name ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </button>

                  {expandedCompetitor === comp.name && (
                    <div className="px-5 pb-5 border-t border-slate-700/50">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div>
                          <p className="text-xs text-slate-500 mb-2 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Strengths
                          </p>
                          <div className="space-y-2">
                            {comp.strengths.map((s, j) => (
                              <div key={j} className="flex items-center gap-2 text-sm text-emerald-400 bg-emerald-500/10 rounded-lg p-2">
                                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                                {s}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-2 flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3 text-red-400" /> Weaknesses
                          </p>
                          <div className="space-y-2">
                            {comp.weaknesses.map((w, j) => (
                              <div key={j} className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 rounded-lg p-2">
                                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                                {w}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 bg-[#c9a227]/10 rounded-lg p-4 border border-[#c9a227]/30">
                        <div className="flex items-center gap-2 mb-1">
                          <Crown className="w-4 h-4 text-[#c9a227]" />
                          <span className="text-sm font-bold text-[#c9a227]">Nuqta Advantage</span>
                        </div>
                        <p className="text-sm text-slate-300">{comp.nuqtaAdvantage}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Nuqta Differentiation */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-purple-500/10 rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Crown className="w-5 h-5 text-[#c9a227]" />
                Why Nuqta Wins
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'Unified Ecosystem', desc: '8+ services under one account vs. fragmented point solutions', icon: Globe },
                  { title: 'Gamified Loyalty', desc: 'Badges, levels, and leaderboards vs. basic point collection', icon: Gamepad2 },
                  { title: 'Multi-Service Coins', desc: 'Earn everywhere, spend everywhere vs. single-app rewards', icon: Coins },
                  { title: 'Membership Tiers', desc: 'Progressive value at 4 tiers vs. one-size-fits-all', icon: Crown },
                  { title: 'AI Personalization', desc: 'AI-R assistant vs. static recommendation engines', icon: Bot },
                  { title: 'Shariah-Compliant', desc: 'Built for GCC values vs. Western-first adapted', icon: Shield },
                ].map((diff, i) => (
                  <div key={i} className="bg-slate-900/30 rounded-lg p-4 border border-slate-700/30">
                    <diff.icon className="w-6 h-6 text-[#c9a227] mb-2" />
                    <h4 className="font-bold text-white text-sm mb-1">{diff.title}</h4>
                    <p className="text-xs text-slate-400">{diff.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════ RISKS & EXPANSION TAB ═══════════════════ */}
        {activeTab === 'risks' && (
          <div className="space-y-8">
            {/* Risk Analysis */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Risk Analysis</h2>
              <p className="text-slate-400 mb-6">
                Key risks identified with detailed mitigation strategies for each.
              </p>
              <div className="space-y-3">
                {risks.map((risk) => (
                  <div key={risk.category} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden">
                    <button
                      onClick={() => setExpandedRisk(expandedRisk === risk.category ? null : risk.category)}
                      className="w-full p-5 flex items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          risk.level === 'high' ? 'bg-red-500/20' :
                          risk.level === 'medium' ? 'bg-yellow-500/20' : 'bg-green-500/20'
                        }`}>
                          <AlertTriangle className={`w-5 h-5 ${
                            risk.level === 'high' ? 'text-red-400' :
                            risk.level === 'medium' ? 'text-yellow-400' : 'text-green-400'
                          }`} />
                        </div>
                        <div>
                          <h3 className="font-bold text-white">{risk.category}</h3>
                          <span className={`text-xs font-bold uppercase ${
                            risk.level === 'high' ? 'text-red-400' :
                            risk.level === 'medium' ? 'text-yellow-400' : 'text-green-400'
                          }`}>
                            {risk.level} risk
                          </span>
                        </div>
                      </div>
                      {expandedRisk === risk.category ? (
                        <ChevronUp className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </button>

                    {expandedRisk === risk.category && (
                      <div className="px-5 pb-5 border-t border-slate-700/50">
                        <div className="mt-4 space-y-3">
                          <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
                            <p className="text-xs text-red-400 font-bold mb-1">Risk Description</p>
                            <p className="text-sm text-slate-300">{risk.description}</p>
                          </div>
                          <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/30">
                            <p className="text-xs text-emerald-400 font-bold mb-1">Mitigation Strategy</p>
                            <p className="text-sm text-slate-300">{risk.mitigation}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* GCC Expansion */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">GCC Expansion Plan</h2>
              <p className="text-slate-400 mb-6">
                UAE first, then systematic expansion across all 6 GCC markets targeting 5M+ users by Year 3.
              </p>
              <div className="space-y-3">
                {gccMarkets.map((market) => (
                  <div key={market.country} className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          market.status === 'Launch Market' ? 'bg-gradient-to-br from-[#c9a227] to-amber-600' :
                          market.status === 'Expansion Priority' ? 'bg-gradient-to-br from-emerald-500 to-green-600' :
                          'bg-gradient-to-br from-slate-600 to-slate-700'
                        }`}>
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg">{market.country}</h4>
                          <p className="text-sm text-slate-400">{market.timeline}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-400">Population: <span className="text-white font-bold">{market.population}</span></div>
                        <div className="text-sm text-slate-400">Target: <span className="text-[#c9a227] font-bold">{market.targetUsers}</span></div>
                        <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                          market.status === 'Launch Market' ? 'bg-[#c9a227]/20 text-[#c9a227]' :
                          market.status === 'Expansion Priority' ? 'bg-emerald-500/20 text-emerald-400' :
                          'bg-slate-500/20 text-slate-400'
                        }`}>
                          {market.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Expansion Total */}
              <div className="mt-6 bg-gradient-to-r from-[#c9a227]/10 to-purple-500/10 rounded-xl p-6 border border-[#c9a227]/30">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#c9a227]">6</div>
                    <div className="text-sm text-slate-400">GCC Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">60M</div>
                    <div className="text-sm text-slate-400">Total Population</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">4.65M</div>
                    <div className="text-sm text-slate-400">Target Users (3yr)</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">7.75%</div>
                    <div className="text-sm text-slate-400">Market Penetration</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regulatory Landscape */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-blue-400" />
                Regulatory Landscape by Country
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { country: 'UAE', regulator: 'CBUAE, SCA, ADGM', licenses: ['Payment Service Provider', 'Stored Value Facility', 'Consumer Credit'], status: 'In Progress' },
                  { country: 'Saudi Arabia', regulator: 'SAMA, CMA', licenses: ['E-Wallet License', 'BNPL License', 'Remittance License'], status: 'Research Phase' },
                  { country: 'Bahrain', regulator: 'CBB', licenses: ['Payment Services', 'Ancillary Services'], status: 'Planned' },
                  { country: 'Kuwait', regulator: 'CBK, CMA', licenses: ['Electronic Payment', 'Consumer Finance'], status: 'Planned' },
                  { country: 'Oman', regulator: 'CBO', licenses: ['Payment System', 'E-Money'], status: 'Planned' },
                  { country: 'Qatar', regulator: 'QCB, QFCRA', licenses: ['Payment Services', 'Financial Technology'], status: 'Planned' },
                ].map((reg, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-white">{reg.country}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        reg.status === 'In Progress' ? 'bg-[#c9a227]/20 text-[#c9a227]' :
                        reg.status === 'Research Phase' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-slate-500/20 text-slate-400'
                      }`}>
                        {reg.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mb-2">Regulator: {reg.regulator}</p>
                    <div className="space-y-1">
                      {reg.licenses.map((lic, j) => (
                        <div key={j} className="text-xs text-slate-400 flex items-center gap-1">
                          <ChevronRight className="w-3 h-3 text-slate-600" />
                          {lic}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════ PITCH DECK TAB ═══════════════════ */}
        {activeTab === 'deck' && (
          <div className="space-y-8">
            {/* Investment Thesis */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl p-6 border border-[#c9a227]/30">
              <h2 className="text-2xl font-bold text-white mb-2">Investment Thesis</h2>
              <p className="text-slate-300 leading-relaxed">
                GCC super-apps are the last uncaptured mega-opportunity in global tech. Every comparable market has produced
                multi-billion dollar platforms. Nuqta — backed by RTMN Group&apos;s 10-company vertical stack — is positioned
                to become the GCC&apos;s first homegrown super-app unicorn with 7+ revenue streams and 3-sided marketplace network effects.
              </p>
            </div>

            {/* Market Opportunity - TAM/SAM/SOM */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Market Opportunity</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-800/30 rounded-xl p-5 border border-[#c9a227]/30 text-center">
                  <div className="text-3xl font-bold text-[#c9a227]">$300B</div>
                  <div className="text-sm text-slate-400 mt-1">TAM — GCC Consumer Spending</div>
                  <div className="text-xs text-slate-500 mt-1">Payments, loyalty, services, commerce</div>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-5 border border-emerald-500/30 text-center">
                  <div className="text-3xl font-bold text-emerald-400">$45B</div>
                  <div className="text-sm text-slate-400 mt-1">SAM — Digital-Ready Segments</div>
                  <div className="text-xs text-slate-500 mt-1">Mobile payments, e-commerce, food delivery</div>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-5 border border-purple-500/30 text-center">
                  <div className="text-3xl font-bold text-purple-400">$4.5B</div>
                  <div className="text-sm text-slate-400 mt-1">SOM — Year 5 Capture</div>
                  <div className="text-xs text-slate-500 mt-1">1.5% of TAM at 5M users</div>
                </div>
              </div>
            </div>

            {/* Key Differentiators */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Key Differentiators</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: 'Vertically integrated from day one', desc: 'RTMN owns 10 companies feeding Nuqta simultaneously — not bolted-on verticals.' },
                  { title: 'Network effects create a moat', desc: '3-sided marketplace (users x merchants x service providers) becomes exponentially harder to compete with.' },
                  { title: 'Revenue diversity de-risks', desc: '7+ revenue streams: txn fees, subscriptions, merchant SaaS, ads, BNPL interest, data licensing, white-label.' },
                  { title: 'Last uncaptured super-app market', desc: 'GCC ($300B consumer spend) has zero homegrown super-app. First mover advantage is decisive.' },
                ].map((d, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                    <CheckCircle2 className="w-5 h-5 text-[#c9a227] flex-shrink-0 mt-0.5" />
                    <div><div className="text-white font-bold text-sm">{d.title}</div><p className="text-xs text-slate-400 mt-1">{d.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Year Financial Projections */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Financial Projections</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-slate-700 text-slate-400">
                    <th className="text-left py-2 pr-4">Year</th><th className="text-right py-2 px-4">Users</th><th className="text-right py-2 px-4">Merchants</th><th className="text-right py-2 px-4">Revenue (AED)</th><th className="text-right py-2 px-4">ARR</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { year: 'Year 1', users: '50K', merchants: '500+', revenue: '3.6M', arr: '~$1M' },
                      { year: 'Year 2', users: '500K', merchants: '3,000+', revenue: '25M', arr: '~$7M' },
                      { year: 'Year 3', users: '2M', merchants: '10,000+', revenue: '90M+', arr: '$25M+' },
                    ].map((r, i) => (
                      <tr key={i} className="border-b border-slate-700/50 text-slate-300">
                        <td className="py-2 pr-4 text-white font-medium">{r.year}</td><td className="text-right py-2 px-4">{r.users}</td><td className="text-right py-2 px-4">{r.merchants}</td><td className="text-right py-2 px-4 text-emerald-400">{r.revenue}</td><td className="text-right py-2 px-4 text-[#c9a227]">{r.arr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Comparable Companies */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Comparable Companies</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Grab', val: '$40B', region: 'SE Asia', users: '187M' },
                  { name: 'Gojek', val: '$10B', region: 'Indonesia', users: '170M' },
                  { name: 'Careem', val: '$3.1B', region: 'MENA (acquired)', users: '50M' },
                  { name: 'Paytm', val: '$20B', region: 'India', users: '350M' },
                ].map((c, i) => (
                  <div key={i} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 text-center">
                    <div className="text-white font-bold">{c.name}</div>
                    <div className="text-2xl font-black text-[#c9a227] mt-1">{c.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{c.region} &middot; {c.users} users</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unicorn Path */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><ArrowUpRight className="w-5 h-5 text-[#c9a227]" /> Unicorn Path</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { stage: 'Seed', val: '$15M', timeline: 'Q3 2025', metric: '50K users, 200 merchants' },
                  { stage: 'Series A', val: '$50M', timeline: 'Q2 2026', metric: '500K MAU, $5M ARR' },
                  { stage: 'Series B', val: '$200M', timeline: 'Q4 2027', metric: '2M MAU, 3 GCC markets' },
                  { stage: 'Series C', val: '$1B+', timeline: '2029', metric: '5M+ users, $100M+ ARR' },
                ].map((s, i) => (
                  <div key={i} className={`rounded-xl p-4 text-center border ${i === 3 ? 'bg-[#c9a227]/10 border-[#c9a227]/40' : 'bg-slate-900/50 border-slate-700/50'}`}>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">{s.stage}</div>
                    <div className={`text-2xl font-black mt-1 ${i === 3 ? 'text-[#c9a227]' : 'text-white'}`}>{s.val}</div>
                    <div className="text-xs text-slate-400 mt-1">{s.timeline}</div>
                    <div className="text-xs text-emerald-400 mt-1">{s.metric}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RTMN Multiplier */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-transparent rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-[#c9a227] mb-3">RTMN Ecosystem Multiplier</h3>
              <p className="text-slate-300 text-sm mb-4">Each RTMN sister company compounds Nuqta&apos;s value — not additive, multiplicative. Every vertical feeds users, transactions, and data into the super-app.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { app: 'DineZy', metric: '+$2.8K LTV/user' },
                  { app: 'Grocify', metric: '+$4.2K LTV/user' },
                  { app: 'QuickDrop', metric: '+15% retention' },
                  { app: 'SpinZy', metric: '+40% DAU' },
                  { app: 'CleanEZ', metric: '+$1.2K LTV/user' },
                  { app: 'BizOne', metric: '+$3K ARR/merchant' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg px-3 py-2 border border-slate-700/30 flex items-center justify-between">
                    <span className="text-white text-sm font-medium">{item.app}</span>
                    <span className="text-emerald-400 text-xs font-bold">{item.metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/10 border-t border-b border-[#c9a227]/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            One App. Infinite Possibilities.
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Nuqta connects 100+ services, 4 coin types, 4 membership tiers, and 10 sister companies
            into the GCC&apos;s most comprehensive super-app ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/nuqta-plus"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c9a227] to-amber-600 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-opacity"
            >
              <Crown className="w-6 h-6" />
              Explore Nuqta+
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/rtmn-ecosystem"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white font-bold text-lg hover:border-[#c9a227]/50 transition-colors"
            >
              <Network className="w-6 h-6" />
              RTMN Ecosystem
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Building2 className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Network className="w-5 h-5" /> RTMN Ecosystem
            </Link>
            <Link href="/rtmn-dashboard" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <BarChart3 className="w-5 h-5" /> RTMN Dashboard
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
