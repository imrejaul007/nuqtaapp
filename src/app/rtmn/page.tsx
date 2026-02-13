'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  Building2, Smartphone, Store, Target, Crown, Code, BarChart3,
  DollarSign, Handshake, Megaphone, Users, Shield, Presentation,
  Globe, ArrowRight, Search, ChevronDown, ChevronUp, X, Command,
  Layers, Database, Network, Rocket, Server, Wallet, CreditCard,
  Brain, Heart, Star, MapPin, Briefcase, BookOpen, FileText,
  Activity, Lock, Package, ShoppingCart, Settings, Zap, Eye,
  TrendingUp, Clock, Monitor, Cpu, AlertTriangle, GitBranch, Scale,
  Trophy, Play, Calendar, CheckCircle, Coins, LayoutGrid, Fingerprint,
  Bell, Cloud, HardDrive, Wifi, Terminal, Coffee, Scissors,
  Car, Truck, GraduationCap, Stethoscope, Home, Plane, Music,
  Camera, Mic, PenTool, Share2, Mail, MessageSquare, Phone, Map,
  Gamepad2, Dog, Leaf, Dice1, Flame, Medal, Vote, Tent, Mountain,
  Palmtree, Ship, Flower2, Cake, Droplets, Beer, Moon, Baby, Sparkle,
  Wrench, Shirt, Tv, Receipt, PiggyBank, Dumbbell, Salad, Ticket,
  Lightbulb, PartyPopper, UtensilsCrossed, Utensils, Send, BadgePercent,
  Calculator, HelpCircle
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ═══════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════

interface PageLink {
  title: string;
  href: string;
  description: string;
  icon: React.ElementType;
  arabic?: string;
  status?: 'built' | 'planned';
  timeline?: string;
}

interface SubCategory {
  title: string;
  pages: PageLink[];
}

interface Category {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  pages: PageLink[];
  subcategories?: SubCategory[];
}

// ═══════════════════════════════════════════════════════════════════
// ALL 242 PAGES ORGANIZED INTO 14 CATEGORIES
// ═══════════════════════════════════════════════════════════════════

