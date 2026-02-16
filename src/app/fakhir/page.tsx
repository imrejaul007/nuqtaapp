'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Crown, Gem, Star, Sparkles, Shield, Heart, Wine, Plane, Car, Home,
  Anchor, Users, Gift, CreditCard, Wallet, Phone, Clock, MapPin,
  CheckCircle, ArrowRight, Calendar, Utensils, Music, Camera,
  Shirt, Watch, Diamond, Building2, Briefcase, Globe, Award,
  ChevronDown, ChevronUp, Target, BarChart3, TrendingUp, Zap,
  Lock, UserCheck, Coins, Network, FileText, AlertTriangle,
  Rocket, Calculator, Send, Bell, Headphones, Key, Palmtree, ArrowUpRight
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';
import { FakhirLogo } from '@/components/CompanyLogos';

// Key Statistics
const keyStats = [
  { label: 'GCC HNWI Wealth', value: '$2.1T', suffix: 'total' },
  { label: 'Target Members Y1', value: '2,500', suffix: 'elite' },
  { label: 'Avg Annual Spend', value: '500K+', suffix: 'AED' },
  { label: 'Platform Commission', value: '5-15%', suffix: 'on services' },
];

// Luxury Services
const luxuryServices = [
  {
    name: 'Personal Concierge',
    arabic: 'خدمة شخصية',
    icon: Headphones,
    description: '24/7 dedicated lifestyle manager for all your needs',
    features: ['Dedicated relationship manager', 'Instant request fulfillment', 'Multi-language support', 'Family account access'],
    color: 'from-amber-500 to-yellow-600',
    textColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    pricing: 'Included',
    responseTime: '<15 min',
  },
  {
    name: 'Private Aviation',
    arabic: 'طيران خاص',
    icon: Plane,
    description: 'Charter jets, helicopters, and exclusive airport services',
    features: ['Private jet bookings', 'Helicopter transfers', 'VIP airport lounges', 'Fast-track immigration'],
    color: 'from-sky-500 to-blue-600',
    textColor: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    pricing: 'From 25,000 AED',
    responseTime: '2-4 hours',
  },
  {
    name: 'Luxury Motors',
    arabic: 'سيارات فاخرة',
    icon: Car,
    description: 'Exotic car rentals, chauffeur services, and yacht charters',
    features: ['Rolls Royce & Bentley fleet', 'Professional chauffeurs', 'Yacht & boat charters', 'Supercar experiences'],
    color: 'from-slate-600 to-slate-800',
    textColor: 'text-slate-300',
    bgColor: 'bg-slate-500/10',
    pricing: 'From 2,500 AED/day',
    responseTime: '1-2 hours',
  },
  {
    name: 'Fine Dining',
    arabic: 'مطاعم راقية',
    icon: Utensils,
    description: 'Exclusive reservations at Michelin-star restaurants',
    features: ['Priority reservations', "Chef's table access", 'Private dining rooms', 'Celebrity chef experiences'],
    color: 'from-rose-500 to-pink-600',
    textColor: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    pricing: 'Complimentary booking',
    responseTime: 'Same day',
  },
  {
    name: 'Bespoke Shopping',
    arabic: 'تسوق حصري',
    icon: Shirt,
    description: 'Personal stylists and private shopping experiences',
    features: ['Personal stylist', 'Private boutique access', 'Custom tailoring', 'Exclusive pre-launches'],
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    pricing: 'Complimentary styling',
    responseTime: '24 hours',
  },
  {
    name: 'VIP Events',
    arabic: 'فعاليات حصرية',
    icon: Music,
    description: 'Access to exclusive events, galas, and private concerts',
    features: ['F1 paddock access', 'Fashion week front row', 'Art Basel VIP', 'Private concerts'],
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    pricing: 'Member pricing',
    responseTime: '48 hours',
  },
  {
    name: 'Wellness & Spa',
    arabic: 'صحة وسبا',
    icon: Heart,
    description: 'Premium wellness retreats and spa experiences',
    features: ['Luxury spa bookings', 'Private wellness retreats', 'Personal trainers', 'Medical tourism'],
    color: 'from-emerald-500 to-teal-600',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    pricing: 'From 1,000 AED',
    responseTime: 'Same day',
  },
  {
    name: 'Real Estate',
    arabic: 'عقارات فاخرة',
    icon: Building2,
    description: 'Exclusive property access and investment opportunities',
    features: ['Off-market listings', 'Luxury rentals', 'Property investment', 'Golden Visa support'],
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    pricing: 'Advisory included',
    responseTime: '24-48 hours',
  },
];

