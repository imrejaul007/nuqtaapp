'use client';

import React, { useState } from 'react';
import Link from 'next/link';

/**
 * NUQTA BUSINESS PLAYBOOK
 *
 * Comprehensive execution plan covering:
 * - Merchant onboarding strategy
 * - User acquisition channels
 * - Partner programs (College/Corporate)
 * - Events & activations
 * - Marketing packages
 * - Co-Partner brand model
 */

type TabId = 'overview' | 'merchants' | 'users' | 'partners' | 'events' | 'packages' | 'copartner';

export default function BusinessPlaybookPage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  const tabs: { id: TabId; label: string; icon: string }[] = [
    { id: 'overview', label: 'Overview', icon: '🎯' },
    { id: 'merchants', label: 'Merchant Strategy', icon: '🏪' },
    { id: 'users', label: 'User Acquisition', icon: '👥' },
    { id: 'partners', label: 'Partner Programs', icon: '🤝' },
    { id: 'events', label: 'Events & Activations', icon: '🎪' },
    { id: 'packages', label: 'Merchant Packages', icon: '📦' },
    { id: 'copartner', label: 'Co-Partner Model', icon: '💎' },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] py-12 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-[#c9a227] text-sm mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Business Playbook</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Nuqta <span className="text-[#c9a227]">Business Playbook</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Complete execution guide for merchant acquisition, user growth, partnerships, and revenue optimization.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-white/10 sticky top-0 bg-[#0a1628]/95 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-[#0a1628] font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="text-sm">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'merchants' && <MerchantStrategyTab />}
        {activeTab === 'users' && <UserAcquisitionTab />}
        {activeTab === 'partners' && <PartnerProgramsTab />}
        {activeTab === 'events' && <EventsTab />}
        {activeTab === 'packages' && <MerchantPackagesTab />}
        {activeTab === 'copartner' && <CoPartnerTab />}
      </div>
    </div>
  );
}

