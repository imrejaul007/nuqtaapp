'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Network, CheckCircle, Clock, Rocket, Sparkles, Globe, Target,
  Users, Store, Building2, TrendingUp, ArrowRight, Star, Gift, Shield,
  CreditCard, Coins, Brain, Zap, ChevronDown, ChevronUp, Play,
  ShoppingBag, Truck, Home, Car, Plane, Wallet, Package, Crown,
  Heart, Phone, Smartphone, MessageSquare, Map, Coffee, Utensils,
  ShoppingCart, Pill, Baby, Sparkle, Scissors, Wrench, Shirt,
  Tv, Flower2, Cake, UtensilsCrossed, Droplets, Beer, Moon,
  PartyPopper, Gift as GiftIcon, Tent, Mountain, Palmtree, Ship,
  Building, UsersRound, Calendar, BookOpen, Briefcase, Megaphone,
  BarChart3, Trophy, Ticket, Award, GraduationCap, PiggyBank,
  CreditCard as CreditCardIcon, Receipt, LineChart, Percent, FileText,
  Activity, Dumbbell, Salad, Stethoscope, Dog, Hammer, Leaf,
  Lock, Gamepad2, Dice1, HelpCircle, Flame, Medal, Camera,
  Vote, Layers, Database, Server, Cloud, Eye, ArrowLeftRight,
  Send, BadgePercent, Calculator, Lightbulb
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';
import { NuqtaMainLogo } from '@/components/CompanyLogos';

