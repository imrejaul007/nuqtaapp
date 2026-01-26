'use client';

import React from 'react';
import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';

export default function VisitingCard() {
  const websiteUrl = 'https://nuqtaapp.com';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Card Container */}
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-[#c9a227]/30">
          {/* Header Section with Brand */}
          <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 p-6 border-b border-[#c9a227]/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-black text-white mb-1">Nuqta</h1>
                <p className="text-sm text-[#c9a227] font-semibold">Rewards Platform</p>
              </div>
              <div className="w-12 h-12 bg-[#c9a227] rounded-full flex items-center justify-center">
                <span className="text-2xl font-black text-slate-900">N</span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Making rewards accessible, transparent, and truly rewarding for everyone
            </p>
          </div>

          {/* Contact Information */}
          <div className="p-6 space-y-4">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">Rejaul Karim</h2>
              <p className="text-sm text-slate-400 mb-1">Co-Founder & CEO</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:rejaul@nuqtaapp.com" className="text-sm text-slate-300 hover:text-[#c9a227] transition-colors">
                  rejaul@nuqtaapp.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-[#c9a227] transition-colors">
                  nuqtaapp.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm text-slate-300">
                  Dubai, UAE
                </span>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 border-t border-[#c9a227]/20">
            <div className="text-center mb-4">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">
                Scan to Learn More
              </p>
              <div className="flex justify-center">
                <div className="bg-white p-4 rounded-2xl shadow-lg">
                  <QRCodeSVG
                    value={websiteUrl}
                    size={160}
                    level="H"
                    includeMargin={false}
                    fgColor="#0a1628"
                    bgColor="#ffffff"
                  />
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                View our pitch deck, market data & more
              </p>
            </div>
          </div>

          {/* Footer Stats */}
          <div className="bg-[#c9a227]/10 p-4 border-t border-[#c9a227]/20">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-lg font-bold text-[#c9a227]">$78B</p>
                <p className="text-[10px] text-slate-400">GCC Market</p>
              </div>
              <div>
                <p className="text-lg font-bold text-[#c9a227]">60+</p>
                <p className="text-[10px] text-slate-400">Merchants</p>
              </div>
              <div>
                <p className="text-lg font-bold text-[#c9a227]">16.8x</p>
                <p className="text-[10px] text-slate-400">LTV:CAC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons Below Card */}
        <div className="mt-6 space-y-3">
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#c9a227] hover:bg-[#b89020] text-slate-900 font-bold py-3 px-6 rounded-xl text-center transition-all shadow-lg hover:shadow-xl"
          >
            Visit Website
          </a>
          <a
            href={`${websiteUrl}/deck-kang`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all"
          >
            View Pitch Deck
          </a>
        </div>

        {/* Share Instructions */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-400">
            Share this link: <span className="text-[#c9a227] font-mono">nuqtaapp.com/card</span>
          </p>
        </div>
      </div>
    </div>
  );
}
