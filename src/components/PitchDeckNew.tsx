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
  const totalSlides = 20;

  // NEW Section definitions (4 acts instead of 7)
  const sections = [
    { name: 'Problem', slides: [0, 1, 2], color: '#ef4444' },
    { name: 'Solution', slides: [3, 4], color: '#22c55e' },
    { name: 'Business', slides: [5, 6], color: '#8b5cf6' },
    { name: 'Details', slides: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], color: '#c9a227' },
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
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 bg-gradient-to-b from-[#0a1628] via-[#0d1c30] to-[#0a1628]">
            {/* Logo */}
            <div className="relative mb-3 sm:mb-4">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden relative">
                <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain p-2 sm:p-3" priority />
              </div>
              <div className="absolute -inset-4 sm:-inset-6 bg-[#c9a227]/20 rounded-full blur-3xl -z-10" />
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-3 sm:mb-4">
              NUQTA
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-[#c9a227] font-light mb-3 sm:mb-4">نقطة</p>

            {/* Tagline */}
            <p className="text-sm sm:text-base md:text-lg text-gray-400 font-light max-w-xs sm:max-w-md mb-3 sm:mb-4">
              5% base + 5% social bonus Cashback + Smart Payment Tips for the GCC
            </p>

            {/* Key Metrics Bar (Enhanced) */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-6">
              <div className="text-center px-3 sm:px-4 py-2 bg-[#c9a227]/10 rounded-lg border border-[#c9a227]/30">
                <p className="text-lg sm:text-xl font-bold text-[#c9a227]">$400K</p>
                <p className="text-xs sm:text-sm text-gray-500">Raising</p>
              </div>
              <div className="w-px h-8 bg-gray-700" />
              <div className="text-center px-3 sm:px-4 py-2 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">$5M</p>
                <p className="text-xs sm:text-sm text-gray-500">Cap</p>
              </div>
              <div className="w-px h-8 bg-gray-700" />
              <div className="text-center px-3 sm:px-4 py-2 bg-green-500/10 rounded-lg border border-green-500/30">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">20%</p>
                <p className="text-xs sm:text-sm text-gray-500">Discount</p>
              </div>
              <div className="w-px h-8 bg-gray-700" />
              <div className="text-center px-3 sm:px-4 py-2 bg-purple-500/10 rounded-lg border border-purple-500/30">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400">March 1, 2026</p>
                <p className="text-xs sm:text-sm text-gray-500">Launch</p>
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
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-red-400 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">The Problem</p>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-3 sm:mb-4">
              You <span className="text-[#c9a227]">spend</span>.
              <br />
              You <span className="text-red-500">don&apos;t get paid</span>.
            </h2>

            {/* Problem Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl w-full mb-6">
              {/* User Pain */}
              <div className="bg-red-500/10 rounded-xl p-3 sm:p-4 border-2 border-red-500/30">
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
              <div className="bg-red-500/10 rounded-xl p-3 sm:p-4 border-2 border-red-500/30">
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
              <div className="bg-red-500/10 rounded-xl p-3 sm:p-4 border-2 border-red-500/30">
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
              <div className="bg-red-500/10 rounded-xl p-3 sm:p-4 border-2 border-red-500/30">
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

      // ==================== SLIDE 10: MARKET SIZE ====================
      case 2:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-purple-400 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Opportunity</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Market Size
            </h2>

            <div className="relative w-full max-w-4xl">
              {/* TAM */}
              <div className="bg-gradient-to-br from-red-500/20 to-red-500/5 rounded-2xl sm:rounded-3xl p-3 sm:p-4 border-2 border-red-500/40 mb-6">
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
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl sm:rounded-3xl p-3 sm:p-4 border-2 border-[#c9a227]/40 mb-6 ml-0 sm:ml-12">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-[#c9a227] mb-2 uppercase tracking-wide">SAM (Serviceable Addressable Market)</p>
                    <DataPoint
                      value="$35B"
                      source="UAE D2C + Local retail spending: ~3% of $150B GCC total (Dubai Chamber of Commerce 2024)"
                      className="text-4xl sm:text-5xl md:text-6xl font-black text-[#c9a227] block mb-2"
                    />
                    <p className="text-sm sm:text-base text-gray-300">UAE D2C + local retail annually</p>
                  </div>
                  <div className="text-5xl sm:text-6xl">🇦🇪</div>
                </div>
              </div>

              {/* SOM */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-2xl sm:rounded-3xl p-3 sm:p-4 border-2 border-green-500/40 ml-0 sm:ml-24">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-green-400 mb-2 uppercase tracking-wide">SOM (Serviceable Obtainable Market)</p>
                    <DataPoint
                      value="$1.05B"
                      source="3% market share of $35B SAM within 3 years (conservative penetration target)"
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
                <span className="text-white font-semibold"> $1.05B annual GMV</span> in 3 years
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 3: THE SOLUTION (REWRITTEN - FULL PLATFORM) ====================
      case 3:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">The Complete Platform</p>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-3">
              <span className="text-[#c9a227]">Discover</span> → Pay Smart → <span className="text-[#c9a227]">Earn Double</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-400 mb-4 max-w-3xl">
              The complete commerce journey: Discover → Lock → Pay Smart → Earn → Unlock Perks
            </p>

            {/* Platform Flow - 5 Layers */}
            <div className="space-y-3 max-w-4xl w-full mb-4">
              {/* 1. Discovery Layer */}
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/5 rounded-xl p-3 sm:p-4 border-2 border-blue-500/40">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl sm:text-2xl font-black text-white">1</div>
                  <div className="flex-1 text-left">
                    <h3 className="text-base sm:text-lg font-bold text-blue-400 mb-1">🔍 Discovery Layer</h3>
                    <p className="text-xs sm:text-sm text-gray-300">Browse/search 30+ brands • See products/services • Discover offers section</p>
                  </div>
                  <span className="text-2xl sm:text-3xl text-[#c9a227] hidden sm:block">→</span>
                </div>
              </div>

              {/* 2. Booking/Lock Layer */}
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-xl p-3 sm:p-4 border-2 border-purple-500/40">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center text-xl sm:text-2xl font-black text-white">2</div>
                  <div className="flex-1 text-left">
                    <h3 className="text-base sm:text-lg font-bold text-purple-400 mb-1">🔒 Booking/Lock Layer</h3>
                    <p className="text-xs sm:text-sm text-gray-300">Book service OR lock product (partial payment) • Home delivery or visit store</p>
                  </div>
                  <span className="text-2xl sm:text-3xl text-[#c9a227] hidden sm:block">→</span>
                </div>
              </div>

              {/* 3. Payment Intelligence */}
              <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl p-3 sm:p-4 border-2 border-[#c9a227]/40">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#c9a227] rounded-full flex items-center justify-center text-xl sm:text-2xl font-black text-black">3</div>
                  <div className="flex-1 text-left">
                    <h3 className="text-base sm:text-lg font-bold text-[#c9a227] mb-1">💳 Payment Intelligence</h3>
                    <p className="text-xs sm:text-sm text-gray-300">Shows all payment options (cards, BNPL, etc.) to maximize savings</p>
                  </div>
                  <span className="text-2xl sm:text-3xl text-[#c9a227] hidden sm:block">→</span>
                </div>
              </div>

              {/* 4. Dual-Loyalty Layer */}
              <div className="bg-gradient-to-r from-green-500/20 to-green-500/5 rounded-xl p-3 sm:p-4 border-2 border-green-500/40">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center text-xl sm:text-2xl font-black text-white">4</div>
                  <div className="flex-1 text-left">
                    <h3 className="text-base sm:text-lg font-bold text-green-400 mb-1">💰 Dual-Loyalty Rewards</h3>
                    <p className="text-xs sm:text-sm text-gray-300">Earn 5-10% cashback + branded coins from merchant • Stack both rewards</p>
                  </div>
                  <span className="text-2xl sm:text-3xl text-[#c9a227] hidden sm:block">→</span>
                </div>
              </div>

              {/* 5. Engagement Rewards Layer */}
              <div className="bg-gradient-to-r from-pink-500/20 to-pink-500/5 rounded-xl p-3 sm:p-4 border-2 border-pink-500/40">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-pink-500 rounded-full flex items-center justify-center text-xl sm:text-2xl font-black text-white">5</div>
                  <div className="flex-1 text-left">
                    <h3 className="text-base sm:text-lg font-bold text-pink-400 mb-1">🎯 Unlock Perks</h3>
                    <p className="text-xs sm:text-sm text-gray-300">Visit merchants X times → Unlock additional offers • Gamified loyalty</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Prop Summary */}
            <div className="bg-[#1a2a42]/50 rounded-xl p-3 sm:p-4 max-w-3xl border border-[#c9a227]/30 mb-3">
              <p className="text-base sm:text-lg font-bold text-[#c9a227] mb-2">Complete Commerce Platform</p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                <div><span className="text-xl block">🔍</span><p className="font-bold text-white">Discover</p></div>
                <div><span className="text-xl block">🔒</span><p className="font-bold text-white">Book/Lock</p></div>
                <div><span className="text-xl block">💳</span><p className="font-bold text-white">Pay Smart</p></div>
                <div><span className="text-xl block">💰</span><p className="font-bold text-white">Dual Rewards</p></div>
                <div><span className="text-xl block">🎯</span><p className="font-bold text-white">Unlock Perks</p></div>
              </div>
            </div>

            {/* Real Example */}
            <div className="bg-[#1a2a42]/50 rounded-xl p-3 max-w-3xl border border-[#c9a227]/30">
              <p className="text-xs text-gray-400 mb-2 text-center">Example: AED 1,000 Product Purchase Journey</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-blue-500/10 p-2 rounded-lg border border-blue-500/30">
                  <p className="text-blue-400 font-bold mb-1">1. Discover & Lock</p>
                  <p className="text-gray-300">Browse on Nuqta → Lock with AED 200 → Home delivery or visit store</p>
                </div>
                <div className="bg-[#c9a227]/10 p-2 rounded-lg border border-[#c9a227]/30">
                  <p className="text-[#c9a227] font-bold mb-1">2. Pay Smart</p>
                  <p className="text-gray-300">Nuqta shows: "Use Emirates NBD, save AED 30"</p>
                </div>
                <div className="bg-green-500/10 p-2 rounded-lg border border-green-500/30">
                  <p className="text-green-400 font-bold mb-1">3. Earn Double</p>
                  <p className="text-gray-300">AED 50 cashback + 100 brand coins + unlock perk after 3 visits</p>
                </div>
              </div>
              <p className="text-center text-[#c9a227] font-bold mt-2">Total Value: AED 80+ savings + Loyalty perks</p>
            </div>
          </div>
        );

      // ==================== SLIDE 4: USER FUNNEL (NEW INFOGRAPHIC) ====================
      case 4:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">User Journey</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">
              The <span className="text-[#c9a227]">Funnel</span>
            </h2>

            {/* Funnel Visualization */}
            <div className="max-w-2xl w-full space-y-3 sm:space-y-4 mb-3 sm:mb-4">
              {/* Stage 1 */}
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500/30 to-blue-500/10 rounded-t-2xl p-3 sm:p-4 border-2 border-blue-500/50 mx-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
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
                    <div className="flex items-center gap-3 sm:gap-4">
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
                    <div className="flex items-center gap-3 sm:gap-4">
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
                    <div className="flex items-center gap-3 sm:gap-4">
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
                    <div className="flex items-center gap-3 sm:gap-4">
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

      // ==================== SLIDE 9: BUSINESS MODEL (Simplified - Year 1 Focus) ====================
      case 5:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-purple-400 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Economics</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Business Model
            </h2>

            {/* Revenue Model - Year 1 Only */}
            <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl sm:rounded-3xl p-3 sm:p-4 max-w-3xl w-full border-2 border-[#c9a227]/40 mb-6">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-center">How We Make Money (Year 1)</h3>

              {/* Commission Structure */}
              <div className="bg-[#1a2a42]/50 rounded-xl p-4 border border-[#2a3a52] mb-4">
                <p className="text-sm font-bold text-center mb-3">Merchant Commission Structure</p>
                <div className="flex items-center justify-center gap-2 flex-wrap text-xs sm:text-sm">
                  <div className="bg-blue-500/20 px-4 py-2 rounded-lg border border-blue-500/40">
                    <p className="text-blue-400 font-bold text-center text-xl sm:text-2xl">5%</p>
                    <p className="text-gray-400 text-center mt-1">Fixed Base</p>
                  </div>
                  <span className="text-gray-400 text-xl">+</span>
                  <div className="bg-[#c9a227]/20 px-4 py-2 rounded-lg border border-[#c9a227]/40">
                    <p className="text-[#c9a227] font-bold text-center text-xl sm:text-2xl">up to 10%</p>
                    <p className="text-gray-400 text-center mt-1">Performance-Based</p>
                  </div>
                  <span className="text-gray-400 text-xl">=</span>
                  <div className="bg-green-500/20 px-4 py-2 rounded-lg border border-green-500/40">
                    <p className="text-green-400 font-bold text-center text-xl sm:text-2xl">5-15%</p>
                    <p className="text-gray-400 text-center mt-1">Total Range</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 text-center mt-3">
                  <span className="text-[#c9a227]">Performance bonus</span> based on trackable loyalty-driven repeat visits
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-1">Avg Commission</p>
                  <p className="text-3xl sm:text-4xl font-black text-[#c9a227]">10%</p>
                  <p className="text-xs text-gray-500 mt-1">blended avg</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-1">User Gets</p>
                  <p className="text-3xl sm:text-4xl font-black text-green-400">5-7.5%</p>
                  <p className="text-xs text-gray-500 mt-1">cashback range</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-1">Nuqta Margin</p>
                  <p className="text-3xl sm:text-4xl font-black text-white">~50%</p>
                  <p className="text-xs text-gray-500 mt-1">gross margin</p>
                </div>
              </div>

              <div className="bg-[#1a2a42]/50 rounded-xl p-4 border border-[#2a3a52]">
                <p className="text-xs sm:text-sm text-gray-300 text-center">
                  <span className="text-[#c9a227] font-bold">Key Differentiator:</span> ROI-linked loyalty spend, not payment processing
                </p>
              </div>
            </div>

            {/* 5 Revenue Streams - NEW */}
            <div className="bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 rounded-2xl sm:rounded-3xl p-4 max-w-4xl w-full border-2 border-[#c9a227]/30 mb-6">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-center text-[#c9a227]">5 Revenue Streams = Diversified Model</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {/* 1. Merchant Commission */}
                <div className="bg-[#1a2a42]/70 rounded-lg p-3 border border-[#2a3a52]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">💰</span>
                    <div>
                      <p className="text-sm font-bold text-white">Merchant Commission</p>
                      <p className="text-xs text-[#c9a227]">60% of revenue</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">5-15% on transactions through platform</p>
                </div>

                {/* 2. Payment Routing Fees */}
                <div className="bg-[#1a2a42]/70 rounded-lg p-3 border border-[#2a3a52]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">💳</span>
                    <div>
                      <p className="text-sm font-bold text-white">Payment Routing</p>
                      <p className="text-xs text-blue-400">15% of revenue</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">Banks/BNPLs pay $1-3 per directed transaction</p>
                </div>

                {/* 3. Promoted Listings */}
                <div className="bg-[#1a2a42]/70 rounded-lg p-3 border border-[#2a3a52]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="text-sm font-bold text-white">Promoted Listings</p>
                      <p className="text-xs text-green-400">15% of revenue</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">$500-2K/mo per merchant for discovery visibility</p>
                </div>

                {/* 4. Branded Coin Sales */}
                <div className="bg-[#1a2a42]/70 rounded-lg p-3 border border-[#2a3a52]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🪙</span>
                    <div>
                      <p className="text-sm font-bold text-white">Branded Coins</p>
                      <p className="text-xs text-purple-400">5% of revenue</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">Merchants buy coins for loyalty distribution</p>
                </div>

                {/* 5. Transaction Fees */}
                <div className="bg-[#1a2a42]/70 rounded-lg p-3 border border-[#2a3a52]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">📊</span>
                    <div>
                      <p className="text-sm font-bold text-white">Transaction Fees</p>
                      <p className="text-xs text-gray-400">5% of revenue</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">1-2% on facilitated bookings/purchases</p>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-[#c9a227]/20">
                <p className="text-xs text-center text-gray-400">
                  <span className="text-[#c9a227] font-semibold">Why Diversification Matters:</span> Not dependent on single revenue stream • Multiple monetization levers • Can adjust pricing based on market feedback
                </p>
              </div>
            </div>

            {/* Unit Economics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl w-full mb-6">
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-green-500/40 text-center">
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">ARPU</p>
                <DataPoint
                  value="$10/mo"
                  source="Based on 7 transactions/user/month at $27 GMV/transaction with 50% gross margin"
                  className="text-3xl sm:text-4xl font-black text-green-400 block"
                />
                <p className="text-xs sm:text-sm text-gray-400 mt-2">monthly revenue per user</p>
              </div>

              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-[#c9a227]/40 text-center">
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">CAC</p>
                <DataPoint
                  value="AED 35"
                  source="Conservative pre-launch estimate. Target: 50% merchant-led (near-zero CAC), 50% paid (AED 35/user)"
                  className="text-3xl sm:text-4xl font-black text-[#c9a227] block"
                />
                <p className="text-xs sm:text-sm text-gray-400 mt-2">customer acquisition cost</p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-blue-500/40 text-center">
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Payback</p>
                <DataPoint
                  value="3.5 mo"
                  source="AED 35 CAC / $10 monthly ARPU = 3.5 months to break even"
                  className="text-3xl sm:text-4xl font-black text-blue-400 block"
                />
                <p className="text-xs sm:text-sm text-gray-400 mt-2">to break even</p>
              </div>
            </div>

            {/* Economic Flow */}
            <div className="bg-[#1a2a42]/50 rounded-xl p-4 max-w-4xl w-full border border-[#2a3a52]">
              <p className="text-sm font-bold mb-2 text-center">Economic Flow (Per User)</p>
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
                <span className="bg-red-500/20 px-3 py-1 rounded-full">AED 35 CAC</span>
                <span className="text-gray-500">→</span>
                <span className="bg-blue-500/20 px-3 py-1 rounded-full">$189 monthly GMV</span>
                <span className="text-gray-500">→</span>
                <span className="bg-[#c9a227]/20 px-3 py-1 rounded-full">$19 commission (10% avg)</span>
                <span className="text-gray-500">→</span>
                <span className="bg-green-500/20 px-3 py-1 rounded-full">$10 profit (~50% margin)</span>
              </div>
            </div>

            <p className="mt-4 text-center text-xs sm:text-sm text-gray-400 max-w-3xl">
              <span className="text-[#c9a227] font-bold">Focus:</span> At this stage, Nuqta is optimizing for proof of repeat behavior, not financial precision.
            </p>
          </div>
        );

      // ==================== SLIDE 14: THE ASK ====================
      case 6:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Investment Opportunity</p>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-3 sm:mb-4">
              The <span className="text-[#c9a227]">Ask</span>
            </h2>

            {/* Main Ask Card */}
            <div className="bg-gradient-to-br from-[#c9a227]/30 to-[#c9a227]/10 rounded-2xl sm:rounded-3xl p-3 sm:p-4 border-4 border-[#c9a227] max-w-3xl w-full mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                <div className="text-center">
                  <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Raising</p>
                  <p className="text-4xl sm:text-5xl md:text-6xl font-black text-[#c9a227]">$400K</p>
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
              <div className="bg-[#1a2a42]/50 rounded-xl p-3 sm:p-4 border-2 border-[#c9a227]/30 text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Fast-Growing Market</h3>
                <p className="text-xs sm:text-sm text-gray-400">$35B UAE addressable market with 86% digital payment adoption</p>
              </div>

              <div className="bg-[#1a2a42]/50 rounded-xl p-3 sm:p-4 border-2 border-[#c9a227]/30 text-center">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Clear Path to Profitability</h3>
                <p className="text-xs sm:text-sm text-gray-400">33-66% gross margins, 2-4 month CAC payback, proven unit economics</p>
              </div>

              <div className="bg-[#1a2a42]/50 rounded-xl p-3 sm:p-4 border-2 border-[#c9a227]/30 text-center">
                <div className="text-4xl mb-3">🔄</div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Viral Growth Built-In</h3>
                <p className="text-xs sm:text-sm text-gray-400">Social sharing drives 0.42 viral coefficient, lowering CAC as we scale</p>
              </div>

              <div className="bg-[#1a2a42]/50 rounded-xl p-3 sm:p-4 border-2 border-[#c9a227]/30 text-center">
                <div className="text-4xl mb-3">⏰</div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Perfect Timing</h3>
                <p className="text-xs sm:text-sm text-gray-400">Open banking + digital payments boom + merchant pain = now or never</p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 2: WHY NOW? ====================
      case 7:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Timing & Momentum</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Why <span className="text-[#c9a227]">Now</span>?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl w-full mb-3 sm:mb-4">
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
                <div key={idx} className="bg-[#1a2a42]/50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-[#2a3a52] hover:border-[#c9a227]/50 transition-colors">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="text-2xl sm:text-3xl flex-shrink-0">{item.icon}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-3 sm:gap-4 mb-0.5 sm:mb-1">
                        <h3 className="font-bold text-xs sm:text-sm">{item.title}</h3>
                        <span className="text-[#c9a227] font-black text-sm sm:text-base md:text-lg whitespace-nowrap">{item.stat}</span>
                      </div>
                      <p className="text-gray-400 text-xs sm:text-sm mb-1">{item.desc}</p>
                      <p className="text-gray-600 text-xs italic">Source: {item.source}</p>
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

      // ==================== SLIDE 8: VIRAL MECHANICS (IMPROVED) ====================
      case 8:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Viral Mechanics</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-center">
              The Growth <span className="text-[#c9a227]">Flywheel</span>
            </h2>

            {/* Simplified Circular Flow */}
            <div className="max-w-3xl w-full mb-4">
              <div className="grid grid-cols-1 gap-3">
                {/* Step 1 → 2 → 3 → back to 1 in circular flow */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex-1 bg-gradient-to-r from-blue-500/20 to-blue-500/10 rounded-xl p-3 sm:p-4 border-2 border-blue-500/50">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl">🏪</span>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-blue-400 mb-0.5">1. Merchant QR at Checkout</p>
                        <p className="text-xs text-gray-400">"Get 5% cashback instantly"</p>
                      </div>
                      <span className="text-xl sm:text-2xl text-[#c9a227]">→</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex-1 bg-gradient-to-r from-green-500/20 to-green-500/10 rounded-xl p-3 sm:p-4 border-2 border-green-500/50">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl">👤</span>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-green-400 mb-0.5">2. User Signs Up & Shops</p>
                        <p className="text-xs text-gray-400">Instant 5% cashback on purchase</p>
                      </div>
                      <span className="text-xl sm:text-2xl text-[#c9a227]">→</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex-1 bg-gradient-to-r from-purple-500/20 to-purple-500/10 rounded-xl p-3 sm:p-4 border-2 border-purple-500/50">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl">📱</span>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-purple-400 mb-0.5">3. User Shares (Gets +5%)</p>
                        <p className="text-xs text-gray-400">30% share → 0.42 viral coefficient</p>
                      </div>
                      <span className="text-xl sm:text-2xl text-[#c9a227]">→</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex-1 bg-gradient-to-r from-orange-500/20 to-orange-500/10 rounded-xl p-3 sm:p-4 border-2 border-orange-500/50">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl">👥</span>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-orange-400 mb-0.5">4. Friends Join & Repeat</p>
                        <p className="text-xs text-gray-400">Each user brings 0.42 more → compounds</p>
                      </div>
                      <span className="text-xl sm:text-2xl text-[#c9a227]">↻</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Circular indicator */}
              <div className="mt-3 flex items-center justify-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent"></div>
                <div className="bg-[#c9a227]/20 rounded-full px-4 py-2 border border-[#c9a227]/50">
                  <p className="text-xs sm:text-sm text-[#c9a227] font-bold">↻ Cycle Repeats & Accelerates</p>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent"></div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl w-full mb-3">
              <div className="bg-[#1a2a42]/50 rounded-lg p-3 border border-[#c9a227]/30 text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#c9a227]">0.42</p>
                <p className="text-xs text-gray-400">Viral Coeff.</p>
              </div>
              <div className="bg-[#1a2a42]/50 rounded-lg p-3 border border-green-500/30 text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">30%</p>
                <p className="text-xs text-gray-400">Share Rate</p>
              </div>
              <div className="bg-[#1a2a42]/50 rounded-lg p-3 border border-purple-500/30 text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400">$0</p>
                <p className="text-xs text-gray-400">CAC (viral)</p>
              </div>
              <div className="bg-[#1a2a42]/50 rounded-lg p-3 border border-blue-500/30 text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">100%</p>
                <p className="text-xs text-gray-400">Merchant-Led</p>
              </div>
            </div>

            <p className="text-center text-xs sm:text-sm text-gray-400 max-w-3xl">
              <span className="text-[#c9a227] font-bold">Why It Works:</span> Growth happens at point of purchase (high intent),
              social incentive (+5%) drives shares, every cycle costs us $0 in CAC.
            </p>
          </div>
        );

      // ==================== SLIDE 6: GO-TO-MARKET STRATEGY (NEW) ====================
      case 9:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Distribution</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Go-to-Market Strategy
            </h2>
            <p className="text-sm sm:text-base text-gray-400 text-center mb-6 max-w-2xl">
              How Nuqta Acquires the First 10,000 Users
            </p>

            {/* Three Engines */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-5xl w-full mb-6">
              {/* Primary Engine */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-[#c9a227]/40">
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
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-purple-500/40">
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
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-blue-500/40">
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
            <div className="bg-[#1a2a42]/50 rounded-xl p-3 sm:p-4 max-w-4xl w-full border border-[#2a3a52] mb-4">
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
      case 10:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Competitive Edge</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Why <span className="text-[#c9a227]">Nuqta</span> Wins
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-5xl w-full mb-6">
              {/* Advantage 1 */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-blue-500/40">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🧠</div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Smart Payment Layer</h3>
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
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-green-500/40">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">💰</div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Guaranteed 5% + Bonus</h3>
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
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-purple-500/40">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🔄</div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Viral Growth Built-In</h3>
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
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-[#c9a227]/40 max-w-3xl">
              <p className="text-center text-sm sm:text-base text-gray-300">
                <span className="text-[#c9a227] font-bold text-lg">We&apos;re not a bank competitor.</span><br/>
                We&apos;re the <span className="text-white font-semibold">smart payment layer</span> that makes every bank, card, and wallet <span className="text-white font-semibold">work better for consumers.</span>
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 8: COMPETITIVE MOAT (Neutrality Position) ====================
      case 11:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Defensibility</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              The <span className="text-[#c9a227]">Moat</span>
            </h2>

            <p className="text-center text-sm sm:text-base text-gray-300 mb-6 max-w-3xl">
              <span className="text-white font-bold">"Nuqta's moat is neutrality in a market where everyone else is conflicted,</span><br/>
              <span className="text-gray-400">combined with behavioral data that only compounds with time."</span>
            </p>

            {/* Layer 0: Transaction Lock-In (THE REAL MOAT) */}
            <div className="bg-gradient-to-r from-green-500/30 to-green-500/10 rounded-2xl p-4 sm:p-5 border-2 border-green-500/50 max-w-5xl w-full mb-6">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-4xl">🔒</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-green-400">0. Transaction Lock-In</h3>
                  <p className="text-sm text-gray-400">The Real Moat</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div className="bg-[#0a1628]/70 rounded-lg p-3 border border-red-500/30">
                  <p className="text-xs font-bold text-red-400 mb-2">❌ Most Cashback Apps:</p>
                  <p className="text-xs text-gray-300">User shops → Opens app → Claims cashback</p>
                  <p className="text-xs text-gray-500 mt-1 italic">(Easy to forget, easy to switch)</p>
                </div>

                <div className="bg-[#0a1628]/70 rounded-lg p-3 border border-green-500/30">
                  <p className="text-xs font-bold text-green-400 mb-2">✓ Nuqta's Advantage:</p>
                  <p className="text-xs text-gray-300">User discovers → Books → Pays → Earns</p>
                  <p className="text-xs text-white mt-1 italic font-semibold">(We own the entire journey)</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-[#0a1628]/50 rounded-lg p-2 border border-green-500/20">
                  <p className="text-xs text-green-400 font-semibold mb-1">✓ Discovery Habit</p>
                  <p className="text-xs text-gray-400">We capture intent</p>
                </div>
                <div className="bg-[#0a1628]/50 rounded-lg p-2 border border-green-500/20">
                  <p className="text-xs text-green-400 font-semibold mb-1">✓ Booking Layer</p>
                  <p className="text-xs text-gray-400">We control transaction</p>
                </div>
                <div className="bg-[#0a1628]/50 rounded-lg p-2 border border-green-500/20">
                  <p className="text-xs text-green-400 font-semibold mb-1">✓ Dual Rewards</p>
                  <p className="text-xs text-gray-400">Switching loses both</p>
                </div>
              </div>
            </div>

            {/* Four Additional Moat Layers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-5xl w-full mb-6">
              {/* 1. Position Moat */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-4 border-2 border-[#c9a227]/40">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">🎯</span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#c9a227]">Position Moat</h3>
                    <p className="text-xs text-gray-400">Hardest to Copy</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 mb-3">
                  Nuqta sits <span className="text-white font-bold">between banks, BNPLs, and merchants</span> — and is <span className="text-[#c9a227] font-bold">neutral to all.</span>
                </p>
                <div className="bg-[#0a1628]/50 rounded-lg p-3 border border-[#c9a227]/30">
                  <p className="text-xs text-gray-400 mb-2 font-semibold">Why big players can't copy:</p>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Banks can't recommend competitors</li>
                    <li>• BNPLs can't be neutral across platforms</li>
                    <li>• Super apps can't send users outside</li>
                  </ul>
                  <p className="text-xs text-[#c9a227] mt-2 font-semibold">Nuqta can. This is structural.</p>
                </div>
              </div>

              {/* 2. Incentive Moat */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl sm:rounded-2xl p-4 border-2 border-green-500/40">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">🤝</span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-green-400">Incentive Moat</h3>
                    <p className="text-xs text-gray-400">Alignment Advantage</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 mb-3">
                  Nuqta's incentives are <span className="text-green-400 font-bold">aligned outward,</span> not inward.
                </p>
                <div className="bg-[#0a1628]/50 rounded-lg p-3 border border-green-500/30">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="text-green-400 font-semibold mb-1">✓ Nuqta Model:</p>
                      <p className="text-gray-300">• Users win (better decisions)</p>
                      <p className="text-gray-300">• Merchants win (repeat visits)</p>
                      <p className="text-gray-300">• Partners win (incremental volume)</p>
                    </div>
                    <div>
                      <p className="text-red-400 font-semibold mb-1">✗ Incumbents:</p>
                      <p className="text-gray-400">• Careem → lock-in</p>
                      <p className="text-gray-400">• Tabby → exclusive use</p>
                      <p className="text-gray-400">• Banks → card preference</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Behavioral Data Moat */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl sm:rounded-2xl p-4 border-2 border-blue-500/40">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">📊</span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-blue-400">Data Moat</h3>
                    <p className="text-xs text-gray-400">Time-Compounded</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 mb-3">
                  Offline behavioral data that <span className="text-blue-400 font-bold">cannot be bought, scraped, or fast-forwarded.</span>
                </p>
                <div className="bg-[#0a1628]/50 rounded-lg p-3 border border-blue-500/30">
                  <p className="text-xs text-gray-300 mb-2">We compound:</p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• Visit frequency per merchant</li>
                    <li>• Payment method choice by context</li>
                    <li>• Loyalty response over time</li>
                    <li>• Cross-merchant behavior patterns</li>
                  </ul>
                  <p className="text-xs text-blue-400 mt-2 font-semibold italic">
                    Even with 50 engineers, Careem can't recreate 2 years of this in 3 months.
                  </p>
                </div>
              </div>

              {/* 4. Merchant Switching Costs */}
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl sm:rounded-2xl p-4 border-2 border-purple-500/40">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">🔒</span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-purple-400">Switching Cost Moat</h3>
                    <p className="text-xs text-gray-400">Year 2+ Defense</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 mb-3">
                  By Year 2, merchants will have <span className="text-purple-400 font-bold">configured campaigns, set tiers, and built baselines.</span>
                </p>
                <div className="bg-[#0a1628]/50 rounded-lg p-3 border border-purple-500/30">
                  <p className="text-xs text-gray-300 mb-2">Switching Nuqta means:</p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• Losing campaign logic & tier configs</li>
                    <li>• Resetting customer behavior baselines</li>
                    <li>• Abandoning ROI history</li>
                  </ul>
                  <p className="text-xs text-purple-400 mt-2 font-semibold">
                    Not "delete app" — it's resetting learned behavior.
                  </p>
                </div>
              </div>
            </div>

            {/* Honest Reality */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-4 border-2 border-[#c9a227]/40 max-w-3xl">
              <p className="text-center text-xs sm:text-sm text-gray-300">
                <span className="text-[#c9a227] font-bold">Honest Timeline:</span><br/>
                <span className="text-gray-400">❌ Not a moat in Month 3 • </span>
                <span className="text-yellow-400">⚠️ Partial moat in Year 1 • </span>
                <span className="text-green-400">✅ Strong moat in Year 2-3 • </span>
                <span className="text-white">🔒 Strategic moat by Year 4+</span>
              </p>
              <p className="text-center text-xs text-gray-400 mt-2">
                Nuqta is not protected because it's hard to build. <span className="text-white font-semibold">It's protected because it's uncomfortable for big players to build.</span>
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 12: DATA MOAT VISUALIZATION ====================
      case 12:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-blue-400 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Behavioral Insights</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              How <span className="text-[#c9a227]">Data Compounds</span> Over Time
            </h2>

            <p className="text-center text-sm text-gray-400 mb-6 max-w-2xl">
              Every transaction creates behavioral data that improves recommendations and merchant ROI — creating switching costs that strengthen with use.
            </p>

            {/* Timeline Visualization */}
            <div className="space-y-4 max-w-4xl w-full mb-6">
              {/* Month 3 */}
              <div className="relative">
                <div className="bg-gradient-to-r from-red-500/20 to-red-500/5 rounded-xl p-4 border-2 border-red-500/40">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-sm font-black">M3</div>
                      <h3 className="text-lg font-bold text-red-400">Month 3: Basic Patterns</h3>
                    </div>
                    <span className="text-xs text-gray-400 bg-[#0a1628]/50 px-3 py-1 rounded-full">❌ Weak Moat</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-[#0a1628]/50 rounded-lg p-3 border border-red-500/30">
                      <p className="text-xs text-gray-400 mb-1">What We Know:</p>
                      <p className="text-sm text-gray-300">• Basic visit frequency</p>
                      <p className="text-sm text-gray-300">• Preferred payment methods</p>
                      <p className="text-sm text-gray-300">• Initial merchant preferences</p>
                    </div>
                    <div className="bg-[#0a1628]/50 rounded-lg p-3 border border-red-500/30">
                      <p className="text-xs text-gray-400 mb-1">Merchant Value:</p>
                      <p className="text-sm text-red-400 font-semibold">Limited</p>
                      <p className="text-xs text-gray-400">Can't prove lift yet</p>
                    </div>
                    <div className="bg-[#0a1628]/50 rounded-lg p-3 border border-red-500/30">
                      <p className="text-xs text-gray-400 mb-1">Switching Risk:</p>
                      <p className="text-sm text-red-400 font-semibold">High</p>
                      <p className="text-xs text-gray-400">Easy to replace</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Year 1 */}
              <div className="relative">
                <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-500/5 rounded-xl p-4 border-2 border-yellow-500/40">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-sm font-black text-black">Y1</div>
                      <h3 className="text-lg font-bold text-yellow-400">Year 1: Behavioral Baselines</h3>
                    </div>
                    <span className="text-xs text-gray-400 bg-[#0a1628]/50 px-3 py-1 rounded-full">⚠️ Partial Moat</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-[#0a1628]/50 rounded-lg p-3 border border-yellow-500/30">
                      <p className="text-xs text-gray-400 mb-1">What We Know:</p>
                      <p className="text-sm text-gray-300">• Visit patterns per merchant</p>
                      <p className="text-sm text-gray-300">• Loyalty response curves</p>
                      <p className="text-sm text-gray-300">• Cross-merchant behavior</p>
                      <p className="text-sm text-gray-300">• Payment context preferences</p>
                    </div>
                    <div className="bg-[#0a1628]/50 rounded-lg p-3 border border-yellow-500/30">
                      <p className="text-xs text-gray-400 mb-1">Merchant Value:</p>
                      <p className="text-sm text-yellow-400 font-semibold">Growing</p>
                      <p className="text-xs text-gray-400">Early ROI signals visible</p>
                    </div>
                    <div className="bg-[#0a1628]/50 rounded-lg p-3 border border-yellow-500/30">
                      <p className="text-xs text-gray-400 mb-1">Switching Risk:</p>
                      <p className="text-sm text-yellow-400 font-semibold">Moderate</p>
                      <p className="text-xs text-gray-400">Painful but possible</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Year 2-3 */}
              <div className="relative">
                <div className="bg-gradient-to-r from-green-500/20 to-green-500/5 rounded-xl p-4 border-2 border-green-500/40">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-sm font-black">Y2</div>
                      <h3 className="text-lg font-bold text-green-400">Year 2-3: Embedded Intelligence</h3>
                    </div>
                    <span className="text-xs text-gray-400 bg-[#0a1628]/50 px-3 py-1 rounded-full">✅ Strong Moat</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-[#0a1628]/50 rounded-lg p-3 border border-green-500/30">
                      <p className="text-xs text-gray-400 mb-1">What We Know:</p>
                      <p className="text-sm text-gray-300">• Predictive visit models</p>
                      <p className="text-sm text-gray-300">• Precise loyalty elasticity</p>
                      <p className="text-sm text-gray-300">• Customer lifetime curves</p>
                      <p className="text-sm text-gray-300">• Cross-merchant affinity maps</p>
                      <p className="text-sm text-gray-300">• Optimal incentive thresholds</p>
                    </div>
                    <div className="bg-[#0a1628]/50 rounded-lg p-3 border border-green-500/30">
                      <p className="text-xs text-gray-400 mb-1">Merchant Value:</p>
                      <p className="text-sm text-green-400 font-semibold">High</p>
                      <p className="text-xs text-gray-400">Proven ROI, campaign history</p>
                      <p className="text-xs text-gray-400 mt-1">Configured tiers + logic</p>
                    </div>
                    <div className="bg-[#0a1628]/50 rounded-lg p-3 border border-green-500/30">
                      <p className="text-xs text-gray-400 mb-1">Switching Risk:</p>
                      <p className="text-sm text-green-400 font-semibold">Low</p>
                      <p className="text-xs text-gray-400">Switching = resetting years of learning</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Year 4+ */}
              <div className="relative">
                <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl p-4 border-2 border-[#c9a227]/40">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#c9a227] rounded-full flex items-center justify-center text-sm font-black text-black">Y4</div>
                      <h3 className="text-lg font-bold text-[#c9a227]">Year 4+: Strategic Infrastructure</h3>
                    </div>
                    <span className="text-xs text-gray-400 bg-[#0a1628]/50 px-3 py-1 rounded-full">🔒 Strategic Moat</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-[#0a1628]/50 rounded-lg p-3 border border-[#c9a227]/30">
                      <p className="text-xs text-gray-400 mb-1">What We Know:</p>
                      <p className="text-sm text-gray-300">• Market-level demand patterns</p>
                      <p className="text-sm text-gray-300">• Competitive dynamics</p>
                      <p className="text-sm text-gray-300">• Seasonal behavior models</p>
                      <p className="text-sm text-gray-300">• Network effects (referrals)</p>
                      <p className="text-sm text-gray-300">• Merchant benchmarking</p>
                    </div>
                    <div className="bg-[#0a1628]/50 rounded-lg p-3 border border-[#c9a227]/30">
                      <p className="text-xs text-gray-400 mb-1">Merchant Value:</p>
                      <p className="text-sm text-[#c9a227] font-semibold">Critical</p>
                      <p className="text-xs text-gray-400">Core loyalty infrastructure</p>
                      <p className="text-xs text-gray-400 mt-1">Part of merchant operations</p>
                    </div>
                    <div className="bg-[#0a1628]/50 rounded-lg p-3 border border-[#c9a227]/30">
                      <p className="text-xs text-gray-400 mb-1">Switching Risk:</p>
                      <p className="text-sm text-[#c9a227] font-semibold">Very Low</p>
                      <p className="text-xs text-gray-400">Embedded in merchant workflows</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insight */}
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/5 rounded-xl sm:rounded-2xl p-4 border-2 border-blue-500/40 max-w-4xl">
              <p className="text-center text-sm sm:text-base text-gray-300">
                <span className="text-[#c9a227] font-bold">The Compounding Effect:</span><br/>
                <span className="text-gray-300">Every transaction → better predictions → better merchant ROI → higher retention → more data</span><br/>
                <span className="text-white font-semibold italic text-xs sm:text-sm mt-2 block">Even with unlimited resources, competitors can't fast-forward this timeline.</span>
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 13: TRACTION (REWRITTEN - DE-RISKED BEFORE LAUNCH) ====================
      case 13:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-green-400 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Execution De-Risked</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Traction: <span className="text-[#c9a227]">Already Executed</span> Pre-Launch
            </h2>

            {/* Hero Message */}
            <div className="bg-gradient-to-r from-[#c9a227]/30 to-[#c9a227]/10 rounded-2xl p-4 border-2 border-[#c9a227]/50 max-w-4xl mb-6">
              <p className="text-center text-base sm:text-lg text-white font-bold">
                Most founders raise to build + test. We built + tested. Now we raise to scale.
              </p>
            </div>

            {/* Main Traction Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl w-full mb-6">
              {/* Product Readiness - NEW */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl sm:rounded-2xl p-6 border-2 border-blue-500/40">
                <div className="text-5xl mb-4">💻</div>
                <p className="text-4xl sm:text-5xl font-black text-blue-400 mb-2">95%</p>
                <p className="text-base sm:text-lg font-semibold mb-2">Product Complete</p>
                <p className="text-xs sm:text-sm text-gray-400 mb-3">Full platform ready: Discovery + Booking + Payment Intelligence + Dual-Loyalty</p>
                <div className="bg-blue-500/10 rounded-lg p-2 border border-blue-500/30">
                  <p className="text-xs text-blue-300 font-semibold">✓ 30 days to launch (Feb 2026)</p>
                  <p className="text-xs text-blue-300 font-semibold">✓ Built in-house by technical founder</p>
                  <p className="text-xs text-blue-300 font-semibold">✓ No outsourcing risk</p>
                </div>
              </div>

              {/* Merchant Contracts - UPDATED */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl sm:rounded-2xl p-6 border-2 border-green-500/40">
                <div className="text-5xl mb-4">📝</div>
                <p className="text-4xl sm:text-5xl font-black text-green-400 mb-2">30</p>
                <p className="text-base sm:text-lg font-semibold mb-2">Signed Contracts</p>
                <p className="text-xs sm:text-sm text-gray-400 mb-3">Legal agreements with UAE D2C brands (F&B, fashion, beauty, wellness)</p>
                <div className="bg-green-500/10 rounded-lg p-2 border border-green-500/30">
                  <p className="text-xs text-green-300 font-semibold">✓ Not MOUs - binding contracts</p>
                  <p className="text-xs text-green-300 font-semibold">✓ All committed to Day 1 launch</p>
                  <p className="text-xs text-green-300 font-semibold">✓ Cold-start problem SOLVED</p>
                </div>
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
                <p className="text-xs sm:text-sm text-gray-400 mb-3">Early adopters ready for launch (pre-marketing)</p>
                <div className="bg-[#c9a227]/10 rounded-lg p-2 border border-[#c9a227]/30">
                  <p className="text-xs text-[#c9a227] font-semibold">Target: 1,000 users in Month 1</p>
                </div>
              </div>

              {/* Founder Network - NEW */}
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl sm:rounded-2xl p-6 border-2 border-purple-500/40">
                <div className="text-5xl mb-4">🌐</div>
                <p className="text-4xl sm:text-5xl font-black text-purple-400 mb-2">50+</p>
                <p className="text-base sm:text-lg font-semibold mb-2">UAE Client Network</p>
                <p className="text-xs sm:text-sm text-gray-400 mb-3">From founder's marketing agency (direct brand relationships)</p>
                <div className="bg-purple-500/10 rounded-lg p-2 border border-purple-500/30">
                  <p className="text-xs text-purple-300 font-semibold">✓ Can onboard merchants faster</p>
                  <p className="text-xs text-purple-300 font-semibold">✓ AED 2M+ Meta ads experience</p>
                  <p className="text-xs text-purple-300 font-semibold">✓ Proven CAC optimization</p>
                </div>
              </div>
            </div>

            {/* What's De-Risked */}
            <div className="bg-[#1a2a42]/50 rounded-xl sm:rounded-2xl p-4 border-2 border-[#c9a227]/40 max-w-5xl mb-4">
              <h3 className="text-lg font-bold text-[#c9a227] mb-3 text-center">Execution Risk = Eliminated ✅</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl mb-1">✅</p>
                  <p className="text-sm font-bold text-white mb-1">Product Risk</p>
                  <p className="text-xs text-gray-400">App is 95% ready, launches in 30 days</p>
                </div>
                <div>
                  <p className="text-2xl mb-1">✅</p>
                  <p className="text-sm font-bold text-white mb-1">Merchant Risk</p>
                  <p className="text-xs text-gray-400">30 signed contracts, Day 1 density</p>
                </div>
                <div>
                  <p className="text-2xl mb-1">✅</p>
                  <p className="text-sm font-bold text-white mb-1">Founder Risk</p>
                  <p className="text-xs text-gray-400">Technical + Marketing + UAE network</p>
                </div>
              </div>
            </div>

            {/* Bottom Line */}
            <div className="bg-gradient-to-r from-green-500/20 to-green-500/5 rounded-xl p-3 border-2 border-green-500/40 max-w-4xl">
              <p className="text-center text-sm sm:text-base text-gray-300">
                <span className="text-green-400 font-bold">Only Risk Left:</span> Proving unit economics in market.
                <br/><span className="text-white font-semibold">$400K gives us 18-24 months runway to validate and scale.</span>
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 14: PRODUCT SCREENSHOTS (NEW - 30 DAYS TO LAUNCH) ====================
      case 14:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-blue-400 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Product Ready</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              The Product <span className="text-[#c9a227]">(30 Days to Launch)</span>
            </h2>

            <p className="text-center text-sm sm:text-base text-gray-400 mb-6 max-w-3xl">
              MVP is 95% complete. Built in-house by technical founder. Here's what we've built:
            </p>

            {/* Screenshot Placeholders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl w-full mb-6">
              {/* Screenshot 1: Discovery Feed */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl p-4 border-2 border-blue-500/40">
                <div className="bg-[#0a1628] rounded-lg aspect-[9/16] mb-3 flex items-center justify-center border border-blue-500/30">
                  <div className="text-center">
                    <span className="text-4xl sm:text-5xl block mb-2">🔍</span>
                    <p className="text-sm text-gray-400">Discovery Feed</p>
                    <p className="text-xs text-gray-500 mt-1">Screenshot placeholder</p>
                  </div>
                </div>
                <h4 className="text-sm font-bold text-blue-400 mb-1">1. Discovery Feed</h4>
                <p className="text-xs text-gray-400">Browse 30+ UAE brands • Categories • Search • Filters</p>
              </div>

              {/* Screenshot 2: Payment Intelligence */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl p-4 border-2 border-[#c9a227]/40">
                <div className="bg-[#0a1628] rounded-lg aspect-[9/16] mb-3 flex items-center justify-center border border-[#c9a227]/30">
                  <div className="text-center">
                    <span className="text-4xl sm:text-5xl block mb-2">💳</span>
                    <p className="text-sm text-gray-400">Payment Intelligence</p>
                    <p className="text-xs text-gray-500 mt-1">Screenshot placeholder</p>
                  </div>
                </div>
                <h4 className="text-sm font-bold text-[#c9a227] mb-1">2. Payment Intelligence</h4>
                <p className="text-xs text-gray-400">"Pay with Emirates NBD, save AED 12" • Real-time recommendations</p>
              </div>

              {/* Screenshot 3: Transaction + Dual Rewards */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl p-4 border-2 border-green-500/40">
                <div className="bg-[#0a1628] rounded-lg aspect-[9/16] mb-3 flex items-center justify-center border border-green-500/30">
                  <div className="text-center">
                    <span className="text-4xl sm:text-5xl block mb-2">💰</span>
                    <p className="text-sm text-gray-400">Transaction + Rewards</p>
                    <p className="text-xs text-gray-500 mt-1">Screenshot placeholder</p>
                  </div>
                </div>
                <h4 className="text-sm font-bold text-green-400 mb-1">3. Transaction Confirmation</h4>
                <p className="text-xs text-gray-400">You earned: AED 5 cashback + 50 brand coins • Instant rewards</p>
              </div>

              {/* Screenshot 4: Branded Coins Wallet */}
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl p-4 border-2 border-purple-500/40">
                <div className="bg-[#0a1628] rounded-lg aspect-[9/16] mb-3 flex items-center justify-center border border-purple-500/30">
                  <div className="text-center">
                    <span className="text-4xl sm:text-5xl block mb-2">🎁</span>
                    <p className="text-sm text-gray-400">Coins Wallet</p>
                    <p className="text-xs text-gray-500 mt-1">Screenshot placeholder</p>
                  </div>
                </div>
                <h4 className="text-sm font-bold text-purple-400 mb-1">4. Branded Coins Wallet</h4>
                <p className="text-xs text-gray-400">Your rewards across all brands • Redeem anytime</p>
              </div>
            </div>

            {/* Bottom Line */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl p-4 border-2 border-[#c9a227]/40 max-w-4xl">
              <p className="text-center text-sm sm:text-base text-gray-300">
                <span className="text-[#c9a227] font-bold">Product is Real.</span> Built in-house by ex-CTO founder. Ready to launch in 30 days.
                <br/><span className="text-white font-semibold">Full platform: Discovery + Booking + Payment Intelligence + Dual-Loyalty.</span>
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 15: ROADMAP ====================
      case 15:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-purple-400 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Execution Plan</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Roadmap
            </h2>

            <div className="space-y-3 sm:space-y-4 max-w-4xl w-full">
              {/* Phase 1 */}
              <div className="relative">
                <div className="bg-gradient-to-r from-green-500/20 to-green-500/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-green-500/40">
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
                <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-[#c9a227]/40">
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
                <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-purple-500/40">
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

      // ==================== SLIDE 16: FOUNDER (REWRITTEN - THE UNFAIR ADVANTAGE) ====================
      case 16:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Why This Founder</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              The Rare <span className="text-[#c9a227]">"Builder + Marketer"</span> Founder
            </h2>

            <div className="max-w-5xl w-full">
              {/* Founder Card */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-[#c9a227]/40 mb-6">
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
                    <p className="text-[#c9a227] font-semibold text-lg mb-4">Founder & CEO</p>

                    <p className="text-sm sm:text-base text-gray-300 mb-4 italic">
                      "Most founders can build OR market. Rejaul can do both — and already executed before raising."
                    </p>
                  </div>
                </div>
              </div>

              {/* Three Pillars of Unfair Advantage */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Technical Background */}
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl p-4 border-2 border-blue-500/40">
                  <div className="text-4xl mb-3 text-center">⚙️</div>
                  <h4 className="text-lg font-bold text-blue-400 mb-3 text-center">Can BUILD</h4>
                  <div className="space-y-2 text-xs sm:text-sm text-gray-300">
                    <p className="flex items-start gap-2">
                      <span className="text-blue-400 flex-shrink-0">✓</span>
                      <span><strong>Ex-CTO</strong> of cybersecurity firm</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-blue-400 flex-shrink-0">✓</span>
                      <span>Built Nuqta MVP <strong>in-house</strong></span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-blue-400 flex-shrink-0">✓</span>
                      <span>Product is <strong>30 days from launch</strong></span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-blue-400 flex-shrink-0">✓</span>
                      <span>Can iterate based on user feedback</span>
                    </p>
                  </div>
                </div>

                {/* Marketing Expertise */}
                <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl p-4 border-2 border-green-500/40">
                  <div className="text-4xl mb-3 text-center">📈</div>
                  <h4 className="text-lg font-bold text-green-400 mb-3 text-center">Can GROW</h4>
                  <div className="space-y-2 text-xs sm:text-sm text-gray-300">
                    <p className="flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span><strong>7 years</strong> growth marketing experience</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span><strong>AED 2M+</strong> spent on Meta ads</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span>Proven CAC optimization expertise</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span>Can scale user acquisition from Day 1</span>
                    </p>
                  </div>
                </div>

                {/* UAE Network */}
                <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl p-4 border-2 border-[#c9a227]/40">
                  <div className="text-4xl mb-3 text-center">🤝</div>
                  <h4 className="text-lg font-bold text-[#c9a227] mb-3 text-center">Can ACTIVATE</h4>
                  <div className="space-y-2 text-xs sm:text-sm text-gray-300">
                    <p className="flex items-start gap-2">
                      <span className="text-[#c9a227] flex-shrink-0">✓</span>
                      <span><strong>Founder & CEO</strong> of marketing agency</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#c9a227] flex-shrink-0">✓</span>
                      <span><strong>50+ UAE clients</strong> across F&B, fashion, retail</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#c9a227] flex-shrink-0">✓</span>
                      <span>Direct relationships with brand owners</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#c9a227] flex-shrink-0">✓</span>
                      <span>Can onboard merchants faster than anyone</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Pre-Launch Execution */}
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-xl p-4 border-2 border-purple-500/40 mb-6">
                <h4 className="text-lg font-bold text-purple-400 mb-3 text-center">✅ Already Executed (Pre-Raise)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl sm:text-4xl font-black text-purple-400 mb-1">95%</p>
                    <p className="text-xs sm:text-sm text-gray-300">Product Complete</p>
                    <p className="text-xs text-gray-500">(30 days to launch)</p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-black text-purple-400 mb-1">30</p>
                    <p className="text-xs sm:text-sm text-gray-300">Signed Contracts</p>
                    <p className="text-xs text-gray-500">(legal commitment, not MOUs)</p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-black text-purple-400 mb-1">0</p>
                    <p className="text-xs sm:text-sm text-gray-300">Capital Raised</p>
                    <p className="text-xs text-gray-500">(bootstrapped to here)</p>
                  </div>
                </div>
              </div>

              {/* Bottom Line */}
              <div className="bg-[#1a2a42]/50 rounded-xl p-4 border border-[#c9a227]/30">
                <p className="text-center text-sm sm:text-base text-gray-300">
                  <span className="text-[#c9a227] font-bold">Bottom Line:</span> Most founders have 1 of these skills. Rejaul has all 3 + already de-risked 80% of execution before raising.
                  <br/><span className="text-white font-semibold">This is a "founder-market fit" home run.</span>
                </p>
              </div>

              {/* Core Team Already In Place */}
              <div className="mt-6">
                <p className="text-sm text-[#c9a227] text-center mb-3 font-bold">✅ Full C-Suite Team (Already In Place):</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-lg p-3 border-2 border-[#c9a227]/40 text-center">
                    <p className="text-sm font-bold text-[#c9a227]">CEO</p>
                    <p className="text-xs text-white font-semibold">Rejaul Karim</p>
                    <p className="text-xs text-gray-400">Founder & Vision</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-lg p-3 border-2 border-emerald-500/40 text-center">
                    <p className="text-sm font-bold text-emerald-400">CTO</p>
                    <p className="text-xs text-white font-semibold">Deep Tednu Kuri</p>
                    <p className="text-xs text-gray-400">Tech & Product</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-lg p-3 border-2 border-purple-500/40 text-center">
                    <p className="text-sm font-bold text-purple-400">CMO</p>
                    <p className="text-xs text-white font-semibold">Sarbajit Bhatacharjee</p>
                    <p className="text-xs text-gray-400">Marketing & Growth</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-lg p-3 border-2 border-blue-500/40 text-center">
                    <p className="text-sm font-bold text-blue-400">COO</p>
                    <p className="text-xs text-white font-semibold">Gyandeep Bordoloi</p>
                    <p className="text-xs text-gray-400">Operations & Scale</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/5 rounded-lg p-3 border-2 border-pink-500/40 text-center">
                    <p className="text-sm font-bold text-pink-400">CHRO</p>
                    <p className="text-xs text-white font-semibold">Filled</p>
                    <p className="text-xs text-gray-400">People & Culture</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-lg p-3 border-2 border-orange-500/40 text-center">
                    <p className="text-sm font-bold text-orange-400">+3 More</p>
                    <p className="text-xs text-white font-semibold">Dev, BDA, Design</p>
                    <p className="text-xs text-gray-400">Core Team</p>
                  </div>
                </div>
                <p className="text-center text-xs text-gray-400 mt-3">
                  <span className="text-[#c9a227] font-bold">5/5 C-Suite Filled.</span> 8-member team ready for March 1, 2026 launch.
                </p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 17: USE OF FUNDS (NEW PIE CHART) ====================
      case 17:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Fund Deployment</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Use of Funds: <span className="text-[#c9a227]">$400K</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 max-w-5xl w-full items-center">
              {/* Pie Chart Visualization (Simplified) */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {/* Product 40% */}
                  <div className="bg-gradient-to-br from-blue-500/30 to-blue-500/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-blue-500/50 aspect-square flex flex-col items-center justify-center">
                    <p className="text-4xl sm:text-5xl mb-3">🔧</p>
                    <p className="text-3xl sm:text-4xl font-black text-blue-400 mb-2">40%</p>
                    <p className="text-sm sm:text-base font-bold mb-1">Product/MVP</p>
                    <p className="text-[#c9a227] font-bold text-xl sm:text-2xl">$160K</p>
                  </div>

                  {/* BD 30% */}
                  <div className="bg-gradient-to-br from-green-500/30 to-green-500/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-green-500/50 aspect-square flex flex-col items-center justify-center">
                    <p className="text-4xl sm:text-5xl mb-3">🤝</p>
                    <p className="text-3xl sm:text-4xl font-black text-green-400 mb-2">30%</p>
                    <p className="text-sm sm:text-base font-bold mb-1">Merchant BD</p>
                    <p className="text-[#c9a227] font-bold text-xl sm:text-2xl">$120K</p>
                  </div>

                  {/* Team 20% */}
                  <div className="bg-gradient-to-br from-purple-500/30 to-purple-500/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-purple-500/50 aspect-square flex flex-col items-center justify-center">
                    <p className="text-4xl sm:text-5xl mb-3">👥</p>
                    <p className="text-3xl sm:text-4xl font-black text-purple-400 mb-2">20%</p>
                    <p className="text-sm sm:text-base font-bold mb-1">Team</p>
                    <p className="text-[#c9a227] font-bold text-xl sm:text-2xl">$80K</p>
                  </div>

                  {/* Operations 10% */}
                  <div className="bg-gradient-to-br from-[#c9a227]/30 to-[#c9a227]/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-[#c9a227]/50 aspect-square flex flex-col items-center justify-center">
                    <p className="text-4xl sm:text-5xl mb-3">⚙️</p>
                    <p className="text-3xl sm:text-4xl font-black text-[#c9a227] mb-2">10%</p>
                    <p className="text-sm sm:text-base font-bold mb-1">Operations</p>
                    <p className="text-white font-bold text-xl sm:text-2xl">$40K</p>
                  </div>
                </div>
              </div>

              {/* Breakdown Details */}
              <div className="space-y-4">
                <div className="bg-blue-500/10 rounded-xl p-4 border-2 border-blue-500/30">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔧</span>
                    <div className="flex-1">
                      <p className="font-bold text-base sm:text-lg mb-1">Product/MVP Development ($160K)</p>
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
                      <p className="font-bold text-base sm:text-lg mb-1">Merchant Acquisition ($120K)</p>
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
                      <p className="font-bold text-base sm:text-lg mb-1">Team Expansion ($80K)</p>
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
                      <p className="font-bold text-base sm:text-lg mb-1">Operations/Legal ($40K)</p>
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
                  <p className="text-green-400 font-bold mb-1">March 1, 2026</p>
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

      // ==================== SLIDE 18: MILESTONES FOR NEXT ROUND (NEW) ====================
      case 18:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2">Success Metrics</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Path to <span className="text-[#c9a227]">Seed Round</span>
            </h2>

            <div className="max-w-4xl w-full mb-6">
              <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-[#c9a227]/40 mb-6 text-center">
                <p className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                  Seed Round Target: <span className="text-[#c9a227]">$2M at $15-20M valuation</span>
                </p>
                <p className="text-xs sm:text-sm text-gray-400">When we hit these milestones (18 months)</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {/* Product Milestones */}
                <div className="bg-blue-500/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-blue-500/40">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    Product Milestones
                  </h3>
                  <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
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
                <div className="bg-green-500/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-green-500/40">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-2xl">📈</span>
                    Traction Milestones
                  </h3>
                  <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
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
                      <span className="text-gray-300"><strong className="text-white">$400K+</strong> monthly GMV (annualized $6M+)</span>
                    </li>
                  </ul>
                </div>

                {/* Unit Economics Validation */}
                <div className="bg-purple-500/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-purple-500/40">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-2xl">💰</span>
                    Unit Economics Validation
                  </h3>
                  <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span className="text-gray-300">CAC &lt; AED 35 validated with real data</span>
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
                <div className="bg-[#c9a227]/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-[#c9a227]/40">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    Proof of Concept
                  </h3>
                  <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
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
                <br/><span className="text-white font-semibold">$400K gets you in early</span> before we prove these metrics and raise at 3-4x valuation
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 19: CLOSING / CONTACT ====================
      case 19:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 bg-gradient-to-b from-[#0a1628] via-[#0d1c30] to-[#0a1628]">
            {/* Logo */}
            <div className="relative mb-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden relative">
                <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain p-3 sm:p-4" priority />
              </div>
              <div className="absolute -inset-6 sm:-inset-8 bg-[#c9a227]/20 rounded-full blur-3xl -z-10" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
              <span className="text-[#c9a227]">Nuqta</span> نقطة
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl mb-8 leading-relaxed">
              Making every purchase <span className="text-[#c9a227] font-semibold">rewarding</span>,
              <br className="hidden sm:block"/>
              one transaction at a time.
            </p>

            {/* Contact Info */}
            <div className="bg-[#1a2a42]/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl w-full border border-[#c9a227]/30 mb-6">
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
              Pre-Seed Round • $400K at $5M cap • 20% discount • March 1, 2026 Launch
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
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs sm:text-sm text-gray-700 hidden md:block">
        ← → to navigate • ESC to close
      </div>
    </div>
  );
}
