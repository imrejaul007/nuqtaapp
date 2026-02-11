'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Car, DollarSign, Globe, Shield, TrendingUp, Users, Target,
  Rocket, CheckCircle, AlertTriangle, Clock, Building, ArrowRight,
  Star, Zap, BarChart3, Award, Handshake, Store, CreditCard,
  FileText, Calculator, Gift, Crown, Wallet, ChevronRight,
  ChevronDown, ChevronUp, Building2, ShieldCheck, HeartHandshake,
  Coins, Network, MapPin, Smartphone, Banknote, Phone,
  BadgePercent, CircleDollarSign, PieChart, LineChart, ArrowUpRight,
  Timer, UserCheck, Lock, Eye, Search, Plane, Home, ShoppingBag,
  Package, Bike, Bus, Train, Navigation, Fuel, Wrench, Key,
  Calendar, RefreshCw, Layers, Sparkles, Send, Map, Activity,
  Gauge, ThermometerSun, Radio, Settings, Play, Hash, Percent
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── Hero Key Stats ─────────────────────────────────────────────
const heroStats = [
  { label: 'Code Reuse from Wasil', value: '70%', suffix: 'shared', color: 'text-orange-400' },
  { label: 'Shared Fleet with Wasil', value: 'Yes', suffix: 'dual-use', color: 'text-blue-400' },
  { label: 'Avg ETA Target', value: '5', suffix: 'min', color: 'text-green-400' },
  { label: 'Dynamic Pricing', value: '1.2-3x', suffix: 'surge', color: 'text-purple-400' },
  { label: 'UAE Ride-hail Market', value: '$2B+', suffix: 'annually', color: 'text-emerald-400' },
  { label: 'Daily Rides (Dubai)', value: '500K', suffix: 'rides', color: 'text-[#c9a227]' },
];

// ─── Ride Types ─────────────────────────────────────────────────
const rideTypes = [
  {
    name: 'Rakab Go',
    tier: 'Economy',
    icon: Car,
    description: 'Affordable everyday rides with Nuqta rewards',
    pricing: 'Base 5 AED + 1.8/km',
    eta: '3-5 min',
    vehicles: 'Toyota Yaris, Nissan Sunny, Kia Rio',
    passengers: '1-4',
    features: ['Nuqta coins on every ride', 'Pay with NuqtaPay', 'AC guaranteed'],
    color: 'from-green-500 to-emerald-600',
  },
  {
    name: 'Rakab Plus',
    tier: 'Comfort',
    icon: Star,
    description: 'Newer, spacious cars with extra comfort',
    pricing: 'Base 8 AED + 2.5/km',
    eta: '4-7 min',
    vehicles: 'Toyota Camry, Honda Accord, Hyundai Sonata',
    passengers: '1-4',
    features: ['Water & charger provided', 'Quiet ride option', 'Premium drivers only'],
    color: 'from-blue-500 to-cyan-600',
  },
  {
    name: 'Rakab Black',
    tier: 'Premium',
    icon: Crown,
    description: 'Luxury vehicles for business & special occasions',
    pricing: 'Base 15 AED + 4.0/km',
    eta: '5-10 min',
    vehicles: 'Mercedes E-Class, BMW 5-Series, Lexus ES',
    passengers: '1-4',
    features: ['Professional chauffeurs', 'Complimentary water & Wi-Fi', 'Meet & greet option'],
    color: 'from-purple-500 to-violet-600',
  },
  {
    name: 'Rakab XL',
    tier: 'XL (6+)',
    icon: Users,
    description: '6-seater SUVs for groups and families',
    pricing: 'Base 12 AED + 3.0/km',
    eta: '5-12 min',
    vehicles: 'Toyota Fortuner, Nissan Pathfinder, Chevrolet Tahoe',
    passengers: '1-6',
    features: ['Extra luggage space', 'Family-friendly', 'Child seat available on request'],
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Rakab Business',
    tier: 'Business',
    icon: Building2,
    description: 'Corporate accounts with monthly billing',
    pricing: 'Volume-based discounts',
    eta: '3-5 min',
    vehicles: 'Mixed fleet - Economy to Premium',
    passengers: '1-4',
    features: ['Centralized billing', 'Expense reports auto-generated', 'Employee ride limits'],
    color: 'from-slate-500 to-slate-700',
  },
  {
    name: 'Rakab Airport',
    tier: 'Airport',
    icon: Plane,
    description: 'Fixed-price airport transfers with meet & greet',
    pricing: 'Fixed 50-120 AED',
    eta: 'Scheduled',
    vehicles: 'All tiers available',
    passengers: '1-6',
    features: ['Fixed price - no surge', 'Flight tracking', 'Free 30-min wait time'],
    color: 'from-sky-500 to-blue-600',
  },
];

// ─── Driver App (Reuses Wasil Rider App) ────────────────────────
const driverAppFeatures = [
  { feature: 'Go-Online Toggle', description: 'One tap to start accepting rides. Same UX as Wasil delivery toggle.', icon: Play, reuse: true },
  { feature: 'Smart Navigation', description: 'Turn-by-turn with real-time traffic. Shared navigation module with Wasil.', icon: Navigation, reuse: true },
  { feature: 'Earnings Dashboard', description: 'Real-time earnings tracker, daily/weekly/monthly breakdown, payout history.', icon: BarChart3, reuse: true },
  { feature: 'Rating System', description: '5-star passenger rating with feedback. Same rating engine as Wasil.', icon: Star, reuse: true },
  { feature: 'Heat Map', description: 'See real-time demand zones. Drive to hot areas for more rides.', icon: ThermometerSun, reuse: false },
  { feature: 'Surge Notifications', description: 'Get alerts when surge pricing activates in your area.', icon: Zap, reuse: false },
  { feature: 'Multi-Mode Toggle', description: 'Switch between Rakab rides and Wasil deliveries instantly.', icon: RefreshCw, reuse: true },
  { feature: 'Instant Payout', description: 'Cash out earnings anytime to Nuqta Wallet. Shared with Wasil.', icon: Wallet, reuse: true },
];

// ─── Matching Algorithm ─────────────────────────────────────────
const matchingAlgorithmSteps = [
  { step: 'Demand Detection', description: 'Real-time monitoring of ride requests across zones. AI predicts demand spikes 15 min ahead.', icon: Activity },
  { step: 'Nearest Driver Match', description: 'GPS-based matching finds closest available driver. Factors: distance, traffic, ETA accuracy.', icon: MapPin },
  { step: 'Surge Pricing Engine', description: 'Dynamic multiplier (1.2x-3.0x) based on demand/supply ratio. Transparent to riders before confirmation.', icon: TrendingUp },
  { step: 'Demand Heat Maps', description: 'Real-time visualization of high-demand areas. Drivers guided to underserved zones for better earnings.', icon: Map },
  { step: 'Multi-Ride Batching', description: 'During peak hours, batch similar-route rides. Riders save 20-30%, drivers earn more per hour.', icon: Layers },
  { step: 'ETA Optimization', description: 'ML model predicts arrival within 30-sec accuracy. Considers traffic, weather, events, construction.', icon: Timer },
];

// ─── How It Works ───────────────────────────────────────────────
const howItWorks = [
  { step: 1, title: 'Request Ride', description: 'Open app, enter destination, choose ride type. See price upfront.', icon: Smartphone, color: 'bg-green-500' },
  { step: 2, title: 'Match Driver', description: 'Algorithm finds nearest driver in seconds. See driver info and ETA.', icon: UserCheck, color: 'bg-blue-500' },
  { step: 3, title: 'Track Real-Time', description: 'Watch your driver approach on live map. Get notified on arrival.', icon: Navigation, color: 'bg-purple-500' },
  { step: 4, title: 'Arrive Safely', description: 'Enjoy your ride with real-time trip tracking and safety features.', icon: Shield, color: 'bg-cyan-500' },
  { step: 5, title: 'Pay with NuqtaPay', description: 'Auto-charge via NuqtaPay, Hawil Card, or cash. No fumbling.', icon: CreditCard, color: 'bg-orange-500' },
  { step: 6, title: 'Rate & Earn Coins', description: 'Rate your driver, earn 5% Nuqta coins. Use coins at 500+ merchants.', icon: Coins, color: 'bg-[#c9a227]' },
];

