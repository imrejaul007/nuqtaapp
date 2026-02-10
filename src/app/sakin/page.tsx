'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Home, DollarSign, Calendar, Shield, TrendingUp, Users, Target,
  Rocket, CheckCircle, AlertTriangle, Clock, Building, Globe,
  Smartphone, ArrowRight, Star, Zap, BarChart3, PieChart, Award,
  Handshake, Store, RefreshCw, Lock, Percent, BadgeCheck, Briefcase,
  CreditCard, FileText, Calculator, MapPin, Phone, Mail, Gift,
  Crown, Wallet, Key, Car, ChevronRight, ChevronDown, ChevronUp,
  Building2, Banknote, Scale, UserCheck, Landmark, PiggyBank,
  LineChart, CircleDollarSign, ShieldCheck, HeartHandshake,
  Search, Eye, MessageCircle, CalendarDays, Sparkles, Camera, Layers,
  ShoppingBag, Coins, Network, ArrowRightLeft, Truck, Package, Wrench
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Executive Summary Stats
const keyStats = [
  { label: 'Target Market', value: '900K', suffix: 'households', color: 'text-blue-400' },
  { label: 'Year 1 Users', value: '6,000', suffix: 'tenants', color: 'text-green-400' },
  { label: 'Avg Move-in', value: '68K', suffix: 'AED', color: 'text-purple-400' },
  { label: 'Net Profit/User', value: '2,500', suffix: 'AED/year', color: 'text-[#c9a227]' },
];

// Full Move-in Cost Calculator
const moveInCostExample = {
  annualRent: 60000,
  deposit: 3000,
  brokerFee: 3000,
  registration: 2000,
  totalMoveIn: 68000,
  monthlyPayment: 6300, // with Sakin financing
};

// Three Pillars of Sakin
const sakinPillars = [
  {
    pillar: 'Find a Home',
    icon: 'Search',
    description: 'Property marketplace with broker + owner listings',
    features: ['Broker listings', 'Owner listings', 'Corporate housing', 'Monthly furnished rentals', 'Tourist short stays'],
    status: 'Phase 2',
  },
  {
    pillar: 'Pay & Finance',
    icon: 'Banknote',
    description: 'Core financing products for move-in costs',
    features: ['Annual rent financing', 'Deposit financing', 'Agent commission financing', 'Emergency rent loans'],
    status: 'Phase 1',
  },
  {
    pillar: 'Move & Set Up',
    icon: 'Truck',
    description: 'Future services layer after traction',
    features: ['Furniture BNPL', 'Moving services', 'Cleaning', 'Utility setup', 'Insurance'],
    status: 'Phase 3',
  },
];

// NEW: Tourist Short-Term Rentals
const touristRentals = {
  title: 'Sakin Stays - Short-Term Rentals for Tourists',
  description: 'Furnished apartments for tourists - better than hotels, cheaper than Airbnb, with Nuqta ecosystem benefits',
  targetAudience: [
    { segment: 'Extended Stay Tourists', stay: '1-4 weeks', need: 'Want apartment, not hotel room' },
    { segment: 'Family Visitors', stay: '2-8 weeks', need: 'Multiple bedrooms, kitchen' },
    { segment: 'Business Travelers', stay: '1-3 months', need: 'Comfortable, central location' },
    { segment: 'Digital Nomads', stay: '1-6 months', need: 'Wifi, workspace, flexible terms' },
  ],
  propertyTypes: [
    { type: 'Studio', bedrooms: 0, avgNight: 150, avgMonth: 3500, locations: ['Dubai Marina', 'JBR', 'Downtown'] },
    { type: '1 Bedroom', bedrooms: 1, avgNight: 250, avgMonth: 5500, locations: ['Business Bay', 'Marina', 'JLT'] },
    { type: '2 Bedroom', bedrooms: 2, avgNight: 400, avgMonth: 8500, locations: ['Downtown', 'Palm', 'Marina'] },
    { type: '3+ Bedroom', bedrooms: 3, avgNight: 600, avgMonth: 12000, locations: ['Palm', 'Emirates Hills', 'JBR'] },
  ],
  vsCompetitors: [
    { feature: 'Best Rates', sakin: 'Google rate on payments', airbnb: 'Standard card rates', hotels: 'Standard card rates' },
    { feature: 'Earn Rewards', sakin: 'Nuqta coins on stay', airbnb: 'None', hotels: 'Hotel points only' },
    { feature: 'BNPL', sakin: 'Qist for monthly stays', airbnb: 'Not available', hotels: 'Not available' },
    { feature: 'Delivery', sakin: 'Wasil integrated', airbnb: 'Use other apps', hotels: 'Expensive room service' },
    { feature: 'Welcome Kit', sakin: 'Free via Wasil', airbnb: 'None', hotels: 'Minibar only' },
    { feature: 'Currency', sakin: 'Hawil Card accepted', airbnb: 'Credit card only', hotels: 'Credit card only' },
  ],
  ecosystemBenefits: [
    { benefit: 'Pay with Hawil Card', description: 'Use Google rate currency - save 3-5%' },
    { benefit: 'Wasil Delivery', description: 'Groceries, pharmacy, food delivered to apartment' },
    { benefit: 'Qist for Long Stays', description: 'Finance monthly stay, pay after returning home' },
    { benefit: 'Nuqta Merchant Deals', description: 'Exclusive deals at 500+ merchants' },
    { benefit: 'Concierge Service', description: 'Restaurant reservations, tours, experiences' },
    { benefit: 'Earn Coins', description: 'Coins on booking + all purchases' },
  ],
  bookingProcess: [
    { step: 1, title: 'Browse & Book', description: 'Find apartment in Sakin app, pay with Hawil Card or Qist' },
    { step: 2, title: 'Get Welcome Kit', description: 'Wasil delivers essentials before you arrive' },
    { step: 3, title: 'Check In', description: 'Digital key, 24/7 support via WhatsApp' },
    { step: 4, title: 'Live Like a Local', description: 'Use Nuqta ecosystem for everything' },
    { step: 5, title: 'Check Out', description: 'Extend anytime, or cash out remaining Hawil balance' },
  ],
  revenue: {
    commission: '10-15% per booking',
    avgBookingValue: 8000,
    avgStay: '2 weeks',
    target: '500 bookings/month by Year 2',
  },
};

// Hawil Card Payment Integration
const hawilCardPayment = {
  headline: 'Pay Rent & Stays with Hawil Card',
  description: 'Residents and tourists can pay for all Sakin services using Hawil Card for the best exchange rates',
  forResidents: {
    title: 'Residents - Monthly Rent Payments',
    benefits: [
      { benefit: 'Pay in Home Currency', description: 'Send money from abroad to pay UAE rent at Google rate' },
      { benefit: 'Auto-Debit Setup', description: 'Set up automatic monthly payments from Hawil Card' },
      { benefit: 'Split with Family', description: 'Parents/family abroad can contribute to rent via Hawil' },
      { benefit: 'Earn Coins', description: 'Get Nuqta coins on every rent payment' },
    ],
    example: {
      monthlyRent: '6,300 AED',
      bankTransfer: '6,615 AED (5% FX fee from abroad)',
      hawilCard: '6,300 AED (0% FX fee)',
      yearlySavings: '3,780 AED saved',
    },
  },
  forTourists: {
    title: 'Tourists - Sakin Stays Bookings',
    benefits: [
      { benefit: 'Google Rate', description: 'Pay for short-term stays at mid-market exchange rate' },
      { benefit: 'No Foreign Fees', description: 'Save 3-5% compared to credit card bookings' },
      { benefit: 'Instant Booking', description: 'Pay directly from Hawil Card, instant confirmation' },
      { benefit: 'Double Coins', description: '2X Nuqta coins on all Sakin Stays bookings' },
    ],
    example: {
      twoWeekStay: '5,500 AED (1BR Marina)',
      creditCardCost: '5,775 AED (5% FX fee)',
      hawilCardCost: '5,500 AED (0% FX fee)',
      savings: '275 AED saved + 550 coins',
    },
  },
};

// Broker Partnership Model
const brokerPartnershipModel = {
  valueForBrokers: [
    { benefit: 'Faster Deal Closure', description: 'Tenants can afford upfront with financing' },
    { benefit: 'More Qualified Tenants', description: 'Pre-approved financing = serious buyers' },
    { benefit: 'Guaranteed Commission', description: 'Sakin pays broker fee on day 1' },
    { benefit: 'New Lead Channel', description: 'Access to Nuqta user base' },
  ],
  revenueFromBrokers: [
    { source: 'Broker Fee Spread', description: 'Finance broker fee, earn spread', value: '~500 AED/deal' },
    { source: 'Referral Commission', description: 'Broker refers tenant to Sakin', value: '200-500 AED/referral' },
    { source: 'Premium Listing', description: 'Brokers pay for featured listings', value: '500-2,000 AED/listing' },
  ],
  targetBrokers: '50-100 brokers in first 6 months',
};

// Cost Structure (Lean Model)
const costStructure = {
  oneTimeSetup: [
    { item: 'Company setup', cost: 30000 },
    { item: 'Legal & compliance', cost: 20000 },
    { item: 'Tech (self-built)', cost: 10000 },
    { item: 'Misc setup', cost: 20000 },
  ],
  monthlyTeam: [
    { role: 'Operations Manager', cost: 12000 },
    { role: 'Credit Analyst', cost: 8000 },
    { role: 'Customer Support', cost: 5000 },
    { role: 'Broker Partnerships', cost: 8000 },
  ],
  monthlyOther: [
    { item: 'Office/coworking', cost: 5000 },
    { item: 'Cloud/tools', cost: 5000 },
    { item: 'Legal/compliance', cost: 5000 },
    { item: 'Payment/misc', cost: 15000 },
  ],
  totalSetup: 80000,
  monthlyBurn: 65000,
  annualBurn: 800000,
  breakEvenUsers: 320,
};

