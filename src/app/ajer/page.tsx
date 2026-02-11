'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Package, Globe, Shield, TrendingUp, Users, Target,
  Rocket, CheckCircle, AlertTriangle, Clock, Building, ArrowRight,
  Star, Zap, BarChart3, Award, Handshake, Store, CreditCard,
  Calculator, Gift, Crown, Wallet, ChevronRight,
  ChevronDown, ChevronUp, Building2, ShieldCheck, HeartHandshake,
  Coins, Network, MapPin, Smartphone, Banknote, Phone,
  BadgePercent, CircleDollarSign, PieChart, LineChart, ArrowUpRight,
  Timer, UserCheck, Lock, Eye, Search, Home, ShoppingBag,
  Calendar, RefreshCw, Layers, Sparkles, Send,
  Car, Camera, Bike, Wrench, Tent, Ship, Dumbbell,
  Music, Gamepad2, Baby, Briefcase, Laptop, Tv, Sofa,
  Shirt, Watch, Gem, PartyPopper, GraduationCap, Heart,
  Fuel, Battery, Gauge, KeyRound, FileCheck, Truck,
  Settings, DollarSign, CircleCheck, Info, Percent
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── Hero Key Stats ───
const heroStats = [
  { label: 'Vehicle Target Y1', value: '500+', suffix: 'vehicles', color: 'text-green-400' },
  { label: 'Subscription Tiers', value: '3', suffix: 'flexible plans', color: 'text-blue-400' },
  { label: 'Credit Model Reuse', value: '90%', suffix: 'from Qist ML', color: 'text-purple-400' },
  { label: 'Monthly Range', value: '2K-8K', suffix: 'AED/mo', color: 'text-[#c9a227]' },
];

// ─── Vehicle Categories ───
const vehicleCategories = [
  {
    name: 'Economy',
    arabic: 'اقتصادي',
    icon: Car,
    model: 'Nissan Sunny / Similar',
    monthlyRate: '~2,000',
    dailyRate: '~100',
    specs: ['1.5L Engine', 'Auto Transmission', '5 Seats', 'Fuel Efficient'],
    ideal: 'Daily commuters, budget-conscious expats',
    availability: 'High',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
  },
  {
    name: 'Mid-Range',
    arabic: 'متوسط',
    icon: Car,
    model: 'Toyota Camry / Similar',
    monthlyRate: '~3,500',
    dailyRate: '~175',
    specs: ['2.5L Engine', 'Auto Transmission', '5 Seats', 'Apple CarPlay'],
    ideal: 'Professionals, families, comfort seekers',
    availability: 'High',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
  },
  {
    name: 'Premium',
    arabic: 'مميز',
    icon: Car,
    model: 'BMW 3 Series / Similar',
    monthlyRate: '~5,000',
    dailyRate: '~250',
    specs: ['2.0L Turbo', 'Sport Mode', 'Leather Interior', 'Premium Sound'],
    ideal: 'Executives, brand-conscious professionals',
    availability: 'Medium',
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
  },
  {
    name: 'Luxury',
    arabic: 'فاخر',
    icon: Crown,
    model: 'Mercedes E-Class / Similar',
    monthlyRate: '~8,000',
    dailyRate: '~400',
    specs: ['3.0L V6', 'Massage Seats', 'Burmester Audio', 'Full ADAS'],
    ideal: 'C-suite, VIPs, luxury lifestyle',
    availability: 'Limited',
    color: 'from-[#c9a227] to-amber-600',
    textColor: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]/30',
  },
  {
    name: 'SUV',
    arabic: 'دفع رباعي',
    icon: Truck,
    model: 'Toyota Fortuner / Similar',
    monthlyRate: '~4,000',
    dailyRate: '~200',
    specs: ['2.7L Engine', '4WD Available', '7 Seats', 'High Clearance'],
    ideal: 'Families, desert trips, adventure seekers',
    availability: 'High',
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
  },
  {
    name: 'Electric',
    arabic: 'كهربائي',
    icon: Battery,
    model: 'Tesla Model 3 / Similar',
    monthlyRate: '~6,000',
    dailyRate: '~300',
    specs: ['Electric Motor', '350km Range', 'Autopilot', 'Zero Emissions'],
    ideal: 'Tech-savvy, eco-conscious, EV curious',
    availability: 'Limited',
    color: 'from-cyan-500 to-teal-600',
    textColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
  },
];

// ─── Subscription Plans ───
const subscriptionPlans = [
  {
    name: 'Flexi',
    duration: 'Month-to-Month',
    modifier: '+15%',
    modifierNote: 'above base rate',
    features: ['No long-term commitment', 'Cancel anytime with 7-day notice', 'Switch vehicles monthly', 'Ideal for tourists & short stays'],
    popular: false,
    icon: RefreshCw,
    color: 'border-slate-500',
    textColor: 'text-slate-300',
    bgColor: 'bg-slate-500/10',
    example: 'Camry: ~4,025 AED/mo',
  },
  {
    name: 'Standard',
    duration: '6 Months',
    modifier: 'Base Rate',
    modifierNote: 'standard pricing',
    features: ['6-month commitment', 'Free vehicle swap once', 'Priority maintenance', 'Best balance of flexibility & value'],
    popular: true,
    icon: Star,
    color: 'border-blue-500',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    example: 'Camry: ~3,500 AED/mo',
  },
  {
    name: 'Long-Term',
    duration: '12 Months',
    modifier: '-10%',
    modifierNote: 'below base rate',
    features: ['12-month commitment', 'Two free vehicle swaps', 'VIP maintenance lane', 'Maximum savings for residents'],
    popular: false,
    icon: Calendar,
    color: 'border-green-500',
    textColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
    example: 'Camry: ~3,150 AED/mo',
  },
  {
    name: 'Lease-to-Own',
    duration: '24 Months',
    modifier: 'Builds Equity',
    modifierNote: '30% goes to ownership',
    features: ['24-month program', '30% of payments build equity', 'Option to purchase at end', 'Trade-in value guaranteed'],
    popular: false,
    icon: KeyRound,
    color: 'border-[#c9a227]',
    textColor: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    example: 'Camry: ~3,800 AED/mo (ownership path)',
  },
];

