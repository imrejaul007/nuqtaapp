'use client';

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function VisitingCard() {
  const websiteUrl = 'https://nuqtaapp.com';
  const [showFront, setShowFront] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl">
        {/* Instructions */}
        <div className="text-center mb-6 print:hidden">
          <h2 className="text-2xl font-bold text-white mb-2">Nuqta A4 Tri-Fold Brochure</h2>
          <p className="text-slate-400 text-sm mb-4">
            A4 size (210mm × 297mm) • Fold into 3 panels • 6 total panels (3 front, 3 back)
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setShowFront(!showFront)}
              className="bg-[#c9a227] hover:bg-[#b89020] text-slate-900 font-bold px-8 py-3 rounded-lg transition-all shadow-lg"
            >
              {showFront ? '🔄 Show Back Side' : '🔄 Show Front Side'}
            </button>
            <button
              onClick={() => window.print()}
              className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-3 rounded-lg transition-all"
            >
              🖨️ Print Brochure
            </button>
          </div>
          <p className="text-slate-500 text-xs mt-3">
            Print both sides, then fold accordion-style into 3 panels
          </p>
        </div>

        {/* FRONT SIDE - 3 Panels */}
        {showFront && (
          <div className="grid grid-cols-3 gap-2 max-w-full mx-auto mb-8 print:hidden">
            {/* Panel 1 (Left when folded) - Cover */}
            <div className="aspect-[210/297] bg-gradient-to-br from-[#c9a227] via-[#b89020] to-[#a67d1a] rounded-lg p-6 flex flex-col justify-between">
              <div>
                <div className="inline-block bg-slate-900/20 px-3 py-1.5 rounded-lg mb-4">
                  <p className="text-xs font-bold uppercase">Investment Opportunity</p>
                </div>
                <h1 className="text-4xl font-black text-slate-900 mb-3 leading-tight">
                  The Rewards Revolution
                </h1>
                <p className="text-sm font-semibold text-slate-900 leading-relaxed mb-6">
                  Transforming loyalty programs into instant, transparent cashback
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900/20 backdrop-blur rounded-lg p-4">
                  <div className="grid grid-cols-3 gap-2 text-center text-slate-900">
                    <div>
                      <p className="text-2xl font-black">$78B</p>
                      <p className="text-xs font-semibold">Market</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black">60+</p>
                      <p className="text-xs font-semibold">Network</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black">16.8x</p>
                      <p className="text-xs font-semibold">LTV:CAC</p>
                    </div>
                  </div>
                </div>

                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-black text-[#c9a227]">N</span>
                </div>
              </div>
            </div>

            {/* Panel 2 (Inside Left) - Problem & Solution */}
            <div className="aspect-[210/297] bg-gradient-to-br from-[#0a1628] via-[#0d1d3a] to-[#0a1628] rounded-lg p-6 border-2 border-[#c9a227]/30">
              <h2 className="text-[#c9a227] font-black text-2xl mb-4">The Opportunity</h2>

              <div className="space-y-3 mb-6">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                  <p className="text-red-400 font-bold text-sm mb-2">❌ Current Problem</p>
                  <ul className="text-slate-300 text-xs space-y-1.5">
                    <li>• 70% of loyalty points expire unused</li>
                    <li>• Complex redemption processes</li>
                    <li>• Zero transparency on rewards</li>
                    <li>• No real value for consumers</li>
                  </ul>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                  <p className="text-green-400 font-bold text-sm mb-2">✓ Our Solution</p>
                  <ul className="text-slate-300 text-xs space-y-1.5">
                    <li>• <strong>Instant</strong> cashback rewards</li>
                    <li>• <strong>100%</strong> transparent system</li>
                    <li>• <strong>Real</strong> monetary value</li>
                    <li>• <strong>Universal</strong> merchant network</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-4">
                <h3 className="text-white font-bold text-sm mb-2">Why Now?</h3>
                <ul className="text-slate-300 text-xs space-y-1.5">
                  <li>• GCC market ripe for disruption</li>
                  <li>• Consumers demand transparency</li>
                  <li>• Technology enables instant rewards</li>
                </ul>
              </div>
            </div>

            {/* Panel 3 (Inside Right) - Market & Model */}
            <div className="aspect-[210/297] bg-gradient-to-br from-[#0a1628] via-[#0d1d3a] to-[#0a1628] rounded-lg p-6 border-2 border-[#c9a227]/30">
              <div className="mb-6">
                <h2 className="text-[#c9a227] font-black text-2xl mb-4">Market Size</h2>
                <div className="space-y-2">
                  <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-bold text-sm">TAM (GCC)</span>
                      <span className="text-[#c9a227] font-black text-xl">$78B</span>
                    </div>
                    <p className="text-slate-400 text-xs">F&B, salons, fitness</p>
                  </div>
                  <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-bold text-sm">SAM (UAE)</span>
                      <span className="text-[#c9a227] font-black text-xl">$34B</span>
                    </div>
                    <p className="text-slate-400 text-xs">Target market</p>
                  </div>
                  <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-bold text-sm">SOM</span>
                      <span className="text-[#c9a227] font-black text-xl">$340M</span>
                    </div>
                    <p className="text-slate-400 text-xs">1% penetration</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-[#c9a227] font-black text-2xl mb-4">Business Model</h2>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 space-y-3">
                  <div>
                    <p className="text-white font-bold text-sm mb-1">Revenue</p>
                    <p className="text-slate-300 text-xs">15% commission per transaction</p>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">Unit Economics</p>
                    <p className="text-slate-300 text-xs">16.8x LTV:CAC (proven)</p>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">Defensibility</p>
                    <p className="text-slate-300 text-xs">Network effects + merchant lock-in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BACK SIDE - 3 Panels (reversed order for folding) */}
        {!showFront && (
          <div className="grid grid-cols-3 gap-2 max-w-full mx-auto mb-8 print:hidden">
            {/* Panel 4 (Back of Panel 3) - Traction */}
            <div className="aspect-[210/297] bg-gradient-to-br from-[#0a1628] via-[#0d1d3a] to-[#0a1628] rounded-lg p-6 border-2 border-[#c9a227]/30">
              <h2 className="text-[#c9a227] font-black text-2xl mb-4">Current Traction</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-2xl">🚀</span>
                    <div>
                      <p className="text-emerald-400 font-bold text-sm mb-1">60+ Merchant Network</p>
                      <p className="text-slate-300 text-xs">30+ signed LOIs + 30 in pipeline</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <p className="text-blue-400 font-bold text-sm mb-1">Strategic Locations</p>
                      <p className="text-slate-300 text-xs">Dubai Marina, Downtown, JBR</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-2xl">💡</span>
                    <div>
                      <p className="text-purple-400 font-bold text-sm mb-1">Validation</p>
                      <p className="text-slate-300 text-xs">Strong merchant interest validates PMF</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-4">
                <h3 className="text-white font-bold text-sm mb-2">Competitive Advantage</h3>
                <ul className="text-slate-300 text-xs space-y-1.5">
                  <li>• First-mover in GCC instant cashback</li>
                  <li>• Superior merchant economics</li>
                  <li>• Network effects as we scale</li>
                </ul>
              </div>
            </div>

            {/* Panel 5 (Back of Panel 2) - Team & Use of Funds */}
            <div className="aspect-[210/297] bg-gradient-to-br from-[#0a1628] via-[#0d1d3a] to-[#0a1628] rounded-lg p-6 border-2 border-[#c9a227]/30">
              <div className="mb-6">
                <h2 className="text-[#c9a227] font-black text-2xl mb-4">The Ask</h2>
                <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 border border-[#c9a227]/30 rounded-lg p-4 mb-4">
                  <p className="text-white font-black text-3xl mb-1">$500K</p>
                  <p className="text-slate-300 text-sm">Pre-seed fundraise at $5M valuation cap</p>
                </div>

                <h3 className="text-white font-bold text-lg mb-3">Use of Funds</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-blue-500/10 border border-blue-500/30 rounded p-2">
                    <span className="text-slate-300 text-xs">Product & Tech</span>
                    <span className="text-blue-400 font-bold text-sm">40%</span>
                  </div>
                  <div className="flex justify-between items-center bg-purple-500/10 border border-purple-500/30 rounded p-2">
                    <span className="text-slate-300 text-xs">Marketing & Growth</span>
                    <span className="text-purple-400 font-bold text-sm">35%</span>
                  </div>
                  <div className="flex justify-between items-center bg-orange-500/10 border border-orange-500/30 rounded p-2">
                    <span className="text-slate-300 text-xs">Operations</span>
                    <span className="text-orange-400 font-bold text-sm">25%</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                <h3 className="text-white font-bold text-sm mb-2">12-Month Milestones</h3>
                <ul className="text-slate-300 text-xs space-y-1.5">
                  <li>• 200+ merchant network</li>
                  <li>• 50K active users</li>
                  <li>• $5M GMV processed</li>
                  <li>• Break-even unit economics</li>
                </ul>
              </div>
            </div>

            {/* Panel 6 (Back of Panel 1) - Contact */}
            <div className="aspect-[210/297] bg-gradient-to-br from-[#0a1628] via-[#0d1d3a] to-[#0a1628] rounded-lg p-6 border-2 border-[#c9a227]/30 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-[#c9a227] rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl font-black text-slate-900">N</span>
                </div>
                <h1 className="text-4xl font-black text-white mb-2">Nuqta</h1>
                <p className="text-sm text-[#c9a227] font-bold mb-6">Rewards That Actually Reward</p>

                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-4 mb-6">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Making loyalty programs transparent, instant, and truly rewarding for everyone
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Rejaul Karim</h3>
                    <p className="text-slate-400 text-sm">Co-Founder & CEO</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#c9a227]/10 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-slate-300 text-sm">rejaul@nuqtaapp.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#c9a227]/10 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <span className="text-slate-300 text-sm">nuqtaapp.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#c9a227]/10 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-slate-300 text-sm">Dubai, UAE</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-4 rounded-xl inline-block mb-2">
                  <QRCodeSVG
                    value={websiteUrl}
                    size={120}
                    level="H"
                    includeMargin={false}
                    fgColor="#0a1628"
                    bgColor="#ffffff"
                  />
                </div>
                <p className="text-slate-500 text-xs">Scan for full pitch deck</p>
              </div>
            </div>
          </div>
        )}

        {/* Print Layout - Both sides on separate pages */}
        <style>{`
          @media print {
            @page {
              size: A4 portrait;
              margin: 10mm;
            }
            body {
              margin: 0;
              padding: 0;
            }
            .print-side {
              display: grid !important;
              grid-template-columns: repeat(3, 1fr);
              gap: 5mm;
              width: 100%;
              page-break-after: always;
            }
            .print-panel {
              height: 267mm;
              padding: 5mm;
              box-sizing: border-box;
              break-inside: avoid;
            }
          }
        `}</style>

        <div className="hidden print:block">
          {/* Print Front Side */}
          <div className="print-side">
            {/* Panels 1, 2, 3 (same content as screen front) */}
            <div className="print-panel bg-gradient-to-br from-[#c9a227] to-[#a67d1a] rounded-lg">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-slate-900/20 px-2 py-1 rounded mb-3">
                    <p className="text-xs font-bold uppercase">Investment Opportunity</p>
                  </div>
                  <h1 className="text-3xl font-black text-slate-900 mb-2 leading-tight">
                    The Rewards Revolution
                  </h1>
                  <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                    Transforming loyalty programs into instant, transparent cashback
                  </p>
                </div>
                <div className="bg-slate-900/20 rounded p-3">
                  <div className="grid grid-cols-3 gap-2 text-center text-slate-900">
                    <div><p className="text-xl font-black">$78B</p><p className="text-xs">Market</p></div>
                    <div><p className="text-xl font-black">60+</p><p className="text-xs">Network</p></div>
                    <div><p className="text-xl font-black">16.8x</p><p className="text-xs">LTV:CAC</p></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="print-panel bg-gradient-to-br from-[#0a1628] to-slate-900 rounded border-2 border-[#c9a227]">
              <h2 className="text-[#c9a227] font-black text-xl mb-3">The Opportunity</h2>
              <div className="space-y-2 mb-4 text-xs">
                <div className="bg-red-500/10 border border-red-500/30 rounded p-2">
                  <p className="text-red-400 font-bold mb-1">❌ Problem</p>
                  <p className="text-slate-300 text-xs">70% points expire, no transparency, zero value</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded p-2">
                  <p className="text-green-400 font-bold mb-1">✓ Solution</p>
                  <p className="text-slate-300 text-xs">Instant cashback, 100% transparent, real value</p>
                </div>
              </div>
            </div>

            <div className="print-panel bg-gradient-to-br from-[#0a1628] to-slate-900 rounded border-2 border-[#c9a227]">
              <h2 className="text-[#c9a227] font-black text-xl mb-3">Market & Model</h2>
              <div className="space-y-2 mb-4">
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded p-2 flex justify-between">
                  <span className="text-white font-bold text-xs">TAM</span>
                  <span className="text-[#c9a227] font-black">$78B</span>
                </div>
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded p-2 flex justify-between">
                  <span className="text-white font-bold text-xs">SAM</span>
                  <span className="text-[#c9a227] font-black">$34B</span>
                </div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded p-3">
                <p className="text-slate-300 text-xs"><strong>Revenue:</strong> 15% commission</p>
                <p className="text-slate-300 text-xs"><strong>LTV:CAC:</strong> 16.8x (proven)</p>
              </div>
            </div>
          </div>

          {/* Print Back Side */}
          <div className="print-side">
            {/* Panels 4, 5, 6 (reversed for proper folding) */}
            <div className="print-panel bg-gradient-to-br from-[#0a1628] to-slate-900 rounded border-2 border-[#c9a227]">
              <h2 className="text-[#c9a227] font-black text-xl mb-3">Traction</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded p-2">
                  <p className="text-emerald-400 font-bold mb-1">60+ Merchants</p>
                  <p className="text-slate-300">30+ LOIs + 30 pipeline</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded p-2">
                  <p className="text-blue-400 font-bold mb-1">Strategic Locations</p>
                  <p className="text-slate-300">Dubai Marina, Downtown, JBR</p>
                </div>
              </div>
            </div>

            <div className="print-panel bg-gradient-to-br from-[#0a1628] to-slate-900 rounded border-2 border-[#c9a227]">
              <h2 className="text-[#c9a227] font-black text-xl mb-3">The Ask</h2>
              <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 border border-[#c9a227]/30 rounded p-3 mb-3">
                <p className="text-white font-black text-2xl">$500K</p>
                <p className="text-slate-300 text-xs">At $5M cap</p>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between bg-blue-500/10 rounded p-1.5">
                  <span className="text-slate-300 text-xs">Product</span>
                  <span className="text-blue-400 font-bold text-xs">40%</span>
                </div>
                <div className="flex justify-between bg-purple-500/10 rounded p-1.5">
                  <span className="text-slate-300 text-xs">Marketing</span>
                  <span className="text-purple-400 font-bold text-xs">35%</span>
                </div>
                <div className="flex justify-between bg-orange-500/10 rounded p-1.5">
                  <span className="text-slate-300 text-xs">Operations</span>
                  <span className="text-orange-400 font-bold text-xs">25%</span>
                </div>
              </div>
            </div>

            <div className="print-panel bg-gradient-to-br from-[#0a1628] to-slate-900 rounded border-2 border-[#c9a227]">
              <div className="w-12 h-12 bg-[#c9a227] rounded-xl flex items-center justify-center mb-3">
                <span className="text-2xl font-black text-slate-900">N</span>
              </div>
              <h1 className="text-3xl font-black text-white mb-2">Nuqta</h1>
              <div className="mb-4">
                <p className="text-white font-bold mb-1">Rejaul Karim</p>
                <p className="text-slate-400 text-xs">Co-Founder & CEO</p>
                <div className="space-y-1 mt-2 text-slate-300 text-xs">
                  <p>rejaul@nuqtaapp.com</p>
                  <p>nuqtaapp.com</p>
                  <p>Dubai, UAE</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-3 rounded inline-block">
                  <QRCodeSVG value={websiteUrl} size={100} level="H" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
