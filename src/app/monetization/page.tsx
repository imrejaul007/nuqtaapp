'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  DollarSign, TrendingUp, BarChart3, PieChart, Wallet, CreditCard,
  Store, Truck, Package, Megaphone, Calendar, Plane, Server, Crown,
  Users, ShoppingCart, Coins, ArrowRight, ChevronDown, ChevronUp,
  CheckCircle, Target, Percent, Building2, Layers, Activity, Zap,
  Globe, Star, Award, Gift
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Company Monetization Models
const companyMonetization = [
  {
    id: 'nuqta',
    name: 'Nuqta Corporation',
    tagline: 'Loyalty + Social Monetization',
    icon: Crown,
    color: 'from-[#c9a227] to-amber-500',
    textColor: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]',
    description: 'Nuqta is the glue of the ecosystem. It doesn\'t charge users; it monetizes through merchants and breakage.',
    streams: [
      { name: 'Merchant Cashback Funding Fees', description: 'Merchants fund cashbacks, Nuqta takes 5-15% platform fee', potential: 'AED 25-50M/yr' },
      { name: 'Coin Breakage', description: 'Coins that expire = 100% profit. Expected 20-35% never redeemed', potential: 'AED 10-20M/yr' },
      { name: 'Sponsored Deals + Featured Spots', description: 'Merchants pay to appear at top of discovery feeds', potential: 'AED 15-25M/yr' },
      { name: 'Social Commerce Affiliate', description: 'Nuqta gets 5-12% on purchases triggered by social sharing', potential: 'AED 20-40M/yr' },
      { name: 'Merchant Subscription (Loyalty Booster)', description: 'Premium loyalty tools AED 199-1999/month', potential: 'AED 7-15M/yr' },
      { name: 'In-App Advertising', description: 'Ad revenue across 35+ Nuqta-owned apps', potential: 'AED 12-25M/yr' },
    ],
    totalPotential: 'AED 89-175M/yr',
    href: '/nuqta-corp',
  },
  {
    id: 'wasil',
    name: 'Wasil Group',
    tagline: 'GMV + Commission Engine',
    icon: Truck,
    color: 'from-orange-500 to-red-500',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500',
    description: 'This is the GMV engine. Every transaction generates multiple revenue streams.',
    streams: [
      { name: 'Commission on Orders', description: 'Restaurants, salons, groceries, fitness, home services: 8-25%', potential: 'AED 100-200M/yr' },
      { name: 'Packaging + Convenience Fee', description: 'AED 2-10 per order across all verticals', potential: 'AED 15-30M/yr' },
      { name: 'Delivery Fee', description: 'AED 0-20 depending on distance and order value', potential: 'AED 25-50M/yr' },
      { name: 'Subscription Plans (Wasil Prime)', description: 'Free delivery, special offers - recurring revenue', potential: 'AED 20-40M/yr' },
      { name: 'Cross-vertical Upsells', description: 'Dinezy → Glowzy → Funzy → every cross-sell = extra commission', potential: 'AED 15-30M/yr' },
      { name: 'Prepaid Order Float', description: 'Interest earned on prepaid wallet balances', potential: 'AED 5-10M/yr' },
    ],
    totalPotential: 'AED 180-360M/yr',
    href: '/wasil-apps',
  },
  {
    id: 'bizone',
    name: 'BizOne Technologies',
    tagline: 'Merchant SaaS + Payments',
    icon: Store,
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
    description: 'The merchant operating system that captures every business operation.',
    streams: [
      { name: 'POS Subscription', description: 'Monthly SaaS fee AED 199-2000 based on store size', potential: 'AED 30-60M/yr' },
      { name: 'Payment Gateway Fees', description: '0.25%-1.2% per transaction processed', potential: 'AED 40-80M/yr' },
      { name: 'CRM & WhatsApp Marketing Tools', description: 'Pay-per-campaign messaging and automation', potential: 'AED 10-20M/yr' },
      { name: 'Inventory AI / Insights Premium', description: 'Advanced analytics for large merchants', potential: 'AED 7-15M/yr' },
      { name: 'SaaS Upgrades', description: 'Multi-store, staff management, advanced reports', potential: 'AED 12-25M/yr' },
      { name: 'Hardware Revenue', description: 'POS terminals, printers, scanners', potential: 'AED 5-10M/yr' },
    ],
    totalPotential: 'AED 104-210M/yr',
    href: '/bizone',
  },
  {
    id: 'inventora',
    name: 'Inventora Supply Co.',
    tagline: 'Bulk Procurement Margins',
    icon: Layers,
    color: 'from-teal-500 to-cyan-600',
    textColor: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500',
    description: 'Buy at 15-30% lower rates, sell at 8-20% margin. Pure supply chain profit.',
    streams: [
      { name: 'Inventory Margin', description: 'Buy at wholesale, sell to merchants at margin: 8-20%', potential: 'AED 50-100M/yr' },
      { name: 'Delivery Fee for Bulk Orders', description: 'AED 25-100 per bulk delivery', potential: 'AED 7-15M/yr' },
      { name: 'Credit Interest', description: 'Merchants buy today, pay later - interest on credit', potential: 'AED 15-30M/yr' },
      { name: 'Monthly Inventory Subscription', description: 'Low stock alerts + auto replenishment service', potential: 'AED 5-10M/yr' },
      { name: 'Warehousing Services', description: 'Storage for 3rd party merchants', potential: 'AED 10-20M/yr' },
    ],
    totalPotential: 'AED 87-175M/yr',
    href: '/inventora',
  },
  {
    id: 'nextabizz',
    name: 'NextaBizz Holdings',
    tagline: 'B2B Marketplace Revenue',
    icon: Package,
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500',
    description: 'B2B marketplace connecting manufacturers, wholesalers, and merchants.',
    streams: [
      { name: 'Commission (5-12%)', description: 'For B2B trade marketplace purchases', potential: 'AED 40-80M/yr' },
      { name: 'SaaS Fees for Sellers', description: 'Seller dashboard subscription AED 399-1999/month', potential: 'AED 12-25M/yr' },
      { name: 'Logistics Margin (NextaShip)', description: 'B2B delivery makes 8-15% margin', potential: 'AED 20-40M/yr' },
      { name: 'Lead Generation Fee', description: 'Manufacturers pay for verified inquiries', potential: 'AED 7-15M/yr' },
      { name: 'Premium Listings', description: 'Featured products and supplier profiles', potential: 'AED 5-10M/yr' },
    ],
    totalPotential: 'AED 84-170M/yr',
    href: '/nextabizz',
  },
  {
    id: 'adzy',
    name: 'Adzy Media Network',
    tagline: 'Internal Google Ads',
    icon: Megaphone,
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500',
    description: 'Your closed-loop advertising network across 115+ apps. This alone can be a unicorn.',
    streams: [
      { name: 'Merchant Ad Spend (CPC/CPM)', description: 'Clicks, impressions across all RTMN apps', potential: 'AED 50-100M/yr' },
      { name: 'Influencer Campaign Fees', description: 'You take 20-35% cut on influencer deals', potential: 'AED 20-40M/yr' },
      { name: 'Meme Ads & Viral Content', description: 'Brands pay for meme placements', potential: 'AED 10-20M/yr' },
      { name: 'Location-based Ads', description: 'Hyperlocal campaigns with geo-targeting', potential: 'AED 12-25M/yr' },
      { name: 'Sponsored Challenges', description: 'Inside viral mini-apps and social features', potential: 'AED 7-15M/yr' },
      { name: 'Physical Media Exchange', description: 'Billboards, mall screens, transit ads', potential: 'AED 15-30M/yr' },
    ],
    totalPotential: 'AED 114-230M/yr',
    href: '/adzy',
  },
  {
    id: 'finance',
    name: 'RTMN Finance',
    tagline: 'Fintech Margins (Highest Profit)',
    icon: CreditCard,
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500',
    description: 'This is the highest margin business. Your future fintech unicorn.',
    streams: [
      { name: 'Payment Gateway (NuqtaPay)', description: '0.3-1.2% per transaction', potential: 'AED 50-100M/yr' },
      { name: 'Merchant Credit', description: '18-36% APR, 100% secured by BizOne sales data', potential: 'AED 40-80M/yr' },
      { name: 'Consumer BNPL (Qist)', description: '5-30% MDR from merchants on EMI purchases', potential: 'AED 30-60M/yr' },
      { name: 'Micro-Savings Float', description: 'Interest earned on user savings balances', potential: 'AED 10-20M/yr' },
      { name: 'FX Fees (Airzy integration)', description: '0.2-0.7% on international transactions', potential: 'AED 15-30M/yr' },
      { name: 'Investment/Brokerage Fees', description: 'Small fees on investment products', potential: 'AED 7-15M/yr' },
      { name: 'Insurance Commissions', description: 'Travel, device, delivery insurance', potential: 'AED 12-25M/yr' },
    ],
    totalPotential: 'AED 164-330M/yr',
    href: '/rtmn-finance',
  },
  {
    id: 'eventora',
    name: 'Eventora+ Entertainment',
    tagline: 'Events & Experiences',
    icon: Calendar,
    color: 'from-violet-500 to-purple-600',
    textColor: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500',
    description: 'Events bring high-value users into the ecosystem with premium spending.',
    streams: [
      { name: 'Ticketing Fee (5-15%)', description: 'Concerts, fests, expos, shows', potential: 'AED 20-40M/yr' },
      { name: 'Vendor Commission', description: 'Food stalls, artists, booths pay 10-25%', potential: 'AED 10-20M/yr' },
      { name: 'QR Check-in Solution (SaaS)', description: 'Venues, corporates pay subscription', potential: 'AED 5-10M/yr' },
      { name: 'Event Insurance', description: 'Partner with insurance companies', potential: 'AED 2-5M/yr' },
      { name: 'Campus Ambassador Program', description: 'University partnerships and activations', potential: 'AED 7-15M/yr' },
    ],
    totalPotential: 'AED 44-90M/yr',
    href: '/eventora',
  },
  {
    id: 'airzy',
    name: 'Airzy Aviation Tech',
    tagline: 'Premium Travel Monetization',
    icon: Plane,
    color: 'from-cyan-500 to-teal-600',
    textColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500',
    description: 'Airport super-app is extremely lucrative. Premium users, high spending.',
    streams: [
      { name: 'Airport Retail Commission', description: 'Duty free, dining, shopping deals', potential: 'AED 25-50M/yr' },
      { name: 'Lounge Booking Fee', description: 'Each lounge booking generates margin', potential: 'AED 10-20M/yr' },
      { name: 'Shared Taxi Commissions', description: '10-20% on airport rides', potential: 'AED 7-15M/yr' },
      { name: 'Airline Partnership Fees', description: 'Priority services, upgrades', potential: 'AED 12-25M/yr' },
      { name: 'International Payment Conversion', description: '0.3-0.7% (still cheaper than banks)', potential: 'AED 15-30M/yr' },
      { name: 'Travel Insurance', description: 'Flight and trip protection', potential: 'AED 5-10M/yr' },
    ],
    totalPotential: 'AED 74-150M/yr',
    href: '/travel-co',
  },
  {
    id: 'rabtul',
    name: 'Rabtul Technologies',
    tagline: 'Internal AWS + Stripe + Firebase',
    icon: Server,
    color: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500',
    description: 'Your internal cloud, APIs, and AI. Can also be licensed externally.',
    streams: [
      { name: 'Internal Cloud Hosting', description: 'Cost center optimization + 3rd party hosting', potential: 'AED 15-30M/yr' },
      { name: 'Messaging API Fees', description: 'SMS, email, WhatsApp per message', potential: 'AED 20-40M/yr' },
      { name: 'Developer SDK Licensing', description: 'Charged to enterprise customers', potential: 'AED 7-15M/yr' },
      { name: 'AI Model Licensing', description: 'Recommendations, fraud detection for 3rd parties', potential: 'AED 10-20M/yr' },
      { name: 'White-label Solutions', description: 'Loyalty engine for other companies', potential: 'AED 12-25M/yr' },
    ],
    totalPotential: 'AED 64-130M/yr',
    href: '/rabtul',
  },
];

