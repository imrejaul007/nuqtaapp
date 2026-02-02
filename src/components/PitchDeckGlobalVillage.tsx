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
  Repeat,
  Ticket,
  Coins,
  Calendar,
  Rocket,
  AlertCircle,
  CheckCircle,
  Gift,
  XCircle,
  MapPin,
  Clock,
  BarChart3,
  ShoppingBag,
  QrCode,
  Smartphone,
  Building2,
  Award,
  TrendingDown,
  Eye,
  Lock,
  Settings,
  Play,
  Handshake,
  LineChart,
  PiggyBank,
  Megaphone,
  HeartHandshake,
  Timer,
  Layers,
  Network,
  BadgeCheck,
  Wallet,
  Receipt,
  UserCheck,
  Globe,
  Briefcase,
  FileCheck,
  ArrowDown,
  Scan,
  CircleDollarSign,
  ShieldCheck,
  HelpCircle,
  Download,
  Camera,
  MessageSquare
} from 'lucide-react';

/**
 * GLOBAL VILLAGE PARTNERSHIP PITCH DECK - V2
 *
 * REVISED TO ADDRESS SKEPTICISM:
 * 1. Who is Nuqta? (Credibility)
 * 2. How does it actually work? (Visual user journey)
 * 3. What's the catch? (Transparency)
 * 4. Why would visitors download? (Adoption strategy)
 * 5. Risk mitigation & exit clause
 *
 * Brand colors: #c9a227 (gold), #0a1628 (dark blue)
 * GV accent: #00a651 (GV green)
 */

