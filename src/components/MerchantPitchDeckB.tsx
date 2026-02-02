'use client';

import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Zap,
  Shield,
  DollarSign,
  ArrowRight,
  Sparkles,
  Users,
  Store,
  Coins,
  Rocket,
  CheckCircle,
  Gift,
  BarChart3,
  Smartphone,
  Award,
  Eye,
  Play,
  Handshake,
  Target,
  Repeat,
  Heart,
  Clock,
  MapPin,
  Percent,
  CreditCard,
  Phone,
  Mail,
  Ticket,
  Globe,
  Building2,
  Wallet,
  Share2,
  Instagram,
  MessageCircle,
  Send,
  Settings,
  FileText,
  Bell,
  Download,
  Lock
} from 'lucide-react';

/**
 * MERCHANT PITCH DECK - ENGINE B (Low-Margin Merchants)
 *
 * For merchants with LOW MARGINS (5-20%) who cannot afford high cashback rates:
 * - Supermarkets & Grocery (2-5% margin)
 * - Gold & Jewelry (10-15% margin)
 * - Electronics (5-10% margin)
 * - Large Retail Chains
 *
 * Key difference from Engine A (high-margin):
 * - Lower cashback: 5% fixed (vs 5-10% for Engine A)
 * - Lower commission: 5.5-8% total (vs 15-20% for Engine A)
 * - Same loyalty model - customers earn coins on purchases
 * - NO minimum spend threshold (unlike event model)
 * - PG fees shown separately (transparent billing)
 *
 * This is REGULAR loyalty like Engine A, just with margin-friendly rates.
 * For EVENT-based coin unlock model, see GV Deck or Exhibition Deck.
 *
 * Brand colors: #c9a227 (gold), #0a1628 (dark blue)
 */

