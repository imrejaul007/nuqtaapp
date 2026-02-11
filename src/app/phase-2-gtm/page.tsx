'use client';

import { CheckCircle2, Globe, Users, Target, Zap, TrendingUp, DollarSign, MapPin, Building2, Sparkles, AlertTriangle, Clock } from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function Phase2GTMPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a42] to-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">

        {/* Hero Section */}
        <div className="space-y-6 text-center">
          <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-300 text-sm font-bold">
            🌍 PHASE 2: GCC EXPANSION (~1.2 YEARS)
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-7xl font-black tracking-tight">
            GTM Strategy: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Proven Playbook Export</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            "Exporting a proven system, not inventing a new one. Replicate UAE success in Qatar (test) and Saudi Arabia (scale)."
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇶🇦</span>
              <span className="text-slate-300">Qatar: 3-4 months</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇸🇦</span>
              <span className="text-slate-300">Saudi Arabia: 9-10 months</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="text-cyan-400 font-bold">~1.2 Years Total (Accelerated)</span>
            </div>
          </div>
        </div>

        {/* GTM Philosophy */}
        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-2 border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-slate-100">🧠 Phase 2 GTM Philosophy</h2>
          <div className="space-y-4 text-lg text-slate-300">
            <p className="leading-relaxed">
              <span className="font-bold text-white">No experimentation. Only replication:</span> By Phase 2, Nuqta has a proven UAE playbook (3 Horizons complete). The GTM strategy is NOT to "test and learn" but to execute the exact same 3-channel engine with localization overlays.
            </p>
            <div className="bg-cyan-500/10 border-l-4 border-cyan-500 rounded-lg p-4">
              <p className="text-cyan-300 font-bold">Core Principle:</p>
              <p className="text-slate-300 mt-2">Test in Qatar (small, safe). Scale in KSA (massive TAM). Same GTM mechanics, different language/culture layers.</p>
            </div>
          </div>
        </div>

        {/* Why This Order */}
        <div className="bg-gradient-to-br from-purple-900/30 to-indigo-800/20 border-2 border-purple-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-purple-300">🎯 Why Qatar First, Then KSA?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4">🇶🇦 Qatar = Test Market</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Smallest GCC market (3M population)</p>
                    <p>Controlled risk, fast iteration</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Similar to UAE</p>
                    <p>Expat-heavy, English-speaking, cashless-ready</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Fast regulatory</p>
                    <p>QFC can approve fintech licenses in weeks</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Learning lab</p>
                    <p>Test Arabic localization, cross-border flows</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-300 mb-4">🇸🇦 KSA = Scale Market</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">40% of GCC GDP</p>
                    <p>36M population, massive TAM</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Vision 2030</p>
                    <p>Government pushing cashless, fintech-friendly</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Young & digital</p>
                    <p>70% under 35, 98% smartphone penetration</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Strategic priority</p>
                    <p>Success in KSA = GCC credibility unlocked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Qatar GTM Deep Dive */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">🇶🇦</div>
            <h2 className="text-4xl font-black text-cyan-300">Qatar Entry GTM (3-4 Months)</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Month 1 */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border-2 border-cyan-500/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 text-white font-black text-xl">1</div>
                <h3 className="text-xl font-bold text-cyan-300">Month 1: Setup</h3>
              </div>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3">
                  <p className="font-bold text-cyan-300 mb-1">Legal & Regulatory</p>
                  <p>• QFC fintech license application<br />• Local entity registration<br />• Payment gateway approvals</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                  <p className="font-bold text-blue-300 mb-1">Banking Partnerships</p>
                  <p>• QNB deal (largest bank)<br />• Doha Bank integration<br />• QAR currency setup</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
                  <p className="font-bold text-purple-300 mb-1">Merchant Pipeline</p>
                  <p>• 20 merchant LOIs signed<br />• Focus: Souq Waqif, The Pearl<br />• F&B + Healthcare priority</p>
                </div>
              </div>
            </div>

            {/* Month 2 */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-black text-xl">2</div>
                <h3 className="text-xl font-bold text-blue-300">Month 2: Localization</h3>
              </div>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                  <p className="font-bold text-blue-300 mb-1">Product Adaptation</p>
                  <p>• Arabic UI/UX (RTL layout)<br />• QAR currency display<br />• Local payment rails integration</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
                  <p className="font-bold text-purple-300 mb-1">Team Hiring</p>
                  <p>• Qatar Country Manager<br />• 2 merchant BD reps<br />• Local customer support</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3">
                  <p className="font-bold text-emerald-300 mb-1">Marketing Prep</p>
                  <p>• Arabic social media assets<br />• Local influencer outreach<br />• Qatar University partnerships</p>
                </div>
              </div>
            </div>

            {/* Month 3-4 */}
            <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border-2 border-emerald-500/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white font-black text-xl">3-4</div>
                <h3 className="text-xl font-bold text-emerald-300">Months 3-4: Launch</h3>
              </div>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3">
                  <p className="font-bold text-emerald-300 mb-1">Soft Launch</p>
                  <p>• 10 merchants go live<br />• 500 beta users onboarded<br />• Prove core loop works</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                  <p className="font-bold text-blue-300 mb-1">Scale to Target</p>
                  <p>• Expand to 500 merchants<br />• Hit 50K MAU milestone<br />• D30 retention ≥ 30%</p>
                </div>
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-3">
                  <p className="font-bold text-[#c9a227] mb-1">Unit Economics Proof</p>
                  <p>• CAC ≤ AED 30 validated<br />• LTV:CAC ≥ 16x proven<br />• Ready for KSA replication</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Qatar GTM Channels */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-white">🎯 Qatar GTM Channels (Same 3-Engine Playbook)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-5">
              <div className="font-bold text-cyan-300 mb-3 text-lg">1. Merchant QR Distribution</div>
              <div className="space-y-2 text-sm text-slate-300">
                <p><strong className="text-white">Same mechanics:</strong> QR at checkout → instant cashback</p>
                <p><strong className="text-white">Target locations:</strong> Souq Waqif, The Pearl, Corniche</p>
                <p><strong className="text-white">Target CAC:</strong> <span className="text-cyan-400 font-black">≤ QAR 55 (AED 15 equivalent)</span></p>
              </div>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5">
              <div className="font-bold text-purple-300 mb-3 text-lg">2. Student Ambassadors</div>
              <div className="space-y-2 text-sm text-slate-300">
                <p><strong className="text-white">Universities:</strong> Qatar University, Georgetown Qatar, Northwestern</p>
                <p><strong className="text-white">Incentive:</strong> QAR 1,800/mo + QAR 35 per activated user</p>
                <p><strong className="text-white">Target CAC:</strong> <span className="text-purple-400 font-black">≤ QAR 110 (AED 30 equivalent)</span></p>
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
              <div className="font-bold text-emerald-300 mb-3 text-lg">3. Daily Habit Loops</div>
              <div className="space-y-2 text-sm text-slate-300">
                <p><strong className="text-white">Triggers:</strong> Lunch (12-2pm), dinner (7-9pm) push notifications</p>
                <p><strong className="text-white">Localization:</strong> Arabic messages, Ramadan timing adjustments</p>
                <p><strong className="text-white">Target:</strong> <span className="text-emerald-400 font-black">8+ sessions/month, D30 ≥ 25%</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Saudi Arabia GTM Deep Dive */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">🇸🇦</div>
            <h2 className="text-4xl font-black text-orange-300">Saudi Arabia Entry GTM (9-10 Months)</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {/* Q1: Setup */}
            <div className="bg-gradient-to-br from-orange-900/30 to-red-800/20 border-2 border-orange-500/40 rounded-2xl p-5">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-black text-lg mb-2">Q1</div>
                <h3 className="text-lg font-bold text-orange-300">Riyadh Setup</h3>
                <p className="text-xs text-slate-400 mt-1">Months 1-3</p>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="bg-orange-500/10 border border-orange-500/30 rounded p-2">
                  <p className="font-bold text-orange-300">Legal</p>
                  <p>SAMA license, local entity</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded p-2">
                  <p className="font-bold text-red-300">Banking</p>
                  <p>STC Pay, mada integration</p>
                </div>
                <div className="bg-pink-500/10 border border-pink-500/30 rounded p-2">
                  <p className="font-bold text-pink-300">Team</p>
                  <p>KSA Country Manager + BD</p>
                </div>
              </div>
            </div>

            {/* Q2: Riyadh Launch */}
            <div className="bg-gradient-to-br from-red-900/30 to-pink-800/20 border-2 border-red-500/40 rounded-2xl p-5">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white font-black text-lg mb-2">Q2</div>
                <h3 className="text-lg font-bold text-red-300">Riyadh Launch</h3>
                <p className="text-xs text-slate-400 mt-1">Months 4-6</p>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="bg-red-500/10 border border-red-500/30 rounded p-2">
                  <p className="font-bold text-red-300">Soft Launch</p>
                  <p>30 merchants, 1K users</p>
                </div>
                <div className="bg-pink-500/10 border border-pink-500/30 rounded p-2">
                  <p className="font-bold text-pink-300">PMF Validation</p>
                  <p>Prove Saudi-specific habits</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded p-2">
                  <p className="font-bold text-purple-300">Cultural Fit</p>
                  <p>Arabic-first, gender-segregated</p>
                </div>
              </div>
            </div>

            {/* Q3: Multi-City Start */}
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-800/20 border-2 border-purple-500/40 rounded-2xl p-5">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-500 text-white font-black text-lg mb-2">Q3</div>
                <h3 className="text-lg font-bold text-purple-300">Jeddah Launch</h3>
                <p className="text-xs text-slate-400 mt-1">Months 7-8</p>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="bg-purple-500/10 border border-purple-500/30 rounded p-2">
                  <p className="font-bold text-purple-300">Second City</p>
                  <p>Replicate Riyadh playbook</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded p-2">
                  <p className="font-bold text-blue-300">Merchant Network</p>
                  <p>50+ merchants per city</p>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded p-2">
                  <p className="font-bold text-cyan-300">Scale Proof</p>
                  <p>Multi-city ops validated</p>
                </div>
              </div>
            </div>

            {/* Q4: Full Expansion */}
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-800/20 border-2 border-blue-500/40 rounded-2xl p-5">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-black text-lg mb-2">Q4</div>
                <h3 className="text-lg font-bold text-blue-300">Full KSA</h3>
                <p className="text-xs text-slate-400 mt-1">Months 9-10</p>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded p-2">
                  <p className="font-bold text-blue-300">Dammam + Khobar</p>
                  <p>Eastern Province expansion</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded p-2">
                  <p className="font-bold text-emerald-300">Target Hit</p>
                  <p>150+ merchants, 50K MAU</p>
                </div>
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded p-2">
                  <p className="font-bold text-[#c9a227]">Phase 3 Ready</p>
                  <p>Economics proven at scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KSA Cultural Adaptations */}
        <div className="bg-gradient-to-br from-red-900/30 to-orange-800/20 border-2 border-red-500/40 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles size={32} className="text-red-400" />
            <h2 className="text-3xl font-black text-red-300">🕌 KSA-Specific Cultural Adaptations</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-red-300 mb-3">Language & UX</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span><strong className="text-white">Arabic-first:</strong> RTL layout, Saudi dialect, formal tone</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span><strong className="text-white">Prayer times:</strong> Auto-pause notifications during Salah</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span><strong className="text-white">Ramadan mode:</strong> Iftar timing, special campaigns</span>
                  </div>
                </div>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-orange-300 mb-3">Merchant Categories</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span><strong className="text-white">Gender-segregated:</strong> Women-only salons, spas, gyms</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span><strong className="text-white">Halal-certified:</strong> All F&B must have clear halal status</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span><strong className="text-white">Family sections:</strong> Family-friendly merchant tags</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-purple-300 mb-3">Payment & Regulatory</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span><strong className="text-white">SAMA compliance:</strong> Full regulatory adherence</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span><strong className="text-white">Local data residency:</strong> Saudi servers required</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span><strong className="text-white">mada integration:</strong> Local debit card network</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-blue-300 mb-3">Marketing Channels</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span><strong className="text-white">WhatsApp-first:</strong> Preferred communication channel</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span><strong className="text-white">Local influencers:</strong> Saudi content creators</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5" />
                    <span><strong className="text-white">University focus:</strong> KSU, KAU, KFUPM ambassadors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2 Key Metrics */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-2xl p-8">
          <h2 className="text-3xl font-black text-white mb-6 text-center">📊 Phase 2 Key Metrics (Per Country)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Qatar Targets */}
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-4 text-center">🇶🇦 Qatar Targets</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-center">
                  <Users size={20} className="text-cyan-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-cyan-300 uppercase mb-1">MAU</p>
                  <p className="text-2xl font-black text-cyan-400">50K</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
                  <Building2 size={20} className="text-blue-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-blue-300 uppercase mb-1">Merchants</p>
                  <p className="text-2xl font-black text-blue-400">150</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
                  <TrendingUp size={20} className="text-purple-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-purple-300 uppercase mb-1">D30 Retention</p>
                  <p className="text-2xl font-black text-purple-400">≥30%</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
                  <DollarSign size={20} className="text-emerald-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-emerald-300 uppercase mb-1">GMV</p>
                  <p className="text-2xl font-black text-emerald-400">AED 15M</p>
                </div>
              </div>
            </div>

            {/* KSA Targets */}
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-4 text-center">🇸🇦 Saudi Arabia Targets</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 text-center">
                  <Users size={20} className="text-orange-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-orange-300 uppercase mb-1">MAU</p>
                  <p className="text-2xl font-black text-orange-400">50K</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
                  <Building2 size={20} className="text-red-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-red-300 uppercase mb-1">Merchants</p>
                  <p className="text-2xl font-black text-red-400">150</p>
                </div>
                <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4 text-center">
                  <TrendingUp size={20} className="text-pink-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-pink-300 uppercase mb-1">D30 Retention</p>
                  <p className="text-2xl font-black text-pink-400">≥30%</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
                  <DollarSign size={20} className="text-purple-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-purple-300 uppercase mb-1">GMV</p>
                  <p className="text-2xl font-black text-purple-400">AED 15M</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2 Exit Criteria */}
        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-800/20 border-2 border-cyan-500/40 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-cyan-300">🎯 Phase 2 → Phase 3 Exit Criteria</h2>
          <p className="text-slate-300 mb-6">Must hit ALL metrics below (per country) to advance to Phase 3:</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">User Health</h3>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                <p className="text-xs font-semibold text-cyan-300 uppercase mb-1">MAU (per country)</p>
                <p className="text-3xl font-black text-cyan-400">≥50K</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <p className="text-xs font-semibold text-blue-300 uppercase mb-1">D30 Retention</p>
                <p className="text-3xl font-black text-blue-400">≥30%</p>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <p className="text-xs font-semibold text-purple-300 uppercase mb-1">Monthly Churn</p>
                <p className="text-3xl font-black text-purple-400">≤10%</p>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">Business Metrics</h3>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <p className="text-xs font-semibold text-emerald-300 uppercase mb-1">Merchants</p>
                <p className="text-3xl font-black text-emerald-400">≥150</p>
              </div>
              <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-4">
                <p className="text-xs font-semibold text-[#c9a227] uppercase mb-1">GMV</p>
                <p className="text-3xl font-black text-[#d4ab2c]">AED 15M</p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="text-xs font-semibold text-orange-300 uppercase mb-1">Cross-Border Tx</p>
                <p className="text-3xl font-black text-orange-400">≥10%</p>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">Unit Economics</h3>
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
                <p className="text-xs font-semibold text-pink-300 uppercase mb-1">CAC</p>
                <p className="text-3xl font-black text-pink-400">≤AED 40</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-xs font-semibold text-red-300 uppercase mb-1">LTV:CAC</p>
                <p className="text-3xl font-black text-red-400">≥12x</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <p className="text-xs font-semibold text-blue-300 uppercase mb-1">EBITDA Margin</p>
                <p className="text-3xl font-black text-blue-400">≥25%</p>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-center">
            <p className="text-sm text-cyan-300">
              <span className="font-bold">Early Advancement Rule:</span> If all KPIs hit 80% of target for 3 consecutive months, advance to Phase 3 immediately
            </p>
          </div>
        </div>

        {/* Next Phase */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-2 border-slate-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Next: Phase 3 GTM - Full GCC Completion
          </h3>
          <p className="text-slate-300 mb-6">
            Kuwait + Bahrain + Oman • Parallel launch • Exit-ready infrastructure • ~10 months
          </p>
          <a
            href="/phase-3-gtm"
            className="inline-block bg-[#c9a227] hover:bg-[#d4ab2c] text-slate-900 font-bold px-8 py-3 rounded-lg transition-colors"
          >
            View Phase 3 GTM Strategy →
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-between pt-8 border-t border-slate-700">
          <a href="/h3-gtm" className="text-slate-400 hover:text-white transition-colors">
            ← Back to H3 GTM
          </a>
          <a href="/master-roadmap" className="text-slate-400 hover:text-white transition-colors">
            Master Roadmap
          </a>
          <a href="/phase-3-gtm" className="text-slate-400 hover:text-white transition-colors">
            Phase 3 GTM →
          </a>
        </div>

      </div>
    <GlobalFooter />
    </div>
  );
}
