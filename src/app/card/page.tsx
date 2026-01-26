'use client';

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function NuqtaInvestorOnePager() {
  const websiteUrl = 'https://nuqtaapp.com';
  const [showFront, setShowFront] = useState(true);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        {/* Instructions */}
        <div className="text-center mb-8 print:hidden">
          <h2 className="text-2xl font-light text-slate-800 mb-2">NUQTA — A4 VERTICAL TRI-FOLD</h2>
          <p className="text-slate-600 text-sm mb-6">
            Investor One-Pager • A4 Portrait • Fold into 3 panels • 6 total panels
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setShowFront(!showFront)}
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-3 rounded transition-all"
            >
              {showFront ? 'Show Back Side' : 'Show Front Side'}
            </button>
            <button
              onClick={() => window.print()}
              className="bg-white hover:bg-slate-50 text-slate-900 font-medium px-8 py-3 rounded border border-slate-200 transition-all"
            >
              Print Brochure
            </button>
          </div>
          <p className="text-slate-500 text-xs mt-4">
            Clean • Calm • Confident • No hype • No buzzwords • No clutter
          </p>
        </div>

        {/* FRONT SIDE - 3 Outer Panels */}
        {showFront && (
          <div className="grid grid-cols-3 gap-4 max-w-full mx-auto mb-8 print:hidden">

            {/* PANEL 1 — FRONT COVER (Right-most outer panel) */}
            <div className="aspect-[210/297] bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded-lg p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-black text-white">N</span>
                </div>

                <h1 className="text-4xl font-light text-slate-900 mb-3 leading-tight">
                  NUQTA
                </h1>
                <p className="text-base text-slate-700 mb-8 leading-relaxed">
                  Smart savings for everyday spending
                </p>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">What is Nuqta?</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Nuqta is a rewards-led commerce intelligence platform that helps users save money on offline spending and helps merchants grow through measurable loyalty — without becoming a marketplace or a bank.
                  </p>
                </div>

                <div className="space-y-2 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📍</span>
                    <span className="text-sm text-slate-600">Built for UAE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🎯</span>
                    <span className="text-sm text-slate-600">Students & employees earning &lt; AED 25k/month</span>
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-lg">
                  <p className="text-xs leading-relaxed">
                    Nuqta sits between users, merchants, and payments to make every offline transaction more rewarding.
                  </p>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-slate-200">
                <div className="bg-white p-3 rounded-lg inline-block border border-slate-200">
                  <QRCodeSVG
                    value={websiteUrl}
                    size={100}
                    level="H"
                    includeMargin={false}
                    fgColor="#0f172a"
                    bgColor="#ffffff"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">Demo / Website</p>
              </div>
            </div>

            {/* PANEL 2 — BACK COVER (Middle outer panel) */}
            <div className="aspect-[210/297] bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded-lg p-8 flex flex-col justify-between shadow-sm">
              <div>
                <h2 className="text-2xl font-light text-slate-900 mb-6">Why This Matters</h2>

                <div className="space-y-4 mb-8">
                  <div className="border-l-2 border-slate-300 pl-4">
                    <p className="text-sm text-slate-700">Offline spending has no intelligent rewards layer</p>
                  </div>
                  <div className="border-l-2 border-slate-300 pl-4">
                    <p className="text-sm text-slate-700">Discounts destroy merchant margins</p>
                  </div>
                  <div className="border-l-2 border-slate-300 pl-4">
                    <p className="text-sm text-slate-700">Ads are expensive and unpredictable</p>
                  </div>
                  <div className="border-l-2 border-slate-300 pl-4">
                    <p className="text-sm text-slate-700">Loyalty is fragmented and unused</p>
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-lg mb-8">
                  <p className="text-sm font-medium">→ Nuqta fixes this with a universal rewards layer.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-light text-slate-900 mb-4 border-t border-slate-200 pt-6">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-slate-600">rejaul@nuqtaapp.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm text-slate-600">+971 XX XXX XXXX</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span className="text-sm text-slate-600">nuqtaapp.com</span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="bg-white p-3 rounded-lg inline-block border border-slate-200">
                    <QRCodeSVG
                      value={websiteUrl}
                      size={80}
                      level="H"
                      includeMargin={false}
                      fgColor="#0f172a"
                      bgColor="#ffffff"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* PANEL 3 — QUICK SNAPSHOT (Left outer panel) */}
            <div className="aspect-[210/297] bg-slate-900 text-white rounded-lg p-8 flex flex-col justify-between shadow-sm">
              <div>
                <h2 className="text-2xl font-light mb-8 border-b border-slate-700 pb-4">Nuqta at a Glance</h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">💰</span>
                    <div>
                      <p className="text-sm font-medium">5% cashback on every transaction</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📲</span>
                    <div>
                      <p className="text-sm font-medium">+5% cashback for social sharing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🪙</span>
                    <div>
                      <p className="text-sm font-medium">1 Nuqta Coin = 1 AED</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🏪</span>
                    <div>
                      <p className="text-sm font-medium">Merchant-funded (no user fees)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="text-sm font-medium">Hyperlocal, offline-first</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">⚡</span>
                    <div>
                      <p className="text-sm font-medium">Profitable per transaction</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-6">
                <h3 className="text-lg font-light mb-4">Status</h3>
                <div className="space-y-2">
                  <div className="bg-white/10 rounded p-3">
                    <p className="text-sm">✓ App 95% ready</p>
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <p className="text-sm">✓ Launching now</p>
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <p className="text-sm">→ Fundraising post-validation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BACK SIDE - 3 Inner Panels */}
        {!showFront && (
          <div className="grid grid-cols-3 gap-4 max-w-full mx-auto mb-8 print:hidden">

            {/* PANEL 4 — PROBLEM (Left inner panel) */}
            <div className="aspect-[210/297] bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded-lg p-8 flex flex-col shadow-sm">
              <h2 className="text-2xl font-light text-slate-900 mb-6">The Problem</h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">Users</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="pl-4 border-l-2 border-slate-200">No rewards on daily offline spending</li>
                    <li className="pl-4 border-l-2 border-slate-200">Confusing cards, wallets, BNPL offers</li>
                    <li className="pl-4 border-l-2 border-slate-200">Loyalty points are hard to redeem</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">Merchants</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="pl-4 border-l-2 border-slate-200">Discounts kill margins</li>
                    <li className="pl-4 border-l-2 border-slate-200">Ads don't guarantee ROI</li>
                    <li className="pl-4 border-l-2 border-slate-200">Marketplaces own customers</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">Ecosystem</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="pl-4 border-l-2 border-slate-200">Payments, loyalty, and discovery are siloed</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-4 rounded-lg mt-auto">
                <p className="text-sm font-medium">→ Offline commerce lacks an intelligence & rewards layer.</p>
              </div>
            </div>

            {/* PANEL 5 — SOLUTION & FLOW (Middle inner panel) */}
            <div className="aspect-[210/297] bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded-lg p-8 flex flex-col shadow-sm">
              <h2 className="text-2xl font-light text-slate-900 mb-6">The Nuqta Solution</h2>

              <p className="text-sm text-slate-600 mb-8 leading-relaxed">
                Nuqta adds a universal rewards & savings layer on top of offline commerce.
              </p>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">User Flow</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                    <p className="text-sm text-slate-600">Discover nearby merchants & offers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                    <p className="text-sm text-slate-600">Pay normally</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                    <p className="text-sm text-slate-600">Earn 5% cashback</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                    <p className="text-sm text-slate-600">Share → earn +5% cashback</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                    <p className="text-sm text-slate-600">Track savings in one wallet</p>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 mt-auto">
                <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">Coins</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <p><strong>Nuqta Coin</strong> → universal, AED-value</p>
                  <p><strong>Brand Coin</strong> → merchant-specific loyalty</p>
                </div>
                <p className="text-xs text-slate-500 mt-3 italic">Simple. Transparent. Cash-like.</p>
              </div>
            </div>

            {/* PANEL 6 — BUSINESS MODEL, GTM & MOAT (Right inner panel) */}
            <div className="aspect-[210/297] bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded-lg p-8 flex flex-col shadow-sm">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-light text-slate-900 mb-4">Business Model</h2>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">Merchant-funded</p>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                        <span className="text-slate-600">Merchant pays</span>
                        <span className="font-semibold text-slate-900">15% of GMV</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-600">
                        <span>→ User cashback</span>
                        <span>5%</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-600">
                        <span>→ Social incentive</span>
                        <span>5%</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-900 font-semibold">
                        <span>→ Nuqta revenue</span>
                        <span>5%</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-3 italic">
                      If user doesn't share → Nuqta keeps the extra 5%.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-slate-900 mb-4">Go-To-Market</h2>
                  <p className="text-sm text-slate-600 mb-3">Focused</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="pl-4 border-l-2 border-slate-200">Only 3 channels</li>
                    <li className="pl-4 border-l-2 border-slate-200">Daily habit loops (retention)</li>
                    <li className="pl-4 border-l-2 border-slate-200">Merchant QR distribution (low CAC)</li>
                    <li className="pl-4 border-l-2 border-slate-200">Student ambassadors (viral growth)</li>
                  </ul>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mt-3">
                    <p className="text-xs text-slate-600">
                      <strong>Events as accelerators</strong><br/>
                      Register for event → earn 100 Nuqta Coins<br/>
                      Redeem on AED 500+ spend
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-lg">
                  <h3 className="text-sm font-semibold mb-2 uppercase tracking-wide">Competitive Moat</h3>
                  <p className="text-xs leading-relaxed">
                    Neutral intelligence + aligned incentives + time-compounded offline behavioral data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Print Layout */}
        <style>{`
          @media print {
            @page {
              size: A4 portrait;
              margin: 8mm;
            }
            body {
              margin: 0;
              padding: 0;
            }
            .print-side {
              display: grid !important;
              grid-template-columns: repeat(3, 1fr);
              gap: 4mm;
              width: 100%;
              page-break-after: always;
            }
            .print-panel {
              height: 280mm;
              padding: 6mm;
              box-sizing: border-box;
              break-inside: avoid;
            }
          }
        `}</style>

        <div className="hidden print:block">
          {/* Print Front Side */}
          <div className="print-side">
            <div className="print-panel bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-black text-white">N</span>
              </div>
              <h1 className="text-3xl font-light text-slate-900 mb-2">NUQTA</h1>
              <p className="text-sm text-slate-700 mb-6">Smart savings for everyday spending</p>
              <h3 className="text-xs font-semibold text-slate-900 mb-2 uppercase">What is Nuqta?</h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Nuqta is a rewards-led commerce intelligence platform that helps users save money on offline spending and helps merchants grow through measurable loyalty — without becoming a marketplace or a bank.
              </p>
              <div className="space-y-1 mb-4 text-xs text-slate-600">
                <p>📍 Built for UAE</p>
                <p>🎯 Students & employees &lt; AED 25k/month</p>
              </div>
              <div className="bg-slate-900 text-white p-3 rounded text-xs mb-4">
                Nuqta sits between users, merchants, and payments to make every offline transaction more rewarding.
              </div>
              <div className="text-center mt-auto pt-4 border-t border-slate-200">
                <div className="bg-white p-2 rounded inline-block border border-slate-200">
                  <QRCodeSVG value={websiteUrl} size={80} level="H" />
                </div>
              </div>
            </div>

            <div className="print-panel bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded">
              <h2 className="text-xl font-light text-slate-900 mb-4">Why This Matters</h2>
              <div className="space-y-2 mb-6 text-xs">
                <div className="border-l-2 border-slate-300 pl-3">
                  <p className="text-slate-700">Offline spending has no intelligent rewards layer</p>
                </div>
                <div className="border-l-2 border-slate-300 pl-3">
                  <p className="text-slate-700">Discounts destroy merchant margins</p>
                </div>
                <div className="border-l-2 border-slate-300 pl-3">
                  <p className="text-slate-700">Ads are expensive and unpredictable</p>
                </div>
                <div className="border-l-2 border-slate-300 pl-3">
                  <p className="text-slate-700">Loyalty is fragmented and unused</p>
                </div>
              </div>
              <div className="bg-slate-900 text-white p-3 rounded mb-6 text-xs">
                → Nuqta fixes this with a universal rewards layer.
              </div>
              <h3 className="text-base font-light text-slate-900 mb-3 border-t border-slate-200 pt-4">Contact</h3>
              <div className="space-y-2 text-xs text-slate-600">
                <p>📧 rejaul@nuqtaapp.com</p>
                <p>📞 +971 XX XXX XXXX</p>
                <p>🌐 nuqtaapp.com</p>
              </div>
            </div>

            <div className="print-panel bg-slate-900 text-white rounded">
              <h2 className="text-xl font-light mb-6 border-b border-slate-700 pb-3">Nuqta at a Glance</h2>
              <div className="space-y-3 mb-6 text-xs">
                <p>💰 5% cashback on every transaction</p>
                <p>📲 +5% cashback for social sharing</p>
                <p>🪙 1 Nuqta Coin = 1 AED</p>
                <p>🏪 Merchant-funded (no user fees)</p>
                <p>📍 Hyperlocal, offline-first</p>
                <p>⚡ Profitable per transaction</p>
              </div>
              <div className="border-t border-slate-700 pt-4">
                <h3 className="text-base font-light mb-3">Status</h3>
                <div className="space-y-2 text-xs">
                  <div className="bg-white/10 rounded p-2"><p>✓ App 95% ready</p></div>
                  <div className="bg-white/10 rounded p-2"><p>✓ Launching now</p></div>
                  <div className="bg-white/10 rounded p-2"><p>→ Fundraising post-validation</p></div>
                </div>
              </div>
            </div>
          </div>

          {/* Print Back Side */}
          <div className="print-side">
            <div className="print-panel bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded">
              <h2 className="text-xl font-light text-slate-900 mb-4">The Problem</h2>
              <div className="space-y-4 text-xs">
                <div>
                  <h3 className="text-xs font-semibold text-slate-900 mb-2 uppercase">Users</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li className="pl-3 border-l-2 border-slate-200">No rewards on daily offline spending</li>
                    <li className="pl-3 border-l-2 border-slate-200">Confusing cards, wallets, BNPL offers</li>
                    <li className="pl-3 border-l-2 border-slate-200">Loyalty points are hard to redeem</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-900 mb-2 uppercase">Merchants</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li className="pl-3 border-l-2 border-slate-200">Discounts kill margins</li>
                    <li className="pl-3 border-l-2 border-slate-200">Ads don't guarantee ROI</li>
                    <li className="pl-3 border-l-2 border-slate-200">Marketplaces own customers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-900 mb-2 uppercase">Ecosystem</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li className="pl-3 border-l-2 border-slate-200">Payments, loyalty, and discovery are siloed</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-900 text-white p-3 rounded mt-4 text-xs">
                → Offline commerce lacks an intelligence & rewards layer.
              </div>
            </div>

            <div className="print-panel bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded">
              <h2 className="text-xl font-light text-slate-900 mb-4">The Nuqta Solution</h2>
              <p className="text-xs text-slate-600 mb-4">
                Nuqta adds a universal rewards & savings layer on top of offline commerce.
              </p>
              <h3 className="text-xs font-semibold text-slate-900 mb-3 uppercase">User Flow</h3>
              <div className="space-y-2 text-xs mb-4">
                <p className="text-slate-600">1. Discover nearby merchants & offers</p>
                <p className="text-slate-600">2. Pay normally</p>
                <p className="text-slate-600">3. Earn 5% cashback</p>
                <p className="text-slate-600">4. Share → earn +5% cashback</p>
                <p className="text-slate-600">5. Track savings in one wallet</p>
              </div>
              <div className="border border-slate-200 rounded p-3 text-xs">
                <h3 className="text-xs font-semibold text-slate-900 mb-2 uppercase">Coins</h3>
                <p className="text-slate-600 mb-1"><strong>Nuqta Coin</strong> → universal, AED-value</p>
                <p className="text-slate-600"><strong>Brand Coin</strong> → merchant-specific loyalty</p>
                <p className="text-slate-500 mt-2 italic">Simple. Transparent. Cash-like.</p>
              </div>
            </div>

            <div className="print-panel bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded">
              <h2 className="text-xl font-light text-slate-900 mb-3">Business Model</h2>
              <p className="text-xs text-slate-600 mb-2">Merchant-funded</p>
              <div className="bg-slate-50 border border-slate-200 rounded p-3 mb-4 text-xs">
                <p className="font-semibold mb-2">Merchant pays 15% of GMV</p>
                <p className="text-slate-600">→ User cashback: 5%</p>
                <p className="text-slate-600">→ Social incentive: 5%</p>
                <p className="text-slate-900 font-semibold">→ Nuqta revenue: 5%</p>
              </div>
              <h2 className="text-xl font-light text-slate-900 mb-2">Go-To-Market</h2>
              <ul className="space-y-1 text-xs text-slate-600 mb-3">
                <li className="pl-3 border-l-2 border-slate-200">Only 3 channels</li>
                <li className="pl-3 border-l-2 border-slate-200">Daily habit loops (retention)</li>
                <li className="pl-3 border-l-2 border-slate-200">Merchant QR distribution (low CAC)</li>
                <li className="pl-3 border-l-2 border-slate-200">Student ambassadors (viral growth)</li>
              </ul>
              <div className="bg-slate-900 text-white p-3 rounded text-xs">
                <h3 className="font-semibold mb-1 uppercase">Competitive Moat</h3>
                <p className="leading-relaxed">Neutral intelligence + aligned incentives + time-compounded offline behavioral data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
