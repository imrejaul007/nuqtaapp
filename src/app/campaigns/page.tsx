'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Megaphone,
  Users,
  Store,
  Gift,
  Trophy,
  Car,
  Smartphone,
  Calculator,
  Video,
  Upload,
  Share2,
  Star,
  Zap,
  Target,
  TrendingUp,
  Crown,
  Music,
  Gamepad2,
  Newspaper,
  Mic,
  Film,
  Camera,
  MessageCircle,
  Hash,
  Globe,
  Sparkles,
  Heart,
  ThumbsUp,
  Play,
  Radio,
  Tv,
  Award,
  Coins,
  ShoppingBag,
  Coffee,
  Moon,
  GraduationCap,
  Palette,
  Lightbulb,
  Rocket,
  ChevronRight,
  Check,
  Instagram,
  Youtube
} from 'lucide-react';

export default function CampaignsPage() {
  const [activeTab, setActiveTab] = useState('acquisition');

  const tabs = [
    { id: 'acquisition', label: 'User Acquisition', icon: Users },
    { id: 'campaigns', label: 'Campaigns', icon: Megaphone },
    { id: 'media-house', label: 'Media House', icon: Film },
    { id: 'social', label: 'Social Media', icon: Share2 },
    { id: 'whatsapp', label: 'WhatsApp Groups', icon: MessageCircle },
  ];

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
              <h1 className="text-xl font-bold text-[#c9a227]">Campaigns & Marketing</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#c9a227]/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#c9a227]/20 px-4 py-2 rounded-full mb-6">
            <Rocket className="text-[#c9a227]" size={18} />
            <span className="text-[#c9a227] font-medium">Growth Engine</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Campaign <span className="text-[#c9a227]">Playbook</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete marketing strategy for merchants, users, media production,
            and social media growth. From viral campaigns to community building.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="border-b border-white/10 sticky top-[73px] bg-[#0a1628]/95 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-[#0a1628]'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">

        {/* User Acquisition Tab */}
        {activeTab === 'acquisition' && (
          <div className="space-y-12">
            {/* Acquisition Overview */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">User <span className="text-[#c9a227]">Acquisition</span> Strategy</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Zero-CAC acquisition through merchant-funded rewards, viral loops, and community building.
                Every channel designed to bring users at minimal cost.
              </p>
            </div>

            {/* Acquisition Channels Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Channel 1: Merchant-Driven */}
              <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-xl p-6 border border-emerald-500/30">
                <Store className="text-emerald-400 mb-4" size={32} />
                <h4 className="text-lg font-bold mb-2">Merchant-Driven Acquisition</h4>
                <p className="text-sm text-gray-400 mb-4">Users discover Nuqta at partner stores</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">QR codes at checkout - "Pay & Earn Cashback"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Staff trained to mention Nuqta savings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Receipt prints with signup bonus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Table tents & menu inserts</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-emerald-500/10 rounded-lg">
                  <p className="text-xs text-emerald-300"><strong>CAC:</strong> AED 0 (merchant funded)</p>
                </div>
              </div>

              {/* Channel 2: Referral Program */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl p-6 border border-blue-500/30">
                <Users className="text-blue-400 mb-4" size={32} />
                <h4 className="text-lg font-bold mb-2">Referral Program</h4>
                <p className="text-sm text-gray-400 mb-4">Users bring users through incentives</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Give AED 10, Get AED 10 on first transaction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Referral leaderboard with bonus prizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Unique shareable referral links</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Milestone rewards (5, 10, 25 referrals)</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-500/10 rounded-lg">
                  <p className="text-xs text-blue-300"><strong>CAC:</strong> AED 10 (paid on conversion)</p>
                </div>
              </div>

              {/* Channel 3: Social Gifting */}
              <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/5 rounded-xl p-6 border border-pink-500/30">
                <Gift className="text-pink-400 mb-4" size={32} />
                <h4 className="text-lg font-bold mb-2">Social Gifting Loop</h4>
                <p className="text-sm text-gray-400 mb-4">Gift coins spread to non-users</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-pink-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Send coins to anyone (even non-users)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-pink-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Recipient must signup to claim</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-pink-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Birthday/occasion gifting prompts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-pink-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Group gifting for celebrations</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-pink-500/10 rounded-lg">
                  <p className="text-xs text-pink-300"><strong>CAC:</strong> AED 0 (organic viral)</p>
                </div>
              </div>

              {/* Channel 4: Events */}
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl p-6 border border-purple-500/30">
                <Trophy className="text-purple-400 mb-4" size={32} />
                <h4 className="text-lg font-bold mb-2">Event Activations</h4>
                <p className="text-sm text-gray-400 mb-4">Mass signups at exhibitions & events</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Global Village: 100 coins on signup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Exhibition booths with instant rewards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Concert/festival sponsorships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">University campus events</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-purple-500/10 rounded-lg">
                  <p className="text-xs text-purple-300"><strong>CAC:</strong> AED 5-10 (event-funded)</p>
                </div>
              </div>

              {/* Channel 5: Content/Influencer */}
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-xl p-6 border border-orange-500/30">
                <Video className="text-orange-400 mb-4" size={32} />
                <h4 className="text-lg font-bold mb-2">Influencer & Content</h4>
                <p className="text-sm text-gray-400 mb-4">Organic reach through creators</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Nano influencers (1K-10K): Barter deals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">UGC challenges with coin rewards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">"How much I saved" video trend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Food/lifestyle blogger partnerships</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-orange-500/10 rounded-lg">
                  <p className="text-xs text-orange-300"><strong>CAC:</strong> AED 2-5 (barter/low cost)</p>
                </div>
              </div>

              {/* Channel 6: Community */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-xl p-6 border border-cyan-500/30">
                <MessageCircle className="text-cyan-400 mb-4" size={32} />
                <h4 className="text-lg font-bold mb-2">Community Building</h4>
                <p className="text-sm text-gray-400 mb-4">Organic growth through groups</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">WhatsApp deal groups by niche</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Telegram channels for flash deals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Facebook groups (expat communities)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Reddit/forums seeding</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-cyan-500/10 rounded-lg">
                  <p className="text-xs text-cyan-300"><strong>CAC:</strong> AED 0 (organic)</p>
                </div>
              </div>
            </div>

            {/* Viral Mechanics */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h4 className="text-xl font-bold mb-6 text-[#c9a227]">Built-In Viral Mechanics</h4>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    title: 'Bill Split',
                    desc: 'Split bill with friends, they see savings and join',
                    viral: '1 user → 3-4 friends',
                  },
                  {
                    title: 'Gift Coins',
                    desc: 'Send coins as gifts, recipients must signup',
                    viral: '1 gift → 1 new user',
                  },
                  {
                    title: 'Savings Flex',
                    desc: 'Share savings screenshots on social',
                    viral: 'FOMO-driven signups',
                  },
                  {
                    title: 'Group Deals',
                    desc: 'Unlock deals when friends join together',
                    viral: '1 deal → 5+ signups',
                  },
                ].map((mechanic, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 bg-[#c9a227]/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Zap className="text-[#c9a227]" size={24} />
                    </div>
                    <h5 className="font-semibold mb-1">{mechanic.title}</h5>
                    <p className="text-xs text-gray-400 mb-2">{mechanic.desc}</p>
                    <span className="text-xs bg-[#c9a227]/20 text-[#c9a227] px-2 py-1 rounded-full">{mechanic.viral}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Acquisition Funnel */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-2xl p-8 border border-[#c9a227]/30">
              <h4 className="text-xl font-bold mb-6">User Acquisition Funnel</h4>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {[
                  { stage: 'Awareness', metric: '100K', desc: 'See Nuqta branding' },
                  { stage: 'Interest', metric: '20K', desc: 'Visit app/website' },
                  { stage: 'Download', metric: '10K', desc: 'Install the app' },
                  { stage: 'Signup', metric: '7K', desc: 'Complete registration' },
                  { stage: 'First Txn', metric: '5K', desc: 'Make first purchase' },
                  { stage: 'Active', metric: '4K', desc: 'Monthly active user' },
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#c9a227]">{step.metric}</div>
                      <div className="text-sm font-medium">{step.stage}</div>
                      <div className="text-xs text-gray-500">{step.desc}</div>
                    </div>
                    {idx < 5 && <ChevronRight className="text-gray-600 hidden md:block" size={24} />}
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  Target conversion: <span className="text-[#c9a227] font-semibold">5% awareness → active</span> |
                  Blended CAC: <span className="text-green-400 font-semibold">&lt; AED 5</span>
                </p>
              </div>
            </div>

            {/* Low-Cost Tactics */}
            <div>
              <h4 className="text-xl font-bold mb-6">Zero/Low-Cost Acquisition Tactics</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h5 className="font-semibold text-green-400 mb-4">Free Tactics (AED 0 CAC)</h5>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-400 text-xs">1</span>
                      </div>
                      <div>
                        <span className="font-medium text-white">ASO (App Store Optimization)</span>
                        <p className="text-gray-500">Keywords: "Dubai cashback", "UAE rewards", "save money Dubai"</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-400 text-xs">2</span>
                      </div>
                      <div>
                        <span className="font-medium text-white">SEO Content</span>
                        <p className="text-gray-500">"Best deals in Dubai", "How to save money UAE" blog posts</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-400 text-xs">3</span>
                      </div>
                      <div>
                        <span className="font-medium text-white">Google My Business</span>
                        <p className="text-gray-500">Partner merchants list Nuqta, drives discovery</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-400 text-xs">4</span>
                      </div>
                      <div>
                        <span className="font-medium text-white">PR & Media Coverage</span>
                        <p className="text-gray-500">Launch press, founder interviews, startup features</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-400 text-xs">5</span>
                      </div>
                      <div>
                        <span className="font-medium text-white">Cross-Promotion</span>
                        <p className="text-gray-500">Partner with non-competing apps for user swaps</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h5 className="font-semibold text-yellow-400 mb-4">Low-Cost Tactics (AED 1-5 CAC)</h5>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-400 text-xs">1</span>
                      </div>
                      <div>
                        <span className="font-medium text-white">Nano-Influencer Barter</span>
                        <p className="text-gray-500">Free meals/services in exchange for posts</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-400 text-xs">2</span>
                      </div>
                      <div>
                        <span className="font-medium text-white">University Ambassador Program</span>
                        <p className="text-gray-500">Students promote for coins + exclusive perks</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-400 text-xs">3</span>
                      </div>
                      <div>
                        <span className="font-medium text-white">Telegram/WhatsApp Seeding</span>
                        <p className="text-gray-500">Join expat groups, share genuine deals</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-400 text-xs">4</span>
                      </div>
                      <div>
                        <span className="font-medium text-white">Flyer Distribution</span>
                        <p className="text-gray-500">Partner store checkout, parking lots, metro stations</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-400 text-xs">5</span>
                      </div>
                      <div>
                        <span className="font-medium text-white">Co-Branded SMS</span>
                        <p className="text-gray-500">Merchants send Nuqta promo to their customer database</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Retention = Acquisition */}
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h4 className="text-xl font-bold mb-4 text-[#c9a227]">Retention IS Acquisition</h4>
              <p className="text-gray-400 mb-6">
                Happy users bring more users. Focus on activation and engagement to drive organic growth.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#c9a227] mb-2">D1: 60%</div>
                  <div className="text-sm text-gray-400">Target Day 1 retention</div>
                  <div className="text-xs text-gray-500 mt-1">Instant signup bonus + first deal</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#c9a227] mb-2">D7: 40%</div>
                  <div className="text-sm text-gray-400">Target Day 7 retention</div>
                  <div className="text-xs text-gray-500 mt-1">Push notifications + streak rewards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#c9a227] mb-2">D30: 25%</div>
                  <div className="text-sm text-gray-400">Target Day 30 retention</div>
                  <div className="text-xs text-gray-500 mt-1">Loyalty tiers + expiring coins FOMO</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div className="space-y-12">
            {/* Merchant Campaigns */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-500/20 rounded-xl">
                  <Store size={24} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Merchant Campaigns</h3>
                  <p className="text-gray-400">Drive merchant sign-ups and engagement</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Increase Your Revenue',
                    subtitle: 'No upfront cost',
                    points: ['Zero joining fee', 'Pay only on transactions', 'Free marketing support', 'Instant customer access'],
                    color: 'emerald',
                  },
                  {
                    title: 'Increase Your AOV',
                    subtitle: 'Average Order Value boost',
                    points: ['Cashback incentivizes larger orders', 'Bundle deals promotion', 'Premium upsell opportunities', 'Loyalty drives repeat purchases'],
                    color: 'blue',
                  },
                  {
                    title: 'Reach Your Audience',
                    subtitle: 'Targeted marketing',
                    points: ['Nuqta app visibility', 'Social media features', 'Push notifications', 'Local discovery'],
                    color: 'purple',
                  },
                ].map((campaign, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className={`text-lg font-bold mb-1 text-${campaign.color}-400`}>{campaign.title}</h4>
                    <p className="text-sm text-gray-400 mb-4">{campaign.subtitle}</p>
                    <ul className="space-y-2">
                      {campaign.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2 text-sm text-gray-300">
                          <Check size={14} className={`text-${campaign.color}-400`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* User Campaigns */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#c9a227]/20 rounded-xl">
                  <Users size={24} className="text-[#c9a227]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">User Campaigns</h3>
                  <p className="text-gray-400">Viral user acquisition and engagement</p>
                </div>
              </div>

              {/* Big Prize Campaign */}
              <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-2xl p-8 border border-[#c9a227]/30 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="text-[#c9a227]" size={32} />
                  <h4 className="text-2xl font-bold">Pay with Nuqta & Win!</h4>
                </div>
                <p className="text-gray-300 mb-6">Every transaction is an entry to win amazing prizes</p>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { icon: Car, prize: 'Win a Car', desc: 'Monthly grand prize draw' },
                    { icon: Smartphone, prize: 'Win an iPhone', desc: 'Weekly lucky draw' },
                    { icon: Gift, prize: 'Gold Coins', desc: 'Daily instant wins' },
                    { icon: Star, prize: 'Luxury Experiences', desc: 'VIP prizes' },
                  ].map((prize, idx) => (
                    <div key={idx} className="bg-white/10 rounded-xl p-4 text-center">
                      <prize.icon className="mx-auto mb-2 text-[#c9a227]" size={32} />
                      <div className="font-semibold">{prize.prize}</div>
                      <div className="text-xs text-gray-400">{prize.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Calculate Savings */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <Calculator className="text-blue-400" size={24} />
                    <h4 className="text-lg font-bold">Calculate Your Savings</h4>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Show users how much they could have saved
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-xs font-bold text-blue-400">1</div>
                      <span className="text-gray-300">Upload past bills on the app</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-xs font-bold text-blue-400">2</div>
                      <span className="text-gray-300">See how much you would have saved with Nuqta</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-xs font-bold text-blue-400">3</div>
                      <span className="text-gray-300">Generate shareable savings report</span>
                    </div>
                  </div>
                </div>

                {/* Video Campaign */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <Video className="text-pink-400" size={24} />
                    <h4 className="text-lg font-bold">Savings Video Challenge</h4>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    User-generated content campaign
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-pink-500/20 rounded-full flex items-center justify-center text-xs font-bold text-pink-400">1</div>
                      <span className="text-gray-300">Create video showing your potential savings</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-pink-500/20 rounded-full flex items-center justify-center text-xs font-bold text-pink-400">2</div>
                      <span className="text-gray-300">Post on social media with #NuqtaSavings</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-pink-500/20 rounded-full flex items-center justify-center text-xs font-bold text-pink-400">3</div>
                      <span className="text-gray-300">Earn that amount as cashback (Max AED 300)</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-pink-500/10 rounded-lg border border-pink-500/30">
                    <p className="text-xs text-pink-300">Cap: AED 300 maximum cashback per video</p>
                  </div>
                </div>
              </div>

              {/* More User Campaigns */}
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Zap className="text-yellow-400 mb-3" size={28} />
                  <h4 className="font-bold mb-2">Smart People Use Nuqta</h4>
                  <p className="text-sm text-gray-400">
                    Aspirational branding campaign positioning Nuqta users as savvy shoppers
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Target className="text-red-400 mb-3" size={28} />
                  <h4 className="font-bold mb-2">Nuqta Cash Hunting</h4>
                  <p className="text-sm text-gray-400">
                    Gamified treasure hunt with hidden cashback rewards at partner stores
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <ShoppingBag className="text-green-400 mb-3" size={28} />
                  <h4 className="font-bold mb-2">Co-Partnered Packaging</h4>
                  <p className="text-sm text-gray-400">
                    Nuqta branding on merchant packaging with QR codes for instant sign-up
                  </p>
                </div>
              </div>

              {/* First Order Offer */}
              <div className="mt-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="text-purple-400" size={28} />
                  <div>
                    <h4 className="text-lg font-bold">Experience Luxury at Your Fingertips</h4>
                    <p className="text-purple-300">15% off on your first order</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Premium positioning campaign targeting aspirational users. First-time user bonus
                  creates immediate value perception and drives initial conversion.
                </p>
              </div>

              {/* Street & Outdoor */}
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="font-bold mb-4 text-[#c9a227]">Street Signaling</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#c9a227]" />Billboards at high-traffic locations</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#c9a227]" />Bus stop advertisements</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#c9a227]" />Metro station branding</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#c9a227]" />Mall entrance displays</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="font-bold mb-4 text-[#c9a227]">Competition Campaigns</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><Music size={14} className="text-pink-400" />Singing competitions</li>
                    <li className="flex items-center gap-2"><Play size={14} className="text-blue-400" />Dance challenges</li>
                    <li className="flex items-center gap-2"><Lightbulb size={14} className="text-yellow-400" />Quiz contests</li>
                    <li className="flex items-center gap-2"><Trophy size={14} className="text-green-400" />Sports tournaments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Media House Tab */}
        {activeTab === 'media-house' && (
          <div className="space-y-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Nuqta <span className="text-[#c9a227]">Media House</span></h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                In-house content production across entertainment, sports, news, and viral formats.
                Building owned media channels for organic reach and brand building.
              </p>
            </div>

            {/* Content Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Short Films */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <Film className="text-purple-400 mb-3" size={28} />
                <h4 className="font-bold mb-2">Short Films</h4>
                <p className="text-sm text-gray-400 mb-3">Original storytelling content</p>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li>• Drama series</li>
                  <li>• Comedy sketches</li>
                  <li>• Social message films</li>
                </ul>
              </div>

              {/* Sports Content */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <Trophy className="text-green-400 mb-3" size={28} />
                <h4 className="font-bold mb-2">Sports Coverage</h4>
                <p className="text-sm text-gray-400 mb-3">News, analysis & facts</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                  <span>• Football</span>
                  <span>• Cricket</span>
                  <span>• WWE</span>
                  <span>• Kabaddi</span>
                </div>
              </div>

              {/* Games & Recreation */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <Gamepad2 className="text-blue-400 mb-3" size={28} />
                <h4 className="font-bold mb-2">Games & Recreation</h4>
                <p className="text-sm text-gray-400 mb-3">Casual gaming content</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                  <span>• Gully Cricket</span>
                  <span>• Carrom</span>
                  <span>• Badminton</span>
                  <span>• Padel</span>
                  <span>• Futsal</span>
                  <span>• Gaming</span>
                </div>
              </div>

              {/* News & Social */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <Newspaper className="text-red-400 mb-3" size={28} />
                <h4 className="font-bold mb-2">News & Social</h4>
                <p className="text-sm text-gray-400 mb-3">Viral formats</p>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li>• Social experiments (with Nuqta coin rewards)</li>
                  <li>• Tech reviews</li>
                  <li>• Meme content</li>
                  <li>• Food reviews</li>
                </ul>
              </div>

              {/* Story Lab */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <Sparkles className="text-yellow-400 mb-3" size={28} />
                <h4 className="font-bold mb-2">Story Lab</h4>
                <p className="text-sm text-gray-400 mb-3">Creative content formats</p>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li>• AI-generated content</li>
                  <li>• Superhero stories</li>
                  <li>• Animal podcasts</li>
                  <li>• Indian cartoon podcasts</li>
                </ul>
              </div>

              {/* Business & Education */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <TrendingUp className="text-emerald-400 mb-3" size={28} />
                <h4 className="font-bold mb-2">Business Series</h4>
                <p className="text-sm text-gray-400 mb-3">Educational content</p>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li>• Podcasts</li>
                  <li>• Marketing case studies</li>
                  <li>• Startup stories</li>
                  <li>• Money tips</li>
                </ul>
              </div>
            </div>

            {/* IP Content */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-2xl p-8 border border-[#c9a227]/30">
              <h4 className="text-xl font-bold mb-6 text-[#c9a227]">Intellectual Property (IP) Content</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-4">
                  <Music className="text-pink-400 mb-2" size={24} />
                  <h5 className="font-semibold mb-1">Music Video Parodies</h5>
                  <p className="text-xs text-gray-400">Trending song recreations with Nuqta twist</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <Mic className="text-blue-400 mb-2" size={24} />
                  <h5 className="font-semibold mb-1">AI Podcasts</h5>
                  <p className="text-xs text-gray-400">Scalable podcast content using AI voices</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <Globe className="text-green-400 mb-2" size={24} />
                  <h5 className="font-semibold mb-1">Multi-Language (20+)</h5>
                  <p className="text-xs text-gray-400">Content in every major language</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Social Media Tab */}
        {activeTab === 'social' && (
          <div className="space-y-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Social Media <span className="text-[#c9a227]">Strategy</span></h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Multi-account strategy across platforms with niche and language-specific channels
              </p>
            </div>

            {/* Content Types */}
            <div>
              <h4 className="text-xl font-bold mb-6">Content Formats</h4>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <Camera className="text-pink-400 mx-auto mb-3" size={32} />
                  <h5 className="font-semibold mb-2">Photo Content</h5>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>Product shots</li>
                    <li>Behind the scenes</li>
                    <li>User highlights</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <Video className="text-red-400 mx-auto mb-3" size={32} />
                  <h5 className="font-semibold mb-2">Video Content</h5>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>Reels & TikToks</li>
                    <li>Reviews</li>
                    <li>Tutorials</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <Star className="text-yellow-400 mx-auto mb-3" size={32} />
                  <h5 className="font-semibold mb-2">Reviews</h5>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>Product reviews</li>
                    <li>Hero or Trash format</li>
                    <li>Honest opinions</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <Users className="text-blue-400 mx-auto mb-3" size={32} />
                  <h5 className="font-semibold mb-2">UGC</h5>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>AI meme style</li>
                    <li>Viral explanation hooks</li>
                    <li>User testimonials</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Account Strategy */}
            <div>
              <h4 className="text-xl font-bold mb-6">Multi-Account Strategy</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h5 className="font-semibold text-[#c9a227] mb-4">Niche-Specific Accounts</h5>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: '@NuqtaFood', niche: 'Food & Dining' },
                      { name: '@NuqtaBeauty', niche: 'Beauty & Wellness' },
                      { name: '@NuqtaDeals', niche: 'Best Deals' },
                      { name: '@NuqtaLife', niche: 'Lifestyle' },
                      { name: '@NuqtaTech', niche: 'Tech & Gadgets' },
                      { name: '@NuqtaTravel', niche: 'Travel & Experiences' },
                    ].map((account, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3">
                        <div className="font-medium text-sm">{account.name}</div>
                        <div className="text-xs text-gray-500">{account.niche}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h5 className="font-semibold text-[#c9a227] mb-4">Language-Specific Accounts</h5>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: '@NuqtaAR', lang: 'Arabic' },
                      { name: '@NuqtaHI', lang: 'Hindi' },
                      { name: '@NuqtaUR', lang: 'Urdu' },
                      { name: '@NuqtaML', lang: 'Malayalam' },
                      { name: '@NuqtaTL', lang: 'Tagalog' },
                      { name: '@NuqtaBN', lang: 'Bengali' },
                    ].map((account, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3">
                        <div className="font-medium text-sm">{account.name}</div>
                        <div className="text-xs text-gray-500">{account.lang}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Calendar Preview */}
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-8 border border-pink-500/30">
              <h4 className="text-xl font-bold mb-6">Weekly Content Mix</h4>
              <div className="grid grid-cols-7 gap-2">
                {[
                  { day: 'Mon', type: 'Motivation Monday', color: 'yellow' },
                  { day: 'Tue', type: 'Tutorial Tuesday', color: 'blue' },
                  { day: 'Wed', type: 'Win Wednesday', color: 'green' },
                  { day: 'Thu', type: 'Throwback Thursday', color: 'purple' },
                  { day: 'Fri', type: 'Feature Friday', color: 'pink' },
                  { day: 'Sat', type: 'Savings Saturday', color: 'emerald' },
                  { day: 'Sun', type: 'Story Sunday', color: 'orange' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="font-bold text-sm">{item.day}</div>
                    <div className={`text-xs text-${item.color}-400 mt-1`}>{item.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* WhatsApp Groups Tab */}
        {activeTab === 'whatsapp' && (
          <div className="space-y-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">WhatsApp <span className="text-[#c9a227]">Community</span></h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Niche WhatsApp groups for targeted engagement and deal sharing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: 'Dubai Deals',
                  icon: ShoppingBag,
                  color: 'emerald',
                  description: 'Best deals and offers across Dubai',
                  members: 'Target: 10K+',
                  content: ['Daily deal drops', 'Flash sale alerts', 'Exclusive codes', 'Member-only offers'],
                },
                {
                  name: 'College Offers',
                  icon: GraduationCap,
                  color: 'blue',
                  description: 'Student discounts and campus deals',
                  members: 'Target: 5K+',
                  content: ['Student discounts', 'Campus events', 'Study spots', 'Budget eats'],
                },
                {
                  name: 'Night Life',
                  icon: Moon,
                  color: 'purple',
                  description: 'Clubs, lounges, and evening entertainment',
                  members: 'Target: 8K+',
                  content: ['Club promotions', 'Ladies nights', 'Happy hours', 'Event invites'],
                },
                {
                  name: 'Girls Gang',
                  icon: Heart,
                  color: 'pink',
                  description: 'Women-focused deals and experiences',
                  members: 'Target: 6K+',
                  content: ['Spa deals', 'Beauty offers', 'Brunch spots', 'Shopping steals'],
                },
              ].map((group, idx) => (
                <div key={idx} className={`bg-white/5 rounded-xl p-6 border border-${group.color}-500/30`}>
                  <div className={`inline-flex p-3 bg-${group.color}-500/20 rounded-xl mb-4`}>
                    <group.icon size={28} className={`text-${group.color}-400`} />
                  </div>
                  <h4 className="font-bold text-lg mb-1">{group.name}</h4>
                  <p className="text-sm text-gray-400 mb-2">{group.description}</p>
                  <p className={`text-xs text-${group.color}-400 mb-4`}>{group.members}</p>
                  <div className="space-y-2">
                    {group.content.map((item, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-gray-300">
                        <Check size={12} className={`text-${group.color}-400`} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Group Management */}
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h4 className="text-xl font-bold mb-6 text-[#c9a227]">Group Management Strategy</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-semibold mb-3">Content Rules</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Max 3 messages per day</li>
                    <li>• Only verified deals</li>
                    <li>• No spam or off-topic</li>
                    <li>• Clear expiry dates</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-3">Growth Tactics</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Invite link in app</li>
                    <li>• QR at partner stores</li>
                    <li>• Social media promotion</li>
                    <li>• Referral bonuses</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-3">Engagement</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Weekly polls</li>
                    <li>• Member spotlights</li>
                    <li>• Exclusive first access</li>
                    <li>• Feedback collection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-t from-[#c9a227]/10 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Launch Campaigns?</h3>
          <p className="text-gray-400 mb-8">
            These campaigns are designed to drive viral growth for both merchants and users.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/media-hub"
              className="flex items-center gap-2 bg-[#c9a227] text-[#0a1628] px-6 py-3 rounded-xl font-semibold hover:bg-[#b08d20] transition-colors"
            >
              <Play size={20} />
              Media Hub
            </Link>
            <Link
              href="/merchant-packages"
              className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              <Store size={20} />
              Merchant Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>Campaign ideas? Share at <a href="mailto:marketing@nuqta.ae" className="text-[#c9a227] hover:underline">marketing@nuqta.ae</a></p>
        </div>
      </footer>
    </div>
  );
}
