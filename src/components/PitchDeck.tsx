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
export default function PitchDeck({ isOpen, onClose }: PitchDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 23;

  // Section definitions for progress indicator
  const sections = [
    { name: 'Intro', slides: [0, 1], color: '#c9a227' },
    { name: 'Problem', slides: [2, 3, 4, 5], color: '#ef4444' },
    { name: 'Solution', slides: [6, 7, 8, 9, 10, 11], color: '#22c55e' },
    { name: 'Market', slides: [12, 13, 14], color: '#3b82f6' },
    { name: 'Business', slides: [15, 16, 17], color: '#8b5cf6' },
    { name: 'Execution', slides: [18, 19, 20], color: '#f59e0b' },
    { name: 'Ask', slides: [21, 22], color: '#c9a227' },
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
      // ==================== SLIDE 1: COVER ====================
      case 0:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#0a1628] via-[#0d1c30] to-[#0a1628]">
            {/* Logo */}
            <div className="relative mb-4 sm:mb-6 md:mb-8">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden relative">
                <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain p-2 sm:p-3" priority />
              </div>
              <div className="absolute -inset-4 sm:-inset-6 bg-[#c9a227]/20 rounded-full blur-3xl -z-10" />
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black tracking-tight mb-1 sm:mb-2">
              NUQTA
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#c9a227] font-light mb-4 sm:mb-6 md:mb-8">نقطة</p>

            {/* Tagline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light max-w-xs sm:max-w-md md:max-w-xl mb-6 sm:mb-8 md:mb-12">
              5-10% Cashback + Smart Payment Tips for the GCC
            </p>

            {/* Key Metrics Bar */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-16">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#c9a227]">$500K</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-wider">Raising</p>
              </div>
              <div className="w-px h-8 sm:h-10 md:h-12 bg-gray-700 hidden sm:block" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">$5M</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-wider">Valuation Cap</p>
              </div>
              <div className="w-px h-8 sm:h-10 md:h-12 bg-gray-700 hidden sm:block" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">20%</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-wider">Discount</p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 2: KEY METRICS DASHBOARD ====================
      case 1:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 md:mb-6">At a Glance</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-center">Key Metrics Dashboard</h2>

            {/* Top Row - Most Important Metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl w-full mb-4 sm:mb-6">
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-[#c9a227]/40 text-center hover:scale-105 transition-transform">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#c9a227] mb-1 sm:mb-2">$500K</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-400 font-medium">Raising</div>
                <div className="text-[10px] sm:text-xs text-gray-600 mt-1">Pre-Seed Round</div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-blue-500/40 text-center hover:scale-105 transition-transform">
                <DataPoint
                  value="$4B"
                  source="GCC dining & retail spending, industry reports 2024"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-blue-400 mb-1 sm:mb-2"
                />
                <div className="text-xs sm:text-sm md:text-base text-gray-400 font-medium">TAM</div>
                <div className="text-[10px] sm:text-xs text-gray-600 mt-1">GCC Addressable</div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-purple-500/40 text-center hover:scale-105 transition-transform">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-purple-400 mb-1 sm:mb-2">18-24mo</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-400 font-medium">Runway</div>
                <div className="text-[10px] sm:text-xs text-gray-600 mt-1">With $500K</div>
              </div>
            </div>

            {/* Bottom Row - Supporting Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-4xl w-full">
              <div className="bg-[#1a2a42]/60 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-[#2a3a52] text-center hover:border-[#c9a227]/50 transition-colors">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">$5M</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Valuation Cap</div>
              </div>

              <div className="bg-[#1a2a42]/60 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-[#2a3a52] text-center hover:border-[#c9a227]/50 transition-colors">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400 mb-1">70%+</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Gross Margin</div>
              </div>

              <div className="bg-[#1a2a42]/60 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-[#2a3a52] text-center hover:border-[#c9a227]/50 transition-colors">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#c9a227] mb-1">CCD</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Instrument</div>
              </div>

              <div className="bg-[#1a2a42]/60 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-[#2a3a52] text-center hover:border-[#c9a227]/50 transition-colors">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400 mb-1">Pre-Seed</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Stage</div>
              </div>
            </div>

            {/* Bottom Highlight - CASHBACK HERO */}
            <div className="mt-6 sm:mt-8 bg-gradient-to-r from-[#c9a227]/10 via-[#c9a227]/5 to-transparent rounded-xl p-3 sm:p-4 border border-[#c9a227]/20 max-w-3xl">
              <p className="text-xs sm:text-sm md:text-base text-center text-gray-300">
                <span className="text-[#c9a227] font-bold">Get paid to shop:</span> Users earn <span className="text-white font-semibold">5-10% cashback on every purchase</span> + bonus rewards for social sharing. Merchants pay only for <span className="text-white font-semibold">real sales</span> (10-15% commission).
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 3: THE PROBLEM (Hook) ====================
      case 2:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 md:mb-8">The Problem</p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black leading-tight mb-4 sm:mb-6 md:mb-8">
              You <span className="text-[#c9a227]">spend</span>.
              <br />
              You <span className="text-red-500">don&apos;t get paid</span>.
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl">
              GCC consumers spend $150B+ annually on dining and retail.
              <br className="hidden sm:block" />
              <span className="text-red-400 font-bold">Most earn 0-3% cashback. Nuqta offers 5-10%.</span>
            </p>
          </div>
        );

      // ==================== SLIDE 3: PROBLEM STAT 1 ====================
      case 3:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
            <p className="text-red-400 text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 md:mb-8">User Pain</p>

            <DataPoint
              value="70%"
              source="McKinsey GCC Payments Report 2024"
              className="text-[80px] sm:text-[100px] md:text-[150px] lg:text-[200px] xl:text-[250px] font-black text-red-500 leading-none"
            />

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-xs sm:max-w-md md:max-w-xl mt-2 sm:mt-4">
              of offline spending earns <span className="text-red-400 font-bold">zero rewards</span>
            </p>
          </div>
        );

      // ==================== SLIDE 4: PROBLEM STAT 2 ====================
      case 4:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
            <p className="text-red-400 text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 md:mb-8">Fragmentation</p>

            <DataPoint
              value="5+"
              source="Internal UAE consumer survey, 2024"
              className="text-[80px] sm:text-[100px] md:text-[150px] lg:text-[200px] xl:text-[250px] font-black text-red-500 leading-none"
            />

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-xs sm:max-w-md md:max-w-xl mt-2 sm:mt-4">
              loyalty apps per user — <span className="text-red-400 font-bold">none talk to each other</span>
            </p>
          </div>
        );

      // ==================== SLIDE 5: PROBLEM STAT 3 ====================
      case 5:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
            <p className="text-red-400 text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 md:mb-8">Merchant Pain</p>

            <DataPoint
              value="25-30%"
              source="Talabat, Noon, Deliveroo commission structures"
              className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[140px] xl:text-[180px] font-black text-red-500 leading-none"
            />

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-xs sm:max-w-md md:max-w-xl mt-2 sm:mt-4">
              fees to aggregators — <span className="text-red-400 font-bold">merchants don&apos;t own their customers</span>
            </p>
          </div>
        );

      // ==================== SLIDE 6: SOLUTION ====================
      case 6:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 md:mb-8">The Solution</p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6 sm:mb-8">
              Nuqta <span className="text-[#c9a227]">pays you</span> to shop.
            </h2>

            <div className="bg-[#1a2a42]/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 max-w-3xl border border-[#c9a227]/30 mb-6 sm:mb-8">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#c9a227] mb-4 sm:mb-6">
                5-10% cashback on every purchase
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">💰</span>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">Before purchase</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Smart payment recommendation saves you money</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">⭐</span>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">After purchase</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Earn Nuqta Coin automatically (redeemable anywhere)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">📱</span>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">Share on social</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Earn 2x rewards for sharing your experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">🎯</span>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">For merchants</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Pay only for actual sales (10-15% commission)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0a1628]/80 rounded-lg sm:rounded-xl p-4 sm:p-6 max-w-2xl border border-[#c9a227]/30">
              <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3 text-center">Real Example: AED 100 Restaurant Bill</p>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 text-center">
                <div>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400">AED 10</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">Saved with best card</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#c9a227]">AED 8</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">Cashback earned (8%)</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-400">AED 4</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">Social share bonus</p>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#2a3a52]">
                <p className="text-center text-xs sm:text-sm md:text-base">
                  <span className="text-gray-400">You get: </span>
                  <span className="text-[#c9a227] text-base sm:text-xl md:text-2xl font-bold">AED 12 cash</span>
                  <span className="text-gray-400"> + AED 10 saved = </span>
                  <span className="text-white text-sm sm:text-lg md:text-xl font-bold">AED 22 total benefit</span>
                </p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 7: WHAT IS NUQTA ====================
      case 7:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 md:mb-8">Platform Definition</p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 md:mb-12">
              What is <span className="text-[#c9a227]">Nuqta</span>?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-16 max-w-4xl mb-8 sm:mb-12">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-[#c9a227]/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl">🧠</span>
                </div>
                <p className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Intelligence</p>
                <p className="text-gray-400 text-xs sm:text-sm">Best card, wallet, or BNPL for every purchase</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-[#c9a227]/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl">💰</span>
                </div>
                <p className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Cashback</p>
                <p className="text-gray-400 text-xs sm:text-sm">5-10% back on every purchase instantly</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-[#c9a227]/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl">🔥</span>
                </div>
                <p className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Rewards</p>
                <p className="text-gray-400 text-xs sm:text-sm">Transaction-based cashback + social bonuses</p>
              </div>
            </div>

            {/* Smart Pay Advisor Explanation */}
            <div className="bg-[#1a2a42]/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 max-w-3xl border border-[#c9a227]/30">
              <p className="text-xs sm:text-sm text-[#c9a227] font-bold mb-3 sm:mb-4 uppercase tracking-wider">How Smart Pay Works</p>
              <div className="space-y-2 sm:space-y-3 text-left">
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-base sm:text-lg flex-shrink-0">📱</span>
                  <div>
                    <p className="text-white font-semibold text-xs sm:text-sm">User adds their cards/wallets to Nuqta</p>
                    <p className="text-gray-400 text-[10px] sm:text-xs">ADCB card, Liv wallet, Tabby BNPL, etc.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-base sm:text-lg flex-shrink-0">🔍</span>
                  <div>
                    <p className="text-white font-semibold text-xs sm:text-sm">We track bank offers & merchant partnerships</p>
                    <p className="text-gray-400 text-[10px] sm:text-xs">15% off dining with ADCB, 10% cashback with Liv, etc.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="text-base sm:text-lg flex-shrink-0">✨</span>
                  <div>
                    <p className="text-white font-semibold text-xs sm:text-sm">At checkout, we show the best option</p>
                    <p className="text-gray-400 text-[10px] sm:text-xs">&quot;Use ADCB → Save AED 15&quot; vs &quot;Use Liv → Save AED 10&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 sm:mt-8 md:mt-12 text-sm sm:text-base md:text-lg text-gray-500 italic px-4">
              &quot;نقطة&quot; means &quot;point&quot; in Arabic — the starting point of every payment.
            </p>
          </div>
        );

      // ==================== SLIDE 8: HOW WE MAKE MONEY ====================
      case 8:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-12 overflow-y-auto">
            <p className="text-[#c9a227] text-sm sm:text-lg uppercase tracking-[0.3em] mb-4 sm:mb-6">Transaction Economics</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">How We Make Money</h2>

            {/* The Math */}
            <div className="bg-[#1a2a42]/50 rounded-2xl p-6 sm:p-10 max-w-3xl border border-[#c9a227]/30 mb-8">
              <div className="grid gap-6">
                <div className="flex justify-between items-center pb-4 border-b border-[#2a3a52]">
                  <span className="text-gray-400">Merchant pays Nuqta</span>
                  <span className="text-2xl sm:text-3xl font-bold text-white">10-15%</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-[#2a3a52]">
                  <span className="text-gray-400">User gets cashback</span>
                  <span className="text-2xl sm:text-3xl font-bold text-[#c9a227]">5-10%</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-[#2a3a52]">
                  <span className="text-gray-400">Nuqta keeps (gross margin)</span>
                  <span className="text-2xl sm:text-3xl font-bold text-green-400">~5%</span>
                </div>
              </div>
            </div>

            {/* Example Transaction */}
            <div className="max-w-3xl w-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">Example: AED 100 Restaurant Bill</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-[#0a1628]/80 rounded-xl p-6 border border-[#c9a227]/20 text-center">
                  <div className="text-4xl mb-3">🏪</div>
                  <p className="text-gray-400 text-sm mb-2">Merchant Pays</p>
                  <p className="text-3xl font-bold text-white">AED 12</p>
                  <p className="text-xs text-gray-600 mt-1">(12% commission)</p>
                </div>
                <div className="bg-[#0a1628]/80 rounded-xl p-6 border border-[#c9a227]/20 text-center">
                  <div className="text-4xl mb-3">👤</div>
                  <p className="text-gray-400 text-sm mb-2">User Gets</p>
                  <p className="text-3xl font-bold text-[#c9a227]">AED 8</p>
                  <p className="text-xs text-gray-600 mt-1">(8% cashback)</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl p-6 border-2 border-green-500/40 text-center">
                  <div className="text-4xl mb-3">💎</div>
                  <p className="text-gray-400 text-sm mb-2">Nuqta Profit</p>
                  <p className="text-3xl font-bold text-green-400">AED 4</p>
                  <p className="text-xs text-gray-600 mt-1">(4% net margin)</p>
                </div>
              </div>
            </div>

            {/* Why It Works */}
            <div className="mt-8 max-w-2xl text-center">
              <p className="text-gray-400">
                <span className="text-white font-bold">Win-win-win:</span> Merchants get guaranteed customers, users get paid to shop, Nuqta earns <span className="text-[#c9a227] font-semibold">70%+ gross margins</span> with no inventory, no logistics, no burn.
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 9: HOW IT WORKS ====================
      case 9:
        return (
          <div className="h-full flex flex-col items-center justify-center px-8 py-12">
            <p className="text-[#c9a227] text-lg uppercase tracking-[0.3em] mb-6">User Journey</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">How It Works</h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-6xl w-full">
              {[
                { num: '1', icon: '🔍', title: 'Discover', desc: 'Find merchants & browse offers' },
                { num: '2', icon: '🧠', title: 'Smart Pay', desc: 'Get payment recommendation' },
                { num: '3', icon: '💰', title: 'Earn Cashback', desc: '5-10% back instantly' },
                { num: '4', icon: '📱', title: 'Share', desc: 'Post to social, earn 2x' },
                { num: '5', icon: '🔄', title: 'Repeat', desc: 'Redeem anywhere, come back' },
              ].map((step, idx) => (
                <div key={idx} className="text-center relative">
                  <div className="relative inline-block mb-3">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#c9a227] to-[#a88a1e] rounded-2xl flex items-center justify-center shadow-lg shadow-[#c9a227]/20">
                      <span className="text-2xl md:text-3xl">{step.icon}</span>
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-white text-[#0a1628] rounded-full text-xs font-bold flex items-center justify-center shadow-md">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm md:text-base mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm">{step.desc}</p>
                  {idx < 4 && (
                    <div className="hidden md:block absolute top-10 right-0 translate-x-1/2">
                      <span className="text-[#c9a227] text-xl">→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social Sharing Growth Loop */}
            <div className="mt-8 md:mt-12 bg-gradient-to-r from-[#c9a227]/10 to-transparent rounded-xl p-4 md:p-6 max-w-3xl border-l-4 border-[#c9a227]">
              <p className="text-sm md:text-base text-gray-300 text-center">
                <span className="text-[#c9a227] font-bold">Viral growth loop:</span> Every shared purchase = free marketing. Users earn 2x cashback, merchants get social proof, Nuqta grows organically.
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 9: USER VALUE ====================
      case 10:
        return (
          <div className="h-full flex flex-col items-center justify-center px-8 py-12">
            <p className="text-[#c9a227] text-lg uppercase tracking-[0.3em] mb-6">For Users</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
              Save money on <span className="text-[#c9a227]">every</span> purchase
            </h2>

            <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-3xl">
              {[
                { icon: '💳', title: 'Smart Pay Advisor', stat: 'Save 5-15%', desc: 'per transaction' },
                { icon: '💰', title: 'Instant Cashback', stat: '5-10% back', desc: 'every purchase' },
                { icon: '📱', title: 'Social Rewards', stat: '2x bonus', desc: 'share & earn' },
                { icon: '⭐', title: 'Universal Points', stat: 'Redeem anywhere', desc: 'one currency' },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#1a2a42]/50 backdrop-blur rounded-2xl p-6 border border-[#2a3a52] hover:border-[#c9a227]/50 transition-all">
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-[#c9a227] font-bold text-xl">{item.stat}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      // ==================== SLIDE 10: MERCHANT VALUE ====================
      case 11:
        return (
          <div className="h-full flex flex-col items-center justify-center px-8 py-12">
            <p className="text-[#c9a227] text-lg uppercase tracking-[0.3em] mb-6">For Merchants</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
              Own your <span className="text-[#c9a227]">customers</span>
            </h2>

            <div className="grid grid-cols-3 gap-6 max-w-4xl">
              {[
                { icon: '📱', title: 'QR Loyalty', desc: 'No POS integration needed' },
                { icon: '📊', title: 'Real Analytics', desc: 'Know your customers' },
                { icon: '💰', title: 'Pay for Results', desc: 'No monthly fees' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-[#1a2a42] rounded-2xl flex items-center justify-center border border-[#2a3a52]">
                    <span className="text-4xl">{item.icon}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-xl px-8 py-4 border-l-4 border-[#c9a227]">
              <p className="text-lg">Unlike aggregators, merchants <span className="text-white font-bold">keep their customer relationships</span>.</p>
            </div>
          </div>
        );

      // ==================== SLIDE 11: DIFFERENTIATION ====================
      case 12:
        return (
          <div className="h-full flex flex-col items-center justify-center px-8 py-12">
            <p className="text-[#c9a227] text-lg uppercase tracking-[0.3em] mb-6">Why Different</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Cashback + Intelligence = <span className="text-[#c9a227]">Better Value</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
              <div className="bg-red-500/10 rounded-2xl p-8 border border-red-500/30">
                <p className="text-red-400 font-bold text-lg mb-6">Others → Limited Value</p>
                <div className="space-y-4">
                  {[
                    'Bank cards: 1-3% cashback only',
                    'BNPL: No cashback, just financing',
                    'Loyalty apps: Single merchant only',
                    'Cashback sites: Online only, no advice',
                  ].map((item, idx) => (
                    <p key={idx} className="flex items-center gap-3 text-gray-400">
                      <span className="text-red-400">✗</span> {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="bg-[#c9a227]/10 rounded-2xl p-8 border border-[#c9a227]/30">
                <p className="text-[#c9a227] font-bold text-lg mb-6">Nuqta → Maximum Value</p>
                <div className="space-y-4">
                  {[
                    '5-10% cashback on every purchase',
                    'Smart advice: best card/wallet to use',
                    'Works everywhere: online + offline',
                    '2x rewards for social sharing',
                  ].map((item, idx) => (
                    <p key={idx} className="flex items-center gap-3 text-gray-300">
                      <span className="text-[#c9a227]">✓</span> {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 12: COMPETITIVE LANDSCAPE ====================
      case 13:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-12">
            <p className="text-[#c9a227] text-sm sm:text-lg uppercase tracking-[0.3em] mb-4 sm:mb-6">Competitive Landscape</p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10 text-center">
              Cashback + Intelligence = <span className="text-[#c9a227]">Unbeatable</span>
            </h2>

            {/* Comparison Table */}
            <div className="w-full max-w-5xl overflow-x-auto">
              <table className="w-full text-xs sm:text-sm md:text-base">
                <thead>
                  <tr className="border-b-2 border-[#c9a227]/30">
                    <th className="text-left py-3 px-2 sm:px-4 text-gray-400 font-medium">Feature</th>
                    <th className="py-3 px-2 sm:px-4 text-gray-400 font-medium">Bank Cards</th>
                    <th className="py-3 px-2 sm:px-4 text-gray-400 font-medium">Cashback Sites</th>
                    <th className="py-3 px-2 sm:px-4 text-gray-400 font-medium">Loyalty Apps</th>
                    <th className="py-3 px-2 sm:px-4 text-[#c9a227] font-bold">Nuqta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#2a3a52]/50">
                    <td className="py-3 px-2 sm:px-4 text-gray-300 text-left font-semibold">Instant cashback (5-10%)</td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-yellow-400">1-3%</span></td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-[#c9a227]">✓</span></td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-red-400/70">✗</span></td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-[#c9a227] text-lg sm:text-xl font-bold">✓</span></td>
                  </tr>
                  <tr className="border-b border-[#2a3a52]/50">
                    <td className="py-3 px-2 sm:px-4 text-gray-300 text-left">Payment recommendations</td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-red-400/70">✗</span></td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-red-400/70">✗</span></td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-red-400/70">✗</span></td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-[#c9a227] text-lg sm:text-xl">✓</span></td>
                  </tr>
                  <tr className="border-b border-[#2a3a52]/50">
                    <td className="py-3 px-2 sm:px-4 text-gray-300 text-left">Social sharing bonuses</td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-red-400/70">✗</span></td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-red-400/70">✗</span></td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-red-400/70">✗</span></td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-[#c9a227] text-lg sm:text-xl">✓</span></td>
                  </tr>
                  <tr className="border-b border-[#2a3a52]/50">
                    <td className="py-3 px-2 sm:px-4 text-gray-300 text-left">Works offline (local merchants)</td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-yellow-400">✓</span></td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-red-400/70">✗</span></td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-yellow-400">◐</span></td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-[#c9a227] text-lg sm:text-xl">✓</span></td>
                  </tr>
                  <tr className="border-b border-[#2a3a52]/50">
                    <td className="py-3 px-2 sm:px-4 text-gray-300 text-left">Merchant pays, not user</td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-yellow-400">◐</span></td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-[#c9a227]">✓</span></td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-red-400/70">✗</span></td>
                    <td className="py-3 px-2 sm:px-4 text-center"><span className="text-[#c9a227] text-lg sm:text-xl">✓</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Key Insight */}
            <div className="mt-6 sm:mt-10 bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-[#c9a227]/40 max-w-3xl">
              <p className="text-center text-sm sm:text-lg text-gray-300">
                <span className="text-[#c9a227] font-bold">The Nuqta difference:</span> We combine <span className="text-white font-semibold">Rakuten&apos;s cashback model</span> with <span className="text-white font-semibold">payment intelligence</span> and <span className="text-white font-semibold">social viral growth</span>. No one else in GCC does all three.
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 13: MARKET SIZE ====================
      case 14:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-8">
            <p className="text-[#c9a227] text-sm sm:text-lg uppercase tracking-[0.3em] mb-4 sm:mb-8">Market Opportunity</p>

            <DataPoint
              value="$4B"
              source="GCC dining & retail spending, industry reports 2024"
              className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[200px] font-black text-[#c9a227] leading-none"
            />

            <p className="text-lg sm:text-2xl md:text-3xl text-gray-300 mt-2 sm:mt-4 mb-4 sm:mb-8">
              GCC addressable market
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12 text-gray-400">
              <div className="text-center">
                <DataPoint value="10M+" source="GCC digital payment users, regional fintech reports 2024" className="text-xl sm:text-3xl font-bold text-white" />
                <p className="text-xs sm:text-sm">Potential users</p>
              </div>
              <div className="w-px h-6 sm:h-10 bg-gray-700 hidden sm:block" />
              <div className="text-center">
                <DataPoint value="$150B+" source="GCC dining & retail total market size" className="text-xl sm:text-3xl font-bold text-white" />
                <p className="text-xs sm:text-sm">Total market</p>
              </div>
              <div className="w-px h-6 sm:h-10 bg-gray-700 hidden sm:block" />
              <div className="text-center">
                <DataPoint value="3%" source="Nuqta's realistic capture over 5 years" className="text-xl sm:text-3xl font-bold text-white" />
                <p className="text-xs sm:text-sm">Target share</p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 14: BUSINESS MODEL ====================
      case 15:
        return (
          <div className="h-full flex flex-col items-center justify-center px-8 py-12">
            <p className="text-[#c9a227] text-lg uppercase tracking-[0.3em] mb-6">Business Model</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              High-margin, <span className="text-[#c9a227]">asset-light</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full mb-8">
              {[
                { pct: '60%', title: 'Transaction Cashback', desc: '5% spread per sale', highlight: true },
                { pct: '20%', title: 'Promoted Listings', desc: 'Merchant advertising' },
                { pct: '15%', title: 'BNPL Partnerships', desc: 'Referral fees' },
                { pct: '5%', title: 'Premium Analytics', desc: 'Merchant SaaS' },
              ].map((item, idx) => (
                <div key={idx} className={`bg-[#1a2a42]/50 rounded-2xl p-6 text-center border ${item.highlight ? 'border-[#c9a227] shadow-lg shadow-[#c9a227]/20' : 'border-[#2a3a52]'}`}>
                  <p className="text-4xl font-black text-[#c9a227] mb-2">{item.pct}</p>
                  <p className="font-bold mb-1">{item.title}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#c9a227]/10 to-transparent rounded-xl p-6 max-w-3xl border-l-4 border-[#c9a227]">
              <p className="text-lg">
                <span className="text-[#c9a227] font-bold">Transaction-based revenue:</span> Merchants pay 10-15% per sale, users get 5-10% cashback, Nuqta keeps ~5% margin. <span className="text-white font-semibold">70%+ gross margins. No inventory, no logistics, no burn.</span>
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 15: UNIT ECONOMICS ====================
      case 16:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 overflow-y-auto">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 md:mb-6">Unit Economics</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-center">Target Metrics</h2>
            <p className="text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8 md:mb-12">(Pre-launch estimates)</p>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-3xl w-full px-2">
              <div className="text-center bg-[#1a2a42]/50 rounded-xl p-3 sm:p-5 md:p-6 border border-[#c9a227]/30">
                <DataPoint value="$2-4" source="Based on Careem Plus, Tabby loyalty benchmarks" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#c9a227]" />
                <p className="text-xs sm:text-base md:text-lg font-bold mt-2">ARPU</p>
                <p className="text-gray-500 text-[10px] sm:text-xs mt-1">Monthly</p>
              </div>
              <div className="text-center bg-[#1a2a42]/50 rounded-xl p-3 sm:p-5 md:p-6 border border-green-500/30">
                <DataPoint value="70%+" source="SaaS loyalty platform industry average" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-green-400" />
                <p className="text-xs sm:text-base md:text-lg font-bold mt-2">Margin</p>
                <p className="text-gray-500 text-[10px] sm:text-xs mt-1">Gross</p>
              </div>
              <div className="text-center bg-[#1a2a42]/50 rounded-xl p-3 sm:p-5 md:p-6 border border-blue-500/30">
                <DataPoint value="<3mo" source="Target based on low-CAC organic model" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-blue-400" />
                <p className="text-xs sm:text-base md:text-lg font-bold mt-2">Payback</p>
                <p className="text-gray-500 text-[10px] sm:text-xs mt-1">CAC</p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 16: TRACTION ====================
      case 17:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 overflow-y-auto">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 md:mb-6">Current Status</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-center">Pre-Launch</h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-12 text-center max-w-xl px-2">
              Building MVP, validating demand, securing pilots. No vanity metrics — just honest progress.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-2xl w-full">
              {[
                { icon: '📋', title: 'Waitlist Users', status: '200+' },
                { icon: '🏪', title: 'Pilot Merchants', status: '5 signed' },
                { icon: '🤝', title: 'BNPL Partners', status: 'In talks with Tabby' },
                { icon: '💻', title: 'MVP Status', status: 'In development' },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#1a2a42]/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-[#2a3a52] flex items-center gap-2 sm:gap-3 md:gap-4">
                  <span className="text-2xl sm:text-3xl md:text-4xl">{item.icon}</span>
                  <div className="min-w-0">
                    <p className="font-bold text-sm sm:text-base truncate">{item.title}</p>
                    <p className="text-[#c9a227] text-xs sm:text-sm">{item.status}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 sm:mt-8 md:mt-12 text-sm sm:text-base md:text-lg text-center">
              Focus: <span className="text-[#c9a227] font-bold">Repeat usage</span>, not downloads.
            </p>
          </div>
        );

      // ==================== SLIDE 17: ROADMAP ====================
      case 18:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 overflow-y-auto">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 md:mb-6">Execution Plan</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-12 text-center">Roadmap</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-5xl w-full">
              {[
                { phase: 'Phase 1', time: '0-6 mo', title: 'Launch', items: ['MVP live (cashback + Smart Pay)', '100 merchants onboarded', '1,000 active users'], current: true },
                { phase: 'Phase 2', time: '6-12 mo', title: 'Scale', items: ['500+ merchants', 'BNPL integrations live', '10,000+ users, 30% repeat'], current: false },
                { phase: 'Phase 3', time: '12-24 mo', title: 'Expand', items: ['GCC expansion (KSA, Qatar)', 'Bank API partnerships', 'Series A ready'], current: false },
              ].map((item, idx) => (
                <div key={idx} className={`rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border ${item.current ? 'bg-[#c9a227]/10 border-[#c9a227]' : 'bg-[#1a2a42]/50 border-[#2a3a52]'}`}>
                  <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                    <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold ${item.current ? 'bg-[#c9a227] text-[#0a1628]' : 'bg-[#2a3a52] text-gray-400'}`}>
                      {item.phase}
                    </span>
                    <span className="text-gray-500 text-[10px] sm:text-xs md:text-sm">{item.time}</span>
                  </div>
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 ${item.current ? 'text-[#c9a227]' : 'text-white'}`}>{item.title}</h3>
                  <ul className="space-y-1 sm:space-y-2">
                    {item.items.map((point, i) => (
                      <li key={i} className="flex items-center gap-1 sm:gap-2 text-gray-400 text-xs sm:text-sm">
                        <span className={item.current ? 'text-[#c9a227]' : 'text-gray-600'}>→</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      // ==================== SLIDE 18: TEAM ====================
      case 19:
        return (
          <div className="h-full flex flex-col items-center justify-center px-8 py-12">
            <p className="text-[#c9a227] text-lg uppercase tracking-[0.3em] mb-6">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">The Team</h2>

            <div className="bg-[#1a2a42]/50 rounded-3xl p-8 md:p-12 border border-[#c9a227]/30 max-w-2xl w-full">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-[#c9a227]/50">
                  <Image src="/founder-photo.jpg" alt="Rejaul Karim" width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <div className="text-center md:text-left">
                  <a href="https://www.linkedin.com/in/rejaulkarim007/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a227] transition-colors">
                    <h3 className="text-3xl font-bold">Rejaul Karim</h3>
                  </a>
                  <p className="text-[#c9a227] text-lg mb-4">Founder & CEO</p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="text-[#c9a227]">✓</span> Product-first builder
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#c9a227]">✓</span> Payments & fintech domain expert
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#c9a227]">✓</span> GCC market understanding
                    </li>
                  </ul>
                  <a href="https://www.linkedin.com/in/rejaulkarim007/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-[#0077b5] hover:text-[#00a0dc] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-8 text-gray-500 text-center max-w-lg">
              Building Nuqta as <span className="text-white">infrastructure that outlives the founder</span>. Structure over personality.
            </p>
          </div>
        );

      // ==================== SLIDE 19: GOVERNANCE ====================
      case 20:
        return (
          <div className="h-full flex flex-col items-center justify-center px-8 py-12">
            <p className="text-[#c9a227] text-lg uppercase tracking-[0.3em] mb-6">Investor Protection</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Trust via <span className="text-[#c9a227]">structure</span>
            </h2>

            <div className="grid grid-cols-3 gap-6 max-w-4xl w-full">
              {[
                { icon: '🏢', title: 'Stable Jurisdiction', desc: 'Delaware or ADGM incorporation' },
                { icon: '💡', title: 'IP Owned by Company', desc: 'All code, trademarks, trade secrets' },
                { icon: '🏦', title: 'Fund Controls', desc: 'Proper corporate accounts' },
                { icon: '📜', title: 'Founder Vesting', desc: '4-year vesting with cliff' },
                { icon: '📊', title: 'Regular Reporting', desc: 'Monthly updates to investors' },
                { icon: '⚖️', title: 'Board Governance', desc: 'Investor representation' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <span className="text-4xl mb-3 block">{item.icon}</span>
                  <p className="font-bold mb-1">{item.title}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      // ==================== SLIDE 20: THE ASK ====================
      case 21:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-8">
            <p className="text-[#c9a227] text-lg uppercase tracking-[0.3em] mb-8">The Ask</p>

            <p className="text-[100px] md:text-[140px] lg:text-[180px] font-black text-[#c9a227] leading-none">
              $500K
            </p>

            <div className="flex items-center justify-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#c9a227]">$5M</p>
                <p className="text-gray-400 text-sm">Valuation Cap</p>
              </div>
              <div className="text-4xl text-gray-600">•</div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#c9a227]">20%</p>
                <p className="text-gray-400 text-sm">Discount</p>
              </div>
            </div>

            <div className="max-w-3xl w-full mb-8">
              <p className="text-sm text-[#c9a227] font-bold mb-4 text-center uppercase tracking-wider">Use of Funds</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { pct: '50%', label: 'Team & Product', desc: 'Hire CTO + engineers, build MVP', amount: '$250K' },
                  { pct: '30%', label: 'Merchant Acquisition', desc: '100 merchants, field sales', amount: '$150K' },
                  { pct: '15%', label: 'User Acquisition', desc: '1,000 active users, marketing', amount: '$75K' },
                  { pct: '5%', label: 'Operations', desc: 'Legal, accounting, infra', amount: '$25K' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#1a2a42]/50 rounded-xl p-4 border border-[#2a3a52]">
                    <p className="text-2xl font-bold text-[#c9a227] mb-1">{item.pct}</p>
                    <p className="text-sm font-semibold text-white mb-2">{item.label}</p>
                    <p className="text-xs text-gray-500 mb-2">{item.desc}</p>
                    <p className="text-xs text-gray-600">{item.amount}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#c9a227]/10 rounded-xl p-4 border border-[#c9a227]/30 max-w-2xl">
              <p className="text-center text-sm">
                <span className="text-[#c9a227] font-bold">Instrument:</span> <span className="text-white font-semibold">Convertible Note</span> (SAFE or CCD)
                <span className="text-gray-400"> • Converts at next round with $5M cap + 20% discount</span>
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 21: CLOSING ====================
      case 22:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-8 bg-gradient-to-b from-[#0a1628] via-[#0d1c30] to-[#0a1628]">
            <div className="relative mb-8">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden relative">
                <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain p-3" />
              </div>
              <div className="absolute -inset-8 bg-[#c9a227]/20 rounded-full blur-3xl -z-10" />
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8">
              Every payment starts
              <br />
              with a <span className="text-[#c9a227]">point</span>.
            </h2>

            <p className="text-xl text-gray-400 mb-12 max-w-xl">
              Join us in building the payment intelligence layer for the GCC.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
              <a
                href="mailto:rejaul@nuqtaapp.com"
                className="bg-[#c9a227] text-[#0a1628] px-10 py-4 rounded-xl font-bold text-xl hover:bg-[#f4d35e] transition-colors"
              >
                Let&apos;s Talk →
              </a>
              <a
                href="/memo"
                className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-[#c9a227]/50 text-[#c9a227] hover:bg-[#c9a227]/10 transition-colors"
              >
                One-Page Memo
              </a>
            </div>
            <p className="text-gray-500">rejaul@nuqtaapp.com</p>

            <div className="flex items-center gap-8 mt-12 text-gray-600 text-sm">
              <span>$500K Pre-Seed</span>
              <span>•</span>
              <span>$5M Cap</span>
              <span>•</span>
              <span>20% Discount</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#0a1628]">
      {/* Minimal Header */}
      <div className="absolute top-0 left-0 right-0 h-12 sm:h-14 md:h-16 flex items-center justify-between px-4 sm:px-6 md:px-12 z-10">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 relative">
            <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain" />
          </div>
          <span className="font-bold text-[#c9a227] hidden sm:inline text-sm md:text-base">NUQTA</span>
        </div>

        <button
          onClick={onClose}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Section Progress Indicator */}
      <div className="absolute top-12 sm:top-14 md:top-16 left-0 right-0 bg-[#0d1c30]/80 backdrop-blur-sm border-b border-[#2a3a52]/50 z-10">
        <div className="max-w-6xl mx-auto px-4 py-2 sm:py-3">
          {/* Section Labels - Desktop */}
          <div className="hidden md:flex items-center justify-center gap-2 lg:gap-4 mb-2">
            {sections.map((section, idx) => {
              const isActive = idx === getCurrentSection();
              const isPast = idx < getCurrentSection();
              return (
                <div key={idx} className="flex items-center gap-1 lg:gap-2">
                  <button
                    onClick={() => setCurrentSlide(section.slides[0])}
                    className={`flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-300 ${
                      isActive
                        ? 'bg-[#c9a227]/20 text-[#c9a227] font-semibold'
                        : isPast
                        ? 'text-gray-400 hover:text-gray-300'
                        : 'text-gray-600 hover:text-gray-500'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-all ${
                        isActive ? 'bg-[#c9a227]' : isPast ? 'bg-gray-500' : 'bg-gray-700'
                      }`}
                    />
                    <span className="text-xs lg:text-sm">{section.name}</span>
                  </button>
                  {idx < sections.length - 1 && (
                    <div className={`w-4 lg:w-8 h-px ${isPast ? 'bg-gray-500' : 'bg-gray-700'}`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Current Section Label - Mobile */}
          <div className="md:hidden flex items-center justify-center mb-1">
            <span className="text-xs text-gray-400">
              {sections[getCurrentSection()]?.name}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="relative h-1 bg-[#1a2a42] rounded-full overflow-hidden">
            <div
              className="absolute h-full bg-gradient-to-r from-[#c9a227] to-[#f4d35e] transition-all duration-300 ease-out"
              style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            />
            {/* Section dividers */}
            {sections.map((section, idx) => {
              if (idx === 0) return null;
              const position = (section.slides[0] / totalSlides) * 100;
              return (
                <div
                  key={idx}
                  className="absolute top-0 bottom-0 w-px bg-[#0a1628]"
                  style={{ left: `${position}%` }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className="h-full pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24">
        {renderSlide()}
      </div>

      {/* Minimal Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 flex items-center justify-between px-4 sm:px-6 md:px-12">
        <button
          onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
          disabled={currentSlide === 0}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-20 flex items-center justify-center transition-all"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="flex-1 max-w-[200px] sm:max-w-xs md:max-w-md mx-4 sm:mx-6 md:mx-8">
          <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
            <span className="text-[#c9a227] font-bold text-sm sm:text-base md:text-lg">{currentSlide + 1}</span>
            <span className="text-gray-600 text-sm">/</span>
            <span className="text-gray-500 text-sm">{totalSlides}</span>
          </div>
          <div className="h-0.5 sm:h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#c9a227] transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            />
          </div>
        </div>

        <button
          onClick={() => setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1))}
          disabled={currentSlide === totalSlides - 1}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#c9a227] text-[#0a1628] hover:bg-[#f4d35e] disabled:opacity-20 flex items-center justify-center transition-all"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Keyboard Hint */}
      <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs text-gray-700 hidden md:block">
        ← → to navigate • ESC to close
      </div>
    </div>
  );
}
