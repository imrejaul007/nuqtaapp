'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Crown, Sparkles, Gift, Wallet, Calendar, Shield, TrendingUp,
  Users, Target, Rocket, CheckCircle, Clock,
  Coffee, Scissors, ShoppingBag, Gem, Shirt, Home,
  Droplets, Briefcase, ArrowRight, Star, Zap,
  DollarSign, BarChart3, Award, Heart,
  Globe, Smartphone, ChevronRight, Package,
  Megaphone, Store, Lock, Percent, BadgeCheck, Plane, Brush, Cake, User,
  Car, PawPrint, Flower, Key, Truck, Utensils, ShoppingCart,
  Gamepad2, Stethoscope, GraduationCap, Database,
  ChevronDown, ChevronUp, ArrowUpRight, Layers,
  Eye, Trophy, Map, Info, ArrowDown
} from 'lucide-react';
import RezHeader from '@/components/RezHeader';
import RezFooter from '@/components/RezFooter';

// ═══════════════════════════════════════════════════════
// DATA: Ecosystem Services (bundled into ReZ Subscription)
// ═══════════════════════════════════════════════════════

interface ServiceBenefit {
  service: string;
  category: 'delivery' | 'transport' | 'beauty-home' | 'finance' | 'health' | 'lifestyle' | 'business';
  monthlyUsage: string;
  benefits: { tier: 'basic' | 'pro' | 'premium'; benefit: string; value: string }[];
}

