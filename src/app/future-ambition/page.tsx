'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Trophy, Users, DollarSign, Building2, Globe, TrendingUp, Zap, Crown, Target, Sparkles, ArrowRight, CheckCircle2, Home } from 'lucide-react';

export default function FutureAmbitionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a42] to-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-8 sm:space-y-12 lg:space-y-16">

        {/* Header with Logo */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/dashboard" className="flex-shrink-0">
            <Image
              src="/images/nuqta-logo.png"
              alt="Nuqta"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#c9a227] transition-colors text-sm"
          >
            <Home size={14} />
            <span className="hidden sm:inline">Dashboard</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="space-y-4 sm:space-y-6 text-center">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#c9a227]/20 border border-[#c9a227]/40 rounded-full text-[#c9a227] text-xs sm:text-sm font-bold">
            THE FUTURE OF NUQTA
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight">
            From Loyalty App to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-yellow-500">Financial Infrastructure</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-2">
            &quot;What happens when Nuqta becomes the default way people pay across the GCC? Here&apos;s the math on regional dominance.&quot;
          </p>
        </div>

        {/* GCC Market Overview */}
        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700 sm:border-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4 sm:mb-6 text-slate-100">The GCC Retail Market Opportunity</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8">
            {[
              { flag: '🇦🇪', country: 'UAE', pop: '10M', spend: '$70B' },
              { flag: '🇸🇦', country: 'Saudi', pop: '36M', spend: '$120B' },
              { flag: '🇶🇦', country: 'Qatar', pop: '3M', spend: '$15B' },
              { flag: '🇰🇼', country: 'Kuwait', pop: '4.3M', spend: '$25B' },
              { flag: '🇧🇭', country: 'Bahrain', pop: '1.7M', spend: '$8B' },
              { flag: '🇴🇲', country: 'Oman', pop: '5M', spend: '$12B' },
            ].map((c, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{c.flag}</div>
                <p className="font-bold text-white text-sm sm:text-base">{c.country}</p>
                <p className="text-[10px] sm:text-xs text-slate-400">{c.pop} population</p>
                <p className="text-xs sm:text-sm font-bold text-[#c9a227] mt-1 sm:mt-2">{c.spend}/year</p>
              </div>
            ))}
          </div>
          <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
            <p className="text-xs sm:text-sm text-[#c9a227] uppercase mb-1 sm:mb-2">Total GCC Retail Market</p>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#d4ab2c]">$250 Billion</p>
            <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-sm">60 million consumers • Annual retail transactions</p>
          </div>
        </div>

        {/* Scenario Cards */}
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-center">Market Penetration Scenarios</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* 20% Scenario */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/40 sm:border-2 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="text-center mb-4 sm:mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-500/20 border border-blue-500/40 mb-3 sm:mb-4">
                  <span className="text-lg sm:text-2xl font-black text-blue-400">20%</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-blue-300">Regional Player</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">Year 5 Target</p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-blue-300 uppercase mb-1">GMV Through Nuqta</p>
                  <p className="text-xl sm:text-2xl font-black text-blue-400">$50 Billion</p>
                  <p className="text-[10px] sm:text-xs text-slate-400">AED 184 Billion annually</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-blue-300 uppercase mb-1">Annual Revenue (8%)</p>
                  <p className="text-xl sm:text-2xl font-black text-blue-400">$4 Billion</p>
                  <p className="text-[10px] sm:text-xs text-slate-400">AED 14.7 Billion</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-blue-300 uppercase mb-1">Active Users</p>
                  <p className="text-xl sm:text-2xl font-black text-blue-400">12 Million</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-blue-300 uppercase mb-1">Valuation (10x)</p>
                  <p className="text-xl sm:text-2xl font-black text-blue-400">$40 Billion</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-xs sm:text-sm text-slate-300">Comparable to: <span className="text-blue-400 font-bold">Careem at peak</span></p>
              </div>
            </div>

            {/* 50% Scenario */}
            <div className="relative bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:scale-105 shadow-2xl">
              <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2">
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-purple-500 text-white text-[10px] sm:text-xs font-bold rounded-full whitespace-nowrap">AMBITIOUS TARGET</span>
              </div>
              <div className="text-center mb-4 sm:mb-6 mt-2 sm:mt-4">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple-500/20 border border-purple-500/40 mb-3 sm:mb-4">
                  <span className="text-lg sm:text-2xl font-black text-purple-400">50%</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-purple-300">Market Leader</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">Year 7-8 Vision</p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-purple-300 uppercase mb-1">GMV Through Nuqta</p>
                  <p className="text-xl sm:text-2xl font-black text-purple-400">$125 Billion</p>
                  <p className="text-[10px] sm:text-xs text-slate-400">AED 460 Billion annually</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-purple-300 uppercase mb-1">Annual Revenue (8%)</p>
                  <p className="text-xl sm:text-2xl font-black text-purple-400">$10 Billion</p>
                  <p className="text-[10px] sm:text-xs text-slate-400">AED 36.8 Billion</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-purple-300 uppercase mb-1">Active Users</p>
                  <p className="text-xl sm:text-2xl font-black text-purple-400">20 Million</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-purple-300 uppercase mb-1">Valuation (10x)</p>
                  <p className="text-xl sm:text-2xl font-black text-purple-400">$100 Billion</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-xs sm:text-sm text-slate-300">Comparable to: <span className="text-purple-400 font-bold">Stripe / Uber</span></p>
              </div>
            </div>

            {/* 80% Scenario */}
            <div className="bg-gradient-to-br from-[#c9a227]/30 to-yellow-800/20 border border-[#c9a227]/40 sm:border-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <div className="text-center mb-4 sm:mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#c9a227]/20 border border-[#c9a227]/40 mb-3 sm:mb-4">
                  <span className="text-lg sm:text-2xl font-black text-[#c9a227]">80%</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#c9a227]">Total Dominance</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">10+ Year Vision</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3 lg:space-y-4">
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-[#c9a227] uppercase mb-1">GMV Through Nuqta</p>
                  <p className="text-xl sm:text-2xl font-black text-[#d4ab2c]">$200 Billion</p>
                  <p className="text-[10px] sm:text-xs text-slate-400 hidden sm:block">AED 735 Billion annually</p>
                </div>
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-[#c9a227] uppercase mb-1">Annual Revenue (8%)</p>
                  <p className="text-xl sm:text-2xl font-black text-[#d4ab2c]">$16 Billion</p>
                  <p className="text-[10px] sm:text-xs text-slate-400 hidden sm:block">AED 58.8 Billion</p>
                </div>
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-[#c9a227] uppercase mb-1">Active Users</p>
                  <p className="text-xl sm:text-2xl font-black text-[#d4ab2c]">30+ Million</p>
                </div>
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-[#c9a227] uppercase mb-1">Valuation (10x)</p>
                  <p className="text-xl sm:text-2xl font-black text-[#d4ab2c]">$160 Billion</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-xs sm:text-sm text-slate-300">Comparable to: <span className="text-[#c9a227] font-bold">Alipay / Visa</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* What Dominance Means */}
        <div className="bg-gradient-to-br from-purple-900/30 to-indigo-800/20 border-2 border-purple-500/40 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Crown size={32} className="text-purple-400" />
            <h2 className="text-3xl font-black text-purple-300">What 50%+ Market Share Means</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-purple-300 mb-3">Financial Infrastructure Status</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span>You're no longer an "app" - you're infrastructure like Visa/Mastercard</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span>Government consults you on monetary policy and digital currency</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span>"Too important to fail" regulatory status</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-blue-300 mb-3">Data Monopoly</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span>Know what 20M+ people buy, where, when, and how often</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span>Predict consumer trends before anyone else</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span>Better credit risk assessment than any bank</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-emerald-300 mb-3">Pricing Power</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span>Merchants can't survive without you - you control their customer flow</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span>Ability to adjust take rates with minimal churn</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span>Exclusive partnership leverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-[#c9a227] mb-3">Unassailable Moat</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span>Network effects: Users go where merchants are, merchants go where users are</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span>Switching cost: Both sides lose rewards history, relationships, data</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span>Talent gravity: Best fintech talent in MENA wants to work at Nuqta</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Path to Dominance */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-white text-center">The Path to Dominance</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { phase: 'Year 1', target: '100K MAU', share: '~1%', color: 'emerald', desc: 'UAE proof of concept' },
              { phase: 'Year 3', target: '1.5M MAU', share: '~5%', color: 'blue', desc: 'Full GCC coverage' },
              { phase: 'Year 5', target: '5M MAU', share: '~15%', color: 'purple', desc: 'Regional leader' },
              { phase: 'Year 7', target: '15M MAU', share: '~35%', color: 'pink', desc: 'Market dominance' },
              { phase: 'Year 10', target: '25M+ MAU', share: '50%+', color: 'amber', desc: 'Financial infrastructure' },
            ].map((p, i) => (
              <div key={i} className={`bg-${p.color}-500/10 border border-${p.color}-500/30 rounded-xl p-4 text-center`}>
                <p className={`text-lg font-black text-${p.color}-400 mb-2`}>{p.phase}</p>
                <p className="text-2xl font-black text-white">{p.target}</p>
                <p className={`text-sm text-${p.color}-300 font-bold mt-1`}>{p.share} share</p>
                <p className="text-xs text-slate-400 mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Evolution */}
        <div className="bg-gradient-to-br from-emerald-900/30 to-green-800/20 border-2 border-emerald-500/40 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign size={32} className="text-emerald-400" />
            <h2 className="text-3xl font-black text-emerald-300">Revenue Evolution</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-emerald-500/10">
                <tr>
                  <th className="text-left p-4 text-emerald-300">Milestone</th>
                  <th className="text-center p-4 text-emerald-300">MAU</th>
                  <th className="text-center p-4 text-emerald-300">Market Share</th>
                  <th className="text-center p-4 text-emerald-300">GMV</th>
                  <th className="text-center p-4 text-emerald-300">Revenue</th>
                  <th className="text-center p-4 text-emerald-300">Valuation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-500/20">
                <tr className="hover:bg-emerald-500/5">
                  <td className="p-4 font-bold text-white">Year 1 (Current Plan)</td>
                  <td className="p-4 text-center text-slate-300">100K</td>
                  <td className="p-4 text-center text-slate-300">0.2%</td>
                  <td className="p-4 text-center text-slate-300">AED 120M</td>
                  <td className="p-4 text-center text-emerald-400 font-bold">AED 9.6M</td>
                  <td className="p-4 text-center text-slate-300">$25M</td>
                </tr>
                <tr className="hover:bg-emerald-500/5">
                  <td className="p-4 font-bold text-white">Year 3 (GCC Complete)</td>
                  <td className="p-4 text-center text-slate-300">1.5M</td>
                  <td className="p-4 text-center text-slate-300">2.5%</td>
                  <td className="p-4 text-center text-slate-300">AED 1.8B</td>
                  <td className="p-4 text-center text-emerald-400 font-bold">AED 144M</td>
                  <td className="p-4 text-center text-slate-300">$400M</td>
                </tr>
                <tr className="hover:bg-emerald-500/5">
                  <td className="p-4 font-bold text-white">Year 5 (Regional Leader)</td>
                  <td className="p-4 text-center text-slate-300">5M</td>
                  <td className="p-4 text-center text-slate-300">8%</td>
                  <td className="p-4 text-center text-slate-300">AED 6B</td>
                  <td className="p-4 text-center text-emerald-400 font-bold">AED 480M</td>
                  <td className="p-4 text-center text-slate-300">$1.3B</td>
                </tr>
                <tr className="hover:bg-emerald-500/5 bg-purple-500/10">
                  <td className="p-4 font-bold text-purple-300">Year 7 (50% Share)</td>
                  <td className="p-4 text-center text-purple-300">20M</td>
                  <td className="p-4 text-center text-purple-400 font-bold">50%</td>
                  <td className="p-4 text-center text-purple-300">AED 460B</td>
                  <td className="p-4 text-center text-purple-400 font-bold">AED 36.8B</td>
                  <td className="p-4 text-center text-purple-400 font-bold">$100B</td>
                </tr>
                <tr className="hover:bg-[#c9a227]/5 bg-[#c9a227]/10">
                  <td className="p-4 font-bold text-[#c9a227]">Year 10 (80% Share)</td>
                  <td className="p-4 text-center text-[#c9a227]">30M+</td>
                  <td className="p-4 text-center text-[#d4ab2c] font-bold">80%</td>
                  <td className="p-4 text-center text-[#c9a227]">AED 735B</td>
                  <td className="p-4 text-center text-[#d4ab2c] font-bold">AED 58.8B</td>
                  <td className="p-4 text-center text-[#d4ab2c] font-bold">$160B</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Beyond Payments */}
        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-800/20 border-2 border-cyan-500/40 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles size={32} className="text-cyan-400" />
            <h2 className="text-3xl font-black text-cyan-300">Beyond Payments: The Super-App Evolution</h2>
          </div>
          <p className="text-slate-300 mb-6 text-lg">
            At 50%+ market share, Nuqta naturally expands into adjacent verticals:
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: '🏦', title: 'Nuqta Bank', desc: 'Digital banking with instant accounts, cards, savings', revenue: '+$2B' },
              { icon: '💳', title: 'Nuqta Credit', desc: 'BNPL, merchant financing, consumer loans', revenue: '+$3B' },
              { icon: '📊', title: 'Nuqta Insights', desc: 'B2B data and analytics for brands', revenue: '+$500M' },
              { icon: '🛒', title: 'Nuqta Commerce', desc: 'Marketplace integration, social commerce', revenue: '+$1B' },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 mb-3">{s.desc}</p>
                <p className="text-cyan-400 font-bold">{s.revenue} revenue potential</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-center">
            <p className="text-cyan-300">
              <span className="font-bold">Total Addressable Revenue (Super-App):</span> <span className="text-2xl font-black text-cyan-400">$50+ Billion</span>
            </p>
          </div>
        </div>

        {/* Global Comparisons */}
        <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/10 border-2 border-[#c9a227]/40 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Globe size={32} className="text-[#c9a227]" />
            <h2 className="text-3xl font-black text-[#c9a227]">Global Comparisons: What We're Building Towards</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { name: 'Alipay', region: 'China', users: '1.3B', valuation: '$150B', nuqta: 'Year 10+ vision' },
              { name: 'Grab', region: 'SE Asia', users: '187M', valuation: '$40B', nuqta: 'Year 7 comparable' },
              { name: 'M-Pesa', region: 'Africa', users: '51M', valuation: '$10B', nuqta: 'Year 5 comparable' },
              { name: 'Nuqta', region: 'GCC', users: '30M+', valuation: '$100B+', nuqta: 'Year 10 target' },
            ].map((c, i) => (
              <div key={i} className={`rounded-xl p-5 ${c.name === 'Nuqta' ? 'bg-[#c9a227]/20 border-2 border-[#c9a227]' : 'bg-white/5 border border-white/10'}`}>
                <h3 className={`text-xl font-bold mb-2 ${c.name === 'Nuqta' ? 'text-[#c9a227]' : 'text-white'}`}>{c.name}</h3>
                <p className="text-sm text-slate-400 mb-3">{c.region}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Users:</span>
                    <span className={c.name === 'Nuqta' ? 'text-[#c9a227] font-bold' : 'text-white'}>{c.users}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Valuation:</span>
                    <span className={c.name === 'Nuqta' ? 'text-[#d4ab2c] font-bold' : 'text-white'}>{c.valuation}</span>
                  </div>
                </div>
                {c.name !== 'Nuqta' && (
                  <p className="text-xs text-[#c9a227] mt-3 font-bold">{c.nuqta}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Global Expansion Roadmap */}
        <div className="bg-gradient-to-br from-indigo-900/30 to-purple-800/20 border-2 border-indigo-500/40 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Globe size={32} className="text-indigo-400" />
            <h2 className="text-3xl font-black text-indigo-300">Global Expansion Roadmap: World Domination</h2>
          </div>
          <p className="text-slate-300 mb-8 text-lg">
            The journey from Dubai to the world. Each phase builds on proven success before expanding.
          </p>

          {/* Expansion Timeline */}
          <div className="space-y-6">
            {/* Phase 1: Dubai to UAE */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🇦🇪</div>
                <div>
                  <h3 className="text-xl font-black text-emerald-300">Phase 1: Dubai → Full UAE</h3>
                  <p className="text-sm text-slate-400">Years 1-2 • Foundation</p>
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-emerald-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-emerald-300 uppercase">Population</p>
                  <p className="text-xl font-black text-white">10M</p>
                </div>
                <div className="bg-emerald-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-emerald-300 uppercase">Market Size</p>
                  <p className="text-xl font-black text-white">$70B</p>
                </div>
                <div className="bg-emerald-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-emerald-300 uppercase">Target Users</p>
                  <p className="text-xl font-black text-emerald-400">500K MAU</p>
                </div>
                <div className="bg-emerald-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-emerald-300 uppercase">Revenue</p>
                  <p className="text-xl font-black text-emerald-400">AED 48M</p>
                </div>
              </div>
            </div>

            {/* Phase 2: GCC */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🇸🇦🇶🇦🇰🇼🇧🇭🇴🇲</div>
                <div>
                  <h3 className="text-xl font-black text-blue-300">Phase 2: UAE → Full GCC</h3>
                  <p className="text-sm text-slate-400">Years 2-4 • Regional Expansion</p>
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-blue-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-blue-300 uppercase">Population</p>
                  <p className="text-xl font-black text-white">60M</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-blue-300 uppercase">Market Size</p>
                  <p className="text-xl font-black text-white">$250B</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-blue-300 uppercase">Target Users</p>
                  <p className="text-xl font-black text-blue-400">5M MAU</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-blue-300 uppercase">Revenue</p>
                  <p className="text-xl font-black text-blue-400">$1.3B</p>
                </div>
              </div>
            </div>

            {/* Phase 3: MENA */}
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🇪🇬🇲🇦🇯🇴🇱🇧🇵🇰</div>
                <div>
                  <h3 className="text-xl font-black text-purple-300">Phase 3: GCC → MENA + Pakistan</h3>
                  <p className="text-sm text-slate-400">Years 4-7 • Massive Scale</p>
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-purple-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-purple-300 uppercase">Population</p>
                  <p className="text-xl font-black text-white">500M+</p>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-purple-300 uppercase">Market Size</p>
                  <p className="text-xl font-black text-white">$800B</p>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-purple-300 uppercase">Target Users</p>
                  <p className="text-xl font-black text-purple-400">50M MAU</p>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-purple-300 uppercase">Revenue</p>
                  <p className="text-xl font-black text-purple-400">$8B</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-slate-400">
                <strong className="text-purple-300">Key Markets:</strong> Egypt (100M), Pakistan (230M), Morocco (40M), Jordan (10M), Lebanon (5M)
              </div>
            </div>

            {/* Phase 4: Asia */}
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🇮🇳🇮🇩🇲🇾🇸🇬🇹🇭</div>
                <div>
                  <h3 className="text-xl font-black text-orange-300">Phase 4: MENA → Asia</h3>
                  <p className="text-sm text-slate-400">Years 7-10 • Continental Expansion</p>
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-orange-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-orange-300 uppercase">Population</p>
                  <p className="text-xl font-black text-white">2B+</p>
                </div>
                <div className="bg-orange-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-orange-300 uppercase">Market Size</p>
                  <p className="text-xl font-black text-white">$3T</p>
                </div>
                <div className="bg-orange-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-orange-300 uppercase">Target Users</p>
                  <p className="text-xl font-black text-orange-400">200M MAU</p>
                </div>
                <div className="bg-orange-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-orange-300 uppercase">Revenue</p>
                  <p className="text-xl font-black text-orange-400">$30B</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-slate-400">
                <strong className="text-orange-300">Key Markets:</strong> India (1.4B), Indonesia (270M), Malaysia (32M), Singapore (6M), Thailand (70M)
              </div>
            </div>

            {/* Phase 5: Europe & Americas */}
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🇬🇧🇩🇪🇫🇷🇺🇸🇧🇷</div>
                <div>
                  <h3 className="text-xl font-black text-cyan-300">Phase 5: Asia → Europe & Americas</h3>
                  <p className="text-sm text-slate-400">Years 10-15 • Global Scale</p>
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-cyan-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-cyan-300 uppercase">Population</p>
                  <p className="text-xl font-black text-white">1.5B+</p>
                </div>
                <div className="bg-cyan-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-cyan-300 uppercase">Market Size</p>
                  <p className="text-xl font-black text-white">$15T</p>
                </div>
                <div className="bg-cyan-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-cyan-300 uppercase">Target Users</p>
                  <p className="text-xl font-black text-cyan-400">300M MAU</p>
                </div>
                <div className="bg-cyan-500/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-cyan-300 uppercase">Revenue</p>
                  <p className="text-xl font-black text-cyan-400">$80B</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-slate-400">
                <strong className="text-cyan-300">Key Markets:</strong> UK (67M), Germany (83M), France (67M), USA (330M), Brazil (215M), Mexico (130M)
              </div>
            </div>

            {/* Phase 6: World Domination */}
            <div className="bg-[#c9a227]/10 border-2 border-[#c9a227]/40 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🌍</div>
                <div>
                  <h3 className="text-xl font-black text-[#c9a227]">Phase 6: Global Financial Infrastructure</h3>
                  <p className="text-sm text-slate-400">Years 15-20 • World Domination</p>
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-[#c9a227]/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-[#c9a227] uppercase">Population</p>
                  <p className="text-xl font-black text-white">5B+</p>
                </div>
                <div className="bg-[#c9a227]/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-[#c9a227] uppercase">Market Size</p>
                  <p className="text-xl font-black text-white">$25T+</p>
                </div>
                <div className="bg-[#c9a227]/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-[#c9a227] uppercase">Target Users</p>
                  <p className="text-xl font-black text-[#d4ab2c]">1B+ MAU</p>
                </div>
                <div className="bg-[#c9a227]/10 rounded-lg p-3 text-center">
                  <p className="text-xs text-[#c9a227] uppercase">Revenue</p>
                  <p className="text-xl font-black text-[#d4ab2c]">$200B+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ultimate Valuation Potential */}
        <div className="bg-gradient-to-br from-[#c9a227]/30 to-yellow-800/20 border-2 border-[#c9a227] rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Trophy size={32} className="text-[#c9a227]" />
            <h2 className="text-3xl font-black text-[#c9a227]">Ultimate Potential: Global Fintech Giant</h2>
          </div>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead className="bg-[#c9a227]/10">
                <tr>
                  <th className="text-left p-4 text-[#c9a227]">Phase</th>
                  <th className="text-center p-4 text-[#c9a227]">Timeline</th>
                  <th className="text-center p-4 text-[#c9a227]">Users</th>
                  <th className="text-center p-4 text-[#c9a227]">Revenue</th>
                  <th className="text-center p-4 text-[#c9a227]">Valuation</th>
                  <th className="text-center p-4 text-[#c9a227]">Comparable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c9a227]/20">
                <tr className="hover:bg-[#c9a227]/5">
                  <td className="p-4 font-bold text-white">UAE Domination</td>
                  <td className="p-4 text-center text-slate-300">Year 2</td>
                  <td className="p-4 text-center text-slate-300">500K</td>
                  <td className="p-4 text-center text-emerald-400">$13M</td>
                  <td className="p-4 text-center text-emerald-400">$130M</td>
                  <td className="p-4 text-center text-slate-400">Series B startup</td>
                </tr>
                <tr className="hover:bg-[#c9a227]/5">
                  <td className="p-4 font-bold text-white">GCC Leader</td>
                  <td className="p-4 text-center text-slate-300">Year 5</td>
                  <td className="p-4 text-center text-slate-300">5M</td>
                  <td className="p-4 text-center text-blue-400">$1.3B</td>
                  <td className="p-4 text-center text-blue-400">$13B</td>
                  <td className="p-4 text-center text-slate-400">Careem (acquisition)</td>
                </tr>
                <tr className="hover:bg-[#c9a227]/5">
                  <td className="p-4 font-bold text-white">MENA Dominance</td>
                  <td className="p-4 text-center text-slate-300">Year 7</td>
                  <td className="p-4 text-center text-slate-300">50M</td>
                  <td className="p-4 text-center text-purple-400">$8B</td>
                  <td className="p-4 text-center text-purple-400">$80B</td>
                  <td className="p-4 text-center text-slate-400">Grab / Nubank</td>
                </tr>
                <tr className="hover:bg-[#c9a227]/5">
                  <td className="p-4 font-bold text-white">Asia Expansion</td>
                  <td className="p-4 text-center text-slate-300">Year 10</td>
                  <td className="p-4 text-center text-slate-300">200M</td>
                  <td className="p-4 text-center text-orange-400">$30B</td>
                  <td className="p-4 text-center text-orange-400">$300B</td>
                  <td className="p-4 text-center text-slate-400">Stripe / Ant Group</td>
                </tr>
                <tr className="hover:bg-[#c9a227]/5 bg-[#c9a227]/10">
                  <td className="p-4 font-bold text-[#c9a227]">Global Infrastructure</td>
                  <td className="p-4 text-center text-[#c9a227]">Year 15-20</td>
                  <td className="p-4 text-center text-[#c9a227]">1B+</td>
                  <td className="p-4 text-center text-[#d4ab2c] font-bold">$200B+</td>
                  <td className="p-4 text-center text-[#d4ab2c] font-bold">$2T+</td>
                  <td className="p-4 text-center text-[#c9a227]">Visa / Mastercard</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-[#c9a227]/20 border border-[#c9a227]/40 rounded-xl p-6 text-center">
            <p className="text-lg text-[#c9a227] mb-2">At Global Scale</p>
            <p className="text-5xl font-black text-[#d4ab2c]">$2 Trillion+ Valuation</p>
            <p className="text-slate-400 mt-2">1 Billion+ users • $200B+ annual revenue • Financial infrastructure for half the world</p>
          </div>
        </div>

        {/* Final Vision Statement */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 border-2 border-purple-500 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-6">🌍</div>
          <h2 className="text-4xl font-black text-white mb-4">
            The Vision: Global Financial Operating System
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-4">
            From a loyalty app in Dubai to the financial infrastructure of the world.
          </p>
          <p className="text-2xl font-bold text-[#c9a227] mb-8">
            Dubai → UAE → GCC → MENA → Asia → Europe & Americas → World
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="/deck-kang" className="inline-block bg-white hover:bg-slate-100 text-slate-900 font-bold px-8 py-3 rounded-lg transition-colors">
              View Full Pitch Deck
            </a>
            <a href="/data-room" className="inline-block bg-[#c9a227] hover:bg-[#d4ab2c] text-slate-900 font-bold px-8 py-3 rounded-lg transition-colors">
              Explore Data Room
            </a>
            <a href="/gtm" className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-3 rounded-lg transition-colors">
              GTM Strategy
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-slate-700">
          <a href="/dashboard" className="text-slate-400 hover:text-white transition-colors">
            ← Back to Dashboard
          </a>
          <a href="/3-year-plan" className="text-slate-400 hover:text-white transition-colors">
            3-Year Domination Plan →
          </a>
        </div>

      </div>
    </div>
  );
}