// ============================================
// OVERVIEW TAB
// ============================================
function OverviewTab() {
  return (
    <div className="space-y-8">
      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'H1 Merchant Target', value: '1,500', sub: 'Live merchants' },
          { label: 'H1 User Target', value: '50K', sub: 'MAU (aggressive)' },
          { label: 'Commission Model', value: '5-20%', sub: 'Based on margin' },
          { label: 'Launch Date', value: 'March 1', sub: '2026' },
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-5 text-center">
            <p className="text-3xl font-black text-[#c9a227]">{stat.value}</p>
            <p className="text-white font-semibold">{stat.label}</p>
            <p className="text-slate-500 text-sm">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Execution Priorities */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border-2 border-[#c9a227]/30 rounded-2xl p-6">
        <h2 className="text-2xl font-black text-[#c9a227] mb-4">Execution Priorities (H1)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-white mb-3">Must Do (Critical Path)</h3>
            <ul className="space-y-2">
              {[
                'App launch (March 1, 2026)',
                'Payment gateway integration (Razorpay)',
                '50 merchant soft launch (pre-Feb)',
                'College MoU (3-5 universities)',
                'First event activation (Global Village)',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-300">
                  <span className="text-red-400">●</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-3">Should Do (Growth Accelerators)</h3>
            <ul className="space-y-2">
              {[
                'BNPL integration (Tabby/Tamara)',
                'Influencer campaign launch',
                'Fleet market pilot (1-2 locations)',
                'Corporate MoU (1-2 companies)',
                'Referral system live',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-300">
                  <span className="text-amber-400">●</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Category Tiers */}
      <div>
        <h2 className="text-2xl font-black text-white mb-4">Category Priority Tiers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              tier: 'Tier 1',
              color: 'red',
              title: 'High-Frequency (CORE)',
              categories: ['F&B (Cafes, QSR, Restaurants)', 'Grocery & Essentials', 'Salons & Grooming', 'Fitness & Wellness'],
              note: 'Creates the "check Nuqta before you pay" habit',
            },
            {
              tier: 'Tier 2',
              color: 'orange',
              title: 'High-Value (GMV)',
              categories: ['Fashion & Accessories', 'Electronics & Gadgets', 'Health & Medical', 'Home Services'],
              note: 'Less frequent, higher ticket sizes',
            },
            {
              tier: 'Tier 3',
              color: 'yellow',
              title: 'Experience (Events)',
              categories: ['Events & Experiences', 'Entertainment', 'Travel (Local)', 'Concerts & Festivals'],
              note: 'Perfect for event-based acquisition',
            },
            {
              tier: 'Tier 4',
              color: 'green',
              title: 'Long-Tail (Expansion)',
              categories: ['Education & Learning', 'Automobile', 'Kids & Family', 'Pet Care'],
              note: 'Added after PMF, not Day 1',
            },
          ].map((tier, i) => (
            <div key={i} className={`bg-${tier.color}-500/10 border border-${tier.color}-500/30 rounded-xl p-4`}>
              <div className={`text-${tier.color}-400 font-bold text-sm mb-1`}>{tier.tier}</div>
              <h3 className="font-bold text-white mb-2">{tier.title}</h3>
              <ul className="text-sm text-slate-400 space-y-1 mb-3">
                {tier.categories.map((cat, j) => (
                  <li key={j}>• {cat}</li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 italic">{tier.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Channels */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 rounded-xl p-5">
          <h3 className="text-lg font-bold text-emerald-400 mb-3">Merchant Onboarding</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>• Door-to-door sales team</li>
            <li>• Event merchant recruitment</li>
            <li>• Agency partnerships</li>
            <li>• Competitor merchant targeting</li>
            <li>• Niche-specific marketing</li>
          </ul>
        </div>
        <div className="bg-white/5 rounded-xl p-5">
          <h3 className="text-lg font-bold text-blue-400 mb-3">User Acquisition</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>• College campus programs</li>
            <li>• Corporate employee programs</li>
            <li>• Event activations</li>
            <li>• Influencer marketing</li>
            <li>• Referral system</li>
          </ul>
        </div>
        <div className="bg-white/5 rounded-xl p-5">
          <h3 className="text-lg font-bold text-purple-400 mb-3">Revenue Streams</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>• Merchant commission (5-20%)</li>
            <li>• Marketing packages (AED 5-30K)</li>
            <li>• Event partnerships</li>
            <li>• Advertisement portal</li>
            <li>• Co-partner brand equity</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MERCHANT STRATEGY TAB
// ============================================
function MerchantStrategyTab() {
  return (
    <div className="space-y-8">
      {/* Target Breakdown */}
      <div>
        <h2 className="text-2xl font-black text-white mb-4">H1 Merchant Mix (250 Target)</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { category: 'F&B', count: 100, pct: '40%', examples: 'Cafes, QSR, Casual Dining, Desserts', engine: 'A', commission: '15%' },
            { category: 'Salons/Fitness/Wellness', count: 75, pct: '30%', examples: 'Grooming, Gyms, Yoga', engine: 'A', commission: '15%' },
            { category: 'Fashion/Events', count: 55, pct: '22%', examples: 'Fashion Retail, Boutiques, Pop-ups', engine: 'Mixed', commission: '10-15%' },
            { category: 'Grocery/Retail', count: 20, pct: '8%', examples: 'Supermarkets, Convenience', engine: 'B', commission: '5%' },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-2xl font-black text-[#c9a227]">{item.count}</span>
                <span className="text-slate-500 text-sm">{item.pct}</span>
              </div>
              <h3 className="font-bold text-white mb-1">{item.category}</h3>
              <p className="text-xs text-slate-400 mb-2">{item.examples}</p>
              <div className="flex gap-2">
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Engine {item.engine}</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">{item.commission}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Onboarding Channels */}
      <div className="bg-white/5 rounded-2xl p-6">
        <h2 className="text-2xl font-black text-white mb-4">Onboarding Channels</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-emerald-400 mb-3">Direct Channels</h3>
            <div className="space-y-3">
              {[
                { channel: 'Door-to-Door Sales', desc: 'Field team visiting merchants directly', target: '100+ merchants/month' },
                { channel: 'Event Recruitment', desc: 'Onboard merchants at exhibitions', target: '20-30 per event' },
                { channel: 'Referral (Merchant)', desc: 'Existing merchants refer others', target: '15% of new signups' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-white">{item.channel}</span>
                    <span className="text-xs text-[#c9a227]">{item.target}</span>
                  </div>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-blue-400 mb-3">Target Merchant Sources</h3>
            <div className="space-y-3">
              {[
                { source: 'Competitor Merchants', desc: 'Magicpin, District, Wyld, Cherry merchants', priority: 'High' },
                { source: 'Local Stores', desc: 'Independent shops in key areas', priority: 'High' },
                { source: 'E-commerce Brands', desc: 'D2C brands wanting offline presence', priority: 'Medium' },
                { source: 'New Businesses', desc: 'Recently opened establishments', priority: 'Medium' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-white">{item.source}</span>
                    <span className={`text-xs ${item.priority === 'High' ? 'text-red-400' : 'text-amber-400'}`}>{item.priority}</span>
                  </div>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Niche Marketing Strategy */}
      <div>
        <h2 className="text-2xl font-black text-white mb-4">Niche-Wise Marketing Strategy</h2>
        <p className="text-slate-400 mb-4">Each niche gets dedicated marketing support to help increase merchant sales:</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { niche: 'Cafes & Restaurants', tactics: ['Run targeted Meta ads', 'Food influencer collabs', 'Google My Business optimization', 'UGC content creation'] },
            { niche: 'Salons & Wellness', tactics: ['Before/after content', 'Local influencer partnerships', 'WhatsApp marketing', 'Seasonal promotions'] },
            { niche: 'Fashion & Retail', tactics: ['Style influencer campaigns', 'Try-on content', 'Flash sale promotions', 'Social commerce integration'] },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-4">
              <h3 className="font-bold text-[#c9a227] mb-3">{item.niche}</h3>
              <ul className="text-sm text-slate-300 space-y-1">
                {item.tactics.map((t, j) => (
                  <li key={j}>• {t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Merchant Tools */}
      <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-2xl p-6">
        <h2 className="text-2xl font-black text-emerald-400 mb-4">Merchant Tools & Support</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { tool: 'Nuqta Board', desc: 'QR code display for in-store payments' },
            { tool: 'Merchant Dashboard', desc: 'Real-time analytics & campaign management' },
            { tool: 'Verified Badge', desc: 'Levels: Verified → Trusted → Preferred → Signature' },
            { tool: 'Marketing Support', desc: 'Content creation, ads management, influencer access' },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-4 text-center">
              <p className="font-bold text-white mb-1">{item.tool}</p>
              <p className="text-xs text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// USER ACQUISITION TAB
// ============================================
function UserAcquisitionTab() {
  return (
    <div className="space-y-8">
      {/* Habit Loops */}
      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6">
        <h2 className="text-2xl font-black text-purple-400 mb-4">User Habit Loops</h2>
        <p className="text-slate-300 mb-4">Core engagement mechanics to drive daily app usage:</p>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { loop: 'Daily Smart Save Task', desc: 'One task per day to earn coins', reward: '+10 Nuqta Coins' },
            { loop: 'Social Proof Feed', desc: 'See what friends are saving', reward: 'Social validation' },
            { loop: 'Savings Leaderboard', desc: 'Compete with friends/community', reward: 'Monthly prizes' },
            { loop: 'Streak Rewards', desc: 'Consecutive daily check-ins', reward: 'Bonus multiplier' },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-4">
              <h3 className="font-bold text-white mb-2">{item.loop}</h3>
              <p className="text-sm text-slate-400 mb-2">{item.desc}</p>
              <span className="text-xs bg-[#c9a227]/20 text-[#c9a227] px-2 py-1 rounded">{item.reward}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Acquisition Channels */}
      <div>
        <h2 className="text-2xl font-black text-white mb-4">Acquisition Channels</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-xl p-5">
            <h3 className="text-lg font-bold text-blue-400 mb-4">Organic Channels</h3>
            <div className="space-y-3">
              {[
                { channel: 'College Campus Program', cac: 'AED 15-20', desc: 'Ambassador-driven student acquisition' },
                { channel: 'Merchant QR Scans', cac: 'AED 10-15', desc: 'Users discover via merchant checkout' },
                { channel: 'Referral System', cac: 'AED 20-25', desc: 'User refers friend, both earn coins' },
                { channel: 'Event Activations', cac: 'AED 25-30', desc: 'Free coins for event attendees' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                  <div>
                    <p className="font-semibold text-white">{item.channel}</p>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                  <span className="text-emerald-400 font-mono text-sm">{item.cac}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-5">
            <h3 className="text-lg font-bold text-amber-400 mb-4">Paid Channels</h3>
            <div className="space-y-3">
              {[
                { channel: 'Meta Ads (Instagram/FB)', cac: 'AED 35-45', desc: 'Targeted local campaigns' },
                { channel: 'Influencer Marketing', cac: 'AED 30-40', desc: 'Barter + paid collaborations' },
                { channel: 'Google Ads', cac: 'AED 40-50', desc: 'Search + shopping campaigns' },
                { channel: 'Content Marketing', cac: 'AED 25-35', desc: 'Viral UGC & savings content' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                  <div>
                    <p className="font-semibold text-white">{item.channel}</p>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                  <span className="text-amber-400 font-mono text-sm">{item.cac}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Viral Campaigns */}
      <div>
        <h2 className="text-2xl font-black text-white mb-4">Viral Campaign Ideas</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              name: 'Calculate Your Savings',
              desc: 'Upload bills, see how much you would have saved with Nuqta',
              mechanic: 'Video testimonial + earn that amount as cashback (cap AED 300)',
            },
            {
              name: 'Nuqta Cash Hunting',
              desc: 'Co-branded packaging with QR codes',
              mechanic: 'Scan product packaging to earn surprise coins',
            },
            {
              name: 'Sports Fever',
              desc: 'Support your team, win jerseys',
              mechanic: 'Vote for IPL team via app, winners get jersey + branded coins',
            },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-5">
              <h3 className="font-bold text-[#c9a227] mb-2">{item.name}</h3>
              <p className="text-sm text-slate-300 mb-3">{item.desc}</p>
              <p className="text-xs text-slate-500 bg-white/5 rounded p-2">{item.mechanic}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Strategy */}
      <div className="bg-white/5 rounded-2xl p-6">
        <h2 className="text-2xl font-black text-white mb-4">Content & Social Strategy</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { type: 'Photo/Video Reviews', platform: 'Instagram, TikTok' },
            { type: 'Hero or Trash', platform: 'YouTube Shorts' },
            { type: 'UGC Savings Stories', platform: 'All platforms' },
            { type: 'AI Meme Style', platform: 'Twitter, Instagram' },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-4 text-center">
              <p className="font-bold text-white mb-1">{item.type}</p>
              <p className="text-xs text-slate-400">{item.platform}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-sm text-slate-400">
            <strong className="text-white">WhatsApp Groups:</strong> UAE Deals, College Offers, Night Life, Girls Gang - community-driven discovery
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// PARTNER PROGRAMS TAB
// ============================================
function PartnerProgramsTab() {
  return (
    <div className="space-y-8">
      {/* College Program */}
      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-6">
        <h2 className="text-2xl font-black text-blue-400 mb-2">College Partnership Program</h2>
        <p className="text-slate-400 mb-6">Sign MoU with universities for exclusive student benefits</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-white mb-3">Why Partner?</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Exclusive discounts for college students</li>
              <li>• Event sponsorship & activations</li>
              <li>• Internship & placement opportunities</li>
              <li>• Student of the Month rewards</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-3">Student Benefits</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Student of the Month: 1,000 Nuqta + 5,000 Branded coins</li>
              <li>• Voting participants: 100 Branded coins</li>
              <li>• Event passes at exclusive rates</li>
              <li>• Ambassador program (earn coins, passes, certificates)</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-white/5 rounded-xl p-4">
          <h3 className="font-bold text-[#c9a227] mb-3">College Business Fest Model</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-slate-400 mb-1">Theme</p>
              <p className="text-white">Student Entrepreneurship</p>
            </div>
            <div>
              <p className="text-slate-400 mb-1">Prize</p>
              <p className="text-white">100K seed funding for winner</p>
            </div>
            <div>
              <p className="text-slate-400 mb-1">Goal</p>
              <p className="text-white">2,000-3,000 app downloads</p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-white/10">
            <p className="text-xs text-slate-400">
              <strong>Rules:</strong> Only Nuqta payment = 50% off + cashback. Other payment = no discount.
            </p>
          </div>
        </div>
      </div>

      {/* Corporate Program */}
      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6">
        <h2 className="text-2xl font-black text-purple-400 mb-2">Corporate Partnership Program</h2>
        <p className="text-slate-400 mb-6">Sign MoU with companies for exclusive employee benefits</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-white mb-3">Why Partner?</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Exclusive discounts for employees</li>
              <li>• Corporate event sponsorship</li>
              <li>• Employee engagement programs</li>
              <li>• Referral bonus system</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-3">Employee Benefits</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Employee of the Month: 1,000 Nuqta + 5,000 Branded coins</li>
              <li>• Voting participants: 100 Branded coins</li>
              <li>• Event passes at exclusive rates</li>
              <li>• Future: Advance salary / BNPL (Phase 2)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Brand Partnerships */}
      <div>
        <h2 className="text-2xl font-black text-white mb-4">Brand Partnerships</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              type: 'Co-Branded Packaging',
              desc: 'Scan product packaging to earn coins',
              example: 'FMCG brands, beverages, snacks',
            },
            {
              type: 'Event Sponsorship',
              desc: 'Brand sponsors event, users earn Brand Coins',
              example: 'Du SIM, Forex partners, banks',
            },
            {
              type: 'Merchant Social Share',
              desc: 'Users share merchant posts, earn coins',
              example: 'All merchant categories',
            },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-5">
              <h3 className="font-bold text-[#c9a227] mb-2">{item.type}</h3>
              <p className="text-sm text-slate-300 mb-2">{item.desc}</p>
              <p className="text-xs text-slate-500">e.g., {item.example}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Referral System */}
      <div className="bg-white/5 rounded-2xl p-6">
        <h2 className="text-2xl font-black text-white mb-4">Referral System</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-500/10 rounded-xl p-4">
            <h3 className="font-bold text-emerald-400 mb-2">Merchant Referral</h3>
            <p className="text-sm text-slate-300">Merchants refer other merchants and earn extra commission or Nuqta coins on their referral's transactions.</p>
          </div>
          <div className="bg-blue-500/10 rounded-xl p-4">
            <h3 className="font-bold text-blue-400 mb-2">User Referral</h3>
            <p className="text-sm text-slate-300">Users refer friends. Both referrer and referee earn Nuqta coins when referee makes first transaction.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// EVENTS TAB
// ============================================
function EventsTab() {
  return (
    <div className="space-y-8">
      {/* Event Types */}
      <div>
        <h2 className="text-2xl font-black text-white mb-4">Event Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { type: 'Exhibitions', events: ['Global Village', 'Sharjah Expo', 'Ataya Exhibition', 'Bride to Be'] },
            { type: 'Corporate', events: ['Corporate Premier League', 'Company Events', 'Team Building'] },
            { type: 'College', events: ['College Sports Fest', 'Business Fest', 'Cultural Events'] },
            { type: 'Signature', events: ['Music Night', 'Sports Screening', 'Stand-up Comedy'] },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-4">
              <h3 className="font-bold text-[#c9a227] mb-3">{item.type}</h3>
              <ul className="text-sm text-slate-300 space-y-1">
                {item.events.map((e, j) => (
                  <li key={j}>• {e}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Event Partnership Model */}
      <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-6">
        <h2 className="text-2xl font-black text-[#c9a227] mb-4">Event Partnership Model</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-bold text-white mb-3">Problems We Solve</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>❌ Low ticket sales / registration / footfall</li>
              <li>❌ Low average order value (AOV)</li>
              <li>❌ No repeat customers</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-3">Our Solutions</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>✅ Cashback on ticket amount (redeemable on purchases)</li>
              <li>✅ AED 100 event cash on registration (min spend AED 500)</li>
              <li>✅ Merchant coins drive repeat visits</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 rounded-xl p-4">
          <h3 className="font-bold text-white mb-3">Signature Event Model</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-slate-400">Booking</p>
              <p className="text-white">Only via Nuqta app</p>
            </div>
            <div>
              <p className="text-slate-400">Discount</p>
              <p className="text-white">20% off ticket price</p>
            </div>
            <div>
              <p className="text-slate-400">Cashback</p>
              <p className="text-white">30% in Nuqta Coins + 10% Branded</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fleet Market */}
      <div className="bg-white/5 rounded-2xl p-6">
        <h2 className="text-2xl font-black text-white mb-4">Fleet Market (Nuqta-Only Payment)</h2>
        <p className="text-slate-400 mb-4">Pop-up stalls at high-traffic locations where only Nuqta payment is accepted</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-emerald-400 mb-3">Locations</h3>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• Shopping malls</li>
              <li>• Residential societies</li>
              <li>• Event halls</li>
              <li>• College campuses</li>
              <li>• Parks</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-blue-400 mb-3">Rules</h3>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• Nuqta payment = 50% off + cashback</li>
              <li>• Other payment = no discount</li>
              <li>• Commission model for merchants</li>
              <li>• Frequency: Every weekend</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Target Events List */}
      <div>
        <h2 className="text-2xl font-black text-white mb-4">Target Events (H1)</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: 'Global Village', type: 'Exhibition', priority: 'Critical' },
            { name: 'Sharjah Expo', type: 'Exhibition', priority: 'High' },
            { name: 'Kezan Events', type: 'Corporate', priority: 'High' },
            { name: 'Skyrose Exhibition', type: 'Exhibition', priority: 'Medium' },
            { name: 'Empower Her AE', type: 'Community', priority: 'Medium' },
            { name: 'Orange Avenue', type: 'Lifestyle', priority: 'Medium' },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-xs text-slate-400">{item.type}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${
                item.priority === 'Critical' ? 'bg-red-500/20 text-red-400' :
                item.priority === 'High' ? 'bg-amber-500/20 text-amber-400' :
                'bg-slate-500/20 text-slate-400'
              }`}>{item.priority}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// MERCHANT PACKAGES TAB
// ============================================
function MerchantPackagesTab() {
  return (
    <div className="space-y-8">
      {/* Engine Overview */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border border-[#c9a227]/30 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-black text-[#c9a227] mb-4">Three Merchant Engines</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-emerald-500/10 rounded-lg p-4">
            <h3 className="font-bold text-emerald-400 mb-2">Engine A: High-Margin</h3>
            <p className="text-xs text-slate-400">40-70% margin • 15-20% commission</p>
            <p className="text-xs text-slate-500 mt-1">F&B, Salons, Entertainment, Boutiques</p>
          </div>
          <div className="bg-blue-500/10 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">Engine B: Low-Margin</h3>
            <p className="text-xs text-slate-400">8-20% margin • 5-8% commission</p>
            <p className="text-xs text-slate-500 mt-1">Supermarkets, Electronics, Gold, Pharmacy</p>
          </div>
          <div className="bg-purple-500/10 rounded-lg p-4">
            <h3 className="font-bold text-purple-400 mb-2">Engine C: Events</h3>
            <p className="text-xs text-slate-400">Variable • Partnership deals</p>
            <p className="text-xs text-slate-500 mt-1">Exhibitions, Festivals, Corporate Events</p>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-4 text-center">
          <a href="/merchant-engines" className="text-[#c9a227] hover:underline">View full engine details →</a>
        </p>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Merchant Packages (Engine A)</h2>
        <p className="text-slate-400">For high-margin merchants (40-70%): F&B, Salons, Entertainment, Boutiques</p>
      </div>

      {/* Package Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            name: 'Free',
            color: 'slate',
            marketingSpend: 'AED 0',
            commission: '20%',
            nuqtaCoin: '5-10%',
            ourShare: '10-15%',
            subscription: 'AED 0 (<10K sales) / AED 100 (>10K)',
            features: ['Basic listing', 'QR payments', 'Basic analytics'],
            popular: false,
          },
          {
            name: 'Basic',
            color: 'blue',
            marketingSpend: 'AED 5K',
            commission: '18%',
            nuqtaCoin: '5-10%',
            ourShare: '8-13%',
            subscription: 'Included',
            features: ['Performance marketing', 'Content creation', 'Influencer marketing', 'AED 5K in-app promo credit'],
            popular: false,
          },
          {
            name: 'Golden',
            color: 'amber',
            marketingSpend: 'AED 15K',
            commission: '17%',
            nuqtaCoin: '5-10%',
            ourShare: '7-12%',
            subscription: 'Included',
            features: ['All Basic features', 'Priority placement', 'Dedicated support', 'AED 15K in-app promo credit'],
            popular: true,
          },
          {
            name: 'Diamond',
            color: 'purple',
            marketingSpend: 'AED 30K',
            commission: '15%',
            nuqtaCoin: '5-10%',
            ourShare: '5-10%',
            subscription: 'Included',
            features: ['All Golden features', 'VIP merchant badge', 'Custom campaigns', 'AED 30K in-app promo credit'],
            popular: false,
          },
        ].map((pkg, i) => (
          <div key={i} className={`relative bg-white/5 rounded-2xl p-6 border-2 ${
            pkg.popular ? 'border-[#c9a227]' : 'border-white/10'
          }`}>
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c9a227] text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
            )}
            <h3 className={`text-2xl font-black text-${pkg.color}-400 mb-4`}>{pkg.name}</h3>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Marketing Spend</span>
                <span className="text-white font-bold">{pkg.marketingSpend}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Total Commission</span>
                <span className="text-white font-bold">{pkg.commission}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">User Cashback</span>
                <span className="text-emerald-400">{pkg.nuqtaCoin}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Nuqta Revenue</span>
                <span className="text-[#c9a227]">{pkg.ourShare}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Subscription</span>
                <span className="text-white text-xs">{pkg.subscription}</span>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="text-xs text-slate-400 mb-2">Includes:</p>
              <ul className="text-xs text-slate-300 space-y-1">
                {pkg.features.map((f, j) => (
                  <li key={j}>✓ {f}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Optional Add-ons */}
      <div className="bg-white/5 rounded-2xl p-6">
        <h3 className="text-xl font-black text-white mb-4">Optional Add-ons (All Packages)</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-bold text-[#c9a227] mb-2">Brand Coins (0-10%)</h4>
            <p className="text-sm text-slate-400">Merchant-specific coins that can only be redeemed at their store. Drives repeat visits.</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-bold text-purple-400 mb-2">Private Coins (5-100%)</h4>
            <p className="text-sm text-slate-400">Special promotional coins for campaigns, events, or VIP customers.</p>
          </div>
        </div>
      </div>

      {/* Merchant Loyalty Mechanics */}
      <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-6">
        <h3 className="text-xl font-black text-orange-400 mb-2">Merchant Loyalty Mechanics</h3>
        <p className="text-slate-400 mb-4">Beyond cashback - build habit, not just one-time visits</p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {/* Streak Rewards */}
          <div className="bg-white/5 rounded-xl p-4">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-orange-500/30 flex items-center justify-center text-xs">🔥</span>
              Streak Rewards
            </h4>
            <ul className="text-sm text-slate-300 space-y-2">
              <li className="flex justify-between">
                <span>&ldquo;Visit 4 times this month&rdquo;</span>
                <span className="text-green-400">+5% extra</span>
              </li>
              <li className="flex justify-between">
                <span>&ldquo;3-day streak&rdquo;</span>
                <span className="text-green-400">+50 coins</span>
              </li>
              <li className="flex justify-between">
                <span>&ldquo;30-day streak&rdquo;</span>
                <span className="text-[#c9a227]">+1,000 coins</span>
              </li>
            </ul>
          </div>

          {/* Category Challenges */}
          <div className="bg-white/5 rounded-xl p-4">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center text-xs">🎯</span>
              Category Challenges
            </h4>
            <ul className="text-sm text-slate-300 space-y-2">
              <li className="flex justify-between">
                <span>&ldquo;Try 3 new cafes&rdquo;</span>
                <span className="text-green-400">Unlock bonus</span>
              </li>
              <li className="flex justify-between">
                <span>&ldquo;Visit 5 salons&rdquo;</span>
                <span className="text-green-400">+150 coins</span>
              </li>
              <li className="flex justify-between">
                <span>&ldquo;Explore 10 merchants&rdquo;</span>
                <span className="text-[#c9a227]">Explorer badge</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-3 text-center">
          <p className="text-sm text-slate-300">
            <span className="text-orange-400 font-bold">Key Insight:</span> Users return for the challenge, not just the reward. This builds habit loops, driving consistent repeat visits.
          </p>
        </div>
      </div>

      {/* Price Engineering */}
      <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-2xl p-6">
        <h3 className="text-xl font-black text-emerald-400 mb-4">Price Engineering Strategy</h3>
        <p className="text-slate-300 mb-4">Help merchants optimize pricing to maximize perceived value:</p>
        <ul className="text-sm text-slate-300 space-y-2">
          <li>• Update selling prices to 20% higher than current</li>
          <li>• Offer 20% Nuqta discount (price returns to original)</li>
          <li>• Customer perceives they're getting a deal</li>
          <li>• Brand value increases (higher listed price = premium perception)</li>
          <li>• Dynamic discounts based on demand (airline pricing model)</li>
        </ul>
      </div>
    </div>
  );
}

// ============================================
// CO-PARTNER TAB
// ============================================
function CoPartnerTab() {
  return (
    <div className="space-y-8">
      {/* Philosophy */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border-2 border-[#c9a227]/30 rounded-2xl p-6">
        <h2 className="text-2xl font-black text-[#c9a227] mb-4">Co-Partner Brand Model</h2>
        <p className="text-lg text-slate-300 mb-4">
          "We convert marketing spend into ownership by backing founders who sell through Nuqta — content, GMV, and growth come naturally."
        </p>
        <div className="bg-white/5 rounded-xl p-4">
          <p className="text-sm text-slate-400">
            <strong className="text-white">Core Philosophy:</strong> Nuqta partners with independent founders to build consumer brands by investing capital instead of spending on marketing, while treating each brand as a normal merchant on the Nuqta platform.
          </p>
        </div>
      </div>

      {/* Investment Structure */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 rounded-xl p-6 text-center">
          <p className="text-4xl font-black text-[#c9a227] mb-2">AED 50K</p>
          <p className="text-white font-semibold">Nuqta Investment</p>
          <p className="text-slate-400 text-sm">~$13,600 USD</p>
        </div>
        <div className="bg-white/5 rounded-xl p-6 text-center">
          <p className="text-4xl font-black text-emerald-400 mb-2">50%</p>
          <p className="text-white font-semibold">Equity Ownership</p>
          <p className="text-slate-400 text-sm">Profit sharing</p>
        </div>
        <div className="bg-white/5 rounded-xl p-6 text-center">
          <p className="text-4xl font-black text-blue-400 mb-2">0%</p>
          <p className="text-white font-semibold">Nuqta Commission</p>
          <p className="text-slate-400 text-sm">Privileged merchant</p>
        </div>
      </div>

      {/* Why It's Worth It */}
      <div className="bg-white/5 rounded-2xl p-6">
        <h3 className="text-xl font-black text-white mb-4">Why This Investment Is Worth It (For Nuqta)</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'AED 50K replaces AED 10-15K/month content & marketing cost',
            'Lifetime indirect marketing support',
            'Founder-driven content (higher trust & conversion)',
            'Continuous offline + online presence',
            'Revenue generation from day one',
            'Optional execution control via Nuqta systems',
            'Zero paid ads required',
            'Marketing spend becomes an asset, not expense',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
              <span className="text-emerald-400">✓</span> {item}
            </div>
          ))}
        </div>
      </div>

      {/* Operating Model */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
          <h3 className="font-bold text-blue-400 mb-3">For Nuqta</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>• Brand treated as general merchant</li>
            <li>• Merchant gets privilege visibility</li>
            <li>• Standard Nuqta rules apply</li>
            <li>• Stall allocation via Nuqta system</li>
            <li>• Two agreements: Merchant (public) + Co-Partner (private)</li>
          </ul>
        </div>
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5">
          <h3 className="font-bold text-purple-400 mb-3">For Brand</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>• Nuqta acts as investor + distribution partner</li>
            <li>• Brand operates independently</li>
            <li>• No public "Nuqta ownership" branding</li>
            <li>• Founder responsible for execution</li>
            <li>• Daily content creation expected</li>
          </ul>
        </div>
      </div>

      {/* Funds Provided */}
      <div className="bg-white/5 rounded-2xl p-6">
        <h3 className="text-xl font-black text-white mb-4">Nuqta Provides</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { item: 'Capital Investment', value: 'AED 50K' },
            { item: 'Office/Workspace', value: 'Where applicable' },
            { item: 'Marketing Support', value: 'Indirect' },
            { item: 'Platform Access', value: 'Full Nuqta integration' },
            { item: 'Fleet Ecosystem', value: 'Event & stall access' },
            { item: 'Paid Ads', value: 'None required' },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-3 flex justify-between">
              <span className="text-slate-400">{item.item}</span>
              <span className="text-white font-semibold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Approved Categories */}
      <div>
        <h3 className="text-xl font-black text-white mb-4">Approved Brand Categories</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { category: 'Food', items: ['Food truck', 'Food stalls', 'Momos', 'Burgers', 'Pizza', 'Chaat', 'Desserts', 'Bakery'] },
            { category: 'Drinks', items: ['Mocktails', 'Fresh juice', 'Coconut water', 'Bubble tea', 'Cold brew', 'Energy drinks'] },
            { category: 'Fashion', items: ['Handmade jewellery', 'Streetwear', 'Perfumes', 'Home fragrance', 'Organic skincare', 'Footwear'] },
            { category: 'Other', items: ['Gifting', 'Pet care', 'Baby essentials', 'Merchandise', 'Accessories'] },
          ].map((cat, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-4">
              <h4 className="font-bold text-[#c9a227] mb-2">{cat.category}</h4>
              <ul className="text-xs text-slate-400 space-y-1">
                {cat.items.map((item, j) => (
                  <li key={j}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Sales Channels */}
      <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-2xl p-6">
        <h3 className="text-xl font-black text-emerald-400 mb-4">Sales Channels</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-white mb-2">Online</h4>
            <p className="text-sm text-slate-300">Nuqta App (discovery, cashback, loyalty)</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Offline (Fleet-Driven)</h4>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• Fleet stalls & food trucks</li>
              <li>• Malls, events, colleges, societies</li>
              <li>• Every weekend, multiple locations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Financial Structure */}
      <div className="bg-white/5 rounded-2xl p-6">
        <h3 className="text-xl font-black text-white mb-4">Financial Structure</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-bold text-amber-400 mb-2">Salaries</h4>
            <p className="text-sm text-slate-400">Founder + team salaries paid from brand revenue</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-bold text-emerald-400 mb-2">User Rewards</h4>
            <p className="text-sm text-slate-400">10-15% cashback in Nuqta Coins (standard rules)</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-bold text-blue-400 mb-2">Profits</h4>
            <p className="text-sm text-slate-400">Net profits shared 50:50 per equity agreement</p>
          </div>
        </div>
      </div>

      {/* Scale Potential */}
      <div className="text-center bg-[#c9a227]/10 rounded-2xl p-6">
        <h3 className="text-2xl font-black text-[#c9a227] mb-2">Scales to 30+ Brands</h3>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Founders run businesses independently. Nuqta manages platform, not operations. Same merchant system, same rules. Low operational load per brand. Risk isolated per merchant. Content & GMV scale organically.
        </p>
        <p className="text-lg font-bold text-white mt-4">This is merchant-led growth, not brand micromanagement.</p>
      </div>
    </div>
  );
}