const serviceBenefits: ServiceBenefit[] = [
  // ── DELIVERY & FOOD ──
  {
    service: 'Food & Grocery Delivery',
    category: 'delivery',
    monthlyUsage: 'Household orders 8-12x/month',
    benefits: [
      { tier: 'basic', benefit: 'Free delivery on 5 orders/mo', value: '₹75' },
      { tier: 'pro', benefit: 'Free delivery on 10 orders/mo', value: '₹150' },
      { tier: 'premium', benefit: 'Unlimited free delivery', value: '₹300' },
    ],
  },
  {
    service: 'Essentials Delivery',
    category: 'delivery',
    monthlyUsage: 'Daily essentials 4-6x/month',
    benefits: [
      { tier: 'basic', benefit: 'Free delivery on 4 orders/mo', value: '₹60' },
      { tier: 'pro', benefit: 'Free delivery + priority slots', value: '₹140' },
      { tier: 'premium', benefit: 'Free delivery + same-day delivery', value: '₹280' },
    ],
  },
  // ── TRANSPORT ──
  {
    service: 'Local Transportation',
    category: 'transport',
    monthlyUsage: 'Commute 8-15x/month for professionals',
    benefits: [
      { tier: 'basic', benefit: '3 free rides (up to ₹50 each)/mo', value: '₹150' },
      { tier: 'pro', benefit: '8 free rides + 10% off extra rides', value: '₹300' },
      { tier: 'premium', benefit: '15 free rides + priority + AC fleet', value: '₹600' },
    ],
  },
  {
    service: 'Inter-city Travel',
    category: 'transport',
    monthlyUsage: 'Travel booked quarterly',
    benefits: [
      { tier: 'basic', benefit: '5% off all bookings', value: '~₹250/trip' },
      { tier: 'pro', benefit: '10% off + flexible cancellation', value: '~₹500/trip' },
      { tier: 'premium', benefit: '15% off + priority booking + insurance', value: '~₹750/trip' },
    ],
  },
  // ── BEAUTY & HOME ──
  {
    service: 'Salon & Spa Services',
    category: 'beauty-home',
    monthlyUsage: 'Beauty services booked 1-3x/month',
    benefits: [
      { tier: 'basic', benefit: '₹50 monthly beauty credit', value: '₹50' },
      { tier: 'pro', benefit: '₹100 credit + priority booking', value: '₹100' },
      { tier: 'premium', benefit: '₹200 credit + VIP stylists + home visits', value: '₹200' },
    ],
  },
  {
    service: 'Home Services',
    category: 'beauty-home',
    monthlyUsage: 'Cleaning/maintenance needed 2-4x/month',
    benefits: [
      { tier: 'basic', benefit: '1 free cleaning/mo', value: '~₹80' },
      { tier: 'pro', benefit: '2 free cleanings + priority', value: '~₹160' },
      { tier: 'premium', benefit: 'Weekly cleaning (4x) + 24hr service', value: '~₹320' },
    ],
  },
  // ── FINANCE ──
  {
    service: 'Buy Now Pay Later (BNPL)',
    category: 'finance',
    monthlyUsage: 'Used for purchases ₹500-5,000',
    benefits: [
      { tier: 'basic', benefit: '0% interest up to ₹2,000', value: '₹0' },
      { tier: 'pro', benefit: '0% interest up to ₹5,000 + 3-month EMI', value: '₹0' },
      { tier: 'premium', benefit: '0% interest up to ₹10,000 + 6-month EMI', value: '₹0' },
    ],
  },
  {
    service: 'Digital Payments & Transfers',
    category: 'finance',
    monthlyUsage: '10M+ expats send money home monthly',
    benefits: [
      { tier: 'basic', benefit: 'Free transfers up to ₹25,000', value: '₹0' },
      { tier: 'pro', benefit: 'Free transfers + instant UPI', value: '₹0' },
      { tier: 'premium', benefit: 'Unlimited transfers + international remittance', value: '₹0' },
    ],
  },
  {
    service: 'Rent & Utilities',
    category: 'finance',
    monthlyUsage: 'Rent is #1 monthly expense (₹8,000-25,000)',
    benefits: [
      { tier: 'basic', benefit: '₹200 off monthly rent', value: '₹200' },
      { tier: 'pro', benefit: '₹500 off + flexible payment', value: '₹500' },
      { tier: 'premium', benefit: '₹1000 off + EMI options', value: '₹1000' },
    ],
  },
  // ── HEALTH ──
  {
    service: 'Pharmacy & Health Products',
    category: 'health',
    monthlyUsage: 'Healthcare products ordered monthly',
    benefits: [
      { tier: 'basic', benefit: 'Free delivery + 5% off', value: '~₹30/mo' },
      { tier: 'pro', benefit: 'Free delivery + 10% off + priority', value: '~₹60/mo' },
      { tier: 'premium', benefit: 'Free delivery + 15% off + 24/7 access', value: '~₹90/mo' },
    ],
  },
  {
    service: 'Telemedicine & Consultations',
    category: 'health',
    monthlyUsage: 'Healthcare needed 1-2x/month',
    benefits: [
      { tier: 'basic', benefit: '1 free consultation/mo', value: '₹0' },
      { tier: 'pro', benefit: '3 consultations + 10% off medicines', value: '₹100' },
      { tier: 'premium', benefit: 'Unlimited consultations + 20% off + family access', value: '₹200' },
    ],
  },
  {
    service: 'Health Insurance',
    category: 'health',
    monthlyUsage: 'Insurance premiums paid monthly',
    benefits: [
      { tier: 'basic', benefit: '10% off all premiums', value: '~₹50/mo' },
      { tier: 'pro', benefit: '15% off + dental add-on', value: '~₹120/mo' },
      { tier: 'premium', benefit: '20% off + dental + vision + family', value: '~₹250/mo' },
    ],
  },
  // ── LIFESTYLE ──
  {
    service: 'Gaming & Entertainment',
    category: 'lifestyle',
    monthlyUsage: 'Gaming is daily habit — ad-free premium desired',
    benefits: [
      { tier: 'basic', benefit: 'Ad-free gaming + 5% off in-game purchases', value: '~₹30/mo' },
      { tier: 'pro', benefit: 'Ad-free + 10% off + premium games access', value: '~₹60/mo' },
      { tier: 'premium', benefit: 'Ad-free + 15% off + exclusive content', value: '~₹90/mo' },
    ],
  },
  {
    service: 'Events & Entertainment',
    category: 'lifestyle',
    monthlyUsage: 'Events & entertainment booked 1-3x/month',
    benefits: [
      { tier: 'basic', benefit: '₹100 event credits monthly', value: '₹100' },
      { tier: 'pro', benefit: '₹200 credits + VIP seating', value: '₹200' },
      { tier: 'premium', benefit: '₹400 credits + early booking + concierge', value: '₹400' },
    ],
  },
  {
    service: 'Equipment & Space Rentals',
    category: 'lifestyle',
    monthlyUsage: 'High-value periodic rentals',
    benefits: [
      { tier: 'basic', benefit: '5% off all rentals', value: '5%' },
      { tier: 'pro', benefit: '10% off + priority slots', value: '10%' },
      { tier: 'premium', benefit: '15% off + guaranteed availability + insurance', value: '15%' },
    ],
  },
  {
    service: 'Luxury & Concierge',
    category: 'lifestyle',
    monthlyUsage: 'High-value experiences desired by HNIs',
    benefits: [
      { tier: 'basic', benefit: 'Access to premium services', value: '₹500/yr' },
      { tier: 'pro', benefit: 'Priority access + discounts', value: '₹1000/yr' },
      { tier: 'premium', benefit: '24/7 concierge + exclusive offers', value: '₹2000/yr' },
    ],
  },
  // ── BUSINESS ──
  {
    service: 'Professional Services',
    category: 'business',
    monthlyUsage: 'Visa, licensing, attestation — frequent for expats',
    benefits: [
      { tier: 'basic', benefit: '5% off on all services', value: '5%' },
      { tier: 'pro', benefit: '10% off + priority processing', value: '10%' },
      { tier: 'premium', benefit: '15% off + dedicated support + express', value: '15%' },
    ],
  },
  {
    service: 'Upskilling & Certification',
    category: 'business',
    monthlyUsage: 'Ongoing professional development needs',
    benefits: [
      { tier: 'basic', benefit: '₹500 course credits/year', value: '₹500' },
      { tier: 'pro', benefit: '₹1000 credits + premium courses', value: '₹1000' },
      { tier: 'premium', benefit: '₹2000 credits + certification + coaching', value: '₹2000' },
    ],
  },
];

