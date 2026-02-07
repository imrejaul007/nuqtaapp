'use client';

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a42] to-[#0a1628] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">

        {/* Hero Section */}
        <div className="space-y-6 text-center">
          <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-full text-blue-300 text-sm font-bold">
            🟣 PHASE 2 (Years 6-8)
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            GCC <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">Expansion</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            &quot;Exporting a Proven System, Not Inventing a New One&quot;
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇶🇦</span>
              <span className="text-slate-300">Qatar (Year 6)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇸🇦</span>
              <span className="text-slate-300">Saudi Arabia (Years 7-8)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="text-emerald-400 font-bold">60% Faster Timeline</span>
            </div>
          </div>
        </div>

        {/* Timeline Comparison */}
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-blue-300">📅 Phase 2 Timeline</h2>
          <div className="space-y-4">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-blue-300">Standard Timeline</span>
                <span className="text-sm text-slate-400">Years 6-8 (3 years)</span>
              </div>
              <div className="text-sm text-slate-400">
                Qatar: 9 months • Saudi Arabia: 24 months • Total: 3 years
              </div>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-emerald-300">Accelerated Timeline</span>
                <span className="text-sm font-black text-emerald-400">~1.2 years (14 months)</span>
              </div>
              <div className="text-sm text-emerald-300">
                Qatar: 3-4 months • Saudi Arabia: 9-10 months • Total: ~1.2 years
              </div>
            </div>
          </div>
          <div className="mt-6 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
            <p className="text-sm text-amber-300">
              <span className="font-bold">Speed Strategy:</span> Leverage proven UAE playbook, pre-negotiated partnerships, parallel market entry
            </p>
          </div>
        </div>

        {/* Qatar Entry Strategy */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-center">
            <span className="text-2xl mr-2">🇶🇦</span>
            Qatar Entry Strategy
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">Why Qatar First?</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong className="text-white">Smallest market:</strong> 3M population, controlled risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong className="text-white">Similar to UAE:</strong> Expat-heavy, English-speaking, cashless</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong className="text-white">Fast regulatory:</strong> QFC can approve in weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong className="text-white">Learning lab:</strong> Test localization before KSA</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border-2 border-cyan-500/40 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">3-4 Month Launch Plan</h3>
              <div className="space-y-3">
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3">
                  <div className="font-bold text-cyan-300 mb-1">Month 1: Legal & Partnerships</div>
                  <div className="text-sm text-slate-400">QFC license, bank deals (QNB, Doha Bank), 20 merchant LOIs</div>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3">
                  <div className="font-bold text-cyan-300 mb-1">Month 2: Localization</div>
                  <div className="text-sm text-slate-400">Arabic UI, QAR currency, local payment rails</div>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3">
                  <div className="font-bold text-cyan-300 mb-1">Month 3-4: Launch & Scale</div>
                  <div className="text-sm text-slate-400">10 merchants live, 500 users, prove unit economics</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Saudi Arabia Entry Strategy */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-center">
            <span className="text-2xl mr-2">🇸🇦</span>
            Saudi Arabia Entry Strategy
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-2 border-green-500/40 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-green-300 mb-4">Why KSA Matters</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div>
                  <div className="font-bold text-white mb-1">40% of GCC GDP</div>
                  <div className="text-slate-400">36M population, massive scale</div>
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Vision 2030</div>
                  <div className="text-slate-400">Government pushing cashless economy</div>
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Young & Digital</div>
                  <div className="text-slate-400">70% under 35, 98% smartphone penetration</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border-2 border-orange-500/40 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-orange-300 mb-4">9-10 Month Launch</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-2">
                  <div className="font-bold text-orange-300">Q1: Riyadh Setup</div>
                  <div className="text-slate-400">SAMA license, local entity, bank deals</div>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-2">
                  <div className="font-bold text-orange-300">Q2: Riyadh Launch</div>
                  <div className="text-slate-400">30 merchants, 1K users, prove PMF</div>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-2">
                  <div className="font-bold text-orange-300">Q3-Q4: Multi-City</div>
                  <div className="text-slate-400">Jeddah, Dammam, Khobar expansion</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-2 border-red-500/40 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">Cultural Adaptation</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Arabic-first:</strong> RTL UI, Saudi dialect</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Gender-segregated:</strong> Women-only merchant categories</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Regulatory:</strong> SAMA compliance, local data residency</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Partnerships:</strong> STC Pay, mada integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KPI Gate to Phase 3 */}
        <div className="bg-gradient-to-br from-purple-900/30 to-pink-800/20 border-2 border-purple-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-purple-300">🎯 Phase 2 → Phase 3 KPI Gate</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-3">Minimum Requirements (Each Country)</h3>
              <div className="space-y-3">
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
                  <div className="font-bold text-purple-300 mb-1">User Metrics</div>
                  <div className="text-sm text-slate-300">
                    • 50K MAU per country<br />
                    • 30% D30 retention<br />
                    • ≤10% monthly churn
                  </div>
                </div>
                <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-3">
                  <div className="font-bold text-pink-300 mb-1">Business Metrics</div>
                  <div className="text-sm text-slate-300">
                    • 150 merchants per country<br />
                    • AED 15M GMV per country<br />
                    • 10% cross-border transactions
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-3">Readiness Indicators</h3>
              <div className="space-y-3">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3">
                  <div className="font-bold text-emerald-300 mb-1">Unit Economics</div>
                  <div className="text-sm text-slate-300">
                    • CAC ≤ AED 40 per country<br />
                    • LTV:CAC ≥ 16.8x<br />
                    • 25% EBITDA margin
                  </div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                  <div className="font-bold text-blue-300 mb-1">Enterprise Revenue</div>
                  <div className="text-sm text-slate-300">
                    • 25% revenue from B2B/WaaS<br />
                    • 2+ enterprise clients per country<br />
                    • Proven multi-country ops
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
            <p className="text-sm text-emerald-300 text-center">
              <span className="font-bold">Early Advancement Rule:</span> If all KPIs hit 80% of target for 3 consecutive months, advance to Phase 3 immediately
            </p>
          </div>
        </div>

        {/* Next Phase Preview */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-2 border-slate-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Next: Phase 3 - Full GCC Completion
          </h3>
          <p className="text-slate-300 mb-6">
            Kuwait + Bahrain + Oman • Years 9-10 (~10 months accelerated) • Exit-ready infrastructure
          </p>
          <a
            href="/phase-3"
            className="inline-block bg-[#c9a227] hover:bg-[#d4ab2c] text-slate-900 font-bold px-8 py-3 rounded-lg transition-colors"
          >
            View Phase 3 Strategy →
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-between pt-8 border-t border-slate-700">
          <a href="/h3-infrastructure" className="text-slate-400 hover:text-white transition-colors">
            ← Back to H3 Infrastructure
          </a>
          <a href="/master-roadmap" className="text-slate-400 hover:text-white transition-colors">
            Master Roadmap
          </a>
          <a href="/phase-3" className="text-slate-400 hover:text-white transition-colors">
            Phase 3 →
          </a>
        </div>

      </div>
    </div>
  );
}
