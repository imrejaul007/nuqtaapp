'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  LayoutDashboard,
  BookOpen,
  Swords
} from 'lucide-react';

type MarketingPage = 'dashboard' | 'bible' | 'war-room';

interface MarketingNavProps {
  currentPage: MarketingPage;
}

const pages = [
  { id: 'dashboard' as const, label: 'Command Center', href: '/marketing-dashboard', icon: LayoutDashboard, desc: 'Daily execution & tracking' },
  { id: 'bible' as const, label: 'Marketing Bible', href: '/marketing-bible', icon: BookOpen, desc: '21 strategy sections' },
  { id: 'war-room' as const, label: 'War Room', href: '/marketing-war-room', icon: Swords, desc: 'Campaign analysis & tactics' },
];

export default function MarketingNav({ currentPage }: MarketingNavProps) {
  return (
    <div className="bg-[#0a1628] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link href="/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm">Dashboard</span>
          </Link>
          <div className="flex items-center gap-2">
            {pages.map((page) => (
              <Link
                key={page.id}
                href={page.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  currentPage === page.id
                    ? 'bg-[#c9a227] text-black'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <page.icon size={18} />
                <span className="hidden sm:inline">{page.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
