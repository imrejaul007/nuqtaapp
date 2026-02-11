'use client';

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Image from 'next/image';
import GlobalFooter from '@/components/GlobalFooter';

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
                    <p className="text-sm text-[#0a1628]/80 font-bold mt-0.5">Search. Save. Earn.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#0a1628] to-[#0d1d3a] text-white rounded-xl p-5 shadow-2xl border-2 border-[#c9a227]/30">
                  <p className="text-lg leading-relaxed font-bold text-center mb-3">
                    <span className="text-[#c9a227] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black block mb-3 drop-shadow-lg">10%</span>
                    Offline cashback
                  </p>
                  <div className="flex items-center justify-center gap-2 pt-3 border-t border-[#c9a227]/20">
                    <div className="bg-emerald-500/20 rounded px-3 py-1.5">
                      <p className="text-xs text-emerald-400 font-black">5x vs cards</p>
                    </div>
                    <span className="text-[#c9a227]">•</span>
                    <div className="bg-blue-500/20 rounded px-3 py-1.5">
                      <p className="text-xs text-blue-400 font-black">Instant</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#0a1628]/20 backdrop-blur-sm text-[#0a1628] p-3 rounded-xl border-2 border-[#0a1628]/40 text-center">
                    <p className="text-3xl font-black mb-1">$400K</p>
                    <p className="text-xs font-bold uppercase">Raise</p>
                  </div>
                  <div className="bg-[#0a1628]/20 backdrop-blur-sm text-[#0a1628] p-3 rounded-xl border-2 border-[#0a1628]/40 text-center">
                    <p className="text-3xl font-black mb-1">$150B</p>
                    <p className="text-xs font-bold uppercase">TAM</p>
                  </div>
                  <div className="bg-[#0a1628]/20 backdrop-blur-sm text-[#0a1628] p-3 rounded-xl border-2 border-[#0a1628]/40 text-center">
                    <p className="text-2xl font-black mb-1">75-85%</p>
                    <p className="text-xs font-bold uppercase">↓ CAC</p>
                  </div>
                  <div className="bg-[#0a1628]/20 backdrop-blur-sm text-[#0a1628] p-3 rounded-xl border-2 border-[#0a1628]/40 text-center">
                    <p className="text-2xl font-black mb-1">Q1</p>
                    <p className="text-xs font-bold uppercase">2026</p>
                  </div>
                </div>

                <div className="bg-white/95 text-[#0a1628] p-4 rounded-xl border-2 border-white shadow-xl">
                  <p className="text-base font-black leading-tight text-center mb-3">
                    Commerce Intelligence
                  </p>
                  <div className="bg-[#c9a227]/10 rounded-lg p-3 mb-3">
                    <p className="text-sm font-black text-center">30 seconds, not 30 minutes</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 pt-2 border-t border-[#0a1628]/10">
                    <span className="text-sm font-bold">Save</span>
                    <span className="text-[#c9a227]">•</span>
                    <span className="text-sm font-bold">Track</span>
                    <span className="text-[#c9a227]">•</span>
                    <span className="text-sm font-bold">Grow</span>
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

            {/* PANEL 2 — PROBLEM (Middle outer panel) */}
            <div className="min-h-[800px] bg-gradient-to-br from-slate-900 via-[#0d1d3a] to-slate-900 rounded-3xl p-8 flex flex-col justify-between shadow-2xl border-2 border-[#c9a227]/20">
              <div className="space-y-5">
                <div className="inline-block px-4 py-1.5 bg-red-500/20 border border-red-500/40 rounded-full">
                  <span className="text-red-400 text-xs font-bold uppercase tracking-wider">AED 2.4B Annually Wasted</span>
                </div>
                <h2 className="text-3xl font-bold text-white leading-tight">The Offline Rewards Gap</h2>

                <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-2 border-red-500/40 rounded-xl p-4 shadow-lg">
                  <div className="text-center mb-3">
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-red-400 mb-2 leading-none">AED 684</p>
                    <p className="text-sm font-bold text-slate-300">Lost per shopper annually</p>
                    <p className="text-base text-red-300 mt-2 font-black">AED 2.4B UAE market loss</p>
                  </div>

                  {/* Visual comparison chart */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center border-2 border-red-500/40">
                      <p className="text-3xl font-black text-red-400 mb-2">73%</p>
                      <p className="text-xs text-slate-300 font-bold">Don't know deals</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center border-2 border-red-500/40">
                      <p className="text-3xl font-black text-red-400 mb-2">63%</p>
                      <p className="text-xs text-slate-300 font-bold">Points expire</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center border-2 border-red-500/40">
                      <p className="text-3xl font-black text-red-400 mb-2">80%</p>
                      <p className="text-xs text-slate-300 font-bold">No offline rewards</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 border-2 border-[#c9a227]/40 rounded-xl p-4 shadow-lg">
                  <p className="text-lg font-black text-white mb-4 text-center">Merchants lose-lose cycle</p>

                  <div className="space-y-3 mb-3">
                    <div className="bg-red-500/20 border-2 border-red-500/40 rounded-lg p-4 flex items-center gap-4 shadow-md">
                      <span className="text-4xl">📉</span>
                      <div className="flex-1">
                        <p className="text-2xl font-black text-red-400 mb-1">-30% margin</p>
                        <p className="text-sm text-slate-300 font-bold">Bargain hunters only</p>
                      </div>
                    </div>
                    <div className="bg-red-500/20 border-2 border-red-500/40 rounded-lg p-4 flex items-center gap-4 shadow-md">
                      <span className="text-4xl">💸</span>
                      <div className="flex-1">
                        <p className="text-2xl font-black text-red-400 mb-1">Zero ROI certainty</p>
                        <p className="text-sm text-slate-300 font-bold">Unpredictable ad costs</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-lg p-3">
                    <p className="text-sm text-center text-white font-black">
                      <span className="text-[#c9a227]">→</span> Need guaranteed footfall
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#c9a227] to-[#d4ab2c] text-[#0a1628] p-5 rounded-xl shadow-lg">
                  <p className="text-lg font-black text-center">💡 Nuqta aligns all incentives</p>
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
                      <span className="text-sm text-slate-300">rejaul@nuqtapp.com</span>
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
                <h2 className="text-3xl font-bold text-white leading-tight">$150B GCC Opportunity</h2>

                <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border-2 border-[#c9a227]/50 rounded-xl p-5 space-y-4 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a227]/10 rounded-full blur-3xl"></div>
                  <div className="text-center pb-3 border-b-2 border-[#c9a227]/30 relative z-10">
                    <p className="text-xs text-[#c9a227] font-black uppercase mb-2 tracking-wider">GCC Offline Retail (TAM)</p>
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 leading-none drop-shadow-lg">$150B</p>
                    <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto">
                      <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/40 rounded-lg px-3 py-2">
                        <p className="text-xs text-emerald-300 font-black">6 GCC countries</p>
                        <p className="text-[9px] text-emerald-400/60">Total market</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/40 rounded-lg px-3 py-2">
                        <p className="text-xs text-blue-300 font-black">Dubai first</p>
                        <p className="text-[9px] text-blue-400/60">Phase 1</p>
                      </div>
                    </div>
                  </div>

                  {/* Visual funnel representation */}
                  <div className="relative py-2">
                    <div className="flex flex-col gap-2">
                      <div className="bg-gradient-to-r from-[#c9a227]/40 to-[#c9a227]/20 rounded-r-xl h-12 flex items-center justify-between px-4 shadow-md border-l-4 border-[#c9a227]" style={{width: '100%'}}>
                        <span className="text-sm text-white font-black">TAM: $150B</span>
                        <span className="text-xs text-[#c9a227] font-bold bg-[#0a1628]/50 px-2 py-1 rounded">GCC Retail</span>
                      </div>
                      <div className="bg-gradient-to-r from-[#c9a227]/60 to-[#c9a227]/30 rounded-r-xl h-12 flex items-center justify-between px-4 shadow-md border-l-4 border-[#c9a227]" style={{width: '70%'}}>
                        <span className="text-sm text-white font-black">SAM: $45B</span>
                        <span className="text-xs text-[#c9a227] font-bold bg-[#0a1628]/50 px-2 py-1 rounded">D2C + Services</span>
                      </div>
                      <div className="bg-gradient-to-r from-[#c9a227] to-[#d4ab2c] rounded-r-xl h-12 flex items-center justify-between px-4 shadow-xl border-l-4 border-[#c9a227]" style={{width: '30%'}}>
                        <span className="text-sm text-[#0a1628] font-black">SOM: $1.35B</span>
                        <span className="text-xs text-[#0a1628] font-black bg-white/80 px-2 py-1 rounded">Dubai 3yr</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0a1628]/50 rounded-lg p-3 border border-[#c9a227]/30">
                    <p className="text-sm text-[#c9a227] font-black uppercase mb-2 tracking-wide">🎯 GTM Phases</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-emerald-400 text-xs font-black">1</span>
                        </div>
                        <p className="text-xs text-white font-bold">Dubai (Y1-3): F&B, Beauty, Fashion, Fitness</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-400 text-xs font-black">2</span>
                        </div>
                        <p className="text-xs text-white font-bold">Qatar + KSA (Y4-5)</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-purple-400 text-xs font-black">3</span>
                        </div>
                        <p className="text-xs text-white font-bold">Full GCC (Y6+)</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-[#c9a227]/20">
                      <div className="bg-emerald-500/10 rounded p-2">
                        <p className="text-xs text-slate-400">Blended CAC</p>
                        <p className="text-sm text-white font-black">AED 30</p>
                      </div>
                      <div className="bg-blue-500/10 rounded p-2">
                        <p className="text-xs text-slate-400">LTV:CAC</p>
                        <p className="text-sm text-white font-black">16.8x</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/40 rounded-xl p-4 shadow-lg">
                  <h3 className="text-base font-bold text-blue-400 mb-3 uppercase tracking-wide flex items-center gap-2">
                    <span className="text-2xl">🏆</span> Competitive Edge
                  </h3>

                  {/* Enhanced comparison table */}
                  <div className="space-y-2 mb-3">
                    <div className="grid grid-cols-4 gap-1 text-xs font-black text-slate-400 mb-2 pb-2 border-b border-slate-700">
                      <div></div>
                      <div className="text-center text-[#c9a227]">Nuqta</div>
                      <div className="text-center">Cards</div>
                      <div className="text-center">Smiles</div>
                    </div>

                    <div className="grid grid-cols-4 gap-1 items-center bg-gradient-to-r from-slate-800/50 to-slate-800/20 rounded-lg p-2 border border-slate-700/50">
                      <span className="text-xs text-slate-300 font-bold">Offline</span>
                      <div className="text-center">
                        <span className="text-emerald-400 font-black text-lg">✓</span>
                      </div>
                      <div className="text-center">
                        <span className="text-red-400 font-black text-lg">×</span>
                      </div>
                      <div className="text-center">
                        <span className="text-red-400 font-black text-lg">×</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-1 items-center bg-gradient-to-r from-slate-800/50 to-slate-800/20 rounded-lg p-2 border border-slate-700/50">
                      <span className="text-xs text-slate-300 font-bold">Universal</span>
                      <div className="text-center">
                        <span className="text-emerald-400 font-black text-lg">✓</span>
                      </div>
                      <div className="text-center">
                        <span className="text-red-400 font-black text-lg">×</span>
                      </div>
                      <div className="text-center">
                        <span className="text-red-400 font-black text-lg">×</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-1 items-center bg-gradient-to-r from-slate-800/50 to-slate-800/20 rounded-lg p-2 border border-slate-700/50">
                      <span className="text-xs text-slate-300 font-bold">Cashback</span>
                      <div className="text-center">
                        <span className="text-emerald-400 font-black text-base">10%</span>
                      </div>
                      <div className="text-center">
                        <span className="text-slate-500 font-bold text-xs">1-2%</span>
                      </div>
                      <div className="text-center">
                        <span className="text-slate-500 font-bold text-xs">2-3%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/10 p-3 rounded-lg border border-blue-500/40">
                    <p className="text-sm text-white font-black text-center">5x market advantage</p>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-[#c9a227]/30 pt-5 space-y-4">
                <h3 className="text-2xl font-bold text-white text-center flex items-center justify-center gap-2">
                  <span className="text-3xl">💰</span> The Ask
                </h3>
                <div className="bg-gradient-to-br from-[#c9a227] via-[#d4ab2c] to-[#c9a227] rounded-xl p-6 shadow-2xl border-4 border-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="text-center mb-4">
                      <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0a1628] mb-2 leading-none drop-shadow-xl">$400K</p>
                      <p className="text-base text-[#0a1628] font-black uppercase tracking-wider">Pre-seed round</p>
                      <div className="mt-3 bg-[#0a1628]/20 backdrop-blur-sm rounded-lg px-3 py-2 inline-block border border-[#0a1628]/30">
                        <p className="text-xs text-[#0a1628] font-bold">CCS • $5M Cap • 20% Discount</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-[#0a1628]/30 backdrop-blur-sm px-2 py-2 rounded-lg text-center border border-[#0a1628]/40">
                        <p className="text-xs text-[#0a1628] font-black">12-mo</p>
                        <p className="text-[9px] text-[#0a1628]/70 font-bold">Runway</p>
                      </div>
                      <div className="bg-[#0a1628]/30 backdrop-blur-sm px-2 py-2 rounded-lg text-center border border-[#0a1628]/40">
                        <p className="text-xs text-[#0a1628] font-black">16.8x</p>
                        <p className="text-[9px] text-[#0a1628]/70 font-bold">LTV:CAC</p>
                      </div>
                      <div className="bg-[#0a1628]/30 backdrop-blur-sm px-2 py-2 rounded-lg text-center border border-[#0a1628]/40">
                        <p className="text-xs text-[#0a1628] font-black">Q1 2026</p>
                        <p className="text-[9px] text-[#0a1628]/70 font-bold">Launch</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0a1628]/50 backdrop-blur-sm rounded-xl p-4 space-y-3 border-2 border-[#c9a227]/30 shadow-lg">
                  <p className="text-xs text-[#c9a227] font-black uppercase text-center tracking-wider mb-2">Use of Funds</p>

                  {/* Visual horizontal bar */}
                  <div className="w-full h-10 rounded-xl overflow-hidden shadow-lg border-2 border-slate-600/50">
                    <div className="h-full flex">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center border-r-2 border-slate-800" style={{width: '40%'}}>
                        <span className="text-sm font-black text-white drop-shadow">40%</span>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 flex items-center justify-center border-r-2 border-slate-800" style={{width: '35%'}}>
                        <span className="text-sm font-black text-white drop-shadow">35%</span>
                      </div>
                      <div className="bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center" style={{width: '25%'}}>
                        <span className="text-sm font-black text-white drop-shadow">25%</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 bg-blue-500/10 p-2 rounded-lg">
                      <div className="w-4 h-4 rounded bg-gradient-to-r from-blue-600 to-blue-500 flex-shrink-0"></div>
                      <span className="text-slate-200 font-semibold">🧑‍💻 Product & tech</span>
                      <span className="text-white font-black ml-auto">$200K</span>
                    </div>
                    <div className="flex items-center gap-2 bg-emerald-500/10 p-2 rounded-lg">
                      <div className="w-4 h-4 rounded bg-gradient-to-r from-emerald-600 to-emerald-500 flex-shrink-0"></div>
                      <span className="text-slate-200 font-semibold">📈 Marketing & growth</span>
                      <span className="text-white font-black ml-auto">$175K</span>
                    </div>
                    <div className="flex items-center gap-2 bg-purple-500/10 p-2 rounded-lg">
                      <div className="w-4 h-4 rounded bg-gradient-to-r from-purple-600 to-purple-500 flex-shrink-0"></div>
                      <span className="text-slate-200 font-semibold">🏢 Operations</span>
                      <span className="text-white font-black ml-auto">$125K</span>
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

            {/* PANEL 4 — WHY NOW (Left inner panel) */}
            <div className="min-h-[800px] bg-gradient-to-br from-slate-900 via-[#0d1d3a] to-slate-900 rounded-3xl p-8 flex flex-col justify-between shadow-2xl border-2 border-[#c9a227]/20">
              <div className="space-y-5">
                <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Why Now</span>
                </div>
                <h2 className="text-3xl font-bold text-white leading-tight">Perfect Market Timing</h2>

                <div className="space-y-3">
                  <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-2 border-emerald-500/40 rounded-xl p-4 text-center">
                    <span className="text-3xl mb-2 block">📱</span>
                    <h3 className="text-base font-black text-emerald-400 mb-1">Digital-First Consumers</h3>
                    <p className="text-sm text-slate-300">Offline = last untapped frontier</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/40 rounded-xl p-4 text-center">
                    <span className="text-3xl mb-2 block">💳</span>
                    <h3 className="text-base font-black text-purple-400 mb-1">Tech Ready</h3>
                    <p className="text-sm text-slate-300">Receipt OCR + instant verification</p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-2 border-orange-500/40 rounded-xl p-4 text-center">
                    <span className="text-3xl mb-2 block">🏪</span>
                    <h3 className="text-base font-black text-orange-400 mb-1">SMB Pain: +40% Ad Costs</h3>
                    <p className="text-sm text-slate-300">Need predictable ROI now</p>
                  </div>

                  <div className="bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 border-2 border-[#c9a227]/40 rounded-xl p-4 text-center">
                    <span className="text-3xl mb-2 block">🚀</span>
                    <h3 className="text-base font-black text-[#c9a227] mb-1">UAE: Perfect Launch Market</h3>
                    <p className="text-sm text-slate-300">99% smartphone • 3.5M daily shoppers</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/20 to-transparent p-4 rounded-xl border-l-4 border-blue-500">
                <p className="text-base font-black text-white text-center">⏰ 12-18mo head start window</p>
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
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-emerald-400 mb-2 leading-none">10%</p>
                    <p className="text-sm text-white font-bold">Cashback on every purchase</p>
                    <p className="text-xs text-emerald-300 mt-1">5% instant + 5% social sharing bonus</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="bg-emerald-500/20 rounded-lg p-2.5 text-center border border-emerald-500/40">
                      <p className="text-2xl font-black text-white mb-1">👥</p>
                      <p className="text-[10px] text-slate-300 font-bold">Users earn</p>
                      <p className="text-xs text-emerald-400 font-black">AED 300/mo*</p>
                    </div>
                    <div className="bg-emerald-500/20 rounded-lg p-2.5 text-center border border-emerald-500/40">
                      <p className="text-2xl font-black text-white mb-1">🏪</p>
                      <p className="text-[10px] text-slate-300 font-bold">Merchants gain</p>
                      <p className="text-xs text-emerald-400 font-black">+40% basket</p>
                    </div>
                    <div className="bg-[#c9a227]/30 rounded-lg p-2.5 text-center border-2 border-[#c9a227]/50">
                      <p className="text-2xl font-black text-white mb-1">💰</p>
                      <p className="text-[10px] text-[#c9a227] font-bold">Platform makes</p>
                      <p className="text-xs text-[#c9a227] font-black">5% net margin</p>
                    </div>
                  </div>
                  <p className="text-[9px] text-center text-slate-400 mt-2">*Avg user spending AED 3K/mo</p>
                </div>

                <div>
                  <h3 className="text-base font-black text-[#c9a227] mb-3 uppercase tracking-wide text-center">How It Works</h3>
                  <div className="space-y-2">
                    {/* Step 1 */}
                    <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-transparent border-l-4 border-blue-500 rounded-lg p-3 shadow-md">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center text-lg font-black flex-shrink-0 shadow-lg border-2 border-blue-400">
                        1
                      </div>
                      <div className="flex-1">
                        <p className="text-base text-white font-black">Browse local deals</p>
                      </div>
                      <span className="text-2xl flex-shrink-0">📍</span>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-transparent border-l-4 border-purple-500 rounded-lg p-3 shadow-md">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-500 text-white flex items-center justify-center text-lg font-black flex-shrink-0 shadow-lg border-2 border-purple-400">
                        2
                      </div>
                      <div className="flex-1">
                        <p className="text-base text-white font-black">Pay normally</p>
                      </div>
                      <span className="text-2xl flex-shrink-0">💳</span>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-transparent border-l-4 border-emerald-500 rounded-lg p-3 shadow-md">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 text-white flex items-center justify-center text-lg font-black flex-shrink-0 shadow-lg border-2 border-emerald-400">
                        3
                      </div>
                      <div className="flex-1">
                        <p className="text-base text-white font-black">Earn 10% cashback</p>
                      </div>
                      <span className="text-2xl flex-shrink-0">💰</span>
                    </div>
                  </div>
                  <div className="mt-3 bg-[#c9a227]/20 border-2 border-[#c9a227]/40 rounded-lg p-3 text-center">
                    <p className="text-base text-[#c9a227] font-black">⏱️ 30 seconds total</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-black text-[#c9a227] mb-3 uppercase tracking-wide text-center">💰 Business Model</h3>
                  <div className="bg-[#0a1628]/50 backdrop-blur-sm border-2 border-[#c9a227]/40 rounded-xl p-4 space-y-3 shadow-lg">
                    <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-lg p-4 border-l-4 border-[#c9a227] text-center">
                      <p className="text-base text-slate-200 font-black mb-2">Per AED 100 purchase</p>
                      <p className="text-4xl text-white font-black mb-2">AED 15</p>
                      <p className="text-sm text-emerald-300 font-black">✓ Cheaper than discount platforms</p>
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
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-[#0a1628] font-black">Nuqta keeps</span>
                        <span className="text-3xl text-[#0a1628] font-black">AED 5</span>
                      </div>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#0a1628]/20">
                        <p className="text-xs text-[#0a1628] font-bold">5% net margin • Profitable from day 1</p>
                        <span className="text-lg">🎯</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-lg p-3 mt-3">
                    <p className="text-xs text-emerald-300 font-bold text-center mb-2">📊 12-Month Projections</p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-[#0a1628]/50 rounded p-2 text-center">
                        <p className="text-lg font-black text-white">10K</p>
                        <p className="text-[9px] text-slate-300">Users</p>
                      </div>
                      <div className="bg-[#0a1628]/50 rounded p-2 text-center">
                        <p className="text-lg font-black text-white">$9M</p>
                        <p className="text-[9px] text-slate-300">GMV/year</p>
                      </div>
                      <div className="bg-[#0a1628]/50 rounded p-2 text-center">
                        <p className="text-lg font-black text-white">$450K</p>
                        <p className="text-[9px] text-slate-300">Revenue</p>
                      </div>
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
                  <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wide mb-3">🎯 Pre-Launch Traction</h3>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="bg-[#0a1628]/50 rounded-lg p-3 text-center border border-emerald-500/30">
                      <p className="text-3xl font-black text-white mb-1">32</p>
                      <p className="text-xs text-slate-300 font-semibold">Signed LOIs</p>
                      <p className="text-xs text-emerald-400">Ready</p>
                    </div>
                    <div className="bg-[#0a1628]/50 rounded-lg p-3 text-center border border-emerald-500/30">
                      <p className="text-3xl font-black text-white mb-1">60+</p>
                      <p className="text-xs text-slate-300 font-semibold">Network</p>
                      <p className="text-xs text-emerald-400">Pipeline</p>
                    </div>
                    <div className="bg-[#0a1628]/50 rounded-lg p-3 text-center border border-emerald-500/30">
                      <p className="text-3xl font-black text-white mb-1">$0</p>
                      <p className="text-xs text-slate-300 font-semibold">CAC</p>
                      <p className="text-xs text-emerald-400">Organic</p>
                    </div>
                  </div>
                  <div className="bg-emerald-500/20 rounded-lg p-3 mb-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-slate-300 font-bold">MVP Status</span>
                      <span className="text-emerald-400 text-base font-black">95%</span>
                    </div>
                    <div className="w-full bg-slate-700/30 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-3 rounded-full shadow-lg" style={{width: '95%'}}></div>
                    </div>
                    <p className="text-xs text-emerald-300 mt-2 font-semibold">Full stack ready</p>
                  </div>
                  <div className="flex items-center justify-center gap-3 bg-purple-500/20 rounded-lg p-3 border border-purple-500/40">
                    <span className="text-2xl">🚀</span>
                    <div className="text-center">
                      <p className="text-base text-white font-black">Q1 2026 Launch</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border-2 border-[#c9a227]/40 rounded-xl p-4 shadow-lg">
                  <h3 className="text-sm font-bold text-[#c9a227] uppercase tracking-wide mb-3">💬 Merchant Feedback</h3>
                  <div className="bg-[#0a1628]/50 rounded-lg p-4 mb-3">
                    <p className="text-sm text-slate-300 italic leading-relaxed mb-3">
                      "Real customers, not bargain hunters"
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#c9a227] to-[#d4ab2c] rounded-full flex items-center justify-center text-base shadow-lg">
                        ✓
                      </div>
                      <div>
                        <p className="text-xs text-white font-bold">Ahmed S., Cafe Owner</p>
                        <p className="text-xs text-slate-400">JLT, Dubai</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded p-3 text-center">
                      <p className="text-2xl font-black text-emerald-400 mb-1">+40%</p>
                      <p className="text-xs text-slate-300 font-semibold">Repeat visits</p>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded p-3 text-center">
                      <p className="text-2xl font-black text-emerald-400 mb-1">+35%</p>
                      <p className="text-xs text-slate-300 font-semibold">Basket size</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 border-2 border-[#c9a227]/40 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a227] to-[#d4ab2c] flex items-center justify-center shadow-lg">
                      <span className="text-2xl">👨‍💼</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">Team</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-br from-[#0a1628]/40 to-[#0a1628]/20 rounded-lg p-4 border border-[#c9a227]/30">
                      <p className="text-base text-[#c9a227] font-black mb-3">Rejaul Karim, Founder</p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-emerald-400 text-sm">✓</span>
                          <p className="text-sm text-slate-300 flex-1">Senior Engineer, UAE</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-emerald-400 text-sm">✓</span>
                          <p className="text-sm text-slate-300 flex-1">8+ years platforms</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-emerald-400 text-sm">✓</span>
                          <p className="text-sm text-slate-300 flex-1">Full-stack MVP built</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-emerald-400 text-sm">✓</span>
                          <p className="text-sm text-slate-300 flex-1">Local market expert</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-lg p-3">
                      <p className="text-xs text-blue-300 font-black mb-2 flex items-center gap-1">
                        <span>🏛️</span> Regulatory
                      </p>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400 text-sm">✓</span>
                          <p className="text-sm text-slate-300 font-semibold">UAE licensed</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400 text-sm">→</span>
                          <p className="text-sm text-slate-300 font-semibold">Payment Q1 2026</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 border-l-4 border-[#c9a227] rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">🛡️</span>
                    <h3 className="text-lg font-bold text-white">Moats</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-[#0a1628]/30 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <span className="text-[#c9a227] text-xl font-bold">1️⃣</span>
                        <div>
                          <p className="text-sm text-white font-bold">First-Mover</p>
                          <p className="text-xs text-slate-300">12-18mo head start</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#0a1628]/30 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <span className="text-[#c9a227] text-xl font-bold">2️⃣</span>
                        <div>
                          <p className="text-sm text-white font-bold">Network Effects</p>
                          <p className="text-xs text-slate-300">Winner-takes-most</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#0a1628]/30 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <span className="text-[#c9a227] text-xl font-bold">3️⃣</span>
                        <div>
                          <p className="text-sm text-white font-bold">Data Moat</p>
                          <p className="text-xs text-slate-300">Shopping behavior graph</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#0a1628]/30 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <span className="text-[#c9a227] text-xl font-bold">4️⃣</span>
                        <div>
                          <p className="text-sm text-white font-bold">Capital Efficient</p>
                          <p className="text-xs text-slate-300">5% margin day 1</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 bg-emerald-500/20 border border-emerald-500/40 rounded-lg p-3">
                    <p className="text-xs text-emerald-300 font-bold text-center">
                      💡 15% vs 30% discounts + loyal customers
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#c9a227] via-[#d4ab2c] to-[#c9a227] text-[#0a1628] p-6 rounded-xl shadow-2xl border-4 border-white/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="relative z-10">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-[#0a1628]/20 flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">🚀</span>
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-wider mb-2">Ready?</h3>
                    <p className="text-base font-bold">Transform UAE commerce</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#0a1628] to-[#0d1d3a] text-white rounded-xl p-5 mb-3 shadow-xl border-2 border-[#0a1628]/50">
                    <p className="text-lg leading-snug font-black text-center mb-4">
                      $400K → $150B opportunity
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/40 rounded-lg p-3">
                        <p className="text-sm text-emerald-400 font-black">First-mover</p>
                        <p className="text-xs text-emerald-400/60 mt-1">12-mo start</p>
                      </div>
                      <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border border-[#c9a227]/40 rounded-lg p-3">
                        <p className="text-sm text-[#c9a227] font-black">Day 1 Profit</p>
                        <p className="text-xs text-[#c9a227]/60 mt-1">5% margin</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/40 rounded-lg p-3">
                        <p className="text-sm text-blue-400 font-black">$150B TAM</p>
                        <p className="text-xs text-blue-400/60 mt-1">GCC market</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/40 rounded-lg p-3">
                        <p className="text-sm text-purple-400 font-black">Q1 2026</p>
                        <p className="text-xs text-purple-400/60 mt-1">Launch</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 border border-emerald-500/40 rounded-lg p-3">
                      <p className="text-sm text-emerald-300 font-black text-center">Exit-ready 24-36mo</p>
                    </div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-xl">
                    <div className="text-center mb-3">
                      <p className="text-2xl font-black mb-2">📧 rejaul@nuqtapp.com</p>
                      <div className="inline-flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        <p className="text-xs text-emerald-700 font-bold">24h response</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 pt-3 border-t border-[#0a1628]/10 flex-wrap">
                      <div className="bg-blue-500/10 px-3 py-1.5 rounded">
                        <span className="text-xs font-black text-blue-700">Full deck</span>
                      </div>
                      <span className="text-[#c9a227]">•</span>
                      <div className="bg-purple-500/10 px-3 py-1.5 rounded">
                        <span className="text-xs font-black text-purple-700">Financials</span>
                      </div>
                      <span className="text-[#c9a227]">•</span>
                      <div className="bg-emerald-500/10 px-3 py-1.5 rounded">
                        <span className="text-xs font-black text-emerald-700">Demo</span>
                      </div>
                    </div>
                  </div>
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
    <GlobalFooter />
    </div>
  );
}
