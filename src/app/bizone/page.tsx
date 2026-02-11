'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Store, Smartphone, Package, Megaphone, BarChart3, Users, TrendingUp,
  CheckCircle, Clock, Target, Globe, ArrowRight, CreditCard, Coins,
  Shield, Zap, Receipt, Calculator, LineChart, PieChart, Bell,
  Settings, FileText, Truck, Crown, Gift, Star, ChevronDown, ChevronUp,
  Building2, Phone, Mail, MessageSquare, QrCode, Wallet, BadgePercent,
  UserCheck, Lock, Database, Server, Layers, Monitor, Wifi, WifiOff,
  ShoppingCart, Coffee, UtensilsCrossed, Scissors, Car, Home, Heart,
  DollarSign, BarChart, AlertTriangle, Map, Award, Briefcase,
  CalendarDays, UserPlus, Key, Eye, Activity, ArrowUpRight, CircleDot,
  Hash, Percent, Box, Repeat, Share2
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ──────────────────────────────────────────────
// DATA: BizOne Suite Products
// ──────────────────────────────────────────────
const bizOneSuite = [
  {
    id: 'bizone',
    name: 'BizOne',
    arabic: 'بيز ون',
    tagline: 'Unified Merchant Dashboard',
    description: 'Single dashboard to manage all Nuqta ecosystem products - payments, orders, analytics, customer insights.',
    icon: Store,
    status: 'Q2 2027',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    features: [
      { name: 'Unified Dashboard', description: 'All products in one view - Qist, Wasil, Nuqta+, Hawil', icon: BarChart3 },
      { name: 'Real-time Analytics', description: 'Sales, traffic, conversion, customer behavior', icon: LineChart },
      { name: 'Order Management', description: 'Process orders from all channels in one place', icon: Package },
      { name: 'Customer Insights', description: 'CRM, purchase history, loyalty status', icon: Users },
      { name: 'Financial Reports', description: 'Revenue, settlements, tax reports, forecasting', icon: Calculator },
      { name: 'Multi-location', description: 'Manage multiple branches from one account', icon: Globe },
    ],
    pricing: [
      { tier: 'Starter', price: 'Free', features: ['Up to 100 orders/mo', 'Basic analytics', '1 user'] },
      { tier: 'Growth', price: '199 AED/mo', features: ['Unlimited orders', 'Advanced analytics', '5 users', 'API access'] },
      { tier: 'Enterprise', price: 'Custom', features: ['All features', 'Unlimited users', 'Dedicated support', 'Custom integrations'] },
    ],
  },
  {
    id: 'nextabizz',
    name: 'NextaBizz',
    arabic: 'نكستا بيز',
    tagline: 'POS & Business Tools',
    description: 'Complete point-of-sale system with inventory, invoicing, payments, and staff management.',
    icon: Smartphone,
    status: 'Q3 2027',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    features: [
      { name: 'Cloud POS', description: 'Works on any device - tablet, phone, desktop', icon: Smartphone },
      { name: 'Accept All Payments', description: 'Cards, Qist BNPL, Nuqta coins, Hawil Card', icon: CreditCard },
      { name: 'Quick Invoicing', description: 'Create and send invoices in seconds', icon: FileText },
      { name: 'Staff Management', description: 'Shifts, permissions, performance tracking', icon: Users },
      { name: 'Offline Mode', description: 'Keep selling even without internet', icon: Zap },
      { name: 'Receipt Customization', description: 'Branded receipts, digital or print', icon: Receipt },
    ],
    pricing: [
      { tier: 'Solo', price: '99 AED/mo', features: ['1 register', 'Basic POS', 'Email support'] },
      { tier: 'Business', price: '299 AED/mo', features: ['3 registers', 'Full POS', 'Priority support', 'Hardware bundle'] },
      { tier: 'Chain', price: '499 AED/mo', features: ['Unlimited registers', 'Multi-location', 'Dedicated manager'] },
    ],
  },
  {
    id: 'inventora',
    name: 'Inventora',
    arabic: 'إنفنتورا',
    tagline: 'Smart Inventory Management',
    description: 'AI-powered inventory tracking with automatic reordering, waste reduction, and supplier management.',
    icon: Package,
    status: 'Q3 2027',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    features: [
      { name: 'Real-time Stock', description: 'Know exactly what you have, where it is', icon: Package },
      { name: 'Auto-reorder', description: 'AI predicts demand, auto-orders from suppliers', icon: Zap },
      { name: 'Barcode/QR Scanning', description: 'Quick stock counts with mobile scanning', icon: QrCode },
      { name: 'Supplier Portal', description: 'Connect with suppliers, compare prices', icon: Building2 },
      { name: 'Waste Tracking', description: 'Reduce losses, track expiry, optimize stock', icon: Calculator },
      { name: 'Multi-warehouse', description: 'Manage inventory across locations', icon: Globe },
    ],
    pricing: [
      { tier: 'Basic', price: '149 AED/mo', features: ['1,000 SKUs', 'Basic tracking', 'Manual reorder'] },
      { tier: 'Pro', price: '399 AED/mo', features: ['10,000 SKUs', 'Auto-reorder', 'Supplier integration'] },
      { tier: 'Enterprise', price: '799 AED/mo', features: ['Unlimited SKUs', 'AI forecasting', 'Multi-warehouse'] },
    ],
  },
  {
    id: 'adzy',
    name: 'Adzy',
    arabic: 'أدزي',
    tagline: 'Ecosystem Advertising Platform',
    description: 'Reach millions of Nuqta users with targeted ads across all ecosystem apps and touchpoints.',
    icon: Megaphone,
    status: 'Q4 2027',
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    features: [
      { name: 'Featured Listings', description: 'Top placement in search and categories', icon: Star },
      { name: 'Push Notifications', description: 'Reach users with targeted push messages', icon: Bell },
      { name: 'In-app Banners', description: 'Display ads across Nuqta ecosystem apps', icon: Megaphone },
      { name: 'Offer Campaigns', description: 'Create limited-time deals and flash sales', icon: Gift },
      { name: 'Audience Targeting', description: 'Target by location, behavior, demographics', icon: Target },
      { name: 'Performance Analytics', description: 'Track impressions, clicks, conversions, ROI', icon: BarChart3 },
    ],
    pricing: [
      { tier: 'Pay-per-click', price: 'From 0.10 AED', features: ['CPC model', 'Budget control', 'Basic targeting'] },
      { tier: 'Featured Merchant', price: '999 AED/mo', features: ['Top placement', 'Priority support', 'Campaign manager'] },
      { tier: 'Brand Partner', price: 'Custom', features: ['Exclusive placements', 'Co-branded campaigns', 'Strategic partnership'] },
    ],
  },
];

// ──────────────────────────────────────────────
// DATA: Merchant Benefits
// ──────────────────────────────────────────────
const merchantBenefits = [
  { benefit: 'Zero Setup Fee', description: 'Get started with no upfront costs - pay only when you earn', icon: Gift, color: 'text-emerald-400' },
  { benefit: 'Instant Settlements', description: 'Get paid within 24 hours, not weeks like traditional processors', icon: Zap, color: 'text-yellow-400' },
  { benefit: 'Ecosystem Traffic', description: 'Access 500K+ Nuqta users actively looking for merchants', icon: Users, color: 'text-blue-400' },
  { benefit: 'Lower Fees', description: 'Competitive rates starting at 1.5% - lower than traditional payment processors', icon: BadgePercent, color: 'text-purple-400' },
  { benefit: 'Qist Integration', description: 'Offer BNPL to customers, get paid upfront, increase basket size', icon: Wallet, color: 'text-violet-400' },
  { benefit: 'Customer Loyalty', description: 'Customers earn Nuqta coins - they keep coming back', icon: Crown, color: 'text-[#c9a227]' },
];

// ──────────────────────────────────────────────
// DATA: Integration Partners
// ──────────────────────────────────────────────
const integrations = [
  { name: 'Shopify', category: 'E-commerce', logo: '🛒' },
  { name: 'WooCommerce', category: 'E-commerce', logo: '🔌' },
  { name: 'Xero', category: 'Accounting', logo: '📊' },
  { name: 'QuickBooks', category: 'Accounting', logo: '💰' },
  { name: 'Odoo', category: 'ERP', logo: '🏢' },
  { name: 'Zoho', category: 'CRM', logo: '📈' },
  { name: 'Talabat', category: 'Delivery', logo: '🚴' },
  { name: 'Deliveroo', category: 'Delivery', logo: '🍔' },
];

