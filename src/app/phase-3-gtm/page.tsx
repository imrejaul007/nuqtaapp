'use client';

import { CheckCircle2, Trophy, Users, Target, Zap, TrendingUp, DollarSign, Globe, Building2, Sparkles, Crown, Rocket } from 'lucide-react';

export default function Phase3GTMPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a42] to-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">

        {/* Hero Section */}
        <div className="space-y-6 text-center">
          <div className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/40 rounded-full text-amber-300 text-sm font-bold">
            🏆 PHASE 3: FULL GCC COMPLETION (~10 MONTHS)
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            GTM Strategy: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">Exit-Ready Infrastructure</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            "Parallel 3-country launch with institutional partnerships. Complete GCC coverage for maximum exit valuation."
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇰🇼🇧🇭🇴🇲</span>
              <span className="text-slate-300">Kuwait + Bahrain + Oman</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="text-slate-300">Parallel Launch Strategy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="text-amber-400 font-bold">~10 Months to Exit-Ready</span>
            </div>
          </div>
        </div>

        {/* GTM Philosophy */}
        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-2 border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-slate-100">🧠 Phase 3 GTM Philosophy</h2>
          <div className="space-y-4 text-lg text-slate-300">
            <p className="leading-relaxed">
              <span className="font-bold text-white">Institutional readiness, not grassroots:</span> By Phase 3, Nuqta has proven the model across 3 countries (UAE, Qatar, KSA). The final 3 markets are launched in PARALLEL using a top-down strategy: government partnerships first, then enterprise clients, then consumer scale.
            </p>
            <div className="bg-amber-500/10 border-l-4 border-amber-500 rounded-lg p-4">
              <p className="text-amber-300 font-bold">Core Principle:</p>
              <p className="text-slate-300 mt-2">Smaller markets (Kuwait 4.3M, Bahrain 1.7M, Oman 5M) can be launched simultaneously with shared infrastructure. Marginal cost per country: 20%.</p>
            </div>
          </div>
        </div>

        {/* Why Parallel Launch */}
        <div className="bg-gradient-to-br from-amber-900/30 to-yellow-800/20 border-2 border-amber-500/40 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Rocket size={32} className="text-amber-400" />
            <h2 className="text-3xl font-black text-amber-300">🚀 Why Parallel Launch (Not Sequential)?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-amber-300 mb-3">Strategic Advantages</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Speed to exit</p>
                      <p>10 months vs 30 months sequential = 3x faster</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Valuation premium</p>
                      <p>Full GCC coverage commands 20-30% higher exit multiples</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Competitive moat</p>
                      <p>Regional dominance narrative, first-mover lock-in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-yellow-300 mb-3">Operational Feasibility</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Proven playbook</p>
                      <p>UAE + Qatar + KSA = battle-tested GTM engine</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Shared infrastructure</p>
                      <p>One platform, one team, localized overlays only</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Smaller markets</p>
                      <p>Combined 11M population = manageable scale</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top-Down GTM Strategy */}
        <div className="bg-gradient-to-br from-purple-900/30 to-indigo-800/20 border-2 border-purple-500/40 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Crown size={32} className="text-purple-400" />
            <h2 className="text-3xl font-black text-purple-300">👑 Top-Down GTM Strategy (All 3 Countries)</h2>
          </div>
          <p className="text-slate-300 mb-6 text-lg">
            Unlike H1-H2 (grassroots), Phase 3 starts with <strong className="text-white">institutional partnerships</strong> before consumer scale:
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 text-white font-black text-xl mb-3">1</div>
              <p className="text-lg font-bold text-white mb-2">Government Partnerships</p>
              <p className="text-sm text-slate-300">Central banks, ministries, smart city initiatives</p>
              <div className="mt-3 text-xs text-purple-300 font-bold">Regulatory fast-track</div>
            </div>

            {/* Step 2 */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-black text-xl mb-3">2</div>
              <p className="text-lg font-bold text-white mb-2">Enterprise Clients</p>
              <p className="text-sm text-slate-300">Banks, telcos, malls, corporate HR</p>
              <div className="mt-3 text-xs text-blue-300 font-bold">WaaS deals pre-launch</div>
            </div>

            {/* Step 3 */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white font-black text-xl mb-3">3</div>
              <p className="text-lg font-bold text-white mb-2">Merchant Pre-Onboarding</p>
              <p className="text-sm text-slate-300">50+ merchants signed before consumer launch</p>
              <div className="mt-3 text-xs text-emerald-300 font-bold">Day 1 network effect</div>
            </div>

            {/* Step 4 */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500 text-slate-900 font-black text-xl mb-3">4</div>
              <p className="text-lg font-bold text-white mb-2">Consumer Launch</p>
              <p className="text-sm text-slate-300">Proven 3-channel GTM with digital ads</p>
              <div className="mt-3 text-xs text-amber-300 font-bold">Scale with leverage</div>
            </div>
          </div>
        </div>

        {/* 3 Countries Deep Dive */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-center text-slate-100">🌍 3-Country Parallel Launch Breakdown</h2>
          <div className="grid md:grid-cols-3 gap-6">

            {/* Kuwait */}
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border-2 border-green-500/40 rounded-2xl p-6">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">🇰🇼</div>
                <h3 className="text-2xl font-black text-green-300">Kuwait</h3>
                <p className="text-sm text-slate-400 mt-1">Population: 4.3M</p>
              </div>
              <div className="space-y-3">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p className="font-bold text-green-300 mb-2">Market Dynamics</p>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li>• Highest GDP per capita in GCC</li>
                    <li>• Strong expat presence (70%)</li>
                    <li>• Mature fintech adoption</li>
                  </ul>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                  <p className="font-bold text-emerald-300 mb-2">Key Partnerships</p>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li>• National Bank of Kuwait (NBK)</li>
                    <li>• Zain Kuwait (telco)</li>
                    <li>• Avenues Mall (retail)</li>
                  </ul>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                  <p className="font-bold text-cyan-300 mb-2">Target</p>
                  <div className="text-center mt-2">
                    <p className="text-2xl font-black text-cyan-400">30K MAU</p>
                    <p className="text-xs text-slate-400 mt-1">By Month 10</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bahrain */}
            <div className="bg-gradient-to-br from-red-900/30 to-pink-800/20 border-2 border-red-500/40 rounded-2xl p-6">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">🇧🇭</div>
                <h3 className="text-2xl font-black text-red-300">Bahrain</h3>
                <p className="text-sm text-slate-400 mt-1">Population: 1.7M</p>
              </div>
              <div className="space-y-3">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p className="font-bold text-red-300 mb-2">Market Dynamics</p>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li>• GCC fintech hub (regulatory sandbox)</li>
                    <li>• Small but influential market</li>
                    <li>• Cross-border to KSA (causeway)</li>
                  </ul>
                </div>
                <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
                  <p className="font-bold text-pink-300 mb-2">Key Partnerships</p>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li>• Central Bank of Bahrain (CBB)</li>
                    <li>• Benefit (payments network)</li>
                    <li>• Bahrain FinTech Bay</li>
                  </ul>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <p className="font-bold text-purple-300 mb-2">Target</p>
                  <div className="text-center mt-2">
                    <p className="text-2xl font-black text-purple-400">15K MAU</p>
                    <p className="text-xs text-slate-400 mt-1">By Month 10</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Oman */}
            <div className="bg-gradient-to-br from-orange-900/30 to-amber-800/20 border-2 border-orange-500/40 rounded-2xl p-6">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">🇴🇲</div>
                <h3 className="text-2xl font-black text-orange-300">Oman</h3>
                <p className="text-sm text-slate-400 mt-1">Population: 5M</p>
              </div>
              <div className="space-y-3">
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                  <p className="font-bold text-orange-300 mb-2">Market Dynamics</p>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li>• Growing middle class, urbanizing</li>
                    <li>• Government Vision 2040</li>
                    <li>• Less competitive fintech market</li>
                  </ul>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                  <p className="font-bold text-amber-300 mb-2">Key Partnerships</p>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li>• Bank Muscat (largest bank)</li>
                    <li>• Omantel (telco)</li>
                    <li>• Muscat City Centre (retail)</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <p className="font-bold text-yellow-300 mb-2">Target</p>
                  <div className="text-center mt-2">
                    <p className="text-2xl font-black text-yellow-400">35K MAU</p>
                    <p className="text-xs text-slate-400 mt-1">By Month 10</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GTM Channels (Proven Playbook) */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-white">🎯 GTM Channels (Proven Playbook + Digital Scale)</h2>
          <p className="text-slate-300 mb-6 text-lg">
            By Phase 3, all channels are mature and optimized. Now running at scale across 3 countries simultaneously:
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
              <div className="font-bold text-blue-300 mb-3 text-lg">1. Merchant QR</div>
              <div className="space-y-2 text-sm text-slate-300">
                <p><strong className="text-white">Mature CAC:</strong> AED 10 (down from AED 15)</p>
                <p><strong className="text-white">Target:</strong> 50+ merchants per country before launch</p>
                <p><strong className="text-white">Pre-onboarding:</strong> 3-month pipeline build</p>
              </div>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5">
              <div className="font-bold text-purple-300 mb-3 text-lg">2. Student Ambassadors</div>
              <div className="space-y-2 text-sm text-slate-300">
                <p><strong className="text-white">Universities:</strong> 5+ per country (Kuwait Uni, Bahrain Poly, Sultan Qaboos)</p>
                <p><strong className="text-white">Proven model:</strong> Same incentive structure</p>
                <p><strong className="text-white">Target CAC:</strong> Local currency equivalent of AED 30</p>
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
              <div className="font-bold text-emerald-300 mb-3 text-lg">3. Digital Ads (Scaled)</div>
              <div className="space-y-2 text-sm text-slate-300">
                <p><strong className="text-white">Channels:</strong> Meta, Google, TikTok</p>
                <p><strong className="text-white">Optimized CAC:</strong> AED 60-80 (proven in UAE)</p>
                <p><strong className="text-white">Budget:</strong> AED 500K per country (Month 1-6)</p>
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5">
              <div className="font-bold text-amber-300 mb-3 text-lg">4. WaaS Partnerships</div>
              <div className="space-y-2 text-sm text-slate-300">
                <p><strong className="text-white">Pre-launch:</strong> 1 WaaS client per country signed</p>
                <p><strong className="text-white">Banks/Fintechs:</strong> Instant enterprise distribution</p>
                <p><strong className="text-white">Revenue:</strong> AED 150K-300K annual per client</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shared Infrastructure Advantage */}
        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-800/20 border-2 border-cyan-500/40 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Globe size={32} className="text-cyan-400" />
            <h2 className="text-3xl font-black text-cyan-300">🌐 Shared Infrastructure = 80% Cost Savings</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">What's Shared (80%)</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                  <span><strong className="text-white">Platform code:</strong> One codebase, multi-tenant</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                  <span><strong className="text-white">Product team:</strong> UAE team builds for all 6 countries</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                  <span><strong className="text-white">Data infrastructure:</strong> Regional AWS, compliance-ready</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                  <span><strong className="text-white">Merchant tools:</strong> Dashboard, analytics, campaigns</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                  <span><strong className="text-white">Payment engine:</strong> One integration, multi-currency</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">What's Localized (20%)</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 mt-0.5" />
                  <span><strong className="text-white">Currency:</strong> KWD, BHD, OMR display</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 mt-0.5" />
                  <span><strong className="text-white">Language:</strong> Arabic dialect adjustments</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 mt-0.5" />
                  <span><strong className="text-white">Country managers:</strong> 1 per country (local BD + ops)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 mt-0.5" />
                  <span><strong className="text-white">Bank integrations:</strong> Local payment rails</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 mt-0.5" />
                  <span><strong className="text-white">Marketing assets:</strong> Country-specific social media</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-center">
            <p className="text-cyan-300">
              <span className="font-bold">Result:</span> Launching 3 countries costs ~60% of what 1 country cost in Phase 2
            </p>
          </div>
        </div>

        {/* 10-Month Timeline */}
        <div className="bg-gradient-to-br from-purple-900/30 to-indigo-800/20 border-2 border-purple-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-purple-300">📅 10-Month Timeline Breakdown</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {/* Months 1-2 */}
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
              <p className="text-lg font-black text-purple-300 mb-2">Months 1-2</p>
              <p className="text-sm text-slate-300 mb-3">Legal & Setup</p>
              <div className="space-y-1 text-xs text-slate-400">
                <p>• 3 country licenses</p>
                <p>• Bank partnerships</p>
                <p>• Team hiring</p>
              </div>
            </div>

            {/* Months 3-4 */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
              <p className="text-lg font-black text-blue-300 mb-2">Months 3-4</p>
              <p className="text-sm text-slate-300 mb-3">Merchant Pre-Onboarding</p>
              <div className="space-y-1 text-xs text-slate-400">
                <p>• 50+ merchants/country</p>
                <p>• WaaS deals signed</p>
                <p>• Product localization</p>
              </div>
            </div>

            {/* Months 5-6 */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
              <p className="text-lg font-black text-emerald-300 mb-2">Months 5-6</p>
              <p className="text-sm text-slate-300 mb-3">Soft Launch</p>
              <div className="space-y-1 text-xs text-slate-400">
                <p>• 10 merchants live/country</p>
                <p>• 500 beta users each</p>
                <p>• Prove core loop</p>
              </div>
            </div>

            {/* Months 7-8 */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
              <p className="text-lg font-black text-amber-300 mb-2">Months 7-8</p>
              <p className="text-sm text-slate-300 mb-3">Scale Phase</p>
              <div className="space-y-1 text-xs text-slate-400">
                <p>• Digital ads launched</p>
                <p>• 50+ merchants/country</p>
                <p>• Hit 15K MAU each</p>
              </div>
            </div>

            {/* Months 9-10 */}
            <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-4 text-center">
              <p className="text-lg font-black text-[#c9a227] mb-2">Months 9-10</p>
              <p className="text-sm text-slate-300 mb-3">Exit-Ready</p>
              <div className="space-y-1 text-xs text-slate-400">
                <p>• Combined 80K MAU</p>
                <p>• Unit economics proven</p>
                <p>• Full GCC live</p>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 3 Exit Metrics */}
        <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/10 border-2 border-[#c9a227]/40 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Trophy size={32} className="text-[#c9a227]" />
            <h2 className="text-3xl font-black text-[#c9a227]">🏆 Exit-Ready Metrics (End of Phase 3)</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* User Metrics */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-300 mb-4 text-center">👥 User Metrics</h3>
              <div className="space-y-3">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-center">
                  <p className="text-xs font-semibold text-blue-300 uppercase mb-1">Total MAU (All 6 GCC)</p>
                  <p className="text-4xl font-black text-blue-400">300K+</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
                  <p className="text-xs font-semibold text-purple-300 uppercase mb-1">D30 Retention</p>
                  <p className="text-4xl font-black text-purple-400">≥35%</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 text-center">
                  <p className="text-xs font-semibold text-emerald-300 uppercase mb-1">Monthly Churn</p>
                  <p className="text-4xl font-black text-emerald-400">≤8%</p>
                </div>
              </div>
            </div>

            {/* Financial Metrics */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#c9a227] mb-4 text-center">💰 Financial Metrics</h3>
              <div className="space-y-3">
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-4 text-center">
                  <p className="text-xs font-semibold text-[#c9a227] uppercase mb-1">Annual Revenue</p>
                  <p className="text-4xl font-black text-[#d4ab2c]">AED 420M</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 text-center">
                  <p className="text-xs font-semibold text-emerald-300 uppercase mb-1">EBITDA Margin</p>
                  <p className="text-4xl font-black text-emerald-400">60%</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
                  <p className="text-xs font-semibold text-purple-300 uppercase mb-1">LTV:CAC</p>
                  <p className="text-4xl font-black text-purple-400">≥20x</p>
                </div>
              </div>
            </div>

            {/* Business Model */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-cyan-300 mb-4 text-center">🏢 Business Model</h3>
              <div className="space-y-3">
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                  <p className="text-xs font-semibold text-cyan-300 uppercase mb-1">GMV Revenue</p>
                  <p className="text-3xl font-black text-cyan-400 text-center">40%</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-xs font-semibold text-blue-300 uppercase mb-1">WaaS/SaaS Revenue</p>
                  <p className="text-3xl font-black text-blue-400 text-center">30%</p>
                </div>
                <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
                  <p className="text-xs font-semibold text-pink-300 uppercase mb-1">Data/Ads Revenue</p>
                  <p className="text-3xl font-black text-pink-400 text-center">30%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-orange-300 mb-4 text-center">🌍 Regional Coverage</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex justify-between items-center bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
                  <span>Total Merchants (All GCC)</span>
                  <span className="text-orange-400 font-black text-xl">3,000+</span>
                </div>
                <div className="flex justify-between items-center bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                  <span>WaaS Partnerships</span>
                  <span className="text-yellow-400 font-black text-xl">15+</span>
                </div>
                <div className="flex justify-between items-center bg-amber-500/10 border border-amber-500/30 rounded-lg p-3">
                  <span>Annual GMV</span>
                  <span className="text-amber-400 font-black text-xl">AED 7B</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-emerald-300 mb-4 text-center">💎 Exit Valuation</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3 text-center">
                  <p className="text-xs text-emerald-300 uppercase mb-1">Conservative (6x ARR)</p>
                  <p className="text-2xl font-black text-emerald-400">$800M</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 text-center">
                  <p className="text-xs text-blue-300 uppercase mb-1">Market Median (10x ARR)</p>
                  <p className="text-2xl font-black text-blue-400">$1.4B</p>
                </div>
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-3 text-center">
                  <p className="text-xs text-[#c9a227] uppercase mb-1">Strategic Premium (15x ARR)</p>
                  <p className="text-2xl font-black text-[#d4ab2c]">$2.3B</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Journey Summary */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-2 border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-black text-white mb-6 text-center">🎯 Complete Journey: UAE → Full GCC</h2>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <p className="text-lg font-bold text-emerald-300">H1</p>
              <p className="text-sm text-slate-400">~5 months</p>
              <p className="text-xs text-slate-500 mt-1">50K MAU</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔷</div>
              <p className="text-lg font-bold text-blue-300">H2</p>
              <p className="text-sm text-slate-400">~2.5 months</p>
              <p className="text-xs text-slate-500 mt-1">250K MAU</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🟣</div>
              <p className="text-lg font-bold text-purple-300">H3</p>
              <p className="text-sm text-slate-400">~1.2 years</p>
              <p className="text-xs text-slate-500 mt-1">500K MAU</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌍</div>
              <p className="text-lg font-bold text-cyan-300">Phase 2</p>
              <p className="text-sm text-slate-400">~1.2 years</p>
              <p className="text-xs text-slate-500 mt-1">Qatar + KSA</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🏆</div>
              <p className="text-lg font-bold text-[#c9a227]">Phase 3</p>
              <p className="text-sm text-slate-400">~10 months</p>
              <p className="text-xs text-slate-500 mt-1">Full GCC</p>
            </div>
          </div>
          <div className="mt-8 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-6 text-center">
            <p className="text-3xl font-black text-[#c9a227] mb-2">~4 Years Total</p>
            <p className="text-slate-300">From zero to exit-ready GCC platform • 60% faster than standard 10-year plan</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-amber-800 to-yellow-900 border-2 border-amber-500 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-3xl font-bold text-white mb-4">
            GTM Strategy Complete: UAE → Full GCC
          </h3>
          <p className="text-xl text-amber-100 mb-6">
            Institutional-grade execution roadmap • Proven playbooks • Exit-ready in 4 years
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="/master-roadmap"
              className="inline-block bg-white hover:bg-slate-100 text-slate-900 font-bold px-8 py-3 rounded-lg transition-colors"
            >
              View Master Roadmap
            </a>
            <a
              href="/deck-kang"
              className="inline-block bg-[#c9a227] hover:bg-[#d4ab2c] text-slate-900 font-bold px-8 py-3 rounded-lg transition-colors"
            >
              View Full Pitch Deck →
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-between pt-8 border-t border-slate-700">
          <a href="/phase-2-gtm" className="text-slate-400 hover:text-white transition-colors">
            ← Back to Phase 2 GTM
          </a>
          <a href="/master-roadmap" className="text-slate-400 hover:text-white transition-colors">
            Master Roadmap
          </a>
          <a href="/deck-kang" className="text-slate-400 hover:text-white transition-colors">
            Pitch Deck →
          </a>
        </div>

      </div>
    </div>
  );
}