// Value Propositions
const tenantBenefits = [
  { icon: Calendar, title: 'Pay Monthly', description: 'No more annual lump sum. Split your entire move-in cost into 12 easy payments.' },
  { icon: Gift, title: '100 AED Nuqta+ Discount', description: 'Nuqta+ members get 100 AED off rent every month.' },
  { icon: Wallet, title: 'No Large Upfront Cash', description: 'No need for 68K AED upfront. Pay ~6,300/month instead.' },
  { icon: Shield, title: 'No Broker Hassle', description: 'We handle broker negotiations and payments for you.' },
  { icon: Smartphone, title: 'One Simple Payment', description: 'Rent + deposit + broker + registration = one monthly bill.' },
  { icon: Award, title: 'Earn Coins Monthly', description: 'Get Nuqta coins every month you pay on time.' },
];

const landlordBenefits = [
  { icon: Banknote, title: 'Full Rent Upfront', description: 'Receive your entire annual rent on day one.' },
  { icon: ShieldCheck, title: 'Zero Payment Risk', description: 'Sakin guarantees payment. No tenant default worries.' },
  { icon: CircleDollarSign, title: 'No Platform Fees', description: 'You receive 100% of the agreed rent amount.' },
  { icon: FileText, title: 'Simple Paperwork', description: 'We handle all the financing complexity.' },
];

const bankBenefits = [
  { icon: TrendingUp, title: 'Large Volume', description: 'Access to billions in rent financing annually.' },
  { icon: UserCheck, title: 'Low-Risk Customers', description: 'Salaried professionals with verified income.' },
  { icon: RefreshCw, title: 'Automated Repayments', description: 'Salary-linked auto-debit ensures timely payments.' },
  { icon: PiggyBank, title: 'Predictable Returns', description: 'Fixed fee income on consumer financing.' },
];

// Pricing Tiers
const pricingTiers = [
  {
    tier: 'Standard',
    monthlyFee: '1%',
    annualFee: '12%',
    coinBack: '100 AED',
    effectiveCost: '~9%',
    color: 'border-slate-500',
    bgColor: 'bg-slate-800/30',
    requirements: ['UAE residence visa', 'Minimum 6 months employment', 'Salary 8,000+ AED'],
    popular: false
  },
  {
    tier: 'Nuqta+ Member',
    monthlyFee: '1%',
    annualFee: '12%',
    coinBack: '100 AED + Nuqta+',
    effectiveCost: '~7%',
    color: 'border-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    requirements: ['Nuqta+ membership (99 AED/mo)', 'UAE residence visa', 'Salary 8,000+ AED'],
    popular: true
  },
  {
    tier: 'Premium',
    monthlyFee: '0.85%',
    annualFee: '10.2%',
    coinBack: '100 AED + Nuqta+',
    effectiveCost: '~5.5%',
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
    requirements: ['12+ months Sakin history', 'Perfect payment record', 'Salary 15,000+ AED'],
    popular: false
  },
];

// Unit Economics (Full Move-in Financing)
const unitEconomics = {
  avgMoveIn: 68000, // Total: rent + deposit + broker + registration
  tenantFee: 8160, // 12% of 68K
  bankCost: 4080, // 6% of 68K
  coinCost: 500, // Real cost of 100 AED coin x 12
  operatingCost: 1000, // Customer support, tech, etc.
  paymentFees: 300, // Card/auto-debit fees
  netProfit: 2280, // Conservative estimate
  nuqtaPlusFee: 1188, // 99 x 12
  totalRevenueWithNuqta: 3468, // Net + Nuqta+ conversion
  grossSpread: 4080, // 8160 - 4080
};

// Financial Projections (aligned with business plan)
const financialProjections = [
  { year: 'Year 1', users: 6000, moveInVolume: 408, revenue: 49, netProfit: 15, capitalNeeded: 100 },
  { year: 'Year 2', users: 25000, moveInVolume: 1700, revenue: 204, netProfit: 62, capitalNeeded: 250 },
  { year: 'Year 3', users: 60000, moveInVolume: 4080, revenue: 490, netProfit: 150, capitalNeeded: 500 },
];

// GCC Expansion
const gccExpansion = {
  headline: 'Find Housing Across the Gulf',
  description: 'Sakin expands to serve expats and tourists across all 6 GCC countries',
  countries: [
    { country: 'UAE', flag: '🇦🇪', status: 'Active', avgRent: '60,000 AED', timeline: '2027' },
    { country: 'Saudi Arabia', flag: '🇸🇦', status: 'Phase 2', avgRent: '45,000 SAR', timeline: '2028' },
    { country: 'Qatar', flag: '🇶🇦', status: 'Phase 2', avgRent: '6,000 QAR/mo', timeline: '2028' },
    { country: 'Kuwait', flag: '🇰🇼', status: 'Phase 3', avgRent: '4,500 KWD', timeline: '2029' },
    { country: 'Bahrain', flag: '🇧🇭', status: 'Phase 3', avgRent: '4,000 BHD', timeline: '2029' },
    { country: 'Oman', flag: '🇴🇲', status: 'Phase 3', avgRent: '4,000 OMR', timeline: '2029' },
  ],
  benefits: [
    'One profile works across all GCC countries',
    'Credit history from UAE helps in Saudi',
    'Relocate within GCC with Sakin support',
    'Furnished stays for GCC business travelers',
    'Corporate packages for multi-country teams',
  ],
};

// Roadmap Phases
const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    timeline: 'Q2 2026',
    status: 'in_progress',
    milestones: [
      'Secure NBFC/bank partnership',
      'Legal entity setup (sister company)',
      'Regulatory approval (CBUAE)',
      'Build core financing platform MVP',
      'Launch Sakin Properties marketplace (beta)',
      'Risk scoring model development',
    ],
    color: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    phase: 'Phase 2',
    title: 'Beta Launch',
    timeline: 'Q3 2026',
    status: 'pending',
    milestones: [
      'Pilot financing with 500 users',
      'Partner with 3-5 real estate agencies',
      'Scale Sakin Properties to 1,000+ listings',
      'Launch virtual tours & video walkthroughs',
      'Integrate with Nuqta+ for coin rewards',
      'Launch salary auto-debit',
    ],
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    phase: 'Phase 3',
    title: 'Scale',
    timeline: 'Q4 2026',
    status: 'pending',
    milestones: [
      'Full public launch (Properties + Financing)',
      'Scale to 5,000+ financing users',
      'Grow to 5,000+ verified property listings',
      'Launch direct landlord-tenant chat',
      'Expand broker partnerships',
      'Add insurance products',
    ],
    color: 'border-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    phase: 'Phase 4',
    title: 'Expansion',
    timeline: '2027',
    status: 'pending',
    milestones: [
      'Reach 25,000+ financing users',
      'Grow to 15,000+ property listings',
      'Launch short-term rentals (Airbnb-style)',
      'Launch car financing (Sakin Auto)',
      'Add home purchase financing',
      'Expand to Saudi Arabia',
    ],
    color: 'border-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
  },
];

// Risk Mitigation
const risks = [
  {
    risk: 'Tenant Defaults',
    severity: 'high',
    mitigation: [
      'Mandatory salary verification',
      'Auto-debit from salary account',
      'Credit bureau checks',
      'Security deposit (1-2 months)',
      'Employer verification',
    ],
  },
  {
    risk: 'High Bank Financing Costs',
    severity: 'medium',
    mitigation: [
      'Volume-based rate negotiation',
      'Multiple bank partnerships',
      'Co-lending structures',
      'Risk-sharing agreements',
    ],
  },
  {
    risk: 'Low User Adoption',
    severity: 'medium',
    mitigation: [
      'Nuqta+ coin incentives',
      'Broker commission programs',
      'In-app Nuqta promotion',
      'Employer partnership deals',
    ],
  },
  {
    risk: 'Regulatory Changes',
    severity: 'low',
    mitigation: [
      'Proactive CBUAE engagement',
      'Legal compliance team',
      'Flexible product structure',
      'Regular audits',
    ],
  },
];

// GTM Channels
const gtmChannels = [
  {
    channel: 'Nuqta App Users',
    icon: Smartphone,
    tactics: ['In-app banners', 'Push notifications', 'Rent reminder integration'],
    volume: '50,000+ existing users',
    priority: 'critical',
  },
  {
    channel: 'Real Estate Brokers',
    icon: Building,
    tactics: ['Commission per referral', 'Faster deal closure', 'Co-branded materials'],
    volume: '200+ agencies in UAE',
    priority: 'high',
  },
  {
    channel: 'Employers/Corporates',
    icon: Briefcase,
    tactics: ['HR benefit programs', 'Salary-linked plans', 'Corporate housing deals'],
    volume: 'Fortune 500 + SMEs',
    priority: 'high',
  },
  {
    channel: 'Property Developers',
    icon: Building2,
    tactics: ['Tenant financing option', 'Higher occupancy rates', 'Premium positioning'],
    volume: 'Emaar, Damac, etc.',
    priority: 'medium',
  },
];

// Competitive Comparison
const competitors = [
  { name: 'Sakin', monthlyRent: true, rewards: '100 AED/mo + Nuqta+', ecosystem: 'Full Nuqta ecosystem', crossSell: 'Very High', retention: 'Very High' },
  { name: 'Rentify', monthlyRent: true, rewards: 'Limited cashback', ecosystem: 'Standalone', crossSell: 'Low', retention: 'Medium' },
  { name: 'Keyper', monthlyRent: true, rewards: 'None', ecosystem: 'Property management', crossSell: 'Medium', retention: 'Medium' },
  { name: 'Traditional Bank', monthlyRent: false, rewards: 'None', ecosystem: 'Banking only', crossSell: 'Low', retention: 'Low' },
];

// Corporate Structure
const corporateStructure = {
  parentCompany: 'Nuqta Group',
  subsidiary: 'Sakin Fintech LLC',
  ownership: '100% owned by Nuqta Group',
  license: 'NBFC / Consumer Lending',
  regulator: 'Central Bank of UAE (CBUAE)',
};

