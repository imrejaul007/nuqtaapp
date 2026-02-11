'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Crown, Building2, Layers, Network, Globe, Target, Users, Shield,
  Wallet, Store, Truck, Plane, Brain, Megaphone, Package, Server,
  Calendar, TrendingUp, BarChart3, DollarSign, ArrowRight, ChevronDown,
  ChevronUp, Sparkles, Coins, CreditCard, Home, ArrowLeftRight, Gamepad2,
  Factory, ShoppingCart, Cpu, Ticket, MapPin, Car, Briefcase, Lock,
  FileText, Settings, Rocket, Eye, Zap, RefreshCw, CheckCircle, Clock,
  Database, Cloud, Code, MessageSquare, Mail, Bell, Activity, ChevronRight,
  PieChart, Calculator, Award, Handshake, Gift, Send, LineChart
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// RTMN Group Structure - 10 Sister Companies
const sisterCompanies = [
  {
    id: 'nuqta-corp',
    name: 'Nuqta Corporation',
    arabic: 'نقطة كوربوريشن',
    tagline: 'Rewards & Loyalty Platform',
    description: 'Consumer-facing rewards, membership, and BNPL platform',
    color: 'from-[#c9a227] to-amber-600',
    textColor: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]',
    icon: Crown,
    href: '/nuqta-corp',
    dashboardHref: '/dashboard',
    phase: 1,
    apps: [
      { name: 'Nuqta+', href: '/nuqta-plus', icon: Crown, description: 'Membership & rewards' },
      { name: 'Nuqta+ Card', href: '/nuqta-plus', icon: CreditCard, description: 'Premium member card' },
      { name: 'Qist', href: '/qist', icon: Wallet, description: 'Buy Now Pay Later' },
      { name: 'Qist Card', href: '/qist', icon: CreditCard, description: 'Virtual BNPL card' },
      { name: 'Gamification', href: '/gamification', icon: Gamepad2, description: 'Engagement engine' },
      { name: 'Nuqta Coins', href: '/nuqta-plus', icon: Coins, description: 'Universal rewards currency' },
    ],
    revenue: 'AED 89-175M/yr',
    status: 'Active',
  },
  {
    id: 'wasil-apps',
    name: 'Wasil Apps',
    arabic: 'تطبيقات واصل',
    tagline: 'Delivery & Lifestyle Services',
    description: 'Quick commerce, rentals, and lifestyle delivery platform',
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500',
    icon: Truck,
    href: '/wasil-apps',
    dashboardHref: '/wasil-apps',
    phase: 1,
    apps: [
      { name: 'Wasil', href: '/wasil', icon: Truck, description: 'Quick commerce delivery' },
      { name: 'Wasil+', href: '/wasil', icon: Crown, description: 'Premium delivery subscription' },
      { name: 'Sakin', href: '/sakin', icon: Home, description: 'Rent financing' },
      { name: 'Sakin Short Stay', href: '/sakin', icon: Building2, description: 'Short-term rentals' },
      { name: 'Ajer', href: '/ajer', icon: Package, description: 'Rental marketplace' },
      { name: 'Wasil Fresh', href: '/wasil-apps', icon: ShoppingCart, description: 'Grocery delivery' },
      { name: 'Wasil Pharmacy', href: '/wasil-apps', icon: Package, description: 'Medicine delivery' },
      { name: 'Wasil Food', href: '/wasil-apps', icon: Package, description: 'Restaurant delivery' },
      { name: 'Wasil Mall', href: '/wasil-apps', icon: Store, description: 'Retail delivery' },
      { name: 'Wasil Express', href: '/wasil-apps', icon: Truck, description: 'Same-day courier' },
      { name: 'Wasil Laundry', href: '/wasil-apps', icon: Package, description: 'Laundry pickup' },
      { name: 'Wasil Gifts', href: '/wasil-apps', icon: Gift, description: 'Gift delivery' },
    ],
    revenue: 'AED 150-300M/yr',
    status: 'Active',
  },
  {
    id: 'rtmn-finance',
    name: 'RTMN Finance',
    arabic: 'آر تي إم إن فاينانس',
    tagline: 'Islamic Fintech Platform',
    description: 'Shariah-compliant payments, remittance, and credit solutions',
    color: 'from-blue-500 to-cyan-500',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
    icon: Wallet,
    href: '/rtmn-finance',
    dashboardHref: '/rtmn-finance',
    phase: 1,
    apps: [
      { name: 'Hawil', href: '/hawil', icon: ArrowLeftRight, description: 'Remittance at Google rate' },
      { name: 'Hawil Card', href: '/hawil', icon: CreditCard, description: 'Prepaid tourist card' },
      { name: 'Hawil Wallet', href: '/hawil', icon: Wallet, description: 'Multi-currency wallet' },
      { name: 'NuqtaPay', href: '/rtmn-finance', icon: CreditCard, description: 'Payment processing' },
      { name: 'NuqtaPay POS', href: '/rtmn-finance', icon: Store, description: 'Merchant terminals' },
      { name: 'Merchant Credit', href: '/rtmn-finance', icon: Store, description: 'Working capital' },
      { name: 'Consumer Credit', href: '/rtmn-finance', icon: Users, description: 'Personal financing' },
      { name: 'Qist Engine', href: '/rtmn-finance', icon: Wallet, description: 'BNPL infrastructure' },
      { name: 'FX Platform', href: '/rtmn-finance', icon: Globe, description: 'Currency exchange' },
      { name: 'Compliance Suite', href: '/rtmn-finance', icon: Shield, description: 'AML/KYC system' },
      { name: 'Treasury', href: '/rtmn-finance', icon: Building2, description: 'Fund management' },
      { name: 'Credit Scoring', href: '/rtmn-finance', icon: TrendingUp, description: 'AI credit engine' },
    ],
    revenue: 'AED 200-400M/yr',
    status: 'Active',
  },
  {
    id: 'travel-co',
    name: 'Travel Co',
    arabic: 'ترافل كو',
    tagline: 'Travel & Mobility Platform',
    description: 'End-to-end travel, mobility, and luxury experiences',
    color: 'from-cyan-500 to-teal-600',
    textColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500',
    icon: Plane,
    href: '/travel-co',
    dashboardHref: '/travel-co',
    phase: 2,
    apps: [
      { name: 'Safar', href: '/safar', icon: Plane, description: 'Travel booking' },
      { name: 'Safar Flights', href: '/safar', icon: Plane, description: 'Flight booking' },
      { name: 'Safar Hotels', href: '/travel-co', icon: Building2, description: 'Hotel booking' },
      { name: 'Safar Visa', href: '/travel-co', icon: FileText, description: 'Visa processing' },
      { name: 'Safar Experiences', href: '/travel-co', icon: Ticket, description: 'Activity booking' },
      { name: 'Rakab', href: '/rakab', icon: Car, description: 'Ride-hailing' },
      { name: 'Rakab Business', href: '/travel-co', icon: Briefcase, description: 'Corporate mobility' },
      { name: 'Rakab Driver', href: '/rakab', icon: Car, description: 'Driver app' },
      { name: 'Fakhir', href: '/fakhir', icon: Crown, description: 'Luxury concierge' },
      { name: 'Fakhir Jets', href: '/travel-co', icon: Plane, description: 'Private aviation' },
      { name: 'Fakhir Yachts', href: '/travel-co', icon: MapPin, description: 'Yacht charters' },
      { name: 'Fakhir Events', href: '/travel-co', icon: Ticket, description: 'VIP experiences' },
      { name: 'Airzy', href: '/travel-co', icon: Plane, description: 'Airport services' },
      { name: 'Airzy Lounge', href: '/travel-co', icon: Crown, description: 'Lounge access' },
      { name: 'Airzy FX', href: '/travel-co', icon: ArrowLeftRight, description: 'Airport currency' },
    ],
    revenue: 'AED 180-350M/yr',
    status: 'Phase 2',
  },
  {
    id: 'bizone',
    name: 'BizOne',
    arabic: 'بيز ون',
    tagline: 'Merchant SaaS Platform',
    description: 'All-in-one business management for SMEs',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500',
    icon: Store,
    href: '/bizone',
    dashboardHref: '/bizone',
    phase: 2,
    apps: [
      { name: 'BizOne POS', href: '/bizone', icon: CreditCard, description: 'Point of sale' },
      { name: 'BizOne CRM', href: '/bizone', icon: Users, description: 'Customer management' },
      { name: 'BizOne Inventory', href: '/bizone', icon: Package, description: 'Stock management' },
      { name: 'BizOne Analytics', href: '/bizone', icon: BarChart3, description: 'Business insights' },
      { name: 'BizOne Staff', href: '/bizone', icon: Users, description: 'HR & payroll' },
      { name: 'BizOne Menu', href: '/bizone', icon: FileText, description: 'Digital menus' },
      { name: 'BizOne Booking', href: '/bizone', icon: Calendar, description: 'Appointment system' },
      { name: 'BizOne Loyalty', href: '/bizone', icon: Crown, description: 'Loyalty program' },
    ],
    revenue: 'AED 50-100M/yr',
    status: 'Phase 2',
  },
  {
    id: 'inventora',
    name: 'Inventora',
    arabic: 'إنفنتورا',
    tagline: 'Supply Chain & Inventory',
    description: 'B2B supply chain and inventory financing platform',
    color: 'from-violet-500 to-purple-600',
    textColor: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500',
    icon: Package,
    href: '/inventora',
    dashboardHref: '/inventora',
    phase: 2,
    apps: [
      { name: 'Inventora Warehouse', href: '/inventora', icon: Factory, description: 'Warehouse management' },
      { name: 'Inventora Finance', href: '/inventora', icon: DollarSign, description: 'Inventory financing' },
      { name: 'Inventora Logistics', href: '/inventora', icon: Truck, description: 'B2B delivery' },
      { name: 'Inventora Forecast', href: '/inventora', icon: TrendingUp, description: 'Demand prediction' },
      { name: 'Inventora Supplier', href: '/inventora', icon: Users, description: 'Supplier portal' },
      { name: 'Inventora Track', href: '/inventora', icon: MapPin, description: 'Shipment tracking' },
    ],
    revenue: 'AED 80-160M/yr',
    status: 'Phase 2',
  },
  {
    id: 'nextabizz',
    name: 'NextaBizz',
    arabic: 'نكستا بيز',
    tagline: 'B2B Marketplace',
    description: 'Wholesale and B2B commerce platform',
    color: 'from-indigo-500 to-blue-600',
    textColor: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500',
    icon: Building2,
    href: '/nextabizz',
    dashboardHref: '/nextabizz',
    phase: 3,
    apps: [
      { name: 'NextaBizz Market', href: '/nextabizz', icon: Store, description: 'B2B marketplace' },
      { name: 'NextaBizz Bulk', href: '/nextabizz', icon: Package, description: 'Bulk ordering' },
      { name: 'NextaBizz Credit', href: '/nextabizz', icon: Wallet, description: 'Trade financing' },
      { name: 'NextaBizz Import', href: '/nextabizz', icon: Globe, description: 'Import facilitation' },
      { name: 'NextaBizz Supplier', href: '/nextabizz', icon: Factory, description: 'Supplier network' },
      { name: 'NextaBizz Export', href: '/nextabizz', icon: Plane, description: 'Export services' },
    ],
    revenue: 'AED 120-240M/yr',
    status: 'Phase 3',
  },
  {
    id: 'adzy',
    name: 'Adzy',
    arabic: 'أدزي',
    tagline: 'Advertising & Media Network',
    description: 'Ecosystem-wide advertising and media platform',
    color: 'from-pink-500 to-rose-500',
    textColor: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500',
    icon: Megaphone,
    href: '/adzy',
    dashboardHref: '/adzy',
    phase: 2,
    apps: [
      { name: 'Adzy Network', href: '/adzy', icon: Network, description: 'Ad network' },
      { name: 'Adzy DSP', href: '/adzy', icon: Target, description: 'Demand-side platform' },
      { name: 'Adzy Analytics', href: '/adzy', icon: BarChart3, description: 'Ad performance' },
      { name: 'Adzy Creative', href: '/adzy', icon: Sparkles, description: 'Creative studio' },
      { name: 'Adzy Influencer', href: '/adzy', icon: Users, description: 'Influencer platform' },
      { name: 'Adzy Merchant', href: '/adzy', icon: Store, description: 'Merchant ads portal' },
      { name: 'Adzy Retarget', href: '/adzy', icon: RefreshCw, description: 'Retargeting engine' },
    ],
    revenue: 'AED 50-150M/yr',
    status: 'Phase 2',
  },
  {
    id: 'rabtul',
    name: 'Rabtul',
    arabic: 'رابطول',
    tagline: 'Tech Infrastructure & AI',
    description: 'Cloud infrastructure, APIs, and AI/ML platform',
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500',
    icon: Brain,
    href: '/rabtul',
    dashboardHref: '/rabtul',
    phase: 1,
    apps: [
      { name: 'Rabtul Cloud', href: '/rabtul', icon: Cloud, description: 'Cloud infrastructure' },
      { name: 'Rabtul AI', href: '/rabtul', icon: Brain, description: 'AI/ML models' },
      { name: 'Rabtul APIs', href: '/rabtul', icon: Code, description: 'API gateway' },
      { name: 'Rabtul Data', href: '/rabtul', icon: Database, description: 'Data platform' },
      { name: 'Rabtul Security', href: '/rabtul', icon: Shield, description: 'Security services' },
      { name: 'Rabtul CDN', href: '/rabtul', icon: Globe, description: 'Content delivery' },
      { name: 'Rabtul Analytics', href: '/rabtul', icon: LineChart, description: 'Real-time analytics' },
    ],
    revenue: 'AED 30-60M/yr',
    status: 'Active',
  },
  {
    id: 'eventora',
    name: 'Eventora',
    arabic: 'إيفينتورا',
    tagline: 'Events & Experiences',
    description: 'Event management, ticketing, and experiences platform',
    color: 'from-amber-500 to-orange-600',
    textColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500',
    icon: Ticket,
    href: '/eventora',
    dashboardHref: '/eventora',
    phase: 3,
    apps: [
      { name: 'Eventora Tickets', href: '/eventora', icon: Ticket, description: 'Event ticketing' },
      { name: 'Eventora Host', href: '/eventora', icon: Users, description: 'Event management' },
      { name: 'Eventora Venues', href: '/eventora', icon: MapPin, description: 'Venue booking' },
      { name: 'Eventora Corporate', href: '/eventora', icon: Building2, description: 'Corporate events' },
      { name: 'Eventora Sports', href: '/eventora', icon: Activity, description: 'Sports events' },
      { name: 'Eventora Concerts', href: '/eventora', icon: Megaphone, description: 'Concert ticketing' },
    ],
    revenue: 'AED 40-80M/yr',
    status: 'Phase 3',
  },
];

