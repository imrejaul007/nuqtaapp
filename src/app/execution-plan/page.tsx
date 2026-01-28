'use client';

export default function ExecutionPlanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2a42] text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block px-4 py-2 bg-[#c9a227] rounded-full mb-6">
            <p className="text-xs font-black uppercase tracking-wider">Master Strategic Blueprint</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            H1 2026 Execution Plan
          </h1>
          <p className="text-2xl text-slate-300 max-w-3xl">
            Merchant Ecosystem & Go-to-Market Strategy
          </p>
          <div className="mt-8 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-slate-400">Active Execution</span>
            </div>
            <div className="text-slate-400">•</div>
            <div className="text-slate-400">Updated: January 29, 2026</div>
          </div>
        </div>
      </div>

      {/* Navigation Quick Links */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <div className="flex items-center gap-6 overflow-x-auto text-sm">
            <a href="#vision" className="whitespace-nowrap text-slate-600 hover:text-[#c9a227] font-semibold transition-colors">Vision</a>
            <a href="#merchants" className="whitespace-nowrap text-slate-600 hover:text-[#c9a227] font-semibold transition-colors">Merchants</a>
            <a href="#models" className="whitespace-nowrap text-slate-600 hover:text-[#c9a227] font-semibold transition-colors">Commercial Models</a>
            <a href="#playbook" className="whitespace-nowrap text-slate-600 hover:text-[#c9a227] font-semibold transition-colors">Sales Playbook</a>
            <a href="#roadmap" className="whitespace-nowrap text-slate-600 hover:text-[#c9a227] font-semibold transition-colors">Roadmap</a>
            <a href="#metrics" className="whitespace-nowrap text-slate-600 hover:text-[#c9a227] font-semibold transition-colors">Metrics</a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">

        {/* Vision */}
        <section id="vision" className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-6">1. Executive Summary: The Nuqta Vision</h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-3xl p-8 mb-8">
            <p className="text-xl text-slate-700 leading-relaxed">
              Nuqta is the UAE's first <span className="font-bold text-blue-600">Social-Commerce & Universal Loyalty Ecosystem</span>.
              For H1 2026, we are moving away from traditional "discounting" to a <span className="font-bold text-purple-600">Performance-Marketing</span> model.
              We solve the "Loyalty Fatigue" problem by providing users with a single liquid wallet while giving merchants a risk-free way to acquire and retain customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <span className="text-2xl">❌</span> Old Model (2015-2025)
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Merchants burn cash on upfront discounts (20-30% off)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Zero attribution on customer acquisition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Rewards stuck in "island programs"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Users overwhelmed with 15+ loyalty apps</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
                <span className="text-2xl">✅</span> Nuqta Model (2026+)
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Performance-based: Pay only when sale is made</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Full attribution: Track every customer journey</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Universal liquidity: One wallet, works everywhere</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Social amplification: Customers become micro-influencers</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Merchant Universe */}
        <section id="merchants" className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-6">2. The Merchant Universe (Target List)</h2>
          <p className="text-lg text-slate-600 mb-8">
            We have aggregated the "Top Tier" chains for volume and "Local Gems" for density.
            <span className="font-bold text-[#c9a227]"> Target: 50+ merchants per sub-category.</span>
          </p>

          <div className="space-y-6">
            {/* F&B */}
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🍔</span>
                <h3 className="text-2xl font-bold text-slate-900">F&B (Food & Beverage)</h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">Sub-Categories: Cafés, QSR, Casual Dining, Desserts, Street Food, Juice Bars</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-orange-600 uppercase mb-2">Top Tier Chains (Volume)</p>
                  <p className="text-sm text-slate-700">Starbucks, McDonald's, KFC, Tim Hortons, Nando's, Baskin Robbins, Krispy Kreme, Joe & The Juice</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-orange-600 uppercase mb-2">Local Gems / Independents (Density)</p>
                  <p className="text-sm text-slate-700">Nightjar Coffee, Pickl, High Joint, Stomping Grounds, Al Fanar Restaurant, Mama'esh, Ravi Restaurant, Salt</p>
                </div>
              </div>
            </div>

            {/* Salons */}
            <div className="bg-white border-2 border-pink-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💅</span>
                <h3 className="text-2xl font-bold text-slate-900">Salons & Grooming</h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">Sub-Categories: Men's Barbershops, Women's Salons, Beauty Lounges, Spa & Wellness</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-pink-600 uppercase mb-2">Top Tier Chains (Volume)</p>
                  <p className="text-sm text-slate-700">1847 Grooming, Tips & Toes, Sisters Beauty Lounge, NStyle, Chaps & Co</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-pink-600 uppercase mb-2">Local Gems / Independents (Density)</p>
                  <p className="text-sm text-slate-700">Chalk Barbershop, Fade & Shave, Willow Lane Salon, Peaky Blinders, CG Barbershop</p>
                </div>
              </div>
            </div>

            {/* Grocery */}
            <div className="bg-white border-2 border-green-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🛒</span>
                <h3 className="text-2xl font-bold text-slate-900">Grocery & Essentials</h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">Sub-Categories: Hypermarkets, Supermarkets, Convenience Stores</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-green-600 uppercase mb-2">Top Tier Chains (Volume)</p>
                  <p className="text-sm text-slate-700">Carrefour, Lulu Hypermarket, Spinneys, Waitrose, Choithrams, West Zone, Zoom, Circle K</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-600 uppercase mb-2">Local Gems / Independents (Density)</p>
                  <p className="text-sm text-slate-700">Grandiose Supermarket, Union Coop, Al Adil Trading, Shaklan Market, Blue Mart</p>
                </div>
              </div>
            </div>

            {/* Fitness */}
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🏋️</span>
                <h3 className="text-2xl font-bold text-slate-900">Fitness & Wellness</h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">Sub-Categories: Gyms, Yoga Studios, Pilates, CrossFit, Personal Training</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase mb-2">Top Tier Chains (Volume)</p>
                  <p className="text-sm text-slate-700">Fitness First, GymNation, Gold's Gym, F45 Training, Barry's Bootcamp</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase mb-2">Local Gems / Independents (Density)</p>
                  <p className="text-sm text-slate-700">Warehouse Gym, Train SF, Crank Fitness, Platform Studios, Seva Experience (Yoga)</p>
                </div>
              </div>
            </div>

            {/* Events */}
            <div className="bg-white border-2 border-purple-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎪</span>
                <h3 className="text-2xl font-bold text-slate-900">Events & Experiences</h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">Sub-Categories: Pop-ups, Markets, Festivals, Cultural Events</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-purple-600 uppercase mb-2">Top Tier Events (Volume)</p>
                  <p className="text-sm text-slate-700">Global Village, Ripe Market, Dubai Food Festival</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-600 uppercase mb-2">Local Gems / Community Events</p>
                  <p className="text-sm text-slate-700">Flea Markets (Various), University Festivals, Last Exit Food Trucks</p>
                </div>
              </div>
            </div>

            {/* Fashion */}
            <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">👕</span>
                <h3 className="text-2xl font-bold text-slate-900">Fashion & Retail</h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">Sub-Categories: Streetwear, Boutiques, Perfumes, Accessories</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-indigo-600 uppercase mb-2">Top Tier Chains (Volume)</p>
                  <p className="text-sm text-slate-700">Zara, H&M, Mango, Ajmal, Arabian Oud, Level Shoes</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-indigo-600 uppercase mb-2">Local Gems / Independents</p>
                  <p className="text-sm text-slate-700">The Giving Movement, Amongst Few, Frame Boutique, LILI BLANC, VAO Concept Store</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Models */}
        <section id="models" className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-6">3. The Two Commercial Engines</h2>
          <p className="text-lg text-slate-600 mb-8">
            To maximize adoption, we apply two distinct financial models based on merchant margins.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Model A */}
            <div className="bg-gradient-to-br from-[#c9a227]/10 to-orange-50 border-2 border-[#c9a227] rounded-3xl p-8">
              <div className="inline-block px-4 py-2 bg-[#c9a227] text-white rounded-full mb-4">
                <p className="text-xs font-black uppercase">Model A</p>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">Growth & Loyalty</h3>
              <div className="bg-white rounded-2xl p-6 mb-6">
                <p className="text-5xl font-black text-[#c9a227] mb-2">15%</p>
                <p className="text-sm text-slate-600">Merchant Commission</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">User Cashback</span>
                  <span className="font-bold text-blue-600">5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Social Bonus</span>
                  <span className="font-bold text-purple-600">5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Nuqta Revenue</span>
                  <span className="font-bold text-emerald-600">5%</span>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
                <p className="text-sm font-bold text-orange-800 mb-2">Target Sectors</p>
                <p className="text-sm text-orange-700">High-margin: F&B, Salons, Fitness, Boutiques</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-xs font-bold text-blue-800 mb-2">Social Bonus Logic</p>
                <p className="text-xs text-blue-700">If user shares → Get 10% total (5% + 5%). If no share → Nuqta keeps extra 5% (10% revenue)</p>
              </div>
            </div>

            {/* Model B */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-300 rounded-3xl p-8">
              <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full mb-4">
                <p className="text-xs font-black uppercase">Model B</p>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">Transaction-Only</h3>
              <div className="bg-white rounded-2xl p-6 mb-6">
                <p className="text-5xl font-black text-blue-600 mb-2">5%</p>
                <p className="text-sm text-slate-600">Brand Coins</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">User Reward</span>
                  <span className="font-bold text-purple-600">5% Brand Coins</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Nuqta Revenue</span>
                  <span className="font-bold text-emerald-600">0% upfront</span>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-4">
                <p className="text-sm font-bold text-purple-800 mb-2">Target Sectors</p>
                <p className="text-sm text-purple-700">Low-margin/High-volume: Grocery, Supermarkets, Gold, Fashion Chains</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-xs font-bold text-green-800 mb-2">Logic</p>
                <p className="text-xs text-green-700">Brand Coins only redeemable at that merchant → Protects margins, forces repeat visits. Monetize through data intelligence & float.</p>
              </div>
            </div>
          </div>

          {/* Special Case: Gold */}
          <div className="mt-8 bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-400 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💎</span>
              <h3 className="text-2xl font-bold text-yellow-900">Special Case: Gold & Jewellery</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-bold text-yellow-800 mb-2">Commission Structure</p>
                <p className="text-sm text-yellow-700">15% applies ONLY to Making Charges, NOT gold value</p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="text-xs font-bold text-slate-700 mb-2">Example (AED 10,000 Necklace)</p>
                <div className="space-y-1 text-xs text-slate-600">
                  <div className="flex justify-between"><span>Gold value:</span> <span>AED 8,000 (0%)</span></div>
                  <div className="flex justify-between"><span>Making charges:</span> <span>AED 2,000</span></div>
                  <div className="flex justify-between font-bold text-yellow-700"><span>Commission:</span> <span>AED 300 (15%)</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sales Playbook */}
        <section id="playbook" className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-6">4. Sales Playbook: Category-Specific Pitches</h2>

          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 border-2 border-emerald-200 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">The Universal Promise (All Merchants)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-emerald-500 text-xl">✓</span>
                <div>
                  <p className="font-bold text-slate-900">Performance Based</p>
                  <p className="text-sm text-slate-600">No upfront costs. Pay only when sale is made.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-500 text-xl">✓</span>
                <div>
                  <p className="font-bold text-slate-900">Social Distribution</p>
                  <p className="text-sm text-slate-600">Customers become your micro-influencers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-500 text-xl">✓</span>
                <div>
                  <p className="font-bold text-slate-900">Data Intelligence</p>
                  <p className="text-sm text-slate-600">Real-time insights into spending habits and footfall.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-500 text-xl">✓</span>
                <div>
                  <p className="font-bold text-slate-900">Zero Tech Burden</p>
                  <p className="text-sm text-slate-600">QR code integration, no POS changes required.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                emoji: '🍔',
                category: 'Food & Beverage',
                color: 'orange',
                pitch: 'Turn one-time diners into daily regulars. Replace margin-killing discounts with post-purchase rewards.',
                painPoint: 'Traditional: 20% upfront discount burns AED 20 on AED 100 bill, customer might never return.',
                solution: 'Nuqta: 15% post-purchase cashback only if they buy, they return to redeem coins.',
                caseStudy: 'Café in JBR increased repeat visits by 3x in 30 days using 10% post-purchase rewards vs 20% upfront discounts.'
              },
              {
                emoji: '💅',
                category: 'Salons & Grooming',
                color: 'pink',
                pitch: 'The Retention Engine. Fill your empty chairs during off-peak hours using targeted loyalty pushes.',
                painPoint: 'Traditional: 40% empty chairs on weekdays (10am-2pm).',
                solution: 'Nuqta: Send push "Visit today before 3pm, get extra 5% cashback" → Fill slow hours.',
                caseStudy: 'Barbershop in Marina increased weekday occupancy from 60% to 85% using off-peak cashback boosts.'
              },
              {
                emoji: '🛒',
                category: 'Grocery & Essentials',
                color: 'green',
                pitch: 'Neighborhood Dominance. Ensure your store is the "default" choice by locking in users with Brand Coins.',
                painPoint: 'Traditional: User shops at 3 different supermarkets based on proximity.',
                solution: 'Nuqta: User has AED 50 in Carrefour Coins → Always goes to Carrefour first.',
                caseStudy: 'Supermarket chain saw 40% increase in basket frequency when customers had Brand Coins to redeem.'
              },
              {
                emoji: '🏋️',
                category: 'Fitness & Wellness',
                color: 'blue',
                pitch: 'Lower Churn. Gamify the fitness journey—reward every workout and every membership renewal.',
                painPoint: 'Traditional: 60% gym membership churn within 3 months.',
                solution: 'Nuqta: Earn 5% coins on every class/session → Builds habit, increases retention.',
                caseStudy: 'Boutique gym reduced churn from 60% to 35% by rewarding every workout with cashback.'
              },
              {
                emoji: '👕',
                category: 'Fashion Retail',
                color: 'indigo',
                pitch: 'Content-to-Commerce. Turn "Outfits of the Day" (OOTD) into trackable, offline store sales.',
                painPoint: 'Traditional: Influencer posts OOTD, you have no idea if it drove any sales.',
                solution: 'Nuqta: User shares OOTD with Nuqta tag → You track exactly how many people visited your store.',
                caseStudy: 'Boutique tracked 50 store visits from 1 customer\'s Instagram post, resulting in AED 15K sales.'
              }
            ].map((item, idx) => {
              const colorClasses = {
                orange: 'border-orange-200 bg-orange-50',
                pink: 'border-pink-200 bg-pink-50',
                green: 'border-green-200 bg-green-50',
                blue: 'border-blue-200 bg-blue-50',
                indigo: 'border-indigo-200 bg-indigo-50'
              };

              return (
                <div key={idx} className={`border-2 ${colorClasses[item.color as keyof typeof colorClasses]} rounded-2xl p-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{item.emoji}</span>
                    <h3 className="text-2xl font-bold text-slate-900">{item.category}</h3>
                  </div>
                  <div className="bg-white rounded-xl p-4 mb-4">
                    <p className="text-lg font-bold text-slate-900 mb-2">The Pitch</p>
                    <p className="text-slate-700">{item.pitch}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white rounded-xl p-4">
                      <p className="text-sm font-bold text-red-600 mb-2">Pain Point</p>
                      <p className="text-sm text-slate-700">{item.painPoint}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <p className="text-sm font-bold text-emerald-600 mb-2">Nuqta Solution</p>
                      <p className="text-sm text-slate-700">{item.solution}</p>
                    </div>
                  </div>
                  <div className="bg-blue-600 text-white rounded-xl p-4">
                    <p className="text-xs font-bold mb-1">Case Study</p>
                    <p className="text-sm">{item.caseStudy}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Execution Roadmap */}
        <section id="roadmap" className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-6">5. H1 2026 Execution: The "Density" Roadmap</h2>

          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-300 rounded-3xl p-8">
              <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full mb-4">
                <p className="text-xs font-black uppercase">Phase 1 • Month 1-2</p>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">The JLT Pilot</h3>
              <p className="text-lg text-slate-700 mb-6">Prove unit economics in a controlled cluster</p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 text-center">
                  <p className="text-4xl font-black text-blue-600 mb-2">50</p>
                  <p className="text-sm text-slate-600">Merchants in JLT</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <p className="text-4xl font-black text-purple-600 mb-2">1,000</p>
                  <p className="text-sm text-slate-600">Active Users</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <p className="text-4xl font-black text-emerald-600 mb-2">AED 100K</p>
                  <p className="text-sm text-slate-600">GMV Target</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm font-bold text-blue-800 mb-2">Success Criteria</p>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-blue-700">
                  <div className="flex items-center gap-2"><span className="text-blue-500">✓</span> 50 merchants live</div>
                  <div className="flex items-center gap-2"><span className="text-blue-500">✓</span> 1,000 active users</div>
                  <div className="flex items-center gap-2"><span className="text-blue-500">✓</span> AED 100K GMV</div>
                  <div className="flex items-center gap-2"><span className="text-blue-500">✓</span> 20%+ D30 retention</div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-300 rounded-3xl p-8">
              <div className="inline-block px-4 py-2 bg-purple-600 text-white rounded-full mb-4">
                <p className="text-xs font-black uppercase">Phase 2 • Month 3-4</p>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">The Chain Activation</h3>
              <p className="text-lg text-slate-700 mb-6">Add volume through national chains</p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 text-center">
                  <p className="text-4xl font-black text-purple-600 mb-2">150</p>
                  <p className="text-sm text-slate-600">Total Merchants</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <p className="text-4xl font-black text-blue-600 mb-2">5,000</p>
                  <p className="text-sm text-slate-600">Active Users</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <p className="text-4xl font-black text-emerald-600 mb-2">AED 500K</p>
                  <p className="text-sm text-slate-600">GMV Target</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-sm font-bold text-green-800 mb-2">Grocery Chains (Model B)</p>
                  <p className="text-sm text-green-700">Carrefour, Lulu, Spinneys, Waitrose, Choithrams • 5% Brand Coins</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                  <p className="text-sm font-bold text-orange-800 mb-2">QSR Chains (Model A)</p>
                  <p className="text-sm text-orange-700">McDonald's, KFC, Starbucks, Tim Hortons • 10% cashback</p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-300 rounded-3xl p-8">
              <div className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-full mb-4">
                <p className="text-xs font-black uppercase">Phase 3 • Month 5-6</p>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">The Social Multiplier</h3>
              <p className="text-lg text-slate-700 mb-6">Drive viral user growth through social rewards</p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 text-center">
                  <p className="text-4xl font-black text-emerald-600 mb-2">250+</p>
                  <p className="text-sm text-slate-600">Total Merchants</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <p className="text-4xl font-black text-blue-600 mb-2">10,000</p>
                  <p className="text-sm text-slate-600">Active Users</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <p className="text-4xl font-black text-purple-600 mb-2">AED 2M</p>
                  <p className="text-sm text-slate-600">GMV Target</p>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <p className="text-sm font-bold text-emerald-800 mb-2">Geographic Expansion</p>
                <p className="text-sm text-emerald-700">JLT → Marina → Downtown → JBR → Business Bay • 50 merchants per zone</p>
              </div>
            </div>
          </div>
        </section>

        {/* Critical Metrics */}
        <section id="metrics" className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-6">6. Critical Success Metrics (H1 2026)</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Merchant Metrics */}
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-orange-700 mb-4">Merchant Metrics</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Total Merchants</p>
                  <p className="text-3xl font-black text-orange-600">250+</p>
                </div>
                <div className="h-px bg-slate-200"></div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-slate-600">F&B:</span> <span className="font-bold">100+</span></div>
                  <div className="flex justify-between"><span className="text-slate-600">Salons:</span> <span className="font-bold">50+</span></div>
                  <div className="flex justify-between"><span className="text-slate-600">Grocery:</span> <span className="font-bold">20+</span></div>
                  <div className="flex justify-between"><span className="text-slate-600">Fitness:</span> <span className="font-bold">25+</span></div>
                  <div className="flex justify-between"><span className="text-slate-600">Fashion:</span> <span className="font-bold">30+</span></div>
                </div>
              </div>
            </div>

            {/* User Metrics */}
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-4">User Metrics</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Active Users</p>
                  <p className="text-3xl font-black text-blue-600">10,000+</p>
                </div>
                <div className="h-px bg-slate-200"></div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-slate-600">D7 Retention:</span> <span className="font-bold">40%+</span></div>
                  <div className="flex justify-between"><span className="text-slate-600">D30 Retention:</span> <span className="font-bold">30%+</span></div>
                  <div className="flex justify-between"><span className="text-slate-600">Social Share:</span> <span className="font-bold">30%+</span></div>
                  <div className="flex justify-between"><span className="text-slate-600">Trans/User/Month:</span> <span className="font-bold">20+</span></div>
                </div>
              </div>
            </div>

            {/* Financial Metrics */}
            <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-emerald-700 mb-4">Financial Metrics</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-slate-600 mb-1">GMV (H1)</p>
                  <p className="text-3xl font-black text-emerald-600">AED 2M+</p>
                </div>
                <div className="h-px bg-slate-200"></div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-slate-600">Revenue:</span> <span className="font-bold">AED 100K+</span></div>
                  <div className="flex justify-between"><span className="text-slate-600">CAC:</span> <span className="font-bold">≤ AED 30</span></div>
                  <div className="flex justify-between"><span className="text-slate-600">LTV:</span> <span className="font-bold">AED 300+</span></div>
                  <div className="flex justify-between"><span className="text-slate-600">LTV:CAC:</span> <span className="font-bold">10:1+</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2a42] text-white rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-black mb-4">Let's Build the Future of Local Commerce</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            This is the execution roadmap. Every merchant conversation, every user activation, every metric tracked—all flows from this blueprint.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:rejaul@nuqtapp.com" className="px-8 py-4 bg-[#c9a227] hover:bg-[#d4ab2c] text-[#0a1628] font-bold rounded-xl transition-colors">
              Get in Touch
            </a>
            <a href="/" className="px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-bold rounded-xl transition-colors">
              Back to Home
            </a>
          </div>
          <div className="mt-8 text-sm text-slate-400">
            Rejaul Karim • Founder & CEO • rejaul@nuqtapp.com • +971 50 376 4345
          </div>
        </div>

      </div>
    </div>
  );
}