// RTMN Ecosystem Categories
const ecosystemCategories = [
  {
    id: 'nuqta-core',
    name: 'Nuqta Core',
    arabic: 'نقطة الأساسي',
    description: 'The foundation - super-app, AI assistant, discovery, gamification',
    color: 'from-[#c9a227] to-amber-600',
    textColor: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]',
    icon: Crown,
    apps: [
      { name: 'Nuqta', arabic: 'نقطة', status: 'built', description: 'Super-app hub - unified wallet, membership, rewards', icon: Crown, href: '/nuqta-plus' },
      { name: 'AI-R', arabic: 'ذكاء', status: 'planned', description: 'Personal AI assistant - recommendations, automation, insights', icon: Brain, timeline: 'Q3 2027' },
      { name: 'BuzzLoop', arabic: 'بزلوب', status: 'planned', description: 'Personalized discovery feed - trending, local, interests', icon: Sparkles, timeline: 'Q4 2027' },
      { name: 'CoinHunt', arabic: 'كوين هنت', status: 'planned', description: 'Gamified earning - quests, challenges, treasure hunts', icon: Coins, timeline: 'Q2 2027' },
      { name: 'LocalEdge', arabic: 'لوكال إيدج', status: 'planned', description: 'Hyperlocal recommendations - neighborhood gems, hidden spots', icon: Map, timeline: 'Q1 2028' },
    ]
  },
  {
    id: 'wasil-lifestyle',
    name: 'Wasil Lifestyle',
    arabic: 'واصل لايف',
    description: '24 vertical delivery apps under one umbrella',
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500',
    icon: Truck,
    apps: [
      { name: 'Wasil Hub', arabic: 'واصل', status: 'built', description: 'Quick commerce hub - 60min delivery across 12 categories', icon: Truck, href: '/wasil' },
      { name: 'Dinezy', arabic: 'داينزي', status: 'planned', description: 'Food delivery - restaurants, cloud kitchens, local favorites', icon: Utensils, timeline: 'Q2 2027' },
      { name: 'Grocify', arabic: 'غروسيفاي', status: 'planned', description: 'Grocery delivery - supermarkets, fresh produce, pantry', icon: ShoppingCart, timeline: 'Q2 2027' },
      { name: 'Glowzy', arabic: 'غلوزي', status: 'planned', description: 'Beauty & salon - at-home services, products, appointments', icon: Sparkle, timeline: 'Q3 2027' },
      { name: 'MediEarn', arabic: 'ميدي إيرن', status: 'planned', description: 'Pharmacy delivery - prescriptions, OTC, health products', icon: Pill, timeline: 'Q2 2027' },
      { name: 'PetPals', arabic: 'بت بالز', status: 'planned', description: 'Pet supplies - food, accessories, grooming, vet booking', icon: Dog, timeline: 'Q4 2027' },
      { name: 'CleanEZ', arabic: 'كلين إي زد', status: 'planned', description: 'Home cleaning - deep clean, regular, move-in/out', icon: Sparkle, timeline: 'Q3 2027' },
      { name: 'Handyzy', arabic: 'هاندي زي', status: 'planned', description: 'Home repairs - plumbing, electrical, AC, handyman', icon: Wrench, timeline: 'Q4 2027' },
      { name: 'Sparklean', arabic: 'سباركلين', status: 'planned', description: 'Laundry & dry cleaning - pickup, wash, fold, deliver', icon: Shirt, timeline: 'Q3 2027' },
      { name: 'Stylezy', arabic: 'ستايلزي', status: 'planned', description: 'Fashion delivery - clothing, shoes, accessories', icon: Shirt, timeline: 'Q4 2027' },
      { name: 'TechDrop', arabic: 'تك دروب', status: 'planned', description: 'Electronics delivery - gadgets, accessories, repairs', icon: Tv, timeline: 'Q1 2028' },
      { name: 'Bloominz', arabic: 'بلومينز', status: 'planned', description: 'Flower delivery - bouquets, arrangements, plants', icon: Flower2, timeline: 'Q4 2027' },
      { name: 'Cakezy', arabic: 'كيكزي', status: 'planned', description: 'Bakery & desserts - cakes, pastries, custom orders', icon: Cake, timeline: 'Q3 2027' },
      { name: 'Feastly', arabic: 'فيستلي', status: 'planned', description: 'Premium catering - events, corporate, private chef', icon: UtensilsCrossed, timeline: 'Q1 2028' },
      { name: 'Savorly', arabic: 'سافورلي', status: 'planned', description: 'Meal kits - recipes, pre-portioned ingredients', icon: UtensilsCrossed, timeline: 'Q2 2028' },
      { name: 'AquaFresh', arabic: 'أكوا فريش', status: 'planned', description: 'Water delivery - bottles, dispensers, subscriptions', icon: Droplets, timeline: 'Q3 2027' },
      { name: 'IceColdz', arabic: 'آيس كولدز', status: 'planned', description: 'Cold beverages - juices, smoothies, ice cream', icon: Beer, timeline: 'Q4 2027' },
      { name: 'Brewzy', arabic: 'بروزي', status: 'planned', description: 'Coffee & tea - specialty coffee, tea, brewing equipment', icon: Coffee, timeline: 'Q3 2027' },
      { name: 'QuickDrop', arabic: 'كويك دروب', status: 'planned', description: 'Instant delivery - 15-30 min essentials', icon: Zap, timeline: 'Q2 2027' },
      { name: 'NightOwl', arabic: 'نايت أول', status: 'planned', description: 'Late-night delivery - 24/7 essentials & cravings', icon: Moon, timeline: 'Q4 2027' },
      { name: 'Kidszone', arabic: 'كيدز زون', status: 'planned', description: 'Kids products - toys, clothes, school supplies', icon: Baby, timeline: 'Q1 2028' },
      { name: 'Seniorly', arabic: 'سينيورلي', status: 'planned', description: 'Senior care - medical supplies, home help, wellness', icon: Heart, timeline: 'Q2 2028' },
      { name: 'OfficeEats', arabic: 'أوفيس إيتس', status: 'planned', description: 'Corporate catering - office lunches, meetings, events', icon: Building2, timeline: 'Q1 2028' },
      { name: 'PartyPack', arabic: 'بارتي باك', status: 'planned', description: 'Event supplies - decorations, disposables, rentals', icon: PartyPopper, timeline: 'Q4 2027' },
      { name: 'GiftWrap', arabic: 'غيفت راب', status: 'planned', description: 'Gift delivery - curated gifts, wrapping, personal messages', icon: GiftIcon, timeline: 'Q4 2027' },
    ]
  },
  {
    id: 'travel-adventure',
    name: 'Travel & Adventure',
    arabic: 'سفر ومغامرة',
    description: 'Complete travel ecosystem for GCC explorers',
    color: 'from-cyan-500 to-teal-600',
    textColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500',
    icon: Plane,
    apps: [
      { name: 'Safar', arabic: 'سفر', status: 'built', description: 'Travel hub - visas, flights, hotels, experiences', icon: Plane, href: '/safar' },
      { name: 'Airzy', arabic: 'إيرزي', status: 'planned', description: 'Flight bookings - compare, book, manage trips', icon: Plane, timeline: 'Q3 2027' },
      { name: 'TravoPay', arabic: 'ترافو باي', status: 'planned', description: 'Travel wallet - multi-currency, expense tracking', icon: Wallet, timeline: 'Q3 2027' },
      { name: 'Weekendzy', arabic: 'ويكند زي', status: 'planned', description: 'Weekend getaways - curated short trips', icon: Calendar, timeline: 'Q4 2027' },
      { name: 'Trekzy', arabic: 'تريك زي', status: 'planned', description: 'Adventure activities - hiking, climbing, water sports', icon: Mountain, timeline: 'Q1 2028' },
      { name: 'Campzy', arabic: 'كامب زي', status: 'planned', description: 'Camping & outdoor - gear rental, campsites', icon: Tent, timeline: 'Q1 2028' },
      { name: 'Staycay', arabic: 'ستايكاي', status: 'planned', description: 'Staycations - hotel deals, day passes, spa', icon: Building, timeline: 'Q3 2027' },
      { name: 'WildEscape', arabic: 'وايلد إسكيب', status: 'planned', description: 'Wildlife experiences - safaris, nature tours', icon: Mountain, timeline: 'Q2 2028' },
      { name: 'DesertVibes', arabic: 'ديزرت فايبز', status: 'planned', description: 'Desert experiences - dune bashing, camping, BBQ', icon: Palmtree, timeline: 'Q4 2027' },
      { name: 'BeachLife', arabic: 'بيتش لايف', status: 'planned', description: 'Beach activities - clubs, water sports, boat trips', icon: Palmtree, timeline: 'Q3 2027' },
      { name: 'CityExplore', arabic: 'سيتي إكسبلور', status: 'planned', description: 'City tours - walking, bus, private guides', icon: Building, timeline: 'Q3 2027' },
      { name: 'Cruise+', arabic: 'كروز+', status: 'planned', description: 'Cruise bookings - luxury, family, adventure', icon: Ship, timeline: 'Q2 2028' },
    ]
  },
  {
    id: 'community-social',
    name: 'Community & Social',
    arabic: 'مجتمع واجتماعي',
    description: 'Connect, network, and build communities',
    color: 'from-pink-500 to-rose-500',
    textColor: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500',
    icon: UsersRound,
    apps: [
      { name: 'Circlezy', arabic: 'سيركل زي', status: 'planned', description: 'Interest-based communities - hobbies, passions, groups', icon: UsersRound, timeline: 'Q1 2028' },
      { name: 'Hangoutzy', arabic: 'هانج آوت زي', status: 'planned', description: 'Social meetups - events, activities, new friends', icon: Users, timeline: 'Q2 2028' },
      { name: 'Vibezy', arabic: 'فايب زي', status: 'planned', description: 'Local events - parties, concerts, exhibitions', icon: PartyPopper, timeline: 'Q1 2028' },
      { name: 'Campuszy', arabic: 'كامبس زي', status: 'planned', description: 'Student communities - universities, study groups', icon: GraduationCap, timeline: 'Q3 2028' },
      { name: 'ParentHub', arabic: 'بارنت هب', status: 'planned', description: 'Parenting network - tips, playdates, support', icon: Baby, timeline: 'Q2 2028' },
      { name: 'FitSquad', arabic: 'فت سكواد', status: 'planned', description: 'Fitness groups - workout buddies, challenges', icon: Dumbbell, timeline: 'Q2 2028' },
      { name: 'BookClubz', arabic: 'بوك كلبز', status: 'planned', description: 'Reading communities - clubs, reviews, swaps', icon: BookOpen, timeline: 'Q3 2028' },
      { name: 'Skillsharez', arabic: 'سكيل شير زي', status: 'planned', description: 'Skill exchange - teach, learn, collaborate', icon: Lightbulb, timeline: 'Q4 2028' },
      { name: 'VolunteerHub', arabic: 'فولنتير هب', status: 'planned', description: 'Volunteering - opportunities, NGOs, community service', icon: Heart, timeline: 'Q3 2028' },
      { name: 'NeighborNet', arabic: 'نيبر نت', status: 'planned', description: 'Neighborhood connect - local help, services, events', icon: Home, timeline: 'Q2 2028' },
    ]
  },
  {
    id: 'growth-stack',
    name: 'Growth Stack',
    arabic: 'نمو ستاك',
    description: 'Tools for creators, freelancers, and businesses',
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500',
    icon: TrendingUp,
    apps: [
      { name: 'Gigzy', arabic: 'غيغ زي', status: 'planned', description: 'Freelance marketplace - gigs, projects, talent', icon: Briefcase, timeline: 'Q2 2027' },
      { name: 'BuzzLocal', arabic: 'بز لوكال', status: 'planned', description: 'Local influencer platform - nano/micro creators', icon: Megaphone, timeline: 'Q3 2027' },
      { name: 'Z-Events', arabic: 'زي إيفنتس', status: 'planned', description: 'Event ticketing - concerts, sports, experiences', icon: Ticket, timeline: 'Q2 2027' },
      { name: 'MemberPlus', arabic: 'ممبر بلس', status: 'planned', description: 'Subscription management - all memberships in one', icon: Crown, timeline: 'Q4 2027' },
      { name: 'Brandzy', arabic: 'براند زي', status: 'planned', description: 'Brand partnerships - collabs, sponsorships', icon: Megaphone, timeline: 'Q1 2028' },
      { name: 'Pollzy', arabic: 'بول زي', status: 'planned', description: 'Surveys & feedback - earn for opinions', icon: HelpCircle, timeline: 'Q3 2027' },
      { name: 'Leadzy', arabic: 'ليد زي', status: 'planned', description: 'Lead generation - connect businesses with customers', icon: Target, timeline: 'Q4 2027' },
      { name: 'ReferralHub', arabic: 'ريفرال هب', status: 'planned', description: 'Referral programs - track, earn, redeem', icon: Users, timeline: 'Q2 2027' },
      { name: 'LoyaltyMax', arabic: 'لويالتي ماكس', status: 'planned', description: 'Loyalty programs - unified rewards across brands', icon: Award, timeline: 'Q3 2027' },
      { name: 'Contestify', arabic: 'كونتستيفاي', status: 'planned', description: 'Competitions - enter, win, share prizes', icon: Trophy, timeline: 'Q4 2027' },
      { name: 'GrowthLab', arabic: 'غروث لاب', status: 'planned', description: 'Analytics - track performance, insights, growth', icon: BarChart3, timeline: 'Q1 2028' },
    ]
  },
  {
    id: 'education',
    name: 'Education',
    arabic: 'تعليم',
    description: 'Learning and skill development for all ages',
    color: 'from-indigo-500 to-blue-600',
    textColor: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500',
    icon: GraduationCap,
    apps: [
      { name: 'Learnzy', arabic: 'ليرن زي', status: 'planned', description: 'Online courses - skills, hobbies, professional', icon: GraduationCap, timeline: 'Q2 2028' },
      { name: 'Tutorly', arabic: 'تيوتورلي', status: 'planned', description: 'Tutoring - 1-on-1, group, all subjects', icon: BookOpen, timeline: 'Q3 2028' },
      { name: 'Certify+', arabic: 'سيرتيفاي+', status: 'planned', description: 'Certifications - professional credentials, exams', icon: Award, timeline: 'Q4 2028' },
      { name: 'SkillBoost', arabic: 'سكيل بوست', status: 'planned', description: 'Professional development - workshops, bootcamps', icon: TrendingUp, timeline: 'Q3 2028' },
      { name: 'KidLearn', arabic: 'كيد ليرن', status: 'planned', description: 'Children education - interactive, fun learning', icon: Baby, timeline: 'Q4 2028' },
    ]
  },
  {
    id: 'finance',
    name: 'Finance',
    arabic: 'مالية',
    description: 'Complete Islamic fintech stack',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500',
    icon: Wallet,
    apps: [
      { name: 'Qist', arabic: 'قسط', status: 'built', description: 'BNPL - split payments 3-12 months, 0% fees', icon: Wallet, href: '/qist' },
      { name: 'Hawil', arabic: 'حوّل', status: 'built', description: 'Remittance - Google rate, 0% markup, 8+ corridors', icon: ArrowLeftRight, href: '/hawil' },
      { name: 'NuqtaPay', arabic: 'نقطة باي', status: 'planned', description: 'Digital wallet - QR payments, P2P transfers', icon: CreditCardIcon, timeline: 'Q2 2027' },
      { name: 'Splitzy', arabic: 'سبليت زي', status: 'planned', description: 'Bill splitting - groups, events, households', icon: Receipt, timeline: 'Q3 2027' },
      { name: 'Savezy+', arabic: 'سيف زي+', status: 'planned', description: 'Savings goals - round-ups, auto-save, vaults', icon: PiggyBank, timeline: 'Q4 2027' },
      { name: 'Investzy', arabic: 'إنفست زي', status: 'planned', description: 'Micro-investing - stocks, gold, Shariah-compliant', icon: LineChart, timeline: 'Q1 2028' },
      { name: 'Insurzy', arabic: 'إنشور زي', status: 'planned', description: 'Insurance marketplace - health, car, travel, home', icon: Shield, timeline: 'Q2 2028' },
      { name: 'Taxzy', arabic: 'تاكس زي', status: 'planned', description: 'Tax filing - VAT, corporate, personal (when applicable)', icon: FileText, timeline: 'Q1 2029' },
      { name: 'CreditBoost', arabic: 'كريديت بوست', status: 'planned', description: 'Credit building - score tracking, improvement tips', icon: TrendingUp, timeline: 'Q3 2027' },
      { name: 'BudgetPro', arabic: 'بدجت برو', status: 'planned', description: 'Budgeting - expense tracking, categories, insights', icon: Calculator, timeline: 'Q3 2027' },
      { name: 'Wealthzy', arabic: 'ويلث زي', status: 'planned', description: 'Wealth management - portfolio, advisor access', icon: LineChart, timeline: 'Q2 2028' },
      { name: 'CryptoLite', arabic: 'كريبتو لايت', status: 'planned', description: 'Crypto exposure - education, small investments', icon: Coins, timeline: 'Q4 2028' },
    ]
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    arabic: 'عقارات',
    description: 'Complete property solutions',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500',
    icon: Home,
    apps: [
      { name: 'Sakin', arabic: 'ساكن', status: 'built', description: 'Rent financing - deposit + rent over 12 months', icon: Home, href: '/sakin' },
      { name: 'Ajer', arabic: 'أجر', status: 'built', description: 'Rental marketplace - cars, electronics, fashion, gear', icon: Package, href: '/ajer' },
    ]
  },
  {
    id: 'mobility',
    name: 'Mobility',
    arabic: 'تنقل',
    description: 'Transportation and movement',
    color: 'from-green-400 to-emerald-500',
    textColor: 'text-green-400',
    bgColor: 'bg-green-400/10',
    borderColor: 'border-green-400',
    icon: Car,
    apps: [
      { name: 'Rakab', arabic: 'ركب', status: 'built', description: 'Ride-hailing - 85% driver cut, Google rate for tourists', icon: Car, href: '/rakab' },
    ]
  },
  {
    id: 'health-wellness',
    name: 'Health & Wellness',
    arabic: 'صحة وعافية',
    description: 'Physical and mental wellbeing',
    color: 'from-rose-500 to-pink-600',
    textColor: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500',
    icon: Heart,
    apps: [
      { name: 'FitLife', arabic: 'فت لايف', status: 'planned', description: 'Fitness tracking - workouts, goals, challenges', icon: Dumbbell, timeline: 'Q2 2028' },
      { name: 'MindCalm', arabic: 'مايند كالم', status: 'planned', description: 'Mental wellness - meditation, therapy, journaling', icon: Brain, timeline: 'Q3 2028' },
      { name: 'NutriPlan', arabic: 'نيوتري بلان', status: 'planned', description: 'Nutrition - meal plans, calorie tracking, dietitians', icon: Salad, timeline: 'Q3 2028' },
      { name: 'DocConnect', arabic: 'دوك كونكت', status: 'planned', description: 'Telemedicine - video consults, prescriptions, records', icon: Stethoscope, timeline: 'Q2 2028' },
      { name: 'WellnessHub', arabic: 'ويلنس هب', status: 'planned', description: 'Holistic health - spas, yoga, alternative medicine', icon: Heart, timeline: 'Q4 2028' },
    ]
  },
  {
    id: 'luxury',
    name: 'Luxury',
    arabic: 'فاخر',
    description: 'Premium experiences for HNWIs',
    color: 'from-amber-500 to-yellow-600',
    textColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500',
    icon: Crown,
    apps: [
      { name: 'Fakhir', arabic: 'فاخر', status: 'built', description: 'Luxury concierge - 24/7 white-glove service for HNWIs', icon: Crown, href: '/fakhir' },
    ]
  },
  {
    id: 'pets-home-auto',
    name: 'Pets, Home & Auto',
    arabic: 'حيوانات ومنزل وسيارات',
    description: 'Life essentials management',
    color: 'from-teal-500 to-cyan-600',
    textColor: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500',
    icon: Home,
    apps: [
      { name: 'PawCare', arabic: 'باو كير', status: 'planned', description: 'Pet services - vets, grooming, sitting, walking', icon: Dog, timeline: 'Q3 2028' },
      { name: 'HomeHub', arabic: 'هوم هب', status: 'planned', description: 'Home management - bills, maintenance, reminders', icon: Home, timeline: 'Q2 2028' },
      { name: 'AutoCare', arabic: 'أوتو كير', status: 'planned', description: 'Vehicle services - maintenance, fuel, insurance', icon: Car, timeline: 'Q3 2028' },
      { name: 'GardenPro', arabic: 'غاردن برو', status: 'planned', description: 'Gardening - landscaping, plant care, equipment', icon: Leaf, timeline: 'Q4 2028' },
      { name: 'SmartHome', arabic: 'سمارت هوم', status: 'planned', description: 'IoT integration - smart devices, automation', icon: Smartphone, timeline: 'Q1 2029' },
      { name: 'SecurityPlus', arabic: 'سيكيوريتي+', status: 'planned', description: 'Home security - cameras, alarms, monitoring', icon: Lock, timeline: 'Q1 2029' },
    ]
  },
  {
    id: 'ultra-light-viral',
    name: 'Ultra-Light Viral',
    arabic: 'خفيف وفيروسي',
    description: 'Engagement-first gamified micro-apps',
    color: 'from-yellow-400 to-orange-500',
    textColor: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
    borderColor: 'border-yellow-400',
    icon: Gamepad2,
    apps: [
      { name: 'Memezy', arabic: 'ميم زي', status: 'planned', description: 'Meme creation - templates, sharing, contests', icon: Camera, timeline: 'Q2 2027' },
      { name: 'Quizzy', arabic: 'كويز زي', status: 'planned', description: 'Trivia games - daily quizzes, earn coins', icon: HelpCircle, timeline: 'Q2 2027' },
      { name: 'Spinzy', arabic: 'سبين زي', status: 'planned', description: 'Wheel games - spin to win, daily rewards', icon: Dice1, timeline: 'Q2 2027' },
      { name: 'Scratchzy', arabic: 'سكراتش زي', status: 'planned', description: 'Scratch cards - instant wins, daily cards', icon: Gift, timeline: 'Q2 2027' },
      { name: 'Pollzy', arabic: 'بول زي', status: 'planned', description: 'Quick polls - vote, earn, see results', icon: Vote, timeline: 'Q3 2027' },
      { name: 'Confessly', arabic: 'كونفسلي', status: 'planned', description: 'Anonymous confessions - share, react, trend', icon: MessageSquare, timeline: 'Q4 2027' },
      { name: 'Dailywin', arabic: 'ديلي وين', status: 'planned', description: 'Daily rewards - check-in, streak bonuses', icon: Gift, timeline: 'Q2 2027' },
      { name: 'Streakzy', arabic: 'ستريك زي', status: 'planned', description: 'Habit streaks - build habits, earn rewards', icon: Flame, timeline: 'Q3 2027' },
      { name: 'Rankzy', arabic: 'رانك زي', status: 'planned', description: 'Leaderboards - compete, climb, win prizes', icon: Trophy, timeline: 'Q3 2027' },
      { name: 'Badgezy', arabic: 'بادج زي', status: 'planned', description: 'Achievement badges - collect, showcase, trade', icon: Medal, timeline: 'Q3 2027' },
      { name: 'Challengezy', arabic: 'تشالنج زي', status: 'planned', description: 'Social challenges - compete with friends', icon: Target, timeline: 'Q4 2027' },
      { name: 'Snapzy', arabic: 'سناب زي', status: 'planned', description: 'Photo contests - themes, votes, prizes', icon: Camera, timeline: 'Q4 2027' },
      { name: 'Votezy', arabic: 'فوت زي', status: 'planned', description: 'Voting games - this or that, rankings', icon: Vote, timeline: 'Q3 2027' },
      { name: 'Predictzy', arabic: 'بريديكت زي', status: 'planned', description: 'Predictions - sports, events, outcomes', icon: Target, timeline: 'Q4 2027' },
      { name: 'Matchzy', arabic: 'ماتش زي', status: 'planned', description: 'Matching games - pairs, memory, puzzles', icon: Layers, timeline: 'Q4 2027' },
      { name: 'Flipzy', arabic: 'فليب زي', status: 'planned', description: 'Card flip games - reveal, collect, win', icon: Layers, timeline: 'Q4 2027' },
      { name: 'Bouncezy', arabic: 'باونس زي', status: 'planned', description: 'Bounce games - casual, addictive, shareable', icon: Play, timeline: 'Q1 2028' },
      { name: 'Collectzy', arabic: 'كوليكت زي', status: 'planned', description: 'Digital collectibles - NFT-lite, trading', icon: Star, timeline: 'Q1 2028' },
    ]
  },
  {
    id: 'merchant-b2b',
    name: 'Merchant B2B Suite',
    arabic: 'أعمال التجار',
    description: 'Tools for merchants and businesses',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
    icon: Store,
    apps: [
      { name: 'BizOne', arabic: 'بيز ون', status: 'planned', description: 'Business dashboard - unified merchant portal', icon: Store, timeline: 'Q2 2027' },
      { name: 'NextaBizz', arabic: 'نكستا بيز', status: 'planned', description: 'Business tools - POS, invoicing, payments', icon: Smartphone, timeline: 'Q3 2027' },
      { name: 'Inventora', arabic: 'إنفنتورا', status: 'planned', description: 'Inventory management - stock, orders, alerts', icon: Package, timeline: 'Q3 2027' },
      { name: 'Adzy', arabic: 'أدزي', status: 'planned', description: 'Advertising platform - targeted ads in ecosystem', icon: Megaphone, timeline: 'Q4 2027' },
      { name: 'Tamkeen', arabic: 'تمكين', status: 'planned', description: 'Business-in-a-Box — register, operate, comply, grow', icon: Rocket, timeline: 'Q3 2027' },
    ]
  },
  {
    id: 'ai-infrastructure',
    name: 'AI & Infrastructure',
    arabic: 'ذكاء اصطناعي وبنية تحتية',
    description: 'The brain and backbone of the ecosystem',
    color: 'from-slate-500 to-gray-600',
    textColor: 'text-slate-400',
    bgColor: 'bg-slate-500/10',
    borderColor: 'border-slate-500',
    icon: Server,
    apps: [
      { name: 'AIRA', arabic: 'أيرا', status: 'planned', description: 'AI recommendation engine - personalization at scale', icon: Brain, timeline: 'Q3 2027' },
      { name: 'Rabtul', arabic: 'ربطل', status: 'planned', description: 'API/integration layer - connect everything', icon: Layers, timeline: 'Q2 2027' },
      { name: 'DataPulse', arabic: 'داتا بالس', status: 'planned', description: 'Analytics platform - insights, ML, reporting', icon: BarChart3, timeline: 'Q3 2027' },
      { name: 'CloudSync', arabic: 'كلاود سينك', status: 'planned', description: 'Cloud infrastructure - multi-region, scalable', icon: Cloud, timeline: 'Q2 2027' },
      { name: 'SecureVault', arabic: 'سيكيور فولت', status: 'planned', description: 'Security services - encryption, compliance, fraud', icon: Lock, timeline: 'Q2 2027' },
    ]
  },
  {
    id: 'gamification',
    name: 'Gamification Engine',
    arabic: 'محرك الألعاب',
    description: 'Cross-ecosystem engagement layer',
    color: 'from-pink-500 to-rose-500',
    textColor: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500',
    icon: Gamepad2,
    apps: [
      { name: 'Gamification Hub', arabic: 'ألعاب', status: 'built', description: 'Coins, levels, badges, challenges across all products', icon: Gamepad2, href: '/gamification' },
    ]
  },
];

