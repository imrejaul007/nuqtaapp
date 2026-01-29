'use client';

import { CheckCircle2, Building2, Users, Target, Zap, TrendingUp, DollarSign, Database, Globe, Sparkles, AlertCircle, Shield } from 'lucide-react';

export default function H3GTMPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a42] to-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">

        {/* Hero Section */}
        <div className="space-y-6 text-center">
          <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-300 text-sm font-bold">
            🟣 H3: INFRASTRUCTURE (~1.2 YEARS)
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            GTM Strategy: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Platform Play</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            "Shift from pure transaction revenue (GMV) to a hybrid model: 40% GMV + 60% SaaS/Data/WaaS."
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="text-slate-300">Target: 150K MAU</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏢</span>
              <span className="text-slate-300">B2B Revenue Stream</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⏱️</span>
              <span className="text-purple-400 font-bold">~1.2 Years (Accelerated)</span>
            </div>
          </div>
        </div>

        {/* GTM Transformation */}
        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-2 border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-slate-100">🧠 The GTM Transformation</h2>
          <div className="space-y-4 text-lg text-slate-300">
            <p className="leading-relaxed">
              <span className="font-bold text-white">From B2C to B2B2C:</span> H1 and H2 built the consumer habit and merchant network. H3 monetizes this infrastructure by selling "Wallets-as-a-Service" (WaaS) to enterprises, banks, and fintechs who want instant distribution to our engaged user base.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-500/10 border-l-4 border-red-500 rounded-lg p-4">
                <p className="text-red-300 font-bold mb-2">Old Model (H1-H2):</p>
                <p className="text-slate-300">100% transaction-based GMV revenue • User acquisition costs high • Limited leverage</p>
              </div>
              <div className="bg-emerald-500/10 border-l-4 border-emerald-500 rounded-lg p-4">
                <p className="text-emerald-300 font-bold mb-2">New Model (H3):</p>
                <p className="text-slate-300">40% GMV + 30% WaaS subscriptions + 30% data/advertising • Recurring revenue • High margin</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Revenue Streams */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-center text-slate-100">💰 The 3-Stream Revenue Model</h2>
          <div className="grid md:grid-cols-3 gap-6">

            {/* Stream 1: GMV (Baseline) */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 mb-4">
                <DollarSign size={28} className="text-white" />
              </div>
              <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full mb-3">
                <p className="text-xs font-bold text-blue-300 uppercase">Baseline Revenue</p>
              </div>
              <h3 className="text-2xl font-black text-blue-300 mb-3">GMV Transactions (40%)</h3>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-blue-300 uppercase mb-1">Revenue Contribution</p>
                <p className="text-4xl font-black text-blue-400">40%</p>
                <p className="text-xs text-slate-400 mt-1">Down from 100% in H1-H2</p>
              </div>
              <div className="space-y-3 text-sm text-slate-300">
                <p><strong className="text-white">Core business:</strong> 7.5% take rate on consumer transactions</p>
                <p><strong className="text-white">Scale:</strong> AED 200M annual GMV</p>
                <p><strong className="text-white">Margin:</strong> ~60% after costs</p>
                <p className="text-blue-300 font-bold">Still growing, but no longer the only engine</p>
              </div>
            </div>

            {/* Stream 2: WaaS (New) */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-2xl p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-500 mb-4">
                <Globe size={28} className="text-white" />
              </div>
              <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full mb-3">
                <p className="text-xs font-bold text-purple-300 uppercase">New Revenue Engine</p>
              </div>
              <h3 className="text-2xl font-black text-purple-300 mb-3">Wallets-as-a-Service (30%)</h3>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-purple-300 uppercase mb-1">Revenue Contribution</p>
                <p className="text-4xl font-black text-purple-400">30%</p>
                <p className="text-xs text-slate-400 mt-1">B2B SaaS model</p>
              </div>
              <div className="space-y-3 text-sm text-slate-300">
                <p><strong className="text-white">Target clients:</strong> Banks, fintechs, corporate rewards</p>
                <p><strong className="text-white">Pricing:</strong> AED 50K-200K/year + usage fees</p>
                <p><strong className="text-white">Value prop:</strong> White-labeled wallet infrastructure</p>
                <p className="text-purple-300 font-bold">High margin, recurring revenue stream</p>
              </div>
            </div>

            {/* Stream 3: Data & Advertising */}
            <div className="bg-gradient-to-br from-pink-900/30 to-red-800/20 border-2 border-pink-500/40 rounded-2xl p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink-500 mb-4">
                <Database size={28} className="text-white" />
              </div>
              <div className="inline-block px-3 py-1 bg-pink-500/20 border border-pink-500/40 rounded-full mb-3">
                <p className="text-xs font-bold text-pink-300 uppercase">Data Monetization</p>
              </div>
              <h3 className="text-2xl font-black text-pink-300 mb-3">Data & Ads (30%)</h3>
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-pink-300 uppercase mb-1">Revenue Contribution</p>
                <p className="text-4xl font-black text-pink-400">30%</p>
                <p className="text-xs text-slate-400 mt-1">Data intelligence layer</p>
              </div>
              <div className="space-y-3 text-sm text-slate-300">
                <p><strong className="text-white">Merchant campaigns:</strong> Targeted promotions, featured placements</p>
                <p><strong className="text-white">Consumer insights:</strong> Aggregated spending data (anonymized)</p>
                <p><strong className="text-white">Margin:</strong> ~90% (pure software)</p>
                <p className="text-pink-300 font-bold">Highest margin stream, network effects driven</p>
              </div>
            </div>
          </div>
        </div>

        {/* WaaS (Wallets-as-a-Service) Deep Dive */}
        <div className="bg-gradient-to-br from-purple-900/30 to-indigo-800/20 border-2 border-purple-500/40 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Building2 size={32} className="text-purple-400" />
            <h2 className="text-3xl font-black text-purple-300">🏦 WaaS (Wallets-as-a-Service) Deep Dive</h2>
          </div>
          <p className="text-slate-300 mb-6 text-lg">
            The infrastructure play that turns Nuqta from a consumer app into a B2B2C platform:
          </p>

          <div className="space-y-6">
            {/* What is WaaS */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">What is WaaS?</h3>
              <p className="text-slate-300 mb-4">
                White-labeled wallet infrastructure that enterprises can embed into their apps/services. They get:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span><strong className="text-white">Instant distribution:</strong> Access to 150K+ engaged users</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span><strong className="text-white">Merchant network:</strong> 1,000+ pre-integrated merchants</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span><strong className="text-white">Tech stack:</strong> Wallet, rewards engine, payment rails</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span><strong className="text-white">Customization:</strong> White-labeled UI with their branding</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span><strong className="text-white">Analytics:</strong> Real-time dashboards and insights</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span><strong className="text-white">Compliance:</strong> Pre-built regulatory framework</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Clients */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
                <div className="text-4xl mb-3">🏦</div>
                <h4 className="font-bold text-blue-300 mb-2">Traditional Banks</h4>
                <p className="text-sm text-slate-300 mb-3">
                  Emirates NBD, FAB, ADCB want millennial-friendly rewards without building in-house
                </p>
                <p className="text-xs text-blue-300 font-bold">Pricing: AED 150K-200K/year</p>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-bold text-purple-300 mb-2">Fintechs</h4>
                <p className="text-sm text-slate-300 mb-3">
                  Startups like Tabby, Postpay, Rise need embedded rewards to boost engagement
                </p>
                <p className="text-xs text-purple-300 font-bold">Pricing: AED 80K-120K/year</p>
              </div>
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-5">
                <div className="text-4xl mb-3">🏢</div>
                <h4 className="font-bold text-pink-300 mb-2">Corporate HR</h4>
                <p className="text-sm text-slate-300 mb-3">
                  Emirates, Etisalat, du want employee benefits tied to local merchants
                </p>
                <p className="text-xs text-pink-300 font-bold">Pricing: AED 50K-100K/year</p>
              </div>
            </div>

            {/* First 5 WaaS Clients */}
            <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-6">
              <h4 className="text-xl font-bold text-[#c9a227] mb-4">Target: First 5 WaaS Clients in H3</h4>
              <div className="grid md:grid-cols-5 gap-4 text-center">
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-2xl mb-2">1</p>
                  <p className="text-sm text-slate-300">Local bank pilot</p>
                  <p className="text-xs text-[#c9a227] font-bold mt-1">Q1</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-2xl mb-2">2</p>
                  <p className="text-sm text-slate-300">BNPL fintech</p>
                  <p className="text-xs text-[#c9a227] font-bold mt-1">Q2</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-2xl mb-2">3</p>
                  <p className="text-sm text-slate-300">Airline/hotel</p>
                  <p className="text-xs text-[#c9a227] font-bold mt-1">Q3</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-2xl mb-2">4</p>
                  <p className="text-sm text-slate-300">Corporate HR</p>
                  <p className="text-xs text-[#c9a227] font-bold mt-1">Q4</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-2xl mb-2">5</p>
                  <p className="text-sm text-slate-300">Telco loyalty</p>
                  <p className="text-xs text-[#c9a227] font-bold mt-1">Q4</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GTM Motion for B2B */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-white">🎯 B2B GTM Motion</h2>
          <p className="text-slate-300 mb-6 text-lg">
            Completely different sales cycle than B2C. Enterprise requires top-down, relationship-driven approach:
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-black text-xl mb-3">1</div>
              <p className="text-lg font-bold text-white mb-2">Warm Intros</p>
              <p className="text-sm text-slate-300">Leverage investors, advisors for CXO access</p>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 text-white font-black text-xl mb-3">2</div>
              <p className="text-lg font-bold text-white mb-2">Pilot Phase</p>
              <p className="text-sm text-slate-300">3-month trial with 1K users, prove engagement</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white font-black text-xl mb-3">3</div>
              <p className="text-lg font-bold text-white mb-2">Data-Driven Close</p>
              <p className="text-sm text-slate-300">Show ROI: 30% D30 retention, 8+ sessions/mo</p>
            </div>
            <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-5 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#c9a227] text-slate-900 font-black text-xl mb-3">4</div>
              <p className="text-lg font-bold text-white mb-2">Annual Contract</p>
              <p className="text-sm text-slate-300">12-month SaaS contract with auto-renewal</p>
            </div>
          </div>
        </div>

        {/* Consumer GTM (Still Running) */}
        <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border-2 border-emerald-500/40 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Users size={32} className="text-emerald-400" />
            <h2 className="text-3xl font-black text-emerald-300">👥 Consumer GTM (Still Running)</h2>
          </div>
          <p className="text-slate-300 mb-6 text-lg">
            B2B is NEW, but B2C channels continue running at scale to grow the network that makes WaaS valuable:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
              <p className="font-bold text-emerald-300 mb-2">Merchant QR (Mature)</p>
              <p className="text-sm text-slate-300">Now at 1,000+ merchants, CAC down to AED 10</p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <p className="font-bold text-blue-300 mb-2">Digital Ads (Unlocked)</p>
              <p className="text-sm text-slate-300">H1 KPIs hit, now layering Meta/Google at AED 60-80 CAC</p>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
              <p className="font-bold text-purple-300 mb-2">Habit Loops (Core)</p>
              <p className="text-sm text-slate-300">12+ sessions/month, cross-category usage standard</p>
            </div>
          </div>
        </div>

        {/* Key Metrics (H3 Targets) */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-black text-white mb-6 text-center">📊 H3 Key Metrics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Consumer Metrics */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Consumer Metrics (B2C)</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
                  <TrendingUp size={20} className="text-blue-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-blue-300 uppercase mb-1">MAU</p>
                  <p className="text-2xl font-black text-blue-400">150K</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
                  <Users size={20} className="text-purple-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-purple-300 uppercase mb-1">D30 Retention</p>
                  <p className="text-2xl font-black text-purple-400">≥32%</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
                  <DollarSign size={20} className="text-emerald-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-emerald-300 uppercase mb-1">GMV</p>
                  <p className="text-2xl font-black text-emerald-400">AED 200M</p>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 text-center">
                  <Zap size={20} className="text-yellow-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-yellow-300 uppercase mb-1">Churn</p>
                  <p className="text-2xl font-black text-yellow-400">≤8%</p>
                </div>
              </div>
            </div>

            {/* B2B Metrics */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">B2B Metrics (WaaS)</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
                  <Building2 size={20} className="text-purple-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-purple-300 uppercase mb-1">WaaS Clients</p>
                  <p className="text-2xl font-black text-purple-400">≥5</p>
                </div>
                <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4 text-center">
                  <DollarSign size={20} className="text-pink-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-pink-300 uppercase mb-1">B2B Revenue %</p>
                  <p className="text-2xl font-black text-pink-400">≥25%</p>
                </div>
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-4 text-center">
                  <Target size={20} className="text-[#c9a227] mx-auto mb-2" />
                  <p className="text-xs font-semibold text-[#c9a227] uppercase mb-1">EBITDA Margin</p>
                  <p className="text-2xl font-black text-[#d4ab2c]">≥30%</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
                  <TrendingUp size={20} className="text-emerald-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-emerald-300 uppercase mb-1">ARR</p>
                  <p className="text-2xl font-black text-emerald-400">AED 2M+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Risks & Mitigations */}
        <div className="bg-gradient-to-br from-orange-900/30 to-red-800/20 border-2 border-orange-500/40 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle size={32} className="text-orange-400" />
            <h2 className="text-3xl font-black text-orange-300">⚠️ H3 Risks & Mitigations</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="font-bold text-orange-300 mb-2">Risk: B2B Sales Cycle Slowness</p>
                <p className="text-sm text-slate-300 mb-2">Enterprise deals take 6-12 months to close</p>
                <p className="text-sm text-emerald-300">
                  <strong>Mitigation:</strong> Start outreach in H2 Month 2, pipeline 15 leads per WaaS goal
                </p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="font-bold text-orange-300 mb-2">Risk: Consumer Attention Dilution</p>
                <p className="text-sm text-slate-300 mb-2">Team focus shifts to B2B, consumer growth stalls</p>
                <p className="text-sm text-emerald-300">
                  <strong>Mitigation:</strong> Separate teams: Consumer GM vs Enterprise GM, distinct KPIs
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="font-bold text-orange-300 mb-2">Risk: WaaS Technical Complexity</p>
                <p className="text-sm text-slate-300 mb-2">White-labeling requires significant engineering</p>
                <p className="text-sm text-emerald-300">
                  <strong>Mitigation:</strong> Start with 1-2 pilot clients, standardize integration playbook
                </p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="font-bold text-orange-300 mb-2">Risk: Revenue Model Confusion</p>
                <p className="text-sm text-slate-300 mb-2">Investors/team confused by hybrid model</p>
                <p className="text-sm text-emerald-300">
                  <strong>Mitigation:</strong> Clear reporting: GMV vs SaaS ARR vs Data revenue split monthly
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* H3 Exit Criteria */}
        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-purple-300">🎯 H3 → Phase 2 Exit Criteria</h2>
          <p className="text-slate-300 mb-6">Must hit ALL metrics below to advance to Phase 2 (GCC Expansion):</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">Consumer Health</h3>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <p className="text-xs font-semibold text-purple-300 uppercase mb-1">MAU</p>
                <p className="text-3xl font-black text-purple-400">150K</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <p className="text-xs font-semibold text-blue-300 uppercase mb-1">Monthly Churn</p>
                <p className="text-3xl font-black text-blue-400">≤8%</p>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">B2B Traction</h3>
              <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-4">
                <p className="text-xs font-semibold text-[#c9a227] uppercase mb-1">WaaS Clients</p>
                <p className="text-3xl font-black text-[#d4ab2c]">≥5</p>
              </div>
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
                <p className="text-xs font-semibold text-pink-300 uppercase mb-1">B2B Revenue %</p>
                <p className="text-3xl font-black text-pink-400">≥25%</p>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">Financial Health</h3>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <p className="text-xs font-semibold text-emerald-300 uppercase mb-1">EBITDA Margin</p>
                <p className="text-3xl font-black text-emerald-400">≥30%</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <p className="text-xs font-semibold text-blue-300 uppercase mb-1">Cash Runway</p>
                <p className="text-3xl font-black text-blue-400">≥18mo</p>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
            <p className="text-sm text-purple-300">
              <span className="font-bold">Early Advancement Rule:</span> If all KPIs hit 85% of target AND unit economics proven in 2 UAE cities, advance to Phase 2 immediately
            </p>
          </div>
        </div>

        {/* Next Phase */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-2 border-slate-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Next: Phase 2 GTM - GCC Expansion
          </h3>
          <p className="text-slate-300 mb-6">
            Qatar + Saudi Arabia • Replicate proven UAE model • ~1.2 years
          </p>
          <a
            href="/phase-2-gtm"
            className="inline-block bg-[#c9a227] hover:bg-[#d4ab2c] text-slate-900 font-bold px-8 py-3 rounded-lg transition-colors"
          >
            View Phase 2 GTM Strategy →
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-between pt-8 border-t border-slate-700">
          <a href="/h2-gtm" className="text-slate-400 hover:text-white transition-colors">
            ← Back to H2 GTM
          </a>
          <a href="/master-roadmap" className="text-slate-400 hover:text-white transition-colors">
            Master Roadmap
          </a>
          <a href="/phase-2-gtm" className="text-slate-400 hover:text-white transition-colors">
            Phase 2 GTM →
          </a>
        </div>

      </div>
    </div>
  );
}
