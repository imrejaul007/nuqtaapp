'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Users, Crown, Building2, Briefcase, UserCheck,
  Star, Shield, Target, ChevronRight, Code, Palette, TrendingUp,
  Headphones, Scale, DollarSign, Globe, Megaphone, Settings,
  CheckCircle2, ArrowRight, Network, Layers, UserPlus, Truck,
  Wallet, Home, Plane, Car, Package, Store, Ticket, Cloud,
  Brain, Database, Server, Cpu, BarChart3, CreditCard, Factory,
  Boxes, Share2, Cog, HelpCircle, Phone, Mail, MessageSquare,
  Calculator, FileText, Lock, Eye, Zap, Rocket, ChevronDown, ChevronUp
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// RTMN Holding C-Suite
const rtmnHoldingLeadership = [
  {
    role: 'Group CEO',
    name: 'Founder',
    arabic: 'الرئيس التنفيذي للمجموعة',
    responsibilities: [
      'Overall group strategy and vision',
      'Investor relations and fundraising',
      'Board management',
      'Cross-company synergies',
    ],
    directReports: ['All 10 Company CEOs', 'Group CFO', 'Group COO', 'Group CCO'],
    compensation: 'AED 3-5M/yr + 20-30% equity',
    status: 'Founder',
    color: 'from-[#c9a227] to-amber-600',
  },
  {
    role: 'Group COO',
    name: 'TBD - Strategic Hire',
    arabic: 'مدير العمليات للمجموعة',
    responsibilities: [
      'Cross-company operations',
      'Shared services management',
      'Process standardization',
      'Operational excellence',
    ],
    directReports: ['Shared Services Directors', 'Operations Leads'],
    compensation: 'AED 1.8-2.5M/yr + 3-5% equity',
    status: 'To Hire Y1',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    role: 'Group CFO',
    name: 'TBD - Strategic Hire',
    arabic: 'المدير المالي للمجموعة',
    responsibilities: [
      'Group financial planning',
      'Fundraising and treasury',
      'Consolidation and reporting',
      'Capital allocation',
    ],
    directReports: ['Company Finance Heads', 'Treasury', 'IR'],
    compensation: 'AED 1.8-2.5M/yr + 2-4% equity',
    status: 'To Hire Y1',
    color: 'from-emerald-500 to-green-600',
  },
  {
    role: 'Group CCO (Compliance)',
    name: 'TBD - Strategic Hire',
    arabic: 'مدير الامتثال للمجموعة',
    responsibilities: [
      'All regulatory licenses',
      'Shariah compliance',
      'AML/KYC frameworks',
      'Risk management',
    ],
    directReports: ['Company Compliance Officers', 'Legal', 'Shariah Board'],
    compensation: 'AED 1.5-2M/yr + 1-2% equity',
    status: 'To Hire Y1',
    color: 'from-red-500 to-rose-600',
  },
  {
    role: 'Group CHRO',
    name: 'TBD - Strategic Hire',
    arabic: 'مدير الموارد البشرية',
    responsibilities: [
      'Group talent strategy',
      'Culture and values',
      'ESOP management',
      'Learning and development',
    ],
    directReports: ['Company HR Heads', 'Talent Acquisition', 'L&D'],
    compensation: 'AED 1.2-1.8M/yr + 1-2% equity',
    status: 'To Hire Y1',
    color: 'from-purple-500 to-violet-600',
  },
];

