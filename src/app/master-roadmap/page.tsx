'use client';

export default function MasterRoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0a1628] via-[#1a2a42] to-[#0a1628] text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block px-4 py-2 bg-[#c9a227] rounded-full mb-6">
            <p className="text-xs font-black uppercase tracking-wider">10-Year Strategic Framework</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Nuqta Master Roadmap
          </h1>
          <p className="text-2xl text-slate-300 max-w-3xl mb-4">
            From Startup → Platform → Infrastructure
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#c9a227] animate-pulse"></div>
              <span className="text-slate-400">Complete Strategic Vision</span>
            </div>
            <div className="text-slate-400">•</div>
            <div className="text-slate-400">January 29, 2026</div>
            <div className="text-slate-400">•</div>
            <a href="/deck-kang" className="text-[#c9a227] hover:text-white transition-colors font-semibold underline">
              View Investor Deck →
            </a>
          </div>
        </div>
      </div>

      {/* Critical Distinction */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 border-2 border-[#c9a227]/30 rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-6">🔑 The Critical Distinction</h2>
          <p className="text-xl text-slate-700 mb-8">
            Most founders (and investors) confuse two different dimensions of growth. Here's the correct mental model:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 border-2 border-blue-200">
              <h3 className="text-2xl font-black text-blue-700 mb-4">Horizons</h3>
              <p className="text-lg font-semibold text-slate-900 mb-3">Product & Business Maturity</p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• What you build</li>
                <li>• What you prove</li>
                <li>• How your business model evolves</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-purple-200">
              <h3 className="text-2xl font-black text-purple-700 mb-4">Phases</h3>
              <p className="text-lg font-semibold text-slate-900 mb-3">Geographic Market Expansion</p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• Where you operate</li>
                <li>• Which countries you enter</li>
                <li>• When you expand</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#c9a227] to-[#b8922] text-white rounded-2xl p-8 text-center">
            <p className="text-2xl font-black mb-2">The One-Liner:</p>
            <p className="text-3xl font-black">"Horizons define maturity. Phases define geography."</p>
          </div>
        </div>

        {/* KPI-Gated Progression */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300 rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-6">🎯 KPI-Gated Progression</h2>
          <p className="text-2xl font-bold text-red-900 mb-8">
            "We don't scale by time. We scale by proof."
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
              <h4 className="text-lg font-black text-blue-700 mb-3">H1 → H2 Gate</h4>
              <p className="text-sm text-slate-700">10K MAU, 25% D30 retention, ≤10% merchant churn (sustained 2 months)</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
              <h4 className="text-lg font-black text-purple-700 mb-3">H2 → H3 Gate</h4>
              <p className="text-sm text-slate-700">75K MAU, 30% D30 retention, 40% merchants using campaigns (sustained 3 months)</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-emerald-200">
              <h4 className="text-lg font-black text-emerald-700 mb-3">Phase 1 → Phase 2 Gate</h4>
              <p className="text-sm text-slate-700">30% D30 retention, ≤8% merchant churn, LTV:CAC ≥5x, 18mo cash runway</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-orange-200">
              <h4 className="text-lg font-black text-orange-700 mb-3">Phase 2 → Phase 3 Gate</h4>
              <p className="text-sm text-slate-700">1.5M users, 3 countries live, 10% cross-border usage, 25% enterprise revenue</p>
            </div>
          </div>

          <div className="bg-red-100 rounded-xl p-6">
            <p className="text-sm font-black text-red-900 mb-2">Acceleration Rule:</p>
            <p className="text-sm text-slate-800">If KPIs exceed thresholds by 20%+ for 3 consecutive months → advance early</p>
          </div>
        </div>

        {/* Visual Timeline */}
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-8">📊 Complete 10-Year Framework</h2>

          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-black text-blue-700 mb-4">PHASE 1: UAE (Years 1-5)</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                  <a href="/execution-plan" className="text-lg font-black text-blue-900 hover:text-blue-700 transition-colors">
                    H1 (Year 1): Prove the Loop →
                  </a>
                  <p className="text-sm text-slate-700 mt-2">10K users, 250 merchants, AED 2M GMV, 30% D30 retention</p>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
                  <a href="/h2-strategy" className="text-lg font-black text-purple-900 hover:text-purple-700 transition-colors">
                    H2 (Year 2): Scale Responsibly →
                  </a>
                  <p className="text-sm text-slate-700 mt-2">30K users, 450 merchants, AED 14M GMV, 35% D30 retention</p>
                </div>

                <div className="bg-emerald-50 rounded-xl p-4 border-2 border-emerald-200">
                  <div className="text-lg font-black text-emerald-900">
                    H3 (Years 3-5): Become Infrastructure
                  </div>
                  <p className="text-sm text-slate-700 mt-2">100K+ users, 4K merchants, AED 500M-1B GMV, 50+ malls, 6 government partnerships</p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-black text-orange-700 mb-4">PHASE 2: KSA + Qatar (Years 6-8)</h3>
              <div className="bg-orange-50 rounded-xl p-4 border-2 border-orange-200">
                <div className="text-lg font-black text-orange-900 mb-2">
                  Exporting a Proven System
                </div>
                <p className="text-sm text-slate-700 mb-3">
                  Qatar first (Months 1-9) → Saudi Arabia (Riyadh, Jeddah, Dammam) (Months 10-24)
                </p>
                <p className="text-sm text-slate-700">200K+ users, 1.5K merchants, AED 2.5B GMV, AED 220M revenue, 45% EBITDA</p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-black text-red-700 mb-4">PHASE 3: Full GCC Infrastructure (Years 9-10)</h3>
              <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
                <div className="text-lg font-black text-red-900 mb-2">
                  Infrastructure Lock-In
                </div>
                <p className="text-sm text-slate-700 mb-3">
                  Kuwait, Bahrain, Oman (top-down institutional entry)
                </p>
                <p className="text-sm text-slate-700">300K+ users, 3K merchants, AED 7B GMV, AED 420M revenue, 60% EBITDA, 15+ WaaS partnerships</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accelerated Timeline */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-8">⚡ Accelerated Timeline (60% Faster)</h2>
          <p className="text-lg text-slate-700 mb-8">
            With aggressive execution and early KPI achievement, Nuqta can compress the 10-year roadmap to ~4 years:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border-2 border-amber-200">
              <thead className="bg-amber-100">
                <tr>
                  <th className="text-left p-3 font-bold text-slate-700">Phase/Horizon</th>
                  <th className="text-center p-3 font-bold text-slate-700">Standard</th>
                  <th className="text-center p-3 font-bold text-amber-700">Accelerated</th>
                  <th className="text-left p-3 font-bold text-slate-700">Key Strategy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                <tr className="hover:bg-blue-50">
                  <td className="p-3 font-bold text-blue-700">H1: Prove Loop</td>
                  <td className="p-3 text-center text-slate-600">12 months</td>
                  <td className="p-3 text-center font-black text-amber-600">~5 months</td>
                  <td className="p-3 text-slate-600">Parallel events, faster merchant cycles</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="p-3 font-bold text-purple-700">H2: Scale</td>
                  <td className="p-3 text-center text-slate-600">6 months</td>
                  <td className="p-3 text-center font-black text-amber-600">~2.5 months</td>
                  <td className="p-3 text-slate-600">Simultaneous category launches</td>
                </tr>
                <tr className="hover:bg-emerald-50">
                  <td className="p-3 font-bold text-emerald-700">H3: Infrastructure</td>
                  <td className="p-3 text-center text-slate-600">3 years</td>
                  <td className="p-3 text-center font-black text-amber-600">~1.2 years</td>
                  <td className="p-3 text-slate-600">Parallel partnerships</td>
                </tr>
                <tr className="hover:bg-cyan-50">
                  <td className="p-3 font-bold text-cyan-700">Phase 2: GCC</td>
                  <td className="p-3 text-center text-slate-600">3 years</td>
                  <td className="p-3 text-center font-black text-amber-600">~1.2 years</td>
                  <td className="p-3 text-slate-600">Pre-launch deals, chain HQ</td>
                </tr>
                <tr className="hover:bg-pink-50">
                  <td className="p-3 font-bold text-pink-700">Phase 3: Complete</td>
                  <td className="p-3 text-center text-slate-600">2 years</td>
                  <td className="p-3 text-center font-black text-amber-600">~10 months</td>
                  <td className="p-3 text-slate-600">Parallel 3-country entry</td>
                </tr>
                <tr className="bg-amber-100 font-bold">
                  <td className="p-3 text-amber-900">TOTAL</td>
                  <td className="p-3 text-center text-slate-700">10 years</td>
                  <td className="p-3 text-center text-2xl text-amber-700">~4 years</td>
                  <td className="p-3 text-amber-700">Exit-ready by Year 4</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 border-2 border-amber-200">
              <p className="text-xs text-slate-600 mb-1">Time to Exit</p>
              <p className="text-lg font-black text-amber-700">10yr → 4yr (60% faster)</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-blue-200">
              <p className="text-xs text-slate-600 mb-1">Same Target Revenue</p>
              <p className="text-lg font-black text-blue-700">AED 420M ($115M)</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-purple-200">
              <p className="text-xs text-slate-600 mb-1">Same Exit Valuation</p>
              <p className="text-lg font-black text-purple-700">$800M-$2.3B</p>
            </div>
          </div>
        </div>

        {/* Financial Trajectory */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-8">📈 10-Year Financial Trajectory</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-3 font-bold text-slate-700">Year</th>
                  <th className="text-left p-3 font-bold text-slate-700">Phase/Horizon</th>
                  <th className="text-center p-3 font-bold text-slate-700">GMV</th>
                  <th className="text-center p-3 font-bold text-slate-700">Revenue</th>
                  <th className="text-center p-3 font-bold text-slate-700">EBITDA</th>
                  <th className="text-center p-3 font-bold text-slate-700">Team</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-blue-50">
                  <td className="p-3 font-bold">Y1</td>
                  <td className="p-3">Phase 1, H1</td>
                  <td className="p-3 text-center">AED 2M</td>
                  <td className="p-3 text-center">AED 100K</td>
                  <td className="p-3 text-center">Break-even</td>
                  <td className="p-3 text-center">7</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="p-3 font-bold">Y2</td>
                  <td className="p-3">Phase 1, H2</td>
                  <td className="p-3 text-center">AED 14M</td>
                  <td className="p-3 text-center">AED 1.3M</td>
                  <td className="p-3 text-center">10%</td>
                  <td className="p-3 text-center">30</td>
                </tr>
                <tr className="hover:bg-emerald-50">
                  <td className="p-3 font-bold">Y3-5</td>
                  <td className="p-3">Phase 1, H3</td>
                  <td className="p-3 text-center">AED 500M-1B</td>
                  <td className="p-3 text-center">AED 50M+</td>
                  <td className="p-3 text-center">30-40%</td>
                  <td className="p-3 text-center">40</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="p-3 font-bold">Y6-8</td>
                  <td className="p-3">Phase 2</td>
                  <td className="p-3 text-center">AED 2.5B</td>
                  <td className="p-3 text-center">AED 220M</td>
                  <td className="p-3 text-center">45%</td>
                  <td className="p-3 text-center">80</td>
                </tr>
                <tr className="hover:bg-red-50">
                  <td className="p-3 font-bold">Y9-10</td>
                  <td className="p-3">Phase 3</td>
                  <td className="p-3 text-center">AED 7B</td>
                  <td className="p-3 text-center">AED 420M</td>
                  <td className="p-3 text-center">60%</td>
                  <td className="p-3 text-center">100</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 border-2 border-emerald-200">
              <p className="text-xs text-slate-600 mb-1">Margin Expansion</p>
              <p className="text-lg font-black text-emerald-700">10% → 60%</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-blue-200">
              <p className="text-xs text-slate-600 mb-1">Revenue per Employee</p>
              <p className="text-lg font-black text-blue-700">AED 2.75M → AED 4.2M</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-purple-200">
              <p className="text-xs text-slate-600 mb-1">Exit Valuation (Year 10)</p>
              <p className="text-lg font-black text-purple-700">$800M-$1.7B</p>
            </div>
          </div>
        </div>

        {/* Strategic Documents */}
        <div className="bg-gradient-to-br from-slate-100 to-blue-50 border-2 border-slate-300 rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-8">📚 Strategic Documentation Library</h2>

          <div className="space-y-4">
            <a href="/execution-plan" className="block bg-white rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-blue-700 mb-2">H1 2026 Execution Plan</h3>
                  <p className="text-sm text-slate-700">Year 1: Prove the Loop - Month-by-month tactical execution with integrated event calendar</p>
                </div>
                <span className="text-blue-500 text-2xl">→</span>
              </div>
            </a>

            <a href="/h2-strategy" className="block bg-white rounded-xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-purple-700 mb-2">H2 2026 Strategy</h3>
                  <p className="text-sm text-slate-700">Year 2: Scale Responsibly - New categories, platform upgrades, geographic expansion</p>
                </div>
                <span className="text-purple-500 text-2xl">→</span>
              </div>
            </a>

            <a href="/h3-infrastructure" className="block bg-white rounded-xl p-6 border-2 border-emerald-200 hover:border-emerald-400 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-emerald-700 mb-2">H3 Infrastructure (Years 3-5)</h3>
                  <p className="text-sm text-slate-700">Become Infrastructure - WaaS, government partnerships, data monetization</p>
                </div>
                <span className="text-emerald-500 text-2xl">→</span>
              </div>
            </a>

            <a href="/phase-2" className="block bg-white rounded-xl p-6 border-2 border-cyan-200 hover:border-cyan-400 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-cyan-700 mb-2">Phase 2: KSA + Qatar (Years 6-8)</h3>
                  <p className="text-sm text-slate-700">GCC Expansion - Exporting proven system to larger markets</p>
                </div>
                <span className="text-cyan-500 text-2xl">→</span>
              </div>
            </a>

            <a href="/phase-3" className="block bg-white rounded-xl p-6 border-2 border-pink-200 hover:border-pink-400 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-pink-700 mb-2">Phase 3: Full GCC (Years 9-10)</h3>
                  <p className="text-sm text-slate-700">Infrastructure Lock-In - Kuwait, Bahrain, Oman top-down entry</p>
                </div>
                <span className="text-pink-500 text-2xl">→</span>
              </div>
            </a>

            <div className="bg-white rounded-xl p-6 border-2 border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-slate-700 mb-2">KPI-Gated Progression Framework</h3>
                  <p className="text-sm text-slate-700">Decision gates for H1→H2→H3 and Phase 1→2→3 transitions</p>
                </div>
                <span className="text-slate-400 text-sm">Available in docs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Non-Negotiable Rules */}
        <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-300 rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-8">🚩 Non-Negotiable Rules</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-black text-red-700 mb-4">❌ Do NOT enter Phase 2 unless:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border-2 border-red-200">
                  <p className="text-sm font-semibold text-slate-900 mb-1">✅ H3 Complete</p>
                  <p className="text-xs text-slate-700">UAE infrastructure fully built (WaaS, enterprise partnerships, data APIs)</p>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-red-200">
                  <p className="text-sm font-semibold text-slate-900 mb-1">✅ Retention Proven</p>
                  <p className="text-xs text-slate-700">D30 retention ≥30% in UAE</p>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-red-200">
                  <p className="text-sm font-semibold text-slate-900 mb-1">✅ Churn Controlled</p>
                  <p className="text-xs text-slate-700">Merchant churn ≤8% in UAE</p>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-red-200">
                  <p className="text-sm font-semibold text-slate-900 mb-1">✅ Unit Economics</p>
                  <p className="text-xs text-slate-700">LTV:CAC ≥5x, 18 months cash runway</p>
                </div>
              </div>
            </div>

            <div className="bg-red-100 rounded-xl p-6">
              <p className="text-lg font-black text-red-900 mb-2">Why This Matters:</p>
              <p className="text-sm text-slate-800">Investors expect this discipline. Most startups fail by expanding on hope, not proof.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2a42] text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to dive into the execution?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Explore the detailed strategic playbooks for each horizon and phase.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="/execution-plan" className="px-8 py-4 bg-[#c9a227] hover:bg-[#b8922] text-white font-black rounded-full transition-colors">
              View H1 Execution Plan
            </a>
            <a href="/deck-kang" className="px-8 py-4 border-2 border-white hover:bg-white hover:text-slate-900 text-white font-black rounded-full transition-colors">
              View Investor Deck
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
