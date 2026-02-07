'use client';

import React from 'react';
import Link from 'next/link';

export default function GlobalHeader() {
  // Minimal header - just a small home link, not fixed
  return (
    <div className="absolute top-4 left-4 z-50">
      <Link href="/dashboard" className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
          <span className="text-black font-black text-sm">N</span>
        </div>
      </Link>
    </div>
  );
}
