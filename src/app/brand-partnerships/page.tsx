'use client';

import React, { useState } from 'react';
import {
  Store, Users, Target, TrendingUp, DollarSign, Megaphone, Globe,
  CheckCircle, ChevronDown, ChevronUp, Zap, Star, Award, Rocket,
  Camera, MessageSquare, ShoppingCart, Heart, Coffee, Utensils,
  Gem, Shirt, Gift, Baby, Dog, Sparkles, Crown, Building2, MapPin,
  Calendar, Percent, BadgeCheck, QrCode, Smartphone, Truck, Package,
  Handshake, PiggyBank, BarChart3, Play, Instagram, Facebook
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function BrandPartnershipsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('why');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Marketing Services for Merchants
  const marketingServices = {
    online: [
      { name: 'Meta Ads', description: 'Facebook & Instagram advertising campaigns', icon: Facebook },
      { name: 'WhatsApp Marketing', description: 'Broadcast lists, catalogs & automated messages', icon: MessageSquare },
      { name: 'Google Shopping', description: 'Product listings & shopping campaigns', icon: ShoppingCart },
      { name: 'Google My Business', description: 'Profile optimization, reviews & local SEO', icon: MapPin }
    ],
    offline: [
      { name: 'Auto Advertising', description: 'Car wraps, taxi ads, rideshare branding', icon: Truck },
      { name: 'Bus Advertising', description: 'Bus shelter, bus wrap campaigns', icon: Building2 },
      { name: 'Gate Branding', description: 'Society gates, building entrance ads', icon: Building2 }
    ],
    content: [
      { name: 'Reels & Videos', description: 'Short-form video content for social', icon: Play },
      { name: 'Social Posts', description: 'Daily feed content & stories', icon: Instagram },
      { name: 'UGC Creation', description: 'User-generated content campaigns', icon: Camera },
      { name: 'Influencer Marketing', description: 'Barter & paid collaborations', icon: Star }
    ]
  };

  // Nuqta Board Types
  const nuqtaBoards = [
    { type: 'QR Code Board', description: 'QR Code to pay at the store', placement: 'Counter / Checkout' },
    { type: 'Wall Sticker', description: 'Sticker for walls, doors, windows', placement: 'High visibility areas' },
    { type: 'Circle Board', description: 'Outdoor circular signage', placement: 'Outside shop entrance' }
  ];

  const boardMessages = [
    'We Accept Nuqta',
    'Pay with Nuqta & Earn Cashback Instantly',
    'Use Nuqta and Get Instant Cashback'
  ];

  // Merchant Badge Levels
  const badgeLevels = [
    { level: 'Verified', color: 'blue', icon: BadgeCheck, description: 'Basic verification complete', requirements: ['Active account', 'Valid documents', '10+ transactions'] },
    { level: 'Trusted', color: 'green', icon: Award, description: 'Consistent quality & service', requirements: ['3+ months active', '50+ transactions', '4.0+ rating'] },
    { level: 'Nuqta Preferred', color: 'purple', icon: Star, description: 'Top performing merchant', requirements: ['6+ months active', '200+ transactions', '4.5+ rating', 'Low refund rate'] },
    { level: 'Nuqta Signature', color: 'amber', icon: Crown, description: 'Elite partnership status', requirements: ['12+ months', '500+ transactions', '4.8+ rating', 'Exclusive offers'] }
  ];

  // Price Engineering Strategy
  const priceEngineering = {
    strategy: 'Dynamic pricing to increase perceived value while maintaining Nuqta loyalty',
    steps: [
      { step: 1, action: 'Increase base price by 20%', reason: 'Creates room for discount perception' },
      { step: 2, action: 'Offer 20% Nuqta discount', reason: 'Users feel they are getting value' },
      { step: 3, action: 'Maintain brand value', reason: 'Higher prices = premium perception' },
      { step: 4, action: 'Nuqta users stay loyal', reason: 'They get exclusive 20% off' }
    ],
    dynamicPricing: 'Airplane-model pricing: Adjust discounts based on demand (5-30% range)'
  };

  // Co-Partner Brand Model
  const coPartnerModel = {
    investment: '₹500,000 (AED ~22,000)',
    ownership: '50%',
    benefits: [
      'Indirect marketing team for full lifecycle',
      'Direct control over Nuqta execution',
      'Revenue share from operations',
      'Zero additional marketing expenses',
      'Office space provided',
      'Finance & salary support'
    ],
    requirements: [
      'Daily content creation by founder/team',
      'Business journey documentation',
      'Selling exclusively via Nuqta',
      'Participation in fleet stall events'
    ]
  };

  // Fleet Stall Locations
  const fleetLocations = [
    { type: 'Malls', description: 'High footfall shopping centers', icon: ShoppingCart },
    { type: 'Events', description: 'Festivals, exhibitions, concerts', icon: Calendar },
    { type: 'Universities', description: 'Campus food courts & events', icon: Building2 },
    { type: 'Societies', description: 'Residential community markets', icon: Building2 }
  ];

  // Product Categories for Co-Partner Brands
  const productCategories = [
    {
      category: 'Food',
      icon: Utensils,
      color: 'orange',
      types: [
        { name: 'Food Truck', description: 'Mobile food service' },
        { name: 'Food Stalls', description: 'Pop-up food counters' },
        { name: 'Momos', description: 'Dumplings & dim sum' },
        { name: 'Burgers & Sliders', description: 'Gourmet burgers' },
        { name: 'Pizza (Risalo)', description: 'Artisan pizza' },
        { name: 'Chaat', description: 'Indian street food' },
        { name: 'Desserts', description: 'Sweet treats' },
        { name: 'Homemade Pickles', description: 'Artisanal preserves' },
        { name: 'Bakery', description: 'Fresh baked goods' }
      ]
    },
    {
      category: 'Drinks',
      icon: Coffee,
      color: 'cyan',
      types: [
        { name: 'Mocktails', description: 'Non-alcoholic cocktails' },
        { name: 'Fresh Juice & Sugarcane', description: 'Natural beverages' },
        { name: 'Coconut Water', description: 'Fresh coconut drinks' },
        { name: 'Bubble Tea/Boba', description: 'Taiwanese tea drinks' },
        { name: 'Cold Brew/Iced Coffee', description: 'Specialty coffee' },
        { name: 'Energy & Hydration', description: 'Sports drinks' }
      ]
    },
    {
      category: 'Fashion & Accessories',
      icon: Shirt,
      color: 'pink',
      types: [
        { name: 'Handmade Jewelry', description: 'Artisan accessories' },
        { name: 'Streetwear/Oversized Tees', description: 'Urban fashion' },
        { name: 'Perfumes & Attars', description: 'Fragrances' },
        { name: 'Home Fragrance', description: 'Candles & diffusers' },
        { name: 'Organic Skincare', description: 'Natural beauty' },
        { name: 'Accessories', description: 'Bags, wallets, belts' },
        { name: 'Merchandise', description: 'Branded goods' },
        { name: 'Footwear Brand', description: 'Shoes & sandals' }
      ]
    },
    {
      category: 'Lifestyle',
      icon: Heart,
      color: 'purple',
      types: [
        { name: 'Gifting', description: 'Gift boxes & hampers' },
        { name: 'Pet Care', description: 'Pet food & accessories' },
        { name: 'Baby & Kids Essentials', description: 'Children products' }
      ]
    }
  ];

  // Revenue Model
  const revenueModel = {
    forNuqta: {
      type: 'General Merchant + Privilege Model',
      commission: '0% (for Co-Partner brands)'
    },
    forUser: {
      cashback: '10-15% Nuqta Coins',
      benefits: 'Exclusive access to Co-Partner products'
    },
    forBrand: {
      support: ['Nuqta investment', 'Office space', 'Marketing support', 'Finance & salary']
    }
  };

  // Influencer Partnership Goals
  const influencerGoals = [
    'Partner with famous regional influencers',
    'Collaborate with young founders',
    'Build authentic brand ambassadors',
    'Create content-first partnerships'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900/50 to-orange-800/30 border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-xl">
              <Handshake size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Business Development & Brand Partnerships</h1>
              <p className="text-amber-300">Marketing Services • Co-Partner Program • Fleet Stalls</p>
            </div>
          </div>
          <p className="text-slate-300 max-w-3xl">
            Comprehensive strategy for merchant marketing services, brand investments, and building
            a network of Co-Partner brands with influencer-founder partnerships.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">

        {/* Why We're Doing This */}
        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
          <button
            onClick={() => toggleSection('why')}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <Target size={20} className="text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-bold text-white">Why We're Doing This</h2>
                <p className="text-slate-400 text-sm">Strategic rationale for brand partnerships</p>
              </div>
            </div>
            {expandedSection === 'why' ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
          </button>
          {expandedSection === 'why' && (
            <div className="px-6 pb-6 border-t border-white/10 pt-4">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Indirect Nuqta Promotion via Merchants</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <Store size={32} className="text-purple-400 mx-auto mb-2" />
                    <p className="text-white font-medium">Merchant Marketing</p>
                    <p className="text-slate-400 text-sm">We market merchants, they promote Nuqta</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <TrendingUp size={32} className="text-green-400 mx-auto mb-2" />
                    <p className="text-white font-medium">Brand Growth</p>
                    <p className="text-slate-400 text-sm">Growing merchants = Growing Nuqta</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <Users size={32} className="text-blue-400 mx-auto mb-2" />
                    <p className="text-white font-medium">User Acquisition</p>
                    <p className="text-slate-400 text-sm">Every merchant = new user channel</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Marketing Manager Model */}
        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
          <button
            onClick={() => toggleSection('marketing')}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <Megaphone size={20} className="text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-bold text-white">Marketing Services for Merchants</h2>
                <p className="text-slate-400 text-sm">1 Marketing Manager per 20 businesses</p>
              </div>
            </div>
            {expandedSection === 'marketing' ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
          </button>
          {expandedSection === 'marketing' && (
            <div className="px-6 pb-6 border-t border-white/10 pt-4 space-y-6">
              {/* Manager Ratio */}
              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                <div className="flex items-center gap-4">
                  <Users size={40} className="text-blue-400" />
                  <div>
                    <p className="text-2xl font-bold text-white">1 : 20</p>
                    <p className="text-blue-300">One Marketing Manager handles 20 merchant businesses</p>
                  </div>
                </div>
              </div>

              {/* Online Marketing */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Globe size={20} className="text-blue-400" /> Online Marketing
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {marketingServices.online.map((service, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4 flex items-start gap-3">
                      <service.icon size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-white font-medium">{service.name}</p>
                        <p className="text-slate-400 text-sm">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Offline Marketing */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Building2 size={20} className="text-orange-400" /> Offline Marketing
                </h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {marketingServices.offline.map((service, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4 flex items-start gap-3">
                      <service.icon size={24} className="text-orange-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-white font-medium">{service.name}</p>
                        <p className="text-slate-400 text-sm">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Marketing */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Camera size={20} className="text-pink-400" /> Content Creation
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {marketingServices.content.map((service, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4 flex items-start gap-3">
                      <service.icon size={24} className="text-pink-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-white font-medium">{service.name}</p>
                        <p className="text-slate-400 text-sm">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20">
                <p className="text-amber-300 font-medium">💰 Marketing Spend: Paid by the merchant</p>
                <p className="text-slate-400 text-sm mt-1">Nuqta provides the marketing expertise, merchants fund the campaigns</p>
              </div>
            </div>
          )}
        </div>

        {/* Price Engineering */}
        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
          <button
            onClick={() => toggleSection('pricing')}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Percent size={20} className="text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-bold text-white">Price Engineering Strategy</h2>
                <p className="text-slate-400 text-sm">Airplane-model dynamic pricing</p>
              </div>
            </div>
            {expandedSection === 'pricing' ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
          </button>
          {expandedSection === 'pricing' && (
            <div className="px-6 pb-6 border-t border-white/10 pt-4">
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                {priceEngineering.steps.map((step, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold mb-3">
                      {step.step}
                    </div>
                    <p className="text-white font-medium mb-1">{step.action}</p>
                    <p className="text-slate-400 text-sm">{step.reason}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/20">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <TrendingUp size={20} className="text-green-400" /> Dynamic Pricing Model
                </h3>
                <p className="text-slate-300">{priceEngineering.dynamicPricing}</p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="bg-white/10 rounded-lg px-4 py-2">
                    <span className="text-green-400 font-bold">5%</span>
                    <span className="text-slate-400 ml-2">Low demand</span>
                  </div>
                  <div className="flex-1 h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full" />
                  <div className="bg-white/10 rounded-lg px-4 py-2">
                    <span className="text-red-400 font-bold">30%</span>
                    <span className="text-slate-400 ml-2">High demand</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Nuqta Boards & Badges */}
        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
          <button
            onClick={() => toggleSection('boards')}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center">
                <QrCode size={20} className="text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-bold text-white">Nuqta Boards & Merchant Badges</h2>
                <p className="text-slate-400 text-sm">In-store branding & verification levels</p>
              </div>
            </div>
            {expandedSection === 'boards' ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
          </button>
          {expandedSection === 'boards' && (
            <div className="px-6 pb-6 border-t border-white/10 pt-4 space-y-6">
              {/* Board Types */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Board Types</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {nuqtaBoards.map((board, idx) => (
                    <div key={idx} className="bg-white/5 rounded-xl p-4 border border-amber-500/20">
                      <QrCode size={32} className="text-amber-400 mb-2" />
                      <p className="text-white font-medium">{board.type}</p>
                      <p className="text-slate-400 text-sm">{board.description}</p>
                      <p className="text-amber-300 text-xs mt-2">📍 {board.placement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Board Messages */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Board Messages</h3>
                <div className="space-y-2">
                  {boardMessages.map((msg, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg p-4 border border-amber-500/30">
                      <p className="text-white font-medium text-lg">&ldquo;{msg}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Badge Levels */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Merchant Verification Badges</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {badgeLevels.map((badge, idx) => (
                    <div key={idx} className={`bg-${badge.color}-500/10 rounded-xl p-4 border border-${badge.color}-500/30`}>
                      <div className="flex items-center gap-2 mb-3">
                        <badge.icon size={24} className={`text-${badge.color}-400`} />
                        <span className={`text-${badge.color}-400 font-bold`}>{badge.level}</span>
                      </div>
                      <p className="text-slate-300 text-sm mb-3">{badge.description}</p>
                      <div className="space-y-1">
                        {badge.requirements.map((req, reqIdx) => (
                          <div key={reqIdx} className="flex items-center gap-2 text-xs text-slate-400">
                            <CheckCircle size={12} className="text-green-400" />
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Co-Partner Brand Model */}
        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
          <button
            onClick={() => toggleSection('copartner')}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <Handshake size={20} className="text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-bold text-white">Co-Partner Brand Program</h2>
                <p className="text-slate-400 text-sm">₹500K investment for 50% ownership</p>
              </div>
            </div>
            {expandedSection === 'copartner' ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
          </button>
          {expandedSection === 'copartner' && (
            <div className="px-6 pb-6 border-t border-white/10 pt-4 space-y-6">
              {/* Investment Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
                  <h3 className="text-xl font-bold text-white mb-4">Investment Terms</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Investment Amount</span>
                      <span className="text-2xl font-bold text-purple-400">{coPartnerModel.investment}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Nuqta Ownership</span>
                      <span className="text-2xl font-bold text-pink-400">{coPartnerModel.ownership}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4">Why It's Worth It</h3>
                  <div className="space-y-2">
                    {coPartnerModel.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-400" />
                        <span className="text-slate-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-500/20">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Star size={20} className="text-amber-400" /> Brand Requirements
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {coPartnerModel.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                      <Zap size={16} className="text-amber-400" />
                      <span className="text-slate-300">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue Model */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                  <h4 className="text-blue-400 font-bold mb-2">For Nuqta</h4>
                  <p className="text-white font-medium">{revenueModel.forNuqta.type}</p>
                  <p className="text-slate-400 text-sm">Commission: {revenueModel.forNuqta.commission}</p>
                </div>
                <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                  <h4 className="text-green-400 font-bold mb-2">For Users</h4>
                  <p className="text-white font-medium">{revenueModel.forUser.cashback} Cashback</p>
                  <p className="text-slate-400 text-sm">{revenueModel.forUser.benefits}</p>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                  <h4 className="text-purple-400 font-bold mb-2">For Brand</h4>
                  <div className="space-y-1">
                    {revenueModel.forBrand.support.map((item, idx) => (
                      <p key={idx} className="text-slate-300 text-sm">• {item}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Fleet Stalls */}
        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
          <button
            onClick={() => toggleSection('fleet')}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <Truck size={20} className="text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-bold text-white">Fleet Stalls Program</h2>
                <p className="text-slate-400 text-sm">Pop-up sales at malls, events, universities</p>
              </div>
            </div>
            {expandedSection === 'fleet' ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
          </button>
          {expandedSection === 'fleet' && (
            <div className="px-6 pb-6 border-t border-white/10 pt-4 space-y-6">
              {/* Sales Channels */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Sales From</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20 flex items-center gap-4">
                    <Smartphone size={40} className="text-amber-400" />
                    <div>
                      <p className="text-white font-bold">Nuqta App</p>
                      <p className="text-slate-400">Primary sales channel</p>
                    </div>
                  </div>
                  <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/20 flex items-center gap-4">
                    <Store size={40} className="text-orange-400" />
                    <div>
                      <p className="text-white font-bold">Fleet Stalls</p>
                      <p className="text-slate-400">Physical pop-up presence</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Stall Locations</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {fleetLocations.map((loc, idx) => (
                    <div key={idx} className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                      <loc.icon size={32} className="text-orange-400 mx-auto mb-2" />
                      <p className="text-white font-medium">{loc.type}</p>
                      <p className="text-slate-400 text-sm">{loc.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Calendar size={20} className="text-orange-400" /> Schedule
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-orange-400 font-bold">When</p>
                    <p className="text-white">Every Weekend</p>
                    <p className="text-slate-400 text-sm">Friday, Saturday, Sunday</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-orange-400 font-bold">Coverage</p>
                    <p className="text-white">Multiple Locations</p>
                    <p className="text-slate-400 text-sm">Simultaneous presence across city</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Product Categories */}
        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
          <button
            onClick={() => toggleSection('products')}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <Package size={20} className="text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-bold text-white">Co-Partner Product Categories</h2>
                <p className="text-slate-400 text-sm">Food, drinks, fashion & lifestyle brands</p>
              </div>
            </div>
            {expandedSection === 'products' ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
          </button>
          {expandedSection === 'products' && (
            <div className="px-6 pb-6 border-t border-white/10 pt-4 space-y-6">
              {productCategories.map((category, idx) => (
                <div key={idx} className={`bg-${category.color}-500/10 rounded-xl p-6 border border-${category.color}-500/20`}>
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon size={28} className={`text-${category.color}-400`} />
                    <h3 className="text-xl font-bold text-white">{category.category}</h3>
                  </div>
                  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {category.types.map((type, typeIdx) => (
                      <div key={typeIdx} className="bg-white/5 rounded-lg p-3">
                        <p className="text-white font-medium">{type.name}</p>
                        <p className="text-slate-400 text-xs">{type.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Influencer Partnership Goals */}
        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
          <button
            onClick={() => toggleSection('influencer')}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                <Star size={20} className="text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-bold text-white">Influencer & Founder Partnerships</h2>
                <p className="text-slate-400 text-sm">Building with famous influencers & young founders</p>
              </div>
            </div>
            {expandedSection === 'influencer' ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
          </button>
          {expandedSection === 'influencer' && (
            <div className="px-6 pb-6 border-t border-white/10 pt-4">
              <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-xl p-6 border border-pink-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Partnership Goals</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {influencerGoals.map((goal, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center">
                        <CheckCircle size={16} className="text-pink-400" />
                      </div>
                      <span className="text-white">{goal}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-white/5 rounded-lg p-4">
                  <p className="text-pink-300 font-medium">🎯 Target Partners:</p>
                  <p className="text-slate-300 mt-2">
                    Famous regional influencers + Young entrepreneurial founders who can build authentic
                    content about their business journey while selling exclusively via Nuqta.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-500/30 text-center">
            <Users size={32} className="text-blue-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-white">1:20</p>
            <p className="text-slate-400">Manager to Merchant Ratio</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30 text-center">
            <PiggyBank size={32} className="text-purple-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-white">₹500K</p>
            <p className="text-slate-400">Co-Partner Investment</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30 text-center">
            <Percent size={32} className="text-green-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-white">50%</p>
            <p className="text-slate-400">Nuqta Ownership</p>
          </div>
          <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl p-6 border border-amber-500/30 text-center">
            <Store size={32} className="text-amber-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-white">4</p>
            <p className="text-slate-400">Badge Levels</p>
          </div>
        </div>

      </div>

      <GlobalFooter />
    </div>
  );
}
