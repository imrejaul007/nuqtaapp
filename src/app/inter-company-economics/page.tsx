'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Building2, ArrowRight, ArrowDown, DollarSign, Percent, CreditCard,
  Database, Store, Megaphone, Package, Layers, Truck, Shield, Globe,
  Users, Calendar, GraduationCap, Wallet, ChevronDown, ChevronUp,
  Stethoscope, Home, Car, Plane, Gamepad2, Sparkle, Heart,
  BarChart3, TrendingUp, Zap, CheckCircle, FileText, Network,
  Receipt, Repeat, ArrowLeftRight, Target, Clock, Lock,
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ============================================
// DATA: Hero Stats
// ============================================
const heroStats = [
  { label: 'Companies', value: '11', icon: Building2, color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10', borderColor: 'border-[#c9a227]/30' },
  { label: 'Billing Flows', value: '47', icon: ArrowLeftRight, color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
  { label: 'Revenue at Scale', value: '2B+', icon: DollarSign, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30' },
  { label: 'Billing Models', value: '6', icon: Receipt, color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30' },
];

// ============================================
// DATA: 6 Billing Model Types
// ============================================
const billingModels = [
  {
    id: 'transaction',
    name: 'Transaction Commission',
    arabic: 'عمولة المعاملات',
    icon: Percent,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    description: 'A percentage of every transaction processed. Scales with volume. Used when the provider directly enables revenue.',
    examples: ['Wasil charges 8-25% on orders', 'RTMN Finance charges 0.3-1.2% payment gateway', 'Nuqta Corp charges 5-15% cashback funding fee'],
    bestFor: 'High-volume revenue-generating services',
  },
  {
    id: 'saas',
    name: 'SaaS Subscription',
    arabic: 'اشتراك شهري',
    icon: CreditCard,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    description: 'Fixed monthly fee per merchant, per employee, or per company. Predictable recurring revenue.',
    examples: ['BizOne charges AED 199-2,000/mo per merchant', 'Inventora charges AED 399-1,999/mo warehouse SaaS', 'NextaBizz charges AED 399-1,999/mo marketplace SaaS'],
    bestFor: 'Platform tools, dashboards, software products',
  },
  {
    id: 'cost-allocation',
    name: 'Cost Allocation',
    arabic: 'توزيع التكاليف',
    icon: Database,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    description: 'Infrastructure costs split by API calls, storage, and headcount. Used for shared backbone services.',
    examples: ['Rabtul allocates by API calls + data storage', 'Group Shared Services by headcount ratio', 'Customer Experience Hub by ticket volume'],
    bestFor: 'Infrastructure, shared services, support',
  },
  {
    id: 'revenue-share',
    name: 'Revenue Share',
    arabic: 'حصة الإيرادات',
    icon: Repeat,
    color: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]/30',
    description: 'A percentage of revenue generated through the service. Aligns incentives — provider earns only when the client earns.',
    examples: ['Adzy takes 20-35% of ad revenue generated', 'Eventora takes 5-15% of ticket sales', 'Nuqta takes % of social commerce affiliate revenue'],
    bestFor: 'Marketing, advertising, lead generation',
  },
  {
    id: 'per-unit',
    name: 'Per-Unit Fee',
    arabic: 'رسوم لكل وحدة',
    icon: Receipt,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    description: 'Fixed fee per delivery, per employee, per course, per service rendered. Clear, simple, auditable.',
    examples: ['Wasil charges AED 5-20 per delivery', 'Tadreeb charges AED 50-200 per course per employee', 'Khedma charges AED 500-5,000 per government service'],
    bestFor: 'Delivery, training, professional services',
  },
  {
    id: 'spread',
    name: 'Spread / Margin',
    arabic: 'هامش الربح',
    icon: TrendingUp,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    description: 'Markup on cost — buy at wholesale, sell at retail. Captures margin on financial products and supply chain.',
    examples: ['RTMN Finance: 18-36% APR on credit', 'Inventora: 8-20% markup on inventory', 'Hawil: 0.2-0.7% FX spread on remittance'],
    bestFor: 'Finance, supply chain, foreign exchange',
  },
];

// ============================================
// DATA: Complete Inter-Company Billing Matrix
// ============================================
const billingMatrix = [
  {
    id: 'rabtul',
    provider: 'Rabtul Technologies',
    icon: Database,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    totalRevenue: 'AED 64-130M/yr',
    billingType: 'Cost Allocation + API Pricing',
    clients: [
      {
        client: 'All 10 Sister Companies',
        service: 'Identity (KYC), Wallet Engine, Event Bus, Analytics, AI/ML Models',
        model: 'Cost Allocation',
        rate: 'Proportional to API calls + data storage + headcount',
        example: 'Nuqta makes 50M API calls/mo → pays 15% of Rabtul infra cost ≈ AED 125K/mo',
        sla: '99.99% uptime, <200ms latency, <30s KYC',
      },
      {
        client: 'External (Phase 3+)',
        service: 'Rabtul PaaS — white-label identity, wallet, events',
        model: 'SaaS Subscription',
        rate: 'AED 5,000-50,000/mo per client + AED 0.001 per API call',
        example: 'External fintech uses Rabtul wallet API → AED 15K/mo + usage fees',
        sla: '99.95% uptime, dedicated support',
      },
    ],
    rules: [
      'Year 1-2: Pure cost center — costs allocated proportionally, no profit margin',
      'Year 3+: Begins external PaaS licensing with 40-60% gross margin',
      'Internal companies never pay profit margin — only actual cost allocation',
      'Billing reconciliation: monthly, auto-calculated via Rabtul metering',
    ],
  },
  {
    id: 'bizone',
    provider: 'BizOne Technologies',
    icon: Store,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    totalRevenue: 'AED 104-210M/yr',
    billingType: 'SaaS Subscription + Transaction Fee',
    clients: [
      {
        client: 'External Merchants (500K target)',
        service: 'POS, CRM, Inventory, WhatsApp Marketing, Analytics Dashboard',
        model: 'SaaS Subscription',
        rate: 'AED 199/mo (Basic) | AED 499/mo (Pro) | AED 999/mo (Premium) | AED 2,000/mo (Enterprise)',
        example: 'Restaurant subscribes to Pro → AED 499/mo for POS + CRM + inventory + 1 WhatsApp campaign/mo',
        sla: '99.9% POS uptime, <4h support response',
      },
      {
        client: 'External Merchants',
        service: 'Payment Gateway Processing (NuqtaPay via BizOne POS)',
        model: 'Transaction Commission',
        rate: '0.25-1.2% per transaction (card: 1.2%, wallet: 0.25%, bank transfer: 0.5%)',
        example: 'Merchant processes AED 100K/mo → pays AED 250-1,200 gateway fees',
        sla: '<3s transaction processing',
      },
      {
        client: 'Wasil, Adzy, RTMN Finance',
        service: 'Merchant data feed, inventory sync, sales analytics API',
        model: 'Cost Allocation',
        rate: 'AED 0.005 per data sync + monthly base AED 10K per sister company',
        example: 'Wasil syncs 1M menu items/mo → AED 5K + AED 10K base = AED 15K/mo',
        sla: '99.9% data accuracy, <5min sync lag',
      },
    ],
    rules: [
      'Merchant onboarding: AED 0 setup fee — we eat the cost to lock them in',
      'Hardware (POS terminal): AED 500-2,000 one-time or AED 99/mo lease',
      'Sister companies get merchant data at cost — no profit margin on internal data feeds',
      '12-month lock-in for Pro/Premium tiers — 3-month notice for cancellation',
    ],
  },
  {
    id: 'nuqta',
    provider: 'Nuqta Corporation',
    icon: Sparkle,
    color: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]/30',
    totalRevenue: 'AED 89-175M/yr',
    billingType: 'Commission + Membership + Breakage',
    clients: [
      {
        client: 'External Merchants',
        service: 'Cashback Loyalty Program — merchant funds 5-20% cashback in Nuqta Coins',
        model: 'Transaction Commission',
        rate: '5-15% platform fee on cashback amount funded by merchant',
        example: 'Merchant funds AED 10K cashback/mo → Nuqta takes 10% = AED 1,000/mo platform fee',
        sla: 'Real-time coin issuance, merchant dashboard within 24h',
      },
      {
        client: 'Consumers (10M+ users)',
        service: 'Nuqta+ Membership — enhanced cashback, free deliveries, priority support',
        model: 'SaaS Subscription',
        rate: 'AED 99/mo (Plus) | AED 199/mo (Gold) | AED 399/mo (Privé)',
        example: '250K subscribers × AED 185 avg ARPU = AED 46.25M/yr MRR at scale',
        sla: 'Instant coin credit, dedicated Privé concierge',
      },
      {
        client: 'All Sister Companies',
        service: 'User engagement channel — push notifications, coin incentives, social commerce',
        model: 'Revenue Share',
        rate: '5-12% affiliate commission on cross-sell orders driven by Nuqta',
        example: 'Nuqta drives AED 500K orders to Wasil/mo → takes 8% = AED 40K/mo',
        sla: '>5% CTR on cross-sell, attribution tracking via Rabtul',
      },
    ],
    rules: [
      'Coin breakage (20-35% never redeemed) is pure profit for Nuqta Corp',
      'Merchants choose their cashback % (5-20%) — higher % = better placement in app',
      'Sister company cross-sell commissions are 50% lower than external merchant rates',
      'Nuqta+ benefits (free Wasil deliveries, Rakab rides) → Nuqta reimburses sister companies at cost',
    ],
  },
  {
    id: 'wasil',
    provider: 'Wasil Apps',
    icon: Truck,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    totalRevenue: 'AED 180-360M/yr',
    billingType: 'Commission + Delivery Fee + Subscription',
    clients: [
      {
        client: 'External Merchants',
        service: 'Marketplace listing + delivery logistics across 24 verticals',
        model: 'Transaction Commission',
        rate: '8-25% per order (Food: 20-25%, Grocery: 8-12%, Pharmacy: 10-15%, Retail: 15-20%)',
        example: 'Restaurant with AED 80 avg order × 3,000 orders/mo × 22% = AED 52,800/mo commission',
        sla: '<30min delivery, real-time tracking',
      },
      {
        client: 'Consumers',
        service: 'Delivery fee + Wasil Prime subscription',
        model: 'Per-Unit Fee + Subscription',
        rate: 'AED 0-20 per delivery (distance-based) | Wasil Prime: AED 49/mo for free deliveries',
        example: 'User orders 15x/mo × AED 8 avg delivery = AED 120/mo OR Prime at AED 49/mo',
        sla: 'Free delivery on orders >AED 50 for Prime members',
      },
      {
        client: 'All Sister Companies',
        service: 'Shared fleet logistics — last-mile delivery for any RTMN product',
        model: 'Per-Unit Fee',
        rate: 'AED 5-15 per delivery (at cost, no margin for sister companies)',
        example: 'Inventora uses Wasil fleet for 10K bulk deliveries/mo → AED 8 avg = AED 80K/mo',
        sla: '<2h same-day delivery, fleet priority for sister companies',
      },
    ],
    rules: [
      'Shared fleet serves all 24 verticals — utilization target >85% (vs industry 40-60%)',
      'Sister company deliveries at cost — 30-40% cheaper than external fleet',
      'Commission tier drops for high-volume merchants (>5K orders/mo → 2% discount)',
      'Nuqta+ member orders: delivery fee waived, Nuqta reimburses Wasil at AED 5/delivery',
    ],
  },
  {
    id: 'rtmn-finance',
    provider: 'RTMN Finance',
    icon: Wallet,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    totalRevenue: 'AED 164-330M/yr',
    billingType: 'Transaction Fee + APR + Spread',
    clients: [
      {
        client: 'All RTMN Companies (via NuqtaPay)',
        service: 'Payment gateway — card, wallet, bank transfer, Apple/Google Pay',
        model: 'Transaction Commission',
        rate: '0.3-1.2% per transaction (Card: 1.2%, NuqtaPay Wallet: 0.3%, Bank: 0.5%)',
        example: 'RTMN ecosystem processes AED 6B GMV → AED 50-100M gateway revenue',
        sla: '<3s processing, 99.99% uptime, PCI DSS Level 1',
      },
      {
        client: 'External Merchants',
        service: 'Merchant Credit — working capital loans based on BizOne sales data',
        model: 'Spread (Interest)',
        rate: '18-36% APR (risk-tiered: A-grade 18%, B-grade 24%, C-grade 36%)',
        example: 'Merchant borrows AED 50K for 12 months at 24% APR → AED 12K interest revenue',
        sla: '<24h approval, auto-debit from daily settlement',
      },
      {
        client: 'Consumers (via Qist)',
        service: 'BNPL — Buy Now Pay Later for all RTMN purchases',
        model: 'Transaction Commission (MDR)',
        rate: '5-30% Merchant Discount Rate (Grocery: 5%, Electronics: 15%, Fashion: 20-30%)',
        example: 'Consumer buys AED 3,000 phone on Qist → merchant pays 15% MDR = AED 450 to RTMN Finance',
        sla: 'Instant approval, 3-12 month installments, 0% for consumer',
      },
      {
        client: 'Consumers (via Hawil)',
        service: 'Remittance — international money transfers',
        model: 'Spread (FX)',
        rate: '0.2-0.7% FX spread (corridor-dependent: UAE→India 0.3%, UAE→PH 0.5%)',
        example: 'User sends AED 5,000 to India → RTMN Finance earns AED 15 on FX spread',
        sla: '<24h delivery, best-rate guarantee',
      },
      {
        client: 'All Sister Companies',
        service: 'Treasury management — cash pooling, inter-company settlement',
        model: 'Cost Allocation',
        rate: 'AED 0 — internal treasury is a shared service (Group CFO oversight)',
        example: 'Daily auto-settlement between Wasil, BizOne, Nuqta → zero manual intervention',
        sla: 'T+1 settlement, real-time balance visibility',
      },
    ],
    rules: [
      'All RTMN transactions MUST flow through NuqtaPay — no external payment gateways',
      'Merchant credit auto-approvals based on 90-day BizOne sales history (no manual underwriting)',
      'Qist BNPL: consumer pays 0%, merchant absorbs MDR — Nuqta+ members get higher limits',
      'Hawil is the entry drug: cheapest remittance → capture user → cross-sell entire ecosystem',
    ],
  },
  {
    id: 'adzy',
    provider: 'Adzy Media Network',
    icon: Megaphone,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    totalRevenue: 'AED 114-230M/yr',
    billingType: 'Revenue Share + CPC/CPM',
    clients: [
      {
        client: 'External Merchants & Brands',
        service: 'Digital advertising — CPC, CPM, sponsored placements across all RTMN apps',
        model: 'Revenue Share',
        rate: 'CPC: AED 0.5-5 per click | CPM: AED 10-80 per 1K impressions | Sponsored: AED 500-5K/day',
        example: 'Restaurant spends AED 5K/mo on Wasil sponsored listing → Adzy keeps 70%, Wasil gets 30%',
        sla: '>2% CTR on targeted ads, real-time analytics dashboard',
      },
      {
        client: 'External Brands',
        service: 'Influencer campaigns — managed campaigns via RTMN creator network',
        model: 'Revenue Share',
        rate: '20-35% commission on influencer campaign spend',
        example: 'Brand spends AED 100K on influencer campaign → Adzy takes AED 25K (25%), creators get AED 75K',
        sla: '>10K impressions per AED 100 spent, brand safety guarantee',
      },
      {
        client: 'All Sister Companies',
        service: 'Internal marketing — user acquisition campaigns, cross-sell promotions',
        model: 'Cost Allocation + Performance Fee',
        rate: 'At cost + 10% performance bonus if CPA target hit (vs 20-35% for external)',
        example: 'Wasil needs 50K new users → Adzy runs campaign at AED 3.50 CPA = AED 175K + AED 17.5K bonus',
        sla: 'Guaranteed CPA within 15% of target, weekly optimization reports',
      },
    ],
    rules: [
      'Sister companies get advertising at cost + 10% performance bonus (vs 20-35% external margin)',
      'Adzy has exclusive right to sell ads across ALL RTMN apps — no direct ad sales by sister companies',
      'Revenue share with host app: 70% Adzy / 30% host app for ads shown in their interface',
      'User data for targeting stays in Rabtul — Adzy gets anonymized segments only',
    ],
  },
  {
    id: 'inventora',
    provider: 'Inventora Supply Co.',
    icon: Package,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    totalRevenue: 'AED 87-175M/yr',
    billingType: 'Margin + SaaS + Delivery Fee',
    clients: [
      {
        client: 'External Merchants',
        service: 'Bulk inventory supply — wholesale goods with credit terms',
        model: 'Spread (Margin)',
        rate: '8-20% markup on cost (FMCG: 8-12%, Fresh: 15-20%, Non-food: 12-18%)',
        example: 'Restaurant orders AED 50K/mo supplies → Inventora makes AED 6K margin (12%)',
        sla: 'Next-day delivery for orders before 2PM, real-time stock visibility',
      },
      {
        client: 'External Merchants',
        service: 'Inventory management SaaS + demand forecasting AI',
        model: 'SaaS Subscription',
        rate: 'AED 399/mo (Basic) | AED 999/mo (Pro with AI) | AED 1,999/mo (Enterprise)',
        example: 'Chain restaurant (5 locations) subscribes to Pro → AED 999/mo for AI demand forecasting',
        sla: '>90% demand forecast accuracy, <2h stock alert response',
      },
      {
        client: 'Wasil, BizOne, NextaBizz',
        service: 'Shared warehouse + fulfillment for e-commerce and delivery',
        model: 'Per-Unit Fee',
        rate: 'AED 2-8 per order picked + packed | AED 15-50/pallet/mo storage',
        example: 'Wasil uses Inventora warehouse for 50K grocery orders/mo → AED 4 avg = AED 200K/mo',
        sla: '<2h pick-pack for standard orders, <4h for cold chain',
      },
    ],
    rules: [
      'Sister companies get warehouse services at cost + 5% ops margin (vs 15-25% for external)',
      'Merchant credit on inventory purchases: 30/60/90 day terms via RTMN Finance',
      'Inventora has exclusive supply partnership for all RTMN-powered merchants',
      'Bulk pricing tiers: >AED 100K/mo orders get 3% additional discount',
    ],
  },
  {
    id: 'nextabizz',
    provider: 'NextaBizz Holdings',
    icon: Globe,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    totalRevenue: 'AED 84-170M/yr',
    billingType: 'Commission + SaaS + Logistics Margin',
    clients: [
      {
        client: 'External B2B Sellers',
        service: 'B2B marketplace — wholesale trading, procurement, RFQ matching',
        model: 'Transaction Commission',
        rate: '5-12% per transaction (Standard: 8%, Premium listing: 5%, New seller: 12%)',
        example: 'Supplier sells AED 200K/mo on NextaBizz → pays 8% = AED 16K/mo commission',
        sla: 'Payment guarantee via escrow, <48h dispute resolution',
      },
      {
        client: 'External B2B Sellers',
        service: 'NextaShip — cross-border logistics for B2B orders',
        model: 'Spread (Logistics Margin)',
        rate: '8-15% margin on shipping cost (domestic: 8%, GCC cross-border: 12%, intl: 15%)',
        example: 'Seller ships AED 10K container UAE→KSA → NextaBizz earns AED 1,200 logistics margin',
        sla: '<72h GCC delivery, end-to-end tracking',
      },
      {
        client: 'Inventora, BizOne',
        service: 'Supplier discovery + procurement API for merchant supply chain',
        model: 'Per-Unit Fee',
        rate: 'AED 50-200 per verified supplier match + AED 0.01 per API call',
        example: 'Inventora sources 100 new suppliers/mo → AED 100 avg = AED 10K/mo',
        sla: '<48h supplier verification, credit-checked profiles',
      },
    ],
    rules: [
      'Trade finance (credit for B2B buyers) provided by RTMN Finance — NextaBizz earns 2% referral fee',
      'Sister company procurement through NextaBizz gets 0% commission (but sellers still pay)',
      'Premium listings: AED 999-4,999/mo for featured placement on marketplace',
      'Lead generation fees: AED 10-50 per qualified RFQ match for sellers',
    ],
  },
  {
    id: 'travel',
    provider: 'Travel Co. (Safar + Rakab + Airzy)',
    icon: Plane,
    color: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/30',
    totalRevenue: 'AED 74-150M/yr (Airzy) + rides + bookings',
    billingType: 'Commission + Per-Ride Fee',
    clients: [
      {
        client: 'Consumers (Safar)',
        service: 'Travel booking — flights, hotels, experiences',
        model: 'Transaction Commission',
        rate: '5-15% booking commission (Hotels: 15%, Flights: 5-8%, Experiences: 20%)',
        example: 'User books AED 2,000 hotel → Safar earns AED 300 (15% commission)',
        sla: 'Best price guarantee, 24h cancellation',
      },
      {
        client: 'Consumers (Rakab)',
        service: 'Ride-hailing — shared fleet with Wasil drivers',
        model: 'Transaction Commission',
        rate: '20-25% commission on ride fare + AED 2-5 booking fee',
        example: 'User takes AED 40 ride → Rakab takes 22% = AED 8.80 + AED 3 booking = AED 11.80',
        sla: '<5min pickup, shared with Wasil fleet for >85% utilization',
      },
      {
        client: 'Wasil',
        service: 'Shared fleet — Rakab drivers deliver Wasil orders during low-ride hours',
        model: 'Revenue Share',
        rate: '80% to driver, 10% to Rakab, 10% to Wasil (for delivery dispatch)',
        example: 'Driver earns AED 8K/mo: AED 5K rides (Rakab) + AED 3K deliveries (Wasil)',
        sla: 'Seamless driver switching, <30s order assignment',
      },
      {
        client: 'Consumers (Airzy)',
        service: 'Airport services — lounge, retail, taxi, FX',
        model: 'Transaction Commission',
        rate: 'Retail: 10-25%, Lounge: AED 50-200/booking, Taxi: 10-20%, FX: 0.3-0.7%',
        example: 'Tourist spends AED 500 at airport → Airzy earns AED 75-125 in commissions',
        sla: 'Pre-arrival booking, QR-based access',
      },
    ],
    rules: [
      'Rakab and Wasil share the SAME fleet — drivers toggle between rides and deliveries',
      'Fleet utilization target: 85%+ (industry average 40-60%) = 30-40% cost savings',
      'Nuqta+ members: 3/8/15 free Rakab rides per month (Nuqta reimburses at cost)',
      'Safar bookings earn 2x Nuqta Coins — cross-sell engine for travel → commerce',
    ],
  },
  {
    id: 'vertical-services',
    provider: 'Vertical Services (Khedma + Amana + Tawzeef + Tadreeb + Eventora + Majlis)',
    icon: Layers,
    color: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/30',
    totalRevenue: 'AED 44-90M (Eventora) + services',
    billingType: 'Per-Service Fee + SaaS + Revenue Share',
    clients: [
      {
        client: 'All Sister Companies (Khedma)',
        service: 'Government services — trade license, visa, PRO, Emirates ID',
        model: 'Per-Unit Fee',
        rate: 'AED 500-5,000 per service (Trade License: AED 2,500, Visa: AED 1,500, PRO: AED 500/mo)',
        example: 'New sister company setup: trade license + 10 visas + PRO = AED 19,500',
        sla: '<48h submission, tracking dashboard, 0 fines guarantee',
      },
      {
        client: 'All Sister Companies (Amana)',
        service: 'Compliance & regulatory — AML, KYC, data privacy, insurance',
        model: 'SaaS Subscription',
        rate: 'AED 5,000-25,000/mo per company (based on complexity and transaction volume)',
        example: 'RTMN Finance (highest compliance needs) → AED 25K/mo for full AML/KYC/regulatory',
        sla: '0 regulatory fines, <72h DPA notification, quarterly audit reports',
      },
      {
        client: 'All Sister Companies (Tawzeef)',
        service: 'HR & recruitment — hiring, payroll, WPS, ESOP',
        model: 'Per-Employee Fee',
        rate: 'AED 50-150/employee/mo (Basic: AED 50, Full HR: AED 100, Executive: AED 150)',
        example: 'BizOne with 200 employees on Full HR → AED 100 × 200 = AED 20K/mo',
        sla: '<14 days to fill standard roles, WPS compliance, zero payroll errors',
      },
      {
        client: 'All Sister Companies (Tadreeb)',
        service: 'Training & certification — onboarding, compliance, skills',
        model: 'Per-Unit Fee',
        rate: 'AED 50-500 per course per employee (Compliance: AED 50, Technical: AED 200, Leadership: AED 500)',
        example: 'Wasil trains 500 riders on food safety → AED 50 × 500 = AED 25K',
        sla: '>90% completion rate, certification tracking, quarterly skill assessments',
      },
      {
        client: 'External Clients (Eventora)',
        service: 'Event management — ticketing, vendor coordination, QR check-in',
        model: 'Transaction Commission',
        rate: '5-15% on ticket sales + 10-25% vendor commission',
        example: 'Concert with AED 500K ticket sales → Eventora takes 10% = AED 50K',
        sla: 'End-to-end event ops, real-time capacity tracking',
      },
      {
        client: 'External Clients (Majlis)',
        service: 'Community & social — co-working spaces, meetups, networking',
        model: 'SaaS Subscription + Per-Event Fee',
        rate: 'AED 299-999/mo membership + AED 1,000-10,000 per hosted event',
        example: 'Business hosts monthly networking event → AED 499/mo + AED 3K/event = AED 3,499/mo',
        sla: 'Premium venues, curated attendee matching',
      },
    ],
    rules: [
      'Khedma & Amana are mandatory for ALL sister companies — non-negotiable compliance',
      'Tawzeef handles ALL hiring across the group — no independent recruitment allowed',
      'Tadreeb compliance courses are mandatory — company CEOs accountable for completion rates',
      'Eventora + SpinZy gamification = engagement loop (SpinZy games at events drive app installs)',
    ],
  },
];

// ============================================
// DATA: Money Flow Example
// ============================================
const moneyFlowSteps = [
  { step: 1, actor: 'Tourist', action: 'Arrives at Dubai Airport', app: 'Airzy', flow: 'Converts AED 5,000 via Hawil', earned: 'AED 15 FX spread → RTMN Finance' },
  { step: 2, actor: 'Tourist', action: 'Downloads Nuqta (prompted by Airzy)', app: 'Nuqta', flow: 'Signs up, gets 50 free Nuqta Coins', earned: 'New user acquired at AED 0 CAC' },
  { step: 3, actor: 'Tourist', action: 'Books hotel via Safar', app: 'Safar', flow: 'AED 2,000 hotel booking', earned: 'AED 300 commission (15%) → Travel Co.' },
  { step: 4, actor: 'Tourist', action: 'Takes Rakab to hotel', app: 'Rakab', flow: 'AED 45 ride fare', earned: 'AED 11 commission (22%+fee) → Travel Co.' },
  { step: 5, actor: 'Tourist', action: 'Orders dinner via Wasil', app: 'Wasil', flow: 'AED 120 food order', earned: 'AED 27 commission (22%) + AED 8 delivery → Wasil' },
  { step: 6, actor: 'Restaurant', action: 'Receives order via BizOne POS', app: 'BizOne', flow: 'AED 120 processed', earned: 'AED 1.44 gateway fee (1.2%) → RTMN Finance' },
  { step: 7, actor: 'Tourist', action: 'Earns Nuqta Coins on dinner', app: 'Nuqta', flow: 'Restaurant funded 10% = AED 12 in coins', earned: 'AED 1.20 platform fee (10%) → Nuqta Corp' },
  { step: 8, actor: 'Restaurant', action: 'Reorders supplies', app: 'Inventora', flow: 'AED 5,000 bulk order', earned: 'AED 600 margin (12%) → Inventora' },
  { step: 9, actor: 'Restaurant', action: 'Runs Adzy campaign', app: 'Adzy', flow: 'AED 500 ad spend', earned: 'AED 500 ad revenue → Adzy (70%) + Wasil (30%)' },
  { step: 10, actor: 'Tourist', action: 'Uses Qist for shopping', app: 'Qist (BNPL)', flow: 'AED 3,000 electronics purchase', earned: 'AED 450 MDR (15%) → RTMN Finance' },
];

// ============================================
// DATA: Settlement Rules
// ============================================
const settlementRules = [
  { rule: 'Daily Settlement', description: 'All merchant payouts settled T+1 (next business day). Merchant receives order amount minus commission minus gateway fee.', applies: 'Wasil, BizOne, Nuqta, Eventora' },
  { rule: 'Weekly Inter-Company', description: 'Sister company invoices reconciled weekly (every Sunday). Net amounts transferred Monday. Auto-calculated by Rabtul.', applies: 'All 11 companies' },
  { rule: 'Monthly Cost Allocation', description: 'Rabtul infrastructure, shared services, and group overhead allocated monthly by the 5th. Based on API calls + headcount + revenue.', applies: 'Rabtul, Group Shared Services' },
  { rule: 'Quarterly True-Up', description: 'Quarterly review of all inter-company rates. Adjustments for volume changes, new products, SLA breaches. Group CFO sign-off.', applies: 'All billing relationships' },
  { rule: 'SLA Penalty Credits', description: 'If a provider misses SLA (e.g., Rabtul <99.99% uptime), automatic credit of 2x the affected billing amount to the client company.', applies: 'All providers with SLA commitments' },
  { rule: 'No Double-Dipping', description: 'A single transaction generates revenue for max 3 companies. Example: Order → Wasil (commission) + RTMN Finance (gateway) + Nuqta (coin fee). No more.', applies: 'Ecosystem-wide rule' },
];

// ============================================
// COMPONENT
// ============================================
export default function InterCompanyEconomicsPage() {
  const [expandedProvider, setExpandedProvider] = useState<string | null>('rabtul');
  const [expandedModel, setExpandedModel] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/10 via-transparent to-emerald-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/30 mb-6">
            <DollarSign className="w-4 h-4 text-[#c9a227]" />
            <span className="text-sm font-medium text-[#c9a227]">Inter-Company Economics</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
            How Every Company{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-yellow-500">
              Charges Every Other
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-4">
            كيف تُحاسب كل شركة الأخرى
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10">
            The complete billing matrix — commissions, subscriptions, cost allocations, revenue shares, per-unit fees, and spreads.
            Every dirham tracked, every flow documented.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {heroStats.map((stat) => (
              <div key={stat.label} className={`${stat.bgColor} border ${stat.borderColor} rounded-xl p-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: The 6 Billing Models */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-3">
              6 Billing Models — <span className="text-[#c9a227]">One Ecosystem</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every inter-company charge falls into one of these six models. Clear rules, no ambiguity.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {billingModels.map((model) => (
              <div
                key={model.id}
                className={`${model.bgColor} border ${model.borderColor} rounded-xl p-6 cursor-pointer transition-all hover:scale-[1.02]`}
                onClick={() => setExpandedModel(expandedModel === model.id ? null : model.id)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <model.icon className={`w-6 h-6 ${model.color}`} />
                  <h3 className="font-bold">{model.name}</h3>
                </div>
                <p className="text-xs text-slate-500 mb-2">{model.arabic}</p>
                <p className="text-sm text-slate-300 mb-4">{model.description}</p>
                {expandedModel === model.id && (
                  <div className="space-y-2 pt-3 border-t border-white/10">
                    {model.examples.map((ex, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className={`w-4 h-4 ${model.color} mt-0.5 shrink-0`} />
                        <span className="text-slate-300">{ex}</span>
                      </div>
                    ))}
                    <div className="mt-3 text-xs text-slate-500">Best for: {model.bestFor}</div>
                  </div>
                )}
                <div className="flex items-center gap-1 text-xs text-slate-500 mt-2">
                  {expandedModel === model.id ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  <span>{expandedModel === model.id ? 'Less' : 'Examples'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Complete Billing Matrix */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-3">
              Complete Billing Matrix — <span className="text-emerald-400">Every Provider, Every Client</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Click each company to see exactly what they charge, who they charge, the rate, and a real example.
            </p>
          </div>
          <div className="space-y-4">
            {billingMatrix.map((provider) => (
              <div key={provider.id} className={`border ${provider.borderColor} rounded-xl overflow-hidden`}>
                {/* Provider Header */}
                <button
                  className={`w-full ${provider.bgColor} px-6 py-5 flex items-center justify-between cursor-pointer`}
                  onClick={() => setExpandedProvider(expandedProvider === provider.id ? null : provider.id)}
                >
                  <div className="flex items-center gap-4">
                    <provider.icon className={`w-7 h-7 ${provider.color}`} />
                    <div className="text-left">
                      <h3 className="font-bold text-lg">{provider.provider}</h3>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span>{provider.billingType}</span>
                        <span className={`font-semibold ${provider.color}`}>{provider.totalRevenue}</span>
                      </div>
                    </div>
                  </div>
                  {expandedProvider === provider.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                {/* Expanded Content */}
                {expandedProvider === provider.id && (
                  <div className="p-6 space-y-6">
                    {/* Client Rows */}
                    {provider.clients.map((client, idx) => (
                      <div key={idx} className="bg-slate-800/50 rounded-lg p-5 border border-white/5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <div>
                            <span className="text-sm font-semibold text-white">{client.client}</span>
                            <span className="mx-2 text-slate-600">→</span>
                            <span className="text-sm text-slate-400">{client.service}</span>
                          </div>
                          <span className={`text-xs px-3 py-1 rounded-full ${provider.bgColor} ${provider.color} font-medium shrink-0`}>
                            {client.model}
                          </span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Rate</div>
                            <div className="text-slate-200 font-medium">{client.rate}</div>
                          </div>
                          <div>
                            <div className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Example</div>
                            <div className="text-slate-300">{client.example}</div>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-white/5">
                          <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">SLA</div>
                          <div className="text-xs text-slate-400">{client.sla}</div>
                        </div>
                      </div>
                    ))}

                    {/* Rules */}
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-white/5">
                      <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                        <Lock className="w-4 h-4 text-[#c9a227]" />
                        Locked Billing Rules
                      </h4>
                      <div className="space-y-2">
                        {provider.rules.map((rule, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                            <span className="text-slate-400">{rule}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Money Flow Example */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-3">
              One Tourist, <span className="text-[#c9a227]">10 Revenue Events</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Watch how a single tourist generates revenue for 8 different companies in 24 hours — and how each company bills the others.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-3">
            {moneyFlowSteps.map((step, idx) => (
              <div key={step.step} className="flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-[#c9a227]/20 border border-[#c9a227]/40 flex items-center justify-center text-sm font-bold text-[#c9a227]">
                  {step.step}
                </div>
                <div className="flex-1 bg-slate-800/50 rounded-lg p-4 border border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="text-sm">
                      <span className="font-semibold text-white">{step.actor}</span>
                      <span className="text-slate-400"> — {step.action}</span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                      {step.app}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm">
                    <div className="text-slate-300 flex-1">{step.flow}</div>
                    <div className="text-emerald-400 font-medium sm:text-right shrink-0">{step.earned}</div>
                  </div>
                </div>
                {idx < moneyFlowSteps.length - 1 && (
                  <div className="hidden sm:block" />
                )}
              </div>
            ))}
            <div className="mt-6 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-[#c9a227] mb-2">Total Revenue from 1 Tourist in 24 Hours</div>
              <div className="text-3xl font-bold text-white mb-2">~AED 1,960</div>
              <div className="text-sm text-slate-400">
                From AED 10,665 in spending → 8 companies earned revenue → Zero leakage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Settlement Rules */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-3">
              Settlement & Reconciliation — <span className="text-purple-400">The Rules</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              How money moves between companies. Automated, auditable, non-negotiable.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {settlementRules.map((rule, idx) => (
              <div key={idx} className="bg-slate-800/30 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-purple-400" />
                  </div>
                  <h3 className="font-bold">{rule.rule}</h3>
                </div>
                <p className="text-sm text-slate-300 mb-3">{rule.description}</p>
                <div className="text-xs text-slate-500">
                  Applies to: <span className="text-slate-400">{rule.applies}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Key Principle — Internal vs External Pricing */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-3">
              Internal vs External — <span className="text-emerald-400">The Pricing Principle</span>
            </h2>
            <p className="text-slate-400">Sister companies ALWAYS get a better deal than external clients.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Service</th>
                  <th className="text-left py-3 px-4 text-red-400 font-medium">External Rate</th>
                  <th className="text-left py-3 px-4 text-emerald-400 font-medium">Internal Rate</th>
                  <th className="text-left py-3 px-4 text-[#c9a227] font-medium">Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-3 px-4 text-slate-300">Rabtul Infrastructure</td>
                  <td className="py-3 px-4 text-red-300">AED 5K-50K/mo + usage</td>
                  <td className="py-3 px-4 text-emerald-300">Cost allocation only</td>
                  <td className="py-3 px-4 text-[#c9a227]">40-60%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-300">Adzy Advertising</td>
                  <td className="py-3 px-4 text-red-300">20-35% revenue share</td>
                  <td className="py-3 px-4 text-emerald-300">Cost + 10% performance bonus</td>
                  <td className="py-3 px-4 text-[#c9a227]">50-70%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-300">Wasil Fleet Delivery</td>
                  <td className="py-3 px-4 text-red-300">AED 10-25 per delivery</td>
                  <td className="py-3 px-4 text-emerald-300">AED 5-15 (at cost)</td>
                  <td className="py-3 px-4 text-[#c9a227]">30-40%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-300">Inventora Warehouse</td>
                  <td className="py-3 px-4 text-red-300">15-25% margin</td>
                  <td className="py-3 px-4 text-emerald-300">Cost + 5% ops margin</td>
                  <td className="py-3 px-4 text-[#c9a227]">60-75%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-300">NextaBizz Procurement</td>
                  <td className="py-3 px-4 text-red-300">5-12% commission</td>
                  <td className="py-3 px-4 text-emerald-300">0% commission (seller pays)</td>
                  <td className="py-3 px-4 text-[#c9a227]">100%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-300">Nuqta Cross-Sell</td>
                  <td className="py-3 px-4 text-red-300">5-12% affiliate commission</td>
                  <td className="py-3 px-4 text-emerald-300">2.5-6% (50% discount)</td>
                  <td className="py-3 px-4 text-[#c9a227]">50%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-300">BizOne Merchant Data</td>
                  <td className="py-3 px-4 text-red-300">N/A (not sold externally)</td>
                  <td className="py-3 px-4 text-emerald-300">AED 10K/mo + usage</td>
                  <td className="py-3 px-4 text-[#c9a227]">At cost</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-300">RTMN Finance Treasury</td>
                  <td className="py-3 px-4 text-red-300">N/A</td>
                  <td className="py-3 px-4 text-emerald-300">AED 0 (shared service)</td>
                  <td className="py-3 px-4 text-[#c9a227]">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <Lock className="w-5 h-5 text-emerald-400" />
              <h3 className="font-bold text-emerald-400">The Golden Rule</h3>
            </div>
            <p className="text-sm text-slate-300">
              Sister companies never pay profit margin to each other for core services. External clients subsidize the ecosystem.
              This creates an unbeatable cost advantage — every RTMN company operates at 30-70% lower cost than competitors who use external vendors.
              The savings compound across all 11 companies, creating a structural moat no single-product competitor can match.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Revenue Summary */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-3">
              Revenue at Scale — <span className="text-[#c9a227]">AED 1-2B+/yr</span>
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Company</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Primary Revenue Model</th>
                  <th className="text-right py-3 px-4 text-slate-400 font-medium">Revenue Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { company: 'RTMN Finance', model: 'Gateway + APR + BNPL MDR + FX', range: 'AED 164-330M' },
                  { company: 'Wasil Apps', model: 'Order commission + delivery + subscription', range: 'AED 180-360M' },
                  { company: 'Adzy Media', model: 'CPC/CPM + influencer + sponsored', range: 'AED 114-230M' },
                  { company: 'BizOne Tech', model: 'SaaS subscription + gateway fee', range: 'AED 104-210M' },
                  { company: 'Nuqta Corp', model: 'Cashback fee + membership + breakage', range: 'AED 89-175M' },
                  { company: 'Inventora', model: 'Inventory margin + warehouse SaaS', range: 'AED 87-175M' },
                  { company: 'NextaBizz', model: 'B2B commission + logistics margin', range: 'AED 84-170M' },
                  { company: 'Travel Co.', model: 'Booking commission + ride fees + airport', range: 'AED 74-150M' },
                  { company: 'Rabtul', model: 'Cost allocation → PaaS licensing (Y3+)', range: 'AED 64-130M' },
                  { company: 'Eventora+', model: 'Ticketing + vendor commission + SaaS', range: 'AED 44-90M' },
                  { company: 'Vertical Services', model: 'Per-service + per-employee + SaaS', range: 'AED 40-80M' },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-3 px-4 text-white font-medium">{row.company}</td>
                    <td className="py-3 px-4 text-slate-300">{row.model}</td>
                    <td className="py-3 px-4 text-emerald-400 font-semibold text-right">{row.range}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-[#c9a227]/30 bg-[#c9a227]/5">
                  <td className="py-4 px-4 text-[#c9a227] font-bold text-lg">TOTAL</td>
                  <td className="py-4 px-4 text-slate-300">Combined ecosystem revenue at scale</td>
                  <td className="py-4 px-4 text-[#c9a227] font-bold text-lg text-right">AED 1,044-2,100M</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 8: Quick Access */}
      <section className="py-12 bg-slate-800/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'RTMN Hub', href: '/rtmn' },
              { name: 'Team Blueprint', href: '/team-blueprint' },
              { name: 'Business Solutions', href: '/business-solutions' },
              { name: 'Value Chain', href: '/value-chain' },
              { name: 'Monetization', href: '/monetization' },
              { name: 'RTMN Group', href: '/rtmn-group' },
              { name: 'Complete Roadmap', href: '/roadmap' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-lg bg-slate-700/50 border border-white/10 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
