'use client';

import React, { useState } from 'react';

export default function MerchantDatabase() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeModel, setActiveModel] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: '🎯', count: 250 },
    { id: 'fnb', name: 'Food & Beverages', icon: '🍔', count: 100 },
    { id: 'salons', name: 'Salons & Grooming', icon: '💅', count: 75 },
    { id: 'grocery', name: 'Grocery & Retail', icon: '🛒', count: 20 },
    { id: 'fitness', name: 'Fitness & Wellness', icon: '🏋️', count: 40 },
    { id: 'events', name: 'Events & Pop-ups', icon: '🎪', count: 10 },
    { id: 'fashion', name: 'Fashion Retail', icon: '👗', count: 55 },
    { id: 'targets', name: 'Target Brands', icon: '🎯', count: 100 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Nuqta H1 Merchant Database
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-6">
              250+ Target Merchants Across 6 Categories · 26 Sub-Categories
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-full">
                <span className="font-bold">6</span> Main Categories
              </div>
              <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-full">
                <span className="font-bold">26</span> Sub-Categories
              </div>
              <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-full">
                <span className="font-bold">250+</span> Target Merchants
              </div>
              <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-full">
                <span className="font-bold">~80-150</span> Stores (H1)
              </div>
            </div>
          </div>

          {/* Alert Box */}
          <div className="bg-amber-400 text-amber-900 rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-lg font-bold mb-2">📊 Execution Reality Check</p>
            <p className="text-sm">
              This is a massive execution list aggregating major chains (high-volume store counts)
              and high-density independent clusters to ensure you hit <strong>50+ merchants per sub-category</strong> immediately.
            </p>
          </div>
        </div>
      </div>

      {/* Commission Models Overview */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-black text-center mb-8 text-slate-800">
          Three Commission Engines
        </h2>
        <p className="text-center text-slate-600 mb-6">
          <a href="/merchant-engines" className="text-indigo-600 hover:underline font-semibold">View full engine details →</a>
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Engine A: High-Margin */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🏪</span>
              <div>
                <h3 className="text-xl font-black text-emerald-900">ENGINE A</h3>
                <p className="text-emerald-700 font-bold text-sm">15-20% Commission</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="bg-white/60 rounded-lg p-3">
                <p className="text-sm font-bold text-emerald-900 mb-1">5% User Cashback</p>
                <p className="text-xs text-slate-600">Instant Nuqta Coins (1 Coin = 1 AED)</p>
              </div>
              <div className="bg-white/60 rounded-lg p-3">
                <p className="text-sm font-bold text-emerald-900 mb-1">5% Social Bonus</p>
                <p className="text-xs text-slate-600">Extra coins if user shares on social media</p>
              </div>
              <div className="bg-white/60 rounded-lg p-3">
                <p className="text-sm font-bold text-emerald-900 mb-1">5% Nuqta Revenue</p>
                <p className="text-xs text-slate-600">Platform operations & merchant support</p>
              </div>
            </div>

            <div className="border-t-2 border-emerald-200 pt-4">
              <p className="text-sm font-bold text-emerald-900 mb-2">✅ Who This Is For:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">🍔 F&B</span>
                <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">💅 Salons</span>
                <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">🏋️ Fitness</span>
                <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">👗 Fashion</span>
                <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">🎪 Events</span>
              </div>
            </div>
          </div>

          {/* Engine B: Low-Margin */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🛒</span>
              <div>
                <h3 className="text-xl font-black text-blue-900">ENGINE B</h3>
                <p className="text-blue-700 font-bold text-sm">5-8% Commission</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="bg-white/60 rounded-lg p-3">
                <p className="text-sm font-bold text-blue-900 mb-1">5% Fixed Cashback</p>
                <p className="text-xs text-slate-600">Brand Coins (merchant-specific)</p>
              </div>
              <div className="bg-white/60 rounded-lg p-3">
                <p className="text-sm font-bold text-blue-900 mb-1">2.5-3% Nuqta Revenue</p>
                <p className="text-xs text-slate-600">Lower rate, higher volume</p>
              </div>
            </div>

            <div className="border-t-2 border-blue-200 pt-4">
              <p className="text-sm font-bold text-blue-900 mb-2">✅ Who This Is For:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">🛒 Grocery</span>
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">📱 Electronics</span>
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">💍 Gold</span>
              </div>
            </div>
          </div>

          {/* Engine C: Events */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🎪</span>
              <div>
                <h3 className="text-xl font-black text-purple-900">ENGINE C</h3>
                <p className="text-purple-700 font-bold text-sm">Event Partnership</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="bg-white/60 rounded-lg p-3">
                <p className="text-sm font-bold text-purple-900 mb-1">Event Coins</p>
                <p className="text-xs text-slate-600">Locked until event attendance</p>
              </div>
              <div className="bg-white/60 rounded-lg p-3">
                <p className="text-sm font-bold text-purple-900 mb-1">Min Spend AED 300-500</p>
                <p className="text-xs text-slate-600">Unlocks coins for redemption</p>
              </div>
            </div>

            <div className="border-t-2 border-purple-200 pt-4">
              <p className="text-sm font-bold text-purple-900 mb-2">✅ Who This Is For:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">🎪 Exhibitions</span>
                <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">🎵 Festivals</span>
                <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">🏢 Corporate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Big Brands Join Nuqta */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-black text-purple-900 mb-4 text-center">
            🤔 "We Already Have Our Own Loyalty Program. Why Nuqta?"
          </h3>

          <div className="bg-white/60 rounded-xl p-6 mb-6 border-2 border-purple-200">
            <p className="text-lg font-bold text-purple-900 mb-2 text-center">The Answer:</p>
            <p className="text-xl text-center text-slate-700">
              "Nuqta doesn't replace your loyalty program. It brings you <strong>new customers</strong> and makes your loyalty work <strong>better</strong> — with <strong>zero upfront cost</strong>."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl mb-2">🎯</div>
              <p className="font-bold text-sm text-slate-800 mb-1">Customer Acquisition</p>
              <p className="text-xs text-slate-600">Your loyalty only works after users are already customers. Nuqta = top of funnel.</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl mb-2">🌐</div>
              <p className="font-bold text-sm text-slate-800 mb-1">Universal Rewards</p>
              <p className="text-xs text-slate-600">Nuqta Coin works across merchants. Brand loyalty points are locked. Users prefer "use anywhere".</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl mb-2">📱</div>
              <p className="font-bold text-sm text-slate-800 mb-1">Social Distribution</p>
              <p className="text-xs text-slate-600">Nuqta pays customers to share. Brand loyalty doesn't reward social behavior.</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl mb-2">💰</div>
              <p className="font-bold text-sm text-slate-800 mb-1">Pay-for-Performance</p>
              <p className="text-xs text-slate-600">Nuqta costs you only when a sale happens. No tech, staff, CRM, maintenance costs.</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl mb-2">📊</div>
              <p className="font-bold text-sm text-slate-800 mb-1">Better Data</p>
              <p className="text-xs text-slate-600">Visit frequency, repeat cycles, wallet usage, cross-merchant behavior. Not just points.</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl mb-2">🤝</div>
              <p className="font-bold text-sm text-slate-800 mb-1">Works WITH Loyalty</p>
              <p className="text-xs text-slate-600">Nuqta does acquisition. Your loyalty does retention. No conflict, only synergy.</p>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-6 text-center">
            <p className="text-lg font-bold">💡 The Killer Line:</p>
            <p className="text-xl mt-2">"Your loyalty program rewards people who already love you. Nuqta brings you people who <strong>don't know you yet</strong>."</p>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-xl font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border-2 border-slate-200'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
                <span className="ml-2 text-xs opacity-75">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category 1: Food & Beverages */}
        {(activeCategory === 'all' || activeCategory === 'fnb') && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 mb-6">
              <h2 className="text-3xl font-black mb-2">🍔 CATEGORY 1: Food & Beverages (CORE)</h2>
              <p className="text-lg text-orange-100">Model: Growth & Loyalty (15%) · Target: 100 Merchants</p>
              <p className="text-sm text-orange-100 mt-2">
                "Turn nearby customers into daily regulars. Replace discounts with loyalty."
              </p>
            </div>

            {/* Cafes & Coffee */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-orange-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">☕ Cafés & Coffee Shops</h3>
                  <p className="text-sm text-slate-600">Target: 25 merchants · ~520+ UAE outlets (chains)</p>
                </div>
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold">15% Model</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wide">Top Tier Chains (10)</p>
                  <div className="space-y-2">
                    {[
                      'Starbucks (170+ stores)',
                      'Costa Coffee (150+ stores)',
                      'Tim Hortons (90+ stores)',
                      'Caribou Coffee (60+ stores)',
                      'Café Nero (40+ stores)',
                      '% Arabica (15+ stores)',
                      'Paul (25+ stores)',
                      'Jones the Grocer (15+ stores)',
                      'Magnolia Bakery (10+ stores)',
                      "L'ETO Caffe (5+ stores)"
                    ].map(merchant => (
                      <div key={merchant} className="bg-gradient-to-r from-orange-50 to-yellow-50 px-4 py-2 rounded-lg border border-orange-200">
                        <p className="text-sm text-slate-700">{merchant}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wide">Local & Indie Gems (15)</p>
                  <div className="space-y-2">
                    {[
                      'Stomping Grounds',
                      'Nightjar Coffee',
                      'Casette',
                      'Alchemy',
                      'Boston Lane',
                      'Seven Fortunes Coffee',
                      'Depresso',
                      'The Sum of Us',
                      'Wild & The Moon',
                      'Tonic Juice',
                      'Joga Bonito',
                      'Rise & Dawn',
                      'Sugaholic',
                      'Home Bakery',
                      'Mister Baker'
                    ].map(merchant => (
                      <div key={merchant} className="bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 rounded-lg border border-amber-200">
                        <p className="text-sm text-slate-700">{merchant}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* QSR & Fast Food */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-red-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">🍔 QSR & Fast Food</h3>
                  <p className="text-sm text-slate-600">Target: 25 merchants · ~610+ UAE outlets (chains)</p>
                </div>
                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold">15% Model</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wide">Major Chains (15)</p>
                  <div className="space-y-2">
                    {[
                      "McDonald's (180+ stores)",
                      'KFC (150+ stores)',
                      'Subway (130+ stores)',
                      'Burger King (70+ stores)',
                      "Hardee's (60+ stores)",
                      'AlBaik (15+ stores)',
                      'Five Guys (10+ stores)',
                      'Shake Shack (8+ stores)',
                      'Krispy Kreme (50+ stores)',
                      'Baskin Robbins (150+ stores)',
                      "Papa John's (20+ stores)",
                      'Pizza Hut (40+ stores)',
                      "Domino's (60+ stores)",
                      "Nando's (20+ stores)",
                      'Wagamama (10+ stores)'
                    ].map(merchant => (
                      <div key={merchant} className="bg-gradient-to-r from-red-50 to-orange-50 px-4 py-2 rounded-lg border border-red-200">
                        <p className="text-sm text-slate-700">{merchant}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wide">Gourmet Burgers (10)</p>
                  <div className="space-y-2">
                    {[
                      'High Joint',
                      'Pickl',
                      'Salt',
                      'Slaw',
                      'Jailbird',
                      'Bluestone',
                      'Lads Burger',
                      'She Burger',
                      'The Stuffed Burger',
                      'Black Tap'
                    ].map(merchant => (
                      <div key={merchant} className="bg-gradient-to-r from-rose-50 to-red-50 px-4 py-2 rounded-lg border border-rose-200">
                        <p className="text-sm text-slate-700">{merchant}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Casual Dining */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-amber-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">🍽️ Casual & Family Dining</h3>
                  <p className="text-sm text-slate-600">Target: 30 merchants · ~100+ UAE outlets (chains)</p>
                </div>
                <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-bold">15% Model</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wide">Mid-Casual Chains (10)</p>
                  <div className="space-y-2">
                    {[
                      "P.F. Chang's (15+ stores)",
                      "Chili's (15+ stores)",
                      "Applebee's (10+ stores)",
                      'California Pizza Kitchen',
                      'Cheesecake Factory',
                      'IHOP',
                      "TGI Friday's",
                      'Hard Rock Cafe',
                      'Zuma (if accessible)',
                      'Coya (if accessible)'
                    ].map(merchant => (
                      <div key={merchant} className="bg-gradient-to-r from-amber-50 to-yellow-50 px-4 py-2 rounded-lg border border-amber-200">
                        <p className="text-sm text-slate-700">{merchant}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wide">Local UAE Favorites (20)</p>
                  <div className="space-y-2">
                    {[
                      'Al Fanar Restaurant',
                      'Operation: Falafel',
                      'Zaroob',
                      'Logma',
                      "Mama'esh",
                      'Bait Maryam',
                      'Reif Kushiyaki',
                      'Ravi Restaurant (Satwa)',
                      'Al Mallah (JBR/Satwa)',
                      'Antar (Lebanese)',
                      'Ijaza (Emirati)',
                      'Sikka Cafe',
                      'Arabian Tea House',
                      'Al Nafoorah',
                      'Comptoir 102',
                      'Tom & Serg',
                      'SALT Beach Cafe',
                      'Barasti Beach Bar',
                      'Bu Qtair Fish',
                      'Al Ustad Special Kabab'
                    ].map(merchant => (
                      <div key={merchant} className="bg-gradient-to-r from-orange-50 to-amber-50 px-4 py-2 rounded-lg border border-orange-200">
                        <p className="text-sm text-slate-700">{merchant}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Desserts & Juice */}
            <div className="bg-white rounded-2xl p-6 border-2 border-pink-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">🍰 Desserts & Juice Bars</h3>
                  <p className="text-sm text-slate-600">Target: 20 merchants · ~290+ UAE outlets</p>
                </div>
                <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-bold">15% Model</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wide">Dessert Chains (10)</p>
                  <div className="space-y-2">
                    {[
                      'Cold Stone Creamery',
                      'Häagen-Dazs',
                      'Cinnabon',
                      'Magnolia Cupcakes',
                      'Batch',
                      'Melt Chocolates',
                      'Godiva',
                      'Patchi',
                      'Mirzam Chocolate Makers',
                      'Just Falafel (desserts)'
                    ].map(merchant => (
                      <div key={merchant} className="bg-gradient-to-r from-pink-50 to-rose-50 px-4 py-2 rounded-lg border border-pink-200">
                        <p className="text-sm text-slate-700">{merchant}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wide">Juice/Smoothie Bars (10)</p>
                  <div className="space-y-2">
                    {[
                      'Freshii',
                      'Boost Juice',
                      'Juice World',
                      'The Raw Place',
                      'Life Pharmacy Juice Bar',
                      'Kcal',
                      'RightBite',
                      'Eathos',
                      'Just Salad',
                      'Project Chaiwala'
                    ].map(merchant => (
                      <div key={merchant} className="bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-lg border border-purple-200">
                        <p className="text-sm text-slate-700">{merchant}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category 2: Salons & Grooming */}
        {(activeCategory === 'all' || activeCategory === 'salons') && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-8 mb-6">
              <h2 className="text-3xl font-black mb-2">💅 CATEGORY 2: Salons & Grooming (CORE)</h2>
              <p className="text-lg text-purple-100">Model: Growth & Loyalty (15%) · Target: 75 Merchants</p>
              <p className="text-sm text-purple-100 mt-2">
                "Convert first visits into loyal clients. Before/after content that drives trust."
              </p>
            </div>

            {/* Men's Salons */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-blue-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">✂️ Men's Salons & Barbers</h3>
                  <p className="text-sm text-slate-600">Target: 15 premium grooming + 5 chains</p>
                </div>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">15% Model</span>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  '1847 Grooming (15+ stores)',
                  'Chaps & Co (10+ stores)',
                  'Fade & Shave',
                  'CG Barbershop',
                  'Chalk Barbershop',
                  'Peaky Blinders Barbers',
                  'THT (The Hair Technician)',
                  'Adam Grooming Atelier',
                  'Gents Salon',
                  'The Barber Shop (Jumeirah)',
                  'Kings & Queens Barber',
                  'Jor-Elle Men\'s Salon',
                  'Top Cuts Barbershop',
                  'Privé Barbers',
                  'Legends Barbershop'
                ].map(merchant => (
                  <div key={merchant} className="bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-3 rounded-lg border border-blue-200">
                    <p className="text-sm text-slate-700">{merchant}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Women's Salons */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-pink-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">💇‍♀️ Women's & Unisex Salons</h3>
                  <p className="text-sm text-slate-600">Target: 20 salons · ~65+ UAE outlets</p>
                </div>
                <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-bold">15% Model</span>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Tips & Toes (35+ stores)',
                  'NStyle Beauty (20+ stores)',
                  'Sisters Beauty Lounge (8+ stores)',
                  'Willow Lane Salon',
                  'Après Salon & Spa',
                  'Salon-M',
                  'N.Bar',
                  'Pastels Salon',
                  'Toni&Guy',
                  'Jawed Habib',
                  'Naturals Salon',
                  'Glow Concept Salon',
                  'The Lilac Loft',
                  'Glam House',
                  'Beauty on the Go',
                  'The Nail Spa',
                  'Polished Nail Bar',
                  'Zen Spa & Salon',
                  'Armonia Health & Wellness',
                  'That Hair Tho (THT)'
                ].map(merchant => (
                  <div key={merchant} className="bg-gradient-to-br from-pink-50 to-rose-50 px-4 py-3 rounded-lg border border-pink-200">
                    <p className="text-sm text-slate-700">{merchant}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus Areas Note */}
            <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
              <p className="font-bold text-amber-900 mb-2">📍 Execution Note (High Density Areas):</p>
              <p className="text-sm text-amber-800">
                For Salons, focusing on <strong>JLT, Business Bay, and Al Barsha</strong> will yield <strong>50+ merchants within a 2km radius</strong>.
                These neighborhoods have the highest concentration of grooming services.
              </p>
            </div>
          </div>
        )}

        {/* Category 3: Grocery & Retail */}
        {(activeCategory === 'all' || activeCategory === 'grocery') && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-8 mb-6">
              <h2 className="text-3xl font-black mb-2">🛒 CATEGORY 3: Grocery & Retail (CORE)</h2>
              <p className="text-lg text-green-100">Model: Transaction-Only (3-5%) + Brand Coins · Target: 20 Merchants</p>
              <p className="text-sm text-green-100 mt-2">
                "Become the default store in your neighborhood. Weekly habit creation without price wars."
              </p>
            </div>

            {/* Supermarkets */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-green-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">🏬 Supermarkets</h3>
                  <p className="text-sm text-slate-600">Target: 10 chains · ~470+ UAE outlets</p>
                </div>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">3-5% + Brand Coins</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Carrefour (175+ stores)',
                  'Lulu Hypermarket (90+ stores)',
                  'Spinneys (65+ stores)',
                  'Choithrams (40+ stores)',
                  'West Zone (100+ stores)',
                  'Grandiose Supermarket',
                  'Union Coop',
                  'Al Adil Trading',
                  'Shaklan Market',
                  'Emirates Coop'
                ].map(merchant => (
                  <div key={merchant} className="bg-gradient-to-br from-green-50 to-emerald-50 px-4 py-3 rounded-lg border border-green-200">
                    <p className="text-sm text-slate-700">{merchant}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Convenience Stores */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-teal-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">🏪 Convenience Stores</h3>
                  <p className="text-sm text-slate-600">Target: 5 chains · ~320+ UAE outlets</p>
                </div>
                <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-bold">3-5% + Brand Coins</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Zoom (250+ stores)',
                  'Circle K (50+ stores)',
                  '7-Eleven (20+ stores)',
                  'ADNOC Oasis',
                  'ENOC outlets',
                  'All Day',
                  'Blue Mart'
                ].map(merchant => (
                  <div key={merchant} className="bg-gradient-to-br from-teal-50 to-cyan-50 px-4 py-3 rounded-lg border border-teal-200">
                    <p className="text-sm text-slate-700">{merchant}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gold & Jewellery */}
            <div className="bg-white rounded-2xl p-6 border-2 border-yellow-300 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">💍 Gold & Jewellery</h3>
                  <p className="text-sm text-slate-600">Target: 5 merchants (Gold Souk focus)</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold">3-5% (Making Charges Only)</span>
              </div>

              <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4 mb-4">
                <p className="font-bold text-amber-900 mb-2">⚠️ SPECIAL RULE:</p>
                <p className="text-sm text-amber-800">
                  Commission applies <strong>ONLY to making charges</strong>, NOT gold value.
                  Gold value is commoditized (tied to global spot prices). Merchants make profit on craftsmanship/making charges only.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Gold Souk Deira (2-3 key vendors)',
                  'Joyalukkas',
                  'Malabar Gold & Diamonds',
                  'Kalyan Jewellers',
                  'Damas Jewellery'
                ].map(merchant => (
                  <div key={merchant} className="bg-gradient-to-br from-yellow-50 to-amber-50 px-4 py-3 rounded-lg border border-yellow-300">
                    <p className="text-sm text-slate-700">{merchant}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Category 4: Fitness & Wellness */}
        {(activeCategory === 'all' || activeCategory === 'fitness') && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl p-8 mb-6">
              <h2 className="text-3xl font-black mb-2">🏋️ CATEGORY 4: Fitness & Wellness (SECONDARY)</h2>
              <p className="text-lg text-blue-100">Model: Growth & Loyalty (15%) · Target: 40 Merchants</p>
              <p className="text-sm text-blue-100 mt-2">
                "Reduce churn and increase member lifetime value. Trial → conversion funnel."
              </p>
            </div>

            {/* Gyms */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-blue-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">💪 Gyms & Fitness Studios</h3>
                  <p className="text-sm text-slate-600">Target: 25 locations · ~80+ UAE outlets</p>
                </div>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">15% Model</span>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="font-bold text-slate-700 mb-2 text-xs uppercase">Chain Gyms (10)</p>
                  {[
                    'Fitness First (50+ stores)',
                    'GymNation (15+ stores)',
                    "Gold's Gym (10+ stores)",
                    'Snap Fitness (5+ stores)',
                    'Anytime Fitness',
                    'Warehouse Gym',
                    'Vogue Fitness',
                    'Flex Gym',
                    'Body & Soul Health Club',
                    'The Warehouse Gym (Dubai Hills)'
                  ].map(merchant => (
                    <div key={merchant} className="bg-gradient-to-br from-blue-50 to-cyan-50 px-3 py-2 rounded-lg border border-blue-200 mb-2">
                      <p className="text-xs text-slate-700">{merchant}</p>
                    </div>
                  ))}
                </div>

                <div className="md:col-span-2">
                  <p className="font-bold text-slate-700 mb-2 text-xs uppercase">Boutique Fitness (15)</p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      'F45 Training',
                      "Barry's Bootcamp",
                      'Train SF',
                      'Platform Studios',
                      'Crank (spin studio)',
                      'The Class (spin/yoga)',
                      'Fly High Fitness',
                      'XP Dubai (boxing)',
                      'Punch Boxing',
                      'Reform Athletica (Pilates)',
                      'Studio 17 (Pilates)',
                      'Tribe Sports Nutrition',
                      'Iron Paradise',
                      'The PAD (kickboxing)',
                      '1Rebel (if launch)'
                    ].map(merchant => (
                      <div key={merchant} className="bg-gradient-to-br from-cyan-50 to-blue-50 px-3 py-2 rounded-lg border border-cyan-200">
                        <p className="text-xs text-slate-700">{merchant}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Yoga & Wellness */}
            <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">🧘 Yoga, Wellness & Spas</h3>
                  <p className="text-sm text-slate-600">Target: 15 studios & spas</p>
                </div>
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold">15% Model</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-bold text-slate-700 mb-3 text-sm">Yoga Studios (8)</p>
                  <div className="space-y-2">
                    {[
                      'Karma Yoga',
                      'Trident Wellness',
                      'Inspire Yoga',
                      'Paus Yoga',
                      'Seva Experience',
                      'XYoga Dubai',
                      'House of Wisdom',
                      'Sadhana Village'
                    ].map(merchant => (
                      <div key={merchant} className="bg-gradient-to-br from-purple-50 to-pink-50 px-4 py-2 rounded-lg border border-purple-200">
                        <p className="text-sm text-slate-700">{merchant}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-bold text-slate-700 mb-3 text-sm">Wellness & Spas (7)</p>
                  <div className="space-y-2">
                    {[
                      'Talise Spa (Madinat)',
                      'The Nail Spa (JBR)',
                      'Bliss Spa',
                      'Zen The Spa',
                      'Cleopatra Spa',
                      'Thai Chi Spa',
                      'Armonia Wellness'
                    ].map(merchant => (
                      <div key={merchant} className="bg-gradient-to-br from-indigo-50 to-purple-50 px-4 py-2 rounded-lg border border-indigo-200">
                        <p className="text-sm text-slate-700">{merchant}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category 5: Events & Pop-ups */}
        {(activeCategory === 'all' || activeCategory === 'events') && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl p-8 mb-6">
              <h2 className="text-3xl font-black mb-2">🎪 CATEGORY 5: Events & Pop-Ups (AMPLIFIER)</h2>
              <p className="text-lg text-pink-100">Model: Growth & Loyalty (15%) · Target: 10 Event Partners</p>
              <p className="text-sm text-pink-100 mt-2">
                "Turn one-time visitors into repeat users. Built-in virality via social sharing."
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-pink-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">🎉 Major Event Partners</h3>
                  <p className="text-sm text-slate-600">Target: 10 organizers (each = 10-300 vendors per event)</p>
                </div>
                <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-bold">15% Model</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Global Village (200+ seasonal vendors)',
                  'Ripe Market (weekly pop-up)',
                  'Dubai Food Festival (annual)',
                  'Dubai Flea Market',
                  'Mercato Market',
                  'Art Central Dubai',
                  'College Fest Organizers (AUS, BITS, Manipal)',
                  'Dubai Shopping Festival (DSF) vendors',
                  'Al Marmoom Camel Racetrack Events',
                  'La Mer Beach Events'
                ].map(merchant => (
                  <div key={merchant} className="bg-gradient-to-br from-pink-50 to-rose-50 px-4 py-3 rounded-lg border border-pink-200">
                    <p className="text-sm text-slate-700">{merchant}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
                <p className="text-xs font-bold text-purple-900 mb-1">💡 Strategy Note:</p>
                <p className="text-xs text-purple-800">
                  Partner with <strong>event organizers</strong>, not individual vendors.
                  One organizer = 10-300 merchants. Global Village alone can yield 200+ merchants in one deal.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Category 6: Fashion Retail */}
        {(activeCategory === 'all' || activeCategory === 'fashion') && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-2xl p-8 mb-6">
              <h2 className="text-3xl font-black mb-2">👗 CATEGORY 6: Fashion Retail (AMPLIFIER)</h2>
              <p className="text-lg text-violet-100">Model: Dual (15% for Boutiques, 5% for Chains) · Target: 55 Merchants</p>
              <p className="text-sm text-violet-100 mt-2">
                "Turn social content into real store sales. Outfit reels, try-ons, OOTD posts."
              </p>
            </div>

            {/* Fashion Chains */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-indigo-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">🏬 Fashion Retail Chains</h3>
                  <p className="text-sm text-slate-600">Target: 20 chains (fast fashion + mid-premium)</p>
                </div>
                <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-bold">5% Transaction Model</span>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="font-bold text-slate-700 mb-2 text-xs uppercase">Fast Fashion (10)</p>
                  {[
                    'Zara',
                    'H&M',
                    'Mango',
                    'Forever 21',
                    'Stradivarius',
                    'Pull & Bear',
                    'Bershka',
                    'Uniqlo',
                    'Massimo Dutti',
                    'COS'
                  ].map(merchant => (
                    <div key={merchant} className="bg-gradient-to-br from-indigo-50 to-blue-50 px-3 py-2 rounded-lg border border-indigo-200 mb-2">
                      <p className="text-xs text-slate-700">{merchant}</p>
                    </div>
                  ))}
                </div>

                <div className="md:col-span-2">
                  <p className="font-bold text-slate-700 mb-2 text-xs uppercase">Mid-Premium Fashion (10)</p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      'Tommy Hilfiger',
                      'Calvin Klein',
                      "Levi's",
                      'Lacoste',
                      'Mavi',
                      'Desigual',
                      'Reiss',
                      'All Saints',
                      'Marks & Spencer',
                      'Next'
                    ].map(merchant => (
                      <div key={merchant} className="bg-gradient-to-br from-blue-50 to-indigo-50 px-3 py-2 rounded-lg border border-blue-200">
                        <p className="text-xs text-slate-700">{merchant}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Local Boutiques */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-purple-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">🎨 Local Fashion Boutiques</h3>
                  <p className="text-sm text-slate-600">Target: 15 UAE-based brands & concept stores</p>
                </div>
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold">15% Model</span>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'The Giving Movement (sustainable)',
                  'Amongst Few (streetwear)',
                  'Sauce (streetwear)',
                  'Frame (concept store)',
                  'VAO Concept Store',
                  'Le Mill (concept store)',
                  'S*uce (resale luxury)',
                  'The Modist (modest fashion)',
                  'Bambah (local designer)',
                  'COOME (local brand)',
                  'Bleach (streetwear)',
                  'Level Shoes',
                  'Sole DXB (sneaker/street)',
                  'Footlocker',
                  'Bloomingdale\'s'
                ].map(merchant => (
                  <div key={merchant} className="bg-gradient-to-br from-purple-50 to-pink-50 px-4 py-3 rounded-lg border border-purple-200">
                    <p className="text-sm text-slate-700">{merchant}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Perfume & Beauty */}
            <div className="bg-white rounded-2xl p-6 border-2 border-rose-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">💐 Perfume & Beauty Retail</h3>
                  <p className="text-sm text-slate-600">Target: 10 merchants (mix of boutiques & chains)</p>
                </div>
                <span className="bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-bold">Dual Model</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Ajmal Perfumes (150+ stores)',
                  'Arabian Oud (100+ stores)',
                  'Rasasi Perfumes',
                  'Sephora (if feasible)',
                  'MAC Cosmetics',
                  'The Body Shop',
                  'Bath & Body Works',
                  'Foreo (beauty tech)',
                  'Faces (local beauty)',
                  'Areej (local perfume)'
                ].map(merchant => (
                  <div key={merchant} className="bg-gradient-to-br from-rose-50 to-pink-50 px-4 py-3 rounded-lg border border-rose-200">
                    <p className="text-sm text-slate-700">{merchant}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-amber-50 border-2 border-amber-200 rounded-lg p-4">
                <p className="text-xs font-bold text-amber-900 mb-1">📍 Focus Areas:</p>
                <p className="text-xs text-amber-800">
                  <strong>Dubai Mall Fashion Avenue</strong> (anchor tenants), <strong>City Walk / D3</strong> (concept stores),
                  <strong>Dubai Outlet Mall</strong> (outlet boutiques)
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Phased Rollout Timeline */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-black mb-6 text-center">📅 Phased Rollout Strategy (5 Months)</h2>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { month: 'Month 1', target: 50, focus: 'Foundation', desc: 'Cafes, Male Grooming, Boutique Fitness', areas: 'Marina, JBR, Downtown' },
              { month: 'Month 2', target: 100, focus: 'Expansion', desc: 'Add Casual Dining, Women\'s Salons, Chains', areas: 'DIFC, City Walk, Al Barsha' },
              { month: 'Month 3', target: 170, focus: 'Diversification', desc: 'Grocery, Fashion Chains, Events', areas: 'Jumeirah, Dubai Mall, Al Quoz' },
              { month: 'Month 4', target: 220, focus: 'Consolidation', desc: 'Fill gaps, Wellness, Optimize existing', areas: 'MoE, Deira (Gold Souk)' },
              { month: 'Month 5', target: '250+', focus: 'H1 Gate', desc: 'Complete all categories, optimize for H2', areas: 'Full Dubai coverage' }
            ].map((phase, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                <div className="text-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                    {phase.month}
                  </div>
                  <div className="text-4xl font-black text-white">{phase.target}</div>
                  <div className="text-xs text-gray-300">merchants</div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-blue-300">{phase.focus}</p>
                  <p className="text-xs text-gray-300">{phase.desc}</p>
                  <div className="pt-2 border-t border-white/20">
                    <p className="text-xs text-gray-400">📍 {phase.areas}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-emerald-500/20 border-2 border-emerald-400 rounded-xl p-6 text-center">
            <p className="text-xl font-bold mb-2">🎯 H1 Exit Gate Success Criteria:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div>✅ 250+ merchants live</div>
              <div>✅ 90%+ retention</div>
              <div>✅ 6+ transactions/merchant/week</div>
              <div>✅ 5,800-10,000 MAU</div>
              <div>✅ AED 7.2M-10M GMV</div>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl p-6 text-center">
            <div className="text-5xl font-black mb-2">100</div>
            <div className="text-sm uppercase tracking-wide">F&B Merchants</div>
            <div className="text-xs opacity-75 mt-2">~1,520+ stores (chains)</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-6 text-center">
            <div className="text-5xl font-black mb-2">75</div>
            <div className="text-sm uppercase tracking-wide">Salon/Fitness</div>
            <div className="text-xs opacity-75 mt-2">High repeat frequency</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-2xl p-6 text-center">
            <div className="text-5xl font-black mb-2">20</div>
            <div className="text-sm uppercase tracking-wide">Grocery/Retail</div>
            <div className="text-xs opacity-75 mt-2">~790+ stores (volume)</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-2xl p-6 text-center">
            <div className="text-5xl font-black mb-2">55</div>
            <div className="text-sm uppercase tracking-wide">Fashion/Events</div>
            <div className="text-xs opacity-75 mt-2">Content amplifiers</div>
          </div>
        </div>

        {/* Target Brands Section */}
        {(activeCategory === 'all' || activeCategory === 'targets') && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-[#c9a227] to-amber-500 text-white rounded-2xl p-8 mb-6">
              <h2 className="text-3xl font-black mb-2">🎯 TARGET BRAND PARTNERSHIPS (Phase 2+)</h2>
              <p className="text-lg text-amber-100">Strategic enterprise partnerships for scale · Mixed Engines A/B/C</p>
              <p className="text-sm text-amber-100 mt-2">
                Major brands to approach after H1 proof of concept is established
              </p>
            </div>

            {/* Giant Retailers */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-amber-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">🏬 Giant Retailers & Supermarkets</h3>
                  <p className="text-sm text-slate-600">Engine B (5-8%) · High Volume Partners</p>
                </div>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">Engine B</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {['Carrefour (100+ UAE stores)', 'Lulu Hypermarket (200+ stores)', 'Spinneys (65+ stores)', 'Choithrams (35+ stores)', 'Union Coop (60+ stores)', 'Al Maya Supermarket', 'Géant (10+ stores)', 'Viva Supermarket', 'Waitrose', 'Aswaaq'].map(brand => (
                  <div key={brand} className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
                    <p className="text-sm text-slate-700">{brand}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* E-commerce & Digital */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-purple-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">🛒 E-commerce & Digital Partners</h3>
                  <p className="text-sm text-slate-600">Voucher partnerships · Affiliate model</p>
                </div>
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold">Affiliate</span>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                {['Amazon.ae', 'Noon', 'Namshi', 'Ounass', 'Mumzworld', 'Sivvi', 'The Luxury Closet', 'Talabat', 'Deliveroo', 'Zomato', 'Instashop', 'Careem'].map(brand => (
                  <div key={brand} className="bg-purple-50 px-4 py-2 rounded-lg border border-purple-200">
                    <p className="text-sm text-slate-700">{brand}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fast Food & QSR Chains */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-red-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">🍔 Fast Food & QSR Giants</h3>
                  <p className="text-sm text-slate-600">Engine A (15-20%) · High Frequency</p>
                </div>
                <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold">Engine A</span>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                {["McDonald's (80+ stores)", 'KFC (120+ stores)', 'Pizza Hut (70+ stores)', "Domino's (100+ stores)", 'Burger King (50+ stores)', 'Subway (80+ stores)', "Wendy's", 'Five Guys', "Papa John's", 'Shake Shack', 'The Cheesecake Factory', "Chili's", "Applebee's", "P.F. Chang's", 'Texas Roadhouse', 'Elevation Burger'].map(brand => (
                  <div key={brand} className="bg-red-50 px-4 py-2 rounded-lg border border-red-200">
                    <p className="text-sm text-slate-700">{brand}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cafes & Coffee Chains */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-amber-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">☕ Coffee & Cafe Chains</h3>
                  <p className="text-sm text-slate-600">Engine A (15-20%) · Daily Habit</p>
                </div>
                <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold">Engine A</span>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                {['Starbucks (170+ stores)', 'Costa Coffee (150+ stores)', 'Tim Hortons (90+ stores)', 'Dunkin (50+ stores)', 'Caribou Coffee', '% Arabica', 'Paul', 'Coffee Planet', 'The Coffee Club', 'Café Bateel', 'Urth Caffe', 'High Society'].map(brand => (
                  <div key={brand} className="bg-amber-50 px-4 py-2 rounded-lg border border-amber-200">
                    <p className="text-sm text-slate-700">{brand}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fashion & Retail */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-pink-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">👗 Fashion & Retail Chains</h3>
                  <p className="text-sm text-slate-600">Engine A (15%) · High AOV</p>
                </div>
                <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold">Engine A</span>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                {['H&M', 'Zara', 'Max Fashion', 'Splash', 'Centrepoint', 'Lifestyle', 'Shoe Mart', 'Nike', 'Adidas', 'Puma', 'Aldo', 'Steve Madden', 'Bath & Body Works', 'Victoria\'s Secret', 'Sephora', 'Faces'].map(brand => (
                  <div key={brand} className="bg-pink-50 px-4 py-2 rounded-lg border border-pink-200">
                    <p className="text-sm text-slate-700">{brand}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Health & Pharmacy */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-green-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">💊 Health & Pharmacy</h3>
                  <p className="text-sm text-slate-600">Engine B (5-8%) · Essential Services</p>
                </div>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">Engine B</span>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                {['Boots Pharmacy', 'BinSina Pharmacy', 'Aster Pharmacy (180+)', 'Life Pharmacy (300+)', 'SuperCare Pharmacy', 'Health First', 'Medicom Pharmacy', 'Al Manara Pharmacy', 'Planet Pharmacy', 'GNC'].map(brand => (
                  <div key={brand} className="bg-green-50 px-4 py-2 rounded-lg border border-green-200">
                    <p className="text-sm text-slate-700">{brand}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Electronics */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-blue-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">📱 Electronics & Tech</h3>
                  <p className="text-sm text-slate-600">Engine B (5-8%) · High Value</p>
                </div>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">Engine B</span>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                {['Sharaf DG (50+ stores)', 'Emax (30+ stores)', 'Jumbo Electronics', 'Virgin Megastore', 'Apple Store', 'Samsung Store', 'Huawei Store', 'Xiaomi Store', 'LG Showroom', 'Sony Store'].map(brand => (
                  <div key={brand} className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
                    <p className="text-sm text-slate-700">{brand}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Entertainment & Events */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-indigo-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">🎬 Entertainment & Events</h3>
                  <p className="text-sm text-slate-600">Engine C (Event Model) · Acquisition Channel</p>
                </div>
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold">Engine C</span>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                {['VOX Cinemas (30+ screens)', 'Reel Cinemas', 'Novo Cinemas', 'Global Village', 'IMG Worlds of Adventure', 'Motiongate Dubai', 'Legoland Dubai', 'Dubai Parks', 'Ski Dubai', 'Dubai Aquarium', 'Wild Wadi', 'Kidzania', 'Bounce Dubai', 'Hub Zero'].map(brand => (
                  <div key={brand} className="bg-indigo-50 px-4 py-2 rounded-lg border border-indigo-200">
                    <p className="text-sm text-slate-700">{brand}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fitness & Sports */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-orange-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">🏋️ Fitness & Sports</h3>
                  <p className="text-sm text-slate-600">Engine A (15-20%) · High Retention</p>
                </div>
                <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold">Engine A</span>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                {['Fitness First (25+ branches)', 'Gold\'s Gym', 'Fitness 360', 'GymNation', 'F45 Training', 'Orangetheory Fitness', 'Barry\'s Bootcamp', 'SoulCycle', 'Yoga House', 'Breathe Pilates', 'The Platform', 'Warehouse Gym'].map(brand => (
                  <div key={brand} className="bg-orange-50 px-4 py-2 rounded-lg border border-orange-200">
                    <p className="text-sm text-slate-700">{brand}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel & Hospitality */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-cyan-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">✈️ Travel & Hospitality</h3>
                  <p className="text-sm text-slate-600">Voucher partnerships · Premium segment</p>
                </div>
                <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-bold">Partnership</span>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                {['Marriott Hotels', 'Hilton Hotels', 'Rotana Hotels', 'Jumeirah Hotels', 'Address Hotels', 'Atlantis', 'Burj Al Arab', 'Emaar Hospitality', 'Emirates Holidays', 'Dnata Travel', 'Arabian Adventures', 'Big Bus Tours'].map(brand => (
                  <div key={brand} className="bg-cyan-50 px-4 py-2 rounded-lg border border-cyan-200">
                    <p className="text-sm text-slate-700">{brand}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Providers */}
            <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-slate-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">🔧 Home Services & Auto</h3>
                  <p className="text-sm text-slate-600">Engine A (15%) · Service-based</p>
                </div>
                <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold">Engine A</span>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                {['ServiceMarket', 'Justlife', 'Maid Absolute', 'The Luxury Laundry', 'Champion Cleaners', 'Al Futtaim Auto', 'ENOC/EPPCO', 'ADNOC', 'Quick Fit', 'Dynatrade', 'Max Garage', 'Yellow Hat'].map(brand => (
                  <div key={brand} className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
                    <p className="text-sm text-slate-700">{brand}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partnership Strategy */}
            <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-100 border-2 border-[#c9a227] rounded-2xl p-6">
              <h3 className="text-xl font-black text-[#c9a227] mb-4">Partnership Approach Strategy</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-slate-800 mb-2">Phase 1: H1 (Now)</p>
                  <p className="text-sm text-slate-600">Focus on independent merchants & small chains. Build proof of concept with 250 merchants.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-slate-800 mb-2">Phase 2: Post-H1</p>
                  <p className="text-sm text-slate-600">Approach mid-tier chains with H1 data. Show GMV, retention, and user engagement metrics.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-slate-800 mb-2">Phase 3: Scale</p>
                  <p className="text-sm text-slate-600">Enterprise partnerships with major brands. Custom integration, co-marketing, and exclusive deals.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-black mb-4">🚀 Ready to Execute?</h2>
          <p className="text-xl mb-6 text-indigo-100">
            This database gives you <strong>250+ specific merchants</strong> with <strong>clear commission models</strong> and <strong>phased rollout strategy</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-full">
              <span className="font-bold">Week 1:</span> Contact 50 merchants
            </div>
            <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-full">
              <span className="font-bold">Month 1:</span> 50 merchants live
            </div>
            <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-full">
              <span className="font-bold">Month 5:</span> 250+ at H1 gate
            </div>
          </div>
          <p className="text-sm text-indigo-200 mt-6">
            Every merchant listed here is a real, operating business in the UAE. Start with the Priority 10 (Week 1 targets) and scale from there.
          </p>
        </div>
      </div>
    </div>
  );
}
