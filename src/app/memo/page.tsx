'use client';

import Image from 'next/image';
import Link from 'next/link';

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
      <div className="no-print bg-[#0a1628] text-white py-4 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 relative">
            <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain" />
          </div>
          <span className="font-bold">NUQTA</span>
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-[#0a1628] rounded-lg font-medium hover:bg-[#f4d35e] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print / Save PDF
          </button>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            Back to Site
          </Link>
        </div>
      </div>

      {/* Memo Content */}
      <div className="memo-container max-w-3xl mx-auto px-6 py-12">
        <div className="memo-content bg-white rounded-lg shadow-lg border border-gray-200 p-8 md:p-12">

          {/* Header */}
          <div className="flex items-start justify-between mb-8 pb-6 border-b border-gray-200">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Investor Memo</p>
              <h1 className="text-3xl font-bold text-gray-900">NUQTA</h1>
              <p className="text-gray-600">Payment Intelligence & Universal Rewards</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">January 2025</p>
              <p className="text-sm text-gray-500">Pre-Seed Round</p>
            </div>
          </div>

          {/* Executive Summary */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#c9a227] text-white rounded text-xs flex items-center justify-center font-bold">1</span>
              Executive Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nuqta is building the payment intelligence layer for the Gulf region. We aggregate offers, rewards,
              and payment options across banks, BNPL providers, and merchants into a single consumer interface.
              Users make smarter payment decisions and earn universal rewards. Merchants access affordable
              loyalty tools without platform dependency. We are the neutral infrastructure connecting
              a fragmented ecosystem — positioned to become essential rails for GCC consumer commerce.
            </p>
          </section>

          {/* Market Opportunity */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#c9a227] text-white rounded text-xs flex items-center justify-center font-bold">2</span>
              Market Opportunity
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The GCC represents one of the world&apos;s most attractive consumer fintech markets. Digital
              payment adoption has accelerated dramatically, yet the infrastructure remains fragmented.
              BNPL providers like Tabby and Tamara have normalized installment payments, but consumers
              lack tools to compare options. Banks offer competing card rewards that go unclaimed.
              Merchants surrender margins to delivery aggregators while losing customer relationships.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-2xl font-bold text-[#c9a227]">$600B+</p>
                <p className="text-xs text-gray-500">GCC Consumer Spend</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-2xl font-bold text-[#c9a227]">70%+</p>
                <p className="text-xs text-gray-500">Digital Payment Adoption</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-2xl font-bold text-[#c9a227]">5M+</p>
                <p className="text-xs text-gray-500">Target Active Users</p>
              </div>
            </div>
          </section>

          {/* The Problem */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#c9a227] text-white rounded text-xs flex items-center justify-center font-bold">3</span>
              The Problem
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Consumer Pain Points</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Consumers manage multiple payment apps, miss card rewards, and have no visibility into
                  the optimal payment method for each purchase. Loyalty programs are fragmented across
                  dozens of apps with points that expire unused.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Merchant Pain Points</p>
                <p className="text-sm text-gray-600 leading-relaxed">
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
                  <p className="text-gray-400 text-sm">$3M Floor / $10M Cap</p>
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
              <div>
                <p className="font-semibold text-gray-900">Rejaul Karim</p>
                <p className="text-sm text-gray-500">Founder & CEO</p>
                <a href="mailto:rejaul@nuqtaapp.com" className="text-sm text-[#c9a227] hover:underline">
                  rejaul@nuqtaapp.com
                </a>
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
      <div className="no-print bg-gray-50 border-t border-gray-200 py-6 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            Ready to learn more? View the full pitch deck or schedule a call.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Link
              href="/"
              className="px-4 py-2 bg-[#0a1628] text-white rounded-lg font-medium hover:bg-[#1a2a42] transition-colors text-sm"
            >
              Full Deck
            </Link>
            <Link
              href="/data-room"
              className="px-4 py-2 bg-[#0a1628] text-white rounded-lg font-medium hover:bg-[#1a2a42] transition-colors text-sm"
            >
              Data Room
            </Link>
            <a
              href="mailto:rejaul@nuqtaapp.com?subject=Nuqta%20Investment%20Discussion"
              className="px-4 py-2 bg-[#c9a227] text-[#0a1628] rounded-lg font-medium hover:bg-[#f4d35e] transition-colors text-sm"
            >
              Schedule Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
