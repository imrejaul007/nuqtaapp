'use client';

export default function H2StrategyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block px-4 py-2 bg-purple-500 rounded-full mb-6">
            <p className="text-xs font-black uppercase tracking-wider">H2 Scale & Defensibility</p>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-7xl font-black mb-6">
            Nuqta H2 2026 Strategy
          </h1>
          <p className="text-2xl text-purple-200 max-w-3xl mb-4">
            "H1 proves the loop. H2 scales it responsibly with better data, stronger partnerships, and new high-LTV categories."
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-purple-300">Months 7-12 Playbook</span>
            </div>
            <div className="text-purple-400">•</div>
            <div className="text-purple-300">January 29, 2026</div>
            <div className="text-purple-400">•</div>
            <a href="/master-roadmap" className="text-[#c9a227] hover:text-white transition-colors font-semibold underline">
              ← Master Roadmap
            </a>
            <div className="text-purple-400">•</div>
            <a href="/execution-plan" className="text-purple-300 hover:text-white transition-colors font-semibold underline">
              ← H1 Plan
            </a>
            <div className="text-purple-400">•</div>
            <a href="/h3-infrastructure" className="text-purple-300 hover:text-white transition-colors font-semibold underline">
              H3 Infrastructure →
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Quick Links */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <div className="flex items-center gap-6 overflow-x-auto text-sm">
            <a href="#objective" className="whitespace-nowrap text-slate-600 hover:text-purple-600 font-semibold transition-colors">H2 Objective</a>
            <a href="#categories" className="whitespace-nowrap text-slate-600 hover:text-purple-600 font-semibold transition-colors">New Categories</a>
            <a href="#platform" className="whitespace-nowrap text-slate-600 hover:text-purple-600 font-semibold transition-colors">Platform Upgrades</a>
            <a href="#distribution" className="whitespace-nowrap text-slate-600 hover:text-purple-600 font-semibold transition-colors">Distribution</a>
            <a href="#geography" className="whitespace-nowrap text-slate-600 hover:text-purple-600 font-semibold transition-colors">Geographic Expansion</a>
            <a href="#team" className="whitespace-nowrap text-slate-600 hover:text-purple-600 font-semibold transition-colors">Team Evolution</a>
            <a href="#financials" className="whitespace-nowrap text-slate-600 hover:text-purple-600 font-semibold transition-colors">Financials</a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">

        {/* H2 Objective */}
        <section id="objective" className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-8">🎯 H2 Objective</h2>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-3xl p-8 mb-8">
            <p className="text-2xl font-bold text-purple-900 mb-6">
              H1 proved <span className="text-purple-600">PMF + repeat behavior</span>.
              <br />
              H2 is about <span className="text-indigo-600">scale + defensibility + partnerships</span>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-2xl p-6 border-2 border-slate-200">
                <p className="text-lg font-black text-slate-500 mb-2">FROM</p>
                <p className="text-2xl font-black text-slate-900">"Does this work?"</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-6 border-2 border-purple-400">
                <p className="text-lg font-black text-purple-600 mb-2">TO</p>
                <p className="text-2xl font-black text-purple-900">"How fast and how wide can this grow?"</p>
              </div>
            </div>
          </div>

          {/* What H1 Proved */}
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-black text-slate-900 mb-6">What H1 Proved (The Foundation)</h3>
            <p className="text-slate-600 mb-6">By Month 6 (June 2026), Nuqta will have validated:</p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
                <p className="text-sm font-black text-emerald-700 mb-3">✅ PRODUCT-MARKET FIT</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• 50,000 active users</li>
                  <li>• AED 25M GMV</li>
                  <li>• 30% D30 retention</li>
                  <li>• 1,500+ merchants live</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <p className="text-sm font-black text-blue-700 mb-3">✅ UNIT ECONOMICS WORK</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• LTV:CAC = 16.8x</li>
                  <li>• Blended take rate: 8%</li>
                  <li>• Merchant repeat: 15%+</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                <p className="text-sm font-black text-purple-700 mb-3">✅ THE LOOP IS REAL</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• Users earn → spend → share</li>
                  <li>• Merchants see ROI</li>
                  <li>• Network effects activate</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Category Expansion */}
        <section id="categories" className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-8">1️⃣ H2 Category Expansion (Selective, Not Chaotic)</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6">
              <p className="text-xl font-black text-red-700 mb-4">❌ What H2 is NOT</p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• Adding 10 new categories just because</li>
                <li>• Spray and pray merchant onboarding</li>
                <li>• Chasing every opportunity</li>
              </ul>
            </div>

            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-6">
              <p className="text-xl font-black text-emerald-700 mb-4">✅ What H2 IS</p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• Adding 3 high-LTV, defensible categories</li>
                <li>• Clear repeat behavior (3+ visits/year)</li>
                <li>• Trust moat (hard for competitors)</li>
                <li>• Network effects potential</li>
              </ul>
            </div>
          </div>

          {/* Category 1: Healthcare */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-3xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🏥</span>
              <h3 className="text-3xl font-black text-slate-900">Category 1: Clinics & Healthcare</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm font-black text-blue-700 mb-3">INCLUDES</p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Dental clinics (NMC, Dr. Joy, Drs. Nicolas & Asp)</li>
                  <li>• Dermatology (Kaya, DermaOne, CosmeSurge)</li>
                  <li>• Physiotherapy (PhysioFirst, Prime Sports)</li>
                  <li>• Diagnostics (Aster Labs, NMC Labs)</li>
                </ul>
              </div>

              <div>
                <p className="text-sm font-black text-purple-700 mb-3">WHY H2 (NOT H1)</p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• <span className="font-semibold">Trust-heavy:</span> Users don't experiment with health on day 1</li>
                  <li>• <span className="font-semibold">Higher ticket:</span> AED 500-2,000 average basket</li>
                  <li>• <span className="font-semibold">Longer decision:</span> Users research before booking</li>
                  <li>• <span className="font-semibold">Needs credibility:</span> H1 social proof needed first</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 mb-4">
              <p className="text-sm font-black text-slate-900 mb-3">COMMERCIAL MODEL</p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• <span className="font-semibold">Transaction-only:</span> 3-5% commission (no social bonus)</li>
                <li>• <span className="font-semibold">Brand Coins only:</span> No universal Nuqta Coins (avoids "cheapening" healthcare)</li>
                <li>• <span className="font-semibold">No cashback on consultations:</span> Only on packages</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-6 border-2 border-blue-400">
              <p className="text-sm font-black text-blue-900 mb-3">💡 EXAMPLE FLOW</p>
              <p className="text-sm text-slate-800">
                User books <span className="font-bold">AED 1,500</span> dental whitening at NMC Dental
                → Pays AED 1,500 (no discount)
                → Gets <span className="font-bold text-blue-600">75 AED NMC Brand Coins</span> (5%)
                → Redeemable on next visit
                → Nuqta gets <span className="font-bold text-emerald-600">AED 75 revenue</span> (5% commission)
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-black text-blue-600">25</p>
                <p className="text-xs text-slate-600 font-semibold">Clinic Chains</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-purple-600">5,000</p>
                <p className="text-xs text-slate-600 font-semibold">Users</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-emerald-600">AED 2M</p>
                <p className="text-xs text-slate-600 font-semibold">H2 GMV Target</p>
              </div>
            </div>
          </div>

          {/* Category 2: Home Services */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-300 rounded-3xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🏠</span>
              <h3 className="text-3xl font-black text-slate-900">Category 2: Home Services</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm font-black text-orange-700 mb-3">INCLUDES</p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Cleaning (Justmop, ServiceMarket, The Maids)</li>
                  <li>• AC servicing (Selserve, Hitches & Glitches)</li>
                  <li>• Plumbing (Mr. Electric, Hitches & Glitches)</li>
                  <li>• Electrical (Mr. Electric, Selserve)</li>
                  <li>• Pest control (Rentokil, Aladdin, PestoCop)</li>
                </ul>
              </div>

              <div>
                <p className="text-sm font-black text-purple-700 mb-3">WHY H2 (NOT H1)</p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• <span className="font-semibold">Booking reliability:</span> Users won't tolerate no-shows</li>
                  <li>• <span className="font-semibold">Ops complexity:</span> Need merchant integrations</li>
                  <li>• <span className="font-semibold">Strong tooling:</span> Real-time availability, tracking</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 mb-4">
              <p className="text-sm font-black text-slate-900 mb-3">COMMERCIAL MODEL</p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• <span className="font-semibold">Growth Model (10-15%):</span> Standard Engine A (5% Nuqta Coins + 5% social bonus + 5% revenue)</li>
                <li>• <span className="font-semibold">Cashback + Brand Coin mix:</span> Universal coins for flexibility + Brand Coins for loyalty</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-6 border-2 border-orange-400">
              <p className="text-sm font-black text-orange-900 mb-3">💡 EXAMPLE FLOW</p>
              <p className="text-sm text-slate-800">
                User books <span className="font-bold">AED 400</span> AC servicing via Justmop
                → Gets <span className="font-bold text-blue-600">20 AED Nuqta Coins</span> (5%)
                → Posts Instagram Story → Gets <span className="font-bold text-purple-600">+20 AED social bonus</span>
                → Gets <span className="font-bold text-orange-600">20 AED Justmop Brand Coins</span>
                → Nuqta gets <span className="font-bold text-emerald-600">AED 20-40 revenue</span>
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-black text-orange-600">15</p>
                <p className="text-xs text-slate-600 font-semibold">Service Providers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-purple-600">3,000</p>
                <p className="text-xs text-slate-600 font-semibold">Users</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-emerald-600">AED 1.2M</p>
                <p className="text-xs text-slate-600 font-semibold">H2 GMV Target</p>
              </div>
            </div>
          </div>

        </section>

        {/* Platform Upgrades */}
        <section id="platform" className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-8">2️⃣ H2 Platform Upgrades (Infrastructure, Not Just Features)</h2>
          <p className="text-lg text-slate-600 mb-8">
            H2 is not just categories — it's <span className="font-bold text-purple-600">infrastructure that creates switching costs</span>.
          </p>

          {/* Payment Intelligence v2 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🧠</span>
              <h3 className="text-2xl font-black text-slate-900">Upgrade 1: Payment Intelligence v2</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-100 border-2 border-slate-300 rounded-xl p-6">
                <p className="text-sm font-black text-slate-600 mb-3">WHAT H1 HAD</p>
                <p className="text-sm text-slate-700">Basic card recommendation (use ADCB card at Carrefour for 3% cashback)</p>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 border-2 border-blue-400 rounded-xl p-6">
                <p className="text-sm font-black text-blue-700 mb-3">WHAT H2 ADDS</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• <span className="font-semibold">Context-aware suggestions:</span> "Use Emirates NBD card for extra 2% cashback + your 2% Nuqta Coins = 4% total"</li>
                  <li>• <span className="font-semibold">Personalized nudges:</span> "Switch to Tim Hortons (15% cheaper) and save AED 75"</li>
                  <li>• <span className="font-semibold">Wallet optimization:</span> "3 unused brand coins expiring soon"</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-100 border-2 border-purple-300 rounded-xl p-6">
              <p className="text-sm font-black text-purple-800 mb-2">WHY THIS MATTERS</p>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Strengthens <span className="font-semibold">neutral intelligence moat</span> (optimizing across all cards, not pushing one)</li>
                <li>• Users start to <span className="font-semibold">trust Nuqta more than their bank</span> for spending decisions</li>
                <li>• Creates <span className="font-semibold">daily habit</span> (check Nuqta before every purchase)</li>
              </ul>
            </div>
          </div>

          {/* Brand Coin Engine v2 */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🪙</span>
              <h3 className="text-2xl font-black text-slate-900">Upgrade 2: Advanced Brand Coin Engine</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-100 border-2 border-slate-300 rounded-xl p-6">
                <p className="text-sm font-black text-slate-600 mb-3">WHAT H1 HAD</p>
                <p className="text-sm text-slate-700">Basic Brand Coins (fixed % reward, 90-day expiry)</p>
              </div>

              <div className="bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-400 rounded-xl p-6">
                <p className="text-sm font-black text-amber-700 mb-3">WHAT H2 ADDS</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• <span className="font-semibold">Tiered expiry:</span> Spend AED 500 → coins valid 90 days, AED 2,000 → valid 180 days</li>
                  <li>• <span className="font-semibold">Combo bonuses:</span> "Visit 3 times this month → 2x Brand Coins"</li>
                  <li>• <span className="font-semibold">Dynamic rules:</span> Merchants set own promotional mechanics</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-100 border-2 border-orange-300 rounded-xl p-6">
              <p className="text-sm font-black text-orange-800 mb-2">WHY THIS MATTERS</p>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Merchants get <span className="font-semibold">granular control</span> over loyalty mechanics</li>
                <li>• Users get <span className="font-semibold">personalized incentives</span> (not one-size-fits-all)</li>
                <li>• Creates <span className="font-semibold">defensibility</span> through merchant lock-in (their entire loyalty program on Nuqta)</li>
              </ul>
            </div>
          </div>

          {/* Analytics Dashboard v2 */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📊</span>
              <h3 className="text-2xl font-black text-slate-900">Upgrade 3: Merchant Analytics Dashboard v2</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-100 border-2 border-slate-300 rounded-xl p-6">
                <p className="text-sm font-black text-slate-600 mb-3">WHAT H1 HAD</p>
                <p className="text-sm text-slate-700">Basic reporting (total sales, user count, average basket)</p>
              </div>

              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 border-2 border-emerald-400 rounded-xl p-6">
                <p className="text-sm font-black text-emerald-700 mb-3">WHAT H2 ADDS</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• <span className="font-semibold">Incremental attribution:</span> "Nuqta drove AED 15K in NEW revenue (not just existing customers)"</li>
                  <li>• <span className="font-semibold">Cohort retention:</span> "Users acquired via Nuqta have 2.3x higher retention"</li>
                  <li>• <span className="font-semibold">Brand Coin ROI:</span> "Every AED 1 in Brand Coins drove AED 4.2 in repeat sales"</li>
                </ul>
              </div>
            </div>

            <div className="bg-teal-100 border-2 border-teal-300 rounded-xl p-6">
              <p className="text-sm font-black text-teal-800 mb-2">WHY THIS MATTERS</p>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Merchants see <span className="font-semibold">clear ROI</span> (not just vanity metrics)</li>
                <li>• Nuqta becomes <span className="font-semibold">indispensable</span> (like Shopify analytics for offline)</li>
                <li>• Creates <span className="font-semibold">upsell opportunities</span> (premium analytics tier for large merchants)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Distribution Shift */}
        <section id="distribution" className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-8">3️⃣ Distribution Shift (Offline → Digital-First)</h2>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-black text-slate-600 mb-4">H1 DISTRIBUTION (Boots on Ground)</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• 70% offline activation (campus events, mall kiosks, merchant in-store)</li>
                  <li>• 30% digital (Instagram, TikTok, referral)</li>
                </ul>
              </div>

              <div>
                <p className="text-sm font-black text-purple-700 mb-4">H2 DISTRIBUTION (Digital-First)</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• 60% digital (performance marketing, influencer partnerships, SEO)</li>
                  <li>• 40% offline (selective high-ROI events only)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
              <p className="text-sm font-black text-blue-700 mb-3">📱 PERFORMANCE MARKETING</p>
              <p className="text-sm text-slate-700 mb-4">Meta + TikTok ads targeting UAE 18-34 with proven creative</p>
              <p className="text-xs text-slate-600">Target CAC: AED 15-20</p>
            </div>

            <div className="bg-pink-50 border-2 border-pink-300 rounded-xl p-6">
              <p className="text-sm font-black text-pink-700 mb-3">🎥 INFLUENCER PARTNERSHIPS</p>
              <p className="text-sm text-slate-700 mb-4">Micro-influencers (10K-100K followers) in F&B, lifestyle, fitness</p>
              <p className="text-xs text-slate-600">Target: 20 partnerships, 50K reach</p>
            </div>

            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-6">
              <p className="text-sm font-black text-emerald-700 mb-3">🔍 SEO & CONTENT</p>
              <p className="text-sm text-slate-700 mb-4">Blog content for "best rewards UAE", "save money Dubai", etc.</p>
              <p className="text-xs text-slate-600">Target: 10K organic visits/month</p>
            </div>
          </div>
        </section>

        {/* Geographic Expansion */}
        <section id="geography" className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-8">4️⃣ Geographic Expansion (Controlled City-by-City)</h2>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-2xl p-8 mb-8">
            <p className="text-lg font-bold text-orange-900 mb-6">
              H1 focused on <span className="text-orange-600">Dubai</span>. H2 expands to <span className="text-red-600">Abu Dhabi</span> and <span className="text-amber-600">Sharjah</span> (in that order).
            </p>

            <div className="space-y-6">
              {/* Dubai */}
              <div className="bg-white rounded-2xl p-6 border-2 border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏙️</span>
                    <h4 className="text-xl font-black text-slate-900">Dubai (Months 1-6)</h4>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black">COMPLETE</span>
                </div>
                <p className="text-sm text-slate-700">50,000 users, 1,500 merchants, AED 25M GMV</p>
              </div>

              {/* Abu Dhabi */}
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-6 border-2 border-orange-400">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🕌</span>
                    <h4 className="text-xl font-black text-slate-900">Abu Dhabi (Months 7-9)</h4>
                  </div>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-black">EXPANSION 1</span>
                </div>
                <ul className="text-sm text-slate-700 space-y-2 mb-4">
                  <li>• Launch with 50 pre-vetted merchants (ADNOC, Lulu, Carrefour already there)</li>
                  <li>• Target: 5,000 users by Month 9</li>
                  <li>• Focus areas: Marina Mall, Yas Mall, Saadiyat Beach</li>
                </ul>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-3 text-center">
                    <p className="text-2xl font-black text-orange-600">5K</p>
                    <p className="text-xs text-slate-600">Users (Month 9)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <p className="text-2xl font-black text-red-600">AED 1.5M</p>
                    <p className="text-xs text-slate-600">GMV (Month 9)</p>
                  </div>
                </div>
              </div>

              {/* Sharjah */}
              <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-400">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🌆</span>
                    <h4 className="text-xl font-black text-slate-900">Sharjah (Months 10-12)</h4>
                  </div>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-black">EXPANSION 2</span>
                </div>
                <ul className="text-sm text-slate-700 space-y-2 mb-4">
                  <li>• Launch with 40 merchants (Sahara Center, City Centre Sharjah)</li>
                  <li>• Target: 3,000 users by Month 12</li>
                  <li>• Focus areas: University City, Sahara Centre, Mega Mall</li>
                </ul>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-3 text-center">
                    <p className="text-2xl font-black text-amber-600">3K</p>
                    <p className="text-xs text-slate-600">Users (Month 12)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <p className="text-2xl font-black text-yellow-600">AED 900K</p>
                    <p className="text-xs text-slate-600">GMV (Month 12)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Evolution */}
        <section id="team" className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-8">5️⃣ Team Evolution (Lean But Strategic)</h2>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-300 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-100 border-2 border-slate-300 rounded-xl p-6">
                <p className="text-sm font-black text-slate-600 mb-3">H1 TEAM (Month 6)</p>
                <p className="text-3xl font-black text-slate-900 mb-2">1 Person</p>
                <p className="text-sm text-slate-700">Rejaul (Founder): Product, tech, partnerships, fundraising</p>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 border-2 border-blue-400 rounded-xl p-6">
                <p className="text-sm font-black text-blue-700 mb-3">H2 TEAM (Month 12)</p>
                <p className="text-3xl font-black text-blue-900 mb-2">7 People</p>
                <p className="text-sm text-slate-700">Strategic hires only (no bloat)</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white border-2 border-emerald-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-slate-900">Full-Stack Engineer (Month 7)</p>
                  <p className="text-xs text-slate-600">Build v2 platform upgrades, API integrations</p>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black">TECH</span>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-slate-900">Growth Marketer (Month 8)</p>
                  <p className="text-xs text-slate-600">Performance marketing, influencer partnerships, content</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-black">GROWTH</span>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-slate-900">Merchant Success Lead (Month 8)</p>
                  <p className="text-xs text-slate-600">Onboarding, training, retention for 1,500+ merchants</p>
                </div>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-black">OPS</span>
              </div>

              <div className="bg-white border-2 border-orange-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-slate-900">Product Designer (Month 9)</p>
                  <p className="text-xs text-slate-600">Merchant dashboard UX, user app v2, brand identity</p>
                </div>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-black">DESIGN</span>
              </div>

              <div className="bg-white border-2 border-red-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-slate-900">Partnerships Manager (Month 10)</p>
                  <p className="text-xs text-slate-600">Healthcare and home services partnerships</p>
                </div>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-black">BIZ DEV</span>
              </div>

              <div className="bg-white border-2 border-teal-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-slate-900">Data Analyst (Month 11)</p>
                  <p className="text-xs text-slate-600">Attribution modeling, cohort analysis, merchant ROI reporting</p>
                </div>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-black">DATA</span>
              </div>

              <div className="bg-white border-2 border-indigo-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-slate-900">Community Manager (Month 11)</p>
                  <p className="text-xs text-slate-600">Instagram, TikTok, user support, influencer outreach</p>
                </div>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-black">COMMUNITY</span>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
            <p className="text-sm font-black text-amber-800 mb-2">💡 WHY THIS WORKS</p>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• <span className="font-semibold">Hire for leverage</span> (each hire unlocks 10x capability)</li>
              <li>• <span className="font-semibold">No premature hiring</span> (wait until pain is acute)</li>
              <li>• <span className="font-semibold">Keeps burn low</span> (7 people at AED 12K avg = AED 84K/month ops cost)</li>
            </ul>
          </div>
        </section>

        {/* Financials */}
        <section id="financials" className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-8">6️⃣ H2 Financial Projections</h2>

          {/* Success Criteria Table */}
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 mb-8 overflow-x-auto">
            <h3 className="text-2xl font-black text-slate-900 mb-6">Success Criteria</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-300">
                  <th className="text-left py-3 px-4 font-black text-slate-700">Metric</th>
                  <th className="text-center py-3 px-4 font-black text-blue-700">H1 Exit (Month 6)</th>
                  <th className="text-center py-3 px-4 font-black text-purple-700">H2 Target (Month 12)</th>
                  <th className="text-center py-3 px-4 font-black text-emerald-700">Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-3 px-4 font-semibold">Active Users</td>
                  <td className="py-3 px-4 text-center">10,000</td>
                  <td className="py-3 px-4 text-center font-bold text-purple-600">30,000</td>
                  <td className="py-3 px-4 text-center font-bold text-emerald-600">3x</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">GMV (Monthly)</td>
                  <td className="py-3 px-4 text-center">AED 333K</td>
                  <td className="py-3 px-4 text-center font-bold text-purple-600">AED 1-1.5M</td>
                  <td className="py-3 px-4 text-center font-bold text-emerald-600">3-4.5x</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">D30 Retention</td>
                  <td className="py-3 px-4 text-center">30%</td>
                  <td className="py-3 px-4 text-center font-bold text-purple-600">35%</td>
                  <td className="py-3 px-4 text-center font-bold text-emerald-600">+5%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Merchant Churn</td>
                  <td className="py-3 px-4 text-center">15%</td>
                  <td className="py-3 px-4 text-center font-bold text-purple-600">&lt;10%</td>
                  <td className="py-3 px-4 text-center font-bold text-emerald-600">-5%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">LTV:CAC</td>
                  <td className="py-3 px-4 text-center">10:1</td>
                  <td className="py-3 px-4 text-center font-bold text-purple-600">8:1</td>
                  <td className="py-3 px-4 text-center text-amber-600">Acceptable drop</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Blended Take Rate</td>
                  <td className="py-3 px-4 text-center">5-10%</td>
                  <td className="py-3 px-4 text-center font-bold text-purple-600">7-12%</td>
                  <td className="py-3 px-4 text-center font-bold text-emerald-600">+2%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Total Merchants</td>
                  <td className="py-3 px-4 text-center">250</td>
                  <td className="py-3 px-4 text-center font-bold text-purple-600">400-450</td>
                  <td className="py-3 px-4 text-center font-bold text-emerald-600">1.6-1.8x</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Revenue Projections */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-black text-slate-900 mb-6">Revenue Model (Month 12)</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                <p className="text-sm font-semibold text-slate-600 mb-2">Monthly GMV</p>
                <p className="text-4xl font-black text-blue-600 mb-1">AED 1.2M</p>
                <p className="text-xs text-slate-500">Conservative estimate</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
                <p className="text-sm font-semibold text-slate-600 mb-2">Blended Take Rate</p>
                <p className="text-4xl font-black text-purple-600 mb-1">9%</p>
                <p className="text-xs text-slate-500">Mixed Engine A/B</p>
              </div>

              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl p-6 border-2 border-emerald-400">
                <p className="text-sm font-semibold text-emerald-700 mb-2">Monthly Revenue</p>
                <p className="text-4xl font-black text-emerald-700 mb-1">AED 108K</p>
                <p className="text-xs text-emerald-600">Run-rate: AED 1.3M/year</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-slate-200">
              <p className="text-sm font-black text-slate-900 mb-4">Annual Run-Rate Breakdown (Month 12)</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-700">GMV (Annual Run-Rate)</span>
                  <span className="font-bold text-slate-900">AED 14.4M</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-700">Revenue @ 9% Take Rate</span>
                  <span className="font-bold text-emerald-600">AED 1.3M</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-700">Operating Costs (7 people + ops)</span>
                  <span className="font-bold text-red-600">(AED 1.2M)</span>
                </div>
                <div className="flex justify-between py-3 bg-emerald-50 rounded-lg px-3">
                  <span className="font-black text-slate-900">Net Position</span>
                  <span className="font-black text-emerald-700">Break-even to profitable</span>
                </div>
              </div>
            </div>
          </div>

          {/* Series A Readiness */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-400 rounded-2xl p-8">
            <h3 className="text-2xl font-black text-purple-900 mb-6">Series A Readiness (Q1 2027)</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <p className="text-sm font-black text-purple-700 mb-3">TARGET METRICS</p>
                <div className="bg-white rounded-xl p-4 border-2 border-purple-200">
                  <p className="text-xs text-slate-600 mb-1">Active Users</p>
                  <p className="text-2xl font-black text-purple-600">30,000</p>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-purple-200">
                  <p className="text-xs text-slate-600 mb-1">Annual GMV Run-Rate</p>
                  <p className="text-2xl font-black text-purple-600">AED 14M</p>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-purple-200">
                  <p className="text-xs text-slate-600 mb-1">D30 Retention</p>
                  <p className="text-2xl font-black text-purple-600">35%</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-black text-indigo-700 mb-3">RAISE DETAILS</p>
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl p-4 border-2 border-indigo-300">
                  <p className="text-xs text-indigo-700 mb-1">Target Raise</p>
                  <p className="text-2xl font-black text-indigo-900">$2-3M</p>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-indigo-200">
                  <p className="text-xs text-slate-600 mb-1">Valuation (Target)</p>
                  <p className="text-2xl font-black text-indigo-600">$15-20M</p>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-indigo-200">
                  <p className="text-xs text-slate-600 mb-1">Use of Funds</p>
                  <p className="text-sm font-semibold text-slate-800">GCC expansion, team to 20</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-purple-300">
              <p className="text-sm font-black text-purple-800 mb-3">💡 WHY INVESTORS WILL LOVE THIS</p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• <span className="font-semibold">Proven PMF</span> with strong retention and LTV:CAC</li>
                <li>• <span className="font-semibold">Platform defensibility</span> through payment intelligence, Brand Coin engine, analytics</li>
                <li>• <span className="font-semibold">Multi-category traction</span> (F&B + healthcare + home services)</li>
                <li>• <span className="font-semibold">Geographic expansion blueprint</span> (Dubai → Abu Dhabi → Sharjah working model)</li>
                <li>• <span className="font-semibold">Path to profitability</span> (already near break-even at Month 12)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What NOT to Do */}
        <section className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-8">❌ What NOT to Do in H2 (Discipline)</h2>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-400 rounded-2xl p-8">
            <div className="space-y-4">
              <div className="bg-white border-2 border-red-300 rounded-xl p-4 flex items-start gap-3">
                <span className="text-2xl">🚫</span>
                <div>
                  <p className="text-sm font-black text-slate-900 mb-1">Don't become a media company</p>
                  <p className="text-xs text-slate-600">No food blogs, no influencer content studio. Stay focused on rewards infrastructure.</p>
                </div>
              </div>

              <div className="bg-white border-2 border-red-300 rounded-xl p-4 flex items-start gap-3">
                <span className="text-2xl">🚫</span>
                <div>
                  <p className="text-sm font-black text-slate-900 mb-1">Don't expand globally</p>
                  <p className="text-xs text-slate-600">UAE only until Series A. No Saudi, no Egypt, no "let's try London". Get UAE right first.</p>
                </div>
              </div>

              <div className="bg-white border-2 border-red-300 rounded-xl p-4 flex items-start gap-3">
                <span className="text-2xl">🚫</span>
                <div>
                  <p className="text-sm font-black text-slate-900 mb-1">Don't launch heavy BNPL</p>
                  <p className="text-xs text-slate-600">BNPL requires regulatory licenses, credit risk management, collections team. Stay asset-light.</p>
                </div>
              </div>

              <div className="bg-white border-2 border-red-300 rounded-xl p-4 flex items-start gap-3">
                <span className="text-2xl">🚫</span>
                <div>
                  <p className="text-sm font-black text-slate-900 mb-1">Don't add 10 new categories</p>
                  <p className="text-xs text-slate-600">Only 2 new categories (healthcare, home services). Quality over quantity.</p>
                </div>
              </div>

              <div className="bg-white border-2 border-red-300 rounded-xl p-4 flex items-start gap-3">
                <span className="text-2xl">🚫</span>
                <div>
                  <p className="text-sm font-black text-slate-900 mb-1">Don't hire aggressively</p>
                  <p className="text-xs text-slate-600">Max 7 people by Month 12. Every hire must unlock 10x leverage.</p>
                </div>
              </div>

              <div className="bg-white border-2 border-red-300 rounded-xl p-4 flex items-start gap-3">
                <span className="text-2xl">🚫</span>
                <div>
                  <p className="text-sm font-black text-slate-900 mb-1">Don't chase vanity partnerships</p>
                  <p className="text-xs text-slate-600">No "Official Partner of Dubai Shopping Festival" unless it drives real GMV. Focus on ROI.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline & KPI Gates */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Timeline */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-3xl p-8">
              <h2 className="text-3xl font-black text-slate-900 mb-6">📅 H2 Timeline</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border-2 border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-blue-700">Standard Timeline</span>
                    <span className="text-sm text-slate-500">Months 7-12 (6 months)</span>
                  </div>
                  <p className="text-sm text-slate-600">Original plan: 6 months to scale categories and geography</p>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-emerald-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-emerald-700">Accelerated Timeline</span>
                    <span className="text-sm font-black text-emerald-600">~2.5 months</span>
                  </div>
                  <p className="text-sm text-slate-600">60% faster: Complete in Months 6-8.5 with parallel execution</p>
                </div>
                <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl p-4">
                  <p className="text-sm font-bold mb-1">⚡ Acceleration Strategy</p>
                  <p className="text-xs">Simultaneous category launches, faster partnership cycles, aggressive geographic expansion</p>
                </div>
              </div>
            </div>

            {/* KPI Gate to H3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-3xl p-8">
              <h2 className="text-3xl font-black text-slate-900 mb-6">🎯 H2 → H3 KPI Gate</h2>
              <p className="text-sm text-slate-600 mb-6">Must sustain ALL metrics for 3 consecutive months:</p>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-4 border-l-4 border-purple-500">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-700">Monthly Active Users</span>
                    <span className="text-lg font-black text-purple-600">75,000+</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border-l-4 border-blue-500">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-700">D30 Retention</span>
                    <span className="text-lg font-black text-blue-600">≥30%</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border-l-4 border-emerald-500">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-700">Campaign Usage</span>
                    <span className="text-lg font-black text-emerald-600">≥40%</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">% of merchants actively using campaign tools</p>
                </div>
                <div className="bg-white rounded-xl p-4 border-l-4 border-amber-500">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-700">Cross-Category Usage</span>
                    <span className="text-lg font-black text-amber-600">≥30%</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">% of users active in 2+ categories</p>
                </div>
              </div>
              <div className="mt-6 bg-purple-100 rounded-xl p-4">
                <p className="text-xs font-bold text-purple-900 mb-1">Early Acceleration Rule:</p>
                <p className="text-xs text-purple-800">If KPIs exceed by 20%+ for 3 months → advance to H3 early</p>
              </div>
            </div>
          </div>

          {/* Next Phase Preview */}
          <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-3xl p-8 text-center">
            <p className="text-sm font-bold text-emerald-300 mb-2">AFTER H2 GATE ✅</p>
            <h3 className="text-3xl font-black mb-4">Next: H3 Become Infrastructure</h3>
            <p className="text-slate-300 mb-6">WaaS partnerships, government integrations, data monetization, enterprise SaaS revenue</p>
            <a href="/h3-infrastructure" className="inline-block px-8 py-3 bg-emerald-500 hover:bg-emerald-600 transition-colors rounded-xl font-bold">
              View H3 Strategy →
            </a>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-black mb-4">H2 2026: Scale Responsibly, Build Defensibility</h3>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            H1 proves it works. H2 scales it smartly. By Month 12, Nuqta will be the category-defining rewards platform in UAE.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/execution-plan" className="px-8 py-4 bg-white text-purple-900 rounded-xl font-black hover:bg-purple-100 transition-colors">
              View H1 Execution Plan
            </a>
            <a href="/deck-kang" className="px-8 py-4 bg-purple-700 text-white rounded-xl font-black hover:bg-purple-600 transition-colors border-2 border-purple-500">
              View Investor Deck
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