// Membership Tiers
const membershipTiers = [
  {
    tier: 'Platinum',
    arabic: 'بلاتينيوم',
    price: 4999,
    period: 'year',
    color: 'border-slate-400',
    bgColor: 'bg-slate-500/10',
    textColor: 'text-slate-300',
    icon: Star,
    features: [
      '24/7 Concierge (response <1hr)',
      'Fine dining reservations',
      'Luxury car rentals (10% off)',
      'VIP event access',
      'Airport fast-track',
      '10,000 Nuqta coins welcome bonus',
    ],
    limits: {
      conciergeRequests: '50/month',
      guestPasses: '2/year',
      airportLounge: '12 visits/year',
    },
    bestFor: 'Professionals & executives',
  },
  {
    tier: 'Diamond',
    arabic: 'ألماس',
    price: 14999,
    period: 'year',
    color: 'border-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    textColor: 'text-[#c9a227]',
    icon: Diamond,
    recommended: true,
    features: [
      '24/7 Dedicated manager (response <15min)',
      "Priority restaurant & chef's tables",
      'Luxury car & yacht access (20% off)',
      'Front-row event seating',
      'Private jet booking assistance',
      'Exclusive member events',
      '50,000 Nuqta coins welcome bonus',
      'Family account (up to 4 members)',
    ],
    limits: {
      conciergeRequests: 'Unlimited',
      guestPasses: '6/year',
      airportLounge: 'Unlimited',
    },
    bestFor: 'HNWIs & family offices',
  },
  {
    tier: 'Royal',
    arabic: 'ملكي',
    price: 49999,
    period: 'year',
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-400',
    icon: Crown,
    features: [
      'White-glove 24/7 service (instant)',
      'Personal lifestyle director',
      'Complimentary luxury vehicles',
      'Private jet hours included',
      'Yacht charter credits',
      'Exclusive property access',
      'Art & collectibles advisory',
      'Global reciprocal memberships',
      '200,000 Nuqta coins welcome bonus',
      'Unlimited family accounts',
    ],
    limits: {
      conciergeRequests: 'Unlimited + Priority',
      guestPasses: 'Unlimited',
      airportLounge: 'Unlimited + Guests',
    },
    bestFor: 'Ultra-HNWIs & royal families',
  },
];

// Ecosystem Integration
const ecosystemIntegration = [
  {
    product: 'Hawil Card',
    icon: CreditCard,
    color: 'text-blue-400',
    integration: 'Exclusive Fakhir Black Card with unlimited benefits',
    benefit: 'No FX fees worldwide, 5% cashback at luxury partners',
  },
  {
    product: 'Nuqta+',
    icon: Star,
    color: 'text-[#c9a227]',
    integration: 'Auto-upgraded to Nuqta+ Premium with Fakhir membership',
    benefit: 'Triple coins on all luxury purchases',
  },
  {
    product: 'Safar',
    icon: Plane,
    color: 'text-cyan-400',
    integration: 'VIP travel booking with concierge assistance',
    benefit: 'Complimentary upgrades, lounge access, fast-track',
  },
  {
    product: 'Sakin',
    icon: Home,
    color: 'text-green-400',
    integration: 'Exclusive access to luxury property listings',
    benefit: 'Off-market properties, priority viewings',
  },
  {
    product: 'Rakab',
    icon: Car,
    color: 'text-orange-400',
    integration: 'Premium fleet access with priority pickup',
    benefit: 'Luxury vehicles, professional chauffeurs',
  },
  {
    product: 'Qist',
    icon: Wallet,
    color: 'text-violet-400',
    integration: 'Premium financing for luxury purchases',
    benefit: '0% interest on high-ticket items, higher limits',
  },
];

// Exclusive Partnerships
const partnerships = [
  { category: 'Hotels', brands: ['Four Seasons', 'Ritz-Carlton', 'Bulgari', 'Armani', 'One&Only'], perks: 'Suite upgrades, late checkout, spa credits' },
  { category: 'Fashion', brands: ['Louis Vuitton', 'Gucci', 'Chanel', 'Hermès', 'Dior'], perks: 'Private appointments, pre-launch access' },
  { category: 'Jewelry', brands: ['Cartier', 'Van Cleef', 'Bulgari', 'Chopard', 'Graff'], perks: 'Exclusive pieces, private viewings' },
  { category: 'Automotive', brands: ['Rolls Royce', 'Bentley', 'Ferrari', 'Lamborghini', 'Bugatti'], perks: 'Test drives, factory tours, priority orders' },
  { category: 'Dining', brands: ['Nobu', 'Zuma', 'Hakkasan', 'Caviar Russe', 'La Petite Maison'], perks: "Priority tables, chef's table access" },
  { category: 'Wellness', brands: ['Six Senses', 'Aman', 'ESPA', 'Talise', 'Guerlain'], perks: 'Priority bookings, exclusive treatments' },
];

// Use Cases
const useCases = [
  {
    persona: 'Royal Family Member',
    icon: Crown,
    scenario: 'Planning a private celebration',
    requests: ['Charter yacht for 50 guests', 'Michelin chef onboard', 'Live entertainment', 'Fireworks permit'],
    outcome: 'Complete event in 72 hours',
    value: '500,000+ AED event',
  },
  {
    persona: 'Business Executive',
    icon: Briefcase,
    scenario: 'Last-minute client entertainment',
    requests: ['F1 paddock passes', 'Helicopter to circuit', 'After-party reservations', 'Luxury gifts'],
    outcome: 'Seamless VIP experience',
    value: '50,000+ AED spend',
  },
  {
    persona: 'Celebrity/Influencer',
    icon: Sparkles,
    scenario: 'Private shopping experience',
    requests: ['Boutique closure', 'Personal stylist', 'Paparazzi-free entry', 'Secure transport'],
    outcome: 'Discreet luxury shopping',
    value: '100,000+ AED purchases',
  },
  {
    persona: 'Tourist (UHNW)',
    icon: Globe,
    scenario: 'First-time Dubai visit',
    requests: ['Private villa rental', 'Yacht day trip', 'Desert safari (private)', 'Gold souk guide'],
    outcome: 'Curated luxury itinerary',
    value: '200,000+ AED trip',
  },
];

// Financial Projections
const financialProjections = [
  { year: 'Year 1', members: 2500, revenue: 15, avgSpend: 300000, partnerships: 50 },
  { year: 'Year 2', members: 8000, revenue: 55, avgSpend: 400000, partnerships: 150 },
  { year: 'Year 3', members: 20000, revenue: 150, avgSpend: 500000, partnerships: 300 },
];

// Unit Economics
const unitEconomics = {
  avgMembershipFee: 15000,
  avgCommissionPerMember: 25000,
  ltv: 120000,
  cac: 5000,
  ltvCacRatio: 24,
  grossMargin: '45%',
};

// Roadmap
const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Dubai Elite Launch',
    timeline: 'Q2 2027',
    status: 'planned',
    color: 'border-amber-500',
    bgColor: 'bg-amber-500/10',
    milestones: [
      'Launch with 500 founding members',
      '25 luxury brand partnerships',
      '24/7 concierge team operational',
      'Fakhir Black Card issuance',
      'Exclusive launch events',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'UAE Expansion',
    timeline: 'Q4 2027',
    status: 'planned',
    color: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
    milestones: [
      'Expand to Abu Dhabi',
      '2,500 members milestone',
      'Private aviation partnerships',
      'Real estate advisory launch',
      'Art & collectibles service',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'GCC Luxury Network',
    timeline: '2028',
    status: 'planned',
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
    milestones: [
      'Launch in Saudi Arabia & Qatar',
      '10,000 members across GCC',
      'Global reciprocal partnerships',
      'Fakhir Lounges (physical spaces)',
      'Investment club launch',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Global Presence',
    timeline: '2029+',
    status: 'vision',
    color: 'border-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    milestones: [
      'Expand to London, Monaco, Singapore',
      '50,000+ global members',
      'Private members clubs',
      'Fakhir Investment Fund',
      'Luxury experiences marketplace',
    ],
  },
];

// GCC Expansion
const gccExpansion = {
  headline: 'The GCC Luxury Network',
  description: 'One membership, unlimited luxury across the entire Gulf region',
  countries: [
    { country: 'UAE', flag: '🇦🇪', status: 'Launch', cities: 'Dubai, Abu Dhabi', timeline: '2027', hnwi: '92,600' },
    { country: 'Saudi Arabia', flag: '🇸🇦', status: 'Phase 2', cities: 'Riyadh, Jeddah', timeline: '2028', hnwi: '295,000' },
    { country: 'Qatar', flag: '🇶🇦', status: 'Phase 2', cities: 'Doha', timeline: '2028', hnwi: '21,300' },
    { country: 'Kuwait', flag: '🇰🇼', status: 'Phase 3', cities: 'Kuwait City', timeline: '2029', hnwi: '40,500' },
    { country: 'Bahrain', flag: '🇧🇭', status: 'Phase 3', cities: 'Manama', timeline: '2029', hnwi: '7,200' },
    { country: 'Oman', flag: '🇴🇲', status: 'Phase 3', cities: 'Muscat', timeline: '2029', hnwi: '12,400' },
  ],
};

// Competitive Advantages
const competitiveAdvantages = [
  {
    advantage: 'Nuqta Ecosystem Integration',
    description: 'Only luxury service connected to payments, rewards, and financial products',
    vsCompetitors: 'Quintessentially, Velocity Black are standalone services',
    icon: Network,
  },
  {
    advantage: 'Middle East Focus',
    description: 'Deep local knowledge, Arabic-first, Islamic finance compatible',
    vsCompetitors: 'Global players lack regional expertise',
    icon: Globe,
  },
  {
    advantage: 'Tech-First Platform',
    description: 'Mobile app, AI-powered recommendations, instant fulfillment',
    vsCompetitors: 'Traditional concierge services are phone/email only',
    icon: Zap,
  },
  {
    advantage: 'Transparent Pricing',
    description: 'Clear membership tiers, no hidden fees, commission transparency',
    vsCompetitors: 'Competitors have opaque pricing structures',
    icon: Shield,
  },
  {
    advantage: 'Rewards Integration',
    description: 'Earn Nuqta coins on all luxury spending, redeem across ecosystem',
    vsCompetitors: 'No other luxury service offers integrated rewards',
    icon: Coins,
  },
];

// Risks
const risks = [
  {
    risk: 'High CAC for HNWI Acquisition',
    severity: 'medium',
    description: 'Reaching HNWIs requires premium marketing channels',
    mitigation: 'Referral program with generous rewards, exclusive events, partnership with private banks',
  },
  {
    risk: 'Service Quality Consistency',
    severity: 'high',
    description: 'Luxury expectations require flawless execution',
    mitigation: 'Rigorous partner vetting, real-time feedback loops, dedicated quality team',
  },
  {
    risk: 'Competition from Established Players',
    severity: 'medium',
    description: 'Quintessentially, Velocity Black have existing HNWI relationships',
    mitigation: 'Focus on GCC specialization, ecosystem integration, tech advantage',
  },
  {
    risk: 'Economic Downturn Impact',
    severity: 'low',
    description: 'Luxury spending may decrease in recession',
    mitigation: 'GCC wealth is oil-backed and resilient, focus on ultra-wealthy segment',
  },
];


const controls = [
  'Luxury marketplace curation',
  'VIP customer experience',
  'Authentication & verification',
  'Personal shopper platform',
  'Luxury concierge services',
  'Exclusive event access',
  'High-end brand partnerships',
  'Premium loyalty (Fakhir Circle)',
];

const doesNotOwn = [
  { item: 'Delivery (white-glove)', reason: 'Managed by Wasil / QuickDrop' },
  { item: 'Payment processing', reason: 'Managed by NuqtaPay / Hawil' },
  { item: 'User identity & KYC', reason: 'Managed by Rabtul Core' },
  { item: 'Insurance for luxury goods', reason: 'Managed by Daman' },
  { item: 'Compliance', reason: 'Managed by Amana' },
  { item: 'Advertising', reason: 'Managed by Adzy' },
  { item: 'Community & reviews', reason: 'Managed by Majlis' },
  { item: 'Event management', reason: 'Managed by Eventora' },
];

export default function FakhirPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Crown },
    { id: 'services', label: 'Services', icon: Sparkles },
    { id: 'membership', label: 'Membership', icon: Diamond },
    { id: 'partners', label: 'Partners', icon: Award },
    { id: 'ecosystem', label: 'Ecosystem', icon: Network },
    { id: 'gcc', label: 'GCC', icon: Globe },
    { id: 'financials', label: 'Financials', icon: BarChart3 },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket },
    { id: 'competition', label: 'Competition', icon: Target },
    { id: 'risks', label: 'Risks', icon: AlertTriangle },
    { id: 'deck', label: 'Pitch Deck', icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1c30] to-[#0a1628]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Luxury Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a227' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 flex items-center justify-center shadow-2xl shadow-amber-500/30 border-2 border-amber-400/30">
              <FakhirLogo size={80} className="hidden sm:block" />
              <FakhirLogo size={56} className="sm:hidden" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                <h1 className="text-3xl sm:text-5xl font-black text-white">Fakhir</h1>
                <span className="text-2xl sm:text-4xl text-amber-400 font-arabic">فاخر</span>
                <span className="px-2 sm:px-3 py-1 bg-amber-500/20 text-amber-400 text-xs sm:text-sm font-bold rounded-full border border-amber-500/30">
                  LUXURY
                </span>
              </div>
              <p className="text-lg sm:text-2xl text-amber-400 font-bold mb-2">The Art of Living</p>
              <p className="text-slate-300 text-sm sm:text-lg max-w-2xl">
                An exclusive luxury lifestyle and concierge service for the GCC&apos;s most discerning individuals.
                <strong className="text-white"> 24/7 white-glove service</strong>, access to the world&apos;s finest experiences,
                and seamless integration with the Nuqta ecosystem.
              </p>
            </div>
          </div>

          {/* Nuqta Group Badge */}
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#c9a227] flex items-center justify-center">
              <span className="text-[#0a1628] font-bold text-xs sm:text-sm">N</span>
            </div>
            <span className="text-slate-400 text-xs sm:text-sm">A Nuqta Group Company</span>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {keyStats.map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-amber-500/10 to-yellow-500/5 rounded-xl p-3 sm:p-5 border border-amber-500/30">
                <div className="text-xl sm:text-3xl font-black text-amber-400">{stat.value}</div>
                <div className="text-slate-400 text-xs sm:text-sm">{stat.label}</div>
                <div className="text-amber-400/60 text-[10px] sm:text-xs mt-1">{stat.suffix}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}

      {/* Controls / Does NOT Own */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-emerald-500/5 rounded-xl p-6 border border-emerald-500/30">
            <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> What Fakhir Controls</h3>
            <div className="space-y-2">{controls.map((c, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{c}</span></div>))}</div>
          </div>
          <div className="bg-orange-500/5 rounded-xl p-6 border border-orange-500/30">
            <h3 className="text-lg font-bold text-orange-400 mb-4 flex items-center gap-2"><ArrowRight className="w-5 h-5" /> Does NOT Own</h3>
            <div className="space-y-2">{doesNotOwn.map((d, i) => (<div key={i} className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300"><span className="text-white font-medium">{d.item}</span> \u2192 {d.reason}</span></div>))}</div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide gap-1 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-medium whitespace-nowrap transition-all text-xs sm:text-sm ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-[#0a1628]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Value Proposition */}
            <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-2 border-amber-500">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                Why Fakhir?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-amber-500/30">
                  <div className="text-amber-400 font-bold mb-2">24/7 White-Glove Service</div>
                  <p className="text-sm text-slate-400">Dedicated lifestyle managers available around the clock for any request, big or small</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-amber-500/30">
                  <div className="text-amber-400 font-bold mb-2">Exclusive Access</div>
                  <p className="text-sm text-slate-400">VIP entry to sold-out events, private viewings, off-market properties, and more</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-amber-500/30">
                  <div className="text-amber-400 font-bold mb-2">Ecosystem Benefits</div>
                  <p className="text-sm text-slate-400">Seamlessly connected to Hawil, Nuqta+, and all Nuqta products for maximum value</p>
                </div>
              </div>
            </div>

            {/* Services Preview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {luxuryServices.slice(0, 8).map((service, i) => (
                <div key={i} className={`${service.bgColor} border border-slate-700/50 rounded-xl p-3 sm:p-4 hover:scale-[1.02] transition-transform cursor-pointer`}
                  onClick={() => { setActiveTab('services'); setExpandedService(service.name); }}>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-2 sm:mb-3`}>
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className={`font-bold ${service.textColor} text-xs sm:text-sm`}>{service.name}</h3>
                  <span className="text-slate-500 text-xs">{service.arabic}</span>
                </div>
              ))}
            </div>

            {/* Use Cases */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Real Member Stories</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {useCases.map((useCase, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 sm:p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <useCase.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm sm:text-base">{useCase.persona}</h4>
                        <p className="text-slate-500 text-xs">{useCase.scenario}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                      {useCase.requests.map((item, j) => (
                        <span key={j} className="text-xs bg-amber-500/10 px-2 py-1 rounded text-amber-400">{item}</span>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="text-emerald-400 text-xs">{useCase.outcome}</div>
                      <div className="text-amber-400 font-bold text-xs">{useCase.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                How Fakhir Works
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {[
                  { step: 1, icon: UserCheck, title: 'Join', desc: 'Choose your membership tier' },
                  { step: 2, icon: Phone, title: 'Connect', desc: 'Get your dedicated manager' },
                  { step: 3, icon: Bell, title: 'Request', desc: 'App, call, or text anytime' },
                  { step: 4, icon: Zap, title: 'Fulfill', desc: 'We handle everything' },
                  { step: 5, icon: Coins, title: 'Earn', desc: 'Collect Nuqta coins' },
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-amber-500/20">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                      </div>
                      <div className="text-xs text-amber-400 mb-1">Step {step.step}</div>
                      <div className="text-white font-medium text-xs sm:text-sm">{step.title}</div>
                      <p className="text-xs text-slate-400 mt-1 hidden sm:block">{step.desc}</p>
                    </div>
                    {i < 4 && (
                      <ArrowRight className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-amber-500/50" size={20} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-4 sm:space-y-6">
            {luxuryServices.map((service, i) => (
              <div key={i} className={`${service.bgColor} border-2 rounded-xl overflow-hidden`} style={{ borderColor: service.textColor.replace('text-', '').replace('-400', '') }}>
                <button
                  onClick={() => setExpandedService(expandedService === service.name ? null : service.name)}
                  className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-lg sm:text-xl font-bold ${service.textColor}`}>
                        {service.name} <span className="text-slate-400 text-sm sm:text-base">{service.arabic}</span>
                      </h3>
                      <p className="text-slate-400 text-sm sm:text-base">{service.description}</p>
                    </div>
                  </div>
                  {expandedService === service.name ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {expandedService === service.name && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4">
                        <h4 className="text-white font-bold mb-2 sm:mb-3 text-sm sm:text-base">Features</h4>
                        <div className="space-y-2">
                          {service.features.map((feature, j) => (
                            <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                              <CheckCircle className={`w-4 h-4 ${service.textColor} flex-shrink-0`} />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4">
                        <h4 className="text-white font-bold mb-2 sm:mb-3 text-sm sm:text-base">Pricing</h4>
                        <div className={`text-xl sm:text-2xl font-bold ${service.textColor} mb-2`}>{service.pricing}</div>
                        <div className="text-slate-400 text-sm">Member pricing, no hidden fees</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4">
                        <h4 className="text-white font-bold mb-2 sm:mb-3 text-sm sm:text-base">Response Time</h4>
                        <div className="flex items-center gap-2">
                          <Clock className={`w-5 h-5 ${service.textColor}`} />
                          <span className="text-white font-bold">{service.responseTime}</span>
                        </div>
                        <div className="text-slate-400 text-sm mt-2">Average fulfillment time</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Membership Tab */}
        {activeTab === 'membership' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Choose Your Experience</h2>
              <p className="text-slate-400 text-sm sm:text-base">Three tiers of luxury, each crafted for discerning tastes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {membershipTiers.map((tier, i) => (
                <div key={i} className={`rounded-2xl p-4 sm:p-6 border-2 ${tier.color} ${tier.bgColor} relative`}>
                  {tier.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-[#0a1628] text-xs font-bold rounded-full whitespace-nowrap">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-4 mt-2 sm:mt-0">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${tier.bgColor} flex items-center justify-center border ${tier.color}`}>
                      <tier.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${tier.textColor}`} />
                    </div>
                    <div>
                      <h3 className={`text-lg sm:text-xl font-bold ${tier.textColor}`}>{tier.tier}</h3>
                      <span className="text-slate-400 text-sm">{tier.arabic}</span>
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <span className="text-3xl sm:text-4xl font-black text-white">{tier.price.toLocaleString()}</span>
                    <span className="text-slate-400 text-sm sm:text-base"> AED/{tier.period}</span>
                  </div>

                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {tier.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className={`w-4 h-4 ${tier.textColor} flex-shrink-0 mt-0.5`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-3 mb-4">
                    <div className="text-xs text-slate-400 mb-2">Limits</div>
                    <div className="grid grid-cols-1 gap-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Concierge</span>
                        <span className={tier.textColor}>{tier.limits.conciergeRequests}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Guest Passes</span>
                        <span className={tier.textColor}>{tier.limits.guestPasses}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Lounge Access</span>
                        <span className={tier.textColor}>{tier.limits.airportLounge}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-xs sm:text-sm text-slate-400">
                    Best for: <span className="text-white">{tier.bestFor}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Note */}
            <div className="bg-amber-500/10 rounded-xl p-4 sm:p-6 border border-amber-500/30 text-center">
              <Crown className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400 mx-auto mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Founding Member Offer</h3>
              <p className="text-slate-300 text-sm sm:text-base mb-4">
                Join as a founding member and receive <span className="text-amber-400 font-bold">lifetime 20% discount</span> on all tiers,
                plus exclusive founding member events and recognition.
              </p>
              <div className="text-amber-400 text-sm">Limited to first 500 members</div>
            </div>
          </div>
        )}

        {/* Partners Tab */}
        {activeTab === 'partners' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-2 border-amber-500">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                World-Class Partnerships
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Fakhir members enjoy exclusive access and privileges with the world&apos;s most prestigious brands.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {partnerships.map((partnership, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-4 sm:p-6 border border-slate-700/50">
                  <h3 className="text-lg sm:text-xl font-bold text-amber-400 mb-3 sm:mb-4">{partnership.category}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {partnership.brands.map((brand, j) => (
                      <span key={j} className="text-xs sm:text-sm bg-slate-900/50 px-2 sm:px-3 py-1 rounded-full text-white border border-slate-700/50">
                        {brand}
                      </span>
                    ))}
                  </div>
                  <div className="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/30">
                    <div className="text-emerald-400 text-xs sm:text-sm flex items-start gap-2">
                      <Gift className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      {partnership.perks}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ecosystem Tab */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/10 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Network className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a227]" />
                Nuqta Ecosystem Integration
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-4 sm:mb-6">
                Fakhir connects seamlessly with all Nuqta products for the ultimate luxury lifestyle experience.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {ecosystemIntegration.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color}`} />
                      <span className={`font-bold ${item.color}`}>{item.product}</span>
                    </div>
                    <p className="text-white text-sm mb-1">{item.integration}</p>
                    <p className="text-emerald-400 text-xs">{item.benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fakhir Black Card */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-4 sm:p-8 border-2 border-amber-500/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="w-16 h-10 sm:w-24 sm:h-16 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 sm:w-10 sm:h-10 text-[#0a1628]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Fakhir Black Card</h3>
                    <p className="text-amber-400 text-sm sm:text-base">Exclusive to Diamond & Royal members</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                    <div className="text-amber-400 font-bold text-lg sm:text-xl">0%</div>
                    <div className="text-xs text-slate-400">FX Fees Worldwide</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                    <div className="text-amber-400 font-bold text-lg sm:text-xl">5%</div>
                    <div className="text-xs text-slate-400">Cashback Luxury</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                    <div className="text-amber-400 font-bold text-lg sm:text-xl">∞</div>
                    <div className="text-xs text-slate-400">Lounge Access</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                    <div className="text-amber-400 font-bold text-lg sm:text-xl">24/7</div>
                    <div className="text-xs text-slate-400">Concierge Line</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GCC Tab */}
        {activeTab === 'gcc' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-amber-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-8 border-2 border-amber-500">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-3xl font-black text-white">{gccExpansion.headline}</h2>
                  <p className="text-amber-400 text-sm sm:text-lg">{gccExpansion.description}</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base">
                The GCC is home to <strong className="text-white">469,000+ HNWIs</strong> with combined wealth exceeding
                <strong className="text-amber-400"> $2.1 trillion</strong>. Fakhir will be the first pan-GCC luxury lifestyle platform.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {gccExpansion.countries.map((country, i) => (
                <div key={i} className={`bg-slate-800/50 rounded-xl p-5 border-2 ${
                  country.status === 'Launch' ? 'border-amber-500' :
                  country.status === 'Phase 2' ? 'border-blue-500' :
                  'border-purple-500'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{country.flag}</span>
                      <div>
                        <h4 className="font-bold text-white">{country.country}</h4>
                        <span className="text-slate-500 text-sm">{country.cities}</span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      country.status === 'Launch' ? 'bg-amber-500/20 text-amber-400' :
                      country.status === 'Phase 2' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {country.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <div className="text-slate-400 text-xs">HNWIs</div>
                      <div className="text-amber-400 font-bold">{country.hnwi}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-400 text-xs">Launch</div>
                      <div className="text-white font-bold">{country.timeline}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Financials Tab */}
        {activeTab === 'financials' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-4 sm:p-6 border-2 border-green-500">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                Financial Projections
              </h2>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full text-xs sm:text-sm min-w-[400px]">
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
                      <td className="py-3 px-4 text-slate-300">Members</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="text-right py-3 px-4 text-white">{proj.members.toLocaleString()}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Revenue (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="text-right py-3 px-4 text-emerald-400 font-bold">{proj.revenue}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Avg Member Spend</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="text-right py-3 px-4 text-amber-400">{(proj.avgSpend / 1000).toFixed(0)}K AED</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-300">Brand Partners</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="text-right py-3 px-4 text-white">{proj.partnerships}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Unit Economics */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                Unit Economics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-lg sm:text-2xl font-bold text-amber-400">{unitEconomics.avgMembershipFee.toLocaleString()}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Avg Membership (AED)</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-lg sm:text-2xl font-bold text-green-400">{unitEconomics.avgCommissionPerMember.toLocaleString()}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Avg Commission (AED)</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-lg sm:text-2xl font-bold text-white">{unitEconomics.ltv.toLocaleString()}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">LTV (AED)</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-lg sm:text-2xl font-bold text-white">{unitEconomics.cac.toLocaleString()}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">CAC (AED)</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-lg sm:text-2xl font-bold text-emerald-400">{unitEconomics.ltvCacRatio}x</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">LTV:CAC Ratio</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-lg sm:text-2xl font-bold text-amber-400">{unitEconomics.grossMargin}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Gross Margin</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <div className="space-y-4 sm:space-y-6">
            {roadmapPhases.map((phase, i) => (
              <div key={i} className={`${phase.bgColor} rounded-xl p-4 sm:p-6 border-2 ${phase.color}`}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-3 sm:mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base ${
                      phase.status === 'planned' ? 'bg-amber-500' : 'bg-[#c9a227]'
                    }`}>
                      {phase.phase.replace('Phase ', '')}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">{phase.phase}: {phase.title}</h3>
                      <span className="text-slate-400 text-xs sm:text-sm">{phase.timeline}</span>
                    </div>
                  </div>
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-bold ${
                    phase.status === 'planned' ? 'bg-amber-500/20 text-amber-400' : 'bg-[#c9a227]/20 text-[#c9a227]'
                  }`}>
                    {phase.status === 'planned' ? 'Planned' : 'Vision'}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {phase.milestones.map((milestone, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className={`w-4 h-4 ${phase.status === 'planned' ? 'text-amber-400' : 'text-[#c9a227]'}`} />
                      {milestone}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Competition Tab */}
        {activeTab === 'competition' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border border-amber-500/30 mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2">Competitive Landscape</h2>
              <p className="text-slate-300 text-sm sm:text-base">
                The luxury concierge market is dominated by global players like Quintessentially and Velocity Black.
                Fakhir&apos;s advantage: <span className="text-amber-400">GCC focus + Nuqta ecosystem + tech-first approach</span>.
              </p>
            </div>

            {competitiveAdvantages.map((adv, i) => (
              <div key={i} className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <adv.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">{adv.advantage}</h3>
                    <p className="text-slate-300 text-sm sm:text-base mb-2">{adv.description}</p>
                    <div className="bg-red-500/10 rounded-lg p-2 sm:p-3 border border-red-500/30">
                      <span className="text-red-400 text-xs sm:text-sm">vs Competition: {adv.vsCompetitors}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Risks Tab */}
        {activeTab === 'risks' && (
          <div className="space-y-4 sm:space-y-6">
            {risks.map((risk, i) => (
              <div key={i} className="bg-slate-800/30 rounded-xl overflow-hidden border border-slate-700/50">
                <button
                  onClick={() => setExpandedRisk(expandedRisk === risk.risk ? null : risk.risk)}
                  className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${
                      risk.severity === 'high' ? 'bg-red-500/20' :
                      risk.severity === 'medium' ? 'bg-yellow-500/20' :
                      'bg-green-500/20'
                    }`}>
                      <AlertTriangle className={`w-5 h-5 sm:w-6 sm:h-6 ${
                        risk.severity === 'high' ? 'text-red-400' :
                        risk.severity === 'medium' ? 'text-yellow-400' :
                        'text-green-400'
                      }`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm sm:text-base font-bold text-white">{risk.risk}</h3>
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                          risk.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                          risk.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {risk.severity}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs sm:text-sm">{risk.description}</p>
                    </div>
                  </div>
                  {expandedRisk === risk.risk ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {expandedRisk === risk.risk && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                    <div className="bg-emerald-500/10 rounded-lg p-3 sm:p-4 border border-emerald-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 font-bold text-sm">Mitigation Strategy</span>
                      </div>
                      <p className="text-slate-300 text-sm">{risk.mitigation}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Pitch Deck Tab */}
        {activeTab === 'deck' && (
          <div className="space-y-8">
            {/* Investment Thesis */}
            <div className="bg-gradient-to-r from-amber-500/20 to-amber-500/5 rounded-2xl p-6 border border-amber-500/30">
              <h2 className="text-2xl font-bold text-white mb-2">Investment Thesis</h2>
              <p className="text-slate-300 leading-relaxed">
                Fakhir captures the GCC&apos;s $2.1T HNWI wealth pool with a digital-first luxury concierge platform — the only service
                integrated with payments, rewards, and BNPL. Premium memberships (999-4,999 AED/month) create predictable recurring
                revenue with 80%+ gross margins across 70K+ UAE HNWIs and 200K+ affluent professionals.
              </p>
            </div>

            {/* Market Opportunity */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Market Opportunity</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'TAM', value: '$15B+', detail: 'UAE Luxury Market Size' },
                  { label: 'SAM', value: '70K+', detail: 'UAE HNWIs' },
                  { label: 'SOM', value: '200K+', detail: 'Affluent Professionals' },
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
                  { title: '24/7 White-Glove Concierge', desc: 'Dedicated lifestyle managers fulfilling requests in minutes, not hours' },
                  { title: 'Nuqta Platinum Rewards', desc: 'Triple coins on every luxury purchase, redeemable across ecosystem' },
                  { title: 'Qist Luxury BNPL', desc: '0% interest on private jets, yacht charters, fine jewelry' },
                  { title: 'Curated Exclusivity', desc: 'Off-market properties, sold-out events, limited-edition collections' },
                  { title: 'GCC-Native Excellence', desc: 'Arabic-first, Sharia-compliant, deep regional partnerships' },
                  { title: 'Full Ecosystem Synergy', desc: 'Connected to Hawil, Safar, Rakab, Dinezy — one luxury lifestyle app' },
                ].map(d => (
                  <div key={d.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
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
                  <tr className="border-b border-slate-700/50"><td className="py-2 text-slate-300">Members</td><td className="text-right text-white">2,000</td><td className="text-right text-white">8,000</td><td className="text-right text-white">20,000</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-2 text-slate-300">Revenue (AED M)</td><td className="text-right text-amber-400 font-bold">15M</td><td className="text-right text-amber-400 font-bold">60M</td><td className="text-right text-amber-400 font-bold">180M</td></tr>
                  <tr><td className="py-2 text-slate-300">Net Profit (AED M)</td><td className="text-right text-emerald-400">5M</td><td className="text-right text-emerald-400">25M</td><td className="text-right text-emerald-400">75M</td></tr>
                </tbody>
              </table>
            </div>

            {/* Comparable Companies */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Comparable Companies</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Quintessentially', val: '$500M+', metric: '5K members globally' },
                  { name: 'Ten Lifestyle', val: '$200M', metric: 'Listed on LSE' },
                  { name: 'John Paul (Accor)', val: 'Acquired', metric: 'Strategic acquisition' },
                  { name: 'Velocity Black', val: '$100M+', metric: 'AI-powered concierge' },
                ].map(c => (
                  <div key={c.name} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
                    <div className="text-sm font-bold text-white">{c.name}</div>
                    <div className="text-lg font-black text-amber-400 mt-1">{c.val}</div>
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
                  { ms: 'Year 1: Foundation', val: '2K members, 15M AED', detail: 'Dubai launch, 50 brand partners' },
                  { ms: 'Year 2: Scale', val: '8K members, 60M AED', detail: 'UAE-wide, private aviation' },
                  { ms: 'Year 3: Dominance', val: '20K members, 180M AED', detail: 'GCC expansion, physical lounges' },
                  { ms: 'Year 4-5: Unicorn', val: '50K+ members, 500M+ AED', detail: 'Global, $1B+ valuation' },
                ].map(m => (
                  <div key={m.ms} className="bg-slate-900/50 rounded-lg p-3 border border-amber-500/20">
                    <div className="text-xs text-amber-400 font-bold">{m.ms}</div>
                    <div className="text-sm font-bold text-white mt-1">{m.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{m.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RTMN Multiplier */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-transparent rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-[#c9a227] mb-3">RTMN Ecosystem Multiplier</h3>
              <p className="text-slate-300 text-sm mb-4">Fakhir is the highest-ARPU consumer vertical in the RTMN ecosystem. Every luxury request flows through sister products.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { product: 'Safar', role: 'Private jet & VIP travel' },
                  { product: 'Dinezy', role: 'Michelin-star dining' },
                  { product: 'Eventora', role: 'Exclusive events & VIP' },
                  { product: 'Rakab Black', role: 'Black car & chauffeur' },
                  { product: 'Qist', role: 'Luxury BNPL — 0% interest' },
                  { product: 'Hawil Card', role: 'Fakhir Black Card' },
                ].map(s => (
                  <div key={s.product} className="bg-slate-800/50 rounded-lg px-3 py-2 border border-[#c9a227]/20">
                    <div className="text-xs font-bold text-[#c9a227]">{s.product}</div>
                    <div className="text-xs text-slate-400">{s.role}</div>
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