// ─── Pricing Structure ──────────────────────────────────────────
const pricingStructure = {
  baseFare: 5,
  perKm: 1.8,
  perMin: 0.5,
  surgeRange: '1.2x - 3.0x',
  airportFixed: '50 - 120 AED',
  minimumFare: 10,
  cancellationFee: 5,
  waitTimePerMin: 0.5,
  tiers: [
    { tier: 'Rakab Go', multiplier: '1.0x', base: 5, perKm: 1.8, perMin: 0.5 },
    { tier: 'Rakab Plus', multiplier: '1.4x', base: 8, perKm: 2.5, perMin: 0.7 },
    { tier: 'Rakab Black', multiplier: '2.5x', base: 15, perKm: 4.0, perMin: 1.2 },
    { tier: 'Rakab XL', multiplier: '1.8x', base: 12, perKm: 3.0, perMin: 0.9 },
    { tier: 'Rakab Airport', multiplier: 'Fixed', base: 50, perKm: 0, perMin: 0 },
  ],
};

// ─── Unit Economics ─────────────────────────────────────────────
const unitEconomics = {
  avgTrip: 35,
  platformCommission: '20-25%',
  commissionAED: '7.00 - 8.75',
  driverPayout: '75-80%',
  driverAED: '26.25 - 28.00',
  netMargin: '7.00 - 8.75',
  netMarginPercent: '20-25%',
  ridesPerUser: 8,
  monthlyRevenuePerUser: 56,
  ltv12: 672,
  cac: 20,
  ltvCacRatio: '33.6x',
  paybackDays: 11,
};

// ─── Revenue Model ──────────────────────────────────────────────
const revenueStreams = [
  { source: 'Trip Commissions', description: 'Platform takes 20-25% of every trip fare', value: '20-25%', volume: 'Primary', margin: 'High', icon: DollarSign },
  { source: 'Surge Pricing Premium', description: 'Additional revenue during high-demand periods', value: '1.2-3.0x', volume: 'Variable', margin: 'Very High', icon: TrendingUp },
  { source: 'Rakab Business Subs', description: 'Monthly corporate account subscriptions', value: '999-4999 AED/mo', volume: 'Growing', margin: 'High', icon: Building2 },
  { source: 'In-Ride Advertising', description: 'Tablet ads in premium vehicles, app ads during rides', value: '500-2000/mo', volume: 'Secondary', margin: 'Very High', icon: Eye },
  { source: 'Wait Time Charges', description: '0.5 AED/min after 3-min free wait', value: '0.5 AED/min', volume: 'Supplementary', margin: 'High', icon: Clock },
  { source: 'Airport Transfer Premium', description: 'Fixed-price airport rides at premium margin', value: '50-120 AED', volume: 'Consistent', margin: 'High', icon: Plane },
];

// ─── Market Opportunity ─────────────────────────────────────────
const marketOpportunity = {
  totalMarket: '$2B+',
  growth: '15% YoY',
  dailyRidesDubai: '500K',
  keyDrivers: [
    'UAE population growing 2-3% annually with high expat influx',
    'Tourism target: 25M+ visitors by 2025 (Dubai alone)',
    'Low car ownership among expats drives ride-hailing demand',
    'Government push for smart mobility and reduced traffic congestion',
    'Post-COVID preference for private transport over public transit',
  ],
  segments: [
    { segment: 'Daily Commuters', share: '45%', avgTrips: '10-12/week', value: 'High LTV' },
    { segment: 'Tourists', share: '25%', avgTrips: '3-5/visit', value: 'High AOV' },
    { segment: 'Business Travelers', share: '15%', avgTrips: '6-8/week', value: 'Premium' },
    { segment: 'Weekend/Events', share: '15%', avgTrips: '2-4/week', value: 'Surge Revenue' },
  ],
};

// ─── Competitor Analysis ────────────────────────────────────────
const competitors = [
  {
    name: 'Uber',
    status: 'Dominant',
    marketShare: '~45%',
    strengths: ['Global brand', 'Deep pockets', 'Uber Eats cross-sell', 'Tech leadership'],
    weaknesses: ['No loyalty ecosystem', 'High FX fees for tourists', 'Lower driver commission'],
    commission: '25%',
    driverPay: '75%',
    color: 'text-slate-300',
  },
  {
    name: 'Careem',
    status: 'Dominant (Uber-owned)',
    marketShare: '~40%',
    strengths: ['Regional brand', 'Super-app vision', 'Careem Pay', 'Local knowledge'],
    weaknesses: ['Limited ecosystem', 'Uber merger uncertainty', 'Closed-loop rewards'],
    commission: '20%',
    driverPay: '80%',
    color: 'text-green-400',
  },
  {
    name: "S'hail",
    status: 'Government App',
    marketShare: '~5%',
    strengths: ['RTA backing', 'Metro integration', 'Regulatory advantage'],
    weaknesses: ['Poor UX', 'Limited features', 'Not a true ride-hail'],
    commission: 'N/A',
    driverPay: 'N/A',
    color: 'text-blue-400',
  },
  {
    name: 'Dubai Taxi',
    status: 'Legacy',
    marketShare: '~10%',
    strengths: ['Airport monopoly areas', 'Brand recognition', 'Regulated fares'],
    weaknesses: ['No app innovation', 'Fixed pricing', 'No rewards', 'Declining share'],
    commission: 'N/A',
    driverPay: 'Salary',
    color: 'text-yellow-400',
  },
];

const rakabAdvantage = [
  'Ecosystem integration: Nuqta coins, NuqtaPay, Qist BNPL, Hawil Card',
  'Shared fleet with Wasil = higher driver utilization = lower cost per trip',
  '70% code reuse from Wasil = faster development, lower R&D cost',
  'Tourist-first: Google rate payments via Hawil, multi-language, rate lock',
  'Higher driver commission (75-80%) attracts and retains best drivers',
  'Corporate accounts (Rakab Business) with expense management',
];

// ─── RTA License Reality ────────────────────────────────────────
const rtaLicenseInfo = {
  headline: 'RTA E-Hail License: The Hardest Part',
  description: 'Only ~5 E-Hail licenses have EVER been issued in Dubai. This is the single biggest barrier to entry.',
  facts: [
    'Dubai RTA controls all ride-hailing licensing',
    'Only ~5 E-Hail permits exist (Uber, Careem, S\'hail, Dubai Taxi Corp, and 1-2 others)',
    'New license applications have been essentially frozen since 2019',
    'Minimum capital requirements: AED 5M+ for E-Hail license',
    'Must demonstrate technology readiness, fleet capacity, and insurance coverage',
    'Regulatory review can take 12-24 months even if accepted',
  ],
  strategies: [
    { strategy: 'Partnership with Existing License Holder', description: 'Partner with a current E-Hail license holder as a technology platform. They provide regulatory cover, we provide tech + demand.', probability: 'Highest', timeline: '3-6 months' },
    { strategy: 'Dubai Taxi Corp White Label', description: 'Offer Rakab as a white-label technology layer for DTC fleet. Access their 5,000+ vehicles.', probability: 'High', timeline: '6-9 months' },
    { strategy: 'New License Application', description: 'Apply directly to RTA for new E-Hail license. Leverage Nuqta ecosystem and tourist angle.', probability: 'Low', timeline: '12-24 months' },
    { strategy: 'Start in Other Emirates', description: 'Launch in Sharjah, Ajman, RAK first (easier licensing). Use traction to strengthen Dubai application.', probability: 'Medium', timeline: '6-12 months' },
  ],
};

