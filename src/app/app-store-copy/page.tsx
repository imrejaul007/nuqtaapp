'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import GlobalFooter from '@/components/GlobalFooter';
import {
  ArrowLeft,
  Smartphone,
  Apple,
  PlayCircle,
  Copy,
  Check,
  Star,
  Download,
  Globe,
  Search,
  Tag,
  FileText,
  Image,
  Zap,
  Gift,
  Shield,
  Heart,
  TrendingUp,
  Users,
  Store,
  Sparkles
} from 'lucide-react';

interface AppStoreCopy {
  platform: 'ios' | 'android';
  appName: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  keywords: string[];
  whatsNew: string;
  screenshots: { title: string; description: string }[];
  promotionalText?: string;
}

const iosCopy: AppStoreCopy = {
  platform: 'ios',
  appName: 'Nuqta - Earn Rewards Everywhere',
  subtitle: 'Scan. Pay. Earn Coins.',
  shortDescription: '',
  fullDescription: `Turn every purchase into rewards! Nuqta is Dubai's smartest rewards app - earn coins at 100+ cafes, restaurants, salons, gyms, and more.

NO PUNCH CARDS. NO CODES. JUST REWARDS.

How it works:
1. Find a Nuqta partner store nearby
2. Scan the QR code at checkout
3. Pay normally (cash or card)
4. Earn coins automatically!

UNIVERSAL REWARDS
Unlike other loyalty apps, Nuqta coins work everywhere. Earn at a café, spend at a salon. Your rewards, your choice.

WHY NUQTA?
✓ One app for all your favorite spots
✓ No more lost punch cards
✓ Real value - 100 coins = AED 10
✓ Instant coin tracking
✓ Redeem anytime, anywhere

EARN AT:
• Cafés & Coffee Shops
• Restaurants & Eateries
• Salons & Spas
• Gyms & Fitness Centers
• Retail Stores
• Entertainment Venues
• And more every week!

JOIN THE SMART WAY TO EARN
Download now and get 100 bonus coins to start!

Questions? Contact us at support@nuqta.app

Follow us:
Instagram: @nuqtaapp
TikTok: @nuqtaapp`,
  keywords: [
    'rewards',
    'loyalty',
    'cashback',
    'Dubai',
    'UAE',
    'coins',
    'earn',
    'cafe',
    'restaurant',
    'salon',
    'gym',
    'discount',
    'deals',
    'savings',
    'points',
    'offers',
    'shopping',
    'food',
    'beauty',
    'fitness'
  ],
  whatsNew: `What's New in Version 1.0:

🎉 LAUNCH VERSION!
• Earn coins at 100+ partner locations in Dubai
• Scan QR to earn instantly
• Redeem coins at any partner store
• Track your earnings in real-time
• Discover new partners near you

Welcome to Nuqta! Start earning today.`,
  promotionalText: 'Download now & get 100 bonus coins! Earn rewards at 100+ Dubai spots.',
  screenshots: [
    {
      title: 'Earn Everywhere',
      description: 'Scan & earn at 100+ locations'
    },
    {
      title: 'Track Your Coins',
      description: 'Watch your rewards grow'
    },
    {
      title: 'Discover Partners',
      description: 'Find cafes, salons, gyms & more'
    },
    {
      title: 'Redeem Anywhere',
      description: 'Use coins at any partner store'
    },
    {
      title: 'Real Value',
      description: '100 coins = AED 10 savings'
    }
  ]
};