// Ecosystem Build Steps - Priority-wise build order across ALL 10 sister companies
// NOT building one company at a time — building what's needed first across companies
// Aligned with Rabtul Tech sprint plan + RTMN Master Documentation specs
const ecosystemBuildSteps = [
  {
    step: 1,
    name: 'Rabtul Infrastructure',
    tagline: 'Shared Tech Backbone for 100+ Apps',
    icon: Brain,
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500',
    phase: 'Phase 1 — Foundation',
    phaseColor: 'bg-emerald-500/20 text-emerald-400',
    timeline: 'Month 1-2 (Sprint 1-2)',
    sisterCompanies: ['Rabtul'],
    whyNow: 'Everything runs on Rabtul. Before any consumer or merchant app, we build 5 shared SDKs (AuthSDK, WalletSDK, OrderSDK, RuleSDK, EventSDK), API Gateway, Event Bus, Data Platform, and Security. Every future product across all 10 companies plugs into this — build once, reuse 100+ times.',
    whatItBuilds: [
      'AuthSDK — OTP login, JWT tokens, SSO for all apps',
      'WalletSDK — 4 coin types (Promo→Branded→Nuqta→Cash debit priority)',
      'OrderSDK — Order state machine (PLACED→CONFIRMED→PREPARING→READY→DELIVERED)',
      'RuleSDK — Campaign eligibility, coin calculations, cap enforcement',
      'EventSDK — Real-time event bus (Redis Pub/Sub → Kafka)',
      'API Gateway — Rate limiting, auth check, request routing',
      'NuqtaPay rails — PCI-DSS compliant payment processing',
      'DataPulse warehouse + SecureVault compliance',
    ],
    docsDetail: '5 SDKs • 60+ DB tables designed • 100+ error codes • Event schema registry • Circuit breaker patterns',
    ecosystemPower: 10,
    connectsTo: [],
    synergiesUnlocked: [
      'Single auth for all 100+ apps — user logs in once, uses everything',
      'One wallet engine reused by BizOne, Nuqta, Qist, Hawil, Wasil, Sakin',
      'Payment gateway shared by every transactional app in the ecosystem',
      'AI/ML models (credit scoring, fraud, recommendations) serve all companies',
      'Event bus enables real-time communication between all future services',
    ],
    appsUnlocked: ['Rabtul Core', 'AIRA Engine', 'DataPulse', 'CloudSync', 'SecureVault'],
    cumulativeApps: 5,
    cumulativeUsers: '0 (infrastructure only)',
    licensesNeeded: [
      { app: 'Rabtul (Tech Company)', licenses: ['UAE Trade License (DED) — IT Services / Software Development', 'TDRA Registration — Telecom & Digital Government Regulatory Authority', 'UAE Data Protection Registration — Federal Decree-Law No. 45/2021 (PDPL)'], authority: 'DED + TDRA', difficulty: 'Easy', timeline: '2-4 weeks', cost: 'AED 15K-30K' },
      { app: 'NuqtaPay (Payment Processing)', licenses: ['Retail Payment Service Provider (RPSP) License — CBUAE', 'PCI-DSS Level 1 Certification — for card processing', 'Payment Card Industry compliance audit'], authority: 'Central Bank of UAE (CBUAE)', difficulty: 'Hard', timeline: '6-12 months', cost: 'AED 500K-2M + AED 5M minimum capital' },
      { app: 'Data Platform', licenses: ['Cloud Service Provider registration with TDRA', 'Data hosting compliance (UAE data residency requirements)'], authority: 'TDRA', difficulty: 'Medium', timeline: '1-3 months', cost: 'AED 20K-50K' },
    ],
    networkEffect: 'Foundation layer — no user-facing products yet, but every single app built after this plugs into Rabtul. The more apps we add, the more valuable these shared services become.',
  },
  {
    step: 2,
    name: 'BizOne Merchant OS',
    tagline: '222 Screens • Merchant-First Strategy',
    icon: Store,
    color: 'from-teal-500 to-cyan-600',
    textColor: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500',
    phase: 'Phase 1 — Priority 1',
    phaseColor: 'bg-red-500/20 text-red-400',
    timeline: 'Month 1-4 (Sprint 1-4)',
    sisterCompanies: ['NextaBizz', 'Rabtul'],
    whyNow: 'Merchant-first strategy: before consumers, lock in merchants. BizOne gives them POS, CRM, inventory, analytics, staff management — making them dependent on RTMN tools. When consumer apps launch, 500+ merchants are already integrated and ready.',
    whatItBuilds: [
      'BizOne POS Core — cart, checkout, receipt printing (Electron)',
      'Merchant Onboarding — self-service KYB, 5-phase flow (SIGNUP→PENDING→VERIFIED→ACTIVE→LIVE)',
      'Inventory Management — stock tracking, variants, alerts, batch tracking',
      'CRM Module — customer database, segments, purchase history',
      'Reporting Dashboard — sales, inventory, daily summaries',
      '13 POS variants — SimplePOS, OfflinePOS, SoftPOS, CategoryPOS, QR Ordering',
      'Staff Management — shifts, permissions, payroll, commission tracking',
      'Merchant Package Tiers — Free / Basic / Golden / Diamond',
    ],
    docsDetail: '222 screens • 164 merchant pages • 14 major sections • 4 merchant tiers (Free→Diamond) • 15-20% commission • POS Integration SDK',
    ecosystemPower: 22,
    connectsTo: ['Rabtul'],
    synergiesUnlocked: [
      'Uses Rabtul AuthSDK — merchants get single login for all RTMN tools',
      'Uses Rabtul WalletSDK — merchant settlement engine built-in',
      'POS transaction data feeds Rabtul AI → insights for every future product',
      'Merchant network pre-integrated for Nuqta consumer launch (Step 3)',
      'Merchant Portal base is REUSED by Wasil, Sakin, Ajer (saves 75% build time)',
      'KYB onboarding module REUSED by Hawil agent network, Wasil restaurants',
    ],
    appsUnlocked: ['BizOne POS', 'BizOne Merchant App', 'Merchant Portal', 'HQ Admin (lite)'],
    cumulativeApps: 9,
    cumulativeUsers: '500+ merchants',
    licensesNeeded: [
      { app: 'BizOne POS System', licenses: ['UAE Trade License — POS/Payment Terminal Provider', 'PCI-DSS compliance (if processing cards)', 'Merchant acquiring registration with CBUAE (if direct acquiring)'], authority: 'DED + CBUAE', difficulty: 'Medium', timeline: '2-4 months', cost: 'AED 50K-150K' },
      { app: 'BizOne Merchant SaaS', licenses: ['Trade License — SaaS / IT Services', 'E-Commerce license (if online merchant tools)'], authority: 'DED', difficulty: 'Easy', timeline: '2-4 weeks', cost: 'AED 15K-30K' },
      { app: 'HQ Admin Dashboard', licenses: ['No additional license — internal tool under Rabtul trade license'], authority: 'N/A', difficulty: 'None', timeline: 'N/A', cost: 'N/A' },
    ],
    networkEffect: 'Merchant lock-in: More merchants → better benchmarks, community features, shared learnings. Every merchant on BizOne is pre-wired for every future consumer product.',
  },
  {
    step: 3,
    name: 'Nuqta Consumer Super-App',
    tagline: '360+ Screens • 4 Coin Types • Gamification',
    icon: Crown,
    color: 'from-[#c9a227] to-amber-600',
    textColor: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]',
    phase: 'Phase 1 — Priority 1',
    phaseColor: 'bg-red-500/20 text-red-400',
    timeline: 'Month 1-5 (Sprint 1-5)',
    sisterCompanies: ['Nuqta Corp', 'Rabtul'],
    whyNow: 'Built in parallel with BizOne. The consumer super-app connects to all 500+ BizOne merchants. Nuqta Coins, Nuqta+ membership tiers, gamification — users earn rewards everywhere. This is where the two-sided network ignites.',
    whatItBuilds: [
      'Nuqta Super-App shell — React Native (iOS + Android)',
      'Nuqta Wallet — 4 coin types (Promo→Branded→Nuqta→Cash), balance, history',
      'Merchant Discovery — browse, search, maps, categories',
      'QR Scan & Pay — scan merchant QR at BizOne POS',
      'Nuqta+ Membership — 4 tiers (Basic→Silver→Gold→Prive)',
      'Gamification Hub — badges, levels, challenges, leaderboards',
      'Nuqta Prive — 141 premium screens, exclusive rewards',
      'Coin earning rules — 2-15% per transaction, tier multipliers',
    ],
    docsDetail: '360+ consumer screens • 107 root + 154 vertical pages • 141 Prive screens • 4 loyalty tiers • Coin formula: (orderAmount × baseRate × tierMultiplier) + categoryBonus',
    ecosystemPower: 38,
    connectsTo: ['Rabtul', 'BizOne'],
    synergiesUnlocked: [
      'Consumers earn Nuqta Coins at all 500+ BizOne merchants',
      'Uses Rabtul AuthSDK — same login works for all future apps',
      'Uses Rabtul WalletSDK — same wallet across entire ecosystem',
      'Merchant foot traffic increases 30-50% from Nuqta user base',
      'Consumer behavior data feeds Rabtul AI → powers every future recommendation',
      'Gamification engine is REUSED by every future app (Wasil challenges, Safar badges)',
      'Nuqta Prive (141 screens) creates premium tier driving high ARPU',
    ],
    appsUnlocked: ['Nuqta App', 'Nuqta Prive', 'Gamification Hub', 'CoinHunt lite', 'BuzzLoop lite'],
    cumulativeApps: 14,
    cumulativeUsers: '50K+',
    licensesNeeded: [
      { app: 'Nuqta Consumer App', licenses: ['Trade License — Mobile App / E-Commerce', 'Apple App Store + Google Play developer accounts', 'UAE Consumer Protection Law compliance'], authority: 'DED + App Stores', difficulty: 'Easy', timeline: '2-4 weeks', cost: 'AED 15K-25K' },
      { app: 'Nuqta Loyalty/Coins', licenses: ['Stored Value Facility (SVF) License — if coins are redeemable for cash', 'OR operate as "loyalty points" (not redeemable = no SVF needed)', 'CBUAE guidance on virtual currencies/loyalty programs'], authority: 'CBUAE (if SVF)', difficulty: 'Medium-Hard', timeline: '3-9 months (if SVF needed)', cost: 'AED 100K-500K (SVF) or minimal (loyalty only)' },
      { app: 'Nuqta+ Membership', licenses: ['No special license — subscription model under e-commerce', 'VAT registration (if revenue > AED 375K)'], authority: 'FTA (Federal Tax Authority)', difficulty: 'Easy', timeline: '1-2 weeks', cost: 'AED 5K-10K' },
      { app: 'Gamification/CoinHunt', licenses: ['Verify not classified as "gambling" under UAE law', 'If skill-based with no real-money wagering → no gaming license needed', 'Content compliance with UAE media regulations'], authority: 'UAE Media Council', difficulty: 'Low', timeline: '1-2 weeks review', cost: 'Minimal' },
    ],
    networkEffect: 'Two-sided network activated: More merchants → more places to earn → more consumers → more sales → more merchants. Gamification drives daily active engagement across the whole ecosystem.',
  },
  {
    step: 4,
    name: 'Qist BNPL + Hawil Remittance',
    tagline: 'Islamic Fintech — Credit + Cross-Border',
    icon: Wallet,
    color: 'from-violet-500 to-blue-600',
    textColor: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500',
    phase: 'Phase 1 — Priority 2',
    phaseColor: 'bg-orange-500/20 text-orange-400',
    timeline: 'Month 3-6 (Sprint 3-6)',
    sisterCompanies: ['RTMN Finance', 'Rabtul'],
    whyNow: 'With merchants and consumers active, add financial rails. Qist BNPL at BizOne POS drives 40% higher cart value. Hawil remittance captures the massive GCC→home corridor. Both integrate into Nuqta app — money flows through everything.',
    whatItBuilds: [
      'Qist Credit Scoring — ML model for BNPL risk assessment',
      'Qist BNPL Core — 3/6/12 month installments, 0% fee',
      'Qist Virtual Card — anywhere BNPL, not just BizOne',
      'Qist Collections Engine — auto-debit, reminders, late fees',
      'Hawil FX Engine — real-time Google rate matching',
      'Hawil KYC/AML — document verification, sanctions check',
      'Hawil Transfer Flow — UAE→India, UAE→PH, 8+ corridors',
      'Hawil Card — prepaid card top-up from remittance',
    ],
    docsDetail: 'Qist: ML credit scoring + installment plans • Hawil: 8+ corridors, 0% markup • Both integrated in Nuqta app + BizOne POS • Coin debit priority: Promo→Branded→Nuqta→Cash→Qist',
    ecosystemPower: 52,
    connectsTo: ['Rabtul', 'BizOne', 'Nuqta'],
    synergiesUnlocked: [
      'Qist at BizOne POS checkout → 40% higher average cart value',
      'Hawil users auto-earn Nuqta Coins on every remittance',
      'Qist credit model REUSED by Sakin rent finance and Ajer leasing (Step 6)',
      'Hawil FX engine REUSED by Safar TravoPay wallet (Step 7)',
      'BizOne merchant POS data improves Qist credit scoring accuracy',
      'NuqtaPay wallet (built on Rabtul WalletSDK) holds coins + cash + Qist credit',
      'Both accessible inside Nuqta app — no separate downloads needed',
    ],
    appsUnlocked: ['Qist', 'Hawil', 'NuqtaPay', 'Qist Virtual Card', 'Hawil Card'],
    cumulativeApps: 19,
    cumulativeUsers: '200K+',
    licensesNeeded: [
      { app: 'Qist BNPL', licenses: ['BNPL/Consumer Credit License — CBUAE (Mandatory)', 'Minimum capital requirement: AED 2M-10M', 'AML/CFT compliance program (Federal AML Law)', 'Credit Information Agency registration (Al Etihad Credit Bureau)', 'Consumer lending disclosure requirements'], authority: 'Central Bank of UAE (CBUAE)', difficulty: 'Very Hard', timeline: '9-18 months', cost: 'AED 2M-10M capital + AED 500K-1M setup' },
      { app: 'Hawil Remittance', licenses: ['Hawala / Money Transfer License — CBUAE (Mandatory)', 'OR Retail Payment Service Provider (RPSP) License', 'Minimum capital: AED 5M-15M', 'AML/KYC/CFT full compliance program', 'Sanctions screening (OFAC, UN, UAE local)', 'Correspondent banking relationships', 'Registration with Financial Intelligence Unit (FIU)'], authority: 'Central Bank of UAE (CBUAE)', difficulty: 'Very Hard', timeline: '12-24 months', cost: 'AED 5M-15M capital + AED 1M-3M setup' },
      { app: 'Hawil Card (Prepaid)', licenses: ['Stored Value Facility (SVF) License — CBUAE', 'Card scheme membership (Visa/Mastercard) or partner', 'EMV compliance', 'PCI-DSS certification'], authority: 'CBUAE + Visa/Mastercard', difficulty: 'Hard', timeline: '6-12 months', cost: 'AED 2M-5M' },
    ],
    networkEffect: 'Financial flywheel: More transactions → better credit data → lower risk → better rates → more users → more transactions. Hawil captures remittance corridor sticky users.',
  },
  {
    step: 5,
    name: 'Wasil Delivery Wave 1',
    tagline: '5 High-Frequency Apps • 60-Min Delivery',
    icon: Truck,
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500',
    phase: 'Phase 1 — Priority 3',
    phaseColor: 'bg-yellow-500/20 text-yellow-400',
    timeline: 'Month 5-7 (Sprint 5-8)',
    sisterCompanies: ['Wasil Apps', 'Rabtul', 'NextaBizz'],
    whyNow: 'Physical commerce layer. Connect BizOne merchants to Nuqta consumers via 60-minute delivery. Start with 5 highest-GMV categories: food, grocery, pharmacy, fitness, beauty. Pay with NuqtaPay/Qist, earn Nuqta Coins on every order.',
    whatItBuilds: [
      'Wasil Hub — unified delivery platform, order lifecycle',
      'Dinezy — food delivery from BizOne restaurants (8 endpoints)',
      'Grocify — grocery delivery, dark stores (8 endpoints)',
      'MediEarn — pharmacy, prescriptions (8 endpoints)',
      'FitEarn — fitness products, supplements (7 endpoints)',
      'Glowzy — beauty & salon, at-home services (7 endpoints)',
      'Wasil Rider App — React Native, assignment, navigation',
      'Real-time tracking — WebSocket, ETA calculation',
    ],
    docsDetail: 'Wave 1: 5 apps • 42 endpoints • Shared Wasil APIs: unified cart, checkout, tracking (10 endpoints) • Order states align with Rabtul OrderSDK • 60-min delivery SLA',
    ecosystemPower: 65,
    connectsTo: ['Rabtul', 'BizOne', 'Nuqta', 'RTMN Finance'],
    synergiesUnlocked: [
      'BizOne merchants → Wasil delivery auto-integrated via shared Rabtul APIs',
      'Nuqta+ Gold/Prive get free Wasil delivery (loyalty perk)',
      'Pay with NuqtaPay, Qist BNPL, or Hawil Card — earn 2X Nuqta Coins',
      'Wasil Rider App REUSES Rabtul AuthSDK + Mobile SDK (80% code reuse)',
      'Rabtul AI predicts demand → optimizes rider dispatch → 20% faster delivery',
      'Routing engine is REUSED by Rakab ride-hailing later (Step 7)',
      'Wasil merchant integration REUSES BizOne Merchant Portal base',
    ],
    appsUnlocked: ['Wasil Hub', 'Dinezy', 'Grocify', 'MediEarn', 'FitEarn', 'Glowzy', 'Wasil Rider App'],
    cumulativeApps: 26,
    cumulativeUsers: '500K+',
    licensesNeeded: [
      { app: 'Wasil Delivery Platform', licenses: ['Trade License — Last-Mile Delivery / Courier Services', 'DED delivery services activity code', 'Commercial vehicle permits for fleet'], authority: 'DED + RTA', difficulty: 'Medium', timeline: '1-3 months', cost: 'AED 30K-80K' },
      { app: 'Dinezy (Food Delivery)', licenses: ['Food delivery intermediary registration', 'Dubai Municipality food safety permit (if handling food)', 'Restaurants on platform must have their own food licenses', 'FSSAI-equivalent: Municipality food handler card for riders'], authority: 'Dubai Municipality + DED', difficulty: 'Medium', timeline: '2-4 months', cost: 'AED 50K-100K' },
      { app: 'MediEarn (Pharmacy Delivery)', licenses: ['Pharmacy delivery requires MOH/DHA approval', 'Partner pharmacies must hold valid pharmacy license', 'Controlled substance delivery restrictions apply', 'Cold chain compliance for temperature-sensitive medicines'], authority: 'MOH + DHA (Dubai Health Authority)', difficulty: 'Hard', timeline: '3-6 months', cost: 'AED 100K-300K' },
      { app: 'Glowzy (Beauty Services)', licenses: ['Beauty services at-home: DED professional license per provider', 'Beautician/stylist individual permits from DHA', 'Products must have Emirates Authority for Standardization (ESMA) approval'], authority: 'DED + DHA + ESMA', difficulty: 'Medium', timeline: '2-4 months', cost: 'AED 30K-60K per provider' },
      { app: 'Rider Fleet', licenses: ['Rider visa sponsorship (if employed) or freelancer permits', 'Motorcycle/vehicle permits from RTA', 'Third-party liability insurance per rider', 'Labor law compliance (UAE Federal Decree-Law No. 33/2021)'], authority: 'RTA + MOHRE + Insurance', difficulty: 'Medium', timeline: 'Ongoing', cost: 'AED 5K-10K per rider/year' },
    ],
    networkEffect: 'Density network: More riders → faster delivery → more orders → more riders. Cross-vertical bundling: food + grocery + pharmacy in one delivery = higher order value per trip.',
  },
  {
    step: 6,
    name: 'Sakin + Ajer',
    tagline: 'Rent Finance + Vehicle Leasing',
    icon: Home,
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500',
    phase: 'Phase 1 — Priority 4',
    phaseColor: 'bg-blue-500/20 text-blue-400',
    timeline: 'Month 7-10 (Sprint 7-11)',
    sisterCompanies: ['RTMN Finance', 'Rabtul'],
    whyNow: 'Users are earning coins, ordering deliveries, using BNPL. Now add the two biggest monthly expenses: rent (Sakin) and vehicle leasing (Ajer). High-ARPU, recurring revenue. Both REUSE Qist credit scoring — zero ML rebuild needed.',
    whatItBuilds: [
      'Sakin Property Listings — search, filters, landlord portal',
      'Sakin Rent Finance — cheque splitting, monthly payments via Qist engine',
      'Sakin Tenant Application — credit check using Qist ML model (90% reuse)',
      'Sakin Short Stay — Airbnb-style short-term rentals',
      'Ajer Vehicle Catalog — car listings, availability, pricing engine',
      'Ajer Subscription Plans — monthly vehicle subscriptions',
      'Ajer Credit Assessment — eligibility via Qist credit model (90% reuse)',
      'Both integrated in Nuqta app — find rent + lease from super-app',
    ],
    docsDetail: 'Sakin: Property + rent finance • Ajer: Vehicle leasing • Both REUSE Qist credit scoring (90% model reuse) + Merchant Portal base (75% UI reuse) + NuqtaPay',
    ecosystemPower: 73,
    connectsTo: ['Rabtul', 'BizOne', 'Nuqta', 'RTMN Finance', 'Wasil'],
    synergiesUnlocked: [
      'Qist credit model REUSED for rent/lease eligibility — zero ML rebuild',
      'Merchant Portal base REUSED for Sakin Landlord + Ajer Fleet portals',
      'Pay rent/lease with NuqtaPay, earn Nuqta Coins on monthly payments',
      'Sakin data + Qist data → better credit profiles for all RTMN Finance products',
      'Wasil delivers home essentials when tenants move in',
      'Ajer vehicles can double as Wasil delivery fleet = shared economics',
      'Housing/vehicle data enriches Rabtul AI user profiles across ecosystem',
    ],
    appsUnlocked: ['Sakin', 'Sakin Short Stay', 'Ajer', 'Landlord Portal', 'Fleet Portal'],
    cumulativeApps: 31,
    cumulativeUsers: '800K+',
    licensesNeeded: [
      { app: 'Sakin (Rent Financing)', licenses: ['Consumer Credit / Financing License — CBUAE (if financing rent)', 'OR partner with a licensed finance company', 'Real Estate Regulatory Agency (RERA) broker license — DLD', 'Ejari/Tawtheeq system integration approval', 'AML/KYC compliance for financial transactions'], authority: 'CBUAE + DLD/RERA', difficulty: 'Hard', timeline: '6-12 months', cost: 'AED 1M-5M capital + AED 200K-500K setup' },
      { app: 'Sakin Short Stay', licenses: ['Holiday Home License — DTCM (Dubai) or equivalent per emirate', 'Each property needs individual holiday home permit', 'Tourism Dirham levy registration', 'Building NOC from community/developer'], authority: 'DTCM + DLD', difficulty: 'Medium', timeline: '2-4 months per property', cost: 'AED 10K-20K per property + AED 50K platform' },
      { app: 'Ajer (Vehicle Leasing)', licenses: ['Vehicle Rental / Leasing License — DED + RTA', 'Fleet registration with RTA', 'Vehicle insurance (comprehensive) per vehicle', 'Lease financing license if offering lease-to-own (CBUAE)', 'Traffic fine management compliance'], authority: 'DED + RTA + CBUAE (if financing)', difficulty: 'Medium-Hard', timeline: '3-6 months', cost: 'AED 100K-300K + vehicle fleet capital' },
    ],
    networkEffect: 'Recurring revenue lock-in: Monthly rent + vehicle payments = predictable revenue stream. Every rent/lease payment earns coins = daily engagement with Nuqta ecosystem.',
  },
  {
    step: 7,
    name: 'Safar Travel + Rakab Mobility',
    tagline: 'OTA + Ride-Hailing — Highest ARPU Products',
    icon: Plane,
    color: 'from-sky-500 to-blue-600',
    textColor: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500',
    phase: 'Phase 2 — Expansion',
    phaseColor: 'bg-blue-500/20 text-blue-400',
    timeline: 'Month 10-14 (Sprint 10-14)',
    sisterCompanies: ['Travel Co', 'Rabtul'],
    whyNow: 'With 800K+ users, launch highest-ARPU products. One flight booking earns more coins than 50 food orders. Rakab ride-hailing REUSES Wasil routing engine + rider app patterns — 70% code already exists.',
    whatItBuilds: [
      'Safar OTA — flight search (GDS integration), hotel aggregation',
      'Safar Booking Engine — unified booking + Qist BNPL split payment',
      'TravoPay — travel wallet with Hawil multi-currency FX engine',
      'Fakhir Luxury Concierge — 24/7 white-glove for HNWIs',
      'Rakab Ride Request — match, accept, dynamic pricing',
      'Rakab Driver App — REUSES Wasil Rider App patterns (70% code reuse)',
      'Rakab Trip Management — tracking, fare calculation, rating',
      'Adventure Apps — Weekendzy, BeachLife, DesertVibes, CityExplore',
    ],
    docsDetail: 'Safar: GDS + hotel aggregation • Rakab: REUSES Wasil routing (70%) • TravoPay: Hawil FX engine reuse • Fakhir: Prive-tier exclusive • Adventure: 8+ curated experience apps',
    ecosystemPower: 82,
    connectsTo: ['Rabtul', 'BizOne', 'Nuqta', 'RTMN Finance', 'Wasil', 'Sakin/Ajer'],
    synergiesUnlocked: [
      'Book flights/hotels → earn 3X Nuqta Coins (highest-value transactions)',
      'TravoPay wallet uses Hawil FX engine — zero extra FX build needed',
      'Pay with Qist BNPL — split AED 5,000 flight into 6 monthly payments',
      'Rakab REUSES Wasil routing engine + rider app = 70% code already built',
      'Rakab drivers can also deliver for Wasil = shared fleet, higher utilization',
      'Fakhir members auto-get Nuqta Prive tier (141 premium screens)',
      'Rakab provides airport pickup → seamless with Safar booking',
      'Wasil delivers travel gear/essentials before departure',
    ],
    appsUnlocked: ['Safar', 'Fakhir', 'TravoPay', 'Rakab', 'Rakab Business', 'Weekendzy', 'BeachLife', 'DesertVibes', 'CityExplore', 'Staycay'],
    cumulativeApps: 41,
    cumulativeUsers: '1.5M+',
    licensesNeeded: [
      { app: 'Safar (Travel OTA)', licenses: ['Travel Agency License — DTCM (Dubai) or DOT (Abu Dhabi)', 'IATA accreditation (for direct airline ticketing)', 'OR IATA sub-agent agreement with accredited agency', 'Hotel aggregator agreements (no special license if intermediary)', 'Tourism Dirham collection registration', 'Visa processing: Ministry of Foreign Affairs authorization'], authority: 'DTCM + IATA + MOFA', difficulty: 'Medium-Hard', timeline: '3-6 months', cost: 'AED 100K-300K + IATA bond ~AED 200K' },
      { app: 'Rakab (Ride-Hailing)', licenses: ['Smart Rental / E-Hail License — RTA (EXTREMELY limited)', 'Only ~5 licenses ever issued in Dubai (Careem, Uber, S\'hail, etc.)', 'May need to partner with existing license holder', 'Minimum fleet requirements (100+ vehicles typically)', 'Driver background checks + training certification', 'Insurance: AED 1M+ third-party liability per vehicle', 'Fare regulation compliance with RTA pricing'], authority: 'RTA (Roads & Transport Authority)', difficulty: 'Extremely Hard', timeline: '12-24 months', cost: 'AED 5M-20M (license + fleet + insurance)' },
      { app: 'TravoPay (Travel Wallet)', licenses: ['Stored Value Facility (SVF) or E-Money license — CBUAE', 'Multi-currency wallet requires FX dealer license', 'OR use Hawil existing FX/money transfer license'], authority: 'CBUAE', difficulty: 'Hard (new) / Easy (reuse Hawil)', timeline: '6-12 months (new) / 0 (reuse)', cost: 'AED 2M-5M (new) / Minimal (reuse)' },
      { app: 'Fakhir (Luxury Concierge)', licenses: ['Concierge / Lifestyle Services license — DED', 'If booking luxury experiences: tourism license', 'VIP transport: limousine service permit from RTA'], authority: 'DED + DTCM + RTA', difficulty: 'Medium', timeline: '2-4 months', cost: 'AED 50K-150K' },
    ],
    networkEffect: 'Cross-sell explosion: Every traveler uses payments, rewards, delivery, rides. ARPU jumps 3-5X. Shared fleet (Rakab + Wasil) = lower cost per ride/delivery for both.',
  },
  {
    step: 8,
    name: 'Discovery + Vertical Apps',
    tagline: '4 Discovery (90 APIs) + 4 Vertical (78 APIs)',
    icon: Eye,
    color: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500',
    phase: 'Phase 2 — Intelligence Layer',
    phaseColor: 'bg-purple-500/20 text-purple-400',
    timeline: 'Month 12-16',
    sisterCompanies: ['Nuqta Corp', 'Rabtul'],
    whyNow: 'With 1.5M+ users generating data across 8 product categories — launch AI-powered discovery and vertical expansion. All 8 apps share Rabtul SSO, Coin Ledger, Notifications, and AIRA recommendations. Zero separate auth/wallet needed.',
    whatItBuilds: [
      'AI-R — AI-first discovery, chat-based (16 endpoints, 6 pages)',
      'BuzzLoop — social/UGC feed, creator tools (28 endpoints, 5 pages)',
      'CoinHunt — gamified deals, challenges, flash deals (22 endpoints, 4 pages)',
      'LocalEdge — hyperlocal check-ins, mayorships (24 endpoints, 4 pages)',
      'StyleSync — fashion, virtual closet, AI outfits (18 endpoints)',
      'FitCircle — health, workouts, nutrition tracking (25 endpoints)',
      'TechHunt — electronics, price comparison, alerts (16 endpoints)',
      'HomeHub — room planner, home services, furniture (19 endpoints)',
    ],
    docsDetail: '8 new apps • 168 total endpoints • 36 pages • All share: Rabtul SSO + Coin Ledger + Notifications + AIRA AI • 11 new DB tables • Webhook events for coins, social, achievements',
    ecosystemPower: 90,
    connectsTo: ['Rabtul', 'BizOne', 'Nuqta', 'RTMN Finance', 'Wasil', 'Safar/Rakab'],
    synergiesUnlocked: [
      'AI-R uses ALL ecosystem data to give personalized recommendations',
      'BuzzLoop creators earn Nuqta Coins → drives user-generated content',
      'CoinHunt challenges span ALL products (order food, book ride, send money)',
      'LocalEdge check-ins at BizOne merchants → foot traffic boost',
      'StyleSync purchases delivered by Wasil → full commerce loop',
      'FitCircle nutrition goals → MediEarn supplements auto-ordered via Wasil',
      'TechHunt price alerts → buy via BizOne POS or Wasil delivery',
      'HomeHub services booked via same flow as Wasil (shared OrderSDK)',
    ],
    appsUnlocked: ['AI-R', 'BuzzLoop', 'CoinHunt', 'LocalEdge', 'StyleSync', 'FitCircle', 'TechHunt', 'HomeHub'],
    cumulativeApps: 49,
    cumulativeUsers: '2.5M+',
    licensesNeeded: [
      { app: 'AI-R (AI Assistant)', licenses: ['No special license — operates as in-app feature under Nuqta trade license', 'UAE AI Ethics Guidelines compliance (Mohammed Bin Zayed University framework)', 'Data processing consent under UAE PDPL'], authority: 'N/A (internal feature)', difficulty: 'Easy', timeline: '1-2 weeks review', cost: 'Minimal' },
      { app: 'BuzzLoop (Social/UGC)', licenses: ['Social media platform: National Media Council (NMC) registration', 'User-generated content moderation compliance (UAE Cybercrime Law)', 'Content liability: platform must remove illegal content within 24hrs'], authority: 'National Media Council (NMC)', difficulty: 'Medium', timeline: '2-4 months', cost: 'AED 20K-50K' },
      { app: 'CoinHunt (Gamification)', licenses: ['Ensure not classified as gambling under UAE Federal Penal Code', 'Skill-based challenges with loyalty rewards = no gaming license', 'If real prizes: promotional permit from DED per campaign'], authority: 'DED + UAE Media Council', difficulty: 'Low', timeline: '1-2 weeks', cost: 'AED 5K-10K per campaign permit' },
      { app: 'LocalEdge (Hyperlocal)', licenses: ['Location data collection: UAE PDPL consent requirements', 'No special license — operates as discovery feature', 'Map data usage: compliance with UAE mapping regulations'], authority: 'TDRA + DED', difficulty: 'Easy', timeline: '1-2 weeks', cost: 'Minimal' },
      { app: 'StyleSync (Fashion)', licenses: ['E-Commerce license if selling directly (DED)', 'OR marketplace/intermediary — lighter requirements', 'Textile/fashion product compliance (ESMA standards)'], authority: 'DED + ESMA', difficulty: 'Easy-Medium', timeline: '2-4 weeks', cost: 'AED 15K-30K' },
      { app: 'FitCircle (Health/Fitness)', licenses: ['Health & wellness content disclaimer requirements', 'If offering medical advice: DHA/MOH health content license', 'Fitness tracking = no license (consumer app)', 'Nutrition advice: qualified dietitian partnership required'], authority: 'DHA/MOH (if medical)', difficulty: 'Easy-Medium', timeline: '1-3 months', cost: 'AED 10K-30K' },
      { app: 'TechHunt (Electronics)', licenses: ['Price comparison: no special license (aggregator model)', 'If selling: e-commerce license + ESMA product compliance', 'Electronics import: ECAS conformity certificate per product'], authority: 'DED + ESMA', difficulty: 'Easy', timeline: '2-4 weeks', cost: 'AED 15K-25K' },
      { app: 'HomeHub (Home Services)', licenses: ['Home services marketplace: DED professional license', 'Service providers need individual trade licenses', 'Interior design services: Engineering license if structural work'], authority: 'DED', difficulty: 'Easy-Medium', timeline: '2-4 weeks', cost: 'AED 15K-30K' },
    ],
    networkEffect: 'Data flywheel: 8 new data sources → smarter AI-R recommendations → higher engagement → more data → smarter AI. Each vertical app creates new transaction types that feed the whole ecosystem.',
  },
  {
    step: 9,
    name: 'Adzy + Wasil Wave 2-4 + Growth',
    tagline: 'Ad Network + 17 More Delivery Apps + Creator Tools',
    icon: Megaphone,
    color: 'from-pink-500 to-rose-500',
    textColor: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500',
    phase: 'Phase 3 — Scale & Monetize',
    phaseColor: 'bg-pink-500/20 text-pink-400',
    timeline: 'Month 15-18',
    sisterCompanies: ['Adzy', 'Wasil Apps', 'Inventora', 'NextaBizz', 'Eventora'],
    whyNow: 'With 2.5M+ users across 49 apps — launch Adzy ad network (every app surface = ad inventory), remaining 17 Wasil vertical apps, and growth tools. The ecosystem starts monetizing itself. Each new app is 80%+ code reuse from existing tech.',
    whatItBuilds: [
      'Adzy Ad Platform — cross-ecosystem targeted ads from ALL user data',
      'Wasil Wave 2: Shopazy, Funzy, AutoPerks, Petzy, Kidzo (35 endpoints)',
      'Wasil Wave 3: Luxora, Elitezy, Royale+ premium tier (22 endpoints)',
      'Wasil Wave 4: Washzy, Maidzy, Essentia+, Society+, Bizora, Gamezy, Wellnez, TravoPay-Wasil, Learnly (65 endpoints)',
      'Inventora — warehouse management for BizOne merchants',
      'NextaBizz — B2B marketplace, bulk ordering',
      'Eventora — event ticketing + Z-Events',
      'Growth Stack — Gigzy, BuzzLocal, ReferralHub, LoyaltyMax, Contestify',
    ],
    docsDetail: 'Wasil Waves 2-4: 17 apps, 132 endpoints • All share common Wasil APIs (10 endpoints) + Rabtul SDKs • Adzy: ads across all 60+ app surfaces • 80%+ code reuse per new app',
    ecosystemPower: 96,
    connectsTo: ['Rabtul', 'BizOne', 'Nuqta', 'RTMN Finance', 'Wasil', 'Sakin/Ajer', 'Safar/Rakab', 'Discovery/Vertical'],
    synergiesUnlocked: [
      'Adzy uses ALL 49 apps\' user behavior → hyper-targeted ad placement',
      'Each Wasil Wave 2-4 app is 80% code reuse (shared cart, checkout, tracking)',
      'Merchants promote on Adzy → drives Wasil orders + BizOne foot traffic',
      'Inventora syncs with BizOne POS → automated inventory replenishment',
      'NextaBizz B2B uses Qist for business credit + Hawil for cross-border B2B',
      'Eventora events ticketed + paid via NuqtaPay + Rakab for transport',
      'Gigzy freelancers paid via NuqtaPay, Learnly courses paid via Qist BNPL',
      'Ad spend from merchants becomes revenue → self-sustaining ecosystem',
    ],
    appsUnlocked: ['Adzy', 'Shopazy', 'Funzy', 'AutoPerks', 'Petzy', 'Kidzo', 'Luxora', 'Elitezy', 'Royale+', 'Washzy', 'Maidzy', 'Essentia+', 'Society+', 'Bizora', 'Gamezy', 'Wellnez', 'Learnly', 'Inventora', 'NextaBizz', 'Eventora', 'Gigzy', 'BuzzLocal'],
    cumulativeApps: 71,
    cumulativeUsers: '4M+',
    licensesNeeded: [
      { app: 'Adzy (Ad Platform)', licenses: ['Advertising agency license — DED (mandatory for ad network)', 'National Media Council (NMC) advertising content approval', 'UAE Advertising Standards compliance', 'User data for targeting: PDPL consent + opt-out mechanisms', 'Influencer marketing: NMC influencer registration requirements'], authority: 'DED + NMC', difficulty: 'Medium', timeline: '2-4 months', cost: 'AED 50K-100K' },
      { app: 'Wasil Wave 2-4 (17 Apps)', licenses: ['All covered under existing Wasil delivery license (Step 5)', 'Per-category additions: AutoPerks (RTA vehicle permit), Luxora (luxury goods import)', 'Premium tiers (Royale+, Elitezy): no extra license — pricing tier only', 'Gamezy: ensure not gambling classification'], authority: 'Existing licenses + category-specific', difficulty: 'Easy-Medium', timeline: '1-2 months per wave', cost: 'AED 20K-50K per wave' },
      { app: 'Inventora (Warehouse Mgmt)', licenses: ['Trade License — Warehouse Management / Logistics SaaS', 'If operating warehouses: warehouse license from municipality', 'Food storage: Dubai Municipality food storage permit'], authority: 'DED + Municipality', difficulty: 'Easy-Medium', timeline: '2-4 weeks', cost: 'AED 20K-50K' },
      { app: 'NextaBizz (B2B Marketplace)', licenses: ['E-Commerce license — B2B marketplace', 'Trade License — IT Services / Marketplace Platform', 'If cross-border B2B: customs broker registration or partnership'], authority: 'DED', difficulty: 'Easy-Medium', timeline: '2-4 weeks', cost: 'AED 15K-40K' },
      { app: 'Eventora (Event Ticketing)', licenses: ['Event management license — DED', 'Event permit per event from Dubai Police / Municipality', 'Ticketing platform: no special license (e-commerce)', 'Large events (500+): DCAS (Dubai Civil Aviation) if outdoor + safety permits'], authority: 'DED + Dubai Police + Municipality', difficulty: 'Medium', timeline: '2-4 months', cost: 'AED 30K-80K + per-event permits' },
      { app: 'Gigzy (Freelancer Platform)', licenses: ['Freelancer marketplace: DED trade license', 'Freelancers must hold UAE freelancer permits (MOHRE)', 'Payment processing through existing NuqtaPay/NuqtaPay rails', 'Labor law compliance for gig economy (UAE Gig Worker regulations)'], authority: 'DED + MOHRE', difficulty: 'Medium', timeline: '2-4 months', cost: 'AED 30K-60K' },
    ],
    networkEffect: 'Monetization flywheel: More apps = more ad surfaces = more ad revenue = more investment = more apps. Each new Wasil app costs 80% less to build due to shared infrastructure.',
  },
  {
    step: 10,
    name: 'Full RTMN Super-App',
    tagline: '100+ Apps • 10 Companies • 1 Ecosystem',
    icon: Sparkles,
    color: 'from-[#c9a227] to-amber-600',
    textColor: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]',
    phase: 'Phase 3 — Complete',
    phaseColor: 'bg-[#c9a227]/20 text-[#c9a227]',
    timeline: 'Month 18-20',
    sisterCompanies: ['All 10 Companies'],
    whyNow: 'The final wave: community apps, education, remaining viral apps, advanced finance (Investzy, Insurzy, Wealthzy), and 18 ultra-light gamification apps. Every life moment is covered. One login, one wallet, one coin system — 100+ services.',
    whatItBuilds: [
      'Community: Circlezy, FitSquad, BookClubz, NeighborNet, VolunteerHub',
      'Education: Learnzy enhanced, Tutorly, Certify+, SkillBoost, KidLearn',
      'Health: FitLife, MindCalm, NutriPlan, DocConnect, WellnessHub',
      'Finance: Investzy (Shariah micro-investing), Insurzy, Wealthzy, CryptoLite',
      'Viral Apps: 18 gamified micro-apps (Memezy, Quizzy, Spinzy, etc.)',
      'Remaining adventure: Trekzy, Campzy, WildEscape, Cruise+',
      'Smart home: SmartHome, SecurityPlus, GardenPro',
      'AI-R Full — voice control across ALL 100+ services',
    ],
    docsDetail: '100+ apps total • 1,103+ screens documented • 530+ API endpoints • 60+ DB tables • 5 SDKs shared • 10 sister companies fully connected • One coin economy',
    ecosystemPower: 100,
    connectsTo: ['All 10 Sister Companies'],
    synergiesUnlocked: [
      'AI-R orchestrates everything: "Book dinner, send flowers, order Rakab" by voice',
      'Investzy invests spare Nuqta Coins into Shariah-compliant funds',
      'Insurzy auto-detects needs (travel → travel insurance, car → auto insurance)',
      'DocConnect prescriptions → auto-order via MediEarn (Wasil)',
      'FitSquad challenges earn coins, community events via Eventora + Rakab',
      'Every transaction in every app feeds every other app\'s intelligence',
      'One login, one wallet, one coin system — 100+ services, zero friction',
      'The GCC\'s first true super-app ecosystem is COMPLETE',
    ],
    appsUnlocked: ['All remaining apps — 100+ total across 10 companies'],
    cumulativeApps: '100+',
    cumulativeUsers: '5M+',
    licensesNeeded: [
      { app: 'Investzy (Micro-Investing)', licenses: ['Securities & Commodities Authority (SCA) license — mandatory', 'Shariah Advisory Board certification for Islamic funds', 'Minimum capital: AED 5M-20M (depends on category)', 'Financial promotions approval from SCA', 'Custody arrangement with licensed custodian bank'], authority: 'SCA (Securities & Commodities Authority)', difficulty: 'Extremely Hard', timeline: '12-24 months', cost: 'AED 5M-20M capital + AED 1M-3M setup' },
      { app: 'Insurzy (Insurance)', licenses: ['Insurance Broker License — CBUAE Insurance Authority', 'OR Insurance Aggregator model (lighter regulation)', 'Minimum capital: AED 3M (broker) or AED 500K (aggregator)', 'Each insurance product needs CBUAE approval', 'Appointed Actuary requirement for certain products'], authority: 'CBUAE Insurance Authority', difficulty: 'Very Hard', timeline: '9-18 months', cost: 'AED 500K-3M capital + AED 300K-800K setup' },
      { app: 'Wealthzy (Wealth Management)', licenses: ['Financial Advisory License — SCA', 'OR DFSA license if operating from DIFC', 'Minimum capital: AED 2M-10M', 'KYC/AML/CFT full compliance program', 'Qualified financial advisors (CFA/CFP registered)'], authority: 'SCA or DFSA', difficulty: 'Very Hard', timeline: '12-18 months', cost: 'AED 2M-10M capital + AED 500K-1M setup' },
      { app: 'DocConnect (Telemedicine)', licenses: ['Telemedicine Service License — DHA (Dubai) or DOH (Abu Dhabi)', 'Doctors must be DHA/MOH licensed practitioners', 'Platform license: Health Informatics license from DHA', 'Prescription delivery: partner pharmacy must be licensed', 'Patient data: healthcare-specific data protection compliance'], authority: 'DHA + MOH', difficulty: 'Hard', timeline: '6-12 months', cost: 'AED 200K-500K' },
      { app: 'Community Apps (Circlezy, FitSquad, etc.)', licenses: ['Social platform: NMC registration', 'Community gathering features: comply with UAE association laws', 'VolunteerHub: MOCCAE (volunteer organization) registration', 'No special licenses for most — covered under existing trade license'], authority: 'NMC + DED', difficulty: 'Easy', timeline: '2-4 weeks', cost: 'AED 10K-20K' },
      { app: 'Education (Learnzy, Tutorly)', licenses: ['E-Learning platform: KHDA approval (Dubai) or ADEK (Abu Dhabi)', 'Content compliance with UAE education standards', 'Tutorly: tutors need teaching permits if operating in UAE', 'Certify+: certification validity requires accreditation body approval'], authority: 'KHDA (Dubai) / ADEK (Abu Dhabi)', difficulty: 'Medium', timeline: '3-6 months', cost: 'AED 50K-150K' },
      { app: 'CryptoLite (Crypto Services)', licenses: ['VARA (Virtual Asset Regulatory Authority) license — Dubai only', 'OR SCA virtual asset service provider license (federal)', 'Minimum capital: AED 1M-15M (depends on activity type)', 'Shariah compliance certification if offering Islamic crypto', 'AML/CFT enhanced due diligence requirements'], authority: 'VARA (Dubai) or SCA', difficulty: 'Extremely Hard', timeline: '12-24 months', cost: 'AED 1M-15M capital + AED 500K-2M setup' },
      { app: 'SmartHome / SecurityPlus', licenses: ['Security systems: SIRA (Security Industry Regulatory Agency) license', 'IoT devices: TDRA type approval for wireless devices', 'CCTV/monitoring: SIRA guard + monitoring license', 'Installation services: DED maintenance license'], authority: 'SIRA + TDRA', difficulty: 'Medium-Hard', timeline: '3-6 months', cost: 'AED 100K-300K' },
    ],
    networkEffect: 'SUPER-APP COMPLETE. Every company strengthens every other company. Users never need to leave. Self-reinforcing, self-growing, self-monetizing. AED 2B+ annual revenue potential.',
  },
];

