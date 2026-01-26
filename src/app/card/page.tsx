'use client';

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Image from 'next/image';

export default function NuqtaInvestorOnePager() {
  const websiteUrl = 'https://nuqtaapp.com';
  const [showFront, setShowFront] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0d1d3a] to-[#0a1628] flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        {/* Instructions */}
        <div className="text-center mb-10 print:hidden">
          <div className="inline-flex items-center gap-3 mb-4">
            <Image
              src="/nuqta-logo.png"
              alt="Nuqta"
              width={50}
              height={50}
              className="rounded-xl"
            />
            <h2 className="text-4xl font-bold text-white tracking-tight">NUQTA</h2>
          </div>
          <p className="text-slate-300 text-sm mb-8 font-light">
            A4 Vertical Tri-Fold Investor One-Pager
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setShowFront(!showFront)}
              className="bg-[#c9a227] hover:bg-[#b89020] text-[#0a1628] font-semibold px-12 py-4 rounded-xl transition-all shadow-lg hover:shadow-[#c9a227]/50 hover:scale-105"
            >
              {showFront ? 'View Back Side →' : '← View Front Side'}
            </button>
            <button
              onClick={() => window.print()}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-12 py-4 rounded-xl border-2 border-[#c9a227]/30 transition-all hover:border-[#c9a227]"
            >
              🖨️ Print Brochure
            </button>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 px-6 py-2 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-full">
            <span className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest">Premium Design</span>
          </div>
        </div>

        {/* FRONT SIDE - 3 Outer Panels */}
        {showFront && (
          <div className="grid grid-cols-3 gap-8 max-w-full mx-auto mb-8 print:hidden">

            {/* PANEL 1 — FRONT COVER (Right-most outer panel) */}
            <div className="aspect-[210/297] bg-gradient-to-br from-[#c9a227] via-[#d4ab2c] to-[#c9a227] rounded-3xl p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl translate-y-24 -translate-x-24"></div>
              </div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-[#0a1628] rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                  <Image
                    src="/nuqta-logo.png"
                    alt="Nuqta"
                    width={60}
                    height={60}
                    className="rounded-xl"
                  />
                </div>

                <h1 className="text-6xl font-black text-[#0a1628] mb-4 leading-none tracking-tight">
                  NUQTA
                </h1>
                <p className="text-xl text-[#0a1628]/80 mb-12 leading-relaxed font-semibold">
                  Smart savings for everyday spending
                </p>

                <div className="bg-[#0a1628] text-white rounded-2xl p-6 mb-10 shadow-xl">
                  <h3 className="text-xs font-bold mb-4 uppercase tracking-widest text-[#c9a227]">What is Nuqta?</h3>
                  <p className="text-sm leading-loose font-light">
                    A rewards-led commerce intelligence platform helping users save on offline spending while helping merchants grow through measurable loyalty.
                  </p>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3 text-[#0a1628]">
                    <div className="w-10 h-10 rounded-xl bg-[#0a1628]/10 flex items-center justify-center text-lg font-semibold">📍</div>
                    <span className="text-sm font-semibold">Built for UAE</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#0a1628]">
                    <div className="w-10 h-10 rounded-xl bg-[#0a1628]/10 flex items-center justify-center text-lg font-semibold">🎯</div>
                    <span className="text-sm font-semibold">Target: Students & employees &lt; AED 25k/mo</span>
                  </div>
                </div>

                <div className="bg-[#0a1628]/20 backdrop-blur-sm text-[#0a1628] p-5 rounded-2xl border-2 border-[#0a1628]/30">
                  <p className="text-xs leading-loose font-bold">
                    Nuqta sits between users, merchants, and payments to make every offline transaction more rewarding.
                  </p>
                </div>
              </div>

              <div className="text-center pt-10 border-t-2 border-[#0a1628]/20 mt-10 relative z-10">
                <div className="bg-white p-5 rounded-2xl inline-block shadow-2xl">
                  <QRCodeSVG
                    value={websiteUrl}
                    size={120}
                    level="H"
                    includeMargin={false}
                    fgColor="#0a1628"
                    bgColor="#ffffff"
                  />
                </div>
                <p className="text-xs text-[#0a1628] mt-4 font-bold uppercase tracking-widest">Scan for Demo</p>
              </div>
            </div>

            {/* PANEL 2 — BACK COVER (Middle outer panel) */}
            <div className="aspect-[210/297] bg-gradient-to-br from-slate-900 via-[#0d1d3a] to-slate-900 rounded-3xl p-12 flex flex-col justify-between shadow-2xl border-2 border-[#c9a227]/20">
              <div>
                <div className="inline-block px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/40 rounded-full mb-6">
                  <span className="text-[#c9a227] text-xs font-bold uppercase tracking-widest">The Problem</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-10 leading-tight">Why This Matters</h2>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-[#c9a227] mt-2 group-hover:scale-150 transition-transform"></div>
                    <p className="text-base text-slate-300 font-light leading-relaxed">Offline spending has no intelligent rewards layer</p>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-[#c9a227] mt-2 group-hover:scale-150 transition-transform"></div>
                    <p className="text-base text-slate-300 font-light leading-relaxed">Discounts destroy merchant margins</p>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-[#c9a227] mt-2 group-hover:scale-150 transition-transform"></div>
                    <p className="text-base text-slate-300 font-light leading-relaxed">Ads are expensive and unpredictable</p>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-[#c9a227] mt-2 group-hover:scale-150 transition-transform"></div>
                    <p className="text-base text-slate-300 font-light leading-relaxed">Loyalty is fragmented and unused</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#c9a227] to-[#d4ab2c] text-[#0a1628] p-6 rounded-2xl shadow-xl">
                  <p className="text-base font-bold leading-relaxed">→ Nuqta fixes this with a universal rewards layer.</p>
                </div>
              </div>

              <div>
                <div className="border-t-2 border-[#c9a227]/20 pt-10">
                  <h3 className="text-2xl font-bold text-white mb-8">Contact</h3>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a227]/20 transition-colors">
                        <svg className="w-6 h-6 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-300 font-light">rejaul@nuqtaapp.com</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a227]/20 transition-colors">
                        <svg className="w-6 h-6 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-300 font-light">nuqtaapp.com</span>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <div className="bg-white p-4 rounded-2xl inline-block shadow-xl">
                      <QRCodeSVG
                        value={websiteUrl}
                        size={100}
                        level="H"
                        includeMargin={false}
                        fgColor="#0a1628"
                        bgColor="#ffffff"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PANEL 3 — QUICK SNAPSHOT (Left outer panel) */}
            <div className="aspect-[210/297] bg-gradient-to-br from-[#0a1628] via-[#0d1d3a] to-[#0a1628] rounded-3xl p-12 flex flex-col justify-between shadow-2xl border-2 border-[#c9a227]">
              <div>
                <div className="inline-block px-4 py-2 bg-[#c9a227] rounded-full mb-6">
                  <span className="text-[#0a1628] text-xs font-black uppercase tracking-widest">At a Glance</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-12 leading-tight">Key Features</h2>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#c9a227]/5 border border-[#c9a227]/20 hover:bg-[#c9a227]/10 hover:border-[#c9a227]/40 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">💰</div>
                    <div>
                      <p className="text-base font-semibold text-white mb-1">5% cashback</p>
                      <p className="text-xs text-slate-400 font-light">On every transaction</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#c9a227]/5 border border-[#c9a227]/20 hover:bg-[#c9a227]/10 hover:border-[#c9a227]/40 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">📲</div>
                    <div>
                      <p className="text-base font-semibold text-white mb-1">+5% bonus</p>
                      <p className="text-xs text-slate-400 font-light">For social sharing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#c9a227]/5 border border-[#c9a227]/20 hover:bg-[#c9a227]/10 hover:border-[#c9a227]/40 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">🪙</div>
                    <div>
                      <p className="text-base font-semibold text-white mb-1">1 Coin = 1 AED</p>
                      <p className="text-xs text-slate-400 font-light">Simple value</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#c9a227]/5 border border-[#c9a227]/20 hover:bg-[#c9a227]/10 hover:border-[#c9a227]/40 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">🏪</div>
                    <div>
                      <p className="text-base font-semibold text-white mb-1">Merchant-funded</p>
                      <p className="text-xs text-slate-400 font-light">No user fees</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#c9a227]/5 border border-[#c9a227]/20 hover:bg-[#c9a227]/10 hover:border-[#c9a227]/40 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">⚡</div>
                    <div>
                      <p className="text-base font-semibold text-white mb-1">Profitable</p>
                      <p className="text-xs text-slate-400 font-light">Per transaction</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-[#c9a227]/20 pt-8">
                <h3 className="text-2xl font-bold text-white mb-6">Status</h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent backdrop-blur-sm rounded-xl p-4 border-l-4 border-[#c9a227]">
                    <p className="text-base font-semibold text-white">✓ App 95% ready</p>
                  </div>
                  <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent backdrop-blur-sm rounded-xl p-4 border-l-4 border-[#c9a227]">
                    <p className="text-base font-semibold text-white">✓ Launching now</p>
                  </div>
                  <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent backdrop-blur-sm rounded-xl p-4 border-l-4 border-[#c9a227]">
                    <p className="text-base font-semibold text-white">→ Fundraising post-validation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BACK SIDE - 3 Inner Panels */}
        {!showFront && (
          <div className="grid grid-cols-3 gap-8 max-w-full mx-auto mb-8 print:hidden">

            {/* PANEL 4 — PROBLEM (Left inner panel) */}
            <div className="aspect-[210/297] bg-gradient-to-br from-slate-900 via-[#0d1d3a] to-slate-900 rounded-3xl p-12 flex flex-col shadow-2xl border-2 border-[#c9a227]/20">
              <div className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/40 rounded-full mb-6">
                <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Challenges</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-10 leading-tight">The Problem</h2>

              <div className="space-y-10 mb-auto">
                <div>
                  <h3 className="text-xs font-bold text-[#c9a227] mb-5 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-[#c9a227]"></span> Users
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm text-slate-300 font-light leading-relaxed">
                      <span className="text-red-400 mt-1">×</span>
                      <span>No rewards on daily offline spending</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300 font-light leading-relaxed">
                      <span className="text-red-400 mt-1">×</span>
                      <span>Confusing cards, wallets, BNPL offers</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300 font-light leading-relaxed">
                      <span className="text-red-400 mt-1">×</span>
                      <span>Loyalty points are hard to redeem</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-[#c9a227] mb-5 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-[#c9a227]"></span> Merchants
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm text-slate-300 font-light leading-relaxed">
                      <span className="text-red-400 mt-1">×</span>
                      <span>Discounts kill margins</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300 font-light leading-relaxed">
                      <span className="text-red-400 mt-1">×</span>
                      <span>Ads don't guarantee ROI</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300 font-light leading-relaxed">
                      <span className="text-red-400 mt-1">×</span>
                      <span>Marketplaces own customers</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-[#c9a227] mb-5 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-[#c9a227]"></span> Ecosystem
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm text-slate-300 font-light leading-relaxed">
                      <span className="text-red-400 mt-1">×</span>
                      <span>Payments, loyalty, and discovery are siloed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-500/20 to-transparent p-6 rounded-2xl mt-10 border-l-4 border-red-500">
                <p className="text-base font-semibold text-white leading-relaxed">→ Offline commerce lacks an intelligence & rewards layer.</p>
              </div>
            </div>

            {/* PANEL 5 — SOLUTION & FLOW (Middle inner panel) */}
            <div className="aspect-[210/297] bg-gradient-to-br from-[#0a1628] via-[#0d1d3a] to-[#0a1628] rounded-3xl p-12 flex flex-col shadow-2xl border-2 border-[#c9a227]">
              <div className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 rounded-full mb-6">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Solution</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-10 leading-tight">How Nuqta Works</h2>

              <p className="text-sm text-slate-300 mb-12 leading-loose font-light">
                Nuqta adds a universal rewards & savings layer on top of offline commerce.
              </p>

              <div className="mb-12">
                <h3 className="text-xs font-bold text-[#c9a227] mb-8 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-[#c9a227]"></span> User Flow
                </h3>
                <div className="space-y-5">
                  {[
                    { num: '1', text: 'Discover nearby merchants & offers' },
                    { num: '2', text: 'Pay normally' },
                    { num: '3', text: 'Earn 5% cashback' },
                    { num: '4', text: 'Share → earn +5% cashback' },
                    { num: '5', text: 'Track savings in one wallet' }
                  ].map((step) => (
                    <div key={step.num} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a227] to-[#d4ab2c] text-[#0a1628] flex items-center justify-center text-sm font-black flex-shrink-0 shadow-lg">
                        {step.num}
                      </div>
                      <p className="text-sm text-slate-300 font-light pt-2 leading-relaxed">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 border-2 border-[#c9a227]/30 rounded-2xl p-6 mt-auto">
                <h3 className="text-xs font-bold text-[#c9a227] mb-5 uppercase tracking-widest">Coins</h3>
                <div className="space-y-3 text-sm text-slate-300 font-light">
                  <p><strong className="font-semibold text-white">Nuqta Coin</strong> → universal, AED-value</p>
                  <p><strong className="font-semibold text-white">Brand Coin</strong> → merchant-specific loyalty</p>
                </div>
                <p className="text-xs text-[#c9a227] mt-5 italic font-light">Simple. Transparent. Cash-like.</p>
              </div>
            </div>

            {/* PANEL 6 — BUSINESS MODEL, GTM & MOAT (Right inner panel) */}
            <div className="aspect-[210/297] bg-gradient-to-br from-slate-900 via-[#0d1d3a] to-slate-900 rounded-3xl p-12 flex flex-col shadow-2xl border-2 border-[#c9a227]/20">
              <div className="space-y-10">
                <div>
                  <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-full mb-6">
                    <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Economics</span>
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-8 leading-tight">Business Model</h2>
                  <p className="text-sm text-slate-300 mb-8 font-light">Merchant-funded</p>

                  <div className="bg-gradient-to-br from-[#c9a227]/10 to-transparent border-2 border-[#c9a227]/30 rounded-2xl p-6">
                    <div className="space-y-5 text-sm">
                      <div className="flex justify-between items-center pb-4 border-b-2 border-[#c9a227]/20">
                        <span className="text-slate-300 font-light">Merchant pays</span>
                        <span className="font-bold text-white text-lg">15% of GMV</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-300 font-light">
                        <span>→ User cashback</span>
                        <span className="text-emerald-400 font-semibold">5%</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-300 font-light">
                        <span>→ Social incentive</span>
                        <span className="text-emerald-400 font-semibold">5%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white font-semibold">→ Nuqta revenue</span>
                        <span className="text-[#c9a227] font-bold text-lg">5%</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-5 italic font-light leading-relaxed">
                      If user doesn't share → Nuqta keeps the extra 5%.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-8 leading-tight">Go-To-Market</h2>
                  <p className="text-sm text-slate-300 mb-6 font-light">Focused approach</p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm text-slate-300 font-light leading-relaxed">
                      <span className="text-[#c9a227] mt-1">✓</span>
                      <span>Only 3 channels</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300 font-light leading-relaxed">
                      <span className="text-[#c9a227] mt-1">✓</span>
                      <span>Daily habit loops (retention)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300 font-light leading-relaxed">
                      <span className="text-[#c9a227] mt-1">✓</span>
                      <span>Merchant QR distribution (low CAC)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300 font-light leading-relaxed">
                      <span className="text-[#c9a227] mt-1">✓</span>
                      <span>Student ambassadors (viral growth)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-[#c9a227] to-[#d4ab2c] text-[#0a1628] p-6 rounded-2xl shadow-xl">
                  <h3 className="text-xs font-black mb-3 uppercase tracking-widest">Competitive Moat</h3>
                  <p className="text-sm leading-loose font-semibold">
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
              print-color-adjust: exact;
              -webkit-print-color-adjust: exact;
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
          {/* Print versions would go here - simplified for print */}
          <div className="text-center text-white py-20">
            <p className="text-lg">Print functionality optimized for A4 format</p>
            <p className="text-sm text-slate-400 mt-2">Please use browser print dialog</p>
          </div>
        </div>
      </div>
    </div>
  );
}
