'use client';

import React from 'react';
import Link from 'next/link';
import {
  Coins, BarChart3, FileText, Video, FolderOpen, Target,
  Users, Scale, ArrowRight, ExternalLink, TrendingUp,
  DollarSign, Store, MapPin, Zap, Star, Rocket,
  CheckCircle, Mail, Globe, Presentation, Shield
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ============================================
// ReZ LANDING HUB — Central navigation for all ReZ pages
// All numbers: ARPU ₹195, LTV ₹3,900, CAC ₹76, LTV:CAC 51.3x
// ============================================

const navCards = [
  // ── For Investors ──
  {
    category: 'For Investors',
    items: [
      { name: 'Pitch Deck', sub: '12 Interactive Slides', route: '/rez-deck', icon: Presentation, color: 'orange', desc: 'Problem → Solution → Market → Business Model → Traction → Team → The Ask. Share this link with investors.' },
      { name: 'One-Pager', sub: 'Print-Friendly PDF', route: '/rez-one-pager', icon: FileText, color: 'red', desc: 'Single page summary with all key metrics. Print or save as PDF for quick sharing.' },
      { name: 'Video Pitch Scripts', sub: '60s / 90s / 3-min', route: '/rez-video-script', icon: Video, color: 'pink', desc: 'Three versions: 60s for YC, 90s for accelerators, 3-min for full investor meetings. Copy & memorize.' },
    ],
  },
  // ── Financial & Legal ──
  {
    category: 'Financial & Legal',
    items: [
      { name: 'Financial Model', sub: '3-Year P&L • 7 Tabs', route: '/rez-financials', icon: BarChart3, color: 'green', desc: 'Interactive financial model with adjustable assumptions, monthly breakdown, income statement, scenarios, and unit economics.' },
      { name: 'India iSAFE Terms', sub: 'Legal • Conversion Math', route: '/rez-financials/isafe', icon: Scale, color: 'blue', desc: 'iSAFE agreement terms, conversion examples, cap table impact, investment process, and template clauses.' },
      { name: 'Data Room', sub: '35+ Documents', route: '/rez-data-room', icon: FolderOpen, color: 'cyan', desc: 'Virtual due diligence room. All documents organized by category — one link for investor review.' },
    ],
  },
  // ── Strategy & Outreach ──
  {
    category: 'Strategy & Outreach',
    items: [
      { name: 'Acquisition Strategy', sub: '10 Tabs • 12 Channels', route: '/rez-financials/acquisition', icon: Target, color: 'purple', desc: '5-phase roadmap, 12 channel deep-dives, merchant playbooks, funnel metrics, budget allocation, and risk analysis.' },
      { name: 'Investor Strategy', sub: '40+ Investors • 30+ Grants', route: '/rez-financials/investors', icon: Users, color: 'emerald', desc: 'Target investor list, angel contacts, accelerator applications, outreach playbook, email templates, pipeline tracker, and 30+ government grants.' },
    ],
  },
];

export default function ReZLandingPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* ═══════ HERO ═══════ */}
      <div className="bg-gradient-to-br from-orange-900/30 via-red-900/20 to-[#0a1628] border-b border-orange-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <Link href="/" className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-xs mb-6">
            <Globe size={12} /> nuqtaapp.com
          </Link>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Coins size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-white">ReZ</h1>
              <p className="text-lg sm:text-xl text-orange-400 font-medium">India&apos;s Cashback Ecosystem for Local Commerce</p>
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed mb-6">
            Consumers earn <strong className="text-orange-400">ReZ Coins</strong> on every local purchase. Merchants pay <strong className="text-green-400">5% commission</strong> (vs 30% on Swiggy). Coins are spendable at any merchant — a closed-loop rewards flywheel for India&apos;s ₹42 Lakh Crore local commerce market.
          </p>

          {/* Hero KPIs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { label: '₹42L Cr', sub: 'Market Size' },
              { label: '51.3x', sub: 'LTV:CAC' },
              { label: '5%', sub: 'vs 30% Swiggy' },
              { label: '₹195/mo', sub: 'ARPU' },
              { label: '35K → 5M', sub: '3-Year Users' },
              { label: '$725M', sub: 'Y3 Valuation' },
            ].map(kpi => (
              <div key={kpi.label} className="bg-slate-800/60 border border-orange-500/20 rounded-lg px-3 py-2">
                <p className="text-white font-bold text-sm">{kpi.label}</p>
                <p className="text-[10px] text-slate-400">{kpi.sub}</p>
              </div>
            ))}
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link href="/rez-deck" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-bold text-sm hover:from-orange-600 hover:to-red-600 transition-all shadow-lg shadow-orange-500/20">
              <Presentation size={16} /> View Pitch Deck <ArrowRight size={14} />
            </Link>
            <Link href="/rez-financials" className="inline-flex items-center gap-2 bg-slate-800 border border-green-500/30 text-green-400 px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-700 transition-all">
              <BarChart3 size={16} /> Financial Model
            </Link>
            <Link href="/rez-data-room" className="inline-flex items-center gap-2 bg-slate-800 border border-blue-500/30 text-blue-400 px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-700 transition-all">
              <FolderOpen size={16} /> Data Room
            </Link>
          </div>
        </div>
      </div>

      {/* ═══════ NAVIGATION GRID ═══════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-10">

        {navCards.map(section => (
          <div key={section.category}>
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-orange-500 to-red-500" />
              {section.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.items.map(card => {
                const Icon = card.icon;
                return (
                  <Link key={card.route} href={card.route} className={`group bg-slate-800/50 border border-${card.color}-500/20 rounded-xl p-5 hover:bg-slate-800 hover:border-${card.color}-500/40 transition-all`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-${card.color}-500/10 flex items-center justify-center`}>
                        <Icon size={20} className={`text-${card.color}-400`} />
                      </div>
                      <ExternalLink size={14} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
                    </div>
                    <h3 className="text-white font-bold">{card.name}</h3>
                    <p className={`text-xs text-${card.color}-400 font-medium mt-0.5`}>{card.sub}</p>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{card.desc}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs text-green-400">
                      <CheckCircle size={12} /> Ready
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        {/* ═══════ KEY METRICS ═══════ */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Zap size={18} className="text-orange-400" /> Unit Economics at a Glance
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {[
              { label: 'AOV', value: '₹650', color: 'white' },
              { label: 'ARPU', value: '₹195/mo', color: 'orange-400' },
              { label: 'LTV', value: '₹3,900', color: 'green-400' },
              { label: 'CAC', value: '₹76', color: 'blue-400' },
              { label: 'LTV:CAC', value: '51.3x', color: 'emerald-400' },
              { label: 'Payback', value: '<1 mo', color: 'purple-400' },
            ].map(m => (
              <div key={m.label} className="text-center bg-slate-900/50 rounded-lg p-3 border border-slate-700/30">
                <p className="text-xs text-slate-400">{m.label}</p>
                <p className={`text-lg sm:text-xl font-bold text-${m.color}`}>{m.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════ 3-YEAR SNAPSHOT ═══════ */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp size={18} className="text-green-400" /> 3-Year Projections
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left py-2 text-slate-400 font-medium">Metric</th>
                  <th className="text-right py-2 text-slate-400 font-medium">Year 1</th>
                  <th className="text-right py-2 text-slate-400 font-medium">Year 2</th>
                  <th className="text-right py-2 text-green-400 font-medium">Year 3</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Users', '35K', '1.5M', '5M'],
                  ['Merchants', '500+', '12K', '40K'],
                  ['Cities', '32', '120', '300'],
                  ['Revenue', '₹10 Cr', '₹153 Cr', '₹601 Cr'],
                  ['Net Margin', '6%', '-48%', '34.5%'],
                  ['Valuation', '$24M', '$185M', '$725M'],
                ].map(([metric, y1, y2, y3]) => (
                  <tr key={metric} className="border-b border-slate-700/30">
                    <td className="py-2.5 text-white font-medium">{metric}</td>
                    <td className="py-2.5 text-right text-slate-300">{y1}</td>
                    <td className="py-2.5 text-right text-slate-300">{y2}</td>
                    <td className="py-2.5 text-right text-green-400 font-medium">{y3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 text-right">
            <Link href="/rez-financials" className="text-xs text-green-400 hover:text-green-300 inline-flex items-center gap-1">
              View full interactive model <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* ═══════ HOW IT WORKS ═══════ */}
        <div className="bg-gradient-to-r from-orange-500/5 to-red-500/5 border border-orange-500/20 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Coins size={18} className="text-orange-400" /> How ReZ Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Consumer Orders', desc: 'User discovers local merchants on ReZ, places order (₹650 avg)', icon: Store, color: 'orange' },
              { step: '2', title: 'Merchant Pays 5%', desc: 'Merchant pays 5% commission (₹32.50) — 6x cheaper than Swiggy\'s 30%', icon: DollarSign, color: 'green' },
              { step: '3', title: 'Consumer Earns Coins', desc: 'User earns ReZ Coins as cashback — first-ever rewards on local shopping', icon: Coins, color: 'yellow' },
              { step: '4', title: 'Spend Anywhere', desc: 'Coins are spendable at ANY merchant on the platform — closed-loop flywheel', icon: Rocket, color: 'purple' },
            ].map(s => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="text-center">
                  <div className={`w-12 h-12 rounded-xl bg-${s.color}-500/10 border border-${s.color}-500/20 flex items-center justify-center mx-auto mb-2`}>
                    <Icon size={20} className={`text-${s.color}-400`} />
                  </div>
                  <p className="text-white font-bold text-sm">{s.title}</p>
                  <p className="text-xs text-slate-400 mt-1">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ═══════ THE ASK ═══════ */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6">
          <h2 className="text-lg font-bold text-orange-400 mb-4 flex items-center gap-2">
            <Star size={18} /> The Ask
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { label: 'Instrument', value: 'SAFE (iSAFE)' },
              { label: 'Amount', value: '$500K' },
              { label: 'Valuation Cap', value: '$5M' },
              { label: 'Discount', value: '20%' },
              { label: 'Min Check', value: '₹20L ($25K)' },
              { label: 'Pro-Rata', value: 'Yes' },
              { label: 'Target Close', value: 'Q2 2026' },
              { label: 'Y3 Return', value: '145x paper' },
            ].map(item => (
              <div key={item.label} className="bg-slate-800/50 border border-orange-500/20 rounded-lg p-3">
                <p className="text-xs text-slate-400">{item.label}</p>
                <p className="text-white font-bold">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/rez-financials/isafe" className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-5 py-2.5 rounded-lg border border-orange-500/30 hover:bg-orange-500/30 text-sm font-medium">
              <Scale size={14} /> View iSAFE Terms
            </Link>
            <Link href="/rez-data-room" className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-5 py-2.5 rounded-lg border border-blue-500/30 hover:bg-blue-500/30 text-sm font-medium">
              <FolderOpen size={14} /> Open Data Room
            </Link>
            <Link href="/rez-financials/investors" className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-5 py-2.5 rounded-lg border border-green-500/30 hover:bg-green-500/30 text-sm font-medium">
              <Users size={14} /> Investor Strategy
            </Link>
          </div>
        </div>

        {/* ═══════ LAUNCH PLAN ═══════ */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <MapPin size={18} className="text-purple-400" /> Launch Plan — Bangalore First
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {['BTM Layout', 'HSR Layout', 'Koramangala', 'Jayanagar'].map(zone => (
              <div key={zone} className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 text-center">
                <MapPin size={14} className="text-purple-400 mx-auto mb-1" />
                <p className="text-white font-medium text-sm">{zone}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: '500+ Merchants', sub: 'Mapped across 12 categories' },
              { label: '12 Channels', sub: 'Acquisition strategy ready' },
              { label: '10 College Fests', sub: 'Month 1 launch events' },
              { label: '20 Colleges', sub: 'Campus ambassador network' },
            ].map(item => (
              <div key={item.label} className="text-center">
                <p className="text-white font-bold text-sm">{item.label}</p>
                <p className="text-xs text-slate-400">{item.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/rez-financials/acquisition" className="text-xs text-purple-400 hover:text-purple-300 inline-flex items-center gap-1">
              View full acquisition strategy (10 tabs) <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* ═══════ QUICK LINKS FOOTER ═══════ */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { name: 'Pitch Deck', route: '/rez-deck', icon: Presentation, color: 'orange' },
            { name: 'One-Pager', route: '/rez-one-pager', icon: FileText, color: 'red' },
            { name: 'Financial Model', route: '/rez-financials', icon: BarChart3, color: 'green' },
            { name: 'Data Room', route: '/rez-data-room', icon: FolderOpen, color: 'blue' },
            { name: 'iSAFE Terms', route: '/rez-financials/isafe', icon: Scale, color: 'cyan' },
            { name: 'Investor Strategy', route: '/rez-financials/investors', icon: Users, color: 'emerald' },
            { name: 'Acquisition', route: '/rez-financials/acquisition', icon: Target, color: 'purple' },
            { name: 'Video Scripts', route: '/rez-video-script', icon: Video, color: 'pink' },
          ].map(link => {
            const Icon = link.icon;
            return (
              <Link key={link.route} href={link.route} className={`flex items-center gap-2 bg-slate-800/50 border border-${link.color}-500/20 rounded-lg px-4 py-3 hover:bg-slate-800 transition-colors`}>
                <Icon size={14} className={`text-${link.color}-400`} />
                <span className="text-white text-sm font-medium">{link.name}</span>
                <ArrowRight size={12} className="text-slate-600 ml-auto" />
              </Link>
            );
          })}
        </div>

        {/* ═══════ CONTACT ═══════ */}
        <div className="text-center bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
          <h3 className="text-white font-bold text-lg">Rejaul Karim</h3>
          <p className="text-orange-400 text-sm">Founder & CEO, ReZ</p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <a href="mailto:rejaul@nuqtaapp.com" className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white">
              <Mail size={14} /> rejaul@nuqtaapp.com
            </a>
            <Link href="/executive-team" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white">
              <Users size={14} /> Full Team
            </Link>
          </div>
          <p className="text-xs text-slate-500 mt-3">nuqtaapp.com/rez</p>
        </div>
      </div>

      <GlobalFooter />
    </div>
  );
}
