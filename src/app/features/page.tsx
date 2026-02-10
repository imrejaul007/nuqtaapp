'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Sparkles,
  Search,
  Receipt,
  Coins,
  Gift,
  MapPin,
  Bell,
  TrendingUp,
  Shield,
  Smartphone,
  Users,
  Store,
  Crown,
  Zap,
  Target,
  BarChart3,
  Clock,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: Search,
      title: 'Search Before You Shop',
      description: 'Find cashback deals near you before making any purchase. See exactly how much you\'ll save at each merchant.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      details: [
        'Real-time deal discovery',
        'Location-based recommendations',
        'Filter by category, distance, or cashback rate',
        'Save favorites for quick access'
      ]
    },
    {
      icon: Receipt,
      title: 'Smart Receipt Scanning',
      description: 'Just snap a photo of your receipt. Our AI instantly verifies your purchase and credits your cashback.',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20',
      details: [
        'AI-powered instant verification',
        'Process receipts in under 10 seconds',
        'Works with any receipt format',
        'Fraud protection built-in'
      ]
    },
    {
      icon: Coins,
      title: 'Nuqta Coins',
      description: 'Earn coins on every purchase. 1 Nuqta Coin = 1 AED. Use them anywhere in our merchant network.',
      color: 'text-[#c9a227]',
      bgColor: 'bg-[#c9a227]/20',
      details: [
        'Universal currency across all partners',
        'No expiration while account is active',
        'Stack with Brand Coins for more savings',
        'Combine with cash or card payments'
      ]
    },
    {
      icon: Gift,
      title: 'Streak Rewards',
      description: 'Build habits, earn more. Visit 4 times this month? Get 5% extra. Try 3 new cafes? Unlock bonus rewards.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      details: [
        'Monthly streak challenges',
        'Category exploration bonuses',
        'Milestone rewards',
        'Gamified savings experience'
      ]
    },
    {
      icon: MapPin,
      title: 'Nearby Deals',
      description: 'Never miss a saving opportunity. See all partner merchants around you with real-time cashback rates.',
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      details: [
        'Interactive map view',
        'Distance and direction',
        'Operating hours',
        'Walking/driving time estimates'
      ]
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Get notified about deals when you\'re near partner merchants. Personalized, never spammy.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      details: [
        'Location-based alerts',
        'Flash deal notifications',
        'Streak reminders',
        'Fully customizable frequency'
      ]
    }
  ];

  const nuqtaPlusFeatures = [
    { icon: Crown, text: '16+ premium partners with exclusive discounts' },
    { icon: TrendingUp, text: 'Up to 25% cashback (vs 10% standard)' },
    { icon: Zap, text: 'Priority receipt processing' },
    { icon: Users, text: 'Dedicated customer support line' },
    { icon: Gift, text: 'Member-only promotions and early access' },
    { icon: BarChart3, text: 'Advanced savings analytics' }
  ];

  const merchantFeatures = [
    {
      icon: Store,
      title: 'Free POS Software',
      description: 'Modern point-of-sale system with Nuqta integration, inventory management, and sales analytics.'
    },
    {
      icon: Users,
      title: 'Customer Acquisition',
      description: 'Get discovered by thousands of active Nuqta users looking for deals in your area.'
    },
    {
      icon: BarChart3,
      title: 'Business Analytics',
      description: 'Understand customer behavior, track redemptions, and measure campaign effectiveness.'
    },
    {
      icon: Target,
      title: 'Loyalty Tools',
      description: 'Create streak rewards and challenges to drive repeat visits without discounting margins.'
    }
  ];

  const comparison = [
    { feature: 'Cashback on purchases', nuqta: true, others: true },
    { feature: 'Works at offline merchants', nuqta: true, others: false },
    { feature: 'No minimum purchase', nuqta: true, others: false },
    { feature: 'Universal coins (use anywhere)', nuqta: true, others: false },
    { feature: 'Streak & challenge rewards', nuqta: true, others: false },
    { feature: 'Free for users', nuqta: true, others: true },
    { feature: 'Receipt scanning (no card linking)', nuqta: true, others: false },
    { feature: 'Local merchant focus', nuqta: true, others: false }
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-[#0a1628]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm">Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
              <span className="text-black font-bold text-sm">N</span>
            </div>
            <span className="font-bold text-lg">Nuqta</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-6">
            <Sparkles size={16} className="text-[#c9a227]" />
            <span className="text-[#c9a227] text-sm font-medium">Features</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
            Everything You Need to <span className="text-[#c9a227]">Save More</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Nuqta combines smart technology with local merchant partnerships to help you save
            on every purchase - automatically.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-5`}>
                <feature.icon size={28} className={feature.color} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 size={16} className={feature.color} />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 rounded-2xl p-6 sm:p-10 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">How Nuqta Works</h2>
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Search', desc: 'Find deals near you', icon: Search },
              { step: '2', title: 'Shop', desc: 'Pay at partner merchant', icon: Store },
              { step: '3', title: 'Snap', desc: 'Upload your receipt', icon: Receipt },
              { step: '4', title: 'Save', desc: 'Earn Nuqta Coins', icon: Coins }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-emerald-400" />
                </div>
                <div className="absolute top-8 left-[60%] w-[80%] h-0.5 bg-emerald-500/30 hidden sm:block last:hidden"></div>
                <div className="text-xs text-emerald-400 font-bold mb-1">STEP {item.step}</div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium"
            >
              Learn more about how Nuqta works <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Nuqta+ Section */}
        <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-2xl p-6 sm:p-10 mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Crown size={32} className="text-purple-400" />
            <h2 className="text-2xl sm:text-3xl font-bold">Nuqta+ Membership</h2>
          </div>
          <p className="text-center text-slate-300 max-w-2xl mx-auto mb-8">
            Unlock premium benefits and save even more with our AED 99/month membership.
            Worth over AED 1,600 in partner discounts alone.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {nuqtaPlusFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-4">
                <feature.icon size={20} className="text-purple-400 flex-shrink-0" />
                <span className="text-sm text-slate-300">{feature.text}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/nuqta-plus"
              className="px-6 py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition-colors text-center"
            >
              Explore Nuqta+
            </Link>
            <Link
              href="/deck-corporate"
              className="px-6 py-3 bg-slate-800 border border-slate-700 text-white font-medium rounded-lg hover:border-slate-600 transition-colors text-center"
            >
              Nuqta+ for Business
            </Link>
          </div>
        </div>

        {/* For Merchants */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">For Merchants</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Grow your business with Nuqta&apos;s merchant tools - free POS software, customer acquisition,
              and powerful analytics.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {merchantFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                  <feature.icon size={20} className="text-orange-400" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/merchant-playbook"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium"
            >
              See merchant benefits <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 sm:p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Nuqta vs Other Apps</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Feature</th>
                  <th className="text-center py-3 px-4">
                    <span className="text-[#c9a227] font-bold">Nuqta</span>
                  </th>
                  <th className="text-center py-3 px-4 text-slate-400">Other Apps</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-slate-300">{row.feature}</td>
                    <td className="py-3 px-4 text-center">
                      {row.nuqta ? (
                        <CheckCircle2 size={20} className="text-emerald-400 mx-auto" />
                      ) : (
                        <span className="text-slate-600">-</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.others ? (
                        <CheckCircle2 size={20} className="text-slate-500 mx-auto" />
                      ) : (
                        <span className="text-slate-600">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Security */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 sm:p-8 mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield size={28} className="text-emerald-400" />
            <h2 className="text-2xl font-bold">Security & Privacy</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-black text-emerald-400 mb-2">Bank-Grade</div>
              <p className="text-slate-400 text-sm">TLS 1.3 & AES-256 encryption</p>
            </div>
            <div>
              <div className="text-2xl font-black text-emerald-400 mb-2">No Selling</div>
              <p className="text-slate-400 text-sm">We never sell your personal data</p>
            </div>
            <div>
              <div className="text-2xl font-black text-emerald-400 mb-2">Your Control</div>
              <p className="text-slate-400 text-sm">Delete your data anytime</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link href="/privacy" className="text-slate-400 hover:text-white text-sm">
              Read our Privacy Policy →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#e8c547]/10 border border-[#c9a227]/30 rounded-2xl p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Saving?</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Download Nuqta today and join thousands of smart shoppers saving on every purchase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/how-it-works"
              className="px-6 py-3 bg-[#c9a227] text-black font-bold rounded-lg hover:bg-[#e8c547] transition-colors"
            >
              See How It Works
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-slate-800 border border-slate-700 text-white font-medium rounded-lg hover:border-slate-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