// 10 Sister Companies Team Structure
const sisterCompanies = [
  {
    id: 'nuqta-corp',
    name: 'Nuqta Corporation',
    arabic: 'شركة نقطة',
    tagline: 'Rewards, BNPL & Gamification',
    icon: Crown,
    color: 'from-[#c9a227] to-amber-600',
    textColor: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]',
    products: ['Nuqta+', 'Qist', 'Gamification'],
    leadership: [
      { role: 'CEO / GM', name: 'TBD', status: 'To Hire' },
      { role: 'Head of Product', name: 'TBD', status: 'To Hire' },
      { role: 'Head of Partnerships', name: 'TBD', status: 'To Hire' },
      { role: 'Head of Credit (Qist)', name: 'TBD', status: 'To Hire' },
    ],
    teams: [
      { name: 'Merchant Success', headcount: 15, roles: ['Merchant Managers', 'Onboarding', 'Support'] },
      { name: 'Credit & Risk', headcount: 8, roles: ['Underwriters', 'Collections', 'Risk Analysts'] },
      { name: 'Member Experience', headcount: 10, roles: ['Customer Success', 'Retention', 'VIP Support'] },
    ],
    headcount: { year1: 25, year3: 80, year5: 150 },
    techSupport: 'Rabtul provides: Core platform, payment processing, credit engine',
    revenue: 'AED 89-175M/yr',
    note: 'Nuqta Corp keeps current structure - to be detailed separately',
  },
  {
    id: 'wasil-apps',
    name: 'Wasil Apps',
    arabic: 'تطبيقات واصل',
    tagline: 'Quick Commerce & Delivery',
    icon: Truck,
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500',
    products: ['Wasil', 'Wasil+', 'Wasil Fresh', 'Wasil Pharmacy', 'Wasil Food', 'Wasil Mall'],
    leadership: [
      { role: 'CEO', name: 'TBD', status: 'To Hire' },
      { role: 'VP Operations', name: 'TBD', status: 'To Hire' },
      { role: 'VP Logistics', name: 'TBD', status: 'To Hire' },
      { role: 'Head of Rider Ops', name: 'TBD', status: 'To Hire' },
    ],
    teams: [
      { name: 'Rider Operations', headcount: 50, roles: ['Fleet Managers', 'Rider Support', 'Training'] },
      { name: 'Merchant Operations', headcount: 20, roles: ['Restaurant Partners', 'Grocery Partners', 'Pharmacy Partners'] },
      { name: 'Dispatch & Logistics', headcount: 15, roles: ['Route Optimization', 'Real-time Tracking', 'SLA Management'] },
      { name: 'Customer Support', headcount: 25, roles: ['L1 Support', 'Refunds', 'Escalations'] },
    ],
    headcount: { year1: 100, year3: 400, year5: 1000 },
    techSupport: 'Rabtul provides: Order management, routing engine, rider app, tracking',
    revenue: 'AED 150-300M/yr',
  },
  {
    id: 'rtmn-finance',
    name: 'RTMN Finance',
    arabic: 'آر تي إم إن فاينانس',
    tagline: 'Remittance, Payments & Lending',
    icon: Wallet,
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
    products: ['Hawil', 'Hawil Card', 'NuqtaPay', 'Merchant Credit', 'Consumer Credit'],
    leadership: [
      { role: 'CEO', name: 'TBD', status: 'To Hire - Banking Experience Required' },
      { role: 'CFO', name: 'TBD', status: 'To Hire' },
      { role: 'Chief Risk Officer', name: 'TBD', status: 'To Hire' },
      { role: 'Head of Compliance', name: 'TBD', status: 'To Hire - CBUAE Experience' },
      { role: 'Head of Treasury', name: 'TBD', status: 'To Hire' },
    ],
    teams: [
      { name: 'Compliance & AML', headcount: 20, roles: ['AML Officers', 'KYC Team', 'Compliance Analysts'] },
      { name: 'Treasury & FX', headcount: 10, roles: ['FX Traders', 'Treasury Ops', 'Liquidity Managers'] },
      { name: 'Credit Operations', headcount: 15, roles: ['Underwriters', 'Collections', 'Fraud Prevention'] },
      { name: 'Partner Network', headcount: 15, roles: ['Bank Relations', 'Correspondent Banks', 'Agent Network'] },
      { name: 'Customer Support', headcount: 20, roles: ['Remittance Support', 'Card Support', 'Disputes'] },
    ],
    headcount: { year1: 60, year3: 200, year5: 400 },
    techSupport: 'Rabtul provides: Core banking, payment gateway, FX engine, compliance tools',
    revenue: 'AED 200-400M/yr',
  },
  {
    id: 'travel-co',
    name: 'Travel Co',
    arabic: 'ترافل كو',
    tagline: 'Travel, Mobility & Luxury',
    icon: Plane,
    color: 'from-cyan-500 to-teal-500',
    textColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500',
    products: ['Safar', 'Rakab', 'Fakhir', 'Airzy'],
    leadership: [
      { role: 'CEO', name: 'TBD', status: 'To Hire - Travel Industry Experience' },
      { role: 'VP Safar (OTA)', name: 'TBD', status: 'To Hire' },
      { role: 'VP Rakab (Mobility)', name: 'TBD', status: 'To Hire' },
      { role: 'VP Fakhir (Luxury)', name: 'TBD', status: 'To Hire' },
      { role: 'Head of Operations', name: 'TBD', status: 'To Hire' },
    ],
    teams: [
      { name: 'Safar Operations', headcount: 25, roles: ['Hotel Partners', 'Airline Partners', 'Experience Partners'] },
      { name: 'Rakab Driver Ops', headcount: 40, roles: ['Driver Onboarding', 'Fleet Management', 'Safety'] },
      { name: 'Fakhir Concierge', headcount: 15, roles: ['Luxury Concierge', 'Private Aviation', 'Yacht Charters'] },
      { name: 'Customer Service', headcount: 30, roles: ['24/7 Travel Support', 'Visa Assistance', 'Emergencies'] },
    ],
    headcount: { year1: 80, year3: 250, year5: 500 },
    techSupport: 'Rabtul provides: Booking engine, driver app, fleet management, inventory system',
    revenue: 'AED 180-350M/yr',
  },
  {
    id: 'bizone',
    name: 'BizOne',
    arabic: 'بيز ون',
    tagline: 'Merchant SaaS & POS',
    icon: Store,
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500',
    products: ['BizOne POS', 'BizOne CRM', 'BizOne Inventory', 'BizOne Analytics', 'BizOne Staff'],
    leadership: [
      { role: 'CEO', name: 'TBD', status: 'To Hire - SaaS Experience' },
      { role: 'VP Product', name: 'TBD', status: 'To Hire' },
      { role: 'VP Sales', name: 'TBD', status: 'To Hire' },
      { role: 'Head of Customer Success', name: 'TBD', status: 'To Hire' },
    ],
    teams: [
      { name: 'Sales', headcount: 20, roles: ['Enterprise Sales', 'SMB Sales', 'Channel Partners'] },
      { name: 'Customer Success', headcount: 15, roles: ['Onboarding', 'Training', 'Account Management'] },
      { name: 'Implementation', headcount: 10, roles: ['POS Setup', 'Integration', 'Data Migration'] },
      { name: 'Support', headcount: 15, roles: ['Technical Support', 'Hardware Support', 'SLA'] },
    ],
    headcount: { year1: 40, year3: 120, year5: 250 },
    techSupport: 'Rabtul provides: Core SaaS platform, POS software, analytics engine, integrations',
    revenue: 'AED 50-100M/yr',
  },
  {
    id: 'inventora',
    name: 'Inventora',
    arabic: 'إنفنتورا',
    tagline: 'Supply Chain & Inventory',
    icon: Factory,
    color: 'from-amber-500 to-yellow-600',
    textColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500',
    products: ['Inventora Warehouse', 'Inventora Finance', 'Inventora Logistics', 'Inventora Forecast'],
    leadership: [
      { role: 'CEO', name: 'TBD', status: 'To Hire - Supply Chain Experience' },
      { role: 'VP Operations', name: 'TBD', status: 'To Hire' },
      { role: 'VP Finance', name: 'TBD', status: 'To Hire - Inventory Financing' },
      { role: 'Head of Warehousing', name: 'TBD', status: 'To Hire' },
    ],
    teams: [
      { name: 'Warehouse Operations', headcount: 30, roles: ['Warehouse Managers', 'Inventory Clerks', 'Quality Control'] },
      { name: 'Logistics', headcount: 20, roles: ['Fleet Management', 'Route Planning', 'B2B Delivery'] },
      { name: 'Supplier Relations', headcount: 10, roles: ['Supplier Managers', 'Procurement', 'Negotiation'] },
      { name: 'Inventory Finance', headcount: 8, roles: ['Credit Analysts', 'Collections', 'Underwriting'] },
    ],
    headcount: { year1: 50, year3: 150, year5: 300 },
    techSupport: 'Rabtul provides: WMS, logistics platform, demand forecasting AI, supplier portal',
    revenue: 'AED 80-160M/yr',
  },
  {
    id: 'nextabizz',
    name: 'NextaBizz',
    arabic: 'نكستا بيز',
    tagline: 'B2B Marketplace',
    icon: Boxes,
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500',
    products: ['NextaBizz Market', 'NextaBizz Bulk', 'NextaBizz Credit', 'NextaBizz Import'],
    leadership: [
      { role: 'CEO', name: 'TBD', status: 'To Hire - B2B Marketplace Experience' },
      { role: 'VP Marketplace', name: 'TBD', status: 'To Hire' },
      { role: 'VP Supply', name: 'TBD', status: 'To Hire' },
      { role: 'Head of Credit', name: 'TBD', status: 'To Hire' },
    ],
    teams: [
      { name: 'Buyer Success', headcount: 15, roles: ['Account Managers', 'Onboarding', 'Training'] },
      { name: 'Supplier Success', headcount: 15, roles: ['Supplier Managers', 'Quality Assurance', 'Sourcing'] },
      { name: 'Trade Finance', headcount: 10, roles: ['Credit Analysts', 'Collections', 'Risk'] },
      { name: 'Operations', headcount: 10, roles: ['Order Management', 'Disputes', 'Fulfillment'] },
    ],
    headcount: { year1: 35, year3: 100, year5: 200 },
    techSupport: 'Rabtul provides: Marketplace platform, B2B payments, credit engine, catalog management',
    revenue: 'AED 120-240M/yr',
  },
  {
    id: 'adzy',
    name: 'Adzy',
    arabic: 'أدزي',
    tagline: 'Advertising & Marketing',
    icon: Megaphone,
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500',
    products: ['Adzy Network', 'Adzy DSP', 'Adzy Analytics', 'Adzy Creative', 'Adzy Influencer'],
    leadership: [
      { role: 'CEO', name: 'TBD', status: 'To Hire - AdTech Experience' },
      { role: 'VP Sales', name: 'TBD', status: 'To Hire' },
      { role: 'VP Product', name: 'TBD', status: 'To Hire' },
      { role: 'Head of Creative', name: 'TBD', status: 'To Hire' },
    ],
    teams: [
      { name: 'Sales', headcount: 15, roles: ['Enterprise Sales', 'Agency Relations', 'Self-Serve'] },
      { name: 'Ad Operations', headcount: 10, roles: ['Campaign Managers', 'Optimization', 'Reporting'] },
      { name: 'Creative Studio', headcount: 8, roles: ['Designers', 'Video Editors', 'Copywriters'] },
      { name: 'Data & Analytics', headcount: 8, roles: ['Data Scientists', 'BI Analysts', 'Attribution'] },
    ],
    headcount: { year1: 30, year3: 80, year5: 150 },
    techSupport: 'Rabtul provides: Ad serving, DSP, analytics platform, ML models',
    revenue: 'AED 50-150M/yr',
  },
  {
    id: 'rabtul',
    name: 'Rabtul',
    arabic: 'رابطول',
    tagline: 'Technology & AI Infrastructure',
    icon: Cloud,
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500',
    products: ['Rabtul Cloud', 'Rabtul AI', 'Rabtul APIs', 'Rabtul Data', 'Rabtul Security'],
    leadership: [
      { role: 'CEO / CTO', name: 'TBD', status: 'To Hire - Tech Leadership at Scale' },
      { role: 'VP Engineering', name: 'TBD', status: 'To Hire' },
      { role: 'VP Platform', name: 'TBD', status: 'To Hire' },
      { role: 'VP AI/ML', name: 'TBD', status: 'To Hire' },
      { role: 'VP Security', name: 'TBD', status: 'To Hire' },
      { role: 'VP Data', name: 'TBD', status: 'To Hire' },
    ],
    teams: [
      { name: 'Platform Engineering', headcount: 40, roles: ['Backend', 'Infrastructure', 'DevOps', 'SRE'] },
      { name: 'Mobile Engineering', headcount: 25, roles: ['iOS', 'Android', 'Flutter', 'React Native'] },
      { name: 'AI/ML', headcount: 20, roles: ['ML Engineers', 'Data Scientists', 'NLP', 'Computer Vision'] },
      { name: 'Data Platform', headcount: 15, roles: ['Data Engineers', 'BI', 'Analytics', 'ETL'] },
      { name: 'Security', headcount: 15, roles: ['Security Engineers', 'Pen Testing', 'SOC', 'Compliance'] },
      { name: 'QA & Testing', headcount: 15, roles: ['Automation', 'Manual QA', 'Performance', 'Mobile QA'] },
      { name: 'Product Design', headcount: 10, roles: ['UX Designers', 'UI Designers', 'Research', 'Design Systems'] },
    ],
    headcount: { year1: 100, year3: 300, year5: 600 },
    techSupport: 'PROVIDES TECH TO ALL 9 SISTER COMPANIES',
    revenue: 'AED 30-60M/yr (internal billing) + external clients',
    isSharedTech: true,
  },
  {
    id: 'eventora',
    name: 'Eventora',
    arabic: 'إيفينتورا',
    tagline: 'Events & Entertainment',
    icon: Ticket,
    color: 'from-rose-500 to-red-600',
    textColor: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500',
    products: ['Eventora Tickets', 'Eventora Host', 'Eventora Venues', 'Eventora Corporate', 'Eventora Sports'],
    leadership: [
      { role: 'CEO', name: 'TBD', status: 'To Hire - Events Industry Experience' },
      { role: 'VP Operations', name: 'TBD', status: 'To Hire' },
      { role: 'VP Partnerships', name: 'TBD', status: 'To Hire' },
      { role: 'Head of Corporate Events', name: 'TBD', status: 'To Hire' },
    ],
    teams: [
      { name: 'Venue Relations', headcount: 15, roles: ['Venue Partners', 'Negotiations', 'Inventory'] },
      { name: 'Event Operations', headcount: 20, roles: ['Event Managers', 'On-site Staff', 'Production'] },
      { name: 'Ticket Operations', headcount: 10, roles: ['Box Office', 'Fraud Prevention', 'Refunds'] },
      { name: 'Corporate Sales', headcount: 10, roles: ['Enterprise Events', 'Team Building', 'Conferences'] },
    ],
    headcount: { year1: 40, year3: 120, year5: 250 },
    techSupport: 'Rabtul provides: Ticketing platform, venue management, event app, NFT tickets',
    revenue: 'AED 40-80M/yr',
  },
];

