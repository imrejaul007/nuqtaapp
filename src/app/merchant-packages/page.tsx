'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Check,
  X,
  Star,
  Crown,
  Rocket,
  Building2,
  Users,
  TrendingUp,
  Megaphone,
  Camera,
  Target,
  MapPin,
  MessageCircle,
  Smartphone,
  Globe,
  BarChart3,
  Zap,
  Shield,
  Clock,
  Phone,
  Mail,
  ChevronRight,
  Sparkles,
  Calculator,
  DollarSign,
  Gem,
  Gift,
  Percent,
  CreditCard,
  Store,
  Coffee,
  ShoppingCart,
  Utensils,
  Scissors,
  Dumbbell,
  ChevronDown,
  ChevronUp,
  Info,
  Settings,
  Award,
  Calendar
} from 'lucide-react';

export default function MerchantPackagesPage() {
  const [activeEngine, setActiveEngine] = useState<'A' | 'B' | 'C'>('A');
  const [expandedTier, setExpandedTier] = useState<string | null>('golden');

  // Engine definitions
  const engines = {
    A: {
      name: 'Engine A - High Margin',
      description: 'Cafes, Restaurants, Salons, Spas, Gyms, Entertainment',
      icon: Coffee,
      color: 'amber',
      examples: ['Cafes', 'Restaurants', 'Salons', 'Spas', 'Fitness Centers', 'Entertainment Venues'],
      avgMargin: '60-80%',
      baseCommission: { free: 20, basic: 18, golden: 17, diamond: 15 }
    },
    B: {
      name: 'Engine B - Medium Margin',
      description: 'Retail, Electronics, Fashion, Home & Living',
      icon: ShoppingCart,
      color: 'blue',
      examples: ['Electronics', 'Fashion Retail', 'Home Decor', 'Furniture', 'Accessories'],
      avgMargin: '25-40%',
      baseCommission: { free: 12, basic: 10, golden: 9, diamond: 8 }
    },
    C: {
      name: 'Engine C - Low Margin',
      description: 'Supermarkets, Grocery, Pharmacies, Fuel Stations',
      icon: Store,
      color: 'green',
      examples: ['Supermarkets', 'Grocery Stores', 'Pharmacies', 'Fuel Stations', 'Convenience Stores'],
      avgMargin: '5-15%',
      baseCommission: { free: 5, basic: 4, golden: 3.5, diamond: 3 }
    }
  };

  const currentEngine = engines[activeEngine];

  // Package tiers with all details
  const packageTiers = [
    {
      id: 'free',
      name: 'Free',
      icon: Rocket,
      color: 'slate',
      tagline: 'Try Nuqta risk-free',
      marketingSpend: 0,
      subscriptionFee: {
        condition: 'AED 0 if monthly sales < AED 10K',
        above10k: 'AED 100 if monthly sales > AED 10K'
      },
      inAppCredit: 0,
      commission: {
        A: { fixed: 20, nuqtaCoin: '5-10%', remaining: '10-15%' },
        B: { fixed: 12, nuqtaCoin: '3-6%', remaining: '6-9%' },
        C: { fixed: 5, nuqtaCoin: '1-2%', remaining: '3-4%' }
      },
      optionalCoins: {
        brandCoin: '0-10%',
        priveCoin: '5-100%'
      },
      marketingServices: [],
      platformFeatures: [
        { name: 'Listed on Nuqta app', included: true },
        { name: 'Basic store profile', included: true },
        { name: 'QR code for payments', included: true },
        { name: 'Customer reviews', included: true },
        { name: 'Basic analytics', included: true },
        { name: 'Priority listing', included: false },
        { name: 'Featured promotions', included: false },
        { name: 'Push notifications', included: false },
      ],
      materials: [
        { name: 'QR code board (1x)', included: true },
        { name: '"We Accept Nuqta" sticker (1x)', included: true },
        { name: 'Window decals', included: false },
        { name: 'Table tents', included: false },
      ],
      support: [
        { name: 'Email support (48hr)', included: true },
        { name: 'WhatsApp support', included: false },
        { name: 'Dedicated manager', included: false },
        { name: 'Monthly reviews', included: false },
      ],
      monthlyDeliverables: []
    },
    {
      id: 'basic',
      name: 'Basic',
      icon: TrendingUp,
      color: 'blue',
      tagline: 'Start growing with marketing support',
      marketingSpend: 5000,
      subscriptionFee: {
        condition: 'Included in marketing spend',
        above10k: 'No additional fees'
      },
      inAppCredit: 5000,
      commission: {
        A: { fixed: 18, nuqtaCoin: '5-10%', remaining: '8-13%' },
        B: { fixed: 10, nuqtaCoin: '3-6%', remaining: '4-7%' },
        C: { fixed: 4, nuqtaCoin: '1-2%', remaining: '2-3%' }
      },
      optionalCoins: {
        brandCoin: '0-10%',
        priveCoin: '5-100%'
      },
      marketingServices: [
        'Performance marketing (Meta/Google)',
        'Content creation (4 posts/month)',
        'Basic influencer marketing',
      ],
      platformFeatures: [
        { name: 'Listed on Nuqta app', included: true },
        { name: 'Enhanced store profile', included: true },
        { name: 'QR code for payments', included: true },
        { name: 'Customer reviews', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Priority listing', included: true },
        { name: 'Featured promotions (2x/month)', included: true },
        { name: 'Push notifications (1x/month)', included: true },
      ],
      materials: [
        { name: 'QR code board (1x)', included: true },
        { name: '"We Accept Nuqta" stickers (5x)', included: true },
        { name: 'Window decals', included: true },
        { name: 'Table tents (10x)', included: true },
      ],
      support: [
        { name: 'Email support (24hr)', included: true },
        { name: 'WhatsApp support', included: true },
        { name: 'Dedicated manager (1:25)', included: true },
        { name: 'Monthly reviews', included: true },
      ],
      monthlyDeliverables: [
        'AED 5K in-app promotion credit',
        '4 social media posts',
        '2 featured promotions',
        '1 WhatsApp campaign',
        'Monthly performance report',
        'Bi-weekly check-in call'
      ]
    },
    {
      id: 'golden',
      name: 'Golden',
      icon: Star,
      color: 'amber',
      tagline: 'Full marketing support for growth',
      popular: true,
      marketingSpend: 15000,
      subscriptionFee: {
        condition: 'Included in marketing spend',
        above10k: 'No additional fees'
      },
      inAppCredit: 15000,
      commission: {
        A: { fixed: 17, nuqtaCoin: '5-10%', remaining: '7-12%' },
        B: { fixed: 9, nuqtaCoin: '3-6%', remaining: '3-6%' },
        C: { fixed: 3.5, nuqtaCoin: '1-2%', remaining: '1.5-2.5%' }
      },
      optionalCoins: {
        brandCoin: '0-10%',
        priveCoin: '5-100%'
      },
      marketingServices: [
        'Performance marketing (Meta/Google/TikTok)',
        'Content creation (8 posts + 4 reels/month)',
        'Influencer marketing (nano + micro)',
        'Email marketing campaigns',
        'GMB optimization',
      ],
      platformFeatures: [
        { name: 'Listed on Nuqta app', included: true },
        { name: 'Premium store profile', included: true },
        { name: 'QR code for payments', included: true },
        { name: 'Customer reviews + responses', included: true },
        { name: 'Full analytics suite', included: true },
        { name: 'Top priority listing', included: true },
        { name: 'Featured promotions (4x/month)', included: true },
        { name: 'Push notifications (4x/month)', included: true },
        { name: 'Exclusive deals badge', included: true },
      ],
      materials: [
        { name: 'QR code board (2x)', included: true },
        { name: '"We Accept Nuqta" stickers (10x)', included: true },
        { name: 'Window decals', included: true },
        { name: 'Table tents (20x)', included: true },
        { name: 'Outdoor signage (1x)', included: true },
      ],
      support: [
        { name: 'Email support (4hr)', included: true },
        { name: 'WhatsApp support (priority)', included: true },
        { name: 'Dedicated manager (1:15)', included: true },
        { name: 'Weekly reviews', included: true },
        { name: 'Quarterly business review', included: true },
      ],
      monthlyDeliverables: [
        'AED 15K in-app promotion credit',
        '8 social media posts + 4 reels',
        '4 featured promotions',
        '2 WhatsApp campaigns',
        '2 email campaigns',
        '1 influencer collab (barter)',
        'Weekly performance report',
        'Weekly check-in call',
        '1 photo/video shoot per quarter'
      ]
    },
    {
      id: 'diamond',
      name: 'Diamond',
      icon: Gem,
      color: 'purple',
      tagline: 'Premium partnership for market leaders',
      marketingSpend: 30000,
      subscriptionFee: {
        condition: 'Included in marketing spend',
        above10k: 'No additional fees'
      },
      inAppCredit: 30000,
      commission: {
        A: { fixed: 15, nuqtaCoin: '5-10%', remaining: '5-10%' },
        B: { fixed: 8, nuqtaCoin: '3-6%', remaining: '2-5%' },
        C: { fixed: 3, nuqtaCoin: '1-2%', remaining: '1-2%' }
      },
      optionalCoins: {
        brandCoin: '0-10%',
        priveCoin: '5-100%'
      },
      marketingServices: [
        'Full-funnel performance marketing',
        'Unlimited content creation',
        'Premium influencer marketing (all tiers)',
        'Email marketing (unlimited)',
        'Full GMB management',
        'Paid influencer campaigns',
        'Event activations',
        'PR & media outreach',
      ],
      platformFeatures: [
        { name: 'Listed on Nuqta app', included: true },
        { name: 'Custom branded profile', included: true },
        { name: 'QR code for payments', included: true },
        { name: 'Managed review responses', included: true },
        { name: 'Enterprise analytics + API', included: true },
        { name: 'Exclusive premium placement', included: true },
        { name: 'Unlimited featured promotions', included: true },
        { name: 'Unlimited push notifications', included: true },
        { name: 'Category sponsorship', included: true },
        { name: 'Homepage feature', included: true },
      ],
      materials: [
        { name: 'QR code boards (unlimited)', included: true },
        { name: '"We Accept Nuqta" stickers (unlimited)', included: true },
        { name: 'Window decals (all locations)', included: true },
        { name: 'Table tents (unlimited)', included: true },
        { name: 'Custom outdoor signage', included: true },
        { name: 'Branded merchandise', included: true },
      ],
      support: [
        { name: 'Phone support (24/7)', included: true },
        { name: 'Dedicated success team', included: true },
        { name: 'Dedicated manager (1:10)', included: true },
        { name: 'Daily reporting', included: true },
        { name: 'Monthly executive review', included: true },
        { name: 'On-site support', included: true },
      ],
      monthlyDeliverables: [
        'AED 30K in-app promotion credit',
        'Unlimited social content',
        'Unlimited featured promotions',
        'Unlimited WhatsApp campaigns',
        'Unlimited email campaigns',
        '2-3 influencer collabs (paid)',
        'Real-time performance dashboard',
        'Daily reporting + insights',
        'Monthly photo/video shoot',
        'Quarterly strategy session',
        'Event activation support'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; light: string }> = {
      slate: { bg: 'bg-slate-500', border: 'border-slate-500/30', text: 'text-slate-400', light: 'bg-slate-500/10' },
      blue: { bg: 'bg-blue-500', border: 'border-blue-500/30', text: 'text-blue-400', light: 'bg-blue-500/10' },
      amber: { bg: 'bg-amber-500', border: 'border-amber-500/30', text: 'text-amber-400', light: 'bg-amber-500/10' },
      purple: { bg: 'bg-purple-500', border: 'border-purple-500/30', text: 'text-purple-400', light: 'bg-purple-500/10' },
      green: { bg: 'bg-green-500', border: 'border-green-500/30', text: 'text-green-400', light: 'bg-green-500/10' },
    };
    return colors[color] || colors.slate;
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] border-b border-[#c9a227]/20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#c9a227] mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-r from-[#c9a227] to-amber-500 p-3 rounded-xl">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black">Merchant Packages & Pricing</h1>
              <p className="text-gray-400 mt-1">Choose the right package for your business</p>
            </div>
          </div>
        </div>
      </header>

      {/* Engine Selector */}
      <div className="sticky top-0 z-50 bg-[#0a1628]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {(Object.keys(engines) as Array<'A' | 'B' | 'C'>).map((key) => {
              const engine = engines[key];
              const colors = getColorClasses(engine.color);
              return (
                <button
                  key={key}
                  onClick={() => setActiveEngine(key)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all ${
                    activeEngine === key
                      ? `${colors.light} border ${colors.border} ${colors.text}`
                      : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  <engine.icon size={24} />
                  <div className="text-left">
                    <div className="font-bold">{engine.name}</div>
                    <div className="text-xs opacity-70">{engine.avgMargin} margin</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Engine Info */}
        <div className={`rounded-xl p-6 mb-8 ${getColorClasses(currentEngine.color).light} border ${getColorClasses(currentEngine.color).border}`}>
          <div className="flex items-center gap-4 mb-4">
            <currentEngine.icon className={getColorClasses(currentEngine.color).text} size={32} />
            <div>
              <h2 className="text-2xl font-bold text-white">{currentEngine.name}</h2>
              <p className="text-gray-400">{currentEngine.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {currentEngine.examples.map((ex, idx) => (
              <span key={idx} className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-300">
                {ex}
              </span>
            ))}
          </div>
        </div>

        {/* Commission Structure Explanation */}
        <div className="bg-[#c9a227]/10 rounded-xl p-6 mb-8 border border-[#c9a227]/30">
          <h3 className="text-lg font-bold text-[#c9a227] mb-4 flex items-center gap-2">
            <Info size={20} />
            Commission Structure Explained
          </h3>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/5 rounded-lg p-3">
              <div className="font-bold text-white mb-1">Fixed Commission</div>
              <p className="text-gray-400">The total % charged on each transaction</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <div className="font-bold text-[#c9a227] mb-1">Nuqta Coins (5-10%)</div>
              <p className="text-gray-400">User cashback - they get coins for each purchase</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <div className="font-bold text-green-400 mb-1">Nuqta Revenue</div>
              <p className="text-gray-400">Our portion: Fixed % minus Nuqta Coins</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <div className="font-bold text-purple-400 mb-1">Optional Coins</div>
              <p className="text-gray-400">Brand Coin + Prive Coin - merchant decides</p>
            </div>
          </div>
        </div>

        {/* Package Tiers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {packageTiers.map((tier) => {
            const colors = getColorClasses(tier.color);
            const commission = tier.commission[activeEngine];
            return (
              <div
                key={tier.id}
                className={`rounded-xl border overflow-hidden transition-all ${
                  tier.popular ? 'ring-2 ring-[#c9a227]' : ''
                } ${colors.border} ${expandedTier === tier.id ? colors.light : 'bg-white/5'}`}
              >
                {tier.popular && (
                  <div className="bg-[#c9a227] text-black text-center text-xs font-bold py-1">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-6">
                  {/* Tier Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${colors.light}`}>
                      <tier.icon className={colors.text} size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                      <p className="text-xs text-gray-400">{tier.tagline}</p>
                    </div>
                  </div>

                  {/* Marketing Spend */}
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-1">Monthly Marketing Spend</div>
                    <div className="text-3xl font-bold text-white">
                      {tier.marketingSpend === 0 ? 'FREE' : `AED ${tier.marketingSpend.toLocaleString()}`}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{tier.subscriptionFee.condition}</div>
                  </div>

                  {/* Commission */}
                  <div className={`${colors.light} rounded-lg p-3 mb-4`}>
                    <div className="text-xs text-gray-500 mb-2">Commission Structure</div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Fixed Rate</span>
                      <span className={`text-lg font-bold ${colors.text}`}>{commission.fixed}%</span>
                    </div>
                    <div className="text-xs text-gray-400 space-y-1">
                      <div className="flex justify-between">
                        <span>Nuqta Coins (User)</span>
                        <span className="text-[#c9a227]">{commission.nuqtaCoin}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Nuqta Revenue</span>
                        <span className="text-green-400">{commission.remaining}</span>
                      </div>
                    </div>
                  </div>

                  {/* In-App Credit */}
                  {tier.inAppCredit > 0 && (
                    <div className="bg-green-500/10 rounded-lg p-3 mb-4 border border-green-500/20">
                      <div className="flex items-center gap-2">
                        <Gift className="text-green-400" size={16} />
                        <span className="text-sm text-white font-medium">
                          AED {tier.inAppCredit.toLocaleString()} In-App Credit
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Marketing Services */}
                  {tier.marketingServices.length > 0 && (
                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-2">Marketing Services</div>
                      <ul className="space-y-1">
                        {tier.marketingServices.slice(0, 3).map((service, idx) => (
                          <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                            <Check size={12} className="text-green-400 mt-0.5" />
                            {service}
                          </li>
                        ))}
                        {tier.marketingServices.length > 3 && (
                          <li className="text-xs text-gray-500">
                            +{tier.marketingServices.length - 3} more services
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Expand Button */}
                  <button
                    onClick={() => setExpandedTier(expandedTier === tier.id ? null : tier.id)}
                    className={`w-full py-2 rounded-lg text-sm font-medium transition-all ${
                      expandedTier === tier.id
                        ? `${colors.bg} text-white`
                        : 'bg-white/10 text-gray-400 hover:bg-white/20'
                    }`}
                  >
                    {expandedTier === tier.id ? 'Show Less' : 'View Full Details'}
                    {expandedTier === tier.id ? <ChevronUp className="inline ml-2" size={16} /> : <ChevronDown className="inline ml-2" size={16} />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded Tier Details */}
        {expandedTier && (
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
            {packageTiers.filter(t => t.id === expandedTier).map((tier) => {
              const colors = getColorClasses(tier.color);
              const commission = tier.commission[activeEngine];
              return (
                <div key={tier.id}>
                  <div className="flex items-center gap-3 mb-6">
                    <tier.icon className={colors.text} size={32} />
                    <div>
                      <h3 className="text-2xl font-bold text-white">{tier.name} Package - Full Details</h3>
                      <p className="text-gray-400">Everything included in this tier</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Platform Features */}
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                        <Smartphone size={18} className="text-blue-400" />
                        Platform Features
                      </h4>
                      <ul className="space-y-2">
                        {tier.platformFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            {feature.included ? (
                              <Check size={14} className="text-green-400" />
                            ) : (
                              <X size={14} className="text-gray-600" />
                            )}
                            <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Marketing Services */}
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                        <Megaphone size={18} className="text-pink-400" />
                        Marketing Services
                      </h4>
                      {tier.marketingServices.length > 0 ? (
                        <ul className="space-y-2">
                          {tier.marketingServices.map((service, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check size={14} className="text-green-400 mt-0.5" />
                              <span className="text-gray-300">{service}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 text-sm">No marketing services included</p>
                      )}
                    </div>

                    {/* Materials */}
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                        <Gift size={18} className="text-amber-400" />
                        Branding Materials
                      </h4>
                      <ul className="space-y-2">
                        {tier.materials.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            {item.included ? (
                              <Check size={14} className="text-green-400" />
                            ) : (
                              <X size={14} className="text-gray-600" />
                            )}
                            <span className={item.included ? 'text-gray-300' : 'text-gray-600'}>
                              {item.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Support */}
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                        <Shield size={18} className="text-green-400" />
                        Support & Success
                      </h4>
                      <ul className="space-y-2">
                        {tier.support.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            {item.included ? (
                              <Check size={14} className="text-green-400" />
                            ) : (
                              <X size={14} className="text-gray-600" />
                            )}
                            <span className={item.included ? 'text-gray-300' : 'text-gray-600'}>
                              {item.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Monthly Deliverables */}
                  {tier.monthlyDeliverables.length > 0 && (
                    <div className={`mt-6 ${colors.light} rounded-lg p-4 border ${colors.border}`}>
                      <h4 className={`font-bold ${colors.text} mb-3 flex items-center gap-2`}>
                        <Calendar size={18} />
                        What You Get Every Month
                      </h4>
                      <div className="grid md:grid-cols-3 gap-2">
                        {tier.monthlyDeliverables.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-white">
                            <Check size={14} className={colors.text} />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Commission Breakdown */}
                  <div className="mt-6 bg-[#c9a227]/10 rounded-lg p-4 border border-[#c9a227]/30">
                    <h4 className="font-bold text-[#c9a227] mb-3 flex items-center gap-2">
                      <Calculator size={18} />
                      Commission Breakdown for {currentEngine.name}
                    </h4>
                    <div className="grid md:grid-cols-5 gap-4 text-center">
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-2xl font-bold text-white">{commission.fixed}%</div>
                        <div className="text-xs text-gray-400">Fixed Commission</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-2xl font-bold text-[#c9a227]">{commission.nuqtaCoin}</div>
                        <div className="text-xs text-gray-400">Nuqta Coins (User)</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-2xl font-bold text-green-400">{commission.remaining}</div>
                        <div className="text-xs text-gray-400">Nuqta Revenue</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-lg font-bold text-purple-400">{tier.optionalCoins.brandCoin}</div>
                        <div className="text-xs text-gray-400">Brand Coin (Optional)</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-lg font-bold text-pink-400">{tier.optionalCoins.priveCoin}</div>
                        <div className="text-xs text-gray-400">Prive Coin (Optional)</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Comparison Table */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 overflow-x-auto">
          <h3 className="text-xl font-bold text-white mb-6">Quick Comparison - {currentEngine.name}</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-[#c9a227]">Feature</th>
                <th className="text-center py-3 px-4 text-slate-400">Free</th>
                <th className="text-center py-3 px-4 text-blue-400">Basic</th>
                <th className="text-center py-3 px-4 text-amber-400">Golden</th>
                <th className="text-center py-3 px-4 text-purple-400">Diamond</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Monthly Marketing Spend</td>
                <td className="py-3 px-4 text-center">AED 0</td>
                <td className="py-3 px-4 text-center">AED 5K</td>
                <td className="py-3 px-4 text-center">AED 15K</td>
                <td className="py-3 px-4 text-center">AED 30K</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Commission Rate</td>
                <td className="py-3 px-4 text-center">{currentEngine.baseCommission.free}%</td>
                <td className="py-3 px-4 text-center">{currentEngine.baseCommission.basic}%</td>
                <td className="py-3 px-4 text-center">{currentEngine.baseCommission.golden}%</td>
                <td className="py-3 px-4 text-center">{currentEngine.baseCommission.diamond}%</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">In-App Promotion Credit</td>
                <td className="py-3 px-4 text-center">-</td>
                <td className="py-3 px-4 text-center text-green-400">AED 5K</td>
                <td className="py-3 px-4 text-center text-green-400">AED 15K</td>
                <td className="py-3 px-4 text-center text-green-400">AED 30K</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Social Content</td>
                <td className="py-3 px-4 text-center">-</td>
                <td className="py-3 px-4 text-center">4 posts/mo</td>
                <td className="py-3 px-4 text-center">8 posts + 4 reels</td>
                <td className="py-3 px-4 text-center">Unlimited</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Featured Promotions</td>
                <td className="py-3 px-4 text-center">-</td>
                <td className="py-3 px-4 text-center">2x/month</td>
                <td className="py-3 px-4 text-center">4x/month</td>
                <td className="py-3 px-4 text-center">Unlimited</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Influencer Marketing</td>
                <td className="py-3 px-4 text-center">-</td>
                <td className="py-3 px-4 text-center">Basic</td>
                <td className="py-3 px-4 text-center">Nano + Micro (barter)</td>
                <td className="py-3 px-4 text-center">All tiers (paid)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Dedicated Manager</td>
                <td className="py-3 px-4 text-center">-</td>
                <td className="py-3 px-4 text-center">1:25</td>
                <td className="py-3 px-4 text-center">1:15</td>
                <td className="py-3 px-4 text-center">1:10</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Support Response</td>
                <td className="py-3 px-4 text-center">48hr email</td>
                <td className="py-3 px-4 text-center">24hr + WhatsApp</td>
                <td className="py-3 px-4 text-center">4hr priority</td>
                <td className="py-3 px-4 text-center">24/7 phone</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA Section */}
        <div className="mt-8 bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-xl p-8 border border-[#c9a227]/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Grow Your Business?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join hundreds of merchants already growing with Nuqta. Start with our Free tier and upgrade as you scale.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contracts" className="px-8 py-3 bg-[#c9a227] text-black font-bold rounded-lg hover:bg-[#b8922b] transition-colors">
              Get Started Free
            </Link>
            <Link href="/sales-kit" className="px-8 py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors">
              Talk to Sales
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
