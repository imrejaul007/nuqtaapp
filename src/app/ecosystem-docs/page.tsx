'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Crown, Wallet, Home, Truck, ArrowLeftRight, Gamepad2,
  Car, Plane, Package, Building2, Users, Globe, Target,
  TrendingUp, BarChart3, Shield, Award, Rocket, CheckCircle,
  ArrowRight, ChevronRight, ChevronDown, Star, DollarSign, Briefcase,
  MapPin, Calendar, Zap, Heart, LineChart, PieChart,
  Network, Layers, CircleDollarSign, Handshake, Eye,
  Lightbulb, Lock, UserCheck, Smartphone, BadgePercent,
  CreditCard, Send, ShoppingBag, Coins, Gift, RefreshCw,
  Timer, Phone, Mail, Stethoscope, GraduationCap, Palmtree,
  Wifi, Sparkles, Brain, AlertTriangle, Store, Receipt
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';
import {
  NuqtaPlusLogo, QistLogo, SakinLogo, WasilLogo,
  HawilLogo, RakabLogo, GamificationLogo, NuqtaMainLogo,
  SafarLogo, AjerLogo, EcosystemLogo
} from '@/components/CompanyLogos';

// Navigation Sections
const sections = [
  { id: 'overview', label: 'Overview', icon: Eye },
  { id: 'products', label: 'Product Catalog', icon: Package },
  { id: 'integrations', label: 'Integrations', icon: Network },
  { id: 'user-journeys', label: 'User Journeys', icon: Users },
  { id: 'technical', label: 'Technical Architecture', icon: Layers },
  { id: 'revenue', label: 'Revenue Model', icon: CircleDollarSign },
  { id: 'expansion', label: 'GCC Expansion', icon: Globe },
  { id: 'roadmap', label: 'Product Roadmap', icon: Rocket },
];

