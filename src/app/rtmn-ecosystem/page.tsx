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
    id: 'rez-core',
    name: 'ReZ Core',
    arabic: 'ريز الأساسي',
    description: 'The foundation - super-app, AI assistant, discovery, gamification',
    color: 'from-[#c9a227] to-amber-600',
    textColor: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]',
    icon: Crown,
    apps: [
      { name: 'ReZ (Nuqta)', arabic: 'نقطة', status: 'built', description: 'Super-app hub - unified wallet, membership, rewards', icon: Crown, href: '/nuqta-plus' },
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
      { name: 'ReZPay', arabic: 'ريز باي', status: 'planned', description: 'Digital wallet - QR payments, P2P transfers', icon: CreditCardIcon, timeline: 'Q2 2027' },
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
  const [expandedCategory, setExpandedCategory] = useState<string | null>('rez-core');
  const [filterStatus, setFilterStatus] = useState<'all' | 'built' | 'planned'>('all');

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
              The complete Nuqta (ReZ/RTMN) digital ecosystem - from super-app core to 24 delivery verticals,
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

          {/* Navigation */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/ecosystem"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors"
            >
              <Network className="w-5 h-5" />
              Ecosystem Overview
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