// ──────────────────────────────────────────────
// DATA: Success Metrics
// ──────────────────────────────────────────────
const successMetrics = [
  { metric: 'Avg. Revenue Increase', value: '35%', description: 'After joining Nuqta ecosystem' },
  { metric: 'New Customer Acquisition', value: '500+', description: 'Monthly new customers via ecosystem' },
  { metric: 'Repeat Purchase Rate', value: '68%', description: 'Nuqta coin holders return rate' },
  { metric: 'Basket Size Increase', value: '45%', description: 'When Qist BNPL is enabled' },
];

// ──────────────────────────────────────────────
// DATA: GCC Availability
// ──────────────────────────────────────────────
const gccAvailability = [
  { country: 'UAE', flag: '🇦🇪', status: 'Active', merchants: '500+', cities: 'Dubai, Abu Dhabi, Sharjah, Ajman', regulations: 'CBUAE licensed', launchYear: '2027' },
  { country: 'Saudi Arabia', flag: '🇸🇦', status: 'Q3 2027', merchants: 'Coming Soon', cities: 'Riyadh, Jeddah, Dammam', regulations: 'SAMA compliance pending', launchYear: '2027' },
  { country: 'Qatar', flag: '🇶🇦', status: 'Q4 2027', merchants: 'Coming Soon', cities: 'Doha, Al Wakrah', regulations: 'QCB application filed', launchYear: '2027' },
  { country: 'Kuwait', flag: '🇰🇼', status: '2028', merchants: 'Coming Soon', cities: 'Kuwait City, Hawalli', regulations: 'CBK review', launchYear: '2028' },
  { country: 'Bahrain', flag: '🇧🇭', status: '2028', merchants: 'Coming Soon', cities: 'Manama, Muharraq', regulations: 'CBB sandbox', launchYear: '2028' },
  { country: 'Oman', flag: '🇴🇲', status: '2028', merchants: 'Coming Soon', cities: 'Muscat, Salalah', regulations: 'CBO engagement', launchYear: '2028' },
];

// ──────────────────────────────────────────────
// DATA: Hero Stats
// ──────────────────────────────────────────────
const heroStats = [
  { label: 'Total Screens', value: '222', icon: Monitor },
  { label: 'Merchant Pages', value: '164', icon: FileText },
  { label: 'Major Sections', value: '14', icon: Layers },
  { label: 'Merchant Tiers', value: '4', icon: Crown },
  { label: 'POS Variants', value: '13', icon: Smartphone },
  { label: 'Target Merchants Y1', value: '5,000', icon: Target },
];

// ──────────────────────────────────────────────
// DATA: Merchant Journey Phases
// ──────────────────────────────────────────────
const merchantJourney = [
  { phase: 'SIGNUP', title: 'Registration', description: 'Merchant submits application with business details, trade license, and bank info. Takes 5 minutes online.', color: 'text-blue-400', bgColor: 'bg-blue-500/20', borderColor: 'border-blue-500/50', icon: UserPlus, duration: '5 min' },
  { phase: 'PENDING', title: 'Verification Queue', description: 'KYB checks: trade license validation, beneficial owner screening, AML/CFT compliance review.', color: 'text-yellow-400', bgColor: 'bg-yellow-500/20', borderColor: 'border-yellow-500/50', icon: Clock, duration: '24-48 hrs' },
  { phase: 'VERIFIED', title: 'Approved & Setup', description: 'Account activated. Merchant configures POS, inventory, menu/catalog, payment methods, and staff access.', color: 'text-purple-400', bgColor: 'bg-purple-500/20', borderColor: 'border-purple-500/50', icon: Settings, duration: '1-3 days' },
  { phase: 'ACTIVE', title: 'Soft Launch', description: 'Merchant goes live in sandbox. Test transactions, staff training, workflow optimization before public launch.', color: 'text-orange-400', bgColor: 'bg-orange-500/20', borderColor: 'border-orange-500/50', icon: Activity, duration: '3-7 days' },
  { phase: 'LIVE', title: 'Fully Operational', description: 'Merchant visible on Nuqta consumer app. Accepting payments, processing orders, earning ecosystem rewards.', color: 'text-emerald-400', bgColor: 'bg-emerald-500/20', borderColor: 'border-emerald-500/50', icon: Zap, duration: 'Ongoing' },
];

// ──────────────────────────────────────────────
// DATA: Merchant Tiers (Detailed)
// ──────────────────────────────────────────────
const merchantTiers = [
  {
    name: 'Free',
    price: '0 AED/mo',
    color: 'text-slate-300',
    borderColor: 'border-slate-600',
    bgColor: 'bg-slate-800/50',
    icon: Store,
    bestFor: 'Solo vendors, market stalls, pop-ups',
    features: ['Basic POS (SimplePOS only)', '100 transactions/month', '1 staff account', 'Basic sales reports', 'Email support', 'Standard settlement (T+3)'],
    limits: ['No CRM or analytics', 'No offline mode', 'No API access', 'No multi-location'],
  },
  {
    name: 'Basic',
    price: '299 AED/mo',
    color: 'text-blue-400',
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
    icon: Briefcase,
    bestFor: 'Small shops, cafes, salons',
    features: ['All POS variants', 'Unlimited transactions', '5 staff accounts', 'Advanced analytics', 'Priority support', 'Next-day settlement (T+1)', 'Inventory management', 'Customer database'],
    limits: ['No CRM automation', 'No AI insights', 'Limited API calls'],
  },
  {
    name: 'Golden',
    price: '599 AED/mo',
    color: 'text-[#c9a227]',
    borderColor: 'border-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    icon: Award,
    bestFor: 'Restaurants, retail chains, growing businesses',
    features: ['Everything in Basic', 'Full CRM + automation', 'Advanced analytics + forecasting', '15 staff accounts', 'Multi-location (up to 3)', 'Same-day settlement', 'Loyalty program builder', 'Marketing campaign tools', 'Supplier management'],
    limits: ['No custom API integrations', 'No white-label options'],
  },
  {
    name: 'Diamond',
    price: '999 AED/mo',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-400',
    bgColor: 'bg-cyan-400/10',
    icon: Crown,
    bestFor: 'Enterprise chains, franchises, large operations',
    features: ['Everything in Golden', 'Unlimited staff accounts', 'Unlimited locations', 'Full API access + webhooks', 'Custom integrations', 'White-label POS option', 'AI-powered insights', 'Dedicated account manager', 'Instant settlement', 'Priority feature requests', 'SLA guarantee (99.9%)'],
    limits: [],
  },
];

// ──────────────────────────────────────────────
// DATA: POS Variants (13)
// ──────────────────────────────────────────────
const posVariants = [
  { name: 'SimplePOS', description: 'Basic tap-and-pay for small vendors. Cart, payment, receipt.', icon: Smartphone, category: 'Core', color: 'text-blue-400' },
  { name: 'OfflinePOS', description: 'Works without internet. Syncs when connection restores.', icon: WifiOff, category: 'Core', color: 'text-slate-400' },
  { name: 'SoftPOS', description: 'Turn any NFC-enabled phone into a payment terminal.', icon: Phone, category: 'Core', color: 'text-purple-400' },
  { name: 'CategoryPOS', description: 'Industry-specific layouts for retail, F&B, services.', icon: Layers, category: 'Specialized', color: 'text-emerald-400' },
  { name: 'QR Ordering', description: 'Customers scan QR, browse menu, order & pay from phone.', icon: QrCode, category: 'F&B', color: 'text-orange-400' },
  { name: 'TablePOS', description: 'Full restaurant management: tables, courses, split bills.', icon: UtensilsCrossed, category: 'F&B', color: 'text-red-400' },
  { name: 'KioskPOS', description: 'Self-service kiosk mode for fast food and retail.', icon: Monitor, category: 'Self-Service', color: 'text-cyan-400' },
  { name: 'DeliveryPOS', description: 'Integrated with Wasil for delivery order management.', icon: Truck, category: 'Delivery', color: 'text-yellow-400' },
  { name: 'AppointmentPOS', description: 'Booking + POS for salons, clinics, and service businesses.', icon: CalendarDays, category: 'Services', color: 'text-pink-400' },
  { name: 'InvoicePOS', description: 'B2B invoicing with payment tracking and credit terms.', icon: FileText, category: 'B2B', color: 'text-indigo-400' },
  { name: 'SubscriptionPOS', description: 'Recurring billing for memberships, SaaS, subscriptions.', icon: Repeat, category: 'Recurring', color: 'text-violet-400' },
  { name: 'MarketplacePOS', description: 'Multi-vendor marketplace with split payments.', icon: ShoppingCart, category: 'Marketplace', color: 'text-teal-400' },
  { name: 'EventPOS', description: 'Ticketing, entry management, and concession sales.', icon: Star, category: 'Events', color: 'text-amber-400' },
];

