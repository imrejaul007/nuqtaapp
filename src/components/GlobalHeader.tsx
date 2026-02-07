'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function GlobalHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/dashboard" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/nuqta-logo.png"
              alt="Nuqta"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-white font-semibold text-lg sm:text-xl hidden sm:inline">Nuqta</span>
          </Link>
          <nav className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/dashboard"
              className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors px-2 sm:px-3 py-1.5 sm:py-2"
            >
              Dashboard
            </Link>
            <Link
              href="/investor-outreach"
              className="text-[#c9a227] hover:text-[#e8c547] text-xs sm:text-sm font-medium transition-colors px-2 sm:px-3 py-1.5 sm:py-2 border border-[#c9a227]/30 rounded-lg hover:bg-[#c9a227]/10"
            >
              Investors
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