// Launch Phases
const launchPhases = [
  {
    phase: 1,
    name: 'Foundation',
    timeline: '2026-2027',
    status: 'Active',
    color: 'border-emerald-500',
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-400',
    companies: ['nuqta-corp', 'wasil-apps', 'rtmn-finance', 'rabtul'],
    goals: [
      'Launch core consumer apps (Nuqta+, Wasil, Hawil)',
      'Build tech infrastructure (Rabtul)',
      '500K users, 500+ merchants',
      'UAE market dominance',
    ],
  },
  {
    phase: 2,
    name: 'Expansion',
    timeline: '2027-2028',
    status: 'Planned',
    color: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-400',
    companies: ['travel-co', 'bizone', 'inventora', 'adzy'],
    goals: [
      'Launch B2B platforms (BizOne, Inventora)',
      'Travel & mobility (Safar, Rakab, Fakhir)',
      'Ad network activation (Adzy)',
      'GCC expansion begins',
    ],
  },
  {
    phase: 3,
    name: 'Scale',
    timeline: '2028-2029',
    status: 'Vision',
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-400',
    companies: ['nextabizz', 'eventora'],
    goals: [
      'B2B marketplace (NextaBizz)',
      'Events platform (Eventora)',
      'Full GCC coverage',
      '5M+ users',
    ],
  },
];

