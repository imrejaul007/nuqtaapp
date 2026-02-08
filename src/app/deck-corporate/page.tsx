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
  ChevronRight
} from 'lucide-react';

export default function CorporateDeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 'cover', title: 'Cover' },
    { id: 'problem', title: 'The Problem' },
    { id: 'solution', title: 'Our Solution' },
    { id: 'programs', title: 'Programs' },
    { id: 'benefits', title: 'Benefits' },
    { id: 'roi', title: 'ROI' },
    { id: 'implementation', title: 'Implementation' },
    { id: 'pricing', title: 'Pricing' },
    { id: 'clients', title: 'Use Cases' },
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
        {currentSlide === 2 && <SolutionSlide onNext={() => setCurrentSlide(3)} />}
        {currentSlide === 3 && <ProgramsSlide onNext={() => setCurrentSlide(4)} />}
        {currentSlide === 4 && <BenefitsSlide onNext={() => setCurrentSlide(5)} />}
        {currentSlide === 5 && <ROISlide onNext={() => setCurrentSlide(6)} />}
        {currentSlide === 6 && <ImplementationSlide onNext={() => setCurrentSlide(7)} />}
        {currentSlide === 7 && <PricingSlide onNext={() => setCurrentSlide(8)} />}
        {currentSlide === 8 && <UseCasesSlide onNext={() => setCurrentSlide(9)} />}
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
            <Building2 className="w-5 h-5 text-[#c9a227]" />
            <span className="text-[#c9a227] font-semibold">Corporate Partnerships</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-7xl font-black text-white mb-6">
          Transform Employee
          <span className="text-[#c9a227]"> Rewards</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Modern employee recognition & rewards platform
          powered by UAE&apos;s largest merchant network
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-4 px-6">
            <div className="text-3xl font-black text-[#c9a227]">1,000+</div>
            <div className="text-slate-400 text-sm">Partner Merchants</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 px-6">
            <div className="text-3xl font-black text-[#c9a227]">Instant</div>
            <div className="text-slate-400 text-sm">Reward Delivery</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 px-6">
            <div className="text-3xl font-black text-[#c9a227]">Zero</div>
            <div className="text-slate-400 text-sm">Unused Rewards</div>
          </div>
        </div>

        <button
          onClick={onNext}
          className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
        >
          Learn More
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
          The Employee Rewards <span className="text-red-400">Problem</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              stat: '65%',
              title: 'Gift Cards Go Unused',
              desc: 'Traditional gift cards expire or are forgotten, wasting corporate budgets',
            },
            {
              stat: '78%',
              title: 'Employees Want Choice',
              desc: 'Fixed rewards don\'t match diverse employee preferences and needs',
            },
            {
              stat: '3-4 Weeks',
              title: 'Reward Delivery Time',
              desc: 'Procurement, approval, and distribution delays reduce impact',
            },
            {
              stat: '40%',
              title: 'Admin Time Wasted',
              desc: 'HR teams spend excessive time managing reward programs manually',
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
            Companies spend <span className="text-red-400 font-bold">millions</span> on employee rewards that fail to engage
          </p>
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            See the Solution
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 3: SOLUTION
// ============================================
function SolutionSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-emerald-900/20 p-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 text-center">
          Introducing <span className="text-[#c9a227]">Nuqta</span> for Business
        </h2>
        <p className="text-xl text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          One platform to recognize, reward, and retain your best talent
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Gift,
              title: 'Instant Rewards',
              desc: 'Send Nuqta coins instantly to any employee\'s phone',
              color: 'emerald',
            },
            {
              icon: Target,
              title: '1,000+ Merchants',
              desc: 'Employees choose where to spend across UAE\'s best brands',
              color: 'blue',
            },
            {
              icon: BarChart3,
              title: 'Full Analytics',
              desc: 'Track engagement, redemption, and program ROI in real-time',
              color: 'purple',
            },
          ].map((item) => (
            <div key={item.title} className={`bg-${item.color}-500/10 border border-${item.color}-500/30 rounded-xl p-6 text-center`}>
              <item.icon className={`w-12 h-12 text-${item.color}-400 mx-auto mb-4`} />
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-black text-[#c9a227] mb-6 text-center">How It Works</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { step: 1, text: 'HR allocates coins to employees' },
              { step: 2, text: 'Employee receives instant notification' },
              { step: 3, text: 'Spends anywhere in Nuqta network' },
              { step: 4, text: 'HR tracks engagement & ROI' },
            ].map((item, index) => (
              <div key={item.step} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#c9a227] rounded-full flex items-center justify-center text-black font-black text-xl">
                    {item.step}
                  </div>
                  <p className="text-sm text-slate-300 mt-2 text-center max-w-[150px]">{item.text}</p>
                </div>
                {index < 3 && <ChevronRight className="w-6 h-6 text-slate-600 hidden md:block" />}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            View Programs
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 4: PROGRAMS
// ============================================
function ProgramsSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] p-8">
      <div className="max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          Programs for Every <span className="text-[#c9a227]">Need</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Employee Recognition */}
          <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-2 border-emerald-500/30 rounded-2xl p-8">
            <Award className="w-12 h-12 text-emerald-400 mb-4" />
            <h3 className="text-2xl font-black text-emerald-400 mb-4">Employee Recognition</h3>
            <ul className="space-y-3 mb-6">
              {[
                'Peer-to-peer recognition',
                'Manager spot bonuses',
                'Achievement milestones',
                'Birthday & anniversary rewards',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-500">Perfect for: Daily recognition & team morale</p>
          </div>

          {/* Performance Incentives */}
          <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-2 border-blue-500/30 rounded-2xl p-8">
            <TrendingUp className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-black text-blue-400 mb-4">Performance Incentives</h3>
            <ul className="space-y-3 mb-6">
              {[
                'Sales target bonuses',
                'KPI achievement rewards',
                'Quarterly performance bonuses',
                'Innovation & idea rewards',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-500">Perfect for: Sales teams & high performers</p>
          </div>

          {/* Wellness Programs */}
          <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border-2 border-pink-500/30 rounded-2xl p-8">
            <Heart className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-2xl font-black text-pink-400 mb-4">Wellness & Benefits</h3>
            <ul className="space-y-3 mb-6">
              {[
                'Fitness & gym rewards',
                'Mental health day coins',
                'Healthy meal subsidies',
                'Wellness challenge prizes',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-pink-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-500">Perfect for: Employee wellbeing initiatives</p>
          </div>

          {/* Corporate Gifting */}
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-2 border-amber-500/30 rounded-2xl p-8">
            <Gift className="w-12 h-12 text-amber-400 mb-4" />
            <h3 className="text-2xl font-black text-amber-400 mb-4">Corporate Gifting</h3>
            <ul className="space-y-3 mb-6">
              {[
                'Eid & holiday gifts',
                'Client appreciation',
                'New joiner welcome packs',
                'Retirement & farewell gifts',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-amber-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-500">Perfect for: Special occasions & milestones</p>
          </div>
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
// SLIDE 5: BENEFITS
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
            <h3 className="text-2xl font-black text-purple-400 mb-4">For HR Teams</h3>
            <ul className="space-y-3">
              {[
                '80% less admin time',
                'Instant reward delivery',
                'Budget control & visibility',
                'Zero procurement hassle',
                'Real-time engagement data',
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
                'Freedom to choose rewards',
                '1,000+ redemption options',
                'Mobile-first experience',
                'Rewards never expire',
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
                '100% utilization (no waste)',
                'Predictable monthly costs',
                'Bulk purchase discounts',
                'Detailed expense reporting',
                'Tax-efficient structure',
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
            See ROI
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 6: ROI
// ============================================
function ROISlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-emerald-900/20 p-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          Proven <span className="text-[#c9a227]">ROI</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { stat: '23%', label: 'Higher Engagement', desc: 'vs traditional rewards' },
            { stat: '31%', label: 'Lower Turnover', desc: 'in recognized employees' },
            { stat: '100%', label: 'Redemption Rate', desc: 'zero wasted budget' },
            { stat: '4.8x', label: 'Program ROI', desc: 'average client return' },
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
          <h3 className="text-2xl font-black text-white mb-6 text-center">Traditional vs Nuqta</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-red-400 mb-4">Traditional Gift Cards</h4>
              <ul className="space-y-2">
                {[
                  { item: 'Utilization', value: '35%', bad: true },
                  { item: 'Delivery time', value: '3-4 weeks', bad: true },
                  { item: 'Admin hours/month', value: '20+ hours', bad: true },
                  { item: 'Employee satisfaction', value: '52%', bad: true },
                ].map((row) => (
                  <li key={row.item} className="flex justify-between text-sm">
                    <span className="text-slate-400">{row.item}</span>
                    <span className="text-red-400 font-semibold">{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nuqta */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-emerald-400 mb-4">Nuqta for Business</h4>
              <ul className="space-y-2">
                {[
                  { item: 'Utilization', value: '100%' },
                  { item: 'Delivery time', value: 'Instant' },
                  { item: 'Admin hours/month', value: '<2 hours' },
                  { item: 'Employee satisfaction', value: '94%' },
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

        <div className="text-center">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            Implementation
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 7: IMPLEMENTATION
// ============================================
function ImplementationSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] p-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          Simple <span className="text-[#c9a227]">Implementation</span>
        </h2>

        <div className="space-y-6 mb-12">
          {[
            {
              week: 'Week 1',
              title: 'Setup & Integration',
              tasks: ['Corporate account creation', 'HR admin onboarding', 'Employee data import', 'Budget allocation'],
            },
            {
              week: 'Week 2',
              title: 'Program Design',
              tasks: ['Recognition rules setup', 'Approval workflows', 'Custom branding (optional)', 'Test transactions'],
            },
            {
              week: 'Week 3',
              title: 'Employee Rollout',
              tasks: ['Employee communication', 'App download campaign', 'Training sessions', 'Launch celebration'],
            },
            {
              week: 'Ongoing',
              title: 'Support & Optimization',
              tasks: ['Dedicated account manager', 'Monthly performance reviews', 'Program optimization', '24/7 support'],
            },
          ].map((phase, index) => (
            <div key={phase.week} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#c9a227] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-black">{index + 1}</span>
                </div>
                {index < 3 && <div className="w-0.5 h-full bg-[#c9a227]/30 mt-2" />}
              </div>
              <div className="flex-1 bg-slate-800/50 rounded-xl p-6 mb-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#c9a227] font-semibold">{phase.week}</span>
                  <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {phase.tasks.map((task) => (
                    <div key={task} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      {task}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
          Simple, Transparent <span className="text-[#c9a227]">Pricing</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Starter */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
            <p className="text-slate-400 text-sm mb-6">For small teams</p>
            <div className="text-4xl font-black text-white mb-1">
              AED 10<span className="text-lg font-normal text-slate-400">/employee/month</span>
            </div>
            <p className="text-sm text-slate-500 mb-6">50-200 employees</p>
            <ul className="space-y-3 mb-8">
              {[
                '100 coins/employee/month',
                'Basic recognition tools',
                'Standard dashboard',
                'Email support',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-slate-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Professional */}
          <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 rounded-2xl p-8 border-2 border-[#c9a227] relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c9a227] text-black text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-bold text-[#c9a227] mb-2">Professional</h3>
            <p className="text-slate-400 text-sm mb-6">For growing companies</p>
            <div className="text-4xl font-black text-white mb-1">
              AED 8<span className="text-lg font-normal text-slate-400">/employee/month</span>
            </div>
            <p className="text-sm text-slate-500 mb-6">200-500 employees</p>
            <ul className="space-y-3 mb-8">
              {[
                '150 coins/employee/month',
                'Full recognition suite',
                'Advanced analytics',
                'API integration',
                'Priority support',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a227]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-slate-400 text-sm mb-6">For large organizations</p>
            <div className="text-4xl font-black text-white mb-1">
              Custom
            </div>
            <p className="text-sm text-slate-500 mb-6">500+ employees</p>
            <ul className="space-y-3 mb-8">
              {[
                'Custom coin allocation',
                'White-label option',
                'HRIS integration',
                'Dedicated success manager',
                'Custom reporting',
                'SLA guarantee',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-slate-800/30 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">No Hidden Costs</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {['No setup fees', 'No minimum term', 'No redemption fees', 'Cancel anytime'].map((item) => (
              <div key={item} className="text-sm text-slate-400">{item}</div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            See Use Cases
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 9: USE CASES
// ============================================
function UseCasesSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] p-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          Perfect For <span className="text-[#c9a227]">Your Industry</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              industry: 'Technology',
              company: 'Tech Startup (200 employees)',
              useCase: 'Peer recognition for sprint completion, innovation rewards, quarterly bonuses',
              result: '40% increase in peer recognition',
            },
            {
              industry: 'Hospitality',
              company: 'Hotel Chain (500 employees)',
              useCase: 'Guest satisfaction bonuses, shift incentives, seasonal rewards',
              result: '25% improvement in guest scores',
            },
            {
              industry: 'Retail',
              company: 'Fashion Retailer (300 employees)',
              useCase: 'Sales targets, customer service awards, store performance',
              result: '18% sales increase in incentivized team',
            },
            {
              industry: 'Healthcare',
              company: 'Medical Center (400 employees)',
              useCase: 'Patient care recognition, overtime appreciation, wellness programs',
              result: '30% reduction in turnover',
            },
          ].map((useCase) => (
            <div key={useCase.industry} className="bg-slate-800/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-[#c9a227]" />
                <div>
                  <h3 className="font-bold text-white">{useCase.industry}</h3>
                  <p className="text-xs text-slate-500">{useCase.company}</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 mb-4">{useCase.useCase}</p>
              <div className="bg-emerald-500/10 rounded-lg p-3">
                <p className="text-sm text-emerald-400 font-semibold">{useCase.result}</p>
              </div>
            </div>
          ))}
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
        <Zap className="w-16 h-16 text-[#c9a227] mx-auto mb-8" />

        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
          Ready to Transform
          <br />
          <span className="text-[#c9a227]">Employee Rewards?</span>
        </h2>

        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Join leading UAE companies using Nuqta to engage, recognize, and retain their best talent.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:corporate@nuqtaapp.com?subject=Corporate Partnership Inquiry"
            className="inline-flex items-center justify-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            Schedule Demo
          </a>
          <a
            href="/contracts"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#c9a227] text-[#c9a227] font-bold px-8 py-4 rounded-full hover:bg-[#c9a227]/10 transition-colors"
          >
            View Contract Templates
          </a>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-6 inline-block">
          <p className="text-slate-400 mb-2">Contact Us</p>
          <p className="text-white font-semibold">corporate@nuqtaapp.com</p>
          <p className="text-slate-500 text-sm mt-1">Response within 24 hours</p>
        </div>
      </div>
    </div>
  );
}