const categories: Category[] = [
  // ─── 1. RTMN Core ──────────────────────────────────────────────
  {
    id: 'rtmn-core',
    title: 'RTMN Core',
    icon: Building2,
    color: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]/30',
    description: 'Group holding company, core infrastructure & governance',
    pages: [
      { title: 'RTMN Story', href: '/rtmn-story', description: 'The full ecosystem narrative — flywheel, moats & interconnections', icon: Network },
      { title: 'Business Solutions', href: '/business-solutions', description: 'Complete end-to-end business lifecycle — registration to operations', icon: Briefcase },
      { title: 'RTMN Group', href: '/rtmn-group', description: 'Company structure & hierarchy of 11 companies', icon: Building2, arabic: 'مجموعة رتمن' },
      { title: 'RTMN Dashboard', href: '/rtmn-dashboard', description: 'Business dashboard for all 10 sister companies', icon: BarChart3 },
      { title: 'RTMN Ecosystem', href: '/rtmn-ecosystem', description: '150+ apps ecosystem visualization', icon: Globe },
      { title: 'RTMN Finance', href: '/rtmn-finance', description: 'Fintech platform & financial operations', icon: DollarSign },
      { title: 'Team Structure', href: '/rtmn-team-structure', description: 'Organization chart for 10 companies', icon: Users },
      { title: 'Rabtul', href: '/rabtul', description: 'Core OS infrastructure — the silent backbone', icon: Database, arabic: 'ربطُل' },
      { title: 'Rabtul Tech', href: '/rabtul-tech', description: 'Tech team, squads & sprint tasks', icon: Terminal },
      { title: 'Rabtul Core', href: '/rabtul-core', description: 'Technical specifications — 9 core services', icon: Server },
    ],
  },

  // ─── 2. Products — User Apps ───────────────────────────────────
  {
    id: 'user-apps',
    title: 'User Apps',
    icon: Smartphone,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    borderColor: 'border-cyan-400/30',
    description: 'Consumer-facing products for end users',
    pages: [
      { title: 'Nuqta', href: '/nuqta', description: 'Loyalty rewards super app — scan, earn, redeem', icon: Coins, arabic: 'نقطة' },
      { title: 'Nuqta+', href: '/nuqta-plus', description: 'Premium membership with exclusive perks', icon: Star, arabic: 'نقطة+' },
      { title: 'NuqtaPay', href: '/nuqtapay', description: 'Payment processing & digital wallet', icon: CreditCard, arabic: 'نقطة باي' },
      { title: 'Qist', href: '/qist', description: 'Buy Now Pay Later — Shariah-compliant BNPL', icon: Wallet, arabic: 'قسط' },
      { title: 'Hawil', href: '/hawil', description: 'Remittance at Google rate — instant transfers', icon: DollarSign, arabic: 'حوّل' },
      { title: 'Wasil', href: '/wasil', description: 'Quick commerce delivery — 60 min SLA', icon: Truck, arabic: 'واصل' },
      { title: 'Safar', href: '/safar', description: 'Travel booking — flights, hotels, packages', icon: Plane, arabic: 'سفر' },
      { title: 'Rakab', href: '/rakab', description: 'Ride-hailing — daily commute to premium', icon: Car, arabic: 'ركاب' },
      { title: 'Sakin', href: '/sakin', description: 'Rent financing — BNPL for rent payments', icon: Home, arabic: 'ساكن' },
      { title: 'Ajer', href: '/ajer', description: 'Rental marketplace — cars, equipment, spaces', icon: Package, arabic: 'أجر' },
      { title: 'Fakhir', href: '/fakhir', description: 'Luxury concierge — premium lifestyle services', icon: Star, arabic: 'فاخر' },
      { title: 'Tabib', href: '/tabib', description: 'Healthcare — book doctors, telemedicine', icon: Stethoscope, arabic: 'طبيب' },
      { title: 'Majlis', href: '/majlis', description: 'Community platform — local events & groups', icon: Users, arabic: 'مجلس' },
    ],
  },

  // ─── 3. Products — Business Tools ──────────────────────────────
  {
    id: 'biz-tools',
    title: 'Business Tools',
    icon: Store,
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10',
    borderColor: 'border-orange-400/30',
    description: 'Merchant & B2B products for businesses',
    pages: [
      { title: 'BizOne', href: '/bizone', description: 'Merchant dashboard suite — POS, analytics, loyalty', icon: Store, arabic: 'بزون' },
      { title: 'Adzy', href: '/adzy', description: 'Advertising platform — merchant ads & campaigns', icon: Megaphone, arabic: 'أدزي' },
      { title: 'Amana', href: '/amana', description: 'Compliance OS — 12 regulatory pillars', icon: Shield, arabic: 'أمانة' },
      { title: 'Khedma', href: '/khedma', description: 'Government & PRO services — visa, licensing, labor, attestation', icon: Briefcase, arabic: 'خدمة' },
      { title: 'Tawzeef', href: '/tawzeef', description: 'Recruitment platform — hiring & talent', icon: Users, arabic: 'توظيف' },
      { title: 'Tadreeb', href: '/tadreeb', description: 'Training platform — skills & certification', icon: GraduationCap, arabic: 'تدريب' },
      { title: 'Daman', href: '/daman', description: 'Insurance platform — health, auto, property', icon: Shield, arabic: 'ضمان' },
      { title: 'Eventora', href: '/eventora', description: 'Events & experiences marketplace', icon: Calendar, arabic: 'إيفنتورا' },
      { title: 'Aqar', href: '/aqar', description: 'Real estate platform — buy, sell, manage', icon: Home, arabic: 'عقار' },
      { title: 'NextaBizz', href: '/nextabizz', description: 'B2B marketplace — wholesale & supply', icon: Package, arabic: 'نكستابز' },
      { title: 'Inventora', href: '/inventora', description: 'Supply chain & inventory management', icon: Package, arabic: 'إنفنتورا' },
      { title: 'Mazra', href: '/mazra', description: 'Agriculture — farm-to-table platform', icon: MapPin, arabic: 'مزرعة' },
      { title: 'Nuqta Corp', href: '/nuqta-corp', description: 'Nuqta Corporation overview page', icon: Building2 },
    ],
  },

  // ─── 4. Active Products (31 Apps) ───────────────────────────────
  {
    id: 'active-products',
    title: 'Active Products (31)',
    icon: Rocket,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
    borderColor: 'border-emerald-400/30',
    description: 'The 31 real standalone products — each with clear market identity',
    subcategories: [
      {
        title: 'Core Platform (4)',
        pages: [
          { title: 'Nuqta', href: '/nuqta', description: 'Super-app — wallet (NuqtaPay), membership (Nuqta+), rewards, gamification', icon: Crown, arabic: 'نقطة', status: 'built' },
          { title: 'Qist', href: '/qist', description: 'Buy Now Pay Later — Shariah-compliant, 3-12 months', icon: Wallet, arabic: 'قسط', status: 'built' },
          { title: 'Hawil', href: '/hawil', description: 'Remittance — Google rate, 0% markup, 8+ corridors', icon: Send, arabic: 'حوّل', status: 'built' },
          { title: 'SpinZy', href: '/spinzy', description: 'Viral gaming app — mini-games, earn Nuqta coins, ultra-lightweight', icon: Gamepad2, arabic: 'سبينزي', status: 'planned' },
        ],
      },
      {
        title: 'Merchant & B2B (6)',
        pages: [
          { title: 'BizOne', href: '/bizone', description: 'Merchant OS — POS, analytics, loyalty, CRM', icon: Store, arabic: 'بزون', status: 'built' },
          { title: 'Adzy', href: '/adzy', description: 'Advertising platform — merchant ads & campaigns', icon: Megaphone, arabic: 'أدزي' },
          { title: 'Amana', href: '/amana', description: 'Compliance SaaS — 12 regulatory pillars, public + internal', icon: Shield, arabic: 'أمانة' },
          { title: 'NextaBizz', href: '/nextabizz', description: 'B2B marketplace — wholesale & supply', icon: Package, arabic: 'نكستابز' },
          { title: 'Inventora', href: '/inventora', description: 'Supply chain & inventory management', icon: Package, arabic: 'إنفنتورا' },
          { title: 'Rabtul', href: '/rabtul', description: 'Core infrastructure — API layer, SDKs (internal)', icon: Database, arabic: 'ربطُل', status: 'built' },
        ],
      },
      {
        title: 'Wasil Delivery Niche Apps (8)',
        pages: [
          { title: 'Wasil Hub', href: '/wasil', description: 'Delivery catchall — shopping, pets, kids, gifts, flowers', icon: Truck, arabic: 'واصل', status: 'built' },
          { title: 'Dinezy', href: '/dinezy', description: 'Food delivery — restaurants, cloud kitchens, catering', icon: Utensils, arabic: 'داينزي', status: 'planned' },
          { title: 'Grocify', href: '/grocify', description: 'Grocery delivery — supermarkets, fresh produce, pantry', icon: ShoppingCart, arabic: 'غروسيفاي', status: 'planned' },
          { title: 'Glowzy', href: '/glowzy', description: 'Beauty & salon — at-home services, products, bookings', icon: Sparkle, arabic: 'غلوزي', status: 'planned' },
          { title: 'MediEarn', href: '/mediearn', description: 'Pharmacy delivery — prescriptions, health products', icon: Stethoscope, arabic: 'ميدي إيرن', status: 'planned' },
          { title: 'CleanEZ', href: '/cleanez', description: 'Home cleaning & laundry — deep clean, pickup, deliver', icon: Sparkle, arabic: 'كلين إي زد', status: 'planned' },
          { title: 'Handyzy', href: '/handyzy', description: 'Home repairs — plumbing, electrical, AC, handyman', icon: Wrench, arabic: 'هاندي زي', status: 'planned' },
          { title: 'QuickDrop', href: '/quickdrop', description: '15-min dark store — instant essentials, late-night', icon: Zap, arabic: 'كويك دروب', status: 'planned' },
        ],
      },
      {
        title: 'Travel & Mobility (3)',
        pages: [
          { title: 'Safar', href: '/safar', description: 'Travel booking — flights, hotels, experiences, visas', icon: Plane, arabic: 'سفر', status: 'built' },
          { title: 'Rakab', href: '/rakab', description: 'Ride-hailing — 85% driver cut, daily to premium', icon: Car, arabic: 'ركاب', status: 'built' },
          { title: 'Fakhir', href: '/fakhir', description: 'Luxury concierge — 24/7 white-glove for HNWIs', icon: Crown, arabic: 'فاخر', status: 'built' },
        ],
      },
      {
        title: 'Property & Rental (2)',
        pages: [
          { title: 'Sakin', href: '/sakin', description: 'Rent BNPL — deposit + rent over 12 months', icon: Home, arabic: 'ساكن', status: 'built' },
          { title: 'Ajer', href: '/ajer', description: 'Rental marketplace — cars, equipment, spaces', icon: Package, arabic: 'أجر', status: 'built' },
        ],
      },
      {
        title: 'Vertical Services (8)',
        pages: [
          { title: 'Khedma', href: '/khedma', description: 'Government & PRO services — visa, licensing, compliance', icon: Briefcase, arabic: 'خدمة' },
          { title: 'Eventora', href: '/eventora', description: 'Events & ticketing — concerts, sports, corporate', icon: Calendar, arabic: 'إيفنتورا' },
          { title: 'Daman', href: '/daman', description: 'Insurance marketplace — health, car, travel, property', icon: Shield, arabic: 'ضمان' },
          { title: 'Aqar', href: '/aqar', description: 'Real estate — buy, sell, manage properties', icon: Home, arabic: 'عقار' },
          { title: 'Tawzeef', href: '/tawzeef', description: 'Recruitment — hiring, talent matching', icon: Users, arabic: 'توظيف' },
          { title: 'Tadreeb', href: '/tadreeb', description: 'Training & certification — skills, courses', icon: GraduationCap, arabic: 'تدريب' },
          { title: 'Tabib', href: '/tabib', description: 'Healthcare — telemedicine, booking, records', icon: Stethoscope, arabic: 'طبيب' },
          { title: 'Majlis', href: '/majlis', description: 'Community platform — groups, events, local', icon: Users, arabic: 'مجلس' },
        ],
      },
      {
        title: 'Niche B2B (2)',
        pages: [
          { title: 'Mazra', href: '/mazra', description: 'Agriculture — farm-to-table, supply chain', icon: MapPin, arabic: 'مزرعة' },
          { title: 'Nuqta Corp', href: '/nuqta-corp', description: 'Nuqta Corporation overview page', icon: Building2 },
        ],
      },
    ],
    pages: [],
  },

  // ─── 5. Archived / Merged Apps ─────────────────────────────────
  {
    id: 'archived-apps',
    title: 'Archived / Merged',
    icon: Layers,
    color: 'text-slate-500',
    bgColor: 'bg-slate-500/10',
    borderColor: 'border-slate-500/30',
    description: 'Originally 150+ apps — consolidated into parent products. Shown here for reference.',
    subcategories: [
      {
        title: 'Merged into Nuqta App',
        pages: [
          { title: 'Nuqta+', href: '/nuqta-plus', description: 'Premium membership — now a tab inside Nuqta app', icon: Star, arabic: 'نقطة+' },
          { title: 'NuqtaPay', href: '/nuqtapay', description: 'Wallet & payments — now built into Nuqta app', icon: CreditCard, arabic: 'نقطة باي' },
          { title: 'AI-R', href: '/rtmn-ecosystem', description: 'AI assistant — feature inside Nuqta', icon: Brain },
          { title: 'BuzzLoop', href: '/rtmn-ecosystem', description: 'Discovery feed — feature inside Nuqta', icon: Sparkle },
          { title: 'CoinHunt', href: '/rtmn-ecosystem', description: 'Gamified earning — feature inside Nuqta', icon: Coins },
          { title: 'LocalEdge', href: '/rtmn-ecosystem', description: 'Hyperlocal recommendations — feature inside Nuqta', icon: Map },
        ],
      },
      {
        title: 'Merged into SpinZy (Gaming App)',
        pages: [
          { title: 'Memezy', href: '/rtmn-ecosystem', description: 'Meme creation — mini-game inside SpinZy', icon: Camera },
          { title: 'Quizzy', href: '/rtmn-ecosystem', description: 'Trivia quiz — mini-game inside SpinZy', icon: HelpCircle },
          { title: 'Spinzy (game)', href: '/rtmn-ecosystem', description: 'Spin the wheel — mini-game inside SpinZy', icon: Dice1 },
          { title: 'Scratchzy', href: '/rtmn-ecosystem', description: 'Scratch cards — mini-game inside SpinZy', icon: Star },
          { title: 'Dailywin', href: '/rtmn-ecosystem', description: 'Daily rewards — feature inside SpinZy', icon: Star },
          { title: 'Streakzy', href: '/rtmn-ecosystem', description: 'Habit streaks — feature inside SpinZy', icon: Flame },
          { title: 'Rankzy', href: '/rtmn-ecosystem', description: 'Leaderboards — feature inside SpinZy', icon: Trophy },
          { title: 'Badgezy', href: '/rtmn-ecosystem', description: 'Achievement badges — feature inside SpinZy', icon: Medal },
          { title: 'Challengezy', href: '/rtmn-ecosystem', description: 'Social challenges — feature inside SpinZy', icon: Target },
          { title: 'Predictzy', href: '/rtmn-ecosystem', description: 'Predictions — feature inside SpinZy', icon: Target },
          { title: 'Matchzy / Flipzy / Bouncezy / Collectzy', href: '/rtmn-ecosystem', description: 'Casual games — mini-games inside SpinZy', icon: Gamepad2 },
          { title: 'Pollzy / Votezy / Confessly / Snapzy', href: '/rtmn-ecosystem', description: 'Social engagement — features inside SpinZy', icon: Vote },
        ],
      },
      {
        title: 'Merged into Dinezy (Food)',
        pages: [
          { title: 'Cakezy / Brewzy / IceColdz', href: '/rtmn-ecosystem', description: 'Bakery, coffee, beverages — categories inside Dinezy', icon: Coffee },
          { title: 'Feastly / Savorly', href: '/rtmn-ecosystem', description: 'Catering & meal kits — categories inside Dinezy', icon: UtensilsCrossed },
          { title: 'OfficeEats', href: '/rtmn-ecosystem', description: 'Corporate catering — category inside Dinezy', icon: Building2 },
        ],
      },
      {
        title: 'Merged into Wasil Hub / Grocify',
        pages: [
          { title: 'AquaFresh', href: '/rtmn-ecosystem', description: 'Water delivery — category inside Grocify', icon: Droplets },
          { title: 'NightOwl', href: '/rtmn-ecosystem', description: 'Late-night delivery — mode inside QuickDrop', icon: Moon },
          { title: 'Sparklean', href: '/rtmn-ecosystem', description: 'Laundry — merged into CleanEZ', icon: Shirt },
          { title: 'Stylezy / TechDrop / Bloominz', href: '/rtmn-ecosystem', description: 'Shopping verticals — categories inside Wasil Hub', icon: ShoppingCart },
          { title: 'Kidszone / PetPals / Seniorly', href: '/rtmn-ecosystem', description: 'Niche delivery — categories inside Wasil Hub', icon: Baby },
          { title: 'PartyPack / GiftWrap', href: '/rtmn-ecosystem', description: 'Events & gifts — categories inside Wasil Hub', icon: PartyPopper },
        ],
      },
      {
        title: 'Merged into Safar (Travel)',
        pages: [
          { title: 'Airzy / TravoPay', href: '/rtmn-ecosystem', description: 'Flights & travel wallet — features inside Safar', icon: Plane },
          { title: 'Weekendzy / Staycay', href: '/rtmn-ecosystem', description: 'Getaways & staycations — categories inside Safar', icon: Calendar },
          { title: 'Trekzy / Campzy / WildEscape', href: '/rtmn-ecosystem', description: 'Adventure & outdoor — categories inside Safar', icon: Mountain },
          { title: 'DesertVibes / BeachLife / CityExplore / Cruise+', href: '/rtmn-ecosystem', description: 'Experience types — filters inside Safar', icon: Palmtree },
        ],
      },
      {
        title: 'Merged into Majlis (Community)',
        pages: [
          { title: 'Circlezy / Hangoutzy / Vibezy', href: '/rtmn-ecosystem', description: 'Social communities — groups inside Majlis', icon: Users },
          { title: 'Campuszy / ParentHub / FitSquad', href: '/rtmn-ecosystem', description: 'Niche communities — groups inside Majlis', icon: Users },
          { title: 'BookClubz / Skillsharez / VolunteerHub / NeighborNet', href: '/rtmn-ecosystem', description: 'Interest groups — categories inside Majlis', icon: Heart },
        ],
      },
      {
        title: 'Merged into Parent Products',
        pages: [
          { title: 'Splitzy / Savezy+ / BudgetPro / CreditBoost', href: '/rtmn-ecosystem', description: 'Finance features — inside Nuqta wallet (NuqtaPay)', icon: Wallet },
          { title: 'Investzy / Wealthzy / CryptoLite / Taxzy', href: '/rtmn-ecosystem', description: 'Advanced finance — dropped (regulatory complexity)', icon: AlertTriangle },
          { title: 'Insurzy', href: '/rtmn-ecosystem', description: 'Insurance — merged into Daman', icon: Shield },
          { title: 'Learnzy / Tutorly / Certify+ / SkillBoost / KidLearn', href: '/rtmn-ecosystem', description: 'Education — features inside Tadreeb', icon: GraduationCap },
          { title: 'FitLife / MindCalm / NutriPlan / DocConnect / WellnessHub', href: '/rtmn-ecosystem', description: 'Health — features inside Tabib', icon: Heart },
          { title: 'PawCare / HomeHub / AutoCare / GardenPro / SmartHome / SecurityPlus', href: '/rtmn-ecosystem', description: 'Home services — categories inside Khedma', icon: Home },
          { title: 'Gigzy / BuzzLocal / Z-Events / MemberPlus / Brandzy', href: '/rtmn-ecosystem', description: 'Growth tools — features in Adzy / Eventora / Nuqta', icon: TrendingUp },
          { title: 'Leadzy / ReferralHub / LoyaltyMax / Contestify / GrowthLab', href: '/rtmn-ecosystem', description: 'Growth tools — internal Rabtul analytics', icon: BarChart3 },
          { title: 'AIRA / DataPulse / CloudSync / SecureVault', href: '/rtmn-ecosystem', description: 'Infrastructure — internal Rabtul services', icon: Server },
        ],
      },
    ],
    pages: [],
  },

  // ─── 6. Strategy & Roadmaps ────────────────────────────────────
  {
    id: 'strategy',
    title: 'Strategy & Roadmaps',
    icon: Target,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'border-purple-400/30',
    description: 'Execution plans, roadmaps & growth strategies',
    pages: [
      { title: 'Complete Roadmap', href: '/complete-roadmap', description: '48-month execution blueprint — Day 1 to exit', icon: Map },
      { title: 'Master Roadmap', href: '/master-roadmap', description: 'Horizon framework — phases & milestones', icon: Target },
      { title: '3-Year Plan', href: '/3-year-plan', description: 'Financial + operational growth plan', icon: TrendingUp },
      { title: 'Execution Plan', href: '/execution-plan', description: 'H1 tactical execution details', icon: Zap },
      { title: 'Execution Plan Extended', href: '/execution-plan-extended', description: 'Extended H1-H2 execution plan', icon: Zap },
      { title: 'Group Launch Strategy', href: '/group-launch-strategy', description: '10-product launch sequence', icon: Rocket },
      { title: 'Group Master Plan', href: '/group-master-plan', description: '55B AED vision & master strategy', icon: Trophy },
      { title: 'Group Org Structure', href: '/group-org-structure', description: 'Organizational structure design', icon: Network },
      { title: 'Group Governance', href: '/group-governance', description: 'Governance & Shariah compliance framework', icon: Scale },
      { title: 'Future Ambition', href: '/future-ambition', description: 'Long-term vision & ambition', icon: Star },
      { title: 'H1 GTM', href: '/h1-gtm', description: 'H1 go-to-market strategy (M1-5)', icon: Rocket },
      { title: 'H2 GTM', href: '/h2-gtm', description: 'H2 go-to-market strategy (M6-8)', icon: Rocket },
      { title: 'H2 Strategy', href: '/h2-strategy', description: 'H2 strategic planning & priorities', icon: Target },
      { title: 'H3 GTM', href: '/h3-gtm', description: 'H3 go-to-market strategy (M9-24)', icon: Rocket },
      { title: 'H3 Infrastructure', href: '/h3-infrastructure', description: 'H3 infrastructure scaling plan', icon: Server },
    ],
  },

  // ─── 5. C-Suite & Leadership ───────────────────────────────────
  {
    id: 'c-suite',
    title: 'C-Suite & Leadership',
    icon: Crown,
    color: 'text-amber-400',
    bgColor: 'bg-amber-400/10',
    borderColor: 'border-amber-400/30',
    description: 'Executive AI agents, reports & strategic planning',
    subcategories: [
      {
        title: 'CEO',
        pages: [
          { title: 'CEO Agent', href: '/ceo-agent', description: 'CEO AI agent dashboard', icon: Brain },
          { title: 'CEO Analysis', href: '/ceo-analysis', description: 'Strategic analysis reports', icon: BarChart3 },
          { title: 'CEO Master Plan', href: '/ceo-master-plan', description: 'CEO master strategic plan', icon: Target },
          { title: 'CEO Report', href: '/ceo-report', description: 'Executive reporting dashboard', icon: FileText },
        ],
      },
      {
        title: 'CFO',
        pages: [
          { title: 'CFO Agent', href: '/cfo-agent', description: 'CFO AI agent dashboard', icon: Brain },
          { title: 'CFO Analysis', href: '/cfo-analysis', description: 'Financial analysis reports', icon: BarChart3 },
          { title: 'CFO Report', href: '/cfo-report', description: 'Financial reporting dashboard', icon: FileText },
        ],
      },
      {
        title: 'CMO',
        pages: [
          { title: 'CMO Agent', href: '/cmo-agent', description: 'CMO AI agent dashboard', icon: Brain },
          { title: 'CMO Analysis', href: '/cmo-analysis', description: 'Marketing analysis reports', icon: BarChart3 },
          { title: 'CMO Operations', href: '/cmo-operations', description: 'Marketing ops dashboard', icon: Settings },
          { title: 'CMO Playbook', href: '/cmo-playbook', description: 'Marketing playbook guide', icon: BookOpen },
          { title: 'CMO Report', href: '/cmo-report', description: 'Marketing reporting dashboard', icon: FileText },
        ],
      },
      {
        title: 'CHRO',
        pages: [
          { title: 'CHRO Agent', href: '/chro-agent', description: 'CHRO AI agent dashboard', icon: Brain },
          { title: 'CHRO Analysis', href: '/chro-analysis', description: 'HR analysis reports', icon: BarChart3 },
          { title: 'CHRO Master Plan', href: '/chro-master-plan', description: 'People strategy plan', icon: Target },
          { title: 'CHRO Report', href: '/chro-report', description: 'HR reporting dashboard', icon: FileText },
        ],
      },
      {
        title: 'COO',
        pages: [
          { title: 'COO Agent', href: '/coo-agent', description: 'COO AI agent dashboard', icon: Brain },
          { title: 'COO Analysis', href: '/coo-analysis', description: 'Operational analysis', icon: BarChart3 },
          { title: 'COO Report', href: '/coo-report', description: 'Operations reporting dashboard', icon: FileText },
        ],
      },
      {
        title: 'Executive Team',
        pages: [
          { title: 'Executive Team', href: '/executive-team', description: 'Executive team overview', icon: Users },
          { title: 'Executive Issues', href: '/executive-issues', description: 'Issue tracking & resolution', icon: AlertTriangle },
          { title: 'C-Suite Operations', href: '/c-suite-operations', description: 'Operations coordination', icon: Settings },
          { title: 'C-Suite Strategy', href: '/c-suite-strategy', description: 'Strategic planning room', icon: Target },
        ],
      },
    ],
    pages: [],
  },

  // ─── 6. Technical Specs ────────────────────────────────────────
  {
    id: 'tech-specs',
    title: 'Technical Specs',
    icon: Code,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/30',
    description: 'Documentation, APIs, architecture & platform specs',
    pages: [
      { title: 'Documentation', href: '/documentation', description: 'Central tech docs — 28 sections, APIs, schemas', icon: BookOpen },
      { title: 'BizOne OS Spec', href: '/bizone-os', description: 'BizOne OS — 219 screens specification', icon: Monitor },
      { title: 'HQ Admin Spec', href: '/hq-admin', description: 'HQ Admin panel — 224 screens specification', icon: Shield },
      { title: 'Rabtul Core Spec', href: '/rabtul-core', description: '9 core services technical specification', icon: Server },
      { title: 'Amana Compliance', href: '/amana', description: 'Compliance OS — 12 regulatory pillars', icon: Lock },
      { title: 'AI Infrastructure', href: '/ai-infrastructure', description: 'AI & ML infrastructure specs', icon: Brain },
      { title: 'Finance Apps', href: '/finance-apps', description: 'Finance apps technical specs', icon: CreditCard },
      { title: 'Travel Co', href: '/travel-co', description: 'Travel company technical specs', icon: Plane },
      { title: 'Value Chain', href: '/value-chain', description: 'Money, data & coin flow mapping', icon: GitBranch },
      { title: 'Monetization', href: '/monetization', description: 'Revenue model specifications', icon: DollarSign },
      { title: 'Ecosystem', href: '/ecosystem', description: 'Ecosystem overview & product flows', icon: Globe },
      { title: 'Ecosystem Docs', href: '/ecosystem-docs', description: 'Ecosystem build documentation', icon: FileText },
    ],
  },

  // ─── 7. Dashboards & Analytics ─────────────────────────────────
  {
    id: 'dashboards',
    title: 'Dashboards',
    icon: BarChart3,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
    borderColor: 'border-emerald-400/30',
    description: 'Analytics, KPIs & performance tracking',
    pages: [
      { title: 'Main Dashboard', href: '/dashboard', description: 'Primary Nuqta business dashboard', icon: LayoutGrid },
      { title: 'Dashboard Preview', href: '/dashboard-preview', description: 'Dashboard demo & preview', icon: Eye },
      { title: 'RTMN Dashboard', href: '/rtmn-dashboard', description: 'Group-level business dashboard', icon: Building2 },
      { title: 'Analytics Dashboard', href: '/analytics-dashboard', description: 'Deep analytics & metrics', icon: Activity },
      { title: 'Marketing Dashboard', href: '/marketing-dashboard', description: 'Marketing performance tracking', icon: TrendingUp },
      { title: 'KPI Tracking', href: '/kpi-tracking', description: 'KPI tracking & goal monitoring', icon: Target },
    ],
  },

  // ─── 8. Financial & Investment ─────────────────────────────────
  {
    id: 'finance',
    title: 'Financial & Investment',
    icon: DollarSign,
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    borderColor: 'border-green-400/30',
    description: 'Projections, funding, investor materials & ESOP',
    pages: [
      { title: 'Financial Projection', href: '/financialprojection', description: 'Financial projection models', icon: TrendingUp },
      { title: 'Financial Models', href: '/financial-models', description: 'Detailed financial modeling', icon: BarChart3 },
      { title: 'Financial Scenarios', href: '/financial-scenarios', description: 'Scenario analysis & planning', icon: GitBranch },
      { title: 'Funding Docs', href: '/funding-docs', description: 'Funding documentation package', icon: FileText },
      { title: 'Investor FAQ', href: '/investor-faq', description: 'Investor frequently asked questions', icon: MessageSquare },
      { title: 'Investor Outreach', href: '/investor-outreach', description: 'Investor outreach strategy', icon: Mail },
      { title: 'VC Investment Memo', href: '/vc-investment-memo', description: 'VC investment memo', icon: FileText },
      { title: 'Data Room', href: '/data-room', description: 'Investor data room', icon: Lock },
      { title: 'ESOP', href: '/esop', description: 'Employee stock option plan', icon: Users },
    ],
  },

  // ─── 9. Merchant Operations ────────────────────────────────────
  {
    id: 'merchants',
    title: 'Merchant Operations',
    icon: Handshake,
    color: 'text-rose-400',
    bgColor: 'bg-rose-400/10',
    borderColor: 'border-rose-400/30',
    description: 'Merchant acquisition, onboarding & vertical playbooks',
    subcategories: [
      {
        title: 'Merchant Strategy',
        pages: [
          { title: 'Merchant Acquisition', href: '/merchant-acquisition', description: 'Merchant onboarding strategy', icon: TrendingUp },
          { title: 'Merchant Blueprint', href: '/merchant-blueprint', description: 'Merchant success blueprint', icon: Map },
          { title: 'Merchant Onboarding', href: '/merchant-onboarding', description: 'Onboarding workflows', icon: CheckCircle },
          { title: 'Merchant Pipeline', href: '/merchant-pipeline', description: 'Sales pipeline management', icon: GitBranch },
          { title: 'Merchant Playbook', href: '/merchant-playbook', description: 'Operations playbook', icon: BookOpen },
          { title: 'Merchant Database', href: '/merchant-database', description: 'Database & CRM system', icon: Database },
          { title: 'Merchant Packages', href: '/merchant-packages', description: 'Pricing & packages', icon: Package },
          { title: 'Merchant Engines', href: '/merchant-engines', description: 'Growth engines', icon: Zap },
          { title: 'Merchant Info', href: '/merchant-info', description: 'Information & resources', icon: FileText },
          { title: 'Merchant Card', href: '/merchant-card', description: 'Payment card products', icon: CreditCard },
          { title: 'Exhibition Merchants', href: '/exhibition-merchants', description: 'Exhibition acquisition', icon: Store },
          { title: 'GV Merchants', href: '/gv-merchants', description: 'GCC Vibes merchant strategy', icon: Globe },
          { title: 'GV Playbook', href: '/gv-playbook', description: 'GCC Vibes playbook', icon: BookOpen },
          { title: 'Merchant Campaigns', href: '/merchant-campaigns', description: 'Merchant marketing campaigns', icon: Megaphone },
        ],
      },
      {
        title: 'Vertical Playbooks',
        pages: [
          { title: 'Cafe', href: '/playbook-cafe', description: 'Cafe merchant playbook', icon: Coffee },
          { title: 'Salon', href: '/playbook-salon', description: 'Salon & beauty playbook', icon: Scissors },
          { title: 'Gym', href: '/playbook-gym', description: 'Gym & fitness playbook', icon: Heart },
          { title: 'Hotel', href: '/playbook-hotel', description: 'Hotel & hospitality playbook', icon: Building2 },
          { title: 'Auto', href: '/playbook-auto', description: 'Auto services playbook', icon: Car },
          { title: 'Clinic', href: '/playbook-clinic', description: 'Medical clinic playbook', icon: Stethoscope },
          { title: 'Pet', href: '/playbook-pet', description: 'Pet services playbook', icon: Heart },
          { title: 'Laundry', href: '/playbook-laundry', description: 'Laundry service playbook', icon: Settings },
          { title: 'Fashion', href: '/playbook-fashion', description: 'Fashion retail playbook', icon: Star },
          { title: 'Supermarket', href: '/playbook-supermarket', description: 'Supermarket playbook', icon: ShoppingCart },
          { title: 'Gold', href: '/playbook-gold', description: 'Gold jewelry playbook', icon: Coins },
          { title: 'Electronics', href: '/playbook-electronics', description: 'Electronics store playbook', icon: Monitor },
          { title: 'Pharmacy', href: '/playbook-pharmacy', description: 'Pharmacy playbook', icon: Stethoscope },
          { title: 'Entertainment', href: '/playbook-entertainment', description: 'Entertainment venue playbook', icon: Music },
        ],
      },
    ],
    pages: [],
  },

  // ─── 10. Marketing & Growth ────────────────────────────────────
  {
    id: 'marketing',
    title: 'Marketing & Growth',
    icon: Megaphone,
    color: 'text-pink-400',
    bgColor: 'bg-pink-400/10',
    borderColor: 'border-pink-400/30',
    description: 'Campaigns, content, PR, growth experiments & competitive intel',
    subcategories: [
      {
        title: 'War Room & Hub',
        pages: [
          { title: 'Marketing War Room', href: '/marketing-war-room', description: 'Marketing command center', icon: Target },
          { title: 'Marketing Hub', href: '/marketing-hub', description: 'Central marketing hub', icon: LayoutGrid },
          { title: 'Marketing Bible', href: '/marketing-bible', description: 'Complete marketing playbook', icon: BookOpen },
          { title: 'Marketing Execution', href: '/marketing-execution', description: 'Execution tracker', icon: CheckCircle },
        ],
      },
      {
        title: 'Go-to-Market',
        pages: [
          { title: 'GTM Strategy', href: '/gtm', description: 'Go-to-market strategy', icon: Rocket },
          { title: 'Phase 2 GTM', href: '/phase-2-gtm', description: 'Phase 2 GTM plan', icon: Rocket },
          { title: 'Phase 3 GTM', href: '/phase-3-gtm', description: 'Phase 3 GTM plan', icon: Rocket },
          { title: 'Phase 2', href: '/phase-2', description: 'Phase 2 planning', icon: Layers },
          { title: 'Phase 3', href: '/phase-3', description: 'Phase 3 planning', icon: Layers },
        ],
      },
      {
        title: 'Campaigns',
        pages: [
          { title: 'Campaigns', href: '/campaigns', description: 'Campaign management hub', icon: Megaphone },
          { title: 'Big Win Campaigns', href: '/big-win-campaigns', description: 'Major campaign strategies', icon: Trophy },
          { title: 'Top 20 Campaigns', href: '/top-20-campaigns', description: 'Top 20 campaign ideas', icon: Star },
          { title: 'Seasonal Campaigns', href: '/seasonal-campaigns', description: 'Seasonal campaign planning', icon: Calendar },
          { title: 'UGC Campaigns', href: '/ugc-campaigns', description: 'User-generated content', icon: Camera },
          { title: 'Category Campaigns', href: '/category-campaigns', description: 'Category-specific campaigns', icon: Layers },
        ],
      },
      {
        title: 'Content & Media',
        pages: [
          { title: 'Content Strategy', href: '/content-strategy', description: 'Content strategy planning', icon: PenTool },
          { title: 'Content Calendar', href: '/content-calendar', description: 'Editorial calendar', icon: Calendar },
          { title: 'Niche Content', href: '/niche-content', description: 'Niche content strategies', icon: Target },
          { title: 'Brand Voice', href: '/brand-voice', description: 'Brand voice guidelines', icon: Mic },
          { title: 'Media Hub', href: '/media-hub', description: 'Media asset library', icon: Camera },
          { title: 'Media Properties', href: '/media-properties', description: 'Media property portfolio', icon: Globe },
        ],
      },
      {
        title: 'PR & Launch',
        pages: [
          { title: 'PR Launch', href: '/pr-launch', description: 'PR launch strategy', icon: Megaphone },
          { title: 'Press Kit', href: '/press-kit', description: 'Press kit materials', icon: FileText },
          { title: 'Launch Readiness', href: '/launch-readiness', description: 'Launch readiness checklist', icon: CheckCircle },
          { title: 'Launch Sprint', href: '/launch-sprint', description: 'Launch sprint planning', icon: Zap },
          { title: 'App Store Copy', href: '/app-store-copy', description: 'App store listing copy', icon: Smartphone },
        ],
      },
      {
        title: 'Growth & Acquisition',
        pages: [
          { title: 'Viral Growth', href: '/viral-growth', description: 'Viral growth tactics', icon: TrendingUp },
          { title: 'Growth Experiments', href: '/growth-experiments', description: 'Growth experiment tracking', icon: Activity },
          { title: 'Growth Warfare', href: '/growth-warfare', description: 'Aggressive growth strategies', icon: Zap },
          { title: 'User Acquisition', href: '/user-acquisition', description: 'User acquisition strategies', icon: Users },
          { title: 'Funnel Optimization', href: '/funnel-optimization', description: 'Conversion funnel optimization', icon: GitBranch },
          { title: 'Revenue Optimization', href: '/revenue-optimization', description: 'Revenue optimization strategies', icon: DollarSign },
          { title: 'PMF Scoreboard', href: '/pmf-scoreboard', description: 'Product-market fit tracking', icon: Target },
          { title: 'Unit Economics', href: '/unit-economics', description: 'Unit economics analysis', icon: BarChart3 },
          { title: 'Geographic Expansion', href: '/geographic-expansion', description: 'Geographic market expansion', icon: Globe },
        ],
      },
      {
        title: 'Competitive Intel',
        pages: [
          { title: 'Competitive Intel', href: '/competitive-intel', description: 'Competitive intelligence', icon: Eye },
          { title: 'Competitor Analysis', href: '/competitor-analysis', description: 'Competitor analysis dashboards', icon: BarChart3 },
          { title: 'Customer Intelligence', href: '/customer-intelligence', description: 'Customer intelligence insights', icon: Brain },
          { title: 'Pricing Strategy', href: '/pricing-strategy', description: 'Pricing strategy analysis', icon: DollarSign },
        ],
      },
      {
        title: 'Social & Influencer',
        pages: [
          { title: 'Social Media Tracker', href: '/social-media-tracker', description: 'Social media metrics', icon: Share2 },
          { title: 'Influencer List', href: '/influencer-list', description: 'Influencer partnership database', icon: Users },
          { title: 'Ambassador Program', href: '/ambassador-program', description: 'Brand ambassador program', icon: Star },
          { title: 'Offline Marketing', href: '/offline-marketing', description: 'Offline marketing tactics', icon: MapPin },
        ],
      },
      {
        title: 'Events',
        pages: [
          { title: 'Event Execution', href: '/event-execution', description: 'Event execution playbook', icon: Calendar },
          { title: 'Event Master Plan', href: '/event-master-plan', description: 'Event strategy master plan', icon: Target },
          { title: 'Events Playbook', href: '/events-playbook', description: 'Events execution guide', icon: BookOpen },
        ],
      },
    ],
    pages: [],
  },

  // ─── 11. HR & Operations ───────────────────────────────────────
  {
    id: 'hr-ops',
    title: 'HR & Operations',
    icon: Users,
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-400/10',
    borderColor: 'border-indigo-400/30',
    description: 'Hiring, operations, partnerships & SOPs',
    pages: [
      { title: 'Hiring Pipeline', href: '/hiring-pipeline', description: 'Hiring pipeline tracker', icon: GitBranch },
      { title: 'Hiring Playbook', href: '/hiring-playbook', description: 'Hiring playbook guide', icon: BookOpen },
      { title: 'Compensation Guide', href: '/compensation-guide', description: 'Compensation structure', icon: DollarSign },
      { title: 'Employee Handbook', href: '/employee-handbook', description: 'Employee handbook', icon: FileText },
      { title: 'HR Operations', href: '/hr-operations', description: 'HR operations dashboard', icon: Settings },
      { title: 'Performance Management', href: '/performance-management', description: 'Performance review system', icon: BarChart3 },
      { title: 'Diversity & Inclusion', href: '/diversity-inclusion', description: 'D&I program', icon: Heart },
      { title: 'Operations', href: '/operations', description: 'Operations dashboard', icon: Settings },
      { title: 'SOP', href: '/sop', description: 'Standard operating procedures', icon: FileText },
      { title: 'Issue Resolution', href: '/issue-resolution', description: 'Issue resolution system', icon: AlertTriangle },
      { title: 'Tasks', href: '/tasks', description: 'Task management system', icon: CheckCircle },
      { title: 'Vendor Directory', href: '/vendor-directory', description: 'Vendor database', icon: Store },
      { title: 'Partnerships', href: '/partnerships', description: 'Partnership management hub', icon: Handshake },
      { title: 'Partnership Framework', href: '/partnership-framework', description: 'Partnership framework guide', icon: Network },
      { title: 'Partnership Tiers', href: '/partnership-tiers', description: 'Tier structure', icon: Layers },
      { title: 'Co-Partner', href: '/co-partner', description: 'Co-partner program', icon: Users },
    ],
  },

  // ─── 12. Legal & Compliance ────────────────────────────────────
  {
    id: 'legal',
    title: 'Legal & Compliance',
    icon: Shield,
    color: 'text-slate-400',
    bgColor: 'bg-slate-400/10',
    borderColor: 'border-slate-400/30',
    description: 'Legal docs, licensing, contracts & policies',
    pages: [
      { title: 'Legal Compliance', href: '/legal-compliance', description: 'Legal compliance dashboard', icon: Shield },
      { title: 'Legal Docs', href: '/legal-docs', description: 'Legal documents repository', icon: FileText },
      { title: 'Legal Documents', href: '/legal-documents', description: 'Legal documentation hub', icon: FileText },
      { title: 'Licensing', href: '/licensing', description: 'Licensing requirements tracker', icon: Lock },
      { title: 'License Preparation', href: '/license-preparation', description: 'License preparation checklist', icon: CheckCircle },
      { title: 'Contracts', href: '/contracts', description: 'Contract templates library', icon: FileText },
      { title: 'Terms', href: '/terms', description: 'Terms of service', icon: FileText },
      { title: 'Privacy', href: '/privacy', description: 'Privacy policy', icon: Lock },
      { title: 'Policies', href: '/policies', description: 'Company policies hub', icon: Shield },
    ],
  },

  // ─── 13. Pitch Decks ──────────────────────────────────────────
  {
    id: 'decks',
    title: 'Pitch Decks',
    icon: Presentation,
    color: 'text-red-400',
    bgColor: 'bg-red-400/10',
    borderColor: 'border-red-400/30',
    description: 'Investor pitches, merchant decks & presentations',
    pages: [
      { title: 'Main Deck', href: '/deck', description: 'Primary investor pitch deck', icon: Presentation },
      { title: 'Final Deck', href: '/deck-final', description: 'Final investor presentation', icon: Trophy },
      { title: 'New Deck', href: '/deck-new', description: 'Latest updated deck', icon: Star },
      { title: 'Corporate Deck', href: '/deck-corporate', description: 'Corporate presentation', icon: Building2 },
      { title: 'Exhibition Deck', href: '/deck-exhibition', description: 'Exhibition booth deck', icon: Store },
      { title: '90-Second Deck', href: '/deck-90', description: 'Quick pitch — 90 seconds', icon: Clock },
      { title: 'Merchant Deck', href: '/deck-merchant', description: 'Merchant sales pitch', icon: Handshake },
      { title: 'Merchant Deck B', href: '/deck-merchant-b', description: 'Merchant deck variant B', icon: Handshake },
      { title: 'Cafe Deck', href: '/deck-cafe', description: 'Cafe merchant pitch', icon: Coffee },
      { title: 'Gold Deck', href: '/deck-gold', description: 'Gold jewelry pitch', icon: Coins },
      { title: 'Kang Deck', href: '/deck-kang', description: 'Kangaroo market pitch', icon: Store },
      { title: 'Salon Deck', href: '/deck-salon', description: 'Salon merchant pitch', icon: Scissors },
      { title: 'Supermarket Deck', href: '/deck-supermarket', description: 'Supermarket pitch', icon: ShoppingCart },
      { title: 'University Deck', href: '/deck-university', description: 'University campus pitch', icon: GraduationCap },
      { title: 'GV Deck', href: '/deck-gv', description: 'GCC Vibes pitch deck', icon: Globe },
    ],
  },

  // ─── 14. Public & Product Pages ────────────────────────────────
  {
    id: 'public',
    title: 'Public & Resources',
    icon: Globe,
    color: 'text-teal-400',
    bgColor: 'bg-teal-400/10',
    borderColor: 'border-teal-400/30',
    description: 'Public pages, templates, sales kits & product design',
    subcategories: [
      {
        title: 'Public Pages',
        pages: [
          { title: 'About', href: '/about', description: 'About Nuqta', icon: BookOpen },
          { title: 'Why Nuqta', href: '/why-nuqta', description: 'Why choose Nuqta', icon: Star },
          { title: 'Features', href: '/features', description: 'Product features overview', icon: Zap },
          { title: 'How It Works', href: '/how-it-works', description: 'How it works explainer', icon: Play },
          { title: 'Contact', href: '/contact', description: 'Contact us page', icon: Mail },
          { title: 'FAQ', href: '/faq', description: 'Frequently asked questions', icon: MessageSquare },
          { title: 'Careers', href: '/careers', description: 'Careers & jobs', icon: Briefcase },
          { title: 'Join Us', href: '/join-us', description: 'Join our team', icon: Users },
          { title: 'Team', href: '/team', description: 'Team members', icon: Users },
          { title: 'Landing V1', href: '/landing-v1', description: 'Landing page variant', icon: Globe },
          { title: 'Commitment', href: '/commitment', description: 'Our commitment statement', icon: Heart },
        ],
      },
      {
        title: 'Product & Design',
        pages: [
          { title: 'User Journey', href: '/user-journey', description: 'User journey mapping', icon: Map },
          { title: 'Customer Journeys', href: '/customer-journeys', description: 'Customer journey flows', icon: GitBranch },
          { title: 'Gamification', href: '/gamification', description: 'Gamification mechanics', icon: Star },
          { title: 'QR Design Specs', href: '/qr-design-specs', description: 'QR code design specs', icon: Code },
          { title: 'Explainer Video', href: '/explainer-video', description: 'Explainer video scripts', icon: Camera },
          { title: 'Card', href: '/card', description: 'Payment card products', icon: CreditCard },
          { title: 'Wasil Apps', href: '/wasil-apps', description: 'Wasil vertical apps', icon: Smartphone },
          { title: 'Wasil Verticals', href: '/wasil-verticals', description: 'Wasil vertical details', icon: Layers },
          { title: 'Company Structure', href: '/company-structure', description: 'Company structure docs', icon: Network },
          { title: 'Company Profile', href: '/company-profile', description: 'Company profile info', icon: Building2 },
          { title: 'Org Chart', href: '/org-chart', description: 'Organization chart', icon: Network },
        ],
      },
      {
        title: 'Templates & Sales',
        pages: [
          { title: 'Email Templates', href: '/email-templates', description: 'Email template library', icon: Mail },
          { title: 'SMS Templates', href: '/sms-templates', description: 'SMS template library', icon: Phone },
          { title: 'Support Templates', href: '/support-templates', description: 'Customer support templates', icon: MessageSquare },
          { title: 'Agency Pages', href: '/agency-pages', description: 'Agency landing pages', icon: Globe },
          { title: 'Sales Kit', href: '/sales-kit', description: 'Sales enablement kit', icon: Briefcase },
          { title: 'Sales Calendar', href: '/sales-calendar', description: 'Sales event calendar', icon: Calendar },
          { title: 'Business Playbook', href: '/business-playbook', description: 'Business operations playbook', icon: BookOpen },
          { title: 'Memo', href: '/memo', description: 'Internal memo system', icon: FileText },
          { title: 'Crisis Communication', href: '/crisis-communication', description: 'Crisis communication plan', icon: AlertTriangle },
          { title: 'Win Back', href: '/win-back', description: 'Win-back campaign strategies', icon: Heart },
        ],
      },
    ],
    pages: [],
  },
];

