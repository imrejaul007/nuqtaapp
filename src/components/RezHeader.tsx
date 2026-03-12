'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Coins, ArrowRight, Home } from 'lucide-react';

// ============================================
// ReZ HEADER — Consistent branding across all ReZ pages
// ============================================

const tabs = [
  { label: 'Overview', route: '/rez' },
  { label: 'Financials', route: '/rez-financials' },
  { label: 'Deck', route: '/rez-deck' },
  { label: 'Strategy', route: '/rez-financials/acquisition' },
  { label: 'Investors', route: '/rez-financials/investors' },
];

export default function RezHeader() {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => setCurrentPath(window.location.pathname), []);

  return (
    <header className="bg-gradient-to-r from-orange-900 to-red-900 border-b border-orange-500/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/rez" className="flex items-center gap-2 hover:opacity-80">
          <Coins className="text-orange-400" />
          <span className="text-white font-bold text-lg">ReZ</span>
        </Link>
        <nav className="hidden md:flex gap-1">
          {tabs.map(tab => (
            <Link
              key={tab.route}
              href={tab.route}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                currentPath.startsWith(tab.route)
                  ? 'bg-orange-500 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
        <Link href="/" className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white">
          <Home size={14} /> Back to Nuqta
        </Link>
      </div>
    </header>
  );
}
