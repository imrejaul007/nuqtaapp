'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Send, DollarSign, Globe, Shield, TrendingUp, Users, Target,
  Rocket, CheckCircle, AlertTriangle, Clock, Building, ArrowRight,
  Star, Zap, BarChart3, Award, Handshake, Store, CreditCard,
  FileText, Calculator, Gift, Crown, Wallet, ChevronRight,
  ChevronDown, ChevronUp, Building2, ShieldCheck, HeartHandshake,
  Coins, Network, ArrowRightLeft, Phone, Smartphone, Banknote,
  BadgePercent, CircleDollarSign, PieChart, LineChart, ArrowUpRight,
  Link2, RefreshCw, Landmark, MapPin, Flag, Percent, Receipt,
  Timer, UserCheck, Lock, Eye, Search, Repeat, ArrowDownUp,
  Plane, Home, ShoppingBag, IndianRupee, PhilippinePeso, BadgeDollarSign,
  Package, Wifi, Heart, Users2, Car, Briefcase
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Executive Summary Stats
const keyStats = [
  { label: 'UAE Remittance', value: '$50B', suffix: 'annually', color: 'text-green-400' },
  { label: 'Target Year 1', value: '$100M', suffix: 'volume', color: 'text-blue-400' },
  { label: 'Avg Transfer', value: '2,500', suffix: 'AED', color: 'text-purple-400' },
  { label: 'Our Fee', value: '0.5%', suffix: 'only', color: 'text-[#c9a227]' },
];

// Top Remittance Corridors from UAE
const corridors = [
  { country: 'India', flag: '🇮🇳', volume: '$15B', share: '30%', avgTransfer: 3000, ourFee: '0.5%', competitorFee: '3-5%' },
  { country: 'UK/Europe', flag: '🇬🇧', volume: '$8B', share: '16%', avgTransfer: 2500, ourFee: '0.5%', competitorFee: '3-4%' },
  { country: 'Philippines', flag: '🇵🇭', volume: '$6B', share: '12%', avgTransfer: 2000, ourFee: '0.5%', competitorFee: '2-4%' },
  { country: 'Bangladesh', flag: '🇧🇩', volume: '$4B', share: '8%', avgTransfer: 2200, ourFee: '0.5%', competitorFee: '3-5%' },
  { country: 'Egypt', flag: '🇪🇬', volume: '$3B', share: '6%', avgTransfer: 2800, ourFee: '0.5%', competitorFee: '2-4%' },
  { country: 'Nepal', flag: '🇳🇵', volume: '$2B', share: '4%', avgTransfer: 1800, ourFee: '0.5%', competitorFee: '3-5%' },
  { country: 'Sri Lanka', flag: '🇱🇰', volume: '$1.5B', share: '3%', avgTransfer: 2000, ourFee: '0.5%', competitorFee: '2-4%' },
  { country: 'Indonesia', flag: '🇮🇩', volume: '$1B', share: '2%', avgTransfer: 2500, ourFee: '0.5%', competitorFee: '2-3%' },
];

// GCC Cross-Border Corridors
const gccCorridors = [
  { from: '🇦🇪 UAE', to: '🇸🇦 Saudi Arabia', volume: '$5B', fee: '0.25%', feature: 'Instant transfers between GCC countries' },
  { from: '🇦🇪 UAE', to: '🇶🇦 Qatar', volume: '$2B', fee: '0.25%', feature: 'Same-day settlement' },
  { from: '🇦🇪 UAE', to: '🇰🇼 Kuwait', volume: '$1.5B', fee: '0.25%', feature: 'Free for Nuqta+ members' },
  { from: '🇦🇪 UAE', to: '🇧🇭 Bahrain', volume: '$800M', fee: '0.25%', feature: 'GCC Hawil Card acceptance' },
  { from: '🇦🇪 UAE', to: '🇴🇲 Oman', volume: '$1.2B', fee: '0.25%', feature: 'Multi-currency wallet' },
  { from: '🇸🇦 Saudi', to: '🇦🇪 UAE', volume: '$4B', fee: '0.25%', feature: 'Unified Nuqta rewards' },
];

// The Google Rate Advantage
const googleRateAdvantage = {
  headline: 'Buy Nuqta Coins at Google Rate',
  subheadline: 'Zero markup. Zero hidden fees. Best rate in UAE.',
  comparison: [
    { provider: 'Hawil (Nuqta Coins)', markup: '0%', description: 'Google/mid-market rate', highlight: true },
    { provider: 'Exchange Houses', markup: '2-4%', description: 'Hidden in exchange rate', highlight: false },
    { provider: 'Banks', markup: '3-5%', description: 'Plus fixed fees', highlight: false },
    { provider: 'Wise', markup: '0.5-1%', description: 'Plus transfer fee', highlight: false },
  ],
  howItWorks: [
    'You buy Nuqta Coins with AED at exact Google rate',
    'Coins are stored in your Nuqta Wallet',
    'Send coins to family - they convert at local Google rate',
    'Zero markup on both ends = maximum value',
  ],
};

// Value Propositions
const senderBenefits = [
  { icon: Percent, title: 'Google Rate Exchange', description: 'Buy Nuqta coins at exact Google/mid-market rate. Zero markup.' },
  { icon: BadgePercent, title: '0.5% Transfer Fee', description: 'Flat 0.5% fee. No hidden charges. Save up to 90% vs banks.' },
  { icon: Coins, title: 'Earn While Sending', description: 'Get Nuqta coins on every transfer. More you send, more you earn.' },
  { icon: Zap, title: 'Instant Transfers', description: 'Money arrives in minutes, not days. 24/7 availability.' },
  { icon: Shield, title: 'Bank-Grade Security', description: 'Licensed, regulated, and fully insured transfers.' },
  { icon: Smartphone, title: 'Track Everything', description: 'Real-time tracking. Instant notifications when money arrives.' },
];

const receiverBenefits = [
  { icon: Banknote, title: 'Best Rate Guaranteed', description: 'Family receives at Google rate. No deductions.' },
  { icon: Clock, title: 'Instant Arrival', description: 'Money in bank account within minutes.' },
  { icon: Wallet, title: 'Multiple Options', description: 'Bank deposit, mobile wallet, or cash pickup.' },
  { icon: Gift, title: 'Bonus Rewards', description: 'Receivers can join Nuqta and earn coins too.' },
];

// Currency Exchange Model
const currencyExchangeModel = {
  concept: 'Nuqta Coins as Universal Currency',
  steps: [
    { step: 1, title: 'Buy Coins', description: 'Convert AED to Nuqta Coins at Google rate (0% markup)', icon: Coins },
    { step: 2, title: 'Store or Send', description: 'Keep in wallet or send to family instantly', icon: Send },
    { step: 3, title: 'Convert Anywhere', description: 'Receiver converts to local currency at Google rate', icon: ArrowDownUp },
    { step: 4, title: 'Earn Rewards', description: 'Both sender and receiver earn Nuqta coins', icon: Gift },
  ],
  advantages: [
    'No forex markup on either end',
    'Coins hold value (pegged to USD)',
    'Use coins for Nuqta ecosystem purchases',
    'Convert back to AED anytime at Google rate',
  ],
};

// Pricing
const pricingTiers = [
  {
    tier: 'Standard',
    transferFee: '0.75%',
    exchangeRate: 'Google Rate',
    minTransfer: '100 AED',
    maxTransfer: '10,000 AED',
    speed: '1-24 hours',
    coinReward: '25 coins',
    color: 'border-slate-500',
    bgColor: 'bg-slate-800/30',
  },
  {
    tier: 'Nuqta+ Member',
    transferFee: '0.5%',
    exchangeRate: 'Google Rate',
    minTransfer: '100 AED',
    maxTransfer: '50,000 AED',
    speed: 'Instant',
    coinReward: '50 coins',
    color: 'border-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    popular: true,
  },
  {
    tier: 'Premium',
    transferFee: '0.25%',
    exchangeRate: 'Google Rate',
    minTransfer: '100 AED',
    maxTransfer: '100,000 AED',
    speed: 'Instant',
    coinReward: '100 coins',
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
  },
];

// Unit Economics
const unitEconomics = {
  avgTransfer: 2500,
  transferFee: 12.5, // 0.5%
  fxSpread: 0, // We use Google rate
  partnerCost: 5, // Payment to local payout partner
  operatingCost: 2,
  netRevenue: 5.5,
  coinRewardCost: 2.5, // 50 coins at 0.05 AED each
  actualProfit: 3,
  nuqtaPlusConversion: 20, // % who convert to Nuqta+
};

// Financial Projections
const financialProjections = [
  { year: 'Year 1', volume: 100, transactions: 40000, revenue: 0.5, netProfit: 0.12, users: 15000, countries: 8 },
  { year: 'Year 2', volume: 500, transactions: 200000, revenue: 2.5, netProfit: 0.8, users: 75000, countries: 15 },
  { year: 'Year 3', volume: 2000, transactions: 800000, revenue: 10, netProfit: 4, users: 250000, countries: 25 },
];

