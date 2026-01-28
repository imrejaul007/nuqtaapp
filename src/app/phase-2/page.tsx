'use client'

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
            "Exporting a Proven System, Not Inventing a New One"
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-blue-300">Geographic Expansion Blueprint</span>
            </div>
            <div className="text-blue-400">•</div>
            <div className="text-blue-300">2031-2033 (Post-H3)</div>
            <div className="text-blue-400">•</div>
            <a href="/master-roadmap" className="text-[#c9a227] hover:text-white transition-colors font-semibold underline">
              ← Master Roadmap
            </a>
            <div className="text-blue-400">•</div>
            <a href="/h3-infrastructure" className="text-blue-300 hover:text-white transition-colors font-semibold underline">
              ← H3 Infrastructure
            </a>
          </div>
        </div>

        {/* Core Objective */}
        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border-2 border-blue-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-4 text-blue-300">🎯 Phase 2 Core Objective</h2>
          <p className="text-2xl font-bold text-white mb-6">
            Replicate a proven UAE engine in larger GCC markets while localizing regulation, culture, and partnerships.
          </p>
          <p className="text-lg text-slate-300">
            In Phase 2, Nuqta is <span className="font-bold text-white">no longer proving if it works</span>.
            It is proving <span className="font-bold text-white">how fast it can scale regionally</span>.
          </p>
        </div>

        {/* Geographic Strategy */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-center">📍 Phase 2 Geography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Qatar */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🇶🇦</div>
                <div>
                  <h3 className="text-2xl font-black text-purple-300">Qatar (Doha)</h3>
                  <div className="text-sm text-purple-400">Launch FIRST - Months 1-9</div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="text-purple-400 mt-0.5">•</div>
                  <div className="text-slate-300">
                    <span className="font-bold text-white">Population:</span> 2.9M (700K Qatari, 2.2M expats)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-purple-400 mt-0.5">•</div>
                  <div className="text-slate-300">
                    <span className="font-bold text-white">GDP per capita:</span> $60K+ (highest in GCC)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-purple-400 mt-0.5">•</div>
                  <div className="text-slate-300">
                    <span className="font-bold text-white">Why first:</span> Smaller market, easier regulation, faster validation, centralized events
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <div className="text-xs text-purple-300 font-bold mb-2">SUCCESS CRITERIA (MONTH 9)</div>
                <div className="space-y-1 text-xs text-slate-300">
                  <div>✅ 100 merchants live</div>
                  <div>✅ 20,000 active users</div>
                  <div>✅ AED 10M GMV</div>
                  <div>✅ 30% D30 retention</div>
                </div>
              </div>
            </div>

            {/* Saudi Arabia */}
            <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border-2 border-emerald-500/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🇸🇦</div>
                <div>
                  <h3 className="text-2xl font-black text-emerald-300">Saudi Arabia</h3>
                  <div className="text-sm text-emerald-400">Launch SECOND - Months 10-24</div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="text-emerald-400 mt-0.5">•</div>
                  <div className="text-slate-300">
                    <span className="font-bold text-white">Cities:</span> Riyadh, Jeddah, Dammam
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-emerald-400 mt-0.5">•</div>
                  <div className="text-slate-300">
                    <span className="font-bold text-white">Population:</span> 36M (22M nationals, 14M expats)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-emerald-400 mt-0.5">•</div>
                  <div className="text-slate-300">
                    <span className="font-bold text-white">Why second:</span> Larger market, requires top-down partnerships, government alignment critical
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                <div className="text-xs text-emerald-300 font-bold mb-2">SUCCESS CRITERIA (MONTH 24)</div>
                <div className="space-y-1 text-xs text-slate-300">
                  <div>✅ 300 merchants across 3 cities</div>
                  <div>✅ 50,000 active users</div>
                  <div>✅ AED 50M GMV</div>
                  <div>✅ 32% D30 retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Carries Over */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/30 border-2 border-slate-600/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6">1️⃣ What Carries Over (Non-Negotiable)</h2>
          <p className="text-slate-300 mb-6">You do <span className="font-bold text-white">NOT</span> reinvent the product.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
              <div className="font-bold text-emerald-300 mb-2">✅ Dual Coin System</div>
              <div className="text-sm text-slate-300">Nuqta Coins (universal) + Brand Coins (merchant loyalty)</div>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
              <div className="font-bold text-emerald-300 mb-2">✅ Dual Merchant Model</div>
              <div className="text-sm text-slate-300">Engine A: 15% | Engine B: 5%</div>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
              <div className="font-bold text-emerald-300 mb-2">✅ Event-Led Acquisition</div>
              <div className="text-sm text-slate-300">Tier 1 mega-exhibitions, Tier 2 community markets, Tier 3 university hubs</div>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
              <div className="font-bold text-emerald-300 mb-2">✅ Unit Economics Discipline</div>
              <div className="text-sm text-slate-300">LTV:CAC 8:1 minimum, <10% merchant churn, 35%+ D30 retention</div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <p className="text-sm text-slate-300">
              <span className="font-bold text-blue-300">📌 This is why Phase 1 discipline matters.</span> If you didn't get these right in UAE, you can't scale to KSA/Qatar.
            </p>
          </div>
        </div>

        {/* What Changes */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-center">2️⃣ What Changes in Phase 2</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Regulatory */}
            <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-2 border-red-500/40 rounded-2xl p-6">
              <h3 className="text-xl font-black text-red-300 mb-4">🏛️ Regulatory Layer</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div>
                  <div className="font-bold text-white mb-1">Qatar Central Bank</div>
                  <div className="text-xs">E-wallet license, data residency, AML/KYC</div>
                </div>
                <div>
                  <div className="font-bold text-white mb-1">SAMA (Saudi)</div>
                  <div className="text-xs">PSP license, Arabization, strict data localization</div>
                </div>
                <div className="text-xs text-red-300">
                  ⏱️ 6-12 month licensing timeline
                </div>
              </div>
            </div>

            {/* Cultural */}
            <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/20 border-2 border-amber-500/40 rounded-2xl p-6">
              <h3 className="text-xl font-black text-amber-300 mb-4">🗣️ Cultural Localization</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div>
                  <div className="font-bold text-white mb-1">Saudi Arabia</div>
                  <div className="text-xs">Arabic-first (90% UI), family spending focus, gender-segmented retail</div>
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Qatar</div>
                  <div className="text-xs">English + Arabic balanced, family-centric messaging, expat families</div>
                </div>
              </div>
            </div>

            {/* Merchant Mix */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-2xl p-6">
              <h3 className="text-xl font-black text-purple-300 mb-4">🏢 Merchant Mix Shift</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div>
                  <div className="font-bold text-white mb-1">Chains-First Approach</div>
                  <div className="text-xs">50% local chains (Albaik, Panda, Jarir)</div>
                  <div className="text-xs">20% independent SMBs</div>
                  <div className="text-xs">20% regional chains</div>
                </div>
                <div className="text-xs text-purple-300">
                  📊 Top-down sales motion
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Partnerships */}
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-blue-300">5️⃣ Phase 2 Partnerships (Critical)</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Banks */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="text-2xl">🏦</div>
                <h3 className="text-lg font-bold text-blue-300">Banks & Distribution</h3>
              </div>
              <div className="space-y-2 text-sm text-slate-300">
                <div>
                  <div className="font-bold text-white">🇶🇦 QNB</div>
                  <div className="text-xs">3M customers, government-backed</div>
                </div>
                <div>
                  <div className="font-bold text-white">🇸🇦 Al Rajhi Bank</div>
                  <div className="text-xs">10M+ customers, retail-focused</div>
                </div>
                <div>
                  <div className="font-bold text-white">🇸🇦 Saudi National Bank</div>
                  <div className="text-xs">Largest conventional bank</div>
                </div>
              </div>
              <div className="text-xs text-blue-300">
                💡 Card-linked offers: "Use your card + Nuqta = 2x coins"
              </div>
            </div>

            {/* Malls */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="text-2xl">🏬</div>
                <h3 className="text-lg font-bold text-emerald-300">Mall Operators</h3>
              </div>
              <div className="space-y-2 text-sm text-slate-300">
                <div>
                  <div className="font-bold text-white">🇶🇦 Mannai Trading</div>
                  <div className="text-xs">Mall of Qatar, Doha Festival City</div>
                </div>
                <div>
                  <div className="font-bold text-white">🇸🇦 Arabian Centres</div>
                  <div className="text-xs">20+ malls (Riyadh Park, Granada)</div>
                </div>
                <div>
                  <div className="font-bold text-white">🇸🇦 Majid Al Futtaim</div>
                  <div className="text-xs">City Centre malls</div>
                </div>
              </div>
              <div className="text-xs text-emerald-300">
                💡 SaaS fee: AED 100K-200K/year per mall group
              </div>
            </div>

            {/* Events */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="text-2xl">🎉</div>
                <h3 className="text-lg font-bold text-purple-300">Event Organizers</h3>
              </div>
              <div className="space-y-2 text-sm text-slate-300">
                <div>
                  <div className="font-bold text-white">🇶🇦 Qatar Summer Festival</div>
                  <div className="text-xs">500K attendees</div>
                </div>
                <div>
                  <div className="font-bold text-white">🇸🇦 Riyadh Season</div>
                  <div className="text-xs">15M+ attendees (6-month festival)</div>
                </div>
                <div>
                  <div className="font-bold text-white">🇸🇦 Jeddah Season</div>
                  <div className="text-xs">10M+ attendees</div>
                </div>
              </div>
              <div className="text-xs text-purple-300">
                💡 Official rewards partner = mass user acquisition
              </div>
            </div>
          </div>
        </div>

        {/* Product Additions */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-center">4️⃣ Phase 2 Product Additions</h2>
          <p className="text-center text-slate-300">You do NOT bloat. You add only what's needed for multi-country operations.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-6">
              <h3 className="text-xl font-black text-blue-300 mb-4">💳 Multi-Country Wallets</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div>• Single Nuqta wallet across UAE + Qatar + Saudi</div>
                <div>• Unified balance (AED, QAR, SAR denominated in AED)</div>
                <div>• Cross-border redemption (earn in UAE, spend in KSA)</div>
                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-xs">
                  <div className="font-bold text-blue-300 mb-1">Example:</div>
                  <div>User earns 100 coins in Dubai → Travels to Riyadh → Spends 100 coins at Albaik (seamless FX conversion)</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-2xl p-6">
              <h3 className="text-xl font-black text-purple-300 mb-4">🌍 Cross-Border Rewards</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div>• Same AED 1 value across all GCC markets</div>
                <div>• Network effects (more countries = more valuable)</div>
                <div>• Only platform with GCC-wide spending data</div>
                <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-xs">
                  <div className="font-bold text-purple-300 mb-1">Strategic Value:</div>
                  <div>Switching costs (locked into Nuqta across 3 countries), competitive moat</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border-2 border-emerald-500/40 rounded-2xl p-6">
              <h3 className="text-xl font-black text-emerald-300 mb-4">🗣️ Local Language UX</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div>
                  <div className="font-bold text-white">Saudi Arabia:</div>
                  <div className="text-xs">90% Arabic UI (RTL layout), Arabic support, Arabic onboarding</div>
                </div>
                <div>
                  <div className="font-bold text-white">Qatar:</div>
                  <div className="text-xs">Bilingual UI (toggle EN/AR), mixed support</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/20 border-2 border-amber-500/40 rounded-2xl p-6">
              <h3 className="text-xl font-black text-amber-300 mb-4">📊 Enterprise Reporting</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div>• Multi-location rollup reports (200 Panda stores in one view)</div>
                <div>• Benchmarking (Riyadh vs Jeddah performance)</div>
                <div>• API access (chains integrate Nuqta data into BI tools)</div>
                <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs">
                  <div className="font-bold text-amber-300">Enterprise tier: AED 50K/year (chains with 50+ locations)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Projections */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-center">💰 Phase 2 Financial Projections</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-blue-500/40">
                  <th className="py-3 px-4 font-bold text-blue-300">Year</th>
                  <th className="py-3 px-4 font-bold text-blue-300">Countries</th>
                  <th className="py-3 px-4 font-bold text-blue-300">GMV</th>
                  <th className="py-3 px-4 font-bold text-blue-300">Revenue Mix</th>
                  <th className="py-3 px-4 font-bold text-blue-300">Total Revenue</th>
                  <th className="py-3 px-4 font-bold text-blue-300">EBITDA</th>
                  <th className="py-3 px-4 font-bold text-blue-300">Team</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-bold text-blue-400">Year 6</td>
                  <td className="py-3 px-4 text-sm">UAE + Qatar pilot</td>
                  <td className="py-3 px-4">AED 1.5B</td>
                  <td className="py-3 px-4 text-xs">65% GMV, 20% SaaS, 15% Data</td>
                  <td className="py-3 px-4 font-bold">AED 120M</td>
                  <td className="py-3 px-4 text-emerald-400">AED 50M (42%)</td>
                  <td className="py-3 px-4">50</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-bold text-purple-400">Year 7</td>
                  <td className="py-3 px-4 text-sm">UAE + Qatar + Saudi (Riyadh)</td>
                  <td className="py-3 px-4">AED 2B</td>
                  <td className="py-3 px-4 text-xs">60% GMV, 25% SaaS, 15% Data</td>
                  <td className="py-3 px-4 font-bold">AED 180M</td>
                  <td className="py-3 px-4 text-emerald-400">AED 80M (44%)</td>
                  <td className="py-3 px-4">65</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-bold text-pink-400">Year 8</td>
                  <td className="py-3 px-4 text-sm">UAE + Qatar + Saudi (3 cities)</td>
                  <td className="py-3 px-4">AED 2.5B</td>
                  <td className="py-3 px-4 text-xs">60% GMV, 25% SaaS, 15% Data</td>
                  <td className="py-3 px-4 font-bold">AED 220M</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">AED 100M (45%)</td>
                  <td className="py-3 px-4">80</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
            <p className="text-sm text-slate-300">
              <span className="font-bold text-emerald-300">Why Margins Improve:</span> Platform leverage (same tech for 3 countries), enterprise revenue grows (high margin), operational efficiency (chains require less support than SMBs)
            </p>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border-2 border-emerald-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-emerald-300">📊 Phase 2 Success Metrics</h2>
          <p className="text-lg font-bold text-white mb-6">By End of Phase 2 (Month 24):</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-white mb-1">1,500</div>
              <div className="text-xs text-slate-300">Total Merchants</div>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-white mb-1">200K</div>
              <div className="text-xs text-slate-300">Active Users</div>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-white mb-1">AED 2-3B</div>
              <div className="text-xs text-slate-300">Annual GMV</div>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-white mb-1">32%+</div>
              <div className="text-xs text-slate-300">D30 Retention</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
              <div className="font-bold text-blue-300 mb-1">🇦🇪 UAE</div>
              <div className="text-xs text-slate-300">130K users, 1,000 merchants, AED 1.5B GMV</div>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
              <div className="font-bold text-purple-300 mb-1">🇶🇦 Qatar</div>
              <div className="text-xs text-slate-300">20K users, 100 merchants, AED 200M GMV</div>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3">
              <div className="font-bold text-emerald-300 mb-1">🇸🇦 Saudi Arabia</div>
              <div className="text-xs text-slate-300">50K users, 400 merchants, AED 500M GMV</div>
            </div>
          </div>
        </div>

        {/* What NOT to Do */}
        <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-2 border-red-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-red-300">🚩 What NOT to Do in Phase 2</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="text-2xl mb-2">❌</div>
              <div className="font-bold text-red-300 mb-2">Don't Launch 5+ Countries</div>
              <div className="text-sm text-slate-300">Qatar → Saudi → Stop. Phase 3 for others (Years 9-10).</div>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="text-2xl mb-2">❌</div>
              <div className="font-bold text-red-300 mb-2">Don't Become a Bank</div>
              <div className="text-sm text-slate-300">No savings accounts, no lending beyond controlled BNPL. Stay asset-light.</div>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="text-2xl mb-2">❌</div>
              <div className="font-bold text-red-300 mb-2">Don't Do Aggressive BNPL</div>
              <div className="text-sm text-slate-300">BNPL stays <10% of revenue, salary-linked only, education/healthcare/fitness only.</div>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="text-2xl mb-2">❌</div>
              <div className="font-bold text-red-300 mb-2">Don't Build Custom Features Per Client</div>
              <div className="text-sm text-slate-300">Enterprise tier with configurable options, not bespoke builds.</div>
            </div>
          </div>
        </div>

        {/* The One-Liner */}
        <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border-2 border-[#c9a227]/40 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-black mb-4 text-[#c9a227]">🔑 The One-Line Summary</h2>
          <p className="text-3xl font-black text-white">
            "Phase 2 is about exporting a proven system, not inventing a new one."
          </p>
        </div>

        {/* Series C Readiness */}
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-blue-300">🎯 Series C Readiness (End of Phase 2)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-300">Target Metrics (Year 8)</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Annual Revenue: <span className="font-bold text-white">AED 220M ($60M)</span></li>
                <li>• Revenue Growth: <span className="font-bold text-white">50%+ YoY</span></li>
                <li>• EBITDA Margin: <span className="font-bold text-white">40-45%</span></li>
                <li>• Enterprise Revenue: <span className="font-bold text-white">40% of total</span></li>
                <li>• Cross-Border Users: <span className="font-bold text-white">30% of base</span></li>
                <li>• GCC Market Share: <span className="font-bold text-white">15-20%</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-300">Series C Raise</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Amount: <span className="font-bold text-white">$50-80M</span></li>
                <li>• Valuation: <span className="font-bold text-white">$300-500M</span></li>
                <li>• Use of Funds:</li>
                <li className="ml-4">→ 40% Phase 3 expansion (Kuwait, Bahrain, Oman)</li>
                <li className="ml-4">→ 30% Enterprise platform</li>
                <li className="ml-4">→ 20% Team scaling (80 → 120 people)</li>
                <li className="ml-4">→ 10% Reserve/runway</li>
              </ul>
            </div>
          </div>
          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <p className="text-sm text-slate-300">
              <span className="font-bold text-blue-300">Why Investors Will Love This:</span> Regional dominance in GCC's 3 largest markets,
              proven replication model, diversified revenue, high margins, network effects, category-defining.
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
          </div>
        </div>

      </div>
    </div>
  )
}