const PitchDeckGlobalVillage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = 12;

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
              <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-[#00a651] rounded-full blur-[80px] md:blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px]" />

            <div className="relative z-10 text-center max-w-6xl w-full px-2">
              {/* Partnership header */}
              <div className="mb-6 sm:mb-8 animate-[fadeIn_0.8s_ease-out]">
                <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#00a651]" />
                  <span className="text-sm sm:text-base md:text-lg text-slate-300 font-semibold">Revenue Partnership Proposal</span>
                </div>
              </div>

              {/* Main headline */}
              <div className="mb-8 sm:mb-12 md:mb-16 animate-[fadeIn_0.8s_ease-out]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 sm:mb-6">
                  How Global Village Can<br className="hidden sm:block" />
                  <span className="sm:hidden"> </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#00a651]">Unlock AED 200-400M in Tracked GMV</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium">
                  Without any technology investment or operational burden
                </p>
              </div>

              {/* Key promise */}
              <div className="mb-8 sm:mb-12 animate-[slideUp_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#00a651] rounded-2xl md:rounded-3xl blur-xl opacity-30" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                      {[
                        { value: 'AED 0', label: 'Cost to GV', sub: 'Zero investment' },
                        { value: '2 Weeks', label: 'To Launch', sub: 'Fully operational' },
                        { value: '+30%', label: 'Visitor Spend', sub: 'Average uplift' }
                      ].map((item, idx) => (
                        <div key={idx} className="text-center p-3 sm:p-4">
                          <p className="text-3xl sm:text-4xl md:text-5xl font-black text-[#c9a227]">{item.value}</p>
                          <p className="text-white font-bold text-sm sm:text-base mt-1">{item.label}</p>
                          <p className="text-slate-500 text-xs">{item.sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Partnership logos */}
              <div className="animate-[fadeIn_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <p className="text-slate-500 text-sm mb-4">A Partnership Between</p>
                <div className="flex items-center justify-center gap-6 sm:gap-10">
                  {/* Global Village logo placeholder */}
                  <div className="text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#00a651]/20 border-2 border-[#00a651]/30 flex items-center justify-center mx-auto mb-2">
                      <span className="text-[#00a651] font-black text-lg sm:text-xl">GV</span>
                    </div>
                    <p className="text-[#00a651] text-xs font-semibold">Global Village</p>
                  </div>

                  {/* X connector */}
                  <div className="text-slate-500 text-2xl font-light">×</div>

                  {/* Nuqta logo */}
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] via-[#d4b03f] to-[#c9a227] blur-lg opacity-30" />
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#c9a227]/20 border-2 border-[#c9a227]/30 flex items-center justify-center">
                        <span className="text-[#c9a227] font-black text-lg sm:text-xl">NUQTA</span>
                      </div>
                    </div>
                    <p className="text-[#c9a227] text-xs font-semibold mt-2">Loyalty Platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 1: WHO IS NUQTA (CREDIBILITY) ====================
      case 1:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#c9a227] rounded-full blur-[120px] opacity-20 animate-pulse" />
            </div>

            <div className="relative z-10 max-w-7xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 sm:mb-10 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <BadgeCheck className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">Who We Are</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Meet <span className="text-[#c9a227]">Nuqta</span>
                </h1>
              </div>

              {/* Company overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {/* Left: About */}
                <div className="relative">
                  <div className="absolute inset-0 bg-[#c9a227]/10 rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-[#c9a227]/30 rounded-2xl p-6 sm:p-8 h-full">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#c9a227] mb-4">What We Do</h3>
                    <p className="text-slate-300 text-sm sm:text-base mb-6">
                      Nuqta is a <span className="text-white font-semibold">loyalty and commerce platform</span> that helps offline businesses increase sales through smart rewards. We turn one-time visitors into repeat customers.
                    </p>
                    <div className="space-y-3">
                      {[
                        { icon: Globe, text: 'Based in Dubai, UAE' },
                        { icon: Target, text: 'Focused on GCC retail & hospitality' },
                        { icon: Rocket, text: 'Launching February 2026' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#c9a227]/20 flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-[#c9a227]" />
                          </div>
                          <span className="text-slate-300 text-sm">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Traction */}
                <div className="relative">
                  <div className="absolute inset-0 bg-[#00a651]/10 rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-[#00a651]/30 rounded-2xl p-6 sm:p-8 h-full">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#00a651] mb-4">Early Traction</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[
                        { value: '30+', label: 'Merchant LOIs', icon: FileCheck },
                        { value: '5', label: 'Category Partners', icon: Briefcase },
                        { value: 'AED 400K', label: 'Seed Raising', icon: CircleDollarSign },
                        { value: 'Feb 2026', label: 'Launch Date', icon: Calendar }
                      ].map((item, idx) => (
                        <div key={idx} className="text-center p-3 bg-white/5 rounded-xl">
                          <item.icon className="w-6 h-6 text-[#00a651] mx-auto mb-1" />
                          <p className="text-xl sm:text-2xl font-black text-white">{item.value}</p>
                          <p className="text-slate-400 text-xs">{item.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-[#00a651]/10 rounded-xl p-3">
                      <p className="text-[#00a651] text-sm font-semibold text-center">
                        Pre-launch with committed merchant pipeline
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Proven model - global examples */}
              <div className="mb-8 animate-[fadeIn_0.8s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                  <h4 className="text-white font-bold text-center mb-4">This Model Works Globally</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="p-3">
                      <p className="text-[#c9a227] font-bold text-lg">Fazoli&apos;s USA</p>
                      <p className="text-slate-400 text-xs">+37% visit frequency with loyalty coins</p>
                    </div>
                    <div className="p-3">
                      <p className="text-[#c9a227] font-bold text-lg">Octopus HK</p>
                      <p className="text-slate-400 text-xs">Theme parks use same model for 10M+ users</p>
                    </div>
                    <div className="p-3">
                      <p className="text-[#c9a227] font-bold text-lg">ENTERTAINER UAE</p>
                      <p className="text-slate-400 text-xs">Cashback drives 2x higher spending</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#c9a227] to-[#00a651] flex items-center justify-center text-white text-2xl sm:text-3xl font-black">
                        RK
                      </div>
                      <div className="text-center sm:text-left flex-1">
                        <h4 className="text-xl sm:text-2xl font-bold text-white">Rejaul Karim</h4>
                        <p className="text-[#c9a227] font-semibold">Founder & CEO</p>
                        <p className="text-slate-400 text-sm mt-1">
                          10+ years in tech & business development across UAE, building consumer platforms and merchant networks
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <div className="px-3 py-1.5 bg-white/10 rounded-full">
                          <span className="text-slate-300 text-xs">rejaul@nuqtapp.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 2: THE PROBLEMS ====================
      case 2:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/3 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-500 rounded-full blur-[100px] opacity-20 animate-pulse" />
            </div>

            <div className="relative z-10 max-w-7xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 sm:mb-12 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-4">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-semibold text-sm">The Hidden Revenue Leak</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  3 Problems Costing<br className="hidden sm:block" />
                  <span className="sm:hidden"> </span><span className="text-red-400">Millions Every Season</span>
                </h1>
              </div>

              {/* Problem cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {/* Problem 1 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-red-500/10 rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-red-500/30 rounded-2xl p-6 sm:p-8 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                        <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                      </div>
                      <span className="text-red-400 font-bold text-lg sm:text-xl">Problem #1</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Unpredictable Visitor Spend</h3>
                    <p className="text-slate-400 text-sm sm:text-base mb-4">
                      7 million visitors buy tickets, but in-park spending is inconsistent. Some spend AED 500+, others just AED 50.
                    </p>
                    <div className="bg-red-500/10 rounded-xl p-3 sm:p-4">
                      <p className="text-red-400 font-semibold text-sm sm:text-base">
                        &ldquo;No mechanism to encourage higher spending&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Problem 2 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-red-500/10 rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-red-500/30 rounded-2xl p-6 sm:p-8 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                        <Store className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                      </div>
                      <span className="text-red-400 font-bold text-lg sm:text-xl">Problem #2</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Merchant Frustration</h3>
                    <p className="text-slate-400 text-sm sm:text-base mb-4">
                      Merchants pay AED 300K-800K for stalls but have no guaranteed traffic. They compete blindly with 500+ stores.
                    </p>
                    <div className="bg-red-500/10 rounded-xl p-3 sm:p-4">
                      <p className="text-red-400 font-semibold text-sm sm:text-base">
                        &ldquo;Unhappy merchants = lower renewal rates&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Problem 3 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-red-500/10 rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-red-500/30 rounded-2xl p-6 sm:p-8 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                        <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                      </div>
                      <span className="text-red-400 font-bold text-lg sm:text-xl">Problem #3</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Zero Spending Visibility</h3>
                    <p className="text-slate-400 text-sm sm:text-base mb-4">
                      You know tickets sold, but not what visitors buy, where they shop, or why they don&apos;t spend more.
                    </p>
                    <div className="bg-red-500/10 rounded-xl p-3 sm:p-4">
                      <p className="text-red-400 font-semibold text-sm sm:text-base">
                        &ldquo;Can&apos;t optimize what you can&apos;t measure&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom insight */}
              <div className="mt-8 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-5 sm:p-6 text-center">
                  <p className="text-xl sm:text-2xl font-bold text-white">
                    Result: <span className="text-red-400">AED 100M+ in potential GMV</span> left unrealized every season
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 3: THE SOLUTION ====================
      case 3:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#00a651] rounded-full blur-[120px] opacity-20 animate-pulse" />
            </div>

            <div className="relative z-10 max-w-7xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 sm:mb-12 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00a651]/20 border border-[#00a651]/30 rounded-full mb-4">
                  <Rocket className="w-5 h-5 text-[#00a651]" />
                  <span className="text-[#00a651] font-semibold text-sm">The Solution</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  The <span className="text-[#00a651]">GV Event Coin</span> System
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 mt-3">Turning tickets into guaranteed spending</p>
              </div>

              {/* Core mechanism */}
              <div className="mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#00a651]/10 rounded-3xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#00a651]/30 rounded-3xl p-6 sm:p-8 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
                      {[
                        {
                          step: '1',
                          title: 'Ticket = Free Coins',
                          desc: 'AED 30 ticket gives 30 GV Coins',
                          icon: Ticket,
                          highlight: 'Feels like FREE money'
                        },
                        {
                          step: '2',
                          title: 'Spend AED 300 to Unlock',
                          desc: 'Coins only redeemable on AED 300+ purchase',
                          icon: ShoppingBag,
                          highlight: 'Drives higher baskets'
                        },
                        {
                          step: '3',
                          title: 'Earn More on Every Buy',
                          desc: '5% more coins on each purchase',
                          icon: Repeat,
                          highlight: 'Keeps them shopping'
                        },
                        {
                          step: '4',
                          title: '24-Hour Expiry',
                          desc: 'Use it or lose it - TODAY',
                          icon: Timer,
                          highlight: 'No procrastination'
                        }
                      ].map((item, idx) => (
                        <div key={idx} className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#00a651]/20 flex items-center justify-center mx-auto mb-3">
                            <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#00a651]" />
                          </div>
                          <div className="text-[#c9a227] text-xs font-bold mb-1">STEP {item.step}</div>
                          <h4 className="text-white font-bold text-sm sm:text-base mb-1">{item.title}</h4>
                          <p className="text-slate-400 text-xs mb-2">{item.desc}</p>
                          <div className="bg-[#00a651]/20 rounded-lg px-2 py-1">
                            <span className="text-[#00a651] text-xs font-semibold">{item.highlight}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Psychology explanation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-white/5 backdrop-blur-xl border border-[#c9a227]/30 rounded-2xl p-5 sm:p-6">
                  <h4 className="text-[#c9a227] font-bold text-lg mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    The Psychology
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-base">
                    Visitor thinks: <span className="text-white font-semibold">&ldquo;I already have AED 30 in coins. If I spend AED 300, my entry is basically FREE!&rdquo;</span>
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-[#00a651]/30 rounded-2xl p-5 sm:p-6">
                  <h4 className="text-[#00a651] font-bold text-lg mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    The Result
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-base">
                    Visitors who would spend AED 150 now <span className="text-white font-semibold">spend AED 350+ to unlock their &ldquo;free&rdquo; entry</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 4: VISUAL USER JOURNEY ====================
      case 4:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px] opacity-20 animate-pulse" />
            </div>

            <div className="relative z-10 max-w-7xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 sm:mb-10 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full mb-4">
                  <Smartphone className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold text-sm">User Experience</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  How It <span className="text-blue-400">Actually Works</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 mt-3">The visitor journey, step by step</p>
              </div>

              {/* Journey steps */}
              <div className="relative animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {[
                    {
                      step: '1',
                      title: 'Download at Gate',
                      desc: 'Scan QR at entrance, download Nuqta app',
                      icon: Download,
                      detail: 'Takes 30 seconds',
                      color: 'blue'
                    },
                    {
                      step: '2',
                      title: 'Show Ticket',
                      desc: 'Link ticket barcode or enter ticket number',
                      icon: Ticket,
                      detail: 'Auto-verification',
                      color: 'purple'
                    },
                    {
                      step: '3',
                      title: 'Get GV Coins',
                      desc: '30 coins appear instantly in wallet',
                      icon: Coins,
                      detail: 'Valid 24 hours',
                      color: 'green'
                    },
                    {
                      step: '4',
                      title: 'Shop & Scan Receipt',
                      desc: 'Buy anything, photo the receipt',
                      icon: Camera,
                      detail: 'No POS integration',
                      color: 'orange'
                    },
                    {
                      step: '5',
                      title: 'Redeem & Earn',
                      desc: 'Use coins + earn 5% more coins',
                      icon: Gift,
                      detail: 'Spend more, save more',
                      color: 'gold'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="relative">
                      {/* Connector line */}
                      {idx < 4 && (
                        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent z-0" />
                      )}

                      <div className={`relative bg-white/5 backdrop-blur-xl border border-${item.color === 'gold' ? '[#c9a227]' : item.color + '-500'}/30 rounded-2xl p-4 sm:p-5 h-full`}>
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${
                          item.color === 'gold' ? 'bg-[#c9a227]/20' :
                          item.color === 'green' ? 'bg-green-500/20' :
                          item.color === 'orange' ? 'bg-orange-500/20' :
                          item.color === 'purple' ? 'bg-purple-500/20' :
                          'bg-blue-500/20'
                        } flex items-center justify-center mb-3`}>
                          <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                            item.color === 'gold' ? 'text-[#c9a227]' :
                            item.color === 'green' ? 'text-green-400' :
                            item.color === 'orange' ? 'text-orange-400' :
                            item.color === 'purple' ? 'text-purple-400' :
                            'text-blue-400'
                          }`} />
                        </div>
                        <div className="text-xs font-bold text-slate-500 mb-1">STEP {item.step}</div>
                        <h4 className="text-white font-bold text-sm sm:text-base mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-xs mb-2">{item.desc}</p>
                        <div className={`inline-block px-2 py-1 rounded-lg ${
                          item.color === 'gold' ? 'bg-[#c9a227]/20' :
                          item.color === 'green' ? 'bg-green-500/20' :
                          item.color === 'orange' ? 'bg-orange-500/20' :
                          item.color === 'purple' ? 'bg-purple-500/20' :
                          'bg-blue-500/20'
                        }`}>
                          <span className={`text-xs font-semibold ${
                            item.color === 'gold' ? 'text-[#c9a227]' :
                            item.color === 'green' ? 'text-green-400' :
                            item.color === 'orange' ? 'text-orange-400' :
                            item.color === 'purple' ? 'text-purple-400' :
                            'text-blue-400'
                          }`}>{item.detail}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key point - No POS */}
              <div className="mt-8 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-7 h-7 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">No POS Integration Required</h4>
                      <p className="text-slate-400 text-sm">
                        Users photo their receipts. Our AI reads the merchant name and amount. GV&apos;s POS stays completely untouched.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 5: HOW VISITORS WILL DOWNLOAD ====================
      case 5:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Background */}
            <div className="absolute inset-0">
              <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[120px] opacity-20 animate-pulse" />
            </div>

            <div className="relative z-10 max-w-7xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-6 sm:mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-4">
                  <HelpCircle className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-semibold text-sm">Valid Concern</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  &ldquo;Why Would Visitors<br className="hidden sm:block" />
                  <span className="sm:hidden"> </span><span className="text-purple-400">Download Another App?</span>&rdquo;
                </h1>
              </div>

              {/* The Big Answer */}
              <div className="mb-6 animate-[fadeIn_0.8s_ease-out_0.1s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227]/20 to-[#00a651]/20 rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-2xl p-5 sm:p-6 text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Because Nuqta is <span className="text-[#c9a227]">NOT</span> just for Global Village
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base">
                      It&apos;s UAE&apos;s universal loyalty app. Download once at GV, use <span className="text-[#c9a227] font-semibold">everywhere, everyday</span> - restaurants, salons, cafes, retail across the country.
                    </p>
                  </div>
                </div>
              </div>

              {/* Two coin types explanation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {/* GV Coins */}
                <div className="relative">
                  <div className="absolute inset-0 bg-[#00a651]/10 rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-[#00a651]/30 rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#00a651]/20 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#00a651]" />
                      </div>
                      <div>
                        <h4 className="text-[#00a651] font-bold text-lg">GV Event Coins</h4>
                        <p className="text-slate-400 text-xs">From ticket purchase</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-slate-300">
                        <CheckCircle className="w-4 h-4 text-[#00a651] flex-shrink-0" />
                        Valid inside Global Village only
                      </li>
                      <li className="flex items-center gap-2 text-slate-300">
                        <CheckCircle className="w-4 h-4 text-[#00a651] flex-shrink-0" />
                        Expire in 24 hours
                      </li>
                      <li className="flex items-center gap-2 text-slate-300">
                        <CheckCircle className="w-4 h-4 text-[#00a651] flex-shrink-0" />
                        Unlock on AED 300+ spend
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Nuqta Coins */}
                <div className="relative">
                  <div className="absolute inset-0 bg-[#c9a227]/10 rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-[#c9a227]/30 rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#c9a227]/20 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-[#c9a227]" />
                      </div>
                      <div>
                        <h4 className="text-[#c9a227] font-bold text-lg">Nuqta Coins</h4>
                        <p className="text-slate-400 text-xs">Earned on every GV purchase</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-slate-300">
                        <CheckCircle className="w-4 h-4 text-[#c9a227] flex-shrink-0" />
                        Valid across <span className="text-white font-semibold">ALL UAE</span>
                      </li>
                      <li className="flex items-center gap-2 text-slate-300">
                        <CheckCircle className="w-4 h-4 text-[#c9a227] flex-shrink-0" />
                        Never expire
                      </li>
                      <li className="flex items-center gap-2 text-slate-300">
                        <CheckCircle className="w-4 h-4 text-[#c9a227] flex-shrink-0" />
                        Redeemable at 500+ partner merchants
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3 Incentives */}
              <div className="mb-6 animate-[fadeIn_0.8s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      icon: Gift,
                      title: 'FREE AED 30 at GV',
                      desc: 'Ticket value becomes instant coins',
                      color: 'green'
                    },
                    {
                      icon: Wallet,
                      title: 'Daily Savings Across UAE',
                      desc: 'Use Nuqta Coins at cafes, restaurants, salons',
                      color: 'gold'
                    },
                    {
                      icon: Repeat,
                      title: 'Earn Everywhere, Redeem at GV',
                      desc: 'Nuqta Coins from daily shopping work inside GV too',
                      color: 'purple'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className={`text-center p-4 bg-white/5 rounded-xl border ${
                      item.color === 'gold' ? 'border-[#c9a227]/30' :
                      item.color === 'green' ? 'border-[#00a651]/30' :
                      'border-purple-500/30'
                    }`}>
                      <div className={`w-10 h-10 rounded-lg ${
                        item.color === 'gold' ? 'bg-[#c9a227]/20' :
                        item.color === 'green' ? 'bg-[#00a651]/20' :
                        'bg-purple-500/20'
                      } flex items-center justify-center mx-auto mb-2`}>
                        <item.icon className={`w-5 h-5 ${
                          item.color === 'gold' ? 'text-[#c9a227]' :
                          item.color === 'green' ? 'text-[#00a651]' :
                          'text-purple-400'
                        }`} />
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-white/5 backdrop-blur-xl border border-purple-500/30 rounded-xl p-4">
                  <h4 className="text-purple-400 font-bold text-sm mb-2">Doesn&apos;t Compete with GV App</h4>
                  <p className="text-slate-300 text-xs">
                    GV app = tickets & navigation. Nuqta = savings & rewards. <span className="text-white font-semibold">Different purposes.</span>
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-[#00a651]/30 rounded-xl p-4">
                  <h4 className="text-[#00a651] font-bold text-sm mb-2">We Handle Everything</h4>
                  <p className="text-slate-300 text-xs">
                    Booth staff, QR materials, marketing collateral. <span className="text-white font-semibold">Zero effort from GV team.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 6: THE MATH ====================
      case 6:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-green-500 rounded-full blur-[120px] opacity-20 animate-pulse" />
            </div>

            <div className="relative z-10 max-w-7xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-6 sm:mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-4">
                  <BarChart3 className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold text-sm">The Numbers</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  <span className="text-green-400">AED 200-400M</span> GMV Tracked
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 mt-3">Every transaction through Nuqta, not just redemptions</p>
              </div>

              {/* Key insight - why all transactions */}
              <div className="mb-6 animate-[fadeIn_0.8s_ease-out_0.15s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-2xl p-4 text-center">
                  <p className="text-white font-semibold text-sm sm:text-base">
                    Users scan <span className="text-[#c9a227]">every receipt</span> to earn coins → Nuqta tracks <span className="text-[#c9a227]">ALL spending</span>, not just redemptions
                  </p>
                </div>
              </div>

              {/* Main calculation */}
              <div className="mb-6 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-[#c9a227]/20 rounded-3xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-green-500/30 rounded-3xl p-5 sm:p-6">
                    {/* Inputs with sources */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-5">
                      {[
                        { label: 'GV Total GMV/Season', value: '~AED 2B', note: '7M visitors × AED 300 avg' },
                        { label: 'Nuqta Users', value: '500K-1M', note: '7-14% of visitors' },
                        { label: 'Avg Spend/User', value: 'AED 400', note: 'Multiple visits' },
                        { label: 'GMV Through Nuqta', value: 'AED 200-400M', note: '10-20% of total' }
                      ].map((item, idx) => (
                        <div key={idx} className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                          <p className="text-slate-400 text-xs mb-1">{item.label}</p>
                          <p className="text-xl sm:text-2xl font-black text-green-400">{item.value}</p>
                          <p className="text-slate-500 text-xs">{item.note}</p>
                        </div>
                      ))}
                    </div>

                    {/* Revenue breakdown */}
                    <div className="bg-black/30 rounded-2xl p-4 sm:p-5">
                      <p className="text-[#c9a227] font-bold text-center mb-3">Revenue from All Transactions</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-white/10">
                              <th className="text-left py-2 px-2 text-slate-400">Scenario</th>
                              <th className="text-center py-2 px-2 text-slate-400">GMV Tracked</th>
                              <th className="text-center py-2 px-2 text-slate-400">Nuqta (3%)</th>
                              <th className="text-center py-2 px-2 text-slate-400">GV Gets (10%)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-white/5">
                              <td className="py-2 px-2 text-red-400">Floor</td>
                              <td className="text-center py-2 px-2 text-white">AED 100M</td>
                              <td className="text-center py-2 px-2 text-white">AED 3M</td>
                              <td className="text-center py-2 px-2 text-red-400 font-bold">AED 300K</td>
                            </tr>
                            <tr className="border-b border-white/5 bg-green-500/5">
                              <td className="py-2 px-2 text-green-400">Base</td>
                              <td className="text-center py-2 px-2 text-white">AED 250M</td>
                              <td className="text-center py-2 px-2 text-white">AED 7.5M</td>
                              <td className="text-center py-2 px-2 text-green-400 font-bold">AED 750K</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-2 text-[#c9a227]">Cap</td>
                              <td className="text-center py-2 px-2 text-white">AED 500M</td>
                              <td className="text-center py-2 px-2 text-white">AED 15M</td>
                              <td className="text-center py-2 px-2 text-[#c9a227] font-bold">AED 1.5M</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom insight */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                    <p className="text-green-400 font-bold text-lg sm:text-xl">GV Earns AED 300K-1.5M</p>
                    <p className="text-slate-400 text-xs">10% of Nuqta revenue, zero investment</p>
                  </div>
                  <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-4 text-center">
                    <p className="text-[#c9a227] font-bold text-lg sm:text-xl">+AED 80M GMV Uplift</p>
                    <p className="text-slate-400 text-xs">Additional spending driven by coin mechanics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 7: FULL TRANSPARENCY - WHAT'S THE CATCH ====================
      case 7:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-[#c9a227] rounded-full blur-[120px] opacity-20 animate-pulse" />
            </div>

            <div className="relative z-10 max-w-7xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 sm:mb-10 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <Eye className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">Full Transparency</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  &ldquo;What&apos;s the <span className="text-[#c9a227]">Catch?</span>&rdquo;
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 mt-3">Here&apos;s exactly how everyone benefits</p>
              </div>

              {/* Transparency breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {/* GV Gets */}
                <div className="relative">
                  <div className="absolute inset-0 bg-[#00a651]/10 rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-[#00a651]/30 rounded-2xl p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#00a651]/20 flex items-center justify-center mb-4">
                      <Building2 className="w-6 h-6 text-[#00a651]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#00a651] mb-3">GV Gets</h3>
                    <ul className="space-y-2">
                      {[
                        '+AED 80M GMV uplift',
                        '10% of Nuqta\'s revenue',
                        'Free marketing to 500K+ Nuqta users',
                        'Higher merchant AOV (AED 300+ min)',
                        'Nuqta users bring coins to spend at GV',
                        'Real-time spending analytics',
                        'Happier merchants = higher renewals',
                        'Zero cost, zero risk'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-300 text-xs">
                          <CheckCircle className="w-3.5 h-3.5 text-[#00a651] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 p-2 bg-[#00a651]/10 rounded-xl">
                      <p className="text-[#00a651] font-bold text-center text-sm">All Upside, No Downside</p>
                    </div>
                  </div>
                </div>

                {/* Merchants Pay */}
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                      <Store className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-400 mb-4">Merchants Pay</h3>
                    <ul className="space-y-3">
                      {[
                        '5-8% commission on Nuqta sales',
                        'Only pay when they make money',
                        'Fund the 5% customer reward',
                        'No upfront fees',
                        'Can opt out anytime'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                          <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-3 bg-blue-500/10 rounded-xl">
                      <p className="text-blue-400 font-bold text-center">Merchants Pay: 5-8%</p>
                      <p className="text-slate-400 text-xs text-center">Commission on Nuqta-driven sales only</p>
                    </div>
                  </div>
                </div>

                {/* Nuqta Gets */}
                <div className="relative">
                  <div className="absolute inset-0 bg-[#c9a227]/10 rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-[#c9a227]/30 rounded-2xl p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center mb-4">
                      <Sparkles className="w-6 h-6 text-[#c9a227]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#c9a227] mb-4">Nuqta Gets</h3>
                    <ul className="space-y-3">
                      {[
                        'Share of merchant commission (~3%)',
                        'Minus 10% to GV',
                        'Transaction processing fees',
                        'User engagement data (anonymized)'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                          <ArrowRight className="w-4 h-4 text-[#c9a227] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-3 bg-[#c9a227]/10 rounded-xl">
                      <p className="text-[#c9a227] font-bold text-center">We Share the Upside</p>
                      <p className="text-slate-400 text-xs text-center">GV earns when we earn</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why not build it yourself */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-5 sm:p-6">
                  <h4 className="text-purple-400 font-bold text-lg mb-4 text-center">&ldquo;Why not build this ourselves?&rdquo;</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <p className="text-white font-bold mb-1">AED 2-5M+</p>
                      <p className="text-slate-400 text-xs">Development & maintenance cost</p>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <p className="text-white font-bold mb-1">12-18 Months</p>
                      <p className="text-slate-400 text-xs">Time to build & launch</p>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <p className="text-white font-bold mb-1">Ongoing Team</p>
                      <p className="text-slate-400 text-xs">Engineers, support, marketing</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm text-center mt-4">
                    With Nuqta: <span className="text-[#00a651] font-semibold">2 weeks to launch, AED 0 cost, no ongoing headaches</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 8: MERCHANT BENEFITS ====================
      case 8:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Background */}
            <div className="absolute inset-0">
              <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px] opacity-20 animate-pulse" />
            </div>

            <div className="relative z-10 max-w-7xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 sm:mb-10 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full mb-4">
                  <Store className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold text-sm">Merchant Benefits</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Your Merchants Will<br className="hidden sm:block" />
                  <span className="sm:hidden"> </span><span className="text-blue-400">Thank You</span>
                </h1>
              </div>

              {/* Before/After comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {/* Before */}
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500/10 rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-red-500/30 rounded-2xl p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                        <XCircle className="w-5 h-5 text-red-400" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-red-400">Today&apos;s Reality</h3>
                    </div>
                    <ul className="space-y-4">
                      {[
                        { text: 'Paid AED 500K+ for stall', sub: 'Huge upfront cost' },
                        { text: 'Hope visitors find them', sub: 'No guaranteed traffic' },
                        { text: 'Compete with 500+ stores', sub: 'Visibility problem' },
                        { text: 'Zero marketing attribution', sub: 'No ROI tracking' },
                        { text: 'Gambling on foot traffic', sub: 'Unpredictable revenue' }
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                          </div>
                          <div>
                            <span className="text-white text-sm sm:text-base">{item.text}</span>
                            <span className="text-slate-500 text-xs block">{item.sub}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* After */}
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500/10 rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-green-500/30 rounded-2xl p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-green-400">With Nuqta</h3>
                    </div>
                    <ul className="space-y-4">
                      {[
                        { text: 'Featured in app to 100K+ users', sub: 'Instant visibility' },
                        { text: 'Visitors MUST spend to use coins', sub: 'Guaranteed traffic' },
                        { text: 'Higher average bills (AED 300+)', sub: 'Bigger transactions' },
                        { text: 'Track exact ROI per customer', sub: 'Full attribution' },
                        { text: 'Pay only when they make money', sub: 'Zero-risk model' }
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-white text-sm sm:text-base">{item.text}</span>
                            <span className="text-green-400/70 text-xs block">{item.sub}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Merchant quote */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-blue-500/10 to-[#c9a227]/10 border border-blue-500/20 rounded-2xl p-5 sm:p-6 text-center">
                  <p className="text-lg sm:text-xl text-white italic mb-2">
                    &ldquo;5-8% commission on NEW sales I wouldn&apos;t have gotten otherwise? That&apos;s not a cost, that&apos;s free marketing.&rdquo;
                  </p>
                  <p className="text-blue-400 text-sm font-semibold">— How smart merchants will see it</p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 9: RISK MITIGATION ====================
      case 9:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-green-500 rounded-full blur-[120px] opacity-20 animate-pulse" />
            </div>

            <div className="relative z-10 max-w-7xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 sm:mb-10 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-4">
                  <ShieldCheck className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold text-sm">Risk Mitigation</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  What If It <span className="text-green-400">Doesn&apos;t Work?</span>
                </h1>
              </div>

              {/* Risk items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    risk: 'What if visitors don\'t download?',
                    mitigation: 'We provide booth staff and QR marketing at entrances. If download rates are low, we stop and GV has lost nothing.',
                    icon: Download
                  },
                  {
                    risk: 'What if merchants don\'t want to join?',
                    mitigation: 'We onboard merchants ourselves. They get guaranteed traffic with zero upfront cost. In pilot, we focus on one pavilion where we can engage every merchant directly.',
                    icon: Store
                  },
                  {
                    risk: 'What if it hurts GV\'s brand?',
                    mitigation: 'Co-branded as "GV Rewards powered by Nuqta". GV approves all messaging. Kill switch available at any time.',
                    icon: Shield
                  },
                  {
                    risk: 'What if the tech fails?',
                    mitigation: 'Receipt scanning works offline. Manual verification backup. We\'ve stress-tested for 10K concurrent users.',
                    icon: Zap
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl" />
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-red-400" />
                        </div>
                        <div>
                          <h4 className="text-red-400 font-bold mb-2">{item.risk}</h4>
                          <p className="text-slate-300 text-sm">{item.mitigation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Exit clause */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500/10 rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-green-500/30 rounded-2xl p-6 sm:p-8 text-center">
                    <ShieldCheck className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">The Exit Clause</h3>
                    <p className="text-slate-300 text-lg mb-4">
                      If pilot metrics don&apos;t hit targets, GV can walk away with <span className="text-green-400 font-bold">zero financial obligation</span>.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      {[
                        'No lock-in period',
                        '7-day termination notice',
                        'All data belongs to GV'
                      ].map((item, idx) => (
                        <div key={idx} className="px-4 py-2 bg-green-500/20 rounded-full">
                          <span className="text-green-400 text-sm font-semibold">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 10: THE PILOT ====================
      case 10:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#00a651] rounded-full blur-[120px] opacity-20 animate-pulse" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 sm:mb-10 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00a651]/20 border border-[#00a651]/30 rounded-full mb-4">
                  <Play className="w-5 h-5 text-[#00a651]" />
                  <span className="text-[#00a651] font-semibold text-sm">Zero-Risk Pilot</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Let&apos;s <span className="text-[#00a651]">Prove It Works</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 mt-3">One pavilion. 2 weekends. Zero cost. Full data.</p>
              </div>

              {/* Pilot focus - India Pavilion */}
              <div className="mb-6 animate-[fadeIn_0.8s_ease-out_0.15s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-green-500/20 rounded-2xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-orange-500/30 rounded-2xl p-5 sm:p-6 text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Pilot Location: <span className="text-orange-400">India Pavilion</span>
                    </h3>
                    <p className="text-slate-300 text-sm">
                      One of GV&apos;s busiest pavilions with 40+ shops, diverse F&B, and high footfall - perfect controlled environment to prove the model.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pilot details */}
              <div className="mb-6 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#00a651]/10 rounded-3xl blur-xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#00a651]/30 rounded-3xl p-6 sm:p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6">
                      {[
                        { value: '1', label: 'Pavilion', icon: Building2 },
                        { value: '40+', label: 'Shops', icon: Store },
                        { value: '2', label: 'Weekends', icon: Calendar },
                        { value: 'AED 0', label: 'Cost to GV', icon: DollarSign }
                      ].map((item, idx) => (
                        <div key={idx} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                          <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#00a651] mx-auto mb-2" />
                          <p className="text-2xl sm:text-3xl font-black text-white">{item.value}</p>
                          <p className="text-slate-400 text-xs sm:text-sm">{item.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Success metrics */}
                    <div className="bg-black/30 rounded-2xl p-4 sm:p-6">
                      <h4 className="text-[#c9a227] font-bold text-center mb-4">Success Metrics We&apos;ll Track</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          { metric: 'App Downloads', target: '2,000+' },
                          { metric: 'Redemption Rate', target: '30%+' },
                          { metric: 'GMV Tracked', target: 'AED 200K+' },
                          { metric: 'Merchant NPS', target: '40+' }
                        ].map((item, idx) => (
                          <div key={idx} className="text-center">
                            <p className="text-slate-400 text-xs mb-1">{item.metric}</p>
                            <p className="text-[#00a651] font-bold text-lg sm:text-xl">{item.target}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What we need */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-white/5 backdrop-blur-xl border border-[#c9a227]/30 rounded-2xl p-5 sm:p-6">
                  <h4 className="text-[#c9a227] font-bold text-lg mb-4 flex items-center gap-2">
                    <Handshake className="w-5 h-5" />
                    What We Need from GV
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Letter of partnership intent',
                      'Access to India Pavilion merchants',
                      'Small booth at pavilion entrance',
                      'Logo on pilot materials',
                      'One GV liaison contact'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                        <ArrowRight className="w-4 h-4 text-[#c9a227]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-[#00a651]/30 rounded-2xl p-5 sm:p-6">
                  <h4 className="text-[#00a651] font-bold text-lg mb-4 flex items-center gap-2">
                    <Gift className="w-5 h-5" />
                    What GV Gets
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Full pilot results & data',
                      'Merchant feedback report',
                      'Visitor behavior insights',
                      'GMV impact analysis',
                      'Blueprint for all pavilions'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#00a651]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 11: THE ASK ====================
      case 11:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            {/* Background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#c9a227] rounded-full blur-[120px] opacity-25 animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00a651] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-2 text-center">
              {/* Main message */}
              <div className="mb-8 sm:mb-12 animate-[fadeIn_0.8s_ease-out]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                  One Partnership.<br className="hidden sm:block" />
                  <span className="sm:hidden"> </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#00a651]">AED 300K-1.5M Revenue for GV.</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
                  Zero investment. Zero risk. Zero operational burden.<br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>Just higher GMV and happier merchants.
                </p>
              </div>

              {/* Summary cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 sm:mb-12 animate-[slideUp_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { icon: Building2, title: 'For GV', items: ['+AED 80M GMV', 'Full analytics', 'Zero cost'] },
                  { icon: Store, title: 'For Merchants', items: ['Guaranteed traffic', 'Higher bills', 'ROI tracking'] },
                  { icon: Users, title: 'For Visitors', items: ['Free coins', 'Real savings', 'Better experience'] }
                ].map((card, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6">
                    <card.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#c9a227] mx-auto mb-3" />
                    <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
                    <ul className="space-y-1">
                      {card.items.map((item, i) => (
                        <li key={i} className="text-slate-300 text-sm">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="relative inline-block w-full max-w-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227] to-[#00a651] rounded-2xl blur-xl opacity-50" />
                  <div className="relative bg-gradient-to-r from-[#c9a227] to-[#00a651] rounded-2xl p-6 sm:p-8 md:p-10">
                    <p className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-4">
                      Let&apos;s start the pilot.
                    </p>
                    <p className="text-white/80 text-sm sm:text-base mb-6">
                      If it works, we scale to full season. If it doesn&apos;t, you&apos;ve lost nothing.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                      <div className="px-5 py-2.5 bg-white/20 backdrop-blur rounded-full">
                        <span className="text-white font-bold">Rejaul Karim</span>
                      </div>
                      <div className="px-5 py-2.5 bg-white/20 backdrop-blur rounded-full">
                        <span className="text-white font-bold">rejaul@nuqtapp.com</span>
                      </div>
                      <div className="px-5 py-2.5 bg-white/20 backdrop-blur rounded-full">
                        <span className="text-white font-bold">+971 50 123 4567</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer tagline */}
              <div className="mt-8 animate-[fadeIn_0.8s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]">
                <p className="text-slate-500 text-sm">
                  &ldquo;Global Village controls the rules. Nuqta just executes.&rdquo;
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative">
      {renderSlide()}

      {/* Minimal Navigation - Right side */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[60] hidden md:flex flex-col items-center gap-2">
        {/* Slide dots */}
        <div className="flex flex-col items-center gap-1.5 bg-black/40 backdrop-blur-xl rounded-full py-3 px-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              className={`transition-all rounded-full ${
                index === currentSlide
                  ? 'bg-[#c9a227] w-2.5 h-2.5 shadow-lg shadow-[#c9a227]/50'
                  : 'bg-white/30 hover:bg-white/60 w-2 h-2'
              }`}
              title={['Cover', 'About', 'Problem', 'Solution', 'How', 'Why', 'Math', 'Catch?', 'Merchants', 'Risk', 'Pilot', 'Next'][index]}
            />
          ))}
        </div>
      </div>

      {/* Bottom Navigation - Compact */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60]">
        <div className="flex items-center gap-3 bg-black/60 backdrop-blur-xl rounded-full px-4 py-2 border border-white/10">
          {/* Prev Button */}
          <button
            onClick={() => changeSlide(currentSlide - 1)}
            disabled={currentSlide === 0}
            className="p-1.5 rounded-full bg-[#c9a227] hover:bg-[#d4b03f] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={16} className="text-white" />
          </button>

          {/* Slide Counter */}
          <p className="text-white text-sm font-bold min-w-[60px] text-center">
            {currentSlide + 1} <span className="text-white/50">/</span> {totalSlides}
          </p>

          {/* Next Button */}
          <button
            onClick={() => changeSlide(currentSlide + 1)}
            disabled={currentSlide === totalSlides - 1}
            className="p-1.5 rounded-full bg-[#c9a227] hover:bg-[#d4b03f] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={16} className="text-white" />
          </button>
        </div>
      </div>

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

export default PitchDeckGlobalVillage;
