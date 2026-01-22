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
              <p className="text-xs sm:text-sm text-gray-500">January 2025</p>
              <p className="text-xs sm:text-sm text-gray-500">Pre-Seed Round</p>
            </div>
          </div>

          {/* Executive Summary */}
          <section className="mb-6 sm:mb-8">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 bg-[#c9a227] text-white rounded text-[10px] sm:text-xs flex items-center justify-center font-bold">1</span>
              Executive Summary
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Nuqta is building the payment intelligence layer for the Gulf region. We aggregate offers, rewards,
              and payment options across banks, BNPL providers, and merchants into a single consumer interface.
              Users make smarter payment decisions and earn universal rewards. Merchants access affordable
              loyalty tools without platform dependency. We are the neutral infrastructure connecting
              a fragmented ecosystem — positioned to become essential rails for GCC consumer commerce.
            </p>
          </section>

          {/* Market Opportunity */}
          <section className="mb-6 sm:mb-8">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 bg-[#c9a227] text-white rounded text-[10px] sm:text-xs flex items-center justify-center font-bold">2</span>
              Market Opportunity
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
              The GCC represents one of the world&apos;s most attractive consumer fintech markets. Digital
              payment adoption has accelerated dramatically, yet the infrastructure remains fragmented.
              BNPL providers like Tabby and Tamara have normalized installment payments, but consumers
              lack tools to compare options. Banks offer competing card rewards that go unclaimed.
              Merchants surrender margins to delivery aggregators while losing customer relationships.
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
              <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#c9a227]">
                  <DataPoint value="$600B+" source="IMF GCC Economic Outlook, World Bank regional data" />
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500">GCC Consumer Spend</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#c9a227]">
                  <DataPoint value="70%+" source="Central Bank of UAE Digital Payments Report 2023" />
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500">Digital Payment Adoption</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#c9a227]">
                  <DataPoint value="5M+" source="Central Bank of UAE, banking penetration data" />
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500">Target Active Users</p>
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

          {/* Our Solution */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#c9a227] text-white rounded text-xs flex items-center justify-center font-bold">4</span>
              Our Solution
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nuqta provides payment intelligence that recommends the optimal payment method for every transaction —
              whether that&apos;s a specific credit card, digital wallet, or BNPL option. Users earn universal Nuqta points
              across all participating merchants, redeemable anywhere in the network. For merchants, we offer
              performance-based loyalty tools with transparent pricing and direct customer relationships.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Critically, Nuqta operates as neutral infrastructure. We don&apos;t process payments — we sit above
              the payment layer, aggregating intelligence and rewards. This neutrality is our strategic advantage:
              banks and BNPL providers cannot recommend competitors, but we can recommend everyone.
            </p>
          </section>

          {/* Current Stage */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#c9a227] text-white rounded text-xs flex items-center justify-center font-bold">5</span>
              Current Stage
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="font-semibold text-blue-900 mb-2">Pre-Launch Development</p>
              <p className="text-sm text-blue-800 leading-relaxed">
                We are actively building our MVP with a focus on Dubai as the initial market. Early merchant
                conversations are underway in high-frequency categories. Our immediate objective is validating
                repeat usage behavior and merchant ROI before pursuing scale. We are disciplined about
                avoiding vanity metrics in favor of genuine product-market fit signals.
              </p>
            </div>
          </section>

          {/* The Ask */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#c9a227] text-white rounded text-xs flex items-center justify-center font-bold">6</span>
              Investment Opportunity
            </h2>
            <div className="bg-[#0a1628] text-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-3xl font-bold text-[#c9a227]">$500,000</p>
                  <p className="text-gray-400">Pre-Seed Round</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">Convertible Note</p>
                  <p className="text-gray-400 text-sm">$5M Cap + 20% Discount</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 pt-4 border-t border-gray-700">
                <div className="text-center">
                  <p className="text-lg font-bold text-[#c9a227]">40%</p>
                  <p className="text-xs text-gray-400">Product Dev</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-[#c9a227]">30%</p>
                  <p className="text-xs text-gray-400">Merchant Ops</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-[#c9a227]">20%</p>
                  <p className="text-xs text-gray-400">Partnerships</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-[#c9a227]">10%</p>
                  <p className="text-xs text-gray-400">Reserve</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3 italic">
              Objective: Achieve seed-ready metrics including validated repeat usage, proven merchant ROI, and early partnership traction.
            </p>
          </section>

          {/* Why Now */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#c9a227] text-white rounded text-xs flex items-center justify-center font-bold">7</span>
              Why Now
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The infrastructure opportunity exists today because no one has claimed the neutral position in
              GCC payments. Banks are constrained by their competitive dynamics. BNPL providers optimize
              for their own products. Super apps build closed ecosystems. The window for an independent,
              neutral intelligence layer is open now — but it won&apos;t remain open indefinitely. Consumer
              behavior has shifted permanently toward digital payments, and the market is ready for
              infrastructure that connects rather than competes.
            </p>
          </section>

          {/* Footer */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-gray-200">
                  <Image src="/founder-photo.jpg" alt="Rejaul Karim" width={56} height={56} className="object-cover w-full h-full" />
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/rejaulkarim007/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 hover:text-[#0077b5] transition-colors inline-flex items-center gap-2">
                    Rejaul Karim
                    <svg className="w-4 h-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <p className="text-sm text-gray-500">Founder & CEO</p>
                  <a href="mailto:rejaul@nuqtaapp.com" className="text-sm text-[#c9a227] hover:underline">
                    rejaul@nuqtaapp.com
                  </a>
                </div>
              </div>
              <div className="text-right text-sm text-gray-500">
                <p>Full deck available on request</p>
                <p>Due diligence materials ready</p>
              </div>
            </div>
          </div>

          {/* Confidentiality Notice */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400 text-center">
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
              href="mailto:rejaul@nuqtaapp.com?subject=Nuqta%20Investment%20Discussion"
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
