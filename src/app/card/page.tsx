'use client';

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function NuqtaInvestorOnePager() {
  const websiteUrl = 'https://nuqtaapp.com';
  const [showFront, setShowFront] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        {/* Instructions */}
        <div className="text-center mb-8 print:hidden">
          <h2 className="text-3xl font-light text-slate-900 mb-3 tracking-tight">NUQTA</h2>
          <p className="text-slate-600 text-sm mb-6 font-light">
            A4 Vertical Tri-Fold Investor One-Pager
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setShowFront(!showFront)}
              className="bg-slate-900 hover:bg-slate-800 text-white font-light px-10 py-3.5 rounded-md transition-all tracking-wide text-sm"
            >
              {showFront ? 'View Back Side' : 'View Front Side'}
            </button>
            <button
              onClick={() => window.print()}
              className="bg-white hover:bg-slate-50 text-slate-900 font-light px-10 py-3.5 rounded-md border border-slate-300 transition-all tracking-wide text-sm"
            >
              Print Brochure
            </button>
          </div>
          <p className="text-slate-400 text-xs mt-5 font-light tracking-wider">
            CLEAN • CALM • CONFIDENT
          </p>
        </div>

        {/* FRONT SIDE - 3 Outer Panels */}
        {showFront && (
          <div className="grid grid-cols-3 gap-6 max-w-full mx-auto mb-8 print:hidden">

            {/* PANEL 1 — FRONT COVER (Right-most outer panel) */}
            <div className="aspect-[210/297] bg-white border-2 border-slate-200 rounded-2xl p-10 flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <span className="text-3xl font-black text-white">N</span>
                </div>

                <h1 className="text-5xl font-extralight text-slate-900 mb-4 leading-tight tracking-tight">
                  NUQTA
                </h1>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
                  Smart savings for everyday spending
                </p>

                <div className="mb-10">
                  <h3 className="text-xs font-semibold text-slate-900 mb-4 uppercase tracking-widest">What is Nuqta?</h3>
                  <p className="text-sm text-slate-700 leading-loose font-light">
                    Nuqta is a rewards-led commerce intelligence platform that helps users save money on offline spending and helps merchants grow through measurable loyalty — without becoming a marketplace or a bank.
                  </p>
                </div>

                <div className="space-y-3 mb-10">
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-base">📍</div>
                    <span className="text-sm font-light">Built for UAE</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-base">🎯</div>
                    <span className="text-sm font-light">Students & employees &lt; AED 25k/mo</span>
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-5 rounded-xl shadow-lg">
                  <p className="text-xs leading-loose font-light">
                    Nuqta sits between users, merchants, and payments to make every offline transaction more rewarding.
                  </p>
                </div>
              </div>

              <div className="text-center pt-8 border-t-2 border-slate-100 mt-8">
                <div className="bg-white p-4 rounded-xl inline-block border-2 border-slate-200 shadow-sm">
                  <QRCodeSVG
                    value={websiteUrl}
                    size={110}
                    level="H"
                    includeMargin={false}
                    fgColor="#0f172a"
                    bgColor="#ffffff"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-3 uppercase tracking-wider font-light">Demo / Website</p>
              </div>
            </div>

            {/* PANEL 2 — BACK COVER (Middle outer panel) */}
            <div className="aspect-[210/297] bg-white border-2 border-slate-200 rounded-2xl p-10 flex flex-col justify-between shadow-xl">
              <div>
                <h2 className="text-3xl font-extralight text-slate-900 mb-8 tracking-tight">Why This Matters</h2>

                <div className="space-y-5 mb-10">
                  <div className="border-l-4 border-slate-300 pl-5 py-1">
                    <p className="text-sm text-slate-700 font-light leading-relaxed">Offline spending has no intelligent rewards layer</p>
                  </div>
                  <div className="border-l-4 border-slate-300 pl-5 py-1">
                    <p className="text-sm text-slate-700 font-light leading-relaxed">Discounts destroy merchant margins</p>
                  </div>
                  <div className="border-l-4 border-slate-300 pl-5 py-1">
                    <p className="text-sm text-slate-700 font-light leading-relaxed">Ads are expensive and unpredictable</p>
                  </div>
                  <div className="border-l-4 border-slate-300 pl-5 py-1">
                    <p className="text-sm text-slate-700 font-light leading-relaxed">Loyalty is fragmented and unused</p>
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-5 rounded-xl mb-10 shadow-lg">
                  <p className="text-sm font-light leading-relaxed">→ Nuqta fixes this with a universal rewards layer.</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-extralight text-slate-900 mb-6 border-t-2 border-slate-100 pt-8 tracking-tight">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700 font-light pt-2">rejaul@nuqtaapp.com</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700 font-light pt-2">+971 XX XXX XXXX</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700 font-light pt-2">nuqtaapp.com</span>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="bg-white p-4 rounded-xl inline-block border-2 border-slate-200 shadow-sm">
                    <QRCodeSVG
                      value={websiteUrl}
                      size={90}
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
            <div className="aspect-[210/297] bg-slate-900 text-white rounded-2xl p-10 flex flex-col justify-between shadow-2xl">
              <div>
                <h2 className="text-3xl font-extralight mb-10 pb-6 border-b border-slate-700 tracking-tight">Nuqta at a Glance</h2>

                <div className="space-y-5 mb-10">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-white/20 transition-colors">💰</div>
                    <p className="text-sm font-light leading-relaxed pt-2">5% cashback on every transaction</p>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-white/20 transition-colors">📲</div>
                    <p className="text-sm font-light leading-relaxed pt-2">+5% cashback for social sharing</p>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-white/20 transition-colors">🪙</div>
                    <p className="text-sm font-light leading-relaxed pt-2">1 Nuqta Coin = 1 AED</p>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-white/20 transition-colors">🏪</div>
                    <p className="text-sm font-light leading-relaxed pt-2">Merchant-funded (no user fees)</p>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-white/20 transition-colors">📍</div>
                    <p className="text-sm font-light leading-relaxed pt-2">Hyperlocal, offline-first</p>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-white/20 transition-colors">⚡</div>
                    <p className="text-sm font-light leading-relaxed pt-2">Profitable per transaction</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-8">
                <h3 className="text-2xl font-extralight mb-6 tracking-tight">Status</h3>
                <div className="space-y-3">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                    <p className="text-sm font-light">✓ App 95% ready</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                    <p className="text-sm font-light">✓ Launching now</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                    <p className="text-sm font-light">→ Fundraising post-validation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BACK SIDE - 3 Inner Panels */}
        {!showFront && (
          <div className="grid grid-cols-3 gap-6 max-w-full mx-auto mb-8 print:hidden">

            {/* PANEL 4 — PROBLEM (Left inner panel) */}
            <div className="aspect-[210/297] bg-white border-2 border-slate-200 rounded-2xl p-10 flex flex-col shadow-xl">
              <h2 className="text-3xl font-extralight text-slate-900 mb-8 tracking-tight">The Problem</h2>

              <div className="space-y-8 mb-10">
                <div>
                  <h3 className="text-xs font-semibold text-slate-900 mb-4 uppercase tracking-widest">Users</h3>
                  <ul className="space-y-3 text-sm text-slate-700 font-light">
                    <li className="pl-5 border-l-4 border-slate-200 py-1 leading-relaxed">No rewards on daily offline spending</li>
                    <li className="pl-5 border-l-4 border-slate-200 py-1 leading-relaxed">Confusing cards, wallets, BNPL offers</li>
                    <li className="pl-5 border-l-4 border-slate-200 py-1 leading-relaxed">Loyalty points are hard to redeem</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-slate-900 mb-4 uppercase tracking-widest">Merchants</h3>
                  <ul className="space-y-3 text-sm text-slate-700 font-light">
                    <li className="pl-5 border-l-4 border-slate-200 py-1 leading-relaxed">Discounts kill margins</li>
                    <li className="pl-5 border-l-4 border-slate-200 py-1 leading-relaxed">Ads don't guarantee ROI</li>
                    <li className="pl-5 border-l-4 border-slate-200 py-1 leading-relaxed">Marketplaces own customers</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-slate-900 mb-4 uppercase tracking-widest">Ecosystem</h3>
                  <ul className="space-y-3 text-sm text-slate-700 font-light">
                    <li className="pl-5 border-l-4 border-slate-200 py-1 leading-relaxed">Payments, loyalty, and discovery are siloed</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-5 rounded-xl mt-auto shadow-lg">
                <p className="text-sm font-light leading-relaxed">→ Offline commerce lacks an intelligence & rewards layer.</p>
              </div>
            </div>

            {/* PANEL 5 — SOLUTION & FLOW (Middle inner panel) */}
            <div className="aspect-[210/297] bg-white border-2 border-slate-200 rounded-2xl p-10 flex flex-col shadow-xl">
              <h2 className="text-3xl font-extralight text-slate-900 mb-8 tracking-tight">The Nuqta Solution</h2>

              <p className="text-sm text-slate-700 mb-10 leading-loose font-light">
                Nuqta adds a universal rewards & savings layer on top of offline commerce.
              </p>

              <div className="mb-10">
                <h3 className="text-xs font-semibold text-slate-900 mb-6 uppercase tracking-widest">User Flow</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-semibold flex-shrink-0 shadow-sm">1</div>
                    <p className="text-sm text-slate-700 font-light pt-1 leading-relaxed">Discover nearby merchants & offers</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-semibold flex-shrink-0 shadow-sm">2</div>
                    <p className="text-sm text-slate-700 font-light pt-1 leading-relaxed">Pay normally</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-semibold flex-shrink-0 shadow-sm">3</div>
                    <p className="text-sm text-slate-700 font-light pt-1 leading-relaxed">Earn 5% cashback</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-semibold flex-shrink-0 shadow-sm">4</div>
                    <p className="text-sm text-slate-700 font-light pt-1 leading-relaxed">Share → earn +5% cashback</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-semibold flex-shrink-0 shadow-sm">5</div>
                    <p className="text-sm text-slate-700 font-light pt-1 leading-relaxed">Track savings in one wallet</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-slate-200 rounded-xl p-5 mt-auto bg-slate-50">
                <h3 className="text-xs font-semibold text-slate-900 mb-4 uppercase tracking-widest">Coins</h3>
                <div className="space-y-3 text-sm text-slate-700 font-light">
                  <p><strong className="font-medium">Nuqta Coin</strong> → universal, AED-value</p>
                  <p><strong className="font-medium">Brand Coin</strong> → merchant-specific loyalty</p>
                </div>
                <p className="text-xs text-slate-500 mt-4 italic font-light">Simple. Transparent. Cash-like.</p>
              </div>
            </div>

            {/* PANEL 6 — BUSINESS MODEL, GTM & MOAT (Right inner panel) */}
            <div className="aspect-[210/297] bg-white border-2 border-slate-200 rounded-2xl p-10 flex flex-col shadow-xl">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-extralight text-slate-900 mb-6 tracking-tight">Business Model</h2>
                  <p className="text-sm text-slate-700 mb-6 font-light">Merchant-funded</p>

                  <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-5">
                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between items-center pb-3 border-b-2 border-slate-200">
                        <span className="text-slate-700 font-light">Merchant pays</span>
                        <span className="font-medium text-slate-900">15% of GMV</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-700 font-light">
                        <span>→ User cashback</span>
                        <span>5%</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-700 font-light">
                        <span>→ Social incentive</span>
                        <span>5%</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-900 font-medium">
                        <span>→ Nuqta revenue</span>
                        <span>5%</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-4 italic font-light leading-relaxed">
                      If user doesn't share → Nuqta keeps the extra 5%.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-extralight text-slate-900 mb-6 tracking-tight">Go-To-Market</h2>
                  <p className="text-sm text-slate-700 mb-5 font-light">Focused</p>
                  <ul className="space-y-3 text-sm text-slate-700 font-light">
                    <li className="pl-5 border-l-4 border-slate-200 py-1 leading-relaxed">Only 3 channels</li>
                    <li className="pl-5 border-l-4 border-slate-200 py-1 leading-relaxed">Daily habit loops (retention)</li>
                    <li className="pl-5 border-l-4 border-slate-200 py-1 leading-relaxed">Merchant QR distribution (low CAC)</li>
                    <li className="pl-5 border-l-4 border-slate-200 py-1 leading-relaxed">Student ambassadors (viral growth)</li>
                  </ul>

                  <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-4 mt-5">
                    <p className="text-xs text-slate-700 font-light leading-loose">
                      <strong className="font-medium">Events as accelerators</strong><br/>
                      Register for event → earn 100 Nuqta Coins<br/>
                      Redeem on AED 500+ spend
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-5 rounded-xl shadow-lg">
                  <h3 className="text-xs font-semibold mb-3 uppercase tracking-widest">Competitive Moat</h3>
                  <p className="text-xs leading-loose font-light">
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
              padding: 8mm;
              box-sizing: border-box;
              break-inside: avoid;
            }
          }
        `}</style>

        <div className="hidden print:block">
          {/* Print Front Side */}
          <div className="print-side">
            <div className="print-panel bg-white border-2 border-slate-200 rounded-xl">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl font-black text-white">N</span>
              </div>
              <h1 className="text-4xl font-extralight text-slate-900 mb-3 tracking-tight">NUQTA</h1>
              <p className="text-base text-slate-600 mb-8 font-light">Smart savings for everyday spending</p>
              <h3 className="text-xs font-semibold text-slate-900 mb-3 uppercase tracking-wider">What is Nuqta?</h3>
              <p className="text-xs text-slate-700 mb-6 leading-loose font-light">
                Nuqta is a rewards-led commerce intelligence platform that helps users save money on offline spending and helps merchants grow through measurable loyalty — without becoming a marketplace or a bank.
              </p>
              <div className="space-y-2 mb-6 text-xs text-slate-700 font-light">
                <p>📍 Built for UAE</p>
                <p>🎯 Students & employees &lt; AED 25k/mo</p>
              </div>
              <div className="bg-slate-900 text-white p-4 rounded-lg text-xs mb-6 font-light leading-loose">
                Nuqta sits between users, merchants, and payments to make every offline transaction more rewarding.
              </div>
              <div className="text-center mt-auto pt-6 border-t-2 border-slate-100">
                <div className="bg-white p-3 rounded-lg inline-block border-2 border-slate-200">
                  <QRCodeSVG value={websiteUrl} size={90} level="H" />
                </div>
                <p className="text-xs text-slate-500 mt-2 uppercase tracking-wider">Demo / Website</p>
              </div>
            </div>

            <div className="print-panel bg-white border-2 border-slate-200 rounded-xl">
              <h2 className="text-2xl font-extralight text-slate-900 mb-6 tracking-tight">Why This Matters</h2>
              <div className="space-y-3 mb-8 text-xs">
                <div className="border-l-4 border-slate-300 pl-4 py-1">
                  <p className="text-slate-700 font-light leading-relaxed">Offline spending has no intelligent rewards layer</p>
                </div>
                <div className="border-l-4 border-slate-300 pl-4 py-1">
                  <p className="text-slate-700 font-light leading-relaxed">Discounts destroy merchant margins</p>
                </div>
                <div className="border-l-4 border-slate-300 pl-4 py-1">
                  <p className="text-slate-700 font-light leading-relaxed">Ads are expensive and unpredictable</p>
                </div>
                <div className="border-l-4 border-slate-300 pl-4 py-1">
                  <p className="text-slate-700 font-light leading-relaxed">Loyalty is fragmented and unused</p>
                </div>
              </div>
              <div className="bg-slate-900 text-white p-4 rounded-lg mb-8 text-xs font-light">
                → Nuqta fixes this with a universal rewards layer.
              </div>
              <h3 className="text-xl font-extralight text-slate-900 mb-4 border-t-2 border-slate-100 pt-6 tracking-tight">Contact</h3>
              <div className="space-y-2 text-xs text-slate-700 font-light">
                <p>📧 rejaul@nuqtaapp.com</p>
                <p>📞 +971 XX XXX XXXX</p>
                <p>🌐 nuqtaapp.com</p>
              </div>
              <div className="mt-6 text-center">
                <div className="bg-white p-3 rounded-lg inline-block border-2 border-slate-200">
                  <QRCodeSVG value={websiteUrl} size={70} level="H" />
                </div>
              </div>
            </div>

            <div className="print-panel bg-slate-900 text-white rounded-xl">
              <h2 className="text-2xl font-extralight mb-8 pb-4 border-b border-slate-700 tracking-tight">Nuqta at a Glance</h2>
              <div className="space-y-3 mb-8 text-xs font-light">
                <p>💰 5% cashback on every transaction</p>
                <p>📲 +5% cashback for social sharing</p>
                <p>🪙 1 Nuqta Coin = 1 AED</p>
                <p>🏪 Merchant-funded (no user fees)</p>
                <p>📍 Hyperlocal, offline-first</p>
                <p>⚡ Profitable per transaction</p>
              </div>
              <div className="border-t border-slate-700 pt-6">
                <h3 className="text-xl font-extralight mb-4 tracking-tight">Status</h3>
                <div className="space-y-2 text-xs font-light">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/10"><p>✓ App 95% ready</p></div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/10"><p>✓ Launching now</p></div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/10"><p>→ Fundraising post-validation</p></div>
                </div>
              </div>
            </div>
          </div>

          {/* Print Back Side */}
          <div className="print-side">
            <div className="print-panel bg-white border-2 border-slate-200 rounded-xl">
              <h2 className="text-2xl font-extralight text-slate-900 mb-6 tracking-tight">The Problem</h2>
              <div className="space-y-6 text-xs">
                <div>
                  <h3 className="text-xs font-semibold text-slate-900 mb-3 uppercase tracking-wider">Users</h3>
                  <ul className="space-y-2 text-slate-700 font-light">
                    <li className="pl-4 border-l-4 border-slate-200 py-1">No rewards on daily offline spending</li>
                    <li className="pl-4 border-l-4 border-slate-200 py-1">Confusing cards, wallets, BNPL offers</li>
                    <li className="pl-4 border-l-4 border-slate-200 py-1">Loyalty points are hard to redeem</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-900 mb-3 uppercase tracking-wider">Merchants</h3>
                  <ul className="space-y-2 text-slate-700 font-light">
                    <li className="pl-4 border-l-4 border-slate-200 py-1">Discounts kill margins</li>
                    <li className="pl-4 border-l-4 border-slate-200 py-1">Ads don't guarantee ROI</li>
                    <li className="pl-4 border-l-4 border-slate-200 py-1">Marketplaces own customers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-900 mb-3 uppercase tracking-wider">Ecosystem</h3>
                  <ul className="space-y-2 text-slate-700 font-light">
                    <li className="pl-4 border-l-4 border-slate-200 py-1">Payments, loyalty, discovery are siloed</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-900 text-white p-4 rounded-lg mt-6 text-xs font-light">
                → Offline commerce lacks an intelligence & rewards layer.
              </div>
            </div>

            <div className="print-panel bg-white border-2 border-slate-200 rounded-xl">
              <h2 className="text-2xl font-extralight text-slate-900 mb-6 tracking-tight">The Nuqta Solution</h2>
              <p className="text-xs text-slate-700 mb-6 font-light leading-loose">
                Nuqta adds a universal rewards & savings layer on top of offline commerce.
              </p>
              <h3 className="text-xs font-semibold text-slate-900 mb-4 uppercase tracking-wider">User Flow</h3>
              <div className="space-y-2 text-xs mb-6 font-light">
                <p className="text-slate-700">1. Discover nearby merchants & offers</p>
                <p className="text-slate-700">2. Pay normally</p>
                <p className="text-slate-700">3. Earn 5% cashback</p>
                <p className="text-slate-700">4. Share → earn +5% cashback</p>
                <p className="text-slate-700">5. Track savings in one wallet</p>
              </div>
              <div className="border-2 border-slate-200 rounded-lg p-4 text-xs bg-slate-50">
                <h3 className="text-xs font-semibold text-slate-900 mb-3 uppercase tracking-wider">Coins</h3>
                <p className="text-slate-700 mb-2 font-light"><strong className="font-medium">Nuqta Coin</strong> → universal, AED-value</p>
                <p className="text-slate-700 font-light"><strong className="font-medium">Brand Coin</strong> → merchant-specific loyalty</p>
                <p className="text-slate-500 mt-3 italic font-light">Simple. Transparent. Cash-like.</p>
              </div>
            </div>

            <div className="print-panel bg-white border-2 border-slate-200 rounded-xl">
              <h2 className="text-2xl font-extralight text-slate-900 mb-4 tracking-tight">Business Model</h2>
              <p className="text-xs text-slate-700 mb-4 font-light">Merchant-funded</p>
              <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-4 mb-6 text-xs">
                <p className="font-medium mb-3">Merchant pays 15% of GMV</p>
                <p className="text-slate-700 font-light">→ User cashback: 5%</p>
                <p className="text-slate-700 font-light">→ Social incentive: 5%</p>
                <p className="text-slate-900 font-medium">→ Nuqta revenue: 5%</p>
              </div>
              <h2 className="text-2xl font-extralight text-slate-900 mb-3 tracking-tight">Go-To-Market</h2>
              <ul className="space-y-2 text-xs text-slate-700 mb-4 font-light">
                <li className="pl-4 border-l-4 border-slate-200 py-1">Only 3 channels</li>
                <li className="pl-4 border-l-4 border-slate-200 py-1">Daily habit loops (retention)</li>
                <li className="pl-4 border-l-4 border-slate-200 py-1">Merchant QR distribution (low CAC)</li>
                <li className="pl-4 border-l-4 border-slate-200 py-1">Student ambassadors (viral growth)</li>
              </ul>
              <div className="bg-slate-900 text-white p-4 rounded-lg text-xs">
                <h3 className="font-semibold mb-2 uppercase tracking-wider">Competitive Moat</h3>
                <p className="font-light leading-loose">Neutral intelligence + aligned incentives + time-compounded offline behavioral data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