const MerchantPitchDeckB = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = 14; // Added: Social/Viral (slide 5), Merchant OS (slide 6)

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
                <Store className="w-4 h-4 text-[#c9a227]" />
                <span className="text-[#c9a227] font-semibold text-sm">For Low-Margin & High-Volume Merchants</span>
              </div>

              {/* Main title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-[slideDown_0.8s_ease-out]">
                Turn Browsers Into<br />
                <span className="bg-gradient-to-r from-[#c9a227] to-[#d4b03f] bg-clip-text text-transparent">High-Value Buyers</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto animate-[fadeIn_1s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
                Build customer loyalty without cutting into your margins. Pay only when they buy.
              </p>

              {/* Key stats */}
              <div className="flex flex-wrap justify-center gap-4 mb-10 animate-[fadeIn_1s_ease-out_0.5s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { value: 'AED 0', label: 'Upfront Cost' },
                  { value: '5%', label: 'Fixed Cashback Rate' },
                  { value: '500K+', label: 'Active Nuqta Users' }
                ].map((stat, idx) => (
                  <div key={idx} className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-center">
                    <p className="text-[#c9a227] text-xl sm:text-2xl font-black">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[slideUp_0.8s_ease-out_0.7s] opacity-0 [animation-fill-mode:forwards]">
                <button
                  onClick={() => changeSlide(1)}
                  className="px-8 py-4 bg-gradient-to-r from-[#c9a227] to-[#d4b03f] text-[#0a1628] font-bold rounded-full text-lg flex items-center gap-2 hover:shadow-[0_0_30px_rgba(201,162,39,0.4)] transition-all"
                >
                  <Play size={20} />
                  See How It Works
                </button>
              </div>

              {/* Merchant types */}
              <div className="mt-10 animate-[fadeIn_1s_ease-out_0.9s] opacity-0 [animation-fill-mode:forwards]">
                <p className="text-slate-500 text-sm mb-3">Perfect for</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {['Supermarkets', 'Electronics', 'Gold & Jewelry', 'Retail Chains', 'Pharmacies', 'Grocery Stores'].map((venue, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-sm">
                      {venue}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nuqta branding */}
              <div className="mt-8 animate-[fadeIn_1s_ease-out_1.1s] opacity-0 [animation-fill-mode:forwards]">
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
                  Thin Margins, <span className="text-red-400">Can&apos;t Discount</span>
                </h1>
              </div>

              {/* Problems grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    stat: '5-15%',
                    label: 'Your Margin',
                    desc: 'Supermarkets, electronics, gold - you operate on razor-thin margins. Every percentage matters.',
                    icon: DollarSign
                  },
                  {
                    stat: 'AED 80',
                    label: 'Small Purchases',
                    desc: 'Customers buy small. You need bigger baskets to make money, but how do you encourage that?',
                    icon: Users
                  },
                  {
                    stat: '10-20%',
                    label: 'Can\'t Give Away',
                    desc: 'Other loyalty apps want 10-20% cashback. That wipes out your entire profit. Not happening.',
                    icon: Percent
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

              {/* Key insight */}
              <div className="mt-8 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-xl border border-red-500/20 rounded-2xl p-6 text-center">
                  <p className="text-white text-lg font-semibold">
                    You need a loyalty solution that <span className="text-red-400 font-bold">works with your margins</span>, not against them. One that guarantees big-ticket sales.
                  </p>
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
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <Sparkles className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">The Solution</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  <span className="text-[#c9a227]">Loyalty That Protects</span> Your Margins
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 mt-4">Fixed 5% cashback. Lower commission. Built for businesses like yours.</p>
              </div>

              {/* The Magic */}
              <div className="relative mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227]/10 to-purple-500/10 rounded-3xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-3xl p-6 sm:p-8">
                  <h3 className="text-[#c9a227] font-bold text-center mb-6 text-xl">How It Works</h3>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                    <div className="px-5 py-4 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[200px]">
                      <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <p className="text-white font-bold">Customer Finds You</p>
                      <p className="text-slate-400 text-sm">In Nuqta app</p>
                    </div>
                    <ArrowRight className="text-[#c9a227] hidden md:block" size={24} />
                    <span className="text-[#c9a227] md:hidden text-xl">↓</span>
                    <div className="px-5 py-4 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[200px]">
                      <Store className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                      <p className="text-white font-bold">They Shop & Pay</p>
                      <p className="text-slate-400 text-sm">Full price, no discount</p>
                    </div>
                    <ArrowRight className="text-[#c9a227] hidden md:block" size={24} />
                    <span className="text-[#c9a227] md:hidden text-xl">↓</span>
                    <div className="px-5 py-4 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[200px]">
                      <Coins className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                      <p className="text-white font-bold">Earn 5% Coins</p>
                      <p className="text-slate-400 text-sm">Fixed rate, simple</p>
                    </div>
                    <ArrowRight className="text-[#c9a227] hidden md:block" size={24} />
                    <span className="text-[#c9a227] md:hidden text-xl">↓</span>
                    <div className="px-5 py-4 bg-[#c9a227]/20 rounded-xl border-2 border-[#c9a227] flex-1 max-w-[200px]">
                      <Repeat className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                      <p className="text-[#c9a227] font-bold">They Come Back!</p>
                      <p className="text-slate-400 text-sm">To spend their coins</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { icon: DollarSign, title: 'Fixed 5% Cashback', desc: 'Simple, predictable. You always know the cost.' },
                  { icon: Target, title: 'Repeat Customers', desc: 'They come back to spend coins at your store' },
                  { icon: Wallet, title: 'Margin Protected', desc: 'Lower commission than high-margin merchant rates' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                    <item.icon className="w-8 h-8 text-[#c9a227] mx-auto mb-3" />
                    <p className="text-white font-bold mb-1">{item.title}</p>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
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
                  <Zap className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold text-sm">Your Process</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Simple <span className="text-blue-400">3-Step</span> Process
                </h1>
              </div>

              {/* Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    step: '1',
                    title: 'Customer Pays You',
                    desc: 'Customer makes a purchase at your store as normal. No changes to checkout.',
                    icon: Store,
                    color: 'blue'
                  },
                  {
                    step: '2',
                    title: 'They Log in Nuqta',
                    desc: 'Customer logs purchase in 10 seconds. They get 5% back as coins!',
                    icon: Smartphone,
                    color: 'purple'
                  },
                  {
                    step: '3',
                    title: 'You Verify & Done',
                    desc: 'Quick tap to approve. Customer earns coins. They have a reason to come back!',
                    icon: CheckCircle,
                    color: 'green'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    {idx < 2 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <ArrowRight className="text-white/20" size={24} />
                      </div>
                    )}
                    <div className={`bg-white/5 backdrop-blur-xl border ${
                      item.color === 'green' ? 'border-emerald-500/30' :
                      item.color === 'purple' ? 'border-purple-500/30' :
                      'border-blue-500/30'
                    } rounded-2xl p-6 h-full`}>
                      <div className={`w-14 h-14 rounded-xl ${
                        item.color === 'green' ? 'bg-emerald-500/20' :
                        item.color === 'purple' ? 'bg-purple-500/20' :
                        'bg-blue-500/20'
                      } flex items-center justify-center mb-4`}>
                        <item.icon className={`w-7 h-7 ${
                          item.color === 'green' ? 'text-emerald-400' :
                          item.color === 'purple' ? 'text-purple-400' :
                          'text-blue-400'
                        }`} />
                      </div>
                      <div className="text-xs font-bold text-slate-500 mb-1">STEP {item.step}</div>
                      <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-bold">No POS Changes</p>
                      <p className="text-slate-400 text-sm">Keep using your existing system. Zero IT hassle.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-5">
                  <div className="flex items-center gap-3">
                    <Clock className="w-8 h-8 text-[#c9a227] flex-shrink-0" />
                    <div>
                      <p className="text-white font-bold">Go Live in 24 Hours</p>
                      <p className="text-slate-400 text-sm">Sign up today, be on the app tomorrow.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why customers love it */}
              <div className="mt-6 animate-[fadeIn_0.8s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-5">
                  <p className="text-purple-400 font-bold text-center mb-2">&ldquo;Why would customers use Nuqta?&rdquo;</p>
                  <p className="text-white text-center">
                    <span className="font-bold">Because they get 5% back on every purchase!</span> Those coins can be spent at 500+ stores across the UAE. It&apos;s free money they would miss without Nuqta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 4: YOUR DASHBOARD ====================
      case 4:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-4">
                  <BarChart3 className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-semibold text-sm">Your Dashboard</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Know Your <span className="text-purple-400">Customers</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 mt-4">Real-time insights you&apos;ve never had before</p>
              </div>

              {/* Dashboard features */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { icon: Users, title: 'Customer Profiles', desc: 'See demographics, preferences, and spending patterns', color: 'purple' },
                  { icon: TrendingUp, title: 'Peak Hours', desc: 'Know when customers spend most so you can staff accordingly', color: 'blue' },
                  { icon: Globe, title: 'Location Data', desc: 'Which neighborhoods are your best customers from?', color: 'emerald' },
                  { icon: Target, title: 'Conversion Rate', desc: 'Track how many Nuqta users become buyers', color: 'gold' }
                ].map((item, idx) => (
                  <div key={idx} className={`bg-white/5 backdrop-blur-xl border rounded-2xl p-5 ${
                    item.color === 'gold' ? 'border-[#c9a227]/30' :
                    item.color === 'emerald' ? 'border-emerald-500/30' :
                    item.color === 'blue' ? 'border-blue-500/30' :
                    'border-purple-500/30'
                  }`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      item.color === 'gold' ? 'bg-[#c9a227]/20' :
                      item.color === 'emerald' ? 'bg-emerald-500/20' :
                      item.color === 'blue' ? 'bg-blue-500/20' :
                      'bg-purple-500/20'
                    }`}>
                      <item.icon className={`w-6 h-6 ${
                        item.color === 'gold' ? 'text-[#c9a227]' :
                        item.color === 'emerald' ? 'text-emerald-400' :
                        item.color === 'blue' ? 'text-blue-400' :
                        'text-purple-400'
                      }`} />
                    </div>
                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Data insight */}
              <div className="mt-8 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl p-6 text-center">
                  <p className="text-white text-lg">
                    <span className="text-purple-400 font-bold">For the first time ever,</span> know exactly who&apos;s shopping at your store - not just how much they spent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 5: SOCIAL VIRAL / FREE MARKETING ====================
      case 5:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-pink-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full mb-4">
                  <Share2 className="w-5 h-5 text-pink-400" />
                  <span className="text-pink-400 font-semibold text-sm">Free Marketing</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Customers <span className="text-pink-400">Promote You</span> for Free
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 mt-4">Word-of-mouth marketing without paying for ads</p>
              </div>

              {/* Social sharing flow */}
              <div className="relative mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-3xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-xl border-2 border-pink-500/30 rounded-3xl p-6 sm:p-8">
                  <h3 className="text-pink-400 font-bold text-center mb-6 text-xl">How Customers Spread the Word</h3>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                    <div className="px-5 py-4 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[180px]">
                      <Coins className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                      <p className="text-white font-bold text-sm">Earns Coins</p>
                      <p className="text-slate-400 text-xs">5% back on purchase</p>
                    </div>
                    <ArrowRight className="text-pink-400 hidden md:block" size={24} />
                    <span className="text-pink-400 md:hidden text-xl">↓</span>
                    <div className="px-5 py-4 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[180px]">
                      <Share2 className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                      <p className="text-white font-bold text-sm">Shares on Social</p>
                      <p className="text-slate-400 text-xs">Instagram, WhatsApp</p>
                    </div>
                    <ArrowRight className="text-pink-400 hidden md:block" size={24} />
                    <span className="text-pink-400 md:hidden text-xl">↓</span>
                    <div className="px-5 py-4 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[180px]">
                      <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <p className="text-white font-bold text-sm">Friends See It</p>
                      <p className="text-slate-400 text-xs">&ldquo;Where did you shop?&rdquo;</p>
                    </div>
                    <ArrowRight className="text-pink-400 hidden md:block" size={24} />
                    <span className="text-pink-400 md:hidden text-xl">↓</span>
                    <div className="px-5 py-4 bg-pink-500/20 rounded-xl border-2 border-pink-500 flex-1 max-w-[180px]">
                      <Store className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                      <p className="text-pink-400 font-bold text-sm">New Customers!</p>
                      <p className="text-slate-400 text-xs">Zero ad spend</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 animate-[fadeIn_0.8s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { icon: Instagram, title: 'Instagram Stories', desc: 'Customers share their savings and tag your store', color: 'pink' },
                  { icon: MessageCircle, title: 'WhatsApp Groups', desc: '"Great deals at this store!" spreads fast', color: 'emerald' },
                  { icon: Send, title: 'Referral Bonus', desc: 'Customers earn extra coins for bringing friends', color: 'blue' }
                ].map((item, idx) => (
                  <div key={idx} className={`bg-white/5 border rounded-xl p-5 text-center ${
                    item.color === 'pink' ? 'border-pink-500/30' :
                    item.color === 'emerald' ? 'border-emerald-500/30' :
                    'border-blue-500/30'
                  }`}>
                    <item.icon className={`w-8 h-8 mx-auto mb-3 ${
                      item.color === 'pink' ? 'text-pink-400' :
                      item.color === 'emerald' ? 'text-emerald-400' :
                      'text-blue-400'
                    }`} />
                    <p className="text-white font-bold mb-1">{item.title}</p>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Key stat */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-6 text-center">
                  <div className="flex flex-wrap justify-center gap-6 mb-4">
                    <div className="text-center">
                      <p className="text-3xl font-black text-pink-400">23%</p>
                      <p className="text-slate-400 text-xs">new customers from referrals</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-black text-purple-400">AED 0</p>
                      <p className="text-slate-400 text-xs">marketing cost</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-black text-emerald-400">4.2x</p>
                      <p className="text-slate-400 text-xs">higher lifetime value</p>
                    </div>
                  </div>
                  <p className="text-white">
                    <span className="text-pink-400 font-bold">Every happy customer is free advertising.</span> When they share savings, their friends discover YOUR store.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 6: FREE MERCHANT OS ====================
      case 6:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full mb-4">
                  <Settings className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold text-sm">Free Merchant OS</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Your <span className="text-cyan-400">Complete Business</span> Toolkit
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 mt-4">Everything to run & grow your business - included free</p>
              </div>

              {/* Branded Coins Highlight */}
              <div className="mb-6 animate-[fadeIn_0.8s_ease-out_0.15s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-[#c9a227]/20 to-orange-500/20 border-2 border-[#c9a227]/50 rounded-2xl p-5">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#c9a227]/30 flex items-center justify-center flex-shrink-0">
                      <Coins className="w-8 h-8 text-[#c9a227]" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-[#c9a227] font-black text-xl mb-1">Your Branded Coins</h3>
                      <p className="text-white">Customers earn <span className="text-[#c9a227] font-bold">&ldquo;[Your Store] Coins&rdquo;</span> - not generic points. They see YOUR brand every time they check their balance, building loyalty to YOU.</p>
                    </div>
                    <div className="text-center flex-shrink-0">
                      <p className="text-3xl font-black text-emerald-400">+40%</p>
                      <p className="text-slate-400 text-xs">Higher repeat rate</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { icon: Users, title: 'Customer Database', desc: 'Full CRM with profiles, preferences, history', color: 'cyan' },
                  { icon: Bell, title: 'Campaign Manager', desc: 'Send SMS, push, email to your customers', color: 'pink' },
                  { icon: Target, title: 'Location Targeting', desc: 'Reach customers within 3km of your store', color: 'emerald' },
                  { icon: Gift, title: 'Offer Creator', desc: 'Create flash sales, specials, seasonal deals', color: 'purple' },
                  { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Track sales, retention, peak hours', color: 'blue' },
                  { icon: FileText, title: 'Digital Receipts', desc: 'Customers get digital records automatically', color: 'orange' },
                  { icon: Download, title: 'Data Export', desc: 'Export your customer data anytime', color: 'gold' },
                  { icon: Lock, title: 'Data Ownership', desc: 'Your data stays yours - never shared', color: 'red' }
                ].map((item, idx) => (
                  <div key={idx} className={`bg-white/5 backdrop-blur-xl border rounded-xl p-4 ${
                    item.color === 'cyan' ? 'border-cyan-500/30' :
                    item.color === 'pink' ? 'border-pink-500/30' :
                    item.color === 'emerald' ? 'border-emerald-500/30' :
                    item.color === 'purple' ? 'border-purple-500/30' :
                    item.color === 'blue' ? 'border-blue-500/30' :
                    item.color === 'orange' ? 'border-orange-500/30' :
                    item.color === 'gold' ? 'border-[#c9a227]/30' :
                    'border-red-500/30'
                  }`}>
                    <item.icon className={`w-8 h-8 mb-3 ${
                      item.color === 'cyan' ? 'text-cyan-400' :
                      item.color === 'pink' ? 'text-pink-400' :
                      item.color === 'emerald' ? 'text-emerald-400' :
                      item.color === 'purple' ? 'text-purple-400' :
                      item.color === 'blue' ? 'text-blue-400' :
                      item.color === 'orange' ? 'text-orange-400' :
                      item.color === 'gold' ? 'text-[#c9a227]' :
                      'text-red-400'
                    }`} />
                    <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Campaign examples */}
              <div className="mb-6 animate-[fadeIn_0.8s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-[#c9a227] font-bold text-center mb-4">Campaign Examples You Can Send</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-sm">
                    {[
                      { type: 'Weekly Special', msg: '"This week: 2x coins on all purchases!"' },
                      { type: 'Win-Back', msg: '"We miss you! Visit for bonus coins"' },
                      { type: 'New Arrivals', msg: '"Fresh stock! Earn coins on new items"' },
                      { type: 'Location', msg: '"You\'re nearby! Pop in for rewards"' }
                    ].map((campaign, idx) => (
                      <div key={idx} className="p-3 bg-white/5 rounded-xl">
                        <p className="text-[#c9a227] font-bold text-xs mb-1">{campaign.type}</p>
                        <p className="text-slate-400 text-xs italic">{campaign.msg}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key point */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border-2 border-cyan-500/30 rounded-2xl p-6 text-center">
                  <div className="flex flex-wrap justify-center gap-6 mb-4">
                    <div className="text-center">
                      <p className="text-3xl font-black text-cyan-400">AED 0</p>
                      <p className="text-slate-400 text-xs">Cost for all features</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-black text-emerald-400">100%</p>
                      <p className="text-slate-400 text-xs">Your data ownership</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-black text-[#c9a227]">Unlimited</p>
                      <p className="text-slate-400 text-xs">Campaigns per month</p>
                    </div>
                  </div>
                  <p className="text-white text-lg">
                    <span className="text-cyan-400 font-bold">Similar tools cost AED 500-2000/month.</span> With Nuqta, you get everything <span className="text-emerald-400 font-bold">completely free</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 7: WHY NUQTA VS OTHERS ====================
      case 7:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#c9a227] rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <Target className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">Why Nuqta?</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Better Than <span className="text-[#c9a227]">Discounts</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 mt-4">Discount apps cost you money. Nuqta makes you money.</p>
              </div>

              {/* Comparison table */}
              <div className="relative mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227]/10 to-emerald-500/10 rounded-3xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                  {/* Header */}
                  <div className="grid grid-cols-3 gap-2 p-4 bg-white/5 border-b border-white/10">
                    <div className="text-slate-400 font-bold text-sm"></div>
                    <div className="text-center">
                      <p className="text-red-400 font-bold">Discount Apps</p>
                      <p className="text-slate-500 text-xs">Entertainer, etc.</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[#c9a227] font-bold">Nuqta</p>
                      <p className="text-slate-500 text-xs">Smart incentive</p>
                    </div>
                  </div>

                  {/* Rows */}
                  {[
                    { feature: 'Customer Price', others: '50% off (you lose)', nuqta: 'Full price, they get coins', highlight: true },
                    { feature: 'Your Margin', others: 'Cut in half', nuqta: 'Stays intact', highlight: true },
                    { feature: 'Customer Intent', others: 'Looking for deals', nuqta: 'Earning rewards', highlight: false },
                    { feature: 'Your Cost', others: 'Heavy discounts', nuqta: '~7% total', highlight: false },
                    { feature: 'Customer Data', others: 'Nothing', nuqta: 'Full insights', highlight: false },
                    { feature: 'Repeat Visits', others: 'One-time bargain hunter', nuqta: '2.5x average returns', highlight: true }
                  ].map((row, idx) => (
                    <div key={idx} className={`grid grid-cols-3 gap-2 p-4 border-b border-white/5 ${row.highlight ? 'bg-[#c9a227]/5' : ''}`}>
                      <div className="text-white font-medium text-sm flex items-center">{row.feature}</div>
                      <div className="text-center text-red-400/80 text-sm flex items-center justify-center">
                        <span className="px-2 py-1 bg-red-500/10 rounded-lg">{row.others}</span>
                      </div>
                      <div className="text-center text-emerald-400 text-sm flex items-center justify-center">
                        <span className="px-2 py-1 bg-emerald-500/10 rounded-lg">{row.nuqta}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key insight */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-[#c9a227]/10 to-emerald-500/10 border-2 border-[#c9a227]/30 rounded-2xl p-6 text-center">
                  <p className="text-white text-lg">
                    <span className="text-[#c9a227] font-bold">The difference:</span> Entertainer brings bargain hunters who spend AED 100 (you keep AED 50). <span className="text-emerald-400 font-bold">Nuqta brings loyal customers who pay full price and come back 2.5x more often.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 8: WHAT'S THE CATCH ====================
      case 8:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-4">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold text-sm">Full Transparency</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  &ldquo;What&apos;s the <span className="text-emerald-400">Catch</span>?&rdquo;
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 mt-4">Fair questions. Honest answers.</p>
              </div>

              {/* Margin Math Visual */}
              <div className="mb-6 animate-[fadeIn_0.8s_ease-out_0.15s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-emerald-500/10 to-[#c9a227]/10 border-2 border-emerald-500/30 rounded-2xl p-5">
                  <p className="text-emerald-400 font-bold text-center mb-3">Your Margin Math (Example: 8% Margin Business)</p>
                  <div className="grid grid-cols-4 gap-2 text-center text-sm">
                    <div className="p-2 bg-white/5 rounded-lg">
                      <p className="text-slate-400 text-xs">Sale</p>
                      <p className="text-white font-bold">AED 100</p>
                    </div>
                    <div className="p-2 bg-white/5 rounded-lg">
                      <p className="text-slate-400 text-xs">Your Margin</p>
                      <p className="text-emerald-400 font-bold">AED 8</p>
                    </div>
                    <div className="p-2 bg-white/5 rounded-lg">
                      <p className="text-slate-400 text-xs">Nuqta Cost</p>
                      <p className="text-[#c9a227] font-bold">AED 7</p>
                    </div>
                    <div className="p-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                      <p className="text-slate-400 text-xs">You Keep</p>
                      <p className="text-emerald-400 font-bold">AED 1 + Loyalty</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-xs text-center mt-3">That AED 1 net + 2.5x repeat visits = more profit than one-time shoppers</p>
                </div>
              </div>

              {/* FAQ style */}
              <div className="space-y-4 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    q: '"7% cost on 8% margin? I barely break even!"',
                    a: "True for ONE transaction. But Nuqta customers visit 2.5x more often. On 3 visits: You earn AED 24 (8%×3), pay AED 21 (7%×3), keep AED 3 profit PLUS a loyal customer. Without Nuqta, that customer visits once and you earn AED 8 total.",
                    icon: DollarSign
                  },
                  {
                    q: '"Can\'t I just compete on price instead?"',
                    a: "Big retailers like Carrefour and LuLu have buying power you can't match. You can't out-discount them. But you CAN offer rewards + better service. Nuqta lets you compete on value, not price.",
                    icon: Target
                  },
                  {
                    q: '"Our products are price-transparent (electronics, gold)"',
                    a: "Perfect! You can't discount, but Nuqta adds value without cutting your price. Customer pays full price to you, gets coins as a bonus. Your margin stays intact, they feel rewarded.",
                    icon: Smartphone
                  },
                  {
                    q: '"We already have a loyalty program"',
                    a: "Most house programs give discounts you fund 100%. Nuqta's coins can be spent at 500+ stores, making them more valuable to customers. You pay 7% vs their 10-15% discount, and they're more motivated.",
                    icon: Users
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-white font-bold mb-2">{item.q}</p>
                        <p className="text-slate-400 text-sm">{item.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom note */}
              <div className="mt-8 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-2xl p-5 text-center">
                  <p className="text-white">
                    <span className="text-[#c9a227] font-bold">Still not sure?</span> We&apos;ll show you data from similar merchants. If the numbers don&apos;t make sense for your business, we&apos;ll tell you honestly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 9: PRICING ====================
      case 9:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#c9a227] rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <Percent className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">Simple Pricing</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Pay <span className="text-[#c9a227]">Only On Success</span>
                </h1>
                <p className="text-slate-400 text-lg mt-3">No upfront fees. No monthly charges. Pay only when you sell.</p>
              </div>

              {/* Pricing tiers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Standard</h3>
                  <p className="text-4xl font-black text-white mb-1">AED 5</p>
                  <p className="text-slate-400 text-sm mb-4">per AED 100 in Nuqta sales</p>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-400" /> App listing</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-400" /> Merchant dashboard</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-400" /> Basic analytics</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-400" /> Email support</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-b from-[#c9a227]/20 to-transparent rounded-2xl border-2 border-[#c9a227] p-6 relative">
                  <div className="absolute top-0 right-0 bg-[#c9a227] text-[#0a1628] px-3 py-1 text-xs font-bold rounded-bl-xl">RECOMMENDED</div>
                  <h3 className="text-[#c9a227] font-bold text-xl mb-2">Premium</h3>
                  <p className="text-4xl font-black text-white mb-1">AED 6</p>
                  <p className="text-slate-400 text-sm mb-4">per AED 100 in Nuqta sales</p>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#c9a227]" /> Everything in Standard</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#c9a227]" /> Featured placement</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#c9a227]" /> Priority matching</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#c9a227]" /> Custom promotions</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#c9a227]" /> Dedicated support</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Enterprise</h3>
                  <p className="text-4xl font-black text-white mb-1">Custom</p>
                  <p className="text-slate-400 text-sm mb-4">for pavilion operators</p>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-400" /> Volume discounts</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-400" /> Multi-store dashboard</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-400" /> API access</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-400" /> On-site training</li>
                  </ul>
                </div>
              </div>

              {/* Key point */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-5 text-center">
                  <p className="text-white text-lg">
                    <span className="text-emerald-400 font-bold">Zero risk.</span> If customers don&apos;t come through Nuqta, you pay nothing. Only pay when they buy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 10: THE MATH ====================
      case 10:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[120px] opacity-15" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-4">
                  <BarChart3 className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold text-sm">Real Numbers</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Example: <span className="text-emerald-400">Electronics Store</span>
                </h1>
              </div>

              {/* Math breakdown */}
              <div className="relative mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-[#c9a227]/10 rounded-3xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-xl border-2 border-emerald-500/30 rounded-3xl p-6">
                  {/* Scenario */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[
                      { label: 'Avg Order', value: 'AED 150' },
                      { label: 'Nuqta Customers/Month', value: '200' },
                      { label: 'Repeat Rate', value: '2.5x' },
                      { label: 'Your Margin', value: '8%' }
                    ].map((item, idx) => (
                      <div key={idx} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                        <p className="text-slate-400 text-xs mb-1">{item.label}</p>
                        <p className="text-2xl font-black text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="bg-black/30 rounded-2xl p-5">
                    <p className="text-[#c9a227] font-bold text-center mb-4">Your Monthly Results</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-white/5 rounded-xl">
                        <p className="text-slate-400 text-sm mb-1">Revenue from Nuqta</p>
                        <p className="text-2xl font-black text-emerald-400">AED 75,000</p>
                        <p className="text-slate-500 text-xs">200 × AED 150 × 2.5 visits</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-xl">
                        <p className="text-slate-400 text-sm mb-1">Your Total Cost</p>
                        <p className="text-2xl font-black text-white">AED 5,250</p>
                        <p className="text-slate-500 text-xs">~7% (5% cashback + 2% fee)</p>
                      </div>
                      <div className="p-4 bg-[#c9a227]/20 rounded-xl border border-[#c9a227]/30">
                        <p className="text-slate-400 text-sm mb-1">Net Gain</p>
                        <p className="text-2xl font-black text-[#c9a227]">AED 750+</p>
                        <p className="text-slate-500 text-xs">8% margin - 7% cost = 1% net + repeat value</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key insight */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-2xl p-4 text-center">
                  <p className="text-white font-semibold">
                    Even with <span className="text-[#c9a227]">8% margins</span>, you earn <span className="text-emerald-400">AED 75K in repeat revenue</span> at ~7% cost. The <span className="text-[#c9a227] font-black">2.5x repeat visits</span> mean customers who would shop once now come back again and again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 11: SUCCESS STORIES ====================
      case 11:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-[#c9a227] rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-6xl w-full px-2">
              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <Award className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">Real Results</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Merchants <span className="text-[#c9a227]">Already Winning</span>
                </h1>
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-3 gap-4 mb-8 animate-[fadeIn_0.8s_ease-out_0.1s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  { value: '2.5x', label: 'More Repeat Visits' },
                  { value: '85%', label: 'Reward Claim Rate' },
                  { value: '+23%', label: 'Basket Size Increase' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-2xl sm:text-3xl font-black text-[#c9a227]">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Testimonials */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    quote: "Same customers who used to visit once a month now come 2-3 times. They want to earn and spend their coins. It's brilliant.",
                    name: "Electronics Retailer",
                    business: "Dubai",
                    stat: "+150% visits",
                    verified: true
                  },
                  {
                    quote: "With 6% margins, I can't discount. Nuqta lets me compete with big chains without cutting prices. The ~7% total cost is worth it for the loyalty.",
                    name: "Supermarket Owner",
                    business: "Abu Dhabi",
                    stat: "Margin-safe",
                    verified: true
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[1,2,3,4,5].map((star) => (
                          <span key={star} className="text-[#c9a227] text-lg">★</span>
                        ))}
                      </div>
                      {item.verified && (
                        <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full flex items-center gap-1">
                          <CheckCircle size={12} /> Verified
                        </span>
                      )}
                    </div>
                    <p className="text-white mb-4">&ldquo;{item.quote}&rdquo;</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-bold">{item.name}</p>
                        <p className="text-slate-400 text-sm">{item.business}</p>
                      </div>
                      <div className="px-3 py-1 bg-emerald-500/20 rounded-full">
                        <p className="text-emerald-400 text-sm font-bold">{item.stat}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-2xl p-5 text-center">
                  <p className="text-white">
                    <span className="text-[#c9a227] font-bold">Want real data?</span> We&apos;ll show you numbers from merchants similar to you. Just ask.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 12: WHY NOW ====================
      case 12:
        return (
          <div className={`${slideClass} w-full min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2638] to-[#0a1628] flex items-center justify-center p-4 sm:p-6 md:p-12 relative overflow-hidden`}>
            <div className="absolute inset-0">
              <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#c9a227] rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-2">
              {/* Urgency Banner */}
              <div className="mb-6 animate-[fadeIn_0.8s_ease-out_0.1s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-red-500/30 rounded-2xl p-4 text-center">
                  <p className="text-white font-bold">
                    <span className="text-red-400">Limited spots:</span> Only onboarding 10 merchants per category this month
                  </p>
                  <p className="text-slate-400 text-xs mt-1">We limit partners to protect exclusivity and ensure quality support</p>
                </div>
              </div>

              {/* Headline */}
              <div className="text-center mb-8 animate-[slideDown_0.8s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full mb-4">
                  <Rocket className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-[#c9a227] font-semibold text-sm">Growing Fast</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Why <span className="text-[#c9a227]">Sign Up Now</span>?
                </h1>
              </div>

              {/* Reasons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                {[
                  {
                    title: 'Category Exclusivity',
                    desc: 'We limit competitors in each area. First to join gets priority over latecomers.',
                    icon: Target
                  },
                  {
                    title: 'Founder Rates Locked',
                    desc: 'Current 7% total commission is promotional. Rates increase for new signups next quarter.',
                    icon: Percent
                  },
                  {
                    title: 'Instant 500K+ Exposure',
                    desc: 'Active Nuqta users are already looking for stores like yours. Go live in 24 hours.',
                    icon: Rocket
                  },
                  {
                    title: 'Zero Risk Trial',
                    desc: 'No upfront fees. No monthly charges. If it doesn\'t work in 30 days, walk away.',
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

              {/* Timeline */}
              <div className="animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-r from-[#c9a227]/10 to-purple-500/10 border border-[#c9a227]/30 rounded-2xl p-6 text-center">
                  <p className="text-white text-lg">
                    <span className="text-[#c9a227] font-bold">500K+ active users</span> are already earning rewards with Nuqta. How many pass your store daily without knowing you&apos;re on the app?
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      // ==================== SLIDE 13: CONTACT ====================
      case 13:
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
                  Ready to Grow Revenue<br />
                  <span className="bg-gradient-to-r from-[#c9a227] to-[#d4b03f] bg-clip-text text-transparent">Without Cutting Margins</span>?
                </h1>
              </div>

              {/* Contact card */}
              <div className="relative mb-8 animate-[fadeIn_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-3xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-3xl p-8 sm:p-10">
                  <div className="w-20 h-20 rounded-full bg-[#c9a227]/20 flex items-center justify-center mx-auto mb-6">
                    <Handshake className="w-10 h-10 text-[#c9a227]" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Schedule Your Setup Call</h2>
                  <p className="text-slate-400 mb-4">15-minute call → Live in 48 hours</p>

                  {/* Onboarding Timeline */}
                  <div className="grid grid-cols-4 gap-2 mb-6 text-center">
                    {[
                      { day: 'Today', action: 'Quick Call', icon: '📞' },
                      { day: 'Day 1', action: 'Account Setup', icon: '⚙️' },
                      { day: 'Day 2', action: 'Go Live', icon: '🚀' },
                      { day: 'Week 1', action: 'First Results', icon: '📊' }
                    ].map((step, idx) => (
                      <div key={idx} className="p-2 bg-white/5 rounded-lg">
                        <p className="text-2xl mb-1">{step.icon}</p>
                        <p className="text-[#c9a227] text-xs font-bold">{step.day}</p>
                        <p className="text-slate-400 text-xs">{step.action}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                    <a href="mailto:merchants@nuqtapp.com?subject=Setup Call - Low-Margin Merchant" className="flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-full font-bold hover:bg-[#d4b03f] transition-colors">
                      <Mail size={20} />
                      Schedule Setup Call
                    </a>
                    <a href="tel:+971503764345" className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors">
                      <Phone size={20} />
                      +971 50 376 4345
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center">
                    {['Zero upfront cost', 'Built for thin margins', '2.5x repeat visits'].map((item, idx) => (
                      <span key={idx} className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-semibold">
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

export default MerchantPitchDeckB;