// Total Revenue Summary
const totalRevenue = {
  minimum: 1000,
  maximum: 2020,
  currency: 'M',
  timeframe: 'per year at scale',
};

// Cross-Ecosystem Revenue Loops
const revenueLoops = [
  {
    name: 'Merchant Growth Loop',
    flow: 'Merchant → Adzy → Wasil → BizOne → Inventora → NextaBizz → Merchant',
    description: 'Merchant spends AED 1 on ads → gets customers in Wasil → more sales in BizOne → more inventory needed → buys from Inventora → buys raw materials via NextaBizz → back to merchant',
    multiplier: '7-10x',
  },
  {
    name: 'User Engagement Loop',
    flow: 'User → Nuqta → Wasil → Coins → Eventora+ → Airzy → Nuqta',
    description: 'User earns coins → spends → attends event → travels → comes back into Nuqta again',
    multiplier: '3-5x',
  },
  {
    name: 'Data Monetization Loop',
    flow: 'BizOne → Rabtul → Adzy → Wasil → Nuqta → Finance → BizOne',
    description: 'Data creates infinite monetization through AI-powered targeting and credit scoring',
    multiplier: 'Infinite',
  },
];

export default function MonetizationPage() {
  const [expandedCompany, setExpandedCompany] = useState<string | null>('nuqta');

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-green-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full mb-6">
            <DollarSign className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-bold">Revenue Strategy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Complete <span className="text-green-400">Monetization</span> Strategy
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            Investor-ready, revenue-maximizing model for all 10 sister companies and 115+ apps.
            This is the document that turns RTMN into a billion-dirham empire.
          </p>

          {/* Total Revenue Potential */}
          <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/30 mb-8">
            <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" /> Total Revenue Potential at Scale
            </h3>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="text-4xl sm:text-5xl font-black text-white">
                AED {totalRevenue.minimum}-{totalRevenue.maximum}{totalRevenue.currency}
              </div>
              <div className="text-slate-400 text-lg">{totalRevenue.timeframe}</div>
            </div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-400">10</div>
                <div className="text-slate-400 text-xs">Revenue Companies</div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-400">50+</div>
                <div className="text-slate-400 text-xs">Revenue Streams</div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-400">7-10x</div>
                <div className="text-slate-400 text-xs">Value Multiplier</div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-400">∞</div>
                <div className="text-slate-400 text-xs">Closed Loop</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

        {/* Company Monetization Details */}
        <h2 className="text-xl font-bold text-white mb-6">Monetization by Company</h2>

        <div className="space-y-4 sm:space-y-6">
          {companyMonetization.map((company) => (
            <div
              key={company.id}
              className={`${company.bgColor} border-2 ${company.borderColor} rounded-xl overflow-hidden`}
            >
              <button
                onClick={() => setExpandedCompany(expandedCompany === company.id ? null : company.id)}
                className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${company.color} flex items-center justify-center`}>
                    <company.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`text-base sm:text-xl font-bold ${company.textColor}`}>
                        {company.name}
                      </h3>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm">{company.tagline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right hidden sm:block">
                    <div className={`font-bold ${company.textColor}`}>{company.totalPotential}</div>
                  </div>
                  {expandedCompany === company.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </div>
              </button>

              {expandedCompany === company.id && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <p className="text-slate-300 mb-6">{company.description}</p>

                  <div className="space-y-3">
                    {company.streams.map((stream, i) => (
                      <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <DollarSign className={`w-4 h-4 ${company.textColor}`} />
                              <h4 className="text-white font-bold text-sm">{stream.name}</h4>
                            </div>
                            <p className="text-slate-400 text-sm">{stream.description}</p>
                          </div>
                          <div className={`font-bold ${company.textColor} text-sm whitespace-nowrap`}>
                            {stream.potential}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                    <span className="text-white font-bold">Total Potential</span>
                    <span className={`text-xl font-bold ${company.textColor}`}>{company.totalPotential}</span>
                  </div>

                  <Link
                    href={company.href}
                    className={`mt-4 inline-flex items-center gap-2 text-sm ${company.textColor} hover:underline`}
                  >
                    View {company.name} Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cross-Ecosystem Loops */}
        <h2 className="text-xl font-bold text-white mt-12 mb-6">Cross-Ecosystem Revenue Loops</h2>
        <p className="text-slate-400 mb-6">This is where the real magic happens - circular value creation.</p>

        <div className="space-y-4">
          {revenueLoops.map((loop, i) => (
            <div key={i} className="bg-[#c9a227]/10 rounded-xl p-6 border border-[#c9a227]/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-[#c9a227] flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  {loop.name}
                </h3>
                <span className="text-[#c9a227] font-bold text-lg">{loop.multiplier}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {loop.flow.split(' → ').map((step, j, arr) => (
                  <React.Fragment key={j}>
                    <span className="bg-slate-900/50 text-white px-3 py-1 rounded-full text-sm">
                      {step}
                    </span>
                    {j < arr.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-[#c9a227]" />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-slate-300 text-sm">{loop.description}</p>
            </div>
          ))}
        </div>

        {/* Revenue by Category */}
        <h2 className="text-xl font-bold text-white mt-12 mb-6">Revenue by Category</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { category: 'Commerce', companies: ['Wasil', 'NextaBizz'], total: 'AED 264-530M', color: 'bg-orange-500', icon: ShoppingCart },
            { category: 'SaaS', companies: ['BizOne', 'Rabtul'], total: 'AED 168-340M', color: 'bg-blue-500', icon: Server },
            { category: 'Fintech', companies: ['RTMN Finance'], total: 'AED 164-330M', color: 'bg-green-500', icon: CreditCard },
            { category: 'Advertising', companies: ['Adzy', 'Nuqta'], total: 'AED 203-405M', color: 'bg-pink-500', icon: Megaphone },
          ].map((cat, i) => (
            <div key={i} className={`rounded-xl p-4 border ${cat.color}/30`} style={{ backgroundColor: `${cat.color}10` }}>
              <cat.icon className={`w-8 h-8 mb-3`} style={{ color: cat.color.replace('bg-', '') }} />
              <h4 className="text-white font-bold">{cat.category}</h4>
              <p className="text-slate-400 text-sm mb-2">{cat.companies.join(' + ')}</p>
              <div className="text-lg font-bold" style={{ color: cat.color.replace('bg-', '') }}>{cat.total}</div>
            </div>
          ))}
        </div>

        {/* Key Takeaways */}
        <div className="mt-12 bg-green-500/10 rounded-xl p-6 border border-green-500/30">
          <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5" /> Key Investor Takeaways
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Every AED 1 spent creates AED 7-10 of ecosystem value',
              '50+ independent revenue streams across 10 companies',
              'Zero dependency on single revenue source',
              'Fintech alone can be AED 150M+ business',
              'Adzy can be GCC\'s largest closed-loop ad network',
              'Coin breakage alone is AED 10-20M pure profit',
              'Supply chain margins add 15-20% on B2B',
              'Cross-sell multiplies every transaction',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Navigation */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/value-chain" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Activity className="w-5 h-5" /> Value Chain
            </Link>
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-xl font-bold hover:bg-purple-400 transition-colors">
              <Building2 className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/rtmn-finance" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-400 transition-colors">
              <CreditCard className="w-5 h-5" /> RTMN Finance
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
