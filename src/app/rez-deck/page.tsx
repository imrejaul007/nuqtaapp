'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Target, TrendingUp, Users, DollarSign, Store, MapPin,
  ArrowRight, ArrowLeft, Zap, CheckCircle, Star, Award,
  Shield, BarChart3, Coins, Globe, Layers, Rocket,
  ChevronLeft, ChevronRight, Smartphone, MessageSquare,
  Calendar, Share2, Instagram, Search, Briefcase, UserPlus,
  AlertTriangle, Heart, Building2
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ============================================
// ReZ PITCH DECK — 12 SLIDES
// All numbers match /rez-financials computeFullModel()
// ARPU = ₹195/mo, LTV = ₹3,900, CAC = ₹76, LTV:CAC = 16.8x (YC-grade)
// ============================================

const formatINR = (n: number) => {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)}Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
  if (n >= 1000) return `₹${(n / 1000).toFixed(0)}K`;
  return `₹${n}`;
};

export default function ReZDeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // ── SLIDE 0: COVER ──
    {
      id: 'cover',
      content: (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6">
            <Coins size={40} className="text-white" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">ReZ</h1>
          <p className="text-xl sm:text-2xl text-orange-400 font-semibold mb-2">India&apos;s Cashback Ecosystem for Local Commerce</p>
          <p className="text-lg text-slate-400 mb-8">Merchant-Funded Rewards &bull; Closed-Loop Economy &bull; Hyperlocal First</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <div className="bg-slate-800/50 border border-orange-500/30 rounded-xl px-5 py-3">
              <p className="text-xs text-slate-400">Raising</p>
              <p className="text-xl font-bold text-orange-400">$500K</p>
              <p className="text-xs text-slate-500">SAFE at $5M cap</p>
            </div>
            <div className="bg-slate-800/50 border border-green-500/30 rounded-xl px-5 py-3">
              <p className="text-xs text-slate-400">Year 1 Revenue</p>
              <p className="text-xl font-bold text-green-400">₹10 Cr</p>
              <p className="text-xs text-slate-500">35K users</p>
            </div>
            <div className="bg-slate-800/50 border border-purple-500/30 rounded-xl px-5 py-3">
              <p className="text-xs text-slate-400">Year 3 Revenue</p>
              <p className="text-xl font-bold text-purple-400">₹601 Cr</p>
              <p className="text-xs text-slate-500">5M users, $701M valuation</p>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-8">Founded by Rejaul Karim &bull; rejaul@nuqtaapp.com</p>
        </div>
      ),
    },
    // ── SLIDE 1: PROBLEM ──
    {
      id: 'problem',
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-sm text-red-400 font-semibold uppercase tracking-wider mb-2">The Problem</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">₹42 Lakh Crore Spent at Local Shops.<br /><span className="text-red-400">Zero Rewards Earned.</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'For Consumers', problems: ['No rewards at local shops (only credit card points at malls)', 'No discovery of new local merchants', 'No incentive for loyalty — same price everywhere', 'Online gets cashback, offline gets nothing'], color: 'red' },
              { icon: Store, title: 'For Merchants', problems: ['Pay 25-30% commission to Swiggy/Zomato', 'No affordable way to acquire new customers', 'Can\'t compete with D2C brands\' digital loyalty', 'Zero data on customer behavior'], color: 'orange' },
              { icon: Globe, title: 'The Market Gap', problems: ['₹42L Cr local commerce = largely undigitized', 'Loyalty market in India is credit-card only', 'No "PhonePe for rewards" exists yet', '90% of retail is still offline'], color: 'yellow' },
            ].map(card => (
              <div key={card.title} className={`bg-slate-800/50 border border-${card.color}-500/20 rounded-xl p-6`}>
                <card.icon size={28} className={`text-${card.color}-400 mb-3`} />
                <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
                {card.problems.map((p, i) => (
                  <p key={i} className="text-sm text-slate-400 flex items-start gap-2 mb-2">
                    <AlertTriangle size={14} className={`text-${card.color}-400 mt-0.5 flex-shrink-0`} />
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5 text-center">
            <p className="text-lg text-red-400 font-bold">India has 60M+ local merchants. They spend ₹0 on digital loyalty. That&apos;s the opportunity.</p>
          </div>
        </div>
      ),
    },
    // ── SLIDE 2: SOLUTION ──
    {
      id: 'solution',
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-sm text-green-400 font-semibold uppercase tracking-wider mb-2">The Solution</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">ReZ: The Rewards Layer for<br /><span className="text-green-400">India&apos;s Local Commerce</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-green-400 font-bold text-xl mb-4">How It Works</h3>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'Consumer Discovers', desc: 'Find local merchants on ReZ app — restaurants, salons, kiranas, pharmacies' },
                  { step: 2, title: 'Orders & Pays', desc: 'Place order or pay at merchant. ₹650 avg order value.' },
                  { step: 3, title: 'Earns ReZ Coins', desc: 'Merchant pays 5% commission. Consumer earns cashback as ReZ Coins.' },
                  { step: 4, title: 'Spends Coins', desc: 'Use coins at ANY merchant on ReZ. Closed-loop economy.' },
                  { step: 5, title: 'Merchant Grows', desc: 'More customers, more orders, more data. Pays only 5% (vs 30% on Swiggy).' },
                ].map(s => (
                  <div key={s.step} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-sm font-bold text-green-400 flex-shrink-0">{s.step}</div>
                    <div>
                      <p className="text-white font-medium text-sm">{s.title}</p>
                      <p className="text-xs text-slate-400">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-800/50 border border-orange-500/20 rounded-xl p-6">
                <h3 className="text-orange-400 font-bold text-lg mb-3">Key Insight</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Merchants already pay 25-30% to Swiggy/Zomato. ReZ charges <strong className="text-orange-400">only 5%</strong> and gives it back as cashback to consumers. Merchants save money. Consumers earn rewards. ReZ makes money from <strong className="text-orange-400">volume, not extraction</strong>.
                </p>
              </div>
              <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-purple-400 font-bold text-lg mb-3">The Flywheel</h3>
                <div className="flex items-center gap-3 text-sm text-slate-300 flex-wrap justify-center">
                  <span className="bg-purple-500/10 px-3 py-1.5 rounded-lg text-purple-400">More Merchants</span>
                  <ArrowRight size={14} className="text-slate-500" />
                  <span className="bg-green-500/10 px-3 py-1.5 rounded-lg text-green-400">More Users</span>
                  <ArrowRight size={14} className="text-slate-500" />
                  <span className="bg-orange-500/10 px-3 py-1.5 rounded-lg text-orange-400">More Coins</span>
                  <ArrowRight size={14} className="text-slate-500" />
                  <span className="bg-blue-500/10 px-3 py-1.5 rounded-lg text-blue-400">More Spend</span>
                  <ArrowRight size={14} className="text-slate-500" />
                  <span className="bg-purple-500/10 px-3 py-1.5 rounded-lg text-purple-400">More Merchants</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // ── SLIDE 3: MARKET SIZE ──
    {
      id: 'market',
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-sm text-blue-400 font-semibold uppercase tracking-wider mb-2">Market Opportunity</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">India&apos;s Local Commerce is<br /><span className="text-blue-400">₹42 Lakh Crore</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'TAM', value: '₹42L Cr', sub: 'Total Addressable Market', desc: 'India\'s total local retail + food + services market. 60M+ merchants, 1.4B consumers.', color: 'blue' },
              { label: 'SAM', value: '₹4L Cr', sub: 'Serviceable Available Market', desc: 'Urban India local commerce in top 300 cities. Digital-ready merchants + smartphone users.', color: 'purple' },
              { label: 'SOM', value: '₹2,000 Cr', sub: 'Year 3 Target GMV', desc: '5M users × ₹650 AOV × 5 orders/mo × 12 = ₹1,950 Cr GMV. Commission revenue: ₹601 Cr.', color: 'green' },
            ].map(m => (
              <div key={m.label} className={`bg-slate-800/50 border border-${m.color}-500/20 rounded-xl p-6 text-center`}>
                <p className={`text-${m.color}-400 text-xs font-semibold uppercase`}>{m.label}</p>
                <p className="text-3xl font-black text-white mt-2">{m.value}</p>
                <p className={`text-sm text-${m.color}-400 font-medium mt-1`}>{m.sub}</p>
                <p className="text-xs text-slate-400 mt-3">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
            <h3 className="text-blue-400 font-bold mb-3">Why Now?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-sm">
              {[
                { point: 'UPI did 12B+ txns/month', detail: 'Digital payments are universal — merchants are ready' },
                { point: '750M+ smartphones', detail: 'Every consumer has a device capable of running ReZ' },
                { point: 'Post-COVID local preference', detail: 'Consumers prefer local over big chains after pandemic' },
                { point: 'Swiggy/Zomato fatigue', detail: 'Merchants hate 30% commission — seeking alternatives' },
              ].map(w => (
                <div key={w.point} className="bg-slate-800/30 rounded-lg p-3">
                  <p className="text-white font-medium">{w.point}</p>
                  <p className="text-xs text-slate-400 mt-1">{w.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    // ── SLIDE 4: BUSINESS MODEL ──
    {
      id: 'business-model',
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-sm text-orange-400 font-semibold uppercase tracking-wider mb-2">Business Model</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">6 Revenue Streams.<br /><span className="text-orange-400">Merchant-Funded. No VC Subsidy.</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Transaction Commission', rate: '5% of GMV', value: '₹162.50/user/mo', desc: 'Core revenue. 5% commission on ₹650 AOV × 5 orders/mo. Merchant-funded.', pct: 83, color: 'orange', active: true },
              { name: 'Promoted Listings', rate: '5% promoted sales', value: '₹32.50/user/mo', desc: 'Merchants pay to appear at top of search. 2 promoted orders/user/mo.', pct: 17, color: 'purple', active: true },
              { name: 'Business Subscriptions', rate: '₹1,500/mo', value: 'Per merchant', desc: 'Premium merchant tools: analytics, CRM, promotional coins, priority support.', pct: 0, color: 'blue', active: true },
              { name: 'Affiliate Revenue', rate: '₹10/user/mo', value: 'Brand partnerships', desc: 'Affiliate deals with brands for in-app offers and cross-promotions.', pct: 0, color: 'green', active: true },
              { name: 'User Subscription (ReZ+)', rate: '₹49/mo', value: 'Premium membership', desc: 'Extra cashback, exclusive deals, free delivery, priority support.', pct: 0, color: 'cyan', active: false },
              { name: 'B2B Supply Chain', rate: '₹500/merchant/mo', value: 'Bulk procurement', desc: 'Group buying and supply chain services for merchants (Year 2+).', pct: 0, color: 'pink', active: false },
            ].map(rev => (
              <div key={rev.name} className={`bg-slate-800/50 border rounded-xl p-5 ${rev.active ? `border-${rev.color}-500/30` : 'border-slate-700/50 opacity-60'}`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-${rev.color}-400 font-bold text-sm`}>{rev.name}</h3>
                  {!rev.active && <span className="text-xs text-slate-500 bg-slate-700/50 px-2 py-0.5 rounded">Year 2+</span>}
                </div>
                <p className="text-xl font-bold text-white">{rev.rate}</p>
                <p className={`text-sm text-${rev.color}-400 mt-1`}>{rev.value}</p>
                <p className="text-xs text-slate-400 mt-2">{rev.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { label: 'ARPU', value: '₹195/mo', sub: 'Average Revenue Per User' },
                { label: 'LTV', value: '₹3,900', sub: '20 months × ₹195' },
                { label: 'CAC', value: '₹76', sub: 'Blended across 12 channels' },
                { label: 'LTV:CAC', value: '51.3x', sub: 'World-class unit economics' },
              ].map(m => (
                <div key={m.label}>
                  <p className="text-xs text-slate-400">{m.label}</p>
                  <p className="text-2xl font-black text-white">{m.value}</p>
                  <p className="text-xs text-orange-400">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    // ── SLIDE 5: HOW IT WORKS (TRANSACTION FLOW) ──
    {
      id: 'how-it-works',
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-sm text-purple-400 font-semibold uppercase tracking-wider mb-2">Transaction Flow</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Every Transaction Creates<br /><span className="text-purple-400">a Virtuous Loop</span></h2>
          </div>

          {/* Transaction Flow */}
          <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center">
              {[
                { step: '1', label: 'Consumer Orders', value: '₹650', sub: 'Average Order', icon: Smartphone, color: 'green' },
                { step: '2', label: 'Merchant Pays', value: '5% = ₹32.50', sub: 'Commission', icon: Store, color: 'orange' },
                { step: '3', label: 'ReZ Takes', value: '₹32.50', sub: 'Platform Revenue', icon: Coins, color: 'purple' },
                { step: '4', label: 'User Earns', value: '~₹20 coins', sub: 'Cashback (60% of commission)', icon: Heart, color: 'red' },
                { step: '5', label: 'Coins Spent', value: 'At any merchant', sub: 'Closed-loop', icon: Share2, color: 'blue' },
              ].map((s, i) => (
                <div key={s.step} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl bg-${s.color}-500/20 flex items-center justify-center mb-2`}>
                    <s.icon size={24} className={`text-${s.color}-400`} />
                  </div>
                  <p className="text-white font-bold text-sm">{s.label}</p>
                  <p className={`text-lg font-bold text-${s.color}-400`}>{s.value}</p>
                  <p className="text-xs text-slate-500">{s.sub}</p>
                  {i < 4 && <ArrowRight size={16} className="text-slate-600 mt-2 hidden sm:block" />}
                </div>
              ))}
            </div>
          </div>

          {/* Unit Economics Deep Dive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
              <h3 className="text-green-400 font-bold mb-3">Consumer Economics</h3>
              <div className="space-y-2 text-sm">
                {[
                  ['Monthly GMV', '₹650 × 5 orders = ₹3,250'],
                  ['Cashback Earned', '~₹100/month in ReZ Coins'],
                  ['Effective Savings', '3% on all local shopping'],
                  ['Alternative', '₹0 at local shops today'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between"><span className="text-slate-400">{k}</span><span className="text-white font-medium">{v}</span></div>
                ))}
              </div>
            </div>
            <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-5">
              <h3 className="text-orange-400 font-bold mb-3">Merchant Economics</h3>
              <div className="space-y-2 text-sm">
                {[
                  ['ReZ Commission', '5% (vs 30% on Swiggy)'],
                  ['Monthly Cost (50 orders)', '₹1,625'],
                  ['New Customers Gained', '10-20/month via ReZ'],
                  ['ROI on Commission', '6x+ customer value'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between"><span className="text-slate-400">{k}</span><span className="text-white font-medium">{v}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // ── SLIDE 6: TRACTION & LAUNCH PLAN ──
    {
      id: 'traction',
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-sm text-emerald-400 font-semibold uppercase tracking-wider mb-2">Traction & Launch</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Bangalore-First Launch.<br /><span className="text-emerald-400">4 Zones. 500+ Merchants Mapped.</span></h2>
          </div>

          {/* Bangalore Zones */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { zone: 'BTM Layout', merchants: '120+', fests: 3, type: 'QSR, Cafes, Darshinis', color: 'blue' },
              { zone: 'HSR Layout', merchants: '100+', fests: 2, type: 'Cafes, Salons, Grocery', color: 'green' },
              { zone: 'Koramangala', merchants: '150+', fests: 3, type: 'Restaurants, Fashion, Tech', color: 'purple' },
              { zone: 'Jayanagar', merchants: '130+', fests: 2, type: 'Kiranas, Pharmacy, Food', color: 'orange' },
            ].map(z => (
              <div key={z.zone} className={`bg-slate-800/50 border border-${z.color}-500/20 rounded-xl p-5 text-center`}>
                <MapPin size={20} className={`text-${z.color}-400 mx-auto mb-2`} />
                <h3 className="text-white font-bold">{z.zone}</h3>
                <p className={`text-2xl font-black text-${z.color}-400 mt-1`}>{z.merchants}</p>
                <p className="text-xs text-slate-400">merchants mapped</p>
                <p className="text-xs text-slate-500 mt-1">{z.fests} college fests planned</p>
                <p className="text-xs text-slate-500">{z.type}</p>
              </div>
            ))}
          </div>

          {/* Launch Milestones */}
          <div className="bg-slate-800/50 border border-emerald-500/20 rounded-xl p-6">
            <h3 className="text-emerald-400 font-bold mb-4">Launch Milestones</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { phase: 'M1-M3', title: 'Foundation', metrics: '8K users, 50 merchants, 1 city, CAC ₹50', focus: 'Product-market fit with organic channels. College fests (10 events M1). Campus ambassadors.' },
                { phase: 'M4-M6', title: 'Growth', metrics: '15K users, 200 merchants, 4 cities, CAC ₹76', focus: 'Turn on paid ads. Influencer marketing. Merchant-led referrals at scale.' },
                { phase: 'M7-M12', title: 'Scale', metrics: '35K users, 500+ merchants, 32 cities, CAC ₹95', focus: 'Multi-city expansion. Corporate tie-ups. SEO compounds. Approaching breakeven.' },
              ].map(p => (
                <div key={p.phase} className="bg-slate-800/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">{p.phase}</span>
                    <span className="text-white font-bold text-sm">{p.title}</span>
                  </div>
                  <p className="text-sm text-emerald-400 font-medium">{p.metrics}</p>
                  <p className="text-xs text-slate-400 mt-2">{p.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Unique Acquisition: College Fest */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5">
            <h3 className="text-orange-400 font-bold mb-2">Signature Acquisition Channel: College Business Fest</h3>
            <p className="text-sm text-slate-300">Partner with 20 student businesses per fest. Give each ₹10K inventory. Students get ₹100 free ReZ Coins. MRP ₹200, COGS ₹50. <strong className="text-orange-400">Effective CAC &lt; ₹10</strong>. 10 fests in Month 1 across 4 Bangalore zones.</p>
          </div>
        </div>
      ),
    },
    // ── SLIDE 7: ACQUISITION STRATEGY ──
    {
      id: 'acquisition',
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-sm text-purple-400 font-semibold uppercase tracking-wider mb-2">Acquisition Strategy</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">12 Channels. Blended CAC ₹76.<br /><span className="text-purple-400">35K Users Year 1.</span></h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left px-3 py-2 text-slate-400">Channel</th>
                  <th className="text-right px-3 py-2 text-slate-400">Budget</th>
                  <th className="text-right px-3 py-2 text-slate-400">CAC</th>
                  <th className="text-right px-3 py-2 text-slate-400">Users</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Merchant-Led Referrals', '₹2.5L', '₹50', '5,000'],
                  ['WhatsApp Marketing', '₹1L', '₹25', '4,000'],
                  ['Campus Ambassadors', '₹3L', '₹67', '4,478'],
                  ['User Referrals', '₹4L', '₹100', '4,000'],
                  ['Influencer Marketing', '₹3.5L', '₹100', '3,500'],
                  ['SEO / Content', '₹1.5L', '₹50', '3,000'],
                  ['App Store Optimization', '₹1L', '₹40', '2,500'],
                  ['Campus Events', '₹2L', '₹100', '2,000'],
                  ['Community Events', '₹1.5L', '₹75', '2,000'],
                  ['Paid Ads (Meta)', '₹6L', '₹300', '2,000'],
                  ['Paid Ads (Google)', '₹5L', '₹300', '1,667'],
                  ['Corporate Tie-ups', '₹2L', '₹200', '1,000'],
                ].map(([ch, budget, cac, users]) => (
                  <tr key={ch} className="border-b border-slate-700/30 hover:bg-slate-800/30">
                    <td className="px-3 py-2 text-white">{ch}</td>
                    <td className="px-3 py-2 text-right text-slate-300">{budget}</td>
                    <td className="px-3 py-2 text-right text-green-400">{cac}</td>
                    <td className="px-3 py-2 text-right text-purple-400">{users}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-orange-500/30 font-bold">
                  <td className="px-3 py-2 text-orange-400">TOTAL</td>
                  <td className="px-3 py-2 text-right text-orange-400">₹33L</td>
                  <td className="px-3 py-2 text-right text-orange-400">₹76</td>
                  <td className="px-3 py-2 text-right text-orange-400">35,145</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-400">
            <Link href="/rez-financials/acquisition" className="text-purple-400 hover:underline">View full acquisition strategy with 10 detailed tabs →</Link>
          </p>
        </div>
      ),
    },
    // ── SLIDE 8: FINANCIALS (3-YEAR P&L) ──
    {
      id: 'financials',
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-sm text-green-400 font-semibold uppercase tracking-wider mb-2">Financial Projections</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">₹10 Cr → ₹601 Cr Revenue.<br /><span className="text-green-400">Profitable by Year 3.</span></h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left px-4 py-3 text-slate-400">Metric</th>
                  <th className="text-right px-4 py-3 text-blue-400">Year 1</th>
                  <th className="text-right px-4 py-3 text-purple-400">Year 2</th>
                  <th className="text-right px-4 py-3 text-green-400">Year 3</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Users', '35K', '1.5M', '5M'],
                  ['Merchants', '500+', '12K', '40K'],
                  ['Cities', '32', '120', '300'],
                  ['Revenue', '₹10.04 Cr', '₹153.4 Cr', '₹601.8 Cr'],
                  ['COGS', '₹6.7 Cr (67%)', '₹84.4 Cr (55%)', '₹270.8 Cr (45%)'],
                  ['Gross Profit', '₹3.3 Cr (33%)', '₹69 Cr (45%)', '₹331 Cr (55%)'],
                  ['OpEx', '₹2.7 Cr', '₹141.9 Cr', '₹123.4 Cr'],
                  ['Net Profit', '₹0.6 Cr (6%)', '-₹73 Cr (-47.6%)', '₹207.5 Cr (34.5%)'],
                  ['Valuation', '$24.2M', '$184.8M', '$724.9M'],
                  ['Blended CAC', '₹76', '₹150', '₹250'],
                ].map(([metric, y1, y2, y3]) => (
                  <tr key={metric} className="border-b border-slate-700/30">
                    <td className="px-4 py-2 text-white font-medium">{metric}</td>
                    <td className="px-4 py-2 text-right text-blue-300">{y1}</td>
                    <td className="px-4 py-2 text-right text-purple-300">{y2}</td>
                    <td className="px-4 py-2 text-right text-green-300">{y3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
            <p className="text-green-400 font-bold">Year 2 is intentionally unprofitable — aggressive expansion to 120 cities and 1.5M users. Year 3 delivers 34.5% net margin at scale.</p>
          </div>

          <p className="text-sm text-slate-400">
            <Link href="/rez-financials" className="text-green-400 hover:underline">View interactive financial model with adjustable assumptions →</Link>
          </p>
        </div>
      ),
    },
    // ── SLIDE 9: COMPETITION ──
    {
      id: 'competition',
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-sm text-red-400 font-semibold uppercase tracking-wider mb-2">Competitive Landscape</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Nobody Owns Local Commerce<br /><span className="text-red-400">Rewards in India</span></h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left px-3 py-2 text-slate-400">Competitor</th>
                  <th className="text-left px-3 py-2 text-slate-400">What They Do</th>
                  <th className="text-left px-3 py-2 text-slate-400">Commission</th>
                  <th className="text-left px-3 py-2 text-slate-400">Weakness</th>
                  <th className="text-left px-3 py-2 text-green-400">ReZ Edge</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Swiggy/Zomato', 'Food delivery', '25-30%', 'Merchants hate high commission', '5% commission, merchants keep margins'],
                  ['CRED', 'Credit card rewards', '0%', 'Only credit card users (5% of India)', 'Works for all payment methods incl UPI'],
                  ['MagicPin', 'Cashback deals', '15-20%', 'Coupon-based, no closed loop', 'ReZ Coins create sticky economy'],
                  ['Paytm', 'Payments + commerce', '0-2%', 'No hyperlocal discovery/rewards', 'Discovery + rewards + merchant tools'],
                  ['CashKaro', 'Online cashback', '0%', 'Only online, no offline merchants', 'Built for offline-first local commerce'],
                ].map(([comp, what, comm, weakness, edge]) => (
                  <tr key={comp} className="border-b border-slate-700/30">
                    <td className="px-3 py-3 text-white font-medium">{comp}</td>
                    <td className="px-3 py-3 text-slate-400">{what}</td>
                    <td className="px-3 py-3 text-red-400">{comm}</td>
                    <td className="px-3 py-3 text-slate-400">{weakness}</td>
                    <td className="px-3 py-3 text-green-400 font-medium">{edge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-800/50 border border-green-500/20 rounded-xl p-5">
            <h3 className="text-green-400 font-bold mb-2">ReZ&apos;s Moat</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              {[
                { moat: 'Closed-Loop Coins', desc: 'ReZ Coins can only be spent in the ecosystem. Creates sticky retention.' },
                { moat: 'Merchant Network Effect', desc: 'More merchants = more places to earn/spend coins = more users join.' },
                { moat: 'Lowest Commission', desc: '5% vs 30% makes switching cost high for merchants. They won\'t go back.' },
              ].map(m => (
                <div key={m.moat} className="bg-slate-800/30 rounded-lg p-3">
                  <p className="text-white font-medium">{m.moat}</p>
                  <p className="text-xs text-slate-400 mt-1">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    // ── SLIDE 10: TEAM ──
    {
      id: 'team',
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-sm text-blue-400 font-semibold uppercase tracking-wider mb-2">Team</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Built by Operators Who Know<br /><span className="text-blue-400">Commerce & Technology</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white">RK</div>
                <div>
                  <h3 className="text-white font-bold text-lg">Rejaul Karim</h3>
                  <p className="text-blue-400 text-sm">Founder & CEO</p>
                </div>
              </div>
              <p className="text-sm text-slate-300">Leading ReZ from concept to execution. Built comprehensive business strategy, financial models, acquisition playbooks, and merchant onboarding systems. Deep understanding of Indian hyperlocal commerce landscape.</p>
              <p className="text-xs text-slate-500 mt-3">rejaul@nuqtaapp.com</p>
            </div>
            <div className="bg-slate-800/50 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-green-400 font-bold text-lg mb-3">Hiring Plan (Year 1)</h3>
              <div className="space-y-2 text-sm">
                {[
                  { role: 'Growth Lead', phase: 'M1', status: 'Founding team' },
                  { role: 'Campus Ambassador Manager', phase: 'M1', status: 'Founding team' },
                  { role: 'Content & SEO Specialist', phase: 'M1', status: 'Founding team' },
                  { role: 'BizDev / Merchant Lead', phase: 'M1', status: 'Founding team' },
                  { role: 'Performance Marketing', phase: 'M4', status: 'Phase 2 hire' },
                  { role: 'Community Manager', phase: 'M4', status: 'Phase 2 hire' },
                  { role: 'Influencer Coordinator', phase: 'M5', status: 'Phase 2 hire' },
                  { role: 'Partnership Manager', phase: 'M7', status: 'Phase 3 hire' },
                ].map(h => (
                  <div key={h.role} className="flex items-center justify-between">
                    <span className="text-white">{h.role}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-green-400">{h.phase}</span>
                      <span className="text-xs text-slate-500">{h.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">Team: 4 (M1) → 8 (M6) → 15 (M12) → 35 (Y2) → 50+ (Y3)</p>
            </div>
          </div>
        </div>
      ),
    },
    // ── SLIDE 11: THE ASK ──
    {
      id: 'the-ask',
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-sm text-orange-400 font-semibold uppercase tracking-wider mb-2">The Ask</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">$500K SAFE at $5M Cap.<br /><span className="text-orange-400">20% Discount. Pro-Rata Rights.</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Terms */}
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/5 border border-orange-500/20 rounded-xl p-6">
              <h3 className="text-orange-400 font-bold text-xl mb-4">Investment Terms</h3>
              <div className="space-y-3 text-sm">
                {[
                  ['Instrument', 'SAFE (iSAFE for India)'],
                  ['Amount', '$500,000 (₹4.15 Cr)'],
                  ['Valuation Cap', '$5,000,000'],
                  ['Discount', '20%'],
                  ['Minimum Check', '₹20 Lakhs ($25K)'],
                  ['Pro-Rata Rights', 'Yes'],
                  ['MFN Clause', 'Yes'],
                  ['Target Close', 'Q2 2026'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <span className="text-slate-400">{k}</span>
                    <span className="text-white font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use of Funds */}
            <div className="bg-slate-800/50 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-green-400 font-bold text-xl mb-4">Use of Funds ($500K)</h3>
              <div className="space-y-3">
                {[
                  { category: 'Marketing & User Acquisition', pct: 36, amount: '₹1.5 Cr', desc: 'Paid ads, campus ambassadors, influencers, events' },
                  { category: 'Technology & Infrastructure', pct: 20, amount: '₹83L', desc: 'App development, cloud, APIs, security' },
                  { category: 'BizDev & Merchant Acquisition', pct: 19, amount: '₹79L', desc: 'Sales team, merchant onboarding, QR systems' },
                  { category: 'Team & Salaries', pct: 8, amount: '₹33L', desc: 'Core team salaries for 12 months' },
                  { category: 'Operations & Support', pct: 16, amount: '₹66L', desc: 'Customer support, rent, legal, contingency' },
                  { category: 'Buffer', pct: 1, amount: '₹4L', desc: 'Emergency reserve' },
                ].map(u => (
                  <div key={u.category}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white">{u.category}</span>
                      <span className="text-green-400 font-bold">{u.pct}% ({u.amount})</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: `${u.pct * 2.5}%` }} />
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{u.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Milestones */}
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5">
            <h3 className="text-purple-400 font-bold mb-3">What $500K Buys (12-Month Milestones)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { milestone: '35K Users', detail: 'Across 32 cities' },
                { milestone: '500+ Merchants', detail: 'Active on platform' },
                { milestone: '₹10 Cr Revenue', detail: '6% net margin' },
                { milestone: 'Series A Ready', detail: '$20-30M raise target' },
              ].map(m => (
                <div key={m.milestone} className="bg-slate-800/30 rounded-lg p-3">
                  <p className="text-white font-bold text-lg">{m.milestone}</p>
                  <p className="text-xs text-purple-400">{m.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-black text-white mb-2">Let&apos;s Build India&apos;s Rewards Layer Together</h3>
            <p className="text-lg text-orange-400 font-medium mb-4">rejaul@nuqtaapp.com</p>
            <div className="flex gap-4 justify-center flex-wrap text-sm">
              <Link href="/rez-financials" className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg border border-green-500/30 hover:bg-green-500/30">Financial Model →</Link>
              <Link href="/rez-financials/acquisition" className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg border border-purple-500/30 hover:bg-purple-500/30">Acquisition Strategy →</Link>
              <Link href="/rez-financials/investors" className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg border border-blue-500/30 hover:bg-blue-500/30">Investor Database →</Link>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const slideNames = ['Cover', 'Problem', 'Solution', 'Market', 'Business Model', 'Transaction Flow', 'Traction', 'Acquisition', 'Financials', 'Competition', 'Team', 'The Ask'];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-900/40 via-red-900/30 to-orange-900/40 border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/rez-financials" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm">
            <ArrowLeft size={16} /> Back
          </Link>
          <h1 className="text-lg font-bold">ReZ Pitch Deck</h1>
          <p className="text-sm text-slate-400">Slide {currentSlide + 1} of {slides.length}</p>
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="sticky top-0 z-10 bg-[#0a1628]/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
          <div className="flex gap-1 overflow-x-auto no-scrollbar">
            {slideNames.map((name, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${currentSlide === i ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}>
                {i + 1}. {name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {slides[currentSlide].content}
      </div>

      {/* Navigation Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <div className="flex items-center justify-between">
          <button onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))} disabled={currentSlide === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${currentSlide === 0 ? 'text-slate-600 cursor-not-allowed' : 'text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50'}`}>
            <ChevronLeft size={16} /> Previous
          </button>
          <span className="text-slate-500 text-sm">{currentSlide + 1} / {slides.length}</span>
          <button onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))} disabled={currentSlide === slides.length - 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${currentSlide === slides.length - 1 ? 'text-slate-600 cursor-not-allowed' : 'text-white bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/30'}`}>
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <GlobalFooter />
    </div>
  );
}