// Shared Services (provided by RTMN Holding)
const sharedServices = [
  {
    name: 'Legal & Corporate',
    icon: Scale,
    headcount: 15,
    services: ['Corporate Legal', 'Commercial Contracts', 'IP & Trademarks', 'Litigation'],
    servedCompanies: 'All 10 companies',
    cost: 'Allocated by revenue %',
  },
  {
    name: 'Group Finance',
    icon: Calculator,
    headcount: 20,
    services: ['Consolidation', 'Tax', 'Audit', 'Treasury', 'Investor Relations'],
    servedCompanies: 'All 10 companies',
    cost: 'Allocated by revenue %',
  },
  {
    name: 'Group HR',
    icon: Users,
    headcount: 15,
    services: ['Talent Acquisition', 'Compensation & Benefits', 'L&D', 'ESOP Management'],
    servedCompanies: 'All 10 companies',
    cost: 'Allocated by headcount %',
  },
  {
    name: 'Compliance & Risk',
    icon: Shield,
    headcount: 25,
    services: ['Regulatory Compliance', 'Shariah Board', 'AML Policy', 'Enterprise Risk'],
    servedCompanies: 'All 10 companies',
    cost: 'Allocated by risk profile',
  },
  {
    name: 'Customer Experience Hub',
    icon: Headphones,
    headcount: 50,
    services: ['L1 Support (all products)', 'Multi-channel (chat, call, email)', 'Escalation Management'],
    servedCompanies: 'All 10 companies',
    cost: 'Allocated by ticket volume',
  },
  {
    name: 'Marketing & Brand',
    icon: Megaphone,
    headcount: 20,
    services: ['Brand Guidelines', 'Group PR', 'Shared Creative', 'Performance Marketing CoE'],
    servedCompanies: 'All 10 companies',
    cost: 'Allocated by marketing budget %',
  },
];