// ─── How It Works Steps ───
const howItWorksSteps = [
  { step: 1, title: 'Browse Vehicles', description: 'Explore our catalog by category, budget, or preference', icon: Search, color: 'text-blue-400', bg: 'bg-blue-500/20' },
  { step: 2, title: 'Select Your Plan', description: 'Choose Flexi, Standard, Long-Term, or Lease-to-Own', icon: Layers, color: 'text-purple-400', bg: 'bg-purple-500/20' },
  { step: 3, title: 'Credit Check', description: 'Instant assessment reusing Qist ML scoring model (90% reuse)', icon: ShieldCheck, color: 'text-green-400', bg: 'bg-green-500/20' },
  { step: 4, title: 'Sign Agreement', description: 'Digital contract with e-signature, fully paperless', icon: FileCheck, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  { step: 5, title: 'Pickup or Delivery', description: 'Collect from hub or get delivered via Wasil logistics', icon: Truck, color: 'text-orange-400', bg: 'bg-orange-500/20' },
  { step: 6, title: 'Drive & Enjoy', description: 'Hit the road - everything included in your subscription', icon: Car, color: 'text-[#c9a227]', bg: 'bg-[#c9a227]/20' },
];

// ─── What is Included ───
const includedItems = [
  { item: 'Comprehensive Insurance', description: 'Full coverage including third-party liability', icon: Shield, color: 'text-blue-400' },
  { item: 'Scheduled Maintenance', description: 'All services, oil changes, tire rotations covered', icon: Wrench, color: 'text-green-400' },
  { item: 'Vehicle Registration', description: 'Registration, Salik tag, and renewal handled', icon: FileCheck, color: 'text-purple-400' },
  { item: 'Roadside Assistance', description: '24/7 emergency support across the UAE', icon: Phone, color: 'text-red-400' },
  { item: 'Replacement Vehicle', description: 'Temporary replacement during maintenance or repairs', icon: RefreshCw, color: 'text-orange-400' },
  { item: 'Free Km Allowance', description: '2,500 km/month included (excess at 0.50 AED/km)', icon: Gauge, color: 'text-cyan-400' },
];

// ─── Unit Economics ───
const unitEconomics = [
  { metric: 'Avg Monthly Subscription', value: '4,000 AED', note: 'Blended across tiers', color: 'text-blue-400' },
  { metric: 'Avg Vehicle Acquisition Cost', value: '60,000 AED', note: 'Fleet purchase price', color: 'text-purple-400' },
  { metric: 'Break-Even Period', value: '18 months', note: 'Per vehicle', color: 'text-green-400' },
  { metric: 'Gross Margin Target', value: '15-20%', note: 'After all costs', color: 'text-[#c9a227]' },
  { metric: 'Monthly Operating Cost', value: '~1,200 AED', note: 'Insurance + maintenance + depreciation', color: 'text-orange-400' },
  { metric: 'Fleet Utilization Target', value: '85%+', note: 'Active subscriptions / total fleet', color: 'text-cyan-400' },
  { metric: 'Customer LTV', value: '~48,000 AED', note: '12 months avg tenure', color: 'text-emerald-400' },
  { metric: 'Customer Acquisition Cost', value: '~1,500 AED', note: 'Reduced via ecosystem cross-sell', color: 'text-pink-400' },
];

// ─── Revenue Model ───
const revenueStreams = [
  { stream: 'Monthly Subscriptions', share: '75%', description: 'Core recurring revenue from vehicle subscriptions', amount: 'AED 4,000 avg/vehicle/mo', icon: CreditCard, color: 'text-blue-400' },
  { stream: 'Insurance Markup', share: '8%', description: 'Margin on bulk-negotiated insurance premiums', amount: '~AED 200/vehicle/mo', icon: Shield, color: 'text-green-400' },
  { stream: 'Excess Km Charges', share: '6%', description: '0.50 AED/km beyond 2,500 km/month allowance', amount: '~AED 150 avg/vehicle/mo', icon: Gauge, color: 'text-purple-400' },
  { stream: 'Late Return Fees', share: '4%', description: 'Penalties for overdue returns on Flexi plans', amount: '~AED 100 avg/vehicle/mo', icon: Clock, color: 'text-orange-400' },
  { stream: 'Damage Charges', share: '4%', description: 'Beyond-wear-and-tear damage recovery', amount: '~AED 80 avg/vehicle/mo', icon: AlertTriangle, color: 'text-red-400' },
  { stream: 'Lease-to-Own Spread', share: '3%', description: 'Margin on ownership conversion pricing', amount: 'Variable per vehicle', icon: KeyRound, color: 'text-[#c9a227]' },
];

// ─── Market Opportunity ───
const marketData = {
  totalMarket: '$2B+',
  growth: '15% YoY',
  expatLeasing: '50K+',
  headline: 'UAE Vehicle Leasing Market',
  points: [
    { stat: '$2B+', label: 'UAE vehicle leasing market size', icon: DollarSign },
    { stat: '15%', label: 'Year-over-year market growth', icon: TrendingUp },
    { stat: '50K+', label: 'Expats leasing vehicles annually', icon: Users },
    { stat: '70%', label: 'UAE population are expats (mobility-first)', icon: Globe },
    { stat: '3.2M', label: 'Registered vehicles in UAE', icon: Car },
    { stat: '45%', label: 'Prefer subscription over ownership (millennials)', icon: RefreshCw },
  ],
};

// ─── Competitors ───
const competitors = [
  { name: 'Invygo', focus: 'Car subscriptions', strength: 'Digital-first UX', weakness: 'No credit scoring, limited fleet', pricing: 'AED 1,800-7,000/mo' },
  { name: 'Udrive', focus: 'Pay-per-minute / daily', strength: 'Flexible short-term', weakness: 'Not subscription, no ownership path', pricing: 'AED 0.60/min' },
  { name: 'Ekar', focus: 'Car sharing', strength: 'Self-service tech', weakness: 'Shared model, no dedicated vehicle', pricing: 'AED 0.70/min' },
  { name: 'Hertz UAE', focus: 'Traditional rental', strength: 'Brand recognition', weakness: 'Expensive, old-school process', pricing: 'AED 3,000-10,000/mo' },
  { name: 'Sixt', focus: 'Premium rental', strength: 'Premium fleet', weakness: 'No digital credit check, no ecosystem', pricing: 'AED 3,500-12,000/mo' },
];

const ajerAdvantages = [
  { advantage: 'Qist Credit Scoring', description: '90% ML model reuse - instant credit decisions, lower default rate', icon: ShieldCheck },
  { advantage: 'NuqtaPay Integration', description: 'Seamless payments, auto-debit, integrated billing', icon: Wallet },
  { advantage: 'Nuqta Coins Rewards', description: 'Earn coins on every monthly payment, redeem across ecosystem', icon: Coins },
  { advantage: 'Wasil Delivery', description: 'Vehicle delivered to your door via Wasil logistics network', icon: Truck },
  { advantage: 'Rakab Driver Supply', description: 'Rakab drivers can subscribe to Ajer vehicles for rideshare', icon: Users },
  { advantage: 'Ecosystem Lock-in', description: 'Multi-product users have 4x higher retention', icon: Network },
];

// ─── Roadmap Phases ───
const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Vehicle Catalog + Booking',
    timeline: 'Q3 2027',
    status: 'planned',
    milestones: [
      'Launch vehicle catalog with 6 categories',
      'Online booking flow with plan selection',
      'Basic credit check integration',
      'Pickup location setup (3 hubs in Dubai)',
      'Payment processing via NuqtaPay',
      'Customer onboarding & KYC flow',
    ],
    color: 'border-green-500',
    bgColor: 'bg-green-500/10',
    textColor: 'text-green-400',
  },
  {
    phase: 'Phase 2',
    title: 'Credit Assessment + Qist Reuse',
    timeline: 'Q1 2028',
    status: 'pending',
    milestones: [
      'Full Qist ML credit model integration (90% reuse)',
      'Risk-based pricing tiers',
      'Auto-approval for high-score customers',
      'Deposit optimization based on credit score',
      'Fraud detection system (shared with Qist)',
      'Real-time credit monitoring',
    ],
    color: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-400',
  },
  {
    phase: 'Phase 3',
    title: 'Fleet Management + Insurance',
    timeline: 'Q3 2028',
    status: 'pending',
    milestones: [
      'Fleet partner portal (reuses Merchant Portal base)',
      'Bulk insurance negotiation platform',
      'Maintenance scheduling system',
      'Vehicle tracking & telematics',
      'Damage assessment AI',
      'Expand to 500+ vehicles',
    ],
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-400',
  },
  {
    phase: 'Phase 4',
    title: 'Lease-to-Own + EV Expansion',
    timeline: 'Q1 2029',
    status: 'pending',
    milestones: [
      'Launch Lease-to-Own program',
      'EV fleet expansion (Tesla, BYD, Polestar)',
      'Charging network partnerships',
      'GCC expansion (Saudi Arabia, Qatar)',
      'B2B corporate fleet offering',
      'AI-powered vehicle recommendations',
    ],
    color: 'border-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    textColor: 'text-[#c9a227]',
  },
];

