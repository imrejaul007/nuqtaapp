'use client';

import React, { useState } from 'react';
import Link from 'next/link';

/**
 * NUQTA MERCHANT ENGINES
 *
 * Three distinct commission models based on merchant margin profiles:
 *
 * ENGINE A - High-Margin (40-70%)
 * - Cafes, Restaurants, Salons, Spas, Entertainment, Boutiques
 * - Commission: 15-20%
 * - Cashback: 5-10% (flexible)
 *
 * ENGINE B - Low-Margin (8-20%)
 * - Supermarkets, Electronics, Gold/Jewelry, Grocery
 * - Commission: 5-8%
 * - Cashback: 5% (fixed)
 *
 * ENGINE C - Event/Exhibition Model
 * - Global Village, Exhibitions, Festivals, Corporate Events
 * - Coin unlock via event attendance
 * - Commission: Per-event partnership
 */

type EngineId = 'A' | 'B' | 'C';

export default function MerchantEnginesPage() {
  const [activeEngine, setActiveEngine] = useState<EngineId>('A');

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] py-12 px-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-[#c9a227] text-sm mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Merchant Engines</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Nuqta <span className="text-[#c9a227]">Merchant Engines</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Three commission models optimized for different merchant margin profiles. Choose the engine that fits your business.
          </p>
        </div>
      </div>

      {/* Engine Selector */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { id: 'A' as EngineId, name: 'Engine A', subtitle: 'High-Margin', color: 'emerald', icon: '🏪', margin: '40-70%' },
            { id: 'B' as EngineId, name: 'Engine B', subtitle: 'Low-Margin', color: 'blue', icon: '🛒', margin: '8-20%' },
            { id: 'C' as EngineId, name: 'Engine C', subtitle: 'Event Model', color: 'purple', icon: '🎪', margin: 'Variable' },
          ].map((engine) => (
            <button
              key={engine.id}
              onClick={() => setActiveEngine(engine.id)}
              className={`p-6 rounded-2xl border-2 transition-all text-left ${
                activeEngine === engine.id
                  ? `bg-${engine.color}-500/20 border-${engine.color}-500`
                  : 'bg-white/5 border-white/10 hover:border-white/30'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{engine.icon}</span>
                <div>
                  <h3 className="text-xl font-black text-white">{engine.name}</h3>
                  <p className={`text-sm ${activeEngine === engine.id ? `text-${engine.color}-400` : 'text-slate-400'}`}>
                    {engine.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500">Merchant Margin: {engine.margin}</p>
            </button>
          ))}
        </div>

        {/* Engine Details */}
        {activeEngine === 'A' && <EngineA />}
        {activeEngine === 'B' && <EngineB />}
        {activeEngine === 'C' && <EngineC />}

        {/* Comparison Table */}
        <div className="mt-12">
          <h2 className="text-2xl font-black text-white mb-6">Engine Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-slate-400 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-emerald-400 font-semibold">Engine A</th>
                  <th className="text-center py-4 px-4 text-blue-400 font-semibold">Engine B</th>
                  <th className="text-center py-4 px-4 text-purple-400 font-semibold">Engine C</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Target Merchants', a: 'Cafes, Salons, Boutiques', b: 'Supermarkets, Electronics', c: 'Events, Exhibitions' },
                  { feature: 'Merchant Margin', a: '40-70%', b: '8-20%', c: 'Variable' },
                  { feature: 'Total Commission', a: '15-20%', b: '5-8%', c: 'Partnership Deal' },
                  { feature: 'User Cashback', a: '5-10% (flexible)', b: '5% (fixed)', c: 'Event Coins' },
                  { feature: 'Nuqta Revenue', a: '10-15%', b: '2.5-3%', c: 'Sponsorship + %' },
                  { feature: 'Brand Coins', a: 'Optional (0-10%)', b: 'Required (5%)', c: 'Event-specific' },
                  { feature: 'Coin Unlock', a: 'Immediate', b: 'Immediate', c: 'Event attendance' },
                  { feature: 'Min Spend', a: 'None', b: 'None', c: 'AED 300-500' },
                  { feature: 'Use Case', a: 'Daily purchases', b: 'Weekly shopping', c: 'User acquisition' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-3 px-4 text-slate-300">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-white">{row.a}</td>
                    <td className="py-3 px-4 text-center text-white">{row.b}</td>
                    <td className="py-3 px-4 text-center text-white">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          <Link href="/deck-merchant" className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 hover:bg-emerald-500/20 transition-colors">
            <p className="font-bold text-emerald-400">Engine A Deck →</p>
            <p className="text-xs text-slate-400">For high-margin merchants</p>
          </Link>
          <Link href="/deck-merchant-b" className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 hover:bg-blue-500/20 transition-colors">
            <p className="font-bold text-blue-400">Engine B Deck →</p>
            <p className="text-xs text-slate-400">For low-margin merchants</p>
          </Link>
          <Link href="/deck-gv" className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 hover:bg-purple-500/20 transition-colors">
            <p className="font-bold text-purple-400">Engine C Deck (GV) →</p>
            <p className="text-xs text-slate-400">For events & exhibitions</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ============================================
// ENGINE A - HIGH MARGIN
// ============================================
function EngineA() {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-2 border-emerald-500/30 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🏪</span>
          <div>
            <h2 className="text-2xl font-black text-emerald-400">Engine A: High-Margin Model</h2>
            <p className="text-slate-400">For merchants with 40-70% gross margins</p>
          </div>
        </div>
        <p className="text-slate-300">
          The standard Nuqta model for businesses with healthy margins. Offers flexible cashback rates and generates the highest revenue per transaction. Perfect for daily habit-forming purchases.
        </p>
      </div>

      {/* Target Categories */}
      <div>
        <h3 className="text-xl font-black text-white mb-4">Target Categories</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { category: 'F&B', examples: ['Cafes & Coffee Shops', 'Restaurants', 'QSR & Fast Food', 'Desserts & Bakeries'], margin: '60-70%' },
            { category: 'Beauty & Wellness', examples: ['Salons (Men & Women)', 'Spas', 'Gyms & Fitness', 'Yoga Studios'], margin: '50-65%' },
            { category: 'Entertainment', examples: ['Gaming Zones', 'Activity Centers', 'Movies', 'Experiences'], margin: '50-70%' },
            { category: 'Fashion & Retail', examples: ['Boutiques', 'Streetwear', 'Accessories', 'D2C Brands'], margin: '40-60%' },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-emerald-400">{item.category}</h4>
                <span className="text-xs text-slate-500">{item.margin}</span>
              </div>
              <ul className="text-xs text-slate-400 space-y-1">
                {item.examples.map((ex, j) => (
                  <li key={j}>• {ex}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Commission Structure */}
      <div>
        <h3 className="text-xl font-black text-white mb-4">Commission Structure</h3>
        <div className="bg-white/5 rounded-xl p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-4xl font-black text-emerald-400 mb-2">15-20%</p>
              <p className="text-white font-semibold">Total Commission</p>
              <p className="text-xs text-slate-500">From merchant on each transaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-[#c9a227] mb-2">5-10%</p>
              <p className="text-white font-semibold">User Cashback</p>
              <p className="text-xs text-slate-500">Nuqta Coins (flexible by merchant)</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-blue-400 mb-2">10-15%</p>
              <p className="text-white font-semibold">Nuqta Revenue</p>
              <p className="text-xs text-slate-500">Our take rate</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <h4 className="font-bold text-white mb-3">Optional Add-ons</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-3">
                <p className="font-semibold text-[#c9a227]">Brand Coins (0-10%)</p>
                <p className="text-xs text-slate-400">Merchant-specific coins, drives repeat visits</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="font-semibold text-purple-400">Private Coins (5-100%)</p>
                <p className="text-xs text-slate-400">Promotional campaigns, VIP customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example Transaction */}
      <div className="bg-white/5 rounded-xl p-6">
        <h3 className="text-xl font-black text-white mb-4">Example Transaction</h3>
        <div className="bg-emerald-500/10 rounded-lg p-4">
          <p className="text-slate-300 mb-3">Customer spends <strong className="text-white">AED 100</strong> at a cafe:</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Total Commission (15%)</span>
              <span className="text-white">AED 15</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">→ User Cashback (7%)</span>
              <span className="text-[#c9a227]">AED 7 (Nuqta Coins)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">→ Nuqta Revenue (8%)</span>
              <span className="text-emerald-400">AED 8</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-white/10">
              <span className="text-slate-400">Merchant Receives</span>
              <span className="text-white font-bold">AED 85</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex gap-4">
        <Link href="/deck-merchant" className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-600 transition-colors">
          View Engine A Deck →
        </Link>
        <Link href="/merchant-info" className="bg-white/10 text-white px-6 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors">
          Full Details →
        </Link>
      </div>
    </div>
  );
}

// ============================================
// ENGINE B - LOW MARGIN
// ============================================
function EngineB() {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/30 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🛒</span>
          <div>
            <h2 className="text-2xl font-black text-blue-400">Engine B: Low-Margin Model</h2>
            <p className="text-slate-400">For merchants with 8-20% gross margins</p>
          </div>
        </div>
        <p className="text-slate-300">
          A margin-friendly model for high-volume, low-margin businesses. Fixed cashback rate ensures predictable costs while still driving customer loyalty through Brand Coins.
        </p>
      </div>

      {/* Target Categories */}
      <div>
        <h3 className="text-xl font-black text-white mb-4">Target Categories</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { category: 'Grocery', examples: ['Supermarkets', 'Hypermarkets', 'Convenience Stores', 'Local Grocers'], margin: '15-20%' },
            { category: 'Electronics', examples: ['Mobile Accessories', 'Small Electronics', 'Repair Services', 'Tech Retail'], margin: '10-15%' },
            { category: 'Gold & Jewelry', examples: ['Gold Shops', 'Jewelry Stores', 'Diamond Retailers', 'Watches'], margin: '8-12%' },
            { category: 'Pharmacy', examples: ['Pharmacies', 'Health Stores', 'Medical Supplies', 'Wellness Products'], margin: '15-20%' },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-blue-400">{item.category}</h4>
                <span className="text-xs text-slate-500">{item.margin}</span>
              </div>
              <ul className="text-xs text-slate-400 space-y-1">
                {item.examples.map((ex, j) => (
                  <li key={j}>• {ex}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Commission Structure */}
      <div>
        <h3 className="text-xl font-black text-white mb-4">Commission Structure</h3>
        <div className="bg-white/5 rounded-xl p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-4xl font-black text-blue-400 mb-2">5-8%</p>
              <p className="text-white font-semibold">Total Commission</p>
              <p className="text-xs text-slate-500">Margin-friendly rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-[#c9a227] mb-2">5%</p>
              <p className="text-white font-semibold">User Cashback</p>
              <p className="text-xs text-slate-500">Fixed rate (Brand Coins)</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-emerald-400 mb-2">2.5-3%</p>
              <p className="text-white font-semibold">Nuqta Revenue</p>
              <p className="text-xs text-slate-500">Lower but high volume</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="bg-blue-500/10 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2">Key Difference: Brand Coins Required</h4>
              <p className="text-sm text-slate-300">
                Engine B merchants must use Brand Coins (redeemable only at their store) instead of universal Nuqta Coins. This protects margins while still driving repeat visits.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Example Transaction */}
      <div className="bg-white/5 rounded-xl p-6">
        <h3 className="text-xl font-black text-white mb-4">Example Transaction</h3>
        <div className="bg-blue-500/10 rounded-lg p-4">
          <p className="text-slate-300 mb-3">Customer spends <strong className="text-white">AED 500</strong> at a supermarket:</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Total Commission (5.5%)</span>
              <span className="text-white">AED 27.50</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">→ User Cashback (5%)</span>
              <span className="text-[#c9a227]">AED 25 (Brand Coins)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">→ Nuqta Revenue (0.5%)</span>
              <span className="text-emerald-400">AED 2.50</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-white/10">
              <span className="text-slate-400">Merchant Receives</span>
              <span className="text-white font-bold">AED 472.50</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex gap-4">
        <Link href="/deck-merchant-b" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors">
          View Engine B Deck →
        </Link>
        <Link href="/deck-supermarket" className="bg-white/10 text-white px-6 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors">
          Supermarket Deck →
        </Link>
      </div>
    </div>
  );
}

// ============================================
// ENGINE C - EVENT MODEL
// ============================================
function EngineC() {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🎪</span>
          <div>
            <h2 className="text-2xl font-black text-purple-400">Engine C: Event/Exhibition Model</h2>
            <p className="text-slate-400">For events, exhibitions, and festivals</p>
          </div>
        </div>
        <p className="text-slate-300">
          A unique acquisition-focused model where users receive "Event Coins" that can only be unlocked by attending events or making minimum purchases. Drives massive user acquisition and merchant footfall.
        </p>
      </div>

      {/* Key Concept */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border border-[#c9a227]/30 rounded-xl p-6">
        <h3 className="text-xl font-black text-[#c9a227] mb-4">The Coin Unlock Mechanic</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <p className="text-3xl mb-2">🎫</p>
            <p className="font-bold text-white">Step 1: Get Event Coins</p>
            <p className="text-xs text-slate-400">User receives coins on ticket purchase or event registration</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <p className="text-3xl mb-2">🎪</p>
            <p className="font-bold text-white">Step 2: Attend Event</p>
            <p className="text-xs text-slate-400">Coins remain locked until user checks in at event</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <p className="text-3xl mb-2">💰</p>
            <p className="font-bold text-white">Step 3: Unlock & Spend</p>
            <p className="text-xs text-slate-400">Spend AED 300+ at event merchants to unlock coins</p>
          </div>
        </div>
      </div>

      {/* Target Events */}
      <div>
        <h3 className="text-xl font-black text-white mb-4">Target Events</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { category: 'Exhibitions', examples: ['Global Village', 'Sharjah Expo', 'Ataya Exhibition', 'Bride to Be'], type: 'High footfall' },
            { category: 'Corporate', examples: ['Corporate Premier League', 'Company Events', 'Team Building', 'Award Ceremonies'], type: 'B2B partnership' },
            { category: 'College', examples: ['College Sports Fest', 'Business Fest', 'Cultural Events', 'Freshers Week'], type: 'Student acquisition' },
            { category: 'Entertainment', examples: ['Music Nights', 'Sports Screening', 'Stand-up Comedy', 'Festivals'], type: 'Signature events' },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-purple-400">{item.category}</h4>
                <span className="text-xs text-slate-500">{item.type}</span>
              </div>
              <ul className="text-xs text-slate-400 space-y-1">
                {item.examples.map((ex, j) => (
                  <li key={j}>• {ex}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership Structure */}
      <div>
        <h3 className="text-xl font-black text-white mb-4">Partnership Structure</h3>
        <div className="bg-white/5 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-purple-400 mb-3">For Event Organizers</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <strong>Problem Solved:</strong> Low ticket sales, low AOV, no repeat visitors</li>
                <li>• <strong>Solution:</strong> Cashback on ticket drives registrations</li>
                <li>• <strong>Revenue:</strong> Sponsorship fee + % of merchant transactions</li>
                <li>• <strong>Benefit:</strong> Increased footfall, higher per-visitor spend</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-purple-400 mb-3">For Event Merchants</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <strong>Commission:</strong> 10-15% (event-specific)</li>
                <li>• <strong>Min Spend:</strong> AED 300-500 to unlock coins</li>
                <li>• <strong>Benefit:</strong> Guaranteed foot traffic, higher AOV</li>
                <li>• <strong>Coins:</strong> Event-specific + Brand Coins optional</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Coin Types */}
      <div>
        <h3 className="text-xl font-black text-white mb-4">Event Coin Types</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
            <h4 className="font-bold text-purple-400 mb-2">Event Coins</h4>
            <p className="text-sm text-slate-300 mb-2">Given on ticket/registration. Only usable at that specific event.</p>
            <p className="text-xs text-slate-500">Example: AED 100 for Global Village</p>
          </div>
          <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-4">
            <h4 className="font-bold text-[#c9a227] mb-2">Sponsor Coins</h4>
            <p className="text-sm text-slate-300 mb-2">Branded coins from event sponsors (Du, Forex partners, etc.)</p>
            <p className="text-xs text-slate-500">Example: 50 Du Coins per attendee</p>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
            <h4 className="font-bold text-emerald-400 mb-2">Merchant Coins</h4>
            <p className="text-sm text-slate-300 mb-2">Individual merchant Brand Coins for repeat visits post-event.</p>
            <p className="text-xs text-slate-500">Example: 10% back at specific vendor</p>
          </div>
        </div>
      </div>

      {/* Example Flow */}
      <div className="bg-white/5 rounded-xl p-6">
        <h3 className="text-xl font-black text-white mb-4">Example: Global Village Partnership</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
            <div>
              <p className="font-bold text-white">User Buys GV Ticket</p>
              <p className="text-sm text-slate-400">Receives AED 100 Event Coins (locked) + 50 Sponsor Coins</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
            <div>
              <p className="font-bold text-white">User Attends GV</p>
              <p className="text-sm text-slate-400">Coins unlock upon check-in via Nuqta app QR scan</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
            <div>
              <p className="font-bold text-white">User Spends AED 500 at Merchant</p>
              <p className="text-sm text-slate-400">Uses AED 100 Event Coins → Pays AED 400 cash</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
            <div>
              <p className="font-bold text-white">Merchant Pays Commission (12%)</p>
              <p className="text-sm text-slate-400">AED 60 total → AED 40 to event, AED 20 to Nuqta</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex gap-4">
        <Link href="/deck-gv" className="bg-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-600 transition-colors">
          View GV Deck (Engine C) →
        </Link>
        <Link href="/deck-exhibition" className="bg-white/10 text-white px-6 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors">
          Exhibition Deck →
        </Link>
      </div>
    </div>
  );
}
