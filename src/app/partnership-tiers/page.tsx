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
  TrendingUp,
  Building2,
  Megaphone,
  Camera,
  Globe,
  MessageCircle,
  Users,
  BarChart3,
  Zap,
  Shield,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  FileText,
  Palette,
  Video,
  Share2,
  Store,
  CreditCard,
  Gift,
  Award,
  Smartphone
} from 'lucide-react';

export default function PartnershipTiersPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('platform');
  const [compareView, setCompareView] = useState(true);

  const tiers = [
    { id: 'starter', name: 'Starter', icon: Rocket, color: 'slate', price: 'Free', commission: '20%' },
    { id: 'growth', name: 'Growth', icon: TrendingUp, color: 'blue', price: 'AED 1,500/mo', commission: '18%' },
    { id: 'professional', name: 'Professional', icon: Star, color: 'amber', price: 'AED 3,500/mo', commission: '15%' },
    { id: 'enterprise', name: 'Enterprise', icon: Crown, color: 'purple', price: 'Custom', commission: '12-15%' },
  ];

  const featureCategories = [
    {
      id: 'platform',
      name: 'Nuqta Platform Features',
      icon: Smartphone,
      features: [
        { name: 'Listed on Nuqta app', starter: true, growth: true, professional: true, enterprise: true },
        { name: 'Store profile type', starter: 'Basic', growth: 'Enhanced', professional: 'Premium', enterprise: 'Custom branded' },
        { name: 'QR code for payments', starter: true, growth: true, professional: true, enterprise: true },
        { name: 'Customer reviews & ratings', starter: true, growth: true, professional: true, enterprise: true },
        { name: 'Analytics dashboard', starter: 'Basic', growth: 'Advanced', professional: 'Full suite', enterprise: 'Enterprise + API' },
        { name: 'Priority listing in app', starter: false, growth: true, professional: 'Top priority', enterprise: 'Exclusive placement' },
        { name: 'Featured promotions', starter: false, growth: '2x/month', professional: '4x/month', enterprise: 'Unlimited' },
        { name: 'Push notifications to users', starter: false, growth: '1x/month', professional: '4x/month', enterprise: 'Unlimited' },
        { name: 'Exclusive deals badge', starter: false, growth: false, professional: true, enterprise: true },
        { name: 'Category sponsorship', starter: false, growth: false, professional: false, enterprise: true },
      ],
    },
    {
      id: 'marketing-manager',
      name: 'Dedicated Marketing Manager',
      icon: Users,
      features: [
        { name: 'Dedicated Marketing Manager', starter: false, growth: true, professional: true, enterprise: true },
        { name: 'Manager-to-merchant ratio', starter: 'Self-service', growth: '1:20', professional: '1:15', enterprise: '1:10' },
        { name: 'Weekly attention per merchant', starter: 'DIY', growth: '~2 hours', professional: '~3 hours', enterprise: '~4+ hours' },
        { name: 'Strategy planning sessions', starter: false, growth: 'Monthly', professional: 'Bi-weekly', enterprise: 'Weekly' },
        { name: 'Performance reporting', starter: 'Self-serve', growth: 'Monthly report', professional: 'Weekly report', enterprise: 'Real-time dashboard' },
        { name: 'Direct WhatsApp line to manager', starter: false, growth: true, professional: true, enterprise: true },
      ],
    },
    {
      id: 'online-marketing',
      name: 'Online Marketing & Ads',
      icon: Megaphone,
      features: [
        { name: 'Meta/Instagram ads management', starter: false, growth: true, professional: true, enterprise: true },
        { name: 'Monthly ad budget (managed)', starter: false, growth: 'AED 500', professional: 'AED 1,500', enterprise: 'Custom' },
        { name: 'Google Shopping campaigns', starter: false, growth: true, professional: true, enterprise: true },
        { name: 'Google My Business setup & optimization', starter: false, growth: true, professional: true, enterprise: true },
        { name: 'WhatsApp marketing campaigns', starter: false, growth: '2/month', professional: '4/month', enterprise: 'Unlimited' },
        { name: 'Email marketing', starter: false, growth: false, professional: '2/month', enterprise: 'Unlimited' },
        { name: 'Retargeting campaigns', starter: false, growth: false, professional: true, enterprise: true },
        { name: 'A/B testing on ads', starter: false, growth: false, professional: true, enterprise: true },
      ],
    },
    {
      id: 'offline-marketing',
      name: 'Offline Marketing',
      icon: MapPin,
      features: [
        { name: 'Auto/vehicle advertising coordination', starter: false, growth: false, professional: 'Consultation', enterprise: 'Full management' },
        { name: 'Bus advertising', starter: false, growth: false, professional: 'Consultation', enterprise: 'Full management' },
        { name: 'Gate advertising at venues', starter: false, growth: false, professional: false, enterprise: 'Included' },
        { name: 'Mall/location activations', starter: false, growth: false, professional: false, enterprise: 'Custom events' },
        { name: 'Flyer design & distribution', starter: false, growth: false, professional: '500 flyers/mo', enterprise: 'Unlimited' },
      ],
    },
    {
      id: 'content',
      name: 'Content Creation',
      icon: Camera,
      features: [
        { name: 'Social media posts', starter: false, growth: '4/month', professional: '8/month', enterprise: 'Unlimited' },
        { name: 'Instagram/TikTok Reels', starter: false, growth: false, professional: '4/month', enterprise: 'Unlimited' },
        { name: 'Professional photography', starter: false, growth: false, professional: '1 session/quarter', enterprise: 'Monthly' },
        { name: 'User-generated content (UGC) campaigns', starter: false, growth: true, professional: true, enterprise: true },
        { name: 'Influencer partnerships - Barter', starter: false, growth: false, professional: true, enterprise: true },
        { name: 'Influencer partnerships - Paid', starter: false, growth: false, professional: false, enterprise: 'Included' },
        { name: 'Video testimonials', starter: false, growth: false, professional: '1/quarter', enterprise: 'Monthly' },
        { name: 'Story highlights & templates', starter: false, growth: true, professional: true, enterprise: true },
      ],
    },
    {
      id: 'price-engineering',
      name: 'Price Engineering',
      icon: DollarSign,
      features: [
        { name: 'Price strategy consultation', starter: false, growth: true, professional: true, enterprise: true },
        { name: 'Menu/price optimization (+20% markup)', starter: false, growth: true, professional: true, enterprise: true },
        { name: 'Dynamic discount adjustments', starter: false, growth: 'Basic', professional: 'Advanced', enterprise: 'AI-powered' },
        { name: 'Demand-based pricing (airline model)', starter: false, growth: false, professional: true, enterprise: true },
        { name: 'Competitor price monitoring', starter: false, growth: false, professional: 'Monthly', enterprise: 'Real-time' },
        { name: 'Seasonal promotion planning', starter: false, growth: '2/year', professional: '4/year', enterprise: 'Continuous' },
      ],
    },
    {
      id: 'branding',
      name: 'Store Branding & Materials',
      icon: Palette,
      features: [
        { name: 'Nuqta QR code payment board', starter: true, growth: true, professional: true, enterprise: true },
        { name: '"We Accept Nuqta" stickers', starter: '1x', growth: '5x', professional: '10x', enterprise: 'Unlimited' },
        { name: 'Window decals', starter: false, growth: true, professional: true, enterprise: true },
        { name: 'Table tents / counter cards', starter: false, growth: '10x', professional: '20x', enterprise: 'Unlimited' },
        { name: 'Outdoor circle board', starter: false, growth: false, professional: '1x', enterprise: 'Custom design' },
        { name: 'Custom branded signage', starter: false, growth: false, professional: false, enterprise: 'Included' },
        { name: 'Menu inserts', starter: false, growth: '50x', professional: '100x', enterprise: 'Unlimited' },
        { name: 'Staff badges/pins', starter: false, growth: false, professional: '10x', enterprise: 'Unlimited' },
        { name: 'Installation support', starter: 'DIY', growth: 'Instructions', professional: 'On-site help', enterprise: 'Full installation' },
      ],
    },
    {
      id: 'digital-presence',
      name: 'Digital Presence',
      icon: Globe,
      features: [
        { name: 'Nuqta store page', starter: 'Basic', growth: 'Enhanced', professional: 'Premium', enterprise: 'Custom' },
        { name: 'Store URL (nuqta.ae/store-name)', starter: true, growth: true, professional: true, enterprise: true },
        { name: 'Google My Business management', starter: false, growth: 'Setup only', professional: 'Monthly updates', enterprise: 'Full management' },
        { name: 'Review response templates', starter: false, growth: true, professional: true, enterprise: 'Custom + managed' },
        { name: 'Local SEO optimization', starter: false, growth: false, professional: true, enterprise: true },
        { name: 'Website integration widget', starter: false, growth: false, professional: true, enterprise: true },
      ],
    },
    {
      id: 'support',
      name: 'Support & Success',
      icon: Shield,
      features: [
        { name: 'Email support', starter: true, growth: true, professional: true, enterprise: true },
        { name: 'Response time', starter: '48 hours', growth: '24 hours', professional: '4 hours', enterprise: '1 hour' },
        { name: 'WhatsApp support', starter: false, growth: true, professional: true, enterprise: true },
        { name: 'Phone support', starter: false, growth: false, professional: true, enterprise: '24/7' },
        { name: 'Dedicated account manager', starter: false, growth: false, professional: true, enterprise: true },
        { name: 'Quarterly business review', starter: false, growth: false, professional: true, enterprise: 'Monthly' },
        { name: 'Onboarding training session', starter: 'Video guides', growth: '30 min call', professional: '1 hour on-site', enterprise: 'Custom program' },
        { name: 'Staff training', starter: false, growth: false, professional: '1 session', enterprise: 'Unlimited' },
      ],
    },
    {
      id: 'rewards',
      name: 'Rewards & Loyalty Features',
      icon: Gift,
      features: [
        { name: 'Standard cashback to users', starter: true, growth: true, professional: true, enterprise: true },
        { name: 'Custom loyalty tiers', starter: false, growth: false, professional: true, enterprise: true },
        { name: 'Bonus coin campaigns', starter: false, growth: '1/month', professional: '4/month', enterprise: 'Unlimited' },
        { name: 'Birthday rewards automation', starter: false, growth: true, professional: true, enterprise: true },
        { name: 'Referral program for customers', starter: false, growth: false, professional: true, enterprise: true },
        { name: 'VIP customer identification', starter: false, growth: false, professional: true, enterprise: true },
      ],
    },
  ];

  const getColorClasses = (color: string, type: 'bg' | 'border' | 'text') => {
    const colors: Record<string, Record<string, string>> = {
      slate: { bg: 'bg-slate-500', border: 'border-slate-500', text: 'text-slate-400' },
      blue: { bg: 'bg-blue-500', border: 'border-blue-500', text: 'text-blue-400' },
      amber: { bg: 'bg-[#c9a227]', border: 'border-[#c9a227]', text: 'text-[#c9a227]' },
      purple: { bg: 'bg-purple-500', border: 'border-purple-500', text: 'text-purple-400' },
    };
    return colors[color]?.[type] || colors.slate[type];
  };

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return <Check size={18} className="text-green-400 mx-auto" />;
    }
    if (value === false) {
      return <X size={18} className="text-gray-600 mx-auto" />;
    }
    return <span className="text-sm text-gray-300">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <header className="bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/merchant-packages"
                className="flex items-center gap-2 text-gray-400 hover:text-[#c9a227] transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Packages</span>
              </Link>
              <div className="w-px h-6 bg-white/20" />
              <h1 className="text-xl font-bold text-[#c9a227]">Partnership Tiers - Full Comparison</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Tier Header Strip */}
      <div className="sticky top-[65px] z-40 bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-5 gap-4 py-4">
            <div className="text-sm text-gray-400">Features</div>
            {tiers.map((tier) => (
              <div key={tier.id} className="text-center">
                <div className={`inline-flex p-2 rounded-lg ${getColorClasses(tier.color, 'bg')}/20 mb-2`}>
                  <tier.icon size={20} className={getColorClasses(tier.color, 'text')} />
                </div>
                <div className="font-semibold">{tier.name}</div>
                <div className={`text-sm ${getColorClasses(tier.color, 'text')}`}>{tier.price}</div>
                <div className="text-xs text-gray-500">{tier.commission} commission</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Categories */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-4">
          {featureCategories.map((category) => (
            <div key={category.id} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              {/* Category Header */}
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#c9a227]/20 rounded-lg">
                    <category.icon size={20} className="text-[#c9a227]" />
                  </div>
                  <span className="font-semibold text-lg">{category.name}</span>
                  <span className="text-sm text-gray-500">({category.features.length} features)</span>
                </div>
                {expandedCategory === category.id ? (
                  <ChevronUp size={20} className="text-gray-400" />
                ) : (
                  <ChevronDown size={20} className="text-gray-400" />
                )}
              </button>

              {/* Features Table */}
              {expandedCategory === category.id && (
                <div className="border-t border-white/10">
                  {category.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`grid grid-cols-5 gap-4 p-4 ${
                        idx % 2 === 0 ? 'bg-white/5' : ''
                      }`}
                    >
                      <div className="text-sm text-gray-300">{feature.name}</div>
                      <div className="text-center">{renderFeatureValue(feature.starter)}</div>
                      <div className="text-center">{renderFeatureValue(feature.growth)}</div>
                      <div className="text-center">{renderFeatureValue(feature.professional)}</div>
                      <div className="text-center">{renderFeatureValue(feature.enterprise)}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Summary */}
        <div className="mt-12 bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-2xl p-8 border border-[#c9a227]/30">
          <h3 className="text-2xl font-bold text-center mb-8">Quick Tier Summary</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                tier: 'Starter',
                icon: Rocket,
                color: 'slate',
                ideal: 'New businesses testing Nuqta',
                highlights: ['Free to start', 'Basic listing', 'Self-service', 'QR payment board'],
              },
              {
                tier: 'Growth',
                icon: TrendingUp,
                color: 'blue',
                ideal: 'SMBs ready to scale',
                highlights: ['Dedicated manager (1:20)', 'AED 500 ad budget', '4 posts/month', 'Priority listing'],
              },
              {
                tier: 'Professional',
                icon: Star,
                color: 'amber',
                ideal: 'Established businesses',
                highlights: ['Dedicated manager (1:15)', 'AED 1,500 ad budget', 'Full content suite', 'Influencer barter'],
              },
              {
                tier: 'Enterprise',
                icon: Crown,
                color: 'purple',
                ideal: 'Chains & premium brands',
                highlights: ['Dedicated manager (1:10)', 'Custom ad budget', 'Unlimited everything', '24/7 support'],
              },
            ].map((item, idx) => (
              <div key={idx} className={`bg-white/5 rounded-xl p-6 border ${getColorClasses(item.color, 'border')}/30`}>
                <div className={`inline-flex p-3 rounded-xl ${getColorClasses(item.color, 'bg')}/20 mb-4`}>
                  <item.icon size={24} className={getColorClasses(item.color, 'text')} />
                </div>
                <h4 className={`text-lg font-bold mb-2 ${getColorClasses(item.color, 'text')}`}>{item.tier}</h4>
                <p className="text-sm text-gray-400 mb-4">{item.ideal}</p>
                <ul className="space-y-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check size={14} className={getColorClasses(item.color, 'text')} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* What Marketing Manager Does - Detailed */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            What Your <span className="text-[#c9a227]">Marketing Manager</span> Handles
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Online Marketing',
                icon: Megaphone,
                tasks: [
                  'Meta ads (Facebook/Instagram)',
                  'WhatsApp marketing campaigns',
                  'Google Shopping setup',
                  'Google My Business optimization',
                  'Store URL management',
                  'Retargeting campaigns',
                ],
              },
              {
                title: 'Content & Creative',
                icon: Camera,
                tasks: [
                  'Social media posts & scheduling',
                  'Instagram/TikTok Reels',
                  'UGC campaign coordination',
                  'Influencer outreach (barter/paid)',
                  'Story highlights & templates',
                  'Photography coordination',
                ],
              },
              {
                title: 'Offline & Branding',
                icon: Store,
                tasks: [
                  'Auto/bus advertising coordination',
                  'Gate advertising setup',
                  'QR board installation',
                  'Sticker & signage placement',
                  'Circle board setup outside store',
                  'Staff training on Nuqta',
                ],
              },
              {
                title: 'Price Engineering',
                icon: DollarSign,
                tasks: [
                  'Menu price optimization (+20%)',
                  'Nuqta discount configuration',
                  'Demand-based adjustments',
                  'Seasonal promotion planning',
                  'Competitor price monitoring',
                  'Value perception strategy',
                ],
              },
              {
                title: 'Analytics & Reporting',
                icon: BarChart3,
                tasks: [
                  'Weekly performance reports',
                  'Transaction tracking',
                  'Customer insights',
                  'Campaign ROI analysis',
                  'Growth recommendations',
                  'Benchmark comparisons',
                ],
              },
              {
                title: 'Customer Engagement',
                icon: Users,
                tasks: [
                  'Review response management',
                  'Customer feedback collection',
                  'Loyalty program setup',
                  'Birthday reward automation',
                  'VIP customer identification',
                  'Referral program setup',
                ],
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#c9a227]/20 rounded-lg">
                    <item.icon size={20} className="text-[#c9a227]" />
                  </div>
                  <h4 className="font-semibold">{item.title}</h4>
                </div>
                <ul className="space-y-2">
                  {item.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-[#c9a227] rounded-full" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Branding Materials Visual */}
        <div className="mt-12 bg-white/5 rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-[#c9a227]">Nuqta Branding</span> at Your Store
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                item: 'QR Code Board',
                description: 'Payment board with QR code for easy customer scanning',
                message: 'Scan to pay & earn cashback',
                included: 'All tiers',
              },
              {
                item: 'Wall Stickers',
                description: '"We Accept Nuqta" stickers for walls, doors, windows',
                message: 'We Accept Nuqta',
                included: 'All tiers (qty varies)',
              },
              {
                item: 'Table Tents',
                description: 'Counter/table displays promoting Nuqta payments',
                message: 'Pay with Nuqta & Earn cashback instantly',
                included: 'Growth+',
              },
              {
                item: 'Circle Board',
                description: 'Outdoor signage at shop entrance',
                message: 'Use Nuqta and get instant cashback',
                included: 'Professional+',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                <div className="w-16 h-16 bg-[#c9a227]/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Store size={28} className="text-[#c9a227]" />
                </div>
                <h4 className="font-semibold mb-2">{item.item}</h4>
                <p className="text-sm text-gray-400 mb-3">{item.description}</p>
                <div className="bg-[#c9a227]/10 rounded-lg p-2 mb-3">
                  <p className="text-xs text-[#c9a227] italic">"{item.message}"</p>
                </div>
                <span className="text-xs bg-white/10 px-2 py-1 rounded-full">{item.included}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Partner with Nuqta?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Choose the package that fits your business. Upgrade anytime as you grow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/merchant-packages"
              className="flex items-center gap-2 bg-[#c9a227] text-[#0a1628] px-8 py-4 rounded-xl font-semibold hover:bg-[#b08d20] transition-colors"
            >
              <CreditCard size={20} />
              View Pricing
            </Link>
            <Link
              href="/contracts"
              className="flex items-center gap-2 bg-white/10 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              <FileText size={20} />
              Partnership Agreement
            </Link>
            <Link
              href="/deck-merchant"
              className="flex items-center gap-2 bg-white/10 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              <Target size={20} />
              Merchant Pitch Deck
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>Questions about partnership tiers? <a href="mailto:merchants@nuqta.ae" className="text-[#c9a227] hover:underline">merchants@nuqta.ae</a></p>
        </div>
      </footer>
    </div>
  );
}
