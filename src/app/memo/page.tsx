'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// DataPoint Tooltip Component for statistics with sources
function DataPoint({
  value,
  source,
  className = ''
}: {
  value: string;
  source: string;
  className?: string;
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <span
      className={`relative cursor-help inline-flex items-start gap-0.5 ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onTouchStart={() => setShowTooltip(true)}
      onTouchEnd={() => setTimeout(() => setShowTooltip(false), 3000)}
    >
      <span>{value}</span>
      <span className="text-[0.5em] text-[#c9a227]/70 hover:text-[#c9a227] transition-colors">ⓘ</span>
      {showTooltip && (
        <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[#0a1628] border border-[#c9a227]/50 rounded-lg text-xs sm:text-sm text-white whitespace-normal max-w-[200px] sm:max-w-[280px] text-center shadow-xl font-normal">
          <span className="text-[#c9a227] font-medium">Source:</span> {source}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#c9a227]/50" />
        </span>
      )}
    </span>
  );
}

export default function InvestorMemo() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Print-friendly styles */}
      <style jsx global>{`
        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          body { background: white !important; }
          .memo-container {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .memo-content {
            box-shadow: none !important;
            border: none !important;
          }
        }
        @media screen {
          .print-only { display: none; }
        }
      `}</style>

      {/* Header Bar - Hidden on print */}
      <div className="no-print bg-[#0a1628] text-white py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 sm:w-8 sm:h-8 relative">
            <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain" />
          </div>
          <span className="font-bold text-sm sm:text-base">NUQTA</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-[#c9a227] text-[#0a1628] rounded-lg font-medium hover:bg-[#f4d35e] transition-colors text-xs sm:text-sm"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span className="hidden sm:inline">Print / Save PDF</span>
            <span className="sm:hidden">PDF</span>
          </button>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
            <span className="hidden sm:inline">Back to Site</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </div>

      {/* Memo Content */}
      <div className="memo-container max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        <div className="memo-content bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6 md:p-8 lg:p-12">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200 gap-4 sm:gap-0">
            <div>
              <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-1">Investor Memo</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">NUQTA</h1>
              <p className="text-sm sm:text-base text-gray-600">Payment Intelligence & Universal Rewards</p>
            </div>
            <div className="sm:text-right">
              <p className="text-xs sm:text-sm text-gray-500">January 2026</p>
              <p className="text-xs sm:text-sm text-gray-500">Pre-Seed Round</p>
            </div>
          </div>

          {/* What is Nuqta */}
          <section className="mb-6 sm:mb-8 bg-gradient-to-r from-[#c9a227]/10 to-[#c9a227]/5 border-l-4 border-[#c9a227] p-4 sm:p-6 rounded-r-lg">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4">What is Nuqta?</h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-base sm:text-lg font-bold text-[#c9a227] mb-2">The Elevator Pitch</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">
                  "Nuqta is Google Maps meets cashback for offline shopping. We show users where to find the best deals nearby,
                  then reward them 10% back for visiting. Merchants only pay when customers walk through their doors.
                  30+ merchants signed, launching in 7 days."
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-base sm:text-lg font-bold text-gray-900 mb-2">In Simple Terms</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Think of Nuqta as the missing rewards layer for offline shopping in the GCC. Credit cards give 1-2% cashback.
                  We give 5-10%. But unlike cards, we're a discovery platform — users <strong>search</strong> for nearby merchants,
                  <strong>save</strong> with instant offers, and <strong>earn</strong> universal coins they can spend anywhere in our network.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-base sm:text-lg font-bold text-gray-900 mb-2">Why It Matters</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  95% of offline spending in Dubai gets <strong>zero rewards</strong>. That's AED 2.4B in lost value annually.
                  Meanwhile, merchants burn AED 200-500 per customer on Google Ads with no guarantee of repeat business.
                  Nuqta fixes both problems: users get 5x better rewards than cards, merchants get guaranteed footfall at 75-85% lower CAC.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-3 border border-emerald-200">
                  <p className="text-xs font-bold text-emerald-700 uppercase mb-1">For Users</p>
                  <p className="text-sm text-emerald-900 font-semibold">10% cashback everywhere</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200">
                  <p className="text-xs font-bold text-blue-700 uppercase mb-1">For Merchants</p>
                  <p className="text-sm text-blue-900 font-semibold">15% commission, pay per sale</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 border border-purple-200">
                  <p className="text-xs font-bold text-purple-700 uppercase mb-1">For Nuqta</p>
                  <p className="text-sm text-purple-900 font-semibold">5% net margin, day 1 profitable</p>
                </div>
              </div>
            </div>
          </section>

          {/* Executive Summary */}
          <section className="mb-6 sm:mb-8">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 bg-[#c9a227] text-white rounded text-[10px] sm:text-xs flex items-center justify-center font-bold">1</span>
              Executive Summary
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
              <strong>Search. Save. Earn.</strong> Nuqta provides instant cashback (5-10%) on every offline
              purchase — cafes, salons, gyms, and more. Users search, discover, and save. Merchants get
              performance-based customer acquisition with proven ROI. With 30+ signed LOIs and launching in 7 days,
              we're building the neutral infrastructure that connects a $45B GCC market, starting with Dubai's
              offline economy.
            </p>
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200">
              <p className="text-xs font-bold text-gray-500 uppercase mb-2">The Opportunity at a Glance</p>
              <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-[#c9a227]">▸</span>
                  <span><strong>$150B GCC market</strong> (offline retail + services)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#c9a227]">▸</span>
                  <span><strong>18x LTV:CAC ratio</strong> (world-class unit economics)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#c9a227]">▸</span>
                  <span><strong>30+ merchants signed</strong> (60+ total network)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#c9a227]">▸</span>
                  <span><strong>7-day launch timeline</strong> (Jan 28, 2026)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Market Opportunity */}
          <section className="mb-6 sm:mb-8">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 bg-[#c9a227] text-white rounded text-[10px] sm:text-xs flex items-center justify-center font-bold">2</span>
              Market Opportunity (TAM/SAM/SOM)
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
              Nuqta targets the offline F&B, salon, and fitness market across the GCC, starting with UAE.
              These categories represent high-frequency, repeat-purchase behaviors where discovery meets savings.
              Unlike e-commerce aggregators, we own the search-to-transaction journey for offline spending.
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
              <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#c9a227]">
                  <DataPoint value="$150B" source="GCC Retail Market Report 2024: Total offline retail & services across 6 GCC countries" />
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500">TAM (GCC Total Market)</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#c9a227]">
                  <DataPoint value="$45B" source="GCC D2C retail + local services (F&B, Beauty, Fashion, Fitness): 30% of TAM" />
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500">SAM (GCC Market)</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#c9a227]">
                  <DataPoint value="$1.35B" source="3% market penetration in Dubai within 3 years (Phase 1)" />
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500">SOM (Dubai 3yr Target)</p>
              </div>
            </div>
          </section>

          {/* The Problem */}
          <section className="mb-6 sm:mb-8">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 bg-[#c9a227] text-white rounded text-[10px] sm:text-xs flex items-center justify-center font-bold">3</span>
              The Problem
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                <p className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Consumer Pain Points</p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Consumers manage multiple payment apps, miss card rewards, and have no visibility into
                  the optimal payment method for each purchase. Loyalty programs are fragmented across
                  dozens of apps with points that expire unused.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                <p className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Merchant Pain Points</p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Small and medium merchants pay aggregator commissions that can exceed 25% per transaction.
                  They lack affordable tools to build customer loyalty and have no ownership of customer
                  relationships or data.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-6 sm:mb-8">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 bg-[#c9a227] text-white rounded text-[10px] sm:text-xs flex items-center justify-center font-bold">4</span>
              How Nuqta Works
            </h2>

            <div className="space-y-4">
              {/* User Journey */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-500">
                <p className="text-base font-bold text-blue-900 mb-3">For Users: 30-Second Experience</p>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <p className="text-sm font-semibold text-blue-900">Search nearby deals</p>
                      <p className="text-xs text-blue-700">Open app, see cafes/salons/gyms with 5-10% cashback within 5km</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <p className="text-sm font-semibold text-blue-900">Visit & pay normally</p>
                      <p className="text-xs text-blue-700">Walk in, shop, pay with any method (cash, card, Apple Pay)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <p className="text-sm font-semibold text-blue-900">Upload receipt, get 5% instantly</p>
                      <p className="text-xs text-blue-700">Snap photo of receipt, AI verifies, coins deposited in 10 seconds</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">+</div>
                    <div>
                      <p className="text-sm font-semibold text-emerald-900">Share for +5% bonus (optional)</p>
                      <p className="text-xs text-emerald-700">Post to social with merchant tag = total 10% cashback</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Merchant Journey */}
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4 border-l-4 border-purple-500">
                <p className="text-base font-bold text-purple-900 mb-3">For Merchants: Zero-Risk Customer Acquisition</p>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <p className="text-sm font-semibold text-purple-900">Free listing on Nuqta</p>
                      <p className="text-xs text-purple-700">No setup fee, no monthly subscription, just performance commission</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <p className="text-sm font-semibold text-purple-900">Customers discover you via search</p>
                      <p className="text-xs text-purple-700">Appear in "cafes near me" searches with 10% cashback badge</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <p className="text-sm font-semibold text-purple-900">Pay only when they buy</p>
                      <p className="text-xs text-purple-700">15% commission on verified sales. If they don't buy, you pay nothing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">✓</div>
                    <div>
                      <p className="text-sm font-semibold text-emerald-900">Track ROI in real-time</p>
                      <p className="text-xs text-emerald-700">Dashboard shows new vs repeat customers, average basket size, revenue</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Money Flow */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-300">
                <p className="text-base font-bold text-gray-900 mb-3">The Money Flow (Per AED 100 Purchase)</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-white rounded p-2 border border-gray-200">
                    <span className="text-sm text-gray-700">Merchant pays commission</span>
                    <span className="text-sm font-bold text-gray-900">AED 15 (15%)</span>
                  </div>
                  <div className="flex items-center justify-between bg-emerald-50 rounded p-2 border border-emerald-200">
                    <span className="text-sm text-emerald-700">User gets instant cashback</span>
                    <span className="text-sm font-bold text-emerald-900">AED 5 (5%)</span>
                  </div>
                  <div className="flex items-center justify-between bg-blue-50 rounded p-2 border border-blue-200">
                    <span className="text-sm text-blue-700">User gets social sharing bonus</span>
                    <span className="text-sm font-bold text-blue-900">AED 5 (5%)</span>
                  </div>
                  <div className="flex items-center justify-between bg-[#c9a227]/10 rounded p-2 border border-[#c9a227]/30">
                    <span className="text-sm font-bold text-gray-900">Nuqta keeps (net margin)</span>
                    <span className="text-sm font-black text-[#c9a227]">AED 5 (5%)</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3 italic">
                  Merchant pays 15% but gets loyal customers (40% repeat rate). Users get 10% back. Nuqta keeps 5% margin. Everyone wins.
                </p>
              </div>

              {/* Strategic Position */}
              <div className="bg-gradient-to-r from-[#c9a227]/10 to-[#c9a227]/5 rounded-lg p-4 border-l-4 border-[#c9a227]">
                <p className="text-base font-bold text-gray-900 mb-2">Our Strategic Position: Neutral Infrastructure</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We don't process payments or compete with anyone. We sit <strong>above</strong> the payment layer as neutral infrastructure.
                  Banks can't recommend competitor cards. BNPL providers can't promote rival services. Deal sites create bargain hunters.
                  <strong className="text-[#c9a227]"> We connect everyone</strong> — cards, wallets, BNPL, cash — and reward loyalty, not discounts.
                </p>
              </div>
            </div>
          </section>

          {/* Unit Economics */}
          <section className="mb-6 sm:mb-8">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 bg-[#c9a227] text-white rounded text-[10px] sm:text-xs flex items-center justify-center font-bold">4.5</span>
              Unit Economics (Profitable from Day One)
            </h2>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
              <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#c9a227]">AED 30</p>
                <p className="text-[10px] sm:text-xs text-gray-500 mb-1 sm:mb-2">CAC</p>
                <p className="text-[9px] sm:text-[10px] text-gray-600 leading-tight">
                  Merchant QR: AED 10-15<br />
                  Student Ambassadors: AED 25-30
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#c9a227]">AED 540</p>
                <p className="text-[10px] sm:text-xs text-gray-500 mb-1 sm:mb-2">LTV</p>
                <p className="text-[9px] sm:text-[10px] text-gray-600 leading-tight">
                  Monthly RPU: AED 45<br />
                  12-month retention
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#c9a227]">18x</p>
                <p className="text-[10px] sm:text-xs text-gray-500 mb-1 sm:mb-2">LTV:CAC</p>
                <p className="text-[9px] sm:text-[10px] text-gray-600 leading-tight">
                  Payback &lt;1 month<br />
                  Benchmark: 5x+ excellent
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
              <p className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Defensibility</p>
              <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227] mt-0.5">✓</span>
                  <span>Cashback is merchant-funded (no VC subsidy burns)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227] mt-0.5">✓</span>
                  <span>Merchant QR distribution = AED 10-15 CAC (10x cheaper than Google Ads at AED 200+)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227] mt-0.5">✓</span>
                  <span>Habit loops drive 6 transactions/month (vs 2-3 for competitors)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227] mt-0.5">✓</span>
                  <span>Operational float improves cash flow (30-45 day redemption lag)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a227] mt-0.5">✓</span>
                  <span>No inventory risk, pure platform play</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Current Stage */}
          <section className="mb-6 sm:mb-8">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 bg-[#c9a227] text-white rounded text-[10px] sm:text-xs flex items-center justify-center font-bold">5</span>
              Current Stage
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 sm:p-4 rounded-r-lg">
              <p className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">7-Day Launch (January 28, 2026)</p>
              <ul className="text-xs sm:text-sm text-blue-800 space-y-1.5 sm:space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">✓</span>
                  <span><strong>60+ Merchant Network</strong> — 30+ signed LOIs, 30 in pipeline across Dubai Marina, Downtown, and JBR</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">✓</span>
                  <span><strong>$45B GCC Market (SAM)</strong> — D2C retail + local services (F&B, Beauty, Fashion, Fitness). GCC TAM: $150B</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">✓</span>
                  <span><strong>18x LTV:CAC Ratio</strong> — Profitable unit economics from Day 1 (AED 540 LTV ÷ AED 30 CAC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">✓</span>
                  <span><strong>Launch Timeline: January 28, 2026</strong> (5 merchants live Week 1, scale to 30 by Month 2)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* The Ask */}
          <section className="mb-6 sm:mb-8">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 bg-[#c9a227] text-white rounded text-[10px] sm:text-xs flex items-center justify-center font-bold">6</span>
              Investment Opportunity
            </h2>
            <div className="bg-[#0a1628] text-white rounded-lg p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-3 sm:mb-4">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#c9a227]">$400,000</p>
                  <p className="text-gray-400 text-sm sm:text-base">Pre-Seed Round</p>
                </div>
                <div className="sm:text-right">
                  <p className="text-base sm:text-lg font-semibold">Convertible Note</p>
                  <p className="text-gray-400 text-xs sm:text-sm">$5M Cap + 20% Discount</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-700">
                <div className="text-center">
                  <p className="text-base sm:text-lg font-bold text-[#c9a227]">50%</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">Team & Product</p>
                </div>
                <div className="text-center">
                  <p className="text-base sm:text-lg font-bold text-[#c9a227]">30%</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">Merchants</p>
                </div>
                <div className="text-center">
                  <p className="text-base sm:text-lg font-bold text-[#c9a227]">15%</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">User Acquisition</p>
                </div>
                <div className="text-center">
                  <p className="text-base sm:text-lg font-bold text-[#c9a227]">5%</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">Operations</p>
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 italic">
              Objective: Achieve seed-ready metrics including validated repeat usage, proven merchant ROI, and early partnership traction.
            </p>
          </section>

          {/* Why Now */}
          <section className="mb-6 sm:mb-8">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 bg-[#c9a227] text-white rounded text-[10px] sm:text-xs flex items-center justify-center font-bold">7</span>
              Why Now
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              The infrastructure opportunity exists today because no one has claimed the neutral position in
              GCC payments. Banks are constrained by their competitive dynamics. BNPL providers optimize
              for their own products. Super apps build closed ecosystems. The window for an independent,
              neutral intelligence layer is open now — but it won&apos;t remain open indefinitely. Consumer
              behavior has shifted permanently toward digital payments, and the market is ready for
              infrastructure that connects rather than competes.
            </p>
          </section>

          {/* Footer */}
          <div className="pt-4 sm:pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex-shrink-0 border border-gray-200">
                  <Image src="/founder-photo.jpg" alt="Rejaul Karim" width={56} height={56} className="object-cover w-full h-full" />
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/rejaulkarim007/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 hover:text-[#0077b5] transition-colors inline-flex items-center gap-2 text-sm sm:text-base">
                    Rejaul Karim
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <p className="text-xs sm:text-sm text-gray-500">Founder & CEO</p>
                  <a href="mailto:rejaul@nuqtapp.com" className="text-xs sm:text-sm text-[#c9a227] hover:underline">
                    rejaul@nuqtapp.com
                  </a>
                </div>
              </div>
              <div className="text-left sm:text-right text-xs sm:text-sm text-gray-500">
                <p>Full deck available on request</p>
                <p>Due diligence materials ready</p>
              </div>
            </div>
          </div>

          {/* Confidentiality Notice */}
          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
            <p className="text-[10px] sm:text-xs text-gray-400 text-center">
              This memo is confidential and intended for prospective investors only.
              Please do not distribute without permission.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Actions - Hidden on print */}
      <div className="no-print bg-gray-50 border-t border-gray-200 py-4 sm:py-6 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-3 sm:gap-4">
          <p className="text-gray-600 text-xs sm:text-sm text-center">
            Ready to learn more? View the full pitch deck or schedule a call.
          </p>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            <Link
              href="/"
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0a1628] text-white rounded-lg font-medium hover:bg-[#1a2a42] transition-colors text-xs sm:text-sm"
            >
              Full Deck
            </Link>
            <Link
              href="/data-room"
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0a1628] text-white rounded-lg font-medium hover:bg-[#1a2a42] transition-colors text-xs sm:text-sm"
            >
              Data Room
            </Link>
            <a
              href="mailto:rejaul@nuqtapp.com?subject=Nuqta%20Investment%20Discussion"
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#c9a227] text-[#0a1628] rounded-lg font-medium hover:bg-[#f4d35e] transition-colors text-xs sm:text-sm"
            >
              Schedule Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
