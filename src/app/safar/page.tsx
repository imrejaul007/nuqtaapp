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
  Ticket, Map, Compass, Luggage, Stamp, Flag, Wifi
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Executive Summary Stats
const keyStats = [
  { label: 'UAE Outbound Travel', value: '$25B', suffix: 'annually', color: 'text-green-400' },
  { label: 'Visa Applications', value: '5M+', suffix: 'per year', color: 'text-blue-400' },
  { label: 'Avg Trip Spend', value: '8,500', suffix: 'AED', color: 'text-purple-400' },
  { label: 'Commission', value: '8-15%', suffix: 'on bookings', color: 'text-[#c9a227]' },
];

// Safar Services
const safarServices = [
  {
    name: 'Visa Services',
    arabic: 'تأشيرات',
    icon: Stamp,
    description: 'End-to-end visa processing for 150+ countries',
    features: ['Tourist visas', 'Business visas', 'Transit visas', 'eVisa processing', 'Document preparation', 'Embassy appointment booking'],
    pricing: 'From 99 AED + govt fees',
    turnaround: '24hrs - 15 days',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    name: 'Flights',
    arabic: 'طيران',
    icon: Plane,
    description: 'Best rates on 500+ airlines worldwide',
    features: ['Price comparison', 'Flexible dates', 'Multi-city trips', 'Business class deals', 'Group bookings', 'Last-minute flights'],
    pricing: 'Google rate + 0% markup',
    turnaround: 'Instant booking',
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  {
    name: 'Hotels',
    arabic: 'فنادق',
    icon: Hotel,
    description: '2M+ properties from budget to luxury',
    features: ['Best price guarantee', 'Free cancellation options', 'Loyalty rewards', 'Verified reviews', 'Map-based search', 'Apartment stays'],
    pricing: 'Up to 30% off with Nuqta+',
    turnaround: 'Instant confirmation',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
  },
  {
    name: 'Experiences',
    arabic: 'تجارب',
    icon: Camera,
    description: 'Tours, activities & unique experiences',
    features: ['City tours', 'Adventure activities', 'Cultural experiences', 'Food tours', 'Day trips', 'VIP access'],
    pricing: '5% Nuqta coins on all bookings',
    turnaround: 'Instant booking',
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
  {
    name: 'Car Rentals',
    arabic: 'سيارات',
    icon: Car,
    description: 'Self-drive & chauffeur services worldwide',
    features: ['Self-drive rentals', 'Airport pickup', 'Chauffeur service', 'Luxury cars', 'SUVs & vans', 'Insurance included'],
    pricing: 'From 99 AED/day',
    turnaround: 'Same-day pickup',
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    name: 'Travel Insurance',
    arabic: 'تأمين سفر',
    icon: Shield,
    description: 'Comprehensive coverage for worry-free travel',
    features: ['Medical coverage', 'Trip cancellation', 'Lost luggage', 'Flight delays', 'COVID coverage', 'Adventure sports'],
    pricing: 'From 25 AED/trip',
    turnaround: 'Instant policy',
    color: 'from-red-500 to-pink-600',
    textColor: 'text-red-400',
    bgColor: 'bg-red-500/10',
  },
];

// Visa Services Detail
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

// Travel Packages
const travelPackages = [
  {
    destination: 'Europe Explorer',
    countries: ['France', 'Italy', 'Switzerland'],
    duration: '10 Days',
    price: '12,999 AED',
    includes: ['Flights', 'Hotels', 'Schengen Visa', 'Transfers', 'Tours'],
    savings: 'Save 2,500 AED vs booking separately',
    image: '🗼',
    color: 'border-blue-500',
  },
  {
    destination: 'Thailand Paradise',
    countries: ['Bangkok', 'Phuket', 'Krabi'],
    duration: '7 Days',
    price: '4,999 AED',
    includes: ['Flights', 'Hotels', 'Airport transfers', 'Island tour'],
    savings: 'Save 1,200 AED vs booking separately',
    image: '🏝️',
    color: 'border-emerald-500',
  },
  {
    destination: 'Maldives Luxury',
    countries: ['Male', 'Resort Island'],
    duration: '5 Days',
    price: '8,999 AED',
    includes: ['Flights', '5-star resort', 'Seaplane', 'All meals'],
    savings: 'Save 3,000 AED vs direct booking',
    image: '🏖️',
    color: 'border-cyan-500',
  },
  {
    destination: 'Turkey Discovery',
    countries: ['Istanbul', 'Cappadocia'],
    duration: '6 Days',
    price: '3,999 AED',
    includes: ['Flights', 'Hotels', 'eVisa', 'Balloon ride', 'Tours'],
    savings: 'Save 800 AED vs booking separately',
    image: '🎈',
    color: 'border-red-500',
  },
];

// Ecosystem Integration
const ecosystemIntegration = [
  {
    product: 'Hawil Card',
    integration: 'Pay for travel at Google rate',
    benefit: 'Save 3-5% on international bookings',
    icon: CreditCard,
    color: 'text-blue-400',
  },
  {
    product: 'Qist',
    integration: 'BNPL for travel packages',
    benefit: 'Split 10,000+ AED trips into 12 months',
    icon: Wallet,
    color: 'text-violet-400',
  },
  {
    product: 'Nuqta+',
    integration: 'Exclusive member discounts',
    benefit: 'Up to 30% off hotels, 10% off flights',
    icon: Crown,
    color: 'text-[#c9a227]',
  },
  {
    product: 'Nuqta Coins',
    integration: 'Earn & spend on all bookings',
    benefit: '5% coins earned, use coins to pay',
    icon: Coins,
    color: 'text-amber-400',
  },
  {
    product: 'Rakab',
    integration: 'Airport transfers included',
    benefit: 'Free Rakab ride for package bookings',
    icon: Car,
    color: 'text-green-400',
  },
];

// Competitive Advantages
const competitiveAdvantages = [
  {
    advantage: 'All-in-One Platform',
    description: 'Visa + flights + hotels + experiences in one app',
    vsCompetitors: 'Competitors: Separate apps for each service',
    icon: Layers,
  },
  {
    advantage: 'Google Rate Payments',
    description: 'Pay with Hawil Card at 0% FX markup',
    vsCompetitors: 'Others charge 3-5% foreign transaction fees',
    icon: CreditCard,
  },
  {
    advantage: 'Earn While You Travel',
    description: '5% Nuqta coins on all bookings',
    vsCompetitors: 'Most platforms offer 0-1% rewards',
    icon: Coins,
  },
  {
    advantage: 'BNPL for Travel',
    description: 'Finance trips up to 50,000 AED with Qist',
    vsCompetitors: 'No competitor offers integrated BNPL',
    icon: Wallet,
  },
  {
    advantage: 'Visa Expertise',
    description: '98% approval rate with expert document review',
    vsCompetitors: 'DIY platforms have 70-80% approval rates',
    icon: Stamp,
  },
];

// GCC Expansion
const gccExpansion = {
  headline: 'Travel Services Across the Gulf',
  description: 'Safar expands to serve travelers from all 6 GCC countries',
  countries: [
    { country: 'UAE', flag: '🇦🇪', status: 'Active', visaServices: '150+ countries', timeline: '2027' },
    { country: 'Saudi Arabia', flag: '🇸🇦', status: 'Phase 2', visaServices: '100+ countries', timeline: '2028' },
    { country: 'Qatar', flag: '🇶🇦', status: 'Phase 2', visaServices: '100+ countries', timeline: '2028' },
    { country: 'Kuwait', flag: '🇰🇼', status: 'Phase 3', visaServices: '80+ countries', timeline: '2029' },
    { country: 'Bahrain', flag: '🇧🇭', status: 'Phase 3', visaServices: '80+ countries', timeline: '2029' },
    { country: 'Oman', flag: '🇴🇲', status: 'Phase 3', visaServices: '80+ countries', timeline: '2029' },
  ],
};

// Financial Projections
const financialProjections = [
  { year: 'Year 1', bookings: 50000, gmv: 425, revenue: 34, netProfit: 8.5, users: 30000 },
  { year: 'Year 2', bookings: 200000, gmv: 1700, revenue: 136, netProfit: 40, users: 100000 },
  { year: 'Year 3', bookings: 600000, gmv: 5100, revenue: 408, netProfit: 130, users: 250000 },
];

// Roadmap
const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    timeline: 'Q2 2027',
    status: 'planned',
    milestones: [
      'Launch visa services for top 20 destinations',
      'Flight booking integration',
      'Hotel aggregator partnership',
      'Hawil Card payment integration',
    ],
    color: 'border-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    phase: 'Phase 2',
    title: 'Expansion',
    timeline: 'Q4 2027',
    status: 'pending',
    milestones: [
      'Expand to 100+ visa destinations',
      'Launch travel packages',
      'Car rental integration',
      'Travel insurance launch',
    ],
    color: 'border-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    phase: 'Phase 3',
    title: 'Scale',
    timeline: 'Q2 2028',
    status: 'pending',
    milestones: [
      'GCC expansion (Saudi, Qatar)',
      'Corporate travel management',
      'Experiences marketplace',
      'AI trip planner',
    ],
    color: 'border-purple-500',
    bgColor: 'bg-purple-500/10',
  },
];