// Product Details
const productDetails = [
  {
    id: 'nuqta-plus',
    name: 'Nuqta+',
    arabic: 'نقطة+',
    tagline: 'Membership & Rewards Platform',
    logo: NuqtaPlusLogo,
    icon: Crown,
    color: 'from-[#c9a227] to-amber-600',
    borderColor: 'border-[#c9a227]',
    description: 'Premium membership program that unlocks benefits across the entire Nuqta ecosystem.',
    pricing: '99 AED/month or 999 AED/year',
    benefits: [
      '0% BNPL fees on Qist purchases',
      '5% extra coins on all transactions',
      'Priority customer support',
      'Wasil+ free delivery on orders 50+ AED',
      'Exclusive merchant deals & early access',
      'Sakin rent financing at lower rates',
      'Hawil premium exchange rates',
    ],
    metrics: { target: '50K members Y1', revenue: '5.9M AED/year', ltv: '2,500 AED' },
    integrations: ['Qist', 'Sakin', 'Wasil', 'Hawil', 'Rakab', 'Gamification', 'Safar', 'Ajer'],
    techStack: 'React Native, Node.js, PostgreSQL, Redis',
  },
  {
    id: 'qist',
    name: 'Qist',
    arabic: 'قسط',
    tagline: 'Buy Now Pay Later',
    logo: QistLogo,
    icon: Wallet,
    color: 'from-violet-500 to-purple-600',
    borderColor: 'border-violet-500',
    description: 'Sharia-compliant installment payment solution for purchases up to 50,000 AED.',
    pricing: '0% for Nuqta+ members, 3-5% for others',
    benefits: [
      'Split payments over 3-12 months',
      'Instant approval via AI scoring',
      'Works at 500+ partner merchants',
      'Build credit score in UAE',
      'No hidden fees or interest',
      'Flexible payment schedules',
    ],
    metrics: { limit: '50K AED', approval: '85%', defaultRate: '<2%' },
    integrations: ['Nuqta+', 'Sakin', 'Wasil', 'Safar', 'Ajer'],
    techStack: 'AI/ML scoring, Real-time decisioning, Bank-grade security',
  },
  {
    id: 'sakin',
    name: 'Sakin',
    arabic: 'ساكن',
    tagline: 'Rent Financing',
    logo: SakinLogo,
    icon: Home,
    color: 'from-emerald-500 to-green-600',
    borderColor: 'border-emerald-500',
    description: 'Finance your security deposit and first rent payment over 12 months.',
    pricing: '3% flat fee, spread over 12 months',
    benefits: [
      'Finance up to 68,000 AED (deposit + rent)',
      'Direct payment to landlord',
      'No traditional credit history required',
      'Wasil welcome kit for new tenants',
      'Move-in assistance coordination',
      'Landlord verification included',
    ],
    metrics: { avgLoan: '45K AED', term: '12 months', defaultRate: '<3%' },
    integrations: ['Qist', 'Wasil', 'Nuqta+'],
    techStack: 'Document verification, Landlord portal, Escrow integration',
  },
  {
    id: 'wasil',
    name: 'Wasil',
    arabic: 'واصل',
    tagline: 'Quick Commerce',
    logo: WasilLogo,
    icon: Truck,
    color: 'from-orange-500 to-red-500',
    borderColor: 'border-orange-500',
    description: '60-minute delivery across 12 categories with Nuqta wallet integration.',
    pricing: 'Delivery: 5-15 AED, Free for Wasil+ (Nuqta+ members)',
    benefits: [
      'Groceries, pharmacy, F&B delivery',
      'Electronics & home essentials',
      'Pay with Nuqta wallet or coins',
      'Qist BNPL for orders 500+ AED',
      'Real-time tracking',
      'Scheduled delivery slots',
    ],
    metrics: { categories: '12', deliveryTime: '60 min', coverage: 'UAE-wide' },
    integrations: ['Nuqta+', 'Qist', 'Hawil', 'Ajer'],
    techStack: 'Route optimization, Dark store network, Driver app',
  },
  {
    id: 'hawil',
    name: 'Hawil',
    arabic: 'حوّل',
    tagline: 'Remittance & Travel Card',
    logo: HawilLogo,
    icon: ArrowLeftRight,
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500',
    description: 'Send money home at Google rate with 0% FX markup. Get the Hawil Card for tourists.',
    pricing: '0.5% transfer fee (0.25% for Nuqta+ members)',
    benefits: [
      'Google rate exchange - 0% markup',
      'Hawil Card for tourists (physical + virtual)',
      'Send to 80+ countries instantly',
      'Multi-currency wallet',
      'Earn coins on every transfer',
      'Airport pickup for Hawil Card',
    ],
    metrics: { corridors: '8+ major', volume: '$50B+ corridor', savingsVsBank: '3-5%' },
    integrations: ['Rakab', 'Wasil', 'Safar', 'Ajer', 'Nuqta+'],
    techStack: 'Banking API integrations, SWIFT/local rails, KYC/AML compliance',
  },
  {
    id: 'rakab',
    name: 'Rakab',
    arabic: 'ركب',
    tagline: 'Ride-Hailing',
    logo: RakabLogo,
    icon: Car,
    color: 'from-green-500 to-emerald-600',
    borderColor: 'border-green-500',
    description: 'Ride-hailing with Google rate payments and 5% Nuqta coins back.',
    pricing: 'Standard rides + 5% coins back',
    benefits: [
      'Pay with Hawil Card at Google rate',
      '5% coins on every ride',
      '85% driver commission (highest in UAE)',
      'Tourist-first features (language, landmarks)',
      'Airport pickup integration',
      'Corporate accounts available',
    ],
    metrics: { drivers: '1,000+ target', coverage: 'Dubai first', commission: '15%' },
    integrations: ['Hawil', 'Nuqta+', 'Safar', 'Gamification'],
    techStack: 'Mapping, Driver matching, Surge pricing, ETA prediction',
  },
  {
    id: 'gamification',
    name: 'Gamification',
    arabic: 'ألعاب',
    tagline: 'Engagement Engine',
    logo: GamificationLogo,
    icon: Gamepad2,
    color: 'from-pink-500 to-rose-500',
    borderColor: 'border-pink-500',
    description: 'Earn coins, level up, compete on leaderboards across all products.',
    pricing: 'Free (drives engagement across ecosystem)',
    benefits: [
      '10 levels with increasing rewards',
      '50+ achievement badges',
      'Daily & weekly challenges',
      'Referral bonus system',
      'Leaderboard competitions',
      'Seasonal events & campaigns',
    ],
    metrics: { levels: '10', badges: '50+', retentionLift: '+40%' },
    integrations: ['All 9 products'],
    techStack: 'Event-driven architecture, Real-time leaderboards, Push notifications',
  },
  {
    id: 'safar',
    name: 'Safar',
    arabic: 'سفر',
    tagline: 'Travel Services',
    logo: SafarLogo,
    icon: Plane,
    color: 'from-cyan-500 to-teal-600',
    borderColor: 'border-cyan-500',
    description: 'Complete travel platform: visa processing, flights, hotels, and experiences.',
    pricing: 'Visa: from 99 AED, Flights/Hotels: 8-15% commission',
    benefits: [
      'Visa processing for 150+ countries',
      'Flights at Google rate exchange',
      'Hotels with up to 30% off for Nuqta+ members',
      'Tour packages & experiences',
      'Qist BNPL for travel',
      'Travel insurance add-on',
    ],
    metrics: { destinations: '150+', visaApproval: '98%', commission: '8-15%' },
    integrations: ['Qist', 'Hawil', 'Nuqta+', 'Gamification'],
    techStack: 'OTA integrations, Visa processing workflow, Booking engine',
  },
  {
    id: 'ajer',
    name: 'Ajer',
    arabic: 'أجر',
    tagline: 'Rental Marketplace',
    logo: AjerLogo,
    icon: Package,
    color: 'from-violet-500 to-purple-600',
    borderColor: 'border-violet-500',
    description: 'Rent anything: cars, electronics, fashion, baby gear & more.',
    pricing: '15-25% platform commission',
    benefits: [
      'Rent instead of buy - save 70-95%',
      '8 categories (vehicles, electronics, fashion, etc.)',
      'List your items & earn passive income',
      'Wasil delivery integration',
      'Insurance & damage protection',
      'Verified renters & owners',
    ],
    metrics: { categories: '8', items: '10K+ target', savings: '70-95%' },
    integrations: ['Wasil', 'Qist', 'Hawil', 'Nuqta+'],
    techStack: 'Two-sided marketplace, Escrow payments, Damage claims',
  },
];