// ─── Risk Analysis ───
const risks = [
  {
    risk: 'Vehicle Depreciation',
    severity: 'High',
    impact: 'Residual value drops faster than projected',
    mitigation: 'Conservative depreciation models, diversified fleet mix, Lease-to-Own transfers risk to customer',
    icon: TrendingUp,
    color: 'text-red-400',
  },
  {
    risk: 'Insurance Costs',
    severity: 'Medium',
    impact: 'Claims increase premiums, erode margins',
    mitigation: 'Bulk negotiation, driver scoring, telematics-based insurance, deductible structure',
    icon: Shield,
    color: 'text-orange-400',
  },
  {
    risk: 'Damage & Accidents',
    severity: 'High',
    impact: 'Repair costs, vehicle downtime, replacement needs',
    mitigation: 'Security deposits, damage charges, pre/post-inspection app, AI damage assessment',
    icon: AlertTriangle,
    color: 'text-red-400',
  },
  {
    risk: 'Fleet Utilization',
    severity: 'Medium',
    impact: 'Idle vehicles burn cash (insurance, depreciation, parking)',
    mitigation: 'Dynamic pricing, Flexi plans to fill gaps, Rakab driver channel, seasonal promotions',
    icon: BarChart3,
    color: 'text-yellow-400',
  },
  {
    risk: 'Credit Defaults',
    severity: 'Medium',
    impact: 'Non-payment, vehicle recovery costs',
    mitigation: 'Qist ML scoring (90% reuse), GPS tracking, auto-debit, progressive collection process',
    icon: Lock,
    color: 'text-orange-400',
  },
  {
    risk: 'Regulatory Changes',
    severity: 'Low',
    impact: 'New licensing requirements, insurance mandates',
    mitigation: 'Legal counsel, regulatory monitoring, flexible business model, government relations',
    icon: FileCheck,
    color: 'text-blue-400',
  },
];

// ─── Fleet Partner Portal Features ───
const partnerPortalFeatures = [
  { feature: 'Vehicle Listing Management', description: 'Add, edit, and manage fleet vehicles with photos, specs, and pricing', icon: Car },
  { feature: 'Booking Dashboard', description: 'Real-time view of all active subscriptions, upcoming returns, and availability', icon: Calendar },
  { feature: 'Revenue Analytics', description: 'Track earnings, utilization rates, and revenue per vehicle', icon: BarChart3 },
  { feature: 'Maintenance Scheduler', description: 'Schedule and track maintenance, receive alerts for upcoming services', icon: Wrench },
  { feature: 'Customer Communications', description: 'In-app messaging with subscribers, automated notifications', icon: Send },
  { feature: 'Insurance Management', description: 'Track policies, claims, and renewals for each vehicle', icon: Shield },
  { feature: 'Damage Reports', description: 'Photo-based damage assessment with AI scoring and cost estimation', icon: Camera },
  { feature: 'Financial Settlements', description: 'Automated payouts, commission tracking, and tax reporting', icon: Banknote },
];

// ─── Ecosystem Integration ───
const ecosystemIntegration = [
  {
    product: 'Qist Credit Scoring',
    integration: '90% ML model reuse for instant credit decisions',
    benefit: 'Lower default rates, faster approvals, risk-based pricing',
    detail: 'Same credit bureau data, same scoring model, same fraud detection - adapted for vehicle leasing risk parameters',
    icon: ShieldCheck,
    color: 'text-violet-400',
    reuse: '90%',
  },
  {
    product: 'NuqtaPay',
    integration: 'Auto-debit monthly subscriptions',
    benefit: 'Seamless billing, reduced payment failures',
    detail: 'Direct integration with NuqtaPay wallet, card-on-file, and bank transfer options',
    icon: Wallet,
    color: 'text-blue-400',
    reuse: '100%',
  },
  {
    product: 'Nuqta Coins',
    integration: 'Earn coins on every monthly payment',
    benefit: '2% coins earned per payment, redeemable across ecosystem',
    detail: 'AED 4,000/mo subscription = 80 coins/mo = 960 coins/year, redeemable at Nuqta stores',
    icon: Coins,
    color: 'text-amber-400',
    reuse: '100%',
  },
  {
    product: 'Wasil Logistics',
    integration: 'Vehicle delivery & pickup service',
    benefit: 'Doorstep delivery, no need to visit a branch',
    detail: 'Wasil drivers handle vehicle transport, key handover, and document verification on delivery',
    icon: Truck,
    color: 'text-orange-400',
    reuse: '70%',
  },
  {
    product: 'Rakab Ride-Hailing',
    integration: 'Rakab drivers subscribe to Ajer vehicles',
    benefit: 'Built-in demand channel, guaranteed utilization',
    detail: 'Rakab drivers who need vehicles can subscribe through Ajer at preferential rates, ensuring fleet utilization',
    icon: Users,
    color: 'text-emerald-400',
    reuse: '60%',
  },
  {
    product: 'Nuqta+ Membership',
    integration: 'Member discounts on all subscription plans',
    benefit: '10% off any plan, priority vehicle selection',
    detail: 'Nuqta+ members get first access to new vehicles, priority support, and exclusive EV allocation',
    icon: Crown,
    color: 'text-[#c9a227]',
    reuse: '100%',
  },
];

// ─── GCC Expansion ───
const gccExpansion = [
  { country: 'UAE', flag: 'AE', status: 'Launch', vehicles: '500+', timeline: 'Q3 2027', cities: 'Dubai, Abu Dhabi, Sharjah', color: 'border-emerald-500', textColor: 'text-emerald-400' },
  { country: 'Saudi Arabia', flag: 'SA', status: 'Phase 2', vehicles: '1,000+', timeline: 'Q1 2029', cities: 'Riyadh, Jeddah, Dammam', color: 'border-blue-500', textColor: 'text-blue-400' },
  { country: 'Qatar', flag: 'QA', status: 'Phase 2', vehicles: '200+', timeline: 'Q3 2029', cities: 'Doha, Al Wakrah', color: 'border-purple-500', textColor: 'text-purple-400' },
  { country: 'Kuwait', flag: 'KW', status: 'Phase 3', vehicles: '150+', timeline: 'Q1 2030', cities: 'Kuwait City', color: 'border-orange-500', textColor: 'text-orange-400' },
  { country: 'Bahrain', flag: 'BH', status: 'Phase 3', vehicles: '100+', timeline: 'Q3 2030', cities: 'Manama', color: 'border-pink-500', textColor: 'text-pink-400' },
  { country: 'Oman', flag: 'OM', status: 'Phase 3', vehicles: '100+', timeline: 'Q1 2031', cities: 'Muscat, Salalah', color: 'border-cyan-500', textColor: 'text-cyan-400' },
];

// ─── Financial Projections ───
const financialProjections = [
  { year: 'Year 1', vehicles: 500, subscribers: 425, monthlyRev: 1.7, annualRev: 20.4, grossMargin: '15%', netProfit: 2.0 },
  { year: 'Year 2', vehicles: 1500, subscribers: 1275, monthlyRev: 5.1, annualRev: 61.2, grossMargin: '18%', netProfit: 8.6 },
  { year: 'Year 3', vehicles: 4000, subscribers: 3400, monthlyRev: 13.6, annualRev: 163.2, grossMargin: '20%', netProfit: 28.6 },
];

