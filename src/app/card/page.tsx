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
          <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto mb-8 print:hidden">

            {/* PANEL 1 — FRONT COVER (Right-most outer panel) */}
            <div className="min-h-[800px] bg-gradient-to-br from-[#c9a227] via-[#d4ab2c] to-[#c9a227] rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl translate-y-24 -translate-x-24"></div>
              </div>

              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-[#0a1628] rounded-xl flex items-center justify-center shadow-lg">
                    <Image
                      src="/nuqta-logo.png"
                      alt="Nuqta"
                      width={44}
                      height={44}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h1 className="text-4xl font-black text-[#0a1628] leading-none tracking-tight">NUQTA</h1>
                    <p className="text-sm text-[#0a1628]/80 font-bold mt-0.5">The Rewards Layer for UAE</p>
                  </div>
                </div>

                <div className="bg-[#0a1628] text-white rounded-xl p-4 shadow-lg border-2 border-white/10">
                  <p className="text-base leading-relaxed font-bold text-center">
                    <span className="text-[#c9a227] text-4xl font-black block mb-2">10%</span>
                    rewards on everyday offline spending
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#0a1628]/20 backdrop-blur-sm text-[#0a1628] p-3 rounded-xl border-2 border-[#0a1628]/40 text-center">
                    <p className="text-2xl font-black mb-1">$200K</p>
                    <p className="text-[10px] font-bold uppercase">Pre-seed raise</p>
                  </div>
                  <div className="bg-[#0a1628]/20 backdrop-blur-sm text-[#0a1628] p-3 rounded-xl border-2 border-[#0a1628]/40 text-center">
                    <p className="text-2xl font-black mb-1">$12B</p>
                    <p className="text-[10px] font-bold uppercase">Market size</p>
                  </div>
                  <div className="bg-[#0a1628]/20 backdrop-blur-sm text-[#0a1628] p-3 rounded-xl border-2 border-[#0a1628]/40 text-center">
                    <p className="text-2xl font-black mb-1">5%</p>
                    <p className="text-[10px] font-bold uppercase">Net margin</p>
                  </div>
                  <div className="bg-[#0a1628]/20 backdrop-blur-sm text-[#0a1628] p-3 rounded-xl border-2 border-[#0a1628]/40 text-center">
                    <p className="text-xl font-black mb-1">Q1 '25</p>
                    <p className="text-[10px] font-bold uppercase">Launch date</p>
                  </div>
                </div>

                <div className="bg-white/95 text-[#0a1628] p-4 rounded-xl border-2 border-white shadow-xl">
                  <p className="text-sm font-black leading-tight text-center">
                    UAE's first universal offline rewards platform
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2 pt-2 border-t border-[#0a1628]/10">
                    <span className="text-xs font-bold">First-mover</span>
                    <span className="text-[#c9a227]">•</span>
                    <span className="text-xs font-bold">Profitable</span>
                    <span className="text-[#c9a227]">•</span>
                    <span className="text-xs font-bold">Network effects</span>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4 border-t border-[#0a1628]/20 relative z-10">
                <div className="bg-white p-3 rounded-xl inline-block shadow-xl">
                  <QRCodeSVG
                    value={websiteUrl}
                    size={80}
                    level="H"
                    includeMargin={false}
                    fgColor="#0a1628"
                    bgColor="#ffffff"
                  />
                </div>
                <p className="text-[10px] text-[#0a1628] mt-2 font-bold uppercase tracking-wider">Scan for Demo</p>
              </div>
            </div>

            {/* PANEL 2 — BACK COVER (Middle outer panel) */}
            <div className="min-h-[800px] bg-gradient-to-br from-slate-900 via-[#0d1d3a] to-slate-900 rounded-3xl p-8 flex flex-col justify-between shadow-2xl border-2 border-[#c9a227]/20">
              <div className="space-y-5">
                <div className="inline-block px-4 py-1.5 bg-red-500/20 border border-red-500/40 rounded-full">
                  <span className="text-red-400 text-xs font-bold uppercase tracking-wider">$2.4B Problem</span>
                </div>
                <h2 className="text-3xl font-bold text-white leading-tight">Offline Commerce is Broken</h2>

                <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-2 border-red-500/40 rounded-xl p-4 shadow-lg">
                  <div className="text-center mb-3">
                    <p className="text-4xl font-black text-red-400 mb-1">AED 2.4B</p>
                    <p className="text-xs font-bold text-slate-300 uppercase tracking-wide">Lost annually by UAE consumers</p>
                  </div>

                  {/* Visual bar chart showing waste */}
                  <div className="space-y-2.5 mb-3">
                    <div>
                      <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                        <span className="font-bold">Offline spending (no rewards)</span>
                        <span className="text-red-400 font-black">80%</span>
                      </div>
                      <div className="w-full bg-slate-700/30 rounded-full h-3 shadow-inner">
                        <div className="bg-gradient-to-r from-red-600 to-red-400 h-3 rounded-full shadow-lg" style={{width: '80%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                        <span className="font-bold">Loyalty points wasted</span>
                        <span className="text-red-400 font-black">63%</span>
                      </div>
                      <div className="w-full bg-slate-700/30 rounded-full h-3 shadow-inner">
                        <div className="bg-gradient-to-r from-red-600 to-red-400 h-3 rounded-full shadow-lg" style={{width: '63%'}}></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-2.5">
                    <div className="flex items-start gap-2">
                      <span className="text-red-400 text-base font-bold flex-shrink-0">×</span>
                      <p className="text-xs text-slate-200 font-semibold">Credit cards charge 2-3% fees but return nothing to shoppers</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 border-2 border-[#c9a227]/40 rounded-xl p-4 shadow-lg">
                  <p className="text-base font-bold text-white mb-3 text-center">Merchants struggle to grow profitably</p>

                  {/* Visual comparison */}
                  <div className="grid grid-cols-2 gap-2.5 mb-3">
                    <div className="bg-red-500/20 border-2 border-red-500/40 rounded-lg p-3 text-center shadow-md">
                      <p className="text-3xl font-black text-red-400 mb-1">-30%</p>
                      <p className="text-[10px] text-slate-300 font-bold uppercase">Margin lost</p>
                      <p className="text-[9px] text-slate-400">to discounts</p>
                    </div>
                    <div className="bg-red-500/20 border-2 border-red-500/40 rounded-lg p-3 text-center shadow-md">
                      <p className="text-3xl font-black text-red-400 mb-1">$0</p>
                      <p className="text-[10px] text-slate-300 font-bold uppercase">ROI guarantee</p>
                      <p className="text-[9px] text-slate-400">from paid ads</p>
                    </div>
                  </div>

                  <div className="bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-lg p-2.5">
                    <p className="text-xs text-center text-white font-bold">
                      Existing solutions hurt profitability or offer no guarantees
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#c9a227] to-[#d4ab2c] text-[#0a1628] p-4 rounded-xl shadow-lg">
                  <p className="text-base font-black">Nuqta: Universal rewards that work for everyone</p>
                </div>
              </div>

              <div>
                <div className="border-t border-[#c9a227]/20 pt-4 space-y-3">
                  <h3 className="text-xl font-bold text-white">Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-300">rejaul@nuqtaapp.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-300">nuqtaapp.com</span>
                    </div>
                  </div>

                  <div className="text-center pt-3">
                    <div className="bg-white p-3 rounded-xl inline-block shadow-lg">
                      <QRCodeSVG
                        value={websiteUrl}
                        size={90}
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

            {/* PANEL 3 — MARKET & INVESTMENT (Left outer panel) */}
            <div className="min-h-[800px] bg-gradient-to-br from-[#0a1628] via-[#0d1d3a] to-[#0a1628] rounded-3xl p-8 flex flex-col justify-between shadow-2xl border-2 border-[#c9a227]">
              <div className="space-y-5">
                <div className="inline-block px-4 py-1.5 bg-[#c9a227] rounded-full shadow-lg">
                  <span className="text-[#0a1628] text-xs font-black uppercase tracking-wider">Investment Opportunity</span>
                </div>
                <h2 className="text-3xl font-bold text-white leading-tight">Massive Market, Perfect Timing</h2>

                <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border-2 border-[#c9a227]/50 rounded-xl p-5 space-y-4 shadow-xl">
                  <div className="text-center pb-3 border-b-2 border-[#c9a227]/30">
                    <p className="text-xs text-[#c9a227] font-black uppercase mb-2 tracking-wider">UAE Retail Market</p>
                    <p className="text-5xl font-black text-white mb-2 leading-none">$60B</p>
                    <div className="inline-block bg-emerald-500/20 border border-emerald-500/40 rounded-full px-3 py-1">
                      <p className="text-xs text-emerald-300 font-bold">+8% annual growth</p>
                    </div>
                  </div>

                  {/* Visual funnel representation */}
                  <div className="relative py-2">
                    <div className="flex flex-col gap-2">
                      <div className="bg-gradient-to-r from-[#c9a227]/40 to-[#c9a227]/20 rounded-r-xl h-12 flex items-center justify-between px-4 shadow-md border-l-4 border-[#c9a227]" style={{width: '100%'}}>
                        <span className="text-sm text-white font-black">TAM: $60B</span>
                        <span className="text-xs text-[#c9a227] font-bold bg-[#0a1628]/50 px-2 py-1 rounded">100%</span>
                      </div>
                      <div className="bg-gradient-to-r from-[#c9a227]/60 to-[#c9a227]/30 rounded-r-xl h-12 flex items-center justify-between px-4 shadow-md border-l-4 border-[#c9a227]" style={{width: '70%'}}>
                        <span className="text-sm text-white font-black">SAM: $42B</span>
                        <span className="text-xs text-[#c9a227] font-bold bg-[#0a1628]/50 px-2 py-1 rounded">70%</span>
                      </div>
                      <div className="bg-gradient-to-r from-[#c9a227] to-[#d4ab2c] rounded-r-xl h-12 flex items-center justify-between px-4 shadow-xl border-l-4 border-[#c9a227]" style={{width: '40%'}}>
                        <span className="text-sm text-[#0a1628] font-black">SOM: $12B</span>
                        <span className="text-xs text-[#0a1628] font-black bg-white/80 px-2 py-1 rounded">20%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0a1628]/50 rounded-lg p-3 border border-[#c9a227]/30">
                    <p className="text-xs text-[#c9a227] font-black uppercase mb-1.5 tracking-wide">🎯 Initial Target</p>
                    <p className="text-sm text-white font-bold">Students & households earning &lt; AED 25k/mo</p>
                    <p className="text-xs text-slate-400 mt-1">Price-sensitive, high transaction frequency</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-l-4 border-blue-500 rounded-lg p-4">
                  <h3 className="text-sm font-bold text-blue-400 mb-3 uppercase tracking-wide">Competitive Edge</h3>

                  {/* Competitive comparison table */}
                  <div className="space-y-2 mb-3">
                    <div className="grid grid-cols-4 gap-1 text-[10px] font-bold text-slate-400 mb-1">
                      <div></div>
                      <div className="text-center">Nuqta</div>
                      <div className="text-center">Cards</div>
                      <div className="text-center">Smiles</div>
                    </div>

                    <div className="grid grid-cols-4 gap-1 items-center bg-slate-800/30 rounded p-1.5">
                      <span className="text-[10px] text-slate-300">Offline</span>
                      <div className="text-center">
                        <span className="text-emerald-400 font-bold">✓</span>
                      </div>
                      <div className="text-center">
                        <span className="text-red-400 font-bold">×</span>
                      </div>
                      <div className="text-center">
                        <span className="text-red-400 font-bold">×</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-1 items-center bg-slate-800/30 rounded p-1.5">
                      <span className="text-[10px] text-slate-300">Universal</span>
                      <div className="text-center">
                        <span className="text-emerald-400 font-bold">✓</span>
                      </div>
                      <div className="text-center">
                        <span className="text-red-400 font-bold">×</span>
                      </div>
                      <div className="text-center">
                        <span className="text-red-400 font-bold">×</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-1 items-center bg-slate-800/30 rounded p-1.5">
                      <span className="text-[10px] text-slate-300">10% back</span>
                      <div className="text-center">
                        <span className="text-emerald-400 font-bold">✓</span>
                      </div>
                      <div className="text-center">
                        <span className="text-slate-500 text-[9px]">1-2%</span>
                      </div>
                      <div className="text-center">
                        <span className="text-slate-500 text-[9px]">2-3%</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-blue-300 font-semibold italic bg-blue-500/10 p-2 rounded">
                    Only platform combining offline + universal + 10% rewards
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-[#c9a227]/30 pt-5 space-y-4">
                <h3 className="text-2xl font-bold text-white text-center">💰 Investment Terms</h3>
                <div className="bg-gradient-to-br from-[#c9a227] to-[#d4ab2c] rounded-xl p-6 shadow-2xl border-4 border-white/10">
                  <p className="text-6xl font-black text-[#0a1628] mb-2 text-center leading-none">$200K</p>
                  <div className="flex items-center justify-center gap-3 mt-3">
                    <div className="bg-[#0a1628]/30 px-3 py-1.5 rounded-lg">
                      <p className="text-sm text-[#0a1628] font-black">Pre-seed</p>
                    </div>
                    <div className="bg-[#0a1628]/30 px-3 py-1.5 rounded-lg">
                      <p className="text-sm text-[#0a1628] font-black">12-mo runway</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0a1628]/50 backdrop-blur-sm rounded-xl p-4 space-y-3 border-2 border-[#c9a227]/30 shadow-lg">
                  <p className="text-xs text-[#c9a227] font-black uppercase text-center tracking-wider mb-2">Use of Funds</p>

                  {/* Visual horizontal bar */}
                  <div className="w-full h-10 rounded-xl overflow-hidden shadow-lg border-2 border-slate-600/50">
                    <div className="h-full flex">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center border-r-2 border-slate-800" style={{width: '60%'}}>
                        <span className="text-sm font-black text-white drop-shadow">60%</span>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 flex items-center justify-center border-r-2 border-slate-800" style={{width: '30%'}}>
                        <span className="text-sm font-black text-white drop-shadow">30%</span>
                      </div>
                      <div className="bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center" style={{width: '10%'}}>
                        <span className="text-xs font-black text-white drop-shadow">10%</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 bg-blue-500/10 p-2 rounded-lg">
                      <div className="w-4 h-4 rounded bg-gradient-to-r from-blue-600 to-blue-500 flex-shrink-0"></div>
                      <span className="text-slate-200 font-semibold">🧑‍💻 Team & tech (2 devs)</span>
                      <span className="text-white font-black ml-auto">$120K</span>
                    </div>
                    <div className="flex items-center gap-2 bg-emerald-500/10 p-2 rounded-lg">
                      <div className="w-4 h-4 rounded bg-gradient-to-r from-emerald-600 to-emerald-500 flex-shrink-0"></div>
                      <span className="text-slate-200 font-semibold">📈 User acquisition</span>
                      <span className="text-white font-black ml-auto">$60K</span>
                    </div>
                    <div className="flex items-center gap-2 bg-purple-500/10 p-2 rounded-lg">
                      <div className="w-4 h-4 rounded bg-gradient-to-r from-purple-600 to-purple-500 flex-shrink-0"></div>
                      <span className="text-slate-200 font-semibold">🏢 Operations & legal</span>
                      <span className="text-white font-black ml-auto">$20K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BACK SIDE - 3 Inner Panels */}
        {!showFront && (
          <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto mb-8 print:hidden">

            {/* PANEL 4 — PROBLEM (Left inner panel) */}
            <div className="min-h-[800px] bg-gradient-to-br from-slate-900 via-[#0d1d3a] to-slate-900 rounded-3xl p-8 flex flex-col justify-between shadow-2xl border-2 border-[#c9a227]/20">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-red-500/20 border border-red-500/40 rounded-full">
                  <span className="text-red-400 text-xs font-bold uppercase tracking-wider">Problem</span>
                </div>
                <h2 className="text-3xl font-bold text-white leading-tight">Current Gaps</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xs font-bold text-[#c9a227] mb-2 uppercase">Users</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-red-400 text-base">×</span>
                        <span>No rewards on offline spending</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-red-400 text-base">×</span>
                        <span>Confusing cards/wallets/BNPL</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-red-400 text-base">×</span>
                        <span>Hard to redeem loyalty points</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-[#c9a227] mb-2 uppercase">Merchants</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-red-400 text-base">×</span>
                        <span>Discounts kill margins</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-red-400 text-base">×</span>
                        <span>Ads don't guarantee ROI</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-red-400 text-base">×</span>
                        <span>Marketplaces own customers</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-[#c9a227] mb-2 uppercase">Ecosystem</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-red-400 text-base">×</span>
                        <span>Siloed payments/loyalty/discovery</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-500/20 to-transparent p-4 rounded-xl border-l-2 border-red-500">
                <p className="text-sm font-semibold text-white">Offline commerce lacks intelligence & rewards</p>
              </div>
            </div>

            {/* PANEL 5 — SOLUTION & FLOW (Middle inner panel) */}
            <div className="min-h-[800px] bg-gradient-to-br from-[#0a1628] via-[#0d1d3a] to-[#0a1628] rounded-3xl p-8 flex flex-col justify-between shadow-2xl border-2 border-[#c9a227]">
              <div className="space-y-5">
                <div className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/40 rounded-full">
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">The Solution</span>
                </div>
                <h2 className="text-3xl font-bold text-white leading-tight">Simple. Rewarding. Profitable.</h2>

                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-2 border-emerald-500/50 rounded-xl p-5 shadow-xl">
                  <div className="text-center mb-3">
                    <p className="text-5xl font-black text-emerald-400 mb-2">10%</p>
                    <p className="text-sm text-white font-bold">Total rewards on every offline purchase</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="bg-emerald-500/20 rounded-lg p-2 text-center border border-emerald-500/40">
                      <p className="text-lg font-black text-white">👥</p>
                      <p className="text-[10px] text-slate-300 font-bold">Users save</p>
                    </div>
                    <div className="bg-emerald-500/20 rounded-lg p-2 text-center border border-emerald-500/40">
                      <p className="text-lg font-black text-white">🏪</p>
                      <p className="text-[10px] text-slate-300 font-bold">Merchants grow</p>
                    </div>
                    <div className="bg-[#c9a227]/30 rounded-lg p-2 text-center border-2 border-[#c9a227]/50">
                      <p className="text-lg font-black text-white">💰</p>
                      <p className="text-[10px] text-[#c9a227] font-black">Nuqta profits</p>
                    </div>
                  </div>
                  <p className="text-xs text-center text-emerald-300 mt-3 font-semibold italic bg-emerald-500/10 p-2 rounded">
                    Win-win-win: Everyone benefits from every transaction
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#c9a227] mb-3 uppercase tracking-wide text-center">🚶 User Journey (3 Simple Steps)</h3>
                  <div className="space-y-2.5">
                    {/* Step 1 - Browse */}
                    <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-transparent border-l-4 border-blue-500 rounded-lg p-3 shadow-md">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center text-base font-black flex-shrink-0 shadow-lg border-2 border-blue-400">
                        1
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white font-bold leading-tight">Browse nearby restaurants, cafes, salons</p>
                      </div>
                      <span className="text-2xl flex-shrink-0">🔍</span>
                    </div>

                    {/* Step 2 - Pay */}
                    <div className="flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-transparent border-l-4 border-purple-500 rounded-lg p-3 shadow-md">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-500 text-white flex items-center justify-center text-base font-black flex-shrink-0 shadow-lg border-2 border-purple-400">
                        2
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white font-bold leading-tight">Pay normally at merchant (any method)</p>
                      </div>
                      <span className="text-2xl flex-shrink-0">💳</span>
                    </div>

                    {/* Step 3 - Earn */}
                    <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-transparent border-l-4 border-emerald-500 rounded-lg p-3 shadow-md">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 text-white flex items-center justify-center text-base font-black flex-shrink-0 shadow-lg border-2 border-emerald-400">
                        3
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white font-bold leading-tight">Earn 5% instant + 5% when you share</p>
                      </div>
                      <span className="text-2xl flex-shrink-0">🎁</span>
                    </div>
                  </div>
                  <div className="mt-3 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-2.5 text-center">
                    <p className="text-xs text-[#c9a227] font-bold">Simple as that. No complex signup or payment changes needed.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#c9a227] mb-3 uppercase tracking-wide text-center">💰 Revenue Model (Per AED 100 sale)</h3>
                  <div className="bg-[#0a1628]/50 backdrop-blur-sm border-2 border-[#c9a227]/40 rounded-xl p-4 space-y-3 shadow-lg">
                    <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-lg p-3 border-l-4 border-[#c9a227]">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-200 font-bold">Merchant pays</span>
                        <span className="text-2xl text-white font-black">AED 15</span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1">15% commission on every transaction</p>
                    </div>

                    {/* Visual waterfall */}
                    <div className="space-y-2">
                      <p className="text-xs text-slate-400 font-bold text-center mb-2">Split 3 ways (5% each):</p>
                      <div className="w-full bg-slate-700/30 rounded-xl h-8 relative overflow-hidden shadow-inner border border-slate-600/50">
                        <div className="absolute inset-0 flex">
                          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 h-full flex items-center justify-center border-r border-slate-800" style={{width: '33.33%'}}>
                            <span className="text-xs font-black text-white drop-shadow">User 5%</span>
                          </div>
                          <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-full flex items-center justify-center border-r border-slate-800" style={{width: '33.33%'}}>
                            <span className="text-xs font-black text-white drop-shadow">Social 5%</span>
                          </div>
                          <div className="bg-gradient-to-r from-[#c9a227] to-[#d4ab2c] h-full flex items-center justify-center" style={{width: '33.34%'}}>
                            <span className="text-xs font-black text-[#0a1628] drop-shadow">Nuqta 5%</span>
                          </div>
                        </div>
                      </div>

                      {/* Legend */}
                      <div className="grid grid-cols-3 gap-1.5 text-[10px] mt-2">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-emerald-500 rounded-sm"></div>
                          <span className="text-slate-300">Instant reward</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
                          <span className="text-slate-300">Share bonus</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-[#c9a227] rounded-sm"></div>
                          <span className="text-slate-300">Platform fee</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#c9a227] to-[#d4ab2c] rounded-lg p-3 shadow-lg mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#0a1628] font-black">Nuqta net revenue</span>
                        <span className="text-2xl text-[#0a1628] font-black">AED 5</span>
                      </div>
                      <p className="text-[10px] text-[#0a1628]/80 font-bold mt-1">5% margin per transaction • Profitable day 1</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 border-2 border-[#c9a227]/40 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🪙</span>
                  <h3 className="text-sm font-bold text-[#c9a227] uppercase tracking-wide">Dual Coin System</h3>
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  <p><strong className="text-white">Nuqta Coin:</strong> Universal, spend anywhere</p>
                  <p><strong className="text-white">Brand Coin:</strong> Merchant-specific loyalty</p>
                </div>
              </div>
            </div>

            {/* PANEL 6 — TRACTION, TEAM & CLOSING (Right inner panel) */}
            <div className="min-h-[800px] bg-gradient-to-br from-slate-900 via-[#0d1d3a] to-slate-900 rounded-3xl p-8 flex flex-col justify-between shadow-2xl border-2 border-[#c9a227]/20">
              <div className="space-y-5">
                <div className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/40 rounded-full">
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Traction & Team</span>
                </div>
                <h2 className="text-3xl font-bold text-white leading-tight">Launch-Ready with Momentum</h2>

                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-2 border-emerald-500/40 rounded-xl p-4 shadow-lg">
                  <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wide mb-3">📊 Current Status</h3>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <p className="text-2xl font-black text-white">15+</p>
                      <p className="text-[10px] text-slate-300 font-semibold">Merchants onboarded</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-black text-white">3</p>
                      <p className="text-[10px] text-slate-300 font-semibold">Categories live</p>
                    </div>
                  </div>
                  <div className="bg-emerald-500/20 rounded-lg p-2 mb-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] text-slate-300 font-bold">Platform readiness</span>
                      <span className="text-emerald-400 text-xs font-black">95%</span>
                    </div>
                    <div className="w-full bg-slate-700/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 bg-purple-500/20 rounded-lg p-2">
                    <span className="text-lg">🚀</span>
                    <span className="text-sm text-white font-bold">Q1 2025 Launch</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border-2 border-[#c9a227]/40 rounded-xl p-4 shadow-lg">
                  <h3 className="text-xs font-bold text-[#c9a227] uppercase tracking-wide mb-2.5">💬 Merchant Testimonial</h3>
                  <div className="bg-[#0a1628]/50 rounded-lg p-3 mb-2">
                    <p className="text-xs text-slate-300 italic leading-relaxed mb-2">
                      "Nuqta brings customers who actually spend. We see 40% higher basket size vs. discount platforms."
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-[#c9a227] to-[#d4ab2c] rounded-full flex items-center justify-center text-[10px]">
                        ✓
                      </div>
                      <div>
                        <p className="text-[10px] text-white font-bold">Coffee Shop Owner, JLT</p>
                        <p className="text-[9px] text-slate-400">Early partner • 12mo contract</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded p-2 text-center">
                    <p className="text-xs text-emerald-400 font-bold">+40% avg basket size vs discounts</p>
                  </div>
                </div>

                <div className="bg-[#c9a227]/10 border-2 border-[#c9a227]/30 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">👨‍💼</span>
                    <h3 className="text-base font-bold text-white">Founder & Regulatory</h3>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-base text-white font-bold">Rejaul Karim, CEO</p>
                      <p className="text-sm text-slate-300 mt-1">• 8+ years product & engineering</p>
                      <p className="text-sm text-slate-300">• Built full MVP solo (tech-first)</p>
                      <p className="text-sm text-slate-300">• Deep UAE market knowledge</p>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-2 mt-2">
                      <p className="text-[10px] text-blue-300 font-bold mb-1">🏛️ Regulatory Pathway</p>
                      <p className="text-[10px] text-slate-300">UAE business license secured • Payment aggregator license in progress (Q1 '25)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 border-l-4 border-[#c9a227] rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🚀</span>
                    <h3 className="text-base font-bold text-white">Defensibility & Moats</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-[#c9a227] text-base font-bold">✓</span>
                      <p className="text-xs text-slate-300"><strong className="text-white">First-mover:</strong> 12-18mo head start vs potential competitors</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#c9a227] text-base font-bold">✓</span>
                      <p className="text-xs text-slate-300"><strong className="text-white">Network effects:</strong> Winner-takes-most marketplace dynamics</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#c9a227] text-base font-bold">✓</span>
                      <p className="text-xs text-slate-300"><strong className="text-white">Data moat:</strong> Shopping graph = superior merchant targeting</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#c9a227] text-base font-bold">✓</span>
                      <p className="text-xs text-slate-300"><strong className="text-white">Unit economics:</strong> 5% net margin = sustainable without VC subsidy</p>
                    </div>
                  </div>

                  <div className="mt-3 bg-emerald-500/20 border border-emerald-500/40 rounded-lg p-2">
                    <p className="text-[10px] text-emerald-300 font-bold text-center">
                      15% merchant commission justified: Brings quality customers, not discount hunters
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#c9a227] via-[#d4ab2c] to-[#c9a227] text-[#0a1628] p-6 rounded-xl shadow-2xl border-4 border-white/20">
                <div className="text-center mb-4">
                  <span className="text-4xl mb-2 inline-block">🤝</span>
                  <h3 className="text-xl font-black uppercase tracking-wider">Let's Build Together</h3>
                </div>
                <div className="bg-[#0a1628] text-white rounded-lg p-4 mb-3 shadow-lg">
                  <p className="text-base leading-snug font-bold text-center mb-3">
                    Join us in building the rewards infrastructure for UAE commerce
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="bg-emerald-500/20 border border-emerald-500/40 rounded p-2">
                      <p className="font-black text-emerald-400">First-mover</p>
                    </div>
                    <div className="bg-[#c9a227]/20 border border-[#c9a227]/40 rounded p-2">
                      <p className="font-black text-[#c9a227]">Profitable</p>
                    </div>
                    <div className="bg-blue-500/20 border border-blue-500/40 rounded p-2">
                      <p className="font-black text-blue-400">$12B market</p>
                    </div>
                    <div className="bg-purple-500/20 border border-purple-500/40 rounded p-2">
                      <p className="font-black text-purple-400">Q1 launch</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <p className="text-base font-black text-center mb-2">📧 rejaul@nuqtaapp.com</p>
                  <p className="text-xs font-bold text-center text-[#0a1628]/70">Response within 24 hours • Deck & financials available</p>
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