// How Rabtul Supports Each Company
const rabtulSupportMatrix = [
  {
    company: 'Nuqta Corp',
    platforms: ['Rewards Engine', 'BNPL Platform', 'Gamification Engine', 'Merchant Portal'],
    dedicatedEngineers: 8,
    sharedInfra: ['Auth', 'Payments', 'Analytics', 'Notifications'],
  },
  {
    company: 'Wasil Apps',
    platforms: ['Order Management', 'Rider App', 'Routing Engine', 'Real-time Tracking'],
    dedicatedEngineers: 15,
    sharedInfra: ['Auth', 'Payments', 'Maps', 'Notifications'],
  },
  {
    company: 'RTMN Finance',
    platforms: ['Core Banking', 'FX Engine', 'Card Platform', 'Compliance Tools'],
    dedicatedEngineers: 20,
    sharedInfra: ['Auth', 'KYC', 'Payments', 'Fraud Detection'],
  },
  {
    company: 'Travel Co',
    platforms: ['Booking Engine', 'Driver App', 'Concierge Platform', 'Inventory System'],
    dedicatedEngineers: 12,
    sharedInfra: ['Auth', 'Payments', 'Maps', 'Notifications'],
  },
  {
    company: 'BizOne',
    platforms: ['POS Software', 'CRM', 'Inventory Management', 'Analytics Dashboard'],
    dedicatedEngineers: 10,
    sharedInfra: ['Auth', 'Payments', 'Analytics', 'Notifications'],
  },
  {
    company: 'Inventora',
    platforms: ['WMS', 'Logistics Platform', 'Demand Forecasting AI', 'Supplier Portal'],
    dedicatedEngineers: 8,
    sharedInfra: ['Auth', 'Payments', 'Analytics', 'AI/ML'],
  },
  {
    company: 'NextaBizz',
    platforms: ['B2B Marketplace', 'Catalog Management', 'B2B Payments', 'Credit Engine'],
    dedicatedEngineers: 8,
    sharedInfra: ['Auth', 'Payments', 'Analytics', 'Credit Scoring'],
  },
  {
    company: 'Adzy',
    platforms: ['Ad Serving', 'DSP', 'Analytics', 'Creative Tools'],
    dedicatedEngineers: 10,
    sharedInfra: ['Auth', 'Analytics', 'AI/ML', 'CDN'],
  },
  {
    company: 'Eventora',
    platforms: ['Ticketing', 'Venue Management', 'Event App', 'NFT Tickets'],
    dedicatedEngineers: 6,
    sharedInfra: ['Auth', 'Payments', 'Analytics', 'Notifications'],
  },
];

