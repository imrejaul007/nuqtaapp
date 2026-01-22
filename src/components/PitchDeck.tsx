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
      className={`relative cursor-help inline-block ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onTouchStart={() => setShowTooltip(true)}
      onTouchEnd={() => setTimeout(() => setShowTooltip(false), 2000)}
    >
      <span className="border-b border-dashed border-current">{value}</span>
      {showTooltip && (
        <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[#0a1628] border border-[#c9a227]/50 rounded-lg text-xs text-gray-300 whitespace-nowrap shadow-xl">
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
  const totalSlides = 20;

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
              Smart Rewards & Payment Intelligence for the GCC
            </p>

            {/* Key Metrics Bar */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-16">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#c9a227]">$500K</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-wider">Raising</p>
              </div>
              <div className="w-px h-8 sm:h-10 md:h-12 bg-gray-700 hidden sm:block" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">$3M-$10M</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-wider">Valuation</p>
              </div>
              <div className="w-px h-8 sm:h-10 md:h-12 bg-gray-700 hidden sm:block" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">CCD</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-wider">Instrument</p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 2: THE PROBLEM (Hook) ====================
      case 1:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 md:mb-8">The Problem</p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black leading-tight mb-4 sm:mb-6 md:mb-8">
              Spending is <span className="text-[#c9a227]">digital</span>.
              <br />
              Rewards are <span className="text-red-500">broken</span>.
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl">
              Fragmented loyalty programs. Zero intelligence on how to pay.
              Billions in uncaptured value.
            </p>
          </div>
        );

      // ==================== SLIDE 3: PROBLEM STAT 1 ====================
      case 2:
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
      case 3:
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
      case 4:
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
      case 5:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-8">
            <p className="text-[#c9a227] text-lg uppercase tracking-[0.3em] mb-8">The Solution</p>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">
              Nuqta <span className="text-[#c9a227]">fixes this</span>.
            </h2>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
              One app that tells you the <span className="text-white font-semibold">smartest way to pay</span>,
              <br />earns you <span className="text-white font-semibold">universal rewards everywhere</span>,
              <br />and gives merchants <span className="text-white font-semibold">real loyalty tools</span>.
            </p>
          </div>
        );

      // ==================== SLIDE 7: WHAT IS NUQTA ====================
      case 6:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-8">
            <p className="text-[#c9a227] text-lg uppercase tracking-[0.3em] mb-8">Platform Definition</p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
              What is <span className="text-[#c9a227]">Nuqta</span>?
            </h2>

            <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-4xl">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#c9a227]/20 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">🧠</span>
                </div>
                <p className="text-xl font-bold mb-2">Intelligence</p>
                <p className="text-gray-400 text-sm">Best card, wallet, or BNPL for every purchase</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#c9a227]/20 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">⭐</span>
                </div>
                <p className="text-xl font-bold mb-2">Rewards</p>
                <p className="text-gray-400 text-sm">Universal points across all merchants</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#c9a227]/20 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">🔥</span>
                </div>
                <p className="text-xl font-bold mb-2">Loyalty</p>
                <p className="text-gray-400 text-sm">Visit-based earning, not just spend</p>
              </div>
            </div>

            <p className="mt-12 text-lg text-gray-500 italic">
              &quot;نقطة&quot; means &quot;point&quot; in Arabic — the starting point of every payment.
            </p>
          </div>
        );

      // ==================== SLIDE 8: HOW IT WORKS ====================
      case 7:
        return (
          <div className="h-full flex flex-col items-center justify-center px-8 py-12">
            <p className="text-[#c9a227] text-lg uppercase tracking-[0.3em] mb-6">User Journey</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">How It Works</h2>

            <div className="flex items-center justify-center gap-4 md:gap-8 max-w-5xl w-full">
              {[
                { num: '1', icon: '🔍', title: 'Discover', desc: 'Find nearby merchants & offers' },
                { num: '2', icon: '🧠', title: 'Smart Pay', desc: 'AI picks best payment method' },
                { num: '3', icon: '⭐', title: 'Earn', desc: 'Get universal Nuqta points' },
                { num: '4', icon: '🎁', title: 'Redeem', desc: 'Use points anywhere' },
              ].map((step, idx) => (
                <div key={idx} className="flex-1 text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#c9a227] to-[#a88a1e] rounded-2xl flex items-center justify-center">
                      <span className="text-3xl md:text-4xl">{step.icon}</span>
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-white text-[#0a1628] rounded-full text-sm font-bold flex items-center justify-center">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-8">
                      <span className="text-[#c9a227] text-2xl">→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      // ==================== SLIDE 9: USER VALUE ====================
      case 8:
        return (
          <div className="h-full flex flex-col items-center justify-center px-8 py-12">
            <p className="text-[#c9a227] text-lg uppercase tracking-[0.3em] mb-6">For Users</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
              Save money on <span className="text-[#c9a227]">every</span> purchase
            </h2>

            <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-3xl">
              {[
                { icon: '💳', title: 'Smart Pay Advisor', stat: 'Saves 5-15%', desc: 'per transaction' },
                { icon: '⭐', title: 'Universal Points', stat: 'Earn everywhere', desc: 'one currency' },
                { icon: '📍', title: 'Local Discovery', stat: 'Real offers', desc: 'not spam' },
                { icon: '🔥', title: 'Visit Streaks', stat: 'Bonus rewards', desc: 'for loyalty' },
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
      case 9:
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
      case 10:
        return (
          <div className="h-full flex flex-col items-center justify-center px-8 py-12">
            <p className="text-[#c9a227] text-lg uppercase tracking-[0.3em] mb-6">Why Different</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              The <span className="text-[#c9a227]">neutral</span> intelligence layer
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
              <div className="bg-red-500/10 rounded-2xl p-8 border border-red-500/30">
                <p className="text-red-400 font-bold text-lg mb-6">Others → Own One Layer</p>
                <div className="space-y-4">
                  {[
                    'Banks optimize their cards only',
                    'BNPL pushes their product only',
                    'Loyalty siloed by brand',
                    'Super apps = closed ecosystem',
                  ].map((item, idx) => (
                    <p key={idx} className="flex items-center gap-3 text-gray-400">
                      <span className="text-red-400">✗</span> {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="bg-[#c9a227]/10 rounded-2xl p-8 border border-[#c9a227]/30">
                <p className="text-[#c9a227] font-bold text-lg mb-6">Nuqta → Connects All Layers</p>
                <div className="space-y-4">
                  {[
                    'Neutral comparison across ALL options',
                    'One rewards currency everywhere',
                    'Visit-based real loyalty',
                    'Open infrastructure',
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

      // ==================== SLIDE 12: MARKET SIZE ====================
      case 11:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-4 sm:px-8">
            <p className="text-[#c9a227] text-sm sm:text-lg uppercase tracking-[0.3em] mb-4 sm:mb-8">Market Opportunity</p>

            <DataPoint
              value="$40B"
              source="UAE household consumption expenditure, World Bank 2023"
              className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[200px] font-black text-[#c9a227] leading-none"
            />

            <p className="text-lg sm:text-2xl md:text-3xl text-gray-300 mt-2 sm:mt-4 mb-4 sm:mb-8">
              UAE addressable market
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12 text-gray-400">
              <div className="text-center">
                <DataPoint value="5M" source="UAE digital wallet users, Statista 2024" className="text-xl sm:text-3xl font-bold text-white" />
                <p className="text-xs sm:text-sm">Active users</p>
              </div>
              <div className="w-px h-6 sm:h-10 bg-gray-700 hidden sm:block" />
              <div className="text-center">
                <DataPoint value="$8K" source="Average urban household spending, UAE Statistics Centre" className="text-xl sm:text-3xl font-bold text-white" />
                <p className="text-xs sm:text-sm">Annual spend/user</p>
              </div>
              <div className="w-px h-6 sm:h-10 bg-gray-700 hidden sm:block" />
              <div className="text-center">
                <DataPoint value="$600B" source="GCC consumer spending, IMF Regional Report 2024" className="text-xl sm:text-3xl font-bold text-white" />
                <p className="text-xs sm:text-sm">GCC total</p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 13: BUSINESS MODEL ====================
      case 12:
        return (
          <div className="h-full flex flex-col items-center justify-center px-8 py-12">
            <p className="text-[#c9a227] text-lg uppercase tracking-[0.3em] mb-6">Business Model</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              High-margin, <span className="text-[#c9a227]">asset-light</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full mb-8">
              {[
                { pct: '40%', title: 'Merchant Rewards', desc: 'Cost per visit' },
                { pct: '25%', title: 'Promoted Listings', desc: 'CPC/CPM' },
                { pct: '20%', title: 'BNPL Commission', desc: 'Referral fees' },
                { pct: '15%', title: 'Premium Tools', desc: 'SaaS' },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#1a2a42]/50 rounded-2xl p-6 text-center border border-[#2a3a52]">
                  <p className="text-4xl font-black text-[#c9a227] mb-2">{item.pct}</p>
                  <p className="font-bold mb-1">{item.title}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-lg">
              No inventory. No logistics. No discount burn. <span className="text-white font-semibold">Pure software margins.</span>
            </p>
          </div>
        );

      // ==================== SLIDE 14: UNIT ECONOMICS ====================
      case 13:
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

      // ==================== SLIDE 15: TRACTION ====================
      case 14:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 overflow-y-auto">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 md:mb-6">Current Status</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-center">Pre-Launch</h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-12 text-center max-w-xl px-2">
              Building MVP, validating demand, securing pilots. No vanity metrics — just honest progress.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-2xl w-full">
              {[
                { icon: '📋', title: 'Early Access Waitlist', status: 'Growing' },
                { icon: '🏪', title: 'Merchant Pilots', status: 'In Discussion' },
                { icon: '🤝', title: 'BNPL Partnerships', status: 'Conversations Active' },
                { icon: '📈', title: 'Investor Interest', status: 'Strong Inbound' },
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

      // ==================== SLIDE 16: ROADMAP ====================
      case 15:
        return (
          <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 overflow-y-auto">
            <p className="text-[#c9a227] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 md:mb-6">Execution Plan</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-12 text-center">Roadmap</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-5xl w-full">
              {[
                { phase: 'Phase 1', time: '0-6 mo', title: 'Launch', items: ['MVP live', '100 merchants', 'Core features'], current: true },
                { phase: 'Phase 2', time: '6-12 mo', title: 'Scale', items: ['500+ merchants', 'BNPL integrations', 'Category expansion'], current: false },
                { phase: 'Phase 3', time: '12-24 mo', title: 'Expand', items: ['GCC markets', 'Bank partnerships', 'Series A ready'], current: false },
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

      // ==================== SLIDE 17: TEAM ====================
      case 16:
        return (
          <div className="h-full flex flex-col items-center justify-center px-8 py-12">
            <p className="text-[#c9a227] text-lg uppercase tracking-[0.3em] mb-6">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">The Team</h2>

            <div className="bg-[#1a2a42]/50 rounded-3xl p-8 md:p-12 border border-[#c9a227]/30 max-w-2xl w-full">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-gradient-to-br from-[#c9a227] to-[#f4d35e] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-5xl font-black text-[#0a1628]">RK</span>
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

      // ==================== SLIDE 18: GOVERNANCE ====================
      case 17:
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

      // ==================== SLIDE 19: THE ASK ====================
      case 18:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center px-8">
            <p className="text-[#c9a227] text-lg uppercase tracking-[0.3em] mb-8">The Ask</p>

            <p className="text-[100px] md:text-[140px] lg:text-[180px] font-black text-[#c9a227] leading-none">
              $500K
            </p>

            <div className="flex items-center gap-8 md:gap-16 my-8">
              <div className="text-center">
                <p className="text-3xl font-bold">$3M</p>
                <p className="text-gray-500">Floor</p>
              </div>
              <div className="text-4xl text-gray-600">→</div>
              <div className="text-center">
                <p className="text-3xl font-bold">$10M</p>
                <p className="text-gray-500">Cap</p>
              </div>
              <div className="text-center ml-8 pl-8 border-l border-gray-700">
                <p className="text-3xl font-bold">20%</p>
                <p className="text-gray-500">Discount</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 mt-4 mb-8">
              {[
                { pct: '40%', label: 'Product', amount: '$200K' },
                { pct: '30%', label: 'Merchants', amount: '$150K' },
                { pct: '20%', label: 'Partnerships', amount: '$100K' },
                { pct: '10%', label: 'Buffer', amount: '$50K' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-2xl font-bold text-[#c9a227]">{item.pct}</p>
                  <p className="text-sm text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-500">
              Instrument: <span className="text-white font-bold">CCD</span> (Convertible Note)
            </p>
          </div>
        );

      // ==================== SLIDE 20: CLOSING ====================
      case 19:
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
              <span>$3M-$10M Valuation</span>
              <span>•</span>
              <span>CCD</span>
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

      {/* Slide Content */}
      <div className="h-full pt-12 sm:pt-14 md:pt-16 pb-20 sm:pb-24">
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
