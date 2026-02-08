'use client';

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a42] to-[#0a1628] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">

        {/* Hero Section */}
        <div className="space-y-6 text-center">
          <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-300 text-sm font-bold">
            🟣 PHASE 3 (Years 9-10)
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-7xl font-black tracking-tight">
            Full GCC <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Completion</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            &quot;Exit-Ready Infrastructure Across All 6 GCC Countries&quot;
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇰🇼</span>
              <span className="text-slate-300">Kuwait</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇧🇭</span>
              <span className="text-slate-300">Bahrain</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇴🇲</span>
              <span className="text-slate-300">Oman</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="text-emerald-400 font-bold">Parallel Launch</span>
            </div>
          </div>
        </div>

        {/* Timeline Comparison */}
        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-purple-300">📅 Phase 3 Timeline</h2>
          <div className="space-y-4">
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-purple-300">Standard Timeline</span>
                <span className="text-sm text-slate-400">Years 9-10 (2 years)</span>
              </div>
              <div className="text-sm text-slate-400">
                Sequential launches: 8 months per country = 24 months total
              </div>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-emerald-300">Accelerated Timeline</span>
                <span className="text-sm font-black text-emerald-400">~10 months</span>
              </div>
              <div className="text-sm text-emerald-300">
                Parallel launch strategy: All 3 countries simultaneously
              </div>
            </div>
          </div>
          <div className="mt-6 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
            <p className="text-sm text-amber-300">
              <span className="font-bold">Speed Strategy:</span> Top-down institutional entry, pre-built playbook, shared regional infrastructure
            </p>
          </div>
        </div>

        {/* Parallel Launch Strategy */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-center">Why Parallel Launch Works</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-6">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-blue-300 mb-3">Institutional Entry</h3>
              <p className="text-sm text-slate-300">
                Lead with government partnerships and enterprise deals, not grassroots growth. Pre-negotiated bank deals across all 3 countries.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-2 border-green-500/40 rounded-2xl p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-green-300 mb-3">Shared Infrastructure</h3>
              <p className="text-sm text-slate-300">
                Same tech stack, unified back-office, regional payment processor. Marginal cost of adding a country drops to ~20% of original.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-2xl p-6">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-purple-300 mb-3">Proven Playbook</h3>
              <p className="text-sm text-slate-300">
                5+ years of UAE/Qatar/KSA learnings packaged into 90-day launch manual. Cookie-cutter deployment, minimal customization.
              </p>
            </div>
          </div>
        </div>

        {/* Country Breakdown */}
        <div className="space-y-8">
          <h2 className="text-4xl font-black text-center">3-Country Entry Plan</h2>

          {/* Kuwait */}
          <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border-2 border-orange-500/40 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🇰🇼</span>
              <div>
                <h3 className="text-2xl font-bold text-orange-300">Kuwait</h3>
                <p className="text-sm text-slate-400">4.3M population • $140B GDP • Wealthiest GCC per capita</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <div className="font-bold text-orange-300 mb-2">Why Kuwait?</div>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• Highest consumer spending in GCC</li>
                  <li>• Strong banking sector (NBK, KFH, Boubyan)</li>
                  <li>• Young, affluent, tech-savvy population</li>
                </ul>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <div className="font-bold text-orange-300 mb-2">Entry Strategy</div>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• Lead with NBK partnership</li>
                  <li>• Target Avenues Mall & Kuwait City</li>
                  <li>• Launch: 20 merchants, 2K users in Month 1</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bahrain */}
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-2 border-red-500/40 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🇧🇭</span>
              <div>
                <h3 className="text-2xl font-bold text-red-300">Bahrain</h3>
                <p className="text-sm text-slate-400">1.5M population • $44B GDP • GCC financial hub</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <div className="font-bold text-red-300 mb-2">Why Bahrain?</div>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• Fintech-friendly regulation (CBB sandbox)</li>
                  <li>• Most digitally advanced GCC country</li>
                  <li>• Regional HQ for many MNCs</li>
                </ul>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <div className="font-bold text-red-300 mb-2">Entry Strategy</div>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• Partner with Bahrain FinTech Bay</li>
                  <li>• Target Seef & City Centre malls</li>
                  <li>• Launch: 15 merchants, 1.5K users in Month 1</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Oman */}
          <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border-2 border-pink-500/40 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🇴🇲</span>
              <div>
                <h3 className="text-2xl font-bold text-pink-300">Oman</h3>
                <p className="text-sm text-slate-400">4.6M population • $115B GDP • Growing expat market</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
                <div className="font-bold text-pink-300 mb-2">Why Oman?</div>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• Vision 2040: Economic diversification</li>
                  <li>• Rising youth unemployment → entrepreneurship</li>
                  <li>• Underserved fintech market</li>
                </ul>
              </div>
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
                <div className="font-bold text-pink-300 mb-2">Entry Strategy</div>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• Partner with Bank Muscat, NBO</li>
                  <li>• Target Muscat Grand Mall & Qurum</li>
                  <li>• Launch: 20 merchants, 1.5K users in Month 1</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Exit Readiness Metrics */}
        <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border-2 border-[#c9a227]/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-[#c9a227]">🎯 Exit Readiness Metrics (End of Phase 3)</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-slate-900">
              <div className="font-bold text-slate-700 text-sm mb-2">USER METRICS</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total MAU:</span>
                  <span className="font-black text-blue-600">300K+</span>
                </div>
                <div className="flex justify-between">
                  <span>D30 Retention:</span>
                  <span className="font-black text-emerald-600">≥35%</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Churn:</span>
                  <span className="font-black text-red-600">≤8%</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-slate-900">
              <div className="font-bold text-slate-700 text-sm mb-2">FINANCIAL METRICS</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Annual Revenue:</span>
                  <span className="font-black text-[#c9a227]">AED 420M</span>
                </div>
                <div className="flex justify-between">
                  <span>EBITDA Margin:</span>
                  <span className="font-black text-emerald-600">60%</span>
                </div>
                <div className="flex justify-between">
                  <span>LTV:CAC:</span>
                  <span className="font-black text-purple-600">≥20x</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-slate-900">
              <div className="font-bold text-slate-700 text-sm mb-2">ENTERPRISE METRICS</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>WaaS Clients:</span>
                  <span className="font-black text-blue-600">15+</span>
                </div>
                <div className="flex justify-between">
                  <span>Gov Partnerships:</span>
                  <span className="font-black text-purple-600">10+</span>
                </div>
                <div className="flex justify-between">
                  <span>B2B Revenue %:</span>
                  <span className="font-black text-orange-600">40%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
            <div className="font-bold text-emerald-300 text-center mb-3">✓ Exit-Ready Infrastructure</div>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
              <div>
                <strong className="text-white">Operational Excellence:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• 6-country operations battle-tested</li>
                  <li>• Multi-currency, multi-regulator compliant</li>
                  <li>• 18-24 month revenue visibility</li>
                </ul>
              </div>
              <div>
                <strong className="text-white">Strategic Position:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Regional infrastructure player</li>
                  <li>• Network effects across borders</li>
                  <li>• Defensible moat (data, partnerships)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Exit Options */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-center">Exit Options (Year 10)</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-purple-300 mb-2">Strategic Acquisition</h3>
              <div className="text-4xl font-black text-purple-400 mb-2">$1.1B - $1.7B</div>
              <p className="text-sm text-slate-400 mb-4">3-4x revenue multiple</p>
              <div className="text-xs text-slate-400 text-left space-y-1">
                <div>• Regional banks (FAB, QNB, SNB)</div>
                <div>• Payment players (Network, Checkout)</div>
                <div>• Tech giants (Google, Amazon, Careem)</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">IPO (DFM/Tadawul)</h3>
              <div className="text-4xl font-black text-blue-400 mb-2">$1.5B - $2.3B</div>
              <p className="text-sm text-slate-400 mb-4">4-6x revenue multiple</p>
              <div className="text-xs text-slate-400 text-left space-y-1">
                <div>• Dubai or Saudi listing</div>
                <div>• Premium for profitable tech</div>
                <div>• 2026-2027 MENA tech IPO wave</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-2 border-green-500/40 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-green-300 mb-2">Growth Equity</h3>
              <div className="text-4xl font-black text-green-400 mb-2">$800M - $1.2B</div>
              <p className="text-sm text-slate-400 mb-4">2-3x revenue multiple</p>
              <div className="text-xs text-slate-400 text-left space-y-1">
                <div>• PE firms (STV, Mubadala Capital)</div>
                <div>• Sovereign wealth funds</div>
                <div>• Hold to scale further (Year 15 exit)</div>
              </div>
            </div>
          </div>

          <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-6 text-center">
            <p className="text-sm text-[#c9a227]">
              <span className="font-bold">Recommended Path:</span> Strategic acquisition by regional bank or payment player seeking instant GCC coverage and proven fintech infrastructure
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-between pt-8 border-t border-slate-700">
          <a href="/phase-2" className="text-slate-400 hover:text-white transition-colors">
            ← Back to Phase 2
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
