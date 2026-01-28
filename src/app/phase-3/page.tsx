'use client'

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a42] to-[#0a1628] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">

        {/* Hero Section */}
        <div className="space-y-6 text-center">
          <div className="inline-block px-4 py-2 bg-pink-500/20 border border-pink-500/40 rounded-full text-pink-300 text-sm font-bold">
            🟣 PHASE 3 (Years 9-10)
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            Economic <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">Infrastructure</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            "From Regional Platform to Economic Infrastructure"
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></div>
              <span className="text-pink-300">Infrastructure Embedding Blueprint</span>
            </div>
            <div className="text-pink-400">•</div>
            <div className="text-pink-300">2034-2035 (Post-Phase 2)</div>
            <div className="text-pink-400">•</div>
            <a href="/master-roadmap" className="text-[#c9a227] hover:text-white transition-colors font-semibold underline">
              ← Master Roadmap
            </a>
            <div className="text-pink-400">•</div>
            <a href="/phase-2" className="text-pink-300 hover:text-white transition-colors font-semibold underline">
              ← Phase 2
            </a>
          </div>
        </div>

        {/* Core Objective */}
        <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/20 border-2 border-pink-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-4 text-pink-300">🎯 Phase 3 Core Objective</h2>
          <p className="text-2xl font-bold text-white mb-6">
            Make Nuqta the default rewards, payments-intelligence, and loyalty layer for offline commerce across the entire GCC.
          </p>
          <p className="text-lg text-slate-300 mb-4">
            In Phase 3, Nuqta is <span className="font-bold text-white">no longer about growth speed</span>.
            It is about <span className="font-bold text-white">irreversibility</span>.
          </p>
          <p className="text-lg text-pink-300 font-bold">
            Phase 3 is where removal becomes painful for governments, malls, banks, and merchants.
          </p>
        </div>

        {/* Geography */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-center">📍 Phase 3 Geography</h2>
          <p className="text-center text-slate-300 text-lg">Completing the GCC with infrastructure-first approach</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Kuwait */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🇰🇼</div>
                <div>
                  <h3 className="text-2xl font-black text-blue-300">Kuwait</h3>
                  <div className="text-sm text-blue-400">Months 1-8</div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="text-blue-400 mt-0.5">•</div>
                  <div className="text-slate-300">
                    <span className="font-bold text-white">Population:</span> 4.6M (1.4M nationals, 3.2M expats)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-blue-400 mt-0.5">•</div>
                  <div className="text-slate-300">
                    <span className="font-bold text-white">Entry:</span> The Avenues Mall, Alshaya Group, Kuwait National Day
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <div className="text-xs text-blue-300 font-bold mb-2">TARGETS (MONTH 8)</div>
                <div className="space-y-1 text-xs text-slate-300">
                  <div>✅ 400 merchants (70% via mall partnerships)</div>
                  <div>✅ 50,000 users (60% institutional)</div>
                  <div>✅ AED 50M GMV</div>
                </div>
              </div>
            </div>

            {/* Bahrain */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🇧🇭</div>
                <div>
                  <h3 className="text-2xl font-black text-purple-300">Bahrain</h3>
                  <div className="text-sm text-purple-400">Months 6-12</div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="text-purple-400 mt-0.5">•</div>
                  <div className="text-slate-300">
                    <span className="font-bold text-white">Population:</span> 1.5M (700K nationals, 800K expats)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-purple-400 mt-0.5">•</div>
                  <div className="text-slate-300">
                    <span className="font-bold text-white">Entry:</span> Bahrain Islamic Bank, Batelco, University of Bahrain
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <div className="text-xs text-purple-300 font-bold mb-2">TARGETS (MONTH 12)</div>
                <div className="space-y-1 text-xs text-slate-300">
                  <div>✅ 200 merchants (60% via malls)</div>
                  <div>✅ 30,000 users (50% bank/telecom)</div>
                  <div>✅ AED 30M GMV</div>
                </div>
              </div>
            </div>

            {/* Oman */}
            <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border-2 border-pink-500/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🇴🇲</div>
                <div>
                  <h3 className="text-2xl font-black text-pink-300">Oman</h3>
                  <div className="text-sm text-pink-400">Months 9-18</div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="text-pink-400 mt-0.5">•</div>
                  <div className="text-slate-300">
                    <span className="font-bold text-white">Population:</span> 4.6M (2.8M nationals, 1.8M expats)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-pink-400 mt-0.5">•</div>
                  <div className="text-slate-300">
                    <span className="font-bold text-white">Entry:</span> Ministry of Tourism, Muscat Festival, Oman Air
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-pink-500/10 border border-pink-500/30 rounded-lg">
                <div className="text-xs text-pink-300 font-bold mb-2">TARGETS (MONTH 18)</div>
                <div className="space-y-1 text-xs text-slate-300">
                  <div>✅ 300 merchants (50% tourism-focused)</div>
                  <div>✅ 40,000 users (40% tourists, 60% residents)</div>
                  <div>✅ AED 40M GMV</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How Phase 3 is Different */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-center">1️⃣ How Phase 3 is Different from Phase 2</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-pink-500/40">
                  <th className="py-3 px-4 font-bold text-pink-300">Dimension</th>
                  <th className="py-3 px-4 font-bold text-blue-300">Phase 2 (KSA + Qatar)</th>
                  <th className="py-3 px-4 font-bold text-pink-300">Phase 3 (Kuwait + Bahrain + Oman)</th>
                </tr>
              </thead>
              <tbody className="text-slate-300 text-sm">
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-bold text-white">Objective</td>
                  <td className="py-3 px-4">Enter big markets</td>
                  <td className="py-3 px-4 text-pink-300">Complete the region</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-bold text-white">Entry</td>
                  <td className="py-3 px-4">Merchant-first (chains)</td>
                  <td className="py-3 px-4 text-pink-300">Institution-first (malls, banks, governments)</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-bold text-white">Strategy</td>
                  <td className="py-3 px-4">Bottom-up density</td>
                  <td className="py-3 px-4 text-pink-300">Top-down embedding</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-bold text-white">Focus</td>
                  <td className="py-3 px-4">GMV growth</td>
                  <td className="py-3 px-4 text-pink-300">System lock-in</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-bold text-white">Revenue</td>
                  <td className="py-3 px-4">Transaction fees dominant</td>
                  <td className="py-3 px-4 text-pink-300">Diversified (SaaS, data, partnerships)</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-bold text-white">Mindset</td>
                  <td className="py-3 px-4">Prove regional scale</td>
                  <td className="py-3 px-4 text-pink-300 font-bold">Achieve irreversibility</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Product Strategy */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-center">3️⃣ Phase 3 Product Additions (Infrastructure-Grade)</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* WaaS */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-6">
              <h3 className="text-xl font-black text-blue-300 mb-4">🧱 Wallet-as-a-Service (WaaS)</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div>• White-labeled wallet infrastructure for institutions</div>
                <div>• "Avenues Rewards" powered by Nuqta backend</div>
                <div>• "BU Student Wallet" powered by Nuqta backend</div>
                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-xs">
                  <div className="font-bold text-blue-300 mb-1">Pricing:</div>
                  <div>• AED 100K setup + AED 50K/month platform fee</div>
                  <div>• 2% of GMV revenue share</div>
                  <div>• AED 30K/month for analytics dashboard</div>
                </div>
              </div>
            </div>

            {/* City & Government */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-2xl p-6">
              <h3 className="text-xl font-black text-purple-300 mb-4">🏛️ City & Government Integration</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div>• Kuwait City Pass (tourism board partnership)</div>
                <div>• Oman Tourism Wallet (Ministry of Tourism)</div>
                <div>• Bahrain SME Support Program (government coins)</div>
                <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-xs">
                  <div className="font-bold text-purple-300 mb-1">Strategic Value:</div>
                  <div>Public infrastructure status, policy alignment, regulatory buffer</div>
                </div>
              </div>
            </div>

            {/* Data API */}
            <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border-2 border-pink-500/40 rounded-2xl p-6">
              <h3 className="text-xl font-black text-pink-300 mb-4">🧠 Data & Intelligence API</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div>• Banks buy spend insights (AED 200K-500K/year)</div>
                <div>• City planners buy footfall heatmaps (AED 100K-300K/year)</div>
                <div>• Tourism boards buy visitor analytics (AED 150K-400K/year)</div>
                <div className="mt-4 p-3 bg-pink-500/10 border border-pink-500/30 rounded-lg text-xs">
                  <div className="font-bold text-pink-300 mb-1">Why It Matters:</div>
                  <div>70-80% gross margins, defensible moat, recurring contracts</div>
                </div>
              </div>
            </div>

            {/* Cross-Border */}
            <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border-2 border-emerald-500/40 rounded-2xl p-6">
              <h3 className="text-xl font-black text-emerald-300 mb-4">🌍 Cross-Border Rewards Engine</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div>• GCC-wide loyalty for airlines (Gulf Air, Kuwait Airways)</div>
                <div>• Hotel chains (Rotana, Jumeirah)</div>
                <div>• Telecom operators (Etisalat, Ooredoo)</div>
                <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-xs">
                  <div className="font-bold text-emerald-300 mb-1">Enterprise Revenue:</div>
                  <div>AED 500K-2M/year per airline/hotel partnership</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Model */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/30 border-2 border-slate-600/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6">Revenue Model Evolution (Year 10 Target)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-4">Phase 2 (Year 8)</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex justify-between">
                  <span>Transaction Fees</span>
                  <span className="font-bold text-white">60%</span>
                </div>
                <div className="flex justify-between">
                  <span>Enterprise SaaS</span>
                  <span className="font-bold text-white">20%</span>
                </div>
                <div className="flex justify-between">
                  <span>Data & Insights</span>
                  <span className="font-bold text-white">15%</span>
                </div>
                <div className="flex justify-between">
                  <span>BNPL</span>
                  <span className="font-bold text-white">5%</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-4">Phase 3 (Year 10)</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex justify-between">
                  <span>Transaction Fees</span>
                  <span className="font-bold text-white">40-45%</span>
                </div>
                <div className="flex justify-between">
                  <span>Enterprise SaaS</span>
                  <span className="font-bold text-white">25-30%</span>
                </div>
                <div className="flex justify-between">
                  <span>Data & Insights</span>
                  <span className="font-bold text-white">15-20%</span>
                </div>
                <div className="flex justify-between">
                  <span>Strategic Partnerships</span>
                  <span className="font-bold text-white">10-15%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
            <p className="text-sm text-slate-300">
              <span className="font-bold text-emerald-300">Why This Matters:</span> 60% revenue from non-GMV sources = less volatile,
              higher margins (60% gross vs 45%), more defensible (2-3 year contracts). SaaS/data companies trade at 8-12x revenue vs 2-4x for transaction platforms.
            </p>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border-2 border-pink-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-pink-300">📊 Phase 3 Success Metrics</h2>
          <p className="text-lg font-bold text-white mb-6">By Mid-Phase 3 (Year 9.5):</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-bold mb-4 text-pink-300">User & Merchant Metrics</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <span className="font-bold text-white">300,000+ active users</span> across 6 GCC countries</li>
                <li>• <span className="font-bold text-white">40% cross-border usage</span> (defensibility signal)</li>
                <li>• <span className="font-bold text-white">35% D30 retention</span> maintained</li>
                <li>• <span className="font-bold text-white">3,000+ merchants</span> (70% chains, 30% independents)</li>
                <li>• <span className="font-bold text-white">65% merchant retention</span> Year 2+</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-pink-300">Institutional Metrics (NEW)</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <span className="font-bold text-white">15+ WaaS partnerships</span> (malls, universities, corporate)</li>
                <li>• <span className="font-bold text-white">10+ government partnerships</span> (tourism, SME funds)</li>
                <li>• <span className="font-bold text-white">5+ enterprise partnerships</span> (airlines, hotels, telecom)</li>
                <li>• <span className="font-bold text-white">3+ banking partnerships</span> (card-linked insights)</li>
                <li>• <span className="font-bold text-white">80% institutional acquisition</span> (CAC efficiency)</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-white mb-1">AED 7B</div>
              <div className="text-xs text-slate-300">Annual GMV</div>
            </div>
            <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-white mb-1">AED 420M</div>
              <div className="text-xs text-slate-300">Revenue</div>
            </div>
            <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-white mb-1">AED 250M</div>
              <div className="text-xs text-slate-300">EBITDA (60%)</div>
            </div>
            <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-white mb-1">100</div>
              <div className="text-xs text-slate-300">Team Size</div>
            </div>
          </div>
        </div>

        {/* Risks & Defense */}
        <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-2 border-red-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-red-300">⚠️ What Could Kill You in Phase 3</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="text-2xl mb-2">❌</div>
              <div className="font-bold text-red-300 mb-2">Over-Customization</div>
              <div className="text-sm text-slate-300 mb-2">Each mall/bank wants custom features → engineering debt</div>
              <div className="text-xs text-emerald-300">✅ Defense: Standardized tiers (Bronze/Silver/Gold), no one-off builds</div>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="text-2xl mb-2">❌</div>
              <div className="font-bold text-red-300 mb-2">Regulatory Creep</div>
              <div className="text-sm text-slate-300 mb-2">Holding AED 500M balances → reclassified as bank</div>
              <div className="text-xs text-emerald-300">✅ Defense: Partner with licensed entities, pure software play</div>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="text-2xl mb-2">❌</div>
              <div className="font-bold text-red-300 mb-2">Big Tech Retaliation</div>
              <div className="text-sm text-slate-300 mb-2">Apple/Google launch competing rewards programs</div>
              <div className="text-xs text-emerald-300">✅ Defense: Neutral positioning, government partnerships shield, 5+ year data moat</div>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="text-2xl mb-2">❌</div>
              <div className="font-bold text-red-300 mb-2">Margin Compression</div>
              <div className="text-sm text-slate-300 mb-2">Merchants demand lower fees (15% → 10%)</div>
              <div className="text-xs text-emerald-300">✅ Defense: Value not volume, tiered pricing, bundled services (rewards + analytics + fraud)</div>
            </div>
          </div>
        </div>

        {/* The One-Liner */}
        <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border-2 border-[#c9a227]/40 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-black mb-4 text-[#c9a227]">🔑 The One-Line Summary</h2>
          <p className="text-3xl font-black text-white">
            "Phase 3 is when Nuqta becomes economic infrastructure, not an app."
          </p>
        </div>

        {/* Exit Readiness */}
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-blue-300">🎯 Phase 3 Exit Readiness (Years 9-10)</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-300">Strategic Acquisition ($800M - $1.5B)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">Regional Banks</div>
                  <div className="text-sm text-slate-300 mb-2">FAB, Al Rajhi Bank, QNB</div>
                  <div className="text-xs text-blue-300">Valuation: 10-12x revenue ($1.1B-1.4B)</div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">Payment Networks</div>
                  <div className="text-sm text-slate-300 mb-2">Mastercard, Visa, Amex</div>
                  <div className="text-xs text-blue-300">Valuation: 12-15x revenue ($1.4B-1.7B)</div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">Regional Telecom</div>
                  <div className="text-sm text-slate-300 mb-2">Etisalat, Ooredoo, STC</div>
                  <div className="text-xs text-blue-300">Valuation: 8-10x revenue ($900M-1.1B)</div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">Tech Giants</div>
                  <div className="text-sm text-slate-300 mb-2">Google, Apple, Grab</div>
                  <div className="text-xs text-blue-300">Valuation: 15-20x revenue ($1.7B-2.3B)</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-300">IPO (NASDAQ or Tadawul)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-bold text-white mb-2">IPO Readiness Checklist:</div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    <li>✅ AED 420M revenue (>$100M for NASDAQ)</li>
                    <li>✅ 60% gross margin</li>
                    <li>✅ 18-24 month revenue visibility</li>
                    <li>✅ 6-country presence</li>
                    <li>✅ Government partnerships</li>
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-2">Comparable Public Companies:</div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    <li>• Marqeta: 15-20x revenue</li>
                    <li>• Toast: 8-12x revenue</li>
                    <li>• Block (Square): 3-5x revenue</li>
                  </ul>
                  <div className="mt-2 text-xs text-purple-300 font-bold">Valuation: $1.1B-1.7B</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-emerald-300">Sovereign Wealth Fund Buyout</h3>
              <div className="flex gap-4">
                <div className="flex-1 bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                  <div className="text-sm text-slate-300 mb-2">
                    Mubadala (UAE), PIF (Saudi Arabia), Qatar Investment Authority
                  </div>
                  <div className="text-xs text-emerald-300 font-bold">Valuation: 8-12x revenue ($900M-1.4B)</div>
                  <div className="text-xs text-slate-300 mt-2">
                    Strategic asset for Vision 2030/2040, sovereign control over consumer spend data
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Truth */}
        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-black mb-6 text-purple-300">Final Founder Truth</h2>
          <div className="space-y-4 text-lg text-slate-300">
            <p><span className="font-bold text-blue-300">Phase 1</span> proves belief.</p>
            <p><span className="font-bold text-purple-300">Phase 2</span> proves scale.</p>
            <p><span className="font-bold text-pink-300">Phase 3</span> proves inevitability.</p>
          </div>
          <div className="mt-6 p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl">
            <p className="text-sm text-slate-300">
              Very few startups ever reach Phase 3. Planning for it this clearly puts you <span className="font-bold text-white">ahead of 95% of founders</span>.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 py-12">
          <h2 className="text-4xl font-black">Navigate Strategy</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/master-roadmap" className="px-8 py-4 bg-[#c9a227] hover:bg-[#d4ad2f] transition-colors rounded-xl font-bold text-[#0a1628] text-lg">
              ← Master Roadmap
            </a>
            <a href="/execution-plan" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 transition-colors rounded-xl font-bold text-white text-lg">
              H1 Execution Plan
            </a>
            <a href="/h2-strategy" className="px-8 py-4 bg-purple-500 hover:bg-purple-600 transition-colors rounded-xl font-bold text-white text-lg">
              H2 Strategy
            </a>
            <a href="/h3-infrastructure" className="px-8 py-4 bg-pink-500 hover:bg-pink-600 transition-colors rounded-xl font-bold text-white text-lg">
              H3 Infrastructure
            </a>
            <a href="/phase-2" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 transition-colors rounded-xl font-bold text-white text-lg">
              Phase 2 Expansion
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
