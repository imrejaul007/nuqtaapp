'use client';

import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Zap,
  Target,
  Shield,
  DollarSign,
  ArrowRight,
  Sparkles,
  Users,
  Store,
  Coins,
  Calendar,
  Rocket,
  CheckCircle,
  Gift,
  MapPin,
  Clock,
  BarChart3,
  ShoppingBag,
  Smartphone,
  Building2,
  Award,
  Eye,
  Play,
  Handshake,
  LineChart,
  Megaphone,
  Timer,
  Layers,
  BadgeCheck,
  Wallet,
  UserCheck,
  Globe,
  Briefcase,
  FileCheck,
  Download,
  MessageSquare,
  Phone,
  Mail,
  ShieldCheck,
  HelpCircle,
  Percent
} from 'lucide-react';

/**
 * EXHIBITION PARTNERSHIP PITCH DECK
 *
 * For short-term events (5-7 days) without ticket integration:
 * - Download app at event → Get AED 100 Event Coins
 * - Spend AED 500+ → Unlock coins
 * - Standard merchant terms (5-8% commission)
 *
 * Brand colors: #c9a227 (gold), #0a1628 (dark blue)
 */

const PitchDeckExhibition = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = 10;

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

  const slideClass = `transition-all duration-400 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`;

  const renderSlide = () => {
    switch (currentSlide) {
      // ==================== SLIDE 0: TITLE ====================
      case 0:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Background effects */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#c9a227] rounded-full blur-[150px] opacity-20 animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-5xl w-full text-center px-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 border border-[#c9a227]/30 rounded-full mb-6 animate-[fadeIn_1s_ease-out]">
                <Calendar className="w-4 h-4 text-[#c9a227]" />
                <span className="text-[#c9a227] font-semibold text-sm">Exhibition Partnership</span>
              </div>

              {/* Main title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-[slideDown_0.8s_ease-out]">
                Turn Event Visitors Into<br />
                <span className="bg-gradient-to-r from-[#c9a227] to-[#d4b03f] bg-clip-text text-transparent">High-Spending Customers</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto animate-[fadeIn_1s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
                Zero cost. Zero tech integration. Maximum impact.
              </p>

              {/* Event types */}
              <div className="flex flex-wrap justify-center gap-3 mb-10 animate-[fadeIn_1s_ease-out_0.5s] opacity-0 [animation-fill-mode:forwards]">
                {['Trade Shows', 'Book Fairs', 'Food Festivals', 'Art Exhibitions', 'Night Markets'].map((event, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-sm">
                    {event}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[slideUp_0.8s_ease-out_0.7s] opacity-0 [animation-fill-mode:forwards]">
                <button
                  onClick={() => changeSlide(1)}
                  className="px-8 py-4 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] text-[#0a1628] font-bold rounded-full text-lg flex items-center gap-2 hover:shadow-[0_0_30px_rgba(201,162,39,0.4)] transition-all"
                >
                  <Play size={20} />
                  Start Presentation
                </button>
              </div>

              {/* Nuqta branding */}
              <div className="mt-12 animate-[fadeIn_1s_ease-out_0.9s] opacity-0 [animation-fill-mode:forwards]">
                <p className="text-slate-500 text-sm mb-2">Presented by</p>
                <p className="text-[#c9a227] text-2xl font-black tracking-wider">NUQTA</p>
                <p className="text-slate-400 text-xs">UAE&apos;s Everyday Savings Platform</p>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 1: THE PROBLEM ====================
      case 1:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-red-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 sm:mb-10 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-4">
                  <Eye className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-semibold text-sm">The Problem</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Exhibition Visitors <span className="text-red-400">Browse, Don&apos;t Buy</span>
                </h1>
              </div>

              {/* Problems grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    stat: '70%',
                    label: 'Browse Only',
                    desc: 'Most visitors walk around without making purchases',
                    icon: Eye
                  },
                  {
                    stat: 'AED 50-100',
                    label: 'Low Spend',
                    desc: 'Average impulse purchases are small',
                    icon: ShoppingBag
                  },
                  {
                    stat: '0',
                    label: 'Data Captured',
                    desc: 'No insight into who visits or what they want',
                    icon: BarChart3
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute inset-0 bg-red-500/10 rounded-2xl blur-xl" />
                    <div className="relative bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-2xl p-6 sm:p-8 text-center h-full">
                      <item.icon className="w-10 h-10 text-red-400 mx-auto mb-4" />
                      <p className="text-4xl sm:text-5xl font-black text-red-400 mb-2">{item.stat}</p>
                      <p className="text-white font-bold text-lg mb-2">{item.label}</p>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* The Chain Reaction Problem */}
              <div className="mt-8 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-xl border border-red-500/20 rounded-2xl p-6">
                  <h4 className="text-red-400 font-bold text-center mb-4">The Chain Reaction Problem</h4>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
                    <div className="px-4 py-2 bg-white/5 rounded-xl">
                      <p className="text-white text-sm">Visitors don&apos;t buy</p>
                    </div>
                    <ArrowRight className="text-red-400 hidden sm:block" size={20} />
                    <span className="text-red-400 sm:hidden">↓</span>
                    <div className="px-4 py-2 bg-white/5 rounded-xl">
                      <p className="text-white text-sm">Merchants lose money</p>
                    </div>
                    <ArrowRight className="text-red-400 hidden sm:block" size={20} />
                    <span className="text-red-400 sm:hidden">↓</span>
                    <div className="px-4 py-2 bg-white/5 rounded-xl">
                      <p className="text-white text-sm">Merchants don&apos;t renew</p>
                    </div>
                    <ArrowRight className="text-red-400 hidden sm:block" size={20} />
                    <span className="text-red-400 sm:hidden">↓</span>
                    <div className="px-4 py-2 bg-red-500/20 rounded-xl border border-red-500/30">
                      <p className="text-red-400 font-bold text-sm">You lose revenue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 2: THE SOLUTION ====================
      case 2:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#c9a227] rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 sm:mb-10 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <Sparkles className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">The Solution</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  <span className="text-[#c9a227]">AED 100 Free</span> Just For Downloading
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 mt-4">Spend AED 500+ at any participating merchant to unlock</p>
              </div>

              {/* The model */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {/* For visitors */}
                <div className="relative">
                  <div className="absolute inset-0 bg-[#c9a227]/10 rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-2xl p-6 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-8 h-8 text-[#c9a227]" />
                      <h3 className="text-white font-bold text-xl">For Visitors</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        'Download Nuqta app at event booth',
                        'Get AED 100 in Event Coins instantly',
                        'Shop at any participating merchant',
                        'Spend AED 500+ → Coins unlock',
                        'Use coins for discounts or cash back'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-300">
                          <CheckCircle className="w-5 h-5 text-[#c9a227] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* For merchants */}
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/10 rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-purple-500/30 rounded-2xl p-6 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <Store className="w-8 h-8 text-purple-400" />
                      <h3 className="text-white font-bold text-xl">For Merchants</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        'Zero upfront cost to join',
                        'Only pay 5-8% on Nuqta-driven sales',
                        'Customers motivated to spend AED 500+',
                        'Real-time sales dashboard',
                        'Works with existing setup'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-300">
                          <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key differentiator */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 border border-[#c9a227]/30 rounded-2xl p-5 text-center">
                  <p className="text-white text-lg">
                    Coins expire at <span className="text-[#c9a227] font-bold">event end</span> →
                    Creates urgency to <span className="text-[#c9a227] font-bold">spend now</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 3: HOW IT WORKS ====================
      case 3:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-7xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full mb-4">
                  <Layers className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold text-sm">How It Works</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Simple <span className="text-blue-400">4-Step</span> Process
                </h1>
              </div>

              {/* Journey steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    step: '1',
                    title: 'Visit Nuqta Booth',
                    desc: 'Scan QR code at our booth at the event entrance',
                    icon: MapPin,
                    color: 'blue'
                  },
                  {
                    step: '2',
                    title: 'Download & Register',
                    desc: 'Quick signup, get AED 100 Event Coins instantly',
                    icon: Download,
                    color: 'purple'
                  },
                  {
                    step: '3',
                    title: 'Shop & Log',
                    desc: 'Buy from merchants, log purchase in app',
                    icon: Smartphone,
                    color: 'green'
                  },
                  {
                    step: '4',
                    title: 'Unlock & Save',
                    desc: 'Spend AED 500+, coins unlock for use',
                    icon: Gift,
                    color: 'gold'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    {idx < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                        <ArrowRight className="text-white/20" size={24} />
                      </div>
                    )}
                    <div className={`bg-white/5 backdrop-blur-xl border ${
                      item.color === 'gold' ? 'border-[#c9a227]/30' :
                      item.color === 'green' ? 'border-green-500/30' :
                      item.color === 'purple' ? 'border-purple-500/30' :
                      'border-blue-500/30'
                    } rounded-2xl p-5 h-full`}>
                      <div className={`w-12 h-12 rounded-xl ${
                        item.color === 'gold' ? 'bg-[#c9a227]/20' :
                        item.color === 'green' ? 'bg-green-500/20' :
                        item.color === 'purple' ? 'bg-purple-500/20' :
                        'bg-blue-500/20'
                      } flex items-center justify-center mb-4`}>
                        <item.icon className={`w-6 h-6 ${
                          item.color === 'gold' ? 'text-[#c9a227]' :
                          item.color === 'green' ? 'text-green-400' :
                          item.color === 'purple' ? 'text-purple-400' :
                          'text-blue-400'
                        }`} />
                      </div>
                      <div className="text-xs font-bold text-slate-500 mb-1">STEP {item.step}</div>
                      <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* App-based highlight */}
              <div className="mt-8 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-7 h-7 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">App-Based Transaction Logging</h4>
                      <p className="text-slate-400 text-sm">
                        Users log purchases through the Nuqta app. Merchants verify via their dashboard. No POS integration needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 4: MATH ====================
      case 4:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-green-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-4">
                  <BarChart3 className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold text-sm">The Numbers</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Example: <span className="text-green-400">100K Visitor</span> Event
                </h1>
              </div>

              {/* Math breakdown */}
              <div className="relative mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-[#c9a227]/10 rounded-3xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-xl border-2 border-green-500/30 rounded-3xl p-6">
                  {/* Funnel */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[
                      { label: 'Total Visitors', value: '100,000', icon: Users },
                      { label: 'Download Nuqta', value: '15,000', sub: '15% conversion', icon: Download },
                      { label: 'Spend AED 500+', value: '5,000', sub: '33% of downloads', icon: ShoppingBag },
                      { label: 'Avg Spend', value: 'AED 600', icon: DollarSign }
                    ].map((item, idx) => (
                      <div key={idx} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                        <item.icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                        <p className="text-slate-400 text-xs mb-1">{item.label}</p>
                        <p className="text-2xl sm:text-3xl font-black text-white">{item.value}</p>
                        {item.sub && <p className="text-slate-500 text-xs">{item.sub}</p>}
                      </div>
                    ))}
                  </div>

                  {/* Revenue */}
                  <div className="bg-black/30 rounded-2xl p-5">
                    <p className="text-[#c9a227] font-bold text-center mb-4">Revenue Calculation</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-white/5 rounded-xl">
                        <p className="text-slate-400 text-sm mb-1">GMV Tracked</p>
                        <p className="text-2xl font-black text-green-400">AED 3M</p>
                        <p className="text-slate-500 text-xs">5,000 × AED 600</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl">
                        <p className="text-slate-400 text-sm mb-1">Nuqta Revenue (6%)</p>
                        <p className="text-2xl font-black text-white">AED 180K</p>
                      </div>
                      <div className="p-4 bg-[#c9a227]/20 rounded-xl border border-[#c9a227]/30">
                        <p className="text-slate-400 text-sm mb-1">Organizer Share (10%)</p>
                        <p className="text-2xl font-black text-[#c9a227]">AED 18K</p>
                        <p className="text-slate-500 text-xs">Passive revenue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key insight */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-2xl p-4 text-center">
                  <p className="text-white font-semibold">
                    Even at <span className="text-[#c9a227]">5% conversion</span>, you unlock <span className="text-[#c9a227]">AED 3M in tracked GMV</span> and happier merchants
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 5: THE GOLD MINE ====================
      case 5:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#c9a227] rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <Coins className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">The Real Value</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Why This Is A <span className="text-[#c9a227]">Gold Mine</span> For You
                </h1>
              </div>

              {/* The Virtuous Cycle */}
              <div className="mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227]/20 to-green-500/20 rounded-3xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-3xl p-6">
                    <h4 className="text-[#c9a227] font-bold text-center mb-5">The Virtuous Cycle</h4>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center">
                      <div className="px-4 py-3 bg-green-500/20 rounded-xl border border-green-500/30">
                        <p className="text-green-400 font-bold text-sm">Visitors spend AED 500+</p>
                      </div>
                      <ArrowRight className="text-[#c9a227] hidden md:block" size={24} />
                      <span className="text-[#c9a227] md:hidden text-xl">↓</span>
                      <div className="px-4 py-3 bg-green-500/20 rounded-xl border border-green-500/30">
                        <p className="text-green-400 font-bold text-sm">Merchants make money</p>
                      </div>
                      <ArrowRight className="text-[#c9a227] hidden md:block" size={24} />
                      <span className="text-[#c9a227] md:hidden text-xl">↓</span>
                      <div className="px-4 py-3 bg-green-500/20 rounded-xl border border-green-500/30">
                        <p className="text-green-400 font-bold text-sm">Merchants are happy</p>
                      </div>
                      <ArrowRight className="text-[#c9a227] hidden md:block" size={24} />
                      <span className="text-[#c9a227] md:hidden text-xl">↓</span>
                      <div className="px-4 py-3 bg-[#c9a227]/30 rounded-xl border-2 border-[#c9a227]">
                        <p className="text-[#c9a227] font-bold text-sm">They come back next year!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-[fadeIn_0.8s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    icon: TrendingUp,
                    title: 'Higher Renewals',
                    value: '+30-50%',
                    desc: 'Happy merchants = higher booth renewal rates'
                  },
                  {
                    icon: DollarSign,
                    title: 'Revenue Share',
                    value: '10%',
                    desc: 'Passive income from Nuqta commissions'
                  },
                  {
                    icon: Store,
                    title: 'Merchant ROI',
                    value: '5-10x',
                    desc: 'AED 500+ vs AED 50 impulse buys'
                  },
                  {
                    icon: BarChart3,
                    title: 'Spending Data',
                    value: 'Real-Time',
                    desc: 'Prove value to merchants with data'
                  },
                  {
                    icon: Megaphone,
                    title: 'Free Marketing',
                    value: '500K+',
                    desc: 'Nuqta users see your event'
                  },
                  {
                    icon: Shield,
                    title: 'Zero Risk',
                    value: 'AED 0',
                    desc: 'No upfront cost, no commitment'
                  },
                  {
                    icon: Award,
                    title: 'Differentiation',
                    value: 'Unique',
                    desc: 'Stand out from other exhibitions'
                  },
                  {
                    icon: Zap,
                    title: 'Quick Setup',
                    value: '24-48hrs',
                    desc: 'Go live before your event starts'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-[#c9a227]/30 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a227]/20 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-[#c9a227]" />
                    </div>
                    <p className="text-[#c9a227] text-2xl font-black mb-1">{item.value}</p>
                    <p className="text-white font-bold mb-1">{item.title}</p>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 6: MERCHANT TERMS ====================
      case 6:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-4">
                  <Percent className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-semibold text-sm">For Merchants</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Standard <span className="text-purple-400">Nuqta Terms</span>
                </h1>
                <p className="text-slate-400 text-lg mt-3">Same terms as our regular merchant network</p>
              </div>

              {/* Pricing tiers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Standard</h3>
                  <p className="text-4xl font-black text-white mb-4">5%</p>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Pay only on Nuqta sales</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Real-time dashboard</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> App listing</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-b from-[#c9a227]/20 to-transparent rounded-2xl border-2 border-[#c9a227] p-6 relative">
                  <div className="absolute top-0 right-0 bg-[#c9a227] text-[#0a1628] px-3 py-1 text-xs font-bold rounded-bl-xl">POPULAR</div>
                  <h3 className="text-[#c9a227] font-bold text-xl mb-2">Premium</h3>
                  <p className="text-4xl font-black text-white mb-4">6%</p>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#c9a227]" /> Everything in Standard</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#c9a227]" /> Featured placement</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#c9a227]" /> Priority matching</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#c9a227]" /> Custom promotions</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Enterprise</h3>
                  <p className="text-4xl font-black text-white mb-4">Custom</p>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Volume discounts</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Multi-location</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> API access</li>
                  </ul>
                </div>
              </div>

              {/* Key point */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center">
                  <p className="text-white text-lg">
                    <span className="text-[#c9a227] font-bold">Zero upfront cost.</span> Merchants only pay when they make money through Nuqta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 7: TIMELINE ====================
      case 7:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full mb-4">
                  <Timer className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold text-sm">Implementation</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  <span className="text-blue-400">2-Week</span> Launch Timeline
                </h1>
              </div>

              {/* Timeline */}
              <div className="space-y-4 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    week: 'Week 1',
                    title: 'Setup & Onboarding',
                    items: ['Sign partnership agreement', 'Onboard participating merchants', 'Configure event coins & rules', 'Prepare marketing materials'],
                    color: 'blue'
                  },
                  {
                    week: 'Week 2',
                    title: 'Launch & Support',
                    items: ['Set up Nuqta booth', 'Train booth staff', 'Go live on event day', '24/7 support during event'],
                    color: 'green'
                  }
                ].map((phase, idx) => (
                  <div key={idx} className={`bg-white/5 backdrop-blur-xl border ${
                    phase.color === 'green' ? 'border-green-500/30' : 'border-blue-500/30'
                  } rounded-2xl p-6`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`px-4 py-2 rounded-full ${
                        phase.color === 'green' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                      } font-bold`}>
                        {phase.week}
                      </div>
                      <h3 className="text-white font-bold text-xl">{phase.title}</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {phase.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                          <CheckCircle className={`w-4 h-4 flex-shrink-0 ${
                            phase.color === 'green' ? 'text-green-400' : 'text-blue-400'
                          }`} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* During event */}
              <div className="mt-6 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-2xl p-5">
                  <h4 className="text-[#c9a227] font-bold text-center mb-3">During Your Event</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {['Nuqta booth at entrance', 'Live dashboard access', 'Real-time support', 'Daily reports'].map((item, idx) => (
                      <div key={idx} className="text-slate-300 text-sm">{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 8: WHY NOW ====================
      case 8:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#c9a227] rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <Rocket className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">Opportunity</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Why <span className="text-[#c9a227]">Partner Now</span>?
                </h1>
              </div>

              {/* Reasons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    title: 'Merchant Retention Crisis',
                    desc: 'Exhibitors who don\'t make ROI don\'t come back. Nuqta guarantees they make money = they renew.',
                    icon: TrendingUp
                  },
                  {
                    title: 'Competitive Differentiation',
                    desc: 'Be the first event in your category to offer this. Merchants will choose your event over competitors.',
                    icon: Award
                  },
                  {
                    title: 'Prove Your Value',
                    desc: 'Show merchants real data on how much visitors spent. No more "we hope it worked" conversations.',
                    icon: BarChart3
                  },
                  {
                    title: 'Zero Risk Trial',
                    desc: 'If it doesn\'t work, you\'ve lost nothing. If it does, you gain revenue + merchants who can\'t wait to come back.',
                    icon: Shield
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-[#c9a227]" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* The Bottom Line */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-[#c9a227]/20 to-green-500/20 border-2 border-[#c9a227]/30 rounded-2xl p-6 text-center">
                  <p className="text-[#c9a227] font-bold mb-2">THE BOTTOM LINE</p>
                  <p className="text-white text-xl font-bold mb-2">Happy merchants come back. Unhappy merchants don&apos;t.</p>
                  <p className="text-slate-400">Nuqta makes your merchants happy. That&apos;s your gold mine.</p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 9: CONTACT ====================
      case 9:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#c9a227] rounded-full blur-[150px] opacity-20 animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-4xl w-full text-center px-2">
              {/* Headline */}
              <div className="animate-[slideDown_0.8s_ease-out]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                  Let&apos;s Make Your Event<br />
                  <span className="bg-gradient-to-r from-[#c9a227] to-[#d4b03f] bg-clip-text text-transparent">Unforgettable</span>
                </h1>
              </div>

              {/* Contact card */}
              <div className="relative mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-3xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-3xl p-8 sm:p-10">
                  <div className="w-20 h-20 rounded-full bg-[#c9a227]/20 flex items-center justify-center mx-auto mb-6">
                    <Handshake className="w-10 h-10 text-[#c9a227]" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Rejaul Karim</h2>
                  <p className="text-[#c9a227] font-semibold mb-6">Founder, Nuqta</p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                    <a href="mailto:rejaul@nuqtapp.com" className="flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-full font-bold hover:bg-[#d4b03f] transition-colors">
                      <Mail size={20} />
                      rejaul@nuqtapp.com
                    </a>
                    <a href="tel:+971503764345" className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors">
                      <Phone size={20} />
                      +971 50 376 4345
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center">
                    {['Zero cost partnership', '2-week launch', '10% revenue share'].map((item, idx) => (
                      <span key={idx} className="px-4 py-2 bg-[#c9a227]/20 text-[#c9a227] rounded-full text-sm font-semibold">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Nuqta branding */}
              <div className="animate-[fadeIn_1s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <p className="text-[#c9a227] text-3xl font-black tracking-wider mb-2">NUQTA</p>
                <p className="text-slate-400">UAE&apos;s Everyday Savings Platform</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative bg-[#0a1628] overflow-hidden">
      {/* Main slide content */}
      {renderSlide()}

      {/* Minimal Navigation - Right side dots */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[60] hidden md:flex flex-col items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => changeSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === idx
                ? 'bg-[#c9a227] scale-150'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            title={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Bottom Navigation - Compact */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60]">
        <div className="flex items-center gap-3 bg-black/60 backdrop-blur-xl rounded-full px-4 py-2 border border-white/10">
          <button
            onClick={() => changeSlide(currentSlide - 1)}
            disabled={currentSlide === 0}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={18} className="text-white" />
          </button>

          <span className="text-white text-sm font-medium min-w-[60px] text-center">
            {currentSlide + 1} / {totalSlides}
          </span>

          <button
            onClick={() => changeSlide(currentSlide + 1)}
            disabled={currentSlide === totalSlides - 1}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={18} className="text-white" />
          </button>
        </div>
      </div>

      {/* Mobile swipe hint */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[60] md:hidden">
        <p className="text-slate-500 text-xs">Use arrows or swipe to navigate</p>
      </div>

      {/* Keyboard hint - Desktop */}
      <div className="fixed bottom-4 right-4 z-[60] hidden lg:block">
        <div className="flex items-center gap-2 text-slate-500 text-xs">
          <span className="px-2 py-1 bg-white/10 rounded">←</span>
          <span className="px-2 py-1 bg-white/10 rounded">→</span>
          <span>or</span>
          <span className="px-2 py-1 bg-white/10 rounded">Space</span>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default PitchDeckExhibition;
