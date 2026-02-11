'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Truck, Clock, ShoppingBag, Package, MapPin, Zap, Timer, Store,
  Smartphone, DollarSign, Users, Target, Rocket, CheckCircle, AlertTriangle,
  Building, Globe, ArrowRight, Star, BarChart3, Award, Handshake,
  CreditCard, FileText, Calculator, Gift, Crown, Wallet, ChevronRight,
  ChevronDown, ChevronUp, Building2, ShieldCheck, HeartHandshake, Coins,
  Network, ArrowRightLeft, ShoppingCart, Sparkles, Receipt, Layers,
  Home, TrendingUp, Shield, Bike, Car, Box, Warehouse, Banknote,
  Coffee, Utensils, Pill, Apple, Baby, PawPrint, Shirt, Headphones,
  Gamepad2, Flower2, Wine, Cigarette, ClipboardList, Phone, Mail,
  Map, UserCheck, RefreshCw, Calendar, LayoutGrid, Play, Search,
  Filter, Heart, Percent, BadgePercent, CircleDollarSign, PieChart,
  LineChart, ArrowUpRight, Link2, Eye, Wifi, Navigation, Activity,
  Radio, Cpu, Database, Server, Code, Terminal, Settings, Lock,
  MessageSquare, Bell, Briefcase, Gem, Scissors, Wrench, Droplets,
  GraduationCap, Plane, MonitorPlay, Dumbbell
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── HERO STATS ───
const heroStats = [
  { label: 'Delivery Verticals', value: '24', suffix: 'apps', color: 'text-orange-400' },
  { label: 'Delivery SLA', value: '60', suffix: 'min', color: 'text-green-400' },
  { label: 'Wave 1 Apps', value: '5', suffix: 'live', color: 'text-blue-400' },
  { label: 'Wave 2-4 Apps', value: '17', suffix: 'planned', color: 'text-violet-400' },
  { label: 'Wave 1 Endpoints', value: '42+', suffix: 'APIs', color: 'text-cyan-400' },
  { label: 'Total Endpoints', value: '132+', suffix: 'APIs', color: 'text-[#c9a227]' },
];