export default function SafarPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Plane },
    { id: 'visas', label: 'Visa Services', icon: Stamp },
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'packages', label: 'Packages', icon: Package },
    { id: 'ecosystem', label: 'Ecosystem', icon: Network },
    { id: 'gcc', label: 'GCC Expansion', icon: Globe },
    { id: 'financials', label: 'Financials', icon: BarChart3 },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-cyan-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full mb-4">
              <Plane className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-bold">Safar سفر - Travel Made Easy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Your Complete <span className="text-cyan-400">Travel</span> Partner
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Visas, flights, hotels, experiences - all in one app. Pay with Hawil Card at Google rate,
              earn Nuqta coins, and finance your dream trip with Qist.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {keyStats.map((stat, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.suffix}</div>
              </div>
            ))}
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
                    ? 'bg-cyan-500 text-white'
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
          <div className="space-y-6 sm:space-y-8">
            {/* Value Proposition */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/10 rounded-xl p-4 sm:p-6 border-2 border-cyan-500">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                Why Safar?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-cyan-500/30">
                  <div className="text-cyan-400 font-bold mb-2">All-in-One</div>
                  <p className="text-sm text-slate-400">Visa + flights + hotels + experiences in one seamless booking</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-cyan-500/30">
                  <div className="text-cyan-400 font-bold mb-2">Save Money</div>
                  <p className="text-sm text-slate-400">Google rate payments, Nuqta+ discounts, earn coins on every booking</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-cyan-500/30">
                  <div className="text-cyan-400 font-bold mb-2">Finance Trips</div>
                  <p className="text-sm text-slate-400">Split your dream vacation into 12 easy payments with Qist</p>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {safarServices.map((service, i) => (
                <div key={i} className={`${service.bgColor} border border-slate-700/50 rounded-xl p-4 sm:p-5 hover:scale-[1.02] transition-transform`}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`font-bold ${service.textColor}`}>{service.name}</h3>
                      <span className="text-slate-500 text-sm">{service.arabic}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">{service.description}</p>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">{service.pricing}</span>
                    <span className={service.textColor}>{service.turnaround}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Competitive Advantages */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Competitive Advantages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {competitiveAdvantages.slice(0, 3).map((adv, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <adv.icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                      <span className="text-white font-medium">{adv.advantage}</span>
                    </div>
                    <p className="text-sm text-slate-400">{adv.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Visa Services Tab */}
        {activeTab === 'visas' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Visa Hero */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/10 rounded-xl p-4 sm:p-6 border-2 border-blue-500">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Stamp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">{visaServices.headline}</h2>
                  <p className="text-blue-400 text-sm sm:text-base">{visaServices.description}</p>
                </div>
              </div>
            </div>

            {/* Popular Destinations */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Popular Visa Destinations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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

            {/* Process */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">How It Works</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {visaServices.process.map((step, i) => (
                  <div key={i} className="relative">
                    <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                      </div>
                      <div className="text-xs text-cyan-400 mb-1">Step {step.step}</div>
                      <div className="text-white font-medium text-sm mb-1">{step.title}</div>
                      <p className="text-xs text-slate-400">{step.description}</p>
                    </div>
                    {i < 4 && (
                      <ChevronRight className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {visaServices.guarantees.map((item, i) => (
                <div key={i} className="bg-emerald-500/10 rounded-xl p-3 sm:p-4 border border-emerald-500/30 text-center">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mx-auto mb-2" />
                  <div className="text-white font-bold text-sm">{item.guarantee}</div>
                  <p className="text-xs text-slate-400 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-4 sm:space-y-6">
            {safarServices.map((service, i) => (
              <div key={i} className={`${service.bgColor} border-2 rounded-xl overflow-hidden`} style={{ borderColor: service.textColor.replace('text-', '').replace('-400', '') }}>
                <button
                  onClick={() => setExpandedService(expandedService === service.name ? null : service.name)}
                  className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-base sm:text-xl font-bold ${service.textColor}`}>
                        {service.name} <span className="text-slate-400 text-sm sm:text-base">{service.arabic}</span>
                      </h3>
                      <p className="text-slate-400 text-sm sm:text-base">{service.description}</p>
                    </div>
                  </div>
                  {expandedService === service.name ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                {expandedService === service.name && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4">
                        <h4 className="text-white font-bold mb-3">Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, j) => (
                            <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                              <CheckCircle className={`w-4 h-4 ${service.textColor}`} />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4">
                        <h4 className="text-white font-bold mb-2 sm:mb-3">Details</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Pricing</span>
                            <span className={`font-bold ${service.textColor}`}>{service.pricing}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Turnaround</span>
                            <span className="text-white">{service.turnaround}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Packages Tab */}
        {activeTab === 'packages' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Popular Travel Packages</h2>
              <p className="text-slate-400 text-sm sm:text-base">All-inclusive packages with visa, flights, hotels & more</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {travelPackages.map((pkg, i) => (
                <div key={i} className={`bg-slate-800/50 rounded-xl overflow-hidden border-2 ${pkg.color}`}>
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-3 sm:mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl sm:text-4xl">{pkg.image}</span>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white">{pkg.destination}</h3>
                          <p className="text-slate-400 text-xs sm:text-sm">{pkg.countries.join(' → ')}</p>
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-xl sm:text-2xl font-bold text-cyan-400">{pkg.price}</div>
                        <div className="text-slate-500 text-xs sm:text-sm">{pkg.duration}</div>
                      </div>
                    </div>

                    <div className="mb-3 sm:mb-4">
                      <div className="text-slate-400 text-xs mb-2">Includes:</div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {pkg.includes.map((item, j) => (
                          <span key={j} className="text-xs bg-slate-900/50 px-2 py-1 rounded text-slate-300">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/30">
                      <span className="text-emerald-400 text-sm">{pkg.savings}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Qist BNPL */}
            <div className="bg-violet-500/10 rounded-xl p-4 sm:p-6 border-2 border-violet-500">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <Wallet className="w-8 h-8 sm:w-10 sm:h-10 text-violet-400" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Finance Your Trip with Qist</h3>
                  <p className="text-violet-400 text-sm sm:text-base">Split any package into 3-12 monthly payments</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-violet-400 font-bold text-lg">12,999 AED</div>
                  <div className="text-slate-400 text-sm">Europe Package</div>
                  <div className="text-white font-bold mt-2">1,083 AED/month</div>
                  <div className="text-emerald-400 text-xs">0% fees for Nuqta+</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-violet-400 font-bold text-lg">8,999 AED</div>
                  <div className="text-slate-400 text-sm">Maldives Package</div>
                  <div className="text-white font-bold mt-2">750 AED/month</div>
                  <div className="text-emerald-400 text-xs">0% fees for Nuqta+</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <div className="text-violet-400 font-bold text-lg">4,999 AED</div>
                  <div className="text-slate-400 text-sm">Thailand Package</div>
                  <div className="text-white font-bold mt-2">417 AED/month</div>
                  <div className="text-emerald-400 text-xs">0% fees for Nuqta+</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Ecosystem Tab */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/10 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Network className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a227]" />
                Nuqta Ecosystem Integration
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-4 sm:mb-6">
                Safar connects seamlessly with all Nuqta products for the ultimate travel experience.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {ecosystemIntegration.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color}`} />
                      <span className={`font-bold ${item.color}`}>{item.product}</span>
                    </div>
                    <p className="text-white text-sm mb-1">{item.integration}</p>
                    <p className="text-emerald-400 text-xs">{item.benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Journey Example */}
            <div className="bg-slate-800/30 rounded-xl p-4 sm:p-6 border border-slate-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Example: Europe Trip with Full Ecosystem</h3>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full text-xs sm:text-sm min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400">Item</th>
                      <th className="text-right py-3 px-4 text-slate-400">Cost</th>
                      <th className="text-right py-3 px-4 text-slate-400">With Nuqta</th>
                      <th className="text-right py-3 px-4 text-slate-400">Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white">Schengen Visa (Safar)</td>
                      <td className="py-3 px-4 text-right text-slate-300">599 AED</td>
                      <td className="py-3 px-4 text-right text-cyan-400">499 AED</td>
                      <td className="py-3 px-4 text-right text-emerald-400">100 AED</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white">Flights (Hawil Card)</td>
                      <td className="py-3 px-4 text-right text-slate-300">4,500 AED</td>
                      <td className="py-3 px-4 text-right text-cyan-400">4,275 AED</td>
                      <td className="py-3 px-4 text-right text-emerald-400">225 AED (5% FX)</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white">Hotels (Nuqta+ discount)</td>
                      <td className="py-3 px-4 text-right text-slate-300">6,000 AED</td>
                      <td className="py-3 px-4 text-right text-cyan-400">4,800 AED</td>
                      <td className="py-3 px-4 text-right text-emerald-400">1,200 AED (20%)</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-white">Experiences</td>
                      <td className="py-3 px-4 text-right text-slate-300">1,500 AED</td>
                      <td className="py-3 px-4 text-right text-cyan-400">1,500 AED</td>
                      <td className="py-3 px-4 text-right text-[#c9a227]">75 coins earned</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="bg-cyan-500/10">
                      <td className="py-3 px-4 font-bold text-white">TOTAL</td>
                      <td className="py-3 px-4 text-right font-bold text-slate-300">12,599 AED</td>
                      <td className="py-3 px-4 text-right font-bold text-cyan-400">11,074 AED</td>
                      <td className="py-3 px-4 text-right font-bold text-emerald-400">1,525 AED saved!</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* GCC Tab */}
        {activeTab === 'gcc' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/20 via-blue-500/10 to-emerald-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-8 border-2 border-[#c9a227]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#c9a227] to-amber-500 flex items-center justify-center">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-3xl font-black text-white">{gccExpansion.headline}</h2>
                  <p className="text-[#c9a227] text-sm sm:text-lg">{gccExpansion.description}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {gccExpansion.countries.map((country, i) => (
                <div key={i} className={`bg-slate-800/50 rounded-xl p-5 border-2 ${
                  country.status === 'Active' ? 'border-emerald-500' :
                  country.status === 'Phase 2' ? 'border-blue-500' :
                  'border-purple-500'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{country.flag}</span>
                      <h4 className="text-white font-bold">{country.country}</h4>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      country.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' :
                      country.status === 'Phase 2' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {country.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <div className="text-slate-400 text-xs">Visa Services</div>
                      <div className="text-cyan-400 font-medium">{country.visaServices}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-400 text-xs">Launch</div>
                      <div className="text-white font-medium">{country.timeline}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Financials Tab */}
        {activeTab === 'financials' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl p-4 sm:p-6 border-2 border-green-500">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                Financial Projections
              </h2>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full text-xs sm:text-sm min-w-[400px]">
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
                        <td key={i} className="py-3 px-4 text-right text-emerald-400 font-bold">{proj.netProfit}M</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-300">Users</td>
                      {financialProjections.map((proj, i) => (
                        <td key={i} className="py-3 px-4 text-right text-white font-medium">{(proj.users/1000).toFixed(0)}K</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <div className="space-y-4 sm:space-y-6">
            {roadmapPhases.map((phase, i) => (
              <div key={i} className={`${phase.bgColor} rounded-xl p-4 sm:p-6 border-2 ${phase.color}`}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-3 sm:mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base ${
                      phase.status === 'planned' ? 'bg-green-500' : 'bg-blue-500'
                    }`}>
                      {phase.phase.replace('Phase ', '')}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">{phase.phase}: {phase.title}</h3>
                      <span className="text-slate-400 text-xs sm:text-sm">{phase.timeline}</span>
                    </div>
                  </div>
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-bold ${
                    phase.status === 'planned' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {phase.milestones.map((milestone, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className={`w-4 h-4 ${phase.status === 'planned' ? 'text-green-400' : 'text-blue-400'}`} />
                      {milestone}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </main>

      <GlobalFooter />
    </div>
  );
}
