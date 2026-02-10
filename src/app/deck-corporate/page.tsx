'use client';

import React, { useState } from 'react';
import {
  Building2,
  Users,
  Gift,
  TrendingUp,
  Target,
  CheckCircle2,
  Award,
  DollarSign,
  Zap,
  Shield,
  BarChart3,
  Heart,
  ChevronRight,
  Crown,
  Sparkles,
  Star,
  Coffee,
  Scissors,
  Dumbbell,
  ShoppingBag,
  UtensilsCrossed,
  Car
} from 'lucide-react';

export default function CorporateDeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 'cover', title: 'Cover' },
    { id: 'problem', title: 'The Problem' },
    { id: 'nuqta-plus', title: 'Nuqta+' },
    { id: 'value', title: 'Value' },
    { id: 'partners', title: 'Partners' },
    { id: 'how-it-works', title: 'How It Works' },
    { id: 'benefits', title: 'Benefits' },
    { id: 'pricing', title: 'Pricing' },
    { id: 'roi', title: 'ROI' },
    { id: 'cta', title: 'Next Steps' },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Slide Navigation */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-slate-800/90 backdrop-blur rounded-full px-4 py-2 flex items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-[#c9a227] w-8' : 'bg-slate-600 hover:bg-slate-500'
            }`}
            title={slide.title}
          />
        ))}
      </div>

      {/* Slides */}
      <div className="min-h-screen">
        {currentSlide === 0 && <CoverSlide onNext={() => setCurrentSlide(1)} />}
        {currentSlide === 1 && <ProblemSlide onNext={() => setCurrentSlide(2)} />}
        {currentSlide === 2 && <NuqtaPlusSlide onNext={() => setCurrentSlide(3)} />}
        {currentSlide === 3 && <ValueSlide onNext={() => setCurrentSlide(4)} />}
        {currentSlide === 4 && <PartnersSlide onNext={() => setCurrentSlide(5)} />}
        {currentSlide === 5 && <HowItWorksSlide onNext={() => setCurrentSlide(6)} />}
        {currentSlide === 6 && <BenefitsSlide onNext={() => setCurrentSlide(7)} />}
        {currentSlide === 7 && <PricingSlide onNext={() => setCurrentSlide(8)} />}
        {currentSlide === 8 && <ROISlide onNext={() => setCurrentSlide(9)} />}
        {currentSlide === 9 && <CTASlide />}
      </div>

    </div>
  );
}

interface SlideProps {
  onNext?: () => void;
}

// ============================================
// SLIDE 1: COVER
// ============================================
function CoverSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] p-8">
      <div className="max-w-4xl text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-[#c9a227]/20 px-4 py-2 rounded-full mb-6">
            <Crown className="w-5 h-5 text-[#c9a227]" />
            <span className="text-[#c9a227] font-semibold">Employee Welfare Program</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-7xl font-black text-white mb-6">
          Give Your Employees
          <span className="text-[#c9a227]"> Nuqta+</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Premium lifestyle membership as an employee benefit
          <br />
          <span className="text-[#c9a227] font-bold">for just AED 1/employee/month</span>
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-4 px-6">
            <div className="text-3xl font-black text-[#c9a227]">AED 99</div>
            <div className="text-slate-400 text-sm">Retail Price</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 px-6">
            <div className="text-3xl font-black text-emerald-400">AED 1</div>
            <div className="text-slate-400 text-sm">Corporate Price</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 px-6">
            <div className="text-3xl font-black text-[#c9a227]">99%</div>
            <div className="text-slate-400 text-sm">Your Savings</div>
          </div>
        </div>

        <button
          onClick={onNext}
          className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
        >
          See the Opportunity
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 2: PROBLEM
// ============================================
function ProblemSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-red-900/20 p-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          The Employee Welfare <span className="text-red-400">Challenge</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              stat: 'AED 500+',
              title: 'Per Employee/Month',
              desc: 'Companies spend heavily on perks that employees often don\'t value or use',
            },
            {
              stat: '42%',
              title: 'Feel Undervalued',
              desc: 'Employees say their company benefits don\'t meet their lifestyle needs',
            },
            {
              stat: 'Generic',
              title: 'One-Size-Fits-All',
              desc: 'Traditional benefits don\'t match the diverse preferences of modern workforce',
            },
            {
              stat: 'Rising',
              title: 'Talent Competition',
              desc: 'Top talent expects premium lifestyle benefits beyond just salary',
            },
          ].map((item) => (
            <div key={item.title} className="bg-slate-800/50 rounded-xl p-6 border border-red-500/20">
              <div className="text-4xl font-black text-red-400 mb-3">{item.stat}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-slate-300 mb-8">
            What if you could give employees a <span className="text-[#c9a227] font-bold">premium lifestyle membership</span>
            <br />for the cost of a coffee?
          </p>
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            Discover Nuqta+
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 3: NUQTA+ INTRODUCTION
// ============================================
function NuqtaPlusSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-[#c9a227]/20 p-8">
      <div className="max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#c9a227]/20 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-[#c9a227]" />
            <span className="text-[#c9a227] font-semibold">Premium Membership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Introducing <span className="text-[#c9a227]">Nuqta+</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            UAE&apos;s premium lifestyle membership with exclusive access to 16 partner brands
          </p>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-black text-white mb-6">What Employees Get</h3>
              <ul className="space-y-4">
                {[
                  { icon: Gift, text: 'AED 100 coins at each of 16 premium partners' },
                  { icon: Star, text: 'Total value: AED 1,600 per year' },
                  { icon: Crown, text: 'Exclusive Nuqta+ member pricing' },
                  { icon: Sparkles, text: 'Priority access to new partners' },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#c9a227]/20 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#c9a227]" />
                    </div>
                    <span className="text-slate-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#c9a227]/20 to-amber-500/10 rounded-xl p-8 text-center">
              <div className="text-sm text-[#c9a227] mb-2">RETAIL PRICE</div>
              <div className="text-5xl font-black text-white mb-2">AED 99</div>
              <div className="text-slate-400 mb-6">per month</div>
              <div className="border-t border-slate-600 pt-6">
                <div className="text-sm text-emerald-400 mb-2">YOUR CORPORATE PRICE</div>
                <div className="text-6xl font-black text-emerald-400">AED 1</div>
                <div className="text-slate-400">per employee/month</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            See the Value
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 4: VALUE BREAKDOWN
// ============================================
function ValueSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-emerald-900/20 p-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          AED 1 Gets Your Employee <span className="text-[#c9a227]">AED 1,600</span>
        </h2>

        <div className="bg-slate-800/50 rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-4 gap-6 text-center mb-8">
            <div className="bg-slate-700/50 rounded-xl p-6">
              <div className="text-4xl font-black text-[#c9a227]">16</div>
              <div className="text-slate-300">Premium Partners</div>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-6">
              <div className="text-4xl font-black text-[#c9a227]">AED 100</div>
              <div className="text-slate-300">Per Partner</div>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-6">
              <div className="text-4xl font-black text-emerald-400">=</div>
              <div className="text-slate-300">Total Value</div>
            </div>
            <div className="bg-emerald-500/20 rounded-xl p-6 border-2 border-emerald-500">
              <div className="text-4xl font-black text-emerald-400">AED 1,600</div>
              <div className="text-emerald-300 font-semibold">Annual Value</div>
            </div>
          </div>

          <div className="text-center bg-[#c9a227]/10 rounded-xl p-6">
            <p className="text-lg text-slate-300 mb-2">
              You pay: <span className="text-[#c9a227] font-black text-2xl">AED 12/year</span> per employee
            </p>
            <p className="text-lg text-slate-300">
              They receive: <span className="text-emerald-400 font-black text-2xl">AED 1,600/year</span> in benefits
            </p>
            <p className="text-[#c9a227] font-bold mt-4 text-xl">
              That&apos;s 133x return on your welfare spend
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Cost per employee', value: 'AED 1/month', color: 'text-white' },
            { label: 'Annual cost per employee', value: 'AED 12/year', color: 'text-white' },
            { label: 'Value delivered per employee', value: 'AED 1,600/year', color: 'text-emerald-400' },
          ].map((item) => (
            <div key={item.label} className="bg-slate-800/50 rounded-xl p-4 text-center">
              <div className={`text-2xl font-black ${item.color}`}>{item.value}</div>
              <div className="text-sm text-slate-400">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            Meet the Partners
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 5: PARTNER CATEGORIES
// ============================================
function PartnersSlide({ onNext }: SlideProps) {
  const categories = [
    { icon: Coffee, name: 'Cafes & Coffee', color: 'amber' },
    { icon: UtensilsCrossed, name: 'Restaurants', color: 'orange' },
    { icon: Scissors, name: 'Beauty & Grooming', color: 'pink' },
    { icon: Dumbbell, name: 'Fitness & Wellness', color: 'green' },
    { icon: ShoppingBag, name: 'Fashion & Retail', color: 'purple' },
    { icon: Car, name: 'Auto Services', color: 'blue' },
    { icon: Sparkles, name: 'Spa & Relaxation', color: 'cyan' },
    { icon: Gift, name: 'Lifestyle & More', color: 'rose' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] p-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 text-center">
          16 Premium <span className="text-[#c9a227]">Partners</span>
        </h2>
        <p className="text-xl text-slate-400 text-center mb-12">
          Curated lifestyle brands across categories your employees love
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`bg-${cat.color}-500/10 border border-${cat.color}-500/30 rounded-xl p-4 text-center`}
            >
              <cat.icon className={`w-8 h-8 text-${cat.color}-400 mx-auto mb-2`} />
              <div className="text-sm text-slate-300">{cat.name}</div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-black text-[#c9a227] mb-6 text-center">Confirmed Partners Include</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Al Mutlaib', category: 'Premium Dining' },
              { name: 'Whiff Theory', category: 'Perfumes & Fragrances' },
              { name: 'W Line', category: 'Fashion' },
              { name: 'YB Lounge & Nilim', category: '227+ Beauty Services' },
              { name: '10 Stone', category: 'Jewelry' },
              { name: 'Laundristan & Z Wash', category: 'Premium Laundry' },
            ].map((partner) => (
              <div key={partner.name} className="bg-slate-700/50 rounded-lg p-4">
                <div className="font-bold text-white">{partner.name}</div>
                <div className="text-xs text-slate-400">{partner.category}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-6">
            + 10 more premium partners across dining, fitness, wellness & lifestyle
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            How It Works
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 6: HOW IT WORKS
// ============================================
function HowItWorksSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] p-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          Simple <span className="text-[#c9a227]">Setup</span>
        </h2>

        <div className="space-y-6 mb-12">
          {[
            {
              step: 1,
              title: 'Sign Corporate Agreement',
              desc: 'Simple contract based on headcount. Pay AED 1/employee/month.',
              icon: Building2,
            },
            {
              step: 2,
              title: 'Share Employee List',
              desc: 'Provide employee emails or phone numbers. We handle the rest.',
              icon: Users,
            },
            {
              step: 3,
              title: 'Employees Get Activated',
              desc: 'Each employee receives their Nuqta+ membership with all 16 partner benefits instantly.',
              icon: Crown,
            },
            {
              step: 4,
              title: 'They Enjoy Premium Benefits',
              desc: 'Employees use AED 100 coins at each partner, getting real value from day one.',
              icon: Gift,
            },
          ].map((phase, index) => (
            <div key={phase.step} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#c9a227] rounded-full flex items-center justify-center flex-shrink-0">
                  <phase.icon className="w-8 h-8 text-black" />
                </div>
                {index < 3 && <div className="w-0.5 h-full bg-[#c9a227]/30 mt-2" />}
              </div>
              <div className="flex-1 bg-slate-800/50 rounded-xl p-6 mb-4">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#c9a227] font-semibold">Step {phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-slate-400">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            See Benefits
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 7: BENEFITS
// ============================================
function BenefitsSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-purple-900/20 p-8">
      <div className="max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          Benefits for <span className="text-[#c9a227]">Everyone</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* For HR */}
          <div className="bg-slate-800/50 rounded-2xl p-8">
            <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-black text-purple-400 mb-4">For HR</h3>
            <ul className="space-y-3">
              {[
                'Zero admin burden',
                'Instant employee activation',
                'No procurement needed',
                'Simple monthly billing',
                'Boosts employer brand',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* For Employees */}
          <div className="bg-slate-800/50 rounded-2xl p-8">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-black text-emerald-400 mb-4">For Employees</h3>
            <ul className="space-y-3">
              {[
                'AED 1,600 in real benefits',
                '16 premium lifestyle partners',
                'Exclusive member pricing',
                'Mobile app access',
                'Stack coins for big purchases',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* For Finance */}
          <div className="bg-slate-800/50 rounded-2xl p-8">
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <DollarSign className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-black text-blue-400 mb-4">For Finance</h3>
            <ul className="space-y-3">
              {[
                'Just AED 1/employee/month',
                'Predictable flat rate',
                'No hidden fees',
                'Massive value per dirham',
                'Tax-efficient benefit',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            View Pricing
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 8: PRICING
// ============================================
function PricingSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-blue-900/20 p-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          One Simple <span className="text-[#c9a227]">Price</span>
        </h2>

        {/* Main Pricing Card */}
        <div className="bg-gradient-to-br from-[#c9a227]/20 to-amber-500/10 rounded-3xl p-8 border-2 border-[#c9a227] mb-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#c9a227] text-black px-4 py-1 rounded-full text-sm font-bold mb-6">
              <Crown className="w-4 h-4" />
              NUQTA+ CORPORATE
            </div>

            <div className="mb-6">
              <div className="text-slate-400 text-sm mb-1">Retail Price: <span className="line-through">AED 99/month</span></div>
              <div className="text-7xl font-black text-white">AED 1</div>
              <div className="text-slate-300">per employee / month</div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-4 mb-6">
              <div className="text-emerald-400 font-bold text-lg">You Save 99% Per Employee</div>
              <div className="text-slate-400 text-sm">That&apos;s AED 98 saved per person per month</div>
            </div>

            <ul className="space-y-3 text-left mb-6">
              {[
                'Full Nuqta+ membership for all employees',
                'AED 100 coins at each of 16 partners',
                'AED 1,600 total annual value per employee',
                'Instant activation - no setup required',
                'Monthly billing based on headcount',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-[#c9a227]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick Math */}
        <div className="bg-slate-800/30 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-bold text-white text-center mb-4">Quick Math for Your Company</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <div className="text-sm text-slate-400 mb-1">100 Employees</div>
              <div className="text-2xl font-black text-white">AED 100/month</div>
              <div className="text-xs text-emerald-400">AED 160,000 value delivered</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <div className="text-sm text-slate-400 mb-1">500 Employees</div>
              <div className="text-2xl font-black text-white">AED 500/month</div>
              <div className="text-xs text-emerald-400">AED 800,000 value delivered</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <div className="text-sm text-slate-400 mb-1">1,000 Employees</div>
              <div className="text-2xl font-black text-white">AED 1,000/month</div>
              <div className="text-xs text-emerald-400">AED 1.6M value delivered</div>
            </div>
          </div>
        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 mb-8">
          <div className="flex items-center gap-3 justify-center">
            <Shield className="w-6 h-6 text-emerald-400" />
            <span className="text-slate-300">No setup fees • No minimum term • No hidden costs • Cancel anytime</span>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            See ROI
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 9: ROI
// ============================================
function ROISlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-emerald-900/20 p-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          The Business <span className="text-[#c9a227]">Case</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { stat: '133x', label: 'Value Multiplier', desc: 'AED 1 → AED 133 value' },
            { stat: '99%', label: 'Cost Savings', desc: 'vs retail membership' },
            { stat: 'AED 1,600', label: 'Per Employee', desc: 'annual benefit value' },
            { stat: 'Zero', label: 'Admin Overhead', desc: 'we handle everything' },
          ].map((item) => (
            <div key={item.label} className="bg-slate-800/50 rounded-xl p-6 text-center">
              <div className="text-4xl font-black text-[#c9a227] mb-2">{item.stat}</div>
              <div className="text-white font-semibold mb-1">{item.label}</div>
              <div className="text-sm text-slate-500">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="bg-slate-800/30 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-black text-white mb-6 text-center">How Nuqta+ Compares</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Benefits */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-red-400 mb-4">Traditional Employee Perks</h4>
              <ul className="space-y-2">
                {[
                  { item: 'Monthly cost per employee', value: 'AED 200-500+', bad: true },
                  { item: 'Employee engagement', value: 'Low - generic', bad: true },
                  { item: 'Setup complexity', value: 'High', bad: true },
                  { item: 'Value perception', value: 'Often ignored', bad: true },
                ].map((row) => (
                  <li key={row.item} className="flex justify-between text-sm">
                    <span className="text-slate-400">{row.item}</span>
                    <span className="text-red-400 font-semibold">{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nuqta+ */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-emerald-400 mb-4">Nuqta+ Corporate</h4>
              <ul className="space-y-2">
                {[
                  { item: 'Monthly cost per employee', value: 'AED 1' },
                  { item: 'Employee engagement', value: 'High - premium brands' },
                  { item: 'Setup complexity', value: 'Zero' },
                  { item: 'Value perception', value: 'AED 1,600 tangible' },
                ].map((row) => (
                  <li key={row.item} className="flex justify-between text-sm">
                    <span className="text-slate-400">{row.item}</span>
                    <span className="text-emerald-400 font-semibold">{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#c9a227]/10 rounded-xl p-6 text-center mb-8">
          <p className="text-lg text-slate-300">
            <span className="text-[#c9a227] font-bold">Position this as employee welfare</span>
            <br />
            A premium benefit that costs your company almost nothing
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            Get Started
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 10: CTA
// ============================================
function CTASlide() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#c9a227]/10 to-[#0a1628] p-8">
      <div className="max-w-4xl text-center">
        <Crown className="w-16 h-16 text-[#c9a227] mx-auto mb-8" />

        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
          Give Your Team
          <br />
          <span className="text-[#c9a227]">Nuqta+</span>
        </h2>

        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Premium lifestyle membership for AED 1/employee/month
          <br />
          <span className="text-[#c9a227]">AED 1,600 annual value delivered to each employee</span>
        </p>

        <div className="bg-slate-800/50 rounded-2xl p-8 mb-8 max-w-md mx-auto">
          <h3 className="text-xl font-bold text-white mb-4">Perfect For</h3>
          <ul className="space-y-2 text-left">
            {[
              'Banks & Financial Institutions',
              'Telecom Companies',
              'Airlines & Aviation',
              'Government Entities',
              'Large Corporates (100+ employees)',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-[#c9a227]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:corporate@nuqtaapp.com?subject=Nuqta+ Corporate Membership Inquiry"
            className="inline-flex items-center justify-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            Get Started Today
          </a>
          <a
            href="/contracts"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#c9a227] text-[#c9a227] font-bold px-8 py-4 rounded-full hover:bg-[#c9a227]/10 transition-colors"
          >
            View Contract Templates
          </a>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-6 inline-block">
          <p className="text-slate-400 mb-2">Contact Corporate Partnerships</p>
          <p className="text-white font-semibold">corporate@nuqtaapp.com</p>
          <p className="text-slate-500 text-sm mt-1">Response within 24 hours</p>
        </div>
      </div>
    </div>
  );
}