// Sakin Properties - Business Model
const propertiesMarketOpportunity = {
  totalRentalMarket: '54B AED',
  onlineSearchShare: '85%',
  currentPlayers: ['Property Finder', 'Bayut', 'Dubizzle'],
  painPoints: ['No financing integration', 'Unverified listings', 'No rewards'],
  sakinAdvantage: 'Only platform with rent financing + Nuqta rewards',
};

// Sakin Properties - Revenue Model
const propertiesRevenueModel = [
  { source: 'Featured Listings', description: 'Landlords/agents pay to feature properties', revenue: '500-2,000 AED/listing', margin: 'High' },
  { source: 'Lead Generation', description: 'Charge agents per qualified tenant lead', revenue: '50-200 AED/lead', margin: 'High' },
  { source: 'Sakin Financing Conversion', description: 'Properties listed convert to financing users', revenue: '7,200 AED/user (12% fee)', margin: 'Medium' },
  { source: 'Premium Landlord Tools', description: 'Analytics, tenant screening, rent collection', revenue: '199 AED/month', margin: 'High' },
  { source: 'Short-term Rentals', description: 'Airbnb-style bookings with service fee', revenue: '10-15% service fee', margin: 'High' },
];

// Sakin Properties - Features
const propertiesFeatures = [
  { icon: Search, title: 'Smart Search', description: 'AI-powered filters: location, budget, amenities, commute time' },
  { icon: Camera, title: 'Verified Listings', description: 'All properties verified with real photos, floor plans, accurate info' },
  { icon: Eye, title: 'Virtual Tours', description: '360° walkthroughs and video tours for remote viewing' },
  { icon: MessageCircle, title: 'Direct Chat', description: 'In-app messaging with landlords and agents' },
  { icon: Banknote, title: 'Instant Financing', description: 'Apply for Sakin rent financing directly from listing' },
  { icon: Crown, title: 'Nuqta+ Priority', description: 'Exclusive listings and early access for members' },
  { icon: CalendarDays, title: 'Easy Scheduling', description: 'Book viewings directly through the app' },
  { icon: ShieldCheck, title: 'Tenant Screening', description: 'Pre-approved tenants for landlords' },
];

// Sakin Properties - Competitive Analysis
const propertiesCompetitors = [
  { name: 'Sakin Properties', listings: 'Curated', financing: 'Yes (Sakin)', rewards: '100 AED/mo Nuqta+', verification: 'All verified', advantage: 'Full ecosystem' },
  { name: 'Property Finder', listings: '500K+', financing: 'No', rewards: 'None', verification: 'Partial', advantage: 'Market leader' },
  { name: 'Bayut', listings: '400K+', financing: 'No', rewards: 'None', verification: 'Partial', advantage: 'Strong SEO' },
  { name: 'Dubizzle', listings: '300K+', financing: 'No', rewards: 'None', verification: 'Limited', advantage: 'Brand awareness' },
];

// Sakin Properties - Projections
const propertiesProjections = [
  { year: 'Year 1', listings: '5,000', monthlyVisits: '50K', leads: '2,000', conversions: '400', revenue: '2M' },
  { year: 'Year 2', listings: '15,000', monthlyVisits: '200K', leads: '8,000', conversions: '1,600', revenue: '8M' },
  { year: 'Year 3', listings: '40,000', monthlyVisits: '500K', leads: '25,000', conversions: '5,000', revenue: '25M' },
];

// Short-term Rentals (Airbnb-style)
const shortTermRentalsModel = {
  concept: 'Holiday homes and short-term furnished rentals',
  targetMarket: 'Tourists, business travelers, staycationers',
  revenueModel: '10-15% service fee on each booking',
  integration: 'Same app, separate section for short-term stays',
  nuqtaPlusValue: 'Use Nuqta coins for discounts on bookings',
  competitorGap: 'Airbnb dominates but no local loyalty/rewards',
};

// Nuqta Fintech Ecosystem - Sister Companies
const nuqtaFintechEcosystem = {
  holding: 'Nuqta Group',
  vision: 'Full-stack financial services with loyalty rewards',
  sisterCompanies: [
    {
      name: 'Sakin',
      arabic: 'سكن',
      tagline: 'Pay Monthly. Live Easy.',
      product: 'Rent Financing + Property Marketplace',
      status: 'In Development',
      color: 'teal',
    },
    {
      name: 'Qist',
      arabic: 'قسط',
      tagline: 'Shop Now. Pay Easy.',
      product: 'Buy Now Pay Later (BNPL)',
      status: 'Planned',
      color: 'violet',
    },
  ],
};

// Qist BNPL - Business Model
const qistBNPLModel = {
  name: 'Qist',
  arabic: 'قسط',
  meaning: 'Installment in Arabic',
  tagline: 'Shop Now. Pay Easy.',
  concept: 'BNPL service integrated with Nuqta rewards ecosystem',
  targetMarket: 'UAE consumers shopping at Nuqta partner merchants',
  revenueModel: [
    { source: 'Merchant Fee', value: '3-6% per transaction', margin: 'High' },
    { source: 'Late Fees', value: '25 AED + 1.5%/month', margin: 'High' },
    { source: 'Nuqta+ Upsell', value: '99 AED/month membership', margin: 'Very High' },
  ],
  nuqtaIntegration: [
    'Use Nuqta coins as down payment',
    'Earn coins on every BNPL purchase',
    'Nuqta+ members get 0% platform fees for 3 months',
    'Cross-sell to existing Nuqta users',
  ],
  competitorAnalysis: [
    { name: 'Qist (Nuqta)', installments: '3-12 months', rewards: '100 AED/mo Nuqta+', merchants: 'Nuqta Partners', advantage: 'Full ecosystem' },
    { name: 'Tabby', installments: '4 payments', rewards: 'None', merchants: '10,000+', advantage: 'Market leader' },
    { name: 'Tamara', installments: '3-6 payments', rewards: 'Limited', merchants: '8,000+', advantage: 'Saudi expansion' },
    { name: 'Postpay', installments: '3 payments', rewards: 'None', merchants: '5,000+', advantage: 'Checkout focus' },
  ],
  projections: [
    { year: 'Year 1', users: '20,000', gmv: '50M', revenue: '2.5M', merchants: '100' },
    { year: 'Year 2', users: '80,000', gmv: '250M', revenue: '12.5M', merchants: '500' },
    { year: 'Year 3', users: '200,000', gmv: '800M', revenue: '40M', merchants: '1,500' },
  ],
  corporateAdvantage: 'Existing Nuqta corporate partnerships provide instant merchant network',
};

