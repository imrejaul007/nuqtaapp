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
import GlobalFooter from '@/components/GlobalFooter';

// ═══════════════════════════════════════════════════════
// DATA: RTMN Ecosystem Benefits (bundled into Nuqta+)
// ═══════════════════════════════════════════════════════

interface EcoBenefit {
  app: string;
  arabic: string;
  href: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  borderColor: string;
  category: 'delivery' | 'transport' | 'beauty-home' | 'finance' | 'health' | 'lifestyle' | 'business';
  monthlyNeed: string;
  benefits: { tier: 'plus' | 'gold' | 'prive'; benefit: string; value: string }[];
}

const ecosystemBenefits: EcoBenefit[] = [
  // ── DELIVERY & FOOD ──
  {
    app: 'Wasil', arabic: 'واصل', href: '/wasil',
    icon: Truck, color: 'text-orange-400', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30',
    category: 'delivery', monthlyNeed: 'Everyone orders delivery 8-12x/month',
    benefits: [
      { tier: 'plus', benefit: 'Free delivery on 5 orders/mo', value: '75 AED' },
      { tier: 'gold', benefit: 'Free delivery on 15 orders/mo', value: '225 AED' },
      { tier: 'prive', benefit: 'Unlimited free delivery', value: '400+ AED' },
    ],
  },
  {
    app: 'Dinezy', arabic: 'داينزي', href: '/dinezy',
    icon: Utensils, color: 'text-red-400', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30',
    category: 'delivery', monthlyNeed: 'Food delivery used 6-10x/month per household',
    benefits: [
      { tier: 'plus', benefit: 'Free delivery on 5 food orders/mo', value: '75 AED' },
      { tier: 'gold', benefit: 'Free delivery + 10% off menu on 10 orders', value: '200 AED' },
      { tier: 'prive', benefit: 'Unlimited free delivery + 15% off all orders', value: '500+ AED' },
    ],
  },
  {
    app: 'Grocify', arabic: 'غروسيفاي', href: '/grocify',
    icon: ShoppingCart, color: 'text-lime-400', bgColor: 'bg-lime-500/10', borderColor: 'border-lime-500/30',
    category: 'delivery', monthlyNeed: 'Grocery runs 4-6x/month',
    benefits: [
      { tier: 'plus', benefit: 'Free delivery on 4 grocery orders/mo', value: '60 AED' },
      { tier: 'gold', benefit: 'Free delivery + 5% off on 8 orders', value: '160 AED' },
      { tier: 'prive', benefit: 'Unlimited free delivery + 10% off + priority slots', value: '350+ AED' },
    ],
  },
  // ── TRANSPORT ──
  {
    app: 'Rakab', arabic: 'ركاب', href: '/rakab',
    icon: Car, color: 'text-green-300', bgColor: 'bg-green-400/10', borderColor: 'border-green-400/30',
    category: 'transport', monthlyNeed: 'Ride-hailing used 8-15x/month for commuters',
    benefits: [
      { tier: 'plus', benefit: '3 free rides (up to 25 AED each)/mo', value: '75 AED' },
      { tier: 'gold', benefit: '8 free rides + 10% off all rides', value: '250 AED' },
      { tier: 'prive', benefit: '15 free rides + priority pickup + luxury fleet', value: '500+ AED' },
    ],
  },
  {
    app: 'Safar', arabic: 'سفر', href: '/safar',
    icon: Plane, color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30',
    category: 'transport', monthlyNeed: 'Travel booked quarterly; TravoPay installments monthly',
    benefits: [
      { tier: 'plus', benefit: '5% off all bookings + free cancellation', value: '~150 AED/trip' },
      { tier: 'gold', benefit: '10% off + airport lounge 1x/quarter', value: '~400 AED/trip' },
      { tier: 'prive', benefit: '15% off + lounge access + concierge planning', value: '~800 AED/trip' },
    ],
  },
  // ── BEAUTY & HOME ──
  {
    app: 'Glowzy', arabic: 'غلوزي', href: '/glowzy',
    icon: Sparkles, color: 'text-pink-400', bgColor: 'bg-pink-500/10', borderColor: 'border-pink-500/30',
    category: 'beauty-home', monthlyNeed: 'Beauty services booked 1-3x/month',
    benefits: [
      { tier: 'plus', benefit: '50 AED monthly beauty credit', value: '50 AED' },
      { tier: 'gold', benefit: '100 AED credit + priority booking', value: '100 AED' },
      { tier: 'prive', benefit: '200 AED credit + VIP stylists + home visits', value: '200 AED' },
    ],
  },
  {
    app: 'CleanEZ', arabic: 'كلين إيزي', href: '/cleanez',
    icon: Brush, color: 'text-teal-400', bgColor: 'bg-teal-500/10', borderColor: 'border-teal-500/30',
    category: 'beauty-home', monthlyNeed: 'Home cleaning needed 2-4x/month',
    benefits: [
      { tier: 'plus', benefit: '1 free standard cleaning/mo', value: '120 AED' },
      { tier: 'gold', benefit: '2 free cleanings + 15% off extras', value: '270 AED' },
      { tier: 'prive', benefit: 'Weekly cleaning included (4x/mo)', value: '480 AED' },
    ],
  },
  {
    app: 'HandyZy', arabic: 'هاندزي', href: '/handyzy',
    icon: Briefcase, color: 'text-amber-400', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/30',
    category: 'beauty-home', monthlyNeed: 'Handyman/maintenance needed 1-2x/month',
    benefits: [
      { tier: 'plus', benefit: 'Priority booking + 10% off', value: '~40 AED' },
      { tier: 'gold', benefit: '1 free service call/mo + 15% off', value: '~120 AED' },
      { tier: 'prive', benefit: '2 free calls/mo + 24hr emergency line', value: '~250 AED' },
    ],
  },
  // ── FINANCE ──
  {
    app: 'Qist', arabic: 'قسط', href: '/qist',
    icon: Wallet, color: 'text-violet-400', bgColor: 'bg-violet-500/10', borderColor: 'border-violet-500/30',
    category: 'finance', monthlyNeed: 'BNPL used for purchases 500+ AED',
    benefits: [
      { tier: 'plus', benefit: '0% markup BNPL up to 3,000 AED', value: '~90 AED saved' },
      { tier: 'gold', benefit: '0% BNPL up to 10,000 AED + 6-month terms', value: '~250 AED saved' },
      { tier: 'prive', benefit: '0% BNPL up to 25,000 AED + 12-month terms', value: '~600 AED saved' },
    ],
  },
  {
    app: 'Hawil', arabic: 'حوّل', href: '/hawil',
    icon: Globe, color: 'text-green-400', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/30',
    category: 'finance', monthlyNeed: '9.5M expats send money home monthly',
    benefits: [
      { tier: 'plus', benefit: '2 free transfers/mo + 0% FX markup', value: '40 AED' },
      { tier: 'gold', benefit: '5 free transfers/mo + 0% FX + priority processing', value: '100 AED' },
      { tier: 'prive', benefit: 'Unlimited free transfers + best rates + instant', value: '200+ AED' },
    ],
  },
  {
    app: 'Sakin', arabic: 'ساكن', href: '/sakin',
    icon: Home, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30',
    category: 'finance', monthlyNeed: 'Rent is #1 monthly expense (3,000-8,000 AED)',
    benefits: [
      { tier: 'plus', benefit: '100 AED off monthly rent via Sakin', value: '100 AED' },
      { tier: 'gold', benefit: '200 AED off rent + deposit financing 0%', value: '200 AED' },
      { tier: 'prive', benefit: '300 AED off rent + 0% deposit + move-in bonus', value: '300 AED' },
    ],
  },
  // ── HEALTH ──
  {
    app: 'MediEarn', arabic: 'ميدي إيرن', href: '/mediearn',
    icon: Stethoscope, color: 'text-rose-400', bgColor: 'bg-rose-500/10', borderColor: 'border-rose-500/30',
    category: 'health', monthlyNeed: 'Pharmacy & health products ordered monthly',
    benefits: [
      { tier: 'plus', benefit: 'Free pharmacy delivery + 10% off OTC', value: '50 AED' },
      { tier: 'gold', benefit: 'Free delivery + 15% off + auto-refill reminders', value: '100 AED' },
      { tier: 'prive', benefit: 'Free delivery + 20% off + personal pharmacist', value: '150 AED' },
    ],
  },
  {
    app: 'Tabib', arabic: 'طبيب', href: '/tabib',
    icon: Stethoscope, color: 'text-rose-300', bgColor: 'bg-rose-400/10', borderColor: 'border-rose-400/30',
    category: 'health', monthlyNeed: 'Healthcare consultations needed 1-2x/month',
    benefits: [
      { tier: 'plus', benefit: '1 free telemedicine consultation/mo', value: '100 AED' },
      { tier: 'gold', benefit: '3 free consultations + 20% off in-person', value: '350 AED' },
      { tier: 'prive', benefit: 'Unlimited telemedicine + priority booking + family', value: '600+ AED' },
    ],
  },
  {
    app: 'Daman', arabic: 'ضمان', href: '/daman',
    icon: Shield, color: 'text-sky-400', bgColor: 'bg-sky-500/10', borderColor: 'border-sky-500/30',
    category: 'health', monthlyNeed: 'Insurance premiums paid monthly',
    benefits: [
      { tier: 'plus', benefit: '10% off all insurance premiums', value: '~50 AED/mo' },
      { tier: 'gold', benefit: '15% off + free dental add-on', value: '~120 AED/mo' },
      { tier: 'prive', benefit: '20% off + dental + vision + family discount', value: '~250 AED/mo' },
    ],
  },
  // ── LIFESTYLE ──
  {
    app: 'SpinZy', arabic: 'سبينزي', href: '/spinzy',
    icon: Gamepad2, color: 'text-yellow-400', bgColor: 'bg-yellow-500/10', borderColor: 'border-yellow-500/30',
    category: 'lifestyle', monthlyNeed: 'Gaming is daily habit — ad-free premium desired',
    benefits: [
      { tier: 'plus', benefit: 'Ad-free gaming + 1.5x coin multiplier', value: '20 AED' },
      { tier: 'gold', benefit: 'Ad-free + 2x coins + exclusive game modes', value: '40 AED' },
      { tier: 'prive', benefit: 'Ad-free + 3x coins + VIP tournaments + early access', value: '60 AED' },
    ],
  },
  {
    app: 'Eventora', arabic: 'إيفنتورا', href: '/eventora',
    icon: Calendar, color: 'text-violet-400', bgColor: 'bg-violet-500/10', borderColor: 'border-violet-500/30',
    category: 'lifestyle', monthlyNeed: 'Events & entertainment booked 1-3x/month',
    benefits: [
      { tier: 'plus', benefit: '10% off all tickets + early access', value: '~50 AED' },
      { tier: 'gold', benefit: '15% off + VIP upgrades on select events', value: '~120 AED' },
      { tier: 'prive', benefit: '20% off + complimentary VIP + concierge bookings', value: '~300 AED' },
    ],
  },
  {
    app: 'Ajer', arabic: 'أجر', href: '/ajer',
    icon: Package, color: 'text-teal-400', bgColor: 'bg-teal-500/10', borderColor: 'border-teal-500/30',
    category: 'lifestyle', monthlyNeed: 'Car, equipment, space rentals — periodic but high-value',
    benefits: [
      { tier: 'plus', benefit: '10% off all rentals', value: '~60 AED' },
      { tier: 'gold', benefit: '15% off + free delivery/pickup', value: '~150 AED' },
      { tier: 'prive', benefit: '20% off + complimentary weekend car rental 1x/mo', value: '~400 AED' },
    ],
  },
  {
    app: 'Fakhir', arabic: 'فاخر', href: '/fakhir',
    icon: Star, color: 'text-amber-300', bgColor: 'bg-amber-400/10', borderColor: 'border-amber-400/30',
    category: 'lifestyle', monthlyNeed: 'Luxury concierge for high-value experiences',
    benefits: [
      { tier: 'plus', benefit: 'Access to Fakhir deals & offers', value: '—' },
      { tier: 'gold', benefit: 'Fakhir Lite: 2 concierge requests/mo', value: '200 AED' },
      { tier: 'prive', benefit: 'Full Fakhir concierge — unlimited 24/7', value: '1,000+ AED' },
    ],
  },
  // ── BUSINESS SERVICES CONSUMERS USE ──
  {
    app: 'Khedma', arabic: 'خدمة', href: '/khedma',
    icon: Briefcase, color: 'text-orange-400', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30',
    category: 'business', monthlyNeed: 'Visa, licensing, attestation — frequent for expats',
    benefits: [
      { tier: 'plus', benefit: '15% off all PRO/visa services', value: '~100 AED' },
      { tier: 'gold', benefit: '20% off + priority processing', value: '~200 AED' },
      { tier: 'prive', benefit: '25% off + dedicated PRO officer + document vault', value: '~400 AED' },
    ],
  },
  {
    app: 'Tadreeb', arabic: 'تدريب', href: '/tadreeb',
    icon: GraduationCap, color: 'text-indigo-400', bgColor: 'bg-indigo-500/10', borderColor: 'border-indigo-500/30',
    category: 'business', monthlyNeed: 'Upskilling & certification — ongoing professional need',
    benefits: [
      { tier: 'plus', benefit: '1 free course/quarter + 10% off', value: '~80 AED' },
      { tier: 'gold', benefit: '1 free course/month + 20% off all', value: '~200 AED' },
      { tier: 'prive', benefit: 'Unlimited courses + certification prep + mentorship', value: '~500 AED' },
    ],
  },
];

