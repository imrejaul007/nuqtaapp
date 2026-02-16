'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Network, Globe, Building2, Target, Crown, Rocket,
  AlertTriangle, Smartphone, DollarSign, XCircle,
  Coins, Wallet, Send, Gamepad2, Store, Megaphone, Shield,
  Package, Layers, Truck, Utensils, ShoppingCart, Sparkle,
  Stethoscope, Wrench, Zap, Plane, Car, Home, Star,
  Calendar, Users, GraduationCap, MapPin, Database,
  Server, Brain, ArrowDown, ArrowRight, ArrowUp,
  RefreshCw, ChevronDown, ChevronUp, Lock,
  TrendingUp, BarChart3, Activity, CheckCircle,
  BookOpen, Eye, Briefcase,
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ═══════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════

const heroStats = [
  { label: 'Active Products', value: '31', icon: Rocket, color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10', borderColor: 'border-[#c9a227]/30' },
  { label: 'Companies', value: '11', icon: Building2, color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30' },
  { label: 'GCC Countries', value: '6', icon: Globe, color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30' },
  { label: 'GMV Target (Y3)', value: '6B+', icon: TrendingUp, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30' },
];

const problemPoints = [
  { problem: 'Users juggle 15+ apps for daily life', icon: Smartphone, stat: '15+', statLabel: 'apps per user' },
  { problem: 'Merchants pay 5 different platforms', icon: Store, stat: '5', statLabel: 'separate tools' },
  { problem: 'Money leaks out at every touchpoint', icon: DollarSign, stat: '30%', statLabel: 'value leakage' },
  { problem: 'No unified identity or wallet', icon: XCircle, stat: '0', statLabel: 'integration' },
];

const userApps = [
  { name: 'Nuqta', arabic: 'نقطة', description: 'Super-app — wallet, bills, savings, loyalty, membership', icon: Crown, color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10', borderColor: 'border-[#c9a227]/30', href: '/nuqta' },
  { name: 'Qist', arabic: 'قسط', description: 'BNPL — 3-12 months, 0% for Nuqta+', icon: Wallet, color: 'text-violet-400', bgColor: 'bg-violet-500/10', borderColor: 'border-violet-500/30', href: '/qist' },
  { name: 'Hawil', arabic: 'حوّل', description: 'Remittance — Google rate, 0% FX markup', icon: Send, color: 'text-green-400', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/30', href: '/hawil' },
  { name: 'SpinZy', arabic: 'سبينزي', description: 'Viral gaming — 6 mini-games, earn coins', icon: Gamepad2, color: 'text-yellow-400', bgColor: 'bg-yellow-500/10', borderColor: 'border-yellow-500/30', href: '/spinzy' },
  { name: 'Wasil', arabic: 'واصل', description: 'Delivery hub — 24 verticals, 60-min SLA', icon: Truck, color: 'text-orange-400', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30', href: '/wasil' },
  { name: 'Dinezy', arabic: 'داينزي', description: 'Food delivery — restaurants, cloud kitchens', icon: Utensils, color: 'text-red-400', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30', href: '/dinezy' },
  { name: 'Grocify', arabic: 'غروسيفاي', description: 'Grocery delivery — supermarkets, fresh produce', icon: ShoppingCart, color: 'text-lime-400', bgColor: 'bg-lime-500/10', borderColor: 'border-lime-500/30', href: '/grocify' },
  { name: 'Glowzy', arabic: 'غلوزي', description: 'Beauty & salon — at-home services', icon: Sparkle, color: 'text-pink-400', bgColor: 'bg-pink-500/10', borderColor: 'border-pink-500/30', href: '/glowzy' },
  { name: 'MediEarn', arabic: 'ميدي إيرن', description: 'Pharmacy delivery — prescriptions, health', icon: Stethoscope, color: 'text-rose-400', bgColor: 'bg-rose-500/10', borderColor: 'border-rose-500/30', href: '/mediearn' },
  { name: 'CleanEZ', arabic: 'كلين إي زد', description: 'Home cleaning — deep clean, laundry', icon: Sparkle, color: 'text-sky-400', bgColor: 'bg-sky-500/10', borderColor: 'border-sky-500/30', href: '/cleanez' },
  { name: 'Handyzy', arabic: 'هاندي زي', description: 'Home repairs — plumbing, electrical, AC', icon: Wrench, color: 'text-amber-400', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/30', href: '/handyzy' },
  { name: 'QuickDrop', arabic: 'كويك دروب', description: '15-min dark store — instant essentials', icon: Zap, color: 'text-yellow-300', bgColor: 'bg-yellow-400/10', borderColor: 'border-yellow-400/30', href: '/quickdrop' },
  { name: 'Safar', arabic: 'سفر', description: 'Travel — flights, hotels, visa, TravoPay', icon: Plane, color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30', href: '/safar' },
  { name: 'Rakab', arabic: 'ركاب', description: 'Ride-hailing — 75-80% driver cut', icon: Car, color: 'text-green-300', bgColor: 'bg-green-400/10', borderColor: 'border-green-400/30', href: '/rakab' },
  { name: 'Sakin', arabic: 'ساكن', description: 'Rent BNPL — deposit + rent over 12 months', icon: Home, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30', href: '/sakin' },
  { name: 'Ajer', arabic: 'أجر', description: 'Rental marketplace — cars, equipment, spaces', icon: Package, color: 'text-teal-400', bgColor: 'bg-teal-500/10', borderColor: 'border-teal-500/30', href: '/ajer' },
  { name: 'Fakhir', arabic: 'فاخر', description: 'Luxury concierge — 24/7 white-glove', icon: Star, color: 'text-amber-300', bgColor: 'bg-amber-400/10', borderColor: 'border-amber-400/30', href: '/fakhir' },
];

const bizApps = [
  { name: 'BizOne', arabic: 'بزون', description: 'Merchant OS — POS, accounting, VAT, payroll, lending, storefront', icon: Store, color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30', href: '/bizone' },
  { name: 'Adzy', arabic: 'أدزي', description: 'Advertising — closed-loop campaigns', icon: Megaphone, color: 'text-pink-400', bgColor: 'bg-pink-500/10', borderColor: 'border-pink-500/30', href: '/adzy' },
  { name: 'Amana', arabic: 'أمانة', description: 'Compliance OS — 12 regulatory pillars', icon: Shield, color: 'text-red-400', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30', href: '/amana' },
  { name: 'NextaBizz', arabic: 'نكستابز', description: 'B2B marketplace — wholesale, supply', icon: Package, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30', href: '/nextabizz' },
  { name: 'Inventora', arabic: 'إنفنتورا', description: 'Supply chain — AI inventory, auto-reorder', icon: Layers, color: 'text-teal-400', bgColor: 'bg-teal-500/10', borderColor: 'border-teal-500/30', href: '/inventora' },
  { name: 'Rabtul', arabic: 'ربطُل', description: 'Core OS — identity, wallet, rules, events', icon: Database, color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30', href: '/rabtul' },
  { name: 'Khedma', arabic: 'خدمة', description: 'Government & PRO — visa, licensing, labor, attestation', icon: Briefcase, color: 'text-orange-400', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30', href: '/khedma' },
  { name: 'Eventora', arabic: 'إيفنتورا', description: 'Events & ticketing — concerts, sports', icon: Calendar, color: 'text-violet-400', bgColor: 'bg-violet-500/10', borderColor: 'border-violet-500/30', href: '/eventora' },
  { name: 'Daman', arabic: 'ضمان', description: 'Insurance — health, car, travel, property', icon: Shield, color: 'text-sky-400', bgColor: 'bg-sky-500/10', borderColor: 'border-sky-500/30', href: '/daman' },
  { name: 'Aqar', arabic: 'عقار', description: 'Real estate — buy, sell, manage', icon: Home, color: 'text-green-300', bgColor: 'bg-green-400/10', borderColor: 'border-green-400/30', href: '/aqar' },
  { name: 'Tawzeef', arabic: 'توظيف', description: 'Recruitment — hiring, talent matching', icon: Users, color: 'text-blue-300', bgColor: 'bg-blue-400/10', borderColor: 'border-blue-400/30', href: '/tawzeef' },
  { name: 'Tadreeb', arabic: 'تدريب', description: 'Training & certification — skills, courses', icon: GraduationCap, color: 'text-indigo-400', bgColor: 'bg-indigo-500/10', borderColor: 'border-indigo-500/30', href: '/tadreeb' },
  { name: 'Tabib', arabic: 'طبيب', description: 'Healthcare — telemedicine, booking', icon: Stethoscope, color: 'text-rose-300', bgColor: 'bg-rose-400/10', borderColor: 'border-rose-400/30', href: '/tabib' },
  { name: 'Majlis', arabic: 'مجلس', description: 'Community — groups, events, local', icon: Users, color: 'text-cyan-300', bgColor: 'bg-cyan-400/10', borderColor: 'border-cyan-400/30', href: '/majlis' },
  { name: 'Tamkeen', arabic: 'تمكين', description: 'Business-in-a-Box — register, operate, comply, grow', icon: Rocket, color: 'text-lime-400', bgColor: 'bg-lime-500/10', borderColor: 'border-lime-500/30', href: '/tamkeen' },
];

const architectureLayers = [
  {
    layer: 3,
    name: 'TOUCHPOINTS',
    subtitle: 'Where users & merchants interact daily',
    color: 'bg-emerald-500',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    items: ['Nuqta', 'Wasil', 'Dinezy', 'Grocify', 'Safar', 'Rakab', 'SpinZy', 'Qist', 'Hawil', 'Sakin', 'Fakhir'],
    icon: Smartphone,
  },
  {
    layer: 2,
    name: 'PLATFORMS',
    subtitle: 'Business logic & orchestration',
    color: 'bg-blue-500',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    items: ['BizOne', 'Adzy', 'RTMN Finance', 'NextaBizz', 'Inventora', 'Amana'],
    icon: Server,
  },
  {
    layer: 1,
    name: 'RABTUL — THE BRAIN',
    subtitle: 'Single source of truth for the entire ecosystem',
    color: 'bg-purple-500',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    items: ['Identity & SSO', 'Wallet Ledger', 'Rule Engine', 'Event Bus', 'AI & Analytics', 'Fraud & Audit', 'API Gateway'],
    icon: Brain,
  },
];

const flywheelLoops = [
  {
    id: 'money',
    name: 'The Money Loop',
    icon: DollarSign,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    summary: 'Every dirham recirculates — money never leaves the ecosystem',
    steps: ['User pays', 'NuqtaPay processes', 'Rabtul credits coins', 'User spends coins', 'Merchant earns', 'Cycle repeats'],
    detail: 'User pays at checkout via NuqtaPay. Rabtul Wallet Ledger credits Nuqta Coins (2-15% based on membership tier). User redeems coins at any of 500+ merchants. Merchant pays platform commission. Commission funds more coin rewards. The money never leaves — it recirculates through the ecosystem, compounding with every transaction.',
  },
  {
    id: 'merchant',
    name: 'The Merchant Loop',
    icon: Store,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    summary: 'One onboarding = everywhere. One dashboard replaces ten separate tools.',
    steps: ['Join BizOne', 'Auto-listed on Wasil', 'Run ads via Adzy', 'Enable Qist BNPL', 'Auto-accounting + VAT', 'Capital from sales data'],
    detail: 'A merchant signs up on BizOne (POS + CRM + inventory + accounting + payroll in one dashboard). Automatically listed across all 24 Wasil delivery verticals. Ads through Adzy. Qist BNPL at checkout (40% higher AOV). Every sale auto-generates accounting entries and VAT calculations — no QuickBooks needed. Staff paid via WPS-compliant payroll. Need capital? BizOne Capital pre-approves working capital loans based on transaction history. Repay from daily sales. One dashboard, zero other tools.',
  },
  {
    id: 'delivery',
    name: 'The Delivery Loop',
    icon: Truck,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    summary: 'Shared fleet across 24 verticals + ride-hailing = unbeatable utilization',
    steps: ['Rakab rides', 'Wasil deliveries', 'Dinezy food', 'Grocify groceries', 'MediEarn pharmacy', '24/7 utilization'],
    detail: 'Rakab ride-hailing drivers also deliver for Wasil. Morning: commute rides. Lunchtime: Dinezy food delivery. Afternoon: Grocify grocery runs. Evening: MediEarn pharmacy. Night: QuickDrop essentials. One fleet serving 24 delivery verticals + ride-hailing. 30-40% cost savings vs. single-vertical competitors like Talabat or Careem.',
  },
  {
    id: 'tourist',
    name: 'The Tourist Loop',
    icon: Plane,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    summary: '9.5M expats start with cheapest remittance, stay for everything',
    steps: ['Hawil (Google rate)', 'Nuqta wallet loaded', 'Safar travel', 'Rakab rides', 'Sakin accommodation', 'Full ecosystem user'],
    detail: 'A tourist or expat downloads Hawil for the cheapest remittance (Google rate, 0% FX markup). They earn Nuqta Coins on every transfer. They use coins to book travel on Safar with TravoPay multi-currency wallet. Rakab provides airport pickup. Sakin offers short-term furnished stays. Wasil delivers essentials. One entry point through remittance captures their entire daily spend.',
  },
  {
    id: 'engagement',
    name: 'The Engagement Loop',
    icon: Gamepad2,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    summary: 'Games drive daily engagement that feeds real commerce',
    steps: ['SpinZy games', 'Earn Nuqta coins', 'Win merchant prizes', 'Adzy sponsored rewards', 'Visit merchants', 'More engagement'],
    detail: 'SpinZy offers 6 ultra-light game types (<5MB, 30-second sessions). Players earn Nuqta Coins on every game. Merchants sponsor prizes through Adzy ad spend — players win real vouchers. Winners redeem at merchants, driving foot traffic. More play = more behavioral data = better Adzy targeting = more merchant spend. DAU stays high even when users aren\'t shopping.',
  },
  {
    id: 'rent',
    name: 'The Rent Loop',
    icon: Home,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    summary: 'The biggest monthly expense becomes the deepest ecosystem entry point',
    steps: ['Sakin finances 68K', 'Hawil converts FX', 'Wasil welcome kit', 'Khedma cleaning', 'Monthly coins', 'Cross-sell 3.2 apps'],
    detail: 'Sakin finances AED 68,000 annual rent into 12 monthly payments (via Qist credit engine). The expat tenant uses Hawil to convert salary from home country at Google rate — saving AED 3,780/year on FX alone. Wasil delivers a welcome kit on move-in day. Khedma provides cleaning. Every monthly rent payment earns Nuqta Coins. Average renter adopts 3.2 additional RTMN products within 6 months.',
  },
  {
    id: 'data',
    name: 'The Data Loop',
    icon: Brain,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    summary: 'Every interaction makes every other product smarter',
    steps: ['Rabtul sees all', 'AI personalizes', 'Adzy targets', 'Higher conversion', 'More transactions', 'More data'],
    detail: 'Rabtul is the single source of truth — every transaction, search, ride, delivery, and game session generates data. AI models personalize recommendations across all 31 products. Adzy uses behavioral profiles for hyper-targeted advertising. Higher conversion rates mean more transactions. More transactions mean richer data. The flywheel accelerates itself — and no competitor has access to this cross-product intelligence.',
  },
];

const defensiveMoats = [
  {
    name: 'Rabtul Lock-In',
    icon: Lock,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    description: 'Single wallet, identity, and rules engine. One login, one balance, one history across 31 products. Switching means losing coins, tier status, credit history, and connections to 500+ merchants.',
    strength: 'Extreme',
  },
  {
    name: 'Shared Fleet Economics',
    icon: Truck,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    description: 'Rakab + Wasil share one driver fleet across 24 delivery verticals + ride-hailing. 30-40% cost advantage over any single-vertical competitor.',
    strength: 'Very High',
  },
  {
    name: 'Nuqta Coin Economy',
    icon: Coins,
    color: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]/30',
    description: 'Earn coins in any product, spend anywhere. 4 coin types with smart debit priority. 20-35% breakage rate = pure profit. Cross-product liquidity creates a sticky internal economy.',
    strength: 'High',
  },
  {
    name: 'BizOne Merchant Lock-In',
    icon: Store,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    description: 'One dashboard replaces POS, CRM, inventory, accounting, VAT, payroll, lending, and storefront. Auto-listed on Wasil. Leaving means rebuilding 10 separate tools and losing access to pre-approved capital.',
    strength: 'Very High',
  },
  {
    name: 'Hawil as Gateway Drug',
    icon: Send,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    description: '9.5M expats in UAE alone. Cheapest remittance (Google rate, 0% markup) is an irresistible entry point. Every transfer earns coins that can only be spent inside the ecosystem.',
    strength: 'High',
  },
];

const keyNumbers = [
  { label: 'Combined GMV (Y3)', value: '~6B+', suffix: 'AED', icon: TrendingUp, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30' },
  { label: 'Revenue (Y3)', value: '~600M+', suffix: 'AED', icon: DollarSign, color: 'text-green-400', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/30' },
  { label: 'Rabtul Cost', value: '8.5M', suffix: 'AED/yr', icon: Server, color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30' },
  { label: 'Rabtul ROI', value: '23x', suffix: 'return', icon: BarChart3, color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10', borderColor: 'border-[#c9a227]/30' },
  { label: 'LTV:CAC Range', value: '17-42x', suffix: 'across products', icon: Target, color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
  { label: 'Fleet Savings', value: '30-40%', suffix: 'vs single-vertical', icon: Truck, color: 'text-orange-400', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30' },
  { label: 'Cross-sell Rate', value: '1 → 3.2', suffix: 'products in 6mo', icon: RefreshCw, color: 'text-pink-400', bgColor: 'bg-pink-500/10', borderColor: 'border-pink-500/30' },
];

const timelinePhases = [
  {
    phase: 1,
    name: 'Foundation',
    period: 'Q2 – Q3 2026',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    dotColor: 'bg-emerald-500',
    items: ['Legal entity setup', 'Licensing & compliance', 'Key partnerships', 'Rabtul infrastructure', 'Core team hiring'],
  },
  {
    phase: 2,
    name: 'Pilot',
    period: 'Q4 2026 – Q2 2027',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    dotColor: 'bg-blue-500',
    items: ['Nuqta app launch', 'Qist BNPL live', 'Hawil remittance live', 'Wasil Wave 1 (5 apps)', 'BizOne merchant onboarding'],
  },
  {
    phase: 3,
    name: 'Scale',
    period: 'Q3 2027 – Q2 2028',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    dotColor: 'bg-purple-500',
    items: ['All 31 products live', 'GCC expansion (6 countries)', 'Adzy ad network at scale', '2.5M+ active users', '5,000+ merchants'],
  },
  {
    phase: 4,
    name: 'Dominance',
    period: 'Q3 2028+',
    textColor: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]/30',
    dotColor: 'bg-[#c9a227]',
    items: ['IPO preparation', 'Rabtul PaaS licensing', '6B+ AED GMV', 'Regional market leader', 'Self-sustaining flywheel'],
  },
];

const quickAccessLinks = [
  { label: 'RTMN Group', href: '/rtmn-group', icon: Building2, color: 'bg-[#c9a227] text-[#0a1628]' },
  { label: 'RTMN Hub', href: '/rtmn', icon: Globe, color: 'bg-purple-600 text-white' },
  { label: 'Complete Roadmap', href: '/complete-roadmap', icon: Target, color: 'bg-blue-600 text-white' },
  { label: 'Documentation', href: '/documentation', icon: BookOpen, color: 'bg-emerald-600 text-white' },
  { label: 'Ecosystem', href: '/rtmn-ecosystem', icon: Network, color: 'bg-slate-700 text-white' },
  { label: 'Value Chain', href: '/value-chain', icon: Activity, color: 'bg-slate-700 text-white' },
  { label: 'Monetization', href: '/monetization', icon: DollarSign, color: 'bg-slate-700 text-white' },
];

// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════

export default function RTMNStoryPage() {
  const [expandedLoop, setExpandedLoop] = useState<string | null>('money');

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">

      {/* ═══ SECTION 1: HERO ═══════════════════════════════════════ */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/15 via-transparent to-purple-500/10" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
          <Link href="/rtmn" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#c9a227] transition-colors mb-8">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Hub
          </Link>

          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full mb-6">
              <Network className="w-5 h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-bold text-sm">The RTMN Story</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4">
              One Ecosystem.{' '}
              <span className="text-[#c9a227]">Zero Leakage.</span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto mb-3">
              31 products. 11 companies. One wallet. One identity.
              Every dirham earned is a dirham that stays.
            </p>

            <p className="text-[#c9a227]/60 text-base" dir="rtl">
              نظام بيئي واحد. تسرب صفري. ٣١ منتج. ١١ شركة.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {heroStats.map((stat) => (
              <div key={stat.label} className={`${stat.bgColor} rounded-xl p-4 text-center border ${stat.borderColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                <div className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ═══ SECTION 2: THE PROBLEM ════════════════════════════════ */}
      <section className="bg-slate-800/30 border-y border-slate-700/50 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-red-400 mb-3">
              <AlertTriangle className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-wider">The Problem</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              A Fragmented Digital Economy
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              In the GCC, every daily need requires a different app, a different login, a different wallet. Value leaks at every touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {problemPoints.map((point, i) => (
              <div key={i} className="bg-red-500/10 rounded-xl p-5 border border-red-500/30 text-center">
                <point.icon className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-red-400 mb-1">{point.stat}</div>
                <div className="text-xs text-red-400/70 uppercase tracking-wider mb-2">{point.statLabel}</div>
                <p className="text-slate-300 text-sm">{point.problem}</p>
              </div>
            ))}
          </div>

          {/* Before vs After */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Without RTMN
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> 15+ separate apps, 15 logins</li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> Merchants pay 5 different platforms</li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> Rewards trapped in each silo</li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> 3-5% FX loss on every transfer</li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> No cross-product intelligence</li>
              </ul>
            </div>
            <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30">
              <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> With RTMN
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> 1 login, 1 wallet across 31 products</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> Merchants get 1 dashboard (BizOne)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> Coins earn anywhere, spend everywhere</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> Google rate FX with Hawil (0% markup)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> AI learns from every product interaction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: THE SOLUTION — 31 PRODUCTS ═════════════════ */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-[#c9a227] mb-3">
              <Rocket className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-wider">The Solution</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              31 Products. <span className="text-[#c9a227]">1 Ecosystem.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every product serves a real need. Together, they capture the user&apos;s entire daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* B2C Apps */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-emerald-400">17 User Apps</h3>
                  <p className="text-xs text-slate-400">Consumer-facing (B2C)</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {userApps.map((app) => (
                  <Link key={app.href} href={app.href} className={`${app.bgColor} border ${app.borderColor} rounded-lg p-3 flex items-center gap-3 hover:scale-[1.02] transition-transform group`}>
                    <app.icon className={`w-7 h-7 ${app.color} shrink-0`} />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className={`font-bold text-sm ${app.color} group-hover:text-white transition-colors`}>{app.name}</span>
                        <span className="text-slate-500 text-[10px]" dir="rtl">{app.arabic}</span>
                      </div>
                      <div className="text-slate-400 text-[11px] truncate">{app.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* B2B Apps */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Store className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-400">14 Business Apps</h3>
                  <p className="text-xs text-slate-400">Merchant & B2B tools</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {bizApps.map((app) => (
                  <Link key={app.href} href={app.href} className={`${app.bgColor} border ${app.borderColor} rounded-lg p-3 flex items-center gap-3 hover:scale-[1.02] transition-transform group`}>
                    <app.icon className={`w-7 h-7 ${app.color} shrink-0`} />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className={`font-bold text-sm ${app.color} group-hover:text-white transition-colors`}>{app.name}</span>
                        <span className="text-slate-500 text-[10px]" dir="rtl">{app.arabic}</span>
                      </div>
                      <div className="text-slate-400 text-[11px] truncate">{app.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: THE ARCHITECTURE — 3 LAYERS ════════════════ */}
      <section className="bg-slate-800/30 border-y border-slate-700/50 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-purple-400 mb-3">
              <Layers className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-wider">The Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              3 Layers. <span className="text-purple-400">1 Brain.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every app, every transaction, every coin flows through Rabtul. No exceptions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {architectureLayers.map((layer, i) => (
              <React.Fragment key={layer.layer}>
                <div className={`${layer.bgColor} rounded-xl p-5 sm:p-6 border ${layer.borderColor}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg ${layer.color} flex items-center justify-center`}>
                      <layer.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${layer.bgColor} ${layer.textColor} border ${layer.borderColor} font-bold`}>
                          L{layer.layer}
                        </span>
                        <h4 className={`font-bold ${layer.textColor}`}>{layer.name}</h4>
                      </div>
                      <p className="text-slate-400 text-xs">{layer.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span key={item} className={`px-3 py-1 rounded-full text-xs font-medium ${layer.bgColor} ${layer.textColor} border ${layer.borderColor}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                {i < architectureLayers.length - 1 && (
                  <div className="flex justify-center gap-4">
                    <ArrowDown className="w-5 h-5 text-slate-500" />
                    <ArrowUp className="w-5 h-5 text-slate-500" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Rabtul Rule Callout */}
          <div className="max-w-3xl mx-auto mt-6">
            <div className="bg-purple-500/10 rounded-xl p-4 sm:p-5 border-2 border-purple-500/50">
              <h4 className="text-purple-400 font-bold mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5" /> Locked Rules — Cannot Be Overridden
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { rule: 'No app owns the wallet', detail: 'Rabtul Wallet Ledger is the only system that touches coin balances' },
                  { rule: 'No app owns merchants', detail: 'BizOne is the single merchant interface for the entire ecosystem' },
                  { rule: 'No company bypasses Rabtul', detail: 'Every transaction flows through Rabtul — zero exceptions' },
                ].map((item) => (
                  <div key={item.rule} className="bg-slate-900/50 rounded-lg p-3 border border-purple-500/30">
                    <div className="text-purple-400 font-bold text-sm mb-1">{item.rule}</div>
                    <div className="text-slate-400 text-xs">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: THE FLYWHEEL — 7 LOOPS ════════════════════ */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-[#c9a227] mb-3">
              <RefreshCw className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-wider">The Flywheel</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              7 Self-Reinforcing <span className="text-[#c9a227]">Loops</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Each loop feeds the others. The more products a user touches, the faster every loop spins.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {flywheelLoops.map((loop) => (
              <div key={loop.id} className={`${loop.bgColor} rounded-xl border ${loop.borderColor} overflow-hidden`}>
                <button
                  onClick={() => setExpandedLoop(expandedLoop === loop.id ? null : loop.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-slate-900/50 flex items-center justify-center shrink-0">
                      <loop.icon className={`w-5 h-5 ${loop.color}`} />
                    </div>
                    <div className="min-w-0">
                      <h4 className={`font-bold ${loop.color}`}>{loop.name}</h4>
                      <p className="text-slate-400 text-sm hidden sm:block truncate">{loop.summary}</p>
                    </div>
                  </div>
                  {expandedLoop === loop.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-2" />
                  )}
                </button>

                {expandedLoop === loop.id && (
                  <div className="px-4 sm:px-5 pb-5">
                    <p className="text-slate-400 text-sm sm:hidden mb-3">{loop.summary}</p>
                    {/* Flow Steps */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      {loop.steps.map((step, i) => (
                        <React.Fragment key={i}>
                          <span className={`${loop.bgColor} ${loop.color} px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border ${loop.borderColor}`}>
                            {step}
                          </span>
                          {i < loop.steps.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-slate-500 shrink-0" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{loop.detail}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6: THE MOAT ═══════════════════════════════════ */}
      <section className="bg-slate-800/30 border-y border-slate-700/50 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-red-400 mb-3">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-wider">The Moat</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              5 Defenses <span className="text-red-400">Competitors Can&apos;t Replicate</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Each moat reinforces the others. Together, they create an impenetrable fortress.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {defensiveMoats.map((moat) => (
              <div key={moat.name} className={`${moat.bgColor} rounded-xl p-5 border ${moat.borderColor}`}>
                <div className="flex items-center gap-3 mb-3">
                  <moat.icon className={`w-8 h-8 ${moat.color}`} />
                  <div>
                    <h4 className={`font-bold text-sm ${moat.color}`}>{moat.name}</h4>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${moat.bgColor} ${moat.color} border ${moat.borderColor} font-bold`}>
                      {moat.strength}
                    </span>
                  </div>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">{moat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7: THE NUMBERS ════════════════════════════════ */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-emerald-400 mb-3">
              <BarChart3 className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-wider">The Numbers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Combined <span className="text-emerald-400">Ecosystem Power</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {keyNumbers.map((num) => (
              <div key={num.label} className={`${num.bgColor} rounded-xl p-4 sm:p-5 text-center border ${num.borderColor}`}>
                <num.icon className={`w-7 h-7 ${num.color} mx-auto mb-2`} />
                <div className={`text-xl sm:text-2xl font-bold ${num.color}`}>{num.value}</div>
                <div className="text-[10px] text-slate-500 mb-1">{num.suffix}</div>
                <div className="text-xs text-slate-400">{num.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8: THE TIMELINE ═══════════════════════════════ */}
      <section className="bg-slate-800/30 border-y border-slate-700/50 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-[#c9a227] mb-3">
              <Target className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-wider">The Timeline</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              From Foundation to <span className="text-[#c9a227]">Dominance</span>
            </h2>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:flex items-start gap-2 max-w-6xl mx-auto">
            {timelinePhases.map((phase, i) => (
              <React.Fragment key={phase.phase}>
                <div className={`flex-1 ${phase.bgColor} rounded-xl p-5 border ${phase.borderColor}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-8 h-8 rounded-full ${phase.dotColor} flex items-center justify-center text-white text-xs font-bold`}>
                      {phase.phase}
                    </div>
                    <div>
                      <h4 className={`font-bold ${phase.textColor}`}>{phase.name}</h4>
                      <p className="text-slate-500 text-[10px]">{phase.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {phase.items.map((item, j) => (
                      <li key={j} className="text-slate-300 text-xs flex items-start gap-2">
                        <CheckCircle className={`w-3.5 h-3.5 ${phase.textColor} mt-0.5 shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {i < timelinePhases.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-slate-600 mt-10 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile/Tablet Timeline */}
          <div className="lg:hidden space-y-3 max-w-lg mx-auto">
            {timelinePhases.map((phase, i) => (
              <React.Fragment key={phase.phase}>
                <div className={`${phase.bgColor} rounded-xl p-4 border ${phase.borderColor}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-8 h-8 rounded-full ${phase.dotColor} flex items-center justify-center text-white text-xs font-bold`}>
                      {phase.phase}
                    </div>
                    <div>
                      <h4 className={`font-bold ${phase.textColor}`}>{phase.name}</h4>
                      <p className="text-slate-500 text-xs">{phase.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {phase.items.map((item, j) => (
                      <li key={j} className="text-slate-300 text-xs flex items-start gap-2">
                        <CheckCircle className={`w-3.5 h-3.5 ${phase.textColor} mt-0.5 shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {i < timelinePhases.length - 1 && (
                  <div className="flex justify-center">
                    <ArrowDown className="w-5 h-5 text-slate-500" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9: QUICK ACCESS ═══════════════════════════════ */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
            Dive Deeper
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {quickAccessLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-all ${link.color} border border-slate-600/30`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 10: FOOTER ════════════════════════════════════ */}
      <GlobalFooter />
    </div>
  );
}