export default function SakinPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'pillars', label: '3 Pillars', icon: Layers },
    { id: 'properties', label: 'Properties', icon: Search },
    { id: 'brokers', label: 'Brokers', icon: Handshake },
    { id: 'value-prop', label: 'Value Proposition', icon: Gift },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'economics', label: 'Unit Economics', icon: Calculator },
    { id: 'costs', label: 'Costs', icon: Wallet },
    { id: 'financials', label: 'Financials', icon: BarChart3 },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket },
    { id: 'gtm', label: 'Go-to-Market', icon: Target },
    { id: 'risks', label: 'Risks', icon: Shield },
    { id: 'competition', label: 'Competition', icon: Users },
    { id: 'ecosystem', label: 'Ecosystem', icon: Network },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              {/* Logo & Brand */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
                  <Home className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white">
                    Sakin <span className="text-teal-400">سكن</span>
                  </h1>
                  <p className="text-teal-400 text-sm sm:text-lg font-medium">Pay Monthly. Live Easy.</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">
                UAE&apos;s first rent financing platform with <span className="text-teal-400 font-medium">property marketplace</span> integrated with <span className="text-[#c9a227] font-medium">Nuqta rewards</span>.
                Find your home. We pay your landlord upfront. You pay us monthly.
              </p>

              {/* Partner Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full">
                <HeartHandshake className="w-4 h-4 text-[#c9a227]" />
                <span className="text-[#c9a227] text-xs sm:text-sm font-medium">A Nuqta Group Company</span>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {keyStats.map((stat, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center min-w-[120px]">
                  <div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">{stat.suffix}</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Banner */}
          <div className="mt-8 bg-gradient-to-r from-teal-500/20 to-cyan-500/10 rounded-xl p-4 sm:p-6 border border-teal-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-teal-400" />
                  <span className="text-lg font-bold text-white">The Core Promise</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white">
                  Pay <span className="text-teal-400">monthly rent</span> and get <span className="text-[#c9a227]">100 AED back</span> every month
                </p>
              </div>
              <div className="flex gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-teal-400">12%</div>
                  <div className="text-xs text-slate-400">Annual Fee</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">1,200</div>
                  <div className="text-xs text-slate-400">AED Back/Year</div>
                </div>
              </div>
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
                    ? 'bg-teal-500 text-white'
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
            {/* Executive Summary */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-teal-400" />
                Executive Summary
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300">
                  <strong className="text-white">Sakin</strong> is a <strong className="text-teal-400">housing fintech platform</strong> that helps users find a home,
                  shows full move-in cost, and offers monthly payment plans. We handle <strong className="text-teal-400">broker fees, deposits, registration</strong> - everything.
                  Users pay one simple monthly payment instead of 68,000 AED upfront. As a <strong className="text-[#c9a227]">Nuqta+ partner</strong>,
                  members receive 100 AED back every month in coins.
                </p>
              </div>

              {/* Core Promise Box */}
              <div className="mt-6 bg-teal-500/10 rounded-xl p-4 border border-teal-500/30">
                <p className="text-center text-lg font-bold text-white">
                  &quot;No broker hassle. No big cheques. <span className="text-teal-400">One simple monthly payment.</span>&quot;
                </p>
              </div>

              {/* Move-in Cost Calculator */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-white mb-4">Full Move-in Cost Example</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <h4 className="text-white font-bold mb-3">Traditional Way</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-slate-400">Annual Rent</span><span className="text-white">60,000 AED</span></div>
                      <div className="flex justify-between"><span className="text-slate-400">Security Deposit</span><span className="text-white">3,000 AED</span></div>
                      <div className="flex justify-between"><span className="text-slate-400">Broker Fee</span><span className="text-white">3,000 AED</span></div>
                      <div className="flex justify-between"><span className="text-slate-400">Registration</span><span className="text-white">2,000 AED</span></div>
                      <div className="flex justify-between pt-2 border-t border-slate-700">
                        <span className="text-red-400 font-bold">Total Upfront</span>
                        <span className="text-red-400 font-bold">68,000 AED</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-teal-500/10 rounded-xl p-4 border border-teal-500/30">
                    <h4 className="text-teal-400 font-bold mb-3">With Sakin</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-slate-400">Monthly Payment</span><span className="text-white">~6,300 AED</span></div>
                      <div className="flex justify-between"><span className="text-slate-400">Total (12 months)</span><span className="text-white">~75,600 AED</span></div>
                      <div className="flex justify-between"><span className="text-slate-400">Financing Cost (12%)</span><span className="text-white">~8,160 AED</span></div>
                      <div className="flex justify-between"><span className="text-[#c9a227]">Nuqta+ Coins Back</span><span className="text-[#c9a227]">-1,200 AED</span></div>
                      <div className="flex justify-between pt-2 border-t border-teal-500/30">
                        <span className="text-teal-400 font-bold">Effective Cost</span>
                        <span className="text-teal-400 font-bold">~7% APR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="mt-4 sm:mt-6">
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">How It Works</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                  {[
                    { step: 1, icon: FileText, title: 'Apply', desc: 'Upload tenancy contract' },
                    { step: 2, icon: UserCheck, title: 'Verify', desc: 'Salary & identity check' },
                    { step: 3, icon: CheckCircle, title: 'Approve', desc: 'Get instant approval' },
                    { step: 4, icon: Banknote, title: 'We Pay', desc: 'Landlord gets full rent' },
                    { step: 5, icon: Calendar, title: 'You Pay', desc: 'Monthly + earn rewards' },
                  ].map((item, i) => (
                    <div key={i} className="relative">
                      <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                          <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                        </div>
                        <div className="text-[10px] sm:text-xs text-teal-400 mb-1">Step {item.step}</div>
                        <div className="text-xs sm:text-sm font-bold text-white">{item.title}</div>
                        <div className="text-[10px] sm:text-xs text-slate-400 mt-1">{item.desc}</div>
                      </div>
                      {i < 4 && (
                        <ChevronRight className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Corporate Structure */}
            <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/5 rounded-xl p-4 sm:p-6 border border-teal-500/30">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                Corporate Structure
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Parent Company</span>
                    <span className="text-white font-medium">{corporateStructure.parentCompany}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Entity Name</span>
                    <span className="text-white font-medium">{corporateStructure.subsidiary}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Ownership</span>
                    <span className="text-white font-medium">{corporateStructure.ownership}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">License Type</span>
                    <span className="text-white font-medium">{corporateStructure.license}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Regulator</span>
                    <span className="text-white font-medium">{corporateStructure.regulator}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Integration</span>
                    <span className="text-[#c9a227] font-medium">Nuqta+ Partner</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Opportunity */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                UAE Market Opportunity
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-slate-700/50">
                  <div className="text-2xl sm:text-3xl font-bold text-white">2M+</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 mt-1">Rent-paying households</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-slate-700/50">
                  <div className="text-2xl sm:text-3xl font-bold text-white">900K</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 mt-1">Addressable market</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-slate-700/50">
                  <div className="text-2xl sm:text-3xl font-bold text-white">60K</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 mt-1">Avg annual rent (AED)</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-slate-700/50">
                  <div className="text-2xl sm:text-3xl font-bold text-white">54B</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 mt-1">Total market (AED)</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3 Pillars Tab */}
        {activeTab === 'pillars' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Three Pillars Overview */}
            <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/10 rounded-xl p-4 sm:p-6 border border-teal-500/30">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" />
                The Three Pillars of Sakin
              </h2>
              <p className="text-slate-300">
                Sakin is built on <strong className="text-white">three interconnected pillars</strong> that create a complete housing solution.
                Each pillar unlocks new revenue streams and deepens user engagement.
              </p>
            </div>

            {/* Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Pillar 1: Find */}
              <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border-2 border-cyan-500/50">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-3 sm:mb-4">
                  <Search className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-400" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-cyan-400 mb-1">PILLAR 1</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Find a Home</h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4">Property marketplace with broker + owner listings</p>
                <div className="space-y-2">
                  {['Broker listings', 'Owner listings', 'Corporate housing', 'Monthly furnished rentals'].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      {f}
                    </div>
                  ))}
                </div>
                <div className="mt-4 px-3 py-1.5 bg-purple-500/20 rounded-full inline-block">
                  <span className="text-xs font-bold text-purple-400">Phase 2</span>
                </div>
              </div>

              {/* Pillar 2: Pay */}
              <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border-2 border-teal-500 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 sm:px-3 py-1 bg-teal-500 text-white text-[10px] sm:text-xs font-bold rounded-full">
                  CORE REVENUE
                </div>
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-teal-500/20 flex items-center justify-center mb-3 sm:mb-4">
                  <Banknote className="w-5 h-5 sm:w-7 sm:h-7 text-teal-400" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-teal-400 mb-1">PILLAR 2</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Pay & Finance</h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4">Core financing products for move-in costs</p>
                <div className="space-y-2">
                  {['Annual rent financing', 'Deposit financing', 'Agent commission financing', 'Emergency rent loans'].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-teal-400" />
                      {f}
                    </div>
                  ))}
                </div>
                <div className="mt-4 px-3 py-1.5 bg-green-500/20 rounded-full inline-block">
                  <span className="text-xs font-bold text-green-400">Phase 1 - Now</span>
                </div>
              </div>

              {/* Pillar 3: Move */}
              <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border-2 border-orange-500/50">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-3 sm:mb-4">
                  <Truck className="w-5 h-5 sm:w-7 sm:h-7 text-orange-400" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-orange-400 mb-1">PILLAR 3</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Move & Set Up</h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4">Future services layer after traction</p>
                <div className="space-y-2">
                  {['Furniture BNPL', 'Moving services', 'Cleaning', 'Utility setup', 'Insurance'].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-orange-400" />
                      {f}
                    </div>
                  ))}
                </div>
                <div className="mt-4 px-3 py-1.5 bg-slate-500/20 rounded-full inline-block">
                  <span className="text-xs font-bold text-slate-400">Phase 3 - Future</span>
                </div>
              </div>
            </div>

            {/* Product Listing Structure */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                Every Listing Shows Full Move-in Cost
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                  <h4 className="text-white font-bold mb-4">Sample Listing</h4>
                  <div className="text-2xl font-bold text-white mb-4">1BR Apartment - JLT</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400">Annual Rent</span>
                      <span className="text-white font-medium">60,000 AED</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400">Deposit</span>
                      <span className="text-white font-medium">3,000 AED</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400">Broker Fee</span>
                      <span className="text-white font-medium">3,000 AED</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400">Registration</span>
                      <span className="text-white font-medium">2,000 AED</span>
                    </div>
                    <div className="flex justify-between py-3 bg-red-500/10 rounded-lg px-3 mt-2">
                      <span className="text-red-400 font-bold">Total Move-in Cost</span>
                      <span className="text-red-400 font-bold">68,000 AED</span>
                    </div>
                  </div>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-5 border border-teal-500/30">
                  <h4 className="text-teal-400 font-bold mb-4">Payment Options</h4>
                  <div className="space-y-4">
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <div className="text-sm text-slate-400 mb-1">Option 1: Pay Once</div>
                      <div className="text-2xl font-bold text-white">68,000 AED</div>
                    </div>
                    <div className="bg-teal-500/20 rounded-lg p-4 border-2 border-teal-500">
                      <div className="text-sm text-teal-400 mb-1">Option 2: Pay Monthly with Sakin</div>
                      <div className="text-2xl font-bold text-white">~6,300 AED<span className="text-sm font-normal text-slate-400">/month</span></div>
                      <div className="text-xs text-[#c9a227] mt-2">+ Earn 100 AED Nuqta coins monthly</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue by Pillar */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-4 sm:p-6 border border-green-500/30">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                Revenue Streams by Pillar
              </h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0"><div className="min-w-[400px] px-4 sm:px-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Pillar</th>
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Revenue Stream</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Margin</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-teal-400 font-bold">Pay & Finance</td>
                      <td className="py-3 px-4 text-white">Rent financing (12% fee)</td>
                      <td className="py-3 px-4 text-center"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-bold">High</span></td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-teal-400 font-bold">Pay & Finance</td>
                      <td className="py-3 px-4 text-white">Deposit financing</td>
                      <td className="py-3 px-4 text-center"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-bold">High</span></td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-cyan-400 font-bold">Find a Home</td>
                      <td className="py-3 px-4 text-white">Broker referral spread</td>
                      <td className="py-3 px-4 text-center"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-bold">Medium</span></td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-cyan-400 font-bold">Find a Home</td>
                      <td className="py-3 px-4 text-white">Owner listing fees</td>
                      <td className="py-3 px-4 text-center"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-bold">Medium</span></td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-orange-400 font-bold">Move & Set Up</td>
                      <td className="py-3 px-4 text-white">Furniture BNPL, moving, cleaning</td>
                      <td className="py-3 px-4 text-center"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-bold">Medium</span></td>
                    </tr>
                    <tr>
                      <td className="py-2 sm:py-3 px-3 sm:px-4 text-[#c9a227] font-bold text-xs sm:text-sm">Ecosystem</td>
                      <td className="py-2 sm:py-3 px-3 sm:px-4 text-white text-xs sm:text-sm">Nuqta+ conversions + merchant spend</td>
                      <td className="py-2 sm:py-3 px-3 sm:px-4 text-center"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-[10px] sm:text-xs font-bold">Ongoing</span></td>
                    </tr>
                  </tbody>
                </table>
              </div></div>
            </div>
          </div>
        )}

        {/* Brokers Tab */}
        {activeTab === 'brokers' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Broker Partnership Overview */}
            <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/10 rounded-xl p-4 sm:p-6 border border-purple-500/30">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                Broker Partnership Model
              </h2>
              <p className="text-slate-300">
                Brokers are a <strong className="text-white">key acquisition channel</strong> for Sakin. We offer faster deal closure,
                guaranteed commission payment, and access to qualified tenants. Target: <strong className="text-purple-400">50-100 brokers in first 6 months</strong>.
              </p>
            </div>

            {/* Value for Brokers */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                Value Proposition for Brokers
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {brokerPartnershipModel.valueForBrokers.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-slate-700/50">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mb-1 sm:mb-2" />
                    <h4 className="text-white font-bold text-xs sm:text-sm mb-1">{item.benefit}</h4>
                    <p className="text-[10px] sm:text-xs text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue from Brokers */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-4 sm:p-6 border border-green-500/30">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                Revenue Streams from Broker Partnerships
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {brokerPartnershipModel.revenueFromBrokers.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 sm:p-5 border border-slate-700/50">
                    <div className="text-xs sm:text-sm text-slate-400 mb-1">{item.source}</div>
                    <div className="text-xl sm:text-2xl font-bold text-green-400 mb-1 sm:mb-2">{item.value}</div>
                    <p className="text-[10px] sm:text-xs text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Broker GTM */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                Broker Acquisition Strategy
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="text-white font-bold mb-3">What We Offer Brokers</h4>
                  <div className="space-y-2">
                    {['Commission per deal (200-500 AED referral)', 'Faster deal closings (tenant can afford upfront)', 'Guaranteed payouts (Sakin pays day 1)', 'Co-branded marketing materials', 'Premium listing slots'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <ArrowRight className="w-4 h-4 text-purple-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-3">Target Broker Segments</h4>
                  <div className="space-y-2">
                    {['Independent brokers (high volume)', 'Real estate agencies (200+ in UAE)', 'Property management companies', 'Developer sales teams', 'Relocation specialists'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <Building className="w-4 h-4 text-purple-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Owner Listings */}
            <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/5 rounded-xl p-4 sm:p-6 border border-teal-500/30">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Home className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                Direct Owner Listings (NoBroker Style)
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-3 sm:mb-4">
                In addition to broker listings, Sakin enables <strong className="text-white">direct owner-to-tenant</strong> connections.
                This creates a &quot;no broker hassle&quot; experience while still offering financing.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-slate-700/50">
                  <div className="text-xl sm:text-2xl font-bold text-teal-400">Free</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Basic listing</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-slate-700/50">
                  <div className="text-xl sm:text-2xl font-bold text-teal-400">199</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">AED/mo premium tools</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-slate-700/50">
                  <div className="text-xl sm:text-2xl font-bold text-green-400">0%</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Broker fee for tenant</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-slate-700/50">
                  <div className="text-xl sm:text-2xl font-bold text-[#c9a227]">100%</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Rent to landlord</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Properties Tab - Business Plan */}
        {activeTab === 'properties' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Product Overview */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/10 rounded-xl p-4 sm:p-6 border border-cyan-500/30">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                Sakin Properties - Rental Marketplace
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-3 sm:mb-4">
                A <strong className="text-white">property listing marketplace</strong> integrated with Sakin financing.
                Users discover rental properties, apply for monthly rent payment, and get Nuqta+ rewards - all in one platform.
                Think <strong className="text-cyan-400">Property Finder + Rent Financing + Loyalty Rewards</strong>.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-slate-700/50">
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400">54B</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">AED Market Size</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-slate-700/50">
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400">85%</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Search Online</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-slate-700/50">
                  <div className="text-xl sm:text-2xl font-bold text-green-400">0</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Competitors w/ Financing</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-slate-700/50">
                  <div className="text-xl sm:text-2xl font-bold text-[#c9a227]">1st</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Mover Advantage</div>
                </div>
              </div>
            </div>

            {/* Why Build This */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                Strategic Rationale
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="text-white font-bold mb-3">Current Market Pain Points</h4>
                  <div className="space-y-2">
                    {['No financing integration on existing platforms', 'Unverified/outdated listings', 'No loyalty or rewards for tenants', 'Fragmented experience (search → broker → bank)'].map((pain, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                        {pain}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-3">Sakin Properties Advantage</h4>
                  <div className="space-y-2">
                    {['Only platform with instant rent financing', '100 AED/month Nuqta+ reward for users', 'Verified listings with virtual tours', 'Full-stack: search → apply → pay monthly'].map((adv, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {adv}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Features */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                Platform Features
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {propertiesFeatures.map((feature, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-slate-700/50">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mb-1 sm:mb-2" />
                    <h4 className="text-white font-bold text-xs sm:text-sm mb-1">{feature.title}</h4>
                    <p className="text-[10px] sm:text-xs text-slate-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Model */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-4 sm:p-6 border border-green-500/30">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                Revenue Model
              </h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0"><div className="min-w-[600px] px-4 sm:px-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Revenue Stream</th>
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Description</th>
                      <th className="text-right py-3 px-4 text-slate-400 font-medium">Revenue</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Margin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {propertiesRevenueModel.map((item, i) => (
                      <tr key={i} className="border-b border-slate-700/50">
                        <td className="py-3 px-4 text-white font-medium">{item.source}</td>
                        <td className="py-3 px-4 text-slate-300 text-sm">{item.description}</td>
                        <td className="py-3 px-4 text-green-400 font-bold text-right">{item.revenue}</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${
                            item.margin === 'High' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                          }`}>{item.margin}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div></div>
            </div>

            {/* Competitive Analysis */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                Competitive Analysis
              </h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0"><div className="min-w-[700px] px-4 sm:px-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Platform</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Listings</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Financing</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Rewards</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Verification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {propertiesCompetitors.map((comp, i) => (
                      <tr key={i} className={`border-b border-slate-700/50 ${comp.name === 'Sakin Properties' ? 'bg-cyan-500/10' : ''}`}>
                        <td className={`py-3 px-4 font-bold ${comp.name === 'Sakin Properties' ? 'text-cyan-400' : 'text-white'}`}>{comp.name}</td>
                        <td className="py-3 px-4 text-center text-slate-300">{comp.listings}</td>
                        <td className="py-3 px-4 text-center">
                          {comp.financing === 'Yes (Sakin)' ? (
                            <span className="text-green-400 font-bold">Yes (Sakin)</span>
                          ) : (
                            <span className="text-slate-500">No</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {comp.rewards !== 'None' ? (
                            <span className="text-[#c9a227] font-bold">{comp.rewards}</span>
                          ) : (
                            <span className="text-slate-500">None</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center text-slate-300">{comp.verification}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div></div>
            </div>

            {/* 3-Year Projections */}
            <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/5 rounded-xl p-4 sm:p-6 border border-purple-500/30">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                Properties Platform Projections
              </h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0"><div className="min-w-[500px] px-4 sm:px-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Metric</th>
                      {propertiesProjections.map((proj, i) => (
                        <th key={i} className="text-right py-3 px-4 text-white font-bold">{proj.year}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Active Listings</td>
                      {propertiesProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{proj.listings}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Monthly Visits</td>
                      {propertiesProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{proj.monthlyVisits}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Qualified Leads</td>
                      {propertiesProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{proj.leads}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Financing Conversions</td>
                      {propertiesProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-cyan-400 font-bold">{proj.conversions}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-300">Platform Revenue (AED)</td>
                      {propertiesProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-green-400 font-bold">{proj.revenue}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div></div>
            </div>

            {/* Short-Term Rentals */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/5 rounded-xl p-4 sm:p-6 border border-orange-500/30">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                Future: Short-Term Rentals (Airbnb-Style)
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-3 sm:mb-4">
                Phase 4 expansion into holiday homes and short-term furnished rentals - competing with Airbnb but with <strong className="text-[#c9a227]">Nuqta rewards</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-orange-500/20">
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Target Market</div>
                  <div className="text-white font-bold text-sm sm:text-base">{shortTermRentalsModel.targetMarket}</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-orange-500/20">
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Revenue Model</div>
                  <div className="text-green-400 font-bold text-sm sm:text-base">{shortTermRentalsModel.revenueModel}</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-orange-500/20">
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Nuqta+ Value</div>
                  <div className="text-[#c9a227] font-bold text-sm sm:text-base">{shortTermRentalsModel.nuqtaPlusValue}</div>
                </div>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm mt-3 sm:mt-4">
                <strong className="text-white">Competitive Gap:</strong> {shortTermRentalsModel.competitorGap}
              </p>
            </div>

            {/* Integration with Sakin Financing */}
            <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/10 rounded-xl p-4 sm:p-6 border-2 border-teal-500">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                The Full-Stack Advantage
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { step: '1', title: 'Discover', desc: 'Browse verified properties on Sakin' },
                  { step: '2', title: 'Apply', desc: 'One-click Sakin financing application' },
                  { step: '3', title: 'Move In', desc: 'We pay landlord, you pay monthly' },
                  { step: '4', title: 'Earn', desc: '100 AED Nuqta+ reward every month' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-teal-500/30">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-teal-500 flex items-center justify-center mx-auto mb-1 sm:mb-2 text-white font-bold text-xs sm:text-sm">{item.step}</div>
                    <div className="text-white font-bold text-xs sm:text-base">{item.title}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
              <p className="text-center text-slate-300 text-sm sm:text-base mt-3 sm:mt-4">
                <strong className="text-teal-400">No competitor offers this end-to-end experience.</strong>
              </p>
            </div>
          </div>
        )}

        {/* Fintech Ecosystem Tab */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Ecosystem Vision */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-[#c9a227] flex items-center justify-center">
                  <Network className="w-5 h-5 sm:w-7 sm:h-7 text-[#0a1628]" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Nuqta Fintech Ecosystem</h2>
                  <p className="text-[#c9a227] text-sm sm:text-base">Full-stack financial services with loyalty rewards</p>
                </div>
              </div>
              <p className="text-slate-300">
                Building on existing <strong className="text-white">corporate partnerships</strong>, Nuqta Group is creating a suite of fintech
                products - each operating as a sister company with deep integration into the <strong className="text-[#c9a227]">Nuqta+ rewards ecosystem</strong>.
                This creates a powerful flywheel: users join for rewards, stay for financial services.
              </p>
            </div>

            {/* Sister Companies Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Sakin Card */}
              <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/10 rounded-xl p-4 sm:p-6 border-2 border-teal-500">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-teal-500 flex items-center justify-center">
                    <Home className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Sakin <span className="text-teal-400">سكن</span></h3>
                    <p className="text-teal-400 text-xs sm:text-sm">Pay Monthly. Live Easy.</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Product</span>
                    <span className="text-white">Rent Financing + Property Marketplace</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Status</span>
                    <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded text-xs font-bold">In Development</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Nuqta+ Benefit</span>
                    <span className="text-[#c9a227] font-bold">100 AED off rent/month</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-teal-500/30">
                  <div className="text-xs text-slate-400 mb-2">Key Metrics (Year 3)</div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-slate-900/50 rounded p-2">
                      <div className="text-lg font-bold text-teal-400">60K</div>
                      <div className="text-[10px] text-slate-400">Users</div>
                    </div>
                    <div className="bg-slate-900/50 rounded p-2">
                      <div className="text-lg font-bold text-teal-400">3.6B</div>
                      <div className="text-[10px] text-slate-400">Rent Volume</div>
                    </div>
                    <div className="bg-slate-900/50 rounded p-2">
                      <div className="text-lg font-bold text-green-400">186M</div>
                      <div className="text-[10px] text-slate-400">Revenue</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Qist Card */}
              <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/10 rounded-xl p-4 sm:p-6 border-2 border-violet-500">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-violet-500 flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Qist <span className="text-violet-400">قسط</span></h3>
                    <p className="text-violet-400 text-xs sm:text-sm">Shop Now. Pay Easy.</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Product</span>
                    <span className="text-white">Buy Now Pay Later (BNPL)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Status</span>
                    <span className="px-2 py-0.5 bg-slate-500/20 text-slate-400 rounded text-xs font-bold">Planned (2027)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Nuqta+ Benefit</span>
                    <span className="text-[#c9a227] font-bold">0% fees for 3 months</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-violet-500/30">
                  <div className="text-xs text-slate-400 mb-2">Key Metrics (Year 3)</div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-slate-900/50 rounded p-2">
                      <div className="text-lg font-bold text-violet-400">200K</div>
                      <div className="text-[10px] text-slate-400">Users</div>
                    </div>
                    <div className="bg-slate-900/50 rounded p-2">
                      <div className="text-lg font-bold text-violet-400">800M</div>
                      <div className="text-[10px] text-slate-400">GMV</div>
                    </div>
                    <div className="bg-slate-900/50 rounded p-2">
                      <div className="text-lg font-bold text-green-400">40M</div>
                      <div className="text-[10px] text-slate-400">Revenue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Qist BNPL Deep Dive */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
                Qist BNPL - Business Model
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <h4 className="text-white font-bold mb-3">The Concept</h4>
                  <p className="text-slate-300 text-sm mb-4">
                    <strong className="text-violet-400">Qist</strong> (قسط = &quot;installment&quot; in Arabic) is a BNPL service that competes with
                    Tabby and Tamara, but with one major difference: <strong className="text-[#c9a227]">deep Nuqta rewards integration</strong>.
                  </p>
                  <div className="space-y-2">
                    {qistBNPLModel.nuqtaIntegration.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-3">Revenue Model</h4>
                  <div className="space-y-3">
                    {qistBNPLModel.revenueModel.map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-slate-700/50">
                        <span className="text-slate-300">{item.source}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-green-400 font-bold">{item.value}</span>
                          <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                            item.margin === 'Very High' ? 'bg-green-500/20 text-green-400' :
                            item.margin === 'High' ? 'bg-blue-500/20 text-blue-400' : 'bg-yellow-500/20 text-yellow-400'
                          }`}>{item.margin}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Corporate Advantage */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-3 sm:p-4 border border-green-500/30">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold">Corporate Partnership Advantage</h4>
                    <p className="text-slate-300 text-sm mt-1">
                      Existing Nuqta corporate partnerships provide an <strong className="text-green-400">instant merchant network</strong>.
                      Unlike Tabby/Tamara who had to sign merchants one by one, Qist launches with 100+ partners from day one.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Qist Competitive Analysis */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
                BNPL Competitive Analysis
              </h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0"><div className="min-w-[700px] px-4 sm:px-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Platform</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Installments</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Rewards</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Merchants</th>
                      <th className="text-center py-3 px-4 text-slate-400 font-medium">Key Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qistBNPLModel.competitorAnalysis.map((comp, i) => (
                      <tr key={i} className={`border-b border-slate-700/50 ${comp.name === 'Qist (Nuqta)' ? 'bg-violet-500/10' : ''}`}>
                        <td className={`py-3 px-4 font-bold ${comp.name === 'Qist (Nuqta)' ? 'text-violet-400' : 'text-white'}`}>{comp.name}</td>
                        <td className="py-3 px-4 text-center text-slate-300">{comp.installments}</td>
                        <td className="py-3 px-4 text-center">
                          {comp.rewards !== 'None' && comp.rewards !== 'Limited' ? (
                            <span className="text-[#c9a227] font-bold">{comp.rewards}</span>
                          ) : (
                            <span className="text-slate-500">{comp.rewards}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center text-slate-300">{comp.merchants}</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${
                            comp.name === 'Qist (Nuqta)' ? 'bg-violet-500/20 text-violet-400' : 'bg-slate-700 text-slate-300'
                          }`}>{comp.advantage}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div></div>
            </div>

            {/* Qist Projections */}
            <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/5 rounded-xl p-4 sm:p-6 border border-violet-500/30">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
                Qist 3-Year Projections
              </h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0"><div className="min-w-[500px] px-4 sm:px-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Metric</th>
                      {qistBNPLModel.projections.map((proj, i) => (
                        <th key={i} className="text-right py-3 px-4 text-white font-bold">{proj.year}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Active Users</td>
                      {qistBNPLModel.projections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{proj.users}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">GMV (AED)</td>
                      {qistBNPLModel.projections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-violet-400 font-bold">{proj.gmv}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Partner Merchants</td>
                      {qistBNPLModel.projections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{proj.merchants}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-300">Revenue (AED)</td>
                      {qistBNPLModel.projections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-green-400 font-bold">{proj.revenue}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div></div>
            </div>

            {/* Ecosystem Synergy */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a227]" />
                Ecosystem Synergy
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-[#c9a227]/30">
                  <Coins className="w-6 h-6 sm:w-8 sm:h-8 text-[#c9a227] mx-auto mb-2" />
                  <h4 className="text-white font-bold mb-1">Shared Rewards</h4>
                  <p className="text-xs text-slate-400">Nuqta coins work across Sakin, Qist, and all partner merchants</p>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-[#c9a227]/30">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#c9a227] mx-auto mb-2" />
                  <h4 className="text-white font-bold text-sm sm:text-base mb-1">Cross-Sell</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400">Sakin users become Qist users, Qist users become Nuqta+ members</p>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-[#c9a227]/30">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#c9a227] mx-auto mb-2" />
                  <h4 className="text-white font-bold text-sm sm:text-base mb-1">Data Advantage</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400">Rich spending data enables better credit scoring for both products</p>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#c9a227]/30">
                <p className="text-center text-slate-300">
                  <strong className="text-[#c9a227]">Combined Year 3 Revenue: 225M+ AED</strong> from the Nuqta Fintech Ecosystem
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Value Proposition Tab */}
        {activeTab === 'value-prop' && (
          <div className="space-y-6 sm:space-y-8">
            {/* For Tenants */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                For Tenants
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {tenantBenefits.map((benefit, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 sm:p-5 border border-slate-700/50">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mb-3 sm:mb-4">
                      <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{benefit.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* For Landlords */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-4 sm:p-6 border border-green-500/30">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Key className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                For Landlords
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {landlordBenefits.map((benefit, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-3 sm:p-5 border border-green-500/20">
                    <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mb-2 sm:mb-3" />
                    <h3 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2">{benefit.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* For Banks */}
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/5 rounded-xl p-4 sm:p-6 border border-blue-500/30">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Landmark className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                For Banking Partners
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {bankBenefits.map((benefit, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-3 sm:p-5 border border-blue-500/20">
                    <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mb-2 sm:mb-3" />
                    <h3 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2">{benefit.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sakin Properties Marketplace */}
            <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/5 rounded-xl p-4 sm:p-6 border border-teal-500/30">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                Sakin Properties Marketplace
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-3 sm:mb-4">
                More than just rent financing - Sakin is a full-stack rental platform where users can discover, tour, and finance their next home all in one app.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {[
                  { icon: Search, title: 'Smart Property Search', desc: 'AI-powered search with filters for location, budget, amenities' },
                  { icon: Eye, title: 'Virtual Tours', desc: '360° walkthroughs and video tours from your phone' },
                  { icon: ShieldCheck, title: 'Verified Listings', desc: 'All properties verified with real photos and accurate info' },
                  { icon: MessageCircle, title: 'Direct Chat', desc: 'Message landlords and schedule viewings instantly' },
                  { icon: Banknote, title: 'Instant Financing', desc: 'Apply for Sakin rent financing from any listing' },
                  { icon: Crown, title: 'Nuqta+ Priority', desc: 'Exclusive listings and early access for members' },
                ].map((feature, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-teal-500/20">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400 mb-1 sm:mb-2" />
                    <h3 className="text-white font-bold text-xs sm:text-sm mb-1">{feature.title}</h3>
                    <p className="text-[10px] sm:text-sm text-slate-400">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Nuqta+ Integration */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#c9a227] flex items-center justify-center">
                  <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-[#0a1628]" />
                </div>
                <div>
                  <div className="text-[#c9a227] text-xs sm:text-sm font-bold uppercase">Nuqta+ Integration</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">The Ultimate Retention Engine</h3>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-6">
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-[#c9a227]/30">
                  <div className="text-xl sm:text-3xl font-bold text-[#c9a227]">100</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">AED off rent/month</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-[#c9a227]/30">
                  <div className="text-xl sm:text-3xl font-bold text-[#c9a227]">1,200</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">AED saved/year</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-[#c9a227]/30">
                  <div className="text-xl sm:text-3xl font-bold text-[#c9a227]">12x</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Monthly app opens</div>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base mt-3 sm:mt-4">
                Sakin users must be <strong className="text-[#c9a227]">Nuqta+ members</strong> to receive the 100 AED monthly
                discount. This creates guaranteed monthly engagement and cross-ecosystem spending on all 18+ partner brands.
              </p>
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {pricingTiers.map((tier, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl p-4 sm:p-6 border-2 ${tier.color} ${tier.bgColor}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-[#c9a227] rounded-full text-[10px] sm:text-xs font-bold text-[#0a1628]">
                      RECOMMENDED
                    </div>
                  )}

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{tier.tier}</h3>

                  <div className="mt-3 sm:mt-4 mb-4 sm:mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-bold text-white">{tier.monthlyFee}</span>
                      <span className="text-slate-400 text-sm">/month</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 mt-1">{tier.annualFee} annually</div>
                  </div>

                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400 text-sm">Coin Back</span>
                      <span className="text-[#c9a227] font-bold text-sm">{tier.coinBack}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400 text-sm">Effective Cost</span>
                      <span className="text-green-400 font-bold text-sm">{tier.effectiveCost}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-2">Requirements</div>
                    {tier.requirements.map((req, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Example Calculation */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Example: 60,000 AED Annual Rent</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4">
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Monthly Rent</div>
                  <div className="text-lg sm:text-2xl font-bold text-white">5,000 AED</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4">
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Monthly Fee (1%)</div>
                  <div className="text-lg sm:text-2xl font-bold text-red-400">+600 AED</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4">
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Nuqta+ Discount</div>
                  <div className="text-lg sm:text-2xl font-bold text-green-400">-100 AED</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 border-2 border-teal-500">
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">You Pay</div>
                  <div className="text-lg sm:text-2xl font-bold text-teal-400">5,500 AED</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Unit Economics Tab */}
        {activeTab === 'economics' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Per Tenant Economics */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                Unit Economics (Per Tenant)
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Revenue Side */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-green-400 mb-3 sm:mb-4">Revenue</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-300">Avg Move-in Financed</span>
                      <span className="text-white font-bold">{unitEconomics.avgMoveIn.toLocaleString()} AED</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-300">Tenant Fee (12%)</span>
                      <span className="text-green-400 font-bold">+{unitEconomics.tenantFee.toLocaleString()} AED</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-300">Nuqta+ Membership</span>
                      <span className="text-green-400 font-bold">+{unitEconomics.nuqtaPlusFee.toLocaleString()} AED</span>
                    </div>
                    <div className="flex justify-between py-3 bg-green-500/10 rounded-lg px-3">
                      <span className="text-white font-bold">Total Revenue</span>
                      <span className="text-green-400 font-bold">{(unitEconomics.tenantFee + unitEconomics.nuqtaPlusFee).toLocaleString()} AED</span>
                    </div>
                  </div>
                </div>

                {/* Cost Side */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-red-400 mb-3 sm:mb-4">Costs</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-300">Bank Financing Cost (6%)</span>
                      <span className="text-red-400 font-bold">-{unitEconomics.bankCost.toLocaleString()} AED</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-300">Coin Cost (real)</span>
                      <span className="text-red-400 font-bold">-{unitEconomics.coinCost.toLocaleString()} AED</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-300">Payment Fees</span>
                      <span className="text-red-400 font-bold">-{unitEconomics.paymentFees.toLocaleString()} AED</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-300">Operating Costs</span>
                      <span className="text-red-400 font-bold">-{unitEconomics.operatingCost.toLocaleString()} AED</span>
                    </div>
                    <div className="flex justify-between py-3 bg-red-500/10 rounded-lg px-3">
                      <span className="text-white font-bold">Total Costs</span>
                      <span className="text-red-400 font-bold">-{(unitEconomics.bankCost + unitEconomics.coinCost + unitEconomics.operatingCost + unitEconomics.paymentFees).toLocaleString()} AED</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Net Profit */}
              <div className="mt-6 sm:mt-8 bg-gradient-to-r from-teal-500/20 to-cyan-500/10 rounded-xl p-4 sm:p-6 border-2 border-teal-500">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                  <div className="text-center sm:text-left">
                    <div className="text-teal-400 text-xs sm:text-sm font-bold uppercase">Net Profit Per Tenant</div>
                    <div className="text-2xl sm:text-4xl font-black text-white mt-1">~2,500 AED<span className="text-sm sm:text-lg text-slate-400">/year</span></div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs sm:text-sm text-slate-400">Gross Spread</div>
                    <div className="text-2xl sm:text-3xl font-bold text-green-400">{unitEconomics.grossSpread.toLocaleString()} AED</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coin Economics Breakdown */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a227]" />
                Coin Economics Breakdown
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-slate-700/50">
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Face Value</div>
                  <div className="text-xl sm:text-2xl font-bold text-[#c9a227]">1,200 AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-500">100 AED x 12 months</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-slate-700/50">
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Real Cost to Sakin</div>
                  <div className="text-xl sm:text-2xl font-bold text-green-400">~500 AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-500">~40% redemption rate</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-slate-700/50">
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">User Perceived Value</div>
                  <div className="text-xl sm:text-2xl font-bold text-purple-400">1,200 AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-500">Full discount off rent</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Costs Tab */}
        {activeTab === 'costs' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Cost Structure Overview */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/10 rounded-xl p-4 sm:p-6 border border-emerald-500/30">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                Lean Cost Structure
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Sakin operates with a <strong className="text-white">lean startup model</strong>. Total setup cost is ~80K AED,
                monthly burn is ~65K AED, breaking even at just <strong className="text-emerald-400">320 users</strong>.
              </p>
            </div>

            {/* One-time Setup */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                One-Time Setup Costs
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {costStructure.oneTimeSetup.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-slate-700/50">
                    <div className="text-xl sm:text-2xl font-bold text-white">{(item.cost / 1000).toFixed(0)}K</div>
                    <div className="text-[10px] sm:text-xs text-slate-400">{item.item}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 sm:mt-4 bg-emerald-500/10 rounded-lg p-3 sm:p-4 text-center border border-emerald-500/30">
                <div className="text-xs sm:text-sm text-slate-400">Total Setup</div>
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400">{(costStructure.totalSetup / 1000).toFixed(0)}K AED</div>
              </div>
            </div>

            {/* Monthly Costs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Team Costs */}
              <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  Monthly Team Costs
                </h3>
                <div className="space-y-3">
                  {costStructure.monthlyTeam.map((item, i) => (
                    <div key={i} className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400">{item.role}</span>
                      <span className="text-white font-medium">{item.cost.toLocaleString()} AED</span>
                    </div>
                  ))}
                  <div className="flex justify-between py-2 bg-blue-500/10 rounded-lg px-3">
                    <span className="text-blue-400 font-bold">Total Salaries</span>
                    <span className="text-blue-400 font-bold">33,000 AED</span>
                  </div>
                </div>
              </div>

              {/* Other Costs */}
              <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  Monthly Operating Costs
                </h3>
                <div className="space-y-3">
                  {costStructure.monthlyOther.map((item, i) => (
                    <div key={i} className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400">{item.item}</span>
                      <span className="text-white font-medium">{item.cost.toLocaleString()} AED</span>
                    </div>
                  ))}
                  <div className="flex justify-between py-2 bg-purple-500/10 rounded-lg px-3">
                    <span className="text-purple-400 font-bold">Total Operating</span>
                    <span className="text-purple-400 font-bold">30,000 AED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Monthly Burn */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/5 rounded-xl p-4 sm:p-6 border border-orange-500/30">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                Total Monthly Burn
              </h3>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-orange-500/20">
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Monthly Burn</div>
                  <div className="text-xl sm:text-3xl font-bold text-orange-400">~65K</div>
                  <div className="text-[10px] sm:text-xs text-slate-500">AED/month</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-orange-500/20">
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Annual Burn</div>
                  <div className="text-xl sm:text-3xl font-bold text-orange-400">~800K</div>
                  <div className="text-[10px] sm:text-xs text-slate-500">AED/year</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-orange-500/20">
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Runway (with 500K)</div>
                  <div className="text-xl sm:text-3xl font-bold text-white">~8</div>
                  <div className="text-[10px] sm:text-xs text-slate-500">months</div>
                </div>
              </div>
            </div>

            {/* Break-even Analysis */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-4 sm:p-6 border-2 border-green-500">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                Break-even Analysis
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-4 sm:mb-6">
                With ~2,500 AED net profit per user and ~800K annual costs, Sakin breaks even with just <strong className="text-green-400">320 users</strong>.
                This is a <strong className="text-white">very low threshold</strong> for a fintech startup.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-green-500/30">
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Profit per User</div>
                  <div className="text-xl sm:text-2xl font-bold text-white">~2,500</div>
                  <div className="text-[10px] sm:text-xs text-slate-500">AED/year</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-green-500/30">
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Annual Cost</div>
                  <div className="text-xl sm:text-2xl font-bold text-white">~800K</div>
                  <div className="text-[10px] sm:text-xs text-slate-500">AED</div>
                </div>
                <div className="bg-green-500/20 rounded-xl p-3 sm:p-4 text-center border-2 border-green-500">
                  <div className="text-xs sm:text-sm text-green-400 mb-1">Break-even</div>
                  <div className="text-2xl sm:text-3xl font-bold text-green-400">320</div>
                  <div className="text-[10px] sm:text-xs text-green-400">users</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center border border-green-500/30">
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Year 1 Target</div>
                  <div className="text-xl sm:text-2xl font-bold text-teal-400">6,000</div>
                  <div className="text-[10px] sm:text-xs text-slate-500">users (18x BE)</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Financials Tab */}
        {activeTab === 'financials' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Break-even Reminder */}
            <div className="bg-green-500/10 rounded-xl p-3 sm:p-4 border border-green-500/30 flex items-center gap-2 sm:gap-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
              <p className="text-slate-300 text-xs sm:text-base">
                <strong className="text-green-400">Very Low Break-even:</strong> Only 320 users needed to cover costs. Year 1 target of 6,000 users = 18x break-even.
              </p>
            </div>

            {/* 3-Year Projections */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                3-Year Financial Projections
              </h2>

              <div className="overflow-x-auto -mx-4 sm:mx-0"><div className="min-w-[500px] px-4 sm:px-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400 font-medium">Metric</th>
                      {financialProjections.map((proj, i) => (
                        <th key={i} className="text-right py-3 px-4 text-white font-bold">{proj.year}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Users</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="text-right py-3 px-4 text-white font-medium">{proj.users.toLocaleString()}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Move-in Volume (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="text-right py-3 px-4 text-white font-medium">{proj.moveInVolume}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Revenue (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="text-right py-3 px-4 text-green-400 font-bold">{proj.revenue}M</td>
                      ))}
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">Net Profit (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="text-right py-3 px-4 text-teal-400 font-bold">{proj.netProfit}M</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-300">Capital Needed (AED M)</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="text-right py-3 px-4 text-purple-400 font-medium">{proj.capitalNeeded}M</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div></div>
            </div>

            {/* Capital Requirements */}
            <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/5 rounded-xl p-4 sm:p-6 border border-purple-500/30">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <PiggyBank className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                Capital Requirements
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-3 sm:mb-4">
                Since rent is paid upfront to landlords, Sakin requires a revolving credit facility.
                However, because tenants repay monthly, actual capital needs are much lower than total financing volume.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-purple-500/20">
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Year 1 Credit Line</div>
                  <div className="text-xl sm:text-2xl font-bold text-purple-400">100M AED</div>
                  <div className="text-[10px] sm:text-xs text-slate-500">Revolving facility</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-purple-500/20">
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Source</div>
                  <div className="text-base sm:text-lg font-bold text-white">Bank Partnership</div>
                  <div className="text-[10px] sm:text-xs text-slate-500">NBFC co-lending</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-purple-500/20">
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Structure</div>
                  <div className="text-base sm:text-lg font-bold text-white">Risk Sharing</div>
                  <div className="text-[10px] sm:text-xs text-slate-500">70/30 split typical</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <div className="space-y-4 sm:space-y-6">
            {roadmapPhases.map((phase, i) => (
              <div key={i} className={`rounded-xl p-4 sm:p-6 border-2 ${phase.color} ${phase.bgColor}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider">{phase.phase}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{phase.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-slate-300 text-sm">{phase.timeline}</span>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold ${
                      phase.status === 'in_progress' ? 'bg-blue-500 text-white' :
                      phase.status === 'completed' ? 'bg-green-500 text-white' :
                      'bg-slate-600 text-slate-300'
                    }`}>
                      {phase.status === 'in_progress' ? 'In Progress' :
                       phase.status === 'completed' ? 'Completed' : 'Planned'}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                  {phase.milestones.map((milestone, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className={`w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 ${
                        phase.status === 'completed' ? 'text-green-400' : 'text-slate-500'
                      }`} />
                      {milestone}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* GTM Tab */}
        {activeTab === 'gtm' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {gtmChannels.map((channel, i) => (
                <div key={i} className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${
                      channel.priority === 'critical' ? 'bg-red-500/20' :
                      channel.priority === 'high' ? 'bg-orange-500/20' : 'bg-blue-500/20'
                    }`}>
                      <channel.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                        channel.priority === 'critical' ? 'text-red-400' :
                        channel.priority === 'high' ? 'text-orange-400' : 'text-blue-400'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">{channel.channel}</h3>
                      <span className={`text-[10px] sm:text-xs font-bold uppercase ${
                        channel.priority === 'critical' ? 'text-red-400' :
                        channel.priority === 'high' ? 'text-orange-400' : 'text-blue-400'
                      }`}>{channel.priority} priority</span>
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mb-2 sm:mb-3">{channel.volume}</div>
                  <div className="space-y-1 sm:space-y-2">
                    {channel.tactics.map((tactic, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500" />
                        {tactic}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Risks Tab */}
        {activeTab === 'risks' && (
          <div className="space-y-3 sm:space-y-4">
            {risks.map((risk, i) => (
              <div
                key={i}
                className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedRisk(expandedRisk === risk.risk ? null : risk.risk)}
                  className="w-full flex items-center justify-between p-3 sm:p-4 hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                      risk.severity === 'high' ? 'bg-red-500' :
                      risk.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`} />
                    <span className="text-sm sm:text-lg font-bold text-white">{risk.risk}</span>
                    <span className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded uppercase font-bold ${
                      risk.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                      risk.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>{risk.severity}</span>
                  </div>
                  {expandedRisk === risk.risk ? (
                    <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                  )}
                </button>

                {expandedRisk === risk.risk && (
                  <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                    <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4">
                      <div className="text-xs sm:text-sm text-slate-400 mb-2 sm:mb-3">Mitigation Strategies:</div>
                      <div className="space-y-1 sm:space-y-2">
                        {risk.mitigation.map((item, j) => (
                          <div key={j} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                            {item}
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

        {/* Competition Tab */}
        {activeTab === 'competition' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                Competitive Analysis
              </h2>

              <div className="overflow-x-auto -mx-4 sm:mx-0"><div className="min-w-[600px] px-4 sm:px-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-slate-400 font-medium">Feature</th>
                    {competitors.map((comp, i) => (
                      <th key={i} className={`text-center py-3 px-4 font-bold ${
                        comp.name === 'Sakin' ? 'text-teal-400' : 'text-white'
                      }`}>{comp.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-slate-300">Monthly Rent</td>
                    {competitors.map((comp, i) => (
                      <td key={i} className="text-center py-3 px-4">
                        {comp.monthlyRent ? (
                          <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <span className="text-slate-500">-</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-slate-300">Rewards</td>
                    {competitors.map((comp, i) => (
                      <td key={i} className={`text-center py-3 px-4 text-sm ${
                        comp.name === 'Sakin' ? 'text-[#c9a227] font-bold' : 'text-slate-400'
                      }`}>{comp.rewards}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-slate-300">Ecosystem</td>
                    {competitors.map((comp, i) => (
                      <td key={i} className={`text-center py-3 px-4 text-sm ${
                        comp.name === 'Sakin' ? 'text-teal-400 font-bold' : 'text-slate-400'
                      }`}>{comp.ecosystem}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-slate-300">Cross-sell Potential</td>
                    {competitors.map((comp, i) => (
                      <td key={i} className={`text-center py-3 px-4 text-sm ${
                        comp.crossSell === 'Very High' ? 'text-green-400 font-bold' :
                        comp.crossSell === 'High' ? 'text-green-400' :
                        comp.crossSell === 'Medium' ? 'text-yellow-400' : 'text-slate-400'
                      }`}>{comp.crossSell}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-300">User Retention</td>
                    {competitors.map((comp, i) => (
                      <td key={i} className={`text-center py-3 px-4 text-sm ${
                        comp.retention === 'Very High' ? 'text-green-400 font-bold' :
                        comp.retention === 'High' ? 'text-green-400' :
                        comp.retention === 'Medium' ? 'text-yellow-400' : 'text-slate-400'
                      }`}>{comp.retention}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div></div></div>

            {/* Competitive Advantages */}
            <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/5 rounded-xl p-4 sm:p-6 border border-teal-500/30">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Our Competitive Advantages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { title: 'Full-Stack Solution', desc: 'Find property + Finance rent in one app' },
                  { title: 'Nuqta+ Integration', desc: '1,200 AED annual rewards via ecosystem' },
                  { title: '19+ Partner Brands', desc: 'Cross-sell to salons, restaurants, etc.' },
                  { title: 'Monthly Engagement', desc: 'Forced app opens for rent payment' },
                  { title: 'Data Advantage', desc: 'Rich spending data from Nuqta ecosystem' },
                  { title: 'Verified Listings', desc: 'Quality control competitors lack' },
                ].map((adv, i) => (
                  <div key={i} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-bold text-sm sm:text-base">{adv.title}</div>
                      <div className="text-xs sm:text-sm text-slate-400">{adv.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-teal-500/20 to-cyan-500/10 rounded-2xl p-5 sm:p-8 border border-teal-500/30 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready to Transform Rent Payments?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
            Sakin is positioned to become the leading rent financing platform in the UAE,
            powered by the Nuqta ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="/nuqta-plus"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#c9a227] text-[#0a1628] font-bold rounded-xl hover:bg-[#b8922a] transition-all text-sm sm:text-base"
            >
              <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
              View Nuqta+ Integration
            </Link>
            <Link
              href="/data-room"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-all border border-slate-600 text-sm sm:text-base"
            >
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              Data Room
            </Link>
          </div>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
