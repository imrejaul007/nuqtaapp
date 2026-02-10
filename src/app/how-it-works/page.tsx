'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Search,
  Store,
  Receipt,
  Coins,
  Gift,
  Smartphone,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Play,
  Users,
  TrendingUp,
  Zap,
  MapPin,
  Camera,
  Wallet,
  Crown,
  Target,
  Repeat
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState<'users' | 'merchants'>('users');

  const userSteps = [
    {
      step: 1,
      icon: Smartphone,
      title: 'Download & Sign Up',
      description: 'Get the Nuqta app from App Store or Play Store. Create your account in under 2 minutes with just your phone number or email.',
      details: [
        'Free to download and use',
        'No credit card required',
        'Quick phone/email verification',
        'Set your location for nearby deals'
      ],
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500'
    },
    {
      step: 2,
      icon: Search,
      title: 'Search for Deals',
      description: 'Before shopping, open Nuqta to find cashback offers near you. See exactly how much you\'ll earn at each merchant.',
      details: [
        'Browse by category (food, salon, retail)',
        'Filter by cashback percentage',
        'View on map or list',
        'Check merchant details & hours'
      ],
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20',
      borderColor: 'border-emerald-500'
    },
    {
      step: 3,
      icon: Store,
      title: 'Shop & Pay Normally',
      description: 'Visit the partner merchant and make your purchase. Pay however you like - cash, card, or digital wallet. No special checkout process.',
      details: [
        'No minimum purchase amount',
        'Pay with any payment method',
        'No need to show app before paying',
        'Shop as you normally would'
      ],
      color: 'text-[#c9a227]',
      bgColor: 'bg-[#c9a227]/20',
      borderColor: 'border-[#c9a227]'
    },
    {
      step: 4,
      icon: Camera,
      title: 'Snap Your Receipt',
      description: 'After paying, take a clear photo of your receipt in the Nuqta app. Our AI instantly reads and verifies your purchase.',
      details: [
        'Takes less than 10 seconds',
        'AI-powered instant verification',
        'Clear photos = faster processing',
        'Upload within 7 days of purchase'
      ],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500'
    },
    {
      step: 5,
      icon: Coins,
      title: 'Earn Nuqta Coins',
      description: 'Watch your Nuqta Coins balance grow! Coins are credited within minutes of receipt verification. 1 Coin = 1 AED.',
      details: [
        'Instant coin crediting',
        'Track earnings in real-time',
        'Build streaks for bonus coins',
        'Coins never expire (while active)'
      ],
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-500'
    },
    {
      step: 6,
      icon: Wallet,
      title: 'Redeem Anywhere',
      description: 'Use your Nuqta Coins at any partner merchant. Show your QR code at checkout and your balance is applied instantly.',
      details: [
        'Use at any partner merchant',
        'Combine with cash/card payments',
        'No minimum redemption',
        'Real-time balance updates'
      ],
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-500'
    }
  ];

  const merchantSteps = [
    {
      step: 1,
      icon: Store,
      title: 'Apply to Join',
      description: 'Fill out our simple application form. Our partnerships team will review and get back to you within 48 hours.',
      details: [
        'Quick online application',
        'No setup fees',
        'Flexible package options',
        'Dedicated onboarding support'
      ],
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500'
    },
    {
      step: 2,
      icon: CreditCard,
      title: 'Set Up Your Profile',
      description: 'Create your merchant profile with photos, hours, and cashback rates. Get access to our free POS software.',
      details: [
        'Showcase your business',
        'Set your own cashback rates',
        'Free POS system included',
        'Training and support provided'
      ],
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20',
      borderColor: 'border-emerald-500'
    },
    {
      step: 3,
      icon: Users,
      title: 'Get Discovered',
      description: 'Appear in the Nuqta app to thousands of users searching for deals in your area. No marketing spend required.',
      details: [
        'Featured in user searches',
        'Location-based discovery',
        'Category listings',
        'Promotional opportunities'
      ],
      color: 'text-[#c9a227]',
      bgColor: 'bg-[#c9a227]/20',
      borderColor: 'border-[#c9a227]'
    },
    {
      step: 4,
      icon: Receipt,
      title: 'Serve Customers',
      description: 'When Nuqta users visit, they\'ll upload their receipts after paying. Or use integrated POS for automatic tracking.',
      details: [
        'No extra work for staff',
        'Automatic receipt verification',
        'Optional POS integration',
        'Real-time transaction alerts'
      ],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500'
    },
    {
      step: 5,
      icon: TrendingUp,
      title: 'Track Performance',
      description: 'Use our analytics dashboard to see customer visits, redemptions, and ROI. Understand what drives your business.',
      details: [
        'Real-time analytics',
        'Customer insights',
        'Campaign performance',
        'ROI tracking'
      ],
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-500'
    },
    {
      step: 6,
      icon: Repeat,
      title: 'Build Loyalty',
      description: 'Create streak rewards and challenges to keep customers coming back. Drive repeat visits without discounting margins.',
      details: [
        'Streak reward programs',
        'Category challenges',
        'Customer retention tools',
        'Brand coin campaigns'
      ],
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-500'
    }
  ];

  const bonusFeatures = [
    {
      icon: Target,
      title: 'Streak Rewards',
      description: 'Visit 4 times in a month, get 5% extra cashback on all visits',
      example: '"Visit 4 times this month → +5% bonus"'
    },
    {
      icon: MapPin,
      title: 'Category Challenges',
      description: 'Try new places in a category to unlock bonus rewards',
      example: '"Try 3 new cafes → Unlock 50 bonus coins"'
    },
    {
      icon: Gift,
      title: 'Brand Coins',
      description: 'Earn merchant-specific coins for extra loyalty rewards',
      example: '"Spend AED 100 at Cafe X → 20 Brand Coins"'
    },
    {
      icon: Crown,
      title: 'Nuqta+ Perks',
      description: 'Premium members get higher rates and exclusive offers',
      example: '"Nuqta+ members: 25% vs 10% standard"'
    }
  ];

  const steps = activeTab === 'users' ? userSteps : merchantSteps;

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
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-6">
            <Play size={16} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">How It Works</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
            Start Saving in <span className="text-[#c9a227]">6 Simple Steps</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            Whether you&apos;re a user looking to save or a merchant looking to grow,
            Nuqta makes it simple.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-800/50 border border-slate-700 rounded-xl p-1">
            <button
              onClick={() => setActiveTab('users')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'users'
                  ? 'bg-[#c9a227] text-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users size={20} />
              For Users
            </button>
            <button
              onClick={() => setActiveTab('merchants')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'merchants'
                  ? 'bg-[#c9a227] text-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Store size={20} />
              For Merchants
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 transform sm:-translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`sm:w-1/2 ${index % 2 === 0 ? 'sm:text-right sm:pr-12' : 'sm:text-left sm:pl-12'}`}>
                  <div className={`bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:${step.borderColor}/50 transition-colors`}>
                    <div className={`inline-flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                      <div className={`w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center`}>
                        <step.icon size={24} className={step.color} />
                      </div>
                      <div className={`text-xs font-bold ${step.color} uppercase`}>Step {step.step}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-slate-400 mb-4">{step.description}</p>
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'sm:text-right' : ''}`}>
                      {step.details.map((detail, i) => (
                        <li key={i} className={`flex items-center gap-2 text-sm text-slate-300 ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                          <CheckCircle2 size={16} className={step.color} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden sm:flex absolute left-1/2 top-8 w-6 h-6 transform -translate-x-1/2 z-10">
                  <div className={`w-6 h-6 rounded-full ${step.bgColor} border-2 ${step.borderColor} flex items-center justify-center`}>
                    <span className={`text-xs font-bold ${step.color}`}>{step.step}</span>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden sm:block sm:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus Features */}
        {activeTab === 'users' && (
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Bonus Ways to Earn More</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {bonusFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a227]/20 flex items-center justify-center mb-4">
                    <feature.icon size={20} className="text-[#c9a227]" />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm mb-3">{feature.description}</p>
                  <div className="bg-slate-900/50 rounded-lg p-2">
                    <p className="text-xs text-emerald-400 font-medium">{feature.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Summary */}
        <div className="mt-16 bg-gradient-to-br from-[#c9a227]/10 to-transparent border border-[#c9a227]/30 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {activeTab === 'users' ? 'The Nuqta User Journey' : 'The Nuqta Merchant Journey'}
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg px-3 py-2">
                  <step.icon size={18} className={step.color} />
                  <span className="text-sm font-medium">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight size={20} className="text-slate-600 hidden sm:block self-center" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500/20 to-emerald-500/5 border border-emerald-500/30 rounded-2xl p-6 sm:p-10 text-center">
          <Zap size={40} className="text-emerald-400 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {activeTab === 'users' ? 'Ready to Start Saving?' : 'Ready to Grow Your Business?'}
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            {activeTab === 'users'
              ? 'Download Nuqta today and start earning cashback on your everyday purchases.'
              : 'Join hundreds of merchants already growing with Nuqta. Apply today.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {activeTab === 'users' ? (
              <>
                <Link
                  href="/features"
                  className="px-6 py-3 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Explore Features
                </Link>
                <Link
                  href="/faq"
                  className="px-6 py-3 bg-slate-800 border border-slate-700 text-white font-medium rounded-lg hover:border-slate-600 transition-colors"
                >
                  View FAQ
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Apply Now
                </Link>
                <Link
                  href="/merchant-playbook"
                  className="px-6 py-3 bg-slate-800 border border-slate-700 text-white font-medium rounded-lg hover:border-slate-600 transition-colors"
                >
                  Merchant Playbook
                </Link>
              </>
            )}
          </div>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