// Hiring Roadmap by Phase
const hiringRoadmap = [
  {
    phase: 'Phase 1 - Foundation',
    timeline: 'Year 1',
    totalHeadcount: 500,
    breakdown: [
      { company: 'RTMN Holding', headcount: 50, focus: 'Group leadership + shared services' },
      { company: 'Nuqta Corp', headcount: 25, focus: 'Core team + merchants' },
      { company: 'Wasil Apps', headcount: 100, focus: 'Rider ops + logistics' },
      { company: 'RTMN Finance', headcount: 60, focus: 'Compliance + treasury' },
      { company: 'Travel Co', headcount: 80, focus: 'Rakab drivers + Safar ops' },
      { company: 'Rabtul', headcount: 100, focus: 'Core engineering' },
      { company: 'Others', headcount: 85, focus: 'BizOne, Inventora, NextaBizz, Adzy, Eventora' },
    ],
    keyHires: ['Group COO', 'Group CFO', '10 Company CEOs', 'VP Engineering'],
  },
  {
    phase: 'Phase 2 - Growth',
    timeline: 'Year 2-3',
    totalHeadcount: 1500,
    breakdown: [
      { company: 'RTMN Holding', headcount: 120, focus: 'Expanded shared services' },
      { company: 'Nuqta Corp', headcount: 80, focus: 'Scale merchants + credit' },
      { company: 'Wasil Apps', headcount: 400, focus: 'Multi-city expansion' },
      { company: 'RTMN Finance', headcount: 200, focus: 'GCC expansion' },
      { company: 'Travel Co', headcount: 250, focus: 'Full travel suite' },
      { company: 'Rabtul', headcount: 300, focus: 'AI/ML + platform scale' },
      { company: 'Others', headcount: 350, focus: 'Scale all verticals' },
    ],
    keyHires: ['GCC Country Managers', 'VP AI/ML', 'Chief Risk Officer'],
  },
  {
    phase: 'Phase 3 - Scale',
    timeline: 'Year 4-5',
    totalHeadcount: 3000,
    breakdown: [
      { company: 'RTMN Holding', headcount: 200, focus: 'Global operations' },
      { company: 'Nuqta Corp', headcount: 150, focus: 'GCC + MENA' },
      { company: 'Wasil Apps', headcount: 1000, focus: '6 GCC countries' },
      { company: 'RTMN Finance', headcount: 400, focus: 'Banking license' },
      { company: 'Travel Co', headcount: 500, focus: 'Regional leader' },
      { company: 'Rabtul', headcount: 600, focus: 'External clients + scale' },
      { company: 'Others', headcount: 650, focus: 'Market leadership' },
    ],
    keyHires: ['Board Members', 'Regional CEOs', 'IPO Readiness Team'],
  },
];

