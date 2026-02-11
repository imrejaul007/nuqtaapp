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
  MapPin,
  Crown,
  Sparkles,
  Heart,
  Coffee,
  Scissors,
  Dumbbell,
  ShoppingBag,
  Handshake
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function UniversityDeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 'cover', title: 'Cover' },
    { id: 'opportunity', title: 'Opportunity' },
    { id: 'offer', title: 'The Offer' },
    { id: 'value', title: 'Value' },
    { id: 'partners', title: 'Partners' },
    { id: 'benefits', title: 'Benefits' },
    { id: 'how-it-works', title: 'How It Works' },
    { id: 'target', title: 'Target Unis' },
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
        {currentSlide === 2 && <OfferSlide onNext={() => setCurrentSlide(3)} />}
        {currentSlide === 3 && <ValueSlide onNext={() => setCurrentSlide(4)} />}
        {currentSlide === 4 && <PartnersSlide onNext={() => setCurrentSlide(5)} />}
        {currentSlide === 5 && <BenefitsSlide onNext={() => setCurrentSlide(6)} />}
        {currentSlide === 6 && <HowItWorksSlide onNext={() => setCurrentSlide(7)} />}
        {currentSlide === 7 && <TargetSlide onNext={() => setCurrentSlide(8)} />}
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
          Give Your Students
          <span className="text-[#c9a227]"> Nuqta+</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Premium lifestyle membership for every student
          <br />
          <span className="text-[#c9a227] font-bold">100% FREE for your university</span>
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-4 px-6">
            <div className="text-3xl font-black text-[#c9a227]">AED 0</div>
            <div className="text-slate-400 text-sm">Cost to University</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 px-6">
            <div className="text-3xl font-black text-emerald-400">AED 1,600</div>
            <div className="text-slate-400 text-sm">Value Per Student</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 px-6">
            <div className="text-3xl font-black text-[#c9a227]">16</div>
            <div className="text-slate-400 text-sm">Premium Partners</div>
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
          Why Students <span className="text-[#c9a227]">Matter</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Student Reality */}
          <div className="bg-slate-800/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Student Life Today</h3>
            <div className="space-y-4">
              {[
                { issue: 'Tight budgets', detail: 'Every dirham counts for students' },
                { issue: 'No special perks', detail: 'Most loyalty programs ignore young users' },
                { issue: 'High spending habits', detail: 'Cafes, food, wellness, fashion daily' },
                { issue: 'Brand loyal early', detail: 'Habits formed now last decades' },
              ].map((item) => (
                <div key={item.issue} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                  <div>
                    <p className="text-white font-semibold">{item.issue}</p>
                    <p className="text-sm text-slate-400">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* University Opportunity */}
          <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 rounded-2xl p-8 border border-[#c9a227]/30">
            <h3 className="text-xl font-bold text-[#c9a227] mb-6">Your Opportunity</h3>
            <div className="space-y-4">
              {[
                { point: 'Differentiate your university', detail: 'Premium perk no other campus offers' },
                { point: 'Boost student satisfaction', detail: 'Real value they use every week' },
                { point: 'Zero cost to you', detail: 'We give this to you 100% free' },
                { point: 'Marketing highlight', detail: '"Students get AED 1,600 in benefits"' },
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
            { stat: '200,000+', label: 'UAE university students' },
            { stat: '35+', label: 'Universities & colleges' },
            { stat: '18-25', label: 'Prime demographic' },
            { stat: 'Viral', label: 'Student networks' },
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
            See Our Offer
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 3: THE OFFER
// ============================================
function OfferSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-[#c9a227]/20 p-8">
      <div className="max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-4 py-2 rounded-full mb-6">
            <Gift className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">Zero Cost Partnership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            We Give You <span className="text-[#c9a227]">Nuqta+ Free</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Full premium membership for every student at your university - at no cost to you or them
          </p>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-black text-white mb-6">The Deal</h3>
              <div className="space-y-4">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                  <div className="text-emerald-400 font-bold mb-1">You Get</div>
                  <p className="text-slate-300">Free Nuqta+ for ALL your students (worth AED 99/month retail)</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                  <div className="text-blue-400 font-bold mb-1">We Get</div>
                  <p className="text-slate-300">Access to your student body as Nuqta users</p>
                </div>
              </div>
              <p className="text-slate-500 text-sm mt-4">
                That&apos;s it. No fees, no catches. We want students as users, you want happy students.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#c9a227]/20 to-amber-500/10 rounded-xl p-8 text-center">
              <div className="text-sm text-slate-400 mb-2">RETAIL PRICE</div>
              <div className="text-4xl font-black text-slate-500 line-through mb-4">AED 99/month</div>
              <div className="text-sm text-emerald-400 mb-2">YOUR STUDENT PRICE</div>
              <div className="text-7xl font-black text-emerald-400">FREE</div>
              <div className="text-slate-400 mt-2">per student, forever</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            See What Students Get
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
          Each Student Gets <span className="text-[#c9a227]">AED 1,600</span>
        </h2>

        <div className="bg-slate-800/50 rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-4 gap-6 text-center mb-8">
            <div className="bg-slate-700/50 rounded-xl p-6">
              <Crown className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
              <div className="text-3xl font-black text-[#c9a227]">16</div>
              <div className="text-slate-300 text-sm">Premium Partners</div>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-6">
              <Gift className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
              <div className="text-3xl font-black text-[#c9a227]">AED 100</div>
              <div className="text-slate-300 text-sm">Coins Per Partner</div>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-6">
              <Sparkles className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <div className="text-3xl font-black text-emerald-400">=</div>
              <div className="text-slate-300 text-sm">Total Value</div>
            </div>
            <div className="bg-emerald-500/20 rounded-xl p-6 border-2 border-emerald-500">
              <Star className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <div className="text-3xl font-black text-emerald-400">AED 1,600</div>
              <div className="text-emerald-300 font-semibold text-sm">Per Student/Year</div>
            </div>
          </div>

          <div className="text-center bg-[#c9a227]/10 rounded-xl p-6">
            <p className="text-lg text-slate-300 mb-2">
              Your cost: <span className="text-emerald-400 font-black text-2xl">AED 0</span>
            </p>
            <p className="text-lg text-slate-300">
              Value to students: <span className="text-[#c9a227] font-black text-2xl">AED 1,600 each</span>
            </p>
            <p className="text-purple-400 font-bold mt-4 text-xl">
              Infinite ROI on student satisfaction
            </p>
          </div>
        </div>

        <div className="bg-slate-800/30 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-bold text-white text-center mb-4">Example: 10,000 Students</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <div className="text-sm text-slate-400 mb-1">Your Investment</div>
              <div className="text-2xl font-black text-white">AED 0</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <div className="text-sm text-slate-400 mb-1">Total Value Delivered</div>
              <div className="text-2xl font-black text-emerald-400">AED 16M</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <div className="text-sm text-slate-400 mb-1">Marketing Headline</div>
              <div className="text-lg font-black text-[#c9a227]">&quot;AED 16M in student perks&quot;</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            See the Partners
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
    { icon: Coffee, name: 'Cafes', example: 'Daily coffee runs', color: 'amber' },
    { icon: Scissors, name: 'Beauty', example: 'Haircuts, grooming', color: 'pink' },
    { icon: Dumbbell, name: 'Fitness', example: 'Gym, wellness', color: 'green' },
    { icon: ShoppingBag, name: 'Fashion', example: 'Clothing, accessories', color: 'purple' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] p-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 text-center">
          16 Premium <span className="text-[#c9a227]">Partners</span>
        </h2>
        <p className="text-xl text-slate-400 text-center mb-12">
          Brands students actually use every week
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center"
            >
              <cat.icon className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
              <div className="text-white font-bold">{cat.name}</div>
              <div className="text-xs text-slate-400">{cat.example}</div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-black text-[#c9a227] mb-6 text-center">Confirmed Partners</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Al Mutlaib', category: 'Premium Dining' },
              { name: 'Whiff Theory', category: 'Perfumes' },
              { name: 'W Line', category: 'Fashion' },
              { name: 'YB Lounge & Nilim', category: '227 Beauty Services' },
              { name: '10 Stone', category: 'Jewelry' },
              { name: 'Laundristan & Z Wash', category: 'Laundry' },
            ].map((partner) => (
              <div key={partner.name} className="bg-slate-700/50 rounded-lg p-4">
                <div className="font-bold text-white">{partner.name}</div>
                <div className="text-xs text-slate-400">{partner.category}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-6">
            + 10 more partners across dining, wellness, fitness & lifestyle
          </p>
        </div>

        <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-purple-400 font-bold">Student-Relevant Categories</div>
              <div className="text-slate-300 text-sm">Cafes, food, beauty, fashion, fitness - things students actually spend on weekly</div>
            </div>
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
// SLIDE 6: BENEFITS
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
            <h3 className="text-xl font-bold text-purple-400 mb-4">For Your University</h3>
            <ul className="space-y-3">
              {[
                '100% free - zero cost',
                'Differentiate from other unis',
                'Boost student satisfaction',
                'Great for prospective students',
                'Modern campus benefit',
                'No admin required',
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
              <Heart className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">For Your Students</h3>
            <ul className="space-y-3">
              {[
                'AED 1,600 in free benefits',
                '16 premium lifestyle partners',
                'AED 100 coins at each brand',
                'Real savings every week',
                'Mobile app access',
                'Exclusive student perks',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Win-Win */}
          <div className="bg-slate-800/50 rounded-2xl p-8">
            <div className="w-14 h-14 bg-[#c9a227]/20 rounded-xl flex items-center justify-center mb-6">
              <Handshake className="w-7 h-7 text-[#c9a227]" />
            </div>
            <h3 className="text-xl font-bold text-[#c9a227] mb-4">Why We Do This</h3>
            <ul className="space-y-3">
              {[
                'Students = future professionals',
                'Build brand loyalty early',
                'Campus = viral growth',
                'Students tell friends',
                'Lifetime customer value',
                'Everyone wins',
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
            How It Works
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 7: HOW IT WORKS
// ============================================
function HowItWorksSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-emerald-900/20 p-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
          Simple <span className="text-[#c9a227]">Setup</span>
        </h2>

        {/* Timeline */}
        <div className="space-y-6 mb-12">
          {[
            {
              step: 1,
              title: 'Sign Partnership Agreement',
              desc: 'Simple MOU - we give Nuqta+ free, you promote to students',
              icon: Building2,
            },
            {
              step: 2,
              title: 'Share Student Verification Method',
              desc: 'University email domain (.ac.ae) or student ID system',
              icon: Users,
            },
            {
              step: 3,
              title: 'We Activate Your Students',
              desc: 'Students sign up with university email → instant Nuqta+ access',
              icon: Crown,
            },
            {
              step: 4,
              title: 'Students Enjoy Premium Benefits',
              desc: 'AED 100 coins at each of 16 partners from day one',
              icon: Gift,
            },
          ].map((phase, index) => (
            <div key={phase.step} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-[#c9a227] rounded-full flex items-center justify-center flex-shrink-0">
                  <phase.icon className="w-7 h-7 text-black" />
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

        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 justify-center">
            <Zap className="w-6 h-6 text-emerald-400" />
            <span className="text-slate-300">Total setup time: 1 week from agreement to student access</span>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            Target Universities
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SLIDE 8: TARGET UNIVERSITIES
// ============================================
function TargetSlide({ onNext }: SlideProps) {
  const universities = [
    { name: 'UAE University', location: 'Al Ain', students: '14,000+', priority: 'Tier 1' },
    { name: 'American University of Sharjah', location: 'Sharjah', students: '6,000+', priority: 'Tier 1' },
    { name: 'Zayed University', location: 'Dubai/Abu Dhabi', students: '10,000+', priority: 'Tier 1' },
    { name: 'Khalifa University', location: 'Abu Dhabi', students: '3,000+', priority: 'Tier 1' },
    { name: 'American University in Dubai', location: 'Dubai', students: '3,000+', priority: 'Tier 2' },
    { name: 'Heriot-Watt University Dubai', location: 'Dubai', students: '4,000+', priority: 'Tier 2' },
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
                uni.priority === 'Tier 1'
                  ? 'bg-[#c9a227]/20 text-[#c9a227]'
                  : 'bg-blue-500/20 text-blue-400'
              }`}>
                {uni.priority}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border border-[#c9a227]/30 rounded-xl p-6 text-center mb-8">
          <p className="text-slate-400 mb-2">Partnership Goal</p>
          <p className="text-3xl font-black text-white">5 Universities → 40,000+ Students</p>
          <p className="text-sm text-[#c9a227] mt-2">AED 64M in delivered value to UAE students</p>
        </div>

        <div className="text-center">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            Let&apos;s Partner
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
          Give Your Students
          <br />
          <span className="text-[#c9a227]">AED 1,600 Free</span>
        </h2>

        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Premium Nuqta+ membership for every student
          <br />
          <span className="text-emerald-400 font-bold">Zero cost to your university</span>
        </p>

        <div className="bg-slate-800/50 rounded-2xl p-8 mb-8 max-w-md mx-auto">
          <h3 className="text-xl font-bold text-white mb-4">The Pitch to Your Students</h3>
          <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-4">
            <p className="text-[#c9a227] font-bold italic">
              &quot;As a [University Name] student, you get AED 1,600 in lifestyle benefits across 16 premium brands - cafes, fitness, beauty, fashion & more. Completely free.&quot;
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:universities@nuqtaapp.com?subject=University Partnership - Free Nuqta+ for Students"
            className="inline-flex items-center justify-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            Partner With Us
          </a>
          <a
            href="/nuqta-plus"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#c9a227] text-[#c9a227] font-bold px-8 py-4 rounded-full hover:bg-[#c9a227]/10 transition-colors"
          >
            Learn About Nuqta+
          </a>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-6 inline-block">
          <p className="text-slate-400 mb-2">Contact University Partnerships</p>
          <p className="text-white font-semibold">universities@nuqtaapp.com</p>
          <p className="text-slate-500 text-sm mt-1">Response within 24 hours</p>
        </div>
      </div>
    <GlobalFooter />
    </div>
  );
}