// ──────────────────────────────────────────────
// DATA: Unit Economics
// ──────────────────────────────────────────────
const unitEconomics = [
  { metric: 'Avg Merchant GMV', value: '50,000 AED/mo', description: 'Average gross merchandise value processed per merchant monthly', icon: DollarSign, color: 'text-emerald-400' },
  { metric: 'Commission Rate', value: '15-20%', description: 'Platform commission on marketplace orders', icon: Percent, color: 'text-blue-400' },
  { metric: 'MDR (Payment Processing)', value: '2.0%', description: 'Merchant discount rate on card transactions', icon: CreditCard, color: 'text-purple-400' },
  { metric: 'SaaS Fee Range', value: '299-999 AED/mo', description: 'Monthly subscription depending on tier', icon: Coins, color: 'text-[#c9a227]' },
  { metric: 'Avg Revenue Per Merchant', value: '1,450 AED/mo', description: 'Blended: SaaS + commissions + MDR + add-ons', icon: TrendingUp, color: 'text-cyan-400' },
  { metric: 'Customer Acquisition Cost', value: '2,500 AED', description: 'Fully loaded CAC including sales and onboarding', icon: UserPlus, color: 'text-orange-400' },
  { metric: 'LTV (36-month)', value: '52,200 AED', description: 'Lifetime value over 3-year merchant relationship', icon: LineChart, color: 'text-pink-400' },
  { metric: 'LTV:CAC Ratio', value: '20.9x', description: 'Excellent unit economics - target is >3x', icon: BarChart, color: 'text-emerald-400' },
];

// ──────────────────────────────────────────────
// DATA: Revenue Model
// ──────────────────────────────────────────────
const revenueStreams = [
  { stream: 'SaaS Subscriptions', description: 'Monthly tier fees from Free to Diamond (299-999 AED/mo). Predictable recurring revenue.', percentage: 35, value: '2.1M AED Y1', icon: Coins, color: 'from-blue-500 to-blue-600' },
  { stream: 'Transaction Commissions', description: 'Marketplace commission on orders (15-20%). Scales with merchant GMV growth.', percentage: 30, value: '1.8M AED Y1', icon: Receipt, color: 'from-emerald-500 to-emerald-600' },
  { stream: 'Payment Processing (MDR)', description: 'Merchant discount rate on all card payments (2%). Volume-driven revenue stream.', percentage: 20, value: '1.2M AED Y1', icon: CreditCard, color: 'from-purple-500 to-purple-600' },
  { stream: 'Premium Features', description: 'Add-ons: advanced analytics, AI insights, white-label, custom integrations.', percentage: 10, value: '600K AED Y1', icon: Star, color: 'from-orange-500 to-orange-600' },
  { stream: 'Hardware Leasing', description: 'POS terminals, kiosks, barcode scanners, receipt printers on monthly lease.', percentage: 5, value: '300K AED Y1', icon: Monitor, color: 'from-cyan-500 to-cyan-600' },
];

// ──────────────────────────────────────────────
// DATA: Market Opportunity
// ──────────────────────────────────────────────
const marketData = [
  { label: 'SMEs in UAE', value: '300,000+', description: 'Registered small and medium enterprises', icon: Building2, color: 'text-blue-400' },
  { label: 'Avg Monthly Tool Spend', value: '5,000 AED', description: 'Average SME spending on business tools per month', icon: DollarSign, color: 'text-emerald-400' },
  { label: 'Target Y1 Merchants', value: '5,000', description: '1.7% market penetration in Year 1', icon: Target, color: 'text-purple-400' },
  { label: 'UAE TAM', value: '18B AED', description: 'Total addressable market for merchant services', icon: Globe, color: 'text-[#c9a227]' },
  { label: 'GCC TAM', value: '65B AED', description: 'Total GCC merchant services market', icon: Map, color: 'text-cyan-400' },
  { label: 'Digital Adoption Rate', value: '78%', description: 'UAE SMEs adopting digital tools (growing 15% YoY)', icon: TrendingUp, color: 'text-orange-400' },
];

// ──────────────────────────────────────────────
// DATA: Competitor Analysis
// ──────────────────────────────────────────────
const competitors = [
  { name: 'Lightspeed', origin: 'Canada', strengths: 'Mature POS, global presence, strong retail features', weaknesses: 'Expensive, no MENA focus, no ecosystem play', pricing: 'From $69/mo', marketShare: 'Global' },
  { name: 'Foodics', origin: 'Saudi Arabia', strengths: 'Strong F&B focus, Arabic-first, regional presence', weaknesses: 'F&B only, no BNPL integration, limited ecosystem', pricing: 'From 199 SAR/mo', marketShare: 'MENA' },
  { name: 'iiko', origin: 'Russia/UAE', strengths: 'Advanced restaurant management, cloud-based', weaknesses: 'Complex setup, limited payment integrations', pricing: 'Custom pricing', marketShare: 'MENA/CIS' },
  { name: 'Poster', origin: 'Ukraine/UAE', strengths: 'User-friendly, affordable, good for small F&B', weaknesses: 'Limited features, no marketplace, small team', pricing: 'From $39/mo', marketShare: 'MENA' },
];

const bizOneAdvantages = [
  'Full ecosystem integration (Nuqta, Qist, Wasil, Hawil)',
  'Built-in BNPL at checkout via Qist',
  'Consumer app driving traffic to merchants',
  'Loyalty and rewards via Nuqta coins',
  'Multi-industry POS (13 variants vs 1-2)',
  'Settlement via Hawil (instant, same-day)',
  'GCC-first design with Arabic-first UI',
  'Integrated delivery via Wasil network',
];

// ──────────────────────────────────────────────
// DATA: Roadmap
// ──────────────────────────────────────────────
const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Core POS + Inventory',
    timeline: 'Q2-Q3 2027',
    status: 'In Progress',
    color: 'text-blue-400',
    borderColor: 'border-blue-500',
    items: ['SimplePOS + SoftPOS launch', 'Basic inventory management', 'Card payment processing', 'Merchant onboarding portal', 'Settlement via Hawil', 'Basic analytics dashboard', 'iOS + Android + Web POS'],
  },
  {
    phase: 'Phase 2',
    title: 'CRM + Analytics + Qist',
    timeline: 'Q4 2027',
    status: 'Planned',
    color: 'text-purple-400',
    borderColor: 'border-purple-500',
    items: ['Qist BNPL integration at checkout', 'Customer CRM module', 'Advanced analytics + reports', 'Loyalty program builder', 'Staff management system', 'Push notification campaigns', 'Adzy advertising platform'],
  },
  {
    phase: 'Phase 3',
    title: 'Multi-store + Offline',
    timeline: 'Q1-Q2 2028',
    status: 'Planned',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500',
    items: ['Multi-location management', 'OfflinePOS with sync', 'KioskPOS self-service mode', 'QR ordering system', 'TablePOS for restaurants', 'Supplier portal (Inventora)', 'B2B invoicing module'],
  },
  {
    phase: 'Phase 4',
    title: 'AI Insights + Scale',
    timeline: 'Q3-Q4 2028',
    status: 'Future',
    color: 'text-[#c9a227]',
    borderColor: 'border-[#c9a227]',
    items: ['AI demand forecasting', 'Predictive inventory management', 'Dynamic pricing suggestions', 'Automated marketing campaigns', 'GCC multi-country rollout', 'Franchise management module', 'White-label POS for enterprises'],
  },
];

// ──────────────────────────────────────────────
// DATA: Risk Analysis
// ──────────────────────────────────────────────
const risks = [
  { risk: 'Merchant Churn', severity: 'High', probability: 'Medium', impact: 'Revenue loss, wasted CAC', mitigation: 'Annual contracts with discounts, sticky ecosystem integrations, dedicated success managers for Golden/Diamond tiers', icon: Users, color: 'text-red-400' },
  { risk: 'Hardware Costs', severity: 'Medium', probability: 'High', impact: 'Margin pressure on hardware leasing', mitigation: 'SoftPOS reduces hardware dependency, leasing model spreads cost, bulk procurement partnerships', icon: Monitor, color: 'text-orange-400' },
  { risk: 'Competition', severity: 'High', probability: 'High', impact: 'Price wars, feature catch-up', mitigation: 'Ecosystem moat (no competitor has Nuqta+Qist+Wasil+Hawil), focus on switching costs', icon: Shield, color: 'text-yellow-400' },
  { risk: 'Integration Complexity', severity: 'Medium', probability: 'Medium', impact: 'Slow onboarding, merchant frustration', mitigation: 'Pre-built integrations, dedicated integration team, sandbox testing environment', icon: Database, color: 'text-blue-400' },
  { risk: 'Regulatory Changes', severity: 'High', probability: 'Low', impact: 'License revocation, compliance costs', mitigation: 'Proactive compliance team, regulatory advisors in each GCC market, modular architecture', icon: FileText, color: 'text-purple-400' },
  { risk: 'Data Security Breach', severity: 'Critical', probability: 'Low', impact: 'Trust loss, legal liability, fines', mitigation: 'PCI-DSS Level 1, end-to-end encryption, SOC2 Type II, regular pen testing, bug bounty', icon: Lock, color: 'text-red-500' },
];