const androidCopy: AppStoreCopy = {
  platform: 'android',
  appName: 'Nuqta - Earn Rewards Everywhere',
  subtitle: '',
  shortDescription: 'Earn coins at 100+ Dubai spots. Scan QR, pay normally, get rewarded. No punch cards needed!',
  fullDescription: `Turn every purchase into rewards! Nuqta is Dubai's smartest rewards app - earn coins at 100+ cafes, restaurants, salons, gyms, and more.

🚀 NO PUNCH CARDS. NO CODES. JUST REWARDS.

📱 HOW IT WORKS:
1️⃣ Find a Nuqta partner store nearby
2️⃣ Scan the QR code at checkout
3️⃣ Pay normally (cash or card)
4️⃣ Earn coins automatically!

🌟 UNIVERSAL REWARDS
Unlike other loyalty apps, Nuqta coins work everywhere. Earn at a café, spend at a salon. Your rewards, your choice.

✅ WHY NUQTA?
• One app for all your favorite spots
• No more lost punch cards
• Real value - 100 coins = AED 10
• Instant coin tracking
• Redeem anytime, anywhere

🏪 EARN AT:
☕ Cafés & Coffee Shops
🍽️ Restaurants & Eateries
💇 Salons & Spas
💪 Gyms & Fitness Centers
🛍️ Retail Stores
🎬 Entertainment Venues
➕ And more every week!

🎁 JOIN THE SMART WAY TO EARN
Download now and get 100 bonus coins to start!

📧 Questions? Contact us at support@nuqta.app

📱 Follow us:
Instagram: @nuqtaapp
TikTok: @nuqtaapp

Nuqta - Because every purchase deserves a reward.`,
  keywords: [
    'rewards app',
    'loyalty program',
    'cashback Dubai',
    'UAE rewards',
    'earn coins',
    'cafe rewards',
    'restaurant loyalty',
    'salon rewards',
    'gym membership rewards',
    'Dubai deals',
    'UAE savings',
    'loyalty points',
    'shopping rewards',
    'food rewards',
    'beauty rewards',
    'fitness rewards',
    'QR rewards',
    'scan and earn',
    'mobile rewards',
    'local deals'
  ],
  whatsNew: `🎉 LAUNCH VERSION 1.0!

New Features:
• Earn coins at 100+ partner locations
• Scan QR to earn instantly
• Redeem coins at any partner
• Real-time earnings tracker
• Discover partners nearby
• Push notifications for deals

🎁 Welcome bonus: 100 free coins!

Start earning today!`,
  screenshots: [
    {
      title: 'Earn Everywhere',
      description: 'Scan & earn at 100+ locations'
    },
    {
      title: 'Track Your Coins',
      description: 'Watch your rewards grow'
    },
    {
      title: 'Discover Partners',
      description: 'Find cafes, salons, gyms & more'
    },
    {
      title: 'Redeem Anywhere',
      description: 'Use coins at any partner store'
    },
    {
      title: 'Real Value',
      description: '100 coins = AED 10 savings'
    }
  ]
};

const asoTips = [
  {
    title: 'App Name',
    tips: [
      'Keep under 30 characters',
      'Include primary keyword (Rewards)',
      'Brand name first for recognition',
      'Avoid keyword stuffing'
    ]
  },
  {
    title: 'Keywords (iOS)',
    tips: [
      'Use all 100 characters',
      'Separate with commas, no spaces after',
      'No need to repeat app name',
      'Include competitor names (carefully)',
      'Mix singular and plural'
    ]
  },
  {
    title: 'Description',
    tips: [
      'First 3 lines are crucial (visible without expanding)',
      'Use bullet points for scannability',
      'Include keywords naturally',
      'Strong call-to-action at end',
      'Social proof if available'
    ]
  },
  {
    title: 'Screenshots',
    tips: [
      'First 2 screenshots most important',
      'Show key features in action',
      'Use device mockups',
      'Include text overlays',
      'Maintain brand consistency'
    ]
  },
  {
    title: 'Reviews',
    tips: [
      'Respond to all reviews promptly',
      'Ask happy users to rate',
      'Address negative feedback professionally',
      'Use in-app prompts strategically'
    ]
  }
];