// Cross-Product Synergies
const synergies = [
  {
    from: 'Hawil',
    to: 'Rakab',
    synergy: 'Tourists pay for rides at Google rate with Hawil Card',
    value: 'Save 3-5% vs card FX fees',
  },
  {
    from: 'Sakin',
    to: 'Wasil',
    synergy: 'New tenants get Wasil welcome kit with essentials',
    value: 'Immediate cross-sell, higher activation',
  },
  {
    from: 'Nuqta+',
    to: 'Qist',
    synergy: '0% BNPL fees for members',
    value: 'Drives membership conversion',
  },
  {
    from: 'Safar',
    to: 'Hawil',
    synergy: 'Book travel, get Hawil Card for destination spending',
    value: 'End-to-end travel solution',
  },
  {
    from: 'Ajer',
    to: 'Wasil',
    synergy: 'Rent items delivered via Wasil network',
    value: 'Convenience, faster fulfillment',
  },
  {
    from: 'Gamification',
    to: 'All Products',
    synergy: 'Cross-product achievements & coins',
    value: '40% retention lift',
  },
];

// User Journey Examples
const userJourneys = [
  {
    persona: 'Tourist from Europe',
    icon: Plane,
    color: 'text-blue-400',
    journey: [
      { step: 'Pre-Arrival', action: 'Book UAE visa via Safar', product: 'Safar' },
      { step: 'Landing', action: 'Pick up Hawil Card at airport', product: 'Hawil' },
      { step: 'Transport', action: 'Book Rakab ride to hotel (5% coins)', product: 'Rakab' },
      { step: 'Stay', action: 'Short-term apartment via Sakin Stays', product: 'Sakin' },
      { step: 'Daily Needs', action: 'Order groceries via Wasil', product: 'Wasil' },
      { step: 'Experiences', action: 'Book desert safari via Safar', product: 'Safar' },
      { step: 'Souvenirs', action: 'Rent camera for trip via Ajer', product: 'Ajer' },
      { step: 'Departure', action: 'Redeem coins for airport lounge', product: 'Gamification' },
    ],
    savings: '$100+ on FX, 500+ coins earned',
  },
  {
    persona: 'New UAE Resident (Expat)',
    icon: Home,
    color: 'text-emerald-400',
    journey: [
      { step: 'Move-in', action: 'Finance deposit via Sakin', product: 'Sakin' },
      { step: 'Setup', action: 'Wasil welcome kit delivery', product: 'Wasil' },
      { step: 'Membership', action: 'Subscribe to Nuqta+', product: 'Nuqta+' },
      { step: 'Furnishing', action: 'Buy furniture on Qist (0% fees)', product: 'Qist' },
      { step: 'Remittance', action: 'Send money home via Hawil', product: 'Hawil' },
      { step: 'Daily Commute', action: 'Rakab rides with 5% coins', product: 'Rakab' },
      { step: 'Vacation', action: 'Book home country trip via Safar', product: 'Safar' },
      { step: 'Side Income', action: 'Rent out camera on Ajer', product: 'Ajer' },
    ],
    savings: '2,500+ AED/year, passive income from Ajer',
  },
  {
    persona: 'UAE National',
    icon: Crown,
    color: 'text-amber-400',
    journey: [
      { step: 'Premium Access', action: 'Nuqta+ membership', product: 'Nuqta+' },
      { step: 'Big Purchases', action: 'Electronics on Qist', product: 'Qist' },
      { step: 'Convenience', action: 'Wasil for daily essentials', product: 'Wasil' },
      { step: 'Travel', action: 'Family trip via Safar', product: 'Safar' },
      { step: 'Assets', action: 'Rent out luxury car on Ajer', product: 'Ajer' },
      { step: 'Engagement', action: 'Compete on leaderboards', product: 'Gamification' },
    ],
    savings: 'Premium rewards, passive income potential',
  },
];