// ═══════════════════════════════════════════════════════
// DATA: External Partner Brands (existing Nuqta+ partners)
// ═══════════════════════════════════════════════════════
const partnerBrands = [
  { id: 'salon', name: 'Salon & Spa', icon: Scissors, coin: { plus: 50, gold: 100, prive: 150 }, color: 'text-pink-400', bgColor: 'bg-pink-500/10', partner: 'Nilim (YB Lounge)', status: 'confirmed' },
  { id: 'perfume', name: 'Perfume & Oud', icon: Droplets, coin: { plus: 50, gold: 100, prive: 150 }, color: 'text-purple-400', bgColor: 'bg-purple-500/10', partner: 'Al Mutlaib', status: 'confirmed' },
  { id: 'laundry', name: 'Laundry', icon: ShoppingBag, coin: { plus: 50, gold: 100, prive: 150 }, color: 'text-blue-400', bgColor: 'bg-blue-500/10', partner: 'Laundristan', status: 'confirmed' },
  { id: 'abaya', name: 'Abaya & Fashion', icon: Shirt, coin: { plus: 50, gold: 100, prive: 150 }, color: 'text-slate-300', bgColor: 'bg-slate-500/10', partner: 'W Line', status: 'confirmed' },
  { id: 'jewellery', name: 'Jewellery', icon: Gem, coin: { plus: 50, gold: 100, prive: 150 }, color: 'text-yellow-400', bgColor: 'bg-yellow-500/10', partner: '10 Stone', status: 'confirmed' },
  { id: 'home-fragrance', name: 'Home Fragrance', icon: Home, coin: { plus: 50, gold: 100, prive: 150 }, color: 'text-indigo-400', bgColor: 'bg-indigo-500/10', partner: 'Whiff Theory', status: 'confirmed' },
  { id: 'car-wash', name: 'Car Wash', icon: Car, coin: { plus: 50, gold: 100, prive: 150 }, color: 'text-red-400', bgColor: 'bg-red-500/10', partner: 'Z Wash', status: 'confirmed' },
  { id: 'coffee', name: 'Coffee & Beverages', icon: Coffee, coin: { plus: 50, gold: 100, prive: 150 }, color: 'text-amber-400', bgColor: 'bg-amber-500/10', partner: null, status: 'pending' },
  { id: 'haircare', name: 'Haircare & Cosmetics', icon: Sparkles, coin: { plus: 50, gold: 100, prive: 150 }, color: 'text-rose-400', bgColor: 'bg-rose-500/10', partner: null, status: 'pending' },
  { id: 'desserts', name: 'Desserts & Sweets', icon: Cake, coin: { plus: 50, gold: 100, prive: 150 }, color: 'text-orange-400', bgColor: 'bg-orange-500/10', partner: null, status: 'pending' },
  { id: 'mens-grooming', name: "Men's Grooming", icon: User, coin: { plus: 50, gold: 100, prive: 150 }, color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', partner: null, status: 'pending' },
  { id: 'florist', name: 'Florist & Gifts', icon: Flower, coin: { plus: 50, gold: 100, prive: 150 }, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', partner: null, status: 'pending' },
  { id: 'pet-services', name: 'Pet Care', icon: PawPrint, coin: { plus: 50, gold: 100, prive: 150 }, color: 'text-lime-400', bgColor: 'bg-lime-500/10', partner: null, status: 'pending' },
];

// ═══════════════════════════════════════════════════════
// DATA: Membership Tiers
// ═══════════════════════════════════════════════════════
const tiers = [
  {
    id: 'plus' as const,
    name: 'Nuqta+',
    price: '99',
    annual: '999',
    annualSave: '189',
    color: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]/30',
    gradientFrom: 'from-[#c9a227]/20',
    badge: 'POPULAR',
    tagline: 'Essential ecosystem access',
    ecosystemApps: 20,
    partnerCoins: '650 AED',
    totalValue: '~2,000 AED/mo',
    coinMultiplier: '1.5x',
    highlights: [
      'Free delivery on 5 Wasil + 5 Dinezy + 4 Grocify orders',
      '3 free Rakab rides/mo',
      '1 free cleaning + 50 AED Glowzy credit',
      '0% Qist BNPL up to 3,000 AED',
      '2 free Hawil transfers + 100 AED off Sakin rent',
      '1 free telemedicine + 10% off insurance',
      'Ad-free SpinZy + 1.5x Nuqta Coin earn rate',
      '650 AED in partner brand coins (13 brands × 50)',
    ],
  },
  {
    id: 'gold' as const,
    name: 'Nuqta+ Gold',
    price: '199',
    annual: '1,999',
    annualSave: '389',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    gradientFrom: 'from-amber-500/20',
    badge: 'BEST VALUE',
    tagline: 'Full ecosystem power',
    ecosystemApps: 20,
    partnerCoins: '1,300 AED',
    totalValue: '~5,500 AED/mo',
    coinMultiplier: '2x',
    highlights: [
      'Free delivery on 15 Wasil + 10 Dinezy + 8 Grocify orders',
      '8 free Rakab rides + 10% off all rides',
      '2 free cleanings + 100 AED Glowzy credit',
      '0% Qist BNPL up to 10,000 AED',
      '5 free Hawil transfers + 200 AED off Sakin rent',
      '3 free consultations + 15% off insurance + Fakhir Lite',
      'SpinZy VIP + 2x earn rate + 1 free course/mo',
      '1,300 AED in partner brand coins (13 brands × 100)',
    ],
  },
  {
    id: 'prive' as const,
    name: 'Nuqta+ Privé',
    price: '399',
    annual: '3,999',
    annualSave: '789',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    gradientFrom: 'from-purple-500/20',
    badge: 'ULTIMATE',
    tagline: 'Unlimited everything + concierge',
    ecosystemApps: 20,
    partnerCoins: '1,950 AED',
    totalValue: '~12,000+ AED/mo',
    coinMultiplier: '3x',
    highlights: [
      'Unlimited free delivery on Wasil + Dinezy + Grocify',
      '15 free Rakab rides + luxury fleet + priority pickup',
      'Weekly cleaning (4x) + 200 AED Glowzy + 24hr HandyZy',
      '0% Qist BNPL up to 25,000 AED + 12-month terms',
      'Unlimited Hawil + 300 AED off Sakin rent',
      'Unlimited telemedicine + 20% off insurance + family',
      'Full Fakhir concierge 24/7 + unlimited courses',
      '1,950 AED in partner brand coins (13 brands × 150)',
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

// ═══════════════════════════════════════════════════════
// DATA: Revenue Model
// ═══════════════════════════════════════════════════════
const revenueStreams = [
  { source: 'Membership Subscriptions', description: '99-399 AED/mo recurring revenue from all tiers', share: '35%', icon: Crown, color: 'text-[#c9a227]' },
  { source: 'Ecosystem Commission', description: 'Commission on delivery, rides, bookings, BNPL transactions', share: '30%', icon: Layers, color: 'text-emerald-400' },
  { source: 'Partner Brand Commission', description: 'Fixed % on every partner coin redemption transaction', share: '20%', icon: Store, color: 'text-blue-400' },
  { source: 'Coin Breakage', description: 'Unused coins that expire (est. 15-25% breakage rate)', share: '10%', icon: Clock, color: 'text-amber-400' },
  { source: 'Premium Upsells', description: 'Tier upgrades, add-on services, family plans', share: '5%', icon: ArrowUpRight, color: 'text-purple-400' },
];

// ═══════════════════════════════════════════════════════
// DATA: Growth Projections
// ═══════════════════════════════════════════════════════
const growthTargets = [
  { period: 'Q4 2026', members: '10K', blendedARPU: '155 AED', mrr: '1.55M AED', ecosystemGMV: '12M AED' },
  { period: 'H1 2027', members: '50K', blendedARPU: '165 AED', mrr: '8.25M AED', ecosystemGMV: '65M AED' },
  { period: 'H2 2027', members: '100K', blendedARPU: '175 AED', mrr: '17.5M AED', ecosystemGMV: '140M AED' },
  { period: '2028', members: '250K', blendedARPU: '185 AED', mrr: '46.25M AED', ecosystemGMV: '400M AED' },
];

// ═══════════════════════════════════════════════════════
// DATA: V1 — Original Nuqta+ (Partner Brands Only)
// ═══════════════════════════════════════════════════════
const v1Partners = [
  { id: 1, name: 'Al Mutlaib', category: 'Perfume & Oud', icon: Droplets, color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30', status: 'confirmed' as const, coin: 100, minSpend: 250, description: 'Premium Arabian perfumes and oud — luxury fragrances' },
  { id: 2, name: 'Whiff Theory', category: 'Home Fragrance', icon: Home, color: 'text-indigo-400', bgColor: 'bg-indigo-500/10', borderColor: 'border-indigo-500/30', status: 'confirmed' as const, coin: 100, minSpend: 200, description: 'Premium home fragrances, candles, diffusers' },
  { id: 3, name: 'W Line', category: 'Designer Abayas', icon: Shirt, color: 'text-slate-300', bgColor: 'bg-slate-500/10', borderColor: 'border-slate-500/30', status: 'confirmed' as const, coin: 100, minSpend: 300, description: 'Designer abayas, modest fashion collections' },
  { id: 4, name: 'Nilim (YB Lounge)', category: 'Salon & Spa', icon: Scissors, color: 'text-pink-400', bgColor: 'bg-pink-500/10', borderColor: 'border-pink-500/30', status: 'confirmed' as const, coin: 100, minSpend: 250, description: 'Premium salon and spa services — hair, nails, treatments' },
  { id: 5, name: '10 Stone', category: 'Premium Jewelry', icon: Gem, color: 'text-yellow-400', bgColor: 'bg-yellow-500/10', borderColor: 'border-yellow-500/30', status: 'confirmed' as const, coin: 100, minSpend: 300, description: 'Fine jewelry, gemstones, custom pieces' },
  { id: 6, name: 'Laundristan', category: 'Laundry Services', icon: ShoppingBag, color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30', status: 'confirmed' as const, coin: 100, minSpend: 200, description: 'Premium laundry, dry cleaning, alterations' },
  { id: 7, name: 'Z Wash', category: 'Premium Car Wash', icon: Car, color: 'text-red-400', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30', status: 'confirmed' as const, coin: 100, minSpend: 200, description: 'Premium car detailing and wash services' },
  { id: 8, name: 'TBD', category: 'Coffee & Beverages', icon: Coffee, color: 'text-amber-400', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/30', status: 'planned' as const, coin: 100, minSpend: 150, description: 'Specialty coffee shops and beverage brands' },
  { id: 9, name: 'TBD', category: 'Haircare & Cosmetics', icon: Sparkles, color: 'text-rose-400', bgColor: 'bg-rose-500/10', borderColor: 'border-rose-500/30', status: 'planned' as const, coin: 100, minSpend: 200, description: 'Hair products, skincare, cosmetics retail' },
  { id: 10, name: 'TBD', category: 'Desserts & Sweets', icon: Cake, color: 'text-orange-400', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30', status: 'planned' as const, coin: 100, minSpend: 150, description: 'Premium bakeries, chocolate, Arabic sweets' },
  { id: 11, name: 'TBD', category: "Men's Grooming", icon: User, color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30', status: 'planned' as const, coin: 100, minSpend: 200, description: "Barbershops, men's skincare, grooming products" },
  { id: 12, name: 'TBD', category: 'Florist & Gifts', icon: Flower, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30', status: 'planned' as const, coin: 100, minSpend: 200, description: 'Flower arrangements, gift baskets, occasions' },
  { id: 13, name: 'TBD', category: 'Pet Care', icon: PawPrint, color: 'text-lime-400', bgColor: 'bg-lime-500/10', borderColor: 'border-lime-500/30', status: 'planned' as const, coin: 100, minSpend: 200, description: 'Pet grooming, veterinary, pet supplies' },
  { id: 14, name: 'TBD', category: 'Fitness & Wellness', icon: Heart, color: 'text-red-300', bgColor: 'bg-red-400/10', borderColor: 'border-red-400/30', status: 'planned' as const, coin: 100, minSpend: 250, description: 'Gym memberships, yoga, fitness classes' },
  { id: 15, name: 'TBD', category: 'Electronics & Gadgets', icon: Smartphone, color: 'text-blue-300', bgColor: 'bg-blue-400/10', borderColor: 'border-blue-400/30', status: 'planned' as const, coin: 100, minSpend: 300, description: 'Phone accessories, gadgets, repair services' },
  { id: 16, name: 'TBD', category: 'Optician & Eyewear', icon: Eye, color: 'text-violet-300', bgColor: 'bg-violet-400/10', borderColor: 'border-violet-400/30', status: 'planned' as const, coin: 100, minSpend: 250, description: 'Prescription glasses, sunglasses, contact lenses' },
  { id: 17, name: 'TBD', category: 'Tailoring', icon: Scissors, color: 'text-teal-300', bgColor: 'bg-teal-400/10', borderColor: 'border-teal-400/30', status: 'planned' as const, coin: 100, minSpend: 200, description: 'Custom tailoring, alterations, bespoke clothing' },
  { id: 18, name: 'TBD', category: 'Organic & Health Food', icon: ShoppingCart, color: 'text-green-300', bgColor: 'bg-green-400/10', borderColor: 'border-green-400/30', status: 'planned' as const, coin: 100, minSpend: 200, description: 'Organic groceries, health supplements, superfoods' },
  { id: 19, name: 'TBD', category: 'Restaurant & Dining', icon: Utensils, color: 'text-orange-300', bgColor: 'bg-orange-400/10', borderColor: 'border-orange-400/30', status: 'planned' as const, coin: 100, minSpend: 250, description: 'Restaurant dining, special occasions, brunches' },
];

const v1Engagement = [
  { name: '7-Day Streak', description: 'Visit any partner 7 days in a row — bonus 50 coins', icon: Zap, color: 'text-yellow-400', bgColor: 'bg-yellow-500/10' },
  { name: 'Category Explorer', description: 'Visit 5+ different brand categories in a month — 100 bonus coins', icon: Map, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10' },
  { name: 'Loyalty Champion', description: 'Visit same partner 4x/month — 75 bonus coins + partner VIP status', icon: Trophy, color: 'text-purple-400', bgColor: 'bg-purple-500/10' },
  { name: 'Social Sharer', description: 'Share a brand experience on social — 25 coins per share (max 5/week)', icon: Users, color: 'text-blue-400', bgColor: 'bg-blue-500/10' },
  { name: 'Monthly Leaderboard', description: 'Top 100 most active members win 500-5,000 bonus coins', icon: Award, color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10' },
  { name: 'Review & Rate', description: 'Leave a review after each visit — 10 coins per verified review', icon: Star, color: 'text-amber-400', bgColor: 'bg-amber-500/10' },
];

const v1Revenue = [
  { source: 'Membership Subscriptions', description: '99 AED/mo × subscriber base = recurring predictable revenue', share: '40%', icon: Crown, color: 'text-[#c9a227]' },
  { source: 'Partner Commission', description: 'Fixed commission (15-25%) on every coin redemption transaction', share: '30%', icon: Store, color: 'text-blue-400' },
  { source: 'Coin Breakage', description: 'Unused coins that expire monthly (estimated 15-25% breakage rate)', share: '20%', icon: Clock, color: 'text-amber-400' },
  { source: 'Data & Insights', description: 'Anonymized spending patterns sold to partners for marketing optimization', share: '10%', icon: BarChart3, color: 'text-purple-400' },
];

// ═══════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════
export default function NuqtaPlusPage() {
  const [version, setVersion] = useState<'v1' | 'v2'>('v2');
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedCategory, setExpandedCategory] = useState<string | null>('delivery');
  const [selectedTier, setSelectedTier] = useState<'plus' | 'gold' | 'prive'>('gold');

  const v1Tabs = [
    { id: 'overview', label: 'Overview', icon: Crown },
    { id: 'partners', label: '19 Partners', icon: Store },
    { id: 'how-it-works', label: 'How It Works', icon: ArrowRight },
    { id: 'engagement', label: 'Engagement', icon: Zap },
    { id: 'revenue', label: 'Revenue', icon: TrendingUp },
    { id: 'growth', label: 'Growth', icon: Rocket },
  ];

  const v2Tabs = [
    { id: 'overview', label: 'Overview', icon: Crown },
    { id: 'ecosystem', label: 'Ecosystem Bundle', icon: Layers },
    { id: 'partners', label: 'Partner Brands', icon: Store },
    { id: 'tiers', label: 'Tiers & Pricing', icon: DollarSign },
    { id: 'value', label: 'Value Calculator', icon: BarChart3 },
    { id: 'revenue', label: 'Revenue Model', icon: TrendingUp },
    { id: 'growth', label: 'Growth', icon: Rocket },
  ];

  const tabs = version === 'v1' ? v1Tabs : v2Tabs;

  // Group ecosystem benefits by category
  const groupedBenefits = ecosystemBenefits.reduce((acc, b) => {
    if (!acc[b.category]) acc[b.category] = [];
    acc[b.category].push(b);
    return acc;
  }, {} as Record<string, EcoBenefit[]>);

  // Calculate total values per tier
  const calcTierValue = (tier: 'plus' | 'gold' | 'prive') => {
    const ecoValue = ecosystemBenefits.reduce((sum, b) => {
      const benefit = b.benefits.find(x => x.tier === tier);
      const numVal = benefit ? parseFloat(benefit.value.replace(/[^0-9.]/g, '')) || 0 : 0;
      return sum + numVal;
    }, 0);
    const partnerValue = partnerBrands.reduce((sum, p) => sum + p.coin[tier], 0);
    return { ecoValue, partnerValue, total: ecoValue + partnerValue };
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">

      {/* ═══════════════════ VERSION TOGGLE ═══════════════════ */}
      <div className="bg-[#0a1628] border-b border-slate-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => { setVersion('v1'); setActiveTab('overview'); }}
              className={`px-4 sm:px-6 py-2.5 rounded-t-xl text-sm font-bold transition-all border-t-2 border-x ${
                version === 'v1'
                  ? 'bg-slate-800/50 text-[#c9a227] border-[#c9a227]/50 border-b-0'
                  : 'bg-transparent text-slate-500 border-transparent hover:text-slate-300'
              }`}
            >
              V1 — Partner Brands
            </button>
            <button
              onClick={() => { setVersion('v2'); setActiveTab('overview'); }}
              className={`px-4 sm:px-6 py-2.5 rounded-t-xl text-sm font-bold transition-all border-t-2 border-x ${
                version === 'v2'
                  ? 'bg-slate-800/50 text-emerald-400 border-emerald-500/50 border-b-0'
                  : 'bg-transparent text-slate-500 border-transparent hover:text-slate-300'
              }`}
            >
              V2 — Ecosystem Bundle
            </button>
          </div>
        </div>
      </div>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

          {/* ── V1 HERO ── */}
          {version === 'v1' && (
            <>
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center shadow-lg shadow-[#c9a227]/20">
                      <Crown className="w-7 h-7 sm:w-8 sm:h-8 text-[#0a1628]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h1 className="text-2xl sm:text-4xl font-bold text-white">Nuqta+ Membership</h1>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#c9a227]/20 text-[#c9a227] border border-[#c9a227]/30 font-bold">V1 — PARTNER BRANDS</span>
                      </div>
                      <p className="text-[#c9a227] text-sm sm:text-base">Exclusive Partner Brand Discounts. Every Month.</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                    Premium lifestyle membership with <span className="text-[#c9a227] font-bold">19 exclusive partner brands</span>.
                    Get 100 AED monthly coins per brand — creating 33-50% instant discounts on lifestyle spending.
                    30-day free trial, then just 99 AED/month.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-[#c9a227]/30 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#c9a227]">19</div>
                    <div className="text-xs text-slate-400">Partner Brands</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-emerald-500/30 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-400">1,900</div>
                    <div className="text-xs text-slate-400">AED Total Value</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-purple-500/30 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-400">99</div>
                    <div className="text-xs text-slate-400">AED/month</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-amber-500/30 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-amber-400">~19x</div>
                    <div className="text-xs text-slate-400">ROI</div>
                  </div>
                </div>
              </div>

              {/* V1 Value Triangle */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/30 text-center">
                  <Users className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <h3 className="text-white font-bold mb-1">For Users</h3>
                  <p className="text-xs text-slate-400">100 AED coins per brand = 33-50% discount on lifestyle purchases. Visit brands you love, save real money.</p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-5 border border-blue-500/30 text-center">
                  <Store className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <h3 className="text-white font-bold mb-1">For Partners</h3>
                  <p className="text-xs text-slate-400">Guaranteed monthly customers with 200-300 AED minimum spend. Predictable foot traffic, higher AOV.</p>
                </div>
                <div className="bg-[#c9a227]/10 rounded-xl p-5 border border-[#c9a227]/30 text-center">
                  <Crown className="w-6 h-6 text-[#c9a227] mx-auto mb-2" />
                  <h3 className="text-white font-bold mb-1">For Nuqta</h3>
                  <p className="text-xs text-slate-400">Predictable subscription revenue + fixed commissions on redemptions + 15-25% coin breakage income.</p>
                </div>
              </div>
            </>
          )}

          {/* ── V2 HERO ── */}
          {version === 'v2' && (
            <>
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center shadow-lg shadow-[#c9a227]/20">
                      <Crown className="w-7 h-7 sm:w-8 sm:h-8 text-[#0a1628]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h1 className="text-2xl sm:text-4xl font-bold text-white">Nuqta+ Membership</h1>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">V2 — ECOSYSTEM BUNDLE</span>
                      </div>
                      <p className="text-[#c9a227] text-sm sm:text-base">One Subscription. Every Service. Every Month.</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                    The ultimate lifestyle membership that bundles <span className="text-[#c9a227] font-bold">20 RTMN ecosystem apps</span> +{' '}
                    <span className="text-emerald-400 font-bold">13 partner brands</span> into one monthly subscription.
                    Delivery, rides, beauty, cleaning, healthcare, BNPL, remittance, gaming, events — all included.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-[#c9a227]/30 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#c9a227]">20</div>
                    <div className="text-xs text-slate-400">RTMN Apps</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-emerald-500/30 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-400">13</div>
                    <div className="text-xs text-slate-400">Partner Brands</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-purple-500/30 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-400">99</div>
                    <div className="text-xs text-slate-400">AED/mo from</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-amber-500/30 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-amber-400">20x</div>
                    <div className="text-xs text-slate-400">Value vs Price</div>
                  </div>
                </div>
              </div>

              {/* The Big Idea Banner */}
              <div className="mt-8 bg-gradient-to-r from-[#c9a227]/20 to-emerald-500/10 rounded-xl p-5 sm:p-6 border-2 border-[#c9a227]/50">
                <div className="text-center">
                  <p className="text-sm text-[#c9a227] font-bold uppercase tracking-wider mb-2">The Big Idea</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
                    Bundle Every Monthly Service Into <span className="text-[#c9a227]">One Membership</span>
                  </p>
                  <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto">
                    People pay separately for delivery, rides, cleaning, pharmacy, insurance, remittance, BNPL, and more.
                    Nuqta+ packs <strong className="text-white">all of it</strong> into one subscription — making RTMN the only ecosystem they need.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                  <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                    <Truck className="w-5 h-5 text-orange-400 mx-auto mb-1" />
                    <div className="text-xs text-white">Free Deliveries</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                    <Car className="w-5 h-5 text-green-400 mx-auto mb-1" />
                    <div className="text-xs text-white">Free Rides</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                    <Stethoscope className="w-5 h-5 text-rose-400 mx-auto mb-1" />
                    <div className="text-xs text-white">Free Healthcare</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                    <Gift className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                    <div className="text-xs text-white">Brand Coins</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ═══════════════════ TABS ═══════════════════ */}
      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-2 gap-1 sm:gap-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-[#0a1628]'
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

      {/* ═══════════════════ MAIN CONTENT ═══════════════════ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ╔═══════════════════════════════════════════════════════╗ */}
        {/* ║  V1 — ORIGINAL NUQTA+ (PARTNER BRANDS ONLY)          ║ */}
        {/* ╚═══════════════════════════════════════════════════════╝ */}
        {version === 'v1' && (
          <>
            {/* ── V1 OVERVIEW ── */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* What is Nuqta+ V1 */}
                <div className="bg-slate-800/30 rounded-xl p-5 sm:p-6 border border-slate-700/50">
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Crown className="w-5 h-5 text-[#c9a227]" /> What is Nuqta+ V1?
                  </h2>
                  <p className="text-slate-300 text-sm mb-6">
                    Nuqta+ V1 is a <span className="text-[#c9a227] font-bold">lifestyle membership</span> that gives members monthly Nuqta Coins
                    redeemable at <span className="text-[#c9a227] font-bold">19 exclusive partner brands</span> across the UAE.
                    Each brand gives <span className="text-white font-bold">100 AED in coins</span> monthly — creating real 33-50% discounts
                    on everyday lifestyle spending. No ecosystem apps bundled — purely partner brand discounts.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-[#c9a227]/10 rounded-lg p-4 border border-[#c9a227]/30 text-center">
                      <div className="text-2xl font-bold text-[#c9a227]">99 AED</div>
                      <div className="text-xs text-slate-400">Monthly subscription</div>
                    </div>
                    <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/30 text-center">
                      <div className="text-2xl font-bold text-emerald-400">1,900 AED</div>
                      <div className="text-xs text-slate-400">Monthly coin value</div>
                    </div>
                    <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30 text-center">
                      <div className="text-2xl font-bold text-purple-400">30 days</div>
                      <div className="text-xs text-slate-400">Free trial</div>
                    </div>
                    <div className="bg-amber-500/10 rounded-lg p-4 border border-amber-500/30 text-center">
                      <div className="text-2xl font-bold text-amber-400">~19x</div>
                      <div className="text-xs text-slate-400">Return on 99 AED</div>
                    </div>
                  </div>
                </div>

                {/* Partner Brand Preview */}
                <div className="bg-slate-800/30 rounded-xl p-5 sm:p-6 border border-slate-700/50">
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Store className="w-5 h-5 text-blue-400" /> 19 Exclusive Partner Brands
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {v1Partners.slice(0, 8).map((p) => (
                      <div key={p.id} className={`${p.bgColor} rounded-lg p-3 border ${p.borderColor} flex items-center gap-2`}>
                        <p.icon className={`w-5 h-5 ${p.color} flex-shrink-0`} />
                        <div>
                          <div className="text-white text-xs font-bold">{p.category}</div>
                          <div className={`text-[10px] ${p.status === 'confirmed' ? 'text-green-400' : 'text-slate-500'}`}>
                            {p.name === 'TBD' ? 'Partner TBD' : p.name}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveTab('partners')}
                    className="mt-4 text-[#c9a227] text-sm font-bold hover:underline flex items-center gap-1"
                  >
                    View all 19 partners <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* The Forced Spending Model */}
                <div className="bg-gradient-to-r from-green-500/15 to-emerald-500/10 rounded-xl p-5 sm:p-6 border border-green-500/30">
                  <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-400" /> The Forced Spending Multiplier
                  </h2>
                  <p className="text-slate-300 text-sm mb-4">
                    Coins can only be redeemed on orders of 200-300+ AED. This means every coin creates additional cash spending:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-[#c9a227]/30">
                      <div className="text-2xl font-bold text-[#c9a227]">100 AED</div>
                      <div className="text-xs text-slate-400">Coin discount per brand</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-white/10">
                      <div className="text-2xl font-bold text-white">+150 AED</div>
                      <div className="text-xs text-slate-400">Minimum cash payment</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-green-500/30">
                      <div className="text-2xl font-bold text-green-400">=250+ AED</div>
                      <div className="text-xs text-slate-400">Total per visit</div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm text-center mt-4">
                    19 brands × 250+ AED = <span className="text-green-400 font-bold">4,750+ AED</span> total monthly GMV per member
                  </p>
                </div>

                {/* V2 Upgrade Banner */}
                <div className="bg-gradient-to-r from-emerald-500/15 to-blue-500/10 rounded-xl p-5 sm:p-6 border-2 border-emerald-500/30">
                  <div className="flex items-start gap-4">
                    <ArrowUpRight className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">V2 Now Available — Ecosystem Bundle</h3>
                      <p className="text-slate-300 text-sm mb-3">
                        V2 expands Nuqta+ from partner brands only into a full ecosystem subscription — bundling 20 RTMN apps
                        (delivery, rides, cleaning, healthcare, BNPL, remittance) + partner brands into 3 tiers (99/199/399 AED).
                      </p>
                      <button
                        onClick={() => { setVersion('v2'); setActiveTab('overview'); }}
                        className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-400 transition-colors"
                      >
                        Switch to V2 <ChevronRight className="w-4 h-4 inline" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── V1 PARTNERS TAB ── */}
            {activeTab === 'partners' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Store className="w-5 h-5 text-[#c9a227]" /> 19 Partner Brands
                </h2>

                {/* Phase 1 — Confirmed */}
                <div className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/30">
                  <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Phase 1 — 7 Confirmed Partners
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {v1Partners.filter(p => p.status === 'confirmed').map((p) => (
                      <div key={p.id} className={`bg-slate-900/50 rounded-xl p-4 border ${p.borderColor}`}>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className={`w-10 h-10 rounded-lg ${p.bgColor} flex items-center justify-center`}>
                              <p.icon className={`w-5 h-5 ${p.color}`} />
                            </div>
                            <div>
                              <div className="text-white font-bold text-sm">{p.name}</div>
                              <div className="text-[10px] text-slate-500">{p.category}</div>
                            </div>
                          </div>
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        </div>
                        <p className="text-xs text-slate-400 mb-3">{p.description}</p>
                        <div className="flex gap-2">
                          <div className="flex-1 bg-[#c9a227]/10 rounded-lg p-2 text-center border border-[#c9a227]/30">
                            <div className="text-sm font-bold text-[#c9a227]">{p.coin} AED</div>
                            <div className="text-[10px] text-slate-500">Monthly coin</div>
                          </div>
                          <div className="flex-1 bg-slate-800/50 rounded-lg p-2 text-center border border-slate-700/50">
                            <div className="text-sm font-bold text-white">{p.minSpend}+ AED</div>
                            <div className="text-[10px] text-slate-500">Min spend</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phase 2 — Planned */}
                <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                  <h3 className="text-lg font-bold text-slate-300 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-400" /> Phase 2 — 12 Additional Categories (Partners TBD)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {v1Partners.filter(p => p.status === 'planned').map((p) => (
                      <div key={p.id} className={`bg-slate-900/50 rounded-xl p-4 border ${p.borderColor} opacity-75`}>
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`w-10 h-10 rounded-lg ${p.bgColor} flex items-center justify-center`}>
                            <p.icon className={`w-5 h-5 ${p.color}`} />
                          </div>
                          <div>
                            <div className="text-white font-bold text-sm">{p.category}</div>
                            <div className="text-[10px] text-amber-400">Partner acquisition in progress</div>
                          </div>
                        </div>
                        <p className="text-xs text-slate-400 mb-3">{p.description}</p>
                        <div className="flex gap-2">
                          <div className="flex-1 bg-[#c9a227]/10 rounded-lg p-2 text-center border border-[#c9a227]/30">
                            <div className="text-sm font-bold text-[#c9a227]">{p.coin} AED</div>
                            <div className="text-[10px] text-slate-500">Monthly coin</div>
                          </div>
                          <div className="flex-1 bg-slate-800/50 rounded-lg p-2 text-center border border-slate-700/50">
                            <div className="text-sm font-bold text-white">{p.minSpend}+ AED</div>
                            <div className="text-[10px] text-slate-500">Min spend</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total Value */}
                <div className="bg-gradient-to-r from-[#c9a227]/15 to-amber-500/10 rounded-xl p-5 border-2 border-[#c9a227]/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">Total Monthly Coin Value</h3>
                      <p className="text-xs text-slate-400">19 brands × 100 AED each</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl sm:text-3xl font-bold text-[#c9a227]">1,900 AED</div>
                      <div className="text-xs text-slate-400">per month</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── V1 HOW IT WORKS TAB ── */}
            {activeTab === 'how-it-works' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-[#c9a227]" /> How Nuqta+ Works
                </h2>

                {/* Steps */}
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Subscribe to Nuqta+', desc: 'Start with a 30-day free trial. After trial, just 99 AED/month. Cancel anytime.', icon: Crown, color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10', borderColor: 'border-[#c9a227]/30' },
                    { step: '2', title: 'Get Monthly Coins', desc: '100 AED in Nuqta Coins auto-credited for each of 19 partner brands. Total: 1,900 AED in coins.', icon: Gift, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30' },
                    { step: '3', title: 'Visit Partner Brands', desc: 'Shop at any of the 19 partner locations. Minimum order 200-300 AED depending on partner.', icon: Store, color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
                    { step: '4', title: 'Apply Coins at Checkout', desc: 'Coins appear in your Nuqta wallet. Apply as instant discount — 33-50% off your total purchase.', icon: Wallet, color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30' },
                    { step: '5', title: 'Coins Reset Monthly', desc: 'Unused coins expire after 30 days. No stacking, no cash-out — use it or lose it. Creates urgency.', icon: Clock, color: 'text-red-400', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30' },
                    { step: '6', title: 'Earn Bonus Coins', desc: 'Complete streaks, category challenges, and social shares to earn additional bonus coins on top.', icon: Zap, color: 'text-yellow-400', bgColor: 'bg-yellow-500/10', borderColor: 'border-yellow-500/30' },
                  ].map((s, i) => (
                    <div key={i} className={`${s.bgColor} rounded-xl p-5 border-2 ${s.borderColor} flex items-start gap-4`}>
                      <div className={`w-12 h-12 rounded-xl ${s.bgColor} flex items-center justify-center border ${s.borderColor} flex-shrink-0`}>
                        <span className={`text-xl font-black ${s.color}`}>{s.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold ${s.color} mb-1`}>{s.title}</h3>
                        <p className="text-slate-300 text-sm">{s.desc}</p>
                      </div>
                      <s.icon className={`w-6 h-6 ${s.color} flex-shrink-0 hidden sm:block`} />
                    </div>
                  ))}
                </div>

                {/* Coin Lifecycle Visual */}
                <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                  <h3 className="text-lg font-bold text-white mb-4 text-center">Coin Lifecycle</h3>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                    {[
                      { text: 'Subscribe', color: 'bg-[#c9a227]/20 text-[#c9a227] border-[#c9a227]/30' },
                      { text: 'Coins credited', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
                      { text: 'Visit brand', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
                      { text: 'Apply discount', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
                      { text: 'Partner earns', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
                      { text: 'Nuqta earns', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
                    ].map((s, i) => (
                      <React.Fragment key={i}>
                        <span className={`${s.color} px-4 py-2 rounded-lg border font-bold`}>{s.text}</span>
                        {i < 5 && <ArrowRight className="w-4 h-4 text-slate-500" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Key Rules */}
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-5 border border-red-500/30">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-red-400" /> Key Rules
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Coins expire after 30 days — no stacking',
                      'One coin per brand per month — no doubling',
                      'Minimum order required (200-300 AED)',
                      'Coins cannot be converted to cash',
                      'One partner per category — exclusive',
                      'Cancel anytime after free trial',
                    ].map((rule, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <Info className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── V1 ENGAGEMENT TAB ── */}
            {activeTab === 'engagement' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" /> Engagement Mechanics
                </h2>
                <p className="text-slate-400 text-sm">Beyond basic coins — behavioral psychology drives repeat visits and multi-brand exploration</p>

                {/* Engagement Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {v1Engagement.map((e, i) => (
                    <div key={i} className={`${e.bgColor} rounded-xl p-5 border border-slate-700/50`}>
                      <e.icon className={`w-6 h-6 ${e.color} mb-3`} />
                      <h3 className="text-white font-bold mb-2">{e.name}</h3>
                      <p className="text-slate-400 text-sm">{e.description}</p>
                    </div>
                  ))}
                </div>

                {/* Monthly Engagement Cycle */}
                <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                  <h3 className="text-lg font-bold text-white mb-4">Monthly Engagement Cycle</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    {[
                      { week: 'Week 1', action: 'Coins credited — excitement, first visits', color: 'text-emerald-400', borderColor: 'border-emerald-500/30' },
                      { week: 'Week 2', action: 'Streak building — daily visit habits forming', color: 'text-blue-400', borderColor: 'border-blue-500/30' },
                      { week: 'Week 3', action: 'Category explorer — trying new brands', color: 'text-purple-400', borderColor: 'border-purple-500/30' },
                      { week: 'Week 4', action: 'Urgency — coins expiring, final redemptions', color: 'text-red-400', borderColor: 'border-red-500/30' },
                    ].map((w, i) => (
                      <div key={i} className={`bg-slate-900/50 rounded-lg p-4 border ${w.borderColor}`}>
                        <div className={`font-bold ${w.color} mb-2`}>{w.week}</div>
                        <p className="text-xs text-slate-400">{w.action}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expected Metrics */}
                <div className="bg-gradient-to-r from-[#c9a227]/15 to-amber-500/10 rounded-xl p-5 border border-[#c9a227]/30">
                  <h3 className="text-lg font-bold text-[#c9a227] mb-4">Expected Engagement Metrics</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { metric: 'Monthly Active Rate', value: '85%+', note: 'Coins drive monthly usage' },
                      { metric: 'Avg Brands Visited', value: '6-8', note: 'Per member per month' },
                      { metric: 'Coin Redemption', value: '75-85%', note: 'High due to expiry urgency' },
                      { metric: 'Churn Rate', value: '<8%', note: 'Switching cost = all discounts' },
                    ].map((m, i) => (
                      <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                        <div className="text-xl font-bold text-[#c9a227]">{m.value}</div>
                        <div className="text-white font-medium text-sm mt-1">{m.metric}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{m.note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── V1 REVENUE TAB ── */}
            {activeTab === 'revenue' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" /> Revenue Model
                </h2>

                {/* Revenue Streams */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {v1Revenue.map((r, i) => (
                    <div key={i} className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                      <div className="flex items-center gap-3 mb-3">
                        <r.icon className={`w-6 h-6 ${r.color}`} />
                        <div>
                          <div className="text-white font-bold text-sm">{r.source}</div>
                          <div className={`text-xs font-bold ${r.color}`}>{r.share} of revenue</div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400">{r.description}</p>
                    </div>
                  ))}
                </div>

                {/* Revenue Split */}
                <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                  <h3 className="text-lg font-bold text-white mb-4">Revenue Split</h3>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex-[4] bg-[#c9a227]/20 rounded-lg p-3 text-center border border-[#c9a227]/30">
                      <div className="text-[#c9a227] font-bold text-lg">40%</div>
                      <div className="text-xs text-slate-400">Subscriptions</div>
                    </div>
                    <div className="flex-[3] bg-blue-500/20 rounded-lg p-3 text-center border border-blue-500/30">
                      <div className="text-blue-400 font-bold text-lg">30%</div>
                      <div className="text-xs text-slate-400">Partner Commission</div>
                    </div>
                    <div className="flex-[2] bg-amber-500/20 rounded-lg p-3 text-center border border-amber-500/30">
                      <div className="text-amber-400 font-bold text-lg">20%</div>
                      <div className="text-xs text-slate-400">Coin Breakage</div>
                    </div>
                    <div className="flex-[1] bg-purple-500/20 rounded-lg p-3 text-center border border-purple-500/30">
                      <div className="text-purple-400 font-bold text-lg">10%</div>
                      <div className="text-xs text-slate-400">Data</div>
                    </div>
                  </div>
                </div>

                {/* Unit Economics */}
                <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-emerald-400" /> Unit Economics per Member
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { metric: 'ARPU', value: '99 AED/mo', note: 'Single tier', color: 'text-[#c9a227]' },
                      { metric: 'LTV (18 months)', value: '~1,782 AED', note: 'Avg 18-month retention', color: 'text-emerald-400' },
                      { metric: 'CAC', value: '~30 AED', note: 'Social + referral', color: 'text-blue-400' },
                      { metric: 'LTV:CAC', value: '59x', note: 'Strong ratio', color: 'text-purple-400' },
                    ].map((item, i) => (
                      <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                        <div className={`text-xl font-bold ${item.color}`}>{item.value}</div>
                        <div className="text-white font-medium text-sm mt-1">{item.metric}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{item.note}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Per-Visit Revenue */}
                <div className="bg-gradient-to-r from-green-500/15 to-emerald-500/10 rounded-xl p-5 border border-green-500/30">
                  <h3 className="text-lg font-bold text-white mb-3">Revenue per Member Visit</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-700/50">
                          <th className="text-left py-2 px-3 text-slate-400">Flow</th>
                          <th className="text-right py-2 px-3 text-slate-400">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { flow: 'Member pays subscription', amount: '99 AED/mo' },
                          { flow: 'Member visits partner (min 250 AED)', amount: '250 AED' },
                          { flow: 'Coin discount applied', amount: '-100 AED' },
                          { flow: 'Member pays cash', amount: '150 AED' },
                          { flow: 'Nuqta commission (20%)', amount: '30 AED' },
                          { flow: 'Per visit × 6-8 brands/mo', amount: '180-240 AED' },
                        ].map((row, i) => (
                          <tr key={i} className="border-b border-slate-800/30">
                            <td className="py-2 px-3 text-slate-300">{row.flow}</td>
                            <td className="py-2 px-3 text-right text-white font-medium">{row.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* ── V1 GROWTH TAB ── */}
            {activeTab === 'growth' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-purple-400" /> Growth Plan
                </h2>

                {/* Launch Phases */}
                <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-400" /> Launch Phases
                  </h3>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700/50" />
                    <div className="space-y-6">
                      {[
                        { date: 'Q2 2026', event: 'Phase 1 — 7 confirmed partners, 1,000 beta members', status: 'current', color: 'bg-blue-400' },
                        { date: 'Q3 2026', event: 'Expand to 12 partners, 5,000 members', status: 'upcoming', color: 'bg-purple-400' },
                        { date: 'Q4 2026', event: 'Full 19 partners live, 10,000 members target', status: 'upcoming', color: 'bg-amber-400' },
                        { date: 'H1 2027', event: 'Scale to 25,000 members + add 5 new categories', status: 'upcoming', color: 'bg-emerald-400' },
                        { date: 'H2 2027', event: '50,000 members — transition to V2 ecosystem bundle', status: 'upcoming', color: 'bg-[#c9a227]' },
                      ].map((m, i) => (
                        <div key={i} className="flex items-start gap-4 ml-1">
                          <div className={`w-6 h-6 rounded-full ${m.color} flex items-center justify-center flex-shrink-0 z-10 ${
                            m.status === 'current' ? 'ring-4 ring-blue-400/20' : 'opacity-50'
                          }`}>
                            {m.status === 'current' ? <Clock className="w-3 h-3 text-white" /> : <div className="w-2 h-2 rounded-full bg-white" />}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white">{m.event}</div>
                            <div className="text-xs text-slate-500">{m.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Growth Projections */}
                <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50 overflow-x-auto">
                  <h3 className="text-lg font-bold text-white mb-4">Revenue Projections</h3>
                  <table className="w-full text-sm min-w-[500px]">
                    <thead>
                      <tr className="border-b border-slate-700/50">
                        <th className="text-left py-3 px-3 text-[#c9a227] font-semibold">Period</th>
                        <th className="text-center py-3 px-3 text-[#c9a227] font-semibold">Members</th>
                        <th className="text-center py-3 px-3 text-[#c9a227] font-semibold">Partners</th>
                        <th className="text-center py-3 px-3 text-[#c9a227] font-semibold">MRR</th>
                        <th className="text-center py-3 px-3 text-[#c9a227] font-semibold">GMV/mo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { period: 'Q2 2026', members: '1K', partners: '7', mrr: '99K AED', gmv: '250K AED' },
                        { period: 'Q4 2026', members: '10K', partners: '19', mrr: '990K AED', gmv: '2.5M AED' },
                        { period: 'H1 2027', members: '25K', partners: '24', mrr: '2.5M AED', gmv: '6M AED' },
                        { period: 'H2 2027', members: '50K', partners: '30+', mrr: '5M AED', gmv: '12M AED' },
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/20">
                          <td className="py-3 px-3 text-white font-medium">{row.period}</td>
                          <td className="py-3 px-3 text-center text-white">{row.members}</td>
                          <td className="py-3 px-3 text-center text-slate-300">{row.partners}</td>
                          <td className="py-3 px-3 text-center text-emerald-400 font-bold">{row.mrr}</td>
                          <td className="py-3 px-3 text-center text-[#c9a227] font-bold">{row.gmv}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* V1 → V2 Evolution */}
                <div className="bg-gradient-to-r from-[#c9a227]/15 to-emerald-500/10 rounded-xl p-5 border border-[#c9a227]/30">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <ArrowUpRight className="w-5 h-5 text-[#c9a227]" /> V1 → V2 Evolution Path
                  </h3>
                  <p className="text-slate-300 text-sm mb-4">
                    V1 validates the core coin mechanic with partner brands. Once member base reaches 25K+,
                    V2 wraps the entire RTMN ecosystem (delivery, rides, cleaning, healthcare, BNPL) into tiered subscriptions —
                    creating unbreakable lock-in.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-[#c9a227]/30">
                      <div className="text-[#c9a227] font-bold text-sm mb-1">V1 Validates</div>
                      <div className="text-xs text-slate-400">Partner coin mechanic, forced spending, engagement loops, subscription retention, commission model</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-emerald-500/30">
                      <div className="text-emerald-400 font-bold text-sm mb-1">V2 Expands</div>
                      <div className="text-xs text-slate-400">20 RTMN apps bundled, 3 pricing tiers, ecosystem lock-in, 20x+ value, family plans</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* ╔═══════════════════════════════════════════════════════╗ */}
        {/* ║  V2 — ECOSYSTEM BUNDLE (20 Apps + 13 Partners)       ║ */}
        {/* ╚═══════════════════════════════════════════════════════╝ */}
        {version === 'v2' && (<>

        {/* ═══════════════════ OVERVIEW TAB ═══════════════════ */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* What's Included Summary */}
            <div className="bg-slate-800/30 rounded-xl p-5 sm:p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#c9a227]" /> Everything Included in Nuqta+
              </h2>
              <p className="text-slate-400 text-sm mb-6">
                Two layers of benefits: <span className="text-emerald-400 font-medium">RTMN Ecosystem Services</span> you use every month +{' '}
                <span className="text-purple-400 font-medium">Partner Brand Coins</span> for lifestyle spending
              </p>

              {/* Layer 1: Ecosystem */}
              <div className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/30 mb-4">
                <h3 className="text-lg font-bold text-emerald-400 mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5" /> Layer 1: RTMN Ecosystem Services (20 Apps)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2">
                  {ecosystemBenefits.map((app) => (
                    <Link key={app.app} href={app.href} className="bg-slate-900/50 rounded-lg p-2.5 flex items-center gap-2 hover:bg-slate-800/50 transition-colors border border-slate-700/30">
                      <app.icon className={`w-4 h-4 ${app.color} flex-shrink-0`} />
                      <div>
                        <div className="text-white text-xs font-medium">{app.app}</div>
                        <div className="text-[10px] text-slate-500">{app.arabic}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Layer 2: Partner Brands */}
              <div className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/30">
                <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
                  <Store className="w-5 h-5" /> Layer 2: Partner Brand Coins (13 Brands)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2">
                  {partnerBrands.map((brand) => (
                    <div key={brand.id} className="bg-slate-900/50 rounded-lg p-2.5 flex items-center gap-2 border border-slate-700/30">
                      <brand.icon className={`w-4 h-4 ${brand.color} flex-shrink-0`} />
                      <div>
                        <div className="text-white text-xs font-medium">{brand.name}</div>
                        <div className={`text-[10px] ${brand.status === 'confirmed' ? 'text-green-400' : 'text-slate-500'}`}>
                          {brand.partner || 'Partner TBD'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why It Works */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/10 rounded-xl p-5 sm:p-6 border-2 border-[#c9a227]/40">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#c9a227]" /> Why This Creates Unbreakable Lock-In
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                  <Lock className="w-6 h-6 text-[#c9a227] mb-2" />
                  <div className="text-white font-bold text-sm mb-1">Switching Cost = Everything</div>
                  <p className="text-xs text-slate-400">Leaving Nuqta+ means losing delivery, rides, cleaning, healthcare, BNPL, remittance, gaming, AND partner discounts — all at once</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                  <Heart className="w-6 h-6 text-rose-400 mb-2" />
                  <div className="text-white font-bold text-sm mb-1">Daily Touchpoints</div>
                  <p className="text-xs text-slate-400">Members interact with 3-5 RTMN apps daily. Morning ride, lunch delivery, evening grocery — Nuqta+ is always saving money</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                  <TrendingUp className="w-6 h-6 text-emerald-400 mb-2" />
                  <div className="text-white font-bold text-sm mb-1">Value Grows Over Time</div>
                  <p className="text-xs text-slate-400">More apps, more partners, higher tier benefits. Each month, the membership gets more valuable — churn drops</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                  <Users className="w-6 h-6 text-blue-400 mb-2" />
                  <div className="text-white font-bold text-sm mb-1">Family Plans Coming</div>
                  <p className="text-xs text-slate-400">Share benefits with 4 family members. One subscription, entire household locked into RTMN ecosystem</p>
                </div>
              </div>
            </div>

            {/* Quick Tier Comparison */}
            <div className="bg-slate-800/30 rounded-xl p-5 sm:p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Crown className="w-5 h-5 text-[#c9a227]" /> Three Tiers, One Ecosystem
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tiers.map((tier) => (
                  <div key={tier.id} className={`${tier.bgColor} rounded-xl p-5 border-2 ${tier.borderColor} ${tier.id === 'gold' ? 'ring-2 ring-amber-400/30' : ''}`}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className={`text-lg font-bold ${tier.color}`}>{tier.name}</h3>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${tier.bgColor} ${tier.color} border ${tier.borderColor}`}>
                        {tier.badge}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-3xl font-bold text-white">{tier.price}</span>
                      <span className="text-slate-400 text-sm">AED/mo</span>
                    </div>
                    <p className="text-slate-400 text-xs mb-4">{tier.tagline}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Total value</span>
                        <span className={`font-bold ${tier.color}`}>{tier.totalValue}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Partner coins</span>
                        <span className="text-white font-medium">{tier.partnerCoins}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Coin multiplier</span>
                        <span className="text-emerald-400 font-medium">{tier.coinMultiplier}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => { setSelectedTier(tier.id); setActiveTab('tiers'); }}
                      className={`w-full py-2.5 rounded-lg font-bold text-sm transition-colors ${
                        tier.id === 'gold'
                          ? 'bg-amber-400 text-[#0a1628] hover:bg-amber-300'
                          : 'bg-slate-700 text-white hover:bg-slate-600'
                      }`}
                    >
                      View Details <ChevronRight className="w-4 h-4 inline" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Forced Monthly Engagement */}
            <div className="bg-gradient-to-r from-green-500/15 to-emerald-500/10 rounded-xl p-5 sm:p-6 border border-green-500/30">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-green-400" /> Guaranteed Monthly Active Users
              </h2>
              <p className="text-slate-300 text-sm mb-4">
                Unlike Netflix (watch or don&apos;t), Nuqta+ benefits are things people <strong className="text-white">must do every month</strong>:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { need: 'Order food', freq: '8-12x/mo', icon: Utensils },
                  { need: 'Get rides', freq: '10-15x/mo', icon: Car },
                  { need: 'Buy groceries', freq: '4-6x/mo', icon: ShoppingCart },
                  { need: 'Clean home', freq: '2-4x/mo', icon: Brush },
                  { need: 'Send money', freq: '1-2x/mo', icon: Globe },
                  { need: 'Pay rent', freq: '1x/mo', icon: Home },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 text-center border border-slate-700/50">
                    <item.icon className="w-5 h-5 text-green-400 mx-auto mb-2" />
                    <div className="text-white text-xs font-medium">{item.need}</div>
                    <div className="text-[10px] text-green-400 mt-1">{item.freq}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-slate-900/50 rounded-lg p-4 border border-green-500/20">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <div>
                    <div className="text-white font-bold text-sm">Result: 95%+ monthly engagement rate</div>
                    <div className="text-xs text-slate-400">These aren&apos;t optional — food, rent, rides, and cleaning happen every month. Nuqta+ saves money on all of them.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════ ECOSYSTEM BUNDLE TAB ═══════════════════ */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Database className="w-5 h-5 text-emerald-400" /> RTMN Ecosystem Bundle
                </h2>
                <p className="text-slate-400 text-sm mt-1">20 apps bundled — tap each category to see tier benefits</p>
              </div>
              {/* Tier Selector */}
              <div className="flex gap-1 bg-slate-800/50 rounded-lg p-1 border border-slate-700/50">
                {(['plus', 'gold', 'prive'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTier(t)}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                      selectedTier === t
                        ? t === 'plus' ? 'bg-[#c9a227] text-[#0a1628]'
                          : t === 'gold' ? 'bg-amber-400 text-[#0a1628]'
                          : 'bg-purple-500 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {t === 'plus' ? 'Nuqta+' : t === 'gold' ? 'Gold' : 'Privé'}
                  </button>
                ))}
              </div>
            </div>

            {/* Categories */}
            {Object.entries(groupedBenefits).map(([catKey, apps]) => {
              const cat = categoryLabels[catKey];
              const isExpanded = expandedCategory === catKey;
              return (
                <div key={catKey} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden">
                  <button
                    onClick={() => setExpandedCategory(isExpanded ? null : catKey)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-slate-800/20 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${catKey === 'delivery' ? 'bg-orange-500/10' : catKey === 'transport' ? 'bg-green-500/10' : catKey === 'beauty-home' ? 'bg-pink-500/10' : catKey === 'finance' ? 'bg-violet-500/10' : catKey === 'health' ? 'bg-rose-500/10' : catKey === 'lifestyle' ? 'bg-yellow-500/10' : 'bg-blue-500/10'} flex items-center justify-center`}>
                        <cat.icon className={`w-5 h-5 ${cat.color}`} />
                      </div>
                      <div>
                        <h3 className={`font-bold ${cat.color}`}>{cat.label}</h3>
                        <p className="text-xs text-slate-500">{apps.length} apps included</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right hidden sm:block">
                        <div className="text-xs text-slate-500">Combined value</div>
                        <div className="text-sm font-bold text-emerald-400">
                          ~{apps.reduce((s, a) => {
                            const b = a.benefits.find(x => x.tier === selectedTier);
                            return s + (b ? parseFloat(b.value.replace(/[^0-9.]/g, '')) || 0 : 0);
                          }, 0).toLocaleString()} AED
                        </div>
                      </div>
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 space-y-3">
                      {apps.map((app) => {
                        const benefit = app.benefits.find(b => b.tier === selectedTier);
                        return (
                          <div key={app.app} className={`${app.bgColor} rounded-lg p-4 border ${app.borderColor}`}>
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start gap-3 flex-1">
                                <Link href={app.href} className="flex-shrink-0">
                                  <div className={`w-10 h-10 rounded-lg ${app.bgColor} flex items-center justify-center border ${app.borderColor} hover:scale-105 transition-transform`}>
                                    <app.icon className={`w-5 h-5 ${app.color}`} />
                                  </div>
                                </Link>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <Link href={app.href} className={`font-bold ${app.color} hover:underline`}>{app.app}</Link>
                                    <span className="text-slate-600 text-xs">{app.arabic}</span>
                                  </div>
                                  <p className="text-xs text-slate-500 mt-0.5">{app.monthlyNeed}</p>
                                  {benefit && (
                                    <div className="mt-2 flex items-center gap-2">
                                      <CheckCircle className={`w-4 h-4 ${app.color} flex-shrink-0`} />
                                      <span className="text-sm text-white font-medium">{benefit.benefit}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              {benefit && (
                                <div className="text-right flex-shrink-0">
                                  <div className="text-lg font-bold text-emerald-400">{benefit.value}</div>
                                  <div className="text-[10px] text-slate-500">monthly value</div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Ecosystem Total */}
            <div className="bg-gradient-to-r from-emerald-500/15 to-green-500/10 rounded-xl p-5 border-2 border-emerald-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Total Ecosystem Value</h3>
                  <p className="text-xs text-slate-400">Across all 20 RTMN apps for {selectedTier === 'plus' ? 'Nuqta+' : selectedTier === 'gold' ? 'Nuqta+ Gold' : 'Nuqta+ Privé'}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-400">
                    ~{calcTierValue(selectedTier).ecoValue.toLocaleString()} AED
                  </div>
                  <div className="text-xs text-slate-400">per month</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════ PARTNER BRANDS TAB ═══════════════════ */}
        {activeTab === 'partners' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Store className="w-5 h-5 text-purple-400" /> Partner Brand Coins
                </h2>
                <p className="text-slate-400 text-sm mt-1">Monthly coins for exclusive partner brands — one partner per category</p>
              </div>
              <div className="flex gap-1 bg-slate-800/50 rounded-lg p-1 border border-slate-700/50">
                {(['plus', 'gold', 'prive'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTier(t)}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                      selectedTier === t
                        ? t === 'plus' ? 'bg-[#c9a227] text-[#0a1628]'
                          : t === 'gold' ? 'bg-amber-400 text-[#0a1628]'
                          : 'bg-purple-500 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {t === 'plus' ? 'Nuqta+' : t === 'gold' ? 'Gold' : 'Privé'}
                  </button>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-gradient-to-r from-purple-500/15 to-violet-500/10 rounded-xl p-5 border border-purple-500/30">
              <h3 className="text-lg font-bold text-white mb-3">How Partner Coins Work</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#c9a227]/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-[#c9a227] font-bold">1</span>
                  </div>
                  <div className="text-white font-bold text-sm mb-1">Get Monthly Coins</div>
                  <p className="text-xs text-slate-400">{selectedTier === 'plus' ? '50' : selectedTier === 'gold' ? '100' : '150'} AED coin per partner brand, auto-credited each billing cycle</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50 text-center">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-400 font-bold">2</span>
                  </div>
                  <div className="text-white font-bold text-sm mb-1">Visit Partner</div>
                  <p className="text-xs text-slate-400">Min order {selectedTier === 'plus' ? '150' : '200'}+ AED. Coin applied as instant discount at checkout</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50 text-center">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-purple-400 font-bold">3</span>
                  </div>
                  <div className="text-white font-bold text-sm mb-1">Coins Expire Monthly</div>
                  <p className="text-xs text-slate-400">30-day validity creates urgency. No stacking, no cash-out — use it or lose it</p>
                </div>
              </div>
            </div>

            {/* Partner Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {partnerBrands.map((brand) => (
                <div key={brand.id} className={`bg-slate-800/30 rounded-xl p-4 border ${brand.status === 'confirmed' ? 'border-green-500/30' : 'border-slate-700/50'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-9 h-9 rounded-lg ${brand.bgColor} flex items-center justify-center`}>
                        <brand.icon className={`w-4 h-4 ${brand.color}`} />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">{brand.name}</div>
                        <div className={`text-[10px] ${brand.status === 'confirmed' ? 'text-green-400' : 'text-slate-500'}`}>
                          {brand.partner || 'Partner TBD'}
                        </div>
                      </div>
                    </div>
                    {brand.status === 'confirmed' && (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    )}
                  </div>
                  <div className="flex items-center justify-between bg-slate-900/50 rounded-lg p-2.5 border border-slate-700/50">
                    <span className="text-xs text-slate-400">Monthly coin</span>
                    <span className="text-[#c9a227] font-bold">{brand.coin[selectedTier]} AED</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Partner Value */}
            <div className="bg-gradient-to-r from-[#c9a227]/15 to-amber-500/10 rounded-xl p-5 border-2 border-[#c9a227]/30">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Total Partner Coin Value</h3>
                  <p className="text-xs text-slate-400">{partnerBrands.length} brands × {partnerBrands[0].coin[selectedTier]} AED each</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-[#c9a227]">
                    {partnerBrands.reduce((s, p) => s + p.coin[selectedTier], 0).toLocaleString()} AED
                  </div>
                  <div className="text-xs text-slate-400">per month</div>
                </div>
              </div>
            </div>

            {/* Forced Spending */}
            <div className="bg-gradient-to-r from-green-500/15 to-emerald-500/10 rounded-xl p-5 border border-green-500/30">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-green-400" /> The Forced Spending Multiplier
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-[#c9a227]/30">
                  <div className="text-2xl font-bold text-[#c9a227]">{partnerBrands[0].coin[selectedTier]} AED</div>
                  <div className="text-xs text-slate-400">Coin discount</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-white/10">
                  <div className="text-2xl font-bold text-white">+{selectedTier === 'plus' ? '100' : '100-200'} AED</div>
                  <div className="text-xs text-slate-400">Cash payment (min)</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-green-500/30">
                  <div className="text-2xl font-bold text-green-400">={selectedTier === 'plus' ? '150' : selectedTier === 'gold' ? '300' : '350'}+ AED</div>
                  <div className="text-xs text-slate-400">Total per visit</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm text-center">
                {partnerBrands.length} brands × {selectedTier === 'plus' ? '150' : selectedTier === 'gold' ? '300' : '350'}+ AED ={' '}
                <span className="text-green-400 font-bold">{(partnerBrands.length * (selectedTier === 'plus' ? 150 : selectedTier === 'gold' ? 300 : 350)).toLocaleString()}+ AED</span> total ecosystem GMV per member per month
              </p>
            </div>
          </div>
        )}

        {/* ═══════════════════ TIERS & PRICING TAB ═══════════════════ */}
        {activeTab === 'tiers' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Crown className="w-5 h-5 text-[#c9a227]" /> Membership Tiers
            </h2>

            {/* Tier Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {tiers.map((tier) => {
                const vals = calcTierValue(tier.id);
                return (
                  <div key={tier.id} className={`${tier.bgColor} rounded-xl p-6 border-2 ${tier.borderColor} ${tier.id === 'gold' ? 'ring-2 ring-amber-400/30 lg:scale-105' : ''}`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${tier.bgColor} ${tier.color} border ${tier.borderColor}`}>
                        {tier.badge}
                      </span>
                    </div>
                    <h3 className={`text-xl font-bold ${tier.color} mb-1`}>{tier.name}</h3>
                    <p className="text-xs text-slate-400 mb-4">{tier.tagline}</p>

                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-slate-400">AED/mo</span>
                    </div>
                    <div className="text-xs text-slate-500 mb-5">
                      or {tier.annual} AED/year (save {tier.annualSave} AED)
                    </div>

                    <div className="bg-slate-900/50 rounded-lg p-3 mb-5 border border-slate-700/50">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-400">Ecosystem value</span>
                        <span className="text-emerald-400 font-bold">~{vals.ecoValue.toLocaleString()} AED</span>
                      </div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-400">Partner coins</span>
                        <span className="text-purple-400 font-bold">{vals.partnerValue.toLocaleString()} AED</span>
                      </div>
                      <div className="flex justify-between text-sm pt-2 border-t border-slate-700/50">
                        <span className="text-white font-bold">Total value</span>
                        <span className={`font-bold ${tier.color}`}>~{vals.total.toLocaleString()} AED</span>
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-xs text-emerald-400 font-bold">{Math.round(vals.total / parseInt(tier.price))}x return on membership fee</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {tier.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className={`w-4 h-4 ${tier.color} flex-shrink-0 mt-0.5`} />
                          <span className="text-xs text-slate-300">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Feature Comparison Table */}
            <div className="bg-slate-800/30 rounded-xl p-5 sm:p-6 border border-slate-700/50 overflow-x-auto">
              <h3 className="text-lg font-bold text-white mb-4">Feature Comparison</h3>
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="text-left py-3 px-3 text-slate-400 font-medium">Feature</th>
                    <th className="text-center py-3 px-3 text-[#c9a227] font-bold">Nuqta+</th>
                    <th className="text-center py-3 px-3 text-amber-400 font-bold">Gold</th>
                    <th className="text-center py-3 px-3 text-purple-400 font-bold">Privé</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Monthly Price', plus: '99 AED', gold: '199 AED', prive: '399 AED' },
                    { feature: 'Free Deliveries (Wasil+Dinezy+Grocify)', plus: '14/mo', gold: '33/mo', prive: 'Unlimited' },
                    { feature: 'Free Rakab Rides', plus: '3/mo', gold: '8/mo', prive: '15/mo + luxury' },
                    { feature: 'Free Home Cleaning', plus: '1/mo', gold: '2/mo', prive: '4/mo (weekly)' },
                    { feature: 'Beauty Credit (Glowzy)', plus: '50 AED', gold: '100 AED', prive: '200 AED' },
                    { feature: 'Qist BNPL (0% markup)', plus: 'Up to 3K', gold: 'Up to 10K', prive: 'Up to 25K' },
                    { feature: 'Free Hawil Transfers', plus: '2/mo', gold: '5/mo', prive: 'Unlimited' },
                    { feature: 'Sakin Rent Discount', plus: '100 AED/mo', gold: '200 AED/mo', prive: '300 AED/mo' },
                    { feature: 'Telemedicine (Tabib)', plus: '1/mo', gold: '3/mo', prive: 'Unlimited' },
                    { feature: 'Insurance Discount', plus: '10%', gold: '15%', prive: '20% + dental' },
                    { feature: 'SpinZy Premium', plus: 'Ad-free', gold: 'VIP modes', prive: '3x coins + VIP' },
                    { feature: 'Fakhir Concierge', plus: '—', gold: 'Lite (2 req)', prive: 'Full 24/7' },
                    { feature: 'Nuqta Coin Multiplier', plus: '1.5x', gold: '2x', prive: '3x' },
                    { feature: 'Partner Brand Coins', plus: '13×50 AED', gold: '13×100 AED', prive: '13×150 AED' },
                    { feature: 'Total Monthly Value', plus: '~2,000 AED', gold: '~5,500 AED', prive: '~12,000 AED' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/20">
                      <td className="py-2.5 px-3 text-white font-medium text-xs">{row.feature}</td>
                      <td className="py-2.5 px-3 text-center text-slate-300 text-xs">{row.plus}</td>
                      <td className="py-2.5 px-3 text-center text-amber-300 text-xs font-medium">{row.gold}</td>
                      <td className="py-2.5 px-3 text-center text-purple-300 text-xs font-medium">{row.prive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Annual Savings */}
            <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Percent className="w-5 h-5 text-green-400" /> Annual Plan Savings
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {tiers.map((tier) => (
                  <div key={tier.id} className={`${tier.bgColor} rounded-lg p-4 border ${tier.borderColor}`}>
                    <div className={`font-bold ${tier.color} mb-2`}>{tier.name}</div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">Monthly</span>
                      <span className="text-white">{tier.price} × 12 = {parseInt(tier.price) * 12} AED</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">Annual</span>
                      <span className="text-white">{tier.annual} AED</span>
                    </div>
                    <div className="flex justify-between text-sm pt-2 border-t border-slate-700/50">
                      <span className="text-green-400 font-bold">You save</span>
                      <span className="text-green-400 font-bold">{tier.annualSave} AED</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════ VALUE CALCULATOR TAB ═══════════════════ */}
        {activeTab === 'value' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#c9a227]" /> Value Breakdown
                </h2>
                <p className="text-slate-400 text-sm mt-1">See exactly what you save each month</p>
              </div>
              <div className="flex gap-1 bg-slate-800/50 rounded-lg p-1 border border-slate-700/50">
                {(['plus', 'gold', 'prive'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTier(t)}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                      selectedTier === t
                        ? t === 'plus' ? 'bg-[#c9a227] text-[#0a1628]'
                          : t === 'gold' ? 'bg-amber-400 text-[#0a1628]'
                          : 'bg-purple-500 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {t === 'plus' ? 'Nuqta+' : t === 'gold' ? 'Gold' : 'Privé'}
                  </button>
                ))}
              </div>
            </div>

            {/* Per-App Value Table */}
            <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm min-w-[500px]">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="text-left py-2.5 px-3 text-slate-400 font-medium">App</th>
                    <th className="text-left py-2.5 px-3 text-slate-400 font-medium">Benefit</th>
                    <th className="text-right py-2.5 px-3 text-slate-400 font-medium">Value/mo</th>
                  </tr>
                </thead>
                <tbody>
                  {ecosystemBenefits.map((app) => {
                    const benefit = app.benefits.find(b => b.tier === selectedTier);
                    return (
                      <tr key={app.app} className="border-b border-slate-800/30 hover:bg-slate-800/20">
                        <td className="py-2.5 px-3">
                          <div className="flex items-center gap-2">
                            <app.icon className={`w-4 h-4 ${app.color}`} />
                            <span className="text-white font-medium text-xs">{app.app}</span>
                          </div>
                        </td>
                        <td className="py-2.5 px-3 text-slate-300 text-xs">{benefit?.benefit || '—'}</td>
                        <td className="py-2.5 px-3 text-right text-emerald-400 font-bold text-xs">{benefit?.value || '—'}</td>
                      </tr>
                    );
                  })}
                  <tr className="border-b border-slate-800/30 hover:bg-slate-800/20">
                    <td className="py-2.5 px-3">
                      <div className="flex items-center gap-2">
                        <Gift className="w-4 h-4 text-purple-400" />
                        <span className="text-white font-medium text-xs">Partner Brand Coins</span>
                      </div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-300 text-xs">{partnerBrands.length} brands × {partnerBrands[0].coin[selectedTier]} AED</td>
                    <td className="py-2.5 px-3 text-right text-purple-400 font-bold text-xs">
                      {partnerBrands.reduce((s, p) => s + p.coin[selectedTier], 0).toLocaleString()} AED
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-[#c9a227]/30">
                    <td colSpan={2} className="py-3 px-3 text-white font-bold">Total Monthly Value</td>
                    <td className="py-3 px-3 text-right text-2xl font-bold text-[#c9a227]">
                      ~{calcTierValue(selectedTier).total.toLocaleString()} AED
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="py-2 px-3 text-slate-400 text-sm">You pay</td>
                    <td className="py-2 px-3 text-right text-white font-bold">
                      {tiers.find(t => t.id === selectedTier)?.price} AED
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="py-2 px-3 text-green-400 font-bold text-sm">Return on membership</td>
                    <td className="py-2 px-3 text-right text-green-400 font-bold text-lg">
                      {Math.round(calcTierValue(selectedTier).total / parseInt(tiers.find(t => t.id === selectedTier)?.price || '99'))}x
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Visual Comparison */}
            <div className="bg-gradient-to-r from-[#c9a227]/15 to-green-500/10 rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-white mb-4 text-center">Without Nuqta+ vs With Nuqta+</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/30">
                  <h4 className="text-red-400 font-bold mb-3">Without Nuqta+ (Pay Full Price)</h4>
                  <div className="space-y-2 text-sm">
                    {[
                      { item: 'Wasil delivery fees (15/mo)', cost: '225 AED' },
                      { item: 'Rakab rides (10/mo)', cost: '250 AED' },
                      { item: 'Home cleaning (2/mo)', cost: '240 AED' },
                      { item: 'Hawil transfers (2/mo)', cost: '40 AED' },
                      { item: 'Tabib consultation', cost: '100 AED' },
                      { item: 'BNPL fees', cost: '90 AED' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-slate-300">{item.item}</span>
                        <span className="text-red-400 font-medium">{item.cost}</span>
                      </div>
                    ))}
                    <div className="flex justify-between pt-2 border-t border-red-500/30">
                      <span className="text-white font-bold">Monthly cost</span>
                      <span className="text-red-400 font-bold">945+ AED</span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/30">
                  <h4 className="text-green-400 font-bold mb-3">With Nuqta+ Gold (All Included)</h4>
                  <div className="space-y-2 text-sm">
                    {[
                      { item: 'All delivery fees', cost: 'FREE ✓' },
                      { item: '8 Rakab rides', cost: 'FREE ✓' },
                      { item: '2 home cleanings', cost: 'FREE ✓' },
                      { item: '5 Hawil transfers', cost: 'FREE ✓' },
                      { item: '3 Tabib consultations', cost: 'FREE ✓' },
                      { item: '0% BNPL up to 10K', cost: 'FREE ✓' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-slate-300">{item.item}</span>
                        <span className="text-green-400 font-medium">{item.cost}</span>
                      </div>
                    ))}
                    <div className="flex justify-between pt-2 border-t border-green-500/30">
                      <span className="text-white font-bold">Monthly cost</span>
                      <span className="text-green-400 font-bold">199 AED only</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <span className="text-2xl font-bold text-[#c9a227]">Save 746+ AED/month</span>
                <span className="text-slate-400 text-sm block">+ partner brand coins worth 1,300 AED on top</span>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════ REVENUE MODEL TAB ═══════════════════ */}
        {activeTab === 'revenue' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" /> Revenue Model
            </h2>

            {/* Revenue Streams */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {revenueStreams.map((stream, i) => (
                <div key={i} className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-3">
                    <stream.icon className={`w-6 h-6 ${stream.color}`} />
                    <div>
                      <div className="text-white font-bold text-sm">{stream.source}</div>
                      <div className={`text-xs font-bold ${stream.color}`}>{stream.share} of revenue</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400">{stream.description}</p>
                </div>
              ))}
            </div>

            {/* Revenue Split Visual */}
            <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Revenue Split at Scale</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-[35] bg-[#c9a227]/20 rounded-lg p-3 text-center border border-[#c9a227]/30">
                  <div className="text-[#c9a227] font-bold text-lg">35%</div>
                  <div className="text-xs text-slate-400">Subscriptions</div>
                </div>
                <div className="flex-[30] bg-emerald-500/20 rounded-lg p-3 text-center border border-emerald-500/30">
                  <div className="text-emerald-400 font-bold text-lg">30%</div>
                  <div className="text-xs text-slate-400">Ecosystem Commission</div>
                </div>
                <div className="flex-[20] bg-blue-500/20 rounded-lg p-3 text-center border border-blue-500/30">
                  <div className="text-blue-400 font-bold text-lg">20%</div>
                  <div className="text-xs text-slate-400">Partner Commission</div>
                </div>
                <div className="flex-[10] bg-amber-500/20 rounded-lg p-3 text-center border border-amber-500/30">
                  <div className="text-amber-400 font-bold text-lg">10%</div>
                  <div className="text-xs text-slate-400">Breakage</div>
                </div>
                <div className="flex-[5] bg-purple-500/20 rounded-lg p-3 text-center border border-purple-500/30">
                  <div className="text-purple-400 font-bold text-lg">5%</div>
                  <div className="text-xs text-slate-400">Upsells</div>
                </div>
              </div>
            </div>

            {/* Unit Economics */}
            <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-emerald-400" /> Unit Economics per Member
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { metric: 'Blended ARPU', value: '~165 AED/mo', note: 'Across all tiers', color: 'text-[#c9a227]' },
                  { metric: 'LTV (24 months)', value: '~3,960 AED', note: 'Avg 24-month retention', color: 'text-emerald-400' },
                  { metric: 'CAC', value: '~50 AED', note: 'Cross-sell from Nuqta users', color: 'text-blue-400' },
                  { metric: 'LTV:CAC', value: '79x', note: 'Exceptional ratio', color: 'text-purple-400' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                    <div className={`text-xl font-bold ${item.color}`}>{item.value}</div>
                    <div className="text-white font-medium text-sm mt-1">{item.metric}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flywheel */}
            <div className="bg-gradient-to-r from-[#c9a227]/15 to-emerald-500/10 rounded-xl p-5 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-[#c9a227]" /> The Nuqta+ Flywheel
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                {[
                  { text: 'User subscribes', color: 'bg-[#c9a227]/20 text-[#c9a227] border-[#c9a227]/30' },
                  { text: 'Uses 5+ apps daily', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
                  { text: 'Redeems partner coins', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
                  { text: 'Switching cost grows', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
                  { text: 'Upgrades tier', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
                  { text: 'Invites family/friends', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
                ].map((step, i) => (
                  <React.Fragment key={i}>
                    <span className={`${step.color} px-4 py-2 rounded-lg border font-bold`}>{step.text}</span>
                    {i < 5 && <ArrowRight className="w-4 h-4 text-slate-500" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════ GROWTH TAB ═══════════════════ */}
        {activeTab === 'growth' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Rocket className="w-5 h-5 text-purple-400" /> Growth Projections
            </h2>

            {/* Growth Table */}
            <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm min-w-[500px]">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="text-left py-3 px-3 text-[#c9a227] font-semibold">Period</th>
                    <th className="text-center py-3 px-3 text-[#c9a227] font-semibold">Members</th>
                    <th className="text-center py-3 px-3 text-[#c9a227] font-semibold">Blended ARPU</th>
                    <th className="text-center py-3 px-3 text-[#c9a227] font-semibold">MRR</th>
                    <th className="text-center py-3 px-3 text-[#c9a227] font-semibold">Ecosystem GMV</th>
                  </tr>
                </thead>
                <tbody>
                  {growthTargets.map((row, i) => (
                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/20">
                      <td className="py-3 px-3 text-white font-medium">{row.period}</td>
                      <td className="py-3 px-3 text-center text-white">{row.members}</td>
                      <td className="py-3 px-3 text-center text-slate-300">{row.blendedARPU}</td>
                      <td className="py-3 px-3 text-center text-emerald-400 font-bold">{row.mrr}</td>
                      <td className="py-3 px-3 text-center text-[#c9a227] font-bold">{row.ecosystemGMV}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tier Mix Projection */}
            <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Expected Tier Distribution</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { tier: 'Nuqta+', share: '55%', members: 'Majority', color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10', borderColor: 'border-[#c9a227]/30' },
                  { tier: 'Gold', share: '35%', members: 'Power users', color: 'text-amber-400', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/30' },
                  { tier: 'Privé', share: '10%', members: 'Premium segment', color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30' },
                ].map((item, i) => (
                  <div key={i} className={`${item.bgColor} rounded-lg p-4 border ${item.borderColor}`}>
                    <div className={`text-2xl font-bold ${item.color}`}>{item.share}</div>
                    <div className="text-white font-medium text-sm">{item.tier}</div>
                    <div className="text-xs text-slate-400">{item.members}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Launch Timeline */}
            <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" /> Launch Timeline
              </h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700/50" />
                <div className="space-y-6">
                  {[
                    { date: 'Q2 2026', event: 'Partner acquisition + ecosystem benefit mapping', status: 'done', color: 'bg-emerald-400' },
                    { date: 'Q3 2026', event: 'Beta test with 1,000 users across all 3 tiers', status: 'current', color: 'bg-blue-400' },
                    { date: 'Q4 2026', event: 'Full launch — 10K members target', status: 'upcoming', color: 'bg-purple-400' },
                    { date: 'H1 2027', event: 'Scale to 50K members + family plans', status: 'upcoming', color: 'bg-amber-400' },
                    { date: 'H2 2027', event: '100K members + GCC expansion', status: 'upcoming', color: 'bg-[#c9a227]' },
                  ].map((milestone, i) => (
                    <div key={i} className="flex items-start gap-4 ml-1">
                      <div className={`w-6 h-6 rounded-full ${milestone.color} flex items-center justify-center flex-shrink-0 z-10 ${
                        milestone.status === 'current' ? 'ring-4 ring-blue-400/20' : milestone.status === 'upcoming' ? 'opacity-50' : ''
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

            {/* Impact on RTMN */}
            <div className="bg-gradient-to-r from-[#c9a227]/15 to-emerald-500/10 rounded-xl p-5 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-[#c9a227] mb-4">Impact on RTMN Ecosystem</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { impact: 'Cross-App Usage', detail: 'Members use 5-8 RTMN apps vs 1-2 for free users. Each app cross-sells to others.' },
                  { impact: 'Retention Fortress', detail: 'Switching cost is losing delivery + rides + cleaning + healthcare + BNPL + 13 partner brands — all at once.' },
                  { impact: 'Data Flywheel', detail: 'Member activity across 20 apps creates unmatched behavioral data for Adzy targeting and Rabtul AI.' },
                  { impact: 'Revenue Multiplier', detail: 'Every Nuqta+ member generates 5-8x more ecosystem GMV than a free user across all apps.' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                    <div className="text-[#c9a227] font-bold text-sm mb-1">{item.impact}</div>
                    <p className="text-xs text-slate-400">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        </>)}
        {/* ╚═══ END V2 ═══╝ */}

      </main>

      {/* ═══════════════════ NAVIGATION FOOTER ═══════════════════ */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/nuqta" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Crown className="w-5 h-5" /> Nuqta App
            </Link>
            <Link href="/rtmn" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Database className="w-5 h-5" /> RTMN Hub
            </Link>
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Layers className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Globe className="w-5 h-5" /> Ecosystem
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
