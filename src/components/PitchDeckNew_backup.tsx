'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface PitchDeckProps {
  isOpen: boolean;
  onClose: () => void;
}

// ==================== TOOLTIP COMPONENT ====================
function DataPoint({
  value,
  source,
  className = ''
}: {
  value: string;
  source: string;
  className?: string;
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <span
      className={`relative cursor-help inline-flex items-start gap-1 ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onTouchStart={() => setShowTooltip(true)}
      onTouchEnd={() => setTimeout(() => setShowTooltip(false), 3000)}
    >
      <span>{value}</span>
      <span className="text-[0.25em] text-[#c9a227]/70 hover:text-[#c9a227] transition-colors mt-1">ⓘ</span>
      {showTooltip && (
        <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[#0a1628] border border-[#c9a227]/50 rounded-lg text-xs sm:text-sm text-gray-300 whitespace-normal max-w-[200px] sm:max-w-[280px] text-center shadow-xl font-normal">
          <span className="text-[#c9a227] font-medium">Source:</span> {source}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#c9a227]/50" />
        </span>
      )}
    </span>
  );
}

// ==================== MAIN COMPONENT ====================
export default function PitchDeckNew({ isOpen, onClose }: PitchDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 19;

  // NEW Section definitions (4 acts instead of 7)
  const sections = [
    { name: 'Problem', slides: [0, 1, 2], color: '#ef4444' },
    { name: 'Solution', slides: [3, 4, 5, 6, 7, 8], color: '#22c55e' },
    { name: 'Business', slides: [9, 10, 11, 12, 13], color: '#8b5cf6' },
    { name: 'Ask', slides: [14, 15, 16, 17, 18], color: '#c9a227' },
  ];

  const getCurrentSection = () => {
    return sections.findIndex(section => section.slides.includes(currentSlide));
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
    } else if (e.key === 'ArrowLeft') {
      setCurrentSlide(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Escape') {
      onClose();
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setCurrentSlide(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // ==================== RENDER SLIDES ====================
  const renderSlide = () => {
    switch (currentSlide) {
      // ==================== SLIDE 0: COVER (Enhanced) ====================
      case 0:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#0a1628] via-[#0d1c30] to-[#0a1628]">
            {/* Logo */}
            <div className="relative mb-4 sm:mb-6">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden relative">
                <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain p-2 sm:p-3" priority />
              </div>
              <div className="absolute -inset-4 sm:-inset-6 bg-[#c9a227]/20 rounded-full blur-3xl -z-10" />
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-1 sm:mb-2">
              NUQTA
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-[#c9a227] font-light mb-3 sm:mb-4">نقطة</p>

            {/* Tagline */}
            <p className="text-sm sm:text-base md:text-lg text-gray-400 font-light max-w-xs sm:max-w-md mb-6 sm:mb-8">
              5% base + 5% social bonus Cashback + Smart Payment Tips for the GCC
            </p>

            {/* Key Metrics Bar (Enhanced) */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-6">
              <div className="text-center px-3 sm:px-4 py-2 bg-[#c9a227]/10 rounded-lg border border-[#c9a227]/30">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#c9a227]">$500K</p>
                <p className="text-[10px] sm:text-xs text-gray-500">Raising</p>
              </div>
              <div className="w-px h-8 bg-gray-700" />
              <div className="text-center px-3 sm:px-4 py-2 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">$5M</p>
                <p className="text-[10px] sm:text-xs text-gray-500">Cap</p>
              </div>
              <div className="w-px h-8 bg-gray-700" />
              <div className="text-center px-3 sm:px-4 py-2 bg-green-500/10 rounded-lg border border-green-500/30">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">20%</p>
                <p className="text-[10px] sm:text-xs text-gray-500">Discount</p>
              </div>
              <div className="w-px h-8 bg-gray-700" />
              <div className="text-center px-3 sm:px-4 py-2 bg-purple-500/10 rounded-lg border border-purple-500/30">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400">Q2 2026</p>
                <p className="text-[10px] sm:text-xs text-gray-500">Launch</p>
              </div>
            </div>

            {/* Bottom Line */}
            <p className="text-xs sm:text-sm text-gray-500">
              Pre-Seed Round | Convertible Note (CCD) | 18-24mo Runway
            </p>
          </div>
        );

      // ==================== SLIDE 1: THE PROBLEM (Consolidated) ====================
      case 1:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-4 sm:py-6">
            <p className="text-red-400 text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">The Problem</p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 sm:mb-8">
              You <span className="text-[#c9a227]">spend</span>.
              <br />
              You <span className="text-red-500">don&apos;t get paid</span>.
            </h2>

            {/* Problem Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl w-full mb-6">
              {/* User Pain */}
              <div className="bg-red-500/10 rounded-xl p-4 sm:p-6 border-2 border-red-500/30">
                <div className="text-4xl sm:text-5xl mb-3">😔</div>
                <DataPoint
                  value="70%"
                  source="McKinsey GCC Payments Report 2024"
                  className="text-3xl sm:text-4xl font-black text-red-400 block mb-2"
                />
                <p className="text-sm sm:text-base text-gray-300">
                  of offline spending earns <span className="text-red-400 font-bold">zero rewards</span>
                </p>
              </div>

              {/* Fragmentation */}
              <div className="bg-red-500/10 rounded-xl p-4 sm:p-6 border-2 border-red-500/30">
                <div className="text-4xl sm:text-5xl mb-3">🤯</div>
                <DataPoint
                  value="5+"
                  source="Internal UAE consumer survey, 2024"
                  className="text-3xl sm:text-4xl font-black text-red-400 block mb-2"
                />
                <p className="text-sm sm:text-base text-gray-300">
                  loyalty apps per user — <span className="text-red-400 font-bold">none talk to each other</span>
                </p>
              </div>

              {/* Merchant Pain */}
              <div className="bg-red-500/10 rounded-xl p-4 sm:p-6 border-2 border-red-500/30">
                <div className="text-4xl sm:text-5xl mb-3">💸</div>
                <DataPoint
                  value="25-30%"
                  source="Talabat, Noon, Deliveroo commission structures"
                  className="text-3xl sm:text-4xl font-black text-red-400 block mb-2"
                />
                <p className="text-sm sm:text-base text-gray-300">
                  fees to aggregators — <span className="text-red-400 font-bold">merchants don&apos;t own customers</span>
                </p>
              </div>

              {/* Market Size */}
              <div className="bg-red-500/10 rounded-xl p-4 sm:p-6 border-2 border-red-500/30">
                <div className="text-4xl sm:text-5xl mb-3">💰</div>
                <p className="text-3xl sm:text-4xl font-black text-red-400 mb-2">$150B+</p>
                <p className="text-sm sm:text-base text-gray-300">
                  GCC consumers spend annually — <span className="text-red-400 font-bold">value left on table</span>
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
              <span className="text-white font-semibold">The gap:</span> Consumers want rewards. Merchants want direct relationships.
              <span className="text-red-400 font-bold"> No one is solving both.</span>
            </p>
          </div>
        );

      // ==================== SLIDE 2: WHY NOW? ====================
      case 2:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-6">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">Timing & Momentum</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Why <span className="text-[#c9a227]">Now</span>?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 max-w-4xl w-full mb-3 sm:mb-4">
              {[
                {
                  icon: '📱',
                  title: 'Digital Payment Explosion',
                  stat: '86%',
                  desc: 'UAE digital payment adoption in 2024 (up from 60% in 2020)',
                  source: 'Visa Back to Business Study 2024 & CBUAE Reports'
                },
                {
                  icon: '💳',
                  title: 'BNPL Boom',
                  stat: '$6.5B',
                  desc: 'MENA BNPL market size by 2028 (23% CAGR)',
                  source: 'Research and Markets - MENA BNPL Report 2024'
                },
                {
                  icon: '🏦',
                  title: 'Open Banking Coming',
                  stat: '2025-26',
                  desc: 'UAE open banking framework rollout underway',
                  source: 'CBUAE Financial Infrastructure Transformation Programme'
                },
                {
                  icon: '🎯',
                  title: 'Rewards Gap',
                  stat: '5-10%',
                  desc: 'Cashback rates consumers expect (vs 1-3% banks offer)',
                  source: 'GCC consumer fintech adoption survey 2024'
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#1a2a42]/50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-[#2a3a52] hover:border-[#c9a227]/50 transition-colors">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl flex-shrink-0">{item.icon}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                        <h3 className="font-bold text-xs sm:text-sm">{item.title}</h3>
                        <span className="text-[#c9a227] font-black text-sm sm:text-base md:text-lg whitespace-nowrap">{item.stat}</span>
                      </div>
                      <p className="text-gray-400 text-[10px] sm:text-xs mb-1">{item.desc}</p>
                      <p className="text-gray-600 text-[9px] sm:text-[10px] italic">Source: {item.source}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Insight */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-[#c9a227]/40 max-w-3xl">
              <p className="text-center text-xs sm:text-sm text-gray-300">
                <span className="text-[#c9a227] font-bold">The perfect storm:</span> Infrastructure ready + consumer expectations rising + merchant fees unsustainable.
                <span className="text-white font-semibold"> This is the moment for payment intelligence.</span>
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 3: THE SOLUTION ====================
      case 3:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-4 sm:py-6">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">The Solution</p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 sm:mb-6">
              Nuqta <span className="text-[#c9a227]">pays you</span> to shop.
            </h2>

            <div className="bg-[#1a2a42]/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 max-w-2xl border border-[#c9a227]/30 mb-3 sm:mb-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#c9a227] mb-4 sm:mb-6">
                5% guaranteed + 5% social bonus
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl block mb-1 sm:mb-2">🧠</span>
                  <p className="text-white font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">Smart Pay</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs">Best card/wallet</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl block mb-1 sm:mb-2">💰</span>
                  <p className="text-white font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">Base Cashback</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs">5% always</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl block mb-1 sm:mb-2">📱</span>
                  <p className="text-white font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">Social Bonus</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs">+5% extra</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl block mb-1 sm:mb-2">🏪</span>
                  <p className="text-white font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">For Merchants</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs">15% commission</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a2a42]/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 max-w-2xl border border-[#c9a227]/30">
              <p className="text-[10px] sm:text-xs text-gray-400 mb-2 sm:mb-3 text-center">Real Example: AED 100 Restaurant Bill</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-center">
                <div>
                  <p className="text-base sm:text-xl md:text-2xl font-bold text-blue-400">AED 5</p>
                  <p className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5">Smart Pay savings</p>
                </div>
                <div>
                  <p className="text-base sm:text-xl md:text-2xl font-bold text-[#c9a227]">AED 5</p>
                  <p className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5">Base cashback (5%)</p>
                </div>
                <div>
                  <p className="text-base sm:text-xl md:text-2xl font-bold text-green-400">AED 5</p>
                  <p className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5">Social share (+5%)</p>
                </div>
                <div>
                  <p className="text-base sm:text-xl md:text-2xl font-bold text-purple-400">AED 5</p>
                  <p className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5">Nuqta keeps (5%)</p>
                </div>
              </div>
              <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-[#2a3a52]">
                <p className="text-center text-xs sm:text-sm">
                  <span className="text-gray-400">User saves AED 5 + gets up to </span>
                  <span className="text-white text-sm sm:text-base md:text-lg font-bold">AED 10 cash</span>
                  <span className="text-gray-400"> = AED 15 total value</span>
                </p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 4: USER FUNNEL (NEW INFOGRAPHIC) ====================
      case 4:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-6">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">User Journey</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              How Users Flow Through Nuqta
            </h2>

            {/* Funnel Visualization */}
            <div className="max-w-2xl w-full space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              {/* Stage 1 */}
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500/30 to-blue-500/10 rounded-t-2xl p-3 sm:p-4 border-2 border-blue-500/50 mx-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-2xl sm:text-3xl">👀</span>
                      <div>
                        <p className="font-bold text-sm sm:text-base">Users See Offer</p>
                        <p className="text-xs text-gray-400">Via merchant QR / friend share</p>
                      </div>
                    </div>
                    <p className="text-2xl sm:text-3xl font-black text-blue-400">100</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 bg-[#0a1628] px-3 py-1 rounded-full border border-green-500/50 text-green-400 text-xs sm:text-sm font-bold">
                  ↓ 60% activate
                </div>
              </div>

              {/* Stage 2 */}
              <div className="relative pt-2">
                <div className="bg-gradient-to-r from-green-500/30 to-green-500/10 rounded-xl p-3 sm:p-4 border-2 border-green-500/50 mx-4 sm:mx-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-2xl sm:text-3xl">💳</span>
                      <div>
                        <p className="font-bold text-sm sm:text-base">First Purchase</p>
                        <p className="text-xs text-gray-400">Get 5% cashback instantly</p>
                      </div>
                    </div>
                    <p className="text-2xl sm:text-3xl font-black text-green-400">60</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 bg-[#0a1628] px-3 py-1 rounded-full border border-[#c9a227]/50 text-[#c9a227] text-xs sm:text-sm font-bold">
                  ↓ 40% return
                </div>
              </div>

              {/* Stage 3 */}
              <div className="relative pt-2">
                <div className="bg-gradient-to-r from-[#c9a227]/30 to-[#c9a227]/10 rounded-xl p-3 sm:p-4 border-2 border-[#c9a227]/50 mx-8 sm:mx-16">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-2xl sm:text-3xl">🔄</span>
                      <div>
                        <p className="font-bold text-sm sm:text-base">Repeat Purchase</p>
                        <p className="text-xs text-gray-400">Coming back for more</p>
                      </div>
                    </div>
                    <p className="text-2xl sm:text-3xl font-black text-[#c9a227]">24</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 bg-[#0a1628] px-3 py-1 rounded-full border border-purple-500/50 text-purple-400 text-xs sm:text-sm font-bold">
                  ↓ 30% share
                </div>
              </div>

              {/* Stage 4 */}
              <div className="relative pt-2">
                <div className="bg-gradient-to-r from-purple-500/30 to-purple-500/10 rounded-xl p-3 sm:p-4 border-2 border-purple-500/50 mx-12 sm:mx-24">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-2xl sm:text-3xl">📱</span>
                      <div>
                        <p className="font-bold text-sm sm:text-base">Share Socially</p>
                        <p className="text-xs text-gray-400">Earn +5% bonus (10% total)</p>
                      </div>
                    </div>
                    <p className="text-2xl sm:text-3xl font-black text-purple-400">7</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 bg-[#0a1628] px-3 py-1 rounded-full border border-green-500/50 text-green-400 text-xs sm:text-sm font-bold">
                  ↓ 2 friends each
                </div>
              </div>

              {/* Stage 5 */}
              <div className="pt-2">
                <div className="bg-gradient-to-r from-green-500/30 to-green-500/10 rounded-b-2xl p-3 sm:p-4 border-2 border-green-500/50 mx-16 sm:mx-32">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-2xl sm:text-3xl">🎉</span>
                      <div>
                        <p className="font-bold text-sm sm:text-base">New Users Acquired</p>
                        <p className="text-xs text-gray-400">Viral loop complete</p>
                      </div>
                    </div>
                    <p className="text-2xl sm:text-3xl font-black text-green-400">14</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl w-full">
              <div className="bg-[#1a2a42]/50 rounded-lg p-3 border border-[#2a3a52] text-center">
                <p className="text-2xl font-bold text-green-400">60%</p>
                <p className="text-xs text-gray-500">Activation</p>
              </div>
              <div className="bg-[#1a2a42]/50 rounded-lg p-3 border border-[#2a3a52] text-center">
                <p className="text-2xl font-bold text-[#c9a227]">40%</p>
                <p className="text-xs text-gray-500">Repeat</p>
              </div>
              <div className="bg-[#1a2a42]/50 rounded-lg p-3 border border-[#2a3a52] text-center">
                <p className="text-2xl font-bold text-purple-400">30%</p>
                <p className="text-xs text-gray-500">Share Rate</p>
              </div>
              <div className="bg-[#1a2a42]/50 rounded-lg p-3 border border-[#2a3a52] text-center">
                <p className="text-2xl font-bold text-blue-400">0.42</p>
                <p className="text-xs text-gray-500">Viral Coeff.</p>
              </div>
            </div>

            <p className="mt-4 text-center text-xs sm:text-sm text-gray-400">
              <span className="text-[#c9a227] font-bold">Key Insight:</span> Every 100 users → 14 organic referrals → Lower CAC at scale
            </p>
          </div>
        );

      // ==================== SLIDE 5: GROWTH FLYWHEEL (NEW INFOGRAPHIC) ====================
      case 5:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-6">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">Viral Mechanics</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              The Growth <span className="text-[#c9a227]">Flywheel</span>
            </h2>

            {/* Circular Flywheel - Using positioned boxes to simulate circle */}
            <div className="relative w-full max-w-2xl aspect-square mb-6">
              {/* Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-[#c9a227]/30 to-[#c9a227]/10 rounded-full border-4 border-[#c9a227] flex items-center justify-center z-10">
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl mb-2">⚡</p>
                  <p className="text-xs sm:text-sm font-bold text-[#c9a227]">Growth<br/>Compounds</p>
                </div>
              </div>

              {/* Circular Steps */}
              {[
                { icon: '👤', title: 'User\nDiscovers', pos: 'top-0 left-1/2 -translate-x-1/2', color: 'blue' },
                { icon: '💰', title: 'Gets 5%\nCashback', pos: 'top-[15%] right-[10%]', color: 'green' },
                { icon: '📱', title: 'Shares\n(+5%)', pos: 'top-1/2 right-0 -translate-y-1/2', color: 'purple' },
                { icon: '👥', title: 'Friends\nJoin', pos: 'bottom-[15%] right-[10%]', color: 'pink' },
                { icon: '📈', title: 'More\nTransactions', pos: 'bottom-0 left-1/2 -translate-x-1/2', color: 'yellow' },
                { icon: '🏪', title: 'Merchant\nROI', pos: 'bottom-[15%] left-[10%]', color: 'orange' },
                { icon: '📣', title: 'Merchant\nMarkets', pos: 'top-1/2 left-0 -translate-y-1/2', color: 'cyan' },
              ].map((step, idx) => (
                <div key={idx} className={`absolute ${step.pos} w-20 sm:w-24`}>
                  <div className={`bg-${step.color}-500/20 rounded-xl p-2 sm:p-3 border-2 border-${step.color}-500/50 backdrop-blur`}>
                    <div className="text-center">
                      <span className="text-2xl sm:text-3xl block mb-1">{step.icon}</span>
                      <p className="text-[10px] sm:text-xs font-bold whitespace-pre-line">{step.title}</p>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#c9a227] text-2xl">
                    ↻
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Explanation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl w-full">
              <div className="bg-[#1a2a42]/50 rounded-lg p-3 border border-[#c9a227]/30 text-center">
                <p className="text-xl sm:text-2xl font-bold text-[#c9a227] mb-1">Lower CAC</p>
                <p className="text-xs text-gray-400">As viral coefficient grows</p>
              </div>
              <div className="bg-[#1a2a42]/50 rounded-lg p-3 border border-[#c9a227]/30 text-center">
                <p className="text-xl sm:text-2xl font-bold text-green-400 mb-1">Network Effects</p>
                <p className="text-xs text-gray-400">More users = more value</p>
              </div>
              <div className="bg-[#1a2a42]/50 rounded-lg p-3 border border-[#c9a227]/30 text-center">
                <p className="text-xl sm:text-2xl font-bold text-purple-400 mb-1">Self-Reinforcing</p>
                <p className="text-xs text-gray-400">Each turn speeds up next</p>
              </div>
            </div>

            <p className="mt-4 text-center text-xs sm:text-sm text-gray-400 max-w-2xl">
              <span className="text-[#c9a227] font-bold">The Moat:</span> Social sharing isn&apos;t just marketing — it&apos;s product.
              Every share creates value for user (+5%), merchant (new customer), and us (lower CAC).
            </p>
          </div>
        );

      // ==================== SLIDE 6: GO-TO-MARKET STRATEGY (NEW) ====================
      case 6:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-6">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">Distribution</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Go-to-Market Strategy
            </h2>
            <p className="text-sm sm:text-base text-gray-400 text-center mb-6 max-w-2xl">
              How Nuqta Acquires the First 10,000 Users
            </p>

            {/* Three Engines */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl w-full mb-6">
              {/* Primary Engine */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-[#c9a227]/40">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl sm:text-4xl">🎯</span>
                  <div>
                    <p className="text-xs text-[#c9a227] font-bold uppercase">Primary Engine</p>
                    <h3 className="text-base sm:text-lg font-bold">Merchant-Led</h3>
                  </div>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300 mb-3">
                  <li>• QR on counter/bill</li>
                  <li>• Happens at payment</li>
                  <li>• Near-zero CAC</li>
                  <li>• Offline virality</li>
                </ul>
                <div className="pt-3 border-t border-[#c9a227]/30">
                  <p className="text-[#c9a227] font-bold text-lg sm:text-xl">50-60%</p>
                  <p className="text-xs text-gray-500">of early users</p>
                </div>
              </div>

              {/* Secondary Engine */}
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-purple-500/40">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl sm:text-4xl">🧑‍🎓</span>
                  <div>
                    <p className="text-xs text-purple-400 font-bold uppercase">Secondary</p>
                    <h3 className="text-base sm:text-lg font-bold">Campus Density</h3>
                  </div>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300 mb-3">
                  <li>• Campus ambassadors</li>
                  <li>• College food courts</li>
                  <li>• Event onboarding</li>
                  <li>• Peer influence</li>
                </ul>
                <div className="pt-3 border-t border-purple-500/30">
                  <p className="text-purple-400 font-bold text-lg sm:text-xl">20-25%</p>
                  <p className="text-xs text-gray-500">of early users</p>
                </div>
              </div>

              {/* Accelerator */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-blue-500/40">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl sm:text-4xl">🤝</span>
                  <div>
                    <p className="text-xs text-blue-400 font-bold uppercase">Accelerator</p>
                    <h3 className="text-base sm:text-lg font-bold">Partnerships</h3>
                  </div>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300 mb-3">
                  <li>• BNPL co-marketing</li>
                  <li>• Corporate HR</li>
                  <li>• Community partners</li>
                  <li>• Trust transfer</li>
                </ul>
                <div className="pt-3 border-t border-blue-500/30">
                  <p className="text-blue-400 font-bold text-lg sm:text-xl">15-20%</p>
                  <p className="text-xs text-gray-500">of early users</p>
                </div>
              </div>
            </div>

            {/* Growth Loop */}
            <div className="bg-[#1a2a42]/50 rounded-xl p-4 sm:p-6 max-w-4xl w-full border border-[#2a3a52] mb-4">
              <h3 className="text-sm sm:text-base font-bold mb-3 flex items-center gap-2">
                <span className="text-xl">🔁</span>
                Growth Loop (Why This Compounds)
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-gray-300">
                <span className="bg-[#c9a227]/20 px-3 py-1 rounded-full">Merchant onboards</span>
                <span className="text-[#c9a227]">→</span>
                <span className="bg-green-500/20 px-3 py-1 rounded-full">On-counter discovery</span>
                <span className="text-[#c9a227]">→</span>
                <span className="bg-blue-500/20 px-3 py-1 rounded-full">First reward</span>
                <span className="text-[#c9a227]">→</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-full">Repeat visit</span>
                <span className="text-[#c9a227]">→</span>
                <span className="bg-[#c9a227]/20 px-3 py-1 rounded-full">Word-of-mouth</span>
              </div>
            </div>

            {/* What We Avoid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl w-full">
              <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border border-green-500/30">
                <h4 className="text-xs sm:text-sm font-bold text-green-400 mb-2">✓ CAC Philosophy</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Merchant-led = low CAC</li>
                  <li>• Paid ads capped & experimental</li>
                  <li>• Focus on repeat usage, not downloads</li>
                </ul>
              </div>
              <div className="bg-red-500/10 rounded-lg p-3 sm:p-4 border border-red-500/30">
                <h4 className="text-xs sm:text-sm font-bold text-red-400 mb-2">✗ What We Avoid Early</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Heavy paid ads</li>
                  <li>• Large influencer spends</li>
                  <li>• Broad brand campaigns</li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-center text-xs sm:text-sm text-gray-400 max-w-3xl">
              <span className="text-[#c9a227] font-bold">Key Insight:</span> "Nuqta grows at the moment of payment, not through ads." — High-intent, low-cost, habit-forming.
            </p>
          </div>
        );

      // ==================== SLIDE 7: WHY WE WIN ====================
      case 7:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-6">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">Competitive Edge</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
              Why <span className="text-[#c9a227]">Nuqta</span> Wins
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl w-full mb-6">
              {/* Advantage 1 */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-blue-500/40">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🧠</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Smart Payment Layer</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3">
                  "We sit on top of <span className="text-white font-semibold">ALL</span> banks/cards/wallets"
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Users keep existing banking relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>We add intelligence layer on top</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Banks become partners, not competitors</span>
                  </li>
                </ul>
              </div>

              {/* Advantage 2 */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-green-500/40">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">💰</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Guaranteed 5% + Bonus</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3">
                  Banks: <span className="text-red-400">1-3% sometimes</span><br/>
                  Nuqta: <span className="text-green-400 font-semibold">5% always, 10% when shared</span>
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>3-5x better than credit cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>No caps, no categories, no blackout dates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Instant gratification (not points)</span>
                  </li>
                </ul>
              </div>

              {/* Advantage 3 */}
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-purple-500/40">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🔄</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Viral Growth Built-In</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3">
                  "Every share = <span className="text-purple-400 font-semibold">+5% for user</span> + new customer for us"
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>CAC drops as we scale (viral coefficient)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Self-reinforcing growth loop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Social proof drives adoption</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Positioning Statement */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-[#c9a227]/40 max-w-3xl">
              <p className="text-center text-sm sm:text-base text-gray-300">
                <span className="text-[#c9a227] font-bold text-lg">We&apos;re not a bank competitor.</span><br/>
                We&apos;re the <span className="text-white font-semibold">smart payment layer</span> that makes every bank, card, and wallet <span className="text-white font-semibold">work better for consumers.</span>
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 8: COMPETITION (Enhanced Table) ====================
      case 8:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-6">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">Market Positioning</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Competitive Landscape
            </h2>

            {/* Comparison Table */}
            <div className="w-full max-w-4xl overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#1a2a42]/50">
                    <th className="text-left p-2 sm:p-3 text-xs sm:text-sm font-bold border border-[#2a3a52]">Feature</th>
                    <th className="text-center p-2 sm:p-3 text-xs sm:text-sm font-bold border border-[#c9a227] bg-[#c9a227]/10">
                      <span className="text-[#c9a227]">Nuqta</span>
                    </th>
                    <th className="text-center p-2 sm:p-3 text-xs sm:text-sm font-bold border border-[#2a3a52]">Banks</th>
                    <th className="text-center p-2 sm:p-3 text-xs sm:text-sm font-bold border border-[#2a3a52]">Tabby</th>
                    <th className="text-center p-2 sm:p-3 text-xs sm:text-sm font-bold border border-[#2a3a52]">Noon</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Cashback Rate', nuqta: '✓ 5-10%', banks: '✗ 1-3%', tabby: '✗ 0%', noon: '✗ 0%' },
                    { feature: 'Works Everywhere', nuqta: '✓ Yes', banks: '✓ Yes', tabby: '✗ Select', noon: '✗ Select' },
                    { feature: 'Smart Pay Advice', nuqta: '✓ Yes', banks: '✗ No', tabby: '✗ No', noon: '✗ No' },
                    { feature: 'Social Rewards', nuqta: '✓ +5%', banks: '✗ No', tabby: '✗ No', noon: '✗ No' },
                    { feature: 'Universal Points', nuqta: '✓ Yes', banks: '✗ Locked', tabby: '✗ Locked', noon: '✗ Locked' },
                    { feature: 'Merchant Cost', nuqta: '✓ 15%', banks: '-', tabby: '✓ 5%', noon: '✗ 25-30%' },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-[#0a1628]' : 'bg-[#0d1c30]'}>
                      <td className="p-2 sm:p-3 text-xs sm:text-sm text-gray-300 border border-[#2a3a52]">{row.feature}</td>
                      <td className="p-2 sm:p-3 text-xs sm:text-sm text-center font-semibold border border-[#c9a227] bg-[#c9a227]/5">
                        <span className="text-[#c9a227]">{row.nuqta}</span>
                      </td>
                      <td className="p-2 sm:p-3 text-xs sm:text-sm text-center text-gray-400 border border-[#2a3a52]">{row.banks}</td>
                      <td className="p-2 sm:p-3 text-xs sm:text-sm text-center text-gray-400 border border-[#2a3a52]">{row.tabby}</td>
                      <td className="p-2 sm:p-3 text-xs sm:text-sm text-center text-gray-400 border border-[#2a3a52]">{row.noon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Key Insight */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-[#c9a227]/40 max-w-3xl">
              <p className="text-center text-sm sm:text-base text-gray-300">
                <span className="text-[#c9a227] font-bold">We&apos;re the ONLY player offering:</span><br/>
                Universal cashback (5-10%) • Across ALL merchants • With smart payment intelligence
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 9: BUSINESS MODEL (Simplified - Year 1 Focus) ====================
      case 9:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-6">
            <p className="text-purple-400 text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">Economics</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
              Business Model
            </h2>

            {/* Revenue Model - Year 1 Only */}
            <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-3xl w-full border-2 border-[#c9a227]/40 mb-6">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-center">How We Make Money (Year 1)</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-1">Merchant Pays</p>
                  <p className="text-3xl sm:text-4xl font-black text-[#c9a227]">15%</p>
                  <p className="text-xs text-gray-500 mt-1">per transaction</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-1">User Gets</p>
                  <p className="text-3xl sm:text-4xl font-black text-green-400">7.5%</p>
                  <p className="text-xs text-gray-500 mt-1">avg cashback</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-1">Nuqta Keeps</p>
                  <p className="text-3xl sm:text-4xl font-black text-white">7.5%</p>
                  <p className="text-xs text-gray-500 mt-1">margin (50%)</p>
                </div>
              </div>

              <div className="bg-[#1a2a42]/50 rounded-xl p-4 border border-[#2a3a52]">
                <p className="text-xs sm:text-sm text-gray-300 text-center">
                  <span className="text-[#c9a227] font-bold">Revenue Stream:</span> Merchant-funded loyalty (95% of revenue)
                  <br/><span className="text-gray-500">Future: Promoted listings, BNPL referrals, analytics (Year 2+)</span>
                </p>
              </div>
            </div>

            {/* Unit Economics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl w-full mb-6">
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-green-500/40 text-center">
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">ARPU</p>
                <DataPoint
                  value="$10/mo"
                  source="Based on 7 transactions/user/month at $27 GMV/transaction with 50% gross margin"
                  className="text-3xl sm:text-4xl font-black text-green-400 block"
                />
                <p className="text-xs sm:text-sm text-gray-400 mt-2">monthly revenue per user</p>
              </div>

              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-[#c9a227]/40 text-center">
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">CAC</p>
                <DataPoint
                  value="$27"
                  source="Conservative pre-launch estimate. Target: 50% merchant-led (near-zero CAC), 50% paid ($30/user)"
                  className="text-3xl sm:text-4xl font-black text-[#c9a227] block"
                />
                <p className="text-xs sm:text-sm text-gray-400 mt-2">customer acquisition cost</p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-blue-500/40 text-center">
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Payback</p>
                <DataPoint
                  value="3 mo"
                  source="$27 CAC / $10 monthly ARPU = 2.7 months to break even"
                  className="text-3xl sm:text-4xl font-black text-blue-400 block"
                />
                <p className="text-xs sm:text-sm text-gray-400 mt-2">to break even</p>
              </div>
            </div>

            {/* Economic Flow */}
            <div className="bg-[#1a2a42]/50 rounded-xl p-4 max-w-4xl w-full border border-[#2a3a52]">
              <p className="text-sm font-bold mb-2 text-center">Economic Flow (Per User)</p>
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
                <span className="bg-red-500/20 px-3 py-1 rounded-full">$27 CAC</span>
                <span className="text-gray-500">→</span>
                <span className="bg-blue-500/20 px-3 py-1 rounded-full">$189 monthly GMV</span>
                <span className="text-gray-500">→</span>
                <span className="bg-[#c9a227]/20 px-3 py-1 rounded-full">$28 commission (15%)</span>
                <span className="text-gray-500">→</span>
                <span className="bg-green-500/20 px-3 py-1 rounded-full">$10 profit (50% margin)</span>
              </div>
            </div>

            <p className="mt-4 text-center text-xs sm:text-sm text-gray-400 max-w-3xl">
              <span className="text-[#c9a227] font-bold">Focus:</span> At this stage, Nuqta is optimizing for proof of repeat behavior, not financial precision.
            </p>
          </div>
        );

      // ==================== SLIDE 10: MARKET SIZE ====================
      case 10:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-6">
            <p className="text-purple-400 text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">Opportunity</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
              Market Size
            </h2>

            <div className="relative w-full max-w-4xl">
              {/* TAM */}
              <div className="bg-gradient-to-br from-red-500/20 to-red-500/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-red-500/40 mb-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-red-400 mb-2 uppercase tracking-wide">TAM (Total Addressable Market)</p>
                    <DataPoint
                      value="$150B+"
                      source="GCC consumer spending 2024 (Euromonitor, McKinsey GCC Reports)"
                      className="text-4xl sm:text-5xl md:text-6xl font-black text-red-400 block mb-2"
                    />
                    <p className="text-sm sm:text-base text-gray-300">GCC consumer spending annually</p>
                  </div>
                  <div className="text-5xl sm:text-6xl">🌍</div>
                </div>
              </div>

              {/* SAM */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-[#c9a227]/40 mb-6 ml-0 sm:ml-12">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-[#c9a227] mb-2 uppercase tracking-wide">SAM (Serviceable Addressable Market)</p>
                    <DataPoint
                      value="$4B"
                      source="UAE D2C + Local retail spending: ~3% of $150B GCC total (Dubai Chamber of Commerce 2024)"
                      className="text-4xl sm:text-5xl md:text-6xl font-black text-[#c9a227] block mb-2"
                    />
                    <p className="text-sm sm:text-base text-gray-300">UAE D2C + local retail annually</p>
                  </div>
                  <div className="text-5xl sm:text-6xl">🇦🇪</div>
                </div>
              </div>

              {/* SOM */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-green-500/40 ml-0 sm:ml-24">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-green-400 mb-2 uppercase tracking-wide">SOM (Serviceable Obtainable Market)</p>
                    <DataPoint
                      value="$120M"
                      source="3% market share of $4B SAM within 3 years (conservative penetration target)"
                      className="text-4xl sm:text-5xl md:text-6xl font-black text-green-400 block mb-2"
                    />
                    <p className="text-sm sm:text-base text-gray-300">3% market share in 3 years</p>
                  </div>
                  <div className="text-5xl sm:text-6xl">🎯</div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl p-4 border-2 border-[#c9a227]/40 max-w-2xl">
              <p className="text-center text-xs sm:text-sm text-gray-300">
                <span className="text-[#c9a227] font-bold">Translation:</span> Capturing just 3% of UAE D2C market =
                <span className="text-white font-semibold"> $120M annual GMV</span> in 3 years
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 11: TRACTION ====================
      case 11:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-6">
            <p className="text-purple-400 text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">Validation</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
              Traction & Progress
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl w-full mb-6">
              {/* Merchant MOUs */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl sm:rounded-2xl p-6 border-2 border-green-500/40">
                <div className="text-5xl mb-4">🤝</div>
                <DataPoint
                  value="30+"
                  source="Signed MOUs with UAE D2C brands across categories: F&B, fashion, beauty, wellness"
                  className="text-4xl sm:text-5xl font-black text-green-400 block mb-2"
                />
                <p className="text-base sm:text-lg font-semibold mb-2">D2C Brand MOUs</p>
                <p className="text-xs sm:text-sm text-gray-400">Signed partnerships across F&B, fashion, beauty, wellness</p>
              </div>

              {/* Waitlist */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-6 border-2 border-[#c9a227]/40">
                <div className="text-5xl mb-4">👥</div>
                <DataPoint
                  value="200+"
                  source="Pre-launch waitlist from social media campaigns and word-of-mouth"
                  className="text-4xl sm:text-5xl font-black text-[#c9a227] block mb-2"
                />
                <p className="text-base sm:text-lg font-semibold mb-2">Waitlist Users</p>
                <p className="text-xs sm:text-sm text-gray-400">Early adopters ready for launch (pre-marketing)</p>
              </div>

              {/* Bank Partnerships */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl sm:rounded-2xl p-6 border-2 border-blue-500/40">
                <div className="text-5xl mb-4">🏦</div>
                <p className="text-4xl sm:text-5xl font-black text-blue-400 mb-2">In Talks</p>
                <p className="text-base sm:text-lg font-semibold mb-2">Banking Partners</p>
                <p className="text-xs sm:text-sm text-gray-400">Open banking API discussions ongoing with regional banks</p>
              </div>

              {/* Launch Target */}
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl sm:rounded-2xl p-6 border-2 border-purple-500/40">
                <div className="text-5xl mb-4">🚀</div>
                <p className="text-4xl sm:text-5xl font-black text-purple-400 mb-2">Q2 2026</p>
                <p className="text-base sm:text-lg font-semibold mb-2">MVP Launch</p>
                <p className="text-xs sm:text-sm text-gray-400">Dubai launch target with 100+ merchants live</p>
              </div>
            </div>

            {/* Key Insight */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-[#c9a227]/40 max-w-3xl">
              <p className="text-center text-sm sm:text-base text-gray-300">
                <span className="text-[#c9a227] font-bold">Pre-launch momentum:</span> Merchant commitments + early user interest + banking integrations underway.
                <span className="text-white font-semibold"> Ready to execute at funding.</span>
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 12: ROADMAP ====================
      case 12:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-6">
            <p className="text-purple-400 text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">Execution Plan</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
              Roadmap
            </h2>

            <div className="space-y-4 sm:space-y-6 max-w-4xl w-full">
              {/* Phase 1 */}
              <div className="relative">
                <div className="bg-gradient-to-r from-green-500/20 to-green-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-green-500/40">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center text-xl sm:text-2xl font-black">
                      1
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg sm:text-xl font-bold">MVP Launch</h3>
                        <span className="text-xs sm:text-sm text-green-400 font-semibold">0-6 Months (Q2-Q4 2026)</span>
                      </div>
                      <ul className="space-y-1 text-xs sm:text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-green-400">✓</span>
                          <span>Launch MVP in Dubai with 100+ D2C merchants</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400">✓</span>
                          <span>Smart Pay Advisor live (bank/card recommendation engine)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400">✓</span>
                          <span>Social sharing mechanism fully integrated</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400">✓</span>
                          <span>Target: 5,000 active users, $250K monthly GMV</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative">
                <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-[#c9a227]/40">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#c9a227] rounded-full flex items-center justify-center text-xl sm:text-2xl font-black text-[#0a1628]">
                      2
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg sm:text-xl font-bold">Scale & Optimize</h3>
                        <span className="text-xs sm:text-sm text-[#c9a227] font-semibold">6-12 Months (Q4 2026 - Q2 2027)</span>
                      </div>
                      <ul className="space-y-1 text-xs sm:text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-[#c9a227]">✓</span>
                          <span>Expand to 500+ merchants across UAE</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c9a227]">✓</span>
                          <span>Launch promoted listings (additional revenue stream)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c9a227]">✓</span>
                          <span>Integrate BNPL partners for referral commissions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#c9a227]">✓</span>
                          <span>Target: 25,000 users, $1M+ monthly GMV</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-purple-500/40">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 rounded-full flex items-center justify-center text-xl sm:text-2xl font-black">
                      3
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg sm:text-xl font-bold">Regional Expansion</h3>
                        <span className="text-xs sm:text-sm text-purple-400 font-semibold">12-24 Months (Q2 2027+)</span>
                      </div>
                      <ul className="space-y-1 text-xs sm:text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400">✓</span>
                          <span>Launch in Saudi Arabia, Qatar, Kuwait</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400">✓</span>
                          <span>Roll out merchant analytics SaaS product</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400">✓</span>
                          <span>Banking API integrations (open banking leverage)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400">✓</span>
                          <span>Target: 100K+ users, $5M+ monthly GMV</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 13: TEAM ====================
      case 13:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-6">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">Who Will Execute</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
              The Team
            </h2>

            <div className="max-w-4xl w-full">
              {/* Founder Card */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-[#c9a227]/40">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-4 border-[#c9a227]/50 relative">
                      <Image
                        src="/rejaul.jpg"
                        alt="Rejaul Karim"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-1">Rejaul Karim</h3>
                    <p className="text-[#c9a227] font-semibold mb-4">Founder & CEO</p>

                    <div className="space-y-3 text-sm sm:text-base text-gray-300">
                      <p className="flex items-start gap-2">
                        <span className="text-[#c9a227] flex-shrink-0">💼</span>
                        <span><strong>10+ years</strong> in consumer tech, fintech, and growth</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-[#c9a227] flex-shrink-0">🎯</span>
                        <span>Built and scaled products at <strong>startups and Fortune 500s</strong></span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-[#c9a227] flex-shrink-0">🚀</span>
                        <span>Deep expertise in <strong>payment systems, rewards mechanics, and viral growth</strong></span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-[#c9a227] flex-shrink-0">🌍</span>
                        <span>Native to GCC market with <strong>extensive local network</strong> of merchants and investors</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hiring Plans */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#1a2a42]/50 rounded-xl p-4 border border-[#2a3a52] text-center">
                  <p className="text-3xl mb-2">👨‍💻</p>
                  <p className="text-sm font-bold mb-1">CTO</p>
                  <p className="text-xs text-gray-400">Hiring with funding</p>
                </div>
                <div className="bg-[#1a2a42]/50 rounded-xl p-4 border border-[#2a3a52] text-center">
                  <p className="text-3xl mb-2">🧑‍💼</p>
                  <p className="text-sm font-bold mb-1">BD Lead</p>
                  <p className="text-xs text-gray-400">Merchant acquisition</p>
                </div>
                <div className="bg-[#1a2a42]/50 rounded-xl p-4 border border-[#2a3a52] text-center">
                  <p className="text-3xl mb-2">👥</p>
                  <p className="text-sm font-bold mb-1">2 Developers</p>
                  <p className="text-xs text-gray-400">Mobile + Backend</p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 14: THE ASK ====================
      case 14:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-4 sm:py-6">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">Investment Opportunity</p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 sm:mb-8">
              The <span className="text-[#c9a227]">Ask</span>
            </h2>

            {/* Main Ask Card */}
            <div className="bg-gradient-to-br from-[#c9a227]/30 to-[#c9a227]/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-4 border-[#c9a227] max-w-3xl w-full mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Raising</p>
                  <p className="text-4xl sm:text-5xl md:text-6xl font-black text-[#c9a227]">$500K</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Valuation Cap</p>
                  <p className="text-4xl sm:text-5xl md:text-6xl font-black text-white">$5M</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Discount</p>
                  <p className="text-4xl sm:text-5xl md:text-6xl font-black text-green-400">20%</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#c9a227]/30">
                <p className="text-sm sm:text-base text-gray-300">
                  <span className="text-[#c9a227] font-bold">Structure:</span> Convertible Note (CCD)
                  <br/>
                  <span className="text-gray-400">18-24 month runway to Series A readiness</span>
                </p>
              </div>
            </div>

            {/* What You Get */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl w-full">
              <div className="bg-[#1a2a42]/50 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]/30 text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Fast-Growing Market</h3>
                <p className="text-xs sm:text-sm text-gray-400">$4B UAE addressable market with 86% digital payment adoption</p>
              </div>

              <div className="bg-[#1a2a42]/50 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]/30 text-center">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Clear Path to Profitability</h3>
                <p className="text-xs sm:text-sm text-gray-400">33-66% gross margins, 2-4 month CAC payback, proven unit economics</p>
              </div>

              <div className="bg-[#1a2a42]/50 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]/30 text-center">
                <div className="text-4xl mb-3">🔄</div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Viral Growth Built-In</h3>
                <p className="text-xs sm:text-sm text-gray-400">Social sharing drives 0.42 viral coefficient, lowering CAC as we scale</p>
              </div>

              <div className="bg-[#1a2a42]/50 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]/30 text-center">
                <div className="text-4xl mb-3">⏰</div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Perfect Timing</h3>
                <p className="text-xs sm:text-sm text-gray-400">Open banking + digital payments boom + merchant pain = now or never</p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 15: USE OF FUNDS (NEW PIE CHART) ====================
      case 15:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-6">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">Fund Deployment</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Use of Funds: <span className="text-[#c9a227]">$500K</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl w-full items-center">
              {/* Pie Chart Visualization (Simplified) */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {/* Product 40% */}
                  <div className="bg-gradient-to-br from-blue-500/30 to-blue-500/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-blue-500/50 aspect-square flex flex-col items-center justify-center">
                    <p className="text-4xl sm:text-5xl mb-3">🔧</p>
                    <p className="text-3xl sm:text-4xl font-black text-blue-400 mb-2">40%</p>
                    <p className="text-sm sm:text-base font-bold mb-1">Product/MVP</p>
                    <p className="text-[#c9a227] font-bold text-xl sm:text-2xl">$200K</p>
                  </div>

                  {/* BD 30% */}
                  <div className="bg-gradient-to-br from-green-500/30 to-green-500/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-green-500/50 aspect-square flex flex-col items-center justify-center">
                    <p className="text-4xl sm:text-5xl mb-3">🤝</p>
                    <p className="text-3xl sm:text-4xl font-black text-green-400 mb-2">30%</p>
                    <p className="text-sm sm:text-base font-bold mb-1">Merchant BD</p>
                    <p className="text-[#c9a227] font-bold text-xl sm:text-2xl">$150K</p>
                  </div>

                  {/* Team 20% */}
                  <div className="bg-gradient-to-br from-purple-500/30 to-purple-500/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-purple-500/50 aspect-square flex flex-col items-center justify-center">
                    <p className="text-4xl sm:text-5xl mb-3">👥</p>
                    <p className="text-3xl sm:text-4xl font-black text-purple-400 mb-2">20%</p>
                    <p className="text-sm sm:text-base font-bold mb-1">Team</p>
                    <p className="text-[#c9a227] font-bold text-xl sm:text-2xl">$100K</p>
                  </div>

                  {/* Operations 10% */}
                  <div className="bg-gradient-to-br from-[#c9a227]/30 to-[#c9a227]/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-[#c9a227]/50 aspect-square flex flex-col items-center justify-center">
                    <p className="text-4xl sm:text-5xl mb-3">⚙️</p>
                    <p className="text-3xl sm:text-4xl font-black text-[#c9a227] mb-2">10%</p>
                    <p className="text-sm sm:text-base font-bold mb-1">Operations</p>
                    <p className="text-white font-bold text-xl sm:text-2xl">$50K</p>
                  </div>
                </div>
              </div>

              {/* Breakdown Details */}
              <div className="space-y-4">
                <div className="bg-blue-500/10 rounded-xl p-4 border-2 border-blue-500/30">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔧</span>
                    <div className="flex-1">
                      <p className="font-bold text-base sm:text-lg mb-1">Product/MVP Development ($200K)</p>
                      <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                        <li>• Tech stack setup & infrastructure</li>
                        <li>• Mobile app development (iOS + Android)</li>
                        <li>• Payment gateway integrations</li>
                        <li>• Smart Pay Advisor AI/ML</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 rounded-xl p-4 border-2 border-green-500/30">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤝</span>
                    <div className="flex-1">
                      <p className="font-bold text-base sm:text-lg mb-1">Merchant Acquisition ($150K)</p>
                      <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                        <li>• BD team hire + commissions</li>
                        <li>• Pilot program incentives</li>
                        <li>• Merchant onboarding materials</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 rounded-xl p-4 border-2 border-purple-500/30">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">👥</span>
                    <div className="flex-1">
                      <p className="font-bold text-base sm:text-lg mb-1">Team Expansion ($100K)</p>
                      <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                        <li>• CTO hire (equity + cash)</li>
                        <li>• 1 senior developer</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-[#c9a227]/10 rounded-xl p-4 border-2 border-[#c9a227]/30">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⚙️</span>
                    <div className="flex-1">
                      <p className="font-bold text-base sm:text-lg mb-1">Operations/Legal ($50K)</p>
                      <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                        <li>• Licensing & compliance</li>
                        <li>• Legal setup & contracts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Bar */}
            <div className="mt-6 bg-[#1a2a42]/50 rounded-xl p-4 max-w-4xl w-full border border-[#2a3a52]">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <div className="text-center">
                  <p className="text-green-400 font-bold mb-1">Q2 2026</p>
                  <p className="text-gray-400">MVP Launch</p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-green-500 via-[#c9a227] to-blue-500 mx-4"></div>
                <div className="text-center">
                  <p className="text-[#c9a227] font-bold mb-1">Q4 2026</p>
                  <p className="text-gray-400">100 merchants</p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-[#c9a227] to-blue-500 mx-4"></div>
                <div className="text-center">
                  <p className="text-blue-400 font-bold mb-1">Q2 2027</p>
                  <p className="text-gray-400">Break-even</p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-gray-400">
              <span className="text-[#c9a227] font-bold">Runway:</span> 18-24 months to Series A readiness
            </p>
          </div>
        );

      // ==================== SLIDE 16: MILESTONES FOR NEXT ROUND (NEW) ====================
      case 16:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-6">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">Success Metrics</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Path to <span className="text-[#c9a227]">Seed Round</span>
            </h2>

            <div className="max-w-4xl w-full mb-6">
              <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-[#c9a227]/40 mb-6 text-center">
                <p className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                  Seed Round Target: <span className="text-[#c9a227]">$2M at $15-20M valuation</span>
                </p>
                <p className="text-xs sm:text-sm text-gray-400">When we hit these milestones (18 months)</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Product Milestones */}
                <div className="bg-blue-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-blue-500/40">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    Product Milestones
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span className="text-gray-300">MVP live in Dubai with full feature set</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span className="text-gray-300">Smart Pay Advisor providing 5%+ savings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span className="text-gray-300">Social sharing integrated & driving growth</span>
                    </li>
                  </ul>
                </div>

                {/* Traction Milestones */}
                <div className="bg-green-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-green-500/40">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-2xl">📈</span>
                    Traction Milestones
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span className="text-gray-300"><strong className="text-white">10,000+</strong> active users transacting monthly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span className="text-gray-300"><strong className="text-white">500+</strong> merchants live on platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span className="text-gray-300"><strong className="text-white">$500K+</strong> monthly GMV (annualized $6M+)</span>
                    </li>
                  </ul>
                </div>

                {/* Unit Economics Validation */}
                <div className="bg-purple-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-purple-500/40">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-2xl">💰</span>
                    Unit Economics Validation
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span className="text-gray-300">CAC &lt; $30 validated with real data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span className="text-gray-300">30%+ repeat purchase rate achieved</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span className="text-gray-300">5+ transactions per user per month</span>
                    </li>
                  </ul>
                </div>

                {/* Proof of Concept */}
                <div className="bg-[#c9a227]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-[#c9a227]/40">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    Proof of Concept
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span className="text-gray-300">20%+ share rate on social (viral validated)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span className="text-gray-300">3% GCC market penetration started</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span className="text-gray-300">Positive merchant feedback & ROI proven</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl p-4 border-2 border-[#c9a227]/40 max-w-3xl">
              <p className="text-center text-xs sm:text-sm text-gray-300">
                <span className="text-[#c9a227] font-bold">Timeline:</span> 18 months from funding to Seed readiness
                <br/><span className="text-white font-semibold">$500K gets you in early</span> before we prove these metrics and raise at 3-4x valuation
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 18: CLOSING ====================
      case 18:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-4 sm:py-6 bg-gradient-to-b from-[#0a1628] via-[#0d1c30] to-[#0a1628]">
            {/* Logo */}
            <div className="relative mb-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden relative">
                <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain p-3 sm:p-4" priority />
              </div>
              <div className="absolute -inset-6 sm:-inset-8 bg-[#c9a227]/20 rounded-full blur-3xl -z-10" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-6">
              <span className="text-[#c9a227]">Nuqta</span> نقطة
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light max-w-3xl mb-8 sm:mb-12 leading-relaxed">
              Making every purchase <span className="text-[#c9a227] font-semibold">rewarding</span>,
              <br className="hidden sm:block"/>
              one transaction at a time.
            </p>

            {/* Contact Info */}
            <div className="bg-[#1a2a42]/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 max-w-2xl w-full border border-[#c9a227]/30 mb-6">
              <p className="text-sm sm:text-base text-gray-400 mb-4">Let&apos;s build the future of GCC payments together.</p>

              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-xl sm:text-2xl">👤</span>
                  <p className="text-base sm:text-lg font-semibold">Rejaul Karim</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-xl sm:text-2xl">📧</span>
                  <a href="mailto:rejaulkarim@gmail.com" className="text-[#c9a227] hover:underline text-sm sm:text-base">
                    rejaulkarim@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-xl sm:text-2xl">🌐</span>
                  <a href="https://nuqta.app" target="_blank" rel="noopener noreferrer" className="text-[#c9a227] hover:underline text-sm sm:text-base">
                    nuqta.app
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600">
              Pre-Seed Round • $500K at $5M cap • 20% discount • Q2 2026 Launch
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a1628]">
      {/* Slide Content */}
      <div className="h-full w-full flex items-center justify-center">
        {renderSlide()}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-[#1a2a42]/80 backdrop-blur rounded-full px-6 py-3 border border-[#2a3a52]">
        <button
          onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
          disabled={currentSlide === 0}
          className="text-white hover:text-[#c9a227] disabled:opacity-30 disabled:hover:text-white transition-colors"
        >
          ←
        </button>

        <span className="text-sm text-gray-400 min-w-[60px] text-center">
          {currentSlide + 1} / {totalSlides}
        </span>

        <button
          onClick={() => setCurrentSlide(prev => Math.min(totalSlides - 1, prev + 1))}
          disabled={currentSlide === totalSlides - 1}
          className="text-white hover:text-[#c9a227] disabled:opacity-30 disabled:hover:text-white transition-colors"
        >
          →
        </button>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#1a2a42]/50 transition-all"
      >
        ×
      </button>

      {/* Section Indicator */}
      <div className="absolute top-4 left-4 flex gap-2">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              getCurrentSection() === idx
                ? 'bg-[#c9a227] text-[#0a1628]'
                : 'bg-[#1a2a42]/50 text-gray-500'
            }`}
          >
            {section.name}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#1a2a42]">
        <div
          className="h-full bg-gradient-to-r from-[#c9a227] to-[#f4d35e] transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Keyboard Hint */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs text-gray-700 hidden md:block">
        ← → to navigate • ESC to close
      </div>
    </div>
  );
}
