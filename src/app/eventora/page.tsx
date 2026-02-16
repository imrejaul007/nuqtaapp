'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar, Users, Music, Ticket, MapPin, Megaphone,
  Star, ArrowRight, CheckCircle, ChevronDown, ChevronUp,
  Database, Activity, Zap, QrCode, BarChart3,
  DollarSign, Globe, CreditCard, ArrowUpRight,
  Clock, Shield, Target, PieChart, Smartphone,
  LayoutGrid, ChevronRight, Car, Coins,
  Search, Heart, TrendingUp, Award,
  Store, Crown, Armchair, UserPlus, Eye,
  Briefcase
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── Hero Stats ────────────────────────────────────────────────
const heroStats = [
  { label: 'Events Listed', value: '10K+', color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/30' },
  { label: 'QR Tickets Issued', value: '250K+', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  { label: 'NuqtaPay Checkouts', value: '180K+', color: 'text-teal-400', bg: 'bg-teal-500/10', border: 'border-teal-500/30' },
  { label: 'Rakab Rides Booked', value: '45K+', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
  { label: 'Nuqta Coins Earned', value: '5M+', color: 'text-[#c9a227]', bg: 'bg-[#c9a227]/10', border: 'border-[#c9a227]/30' },
];

// ─── Core Features (8) ────────────────────────────────────────
const coreFeatures = [
  {
    id: 'event-discovery',
    name: 'Event Discovery',
    icon: Search,
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/30',
    description: 'AI-curated event feed personalized to user interests, location, and social graph for discovering experiences.',
    capabilities: [
      'Personalized event recommendations via AI',
      'Category-based browsing (music, sports, food, tech)',
      'Location-based nearby event discovery',
      'Social feed showing friends attending events',
      'Trending events and editorial picks',
      'Calendar sync and event reminders',
    ],
    metric: '10K+ events',
  },
  {
    id: 'online-ticketing',
    name: 'Online Ticketing',
    icon: Ticket,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    description: 'Full-featured ticketing platform with multiple ticket types, early bird pricing, and group discounts.',
    capabilities: [
      'Multiple ticket types (General, VIP, Early Bird)',
      'Group discounts and promo codes',
      'Tiered pricing with auto-escalation',
      'Waitlist management for sold-out events',
      'Ticket transfer and gifting',
      'Refund and cancellation policies',
    ],
    metric: '250K+ tickets sold',
  },
  {
    id: 'qr-entry',
    name: 'QR Entry System',
    icon: QrCode,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    description: 'Contactless QR-based entry with real-time validation, duplicate detection, and attendance tracking.',
    capabilities: [
      'Unique QR code per ticket',
      'Real-time scan validation',
      'Duplicate ticket detection',
      'Offline scanning capability',
      'Multi-gate entry management',
      'Live attendance counter dashboard',
    ],
    metric: '< 2 sec scan',
  },
  {
    id: 'seat-selection',
    name: 'Seat Selection',
    icon: Armchair,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    description: 'Interactive seat maps for venues with real-time availability, price zones, and accessible seating options.',
    capabilities: [
      'Interactive venue seat maps',
      'Real-time seat availability updates',
      'Price zones with color coding',
      'Best available seat suggestions',
      'Accessible seating options',
      'Group seating (book seats together)',
    ],
    metric: '50+ venue maps',
  },
  {
    id: 'management-portal',
    name: 'Event Management Portal',
    icon: LayoutGrid,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    description: 'Comprehensive organizer dashboard for creating, managing, and monitoring events from listing to settlement.',
    capabilities: [
      'Event creation wizard with templates',
      'Multi-event management dashboard',
      'Team access and role permissions',
      'Attendee communication tools',
      'Check-in staff management',
      'Post-event settlement and reporting',
    ],
    metric: '500+ organizers',
  },
  {
    id: 'organizer-analytics',
    name: 'Organizer Analytics',
    icon: BarChart3,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    description: 'Deep analytics for organizers covering ticket sales, demographics, revenue, and marketing attribution.',
    capabilities: [
      'Real-time ticket sales dashboard',
      'Demographic breakdown of attendees',
      'Revenue analytics and projections',
      'Marketing channel attribution',
      'Historical performance comparison',
      'Custom report generation',
    ],
    metric: 'Real-time data',
  },
  {
    id: 'rakab-transport',
    name: 'Rakab Transport Integration',
    icon: Car,
    color: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/30',
    description: 'Seamless ride-hailing integration with Rakab for getting to and from events with pre-scheduled pickups.',
    capabilities: [
      'Pre-schedule ride to event venue',
      'Post-event pickup coordination',
      'Group ride sharing for attendees',
      'Event-specific surge-free pricing',
      'Venue-specific pickup/dropoff points',
      'Ride reminders synced to event time',
    ],
    metric: '45K+ rides',
  },
  {
    id: 'nuqta-coins',
    name: 'Nuqta Coins on Tickets',
    icon: Coins,
    color: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]/30',
    description: 'Earn Nuqta Coins on every ticket purchase and attendance. Redeem coins for discounts on future events.',
    capabilities: [
      'Earn 5x coins on ticket purchases',
      'Bonus coins for check-in attendance',
      'Redeem coins for ticket discounts',
      'Loyalty tiers for frequent attendees',
      'Referral coins for inviting friends',
      'Special coin multiplier events',
    ],
    metric: '5M+ coins earned',
  },
];

// ─── How It Works Steps ────────────────────────────────────────
const howItWorksSteps = [
  {
    step: 1,
    title: 'Browse Events',
    description: 'Discover events through personalized AI recommendations, category browsing, or social feed showing what friends are attending.',
    icon: Search,
    color: 'text-violet-400',
  },
  {
    step: 2,
    title: 'Select Seats',
    description: 'Choose your perfect seats using interactive venue maps with real-time availability and price zone visualization.',
    icon: Armchair,
    color: 'text-blue-400',
  },
  {
    step: 3,
    title: 'Pay (NuqtaPay/Qist)',
    description: 'Checkout with NuqtaPay for instant payment, or use Qist BNPL to split expensive event tickets into installments.',
    icon: CreditCard,
    color: 'text-teal-400',
  },
  {
    step: 4,
    title: 'Get QR Ticket',
    description: 'Receive your unique QR ticket instantly. Add to wallet, share with friends, or print for backup entry.',
    icon: QrCode,
    color: 'text-emerald-400',
  },
  {
    step: 5,
    title: 'Attend Event',
    description: 'Scan QR for contactless entry in under 2 seconds. Rakab ride pre-scheduled for seamless transport.',
    icon: Ticket,
    color: 'text-orange-400',
  },
  {
    step: 6,
    title: 'Rate & Earn Coins',
    description: 'Rate the event, leave a review, and earn Nuqta Coins. Coins can be redeemed for discounts on future events.',
    icon: Coins,
    color: 'text-[#c9a227]',
  },
];

// ─── Pricing ─────────────────────────────────────────────────
const pricingTiers = [
  {
    name: 'Free Listing',
    price: 'Free',
    period: 'forever',
    description: 'List your events for free. Pay only when you sell tickets through the platform.',
    color: 'text-slate-400',
    bg: 'bg-slate-500/10',
    border: 'border-slate-500/30',
    highlight: false,
    features: [
      'Unlimited event listings',
      'Basic event page with description',
      'QR ticket generation',
      'Standard check-in tools',
      'Basic analytics',
      'Email attendee communication',
      '10% commission on ticket sales',
      'Settlement within 7 business days',
    ],
  },
  {
    name: 'Pro Organizer',
    price: '5-7.5%',
    period: 'commission',
    description: 'Lower commission rates with premium tools for professional event organizers.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/30',
    highlight: true,
    features: [
      'Everything in Free Listing',
      'Interactive seat maps',
      'Advanced analytics dashboard',
      'Marketing tools and promo codes',
      'Custom branding on event pages',
      'Multi-event management',
      'Team access (up to 10 staff)',
      '5-7.5% commission on sales',
      'Settlement within 3 business days',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'Custom solutions for large venues, festivals, and event management companies.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/30',
    highlight: false,
    features: [
      'Everything in Pro Organizer',
      'White-label ticketing option',
      'API access for custom integrations',
      'Dedicated account manager',
      'Custom venue map creation',
      'Advanced fraud prevention',
      'Negotiated commission rates',
      'Same-day settlement option',
      'SLA guarantees',
      'Adzy promotional campaigns included',
    ],
  },
];

// ─── Unit Economics ─────────────────────────────────────────────
const unitEconomics = [
  { metric: 'Avg Ticket Price', value: '150 AED', description: 'Average ticket price across all event categories and ticket types', icon: Ticket, color: 'text-violet-400' },
  { metric: 'Commission Rate', value: '7.5%', description: 'Average blended commission rate across all organizer tiers', icon: DollarSign, color: 'text-blue-400' },
  { metric: 'Net per Ticket', value: '11 AED', description: 'Net revenue per ticket after payment processing and platform costs', icon: TrendingUp, color: 'text-emerald-400' },
  { metric: 'Avg Tickets/Event', value: '500', description: 'Average number of tickets sold per event on the platform', icon: Users, color: 'text-orange-400' },
  { metric: 'Revenue per Event', value: '5,500 AED', description: 'Average platform revenue generated per event (500 x 11 AED)', icon: PieChart, color: 'text-teal-400' },
  { metric: 'Monthly Events', value: '800+', description: 'Average number of ticketed events per month on the platform', icon: Calendar, color: 'text-pink-400' },
];

// ─── Revenue Model ──────────────────────────────────────────────
const revenueStreams = [
  {
    stream: 'Ticket Commissions',
    description: 'Commission on every ticket sold through the platform (5-10% based on organizer tier)',
    percentage: '50%',
    icon: Ticket,
    color: 'text-violet-400',
    projected: '26M AED/yr at 800 events/mo',
  },
  {
    stream: 'Organizer Subscriptions',
    description: 'Premium tools and reduced commission rates for professional organizers and venues',
    percentage: '15%',
    icon: Star,
    color: 'text-blue-400',
    projected: '7.8M AED/yr',
  },
  {
    stream: 'Adzy Event Promotion',
    description: 'Paid promotion services for events through the Adzy advertising platform',
    percentage: '20%',
    icon: Megaphone,
    color: 'text-pink-400',
    projected: '10.4M AED/yr',
  },
  {
    stream: 'Rakab Transport Referral',
    description: 'Referral commissions from Rakab rides booked through event-integrated transport',
    percentage: '15%',
    icon: Car,
    color: 'text-teal-400',
    projected: '7.8M AED/yr',
  },
];

// ─── Market Opportunity ─────────────────────────────────────────
const marketData = {
  tam: '$3B+',
  tamLabel: 'UAE Events Market',
  segments: [
    { name: 'Concerts & Entertainment', size: '$900M', share: '30%', color: 'bg-violet-500' },
    { name: 'Sports Events', size: '$600M', share: '20%', color: 'bg-blue-500' },
    { name: 'Conferences & Business', size: '$540M', share: '18%', color: 'bg-teal-500' },
    { name: 'Cultural & Arts', size: '$420M', share: '14%', color: 'bg-orange-500' },
    { name: 'Community & Social', size: '$540M', share: '18%', color: 'bg-pink-500' },
  ],
  growth: '15% CAGR',
  annualEvents: '10K+',
  drivers: [
    'UAE positioning as global entertainment and events hub',
    'Expo legacy driving world-class event infrastructure',
    'Young, affluent population with high entertainment spend',
    'Government investment in culture, sports, and tourism sectors',
  ],
};

// ─── Competitors ────────────────────────────────────────────────
const competitors = [
  {
    name: 'Platinumlist',
    strengths: 'Established UAE brand, strong venue partnerships, wide catalog',
    weaknesses: 'No ecosystem integration, no BNPL, limited analytics for organizers',
    pricing: '5-15% commission',
  },
  {
    name: 'BookMyShow',
    strengths: 'Large Indian user base, strong in cinema and entertainment',
    weaknesses: 'India-focused, limited GCC presence, no transport integration',
    pricing: '5-20% commission',
  },
  {
    name: 'Virgin Tickets',
    strengths: 'Premium brand, exclusive event partnerships',
    weaknesses: 'Limited to music/entertainment, no loyalty program, high fees',
    pricing: '10-20% commission + booking fees',
  },
];

const competitiveAdvantages = [
  'NuqtaPay integration: seamless checkout with multiple payment options',
  'Qist BNPL: split expensive event tickets into installments',
  'Rakab transport: pre-scheduled rides to and from events',
  'Adzy promotion: integrated advertising platform for event marketing',
  'Nuqta Coins: loyalty rewards making every ticket purchase rewarding',
  'Ecosystem flywheel: events drive user acquisition across all RTMN apps',
];

// ─── Ecosystem Integrations ─────────────────────────────────────
const ecosystemIntegrations = [
  {
    app: 'NuqtaPay Checkout',
    description: 'Seamless payment processing with cards, wallets, and NuqtaPay balance for instant ticket purchase.',
    type: 'Payments',
    color: 'text-teal-400',
    icon: CreditCard,
  },
  {
    app: 'Qist BNPL',
    description: 'Buy now, pay later for expensive events. Split concert, VIP, and festival tickets into 3-6 monthly payments.',
    type: 'Finance',
    color: 'text-purple-400',
    icon: DollarSign,
  },
  {
    app: 'Rakab Transport',
    description: 'Pre-schedule rides to events. Post-event pickup coordination with surge-free pricing near venues.',
    type: 'Transport',
    color: 'text-orange-400',
    icon: Car,
  },
  {
    app: 'Adzy Promotion',
    description: 'Promote events through targeted advertising on the Adzy platform to reach the right audience segments.',
    type: 'Marketing',
    color: 'text-pink-400',
    icon: Megaphone,
  },
  {
    app: 'Nuqta Coins',
    description: 'Earn 5x loyalty coins on every ticket purchase and check-in. Redeem for discounts on future events.',
    type: 'Loyalty',
    color: 'text-[#c9a227]',
    icon: Coins,
  },
];

// ─── Event Categories ───────────────────────────────────────────
const eventCategories = [
  { name: 'Concerts & Music', events: '3,200+', avgPrice: '250 AED', color: 'text-violet-400', icon: Music },
  { name: 'Sports & Fitness', events: '1,800+', avgPrice: '120 AED', color: 'text-blue-400', icon: Award },
  { name: 'Food & Dining', events: '1,500+', avgPrice: '180 AED', color: 'text-orange-400', icon: Store },
  { name: 'Business & Tech', events: '1,200+', avgPrice: '350 AED', color: 'text-teal-400', icon: Users },
  { name: 'Arts & Culture', events: '900+', avgPrice: '100 AED', color: 'text-pink-400', icon: Heart },
  { name: 'Community & Social', events: '1,400+', avgPrice: '50 AED', color: 'text-emerald-400', icon: UserPlus },
];


const controls = [
  'Event creation & management',
  'Ticketing & RSVP engine',
  'Venue booking marketplace',
  'Event logistics coordinator',
  'Attendee management',
  'Event analytics dashboard',
  'Vendor marketplace for events',
  'Live streaming integration',
];

const doesNotOwn = [
  { item: 'Payment & ticketing payments', reason: 'Managed by NuqtaPay' },
  { item: 'Food & catering sourcing', reason: 'Managed by Mazra' },
  { item: 'Event promotion', reason: 'Managed by Adzy' },
  { item: 'Venue real estate', reason: 'Managed by Aqar' },
  { item: 'Staff hiring for events', reason: 'Managed by Tawzeef' },
  { item: 'Event insurance', reason: 'Managed by Daman' },
  { item: 'Compliance & permits', reason: 'Managed by Khedma + Amana' },
  { item: 'Community event boards', reason: 'Managed by Majlis' },
];

export default function EventoraPage() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>('event-discovery');
  const [activeTab, setActiveTab] = useState<'features' | 'pricing' | 'market' | 'deck'>('features');

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <div className="bg-gradient-to-br from-[#0a1628] via-violet-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 mb-6 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-xl shadow-violet-500/30">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Eventora
              </h1>
              <p className="text-violet-400 text-lg sm:text-xl font-semibold mt-1">
                Event Discovery, Ticketing & Management
              </p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            The complete events platform for the UAE. From discovering experiences to QR-based entry,
            Eventora connects event-goers with organizers while earning Nuqta Coins on every ticket.
            Integrated with NuqtaPay for checkout, Qist for BNPL, and Rakab for transport.
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

      {/* Controls / Does NOT Own */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-emerald-500/5 rounded-xl p-6 border border-emerald-500/30">
            <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> What Eventora Controls</h3>
            <div className="space-y-2">{controls.map((c, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{c}</span></div>))}</div>
          </div>
          <div className="bg-orange-500/5 rounded-xl p-6 border border-orange-500/30">
            <h3 className="text-lg font-bold text-orange-400 mb-4 flex items-center gap-2"><ArrowRight className="w-5 h-5" /> Does NOT Own</h3>
            <div className="space-y-2">{doesNotOwn.map((d, i) => (<div key={i} className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300"><span className="text-white font-medium">{d.item}</span> \u2192 {d.reason}</span></div>))}</div>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-700/50 bg-slate-900/30 sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto">
            {[
              { key: 'features' as const, label: 'Core Features', icon: LayoutGrid },
              { key: 'pricing' as const, label: 'Pricing & Economics', icon: DollarSign },
              { key: 'market' as const, label: 'Market & Competition', icon: Globe },
              { key: 'deck' as const, label: 'Pitch Deck', icon: Briefcase },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'border-violet-400 text-violet-400'
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
        {/* ═══════════════ FEATURES TAB ═══════════════ */}
        {activeTab === 'features' && (
          <>
            {/* 8 Core Features */}
            <h2 className="text-2xl font-bold text-white mb-2">8 Core Features</h2>
            <p className="text-slate-400 mb-8">Everything for discovering, booking, attending, and managing events.</p>

            <div className="space-y-4">
              {coreFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className={`${feature.bgColor} border ${feature.borderColor} rounded-xl overflow-hidden transition-all`}
                >
                  <button
                    onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center border ${feature.borderColor}`}>
                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className={`text-base sm:text-lg font-bold ${feature.color}`}>
                            {feature.name}
                          </h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${feature.bgColor} ${feature.color} border ${feature.borderColor}`}>
                            {feature.metric}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm mt-0.5 line-clamp-1">{feature.description}</p>
                      </div>
                    </div>
                    {expandedFeature === feature.id ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                    )}
                  </button>

                  {expandedFeature === feature.id && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5">
                      <p className="text-slate-300 text-sm mb-4">{feature.description}</p>
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                        <h4 className="text-white font-bold mb-3 text-sm">Capabilities</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {feature.capabilities.map((cap, i) => (
                            <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                              <CheckCircle className={`w-4 h-4 ${feature.color} flex-shrink-0`} />
                              {cap}
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
              <p className="text-slate-400 mb-8">Six steps from discovering an event to earning rewards.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {howItWorksSteps.map((step) => (
                  <div key={step.step} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 font-bold text-lg border border-violet-500/30">
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

            {/* Event Categories */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">Event Categories</h2>
              <p className="text-slate-400 mb-6">Covering every type of experience in the UAE.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {eventCategories.map((cat, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-violet-500/30 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <cat.icon className={`w-6 h-6 ${cat.color}`} />
                      <h4 className={`font-bold ${cat.color}`}>{cat.name}</h4>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-bold">{cat.events}</div>
                        <div className="text-slate-500 text-xs">events listed</div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${cat.color}`}>{cat.avgPrice}</div>
                        <div className="text-slate-500 text-xs">avg ticket price</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ecosystem Integrations */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">Ecosystem Integrations</h2>
              <p className="text-slate-400 mb-6">Deeply connected to the RTMN ecosystem for the complete event experience.</p>

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
            <h2 className="text-2xl font-bold text-white mb-2">Pricing Plans</h2>
            <p className="text-slate-400 mb-8">Free to list, commission-based on ticket sales.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingTiers.map((tier, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-6 border-2 ${tier.highlight ? 'border-violet-500 ring-2 ring-violet-500/20' : `${tier.border} border`} ${tier.bg} relative`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full">
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
              <p className="text-slate-400 mb-8">The numbers behind every ticket sold on Eventora.</p>

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
              <p className="text-slate-400 mb-8">Four revenue streams from the events ecosystem.</p>

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
              <div className="mt-6 bg-violet-500/10 rounded-xl p-6 border border-violet-500/30 text-center">
                <div className="text-sm text-slate-400 mb-1">Total Projected Annual Revenue</div>
                <div className="text-3xl font-black text-violet-400">52M AED/yr</div>
                <div className="text-xs text-slate-500 mt-1">at 800+ events/month with 500 avg tickets per event</div>
              </div>
            </div>
          </>
        )}

        {/* ═══════════════ MARKET & COMPETITION TAB ═══════════════ */}
        {activeTab === 'market' && (
          <>
            {/* Market Opportunity */}
            <h2 className="text-2xl font-bold text-white mb-2">Market Opportunity</h2>
            <p className="text-slate-400 mb-8">UAE is a global events hub with massive growth potential.</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-violet-500/10 rounded-xl p-6 border border-violet-500/30 text-center lg:col-span-1">
                <div className="text-sm text-slate-400 mb-2">Total Addressable Market</div>
                <div className="text-4xl font-black text-violet-400">{marketData.tam}</div>
                <div className="text-sm text-violet-400/70 mt-1">{marketData.tamLabel}</div>
                <div className="mt-4 pt-4 border-t border-violet-500/20 grid grid-cols-2 gap-2">
                  <div>
                    <div className="text-sm text-slate-400">Growth</div>
                    <div className="text-xl font-bold text-emerald-400">{marketData.growth}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Annual Events</div>
                    <div className="text-xl font-bold text-violet-400">{marketData.annualEvents}</div>
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
            <p className="text-slate-400 mb-8">How Eventora differentiates from existing ticketing platforms.</p>

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

            {/* Our Advantages */}
            <div className="bg-violet-500/10 rounded-xl p-6 border border-violet-500/30">
              <h4 className="text-violet-400 font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" /> Eventora Competitive Advantages
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {competitiveAdvantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                    {adv}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ═══════════════ PITCH DECK TAB ═══════════════ */}
        {activeTab === 'deck' && (
          <div className="space-y-8">
            {/* Investment Thesis */}
            <div className="bg-gradient-to-r from-violet-500/20 to-violet-500/5 rounded-2xl p-6 border border-violet-500/30">
              <h2 className="text-2xl font-bold text-white mb-2">Investment Thesis</h2>
              <p className="text-slate-300 leading-relaxed">Eventora is not just a ticketing platform -- it is the events layer of a $50B+ commerce ecosystem. Every ticket sold feeds NuqtaPay transactions, Qist BNPL volume, Rakab rides, Adzy ad revenue, and Nuqta Coin circulation. No competitor in MENA has this flywheel capturing the $4B+ UAE events market.</p>
            </div>

            {/* Market Opportunity */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Market Opportunity</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'TAM', value: '$4B+', detail: 'UAE Events & Entertainment Market' },
                  { label: 'SAM', value: '$1.2B', detail: 'Ticketed Events Segment' },
                  { label: 'SOM', value: '80M AED', detail: 'Year 3 Eventora Revenue Target' },
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
                  { title: 'Nuqta Coins on Every Ticket', desc: 'Earn 5x coins on purchases and bonus for check-in. No competitor has loyalty rewards.' },
                  { title: 'Qist BNPL for Events', desc: 'Split VIP and festival tickets into 3-6 monthly installments. Unique in ticketing.' },
                  { title: 'Rakab Transport Built-In', desc: 'Pre-schedule rides to/from events with surge-free pricing.' },
                  { title: 'NuqtaPay Checkout', desc: 'Cards, wallets, or NuqtaPay balance. One-tap purchase for repeat buyers.' },
                  { title: 'Full Organizer Ecosystem', desc: 'Seat maps, real-time analytics, promo codes, CRM tools, 3-day settlement.' },
                  { title: 'Adzy Event Promotion', desc: 'Integrated ad platform with closed-loop attribution from ad to ticket sale.' },
                ].map(d => (
                  <div key={d.title} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                    <div><span className="text-white font-semibold text-sm">{d.title}</span><span className="text-slate-400 text-sm"> — {d.desc}</span></div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Year Financial Projections */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">3-Year Financial Projections</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-slate-700/50">
                    {['Year', 'Tickets Sold', 'Revenue', 'Costs', 'Net Profit'].map(h => (
                      <th key={h} className="text-left px-3 py-2 text-violet-400 font-semibold">{h}</th>
                    ))}
                  </tr></thead>
                  <tbody>
                    {[
                      { year: 'Year 1', tickets: '100K', rev: '5M AED', costs: '3M AED', net: '2M AED' },
                      { year: 'Year 2', tickets: '500K', rev: '25M AED', costs: '10M AED', net: '15M AED' },
                      { year: 'Year 3', tickets: '2M', rev: '80M AED', costs: '24M AED', net: '56M AED' },
                    ].map(r => (
                      <tr key={r.year} className="border-b border-slate-800/50">
                        <td className="px-3 py-3 text-white font-medium">{r.year}</td>
                        <td className="px-3 py-3 text-blue-400">{r.tickets}</td>
                        <td className="px-3 py-3 text-emerald-400 font-bold">{r.rev}</td>
                        <td className="px-3 py-3 text-red-400">{r.costs}</td>
                        <td className="px-3 py-3 text-[#c9a227] font-bold">{r.net}</td>
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
                  { name: 'Eventbrite', val: '$1.5B', model: 'Self-service ticketing' },
                  { name: 'StubHub', val: '$4B', model: 'Secondary ticket marketplace' },
                  { name: 'Dice', val: '$400M', model: 'Music-focused ticketing' },
                  { name: 'Platinumlist', val: '$50-100M', model: 'UAE event ticketing' },
                ].map(c => (
                  <div key={c.name} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 text-center">
                    <div className="text-white font-bold">{c.name}</div>
                    <div className="text-violet-400 text-lg font-black mt-1">{c.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{c.model}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unicorn Path */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ArrowUpRight className="w-5 h-5 text-violet-400" /> Unicorn Path
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { stage: 'Seed', metric: '100K tickets', timeline: 'Q4 2026', val: '~$25M' },
                  { stage: 'Series A', metric: '500K tickets', timeline: 'Q4 2027', val: '~$120M' },
                  { stage: 'Series B', metric: '2M tickets', timeline: 'Q4 2028', val: '~$400M' },
                  { stage: '$1B+', metric: '8M tickets (GCC)', timeline: '2029+', val: '~$1B+' },
                ].map(s => (
                  <div key={s.stage} className="bg-violet-500/10 rounded-xl p-4 border border-violet-500/30 text-center">
                    <div className="text-xs text-violet-400 font-bold">{s.stage}</div>
                    <div className="text-white font-bold text-sm mt-1">{s.metric}</div>
                    <div className="text-lg font-black text-violet-400 mt-1">{s.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{s.timeline}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RTMN Ecosystem Multiplier */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-transparent rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-[#c9a227] mb-3">RTMN Ecosystem Multiplier</h3>
              <p className="text-slate-300 text-sm mb-4">Every ticket sold on Eventora generates cascading revenue across the RTMN ecosystem.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  'NuqtaPay transaction volume',
                  'Qist BNPL expansion',
                  'Rakab ride generation',
                  'Adzy ad inventory',
                ].map(s => (
                  <div key={s} className="bg-[#c9a227]/10 rounded-lg px-3 py-2 text-center">
                    <span className="text-[#c9a227] text-xs font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ═══════════════ NAVIGATION ═══════════════ */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Database className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/adzy" className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-xl font-bold hover:bg-pink-400 transition-colors">
              <Megaphone className="w-5 h-5" /> Adzy Media
            </Link>
            <Link href="/nuqta-corp" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227]/80 text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Crown className="w-5 h-5" /> Nuqta Corp
            </Link>
            <Link href="/rakab" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-400 transition-colors">
              <Car className="w-5 h-5" /> Rakab
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
