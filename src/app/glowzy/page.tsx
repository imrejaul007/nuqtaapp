'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles, Scissors, Heart, Star, Crown, Users, TrendingUp,
  CheckCircle, ChevronDown, ChevronUp, ChevronRight, ArrowRight,
  DollarSign, Globe, CreditCard, ArrowUpRight, Shield,
  Target, LayoutGrid, Coins, Search,
  Award, Store, Calendar, Package,
  Home, Eye, UserCheck, Truck, Bell, BadgePercent,
  Activity, Droplets, Briefcase
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── Hero Stats ───
const heroStats = [
  { label: 'Partner Salons', value: '3,000+', color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/30' },
  { label: 'Service Types', value: '50+', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
  { label: 'Avg Booking', value: '180 AED', color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/30' },
  { label: 'Nuqta Coins', value: '3X', color: 'text-[#c9a227]', bg: 'bg-[#c9a227]/10', border: 'border-[#c9a227]/30' },
  { label: 'User Rating', value: '4.8/5', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
];

// ─── Service Categories (6) ───
const serviceCategories = [
  {
    id: 'salon-booking',
    name: 'Salon Booking',
    arabic: 'حجز صالون',
    icon: Scissors,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    description: 'Book appointments at 3,000+ verified salons across the UAE with real-time availability, stylist profiles, and instant confirmation.',
    services: [
      'Haircut & Styling (men & women)',
      'Hair coloring & highlights',
      'Keratin & smoothing treatments',
      'Blowout & blowdry bar',
      'Hair extensions & bonding',
      'Kids haircut & styling',
    ],
    metric: '1,200+ salons',
    avgPrice: '120 AED',
  },
  {
    id: 'at-home-beauty',
    name: 'At-Home Beauty',
    arabic: 'تجميل منزلي',
    icon: Home,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    description: 'Professional beauty services at your doorstep. Verified therapists, hygiene-certified kits, and flexible scheduling for home visits.',
    services: [
      'At-home manicure & pedicure',
      'Home facial treatments',
      'At-home waxing & threading',
      'Makeup artist home visits',
      'Home hair styling & coloring',
      'Henna & mehndi sessions',
    ],
    metric: '800+ professionals',
    avgPrice: '200 AED',
  },
  {
    id: 'spa-wellness',
    name: 'Spa & Wellness',
    arabic: 'سبا وعافية',
    icon: Droplets,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    description: 'Premium spa bookings, massage therapy, and wellness treatments at top-rated spas and wellness centers across the UAE.',
    services: [
      'Swedish & deep tissue massage',
      'Hot stone & aromatherapy',
      'Hammam & Turkish bath',
      'Body scrub & wraps',
      'Hydrotherapy & float tanks',
      'Couples spa packages',
    ],
    metric: '500+ spas',
    avgPrice: '350 AED',
  },
  {
    id: 'bridal-packages',
    name: 'Bridal Packages',
    arabic: 'باقات العروس',
    icon: Crown,
    color: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/30',
    description: 'Complete bridal beauty packages from engagement to wedding day. Coordinated with Eventora for seamless bridal event planning.',
    services: [
      'Bridal makeup & hair trial',
      'Wedding day glam package',
      'Bridal party group booking',
      'Henna night services',
      'Pre-wedding skin prep program',
      'Groom grooming package',
    ],
    metric: '300+ bridal specialists',
    avgPrice: '2,500 AED',
  },
  {
    id: 'mens-grooming',
    name: "Men's Grooming",
    arabic: 'عناية الرجال',
    icon: UserCheck,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    description: 'Dedicated men\'s grooming services from traditional barbershops to modern grooming lounges with premium products.',
    services: [
      'Classic barber haircut & fade',
      'Beard trim & shaping',
      'Hot towel shave',
      'Men\'s facial & skincare',
      'Hair & scalp treatment',
      'Express grooming packages',
    ],
    metric: '600+ barbershops',
    avgPrice: '90 AED',
  },
  {
    id: 'beauty-products',
    name: 'Beauty Products',
    arabic: 'منتجات التجميل',
    icon: Package,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    description: 'Shop curated beauty products from salon-recommended brands. Delivered via Wasil with same-day delivery across the UAE.',
    services: [
      'Skincare & serums',
      'Haircare & styling products',
      'Makeup & cosmetics',
      'Nail care & tools',
      'Fragrance & perfumes',
      'Organic & natural beauty',
    ],
    metric: '2,000+ products',
    avgPrice: '130 AED',
  },
];

// ─── How It Works Steps ───
const howItWorksSteps = [
  {
    step: 1,
    title: 'Browse & Discover',
    description: 'Explore salons, spas, and beauty professionals by category, location, ratings, and real-time availability.',
    icon: Search,
    color: 'text-pink-400',
  },
  {
    step: 2,
    title: 'Choose Service & Stylist',
    description: 'Select your desired service, view stylist portfolios, read verified reviews, and pick your preferred time slot.',
    icon: Star,
    color: 'text-purple-400',
  },
  {
    step: 3,
    title: 'Book & Pay',
    description: 'Confirm your booking instantly with NuqtaPay, card, or use Qist BNPL for premium packages. Earn 3X Nuqta Coins.',
    icon: CreditCard,
    color: 'text-cyan-400',
  },
  {
    step: 4,
    title: 'Get Beautified',
    description: 'Visit the salon or receive at-home service. Real-time tracking for home visits, check-in QR for salon appointments.',
    icon: Sparkles,
    color: 'text-rose-400',
  },
  {
    step: 5,
    title: 'Rate & Rebook',
    description: 'Rate your experience, tip your stylist, and earn loyalty points. Auto-schedule recurring appointments.',
    icon: Heart,
    color: 'text-amber-400',
  },
  {
    step: 6,
    title: 'Earn & Redeem Coins',
    description: 'Earn 3X Nuqta Coins on every booking. Redeem for discounts on future services or beauty products.',
    icon: Coins,
    color: 'text-[#c9a227]',
  },
];

// ─── Platform Features ───
const platformFeatures = [
  { name: 'Real-Time Availability', description: 'Live calendar sync with salons showing instant slot availability', icon: Calendar, color: 'text-pink-400' },
  { name: 'Stylist Portfolios', description: 'Before/after galleries, certifications, and verified client reviews', icon: Eye, color: 'text-purple-400' },
  { name: 'Smart Matching', description: 'AI recommends salons and stylists based on your hair type and preferences', icon: Target, color: 'text-cyan-400' },
  { name: 'Hygiene Verified', description: 'All partner salons pass hygiene audits with regular inspection reports', icon: Shield, color: 'text-emerald-400' },
  { name: 'Group Bookings', description: 'Book for bridal parties, girls nights, and corporate wellness events', icon: Users, color: 'text-rose-400' },
  { name: 'Loyalty Program', description: 'Tiered rewards: Bronze, Silver, Gold, Platinum with escalating perks', icon: Award, color: 'text-amber-400' },
  { name: 'Subscription Plans', description: 'Monthly beauty subscriptions for regular treatments at discounted rates', icon: BadgePercent, color: 'text-blue-400' },
  { name: 'In-App Chat', description: 'Message your stylist directly for consultations before booking', icon: Bell, color: 'text-violet-400' },
];

// ─── Ecosystem Integrations ───
const ecosystemIntegrations = [
  {
    app: 'Nuqta Coins',
    description: 'Earn 3X coins on every beauty booking. Redeem across the entire Nuqta ecosystem for discounts and rewards.',
    type: 'Loyalty',
    color: 'text-[#c9a227]',
    icon: Coins,
  },
  {
    app: 'Eventora Bridal',
    description: 'Seamless bridal beauty coordination with Eventora event planning. One booking for venue + beauty + transport.',
    type: 'Events',
    color: 'text-violet-400',
    icon: Calendar,
  },
  {
    app: 'Fakhir Luxury Tier',
    description: 'Premium salon experiences for Fakhir members: priority booking, exclusive stylists, and VIP treatment rooms.',
    type: 'Premium',
    color: 'text-amber-400',
    icon: Crown,
  },
  {
    app: 'NuqtaPay Checkout',
    description: 'Pay seamlessly with NuqtaPay wallet, cards, or Qist BNPL for expensive bridal and premium packages.',
    type: 'Payments',
    color: 'text-teal-400',
    icon: CreditCard,
  },
  {
    app: 'Wasil Product Delivery',
    description: 'Beauty products ordered through Glowzy are delivered same-day via the Wasil delivery network.',
    type: 'Delivery',
    color: 'text-orange-400',
    icon: Truck,
  },
];

// ─── Pricing Tiers ───
const pricingTiers = [
  {
    name: 'Free',
    price: 'Free',
    period: 'forever',
    description: 'List your salon for free and start receiving bookings from Glowzy users across the UAE.',
    color: 'text-slate-400',
    bg: 'bg-slate-500/10',
    border: 'border-slate-500/30',
    highlight: false,
    features: [
      'Basic salon profile & listing',
      'Up to 50 bookings/month',
      'Standard search placement',
      'Basic analytics dashboard',
      'Customer review management',
      'Email booking notifications',
      '20% commission on bookings',
      'Settlement within 7 business days',
    ],
  },
  {
    name: 'Pro',
    price: '299',
    period: 'AED/mo',
    description: 'For growing salons that want premium visibility, lower commissions, and advanced business tools.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/30',
    highlight: true,
    features: [
      'Everything in Free tier',
      'Unlimited bookings',
      'Priority search placement',
      'Stylist portfolio pages',
      'Advanced analytics & insights',
      'Promotional tools & offers',
      '15% commission on bookings',
      'Settlement within 3 business days',
      'In-app chat with clients',
      'Multi-branch management',
    ],
  },
  {
    name: 'Premium',
    price: 'Custom',
    period: 'pricing',
    description: 'Enterprise solution for salon chains, luxury spas, and bridal studios with dedicated support.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    highlight: false,
    features: [
      'Everything in Pro tier',
      'Featured listing & homepage spotlight',
      'Fakhir luxury badge integration',
      'API access for POS integration',
      'Dedicated account manager',
      'Custom branding on booking pages',
      'Negotiated commission (10-12%)',
      'Same-day settlement option',
      'White-label booking widget',
      'Adzy promotional campaigns included',
    ],
  },
];

// ─── Unit Economics ───
const unitEconomics = [
  { metric: 'Avg Booking Value', value: '180 AED', description: 'Average transaction value across all beauty service categories', icon: Sparkles, color: 'text-pink-400' },
  { metric: 'Commission Rate', value: '15-20%', description: 'Blended commission rate across Free, Pro, and Premium salon tiers', icon: DollarSign, color: 'text-purple-400' },
  { metric: 'Net per Booking', value: '30 AED', description: 'Average net revenue per booking after payment processing costs', icon: TrendingUp, color: 'text-emerald-400' },
  { metric: 'Bookings per Salon', value: '120/mo', description: 'Average monthly bookings per active salon partner on the platform', icon: Calendar, color: 'text-cyan-400' },
  { metric: 'Repeat Rate', value: '68%', description: 'Percentage of users who rebook within 30 days of their first appointment', icon: Activity, color: 'text-rose-400' },
  { metric: 'Monthly Active Salons', value: '2,400+', description: 'Number of salons actively receiving and fulfilling bookings monthly', icon: Store, color: 'text-amber-400' },
];

// ─── Revenue Streams ───
const revenueStreams = [
  {
    stream: 'Booking Commissions',
    description: 'Commission on every salon, spa, and at-home beauty booking (15-20% based on salon tier)',
    percentage: '50%',
    icon: Scissors,
    color: 'text-pink-400',
    projected: '32M AED/yr at 2,400 salons',
  },
  {
    stream: 'Booking Fees',
    description: 'Flat service fee charged to customers per booking for platform access and guarantees',
    percentage: '10%',
    icon: CreditCard,
    color: 'text-blue-400',
    projected: '6.4M AED/yr',
  },
  {
    stream: 'Premium Salon Listings',
    description: 'Monthly subscription revenue from Pro and Premium tier salons for enhanced visibility and tools',
    percentage: '15%',
    icon: Star,
    color: 'text-purple-400',
    projected: '9.6M AED/yr',
  },
  {
    stream: 'Beauty Product Sales',
    description: 'Revenue from curated beauty product marketplace delivered via Wasil same-day delivery',
    percentage: '25%',
    icon: Package,
    color: 'text-emerald-400',
    projected: '16M AED/yr',
  },
];

// ─── Market Data ───
const marketData = {
  tam: '$2.8B',
  tamLabel: 'UAE Beauty & Salon Market',
  segments: [
    { name: 'Hair Salons & Barbershops', size: '$840M', share: '30%', color: 'bg-pink-500' },
    { name: 'Spa & Wellness', size: '$672M', share: '24%', color: 'bg-cyan-500' },
    { name: 'Beauty Products & Cosmetics', size: '$560M', share: '20%', color: 'bg-emerald-500' },
    { name: 'Bridal & Special Occasions', size: '$420M', share: '15%', color: 'bg-rose-500' },
    { name: 'Men\'s Grooming', size: '$308M', share: '11%', color: 'bg-blue-500' },
  ],
  growth: '9.5% CAGR',
  penetration: '35% online booking',
  drivers: [
    'UAE has the highest per-capita beauty spend in the Middle East',
    'Growing expat population driving demand for diverse beauty services',
    'Social media culture fueling premium beauty and grooming trends',
    'Government tourism push increasing demand for spa and wellness',
    'Rising male grooming market with 15% YoY growth in UAE',
    'Bridal industry worth $420M+ with high-ticket multi-service bookings',
  ],
};

// ─── Competitors ───
const competitors = [
  {
    name: 'Fresha',
    strengths: 'Global brand, free for salons, strong booking management tools',
    weaknesses: 'No ecosystem integration, no BNPL, no loyalty coins, no product delivery',
    pricing: 'Free + payment processing fees',
  },
  {
    name: 'ServiceMarket',
    strengths: 'Established UAE brand, wide service range, home services focus',
    weaknesses: 'Generic marketplace, no beauty specialization, no bridal coordination, limited loyalty',
    pricing: '15-25% commission',
  },
  {
    name: 'Booxi / Vagaro',
    strengths: 'Strong scheduling tools, international presence, salon management features',
    weaknesses: 'No UAE-specific focus, no Arabic support, no ecosystem benefits, no delivery',
    pricing: '$25-85/mo subscription',
  },
];

const competitiveAdvantages = [
  'Nuqta ecosystem: earn & redeem coins across 24+ apps, not just beauty',
  'Eventora integration: seamless bridal beauty + event coordination',
  'Fakhir luxury tier: premium salon experiences for high-value customers',
  'Wasil delivery: beauty products delivered same-day via existing logistics',
  'NuqtaPay + Qist BNPL: flexible payment including installments for premium services',
  'Arabic-first: full Arabic UX, local salon partnerships, GCC cultural sensitivity',
  'At-home beauty: verified professionals with hygiene-certified mobile kits',
  'AI matching: smart salon and stylist recommendations based on preferences and history',
];

export default function GlowzyPage() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>('salon-booking');
  const [activeTab, setActiveTab] = useState<'features' | 'pricing' | 'market' | 'deck'>('features');

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <div className="bg-gradient-to-br from-[#0a1628] via-pink-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <Link href="/wasil" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 mb-6 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Wasil
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-xl shadow-pink-500/30">
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Glowzy <span className="text-pink-400 text-xl sm:text-2xl font-bold mr-2">غلوزي</span>
              </h1>
              <p className="text-pink-400 text-lg sm:text-xl font-semibold mt-1">
                Beauty & Salon Booking Platform
              </p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            The dedicated beauty and salon booking app under the Wasil brand. From salon appointments and
            at-home beauty to spa wellness, bridal packages, and men&apos;s grooming -- Glowzy connects you with
            3,000+ verified beauty professionals across the UAE. Earn 3X Nuqta Coins on every booking.
          </p>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {heroStats.map((stat, i) => (
              <div key={i} className={`${stat.bg} rounded-xl p-4 text-center border ${stat.border}`}>
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════ TAB NAVIGATION ═══════════════ */}
      <div className="border-b border-slate-700/50 bg-slate-900/30 sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto">
            {[
              { key: 'features' as const, label: 'Services & Features', icon: LayoutGrid },
              { key: 'pricing' as const, label: 'Pricing & Economics', icon: DollarSign },
              { key: 'market' as const, label: 'Market & Competition', icon: Globe },
              { key: 'deck' as const, label: 'Pitch Deck', icon: Briefcase },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'border-pink-400 text-pink-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* ═══════════════ SERVICES & FEATURES TAB ═══════════════ */}
        {activeTab === 'features' && (
          <>
            {/* 6 Service Categories */}
            <h2 className="text-2xl font-bold text-white mb-2">6 Service Categories</h2>
            <p className="text-slate-400 mb-8">Complete beauty ecosystem covering every grooming and wellness need.</p>

            <div className="space-y-4">
              {serviceCategories.map((category) => (
                <div
                  key={category.id}
                  className={`${category.bgColor} border ${category.borderColor} rounded-xl overflow-hidden transition-all`}
                >
                  <button
                    onClick={() => setExpandedFeature(expandedFeature === category.id ? null : category.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center border ${category.borderColor}`}>
                        <category.icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className={`text-base sm:text-lg font-bold ${category.color}`}>
                            {category.name}
                          </h3>
                          <span className="text-slate-500 text-sm">{category.arabic}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${category.bgColor} ${category.color} border ${category.borderColor}`}>
                            {category.metric}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm mt-0.5 line-clamp-1">{category.description}</p>
                      </div>
                    </div>
                    {expandedFeature === category.id ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                    )}
                  </button>

                  {expandedFeature === category.id && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5">
                      <p className="text-slate-300 text-sm mb-4">{category.description}</p>
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-white font-bold text-sm">Services Offered</h4>
                          <span className={`text-xs ${category.color}`}>Avg: {category.avgPrice}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {category.services.map((service, i) => (
                            <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                              <CheckCircle className={`w-4 h-4 ${category.color} flex-shrink-0`} />
                              {service}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* How It Works */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">How It Works</h2>
              <p className="text-slate-400 mb-8">Six steps from discovery to earning beauty rewards.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {howItWorksSteps.map((step) => (
                  <div key={step.step} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold text-lg border border-pink-500/30">
                        {step.step}
                      </div>
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <h4 className={`font-bold ${step.color} mb-2`}>{step.title}</h4>
                    <p className="text-slate-400 text-sm">{step.description}</p>
                    {step.step < 6 && (
                      <ChevronRight className="absolute top-5 right-4 w-4 h-4 text-slate-600 hidden lg:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Features */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">Platform Features</h2>
              <p className="text-slate-400 mb-6">Smart tools that make beauty booking effortless.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {platformFeatures.map((feature, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-pink-500/30 transition-colors">
                    <feature.icon className={`w-8 h-8 ${feature.color} mb-3`} />
                    <h4 className={`font-bold ${feature.color} mb-1 text-sm`}>{feature.name}</h4>
                    <p className="text-slate-400 text-xs">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ecosystem Integrations */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">Ecosystem Integrations</h2>
              <p className="text-slate-400 mb-6">Deeply connected to the Nuqta ecosystem for the complete beauty experience.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ecosystemIntegrations.map((integration, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-900/50 flex items-center justify-center">
                        <integration.icon className={`w-5 h-5 ${integration.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className={`font-bold ${integration.color}`}>{integration.app}</h4>
                          <span className="text-xs px-2 py-0.5 rounded bg-slate-700/50 text-slate-400">
                            {integration.type}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm">{integration.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ═══════════════ PRICING & ECONOMICS TAB ═══════════════ */}
        {activeTab === 'pricing' && (
          <>
            {/* Pricing Tiers */}
            <h2 className="text-2xl font-bold text-white mb-2">Salon Pricing Plans</h2>
            <p className="text-slate-400 mb-8">Free to list, commission-based with premium tiers for growing salons.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingTiers.map((tier, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-6 border-2 ${tier.highlight ? 'border-pink-500 ring-2 ring-pink-500/20' : `${tier.border} border`} ${tier.bg} relative`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className={`text-xl font-bold ${tier.color} mb-1`}>{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-black text-white">{tier.price}</span>
                    <span className="text-slate-400 text-sm">{tier.period}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-5">{tier.description}</p>
                  <ul className="space-y-2">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-300 text-sm">
                        <CheckCircle className={`w-4 h-4 ${tier.color} flex-shrink-0 mt-0.5`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Unit Economics */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">Unit Economics</h2>
              <p className="text-slate-400 mb-8">The numbers behind every beauty booking on Glowzy.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {unitEconomics.map((item, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                    <item.icon className={`w-8 h-8 ${item.color} mb-3`} />
                    <div className={`text-2xl font-bold ${item.color} mb-1`}>{item.value}</div>
                    <h4 className="text-white font-bold text-sm mb-1">{item.metric}</h4>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Model */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">Revenue Model</h2>
              <p className="text-slate-400 mb-8">Four revenue streams from the beauty booking ecosystem.</p>

              <div className="space-y-4">
                {revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-900/50 flex items-center justify-center flex-shrink-0">
                        <stream.icon className={`w-6 h-6 ${stream.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`font-bold ${stream.color}`}>{stream.stream}</h4>
                          <span className={`text-lg font-bold ${stream.color}`}>{stream.percentage}</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-2">{stream.description}</p>
                        <div className="flex items-center gap-2">
                          <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 text-xs font-medium">{stream.projected}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 h-2 bg-slate-900/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${stream.color.replace('text-', 'bg-').replace('-400', '-500')}`}
                        style={{ width: stream.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Projected Revenue */}
              <div className="mt-6 bg-pink-500/10 rounded-xl p-6 border border-pink-500/30 text-center">
                <div className="text-sm text-slate-400 mb-1">Total Projected Annual Revenue</div>
                <div className="text-3xl font-black text-pink-400">64M AED/yr</div>
                <div className="text-xs text-slate-500 mt-1">at 3,000+ salons with 180 AED avg booking value</div>
              </div>
            </div>
          </>
        )}

        {/* ═══════════════ MARKET & COMPETITION TAB ═══════════════ */}
        {activeTab === 'market' && (
          <>
            {/* Market Opportunity */}
            <h2 className="text-2xl font-bold text-white mb-2">Market Opportunity</h2>
            <p className="text-slate-400 mb-8">UAE leads the Middle East in beauty and personal care spending.</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-500/30 text-center lg:col-span-1">
                <div className="text-sm text-slate-400 mb-2">Total Addressable Market</div>
                <div className="text-4xl font-black text-pink-400">{marketData.tam}</div>
                <div className="text-sm text-pink-400/70 mt-1">{marketData.tamLabel}</div>
                <div className="mt-4 pt-4 border-t border-pink-500/20 grid grid-cols-2 gap-2">
                  <div>
                    <div className="text-sm text-slate-400">Growth</div>
                    <div className="text-xl font-bold text-emerald-400">{marketData.growth}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Online Booking</div>
                    <div className="text-xl font-bold text-pink-400">{marketData.penetration}</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h4 className="text-white font-bold mb-4">Market Segments</h4>
                <div className="space-y-3">
                  {marketData.segments.map((seg, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-slate-300 text-sm">{seg.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 text-sm">{seg.size}</span>
                          <span className="text-white font-bold text-sm w-10 text-right">{seg.share}</span>
                        </div>
                      </div>
                      <div className="h-2 bg-slate-900/50 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${seg.color}`} style={{ width: seg.share }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Market Drivers */}
            <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30 mb-12">
              <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" /> Key Market Drivers
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {marketData.drivers.map((driver, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <ArrowUpRight className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    {driver}
                  </div>
                ))}
              </div>
            </div>

            {/* Competitors */}
            <h2 className="text-2xl font-bold text-white mb-2">Competitive Landscape</h2>
            <p className="text-slate-400 mb-8">How Glowzy differentiates from existing beauty booking platforms.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {competitors.map((comp, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                  <h4 className="text-white font-bold mb-1">{comp.name}</h4>
                  <div className="text-xs text-slate-500 mb-3">{comp.pricing}</div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-emerald-400 mb-1">Strengths</div>
                      <p className="text-slate-400 text-sm">{comp.strengths}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-red-400 mb-1">Weaknesses</div>
                      <p className="text-slate-400 text-sm">{comp.weaknesses}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Competitive Advantages */}
            <div className="bg-pink-500/10 rounded-xl p-6 border border-pink-500/30">
              <h4 className="text-pink-400 font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" /> Glowzy Competitive Advantages
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {competitiveAdvantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                    {adv}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ═══════════════════════════════════════════ */}
        {/* PITCH DECK */}
        {/* ═══════════════════════════════════════════ */}
        {activeTab === 'deck' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
            {/* Investment Thesis */}
            <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/10 rounded-2xl p-6 sm:p-8 border border-pink-500/30">
              <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2"><Briefcase className="w-6 h-6 text-pink-400" /> Investment Thesis</h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Beauty is high-frequency, high-margin, and deeply personal. Glowzy captures the $2.8B UAE beauty market with tech-enabled salon booking and at-home services. With Nuqta loyalty driving repeat bookings (3.2x/month avg), Qist BNPL for bridal/premium packages, and Adzy beauty ads, Glowzy builds an unbreakable user habit across booking commissions, product sales, and advertising.
              </p>
            </div>

            {/* Market Opportunity */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Market Opportunity</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'TAM — UAE Beauty & Salon', value: '$2.8B', color: 'text-pink-400', border: 'border-pink-500/40' },
                  { label: 'SAM — Online Salon Booking', value: '$1.2B', color: 'text-purple-400', border: 'border-purple-500/40' },
                  { label: 'SOM — Year 3 Target', value: '$180M', color: 'text-emerald-400', border: 'border-emerald-500/40' },
                ].map((m, i) => (
                  <div key={i} className={`bg-slate-800/60 rounded-xl p-5 border ${m.border} text-center`}>
                    <div className={`text-3xl font-black ${m.color}`}>{m.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Differentiators */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Key Differentiators</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: '3X Nuqta Coin Rewards', desc: 'Every booking earns real coins spendable at 500+ merchants, not siloed salon points.', icon: Coins, color: 'text-[#c9a227]' },
                  { title: 'At-Home Beauty (800+ Pros)', desc: 'Verified at-home professionals with hygiene kits and real-time GPS tracking.', icon: Home, color: 'text-pink-400' },
                  { title: 'Eventora Bridal Integration', desc: 'Bridal beauty coordinated with venue, transport, and event planning seamlessly.', icon: Calendar, color: 'text-violet-400' },
                  { title: 'Qist BNPL for Premium Packages', desc: 'Split 2,500+ AED bridal packages into installments. No competitor offers this.', icon: CreditCard, color: 'text-teal-400' },
                  { title: 'AI Stylist Matching', desc: 'Recommends salons and stylists based on hair type, preferences, and past bookings.', icon: Target, color: 'text-cyan-400' },
                  { title: 'Beauty Product Marketplace', desc: 'Salon-recommended products delivered same-day via Wasil delivery network.', icon: Package, color: 'text-emerald-400' },
                ].map((d, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <d.icon className={`w-6 h-6 ${d.color} mb-2`} />
                    <h3 className="text-white font-bold text-sm mb-1">{d.title}</h3>
                    <p className="text-slate-400 text-xs">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Year Financial Projections */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3-Year Financial Projections</h2>
              <div className="overflow-x-auto rounded-xl border border-slate-700/50">
                <table className="w-full text-sm">
                  <thead><tr className="bg-slate-800/80 text-slate-300">
                    <th className="px-4 py-3 text-left">Year</th><th className="px-4 py-3 text-right">Users</th><th className="px-4 py-3 text-right">Salons</th><th className="px-4 py-3 text-right">Revenue</th><th className="px-4 py-3 text-right">Costs</th><th className="px-4 py-3 text-right">Net Profit</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { year: 'Year 1', users: '20K', salons: '800', revenue: '8M AED', costs: '6M', profit: '2M AED' },
                      { year: 'Year 2', users: '80K', salons: '1,800', revenue: '35M AED', costs: '23M', profit: '12M AED' },
                      { year: 'Year 3', users: '200K', salons: '3,200', revenue: '90M AED', costs: '55M', profit: '35M AED' },
                    ].map((r, i) => (
                      <tr key={i} className="border-t border-slate-700/50 text-slate-300">
                        <td className="px-4 py-3 font-bold text-pink-400">{r.year}</td><td className="px-4 py-3 text-right">{r.users}</td><td className="px-4 py-3 text-right">{r.salons}</td><td className="px-4 py-3 text-right font-semibold text-emerald-400">{r.revenue}</td><td className="px-4 py-3 text-right">{r.costs}</td><td className="px-4 py-3 text-right font-bold text-white">{r.profit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Comparable Companies */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Comparable Companies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Fresha', val: '$1B+', note: 'Global salon booking platform' },
                  { name: 'Urban Company', val: '$2.8B', note: 'At-home services marketplace (India)' },
                  { name: 'Booksy', val: '$300M', note: 'Salon scheduling SaaS' },
                  { name: 'StyleSeat', val: '$500M+', note: 'US stylist marketplace' },
                ].map((c, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
                    <div className="text-lg font-bold text-white">{c.name}</div>
                    <div className="text-2xl font-black text-pink-400">{c.val}</div>
                    <div className="text-xs text-slate-400 mt-1">{c.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unicorn Path */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Unicorn Path</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { milestone: '1K salons + 20K users', timeline: 'Month 12', revenue: '8M AED', valuation: '50M AED' },
                  { milestone: '2.5K salons + 80K users', timeline: 'Month 24', revenue: '35M AED', valuation: '200M AED' },
                  { milestone: '5K salons + 200K users', timeline: 'Month 36', revenue: '90M AED', valuation: '500M AED' },
                  { milestone: 'GCC + 500K users', timeline: 'Month 48', revenue: '200M AED', valuation: '1B+ AED' },
                ].map((m, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
                    <div className="text-xs text-slate-400">{m.timeline}</div>
                    <div className="text-lg font-bold text-pink-400 mt-1">{m.valuation}</div>
                    <div className="text-xs text-slate-500">{m.revenue}</div>
                    <div className="text-xs text-slate-400 mt-1">{m.milestone}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RTMN Ecosystem Multiplier */}
            <div className="bg-slate-800/40 rounded-2xl p-6 border border-pink-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><ArrowUpRight className="w-6 h-6 text-pink-400" /> RTMN Ecosystem Multiplier</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { factor: 'Zero CAC via Nuqta Cross-Sell', detail: 'Existing Nuqta ecosystem users (500K+) see Glowzy promotions — no paid acquisition needed.' },
                  { factor: 'Adzy Beauty Ads', detail: 'Salons advertise through Adzy with measurable ROI. Beauty ad revenue creates dual monetization.' },
                  { factor: 'Qist BNPL for Premium Packages', detail: 'Bridal packages (2,500-10,000 AED) become accessible via installments. Higher AOV = higher commissions.' },
                  { factor: 'BizOne Salon Dashboard', detail: 'Salons manage bookings, inventory, staff, and analytics through BizOne — deep lock-in and switching cost.' },
                  { factor: 'Wasil Product Delivery', detail: 'Beauty product orders fulfilled by Wasil same-day delivery — instant product marketplace.' },
                  { factor: 'Eventora Bridal Integration', detail: 'Every wedding booked through Eventora = beauty package upsell. Highest-ticket category.' },
                ].map((f, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <h3 className="text-pink-400 font-bold text-sm mb-1">{f.factor}</h3>
                    <p className="text-slate-400 text-xs">{f.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>

      {/* ═══════════════ NAVIGATION ═══════════════ */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/wasil" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-400 transition-colors">
              <Truck className="w-5 h-5" /> Wasil
            </Link>
            <Link href="/eventora" className="inline-flex items-center gap-2 px-6 py-3 bg-violet-500 text-white rounded-xl font-bold hover:bg-violet-400 transition-colors">
              <Calendar className="w-5 h-5" /> Eventora
            </Link>
            <Link href="/fakhir" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Crown className="w-5 h-5" /> Fakhir
            </Link>
            <Link href="/nuqtapay" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-xl font-bold hover:bg-teal-400 transition-colors">
              <CreditCard className="w-5 h-5" /> NuqtaPay
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
