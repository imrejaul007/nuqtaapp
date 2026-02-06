'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Brain, Wallet, Smartphone, Store, User, Gem, RotateCw, Search, Zap, BarChart3, Building2, Lightbulb, Building, FileText, Scale, CreditCard, Star, Target, Handshake, ClipboardList, Laptop } from 'lucide-react';

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
  const totalSlides = 24;

  // Section definitions for progress indicator
  const sections = [
    { name: 'Intro', slides: [0, 1], color: '#c9a227' },
    { name: 'Problem', slides: [2, 3, 4, 5], color: '#ef4444' },
    { name: 'Solution', slides: [6, 7, 8, 9, 10, 11], color: '#22c55e' },
    { name: 'Market', slides: [12, 13, 14, 15], color: '#3b82f6' },
    { name: 'Business', slides: [16, 17, 18], color: '#8b5cf6' },
    { name: 'Execution', slides: [19, 20, 21], color: '#f59e0b' },
    { name: 'Ask', slides: [22, 23], color: '#c9a227' },
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
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
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
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light max-w-xs sm:max-w-md md:max-w-xl mb-4 sm:mb-6 md:mb-12">
              5-10% Cashback + Smart Payment Tips for the GCC
            </p>

            {/* Key Metrics Bar */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-16">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#c9a227]">$400K</p>
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
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4 md:mb-6">At a Glance</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-12 text-center">Key Metrics Dashboard</h2>

            {/* Top Row - Most Important Metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl w-full mb-4 sm:mb-6">
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-[#c9a227]/40 text-center hover:scale-105 transition-transform">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#c9a227] mb-1 sm:mb-2">$400K</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-400 font-medium">Raising</div>
                <div className="text-[10px] sm:text-xs text-gray-600 mt-1">Pre-Seed Round</div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-blue-500/40 text-center hover:scale-105 transition-transform">
                <DataPoint
                  value="$4B"
                  source="GCC dining & retail spending, industry reports 2024"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-blue-400 mb-1 sm:mb-2"
                />
                <div className="text-xs sm:text-sm md:text-base text-gray-400 font-medium">TAM</div>
                <div className="text-[10px] sm:text-xs text-gray-600 mt-1">GCC Addressable</div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-purple-500/40 text-center hover:scale-105 transition-transform">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-purple-400 mb-1 sm:mb-2">18-24mo</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-400 font-medium">Runway</div>
                <div className="text-[10px] sm:text-xs text-gray-600 mt-1">With $400K</div>
              </div>
            </div>

            {/* Bottom Row - Supporting Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl w-full">
              <div className="bg-[#1a2a42]/50 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 border border-[#2a3a52] text-center hover:border-[#c9a227]/50 transition-colors">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">$5M</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Valuation Cap</div>
              </div>

              <div className="bg-[#1a2a42]/50 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 border border-[#2a3a52] text-center hover:border-[#c9a227]/50 transition-colors">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400 mb-1">70%+</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Gross Margin</div>
              </div>

              <div className="bg-[#1a2a42]/50 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 border border-[#2a3a52] text-center hover:border-[#c9a227]/50 transition-colors">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#c9a227] mb-1">CCD</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Instrument</div>
              </div>

              <div className="bg-[#1a2a42]/50 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 border border-[#2a3a52] text-center hover:border-[#c9a227]/50 transition-colors">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400 mb-1">Pre-Seed</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Stage</div>
              </div>
            </div>

            {/* Bottom Highlight - CASHBACK HERO */}
            <div className="mt-6 sm:mt-8 bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#c9a227]/20 max-w-3xl">
              <p className="text-xs sm:text-sm md:text-base text-center text-gray-300">
                <span className="text-[#c9a227] font-bold">Get paid to shop:</span> Users earn <span className="text-white font-semibold">5% cashback guaranteed</span> (+5% bonus for social sharing). Merchants pay only for <span className="text-white font-semibold">real sales</span> (15% commission).
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 3: THE PROBLEM (Hook) ====================
      case 2:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4 md:mb-6">The Problem</p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black leading-tight mb-4 sm:mb-6 md:mb-12">
              You <span className="text-[#c9a227]">spend</span>.
              <br />
              You <span className="text-red-500">don&apos;t get paid</span>.
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl">
              GCC consumers spend $150B+ annually on dining and retail.
              <br className="hidden sm:block" />
              <span className="text-red-400 font-bold">Most earn 0-3% cashback. Nuqta offers 5% guaranteed + 5% social bonus.</span>
            </p>
          </div>
        );

      // ==================== SLIDE 3: PROBLEM STAT 1 ====================
      case 3:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-red-400 text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4 md:mb-6">User Pain</p>

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
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-red-400 text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4 md:mb-6">Fragmentation</p>

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
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-red-400 text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4 md:mb-6">Merchant Pain</p>

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
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">The Solution</p>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-black leading-tight mb-4 sm:mb-6">
              Nuqta <span className="text-[#c9a227]">pays you</span> to shop.
            </h2>

            <div className="bg-[#1a2a42]/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 max-w-2xl border border-[#c9a227]/30 mb-3 sm:mb-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#c9a227] mb-4 sm:mb-6">
                5% guaranteed + 5% social bonus
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center">
                  <div className="text-[#c9a227] flex justify-center mb-1 sm:mb-2"><Brain className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /></div>
                  <p className="text-white font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">Smart Pay</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs">Best card/wallet</p>
                </div>
                <div className="text-center">
                  <div className="text-[#c9a227] flex justify-center mb-1 sm:mb-2"><Wallet className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /></div>
                  <p className="text-white font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">Base Cashback</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs">5% always</p>
                </div>
                <div className="text-center">
                  <div className="text-[#c9a227] flex justify-center mb-1 sm:mb-2"><Smartphone className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /></div>
                  <p className="text-white font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">Social Bonus</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs">+5% extra</p>
                </div>
                <div className="text-center">
                  <div className="text-[#c9a227] flex justify-center mb-1 sm:mb-2"><Store className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /></div>
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

      // ==================== SLIDE 7: WHAT IS NUQTA ====================
      case 7:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4 md:mb-6">Platform Definition</p>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-12">
              What is <span className="text-[#c9a227]">Nuqta</span>?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl mb-4 sm:mb-6 md:mb-12">
              <div className="text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 bg-[#c9a227]/20 rounded-2xl flex items-center justify-center">
                  <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-[#c9a227]" />
                </div>
                <p className="text-xl sm:text-2xl font-bold mb-2">Intelligence</p>
                <p className="text-gray-400 text-sm">Best payment method for every purchase</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 bg-[#c9a227]/20 rounded-2xl flex items-center justify-center">
                  <Wallet className="w-10 h-10 sm:w-12 sm:h-12 text-[#c9a227]" />
                </div>
                <p className="text-xl sm:text-2xl font-bold mb-2">Cashback</p>
                <p className="text-gray-400 text-sm">5-10% back instantly</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 bg-[#c9a227]/20 rounded-2xl flex items-center justify-center">
                  <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-[#c9a227]" />
                </div>
                <p className="text-xl sm:text-2xl font-bold mb-2">Social Rewards</p>
                <p className="text-gray-400 text-sm">2x bonus for sharing</p>
              </div>
            </div>

            {/* Simplified How It Works */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl border-2 border-[#c9a227]/40 mb-4 sm:mb-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                <span className="text-[#c9a227] font-bold">Smart Pay Advisor</span> analyzes your cards, wallets & BNPL options, then tells you the <span className="text-white font-semibold">best way to pay</span> before every purchase.
              </p>
            </div>

            {/* Bank Partnership Strategy */}
            <div className="bg-[#1a2a42]/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-2xl border border-[#2a3a52]">
              <p className="text-sm sm:text-base text-gray-400 text-center">
                <span className="text-white font-semibold">Partnering with all GCC banks</span> to provide users with unified payment intelligence and universal cashback across every card, wallet, and BNPL provider.
              </p>
            </div>

            <p className="mt-6 sm:mt-8 text-sm sm:text-base text-gray-500 italic">
              &quot;نقطة&quot; means &quot;point&quot; in Arabic — the starting point of every payment.
            </p>
          </div>
        );

      // ==================== SLIDE 8: HOW WE MAKE MONEY ====================
      case 8:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">Transaction Economics</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">How We Make Money</h2>

            {/* The Math */}
            <div className="bg-[#1a2a42]/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 max-w-3xl border border-[#c9a227]/30 mb-3 sm:mb-4">
              <div className="grid gap-2 sm:gap-3">
                <div className="flex justify-between items-center pb-2 border-b border-[#2a3a52]">
                  <span className="text-gray-400 text-xs sm:text-sm">Merchant pays Nuqta</span>
                  <span className="text-xl sm:text-2xl font-bold text-white">15%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#2a3a52]">
                  <span className="text-gray-400 text-xs sm:text-sm">User gets (base cashback)</span>
                  <span className="text-xl sm:text-2xl font-bold text-[#c9a227]">5%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#2a3a52]">
                  <span className="text-gray-400 text-xs sm:text-sm">Social sharing bonus</span>
                  <span className="text-xl sm:text-2xl font-bold text-green-400">+5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs sm:text-sm">Nuqta margin (if user shares)</span>
                  <span className="text-xl sm:text-2xl font-bold text-blue-400">5%</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t-2 border-[#c9a227]/30">
                  <span className="text-white font-bold text-xs sm:text-sm">Nuqta margin (if user doesn't share)</span>
                  <span className="text-xl sm:text-2xl font-bold text-green-400">10%</span>
                </div>
              </div>
            </div>

            {/* Example Transaction */}
            <div className="max-w-3xl w-full">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-center">Example: AED 100 Restaurant Bill</h3>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="bg-[#1a2a42]/50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-[#c9a227]/20 text-center">
                  <div className="flex justify-center mb-1 sm:mb-2"><Store className="w-6 h-6 sm:w-8 sm:h-8 text-[#c9a227]" /></div>
                  <p className="text-gray-400 text-[10px] sm:text-xs mb-1">Merchant Pays</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">AED 15</p>
                  <p className="text-[9px] sm:text-[10px] text-gray-600 mt-0.5">(15% commission)</p>
                </div>
                <div className="bg-[#1a2a42]/50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-[#c9a227]/20 text-center">
                  <div className="flex justify-center mb-1 sm:mb-2"><User className="w-6 h-6 sm:w-8 sm:h-8 text-[#c9a227]" /></div>
                  <p className="text-gray-400 text-[10px] sm:text-xs mb-1">User Gets</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#c9a227]">AED 5-10</p>
                  <p className="text-[9px] sm:text-[10px] text-gray-600 mt-0.5">(+5% if shared)</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border-2 border-green-500/40 text-center">
                  <div className="flex justify-center mb-1 sm:mb-2"><Gem className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" /></div>
                  <p className="text-gray-400 text-[10px] sm:text-xs mb-1">Nuqta Profit</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">AED 5-10</p>
                  <p className="text-[9px] sm:text-[10px] text-gray-600 mt-0.5">(5-10% margin)</p>
                </div>
              </div>
            </div>

            {/* Why It Works */}
            <div className="mt-3 sm:mt-4 max-w-2xl text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                <span className="text-white font-bold">Win-win-win:</span> Merchants get guaranteed customers at fixed 15% cost, users always get 5% (10% if they share), Nuqta earns <span className="text-[#c9a227] font-semibold">33-66% gross margins</span> with no inventory, no logistics.
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 9: HOW IT WORKS ====================
      case 9:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4 md:mb-6">User Journey</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-12 text-center">How It Works</h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-6xl w-full">
              {[
                { num: '1', icon: Search, title: 'Discover', desc: 'Find merchants & browse offers' },
                { num: '2', icon: Brain, title: 'Smart Pay', desc: 'Get payment recommendation' },
                { num: '3', icon: Wallet, title: 'Earn Cashback', desc: '5% back instantly' },
                { num: '4', icon: Smartphone, title: 'Share', desc: 'Post to social, earn +5%' },
                { num: '5', icon: RotateCw, title: 'Repeat', desc: 'Redeem anywhere, come back' },
              ].map((step, idx) => {
                const IconComponent = step.icon;
                return (
                <div key={idx} className="text-center relative">
                  <div className="relative inline-block mb-2 sm:mb-3">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#c9a227] to-[#a88a1e] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-[#c9a227]/20">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-[#0a1628]" />
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
              );
              })}
            </div>

            {/* Social Sharing Growth Loop */}
            <div className="mt-6 sm:mt-8 md:mt-12 bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-3xl border-l-4 border-[#c9a227]">
              <p className="text-sm md:text-base text-gray-300 text-center">
                <span className="text-[#c9a227] font-bold">Viral growth loop:</span> Every shared purchase = free marketing. Users earn +5% bonus (10% total), merchants get social proof, Nuqta grows organically.
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 9: USER VALUE ====================
      case 10:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4 md:mb-6">For Users</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-12 text-center">
              Save money on <span className="text-[#c9a227]">every</span> purchase
            </h2>

            <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-3xl">
              {[
                { icon: CreditCard, title: 'Smart Pay Advisor', stat: 'Save 5-15%', desc: 'per transaction' },
                { icon: Wallet, title: 'Instant Cashback', stat: '5-10% back', desc: 'every purchase' },
                { icon: Smartphone, title: 'Social Rewards', stat: '2x bonus', desc: 'share & earn' },
                { icon: Star, title: 'Universal Points', stat: 'Redeem anywhere', desc: 'one currency' },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                <div key={idx} className="bg-[#1a2a42]/50 backdrop-blur rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#2a3a52] hover:border-[#c9a227]/50 transition-all">
                  <div className="mb-3 sm:mb-4"><IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-[#c9a227]" /></div>
                  <h3 className="font-bold text-base sm:text-lg mb-1">{item.title}</h3>
                  <p className="text-[#c9a227] font-bold text-lg sm:text-xl">{item.stat}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">{item.desc}</p>
                </div>
              );
              })}
            </div>
          </div>
        );

      // ==================== SLIDE 10: MERCHANT VALUE ====================
      case 11:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4 md:mb-6">For Merchants</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-12 text-center">
              Own your <span className="text-[#c9a227]">customers</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl">
              {[
                { icon: Smartphone, title: 'QR Loyalty', desc: 'No POS integration needed' },
                { icon: BarChart3, title: 'Real Analytics', desc: 'Know your customers' },
                { icon: Wallet, title: 'Pay for Results', desc: 'No monthly fees' },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-[#1a2a42] rounded-xl sm:rounded-2xl flex items-center justify-center border border-[#2a3a52]">
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-[#c9a227]" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              );
              })}
            </div>

            <div className="mt-6 sm:mt-8 md:mt-12 bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-[#c9a227]">
              <p className="text-lg">Unlike aggregators, merchants <span className="text-white font-bold">keep their customer relationships</span>.</p>
            </div>
          </div>
        );

      // ==================== SLIDE 11: DIFFERENTIATION ====================
      case 12:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4 md:mb-6">Why Different</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-12 text-center">
              Cashback + Intelligence = <span className="text-[#c9a227]">Better Value</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-4xl w-full">
              <div className="bg-red-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-red-500/30">
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

              <div className="bg-[#c9a227]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#c9a227]/30">
                <p className="text-[#c9a227] font-bold text-lg mb-6">Nuqta → Maximum Value</p>
                <div className="space-y-4">
                  {[
                    '5% guaranteed + 5% social bonus',
                    'Smart payment layer across all banks',
                    'Works everywhere: online + offline',
                    'Universal loyalty currency',
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
                <span className="text-[#c9a227] font-bold">The Nuqta difference:</span> We're the <span className="text-white font-semibold">smart payment layer</span> that sits on top of ALL banks, cards, and wallets. Users earn cashback on <span className="text-white font-semibold">every transaction</span> (online + offline) through one universal app. Banks become our partners, not competitors.
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 13: MARKET SIZE ====================
      case 14:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4 md:mb-6">Market Opportunity</p>

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

      // ==================== SLIDE 15: WHY NOW ====================
      case 15:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">Timing & Momentum</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Why <span className="text-[#c9a227]">Now</span>?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 max-w-4xl w-full mb-3 sm:mb-4">
              {[
                {
                  icon: Smartphone,
                  title: 'Digital Payment Explosion',
                  stat: '86%',
                  desc: 'UAE digital payment adoption in 2024 (up from 60% in 2020)',
                  source: 'Visa Back to Business Study 2024 & CBUAE Reports'
                },
                {
                  icon: CreditCard,
                  title: 'BNPL Boom',
                  stat: '$6.5B',
                  desc: 'MENA BNPL market size by 2028 (23% CAGR)',
                  source: 'Research and Markets - MENA BNPL Report 2024'
                },
                {
                  icon: Building2,
                  title: 'Open Banking Coming',
                  stat: '2025-26',
                  desc: 'UAE open banking framework rollout underway',
                  source: 'CBUAE Financial Infrastructure Transformation Programme'
                },
                {
                  icon: Target,
                  title: 'Rewards Gap',
                  stat: '5-10%',
                  desc: 'Cashback rates consumers expect (vs 1-3% banks offer)',
                  source: 'GCC consumer fintech adoption survey 2024'
                },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                <div key={idx} className="bg-[#1a2a42]/50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-[#2a3a52] hover:border-[#c9a227]/50 transition-colors">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="flex-shrink-0"><IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-[#c9a227]" /></div>
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
              );
              })}
            </div>

            {/* Key Insight */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-[#c9a227]/40 max-w-3xl">
              <p className="text-center text-xs sm:text-sm text-gray-300">
                <span className="text-[#c9a227] font-bold">The perfect storm:</span> Payment infrastructure is ready, consumers expect more value, and merchants need alternatives to 25-30% aggregator fees. <span className="text-white font-semibold">This is the moment to build payment intelligence for the GCC.</span>
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 16: BUSINESS MODEL ====================
      case 16:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4 md:mb-6">Business Model</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-12 text-center">
              High-margin, <span className="text-[#c9a227]">asset-light</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl w-full mb-4 sm:mb-6">
              {[
                { pct: '60%', title: 'Transaction Cashback', desc: '5% spread per sale', highlight: true },
                { pct: '20%', title: 'Promoted Listings', desc: 'Merchant advertising' },
                { pct: '15%', title: 'BNPL Partnerships', desc: 'Referral fees' },
                { pct: '5%', title: 'Premium Analytics', desc: 'Merchant SaaS' },
              ].map((item, idx) => (
                <div key={idx} className={`bg-[#1a2a42]/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border ${item.highlight ? 'border-[#c9a227] shadow-lg shadow-[#c9a227]/20' : 'border-[#2a3a52]'}`}>
                  <p className="text-3xl sm:text-4xl font-black text-[#c9a227] mb-2">{item.pct}</p>
                  <p className="font-bold text-sm sm:text-base mb-1">{item.title}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-3xl border-l-4 border-[#c9a227]">
              <p className="text-lg">
                <span className="text-[#c9a227] font-bold">Transaction-based revenue:</span> Merchants pay 15% per sale, users get 5-10% cashback, Nuqta keeps 5-10% margin. <span className="text-white font-semibold">33-66% gross margins. No inventory, no logistics.</span>
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 17: UNIT ECONOMICS ====================
      case 17:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">Unit Economics</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-center">Target Metrics</h2>
            <p className="text-gray-500 text-[10px] sm:text-xs mb-4 sm:mb-6">(Pre-launch estimates)</p>

            {/* Main Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl w-full mb-6">
              {/* ARPU Card */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-[#c9a227] text-center">
                <div className="mb-3">
                  <DataPoint
                    value="$7-14"
                    source="5 txns × $27/txn × 5-10% margin"
                    className="text-4xl sm:text-5xl md:text-6xl font-black text-[#c9a227]"
                  />
                </div>
                <p className="text-base sm:text-lg font-bold text-white mb-1">ARPU</p>
                <p className="text-gray-400 text-xs sm:text-sm">Monthly profit per user</p>
              </div>

              {/* Gross Margin Card */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-green-500 text-center">
                <div className="mb-3">
                  <DataPoint
                    value="33-66%"
                    source="15% commission - (5-10%) cashback = 5-10% margin"
                    className="text-4xl sm:text-5xl md:text-6xl font-black text-green-400"
                  />
                </div>
                <p className="text-base sm:text-lg font-bold text-white mb-1">Gross Margin</p>
                <p className="text-gray-400 text-xs sm:text-sm">Asset-light model</p>
              </div>

              {/* CAC Payback Card */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-blue-500 text-center">
                <div className="mb-3">
                  <DataPoint
                    value="2-4mo"
                    source="AED 35 CAC ÷ AED 9-18 monthly profit"
                    className="text-4xl sm:text-5xl md:text-6xl font-black text-blue-400"
                  />
                </div>
                <p className="text-base sm:text-lg font-bold text-white mb-1">CAC Payback</p>
                <p className="text-gray-400 text-xs sm:text-sm">Fast recovery</p>
              </div>
            </div>

            {/* Breakdown Section */}
            <div className="bg-[#1a2a42]/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-3xl w-full border border-[#2a3a52]">
              <h3 className="text-center text-sm sm:text-base font-bold text-[#c9a227] mb-3 sm:mb-4">How It Works</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-white mb-1">AED 35</p>
                  <p className="text-xs text-gray-400">Customer Acquisition Cost</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#c9a227] mb-1">AED 175</p>
                  <p className="text-xs text-gray-400">Monthly GMV (5 × AED 35)</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">AED 9-18</p>
                  <p className="text-xs text-gray-400">Monthly Profit</p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 18: TRACTION ====================
      case 18:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4 md:mb-6">Current Status</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 text-center">Pre-Launch Momentum</h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-12 text-center max-w-2xl px-2">
              Building MVP, validating demand, securing partnerships. No vanity metrics — just honest progress.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-3xl w-full mb-4 sm:mb-6">
              {[
                { icon: Handshake, title: 'D2C Brand MOUs', status: '32 signed', highlight: true, desc: 'Ready to onboard post-MVP launch' },
                { icon: ClipboardList, title: 'Waitlist Users', status: '200+', highlight: false, desc: 'Organic signups' },
                { icon: Building2, title: 'Bank Partnerships', status: 'In discussion', highlight: false, desc: 'Targeting all GCC banks' },
                { icon: Laptop, title: 'MVP Status', status: 'In development', highlight: false, desc: 'Q2 2026 launch target' },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                <div key={idx} className={`rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border flex items-start gap-2 sm:gap-3 md:gap-4 ${
                  item.highlight
                    ? 'bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 border-[#c9a227] shadow-lg shadow-[#c9a227]/10'
                    : 'bg-[#1a2a42]/50 border-[#2a3a52]'
                }`}>
                  <div className="flex-shrink-0"><IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ${item.highlight ? 'text-[#c9a227]' : 'text-gray-400'}`} /></div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-sm sm:text-base">{item.title}</p>
                    <p className={`text-xs sm:text-sm md:text-base font-bold ${item.highlight ? 'text-[#c9a227]' : 'text-[#c9a227]'}`}>{item.status}</p>
                    <p className="text-gray-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{item.desc}</p>
                  </div>
                </div>
              );
              })}
            </div>

            {/* Partnership Pipeline */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-transparent rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-[#c9a227] max-w-3xl w-full">
              <p className="text-xs sm:text-sm md:text-base text-gray-300 text-center">
                <span className="text-[#c9a227] font-bold">Partnership pipeline:</span> Preparing to onboard BNPL providers (Tabby, Postpay), payment gateways, logistics partners, and regional banks. Foundation is being built for rapid scale.
              </p>
            </div>

            <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-center">
              Focus: <span className="text-[#c9a227] font-bold">Real partnerships & repeat usage</span>, not downloads.
            </p>
          </div>
        );

      // ==================== SLIDE 19: ROADMAP ====================
      case 19:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4 md:mb-6">Execution Plan</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-12 text-center">Roadmap</h2>

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

      // ==================== SLIDE 20: TEAM ====================
      case 20:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4 md:mb-6">Leadership</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-12 text-center">The Team</h2>

            <div className="bg-[#1a2a42]/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 border border-[#c9a227]/30 max-w-2xl w-full">
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

      // ==================== SLIDE 21: GOVERNANCE ====================
      case 21:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4 md:mb-6">Investor Protection</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-12 text-center">
              Trust via <span className="text-[#c9a227]">structure</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl w-full">
              {[
                { icon: Building, title: 'Stable Jurisdiction', desc: 'Delaware or ADGM incorporation' },
                { icon: Lightbulb, title: 'IP Owned by Company', desc: 'All code, trademarks, trade secrets' },
                { icon: Building2, title: 'Fund Controls', desc: 'Proper corporate accounts' },
                { icon: FileText, title: 'Founder Vesting', desc: '4-year vesting with cliff' },
                { icon: BarChart3, title: 'Regular Reporting', desc: 'Monthly updates to investors' },
                { icon: Scale, title: 'Board Governance', desc: 'Investor representation' },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-2 sm:mb-3"><IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-[#c9a227]" /></div>
                  <p className="font-bold text-sm sm:text-base mb-1">{item.title}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">{item.desc}</p>
                </div>
              );
              })}
            </div>
          </div>
        );

      // ==================== SLIDE 22: THE ASK ====================
      case 22:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4 md:mb-6">The Ask</p>

            <p className="text-[100px] md:text-[140px] lg:text-[180px] font-black text-[#c9a227] leading-none">
              $400K
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
                  { pct: '50%', label: 'Team & Product', desc: 'Hire CTO + engineers, build MVP', amount: '$200K' },
                  { pct: '30%', label: 'Merchant Acquisition', desc: '100 merchants, field sales', amount: '$120K' },
                  { pct: '15%', label: 'User Acquisition', desc: '1,000 active users, marketing', amount: '$60K' },
                  { pct: '5%', label: 'Operations', desc: 'Legal, accounting, infra', amount: '$20K' },
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

      // ==================== SLIDE 23: CLOSING ====================
      case 23:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
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
                href="mailto:rejaul@nuqtapp.com"
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
            <p className="text-gray-500">rejaul@nuqtapp.com</p>

            <div className="flex items-center gap-8 mt-12 text-gray-600 text-sm">
              <span>$400K Pre-Seed</span>
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

      {/* Slide Content - Fixed container with consistent height constraints */}
      <div className="h-full pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 overflow-hidden">
        <div className="w-full h-full max-h-[calc(100vh-14rem)] overflow-y-auto overflow-x-hidden">
          <div className="min-h-full flex items-center justify-center">
            {renderSlide()}
          </div>
        </div>
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
