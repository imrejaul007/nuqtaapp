'use client';

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function VisitingCard() {
  const websiteUrl = 'https://nuqtaapp.com';
  const [folded, setFolded] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 overflow-x-hidden">
      <div className="w-full max-w-7xl">
        {/* Instructions */}
        <div className="text-center mb-8 print:hidden">
          <h2 className="text-2xl font-bold text-white mb-2">Nuqta Investment Brochure</h2>
          <p className="text-slate-400 text-sm mb-4">
            Interactive tri-fold design • Click to unfold and explore • Optimized for printing
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setFolded(!folded)}
              className="bg-[#c9a227] hover:bg-[#b89020] text-slate-900 font-bold px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {folded ? '📖 Unfold Brochure' : '📚 Fold Brochure'}
            </button>
            <button
              onClick={() => window.print()}
              className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-3 rounded-lg transition-all"
            >
              🖨️ Print Brochure
            </button>
          </div>
        </div>

        {/* Tri-Fold Brochure Layout */}
        <div className="relative perspective-1000">
          <div
            className={`flex gap-1 transition-all duration-700 ease-in-out transform-gpu ${
              folded
                ? 'scale-75 md:scale-90'
                : 'scale-100'
            }`}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* LEFT PANEL - Contact & Branding */}
            <div
              className={`transition-all duration-700 ${
                folded ? 'w-0 opacity-0 -translate-x-20' : 'w-80 opacity-100 translate-x-0'
              }`}
              style={{ transformOrigin: 'right center' }}
            >
              <div className="h-[600px] bg-gradient-to-br from-[#0a1628] via-[#0d1d3a] to-[#0a1628] rounded-l-2xl shadow-2xl p-8 border-2 border-[#c9a227]/30 border-r-0">
                {/* Logo */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#c9a227] rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-3xl font-black text-slate-900">N</span>
                  </div>
                  <h1 className="text-4xl font-black text-white mb-2">Nuqta</h1>
                  <p className="text-sm text-[#c9a227] font-bold">Rewards That Actually Reward</p>
                </div>

                {/* Tagline */}
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-4 mb-6">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Making loyalty programs transparent, instant, and truly rewarding for everyone
                  </p>
                </div>

                {/* Contact */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Rejaul Karim</h3>
                    <p className="text-slate-400 text-sm">Co-Founder & CEO</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#c9a227]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-slate-300 text-sm">rejaul@nuqtaapp.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#c9a227]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <span className="text-slate-300 text-sm">nuqtaapp.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#c9a227]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-slate-300 text-sm">Dubai, UAE</span>
                    </div>
                  </div>
                </div>

                {/* QR Code */}
                <div className="bg-white p-4 rounded-xl w-fit mx-auto">
                  <QRCodeSVG
                    value={websiteUrl}
                    size={120}
                    level="H"
                    includeMargin={false}
                    fgColor="#0a1628"
                    bgColor="#ffffff"
                  />
                </div>
                <p className="text-center text-xs text-slate-500 mt-2">Scan for full pitch deck</p>
              </div>
            </div>

            {/* CENTER PANEL - Cover/Main Pitch */}
            <div className="w-80 flex-shrink-0">
              <div
                className="h-[600px] bg-gradient-to-br from-[#c9a227] via-[#b89020] to-[#a67d1a] rounded-2xl shadow-2xl p-8 cursor-pointer transform hover:scale-105 transition-transform duration-300 border-2 border-[#c9a227]"
                onClick={() => setFolded(!folded)}
              >
                <div className="h-full flex flex-col justify-between text-slate-900">
                  {/* Top */}
                  <div>
                    <div className="inline-block bg-slate-900/20 px-4 py-2 rounded-lg mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider">Investment Opportunity</p>
                    </div>

                    <h2 className="text-5xl font-black mb-4 leading-tight">
                      The Rewards Revolution
                    </h2>

                    <p className="text-lg font-semibold mb-8 leading-relaxed">
                      Transforming loyalty programs into instant, transparent cashback for the GCC market
                    </p>
                  </div>

                  {/* Middle - Key Stats */}
                  <div className="space-y-4">
                    <div className="bg-slate-900/20 backdrop-blur rounded-xl p-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-3xl font-black">$78B</p>
                          <p className="text-xs font-semibold">GCC Market</p>
                        </div>
                        <div>
                          <p className="text-3xl font-black">60+</p>
                          <p className="text-xs font-semibold">Merchants</p>
                        </div>
                        <div>
                          <p className="text-3xl font-black">16.8x</p>
                          <p className="text-xs font-semibold">LTV:CAC</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="text-center">
                    <p className="text-sm font-bold mb-2">
                      {folded ? '📖 Click to Open' : '📚 Click to Close'}
                    </p>
                    <p className="text-xs opacity-80">
                      Explore our one-page investment brief
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL - The Pitch */}
            <div
              className={`transition-all duration-700 ${
                folded ? 'w-0 opacity-0 translate-x-20' : 'w-80 opacity-100 translate-x-0'
              }`}
              style={{ transformOrigin: 'left center' }}
            >
              <div className="h-[600px] bg-gradient-to-br from-[#0a1628] via-[#0d1d3a] to-[#0a1628] rounded-r-2xl shadow-2xl p-6 border-2 border-[#c9a227]/30 border-l-0 overflow-y-auto">
                {/* Problem/Solution */}
                <div className="mb-6">
                  <h3 className="text-[#c9a227] font-black text-xl mb-4">The Opportunity</h3>

                  <div className="space-y-3">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                      <p className="text-red-400 font-bold text-sm mb-2">❌ Current Problem</p>
                      <ul className="text-slate-300 text-xs space-y-1">
                        <li>• 70% of loyalty points expire unused</li>
                        <li>• Complex redemption processes</li>
                        <li>• Zero transparency on rewards</li>
                        <li>• No real value for consumers</li>
                      </ul>
                    </div>

                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                      <p className="text-green-400 font-bold text-sm mb-2">✓ Our Solution</p>
                      <ul className="text-slate-300 text-xs space-y-1">
                        <li>• <strong>Instant</strong> cashback rewards</li>
                        <li>• <strong>100%</strong> transparent system</li>
                        <li>• <strong>Real</strong> monetary value</li>
                        <li>• <strong>Universal</strong> merchant network</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Market */}
                <div className="mb-6">
                  <h3 className="text-[#c9a227] font-black text-xl mb-3">Market Size</h3>
                  <div className="space-y-2">
                    <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white font-bold text-sm">TAM (GCC)</span>
                        <span className="text-[#c9a227] font-black text-lg">$78B</span>
                      </div>
                      <p className="text-slate-400 text-xs">F&B, salons, fitness market</p>
                    </div>
                    <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white font-bold text-sm">SAM (UAE)</span>
                        <span className="text-[#c9a227] font-black text-lg">$34B</span>
                      </div>
                      <p className="text-slate-400 text-xs">Our immediate target market</p>
                    </div>
                    <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white font-bold text-sm">SOM (Target)</span>
                        <span className="text-[#c9a227] font-black text-lg">$340M</span>
                      </div>
                      <p className="text-slate-400 text-xs">1% market penetration goal</p>
                    </div>
                  </div>
                </div>

                {/* Business Model */}
                <div className="mb-6">
                  <h3 className="text-[#c9a227] font-black text-xl mb-3">Business Model</h3>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <div className="space-y-3">
                      <div>
                        <p className="text-white font-bold text-sm mb-1">Revenue</p>
                        <p className="text-slate-300 text-xs">15% commission per transaction</p>
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm mb-1">Unit Economics</p>
                        <p className="text-slate-300 text-xs">16.8x LTV:CAC ratio (proven)</p>
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm mb-1">Defensibility</p>
                        <p className="text-slate-300 text-xs">Network effects + merchant lock-in</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Traction */}
                <div>
                  <h3 className="text-[#c9a227] font-black text-xl mb-3">Current Traction</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-[#c9a227]">🚀</span>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        <strong className="text-white">60+ Merchant Network:</strong> 30+ signed LOIs, 30 in pipeline across Dubai Marina, Downtown, JBR
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#c9a227]">🎯</span>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        <strong className="text-white">Strategic Focus:</strong> High-traffic F&B, salon, fitness venues
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#c9a227]">💡</span>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        <strong className="text-white">Validation:</strong> Strong merchant interest validates problem-solution fit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Print Layout - Tri-fold */}
        <style>{`
          @media print {
            @page {
              size: 11in 8.5in landscape;
              margin: 0.5in;
            }
            body {
              margin: 0;
              padding: 0;
            }
            .print-trifold {
              display: flex !important;
              gap: 0.25in;
              width: 100%;
              height: 7.5in;
            }
            .print-panel {
              width: 3.25in;
              height: 7.5in;
              padding: 0.25in;
              box-sizing: border-box;
            }
          }
        `}</style>

        <div className="hidden print:block print-trifold">
          {/* Left Panel - Contact */}
          <div className="print-panel bg-gradient-to-br from-[#0a1628] to-slate-900 rounded-lg border-2 border-[#c9a227]">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#c9a227] rounded-xl flex items-center justify-center mb-3">
                  <span className="text-2xl font-black text-slate-900">N</span>
                </div>
                <h1 className="text-3xl font-black text-white mb-1">Nuqta</h1>
                <p className="text-xs text-[#c9a227] font-bold mb-4">Rewards That Actually Reward</p>

                <div className="mb-4">
                  <p className="text-white font-bold text-base mb-0.5">Rejaul Karim</p>
                  <p className="text-slate-400 text-xs mb-2">Co-Founder & CEO</p>
                  <div className="space-y-1 text-slate-300 text-xs">
                    <p>rejaul@nuqtaapp.com</p>
                    <p>nuqtaapp.com</p>
                    <p>Dubai, UAE</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-3 rounded-lg inline-block">
                  <QRCodeSVG value={websiteUrl} size={100} level="H" />
                </div>
                <p className="text-slate-500 text-xs mt-2">Scan for pitch deck</p>
              </div>
            </div>
          </div>

          {/* Center Panel - Cover */}
          <div className="print-panel bg-gradient-to-br from-[#c9a227] to-[#a67d1a] rounded-lg">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="inline-block bg-slate-900/20 px-3 py-1.5 rounded-lg mb-4">
                  <p className="text-xs font-bold uppercase">Investment Opportunity</p>
                </div>
                <h2 className="text-4xl font-black mb-3 leading-tight text-slate-900">
                  The Rewards Revolution
                </h2>
                <p className="text-base font-semibold text-slate-900 leading-relaxed">
                  Transforming loyalty programs into instant, transparent cashback
                </p>
              </div>

              <div className="bg-slate-900/20 backdrop-blur rounded-xl p-4">
                <div className="grid grid-cols-3 gap-3 text-center text-slate-900">
                  <div>
                    <p className="text-2xl font-black">$78B</p>
                    <p className="text-xs font-semibold">Market</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black">60+</p>
                    <p className="text-xs font-semibold">Merchants</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black">16.8x</p>
                    <p className="text-xs font-semibold">LTV:CAC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Pitch */}
          <div className="print-panel bg-gradient-to-br from-[#0a1628] to-slate-900 rounded-lg border-2 border-[#c9a227]">
            <div className="space-y-3 text-xs">
              <div>
                <h3 className="text-[#c9a227] font-black text-base mb-2">Problem & Solution</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-red-500/10 border border-red-500/30 rounded p-2">
                    <p className="text-red-400 font-bold text-xs mb-1">❌ Problem</p>
                    <p className="text-slate-300 text-[10px]">70% points expire, no transparency, zero real value</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded p-2">
                    <p className="text-green-400 font-bold text-xs mb-1">✓ Solution</p>
                    <p className="text-slate-300 text-[10px]">Instant cashback, 100% transparent, real value</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#c9a227] font-black text-base mb-2">Market Size</h3>
                <div className="space-y-1.5">
                  <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded p-2 flex justify-between items-center">
                    <span className="text-white font-bold text-xs">TAM (GCC)</span>
                    <span className="text-[#c9a227] font-black text-sm">$78B</span>
                  </div>
                  <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded p-2 flex justify-between items-center">
                    <span className="text-white font-bold text-xs">SAM (UAE)</span>
                    <span className="text-[#c9a227] font-black text-sm">$34B</span>
                  </div>
                  <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded p-2 flex justify-between items-center">
                    <span className="text-white font-bold text-xs">SOM (Target)</span>
                    <span className="text-[#c9a227] font-black text-sm">$340M</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#c9a227] font-black text-base mb-2">Business Model</h3>
                <div className="bg-slate-800/50 border border-slate-700 rounded p-2 space-y-1.5">
                  <p className="text-slate-300 text-[10px]"><strong className="text-white">Revenue:</strong> 15% commission per transaction</p>
                  <p className="text-slate-300 text-[10px]"><strong className="text-white">Economics:</strong> 16.8x LTV:CAC (proven)</p>
                  <p className="text-slate-300 text-[10px]"><strong className="text-white">Traction:</strong> 60+ merchant network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
