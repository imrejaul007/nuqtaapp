'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Wrench, Clock, Users, TrendingUp, BarChart3, DollarSign,
  Award, Zap, Shield, AlertTriangle, Globe, ArrowRight,
  CheckCircle, ChevronDown, ChevronUp, Building2, Rocket,
  Star, Crown, Camera, Thermometer, Droplets, Lightbulb,
  PaintBucket, Hammer, Refrigerator, Phone, Calendar,
  Target, MapPin, CreditCard, Coins, Home, FileText,
  ShieldCheck, Percent, PieChart, Layers, Settings,
  Timer, BadgePercent, CircleDollarSign, Wallet, Activity,
  LineChart, ArrowUpRight, Database, Store, XCircle, Briefcase
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ============================================
// DATA: Hero Stats
// ============================================
const heroStats = [
  { label: 'Verified Technicians', value: '1,500+', icon: Users, color: 'text-amber-400', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/30' },
  { label: 'Avg Response Time', value: '4-hr', icon: Clock, color: 'text-green-400', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/30' },
  { label: 'Avg Job Value', value: '280', icon: DollarSign, color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
  { label: 'Warranty Period', value: '30-day', icon: ShieldCheck, color: 'text-violet-400', bgColor: 'bg-violet-500/10', borderColor: 'border-violet-500/30' },
  { label: 'UAE Market Size', value: '$2.1B', icon: TrendingUp, color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10', borderColor: 'border-[#c9a227]/30' },
];

// ============================================
// DATA: Service Categories (6 categories)
// ============================================
const serviceCategories = [
  {
    id: 'ac-hvac',
    name: 'AC & HVAC',
    arabic: 'تكييف وتبريد',
    icon: Thermometer,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    description: 'Complete air conditioning and ventilation services for homes, villas, and apartments',
    services: [
      { name: 'AC Repair & Servicing', price: '150-350 AED', duration: '1-2 hrs' },
      { name: 'AC Installation', price: '500-1,500 AED', duration: '3-5 hrs' },
      { name: 'Duct Cleaning', price: '200-600 AED', duration: '2-4 hrs' },
      { name: 'Gas Refill / Top-up', price: '180-400 AED', duration: '1 hr' },
      { name: 'Thermostat Replacement', price: '120-250 AED', duration: '30 min' },
      { name: 'Annual Maintenance Contract', price: '800-2,000 AED/yr', duration: 'Scheduled' },
    ],
    technicianCount: 380,
    avgRating: 4.7,
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    arabic: 'سباكة',
    icon: Droplets,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    description: 'Emergency and scheduled plumbing for leaks, drains, fixtures, and water heaters',
    services: [
      { name: 'Leak Detection & Repair', price: '150-500 AED', duration: '1-3 hrs' },
      { name: 'Drain Unblocking', price: '100-300 AED', duration: '30-60 min' },
      { name: 'Toilet / Faucet Repair', price: '80-200 AED', duration: '30-60 min' },
      { name: 'Water Heater Repair', price: '200-600 AED', duration: '1-2 hrs' },
      { name: 'Pipe Replacement', price: '300-1,200 AED', duration: '2-5 hrs' },
      { name: 'Bathroom Renovation', price: '3,000-15,000 AED', duration: '3-7 days' },
    ],
    technicianCount: 310,
    avgRating: 4.6,
  },
  {
    id: 'electrical',
    name: 'Electrical',
    arabic: 'كهرباء',
    icon: Lightbulb,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    description: 'Licensed electricians for wiring, switches, panels, and smart home installations',
    services: [
      { name: 'Switch / Socket Repair', price: '80-150 AED', duration: '30 min' },
      { name: 'Wiring & Rewiring', price: '300-1,500 AED', duration: '2-6 hrs' },
      { name: 'Circuit Breaker Repair', price: '150-400 AED', duration: '1-2 hrs' },
      { name: 'Lighting Installation', price: '100-500 AED', duration: '1-3 hrs' },
      { name: 'Smart Home Setup', price: '500-3,000 AED', duration: '2-8 hrs' },
      { name: 'Electrical Safety Inspection', price: '200-350 AED', duration: '1 hr' },
    ],
    technicianCount: 260,
    avgRating: 4.8,
  },
  {
    id: 'painting',
    name: 'Painting & Renovation',
    arabic: 'دهان وتجديد',
    icon: PaintBucket,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    description: 'Interior and exterior painting, wall treatments, and home renovation projects',
    services: [
      { name: 'Single Room Painting', price: '400-800 AED', duration: '1 day' },
      { name: 'Full Apartment Painting', price: '2,000-6,000 AED', duration: '2-4 days' },
      { name: 'Villa Exterior Painting', price: '5,000-15,000 AED', duration: '5-10 days' },
      { name: 'Wallpaper Installation', price: '300-1,000 AED', duration: '1-2 days' },
      { name: 'Ceiling / Wall Repair', price: '200-800 AED', duration: '1-2 days' },
      { name: 'Waterproofing', price: '500-2,500 AED', duration: '1-3 days' },
    ],
    technicianCount: 220,
    avgRating: 4.5,
  },
  {
    id: 'carpentry',
    name: 'Carpentry & Furniture',
    arabic: 'نجارة وأثاث',
    icon: Hammer,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    description: 'Furniture assembly, custom woodwork, door repairs, and kitchen cabinet fitting',
    services: [
      { name: 'Furniture Assembly', price: '100-400 AED', duration: '1-3 hrs' },
      { name: 'Door Repair / Replacement', price: '150-800 AED', duration: '1-3 hrs' },
      { name: 'Kitchen Cabinet Fitting', price: '1,500-8,000 AED', duration: '2-5 days' },
      { name: 'Wardrobe Installation', price: '800-4,000 AED', duration: '1-3 days' },
      { name: 'Shelf / Curtain Rod Mount', price: '80-200 AED', duration: '30-60 min' },
      { name: 'Custom Woodwork', price: '1,000-10,000 AED', duration: '3-14 days' },
    ],
    technicianCount: 180,
    avgRating: 4.6,
  },
  {
    id: 'appliance',
    name: 'Appliance Repair',
    arabic: 'إصلاح أجهزة',
    icon: Refrigerator,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    description: 'Repair and maintenance for washing machines, fridges, ovens, and dishwashers',
    services: [
      { name: 'Washing Machine Repair', price: '150-500 AED', duration: '1-2 hrs' },
      { name: 'Refrigerator Repair', price: '200-600 AED', duration: '1-3 hrs' },
      { name: 'Oven / Cooktop Repair', price: '150-400 AED', duration: '1-2 hrs' },
      { name: 'Dishwasher Repair', price: '150-450 AED', duration: '1-2 hrs' },
      { name: 'Dryer Repair', price: '150-400 AED', duration: '1-2 hrs' },
      { name: 'Appliance Installation', price: '200-800 AED', duration: '1-3 hrs' },
    ],
    technicianCount: 150,
    avgRating: 4.7,
  },
];

// ============================================
// DATA: How It Works (with AI photo estimation)
// ============================================
const howItWorks = [
  { step: 1, title: 'Snap a Photo', description: 'Take a photo of the issue -- broken AC, leaking pipe, damaged wall. Our AI analyzes it instantly.', icon: Camera, color: 'text-amber-400' },
  { step: 2, title: 'AI Price Estimate', description: 'Get an instant price range based on photo analysis, issue type, and market rates. No surprises.', icon: Zap, color: 'text-yellow-400' },
  { step: 3, title: 'Book a Technician', description: 'Choose your preferred time slot. Verified, rated technicians matched to your area and issue type.', icon: Calendar, color: 'text-blue-400' },
  { step: 4, title: 'Track & Pay', description: 'Real-time technician tracking. Pay securely via NuqtaPay. Rate the service and earn Nuqta Coins.', icon: ShieldCheck, color: 'text-emerald-400' },
];

// ============================================
// DATA: Subscription Plans
// ============================================
const subscriptionPlans = [
  {
    name: 'Basic',
    price: '0 AED/mo',
    color: 'text-slate-300',
    bgColor: 'bg-slate-500/10',
    borderColor: 'border-slate-500/30',
    badge: null,
    features: [
      'Standard booking',
      '4-hour response window',
      'Pay-per-service pricing',
      '15-day warranty on repairs',
      '1X Nuqta Coins on jobs',
      'In-app support',
    ],
  },
  {
    name: 'Home+',
    price: '49 AED/mo',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    badge: 'POPULAR',
    features: [
      'Priority booking (2-hr window)',
      '15% discount on all services',
      '30-day warranty on repairs',
      '2 free inspections per year',
      '3X Nuqta Coins on jobs',
      'Dedicated support line',
    ],
  },
  {
    name: 'Villa Elite',
    price: '149 AED/mo',
    color: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]/30',
    badge: 'PREMIUM',
    features: [
      'Same-day guaranteed service',
      '25% discount on all services',
      '60-day extended warranty',
      'Unlimited free inspections',
      '5X Nuqta Coins on jobs',
      'Dedicated account manager',
      'Annual maintenance plan included',
      'Emergency 1-hour response',
    ],
  },
];

// ============================================
// DATA: Unit Economics
// ============================================
const unitEconomics = {
  avgJobValue: 280,
  commissionRate: '25%',
  commissionRevenue: 70,
  emergencySurcharge: 12,
  partsMarkup: 8,
  subscriptionPerJob: 5,
  totalRevenue: 95,
  technicianPayout: 195,
  operatingCost: 15,
  customerAcquisition: 10,
  netMargin: 60,
  netMarginPercent: '21.4%',
};

// ============================================
// DATA: Revenue Streams
// ============================================
const revenueStreams = [
  { source: 'Service Commission', desc: '25% commission on every completed job', share: '50%', value: '70 AED avg', icon: Percent, color: 'text-amber-400' },
  { source: 'Emergency Surcharge', desc: 'Premium charge for same-day / urgent callouts', share: '15%', value: '50-150 AED', icon: Zap, color: 'text-red-400' },
  { source: 'Subscription Plans', desc: 'Monthly Home+ and Villa Elite recurring revenue', share: '18%', value: '49-149 AED/mo', icon: Crown, color: 'text-[#c9a227]' },
  { source: 'Parts Markup', desc: 'Margin on replacement parts sourced through partner network', share: '10%', value: '10-15% markup', icon: Settings, color: 'text-blue-400' },
  { source: 'Adzy Promotions', desc: 'Sponsored listings and featured technician placements via Adzy', share: '7%', value: 'CPC/CPM', icon: Target, color: 'text-pink-400' },
];

// ============================================
// DATA: Competitors
// ============================================
const competitors = [
  {
    name: 'ServiceMarket',
    type: 'Marketplace',
    strengths: ['Large provider base', 'Brand recognition', 'Multi-service'],
    weaknesses: ['No AI pricing', 'Higher fees', 'Inconsistent quality'],
    commission: '20-30%',
    warranty: '7 days',
    response: '24-48 hrs',
  },
  {
    name: 'Mr. Fix It',
    type: 'Direct Service',
    strengths: ['Own technician team', 'Quality control', 'Known brand'],
    weaknesses: ['Limited scale', 'Higher prices', 'No tech innovation'],
    commission: 'Fixed pricing',
    warranty: '14 days',
    response: '24 hrs',
  },
  {
    name: 'Hitches & Glitches',
    type: 'Subscription',
    strengths: ['Annual plans', 'Villa focus', 'Trusted brand'],
    weaknesses: ['Expensive plans', 'Limited categories', 'No on-demand'],
    commission: 'Subscription',
    warranty: '30 days',
    response: 'Scheduled',
  },
];

// ============================================
// DATA: Ecosystem Integration
// ============================================
const ecosystemIntegrations = [
  { name: 'NuqtaPay', desc: 'Seamless in-app payments for all services and parts', icon: CreditCard, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30' },
  { name: 'Qist BNPL', desc: 'Buy Now Pay Later for large renovations (3-12 month plans)', icon: Layers, color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30' },
  { name: 'Nuqta Coins', desc: '5X coin earning on Villa Elite -- redeem across all Nuqta apps', icon: Coins, color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10', borderColor: 'border-[#c9a227]/30' },
  { name: 'Aqar (Property)', desc: 'Property maintenance integration for landlords and property managers', icon: Building2, color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
  { name: 'Sakin (Rental)', desc: 'Automatic repair requests from tenants routed to Handyzy', icon: Home, color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30' },
  { name: 'Hawil (Payouts)', desc: 'Instant technician payouts via Hawil Card after job completion', icon: Wallet, color: 'text-orange-400', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30' },
];

// ============================================
// DATA: Roadmap (4 Phases)
// ============================================
const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    timeline: 'Q1-Q2 2025',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    items: [
      'Launch AC & Plumbing verticals in Dubai',
      'Onboard 500 verified technicians',
      'AI photo estimation MVP (beta)',
      'NuqtaPay payment integration',
      'Basic booking and tracking flow',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Expansion',
    timeline: 'Q3-Q4 2025',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    items: [
      'Add Electrical, Painting, Carpentry, Appliance categories',
      'Launch Home+ and Villa Elite subscriptions',
      'Expand to Abu Dhabi and Sharjah',
      'Qist BNPL integration for renovations',
      'Technician mobile app with job management',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Intelligence',
    timeline: 'Q1-Q2 2026',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    items: [
      'AI photo estimation v2 (95%+ accuracy)',
      'Predictive maintenance alerts (IoT sensors)',
      'Aqar / Sakin deep integration',
      'Parts marketplace with supplier network',
      'Technician certification & training academy',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'GCC Scale',
    timeline: 'Q3-Q4 2026',
    color: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]/30',
    items: [
      'Launch in Saudi Arabia (Riyadh, Jeddah)',
      'Expand to Kuwait, Bahrain, Oman, Qatar',
      'Enterprise B2B maintenance contracts',
      'White-label solution for property developers',
      '5,000+ technicians across GCC',
    ],
  },
];

// ============================================
// DATA: Risks
// ============================================
const risks = [
  {
    title: 'Technician Quality & Retention',
    severity: 'High',
    severityColor: 'text-red-400',
    description: 'Maintaining consistent service quality across 1,500+ technicians while preventing churn to competitors or independent work.',
    mitigation: 'Rigorous vetting process, ongoing training academy, performance-based bonuses, Hawil instant payouts, and loyalty incentives through Nuqta Coins.',
  },
  {
    title: 'Regulatory Compliance',
    severity: 'High',
    severityColor: 'text-red-400',
    description: 'UAE requires specific trade licenses for electrical, plumbing, and HVAC work. Each emirate may have different requirements.',
    mitigation: 'Dedicated compliance team, mandatory technician certification tracking, insurance coverage per job, and partnership with DED and municipality bodies.',
  },
  {
    title: 'Seasonal Demand Volatility',
    severity: 'Medium',
    severityColor: 'text-amber-400',
    description: 'AC demand spikes 300% in summer (May-Sep), creating supply-demand imbalance and potential SLA breaches.',
    mitigation: 'Flex technician pool, seasonal onboarding programs, dynamic pricing to manage demand, and pre-summer maintenance campaign push.',
  },
  {
    title: 'Price Competition',
    severity: 'Medium',
    severityColor: 'text-amber-400',
    description: 'Informal handyman networks and WhatsApp-based services offer lower prices without platform fees.',
    mitigation: 'Differentiate with warranty, AI pricing transparency, insured work, Qist financing, and ecosystem benefits (Nuqta Coins, subscription savings).',
  },
  {
    title: 'Parts Supply Chain',
    severity: 'Low',
    severityColor: 'text-green-400',
    description: 'Dependency on third-party suppliers for replacement parts may cause delays or quality issues.',
    mitigation: 'Build verified supplier network, bulk purchasing agreements, quality-tested parts catalog, and warehouse partnerships for common parts.',
  },
];

// ============================================
// DATA: GCC Expansion
// ============================================
const gccMarkets = [
  { country: 'UAE', status: 'Live', color: 'text-emerald-400', cities: 'Dubai, Abu Dhabi, Sharjah', marketSize: '$2.1B', techTarget: '1,500', timeline: 'Now' },
  { country: 'Saudi Arabia', status: 'Phase 4', color: 'text-blue-400', cities: 'Riyadh, Jeddah, Dammam', marketSize: '$4.8B', techTarget: '3,000', timeline: 'Q3 2026' },
  { country: 'Kuwait', status: 'Phase 4', color: 'text-purple-400', cities: 'Kuwait City', marketSize: '$800M', techTarget: '500', timeline: 'Q4 2026' },
  { country: 'Bahrain', status: 'Phase 4', color: 'text-cyan-400', cities: 'Manama', marketSize: '$350M', techTarget: '300', timeline: 'Q4 2026' },
  { country: 'Qatar', status: 'Phase 4', color: 'text-amber-400', cities: 'Doha', marketSize: '$600M', techTarget: '400', timeline: 'Q4 2026' },
  { country: 'Oman', status: 'Phase 4', color: 'text-orange-400', cities: 'Muscat', marketSize: '$450M', techTarget: '350', timeline: 'Q4 2026' },
];

// ============================================
// COMPONENT
// ============================================

const controls = [
  'Handyman booking platform',
  'Service provider matching',
  'Job scheduling & dispatch',
  'Pricing & estimation engine',
  'Service quality tracking',
  'Provider verification & ratings',
  'Before/after documentation',
  'Repeat service scheduling',
];

const doesNotOwn = [
  { item: 'Payment processing', reason: 'Managed by NuqtaPay' },
  { item: 'Provider identity verification', reason: 'Managed by Rabtul Core' },
  { item: 'Property management integration', reason: 'Managed by Aqar' },
  { item: 'Customer reviews', reason: 'Managed by Majlis' },
  { item: 'Insurance for services', reason: 'Managed by Daman' },
  { item: 'Compliance & licensing', reason: 'Managed by Amana / Khedma' },
  { item: 'Advertising', reason: 'Managed by Adzy' },
  { item: 'Provider training', reason: 'Managed by Tadreeb' },
];

export default function HandyzyPage() {
  const [expandedService, setExpandedService] = useState<string | null>('ac-hvac');
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'pricing' | 'economics' | 'revenue' | 'competitors' | 'ecosystem' | 'roadmap' | 'risks' | 'gcc' | 'deck'>('overview');
  const [expandedRisk, setExpandedRisk] = useState<number | null>(null);

  const totalTechnicians = serviceCategories.reduce((acc, c) => acc + c.technicianCount, 0);

  const tabs = [
    { id: 'overview' as const, label: 'Overview', icon: BarChart3 },
    { id: 'services' as const, label: 'Services', icon: Wrench },
    { id: 'pricing' as const, label: 'Pricing', icon: BadgePercent },
    { id: 'economics' as const, label: 'Economics', icon: PieChart },
    { id: 'revenue' as const, label: 'Revenue', icon: DollarSign },
    { id: 'competitors' as const, label: 'Competitors', icon: Target },
    { id: 'ecosystem' as const, label: 'Ecosystem', icon: Activity },
    { id: 'roadmap' as const, label: 'Roadmap', icon: Rocket },
    { id: 'risks' as const, label: 'Risks', icon: AlertTriangle },
    { id: 'gcc' as const, label: 'GCC', icon: Globe },
    { id: 'deck' as const, label: 'Pitch Deck', icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <div className="bg-gradient-to-br from-[#0a1628] via-amber-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/wasil" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Wasil
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-xl shadow-amber-500/30">
              <Wrench className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl font-black text-white">
                  Handyzy <span className="text-amber-400">هاندي زي</span>
                </h1>
                <span className="bg-amber-500/20 text-amber-400 text-xs sm:text-sm px-3 py-1 rounded-full font-bold border border-amber-500/50">
                  HOME REPAIR
                </span>
              </div>
              <p className="text-amber-400 text-lg mt-1">Niche Home Repair & Maintenance</p>
              <p className="text-slate-500 text-sm">Under Wasil Brand -- Dedicated Service Verticals</p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-4xl mb-8">
            The UAE&apos;s smartest home repair platform. AI-powered photo estimation, verified technicians,
            30-day warranty on every job. From AC repair to full renovations -- Handyzy connects you
            with {totalTechnicians.toLocaleString()}+ vetted professionals across 6 specialized categories.
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
      {/* TAB NAVIGATION */}
      {/* ============================================ */}

      {/* Controls / Does NOT Own */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-emerald-500/5 rounded-xl p-6 border border-emerald-500/30">
            <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> What HandyZy Controls</h3>
            <div className="space-y-2">{controls.map((c, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{c}</span></div>))}</div>
          </div>
          <div className="bg-orange-500/5 rounded-xl p-6 border border-orange-500/30">
            <h3 className="text-lg font-bold text-orange-400 mb-4 flex items-center gap-2"><ArrowRight className="w-5 h-5" /> Does NOT Own</h3>
            <div className="space-y-2">{doesNotOwn.map((d, i) => (<div key={i} className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300"><span className="text-white font-medium">{d.item}</span> \u2192 {d.reason}</span></div>))}</div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/50 border-b border-slate-700/50 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* OVERVIEW TAB */}
      {/* ============================================ */}
      {activeTab === 'overview' && (
        <>
          {/* What Handyzy Covers / Does Not Cover */}
          <section className="bg-slate-800/30 border-b border-slate-700/50 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30">
                  <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Handyzy Covers
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {['AC repair & installation', 'Plumbing & leak repair', 'Electrical work', 'Painting & renovation', 'Carpentry & furniture', 'Appliance repair', 'Emergency callouts', 'AI photo estimation', 'Annual maintenance plans', '30-day job warranty'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                  <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> Does NOT Cover
                  </h3>
                  <div className="space-y-2">
                    {[
                      { item: 'New construction', reason: 'Requires contractor license' },
                      { item: 'Structural engineering', reason: 'Specialized consulting' },
                      { item: 'Pest control', reason: 'Separate vertical planned' },
                      { item: 'Pool maintenance', reason: 'Specialized equipment' },
                      { item: 'Landscaping', reason: 'Different service model' },
                    ].map((entry, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-white font-medium text-sm">{entry.item}</span>
                          <span className="text-slate-500 text-xs ml-2">({entry.reason})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Camera className="w-5 h-5 text-amber-400" /> How It Works -- AI Photo Estimation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {howItWorks.map((step) => (
                <div key={step.step} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-amber-500/30 transition-colors relative">
                  <div className="absolute top-4 right-4 text-4xl font-black text-slate-700/50">{step.step}</div>
                  <step.icon className={`w-10 h-10 ${step.color} mb-4`} />
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            {/* AI Feature Callout */}
            <div className="mt-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-amber-500/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-amber-400 font-bold text-lg mb-1">AI-Powered Photo Estimation</h3>
                  <p className="text-slate-300 text-sm">
                    Snap a photo of your issue and get an instant price estimate. Our computer vision model analyzes
                    damage severity, identifies required parts, and provides a 90%+ accurate price range within seconds.
                    No more waiting for quotes or surprise bills.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    {['90%+ accuracy', 'Instant results', 'Parts identification', 'Severity scoring'].map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Category Overview Grid */}
            <h2 className="text-xl font-bold text-white mt-10 mb-6">6 Service Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {serviceCategories.map((cat) => (
                <div key={cat.id} className={`${cat.bgColor} rounded-xl p-4 border ${cat.borderColor} text-center hover:scale-[1.02] transition-transform cursor-pointer`}
                  onClick={() => { setActiveTab('services'); setExpandedService(cat.id); }}>
                  <cat.icon className={`w-8 h-8 ${cat.color} mx-auto mb-2`} />
                  <div className={`font-bold text-sm ${cat.color}`}>{cat.name}</div>
                  <div className="text-xs text-slate-400 mt-1">{cat.technicianCount} techs</div>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-amber-400" />
                    <span className="text-xs text-amber-400">{cat.avgRating}</span>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </>
      )}

      {/* ============================================ */}
      {/* SERVICES TAB */}
      {/* ============================================ */}
      {activeTab === 'services' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h2 className="text-xl font-bold text-white mb-6">{serviceCategories.length} Service Categories -- {totalTechnicians.toLocaleString()} Technicians</h2>

          <div className="space-y-4">
            {serviceCategories.map((category) => (
              <div key={category.id} className={`${category.bgColor} border-2 ${category.borderColor} rounded-xl overflow-hidden`}>
                <button
                  onClick={() => setExpandedService(expandedService === category.id ? null : category.id)}
                  className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${category.bgColor} flex items-center justify-center border ${category.borderColor}`}>
                      <category.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${category.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className={`text-base sm:text-xl font-bold ${category.color}`}>{category.name}</h3>
                        <span className="text-xs text-slate-500">{category.arabic}</span>
                      </div>
                      <p className="text-slate-400 text-xs sm:text-sm line-clamp-1">{category.description}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-slate-500">{category.technicianCount} technicians</span>
                        <span className="flex items-center gap-1 text-xs text-amber-400">
                          <Star className="w-3 h-3" /> {category.avgRating}
                        </span>
                      </div>
                    </div>
                  </div>
                  {expandedService === category.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {expandedService === category.id && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                    <div className="bg-slate-900/50 rounded-lg border border-slate-700/50 overflow-hidden">
                      <div className="grid grid-cols-3 gap-px bg-slate-700/30">
                        <div className="bg-slate-800/80 p-3 text-xs font-bold text-slate-400 uppercase">Service</div>
                        <div className="bg-slate-800/80 p-3 text-xs font-bold text-slate-400 uppercase text-center">Price Range</div>
                        <div className="bg-slate-800/80 p-3 text-xs font-bold text-slate-400 uppercase text-center">Duration</div>
                      </div>
                      {category.services.map((service, i) => (
                        <div key={i} className="grid grid-cols-3 gap-px bg-slate-700/20 border-t border-slate-700/30">
                          <div className="bg-slate-900/30 p-3 text-sm text-white">{service.name}</div>
                          <div className={`bg-slate-900/30 p-3 text-sm ${category.color} font-medium text-center`}>{service.price}</div>
                          <div className="bg-slate-900/30 p-3 text-sm text-slate-400 text-center">{service.duration}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      )}

      {/* ============================================ */}
      {/* PRICING TAB (Subscription Plans) */}
      {/* ============================================ */}
      {activeTab === 'pricing' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h2 className="text-xl font-bold text-white mb-2">Subscription Plans</h2>
          <p className="text-slate-400 text-sm mb-8">Choose the right plan for your home maintenance needs. All plans include access to verified technicians and AI photo estimation.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptionPlans.map((plan, i) => (
              <div key={i} className={`${plan.bgColor} rounded-xl p-6 border-2 ${plan.borderColor} relative hover:scale-[1.02] transition-transform`}>
                {plan.badge && (
                  <span className={`absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                    plan.badge === 'POPULAR' ? 'bg-amber-500 text-[#0a1628]' : 'bg-[#c9a227] text-[#0a1628]'
                  }`}>
                    {plan.badge}
                  </span>
                )}
                <h3 className={`text-2xl font-black ${plan.color} mb-1`}>{plan.name}</h3>
                <div className={`text-3xl font-bold ${plan.color} mb-4`}>{plan.price}</div>
                <div className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className={`w-4 h-4 ${plan.color} flex-shrink-0`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Pricing */}
          <div className="mt-8 bg-red-500/10 rounded-xl p-6 border border-red-500/30">
            <h3 className="text-lg font-bold text-red-400 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5" /> Emergency Callout Surcharge
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { window: 'Same-Day (4 hrs)', surcharge: '+50 AED', note: 'Available 7am-10pm' },
                { window: 'Urgent (2 hrs)', surcharge: '+100 AED', note: 'Available 7am-10pm' },
                { window: 'Emergency (1 hr)', surcharge: '+150 AED', note: 'Villa Elite: Free' },
              ].map((tier, i) => (
                <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                  <div className="text-white font-bold text-sm">{tier.window}</div>
                  <div className="text-red-400 text-xl font-bold mt-1">{tier.surcharge}</div>
                  <div className="text-slate-500 text-xs mt-1">{tier.note}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* ============================================ */}
      {/* ECONOMICS TAB */}
      {/* ============================================ */}
      {activeTab === 'economics' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-amber-400" /> Unit Economics Per Job
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Side */}
            <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30">
              <h3 className="text-lg font-bold text-emerald-400 mb-4">Revenue Per Job</h3>
              <div className="space-y-3">
                {[
                  { label: 'Average Job Value', value: `${unitEconomics.avgJobValue} AED`, note: 'Across all categories' },
                  { label: `Commission (${unitEconomics.commissionRate})`, value: `${unitEconomics.commissionRevenue} AED`, note: 'Primary revenue' },
                  { label: 'Emergency Surcharge (avg)', value: `${unitEconomics.emergencySurcharge} AED`, note: '~30% of jobs' },
                  { label: 'Parts Markup', value: `${unitEconomics.partsMarkup} AED`, note: '10-15% margin' },
                  { label: 'Subscription Allocation', value: `${unitEconomics.subscriptionPerJob} AED`, note: 'Pro-rated per job' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between bg-slate-900/50 rounded-lg p-3 border border-slate-700/30">
                    <div>
                      <div className="text-white text-sm font-medium">{item.label}</div>
                      <div className="text-slate-500 text-xs">{item.note}</div>
                    </div>
                    <div className="text-emerald-400 font-bold">{item.value}</div>
                  </div>
                ))}
                <div className="flex items-center justify-between bg-emerald-500/20 rounded-lg p-3 border border-emerald-500/40">
                  <div className="text-emerald-400 font-bold">Total Revenue / Job</div>
                  <div className="text-emerald-400 font-bold text-xl">{unitEconomics.totalRevenue} AED</div>
                </div>
              </div>
            </div>

            {/* Cost Side */}
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h3 className="text-lg font-bold text-red-400 mb-4">Costs Per Job</h3>
              <div className="space-y-3">
                {[
                  { label: 'Technician Payout (75%)', value: `${unitEconomics.technicianPayout} AED`, note: 'Direct labor cost' },
                  { label: 'Operating Cost', value: `${unitEconomics.operatingCost} AED`, note: 'Platform, support, insurance' },
                  { label: 'Customer Acquisition', value: `${unitEconomics.customerAcquisition} AED`, note: 'Blended CAC per job' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between bg-slate-900/50 rounded-lg p-3 border border-slate-700/30">
                    <div>
                      <div className="text-white text-sm font-medium">{item.label}</div>
                      <div className="text-slate-500 text-xs">{item.note}</div>
                    </div>
                    <div className="text-red-400 font-bold">{item.value}</div>
                  </div>
                ))}
                <div className="flex items-center justify-between bg-amber-500/20 rounded-lg p-3 border border-amber-500/40 mt-4">
                  <div className="text-amber-400 font-bold">Net Margin / Job</div>
                  <div className="text-amber-400 font-bold text-xl">{unitEconomics.netMargin} AED ({unitEconomics.netMarginPercent})</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ============================================ */}
      {/* REVENUE TAB */}
      {/* ============================================ */}
      {activeTab === 'revenue' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-amber-400" /> Revenue Streams
          </h2>

          <div className="space-y-4">
            {revenueStreams.map((stream, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-amber-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-slate-900/50 flex items-center justify-center border border-slate-700/30`}>
                    <stream.icon className={`w-6 h-6 ${stream.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-white font-bold text-lg">{stream.source}</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold">
                          {stream.share} of revenue
                        </span>
                        <span className={`text-sm font-bold ${stream.color}`}>{stream.value}</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm mt-1">{stream.desc}</p>
                  </div>
                </div>

                {/* Revenue share bar */}
                <div className="mt-3 h-2 bg-slate-700/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all"
                    style={{ width: stream.share }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Revenue Projection */}
          <div className="mt-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-amber-500/30">
            <h3 className="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
              <LineChart className="w-5 h-5" /> Year 1 Revenue Projection
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Monthly Jobs', value: '8,000', icon: Wrench },
                { label: 'Avg Revenue/Job', value: '95 AED', icon: CircleDollarSign },
                { label: 'Monthly Revenue', value: '760K AED', icon: TrendingUp },
                { label: 'Annual Revenue', value: '9.1M AED', icon: ArrowUpRight },
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30 text-center">
                  <item.icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">{item.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* ============================================ */}
      {/* COMPETITORS TAB */}
      {/* ============================================ */}
      {activeTab === 'competitors' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-amber-400" /> Competitor Landscape
          </h2>

          {/* Comparison Table */}
          <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800/80 border-b border-slate-700/50">
                    <th className="p-4 text-left text-slate-400 font-bold">Feature</th>
                    <th className="p-4 text-center text-amber-400 font-bold">Handyzy</th>
                    {competitors.map((c, i) => (
                      <th key={i} className="p-4 text-center text-slate-400 font-bold">{c.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/30">
                  <tr>
                    <td className="p-4 text-slate-300">AI Photo Pricing</td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    <td className="p-4 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                    <td className="p-4 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                    <td className="p-4 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-300">Commission</td>
                    <td className="p-4 text-center text-amber-400 font-medium">25%</td>
                    {competitors.map((c, i) => (
                      <td key={i} className="p-4 text-center text-slate-400">{c.commission}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-300">Warranty</td>
                    <td className="p-4 text-center text-amber-400 font-medium">30 days</td>
                    {competitors.map((c, i) => (
                      <td key={i} className="p-4 text-center text-slate-400">{c.warranty}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-300">Response Time</td>
                    <td className="p-4 text-center text-amber-400 font-medium">4 hrs</td>
                    {competitors.map((c, i) => (
                      <td key={i} className="p-4 text-center text-slate-400">{c.response}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-300">BNPL for Renovations</td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    <td className="p-4 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                    <td className="p-4 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                    <td className="p-4 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-300">Ecosystem Rewards</td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    <td className="p-4 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                    <td className="p-4 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                    <td className="p-4 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-300">Subscription Plans</td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    <td className="p-4 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                    <td className="p-4 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Competitor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competitors.map((comp, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-white font-bold text-lg mb-1">{comp.name}</h3>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-700/50 text-slate-400">{comp.type}</span>
                <div className="mt-4 space-y-3">
                  <div>
                    <div className="text-xs text-emerald-400 font-bold uppercase mb-1">Strengths</div>
                    {comp.strengths.map((s, j) => (
                      <div key={j} className="text-sm text-slate-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {s}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-xs text-red-400 font-bold uppercase mb-1">Weaknesses</div>
                    {comp.weaknesses.map((w, j) => (
                      <div key={j} className="text-sm text-slate-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400" /> {w}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* ============================================ */}
      {/* ECOSYSTEM TAB */}
      {/* ============================================ */}
      {activeTab === 'ecosystem' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <Activity className="w-5 h-5 text-amber-400" /> Nuqta Ecosystem Integration
          </h2>
          <p className="text-slate-400 text-sm mb-8">Handyzy plugs into 6 core Nuqta platforms for payments, financing, rewards, and property management.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ecosystemIntegrations.map((integration, i) => (
              <div key={i} className={`${integration.bgColor} rounded-xl p-6 border ${integration.borderColor} hover:scale-[1.02] transition-transform`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg ${integration.bgColor} flex items-center justify-center border ${integration.borderColor}`}>
                    <integration.icon className={`w-5 h-5 ${integration.color}`} />
                  </div>
                  <h3 className={`font-bold ${integration.color}`}>{integration.name}</h3>
                </div>
                <p className="text-slate-300 text-sm">{integration.desc}</p>
              </div>
            ))}
          </div>

          {/* Ecosystem Flow */}
          <div className="mt-8 bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-bold text-white mb-4">Ecosystem Data Flow</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                <h4 className="text-blue-400 font-bold mb-3">Handyzy Sends To</h4>
                <ul className="space-y-1">
                  {[
                    'Job completions to NuqtaPay for settlement',
                    'Coin earning events to Nuqta Coins engine',
                    'Technician payouts to Hawil for instant transfer',
                    'Renovation financing requests to Qist BNPL',
                    'Service history to Aqar property records',
                  ].map((item, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/30">
                <h4 className="text-emerald-400 font-bold mb-3">Handyzy Receives From</h4>
                <ul className="space-y-1">
                  {[
                    'Repair requests from Sakin tenant app',
                    'Property details from Aqar for maintenance planning',
                    'Payment confirmations from NuqtaPay',
                    'BNPL approval status from Qist',
                    'Promotional campaigns from Adzy for technicians',
                  ].map((item, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-emerald-400 rotate-180" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ============================================ */}
      {/* ROADMAP TAB */}
      {/* ============================================ */}
      {activeTab === 'roadmap' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Rocket className="w-5 h-5 text-amber-400" /> Development Roadmap
          </h2>

          <div className="space-y-6">
            {roadmapPhases.map((phase, i) => (
              <div key={i} className={`${phase.bgColor} rounded-xl p-6 border ${phase.borderColor}`}>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs px-3 py-1 rounded-full font-bold ${phase.bgColor} ${phase.color} border ${phase.borderColor}`}>
                      {phase.phase}
                    </span>
                    <h3 className={`text-lg font-bold ${phase.color}`}>{phase.title}</h3>
                  </div>
                  <span className="text-slate-400 text-sm">{phase.timeline}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {phase.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle className={`w-4 h-4 ${phase.color} flex-shrink-0`} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Milestones Timeline */}
          <div className="mt-8 bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-bold text-white mb-4">Key Milestones</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700/50" />
              <div className="space-y-6">
                {[
                  { date: 'Q1 2025', event: 'MVP launch -- AC & Plumbing in Dubai', status: 'done', color: 'bg-emerald-400' },
                  { date: 'Q2 2025', event: '500 verified technicians onboarded', status: 'done', color: 'bg-emerald-400' },
                  { date: 'Q3 2025', event: 'AI photo estimation beta launch', status: 'current', color: 'bg-blue-400' },
                  { date: 'Q4 2025', event: 'All 6 categories live, 1,500 technicians', status: 'current', color: 'bg-blue-400' },
                  { date: 'Q1 2026', event: 'AI v2 launch (95%+ accuracy)', status: 'upcoming', color: 'bg-purple-400' },
                  { date: 'Q2 2026', event: 'Parts marketplace and IoT integration', status: 'upcoming', color: 'bg-purple-400' },
                  { date: 'Q3 2026', event: 'Saudi Arabia market entry', status: 'upcoming', color: 'bg-amber-400' },
                  { date: 'Q4 2026', event: '5,000+ technicians across GCC', status: 'upcoming', color: 'bg-amber-400' },
                ].map((milestone, i) => (
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
        </main>
      )}

      {/* ============================================ */}
      {/* RISKS TAB */}
      {/* ============================================ */}
      {activeTab === 'risks' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" /> Risk Analysis
          </h2>

          <div className="space-y-4">
            {risks.map((risk, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden">
                <button
                  onClick={() => setExpandedRisk(expandedRisk === i ? null : i)}
                  className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <AlertTriangle className={`w-5 h-5 ${risk.severityColor} flex-shrink-0`} />
                    <div>
                      <h3 className="text-white font-bold">{risk.title}</h3>
                      <span className={`text-xs ${risk.severityColor} font-bold`}>{risk.severity} Severity</span>
                    </div>
                  </div>
                  {expandedRisk === i ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {expandedRisk === i && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 space-y-3">
                    <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                      <h4 className="text-red-400 font-bold text-sm mb-1">Risk</h4>
                      <p className="text-slate-300 text-sm">{risk.description}</p>
                    </div>
                    <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/20">
                      <h4 className="text-emerald-400 font-bold text-sm mb-1">Mitigation</h4>
                      <p className="text-slate-300 text-sm">{risk.mitigation}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      )}

      {/* ============================================ */}
      {/* GCC TAB */}
      {/* ============================================ */}
      {activeTab === 'gcc' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <Globe className="w-5 h-5 text-amber-400" /> GCC Expansion Plan
          </h2>
          <p className="text-slate-400 text-sm mb-8">Targeting $9.1B combined home services market across 6 GCC nations.</p>

          <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800/80 border-b border-slate-700/50">
                    <th className="p-4 text-left text-slate-400 font-bold">Country</th>
                    <th className="p-4 text-center text-slate-400 font-bold">Status</th>
                    <th className="p-4 text-left text-slate-400 font-bold">Key Cities</th>
                    <th className="p-4 text-center text-slate-400 font-bold">Market Size</th>
                    <th className="p-4 text-center text-slate-400 font-bold">Tech Target</th>
                    <th className="p-4 text-center text-slate-400 font-bold">Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/30">
                  {gccMarkets.map((market, i) => (
                    <tr key={i} className="hover:bg-slate-800/30">
                      <td className={`p-4 font-bold ${market.color}`}>{market.country}</td>
                      <td className="p-4 text-center">
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          market.status === 'Live' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700/50 text-slate-400'
                        }`}>
                          {market.status}
                        </span>
                      </td>
                      <td className="p-4 text-slate-300">{market.cities}</td>
                      <td className="p-4 text-center text-amber-400 font-medium">{market.marketSize}</td>
                      <td className="p-4 text-center text-slate-300">{market.techTarget}</td>
                      <td className="p-4 text-center text-slate-400">{market.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* GCC Licensing Requirements */}
          <div className="mt-8 bg-amber-500/10 rounded-xl p-6 border border-amber-500/30">
            <h3 className="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" /> GCC Licensing & Compliance
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'UAE: DED trade license per emirate + RERA for property maintenance',
                'KSA: MOMRA contractor license + Saudization quota compliance',
                'Kuwait: Ministry of Commerce license + Kuwait Municipality approval',
                'Bahrain: MOIC commercial registration + labor clearances',
                'Qatar: MMUP contractor classification + WPS wage compliance',
                'Oman: Ministry of Manpower license + Royal Oman Police clearance',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                  <Shield className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* ============================================ */}
      {/* PITCH DECK TAB */}
      {/* ============================================ */}
      {activeTab === 'deck' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="space-y-8">
            {/* Investment Thesis */}
            <div className="bg-gradient-to-r from-amber-500/20 to-amber-500/5 rounded-2xl p-6 border border-amber-500/30">
              <h2 className="text-2xl font-bold text-white mb-2">Investment Thesis</h2>
              <p className="text-slate-300 leading-relaxed">Every home needs maintenance. AC servicing alone is a 4x/year recurring need per household. Handyzy captures all home maintenance spend with AI-powered upfront pricing, 30-day warranty, and Nuqta ecosystem rewards. With Aqar property management, Sakin move-in services, and BizOne commercial contracts feeding demand, Handyzy becomes the home services backbone of the entire RTMN ecosystem.</p>
            </div>

            {/* Market Opportunity */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Market Opportunity</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'TAM', value: '$2.1B', detail: 'UAE Home Maintenance Market' },
                  { label: 'SAM', value: '$800M', detail: 'Addressable Digital Segment' },
                  { label: 'SOM', value: '$120M', detail: 'Year 3 Target (15% share)' },
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
                  { title: 'AI Photo Estimation', desc: 'Snap a photo, get instant 90%+ accurate price range' },
                  { title: 'Real-Time Tracking', desc: 'Track your technician live on map, know exact arrival' },
                  { title: '30-Day Warranty', desc: 'Every job backed by warranty -- free redo if fix fails' },
                  { title: 'Nuqta Coins (5X)', desc: 'Up to 5X coins on Villa Elite, redeem across ecosystem' },
                  { title: 'Qist BNPL', desc: '0% interest financing for major renovations (3-12 months)' },
                  { title: '1,500+ Verified Techs', desc: 'Vetted, rated, certified across 6 service categories' },
                ].map((d, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-bold text-sm">{d.title}</div>
                      <div className="text-slate-400 text-xs">{d.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Projections */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Financial Projections (3-Year)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-slate-700/50">
                    {['Year', 'Users', 'Revenue (AED)', 'Profit (AED)'].map(h => (
                      <th key={h} className="text-left px-3 py-2 text-[#c9a227] font-semibold">{h}</th>
                    ))}
                  </tr></thead>
                  <tbody>
                    {[
                      { y: 'Year 1', u: '20K', r: '10M', p: '2.5M' },
                      { y: 'Year 2', u: '80K', r: '40M', p: '15M' },
                      { y: 'Year 3', u: '200K', r: '100M', p: '40M' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-700/30">
                        <td className="px-3 py-2 text-white font-medium">{row.y}</td>
                        <td className="px-3 py-2 text-slate-300">{row.u}</td>
                        <td className="px-3 py-2 text-amber-400 font-bold">{row.r}</td>
                        <td className="px-3 py-2 text-emerald-400 font-bold">{row.p}</td>
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
                  { name: 'Urban Company', val: '$2.8B', market: 'India' },
                  { name: 'HomeServe', val: '$4.5B', market: 'Global' },
                  { name: 'Porch', val: '$1B+', market: 'USA' },
                  { name: 'Thumbtack', val: '$3.2B', market: 'USA' },
                ].map((c, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
                    <div className="text-white font-bold text-sm">{c.name}</div>
                    <div className="text-amber-400 text-xl font-black mt-1">{c.val}</div>
                    <div className="text-slate-500 text-xs mt-1">{c.market}</div>
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
                  { stage: 'Seed', val: '15M AED', time: 'Q1 2025', color: 'text-emerald-400' },
                  { stage: 'Series A', val: '80M AED', time: 'Q4 2025', color: 'text-blue-400' },
                  { stage: 'Series B', val: '300M AED', time: 'Q3 2026', color: 'text-purple-400' },
                  { stage: 'Series C / IPO', val: '1B+ AED', time: '2027+', color: 'text-[#c9a227]' },
                ].map((m, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/30">
                    <div className={`text-xs font-bold ${m.color} uppercase`}>{m.stage}</div>
                    <div className={`text-xl font-bold ${m.color} mt-1`}>{m.val}</div>
                    <div className="text-slate-500 text-xs mt-1">{m.time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RTMN Multiplier */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-transparent rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-[#c9a227] mb-3">RTMN Ecosystem Multiplier</h3>
              <p className="text-slate-300 text-sm mb-4">Every RTMN app funnels demand into Handyzy, creating a compounding growth flywheel that standalone competitors cannot replicate.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  'Aqar: Maintenance contracts auto-route',
                  'Sakin: Move-in AC/plumbing setup',
                  'BizOne: Commercial maintenance contracts',
                  'Qist: 0% interest for major repairs',
                  'Khedma: Technician visa processing',
                  'Nuqta Coins: Cross-ecosystem loyalty',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-[#c9a227] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ============================================ */}
      {/* NAVIGATION FOOTER */}
      {/* ============================================ */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/wasil" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-400 transition-colors">
              <MapPin className="w-5 h-5" /> Wasil
            </Link>
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Database className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/bizone" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-400 transition-colors">
              <Store className="w-5 h-5" /> BizOne
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