// ═════════════════════════════════════════════════════
// DATA: Subscription Tiers
// ═══════════════════════════════════════════════════════
const tiers = [
  {
    id: 'basic' as const,
    name: 'ReZ Basic',
    price: '99',
    annual: '999',
    annualSave: '189',
    color: 'text-[#f97316]',
    bgColor: 'bg-[#f97316]/10',
    borderColor: 'border-[#f97316]/30',
    gradientFrom: 'from-[#f97316]/20',
    badge: 'POPULAR',
    tagline: 'Essential ecosystem access',
    ecosystemServices: 15,
    partnerCoins: '750',
    totalValue: '~₹1,800/mo',
    coinMultiplier: '1.5x',
    highlights: [
      'Free delivery on 5 food + 4 grocery orders',
      '3 free local rides/mo',
      '1 free home service + 50₹ salon credit',
      '0% BNPL up to ₹2,000',
      '2 free money transfers + 200₹ rent discount',
      '1 free telemedicine + 10% off insurance',
      'Ad-free gaming + 1.5x ReZ Coin earn rate',
      '750₹ in partner brand coins (15 brands × 50₹)',
    ],
  },
  {
    id: 'pro' as const,
    name: 'ReZ Pro',
    price: '199',
    annual: '1,999',
    annualSave: '389',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    gradientFrom: 'from-amber-500/20',
    badge: 'BEST VALUE',
    tagline: 'Full ecosystem power',
    ecosystemServices: 15,
    partnerCoins: '1,500',
    totalValue: '~₹4,500/mo',
    coinMultiplier: '2x',
    highlights: [
      'Free delivery on 10 food + 8 grocery orders',
      '8 free rides + 10% off all rides',
      '2 free services + 100₹ salon credit',
      '0% BNPL up to ₹5,000 + 3-month EMI',
      '5 free transfers + 500₹ rent discount',
      '3 free consultations + 15% off insurance + dental',
      'Gaming VIP + 2x earn rate + 1 course/mo',
      '1,500₹ in partner brand coins (15 brands × 100₹)',
    ],
  },
  {
    id: 'premium' as const,
    name: 'ReZ Premium',
    price: '399',
    annual: '3,999',
    annualSave: '789',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    gradientFrom: 'from-purple-500/20',
    badge: 'ULTIMATE',
    tagline: 'Unlimited everything + concierge',
    ecosystemServices: 15,
    partnerCoins: '2,250',
    totalValue: '~₹10,000/mo',
    coinMultiplier: '3x',
    highlights: [
      'Unlimited free delivery on food + grocery',
      '15 free rides + priority + luxury fleet',
      'Weekly service (4x) + 200₹ salon + 24hr service',
      '0% BNPL up to ₹10,000 + 6-month EMI',
      'Unlimited transfers + 1000₹ rent discount',
      'Unlimited telemedicine + 20% off insurance + family',
      'Full concierge 24/7 + unlimited courses',
      '2,250₹ in partner brand coins (15 brands × 150₹)',
    ],
  },
];

