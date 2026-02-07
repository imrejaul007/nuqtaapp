'use client';

import { CheckCircle2, ArrowRight, Target, Zap, TrendingUp, Building2, Globe, Trophy, MapPin, Users, DollarSign, Sparkles } from 'lucide-react';

export default function GTMMainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a42] to-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">

        {/* Hero Section */}
        <div className="space-y-6 text-center">
          <div className="inline-block px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/40 rounded-full text-[#c9a227] text-sm font-bold">
            🎯 GO-TO-MARKET STRATEGY
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            Institutional-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4ab2c]">GTM Playbook</span>
          </h1>
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            "Nuqta scales by first creating daily saving habits, then using merchants as distribution, and finally layering digital growth once unit economics are proven — city by city."
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="text-slate-300">Launch: March 1, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💵</span>
              <span className="text-slate-300">$400K at $5M cap (Tranched)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="text-[#c9a227] font-bold">H1: 50K MAU → Year 1: 100K MAU</span>
            </div>
          </div>
        </div>

        {/* GTM Philosophy */}
        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-2 border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-slate-100">🧠 GTM Philosophy: Discipline Over Speed</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
              <div className="text-4xl mb-3">1️⃣</div>
              <h3 className="text-xl font-bold text-purple-300 mb-2">Only 3 Channels</h3>
              <p className="text-sm text-slate-300">For first 6 months. No "test everything" mode. Focus beats curiosity.</p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <div className="text-4xl mb-3">2️⃣</div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">Metrics, Not Vanity</h3>
              <p className="text-sm text-slate-300">D7/D30 retention {'>'}user count. Weekly reviews. Kill what doesn&apos;t work.</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
              <div className="text-4xl mb-3">3️⃣</div>
              <h3 className="text-xl font-bold text-emerald-300 mb-2">Density Before Breadth</h3>
              <p className="text-sm text-slate-300">Own one micro-market before expanding. Proven economics first.</p>
            </div>
          </div>
          <div className="bg-[#c9a227]/10 border-l-4 border-[#c9a227] rounded-lg p-4 text-center">
            <p className="text-lg text-slate-300">
              <span className="font-bold text-[#c9a227]">These rules are signals of operator maturity.</span> Most startups fail because they scale acquisition before retention, expand geography before density, and chase growth before proof.
            </p>
          </div>
        </div>

        {/* Complete GTM Journey */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-center text-slate-100">🗺️ Complete GTM Journey: 5 Phases</h2>
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            <div className="text-center">
              <div className="text-5xl mb-2">🚀</div>
              <p className="text-lg font-bold text-emerald-300">H1</p>
              <p className="text-sm text-slate-400">~5 months</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">🔷</div>
              <p className="text-lg font-bold text-blue-300">H2</p>
              <p className="text-sm text-slate-400">~2.5 months</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">🟣</div>
              <p className="text-lg font-bold text-purple-300">H3</p>
              <p className="text-sm text-slate-400">~1.2 years</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">🌍</div>
              <p className="text-lg font-bold text-cyan-300">Phase 2</p>
              <p className="text-sm text-slate-400">~1.2 years</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">🏆</div>
              <p className="text-lg font-bold text-[#c9a227]">Phase 3</p>
              <p className="text-sm text-slate-400">~10 months</p>
            </div>
          </div>

          {/* Phase 1: UAE Beachhead (H1-H3) */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-black text-white">🇦🇪 Phase 1: UAE Beachhead (H1 → H2 → H3)</h2>
              <div className="text-sm text-slate-400">Total: ~2 years</div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* H1 */}
              <a href="/h1-gtm" className="group">
                <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border-2 border-emerald-500/40 hover:border-emerald-400 rounded-2xl p-6 transition-all cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">🚀</div>
                    <ArrowRight className="text-emerald-400 group-hover:translate-x-1 transition-transform" size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-emerald-300 mb-2">H1: UAE Blitzscale</h3>
                  <p className="text-sm text-slate-400 mb-4">~6 Months • Dubai + Abu Dhabi</p>
                  <div className="space-y-2 text-sm text-slate-300 mb-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                      <span>Multi-channel merchant blitz</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                      <span>50+ Student Ambassadors</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                      <span>Viral social loops activation</span>
                    </div>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3">
                    <p className="text-xs font-semibold text-emerald-300 uppercase mb-1">Exit Target (Aggressive)</p>
                    <p className="text-lg font-black text-emerald-400">50K MAU • 30% D30</p>
                  </div>
                </div>
              </a>

              {/* H2 */}
              <a href="/h2-gtm" className="group">
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 hover:border-blue-400 rounded-2xl p-6 transition-all cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">🔷</div>
                    <ArrowRight className="text-blue-400 group-hover:translate-x-1 transition-transform" size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-blue-300 mb-2">H2: UAE Scale</h3>
                  <p className="text-sm text-slate-400 mb-4">~6 Months • Full Emirates</p>
                  <div className="space-y-2 text-sm text-slate-300 mb-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-blue-400 mt-0.5" />
                      <span>Full UAE coverage (all 7 Emirates)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-blue-400 mt-0.5" />
                      <span>All industry categories live</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-blue-400 mt-0.5" />
                      <span>Chain partnerships at scale</span>
                    </div>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                    <p className="text-xs font-semibold text-blue-300 uppercase mb-1">Exit Target</p>
                    <p className="text-lg font-black text-blue-400">250K MAU • 5K Merchants</p>
                  </div>
                </div>
              </a>

              {/* H3 */}
              <a href="/h3-gtm" className="group">
                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 hover:border-purple-400 rounded-2xl p-6 transition-all cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">🟣</div>
                    <ArrowRight className="text-purple-400 group-hover:translate-x-1 transition-transform" size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-purple-300 mb-2">H3: UAE Domination</h3>
                  <p className="text-sm text-slate-400 mb-4">~12 Months • Full UAE Market Control</p>
                  <div className="space-y-2 text-sm text-slate-300 mb-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-purple-400 mt-0.5" />
                      <span>UAE market leader (all 7 Emirates)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-purple-400 mt-0.5" />
                      <span>WaaS + B2B platform revenue</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-purple-400 mt-0.5" />
                      <span>Series A ready metrics</span>
                    </div>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
                    <p className="text-xs font-semibold text-purple-300 uppercase mb-1">Exit Target</p>
                    <p className="text-lg font-black text-purple-400">500K MAU • 40% EBITDA</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Phase 2: GCC Expansion */}
          <a href="/phase-2-gtm" className="block group">
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-800/20 border-2 border-cyan-500/40 hover:border-cyan-400 rounded-2xl p-8 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">🌍</div>
                  <div>
                    <h2 className="text-3xl font-black text-cyan-300">Phase 2: GCC Expansion</h2>
                    <p className="text-slate-400 mt-1">~1.2 Years • Qatar + Saudi Arabia</p>
                  </div>
                </div>
                <ArrowRight className="text-cyan-400 group-hover:translate-x-2 transition-transform" size={32} />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">🇶🇦</span>
                    <h3 className="text-xl font-bold text-white">Qatar (3-4 Months)</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Test market: 3M population, low risk</li>
                    <li>• QFC license (weeks approval)</li>
                    <li>• Learning lab before KSA scale</li>
                    <li>• Target: 50K MAU, AED 15M GMV</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">🇸🇦</span>
                    <h3 className="text-xl font-bold text-white">Saudi Arabia (9-10 Months)</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Scale market: 36M, 40% of GCC GDP</li>
                    <li>• Vision 2030 fintech-friendly</li>
                    <li>• Riyadh → Jeddah → Dammam</li>
                    <li>• Target: 50K MAU, AED 15M GMV</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-cyan-300">Exit Criteria:</span>
                  <span className="text-cyan-400">50K MAU per country • 30% D30 • ≤10% churn • 16.8x LTV:CAC</span>
                </div>
              </div>
            </div>
          </a>

          {/* Phase 3: Full GCC */}
          <a href="/phase-3-gtm" className="block group">
            <div className="bg-gradient-to-br from-amber-900/30 to-yellow-800/20 border-2 border-[#c9a227]/40 hover:border-[#c9a227] rounded-2xl p-8 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">🏆</div>
                  <div>
                    <h2 className="text-3xl font-black text-[#c9a227]">Phase 3: Full GCC Completion</h2>
                    <p className="text-slate-400 mt-1">~10 Months • Kuwait + Bahrain + Oman (Parallel)</p>
                  </div>
                </div>
                <ArrowRight className="text-[#c9a227] group-hover:translate-x-2 transition-transform" size={32} />
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                  <span className="text-3xl">🇰🇼</span>
                  <p className="text-sm text-white font-bold mt-2">Kuwait</p>
                  <p className="text-xs text-slate-400">30K MAU Target</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                  <span className="text-3xl">🇧🇭</span>
                  <p className="text-sm text-white font-bold mt-2">Bahrain</p>
                  <p className="text-xs text-slate-400">15K MAU Target</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                  <span className="text-3xl">🇴🇲</span>
                  <p className="text-sm text-white font-bold mt-2">Oman</p>
                  <p className="text-xs text-slate-400">35K MAU Target</p>
                </div>
              </div>

              {/* Phase 3 adds 80K MAU from Kuwait+Bahrain+Oman. Cumulative after H3 (500K) + Phase 2 (100K) + Phase 3 (80K) = 680K */}
              {/* But Year 3 target is 1.5M, Year 5 is 5M - Phase 3 completion represents ~Year 3 milestone */}
              <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-4">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-[#c9a227] uppercase mb-1">GCC Total Users</p>
                    <p className="text-2xl font-black text-[#d4ab2c]">1.5M MAU</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#c9a227] uppercase mb-1">Annual Revenue</p>
                    <p className="text-2xl font-black text-[#d4ab2c]">AED 144M</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#c9a227] uppercase mb-1">Exit Valuation</p>
                    <p className="text-2xl font-black text-[#d4ab2c]">$800M-$1.2B</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* GTM Evolution Timeline */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-white text-center">📊 GTM Channel Evolution</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-slate-400">Channel</th>
                  <th className="text-center p-3 text-emerald-400">H1</th>
                  <th className="text-center p-3 text-blue-400">H2</th>
                  <th className="text-center p-3 text-purple-400">H3</th>
                  <th className="text-center p-3 text-cyan-400">Phase 2</th>
                  <th className="text-center p-3 text-[#c9a227]">Phase 3</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800">
                  <td className="p-3 font-bold">Merchant QR</td>
                  <td className="text-center p-3">✅ Primary<br/><span className="text-xs text-slate-500">AED 15</span></td>
                  <td className="text-center p-3">✅ Scaled<br/><span className="text-xs text-slate-500">AED 12</span></td>
                  <td className="text-center p-3">✅ Mature<br/><span className="text-xs text-slate-500">AED 10</span></td>
                  <td className="text-center p-3">✅ Replicated<br/><span className="text-xs text-slate-500">Local equiv.</span></td>
                  <td className="text-center p-3">✅ Optimized<br/><span className="text-xs text-slate-500">AED 10</span></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="p-3 font-bold">Student Ambassadors</td>
                  <td className="text-center p-3">✅ 10 unis<br/><span className="text-xs text-slate-500">AED 30</span></td>
                  <td className="text-center p-3">✅ Expanded<br/><span className="text-xs text-slate-500">AED 28</span></td>
                  <td className="text-center p-3">✅ Regional<br/><span className="text-xs text-slate-500">AED 25</span></td>
                  <td className="text-center p-3">✅ Localized<br/><span className="text-xs text-slate-500">Local unis</span></td>
                  <td className="text-center p-3">✅ GCC-wide<br/><span className="text-xs text-slate-500">Standard</span></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="p-3 font-bold">Digital Ads</td>
                  <td className="text-center p-3">❌ Gated<br/><span className="text-xs text-slate-500">Not yet</span></td>
                  <td className="text-center p-3">✅ Unlocked<br/><span className="text-xs text-slate-500">AED 80</span></td>
                  <td className="text-center p-3">✅ Optimized<br/><span className="text-xs text-slate-500">AED 60</span></td>
                  <td className="text-center p-3">✅ Multi-market<br/><span className="text-xs text-slate-500">AED 60-80</span></td>
                  <td className="text-center p-3">✅ Scaled<br/><span className="text-xs text-slate-500">Regional</span></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="p-3 font-bold">WaaS (B2B)</td>
                  <td className="text-center p-3">❌ N/A<br/><span className="text-xs text-slate-500">-</span></td>
                  <td className="text-center p-3">❌ N/A<br/><span className="text-xs text-slate-500">-</span></td>
                  <td className="text-center p-3">✅ Launch<br/><span className="text-xs text-slate-500">5 clients</span></td>
                  <td className="text-center p-3">✅ Replicated<br/><span className="text-xs text-slate-500">2/country</span></td>
                  <td className="text-center p-3">✅ Scaled<br/><span className="text-xs text-slate-500">15+ total</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Final Metrics Summary - Aligned with 3-Year Domination Plan */}
        <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/10 border-2 border-[#c9a227]/40 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Trophy size={32} className="text-[#c9a227]" />
            <h2 className="text-3xl font-black text-[#c9a227]">🏆 3-Year Domination Targets</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <Users size={32} className="text-blue-400 mx-auto mb-3" />
              <p className="text-xs text-slate-400 uppercase mb-2">Year 3 MAU</p>
              <p className="text-4xl font-black text-blue-400">1.5M+</p>
              <p className="text-xs text-slate-500 mt-2">All 6 GCC countries</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <DollarSign size={32} className="text-[#c9a227] mx-auto mb-3" />
              <p className="text-xs text-slate-400 uppercase mb-2">Year 3 Revenue</p>
              <p className="text-4xl font-black text-[#d4ab2c]">AED 144M</p>
              <p className="text-xs text-slate-500 mt-2">40% EBITDA margin</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <Building2 size={32} className="text-purple-400 mx-auto mb-3" />
              <p className="text-xs text-slate-400 uppercase mb-2">Year 3 Merchants</p>
              <p className="text-2xl font-black text-purple-400">30,000+</p>
              <p className="text-xs text-slate-500 mt-2">Across all categories</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <Sparkles size={32} className="text-emerald-400 mx-auto mb-3" />
              <p className="text-xs text-slate-400 uppercase mb-2">Year 5 Revenue</p>
              <p className="text-3xl font-black text-emerald-400">AED 480M</p>
              <p className="text-xs text-slate-500 mt-2">60% EBITDA margin</p>
            </div>
          </div>
        </div>

        {/* Key Discipline Signals */}
        <div className="bg-gradient-to-br from-purple-900/30 to-indigo-800/20 border-2 border-purple-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-purple-300">✨ Discipline Signals for Investors</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-white">Gated progression</p>
                  <p className="text-sm text-slate-300">No H2 until H1 metrics hit. Hard KPI gates at every stage.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-white">3-channel focus</p>
                  <p className="text-sm text-slate-300">No spray-and-pray. Proven channels replicated across markets.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-white">Metrics over vanity</p>
                  <p className="text-sm text-slate-300">D30 retention {'>'} downloads. LTV:CAC proven before scale.</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-white">B2B moat</p>
                  <p className="text-sm text-slate-300">WaaS creates defensive revenue. Not just GMV play.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-white">Proven playbook</p>
                  <p className="text-sm text-slate-300">Replicate UAE success, don't reinvent per country.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-white">Clear exit timeline</p>
                  <p className="text-sm text-slate-300">4 years to exit-ready. 60% faster than standard 10-year plan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-2 border-slate-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">📚 Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/master-roadmap" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-colors text-center">
              <MapPin className="text-blue-400 mx-auto mb-2" size={28} />
              <p className="font-bold text-white">Master Roadmap</p>
              <p className="text-xs text-slate-400 mt-1">Complete 4-year plan</p>
            </a>
            <a href="/deck-kang" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-colors text-center">
              <Target className="text-purple-400 mx-auto mb-2" size={28} />
              <p className="font-bold text-white">Pitch Deck</p>
              <p className="text-xs text-slate-400 mt-1">Full 29-slide presentation</p>
            </a>
            <a href="/" className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-colors text-center">
              <Sparkles className="text-[#c9a227] mx-auto mb-2" size={28} />
              <p className="font-bold text-white">Landing Page</p>
              <p className="text-xs text-slate-400 mt-1">Overview & navigation</p>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
