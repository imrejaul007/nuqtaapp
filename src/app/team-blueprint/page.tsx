'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Building2, Users, Shield, Briefcase, Target, Crown,
  Store, Megaphone, Package, Layers, Database, DollarSign,
  GraduationCap, Calendar, Truck, Globe, Rocket, Star,
  CheckCircle, ChevronDown, ChevronUp, ArrowRight, ArrowDown,
  BarChart3, TrendingUp, Zap, Award, Network, Heart,
  Eye, Brain, Lightbulb, Settings, Clock, FileText,
  UserCheck, Handshake, Wallet, Stethoscope, Home,
  Gamepad2, Plane, Car, Sparkle,
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ============================================
// DATA: Hero Stats
// ============================================
const heroStats = [
  { label: 'Companies', value: '11', icon: Building2, color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10', borderColor: 'border-[#c9a227]/30' },
  { label: 'Year 1 Team', value: '500', icon: Users, color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
  { label: 'Year 3 Team', value: '1,500', icon: TrendingUp, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30' },
  { label: 'Year 5 Team', value: '3,000', icon: Rocket, color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30' },
  { label: 'GCC Countries', value: '6', icon: Globe, color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30' },
];

// ============================================
// DATA: Core Principles
// ============================================
const corePrinciples = [
  {
    title: 'Every Company Is a Client',
    arabic: 'كل شركة هي عميل',
    description: 'Each RTMN company treats every sister company as a paying client. Rabtul serves BizOne. BizOne serves Adzy. Khedma serves all. Internal SLAs, real invoicing, accountability.',
    icon: Handshake,
    color: 'text-[#c9a227]',
  },
  {
    title: 'Responsibility = Ownership',
    arabic: 'المسؤولية = الملكية',
    description: 'Every company CEO owns their P&L. No excuses, no blame-shifting. Hit your numbers or explain why. Each team has full autonomy within the locked architecture rules.',
    icon: Target,
    color: 'text-blue-400',
  },
  {
    title: 'Innovation Is Mandatory',
    arabic: 'الابتكار إلزامي',
    description: 'Every company must ship at least 1 innovation per quarter. 20% of engineering time is reserved for experimentation. Best innovations get group-wide deployment.',
    icon: Lightbulb,
    color: 'text-yellow-400',
  },
  {
    title: 'Growth Before Comfort',
    arabic: 'النمو قبل الراحة',
    description: 'Aggressive hiring, aggressive targets, aggressive timelines. Comfort kills startups. Every team operates with startup speed regardless of company size.',
    icon: Rocket,
    color: 'text-emerald-400',
  },
  {
    title: 'Profitability Is Non-Negotiable',
    arabic: 'الربحية غير قابلة للتفاوض',
    description: 'Every company must show a path to profitability within 18 months of launch. No perpetual burn. Unit economics must work at every stage.',
    icon: DollarSign,
    color: 'text-green-400',
  },
];

// ============================================
// DATA: RTMN Holdings Group Team
// ============================================
const groupTeam = {
  cSuite: [
    { role: 'Group CEO & Founder', name: 'Rejaul Karim', status: 'filled' as const, responsibility: 'Vision, strategy, investor relations, group P&L, board management', icon: Crown },
    { role: 'Group COO', name: 'Hiring', status: 'hiring' as const, responsibility: 'Day-to-day operations of 11 companies, coordination, SLA enforcement, operational excellence', icon: Settings },
    { role: 'Group CFO', name: 'Hiring', status: 'hiring' as const, responsibility: 'Group finance, treasury, fundraising, financial controls, audit, IPO preparation', icon: DollarSign },
    { role: 'Group CTO', name: 'Hiring', status: 'hiring' as const, responsibility: 'Rabtul architecture, tech strategy, engineering standards, security, AI/ML', icon: Database },
    { role: 'Group CHRO', name: 'Hiring', status: 'hiring' as const, responsibility: 'Talent strategy for 3,000 people, culture, compensation, ESOP, L&D', icon: Users },
    { role: 'Group CCO (Compliance)', name: 'Hiring', status: 'hiring' as const, responsibility: 'Regulatory compliance across 6 GCC countries, Amana oversight, risk management', icon: Shield },
  ],
  sharedServices: [
    { dept: 'Legal & Corporate', headcount: 15, role: 'Group General Counsel', serves: 'All 11 companies — contracts, IP, disputes, entity management' },
    { dept: 'Group Finance', headcount: 20, role: 'VP Finance', serves: 'Consolidation, treasury, tax, audit, financial reporting' },
    { dept: 'Group HR', headcount: 15, role: 'VP People Operations', serves: 'Hiring, onboarding, payroll, benefits, ESOP, culture' },
    { dept: 'Compliance & Risk', headcount: 25, role: 'VP Compliance', serves: 'AML, KYC, data privacy, insurance compliance, GCC regulations' },
    { dept: 'Customer Experience Hub', headcount: 50, role: 'VP Customer Experience', serves: 'Shared support across all consumer apps — Nuqta, Wasil, Safar, etc.' },
    { dept: 'Marketing & Brand', headcount: 20, role: 'VP Group Marketing', serves: 'Brand guidelines, PR, group campaigns, influencer relations' },
  ],
};

// ============================================
// DATA: 11 Sister Company Teams
// ============================================
const companyTeams = [
  {
    id: 'rabtul',
    company: 'Rabtul Technologies',
    arabic: 'ربطُل',
    icon: Database,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    href: '/rabtul',
    role: 'Core Infrastructure — the silent backbone',
    y1: 100, y3: 300, y5: 600,
    ceo: 'Group CTO (dual-hat)',
    departments: [
      { name: 'Platform Engineering', hc: 40, focus: 'APIs, microservices, event bus, rules engine' },
      { name: 'Mobile Engineering', hc: 25, focus: 'React Native SDKs, shared components, app shells' },
      { name: 'AI/ML', hc: 20, focus: 'Recommendation engine, fraud detection, demand prediction' },
      { name: 'Data Platform', hc: 15, focus: 'Data lake, analytics pipeline, BI dashboards' },
      { name: 'Security & DevOps', hc: 15, focus: 'Cloud infrastructure, CI/CD, penetration testing, SOC' },
      { name: 'QA & Automation', hc: 15, focus: 'Test automation, performance testing, release management' },
      { name: 'Design System', hc: 10, focus: 'Shared UI library, design tokens, accessibility' },
    ],
    clientsServed: ['All 10 sister companies — auth, wallet, events, analytics, SDKs'],
    kpis: ['99.99% uptime', '<200ms API latency', '0 security breaches', '100% test coverage on core'],
  },
  {
    id: 'nuqta',
    company: 'Nuqta Corporation',
    arabic: 'نقطة',
    icon: Crown,
    color: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]/30',
    href: '/nuqta',
    role: 'Super-app — wallet, bills, savings, loyalty, membership',
    y1: 25, y3: 80, y5: 150,
    ceo: 'Hiring — CEO Nuqta Corp',
    departments: [
      { name: 'Merchant Success', hc: 8, focus: 'Partner onboarding, relationship management, activation' },
      { name: 'Credit & Risk', hc: 5, focus: 'Qist BNPL underwriting, collection, risk scoring' },
      { name: 'Member Experience', hc: 6, focus: 'Nuqta+ membership, loyalty programs, retention' },
      { name: 'Product & Growth', hc: 4, focus: 'Feature development, A/B testing, user acquisition' },
      { name: 'Operations', hc: 2, focus: 'Settlement, reconciliation, customer support escalation' },
    ],
    clientsServed: ['SpinZy (coin ledger)', 'All apps (user identity)', 'BizOne merchants (redemption)'],
    kpis: ['500K active users Y1', '3.2x cross-sell ratio', '<2% Qist default rate', '85% Nuqta+ retention'],
  },
  {
    id: 'wasil',
    company: 'Wasil Apps',
    arabic: 'واصل',
    icon: Truck,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    href: '/wasil',
    role: 'Delivery hub — 24 verticals, shared fleet',
    y1: 100, y3: 400, y5: 1000,
    ceo: 'Hiring — CEO Wasil Apps',
    departments: [
      { name: 'Rider Operations', hc: 50, focus: 'Driver recruitment, training, fleet management, payroll' },
      { name: 'Merchant Operations', hc: 20, focus: 'Restaurant/store onboarding, menu management, quality' },
      { name: 'Dispatch & Routing', hc: 15, focus: 'AI dispatch, route optimization, surge management' },
      { name: 'Customer Support', hc: 25, focus: 'Order tracking, refunds, complaints, SLA monitoring' },
      { name: 'Vertical Managers', hc: 10, focus: 'Dinezy, Grocify, Glowzy, MediEarn, CleanEZ, HandyZy, QuickDrop' },
    ],
    clientsServed: ['BizOne merchants (delivery)', 'Nuqta users (ordering)', 'All vertical apps'],
    kpis: ['30-min avg delivery', '4.5+ rider rating', '<3% order defect rate', '85% fleet utilization'],
  },
  {
    id: 'bizone',
    company: 'BizOne',
    arabic: 'بزون',
    icon: Store,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    href: '/bizone',
    role: 'THE merchant operating system — POS, CRM, accounting',
    y1: 40, y3: 120, y5: 250,
    ceo: 'Hiring — CEO BizOne',
    departments: [
      { name: 'Sales', hc: 20, focus: 'Merchant acquisition, demo, onboarding, territory management' },
      { name: 'Customer Success', hc: 15, focus: 'Merchant retention, training, feature adoption, NPS' },
      { name: 'Implementation', hc: 10, focus: 'POS setup, menu/catalog configuration, data migration' },
      { name: 'Support', hc: 15, focus: '24/7 merchant support, POS troubleshooting, billing' },
    ],
    clientsServed: ['All merchants (POS/CRM)', 'Wasil (merchant listings)', 'Adzy (merchant ad data)', 'RTMN Finance (transaction data for credit)'],
    kpis: ['500K merchants Y3', '<24h onboarding', '90% merchant retention', '40% feature adoption'],
  },
  {
    id: 'rtmn-finance',
    company: 'RTMN Finance',
    arabic: 'آر تي إم إن فاينانس',
    icon: Wallet,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    href: '/rtmn-finance',
    role: 'Fintech — credit, BNPL, remittance, settlements, insurance',
    y1: 60, y3: 200, y5: 400,
    ceo: 'Hiring — CEO RTMN Finance',
    departments: [
      { name: 'Compliance & AML', hc: 20, focus: 'CBUAE licensing, AML/CFT, sanctions screening, reporting' },
      { name: 'Treasury & Settlement', hc: 10, focus: 'Merchant settlements, FX management, liquidity, reconciliation' },
      { name: 'Credit & Risk', hc: 15, focus: 'Merchant credit underwriting, Qist BNPL, collections, scoring' },
      { name: 'Partner Network', hc: 15, focus: 'Banking partners, payment processors, insurance carriers' },
      { name: 'Customer Support', hc: 20, focus: 'Hawil remittance support, Qist collections, dispute resolution' },
    ],
    clientsServed: ['All companies (settlements)', 'Nuqta (Qist BNPL)', 'Hawil users (remittance)', 'BizOne merchants (credit)'],
    kpis: ['<1% fraud rate', 'T+1 settlement', '<2% NPL ratio', '99.9% transaction success'],
  },
  {
    id: 'travel-co',
    company: 'Travel, Trek & Experience Co.',
    arabic: 'سفر ورحلات',
    icon: Plane,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    href: '/safar',
    role: 'Travel — Safar (flights/hotels), Rakab (rides), Fakhir (luxury)',
    y1: 80, y3: 250, y5: 500,
    ceo: 'Hiring — CEO Travel Co.',
    departments: [
      { name: 'Safar Operations', hc: 25, focus: 'Flight/hotel bookings, visa processing, travel packages' },
      { name: 'Rakab Driver Ops', hc: 40, focus: 'Driver recruitment, training, rating system, fleet' },
      { name: 'Fakhir Concierge', hc: 15, focus: '24/7 luxury concierge, VIP services, event access' },
      { name: 'Customer Service', hc: 30, focus: 'Booking support, cancellations, travel emergencies' },
    ],
    clientsServed: ['Nuqta users (travel booking)', 'Wasil (shared fleet with Rakab)', 'RTMN Finance (TravoPay wallet)'],
    kpis: ['4.8+ app rating', '75-80% driver cut', '<5 min ride ETA', '95% booking success rate'],
  },
  {
    id: 'adzy',
    company: 'Adzy',
    arabic: 'أدزي',
    icon: Megaphone,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    href: '/adzy',
    role: 'Closed-loop advertising network for the ecosystem',
    y1: 30, y3: 80, y5: 150,
    ceo: 'Hiring — CEO Adzy',
    departments: [
      { name: 'Sales', hc: 15, focus: 'Brand partnerships, agency relations, enterprise accounts' },
      { name: 'Ad Operations', hc: 10, focus: 'Campaign management, targeting, optimization, reporting' },
      { name: 'Creative Studio', hc: 8, focus: 'Ad creative, merchant content, video production' },
      { name: 'Data & Analytics', hc: 8, focus: 'Attribution, audience segmentation, ROI reporting, A/B testing' },
    ],
    clientsServed: ['BizOne merchants (ads)', 'SpinZy (rewarded video)', 'All consumer apps (ad inventory)', 'External brands'],
    kpis: ['95%+ fill rate', '18-35 AED eCPM', '<8 AED cost per engagement', '3x ROAS for merchants'],
  },
  {
    id: 'inventora',
    company: 'Inventora',
    arabic: 'إنفنتورا',
    icon: Package,
    color: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/30',
    href: '/inventora',
    role: 'AI-powered supply chain & inventory management',
    y1: 50, y3: 150, y5: 300,
    ceo: 'Hiring — CEO Inventora',
    departments: [
      { name: 'Warehouse Operations', hc: 30, focus: 'Dark stores, cold chain, last-mile staging, inventory counts' },
      { name: 'Logistics & Fulfillment', hc: 20, focus: 'Route planning, delivery scheduling, returns management' },
      { name: 'Supplier Relations', hc: 10, focus: 'Vendor onboarding, price negotiation, quality assurance' },
      { name: 'Inventory Finance', hc: 8, focus: 'Trade finance, PO financing, working capital management' },
    ],
    clientsServed: ['BizOne merchants (inventory)', 'Wasil verticals (fulfillment)', 'NextaBizz (supplier integration)'],
    kpis: ['30% waste reduction', '99% stock accuracy', '<2h order fulfillment', '15% cost savings vs competitors'],
  },
  {
    id: 'nextabizz',
    company: 'NextaBizz',
    arabic: 'نكستابز',
    icon: Layers,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    href: '/nextabizz',
    role: 'B2B wholesale marketplace — vendor network, bulk pricing',
    y1: 35, y3: 100, y5: 200,
    ceo: 'Hiring — CEO NextaBizz',
    departments: [
      { name: 'Buyer Success', hc: 15, focus: 'SME onboarding, order support, recommendations' },
      { name: 'Supplier Success', hc: 15, focus: 'Supplier onboarding, catalog management, quality standards' },
      { name: 'Trade Finance', hc: 10, focus: 'Invoice financing, credit lines, payment terms management' },
      { name: 'Marketplace Ops', hc: 10, focus: 'Platform operations, dispute resolution, pricing analytics' },
    ],
    clientsServed: ['BizOne merchants (procurement)', 'Inventora (supplier data)', 'RTMN Finance (trade credit)'],
    kpis: ['10K suppliers Y2', '50K active buyers Y3', '<48h order fulfillment', '15% avg savings for buyers'],
  },
  {
    id: 'eventora',
    company: 'Eventora+',
    arabic: 'إيفنتورا',
    icon: Calendar,
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/30',
    href: '/eventora',
    role: 'Events, ticketing & offline acquisition engine',
    y1: 40, y3: 120, y5: 250,
    ceo: 'Hiring — CEO Eventora',
    departments: [
      { name: 'Venue Relations', hc: 15, focus: 'Venue partnerships, exclusivity deals, capacity management' },
      { name: 'Event Operations', hc: 20, focus: 'Event production, logistics, crowd management, safety' },
      { name: 'Ticket Operations', hc: 10, focus: 'Ticketing platform, pricing, fraud prevention, refunds' },
      { name: 'Corporate Sales', hc: 10, focus: 'Corporate events, team building, conference management' },
    ],
    clientsServed: ['Nuqta users (events)', 'Adzy (event sponsorship)', 'All companies (corporate events)'],
    kpis: ['500 events/year Y2', '95% scan success', '<2% fraud rate', '4.5+ event rating'],
  },
  {
    id: 'vertical-services',
    company: 'Vertical Services Group',
    arabic: 'خدمات متخصصة',
    icon: Briefcase,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    href: '/khedma',
    role: 'Khedma, Amana, Tawzeef, Tadreeb, Daman, Aqar, Tabib, Majlis',
    y1: 85, y3: 250, y5: 500,
    ceo: 'Hiring — CEO Vertical Services',
    departments: [
      { name: 'Khedma (Govt/PRO)', hc: 25, focus: 'Visa, licensing, attestation, labor, regulatory filing' },
      { name: 'Amana (Compliance)', hc: 15, focus: '12-pillar compliance monitoring, audit, risk assessment' },
      { name: 'Tawzeef (HR/Talent)', hc: 15, focus: 'Recruitment platform, payroll/WPS, nationalization' },
      { name: 'Tadreeb (Training)', hc: 10, focus: 'Compliance training, certification, skill development' },
      { name: 'Daman (Insurance)', hc: 10, focus: 'Health, auto, property, travel insurance marketplace' },
      { name: 'Aqar (Real Estate)', hc: 5, focus: 'Property marketplace, Ejari, management, valuation' },
      { name: 'Tabib (Healthcare)', hc: 5, focus: 'Telemedicine, appointment booking, health records' },
    ],
    clientsServed: ['All 10 companies (compliance, HR, training)', 'External businesses (Khedma PRO services)', 'Nuqta users (insurance, health, property)'],
    kpis: ['0 missed compliance deadlines', '50K transactions/year Khedma', '95% WPS success rate Tawzeef', '98% training completion Tadreeb'],
  },
];

// ============================================
// DATA: Inter-Company Client Model
// ============================================
const clientModel = [
  { provider: 'Rabtul', clients: 'All 10 companies', service: 'Auth, wallet, events, analytics, SDKs, fraud detection', sla: '99.99% uptime, <200ms latency', billing: 'Cost allocation by API calls + headcount' },
  { provider: 'BizOne', clients: 'Wasil, Adzy, RTMN Finance', service: 'Merchant data, POS integration, catalog, transaction feed', sla: 'Real-time sync, <5s delay', billing: 'Per-merchant monthly fee' },
  { provider: 'Adzy', clients: 'SpinZy, Wasil, Dinezy, all apps', service: 'Ad inventory fill, campaign targeting, creative', sla: '95%+ fill rate, <100ms ad load', billing: 'Revenue share on ad impressions' },
  { provider: 'RTMN Finance', clients: 'Nuqta, BizOne, Hawil, all', service: 'Settlements, credit scoring, BNPL, FX, insurance', sla: 'T+1 settlement, 99.9% uptime', billing: 'Transaction fee + spread' },
  { provider: 'Khedma', clients: 'All companies + external', service: 'Visa, licensing, PRO, attestation, regulatory filing', sla: '<48h processing, 100% compliance', billing: 'Per-service fixed fee' },
  { provider: 'Amana', clients: 'All companies', service: 'Compliance monitoring, audit prep, risk assessment', sla: '24h alert on compliance risk', billing: 'Monthly retainer per company' },
  { provider: 'Tawzeef', clients: 'All companies', service: 'Payroll/WPS, recruitment, leave, performance', sla: '100% WPS compliance, <28 day TTH', billing: 'Per-employee monthly fee' },
  { provider: 'Wasil', clients: 'BizOne merchants, all vertical apps', service: 'Delivery fleet, dispatch, tracking, last-mile', sla: '<30 min delivery, 4.5+ rating', billing: 'Per-delivery commission' },
  { provider: 'Inventora', clients: 'BizOne, Wasil, NextaBizz', service: 'Inventory management, warehousing, demand prediction', sla: '99% stock accuracy, <2h fulfillment', billing: 'SaaS fee + warehouse utilization' },
  { provider: 'Tadreeb', clients: 'All companies', service: 'Compliance training, onboarding courses, certification', sla: '100% mandatory training completion', billing: 'Per-employee per-course fee' },
];

// ============================================
// DATA: SOPs (Standard Operating Procedures)
// ============================================
const sops = [
  {
    id: 'hiring',
    category: 'Hiring & Onboarding',
    icon: UserCheck,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    procedures: [
      { name: 'Requisition-to-Offer', steps: 'Hiring manager submits req → CHRO approval → Tawzeef posts to 10+ boards → Screen (3 days) → Interview (2 rounds max) → Offer (24h) → Background check → Start', target: '<28 days total' },
      { name: 'Day-1 Onboarding', steps: 'Rabtul SSO setup → Tawzeef enrollment → Tadreeb mandatory training → Team introduction → 30-60-90 day plan → Buddy assignment', target: 'Complete by end of Day 1' },
      { name: 'Visa & Work Permit', steps: 'Khedma auto-initiates → Medical test → Emirates ID → Labor card → Bank account → SIM card → Housing support', target: '<14 days for GCC nationals, <30 days for expats' },
      { name: 'Probation Review', steps: '30-day check-in → 60-day performance review → 90-day confirmation/extension/exit', target: '100% completion rate' },
    ],
  },
  {
    id: 'operations',
    category: 'Daily Operations',
    icon: Settings,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    procedures: [
      { name: 'Daily Standup', steps: 'Each company runs 15-min standup at 9:00 AM → Blockers escalated to Group COO by 9:30 AM → Resolution by noon', target: '100% attendance, 0 unresolved blockers by EOD' },
      { name: 'Weekly Review', steps: 'Company CEO presents KPIs every Monday → Group COO consolidates → CEO review Tuesday → Action items Wednesday', target: 'Every KPI tracked, every miss explained' },
      { name: 'Monthly P&L Review', steps: 'Company CFO submits P&L by 5th → Group CFO consolidates by 10th → Board report by 15th', target: '0 reporting delays' },
      { name: 'Incident Response', steps: 'Detect → Alert (5 min) → Triage (15 min) → Fix (1h for P1) → RCA (24h) → Prevention plan (48h)', target: 'P1: <1h resolution, P2: <4h, P3: <24h' },
    ],
  },
  {
    id: 'product',
    category: 'Product & Engineering',
    icon: Rocket,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    procedures: [
      { name: 'Feature Request → Ship', steps: 'Product spec (3 days) → Design review → Engineering estimate → Sprint planning → Build (2 weeks) → QA → Staging → Production', target: '<4 weeks idea-to-production' },
      { name: 'Code Review', steps: 'PR submitted → Auto-tests pass → 2 reviewer approval → Security scan → Merge → Auto-deploy to staging → Smoke test → Production', target: '<24h PR turnaround' },
      { name: 'Release Process', steps: 'Feature freeze Friday → QA Monday-Tuesday → Staging Wednesday → Production Thursday → Monitor Friday', target: 'Weekly releases, 0 rollbacks' },
      { name: 'Architecture Review', steps: 'Any cross-service change → RFC document → Rabtul CTO review → Security review → Approval → Implementation', target: '100% cross-service changes reviewed' },
    ],
  },
  {
    id: 'compliance',
    category: 'Compliance & Legal',
    icon: Shield,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    procedures: [
      { name: 'Regulatory Filing', steps: 'Amana auto-generates → Company compliance officer reviews → Group CCO approves → Filed → Confirmation archived', target: '0 missed deadlines, 0 fines' },
      { name: 'KYC/AML Screening', steps: 'User/merchant signup → Auto PEP/sanctions check → Risk score → Tier assignment → Enhanced due diligence if needed', target: '<30s auto-screening, <24h manual review' },
      { name: 'Data Breach Response', steps: 'Detect → Contain (1h) → Assess (4h) → Notify DPA (72h) → Notify affected users → Remediate → Post-mortem', target: 'UAE PDPL compliant, <72h notification' },
      { name: 'License Renewal', steps: 'Khedma auto-alerts 90 days before → Documents prepared → Submitted 30 days before → Follow up → Renewed → Updated in registry', target: '0 lapsed licenses' },
    ],
  },
  {
    id: 'finance',
    category: 'Finance & Procurement',
    icon: DollarSign,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    procedures: [
      { name: 'Purchase Approval', steps: '<5K AED: Manager → <25K: VP → <100K: Company CEO → >100K: Group CFO + CEO', target: '<24h approval for <25K, <48h for >25K' },
      { name: 'Vendor Onboarding', steps: 'Vendor application → Compliance check (Amana) → Financial review → Contract negotiation → PO setup → Payment terms', target: '<7 days for standard vendors' },
      { name: 'Expense Reporting', steps: 'Employee submits receipt → Manager approves → Finance processes → Reimbursement via WPS', target: '<5 business days reimbursement' },
      { name: 'Inter-Company Billing', steps: 'Service usage tracked → Monthly invoice generated → 15-day payment terms → Auto-reconciliation via Rabtul', target: '100% inter-company billing accuracy' },
    ],
  },
  {
    id: 'growth',
    category: 'Growth & Marketing',
    icon: TrendingUp,
    color: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]/30',
    procedures: [
      { name: 'Campaign Launch', steps: 'Brief (2 days) → Creative (3 days) → Adzy targeting setup → A/B test → Launch → Monitor → Optimize daily → Report weekly', target: '<7 days brief-to-launch' },
      { name: 'Merchant Acquisition', steps: 'Lead generation → BizOne demo → Same-day signup → POS setup (<24h) → Auto-listed on Wasil → First order within 48h', target: '<24h merchant go-live' },
      { name: 'User Acquisition', steps: 'Hawil entry → Nuqta onboarding → SpinZy engagement → First order via Wasil → Qist activation → Cross-sell cycle', target: '1 → 3.2 apps within 90 days' },
      { name: 'Market Expansion', steps: 'Country assessment → Regulatory review (Amana) → Entity setup (Khedma) → Team hiring (Tawzeef) → Soft launch → Scale', target: '<6 months per new GCC country' },
    ],
  },
];

// ============================================
// DATA: Innovation Framework
// ============================================
const innovationFramework = [
  { pillar: '20% Innovation Time', description: 'Every engineering team reserves 20% of sprint capacity for experimentation, prototyping, and internal tools. Not optional.', metric: '1 shipped innovation per company per quarter' },
  { pillar: 'Quarterly Hackathon', description: '48-hour cross-company hackathon. Teams from different companies collaborate. Winners get budget to ship their idea.', metric: '10+ prototypes per hackathon, 2-3 shipped to production' },
  { pillar: 'Innovation Board', description: 'Group CTO + 3 company CEOs review innovation proposals monthly. Approved projects get dedicated sprint + budget.', metric: '5 approved innovations per quarter' },
  { pillar: 'Customer Labs', description: 'Monthly sessions where 10 users/merchants test new features. Real feedback before launch. Every company participates.', metric: '120+ user sessions per year across all companies' },
  { pillar: 'Patent & IP Pipeline', description: 'Rabtul files patents on novel algorithms (fraud detection, demand prediction, cross-sell engine). IP protection = competitive moat.', metric: '5+ patent applications per year' },
];

// ============================================
// DATA: Profitability Targets
// ============================================
const profitabilityTargets = [
  { company: 'Rabtul', y1: '-8.5M (investment)', y2: '-2M', y3: '+5M', model: 'Cost center → PaaS revenue', breakeven: 'Q2 2028' },
  { company: 'Nuqta Corp', y1: '-3M', y2: '+2M', y3: '+15M', model: 'Membership + commission + BNPL', breakeven: 'Q4 2027' },
  { company: 'Wasil Apps', y1: '-12M', y2: '-3M', y3: '+25M', model: 'Delivery commission + fleet optimization', breakeven: 'Q2 2028' },
  { company: 'BizOne', y1: '-5M', y2: '+3M', y3: '+20M', model: 'SaaS + transaction fees', breakeven: 'Q3 2027' },
  { company: 'RTMN Finance', y1: '-8M', y2: '+5M', y3: '+40M', model: 'APR + FX spread + insurance', breakeven: 'Q1 2028' },
  { company: 'Travel Co.', y1: '-6M', y2: '-1M', y3: '+15M', model: 'Booking commission + ride fees', breakeven: 'Q3 2028' },
  { company: 'Adzy', y1: '-2M', y2: '+4M', y3: '+18M', model: 'Ad revenue + data insights', breakeven: 'Q2 2027' },
  { company: 'Inventora', y1: '-4M', y2: '+1M', y3: '+12M', model: 'SaaS + warehouse fees', breakeven: 'Q4 2027' },
  { company: 'NextaBizz', y1: '-3M', y2: '+2M', y3: '+10M', model: 'Marketplace commission + trade finance', breakeven: 'Q3 2027' },
  { company: 'Eventora', y1: '-2M', y2: '+1M', y3: '+8M', model: 'Ticket fees + sponsorship', breakeven: 'Q4 2027' },
  { company: 'Vertical Services', y1: '-5M', y2: '+3M', y3: '+20M', model: 'Service fees + SaaS + per-employee', breakeven: 'Q2 2028' },
];

// ============================================
// DATA: Hiring Phases
// ============================================
const hiringPhases = [
  {
    phase: 'Phase 1: Foundation',
    timeline: 'Q2-Q4 2026',
    target: '500 people',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    focus: [
      'Group C-suite (COO, CFO, CTO, CHRO, CCO)',
      '11 company CEOs hired and onboarded',
      'Rabtul: 100 engineers (40 platform, 25 mobile, 20 AI/ML)',
      'Wasil: 100 ops (50 rider ops, 20 merchant, 15 dispatch)',
      'BizOne: 40 sales + success team for merchant onboarding',
      'RTMN Finance: 60 compliance + treasury + credit',
      'Shared services: 145 people (legal, finance, HR, support)',
    ],
    geography: 'UAE (HQ) + India (engineering)',
  },
  {
    phase: 'Phase 2: Scale',
    timeline: 'Q1-Q4 2027',
    target: '1,500 people',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    focus: [
      '3x engineering to support all 31 products',
      'Wasil fleet ops expansion to 400 people across UAE',
      'BizOne sales force to 120 for 500K merchant target',
      'Saudi Arabia office: 150 people (Riyadh)',
      'Bahrain office: 50 people (finance hub)',
      'Customer support hub: Egypt (100 people)',
      'Every company has full leadership team + department heads',
    ],
    geography: 'UAE + KSA + Bahrain + Egypt + India',
  },
  {
    phase: 'Phase 3: Dominance',
    timeline: '2028-2030',
    target: '3,000 people',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    focus: [
      'Full GCC coverage: Qatar, Oman, Kuwait offices',
      'Rabtul: 600 engineers (PaaS readiness)',
      'Wasil: 1,000 ops across 6 GCC countries',
      'IPO preparation team (IR, governance, audit)',
      'AI/ML center of excellence: 100+ data scientists',
      'Regional CEOs for each GCC country',
      'Board of directors + advisory board formalized',
    ],
    geography: 'All 6 GCC countries + Egypt + India + Jordan',
  },
];

// ============================================
// DATA: Coordination Framework
// ============================================
const coordinationFramework = [
  {
    meeting: 'Daily Ops Sync',
    frequency: 'Daily 9:00 AM',
    attendees: 'Company COOs + Group COO',
    purpose: 'Blockers, escalations, cross-company dependencies',
    output: 'Blocker resolution by noon',
  },
  {
    meeting: 'Weekly CEO Council',
    frequency: 'Monday 10:00 AM',
    attendees: 'All 11 company CEOs + Group CEO',
    purpose: 'KPI review, strategic alignment, resource allocation',
    output: 'Weekly scorecard, action items',
  },
  {
    meeting: 'Monthly P&L Review',
    frequency: '1st Monday of month',
    attendees: 'Company CEOs + CFOs + Group CFO',
    purpose: 'Financial performance, burn rate, profitability path',
    output: 'Monthly financial report, budget adjustments',
  },
  {
    meeting: 'Quarterly Strategy Offsite',
    frequency: 'Every 3 months',
    attendees: 'All C-suite + Group leadership',
    purpose: 'Quarterly OKRs, innovation review, market expansion, hiring plan',
    output: 'Quarterly OKRs document, updated roadmap',
  },
  {
    meeting: 'Annual Board Meeting',
    frequency: 'Annually + ad hoc',
    attendees: 'Board of Directors + Group C-suite',
    purpose: 'Annual strategy, fundraising, IPO readiness, governance',
    output: 'Annual plan, board resolutions',
  },
];

// ============================================
// MAIN COMPONENT
// ============================================
export default function TeamBlueprintPage() {
  const [expandedCompany, setExpandedCompany] = useState<string | null>('rabtul');
  const [expandedSop, setExpandedSop] = useState<string | null>('hiring');

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <div className="bg-gradient-to-b from-[#0a1628] via-[#c9a227]/10 to-[#0a1628] border-b border-[#c9a227]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 bg-[#c9a227]/20 text-[#c9a227] text-sm px-4 py-1.5 rounded-full font-bold border border-[#c9a227]/50 mb-4">
              <Users className="w-4 h-4" /> Team Blueprint
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white mt-4">
              Building the <span className="text-[#c9a227]">3,000-Person</span> Machine
            </h1>
            <p className="text-[#c9a227] text-lg mt-2 font-medium">بناء الفريق الذي يبني النظام البيئي</p>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto mt-4">
              The definitive organizational blueprint for RTMN Group — 11 companies, 500 → 1,500 → 3,000 people,
              inter-company client model, SOPs for every function, and a relentless focus on
              <strong className="text-[#c9a227]"> responsibility, innovation, growth, and profitability</strong>.
            </p>
          </div>

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
      {/* 5 CORE PRINCIPLES */}
      {/* ============================================ */}
      <section className="bg-slate-800/30 border-b border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <Heart className="w-7 h-7 text-[#c9a227]" /> 5 Non-Negotiable Principles
          </h2>
          <p className="text-slate-400 mb-6">The DNA of every RTMN company and every RTMN employee</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {corePrinciples.map((p, i) => (
              <div key={i} className={`bg-slate-900/50 rounded-xl p-5 border border-slate-700/50 hover:border-[#c9a227]/30 transition-colors ${i === 0 ? 'lg:col-span-1 md:col-span-2 lg:col-span-1' : ''}`}>
                <p.icon className={`w-7 h-7 ${p.color} mb-3`} />
                <h3 className="text-white font-bold text-lg">{p.title}</h3>
                <p className="text-[#c9a227] text-sm mb-2">{p.arabic}</p>
                <p className="text-slate-400 text-sm">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* GROUP C-SUITE + SHARED SERVICES */}
      {/* ============================================ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <Crown className="w-7 h-7 text-[#c9a227]" /> RTMN Holdings — Group Leadership
        </h2>
        <p className="text-slate-400 mb-6">The executive team that governs 11 companies and 3,000 people</p>

        {/* C-Suite */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {groupTeam.cSuite.map((exec, i) => (
            <div key={i} className={`rounded-xl p-5 border ${exec.status === 'filled' ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-slate-800/30 border-slate-700/50'}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg ${exec.status === 'filled' ? 'bg-emerald-500/20' : 'bg-[#c9a227]/10'} flex items-center justify-center`}>
                  <exec.icon className={`w-5 h-5 ${exec.status === 'filled' ? 'text-emerald-400' : 'text-[#c9a227]'}`} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">{exec.role}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                    exec.status === 'filled' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-[#c9a227]/20 text-[#c9a227] border border-[#c9a227]/30'
                  }`}>
                    {exec.status === 'filled' ? exec.name : 'Actively Hiring'}
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-xs">{exec.responsibility}</p>
            </div>
          ))}
        </div>

        {/* Shared Services */}
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-blue-400" /> Shared Services — 145 People
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {groupTeam.sharedServices.map((dept, i) => (
            <div key={i} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-bold text-sm">{dept.dept}</h4>
                <span className="text-blue-400 font-bold text-sm">{dept.headcount}</span>
              </div>
              <p className="text-emerald-400 text-xs font-medium mb-1">{dept.role}</p>
              <p className="text-slate-500 text-xs">{dept.serves}</p>
            </div>
          ))}
        </div>
      </main>

      {/* ============================================ */}
      {/* 11 COMPANY TEAMS (Expandable) */}
      {/* ============================================ */}
      <section className="bg-slate-800/30 border-y border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <Building2 className="w-7 h-7 text-[#c9a227]" /> 11 Sister Company Teams
          </h2>
          <p className="text-slate-400 mb-6">Each company has its own CEO, P&L, and team — click to expand</p>

          <div className="space-y-3">
            {companyTeams.map((co) => (
              <div
                key={co.id}
                className={`border-2 rounded-xl overflow-hidden transition-all ${
                  expandedCompany === co.id
                    ? `${co.bgColor} ${co.borderColor}`
                    : 'bg-slate-800/20 border-slate-700/50 hover:border-slate-600/50'
                }`}
              >
                <button
                  onClick={() => setExpandedCompany(expandedCompany === co.id ? null : co.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className={`w-12 h-12 rounded-xl ${co.bgColor} flex items-center justify-center border ${co.borderColor} flex-shrink-0`}>
                      <co.icon className={`w-6 h-6 ${co.color}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className={`text-base sm:text-lg font-bold ${co.color}`}>{co.company}</h3>
                        <span className="text-slate-500 text-xs">{co.arabic}</span>
                      </div>
                      <p className="text-slate-400 text-xs sm:text-sm line-clamp-1">{co.role}</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
                      <div className="text-center">
                        <div className="text-white font-bold text-sm">{co.y1}</div>
                        <div className="text-[10px] text-slate-500">Y1</div>
                      </div>
                      <ArrowRight className="w-3 h-3 text-slate-600" />
                      <div className="text-center">
                        <div className="text-white font-bold text-sm">{co.y3}</div>
                        <div className="text-[10px] text-slate-500">Y3</div>
                      </div>
                      <ArrowRight className="w-3 h-3 text-slate-600" />
                      <div className="text-center">
                        <div className={`font-bold text-sm ${co.color}`}>{co.y5}</div>
                        <div className="text-[10px] text-slate-500">Y5</div>
                      </div>
                    </div>
                  </div>
                  {expandedCompany === co.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                  )}
                </button>

                {expandedCompany === co.id && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 space-y-4">
                    {/* CEO & Headcount */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                        <h4 className="text-white font-bold text-sm mb-1">Leadership</h4>
                        <p className={`text-sm ${co.ceo.includes('Hiring') ? 'text-[#c9a227]' : 'text-emerald-400'} font-medium`}>{co.ceo}</p>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                        <h4 className="text-white font-bold text-sm mb-1">Headcount Growth</h4>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-slate-300">Y1: {co.y1}</span>
                          <ArrowRight className="w-3 h-3 text-slate-600" />
                          <span className="text-slate-300">Y3: {co.y3}</span>
                          <ArrowRight className="w-3 h-3 text-slate-600" />
                          <span className={`font-bold ${co.color}`}>Y5: {co.y5}</span>
                        </div>
                      </div>
                    </div>

                    {/* Departments */}
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <h4 className="text-white font-bold text-sm mb-3">Departments (Year 1)</h4>
                      <div className="space-y-2">
                        {co.departments.map((dept, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className={`text-sm font-bold ${co.color} w-8 text-right flex-shrink-0`}>{dept.hc}</span>
                            <div className="flex-1">
                              <span className="text-white text-sm font-medium">{dept.name}</span>
                              <span className="text-slate-500 text-xs ml-2">— {dept.focus}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Clients Served & KPIs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                        <h4 className="text-white font-bold text-sm mb-2">Internal Clients Served</h4>
                        {co.clientsServed.map((c, i) => (
                          <div key={i} className="flex items-start gap-2 text-slate-300 text-sm mb-1">
                            <Handshake className={`w-3.5 h-3.5 ${co.color} flex-shrink-0 mt-0.5`} />
                            {c}
                          </div>
                        ))}
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                        <h4 className="text-white font-bold text-sm mb-2">Key KPIs</h4>
                        {co.kpis.map((kpi, i) => (
                          <div key={i} className="flex items-start gap-2 text-slate-300 text-sm mb-1">
                            <Target className={`w-3.5 h-3.5 ${co.color} flex-shrink-0 mt-0.5`} />
                            {kpi}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={co.href}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${co.bgColor} ${co.color} border ${co.borderColor} font-bold text-sm hover:opacity-80 transition-opacity`}
                    >
                      View {co.company} Page <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* INTER-COMPANY CLIENT MODEL */}
      {/* ============================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <Handshake className="w-7 h-7 text-[#c9a227]" /> Inter-Company Client Model
        </h2>
        <p className="text-slate-400 mb-6">Every company is both a provider and a client — with real SLAs and real billing</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="text-left py-3 px-3 text-[#c9a227] font-semibold">Provider</th>
                <th className="text-left py-3 px-3 text-[#c9a227] font-semibold">Clients</th>
                <th className="text-left py-3 px-3 text-[#c9a227] font-semibold hidden md:table-cell">Service</th>
                <th className="text-left py-3 px-3 text-[#c9a227] font-semibold hidden lg:table-cell">SLA</th>
                <th className="text-left py-3 px-3 text-[#c9a227] font-semibold hidden lg:table-cell">Billing</th>
              </tr>
            </thead>
            <tbody>
              {clientModel.map((row, i) => (
                <tr key={i} className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors">
                  <td className="py-3 px-3 text-white font-bold">{row.provider}</td>
                  <td className="py-3 px-3 text-slate-300">{row.clients}</td>
                  <td className="py-3 px-3 text-slate-400 hidden md:table-cell">{row.service}</td>
                  <td className="py-3 px-3 text-emerald-400 text-xs hidden lg:table-cell">{row.sla}</td>
                  <td className="py-3 px-3 text-slate-500 text-xs hidden lg:table-cell">{row.billing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ============================================ */}
      {/* COORDINATION FRAMEWORK */}
      {/* ============================================ */}
      <section className="bg-slate-800/30 border-y border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <Network className="w-7 h-7 text-blue-400" /> Coordination Framework
          </h2>
          <p className="text-slate-400 mb-6">How 11 companies stay aligned — from daily standups to annual board meetings</p>

          <div className="space-y-3">
            {coordinationFramework.map((cf, i) => (
              <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/10 rounded-lg p-2.5 flex-shrink-0 border border-blue-500/30">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className="text-white font-bold">{cf.meeting}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-bold">{cf.frequency}</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-1"><strong className="text-slate-200">Attendees:</strong> {cf.attendees}</p>
                    <p className="text-slate-400 text-sm mb-1"><strong className="text-slate-300">Purpose:</strong> {cf.purpose}</p>
                    <p className="text-emerald-400 text-sm"><strong className="text-emerald-300">Output:</strong> {cf.output}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SOPs (Expandable by Category) */}
      {/* ============================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <FileText className="w-7 h-7 text-emerald-400" /> Standard Operating Procedures
        </h2>
        <p className="text-slate-400 mb-6">SOPs for every critical function — click category to expand</p>

        <div className="space-y-3">
          {sops.map((sop) => (
            <div
              key={sop.id}
              className={`border-2 rounded-xl overflow-hidden transition-all ${
                expandedSop === sop.id
                  ? `${sop.bgColor} ${sop.borderColor}`
                  : 'bg-slate-800/20 border-slate-700/50 hover:border-slate-600/50'
              }`}
            >
              <button
                onClick={() => setExpandedSop(expandedSop === sop.id ? null : sop.id)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${sop.bgColor} flex items-center justify-center border ${sop.borderColor}`}>
                    <sop.icon className={`w-5 h-5 ${sop.color}`} />
                  </div>
                  <div>
                    <h3 className={`text-base sm:text-lg font-bold ${sop.color}`}>{sop.category}</h3>
                    <p className="text-slate-400 text-xs">{sop.procedures.length} procedures defined</p>
                  </div>
                </div>
                {expandedSop === sop.id ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {expandedSop === sop.id && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 space-y-3">
                  {sop.procedures.map((proc, i) => (
                    <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-bold text-sm">{proc.name}</h4>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${sop.bgColor} ${sop.color} border ${sop.borderColor} font-bold`}>
                          Target: {proc.target}
                        </span>
                      </div>
                      <p className="text-slate-300 text-sm">{proc.steps}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ============================================ */}
      {/* HIRING PHASES */}
      {/* ============================================ */}
      <section className="bg-slate-800/30 border-y border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <UserCheck className="w-7 h-7 text-[#c9a227]" /> 3-Phase Hiring Roadmap
          </h2>
          <p className="text-slate-400 mb-6">From 500 to 3,000 people in 4 years — disciplined, phased scaling</p>

          <div className="space-y-4">
            {hiringPhases.map((phase, i) => (
              <div key={i} className={`${phase.bgColor} rounded-xl p-6 border-2 ${phase.borderColor}`}>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <h3 className={`text-xl font-bold ${phase.color}`}>{phase.phase}</h3>
                    <p className="text-slate-400 text-sm">{phase.timeline}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${phase.color}`}>{phase.target}</div>
                    <p className="text-slate-500 text-xs">{phase.geography}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {phase.focus.map((item, j) => (
                    <div key={j} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle className={`w-4 h-4 ${phase.color} flex-shrink-0 mt-0.5`} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* INNOVATION FRAMEWORK */}
      {/* ============================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <Lightbulb className="w-7 h-7 text-yellow-400" /> Innovation Framework
        </h2>
        <p className="text-slate-400 mb-6">Innovation is not optional — it is a KPI for every company</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {innovationFramework.map((item, i) => (
            <div key={i} className={`bg-slate-800/30 rounded-xl p-5 border border-slate-700/50 hover:border-yellow-500/30 transition-colors ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              <h3 className="text-white font-bold mb-2">{item.pillar}</h3>
              <p className="text-slate-400 text-sm mb-3">{item.description}</p>
              <div className="bg-yellow-500/10 rounded-lg px-3 py-2 border border-yellow-500/30">
                <p className="text-yellow-400 text-xs font-bold">{item.metric}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================ */}
      {/* PROFITABILITY TARGETS */}
      {/* ============================================ */}
      <section className="bg-slate-800/30 border-y border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <BarChart3 className="w-7 h-7 text-emerald-400" /> Profitability Targets (AED Millions)
          </h2>
          <p className="text-slate-400 mb-6">Every company has a path to profitability — no perpetual burn allowed</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left py-3 px-3 text-[#c9a227] font-semibold">Company</th>
                  <th className="text-center py-3 px-3 text-red-400 font-semibold">Year 1</th>
                  <th className="text-center py-3 px-3 text-yellow-400 font-semibold">Year 2</th>
                  <th className="text-center py-3 px-3 text-emerald-400 font-semibold">Year 3</th>
                  <th className="text-center py-3 px-3 text-slate-400 font-semibold hidden sm:table-cell">Breakeven</th>
                  <th className="text-left py-3 px-3 text-slate-400 font-semibold hidden md:table-cell">Model</th>
                </tr>
              </thead>
              <tbody>
                {profitabilityTargets.map((row, i) => (
                  <tr key={i} className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors">
                    <td className="py-3 px-3 text-white font-bold">{row.company}</td>
                    <td className={`py-3 px-3 text-center font-bold ${row.y1.includes('-') ? 'text-red-400' : 'text-emerald-400'}`}>{row.y1}</td>
                    <td className={`py-3 px-3 text-center font-bold ${row.y2.includes('-') ? 'text-red-400' : 'text-emerald-400'}`}>{row.y2}</td>
                    <td className={`py-3 px-3 text-center font-bold ${row.y3.includes('-') ? 'text-red-400' : 'text-emerald-400'}`}>{row.y3}</td>
                    <td className="py-3 px-3 text-center text-[#c9a227] text-xs hidden sm:table-cell">{row.breakeven}</td>
                    <td className="py-3 px-3 text-slate-500 text-xs hidden md:table-cell">{row.model}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-[#c9a227]/30 bg-[#c9a227]/5">
                  <td className="py-3 px-3 text-[#c9a227] font-bold">GROUP TOTAL</td>
                  <td className="py-3 px-3 text-center text-red-400 font-bold">-57.5M</td>
                  <td className="py-3 px-3 text-center text-emerald-400 font-bold">+15M</td>
                  <td className="py-3 px-3 text-center text-emerald-400 font-bold">+188M</td>
                  <td className="py-3 px-3 text-center text-[#c9a227] font-bold hidden sm:table-cell">Q2 2027</td>
                  <td className="py-3 px-3 text-[#c9a227] text-xs hidden md:table-cell">Diversified SaaS + commission + fintech</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Total Investment Needed */}
          <div className="mt-6 bg-gradient-to-r from-[#c9a227]/10 to-purple-500/10 rounded-xl p-6 border border-[#c9a227]/30 text-center">
            <p className="text-[#c9a227] font-bold text-lg mb-2">Total Seed Investment Needed: ~60M AED (~$16M USD)</p>
            <p className="text-slate-400 text-sm">
              Group breaks even by Q2 2027 (14 months). Year 3 net profit: 188M AED (~$51M USD).
              At 10x revenue multiple, Year 3 valuation: <strong className="text-[#c9a227]">~$1.6B</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* NAVIGATION FOOTER */}
      {/* ============================================ */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rtmn-story" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Network className="w-5 h-5" /> RTMN Story
            </Link>
            <Link href="/business-solutions" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Briefcase className="w-5 h-5" /> Business Solutions
            </Link>
            <Link href="/inter-company-economics" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-500 transition-colors">
              <DollarSign className="w-5 h-5" /> Inter-Company Economics
            </Link>
            <Link href="/rtmn-team-structure" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Users className="w-5 h-5" /> Current Team
            </Link>
            <Link href="/complete-roadmap" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500 transition-colors">
              <Rocket className="w-5 h-5" /> Complete Roadmap
            </Link>
            <Link href="/rtmn" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Globe className="w-5 h-5" /> RTMN Hub
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}