// ─── Shared Fleet Model ─────────────────────────────────────────
const sharedFleetModel = {
  headline: 'Shared Fleet: Rakab + Wasil',
  description: 'Drivers switch between ride-hailing and deliveries based on real-time demand. Higher utilization = higher earnings = lower cost.',
  benefits: [
    { metric: 'Driver Utilization', before: '55-65%', after: '80-90%', improvement: '+25-35%' },
    { metric: 'Avg Hourly Earnings', before: '45-55 AED', after: '65-85 AED', improvement: '+40-50%' },
    { metric: 'Cost Per Trip', before: '12-15 AED', after: '8-11 AED', improvement: '-25-30%' },
    { metric: 'Driver Retention', before: '40-50%', after: '70-80%', improvement: '+30%' },
  ],
  howItWorks: [
    'Driver opens single Nuqta Driver App (shared with Wasil)',
    'AI monitors demand for both rides and deliveries in real-time',
    'During low ride-demand hours, driver gets Wasil delivery requests',
    'During rush hours, delivery drivers can switch to Rakab rides',
    'Earnings from both services accumulate in single Nuqta Wallet',
    'Single insurance policy covers both ride-hailing and delivery',
  ],
};

// ─── Roadmap ────────────────────────────────────────────────────
const roadmap = [
  {
    phase: 'Phase 1',
    title: 'Core Rides + Matching',
    timeline: 'Q2 2027',
    milestones: [
      'RTA partnership/license secured',
      'Rakab Go (Economy) launch in Dubai',
      'Core matching algorithm live',
      'NuqtaPay integration',
      '200 drivers onboarded',
      'Airport fixed-price transfers',
    ],
    color: 'border-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    phase: 'Phase 2',
    title: 'Business + Airport',
    timeline: 'Q4 2027',
    milestones: [
      'Rakab Business corporate accounts',
      'Airport meet & greet premium',
      'Rakab Plus (Comfort) tier',
      'Surge pricing engine v2',
      'Multi-ride batching',
      '800 drivers across UAE',
    ],
    color: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    phase: 'Phase 3',
    title: 'Premium + XL',
    timeline: 'Q2 2028',
    milestones: [
      'Rakab Black (Premium) launch',
      'Rakab XL (6+ passengers)',
      'Full Abu Dhabi & Sharjah coverage',
      'Wasil shared fleet integration live',
      'Corporate expense management',
      '2,500 drivers',
    ],
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    phase: 'Phase 4',
    title: 'Autonomous Prep',
    timeline: '2029',
    milestones: [
      'Autonomous vehicle testing partnerships',
      'EV fleet rollout (25% of fleet)',
      'GCC expansion: Saudi, Qatar',
      'Metro/transit integration',
      'Rakab Rent (hourly car rental)',
      '5,000+ drivers across GCC',
    ],
    color: 'border-amber-500',
    bgColor: 'bg-amber-500/10',
  },
];

// ─── Risk Analysis ──────────────────────────────────────────────
const risks = [
  {
    risk: 'RTA License (Extremely Hard)',
    severity: 'critical',
    impact: 'Cannot operate without E-Hail license in Dubai',
    mitigation: [
      'Partnership with existing license holder (primary strategy)',
      'White-label for Dubai Taxi Corp fleet',
      'Start in other emirates with easier licensing',
      'Engage RTA proactively with ecosystem pitch',
    ],
  },
  {
    risk: 'Uber/Careem Dominance',
    severity: 'high',
    impact: '85%+ combined market share, massive budgets',
    mitigation: [
      'Differentiate on ecosystem (coins, BNPL, shared fleet)',
      'Target tourist niche first (Google rate payments)',
      'Higher driver commission to attract supply',
      'Corporate accounts for B2B revenue',
    ],
  },
  {
    risk: 'Driver Acquisition',
    severity: 'high',
    impact: 'Need 200+ drivers at launch for acceptable ETAs',
    mitigation: [
      'Shared fleet with Wasil - existing drivers switch over',
      '75-80% commission vs 75% at Uber',
      'Guaranteed minimum earnings for first 3 months',
      'Referral bonuses: 500 AED per referred driver',
    ],
  },
  {
    risk: 'Insurance Costs',
    severity: 'medium',
    impact: 'Ride-hailing insurance premiums are 3-5x standard',
    mitigation: [
      'Fleet insurance negotiation at scale',
      'Shared policy covering both Rakab and Wasil',
      'Safety features reduce claims (dashcams, speed monitoring)',
      'Partner with UAE insurance providers for custom policies',
    ],
  },
  {
    risk: 'Unit Economics at Scale',
    severity: 'medium',
    impact: 'Ride-hailing is margin-thin; need volume',
    mitigation: [
      'Shared fleet model reduces driver idle time by 25-35%',
      'Cross-sell ecosystem products (coins, Qist, Hawil)',
      'Rakab Business for predictable B2B revenue',
      'In-ride advertising for premium vehicle tiers',
    ],
  },
];

// ─── Ecosystem Integration ──────────────────────────────────────
const ecosystemIntegration = [
  { product: 'Safar', integration: 'Airport transfers for travel bookings', benefit: 'Seamless arrival-to-hotel rides for Safar travelers', icon: Plane, color: 'text-sky-400' },
  { product: 'Eventora', integration: 'Event transport coordination', benefit: 'Bulk ride booking for event attendees', icon: Calendar, color: 'text-pink-400' },
  { product: 'Nuqta Coins', integration: '5% coins earned on every ride', benefit: 'Use coins at 500+ merchants or redeem for rides', icon: Coins, color: 'text-[#c9a227]' },
  { product: 'Qist BNPL', integration: 'Monthly ride passes on installments', benefit: 'Finance 500+ AED ride packages at 0% interest', icon: Wallet, color: 'text-violet-400' },
  { product: 'Wasil Fleet', integration: 'Shared drivers between rides & delivery', benefit: 'Higher utilization, lower cost per trip', icon: Package, color: 'text-orange-400' },
  { product: 'Hawil Card', integration: 'Pay at Google rate - no FX fees', benefit: 'Tourists save 3-5% per ride vs credit card', icon: CreditCard, color: 'text-blue-400' },
  { product: 'Nuqta+', integration: 'Priority booking & 10% extra coins', benefit: 'Members get premium perks + surge protection', icon: Crown, color: 'text-[#c9a227]' },
  { product: 'Sakin', integration: 'Free airport transfer for move-in', benefit: 'Sakin tenants get welcome ride on lease signing', icon: Home, color: 'text-emerald-400' },
];

// ─── Rakab Business ─────────────────────────────────────────────
const rakabBusiness = {
  headline: 'Rakab Business: Corporate Mobility',
  plans: [
    { name: 'Starter', price: 999, rides: 100, features: ['Up to 10 employees', 'Monthly invoice', 'Basic reporting', 'Email support'], color: 'border-green-500', bgColor: 'bg-green-500/10' },
    { name: 'Growth', price: 2499, rides: 300, features: ['Up to 50 employees', 'Ride policy controls', 'Expense integration', 'Dedicated manager'], color: 'border-blue-500', bgColor: 'bg-blue-500/10' },
    { name: 'Enterprise', price: 4999, rides: 1000, features: ['Unlimited employees', 'Custom ride policies', 'API integration', 'Priority support 24/7'], color: 'border-purple-500', bgColor: 'bg-purple-500/10' },
  ],
  features: [
    'Centralized billing - one invoice per month',
    'Employee ride limits by role/department',
    'Auto-generated expense reports (PDF/CSV)',
    'Ride policy controls (max fare, allowed hours, approved zones)',
    'Real-time ride tracking for HR/admin',
    'Integration with SAP, Oracle, and QuickBooks',
    'Dedicated account manager for Enterprise',
    'Volume discounts up to 30%',
  ],
};