export default function AppStoreCopyPage() {
  const [activePlatform, setActivePlatform] = useState<'ios' | 'android'>('ios');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const currentCopy = activePlatform === 'ios' ? iosCopy : androidCopy;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
                <span className="text-black font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold text-white">Nuqta</span>
            </Link>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">App Store Copy</span>
          </div>
          <Link
            href="/marketing-bible"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Marketing</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30 mb-4">
            <Smartphone className="text-blue-400" size={16} />
            <span className="text-blue-400 text-sm font-medium">App Store Optimization</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">App Store Copy</h1>
          <p className="text-slate-400">Optimized listings for iOS App Store & Google Play</p>
        </div>

        {/* Platform Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActivePlatform('ios')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              activePlatform === 'ios'
                ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white border border-slate-600'
                : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Apple size={20} />
            iOS App Store
          </button>
          <button
            onClick={() => setActivePlatform('android')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              activePlatform === 'android'
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white border border-green-500'
                : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'
            }`}
          >
            <PlayCircle size={20} />
            Google Play
          </button>
        </div>

        {/* App Store Sections */}
        <div className="space-y-6">
          {/* App Name */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="text-[#c9a227]" size={20} />
                <h3 className="text-lg font-bold text-white">App Name</h3>
                <span className="text-slate-500 text-sm">({currentCopy.appName.length}/30 chars)</span>
              </div>
              <button
                onClick={() => copyToClipboard(currentCopy.appName, 'appName')}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg text-sm text-slate-300 hover:bg-white/20"
              >
                {copiedId === 'appName' ? <Check size={14} /> : <Copy size={14} />}
                Copy
              </button>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-white text-xl font-bold">{currentCopy.appName}</p>
            </div>
          </div>

          {/* Subtitle (iOS) or Short Description (Android) */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Tag className="text-purple-400" size={20} />
                <h3 className="text-lg font-bold text-white">
                  {activePlatform === 'ios' ? 'Subtitle' : 'Short Description'}
                </h3>
                <span className="text-slate-500 text-sm">
                  ({(activePlatform === 'ios' ? currentCopy.subtitle : currentCopy.shortDescription).length}/{activePlatform === 'ios' ? 30 : 80} chars)
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(
                  activePlatform === 'ios' ? currentCopy.subtitle : currentCopy.shortDescription,
                  'subtitle'
                )}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg text-sm text-slate-300 hover:bg-white/20"
              >
                {copiedId === 'subtitle' ? <Check size={14} /> : <Copy size={14} />}
                Copy
              </button>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-slate-300">
                {activePlatform === 'ios' ? currentCopy.subtitle : currentCopy.shortDescription}
              </p>
            </div>
          </div>

          {/* Promotional Text (iOS only) */}
          {activePlatform === 'ios' && currentCopy.promotionalText && (
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Zap className="text-amber-400" size={20} />
                  <h3 className="text-lg font-bold text-white">Promotional Text</h3>
                  <span className="text-slate-500 text-sm">({currentCopy.promotionalText.length}/170 chars)</span>
                </div>
                <button
                  onClick={() => copyToClipboard(currentCopy.promotionalText!, 'promo')}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg text-sm text-slate-300 hover:bg-white/20"
                >
                  {copiedId === 'promo' ? <Check size={14} /> : <Copy size={14} />}
                  Copy
                </button>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <p className="text-slate-300">{currentCopy.promotionalText}</p>
              </div>
              <p className="text-slate-500 text-xs mt-2">Can be updated without app submission - use for timely promotions</p>
            </div>
          )}

          {/* Full Description */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText className="text-green-400" size={20} />
                <h3 className="text-lg font-bold text-white">Full Description</h3>
                <span className="text-slate-500 text-sm">({currentCopy.fullDescription.length}/4000 chars)</span>
              </div>
              <button
                onClick={() => copyToClipboard(currentCopy.fullDescription, 'description')}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg text-sm text-slate-300 hover:bg-white/20"
              >
                {copiedId === 'description' ? <Check size={14} /> : <Copy size={14} />}
                Copy
              </button>
            </div>
            <div className="bg-black/30 rounded-lg p-4 max-h-96 overflow-y-auto">
              <pre className="text-slate-300 text-sm whitespace-pre-wrap font-sans">
                {currentCopy.fullDescription}
              </pre>
            </div>
          </div>

          {/* Keywords */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Search className="text-blue-400" size={20} />
                <h3 className="text-lg font-bold text-white">Keywords</h3>
                <span className="text-slate-500 text-sm">
                  ({currentCopy.keywords.join(',').length}/{activePlatform === 'ios' ? 100 : 'unlimited'} chars)
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(currentCopy.keywords.join(','), 'keywords')}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg text-sm text-slate-300 hover:bg-white/20"
              >
                {copiedId === 'keywords' ? <Check size={14} /> : <Copy size={14} />}
                Copy All
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentCopy.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-lg text-sm border border-blue-500/30"
                >
                  {keyword}
                </span>
              ))}
            </div>
            <div className="mt-4 bg-black/30 rounded-lg p-3">
              <p className="text-slate-500 text-xs font-mono">{currentCopy.keywords.join(',')}</p>
            </div>
          </div>

          {/* What's New */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Gift className="text-pink-400" size={20} />
                <h3 className="text-lg font-bold text-white">What&apos;s New</h3>
              </div>
              <button
                onClick={() => copyToClipboard(currentCopy.whatsNew, 'whatsNew')}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg text-sm text-slate-300 hover:bg-white/20"
              >
                {copiedId === 'whatsNew' ? <Check size={14} /> : <Copy size={14} />}
                Copy
              </button>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <pre className="text-slate-300 text-sm whitespace-pre-wrap font-sans">
                {currentCopy.whatsNew}
              </pre>
            </div>
          </div>

          {/* Screenshot Guidelines */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Image className="text-amber-400" size={20} />
              <h3 className="text-lg font-bold text-white">Screenshot Texts</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {currentCopy.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-[#c9a227]/20 to-amber-500/10 rounded-xl p-4 border border-[#c9a227]/30 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#c9a227] font-bold text-lg">{index + 1}</span>
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">{screenshot.title}</h4>
                  <p className="text-slate-400 text-xs">{screenshot.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ASO Tips */}
        <div className="mt-12 bg-gradient-to-r from-[#c9a227]/20 to-amber-500/20 rounded-xl p-6 border border-[#c9a227]/30">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <TrendingUp className="text-[#c9a227]" size={20} />
            App Store Optimization (ASO) Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {asoTips.slice(0, 3).map((tip, index) => (
              <div key={index} className="bg-black/20 rounded-lg p-4">
                <h4 className="text-white font-bold mb-3">{tip.title}</h4>
                <ul className="space-y-2">
                  {tip.tips.map((t, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                      <Star className="text-[#c9a227] flex-shrink-0 mt-0.5" size={12} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {asoTips.slice(3).map((tip, index) => (
              <div key={index} className="bg-black/20 rounded-lg p-4">
                <h4 className="text-white font-bold mb-3">{tip.title}</h4>
                <ul className="space-y-2">
                  {tip.tips.map((t, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                      <Star className="text-[#c9a227] flex-shrink-0 mt-0.5" size={12} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Size Requirements */}
        <div className="mt-8 bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Smartphone className="text-blue-400" size={20} />
            Screenshot Size Requirements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <Apple size={16} />
                iOS (App Store)
              </h4>
              <ul className="text-slate-300 text-sm space-y-2">
                <li><strong>iPhone 6.7&quot;:</strong> 1290 × 2796 px</li>
                <li><strong>iPhone 6.5&quot;:</strong> 1284 × 2778 px</li>
                <li><strong>iPhone 5.5&quot;:</strong> 1242 × 2208 px</li>
                <li><strong>iPad Pro 12.9&quot;:</strong> 2048 × 2732 px</li>
                <li className="text-slate-500">Up to 10 screenshots per device</li>
              </ul>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <PlayCircle size={16} />
                Android (Google Play)
              </h4>
              <ul className="text-slate-300 text-sm space-y-2">
                <li><strong>Phone:</strong> 1080 × 1920 px (min)</li>
                <li><strong>Tablet 7&quot;:</strong> 1200 × 1920 px</li>
                <li><strong>Tablet 10&quot;:</strong> 1920 × 1200 px</li>
                <li><strong>Feature Graphic:</strong> 1024 × 500 px</li>
                <li className="text-slate-500">2-8 screenshots required</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