// ═══════════════════════════════════════════════════════════════════
// HELPER: Get all pages from a category (including subcategories)
// ═══════════════════════════════════════════════════════════════════
function getAllPages(category: Category): PageLink[] {
  const direct = category.pages || [];
  const sub = (category.subcategories || []).flatMap(sc => sc.pages);
  return [...direct, ...sub];
}

const totalPages = categories.reduce((sum, cat) => sum + getAllPages(cat).length, 0);

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════
export default function RTMNCentralHub() {
  const [activeCategory, setActiveCategory] = useState('rtmn-core');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  // Keyboard shortcut for search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setSearchQuery('');
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Search across all pages
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    const results: (PageLink & { categoryTitle: string; categoryColor: string })[] = [];
    categories.forEach(cat => {
      getAllPages(cat).forEach(page => {
        if (
          page.title.toLowerCase().includes(q) ||
          page.description.toLowerCase().includes(q) ||
          page.href.toLowerCase().includes(q) ||
          (page.arabic && page.arabic.includes(q))
        ) {
          results.push({ ...page, categoryTitle: cat.title, categoryColor: cat.color });
        }
      });
    });
    return results.slice(0, 20);
  }, [searchQuery]);

  const currentCategory = categories.find(c => c.id === activeCategory) || categories[0];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* ── Hero Section ──────────────────────────────────────────── */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/20 via-transparent to-purple-500/10" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          {/* Back link */}
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#c9a227] transition-colors mb-8">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Dashboard
          </Link>

          {/* Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a227] to-[#f4d35e] flex items-center justify-center">
                <Building2 className="w-7 h-7 text-[#0a1628]" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">
                  RTMN <span className="text-[#c9a227]">Central Hub</span>
                </h1>
                <p className="text-slate-400 text-sm">مركز رتمن الرئيسي</p>
              </div>
            </div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              The gateway to everything — {totalPages}+ pages organized across 11 companies and 26 products
            </p>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8">
            {[
              { label: 'Products', value: '26' },
              { label: 'Companies', value: '11' },
              { label: 'Pages', value: `${totalPages}+` },
              { label: 'Categories', value: '14' },
              { label: 'GCC Countries', value: '6' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-[#c9a227]">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div
              className="relative cursor-text"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (!searchOpen) setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
                placeholder={`Search ${totalPages}+ pages...`}
                className="w-full pl-12 pr-20 py-3.5 bg-slate-800/80 border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-[#c9a227]/50 focus:ring-1 focus:ring-[#c9a227]/30 transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 text-slate-500 text-xs">
                <Command className="w-3.5 h-3.5" />
                <span>K</span>
              </div>
            </div>

            {/* Search Results Dropdown */}
            {searchOpen && searchQuery.trim() && (
              <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-xl mt-2 bg-slate-800 border border-slate-600/50 rounded-2xl shadow-2xl z-50 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-slate-700/50">
                  <span className="text-xs text-slate-400">{searchResults.length} results</span>
                  <button onClick={() => { setSearchOpen(false); setSearchQuery(''); }} className="text-slate-400 hover:text-white">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {searchResults.length === 0 ? (
                    <div className="px-4 py-8 text-center text-slate-400 text-sm">
                      No pages found for &ldquo;{searchQuery}&rdquo;
                    </div>
                  ) : (
                    searchResults.map((result, i) => (
                      <Link
                        key={i}
                        href={result.href}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-slate-700/50 transition-colors"
                        onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                      >
                        <result.icon className={`w-4 h-4 ${result.categoryColor} flex-shrink-0`} />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-white truncate">{result.title}</div>
                          <div className="text-xs text-slate-400 truncate">{result.description}</div>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${result.categoryColor} bg-slate-700/50 whitespace-nowrap`}>
                          {result.categoryTitle}
                        </span>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ── Main Content: Sidebar + Cards ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Mobile: horizontal scroll tabs */}
          <div className="lg:hidden overflow-x-auto -mx-4 px-4 pb-4">
            <div className="flex gap-2 min-w-max">
              {categories.map(cat => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                const pageCount = getAllPages(cat).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-[#c9a227] text-black'
                        : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    <Icon size={14} />
                    {cat.title}
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-black/20' : 'bg-slate-700'}`}>
                      {pageCount}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop: vertical sidebar */}
          <aside className="hidden lg:block lg:w-72 flex-shrink-0">
            <nav className="sticky top-8 space-y-1">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 mb-3">
                Categories
              </div>
              {categories.map(cat => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                const pageCount = getAllPages(cat).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg ${
                      isActive
                        ? `${cat.bgColor} ${cat.color} border-l-2 ${cat.borderColor}`
                        : 'text-slate-400 hover:text-white hover:bg-slate-700/50 border-l-2 border-transparent'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="flex-1 text-left">{cat.title}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      isActive ? `${cat.bgColor} ${cat.color}` : 'bg-slate-800 text-slate-500'
                    }`}>
                      {pageCount}
                    </span>
                  </button>
                );
              })}

              {/* Sidebar summary */}
              <div className="mt-6 pt-4 border-t border-slate-700/50 px-4">
                <div className="text-xs text-slate-500">
                  <div className="flex justify-between mb-1">
                    <span>Total Pages</span>
                    <span className="text-[#c9a227]">{totalPages}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Categories</span>
                    <span className="text-[#c9a227]">{categories.length}</span>
                  </div>
                </div>
              </div>
            </nav>
          </aside>

          {/* Content Area */}
          <main className="flex-1 min-w-0">
            {/* Category Header */}
            <div className={`flex items-center gap-4 mb-6 p-4 rounded-xl border ${currentCategory.borderColor} ${currentCategory.bgColor}`}>
              <div className={`w-12 h-12 rounded-xl ${currentCategory.bgColor} flex items-center justify-center`}>
                <currentCategory.icon className={`w-6 h-6 ${currentCategory.color}`} />
              </div>
              <div>
                <h2 className={`text-xl font-bold ${currentCategory.color}`}>{currentCategory.title}</h2>
                <p className="text-slate-400 text-sm">{currentCategory.description}</p>
              </div>
              <span className={`ml-auto text-sm font-semibold ${currentCategory.color}`}>
                {getAllPages(currentCategory).length} pages
              </span>
            </div>

            {/* Pages Grid — with subcategories or flat */}
            {currentCategory.subcategories && currentCategory.subcategories.length > 0 ? (
              // Subcategory layout
              <div className="space-y-8">
                {currentCategory.subcategories.map(sub => (
                  <div key={sub.title}>
                    <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${currentCategory.color.replace('text-', 'bg-')}`} />
                      {sub.title}
                      <span className="text-xs text-slate-500 font-normal">({sub.pages.length})</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                      {sub.pages.map(page => (
                        <PageCard key={page.href} page={page} color={currentCategory.color} borderColor={currentCategory.borderColor} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Flat grid layout
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                {currentCategory.pages.map(page => (
                  <PageCard key={page.href} page={page} color={currentCategory.color} borderColor={currentCategory.borderColor} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* ── Quick Access Bar ──────────────────────────────────────── */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Quick Access</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'RTMN Story', href: '/rtmn-story', icon: Network, color: 'bg-[#c9a227] text-[#0a1628]' },
              { label: 'Business Solutions', href: '/business-solutions', icon: Briefcase, color: 'bg-[#c9a227] text-[#0a1628]' },
              { label: 'RTMN Group', href: '/rtmn-group', icon: Building2, color: 'bg-[#c9a227] text-[#0a1628]' },
              { label: 'Complete Roadmap', href: '/complete-roadmap', icon: Map, color: 'bg-purple-600 text-white' },
              { label: 'Documentation', href: '/documentation', icon: BookOpen, color: 'bg-blue-600 text-white' },
              { label: 'Dashboard', href: '/dashboard', icon: BarChart3, color: 'bg-emerald-600 text-white' },
              { label: 'Ecosystem', href: '/rtmn-ecosystem', icon: Globe, color: 'bg-slate-700 text-white' },
              { label: 'Main Deck', href: '/deck', icon: Presentation, color: 'bg-slate-700 text-white' },
              { label: 'Executive Team', href: '/executive-team', icon: Crown, color: 'bg-slate-700 text-white' },
            ].map(link => (
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

      <GlobalFooter />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// PAGE CARD COMPONENT
// ═══════════════════════════════════════════════════════════════════
function PageCard({ page, color, borderColor }: { page: PageLink; color: string; borderColor: string }) {
  return (
    <Link
      href={page.href}
      className={`group flex items-start gap-3 p-4 bg-slate-800/40 border border-slate-700/40 rounded-xl hover:${borderColor} hover:bg-slate-800/70 transition-all duration-200`}
    >
      <div className={`w-9 h-9 rounded-lg bg-slate-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700/80 transition-colors`}>
        <page.icon className={`w-4.5 h-4.5 ${color} opacity-70 group-hover:opacity-100 transition-opacity`} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-semibold text-white group-hover:text-[#c9a227] transition-colors truncate">
            {page.title}
          </h4>
          {page.arabic && (
            <span className="text-xs text-slate-500 font-normal" dir="rtl">{page.arabic}</span>
          )}
          {page.status === 'built' && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">BUILT</span>
          )}
          {page.status === 'planned' && page.timeline && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-700 text-slate-400">{page.timeline}</span>
          )}
        </div>
        <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{page.description}</p>
      </div>
      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-[#c9a227] flex-shrink-0 mt-1 transition-colors" />
    </Link>
  );
}