// Value Chain Steps
const valueChainSteps = [
  { step: 1, name: 'USER ACQUISITION', company: 'Nuqta', description: 'Membership, rewards, retention', color: 'bg-[#c9a227]' },
  { step: 2, name: 'COMMERCE', company: 'Wasil Apps', description: 'Delivery, orders, fulfillment', color: 'bg-orange-500' },
  { step: 3, name: 'PAYMENTS', company: 'RTMN Finance', description: 'Processing, wallets, credit', color: 'bg-blue-500' },
  { step: 4, name: 'MERCHANT TOOLS', company: 'BizOne', description: 'POS, CRM, analytics', color: 'bg-emerald-500' },
  { step: 5, name: 'SUPPLY CHAIN', company: 'Inventora', description: 'Inventory, warehousing', color: 'bg-violet-500' },
  { step: 6, name: 'B2B TRADE', company: 'NextaBizz', description: 'Wholesale, bulk orders', color: 'bg-indigo-500' },
  { step: 7, name: 'ADVERTISING', company: 'Adzy', description: 'Ads, promotions, media', color: 'bg-pink-500' },
  { step: 8, name: 'TRAVEL & MOBILITY', company: 'Travel Co', description: 'Flights, rides, luxury', color: 'bg-cyan-500' },
  { step: 9, name: 'TECH INFRASTRUCTURE', company: 'Rabtul', description: 'Cloud, APIs, AI', color: 'bg-purple-500' },
  { step: 10, name: 'EVENTS', company: 'Eventora', description: 'Ticketing, experiences', color: 'bg-amber-500' },
];

