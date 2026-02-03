'use client';

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Image from 'next/image';

export default function NuqtaMerchantOnePager() {
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
            A4 Vertical Tri-Fold Merchant One-Pager
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
            <span className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest">For Merchants</span>
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
                    <p className="text-sm text-[#0a1628]/80 font-bold mt-0.5">Partner Growth Platform</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#0a1628] to-[#0d1d3a] text-white rounded-xl p-5 shadow-2xl border-2 border-[#c9a227]/30">
                  <p className="text-base leading-tight font-bold text-center mb-2">
                    Tired of expensive ads that don't work?
                  </p>
                  <p className="text-lg text-[#c9a227] font-black text-center mb-3">
                    We bring guaranteed customers
                  </p>
                  <div className="flex items-center justify-center gap-2 pt-3 border-t border-[#c9a227]/20">
                    <div className="bg-emerald-500/20 rounded px-3 py-1.5">
                      <p className="text-xs text-emerald-400 font-black">Only 15%</p>
                    </div>
                    <span className="text-[#c9a227]">•</span>
                    <div className="bg-blue-500/20 rounded px-3 py-1.5">
                      <p className="text-xs text-blue-400 font-black">Pay per sale</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#0a1628]/20 backdrop-blur-sm text-[#0a1628] p-3 rounded-xl border-2 border-[#0a1628]/40 text-center">
                    <p className="text-3xl font-black mb-1">+40%</p>
                    <p className="text-xs font-bold uppercase">Repeat rate</p>
                  </div>
                  <div className="bg-[#0a1628]/20 backdrop-blur-sm text-[#0a1628] p-3 rounded-xl border-2 border-[#0a1628]/40 text-center">
                    <p className="text-3xl font-black mb-1">+35%</p>
                    <p className="text-xs font-bold uppercase">Basket size</p>
                  </div>
                  <div className="bg-[#0a1628]/20 backdrop-blur-sm text-[#0a1628] p-3 rounded-xl border-2 border-[#0a1628]/40 text-center">
                    <p className="text-2xl font-black mb-1">AED 30</p>
                    <p className="text-xs font-bold uppercase">CAC actual</p>
                  </div>
                  <div className="bg-[#0a1628]/20 backdrop-blur-sm text-[#0a1628] p-3 rounded-xl border-2 border-[#0a1628]/40 text-center">
                    <p className="text-2xl font-black mb-1">FREE</p>
                    <p className="text-xs font-bold uppercase">Setup</p>
                  </div>
                </div>

                <div className="bg-white/95 text-[#0a1628] p-4 rounded-xl border-2 border-white shadow-xl">
                  <p className="text-base font-black leading-tight text-center mb-3">
                    Guaranteed Footfall
                  </p>
                  <div className="bg-[#c9a227]/10 rounded-lg p-3 mb-3">
                    <p className="text-sm font-black text-center">Pay only for real customers</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 pt-2 border-t border-[#0a1628]/10">
                    <span className="text-sm font-bold">Track</span>
                    <span className="text-[#c9a227]">•</span>
                    <span className="text-sm font-bold">Measure</span>
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
                <p className="text-xs text-[#0a1628] mt-2 font-bold uppercase tracking-wider">Partner Portal</p>
              </div>
            </div>

            {/* PANEL 2 — PAIN (Middle outer panel) */}
            <div className="min-h-[800px] bg-gradient-to-br from-slate-900 via-[#0d1d3a] to-slate-900 rounded-3xl p-8 flex flex-col justify-between shadow-2xl border-2 border-[#c9a227]/20">
              <div className="space-y-5">
                <div className="inline-block px-4 py-1.5 bg-red-500/20 border border-red-500/40 rounded-full">
                  <span className="text-red-400 text-xs font-bold uppercase tracking-wider">The Pain</span>
                </div>
                <h2 className="text-3xl font-bold text-white leading-tight">Growing Your Business is Painful</h2>

                <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-2 border-red-500/40 rounded-xl p-5 shadow-lg">
                  <div className="text-center mb-4">
                    <p className="text-6xl font-black text-red-400 mb-2 leading-none">AED 500+</p>
                    <p className="text-sm font-bold text-slate-300">Per customer on Google/Meta</p>
                    <p className="text-base text-red-300 mt-2 font-black">No guarantee they'll return</p>
                  </div>

                  {/* Visual pain chart */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center border-2 border-red-500/40">
                      <p className="text-3xl font-black text-red-400 mb-2">+40%</p>
                      <p className="text-xs text-slate-300 font-bold">Ad costs up YoY</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center border-2 border-red-500/40">
                      <p className="text-3xl font-black text-red-400 mb-2">-30%</p>
                      <p className="text-xs text-slate-300 font-bold">Margins on deals</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 border-2 border-[#c9a227]/40 rounded-xl p-4 shadow-lg">
                  <p className="text-lg font-black text-white mb-4 text-center">Every option has problems</p>

                  <div className="space-y-3 mb-3">
                    <div className="bg-red-500/20 border-2 border-red-500/40 rounded-lg p-4 flex items-center gap-4 shadow-md">
                      <span className="text-4xl">💸</span>
                      <div className="flex-1">
                        <p className="text-2xl font-black text-red-400 mb-1">Meta/Google</p>
                        <p className="text-sm text-slate-300 font-bold">Burning cash • Zero control</p>
                      </div>
                    </div>
                    <div className="bg-red-500/20 border-2 border-red-500/40 rounded-lg p-4 flex items-center gap-4 shadow-md">
                      <span className="text-4xl">🎟️</span>
                      <div className="flex-1">
                        <p className="text-2xl font-black text-red-400 mb-1">Deal Sites</p>
                        <p className="text-sm text-slate-300 font-bold">Bargain hunters • Never return</p>
                      </div>
                    </div>
                    <div className="bg-red-500/20 border-2 border-red-500/40 rounded-lg p-4 flex items-center gap-4 shadow-md">
                      <span className="text-4xl">💳</span>
                      <div className="flex-1">
                        <p className="text-2xl font-black text-red-400 mb-1">Card Networks</p>
                        <p className="text-sm text-slate-300 font-bold">No footfall • Online only</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-lg p-3">
                    <p className="text-sm text-center text-white font-black">
                      <span className="text-[#c9a227]">→</span> You deserve guaranteed results
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-5 rounded-xl shadow-lg border-2 border-red-300">
                  <p className="text-lg font-black text-center">Stop gambling with your marketing budget</p>
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
                      <span className="text-sm text-slate-300">partners@nuqtapp.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-300">nuqtaapp.com/partners</span>
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

            {/* PANEL 3 — SOLUTION (Left outer panel) */}
            <div className="min-h-[800px] bg-gradient-to-br from-[#0a1628] via-[#0d1d3a] to-[#0a1628] rounded-3xl p-8 flex flex-col justify-between shadow-2xl border-2 border-[#c9a227]">
              <div className="space-y-5">
                <div className="inline-block px-4 py-1.5 bg-[#c9a227] rounded-full shadow-lg">
                  <span className="text-[#0a1628] text-xs font-black uppercase tracking-wider">The Solution</span>
                </div>
                <h2 className="text-3xl font-bold text-white leading-tight">We Bring You Real Customers</h2>

                <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border-2 border-[#c9a227]/50 rounded-xl p-5 space-y-4 shadow-xl">
                  <div className="text-center pb-3 border-b-2 border-[#c9a227]/30">
                    <p className="text-sm text-[#c9a227] font-black uppercase mb-2">Performance-Based Platform</p>
                    <p className="text-3xl font-black text-white mb-3 leading-tight">Guaranteed footfall to your store</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/40 rounded-lg px-3 py-2">
                        <p className="text-xs text-emerald-300 font-black">Real people</p>
                        <p className="text-xs text-emerald-400/60">Visit your store</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/40 rounded-lg px-3 py-2">
                        <p className="text-xs text-blue-300 font-black">Pay after</p>
                        <p className="text-xs text-blue-400/60">They buy</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-2 border-emerald-500/40 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">📍</span>
                        <div className="flex-1">
                          <h3 className="text-base font-black text-emerald-400 mb-1">Guaranteed Footfall</h3>
                          <p className="text-sm text-slate-300">Real customers walk into your store, not just clicks</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/40 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">🎯</span>
                        <div className="flex-1">
                          <h3 className="text-base font-black text-purple-400 mb-1">Loyal Customers</h3>
                          <p className="text-sm text-slate-300">They come back 40% more than discount platforms</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-2 border-orange-500/40 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">📊</span>
                        <div className="flex-1">
                          <h3 className="text-base font-black text-orange-400 mb-1">Full Visibility</h3>
                          <p className="text-sm text-slate-300">Track every customer and their spending in real-time</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 border-2 border-[#c9a227]/40 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">⚡</span>
                        <div className="flex-1">
                          <h3 className="text-base font-black text-[#c9a227] mb-1">Quick Launch</h3>
                          <p className="text-sm text-slate-300">Go live in 24 hours with zero setup costs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/40 rounded-xl p-4 shadow-lg">
                  <h3 className="text-base font-bold text-blue-400 mb-3 text-center uppercase tracking-wide">Why Nuqta Works</h3>

                  <div className="space-y-3">
                    <div className="bg-slate-800/50 rounded-lg p-3 border border-emerald-500/40">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-emerald-400 text-lg">✓</span>
                        <span className="text-sm text-white font-bold">Performance-based pricing</span>
                      </div>
                      <p className="text-xs text-slate-400 ml-7">Only pay when they actually buy</p>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-3 border border-emerald-500/40">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-emerald-400 text-lg">✓</span>
                        <span className="text-sm text-white font-bold">Quality over quantity</span>
                      </div>
                      <p className="text-xs text-slate-400 ml-7">Loyal customers, not one-time bargain hunters</p>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-3 border border-emerald-500/40">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-emerald-400 text-lg">✓</span>
                        <span className="text-sm text-white font-bold">Zero upfront risk</span>
                      </div>
                      <p className="text-xs text-slate-400 ml-7">No setup fees, no monthly charges, no contracts</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-[#c9a227]/30 pt-5">
                <div className="bg-gradient-to-br from-[#c9a227] via-[#d4ab2c] to-[#c9a227] rounded-xl p-5 shadow-2xl border-4 border-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div>
                  <div className="relative z-10 text-center">
                    <p className="text-xl font-black text-[#0a1628] mb-2">Think of us as your marketing team</p>
                    <p className="text-sm text-[#0a1628] font-bold">We only win when you win</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BACK SIDE - 3 Inner Panels */}
        {!showFront && (
          <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto mb-8 print:hidden">

            {/* PANEL 4 — THE PROCESS (Left inner panel) */}
            <div className="min-h-[800px] bg-gradient-to-br from-slate-900 via-[#0d1d3a] to-slate-900 rounded-3xl p-8 flex flex-col justify-between shadow-2xl border-2 border-[#c9a227]/20">
              <div className="space-y-5">
                <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">The Process</span>
                </div>
                <h2 className="text-3xl font-bold text-white leading-tight">How It Works</h2>

                {/* SIMPLE 3-STEP PROCESS */}
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/40 rounded-xl p-5 shadow-lg">
                  <h3 className="text-lg font-black text-blue-400 mb-5 text-center">Simple 3-Step Process</h3>

                  <div className="space-y-4">
                    <div className="bg-[#0a1628]/50 rounded-xl p-5 border-2 border-blue-500/40">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center text-2xl font-black flex-shrink-0 shadow-lg">
                          1
                        </div>
                        <div className="flex-1">
                          <p className="text-lg text-white font-black mb-2">Sign Up (FREE)</p>
                          <p className="text-sm text-slate-300 mb-2">Complete our simple partner form. No credit card needed.</p>
                          <div className="bg-emerald-500/20 rounded-lg px-3 py-2 inline-block">
                            <p className="text-xs text-emerald-400 font-black">⏱️ Takes 5 minutes</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#0a1628]/50 rounded-xl p-5 border-2 border-purple-500/40">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-purple-500 text-white flex items-center justify-center text-2xl font-black flex-shrink-0 shadow-lg">
                          2
                        </div>
                        <div className="flex-1">
                          <p className="text-lg text-white font-black mb-2">We Send Customers</p>
                          <p className="text-sm text-slate-300 mb-2">Real people with real money visit your store.</p>
                          <div className="bg-purple-500/20 rounded-lg px-3 py-2 inline-block">
                            <p className="text-xs text-purple-400 font-black">📍 Guaranteed footfall</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#0a1628]/50 rounded-xl p-5 border-2 border-emerald-500/40">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 text-white flex items-center justify-center text-2xl font-black flex-shrink-0 shadow-lg">
                          3
                        </div>
                        <div className="flex-1">
                          <p className="text-lg text-white font-black mb-2">You Pay 15%</p>
                          <p className="text-sm text-slate-300 mb-2">Only when they buy. No sale = no charge.</p>
                          <div className="bg-emerald-500/20 rounded-lg px-3 py-2 inline-block">
                            <p className="text-xs text-emerald-400 font-black">✓ Performance-based only</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WHAT YOU GET */}
                <div className="bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 border-2 border-[#c9a227]/40 rounded-xl p-4 shadow-lg">
                  <h3 className="text-base font-black text-[#c9a227] mb-4 text-center">What You Get</h3>

                  <div className="space-y-2">
                    <div className="bg-[#0a1628]/30 rounded-lg p-3 flex items-center gap-3">
                      <span className="text-xl">✓</span>
                      <p className="text-sm text-white font-bold">Partner dashboard with real-time analytics</p>
                    </div>
                    <div className="bg-[#0a1628]/30 rounded-lg p-3 flex items-center gap-3">
                      <span className="text-xl">✓</span>
                      <p className="text-sm text-white font-bold">Marketing materials & QR codes</p>
                    </div>
                    <div className="bg-[#0a1628]/30 rounded-lg p-3 flex items-center gap-3">
                      <span className="text-xl">✓</span>
                      <p className="text-sm text-white font-bold">Dedicated partner success manager</p>
                    </div>
                    <div className="bg-[#0a1628]/30 rounded-lg p-3 flex items-center gap-3">
                      <span className="text-xl">✓</span>
                      <p className="text-sm text-white font-bold">Weekly performance reports</p>
                    </div>
                  </div>
                </div>

                {/* TIMELINE */}
                <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-l-4 border-emerald-500 rounded-lg p-4">
                  <h3 className="text-sm font-bold text-emerald-400 mb-3 uppercase tracking-wide">⏰ Launch Timeline</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-emerald-400 text-xs font-black">✓</span>
                      </div>
                      <p className="text-sm text-slate-300"><strong className="text-white">Day 1:</strong> Sign up & verification</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-emerald-400 text-xs font-black">✓</span>
                      </div>
                      <p className="text-sm text-slate-300"><strong className="text-white">Day 2:</strong> Dashboard access & training</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-emerald-400 text-xs font-black">→</span>
                      </div>
                      <p className="text-sm text-slate-300"><strong className="text-white">Day 3:</strong> First customers arrive</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/20 to-transparent p-4 rounded-xl border-l-4 border-blue-500">
                <p className="text-base font-black text-white text-center">🚀 From signup to first customer in 72 hours</p>
              </div>
            </div>

            {/* PANEL 5 — BENEFITS & PROOF (Middle inner panel) */}
            <div className="min-h-[800px] bg-gradient-to-br from-[#0a1628] via-[#0d1d3a] to-[#0a1628] rounded-3xl p-8 flex flex-col justify-between shadow-2xl border-2 border-[#c9a227]">
              <div className="space-y-5">
                <div className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/40 rounded-full">
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">The Benefits</span>
                </div>
                <h2 className="text-3xl font-bold text-white leading-tight">What You Actually Get</h2>

                {/* KEY BENEFITS */}
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-2 border-emerald-500/50 rounded-xl p-5 shadow-xl space-y-4">
                  <div className="text-center pb-3 border-b-2 border-emerald-500/30">
                    <p className="text-sm text-emerald-400 font-black mb-2 uppercase">Proven Results</p>
                    <p className="text-3xl font-black text-white mb-2 leading-tight">Real impact on your business</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-emerald-500/10 rounded-lg p-4 text-center border border-emerald-500/40">
                      <p className="text-4xl font-black text-emerald-400 mb-2">+40%</p>
                      <p className="text-xs text-slate-300 font-bold">Repeat customer rate</p>
                      <p className="text-xs text-emerald-400 mt-1">vs discount platforms</p>
                    </div>
                    <div className="bg-blue-500/10 rounded-lg p-4 text-center border border-blue-500/40">
                      <p className="text-4xl font-black text-blue-400 mb-2">+35%</p>
                      <p className="text-xs text-slate-300 font-bold">Average basket size</p>
                      <p className="text-xs text-blue-400 mt-1">Higher spend per visit</p>
                    </div>
                    <div className="bg-purple-500/10 rounded-lg p-4 text-center border border-purple-500/40">
                      <p className="text-4xl font-black text-purple-400 mb-2">70%</p>
                      <p className="text-xs text-slate-300 font-bold">Lower CAC</p>
                      <p className="text-xs text-purple-400 mt-1">vs Google/Meta ads</p>
                    </div>
                    <div className="bg-[#c9a227]/20 rounded-lg p-4 text-center border-2 border-[#c9a227]/50">
                      <p className="text-4xl font-black text-[#c9a227] mb-2">100%</p>
                      <p className="text-xs text-slate-300 font-bold">Guaranteed ROI</p>
                      <p className="text-xs text-[#c9a227] mt-1">Pay only for sales</p>
                    </div>
                  </div>
                </div>

                {/* ROI COMPARISON */}
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/40 rounded-xl p-5 shadow-lg">
                  <h3 className="text-base font-black text-blue-400 mb-4 text-center">Cost Comparison (AED 100 Sale)</h3>

                  <div className="space-y-3">
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-red-500/40">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <p className="text-sm text-slate-300 font-bold">Google/Meta</p>
                          <p className="text-xs text-slate-400">Upfront cost + risk</p>
                        </div>
                        <span className="text-red-400 font-black text-xl">AED 500+</span>
                      </div>
                      <div className="bg-red-500/20 rounded p-2 mt-2">
                        <p className="text-xs text-red-300 font-bold">❌ No guarantee they buy</p>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-4 border border-orange-500/40">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <p className="text-sm text-slate-300 font-bold">Discount Platforms</p>
                          <p className="text-xs text-slate-400">30% off deal</p>
                        </div>
                        <span className="text-orange-400 font-black text-xl">AED 30</span>
                      </div>
                      <div className="bg-orange-500/20 rounded p-2 mt-2">
                        <p className="text-xs text-orange-300 font-bold">❌ One-time bargain hunters</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 rounded-lg p-4 border-2 border-emerald-500/40">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <p className="text-sm text-white font-bold">Nuqta</p>
                          <p className="text-xs text-emerald-400">Performance-based</p>
                        </div>
                        <span className="text-emerald-400 font-black text-xl">AED 15</span>
                      </div>
                      <div className="bg-emerald-500/20 rounded p-2 mt-2">
                        <p className="text-xs text-emerald-300 font-bold">✓ Loyal customers • +40% repeat</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-lg p-3">
                    <p className="text-sm text-center text-white font-black">
                      50% cheaper • 40% more loyal • Zero risk
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 border-2 border-[#c9a227]/40 rounded-xl p-5 shadow-lg">
                  <h3 className="text-base font-black text-[#c9a227] mb-4 text-center">Real Merchant Example</h3>

                  <div className="bg-[#0a1628]/50 rounded-lg p-4 mb-3">
                    <p className="text-sm text-slate-300 italic mb-3">
                      "We saved AED 15K/month vs discount platforms. Repeat rate jumped 40%."
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
                      <p className="text-xs text-slate-300 font-semibold">Repeat rate</p>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded p-3 text-center">
                      <p className="text-2xl font-black text-emerald-400 mb-1">+35%</p>
                      <p className="text-xs text-slate-300 font-semibold">Basket size</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 border-2 border-[#c9a227]/40 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">💰</span>
                  <h3 className="text-sm font-bold text-[#c9a227] uppercase tracking-wide">Pricing</h3>
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  <p><strong className="text-white">Setup:</strong> FREE</p>
                  <p><strong className="text-white">Monthly:</strong> FREE</p>
                  <p><strong className="text-white">Cost:</strong> 15% per sale only</p>
                </div>
              </div>
            </div>

            {/* PANEL 6 — COST & CTA (Right inner panel) */}
            <div className="min-h-[800px] bg-gradient-to-br from-slate-900 via-[#0d1d3a] to-slate-900 rounded-3xl p-8 flex flex-col justify-between shadow-2xl border-2 border-[#c9a227]/20">
              <div className="space-y-5">
                <div className="inline-block px-4 py-1.5 bg-[#c9a227] rounded-full shadow-lg">
                  <span className="text-[#0a1628] text-xs font-black uppercase tracking-wider">The Investment</span>
                </div>
                <h2 className="text-3xl font-bold text-white leading-tight">Simple, Transparent Pricing</h2>

                {/* PRICING SHOWCASE */}
                <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border-2 border-[#c9a227]/50 rounded-xl p-6 shadow-2xl">
                  <div className="text-center pb-4 border-b-2 border-[#c9a227]/30 mb-5">
                    <p className="text-sm text-[#c9a227] font-black uppercase mb-3">Performance-Based Only</p>
                    <p className="text-7xl font-black text-white mb-3 leading-none drop-shadow-lg">15%</p>
                    <p className="text-lg text-slate-300 font-bold mb-3">Commission per transaction</p>
                    <p className="text-sm text-slate-400">You keep 85% • We keep 15%</p>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-[#0a1628]/50 rounded-lg p-4">
                      <p className="text-base text-white font-black mb-3 text-center">What You Pay</p>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-emerald-500/20 rounded p-2 text-center border border-emerald-500/40">
                          <p className="text-xs text-slate-400 mb-1">Customer pays</p>
                          <p className="text-lg text-white font-black">AED 100</p>
                        </div>
                        <div className="bg-blue-500/20 rounded p-2 text-center border border-blue-500/40">
                          <p className="text-xs text-slate-400 mb-1">You pay us</p>
                          <p className="text-lg text-white font-black">AED 15</p>
                        </div>
                        <div className="bg-[#c9a227]/30 rounded p-2 text-center border-2 border-[#c9a227]">
                          <p className="text-xs text-[#c9a227] mb-1 font-bold">You keep</p>
                          <p className="text-lg text-[#c9a227] font-black">AED 85</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/40 rounded-lg px-2 py-3 text-center">
                        <p className="text-3xl mb-1">✓</p>
                        <p className="text-xs text-emerald-300 font-black">FREE Setup</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/40 rounded-lg px-2 py-3 text-center">
                        <p className="text-3xl mb-1">✓</p>
                        <p className="text-xs text-blue-300 font-black">FREE Monthly</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/40 rounded-lg px-2 py-3 text-center">
                        <p className="text-3xl mb-1">✓</p>
                        <p className="text-xs text-purple-300 font-black">Zero Risk</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SUCCESS PROOF */}
                <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-2 border-emerald-500/40 rounded-xl p-4 shadow-lg">
                  <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wide mb-3 text-center">Real Partner Results</h3>

                  <div className="space-y-2">
                    <div className="bg-[#0a1628]/50 rounded-lg p-3">
                      <div className="flex items-start gap-3">
                        <span className="text-xl">☕</span>
                        <div className="flex-1">
                          <p className="text-sm text-white font-bold mb-1">Cafe - JLT</p>
                          <p className="text-xs text-slate-400 italic mb-2">"Saved AED 15K/month vs discounts"</p>
                          <div className="flex gap-2">
                            <div className="bg-emerald-500/20 rounded px-2 py-1">
                              <p className="text-xs text-emerald-400 font-black">+40% repeat</p>
                            </div>
                            <div className="bg-blue-500/20 rounded px-2 py-1">
                              <p className="text-xs text-blue-400 font-black">+35% basket</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#0a1628]/50 rounded-lg p-3">
                      <div className="flex items-start gap-3">
                        <span className="text-xl">💈</span>
                        <div className="flex-1">
                          <p className="text-sm text-white font-bold mb-1">Salon - Marina</p>
                          <p className="text-xs text-slate-400 italic mb-2">"Cut CAC by 70%"</p>
                          <div className="flex gap-2">
                            <div className="bg-emerald-500/20 rounded px-2 py-1">
                              <p className="text-xs text-emerald-400 font-black">+50% new</p>
                            </div>
                            <div className="bg-purple-500/20 rounded px-2 py-1">
                              <p className="text-xs text-purple-400 font-black">AED 80 CAC</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PERFECT FOR */}
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-l-4 border-blue-500 rounded-lg p-4">
                  <h3 className="text-sm font-bold text-blue-400 mb-3 uppercase">Perfect For</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 bg-[#0a1628]/30 rounded p-2">
                      <span className="text-base">☕</span>
                      <p className="text-xs text-white font-bold">F&B</p>
                    </div>
                    <div className="flex items-center gap-2 bg-[#0a1628]/30 rounded p-2">
                      <span className="text-base">💇</span>
                      <p className="text-xs text-white font-bold">Beauty</p>
                    </div>
                    <div className="flex items-center gap-2 bg-[#0a1628]/30 rounded p-2">
                      <span className="text-base">🛍️</span>
                      <p className="text-xs text-white font-bold">Retail</p>
                    </div>
                    <div className="flex items-center gap-2 bg-[#0a1628]/30 rounded p-2">
                      <span className="text-base">🏃</span>
                      <p className="text-xs text-white font-bold">Fitness</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* STRONG CTA */}
              <div className="bg-gradient-to-br from-[#c9a227] via-[#d4ab2c] to-[#c9a227] text-[#0a1628] p-6 rounded-xl shadow-2xl border-4 border-white/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="relative z-10">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-[#0a1628]/20 flex items-center justify-center shadow-lg">
                      <span className="text-5xl">🚀</span>
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-wider mb-2">Start Growing Today</h3>
                    <p className="text-base font-bold">Zero risk • Zero upfront cost</p>
                  </div>

                  <div className="bg-gradient-to-br from-[#0a1628] to-[#0d1d3a] text-white rounded-xl p-5 mb-3 shadow-xl border-2 border-[#0a1628]/50">
                    <p className="text-lg leading-snug font-black text-center mb-4">
                      🔥 Limited Early Partner Spots
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/40 rounded-lg p-3">
                        <p className="text-sm text-emerald-400 font-black">FREE setup</p>
                        <p className="text-xs text-emerald-400/60 mt-1">No contracts</p>
                      </div>
                      <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border border-[#c9a227]/40 rounded-lg p-3">
                        <p className="text-sm text-[#c9a227] font-black">15% only</p>
                        <p className="text-xs text-[#c9a227]/60 mt-1">Per sale</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/40 rounded-lg p-3">
                        <p className="text-sm text-blue-400 font-black">72 hours</p>
                        <p className="text-xs text-blue-400/60 mt-1">First customers</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/40 rounded-lg p-3">
                        <p className="text-sm text-purple-400 font-black">Exclusive</p>
                        <p className="text-xs text-purple-400/60 mt-1">Early perks</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/40 rounded-lg p-3 mb-2">
                      <p className="text-sm text-red-300 font-black text-center">⚡ First 50 partners: Premium listing + Featured placement</p>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 border border-emerald-500/40 rounded-lg p-3">
                      <p className="text-sm text-emerald-300 font-black text-center">✓ Launching Q1 2026 • Pre-register now</p>
                    </div>
                  </div>

                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-xl">
                    <div className="text-center mb-3">
                      <p className="text-2xl font-black mb-2">📧 partners@nuqtapp.com</p>
                      <div className="inline-flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full mb-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        <p className="text-xs text-emerald-700 font-bold">Response within 24 hours</p>
                      </div>
                      <p className="text-xs text-[#0a1628]/70 font-semibold">Subject: "Early Partner Application"</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 pt-3 border-t border-[#0a1628]/10 flex-wrap">
                      <div className="bg-blue-500/10 px-3 py-1.5 rounded">
                        <span className="text-xs font-black text-blue-700">Partner deck</span>
                      </div>
                      <span className="text-[#c9a227]">•</span>
                      <div className="bg-purple-500/10 px-3 py-1.5 rounded">
                        <span className="text-xs font-black text-purple-700">ROI calculator</span>
                      </div>
                      <span className="text-[#c9a227]">•</span>
                      <div className="bg-emerald-500/10 px-3 py-1.5 rounded">
                        <span className="text-xs font-black text-emerald-700">Demo call</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 text-center">
                    <p className="text-sm font-black text-[#0a1628]">
                      ⏰ Don't miss out on early partner benefits
                    </p>
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
          <div className="text-center text-white py-20">
            <p className="text-lg">Print functionality optimized for A4 format</p>
            <p className="text-sm text-slate-400 mt-2">Please use browser print dialog</p>
          </div>
        </div>
      </div>
    </div>
  );
}
