'use client'

export default function H3InfrastructurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a42] to-[#0a1628] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">

        {/* Hero Section */}
        <div className="space-y-6 text-center">
          <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-300 text-sm font-bold">
            🟣 HORIZON 3 (Years 3-5)
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-7xl font-black tracking-tight">
            Become <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Infrastructure</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            "From Product → Platform → Infrastructure"
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
              <span className="text-purple-300">Infrastructure Blueprint</span>
            </div>
            <div className="text-purple-400">•</div>
            <div className="text-purple-300">Years 3-5 (Post UAE Domination)</div>
            <div className="text-purple-400">•</div>
            <a href="/master-roadmap" className="text-[#c9a227] hover:text-white transition-colors font-semibold underline">
              ← Master Roadmap
            </a>
            <div className="text-purple-400">•</div>
            <a href="/h2-strategy" className="text-purple-300 hover:text-white transition-colors font-semibold underline">
              ← H2 Strategy
            </a>
          </div>
        </div>

        {/* Core Objective */}
        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 border-2 border-purple-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-4 text-purple-300">🎯 H3 Core Objective</h2>
          <p className="text-2xl font-bold text-white mb-6">Make Nuqta unavoidable in offline commerce across the GCC.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
              <div className="text-3xl mb-2">🔒</div>
              <div className="font-bold text-purple-300 mb-2">You Entrench</div>
              <div className="text-sm text-slate-300">Deep integration with existing systems</div>
            </div>
            <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4">
              <div className="text-3xl mb-2">🔗</div>
              <div className="font-bold text-pink-300 mb-2">You Integrate</div>
              <div className="text-sm text-slate-300">Embedded in malls, governments, universities</div>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
              <div className="text-3xl mb-2">📏</div>
              <div className="font-bold text-purple-300 mb-2">You Standardize</div>
              <div className="text-sm text-slate-300">Become the default rewards layer</div>
            </div>
          </div>
        </div>

        {/* 4 Axes Framework */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-center">The 4 Parallel Expansion Axes</h2>
          <p className="text-center text-slate-300 text-lg">H3 is about becoming infrastructure that cannot be removed.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Axis 1 */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-6">
              <h3 className="text-2xl font-black text-blue-300 mb-4">1️⃣ Geographic Deepening</h3>
              <p className="text-slate-300 mb-4">Full GCC Coverage: Kuwait, Bahrain, Oman</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1">🇰🇼</div>
                  <div>
                    <div className="font-bold text-blue-300">Kuwait</div>
                    <div className="text-slate-400">4.3M population, high per-capita spending</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1">🇧🇭</div>
                  <div>
                    <div className="font-bold text-blue-300">Bahrain</div>
                    <div className="text-slate-400">1.5M population, financial hub</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-blue-400 mt-1">🇴🇲</div>
                  <div>
                    <div className="font-bold text-blue-300">Oman</div>
                    <div className="text-slate-400">4.6M population, tourism-heavy</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Axis 2 */}
            <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border-2 border-emerald-500/40 rounded-2xl p-6">
              <h3 className="text-2xl font-black text-emerald-300 mb-4">2️⃣ Enterprise & Government</h3>
              <p className="text-slate-300 mb-4">Partnerships that make Nuqta hard to replace</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="text-emerald-400 mt-1">🏢</div>
                  <div>
                    <div className="font-bold text-emerald-300">Mall Groups</div>
                    <div className="text-slate-400">Majid Al Futtaim, Emaar, Landmark</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-emerald-400 mt-1">🏛️</div>
                  <div>
                    <div className="font-bold text-emerald-300">Tourism Boards</div>
                    <div className="text-slate-400">Dubai Tourism, Visit Qatar, Saudi Tourism</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-emerald-400 mt-1">🎓</div>
                  <div>
                    <div className="font-bold text-emerald-300">Universities</div>
                    <div className="text-slate-400">Campus-wide wallets, student exclusives</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Axis 3 */}
            <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/20 border-2 border-amber-500/40 rounded-2xl p-6">
              <h3 className="text-2xl font-black text-amber-300 mb-4">3️⃣ Financial Infrastructure</h3>
              <p className="text-slate-300 mb-4">Become financial plumbing (not a bank)</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="text-amber-400 mt-1">💳</div>
                  <div>
                    <div className="font-bold text-amber-300">Wallet-as-a-Service</div>
                    <div className="text-slate-400">White-labeled wallets for malls, events, universities</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-amber-400 mt-1">📊</div>
                  <div>
                    <div className="font-bold text-amber-300">BNPL (Limited)</div>
                    <div className="text-slate-400">Education, healthcare, fitness only</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-amber-400 mt-1">🌍</div>
                  <div>
                    <div className="font-bold text-amber-300">Cross-Border Rewards</div>
                    <div className="text-slate-400">Earn in UAE, redeem across all 6 GCC countries</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Axis 4 */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-2xl p-6">
              <h3 className="text-2xl font-black text-purple-300 mb-4">4️⃣ Data & Intelligence</h3>
              <p className="text-slate-300 mb-4">Your most valuable asset: behavioral data</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="text-purple-400 mt-1">📈</div>
                  <div>
                    <div className="font-bold text-purple-300">Insights Dashboard</div>
                    <div className="text-slate-400">SaaS for merchants, malls, event organizers</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-purple-400 mt-1">📊</div>
                  <div>
                    <div className="font-bold text-purple-300">Custom Reports</div>
                    <div className="text-slate-400">Banks, city planners, tourism boards</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-purple-400 mt-1">🔌</div>
                  <div>
                    <div className="font-bold text-purple-300">Data API</div>
                    <div className="text-slate-400">Real-time feeds for enterprise integration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Model Evolution */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/30 border-2 border-slate-600/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6">🧠 How H3 Changes Your Business Model</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-4">Pre-H3 (H1 + H2)</h3>
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                <p className="text-lg font-bold mb-2">Revenue = % of GMV</p>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• Users spend → Merchants pay commission</li>
                  <li>• Linear relationship (more GMV = more revenue)</li>
                  <li>• 100% transactional dependency</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-4">H3+</h3>
              <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-4">
                <p className="text-lg font-bold mb-2">Revenue = GMV + SaaS + Data + Enterprise</p>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>• <span className="font-bold text-white">60%</span> Base Layer (GMV take rate)</li>
                  <li>• <span className="font-bold text-white">20%</span> Platform Layer (SaaS fees)</li>
                  <li>• <span className="font-bold text-white">15%</span> Intelligence Layer (data)</li>
                  <li>• <span className="font-bold text-white">5%</span> Feature Layer (BNPL, premium)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
            <p className="text-sm text-slate-300">
              <span className="font-bold text-purple-300">Why This Matters:</span> SaaS companies trade at 8-12x revenue vs 3-5x for marketplaces.
              Higher margins (80-90% vs 60%), more defensible (annual contracts vs transactional), and stabilized revenue.
            </p>
          </div>
        </div>

        {/* Financial Projections */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-center">💰 H3 Financial Projections</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-purple-500/40">
                  <th className="py-3 px-4 font-bold text-purple-300">Year</th>
                  <th className="py-3 px-4 font-bold text-purple-300">GMV (Annual)</th>
                  <th className="py-3 px-4 font-bold text-purple-300">Revenue Mix</th>
                  <th className="py-3 px-4 font-bold text-purple-300">Total Revenue</th>
                  <th className="py-3 px-4 font-bold text-purple-300">EBITDA</th>
                  <th className="py-3 px-4 font-bold text-purple-300">Team Size</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-bold text-blue-400">Year 3</td>
                  <td className="py-3 px-4">AED 100M</td>
                  <td className="py-3 px-4 text-sm">80% GMV, 15% SaaS, 5% Data</td>
                  <td className="py-3 px-4 font-bold">AED 8M</td>
                  <td className="py-3 px-4 text-red-400">-AED 2M</td>
                  <td className="py-3 px-4">15 people</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-bold text-purple-400">Year 4</td>
                  <td className="py-3 px-4">AED 300M</td>
                  <td className="py-3 px-4 text-sm">70% GMV, 20% SaaS, 10% Data</td>
                  <td className="py-3 px-4 font-bold">AED 22M</td>
                  <td className="py-3 px-4 text-emerald-400">+AED 4M ✅</td>
                  <td className="py-3 px-4">25 people</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-bold text-pink-400">Year 5</td>
                  <td className="py-3 px-4">AED 500M-1B</td>
                  <td className="py-3 px-4 text-sm">60% GMV, 20% SaaS, 15% Data, 5% BNPL</td>
                  <td className="py-3 px-4 font-bold">AED 50M+</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">+AED 20M 🚀</td>
                  <td className="py-3 px-4">30-40 people</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border-2 border-emerald-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-emerald-300">📊 H3 Success Metrics (Not Just GMV)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-red-400 mb-4">❌ Old Metrics (H1 + H2)</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• GMV growth</li>
                <li>• User count</li>
                <li>• Merchant count</li>
                <li>• Transaction volume</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-emerald-400 mb-4">✅ New Metrics (H3)</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• <span className="font-bold">50+ malls</span> using Nuqta as official rewards layer</li>
                <li>• <span className="font-bold">6 government</span> tourism board partnerships</li>
                <li>• <span className="font-bold">10 universities</span> with campus-wide wallet</li>
                <li>• <span className="font-bold">40% enterprise revenue</span> (non-transactional)</li>
                <li>• <span className="font-bold">30% cross-border users</span> (network effects)</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
            <p className="text-lg font-bold text-emerald-300 mb-2">What "Winning" Looks Like by H3 End:</p>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>✅ Governments / malls <span className="font-bold text-white">name Nuqta in official programs</span></li>
              <li>✅ Merchants design offers <span className="font-bold text-white">"for Nuqta users"</span></li>
              <li>✅ Events <span className="font-bold text-white">default to Nuqta</span> for rewards infrastructure</li>
              <li>✅ Banks <span className="font-bold text-white">integrate Nuqta insights</span> into fraud models</li>
              <li>✅ Users <span className="font-bold text-white">check Nuqta before paying</span> (habit formation complete)</li>
            </ul>
          </div>
        </div>

        {/* What NOT to Do */}
        <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-2 border-red-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-red-300">🚩 What NOT to Do in H3</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="text-2xl mb-2">❌</div>
              <div className="font-bold text-red-300 mb-2">Don't Become a Bank</div>
              <div className="text-sm text-slate-300">No savings accounts, no lending beyond controlled BNPL, no credit cards. Stay asset-light.</div>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="text-2xl mb-2">❌</div>
              <div className="font-bold text-red-300 mb-2">Don't Expand Globally</div>
              <div className="text-sm text-slate-300">No Egypt, Pakistan, London, or SEA. GCC is $2T GDP with 60M people. Win here first.</div>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="text-2xl mb-2">❌</div>
              <div className="font-bold text-red-300 mb-2">Don't Launch Hardware</div>
              <div className="text-sm text-slate-300">No Nuqta card, no POS terminals, no payment wearables. Stay software-only.</div>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="text-2xl mb-2">❌</div>
              <div className="font-bold text-red-300 mb-2">Don't Over-Hire</div>
              <div className="text-sm text-slate-300">Target 30-40 people by Year 5 (not 100+). Every hire must unlock 10x leverage.</div>
            </div>
          </div>
        </div>

        {/* The One-Liner */}
        <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border-2 border-[#c9a227]/40 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-black mb-4 text-[#c9a227]">🔑 The One-Liner (Memorize This)</h2>
          <p className="text-3xl font-black text-white">
            "H1 proves the loop, H2 scales it, H3 embeds it into the economy."
          </p>
        </div>

        {/* Series B Readiness */}
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-blue-300">🎯 Series B Readiness (End of H3)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-300">Target Metrics</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Annual Revenue: <span className="font-bold text-white">AED 50M ($13.6M)</span></li>
                <li>• Revenue Growth: <span className="font-bold text-white">100%+ YoY</span></li>
                <li>• EBITDA Margin: <span className="font-bold text-white">30-40%</span></li>
                <li>• Enterprise Revenue: <span className="font-bold text-white">40% of total</span></li>
                <li>• D30 Retention: <span className="font-bold text-white">40%+</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-300">Series B Raise</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Amount: <span className="font-bold text-white">$15-25M</span></li>
                <li>• Valuation: <span className="font-bold text-white">$100-150M</span></li>
                <li>• Use of Funds:</li>
                <li className="ml-4">→ 40% GCC expansion</li>
                <li className="ml-4">→ 30% Platform engineering</li>
                <li className="ml-4">→ 20% Enterprise sales team</li>
                <li className="ml-4">→ 10% Reserve/runway</li>
              </ul>
            </div>
          </div>
          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <p className="text-sm text-slate-300">
              <span className="font-bold text-blue-300">Why Investors Will Love This:</span> Proven market leadership, replicated playbook,
              revenue diversification, path to profitability, infrastructure lock-in, and defensible moat.
            </p>
          </div>
        </div>

        {/* Timeline & KPI Gates */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Timeline */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-8">
              <h2 className="text-3xl font-black mb-6 text-blue-300">📅 H3 Timeline</h2>
              <div className="space-y-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-blue-300">Standard Timeline</span>
                    <span className="text-sm text-slate-400">Years 3-5 (3 years)</span>
                  </div>
                  <p className="text-sm text-slate-300">Original plan: 3 years to become infrastructure</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-emerald-300">Accelerated Timeline</span>
                    <span className="text-sm font-black text-emerald-400">~1.2 years</span>
                  </div>
                  <p className="text-sm text-slate-300">60% faster: Complete in Years 2-3.2 with aggressive execution</p>
                </div>
                <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-xl p-4">
                  <p className="text-sm font-bold text-emerald-300 mb-1">⚡ Acceleration Strategy</p>
                  <p className="text-xs text-slate-300">Parallel partnership negotiations, faster mall rollouts, early government pilots</p>
                </div>
              </div>
            </div>

            {/* KPI Gate to Phase 2 */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-2xl p-8">
              <h2 className="text-3xl font-black mb-6 text-purple-300">🎯 H3 → Phase 2 KPI Gate</h2>
              <p className="text-sm text-slate-300 mb-6">Critical gates before geographic expansion:</p>
              <div className="space-y-3">
                <div className="bg-purple-500/10 border-l-4 border-purple-500 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">UAE Merchant Churn</span>
                    <span className="text-lg font-black text-purple-300">≤8%</span>
                  </div>
                </div>
                <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">EBITDA Margin</span>
                    <span className="text-lg font-black text-blue-300">≥30%</span>
                  </div>
                </div>
                <div className="bg-emerald-500/10 border-l-4 border-emerald-500 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">WaaS Partnerships</span>
                    <span className="text-lg font-black text-emerald-300">≥5</span>
                  </div>
                </div>
                <div className="bg-amber-500/10 border-l-4 border-amber-500 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">Gov Partnerships</span>
                    <span className="text-lg font-black text-amber-300">≥2</span>
                  </div>
                </div>
                <div className="bg-pink-500/10 border-l-4 border-pink-500 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">Fraud Rate</span>
                    <span className="text-lg font-black text-pink-300">≤2%</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                <p className="text-xs font-bold text-purple-300 mb-1">Early Gate Rule:</p>
                <p className="text-xs text-slate-300">Hit all gates 6+ months early with strong metrics → greenlight Phase 2</p>
              </div>
            </div>
          </div>

          {/* Next Phase Preview */}
          <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border-2 border-cyan-500/40 rounded-2xl p-8 text-center">
            <p className="text-sm font-bold text-cyan-300 mb-2">AFTER H3 GATE ✅</p>
            <h3 className="text-3xl font-black mb-4">Next: Phase 2 GCC Expansion</h3>
            <p className="text-slate-300 mb-6">Qatar (pilot), Saudi Arabia (3 cities), replicate proven playbook regionally</p>
            <a href="/phase-2" className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-600 transition-colors rounded-xl font-bold text-white">
              View Phase 2 Strategy →
            </a>
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
          </div>
        </div>

      </div>
    </div>
  )
}