// ─── WAVE BREAKDOWN ───
const wave1Apps = [
  { name: 'Dinezy', category: 'Food Delivery', icon: Utensils, color: 'text-orange-400', bg: 'bg-orange-500/20', border: 'border-orange-500/40', features: ['Restaurant ordering', 'Cuisine filters', 'Meal customization', 'Group orders'], endpoints: 10, sla: '35 min', avgOrder: 75 },
  { name: 'Grocify', category: 'Grocery Delivery', icon: Apple, color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/40', features: ['Fresh produce', 'Pantry staples', 'Weekly auto-order', 'Smart lists'], endpoints: 9, sla: '45 min', avgOrder: 120 },
  { name: 'MediEarn', category: 'Pharmacy Delivery', icon: Pill, color: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/40', features: ['OTC medicines', 'Prescription upload', 'Wellness products', 'Health tracking'], endpoints: 8, sla: '30 min', avgOrder: 95 },
  { name: 'FitEarn', category: 'Fitness & Nutrition', icon: Dumbbell, color: 'text-cyan-400', bg: 'bg-cyan-500/20', border: 'border-cyan-500/40', features: ['Supplements', 'Meal prep', 'Gym gear', 'Protein shakes'], endpoints: 7, sla: '45 min', avgOrder: 110 },
  { name: 'Glowzy', category: 'Beauty & Cosmetics', icon: Sparkles, color: 'text-pink-400', bg: 'bg-pink-500/20', border: 'border-pink-500/40', features: ['Skincare', 'Makeup', 'Hair care', 'Beauty tools'], endpoints: 8, sla: '40 min', avgOrder: 130 },
];

const wave2Apps = [
  { name: 'Shopazy', category: 'Fashion & Retail', icon: Shirt, color: 'text-violet-400', bg: 'bg-violet-500/20', border: 'border-violet-500/40', features: ['Clothing', 'Accessories', 'Express fashion'], endpoints: 7, sla: '55 min', avgOrder: 180 },
  { name: 'Funzy', category: 'Entertainment', icon: Gamepad2, color: 'text-yellow-400', bg: 'bg-yellow-500/20', border: 'border-yellow-500/40', features: ['Gaming cards', 'Board games', 'Party supplies'], endpoints: 5, sla: '45 min', avgOrder: 90 },
  { name: 'AutoPerks', category: 'Automotive', icon: Car, color: 'text-slate-300', bg: 'bg-slate-500/20', border: 'border-slate-500/40', features: ['Car accessories', 'Parts express', 'Detailing kits'], endpoints: 6, sla: '50 min', avgOrder: 200 },
  { name: 'Petzy', category: 'Pet Care', icon: PawPrint, color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/40', features: ['Pet food', 'Toys', 'Grooming', 'Vet supplies'], endpoints: 6, sla: '45 min', avgOrder: 110 },
  { name: 'Kidzo', category: 'Kids & Baby', icon: Baby, color: 'text-sky-400', bg: 'bg-sky-500/20', border: 'border-sky-500/40', features: ['Diapers', 'Formula', 'Toys', 'Kids meals'], endpoints: 6, sla: '40 min', avgOrder: 130 },
];

const wave3Apps = [
  { name: 'Luxora', category: 'Luxury Goods', icon: Gem, color: 'text-[#c9a227]', bg: 'bg-[#c9a227]/20', border: 'border-[#c9a227]/40', features: ['Designer items', 'Premium gifts', 'White-glove delivery'], endpoints: 5, sla: '60 min', avgOrder: 500 },
  { name: 'Elitezy', category: 'Premium Services', icon: Crown, color: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-500/40', features: ['Concierge delivery', 'VIP scheduling', 'Priority lanes'], endpoints: 5, sla: '30 min', avgOrder: 350 },
  { name: 'Royale+', category: 'Premium Bundles', icon: Award, color: 'text-rose-400', bg: 'bg-rose-500/20', border: 'border-rose-500/40', features: ['Curated boxes', 'Subscription crates', 'Gift hampers'], endpoints: 4, sla: '60 min', avgOrder: 400 },
];

const wave4Apps = [
  { name: 'Washzy', category: 'Laundry', icon: Droplets, color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/40', features: ['Wash & fold', 'Dry cleaning', 'Pickup & return'], endpoints: 4, sla: '24 hr', avgOrder: 60 },
  { name: 'Maidzy', category: 'Home Cleaning', icon: Home, color: 'text-teal-400', bg: 'bg-teal-500/20', border: 'border-teal-500/40', features: ['Deep clean', 'Regular maid', 'Move-in/out'], endpoints: 4, sla: 'Scheduled', avgOrder: 150 },
  { name: 'Essentia+', category: 'Essentials', icon: Package, color: 'text-emerald-400', bg: 'bg-emerald-500/20', border: 'border-emerald-500/40', features: ['Convenience items', 'Quick snacks', 'Everyday needs'], endpoints: 4, sla: '20 min', avgOrder: 35 },
  { name: 'Society+', category: 'Community', icon: Users, color: 'text-indigo-400', bg: 'bg-indigo-500/20', border: 'border-indigo-500/40', features: ['Neighborhood deals', 'Group buying', 'Local specials'], endpoints: 4, sla: '45 min', avgOrder: 70 },
  { name: 'Bizora', category: 'Office Supplies', icon: Briefcase, color: 'text-slate-300', bg: 'bg-slate-500/20', border: 'border-slate-400/40', features: ['Stationery', 'IT peripherals', 'Office snacks'], endpoints: 4, sla: '50 min', avgOrder: 160 },
  { name: 'Gamezy', category: 'Gaming', icon: MonitorPlay, color: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/40', features: ['Consoles', 'Gift cards', 'Peripherals'], endpoints: 4, sla: '50 min', avgOrder: 250 },
  { name: 'Wellnez', category: 'Wellness', icon: Heart, color: 'text-pink-400', bg: 'bg-pink-500/20', border: 'border-pink-500/40', features: ['Yoga gear', 'Aromatherapy', 'Massage tools'], endpoints: 4, sla: '45 min', avgOrder: 85 },
  { name: 'Learnly', category: 'Education', icon: GraduationCap, color: 'text-yellow-400', bg: 'bg-yellow-500/20', border: 'border-yellow-500/40', features: ['Books', 'Courses supply', 'Study aids'], endpoints: 4, sla: '50 min', avgOrder: 75 },
  { name: 'TravoPay-Wasil', category: 'Travel Essentials', icon: Plane, color: 'text-sky-400', bg: 'bg-sky-500/20', border: 'border-sky-500/40', features: ['Travel kits', 'Luggage', 'Airport delivery'], endpoints: 4, sla: '55 min', avgOrder: 200 },
];

// ─── SHARED WASIL APIs (10 ENDPOINTS) ───
const sharedAPIs = [
  { name: '/api/wasil/cart', method: 'POST', desc: 'Unified cart management across all 24 verticals' },
  { name: '/api/wasil/checkout', method: 'POST', desc: 'Single checkout flow with multi-vertical support' },
  { name: '/api/wasil/payment', method: 'POST', desc: 'NuqtaPay, Hawil Card, Qist BNPL, card payments' },
  { name: '/api/wasil/tracking', method: 'GET', desc: 'Real-time GPS tracking via WebSocket connection' },
  { name: '/api/wasil/rating', method: 'POST', desc: 'Rate rider, merchant, and items post-delivery' },
  { name: '/api/wasil/order-status', method: 'GET', desc: 'Order lifecycle: placed, confirmed, picked, delivered' },
  { name: '/api/wasil/rider-assign', method: 'POST', desc: 'Dynamic rider assignment with proximity matching' },
  { name: '/api/wasil/coins-earn', method: 'POST', desc: 'Nuqta coin earning and redemption per order' },
  { name: '/api/wasil/subscription', method: 'GET', desc: 'Wasil+ membership status and benefits check' },
  { name: '/api/wasil/merchant-catalog', method: 'GET', desc: 'Unified merchant and product search across verticals' },
];

// ─── UNIT ECONOMICS ───
const unitEconomics = {
  avgOrderValue: 85,
  deliveryFee: 10,
  commissionPercent: '15-25%',
  commissionAvg: 15,
  surgeAvg: 2,
  totalRevenue: 27,
  riderCost: 8,
  operatingCost: 3,
  netRevenue: 16,
  netMarginRange: '3-5 AED/order',
};

// ─── REVENUE MODEL ───
const revenueStreams = [
  { source: 'Delivery Fee', desc: 'Per-order delivery charge to customer', value: '8-15 AED', volume: 'Primary', margin: 'Medium' },
  { source: 'Merchant Commission', desc: 'Percentage of order value from merchants', value: '15-25%', volume: 'Primary', margin: 'High' },
  { source: 'Surge Pricing', desc: 'Peak hour premium on delivery', value: '+3-5 AED', volume: 'Variable', margin: 'High' },
  { source: 'Wasil+ Subscription', desc: 'Free delivery membership (29 AED/mo)', value: '29 AED/mo', volume: 'Growing', margin: 'Very High' },
  { source: 'Advertising (Adzy)', desc: 'Featured placement via Adzy integration', value: '500-2K/mo', volume: 'Secondary', margin: 'Very High' },
  { source: 'Dark Store Margin', desc: 'Own inventory markup in micro-warehouses', value: '25-35%', volume: 'Future', margin: 'High' },
];

// ─── FINANCIAL PROJECTIONS ───
const financialProjections = [
  { year: 'Year 1', orders: 500000, gmv: 42.5, revenue: 6, netProfit: 1.5, merchants: 500, riders: 200 },
  { year: 'Year 2', orders: 2000000, gmv: 170, revenue: 25, netProfit: 8, merchants: 1500, riders: 600 },
  { year: 'Year 3', orders: 6000000, gmv: 510, revenue: 75, netProfit: 28, merchants: 4000, riders: 1500 },
];

// ─── COMPETITORS ───
const competitors = [
  { name: 'Wasil', verticals: 24, delivery: '60 min', rewards: 'Nuqta Coins', bnpl: 'Qist 0%', sub: 'Wasil+ 29 AED', ecosystem: 'Full Nuqta', highlight: true },
  { name: 'Talabat', verticals: 3, delivery: '30-45 min', rewards: 'Limited', bnpl: 'None', sub: 'Pro', ecosystem: 'Standalone', highlight: false },
  { name: 'Deliveroo', verticals: 2, delivery: '30-40 min', rewards: 'None', bnpl: 'None', sub: 'Plus', ecosystem: 'Standalone', highlight: false },
  { name: 'Careem Now', verticals: 3, delivery: '45-60 min', rewards: 'Points', bnpl: 'None', sub: 'None', ecosystem: 'Careem', highlight: false },
  { name: 'Noon Minutes', verticals: 1, delivery: '15-30 min', rewards: 'None', bnpl: 'None', sub: 'None', ecosystem: 'Noon', highlight: false },
  { name: 'InstaShop', verticals: 2, delivery: '45 min', rewards: 'None', bnpl: 'None', sub: 'None', ecosystem: 'DH', highlight: false },
];

// ─── RISKS ───
const risks = [
  { risk: 'Rider Retention', severity: 'high', mitigation: ['Competitive incentives + bonuses', 'Multiple fleet partnerships', 'Rider loyalty & tiered earnings', 'Insurance + benefits package'] },
  { risk: 'Delivery SLA Breach', severity: 'high', mitigation: ['AI route optimization', 'Real-time traffic integration', 'Backup rider assignment', 'Proactive customer comms'] },
  { risk: 'Food Safety', severity: 'high', mitigation: ['Insulated bags mandatory', 'Temperature monitoring', 'Merchant hygiene audits', 'Customer refund guarantee'] },
  { risk: 'Unit Economics at Scale', severity: 'medium', mitigation: ['Dark store margin boost', 'Wasil+ subscription growth', 'Adzy ad revenue layer', 'Operational efficiency via AI'] },
  { risk: 'Competition (Talabat/Noon)', severity: 'high', mitigation: ['24-vertical super-app moat', 'Nuqta ecosystem lock-in', 'Qist BNPL differentiation', 'Wasil+ value bundle'] },
  { risk: 'Merchant Quality', severity: 'medium', mitigation: ['Strict onboarding criteria', 'Regular quality audits', 'Customer rating system', 'Merchant training program'] },
];

// ─── ROADMAP ───
const roadmapWaves = [
  { wave: 'Wave 1', apps: 'Dinezy, Grocify, MediEarn, FitEarn, Glowzy', count: 5, timeline: 'Month 5-7', endpoints: 42, status: 'building', color: 'border-orange-500', bg: 'bg-orange-500/10' },
  { wave: 'Wave 2', apps: 'Shopazy, Funzy, AutoPerks, Petzy, Kidzo', count: 5, timeline: 'Month 14', endpoints: 30, status: 'planned', color: 'border-blue-500', bg: 'bg-blue-500/10' },
  { wave: 'Wave 3', apps: 'Luxora, Elitezy, Royale+', count: 3, timeline: 'Month 14', endpoints: 14, status: 'planned', color: 'border-purple-500', bg: 'bg-purple-500/10' },
  { wave: 'Wave 4', apps: 'Washzy, Maidzy, Essentia+, Society+, Bizora, Gamezy, Wellnez, Learnly, TravoPay-Wasil', count: 9, timeline: 'Month 15', endpoints: 36, status: 'planned', color: 'border-[#c9a227]', bg: 'bg-[#c9a227]/10' },
];

// ─── GCC EXPANSION ───
const gccCountries = [
  { country: 'UAE', flag: '🇦🇪', status: 'Active', cities: 'Dubai, Abu Dhabi, Sharjah', timeline: '2027' },
  { country: 'Saudi Arabia', flag: '🇸🇦', status: 'Phase 2', cities: 'Riyadh, Jeddah', timeline: '2028' },
  { country: 'Qatar', flag: '🇶🇦', status: 'Phase 2', cities: 'Doha', timeline: '2028' },
  { country: 'Kuwait', flag: '🇰🇼', status: 'Phase 3', cities: 'Kuwait City', timeline: '2029' },
  { country: 'Bahrain', flag: '🇧🇭', status: 'Phase 3', cities: 'Manama', timeline: '2029' },
  { country: 'Oman', flag: '🇴🇲', status: 'Phase 3', cities: 'Muscat', timeline: '2029' },
];

// ─── ECOSYSTEM INTEGRATION ───
const ecosystemLinks = [
  { product: 'BizOne Merchants', desc: 'BizOne-registered merchants auto-listed on Wasil for delivery', icon: Store, color: 'text-green-400' },
  { product: 'NuqtaPay', desc: 'NuqtaPay at checkout for seamless wallet-based payments', icon: Wallet, color: 'text-[#c9a227]' },
  { product: 'Nuqta Coins', desc: 'Earn Nuqta coins on every Wasil delivery order', icon: Coins, color: 'text-yellow-400' },
  { product: 'Qist BNPL', desc: 'Qist 0% installments for orders above 200 AED', icon: ShoppingBag, color: 'text-violet-400' },
  { product: 'Rakab Fleet', desc: 'Shared Rakab rider fleet for delivery logistics', icon: Bike, color: 'text-orange-400' },
  { product: 'Adzy Ads', desc: 'Merchant advertising and featured placement via Adzy', icon: Target, color: 'text-pink-400' },
];

// ─── CORPORATE STRUCTURE ───
const corporateStructure = {
  parentCompany: 'Nuqta Group',
  subsidiary: 'Wasil Technologies LLC',
  ownership: '100% owned by Nuqta Group',
  license: 'E-commerce / Delivery Services',
  regulator: 'Dubai DED / RTA',
};

// ─── DARK STORE ───
const darkStoreModel = {
  concept: 'Micro-fulfillment centers for ultra-fast delivery',
  size: '2,000-5,000 sqft', skus: '3,000-5,000', radius: '3-5 km',
  deliveryTime: '15-20 min', investment: '200K-400K AED', breakeven: '12-18 months',
  locations: [
    { area: 'Dubai Marina', launch: 'Q1 2027' },
    { area: 'Downtown Dubai', launch: 'Q2 2027' },
    { area: 'JLT', launch: 'Q2 2027' },
    { area: 'Business Bay', launch: 'Q3 2027' },
  ],
};

export default function WasilPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);
  const [selectedWave, setSelectedWave] = useState('wave1');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Truck },
    { id: 'waves', label: 'Wave Breakdown', icon: Layers },
    { id: 'verticals', label: '24 Verticals', icon: LayoutGrid },
    { id: 'how-it-works', label: 'How It Works', icon: Play },
    { id: 'rider-app', label: 'Rider App', icon: Smartphone },
    { id: 'apis', label: 'Shared APIs', icon: Code },
    { id: 'economics', label: 'Unit Economics', icon: Calculator },
    { id: 'revenue', label: 'Revenue Model', icon: DollarSign },
    { id: 'market', label: 'Market & Competition', icon: BarChart3 },
    { id: 'ecosystem', label: 'Ecosystem', icon: Network },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket },
    { id: 'risks', label: 'Risks', icon: Shield },
    { id: 'gcc', label: 'GCC Expansion', icon: Globe },
  ];

  const allApps = [...wave1Apps, ...wave2Apps, ...wave3Apps, ...wave4Apps];
  const waveMap: Record<string, typeof wave1Apps> = { wave1: wave1Apps, wave2: wave2Apps, wave3: wave3Apps, wave4: wave4Apps };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* ═══ HERO SECTION ═══ */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <Truck className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white">
                    Wasil <span className="text-orange-400">واصل</span>
                  </h1>
                  <p className="text-orange-400 text-sm sm:text-lg font-medium">24-Vertical Delivery Super-App</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">
                UAE&apos;s first <span className="text-orange-400 font-bold">24-vertical quick commerce</span> super-app.
                Everything delivered within <span className="text-green-400 font-bold">60 minutes</span>.
                Pay with <span className="text-[#c9a227] font-bold">Nuqta wallet</span>, split with <span className="text-violet-400 font-bold">Qist BNPL</span>,
                earn <span className="text-yellow-400 font-bold">Nuqta coins</span> on every order.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full">
                <HeartHandshake className="w-4 h-4 text-[#c9a227]" />
                <span className="text-[#c9a227] text-xs sm:text-sm font-medium">A Nuqta Group Company</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {heroStats.map((stat, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50 text-center min-w-[100px]">
                  <div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">{stat.suffix}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Core Promise Banner */}
          <div className="mt-8 bg-gradient-to-r from-orange-500/20 to-red-500/10 rounded-xl p-4 sm:p-6 border border-orange-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-orange-400" />
                  <span className="text-lg font-bold text-white">The Core Promise</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white">
                  <span className="text-orange-400">24 verticals</span> in one app
                  {' '}&bull; <span className="text-green-400">60-min delivery</span>
                  {' '}&bull; <span className="text-[#c9a227]">Nuqta coins</span>
                  {' '}&bull; <span className="text-violet-400">Qist BNPL</span>
                </p>
              </div>
              <div className="flex gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-orange-400">24</div>
                  <div className="text-xs text-slate-400">Verticals</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">60</div>
                  <div className="text-xs text-slate-400">Minutes</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">132+</div>
                  <div className="text-xs text-slate-400">APIs</div>
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
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white'
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
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-400" />
                Executive Summary
              </h2>
              <p className="text-slate-300 mb-4">
                <strong className="text-white">Wasil</strong> (واصل - &quot;delivering&quot; in Arabic) is a <strong className="text-orange-400">24-vertical delivery super-app</strong> that
                delivers everything from food and groceries to luxury goods and laundry within <strong className="text-green-400">60 minutes</strong>.
                As a <strong className="text-[#c9a227]">Nuqta Group</strong> company, Wasil handles all delivery logistics across the ecosystem.
                Users earn <strong className="text-yellow-400">Nuqta coins</strong> on every order and can pay with <strong className="text-violet-400">Qist BNPL</strong> for larger purchases.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                {[
                  { label: 'Wave 1 Launch', value: '5 Apps', sub: 'Month 5-7', color: 'text-orange-400' },
                  { label: 'Total Verticals', value: '24', sub: 'All waves', color: 'text-blue-400' },
                  { label: 'Avg Order Value', value: '85 AED', sub: 'Blended', color: 'text-green-400' },
                  { label: 'Year 3 GMV', value: '510M AED', sub: 'Projected', color: 'text-[#c9a227]' },
                ].map((s, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                    <div className={`text-xl font-bold ${s.color}`}>{s.value}</div>
                    <div className="text-xs text-slate-400">{s.sub}</div>
                    <div className="text-[10px] text-slate-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Corporate Structure */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/5 rounded-xl p-4 sm:p-6 border border-orange-500/30">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-orange-400" />
                Corporate Structure
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {Object.entries({ 'Parent Company': corporateStructure.parentCompany, 'Entity Name': corporateStructure.subsidiary, 'Ownership': corporateStructure.ownership }).map(([k, v]) => (
                    <div key={k} className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400 text-sm">{k}</span>
                      <span className="text-white font-medium text-sm">{v}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {Object.entries({ 'License Type': corporateStructure.license, 'Regulator': corporateStructure.regulator, 'Integration': 'Nuqta+ Partner' }).map(([k, v]) => (
                    <div key={k} className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400 text-sm">{k}</span>
                      <span className={`font-medium text-sm ${k === 'Integration' ? 'text-[#c9a227]' : 'text-white'}`}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Market Opportunity */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                Market Opportunity
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {[
                  { label: 'UAE Delivery Market', value: '$3.5B', color: 'text-green-400' },
                  { label: 'Annual Growth', value: '30% YoY', color: 'text-blue-400' },
                  { label: 'Quick Commerce', value: 'Fastest', color: 'text-orange-400' },
                  { label: 'Wasil Target Share', value: '5-8%', color: 'text-[#c9a227]' },
                ].map((m, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                    <div className={`text-xl font-bold ${m.color}`}>{m.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-slate-300 text-sm">
                The UAE delivery market is valued at <strong className="text-green-400">$3.5 billion</strong> and growing at
                <strong className="text-blue-400"> 30% year-over-year</strong>. Quick commerce (sub-60-min delivery) is the fastest-growing
                segment. Wasil&apos;s unique advantage: <strong className="text-orange-400">24 verticals in one app</strong> versus
                competitors offering 1-3 categories, plus full Nuqta ecosystem integration with coins and BNPL.
              </p>
            </div>
            {/* Wasil+ Subscription */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Crown className="w-5 h-5 text-[#c9a227]" />
                Wasil+ Subscription
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 rounded-xl p-5 border border-orange-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-bold">Wasil+ Standalone</h4>
                    <span className="text-2xl font-black text-orange-400">29 AED<span className="text-sm font-normal text-slate-400">/mo</span></span>
                  </div>
                  <ul className="space-y-2">
                    {['Unlimited free delivery on ALL 24 verticals', 'No surge pricing ever', 'Priority rider assignment', 'Exclusive member deals', '10% extra Nuqta coins'].map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#c9a227]/10 rounded-xl p-5 border-2 border-[#c9a227] relative">
                  <div className="absolute -top-3 left-4 px-3 py-1 bg-[#c9a227] text-[#0a1628] text-xs font-bold rounded-full">BEST VALUE</div>
                  <div className="flex items-center justify-between mb-4 mt-2">
                    <h4 className="text-white font-bold">Nuqta+ Bundle</h4>
                    <span className="text-2xl font-black text-[#c9a227]">99 AED<span className="text-sm font-normal text-slate-400">/mo</span></span>
                  </div>
                  <ul className="space-y-2">
                    {['Nuqta+ membership included', 'Wasil+ free delivery included', 'Qist 0% fees on all BNPL', 'Sakin priority access', 'Hawil Card premium perks'].map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-[#c9a227] flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Value Proposition: Customers & Merchants */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-orange-400" />
                Value Proposition
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* For Customers */}
                <div>
                  <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-400" />
                    For Customers
                  </h3>
                  <div className="space-y-3">
                    {[
                      { icon: Clock, title: '60-Minute Delivery', desc: 'Everything delivered within 1 hour, guaranteed across all 24 verticals.' },
                      { icon: Wallet, title: 'Nuqta Wallet', desc: 'Pay with Nuqta coins and earn rewards on every single order.' },
                      { icon: ShoppingBag, title: 'Qist BNPL', desc: 'Split orders above 200 AED into 3 easy payments at 0% interest.' },
                      { icon: MapPin, title: 'Live Tracking', desc: 'Real-time GPS tracking from store pickup to doorstep delivery.' },
                      { icon: Shield, title: 'Quality Guarantee', desc: 'Freshness guaranteed or full refund. Temperature-monitored delivery.' },
                      { icon: Gift, title: 'Daily Deals', desc: 'Exclusive discounts for Wasil+ and Nuqta+ members on all verticals.' },
                    ].map((b, i) => (
                      <div key={i} className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50 flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                          <b.icon className="w-4 h-4 text-orange-400" />
                        </div>
                        <div>
                          <div className="text-white font-bold text-sm">{b.title}</div>
                          <div className="text-xs text-slate-400">{b.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* For Merchants */}
                <div>
                  <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Store className="w-4 h-4 text-green-400" />
                    For Merchants
                  </h3>
                  <div className="space-y-3">
                    {[
                      { icon: TrendingUp, title: 'Instant Reach', desc: 'Access 50,000+ Nuqta users from day one via BizOne integration.' },
                      { icon: Bike, title: 'Fleet Delivery', desc: 'No need to hire drivers. Wasil handles all logistics and dispatch.' },
                      { icon: CircleDollarSign, title: 'Weekly Payouts', desc: 'Fast settlement with transparent reporting and real-time analytics.' },
                      { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Real-time sales data, customer insights, and performance metrics.' },
                      { icon: Target, title: 'Adzy Promotions', desc: 'Boost visibility with promoted listings and sponsored placements.' },
                      { icon: UserCheck, title: 'Self-Onboarding', desc: 'Easy merchant onboarding via BizOne with automated menu setup.' },
                    ].map((b, i) => (
                      <div key={i} className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50 flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <b.icon className="w-4 h-4 text-green-400" />
                        </div>
                        <div>
                          <div className="text-white font-bold text-sm">{b.title}</div>
                          <div className="text-xs text-slate-400">{b.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hawil Card Payment for Tourists */}
            <div className="bg-blue-500/10 rounded-xl p-4 sm:p-6 border border-blue-500/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-blue-400" />
                Pay with Hawil Card
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                Tourists: use your <strong className="text-blue-400">Hawil Card</strong> for all Wasil orders and save 3-5% vs foreign credit cards.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {[
                  { benefit: 'Google Rate', desc: 'No FX markup on your home currency' },
                  { benefit: 'No Foreign Fees', desc: 'Unlike credit cards (3-5% fee)' },
                  { benefit: 'Earn Double Coins', desc: 'Coins from Wasil + coins from Hawil' },
                  { benefit: 'Instant Payment', desc: 'Tap to pay with Apple/Google Pay' },
                ].map((h, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 border border-blue-500/20">
                    <div className="text-blue-400 font-bold text-sm">{h.benefit}</div>
                    <div className="text-xs text-slate-400">{h.desc}</div>
                  </div>
                ))}
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-500/30">
                <h4 className="text-white font-bold text-sm mb-3">Example: 150 AED Grocery Order</h4>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-red-400 font-bold">157.50 AED</div>
                    <div className="text-[10px] text-slate-400">Credit Card (5% fee)</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-bold">150.00 AED</div>
                    <div className="text-[10px] text-slate-400">Hawil Card (0% fee)</div>
                  </div>
                  <div>
                    <div className="text-green-400 font-bold">7.50 AED Saved</div>
                    <div className="text-[10px] text-slate-400">+ 7.5 Nuqta coins</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── WAVE BREAKDOWN TAB ─── */}
        {activeTab === 'waves' && (
          <div className="space-y-6">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-orange-400" />
                Wave Deployment Strategy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {roadmapWaves.map((w, i) => (
                  <button key={i} onClick={() => setSelectedWave(`wave${i + 1}`)}
                    className={`rounded-xl p-4 border-2 text-left transition-all ${
                      selectedWave === `wave${i + 1}` ? `${w.bg} ${w.color}` : 'bg-slate-900/50 border-slate-700/50 hover:border-slate-600'
                    }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-bold">{w.wave}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${w.status === 'building' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                        {w.status === 'building' ? 'Building' : 'Planned'}
                      </span>
                    </div>
                    <div className="text-2xl font-black text-orange-400">{w.count} apps</div>
                    <div className="text-xs text-slate-400 mt-1">{w.timeline}</div>
                    <div className="text-xs text-cyan-400 mt-1">{w.endpoints} API endpoints</div>
                  </button>
                ))}
              </div>
              {/* Selected Wave Apps */}
              <h3 className="text-white font-bold mb-4">{selectedWave.replace('wave', 'Wave ')} Apps</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {(waveMap[selectedWave] || []).map((app, i) => (
                  <div key={i} className={`${app.bg} rounded-xl p-4 border ${app.border}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl ${app.bg} flex items-center justify-center border ${app.border}`}>
                        <app.icon className={`w-5 h-5 ${app.color}`} />
                      </div>
                      <div>
                        <h4 className={`font-bold ${app.color}`}>{app.name}</h4>
                        <p className="text-xs text-slate-400">{app.category}</p>
                      </div>
                    </div>
                    <div className="space-y-1 mb-3">
                      {app.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs pt-2 border-t border-slate-700/50">
                      <span className="text-cyan-400">{app.endpoints} endpoints</span>
                      <span className="text-orange-400">SLA: {app.sla}</span>
                      <span className="text-green-400">{app.avgOrder} AED avg</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Wave Summary */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/5 rounded-xl p-4 sm:p-6 border border-orange-500/30">
              <h3 className="text-white font-bold mb-4">Aggregate Wave Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className="text-2xl font-bold text-orange-400">24</div>
                  <div className="text-xs text-slate-400">Total Apps</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className="text-2xl font-bold text-cyan-400">132+</div>
                  <div className="text-xs text-slate-400">Total Endpoints</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className="text-2xl font-bold text-green-400">10</div>
                  <div className="text-xs text-slate-400">Shared APIs</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className="text-2xl font-bold text-[#c9a227]">4</div>
                  <div className="text-xs text-slate-400">Deployment Waves</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── 24 VERTICALS TAB ─── */}
        {activeTab === 'verticals' && (
          <div className="space-y-6">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-orange-400" />
                All 24 Delivery Verticals
              </h2>
              <p className="text-slate-400 text-sm mb-6">Every vertical app with category, key features, endpoint count, and delivery SLA.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {allApps.map((app, i) => (
                  <div key={i} className={`bg-slate-900/50 rounded-xl p-4 border ${app.border} hover:scale-[1.02] transition-transform`}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-8 h-8 rounded-lg ${app.bg} flex items-center justify-center`}>
                        <app.icon className={`w-4 h-4 ${app.color}`} />
                      </div>
                      <div>
                        <h4 className={`font-bold text-sm ${app.color}`}>{app.name}</h4>
                        <p className="text-[10px] text-slate-500">{app.category}</p>
                      </div>
                    </div>
                    <div className="space-y-1 mb-2">
                      {app.features.slice(0, 3).map((f, j) => (
                        <div key={j} className="text-[10px] text-slate-400 flex items-center gap-1">
                          <CheckCircle className="w-2.5 h-2.5 text-green-400 flex-shrink-0" /> {f}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-[10px] pt-2 border-t border-slate-700/50">
                      <span className="text-cyan-400">{app.endpoints} APIs</span>
                      <span className="text-orange-400">{app.sla}</span>
                      <span className="text-green-400">{app.avgOrder} AED</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── HOW IT WORKS TAB ─── */}
        {activeTab === 'how-it-works' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Play className="w-5 h-5 text-orange-400" />
                Order Lifecycle: From Tap to Doorstep
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {[
                  { step: 1, icon: Search, title: 'Order', desc: 'Customer browses & places order in any of 24 verticals', color: 'text-orange-400' },
                  { step: 2, icon: Store, title: 'Merchant Confirms', desc: 'Merchant receives notification, confirms & prepares order', color: 'text-green-400' },
                  { step: 3, icon: Bike, title: 'Rider Assigned', desc: 'Nearest available rider auto-assigned via proximity matching', color: 'text-blue-400' },
                  { step: 4, icon: Package, title: 'Pickup', desc: 'Rider arrives at merchant, picks up packaged order', color: 'text-violet-400' },
                  { step: 5, icon: Navigation, title: 'Delivery', desc: 'Real-time GPS tracking, customer sees rider live on map', color: 'text-cyan-400' },
                  { step: 6, icon: Star, title: 'Rate & Earn', desc: 'Customer rates experience, earns Nuqta coins automatically', color: 'text-[#c9a227]' },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 text-center h-full">
                      <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-3">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div className="text-[10px] text-orange-400 mb-1">Step {item.step}</div>
                      <div className="text-sm font-bold text-white">{item.title}</div>
                      <div className="text-[10px] text-slate-400 mt-1">{item.desc}</div>
                    </div>
                    {i < 5 && <ChevronRight className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600" size={16} />}
                  </div>
                ))}
              </div>
            </div>
            {/* Two Order Paths */}
            <div className="bg-orange-500/10 rounded-xl p-4 sm:p-6 border-2 border-orange-500">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ArrowRightLeft className="w-5 h-5 text-orange-400" />
                Two Order Paths, One Fulfillment Engine
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 rounded-xl p-5 border border-[#c9a227]/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Crown className="w-6 h-6 text-[#c9a227]" />
                    <h4 className="text-white font-bold">Via Nuqta App</h4>
                  </div>
                  {['Browse Nuqta merchant catalog', 'Pay with Nuqta coins or Qist', 'Order routed to Wasil backend', 'Wasil rider picks up & delivers', 'Earn 2x Nuqta coins'].map((s, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                      <div className="w-6 h-6 rounded-full bg-[#c9a227]/20 flex items-center justify-center text-xs text-[#c9a227] font-bold flex-shrink-0">{j+1}</div>
                      {s}
                    </div>
                  ))}
                </div>
                <div className="bg-slate-900/50 rounded-xl p-5 border border-orange-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Truck className="w-6 h-6 text-orange-400" />
                    <h4 className="text-white font-bold">Via Wasil App</h4>
                  </div>
                  {['Browse all 24 verticals directly', 'Connect Nuqta wallet for payment', 'Use Qist for orders 200+ AED', 'Same rider fleet delivers', 'Earn Nuqta coins automatically'].map((s, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-xs text-orange-400 font-bold flex-shrink-0">{j+1}</div>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── RIDER APP TAB ─── */}
        {activeTab === 'rider-app' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-orange-400" />
                Wasil Rider App
              </h2>
              <p className="text-slate-300 text-sm mb-6">
                Built with <strong className="text-cyan-400">React Native</strong> for iOS and Android.
                Real-time GPS tracking, order queue management, earnings dashboard, and WebSocket-based live tracking.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu className="w-5 h-5 text-cyan-400" />
                    <h4 className="text-white font-bold">Tech Stack</h4>
                  </div>
                  {['React Native (cross-platform)', 'WebSocket real-time tracking', 'Google Maps SDK integration', 'Firebase push notifications', 'Offline-first architecture'].map((t, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 mb-1.5">
                      <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" /> {t}
                    </div>
                  ))}
                </div>
                <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-center gap-2 mb-3">
                    <Navigation className="w-5 h-5 text-green-400" />
                    <h4 className="text-white font-bold">Real-Time GPS</h4>
                  </div>
                  {['Live location broadcasting', 'AI-optimized route planning', 'Traffic-aware ETA updates', 'Multi-stop delivery batching', 'Turn-by-turn navigation'].map((t, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 mb-1.5">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" /> {t}
                    </div>
                  ))}
                </div>
                <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign className="w-5 h-5 text-[#c9a227]" />
                    <h4 className="text-white font-bold">Earnings Dashboard</h4>
                  </div>
                  {['Daily/weekly/monthly earnings', 'Tip tracking and history', 'Surge bonus indicators', 'Performance tier status', 'Instant payout to wallet'].map((t, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 mb-1.5">
                      <CheckCircle className="w-3 h-3 text-[#c9a227] flex-shrink-0" /> {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { label: 'Order Queue', desc: 'View pending, active, completed orders', icon: ClipboardList, color: 'text-orange-400' },
                  { label: 'WebSocket Tracking', desc: 'Real-time bidirectional comms', icon: Wifi, color: 'text-green-400' },
                  { label: 'Heat Maps', desc: 'High-demand zones for positioning', icon: Map, color: 'text-red-400' },
                  { label: 'Rider Tiers', desc: 'Bronze/Silver/Gold/Platinum ranks', icon: Award, color: 'text-[#c9a227]' },
                ].map((f, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <f.icon className={`w-6 h-6 ${f.color} mb-2`} />
                    <div className="text-white font-bold text-sm">{f.label}</div>
                    <div className="text-xs text-slate-400">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rider Tier System */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#c9a227]" />
                Rider Tier & Incentive System
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {[
                  { tier: 'Bronze', deliveries: '0-100', bonus: '+0%', perks: 'Basic queue access', color: 'text-amber-600', bg: 'bg-amber-600/10', border: 'border-amber-600/30' },
                  { tier: 'Silver', deliveries: '101-500', bonus: '+5%', perks: 'Priority queue + tips boost', color: 'text-slate-300', bg: 'bg-slate-300/10', border: 'border-slate-300/30' },
                  { tier: 'Gold', deliveries: '501-2000', bonus: '+10%', perks: 'Surge priority + insurance', color: 'text-[#c9a227]', bg: 'bg-[#c9a227]/10', border: 'border-[#c9a227]/30' },
                  { tier: 'Platinum', deliveries: '2000+', bonus: '+15%', perks: 'All perks + vehicle support', color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/30' },
                ].map((t, i) => (
                  <div key={i} className={`${t.bg} rounded-xl p-4 border ${t.border}`}>
                    <div className={`text-lg font-black ${t.color}`}>{t.tier}</div>
                    <div className="text-xs text-slate-400 mt-1">{t.deliveries} deliveries</div>
                    <div className={`text-sm font-bold ${t.color} mt-2`}>{t.bonus} earnings</div>
                    <div className="text-[10px] text-slate-400 mt-1">{t.perks}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rider Economics */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Banknote className="w-5 h-5 text-green-400" />
                Rider Earnings Model
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {[
                  { label: 'Base per Delivery', value: '6-10 AED', color: 'text-green-400' },
                  { label: 'Avg Tips', value: '2-5 AED', color: 'text-blue-400' },
                  { label: 'Surge Bonus', value: '+3-8 AED', color: 'text-orange-400' },
                  { label: 'Daily Target', value: '15-20 orders', color: 'text-[#c9a227]' },
                ].map((e, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                    <div className={`text-xl font-bold ${e.color}`}>{e.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{e.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-slate-300 text-sm">
                Top riders can earn <strong className="text-green-400">200-350 AED/day</strong> with surge bonuses and tips.
                Platinum riders receive <strong className="text-[#c9a227]">vehicle maintenance allowance</strong> and
                <strong className="text-blue-400"> health insurance coverage</strong>.
              </p>
            </div>
          </div>
        )}

        {/* ─── SHARED APIs TAB ─── */}
        {activeTab === 'apis' && (
          <div className="space-y-6">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-400" />
                Shared Wasil APIs (10 Core Endpoints)
              </h2>
              <p className="text-slate-400 text-sm mb-6">
                These 10 endpoints power all 24 vertical apps. Unified cart, checkout, payment, tracking, and rating -- reused by every app.
              </p>
              <div className="space-y-3">
                {sharedAPIs.map((api, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <span className={`px-2 py-1 rounded text-xs font-bold flex-shrink-0 ${
                        api.method === 'POST' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>{api.method}</span>
                      <code className="text-cyan-400 text-sm font-mono truncate">{api.name}</code>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm">{api.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Endpoint Stats */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-4 sm:p-6 border border-cyan-500/30">
              <h3 className="text-white font-bold mb-4">API Endpoint Distribution</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-orange-500/30">
                  <div className="text-2xl font-bold text-orange-400">42+</div>
                  <div className="text-xs text-slate-400">Wave 1 Endpoints</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-blue-500/30">
                  <div className="text-2xl font-bold text-blue-400">30</div>
                  <div className="text-xs text-slate-400">Wave 2 Endpoints</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-purple-500/30">
                  <div className="text-2xl font-bold text-purple-400">14</div>
                  <div className="text-xs text-slate-400">Wave 3 Endpoints</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center border border-[#c9a227]/30">
                  <div className="text-2xl font-bold text-[#c9a227]">36</div>
                  <div className="text-xs text-slate-400">Wave 4 Endpoints</div>
                </div>
              </div>
              <div className="mt-4 bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 text-center">
                <div className="text-3xl font-black text-cyan-400">132+ Total API Endpoints</div>
                <div className="text-sm text-slate-400 mt-1">+ 10 Shared Core APIs reused by all verticals</div>
              </div>
            </div>
          </div>
        )}

        {/* ─── UNIT ECONOMICS TAB ─── */}
        {activeTab === 'economics' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-orange-400" />
                Per Order Economics (Avg 85 AED Order)
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                {[
                  { label: 'Avg Order', value: '85 AED', color: 'text-white' },
                  { label: 'Delivery Fee', value: '8-15 AED', color: 'text-green-400' },
                  { label: 'Commission', value: '15-25%', color: 'text-blue-400' },
                  { label: 'Rider Cost', value: '6-10 AED', color: 'text-red-400' },
                  { label: 'Net Margin', value: '3-5 AED', color: 'text-[#c9a227]' },
                ].map((s, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                    <div className={`text-xl font-bold ${s.color}`}>{s.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                <h3 className="text-white font-bold mb-4">Detailed Breakdown</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Average Order Value', value: `${unitEconomics.avgOrderValue} AED`, type: 'neutral' },
                    { label: '+ Delivery Fee', value: `+${unitEconomics.deliveryFee} AED`, type: 'income' },
                    { label: '+ Merchant Commission (18% avg)', value: `+${unitEconomics.commissionAvg} AED`, type: 'income' },
                    { label: '+ Surge Pricing (avg)', value: `+${unitEconomics.surgeAvg} AED`, type: 'income' },
                    { label: '= Total Revenue per Order', value: `${unitEconomics.totalRevenue} AED`, type: 'subtotal' },
                    { label: '- Rider Payout', value: `-${unitEconomics.riderCost} AED`, type: 'cost' },
                    { label: '- Operating Cost', value: `-${unitEconomics.operatingCost} AED`, type: 'cost' },
                  ].map((row, i) => (
                    <div key={i} className={`flex justify-between items-center py-2 px-3 rounded-lg text-sm ${
                      row.type === 'subtotal' ? 'bg-blue-500/10' : ''
                    }`}>
                      <span className={row.type === 'income' ? 'text-green-400' : row.type === 'cost' ? 'text-red-400' : 'text-slate-300'}>{row.label}</span>
                      <span className={`font-bold ${row.type === 'income' ? 'text-green-400' : row.type === 'cost' ? 'text-red-400' : row.type === 'subtotal' ? 'text-blue-400' : 'text-white'}`}>{row.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center py-3 px-3 bg-orange-500/10 rounded-lg">
                    <span className="text-white font-bold">Net Revenue per Order</span>
                    <span className="text-orange-400 font-bold text-xl">{unitEconomics.netRevenue} AED</span>
                  </div>
                </div>
              </div>
            </div>
            {/* 3-Year Financials */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-400" />
                3-Year Financial Projections
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Metric</th>
                      {financialProjections.map((p, i) => (
                        <th key={i} className="text-right py-3 px-4 text-white font-bold">{p.year}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Orders</td>
                      {financialProjections.map((p, j) => (
                        <td key={j} className="py-3 px-4 text-right font-bold text-white">{(p.orders/1000000).toFixed(1)}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">GMV (AED M)</td>
                      {financialProjections.map((p, j) => (
                        <td key={j} className="py-3 px-4 text-right font-bold text-orange-400">{p.gmv}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Revenue (AED M)</td>
                      {financialProjections.map((p, j) => (
                        <td key={j} className="py-3 px-4 text-right font-bold text-green-400">{p.revenue}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Net Profit (AED M)</td>
                      {financialProjections.map((p, j) => (
                        <td key={j} className="py-3 px-4 text-right font-bold text-[#c9a227]">{p.netProfit}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Merchants</td>
                      {financialProjections.map((p, j) => (
                        <td key={j} className="py-3 px-4 text-right font-bold text-white">{p.merchants.toLocaleString()}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Riders</td>
                      {financialProjections.map((p, j) => (
                        <td key={j} className="py-3 px-4 text-right font-bold text-white">{p.riders.toLocaleString()}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ─── REVENUE MODEL TAB ─── */}
        {activeTab === 'revenue' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-400" />
                Revenue Model
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Revenue Stream</th>
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Description</th>
                      <th className="text-right py-3 px-4 text-slate-400 font-medium">Rate</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Volume</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Margin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {revenueStreams.map((item, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white font-medium">{item.source}</td>
                        <td className="py-3 px-4 text-slate-300 text-sm">{item.desc}</td>
                        <td className="py-3 px-4 text-green-400 font-bold text-right">{item.value}</td>
                        <td className="py-3 px-4 text-center text-slate-300">{item.volume}</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${
                            item.margin === 'Very High' ? 'bg-green-500/20 text-green-400' :
                            item.margin === 'High' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>{item.margin}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Adzy Integration */}
            <div className="bg-pink-500/10 rounded-xl p-4 sm:p-6 border border-pink-500/30">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-pink-400" />
                Adzy Advertising Integration
              </h3>
              <p className="text-slate-300 text-sm mb-4">Merchants boost visibility via Adzy-powered promoted listings, banner ads, and sponsored search results within Wasil.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: 'Promoted Listing', value: '500 AED/mo' },
                  { label: 'Banner Ad', value: '1,000 AED/mo' },
                  { label: 'Sponsored Search', value: '2 AED/click' },
                  { label: 'Push Notification', value: '0.5 AED/send' },
                ].map((a, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-3 text-center border border-slate-700/50">
                    <div className="text-lg font-bold text-pink-400">{a.value}</div>
                    <div className="text-xs text-slate-400">{a.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── MARKET & COMPETITION TAB ─── */}
        {activeTab === 'market' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-400" />
                Competitor Analysis
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Provider</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Verticals</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Delivery</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Rewards</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">BNPL</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Subscription</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Ecosystem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((c, i) => (
                      <tr key={i} className={`border-b border-slate-700/50 ${c.highlight ? 'bg-orange-500/10' : ''}`}>
                        <td className={`py-3 px-4 font-bold ${c.highlight ? 'text-orange-400' : 'text-white'}`}>{c.name}</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`font-bold ${c.highlight ? 'text-orange-400' : 'text-slate-300'}`}>{c.verticals}</span>
                        </td>
                        <td className="py-3 px-4 text-center text-slate-300">{c.delivery}</td>
                        <td className="py-3 px-4 text-center">
                          {c.rewards !== 'None' && c.rewards !== 'Limited' && c.rewards !== 'Points'
                            ? <span className="text-[#c9a227] font-bold">{c.rewards}</span>
                            : <span className="text-slate-500">{c.rewards}</span>}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {c.bnpl !== 'None'
                            ? <span className="text-violet-400 font-bold">{c.bnpl}</span>
                            : <span className="text-slate-500">None</span>}
                        </td>
                        <td className="py-3 px-4 text-center text-slate-300">{c.sub}</td>
                        <td className="py-3 px-4 text-center">
                          {c.highlight
                            ? <span className="text-orange-400 font-bold">{c.ecosystem}</span>
                            : <span className="text-slate-400">{c.ecosystem}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Competitive Moat */}
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/10 rounded-xl p-4 sm:p-6 border-2 border-orange-500">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-orange-400" />
                Wasil Competitive Moat
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-bold mb-3">Wasil Advantage: 24 verticals in one app + Nuqta coins</h4>
                  {['24 delivery verticals vs competitors\' 1-3', 'Nuqta coin rewards on every order', 'Qist 0% BNPL for orders 200+ AED', 'Full Nuqta ecosystem lock-in', 'Wasil+ subscription across all verticals'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="text-white font-bold mb-3">What Competitors Lack</h4>
                  {['No multi-vertical super-app approach', 'No coin/rewards economy', 'No integrated BNPL at checkout', 'No ecosystem cross-sell (fintech + delivery)', 'No shared rider fleet with ride-hailing'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                      <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── ECOSYSTEM TAB ─── */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-orange-500/20 via-[#c9a227]/20 to-violet-500/20 rounded-2xl p-6 border-2 border-orange-500/50">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 rounded-full mb-4">
                  <Network className="w-5 h-5 text-orange-400" />
                  <span className="text-orange-400 font-bold text-sm">Ecosystem Integration</span>
                </div>
                <h2 className="text-3xl font-black text-white mb-4">
                  The <span className="text-orange-400">Delivery Layer</span> for the Entire Nuqta Ecosystem
                </h2>
                <p className="text-slate-300 max-w-3xl mx-auto">
                  Wasil is the logistics backbone connecting BizOne merchants, NuqtaPay, Nuqta coins, Qist BNPL,
                  Rakab fleet, and Adzy advertising into one seamless delivery experience.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ecosystemLinks.map((link, i) => (
                <div key={i} className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-900/50 flex items-center justify-center">
                      <link.icon className={`w-5 h-5 ${link.color}`} />
                    </div>
                    <h4 className={`font-bold ${link.color}`}>{link.product}</h4>
                  </div>
                  <p className="text-sm text-slate-300">{link.desc}</p>
                </div>
              ))}
            </div>
            {/* Sakin Integration */}
            <div className="bg-emerald-500/10 rounded-xl p-4 sm:p-6 border border-emerald-500/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Home className="w-5 h-5 text-emerald-400" />
                Wasil + Sakin: Move-In Package
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                Every new Sakin tenant gets a <strong className="text-white">Wasil Welcome Kit</strong> delivered on move-in day.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { item: 'Cleaning supplies', price: 'FREE' },
                  { item: 'Grocery starter pack', price: '50% off' },
                  { item: 'Toiletries bundle', price: '30% off' },
                  { item: 'Kitchen essentials', price: '25% off' },
                ].map((pkg, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 text-center border border-emerald-500/30">
                    <div className="text-sm text-white font-medium">{pkg.item}</div>
                    <div className="text-lg font-bold text-emerald-400">{pkg.price}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Complete Consumer Picture */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#c9a227]" />
                The Complete Consumer Picture
              </h3>
              <p className="text-slate-300 text-sm mb-6">
                With Wasil, Nuqta Group sees the full consumer journey -- what they buy, where they live, how they pay.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { name: 'Nuqta', sub: 'Where they spend', icon: Crown, color: 'text-[#c9a227]', border: 'border-[#c9a227]/30' },
                  { name: 'Qist', sub: 'How they pay', icon: ShoppingBag, color: 'text-violet-400', border: 'border-violet-500/30' },
                  { name: 'Sakin', sub: 'Where they live', icon: Home, color: 'text-emerald-400', border: 'border-emerald-500/30' },
                  { name: 'Wasil', sub: 'What they need', icon: Truck, color: 'text-orange-400', border: 'border-orange-500/30' },
                ].map((p, i) => (
                  <div key={i} className={`bg-slate-900/50 rounded-xl p-4 text-center border ${p.border}`}>
                    <p.icon className={`w-8 h-8 ${p.color} mx-auto mb-2`} />
                    <div className="text-white font-bold">{p.name}</div>
                    <div className="text-xs text-slate-400">{p.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── ROADMAP TAB ─── */}
        {activeTab === 'roadmap' && (
          <div className="space-y-6">
            {[
              { phase: 'Wave 1', title: '5 Core Verticals', timeline: 'Month 5-7', apps: 'Dinezy, Grocify, MediEarn, FitEarn, Glowzy', status: 'building', milestones: ['Build core delivery platform', 'Launch 5 Wave 1 apps', '42+ API endpoints', 'Rider app MVP', 'NuqtaPay + Qist integration', 'Wasil+ subscription launch'], color: 'border-orange-500', bg: 'bg-orange-500/10' },
              { phase: 'Wave 2', title: '5 Lifestyle Verticals', timeline: 'Month 14', apps: 'Shopazy, Funzy, AutoPerks, Petzy, Kidzo', status: 'planned', milestones: ['Launch 5 lifestyle verticals', '30 new API endpoints', 'Multi-store cart support', 'Merchant self-onboarding', 'Dark store pilot', '500+ merchants'], color: 'border-blue-500', bg: 'bg-blue-500/10' },
              { phase: 'Wave 3', title: '3 Premium Verticals', timeline: 'Month 14', apps: 'Luxora, Elitezy, Royale+', status: 'planned', milestones: ['Launch premium verticals', 'White-glove delivery tier', 'Concierge service', 'VIP scheduling', '14 new endpoints', 'Premium merchant partnerships'], color: 'border-purple-500', bg: 'bg-purple-500/10' },
              { phase: 'Wave 4', title: '9 Services & Niche Verticals', timeline: 'Month 15', apps: 'Washzy, Maidzy, Essentia+, Society+, Bizora, Gamezy, Wellnez, Learnly, TravoPay-Wasil', status: 'planned', milestones: ['Launch 9 service verticals', '36 new API endpoints', 'B2B corporate deliveries', 'GCC expansion planning', '4,000+ merchants', 'Full 24-vertical super-app complete'], color: 'border-[#c9a227]', bg: 'bg-[#c9a227]/10' },
            ].map((phase, i) => (
              <div key={i} className={`rounded-xl p-6 border-2 ${phase.color} ${phase.bg}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-400">{phase.phase}</span>
                      <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{phase.apps}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-400 text-sm">{phase.timeline}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold w-fit ${
                    phase.status === 'building' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>{phase.status === 'building' ? 'Building' : 'Planned'}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {phase.milestones.map((m, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-slate-500 flex-shrink-0" /> {m}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ─── RISKS TAB ─── */}
        {activeTab === 'risks' && (
          <div className="space-y-4">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50 mb-4">
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-400" />
                Risk Analysis & Mitigation
              </h2>
              <p className="text-slate-400 text-sm">Key risks for Wasil operations: rider retention, delivery SLA, food safety, unit economics at scale, and competition.</p>
            </div>
            {risks.map((risk, i) => (
              <div key={i} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden">
                <button onClick={() => setExpandedRisk(expandedRisk === risk.risk ? null : risk.risk)}
                  className="w-full p-4 flex items-center justify-between text-left">
                  <div className="flex items-center gap-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      risk.severity === 'high' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>{risk.severity.toUpperCase()}</span>
                    <span className="text-white font-bold">{risk.risk}</span>
                  </div>
                  {expandedRisk === risk.risk ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                {expandedRisk === risk.risk && (
                  <div className="px-4 pb-4">
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <div className="text-sm font-bold text-white mb-3">Mitigation Strategies:</div>
                      <div className="space-y-2">
                        {risk.mitigation.map((item, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                            <Shield className="w-4 h-4 text-green-400 flex-shrink-0" /> {item}
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

        {/* ─── GCC EXPANSION TAB ─── */}
        {activeTab === 'gcc' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-orange-500/20 to-[#c9a227]/20 rounded-2xl p-6 border-2 border-orange-500/50">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-black text-white mb-4">
                  <span className="text-orange-400">GCC Expansion</span> Plan
                </h2>
                <p className="text-slate-300 max-w-2xl mx-auto">
                  Wasil expands 60-minute delivery to all GCC countries. Same app, same speed, same Nuqta coins -- anywhere in the Gulf.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {gccCountries.map((c, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{c.flag}</span>
                        <h4 className="text-white font-bold">{c.country}</h4>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        c.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                        c.status === 'Phase 2' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-slate-500/20 text-slate-400'
                      }`}>{c.status}</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Cities</span>
                        <span className="text-white">{c.cities}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Timeline</span>
                        <span className="text-orange-400">{c.timeline}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* GCC Benefits */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-white font-bold mb-4">Cross-Border Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Same Wasil+ membership works across all GCC countries',
                  'Order in Dubai for delivery in Riyadh (gift delivery)',
                  'Pay with Hawil Card at Google rate -- no FX fees',
                  'Earn Nuqta coins across all GCC countries',
                  'Gift delivery to family in other GCC countries',
                  'Unified merchant catalog across regions',
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" /> {b}
                  </div>
                ))}
              </div>
            </div>
            {/* Dark Stores */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Warehouse className="w-5 h-5 text-orange-400" />
                Dark Store Model
              </h2>
              <p className="text-slate-300 text-sm mb-4">{darkStoreModel.concept}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {[
                  { label: 'Delivery', value: darkStoreModel.deliveryTime, color: 'text-orange-400' },
                  { label: 'SKUs', value: darkStoreModel.skus, color: 'text-white' },
                  { label: 'Radius', value: darkStoreModel.radius, color: 'text-blue-400' },
                  { label: 'Breakeven', value: darkStoreModel.breakeven, color: 'text-green-400' },
                ].map((d, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                    <div className={`text-xl font-bold ${d.color}`}>{d.value}</div>
                    <div className="text-xs text-slate-400">{d.label}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {darkStoreModel.locations.map((loc, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-3 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-orange-400" />
                      <span className="text-white font-medium text-sm">{loc.area}</span>
                    </div>
                    <div className="text-xs text-orange-400">{loc.launch}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* GCC Market Size */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-4 sm:p-6 border border-green-500/30">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-400" />
                GCC Delivery Market Size
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { market: 'UAE', size: '$3.5B', growth: '30%' },
                  { market: 'Saudi Arabia', size: '$5.2B', growth: '35%' },
                  { market: 'Qatar', size: '$0.8B', growth: '25%' },
                  { market: 'Kuwait', size: '$0.6B', growth: '22%' },
                  { market: 'Bahrain', size: '$0.3B', growth: '20%' },
                  { market: 'Oman', size: '$0.4B', growth: '18%' },
                ].map((m, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="text-white font-bold text-sm">{m.market}</div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-green-400 font-bold">{m.size}</span>
                      <span className="text-xs text-blue-400">+{m.growth} YoY</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-slate-900/50 rounded-xl p-4 text-center border border-green-500/30">
                <div className="text-2xl font-black text-green-400">$10.8B Total GCC Market</div>
                <div className="text-sm text-slate-400 mt-1">Wasil targeting 2-5% share across all GCC by 2030</div>
              </div>
            </div>
          </div>
        )}

      </main>
      <GlobalFooter />
    </div>
  );
}