// Calculate totals
const totalApps = ecosystemCategories.reduce((sum, cat) => sum + cat.apps.length, 0);
const builtApps = ecosystemCategories.reduce((sum, cat) => sum + cat.apps.filter(a => a.status === 'built').length, 0);
const plannedApps = totalApps - builtApps;

// The Flywheel
const flywheel = [
  { step: 'Customer Acquisition', description: 'Hawil Card tourists, corporate B2B, merchant partners', icon: Users, color: 'text-blue-400' },
  { step: 'Discovery', description: 'BuzzLoop, LocalEdge, AI-R recommendations', icon: Eye, color: 'text-purple-400' },
  { step: 'Transaction', description: 'Wasil delivery, Qist BNPL, Rakab rides', icon: ShoppingBag, color: 'text-orange-400' },
  { step: 'Rewards', description: 'CoinHunt gamification, Nuqta coins, badges', icon: Coins, color: 'text-[#c9a227]' },
  { step: 'Operations', description: 'BizOne merchant tools, AIRA analytics', icon: Store, color: 'text-emerald-400' },
];

export default function RTMNEcosystemPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('nuqta-core');
  const [filterStatus, setFilterStatus] = useState<'all' | 'built' | 'planned'>('all');
  const [activeBuildStep, setActiveBuildStep] = useState(1);

  const filteredCategories = ecosystemCategories.map(cat => ({
    ...cat,
    apps: cat.apps.filter(app =>
      filterStatus === 'all' ? true : app.status === filterStatus
    )
  })).filter(cat => cat.apps.length > 0);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full mb-4">
              <Network className="w-5 h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-bold">Complete RTMN Ecosystem</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              <span className="text-[#c9a227]">100+ Apps</span> for the GCC Market
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
              The complete Nuqta/RTMN digital ecosystem - from super-app core to 24 delivery verticals,
              travel, community, finance, and gamification layers.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            <div className="bg-emerald-500/10 rounded-xl p-3 sm:p-4 text-center border border-emerald-500/30">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400">{builtApps}</div>
              <div className="text-xs sm:text-sm text-slate-400">Apps Built</div>
            </div>
            <div className="bg-blue-500/10 rounded-xl p-3 sm:p-4 text-center border border-blue-500/30">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400">{plannedApps}</div>
              <div className="text-xs sm:text-sm text-slate-400">Apps Planned</div>
            </div>
            <div className="bg-[#c9a227]/10 rounded-xl p-3 sm:p-4 text-center border border-[#c9a227]/30">
              <div className="text-2xl sm:text-3xl font-bold text-[#c9a227]">{totalApps}</div>
              <div className="text-xs sm:text-sm text-slate-400">Total Apps</div>
            </div>
            <div className="bg-purple-500/10 rounded-xl p-3 sm:p-4 text-center border border-purple-500/30">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400">{ecosystemCategories.length}</div>
              <div className="text-xs sm:text-sm text-slate-400">Categories</div>
            </div>
          </div>

          {/* Nuqta Logo */}
          <div className="flex justify-center mb-6">
            <div className="shadow-2xl shadow-[#c9a227]/30">
              <NuqtaMainLogo size={80} />
            </div>
          </div>
        </div>
      </div>

      {/* Flywheel Section */}
      <section className="bg-slate-800/30 border-b border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8 flex items-center justify-center gap-2">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#c9a227]" />
            The RTMN Flywheel
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {flywheel.map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center h-full">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-2 sm:mb-3 ${item.color}`}>
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className={`text-xs sm:text-sm font-bold ${item.color} mb-1`}>{item.step}</div>
                  <div className="text-xs text-slate-400 hidden sm:block">{item.description}</div>
                </div>
                {i < 4 && (
                  <ArrowRight className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Build - Step by Step */}
      <section className="bg-gradient-to-b from-[#0a1628] to-slate-900/50 border-b border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full mb-4">
              <Rocket className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-bold text-sm">Step-by-Step Ecosystem Build</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              How Each Product Makes the Ecosystem <span className="text-[#c9a227]">Stronger</span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-sm sm:text-base">
              Built by Rabtul tech team across all 10 sister companies by priority — not one company at a time,
              but whatever&apos;s needed first. Each product reuses shared Rabtul SDKs and connects to everything before it.
            </p>
          </div>

          {/* Step Selector - Horizontal */}
          <div className="flex items-center justify-center gap-1 sm:gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {ecosystemBuildSteps.map((step) => {
              const isActive = activeBuildStep === step.step;
              const isCompleted = activeBuildStep > step.step;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveBuildStep(step.step)}
                  className={`flex flex-col items-center gap-1 min-w-[60px] sm:min-w-[80px] transition-all ${
                    isActive ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all ${
                    isActive
                      ? `bg-gradient-to-br ${step.color} text-white shadow-lg shadow-${step.textColor.replace('text-', '')}/30`
                      : isCompleted
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                      : 'bg-slate-800 text-slate-500 border border-slate-700'
                  }`}>
                    {isCompleted && !isActive ? <CheckCircle className="w-5 h-5" /> : step.step}
                  </div>
                  <span className={`text-[10px] sm:text-xs font-medium text-center leading-tight ${
                    isActive ? step.textColor : isCompleted ? 'text-emerald-400' : 'text-slate-500'
                  }`}>
                    {step.name.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Ecosystem Power Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-400">Ecosystem Power</span>
              <span className="text-sm font-bold text-[#c9a227]">{ecosystemBuildSteps[activeBuildStep - 1].ecosystemPower}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-[#c9a227] to-purple-500 transition-all duration-700 ease-out relative"
                style={{ width: `${ecosystemBuildSteps[activeBuildStep - 1].ecosystemPower}%` }}
              >
                <div className="absolute inset-0 bg-white/10 animate-pulse" />
              </div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-slate-500">Foundation</span>
              <span className="text-xs text-slate-500">Super-App Complete</span>
            </div>
          </div>

          {/* Active Step Detail */}
          {(() => {
            const step = ecosystemBuildSteps[activeBuildStep - 1];
            return (
              <div className={`${step.bgColor} border-2 ${step.borderColor} rounded-2xl overflow-hidden`}>
                {/* Step Header */}
                <div className="p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="bg-slate-900/50 text-white font-bold px-3 py-1 rounded-full text-sm">
                          Step {step.step} of 10
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${step.phaseColor}`}>
                          {step.phase}
                        </span>
                        <span className="bg-slate-900/50 text-slate-300 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {step.timeline}
                        </span>
                      </div>
                      <h3 className={`text-xl sm:text-2xl font-black ${step.textColor} mt-1`}>{step.name}</h3>
                      <p className="text-slate-400 text-sm">{step.tagline}</p>
                    </div>
                    <div className="flex gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
                      <div className="bg-slate-900/50 rounded-xl px-4 py-2 text-center">
                        <div className={`text-xl font-bold ${step.textColor}`}>{step.cumulativeApps}</div>
                        <div className="text-xs text-slate-400">Total Apps</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-xl px-4 py-2 text-center">
                        <div className={`text-xl font-bold ${step.textColor}`}>{step.cumulativeUsers}</div>
                        <div className="text-xs text-slate-400">Users</div>
                      </div>
                    </div>
                  </div>

                  {/* Sister Companies Involved */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="text-xs text-slate-500 font-medium pt-1">Sister Companies:</span>
                    {step.sisterCompanies.map((company: string, i: number) => (
                      <span key={i} className={`${step.bgColor} border ${step.borderColor} px-3 py-1 rounded-full text-xs ${step.textColor} font-bold`}>
                        {company}
                      </span>
                    ))}
                  </div>

                  {/* Why Now */}
                  <div className="bg-slate-900/40 rounded-xl p-4 mb-5 border border-slate-700/50">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-[#c9a227]" />
                      Why Build This Now?
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{step.whyNow}</p>
                  </div>

                  {/* Documentation Specs */}
                  <div className="bg-slate-900/40 rounded-xl p-3 mb-5 border border-slate-700/50">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-blue-400 text-xs font-bold">From Documentation:</span>
                      <span className="text-slate-300 text-xs">{step.docsDetail}</span>
                    </div>
                  </div>

                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* What Gets Built */}
                    <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-700/50">
                      <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                        <Rocket className={`w-4 h-4 ${step.textColor}`} />
                        What Rabtul Builds
                      </h4>
                      <div className="space-y-2">
                        {step.whatItBuilds.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className={`w-4 h-4 ${step.textColor} flex-shrink-0 mt-0.5`} />
                            <span className="text-slate-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Apps Unlocked */}
                    <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-700/50">
                      <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                        <Sparkles className={`w-4 h-4 ${step.textColor}`} />
                        Apps Unlocked
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {step.appsUnlocked.map((app, i) => (
                          <span key={i} className={`${step.bgColor} border ${step.borderColor} px-3 py-1 rounded-full text-xs ${step.textColor} font-medium`}>
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connections - How it plugs into existing ecosystem */}
                  {step.connectsTo.length > 0 && (
                    <div className="mt-5 bg-slate-900/40 rounded-xl p-4 border border-slate-700/50">
                      <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                        <Network className="w-4 h-4 text-emerald-400" />
                        Connects To (Ecosystem Links)
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {step.connectsTo.map((connection, i) => (
                          <div key={i} className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-3 py-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="text-emerald-400 text-sm font-medium">{connection}</span>
                            <ArrowRight className="w-3 h-3 text-emerald-400/50" />
                            <span className={`${step.textColor} text-sm font-bold`}>{step.name.split(' ')[0]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Synergies Unlocked */}
                  <div className="mt-5 bg-gradient-to-r from-[#c9a227]/10 to-emerald-500/5 rounded-xl p-4 border border-[#c9a227]/30">
                    <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#c9a227]" />
                      Synergies Unlocked
                    </h4>
                    <div className="space-y-2">
                      {step.synergiesUnlocked.map((synergy, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">{synergy}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Network Effect */}
                  <div className="mt-5 bg-purple-500/10 rounded-xl p-4 border border-purple-500/30">
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-purple-400" />
                      Network Effect
                    </h4>
                    <p className="text-purple-300 text-sm leading-relaxed font-medium">{step.networkEffect}</p>
                  </div>

                  {/* Licenses & Regulatory Requirements */}
                  {step.licensesNeeded && step.licensesNeeded.length > 0 && (
                    <div className="mt-5 bg-slate-900/40 rounded-xl p-4 border border-amber-500/30">
                      <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-amber-400" />
                        Licenses & Regulatory Requirements
                        <span className="bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full text-xs ml-auto">
                          {step.licensesNeeded.length} {step.licensesNeeded.length === 1 ? 'area' : 'areas'}
                        </span>
                      </h4>
                      <div className="space-y-3">
                        {step.licensesNeeded.map((license: { app: string; licenses: string[]; authority: string; difficulty: string; timeline: string; cost: string }, li: number) => (
                          <div key={li} className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/50">
                            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                              <span className="text-white font-bold text-sm">{license.app}</span>
                              <div className="flex items-center gap-2">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  license.difficulty === 'None' || license.difficulty === 'Easy' || license.difficulty === 'Low'
                                    ? 'bg-emerald-500/20 text-emerald-400'
                                    : license.difficulty === 'Easy-Medium' || license.difficulty === 'Medium'
                                    ? 'bg-yellow-500/20 text-yellow-400'
                                    : license.difficulty === 'Medium-Hard' || license.difficulty === 'Hard'
                                    ? 'bg-orange-500/20 text-orange-400'
                                    : 'bg-red-500/20 text-red-400'
                                }`}>
                                  {license.difficulty}
                                </span>
                                <span className="text-slate-500 text-[10px]">{license.timeline}</span>
                              </div>
                            </div>
                            <div className="space-y-1 mb-2">
                              {license.licenses.map((lic: string, idx: number) => (
                                <div key={idx} className="flex items-start gap-2 text-xs">
                                  <Shield className="w-3 h-3 text-amber-400/70 flex-shrink-0 mt-0.5" />
                                  <span className="text-slate-300">{lic}</span>
                                </div>
                              ))}
                            </div>
                            <div className="flex items-center justify-between text-[10px] pt-2 border-t border-slate-700/50">
                              <span className="text-slate-500">Authority: <span className="text-slate-400">{license.authority}</span></span>
                              <span className="text-slate-500">Est. Cost: <span className="text-amber-400 font-medium">{license.cost}</span></span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Step Navigation */}
                <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-slate-900/30 border-t border-slate-700/50">
                  <button
                    onClick={() => setActiveBuildStep(Math.max(1, activeBuildStep - 1))}
                    disabled={activeBuildStep === 1}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeBuildStep === 1
                        ? 'text-slate-600 cursor-not-allowed'
                        : 'text-white bg-slate-800 hover:bg-slate-700'
                    }`}
                  >
                    <ChevronUp className="w-4 h-4 -rotate-90" /> Previous
                  </button>
                  <Link
                    href="/rabtul-tech"
                    className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1"
                  >
                    View Rabtul Tasks <ArrowRight size={14} />
                  </Link>
                  <button
                    onClick={() => setActiveBuildStep(Math.min(10, activeBuildStep + 1))}
                    disabled={activeBuildStep === 10}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeBuildStep === 10
                        ? 'text-slate-600 cursor-not-allowed'
                        : `text-white bg-gradient-to-r ${ecosystemBuildSteps[activeBuildStep]?.color || step.color} hover:opacity-90`
                    }`}
                  >
                    Next <ChevronDown className="w-4 h-4 -rotate-90" />
                  </button>
                </div>
              </div>
            );
          })()}

          {/* Ecosystem Growth Summary - Visual Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-3">
            {ecosystemBuildSteps.slice(0, activeBuildStep).map((step) => (
              <div
                key={step.step}
                onClick={() => setActiveBuildStep(step.step)}
                className={`${step.bgColor} border ${step.borderColor} rounded-xl p-3 text-center cursor-pointer hover:scale-105 transition-all ${
                  activeBuildStep === step.step ? 'ring-2 ring-white/30 scale-105' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <step.icon className={`w-6 h-6 mx-auto mb-1 ${step.textColor}`} />
                <div className={`text-xs font-bold ${step.textColor}`}>{step.name.split(' ')[0]}</div>
                <div className="text-[10px] text-slate-400">{step.cumulativeApps} apps</div>
              </div>
            ))}
            {ecosystemBuildSteps.slice(activeBuildStep).map((step) => (
              <div
                key={step.step}
                onClick={() => setActiveBuildStep(step.step)}
                className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-3 text-center cursor-pointer hover:scale-105 transition-all opacity-40 hover:opacity-60"
              >
                <step.icon className="w-6 h-6 mx-auto mb-1 text-slate-600" />
                <div className="text-xs font-bold text-slate-600">{step.name.split(' ')[0]}</div>
                <div className="text-[10px] text-slate-600">Step {step.step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex gap-2">
              {[
                { id: 'all', label: 'All Apps', count: totalApps },
                { id: 'built', label: 'Built', count: builtApps },
                { id: 'planned', label: 'Planned', count: plannedApps },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setFilterStatus(filter.id as 'all' | 'built' | 'planned')}
                  className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    filterStatus === filter.id
                      ? filter.id === 'built' ? 'bg-emerald-500 text-white' :
                        filter.id === 'planned' ? 'bg-blue-500 text-white' :
                        'bg-[#c9a227] text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {filter.label}
                  <span className="bg-white/20 px-1.5 py-0.5 rounded text-xs">{filter.count}</span>
                </button>
              ))}
            </div>
            <Link
              href="/ecosystem"
              className="text-[#c9a227] hover:text-[#f4d35e] text-xs sm:text-sm flex items-center gap-1"
            >
              View Ecosystem Overview <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="space-y-4 sm:space-y-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className={`${category.bgColor} border-2 ${category.borderColor} rounded-xl overflow-hidden`}
            >
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`text-base sm:text-xl font-bold ${category.textColor}`}>
                        {category.name}
                      </h3>
                      <span className="text-slate-400 text-xs sm:text-sm">{category.arabic}</span>
                      <span className="bg-slate-900/50 px-2 py-0.5 rounded text-xs text-slate-300">
                        {category.apps.filter(a => a.status === 'built').length} built / {category.apps.length} total
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm mt-0.5">{category.description}</p>
                  </div>
                </div>
                {expandedCategory === category.id ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {expandedCategory === category.id && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {category.apps.map((app, i) => (
                      <div
                        key={i}
                        className={`bg-slate-900/50 rounded-xl p-3 sm:p-4 border ${
                          app.status === 'built' ? 'border-emerald-500/50' : 'border-slate-700/50'
                        } hover:border-${category.textColor.replace('text-', '')}/50 transition-all`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${category.bgColor} flex items-center justify-center flex-shrink-0`}>
                            <app.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${category.textColor}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="text-white font-bold text-sm sm:text-base">{app.name}</h4>
                              <span className="text-slate-500 text-xs">{app.arabic}</span>
                            </div>
                            <p className="text-slate-400 text-xs sm:text-sm mt-1 line-clamp-2">{app.description}</p>
                            <div className="flex items-center gap-2 mt-2 flex-wrap">
                              {app.status === 'built' ? (
                                <>
                                  <span className="inline-flex items-center gap-1 text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">
                                    <CheckCircle size={12} /> Built
                                  </span>
                                  {app.href && (
                                    <Link
                                      href={app.href}
                                      className={`text-xs ${category.textColor} hover:underline`}
                                    >
                                      View →
                                    </Link>
                                  )}
                                </>
                              ) : (
                                <>
                                  <span className="inline-flex items-center gap-1 text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
                                    <Clock size={12} /> Planned
                                  </span>
                                  {app.timeline && (
                                    <span className="text-xs text-slate-500">{app.timeline}</span>
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Summary Section */}
      <section className="bg-gradient-to-r from-[#c9a227]/10 to-purple-500/10 border-t border-[#c9a227]/30 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">
            Ecosystem Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Built Products */}
            <div className="bg-emerald-500/10 rounded-xl p-4 sm:p-6 border border-emerald-500/30">
              <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Built ({builtApps})
              </h3>
              <div className="space-y-2">
                {ecosystemCategories.flatMap(cat =>
                  cat.apps.filter(a => a.status === 'built').map(app => (
                    <div key={app.name} className="flex items-center justify-between text-sm">
                      <span className="text-white">{app.name}</span>
                      {app.href && (
                        <Link href={app.href} className="text-emerald-400 hover:underline text-xs">View</Link>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Coming Q2-Q3 2027 */}
            <div className="bg-blue-500/10 rounded-xl p-4 sm:p-6 border border-blue-500/30">
              <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5" /> Coming 2027
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {ecosystemCategories.flatMap(cat =>
                  cat.apps.filter(a => a.status === 'planned' && a.timeline?.includes('2027')).map(app => (
                    <div key={app.name} className="flex items-center justify-between text-sm">
                      <span className="text-white">{app.name}</span>
                      <span className="text-blue-400 text-xs">{app.timeline}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Coming 2028+ */}
            <div className="bg-purple-500/10 rounded-xl p-4 sm:p-6 border border-purple-500/30">
              <h3 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5" /> Coming 2028+
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {ecosystemCategories.flatMap(cat =>
                  cat.apps.filter(a => a.status === 'planned' && (a.timeline?.includes('2028') || a.timeline?.includes('2029'))).map(app => (
                    <div key={app.name} className="flex items-center justify-between text-sm">
                      <span className="text-white">{app.name}</span>
                      <span className="text-purple-400 text-xs">{app.timeline}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* RTMN Navigation Hub */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/rtmn-group"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors"
            >
              <Building2 className="w-5 h-5" />
              RTMN Group
            </Link>
            <Link
              href="/rtmn-dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-700 transition-colors"
            >
              <BarChart3 className="w-5 h-5" />
              RTMN Dashboard
            </Link>
            <Link
              href="/group-master-plan"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-700 transition-colors"
            >
              <Target className="w-5 h-5" />
              Master Plan
            </Link>
            <Link
              href="/group-launch-strategy"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-700 transition-colors"
            >
              <Rocket className="w-5 h-5" />
              Launch Strategy
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
