'use client';

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function VisitingCard() {
  const websiteUrl = 'https://nuqtaapp.com';
  const [showBack, setShowBack] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Print Instructions */}
        <div className="text-center mb-6 print:hidden">
          <p className="text-slate-400 text-sm mb-2">
            Click cards to flip • Optimized for printing at 3.5" × 2" (standard business card size)
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => window.print()}
              className="bg-[#c9a227] hover:bg-[#b89020] text-slate-900 font-semibold px-6 py-2 rounded-lg transition-all"
            >
              Print Cards
            </button>
            <button
              onClick={() => setShowBack(!showBack)}
              className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-2 rounded-lg transition-all"
            >
              {showBack ? 'Show Front' : 'Show Back'}
            </button>
          </div>
        </div>

        {/* Two-Sided Card Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* FRONT SIDE - Contact & QR */}
          <div
            className={`${showBack ? 'hidden md:block' : 'block'} cursor-pointer`}
            onClick={() => setShowBack(!showBack)}
          >
            <div className="text-center mb-3">
              <h3 className="text-[#c9a227] font-bold text-sm">FRONT SIDE</h3>
            </div>
            <div
              className="bg-gradient-to-br from-[#0a1628] to-slate-900 rounded-2xl shadow-2xl overflow-hidden border-2 border-[#c9a227]/40"
              style={{ aspectRatio: '1.75/1', width: '100%', maxWidth: '500px', margin: '0 auto' }}
            >
              <div className="h-full flex flex-col justify-between p-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-black text-white mb-0.5">Nuqta</h1>
                    <p className="text-xs text-[#c9a227] font-semibold">Rewards That Actually Reward</p>
                  </div>
                  <div className="w-10 h-10 bg-[#c9a227] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-black text-slate-900">N</span>
                  </div>
                </div>

                {/* Contact & QR Grid */}
                <div className="grid grid-cols-2 gap-4 items-center">
                  {/* Contact Info */}
                  <div className="space-y-1.5">
                    <div>
                      <p className="text-base font-bold text-white">Rejaul Karim</p>
                      <p className="text-xs text-slate-400">Co-Founder & CEO</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <svg className="w-3 h-3 text-[#c9a227] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs text-slate-300">rejaul@nuqtaapp.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-3 h-3 text-[#c9a227] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <span className="text-xs text-slate-300">nuqtaapp.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-3 h-3 text-[#c9a227] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-xs text-slate-300">Dubai, UAE</span>
                      </div>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="bg-white p-2 rounded-lg">
                      <QRCodeSVG
                        value={websiteUrl}
                        size={90}
                        level="H"
                        includeMargin={false}
                        fgColor="#0a1628"
                        bgColor="#ffffff"
                      />
                    </div>
                    <p className="text-[9px] text-slate-500 mt-1 text-center">Scan for pitch deck</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BACK SIDE - One-Page Pitch */}
          <div
            className={`${!showBack ? 'hidden md:block' : 'block'} cursor-pointer`}
            onClick={() => setShowBack(!showBack)}
          >
            <div className="text-center mb-3">
              <h3 className="text-[#c9a227] font-bold text-sm">BACK SIDE</h3>
            </div>
            <div
              className="bg-gradient-to-br from-[#0a1628] to-slate-900 rounded-2xl shadow-2xl overflow-hidden border-2 border-[#c9a227]/40"
              style={{ aspectRatio: '1.75/1', width: '100%', maxWidth: '500px', margin: '0 auto' }}
            >
              <div className="h-full flex flex-col p-6">
                {/* Title */}
                <div className="text-center mb-3">
                  <h2 className="text-xl font-black text-[#c9a227] mb-0.5">The Rewards Revolution</h2>
                  <p className="text-xs text-slate-400">Making loyalty programs work for everyone</p>
                </div>

                {/* Problem → Solution */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-2.5">
                    <h3 className="text-xs font-bold text-red-400 mb-1">❌ The Problem</h3>
                    <ul className="text-[9px] text-slate-300 space-y-0.5">
                      <li>• Points expire unused</li>
                      <li>• Rewards lack transparency</li>
                      <li>• No real value to users</li>
                    </ul>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-2.5">
                    <h3 className="text-xs font-bold text-green-400 mb-1">✓ Our Solution</h3>
                    <ul className="text-[9px] text-slate-300 space-y-0.5">
                      <li>• Instant cashback</li>
                      <li>• Transparent rewards</li>
                      <li>• Real, usable benefits</li>
                    </ul>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-2.5 mb-3">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-lg font-black text-[#c9a227]">$78B</p>
                      <p className="text-[8px] text-slate-400 leading-tight">GCC Market (TAM)</p>
                    </div>
                    <div>
                      <p className="text-lg font-black text-[#c9a227]">60+</p>
                      <p className="text-[8px] text-slate-400 leading-tight">Merchant Network</p>
                    </div>
                    <div>
                      <p className="text-lg font-black text-[#c9a227]">16.8x</p>
                      <p className="text-[8px] text-slate-400 leading-tight">LTV:CAC Ratio</p>
                    </div>
                  </div>
                </div>

                {/* Why Now */}
                <div className="space-y-1.5">
                  <div className="flex items-start gap-2">
                    <span className="text-[#c9a227] text-xs">🎯</span>
                    <p className="text-[9px] text-slate-300 leading-snug"><strong className="text-white">Huge Opportunity:</strong> $34B UAE market ripe for disruption</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#c9a227] text-xs">💰</span>
                    <p className="text-[9px] text-slate-300 leading-snug"><strong className="text-white">Strong Unit Economics:</strong> 15% merchant fee, proven 16.8x LTV:CAC</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#c9a227] text-xs">🚀</span>
                    <p className="text-[9px] text-slate-300 leading-snug"><strong className="text-white">Traction:</strong> 30+ signed LOIs, 30 merchants in pipeline across Dubai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Print Layout (Hidden on screen, shown when printing) */}
        <div className="hidden print:block">
          <style>{`
            @media print {
              @page {
                size: 3.5in 2in;
                margin: 0;
              }
              body {
                margin: 0;
                padding: 0;
              }
              .print-page {
                page-break-after: always;
                width: 3.5in;
                height: 2in;
                padding: 0.15in;
                box-sizing: border-box;
              }
            }
          `}</style>

          {/* Front Side Print */}
          <div className="print-page">
            <div className="h-full bg-gradient-to-br from-[#0a1628] to-slate-900 rounded-lg border-2 border-[#c9a227] p-4">
              <div className="h-full flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-2xl font-black text-white">Nuqta</h1>
                    <p className="text-[10px] text-[#c9a227] font-semibold">Rewards That Actually Reward</p>
                  </div>
                  <div className="w-8 h-8 bg-[#c9a227] rounded-full flex items-center justify-center">
                    <span className="text-lg font-black text-slate-900">N</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-white">Rejaul Karim</p>
                    <p className="text-[9px] text-slate-400">Co-Founder & CEO</p>
                    <p className="text-[9px] text-slate-300">rejaul@nuqtaapp.com</p>
                    <p className="text-[9px] text-slate-300">nuqtaapp.com</p>
                    <p className="text-[9px] text-slate-300">Dubai, UAE</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-white p-1.5 rounded">
                      <QRCodeSVG value={websiteUrl} size={70} level="H" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back Side Print */}
          <div className="print-page">
            <div className="h-full bg-gradient-to-br from-[#0a1628] to-slate-900 rounded-lg border-2 border-[#c9a227] p-4">
              <div className="h-full flex flex-col">
                <div className="text-center mb-2">
                  <h2 className="text-base font-black text-[#c9a227]">The Rewards Revolution</h2>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="bg-red-500/10 border border-red-500/30 rounded p-2">
                    <h3 className="text-[9px] font-bold text-red-400 mb-1">❌ Problem</h3>
                    <p className="text-[7px] text-slate-300">Points expire, no transparency, no real value</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded p-2">
                    <h3 className="text-[9px] font-bold text-green-400 mb-1">✓ Solution</h3>
                    <p className="text-[7px] text-slate-300">Instant cashback, transparent, real benefits</p>
                  </div>
                </div>
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded p-2 mb-2">
                  <div className="grid grid-cols-3 gap-1 text-center">
                    <div>
                      <p className="text-sm font-black text-[#c9a227]">$78B</p>
                      <p className="text-[6px] text-slate-400">Market</p>
                    </div>
                    <div>
                      <p className="text-sm font-black text-[#c9a227]">60+</p>
                      <p className="text-[6px] text-slate-400">Merchants</p>
                    </div>
                    <div>
                      <p className="text-sm font-black text-[#c9a227]">16.8x</p>
                      <p className="text-[6px] text-slate-400">LTV:CAC</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[7px] text-slate-300"><strong className="text-white">Market:</strong> $34B UAE opportunity</p>
                  <p className="text-[7px] text-slate-300"><strong className="text-white">Economics:</strong> 15% fee, 16.8x LTV:CAC</p>
                  <p className="text-[7px] text-slate-300"><strong className="text-white">Traction:</strong> 60+ merchant network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
