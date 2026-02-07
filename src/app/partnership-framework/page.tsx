'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Building2,
  Calendar,
  Smartphone,
  UtensilsCrossed,
  Scissors,
  ShoppingBag,
  Dumbbell,
  ShoppingCart,
  Store,
  CreditCard,
  Landmark,
  Wallet,
  BadgePercent,
  Crown,
  Plane,
  Home as HomeIcon,
  HardHat,
  Users,
  Target,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Star,
  Clock,
  DollarSign,
  Handshake
} from 'lucide-react';

interface PartnerType {
  name: string;
  icon: React.ElementType;
  examples: string[];
  value: string;
}

interface FrameworkLevel {
  level: number;
  name: string;
  emoji: string;
  color: string;
  bgGradient: string;
  borderColor: string;
  tagline: string;
  goal: string;
  timing: string;
  whyImportant: string[];
  partnerTypes: PartnerType[];
  keyMetrics: string[];
  priorityScore: number;
}

const frameworkLevels: FrameworkLevel[] = [
  {
    level: 1,
    name: 'Distribution Partners',
    emoji: '🟢',
    color: 'text-emerald-400',
    bgGradient: 'from-emerald-500/20 to-green-600/20',
    borderColor: 'border-emerald-500/50',
    tagline: 'Get users at scale — fast',
    goal: 'User Acquisition',
    timing: 'Year 1 Priority',
    whyImportant: [
      'Provides immediate access to large user bases',
      'Low cost per acquisition compared to paid marketing',
      'Built-in trust from institutional endorsement',
      'Creates word-of-mouth through communities',
      'Essential foundation before merchant partnerships'
    ],
    partnerTypes: [
      {
        name: 'Universities',
        icon: GraduationCap,
        examples: ['AUS', 'NYUAD', 'AUD', 'Heriot-Watt', 'Zayed University', 'UAEU'],
        value: '200K+ students who are early adopters'
      },
      {
        name: 'Corporates',
        icon: Building2,
        examples: ['Majid Al Futtaim', 'Al Futtaim Group', 'ADNOC', 'Etisalat', 'Emirates Group'],
        value: 'Employee benefits = sticky users'
      },
      {
        name: 'Events & Conferences',
        icon: Calendar,
        examples: ['GITEX', 'Arabian Travel Market', 'Dubai Expo events', 'Art Dubai', 'Dubai Food Festival'],
        value: 'High-intent, engaged audiences'
      },
      {
        name: 'Telcos',
        icon: Smartphone,
        examples: ['Etisalat', 'du', 'Virgin Mobile UAE'],
        value: 'Millions of subscribers + bill integration'
      }
    ],
    keyMetrics: [
      '100K+ users in Year 1',
      '< AED 5 CAC per user',
      '60%+ activation rate',
      '40%+ monthly active users'
    ],
    priorityScore: 95
  },
  {
    level: 2,
    name: 'Merchant & Retail Partners',
    emoji: '🟡',
    color: 'text-amber-400',
    bgGradient: 'from-amber-500/20 to-yellow-600/20',
    borderColor: 'border-amber-500/50',
    tagline: 'Drive transaction density',
    goal: 'Monetization & Engagement',
    timing: 'Year 1-2',
    whyImportant: [
      'Creates daily use cases for the app',
      'Generates commission revenue from transactions',
      'Builds habit through frequent rewards',
      'Provides value that keeps users engaged',
      'Network effect - more merchants = more value'
    ],
    partnerTypes: [
      {
        name: 'F&B & Restaurants',
        icon: UtensilsCrossed,
        examples: ['Talabat partners', 'Zomato restaurants', 'Caramel Group', 'Gates Hospitality', 'JRG Dubai'],
        value: 'Daily transactions, high frequency'
      },
      {
        name: 'Salons & Spas',
        icon: Scissors,
        examples: ['Tips & Toes', 'Sisters Beauty Lounge', 'N.Bar', 'The White Room', 'Pastels Salon'],
        value: 'Recurring bookings, female demographic'
      },
      {
        name: 'Fashion & Apparel',
        icon: ShoppingBag,
        examples: ['Namshi', 'Ounass', 'Level Shoes', 'Splash', 'Max Fashion', 'Centrepoint'],
        value: 'High-value transactions'
      },
      {
        name: 'Fitness & Wellness',
        icon: Dumbbell,
        examples: ['Fitness First', 'GymNation', 'F45', 'Barry\'s', 'Yoga La Vie', 'Bare'],
        value: 'Health-conscious affluent users'
      },
      {
        name: 'Grocery & Supermarkets',
        icon: ShoppingCart,
        examples: ['Carrefour', 'Lulu', 'Spinneys', 'Waitrose', 'Choithrams', 'Kibsons'],
        value: 'Weekly essential spending'
      },
      {
        name: 'Mall Retailers',
        icon: Store,
        examples: ['Dubai Mall tenants', 'Mall of Emirates', 'City Centre', 'Festival City'],
        value: 'Foot traffic + diverse categories'
      }
    ],
    keyMetrics: [
      '500+ merchant partners',
      '3+ transactions per user/week',
      '5-15% commission rates',
      'AED 500+ monthly spend per active user'
    ],
    priorityScore: 85
  },
  {
    level: 3,
    name: 'Financial & Payment Partners',
    emoji: '🔵',
    color: 'text-blue-400',
    bgGradient: 'from-blue-500/20 to-indigo-600/20',
    borderColor: 'border-blue-500/50',
    tagline: 'Credibility + Monetization',
    goal: 'Revenue Scale & Trust',
    timing: 'Year 2',
    whyImportant: [
      'Bank partnerships provide instant credibility',
      'Access to payment data enables better rewards',
      'Transaction fees create scalable revenue',
      'Co-branded products increase user value',
      'Financial partners attract investors'
    ],
    partnerTypes: [
      {
        name: 'Payment Gateways',
        icon: CreditCard,
        examples: ['Network International', 'Checkout.com', 'PayTabs', 'Telr', 'Amazon Pay'],
        value: 'Transaction data + payment rails'
      },
      {
        name: 'Banks',
        icon: Landmark,
        examples: ['Emirates NBD', 'FAB', 'Mashreq', 'ADCB', 'Liv.', 'YAP'],
        value: 'Co-branded cards + distribution'
      },
      {
        name: 'BNPL Providers',
        icon: BadgePercent,
        examples: ['Tabby', 'Tamara', 'Postpay', 'Spotii', 'Cashew'],
        value: 'Young demographic, high conversion'
      },
      {
        name: 'Digital Wallets',
        icon: Wallet,
        examples: ['Apple Pay', 'Samsung Pay', 'PayPal', 'Payit (FAB)', 'e& money'],
        value: 'Seamless payment integration'
      }
    ],
    keyMetrics: [
      '2+ bank partnerships',
      'AED 10M+ monthly transaction volume',
      '0.2-0.5% transaction revenue share',
      'Co-branded card launch'
    ],
    priorityScore: 75
  },
  {
    level: 4,
    name: 'Strategic & Institutional Partners',
    emoji: '🟣',
    color: 'text-purple-400',
    bgGradient: 'from-purple-500/20 to-violet-600/20',
    borderColor: 'border-purple-500/50',
    tagline: 'Creates "Moat" — Defensibility',
    goal: 'Long-term Competitive Advantage',
    timing: 'Year 2-3',
    whyImportant: [
      'Government partnerships are hard to replicate',
      'Creates barriers to entry for competitors',
      'Institutional backing attracts larger investors',
      'Opens doors to exclusive opportunities',
      'Positions Nuqta as critical infrastructure'
    ],
    partnerTypes: [
      {
        name: 'Government Entities',
        icon: Crown,
        examples: ['Dubai Economy', 'Smart Dubai', 'DEWA', 'RTA', 'DHA (Dubai Health Authority)'],
        value: 'Regulatory support + citizen reach'
      },
      {
        name: 'Tourism Boards',
        icon: Plane,
        examples: ['Dubai Tourism', 'DCT Abu Dhabi', 'Ras Al Khaimah Tourism', 'Sharjah Tourism'],
        value: '15M+ annual tourists'
      },
      {
        name: 'Mall Groups',
        icon: HomeIcon,
        examples: ['Majid Al Futtaim', 'Emaar Malls', 'Al Futtaim', 'Nakheel Malls', 'Meraas'],
        value: 'Centralized tenant access'
      },
      {
        name: 'Real Estate Developers',
        icon: HardHat,
        examples: ['Emaar', 'Damac', 'Nakheel', 'Meraas', 'Aldar', 'Dubai Properties'],
        value: 'Resident communities + amenities'
      }
    ],
    keyMetrics: [
      '1 government MoU signed',
      'Tourism board integration',
      '3+ mall group partnerships',
      'National-level brand recognition'
    ],
    priorityScore: 65
  }
];