export default function RTMNTeamStructurePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Network },
    { id: 'holding', label: 'RTMN Holding', icon: Crown },
    { id: 'companies', label: '10 Companies', icon: Building2 },
    { id: 'rabtul', label: 'Rabtul Tech', icon: Cloud },
    { id: 'shared', label: 'Shared Services', icon: Share2 },
    { id: 'roadmap', label: 'Hiring Roadmap', icon: UserPlus },
  ];

  const getTotalHeadcount = (year: 'year1' | 'year3' | 'year5') => {
    return sisterCompanies.reduce((acc, c) => acc + c.headcount[year], 0);
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/rtmn-dashboard"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RTMN Dashboard</span>
            </Link>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full mb-4">
              <Users className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-bold">RTMN Digital Holding</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Team <span className="text-[#c9a227]">Structure</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Comprehensive organizational structure across RTMN Holding and 10 sister companies.
              Rabtul provides technology to all companies. Shared services reduce overhead.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-[#c9a227]">{getTotalHeadcount('year1')}</div>
              <div className="text-xs text-slate-400">Year 1 Team</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-purple-400">{getTotalHeadcount('year3').toLocaleString()}</div>
              <div className="text-xs text-slate-400">Year 3 Team</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-400">{getTotalHeadcount('year5').toLocaleString()}</div>
              <div className="text-xs text-slate-400">Year 5 Team</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-blue-400">10</div>
              <div className="text-xs text-slate-400">Companies</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-pink-400">6</div>
              <div className="text-xs text-slate-400">GCC Countries</div>
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
            {/* Org Structure Visual */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Network className="w-5 h-5 text-[#c9a227]" />
                RTMN Group Organizational Structure
              </h2>

              {/* Top Level - RTMN Holding */}
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-r from-[#c9a227] to-amber-600 rounded-xl p-6 text-center text-white max-w-md">
                  <Crown className="w-10 h-10 mx-auto mb-2" />
                  <div className="text-xl font-bold">RTMN Digital Holding</div>
                  <div className="text-sm opacity-80">آر تي إم إن الرقمية القابضة</div>
                  <div className="text-sm mt-2">Group CEO + C-Suite + Shared Services</div>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="flex justify-center mb-4">
                <div className="w-px h-8 bg-slate-600"></div>
              </div>

              {/* 10 Sister Companies */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {sisterCompanies.map((company) => (
                  <div
                    key={company.id}
                    className={`${company.bgColor} border ${company.borderColor} rounded-lg p-3 text-center hover:scale-105 transition-transform cursor-pointer`}
                    onClick={() => setActiveTab('companies')}
                  >
                    <company.icon className={`w-6 h-6 mx-auto mb-1 ${company.textColor}`} />
                    <div className={`text-sm font-bold ${company.textColor}`}>{company.name.split(' ')[0]}</div>
                    <div className="text-xs text-slate-400">{company.headcount.year1} → {company.headcount.year5}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Principles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/50">
                <Cloud className="w-10 h-10 text-purple-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Rabtul = Tech for All</h3>
                <p className="text-slate-400 text-sm">
                  All 9 sister companies use Rabtul for technology. No duplicate engineering.
                  Shared platforms, dedicated product teams.
                </p>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/50">
                <Share2 className="w-10 h-10 text-blue-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Shared Services</h3>
                <p className="text-slate-400 text-sm">
                  Legal, Finance, HR, Compliance, and Customer Support are shared across all
                  companies to reduce overhead and ensure consistency.
                </p>
              </div>
              <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/50">
                <Building2 className="w-10 h-10 text-emerald-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">P&L Ownership</h3>
                <p className="text-slate-400 text-sm">
                  Each company has a CEO with full P&L responsibility. Autonomy with accountability.
                  Group provides capital and shared resources.
                </p>
              </div>
            </div>

            {/* Summary Stats by Company */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-emerald-400" />
                Headcount by Company
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400">Company</th>
                      <th className="text-center py-3 px-4 text-slate-400">Year 1</th>
                      <th className="text-center py-3 px-4 text-slate-400">Year 3</th>
                      <th className="text-center py-3 px-4 text-slate-400">Year 5</th>
                      <th className="text-right py-3 px-4 text-slate-400">Revenue Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sisterCompanies.map((company) => (
                      <tr key={company.id} className="border-b border-slate-700/50 hover:bg-slate-800/30">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <company.icon className={`w-4 h-4 ${company.textColor}`} />
                            <span className="text-white font-medium">{company.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center text-slate-300">{company.headcount.year1}</td>
                        <td className="py-3 px-4 text-center text-slate-300">{company.headcount.year3}</td>
                        <td className="py-3 px-4 text-center text-slate-300">{company.headcount.year5}</td>
                        <td className="py-3 px-4 text-right text-emerald-400">{company.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-[#c9a227]/10">
                      <td className="py-3 px-4 font-bold text-white">TOTAL</td>
                      <td className="py-3 px-4 text-center font-bold text-[#c9a227]">{getTotalHeadcount('year1')}</td>
                      <td className="py-3 px-4 text-center font-bold text-[#c9a227]">{getTotalHeadcount('year3').toLocaleString()}</td>
                      <td className="py-3 px-4 text-center font-bold text-[#c9a227]">{getTotalHeadcount('year5').toLocaleString()}</td>
                      <td className="py-3 px-4 text-right font-bold text-emerald-400">AED 2B+/yr</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* RTMN Holding Tab */}
        {activeTab === 'holding' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Crown className="w-5 h-5 text-[#c9a227]" />
                RTMN Digital Holding - Group Leadership
              </h2>
              <p className="text-slate-300 mb-6">
                The holding company provides strategic direction, capital allocation, and shared services
                to all 10 sister companies. Group C-Suite ensures alignment and synergy.
              </p>

              {/* Group C-Suite */}
              <div className="space-y-4">
                {rtmnHoldingLeadership.map((leader, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${leader.color} flex items-center justify-center flex-shrink-0`}>
                        <Briefcase className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <div>
                            <h3 className="text-lg font-bold text-white">{leader.role}</h3>
                            <p className="text-sm text-slate-400">{leader.arabic}</p>
                          </div>
                          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${
                            leader.status === 'Founder' ? 'bg-[#c9a227]/20 text-[#c9a227]' : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            {leader.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                          <div>
                            <p className="text-xs text-slate-500 mb-2">Key Responsibilities</p>
                            <ul className="space-y-1">
                              {leader.responsibilities.map((resp, j) => (
                                <li key={j} className="text-sm text-slate-300 flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 mb-2">Direct Reports</p>
                            <div className="flex flex-wrap gap-1">
                              {leader.directReports.map((report, j) => (
                                <span key={j} className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">
                                  {report}
                                </span>
                              ))}
                            </div>
                            <div className="mt-3 px-3 py-2 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
                              <span className="text-xs text-slate-400">Compensation: </span>
                              <span className="text-sm text-emerald-400 font-bold">{leader.compensation}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reporting Structure */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-400" />
                Reporting Structure
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="font-bold text-[#c9a227] mb-2">Group CEO</div>
                  <p className="text-slate-400 text-sm">
                    Reports to: Board of Directors • Direct reports: 10 Company CEOs + 4 Group C-Suite
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sisterCompanies.map((company) => (
                    <div key={company.id} className={`${company.bgColor} rounded-lg p-4 border ${company.borderColor}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <company.icon className={`w-4 h-4 ${company.textColor}`} />
                        <span className={`font-bold ${company.textColor}`}>{company.name} CEO</span>
                      </div>
                      <p className="text-slate-400 text-xs">Reports to: Group CEO</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 10 Companies Tab */}
        {activeTab === 'companies' && (
          <div className="space-y-6">
            {sisterCompanies.map((company) => (
              <div
                key={company.id}
                className={`${company.bgColor} rounded-xl border-2 ${company.borderColor} overflow-hidden`}
              >
                <button
                  onClick={() => setExpandedCompany(expandedCompany === company.id ? null : company.id)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${company.color} flex items-center justify-center`}>
                      <company.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${company.textColor}`}>{company.name}</h3>
                      <p className="text-sm text-slate-400">{company.arabic} • {company.tagline}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <div className="text-slate-400 text-xs">Headcount Y1→Y5</div>
                      <div className={`font-bold ${company.textColor}`}>{company.headcount.year1} → {company.headcount.year5}</div>
                    </div>
                    {expandedCompany === company.id ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {expandedCompany === company.id && (
                  <div className="p-5 pt-0 border-t border-slate-700/50 mt-2">
                    {/* Products */}
                    <div className="mb-4">
                      <p className="text-xs text-slate-500 mb-2">Products</p>
                      <div className="flex flex-wrap gap-2">
                        {company.products.map((product, j) => (
                          <span key={j} className={`px-3 py-1 ${company.bgColor} border ${company.borderColor} rounded-full text-sm ${company.textColor}`}>
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Leadership */}
                    <div className="mb-4">
                      <p className="text-xs text-slate-500 mb-2">Leadership Team</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {company.leadership.map((leader, j) => (
                          <div key={j} className="bg-slate-900/50 rounded-lg p-3 flex items-center justify-between">
                            <div>
                              <span className="text-white font-medium text-sm">{leader.role}</span>
                              <p className="text-xs text-slate-500">{leader.name}</p>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded ${
                              leader.status.includes('To Hire') ? 'bg-blue-500/20 text-blue-400' : 'bg-emerald-500/20 text-emerald-400'
                            }`}>
                              {leader.status.includes('To Hire') ? 'Hiring' : 'Filled'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Teams */}
                    <div className="mb-4">
                      <p className="text-xs text-slate-500 mb-2">Teams & Headcount</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {company.teams.map((team, j) => (
                          <div key={j} className="bg-slate-900/50 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-white font-medium text-sm">{team.name}</span>
                              <span className={`font-bold ${company.textColor}`}>{team.headcount}</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {team.roles.map((role, k) => (
                                <span key={k} className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-400">
                                  {role}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Support from Rabtul */}
                    {company.isSharedTech ? (
                      <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Cloud className="w-5 h-5 text-purple-400" />
                          <span className="font-bold text-purple-400">Core Technology Provider</span>
                        </div>
                        <p className="text-white">{company.techSupport}</p>
                      </div>
                    ) : (
                      <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Cloud className="w-5 h-5 text-purple-400" />
                          <span className="font-bold text-purple-400">Tech from Rabtul</span>
                        </div>
                        <p className="text-slate-300 text-sm">{company.techSupport}</p>
                      </div>
                    )}

                    {/* Note for Nuqta Corp */}
                    {company.note && (
                      <div className="mt-4 bg-[#c9a227]/10 rounded-lg p-4 border border-[#c9a227]/30">
                        <p className="text-[#c9a227] text-sm">{company.note}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Rabtul Tech Tab */}
        {activeTab === 'rabtul' && (
          <div className="space-y-8">
            {/* Rabtul Overview */}
            <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/10 rounded-xl p-6 border-2 border-purple-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Rabtul</h2>
                  <p className="text-purple-400">Technology & AI Infrastructure for All RTMN Companies</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6">
                Rabtul is the technology backbone of RTMN Group. Instead of each company building their
                own tech, Rabtul provides shared platforms, dedicated engineering teams, and AI/ML capabilities.
                This creates massive efficiency and ensures consistent quality across all products.
              </p>

              {/* Rabtul Teams */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sisterCompanies.find(c => c.id === 'rabtul')?.teams.map((team, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-purple-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-bold">{team.name}</span>
                      <span className="text-purple-400 font-bold">{team.headcount}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {team.roles.map((role, j) => (
                        <span key={j} className="text-xs bg-purple-500/20 px-2 py-0.5 rounded text-purple-300">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How Rabtul Supports Each Company */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-blue-400" />
                How Rabtul Supports Each Company
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400">Company</th>
                      <th className="text-left py-3 px-4 text-slate-400">Dedicated Platforms</th>
                      <th className="text-center py-3 px-4 text-slate-400">Engineers</th>
                      <th className="text-left py-3 px-4 text-slate-400">Shared Infrastructure</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rabtulSupportMatrix.map((item, i) => (
                      <tr key={i} className="border-b border-slate-700/50 hover:bg-slate-800/30">
                        <td className="py-3 px-4 font-medium text-white">{item.company}</td>
                        <td className="py-3 px-4">
                          <div className="flex flex-wrap gap-1">
                            {item.platforms.map((platform, j) => (
                              <span key={j} className="text-xs bg-purple-500/20 px-2 py-0.5 rounded text-purple-300">
                                {platform}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="text-purple-400 font-bold">{item.dedicatedEngineers}</span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex flex-wrap gap-1">
                            {item.sharedInfra.map((infra, j) => (
                              <span key={j} className="text-xs bg-slate-700 px-2 py-0.5 rounded text-slate-300">
                                {infra}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-purple-500/10">
                      <td className="py-3 px-4 font-bold text-white">TOTAL DEDICATED</td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4 text-center font-bold text-purple-400">
                        {rabtulSupportMatrix.reduce((acc, item) => acc + item.dedicatedEngineers, 0)}
                      </td>
                      <td className="py-3 px-4"></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Shared Platforms */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Auth & Identity', icon: Lock, desc: 'Single SSO for all products', color: 'text-blue-400' },
                { name: 'Payment Gateway', icon: CreditCard, desc: 'Unified payments infrastructure', color: 'text-emerald-400' },
                { name: 'AI/ML Platform', icon: Brain, desc: 'Shared models and training', color: 'text-purple-400' },
                { name: 'Data Platform', icon: Database, desc: 'Unified data warehouse', color: 'text-orange-400' },
                { name: 'Notifications', icon: MessageSquare, desc: 'Push, SMS, Email, WhatsApp', color: 'text-pink-400' },
                { name: 'Analytics', icon: BarChart3, desc: 'Real-time analytics for all', color: 'text-cyan-400' },
                { name: 'CDN & Media', icon: Globe, desc: 'Content delivery network', color: 'text-green-400' },
                { name: 'Security & SOC', icon: Shield, desc: '24/7 security operations', color: 'text-red-400' },
              ].map((platform, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <platform.icon className={`w-8 h-8 ${platform.color} mb-2`} />
                  <div className="font-bold text-white">{platform.name}</div>
                  <p className="text-xs text-slate-400">{platform.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Shared Services Tab */}
        {activeTab === 'shared' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-xl p-6 border-2 border-blue-500">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-blue-400" />
                Shared Services (RTMN Holding)
              </h2>
              <p className="text-slate-300 mb-6">
                These services are provided centrally by RTMN Holding to all 10 sister companies.
                This reduces overhead, ensures consistency, and allows companies to focus on their core business.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sharedServices.map((service, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{service.name}</h3>
                        <p className="text-sm text-blue-400">{service.headcount} people</p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <p className="text-xs text-slate-500 mb-2">Services Provided</p>
                      <div className="flex flex-wrap gap-1">
                        {service.services.map((s, j) => (
                          <span key={j} className="text-xs bg-blue-500/20 px-2 py-1 rounded text-blue-300">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-slate-800/50 rounded-lg p-2">
                        <span className="text-slate-500 text-xs">Serves</span>
                        <p className="text-white">{service.servedCompanies}</p>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-2">
                        <span className="text-slate-500 text-xs">Cost Allocation</span>
                        <p className="text-white">{service.cost}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Shared Services */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Shared Services Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">
                    {sharedServices.reduce((acc, s) => acc + s.headcount, 0)}
                  </div>
                  <div className="text-xs text-slate-400">Total Headcount</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-400">6</div>
                  <div className="text-xs text-slate-400">Service Centers</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">10</div>
                  <div className="text-xs text-slate-400">Companies Served</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">30-40%</div>
                  <div className="text-xs text-slate-400">Cost Savings</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hiring Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <div className="space-y-8">
            {hiringRoadmap.map((phase, i) => (
              <div key={i} className={`rounded-xl p-6 border-2 ${
                i === 0 ? 'border-emerald-500 bg-emerald-500/10' :
                i === 1 ? 'border-blue-500 bg-blue-500/10' :
                'border-purple-500 bg-purple-500/10'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-white">{phase.phase}</h2>
                    <p className="text-slate-400">{phase.timeline}</p>
                  </div>
                  <div className={`text-3xl font-black ${
                    i === 0 ? 'text-emerald-400' :
                    i === 1 ? 'text-blue-400' :
                    'text-purple-400'
                  }`}>
                    {phase.totalHeadcount.toLocaleString()} People
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  {phase.breakdown.map((item, j) => (
                    <div key={j} className="bg-slate-900/50 rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <div className="text-white font-medium">{item.company}</div>
                        <div className="text-xs text-slate-400">{item.focus}</div>
                      </div>
                      <div className={`text-lg font-bold ${
                        i === 0 ? 'text-emerald-400' :
                        i === 1 ? 'text-blue-400' :
                        'text-purple-400'
                      }`}>
                        {item.headcount}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-2">Key Hires</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.keyHires.map((hire, j) => (
                      <span key={j} className={`px-3 py-1 rounded-full text-sm ${
                        i === 0 ? 'bg-emerald-500/20 text-emerald-400' :
                        i === 1 ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {hire}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Hiring Markets */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#c9a227]" />
                Key Hiring Markets
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { country: 'UAE', flag: '🇦🇪', roles: 'All roles', hq: true },
                  { country: 'Saudi', flag: '🇸🇦', roles: 'Ops, Sales', hq: false },
                  { country: 'India', flag: '🇮🇳', roles: 'Engineering', hq: false },
                  { country: 'Egypt', flag: '🇪🇬', roles: 'Support, Ops', hq: false },
                  { country: 'Pakistan', flag: '🇵🇰', roles: 'Engineering', hq: false },
                  { country: 'Jordan', flag: '🇯🇴', roles: 'Engineering, Design', hq: false },
                ].map((market, i) => (
                  <div key={i} className={`rounded-xl p-4 text-center border ${
                    market.hq ? 'bg-[#c9a227]/10 border-[#c9a227]' : 'bg-slate-800/50 border-slate-700/50'
                  }`}>
                    <div className="text-3xl mb-2">{market.flag}</div>
                    <div className="font-bold text-white">{market.country}</div>
                    <div className="text-xs text-slate-400">{market.roles}</div>
                    {market.hq && (
                      <span className="text-xs bg-[#c9a227]/20 px-2 py-0.5 rounded text-[#c9a227] mt-2 inline-block">
                        HQ
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/10 border-t border-b border-[#c9a227]/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Building the Future of GCC Digital Economy
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            {getTotalHeadcount('year5').toLocaleString()}+ talented individuals across 10 companies, united by a mission
            to build the world's leading Islamic super-app ecosystem.
          </p>
          <Link
            href="/rtmn-dashboard"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c9a227] to-amber-600 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-opacity"
          >
            <Network className="w-6 h-6" />
            Explore RTMN Dashboard
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
