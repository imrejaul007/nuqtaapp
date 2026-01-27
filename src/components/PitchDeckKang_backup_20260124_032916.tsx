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
export default function PitchDeckKang({ isOpen, onClose }: PitchDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 19;

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
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 bg-gradient-to-b from-[#0a1628] via-[#0d1c30] to-[#0a1628]">
            {/* Logo */}
            <div className="relative mb-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden relative">
                <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain p-3 sm:p-4" priority />
              </div>
              <div className="absolute -inset-6 sm:-inset-8 bg-[#c9a227]/20 rounded-full blur-3xl -z-10" />
            </div>

            {/* Main headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
              The Smart Shopping<br />Super-App for <span className="text-[#c9a227]">UAE</span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 font-light">
              Discover. Pay Smart. Earn Double.
            </p>

            {/* Key stats banner */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-4xl">
              <div className="bg-[#1a2a42]/50 rounded-xl px-4 sm:px-6 py-3 border border-[#c9a227]/30">
                <p className="text-xs sm:text-sm text-gray-400">Status</p>
                <p className="text-base sm:text-lg font-bold text-[#c9a227]">Pre-Launch</p>
              </div>
              <div className="bg-[#1a2a42]/50 rounded-xl px-4 sm:px-6 py-3 border border-[#c9a227]/30">
                <p className="text-xs sm:text-sm text-gray-400">Merchants</p>
                <p className="text-base sm:text-lg font-bold text-white">30 Signed</p>
              </div>
              <div className="bg-[#1a2a42]/50 rounded-xl px-4 sm:px-6 py-3 border border-[#c9a227]/30">
                <p className="text-xs sm:text-sm text-gray-400">Product</p>
                <p className="text-base sm:text-lg font-bold text-green-400">95% Ready</p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 2: THE PROBLEM ====================
      case 1:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">Problem</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
              UAE Shoppers Waste <span className="text-[#c9a227]">AED 2.4B Annually</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-8 text-center max-w-3xl">
              Fragmented cashback apps + Post-purchase tracking = 60% missed savings
            </p>

            {/* Visual: Money bleeding diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mb-8">
              {/* Pain 1 */}
              <div className="bg-gradient-to-br from-red-500/20 to-red-500/5 rounded-2xl p-6 border-2 border-red-500/40 text-center">
                <span className="text-5xl mb-3 block">📱</span>
                <h3 className="text-lg font-bold text-red-400 mb-2">Fragmentation</h3>
                <p className="text-sm text-gray-300">Users check 5+ different cashback apps</p>
              </div>

              {/* Pain 2 */}
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-2xl p-6 border-2 border-orange-500/40 text-center">
                <span className="text-5xl mb-3 block">❌</span>
                <h3 className="text-lg font-bold text-orange-400 mb-2">Post-Purchase Only</h3>
                <p className="text-sm text-gray-300">No discovery layer → Forget to claim rewards</p>
              </div>

              {/* Pain 3 */}
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 rounded-2xl p-6 border-2 border-yellow-500/40 text-center">
                <span className="text-5xl mb-3 block">💸</span>
                <h3 className="text-lg font-bold text-yellow-400 mb-2">No Payment Intelligence</h3>
                <p className="text-sm text-gray-300">Don't know which card saves most money</p>
              </div>
            </div>

            {/* Market scale */}
            <div className="bg-gradient-to-r from-[#c9a227]/30 to-[#c9a227]/10 rounded-xl px-8 py-5 border-2 border-[#c9a227]/50 max-w-3xl text-center">
              <p className="text-4xl sm:text-5xl font-black text-[#c9a227] mb-2">
                <DataPoint value="AED 2.4B" source="UAE Central Bank: 3.5M credit card users × AED 57/month average missed rewards" />
              </p>
              <p className="text-base text-gray-300">wasted annually across 3.5M UAE credit card users</p>
            </div>
          </div>
        );

      // ==================== SLIDE 3: USER PAIN ====================
      case 2:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">Problem • User Side</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
              Meet Sara. She's Losing <span className="text-[#c9a227]">AED 150/Month</span>
            </h2>

            {/* Two-column comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full mb-8">
              {/* Left: Sara's Current Reality */}
              <div className="bg-gradient-to-br from-red-500/20 to-red-500/5 rounded-2xl p-6 border-2 border-red-500/40">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">😞</span>
                  <h3 className="text-xl font-bold text-red-400">Sara's Current Reality</h3>
                </div>
                <div className="space-y-3 text-sm sm:text-base">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">🛍️</span>
                    <p>Shops at <span className="font-bold text-white">10 different stores</span> monthly</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">💳</span>
                    <p>Uses <span className="font-bold text-white">3 different credit cards</span></p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">📱</span>
                    <p>Checks <span className="font-bold text-white">5 cashback apps</span></p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">❌</span>
                    <p>Misses <span className="font-bold text-white">60% of savings opportunities</span></p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">💸</span>
                    <p>Loses <span className="font-bold text-red-300">AED 150/month</span> in unclaimed rewards</p>
                  </div>
                </div>
              </div>

              {/* Right: Market Scale */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl p-6 border-2 border-[#c9a227]/40 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-[#c9a227] mb-4">The Market Pain</h3>
                <div className="text-center mb-4">
                  <p className="text-5xl sm:text-6xl font-black text-[#c9a227] mb-2">
                    <DataPoint value="AED 2.4B" source="UAE Central Bank: 3.5M credit card users × AED 57/month average missed rewards" />
                  </p>
                  <p className="text-lg text-gray-300">wasted annually in UAE</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2"><span className="text-[#c9a227]">•</span> Too many apps (fragmentation)</p>
                  <p className="flex items-center gap-2"><span className="text-[#c9a227]">•</span> Post-purchase tracking (forget to claim)</p>
                  <p className="flex items-center gap-2"><span className="text-[#c9a227]">•</span> No discovery layer (don't know best deals)</p>
                </div>
              </div>
            </div>

            {/* Bottom insight */}
            <div className="bg-[#1a2a42]/50 rounded-xl px-6 py-4 border border-red-500/30 max-w-3xl text-center">
              <p className="text-base sm:text-lg text-white">
                <span className="font-bold text-red-400">Problem:</span> Shoppers want to save, but the tools are fragmented, passive, and post-purchase.
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 4: MERCHANT PAIN ====================
      case 3:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">Problem • Merchant Side</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
              Merchants Bleed <span className="text-[#c9a227]">AED 15K-50K/Month</span>
            </h2>
            <p className="text-base text-gray-400 mb-8 text-center max-w-3xl">
              On marketing that doesn't bring repeat customers
            </p>

            {/* Merchant P&L showing bleeding */}
            <div className="max-w-4xl w-full mb-8">
              <div className="bg-gradient-to-br from-red-500/20 to-red-500/5 rounded-2xl p-6 border-2 border-red-500/40">
                <h3 className="text-xl font-bold text-red-400 mb-6 text-center">Typical D2C Brand P&L (Monthly)</h3>

                {/* Revenue */}
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <p className="text-sm text-gray-400 mb-2">Revenue</p>
                  <p className="text-2xl font-bold text-green-400">+ AED 200K</p>
                </div>

                {/* Costs */}
                <div className="space-y-3 mb-4 pb-4 border-b border-gray-700">
                  <p className="text-sm text-gray-400 mb-3">Costs</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">COGS (60%)</span>
                    <span className="text-white font-bold">- AED 120K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Rent & Ops (15%)</span>
                    <span className="text-white font-bold">- AED 30K</span>
                  </div>
                  <div className="flex justify-between text-sm bg-red-500/20 rounded-lg p-3 border border-red-500/30">
                    <span className="text-red-300 font-bold">Marketing (Meta Ads) 🔥</span>
                    <span className="text-red-400 font-bold">- AED 35K</span>
                  </div>
                </div>

                {/* Net Margin */}
                <div className="bg-orange-500/20 rounded-lg p-4 border border-orange-500/40">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-orange-400">Net Margin</span>
                    <span className="text-3xl font-black text-orange-400">AED 15K (7.5%)</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Should be 20-25% but burning on CAC for one-time buyers</p>
                </div>
              </div>
            </div>

            {/* Pain points grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full mb-6">
              <div className="bg-[#1a2a42]/50 rounded-xl p-4 border border-red-500/30 text-center">
                <p className="text-3xl mb-2">💰</p>
                <p className="text-sm text-red-400 font-bold mb-1">High CAC</p>
                <p className="text-xs text-gray-400">AED 80-150 per customer on Meta/Google</p>
              </div>
              <div className="bg-[#1a2a42]/50 rounded-xl p-4 border border-orange-500/30 text-center">
                <p className="text-3xl mb-2">🔄</p>
                <p className="text-sm text-orange-400 font-bold mb-1">Low Retention</p>
                <p className="text-xs text-gray-400">60% never return → Constant CAC burn</p>
              </div>
              <div className="bg-[#1a2a42]/50 rounded-xl p-4 border border-yellow-500/30 text-center">
                <p className="text-3xl mb-2">📊</p>
                <p className="text-sm text-yellow-400 font-bold mb-1">No Data</p>
                <p className="text-xs text-gray-400">Can't predict demand or manage inventory</p>
              </div>
            </div>

            {/* Bottom insight */}
            <div className="bg-gradient-to-r from-red-500/30 to-red-500/10 rounded-xl px-6 py-4 border-2 border-red-500/50 max-w-3xl text-center">
              <p className="text-base font-bold text-white">
                <span className="text-red-400">Problem:</span> Merchants need repeat customers, not one-time buyers. Current channels don't deliver loyalty.
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 5: MARKET OPPORTUNITY ====================
      case 4:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">The Solution</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
              The Complete Journey in <span className="text-[#c9a227]">One App</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-8 text-center max-w-3xl">
              Discovery-to-purchase platform with dual-loyalty rewards
            </p>

            {/* 5-step journey flow */}
            <div className="space-y-4 max-w-4xl w-full mb-6">
              {/* Step 1 */}
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/5 rounded-xl p-4 border-2 border-blue-500/40 relative">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-black text-white">1</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-blue-400 mb-1">🔍 DISCOVER</h3>
                    <p className="text-sm text-gray-300">Browse/search 30+ UAE brands • See products/services • Discover exclusive offers</p>
                  </div>
                  <span className="hidden md:block text-3xl text-[#c9a227]">↓</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-xl p-4 border-2 border-purple-500/40">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-2xl font-black text-white">2</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-purple-400 mb-1">🔒 LOCK/BOOK</h3>
                    <p className="text-sm text-gray-300">Book service OR lock product (partial payment) • Choose home delivery or visit store</p>
                  </div>
                  <span className="hidden md:block text-3xl text-[#c9a227]">↓</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl p-4 border-2 border-[#c9a227]/40">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#c9a227] rounded-full flex items-center justify-center text-2xl font-black text-black">3</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#c9a227] mb-1">💳 PAY SMART</h3>
                    <p className="text-sm text-gray-300">"Use Emirates NBD, save AED 30" • Intelligent payment routing across all cards/BNPL options</p>
                  </div>
                  <span className="hidden md:block text-3xl text-[#c9a227]">↓</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-gradient-to-r from-green-500/20 to-green-500/5 rounded-xl p-4 border-2 border-green-500/40">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl font-black text-white">4</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-green-400 mb-1">💰 EARN DOUBLE</h3>
                    <p className="text-sm text-gray-300">5-10% universal cashback + merchant branded coins • Stack both rewards</p>
                  </div>
                  <span className="hidden md:block text-3xl text-[#c9a227]">↓</span>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-gradient-to-r from-pink-500/20 to-pink-500/5 rounded-xl p-4 border-2 border-pink-500/40">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-2xl font-black text-white">5</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-pink-400 mb-1">🎯 UNLOCK PERKS</h3>
                    <p className="text-sm text-gray-300">Visit merchant 3 times → Unlock exclusive offers • Gamified loyalty + leaderboards</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Result callout */}
            <div className="bg-gradient-to-r from-[#c9a227]/30 to-[#c9a227]/10 rounded-xl px-6 py-4 border-2 border-[#c9a227]/50 max-w-3xl text-center">
              <p className="text-base sm:text-lg font-bold text-white">
                Result: Sara saves <span className="text-[#c9a227]">AED 200/month</span> + earns loyalty perks across all her favorite brands
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 6: TIMING & MOMENTUM ====================
      case 5:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">Market • Timing</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
              Why <span className="text-[#c9a227]">Now?</span>
            </h2>
            <p className="text-base text-gray-400 mb-8 text-center max-w-3xl">
              3 macro trends converging in 2026
            </p>

            {/* 3 trends */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mb-8">
              {/* Trend 1 */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-2xl p-6 border-2 border-blue-500/40">
                <div className="text-5xl mb-4 text-center">📈</div>
                <h3 className="text-lg font-bold text-blue-400 mb-3 text-center">Digital Payment Boom</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p className="flex items-center gap-2"><span className="text-blue-400">✓</span> Card transactions up <span className="font-bold text-white">12% YoY</span></p>
                  <p className="flex items-center gap-2"><span className="text-blue-400">✓</span> BNPL adoption growing <span className="font-bold text-white">40% annually</span></p>
                  <p className="flex items-center gap-2"><span className="text-blue-400">✓</span> 3.5M active credit card users</p>
                </div>
              </div>

              {/* Trend 2 */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-2xl p-6 border-2 border-green-500/40">
                <div className="text-5xl mb-4 text-center">🏪</div>
                <h3 className="text-lg font-bold text-green-400 mb-3 text-center">D2C Brand Explosion</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> 500+ new D2C brands in UAE (2024-25)</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Need customer acquisition channels</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Paying AED 80-150 CAC on Meta</p>
                </div>
              </div>

              {/* Trend 3 */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl p-6 border-2 border-[#c9a227]/40">
                <div className="text-5xl mb-4 text-center">🤝</div>
                <h3 className="text-lg font-bold text-[#c9a227] mb-3 text-center">Super-App Validation</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p className="flex items-center gap-2"><span className="text-[#c9a227]">✓</span> Careem, Noon proven model works</p>
                  <p className="flex items-center gap-2"><span className="text-[#c9a227]">✓</span> Users want one app for everything</p>
                  <p className="flex items-center gap-2"><span className="text-[#c9a227]">✓</span> Gap: No rewards-first super-app</p>
                </div>
              </div>
            </div>

            {/* Bottom callout */}
            <div className="bg-gradient-to-r from-[#c9a227]/30 to-[#c9a227]/10 rounded-xl px-6 py-4 border-2 border-[#c9a227]/50 max-w-3xl text-center">
              <p className="text-base sm:text-lg font-bold text-white">
                Perfect Storm: Rising digital payments + D2C growth + Super-app adoption = <span className="text-[#c9a227]">Nuqta's Moment</span>
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 7: THE SOLUTION ====================
      case 6:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">Market Opportunity</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-[#c9a227]">AED 50B</span> Addressable Market
            </h2>

            {/* Concentric circles visualization */}
            <div className="relative w-full max-w-2xl aspect-square mb-8">
              {/* Outer circle - TAM */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-500/10 border-4 border-blue-500/50 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl sm:text-5xl font-black text-blue-400 mb-1">
                    <DataPoint value="AED 180B" source="UAE Ministry of Economy: Total retail market size 2025" />
                  </p>
                  <p className="text-sm sm:text-base text-gray-300">Total UAE Retail Market</p>
                </div>
              </div>

              {/* Middle circle - SAM */}
              <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-purple-500/40 to-purple-500/10 border-4 border-purple-500/60 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-black text-purple-400 mb-1">
                    <DataPoint value="AED 50B" source="Addressable: D2C brands, services, dining (28% of total retail)" />
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300">Addressable Market<br />(D2C + Services)</p>
                </div>
              </div>

              {/* Inner circle - SOM */}
              <div className="absolute inset-[35%] rounded-full bg-gradient-to-br from-[#c9a227]/50 to-[#c9a227]/20 border-4 border-[#c9a227]/70 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-black text-[#c9a227] mb-1">AED 500M</p>
                  <p className="text-xs sm:text-sm text-gray-200">Year 1 Target<br />GMV</p>
                </div>
              </div>
            </div>

            {/* Bottom stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl w-full">
              <div className="bg-[#1a2a42]/50 rounded-xl p-4 border border-[#c9a227]/30 text-center">
                <p className="text-3xl font-black text-[#c9a227] mb-1">
                  <DataPoint value="3.5M" source="UAE Central Bank: Active credit card users 2025" />
                </p>
                <p className="text-sm text-gray-300">Credit Card Users in UAE</p>
              </div>
              <div className="bg-[#1a2a42]/50 rounded-xl p-4 border border-[#c9a227]/30 text-center">
                <p className="text-3xl font-black text-green-400 mb-1">
                  <DataPoint value="12%" source="UAE Central Bank: YoY growth in card transactions 2024-2025" />
                </p>
                <p className="text-sm text-gray-300">Annual Growth Rate</p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 5: TRACTION (HERO SLIDE) ====================
      case 4:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">Traction</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
              Already Executed <span className="text-[#c9a227]">Pre-Launch</span>
            </h2>
            <p className="text-base text-gray-400 mb-6 text-center max-w-3xl">
              Most pre-seed startups are idea-stage. We're <span className="text-[#c9a227] font-bold">execution-stage.</span>
            </p>

            {/* 4-quadrant dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl w-full mb-6">
              {/* Quadrant 1: Product */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-2xl p-5 border-2 border-blue-500/40">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">📦</span>
                  <h3 className="text-xl font-bold text-blue-400">PRODUCT</h3>
                </div>
                <div className="mb-4">
                  <p className="text-5xl font-black text-white mb-1">95%</p>
                  <p className="text-sm text-gray-300">Complete • 30 Days to Launch</p>
                </div>
                <div className="space-y-1 text-sm">
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Discovery Layer Built</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Booking System Ready</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Payment Intelligence Live</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Dual Rewards Engine</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> FREE POS System (Merchant Lock-In)</p>
                </div>
              </div>

              {/* Quadrant 2: Merchants */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-2xl p-5 border-2 border-green-500/40">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🤝</span>
                  <h3 className="text-xl font-bold text-green-400">MERCHANTS</h3>
                </div>
                <div className="mb-4">
                  <p className="text-5xl font-black text-white mb-1">30</p>
                  <p className="text-sm text-gray-300">SIGNED CONTRACTS (Legal Binding)</p>
                </div>
                <div className="space-y-1 text-sm">
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Not MOUs - Actual Contracts</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Ready to Launch Day One</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Cross 5 Sectors (F&B, Retail, Services, etc.)</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> AED 12M Annual GMV Potential</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> 10 Committed to POS Beta</p>
                </div>
              </div>

              {/* Quadrant 3: Team */}
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-2xl p-5 border-2 border-purple-500/40">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">👥</span>
                  <h3 className="text-xl font-bold text-purple-400">TEAM</h3>
                </div>
                <div className="mb-4">
                  <p className="text-5xl font-black text-white mb-1">6</p>
                  <p className="text-sm text-gray-300">People Assembled • Ready to Execute</p>
                </div>
                <div className="space-y-1 text-sm">
                  <p className="flex items-center gap-2"><span className="text-purple-400">✓</span> CHRO (3 yrs exp, ex-founder edtech)</p>
                  <p className="flex items-center gap-2"><span className="text-purple-400">✓</span> CMO (5 yrs exp, ex-founder e-commerce)</p>
                  <p className="flex items-center gap-2"><span className="text-purple-400">✓</span> 2 Full-Time Developers (3yr + 1yr exp)</p>
                  <p className="flex items-center gap-2"><span className="text-purple-400">✓</span> Graphic Designer (3 yrs exp)</p>
                  <p className="flex items-center gap-2"><span className="text-purple-400">✓</span> BDA (2 yrs exp)</p>
                </div>
              </div>

              {/* Quadrant 4: Validation */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl p-5 border-2 border-[#c9a227]/40">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">📈</span>
                  <h3 className="text-xl font-bold text-[#c9a227]">VALIDATION</h3>
                </div>
                <div className="mb-4">
                  <p className="text-5xl font-black text-white mb-1">200+</p>
                  <p className="text-sm text-gray-300">Waitlist Users • Growing Daily</p>
                </div>
                <div className="space-y-1 text-sm">
                  <p className="flex items-center gap-2"><span className="text-[#c9a227]">✓</span> 50+ UAE Clients (Founder Network)</p>
                  <p className="flex items-center gap-2"><span className="text-[#c9a227]">✓</span> Pilot QR Scans: 80% Success Rate</p>
                  <p className="flex items-center gap-2"><span className="text-[#c9a227]">✓</span> First College Fest Planned (Feb 2026)</p>
                  <p className="flex items-center gap-2"><span className="text-[#c9a227]">✓</span> 5 Merchants Ready for POS Beta</p>
                  <p className="flex items-center gap-2"><span className="text-[#c9a227]">✓</span> 3 Employee Partnership MOUs</p>
                </div>
              </div>
            </div>

            {/* Bottom banner */}
            <div className="bg-gradient-to-r from-[#c9a227]/30 to-[#c9a227]/10 rounded-xl px-6 py-4 border-2 border-[#c9a227]/50 max-w-4xl text-center">
              <p className="text-base sm:text-lg font-bold text-white mb-2">
                💰 Bootstrapped: <span className="text-[#c9a227]">AED 0 Raised</span> | Built with Founder Capital
              </p>
              <p className="text-sm text-gray-300">
                🎯 Execution Risk: <span className="text-green-400 font-bold">ELIMINATED</span> (Product + Merchants + Team = Ready)
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 6: PRODUCT ====================
      case 5:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">Product</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
              The Product: <span className="text-[#c9a227]">30 Days to Launch</span>
            </h2>
            <p className="text-base text-gray-400 mb-8 text-center max-w-3xl">
              Built in-house by technical founder • Fully functional • Native mobile app
            </p>

            {/* 3-column screenshot showcase */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mb-8">
              {/* Screenshot 1: Discovery */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-2xl p-5 border-2 border-blue-500/40">
                <div className="aspect-[9/16] bg-gradient-to-br from-[#1a2a42] to-[#0d1c30] rounded-xl mb-4 flex items-center justify-center border border-blue-500/30">
                  <div className="text-center p-6">
                    <span className="text-5xl mb-3 block">🔍</span>
                    <p className="text-sm text-gray-400 mb-2">Discovery Feed</p>
                    <p className="text-xs text-gray-500">[Product Screenshot]</p>
                  </div>
                </div>
                <h4 className="font-bold text-blue-400 mb-2">Discovery Feed</h4>
                <p className="text-sm text-gray-300">Browse 30+ brands • See offers • Filter by category</p>
              </div>

              {/* Screenshot 2: Payment Intelligence */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl p-5 border-2 border-[#c9a227]/40">
                <div className="aspect-[9/16] bg-gradient-to-br from-[#1a2a42] to-[#0d1c30] rounded-xl mb-4 flex items-center justify-center border border-[#c9a227]/30">
                  <div className="text-center p-6">
                    <span className="text-5xl mb-3 block">💳</span>
                    <p className="text-sm text-gray-400 mb-2">Smart Payment</p>
                    <p className="text-xs text-gray-500">[Product Screenshot]</p>
                  </div>
                </div>
                <h4 className="font-bold text-[#c9a227] mb-2">Payment Intelligence</h4>
                <p className="text-sm text-gray-300">"Use Emirates NBD, save AED 30" • Real-time routing</p>
              </div>

              {/* Screenshot 3: Dual Rewards */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-2xl p-5 border-2 border-green-500/40">
                <div className="aspect-[9/16] bg-gradient-to-br from-[#1a2a42] to-[#0d1c30] rounded-xl mb-4 flex items-center justify-center border border-green-500/30">
                  <div className="text-center p-6">
                    <span className="text-5xl mb-3 block">💰</span>
                    <p className="text-sm text-gray-400 mb-2">Dual Rewards</p>
                    <p className="text-xs text-gray-500">[Product Screenshot]</p>
                  </div>
                </div>
                <h4 className="font-bold text-green-400 mb-2">Transaction + Rewards</h4>
                <p className="text-sm text-gray-300">AED 50 cashback + 100 brand coins • Instant crediting</p>
              </div>
            </div>

            {/* Bottom note */}
            <div className="bg-[#1a2a42]/50 rounded-xl px-6 py-3 border border-[#c9a227]/30 max-w-2xl text-center">
              <p className="text-sm text-gray-300">
                <span className="text-[#c9a227] font-bold">Note:</span> Add actual product screenshots when ready for investor meetings. This demonstrates real progress beyond mockups.
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 7: BUSINESS MODEL ====================
      case 6:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">Business Model</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
              How We Make Money
            </h2>
            <p className="text-base text-gray-400 mb-8 text-center max-w-3xl">
              Blended Take Rate: <span className="text-[#c9a227] font-bold">23.5%</span> of GMV • Diversified across 5 revenue streams
            </p>

            {/* Revenue breakdown - horizontal bars */}
            <div className="max-w-4xl w-full space-y-4 mb-8">
              {/* Stream 1: Merchant Commission */}
              <div className="bg-gradient-to-r from-blue-500/20 to-transparent rounded-xl p-4 border border-blue-500/40">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-blue-400">Merchant Commission</h3>
                  <span className="text-2xl font-black text-blue-400">60%</span>
                </div>
                <div className="w-full bg-[#1a2a42] rounded-full h-3 mb-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full" style={{width: '60%'}}></div>
                </div>
                <p className="text-sm text-gray-300 mb-1">AED 87.50/user/month</p>
                <p className="text-xs text-gray-400">15-20% commission on AED 500 GMV (blended avg 17.5%)</p>
              </div>

              {/* Stream 2: Payment Routing */}
              <div className="bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl p-4 border border-purple-500/40">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-purple-400">Payment Routing Fees</h3>
                  <span className="text-2xl font-black text-purple-400">15%</span>
                </div>
                <div className="w-full bg-[#1a2a42] rounded-full h-3 mb-2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-3 rounded-full" style={{width: '15%'}}></div>
                </div>
                <p className="text-sm text-gray-300 mb-1">AED 11.25/user/month</p>
                <p className="text-xs text-gray-400">Banks/BNPLs pay AED 2-3 per routed transaction</p>
              </div>

              {/* Stream 3: Promoted Listings */}
              <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-xl p-4 border border-[#c9a227]/40">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-[#c9a227]">Promoted Listings</h3>
                  <span className="text-2xl font-black text-[#c9a227]">15%</span>
                </div>
                <div className="w-full bg-[#1a2a42] rounded-full h-3 mb-2">
                  <div className="bg-gradient-to-r from-[#c9a227] to-yellow-600 h-3 rounded-full" style={{width: '15%'}}></div>
                </div>
                <p className="text-sm text-gray-300 mb-1">AED 11.25/user/month</p>
                <p className="text-xs text-gray-400">Merchants pay AED 500-2,000/month for visibility</p>
              </div>

              {/* Stream 4: Branded Coins */}
              <div className="bg-gradient-to-r from-green-500/20 to-transparent rounded-xl p-4 border border-green-500/40">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-green-400">Branded Coin Sales</h3>
                  <span className="text-2xl font-black text-green-400">5%</span>
                </div>
                <div className="w-full bg-[#1a2a42] rounded-full h-3 mb-2">
                  <div className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full" style={{width: '5%'}}></div>
                </div>
                <p className="text-sm text-gray-300 mb-1">AED 3.75/user/month</p>
                <p className="text-xs text-gray-400">Merchants buy coins to distribute as loyalty rewards</p>
              </div>

              {/* Stream 5: Transaction Fees */}
              <div className="bg-gradient-to-r from-pink-500/20 to-transparent rounded-xl p-4 border border-pink-500/40">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-pink-400">Transaction Fees</h3>
                  <span className="text-2xl font-black text-pink-400">5%</span>
                </div>
                <div className="w-full bg-[#1a2a42] rounded-full h-3 mb-2">
                  <div className="bg-gradient-to-r from-pink-500 to-pink-400 h-3 rounded-full" style={{width: '5%'}}></div>
                </div>
                <p className="text-sm text-gray-300 mb-1">AED 3.75/user/month</p>
                <p className="text-xs text-gray-400">1-2% on facilitated bookings/transactions</p>
              </div>
            </div>

            {/* Total revenue summary */}
            <div className="bg-gradient-to-r from-[#c9a227]/30 to-[#c9a227]/10 rounded-xl px-8 py-5 border-2 border-[#c9a227]/50 max-w-3xl text-center">
              <p className="text-sm text-gray-400 mb-2">TOTAL REVENUE PER USER (MONTHLY)</p>
              <p className="text-4xl sm:text-5xl font-black text-[#c9a227] mb-2">AED 117.50</p>
              <p className="text-sm text-gray-300">Based on AED 500 monthly GMV per user (5 transactions × AED 100)</p>
            </div>
          </div>
        );

      // ==================== SLIDE 8: UNIT ECONOMICS ====================
      case 7:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">Unit Economics</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
              Profitable from <span className="text-green-400">Month 1</span>
            </h2>
            <p className="text-base text-gray-400 mb-8 text-center max-w-3xl">
              Industry benchmark LTV:CAC = 3:1 • Nuqta = <span className="text-[#c9a227] font-bold">56.8:1</span>
            </p>

            {/* Flow chart */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl w-full mb-6">
              {/* Left: User Behavior */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-2xl p-5 border-2 border-blue-500/40">
                <h3 className="text-lg font-bold text-blue-400 mb-4 text-center">USER BEHAVIOR</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-[#1a2a42]/50 rounded-lg p-3">
                    <p className="text-gray-400 text-xs mb-1">Transactions/Month</p>
                    <p className="text-2xl font-bold text-white">5</p>
                  </div>
                  <div className="bg-[#1a2a42]/50 rounded-lg p-3">
                    <p className="text-gray-400 text-xs mb-1">Average Transaction</p>
                    <p className="text-2xl font-bold text-white">AED 100</p>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-500/40">
                    <p className="text-gray-400 text-xs mb-1">Monthly GMV/User</p>
                    <p className="text-3xl font-black text-blue-400">AED 500</p>
                  </div>
                </div>
              </div>

              {/* Middle: Revenue & Costs */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl p-5 border-2 border-[#c9a227]/40">
                <h3 className="text-lg font-bold text-[#c9a227] mb-4 text-center">REVENUE & COSTS</h3>

                {/* Revenue */}
                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-2">Revenue (Monthly)</p>
                  <div className="space-y-1 text-xs">
                    <p className="flex justify-between"><span>Merchant Commission:</span><span className="text-white">AED 87.50</span></p>
                    <p className="flex justify-between"><span>Payment Routing:</span><span className="text-white">AED 11.25</span></p>
                    <p className="flex justify-between"><span>Promoted Listings:</span><span className="text-white">AED 11.25</span></p>
                    <p className="flex justify-between"><span>Branded Coins:</span><span className="text-white">AED 3.75</span></p>
                    <p className="flex justify-between"><span>Transaction Fees:</span><span className="text-white">AED 3.75</span></p>
                  </div>
                  <div className="bg-[#c9a227]/20 rounded-lg p-2 mt-2">
                    <p className="flex justify-between font-bold"><span>Total Revenue:</span><span className="text-[#c9a227]">AED 117.50</span></p>
                  </div>
                </div>

                {/* Costs */}
                <div>
                  <p className="text-xs text-gray-400 mb-2">Costs (Monthly)</p>
                  <div className="space-y-1 text-xs">
                    <p className="flex justify-between"><span>Cashback (7.5%):</span><span className="text-white">AED 37.50</span></p>
                    <p className="flex justify-between"><span>Social Bonus:</span><span className="text-white">AED 5.00</span></p>
                    <p className="flex justify-between"><span>Nuqta Coins:</span><span className="text-white">AED 2.50</span></p>
                    <p className="flex justify-between"><span>Tech/Ops:</span><span className="text-white">AED 5.00</span></p>
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-2 mt-2">
                    <p className="flex justify-between font-bold"><span>Total Costs:</span><span className="text-red-400">AED 50.00</span></p>
                  </div>
                </div>

                {/* Margin */}
                <div className="bg-green-500/20 rounded-lg p-3 mt-3 border border-green-500/40">
                  <p className="text-xs text-gray-400 mb-1">Gross Margin/User</p>
                  <p className="text-2xl font-black text-green-400">AED 67.50</p>
                  <p className="text-xs text-gray-400">(57% margin)</p>
                </div>
              </div>

              {/* Right: Key Metrics */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-2xl p-5 border-2 border-green-500/40">
                <h3 className="text-lg font-bold text-green-400 mb-4 text-center">KEY METRICS</h3>
                <div className="space-y-4">
                  <div className="bg-[#1a2a42]/50 rounded-lg p-4 text-center">
                    <p className="text-xs text-gray-400 mb-1">Blended CAC</p>
                    <p className="text-3xl font-black text-white mb-1">AED 28.50</p>
                    <p className="text-xs text-gray-500">Across 10 channels</p>
                  </div>

                  <div className="bg-[#1a2a42]/50 rounded-lg p-4 text-center">
                    <p className="text-xs text-gray-400 mb-1">LTV (24 months)</p>
                    <p className="text-3xl font-black text-white mb-1">AED 1,620</p>
                    <p className="text-xs text-gray-500">4% monthly churn</p>
                  </div>

                  <div className="bg-green-500/30 rounded-lg p-4 text-center border-2 border-green-500/50">
                    <p className="text-xs text-gray-400 mb-1">LTV:CAC Ratio</p>
                    <p className="text-4xl font-black text-green-400 mb-1">56.8:1</p>
                    <p className="text-xs text-green-300">✓ Exceptional</p>
                  </div>

                  <div className="bg-blue-500/20 rounded-lg p-4 text-center border border-blue-500/40">
                    <p className="text-xs text-gray-400 mb-1">Payback Period</p>
                    <p className="text-3xl font-black text-blue-400 mb-1">18 Days</p>
                    <p className="text-xs text-blue-300">✓ Profitable M1</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom insight */}
            <div className="bg-gradient-to-r from-green-500/30 to-green-500/10 rounded-xl px-6 py-4 border-2 border-green-500/50 max-w-3xl text-center">
              <p className="text-base font-bold text-white">
                Every user generates <span className="text-green-400">AED 67.50/month</span> gross margin.
                We recover CAC in <span className="text-green-400">18 days</span>.
                This is <span className="text-[#c9a227]">capital efficient growth</span>.
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 9: GO-TO-MARKET ====================
      case 8:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">Go-to-Market Strategy</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
              10 Acquisition Channels
            </h2>
            <p className="text-base text-gray-400 mb-8 text-center max-w-3xl">
              Blended CAC: <span className="text-[#c9a227] font-bold">AED 18-22</span> • Not dependent on expensive paid ads
            </p>

            {/* Channel table */}
            <div className="max-w-5xl w-full mb-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#c9a227]/40">
                    <th className="text-left py-3 px-4 text-[#c9a227]">CHANNEL</th>
                    <th className="text-center py-3 px-4 text-[#c9a227]">CAC</th>
                    <th className="text-center py-3 px-4 text-[#c9a227]">MONTHLY VOLUME</th>
                    <th className="text-left py-3 px-4 text-[#c9a227]">STATUS</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4">🎓 College Fests</td>
                    <td className="text-center py-3 px-4 font-bold text-white">AED 80</td>
                    <td className="text-center py-3 px-4 font-bold text-blue-400">5,000</td>
                    <td className="py-3 px-4"><span className="bg-blue-500/20 px-2 py-1 rounded text-xs text-blue-400">Pilot Feb</span></td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4">👥 Student Ambassadors</td>
                    <td className="text-center py-3 px-4 font-bold text-white">AED 5</td>
                    <td className="text-center py-3 px-4 font-bold text-blue-400">8,000</td>
                    <td className="py-3 px-4"><span className="bg-green-500/20 px-2 py-1 rounded text-xs text-green-400">M1-3</span></td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4">💼 Employee Partnerships</td>
                    <td className="text-center py-3 px-4 font-bold text-white">AED 5</td>
                    <td className="text-center py-3 px-4 font-bold text-blue-400">800</td>
                    <td className="py-3 px-4"><span className="bg-green-500/20 px-2 py-1 rounded text-xs text-green-400">M1-3</span></td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4">📦 Co-brand Packaging</td>
                    <td className="text-center py-3 px-4 font-bold text-green-400">AED 0</td>
                    <td className="text-center py-3 px-4 font-bold text-blue-400">9,000</td>
                    <td className="py-3 px-4"><span className="bg-purple-500/20 px-2 py-1 rounded text-xs text-purple-400">M4-6</span></td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4">🏪 Fleamarkets</td>
                    <td className="text-center py-3 px-4 font-bold text-white">AED 15</td>
                    <td className="text-center py-3 px-4 font-bold text-blue-400">1,500</td>
                    <td className="py-3 px-4"><span className="bg-green-500/20 px-2 py-1 rounded text-xs text-green-400">M1-3</span></td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4">🎪 Signature Events</td>
                    <td className="text-center py-3 px-4 font-bold text-white">AED 25</td>
                    <td className="text-center py-3 px-4 font-bold text-blue-400">500</td>
                    <td className="py-3 px-4"><span className="bg-purple-500/20 px-2 py-1 rounded text-xs text-purple-400">M4-6</span></td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4">📹 Content Campaigns</td>
                    <td className="text-center py-3 px-4 font-bold text-white">AED 12</td>
                    <td className="text-center py-3 px-4 font-bold text-blue-400">5,000</td>
                    <td className="py-3 px-4"><span className="bg-green-500/20 px-2 py-1 rounded text-xs text-green-400">M1-3</span></td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4">🏏 Sports/IPL Campaigns</td>
                    <td className="text-center py-3 px-4 font-bold text-white">AED 15</td>
                    <td className="text-center py-3 px-4 font-bold text-blue-400">2,000</td>
                    <td className="py-3 px-4"><span className="bg-purple-500/20 px-2 py-1 rounded text-xs text-purple-400">M4-6</span></td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4">🌱 Social Impact (Donate & Earn)</td>
                    <td className="text-center py-3 px-4 font-bold text-white">AED 10</td>
                    <td className="text-center py-3 px-4 font-bold text-blue-400">1,000</td>
                    <td className="py-3 px-4"><span className="bg-purple-500/20 px-2 py-1 rounded text-xs text-purple-400">M7-12</span></td>
                  </tr>
                  <tr className="border-b-2 border-[#c9a227]/40">
                    <td className="py-3 px-4">💰 Paid Ads (Meta/Google)</td>
                    <td className="text-center py-3 px-4 font-bold text-orange-400">AED 50</td>
                    <td className="text-center py-3 px-4 font-bold text-blue-400">5,000</td>
                    <td className="py-3 px-4"><span className="bg-green-500/20 px-2 py-1 rounded text-xs text-green-400">M1-3</span></td>
                  </tr>
                  <tr className="bg-[#c9a227]/10">
                    <td className="py-4 px-4 font-bold text-[#c9a227]">TOTAL</td>
                    <td className="text-center py-4 px-4 font-bold text-[#c9a227]">AED 18-22</td>
                    <td className="text-center py-4 px-4 font-bold text-[#c9a227]">~38,000/mo</td>
                    <td className="py-4 px-4 font-bold text-[#c9a227]">Year 1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Phase rollout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
              <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/30 text-center">
                <p className="text-sm text-green-400 font-bold mb-2">MONTH 1-3</p>
                <p className="text-xs text-gray-300">Prove 3 core channels<br />(Fests, Ambassadors, Ads)</p>
              </div>
              <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30 text-center">
                <p className="text-sm text-purple-400 font-bold mb-2">MONTH 4-6</p>
                <p className="text-xs text-gray-300">Scale to 7 channels<br />(Add packaging, events)</p>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/30 text-center">
                <p className="text-sm text-blue-400 font-bold mb-2">MONTH 7-12</p>
                <p className="text-xs text-gray-300">All 10 channels live<br />(Full distribution)</p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 10: COMPETITIVE MOAT ====================
      case 9:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">Competitive Moat</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
              7 Defensive Moats
            </h2>
            <p className="text-base text-gray-400 mb-8 text-center max-w-3xl">
              POS lock-in gives us <span className="text-[#c9a227] font-bold">12-18 month head start</span> on Careem/Noon
            </p>

            {/* Castle visualization */}
            <div className="max-w-3xl w-full mb-8">
              <div className="space-y-3">
                {/* Layer 7: Data Moat */}
                <div className="bg-gradient-to-r from-purple-500/30 to-purple-500/10 rounded-xl p-4 border-2 border-purple-500/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-purple-400">7. Data Moat</h3>
                      <p className="text-sm text-gray-300">Full merchant sales data → Strategic asset</p>
                    </div>
                    <span className="text-sm text-purple-400 font-bold">Year 3+</span>
                  </div>
                </div>

                {/* Layer 6: Media Brand */}
                <div className="bg-gradient-to-r from-blue-500/30 to-blue-500/10 rounded-xl p-4 border-2 border-blue-500/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-blue-400">6. Media Brand</h3>
                      <p className="text-sm text-gray-300">Content hub (sports, entertainment) → Lifestyle brand</p>
                    </div>
                    <span className="text-sm text-blue-400 font-bold">Year 2+</span>
                  </div>
                </div>

                {/* Layer 5: Event Infrastructure */}
                <div className="bg-gradient-to-r from-pink-500/30 to-pink-500/10 rounded-xl p-4 border-2 border-pink-500/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-pink-400">5. Event Infrastructure</h3>
                      <p className="text-sm text-gray-300">Fests, fleamarkets, signature events → Community</p>
                    </div>
                    <span className="text-sm text-pink-400 font-bold">Year 2+</span>
                  </div>
                </div>

                {/* Layer 4: Partnerships */}
                <div className="bg-gradient-to-r from-green-500/30 to-green-500/10 rounded-xl p-4 border-2 border-green-500/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-green-400">4. Partnerships</h3>
                      <p className="text-sm text-gray-300">Students, employees, brands → Network effects</p>
                    </div>
                    <span className="text-sm text-green-400 font-bold">Year 1+</span>
                  </div>
                </div>

                {/* Layer 3: Engagement */}
                <div className="bg-gradient-to-r from-orange-500/30 to-orange-500/10 rounded-xl p-4 border-2 border-orange-500/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-orange-400">3. Daily Engagement</h3>
                      <p className="text-sm text-gray-300">Habit loops, leaderboard → 20-30 opens/month</p>
                    </div>
                    <span className="text-sm text-orange-400 font-bold">Month 6+</span>
                  </div>
                </div>

                {/* Layer 2: Variable Commission */}
                <div className="bg-gradient-to-r from-yellow-500/30 to-yellow-500/10 rounded-xl p-4 border-2 border-yellow-500/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-yellow-400">2. Variable Commission</h3>
                      <p className="text-sm text-gray-300">Merchants pay for value → Retention</p>
                    </div>
                    <span className="text-sm text-yellow-400 font-bold">Month 3+</span>
                  </div>
                </div>

                {/* Layer 1: POS Lock-In (THE MOAT) */}
                <div className="bg-gradient-to-r from-[#c9a227]/40 to-[#c9a227]/20 rounded-xl p-5 border-4 border-[#c9a227]/70 relative">
                  <div className="absolute -top-3 left-4 bg-[#0a1628] px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-[#c9a227]">HARDEST TO COPY</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#c9a227]">1. POS Lock-In 🔒</h3>
                      <p className="text-sm text-gray-200">FREE POS + inventory → Merchant switching cost = Very High</p>
                    </div>
                    <span className="text-sm text-[#c9a227] font-bold">Month 3+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/30">
                <h4 className="font-bold text-red-400 mb-2">Competitors</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Post-purchase (passive)</li>
                  <li>• App only (no ecosystem)</li>
                  <li>• Single moat</li>
                  <li>• Easy to switch</li>
                </ul>
              </div>
              <div className="bg-[#c9a227]/10 rounded-xl p-4 border border-[#c9a227]/30">
                <h4 className="font-bold text-[#c9a227] mb-2">Nuqta</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Pre-purchase (active)</li>
                  <li>• Super-app ecosystem</li>
                  <li>• 7 compounding moats</li>
                  <li>• High switching cost</li>
                </ul>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 11: TEAM ====================
      case 10:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">Team</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
              The Rare <span className="text-[#c9a227]">"Builder + Marketer"</span> Founder
            </h2>
            <p className="text-base text-gray-400 mb-8 text-center max-w-3xl">
              Most founders have 1 skill. Rejaul has all 3 + already executed.
            </p>

            {/* 3-pillar structure */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mb-8">
              {/* Pillar 1: Can BUILD */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-2xl p-6 border-2 border-blue-500/40 text-center">
                <div className="w-20 h-20 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl">💻</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">CAN BUILD</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>✓ Ex-CTO of Cybersecurity Firm</p>
                  <p>✓ Built Nuqta MVP In-House</p>
                  <p>✓ Product 95% Complete</p>
                  <p>✓ Technical + Strategic Vision</p>
                </div>
              </div>

              {/* Pillar 2: Can GROW */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-2xl p-6 border-2 border-green-500/40 text-center">
                <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-3">CAN GROW</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>✓ 7 Years Growth Marketing</p>
                  <p>✓ AED 2M+ Spent on Meta Ads</p>
                  <p>✓ Proven CAC Optimization</p>
                  <p>✓ Marketing Agency Founder</p>
                </div>
              </div>

              {/* Pillar 3: Can ACTIVATE */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl p-6 border-2 border-[#c9a227]/40 text-center">
                <div className="w-20 h-20 mx-auto bg-[#c9a227] rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-[#c9a227] mb-3">CAN ACTIVATE</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>✓ Marketing Agency CEO</p>
                  <p>✓ 50+ UAE Clients</p>
                  <p>✓ Network → 30 Signed Contracts</p>
                  <p>✓ Can Onboard Merchants Fast</p>
                </div>
              </div>
            </div>

            {/* Team assembled */}
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-2xl p-6 border-2 border-purple-500/40 max-w-4xl w-full mb-6">
              <h3 className="text-lg font-bold text-purple-400 mb-4 text-center">6-Person Team Assembled</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div className="text-center">
                  <p className="font-bold text-white mb-1">CHRO</p>
                  <p className="text-xs">3 yrs • Ex-Founder (EdTech)</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-white mb-1">CMO</p>
                  <p className="text-xs">5 yrs • Ex-Founder (E-commerce)</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-white mb-1">2 Developers</p>
                  <p className="text-xs">3 yrs + 1 yr experience</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-white mb-1">Designer</p>
                  <p className="text-xs">3 yrs experience</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-white mb-1">BDA</p>
                  <p className="text-xs">2 yrs experience</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-[#c9a227] mb-1">CEO (Rejaul)</p>
                  <p className="text-xs">Builder + Grower</p>
                </div>
              </div>
            </div>

            {/* Bottom callout */}
            <div className="bg-gradient-to-r from-[#c9a227]/30 to-[#c9a227]/10 rounded-xl px-6 py-4 border-2 border-[#c9a227]/50 max-w-3xl text-center">
              <p className="text-base font-bold text-white">
                Fully Committed • Bootstrapped to Date • Team Risk = <span className="text-green-400">Zero</span>
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 12: THE ASK ====================
      case 11:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">The Ask</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
              Raising <span className="text-[#c9a227]">AED 1.85M</span>
            </h2>

            {/* Main ask details */}
            <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-3xl p-8 border-2 border-[#c9a227]/50 max-w-2xl w-full mb-8 text-center">
              <p className="text-sm text-gray-400 mb-2">USD Equivalent</p>
              <p className="text-5xl sm:text-6xl font-black text-[#c9a227] mb-4">$500K</p>
              <div className="w-full h-px bg-[#c9a227]/30 mb-4"></div>
              <p className="text-sm text-gray-400 mb-1">Pre-Money Valuation</p>
              <p className="text-2xl sm:text-3xl font-bold text-white">AED 18.5M ($5M USD)</p>
            </div>

            {/* Use of funds - 3 bars */}
            <div className="max-w-3xl w-full mb-8">
              <h3 className="text-lg font-bold text-center mb-4 text-gray-300">Use of Funds</h3>

              {/* Bar 1: Go-to-Market */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Go-to-Market (CAC)</span>
                  <span className="text-lg font-bold text-blue-400">60%</span>
                </div>
                <div className="w-full bg-[#1a2a42] rounded-full h-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-4 rounded-full flex items-center justify-end px-3" style={{width: '60%'}}>
                    <span className="text-xs font-bold text-white">AED 1.11M</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-1">User acquisition across 10 channels • Target 50K users Year 1</p>
              </div>

              {/* Bar 2: Team Expansion */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Team Expansion</span>
                  <span className="text-lg font-bold text-green-400">25%</span>
                </div>
                <div className="w-full bg-[#1a2a42] rounded-full h-4">
                  <div className="bg-gradient-to-r from-green-500 to-green-400 h-4 rounded-full flex items-center justify-end px-3" style={{width: '25%'}}>
                    <span className="text-xs font-bold text-white">AED 462K</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-1">Growth lead, 2 developers, merchant success manager</p>
              </div>

              {/* Bar 3: Product & Ops */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Product Launch & Ops</span>
                  <span className="text-lg font-bold text-[#c9a227]">15%</span>
                </div>
                <div className="w-full bg-[#1a2a42] rounded-full h-4">
                  <div className="bg-gradient-to-r from-[#c9a227] to-yellow-600 h-4 rounded-full flex items-center justify-end px-3" style={{width: '15%'}}>
                    <span className="text-xs font-bold text-black">AED 277K</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-1">Final 5% product completion, infrastructure, merchant onboarding</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full mb-8">
              <div className="bg-[#1a2a42]/50 rounded-xl p-4 border border-[#c9a227]/30 text-center">
                <p className="text-xs text-gray-400 mb-1">Target Close</p>
                <p className="text-lg font-bold text-[#c9a227]">Q1 2026</p>
              </div>
              <div className="bg-[#1a2a42]/50 rounded-xl p-4 border border-green-500/30 text-center">
                <p className="text-xs text-gray-400 mb-1">Product Launch</p>
                <p className="text-lg font-bold text-green-400">30 Days Post</p>
              </div>
              <div className="bg-[#1a2a42]/50 rounded-xl p-4 border border-blue-500/30 text-center">
                <p className="text-xs text-gray-400 mb-1">Series A Target</p>
                <p className="text-lg font-bold text-blue-400">Q4 2026</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#c9a227]/30 to-[#c9a227]/10 rounded-xl px-8 py-5 border-2 border-[#c9a227]/50 max-w-2xl text-center">
              <p className="text-base sm:text-lg font-bold text-white mb-3">
                Let's Build the Smart Shopping Super-App for UAE
              </p>
              <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-300 justify-center">
                <p>📧 Contact: [Your Email]</p>
                <span className="hidden sm:inline text-gray-600">|</span>
                <p>🔗 Full Deck: [Link]</p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 13: BUSINESS MODEL ====================
      case 12:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">Business Model</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
              How We Make Money
            </h2>
            <p className="text-base text-gray-400 mb-8 text-center max-w-3xl">
              Blended Take Rate: <span className="text-[#c9a227] font-bold">23.5%</span> of GMV • Diversified across 5 revenue streams
            </p>

            {/* Revenue breakdown - horizontal bars */}
            <div className="max-w-4xl w-full space-y-4 mb-8">
              {/* Stream 1: Merchant Commission */}
              <div className="bg-gradient-to-r from-blue-500/20 to-transparent rounded-xl p-4 border border-blue-500/40">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-blue-400">Merchant Commission</h3>
                  <span className="text-2xl font-black text-blue-400">60%</span>
                </div>
                <div className="w-full bg-[#1a2a42] rounded-full h-3 mb-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full" style={{width: '60%'}}></div>
                </div>
                <p className="text-sm text-gray-300 mb-1">AED 87.50/user/month</p>
                <p className="text-xs text-gray-400">15-20% commission on AED 500 GMV (blended avg 17.5%)</p>
              </div>

              {/* Stream 2: Payment Routing */}
              <div className="bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl p-4 border border-purple-500/40">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-purple-400">Payment Routing Fees</h3>
                  <span className="text-2xl font-black text-purple-400">15%</span>
                </div>
                <div className="w-full bg-[#1a2a42] rounded-full h-3 mb-2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-3 rounded-full" style={{width: '15%'}}></div>
                </div>
                <p className="text-sm text-gray-300 mb-1">AED 11.25/user/month</p>
                <p className="text-xs text-gray-400">Banks/BNPLs pay AED 2-3 per routed transaction</p>
              </div>

              {/* Stream 3: Promoted Listings */}
              <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-xl p-4 border border-[#c9a227]/40">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-[#c9a227]">Promoted Listings</h3>
                  <span className="text-2xl font-black text-[#c9a227]">15%</span>
                </div>
                <div className="w-full bg-[#1a2a42] rounded-full h-3 mb-2">
                  <div className="bg-gradient-to-r from-[#c9a227] to-yellow-600 h-3 rounded-full" style={{width: '15%'}}></div>
                </div>
                <p className="text-sm text-gray-300 mb-1">AED 11.25/user/month</p>
                <p className="text-xs text-gray-400">Merchants pay AED 500-2,000/month for visibility</p>
              </div>

              {/* Stream 4: Branded Coins */}
              <div className="bg-gradient-to-r from-green-500/20 to-transparent rounded-xl p-4 border border-green-500/40">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-green-400">Branded Coin Sales</h3>
                  <span className="text-2xl font-black text-green-400">5%</span>
                </div>
                <div className="w-full bg-[#1a2a42] rounded-full h-3 mb-2">
                  <div className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full" style={{width: '5%'}}></div>
                </div>
                <p className="text-sm text-gray-300 mb-1">AED 3.75/user/month</p>
                <p className="text-xs text-gray-400">Merchants buy coins to distribute as loyalty rewards</p>
              </div>

              {/* Stream 5: Transaction Fees */}
              <div className="bg-gradient-to-r from-pink-500/20 to-transparent rounded-xl p-4 border border-pink-500/40">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-pink-400">Transaction Fees</h3>
                  <span className="text-2xl font-black text-pink-400">5%</span>
                </div>
                <div className="w-full bg-[#1a2a42] rounded-full h-3 mb-2">
                  <div className="bg-gradient-to-r from-pink-500 to-pink-400 h-3 rounded-full" style={{width: '5%'}}></div>
                </div>
                <p className="text-sm text-gray-300 mb-1">AED 3.75/user/month</p>
                <p className="text-xs text-gray-400">1-2% on facilitated bookings/transactions</p>
              </div>
            </div>

            {/* Total revenue summary */}
            <div className="bg-gradient-to-r from-[#c9a227]/30 to-[#c9a227]/10 rounded-xl px-8 py-5 border-2 border-[#c9a227]/50 max-w-3xl text-center">
              <p className="text-sm text-gray-400 mb-2">TOTAL REVENUE PER USER (MONTHLY)</p>
              <p className="text-4xl sm:text-5xl font-black text-[#c9a227] mb-2">AED 117.50</p>
              <p className="text-sm text-gray-300">Based on AED 500 monthly GMV per user (5 transactions × AED 100)</p>
            </div>
          </div>
        );

      // ==================== SLIDE 14: UNIT ECONOMICS ====================
      case 13:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">Unit Economics</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
              Profitable from <span className="text-green-400">Month 1</span>
            </h2>
            <p className="text-base text-gray-400 mb-8 text-center max-w-3xl">
              Industry benchmark LTV:CAC = 3:1 • Nuqta = <span className="text-[#c9a227] font-bold">56.8:1</span>
            </p>

            {/* Flow chart */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl w-full mb-6">
              {/* Left: User Behavior */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-2xl p-5 border-2 border-blue-500/40">
                <h3 className="text-lg font-bold text-blue-400 mb-4 text-center">USER BEHAVIOR</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-[#1a2a42]/50 rounded-lg p-3">
                    <p className="text-gray-400 text-xs mb-1">Transactions/Month</p>
                    <p className="text-2xl font-bold text-white">5</p>
                  </div>
                  <div className="bg-[#1a2a42]/50 rounded-lg p-3">
                    <p className="text-gray-400 text-xs mb-1">Average Transaction</p>
                    <p className="text-2xl font-bold text-white">AED 100</p>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-500/40">
                    <p className="text-gray-400 text-xs mb-1">Monthly GMV/User</p>
                    <p className="text-3xl font-black text-blue-400">AED 500</p>
                  </div>
                </div>
              </div>

              {/* Middle: Revenue & Costs */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl p-5 border-2 border-[#c9a227]/40">
                <h3 className="text-lg font-bold text-[#c9a227] mb-4 text-center">REVENUE & COSTS</h3>

                {/* Revenue */}
                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-2">Revenue (Monthly)</p>
                  <div className="space-y-1 text-xs">
                    <p className="flex justify-between"><span>Merchant Commission:</span><span className="text-white">AED 87.50</span></p>
                    <p className="flex justify-between"><span>Payment Routing:</span><span className="text-white">AED 11.25</span></p>
                    <p className="flex justify-between"><span>Promoted Listings:</span><span className="text-white">AED 11.25</span></p>
                    <p className="flex justify-between"><span>Branded Coins:</span><span className="text-white">AED 3.75</span></p>
                    <p className="flex justify-between"><span>Transaction Fees:</span><span className="text-white">AED 3.75</span></p>
                  </div>
                  <div className="bg-[#c9a227]/20 rounded-lg p-2 mt-2">
                    <p className="flex justify-between font-bold"><span>Total Revenue:</span><span className="text-[#c9a227]">AED 117.50</span></p>
                  </div>
                </div>

                {/* Costs */}
                <div>
                  <p className="text-xs text-gray-400 mb-2">Costs (Monthly)</p>
                  <div className="space-y-1 text-xs">
                    <p className="flex justify-between"><span>Cashback (7.5%):</span><span className="text-white">AED 37.50</span></p>
                    <p className="flex justify-between"><span>Social Bonus:</span><span className="text-white">AED 5.00</span></p>
                    <p className="flex justify-between"><span>Nuqta Coins:</span><span className="text-white">AED 2.50</span></p>
                    <p className="flex justify-between"><span>Tech/Ops:</span><span className="text-white">AED 5.00</span></p>
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-2 mt-2">
                    <p className="flex justify-between font-bold"><span>Total Costs:</span><span className="text-red-400">AED 50.00</span></p>
                  </div>
                </div>

                {/* Margin */}
                <div className="bg-green-500/20 rounded-lg p-3 mt-3 border border-green-500/40">
                  <p className="text-xs text-gray-400 mb-1">Gross Margin/User</p>
                  <p className="text-2xl font-black text-green-400">AED 67.50</p>
                  <p className="text-xs text-gray-400">(57% margin)</p>
                </div>
              </div>

              {/* Right: Key Metrics */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-2xl p-5 border-2 border-green-500/40">
                <h3 className="text-lg font-bold text-green-400 mb-4 text-center">KEY METRICS</h3>
                <div className="space-y-4">
                  <div className="bg-[#1a2a42]/50 rounded-lg p-4 text-center">
                    <p className="text-xs text-gray-400 mb-1">Blended CAC</p>
                    <p className="text-3xl font-black text-white mb-1">AED 28.50</p>
                    <p className="text-xs text-gray-500">Across 10 channels</p>
                  </div>

                  <div className="bg-[#1a2a42]/50 rounded-lg p-4 text-center">
                    <p className="text-xs text-gray-400 mb-1">LTV (24 months)</p>
                    <p className="text-3xl font-black text-white mb-1">AED 1,620</p>
                    <p className="text-xs text-gray-500">4% monthly churn</p>
                  </div>

                  <div className="bg-green-500/30 rounded-lg p-4 text-center border-2 border-green-500/50">
                    <p className="text-xs text-gray-400 mb-1">LTV:CAC Ratio</p>
                    <p className="text-4xl font-black text-green-400 mb-1">56.8:1</p>
                    <p className="text-xs text-green-300">✓ Exceptional</p>
                  </div>

                  <div className="bg-blue-500/20 rounded-lg p-4 text-center border border-blue-500/40">
                    <p className="text-xs text-gray-400 mb-1">Payback Period</p>
                    <p className="text-3xl font-black text-blue-400 mb-1">18 Days</p>
                    <p className="text-xs text-blue-300">✓ Profitable M1</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom insight */}
            <div className="bg-gradient-to-r from-green-500/30 to-green-500/10 rounded-xl px-6 py-4 border-2 border-green-500/50 max-w-3xl text-center">
              <p className="text-base font-bold text-white">
                Every user generates <span className="text-green-400">AED 67.50/month</span> gross margin.
                We recover CAC in <span className="text-green-400">18 days</span>.
                This is <span className="text-[#c9a227]">capital efficient growth</span>.
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 15: GO-TO-MARKET ====================
      case 14:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">Go-to-Market Strategy</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
              10 Acquisition Channels
            </h2>
            <p className="text-base text-gray-400 mb-8 text-center max-w-3xl">
              Blended CAC: <span className="text-[#c9a227] font-bold">AED 18-22</span> • Not dependent on expensive paid ads
            </p>

            {/* Channel table - simplified for space */}
            <div className="max-w-5xl w-full mb-6 overflow-x-auto">
              <div className="bg-[#1a2a42]/50 rounded-2xl p-6 border border-[#c9a227]/30">
                <p className="text-center text-gray-300 mb-4">10 diversified channels including College Fests, Student Ambassadors, Employee Partnerships, Co-brand Packaging, Fleamarkets, Signature Events, Content Campaigns, Sports/IPL, Social Impact, and Paid Ads</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300">
                  <div className="text-center">
                    <p className="text-2xl mb-1">🎓</p>
                    <p className="font-bold text-white">College Fests</p>
                    <p className="text-xs text-gray-400">AED 80 CAC • 5K/mo</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl mb-1">👥</p>
                    <p className="font-bold text-white">Ambassadors</p>
                    <p className="text-xs text-gray-400">AED 5 CAC • 8K/mo</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl mb-1">💼</p>
                    <p className="font-bold text-white">Employee Programs</p>
                    <p className="text-xs text-gray-400">AED 5 CAC • 800/mo</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl mb-1">📦</p>
                    <p className="font-bold text-white">Co-branding</p>
                    <p className="text-xs text-gray-400">AED 0 CAC • 9K/mo</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl mb-1">📹</p>
                    <p className="font-bold text-white">Content</p>
                    <p className="text-xs text-gray-400">AED 12 CAC • 5K/mo</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl mb-1">💰</p>
                    <p className="font-bold text-white">Paid Ads</p>
                    <p className="text-xs text-gray-400">AED 50 CAC • 5K/mo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#c9a227]/30 to-[#c9a227]/10 rounded-xl px-6 py-4 border-2 border-[#c9a227]/50 max-w-3xl text-center">
              <p className="text-base font-bold text-white">
                Target: <span className="text-[#c9a227]">38,000 users/month</span> at AED 18-22 blended CAC
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 16: TRACTION (HERO SLIDE) ====================
      case 15:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">Traction</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
              Already Executed <span className="text-[#c9a227]">Pre-Launch</span>
            </h2>
            <p className="text-base text-gray-400 mb-6 text-center max-w-3xl">
              Most pre-seed startups are idea-stage. We're <span className="text-[#c9a227] font-bold">execution-stage.</span>
            </p>

            {/* 4-quadrant dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl w-full mb-6">
              {/* Quadrant 1: Product */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-2xl p-5 border-2 border-blue-500/40">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">📦</span>
                  <h3 className="text-xl font-bold text-blue-400">PRODUCT</h3>
                </div>
                <div className="mb-4">
                  <p className="text-5xl font-black text-white mb-1">95%</p>
                  <p className="text-sm text-gray-300">Complete • 30 Days to Launch</p>
                </div>
                <div className="space-y-1 text-sm">
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Discovery Layer Built</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Booking System Ready</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Payment Intelligence Live</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Dual Rewards Engine</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> FREE POS System (Merchant Lock-In)</p>
                </div>
              </div>

              {/* Quadrant 2: Merchants */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-2xl p-5 border-2 border-green-500/40">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🤝</span>
                  <h3 className="text-xl font-bold text-green-400">MERCHANTS</h3>
                </div>
                <div className="mb-4">
                  <p className="text-5xl font-black text-white mb-1">30</p>
                  <p className="text-sm text-gray-300">SIGNED CONTRACTS (Legal Binding)</p>
                </div>
                <div className="space-y-1 text-sm">
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Not MOUs - Actual Contracts</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Ready to Launch Day One</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Cross 5 Sectors (F&B, Retail, Services, etc.)</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> AED 12M Annual GMV Potential</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> 10 Committed to POS Beta</p>
                </div>
              </div>

              {/* Quadrant 3: Team */}
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-2xl p-5 border-2 border-purple-500/40">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">👥</span>
                  <h3 className="text-xl font-bold text-purple-400">TEAM</h3>
                </div>
                <div className="mb-4">
                  <p className="text-5xl font-black text-white mb-1">6</p>
                  <p className="text-sm text-gray-300">People Assembled • Ready to Execute</p>
                </div>
                <div className="space-y-1 text-sm">
                  <p className="flex items-center gap-2"><span className="text-purple-400">✓</span> CHRO (3 yrs exp, ex-founder edtech)</p>
                  <p className="flex items-center gap-2"><span className="text-purple-400">✓</span> CMO (5 yrs exp, ex-founder e-commerce)</p>
                  <p className="flex items-center gap-2"><span className="text-purple-400">✓</span> 2 Full-Time Developers (3yr + 1yr exp)</p>
                  <p className="flex items-center gap-2"><span className="text-purple-400">✓</span> Graphic Designer (3 yrs exp)</p>
                  <p className="flex items-center gap-2"><span className="text-purple-400">✓</span> BDA (2 yrs exp)</p>
                </div>
              </div>

              {/* Quadrant 4: Validation */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl p-5 border-2 border-[#c9a227]/40">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">📈</span>
                  <h3 className="text-xl font-bold text-[#c9a227]">VALIDATION</h3>
                </div>
                <div className="mb-4">
                  <p className="text-5xl font-black text-white mb-1">200+</p>
                  <p className="text-sm text-gray-300">Waitlist Users • Growing Daily</p>
                </div>
                <div className="space-y-1 text-sm">
                  <p className="flex items-center gap-2"><span className="text-[#c9a227]">✓</span> 50+ UAE Clients (Founder Network)</p>
                  <p className="flex items-center gap-2"><span className="text-[#c9a227]">✓</span> Pilot QR Scans: 80% Success Rate</p>
                  <p className="flex items-center gap-2"><span className="text-[#c9a227]">✓</span> First College Fest Planned (Feb 2026)</p>
                  <p className="flex items-center gap-2"><span className="text-[#c9a227]">✓</span> 5 Merchants Ready for POS Beta</p>
                  <p className="flex items-center gap-2"><span className="text-[#c9a227]">✓</span> 3 Employee Partnership MOUs</p>
                </div>
              </div>
            </div>

            {/* Bottom banner */}
            <div className="bg-gradient-to-r from-[#c9a227]/30 to-[#c9a227]/10 rounded-xl px-6 py-4 border-2 border-[#c9a227]/50 max-w-4xl text-center">
              <p className="text-base sm:text-lg font-bold text-white mb-2">
                💰 Bootstrapped: <span className="text-[#c9a227]">AED 0 Raised</span> | Built with Founder Capital
              </p>
              <p className="text-sm text-gray-300">
                🎯 Execution Risk: <span className="text-green-400 font-bold">ELIMINATED</span> (Product + Merchants + Team = Ready)
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 17: TEAM ====================
      case 16:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">Team</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
              The Rare <span className="text-[#c9a227]">"Builder + Marketer"</span> Founder
            </h2>
            <p className="text-base text-gray-400 mb-8 text-center max-w-3xl">
              Most founders have 1 skill. Rejaul has all 3 + already executed.
            </p>

            {/* 3-pillar structure */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mb-8">
              {/* Pillar 1: Can BUILD */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-2xl p-6 border-2 border-blue-500/40 text-center">
                <div className="w-20 h-20 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl">💻</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">CAN BUILD</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>✓ Ex-CTO of Cybersecurity Firm</p>
                  <p>✓ Built Nuqta MVP In-House</p>
                  <p>✓ Product 95% Complete</p>
                  <p>✓ Technical + Strategic Vision</p>
                </div>
              </div>

              {/* Pillar 2: Can GROW */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-2xl p-6 border-2 border-green-500/40 text-center">
                <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-3">CAN GROW</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>✓ 7 Years Growth Marketing</p>
                  <p>✓ AED 2M+ Spent on Meta Ads</p>
                  <p>✓ Proven CAC Optimization</p>
                  <p>✓ Marketing Agency Founder</p>
                </div>
              </div>

              {/* Pillar 3: Can ACTIVATE */}
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl p-6 border-2 border-[#c9a227]/40 text-center">
                <div className="w-20 h-20 mx-auto bg-[#c9a227] rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-[#c9a227] mb-3">CAN ACTIVATE</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>✓ Marketing Agency CEO</p>
                  <p>✓ 50+ UAE Clients</p>
                  <p>✓ Network → 30 Signed Contracts</p>
                  <p>✓ Can Onboard Merchants Fast</p>
                </div>
              </div>
            </div>

            {/* Team assembled */}
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-2xl p-6 border-2 border-purple-500/40 max-w-4xl w-full mb-6">
              <h3 className="text-lg font-bold text-purple-400 mb-4 text-center">6-Person Team Assembled</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div className="text-center">
                  <p className="font-bold text-white mb-1">CHRO</p>
                  <p className="text-xs">3 yrs • Ex-Founder (EdTech)</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-white mb-1">CMO</p>
                  <p className="text-xs">5 yrs • Ex-Founder (E-commerce)</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-white mb-1">2 Developers</p>
                  <p className="text-xs">3 yrs + 1 yr experience</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-white mb-1">Designer</p>
                  <p className="text-xs">3 yrs experience</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-white mb-1">BDA</p>
                  <p className="text-xs">2 yrs experience</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-[#c9a227] mb-1">CEO (Rejaul)</p>
                  <p className="text-xs">Builder + Grower</p>
                </div>
              </div>
            </div>

            {/* Bottom callout */}
            <div className="bg-gradient-to-r from-[#c9a227]/30 to-[#c9a227]/10 rounded-xl px-6 py-4 border-2 border-[#c9a227]/50 max-w-3xl text-center">
              <p className="text-base font-bold text-white">
                Fully Committed • Bootstrapped to Date • Team Risk = <span className="text-green-400">Zero</span>
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 18: THE ASK ====================
      case 17:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <p className="text-[#c9a227] text-xs sm:text-sm uppercase tracking-wider mb-2">The Ask</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
              Raising <span className="text-[#c9a227]">AED 1.85M</span>
            </h2>

            {/* Main ask details */}
            <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-3xl p-8 border-2 border-[#c9a227]/50 max-w-2xl w-full mb-8 text-center">
              <p className="text-sm text-gray-400 mb-2">USD Equivalent</p>
              <p className="text-5xl sm:text-6xl font-black text-[#c9a227] mb-4">$500K</p>
              <div className="w-full h-px bg-[#c9a227]/30 mb-4"></div>
              <p className="text-sm text-gray-400 mb-1">Pre-Money Valuation</p>
              <p className="text-2xl sm:text-3xl font-bold text-white">AED 18.5M ($5M USD)</p>
            </div>

            {/* Use of funds - 3 bars */}
            <div className="max-w-3xl w-full mb-8">
              <h3 className="text-lg font-bold text-center mb-4 text-gray-300">Use of Funds</h3>

              {/* Bar 1: Go-to-Market */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Go-to-Market (CAC)</span>
                  <span className="text-lg font-bold text-blue-400">60%</span>
                </div>
                <div className="w-full bg-[#1a2a42] rounded-full h-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-4 rounded-full flex items-center justify-end px-3" style={{width: '60%'}}>
                    <span className="text-xs font-bold text-white">AED 1.11M</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-1">User acquisition across 10 channels • Target 50K users Year 1</p>
              </div>

              {/* Bar 2: Team Expansion */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Team Expansion</span>
                  <span className="text-lg font-bold text-green-400">25%</span>
                </div>
                <div className="w-full bg-[#1a2a42] rounded-full h-4">
                  <div className="bg-gradient-to-r from-green-500 to-green-400 h-4 rounded-full flex items-center justify-end px-3" style={{width: '25%'}}>
                    <span className="text-xs font-bold text-white">AED 462K</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-1">Growth lead, 2 developers, merchant success manager</p>
              </div>

              {/* Bar 3: Product & Ops */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Product Launch & Ops</span>
                  <span className="text-lg font-bold text-[#c9a227]">15%</span>
                </div>
                <div className="w-full bg-[#1a2a42] rounded-full h-4">
                  <div className="bg-gradient-to-r from-[#c9a227] to-yellow-600 h-4 rounded-full flex items-center justify-end px-3" style={{width: '15%'}}>
                    <span className="text-xs font-bold text-black">AED 277K</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-1">Final 5% product completion, infrastructure, merchant onboarding</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full mb-8">
              <div className="bg-[#1a2a42]/50 rounded-xl p-4 border border-[#c9a227]/30 text-center">
                <p className="text-xs text-gray-400 mb-1">Target Close</p>
                <p className="text-lg font-bold text-[#c9a227]">Q1 2026</p>
              </div>
              <div className="bg-[#1a2a42]/50 rounded-xl p-4 border border-green-500/30 text-center">
                <p className="text-xs text-gray-400 mb-1">Product Launch</p>
                <p className="text-lg font-bold text-green-400">30 Days Post</p>
              </div>
              <div className="bg-[#1a2a42]/50 rounded-xl p-4 border border-blue-500/30 text-center">
                <p className="text-xs text-gray-400 mb-1">Series A Target</p>
                <p className="text-lg font-bold text-blue-400">Q4 2026</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#c9a227]/30 to-[#c9a227]/10 rounded-xl px-8 py-5 border-2 border-[#c9a227]/50 max-w-2xl text-center">
              <p className="text-base sm:text-lg font-bold text-white mb-3">
                Let's Build the Smart Shopping Super-App for UAE
              </p>
              <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-300 justify-center">
                <p>📧 Contact: [Your Email]</p>
                <span className="hidden sm:inline text-gray-600">|</span>
                <p>🔗 Full Deck: [Link]</p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 19: CLOSING (Optional) ====================
      case 18:
        return (
          <div className="w-full max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 bg-gradient-to-b from-[#0a1628] via-[#0d1c30] to-[#0a1628]">
            {/* Logo */}
            <div className="relative mb-6">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden relative">
                <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain p-4 sm:p-5" />
              </div>
              <div className="absolute -inset-8 sm:-inset-10 bg-[#c9a227]/20 rounded-full blur-3xl -z-10" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
              Thank You
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 font-light">
              Let's build the future of smart shopping in UAE
            </p>

            <div className="bg-[#1a2a42]/50 rounded-xl px-6 py-4 border border-[#c9a227]/30">
              <p className="text-base sm:text-lg text-[#c9a227] font-bold">Ready to raise • Ready to launch • Ready to scale</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0a1628] z-50 overflow-hidden">
      {/* Slide content */}
      <div className="w-full h-full overflow-y-auto">
        {renderSlide()}
      </div>

      {/* Bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628] to-transparent py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Progress */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">
              {currentSlide + 1} / {totalSlides}
            </span>
            <div className="w-32 sm:w-48 bg-[#1a2a42] rounded-full h-2">
              <div
                className="bg-[#c9a227] h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
              disabled={currentSlide === 0}
              className="px-3 py-1.5 bg-[#1a2a42] rounded-lg text-sm text-white hover:bg-[#2a3a52] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              ← Prev
            </button>
            <button
              onClick={() => setCurrentSlide(prev => Math.min(totalSlides - 1, prev + 1))}
              disabled={currentSlide === totalSlides - 1}
              className="px-3 py-1.5 bg-[#c9a227] rounded-lg text-sm text-black font-bold hover:bg-[#d4ae3a] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Next →
            </button>
            <button
              onClick={onClose}
              className="ml-2 px-3 py-1.5 bg-red-500/20 rounded-lg text-sm text-red-400 hover:bg-red-500/30 transition-colors"
            >
              Close (Esc)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