// ═══════════════════════════════════════════════════════
// DATA: Category labels
// ═══════════════════════════════════════════════════════
const categoryLabels: Record<string, { label: string; icon: React.ElementType; color: string }> = {
  delivery: { label: 'Delivery & Food', icon: Truck, color: 'text-orange-400' },
  transport: { label: 'Transport & Travel', icon: Car, color: 'text-green-400' },
  'beauty-home': { label: 'Beauty & Home', icon: Sparkles, color: 'text-pink-400' },
  finance: { label: 'Finance & Payments', icon: Wallet, color: 'text-violet-400' },
  health: { label: 'Health & Insurance', icon: Stethoscope, color: 'text-rose-400' },
  lifestyle: { label: 'Lifestyle & Entertainment', icon: Star, color: 'text-yellow-400' },
  business: { label: 'Professional Services', icon: Briefcase, color: 'text-blue-400' },
};

export default function ReZSubscriptionPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedCategory, setExpandedCategory] = useState<string | null>('delivery');
  const [selectedTier, setSelectedTier] = useState<'basic' | 'pro' | 'premium'>('basic');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Crown },
    { id: 'services', label: 'Ecosystem Services', icon: Layers },
    { id: 'how-it-works', label: 'How It Works', icon: ArrowRight },
    { id: 'tiers', label: 'Tiers & Pricing', icon: DollarSign },
    { id: 'revenue', label: 'Revenue Model', icon: TrendingUp },
    { id: 'growth', label: 'Growth Plan', icon: Rocket },
  ];

  // Group services by category
  const groupedServices = serviceBenefits.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, ServiceBenefit[]>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a1f30] to-[#0a1628] text-white">
      <RezHeader />

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">

        {/* Hero Section */}
        <div className="text-center space-y-4 py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-4 py-2 rounded-full border border-orange-500/30">
            <Crown className="text-orange-400" size={24} />
            <span className="text-orange-400 font-bold">ReZ Subscription</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black">
            ReZ <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Ecosystem Membership</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            One subscription, infinite value. Access to 15+ ecosystem services, earn & spend ReZ Coins across your daily life.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg px-6 py-3">
              <p className="text-2xl font-bold text-orange-400">₹99-399</p>
              <p className="text-sm text-gray-400">Monthly</p>
            </div>
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg px-6 py-3">
              <p className="text-2xl font-bold text-orange-400">₹999-3,999</p>
              <p className="text-sm text-gray-400">Annual</p>
            </div>
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg px-6 py-3">
              <p className="text-2xl font-bold text-orange-400">3 Tiers</p>
              <p className="text-sm text-gray-400">Subscription Options</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-white/10 sticky top-0 bg-[#0a1628]/95 backdrop-blur-md z-40">
          <div className="flex overflow-x-auto gap-2 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Key Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-6">
                <Target className="text-orange-400 mb-2" size={32} />
                <p className="text-3xl font-bold text-white">15+</p>
                <p className="text-sm text-gray-400">Ecosystem Services</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-6">
                <Store className="text-orange-400 mb-2" size={32} />
                <p className="text-3xl font-bold text-white">20+</p>
                <p className="text-sm text-gray-400">Partner Brands</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-6">
                <DollarSign className="text-orange-400 mb-2" size={32} />
                <p className="text-3xl font-bold text-white">25-50%</p>
                <p className="text-sm text-gray-400">Average Savings</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-6">
                <Rocket className="text-orange-400 mb-2" size={32} />
                <p className="text-3xl font-bold text-white">₹4,500-10,000</p>
                <p className="text-sm text-gray-400">Monthly Value</p>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-8 border border-orange-500/30">
              <h2 className="text-2xl font-bold text-orange-300 mb-6">Why ReZ Subscription?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-bold text-white">Daily Coin Earnings</p>
                      <p className="text-sm text-gray-400">Earn 25-500 ReZ Coins through challenges, street interviews, social media activities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-bold text-white">Merchant Discounts</p>
                      <p className="text-sm text-gray-400">Get 25-50% instant discounts at 20+ partner businesses across India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-bold text-white">Free Delivery</p>
                      <p className="text-sm text-gray-400">Unlimited free food & grocery delivery from partner merchants</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-bold text-white">Flexible Payments</p>
                      <p className="text-sm text-gray-400">Use coins directly or convert to cashback on your purchases</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-bold text-white">0% Interest BNPL</p>
                      <p className="text-sm text-gray-400">Buy Now Pay Later with 0% interest up to ₹10,000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-bold text-white">Priority Access</p>
                      <p className="text-sm text-gray-400">Skip queues, get priority booking, exclusive offers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-bold text-white">Family Sharing</p>
                      <p className="text-sm text-gray-400">Share subscription with 2-4 family members at discounted rates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-bold text-white">Data & Analytics</p>
                      <p className="text-sm text-gray-400">Track spending, earn patterns, optimize your savings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tiers Preview */}
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-8 border border-orange-500/30">
              <h2 className="text-2xl font-bold text-orange-300 mb-6">Choose Your Tier</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`relative rounded-2xl p-6 border-2 cursor-pointer transition-all ${
                      selectedTier === tier.id
                        ? tier.borderColor
                        : 'border-white/10 hover:border-white/20'
                    } ${tier.bgColor}`}
                    onClick={() => setSelectedTier(tier.id as any)}
                  >
                    {tier.badge && (
                      <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {tier.badge}
                      </div>
                    )}
                    <div className={`text-sm font-bold mb-2 ${tier.color}`}>{tier.name}</div>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className={`text-3xl font-bold ${tier.color}`}>{tier.price}</span>
                      <span className="text-slate-400 text-sm">/mo</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-4">₹{tier.annual}/year (save ₹{tier.annualSave})</p>
                    <p className="text-sm font-medium text-white mb-4">{tier.tagline}</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {tier.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${tier.color}`}></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <div className="text-xs text-gray-500 mb-1">Value Breakdown:</div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Ecosystem Services:</span>
                          <span className="text-white font-medium">~₹{tier.totalValue}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Partner Brand Coins:</span>
                          <span className="text-white font-medium">₹{tier.partnerCoins}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Coin Multiplier:</span>
                          <span className="text-white font-medium">{tier.coinMultiplier}x earn rate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Ecosystem Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30">
              <h2 className="text-2xl font-bold text-orange-300 mb-6">Ecosystem Services Overview</h2>
              <p className="text-gray-400 mb-4">
                Access 15+ essential services across 7 categories. Earn ReZ Coins for daily activities and spend at partner brands.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {Object.entries(categoryLabels).map(([key, label]) => {
                  const services = groupedServices[key] || [];
                  return (
                    <div key={key} className="bg-white/5 rounded-lg border border-white/10 p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <label.icon className={label.color} size={24} />
                        <p className="font-bold text-white">{label.label}</p>
                      </div>
                      <div className="space-y-2">
                        {services.slice(0, 2).map((service, idx) => (
                          <div key={idx} className="text-xs text-gray-400">
                            <p className="font-medium text-white mb-1">{service.service}</p>
                            <p className="text-slate-500">{service.monthlyUsage}</p>
                          </div>
                        ))}
                        {services.length > 2 && (
                          <p className="text-xs text-orange-400 mt-2">+ {services.length - 2} more services</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* How It Works Tab */}
        {activeTab === 'how-it-works' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-8 border border-orange-500/30">
              <h2 className="text-2xl font-bold text-orange-300 mb-6">How ReZ Subscription Works</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
                    <div>
                      <p className="font-bold text-white mb-2">Subscribe to ReZ</p>
                      <p className="text-sm text-gray-400">Choose Basic, Pro, or Premium tier based on your usage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
                    <div>
                      <p className="font-bold text-white mb-2">Earn ReZ Coins Daily</p>
                      <p className="text-sm text-gray-400">Complete challenges, street interviews, social activities → earn 25-500 coins</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
                    <div>
                      <p className="font-bold text-white mb-2">Spend at Partner Brands</p>
                      <p className="text-sm text-gray-400">Get 25-50% instant discounts using your ReZ Coins at 20+ merchants</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">4</div>
                    <div>
                      <p className="font-bold text-white mb-2">Access Ecosystem Services</p>
                      <p className="text-sm text-gray-400">Free delivery, priority booking, 0% BNPL, telemedicine & more</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coin Earning Methods */}
              <div className="bg-white/5 rounded-lg p-6 border border-white/10 mt-6">
                <h3 className="text-xl font-bold text-white mb-4">Coin Earning Methods</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Zap className="text-orange-400" size={20} />
                      <p className="text-sm font-bold text-white">Public Challenges</p>
                    </div>
                    <p className="text-xs text-gray-400">Complete daily challenges at malls, metro stations, colleges → 50-500 coins</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Megaphone className="text-orange-400" size={20} />
                      <p className="text-sm font-bold text-white">Street Interviews</p>
                    </div>
                    <p className="text-xs text-gray-400">Answer quick questions, participate in impromptu activities → 25-100 coins</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Megaphone className="text-orange-400" size={20} />
                      <p className="text-sm font-bold text-white">Social Media</p>
                    </div>
                    <p className="text-xs text-gray-400">Share ReZ content, participate in hashtag challenges → 25-5000 coins</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Trophy className="text-orange-400" size={20} />
                      <p className="text-sm font-bold text-white">Leaderboard Rewards</p>
                    </div>
                    <p className="text-xs text-gray-400">Top 100 active members win 500-5000 bonus coins monthly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tiers & Pricing Tab */}
        {activeTab === 'tiers' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`rounded-2xl p-6 border-2 transition-all ${
                    selectedTier === tier.id
                      ? tier.borderColor
                      : 'border-white/10 hover:border-white/20'
                  } ${tier.bgColor}`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {tier.badge}
                    </div>
                  )}
                  <div className={`text-lg font-bold mb-2 ${tier.color}`}>{tier.name}</div>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className={`text-4xl font-bold ${tier.color}`}>{tier.price}</span>
                    <span className="text-slate-400">₹/mo</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">₹{tier.annual}/year (save ₹{tier.annualSave})</p>
                  <p className="text-lg font-medium text-white mb-4">{tier.tagline}</p>
                  <ul className="space-y-3 text-sm text-gray-300 mb-6">
                    {tier.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="text-emerald-400 flex-shrink-0" size={16} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="text-xs text-gray-500 mb-1">Value Per Month:</div>
                    <div className="text-2xl font-bold text-white">~₹{tier.totalValue}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tier Comparison */}
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Tier Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 text-gray-400">Feature</th>
                      <th className="text-center py-3 font-bold text-emerald-400">Basic (₹99)</th>
                      <th className="text-center py-3 font-bold text-amber-400">Pro (₹199)</th>
                      <th className="text-center py-3 font-bold text-purple-400">Premium (₹399)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/5">
                      <td className="py-3">Free Delivery (food + grocery)</td>
                      <td className="text-center">5 + 4 orders/mo</td>
                      <td className="text-center">10 + 8 orders/mo</td>
                      <td className="text-center text-emerald-400">Unlimited</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3">Local Transportation</td>
                      <td className="text-center">3 free rides</td>
                      <td className="text-center">8 free rides + 10% off</td>
                      <td className="text-center text-emerald-400">15 rides + priority</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3">Home Services</td>
                      <td className="text-center">1 free/mo</td>
                      <td className="text-center">2 free/mo + priority</td>
                      <td className="text-center text-emerald-400">Weekly (4x) + 24hr</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3">BNPL (0% interest)</td>
                      <td className="text-center">Up to ₹2,000</td>
                      <td className="text-center">Up to ₹5,000 + 3-mo EMI</td>
                      <td className="text-center text-emerald-400">Up to ₹10,000 + 6-mo EMI</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3">Telemedicine + Insurance</td>
                      <td className="text-center">1 free consult + 10% off</td>
                      <td className="text-center">3 consults + dental add-on</td>
                      <td className="text-center text-emerald-400">Unlimited + family access</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3">Partner Brand Coins</td>
                      <td className="text-center">15 × 50₹ = ₹750</td>
                      <td className="text-center">15 × 100₹ = ₹1,500</td>
                      <td className="text-center text-emerald-400">15 × 150₹ = ₹2,250</td>
                    </tr>
                    <tr>
                      <td className="py-3">Coin Earn Rate</td>
                      <td className="text-center">1.5x base</td>
                      <td className="text-center">2x base</td>
                      <td className="text-center text-emerald-400">3x base</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Revenue Model Tab */}
        {activeTab === 'revenue' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30">
              <h2 className="text-2xl font-bold text-orange-300 mb-6">Revenue Model</h2>
              <p className="text-gray-400 mb-6">
                Diversified revenue streams ensure sustainable growth and reduce dependency on any single source.
              </p>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { source: 'Membership Subscriptions', description: '₹99-399/mo recurring revenue from all tiers', share: '35%', icon: Crown, color: 'text-[#f97316]' },
                  { source: 'Ecosystem Commission', description: 'Commission on delivery, rides, bookings, BNPL transactions', share: '30%', icon: Layers, color: 'text-emerald-400' },
                  { source: 'Partner Brand Commission', description: 'Fixed % on every coin redemption transaction', share: '20%', icon: Store, color: 'text-blue-400' },
                  { source: 'Coin Breakage', description: 'Unused coins that expire (estimated 15-25% breakage rate)', share: '10%', icon: Clock, color: 'text-amber-400' },
                  { source: 'Premium Upsells', description: 'Tier upgrades, add-on services, family plans', share: '5%', icon: ArrowUpRight, color: 'text-purple-400' },
                ].map((stream, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <stream.icon className={`${stream.color} mb-2`} size={32} />
                    <p className="text-xs text-gray-500 mb-1">{stream.share}%</p>
                    <p className="text-sm font-medium text-white">{stream.source}</p>
                    <p className="text-xs text-gray-400 mt-2">{stream.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Projections */}
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Revenue Projections</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { period: 'Q4 2026', members: '10K', blendedARPU: '₹155', mrr: '₹1.55M', ecosystemGMV: '₹12M' },
                  { period: 'H1 2027', members: '50K', blendedARPU: '₹165', mrr: '₹8.25M', ecosystemGMV: '₹65M' },
                  { period: 'H2 2027', members: '100K', blendedARPU: '₹175', mrr: '₹17.5M', ecosystemGMV: '₹140M' },
                  { period: '2028', members: '250K', blendedARPU: '₹185', mrr: '₹46.25M', ecosystemGMV: '₹400M' },
                ].map((projection, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-sm font-bold text-orange-400 mb-1">{projection.period}</p>
                    <p className="text-2xl font-bold text-white mb-1">{projection.members}</p>
                    <p className="text-xs text-gray-400 mb-1">Members</p>
                    <div className="space-y-1 mt-2 pt-2 border-t border-white/10">
                      <p className="text-xs text-gray-500">ARPU: <span className="text-white">{projection.blendedARPU}</span></p>
                      <p className="text-xs text-gray-500">MRR: <span className="text-white">{projection.mrr}</span></p>
                      <p className="text-xs text-gray-500">GMV: <span className="text-white">{projection.ecosystemGMV}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Growth Plan Tab */}
        {activeTab === 'growth' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30">
              <h2 className="text-2xl font-bold text-orange-300 mb-6">Growth Strategy & Timeline</h2>
              <p className="text-gray-400 mb-6">
                Phased rollout from Bangalore to multi-city expansion, targeting 250K members by 2028.
              </p>

              {/* Phase Timeline */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-lg font-bold">1</div>
                  <div className="flex-1">
                    <p className="font-bold text-white mb-1">Launch Phase (Months 1-3)</p>
                    <p className="text-sm text-gray-400">Bangalore pilot with 50K target members. Activate 20 partner brands, deploy viral growth channels, establish media house teams.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-lg font-bold">2</div>
                  <div className="flex-1">
                    <p className="font-bold text-white mb-1">Scale Phase (Months 4-6)</p>
                    <p className="text-sm text-gray-400">Expand to Tier 2 cities (Delhi, Mumbai). Reach 100K members. B2B2C roadside vendor acquisition, college campus activations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-lg font-bold">3</div>
                  <div className="flex-1">
                    <p className="font-bold text-white mb-1">National Rollout (Months 7-12)</p>
                    <p className="text-sm text-gray-400">Multi-city expansion (10+ cities). Target 250K members. Full ecosystem service activation, AI-powered personalization.</p>
                  </div>
                </div>
              </div>

              {/* Growth Channels */}
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Zap className="text-orange-400" size={20} />
                    Viral Growth Channels
                  </h4>
                  <ul className="text-xs space-y-2 text-gray-300">
                    <li>• Public challenges at malls/metro/colleges</li>
                    <li>• Street interviews & flash giveaways</li>
                    <li>• Social media hashtag challenges</li>
                    <li>• Festival & seasonal campaigns</li>
                    <li>• Community initiatives (#ReZClean, #ReZShare)</li>
                    <li>• Corporate partnership programs</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Store className="text-orange-400" size={20} />
                    Partner Acquisition
                  </h4>
                  <ul className="text-xs space-y-2 text-gray-300">
                    <li>• 20+ partner brands by year 1</li>
                    <li>• B2B2C roadside vendor onboarding</li>
                    <li>• College & event activations</li>
                    <li>• Media house content teams (10 niches)</li>
                    <li>• Merchant coin distribution</li>
                    <li>• Performance analytics dashboard</li>
                  </ul>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h4 className="font-bold text-white mb-3">Key Success Metrics</h4>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-emerald-400">85%+</p>
                    <p className="text-xs text-gray-400">Monthly Active Rate</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-emerald-400">₹185</p>
                    <p className="text-xs text-gray-400">Blended ARPU</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-emerald-400">10x</p>
                    <p className="text-xs text-gray-400">Viral Coefficient</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-emerald-400">₹76</p>
                    <p className="text-xs text-gray-400">Target CAC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-8 border border-orange-500/30 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Join ReZ Ecosystem?</h2>
          <p className="text-gray-300 mb-6">Start with a 30-day free trial. After trial, choose the tier that fits your lifestyle.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/rez" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 py-3 rounded-lg font-bold text-white transition-colors">
              View ReZ Overview
            </Link>
            <Link href="/rez-marketing" className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-bold text-white transition-colors border border-white/20">
              See Marketing Plan
            </Link>
            <Link href="/rez-financials" className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-bold text-white transition-colors border border-white/20">
              Financial Model
            </Link>
          </div>
        </div>

      </div>
      <RezFooter />
    </div>
  );
}
