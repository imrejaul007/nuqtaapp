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
  Calculator
} from 'lucide-react';

export default function MerchantPackagesPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = [
    {
      id: 'starter',
      name: 'Starter',
      icon: Rocket,
      tagline: 'Perfect for trying Nuqta',
      color: 'slate',
      monthlyPrice: 0,
      annualPrice: 0,
      commission: '20%',
      merchantsPerManager: 'Self-service',
      popular: false,
      features: {
        'Nuqta Platform': [
          { name: 'Listed on Nuqta app', included: true },
          { name: 'Basic store profile', included: true },
          { name: 'QR code for payments', included: true },
          { name: 'Customer reviews', included: true },
          { name: 'Basic analytics dashboard', included: true },
          { name: 'Priority listing', included: false },
          { name: 'Featured promotions', included: false },
        ],
        'Marketing Support': [
          { name: 'Dedicated Marketing Manager', included: false },
          { name: 'Meta/Instagram ads', included: false },
          { name: 'Google My Business setup', included: false },
          { name: 'WhatsApp marketing', included: false },
          { name: 'Content creation (Reels/Posts)', included: false },
          { name: 'Influencer partnerships', included: false },
        ],
        'Branding & Materials': [
          { name: 'Nuqta QR code board', included: true },
          { name: '"We Accept Nuqta" sticker (1x)', included: true },
          { name: 'Window decals', included: false },
          { name: 'Table tents', included: false },
          { name: 'Outdoor signage', included: false },
        ],
        'Support': [
          { name: 'Email support', included: true },
          { name: 'WhatsApp support', included: false },
          { name: 'Dedicated account manager', included: false },
          { name: 'Priority support', included: false },
        ],
      },
    },
    {
      id: 'growth',
      name: 'Growth',
      icon: TrendingUp,
      tagline: 'For businesses ready to scale',
      color: 'blue',
      monthlyPrice: 1500,
      annualPrice: 15000,
      commission: '18%',
      merchantsPerManager: '20 businesses',
      popular: true,
      features: {
        'Nuqta Platform': [
          { name: 'Listed on Nuqta app', included: true },
          { name: 'Enhanced store profile', included: true },
          { name: 'QR code for payments', included: true },
          { name: 'Customer reviews', included: true },
          { name: 'Advanced analytics dashboard', included: true },
          { name: 'Priority listing', included: true },
          { name: 'Featured promotions (2x/month)', included: true },
        ],
        'Marketing Support': [
          { name: 'Dedicated Marketing Manager', included: true, note: '1 manager : 20 merchants' },
          { name: 'Meta/Instagram ads', included: true, note: 'AED 500/month budget' },
          { name: 'Google My Business setup', included: true },
          { name: 'WhatsApp marketing', included: true, note: '2 campaigns/month' },
          { name: 'Content creation (Reels/Posts)', included: true, note: '4 posts/month' },
          { name: 'Influencer partnerships', included: false },
        ],
        'Branding & Materials': [
          { name: 'Nuqta QR code board', included: true },
          { name: '"We Accept Nuqta" stickers (5x)', included: true },
          { name: 'Window decals', included: true },
          { name: 'Table tents (10x)', included: true },
          { name: 'Outdoor signage', included: false },
        ],
        'Support': [
          { name: 'Email support', included: true },
          { name: 'WhatsApp support', included: true },
          { name: 'Dedicated account manager', included: false },
          { name: 'Priority support', included: true },
        ],
      },
    },
    {
      id: 'professional',
      name: 'Professional',
      icon: Star,
      tagline: 'Full marketing support',
      color: 'amber',
      monthlyPrice: 3500,
      annualPrice: 35000,
      commission: '15%',
      merchantsPerManager: '15 businesses',
      popular: false,
      features: {
        'Nuqta Platform': [
          { name: 'Listed on Nuqta app', included: true },
          { name: 'Premium store profile', included: true },
          { name: 'QR code for payments', included: true },
          { name: 'Customer reviews', included: true },
          { name: 'Full analytics suite', included: true },
          { name: 'Top priority listing', included: true },
          { name: 'Featured promotions (4x/month)', included: true },
        ],
        'Marketing Support': [
          { name: 'Dedicated Marketing Manager', included: true, note: '1 manager : 15 merchants' },
          { name: 'Meta/Instagram ads', included: true, note: 'AED 1,500/month budget' },
          { name: 'Google My Business setup', included: true },
          { name: 'WhatsApp marketing', included: true, note: '4 campaigns/month' },
          { name: 'Content creation (Reels/Posts)', included: true, note: '8 posts + 4 reels/month' },
          { name: 'Influencer partnerships', included: true, note: 'Barter deals' },
        ],
        'Branding & Materials': [
          { name: 'Nuqta QR code board', included: true },
          { name: '"We Accept Nuqta" stickers (10x)', included: true },
          { name: 'Window decals', included: true },
          { name: 'Table tents (20x)', included: true },
          { name: 'Outdoor signage (1x)', included: true },
        ],
        'Support': [
          { name: 'Email support', included: true },
          { name: 'WhatsApp support', included: true },
          { name: 'Dedicated account manager', included: true },
          { name: 'Priority support', included: true },
        ],
      },
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: Crown,
      tagline: 'For chains & premium brands',
      color: 'purple',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      commission: '12-15%',
      merchantsPerManager: '10 businesses',
      popular: false,
      features: {
        'Nuqta Platform': [
          { name: 'Listed on Nuqta app', included: true },
          { name: 'Custom branded profile', included: true },
          { name: 'QR code for payments', included: true },
          { name: 'Customer reviews', included: true },
          { name: 'Enterprise analytics + API', included: true },
          { name: 'Exclusive premium placement', included: true },
          { name: 'Unlimited featured promotions', included: true },
        ],
        'Marketing Support': [
          { name: 'Dedicated Marketing Manager', included: true, note: '1 manager : 10 merchants' },
          { name: 'Meta/Instagram ads', included: true, note: 'Custom budget' },
          { name: 'Google My Business setup', included: true },
          { name: 'WhatsApp marketing', included: true, note: 'Unlimited campaigns' },
          { name: 'Content creation (Reels/Posts)', included: true, note: 'Unlimited' },
          { name: 'Influencer partnerships', included: true, note: 'Paid partnerships included' },
        ],
        'Branding & Materials': [
          { name: 'Nuqta QR code board', included: true },
          { name: '"We Accept Nuqta" stickers (Unlimited)', included: true },
          { name: 'Window decals', included: true },
          { name: 'Table tents (Unlimited)', included: true },
          { name: 'Custom outdoor signage', included: true },
        ],
        'Support': [
          { name: 'Email support', included: true },
          { name: 'WhatsApp support', included: true },
          { name: 'Dedicated account manager', included: true },
          { name: '24/7 priority support', included: true },
        ],
      },
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

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <header className="bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-400 hover:text-[#c9a227] transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Back</span>
              </Link>
              <div className="w-px h-6 bg-white/20" />
              <h1 className="text-xl font-bold text-[#c9a227]">Merchant Packages</h1>
            </div>
            <Link
              href="/partnership-tiers"
              className="flex items-center gap-2 bg-[#c9a227]/20 text-[#c9a227] px-4 py-2 rounded-lg hover:bg-[#c9a227]/30 transition-colors"
            >
              <span>View Detailed Tiers</span>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#c9a227]/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#c9a227]/20 px-4 py-2 rounded-full mb-6">
            <Building2 className="text-[#c9a227]" size={18} />
            <span className="text-[#c9a227] font-medium">Partner with Nuqta</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-[#c9a227]">Growth Package</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            From self-service to full marketing support. Each package includes a dedicated
            Marketing Manager who handles your business alongside 10-20 other merchants.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={billingCycle === 'monthly' ? 'text-white' : 'text-gray-500'}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-14 h-7 bg-white/10 rounded-full transition-colors"
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-[#c9a227] rounded-full transition-all ${
                  billingCycle === 'annual' ? 'left-8' : 'left-1'
                }`}
              />
            </button>
            <span className={billingCycle === 'annual' ? 'text-white' : 'text-gray-500'}>
              Annual <span className="text-green-400 text-sm">(Save 17%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white/5 rounded-2xl border transition-all hover:scale-[1.02] ${
                pkg.popular
                  ? 'border-[#c9a227] shadow-lg shadow-[#c9a227]/20'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c9a227] text-[#0a1628] px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-6">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex p-3 rounded-xl ${getColorClasses(pkg.color, 'bg')}/20 mb-4`}>
                    <pkg.icon size={28} className={getColorClasses(pkg.color, 'text')} />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                  <p className="text-sm text-gray-400">{pkg.tagline}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  {typeof pkg.monthlyPrice === 'number' && typeof pkg.annualPrice === 'number' ? (
                    <>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-sm text-gray-400">AED</span>
                        <span className="text-4xl font-bold">
                          {billingCycle === 'monthly'
                            ? pkg.monthlyPrice.toLocaleString()
                            : Math.round(pkg.annualPrice / 12).toLocaleString()}
                        </span>
                        <span className="text-gray-400">/mo</span>
                      </div>
                      {billingCycle === 'annual' && pkg.annualPrice > 0 && (
                        <p className="text-sm text-gray-500 mt-1">
                          AED {pkg.annualPrice.toLocaleString()}/year
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="text-3xl font-bold">Custom Pricing</div>
                  )}
                </div>

                {/* Commission & Manager Ratio */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className={`text-lg font-bold ${getColorClasses(pkg.color, 'text')}`}>
                      {pkg.commission}
                    </div>
                    <div className="text-xs text-gray-500">Commission</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-sm font-semibold text-white">{pkg.merchantsPerManager}</div>
                    <div className="text-xs text-gray-500">Per Manager</div>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-[#c9a227] text-[#0a1628] hover:bg-[#b08d20]'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  {pkg.monthlyPrice === 0 ? 'Get Started Free' : 'Choose Plan'}
                </button>
              </div>

              {/* Features Preview */}
              <div className="border-t border-white/10 p-6">
                <p className="text-sm font-medium text-gray-400 mb-3">Highlights:</p>
                <ul className="space-y-2">
                  {Object.entries(pkg.features).slice(0, 2).map(([category, features]) => (
                    features.slice(0, 2).map((feature, idx) => (
                      <li key={`${category}-${idx}`} className="flex items-center gap-2 text-sm">
                        {feature.included ? (
                          <Check size={14} className="text-green-400 flex-shrink-0" />
                        ) : (
                          <X size={14} className="text-gray-600 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                          {feature.name}
                        </span>
                      </li>
                    ))
                  ))}
                </ul>
                <Link
                  href="/partnership-tiers"
                  className="block text-center text-sm text-[#c9a227] mt-4 hover:underline"
                >
                  See all features →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marketing Manager Explanation */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Your Dedicated <span className="text-[#c9a227]">Marketing Manager</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Each Marketing Manager handles 10-20 businesses based on package tier.
              They're your single point of contact for all marketing activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What They Do */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-xl font-semibold text-[#c9a227] mb-4">What Your Manager Handles</h4>
              <div className="space-y-4">
                {[
                  { icon: Megaphone, title: 'Online Advertising', desc: 'Meta ads, Google Shopping, WhatsApp campaigns' },
                  { icon: Camera, title: 'Content Creation', desc: 'Reels, posts, UGC, influencer coordination' },
                  { icon: Calculator, title: 'Price Engineering', desc: 'Dynamic pricing strategy for maximum perceived value' },
                  { icon: MapPin, title: 'Store Branding', desc: 'QR boards, stickers, outdoor signage installation' },
                  { icon: Globe, title: 'Digital Presence', desc: 'Google My Business, store page optimization' },
                  { icon: BarChart3, title: 'Performance Tracking', desc: 'Weekly reports on transactions and growth' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-2 bg-[#c9a227]/20 rounded-lg">
                      <item.icon size={18} className="text-[#c9a227]" />
                    </div>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-gray-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Manager Ratio */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-xl font-semibold text-[#c9a227] mb-4">Manager-to-Merchant Ratio</h4>
              <div className="space-y-4">
                {[
                  { package: 'Starter', ratio: 'Self-service', attention: 'DIY with support docs', color: 'slate' },
                  { package: 'Growth', ratio: '1 : 20', attention: '~2 hours/week per merchant', color: 'blue' },
                  { package: 'Professional', ratio: '1 : 15', attention: '~3 hours/week per merchant', color: 'amber' },
                  { package: 'Enterprise', ratio: '1 : 10', attention: '~4+ hours/week per merchant', color: 'purple' },
                ].map((tier, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${getColorClasses(tier.color, 'bg')}`} />
                      <span className="font-medium">{tier.package}</span>
                    </div>
                    <div className="text-right">
                      <div className={`font-semibold ${getColorClasses(tier.color, 'text')}`}>{tier.ratio}</div>
                      <div className="text-xs text-gray-500">{tier.attention}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-[#c9a227]/10 rounded-lg border border-[#c9a227]/30">
                <p className="text-sm text-gray-300">
                  <strong className="text-[#c9a227]">Why different ratios?</strong> Higher tier packages
                  mean your manager has fewer merchants to handle, resulting in more personalized attention,
                  faster turnarounds, and deeper marketing strategies for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Engineering Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-2xl p-8 border border-[#c9a227]/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-[#c9a227]">Price Engineering</span> Strategy
                </h3>
                <p className="text-gray-300 mb-4">
                  Our Marketing Managers implement dynamic pricing to maximize your brand value:
                </p>
                <ul className="space-y-3">
                  {[
                    'Increase menu/product prices by 20%',
                    'Offer 20% Nuqta cashback (net zero cost to you)',
                    'Customers perceive massive value',
                    'Your brand positioning elevates',
                    'Adjust discounts based on demand (like airlines)',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <Check size={16} className="text-[#c9a227]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="font-semibold mb-4 text-center">Example: Coffee Shop</h4>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-white/5 rounded">
                    <span className="text-gray-400">Original Latte Price</span>
                    <span>AED 20</span>
                  </div>
                  <div className="flex justify-between p-3 bg-white/5 rounded">
                    <span className="text-gray-400">New Menu Price (+20%)</span>
                    <span>AED 24</span>
                  </div>
                  <div className="flex justify-between p-3 bg-green-500/10 rounded border border-green-500/30">
                    <span className="text-green-400">Nuqta Cashback (20%)</span>
                    <span className="text-green-400">-AED 4.80</span>
                  </div>
                  <div className="flex justify-between p-3 bg-[#c9a227]/10 rounded border border-[#c9a227]/30">
                    <span className="text-[#c9a227] font-semibold">Customer Pays</span>
                    <span className="text-[#c9a227] font-semibold">AED 19.20</span>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-400 mt-4">
                  Customer feels like they're getting 20% off, you earn the same margin!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-t from-[#c9a227]/10 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Grow with Nuqta?</h3>
          <p className="text-gray-400 mb-8">
            Join 100+ merchants already partnering with us. Get started today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contracts"
              className="flex items-center gap-2 bg-[#c9a227] text-[#0a1628] px-8 py-4 rounded-xl font-semibold hover:bg-[#b08d20] transition-colors"
            >
              <Shield size={20} />
              View Partnership Agreement
            </Link>
            <Link
              href="/sales-kit"
              className="flex items-center gap-2 bg-white/10 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              <Phone size={20} />
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>Questions? Contact us at <a href="mailto:merchants@nuqta.ae" className="text-[#c9a227] hover:underline">merchants@nuqta.ae</a></p>
        </div>
      </footer>
    </div>
  );
}
