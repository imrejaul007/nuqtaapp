'use client';

import { CheckCircle2, Heart, Home, Target, Zap, TrendingUp, DollarSign, Users, Building2, Sparkles, AlertTriangle } from 'lucide-react';

export default function H2GTMPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a42] to-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">

        {/* Hero Section */}
        <div className="space-y-6 text-center">
          <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-full text-blue-300 text-sm font-bold">
            🔷 H2: SCALE (~2.5 MONTHS)
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            GTM Strategy: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Category Playbook</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            "Apply proven H1 playbook to Healthcare + Home Services. Same GTM engine, different categories."
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="text-slate-300">Target: 250K MAU</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏥</span>
              <span className="text-slate-300">Healthcare + Home Services</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⏱️</span>
              <span className="text-blue-400 font-bold">~2.5 Months (Accelerated)</span>
            </div>
          </div>
        </div>

        {/* GTM Evolution */}
        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-2 border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-slate-100">🧠 H2 GTM Evolution</h2>
          <div className="space-y-4 text-lg text-slate-300">
            <p className="leading-relaxed">
              <span className="font-bold text-white">The playbook works:</span> H1 proved merchant QR distribution + habit loops drive retention. Now we replicate this exact GTM system in Healthcare (clinics, pharmacies) and Home Services (salons, spas, gyms).
            </p>
            <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-lg p-4">
              <p className="text-blue-300 font-bold">Core Principle:</p>
              <p className="text-slate-300 mt-2">Same channels, same metrics, different merchant categories. Don't reinvent — replicate what works.</p>
            </div>
          </div>
        </div>

        {/* Category Rollout Strategy */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-center text-slate-100">📋 2-Category Rollout Strategy</h2>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Healthcare */}
            <div className="bg-gradient-to-br from-red-900/30 to-pink-800/20 border-2 border-red-500/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-500">
                  <Heart size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-black text-red-300">Healthcare</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-red-300 mb-2">Target Merchants (50+)</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                      <span>Clinics: General practitioners, dental, dermatology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                      <span>Pharmacies: Life Pharmacy, Aster, Boots</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                      <span>Optical: Vision Express, Grand Optics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                      <span>Labs: Al Zahra, NMC diagnostics</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-red-300 mb-2">Why Healthcare Works</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                      <span><strong>High AOV:</strong> AED 150-300 average transactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                      <span><strong>Repeat behavior:</strong> Monthly prescriptions, chronic care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                      <span><strong>Universal need:</strong> Everyone uses healthcare</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                      <span><strong>Premium perception:</strong> Brand Coin builds loyalty</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Home Services */}
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-800/20 border-2 border-purple-500/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-500">
                  <Home size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-black text-purple-300">Home Services</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-purple-300 mb-2">Target Merchants (50+)</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                      <span>Salons: N.Bar, Dry Bar, boutique chains</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                      <span>Spas: Talise, SensAsia, independent spas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                      <span>Fitness: Fitness First, GymNation, boutique studios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                      <span>Wellness: Yoga studios, Pilates, meditation centers</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-purple-300 mb-2">Why Home Services Works</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                      <span><strong>Predictable cadence:</strong> Monthly/weekly habits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                      <span><strong>High frequency:</strong> 2-4x per month usage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                      <span><strong>Loyalty-driven:</strong> Users stick to favorite salons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                      <span><strong>Cross-category:</strong> Gym → Spa → Salon journey</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Same 3-Channel GTM Engine */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-white">🔁 Same 3-Channel GTM Engine</h2>
          <p className="text-slate-300 mb-6 text-lg">
            H1 proved the playbook works. H2 replicates it exactly in new categories.
          </p>
          <div className="grid md:grid-cols-3 gap-6">

            {/* Channel 1: Merchant QR */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
              <div className="font-bold text-blue-300 mb-3 text-lg">1. Merchant QR Distribution</div>
              <div className="space-y-2 text-sm text-slate-300">
                <p><strong className="text-white">Healthcare:</strong> Checkout QR at clinics/pharmacies</p>
                <p><strong className="text-white">Home Services:</strong> Reception desk QR at salons/gyms</p>
                <p><strong className="text-white">Target CAC:</strong> <span className="text-blue-400 font-black">≤ AED 15</span></p>
              </div>
            </div>

            {/* Channel 2: Student Ambassadors */}
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5">
              <div className="font-bold text-purple-300 mb-3 text-lg">2. Student Ambassador Program</div>
              <div className="space-y-2 text-sm text-slate-300">
                <p><strong className="text-white">Expand to:</strong> Dubai Medical College, MBRU students</p>
                <p><strong className="text-white">Incentive:</strong> AED 500/mo + AED 10 per activated user</p>
                <p><strong className="text-white">Target CAC:</strong> <span className="text-purple-400 font-black">≤ AED 30</span></p>
              </div>
            </div>

            {/* Channel 3: Habit Loops */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
              <div className="font-bold text-emerald-300 mb-3 text-lg">3. Daily Habit Loops</div>
              <div className="space-y-2 text-sm text-slate-300">
                <p><strong className="text-white">New triggers:</strong> "Hair appointment today?", "Time to refill meds"</p>
                <p><strong className="text-white">Cross-category:</strong> Lunch → Pharmacy on way home</p>
                <p><strong className="text-white">Target:</strong> <span className="text-emerald-400 font-black">12+ sessions/month</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Cross-Category Synergies */}
        <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/10 border-2 border-[#c9a227]/40 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles size={32} className="text-[#c9a227]" />
            <h2 className="text-3xl font-black text-[#c9a227]">Cross-Category Magic</h2>
          </div>
          <p className="text-slate-300 mb-6 text-lg">
            Multi-category coverage creates powerful network effects and habit stacking:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">User Journey Examples</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🍔</div>
                  <div>
                    <p className="font-bold text-white">Morning:</p>
                    <p>Breakfast café (F&B) → 10% cashback</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💊</div>
                  <div>
                    <p className="font-bold text-white">Afternoon:</p>
                    <p>Pick up prescription (Healthcare) → 8% cashback</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💇</div>
                  <div>
                    <p className="font-bold text-white">Evening:</p>
                    <p>Hair salon (Home Services) → 12% Brand Coin</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <p className="text-emerald-400 font-bold">Result: 3 touchpoints in one day → Strong habit reinforcement</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Why This Accelerates Growth</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Higher Frequency:</p>
                    <p>3 categories = 12+ monthly uses (vs 8 in H1)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Lower Churn:</p>
                    <p>More categories = more reasons to stay</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Better LTV:</p>
                    <p>Cross-category users = 2.5x LTV of single-category</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Merchant Lock-In:</p>
                    <p>Users trained to "check Nuqta first"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Geographic Expansion */}
        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-800/20 border-2 border-blue-500/40 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Building2 size={32} className="text-blue-400" />
            <h2 className="text-3xl font-black text-blue-300">Geographic Expansion (Parallel Track)</h2>
          </div>
          <p className="text-slate-300 mb-6 text-lg">
            Once Marina/Downtown saturated with all 3 categories, expand to new Dubai districts:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-center">
              <div className="text-4xl mb-2">🏙️</div>
              <p className="font-bold text-blue-300 mb-1">Abu Dhabi Launch</p>
              <p className="text-sm text-slate-300">Corniche + Yas Island • 50 merchants</p>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
              <div className="text-4xl mb-2">🏖️</div>
              <p className="font-bold text-purple-300 mb-1">JLT + Business Bay</p>
              <p className="text-sm text-slate-300">Corporate crowd • High spend</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 text-center">
              <div className="text-4xl mb-2">🏘️</div>
              <p className="font-bold text-emerald-300 mb-1">Arabian Ranches</p>
              <p className="text-sm text-slate-300">Residential • Family-focused</p>
            </div>
          </div>
        </div>

        {/* Key Metrics (H2 Targets) */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-black text-white mb-6 text-center">📊 H2 Key Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5 text-center">
              <TrendingUp size={24} className="text-blue-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-blue-300 uppercase mb-1">D30 Retention</p>
              <p className="text-3xl font-black text-blue-400">≥30%</p>
              <p className="text-xs text-slate-400 mt-1">Up from 25% in H1</p>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5 text-center">
              <Users size={24} className="text-purple-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-purple-300 uppercase mb-1">Multi-Category %</p>
              <p className="text-3xl font-black text-purple-400">≥40%</p>
              <p className="text-xs text-slate-400 mt-1">Users in 2+ categories</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 text-center">
              <DollarSign size={24} className="text-emerald-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-emerald-300 uppercase mb-1">CAC (Blended)</p>
              <p className="text-3xl font-black text-emerald-400">≤AED 35</p>
              <p className="text-xs text-slate-400 mt-1">Lower via economies</p>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5 text-center">
              <Zap size={24} className="text-yellow-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-yellow-300 uppercase mb-1">Monthly Sessions</p>
              <p className="text-3xl font-black text-yellow-400">≥12</p>
              <p className="text-xs text-slate-400 mt-1">Up from 8 in H1</p>
            </div>
          </div>
        </div>

        {/* Risks & Mitigations */}
        <div className="bg-gradient-to-br from-orange-900/30 to-red-800/20 border-2 border-orange-500/40 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle size={32} className="text-orange-400" />
            <h2 className="text-3xl font-black text-orange-300">Risks & Mitigations</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="font-bold text-orange-300 mb-2">Risk: Category Cannibalization</p>
                <p className="text-sm text-slate-300 mb-2">New categories distract from F&B core</p>
                <p className="text-sm text-emerald-300">
                  <strong>Mitigation:</strong> Maintain 60% F&B merchant mix, track category-level retention weekly
                </p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="font-bold text-orange-300 mb-2">Risk: Merchant Onboarding Slowdown</p>
                <p className="text-sm text-slate-300 mb-2">Healthcare requires compliance, longer sales cycles</p>
                <p className="text-sm text-emerald-300">
                  <strong>Mitigation:</strong> Dedicated healthcare BD lead, streamlined compliance docs
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="font-bold text-orange-300 mb-2">Risk: User Confusion</p>
                <p className="text-sm text-slate-300 mb-2">Too many categories = unclear value prop</p>
                <p className="text-sm text-emerald-300">
                  <strong>Mitigation:</strong> Clear in-app category tabs, onboarding shows all 3 categories
                </p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="font-bold text-orange-300 mb-2">Risk: Brand Coin Fragmentation</p>
                <p className="text-sm text-slate-300 mb-2">Users accumulate coins at one salon, can't use elsewhere</p>
                <p className="text-sm text-emerald-300">
                  <strong>Mitigation:</strong> Universal Coin always available, clear messaging on dual system
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* H2 Exit Criteria */}
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-blue-300">🎯 H2 → H3 Exit Criteria</h2>
          <p className="text-slate-300 mb-6">Must hit ALL metrics below to advance to H3 (Infrastructure Scale):</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">User Metrics</h3>
              <div className="space-y-3">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-blue-300 uppercase mb-1">Monthly Active Users</p>
                  <p className="text-3xl font-black text-blue-400">250,000 MAU</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-purple-300 uppercase mb-1">D30 Retention</p>
                  <p className="text-3xl font-black text-purple-400">≥30%</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-emerald-300 uppercase mb-1">Multi-Category Users</p>
                  <p className="text-3xl font-black text-emerald-400">≥40%</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Business Metrics</h3>
              <div className="space-y-3">
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-[#c9a227] uppercase mb-1">Merchants Live</p>
                  <p className="text-3xl font-black text-[#d4ab2c]">5,000+</p>
                  <p className="text-xs text-slate-400 mt-1">Across all 3 categories</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-blue-300 uppercase mb-1">GMV</p>
                  <p className="text-3xl font-black text-blue-400">AED 50M</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-purple-300 uppercase mb-1">Campaign Participation</p>
                  <p className="text-3xl font-black text-purple-400">≥40%</p>
                  <p className="text-xs text-slate-400 mt-1">Merchants running campaigns</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
            <p className="text-sm text-blue-300">
              <span className="font-bold">Early Advancement Rule:</span> If all KPIs hit 85% of target for 2 consecutive months, advance to H3 immediately
            </p>
          </div>
        </div>

        {/* Next Phase */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-2 border-slate-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Next: H3 GTM - Infrastructure & WaaS
          </h3>
          <p className="text-slate-300 mb-6">
            Platform play • B2B revenue • Enterprise partnerships • ~1.2 years
          </p>
          <a
            href="/h3-gtm"
            className="inline-block bg-[#c9a227] hover:bg-[#d4ab2c] text-slate-900 font-bold px-8 py-3 rounded-lg transition-colors"
          >
            View H3 GTM Strategy →
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-between pt-8 border-t border-slate-700">
          <a href="/h1-gtm" className="text-slate-400 hover:text-white transition-colors">
            ← Back to H1 GTM
          </a>
          <a href="/master-roadmap" className="text-slate-400 hover:text-white transition-colors">
            Master Roadmap
          </a>
          <a href="/h3-gtm" className="text-slate-400 hover:text-white transition-colors">
            H3 GTM →
          </a>
        </div>

      </div>
    </div>
  );
}