// GCC Expansion Details
const gccExpansion = {
  countries: [
    { country: 'UAE', flag: '🇦🇪', status: 'Active', timeline: '2027', products: '9', regulatory: 'CBUAE, ADGM' },
    { country: 'Saudi Arabia', flag: '🇸🇦', status: 'Phase 2', timeline: '2028', products: '7 initially', regulatory: 'SAMA' },
    { country: 'Qatar', flag: '🇶🇦', status: 'Phase 2', timeline: '2028', products: '6 initially', regulatory: 'QCB' },
    { country: 'Kuwait', flag: '🇰🇼', status: 'Phase 3', timeline: '2029', products: '5 initially', regulatory: 'CBK' },
    { country: 'Bahrain', flag: '🇧🇭', status: 'Phase 3', timeline: '2029', products: '6 initially', regulatory: 'CBB' },
    { country: 'Oman', flag: '🇴🇲', status: 'Phase 3', timeline: '2029', products: '5 initially', regulatory: 'CBO' },
  ],
  strategy: [
    'Same Nuqta wallet works across all GCC countries',
    'Cross-border remittance between GCC nations',
    'Unified coins economy - earn in UAE, spend in KSA',
    'Localized merchant networks per country',
    'Regulatory compliance per jurisdiction',
  ],
};

// Product Roadmap
const roadmap = [
  {
    phase: 'Phase 1: Foundation',
    timeline: 'Q1-Q2 2026',
    status: 'current',
    milestones: [
      { product: 'Nuqta+', milestone: 'MVP launch with 500+ merchants' },
      { product: 'Qist', milestone: 'BNPL integration with top 100 merchants' },
      { product: 'Hawil', milestone: 'Hawil Card launch at Dubai airports' },
      { product: 'Gamification', milestone: 'Points & levels system live' },
    ],
  },
  {
    phase: 'Phase 2: Expansion',
    timeline: 'Q3-Q4 2026',
    status: 'upcoming',
    milestones: [
      { product: 'Wasil', milestone: 'Quick commerce in Dubai Marina, JBR' },
      { product: 'Rakab', milestone: '1,000+ drivers onboarded' },
      { product: 'Sakin', milestone: 'Partner with 50+ landlords/agents' },
      { product: 'Safar', milestone: 'Visa services for top 20 destinations' },
    ],
  },
  {
    phase: 'Phase 3: Scale',
    timeline: '2027',
    status: 'planned',
    milestones: [
      { product: 'All Products', milestone: 'UAE-wide coverage' },
      { product: 'Ajer', milestone: 'Rental marketplace with 10K+ items' },
      { product: 'Corporate', milestone: 'B2B solutions launch' },
      { product: 'GCC', milestone: 'Saudi Arabia pilot begins' },
    ],
  },
  {
    phase: 'Phase 4: GCC Domination',
    timeline: '2028-2031',
    status: 'planned',
    milestones: [
      { product: 'GCC', milestone: 'Full rollout in 6 GCC countries' },
      { product: 'Platform', milestone: '3M+ users, 75K+ merchants' },
      { product: 'Revenue', milestone: '$480M ARR target' },
      { product: 'Exit', milestone: '$1.2B valuation target' },
    ],
  },
];

// Collapsible Section Component
function CollapsibleSection({ title, icon: Icon, children, defaultOpen = false }: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-[#2a3a52] rounded-xl overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#1a2a42] px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-[#243550] transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-[#c9a227]" />
          <span className="font-bold text-sm sm:text-base">{title}</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="bg-[#0d1c30] p-4 sm:p-6">
          {children}
        </div>
      )}
    </div>
  );
}

