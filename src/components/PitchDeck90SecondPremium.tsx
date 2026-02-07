'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Zap, Target, Shield, DollarSign, ArrowRight, Sparkles, Users, Store, Repeat, CreditCard, Coins, Calendar, Rocket, AlertCircle, CheckCircle, Search, Gift, XCircle } from 'lucide-react';

/**
 * 90-SECOND PREMIUM INVESTOR PITCH DECK
 *
 * Mobile-friendly design with brand colors: #c9a227 (gold), #0a1628 (dark blue)
 */

const PitchDeck90SecondPremium = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = 7;

  const changeSlide = (newSlide: number) => {
    if (newSlide >= 0 && newSlide < totalSlides && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(newSlide);
        setIsTransitioning(false);
      }, 400);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') changeSlide(currentSlide + 1);
      else if (e.key === 'ArrowLeft') changeSlide(currentSlide - 1);
      else if (e.key === 'Escape') changeSlide(0);
      else if (e.key === ' ') {
        e.preventDefault();
        changeSlide(currentSlide + 1);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isTransitioning]);

  const renderSlide = () => {
    const slideClass = `transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`;

    switch (currentSlide) {
      // ==================== SLIDE 0: COVER ====================
      case 0:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Animated background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-[#c9a227] rounded-full blur-[80px] md:blur-[120px] opacity-30 animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-[#c9a227] rounded-full blur-[80px] md:blur-[120px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px]" />

            <div className="relative z-10 text-center max-w-6xl w-full px-2">
              {/* Logo */}
              <div className="mb-8 sm:mb-12 md:mb-16 animate-[fadeIn_0.8s_ease-out]">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] via-[#d4b03f] to-[#c9a227] blur-2xl md:blur-3xl opacity-50" />
                  <h1 className="relative text-5xl sm:text-7xl md:text-9xl lg:text-[120px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] via-[#d4b03f] to-[#c9a227] leading-none mb-3 sm:mb-6 tracking-tight">
                    NUQTA
                  </h1>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 font-semibold tracking-wide px-2">
                  The Everyday Savings Platform for the Middle East
                </p>
              </div>

              {/* Tagline card */}
              <div className="mb-8 sm:mb-12 md:mb-16 animate-[slideUp_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] rounded-2xl md:rounded-3xl blur-xl opacity-40" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-black mb-2 sm:mb-4 leading-tight">
                      Turning Everyday Spending<br className="hidden sm:block" />
                      <span className="sm:hidden"> </span>Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4b03f]">Compounding Habit</span>
                    </p>
                    <div className="w-16 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] mx-auto my-3 sm:my-4 md:my-6 rounded-full" />
                    <p className="text-lg sm:text-xl md:text-2xl text-[#c9a227] font-bold">
                      Habits Into Defensibility
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 animate-[fadeIn_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { value: '$35B', label: 'UAE Offline Market*', Icon: Target },
                  { value: '32', label: 'Merchant LOIs Signed', Icon: Store },
                  { value: 'Mar 1', label: 'Launch Date 2026', Icon: Rocket }
                ].map((stat, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute inset-0 bg-[#c9a227] rounded-xl md:rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="relative bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 transform group-hover:scale-105 transition-all shadow-xl">
                      <stat.Icon size={36} className="text-[#c9a227] mx-auto sm:mx-0 md:w-[48px] md:h-[48px] lg:w-[60px] lg:h-[60px]" />
                      <p className="text-4xl sm:text-5xl md:text-6xl font-black text-[#c9a227] mb-2 mt-3 sm:mt-4">{stat.value}</p>
                      <p className="text-slate-300 font-semibold text-sm sm:text-base md:text-lg">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Source citation */}
              <p className="text-slate-500 text-xs sm:text-sm mt-6 sm:mt-8 animate-[fadeIn_0.8s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]">
                *Source: Euromonitor 2024, McKinsey GCC Retail Report
              </p>
            </div>
          </div>
        );

      // ==================== SLIDE 1: THE PROBLEM ====================
      case 1:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Animated background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#c9a227] rounded-full blur-[80px] md:blur-[100px] opacity-20 animate-pulse" />
              <div className="absolute bottom-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#c9a227] rounded-full blur-[80px] md:blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-7xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-[slideDown_0.8s_ease-out]">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] blur-2xl md:blur-3xl opacity-40" />
                  <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4b03f] leading-tight mb-2 sm:mb-4">
                    Billions Lost. Zero Loyalty
                  </h1>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 font-bold mt-2 sm:mt-4">The broken commerce equation</p>
              </div>

              {/* Pain cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {/* Consumer Pain */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#c9a227] rounded-2xl md:rounded-3xl blur-xl opacity-30" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
                    <AlertCircle size={40} className="text-[#c9a227] mb-4 md:mb-6 md:w-[64px] md:h-[64px]" />
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#c9a227] mb-4 sm:mb-6 md:mb-8">Consumer Pain</h3>
                    <div className="space-y-3 sm:space-y-4 md:space-y-6">
                      {[
                        { Icon: DollarSign, text: 'Paying full price everywhere' },
                        { Icon: Target, text: 'Missing hidden deals & promos' },
                        { Icon: XCircle, text: 'Loyalty programs that never pay off' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 sm:gap-4">
                          <item.Icon size={24} className="text-[#c9a227] flex-shrink-0 sm:w-[28px] sm:h-[28px] md:w-[36px] md:h-[36px]" />
                          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-bold leading-tight">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Merchant Pain */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#c9a227] rounded-2xl md:rounded-3xl blur-xl opacity-30" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
                    <TrendingUp size={40} className="text-[#c9a227] mb-4 md:mb-6 rotate-180 md:w-[64px] md:h-[64px]" />
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#c9a227] mb-4 sm:mb-6 md:mb-8">Merchant Pain</h3>
                    <div className="space-y-3 sm:space-y-4 md:space-y-6">
                      {[
                        { Icon: Coins, text: '$1B+ lost to discount platforms' },
                        { Icon: Users, text: 'One-time buyers vanish forever' },
                        { Icon: TrendingUp, text: 'CAC burning through margins' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 sm:gap-4">
                          <item.Icon size={24} className="text-[#c9a227] flex-shrink-0 sm:w-[28px] sm:h-[28px] md:w-[36px] md:h-[36px]" />
                          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-bold leading-tight">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote card */}
              <div className="animate-[slideUp_0.8s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] rounded-2xl md:rounded-3xl blur-xl opacity-50" />
                  <div className="relative bg-gradient-to-r from-[#c9a227] to-[#d4b03f] backdrop-blur-xl border-2 border-white/20 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl text-center">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#0a1628] font-black italic leading-relaxed">
                      "Everyone's hunting for value. Nobody's capturing habit."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 2: WHAT NUQTA IS ====================
      case 2:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Animated background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/3 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#c9a227] rounded-full blur-[80px] md:blur-[120px] opacity-20 animate-pulse" />
              <div className="absolute bottom-1/3 right-1/3 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#c9a227] rounded-full blur-[80px] md:blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="relative z-10 max-w-7xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-[slideDown_0.8s_ease-out]">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] blur-2xl md:blur-3xl opacity-40" />
                  <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4b03f] leading-tight">
                    Neutral Rewards + Payment Intelligence
                  </h1>
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-slate-300 font-bold mt-2 sm:mt-4">The complete consumer journey in one platform</p>
              </div>

              {/* Journey step cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { Icon: Search, title: 'Search', desc: 'Find best deals near you' },
                  { Icon: Target, title: 'Decide', desc: 'Compare & choose smart' },
                  { Icon: CreditCard, title: 'Pay', desc: 'Tap with Apple/Google Pay' },
                  { Icon: Gift, title: 'Earn', desc: 'Get neutral points every time' }
                ].map((step, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute inset-0 bg-[#c9a227] rounded-xl md:rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl transform group-hover:scale-105 transition-all">
                      <step.Icon size={32} className="text-[#c9a227] mb-2 sm:mb-4 md:w-[48px] md:h-[48px] lg:w-[60px] lg:h-[60px]" />
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-1 sm:mb-3">{step.title}</h3>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-400 font-semibold leading-tight">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Differentiator cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 animate-[slideUp_0.8s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    Icon: Zap,
                    title: 'Neutral Points',
                    desc: 'No expiry, no merchant lock-in. Your points, your choice.'
                  },
                  {
                    Icon: Shield,
                    title: 'Payment Intel',
                    desc: 'See hidden fees, better cards, smarter payment routing.'
                  },
                  {
                    Icon: Repeat,
                    title: 'Habit Loop',
                    desc: 'Every transaction builds your savings & our moat.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute inset-0 bg-[#c9a227] rounded-2xl md:rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl transform group-hover:scale-105 transition-all">
                      <item.Icon size={36} className="text-[#c9a227] mb-4 sm:mb-6 md:w-[48px] md:h-[48px] lg:w-[60px] lg:h-[60px]" />
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 sm:mb-4">{item.title}</h3>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 font-semibold leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 3: WHY THIS WORKS ====================
      case 3:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Animated background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#c9a227] rounded-full blur-[80px] md:blur-[100px] opacity-20 animate-pulse" />
              <div className="absolute bottom-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#c9a227] rounded-full blur-[80px] md:blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-7xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-[slideDown_0.8s_ease-out]">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] blur-2xl md:blur-3xl opacity-40" />
                  <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4b03f] leading-tight">
                    Inside The Transaction Loop
                  </h1>
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-slate-300 font-bold mt-2 sm:mt-4">Why we sit at the point of maximum leverage</p>
              </div>

              {/* Transaction flow - Mobile: vertical, Desktop: horizontal */}
              <div className="mb-6 sm:mb-8 md:mb-12 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {/* Mobile flow (vertical) */}
                <div className="flex md:hidden flex-col items-center gap-3">
                  {[
                    { Icon: Users, label: 'User Searches' },
                    { Icon: Store, label: 'Nuqta Routes' },
                    { Icon: CreditCard, label: 'Payment Clears' },
                    { Icon: Gift, label: 'Points Earned' },
                    { Icon: Coins, label: 'We Get Paid' }
                  ].map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-[#c9a227] rounded-full blur-lg opacity-40" />
                        <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-full w-20 h-20 flex items-center justify-center shadow-xl">
                          <step.Icon size={32} className="text-[#c9a227]" />
                        </div>
                      </div>
                      <p className="text-base font-black text-white">{step.label}</p>
                      {idx < 4 && <ArrowRight size={24} className="text-[#c9a227] rotate-90" />}
                    </React.Fragment>
                  ))}
                </div>

                {/* Desktop flow (horizontal) */}
                <div className="hidden md:block">
                  <div className="grid grid-cols-5 gap-6 items-center">
                    {[
                      { Icon: Users, label: 'User Searches' },
                      { isArrow: true },
                      { Icon: Store, label: 'Nuqta Routes' },
                      { isArrow: true },
                      { Icon: CreditCard, label: 'Payment Clears' }
                    ].map((step, idx) => (
                      step.isArrow ? (
                        <div key={idx} className="flex justify-center">
                          <ArrowRight size={48} className="text-[#c9a227]" />
                        </div>
                      ) : (
                        <div key={idx} className="relative group text-center">
                          <div className="absolute inset-0 bg-[#c9a227] rounded-full blur-xl opacity-40" />
                          <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-full w-24 lg:w-32 h-24 lg:h-32 flex items-center justify-center shadow-xl mx-auto">
                            {step.Icon && <step.Icon size={48} className="text-[#c9a227]" />}
                          </div>
                          <p className="text-lg lg:text-xl font-black text-white mt-4">{step.label}</p>
                        </div>
                      )
                    ))}
                  </div>

                  {/* Second row */}
                  <div className="grid grid-cols-5 gap-6 items-center mt-6">
                    {[
                      { isArrow: true },
                      { Icon: Gift, label: 'Points Earned' },
                      { isArrow: true },
                      { Icon: Coins, label: 'We Get Paid' },
                      { empty: true }
                    ].map((step, idx) => (
                      step.isArrow ? (
                        <div key={idx} className="flex justify-center">
                          <ArrowRight size={48} className="text-[#c9a227] rotate-180" />
                        </div>
                      ) : step.Icon ? (
                        <div key={idx} className="relative group text-center">
                          <div className="absolute inset-0 bg-[#c9a227] rounded-full blur-xl opacity-40" />
                          <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-full w-24 lg:w-32 h-24 lg:h-32 flex items-center justify-center shadow-xl mx-auto">
                            <step.Icon size={48} className="text-[#c9a227]" />
                          </div>
                          <p className="text-lg lg:text-xl font-black text-white mt-4">{step.label}</p>
                        </div>
                      ) : <div key={idx} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Benefit cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 animate-[slideUp_0.8s_ease-out_0.8s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#c9a227] rounded-2xl md:rounded-3xl blur-xl opacity-30" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
                    <Users size={40} className="text-[#c9a227] mb-4 sm:mb-6 md:w-[64px] md:h-[64px]" />
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#c9a227] mb-4 sm:mb-6">For Users</h3>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-bold leading-relaxed">
                      Save on every transaction. Build wealth through everyday spending. Zero effort required.
                    </p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-[#c9a227] rounded-2xl md:rounded-3xl blur-xl opacity-30" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
                    <Store size={40} className="text-[#c9a227] mb-4 sm:mb-6 md:w-[64px] md:h-[64px]" />
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#c9a227] mb-4 sm:mb-6">For Merchants</h3>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-bold leading-relaxed">
                      Loyal customers, not one-time bargain hunters. Predictable revenue, not margin erosion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 4: GROUPON COMPARISON ====================
      case 4:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Animated background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#c9a227] rounded-full blur-[80px] md:blur-[120px] opacity-20 animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-600 rounded-full blur-[80px] md:blur-[120px] opacity-15 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-7xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-[slideDown_0.8s_ease-out]">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] blur-2xl md:blur-3xl opacity-40" />
                  <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-tight">
                    Discounts Decay. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4b03f]">Habits Compound.</span>
                  </h1>
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-slate-300 font-bold mt-2 sm:mt-4">Why we're not another Groupon</p>
              </div>

              {/* Comparison cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {/* Groupon */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-red-600 rounded-2xl md:rounded-3xl blur-xl opacity-30" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-red-500/30 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
                    <TrendingUp size={40} className="text-red-400 mb-4 sm:mb-6 rotate-180 md:w-[64px] md:h-[64px]" />
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-red-400 mb-4 sm:mb-6 md:mb-8">Groupon Model</h3>
                    <div className="space-y-3 sm:space-y-4 md:space-y-6">
                      {[
                        { text: '50-70% discounts burn merchant margins' },
                        { text: 'One-time users never return' },
                        { text: 'Merchants lose money on every deal' },
                        { text: 'Value extraction, not creation' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 sm:gap-4">
                          <XCircle size={24} className="text-red-400 flex-shrink-0 sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]" />
                          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-bold leading-tight">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Nuqta */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#c9a227] rounded-2xl md:rounded-3xl blur-xl opacity-40" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
                    <Rocket size={40} className="text-[#c9a227] mb-4 sm:mb-6 md:w-[64px] md:h-[64px]" />
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#c9a227] mb-4 sm:mb-6 md:mb-8">Nuqta Model</h3>
                    <div className="space-y-3 sm:space-y-4 md:space-y-6">
                      {[
                        { text: '5-15% cashback from transaction fees' },
                        { text: 'Repeat customers build habits' },
                        { text: 'Merchants pay only on actual sales' },
                        { text: 'Win-win ecosystem that compounds' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 sm:gap-4">
                          <CheckCircle size={24} className="text-[#c9a227] flex-shrink-0 sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]" />
                          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-bold leading-tight">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Insight card */}
              <div className="animate-[slideUp_0.8s_ease-out_0.8s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] rounded-2xl md:rounded-3xl blur-xl opacity-50" />
                  <div className="relative bg-gradient-to-r from-[#0a1628] to-[#1a2638] backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl text-center">
                    <Sparkles size={40} className="text-[#c9a227] mx-auto mb-4 sm:mb-6 md:w-[64px] md:h-[64px]" />
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-white font-black leading-relaxed">
                      "We capture <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4b03f]">transaction fees</span>, not merchant margins.<br className="hidden sm:block" />
                      <span className="sm:hidden"> </span>That's the difference between a flash sale and a lasting business."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 5: MOAT & TIMING ====================
      case 5:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Animated background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/3 right-1/3 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#c9a227] rounded-full blur-[80px] md:blur-[100px] opacity-20 animate-pulse" />
              <div className="absolute bottom-1/3 left-1/3 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#c9a227] rounded-full blur-[80px] md:blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="relative z-10 max-w-7xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-[slideDown_0.8s_ease-out]">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] blur-2xl md:blur-3xl opacity-40" />
                  <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4b03f] leading-tight">
                    Structural Moat + 18-Month Window
                  </h1>
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-slate-300 font-bold mt-2 sm:mt-4">Why now, and why us</p>
              </div>

              {/* Moat cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    icon: Shield,
                    title: 'Network Effects',
                    points: [
                      'More users → More merchant demand',
                      'More merchants → More user value',
                      'Virtuous cycle compounds daily'
                    ]
                  },
                  {
                    icon: DollarSign,
                    title: 'Transaction Data',
                    points: [
                      'Payment routing intelligence',
                      'Hidden fee detection',
                      'Card optimization engine'
                    ]
                  },
                  {
                    icon: TrendingUp,
                    title: 'Habit Formation',
                    points: [
                      'Users check before every purchase',
                      'Behavioral lock-in > switching costs',
                      'Daily usage = daily compounding'
                    ]
                  }
                ].map((moat, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute inset-0 bg-[#c9a227] rounded-2xl md:rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl transform group-hover:scale-105 transition-all h-full">
                      <moat.icon size={40} className="text-[#c9a227] mb-4 sm:mb-6 md:w-[64px] md:h-[64px]" />
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-4 sm:mb-6">{moat.title}</h3>
                      <div className="space-y-2 sm:space-y-3">
                        {moat.points.map((point, pidx) => (
                          <div key={pidx} className="flex items-start gap-2 sm:gap-3">
                            <ArrowRight size={18} className="text-[#c9a227] flex-shrink-0 sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px]" />
                            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-semibold leading-tight">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timing window card */}
              <div className="animate-[slideUp_0.8s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] rounded-2xl md:rounded-3xl blur-xl opacity-40" />
                  <div className="relative bg-gradient-to-r from-[#c9a227]/20 to-[#d4b03f]/20 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
                    <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 items-center">
                      {/* Clock visualization */}
                      <div className="text-center">
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-[#c9a227] rounded-full blur-2xl opacity-40 animate-pulse" />
                          <Calendar size={80} className="relative text-[#c9a227] animate-pulse sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px]" />
                        </div>
                        <p className="text-4xl sm:text-5xl md:text-6xl font-black text-[#c9a227] mt-4 sm:mt-6">18 Months</p>
                        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-bold mt-2">Before competitors catch up</p>
                      </div>

                      {/* Timing points */}
                      <div className="space-y-3 sm:space-y-4 md:space-y-6">
                        {[
                          { Icon: CheckCircle, text: 'Digital payments hitting critical mass in UAE' },
                          { Icon: CheckCircle, text: 'Merchants desperate for customer retention tools' },
                          { Icon: CheckCircle, text: 'Consumers trained on rewards programs' },
                          { Icon: Zap, text: 'First mover captures the habit-formation window' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 sm:gap-4">
                            <item.Icon size={24} className="text-[#c9a227] flex-shrink-0 sm:w-[28px] sm:h-[28px] md:w-[36px] md:h-[36px]" />
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold leading-tight">{item.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 6: THE ASK ====================
      case 6:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Animated background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#c9a227] rounded-full blur-[80px] md:blur-[120px] opacity-30 animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#c9a227] rounded-full blur-[80px] md:blur-[120px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-7xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-[slideDown_0.8s_ease-out]">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] blur-2xl md:blur-3xl opacity-40" />
                  <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-tight">
                    Product Ready. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4b03f]">Merchants Lined Up.</span>
                  </h1>
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-slate-300 font-bold mt-2 sm:mt-4">We just need fuel for the rocket</p>
              </div>

              {/* Readiness metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { Icon: CheckCircle, metric: '90%', label: 'Product Complete', desc: 'MVP ready for launch' },
                  { Icon: Store, metric: '30+', label: 'Merchants Signed', desc: 'LOIs in hand' },
                  { Icon: DollarSign, metric: 'AED 40', label: 'Target CAC', desc: 'Validated & achievable' }
                ].map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute inset-0 bg-[#c9a227] rounded-2xl md:rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl transform group-hover:scale-105 transition-all text-center">
                      <item.Icon size={40} className="text-[#c9a227] mx-auto md:w-[60px] md:h-[60px]" />
                      <p className="text-4xl sm:text-5xl md:text-6xl font-black text-[#c9a227] mb-2 mt-3 sm:mt-4">{item.metric}</p>
                      <p className="text-lg sm:text-xl md:text-2xl text-white font-black mb-1 sm:mb-2">{item.label}</p>
                      <p className="text-sm sm:text-base md:text-lg text-slate-400 font-semibold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* The Ask card */}
              <div className="mb-6 sm:mb-8 md:mb-12 animate-[slideUp_0.8s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] via-[#d4b03f] to-[#c9a227] rounded-2xl md:rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="relative bg-gradient-to-r from-[#c9a227] to-[#d4b03f] backdrop-blur-xl border-2 border-[#c9a227]/50 rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-16 shadow-2xl text-center">
                    <Sparkles size={48} className="text-white mx-auto mb-4 sm:mb-6 md:mb-8 animate-pulse md:w-[64px] md:h-[64px] lg:w-[80px] lg:h-[80px]" />
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 sm:mb-8">The Ask</h2>
                    <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 max-w-5xl mx-auto">
                      <div>
                        <p className="text-sm sm:text-lg md:text-2xl text-[#0a1628] font-bold mb-1 sm:mb-3">Raising</p>
                        <p className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-1 sm:mb-2">$400K</p>
                        <p className="text-xs sm:text-base md:text-xl text-[#0a1628] font-semibold">SAFE</p>
                      </div>
                      <div>
                        <p className="text-sm sm:text-lg md:text-2xl text-[#0a1628] font-bold mb-1 sm:mb-3">Valuation Cap</p>
                        <p className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-1 sm:mb-2">$5M</p>
                        <p className="text-xs sm:text-base md:text-xl text-[#0a1628] font-semibold">USD</p>
                      </div>
                      <div>
                        <p className="text-sm sm:text-lg md:text-2xl text-[#0a1628] font-bold mb-1 sm:mb-3">Discount</p>
                        <p className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-1 sm:mb-2">20%</p>
                        <p className="text-xs sm:text-base md:text-xl text-[#0a1628] font-semibold">on next round</p>
                      </div>
                    </div>
                    <div className="w-32 sm:w-48 md:w-64 h-1 bg-white/50 mx-auto my-4 sm:my-6 md:my-8 rounded-full" />
                    <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white font-bold px-2">
                      To fund launch, acquire first 50,000 users, and prove unit economics
                    </p>
                  </div>
                </div>
              </div>

              {/* Closing statement */}
              <div className="animate-[slideUp_0.8s_ease-out_0.8s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] rounded-2xl md:rounded-3xl blur-xl opacity-40" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl text-center">
                    <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-black italic leading-relaxed mb-4 sm:mb-6">
                      "The next unicorn won't come from building a better discount site.<br className="hidden md:block" />
                      <span className="md:hidden"> </span>It'll come from owning the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#d4b03f]">daily habit</span> of saving money."
                    </p>
                    <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8">
                      <Target size={32} className="text-[#c9a227] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px]" />
                      <Repeat size={32} className="text-[#c9a227] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px]" />
                      <TrendingUp size={32} className="text-[#c9a227] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== FALLBACK ====================
      default:
        return (
          <div className="w-full min-h-screen bg-gradient-to-br from-[#0a1628] to-[#1a2638] flex items-center justify-center">
            <div className="text-center">
              <p className="text-white text-4xl sm:text-6xl font-black mb-4">Slide {currentSlide + 1}</p>
              <p className="text-slate-400 text-lg sm:text-2xl">Slide not found</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative">
      {renderSlide()}

      {/* Slide Navigation - Positioned above global footer */}
      <div className="fixed bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-[60] w-[calc(100%-2rem)] max-w-4xl">
        <div className="bg-[#0a1628]/95 backdrop-blur-2xl border-2 border-[#c9a227]/30 rounded-2xl shadow-2xl">
          {/* Slide Labels - Desktop */}
          <div className="hidden md:block border-b border-white/10">
            <div className="flex items-center justify-between px-2">
              {[
                { label: 'Cover', shortLabel: 'Cover' },
                { label: 'Problem', shortLabel: 'Problem' },
                { label: 'Solution', shortLabel: 'Solution' },
                { label: 'How It Works', shortLabel: 'How' },
                { label: 'vs Groupon', shortLabel: 'Compare' },
                { label: 'Moat & Timing', shortLabel: 'Moat' },
                { label: 'The Ask', shortLabel: 'Ask' }
              ].map((slide, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  className={`flex-1 py-2 px-1 text-center transition-all border-b-2 ${
                    index === currentSlide
                      ? 'border-[#c9a227] text-[#c9a227] bg-[#c9a227]/10'
                      : 'border-transparent text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wide">
                    <span className="hidden lg:inline">{slide.label}</span>
                    <span className="lg:hidden">{slide.shortLabel}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Slide Labels - Scrollable */}
          <div className="md:hidden overflow-x-auto border-b border-white/10 scrollbar-hide">
            <div className="flex min-w-max">
              {[
                'Cover',
                'Problem',
                'Solution',
                'How',
                'Compare',
                'Moat',
                'Ask'
              ].map((label, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  className={`py-2 px-3 text-center transition-all border-b-2 whitespace-nowrap ${
                    index === currentSlide
                      ? 'border-[#c9a227] text-[#c9a227] bg-[#c9a227]/10'
                      : 'border-transparent text-slate-400'
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wide">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Left: Prev Button + Slide Counter */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => changeSlide(currentSlide - 1)}
                  disabled={currentSlide === 0}
                  className="p-2 rounded-full bg-gradient-to-r from-[#c9a227] to-[#d4b03f] hover:from-[#d4b03f] hover:to-[#c9a227] disabled:opacity-30 disabled:cursor-not-allowed transition-all transform hover:scale-110 active:scale-95 shadow-lg disabled:shadow-none"
                >
                  <ChevronLeft size={18} className="text-white" />
                </button>
                <div className="hidden sm:block px-3 py-1 bg-white/10 rounded-full">
                  <p className="text-white text-sm font-bold">
                    {currentSlide + 1} <span className="text-white/50">/</span> {totalSlides}
                  </p>
                </div>
              </div>

              {/* Center: Dot Navigation */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeSlide(index)}
                    className={`transition-all rounded-full ${
                      index === currentSlide
                        ? 'bg-gradient-to-r from-[#c9a227] via-[#d4b03f] to-[#c9a227] w-6 h-2 shadow-lg shadow-[#c9a227]/50'
                        : 'bg-white/20 hover:bg-white/40 w-2 h-2'
                    }`}
                  />
                ))}
              </div>

              {/* Right: Next Button */}
              <div className="flex items-center gap-3">
                <div className="sm:hidden px-2 py-1 bg-white/10 rounded-full">
                  <p className="text-white text-xs font-bold">
                    {currentSlide + 1}/{totalSlides}
                  </p>
                </div>
                <button
                  onClick={() => changeSlide(currentSlide + 1)}
                  disabled={currentSlide === totalSlides - 1}
                  className="p-2 rounded-full bg-gradient-to-r from-[#c9a227] to-[#d4b03f] hover:from-[#d4b03f] hover:to-[#c9a227] disabled:opacity-30 disabled:cursor-not-allowed transition-all transform hover:scale-110 active:scale-95 shadow-lg disabled:shadow-none"
                >
                  <ChevronRight size={18} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default PitchDeck90SecondPremium;
