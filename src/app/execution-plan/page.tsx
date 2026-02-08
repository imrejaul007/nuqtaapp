'use client';

export default function ExecutionPlanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2a42] text-white py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block px-4 py-2 bg-[#c9a227] rounded-full mb-6">
            <p className="text-xs font-black uppercase tracking-wider">Master Strategic Blueprint</p>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-7xl font-black mb-6">
            Nuqta H1 2026 Strategic Blueprint
          </h1>
          <p className="text-2xl text-slate-300 max-w-3xl mb-4">
            Solving "Loyalty Fatigue" by bridging social content and physical commerce through universal liquidity
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-slate-400">Launch: March 1, 2026</span>
            </div>
            <div className="text-slate-400">•</div>
            <div className="text-slate-400">$200K Tranche 1 + $200K at milestones</div>
            <div className="text-slate-400">•</div>
            <a href="/master-roadmap" className="text-[#c9a227] hover:text-white transition-colors font-semibold underline">
              ← Master Roadmap
            </a>
            <div className="text-slate-400">•</div>
            <a href="/h2-strategy" className="text-purple-400 hover:text-purple-300 transition-colors font-semibold underline">
              H2 Strategy →
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Quick Links */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <div className="flex items-center gap-6 overflow-x-auto text-sm">
            <a href="#models" className="whitespace-nowrap text-slate-600 hover:text-[#c9a227] font-semibold transition-colors">Commercial Models</a>
            <a href="#merchants" className="whitespace-nowrap text-slate-600 hover:text-[#c9a227] font-semibold transition-colors">Merchants</a>
            <a href="#objections" className="whitespace-nowrap text-slate-600 hover:text-[#c9a227] font-semibold transition-colors">Objections</a>
            <a href="#roadmap" className="whitespace-nowrap text-slate-600 hover:text-[#c9a227] font-semibold transition-colors">Roadmap</a>
            <a href="#calendar" className="whitespace-nowrap text-slate-600 hover:text-[#c9a227] font-semibold transition-colors">Event Calendar</a>
            <a href="#metrics" className="whitespace-nowrap text-slate-600 hover:text-[#c9a227] font-semibold transition-colors">Metrics</a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">

        {/* Commercial Models */}
        <section id="models" className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-8">1. The H1 2026 Commercial Models</h2>
          <p className="text-lg text-slate-600 mb-8">
            To ensure scalability across 26 sub-categories, Nuqta operates three distinct engines based on merchant margin profiles and use cases.
          </p>

          {/* Engine A */}
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 border-2 border-emerald-300 rounded-3xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-4 py-2 bg-emerald-600 rounded-full">
                <span className="text-white font-black text-sm">ENGINE A</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900">The Growth & Social Model</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 mb-6">
              <p className="text-xl font-bold text-emerald-700 mb-4">15% Total Commission (10% if no share)</p>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="border-2 border-emerald-200 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-emerald-600 mb-2">5%</p>
                  <p className="text-sm font-semibold text-slate-700">Nuqta Revenue</p>
                  <p className="text-xs text-slate-500 mt-1">Fixed platform fee</p>
                </div>
                <div className="border-2 border-blue-200 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-blue-600 mb-2">5%</p>
                  <p className="text-sm font-semibold text-slate-700">Nuqta Coins</p>
                  <p className="text-xs text-slate-500 mt-1">Fixed user reward</p>
                </div>
                <div className="border-2 border-purple-200 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-purple-600 mb-2">5%</p>
                  <p className="text-sm font-semibold text-slate-700">Social Bonus</p>
                  <p className="text-xs text-slate-500 mt-1">If user shares</p>
                </div>
                <div className="border-2 border-amber-200 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-amber-600 mb-2">+</p>
                  <p className="text-sm font-semibold text-slate-700">Brand Coins</p>
                  <p className="text-xs text-slate-500 mt-1">Merchant optional</p>
                </div>
              </div>

              <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4 mb-4">
                <p className="font-bold text-amber-800 mb-2">📊 Social Bonus Logic:</p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• <span className="font-semibold">With Share:</span> User gets 10% Nuqta Coins (5% + 5%), Nuqta gets 5% revenue</li>
                  <li>• <span className="font-semibold">No Share:</span> User gets 5% Nuqta Coins, Nuqta gets 10% revenue (5% + 5%)</li>
                  <li>• <span className="font-semibold">Plus:</span> Merchant can optionally give Brand Coins (e.g., 3% Starbucks Coins)</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                <p className="font-bold text-blue-800 mb-2">💰 Example (AED 100 Coffee):</p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• <span className="font-semibold">With Share:</span> User gets AED 10 Nuqta Coins, Nuqta gets AED 5</li>
                  <li>• <span className="font-semibold">Without Share:</span> User gets AED 5 Nuqta Coins, Nuqta gets AED 10</li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-600 text-white rounded-2xl p-6">
              <p className="font-bold mb-2">💡 Win Factor:</p>
              <p className="text-sm">Merchants stop paying for "blind" ads and only pay for guaranteed sales + authentic User Generated Content (UGC).</p>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-600 mb-2">Target Sectors:</p>
              <div className="flex flex-wrap gap-2">
                {['F&B', 'Salons', 'Fitness', 'Boutiques', 'Events'].map((sector) => (
                  <span key={sector} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Engine B */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-4 py-2 bg-purple-600 rounded-full">
                <span className="text-white font-black text-sm">ENGINE B</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900">The Transaction & Volume Model</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 mb-6">
              <p className="text-xl font-bold text-purple-700 mb-4">5% Total Commission</p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="border-2 border-purple-200 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-purple-600 mb-2">3%</p>
                  <p className="text-sm font-semibold text-slate-700">Nuqta Revenue</p>
                  <p className="text-xs text-slate-500 mt-1">Platform fee</p>
                </div>
                <div className="border-2 border-blue-200 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-blue-600 mb-2">2%</p>
                  <p className="text-sm font-semibold text-slate-700">Nuqta Coins</p>
                  <p className="text-xs text-slate-500 mt-1">Universal reward</p>
                </div>
                <div className="border-2 border-pink-200 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-pink-600 mb-2">+</p>
                  <p className="text-sm font-semibold text-slate-700">Brand Coins</p>
                  <p className="text-xs text-slate-500 mt-1">Merchant optional</p>
                </div>
              </div>

              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4 mb-4">
                <p className="font-bold text-purple-800 mb-2">💎 Why It Works:</p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• 5% total commission vs 2-3% margins = sustainable</li>
                  <li>• Nuqta Coins provide universal liquidity (redeemable anywhere)</li>
                  <li>• Brand Coins force repeat visits (redeemable only at that merchant)</li>
                  <li>• Merchant chooses Brand Coin % based on their economics</li>
                </ul>
              </div>

              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
                <p className="font-bold text-emerald-800 mb-2">💰 Example (AED 500 Grocery):</p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• User gets AED 10 Nuqta Coins (2%, universal)</li>
                  <li>• Nuqta gets AED 15 revenue (3%)</li>
                  <li>• Merchant optionally gives AED 20 Carrefour Brand Coins (4%)</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-600 text-white rounded-2xl p-6">
              <p className="font-bold mb-2">💡 The Benefit:</p>
              <p className="text-sm">Brand Coins force the user back to the <span className="font-bold">same</span> brand, protecting the merchant's ecosystem while benefiting from Nuqta's 2026 discovery engine.</p>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-600 mb-2">Target Sectors:</p>
              <div className="flex flex-wrap gap-2">
                {['Grocery', 'Supermarkets', 'Gold', 'Fashion Chains'].map((sector) => (
                  <span key={sector} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Engine C */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-3xl p-8 mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-4 py-2 bg-amber-600 rounded-full">
                <span className="text-white font-black text-sm">ENGINE C</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900">The Event & Acquisition Model</h3>
            </div>

            <div className="bg-white rounded-2xl p-6 mb-6">
              <p className="text-xl font-bold text-amber-700 mb-4">Event Partnership (Variable Commission)</p>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="border-2 border-amber-200 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-amber-600 mb-2">🎫</p>
                  <p className="text-sm font-semibold text-slate-700">Event Coins</p>
                  <p className="text-xs text-slate-500 mt-1">On ticket/registration</p>
                </div>
                <div className="border-2 border-purple-200 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-purple-600 mb-2">🔒</p>
                  <p className="text-sm font-semibold text-slate-700">Locked Until</p>
                  <p className="text-xs text-slate-500 mt-1">Event attendance</p>
                </div>
                <div className="border-2 border-emerald-200 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-emerald-600 mb-2">💰</p>
                  <p className="text-sm font-semibold text-slate-700">Min Spend</p>
                  <p className="text-xs text-slate-500 mt-1">AED 300-500 to unlock</p>
                </div>
                <div className="border-2 border-blue-200 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-blue-600 mb-2">🔄</p>
                  <p className="text-sm font-semibold text-slate-700">Sponsor Coins</p>
                  <p className="text-xs text-slate-500 mt-1">Brand partnerships</p>
                </div>
              </div>

              <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4 mb-4">
                <p className="font-bold text-amber-800 mb-2">🎪 How It Works:</p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• <span className="font-semibold">Step 1:</span> User buys ticket/registers → receives Event Coins (locked)</li>
                  <li>• <span className="font-semibold">Step 2:</span> User attends event → coins unlock via QR check-in</li>
                  <li>• <span className="font-semibold">Step 3:</span> User spends AED 300+ at event merchant → redeems coins</li>
                  <li>• <span className="font-semibold">Result:</span> Higher footfall, higher AOV, repeat visitors via Brand Coins</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
                <p className="font-bold text-purple-800 mb-2">💰 Example (Global Village):</p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• User gets AED 100 Event Coins on ticket purchase</li>
                  <li>• User spends AED 500 at GV merchant → pays AED 400 cash + AED 100 coins</li>
                  <li>• Merchant pays 12% commission → AED 40 to event, AED 20 to Nuqta</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-600 text-white rounded-2xl p-6">
              <p className="font-bold mb-2">💡 The Strategy:</p>
              <p className="text-sm">Engine C is primarily an <span className="font-bold">acquisition channel</span>. Users acquired at events convert to Engine A/B usage for daily purchases.</p>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-600 mb-2">Target Events:</p>
              <div className="flex flex-wrap gap-2">
                {['Global Village', 'Exhibitions', 'Corporate Events', 'College Fests', 'Festivals'].map((sector) => (
                  <span key={sector} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Merchants */}
        <section id="merchants" className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-8">2. Master Merchant & Category Matrix</h2>
          <p className="text-lg text-slate-600 mb-8">
            Every merchant and category identified for the H1 2026 rollout.
          </p>

          {/* F&B */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-3xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🍔</span>
              <div>
                <h3 className="text-2xl font-black text-slate-900">Food & Beverage</h3>
                <p className="text-sm text-slate-600">The "High-Frequency" Hub • Engine A (15%)</p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="bg-white rounded-xl p-4 border border-orange-200">
                <p className="font-bold text-orange-700 mb-2">☕ Cafes & Coffee</p>
                <p className="text-sm text-slate-600">Starbucks, Costa, Tim Hortons, Caribou, Café Nero, % Arabica, Stomping Grounds, Nightjar, Casette, Alchemy, Boston Lane, Seven Fortunes, Depresso, The Sum of Us</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-orange-200">
                <p className="font-bold text-orange-700 mb-2">🍔 QSR & Fast Food</p>
                <p className="text-sm text-slate-600">McDonald's, KFC, Subway, Burger King, Hardee's, AlBaik, Five Guys, High Joint, Pickl, Salt, Slaw, Jailbird, Bluestone, Lads Burger, She Burger</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-orange-200">
                <p className="font-bold text-orange-700 mb-2">🍕 Casual & Street</p>
                <p className="text-sm text-slate-600">Nando's, P.F. Chang's, Paul, Jones the Grocer, Chili's, Wagamama, Al Fanar, Operation: Falafel, Zaroob, Logma, Mama'esh, Bait Maryam, Reif Kushiyaki, Ravi Restaurant</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-orange-200">
                <p className="font-bold text-orange-700 mb-2">🍰 Desserts & Juice</p>
                <p className="text-sm text-slate-600">Baskin Robbins, Magnolia Bakery, Mister Baker, Krispy Kreme, Sugaholic, Home Bakery, Rise & Dawn, L'ETO, Tonic, Joga, Wild & The Moon</p>
              </div>
            </div>

            <div className="mt-4 text-center">
              <span className="inline-block px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-bold">
                Target: 100+ F&B merchants by Month 6
              </span>
            </div>
          </div>

          {/* Salons */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 rounded-3xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">💅</span>
              <div>
                <h3 className="text-2xl font-black text-slate-900">Salons, Fitness & Wellness</h3>
                <p className="text-sm text-slate-600">The "Lifestyle" Hub • Engine A (15%)</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 border border-pink-200">
                <p className="font-bold text-pink-700 mb-2">💈 Grooming (M/F)</p>
                <p className="text-sm text-slate-600">1847, Chaps & Co, Tips & Toes, NStyle, Sisters Beauty Lounge, Fade & Shave, CG Barbershop, Chalk, Peaky Blinders, THT, Willow Lane</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-purple-200">
                <p className="font-bold text-purple-700 mb-2">🏋️ Gyms & Fitness</p>
                <p className="text-sm text-slate-600">Fitness First, GymNation, Gold's Gym, Snap Fitness, Warehouse Gym, Train SF, Platform Studios, Crank, F45</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-pink-200">
                <p className="font-bold text-pink-700 mb-2">🧘 Yoga & Wellness</p>
                <p className="text-sm text-slate-600">Karma Yoga, Trident Wellness, Inspire, Paus, Seva Experience</p>
              </div>
            </div>

            <div className="mt-4 text-center">
              <span className="inline-block px-4 py-2 bg-pink-600 text-white rounded-full text-sm font-bold">
                Target: 75+ Salon/Fitness merchants by Month 6
              </span>
            </div>
          </div>

          {/* Grocery */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🛒</span>
              <div>
                <h3 className="text-2xl font-black text-slate-900">Grocery & Retail</h3>
                <p className="text-sm text-slate-600">The "Volume" Hub • Engine B (5% Brand Coins)</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 border border-green-200">
                <p className="font-bold text-green-700 mb-2">🏪 Supermarkets</p>
                <p className="text-sm text-slate-600">Carrefour, Lulu, Spinneys, Choithrams, West Zone, Grandiose, Union Coop, Al Adil, Shaklan</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-emerald-200">
                <p className="font-bold text-emerald-700 mb-2">🏪 Convenience</p>
                <p className="text-sm text-slate-600">Zoom, Circle K, 7-Eleven, ADNOC Oasis, ENOC, All Day, Blue Mart</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-amber-200">
                <p className="font-bold text-amber-700 mb-2">💍 Gold & Jewellery</p>
                <p className="text-sm text-slate-600">All Gold Souk Merchants (Commission on making charges only)</p>
              </div>
            </div>

            <div className="mt-4 text-center">
              <span className="inline-block px-4 py-2 bg-green-600 text-white rounded-full text-sm font-bold">
                Target: 20+ Grocery merchants by Month 6
              </span>
            </div>
          </div>

          {/* Fashion */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">👗</span>
              <div>
                <h3 className="text-2xl font-black text-slate-900">Fashion, Events & Pop-ups</h3>
                <p className="text-sm text-slate-600">The "Discovery" Hub • Dual Model</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 border border-indigo-200">
                <p className="font-bold text-indigo-700 mb-2">👕 Fashion Retail (Dual Model)</p>
                <p className="text-sm text-slate-600">Zara, H&M, Mango, Tommy Hilfiger, The Giving Movement, Amongst Few, Frame, Level Shoes, Ajmal, Arabian Oud, Skims, VAO Concept</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-purple-200">
                <p className="font-bold text-purple-700 mb-2">🎪 Events & Fests (Engine A)</p>
                <p className="text-sm text-slate-600">Global Village, Ripe Market, Dubai Food Festival, Dubai Flea Market, Art Central, College/University Fests</p>
              </div>
            </div>

            <div className="mt-4 text-center">
              <span className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-bold">
                Target: 55+ Fashion/Events merchants by Month 6
              </span>
            </div>
          </div>
        </section>

        {/* Objections */}
        <section id="objections" className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-8">3. The "Why Nuqta?" Playbook</h2>
          <p className="text-lg text-slate-600 mb-8">
            Overcoming the most common merchant objections.
          </p>

          {/* Small Business Pitch */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-3xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🏪</span>
              <h3 className="text-2xl font-black text-slate-900">A. The "Small Business" Pitch</h3>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-blue-300">
              <p className="text-lg italic text-slate-700 mb-4">
                "You are currently spending 25% of your revenue on Instagram ads and aggregators like Talabat.
                Nuqta gives you that money back. You only pay us 15% when a customer actually walks in, pays,
                and posts a video of your store. We are your outsourced marketing team."
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {[
                  'Zero upfront costs',
                  'Pay only for guaranteed sales',
                  'Social proof included (UGC)',
                  'Full attribution tracking'
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-emerald-500 text-xl">✅</span>
                    <span className="text-sm font-semibold text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Big Brand Rebuttal */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-3xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🏨</span>
              <h3 className="text-2xl font-black text-slate-900">B. The "Big Brand" (Marriott/Bonvoy) Rebuttal</h3>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6">
              <p className="font-bold text-red-700 mb-2">❌ The Objection:</p>
              <p className="text-slate-700 italic">"We already have Marriott Bonvoy. It's a multi-billion dollar system. Why join Nuqta?"</p>
            </div>

            <div className="space-y-6">
              {/* Point 1 */}
              <div className="bg-white rounded-2xl p-6 border border-purple-200">
                <p className="font-bold text-purple-700 mb-3 flex items-center gap-2">
                  <span className="text-2xl">1️⃣</span> Acquisition vs. Retention
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">Bonvoy</p>
                    <p className="text-sm text-slate-700">For people who already love Marriott (top 20%)</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-xs font-bold text-purple-600 uppercase mb-1">Nuqta</p>
                    <p className="text-sm text-slate-700">For the Local UAE Resident who hasn't stepped into Marriott yet (other 80%)</p>
                  </div>
                </div>
                <div className="bg-purple-100 rounded-lg p-3">
                  <p className="text-sm italic text-purple-800">"Bonvoy is your retention engine. Nuqta is your acquisition engine. They complement each other."</p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="bg-white rounded-2xl p-6 border border-pink-200">
                <p className="font-bold text-pink-700 mb-3 flex items-center gap-2">
                  <span className="text-2xl">2️⃣</span> Marketing Credit vs. Equity
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">Bonvoy Points</p>
                    <p className="text-sm text-slate-700">High-value liabilities on your balance sheet</p>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-3">
                    <p className="text-xs font-bold text-pink-600 uppercase mb-1">Nuqta Brand Coins</p>
                    <p className="text-sm text-slate-700">Flexible "marketing credits" to fill empty brunch/spa slots</p>
                  </div>
                </div>
                <div className="bg-pink-100 rounded-lg p-3">
                  <p className="text-sm italic text-pink-800">"Brand Coins let you fill your 40% empty Thursday brunch slots without devaluing your Saturday premium pricing."</p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="bg-white rounded-2xl p-6 border border-purple-200">
                <p className="font-bold text-purple-700 mb-3 flex items-center gap-2">
                  <span className="text-2xl">3️⃣</span> Social Proof
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">Bonvoy</p>
                    <p className="text-sm text-slate-700">Silent redemption (user collects points privately)</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-xs font-bold text-purple-600 uppercase mb-1">Nuqta</p>
                    <p className="text-sm text-slate-700">User posts TikTok → 500 people see it → Drives new foot traffic</p>
                  </div>
                </div>
                <div className="bg-purple-100 rounded-lg p-3">
                  <p className="text-sm italic text-purple-800">"Bonvoy doesn't pay you to post a TikTok. Nuqta does. We turn Marriott's guests into a 24/7 content engine for the local Dubai market."</p>
                </div>
              </div>
            </div>
          </div>

          {/* In-House App Objection */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📱</span>
              <h3 className="text-2xl font-black text-slate-900">C. The "In-House App" Objection</h3>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6">
              <p className="font-bold text-red-700 mb-2">❌ The Objection:</p>
              <p className="text-slate-700 italic">"We already have our own loyalty app. Why do we need Nuqta?"</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 border border-amber-200">
                <p className="font-bold text-amber-700 mb-2">1. Nuqta is for Acquisition, Your App is for Retention</p>
                <p className="text-sm italic text-slate-600">"Your app is for the choir. Nuqta is for the unconverted."</p>
              </div>

              <div className="bg-white rounded-xl p-4 border border-orange-200">
                <p className="font-bold text-orange-700 mb-2">2. Nuqta is Social, Your App is a Private Wallet</p>
                <p className="text-sm italic text-slate-600">"Your app is a vault. Nuqta is a megaphone."</p>
              </div>

              <div className="bg-white rounded-xl p-4 border border-amber-200">
                <p className="font-bold text-amber-700 mb-2">3. Universal Liquidity vs Island Points</p>
                <p className="text-sm italic text-slate-600">"Users value freedom. They'd rather have AED 100 in universal coins than AED 150 stuck in your app."</p>
              </div>
            </div>

            <div className="mt-6 bg-emerald-600 text-white rounded-2xl p-6">
              <p className="font-bold mb-2">🤝 The Win-Win Integration:</p>
              <ul className="text-sm space-y-1">
                <li>• Keep your app for your super fans (top 20%)</li>
                <li>• Use Nuqta to acquire the other 80%</li>
                <li>• Migrate them to your app after 5 visits</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-8">4. H1 2026 Strategic Roadmap</h2>

          {/* Phase 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-3xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-4 py-2 bg-blue-600 rounded-full">
                <span className="text-white font-black text-sm">PHASE 1</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">Month 1-2: The JLT "Density" Sprint</h3>
                <p className="text-sm text-slate-600">Onboard 60 merchants within a 2km radius</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-blue-200 mb-4">
              <p className="font-bold text-blue-700 mb-3">Goal:</p>
              <p className="text-slate-700 mb-4">"A user can earn coins at breakfast and spend them at their haircut an hour later."</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase mb-2">Focus</p>
                  <p className="text-sm text-slate-700">Cafes (Stomping Grounds/Nightjar) + Salons (Chaps & Co)</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase mb-2">Outcome</p>
                  <p className="text-sm text-slate-700">50 merchants, 1K users, AED 100K GMV, 20%+ D30 retention</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                '✅ 500 merchants live',
                '✅ 25,000 active users',
                '✅ AED 10M GMV',
                '✅ 25%+ D30 retention'
              ].map((metric, i) => (
                <div key={i} className="bg-blue-100 rounded-xl p-3 text-center">
                  <p className="text-sm font-bold text-blue-800">{metric}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-3xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-4 py-2 bg-purple-600 rounded-full">
                <span className="text-white font-black text-sm">PHASE 2</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">Month 3-4: The "Grocery Anchor" Integration</h3>
                <p className="text-sm text-slate-600">Sign Carrefour or Lulu for Engine B + Chain Expansion</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-purple-200 mb-4">
              <p className="font-bold text-purple-700 mb-3">Goal:</p>
              <p className="text-slate-700 mb-4">&quot;Nuqta becomes a &apos;Daily Utility&apos; app, not just an occasional reward app.&quot;</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase mb-2">Chains</p>
                  <p className="text-sm text-slate-700">10+ grocery chains + 15+ QSR chains + All major salons</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase mb-2">Outcome</p>
                  <p className="text-sm text-slate-700">800 merchants, 25K users, AED 10M GMV</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                '✅ 25+ chain partnerships',
                '✅ 25,000 active users',
                '✅ AED 10M GMV',
                '✅ 20%+ repeat rate'
              ].map((metric, i) => (
                <div key={i} className="bg-purple-100 rounded-xl p-3 text-center">
                  <p className="text-sm font-bold text-purple-800">{metric}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Phase 3 */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-4 py-2 bg-emerald-600 rounded-full">
                <span className="text-white font-black text-sm">PHASE 3</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">Month 5-6: The "Social Viral" Scale</h3>
                <p className="text-sm text-slate-600">Activate the 5% Social Reward at scale + Influencer Blitz</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-emerald-200 mb-4">
              <p className="font-bold text-emerald-700 mb-3">Goal:</p>
              <p className="text-slate-700 mb-4">&quot;Your feed becomes flooded with Nuqta-verified recommendations, driving organic user growth to 50K+.&quot;</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase mb-2">Focus</p>
                  <p className="text-sm text-slate-700">Fashion + Events + Pop-ups + 50 micro-influencers</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase mb-2">Outcome</p>
                  <p className="text-sm text-slate-700">1,500 merchants, 50K users, AED 25M GMV</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                '✅ 1,500+ merchants live',
                '✅ 50,000 active users',
                '✅ AED 25M GMV',
                '✅ 35% social share rate'
              ].map((metric, i) => (
                <div key={i} className="bg-emerald-100 rounded-xl p-3 text-center">
                  <p className="text-sm font-bold text-emerald-800">{metric}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* H1 2026 Master Event Calendar */}
        <section id="calendar" className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-8">5. H1 2026 Master Event Calendar & Field Map</h2>
          <p className="text-lg text-slate-600 mb-8">
            Month-by-month tactical execution calendar integrating major Dubai/Sharjah events, community festivals, and university activations.
          </p>

          {/* 3-Tier Event Onboarding Logic */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-300 rounded-3xl p-8 mb-8">
            <h3 className="text-2xl font-black text-slate-900 mb-6">The 3-Tier Event Onboarding Logic</h3>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Tier 1 */}
              <div className="bg-white rounded-2xl p-6 border-2 border-red-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl">🏟️</span>
                  <h4 className="text-xl font-bold text-red-700">Tier 1: Mega-Exhibitions</h4>
                </div>
                <p className="text-sm text-slate-600 mb-3">Global Village, Gulfood, Dubai Food Festival</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <p className="text-slate-700">30-50 merchants per event</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <p className="text-slate-700">5K-10K user downloads</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <p className="text-slate-700">Standard Engine A/B models</p>
                  </div>
                </div>
              </div>

              {/* Tier 2 */}
              <div className="bg-white rounded-2xl p-6 border-2 border-orange-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl">🎨</span>
                  <h4 className="text-xl font-bold text-orange-700">Tier 2: Community Markets</h4>
                </div>
                <p className="text-sm text-slate-600 mb-3">Ripe Market, Last Exit, Sikka Art</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <p className="text-slate-700">10-20 indie/boutique merchants</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <p className="text-slate-700">Authentic UGC content focus</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <p className="text-slate-700">Negotiable commission for unique vendors</p>
                  </div>
                </div>
              </div>

              {/* Tier 3 */}
              <div className="bg-white rounded-2xl p-6 border-2 border-blue-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl">🎓</span>
                  <h4 className="text-xl font-bold text-blue-700">Tier 3: University Hubs</h4>
                </div>
                <p className="text-sm text-slate-600 mb-3">AUS, Sharjah University, UOWD</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <p className="text-slate-700">Campus ambassador program</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <p className="text-slate-700">500-1K students per campus</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <p className="text-slate-700">Extra 2% for .edu emails</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Calendar Timeline */}
          <div className="space-y-6 mb-12">
            {/* January */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-2 bg-blue-600 text-white rounded-full font-black text-sm">JANUARY</div>
                <h3 className="text-xl font-black text-slate-900">F&B Domination</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <p className="font-bold text-blue-700 mb-2 text-sm">🏟️ Major Anchors</p>
                  <p className="text-xs text-slate-600">Global Village (Oct-Apr), DSF (Dec-Jan), Gulfood (Feb 17-21)</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-orange-200">
                  <p className="font-bold text-orange-700 mb-2 text-sm">🎪 Community Layer</p>
                  <p className="text-xs text-slate-600">Ripe Market (Weekly at Zabeel Park), Last Exit (Al Khawaneej, Al Qudra)</p>
                </div>
              </div>
              <div className="bg-blue-100 rounded-xl p-4">
                <p className="text-sm font-semibold text-blue-900">💡 Nuqta Strategy: Sign 30+ F&B vendors at Global Village. Activate DSF mall promotions. Gulfood = B2B networking goldmine for F&B chains.</p>
              </div>
            </div>

            {/* February */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-2 bg-purple-600 text-white rounded-full font-black text-sm">FEBRUARY</div>
                <h3 className="text-xl font-black text-slate-900">Gen-Z Sprint</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-xl p-4 border border-purple-200">
                  <p className="font-bold text-purple-700 mb-2 text-sm">🏟️ Major Anchors</p>
                  <p className="text-xs text-slate-600">SteelFab Sharjah (Feb 4-7), Spring Shopper Sharjah (Feb 5-15), Dubai Food Festival (Feb 27-Mar 15)</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-orange-200">
                  <p className="font-bold text-orange-700 mb-2 text-sm">🎪 Community Layer</p>
                  <p className="text-xs text-slate-600">Sikka Art Fair (Al Fahidi), University Festivals (AUS, Sharjah Univ)</p>
                </div>
              </div>
              <div className="bg-purple-100 rounded-xl p-4">
                <p className="text-sm font-semibold text-purple-900">💡 Nuqta Strategy: Activate university ambassadors at AUS & Sharjah Uni fests. Spring Shopper = 20+ fashion merchants with 0% trial. Food Festival = 1,000 posts with #NuqtaEats.</p>
              </div>
            </div>

            {/* March - RAMADAN BLITZ */}
            <div className="bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 border-4 border-red-400 rounded-3xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-2 bg-red-600 text-white rounded-full font-black text-sm">MARCH</div>
                <h3 className="text-xl font-black text-slate-900">🚨 RAMADAN BLITZ (Critical Milestone)</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-xl p-4 border-2 border-red-300">
                  <p className="font-bold text-red-700 mb-2 text-sm">🏟️ Major Anchors</p>
                  <p className="text-xs text-slate-600">Ramadan Nights Sharjah (Mar 6-22), Art Dubai (Mar 5-8), Comic Con (Mar 6-8)</p>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-orange-300">
                  <p className="font-bold text-orange-700 mb-2 text-sm">🎪 Community Layer</p>
                  <p className="text-xs text-slate-600">Quoz Arts Fest, Ripe Night Market (Every Friday)</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl p-6 border-2 border-red-300">
                <p className="text-lg font-black text-red-900 mb-3">🎯 CRITICAL MILESTONE: Sign 50% of Ramadan Nights vendors (150/300)</p>
                <div className="grid md:grid-cols-3 gap-4 text-xs">
                  <div className="bg-white rounded-lg p-3 border border-red-200">
                    <p className="font-bold text-red-700 mb-1">Week 1 (Mar 6-12)</p>
                    <p className="text-slate-600">Onboard 150 vendors with 0% trial (first 30 days free)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-orange-200">
                    <p className="font-bold text-orange-700 mb-1">Week 2 (Mar 13-19)</p>
                    <p className="text-slate-600">Activate 5,000 users (booth at entrance, AED 20 bonus)</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-red-200">
                    <p className="font-bold text-red-700 mb-1">Week 3 (Mar 20-22)</p>
                    <p className="text-slate-600">1,000 #NuqtaRamadan posts = AED 5K draw (500K+ reach)</p>
                  </div>
                </div>
                <div className="mt-4 bg-red-600 text-white rounded-lg p-3">
                  <p className="font-bold text-sm">Expected: 500 merchants + 25K users + AED 5M GMV in 16 days</p>
                </div>
              </div>
            </div>

            {/* April */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-2 bg-amber-600 text-white rounded-full font-black text-sm">APRIL</div>
                <h3 className="text-xl font-black text-slate-900">Night Economy</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-xl p-4 border border-amber-200">
                  <p className="font-bold text-amber-700 mb-2 text-sm">🏟️ Major Anchors</p>
                  <p className="text-xs text-slate-600">Arabian Travel Market (Apr 28-May 1), Mother of the Nation Festival (Abu Dhabi, Mar 22-Apr 19)</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-orange-200">
                  <p className="font-bold text-orange-700 mb-2 text-sm">🎪 Community Layer</p>
                  <p className="text-xs text-slate-600">Dubai Flea Market (Times Square Center), Yoga by The Beach (Kite Beach, weekly)</p>
                </div>
              </div>
              <div className="bg-amber-100 rounded-xl p-4">
                <p className="text-sm font-semibold text-amber-900">💡 Nuqta Strategy: Activate nightlife merchants (Nightjar, Locale). Arabian Travel Market = hotel/tourism partnerships (Marriott Bonvoy rebuttal). Family entertainment merchants.</p>
              </div>
            </div>

            {/* May */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-2 bg-green-600 text-white rounded-full font-black text-sm">MAY</div>
                <h3 className="text-xl font-black text-slate-900">Social Bonus Surge</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-xl p-4 border border-green-200">
                  <p className="font-bold text-green-700 mb-2 text-sm">🏟️ Major Anchors</p>
                  <p className="text-xs text-slate-600">Dubai Summer Surprises (starts late May), Eid Al Adha prep</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-orange-200">
                  <p className="font-bold text-orange-700 mb-2 text-sm">🎪 Community Layer</p>
                  <p className="text-xs text-slate-600">Summer Pop-ups (City Walk, JBR), University Exams (study cafe partnerships)</p>
                </div>
              </div>
              <div className="bg-green-100 rounded-xl p-4">
                <p className="text-sm font-semibold text-green-900">💡 Nuqta Strategy: Launch "Share & Earn Double" for DSS merchants. University exams = study cafe partnerships (free coffee for 10 hours studied).</p>
              </div>
            </div>

            {/* June */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-2 bg-indigo-600 text-white rounded-full font-black text-sm">JUNE</div>
                <h3 className="text-xl font-black text-slate-900">Liquid Liquidity</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-xl p-4 border border-indigo-200">
                  <p className="font-bold text-indigo-700 mb-2 text-sm">🏟️ Major Anchors</p>
                  <p className="text-xs text-slate-600">Eid Al Adha (Jun 6-9), Dubai Summer Surprises (ongoing), Sharjah Summer Sale (starts June)</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-orange-200">
                  <p className="font-bold text-orange-700 mb-2 text-sm">🎪 Community Layer</p>
                  <p className="text-xs text-slate-600">Ripe Market (moves indoors), Gym Summer Memberships (Fitness First, GymNation)</p>
                </div>
              </div>
              <div className="bg-indigo-100 rounded-xl p-4">
                <p className="text-sm font-semibold text-indigo-900">💡 Nuqta Strategy: Push Nuqta Coins as "universal mall currency" during DSS. Gold Souk partnerships for Eid gifting. Fitness summer memberships = high LTV.</p>
              </div>
            </div>
          </div>

          {/* Budget Allocation by Tier */}
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 mb-12">
            <h3 className="text-2xl font-black text-slate-900 mb-6">Budget Allocation by Event Tier</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left p-3 font-bold text-slate-700">Event Tier</th>
                    <th className="text-center p-3 font-bold text-slate-700">Budget/Event</th>
                    <th className="text-center p-3 font-bold text-slate-700">Merchant Target</th>
                    <th className="text-center p-3 font-bold text-slate-700">User Target</th>
                    <th className="text-center p-3 font-bold text-slate-700">Expected GMV</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-red-50">
                    <td className="p-3 font-semibold text-red-700">🏟️ Mega-Exhibitions</td>
                    <td className="p-3 text-center text-slate-700">$5K</td>
                    <td className="p-3 text-center text-slate-700">30-50 merchants</td>
                    <td className="p-3 text-center text-slate-700">5,000 users</td>
                    <td className="p-3 text-center font-bold text-slate-900">AED 300K</td>
                  </tr>
                  <tr className="hover:bg-orange-50">
                    <td className="p-3 font-semibold text-orange-700">🎨 Community Markets</td>
                    <td className="p-3 text-center text-slate-700">$1K</td>
                    <td className="p-3 text-center text-slate-700">10-20 merchants</td>
                    <td className="p-3 text-center text-slate-700">1,000 users</td>
                    <td className="p-3 text-center font-bold text-slate-900">AED 50K</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="p-3 font-semibold text-blue-700">🎓 University Hubs</td>
                    <td className="p-3 text-center text-slate-700">$2K/semester</td>
                    <td className="p-3 text-center text-slate-700">20 campus merchants</td>
                    <td className="p-3 text-center text-slate-700">2,000 students</td>
                    <td className="p-3 text-center font-bold text-slate-900">AED 100K</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-slate-100 rounded-xl p-4">
              <p className="text-sm font-bold text-slate-900">Total H1 Budget: $30K (15% of $200K H1 allocation)</p>
            </div>
          </div>

          {/* Ramadan Blitz ROI */}
          <div className="bg-gradient-to-br from-red-50 via-orange-50 to-red-50 border-4 border-red-300 rounded-3xl p-8">
            <h3 className="text-2xl font-black text-slate-900 mb-6">💰 The Ramadan Blitz ROI Projection</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-2xl p-6 border-2 border-red-200">
                <p className="text-lg font-bold text-red-700 mb-4">Investment (Month 1)</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Event booth rental (16 days)</span>
                    <span className="font-bold text-slate-900">AED 10K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">User acquisition bonuses</span>
                    <span className="font-bold text-slate-900">AED 100K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Merchant onboarding support</span>
                    <span className="font-bold text-slate-900">AED 10K</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t-2 border-red-200">
                    <span className="font-bold text-red-700">Total Investment</span>
                    <span className="font-black text-red-700 text-lg">AED 120K (~$32K)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-emerald-200">
                <p className="text-lg font-bold text-emerald-700 mb-4">Returns (Month 1 vs Month 6)</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Immediate GMV</span>
                    <span className="font-bold text-slate-900">AED 300K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Immediate Revenue (5%)</span>
                    <span className="font-bold text-slate-900">AED 15K</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span className="font-semibold">Month 1 ROI</span>
                    <span className="font-bold">-$28K (loss)</span>
                  </div>
                  <div className="pt-2 border-t-2 border-emerald-200">
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-600">Y1 merchant GMV</span>
                      <span className="font-bold text-slate-900">AED 500K</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-600">Social impressions value</span>
                      <span className="font-bold text-slate-900">AED 50K</span>
                    </div>
                    <div className="flex justify-between text-emerald-600">
                      <span className="font-bold">True ROI (Month 6)</span>
                      <span className="font-black text-lg">5x</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-6">
              <p className="text-lg font-black mb-2">✅ Strategic Value Beyond ROI:</p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>• 500 merchants onboarded</div>
                <div>• 25,000 users acquired (CAC = AED 24 vs AED 50 industry avg)</div>
                <div>• 500K+ social impressions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section id="metrics" className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-8">6. Critical Success Metrics (H1 2026)</h2>

          {/* Merchant Metrics - Aggressive H1 Targets */}
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 mb-8">
            <h3 className="text-2xl font-black text-slate-900 mb-6">Merchant Metrics (H1 Aggressive Targets)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left p-3 font-bold text-slate-700">Metric</th>
                    <th className="text-center p-3 font-bold text-blue-600">Month 2</th>
                    <th className="text-center p-3 font-bold text-purple-600">Month 4</th>
                    <th className="text-center p-3 font-bold text-emerald-600">Month 6</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    { label: 'Total Merchants', m2: '200', m4: '800', m6: '1,500+' },
                    { label: 'F&B', m2: '80', m4: '300', m6: '500+' },
                    { label: 'Salons', m2: '40', m4: '150', m6: '300+' },
                    { label: 'Grocery', m2: '20', m4: '100', m6: '200+' },
                    { label: 'Fitness', m2: '20', m4: '80', m6: '150+' },
                    { label: 'Fashion', m2: '20', m4: '100', m6: '200+' },
                    { label: 'Events', m2: '20', m4: '70', m6: '150+' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-700">{row.label}</td>
                      <td className="p-3 text-center text-blue-700 font-bold">{row.m2}</td>
                      <td className="p-3 text-center text-purple-700 font-bold">{row.m4}</td>
                      <td className="p-3 text-center text-emerald-700 font-bold">{row.m6}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Financial Metrics - Aggressive H1 Targets */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-3xl p-8">
            <h3 className="text-2xl font-black text-slate-900 mb-6">Financial Metrics (Aggressive Targets)</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: 'GMV', m2: 'AED 2M', m4: 'AED 10M', m6: 'AED 25M+', color: 'blue' },
                { label: 'Revenue', m2: 'AED 160K', m4: 'AED 800K', m6: 'AED 2M+', color: 'emerald' },
                { label: 'LTV:CAC', m2: '5:1', m4: '10:1', m6: '20:1+', color: 'purple' },
              ].map((metric, i) => (
                <div key={i} className={`bg-white border-2 border-${metric.color}-200 rounded-2xl p-6`}>
                  <p className={`text-lg font-black text-${metric.color}-700 mb-4`}>{metric.label}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500">Month 2</span>
                      <span className={`text-sm font-bold text-${metric.color}-600`}>{metric.m2}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500">Month 4</span>
                      <span className={`text-sm font-bold text-${metric.color}-600`}>{metric.m4}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500">Month 6</span>
                      <span className={`text-lg font-black text-${metric.color}-700`}>{metric.m6}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline & KPI Gate */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Timeline */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-3xl p-8">
              <h2 className="text-3xl font-black text-slate-900 mb-6">📅 H1 Timeline</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border-2 border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-blue-700">Standard Timeline</span>
                    <span className="text-sm text-slate-500">12 months</span>
                  </div>
                  <p className="text-sm text-slate-600">Original plan: Full year to prove the loop</p>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-emerald-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-emerald-700">Accelerated Timeline</span>
                    <span className="text-sm font-black text-emerald-600">~5 months</span>
                  </div>
                  <p className="text-sm text-slate-600">60% faster: Hit KPI gates in 4-5 months with aggressive execution</p>
                </div>
                <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl p-4">
                  <p className="text-sm font-bold mb-1">⚡ Acceleration Strategy</p>
                  <p className="text-xs">Parallel event execution, faster merchant onboarding cycles, increased marketing spend</p>
                </div>
              </div>
            </div>

            {/* KPI Gate to H2 - Aggressive Targets */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-3xl p-8">
              <h2 className="text-3xl font-black text-slate-900 mb-6">🎯 H1 → H2 KPI Gate (Aggressive)</h2>
              <p className="text-sm text-slate-600 mb-6">Must achieve ALL metrics for 2 consecutive months to advance:</p>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-4 border-l-4 border-purple-500">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-700">Monthly Active Users</span>
                    <span className="text-lg font-black text-purple-600">50,000+</span>
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
                    <span className="font-bold text-slate-700">Merchant Churn</span>
                    <span className="text-lg font-black text-emerald-600">≤5%</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border-l-4 border-amber-500">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-700">Active Merchants</span>
                    <span className="text-lg font-black text-amber-600">1,500+</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border-l-4 border-red-500">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-700">Monthly GMV</span>
                    <span className="text-lg font-black text-red-600">AED 25M+</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-purple-100 rounded-xl p-4">
                <p className="text-xs font-bold text-purple-900 mb-1">Domination Acceleration Rule:</p>
                <p className="text-xs text-purple-800">If KPIs exceed thresholds by 20%+ for 2 months → advance to H2 immediately with expanded budget</p>
              </div>
            </div>
          </div>

          {/* Next Phase Preview */}
          <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white rounded-3xl p-8 text-center">
            <p className="text-sm font-bold text-purple-300 mb-2">AFTER H1 GATE ✅</p>
            <h3 className="text-3xl font-black mb-4">Next: H2 Scale Responsibly</h3>
            <p className="text-slate-300 mb-6">New categories (gyms, salons, healthcare), platform upgrades, geographic expansion within UAE</p>
            <a href="/h2-strategy" className="inline-block px-8 py-3 bg-purple-500 hover:bg-purple-600 transition-colors rounded-xl font-bold">
              View H2 Strategy →
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2a42] text-white rounded-3xl p-12">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Let's build the future of local commerce.</h2>
            <div className="space-y-2 mb-8">
              <p className="text-xl text-slate-300">Rejaul Karim</p>
              <p className="text-sm text-slate-400">Founder & CEO, Nuqta</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="mailto:rejaul@nuqtapp.com" className="px-6 py-3 bg-[#c9a227] hover:bg-[#b8922] text-white font-bold rounded-full transition-colors">
                rejaul@nuqtapp.com
              </a>
              <a href="tel:+971503764345" className="px-6 py-3 border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold rounded-full transition-colors">
                +971 50 376 4345
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