export default function EcosystemDocsPage() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-[#0d1c30] border-b border-[#2a3a52] py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 sm:w-8 sm:h-8 relative">
            <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain" />
          </div>
          <span className="font-bold text-[#c9a227] text-sm sm:text-base">NUQTA</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/company-profile" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
            Company Profile
          </Link>
          <Link href="/ecosystem" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
            Ecosystem
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#0d1c30] to-[#0a1628] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#c9a227]/20 border border-[#c9a227]/40 rounded-full px-4 py-2 mb-4">
            <Layers className="w-4 h-4 text-[#c9a227]" />
            <span className="text-[#c9a227] text-sm font-medium">ECOSYSTEM DOCUMENTATION</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">
            Complete Nuqta Ecosystem
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Technical and business documentation for all 9 products, their integrations,
            user journeys, and expansion roadmap.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-[#1a2a42] rounded-full text-sm">9 Products</span>
            <span className="px-3 py-1 bg-[#1a2a42] rounded-full text-sm">30M+ Users</span>
            <span className="px-3 py-1 bg-[#1a2a42] rounded-full text-sm">6 GCC Countries</span>
          </div>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="sticky top-[52px] sm:top-[60px] z-40 bg-[#0d1c30] border-b border-[#2a3a52]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? 'bg-[#c9a227] text-[#0a1628]'
                    : 'text-gray-400 hover:text-white hover:bg-[#1a2a42]'
                }`}
              >
                <section.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
              <h2 className="text-2xl font-bold mb-4">Ecosystem Overview</h2>
              <p className="text-gray-300 mb-6">
                Nuqta is a vertically integrated financial ecosystem comprising 9 interconnected products.
                Each product can function independently but delivers exponentially more value when used together.
                The ecosystem is designed to capture every financial touchpoint in a user&apos;s life in the UAE and GCC.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-[#0a1628] rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-[#c9a227]">9</div>
                  <div className="text-sm">Products</div>
                </div>
                <div className="bg-[#0a1628] rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-[#c9a227]">36+</div>
                  <div className="text-sm">Cross-Product Integrations</div>
                </div>
                <div className="bg-[#0a1628] rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-[#c9a227]">3x</div>
                  <div className="text-sm">Retention vs Single Product</div>
                </div>
              </div>
            </div>

            {/* Product Grid Overview */}
            <div className="grid sm:grid-cols-3 gap-4">
              {productDetails.map((product) => {
                const Logo = product.logo;
                return (
                  <div key={product.id} className={`bg-[#1a2a42] rounded-xl p-4 border ${product.borderColor}/30 hover:${product.borderColor}/50 transition-all`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10">
                        <Logo size={40} />
                      </div>
                      <div>
                        <h3 className="font-bold">{product.name} <span className="text-[#c9a227]">{product.arabic}</span></h3>
                        <p className="text-xs text-gray-400">{product.tagline}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Ecosystem Philosophy */}
            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52]">
              <h3 className="text-xl font-bold mb-4">Ecosystem Philosophy</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#c9a227] mb-2">One Wallet</h4>
                  <p className="text-sm text-gray-400">
                    Single Nuqta wallet across all 9 products. Earn coins anywhere, spend anywhere.
                    No fragmentation, no separate loyalty programs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#c9a227] mb-2">One Membership</h4>
                  <p className="text-sm text-gray-400">
                    Nuqta+ unlocks premium benefits across every product. One subscription,
                    ecosystem-wide value.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#c9a227] mb-2">One Identity</h4>
                  <p className="text-sm text-gray-400">
                    Single KYC, unified profile. Verified once, trusted everywhere.
                    No repeat onboarding per product.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#c9a227] mb-2">One Experience</h4>
                  <p className="text-sm text-gray-400">
                    Consistent UI/UX, seamless transitions between products.
                    Feels like one app, not nine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Catalog Section */}
        {activeSection === 'products' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Product Catalog</h2>
              <p className="text-gray-400">Detailed documentation for each product</p>
            </div>

            {productDetails.map((product) => {
              const Logo = product.logo;
              return (
                <CollapsibleSection
                  key={product.id}
                  title={`${product.name} ${product.arabic} - ${product.tagline}`}
                  icon={product.icon}
                  defaultOpen={product.id === 'nuqta-plus'}
                >
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 flex-shrink-0">
                          <Logo size={64} />
                        </div>
                        <div>
                          <p className="text-gray-300">{product.description}</p>
                          <p className="text-[#c9a227] font-medium mt-2">Pricing: {product.pricing}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Key Benefits</h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {product.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Integrations</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.integrations.map((int) => (
                            <span key={int} className="px-3 py-1 bg-[#1a2a42] rounded-full text-xs border border-[#2a3a52]">
                              {int}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Tech Stack</h4>
                        <p className="text-sm text-gray-400">{product.techStack}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-[#1a2a42] rounded-xl p-4 border border-[#2a3a52]">
                        <h4 className="font-semibold mb-3 text-[#c9a227]">Key Metrics</h4>
                        <div className="space-y-2">
                          {Object.entries(product.metrics).map(([key, value]) => (
                            <div key={key} className="flex justify-between text-sm">
                              <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                              <span className="font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CollapsibleSection>
              );
            })}
          </div>
        )}

        {/* Integrations Section */}
        {activeSection === 'integrations' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Cross-Product Integrations</h2>
              <p className="text-gray-400">How products work together to create value</p>
            </div>

            {/* Integration Matrix */}
            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52] overflow-x-auto">
              <h3 className="text-xl font-bold mb-4">Key Synergies</h3>
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="border-b border-[#2a3a52]">
                    <th className="text-left py-3 px-4">From</th>
                    <th className="text-left py-3 px-4">To</th>
                    <th className="text-left py-3 px-4">Integration</th>
                    <th className="text-left py-3 px-4">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {synergies.map((syn, i) => (
                    <tr key={i} className="border-b border-[#2a3a52]/50">
                      <td className="py-3 px-4 font-medium text-[#c9a227]">{syn.from}</td>
                      <td className="py-3 px-4">{syn.to}</td>
                      <td className="py-3 px-4 text-gray-300">{syn.synergy}</td>
                      <td className="py-3 px-4 text-emerald-400">{syn.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Integration Architecture */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold mb-4">Integration Architecture</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#c9a227] mb-2">Shared Services</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Unified Authentication (SSO)</li>
                    <li>• Central Wallet & Coins Engine</li>
                    <li>• KYC/Identity Service</li>
                    <li>• Notification Hub</li>
                    <li>• Analytics & Tracking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#c9a227] mb-2">Event-Driven Communication</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Real-time event streaming</li>
                    <li>• Cross-product triggers</li>
                    <li>• Gamification event hooks</li>
                    <li>• Reward distribution</li>
                    <li>• Fraud detection signals</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Coins Flow */}
            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52]">
              <h3 className="text-xl font-bold mb-4">Nuqta Coins Flow</h3>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="bg-[#0a1628] rounded-xl p-4 border border-green-500/30">
                  <Coins className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-green-400">Earn</h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Purchases, Referrals, Achievements, Streaks
                  </p>
                </div>
                <div className="bg-[#0a1628] rounded-xl p-4 border border-[#c9a227]/30">
                  <Wallet className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                  <h4 className="font-semibold text-[#c9a227]">Store</h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Unified wallet, Never expire, Cross-product
                  </p>
                </div>
                <div className="bg-[#0a1628] rounded-xl p-4 border border-blue-500/30">
                  <Gift className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-blue-400">Redeem</h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Discounts, Upgrades, Partner rewards
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* User Journeys Section */}
        {activeSection === 'user-journeys' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">User Journeys</h2>
              <p className="text-gray-400">How different user personas experience the ecosystem</p>
            </div>

            {userJourneys.map((journey) => (
              <div key={journey.persona} className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52]">
                <div className="flex items-center gap-3 mb-6">
                  <journey.icon className={`w-8 h-8 ${journey.color}`} />
                  <div>
                    <h3 className="text-xl font-bold">{journey.persona}</h3>
                    <p className="text-sm text-gray-400">{journey.savings}</p>
                  </div>
                </div>

                <div className="relative">
                  {/* Journey Steps */}
                  <div className="space-y-4">
                    {journey.journey.map((step, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full ${i === 0 ? 'bg-[#c9a227]' : 'bg-[#2a3a52]'} flex items-center justify-center text-sm font-bold`}>
                            {i + 1}
                          </div>
                          {i < journey.journey.length - 1 && (
                            <div className="w-0.5 h-8 bg-[#2a3a52] my-1" />
                          )}
                        </div>
                        <div className="flex-1 pb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-medium">{step.step}</span>
                            <span className="px-2 py-0.5 bg-[#c9a227]/20 text-[#c9a227] rounded text-xs">{step.product}</span>
                          </div>
                          <p className="text-sm text-gray-400 mt-1">{step.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technical Architecture Section */}
        {activeSection === 'technical' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Technical Architecture</h2>
              <p className="text-gray-400">System design and infrastructure overview</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1a2a42] rounded-2xl p-6 border border-[#2a3a52]">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-[#c9a227]" />
                  Frontend
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• React Native for iOS & Android apps</li>
                  <li>• Next.js for web dashboard & merchant portal</li>
                  <li>• Shared component library across products</li>
                  <li>• Real-time updates via WebSocket</li>
                  <li>• Offline-first architecture for core features</li>
                </ul>
              </div>

              <div className="bg-[#1a2a42] rounded-2xl p-6 border border-[#2a3a52]">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#c9a227]" />
                  Backend
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Microservices architecture (Node.js, Go)</li>
                  <li>• Event-driven communication (Kafka)</li>
                  <li>• PostgreSQL + Redis + MongoDB</li>
                  <li>• Kubernetes for orchestration</li>
                  <li>• API Gateway with rate limiting</li>
                </ul>
              </div>

              <div className="bg-[#1a2a42] rounded-2xl p-6 border border-[#2a3a52]">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#c9a227]" />
                  Security
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Bank-grade encryption (AES-256, TLS 1.3)</li>
                  <li>• No card numbers stored (tokenization)</li>
                  <li>• SOC 2 Type II compliance target</li>
                  <li>• PCI DSS Level 1 for payments</li>
                  <li>• Real-time fraud detection ML</li>
                </ul>
              </div>

              <div className="bg-[#1a2a42] rounded-2xl p-6 border border-[#2a3a52]">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#c9a227]" />
                  Data & Analytics
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Real-time analytics pipeline</li>
                  <li>• ML models for recommendations</li>
                  <li>• Credit scoring AI (Qist)</li>
                  <li>• Fraud detection models</li>
                  <li>• A/B testing infrastructure</li>
                </ul>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold mb-4">Cloud Infrastructure</h3>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="bg-[#0a1628] rounded-xl p-4">
                  <div className="text-2xl mb-2">☁️</div>
                  <h4 className="font-semibold">AWS / GCP</h4>
                  <p className="text-xs text-gray-400">Multi-cloud for redundancy</p>
                </div>
                <div className="bg-[#0a1628] rounded-xl p-4">
                  <div className="text-2xl mb-2">🌍</div>
                  <h4 className="font-semibold">GCC Regions</h4>
                  <p className="text-xs text-gray-400">Data residency compliance</p>
                </div>
                <div className="bg-[#0a1628] rounded-xl p-4">
                  <div className="text-2xl mb-2">⚡</div>
                  <h4 className="font-semibold">99.9% SLA</h4>
                  <p className="text-xs text-gray-400">High availability target</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Revenue Model Section */}
        {activeSection === 'revenue' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Revenue Model</h2>
              <p className="text-gray-400">How each product generates revenue</p>
            </div>

            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52]">
              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[600px]">
                  <thead>
                    <tr className="border-b border-[#2a3a52]">
                      <th className="text-left py-3 px-4">Product</th>
                      <th className="text-left py-3 px-4">Revenue Model</th>
                      <th className="text-left py-3 px-4">Take Rate</th>
                      <th className="text-left py-3 px-4">Y5 Contribution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#2a3a52]/50">
                      <td className="py-3 px-4 font-medium">Qist</td>
                      <td className="py-3 px-4 text-gray-300">Merchant platform fee</td>
                      <td className="py-3 px-4 text-[#c9a227]">3-5%</td>
                      <td className="py-3 px-4 text-emerald-400">35%</td>
                    </tr>
                    <tr className="border-b border-[#2a3a52]/50">
                      <td className="py-3 px-4 font-medium">Nuqta+</td>
                      <td className="py-3 px-4 text-gray-300">Monthly subscription</td>
                      <td className="py-3 px-4 text-[#c9a227]">99 AED/mo</td>
                      <td className="py-3 px-4 text-emerald-400">20%</td>
                    </tr>
                    <tr className="border-b border-[#2a3a52]/50">
                      <td className="py-3 px-4 font-medium">Hawil</td>
                      <td className="py-3 px-4 text-gray-300">Transfer fee</td>
                      <td className="py-3 px-4 text-[#c9a227]">0.5%</td>
                      <td className="py-3 px-4 text-emerald-400">15%</td>
                    </tr>
                    <tr className="border-b border-[#2a3a52]/50">
                      <td className="py-3 px-4 font-medium">Safar</td>
                      <td className="py-3 px-4 text-gray-300">Booking commission</td>
                      <td className="py-3 px-4 text-[#c9a227]">8-15%</td>
                      <td className="py-3 px-4 text-emerald-400">12%</td>
                    </tr>
                    <tr className="border-b border-[#2a3a52]/50">
                      <td className="py-3 px-4 font-medium">Ajer</td>
                      <td className="py-3 px-4 text-gray-300">Platform commission</td>
                      <td className="py-3 px-4 text-[#c9a227]">15-25%</td>
                      <td className="py-3 px-4 text-emerald-400">10%</td>
                    </tr>
                    <tr className="border-b border-[#2a3a52]/50">
                      <td className="py-3 px-4 font-medium">Rakab</td>
                      <td className="py-3 px-4 text-gray-300">Ride commission</td>
                      <td className="py-3 px-4 text-[#c9a227]">15%</td>
                      <td className="py-3 px-4 text-emerald-400">4%</td>
                    </tr>
                    <tr className="border-b border-[#2a3a52]/50">
                      <td className="py-3 px-4 font-medium">Sakin</td>
                      <td className="py-3 px-4 text-gray-300">Financing fee</td>
                      <td className="py-3 px-4 text-[#c9a227]">3%</td>
                      <td className="py-3 px-4 text-emerald-400">3%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Wasil</td>
                      <td className="py-3 px-4 text-gray-300">Delivery + merchant fees</td>
                      <td className="py-3 px-4 text-[#c9a227]">10-15%</td>
                      <td className="py-3 px-4 text-emerald-400">1%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Total Revenue Projection */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold mb-4">5-Year Revenue Projection</h3>
              <div className="grid sm:grid-cols-5 gap-4 text-center">
                {[
                  { year: 'Y1', revenue: '2.5M' },
                  { year: 'Y2', revenue: '15M' },
                  { year: 'Y3', revenue: '65M' },
                  { year: 'Y4', revenue: '180M' },
                  { year: 'Y5', revenue: '480M' },
                ].map((item) => (
                  <div key={item.year} className="bg-[#0a1628] rounded-xl p-4">
                    <div className="text-xl font-bold text-[#c9a227]">{item.revenue}</div>
                    <div className="text-sm text-gray-400">{item.year} (AED)</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* GCC Expansion Section */}
        {activeSection === 'expansion' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">GCC Expansion Strategy</h2>
              <p className="text-gray-400">Rolling out across 6 GCC countries</p>
            </div>

            <div className="bg-[#1a2a42] rounded-2xl p-6 sm:p-8 border border-[#2a3a52] overflow-x-auto">
              <table className="w-full text-sm min-w-[700px]">
                <thead>
                  <tr className="border-b border-[#2a3a52]">
                    <th className="text-left py-3 px-4">Country</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Timeline</th>
                    <th className="text-left py-3 px-4">Products</th>
                    <th className="text-left py-3 px-4">Regulatory</th>
                  </tr>
                </thead>
                <tbody>
                  {gccExpansion.countries.map((country) => (
                    <tr key={country.country} className="border-b border-[#2a3a52]/50">
                      <td className="py-3 px-4 font-medium">
                        <span className="mr-2">{country.flag}</span>{country.country}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          country.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                          country.status === 'Phase 2' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {country.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-400">{country.timeline}</td>
                      <td className="py-3 px-4 text-[#c9a227]">{country.products}</td>
                      <td className="py-3 px-4 text-gray-400">{country.regulatory}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cross-Border Features */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold mb-4">Cross-Border Strategy</h3>
              <ul className="space-y-3">
                {gccExpansion.strategy.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Roadmap Section */}
        {activeSection === 'roadmap' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Product Roadmap</h2>
              <p className="text-gray-400">Development timeline through 2031</p>
            </div>

            <div className="space-y-6">
              {roadmap.map((phase) => (
                <div
                  key={phase.phase}
                  className={`rounded-2xl p-6 sm:p-8 border ${
                    phase.status === 'current'
                      ? 'bg-[#c9a227]/10 border-[#c9a227]/50'
                      : 'bg-[#1a2a42] border-[#2a3a52]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{phase.phase}</h3>
                      <p className="text-sm text-gray-400">{phase.timeline}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      phase.status === 'current' ? 'bg-[#c9a227] text-[#0a1628]' :
                      phase.status === 'upcoming' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {phase.status === 'current' ? 'In Progress' :
                       phase.status === 'upcoming' ? 'Upcoming' : 'Planned'}
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {phase.milestones.map((m, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          phase.status === 'current' ? 'text-[#c9a227]' : 'text-gray-500'
                        }`} />
                        <div>
                          <span className="font-medium text-sm">{m.product}</span>
                          <p className="text-sm text-gray-400">{m.milestone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Footer Navigation */}
      <div className="bg-[#0d1c30] border-t border-[#2a3a52] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/company-profile" className="text-[#c9a227] hover:text-[#f4d35e] transition-colors">
              Company Profile
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/ecosystem" className="text-[#c9a227] hover:text-[#f4d35e] transition-colors">
              Ecosystem Overview
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/data-room" className="text-[#c9a227] hover:text-[#f4d35e] transition-colors">
              Data Room
            </Link>
          </div>
          <p className="text-center text-gray-500 text-sm">
            © 2026 Nuqta. Building the financial ecosystem for UAE & GCC.
          </p>
        </div>
      </div>

      <GlobalFooter />
    </div>
  );
}