export default function AjerPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Car },
    { id: 'vehicles', label: 'Vehicles', icon: Layers },
    { id: 'plans', label: 'Plans', icon: CreditCard },
    { id: 'how-it-works', label: 'How It Works', icon: Zap },
    { id: 'included', label: 'Included', icon: CheckCircle },
    { id: 'economics', label: 'Unit Economics', icon: Calculator },
    { id: 'revenue', label: 'Revenue', icon: Banknote },
    { id: 'market', label: 'Market', icon: Target },
    { id: 'competitors', label: 'Competitors', icon: Users },
    { id: 'ecosystem', label: 'Ecosystem', icon: Network },
    { id: 'fleet-portal', label: 'Fleet Portal', icon: Store },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket },
    { id: 'risks', label: 'Risks', icon: AlertTriangle },
    { id: 'gcc', label: 'GCC Expansion', icon: Globe },
    { id: 'financials', label: 'Financials', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* ═══════════ HERO SECTION ═══════════ */}
      <div className="bg-gradient-to-br from-[#0a1628] via-blue-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full mb-4">
              <Car className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-bold">Ajer - Vehicle Leasing &amp; Subscription</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Subscribe to Your <span className="text-blue-400">Perfect Ride</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-2">
              All-inclusive vehicle subscriptions from AED 2K-8K/month. Insurance, maintenance,
              registration, and roadside assistance included. Powered by Qist credit scoring.
            </p>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto">
              From economy daily drivers to luxury sedans and electric vehicles - flexible plans
              for every lifestyle, with a seamless lease-to-own pathway.
            </p>
          </div>

          {/* Hero Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {heroStats.map((stat, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className={`text-2xl sm:text-3xl font-black ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.suffix}</div>
              </div>
            ))}
          </div>

          {/* Quick Category Badges */}
          <div className="flex flex-wrap justify-center gap-2">
            {vehicleCategories.map((cat, i) => (
              <button
                key={i}
                onClick={() => { setActiveTab('vehicles'); setExpandedCategory(cat.name); }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${cat.bgColor} ${cat.textColor} border ${cat.borderColor} hover:scale-105 transition-transform`}
              >
                <cat.icon className="w-3 h-3" />
                {cat.name} {cat.monthlyRate} AED/mo
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════ NAVIGATION TABS ═══════════ */}
      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-2 gap-1 sm:gap-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white'
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

      {/* ═══════════ MAIN CONTENT ═══════════ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ─── OVERVIEW TAB ─── */}
        {activeTab === 'overview' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Value Proposition */}
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-xl p-4 sm:p-6 border-2 border-blue-500">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                Why Ajer?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-blue-500/30">
                  <div className="text-blue-400 font-bold mb-2">All-Inclusive Pricing</div>
                  <p className="text-sm text-slate-400">One monthly payment covers insurance, maintenance, registration, and roadside assistance. No hidden fees.</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-blue-500/30">
                  <div className="text-blue-400 font-bold mb-2">Qist-Powered Credit</div>
                  <p className="text-sm text-slate-400">90% credit model reuse from Qist means instant approvals, smarter risk pricing, and lower deposits for good credit.</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-blue-500/30">
                  <div className="text-blue-400 font-bold mb-2">Flexibility First</div>
                  <p className="text-sm text-slate-400">Month-to-month or 24-month lease-to-own. Swap vehicles, upgrade, or cancel with plans that fit your life.</p>
                </div>
              </div>
            </div>

            {/* Vehicle Category Preview */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Car className="w-5 h-5 text-blue-400" />
                Vehicle Categories
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {vehicleCategories.map((cat, i) => (
                  <div
                    key={i}
                    className={`${cat.bgColor} border ${cat.borderColor} rounded-xl p-3 sm:p-4 hover:scale-[1.03] transition-transform cursor-pointer`}
                    onClick={() => { setActiveTab('vehicles'); setExpandedCategory(cat.name); }}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center mb-3`}>
                      <cat.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className={`font-bold ${cat.textColor} text-sm`}>{cat.name}</h4>
                    <p className="text-slate-500 text-xs mb-1">{cat.model.split('/')[0]}</p>
                    <div className={`text-xs font-bold ${cat.textColor}`}>{cat.monthlyRate} AED/mo</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscription Plans Preview */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                Subscription Plans
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {subscriptionPlans.map((plan, i) => (
                  <div
                    key={i}
                    className={`bg-slate-800/50 rounded-xl p-4 border-2 ${plan.color} ${plan.popular ? 'ring-2 ring-blue-400/50' : ''} cursor-pointer hover:scale-[1.02] transition-transform`}
                    onClick={() => setActiveTab('plans')}
                  >
                    {plan.popular && (
                      <div className="text-xs font-bold text-blue-400 mb-2 flex items-center gap-1">
                        <Star className="w-3 h-3" /> Most Popular
                      </div>
                    )}
                    <plan.icon className={`w-6 h-6 ${plan.textColor} mb-2`} />
                    <h4 className={`font-bold ${plan.textColor} text-base`}>{plan.name}</h4>
                    <p className="text-slate-500 text-xs">{plan.duration}</p>
                    <div className="text-white font-bold text-lg mt-2">{plan.modifier}</div>
                    <p className="text-slate-500 text-xs">{plan.modifierNote}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick How It Works */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-400" />
                How It Works
              </h3>
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
                {howItWorksSteps.map((step, i) => (
                  <div key={i} className="text-center">
                    <div className={`w-10 h-10 rounded-full ${step.bg} flex items-center justify-center mx-auto mb-2`}>
                      <step.icon className={`w-5 h-5 ${step.color}`} />
                    </div>
                    <div className="text-xs text-slate-500">Step {step.step}</div>
                    <div className="text-xs font-medium text-white">{step.title}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* What is Included Preview */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {includedItems.map((item, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-3 text-center border border-slate-700/50">
                  <item.icon className={`w-6 h-6 ${item.color} mx-auto mb-2`} />
                  <div className="text-white font-medium text-xs">{item.item}</div>
                </div>
              ))}
            </div>

            {/* Market Snapshot */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-4 sm:p-6 border border-green-500/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-green-400" />
                Market Opportunity
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-green-400">{marketData.totalMarket}</div>
                  <div className="text-xs text-slate-400">UAE Leasing Market</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-blue-400">{marketData.growth}</div>
                  <div className="text-xs text-slate-400">Annual Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-purple-400">{marketData.expatLeasing}</div>
                  <div className="text-xs text-slate-400">Expats Lease Annually</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── VEHICLES TAB ─── */}
        {activeTab === 'vehicles' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-blue-500/10 rounded-xl p-4 sm:p-6 border border-blue-500/30 mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Vehicle Categories</h2>
              <p className="text-slate-400 text-sm">6 categories covering every need and budget. All prices are monthly subscription rates on the Standard (6-month) plan.</p>
            </div>

            {vehicleCategories.map((category, i) => (
              <div key={i} className={`${category.bgColor} border-2 rounded-xl overflow-hidden ${category.borderColor}`}>
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.name ? null : category.name)}
                  className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-base sm:text-xl font-bold ${category.textColor}`}>
                        {category.name} <span className="text-slate-400 text-sm">{category.arabic}</span>
                      </h3>
                      <p className="text-slate-400 text-sm">{category.model}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <div className={`text-lg font-bold ${category.textColor}`}>{category.monthlyRate} AED</div>
                      <div className="text-xs text-slate-500">per month</div>
                    </div>
                    {expandedCategory === category.name ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>
                {expandedCategory === category.name && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      <div className="bg-slate-900/50 rounded-lg p-4">
                        <h4 className="text-white font-bold mb-3 text-sm">Vehicle Specs</h4>
                        <div className="space-y-2">
                          {category.specs.map((spec, j) => (
                            <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                              <CheckCircle className={`w-4 h-4 ${category.textColor}`} />
                              {spec}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-4">
                        <h4 className="text-white font-bold mb-3 text-sm">Pricing</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="text-slate-400 text-xs">Monthly (Standard)</div>
                            <div className={`text-xl font-bold ${category.textColor}`}>{category.monthlyRate} AED</div>
                          </div>
                          <div>
                            <div className="text-slate-400 text-xs">Daily Equivalent</div>
                            <div className="text-white font-medium">{category.dailyRate} AED/day</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-4">
                        <h4 className="text-white font-bold mb-3 text-sm">Ideal For</h4>
                        <p className="text-slate-300 text-sm">{category.ideal}</p>
                        <div className="mt-3">
                          <span className={`text-xs px-2 py-1 rounded ${category.bgColor} ${category.textColor}`}>
                            Availability: {category.availability}
                          </span>
                        </div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-4">
                        <h4 className="text-white font-bold mb-3 text-sm">Plan Pricing</h4>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between text-slate-300">
                            <span>Flexi (+15%)</span>
                            <span className="text-white font-medium">{(parseFloat(category.monthlyRate.replace('~', '').replace(',', '')) * 1.15).toLocaleString('en', { maximumFractionDigits: 0 })} AED</span>
                          </div>
                          <div className="flex justify-between text-slate-300">
                            <span>Standard (base)</span>
                            <span className={`font-medium ${category.textColor}`}>{category.monthlyRate} AED</span>
                          </div>
                          <div className="flex justify-between text-slate-300">
                            <span>Long-Term (-10%)</span>
                            <span className="text-green-400 font-medium">{(parseFloat(category.monthlyRate.replace('~', '').replace(',', '')) * 0.9).toLocaleString('en', { maximumFractionDigits: 0 })} AED</span>
                          </div>
                          <div className="flex justify-between text-slate-300">
                            <span>Lease-to-Own</span>
                            <span className="text-[#c9a227] font-medium">{(parseFloat(category.monthlyRate.replace('~', '').replace(',', '')) * 1.08).toLocaleString('en', { maximumFractionDigits: 0 })} AED</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ─── PLANS TAB ─── */}
        {activeTab === 'plans' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-blue-500/10 rounded-xl p-4 sm:p-6 border border-blue-500/30">
              <h2 className="text-xl font-bold text-white mb-2">Subscription Plans</h2>
              <p className="text-slate-400 text-sm">Four flexible plans designed for different lifestyles and commitment levels. All plans include insurance, maintenance, registration, and roadside assistance.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {subscriptionPlans.map((plan, i) => (
                <div key={i} className={`bg-slate-800/50 rounded-xl p-5 sm:p-6 border-2 ${plan.color} ${plan.popular ? 'ring-2 ring-blue-400/50 relative' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" /> Most Popular
                    </div>
                  )}
                  <div className="text-center mb-4">
                    <plan.icon className={`w-8 h-8 ${plan.textColor} mx-auto mb-3`} />
                    <h3 className={`text-xl font-bold ${plan.textColor}`}>{plan.name}</h3>
                    <p className="text-slate-500 text-sm">{plan.duration}</p>
                  </div>
                  <div className="text-center mb-4 py-3 bg-slate-900/50 rounded-lg">
                    <div className="text-2xl font-black text-white">{plan.modifier}</div>
                    <div className="text-xs text-slate-400">{plan.modifierNote}</div>
                  </div>
                  <div className="space-y-2 mb-4">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle className={`w-4 h-4 ${plan.textColor} mt-0.5 shrink-0`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className={`text-center py-2 rounded-lg ${plan.bgColor}`}>
                    <span className={`text-xs font-medium ${plan.textColor}`}>{plan.example}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Plan Comparison Table */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Plan Comparison</h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full text-sm min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400">Feature</th>
                      <th className="text-center py-3 px-4 text-slate-300">Flexi</th>
                      <th className="text-center py-3 px-4 text-blue-400 font-bold">Standard</th>
                      <th className="text-center py-3 px-4 text-green-400">Long-Term</th>
                      <th className="text-center py-3 px-4 text-[#c9a227]">Lease-to-Own</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Duration</td>
                      <td className="py-3 px-4 text-center text-white">1 month</td>
                      <td className="py-3 px-4 text-center text-white">6 months</td>
                      <td className="py-3 px-4 text-center text-white">12 months</td>
                      <td className="py-3 px-4 text-center text-white">24 months</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Rate Modifier</td>
                      <td className="py-3 px-4 text-center text-red-400">+15%</td>
                      <td className="py-3 px-4 text-center text-blue-400">Base</td>
                      <td className="py-3 px-4 text-center text-green-400">-10%</td>
                      <td className="py-3 px-4 text-center text-[#c9a227]">+8% (equity)</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Vehicle Swaps</td>
                      <td className="py-3 px-4 text-center text-white">Unlimited</td>
                      <td className="py-3 px-4 text-center text-white">1 free</td>
                      <td className="py-3 px-4 text-center text-white">2 free</td>
                      <td className="py-3 px-4 text-center text-white">1 free</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Security Deposit</td>
                      <td className="py-3 px-4 text-center text-white">2 months</td>
                      <td className="py-3 px-4 text-center text-white">1 month</td>
                      <td className="py-3 px-4 text-center text-white">1 month</td>
                      <td className="py-3 px-4 text-center text-white">0.5 month</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Km Allowance</td>
                      <td className="py-3 px-4 text-center text-white">2,000 km</td>
                      <td className="py-3 px-4 text-center text-white">2,500 km</td>
                      <td className="py-3 px-4 text-center text-white">3,000 km</td>
                      <td className="py-3 px-4 text-center text-white">3,000 km</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-300">Builds Equity</td>
                      <td className="py-3 px-4 text-center text-slate-500">No</td>
                      <td className="py-3 px-4 text-center text-slate-500">No</td>
                      <td className="py-3 px-4 text-center text-slate-500">No</td>
                      <td className="py-3 px-4 text-center text-[#c9a227] font-bold">Yes (30%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ─── HOW IT WORKS TAB ─── */}
        {activeTab === 'how-it-works' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-blue-500/10 rounded-xl p-4 sm:p-6 border border-blue-500/30">
              <h2 className="text-xl font-bold text-white mb-2">How Ajer Works</h2>
              <p className="text-slate-400 text-sm">From browsing to driving in as little as 24 hours. Qist credit model reuse means instant decisions for existing Nuqta users.</p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {howItWorksSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50 h-full">
                    <div className={`w-12 h-12 rounded-full ${step.bg} flex items-center justify-center mx-auto mb-3`}>
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <div className={`text-xs ${step.color} font-bold mb-1`}>Step {step.step}</div>
                    <div className="text-white font-bold text-sm mb-2">{step.title}</div>
                    <p className="text-xs text-slate-400">{step.description}</p>
                  </div>
                  {i < 5 && (
                    <ChevronRight className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                  )}
                </div>
              ))}
            </div>

            {/* Credit Check Detail */}
            <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/10 rounded-xl p-4 sm:p-6 border-2 border-purple-500">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-400" />
                Credit Check - Qist ML Reuse (90%)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-purple-400 font-bold mb-2">Same Data Sources</div>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>- UAE Credit Bureau (Al Etihad)</li>
                    <li>- Bank transaction history</li>
                    <li>- Employment verification</li>
                    <li>- Nuqta internal payment data</li>
                  </ul>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-purple-400 font-bold mb-2">Adapted Parameters</div>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>- Vehicle-specific risk weighting</li>
                    <li>- Subscription length factor</li>
                    <li>- Driving history check</li>
                    <li>- Deposit calibration by score</li>
                  </ul>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-purple-400 font-bold mb-2">Decision Speed</div>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>- Existing Qist users: Instant</li>
                    <li>- New Nuqta users: Under 5 min</li>
                    <li>- Manual review: Under 4 hours</li>
                    <li>- Approval rate target: 65%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Typical Timeline</h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-blue-500/30">
                  <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-white font-bold">5 min</div>
                  <div className="text-xs text-slate-400">Browse & Select</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-green-500/30">
                  <Zap className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-white font-bold">Instant - 4hr</div>
                  <div className="text-xs text-slate-400">Credit Decision</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-purple-500/30">
                  <FileCheck className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-bold">10 min</div>
                  <div className="text-xs text-slate-400">Digital Sign</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-[#c9a227]/30">
                  <Car className="w-6 h-6 text-[#c9a227] mx-auto mb-2" />
                  <div className="text-white font-bold">Same Day</div>
                  <div className="text-xs text-slate-400">Pickup / Delivery</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── INCLUDED TAB ─── */}
        {activeTab === 'included' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-green-500/10 rounded-xl p-4 sm:p-6 border border-green-500/30">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Everything Included
              </h2>
              <p className="text-slate-400 text-sm">One monthly payment. No surprises. Every Ajer subscription includes these services at no extra cost.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {includedItems.map((item, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <h3 className="text-white font-bold">{item.item}</h3>
                  </div>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* What is NOT included */}
            <div className="bg-red-500/10 rounded-xl p-4 sm:p-6 border border-red-500/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                Not Included (Customer Responsibility)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 border border-red-500/20">
                  <Fuel className="w-5 h-5 text-red-400 mb-2" />
                  <div className="text-white font-medium text-sm">Fuel / Charging</div>
                  <p className="text-xs text-slate-400">Customer pays for fuel or EV charging</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 border border-red-500/20">
                  <Gauge className="w-5 h-5 text-red-400 mb-2" />
                  <div className="text-white font-medium text-sm">Excess Kilometers</div>
                  <p className="text-xs text-slate-400">0.50 AED/km beyond monthly allowance</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 border border-red-500/20">
                  <AlertTriangle className="w-5 h-5 text-red-400 mb-2" />
                  <div className="text-white font-medium text-sm">Traffic Fines</div>
                  <p className="text-xs text-slate-400">All fines are customer responsibility</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 border border-red-500/20">
                  <MapPin className="w-5 h-5 text-red-400 mb-2" />
                  <div className="text-white font-medium text-sm">Salik Tolls</div>
                  <p className="text-xs text-slate-400">Toll charges billed to customer</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── UNIT ECONOMICS TAB ─── */}
        {activeTab === 'economics' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-purple-500/10 rounded-xl p-4 sm:p-6 border border-purple-500/30">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-purple-400" />
                Unit Economics
              </h2>
              <p className="text-slate-400 text-sm">Per-vehicle economics with 18-month break-even and 15-20% target gross margin.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {unitEconomics.map((item, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <div className={`text-xl sm:text-2xl font-black ${item.color}`}>{item.value}</div>
                  <div className="text-white font-medium text-sm mt-1">{item.metric}</div>
                  <div className="text-xs text-slate-500 mt-1">{item.note}</div>
                </div>
              ))}
            </div>

            {/* Break-Even Waterfall */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Per-Vehicle Break-Even Analysis</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                  <span className="text-slate-300">Vehicle Acquisition Cost</span>
                  <span className="text-red-400 font-bold">-60,000 AED</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                  <span className="text-slate-300">Monthly Subscription Revenue</span>
                  <span className="text-green-400 font-bold">+4,000 AED/mo</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                  <span className="text-slate-300">Monthly Operating Costs (insurance, maintenance, depreciation)</span>
                  <span className="text-red-400 font-bold">-1,200 AED/mo</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                  <span className="text-slate-300">Net Monthly Cash Flow</span>
                  <span className="text-green-400 font-bold">+2,800 AED/mo</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                  <span className="text-slate-300">Additional Revenue (excess km, fees)</span>
                  <span className="text-green-400 font-bold">+530 AED/mo avg</span>
                </div>
                <div className="flex items-center justify-between py-3 bg-green-500/10 rounded-lg px-3">
                  <span className="text-white font-bold">Break-Even Point</span>
                  <span className="text-green-400 font-black text-xl">18 months</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                  <span className="text-slate-300">Residual Value at 36 months</span>
                  <span className="text-blue-400 font-bold">~25,000 AED</span>
                </div>
                <div className="flex items-center justify-between py-3 bg-purple-500/10 rounded-lg px-3">
                  <span className="text-white font-bold">Total 3-Year Profit Per Vehicle</span>
                  <span className="text-purple-400 font-black text-xl">~85,000 AED</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── REVENUE MODEL TAB ─── */}
        {activeTab === 'revenue' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-green-500/10 rounded-xl p-4 sm:p-6 border border-green-500/30">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Banknote className="w-5 h-5 text-green-400" />
                Revenue Model
              </h2>
              <p className="text-slate-400 text-sm">Diversified revenue streams beyond core subscriptions, with 6 distinct income sources.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {revenueStreams.map((stream, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <stream.icon className={`w-5 h-5 ${stream.color}`} />
                      <h3 className="text-white font-bold text-sm">{stream.stream}</h3>
                    </div>
                    <span className={`text-lg font-black ${stream.color}`}>{stream.share}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-2">{stream.description}</p>
                  <div className={`text-xs font-medium ${stream.color} bg-slate-900/50 rounded px-2 py-1 inline-block`}>
                    {stream.amount}
                  </div>
                </div>
              ))}
            </div>

            {/* Revenue Mix Visual */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Revenue Mix Breakdown</h3>
              <div className="space-y-3">
                {revenueStreams.map((stream, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-slate-300">{stream.stream}</span>
                      <span className={`text-sm font-bold ${stream.color}`}>{stream.share}</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${
                          i === 0 ? 'from-blue-500 to-blue-400' :
                          i === 1 ? 'from-green-500 to-green-400' :
                          i === 2 ? 'from-purple-500 to-purple-400' :
                          i === 3 ? 'from-orange-500 to-orange-400' :
                          i === 4 ? 'from-red-500 to-red-400' :
                          'from-[#c9a227] to-amber-400'
                        }`}
                        style={{ width: stream.share }}
                      />
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
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-4 sm:p-6 border-2 border-green-500">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Target className="w-5 h-5 text-green-400" />
                {marketData.headline}
              </h2>
              <p className="text-slate-400 text-sm mb-6">A massive, growing market driven by expat population, preference for flexibility, and rising vehicle costs.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {marketData.points.map((point, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 text-center">
                    <point.icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="text-xl font-black text-white">{point.stat}</div>
                    <div className="text-xs text-slate-400 mt-1">{point.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Drivers */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Key Market Drivers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-green-500/20">
                  <h4 className="text-green-400 font-bold mb-2">Expat Majority (70%)</h4>
                  <p className="text-sm text-slate-400">Most UAE residents are expats on 2-3 year contracts. Buying a car is risky when you may leave. Subscriptions are the perfect fit.</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-blue-500/20">
                  <h4 className="text-blue-400 font-bold mb-2">Rising Vehicle Costs</h4>
                  <p className="text-sm text-slate-400">New car prices up 20% since 2020. Monthly payments on a new car purchase often exceed AED 3,000 with insurance and maintenance on top.</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-purple-500/20">
                  <h4 className="text-purple-400 font-bold mb-2">Subscription Economy Growth</h4>
                  <p className="text-sm text-slate-400">45% of millennials and Gen-Z prefer subscription models over ownership. Vehicle subscriptions growing 3x faster than traditional leasing.</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-[#c9a227]/20">
                  <h4 className="text-[#c9a227] font-bold mb-2">EV Transition</h4>
                  <p className="text-sm text-slate-400">UAE targeting 50% EV sales by 2030. Many consumers want to try EVs before committing. Subscriptions lower the barrier to EV adoption.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── COMPETITORS TAB ─── */}
        {activeTab === 'competitors' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-orange-500/10 rounded-xl p-4 sm:p-6 border border-orange-500/30">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-400" />
                Competitor Analysis
              </h2>
              <p className="text-slate-400 text-sm">Ajer enters a growing market with a unique ecosystem advantage that no competitor can replicate.</p>
            </div>

            {/* Competitor Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {competitors.map((comp, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                  <h3 className="text-white font-bold text-lg mb-1">{comp.name}</h3>
                  <p className="text-slate-500 text-xs mb-3">{comp.focus}</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-green-400 text-xs font-medium">Strength:</span>
                      <p className="text-slate-300">{comp.strength}</p>
                    </div>
                    <div>
                      <span className="text-red-400 text-xs font-medium">Weakness:</span>
                      <p className="text-slate-300">{comp.weakness}</p>
                    </div>
                    <div>
                      <span className="text-blue-400 text-xs font-medium">Pricing:</span>
                      <p className="text-slate-300">{comp.pricing}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ajer Advantages */}
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-xl p-4 sm:p-6 border-2 border-blue-500">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-400" />
                Ajer Competitive Advantages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ajerAdvantages.map((adv, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <adv.icon className="w-5 h-5 text-blue-400" />
                      <h4 className="text-blue-400 font-bold text-sm">{adv.advantage}</h4>
                    </div>
                    <p className="text-slate-400 text-xs">{adv.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitive Matrix */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Feature Comparison</h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full text-xs sm:text-sm min-w-[600px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-3 text-slate-400">Feature</th>
                      <th className="text-center py-3 px-3 text-blue-400 font-bold">Ajer</th>
                      <th className="text-center py-3 px-3 text-slate-300">Invygo</th>
                      <th className="text-center py-3 px-3 text-slate-300">Udrive</th>
                      <th className="text-center py-3 px-3 text-slate-300">Hertz</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'ML Credit Scoring', ajer: true, invygo: false, udrive: false, hertz: false },
                      { feature: 'Ecosystem Rewards', ajer: true, invygo: false, udrive: false, hertz: false },
                      { feature: 'Lease-to-Own', ajer: true, invygo: false, udrive: false, hertz: false },
                      { feature: 'EV Fleet', ajer: true, invygo: true, udrive: true, hertz: false },
                      { feature: 'Vehicle Delivery', ajer: true, invygo: true, udrive: false, hertz: false },
                      { feature: 'Flexible Plans', ajer: true, invygo: true, udrive: true, hertz: false },
                      { feature: 'Integrated Payments', ajer: true, invygo: false, udrive: false, hertz: false },
                      { feature: 'Driver Supply Channel', ajer: true, invygo: false, udrive: false, hertz: false },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-2 px-3 text-slate-300">{row.feature}</td>
                        <td className="py-2 px-3 text-center">{row.ajer ? <CheckCircle className="w-4 h-4 text-green-400 mx-auto" /> : <span className="text-slate-600">-</span>}</td>
                        <td className="py-2 px-3 text-center">{row.invygo ? <CheckCircle className="w-4 h-4 text-green-400 mx-auto" /> : <span className="text-slate-600">-</span>}</td>
                        <td className="py-2 px-3 text-center">{row.udrive ? <CheckCircle className="w-4 h-4 text-green-400 mx-auto" /> : <span className="text-slate-600">-</span>}</td>
                        <td className="py-2 px-3 text-center">{row.hertz ? <CheckCircle className="w-4 h-4 text-green-400 mx-auto" /> : <span className="text-slate-600">-</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ─── ECOSYSTEM TAB ─── */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/10 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Network className="w-5 h-5 text-[#c9a227]" />
                Nuqta Ecosystem Integration
              </h2>
              <p className="text-slate-400 text-sm">Ajer reuses infrastructure and data from across the Nuqta ecosystem, reducing build time and cost while delivering a superior customer experience.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {ecosystemIntegration.map((item, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                      <h3 className={`font-bold ${item.color}`}>{item.product}</h3>
                    </div>
                    <span className="text-xs font-bold bg-green-500/20 text-green-400 px-2 py-1 rounded">
                      {item.reuse} reuse
                    </span>
                  </div>
                  <p className="text-white text-sm mb-2">{item.integration}</p>
                  <p className="text-emerald-400 text-xs mb-3">{item.benefit}</p>
                  <div className="bg-slate-900/50 rounded-lg p-3">
                    <p className="text-xs text-slate-400">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Ecosystem Flow Diagram */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Customer Journey Across Ecosystem</h3>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {[
                  { step: 'Sign Up', desc: 'Nuqta account creation', color: 'text-blue-400', bg: 'bg-blue-500/20' },
                  { step: 'Credit Check', desc: 'Qist ML scoring (instant)', color: 'text-purple-400', bg: 'bg-purple-500/20' },
                  { step: 'Subscribe', desc: 'NuqtaPay auto-debit setup', color: 'text-green-400', bg: 'bg-green-500/20' },
                  { step: 'Deliver', desc: 'Wasil vehicle delivery', color: 'text-orange-400', bg: 'bg-orange-500/20' },
                  { step: 'Earn', desc: 'Nuqta coins every month', color: 'text-[#c9a227]', bg: 'bg-[#c9a227]/20' },
                ].map((s, i) => (
                  <div key={i} className="relative">
                    <div className={`${s.bg} rounded-xl p-4 text-center border border-slate-700/50`}>
                      <div className={`text-sm font-bold ${s.color} mb-1`}>{s.step}</div>
                      <p className="text-xs text-slate-400">{s.desc}</p>
                    </div>
                    {i < 4 && (
                      <ChevronRight className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── FLEET PORTAL TAB ─── */}
        {activeTab === 'fleet-portal' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-violet-500/10 rounded-xl p-4 sm:p-6 border border-violet-500/30">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Store className="w-5 h-5 text-violet-400" />
                Fleet Partner Portal
              </h2>
              <p className="text-slate-400 text-sm">Built on the Merchant Portal base architecture (70% code reuse). Fleet partners manage their vehicles, track earnings, and monitor performance.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {partnerPortalFeatures.map((feature, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-violet-500/30 transition-colors">
                  <feature.icon className="w-8 h-8 text-violet-400 mb-3" />
                  <h3 className="text-white font-bold text-sm mb-2">{feature.feature}</h3>
                  <p className="text-slate-400 text-xs">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Portal Tech Stack */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Portal Architecture</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-violet-500/20">
                  <h4 className="text-violet-400 font-bold mb-2">Frontend (Reused)</h4>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>- Merchant Portal component library</li>
                    <li>- Dashboard layout & navigation</li>
                    <li>- Notification system</li>
                    <li>- Analytics charts & tables</li>
                  </ul>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-violet-500/20">
                  <h4 className="text-violet-400 font-bold mb-2">Backend (Adapted)</h4>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>- Vehicle inventory API (new)</li>
                    <li>- Booking management API (new)</li>
                    <li>- Settlement engine (reused)</li>
                    <li>- User auth & roles (reused)</li>
                  </ul>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-violet-500/20">
                  <h4 className="text-violet-400 font-bold mb-2">Integrations</h4>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>- Telematics / GPS tracking</li>
                    <li>- Insurance API</li>
                    <li>- Maintenance scheduler</li>
                    <li>- NuqtaPay payouts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── ROADMAP TAB ─── */}
        {activeTab === 'roadmap' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-blue-500/10 rounded-xl p-4 sm:p-6 border border-blue-500/30">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-blue-400" />
                Product Roadmap
              </h2>
              <p className="text-slate-400 text-sm">Four-phase rollout from catalog launch to GCC expansion and EV fleet.</p>
            </div>

            {roadmapPhases.map((phase, i) => (
              <div key={i} className={`${phase.bgColor} rounded-xl p-4 sm:p-6 border-2 ${phase.color}`}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                      phase.status === 'planned' ? 'bg-green-500' : 'bg-blue-500'
                    }`}>
                      {phase.phase.replace('Phase ', '')}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{phase.phase}: {phase.title}</h3>
                      <span className="text-slate-400 text-sm">{phase.timeline}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    phase.status === 'planned' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {phase.milestones.map((milestone, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className={`w-4 h-4 ${phase.textColor} shrink-0`} />
                      {milestone}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ─── RISKS TAB ─── */}
        {activeTab === 'risks' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-red-500/10 rounded-xl p-4 sm:p-6 border border-red-500/30">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                Risk Analysis
              </h2>
              <p className="text-slate-400 text-sm">Key risks identified with mitigation strategies. Vehicle leasing carries inherent asset risk that requires careful management.</p>
            </div>

            {risks.map((risk, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden">
                <button
                  onClick={() => setExpandedRisk(expandedRisk === risk.risk ? null : risk.risk)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <risk.icon className={`w-6 h-6 ${risk.color}`} />
                    <div>
                      <h3 className="text-white font-bold">{risk.risk}</h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                        risk.severity === 'High' ? 'bg-red-500/20 text-red-400' :
                        risk.severity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {risk.severity} Severity
                      </span>
                    </div>
                  </div>
                  {expandedRisk === risk.risk ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                {expandedRisk === risk.risk && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                        <h4 className="text-red-400 font-bold text-sm mb-2">Impact</h4>
                        <p className="text-slate-300 text-sm">{risk.impact}</p>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                        <h4 className="text-green-400 font-bold text-sm mb-2">Mitigation</h4>
                        <p className="text-slate-300 text-sm">{risk.mitigation}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ─── GCC EXPANSION TAB ─── */}
        {activeTab === 'gcc' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/20 via-blue-500/10 to-emerald-500/10 rounded-xl p-4 sm:p-8 border-2 border-[#c9a227]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#c9a227] to-amber-500 flex items-center justify-center">
                  <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-3xl font-black text-white">GCC Expansion Plan</h2>
                  <p className="text-[#c9a227] text-sm sm:text-lg">Vehicle subscriptions across all 6 GCC nations by 2031</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gccExpansion.map((country, i) => (
                <div key={i} className={`bg-slate-800/50 rounded-xl p-5 border-2 ${country.color}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${country.textColor} bg-slate-900/50 font-bold text-sm`}>
                        {country.flag}
                      </div>
                      <h4 className="text-white font-bold">{country.country}</h4>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      country.status === 'Launch' ? 'bg-emerald-500/20 text-emerald-400' :
                      country.status === 'Phase 2' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {country.status}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Fleet Target</span>
                      <span className={`font-medium ${country.textColor}`}>{country.vehicles}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Cities</span>
                      <span className="text-white font-medium text-xs text-right">{country.cities}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Launch</span>
                      <span className="text-white font-medium">{country.timeline}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* GCC Total Opportunity */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">GCC Total Addressable Market</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-black text-green-400">$8B+</div>
                  <div className="text-xs text-slate-400">GCC Vehicle Leasing Market</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-black text-blue-400">55M+</div>
                  <div className="text-xs text-slate-400">GCC Population</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-black text-purple-400">12M+</div>
                  <div className="text-xs text-slate-400">GCC Expat Population</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-black text-[#c9a227]">2,050+</div>
                  <div className="text-xs text-slate-400">Target Fleet by 2031</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── FINANCIALS TAB ─── */}
        {activeTab === 'financials' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-4 sm:p-6 border-2 border-green-500">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-400" />
                Financial Projections
              </h2>
              <p className="text-slate-400 text-sm">3-year projections based on 500-vehicle Y1 fleet with 85% utilization target and 15-20% gross margins.</p>
            </div>

            {/* Financial Table */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full text-sm min-w-[500px]">
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
                      <td className="py-3 px-4 text-slate-300">Fleet Size</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-bold">{proj.vehicles.toLocaleString()}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Active Subscribers</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-blue-400 font-bold">{proj.subscribers.toLocaleString()}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Monthly Revenue (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-violet-400 font-bold">{proj.monthlyRev}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Annual Revenue (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-green-400 font-bold">{proj.annualRev}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Gross Margin</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-cyan-400 font-bold">{proj.grossMargin}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-300">Net Profit (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-emerald-400 font-bold">{proj.netProfit}M</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Financial Assumptions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  Revenue Assumptions
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-300">
                    <span>Avg subscription</span>
                    <span className="text-green-400 font-medium">4,000 AED/mo</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Fleet utilization</span>
                    <span className="text-green-400 font-medium">85%</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Ancillary revenue</span>
                    <span className="text-green-400 font-medium">+25% of base</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Avg tenure</span>
                    <span className="text-green-400 font-medium">12 months</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-400" />
                  Cost Assumptions
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-300">
                    <span>Vehicle cost (avg)</span>
                    <span className="text-orange-400 font-medium">60,000 AED</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Insurance (annual)</span>
                    <span className="text-orange-400 font-medium">4,500 AED</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Maintenance (annual)</span>
                    <span className="text-orange-400 font-medium">3,600 AED</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Depreciation (annual)</span>
                    <span className="text-orange-400 font-medium">15%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Summary */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/10 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <CircleDollarSign className="w-5 h-5 text-[#c9a227]" />
                Investment Requirements
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-xl font-black text-[#c9a227]">30M AED</div>
                  <div className="text-xs text-slate-400">Y1 Fleet Investment</div>
                  <div className="text-xs text-slate-500">(500 vehicles x 60K)</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-xl font-black text-blue-400">5M AED</div>
                  <div className="text-xs text-slate-400">Tech & Operations</div>
                  <div className="text-xs text-slate-500">(Platform, staff, marketing)</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-xl font-black text-green-400">35M AED</div>
                  <div className="text-xs text-slate-400">Total Y1 Capital</div>
                  <div className="text-xs text-slate-500">(Fleet + operations)</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-xl font-black text-purple-400">18 mo</div>
                  <div className="text-xs text-slate-400">Payback Period</div>
                  <div className="text-xs text-slate-500">(Per vehicle basis)</div>
                </div>
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