// Cross-Company Synergies
const companySynergies = [
  { from: 'Nuqta', to: 'Wasil', synergy: 'Wasil+ free for Nuqta+ members', icon: Truck },
  { from: 'Nuqta', to: 'RTMN Finance', synergy: 'Coins as payment currency', icon: Coins },
  { from: 'Wasil', to: 'BizOne', synergy: 'Merchant delivery integration', icon: Store },
  { from: 'RTMN Finance', to: 'Inventora', synergy: 'Inventory financing', icon: Package },
  { from: 'BizOne', to: 'Adzy', synergy: 'Merchant ad targeting', icon: Megaphone },
  { from: 'Rabtul', to: 'All Companies', synergy: 'Shared AI/ML infrastructure', icon: Brain },
  { from: 'Travel Co', to: 'Nuqta', synergy: '2X coins on travel', icon: Plane },
  { from: 'Eventora', to: 'Adzy', synergy: 'Event sponsorship ads', icon: Ticket },
];

// Money Flow
const moneyFlows = [
  { source: 'Users', target: 'NuqtaPay', description: 'Payment processing', amount: '0.3-1.2%' },
  { source: 'Wasil', target: 'Merchants', description: 'Commission', amount: '8-25%' },
  { source: 'BizOne', target: 'RTMN', description: 'SaaS subscription', amount: 'AED 199-2K/mo' },
  { source: 'Inventora', target: 'RTMN', description: 'Inventory margin', amount: '8-20%' },
  { source: 'Adzy', target: 'RTMN', description: 'Ad revenue', amount: 'AED 50-150M/yr' },
  { source: 'Finance', target: 'RTMN', description: 'Credit fees', amount: '18-36% APR' },
];

// Data Flow
const dataFlows = [
  { source: 'Nuqta', data: 'User behavior', target: 'Rabtul' },
  { source: 'Wasil', data: 'Purchase patterns', target: 'Rabtul' },
  { source: 'BizOne', data: 'Merchant analytics', target: 'Rabtul' },
  { source: 'Rabtul', data: 'AI insights', target: 'Adzy' },
  { source: 'Adzy', data: 'Campaign performance', target: 'All Companies' },
];

// Money Loops
const moneyLoops = [
  {
    name: 'Merchant Loop',
    steps: ['Merchant', 'Adzy', 'Wasil', 'BizOne', 'Inventora', 'NextaBizz'],
    description: 'Merchant spends AED 1 on ads → gets customers → more sales → needs inventory → buys B2B',
    color: 'border-emerald-500',
  },
  {
    name: 'User Loop',
    steps: ['User', 'Nuqta', 'Wasil', 'Coins', 'Eventora', 'Travel Co'],
    description: 'User earns coins → spends → attends event → travels → comes back to Nuqta',
    color: 'border-blue-500',
  },
  {
    name: 'Data Loop',
    steps: ['BizOne', 'Rabtul', 'Adzy', 'Wasil', 'Nuqta', 'Finance'],
    description: 'Data creates infinite monetization through AI-powered insights',
    color: 'border-purple-500',
  },
];

// Revenue Summary
const revenueSummary = {
  totalMin: 1000,
  totalMax: 2020,
  currency: 'AED',
  unit: 'M',
  companies: [
    { name: 'RTMN Finance', min: 200, max: 400, color: 'bg-blue-500' },
    { name: 'Travel Co', min: 180, max: 350, color: 'bg-cyan-500' },
    { name: 'Wasil Apps', min: 150, max: 300, color: 'bg-orange-500' },
    { name: 'NextaBizz', min: 120, max: 240, color: 'bg-indigo-500' },
    { name: 'Nuqta Corp', min: 89, max: 175, color: 'bg-[#c9a227]' },
    { name: 'Inventora', min: 80, max: 160, color: 'bg-violet-500' },
    { name: 'BizOne', min: 50, max: 100, color: 'bg-emerald-500' },
    { name: 'Adzy', min: 50, max: 150, color: 'bg-pink-500' },
    { name: 'Eventora', min: 40, max: 80, color: 'bg-amber-500' },
    { name: 'Rabtul', min: 30, max: 60, color: 'bg-purple-500' },
  ],
};

// GCC Expansion
const gccCountries = [
  { name: 'UAE', flag: '🇦🇪', status: 'Active', timeline: 'Now', color: 'text-emerald-400' },
  { name: 'Saudi Arabia', flag: '🇸🇦', status: 'Phase 2', timeline: '2027', color: 'text-green-400' },
  { name: 'Qatar', flag: '🇶🇦', status: 'Phase 2', timeline: '2027', color: 'text-purple-400' },
  { name: 'Kuwait', flag: '🇰🇼', status: 'Phase 3', timeline: '2028', color: 'text-blue-400' },
  { name: 'Bahrain', flag: '🇧🇭', status: 'Phase 3', timeline: '2028', color: 'text-red-400' },
  { name: 'Oman', flag: '🇴🇲', status: 'Phase 3', timeline: '2028', color: 'text-orange-400' },
];

// Group Strategy Links
const groupStrategyLinks = [
  { name: 'Value Chain', href: '/value-chain', icon: Layers, description: 'Money, Data, Coin flows', color: 'text-emerald-400' },
  { name: 'Monetization', href: '/monetization', icon: DollarSign, description: 'Revenue models', color: 'text-green-400' },
  { name: 'Master Plan', href: '/group-master-plan', icon: Target, description: '55B AED vision', color: 'text-[#c9a227]' },
  { name: 'Team Structure', href: '/rtmn-team-structure', icon: Users, description: '10 company teams', color: 'text-purple-400' },
  { name: 'Rabtul Tech', href: '/rabtul-tech', icon: Code, description: 'Tech team & tasks', color: 'text-violet-400' },
  { name: 'Launch Strategy', href: '/group-launch-strategy', icon: Rocket, description: 'Go-to-market', color: 'text-blue-400' },
  { name: 'Governance', href: '/group-governance', icon: Shield, description: 'Shariah compliance', color: 'text-rose-400' },
];