// ─── Tourist Features ───────────────────────────────────────────
const touristFeatures = [
  { feature: 'Hawil Card Payment', description: 'Pay at Google rate - no 3-5% FX markup', savings: 'Save 5-10 AED per ride vs foreign credit card', icon: CreditCard },
  { feature: 'Rate Lock', description: 'Lock ride price in home currency before confirming', savings: 'Know exact cost in USD/EUR/GBP upfront', icon: Lock },
  { feature: 'Airport Packages', description: 'Fixed-price airport transfers with meet & greet', savings: 'DXB to Downtown: 85 AED fixed (vs 100-150 metered)', icon: Plane },
  { feature: 'Tourist Mode', description: 'Drivers trained for tourists - landmarks, tips, photo stops', savings: 'Free city orientation included', icon: MapPin },
  { feature: 'Multi-Language', description: 'App and driver support in 15+ languages', savings: 'Arabic, English, Hindi, Urdu, Chinese, Russian + more', icon: Globe },
  { feature: 'Earn Nuqta Coins', description: '5% back in Nuqta coins on every ride', savings: 'Spend coins at 500+ shops, restaurants, attractions', icon: Coins },
];

// ─── Airport Packages ───────────────────────────────────────────
const airportPackages = [
  { from: 'DXB T1', to: 'Downtown Dubai', price: 85, savings: 35, time: '25 min' },
  { from: 'DXB T3', to: 'Dubai Marina', price: 95, savings: 40, time: '30 min' },
  { from: 'DXB T1', to: 'Palm Jumeirah', price: 110, savings: 50, time: '35 min' },
  { from: 'AUH Airport', to: 'Abu Dhabi Downtown', price: 65, savings: 25, time: '20 min' },
  { from: 'DXB T1', to: 'Abu Dhabi', price: 250, savings: 100, time: '75 min' },
  { from: 'SHJ Airport', to: 'Sharjah City', price: 45, savings: 20, time: '15 min' },
];

// ─── Pricing Comparison ─────────────────────────────────────────
const pricingComparison = [
  { route: 'DXB Airport - Downtown', rakab: 75, uber: 95, careem: 90, taxi: 120 },
  { route: 'Dubai Mall - Marina Walk', rakab: 35, uber: 45, careem: 42, taxi: 55 },
  { route: 'JBR - Burj Khalifa', rakab: 25, uber: 32, careem: 30, taxi: 40 },
  { route: 'Business Bay - Palm Jumeirah', rakab: 45, uber: 58, careem: 55, taxi: 70 },
];

// ─── Subscription Plans ─────────────────────────────────────────
const subscriptionPlans = [
  {
    name: 'Rakab Pass',
    price: 99,
    period: 'month',
    features: ['10% off all rides', 'No surge pricing', 'Priority pickup', 'Double coins (10%)', 'Free cancellations (3/mo)'],
    savings: 'Save 200+ AED/month on 20 rides',
    color: 'border-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    name: 'Nuqta+ Rakab',
    price: 0,
    period: 'included',
    features: ['All Rakab Pass benefits', 'Included with Nuqta+ (99 AED)', 'Plus Wasil+, Qist 0%, Sakin priority', 'Triple coins (15%)', 'VIP driver network'],
    savings: 'Best value - bundled with full ecosystem',
    color: 'border-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    recommended: true,
  },
  {
    name: 'Corporate',
    price: 'Custom',
    period: 'volume',
    features: ['Bulk ride credits', 'Employee ride limits', 'Centralized billing', 'Auto expense reports', 'Dedicated support'],
    savings: 'Up to 30% off for 100+ rides/month',
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
  },
];

// ─── Driver Program ─────────────────────────────────────────────
const driverProgram = {
  title: 'Drive with Rakab',
  tagline: 'Earn more, keep more - drive rides AND deliver',
  benefits: [
    { benefit: '75-80% Commission', description: 'Keep the lion\'s share of every fare' },
    { benefit: 'Dual Income', description: 'Switch between Rakab rides and Wasil deliveries' },
    { benefit: 'Instant Payouts', description: 'Cash out earnings anytime to Nuqta Wallet' },
    { benefit: 'Fuel Rewards', description: 'Nuqta coins for fuel at partner stations' },
    { benefit: 'Insurance Included', description: 'Comprehensive coverage for rides and deliveries' },
    { benefit: 'Flexible Hours', description: 'Drive when you want, as much as you want' },
  ],
  requirements: [
    'UAE driving license (minimum 1 year)',
    'Car less than 5 years old',
    'Clean driving record',
    'RTA permit (we help obtain)',
    'Background check passed',
    'Smartphone with data plan',
  ],
  earnings: {
    avgHourly: '65-85 AED',
    avgDaily: '550-850 AED',
    topDrivers: '18,000+ AED/month',
  },
};

// ─── Financial Projections ──────────────────────────────────────
const financialProjections = [
  { year: 'Year 1', rides: 100000, revenue: 0.7, drivers: 200, users: 15000, cities: 3, commission: 0.175 },
  { year: 'Year 2', rides: 500000, revenue: 3.5, drivers: 800, users: 60000, cities: 5, commission: 0.875 },
  { year: 'Year 3', rides: 2000000, revenue: 14, drivers: 2500, users: 200000, cities: 7, commission: 3.5 },
];

// ─── GCC Expansion ──────────────────────────────────────────────
const gccExpansion = [
  { country: 'UAE', status: 'Launch', cities: 'Dubai, Abu Dhabi, Sharjah', timeline: '2027' },
  { country: 'Saudi Arabia', status: 'Phase 2', cities: 'Riyadh, Jeddah, Dammam', timeline: '2028' },
  { country: 'Qatar', status: 'Phase 2', cities: 'Doha', timeline: '2028' },
  { country: 'Kuwait', status: 'Phase 3', cities: 'Kuwait City', timeline: '2029' },
  { country: 'Bahrain', status: 'Phase 3', cities: 'Manama', timeline: '2029' },
  { country: 'Oman', status: 'Phase 3', cities: 'Muscat', timeline: '2029' },
];