// Roadmap
const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    timeline: 'Q4 2026',
    status: 'planned',
    milestones: [
      'Legal entity setup (Hawil Exchange LLC)',
      'CBUAE money exchange license',
      'Partner with 3 payout networks',
      'Build core transfer platform',
      'Integrate Nuqta wallet',
      'Launch India & UK/Europe corridors',
    ],
    color: 'border-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    phase: 'Phase 2',
    title: 'Expansion',
    timeline: 'Q1 2027',
    status: 'pending',
    milestones: [
      'Add Philippines, Bangladesh, Egypt',
      'Launch Nuqta Coin exchange feature',
      'Mobile app release',
      'Cash pickup partnerships',
      'Corporate bulk transfers',
      'Reach $50M monthly volume',
    ],
    color: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    phase: 'Phase 3',
    title: 'Scale',
    timeline: 'Q3 2027',
    status: 'pending',
    milestones: [
      'Expand to 15+ countries',
      'Launch Hawil card (multi-currency)',
      'Real-time currency conversion',
      'B2B payroll remittance',
      'Cross-border Qist payments',
      'Reach $200M monthly volume',
    ],
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    phase: 'Phase 4',
    title: 'Dominance',
    timeline: '2028',
    status: 'pending',
    milestones: [
      '25+ countries coverage',
      'Crypto/stablecoin rails',
      'Regional expansion (GCC)',
      '$500M+ monthly volume',
      'IPO preparation',
    ],
    color: 'border-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
  },
];

// Competition
const competitors = [
  { name: 'Hawil', fee: '0.5%', fxMarkup: '0% (Google)', speed: 'Instant', rewards: 'Nuqta Coins', ecosystem: 'Full Nuqta', advantage: 'Best rate + rewards' },
  { name: 'Exchange Houses', fee: '0-1%', fxMarkup: '2-4%', speed: '1-3 days', rewards: 'None', ecosystem: 'None', advantage: 'Cash handling' },
  { name: 'Banks', fee: '25-50 AED', fxMarkup: '3-5%', speed: '2-5 days', rewards: 'None', ecosystem: 'None', advantage: 'Trust' },
  { name: 'Wise', fee: '0.5-1%', fxMarkup: '0.5-1%', speed: '1-2 days', rewards: 'None', ecosystem: 'None', advantage: 'Transparency' },
  { name: 'Remitly', fee: '1-3%', fxMarkup: '1-2%', speed: 'Instant', rewards: 'Limited', ecosystem: 'None', advantage: 'Speed' },
  { name: 'Western Union', fee: '5-10%', fxMarkup: '2-4%', speed: 'Instant', rewards: 'None', ecosystem: 'None', advantage: 'Cash network' },
];

// Risks
const risks = [
  {
    risk: 'Regulatory Compliance',
    severity: 'high',
    mitigation: [
      'CBUAE license from day 1',
      'AML/KYC compliance built-in',
      'Regular audits',
      'Compliance officer hired',
    ],
  },
  {
    risk: 'FX Rate Volatility',
    severity: 'medium',
    mitigation: [
      'Real-time rate locking',
      'Hedging strategies',
      'Volume-based rate agreements',
      'Multi-provider redundancy',
    ],
  },
  {
    risk: 'Payout Partner Reliability',
    severity: 'medium',
    mitigation: [
      'Multiple partners per corridor',
      'SLA agreements',
      '24/7 monitoring',
      'Instant failover',
    ],
  },
  {
    risk: 'Competition from Banks/Fintechs',
    severity: 'high',
    mitigation: [
      'Google rate = unbeatable pricing',
      'Nuqta ecosystem advantage',
      'Coin rewards differentiation',
      'Superior UX',
    ],
  },
];

// Corporate Structure
const corporateStructure = {
  parentCompany: 'Nuqta Group',
  subsidiary: 'Hawil Exchange LLC',
  ownership: '100% owned by Nuqta Group',
  license: 'Money Exchange / Remittance',
  regulator: 'Central Bank of UAE (CBUAE)',
};

// Tourist Acquisition Strategy
const touristStrategy = {
  headline: 'Best Rate = Tourist Magnet',
  subheadline: 'Attract tourists with unbeatable rates, keep them with amazing deals',
  uaeStats: {
    tourists: '21M+ tourists annually',
    spending: '$30B+ tourist spending',
    avgStay: '4.5 days average stay',
    topSpend: 'Shopping, dining, experiences',
  },
  acquisitionFlow: [
    { step: 1, title: 'Discover Hawil', description: 'Tourist searches "best currency exchange Dubai"', icon: Search },
    { step: 2, title: 'Get Google Rate', description: 'Converts USD/EUR/GBP at 0% markup via Nuqta Coins', icon: Coins },
    { step: 3, title: 'Join Nuqta', description: 'Downloads Nuqta app to use coins at merchants', icon: Smartphone },
    { step: 4, title: 'Discover Deals', description: 'Finds best prices at 500+ partner merchants', icon: Store },
    { step: 5, title: 'Use Everything', description: 'Wasil delivery, Qist BNPL, exclusive offers', icon: Crown },
  ],
  touristBenefits: [
    { title: 'No FX Loss', description: 'Unlike credit cards (3-5% foreign transaction fee), Hawil = 0%' },
    { title: 'Merchant Discounts', description: 'Exclusive Nuqta deals at restaurants, shops, attractions' },
    { title: 'One Wallet', description: 'Use Nuqta Coins everywhere - no need for multiple apps' },
    { title: 'Cashback in Coins', description: 'Earn rewards on every purchase to use before leaving' },
  ],
  touristCampaigns: [
    { segment: 'Luxury Shoppers', offer: 'Gold rate alerts + jewelry partner deals', spend: '10,000+ AED' },
    { segment: 'Family Visitors', offer: 'Theme park bundles + restaurant offers', spend: '5,000+ AED' },
    { segment: 'Business Travelers', offer: 'Premium hotel partners + transport', spend: '8,000+ AED' },
    { segment: 'Budget Tourists', offer: 'Street food guide + budget stays', spend: '2,000+ AED' },
  ],
  usp: 'Why lose 3-5% on every purchase with your foreign credit card when you can get Google rate and earn rewards?',
};

// Tourist Journey Add-ons
const touristAddons = {
  title: 'Complete Tourist Experience',
  description: 'Beyond currency exchange - everything a tourist needs in one app',
  services: [
    {
      name: 'Concierge Service',
      icon: Phone,
      description: 'Personal assistant for restaurant reservations, experiences, tours',
      features: [
        'Restaurant reservations at Nuqta partners',
        'Theme park & attraction tickets',
        'Desert safari & city tours',
        'VIP access to events',
        'Translation assistance',
      ],
      pricing: 'Free for Hawil Card holders | Premium: 50 AED/request',
      availability: '24/7 WhatsApp & in-app chat',
    },
    {
      name: 'eSIM Data',
      icon: Smartphone,
      description: 'Instant mobile data - no SIM swap needed',
      packages: [
        { data: '3GB', validity: '7 days', price: '35 AED', best: false },
        { data: '10GB', validity: '14 days', price: '75 AED', best: true },
        { data: '20GB', validity: '30 days', price: '120 AED', best: false },
        { data: 'Unlimited', validity: '7 days', price: '99 AED', best: false },
      ],
      features: ['Instant activation', 'Works with any eSIM phone', 'Local UAE number included', 'Free WhatsApp calls'],
      partner: 'Powered by du/Etisalat',
    },
    {
      name: 'Luggage Storage',
      icon: Package,
      description: 'Store bags anywhere - explore hands-free',
      locations: [
        { area: 'Dubai Mall', spots: 5, price: '25 AED/day' },
        { area: 'Mall of Emirates', spots: 3, price: '25 AED/day' },
        { area: 'JBR Walk', spots: 2, price: '20 AED/day' },
        { area: 'Dubai Marina', spots: 3, price: '20 AED/day' },
        { area: 'Airport T1/T2/T3', spots: 10, price: '30 AED/day' },
      ],
      features: ['Secure lockers', 'Insurance included', 'Book via app', 'Extend anytime'],
    },
    {
      name: 'Airport Fast Track',
      icon: Plane,
      description: 'Skip the queues at immigration and security',
      services: [
        { service: 'Arrival Fast Track', price: '150 AED', description: 'Skip immigration queue' },
        { service: 'Departure Fast Track', price: '150 AED', description: 'Priority security + immigration' },
        { service: 'Meet & Greet', price: '300 AED', description: 'Personal assistant at gate' },
        { service: 'Lounge Access', price: '200 AED', description: '3 hours any airport lounge' },
      ],
      airports: ['DXB Terminal 1, 2, 3', 'DWC', 'AUH', 'SHJ'],
    },
  ],
};

