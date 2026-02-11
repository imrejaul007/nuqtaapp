'use client';

import { CheckCircle2, Store, Users, Target, Zap, TrendingUp, DollarSign, AlertCircle, Clock, Repeat } from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function H1GTMPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a42] to-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">

        {/* Hero Section */}
        <div className="space-y-6 text-center">
          <div className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-emerald-300 text-sm font-bold">
            🚀 H1: PROVE THE LOOP (~5 MONTHS)
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-7xl font-black tracking-tight">
            GTM Strategy: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-600">Habit Formation First</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            "Build daily saving habits through high-density, low-CAC distribution. Prove unit economics before scaling."
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="text-slate-300">Target: 50K MAU (Aggressive)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📍</span>
              <span className="text-slate-300">Dubai Marina + JBR Focus</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⏱️</span>
              <span className="text-emerald-400 font-bold">~5 Months (Accelerated)</span>
            </div>
          </div>
        </div>

        {/* GTM Philosophy */}
        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-2 border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-slate-100">🧠 GTM Philosophy</h2>
          <div className="space-y-4 text-lg text-slate-300">
            <p className="leading-relaxed">
              <span className="font-bold text-white">Institutional-grade discipline:</span> Nuqta scales by first creating daily saving habits, then using merchants as distribution, and finally layering digital growth once unit economics are proven — city by city.
            </p>
            <div className="bg-[#c9a227]/10 border-l-4 border-[#c9a227] rounded-lg p-4">
              <p className="text-[#c9a227] font-bold">Core Principle:</p>
              <p className="text-slate-300 mt-2">Density before breadth. Habits before scale. Retention before acquisition.</p>
            </div>
          </div>
        </div>

        {/* 3 GTM Rules */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-center text-slate-100">⚖️ The 3 GTM Rules (Discipline Signals)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-2xl p-6">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">1️⃣</div>
              <h3 className="text-2xl font-bold text-purple-300 mb-3">Only 3 Channels</h3>
              <p className="text-slate-300">
                For the first 6 months. No "test everything" mode. Focus creates mastery.
              </p>
              <div className="mt-4 bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
                <p className="text-sm text-purple-200">Merchant QR, Student Ambassadors, Habit Loops</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-6">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">2️⃣</div>
              <h3 className="text-2xl font-bold text-blue-300 mb-3">Metrics, Not Vanity</h3>
              <p className="text-slate-300">
                D7/D30 retention &gt; user count. Weekly reviews. Kill what doesn't work.
              </p>
              <div className="mt-4 bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                <p className="text-sm text-blue-200">Target: ≥30% D7, ≥25% D30 retention</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border-2 border-emerald-500/40 rounded-2xl p-6">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">3️⃣</div>
              <h3 className="text-2xl font-bold text-emerald-300 mb-3">Density Before Breadth</h3>
              <p className="text-slate-300">
                Own Marina/Downtown before expanding cities. One neighborhood at a time.
              </p>
              <div className="mt-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3">
                <p className="text-sm text-emerald-200">500 merchants + 50K users before Abu Dhabi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Growth Engine */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Zap size={32} className="text-yellow-400" />
            <h2 className="text-3xl font-black text-white">Core Growth Engine: Habit Loops</h2>
          </div>
          <p className="text-slate-300 mb-6 text-lg">
            The foundation of everything. Build the "lunch time = open Nuqta" habit in 30 days.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-black text-xl mb-3">1</div>
              <p className="text-lg font-bold text-white mb-2">Trigger</p>
              <p className="text-sm text-slate-300">Lunch time (12-2pm)</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 text-white font-black text-xl mb-3">2</div>
              <p className="text-lg font-bold text-white mb-2">Action</p>
              <p className="text-sm text-slate-300">Open Nuqta → Search 'lunch'</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white font-black text-xl mb-3">3</div>
              <p className="text-lg font-bold text-white mb-2">Reward</p>
              <p className="text-sm text-slate-300">5-10% instant cashback</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 text-slate-900 font-black text-xl mb-3">4</div>
              <p className="text-lg font-bold text-white mb-2">Repeat</p>
              <p className="text-sm text-slate-300">Daily 12pm habit formed</p>
            </div>
          </div>
          <div className="mt-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 text-center">
            <p className="text-yellow-300">
              <span className="font-bold">Goal:</span> Users open Nuqta 8+ times/month within 30 days. This habit is the foundation.
            </p>
          </div>
        </div>

        {/* 3 Primary Channels */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-center text-slate-100">🎯 3 Primary Channels (Months 1-6)</h2>
          <div className="grid md:grid-cols-3 gap-6">

            {/* Channel 1: Merchant QR */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 mb-4">
                <Store size={28} className="text-white" />
              </div>
              <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full mb-3">
                <p className="text-xs font-bold text-blue-300 uppercase">Primary Channel</p>
              </div>
              <h3 className="text-2xl font-black text-blue-300 mb-3">Merchant-Led QR Distribution</h3>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-blue-300 uppercase mb-1">Target CAC</p>
                <p className="text-4xl font-black text-blue-400">≤ AED 15</p>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-slate-300">Merchants display QR at checkout</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-slate-300">User scans → instant 5-10% cashback</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-slate-300">Target: 50 high-traffic merchants</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-slate-300">Focus: Marina/Downtown Dubai</p>
                </div>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3">
                <p className="text-xs font-semibold text-slate-400 uppercase mb-1">Why It Works</p>
                <p className="text-sm text-slate-300">Merchants become our sales force. Zero paid ads needed.</p>
              </div>
            </div>

            {/* Channel 2: Student Ambassadors */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-2xl p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-500 mb-4">
                <Users size={28} className="text-white" />
              </div>
              <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full mb-3">
                <p className="text-xs font-bold text-purple-300 uppercase">Secondary Channel</p>
              </div>
              <h3 className="text-2xl font-black text-purple-300 mb-3">Student Ambassador Program</h3>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-purple-300 uppercase mb-1">Target CAC</p>
                <p className="text-4xl font-black text-purple-400">≤ AED 30</p>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-slate-300">10 ambassadors at AUD, UAEU, HCT</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-slate-300">AED 500/month + AED 10 per user</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-slate-300">Target: 200 signups/month</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-slate-300">50 activate (25% activation rate)</p>
                </div>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3">
                <p className="text-xs font-semibold text-slate-400 uppercase mb-1">Why It Works</p>
                <p className="text-sm text-slate-300">Students trust peers. Low-cost, high-quality acquisition.</p>
              </div>
            </div>

            {/* Channel 3: Habit Loops */}
            <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border-2 border-emerald-500/40 rounded-2xl p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 mb-4">
                <Repeat size={28} className="text-white" />
              </div>
              <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full mb-3">
                <p className="text-xs font-bold text-emerald-300 uppercase">Retention Foundation</p>
              </div>
              <h3 className="text-2xl font-black text-emerald-300 mb-3">Daily Saving Habits</h3>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-emerald-300 uppercase mb-1">Target Retention</p>
                <p className="text-4xl font-black text-emerald-400">D30 ≥ 25%</p>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-slate-300">Push: "Lunch deals near you"</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-slate-300">7-day streak rewards (+2% cashback)</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-slate-300">Target: 8+ sessions/month</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-slate-300">Coin balance reminders</p>
                </div>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3">
                <p className="text-xs font-semibold text-slate-400 uppercase mb-1">Why It Works</p>
                <p className="text-sm text-slate-300">Habits drive LTV. Retention &gt; acquisition at this stage.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Scale Gating */}
        <div className="bg-gradient-to-br from-red-900/30 to-orange-800/20 border-2 border-red-500/40 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle size={32} className="text-red-400" />
            <h2 className="text-3xl font-black text-red-300">Digital Scale (Gated Until Economics Proven)</h2>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-6">
            <p className="text-lg text-slate-300 mb-4">
              <span className="font-bold text-red-400">Rule:</span> No paid digital ads (Meta, Google, TikTok) until:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <p className="text-sm font-semibold text-emerald-300 uppercase mb-1">Activation</p>
                <p className="text-3xl font-black text-emerald-400">50,000 MAU</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <p className="text-sm font-semibold text-blue-300 uppercase mb-1">Retention</p>
                <p className="text-3xl font-black text-blue-400">35% Repeat Rate</p>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <p className="text-sm font-semibold text-purple-300 uppercase mb-1">Merchant Health</p>
                <p className="text-3xl font-black text-purple-400">&lt;5% Churn</p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-1" />
            <p className="text-sm text-slate-300">
              <span className="font-bold text-red-400">Why this discipline matters:</span> Paid ads scale broken products.
              We prove retention + LTV first, then layer digital to amplify what already works.
            </p>
          </div>
        </div>

        {/* Key Metrics Dashboard */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-black text-white mb-6 text-center">📊 Key Metrics (Weekly Review)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5 text-center">
              <TrendingUp size={24} className="text-blue-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-blue-300 uppercase mb-1">D7 Retention</p>
              <p className="text-3xl font-black text-blue-400">≥30%</p>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5 text-center">
              <Repeat size={24} className="text-purple-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-purple-300 uppercase mb-1">D30 Retention</p>
              <p className="text-3xl font-black text-purple-400">≥25%</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 text-center">
              <DollarSign size={24} className="text-emerald-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-emerald-300 uppercase mb-1">CAC (Blended)</p>
              <p className="text-3xl font-black text-emerald-400">≤AED 40</p>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5 text-center">
              <Zap size={24} className="text-yellow-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-yellow-300 uppercase mb-1">Activation Rate</p>
              <p className="text-3xl font-black text-yellow-400">≥40%</p>
            </div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
            <p className="text-sm text-slate-300">
              <span className="font-bold text-white">Activation = </span>
              User completes first transaction within 7 days of signup
            </p>
          </div>
        </div>

        {/* Geographic Strategy */}
        <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 border-2 border-[#c9a227]/40 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-[#c9a227] mb-4 text-center">📍 Geographic Expansion Rule</h2>
          <p className="text-lg text-slate-300 max-w-5xl mx-auto text-center leading-relaxed">
            <span className="font-bold text-white">Density before breadth:</span> Own Marina + Downtown Dubai
            (500 merchants, 50K users, 35% repeat rate) before launching Abu Dhabi. One city at a time, proven economics first.
          </p>
        </div>

        {/* H1 Exit Criteria */}
        <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border-2 border-emerald-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-emerald-300">🎯 H1 → H2 Exit Criteria</h2>
          <p className="text-slate-300 mb-6">Must hit ALL metrics below to advance to H2 (Category Expansion):</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">User Metrics</h3>
              <div className="space-y-3">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-emerald-300 uppercase mb-1">Monthly Active Users (Aggressive)</p>
                  <p className="text-3xl font-black text-emerald-400">50,000 MAU</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-blue-300 uppercase mb-1">D30 Retention</p>
                  <p className="text-3xl font-black text-blue-400">≥25%</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-purple-300 uppercase mb-1">Activation Rate</p>
                  <p className="text-3xl font-black text-purple-400">≥40%</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Business Metrics</h3>
              <div className="space-y-3">
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-[#c9a227] uppercase mb-1">Merchants Live</p>
                  <p className="text-3xl font-black text-[#d4ab2c]">1,500+</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-emerald-300 uppercase mb-1">GMV</p>
                  <p className="text-3xl font-black text-emerald-400">AED 10M</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-blue-300 uppercase mb-1">LTV:CAC Ratio</p>
                  <p className="text-3xl font-black text-blue-400">≥10x</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
            <p className="text-sm text-emerald-300">
              <span className="font-bold">Early Advancement Rule:</span> If all KPIs hit 90% of target for 2 consecutive months, advance to H2 immediately
            </p>
          </div>
        </div>

        {/* Next Phase */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-2 border-slate-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Next: H2 GTM - Category Expansion
          </h3>
          <p className="text-slate-300 mb-6">
            Healthcare + Home Services • Multi-category playbook • ~2.5 months
          </p>
          <a
            href="/h2-gtm"
            className="inline-block bg-[#c9a227] hover:bg-[#d4ab2c] text-slate-900 font-bold px-8 py-3 rounded-lg transition-colors"
          >
            View H2 GTM Strategy →
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-between pt-8 border-t border-slate-700">
          <a href="/execution-plan" className="text-slate-400 hover:text-white transition-colors">
            ← Back to H1 Execution Plan
          </a>
          <a href="/master-roadmap" className="text-slate-400 hover:text-white transition-colors">
            Master Roadmap
          </a>
          <a href="/h2-gtm" className="text-slate-400 hover:text-white transition-colors">
            H2 GTM →
          </a>
        </div>

      </div>
    <GlobalFooter />
    </div>
  );
}