export default function RTMNDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Network },
    { id: 'companies', label: 'Companies', icon: Building2 },
    { id: 'apps', label: 'All Apps', icon: Sparkles },
    { id: 'value-chain', label: 'Value Chain', icon: Layers },
    { id: 'synergies', label: 'Synergies', icon: RefreshCw },
    { id: 'phases', label: 'Launch Phases', icon: Calendar },
    { id: 'revenue', label: 'Revenue', icon: DollarSign },
    { id: 'gcc', label: 'GCC Expansion', icon: Globe },
    { id: 'strategy', label: 'Strategy', icon: Target },
  ];

  const getPhaseCompanies = (phaseNum: number) => {
    return sisterCompanies.filter(c => c.phase === phaseNum);
  };

  const toggleCompany = (id: string) => {
    setExpandedCompany(expandedCompany === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full mb-4">
              <Building2 className="w-5 h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-bold">RTMN Digital Holding</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              <span className="text-[#c9a227]">RTMN</span> Group Ecosystem
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              10 Sister Companies | 50+ Apps | Complete closed-loop economy powering the GCC&apos;s largest Islamic fintech ecosystem
            </p>
          </div>

          {/* Company Circle Visual */}
          <div className="relative max-w-4xl mx-auto mb-8">
            {/* Center - RTMN */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#c9a227] to-amber-600 flex items-center justify-center shadow-2xl shadow-[#c9a227]/30">
                <span className="text-white font-black text-lg">RTMN</span>
              </div>
            </div>

            {/* Companies Ring */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {sisterCompanies.map((company, i) => (
                <Link
                  key={i}
                  href={company.dashboardHref}
                  className={`${company.bgColor} border ${company.borderColor} rounded-xl p-3 text-center hover:scale-105 transition-all`}
                >
                  <company.icon className={`w-6 h-6 ${company.textColor} mx-auto mb-1`} />
                  <div className={`text-xs font-bold ${company.textColor}`}>{company.name.split(' ')[0]}</div>
                  <div className="text-[10px] text-slate-500">{company.apps.length} apps</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-[#c9a227]">10</div>
              <div className="text-xs text-slate-400">Sister Companies</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-400">50+</div>
              <div className="text-xs text-slate-400">Apps & Platforms</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-blue-400">3</div>
              <div className="text-xs text-slate-400">Launch Phases</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-purple-400">6</div>
              <div className="text-xs text-slate-400">GCC Countries</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-green-400">2B+</div>
              <div className="text-xs text-slate-400">AED Revenue Target</div>
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
                    ? 'bg-[#c9a227] text-white'
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
            {/* The Vision */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#c9a227]" />
                The RTMN Vision
              </h2>
              <p className="text-slate-300 text-lg mb-6">
                RTMN is building the <strong className="text-white">complete closed-loop economy for the GCC</strong> -
                where every transaction, every service, every experience flows through our ecosystem.
                One holding company. Ten specialized companies. Infinite value creation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-[#c9a227]/30">
                  <div className="text-[#c9a227] font-bold mb-2">Closed Loop</div>
                  <p className="text-sm text-slate-400">Every AED 1 spent creates AED 7-10 of value across companies</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-[#c9a227]/30">
                  <div className="text-[#c9a227] font-bold mb-2">Data Synergy</div>
                  <p className="text-sm text-slate-400">Unified data platform powers AI-driven personalization</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-[#c9a227]/30">
                  <div className="text-[#c9a227] font-bold mb-2">Coin Economy</div>
                  <p className="text-sm text-slate-400">Nuqta coins flow across all apps, creating retention</p>
                </div>
              </div>
            </div>

            {/* Quick Strategy Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {groupStrategyLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-[#c9a227]/50 transition-all group"
                >
                  <link.icon className={`w-6 h-6 ${link.color} mb-2`} />
                  <div className="text-sm font-bold text-white group-hover:text-[#c9a227] transition-colors">{link.name}</div>
                  <div className="text-xs text-slate-400">{link.description}</div>
                </Link>
              ))}
            </div>

            {/* Ecosystem Flywheel */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-blue-400" />
                The Ecosystem Flywheel
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { step: 1, title: 'Acquire', description: 'Users via Nuqta, Tourists via Hawil Card', icon: Users, color: 'text-[#c9a227]' },
                  { step: 2, title: 'Transact', description: 'Commerce via Wasil, Payments via RTMN Finance', icon: CreditCard, color: 'text-blue-400' },
                  { step: 3, title: 'Retain', description: 'Coins, gamification, membership benefits', icon: Coins, color: 'text-green-400' },
                  { step: 4, title: 'Expand', description: 'Travel, events, B2B, luxury services', icon: Rocket, color: 'text-purple-400' },
                  { step: 5, title: 'Monetize', description: 'Ads, data, credit, SaaS across ecosystem', icon: DollarSign, color: 'text-pink-400' },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 text-center h-full">
                      <div className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-3 ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="text-xs text-slate-500 mb-1">Step {item.step}</div>
                      <div className={`text-sm font-bold ${item.color}`}>{item.title}</div>
                      <div className="text-xs text-slate-400 mt-2">{item.description}</div>
                    </div>
                    {i < 4 && (
                      <ChevronRight className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Companies Overview Grid */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-purple-400" />
                10 Sister Companies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sisterCompanies.slice(0, 6).map((company, i) => (
                  <Link
                    key={i}
                    href={company.dashboardHref}
                    className={`${company.bgColor} border ${company.borderColor} rounded-xl p-5 hover:scale-[1.02] transition-all group`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${company.color} flex items-center justify-center`}>
                        <company.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${company.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : company.status === 'Phase 2' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}`}>
                        {company.status}
                      </span>
                    </div>
                    <h3 className={`text-lg font-bold ${company.textColor}`}>{company.name}</h3>
                    <p className="text-slate-400 text-sm mt-1 mb-3">{company.tagline}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">{company.apps.length} apps</span>
                      <span className={company.textColor}>{company.revenue}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-4">
                <button
                  onClick={() => setActiveTab('companies')}
                  className="text-[#c9a227] hover:underline text-sm flex items-center gap-1 mx-auto"
                >
                  View all 10 companies <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Companies Tab */}
        {activeTab === 'companies' && (
          <div className="space-y-4">
            {sisterCompanies.map((company) => {
              const isExpanded = expandedCompany === company.id;
              return (
                <div
                  key={company.id}
                  className={`${company.bgColor} rounded-xl border-2 ${company.borderColor} overflow-hidden transition-all`}
                >
                  <div
                    className="p-5 cursor-pointer"
                    onClick={() => toggleCompany(company.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${company.color} flex items-center justify-center`}>
                          <company.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <div className={`text-xl font-bold ${company.textColor}`}>{company.name}</div>
                          <div className="text-sm text-slate-500">{company.arabic}</div>
                          <div className="text-sm text-slate-400 mt-1">{company.tagline}</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${company.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : company.status === 'Phase 2' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}`}>
                          {company.status}
                        </span>
                        <div className="text-sm text-slate-400">{company.apps.length} apps</div>
                        {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                      </div>
                    </div>
                    <p className="text-slate-400 mt-3">{company.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-slate-500">Revenue Potential: <span className={company.textColor}>{company.revenue}</span></span>
                      <Link
                        href={company.dashboardHref}
                        className={`text-sm ${company.textColor} hover:underline flex items-center gap-1`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Dashboard <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-0 border-t border-slate-700/30">
                      <div className="text-sm font-bold text-white mb-4 mt-4">Apps & Platforms ({company.apps.length})</div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {company.apps.map((app, i) => (
                          <Link
                            key={i}
                            href={app.href}
                            className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50 hover:border-slate-600 transition-all group"
                          >
                            <app.icon className={`w-5 h-5 ${company.textColor} mb-2`} />
                            <div className="text-sm font-medium text-white group-hover:text-[#c9a227] transition-colors">{app.name}</div>
                            <div className="text-xs text-slate-500">{app.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* All Apps Tab */}
        {activeTab === 'apps' && (
          <div className="space-y-8">
            {/* Stats Banner */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#c9a227]" />
                Complete RTMN Ecosystem - All Apps & Products
              </h2>
              <p className="text-slate-300 mb-4">
                50+ apps and platforms across 10 sister companies, creating the most comprehensive
                closed-loop digital economy in the GCC.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center border border-[#c9a227]/30">
                  <div className="text-2xl font-bold text-[#c9a227]">{sisterCompanies.reduce((acc, c) => acc + c.apps.length, 0)}</div>
                  <div className="text-xs text-slate-400">Total Apps</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center border border-emerald-500/30">
                  <div className="text-2xl font-bold text-emerald-400">10</div>
                  <div className="text-xs text-slate-400">Companies</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center border border-blue-500/30">
                  <div className="text-2xl font-bold text-blue-400">3</div>
                  <div className="text-xs text-slate-400">Payment Cards</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center border border-purple-500/30">
                  <div className="text-2xl font-bold text-purple-400">6</div>
                  <div className="text-xs text-slate-400">GCC Countries</div>
                </div>
              </div>
            </div>

            {/* Cards Section */}
            <div className="bg-blue-500/10 rounded-xl p-6 border-2 border-blue-500">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-blue-400" />
                Payment Cards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-xl p-5 border border-blue-500/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Hawil Card</div>
                      <div className="text-blue-400 text-sm">بطاقة حوّل</div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">Tourist & expat prepaid card with Google rate FX. Works across entire ecosystem.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-500/20 px-2 py-1 rounded text-blue-400">0% FX Markup</span>
                    <span className="text-xs bg-emerald-500/20 px-2 py-1 rounded text-emerald-400">Apple Pay</span>
                    <span className="text-xs bg-purple-500/20 px-2 py-1 rounded text-purple-400">Virtual + Physical</span>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-5 border border-[#c9a227]/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a227] to-amber-600 flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Nuqta+ Card</div>
                      <div className="text-[#c9a227] text-sm">بطاقة نقطة+</div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">Premium membership card with exclusive rewards and priority access at 500+ merchants.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#c9a227]/20 px-2 py-1 rounded text-[#c9a227]">2X Coins</span>
                    <span className="text-xs bg-emerald-500/20 px-2 py-1 rounded text-emerald-400">VIP Access</span>
                    <span className="text-xs bg-purple-500/20 px-2 py-1 rounded text-purple-400">Metal Card</span>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-5 border border-violet-500/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Qist Card</div>
                      <div className="text-violet-400 text-sm">بطاقة قسط</div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">BNPL virtual card for split payments over 3-12 months at any merchant.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-violet-500/20 px-2 py-1 rounded text-violet-400">0% Interest</span>
                    <span className="text-xs bg-emerald-500/20 px-2 py-1 rounded text-emerald-400">Instant Approval</span>
                    <span className="text-xs bg-blue-500/20 px-2 py-1 rounded text-blue-400">Flexible Terms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* All Apps by Company */}
            {sisterCompanies.map((company) => (
              <div key={company.id} className={`${company.bgColor} rounded-xl p-6 border-2 ${company.borderColor}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${company.color} flex items-center justify-center`}>
                      <company.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${company.textColor}`}>{company.name}</h3>
                      <p className="text-sm text-slate-400">{company.tagline} • {company.apps.length} apps</p>
                    </div>
                  </div>
                  <Link
                    href={company.dashboardHref}
                    className={`text-sm ${company.textColor} hover:underline flex items-center gap-1`}
                  >
                    Dashboard <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {company.apps.map((app, i) => (
                    <Link
                      key={i}
                      href={app.href}
                      className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50 hover:border-slate-600 transition-all group"
                    >
                      <app.icon className={`w-5 h-5 ${company.textColor} mb-2`} />
                      <div className="text-sm font-medium text-white group-hover:text-[#c9a227] transition-colors">{app.name}</div>
                      <div className="text-xs text-slate-500">{app.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Future Apps */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-purple-400" />
                Future Products (2028+)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Jame'", arabic: 'جامع', description: 'Savings & Investment', icon: PieChart, color: 'text-amber-400' },
                  { name: "Ta'meen", arabic: 'تأمين', description: 'Insurance Platform', icon: Shield, color: 'text-red-400' },
                  { name: 'Nuqta Pay', arabic: 'نقطة باي', description: 'QR Payments', icon: CreditCard, color: 'text-green-400' },
                  { name: 'Seha', arabic: 'صحة', description: 'Healthcare & Telemedicine', icon: Activity, color: 'text-pink-400' },
                ].map((product, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-purple-500/30">
                    <product.icon className={`w-6 h-6 ${product.color} mb-2`} />
                    <div className={`font-bold ${product.color}`}>{product.name}</div>
                    <div className="text-xs text-slate-500">{product.arabic}</div>
                    <div className="text-sm text-slate-400 mt-1">{product.description}</div>
                    <span className="inline-block mt-2 text-xs bg-purple-500/20 px-2 py-1 rounded text-purple-400">Planned</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Value Chain Tab */}
        {activeTab === 'value-chain' && (
          <div className="space-y-8">
            {/* Value Chain Steps */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/10 rounded-xl p-6 border-2 border-emerald-500">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-400" />
                10-Step Value Chain
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {valueChainSteps.map((step, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                    <div className={`w-8 h-8 rounded-full ${step.color} flex items-center justify-center text-white font-bold text-sm mb-2`}>
                      {step.step}
                    </div>
                    <div className="text-xs text-slate-500 mb-1">{step.name}</div>
                    <div className="text-sm font-bold text-white">{step.company}</div>
                    <div className="text-xs text-slate-400 mt-1">{step.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Money Loops */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-blue-400" />
                Closed-Loop Money Flows
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {moneyLoops.map((loop, i) => (
                  <div key={i} className={`rounded-xl p-5 border-2 ${loop.color} bg-slate-900/30`}>
                    <h4 className="text-white font-bold mb-3">{loop.name}</h4>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {loop.steps.map((step, j) => (
                        <span key={j} className="flex items-center">
                          <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">{step}</span>
                          {j < loop.steps.length - 1 && <ArrowRight className="w-3 h-3 text-slate-600 mx-1" />}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-slate-400">{loop.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Money & Data Flows */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/30">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-400" />
                  Money Flow
                </h3>
                <div className="space-y-3">
                  {moneyFlows.map((flow, i) => (
                    <div key={i} className="flex items-center justify-between bg-slate-900/50 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400 font-medium text-sm">{flow.source}</span>
                        <ArrowRight className="w-3 h-3 text-slate-500" />
                        <span className="text-white text-sm">{flow.target}</span>
                      </div>
                      <span className="text-emerald-400 text-sm font-bold">{flow.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/30">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-purple-400" />
                  Data Flow
                </h3>
                <div className="space-y-3">
                  {dataFlows.map((flow, i) => (
                    <div key={i} className="flex items-center justify-between bg-slate-900/50 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400 font-medium text-sm">{flow.source}</span>
                        <ArrowRight className="w-3 h-3 text-slate-500" />
                        <span className="text-white text-sm">{flow.target}</span>
                      </div>
                      <span className="text-violet-400 text-xs">{flow.data}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Link to full Value Chain */}
            <div className="text-center">
              <Link
                href="/value-chain"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227]/20 border border-[#c9a227] rounded-xl text-[#c9a227] font-bold hover:bg-[#c9a227]/30 transition-all"
              >
                <Layers className="w-5 h-5" />
                View Full Value Chain Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Synergies Tab */}
        {activeTab === 'synergies' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/10 rounded-xl p-6 border-2 border-purple-500">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-purple-400" />
                Cross-Company Synergies
              </h2>
              <p className="text-slate-300 mb-6">
                Every company strengthens the others. This creates a <strong className="text-white">network effect</strong> where
                the ecosystem value grows exponentially as users adopt more services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {companySynergies.map((synergy, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-3">
                      <synergy.icon className="w-5 h-5 text-purple-400" />
                      <span className="text-white font-bold text-sm">{synergy.from}</span>
                      <ArrowRight className="w-4 h-4 text-slate-500" />
                      <span className="text-white font-bold text-sm">{synergy.to}</span>
                    </div>
                    <p className="text-purple-400 text-sm">{synergy.synergy}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Multiplier */}
            <div className="bg-[#c9a227]/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#c9a227]" />
                Revenue Multiplier Effect
              </h3>
              <p className="text-slate-300 mb-4">
                Every <strong className="text-[#c9a227]">AED 1</strong> spent in the ecosystem creates <strong className="text-[#c9a227]">AED 7-10</strong> of value across different companies.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { company: 'Wasil', multiplier: '1x', type: 'Direct GMV' },
                  { company: 'BizOne', multiplier: '0.5x', type: 'SaaS + Data' },
                  { company: 'Inventora', multiplier: '1.5x', type: 'Supply margin' },
                  { company: 'NextaBizz', multiplier: '2x', type: 'B2B volume' },
                  { company: 'Adzy', multiplier: '1x', type: 'Ad revenue' },
                  { company: 'Finance', multiplier: '1.5x', type: 'Credit + Payments' },
                  { company: 'Rabtul', multiplier: '0.5x', type: 'Infra usage' },
                  { company: 'Total', multiplier: '7-10x', type: 'Ecosystem value' },
                ].map((item, i) => (
                  <div key={i} className={`bg-slate-900/50 rounded-lg p-3 ${i === 7 ? 'border-2 border-[#c9a227]' : 'border border-slate-700/50'}`}>
                    <div className={`text-lg font-bold ${i === 7 ? 'text-[#c9a227]' : 'text-white'}`}>{item.multiplier}</div>
                    <div className={`text-sm ${i === 7 ? 'text-[#c9a227]' : 'text-slate-400'}`}>{item.company}</div>
                    <div className="text-xs text-slate-500">{item.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Phases Tab */}
        {activeTab === 'phases' && (
          <div className="space-y-6">
            {launchPhases.map((phase) => (
              <div
                key={phase.phase}
                className={`${phase.bgColor} rounded-xl p-6 border-2 ${phase.color}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                      phase.status === 'Active' ? 'bg-emerald-500' :
                      phase.status === 'Planned' ? 'bg-blue-500' :
                      'bg-purple-500'
                    }`}>
                      {phase.phase}
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">Phase {phase.phase}: {phase.name}</div>
                      <div className="text-slate-400">{phase.timeline}</div>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                    phase.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' :
                    phase.status === 'Planned' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {phase.status}
                  </span>
                </div>

                {/* Companies in this phase */}
                <div className="mb-4">
                  <div className="text-sm text-slate-400 mb-2">Companies:</div>
                  <div className="flex flex-wrap gap-2">
                    {getPhaseCompanies(phase.phase).map((company) => (
                      <Link
                        key={company.id}
                        href={company.dashboardHref}
                        className={`${company.bgColor} ${company.borderColor} border rounded-lg px-4 py-2 ${company.textColor} hover:opacity-80 transition-opacity flex items-center gap-2`}
                      >
                        <company.icon className="w-4 h-4" />
                        {company.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Goals */}
                <div>
                  <div className="text-sm text-slate-400 mb-2">Goals:</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {phase.goals.map((goal, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 ${phase.textColor}`} />
                        {goal}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Revenue Tab */}
        {activeTab === 'revenue' && (
          <div className="space-y-8">
            {/* Total Revenue */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-6 border-2 border-green-500">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-400" />
                Total Group Revenue Potential
              </h2>
              <div className="text-center mb-6">
                <div className="text-5xl font-black text-green-400">
                  AED {revenueSummary.totalMin}M - {revenueSummary.totalMax}M
                </div>
                <div className="text-slate-400 mt-2">per year at scale</div>
              </div>
            </div>

            {/* Revenue by Company */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-6">Revenue by Company</h3>
              <div className="space-y-4">
                {revenueSummary.companies.map((company, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white font-medium">{company.name}</span>
                      <span className="text-[#c9a227] font-bold">AED {company.min}-{company.max}M</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div
                        className={`${company.color} h-3 rounded-full`}
                        style={{ width: `${(company.max / revenueSummary.totalMax) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Link to Monetization */}
            <div className="text-center">
              <Link
                href="/monetization"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227]/20 border border-[#c9a227] rounded-xl text-[#c9a227] font-bold hover:bg-[#c9a227]/30 transition-all"
              >
                <DollarSign className="w-5 h-5" />
                View Full Monetization Strategy
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* GCC Tab */}
        {activeTab === 'gcc' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-blue-500/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#c9a227]" />
                GCC Expansion Strategy
              </h2>
              <p className="text-slate-300 mb-6">
                From UAE foundation to pan-GCC dominance. Serving 60M+ residents and 70M+ tourists across 6 countries.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {gccCountries.map((country, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 text-center">
                    <div className="text-3xl mb-2">{country.flag}</div>
                    <div className={`font-bold ${country.color}`}>{country.name}</div>
                    <div className={`text-xs px-2 py-1 rounded mt-2 ${
                      country.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' :
                      country.status === 'Phase 2' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {country.status}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">{country.timeline}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                <div className="text-2xl font-bold text-[#c9a227]">60M+</div>
                <div className="text-xs text-slate-400">GCC Population</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                <div className="text-2xl font-bold text-emerald-400">70M+</div>
                <div className="text-xs text-slate-400">Tourists/Year</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                <div className="text-2xl font-bold text-blue-400">$2.1T</div>
                <div className="text-xs text-slate-400">Combined GDP</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                <div className="text-2xl font-bold text-purple-400">$134B</div>
                <div className="text-xs text-slate-400">Remittance/Year</div>
              </div>
            </div>
          </div>
        )}

        {/* Strategy Tab */}
        {activeTab === 'strategy' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#c9a227]" />
                RTMN Group Strategy
              </h2>
              <p className="text-slate-300 mb-6">
                Comprehensive plans for building a multi-billion dollar Islamic fintech ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {groupStrategyLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-[#c9a227]/50 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900/50 flex items-center justify-center">
                      <link.icon className={`w-6 h-6 ${link.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="text-lg font-bold text-white group-hover:text-[#c9a227] transition-colors">{link.name}</div>
                      <div className="text-sm text-slate-400">{link.description}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-[#c9a227] transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* RTMN Navigation Hub */}
      <section className="bg-gradient-to-r from-[#c9a227]/10 to-purple-500/10 border-t border-[#c9a227]/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">RTMN Digital Holding</h2>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Explore the full RTMN ecosystem — group structure, 100+ apps, and the Nuqta Corporation dashboard.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/rtmn-group"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] rounded-xl text-[#0a1628] font-bold hover:bg-[#f4d35e] transition-all"
            >
              <Building2 className="w-5 h-5" />
              RTMN Group
            </Link>
            <Link
              href="/rtmn-ecosystem"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 rounded-xl text-white font-bold hover:bg-slate-600 transition-all"
            >
              <Layers className="w-5 h-5" />
              RTMN Ecosystem
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 rounded-xl text-white font-bold hover:bg-slate-600 transition-all"
            >
              <Crown className="w-5 h-5" />
              Nuqta Dashboard
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