// ─── COMPONENT ──────────────────────────────────────────────────
export default function RakabPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);
  const [expandedCompetitor, setExpandedCompetitor] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Car },
    { id: 'rides', label: 'Ride Types', icon: Layers },
    { id: 'howItWorks', label: 'How It Works', icon: Play },
    { id: 'driverApp', label: 'Driver App', icon: Smartphone },
    { id: 'matching', label: 'Matching AI', icon: Activity },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'economics', label: 'Unit Economics', icon: Calculator },
    { id: 'revenue', label: 'Revenue', icon: BarChart3 },
    { id: 'market', label: 'Market', icon: Globe },
    { id: 'competition', label: 'Competition', icon: Target },
    { id: 'rta', label: 'RTA License', icon: Shield },
    { id: 'sharedFleet', label: 'Shared Fleet', icon: RefreshCw },
    { id: 'ecosystem', label: 'Ecosystem', icon: Network },
    { id: 'business', label: 'Rakab Business', icon: Building2 },
    { id: 'tourists', label: 'For Tourists', icon: Plane },
    { id: 'drivers', label: 'For Drivers', icon: Users },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket },
    { id: 'risks', label: 'Risks', icon: AlertTriangle },
    { id: 'financials', label: 'Financials', icon: LineChart },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* ═══ HERO SECTION ═══ */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20">
                  <Car className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white">
                    Rakab <span className="text-green-400">&#x631;&#x643;&#x628;</span>
                  </h1>
                  <p className="text-green-400 text-sm sm:text-lg font-medium">Ride-Hailing &amp; Mobility Platform</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">
                UAE ride-hailing built on <span className="text-orange-400 font-medium">70% Wasil code reuse</span>,
                with <span className="text-blue-400 font-medium">shared fleet</span> for maximum driver utilization,
                <span className="text-green-400 font-medium"> dynamic pricing</span>, and
                <span className="text-[#c9a227] font-medium"> 5-min avg ETA target</span>.
                Earn <span className="text-[#c9a227] font-medium">Nuqta coins</span> on every ride.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full">
                <HeartHandshake className="w-4 h-4 text-[#c9a227]" />
                <span className="text-[#c9a227] text-xs sm:text-sm font-medium">A Nuqta Group Company</span>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {heroStats.map((stat, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center min-w-[110px]">
                  <div className={`text-lg sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
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
                  <span className="text-lg font-bold text-white">Why Rakab Wins</span>
                </div>
                <p className="text-lg sm:text-2xl font-bold text-white">
                  <span className="text-orange-400">70% Code Reuse</span> + <span className="text-blue-400">Shared Fleet</span> + <span className="text-[#c9a227]">Ecosystem Coins</span> + <span className="text-green-400">5-min ETA</span>
                </p>
              </div>
              <div className="flex gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-orange-400">70%</div>
                  <div className="text-xs text-slate-400">Reuse</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">5m</div>
                  <div className="text-xs text-slate-400">ETA</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">5%</div>
                  <div className="text-xs text-slate-400">Coins</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ TAB NAVIGATION ═══ */}
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

      {/* ═══ MAIN CONTENT ═══ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ─── OVERVIEW TAB ─── */}
        {activeTab === 'overview' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-400" />
                Executive Summary
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-6">
                <strong className="text-white">Rakab</strong> (&#x631;&#x643;&#x628; - &quot;ride&quot; in Arabic) is a ride-hailing and mobility platform built for the Nuqta ecosystem.
                It reuses <strong className="text-orange-400">70% of Wasil&apos;s codebase</strong> (shared driver app, navigation, payments, matching),
                shares a <strong className="text-blue-400">dual-use fleet</strong> with Wasil delivery for maximum driver utilization,
                and differentiates through <strong className="text-[#c9a227]">Nuqta ecosystem integration</strong> (coins, NuqtaPay, BNPL, Hawil Card).
                Target: <strong className="text-green-400">5-minute average ETA</strong> with dynamic surge pricing (1.2-3.0x).
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {rideTypes.map((rt, i) => (
                  <div key={i} className={`bg-gradient-to-br ${rt.color} rounded-xl p-3 sm:p-4 text-center`}>
                    <rt.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-auto mb-2" />
                    <div className="text-white font-bold text-xs sm:text-sm">{rt.name}</div>
                    <div className="text-white/70 text-[10px] sm:text-xs mt-1">{rt.tier}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick How It Works */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-4 sm:p-6 border border-green-500/30">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">How Rakab Works</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {howItWorks.map((step, i) => (
                  <div key={i} className="text-center">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${step.color} flex items-center justify-center mx-auto mb-2`}>
                      <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="text-white font-medium text-xs sm:text-sm">{step.title}</div>
                    <div className="text-slate-400 text-[10px] mt-1">{step.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/30">
                <RefreshCw className="w-8 h-8 text-orange-400 mb-3" />
                <h4 className="text-white font-bold mb-2">70% Wasil Code Reuse</h4>
                <p className="text-slate-400 text-sm">Shared driver app, navigation, payments, matching engine, and rating system. Faster dev, lower cost.</p>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/30">
                <Users className="w-8 h-8 text-blue-400 mb-3" />
                <h4 className="text-white font-bold mb-2">Shared Fleet with Wasil</h4>
                <p className="text-slate-400 text-sm">Drivers switch between rides and deliveries based on demand. 80-90% utilization vs 55-65% industry average.</p>
              </div>
              <div className="bg-[#c9a227]/10 rounded-xl p-4 border border-[#c9a227]/30">
                <Coins className="w-8 h-8 text-[#c9a227] mb-3" />
                <h4 className="text-white font-bold mb-2">Ecosystem Integration</h4>
                <p className="text-slate-400 text-sm">Nuqta coins, NuqtaPay, Qist BNPL, Hawil Card, Safar airport, Eventora events. No competitor has this.</p>
              </div>
            </div>

            {/* Price Comparison Table */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-400" />
                Price Comparison (AED)
              </h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 text-sm">Route</th>
                      <th className="text-center py-3 px-4 text-green-400 text-sm">Rakab</th>
                      <th className="text-center py-3 px-4 text-slate-400 text-sm">Uber</th>
                      <th className="text-center py-3 px-4 text-slate-400 text-sm">Careem</th>
                      <th className="text-center py-3 px-4 text-slate-400 text-sm">Taxi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingComparison.map((route, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white text-sm">{route.route}</td>
                        <td className="py-3 px-4 text-center">
                          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded font-bold text-sm">{route.rakab}</span>
                        </td>
                        <td className="py-3 px-4 text-center text-slate-400 text-sm">{route.uber}</td>
                        <td className="py-3 px-4 text-center text-slate-400 text-sm">{route.careem}</td>
                        <td className="py-3 px-4 text-center text-slate-400 text-sm">{route.taxi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ─── RIDE TYPES TAB ─── */}
        {activeTab === 'rides' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {rideTypes.map((ride, i) => (
                <div key={i} className={`bg-gradient-to-br ${ride.color} rounded-xl p-4 sm:p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <ride.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{ride.name}</h3>
                        <span className="text-white/70 text-xs">{ride.tier}</span>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm mb-4">{ride.description}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                      <div className="bg-white/20 rounded-lg p-2 text-center">
                        <div className="text-white font-bold text-xs sm:text-sm">{ride.pricing}</div>
                        <div className="text-white/60 text-[10px]">Pricing</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-2 text-center">
                        <div className="text-white font-bold text-xs sm:text-sm">{ride.eta}</div>
                        <div className="text-white/60 text-[10px]">Avg ETA</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-2 text-center">
                        <div className="text-white font-bold text-xs sm:text-sm">{ride.passengers} pax</div>
                        <div className="text-white/60 text-[10px]">Capacity</div>
                      </div>
                    </div>
                    <div className="text-white/60 text-xs mb-3">Vehicles: {ride.vehicles}</div>
                    <div className="space-y-1.5">
                      {ride.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── HOW IT WORKS TAB ─── */}
        {activeTab === 'howItWorks' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Play className="w-5 h-5 text-green-400" />
                Request Ride &rarr; Match &rarr; Track &rarr; Arrive &rarr; Pay &rarr; Rate &rarr; Earn Coins
              </h2>
              <div className="space-y-4">
                {howItWorks.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${step.color} flex items-center justify-center flex-shrink-0`}>
                      <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-slate-500 text-xs font-bold">STEP {step.step}</span>
                        {i < howItWorks.length - 1 && <ArrowRight className="w-3 h-3 text-slate-600" />}
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base mb-1">{step.title}</h4>
                      <p className="text-slate-400 text-xs sm:text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-amber-500/5 rounded-xl p-4 sm:p-6 border border-[#c9a227]/30">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">Payment Methods</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { method: 'NuqtaPay Wallet', desc: 'Instant, zero fees', icon: Wallet },
                  { method: 'Hawil Card', desc: 'Google rate for tourists', icon: CreditCard },
                  { method: 'Nuqta Coins', desc: 'Pay with earned coins', icon: Coins },
                  { method: 'Cash', desc: 'Driver accepts cash', icon: Banknote },
                ].map((pm, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50 text-center">
                    <pm.icon className="w-6 h-6 text-[#c9a227] mx-auto mb-2" />
                    <div className="text-white font-medium text-xs sm:text-sm">{pm.method}</div>
                    <div className="text-slate-400 text-[10px]">{pm.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── DRIVER APP TAB ─── */}
        {activeTab === 'driverApp' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/10 rounded-xl p-4 sm:p-6 border border-orange-500/30">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-6 h-6 text-orange-400" />
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">Driver App: 70% Wasil Code Reuse</h2>
                  <p className="text-slate-400 text-sm">Same app, same UX patterns. Drivers familiar with Wasil can drive Rakab instantly.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {driverAppFeatures.map((feat, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <feat.icon className="w-5 h-5 text-orange-400" />
                      {feat.reuse && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-orange-500/20 text-orange-400 rounded-full font-medium">REUSED</span>
                      )}
                    </div>
                    <h4 className="text-white font-bold text-sm mb-1">{feat.feature}</h4>
                    <p className="text-slate-400 text-xs">{feat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Reuse Breakdown */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">Code Reuse Breakdown</h3>
              <div className="space-y-3">
                {[
                  { module: 'Driver App Shell (navigation, auth, profile)', reuse: 90, color: 'bg-green-500' },
                  { module: 'GPS & Navigation Engine', reuse: 95, color: 'bg-green-500' },
                  { module: 'Payment Processing (NuqtaPay)', reuse: 100, color: 'bg-green-500' },
                  { module: 'Rating & Review System', reuse: 85, color: 'bg-green-500' },
                  { module: 'Earnings Dashboard & Payouts', reuse: 80, color: 'bg-blue-500' },
                  { module: 'Matching Algorithm', reuse: 60, color: 'bg-blue-500' },
                  { module: 'Ride-specific UI (passenger flow)', reuse: 30, color: 'bg-orange-500' },
                  { module: 'Surge Pricing Engine', reuse: 0, color: 'bg-red-500' },
                ].map((mod, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300 text-xs sm:text-sm">{mod.module}</span>
                      <span className="text-white font-bold text-xs sm:text-sm">{mod.reuse}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <div className={`${mod.color} h-2 rounded-full`} style={{ width: `${mod.reuse}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-orange-500/10 rounded-lg p-3 border border-orange-500/30">
                <span className="text-orange-400 text-sm font-medium">Weighted Average: ~70% code reuse = 60-70% faster development, ~50% lower R&amp;D cost</span>
              </div>
            </div>
          </div>
        )}

        {/* ─── MATCHING AI TAB ─── */}
        {activeTab === 'matching' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-green-400" />
                Matching Algorithm &amp; Demand Intelligence
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {matchingAlgorithmSteps.map((step, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 sm:p-5 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-green-400" />
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base">{step.step}</h4>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Surge Pricing Table */}
            <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/5 rounded-xl p-4 sm:p-6 border border-purple-500/30">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">Surge Pricing Tiers</h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[400px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-3 text-slate-400 text-xs">Demand Level</th>
                      <th className="text-center py-2 px-3 text-slate-400 text-xs">Multiplier</th>
                      <th className="text-center py-2 px-3 text-slate-400 text-xs">Trigger</th>
                      <th className="text-right py-2 px-3 text-slate-400 text-xs">Example (35 AED base)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { level: 'Normal', mult: '1.0x', trigger: 'Supply >= Demand', example: '35 AED' },
                      { level: 'Busy', mult: '1.2x', trigger: 'Supply < Demand by 20%', example: '42 AED' },
                      { level: 'Very Busy', mult: '1.5x', trigger: 'Supply < Demand by 40%', example: '52.5 AED' },
                      { level: 'Peak', mult: '2.0x', trigger: 'Supply < Demand by 60%', example: '70 AED' },
                      { level: 'Extreme', mult: '3.0x', trigger: 'Supply < Demand by 80%+', example: '105 AED' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-2 px-3 text-white text-sm">{row.level}</td>
                        <td className="py-2 px-3 text-center text-purple-400 font-bold text-sm">{row.mult}</td>
                        <td className="py-2 px-3 text-center text-slate-400 text-xs">{row.trigger}</td>
                        <td className="py-2 px-3 text-right text-green-400 font-medium text-sm">{row.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ─── PRICING TAB ─── */}
        {activeTab === 'pricing' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Fare Structure */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-400" />
                Fare Structure
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="bg-green-500/10 rounded-xl p-3 text-center border border-green-500/30">
                  <div className="text-2xl font-bold text-green-400">{pricingStructure.baseFare} AED</div>
                  <div className="text-xs text-slate-400">Base Fare</div>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-3 text-center border border-blue-500/30">
                  <div className="text-2xl font-bold text-blue-400">{pricingStructure.perKm} AED</div>
                  <div className="text-xs text-slate-400">Per Km</div>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-3 text-center border border-purple-500/30">
                  <div className="text-2xl font-bold text-purple-400">{pricingStructure.perMin} AED</div>
                  <div className="text-xs text-slate-400">Per Min</div>
                </div>
                <div className="bg-orange-500/10 rounded-xl p-3 text-center border border-orange-500/30">
                  <div className="text-2xl font-bold text-orange-400">{pricingStructure.surgeRange}</div>
                  <div className="text-xs text-slate-400">Surge Range</div>
                </div>
              </div>

              {/* Tier Pricing Table */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 text-xs">Tier</th>
                      <th className="text-center py-3 px-4 text-slate-400 text-xs">Multiplier</th>
                      <th className="text-center py-3 px-4 text-slate-400 text-xs">Base (AED)</th>
                      <th className="text-center py-3 px-4 text-slate-400 text-xs">Per Km</th>
                      <th className="text-center py-3 px-4 text-slate-400 text-xs">Per Min</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingStructure.tiers.map((t, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white font-medium text-sm">{t.tier}</td>
                        <td className="py-3 px-4 text-center text-green-400 font-bold text-sm">{t.multiplier}</td>
                        <td className="py-3 px-4 text-center text-white text-sm">{t.base}</td>
                        <td className="py-3 px-4 text-center text-white text-sm">{t.perKm || 'N/A'}</td>
                        <td className="py-3 px-4 text-center text-white text-sm">{t.perMin || 'N/A'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Subscription Plans */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {subscriptionPlans.map((plan, i) => (
                <div key={i} className={`rounded-xl p-4 sm:p-6 border-2 ${plan.color} ${plan.bgColor} relative`}>
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#c9a227] text-[#0a1628] text-[10px] sm:text-xs font-bold rounded-full whitespace-nowrap">
                      BEST VALUE
                    </div>
                  )}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 mt-1">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-2xl sm:text-3xl font-black text-green-400">
                      {typeof plan.price === 'number' ? `${plan.price} AED` : plan.price}
                    </span>
                    <span className="text-slate-400 text-xs sm:text-sm">/{plan.period}</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {plan.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-2 sm:p-3 border border-green-500/30">
                    <span className="text-green-400 text-xs sm:text-sm">{plan.savings}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Airport Fixed Prices */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Plane className="w-5 h-5 text-blue-400" />
                Fixed-Price Airport Transfers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {airportPackages.map((pkg, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="text-white font-medium text-xs sm:text-sm">{pkg.from}</div>
                        <div className="text-slate-500 text-[10px] sm:text-xs">{pkg.to}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold text-lg sm:text-xl">{pkg.price} AED</div>
                        <div className="text-[10px] sm:text-xs text-slate-500">Fixed price</div>
                      </div>
                    </div>
                    <div className="flex justify-between text-[10px] sm:text-xs">
                      <span className="text-slate-400">{pkg.time}</span>
                      <span className="text-green-400">Save {pkg.savings} AED vs taxi</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── UNIT ECONOMICS TAB ─── */}
        {activeTab === 'economics' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-green-400" />
                Per Trip Economics (Avg {unitEconomics.avgTrip} AED fare)
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <div className="bg-green-500/10 rounded-xl p-3 sm:p-4 text-center border border-green-500/30">
                  <div className="text-lg sm:text-2xl font-bold text-green-400">{unitEconomics.avgTrip} AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Avg Trip Fare</div>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-3 sm:p-4 text-center border border-blue-500/30">
                  <div className="text-lg sm:text-2xl font-bold text-blue-400">{unitEconomics.platformCommission}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Platform Commission</div>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-3 sm:p-4 text-center border border-purple-500/30">
                  <div className="text-lg sm:text-2xl font-bold text-purple-400">{unitEconomics.driverPayout}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Driver Payout</div>
                </div>
                <div className="bg-[#c9a227]/10 rounded-xl p-3 sm:p-4 text-center border border-[#c9a227]/30">
                  <div className="text-lg sm:text-2xl font-bold text-[#c9a227]">{unitEconomics.netMargin} AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Net Margin/Trip</div>
                </div>
              </div>

              {/* Fare Waterfall */}
              <div className="bg-slate-900/50 rounded-xl p-4 mb-6">
                <h4 className="text-white font-bold text-sm mb-3">Fare Waterfall (35 AED trip)</h4>
                <div className="space-y-2">
                  {[
                    { label: 'Rider Pays', value: '35.00 AED', pct: '100%', color: 'bg-white', width: '100%' },
                    { label: 'Driver Receives (75-80%)', value: '26.25-28.00 AED', pct: '75-80%', color: 'bg-blue-500', width: '78%' },
                    { label: 'Platform Commission (20-25%)', value: '7.00-8.75 AED', pct: '20-25%', color: 'bg-green-500', width: '22%' },
                    { label: 'Coin Rewards (5% back to rider)', value: '1.75 AED', pct: '5%', color: 'bg-[#c9a227]', width: '5%' },
                    { label: 'Net Platform Revenue', value: '5.25-7.00 AED', pct: '15-20%', color: 'bg-emerald-500', width: '17%' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-36 text-slate-400 text-xs">{item.label}</div>
                      <div className="flex-1 bg-slate-700/50 rounded-full h-4 relative">
                        <div className={`${item.color} h-4 rounded-full`} style={{ width: item.width }} />
                      </div>
                      <div className="w-32 text-right text-white text-xs font-medium">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* LTV Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-white">{unitEconomics.ltvCacRatio}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">LTV:CAC Ratio</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-white">{unitEconomics.ltv12} AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">User LTV (12mo)</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-white">{unitEconomics.cac} AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">CAC</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-white">{unitEconomics.paybackDays} days</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">CAC Payback</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── REVENUE TAB ─── */}
        {activeTab === 'revenue' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-400" />
                Revenue Model
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {revenueStreams.map((rs, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                        <rs.icon className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{rs.source}</h4>
                        <span className="text-green-400 text-xs font-medium">{rs.value}</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-xs mb-2">{rs.description}</p>
                    <div className="flex gap-2">
                      <span className="text-[10px] px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full">{rs.volume}</span>
                      <span className="text-[10px] px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">{rs.margin} margin</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── MARKET TAB ─── */}
        {activeTab === 'market' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-green-400" />
                UAE Ride-Hailing Market: {marketOpportunity.totalMarket}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-green-500/10 rounded-xl p-3 text-center border border-green-500/30">
                  <div className="text-2xl font-bold text-green-400">{marketOpportunity.totalMarket}</div>
                  <div className="text-xs text-slate-400">Total Market</div>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-3 text-center border border-blue-500/30">
                  <div className="text-2xl font-bold text-blue-400">{marketOpportunity.growth}</div>
                  <div className="text-xs text-slate-400">Annual Growth</div>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-3 text-center border border-purple-500/30">
                  <div className="text-2xl font-bold text-purple-400">{marketOpportunity.dailyRidesDubai}</div>
                  <div className="text-xs text-slate-400">Daily Rides (Dubai)</div>
                </div>
              </div>

              <h3 className="text-white font-bold text-sm mb-3">Market Drivers</h3>
              <div className="space-y-2 mb-6">
                {marketOpportunity.keyDrivers.map((d, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {d}
                  </div>
                ))}
              </div>

              <h3 className="text-white font-bold text-sm mb-3">Market Segments</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {marketOpportunity.segments.map((seg, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50 text-center">
                    <div className="text-xl font-bold text-green-400">{seg.share}</div>
                    <div className="text-white font-medium text-xs">{seg.segment}</div>
                    <div className="text-slate-400 text-[10px]">{seg.avgTrips}/wk</div>
                    <div className="text-[10px] text-[#c9a227]">{seg.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── COMPETITION TAB ─── */}
        {activeTab === 'competition' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {competitors.map((comp, i) => (
                <div key={i} className="bg-slate-800/30 rounded-xl p-4 sm:p-5 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-lg font-bold ${comp.color}`}>{comp.name}</h3>
                    <span className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded-full">{comp.marketShare}</span>
                  </div>
                  <p className="text-slate-400 text-xs mb-3">{comp.status}</p>
                  <button
                    onClick={() => setExpandedCompetitor(expandedCompetitor === comp.name ? null : comp.name)}
                    className="text-green-400 text-xs flex items-center gap-1 mb-3"
                  >
                    {expandedCompetitor === comp.name ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    Details
                  </button>
                  {expandedCompetitor === comp.name && (
                    <div className="space-y-3">
                      <div>
                        <span className="text-green-400 text-[10px] font-bold">STRENGTHS</span>
                        <div className="space-y-1 mt-1">
                          {comp.strengths.map((s, j) => (
                            <div key={j} className="text-slate-300 text-xs flex items-center gap-1">
                              <CheckCircle className="w-3 h-3 text-green-400" /> {s}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-red-400 text-[10px] font-bold">WEAKNESSES</span>
                        <div className="space-y-1 mt-1">
                          {comp.weaknesses.map((w, j) => (
                            <div key={j} className="text-slate-300 text-xs flex items-center gap-1">
                              <AlertTriangle className="w-3 h-3 text-red-400" /> {w}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4 text-xs">
                        <span className="text-slate-400">Commission: <span className="text-white font-medium">{comp.commission}</span></span>
                        <span className="text-slate-400">Driver Pay: <span className="text-white font-medium">{comp.driverPay}</span></span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Rakab Advantage */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-4 sm:p-6 border border-green-500/30">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-green-400" />
                Rakab&apos;s Competitive Advantage
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {rakabAdvantage.map((adv, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {adv}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── RTA LICENSE TAB ─── */}
        {activeTab === 'rta' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/10 rounded-xl p-4 sm:p-6 border-2 border-red-500">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">{rtaLicenseInfo.headline}</h2>
                  <p className="text-red-400 text-sm">{rtaLicenseInfo.description}</p>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                {rtaLicenseInfo.facts.map((fact, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {fact}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">License Acquisition Strategies</h3>
              <div className="space-y-4">
                {rtaLicenseInfo.strategies.map((strat, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-bold text-sm">{strat.strategy}</h4>
                      <div className="flex gap-2">
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                          strat.probability === 'Highest' ? 'bg-green-500/20 text-green-400' :
                          strat.probability === 'High' ? 'bg-blue-500/20 text-blue-400' :
                          strat.probability === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>{strat.probability} probability</span>
                        <span className="text-[10px] px-2 py-0.5 bg-slate-700 text-slate-300 rounded-full">{strat.timeline}</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm">{strat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── SHARED FLEET TAB ─── */}
        {activeTab === 'sharedFleet' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-xl p-4 sm:p-6 border border-blue-500/30">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2">{sharedFleetModel.headline}</h2>
              <p className="text-slate-300 text-sm mb-6">{sharedFleetModel.description}</p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-3 text-slate-400 text-xs">Metric</th>
                      <th className="text-center py-2 px-3 text-red-400 text-xs">Without Shared Fleet</th>
                      <th className="text-center py-2 px-3 text-green-400 text-xs">With Shared Fleet</th>
                      <th className="text-center py-2 px-3 text-[#c9a227] text-xs">Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sharedFleetModel.benefits.map((b, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-2 px-3 text-white text-sm">{b.metric}</td>
                        <td className="py-2 px-3 text-center text-red-400 text-sm">{b.before}</td>
                        <td className="py-2 px-3 text-center text-green-400 font-bold text-sm">{b.after}</td>
                        <td className="py-2 px-3 text-center text-[#c9a227] font-bold text-sm">{b.improvement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-white font-bold text-sm mb-3">How the Shared Fleet Works</h3>
              <div className="space-y-2">
                {sharedFleetModel.howItWorks.map((step, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                    <span className="text-green-400 font-bold text-xs mt-0.5">{i + 1}.</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── ECOSYSTEM TAB ─── */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/10 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Network className="w-5 h-5 text-[#c9a227]" />
                Ecosystem Integration
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {ecosystemIntegration.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-3">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <h4 className={`font-bold text-sm ${item.color}`}>{item.product}</h4>
                    </div>
                    <p className="text-xs text-slate-300 mb-2">{item.integration}</p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-green-400">
                      <CheckCircle className="w-3 h-3 flex-shrink-0" />
                      {item.benefit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── RAKAB BUSINESS TAB ─── */}
        {activeTab === 'business' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/10 rounded-xl p-4 sm:p-6 border border-purple-500/30">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2">{rakabBusiness.headline}</h2>
              <p className="text-slate-400 text-sm mb-6">Corporate accounts with employee ride management, monthly billing, and expense reports.</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {rakabBusiness.plans.map((plan, i) => (
                  <div key={i} className={`rounded-xl p-4 sm:p-5 border-2 ${plan.color} ${plan.bgColor}`}>
                    <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                    <div className="mb-3">
                      <span className="text-2xl font-black text-green-400">{plan.price} AED</span>
                      <span className="text-slate-400 text-xs">/month</span>
                    </div>
                    <div className="text-sm text-slate-300 mb-3">{plan.rides} rides included</div>
                    <div className="space-y-1.5">
                      {plan.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-white font-bold text-sm mb-3">All Business Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {rakabBusiness.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── FOR TOURISTS TAB ─── */}
        {activeTab === 'tourists' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-xl p-4 sm:p-6 lg:p-8 border-2 border-blue-500">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 rounded-full mb-4">
                  <Plane className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-bold text-xs sm:text-sm">Tourist-First Design</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Save 3-5% on Every Ride</h2>
                <p className="text-slate-300 text-sm sm:text-lg">Pay with Hawil Card at Google rate - no foreign transaction fees</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {touristFeatures.map((feature, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 sm:p-5 border border-blue-500/30">
                    <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 mb-3" />
                    <h4 className="text-white font-bold text-sm sm:text-base mb-2">{feature.feature}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 mb-3">{feature.description}</p>
                    <div className="bg-green-500/10 rounded-lg p-2 border border-green-500/30">
                      <span className="text-green-400 text-xs sm:text-sm font-medium">{feature.savings}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── FOR DRIVERS TAB ─── */}
        {activeTab === 'drivers' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-4 sm:p-6 border-2 border-green-500">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2">{driverProgram.title}</h2>
              <p className="text-green-400 text-sm sm:text-lg mb-6">{driverProgram.tagline}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6">
                {driverProgram.benefits.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 sm:p-4 border border-green-500/30">
                    <h4 className="text-white font-bold text-sm mb-1">{item.benefit}</h4>
                    <p className="text-xs sm:text-sm text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                <div className="bg-green-500/20 rounded-xl p-3 sm:p-4 text-center">
                  <div className="text-lg sm:text-2xl font-bold text-green-400">{driverProgram.earnings.avgHourly}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Per Hour</div>
                </div>
                <div className="bg-green-500/20 rounded-xl p-3 sm:p-4 text-center">
                  <div className="text-lg sm:text-2xl font-bold text-green-400">{driverProgram.earnings.avgDaily}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Per Day</div>
                </div>
                <div className="bg-green-500/20 rounded-xl p-3 sm:p-4 text-center">
                  <div className="text-lg sm:text-2xl font-bold text-green-400">{driverProgram.earnings.topDrivers}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Top Drivers/Month</div>
                </div>
              </div>

              <h3 className="text-white font-bold text-sm mb-3">Driver Requirements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {driverProgram.requirements.map((req, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {req}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── ROADMAP TAB ─── */}
        {activeTab === 'roadmap' && (
          <div className="space-y-4 sm:space-y-6">
            {roadmap.map((phase, i) => (
              <div key={i} className={`rounded-xl p-4 sm:p-6 border-2 ${phase.color} ${phase.bgColor}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-400">{phase.phase}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{phase.title}</h3>
                  </div>
                  <span className="px-3 py-1 bg-slate-900/50 rounded-full text-xs sm:text-sm text-slate-300 w-fit">{phase.timeline}</span>
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

            {/* GCC Expansion */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-green-400" />
                GCC Expansion Plan
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[400px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-3 text-slate-400 text-xs">Country</th>
                      <th className="text-center py-2 px-3 text-slate-400 text-xs">Status</th>
                      <th className="text-left py-2 px-3 text-slate-400 text-xs">Cities</th>
                      <th className="text-center py-2 px-3 text-slate-400 text-xs">Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gccExpansion.map((c, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-2 px-3 text-white font-medium text-sm">{c.country}</td>
                        <td className="py-2 px-3 text-center">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            c.status === 'Launch' ? 'bg-green-500/20 text-green-400' :
                            c.status === 'Phase 2' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-purple-500/20 text-purple-400'
                          }`}>{c.status}</span>
                        </td>
                        <td className="py-2 px-3 text-slate-400 text-xs">{c.cities}</td>
                        <td className="py-2 px-3 text-center text-white text-sm">{c.timeline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ─── RISKS TAB ─── */}
        {activeTab === 'risks' && (
          <div className="space-y-4 sm:space-y-6">
            {risks.map((risk, i) => (
              <div key={i} className={`bg-slate-800/30 rounded-xl border ${
                risk.severity === 'critical' ? 'border-red-500' :
                risk.severity === 'high' ? 'border-orange-500/50' :
                'border-yellow-500/30'
              }`}>
                <button
                  onClick={() => setExpandedRisk(expandedRisk === risk.risk ? null : risk.risk)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      risk.severity === 'critical' ? 'bg-red-500' :
                      risk.severity === 'high' ? 'bg-orange-500' :
                      'bg-yellow-500'
                    }`} />
                    <div className="text-left">
                      <h3 className="text-white font-bold text-sm sm:text-base">{risk.risk}</h3>
                      <span className={`text-xs ${
                        risk.severity === 'critical' ? 'text-red-400' :
                        risk.severity === 'high' ? 'text-orange-400' :
                        'text-yellow-400'
                      }`}>{risk.severity.toUpperCase()} severity</span>
                    </div>
                  </div>
                  {expandedRisk === risk.risk ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                {expandedRisk === risk.risk && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-slate-700/50 pt-3">
                    <p className="text-slate-400 text-sm mb-3"><strong className="text-white">Impact:</strong> {risk.impact}</p>
                    <h4 className="text-green-400 text-xs font-bold mb-2">MITIGATION STRATEGIES</h4>
                    <div className="space-y-2">
                      {risk.mitigation.map((m, j) => (
                        <div key={j} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <Shield className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          {m}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ─── FINANCIALS TAB ─── */}
        {activeTab === 'financials' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <LineChart className="w-5 h-5 text-green-400" />
                3-Year Financial Projections
              </h2>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 text-sm">Metric</th>
                      {financialProjections.map((proj, i) => (
                        <th key={i} className="text-right py-3 px-4 text-white font-bold text-sm">{proj.year}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300 text-sm">Rides</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-bold text-sm">{(proj.rides / 1000).toFixed(0)}K</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300 text-sm">GMV (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-blue-400 font-bold text-sm">{proj.revenue}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300 text-sm">Net Revenue (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-green-400 font-bold text-sm">{proj.commission}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300 text-sm">Drivers</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium text-sm">{proj.drivers.toLocaleString()}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300 text-sm">Users</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium text-sm">{(proj.users / 1000).toFixed(0)}K</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-300 text-sm">Cities / Emirates</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium text-sm">{proj.cities}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Revenue Growth Visual */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">Revenue Growth Trajectory</h3>
              <div className="flex items-end gap-4 sm:gap-6 justify-center h-48">
                {financialProjections.map((proj, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <span className="text-green-400 font-bold text-sm">{proj.commission}M</span>
                    <div
                      className="w-16 sm:w-20 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg"
                      style={{ height: `${(proj.commission / 3.5) * 140}px` }}
                    />
                    <span className="text-slate-400 text-xs">{proj.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>

      <GlobalFooter />
    </div>
  );
}