// ──────────────────────────────────────────────
// DATA: Ecosystem Integration
// ──────────────────────────────────────────────
const ecosystemConnections = [
  { app: 'Nuqta', arabic: 'نقطة', description: 'BizOne merchants are auto-listed on the Nuqta consumer super-app. Consumers discover, browse, and buy from BizOne merchants directly.', benefit: '500K+ consumer base driving organic traffic to your store', icon: ShoppingCart, color: 'text-blue-400', bgColor: 'bg-blue-500/10' },
  { app: 'Qist', arabic: 'قسط', description: 'BNPL integrated at every BizOne checkout. Customers pay in installments, merchants receive full payment upfront minus a small fee.', benefit: '45% increase in basket size, 30% more conversions', icon: Wallet, color: 'text-purple-400', bgColor: 'bg-purple-500/10' },
  { app: 'Wasil', arabic: 'وصل', description: 'One-tap delivery for any BizOne merchant. Orders placed through Nuqta or BizOne POS auto-dispatch to nearest Wasil driver.', benefit: 'Delivery in 30 min, no need for own fleet', icon: Truck, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10' },
  { app: 'Hawil', arabic: 'حويل', description: 'Merchant settlements processed through Hawil. Instant, same-day, or T+1 settlement depending on tier. Full reconciliation.', benefit: 'Fastest settlement in GCC, full financial visibility', icon: CreditCard, color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10' },
];

// ──────────────────────────────────────────────
// DATA: Staff Management
// ──────────────────────────────────────────────
const staffFeatures = [
  { feature: 'Shift Scheduling', description: 'Create and manage staff shifts with drag-and-drop calendar. Auto-notify staff of schedule changes. Track overtime.', icon: CalendarDays, color: 'text-blue-400' },
  { feature: 'Role-Based Permissions', description: '7 permission levels from Cashier to Owner. Control access to reports, refunds, discounts, settings, and financial data.', icon: Key, color: 'text-purple-400' },
  { feature: 'Payroll Integration', description: 'Track hours worked, calculate wages, generate payroll reports. Export to WPS (Wage Protection System) format for UAE compliance.', icon: DollarSign, color: 'text-emerald-400' },
  { feature: 'Commission Tracking', description: 'Set commission rules per product, category, or total sales. Real-time leaderboards motivate staff performance.', icon: TrendingUp, color: 'text-orange-400' },
  { feature: 'Activity Logging', description: 'Every action logged: voids, refunds, discounts, drawer opens. Full audit trail for loss prevention.', icon: Eye, color: 'text-red-400' },
  { feature: 'Performance Analytics', description: 'Per-staff metrics: sales volume, average transaction, upsell rate, customer ratings. Identify top performers.', icon: BarChart3, color: 'text-cyan-400' },
];

// ──────────────────────────────────────────────
// COMPONENT
// ──────────────────────────────────────────────
export default function BizOnePage() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>('bizone');
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedTier, setExpandedTier] = useState<string | null>('Basic');
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'products', label: 'Suite Products', icon: Store },
    { id: 'journey', label: 'How It Works', icon: ArrowRight },
    { id: 'tiers', label: 'Merchant Tiers', icon: Crown },
    { id: 'pos', label: 'POS Variants', icon: Smartphone },
    { id: 'economics', label: 'Unit Economics', icon: Calculator },
    { id: 'revenue', label: 'Revenue Model', icon: DollarSign },
    { id: 'market', label: 'Market', icon: Globe },
    { id: 'competitors', label: 'Competitors', icon: Shield },
    { id: 'ecosystem', label: 'Ecosystem', icon: Share2 },
    { id: 'staff', label: 'Staff Mgmt', icon: Users },
    { id: 'roadmap', label: 'Roadmap', icon: Map },
    { id: 'risks', label: 'Risk Analysis', icon: AlertTriangle },
    { id: 'gcc', label: 'GCC Expansion', icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* ════════════════════════════════════════════════════════════════
          HERO SECTION
         ════════════════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-br from-[#0a1628] via-blue-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full mb-6">
            <Store className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-bold">Merchant Operating System</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2">
            <span className="text-blue-400">BizOne</span> — Merchant Operating System
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 mb-2 font-medium">for 500+ Businesses</p>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mb-8">
            Everything merchants need to thrive in the Nuqta ecosystem. Unified dashboard,
            13 POS variants, inventory management, CRM, analytics, and advertising platform.
            All integrated, all designed for GCC businesses.
          </p>

          {/* Key Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {heroStats.map((stat, i) => (
              <div key={i} className="bg-blue-500/10 rounded-xl p-3 sm:p-4 text-center border border-blue-500/30 hover:border-blue-400/60 transition-colors">
                <stat.icon className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                <div className="text-xl sm:text-2xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-4">
            {successMetrics.map((item, i) => (
              <div key={i} className="bg-emerald-500/10 rounded-xl p-4 text-center border border-emerald-500/30">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400">{item.value}</div>
                <div className="text-xs sm:text-sm text-slate-400">{item.metric}</div>
                <div className="text-[10px] text-slate-500 mt-1">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          TABS NAVIGATION
         ════════════════════════════════════════════════════════════════ */}
      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-2 gap-1 sm:gap-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
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

      {/* ════════════════════════════════════════════════════════════════
          MAIN CONTENT
         ════════════════════════════════════════════════════════════════ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

        {/* ─────────────────────────────────────────────
            TAB: Overview
           ───────────────────────────────────────────── */}
        {activeTab === 'overview' && (
          <div className="space-y-6 sm:space-y-8">
            {/* What is BizOne */}
            <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/10 rounded-xl p-6 sm:p-8 border-2 border-blue-500">
              <h2 className="text-2xl font-bold text-white mb-4">What is BizOne?</h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                BizOne is the merchant operating system powering the Nuqta ecosystem. It provides every tool a business
                needs: point-of-sale, inventory management, customer CRM, staff management, analytics, and advertising --
                all connected to the Nuqta consumer super-app, Qist BNPL, Wasil delivery, and Hawil settlement network.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Suite Products', value: '4', sub: 'BizOne, NextaBizz, Inventora, Adzy' },
                  { label: 'POS Variants', value: '13', sub: 'From SimplePOS to EventPOS' },
                  { label: 'Merchant Tiers', value: '4', sub: 'Free, Basic, Golden, Diamond' },
                  { label: 'GCC Markets', value: '6', sub: 'UAE first, then 5 more' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">{item.value}</div>
                    <div className="text-sm font-medium text-white">{item.label}</div>
                    <div className="text-[10px] text-slate-500 mt-1">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Merchant Benefits */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6">Why Merchants Choose BizOne</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {merchantBenefits.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50 hover:border-slate-600 transition-colors">
                    <item.icon className={`w-8 h-8 ${item.color} mb-3`} />
                    <h4 className="text-white font-bold mb-2">{item.benefit}</h4>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Ecosystem Overview */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6">Ecosystem Integration at a Glance</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {ecosystemConnections.map((conn, i) => (
                  <div key={i} className={`${conn.bgColor} rounded-xl p-4 border border-slate-700/50`}>
                    <conn.icon className={`w-6 h-6 ${conn.color} mb-2`} />
                    <h4 className={`font-bold ${conn.color}`}>{conn.app} <span className="text-slate-500 text-xs">{conn.arabic}</span></h4>
                    <p className="text-slate-400 text-xs mt-1">{conn.benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────
            TAB: Suite Products
           ───────────────────────────────────────────── */}
        {activeTab === 'products' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">BizOne Suite Products</h2>
              <p className="text-slate-400 mt-1">Four integrated products forming the complete merchant operating system.</p>
            </div>
            {bizOneSuite.map((product) => (
              <div
                key={product.id}
                className={`${product.bgColor} border-2 rounded-xl overflow-hidden`}
                style={{ borderColor: product.textColor.includes('blue') ? '#3b82f6' : product.textColor.includes('purple') ? '#a855f7' : product.textColor.includes('emerald') ? '#10b981' : '#f97316' }}
              >
                <button
                  onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                  className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                      <product.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className={`text-lg sm:text-xl font-bold ${product.textColor}`}>
                          {product.name}
                        </h3>
                        <span className="text-slate-500 text-sm">{product.arabic}</span>
                        <span className="bg-slate-900/50 px-2 py-0.5 rounded text-xs text-slate-300">
                          {product.status}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm">{product.tagline}</p>
                    </div>
                  </div>
                  {expandedProduct === product.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                {expandedProduct === product.id && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                    <p className="text-slate-300 mb-6">{product.description}</p>
                    <h4 className="text-white font-bold mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                      {product.features.map((feature, i) => (
                        <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                          <feature.icon className={`w-6 h-6 ${product.textColor} mb-2`} />
                          <h5 className="text-white font-bold text-sm mb-1">{feature.name}</h5>
                          <p className="text-slate-400 text-xs">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                    <h4 className="text-white font-bold mb-4">Pricing</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {product.pricing.map((tier, i) => (
                        <div key={i} className={`bg-slate-900/50 rounded-xl p-4 border ${i === 1 ? `border-2 ${product.textColor.replace('text-', 'border-')}` : 'border-slate-700/50'}`}>
                          <h5 className={`font-bold text-lg ${i === 1 ? product.textColor : 'text-white'}`}>{tier.tier}</h5>
                          <div className="text-2xl font-bold text-white my-2">{tier.price}</div>
                          <ul className="space-y-1">
                            {tier.features.map((f, j) => (
                              <li key={j} className="text-slate-400 text-sm flex items-center gap-2">
                                <CheckCircle className={`w-3 h-3 ${product.textColor}`} />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ─────────────────────────────────────────────
            TAB: How It Works (Merchant Journey)
           ───────────────────────────────────────────── */}
        {activeTab === 'journey' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">How It Works</h2>
              <p className="text-slate-400 mt-1">5-phase merchant journey from signup to fully operational business.</p>
            </div>

            {/* Journey Flow */}
            <div className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-xl p-6 sm:p-8 border border-slate-700/50">
              <div className="flex items-center gap-2 mb-6">
                <ArrowRight className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-white">Merchant Onboarding Journey</h3>
              </div>
              <div className="space-y-4">
                {merchantJourney.map((step, i) => (
                  <div key={i} className="relative">
                    <div className={`${step.bgColor} rounded-xl p-4 sm:p-6 border ${step.borderColor}`}>
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className="flex items-center gap-3 sm:min-w-[200px]">
                          <div className={`w-10 h-10 rounded-lg ${step.bgColor} border ${step.borderColor} flex items-center justify-center`}>
                            <step.icon className={`w-5 h-5 ${step.color}`} />
                          </div>
                          <div>
                            <div className={`text-xs font-bold ${step.color} uppercase tracking-wider`}>{step.phase}</div>
                            <div className="text-white font-bold">{step.title}</div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-300 text-sm">{step.description}</p>
                        </div>
                        <div className={`${step.bgColor} rounded-lg px-3 py-1.5 border ${step.borderColor} whitespace-nowrap`}>
                          <div className="text-[10px] text-slate-500 uppercase">Duration</div>
                          <div className={`text-sm font-bold ${step.color}`}>{step.duration}</div>
                        </div>
                      </div>
                    </div>
                    {i < merchantJourney.length - 1 && (
                      <div className="flex justify-center py-1">
                        <ArrowRight className="w-4 h-4 text-slate-600 rotate-90" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Onboarding Checklist */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Merchant Onboarding Checklist</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { item: 'Trade License (valid)', required: true },
                  { item: 'Emirates ID of owner(s)', required: true },
                  { item: 'Bank account (UAE IBAN)', required: true },
                  { item: 'Business address proof', required: true },
                  { item: 'Menu/catalog (for F&B/retail)', required: false },
                  { item: 'Logo and branding assets', required: false },
                  { item: 'Staff list with roles', required: false },
                  { item: 'Existing POS data (for migration)', required: false },
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
                    <CheckCircle className={`w-4 h-4 ${doc.required ? 'text-emerald-400' : 'text-slate-500'}`} />
                    <span className="text-slate-300 text-sm">{doc.item}</span>
                    {doc.required && <span className="text-[10px] text-red-400 uppercase ml-auto">Required</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────
            TAB: Merchant Tiers
           ───────────────────────────────────────────── */}
        {activeTab === 'tiers' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">Merchant Tiers</h2>
              <p className="text-slate-400 mt-1">Four tiers designed to scale with your business. Start free, upgrade as you grow.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {merchantTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`${tier.bgColor} rounded-xl border-2 ${tier.borderColor} overflow-hidden`}
                >
                  <button
                    onClick={() => setExpandedTier(expandedTier === tier.name ? null : tier.name)}
                    className="w-full p-4 sm:p-6 text-left"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl ${tier.bgColor} border ${tier.borderColor} flex items-center justify-center`}>
                          <tier.icon className={`w-6 h-6 ${tier.color}`} />
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold ${tier.color}`}>{tier.name}</h3>
                          <div className="text-2xl font-black text-white">{tier.price}</div>
                        </div>
                      </div>
                      {expandedTier === tier.name ? (
                        <ChevronUp className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                    <p className="text-slate-400 text-sm mt-2">Best for: {tier.bestFor}</p>
                  </button>

                  {expandedTier === tier.name && (
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6 space-y-4">
                      <div>
                        <h4 className="text-white font-bold text-sm mb-2">Included Features</h4>
                        <ul className="space-y-1.5">
                          {tier.features.map((f, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                              <CheckCircle className={`w-3.5 h-3.5 ${tier.color} flex-shrink-0`} />
                              <span className="text-slate-300">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {tier.limits.length > 0 && (
                        <div>
                          <h4 className="text-white font-bold text-sm mb-2">Limitations</h4>
                          <ul className="space-y-1.5">
                            {tier.limits.map((l, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm">
                                <AlertTriangle className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                                <span className="text-slate-500">{l}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Tier Comparison Summary */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 overflow-x-auto">
              <h3 className="text-lg font-bold text-white mb-4">Quick Comparison</h3>
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-2 text-slate-400 font-medium">Feature</th>
                    <th className="text-center py-2 text-slate-300">Free</th>
                    <th className="text-center py-2 text-blue-400">Basic</th>
                    <th className="text-center py-2 text-[#c9a227]">Golden</th>
                    <th className="text-center py-2 text-cyan-400">Diamond</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  {[
                    { feature: 'Transactions', free: '100/mo', basic: 'Unlimited', golden: 'Unlimited', diamond: 'Unlimited' },
                    { feature: 'Staff Accounts', free: '1', basic: '5', golden: '15', diamond: 'Unlimited' },
                    { feature: 'POS Variants', free: 'SimplePOS', basic: 'All 13', golden: 'All 13', diamond: 'All 13' },
                    { feature: 'Locations', free: '1', basic: '1', golden: 'Up to 3', diamond: 'Unlimited' },
                    { feature: 'Settlement', free: 'T+3', basic: 'T+1', golden: 'Same-day', diamond: 'Instant' },
                    { feature: 'CRM', free: '--', basic: 'Basic', golden: 'Full + Auto', diamond: 'Full + Auto' },
                    { feature: 'Analytics', free: 'Basic', basic: 'Advanced', golden: 'Advanced + AI', diamond: 'AI + Custom' },
                    { feature: 'API Access', free: '--', basic: 'Limited', golden: 'Standard', diamond: 'Full + Webhooks' },
                    { feature: 'Support', free: 'Email', basic: 'Priority', golden: 'Priority', diamond: 'Dedicated AM' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-800">
                      <td className="py-2 text-white font-medium">{row.feature}</td>
                      <td className="py-2 text-center">{row.free}</td>
                      <td className="py-2 text-center">{row.basic}</td>
                      <td className="py-2 text-center">{row.golden}</td>
                      <td className="py-2 text-center">{row.diamond}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────
            TAB: POS Variants
           ───────────────────────────────────────────── */}
        {activeTab === 'pos' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">13 POS Variants</h2>
              <p className="text-slate-400 mt-1">One POS platform, 13 specialized configurations for every business type.</p>
            </div>

            {/* Category Groups */}
            {['Core', 'Specialized', 'F&B', 'Self-Service', 'Delivery', 'Services', 'B2B', 'Recurring', 'Marketplace', 'Events'].map((category) => {
              const categoryItems = posVariants.filter(v => v.category === category);
              if (categoryItems.length === 0) return null;
              return (
                <div key={category}>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">{category}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {categoryItems.map((variant, i) => (
                      <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-slate-600 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-slate-900/50 border border-slate-700 flex items-center justify-center">
                            <variant.icon className={`w-5 h-5 ${variant.color}`} />
                          </div>
                          <div>
                            <h4 className={`font-bold ${variant.color}`}>{variant.name}</h4>
                            <span className="text-[10px] text-slate-500 uppercase">{variant.category}</span>
                          </div>
                        </div>
                        <p className="text-slate-400 text-sm">{variant.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* POS Hardware Compatibility */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Hardware Compatibility</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { device: 'iPad / Android Tablet', support: 'Full POS', icon: Smartphone },
                  { device: 'Smartphone (NFC)', support: 'SoftPOS', icon: Phone },
                  { device: 'Desktop / Laptop', support: 'Web POS', icon: Monitor },
                  { device: 'Kiosk Terminal', support: 'KioskPOS', icon: Monitor },
                  { device: 'Receipt Printer', support: 'Bluetooth / USB', icon: Receipt },
                  { device: 'Barcode Scanner', support: 'Bluetooth / USB', icon: QrCode },
                  { device: 'Cash Drawer', support: 'Auto-open', icon: DollarSign },
                  { device: 'Kitchen Display', support: 'TablePOS / QR', icon: Monitor },
                ].map((hw, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50 text-center">
                    <hw.icon className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                    <div className="text-white text-sm font-medium">{hw.device}</div>
                    <div className="text-slate-500 text-xs">{hw.support}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────
            TAB: Unit Economics
           ───────────────────────────────────────────── */}
        {activeTab === 'economics' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">Unit Economics</h2>
              <p className="text-slate-400 mt-1">Per-merchant economics showing strong LTV:CAC ratio and healthy margins.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {unitEconomics.map((item, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                  <item.icon className={`w-6 h-6 ${item.color} mb-3`} />
                  <div className={`text-xl sm:text-2xl font-bold ${item.color}`}>{item.value}</div>
                  <div className="text-white font-medium text-sm mt-1">{item.metric}</div>
                  <div className="text-slate-500 text-xs mt-1">{item.description}</div>
                </div>
              ))}
            </div>

            {/* Revenue per Merchant Breakdown */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl p-6 border border-emerald-500/30">
              <h3 className="text-lg font-bold text-white mb-4">Revenue Breakdown per Merchant (Monthly)</h3>
              <div className="space-y-3">
                {[
                  { source: 'SaaS Subscription (avg)', amount: '450 AED', pct: 31, color: 'bg-blue-500' },
                  { source: 'Transaction Commission (15% of 50K GMV)', amount: '500 AED', pct: 34, color: 'bg-emerald-500' },
                  { source: 'MDR (2% of 50K card volume)', amount: '300 AED', pct: 21, color: 'bg-purple-500' },
                  { source: 'Premium Add-ons', amount: '120 AED', pct: 8, color: 'bg-orange-500' },
                  { source: 'Hardware Lease', amount: '80 AED', pct: 6, color: 'bg-cyan-500' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{item.source}</span>
                      <span className="text-white font-bold">{item.amount}</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className={`${item.color} rounded-full h-2 transition-all`} style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
                <div className="flex justify-between text-base font-bold mt-4 pt-3 border-t border-slate-700">
                  <span className="text-white">Total ARPU</span>
                  <span className="text-emerald-400">1,450 AED/mo</span>
                </div>
              </div>
            </div>

            {/* Payback Period */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">CAC Payback Analysis</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-slate-700/50">
                  <div className="text-2xl font-bold text-orange-400">2,500 AED</div>
                  <div className="text-sm text-slate-400">Customer Acquisition Cost</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-slate-700/50">
                  <div className="text-2xl font-bold text-blue-400">1.7 months</div>
                  <div className="text-sm text-slate-400">Payback Period</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-emerald-500/30">
                  <div className="text-2xl font-bold text-emerald-400">20.9x</div>
                  <div className="text-sm text-slate-400">LTV:CAC Ratio (36-mo)</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────
            TAB: Revenue Model
           ───────────────────────────────────────────── */}
        {activeTab === 'revenue' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">Revenue Model</h2>
              <p className="text-slate-400 mt-1">Five diversified revenue streams ensuring resilience and growth.</p>
            </div>

            <div className="space-y-4">
              {revenueStreams.map((stream, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 sm:p-6 border border-slate-700/50">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stream.color} flex items-center justify-center flex-shrink-0`}>
                      <stream.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-white font-bold">{stream.stream}</h4>
                        <span className="bg-slate-900/50 px-2 py-0.5 rounded text-xs text-slate-400">{stream.percentage}% of revenue</span>
                      </div>
                      <p className="text-slate-400 text-sm">{stream.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-emerald-400">{stream.value}</div>
                      <div className="text-xs text-slate-500">Projected Y1</div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 mt-3">
                    <div className={`bg-gradient-to-r ${stream.color} rounded-full h-2`} style={{ width: `${stream.percentage * 2}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Total Revenue Projection */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/10 rounded-xl p-6 border-2 border-emerald-500">
              <h3 className="text-lg font-bold text-white mb-4">Revenue Projections</h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {[
                  { year: 'Year 1', revenue: '6.0M AED', merchants: '5,000', arpu: '1,200 AED/mo' },
                  { year: 'Year 2', revenue: '18.5M AED', merchants: '12,000', arpu: '1,540 AED/mo' },
                  { year: 'Year 3', revenue: '42.0M AED', merchants: '25,000', arpu: '1,680 AED/mo' },
                  { year: 'Year 5', revenue: '120M AED', merchants: '60,000', arpu: '2,000 AED/mo' },
                ].map((proj, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 text-center border border-slate-700/50">
                    <div className="text-xs text-emerald-400 font-bold uppercase mb-1">{proj.year}</div>
                    <div className="text-xl font-bold text-white">{proj.revenue}</div>
                    <div className="text-xs text-slate-400 mt-1">{proj.merchants} merchants</div>
                    <div className="text-xs text-slate-500">ARPU: {proj.arpu}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────
            TAB: Market Opportunity
           ───────────────────────────────────────────── */}
        {activeTab === 'market' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">Market Opportunity</h2>
              <p className="text-slate-400 mt-1">Massive underserved market for integrated merchant solutions in GCC.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {marketData.map((item, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                  <item.icon className={`w-6 h-6 ${item.color} mb-3`} />
                  <div className={`text-2xl font-bold ${item.color}`}>{item.value}</div>
                  <div className="text-white font-medium text-sm mt-1">{item.label}</div>
                  <div className="text-slate-500 text-xs mt-1">{item.description}</div>
                </div>
              ))}
            </div>

            {/* Market Segmentation */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Target Market Segments</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { segment: 'Food & Beverage', size: '45,000+ outlets', penetration: 'High priority', share: '35%', icon: UtensilsCrossed, color: 'text-orange-400' },
                  { segment: 'Retail & Shopping', size: '80,000+ stores', penetration: 'High priority', share: '25%', icon: ShoppingCart, color: 'text-blue-400' },
                  { segment: 'Beauty & Wellness', size: '25,000+ salons', penetration: 'Medium priority', share: '15%', icon: Scissors, color: 'text-pink-400' },
                  { segment: 'Services & Repair', size: '35,000+ providers', penetration: 'Medium priority', share: '10%', icon: Settings, color: 'text-purple-400' },
                  { segment: 'Healthcare', size: '15,000+ clinics', penetration: 'Low priority (Y2)', share: '8%', icon: Heart, color: 'text-red-400' },
                  { segment: 'Automotive', size: '10,000+ shops', penetration: 'Low priority (Y2)', share: '7%', icon: Car, color: 'text-cyan-400' },
                ].map((seg, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <seg.icon className={`w-5 h-5 ${seg.color}`} />
                      <h4 className={`font-bold ${seg.color}`}>{seg.segment}</h4>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Market Size</span>
                        <span className="text-white">{seg.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Priority</span>
                        <span className="text-slate-300">{seg.penetration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Target Share</span>
                        <span className="text-emerald-400">{seg.share}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Drivers */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-bold text-white mb-4">Key Growth Drivers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'UAE government push for cashless economy (UAE Vision 2031)',
                  'SME sector growing 8% annually across GCC',
                  '78% of UAE SMEs adopting digital tools (15% YoY growth)',
                  'No dominant all-in-one merchant OS in the region',
                  'High smartphone penetration (98% in UAE)',
                  'Growing consumer preference for BNPL (Qist advantage)',
                  'E-commerce growing 25% YoY in GCC',
                  'Increasing regulatory support for fintech innovation',
                ].map((driver, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{driver}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────
            TAB: Competitor Analysis
           ───────────────────────────────────────────── */}
        {activeTab === 'competitors' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">Competitor Analysis</h2>
              <p className="text-slate-400 mt-1">BizOne vs existing merchant solutions in the GCC market.</p>
            </div>

            {/* Competitor Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {competitors.map((comp, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-bold text-lg">{comp.name}</h4>
                    <span className="text-xs text-slate-500 bg-slate-900/50 px-2 py-1 rounded">{comp.origin}</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-emerald-400 text-xs font-bold uppercase">Strengths</span>
                      <p className="text-slate-300 mt-0.5">{comp.strengths}</p>
                    </div>
                    <div>
                      <span className="text-red-400 text-xs font-bold uppercase">Weaknesses</span>
                      <p className="text-slate-400 mt-0.5">{comp.weaknesses}</p>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-slate-700">
                      <div>
                        <span className="text-slate-500 text-xs">Pricing</span>
                        <div className="text-white">{comp.pricing}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-500 text-xs">Market</span>
                        <div className="text-white">{comp.marketShare}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* BizOne Advantages */}
            <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/10 rounded-xl p-6 border-2 border-blue-500">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                BizOne Competitive Advantages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bizOneAdvantages.map((adv, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{adv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Comparison Table */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 overflow-x-auto">
              <h3 className="text-lg font-bold text-white mb-4">Feature Comparison</h3>
              <table className="w-full text-sm min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-2 text-slate-400 font-medium">Feature</th>
                    <th className="text-center py-2 text-blue-400 font-bold">BizOne</th>
                    <th className="text-center py-2 text-slate-400">Lightspeed</th>
                    <th className="text-center py-2 text-slate-400">Foodics</th>
                    <th className="text-center py-2 text-slate-400">iiko</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  {[
                    { feature: 'Multi-industry POS', bizone: '13 variants', ls: '2', foodics: '1 (F&B)', iiko: '1 (F&B)' },
                    { feature: 'Built-in BNPL', bizone: 'Qist', ls: 'No', foodics: 'No', iiko: 'No' },
                    { feature: 'Consumer App', bizone: 'Nuqta', ls: 'No', foodics: 'No', iiko: 'No' },
                    { feature: 'Delivery Network', bizone: 'Wasil', ls: '3rd party', foodics: '3rd party', iiko: '3rd party' },
                    { feature: 'Settlement Engine', bizone: 'Hawil', ls: 'Standard', foodics: 'Standard', iiko: 'Standard' },
                    { feature: 'Loyalty/Rewards', bizone: 'Nuqta Coins', ls: 'Basic', foodics: 'Basic', iiko: 'No' },
                    { feature: 'Arabic-first UI', bizone: 'Yes', ls: 'Translation', foodics: 'Yes', iiko: 'Translation' },
                    { feature: 'Offline POS', bizone: 'Yes', ls: 'Limited', foodics: 'Yes', iiko: 'Yes' },
                    { feature: 'Starting Price', bizone: 'Free', ls: '$69/mo', foodics: '199 SAR', iiko: 'Custom' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-800">
                      <td className="py-2 text-white font-medium">{row.feature}</td>
                      <td className="py-2 text-center text-blue-400 font-medium">{row.bizone}</td>
                      <td className="py-2 text-center">{row.ls}</td>
                      <td className="py-2 text-center">{row.foodics}</td>
                      <td className="py-2 text-center">{row.iiko}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────
            TAB: Ecosystem Integration
           ───────────────────────────────────────────── */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">Ecosystem Integration</h2>
              <p className="text-slate-400 mt-1">BizOne merchants are auto-connected to the full Nuqta ecosystem -- the unfair advantage.</p>
            </div>

            <div className="space-y-4">
              {ecosystemConnections.map((conn, i) => (
                <div key={i} className={`${conn.bgColor} rounded-xl p-5 sm:p-6 border border-slate-700/50`}>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl ${conn.bgColor} border border-slate-700 flex items-center justify-center flex-shrink-0`}>
                      <conn.icon className={`w-7 h-7 ${conn.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className={`text-lg font-bold ${conn.color}`}>{conn.app}</h4>
                        <span className="text-slate-500 text-sm">{conn.arabic}</span>
                      </div>
                      <p className="text-slate-300 text-sm mb-2">{conn.description}</p>
                      <div className={`inline-flex items-center gap-2 ${conn.bgColor} border border-slate-700 rounded-lg px-3 py-1.5`}>
                        <ArrowUpRight className={`w-3.5 h-3.5 ${conn.color}`} />
                        <span className="text-slate-300 text-xs">{conn.benefit}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Data Flow */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Ecosystem Data Flow</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { from: 'BizOne Merchant', to: 'Nuqta Consumer App', data: 'Product catalog, prices, availability, promotions', icon: ArrowRight },
                  { from: 'Nuqta Consumer', to: 'BizOne POS', data: 'Orders, payments, Nuqta coin redemptions', icon: ArrowRight },
                  { from: 'BizOne Checkout', to: 'Qist BNPL', data: 'Cart total, customer ID, installment request', icon: ArrowRight },
                  { from: 'BizOne Order', to: 'Wasil Delivery', data: 'Pickup address, items, delivery address, priority', icon: ArrowRight },
                  { from: 'BizOne Settlement', to: 'Hawil', data: 'Daily totals, commission deductions, net payout', icon: ArrowRight },
                  { from: 'BizOne Analytics', to: 'Adzy Campaign', data: 'Customer segments, purchase patterns, ROI metrics', icon: ArrowRight },
                ].map((flow, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 text-xs mb-2">
                      <span className="text-blue-400 font-bold">{flow.from}</span>
                      <flow.icon className="w-3 h-3 text-slate-600" />
                      <span className="text-emerald-400 font-bold">{flow.to}</span>
                    </div>
                    <p className="text-slate-400 text-xs">{flow.data}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────
            TAB: Staff Management
           ───────────────────────────────────────────── */}
        {activeTab === 'staff' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">Staff Management</h2>
              <p className="text-slate-400 mt-1">Complete workforce management: shifts, permissions, payroll, and performance tracking.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {staffFeatures.map((item, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-slate-600 transition-colors">
                  <item.icon className={`w-7 h-7 ${item.color} mb-3`} />
                  <h4 className={`font-bold ${item.color} mb-2`}>{item.feature}</h4>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Permission Levels */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">7 Permission Levels</h3>
              <div className="space-y-2">
                {[
                  { role: 'Owner', level: 7, access: 'Full access to everything including financial data, settings, and user management', color: 'text-red-400', bg: 'bg-red-500' },
                  { role: 'Manager', level: 6, access: 'All operations, staff management, reports. No billing or ownership settings.', color: 'text-orange-400', bg: 'bg-orange-500' },
                  { role: 'Supervisor', level: 5, access: 'Override discounts, process refunds, view shift reports, manage inventory.', color: 'text-yellow-400', bg: 'bg-yellow-500' },
                  { role: 'Senior Cashier', level: 4, access: 'Process sales, apply discounts (with limits), view own performance.', color: 'text-emerald-400', bg: 'bg-emerald-500' },
                  { role: 'Cashier', level: 3, access: 'Process sales only. No discounts, no refunds, no reports.', color: 'text-blue-400', bg: 'bg-blue-500' },
                  { role: 'Kitchen/Warehouse', level: 2, access: 'View orders, update status, manage stock counts.', color: 'text-purple-400', bg: 'bg-purple-500' },
                  { role: 'Viewer', level: 1, access: 'Read-only access to dashboard and basic reports.', color: 'text-slate-400', bg: 'bg-slate-500' },
                ].map((perm, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50 flex items-start gap-4">
                    <div className="flex items-center gap-2 min-w-[140px]">
                      <div className={`w-6 h-6 rounded ${perm.bg}/20 flex items-center justify-center`}>
                        <span className={`text-xs font-bold ${perm.color}`}>L{perm.level}</span>
                      </div>
                      <span className={`font-bold text-sm ${perm.color}`}>{perm.role}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{perm.access}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Commission Structures */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl p-6 border border-emerald-500/30">
              <h3 className="text-lg font-bold text-white mb-4">Commission Tracking Examples</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { type: 'Flat Rate', example: '2% on all sales', desc: 'Simple. Every sale earns the same percentage.' },
                  { type: 'Tiered', example: '1% < 10K, 2% < 50K, 3% > 50K', desc: 'Higher sales = higher commission rate.' },
                  { type: 'Category-Based', example: '5% on premium, 1% on basics', desc: 'Incentivize selling high-margin products.' },
                ].map((comm, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                    <h4 className="text-emerald-400 font-bold text-sm mb-1">{comm.type}</h4>
                    <div className="text-white text-sm font-medium mb-1">{comm.example}</div>
                    <p className="text-slate-500 text-xs">{comm.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────
            TAB: Roadmap
           ───────────────────────────────────────────── */}
        {activeTab === 'roadmap' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">Product Roadmap</h2>
              <p className="text-slate-400 mt-1">Four-phase rollout from core POS to AI-powered merchant intelligence.</p>
            </div>

            <div className="space-y-4">
              {roadmapPhases.map((phase, i) => (
                <div key={i} className={`bg-slate-800/50 rounded-xl p-5 sm:p-6 border-2 ${phase.borderColor}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`px-3 py-1 rounded-lg bg-slate-900/50 border ${phase.borderColor}`}>
                        <span className={`text-sm font-bold ${phase.color}`}>{phase.phase}</span>
                      </div>
                      <h3 className="text-white font-bold text-lg">{phase.title}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 text-sm">{phase.timeline}</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                        phase.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                        phase.status === 'Planned' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-slate-700/50 text-slate-400'
                      }`}>
                        {phase.status}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {phase.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CircleDot className={`w-3 h-3 ${phase.color} flex-shrink-0`} />
                        <span className="text-slate-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Milestones */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Key Milestones</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { milestone: '100 Merchants', target: 'Q2 2027', status: 'On Track' },
                  { milestone: '1,000 Merchants', target: 'Q4 2027', status: 'Planned' },
                  { milestone: '5,000 Merchants', target: 'Q2 2028', status: 'Target' },
                  { milestone: 'GCC Launch (3 markets)', target: 'Q4 2028', status: 'Target' },
                ].map((ms, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 text-center border border-slate-700/50">
                    <div className="text-white font-bold">{ms.milestone}</div>
                    <div className="text-blue-400 text-sm mt-1">{ms.target}</div>
                    <div className="text-xs text-slate-500 mt-1">{ms.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────
            TAB: Risk Analysis
           ───────────────────────────────────────────── */}
        {activeTab === 'risks' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">Risk Analysis</h2>
              <p className="text-slate-400 mt-1">Key risks identified with severity assessment and mitigation strategies.</p>
            </div>

            <div className="space-y-3">
              {risks.map((risk, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden">
                  <button
                    onClick={() => setExpandedRisk(expandedRisk === risk.risk ? null : risk.risk)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      <risk.icon className={`w-5 h-5 ${risk.color}`} />
                      <div>
                        <h4 className="text-white font-bold">{risk.risk}</h4>
                        <div className="flex items-center gap-3 mt-1">
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            risk.severity === 'Critical' ? 'bg-red-500/20 text-red-400' :
                            risk.severity === 'High' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            Severity: {risk.severity}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            risk.probability === 'High' ? 'bg-red-500/20 text-red-400' :
                            risk.probability === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-emerald-500/20 text-emerald-400'
                          }`}>
                            Probability: {risk.probability}
                          </span>
                        </div>
                      </div>
                    </div>
                    {expandedRisk === risk.risk ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  {expandedRisk === risk.risk && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 space-y-3">
                      <div>
                        <span className="text-red-400 text-xs font-bold uppercase">Impact</span>
                        <p className="text-slate-400 text-sm mt-0.5">{risk.impact}</p>
                      </div>
                      <div>
                        <span className="text-emerald-400 text-xs font-bold uppercase">Mitigation Strategy</span>
                        <p className="text-slate-300 text-sm mt-0.5">{risk.mitigation}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Risk Matrix */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Risk Heat Map Summary</h3>
              <div className="grid grid-cols-3 gap-2 max-w-md">
                <div className="text-center text-xs text-slate-500 pt-6"></div>
                <div className="text-center text-xs text-slate-500 pt-2">Med Probability</div>
                <div className="text-center text-xs text-slate-500 pt-2">High Probability</div>

                <div className="text-xs text-slate-500 flex items-center justify-end pr-2">High Severity</div>
                <div className="bg-orange-500/20 rounded-lg p-3 text-center border border-orange-500/30">
                  <span className="text-orange-400 text-xs font-bold">Churn</span>
                </div>
                <div className="bg-red-500/20 rounded-lg p-3 text-center border border-red-500/30">
                  <span className="text-red-400 text-xs font-bold">Competition</span>
                </div>

                <div className="text-xs text-slate-500 flex items-center justify-end pr-2">Med Severity</div>
                <div className="bg-yellow-500/20 rounded-lg p-3 text-center border border-yellow-500/30">
                  <span className="text-yellow-400 text-xs font-bold">Integration</span>
                </div>
                <div className="bg-orange-500/20 rounded-lg p-3 text-center border border-orange-500/30">
                  <span className="text-orange-400 text-xs font-bold">Hardware</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────
            TAB: GCC Expansion
           ───────────────────────────────────────────── */}
        {activeTab === 'gcc' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">GCC Expansion Plan</h2>
              <p className="text-slate-400 mt-1">UAE-first strategy with phased rollout across all six GCC markets.</p>
            </div>

            <div className="bg-gradient-to-r from-[#c9a227]/20 via-blue-500/10 to-emerald-500/10 rounded-xl p-6 sm:p-8 border-2 border-[#c9a227]">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#c9a227]" />
                GCC Merchant Network
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {gccAvailability.map((country, i) => (
                  <div key={i} className={`bg-slate-900/50 rounded-xl p-5 border-2 ${
                    country.status === 'Active' ? 'border-emerald-500' : 'border-slate-700'
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{country.flag}</span>
                        <h4 className="font-bold text-white">{country.country}</h4>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        country.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {country.status}
                      </span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Merchants</span>
                        <span className="text-white font-medium">{country.merchants}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Cities</span>
                        <span className="text-slate-300 text-xs">{country.cities}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Regulation</span>
                        <span className="text-slate-300 text-xs">{country.regulations}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expansion Strategy */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Expansion Strategy</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { phase: 'Wave 1 (2027)', markets: 'UAE (all emirates)', strategy: 'Full launch. Dominate home market. Build brand, perfect operations, prove unit economics.', merchants: '5,000 target' },
                  { phase: 'Wave 2 (Q3-Q4 2027)', markets: 'Saudi Arabia, Qatar', strategy: 'Leverage UAE success. Partner with local banks. Localize for Saudi/Qatari regulations.', merchants: '2,000 target' },
                  { phase: 'Wave 3 (2028)', markets: 'Kuwait, Bahrain, Oman', strategy: 'Replicate proven playbook. Local partnerships. Lighter operational footprint.', merchants: '3,000 target' },
                  { phase: 'Wave 4 (2029+)', markets: 'Egypt, Jordan, wider MENA', strategy: 'Evaluate based on GCC performance. Large markets with different economics.', merchants: 'TBD' },
                ].map((wave, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-5 border border-slate-700/50">
                    <h4 className="text-[#c9a227] font-bold mb-1">{wave.phase}</h4>
                    <div className="text-white text-sm font-medium mb-2">{wave.markets}</div>
                    <p className="text-slate-400 text-sm mb-2">{wave.strategy}</p>
                    <span className="text-emerald-400 text-xs font-bold">{wave.merchants}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Localization Requirements */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Localization Requirements per Market</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { req: 'Language', detail: 'AR/EN per market' },
                  { req: 'Currency', detail: 'AED, SAR, QAR...' },
                  { req: 'Tax (VAT)', detail: '5% UAE/SA, varies' },
                  { req: 'Payment Rails', detail: 'Local schemes' },
                  { req: 'KYB/KYC', detail: 'Per-country regs' },
                  { req: 'Data Residency', detail: 'In-country hosting' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 text-center border border-slate-700/50">
                    <div className="text-white text-sm font-bold">{item.req}</div>
                    <div className="text-slate-500 text-xs mt-1">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration Partners */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-400" />
                Third-Party Integrations
              </h3>
              <p className="text-slate-300 mb-4 text-sm">
                BizOne connects with the tools merchants already use -- e-commerce platforms, accounting software,
                ERPs, and delivery partners.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {integrations.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50 hover:border-purple-500/50 transition-colors">
                    <div className="text-3xl mb-2">{item.logo}</div>
                    <h4 className="text-white font-bold text-sm">{item.name}</h4>
                    <span className="text-purple-400 text-xs">{item.category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Developer API */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-emerald-400" />
                Developer API
              </h3>
              <p className="text-slate-300 mb-4 text-sm">
                Build custom integrations with our RESTful API. Full documentation, SDKs for popular languages,
                and sandbox environment for testing.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['REST API', 'Webhooks', 'SDKs', 'Sandbox'].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 text-center border border-emerald-500/30">
                    <span className="text-emerald-400 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>

      {/* ════════════════════════════════════════════════════════════════
          CTA SECTION
         ════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-blue-500/20 to-indigo-500/10 border-t border-blue-500/30 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Grow Your Business?</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Join 500+ merchants already thriving in the Nuqta ecosystem. Get started today with zero setup fees.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ecosystem"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-400 transition-colors"
            >
              <Store className="w-5 h-5" /> Apply Now
            </Link>
            <Link
              href="/rtmn-ecosystem"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-700 transition-colors"
            >
              <Package className="w-5 h-5" /> Full Ecosystem
            </Link>
          </div>
        </div>
      </section>

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