// Hawil Tourist Card
const hawilCard = {
  name: 'Hawil Card',
  tagline: 'Your UAE Travel Wallet',
  description: 'Physical & virtual card for tourists - Google rate at Nuqta partners, normal rates elsewhere. Recharge anywhere, convert back when leaving.',
  cardTypes: [
    {
      type: 'Tourist Card',
      color: 'bg-gradient-to-br from-blue-600 to-cyan-500',
      validity: 'Valid until visa expiry',
      features: ['Linked to tourist visa', 'Auto-locks on exit', 'Reactivate on next visit', 'Virtual card instant issue'],
    },
    {
      type: 'Resident Card',
      color: 'bg-gradient-to-br from-[#c9a227] to-amber-600',
      validity: 'Valid until residency expiry',
      features: ['Linked to residence visa', 'Full Nuqta+ benefits', 'Priority support', 'Family cards included'],
    },
    {
      type: 'Family Card',
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      validity: 'Linked to primary holder',
      features: ['Up to 4 family members', 'Shared balance or separate', 'Parental controls', 'Same visa linking'],
    },
  ],
  // NEW: Virtual Card & Digital Wallet
  virtualCard: {
    title: 'Instant Virtual Card',
    description: 'Get a virtual card in 60 seconds - use immediately while physical card ships',
    features: [
      { feature: 'Instant Issue', description: 'Virtual card ready in 60 seconds after verification' },
      { feature: 'Apple Pay', description: 'Add to Apple Wallet for contactless payments' },
      { feature: 'Google Pay', description: 'Add to Google Wallet for Android users' },
      { feature: 'Samsung Pay', description: 'Full Samsung Pay compatibility' },
      { feature: 'Online Shopping', description: 'Use for any online purchase immediately' },
    ],
    process: [
      { step: 1, action: 'Scan passport', time: '30 sec' },
      { step: 2, action: 'Verify identity', time: '30 sec' },
      { step: 3, action: 'Virtual card issued', time: 'Instant' },
      { step: 4, action: 'Add to wallet', time: '10 sec' },
    ],
  },
  // NEW: Multi-Currency Wallet
  multiCurrency: {
    title: 'Multi-Currency Wallet',
    description: 'Hold multiple currencies simultaneously - convert only when you need to',
    currencies: [
      { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪', canHold: true, canSpend: true },
      { code: 'USD', name: 'US Dollar', flag: '🇺🇸', canHold: true, canSpend: true },
      { code: 'EUR', name: 'Euro', flag: '🇪🇺', canHold: true, canSpend: true },
      { code: 'GBP', name: 'British Pound', flag: '🇬🇧', canHold: true, canSpend: true },
      { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳', canHold: true, canSpend: false },
      { code: 'EGP', name: 'Egyptian Pound', flag: '🇪🇬', canHold: true, canSpend: false },
      { code: 'PHP', name: 'Philippine Peso', flag: '🇵🇭', canHold: true, canSpend: false },
    ],
    features: [
      'Hold up to 10 currencies at once',
      'Convert between currencies at Google rate',
      'Auto-convert when spending (optional)',
      'Lock rates for up to 24 hours',
      'Set alerts for favorable rates',
    ],
  },
  // NEW: Family Cards
  familyCards: {
    title: 'Family Cards',
    description: 'Add spouse, kids, or parents to your Hawil Card account',
    plans: [
      {
        type: 'Shared Balance',
        description: 'All family members share one balance',
        features: ['Single balance pool', 'Spending notifications', 'Set individual limits', 'Real-time tracking'],
        fee: '0 AED',
      },
      {
        type: 'Separate Balances',
        description: 'Each member has their own balance',
        features: ['Individual wallets', 'Transfer between family', 'Personal spending history', 'Own multi-currency'],
        fee: '0 AED',
      },
    ],
    controls: [
      { control: 'Spending Limits', description: 'Set daily/weekly/monthly limits per card' },
      { control: 'Category Blocks', description: 'Block specific merchant categories (e.g., bars for kids)' },
      { control: 'Location Alerts', description: 'Get notified when card used in new location' },
      { control: 'Instant Freeze', description: 'Freeze any family card instantly from app' },
    ],
    eligibility: 'Primary cardholder must be on same visa (tourist/resident)',
  },
  howItWorks: [
    { step: 1, title: 'Get Card', description: 'Show passport + visa at airport kiosk or partner merchant', icon: CreditCard },
    { step: 2, title: 'Verify Once', description: 'One-time ID verification - no need to show ID again', icon: UserCheck },
    { step: 3, title: 'Load Money', description: 'Convert USD/EUR/GBP to AED at Google rate', icon: Coins },
    { step: 4, title: 'Spend Anywhere', description: 'Tap to pay at any merchant in UAE', icon: Smartphone },
    { step: 5, title: 'Cash Out', description: 'Convert remaining balance back before leaving', icon: Banknote },
  ],
  rateStructure: {
    nuqtaPartners: {
      rate: 'Google Rate (0% markup)',
      cashback: '1-5% in Nuqta coins',
      description: '500+ merchants with exclusive rates',
    },
    otherMerchants: {
      rate: 'Standard Visa/MC rate',
      cashback: '0.5% in Nuqta coins',
      description: 'Same as any other card',
    },
  },
  rechargeOptions: [
    { method: 'Partner Merchants', description: 'Any Nuqta partner can top up your card', fee: '0%', note: 'ID already verified - just swipe' },
    { method: 'Airport Kiosks', description: 'Hawil kiosks at DXB, AUH, SHJ', fee: '0%', note: 'Available 24/7' },
    { method: 'Bank Transfer', description: 'Transfer from any bank account', fee: '0.5%', note: 'Takes 1-2 hours' },
    { method: 'Cash at Exchange', description: 'Cash deposit at partner exchanges', fee: '0%', note: '50+ locations in UAE' },
  ],
  visaLinking: {
    tourist: {
      validity: 'Card expires when tourist visa expires',
      onExit: 'Card auto-locks when exit stamp detected',
      onReturn: 'Reactivate with new visa entry',
      balance: 'Balance preserved - withdraw anytime',
    },
    resident: {
      validity: 'Card valid for residency duration',
      renewal: 'Auto-extends with visa renewal',
      benefits: 'Full Nuqta+ membership included',
    },
  },
  exitProcess: [
    { step: 1, action: 'Swipe at Airport', description: 'Use Hawil kiosk at departure terminal' },
    { step: 2, action: 'Choose Currency', description: 'Convert AED balance to your home currency' },
    { step: 3, action: 'Get Cash or Transfer', description: 'Receive cash or transfer to home bank' },
    { step: 4, action: 'Card Locks', description: 'Card auto-locks until next UAE visit' },
  ],
  fees: {
    cardIssuance: '0 AED',
    monthlyFee: '0 AED',
    reloadFee: '0%',
    atmWithdrawal: '10 AED',
    currencyConversion: '0% at Google rate',
    exitConversion: '0.5%',
    replacementCard: '25 AED',
  },
  merchantProgram: {
    title: 'Merchant Recharge Partner',
    benefits: [
      'Act as currency exchange point',
      'No license needed - under Hawil umbrella',
      'Earn commission on every top-up',
      'Drive foot traffic to your store',
      'Tourist already verified - quick transaction',
    ],
    commission: '0.25% of top-up amount',
    requirements: [
      'Existing Nuqta merchant partner',
      'POS terminal with Hawil integration',
      'Staff training (1 hour)',
    ],
  },
};

// Hawil Card as Universal Payment Method
const hawilCardPayments = {
  title: 'Pay Across the Entire Nuqta Ecosystem',
  description: 'Your Hawil Card works everywhere in the ecosystem - one card for everything',
  headline: 'One Card. Every Product. Google Rate.',
  products: [
    {
      product: 'Wasil Delivery',
      icon: Package,
      description: 'Pay for groceries, food, pharmacy with Hawil Card',
      benefit: 'Tourists save 3-5% vs foreign credit cards',
      example: '100 AED order = save 5 AED + earn 5 coins',
      color: 'text-orange-400',
    },
    {
      product: 'Rakab Rides',
      icon: Car,
      description: 'Pay for all rides with Hawil Card',
      benefit: 'No FX fees + 5% coins back',
      example: '50 AED ride = save 2.50 AED + earn 2.50 coins',
      color: 'text-green-400',
    },
    {
      product: 'Qist BNPL',
      icon: Wallet,
      description: 'Fund BNPL payments from Hawil Card balance',
      benefit: 'Split purchases, pay in home currency',
      example: 'Buy 1,000 AED item, pay in 3 installments',
      color: 'text-violet-400',
    },
    {
      product: 'Sakin Stays',
      icon: Home,
      description: 'Pay for short-term apartment rentals',
      benefit: 'Weekly/monthly stays at Google rate',
      example: '5,000 AED/week = save 250 AED vs hotel',
      color: 'text-emerald-400',
    },
    {
      product: '500+ Merchants',
      icon: Store,
      description: 'Tap to pay at all Nuqta partner merchants',
      benefit: 'Google rate at partners, standard rate elsewhere',
      example: 'Shopping, dining, experiences - all with one card',
      color: 'text-[#c9a227]',
    },
    {
      product: 'Send Money Home',
      icon: Send,
      description: 'Transfer to family at Google rate',
      benefit: '0% FX markup + 0.5% flat fee',
      example: '10,000 AED transfer = only 50 AED fee',
      color: 'text-blue-400',
    },
  ],
  touristSavingsExample: {
    title: '7-Day Tourist Trip Savings',
    items: [
      { category: 'Wasil Orders (10x)', spend: 500, savings: 25, coins: 25 },
      { category: 'Rakab Rides (15x)', spend: 600, savings: 30, coins: 30 },
      { category: 'Sakin Apartment', spend: 2500, savings: 125, coins: 125 },
      { category: 'Merchant Shopping', spend: 3000, savings: 150, coins: 150 },
      { category: 'Dining Out', spend: 800, savings: 40, coins: 40 },
    ],
    totalSpend: 7400,
    totalSavings: 370,
    totalCoins: 370,
    vsCrediCard: 'Save 370 AED vs foreign credit card + earn 370 coins',
  },
};

// Ecosystem Integration
const ecosystemIntegration = [
  {
    product: 'Nuqta',
    integration: 'Nuqta Wallet as funding source',
    benefit: 'Earn coins on every transfer',
    icon: Crown,
    color: 'text-[#c9a227]',
  },
  {
    product: 'Qist',
    integration: 'Emergency BNPL for urgent transfers',
    benefit: 'Send now, pay over 3 months',
    icon: ShoppingBag,
    color: 'text-violet-400',
  },
  {
    product: 'Sakin',
    integration: 'Pay rent abroad for family',
    benefit: 'Send housing money at best rate',
    icon: Home,
    color: 'text-emerald-400',
  },
  {
    product: 'Wasil',
    integration: 'Send gifts with money',
    benefit: 'Deliver physical gifts + money transfer',
    icon: Send,
    color: 'text-orange-400',
  },
];

export default function HawilPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);
  const [selectedCorridor, setSelectedCorridor] = useState(corridors[0]);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Send },
    { id: 'google-rate', label: 'Google Rate', icon: Percent },
    { id: 'hawil-card', label: 'Hawil Card', icon: CreditCard },
    { id: 'tourists', label: 'Tourists', icon: Plane },
    { id: 'ecosystem', label: 'Ecosystem', icon: Network },
    { id: 'corridors', label: 'Corridors', icon: Globe },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'economics', label: 'Unit Economics', icon: Calculator },
    { id: 'financials', label: 'Financials', icon: BarChart3 },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket },
    { id: 'risks', label: 'Risks', icon: Shield },
    { id: 'competition', label: 'Competition', icon: Users },
    { id: 'deck', label: 'Pitch Deck', icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              {/* Logo & Brand */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20">
                  <Send className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white">
                    Hawil <span className="text-green-400">حوّل</span>
                  </h1>
                  <p className="text-green-400 text-sm sm:text-lg font-medium">Send Money. Save More.</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">
                UAE&apos;s first remittance with <span className="text-green-400 font-medium">Google rate exchange</span> and <span className="text-[#c9a227] font-medium">Nuqta rewards</span>.
                Zero markup on currency. 0.5% flat fee. Earn coins on every transfer.
              </p>

              {/* Partner Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full">
                <HeartHandshake className="w-4 h-4 text-[#c9a227]" />
                <span className="text-[#c9a227] text-xs sm:text-sm font-medium">A Nuqta Group Company</span>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {keyStats.map((stat, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center min-w-[120px]">
                  <div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">{stat.suffix}</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Banner */}
          <div className="mt-8 bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-4 sm:p-6 border border-green-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-green-400" />
                  <span className="text-lg font-bold text-white">The Core Promise</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white">
                  <span className="text-green-400">Google Rate</span> + <span className="text-[#c9a227]">0.5% Fee</span> + <span className="text-violet-400">Nuqta Coins</span>
                </p>
              </div>
              <div className="flex gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">0%</div>
                  <div className="text-xs text-slate-400">FX Markup</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">0.5%</div>
                  <div className="text-xs text-slate-400">Fee Only</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-2 gap-1 sm:gap-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-green-500 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Executive Summary */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                Executive Summary
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300">
                  <strong className="text-white">Hawil</strong> (حوّل - &quot;transfer&quot; in Arabic) is a remittance and currency exchange platform
                  that offers the <strong className="text-green-400">Google/mid-market exchange rate</strong> with zero markup.
                  As a <strong className="text-[#c9a227]">Nuqta Group sister company</strong>, users earn Nuqta coins on every transfer
                  and can use the Nuqta ecosystem for funding and emergency BNPL via Qist.
                </p>
              </div>

              {/* How It Works */}
              <div className="mt-6">
                <h3 className="text-base sm:text-lg font-bold text-white mb-4">How It Works</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  {[
                    { step: 1, icon: Wallet, title: 'Fund', desc: 'Add AED from bank or Nuqta wallet' },
                    { step: 2, icon: ArrowDownUp, title: 'Convert', desc: 'Get Google rate (0% markup)' },
                    { step: 3, icon: Send, title: 'Send', desc: 'Instant transfer to family' },
                    { step: 4, icon: Coins, title: 'Earn', desc: 'Get Nuqta coins as reward' },
                  ].map((item, i) => (
                    <div key={i} className="relative">
                      <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                          <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                        </div>
                        <div className="text-[10px] sm:text-xs text-green-400 mb-1">Step {item.step}</div>
                        <div className="text-xs sm:text-sm font-bold text-white">{item.title}</div>
                        <div className="text-[10px] sm:text-xs text-slate-400 mt-1">{item.desc}</div>
                      </div>
                      {i < 3 && (
                        <ChevronRight className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* The Big Differentiator */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-4 sm:p-6 border-2 border-green-500">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Percent className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                The Hawil Difference: Google Rate
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-4 sm:mb-6">
                When you send money with Hawil, you get the <strong className="text-white">exact Google/mid-market rate</strong> -
                the same rate you see when you search &quot;AED to INR&quot; on Google. No markup. No hidden fees.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-slate-900/50 rounded-xl p-4 sm:p-5 border border-red-500/30">
                  <h4 className="text-red-400 font-bold text-sm sm:text-base mb-3 sm:mb-4">How Others Work</h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between text-slate-300">
                      <span>Google Rate (AED to INR)</span>
                      <span>22.50</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Exchange House Rate</span>
                      <span>21.80 <span className="text-red-400">(-3.1%)</span></span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Bank Rate</span>
                      <span>21.50 <span className="text-red-400">(-4.4%)</span></span>
                    </div>
                    <div className="flex justify-between py-2 mt-2 border-t border-slate-700">
                      <span className="text-white font-bold">Hidden Loss on 10,000 AED</span>
                      <span className="text-red-400 font-bold">310-440 AED</span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-500/10 rounded-xl p-4 sm:p-5 border border-green-500/30">
                  <h4 className="text-green-400 font-bold text-sm sm:text-base mb-3 sm:mb-4">How Hawil Works</h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between text-slate-300">
                      <span>Google Rate (AED to INR)</span>
                      <span>22.50</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Hawil Rate</span>
                      <span className="text-green-400 font-bold">22.50 (same!)</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Transfer Fee (0.5%)</span>
                      <span>50 AED</span>
                    </div>
                    <div className="flex justify-between py-2 mt-2 border-t border-slate-700">
                      <span className="text-white font-bold">Total Cost on 10,000 AED</span>
                      <span className="text-green-400 font-bold">50 AED only!</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-bold">Save up to 90% vs traditional remittance</span>
                </div>
              </div>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  For Senders
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {senderBenefits.slice(0, 4).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-xs sm:text-sm">{benefit.title}</h4>
                        <p className="text-[10px] sm:text-xs text-slate-400">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  For Receivers
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {receiverBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-xs sm:text-sm">{benefit.title}</h4>
                        <p className="text-[10px] sm:text-xs text-slate-400">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Corporate Structure */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-4 sm:p-6 border border-green-500/30">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                Corporate Structure
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Parent Company</span>
                    <span className="text-white font-medium">{corporateStructure.parentCompany}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Entity Name</span>
                    <span className="text-white font-medium">{corporateStructure.subsidiary}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Ownership</span>
                    <span className="text-white font-medium">{corporateStructure.ownership}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">License Type</span>
                    <span className="text-white font-medium">{corporateStructure.license}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Regulator</span>
                    <span className="text-white font-medium">{corporateStructure.regulator}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Integration</span>
                    <span className="text-[#c9a227] font-medium">Nuqta+ Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Google Rate Tab */}
        {activeTab === 'google-rate' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Hero */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-green-500">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-900/50 rounded-full mb-4">
                  <Percent className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  <span className="text-green-400 font-bold text-xs sm:text-sm">Revolutionary Pricing</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
                  {googleRateAdvantage.headline}
                </h2>
                <p className="text-slate-300 text-sm sm:text-lg">{googleRateAdvantage.subheadline}</p>
              </div>

              {/* Comparison */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {googleRateAdvantage.comparison.map((item, i) => (
                  <div key={i} className={`rounded-xl p-3 sm:p-4 text-center ${
                    item.highlight
                      ? 'bg-green-500/20 border-2 border-green-500'
                      : 'bg-slate-900/50 border border-slate-700/50'
                  }`}>
                    <div className={`text-xl sm:text-2xl font-bold mb-1 ${item.highlight ? 'text-green-400' : 'text-red-400'}`}>
                      {item.markup}
                    </div>
                    <div className="text-white font-medium text-xs sm:text-sm">{item.provider}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 mt-1">{item.description}</div>
                  </div>
                ))}
              </div>

              {/* How It Works */}
              <div className="bg-slate-900/50 rounded-xl p-4 sm:p-6">
                <h3 className="text-white font-bold text-sm sm:text-base mb-3 sm:mb-4">How Nuqta Coins Enable Google Rate</h3>
                <div className="space-y-2 sm:space-y-3">
                  {googleRateAdvantage.howItWorks.map((step, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-xs sm:text-sm flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-slate-300 text-xs sm:text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Nuqta Coins as Currency */}
            <div className="bg-[#c9a227]/10 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Coins className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a227]" />
                Nuqta Coins: Universal Currency
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-4 sm:mb-6">
                Nuqta Coins are pegged to USD and can be bought/sold at Google rate. This creates a <strong className="text-white">zero-markup currency layer</strong> for the entire ecosystem.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {currencyExchangeModel.steps.map((step, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-[#c9a227]/30">
                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#c9a227] mx-auto mb-2" />
                    <div className="text-[10px] sm:text-xs text-[#c9a227] mb-1">Step {step.step}</div>
                    <div className="text-white font-bold text-xs sm:text-sm">{step.title}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 mt-1">{step.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calculator Example */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                Real Savings Example: Sending 10,000 AED to India
              </h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400">Provider</th>
                      <th className="text-right py-3 px-4 text-slate-400">Rate</th>
                      <th className="text-right py-3 px-4 text-slate-400">Fee</th>
                      <th className="text-right py-3 px-4 text-slate-400">INR Received</th>
                      <th className="text-right py-3 px-4 text-slate-400">You Lose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50 bg-green-500/10">
                      <td className="py-3 px-4 text-green-400 font-bold">Hawil</td>
                      <td className="py-3 px-4 text-right text-white">22.50</td>
                      <td className="py-3 px-4 text-right text-white">50 AED</td>
                      <td className="py-3 px-4 text-right text-green-400 font-bold">₹223,875</td>
                      <td className="py-3 px-4 text-right text-green-400 font-bold">50 AED</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white">Exchange House</td>
                      <td className="py-3 px-4 text-right text-slate-300">21.80</td>
                      <td className="py-3 px-4 text-right text-slate-300">0 AED</td>
                      <td className="py-3 px-4 text-right text-slate-300">₹218,000</td>
                      <td className="py-3 px-4 text-right text-red-400">320 AED</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white">Bank</td>
                      <td className="py-3 px-4 text-right text-slate-300">21.50</td>
                      <td className="py-3 px-4 text-right text-slate-300">35 AED</td>
                      <td className="py-3 px-4 text-right text-slate-300">₹214,108</td>
                      <td className="py-3 px-4 text-right text-red-400">470 AED</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Western Union</td>
                      <td className="py-3 px-4 text-right text-slate-300">21.60</td>
                      <td className="py-3 px-4 text-right text-slate-300">150 AED</td>
                      <td className="py-3 px-4 text-right text-slate-300">₹212,760</td>
                      <td className="py-3 px-4 text-right text-red-400">640 AED</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-center">
                <p className="text-slate-300">
                  Sending 10,000 AED monthly = <span className="text-green-400 font-bold">Save 3,000-7,000 AED/year</span> with Hawil
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Hawil Card Tab */}
        {activeTab === 'hawil-card' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Hero - Card Visual */}
            <div className="bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-[#c9a227]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-blue-500">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-900/50 rounded-full mb-4">
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  <span className="text-blue-400 font-bold text-xs sm:text-sm">Tourist & Resident Card</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
                  {hawilCard.name}: <span className="text-blue-400">{hawilCard.tagline}</span>
                </h2>
                <p className="text-slate-300 text-sm sm:text-lg max-w-3xl mx-auto">{hawilCard.description}</p>
              </div>

              {/* Card Visuals */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {hawilCard.cardTypes.map((card, i) => (
                  <div key={i} className={`${card.color} rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <div className="text-white/80 text-xs mb-1">HAWIL</div>
                          <div className="text-white font-bold text-lg">{card.type}</div>
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="text-white/70 text-xs tracking-widest mb-4">•••• •••• •••• 1234</div>
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-white/60 text-[10px]">VALID UNTIL</div>
                          <div className="text-white text-sm font-medium">{card.validity}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-white/60 text-[10px]">POWERED BY</div>
                          <div className="text-white text-sm font-bold">NUQTA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key USP */}
              <div className="bg-slate-900/50 rounded-xl p-4 sm:p-6 border border-[#c9a227]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border border-green-500/30">
                    <h4 className="text-green-400 font-bold text-sm sm:text-base mb-2 flex items-center gap-2">
                      <Store className="w-3 h-3 sm:w-4 sm:h-4" />
                      At Nuqta Partners (500+)
                    </h4>
                    <div className="text-xl sm:text-2xl font-black text-white mb-1">{hawilCard.rateStructure.nuqtaPartners.rate}</div>
                    <div className="text-[#c9a227] text-xs sm:text-sm font-medium">{hawilCard.rateStructure.nuqtaPartners.cashback}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 mt-2">{hawilCard.rateStructure.nuqtaPartners.description}</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 border border-slate-700">
                    <h4 className="text-slate-400 font-bold text-sm sm:text-base mb-2 flex items-center gap-2">
                      <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                      At Other Merchants
                    </h4>
                    <div className="text-xl sm:text-2xl font-black text-white mb-1">{hawilCard.rateStructure.otherMerchants.rate}</div>
                    <div className="text-[#c9a227] text-xs sm:text-sm font-medium">{hawilCard.rateStructure.otherMerchants.cashback}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 mt-2">{hawilCard.rateStructure.otherMerchants.description}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                How Hawil Card Works
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                {hawilCard.howItWorks.map((step, i) => (
                  <div key={i} className="relative">
                    <div className="bg-gradient-to-b from-blue-500/20 to-slate-900/50 rounded-xl p-3 sm:p-4 border border-blue-500/30 text-center h-full">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-2 sm:mb-3 border border-blue-500/50">
                        <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                      </div>
                      <div className="text-[10px] sm:text-xs text-blue-400 font-bold mb-1">Step {step.step}</div>
                      <div className="text-xs sm:text-sm font-bold text-white mb-1 sm:mb-2">{step.title}</div>
                      <div className="text-[10px] sm:text-xs text-slate-400">{step.description}</div>
                    </div>
                    {i < 4 && (
                      <ChevronRight className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-blue-500/50" size={24} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Visa Linking System */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-4 sm:p-6 border-2 border-blue-500">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                Visa-Linked Security System
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Tourist Visa */}
                <div className="bg-slate-900/50 rounded-xl p-4 sm:p-5 border border-blue-500/30">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    </div>
                    <h4 className="text-blue-400 font-bold text-sm sm:text-base">Tourist Visa Holder</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-slate-500 mt-0.5" />
                      <div>
                        <div className="text-white text-sm font-medium">Validity</div>
                        <div className="text-xs text-slate-400">{hawilCard.visaLinking.tourist.validity}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-orange-400 mt-0.5" />
                      <div>
                        <div className="text-white text-sm font-medium">On Exit</div>
                        <div className="text-xs text-slate-400">{hawilCard.visaLinking.tourist.onExit}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <RefreshCw className="w-4 h-4 text-green-400 mt-0.5" />
                      <div>
                        <div className="text-white text-sm font-medium">On Return</div>
                        <div className="text-xs text-slate-400">{hawilCard.visaLinking.tourist.onReturn}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Wallet className="w-4 h-4 text-[#c9a227] mt-0.5" />
                      <div>
                        <div className="text-white text-sm font-medium">Balance</div>
                        <div className="text-xs text-slate-400">{hawilCard.visaLinking.tourist.balance}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resident Visa */}
                <div className="bg-slate-900/50 rounded-xl p-4 sm:p-5 border border-[#c9a227]/30">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#c9a227]/20 flex items-center justify-center">
                      <Home className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a227]" />
                    </div>
                    <h4 className="text-[#c9a227] font-bold text-sm sm:text-base">Residence Visa Holder</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-slate-500 mt-0.5" />
                      <div>
                        <div className="text-white text-sm font-medium">Validity</div>
                        <div className="text-xs text-slate-400">{hawilCard.visaLinking.resident.validity}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <RefreshCw className="w-4 h-4 text-green-400 mt-0.5" />
                      <div>
                        <div className="text-white text-sm font-medium">Renewal</div>
                        <div className="text-xs text-slate-400">{hawilCard.visaLinking.resident.renewal}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Crown className="w-4 h-4 text-[#c9a227] mt-0.5" />
                      <div>
                        <div className="text-white text-sm font-medium">Benefits</div>
                        <div className="text-xs text-slate-400">{hawilCard.visaLinking.resident.benefits}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recharge Options */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Coins className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                Easy Recharge Options
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {hawilCard.rechargeOptions.map((option, i) => (
                  <div key={i} className="bg-gradient-to-b from-green-500/10 to-slate-900/50 rounded-xl p-4 sm:p-5 border border-green-500/30">
                    <h4 className="text-white font-bold text-xs sm:text-sm mb-2">{option.method}</h4>
                    <p className="text-[10px] sm:text-xs text-slate-400 mb-2 sm:mb-3">{option.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-bold text-base sm:text-lg">{option.fee}</span>
                      <span className="text-[10px] sm:text-xs text-slate-500">fee</span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-2 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      {option.note}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                <div className="flex items-center gap-3">
                  <UserCheck className="w-8 h-8 text-green-400" />
                  <div>
                    <div className="text-white font-bold">No ID Required for Top-Ups</div>
                    <div className="text-sm text-slate-400">Your identity was verified when you got the card. Just swipe and reload - no paperwork!</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Exit Process */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-4 sm:p-6 border border-orange-500/30">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                Leaving UAE? Convert Your Balance
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
                {hawilCard.exitProcess.map((step, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-2 sm:mb-3 text-orange-400 font-bold text-sm sm:text-base">
                      {step.step}
                    </div>
                    <div className="text-white font-bold text-xs sm:text-sm mb-1">{step.action}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400">{step.description}</div>
                  </div>
                ))}
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                <p className="text-slate-300">
                  Convert remaining AED to <span className="text-white font-bold">USD, EUR, GBP, INR</span> and 20+ currencies at <span className="text-green-400 font-bold">Google rate + 0.5%</span>
                </p>
              </div>
            </div>

            {/* Fee Structure */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Receipt className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a227]" />
                Transparent Fees
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
                {Object.entries(hawilCard.fees).map(([key, value], i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 sm:p-4 text-center border border-slate-700/50">
                    <div className={`text-lg sm:text-xl font-bold ${value === '0 AED' || value === '0%' ? 'text-green-400' : 'text-white'}`}>
                      {value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Merchant Recharge Program */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/10 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Store className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a227]" />
                {hawilCard.merchantProgram.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-4 sm:mb-6">
                Nuqta partner merchants can act as <strong className="text-white">Hawil Card recharge points</strong> - function like a currency exchange without needing a license!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="text-[#c9a227] font-bold mb-3">Benefits for Merchants</h4>
                  <div className="space-y-2">
                    {hawilCard.merchantProgram.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 bg-green-500/10 rounded-lg p-3 border border-green-500/30">
                    <div className="text-green-400 font-bold">Commission: {hawilCard.merchantProgram.commission}</div>
                    <div className="text-xs text-slate-400">Per top-up transaction</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-3">Requirements</h4>
                  <div className="space-y-2">
                    {hawilCard.merchantProgram.requirements.map((req, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        {req}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 bg-blue-500/10 rounded-lg p-3 border border-blue-500/30">
                    <div className="text-blue-400 font-bold">Under Hawil License</div>
                    <div className="text-xs text-slate-400">No separate money exchange license needed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tourists Tab */}
        {activeTab === 'tourists' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Hero */}
            <div className="bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-blue-500">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-900/50 rounded-full mb-4">
                  <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  <span className="text-blue-400 font-bold text-xs sm:text-sm">Tourist Acquisition Engine</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
                  {touristStrategy.headline}
                </h2>
                <p className="text-slate-300 text-sm sm:text-lg">{touristStrategy.subheadline}</p>
              </div>

              {/* UAE Tourism Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-blue-500/30">
                  <div className="text-lg sm:text-2xl font-bold text-blue-400">{touristStrategy.uaeStats.tourists}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Annual Visitors</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-cyan-500/30">
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400">{touristStrategy.uaeStats.spending}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Tourist Spending</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-teal-500/30">
                  <div className="text-lg sm:text-2xl font-bold text-teal-400">{touristStrategy.uaeStats.avgStay}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Average Stay</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-green-500/30">
                  <div className="text-lg sm:text-2xl font-bold text-green-400">{touristStrategy.uaeStats.topSpend}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Top Spending</div>
                </div>
              </div>

              {/* USP Banner */}
              <div className="bg-gradient-to-r from-[#c9a227]/20 to-green-500/20 rounded-xl p-4 sm:p-6 border border-[#c9a227]">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base sm:text-lg mb-2">The Question Every Tourist Should Ask</h3>
                    <p className="text-slate-300 text-sm sm:text-lg">&quot;{touristStrategy.usp}&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tourist Acquisition Flow */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                Tourist Acquisition Funnel
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                {touristStrategy.acquisitionFlow.map((step, i) => (
                  <div key={i} className="relative">
                    <div className="bg-gradient-to-b from-blue-500/20 to-slate-900/50 rounded-xl p-3 sm:p-4 border border-blue-500/30 text-center h-full">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-2 sm:mb-3 border border-blue-500/50">
                        <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                      </div>
                      <div className="text-[10px] sm:text-xs text-blue-400 font-bold mb-1">Step {step.step}</div>
                      <div className="text-xs sm:text-sm font-bold text-white mb-1 sm:mb-2">{step.title}</div>
                      <div className="text-[10px] sm:text-xs text-slate-400">{step.description}</div>
                    </div>
                    {i < 4 && (
                      <ChevronRight className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-blue-500/50" size={24} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Credit Card vs Hawil */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-red-500/10 rounded-xl p-4 sm:p-6 border-2 border-red-500/50">
                <h4 className="text-red-400 font-bold text-sm sm:text-base mb-3 sm:mb-4 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                  Using Foreign Credit Card
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Foreign Transaction Fee</span>
                    <span className="text-red-400 font-bold">3-5%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Dynamic Currency Conversion</span>
                    <span className="text-red-400 font-bold">+2-7%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">ATM Withdrawal Fees</span>
                    <span className="text-red-400 font-bold">$5-10 + 3%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Merchant Rewards</span>
                    <span className="text-slate-500">None</span>
                  </div>
                  <div className="flex justify-between py-3 bg-red-500/20 rounded-lg px-3 mt-2">
                    <span className="text-white font-bold">Lost on $1,000 spend</span>
                    <span className="text-red-400 font-bold">$50-120</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-500/10 rounded-xl p-4 sm:p-6 border-2 border-green-500">
                <h4 className="text-green-400 font-bold text-sm sm:text-base mb-3 sm:mb-4 flex items-center gap-2">
                  <Coins className="w-4 h-4 sm:w-5 sm:h-5" />
                  Using Hawil + Nuqta Coins
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">FX Markup</span>
                    <span className="text-green-400 font-bold">0%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Conversion Fee</span>
                    <span className="text-green-400 font-bold">0.5% one-time</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Merchant Discounts</span>
                    <span className="text-[#c9a227] font-bold">5-30% off</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Cashback in Coins</span>
                    <span className="text-[#c9a227] font-bold">1-5%</span>
                  </div>
                  <div className="flex justify-between py-3 bg-green-500/20 rounded-lg px-3 mt-2">
                    <span className="text-white font-bold">Saved on $1,000 spend</span>
                    <span className="text-green-400 font-bold">$100-200</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tourist Benefits */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a227]" />
                Why Tourists Love Nuqta
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {touristStrategy.touristBenefits.map((benefit, i) => (
                  <div key={i} className="bg-gradient-to-b from-[#c9a227]/10 to-slate-900/50 rounded-xl p-4 sm:p-5 border border-[#c9a227]/30">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-[#c9a227] mb-2 sm:mb-3" />
                    <h4 className="text-white font-bold text-sm sm:text-base mb-2">{benefit.title}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tourist Campaigns */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-4 sm:p-6 border border-blue-500/30">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                Targeted Tourist Campaigns
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {touristStrategy.touristCampaigns.map((campaign, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                      <h4 className="text-white font-bold text-xs sm:text-sm">{campaign.segment}</h4>
                    </div>
                    <p className="text-slate-400 text-[10px] sm:text-xs mb-2 sm:mb-3">{campaign.offer}</p>
                    <div className="text-[10px] sm:text-xs text-slate-500">
                      Avg Spend: <span className="text-blue-400 font-bold">{campaign.spend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ecosystem Discovery */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-green-500/10 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Network className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a227]" />
                From Currency Exchange to Full Ecosystem
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-4 sm:mb-6">
                Once tourists convert currency via Hawil, they unlock the entire Nuqta ecosystem:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 text-center border border-[#c9a227]/30">
                  <Store className="w-6 h-6 sm:w-8 sm:h-8 text-[#c9a227] mx-auto mb-2" />
                  <div className="text-white font-bold text-xs sm:text-sm">500+ Merchants</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Exclusive deals</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 text-center border border-orange-500/30">
                  <Send className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400 mx-auto mb-2" />
                  <div className="text-white font-bold text-xs sm:text-sm">Wasil Delivery</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">60-min delivery</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 text-center border border-violet-500/30">
                  <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-violet-400 mx-auto mb-2" />
                  <div className="text-white font-bold text-xs sm:text-sm">Qist BNPL</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">For big purchases</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 text-center border border-green-500/30">
                  <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-white font-bold text-xs sm:text-sm">Earn Coins</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Rewards on everything</div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-lg text-white">
                  <span className="text-[#c9a227] font-bold">Best rate → Best deals → Best experience</span>
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  Every tourist who uses Hawil becomes a Nuqta user
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Ecosystem Tab */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Hero */}
            <div className="bg-gradient-to-r from-green-500/20 via-[#c9a227]/20 to-violet-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-green-500/50">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-900/50 rounded-full mb-4">
                  <Network className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  <span className="text-green-400 font-bold text-xs sm:text-sm">5th Product in the Ecosystem</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
                  Hawil Completes the <span className="text-green-400">Financial Circle</span>
                </h2>
                <p className="text-slate-300 max-w-3xl mx-auto text-lg">
                  From earning rewards to sending money home - Nuqta now covers the complete expat financial journey.
                </p>
              </div>

              {/* Five Products */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                {[
                  { name: 'Nuqta', arabic: 'نقطة', tagline: 'Earn', color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10', borderColor: 'border-[#c9a227]', icon: Crown },
                  { name: 'Qist', arabic: 'قسط', tagline: 'Pay', color: 'text-violet-400', bgColor: 'bg-violet-500/10', borderColor: 'border-violet-500', icon: ShoppingBag },
                  { name: 'Sakin', arabic: 'ساكن', tagline: 'Live', color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500', icon: Home },
                  { name: 'Wasil', arabic: 'واصل', tagline: 'Get', color: 'text-orange-400', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500', icon: Send },
                  { name: 'Hawil', arabic: 'حوّل', tagline: 'Send', color: 'text-green-400', bgColor: 'bg-green-500/10', borderColor: 'border-green-500', icon: Send },
                ].map((product, i) => (
                  <div key={i} className={`${product.bgColor} rounded-xl p-3 sm:p-4 border-2 ${product.borderColor} text-center`}>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl ${product.bgColor} flex items-center justify-center mx-auto mb-2 border ${product.borderColor}`}>
                      <product.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${product.color}`} />
                    </div>
                    <h3 className={`text-base sm:text-lg font-black ${product.color}`}>{product.name}</h3>
                    <span className="text-slate-400 text-[10px] sm:text-xs">{product.arabic}</span>
                    <p className="text-slate-300 text-xs sm:text-sm mt-1">{product.tagline}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration Points */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Link2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                Deep Ecosystem Integration
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {ecosystemIntegration.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 sm:p-5 border border-slate-700/50">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        item.product === 'Nuqta' ? 'bg-[#c9a227]/20' :
                        item.product === 'Qist' ? 'bg-violet-500/20' :
                        item.product === 'Sakin' ? 'bg-emerald-500/20' :
                        'bg-orange-500/20'
                      }`}>
                        <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
                      </div>
                      <h4 className={`font-bold text-sm sm:text-base ${item.color}`}>{item.product}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 mb-2">{item.integration}</p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-green-400">
                      <CheckCircle className="w-3 h-3 flex-shrink-0" />
                      {item.benefit}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Case: Complete Journey */}
            <div className="bg-green-500/10 rounded-xl p-4 sm:p-6 border-2 border-green-500">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                Complete Expat Journey: Raj from India
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                {[
                  { product: 'Nuqta', action: 'Gets Nuqta+ via employer', result: 'Saves on daily purchases' },
                  { product: 'Sakin', action: 'Finances apartment move-in', result: '68K over 12 months' },
                  { product: 'Qist', action: 'Buys furniture via BNPL', result: '0% fees for 3 months' },
                  { product: 'Wasil', action: 'Orders groceries weekly', result: 'Earns coins on delivery' },
                  { product: 'Hawil', action: 'Sends 5K/month to family in India', result: 'Google rate, earns coins' },
                ].map((step, i) => (
                  <div key={i} className={`rounded-lg p-4 border ${
                    step.product === 'Nuqta' ? 'bg-[#c9a227]/10 border-[#c9a227]/30' :
                    step.product === 'Qist' ? 'bg-violet-500/10 border-violet-500/30' :
                    step.product === 'Sakin' ? 'bg-emerald-500/10 border-emerald-500/30' :
                    step.product === 'Wasil' ? 'bg-orange-500/10 border-orange-500/30' :
                    'bg-green-500/10 border-green-500/30'
                  }`}>
                    <div className={`text-xs font-bold mb-2 ${
                      step.product === 'Nuqta' ? 'text-[#c9a227]' :
                      step.product === 'Qist' ? 'text-violet-400' :
                      step.product === 'Sakin' ? 'text-emerald-400' :
                      step.product === 'Wasil' ? 'text-orange-400' :
                      'text-green-400'
                    }`}>{step.product}</div>
                    <p className="text-xs text-white font-medium mb-1">{step.action}</p>
                    <p className="text-xs text-slate-400">{step.result}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-slate-300">
                  Ahmed saves <span className="text-green-400 font-bold">15,000+ AED/year</span> using the full Nuqta ecosystem
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Corridors Tab */}
        {activeTab === 'corridors' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                Top Remittance Corridors from UAE
              </h2>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400">Country</th>
                      <th className="text-right py-3 px-4 text-slate-400">Annual Volume</th>
                      <th className="text-right py-3 px-4 text-slate-400">Market Share</th>
                      <th className="text-right py-3 px-4 text-slate-400">Avg Transfer</th>
                      <th className="text-center py-3 px-4 text-slate-400">Hawil Fee</th>
                      <th className="text-center py-3 px-4 text-slate-400">Others Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {corridors.map((corridor, i) => (
                      <tr key={i} className="border-b border-slate-700/50 hover:bg-slate-800/50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{corridor.flag}</span>
                            <span className="text-white font-medium">{corridor.country}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-right text-white font-medium">{corridor.volume}</td>
                        <td className="py-3 px-4 text-right text-slate-300">{corridor.share}</td>
                        <td className="py-3 px-4 text-right text-slate-300">{corridor.avgTransfer} AED</td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-bold">{corridor.ourFee}</span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-bold">{corridor.competitorFee}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-4 sm:p-6 border border-green-500/30">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Launch Strategy</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4">
                  <div className="text-green-400 font-bold text-sm sm:text-base mb-2">Phase 1 (Launch)</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <span>🇮🇳</span> India
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <span>🇬🇧</span> UK / Europe
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-blue-400 font-bold mb-2">Phase 2 (3 months)</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <span>🇵🇭</span> Philippines
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <span>🇧🇩</span> Bangladesh
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <span>🇪🇬</span> Egypt
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-purple-400 font-bold mb-2">Phase 3 (6 months)</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <span>🇳🇵</span> Nepal
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <span>🇱🇰</span> Sri Lanka
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <span>🇮🇩</span> Indonesia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {pricingTiers.map((tier, i) => (
                <div key={i} className={`rounded-xl p-4 sm:p-6 border-2 ${tier.color} ${tier.bgColor} relative`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 sm:px-3 py-1 bg-[#c9a227] text-[#0a1628] text-[10px] sm:text-xs font-bold rounded-full whitespace-nowrap">
                      BEST VALUE
                    </div>
                  )}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 mt-1 sm:mt-0">{tier.tier}</h3>
                  <div className="text-2xl sm:text-3xl font-black text-green-400 mb-1">{tier.transferFee}</div>
                  <div className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4">transfer fee</div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400">Exchange Rate</span>
                      <span className="text-green-400 font-medium">{tier.exchangeRate}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400">Transfer Limit</span>
                      <span className="text-white font-medium">{tier.maxTransfer}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400">Speed</span>
                      <span className="text-white font-medium">{tier.speed}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400">Coin Reward</span>
                      <span className="text-[#c9a227] font-medium">{tier.coinReward}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Unit Economics Tab */}
        {activeTab === 'economics' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                Per Transfer Economics (Avg 2,500 AED)
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-green-500/10 rounded-xl p-3 sm:p-4 text-center border border-green-500/30">
                  <div className="text-xl sm:text-2xl font-bold text-green-400">{unitEconomics.transferFee} AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Transfer Fee (0.5%)</div>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-3 sm:p-4 text-center border border-blue-500/30">
                  <div className="text-xl sm:text-2xl font-bold text-blue-400">{unitEconomics.fxSpread} AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">FX Markup (0%!)</div>
                </div>
                <div className="bg-red-500/10 rounded-xl p-3 sm:p-4 text-center border border-red-500/30">
                  <div className="text-xl sm:text-2xl font-bold text-red-400">-{unitEconomics.partnerCost} AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Partner Cost</div>
                </div>
                <div className="bg-[#c9a227]/10 rounded-xl p-3 sm:p-4 text-center border border-[#c9a227]/30">
                  <div className="text-xl sm:text-2xl font-bold text-[#c9a227]">{unitEconomics.actualProfit} AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Net Profit</div>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                <h3 className="text-white font-bold mb-4">Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Average Transfer</span>
                    <span className="text-white font-bold">{unitEconomics.avgTransfer.toLocaleString()} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-green-400">+ Transfer Fee (0.5%)</span>
                    <span className="text-green-400 font-bold">+{unitEconomics.transferFee} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-red-400">- Payout Partner Cost</span>
                    <span className="text-red-400 font-bold">-{unitEconomics.partnerCost} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-red-400">- Operating Cost</span>
                    <span className="text-red-400 font-bold">-{unitEconomics.operatingCost} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-red-400">- Coin Reward Cost</span>
                    <span className="text-red-400 font-bold">-{unitEconomics.coinRewardCost} AED</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-green-500/10 rounded-lg px-3">
                    <span className="text-white font-bold">Net Profit per Transfer</span>
                    <span className="text-green-400 font-bold text-xl">{unitEconomics.actualProfit} AED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Financials Tab */}
        {activeTab === 'financials' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                3-Year Financial Projections
              </h2>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400">Metric</th>
                      {financialProjections.map((proj, i) => (
                        <th key={i} className="text-right py-3 px-4 text-white font-bold">{proj.year}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Volume (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-green-400 font-bold">{proj.volume}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Transactions</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{(proj.transactions/1000).toFixed(0)}K</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Revenue (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-blue-400 font-bold">{proj.revenue}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Net Profit (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-[#c9a227] font-bold">{proj.netProfit}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Active Users</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{(proj.users/1000).toFixed(0)}K</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-300">Countries</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{proj.countries}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <div className="space-y-4 sm:space-y-6">
            {roadmapPhases.map((phase, i) => (
              <div key={i} className={`rounded-xl p-4 sm:p-6 border-2 ${phase.color} ${phase.bgColor}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-[10px] sm:text-xs font-bold text-slate-400">{phase.phase}</span>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{phase.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
                      <span className="text-slate-400 text-xs sm:text-sm">{phase.timeline}</span>
                    </div>
                  </div>
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold w-fit ${
                    phase.status === 'planned' ? 'bg-blue-500/20 text-blue-400' :
                    phase.status === 'in_progress' ? 'bg-green-500/20 text-green-400' :
                    'bg-slate-500/20 text-slate-400'
                  }`}>
                    {phase.status === 'planned' ? 'Planned' : 'Pending'}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                  {phase.milestones.map((milestone, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500 flex-shrink-0" />
                      {milestone}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Risks Tab */}
        {activeTab === 'risks' && (
          <div className="space-y-4">
            {risks.map((risk, i) => (
              <div key={i} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden">
                <button
                  onClick={() => setExpandedRisk(expandedRisk === risk.risk ? null : risk.risk)}
                  className="w-full p-4 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      risk.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {risk.severity.toUpperCase()}
                    </span>
                    <span className="text-white font-bold">{risk.risk}</span>
                  </div>
                  {expandedRisk === risk.risk ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                {expandedRisk === risk.risk && (
                  <div className="px-4 pb-4">
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <div className="text-sm font-bold text-white mb-3">Mitigation Strategies:</div>
                      <div className="space-y-2">
                        {risk.mitigation.map((item, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                            <Shield className="w-4 h-4 text-green-400 flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Competition Tab */}
        {activeTab === 'competition' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                UAE Remittance Competitive Landscape
              </h2>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400">Provider</th>
                      <th className="text-center py-3 px-4 text-slate-400">Transfer Fee</th>
                      <th className="text-center py-3 px-4 text-slate-400">FX Markup</th>
                      <th className="text-center py-3 px-4 text-slate-400">Speed</th>
                      <th className="text-center py-3 px-4 text-slate-400">Rewards</th>
                      <th className="text-center py-3 px-4 text-slate-400">Ecosystem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((comp, i) => (
                      <tr key={i} className={`border-b border-slate-700/50 ${comp.name === 'Hawil' ? 'bg-green-500/10' : ''}`}>
                        <td className={`py-3 px-4 font-bold ${comp.name === 'Hawil' ? 'text-green-400' : 'text-white'}`}>{comp.name}</td>
                        <td className="py-3 px-4 text-center text-slate-300">{comp.fee}</td>
                        <td className="py-3 px-4 text-center">
                          {comp.fxMarkup.includes('0%') ? (
                            <span className="text-green-400 font-bold">{comp.fxMarkup}</span>
                          ) : (
                            <span className="text-red-400">{comp.fxMarkup}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center text-slate-300">{comp.speed}</td>
                        <td className="py-3 px-4 text-center">
                          {comp.rewards !== 'None' ? (
                            <span className="text-[#c9a227] font-bold">{comp.rewards}</span>
                          ) : (
                            <span className="text-slate-500">None</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {comp.ecosystem === 'Full Nuqta' ? (
                            <span className="text-green-400 font-bold">{comp.ecosystem}</span>
                          ) : (
                            <span className="text-slate-400">{comp.ecosystem}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Competitive Advantage */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-4 sm:p-6 border-2 border-green-500">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                Hawil Competitive Moat
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base mb-3">What Competitors Lack</h4>
                  <div className="space-y-2">
                    {['Hidden FX markups (2-5%)', 'No rewards or loyalty', 'No ecosystem integration', 'Slow settlement times'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base mb-3">Hawil Unique Value</h4>
                  <div className="space-y-2">
                    {['Google rate (0% markup)', 'Nuqta coins on every transfer', 'Full ecosystem (Qist, Sakin, Wasil)', 'Instant transfers 24/7'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════ PITCH DECK TAB ═══════════════════ */}
        {activeTab === 'deck' && (
          <div className="space-y-8">
            {/* Investment Thesis */}
            <div className="bg-gradient-to-r from-green-500/20 to-green-500/5 rounded-2xl p-6 border border-green-500/30">
              <h2 className="text-2xl font-bold text-white mb-2">Investment Thesis</h2>
              <p className="text-slate-300 leading-relaxed">
                UAE processes $50B in annual remittances — yet incumbents charge 3-5% FX markups. Hawil offers the Google mid-market
                rate with 0% markup and 0.5% transfer fee, saving expats thousands per year. With 9.5M expats in the UAE alone and
                deep RTMN ecosystem integration (Safar travel, Qist BNPL, NuqtaCoins), Hawil captures the entire expat financial lifecycle.
              </p>
            </div>

            {/* Market Opportunity - TAM/SAM/SOM */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Market Opportunity</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-800/30 rounded-xl p-5 border border-green-500/30 text-center">
                  <div className="text-3xl font-bold text-green-400">$50B</div>
                  <div className="text-sm text-slate-400 mt-1">TAM — UAE Remittance</div>
                  <div className="text-xs text-slate-500 mt-1">Annual outbound volume</div>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-5 border border-emerald-500/30 text-center">
                  <div className="text-3xl font-bold text-emerald-400">$15B</div>
                  <div className="text-sm text-slate-400 mt-1">SAM — India Corridor</div>
                  <div className="text-xs text-slate-500 mt-1">Largest single corridor (30%)</div>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-5 border border-blue-500/30 text-center">
                  <div className="text-3xl font-bold text-blue-400">$2B</div>
                  <div className="text-sm text-slate-400 mt-1">SOM — Year 3 Volume</div>
                  <div className="text-xs text-slate-500 mt-1">250K users, 25 countries</div>
                </div>
              </div>
            </div>

            {/* Key Differentiators */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Key Differentiators</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: 'Google Rate (0% Markup)', desc: 'Mid-market exchange rate with zero FX markup. Competitors charge 2-5% hidden markup on every transfer.' },
                  { title: '0.5% Transfer Fee', desc: 'Flat transparent fee — 6-10x cheaper than traditional exchange houses and banks.' },
                  { title: 'Hawil Card', desc: 'Physical/virtual card for spending abroad at Google rate. Multi-currency wallet with instant conversion.' },
                  { title: 'NuqtaCoin Rewards', desc: 'Earn Nuqta coins on every transfer. First remittance product with loyalty rewards integration.' },
                  { title: 'Instant Transfers 24/7', desc: 'No banking hours. Instant settlement to 25+ countries with real-time tracking.' },
                ].map((d, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
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
                    <th className="text-left py-2 pr-4">Year</th><th className="text-right py-2 px-4">Volume ($M)</th><th className="text-right py-2 px-4">Users</th><th className="text-right py-2 px-4">Revenue ($M)</th><th className="text-right py-2 px-4">Net Profit ($M)</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { year: 'Year 1', volume: '100', users: '15K', revenue: '0.5', profit: '0.12' },
                      { year: 'Year 2', volume: '500', users: '75K', revenue: '2.5', profit: '0.8' },
                      { year: 'Year 3', volume: '2,000', users: '250K', revenue: '10', profit: '4' },
                    ].map((r, i) => (
                      <tr key={i} className="border-b border-slate-700/50 text-slate-300">
                        <td className="py-2 pr-4 text-white font-medium">{r.year}</td><td className="text-right py-2 px-4">{r.volume}</td><td className="text-right py-2 px-4">{r.users}</td><td className="text-right py-2 px-4 text-emerald-400">{r.revenue}</td><td className="text-right py-2 px-4 text-green-400">{r.profit}</td>
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
                  { name: 'Wise', val: '$8B', region: 'Global' },
                  { name: 'Remitly', val: '$5B', region: 'USA / Global' },
                  { name: 'Al Ansari', val: '$3B+', region: 'UAE (incumbent)' },
                  { name: 'Revolut', val: '$33B', region: 'UK / Global' },
                ].map((c, i) => (
                  <div key={i} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 text-center">
                    <div className="text-white font-bold">{c.name}</div>
                    <div className="text-2xl font-black text-green-400 mt-1">{c.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{c.region}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unicorn Path */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><ArrowUpRight className="w-5 h-5 text-green-400" /> Unicorn Path</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { stage: 'Seed', val: '$10M', timeline: 'Q4 2026', metric: '15K users, 8 corridors' },
                  { stage: 'Series A', val: '$40M', timeline: 'Q2 2027', metric: '75K users, Hawil Card live' },
                  { stage: 'Series B', val: '$150M', timeline: 'Q4 2028', metric: '250K users, 25 countries' },
                  { stage: 'Unicorn', val: '$1B+', timeline: '2030', metric: '1M+ users, $10B+ volume' },
                ].map((s, i) => (
                  <div key={i} className={`rounded-xl p-4 text-center border ${i === 3 ? 'bg-green-500/10 border-green-500/40' : 'bg-slate-900/50 border-slate-700/50'}`}>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">{s.stage}</div>
                    <div className={`text-2xl font-black mt-1 ${i === 3 ? 'text-green-400' : 'text-white'}`}>{s.val}</div>
                    <div className="text-xs text-slate-400 mt-1">{s.timeline}</div>
                    <div className="text-xs text-emerald-400 mt-1">{s.metric}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RTMN Multiplier */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-transparent rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-[#c9a227] mb-3">RTMN Ecosystem Multiplier</h3>
              <p className="text-slate-300 text-sm mb-4">Every remittance user becomes a travel booker (Safar), a BNPL customer (Qist), and a rewards member (Nuqta+). The 9.5M expat pipeline is the RTMN ecosystem&apos;s most powerful acquisition channel.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { app: 'Safar Travel', metric: 'Expat flight bookings' },
                  { app: 'Hawil Card', metric: '0% FX abroad' },
                  { app: 'Qist BNPL', metric: 'Split installments' },
                  { app: 'Nuqta Coins', metric: 'Rewards on transfers' },
                  { app: 'Wasil Delivery', metric: 'Cross-border gifts' },
                  { app: 'Nuqta+', metric: 'Premium conversion' },
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

      {/* Navigation Footer */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Building2 className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Globe className="w-5 h-5" /> RTMN Ecosystem
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
