'use client';

import React, { useState } from 'react';
import {
  GraduationCap,
  Users,
  Smartphone,
  Gift,
  TrendingUp,
  Target,
  CheckCircle2,
  ChevronRight,
  Zap,
  Star,
  DollarSign,
  Building2,
  Calendar,
  MapPin
} from 'lucide-react';

export default function UniversityDeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 'cover', title: 'Cover' },
    { id: 'opportunity', title: 'Opportunity' },
    { id: 'solution', title: 'Solution' },
    { id: 'program', title: 'Program' },
    { id: 'benefits', title: 'Benefits' },
    { id: 'activation', title: 'Activation' },
    { id: 'success', title: 'Success Metrics' },
    { id: 'partners', title: 'Partners' },
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
        {currentSlide === 1 && <OpportunitySlide onNext={() => setCurrentSlide(2)} />}
        {currentSlide === 2 && <SolutionSlide onNext={() => setCurrentSlide(3)} />}
        {currentSlide === 3 && <ProgramSlide onNext={() => setCurrentSlide(4)} />}
        {currentSlide === 4 && <BenefitsSlide onNext={() => setCurrentSlide(5)} />}
        {currentSlide === 5 && <ActivationSlide onNext={() => setCurrentSlide(6)} />}
        {currentSlide === 6 && <SuccessSlide onNext={() => setCurrentSlide(7)} />}
        {currentSlide === 7 && <PartnersSlide onNext={() => setCurrentSlide(8)} />}
        {currentSlide === 8 && <CTASlide />}
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-purple-900/20 to-[#0a1628] p-8">
      <div className="max-w-4xl text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full mb-6">
            <GraduationCap className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-semibold">University Partnership</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-7xl font-black text-white mb-6">
          Rewards for
          <span className="text-[#c9a227]"> Students</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Exclusive savings program for university students across UAE
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-4 px-6">
            <div className="text-3xl font-black text-[#c9a227]">200K+</div>
            <div className="text-slate-400 text-sm">UAE University Students</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 px-6">
            <div className="text-3xl font-black text-[#c9a227]">AED 800</div>
            <div className="text-slate-400 text-sm">Avg Monthly Spend</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 px-6">
            <div className="text-3xl font-black text-[#c9a227]">75%</div>
            <div className="text-slate-400 text-sm">App Adoption Rate</div>
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
// SLIDE 2: OPPORTUNITY
// ============================================
function OpportunitySlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-blue-900/20 p-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          The Student <span className="text-[#c9a227]">Opportunity</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Problem */}
          <div className="bg-slate-800/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Student Pain Points</h3>
            <div className="space-y-4">
              {[
                { issue: 'Limited budgets', detail: 'AED 800 avg monthly discretionary' },
                { issue: 'No loyalty perks', detail: 'Most programs target older demographics' },
                { issue: 'Scattered deals', detail: 'Have to hunt across multiple apps' },
                { issue: 'No student-specific offers', detail: 'Generic promotions don\'t resonate' },
              ].map((item) => (
                <div key={item.issue} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2" />
                  <div>
                    <p className="text-white font-semibold">{item.issue}</p>
                    <p className="text-sm text-slate-400">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Opportunity */}
          <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 rounded-2xl p-8 border border-[#c9a227]/30">
            <h3 className="text-xl font-bold text-[#c9a227] mb-6">Why Students Matter</h3>
            <div className="space-y-4">
              {[
                { point: 'Early habit formation', detail: 'Capture loyalty before competitors' },
                { point: 'High app adoption', detail: '95% smartphone usage, 4+ hours daily' },
                { point: 'Social amplification', detail: 'Viral sharing within friend groups' },
                { point: 'Lifetime value', detail: 'Students become professionals' },
              ].map((item) => (
                <div key={item.point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c9a227] mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">{item.point}</p>
                    <p className="text-sm text-slate-400">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { stat: '200,000+', label: 'University students in UAE' },
            { stat: '35', label: 'Universities & colleges' },
            { stat: 'AED 160M', label: 'Monthly student spending' },
            { stat: '18-24', label: 'Prime demographic age' },
          ].map((item) => (
            <div key={item.label} className="bg-slate-800/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-[#c9a227]">{item.stat}</div>
              <div className="text-xs text-slate-400">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            Our Solution
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] p-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 text-center">
          Nuqta <span className="text-[#c9a227]">Student Program</span>
        </h2>
        <p className="text-xl text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          Exclusive rewards and savings designed specifically for university students
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Smartphone,
              title: 'Student App',
              desc: 'Verified student accounts with .edu email or student ID',
              features: ['Student-only deals', 'Campus merchant map', 'Friend referrals'],
              color: 'purple',
            },
            {
              icon: Gift,
              title: 'Exclusive Perks',
              desc: 'Higher rewards and student-only offers',
              features: ['2x base coins', 'Flash deals', 'Birthday bonuses'],
              color: 'emerald',
            },
            {
              icon: Users,
              title: 'Campus Community',
              desc: 'Social features for university life',
              features: ['Study group discounts', 'Event perks', 'Leaderboards'],
              color: 'blue',
            },
          ].map((item) => (
            <div key={item.title} className={`bg-${item.color}-500/10 border border-${item.color}-500/30 rounded-2xl p-6`}>
              <item.icon className={`w-10 h-10 text-${item.color}-400 mb-4`} />
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{item.desc}</p>
              <ul className="space-y-2">
                {item.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 className={`w-4 h-4 text-${item.color}-400`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            Program Details
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 4: PROGRAM
// ============================================
function ProgramSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-purple-900/20 p-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          Partnership <span className="text-[#c9a227]">Program</span>
        </h2>

        {/* Partnership Models */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Basic */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">Campus Partner</h3>
            <p className="text-slate-400 text-sm mb-6">Standard university partnership</p>

            <div className="text-3xl font-black text-white mb-6">
              FREE
            </div>

            <ul className="space-y-3 mb-6">
              {[
                'Student verification via .edu email',
                'Campus ambassador program',
                'Quarterly student engagement reports',
                'Standard promotional materials',
                'Access to 1,000+ merchants',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-slate-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Premium */}
          <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 rounded-2xl p-8 border-2 border-[#c9a227] relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c9a227] text-black text-xs font-bold px-3 py-1 rounded-full">
              RECOMMENDED
            </div>
            <h3 className="text-xl font-bold text-[#c9a227] mb-2">Premium Partner</h3>
            <p className="text-slate-400 text-sm mb-6">Enhanced partnership with exclusives</p>

            <div className="text-3xl font-black text-white mb-1">
              AED 5,000<span className="text-lg font-normal text-slate-400">/semester</span>
            </div>
            <p className="text-xs text-slate-500 mb-6">or AED 8,000/year</p>

            <ul className="space-y-3 mb-6">
              {[
                'Everything in Campus Partner +',
                'Custom university landing page',
                'Dedicated student success manager',
                'On-campus activation events',
                'Exclusive university-only deals',
                'Integration with student ID system',
                'Co-branded promotional campaigns',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a227]" />
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] p-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          Benefits for <span className="text-[#c9a227]">Everyone</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* For University */}
          <div className="bg-slate-800/50 rounded-2xl p-8">
            <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">For the University</h3>
            <ul className="space-y-3">
              {[
                'Enhance student experience',
                'Attract prospective students',
                'Modern campus amenity',
                'Data on student preferences',
                'Alumni engagement potential',
                'Zero cost (basic partner)',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* For Students */}
          <div className="bg-slate-800/50 rounded-2xl p-8">
            <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">For Students</h3>
            <ul className="space-y-3">
              {[
                'Save money on daily purchases',
                '2x rewards vs regular users',
                'Student-exclusive deals',
                'Discover new places',
                'Compete with friends',
                'Real value from day one',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* For Merchants */}
          <div className="bg-slate-800/50 rounded-2xl p-8">
            <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <DollarSign className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">For Campus Merchants</h3>
            <ul className="space-y-3">
              {[
                'Access student audience',
                'Increase foot traffic',
                'Compete with off-campus',
                'Loyalty without complexity',
                'Analytics on student behavior',
                'Marketing support included',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
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
            Activation Plan
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 6: ACTIVATION
// ============================================
function ActivationSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-emerald-900/20 p-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          Campus <span className="text-[#c9a227]">Activation</span>
        </h2>

        {/* Timeline */}
        <div className="space-y-6 mb-12">
          {[
            {
              week: 'Week 1-2',
              title: 'Setup & Integration',
              tasks: ['University agreement signed', 'Student verification setup', 'Campus merchant outreach', 'Ambassador recruitment'],
            },
            {
              week: 'Week 3',
              title: 'Launch Prep',
              tasks: ['Ambassador training', 'Marketing materials distribution', 'Social media campaign prep', 'Test transactions'],
            },
            {
              week: 'Week 4',
              title: 'Launch Week',
              tasks: ['Campus booth activation', 'Welcome bonus for early adopters', 'Social media blitz', 'Ambassador incentive kickoff'],
            },
            {
              week: 'Ongoing',
              title: 'Sustained Engagement',
              tasks: ['Monthly campus events', 'Semester challenges', 'New merchant additions', 'Referral campaigns'],
            },
          ].map((phase, index) => (
            <div key={phase.week} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#c9a227] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-black">{index + 1}</span>
                </div>
                {index < 3 && <div className="w-0.5 h-full bg-[#c9a227]/30 mt-2" />}
              </div>
              <div className="flex-1 bg-slate-800/50 rounded-xl p-6 mb-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#c9a227] font-semibold">{phase.week}</span>
                  <h3 className="text-lg font-bold text-white">{phase.title}</h3>
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
            Success Metrics
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 7: SUCCESS METRICS
// ============================================
function SuccessSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] p-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          Success <span className="text-[#c9a227]">Metrics</span>
        </h2>

        {/* KPI Targets */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { metric: 'Student Adoption', target: '30%', desc: 'of student body', timeframe: 'Year 1' },
            { metric: 'Monthly Active', target: '50%', desc: 'of registered', timeframe: 'Ongoing' },
            { metric: 'Transactions/User', target: '8+', desc: 'per month', timeframe: 'By Month 3' },
            { metric: 'Referral Rate', target: '25%', desc: 'students refer friends', timeframe: 'Ongoing' },
          ].map((kpi) => (
            <div key={kpi.metric} className="bg-slate-800/50 rounded-xl p-6 text-center">
              <div className="text-4xl font-black text-[#c9a227] mb-2">{kpi.target}</div>
              <div className="text-white font-semibold">{kpi.metric}</div>
              <div className="text-sm text-slate-400">{kpi.desc}</div>
              <div className="text-xs text-slate-500 mt-2">{kpi.timeframe}</div>
            </div>
          ))}
        </div>

        {/* Reporting */}
        <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border border-[#c9a227]/30 rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-bold text-[#c9a227] mb-6">What You&apos;ll Receive</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Calendar className="w-8 h-8 text-[#c9a227] mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2">Monthly Reports</h4>
              <p className="text-sm text-slate-400">Student adoption, engagement, top merchants</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-[#c9a227] mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2">Semester Analysis</h4>
              <p className="text-sm text-slate-400">Trends, growth, category preferences</p>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 text-[#c9a227] mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2">Benchmark Data</h4>
              <p className="text-sm text-slate-400">Comparison with other campuses</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            Current Partners
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 8: PARTNERS
// ============================================
function PartnersSlide({ onNext }: SlideProps) {
  const universities = [
    { name: 'American University in Dubai', location: 'Dubai', students: '3,000+', status: 'In Discussion' },
    { name: 'University of Dubai', location: 'Dubai', students: '1,500+', status: 'In Discussion' },
    { name: 'Heriot-Watt University Dubai', location: 'Dubai', students: '4,000+', status: 'Target' },
    { name: 'Middlesex University Dubai', location: 'Dubai', students: '3,500+', status: 'Target' },
    { name: 'Zayed University', location: 'Dubai/Abu Dhabi', students: '10,000+', status: 'Target' },
    { name: 'UAE University', location: 'Al Ain', students: '14,000+', status: 'Target' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-blue-900/20 p-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          Target <span className="text-[#c9a227]">Universities</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {universities.map((uni) => (
            <div key={uni.name} className="bg-slate-800/50 rounded-xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white">{uni.name}</h4>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {uni.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {uni.students}
                  </span>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                uni.status === 'In Discussion'
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'bg-blue-500/20 text-blue-400'
              }`}>
                {uni.status}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/30 rounded-xl p-6 text-center mb-12">
          <p className="text-slate-400 mb-2">Launch Target</p>
          <p className="text-3xl font-black text-white">5 Universities by H1</p>
          <p className="text-sm text-[#c9a227]">10,000+ verified student users</p>
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
// SLIDE 9: CTA
// ============================================
function CTASlide() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#c9a227]/10 to-[#0a1628] p-8">
      <div className="max-w-4xl text-center">
        <GraduationCap className="w-16 h-16 text-[#c9a227] mx-auto mb-8" />

        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
          Ready to Give Your
          <br />
          <span className="text-[#c9a227]">Students More?</span>
        </h2>

        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Join leading UAE universities in offering exclusive rewards to your student community.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:universities@nuqtaapp.com?subject=University Partnership Inquiry"
            className="inline-flex items-center justify-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            Schedule a Meeting
          </a>
          <a
            href="/business-playbook"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#c9a227] text-[#c9a227] font-bold px-8 py-4 rounded-full hover:bg-[#c9a227]/10 transition-colors"
          >
            Learn More
          </a>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-6 inline-block">
          <p className="text-slate-400 mb-2">Contact Our University Team</p>
          <p className="text-white font-semibold">universities@nuqtaapp.com</p>
          <p className="text-slate-500 text-sm mt-1">Response within 24 hours</p>
        </div>
      </div>
    </div>
  );
}
