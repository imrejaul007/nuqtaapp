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
export default function PitchDeckFinal({ isOpen, onClose }: PitchDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 13;

  // Simplified sections (storytelling arc)
  const sections = [
    { name: 'Problem', slides: [0, 1, 2], color: '#ef4444' },
    { name: 'Solution', slides: [3, 4], color: '#22c55e' },
    { name: 'Business', slides: [5, 6], color: '#8b5cf6' },
    { name: 'Details', slides: [7, 8, 9, 10, 11, 12], color: '#c9a227' },
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
      // ==================== SLIDE 0: COVER ====================
      case 0:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 bg-gradient-to-b from-[#0a1628] via-[#0d1c30] to-[#0a1628]">
            {/* Logo */}
            <div className="relative mb-4 sm:mb-6">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden relative">
                <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain p-2 sm:p-3" priority />
              </div>
              <div className="absolute -inset-4 sm:-inset-6 bg-[#c9a227]/20 rounded-full blur-3xl -z-10" />
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-1 sm:mb-2">
              NUQTA
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-[#c9a227] font-light mb-3 sm:mb-4">نقطة</p>

            {/* Tagline */}
            <p className="text-sm sm:text-base md:text-lg text-gray-400 font-light max-w-xs sm:max-w-md mb-6 sm:mb-8">
              5% base + 5% social bonus Cashback + Smart Payment Tips for the GCC
            </p>

            {/* Key Metrics Bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-6">
              <div className="text-center px-3 sm:px-4 py-2 bg-[#c9a227]/10 rounded-lg border border-[#c9a227]/30">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#c9a227]">$400K</p>
                <p className="text-[10px] sm:text-xs text-gray-500">Raising</p>
              </div>
              <div className="w-px h-8 bg-gray-700" />
              <div className="text-center px-3 sm:px-4 py-2 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">$5M USD</p>
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

      // ==================== SLIDE 1: THE PROBLEM ====================
      case 1:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-red-400 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">The Problem</p>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-4 sm:mb-6">
              You <span className="text-[#c9a227]">spend</span>.
              <br />
              You <span className="text-red-500">don&apos;t get paid</span>.
            </h2>

            {/* Problem Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl w-full mb-4">
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

      // ==================== SLIDE 2: HOW BIG IS THE PROBLEM ====================
      case 2:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-red-400 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Market Scale</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">
              How <span className="text-red-400">Big</span> is This Problem?
            </h2>

            {/* Visual Funnel Showing Scale */}
            <div className="max-w-4xl w-full space-y-3 sm:space-y-4">
              {/* Total Market */}
              <div className="relative">
                <div className="bg-gradient-to-r from-red-500/30 to-red-500/10 rounded-2xl p-4 sm:p-6 border-2 border-red-500/50 mx-0">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="text-xs sm:text-sm text-red-400 mb-2 uppercase tracking-wide">GCC Consumer Spending</p>
                      <DataPoint
                        value="$150B+"
                        source="GCC consumer spending 2024 (Euromonitor, McKinsey GCC Reports)"
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-red-400 block mb-2"
                      />
                      <p className="text-sm sm:text-base text-gray-300">Total annual consumer spending</p>
                    </div>
                    <div className="text-5xl sm:text-6xl">🌍</div>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-[#0a1628] px-4 py-2 rounded-full border border-[#c9a227]/50 text-[#c9a227] text-sm sm:text-base font-bold">
                  ↓ 70% earns ZERO rewards
                </div>
              </div>

              {/* Addressable Market */}
              <div className="relative pt-6">
                <div className="bg-gradient-to-r from-[#c9a227]/30 to-[#c9a227]/10 rounded-2xl p-4 sm:p-6 border-2 border-[#c9a227]/50 mx-8 sm:mx-16">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="text-xs sm:text-sm text-[#c9a227] mb-2 uppercase tracking-wide">GCC Serviceable Market (SAM)</p>
                      <DataPoint
                        value="$45B"
                        source="GCC D2C retail + local services (F&B, Beauty, Fashion, Fitness): 30% of TAM amenable to rewards programs"
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-[#c9a227] block mb-2"
                      />
                      <p className="text-sm sm:text-base text-gray-300">GCC D2C + services annually</p>
                    </div>
                    <div className="text-5xl sm:text-6xl">🇦🇪</div>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-[#0a1628] px-4 py-2 rounded-full border border-green-500/50 text-green-400 text-sm sm:text-base font-bold">
                  ↓ Dubai target: 3%
                </div>
              </div>

              {/* Our Target */}
              <div className="pt-6">
                <div className="bg-gradient-to-r from-green-500/30 to-green-500/10 rounded-2xl p-4 sm:p-6 border-2 border-green-500/50 mx-16 sm:mx-32">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="text-xs sm:text-sm text-green-400 mb-2 uppercase tracking-wide">Dubai SOM (3 Years)</p>
                      <DataPoint
                        value="$1.35B"
                        source="3% market penetration in Dubai within 3 years (Phase 1). At 15% commission: $202M revenue potential"
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-green-400 block mb-2"
                      />
                      <p className="text-sm sm:text-base text-gray-300">Annual GMV target in Dubai</p>
                    </div>
                    <div className="text-5xl sm:text-6xl">🎯</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-xs sm:text-sm text-gray-400 max-w-3xl">
              <span className="text-[#c9a227] font-bold">The Opportunity:</span> Massive untapped GCC market with zero viable solutions.
              3% Dubai capture = $1.35B GMV → $202M revenue.
            </p>
          </div>
        );

      // ==================== SLIDE 3: THE SOLUTION ====================
      case 3:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">The Solution</p>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-4 sm:mb-6">
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

      // ==================== SLIDE 4: THE FUNNEL ====================
      case 4:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">User Journey</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">
              The <span className="text-[#c9a227]">Funnel</span>
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
              <span className="text-[#c9a227] font-bold">Proof it Works:</span> Every 100 users → 14 organic referrals → Growth compounds
            </p>
          </div>
        );

      // ==================== SLIDE 5: REVENUE MODEL ====================
      case 5:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-purple-400 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Economics</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Revenue Model
            </h2>

            {/* Revenue Flow */}
            <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 max-w-4xl w-full border-2 border-[#c9a227]/40 mb-6">
              <h3 className="text-lg sm:text-xl font-bold mb-6 text-center">How We Make Money (Year 1)</h3>

              {/* Simple Flow Diagram */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <div className="text-center">
                  <div className="bg-blue-500/20 rounded-xl p-4 border-2 border-blue-500/50 mb-2">
                    <p className="text-xs text-blue-400 mb-1">Merchant Pays</p>
                    <p className="text-3xl sm:text-4xl font-black text-blue-400">15%</p>
                  </div>
                  <p className="text-xs text-gray-500">per transaction</p>
                </div>

                <div className="text-2xl sm:text-3xl text-[#c9a227] rotate-90 sm:rotate-0">→</div>

                <div className="text-center">
                  <div className="bg-green-500/20 rounded-xl p-4 border-2 border-green-500/50 mb-2">
                    <p className="text-xs text-green-400 mb-1">User Gets</p>
                    <p className="text-3xl sm:text-4xl font-black text-green-400">7.5%</p>
                  </div>
                  <p className="text-xs text-gray-500">avg cashback</p>
                </div>

                <div className="text-2xl sm:text-3xl text-[#c9a227] rotate-90 sm:rotate-0">→</div>

                <div className="text-center">
                  <div className="bg-[#c9a227]/20 rounded-xl p-4 border-2 border-[#c9a227]/50 mb-2">
                    <p className="text-xs text-[#c9a227] mb-1">Nuqta Keeps</p>
                    <p className="text-3xl sm:text-4xl font-black text-white">7.5%</p>
                  </div>
                  <p className="text-xs text-gray-500">50% margin</p>
                </div>
              </div>

              <div className="bg-[#1a2a42]/50 rounded-xl p-4 border border-[#2a3a52]">
                <p className="text-xs sm:text-sm text-gray-300 text-center">
                  <span className="text-[#c9a227] font-bold">Primary Revenue:</span> Merchant-funded loyalty (95% of Year 1)
                  <br/><span className="text-gray-500">Future upside: Promoted listings, BNPL referrals, analytics (Year 2+)</span>
                </p>
              </div>
            </div>

            {/* Unit Economics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl w-full mb-6">
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-green-500/40 text-center">
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">ARPU</p>
                <DataPoint
                  value="$10/mo"
                  source="Based on 7 transactions/user/month at $27 GMV/transaction with 50% gross margin"
                  className="text-3xl sm:text-4xl font-black text-green-400 block"
                />
                <p className="text-xs sm:text-sm text-gray-400 mt-2">monthly revenue</p>
              </div>

              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-[#c9a227]/40 text-center">
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">CAC</p>
                <DataPoint
                  value="AED 35"
                  source="Conservative estimate: 50% merchant-led (near-zero), 50% paid (AED 70/user)"
                  className="text-3xl sm:text-4xl font-black text-[#c9a227] block"
                />
                <p className="text-xs sm:text-sm text-gray-400 mt-2">acquisition cost</p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-blue-500/40 text-center">
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Payback</p>
                <DataPoint
                  value="3.5 mo"
                  source="AED 35 CAC / $10 monthly ARPU = 3.5 months to break even"
                  className="text-3xl sm:text-4xl font-black text-blue-400 block"
                />
                <p className="text-xs sm:text-sm text-gray-400 mt-2">to break even</p>
              </div>
            </div>

            <p className="text-center text-xs sm:text-sm text-gray-400 max-w-3xl">
              <span className="text-[#c9a227] font-bold">Philosophy:</span> At this stage, we optimize for proof of repeat behavior, not financial precision.
            </p>
          </div>
        );

      // ==================== SLIDE 6: THE ASK ====================
      case 6:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Investment Opportunity</p>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-4 sm:mb-6">
              The <span className="text-[#c9a227]">Ask</span>
            </h2>

            {/* Main Ask Card */}
            <div className="bg-gradient-to-br from-[#c9a227]/30 to-[#c9a227]/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 border-4 border-[#c9a227] max-w-3xl w-full mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Raising</p>
                  <p className="text-4xl sm:text-5xl md:text-6xl font-black text-[#c9a227]">$400K</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Valuation Cap</p>
                  <p className="text-4xl sm:text-5xl md:text-6xl font-black text-white">$5M USD</p>
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
                <h3 className="font-bold text-base sm:text-lg mb-2">$150B Market</h3>
                <p className="text-xs sm:text-sm text-gray-400">Massive untapped opportunity with 70% earning zero rewards</p>
              </div>

              <div className="bg-[#1a2a42]/50 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]/30 text-center">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Clear Path to Profit</h3>
                <p className="text-xs sm:text-sm text-gray-400">50% gross margin, 3-month CAC payback, proven unit economics</p>
              </div>

              <div className="bg-[#1a2a42]/50 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]/30 text-center">
                <div className="text-4xl mb-3">🔄</div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Viral Growth Built-In</h3>
                <p className="text-xs sm:text-sm text-gray-400">Every 100 users → 14 referrals. Growth compounds automatically.</p>
              </div>

              <div className="bg-[#1a2a42]/50 rounded-xl p-4 sm:p-6 border-2 border-[#c9a227]/30 text-center">
                <div className="text-4xl mb-3">⏰</div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Perfect Timing</h3>
                <p className="text-xs sm:text-sm text-gray-400">Open banking + digital boom + merchant pain = now or never</p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 7: WHY NOW ====================
      case 7:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Timing & Momentum</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">
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

      // ==================== SLIDE 8: HOW WE WIN (Merged: Flywheel + GTM + Competition) ====================
      case 8:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Competitive Advantage</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">
              How We <span className="text-[#c9a227]">Win</span>
            </h2>

            {/* Three Key Advantages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-5xl w-full mb-6">
              {/* Merchant-Led Growth */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-[#c9a227]/40">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🏪</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Merchant-Led GTM</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3">
                  Growth at <span className="text-[#c9a227] font-semibold">point of payment</span>, not ads
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227]">✓</span>
                    <span>50-60% via merchant QR codes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227]">✓</span>
                    <span>Near-zero CAC at scale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227]">✓</span>
                    <span>Happens at moment of need</span>
                  </li>
                </ul>
              </div>

              {/* Smart Layer + Viral */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-green-500/40">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🧠</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Smart Layer + Viral</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3">
                  Intelligence on <span className="text-green-400 font-semibold">ALL</span> banks + social growth
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Works with any card/wallet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Viral coefficient: 0.42</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Every share = +5% for user</span>
                  </li>
                </ul>
              </div>

              {/* 3-5x Better */}
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-purple-500/40">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">💰</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">3-5x Better Value</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3">
                  <span className="text-red-400">Banks: 1-3%</span><br/>
                  <span className="text-purple-400 font-semibold">Nuqta: 5-10%</span>
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Guaranteed 5% always</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>No caps, categories, or limits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Universal points (not locked)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Comparison */}
            <div className="bg-[#1a2a42]/50 rounded-xl p-4 max-w-4xl w-full border border-[#2a3a52]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs sm:text-sm">
                <div>
                  <p className="text-gray-500 mb-1">Nuqta</p>
                  <p className="text-[#c9a227] font-bold">5-10% always</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Banks</p>
                  <p className="text-gray-400">1-3% sometimes</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Tabby/BNPL</p>
                  <p className="text-gray-400">0% cashback</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Aggregators</p>
                  <p className="text-gray-400">0% (25% fees)</p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-xs sm:text-sm text-gray-400 max-w-3xl">
              <span className="text-[#c9a227] font-bold">The Moat:</span> We're the ONLY universal cashback (5-10%) across ALL merchants with merchant-led viral growth.
            </p>
          </div>
        );

      // ==================== SLIDE 9: TRACTION ====================
      case 9:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-purple-400 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Validation</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Traction & Progress
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl w-full mb-6">
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

      // ==================== SLIDE 10: ROADMAP ====================
      case 10:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-purple-400 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Execution Plan</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Roadmap
            </h2>

            <div className="space-y-3 sm:space-y-4 max-w-4xl w-full">
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

      // ==================== SLIDE 11: TEAM ====================
      case 11:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Who Will Execute</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">
              The Team
            </h2>

            <div className="max-w-4xl w-full">
              {/* Founder Card */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-[#c9a227]/40">
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

              {/* Team - Now Hired */}
              <div className="mt-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-green-400 font-bold text-sm">FULL TEAM HIRED & PRODUCT READY</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-green-500/10 rounded-xl p-3 border border-green-500/30 text-center">
                    <p className="text-2xl mb-1">👨‍💻</p>
                    <p className="text-sm font-bold text-green-400">CTO</p>
                    <p className="text-xs text-gray-400">✓ Hired</p>
                  </div>
                  <div className="bg-green-500/10 rounded-xl p-3 border border-green-500/30 text-center">
                    <p className="text-2xl mb-1">📈</p>
                    <p className="text-sm font-bold text-green-400">CMO</p>
                    <p className="text-xs text-gray-400">✓ Hired</p>
                  </div>
                  <div className="bg-green-500/10 rounded-xl p-3 border border-green-500/30 text-center">
                    <p className="text-2xl mb-1">👥</p>
                    <p className="text-sm font-bold text-green-400">CHRO</p>
                    <p className="text-xs text-gray-400">✓ Hired</p>
                  </div>
                  <div className="bg-green-500/10 rounded-xl p-3 border border-green-500/30 text-center">
                    <p className="text-2xl mb-1">💻</p>
                    <p className="text-sm font-bold text-green-400">2 Devs</p>
                    <p className="text-xs text-gray-400">✓ Hired</p>
                  </div>
                  <div className="bg-green-500/10 rounded-xl p-3 border border-green-500/30 text-center">
                    <p className="text-2xl mb-1">🤝</p>
                    <p className="text-sm font-bold text-green-400">BDA</p>
                    <p className="text-xs text-gray-400">✓ Hired</p>
                  </div>
                  <div className="bg-green-500/10 rounded-xl p-3 border border-green-500/30 text-center">
                    <p className="text-2xl mb-1">🎨</p>
                    <p className="text-sm font-bold text-green-400">Designer</p>
                    <p className="text-xs text-gray-400">✓ Hired</p>
                  </div>
                </div>
                <p className="text-center text-sm text-[#c9a227] mt-4 font-medium">8 Team Members • Product 100% Ready • Launch Phase</p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 12: CLOSING ====================
      case 12:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 bg-gradient-to-b from-[#0a1628] via-[#0d1c30] to-[#0a1628]">
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
              Pre-Seed Round • $400K USD at $5M USD cap • 20% discount • Q2 2026 Launch
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a1628]">
      {/* Slide Content - Fixed container with consistent height constraints */}
      <div className="h-full w-full flex items-center justify-center overflow-hidden">
        <div className="w-full h-full max-h-screen overflow-y-auto overflow-x-hidden py-16 sm:py-20">
          <div className="min-h-full flex items-center justify-center">
            {renderSlide()}
          </div>
        </div>
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
