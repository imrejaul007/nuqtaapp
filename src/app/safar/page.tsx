'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Plane, Globe, FileText, Shield, TrendingUp, Users, Target,
  Rocket, CheckCircle, AlertTriangle, Clock, Building, ArrowRight,
  Star, Zap, BarChart3, Award, Handshake, Store, CreditCard,
  Calculator, Gift, Crown, Wallet, ChevronRight,
  ChevronDown, ChevronUp, Building2, ShieldCheck, HeartHandshake,
  Coins, Network, MapPin, Smartphone, Banknote, Phone,
  BadgePercent, CircleDollarSign, PieChart, LineChart, ArrowUpRight,
  Timer, UserCheck, Lock, Eye, Search, Home, ShoppingBag,
  Package, Calendar, RefreshCw, Layers, Sparkles, Send,
  Hotel, Car, Camera, Palmtree, Mountain, Tent, Ship,
  Ticket, Map, Compass, Luggage, Stamp, Flag, Wifi,
  Anchor, Waves, Sun, TreePine, DollarSign, Percent,
  ArrowDown, ArrowUp, X, Check, Info, Heart, Gem
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── Hero Stats ───
const heroStats = [
  { label: 'GDS Integration', value: 'Amadeus + Sabre', icon: Globe, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { label: 'Airlines Connected', value: '500+', icon: Plane, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { label: 'Hotels Worldwide', value: '1M+', icon: Hotel, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { label: 'Adventure Apps', value: '8', icon: Mountain, color: 'text-orange-400', bg: 'bg-orange-500/10' },
  { label: 'TravoPay Currencies', value: '50+', icon: Wallet, color: 'text-violet-400', bg: 'bg-violet-500/10' },
  { label: 'GCC Outbound Market', value: '$50B+', icon: TrendingUp, color: 'text-green-400', bg: 'bg-green-500/10' },
];

// ─── Key Metrics ───
const keyStats = [
  { label: 'UAE Outbound Travel', value: '$15B', suffix: 'annually', color: 'text-green-400' },
  { label: 'GCC Total Market', value: '$50B+', suffix: 'outbound travel', color: 'text-blue-400' },
  { label: 'Avg Booking Value', value: '3,500', suffix: 'AED', color: 'text-purple-400' },
  { label: 'Commission Range', value: '8-15%', suffix: 'on bookings', color: 'text-[#c9a227]' },
  { label: 'Market Growth', value: '12%', suffix: 'YoY', color: 'text-cyan-400' },
  { label: 'Nuqta Coins', value: '3X', suffix: 'earning on travel', color: 'text-amber-400' },
];

// ─── Travel Products ───
const travelProducts = [
  {
    name: 'Airzy',
    arabic: 'إيرزي',
    category: 'Flights',
    icon: Plane,
    description: 'Best rates on 500+ airlines via Amadeus & Sabre GDS',
    features: ['Price comparison across GDS', 'Flexible dates', 'Multi-city trips', 'Business/First class deals', 'Group bookings', 'Last-minute flights', 'Fare alerts', 'Seat selection'],
    pricing: 'Google rate + 0% markup',
    commission: '3% average',
    turnaround: 'Instant booking',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    name: 'Staycay',
    arabic: 'ستيكاي',
    category: 'Hotels',
    icon: Hotel,
    description: '1M+ properties from budget hostels to ultra-luxury resorts',
    features: ['Best price guarantee', 'Free cancellation', 'Loyalty rewards', 'Verified reviews', 'Map-based search', 'Apartment stays', 'Resort packages', 'Last-minute deals'],
    pricing: 'Up to 30% off with Nuqta+',
    commission: '15% average',
    turnaround: 'Instant confirmation',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
  },
  {
    name: 'Packages',
    arabic: 'باقات',
    category: 'Travel Packages',
    icon: Package,
    description: 'All-inclusive packages: flights + hotels + visa + experiences',
    features: ['Curated itineraries', 'Visa included', 'Airport transfers', 'Guided tours', 'Travel insurance', 'Customizable plans', 'Group discounts', 'Honeymoon specials'],
    pricing: 'Save 20-30% vs separate booking',
    commission: '12% average',
    turnaround: '24hr confirmation',
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  {
    name: 'Visa Processing',
    arabic: 'تأشيرات',
    category: 'Visa Services',
    icon: Stamp,
    description: 'End-to-end visa processing for 150+ countries',
    features: ['Tourist visas', 'Business visas', 'Transit visas', 'eVisa processing', 'Document prep', 'Embassy booking', '98% approval rate', 'Money-back guarantee'],
    pricing: 'From 99 AED + govt fees',
    commission: '40-60% margin',
    turnaround: '24hrs - 15 days',
    color: 'from-red-500 to-pink-600',
    textColor: 'text-red-400',
    bgColor: 'bg-red-500/10',
  },
  {
    name: 'Travel Insurance',
    arabic: 'تأمين سفر',
    category: 'Insurance',
    icon: Shield,
    description: 'Comprehensive coverage for worry-free travel',
    features: ['Medical coverage', 'Trip cancellation', 'Lost luggage', 'Flight delays', 'COVID coverage', 'Adventure sports', 'Family plans', 'Annual multi-trip'],
    pricing: 'From 25 AED/trip',
    commission: '25-35% commission',
    turnaround: 'Instant policy',
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
  },
  {
    name: 'Rakab Transfers',
    arabic: 'ركاب',
    category: 'Airport Transfers',
    icon: Car,
    description: 'Seamless airport pickup & drop-off via Rakab integration',
    features: ['Airport pickup', 'Hotel transfers', 'Meet & greet', 'Luxury vehicles', 'Chauffeur service', 'Flight tracking', 'Free for packages', 'Multi-city'],
    pricing: 'From 79 AED',
    commission: 'Ecosystem synergy',
    turnaround: 'Pre-scheduled',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    name: 'Experiences',
    arabic: 'تجارب',
    category: 'Tours & Activities',
    icon: Camera,
    description: 'Curated tours, activities & unique local experiences',
    features: ['City tours', 'Adventure activities', 'Cultural experiences', 'Food tours', 'Day trips', 'VIP access', 'Skip-the-line', 'Private guides'],
    pricing: '5% Nuqta coins on all bookings',
    commission: '10-20% commission',
    turnaround: 'Instant booking',
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
];

// ─── Adventure Apps ───
const adventureApps = [
  { name: 'Weekendzy', arabic: 'ويكندزي', icon: Sun, description: 'Weekend getaway planner for short trips & staycations', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' },
  { name: 'BeachLife', arabic: 'بيتش لايف', icon: Waves, description: 'Beach resorts, water sports & coastal experiences', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30' },
  { name: 'DesertVibes', arabic: 'ديزرت فايبز', icon: Sun, description: 'Desert safaris, dune bashing & Bedouin camps', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
  { name: 'CityExplore', arabic: 'سيتي إكسبلور', icon: Building2, description: 'Urban adventures, city tours & nightlife guides', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  { name: 'Trekzy', arabic: 'تريكزي', icon: Mountain, description: 'Hiking trails, mountain treks & outdoor adventures', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30' },
  { name: 'Campzy', arabic: 'كامبزي', icon: Tent, description: 'Glamping, camping spots & outdoor gear rental', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
  { name: 'DiveDeep', arabic: 'دايف ديب', icon: Anchor, description: 'Scuba diving, snorkeling & underwater exploration', color: 'text-teal-400', bg: 'bg-teal-500/10', border: 'border-teal-500/30' },
  { name: 'YachtAway', arabic: 'يوت أواي', icon: Ship, description: 'Yacht charters, sailing trips & island hopping', color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/30' },
];

// ─── Fakhir Luxury Concierge ───
const fakhirServices = [
  { service: 'Private Jet Charter', description: 'On-demand private aviation across GCC & worldwide', price: 'From 25,000 AED', icon: Plane },
  { service: 'Yacht Charter', description: 'Luxury yachts for day cruises, parties & island hopping', price: 'From 5,000 AED/day', icon: Ship },
  { service: 'Exclusive Restaurants', description: 'Priority reservations at Michelin-star & exclusive venues', price: 'Complimentary for Prive', icon: Star },
  { service: 'VIP Airport Services', description: 'Fast-track immigration, lounge access & limousine transfer', price: 'From 1,500 AED', icon: Crown },
  { service: 'Luxury Villa Rentals', description: 'Curated ultra-luxury villas in premium destinations', price: 'From 10,000 AED/night', icon: Home },
  { service: 'Bespoke Itineraries', description: 'Fully customized travel planned by expert concierge', price: 'Complimentary for Prive', icon: Map },
];

// ─── TravoPay Wallet ───
const travoPayFeatures = [
  { feature: 'Multi-Currency Wallet', description: 'Hold & spend in 50+ currencies using Hawil FX engine', icon: Wallet, color: 'text-violet-400' },
  { feature: 'Real-Time FX', description: 'Mid-market exchange rates with 0.5% transparent markup', icon: RefreshCw, color: 'text-blue-400' },
  { feature: 'Save 3-5% on FX', description: 'vs traditional bank cards charging 3-5% foreign transaction fees', icon: BadgePercent, color: 'text-emerald-400' },
  { feature: '3X Nuqta Coins', description: 'Earn triple Nuqta coins on every travel purchase', icon: Coins, color: 'text-amber-400' },
  { feature: 'Instant Top-Up', description: 'Load from bank account, Hawil Card or Apple/Google Pay', icon: Zap, color: 'text-cyan-400' },
  { feature: 'Spend Anywhere', description: 'Accepted at 40M+ merchants worldwide via Visa network', icon: Globe, color: 'text-green-400' },
];

// ─── How It Works ───
const howItWorks = [
  { step: 1, title: 'Search', description: 'Find flights, hotels, packages or experiences', icon: Search, color: 'bg-blue-500' },
  { step: 2, title: 'Compare', description: 'Compare prices across 500+ airlines & 1M+ hotels', icon: BarChart3, color: 'bg-purple-500' },
  { step: 3, title: 'Book', description: 'Book instantly with best price guarantee', icon: CheckCircle, color: 'bg-emerald-500' },
  { step: 4, title: 'Pay', description: 'NuqtaPay, TravoPay or Qist BNPL split payment', icon: CreditCard, color: 'bg-violet-500' },
  { step: 5, title: 'Travel', description: 'Rakab airport transfer + Wasil pre-trip delivery', icon: Plane, color: 'bg-cyan-500' },
  { step: 6, title: 'Earn 3X Coins', description: 'Earn triple Nuqta coins on every travel booking', icon: Coins, color: 'bg-amber-500' },
];

// ─── Visa Services Detail ───
const visaServices = {
  headline: 'Visa Made Simple',
  description: 'From application to approval - we handle everything',
  popularDestinations: [
    { country: 'Schengen', flag: '🇪🇺', fee: '499 AED', time: '7-15 days', type: 'Tourist/Business' },
    { country: 'UK', flag: '🇬🇧', fee: '599 AED', time: '15-21 days', type: 'Tourist/Business' },
    { country: 'USA', flag: '🇺🇸', fee: '799 AED', time: '30-60 days', type: 'B1/B2' },
    { country: 'Turkey', flag: '🇹🇷', fee: '199 AED', time: '24-48 hrs', type: 'eVisa' },
    { country: 'Thailand', flag: '🇹🇭', fee: '149 AED', time: '24-48 hrs', type: 'eVisa' },
    { country: 'Egypt', flag: '🇪🇬', fee: '99 AED', time: '24 hrs', type: 'eVisa' },
    { country: 'India', flag: '🇮🇳', fee: '199 AED', time: '3-5 days', type: 'eVisa' },
    { country: 'China', flag: '🇨🇳', fee: '699 AED', time: '7-10 days', type: 'Tourist' },
  ],
  process: [
    { step: 1, title: 'Submit Documents', description: 'Upload passport, photos, and required docs via app', icon: FileText },
    { step: 2, title: 'Expert Review', description: 'Our team checks everything for errors', icon: Eye },
    { step: 3, title: 'Application Filed', description: 'We submit to embassy/consulate on your behalf', icon: Send },
    { step: 4, title: 'Track Status', description: 'Real-time updates on your application', icon: Search },
    { step: 5, title: 'Visa Delivered', description: 'Digital visa or passport delivered to you', icon: CheckCircle },
  ],
  guarantees: [
    { guarantee: 'Money-Back', description: 'Full refund if visa rejected due to our error' },
    { guarantee: 'Price Match', description: 'We match any lower price for same service' },
    { guarantee: 'Express Option', description: 'Urgent processing available for most visas' },
    { guarantee: '24/7 Support', description: 'WhatsApp support throughout the process' },
  ],
};

// ─── Travel Packages ───
const travelPackages = [
  { destination: 'Europe Explorer', countries: ['France', 'Italy', 'Switzerland'], duration: '10 Days', price: '12,999 AED', includes: ['Flights', 'Hotels', 'Schengen Visa', 'Transfers', 'Tours'], savings: 'Save 2,500 AED vs booking separately', image: '🗼', color: 'border-blue-500', qistMonthly: '1,083' },
  { destination: 'Thailand Paradise', countries: ['Bangkok', 'Phuket', 'Krabi'], duration: '7 Days', price: '4,999 AED', includes: ['Flights', 'Hotels', 'Airport transfers', 'Island tour'], savings: 'Save 1,200 AED vs booking separately', image: '🏝️', color: 'border-emerald-500', qistMonthly: '417' },
  { destination: 'Maldives Luxury', countries: ['Male', 'Resort Island'], duration: '5 Days', price: '8,999 AED', includes: ['Flights', '5-star resort', 'Seaplane', 'All meals'], savings: 'Save 3,000 AED vs direct booking', image: '🏖️', color: 'border-cyan-500', qistMonthly: '750' },
  { destination: 'Turkey Discovery', countries: ['Istanbul', 'Cappadocia'], duration: '6 Days', price: '3,999 AED', includes: ['Flights', 'Hotels', 'eVisa', 'Balloon ride', 'Tours'], savings: 'Save 800 AED vs booking separately', image: '🎈', color: 'border-red-500', qistMonthly: '333' },
];

// ─── Unit Economics ───
const unitEconomics = [
  { metric: 'Avg Booking Value', value: '3,500 AED', detail: 'Blended across flights, hotels, packages' },
  { metric: 'Flight Commission', value: '3%', detail: '~105 AED per flight booking' },
  { metric: 'Hotel Commission', value: '15%', detail: '~525 AED per hotel booking' },
  { metric: 'Package Commission', value: '12%', detail: '~420 AED per package booking' },
  { metric: 'Avg Blended Margin', value: '350 AED', detail: 'Per booking across all products' },
  { metric: 'TravoPay FX Revenue', value: '0.5%', detail: 'On every international spend' },
  { metric: 'Insurance Commission', value: '30%', detail: '~30 AED per policy sold' },
  { metric: 'CAC (Customer Acquisition)', value: '120 AED', detail: 'Blended digital + ecosystem referral' },
  { metric: 'LTV (Lifetime Value)', value: '2,800 AED', detail: '8 bookings avg over 3 years' },
  { metric: 'LTV:CAC Ratio', value: '23:1', detail: 'Excellent unit economics' },
];

// ─── Revenue Model ───
const revenueStreams = [
  { stream: 'Booking Commissions', share: '55%', value: '3-15% per booking', description: 'Flights 3%, Hotels 15%, Packages 12%, Experiences 10-20%', icon: Ticket, color: 'text-cyan-400' },
  { stream: 'TravoPay FX Markup', share: '18%', value: '0.5% on intl spend', description: 'Revenue from multi-currency wallet FX conversions using Hawil engine', icon: Wallet, color: 'text-violet-400' },
  { stream: 'Travel Insurance', share: '10%', value: '25-35% commission', description: 'Commission on travel insurance policies sold through platform', icon: Shield, color: 'text-pink-400' },
  { stream: 'Fakhir Premium Fees', share: '8%', value: '5-10% service fee', description: 'Luxury concierge fees for private jets, yachts & bespoke travel', icon: Crown, color: 'text-[#c9a227]' },
  { stream: 'Advertising Revenue', share: '5%', value: 'CPM/CPC model', description: 'Hotel/airline featured placements & destination advertising', icon: Eye, color: 'text-orange-400' },
  { stream: 'Visa Processing', share: '4%', value: '40-60% margin', description: 'High-margin visa processing with volume-based pricing', icon: Stamp, color: 'text-red-400' },
];

// ─── Market Opportunity ───
const marketData = [
  { market: 'GCC Outbound Travel', value: '$50B+', growth: '12% YoY', detail: 'Total addressable market across 6 GCC countries' },
  { market: 'UAE Alone', value: '$15B', growth: '14% YoY', detail: 'UAE residents are among the highest travel spenders globally' },
  { market: 'Saudi Arabia', value: '$20B', growth: '18% YoY', detail: 'Fastest growing with Vision 2030 tourism push' },
  { market: 'Online Travel Booking', value: '45%', growth: '+5% YoY', detail: 'Share of travel booked online, growing fast' },
  { market: 'GCC Visa Processing', value: '$2B', growth: '10% YoY', detail: '15M+ visa applications annually from GCC' },
  { market: 'Travel BNPL Opportunity', value: '$5B', growth: '25% YoY', detail: 'Untapped market for travel financing in GCC' },
];

// ─── Competitor Analysis ───
const competitors = [
  { name: 'Booking.com', strengths: 'Largest hotel inventory, strong brand', weaknesses: 'No visa, no BNPL, no FX savings, no loyalty coins', safarAdvantage: 'Ecosystem integration (BNPL + coins + FX)' },
  { name: 'Expedia', strengths: 'Full-service OTA, packages', weaknesses: 'No GCC focus, no Arabic-first, high FX fees', safarAdvantage: 'GCC-first + Arabic UX + 0% FX' },
  { name: 'Skyscanner', strengths: 'Best flight comparison', weaknesses: 'Metasearch only, no booking, no extras', safarAdvantage: 'Full booking + visa + insurance + BNPL' },
  { name: 'Wego', strengths: 'MENA-focused metasearch', weaknesses: 'No direct booking, no visa, no BNPL', safarAdvantage: 'End-to-end booking + Nuqta ecosystem' },
  { name: 'Almosafer', strengths: 'Saudi-focused, Arabic UX', weaknesses: 'Saudi-only, no BNPL, limited ecosystem', safarAdvantage: 'Pan-GCC + BNPL + multi-product ecosystem' },
  { name: 'Musafir', strengths: 'UAE presence, packages', weaknesses: 'Small scale, no tech moat, no BNPL', safarAdvantage: 'Superior tech + AI + ecosystem + BNPL' },
];

// ─── Ecosystem Integration ───
const ecosystemIntegration = [
  { product: 'Qist BNPL', integration: 'Split travel payments into 3-12 months', benefit: 'Split AED 5,000 flight into 6x AED 833', icon: Wallet, color: 'text-violet-400' },
  { product: 'Hawil FX Engine', integration: 'Powers TravoPay multi-currency wallet', benefit: 'Real-time FX at mid-market + 0.5% markup', icon: RefreshCw, color: 'text-blue-400' },
  { product: 'Rakab Rides', integration: 'Airport transfers & city transport', benefit: 'Free Rakab ride for package bookings', icon: Car, color: 'text-green-400' },
  { product: 'Wasil Delivery', integration: 'Pre-trip essentials delivered to your door', benefit: 'SIM cards, adapters, travel gear before you fly', icon: Package, color: 'text-orange-400' },
  { product: 'Nuqta Coins', integration: 'Earn 3X coins on all travel bookings', benefit: '3X earn rate — highest in the ecosystem', icon: Coins, color: 'text-amber-400' },
  { product: 'Nuqta+ Membership', integration: 'Exclusive member discounts on travel', benefit: 'Up to 30% off hotels, 10% off flights', icon: Crown, color: 'text-[#c9a227]' },
  { product: 'Hawil Card', integration: 'Pay for travel at Google rate', benefit: 'Save 3-5% on international bookings', icon: CreditCard, color: 'text-cyan-400' },
  { product: 'NuqtaPay', integration: 'One-tap checkout for all travel', benefit: 'Fastest checkout with saved payment methods', icon: Zap, color: 'text-pink-400' },
];

// ─── Roadmap ───
const roadmapPhases = [
  {
    phase: 'Phase 1', title: 'Flights + Hotels', timeline: 'Q2 2027', status: 'planned',
    milestones: ['Amadeus/Sabre GDS integration live', 'Airzy flight booking launch', 'Staycay hotel aggregator (1M+ properties)', 'Hawil Card payment integration', 'Basic Nuqta coins earning (1X)', 'UAE market only'],
    color: 'border-green-500', bgColor: 'bg-green-500/10',
  },
  {
    phase: 'Phase 2', title: 'Packages + Visa', timeline: 'Q4 2027', status: 'pending',
    milestones: ['Travel packages builder launch', 'Visa processing for top 50 countries', 'Travel insurance integration', 'Qist BNPL for travel enabled', 'Rakab airport transfer integration', 'Car rental partnerships'],
    color: 'border-blue-500', bgColor: 'bg-blue-500/10',
  },
  {
    phase: 'Phase 3', title: 'TravoPay + Adventures', timeline: 'Q2 2028', status: 'pending',
    milestones: ['TravoPay multi-currency wallet launch', 'All 8 adventure apps live', 'Experiences marketplace', '3X Nuqta coins on travel', 'AI trip planner beta', 'Wasil pre-trip delivery integration'],
    color: 'border-purple-500', bgColor: 'bg-purple-500/10',
  },
  {
    phase: 'Phase 4', title: 'Fakhir + GCC Expansion', timeline: 'Q4 2028', status: 'pending',
    milestones: ['Fakhir luxury concierge launch', 'Saudi Arabia expansion', 'Qatar & Kuwait markets', 'Corporate travel management', 'Bahrain & Oman rollout', 'Global partnerships scaling'],
    color: 'border-[#c9a227]', bgColor: 'bg-[#c9a227]/10',
  },
];

// ─── Risk Analysis ───
const risks = [
  { risk: 'GDS Costs', severity: 'High', description: 'Amadeus/Sabre per-booking fees of $2-5 compress margins on low-value flights', mitigation: 'Negotiate volume discounts, direct airline connects for top routes, push higher-margin hotels/packages', icon: DollarSign, color: 'text-red-400' },
  { risk: 'Airline Payment Terms', severity: 'High', description: 'Airlines require payment upfront but customers may pay via BNPL over months', mitigation: 'Qist BNPL assumes credit risk; Safar receives payment at booking; working capital facility', icon: Clock, color: 'text-red-400' },
  { risk: 'Seasonality', severity: 'Medium', description: 'Travel demand peaks in summer/Eid and drops significantly in off-seasons', mitigation: 'Diversify into visa processing (year-round), corporate travel, and domestic experiences', icon: Calendar, color: 'text-amber-400' },
  { risk: 'Competition', severity: 'Medium', description: 'Global OTAs (Booking, Expedia) and regional players (Almosafer, Wego) are well-funded', mitigation: 'Differentiate via BNPL + coins + ecosystem; GCC-first with Arabic UX; lower CAC via ecosystem', icon: Users, color: 'text-amber-400' },
  { risk: 'Regulatory (Visa)', severity: 'Medium', description: 'Visa processing regulations differ by country, may require local licenses', mitigation: 'Partner with licensed IATA agents; obtain local travel agency licenses in each GCC market', icon: Shield, color: 'text-amber-400' },
  { risk: 'FX Volatility', severity: 'Low', description: 'TravoPay exposed to currency fluctuation between booking and settlement', mitigation: 'Hawil FX engine hedges in real-time; AED peg to USD eliminates major risk', icon: TrendingUp, color: 'text-green-400' },
];

// ─── Financial Projections ───
const financialProjections = [
  { year: 'Year 1', bookings: 50000, gmv: 175, revenue: 17.5, netProfit: -5, users: 30000, arpu: 583 },
  { year: 'Year 2', bookings: 200000, gmv: 700, revenue: 70, netProfit: 15, users: 100000, arpu: 700 },
  { year: 'Year 3', bookings: 600000, gmv: 2100, revenue: 210, netProfit: 65, users: 250000, arpu: 840 },
  { year: 'Year 4', bookings: 1500000, gmv: 5250, revenue: 525, netProfit: 180, users: 500000, arpu: 1050 },
  { year: 'Year 5', bookings: 3000000, gmv: 10500, revenue: 1050, netProfit: 400, users: 900000, arpu: 1167 },
];

// ─── GCC Expansion ───
const gccExpansion = {
  headline: 'GCC + Global Expansion',
  description: 'Safar expands from UAE to serve travelers across all 6 GCC countries and beyond',
  countries: [
    { country: 'UAE', flag: '🇦🇪', status: 'Active', market: '$15B', timeline: '2027', travelers: '4.5M outbound' },
    { country: 'Saudi Arabia', flag: '🇸🇦', status: 'Phase 2', market: '$20B', timeline: '2028', travelers: '7M outbound' },
    { country: 'Qatar', flag: '🇶🇦', status: 'Phase 3', market: '$5B', timeline: '2028', travelers: '1.5M outbound' },
    { country: 'Kuwait', flag: '🇰🇼', status: 'Phase 3', market: '$4B', timeline: '2029', travelers: '2M outbound' },
    { country: 'Bahrain', flag: '🇧🇭', status: 'Phase 4', market: '$2B', timeline: '2029', travelers: '1M outbound' },
    { country: 'Oman', flag: '🇴🇲', status: 'Phase 4', market: '$3B', timeline: '2029', travelers: '1.5M outbound' },
  ],
};

export default function SafarPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Plane },
    { id: 'products', label: 'Travel Products', icon: Layers },
    { id: 'adventures', label: 'Adventures', icon: Mountain },
    { id: 'fakhir', label: 'Fakhir Luxury', icon: Crown },
    { id: 'travopay', label: 'TravoPay', icon: Wallet },
    { id: 'visas', label: 'Visas', icon: Stamp },
    { id: 'packages', label: 'Packages', icon: Package },
    { id: 'economics', label: 'Unit Economics', icon: Calculator },
    { id: 'revenue', label: 'Revenue', icon: PieChart },
    { id: 'market', label: 'Market', icon: Target },
    { id: 'competitors', label: 'Competitors', icon: Users },
    { id: 'ecosystem', label: 'Ecosystem', icon: Network },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket },
    { id: 'risks', label: 'Risks', icon: AlertTriangle },
    { id: 'gcc', label: 'GCC Expansion', icon: Globe },
    { id: 'financials', label: 'Financials', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* ══════════════════════ HERO SECTION ══════════════════════ */}
      <div className="bg-gradient-to-br from-[#0a1628] via-cyan-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full mb-4">
              <Plane className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-bold">Safar سفر — Complete Travel Ecosystem for GCC</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
              Your Complete <span className="text-cyan-400">Travel</span> Ecosystem
            </h1>
            <p className="text-slate-300 text-lg max-w-4xl mx-auto mb-2">
              Flights (Airzy) + Hotels (Staycay) + Visa + Insurance + Experiences + 8 Adventure Apps +
              Fakhir Luxury Concierge + TravoPay Multi-Currency Wallet — all in one super-app.
            </p>
            <p className="text-cyan-400/80 text-sm max-w-3xl mx-auto">
              Pay with NuqtaPay or split with Qist BNPL. Earn 3X Nuqta coins. Save 3-5% on FX with TravoPay.
            </p>
          </div>

          {/* Hero Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {heroStats.map((stat, i) => (
              <div key={i} className={`${stat.bg} rounded-xl p-3 text-center border border-slate-700/50`}>
                <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-1`} />
                <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {keyStats.map((stat, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-3 text-center border border-slate-700/50">
                <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.suffix}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════ NAVIGATION TABS ══════════════════════ */}
      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-2 gap-1 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-500 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════ MAIN CONTENT ══════════════════════ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ────────────────── OVERVIEW TAB ────────────────── */}
        {activeTab === 'overview' && (
          <div className="space-y-6 sm:space-y-8">
            {/* How It Works */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/10 rounded-xl p-4 sm:p-6 border-2 border-cyan-500">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                How Safar Works
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {howItWorks.map((step, i) => (
                  <div key={i} className="relative text-center">
                    <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs text-cyan-400 font-bold">Step {step.step}</div>
                    <div className="text-white font-bold text-sm">{step.title}</div>
                    <p className="text-xs text-slate-400 mt-1">{step.description}</p>
                    {i < 5 && <ChevronRight className="hidden lg:block absolute -right-2 top-6 text-slate-600" size={16} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Product Grid */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Travel Products at a Glance</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {travelProducts.slice(0, 6).map((product, i) => (
                  <div key={i} className={`${product.bgColor} border border-slate-700/50 rounded-xl p-4 hover:scale-[1.02] transition-transform`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                        <product.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className={`font-bold ${product.textColor}`}>{product.name}</h4>
                        <span className="text-slate-500 text-xs">{product.arabic} — {product.category}</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm mb-2">{product.description}</p>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">{product.pricing}</span>
                      <span className={product.textColor}>{product.commission}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Split Payment Highlight */}
            <div className="bg-violet-500/10 rounded-xl p-4 sm:p-6 border-2 border-violet-500">
              <div className="flex items-center gap-3 mb-4">
                <Wallet className="w-8 h-8 text-violet-400" />
                <div>
                  <h3 className="text-lg font-bold text-white">Split Payment with Qist BNPL</h3>
                  <p className="text-violet-400 text-sm">Pay for travel in installments - no credit card needed</p>
                </div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-violet-500/30">
                <div className="text-center mb-3">
                  <span className="text-slate-400 text-sm">Example: AED 5,000 Flight Booking</span>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {[1,2,3,4,5,6].map((month) => (
                    <div key={month} className="bg-violet-500/20 rounded-lg p-2 text-center">
                      <div className="text-xs text-slate-400">Month {month}</div>
                      <div className="text-violet-400 font-bold text-sm">833</div>
                      <div className="text-xs text-slate-500">AED</div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-3 text-emerald-400 text-sm">0% fees for Nuqta+ members | 2.5% flat fee for standard users</div>
              </div>
            </div>

            {/* Ecosystem Preview */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Network className="w-5 h-5 text-[#c9a227]" />
                Nuqta Ecosystem Powers Safar
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {ecosystemIntegration.slice(0, 4).map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
                    <item.icon className={`w-5 h-5 ${item.color} mb-2`} />
                    <span className={`font-bold text-sm ${item.color}`}>{item.product}</span>
                    <p className="text-xs text-slate-400 mt-1">{item.integration}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ────────────────── TRAVEL PRODUCTS TAB ────────────────── */}
        {activeTab === 'products' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Complete Travel Product Suite</h2>
              <p className="text-slate-400">7 core products powered by Amadeus + Sabre GDS integration</p>
            </div>

            {travelProducts.map((product, i) => (
              <div key={i} className={`${product.bgColor} border border-slate-700/50 rounded-xl overflow-hidden`}>
                <button
                  onClick={() => setExpandedService(expandedService === product.name ? null : product.name)}
                  className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                      <product.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-base sm:text-xl font-bold ${product.textColor}`}>
                        {product.name} <span className="text-slate-500 text-sm">{product.arabic}</span>
                      </h3>
                      <p className="text-slate-400 text-sm">{product.description}</p>
                      <span className="text-xs text-slate-500">{product.category} | Commission: {product.commission}</span>
                    </div>
                  </div>
                  {expandedService === product.name ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                {expandedService === product.name && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-slate-900/50 rounded-lg p-4">
                        <h4 className="text-white font-bold mb-3">Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {product.features.map((feature, j) => (
                            <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                              <CheckCircle className={`w-4 h-4 ${product.textColor} shrink-0`} />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-4">
                        <h4 className="text-white font-bold mb-3">Details</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between"><span className="text-slate-400">Pricing</span><span className={`font-bold ${product.textColor}`}>{product.pricing}</span></div>
                          <div className="flex justify-between"><span className="text-slate-400">Commission</span><span className="text-emerald-400 font-bold">{product.commission}</span></div>
                          <div className="flex justify-between"><span className="text-slate-400">Turnaround</span><span className="text-white">{product.turnaround}</span></div>
                          <div className="flex justify-between"><span className="text-slate-400">Nuqta Coins</span><span className="text-amber-400 font-bold">3X earning</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ────────────────── ADVENTURES TAB ────────────────── */}
        {activeTab === 'adventures' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/10 rounded-xl p-4 sm:p-6 border-2 border-orange-500">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Mountain className="w-6 h-6 text-orange-400" />
                8 Adventure Apps — One Ecosystem
              </h2>
              <p className="text-slate-300 text-sm">Specialized micro-apps for every type of adventure, all connected to the Safar platform</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {adventureApps.map((app, i) => (
                <div key={i} className={`${app.bg} rounded-xl p-5 border ${app.border} hover:scale-[1.03] transition-transform`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-xl ${app.bg} border ${app.border} flex items-center justify-center`}>
                      <app.icon className={`w-6 h-6 ${app.color}`} />
                    </div>
                    <div>
                      <h3 className={`font-bold ${app.color}`}>{app.name}</h3>
                      <span className="text-slate-500 text-xs">{app.arabic}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">{app.description}</p>
                  <div className="flex items-center gap-2 text-xs">
                    <Coins className="w-3 h-3 text-amber-400" />
                    <span className="text-amber-400">3X Nuqta coins on bookings</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Adventure App Revenue Model</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-orange-400 font-bold text-2xl mb-1">10-20%</div>
                  <div className="text-white text-sm">Commission on Bookings</div>
                  <p className="text-xs text-slate-400 mt-1">Activity providers pay commission per booking</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-cyan-400 font-bold text-2xl mb-1">500K+</div>
                  <div className="text-white text-sm">Target Annual Bookings</div>
                  <p className="text-xs text-slate-400 mt-1">Across all 8 adventure apps by Year 3</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-emerald-400 font-bold text-2xl mb-1">180 AED</div>
                  <div className="text-white text-sm">Avg Booking Value</div>
                  <p className="text-xs text-slate-400 mt-1">Per adventure experience booking</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ────────────────── FAKHIR LUXURY TAB ────────────────── */}
        {activeTab === 'fakhir' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/30 to-amber-900/20 rounded-xl p-4 sm:p-8 border-2 border-[#c9a227]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c9a227] to-amber-600 flex items-center justify-center">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white">Fakhir فاخر</h2>
                  <p className="text-[#c9a227] text-lg">Luxury Concierge for Nuqta Prive Members</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm max-w-3xl">
                24/7 white-glove travel service exclusively for Nuqta Prive members. Private jets, yacht charters,
                exclusive restaurant reservations, and bespoke travel itineraries crafted by expert concierges.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {fakhirServices.map((service, i) => (
                <div key={i} className="bg-[#c9a227]/5 rounded-xl p-5 border border-[#c9a227]/30 hover:border-[#c9a227] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#c9a227]/20 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-[#c9a227]" />
                    </div>
                    <h3 className="text-white font-bold">{service.service}</h3>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">{service.description}</p>
                  <div className="text-[#c9a227] font-bold text-sm">{service.price}</div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-white mb-4">Fakhir Revenue Impact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-[#c9a227] font-bold text-2xl">5-10%</div>
                  <div className="text-white text-sm">Service Fee</div>
                  <p className="text-xs text-slate-400">On luxury bookings</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-[#c9a227] font-bold text-2xl">45K</div>
                  <div className="text-white text-sm">Avg Booking AED</div>
                  <p className="text-xs text-slate-400">Luxury segment</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-[#c9a227] font-bold text-2xl">24/7</div>
                  <div className="text-white text-sm">Concierge Access</div>
                  <p className="text-xs text-slate-400">WhatsApp + phone</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-[#c9a227] font-bold text-2xl">8%</div>
                  <div className="text-white text-sm">Revenue Share</div>
                  <p className="text-xs text-slate-400">Of total Safar revenue</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ────────────────── TRAVOPAY TAB ────────────────── */}
        {activeTab === 'travopay' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-violet-500/20 to-blue-500/10 rounded-xl p-4 sm:p-8 border-2 border-violet-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center">
                  <Wallet className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white">TravoPay</h2>
                  <p className="text-violet-400 text-lg">Multi-Currency Travel Wallet</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm max-w-3xl">
                Powered by Hawil FX engine. Hold, convert and spend in 50+ currencies at mid-market rates.
                Save 3-5% vs traditional bank cards. Earn 3X Nuqta coins on every travel purchase.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {travoPayFeatures.map((item, i) => (
                <div key={i} className="bg-violet-500/5 rounded-xl p-5 border border-violet-500/30">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                    <h3 className="text-white font-bold">{item.feature}</h3>
                  </div>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* FX Savings Example */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-violet-500/30">
              <h3 className="text-lg font-bold text-white mb-4">FX Savings Example: AED 10,000 Spend in EUR</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400">Method</th>
                      <th className="text-right py-3 px-4 text-slate-400">FX Markup</th>
                      <th className="text-right py-3 px-4 text-slate-400">Total Cost</th>
                      <th className="text-right py-3 px-4 text-slate-400">vs TravoPay</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50 bg-violet-500/5">
                      <td className="py-3 px-4 text-violet-400 font-bold">TravoPay (Hawil FX)</td>
                      <td className="py-3 px-4 text-right text-violet-400">0.5%</td>
                      <td className="py-3 px-4 text-right text-violet-400 font-bold">10,050 AED</td>
                      <td className="py-3 px-4 text-right text-emerald-400">Baseline</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white">UAE Bank Card</td>
                      <td className="py-3 px-4 text-right text-slate-300">3.5%</td>
                      <td className="py-3 px-4 text-right text-red-400">10,350 AED</td>
                      <td className="py-3 px-4 text-right text-red-400">+300 AED</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white">Airport Exchange</td>
                      <td className="py-3 px-4 text-right text-slate-300">5-8%</td>
                      <td className="py-3 px-4 text-right text-red-400">10,650 AED</td>
                      <td className="py-3 px-4 text-right text-red-400">+600 AED</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <span className="text-emerald-400 font-bold text-lg">Save 300-600 AED on every 10,000 AED spent abroad</span>
              </div>
            </div>
          </div>
        )}

        {/* ────────────────── VISAS TAB ────────────────── */}
        {activeTab === 'visas' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/10 rounded-xl p-4 sm:p-6 border-2 border-blue-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Stamp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">{visaServices.headline}</h2>
                  <p className="text-blue-400">{visaServices.description}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Popular Visa Destinations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {visaServices.popularDestinations.map((dest, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{dest.flag}</span>
                      <div>
                        <h4 className="text-white font-bold">{dest.country}</h4>
                        <span className="text-slate-500 text-xs">{dest.type}</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>
                        <div className="text-slate-400 text-xs">Fee</div>
                        <div className="text-cyan-400 font-bold">{dest.fee}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-slate-400 text-xs">Time</div>
                        <div className="text-white">{dest.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-6">Visa Process</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {visaServices.process.map((step, i) => (
                  <div key={i} className="relative">
                    <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                        <step.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div className="text-xs text-cyan-400 mb-1">Step {step.step}</div>
                      <div className="text-white font-medium text-sm mb-1">{step.title}</div>
                      <p className="text-xs text-slate-400">{step.description}</p>
                    </div>
                    {i < 4 && <ChevronRight className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600" size={20} />}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {visaServices.guarantees.map((item, i) => (
                <div key={i} className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/30 text-center">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <div className="text-white font-bold text-sm">{item.guarantee}</div>
                  <p className="text-xs text-slate-400 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ────────────────── PACKAGES TAB ────────────────── */}
        {activeTab === 'packages' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Popular Travel Packages</h2>
              <p className="text-slate-400">All-inclusive packages with visa, flights, hotels & more. Pay with Qist BNPL.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {travelPackages.map((pkg, i) => (
                <div key={i} className={`bg-slate-800/50 rounded-xl overflow-hidden border-2 ${pkg.color}`}>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{pkg.image}</span>
                        <div>
                          <h3 className="text-lg font-bold text-white">{pkg.destination}</h3>
                          <p className="text-slate-400 text-xs">{pkg.countries.join(' -> ')}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-cyan-400">{pkg.price}</div>
                        <div className="text-slate-500 text-xs">{pkg.duration}</div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="text-slate-400 text-xs mb-2">Includes:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.includes.map((item, j) => (
                          <span key={j} className="text-xs bg-slate-900/50 px-2 py-1 rounded text-slate-300">{item}</span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-emerald-500/10 rounded-lg p-2 border border-emerald-500/30 mb-3">
                      <span className="text-emerald-400 text-sm">{pkg.savings}</span>
                    </div>
                    <div className="bg-violet-500/10 rounded-lg p-2 border border-violet-500/30">
                      <span className="text-violet-400 text-xs">Qist BNPL: {pkg.qistMonthly} AED/month x 12</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ────────────────── UNIT ECONOMICS TAB ────────────────── */}
        {activeTab === 'economics' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/10 rounded-xl p-4 sm:p-6 border-2 border-emerald-500">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-emerald-400" />
                Unit Economics
              </h2>
              <p className="text-slate-300 text-sm">Per-booking economics across all travel products</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {unitEconomics.map((item, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <div className="text-emerald-400 font-bold text-xl mb-1">{item.value}</div>
                  <div className="text-white font-medium text-sm">{item.metric}</div>
                  <p className="text-xs text-slate-400 mt-1">{item.detail}</p>
                </div>
              ))}
            </div>

            {/* Commission Breakdown Visual */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Commission by Product</h3>
              <div className="space-y-3">
                {[
                  { product: 'Flights (Airzy)', commission: 3, color: 'bg-blue-500' },
                  { product: 'Hotels (Staycay)', commission: 15, color: 'bg-emerald-500' },
                  { product: 'Packages', commission: 12, color: 'bg-purple-500' },
                  { product: 'Experiences', commission: 15, color: 'bg-orange-500' },
                  { product: 'Visa Processing', commission: 50, color: 'bg-red-500' },
                  { product: 'Travel Insurance', commission: 30, color: 'bg-pink-500' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-slate-300 text-sm w-40 shrink-0">{item.product}</span>
                    <div className="flex-1 bg-slate-900/50 rounded-full h-6 overflow-hidden">
                      <div className={`${item.color} h-full rounded-full flex items-center px-3`} style={{ width: `${Math.min(item.commission * 2, 100)}%` }}>
                        <span className="text-white text-xs font-bold">{item.commission}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ────────────────── REVENUE MODEL TAB ────────────────── */}
        {activeTab === 'revenue' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-4 sm:p-6 border-2 border-green-500">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-green-400" />
                Revenue Model — 6 Revenue Streams
              </h2>
              <p className="text-slate-300 text-sm">Diversified revenue across commissions, FX, insurance, luxury & advertising</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {revenueStreams.map((item, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <h3 className={`font-bold ${item.color}`}>{item.stream}</h3>
                    </div>
                    <span className="text-white font-bold text-lg">{item.share}</span>
                  </div>
                  <div className="text-emerald-400 font-medium text-sm mb-2">{item.value}</div>
                  <p className="text-slate-400 text-xs">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Revenue Mix Visual */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Revenue Mix (Year 3 Target)</h3>
              <div className="flex rounded-full h-8 overflow-hidden">
                <div className="bg-cyan-500 flex items-center justify-center" style={{ width: '55%' }}><span className="text-white text-xs font-bold">Bookings 55%</span></div>
                <div className="bg-violet-500 flex items-center justify-center" style={{ width: '18%' }}><span className="text-white text-xs font-bold">FX 18%</span></div>
                <div className="bg-pink-500 flex items-center justify-center" style={{ width: '10%' }}><span className="text-white text-xs font-bold">Ins 10%</span></div>
                <div className="bg-[#c9a227] flex items-center justify-center" style={{ width: '8%' }}><span className="text-white text-xs font-bold">Lux 8%</span></div>
                <div className="bg-orange-500 flex items-center justify-center" style={{ width: '5%' }}><span className="text-white text-xs font-bold">Ads</span></div>
                <div className="bg-red-500 flex items-center justify-center" style={{ width: '4%' }}><span className="text-white text-xs font-bold">Visa</span></div>
              </div>
            </div>
          </div>
        )}

        {/* ────────────────── MARKET OPPORTUNITY TAB ────────────────── */}
        {activeTab === 'market' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-xl p-4 sm:p-6 border-2 border-blue-500">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-400" />
                Market Opportunity — GCC Outbound Travel $50B+
              </h2>
              <p className="text-slate-300 text-sm">UAE alone $15B, growing 12% YoY. Online penetration rising to 45%+.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {marketData.map((item, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-blue-400 font-bold text-2xl">{item.value}</div>
                    <span className="text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded">{item.growth}</span>
                  </div>
                  <div className="text-white font-medium text-sm">{item.market}</div>
                  <p className="text-xs text-slate-400 mt-1">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Safar Target Market Capture</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-blue-500/30">
                  <div className="text-blue-400 font-bold text-3xl">Year 1</div>
                  <div className="text-white font-bold text-xl mt-2">0.1%</div>
                  <div className="text-slate-400 text-sm">of UAE market</div>
                  <div className="text-cyan-400 text-sm mt-1">175M AED GMV</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-purple-500/30">
                  <div className="text-purple-400 font-bold text-3xl">Year 3</div>
                  <div className="text-white font-bold text-xl mt-2">1.4%</div>
                  <div className="text-slate-400 text-sm">of UAE market</div>
                  <div className="text-cyan-400 text-sm mt-1">2.1B AED GMV</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center border border-emerald-500/30">
                  <div className="text-emerald-400 font-bold text-3xl">Year 5</div>
                  <div className="text-white font-bold text-xl mt-2">5.7%</div>
                  <div className="text-slate-400 text-sm">of GCC market</div>
                  <div className="text-cyan-400 text-sm mt-1">10.5B AED GMV</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ────────────────── COMPETITORS TAB ────────────────── */}
        {activeTab === 'competitors' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/10 rounded-xl p-4 sm:p-6 border-2 border-red-500">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-red-400" />
                Competitor Analysis
              </h2>
              <p className="text-slate-300 text-sm">
                Safar advantage: only platform combining BNPL + 3X coins + 0% FX + visa + full Nuqta ecosystem
              </p>
            </div>

            <div className="space-y-3">
              {competitors.map((comp, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-4 sm:p-5 border border-slate-700/50">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                    <div className="sm:w-32 shrink-0">
                      <h3 className="text-white font-bold text-lg">{comp.name}</h3>
                    </div>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Strengths</div>
                        <p className="text-slate-300 text-sm">{comp.strengths}</p>
                      </div>
                      <div>
                        <div className="text-xs text-red-400 mb-1">Weaknesses</div>
                        <p className="text-red-300/80 text-sm">{comp.weaknesses}</p>
                      </div>
                      <div>
                        <div className="text-xs text-emerald-400 mb-1">Safar Advantage</div>
                        <p className="text-emerald-300 text-sm">{comp.safarAdvantage}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Safar Moat Summary */}
            <div className="bg-cyan-500/10 rounded-xl p-4 sm:p-6 border-2 border-cyan-500">
              <h3 className="text-lg font-bold text-white mb-4">Safar Competitive Moat</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { moat: 'Qist BNPL', detail: 'Only OTA with integrated Buy Now Pay Later for travel', icon: Wallet },
                  { moat: '3X Nuqta Coins', detail: 'Highest loyalty earning rate in any travel platform', icon: Coins },
                  { moat: '0% FX via TravoPay', detail: 'Save 3-5% on every international booking', icon: Globe },
                  { moat: 'Full Ecosystem', detail: 'Visa + rides + delivery + insurance — no competitor matches', icon: Network },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4">
                    <item.icon className="w-5 h-5 text-cyan-400 mb-2" />
                    <div className="text-cyan-400 font-bold text-sm">{item.moat}</div>
                    <p className="text-xs text-slate-400 mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ────────────────── ECOSYSTEM TAB ────────────────── */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/10 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Network className="w-5 h-5 text-[#c9a227]" />
                Nuqta Ecosystem Integration — 8 Products Power Safar
              </h2>
              <p className="text-slate-300 text-sm">Every Nuqta product enhances the travel experience and creates an unbreakable competitive moat.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ecosystemIntegration.map((item, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-[#c9a227]/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                    <span className={`font-bold ${item.color}`}>{item.product}</span>
                  </div>
                  <p className="text-white text-sm mb-1">{item.integration}</p>
                  <p className="text-emerald-400 text-xs">{item.benefit}</p>
                </div>
              ))}
            </div>

            {/* Full Journey Example */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Full Ecosystem Journey: Europe Trip</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400">Service</th>
                      <th className="text-left py-3 px-4 text-slate-400">Nuqta Product</th>
                      <th className="text-right py-3 px-4 text-slate-400">Normal Cost</th>
                      <th className="text-right py-3 px-4 text-slate-400">With Nuqta</th>
                      <th className="text-right py-3 px-4 text-slate-400">Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white">Schengen Visa</td>
                      <td className="py-3 px-4 text-blue-400">Safar Visa</td>
                      <td className="py-3 px-4 text-right text-slate-300">599 AED</td>
                      <td className="py-3 px-4 text-right text-cyan-400">499 AED</td>
                      <td className="py-3 px-4 text-right text-emerald-400">100 AED</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white">Flights</td>
                      <td className="py-3 px-4 text-blue-400">Airzy + TravoPay</td>
                      <td className="py-3 px-4 text-right text-slate-300">4,500 AED</td>
                      <td className="py-3 px-4 text-right text-cyan-400">4,275 AED</td>
                      <td className="py-3 px-4 text-right text-emerald-400">225 AED (5% FX)</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white">Hotels (7 nights)</td>
                      <td className="py-3 px-4 text-blue-400">Staycay + Nuqta+</td>
                      <td className="py-3 px-4 text-right text-slate-300">6,000 AED</td>
                      <td className="py-3 px-4 text-right text-cyan-400">4,800 AED</td>
                      <td className="py-3 px-4 text-right text-emerald-400">1,200 AED (20%)</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white">Airport Transfer</td>
                      <td className="py-3 px-4 text-green-400">Rakab</td>
                      <td className="py-3 px-4 text-right text-slate-300">150 AED</td>
                      <td className="py-3 px-4 text-right text-cyan-400">0 AED</td>
                      <td className="py-3 px-4 text-right text-emerald-400">Free with package</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white">Pre-trip Essentials</td>
                      <td className="py-3 px-4 text-orange-400">Wasil Delivery</td>
                      <td className="py-3 px-4 text-right text-slate-300">200 AED</td>
                      <td className="py-3 px-4 text-right text-cyan-400">180 AED</td>
                      <td className="py-3 px-4 text-right text-emerald-400">20 AED</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white">Experiences</td>
                      <td className="py-3 px-4 text-orange-400">Safar Experiences</td>
                      <td className="py-3 px-4 text-right text-slate-300">1,500 AED</td>
                      <td className="py-3 px-4 text-right text-cyan-400">1,500 AED</td>
                      <td className="py-3 px-4 text-right text-amber-400">450 coins (3X)</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white">Payment</td>
                      <td className="py-3 px-4 text-violet-400">Qist BNPL</td>
                      <td className="py-3 px-4 text-right text-slate-300">Pay upfront</td>
                      <td className="py-3 px-4 text-right text-cyan-400">938 AED/mo x 12</td>
                      <td className="py-3 px-4 text-right text-emerald-400">Cash flow flexibility</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="bg-cyan-500/10">
                      <td className="py-3 px-4 font-bold text-white">TOTAL</td>
                      <td className="py-3 px-4 text-[#c9a227] font-bold">7 Nuqta Products</td>
                      <td className="py-3 px-4 text-right font-bold text-slate-300">12,949 AED</td>
                      <td className="py-3 px-4 text-right font-bold text-cyan-400">11,254 AED</td>
                      <td className="py-3 px-4 text-right font-bold text-emerald-400">1,695 AED saved!</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ────────────────── ROADMAP TAB ────────────────── */}
        {activeTab === 'roadmap' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Product Roadmap</h2>
              <p className="text-slate-400">4 phases from flights/hotels to Fakhir luxury + full GCC expansion</p>
            </div>

            {roadmapPhases.map((phase, i) => (
              <div key={i} className={`${phase.bgColor} rounded-xl p-4 sm:p-6 border-2 ${phase.color}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                      phase.status === 'planned' ? 'bg-green-500' : 'bg-blue-500'
                    }`}>
                      {phase.phase.replace('Phase ', '')}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{phase.phase}: {phase.title}</h3>
                      <span className="text-slate-400 text-sm">{phase.timeline}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    phase.status === 'planned' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {phase.milestones.map((milestone, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className={`w-4 h-4 shrink-0 ${phase.status === 'planned' ? 'text-green-400' : 'text-blue-400'}`} />
                      {milestone}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ────────────────── RISKS TAB ────────────────── */}
        {activeTab === 'risks' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-red-500/20 to-amber-500/10 rounded-xl p-4 sm:p-6 border-2 border-red-500">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                Risk Analysis & Mitigation
              </h2>
              <p className="text-slate-300 text-sm">Key risks identified with clear mitigation strategies</p>
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
                        <h3 className="text-white font-bold">{risk.risk}</h3>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                          risk.severity === 'High' ? 'bg-red-500/20 text-red-400' :
                          risk.severity === 'Medium' ? 'bg-amber-500/20 text-amber-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>{risk.severity} Severity</span>
                      </div>
                    </div>
                    {expandedRisk === risk.risk ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </button>
                  {expandedRisk === risk.risk && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-red-500/5 rounded-lg p-4 border border-red-500/20">
                          <div className="text-red-400 font-bold text-sm mb-2">Risk Description</div>
                          <p className="text-slate-300 text-sm">{risk.description}</p>
                        </div>
                        <div className="bg-emerald-500/5 rounded-lg p-4 border border-emerald-500/20">
                          <div className="text-emerald-400 font-bold text-sm mb-2">Mitigation Strategy</div>
                          <p className="text-slate-300 text-sm">{risk.mitigation}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ────────────────── GCC EXPANSION TAB ────────────────── */}
        {activeTab === 'gcc' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/20 via-blue-500/10 to-emerald-500/10 rounded-xl p-4 sm:p-8 border-2 border-[#c9a227]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c9a227] to-amber-500 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white">{gccExpansion.headline}</h2>
                  <p className="text-[#c9a227] text-lg">{gccExpansion.description}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gccExpansion.countries.map((country, i) => (
                <div key={i} className={`bg-slate-800/50 rounded-xl p-5 border-2 ${
                  country.status === 'Active' ? 'border-emerald-500' :
                  country.status === 'Phase 2' ? 'border-blue-500' :
                  country.status === 'Phase 3' ? 'border-purple-500' :
                  'border-[#c9a227]'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{country.flag}</span>
                      <h4 className="text-white font-bold text-lg">{country.country}</h4>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      country.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' :
                      country.status === 'Phase 2' ? 'bg-blue-500/20 text-blue-400' :
                      country.status === 'Phase 3' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-[#c9a227]/20 text-[#c9a227]'
                    }`}>{country.status}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-slate-400 text-xs">Market Size</div>
                      <div className="text-cyan-400 font-bold">{country.market}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs">Launch</div>
                      <div className="text-white font-medium">{country.timeline}</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-slate-400 text-xs">Travelers</div>
                      <div className="text-slate-300">{country.travelers}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-white mb-4">Global Expansion Beyond GCC</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-blue-400 font-bold text-xl mb-1">2029</div>
                  <div className="text-white text-sm font-bold">Egypt & Jordan</div>
                  <p className="text-xs text-slate-400 mt-1">Levant expansion for 100M+ population</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-purple-400 font-bold text-xl mb-1">2030</div>
                  <div className="text-white text-sm font-bold">Turkey & Morocco</div>
                  <p className="text-xs text-slate-400 mt-1">Key MENA tourism markets</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-emerald-400 font-bold text-xl mb-1">2031</div>
                  <div className="text-white text-sm font-bold">South Asia</div>
                  <p className="text-xs text-slate-400 mt-1">India, Pakistan — massive diaspora market</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ────────────────── FINANCIALS TAB ────────────────── */}
        {activeTab === 'financials' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-4 sm:p-6 border-2 border-green-500">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-400" />
                5-Year Financial Projections
              </h2>
              <p className="text-slate-300 text-sm">Conservative projections based on 8-15% commission, 350 AED avg margin per booking</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-slate-400">Metric</th>
                    {financialProjections.map((proj, i) => (
                      <th key={i} className="text-right py-3 px-4 text-white font-bold">{proj.year}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-slate-300">Bookings</td>
                    {financialProjections.map((proj, i) => (
                      <td key={i} className="py-3 px-4 text-right text-white font-bold">{(proj.bookings/1000).toFixed(0)}K</td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-slate-300">GMV (AED M)</td>
                    {financialProjections.map((proj, i) => (
                      <td key={i} className="py-3 px-4 text-right text-cyan-400 font-bold">{proj.gmv}M</td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-slate-300">Revenue (AED M)</td>
                    {financialProjections.map((proj, i) => (
                      <td key={i} className="py-3 px-4 text-right text-green-400 font-bold">{proj.revenue}M</td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-slate-300">Net Profit (AED M)</td>
                    {financialProjections.map((proj, i) => (
                      <td key={i} className={`py-3 px-4 text-right font-bold ${proj.netProfit < 0 ? 'text-red-400' : 'text-emerald-400'}`}>{proj.netProfit}M</td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-slate-300">Users</td>
                    {financialProjections.map((proj, i) => (
                      <td key={i} className="py-3 px-4 text-right text-white">{(proj.users/1000).toFixed(0)}K</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-300">ARPU (AED)</td>
                    {financialProjections.map((proj, i) => (
                      <td key={i} className="py-3 px-4 text-right text-[#c9a227] font-bold">{proj.arpu}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Key Financial Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-green-500/30 text-center">
                <div className="text-green-400 font-bold text-2xl">10.5B</div>
                <div className="text-white text-sm">Year 5 GMV (AED)</div>
                <p className="text-xs text-slate-400">5.7% of GCC market</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-cyan-500/30 text-center">
                <div className="text-cyan-400 font-bold text-2xl">1.05B</div>
                <div className="text-white text-sm">Year 5 Revenue (AED)</div>
                <p className="text-xs text-slate-400">10% take rate</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-emerald-500/30 text-center">
                <div className="text-emerald-400 font-bold text-2xl">38%</div>
                <div className="text-white text-sm">Year 5 Net Margin</div>
                <p className="text-xs text-slate-400">400M AED net profit</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-[#c9a227]/30 text-center">
                <div className="text-[#c9a227] font-bold text-2xl">23:1</div>
                <div className="text-white text-sm">LTV:CAC Ratio</div>
                <p className="text-xs text-slate-400">Excellent unit economics</p>
              </div>
            </div>
          </div>
        )}

      </main>

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