export default function PartnershipFrameworkPage() {
  const [expandedLevels, setExpandedLevels] = useState<number[]>([1]);

  const toggleLevel = (level: number) => {
    setExpandedLevels(prev =>
      prev.includes(level)
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/partnerships" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Partnerships</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">ن</span>
            </div>
            <span className="font-bold text-white text-xl">Nuqta</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <Target className="text-amber-400" size={18} />
            <span className="text-amber-300 font-medium">Strategic Partnership Framework</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            4-Level Partnership <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Strategy</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A structured approach to building Nuqta's partnership ecosystem — from user acquisition to creating an unbeatable competitive moat
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {frameworkLevels.map((level) => (
            <div
              key={level.level}
              className={`bg-gradient-to-br ${level.bgGradient} border ${level.borderColor} rounded-xl p-4 cursor-pointer hover:scale-105 transition-transform`}
              onClick={() => toggleLevel(level.level)}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{level.emoji}</span>
                <span className={`font-bold ${level.color}`}>Level {level.level}</span>
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">{level.name}</h3>
              <p className="text-slate-400 text-xs">{level.tagline}</p>
            </div>
          ))}
        </div>

        {/* Visual Flow */}
        <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <TrendingUp className="text-amber-400" size={24} />
            Partnership Journey
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {frameworkLevels.map((level, idx) => (
              <React.Fragment key={level.level}>
                <div className={`flex-1 bg-gradient-to-br ${level.bgGradient} border ${level.borderColor} rounded-xl p-4 text-center`}>
                  <span className="text-3xl mb-2 block">{level.emoji}</span>
                  <h4 className={`font-bold ${level.color} text-sm`}>{level.name}</h4>
                  <p className="text-white text-xs mt-1">{level.goal}</p>
                  <div className="mt-2 px-2 py-1 bg-black/30 rounded-full">
                    <span className="text-slate-400 text-xs">{level.timing}</span>
                  </div>
                </div>
                {idx < frameworkLevels.length - 1 && (
                  <ArrowRight className="text-slate-500 hidden md:block flex-shrink-0" size={24} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Detailed Levels */}
        <div className="space-y-6">
          {frameworkLevels.map((level) => {
            const isExpanded = expandedLevels.includes(level.level);

            return (
              <div
                key={level.level}
                className={`bg-gradient-to-br ${level.bgGradient} border ${level.borderColor} rounded-2xl overflow-hidden transition-all`}
              >
                {/* Level Header */}
                <div
                  className="p-6 cursor-pointer flex items-center justify-between"
                  onClick={() => toggleLevel(level.level)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{level.emoji}</span>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className={`text-2xl font-bold ${level.color}`}>
                          Level {level.level}: {level.name}
                        </h3>
                        <span className="px-3 py-1 bg-black/30 rounded-full text-slate-300 text-sm">
                          {level.timing}
                        </span>
                      </div>
                      <p className="text-white mt-1">{level.tagline}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden md:block">
                      <p className="text-slate-400 text-sm">Priority Score</p>
                      <p className={`text-2xl font-bold ${level.color}`}>{level.priorityScore}%</p>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="text-white" size={24} />
                    ) : (
                      <ChevronRight className="text-white" size={24} />
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t border-white/10 p-6 space-y-8 bg-slate-900/50">
                    {/* Why Important */}
                    <div className="bg-black/20 rounded-xl p-6">
                      <h4 className={`font-bold ${level.color} mb-4 flex items-center gap-2 text-lg`}>
                        <Star size={20} />
                        Why This Level Matters
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {level.whyImportant.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-3">
                            <CheckCircle className={level.color.replace('text-', 'text-')} size={18} />
                            <span className="text-white text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Partner Types */}
                    <div>
                      <h4 className={`font-bold ${level.color} mb-4 flex items-center gap-2 text-lg`}>
                        <Handshake size={20} />
                        Partner Types & Examples
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {level.partnerTypes.map((type, idx) => {
                          const IconComponent = type.icon;
                          return (
                            <div key={idx} className="bg-slate-800/80 border border-white/10 rounded-xl p-4">
                              <div className="flex items-center gap-3 mb-3">
                                <div className={`p-2 rounded-lg bg-gradient-to-br ${level.bgGradient}`}>
                                  <IconComponent className={level.color} size={20} />
                                </div>
                                <h5 className="text-white font-semibold">{type.name}</h5>
                              </div>
                              <p className="text-slate-400 text-sm mb-3">{type.value}</p>
                              <div className="flex flex-wrap gap-2">
                                {type.examples.slice(0, 5).map((example, eIdx) => (
                                  <span
                                    key={eIdx}
                                    className={`px-2 py-1 bg-gradient-to-br ${level.bgGradient} border ${level.borderColor} rounded-full text-xs text-white`}
                                  >
                                    {example}
                                  </span>
                                ))}
                                {type.examples.length > 5 && (
                                  <span className="px-2 py-1 bg-slate-700 rounded-full text-xs text-slate-400">
                                    +{type.examples.length - 5} more
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="bg-black/20 rounded-xl p-6">
                      <h4 className={`font-bold ${level.color} mb-4 flex items-center gap-2 text-lg`}>
                        <TrendingUp size={20} />
                        Success Metrics
                      </h4>
                      <div className="grid md:grid-cols-4 gap-4">
                        {level.keyMetrics.map((metric, idx) => (
                          <div key={idx} className="bg-slate-800/50 rounded-lg p-4 text-center">
                            <p className="text-white font-semibold text-sm">{metric}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-center">
                      <Link
                        href="/partnerships"
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${level.bgGradient} border ${level.borderColor} rounded-xl text-white font-semibold hover:scale-105 transition-transform`}
                      >
                        View Detailed Partner Plans
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Summary Section */}
        <div className="mt-12 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Shield className="text-amber-400" size={28} />
            Framework Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-white font-semibold flex items-center gap-2">
                <Clock className="text-blue-400" size={18} />
                Execution Timeline
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-emerald-400 text-xl">🟢</span>
                  <span><strong>Year 1:</strong> Focus on Distribution Partners — build user base</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-amber-400 text-xl">🟡</span>
                  <span><strong>Year 1-2:</strong> Scale Merchant Partners — drive engagement</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-blue-400 text-xl">🔵</span>
                  <span><strong>Year 2:</strong> Add Financial Partners — build credibility</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-purple-400 text-xl">🟣</span>
                  <span><strong>Year 2-3:</strong> Lock in Strategic Partners — create moat</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold flex items-center gap-2">
                <Zap className="text-amber-400" size={18} />
                Key Principles
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="text-emerald-400 flex-shrink-0" size={18} />
                  <span>Build user base FIRST before approaching premium partners</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="text-emerald-400 flex-shrink-0" size={18} />
                  <span>Each level creates leverage for the next level</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="text-emerald-400 flex-shrink-0" size={18} />
                  <span>Strategic partners (Level 4) create unfair advantage</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="text-emerald-400 flex-shrink-0" size={18} />
                  <span>Government + institutional = nearly impossible to replicate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link
            href="/partnerships"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-amber-500/25"
          >
            <Users size={24} />
            Explore All 21 Partnership Types
            <ArrowRight size={20} />
          </Link>
        </div>
      </main>
    </div>
  );
}
